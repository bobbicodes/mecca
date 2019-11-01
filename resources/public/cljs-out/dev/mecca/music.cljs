(ns ^:figwheel-hooks mecca.music
  (:require
   [cljs.core.async :refer [<! timeout chan put! close!]]
   [re-frame.core :as rf :refer [subscribe dispatch]])
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]]))

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
        now (.-currentTime @(subscribe [:audio-context]))
        length (apply max (map #(:time %) @notes))
        started (subscribe [:play-start])
        elapsed (- now @started)
        beat-length (/ 60 @(subscribe [:tempo]))
        end-time (+ @started (* beat-length 4))
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
      (mario-move))

(defonce do-timer
  (js/setInterval dispatch-timer-event 60))

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
         @(subscribe [:audio-context]) (:buffer named-url)
         (fn [decoded-buffer]
           (put! out (assoc named-url :decoded-buffer decoded-buffer))
           (close! out))
         (fn []
           (.error js/console "Error loading file " (prn named-url))
           (close! out))))
      (close! out))
    out))

(defn buffer-source [buffer]
  (let [source (.createBufferSource @(subscribe [:audio-context]))]
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
      (let [sound (first sounds)                   ; for Github Pages - remove the '/mario-music-composer/resources/public' to run locally
            decoded-buffer (<! (get-and-decode {:url (str "/mario-music-composer/resources/public/audio/" sound ".mp3")
                                                :sound sound}))]
        (prn sound)
        (prn decoded-buffer)
        (recur (assoc result sound decoded-buffer)
               (rest sounds)))
      result)))

(defonce loading-samples
  (go
   (dispatch [:load-samples  (<! (load-samples))])
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
  (let [context (subscribe [:audio-context])
        samples (subscribe [:samples])
        audio-buffer (:decoded-buffer (get @samples instrument))
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
  (let [context (subscribe [:audio-context])
        samples (subscribe [:samples])
        audio-buffer (:decoded-buffer (get @samples instrument))
        sample-source (.createBufferSource @context)]
    (set! (.-buffer sample-source) audio-buffer)
    (.setValueAtTime
     (.-playbackRate sample-source)
     (pitch->rate pitch)
     time)
    (.connect sample-source (.-destination @context))
    (.start sample-source time)
    sample-source))

(defn delay-note [beats note]
  (update note :time #(+ beats %)))

(defn advance-note [beats note]
  (update note :time #(- % beats)))

(defn queue-section [from to]
  (let [notes (subscribe [:notes])
        started (subscribe [:play-start])
        tempo (subscribe [:tempo])
        section (filter #(<= from (:time %) to) @notes)
        advanced (map #(advance-note from %) section)]
    (doall (for [{:keys [time instrument pitch]} section]
             (play-at instrument pitch (+ @started (* (/ 60 @tempo) time)))))))

(defn play-section [from to]
  (let [notes (subscribe [:notes])
        now (.-currentTime @(subscribe [:audio-context]))
        tempo (subscribe [:tempo])
        section (filter #(<= from (:time %) to) @notes)
        advanced (map #(advance-note from %) section)]
    (doall (for [{:keys [time instrument pitch]} advanced]
             (play-at instrument pitch (+ now (* (/ 60 @tempo) time)))))))

(defn play-note []
  (let [editor-start (subscribe [:editor-beat-start])
        play-pos (if (< @editor-start 4)
                   @editor-start
                   (+ 4 @(subscribe [:editor-beat-start])))]
    (play-section (dec play-pos) (- play-pos 0.5))))

(defn play-notes [n]
  (let [editor-start (subscribe [:editor-beat-start])
        tempo (subscribe [:tempo])
        beat-length (/ 60 @(subscribe [:tempo]))
        play-pos (if (< @editor-start 4)
                   @editor-start
                   (+ 4 @(subscribe [:editor-beat-start])))]
    (play-section (dec play-pos) (+ (dec play-pos) (* n 0.5)))))

(defn play-from-here []
  (let [notes (subscribe [:notes])
        editor-start (subscribe [:editor-beat-start])
        play-pos ;(if (< @editor-start 4)
                   @editor-start
                  ; (+ 4 @(subscribe [:editor-beat-start])))
        length (apply max (map #(:time %) @notes))]
    (play-section (dec play-pos) (+ 16 play-pos))))

(defn play-song! []
  (let [notes (subscribe [:notes])
        now (.-currentTime @(subscribe [:audio-context]))
        tempo (subscribe [:tempo])]
    (dispatch [:reset-position])
    (doall (for [{:keys [time instrument pitch]} @notes]
             (play-at instrument pitch (+ now (* (/ 60 @tempo) time)))))))

(defn get-bytes! [analyser freq-data]
  (.getByteFrequencyData analyser freq-data)
  freq-data)
