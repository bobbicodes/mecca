(ns ^:figwheel-hooks mecca.events
  (:require
   [re-frame.core :refer [reg-event-db reg-event-fx dispatch subscribe]]
   [re-pressed.core :as rp]
   [ajax.core :as ajax]
   [ajax.protocols :as protocol]
   [day8.re-frame.undo :as undo :refer [undoable]]
   [mecca.mario :as mario :refer [mario]]
   [mecca.songs.megaman :as megaman]
   [mecca.songs.zelda :as zelda]
   [mecca.songs.city :as city]
   [mecca.music :as music]
   [goog.events :refer [listen unlisten]])
  (:import [goog.events EventType]))

(reg-event-db
 :initialize-db
 (fn [_ _]
   {:audio-context (js/AudioContext.)
    :samples nil
    :focused-note-pos [nil nil]
    :eraser? false
    :playing? false
    :play-start 0
    :jumping? false
    :sharp? false
    :repeat? false
    :loop-end nil
    :current-position 0
    :current-note 0
    :next-note-time 0.0
    :notes-in-queue []
    :editor-beat-start 1
    :instrument 1
    :array-buffer nil
    :time 0
    :time-signature 4
    :tempo 120
    :notes []
    :mario-x 16
    :mario-y 61
    :mario-jump 0
    :mario-run 1
    :xml ""
    :file-upload ""}))

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
 :file-upload
 (fn [db [_ file]]
      (assoc db :file-upload file)))

(reg-event-db
 :load-samples
 (fn [db [_ samples]]
   (assoc db :samples samples)))

(reg-event-db
 :set-time-signature
 (fn [db [_ beats-per-measure]]
   (update db :time-signature beats-per-measure)))

(reg-event-db
 :set-notes
 (fn [db [_ notes]]
   (assoc db :notes notes)))

(reg-event-db                 ;; usage:  (dispatch [:timer a-js-Date])
 :timer                         ;; every second an event of this kind will be dispatched
 (fn [db [_ new-time]]          ;; note how the 2nd parameter is destructured to obtain the data value
   (assoc db :time new-time)))

(reg-event-db
 :play-on
 (fn [db [_ _]]
   (music/play-song!)
   (assoc
    (assoc db :play-start (.-currentTime @(subscribe [:audio-context])))
    :playing? true)
    ))

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
   (let [notes (subscribe [:notes])
         beat (subscribe [:current-position])
         to-play (filter #(= (+ 1 @beat) (:time %)) @notes)]
     (if (< 4 @beat)
       (dispatch [:advance-editor 0.5]))
     #_(doall (for [{:keys [instrument pitch]} to-play]
                (music/play-sample instrument (if @(subscribe [:sharp?]) (+ 0.5 pitch) pitch))))
     (update db :current-position #(+ 0.5 %)))))

(reg-event-db
 :advance-editor
 (fn [db [_ beats]]
   (update db :editor-beat-start #(+ beats %))))

(reg-event-db
 :move-mario
 (fn [db [_ _]]
   (update db :mario-x #(+ 10 %))))

(reg-event-db
 :reset-editor
 (fn [db [_ _]]
   (assoc (assoc db :editor-beat-start 1)
          :mario-x 16)))

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
 :repeat-toggle
 (fn [db [_ _]]
   (update db :repeat? not)))

(reg-event-db
 :set-loop-end
 (fn [db [_ x]]
   (assoc db :loop-end x)))

(reg-event-db
 :next-note
 (fn [db [_ _]]
   (let [tempo (subscribe [:tempo])
         seconds-per-beat (/ 60.0 @tempo)]
     (update 
      (update db :current-note inc)
      :next-note-time #(+ % seconds-per-beat)))))

(reg-event-db
 :schedule-note
 (fn [db [_ _]]
   (let [notes (subscribe [:notes])
         beat (subscribe [:current-note])
         to-play (filter #(= (+ 1 @beat) (:time %)) @notes)]
     (update db :notes-in-queue
             into to-play))))

(reg-event-db
 :add-note
 (undoable "add note")
 (fn [db [_ instrument time pitch]]
   (if (= (.-state @(subscribe [:audio-context])) "suspended")
     (.resume @(subscribe [:audio-context])))
   (music/play-sample instrument (if @(subscribe [:sharp?]) (inc pitch) pitch))
   (update db :notes
           conj 
           {:time time
            :instrument instrument
            :pitch (if @(subscribe [:sharp?])
                    (inc pitch) pitch)})))


;; TODO This is gross.
;; Make it so the run counter only runs when needed.
;; But this tick function needs to be refactored.
;; Seriously it's like 50 shades of awful.
;; Read about effectful handlers some more,
;; and learn to use reg-event-fx.

(reg-event-db
 :tick!
 (fn [db [_ _]]
   (if (and (not= 0 @(subscribe [:mario-jump]))
            @(subscribe [:playing?]))
     (assoc
      (update
       (update db :mario-run #(if (= % 12) 0 (inc %)))
       :mario-jump #(if (= 8 %) 0 (inc %)))
      :mario-y (- 61
                  (get [5 10 15 25 30 25 15 5]
                       @(subscribe [:mario-jump]))))
     (update db :mario-run #(if (= % 12) 0 (inc %))))))

(reg-event-db
 :jump!
 (fn [db [_ _]]
   (assoc db :mario-jump 1)))

(reg-event-db
 :submit-xml
 (fn [db [_ xml]]
   (assoc db :xml xml)))

(reg-event-db
 :load-song
 (fn [db [_ notes]]
   (assoc db :notes notes)))

(reg-event-db
 :load-megaman
 (fn [db [_ notes]]
   (dispatch [:set-tempo 260])
   (assoc db :notes
          megaman/megaman)))

(reg-event-db
 :load-castle
 (fn [db [_ notes]]
   (dispatch [:set-tempo 150])
   (assoc db :notes city/city)))

(reg-event-db
 :load-zelda
 (fn [db [_ notes]]
   (dispatch [:set-tempo 390])
   (assoc db :notes zelda/zelda)))

