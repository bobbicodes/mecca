(ns ^:figwheel-hooks mecca.events
  (:require
   [re-frame.core :refer [reg-event-db reg-event-fx dispatch subscribe]]
   [ajax.core :as ajax]
   [ajax.protocols :as protocol]
   [day8.re-frame.undo :as undo :refer [undoable]]
   [mecca.mario :as mario :refer [mario]]
   [mecca.music :as music :refer [audiocontext]]
   [goog.events :refer [listen unlisten]])
  (:import [goog.events EventType]))

(reg-event-db
 :initialize-db
 (fn [_ _]
   {:focused-note-pos [nil nil]
    :eraser? false
    :playing? false
    :play-start 0
    :jumping? false
    :sharp? false
    :current-position 0
    :next-note-time 0.0
    :notes-in-queue []
    :editor-beat-start 1
    :instrument 1
    :array-buffer nil
    :key "C"
    :time 0
    :time-signature 4
    :tempo 120
    :notes []
    :lead []
    :bassline []
    :drums []
    :mario-x 54
    :mario-y 59
    :mario-jump 0
    :mario-run 1}))

(reg-event-db
 :add-note
 (undoable "add note")
 (fn [db [_ instrument time pitch]]
   (if (= (.-state @audiocontext) "suspended")
     (.resume @audiocontext))
   (music/play-sample instrument (if @(subscribe [:sharp?]) (+ 0.5 pitch) pitch))
   (update db :notes
           conj 
           {:time time
            :instrument instrument
            :pitch (if @(subscribe [:sharp?]) (+ 0.5 pitch) pitch)
            :sharp? @(subscribe [:sharp?])})))

(reg-event-db
 :load-song
 (fn [db [_ notes]]
   (dispatch [:set-tempo 360])
   (assoc db :notes
[{:time 225, :instrument 6, :pitch 69.5, :sharp? true} {:time 224, :instrument 6, :pitch 68, :sharp? false}
 {:time 222.5, :instrument 6, :pitch 67.5, :sharp? true} {:time 221, :instrument 6, :pitch 66, :sharp? false}
{:time 209, :instrument 6, :pitch 66, :sharp? false} {:time 208, :instrument 6, :pitch 65, :sharp? false}
{:time 207, :instrument 6, :pitch 64.5, :sharp? true} {:time 206, :instrument 6, :pitch 63, :sharp? false}
{:time 205, :instrument 6, :pitch 62, :sharp? false} {:time 203, :instrument 6, :pitch 62, :sharp? false}
{:time 197, :instrument 6, :pitch 59, :sharp? false} {:time 193, :instrument 6, :pitch 62, :sharp? false}
 {:time 177, :instrument 15, :pitch 66, :sharp? false} {:time 176, :instrument 15, :pitch 63, :sharp? false}
 {:time 175, :instrument 15, :pitch 63, :sharp? false} {:time 173, :instrument 15, :pitch 63, :sharp? false}
 {:time 172, :instrument 15, :pitch 63, :sharp? false} {:time 171, :instrument 15, :pitch 63, :sharp? false}
 {:time 169, :instrument 15, :pitch 63, :sharp? false} {:time 168, :instrument 15, :pitch 63, :sharp? false} {:time 167, :instrument 15, :pitch 63, :sharp? false} {:time 165, :instrument 15, :pitch 63, :sharp? false} {:time 164, :instrument 15, :pitch 63, :sharp? false} {:time 163, :instrument 15, :pitch 63, :sharp? false} {:time 161, :instrument 15, :pitch 63, :sharp? false} {:time 160, :instrument 15, :pitch 62, :sharp? false} {:time 159, :instrument 15, :pitch 62, :sharp? false} {:time 157, :instrument 15, :pitch 62, :sharp? false} {:time 156, :instrument 15, :pitch 62, :sharp? false} {:time 155, :instrument 15, :pitch 62, :sharp? false} {:time 153, :instrument 15, :pitch 62, :sharp? false} {:time 152, :instrument 15, :pitch 62, :sharp? false} {:time 151, :instrument 15, :pitch 62, :sharp? false} {:time 149, :instrument 15, :pitch 62, :sharp? false} {:time 148, :instrument 15, :pitch 62, :sharp? false} {:time 147, :instrument 15, :pitch 62, :sharp? false} {:time 145, :instrument 15, :pitch 62, :sharp? false} {:time 144, :instrument 15, :pitch 62.5, :sharp? true} {:time 143, :instrument 15, :pitch 62.5, :sharp? true} {:time 141, :instrument 15, :pitch 62.5, :sharp? true} {:time 140, :instrument 15, :pitch 62.5, :sharp? true} {:time 139, :instrument 15, :pitch 62.5, :sharp? true} {:time 137, :instrument 15, :pitch 62.5, :sharp? true} {:time 136, :instrument 15, :pitch 62.5, :sharp? true} {:time 135, :instrument 15, :pitch 62.5, :sharp? true} {:time 133, :instrument 15, :pitch 62.5, :sharp? true} {:time 132, :instrument 15, :pitch 62.5, :sharp? true} {:time 131, :instrument 15, :pitch 62.5, :sharp? true} {:time 129, :instrument 15, :pitch 62.5, :sharp? true} {:time 128, :instrument 15, :pitch 64, :sharp? false} {:time 127, :instrument 15, :pitch 64, :sharp? false} {:time 125, :instrument 15, :pitch 64, :sharp? false} {:time 124, :instrument 15, :pitch 64, :sharp? false} {:time 123, :instrument 15, :pitch 64, :sharp? false} {:time 121, :instrument 15, :pitch 64, :sharp? false} {:time 120, :instrument 15, :pitch 64, :sharp? false} {:time 119, :instrument 15, :pitch 64, :sharp? false} {:time 117, :instrument 15, :pitch 64, :sharp? false} {:time 116, :instrument 15, :pitch 64, :sharp? false} {:time 115, :instrument 15, :pitch 64, :sharp? false} {:time 113, :instrument 15, :pitch 64, :sharp? false} {:time 112, :instrument 15, :pitch 60, :sharp? false} {:time 111, :instrument 15, :pitch 60, :sharp? false} {:time 109, :instrument 15, :pitch 60, :sharp? false} {:time 108, :instrument 15, :pitch 60, :sharp? false} {:time 107, :instrument 15, :pitch 60, :sharp? false} {:time 105, :instrument 15, :pitch 60, :sharp? false} {:time 104, :instrument 15, :pitch 60, :sharp? false} {:time 103, :instrument 15, :pitch 60, :sharp? false} {:time 101, :instrument 15, :pitch 60, :sharp? false} {:time 100, :instrument 15, :pitch 60, :sharp? false} {:time 99, :instrument 15, :pitch 60, :sharp? false} {:time 96, :instrument 15, :pitch 61, :sharp? false} {:time 95, :instrument 15, :pitch 61, :sharp? false} {:time 93, :instrument 15, :pitch 61, :sharp? false} {:time 100, :instrument 6, :pitch 65, :sharp? false} {:time 253, :instrument 15, :pitch 59, :sharp? false} {:time 252, :instrument 15, :pitch 59, :sharp? false} {:time 251, :instrument 15, :pitch 59, :sharp? false} {:time 249, :instrument 15, :pitch 59, :sharp? false} {:time 248, :instrument 15, :pitch 59, :sharp? false} {:time 247, :instrument 15, :pitch 59, :sharp? false} {:time 245, :instrument 15, :pitch 59, :sharp? false} {:time 244, :instrument 15, :pitch 59, :sharp? false} {:time 243, :instrument 15, :pitch 59, :sharp? false} {:time 241, :instrument 15, :pitch 59, :sharp? false}
 {:time 63.5, :instrument 15, :pitch 56, :sharp? false} {:time 63.5, :instrument 15, :pitch 56, :sharp? false} {:time 92, :instrument 15, :pitch 61, :sharp? false} {:time 91, :instrument 15, :pitch 61, :sharp? false} {:time 89, :instrument 15, :pitch 61, :sharp? false} {:time 88, :instrument 15, :pitch 61, :sharp? false} {:time 87, :instrument 15, :pitch 61, :sharp? false} {:time 85, :instrument 15, :pitch 61, :sharp? false} {:time 84, :instrument 15, :pitch 61, :sharp? false} {:time 83, :instrument 15, :pitch 61, :sharp? false} {:time 80, :instrument 15, :pitch 62, :sharp? false} {:time 79, :instrument 15, :pitch 62, :sharp? false} {:time 77, :instrument 15, :pitch 62, :sharp? false} {:time 76, :instrument 15, :pitch 62, :sharp? false} {:time 75, :instrument 15, :pitch 62, :sharp? false} {:time 73, :instrument 15, :pitch 62, :sharp? false} {:time 72, :instrument 15, :pitch 62, :sharp? false} {:time 71, :instrument 15, :pitch 62, :sharp? false} {:time 69, :instrument 15, :pitch 62, :sharp? false} {:time 68, :instrument 15, :pitch 62, :sharp? false} {:time 67, :instrument 15, :pitch 62, :sharp? false} {:time 240, :instrument 15, :pitch 60, :sharp? false} {:time 239, :instrument 15, :pitch 60, :sharp? false} {:time 237, :instrument 15, :pitch 60, :sharp? false} {:time 236, :instrument 15, :pitch 60, :sharp? false} {:time 235, :instrument 15, :pitch 60, :sharp? false} {:time 233, :instrument 15, :pitch 60, :sharp? false} {:time 232, :instrument 15, :pitch 60, :sharp? false} {:time 231, :instrument 15, :pitch 60, :sharp? false} {:time 229, :instrument 15, :pitch 60, :sharp? false} {:time 228, :instrument 15, :pitch 60, :sharp? false} {:time 227, :instrument 15, :pitch 60, :sharp? false} {:time 225, :instrument 15, :pitch 60, :sharp? false} {:time 224, :instrument 15, :pitch 61, :sharp? false} {:time 223, :instrument 15, :pitch 61, :sharp? false} {:time 221, :instrument 15, :pitch 61, :sharp? false} {:time 221, :instrument 15, :pitch 61, :sharp? false} {:time 220, :instrument 15, :pitch 61, :sharp? false} {:time 219, :instrument 15, :pitch 61, :sharp? false} {:time 217, :instrument 15, :pitch 61, :sharp? false} {:time 216, :instrument 15, :pitch 61, :sharp? false} {:time 215, :instrument 15, :pitch 61, :sharp? false} {:time 213, :instrument 15, :pitch 61, :sharp? false} {:time 212, :instrument 15, :pitch 61, :sharp? false} {:time 211, :instrument 15, :pitch 61, :sharp? false} {:time 209, :instrument 15, :pitch 61, :sharp? false} {:time 208, :instrument 15, :pitch 62, :sharp? false} {:time 207, :instrument 15, :pitch 62, :sharp? false} {:time 205, :instrument 15, :pitch 62, :sharp? false} {:time 204, :instrument 15, :pitch 62, :sharp? false} {:time 203, :instrument 15, :pitch 62, :sharp? false} {:time 201, :instrument 15, :pitch 62, :sharp? false} {:time 200, :instrument 15, :pitch 62, :sharp? false} {:time 199, :instrument 15, :pitch 62, :sharp? false} {:time 197, :instrument 15, :pitch 62, :sharp? false} {:time 196, :instrument 15, :pitch 62, :sharp? false} {:time 195, :instrument 15, :pitch 62, :sharp? false} {:time 193, :instrument 15, :pitch 62, :sharp? false} {:time 97, :instrument 15, :pitch 60, :sharp? false} {:time 81, :instrument 15, :pitch 61, :sharp? false} {:time 100, :instrument 6, :pitch 65, :sharp? false} {:time 97, :instrument 6, :pitch 65, :sharp? false} {:time 96, :instrument 6, :pitch 68, :sharp? false} {:time 94.5, :instrument 6, :pitch 67.5, :sharp? true} {:time 93, :instrument 6, :pitch 66, :sharp? false} {:time 81, :instrument 6, :pitch 66, :sharp? false} {:time 80, :instrument 6, :pitch 65, :sharp? false} {:time 79, :instrument 6, :pitch 64.5, :sharp? true} {:time 78, :instrument 6, :pitch 63, :sharp? false} {:time 77, :instrument 6, :pitch 62, :sharp? false} {:time 75, :instrument 6, :pitch 62, :sharp? false} {:time 69, :instrument 6, :pitch 59, :sharp? false} {:time 65, :instrument 6, :pitch 62, :sharp? false} {:time 65, :instrument 15, :pitch 62, :sharp? false} {:time 57, :instrument 15, :pitch 66, :sharp? false} {:time 53, :instrument 15, :pitch 63, :sharp? false} {:time 49, :instrument 15, :pitch 59, :sharp? false} {:time 41, :instrument 15, :pitch 67, :sharp? false} {:time 37, :instrument 15, :pitch 64, :sharp? false} {:time 33, :instrument 15, :pitch 60, :sharp? false}
 {:time 81, :instrument 14, :pitch 66, :sharp? false} {:time 80, :instrument 14, :pitch 65, :sharp? false} {:time 79, :instrument 14, :pitch 64.5, :sharp? true} {:time 78, :instrument 14, :pitch 63, :sharp? false} {:time 77, :instrument 14, :pitch 62, :sharp? false} {:time 75, :instrument 14, :pitch 62, :sharp? false} {:time 65, :instrument 14, :pitch 62, :sharp? false} {:time 25, :instrument 15, :pitch 68, :sharp? false} {:time 21, :instrument 15, :pitch 65, :sharp? false} {:time 17, :instrument 15, :pitch 61, :sharp? false} {:time 9, :instrument 15, :pitch 69, :sharp? false} {:time 5, :instrument 15, :pitch 66, :sharp? false} {:time 1, :instrument 15, :pitch 62, :sharp? false} {:time 1, :instrument 14, :pitch 66, :sharp? false} {:time 3, :instrument 14, :pitch 66, :sharp? false} {:time 4, :instrument 14, :pitch 62, :sharp? false} {:time 5, :instrument 14, :pitch 66, :sharp? false} {:time 7, :instrument 14, :pitch 66, :sharp? false} {:time 8, :instrument 14, :pitch 62, :sharp? false} {:time 9, :instrument 14, :pitch 66, :sharp? false} {:time 11, :instrument 14, :pitch 66, :sharp? false} {:time 12, :instrument 14, :pitch 62, :sharp? false} {:time 13, :instrument 14, :pitch 66, :sharp? false} {:time 14, :instrument 14, :pitch 62, :sharp? false} {:time 15, :instrument 14, :pitch 66, :sharp? false} {:time 16, :instrument 14, :pitch 62, :sharp? false} {:time 17, :instrument 14, :pitch 65, :sharp? false} {:time 19, :instrument 14, :pitch 66, :sharp? false} {:time 21, :instrument 14, :pitch 66, :sharp? false} {:time 22, :instrument 14, :pitch 67.5, :sharp? true} {:time 23, :instrument 14, :pitch 68.5, :sharp? true} {:time 24, :instrument 14, :pitch 69, :sharp? false} {:time 25, :instrument 14, :pitch 70, :sharp? false} {:time 27, :instrument 14, :pitch 65, :sharp? false} {:time 28, :instrument 14, :pitch 61, :sharp? false} {:time 29, :instrument 14, :pitch 65, :sharp? false} {:time 30, :instrument 14, :pitch 61, :sharp? false} {:time 31, :instrument 14, :pitch 65, :sharp? false} {:time 32, :instrument 14, :pitch 61, :sharp? false} {:time 33, :instrument 14, :pitch 64, :sharp? false} {:time 35, :instrument 14, :pitch 64, :sharp? false} {:time 36, :instrument 14, :pitch 60, :sharp? false} {:time 37, :instrument 14, :pitch 64, :sharp? false} {:time 39, :instrument 14, :pitch 64, :sharp? false} {:time 40, :instrument 14, :pitch 60, :sharp? false} {:time 41, :instrument 14, :pitch 64, :sharp? false} {:time 43, :instrument 14, :pitch 64, :sharp? false} {:time 44, :instrument 14, :pitch 60, :sharp? false} {:time 45, :instrument 14, :pitch 64, :sharp? false} {:time 46, :instrument 14, :pitch 60, :sharp? false} {:time 47, :instrument 14, :pitch 64, :sharp? false} {:time 48, :instrument 14, :pitch 60, :sharp? false} {:time 49, :instrument 14, :pitch 63, :sharp? false} {:time 51, :instrument 14, :pitch 66, :sharp? false} {:time 53, :instrument 14, :pitch 66, :sharp? false} {:time 54, :instrument 14, :pitch 67.5, :sharp? true} {:time 55, :instrument 14, :pitch 68.5, :sharp? true} {:time 56, :instrument 14, :pitch 69, :sharp? false} {:time 57, :instrument 14, :pitch 70, :sharp? false} {:time 59, :instrument 14, :pitch 63, :sharp? false} {:time 60, :instrument 14, :pitch 59, :sharp? false} {:time 61, :instrument 14, :pitch 63, :sharp? false} {:time 62, :instrument 14, :pitch 59, :sharp? false} {:time 63, :instrument 14, :pitch 63, :sharp? false} {:time 64, :instrument 14, :pitch 59, :sharp? false} {:time 65, :instrument 14, :pitch 57.5, :sharp? true} {:time 69, :instrument 14, :pitch 57.5, :sharp? true} {:time 70.5, :instrument 14, :pitch 57.5, :sharp? true} {:time 72, :instrument 14, :pitch 56.5, :sharp? true} {:time 73.5, :instrument 14, :pitch 57.5, :sharp? true} {:time 76, :instrument 14, :pitch 57.5, :sharp? true} {:time 77, :instrument 14, :pitch 57.5, :sharp? true} {:time 78, :instrument 14, :pitch 58, :sharp? false} {:time 79, :instrument 14, :pitch 59, :sharp? false} {:time 80, :instrument 14, :pitch 60.5, :sharp? true} {:time 81, :instrument 14, :pitch 61, :sharp? false} {:time 84, :instrument 14, :pitch 62, :sharp? false} {:time 85, :instrument 14, :pitch 62, :sharp? false} {:time 86, :instrument 14, :pitch 63, :sharp? false} {:time 87, :instrument 14, :pitch 64.5, :sharp? true} {:time 88, :instrument 14, :pitch 65, :sharp? false} {:time 89, :instrument 14, :pitch 66, :sharp? false} {:time 93, :instrument 14, :pitch 61, :sharp? false} {:time 94.5, :instrument 14, :pitch 62, :sharp? false} {:time 96, :instrument 14, :pitch 63, :sharp? false} {:time 97, :instrument 14, :pitch 60, :sharp? false} {:time 100, :instrument 14, :pitch 60, :sharp? false} {:time 101, :instrument 14, :pitch 60, :sharp? false} {:time 102, :instrument 14, :pitch 61, :sharp? false} {:time 103, :instrument 14, :pitch 62, :sharp? false} {:time 104, :instrument 14, :pitch 63.5, :sharp? true} {:time 105, :instrument 14, :pitch 64, :sharp? false} {:time 107.5, :instrument 14, :pitch 64, :sharp? false} {:time 109, :instrument 14, :pitch 64, :sharp? false} {:time 110.5, :instrument 14, :pitch 63, :sharp? false} {:time 112, :instrument 14, :pitch 62, :sharp? false} {:time 113, :instrument 14, :pitch 64, :sharp? false} {:time 115.5, :instrument 14, :pitch 62, :sharp? false} {:time 117, :instrument 14, :pitch 61, :sharp? false} {:time 119.5, :instrument 14, :pitch 60, :sharp? false} {:time 121, :instrument 14, :pitch 61, :sharp? false}
 {:time 129, :instrument 14, :pitch 60, :sharp? false} {:time 128, :instrument 14, :pitch 61, :sharp? false} {:time 126.5, :instrument 14, :pitch 60, :sharp? false} {:time 131, :instrument 14, :pitch 60, :sharp? false} {:time 132, :instrument 14, :pitch 59, :sharp? false} {:time 133, :instrument 14, :pitch 60, :sharp? false} {:time 135, :instrument 14, :pitch 60, :sharp? false} {:time 136, :instrument 14, :pitch 61, :sharp? false} {:time 137, :instrument 14, :pitch 62, :sharp? false} {:time 141, :instrument 14, :pitch 61, :sharp? false} {:time 143, :instrument 14, :pitch 60, :sharp? false} {:time 145, :instrument 14, :pitch 59, :sharp? false} {:time 147, :instrument 14, :pitch 59, :sharp? false} {:time 148, :instrument 14, :pitch 58, :sharp? false} {:time 149, :instrument 14, :pitch 59, :sharp? false} {:time 151, :instrument 14, :pitch 59, :sharp? false} {:time 152, :instrument 14, :pitch 60, :sharp? false} {:time 153, :instrument 14, :pitch 61, :sharp? false} {:time 157, :instrument 14, :pitch 60, :sharp? false} {:time 159, :instrument 14, :pitch 59, :sharp? false} {:time 161, :instrument 14, :pitch 58.5, :sharp? true} {:time 165, :instrument 14, :pitch 58.5, :sharp? true} {:time 168, :instrument 14, :pitch 59, :sharp? false} {:time 169, :instrument 14, :pitch 60.5, :sharp? true} {:time 172, :instrument 14, :pitch 61.5, :sharp? true} {:time 173, :instrument 14, :pitch 62, :sharp? false} {:time 175, :instrument 14, :pitch 63, :sharp? false} {:time 177, :instrument 14, :pitch 61.5, :sharp? true} {:time 181, :instrument 14, :pitch 61, :sharp? false} {:time 183, :instrument 14, :pitch 61, :sharp? false} {:time 184, :instrument 14, :pitch 61, :sharp? false} {:time 185, :instrument 14, :pitch 60.5, :sharp? true} {:time 187, :instrument 14, :pitch 60.5, :sharp? true} {:time 188, :instrument 14, :pitch 60.5, :sharp? true} {:time 189, :instrument 14, :pitch 60, :sharp? false} {:time 191, :instrument 14, :pitch 60, :sharp? false} {:time 192, :instrument 14, :pitch 60, :sharp? false} {:time 193, :instrument 14, :pitch 59, :sharp? false} {:time 193, :instrument 14, :pitch 57.5, :sharp? true} {:time 197, :instrument 14, :pitch 57.5, :sharp? true} {:time 198.5, :instrument 14, :pitch 57.5, :sharp? true} {:time 200, :instrument 14, :pitch 56.5, :sharp? true} {:time 201.5, :instrument 14, :pitch 57.5, :sharp? true} {:time 204, :instrument 14, :pitch 57.5, :sharp? true} {:time 205, :instrument 14, :pitch 57.5, :sharp? true} {:time 206, :instrument 14, :pitch 58, :sharp? false} {:time 207, :instrument 14, :pitch 59, :sharp? false} {:time 208, :instrument 14, :pitch 60.5, :sharp? true} {:time 209, :instrument 14, :pitch 61, :sharp? false} {:time 212, :instrument 14, :pitch 62, :sharp? false} {:time 213, :instrument 14, :pitch 62, :sharp? false} {:time 214, :instrument 14, :pitch 63, :sharp? false} {:time 215, :instrument 14, :pitch 64.5, :sharp? true} {:time 216, :instrument 14, :pitch 65, :sharp? false} {:time 217, :instrument 14, :pitch 66, :sharp? false} {:time 221, :instrument 14, :pitch 61, :sharp? false} {:time 222.5, :instrument 14, :pitch 62, :sharp? false} {:time 224, :instrument 14, :pitch 63.5, :sharp? true} {:time 225, :instrument 14, :pitch 64, :sharp? false} {:time 241, :instrument 14, :pitch 65.5, :sharp? true} {:time 245, :instrument 14, :pitch 63.5, :sharp? true} {:time 1, :instrument 14, :pitch 69, :sharp? false}])))

(reg-event-db
 :remove-note
 (undoable "remove note")
 (fn [db [_ time pitch]]
   (update db :notes
              (fn [note]
                (remove #(and (= time (:time %))
                              (= pitch (:pitch %)))
                        note)))))

(reg-event-db
 :set-time-signature
 (fn [db [_ beats-per-measure]]
   (update db :time-signature beats-per-measure)))

(reg-event-db                 ;; usage:  (dispatch [:timer a-js-Date])
 :timer                         ;; every second an event of this kind will be dispatched
 (fn [db [_ new-time]]          ;; note how the 2nd parameter is destructured to obtain the data value
   (assoc db :time new-time)))

(reg-event-db
 :play-on
 (fn [db [_ _]]
   (music/play-song!)
   (assoc 
    (assoc db :play-start (.-currentTime @audiocontext))
    :playing? true)))

(reg-event-db
 :sharp-on
 (fn [db [_ _]]
    (assoc db :sharp? true)))

(reg-event-db
 :sharp-toggle
 (fn [db [_ _]]
   (update db :sharp? not)))

(reg-event-db
 :eraser-toggle
 (fn [db [_ _]]
   (update db :eraser? not)))

(reg-event-db
 :sharp-off
 (fn [db [_ _]]
   (assoc db :sharp? false)))

(reg-event-db
 :pause
 (fn [db [_ _]]
    (assoc db :playing? false)))

(reg-event-db
 :stop
 (fn [db [_ _]]
   (dispatch [:reset-editor])
   (assoc 
    (assoc db :playing? false)
    :current-position 0)))

(reg-event-db
 :update-focus-note
 (fn [db [_ pos]]
   (assoc db :focused-note-pos pos)))

(reg-event-db
 :select-instrument
 (fn [db [_ instrument]]
   (assoc db :instrument instrument)))

(reg-event-db
 :play-off
 (fn [db [_ _]]
   (assoc db :playing? false)))

 
(reg-event-db
 :advance-position
 (fn [db [_ _]]
   (let [notes @(subscribe [:notes])
         beat @(subscribe [:current-position])
         to-play (filter #(= (+ 1 beat) (:time %)) notes)]
     (if (< 8 beat )
       (dispatch [:advance-editor]))
     #_(doall (for [{:keys [instrument pitch]} to-play]
              (music/play-sample instrument (if @(subscribe [:sharp?]) (+ 0.5 pitch) pitch))))
     (update db :current-position #(+ 0.5 %)))))

(reg-event-db
 :advance-editor
 (fn [db [_ _]]
   (update db :editor-beat-start #(+ 0.5 %))))

(reg-event-db
 :move-mario
 (fn [db [_ x]]
   (assoc db :mario-x x)))

(reg-event-db
 :reset-editor
 (fn [db [_ _]]
   (assoc db :editor-beat-start 1)))

(reg-event-db
 :retract-editor
 (fn [db [_ _]]
   (update db :editor-beat-start #(- % 0.5))))

(reg-event-db
 :reset-position
 (fn [db [_ _]]
   (assoc db :current-position 0)))

(reg-event-db
 :set-tempo
 (fn [db [_ tempo]]
   (assoc db :tempo tempo)))

(reg-event-db
 :inc-tempo
 (fn [db [_ tempo]]
   (update db :tempo #(+ 8 %))))

(reg-event-db
 :dec-tempo
 (fn [db [_ tempo]]
   (update db :tempo #(- % 8))))

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

(reg-event-db
 :jump!
 (fn [db [_ _]]
   (assoc db :mario-y 30)))

(reg-event-db
 :down!
 (fn [db [_ _]]
   (assoc db :mario-y 59)))
