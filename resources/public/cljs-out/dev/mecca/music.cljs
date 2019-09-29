(ns ^:figwheel-hooks mecca.music
  (:require
   [cljs.core.async :refer [<! timeout chan put! close!]]
   [reagent.core :as r]
   [re-frame.core :as rf :refer [subscribe dispatch]]
   [ajax.core :as ajax]
   [ajax.protocols :as protocol]
   [mecca.audio.scale :as scale]
   [mecca.audio.synthesis :as synthesis]
   [mecca.audio.melody :as melody])
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]]))

(defn ^:export audio-context
  "Construct an audio context in a way that works even if it's prefixed."
  []
  (if js/window.AudioContext. ; Some browsers e.g. Safari don't use the
    (js/window.AudioContext.) ; unprefixed version yet.
    (js/window.webkitAudioContext.)))

(defonce audiocontext (r/atom (audio-context)))

(defn ^:export current-time
  "Return the current time as recorded by the audio context."
  [context]
  (.-currentTime context))

(defn ^:export run-with
  "Convert a synth (actually a reader fn) into a concrete
  subgraph by supplying context and timing."
  [synth context at duration]
  (synth context at duration))

(defn plug [param input context at duration]
  "Plug an input into an audio parameter, accepting both
  numbers and synths."
  (if (number? input)
    (.setValueAtTime param input at)
    (-> input (run-with context at duration) :output (.connect param))))

(defn dispatch-timer-event []
    (dispatch [:tick!]))

(defonce do-timer (js/setInterval dispatch-timer-event 200))

(defn play-noise! [start duration]
  (let [context audiocontext
        sample-rate 44100
        frame-count (* sample-rate duration)
        buffer (.createBuffer @context 1 frame-count sample-rate)
        data (.getChannelData buffer 0)
        noise (.createBufferSource @context)
        now (current-time @context)]
    (doseq [i (range frame-count)]
      (aset data i (-> (js/Math.random) (* 2.0) (- 1.0))))
    (set! (.-buffer noise) buffer)
    (.connect noise (.-destination context))
    (.start noise (+ now start))
    (.stop noise (+ now start duration))))

(defn play-sample! [instrument pitch]
  (let [context audiocontext
        now (current-time @context)
        buffer (subscribe [:sample-buffer instrument])
        sample-source (.createBufferSource @context)
        playback-rate (/ pitch 2)]
    (set! (.-buffer sample-source) @buffer)
    (.setValueAtTime (.-playbackRate sample-source) playback-rate now)
     (.connect sample-source (.-destination @context))
             (.start sample-source)))

(defn subgraph
  ([input output] {:input input :output output})
  ([singleton] (subgraph singleton singleton)))

(defn ^:export gain
  "Multiply the signal by level."
  [level]
  (fn [context at duration]
    (subgraph
     (doto (.createGain context)
       (-> .-gain (plug level context at duration))))))

(defn source
  "A graph of synthesis nodes without an input,
  so another graph can't connect to it."
  [node]
  (subgraph nil node))

(defn sink
  "A graph of synthesis nodes without an output,
  so it can't connect to another graph."
  [node]
  (subgraph node nil))

(defn ^:export destination
  "The destination of the audio context i.e. the speakers."
  [context at duration]
  (sink (.-destination context)))

(defn apply-to-graph
  "Like apply, but for the node graphs synths produce."
  [f & synths]
  (fn [context at duration]
    (->> synths
         (map #(run-with % context at duration))
         (apply f))))

(defn join-in-series
  [graph1 graph2]
  (.connect (:output graph1) (:input graph2))
  (subgraph (:input graph1) (:output graph2)))

(defn ^:export connect
  "Use the output of one synth as the input to another."
  [upstream-synth downstream-synth]
  (apply-to-graph join-in-series upstream-synth downstream-synth))

(defn get-mp3 [uri callback]
  (ajax/GET uri {:response-format {:type :arraybuffer
                                   :read protocol/-body
                                   :description "audio"
                                   :content-type "audio/mpeg"}
                 :handler callback}))

(defn raw-sample
  "Play a sample addressed via a URI. Until fetching and decoding is complete, it will play silence."
  [uri]
  (let [psuedo-promise (js-obj)] ; A mutable object to close over and share between calls.
    (get-mp3 uri #(set! (.-data psuedo-promise) %)) ; GET, then deliver the data by updating the mutable object.
    (fn [context at duration]
      (source
       (let [node (doto (.createBufferSource context)
                    (.start at)
                    (.stop (+ at duration)))
             set-buffer (fn [buffer]
                          (set! (.-buffer psuedo-promise) buffer) ; Save it for later.
                          (-> node .-buffer (set! buffer)))] ; Set it on the audio node.
         (when-let [data (.-data psuedo-promise)] ; Has the ajax call returned?
           (if-let [buffer (.-buffer psuedo-promise)] ; Has the buffer been decoded?
             (set-buffer buffer) ; Already decoded, so set it.
             (.decodeAudioData context data set-buffer))) ; Decode it and then set it.
         node)))))

(def ^:export sample (memoize raw-sample))

(defn play-mp3! []
  (let [context audiocontext
        now (current-time @context)
        sample-source (.createBufferSource @context)
        set-buffer (set! (.-buffer sample-source))
        pitched (.setValueAtTime
                 (.-playbackRate sample-source)
                 0.7
                 now)
        mp3 (connect
            (sample "/resources/public/audio/1.mp3")
             destination)]
    (run-with mp3 @context now 0.5)))

(defn load-sound [named-url]
  (let [out (chan)
        req (js/XMLHttpRequest.)]
    (set! (.-responseType req) "arraybuffer")
    (set! (.-onload req) (fn [e]
                           (if (= (.-status req) 200)
                             (do (put! out (assoc named-url :buffer (.-response req)))
                                 (close! out))
                             (close! out))))
    (.open req "GET" (:url named-url) true)
    (.send req)
    out))

(defn decode [named-url]
  (let [out (chan)]
    (if (:buffer named-url)
      (do
        (.decodeAudioData
         @audiocontext (:buffer named-url)
         (fn [decoded-buffer]
           (put! out (assoc named-url :decoded-buffer decoded-buffer))
           (close! out))
         (fn []
           (.error js/console "Error loading file " (prn named-url))
           (close! out))))
      (close! out))
    out))

(defn buffer-source [buffer]
  (let [source (.createBufferSource @audiocontext)]
    (set! (.-buffer source) buffer)
    source))

(defn get-and-decode [named-url]
  (go
    (when-let [s (<! (load-sound named-url))]
      (<! (decode s)))))

(defn load-samples []
  (go-loop [result {}
            sounds (range 1 27)]
    (if-not (nil? (first sounds))
      (let [sound (first sounds)
            decoded-buffer (<! (get-and-decode {:url (str "/mecca/resources/public/audio/" sound ".mp3")
                                                :sound sound}))]
        (prn sound)
        (prn decoded-buffer)
        (recur (assoc result sound decoded-buffer)
               (rest sounds)))
      result)))

(defonce loading-samples
  (go
    (def samples (<! (load-samples)))
    (prn "Samples loaded")))

(defn pitch->rate [midi-num]
  (case midi-num
    49 0.25
    50 0.28
    51 0.31
    52 0.35
    53 0.375
    54 0.41
    55 0.46
    56 0.5
    57 0.55
    58 0.63
    59 0.7
    60 0.75
    61 0.85
    62 0.96
    63 1
    64 1.135
    65 1.28
    66 1.43
    67 1.5
    68 1.714285714285714
    69 1.8571428571428568 
    70 2))

(defn play-sample [instrument pitch]
  (let [context audiocontext
        audio-buffer (:decoded-buffer (get samples instrument))
        sample-source (.createBufferSource @context)]
    (set! (.-buffer sample-source) audio-buffer)
    (.setValueAtTime
     (.-playbackRate sample-source)
     (pitch->rate (- 77 pitch))
     (.-currentTime @context))
    (.connect sample-source (.-destination @context))
    (.start sample-source)
    sample-source))