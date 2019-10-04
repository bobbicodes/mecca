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
    56 0.5297315471796479
    56.5 0.5297315471796479
    57 0.5612310241546867
    57.5 0.5946035575013607
    58 0.6299605249474368
    58.5 0.6674199270850174
    59 0.7071067811865477
    59.5 0.7071067811865477
    60 0.7491535384383409
    60.5 0.7937005259840998
    61 0.8408964152537146
    61.5 0.8908987181403394
    62 0.9438743126816935
    62.5 1
    63 1.0594630943592953
    63.5 1.122462048309373
    64 1.122462048309373
    64.5 1.1892071150027212
    65 1.2599210498948734
    65.5 1.3348398541700346
    66 1.4142135623730954
    66.5 1.498307076876682
    67 1.498307076876682
    67.5 1.5874010519682
    68 1.6817928305074297
    68.5 1.7817974362806792
    69 1.8877486253633877
    69.5 2
    70 2.1189261887185906
    70.5 2.244924096618746))

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