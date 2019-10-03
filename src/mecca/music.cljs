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
  (let [beat @(subscribe [:current-position])
        notes @(subscribe [:notes])]
    (when @(subscribe [:playing?])
      (if (< 0 (count (filter #(= (:time %) beat)
                              @(subscribe [:notes]))))
      (dispatch [:jump!])
        (dispatch [:down!])))))

(defn mario-move []
  (let [playing? @(subscribe [:playing?])
        beat @(subscribe [:current-position])]
    (when playing?
      (dispatch [:move-mario (* 40 beat)]))))

(defn song-done? []
  (let [notes (subscribe [:notes])
        playing? @(subscribe [:playing?])
        now (.-currentTime @audiocontext)
        length (apply max (map #(:time %) @notes))
        started @(subscribe [:play-start])
        elapsed (- (current-time @audiocontext) started)
        beat-length (/ 60 @(subscribe [:tempo]))
        current-beat (/ elapsed beat-length)]
    (when playing?
      (if (< length current-beat)
        (dispatch [:play-off])
        (if (< (+ started beat-length) now)
          (dispatch [:advance-position]))))
    (mario-move)
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
    56.5 0.535
    57 0.56
    57.5 0.58
    58 0.63
    58.5 0.68
    59 0.71
    59.5 0.73
    60 0.75
    60.5 0.8
    61 0.85
    61.5 0.89
    62 0.96
    62.5 0.99
    63 1.06
    63.5 1.09
    64 1.135
    64.5 1.2
    65 1.28
    65.5 1.35
    66 1.43
    66.5 1.47
    67 1.5
    67.5 1.6
    68 1.714285714285714
    68.5 1.8
    69 1.89
    69.5 1.95
    70 2.13
    70.5 2.22))

(defn play-sample [instrument pitch]
  (let [context audiocontext
        audio-buffer (:decoded-buffer (get samples instrument))
        sample-source (.createBufferSource @context)]
    (set! (.-buffer sample-source) audio-buffer)
    (.setValueAtTime
     (.-playbackRate sample-source)
     (pitch->rate pitch)
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

(defn play-song! []
  (let [notes (subscribe [:notes])
        now (.-currentTime @audiocontext)
        tempo (subscribe [:tempo])]
    (dispatch [:reset-position])
    (doall (for [{:keys [time instrument pitch]} @notes]
             (play-at instrument pitch (+ now (* (/ 60 @tempo) time)))))))