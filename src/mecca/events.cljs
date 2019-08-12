(ns ^:figwheel-hooks mecca.events
  (:require
   [re-frame.core :as rf]
   [mecca.music :as music]
   [goog.events :refer [listen unlisten]])
  (:import [goog.events EventType]))

(rf/reg-event-db
 :initialize-db
 (fn [_ _]
   {:scale "Minor"
    :octave 3
    :key "C"
    :tempo 100
    :bassline [48 55 51 55 48 55 51 55 48 55 51 55 48 55 51 55]}))

(rf/reg-event-db
 :set-bassline
 (fn [db [_ bassline]]
   (assoc db :bassline (take 16 (cycle bassline)))))

(rf/reg-event-db
 :set-scale
 (fn [db [_ scale]]
   (assoc db :scale scale)))

(rf/reg-event-db
 :set-tempo
 (fn [db [_ tempo]]
   (assoc db :tempo tempo)))

(rf/reg-event-db
 :set-octave
 (fn [db [_ octave]]
   (assoc db :octave octave)))

(rf/reg-event-db
 :set-key
 (fn [db [_ key]]
   (assoc db :key key)))

(def mouse-pos (atom {:x 100 :y 100}))
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