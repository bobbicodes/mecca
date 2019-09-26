(ns ^:figwheel-hooks mecca.events
  (:require
   [re-frame.core :refer [reg-event-db dispatch subscribe]]
   [day8.re-frame.undo :as undo :refer [undoable]]
   [mecca.mario :as mario :refer [mario]]
   [mecca.music :as music :refer [sample audiocontext]]
   [mecca.audio.scale :as scale]
   [goog.events :refer [listen unlisten]])
  (:import [goog.events EventType]))

(reg-event-db
 :initialize-db
 (fn [_ _]
   {:focused-note-pos [nil nil]
    :playing? false
    :current-position 0
    :editor-beat-start 1
    :selected-note "mario"
    :samples []
    :key "C"
    :time 0
    :tempo 180
    :mario []
    :lead []
    :bassline []
    :drums []
    :mario-x 54
    :mario-y 41.5
    :mario-jump 0
    :mario-run 1}))

(reg-event-db
 :set-bassline
 (fn [db [_ bassline]]
   (assoc db :bassline (vec (for [interval bassline]
                              (nth (take 16 (scale/scale (get music/scales @(subscribe [:scale]))
                                                         (music/root-note-midi-num)))
                                   (dec interval)))))))

(reg-event-db
 :add-note
 (undoable "add note")
 (fn [db [_ instrument time pitch]]
   (if (= (.-state @audiocontext) "suspended")
     (.resume @audiocontext))
   (music/play-sample! instrument (- 77 pitch))
   (update db instrument
              conj {:time time
                    :duration 0.5
                    :pitch (- 77 pitch)})))

(reg-event-db
 :remove-note
 (undoable "remove note")
 (fn [db [_ instrument time pitch]]
   (update db (keyword instrument)
              (fn [notes]
                (remove #(and (= time (:time %))
                              (= (- 77 pitch) (:pitch %)))
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
 :play-toggle
 (fn [db [_ scale]]
   (if (= (.-state @audiocontext) "suspended")
     (.resume @audiocontext))
   (update db :playing? not)))

(reg-event-db
 :update-focus-note
 (fn [db [_ pos]]
   (assoc db :focused-note-pos pos)))

(reg-event-db
 :select-note
 (fn [db [_ note]]
   (assoc db :selected-note note)))

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
 :advance-editor
 (fn [db [_ _]]
   (update db :editor-beat-start inc)))

(reg-event-db
 :retract-editor
 (fn [db [_ _]]
   (update db :editor-beat-start dec)))

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
   (assoc (update
           (update db :mario-run #(if (= % 3) 1 (inc %)))
           :mario-jump inc)
          :time (music/current-time @audiocontext))))

(reg-event-db
 :jump-reset
 (fn [db [_ _]]
   (assoc db :mario-jump 0)))

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