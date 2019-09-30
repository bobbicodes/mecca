(ns ^:figwheel-hooks mecca.music
  (:require
   [cljs.core.async :refer [<! timeout chan put! close!]]
   [reagent.core :as r]
   [re-frame.core :as rf :refer [subscribe dispatch]])
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]]))

(defn ^:export audio-context []
  (if js/window.AudioContext. ; Some browsers e.g. Safari don't use the
    (js/window.AudioContext.) ; unprefixed version yet.
    (js/window.webkitAudioContext.)))

(defonce audiocontext (r/atom (audio-context)))

(defn ^:export current-time [context]
  (.-currentTime context))

(defn mario-jump? []
  (let [beat @(subscribe [:current-position])]
    (when (< 0 @(subscribe [:play-start]))
      (if (int? beat)
        (dispatch [:down!])
        (dispatch [:jump!])
        ))))

(defn song-done? []
  (let [notes (subscribe [:instruments])
        now (.-currentTime @audiocontext)
        length (apply max (map #(:time %) @notes))
        started @(subscribe [:play-start])
        elapsed (- (current-time @audiocontext) started)
        beat-length (/ 60 @(subscribe [:tempo]))
        current-beat (/ elapsed beat-length)]
      (if (< length current-beat)
        (dispatch [:play-off])
        (if (< (+ started beat-length) now)
          (dispatch [:advance-position])))
    (mario-jump?)))

(defn dispatch-timer-event []
  (dispatch [:tick!])
      (song-done?))

(defonce do-timer (js/setInterval dispatch-timer-event 150))

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
      (let [sound (first sounds)                   ; /mecca/resources/public
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
    56 0.525
    57 0.55
    58 0.63
    59 0.7
    60 0.75
    61 0.85
    62 0.96
    63 1.06
    64 1.135
    65 1.28
    66 1.43
    67 1.5
    68 1.714285714285714
    69 1.89
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

(defn play-at [instrument pitch time]
  (let [context audiocontext
        audio-buffer (:decoded-buffer (get samples instrument))
        sample-source (.createBufferSource @context)]
    (set! (.-buffer sample-source) audio-buffer)
    (.setValueAtTime
     (.-playbackRate sample-source)
     (pitch->rate pitch)
     time)
    (.connect sample-source (.-destination @context))
    (.start sample-source time)
    sample-source))

(def lookahead 25.0)

(def schedule-ahead-time 0.1)

(defn play-song! []
  (let [notes (subscribe [:instruments])
        now (.-currentTime @audiocontext)
        tempo (subscribe [:tempo])]
    (dispatch [:reset-position])
    (doall (for [{:keys [time instrument pitch]} @notes]
             (play-at instrument pitch (+ now (* (/ 60 @tempo) time)))))))