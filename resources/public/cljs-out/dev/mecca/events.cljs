(ns ^:figwheel-hooks mecca.events
  (:require
   [re-frame.core :refer [reg-event-db dispatch subscribe]]
   [mecca.music :as music]
   [mecca.music.scale :as scale]
   [goog.events :refer [listen unlisten]])
  (:import [goog.events EventType]))

(reg-event-db
 :initialize-db
 (fn [_ _]
   {:scale "Minor"
    :playing? false
    :current-position 0
    :octave 3
    :key "C"
    :tempo 180
    :bassline [48 55 51 55 48 55 51 55 48 55 51 55 48 55 51 55]}))

(reg-event-db
 :set-bassline
 (fn [db [_ bassline]]
   (assoc db :bassline (vec (for [interval bassline]
                              (nth (take 16 (scale/scale (get music/scales @(subscribe [:scale]))
                                                         (music/root-note-midi-num)))
                                   (dec interval)))))))

(reg-event-db
 :move-note
 (fn [db [_ bassline]]
   (assoc db :bassline (vec (for [interval bassline]
                              (nth (take 16 (scale/scale (get music/scales @(subscribe [:scale]))
                                                         (music/root-note-midi-num)))
                                   (dec interval)))))))

(reg-event-db
 :play-on
 (fn [db [_ scale]]
   (assoc db :playing? true)))

(reg-event-db
 :play-off
 (fn [db [_ scale]]
   (assoc db :playing? false)))

(reg-event-db
 :set-scale
 (fn [db [_ scale]]
   (assoc db :scale scale)))

(reg-event-db
 :advance-position
 (fn [db [_ _]]
   (update db :current-position inc)))

(reg-event-db
 :reset-position
 (fn [db [_ _]]
   (assoc db :current-position 0)))

(reg-event-db
 :set-tempo
 (fn [db [_ tempo]]
   (assoc db :tempo tempo)))

(reg-event-db
 :set-octave
 (fn [db [_ octave]]
   (assoc db :octave octave)))

(reg-event-db
 :set-key
 (fn [db [_ key]]
   (assoc db :key key)))

(def mouse-pos (atom {:x 0 :y 0}))
(def selected (atom [nil nil]))

(defn get-client-rect [evt]
  (let [r (.getBoundingClientRect (.-target evt))]
    {:left (.-left r), :top (.-top r)}))

(defn mouse-move-handler [offset]
  (fn [evt]
    (let [x (- (.-clientX evt) (:x offset))
          y (- (.-clientY evt) (:y offset))]
      (reset! mouse-pos {:x      x
                         :y      y}))))

(defn mouse-up-handler [on-move]
  (fn me [evt]
    (unlisten js/window EventType.MOUSEMOVE
              on-move)))


(defn mouse-down-handler [e]
  (let [{:keys [left top]} (get-client-rect e)
        offset             {:x (- (.-clientX e) left)
                            :y (- (.-clientY e) top)}
        on-move            (mouse-move-handler offset)]
    (listen js/window EventType.MOUSEMOVE
            on-move)
    (listen js/window EventType.MOUSEUP
            (mouse-up-handler on-move))))