(ns ^:figwheel-hooks mecca.music
  (:require
   [cljs.core.async :refer [<! timeout chan put! close!]]
   [reagent.core :as r]
   [re-frame.core :as rf :refer [subscribe dispatch]])
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]]))

(defn ^:export audio-context []
  (if js/window.AudioContext.
    (js/window.AudioContext.)
    (js/window.webkitAudioContext.)))

(defonce audiocontext (r/atom (audio-context)))

(defn ^:export current-time [context]
  (.-currentTime context))

(def lookahead 25.0)

(def schedule-ahead-time 0.1)

(defn scheduler []
  (let [next-note-time (subscribe [:next-note-time])
        current-note (subscribe [:current-note])]
    (if (< @next-note-time
         (+ schedule-ahead-time
            (current-time @audiocontext)))
      (dispatch [:schedule-note @current-note @next-note-time])
      (dispatch [:next-note]))))

(defn mario-jump []
  (let [beat (subscribe [:current-position])
        notes (subscribe [:notes])
        jump (subscribe [:mario-jump])]
    (when (and @(subscribe [:playing?])
           (zero? @jump))
      (if (< 0 (count (filter #(= (:time %) (inc @beat))
                              @notes)))
      (dispatch [:jump!])))))

(defn mario-move []
  (let [notes (subscribe [:notes])
        playing? @(subscribe [:playing?])
        now (.-currentTime @audiocontext)
        length (apply max (map #(:time %) @notes))
        started (subscribe [:play-start])
        elapsed (- (current-time @audiocontext) @started)
        beat-length (/ 60 @(subscribe [:tempo]))
        current-beat (/ elapsed beat-length)
        last-drawn-pos (subscribe [:current-position])]
    (when playing?
      (if (< length current-beat)
        (dispatch [:play-off])
        (if (< @last-drawn-pos current-beat)
          (do (dispatch [:move-mario])
            (dispatch [:advance-position])))))
    (mario-jump)))

(defn dispatch-timer-event []
  (dispatch [:tick!])
      (mario-move)
  ;(scheduler)
  )

(defonce do-timer
  (js/setInterval dispatch-timer-event 25))

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
            sounds (range 1 19)]
    (if-not (nil? (first sounds))
      (let [sound (first sounds)                   ; for Github Pages - remove the '/mecca/resources/public' to run locally
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

(defn add-semitone [rate]
  (* rate (.pow js/Math 2 (/ 1 12))))

(defn sub-semitone [rate]
  (* rate (.pow js/Math 2 (/ -1 12))))

(defn inc-rate [semis]
  (reduce add-semitone (repeat semis 1)))

(defn dec-rate [semis]
  (reduce sub-semitone (repeat semis 1)))

(defn pitch->rate [midi-num]
  (if (< 66 midi-num)
    (inc-rate (- midi-num 66))
    (dec-rate (- 68 midi-num))))

(defn play-sample [instrument pitch]
  (let [context audiocontext
        audio-buffer (:decoded-buffer (get samples instrument))
        sample-source (.createBufferSource @context)
        compressor (.createDynamicsCompressor @context)
        analyser (.createAnalyser @context)]
    (set! (.-buffer sample-source) audio-buffer)
    (.setValueAtTime
     (.-playbackRate sample-source)
     (pitch->rate pitch)
     (.-currentTime @context))
    (.connect sample-source analyser)
    (.connect sample-source (.-destination @context))
    (.start sample-source)
    sample-source))

(defn play-at [instrument pitch time]
  (let [context audiocontext
        audio-buffer (:decoded-buffer (get samples instrument))
        sample-source (.createBufferSource @context)]
    (set! (.-buffer sample-source) audio-buffer)
    (.setValueAtTime
     (.-playbackRate sample-source)
     (pitch->rate (if (< 83 pitch)
                    (- pitch 24)
                    pitch))
     time)
    (.connect sample-source (.-destination @context))
    (.start sample-source time)
    sample-source))

(defn play-section [from to]
  (let [notes (subscribe [:notes])
        now (.-currentTime @audiocontext)
        tempo (subscribe [:tempo])
        section (filter #(<= from (:time %) to) @notes)]
    (dispatch [:reset-position])
    (doall (for [{:keys [time instrument pitch]} section]
             (play-at instrument pitch (+ now (* (/ 60 @tempo) time)))))))

(defn play-measure [n]
  (play-section (- (* n 4) 4) (inc (* n 4))))

(defn play-song! []
  (let [notes (subscribe [:notes])
        now (.-currentTime @audiocontext)
        tempo (subscribe [:tempo])]
    (dispatch [:reset-position])
    (doall (for [{:keys [time instrument pitch]} @notes]
             (play-at instrument pitch (+ now (* (/ 60 @tempo) time)))))))

(defn get-bytes! [analyser freq-data]
  (.getByteFrequencyData analyser freq-data)
  freq-data)