(ns ^:figwheel-hooks mecca.music
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf :refer [subscribe dispatch]]
   [ajax.core :as ajax]
   [ajax.protocols :as protocol]
   [mecca.audio.scale :as scale]
   [mecca.audio.synthesis :as synthesis]
   [mecca.audio.melody :as melody]))

(defn ^:export audio-context
  "Construct an audio context in a way that works even if it's prefixed."
  []
  (if js/window.AudioContext. ; Some browsers e.g. Safari don't use the
    (js/window.AudioContext.) ; unprefixed version yet.
    (js/window.webkitAudioContext.)))

(defonce audiocontext (r/atom (audio-context)))

(def notes ["C" "C#" "D" "D#" "E" "F" "F#" "G" "G#" "A" "A#" "B"])

(def scales
  {"Pentatonic" scale/pentatonic
   "Chromatic" scale/chromatic
   "Major" scale/major
   "Minor" scale/minor
   "Harmonic Minor" scale/harmonic-minor
   "Double Harmonic Minor" scale/double-harmonic-minor})

(def basslines
  [{:name "Alberti bass" :notes [1 5 3 5] :scales ["Minor" "Major"]}
   {:name "Walking bass" :notes [1 3 4 5 7 5 4 3] :scales ["Minor" "Major"]}
   {:name "Lament" :notes [8 8 7 7 6 6 5 5] :scales ["Chromatic"]}
   {:name "Pachelbel's Canon" :notes [8 8 5 5 6 6 3 3 4 4 8 8 4 4 5 5] :scales ["Major"]}
   {:name "Doo-wop" :notes [8 8 6 6 4 4 5 5] :scales ["Major"]}
   {:name "Circle of fifths" :notes [8 8 11 11 7 7 10 10 6 6 9 9 5 5 8 8] :scales ["Major"]}
   {:name "Pop-punk" :notes [1 1 5 5 6 6 4 4] :scales ["Major"]}])

(defn root-note-midi-num []
  (let [key @(subscribe [:key])
        base-pitch (get (zipmap (into notes notes) (range 24 36)) key)
        octave @(subscribe [:octave])]
    (+ (* 12 (dec octave))
       base-pitch)))

(defn base-pitch [midi-num]
  (get notes (mod midi-num 12)))

(defn octave [midi-num]
  (dec (quot midi-num 12)))

(defn interval->midi [n]
  (let [scale-name (subscribe [:scale])
        scale-notes (get scales @scale-name)
        key @(subscribe [:key])
        base-pitch (get (zipmap (into notes notes) (range 24 36)) key)
        octave @(subscribe [:octave])]
    (if (nil? n) nil
      (+ n base-pitch))))

(defn bassline->midi-nums [v]
  (map #(interval->midi %) v))

(defn midi-num->note [midi-num]
  (str (base-pitch midi-num) (octave midi-num)))

(defn midi->freq [m]
  (* 440 (.pow js/Math 2 (/ (- m 69) 12))))

(defn ^:export current-time
  "Return the current time as recorded by the audio context."
  [context]
  (.-currentTime context))

(defn subgraph
  ([input output] {:input input :output output})
  ([singleton] (subgraph singleton singleton)))

(defn source
  "A graph of synthesis nodes without an input,
  so another graph can't connect to it."
  [node]
  (subgraph nil node))

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

(defn raw-buffer
  [generate-bit! context duration]
  (let [sample-rate 44100
        frame-count (* sample-rate duration)
        buffer (.createBuffer context 1 frame-count sample-rate)
        data (.getChannelData buffer 0)]
    (doseq [i (range frame-count)]
      (aset data i (generate-bit! i)))
    buffer))

(def buffer (memoize raw-buffer))

(defn dispatch-timer-event []
    (dispatch [:tick!]))

(defonce do-timer (js/setInterval dispatch-timer-event 200))

(defn play-noise! [start duration]
  (let [context @audiocontext
        sample-rate 44100
        frame-count (* sample-rate duration)
        buffer (.createBuffer context 1 frame-count sample-rate)
        data (.getChannelData buffer 0)
        noise (.createBufferSource @audiocontext)
        now (current-time @audiocontext)]
    (doseq [i (range frame-count)]
      (aset data i (-> (js/Math.random) (* 2.0) (- 1.0))))
    (set! (.-buffer noise) buffer)
    (.connect noise (.-destination @audiocontext))
    (.start noise (+ now start))
    (.stop noise (+ now start duration))))

(defn play-note! [midi-num start duration]
  (let [context @audiocontext
        osc (.createOscillator @audiocontext)
        now (current-time @audiocontext)
        freq (midi->freq midi-num)
        gain (.createGain @audiocontext)]
    (set! (.-type osc) "triangle")
    (set! (.. osc -frequency -value) freq)
    (.connect osc gain)
    (.connect gain (.-destination @audiocontext))
    (.start osc (+ now start))
    (.stop osc (+ now start duration))))

(defn play-bassline! []
  (let [context @audiocontext
        bassline (subscribe [:bassline])
        play-start (current-time context)
        tempo (subscribe [:tempo])
        beat-length (/ 60 @tempo)
        total-duration (* beat-length (count @bassline))]
    (dispatch [:play-on])
    (doall (for [{:keys [time pitch]} @bassline]
             (play-note! pitch (* time beat-length) beat-length)))))
