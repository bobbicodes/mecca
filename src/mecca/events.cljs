(ns ^:figwheel-hooks mecca.events
  (:require
   [re-frame.core :refer [reg-event-db dispatch subscribe]]
   [mecca.mario :refer [mario]]
   [mecca.music :as music]
   [mecca.music.scale :as scale]
   [goog.events :refer [listen unlisten]])
  (:import [goog.events EventType]))

(defn ^:export audio-context
  "Construct an audio context in a way that works even if it's prefixed."
  []
  (if js/window.AudioContext. ; Some browsers e.g. Safari don't use the
    (js/window.AudioContext.) ; unprefixed version yet.
    (js/window.webkitAudioContext.)))

(defn ^:export current-time
  "Return the current time as recorded by the audio context."
  [context]
  (.-currentTime context))

(reg-event-db
 :initialize-db
 (fn [_ _]
   {:audiocontext (audio-context)
    :scale "Minor"
    :playing? false
    :current-position 0
    :octave 3
    :key "C"
    :time 0
    :tempo 180
    :lead []
    :bassline []
    :drums []
    :mario-jump 0
    :mario-sprite 0}))

(reg-event-db
 :set-bassline
 (fn [db [_ bassline]]
   (assoc db :bassline (vec (for [interval bassline]
                              (nth (take 16 (scale/scale (get music/scales @(subscribe [:scale]))
                                                         (music/root-note-midi-num)))
                                   (dec interval)))))))

(reg-event-db
 :add-note
 (fn [db [_ x y]]
   (update-in db (cond
                   (< y 18) [:lead]
                   (< 18 y 31) [:bassline]
                   (< 30 y) [:drums])
              conj {:time x
                    :duration 1
                    :pitch (- 77 y)})))

(reg-event-db
 :remove-note
 (fn [db [_ x y]]
   (update-in db (cond
                   (< y 18) [:lead]
                   (< 18 y 31) [:bassline]
                   (< 30 y) [:drums])
              (fn [notes]
                (remove #(and (= x (:time %))
                              (= (- 77 y) (:pitch %)))
                        notes)))))

(reg-event-db
 :add-drum-hit
 (fn [db [_ x y]]
   (update-in db [:drums] conj {:time x
                                   :duration 1
                                   :pitch (- 77 y)})))

(reg-event-db
 :move-note
 (fn [db [_ bassline]]
   (assoc db :bassline (vec (for [interval bassline]
                              (nth (take 16 (scale/scale (get music/scales @(subscribe [:scale]))
                                                         (music/root-note-midi-num)))
                                   (dec interval)))))))

(reg-event-db                 ;; usage:  (dispatch [:timer a-js-Date])
 :timer                         ;; every second an event of this kind will be dispatched
 (fn [db [_ new-time]]          ;; note how the 2nd parameter is destructured to obtain the data value
   (assoc db :time new-time)))

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

(reg-event-db
 :tick!
 (fn [db [_ _]]
   (update db :mario-sprite inc)))

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