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
    :current-note 0
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
    :mario-run 1
    :xml ""}))

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
   (if (= (.-state @audiocontext) "suspended")
     (.resume @audiocontext))
   (music/play-sample instrument (if @(subscribe [:sharp?]) (inc pitch) pitch))
   (update db :notes
           conj 
           {:time time
            :instrument instrument
            :pitch (if @(subscribe [:sharp?])
                    (inc pitch) pitch)})))

(reg-event-db
 :load-megaman
 (fn [db [_ notes]]
   (dispatch [:set-tempo 360])
   (assoc db :notes
          ;(music/mmbass)
          [{:time 0, :instrument 6, :pitch 72}

           {:time 60, :instrument 8, :pitch 69}

           {:time 59, :instrument 8, :pitch 70}

           {:time 58, :instrument 8, :pitch 67}

           {:time 57, :instrument 8, :pitch 60}

           {:time 55, :instrument 8, :pitch 60}

           {:time 52, :instrument 8, :pitch 69}

           {:time 51, :instrument 8, :pitch 70}

           {:time 50, :instrument 8, :pitch 67}

           {:time 49, :instrument 8, :pitch 60}

           {:time 51, :instrument 14  :pitch 72}
           {:time 50, :instrument 14  :pitch 74}
           {:time 49, :instrument 14  :pitch 75}
           {:time 51, :instrument 14  :pitch 67}
           {:time 50, :instrument 14  :pitch 70}
           {:time 49, :instrument 14  :pitch 72}
           {:time 48, :instrument 14  :pitch 70}
           {:time 45, :instrument 14  :pitch 70}
           {:time 43, :instrument 14  :pitch 72}
           {:time 41, :instrument 14  :pitch 74}
           {:time 39, :instrument 14  :pitch 75}
           {:time 37, :instrument 14  :pitch 70}
           {:time 36, :instrument 14  :pitch 74}
           {:time 35.5, :instrument 14 :pitch 74}
           {:time 35, :instrument 14  :pitch 74}
           {:time 34, :instrument 14  :pitch 74}
           {:time 33.5, :instrument 14 :pitch 74}
           {:time 33, :instrument 14  :pitch 74}
           {:time 48, :instrument 14  :pitch 74}
           {:time 45, :instrument 14  :pitch 74}
           {:time 43, :instrument 14  :pitch 75}
           {:time 41, :instrument 14  :pitch 77}
           {:time 39, :instrument 14  :pitch 79}
           {:time 37, :instrument 14  :pitch 74}
           {:time 36, :instrument 14  :pitch 77}
           {:time 35.5, :instrument 6, :pitch 77}
           {:time 35, :instrument 6  :pitch 77}
           {:time 34, :instrument 6  :pitch 77}
           {:time 33.5, :instrument 6, :pitch 77}
           {:time 33, :instrument 14  :pitch 77}
           {:time 29, :instrument 14  :pitch 74}
           {:time 27, :instrument 14  :pitch 72}
           {:time 25, :instrument 14  :pitch 74}
           {:time 23, :instrument 14  :pitch 75}
           {:time 21, :instrument 14  :pitch 67}
           {:time 20, :instrument 14  :pitch 72}
           {:time 19.5, :instrumen14 6, :pitch 72}
           {:time 19, :instrument 6  :pitch 72}
           {:time 18, :instrument 6  :pitch 72}
           {:time 17.5, :instrument 6, :pitch 72}
           {:time 17, :instrument 6  :pitch 72}
           {:time 15, :instrument 6  :pitch 75}
           {:time 14, :instrument 6  :pitch 74}
           {:time 13, :instrument 6  :pitch 75}
           {:time 8, :instrument 6, :pitch 75}
           {:time 7, :instrument 6, :pitch 72}
           {:time 11, :instrument 6  :pitch 67}
           {:time 10, :instrument 6  :pitch 72}
           {:time 9.5, :instrument 6 , :pitch 72}
           {:time 9, :instrument 6, :pitch 72}
           {:time 8, :instrument 6, :pitch 72}
           {:time 7, :instrument 6, :pitch 67}
           {:time 5, :instrument 6, :pitch 67}
           {:time 4, :instrument 6, :pitch 72}
           {:time 3.5, :instrument 14 :pitch 72}
           {:time 3, :instrument 6, :pitch 72}
           {:time 2, :instrument 6, :pitch 72}
           {:time 1.5, :instrument 14 :pitch 72}
           {:time 1, :instrument 6, :pitch 72}
           {:time 29, :instrument 6  :pitch 77}

           {:time 27, :instrument 6, :pitch 75}
           
           {:time 25, :instrument 6, :pitch 77}

           {:time 23, :instrument 6, :pitch 79}

           {:time 21, :instrument 6, :pitch 72}

           {:time 20, :instrument 6, :pitch 75}

           {:time 19.5, :instrument 6, :pitch 75}

           {:time 19, :instrument 6, :pitch 75}

           {:time 18, :instrument 6, :pitch 75}

           {:time 17.5, :instrument 14 :pitch 75}
           {:time 17, :instrument 14 :pitch 75}
           {:time 15, :instrument 14 :pitch 79}
           {:time 14, :instrument 14 :pitch 77}
           {:time 13, :instrument 14 :pitch 79}
           {:time 11, :instrument 14 :pitch 72}
           {:time 10, :instrument 14 :pitch 75}
           {:time 9.5, :instrument 14 :pitch 75}
           {:time 9, :instrument 14 :pitch 75}
           {:time 5, :instrument 14 :pitch 72}
           {:time 4, :instrument 14 :pitch 75}
           {:time 3.5, :instrument 14 :pitch 75}
           {:time 3, :instrument 14 :pitch 75}
           {:time 2, :instrument 14 :pitch 75}
           {:time 1.5, :instrument 14 :pitch 75}
           {:time 1, :instrument 14 :pitch 75}

           {:time 0, :instrument 6, :pitch 60}

           {:time 1, :instrument 6, :pitch 60}

           {:time 1.5, :instrument 6, :pitch 60}

           {:time 2, :instrument 6, :pitch 60}

           {:time 3, :instrument 6, :pitch 60}

           {:time 3.5, :instrument 6, :pitch 60}

           {:time 4, :instrument 6, :pitch 60}

           {:time 5, :instrument 6, :pitch 60}

           {:time 5.5, :instrument 6, :pitch 60}

           {:time 6, :instrument 6, :pitch 60}

           {:time 7, :instrument 6, :pitch 60}

           {:time 7.5, :instrument 6, :pitch 60}

           {:time 8, :instrument 6, :pitch 60}

           {:time 9, :instrument 6, :pitch 60}

           {:time 9.5, :instrument 6, :pitch 60}

           {:time 10, :instrument 6, :pitch 60}

           {:time 11, :instrument 6, :pitch 60}

           {:time 11.5, :instrument 6, :pitch 60}

           {:time 12, :instrument 6, :pitch 60}

           {:time 13, :instrument 6, :pitch 60}

           {:time 13.5, :instrument 6, :pitch 60}

           {:time 14, :instrument 6, :pitch 60}

           {:time 15, :instrument 6, :pitch 60}

           {:time 15.5, :instrument 6, :pitch 60}

           {:time 16, :instrument 6, :pitch 56}

           {:time 17, :instrument 6, :pitch 56}

           {:time 17.5, :instrument 6, :pitch 56}

           {:time 18, :instrument 6, :pitch 56}

           {:time 19, :instrument 6, :pitch 56}

           {:time 19.5, :instrument 6, :pitch 56}

           {:time 20, :instrument 6, :pitch 56}

           {:time 21, :instrument 6, :pitch 56}

           {:time 21.5, :instrument 6, :pitch 56}

           {:time 22, :instrument 6, :pitch 56}

           {:time 23, :instrument 6, :pitch 56}

           {:time 23.5, :instrument 6, :pitch 56}

           {:time 24, :instrument 6, :pitch 56}

           {:time 25, :instrument 6, :pitch 56}

           {:time 25.5, :instrument 6, :pitch 56}

           {:time 26, :instrument 6, :pitch 56}

           {:time 27, :instrument 6, :pitch 56}

           {:time 27.5, :instrument 6, :pitch 56}

           {:time 28, :instrument 6, :pitch 56}

           {:time 29, :instrument 6, :pitch 56}

           {:time 29.5, :instrument 6, :pitch 56}

           {:time 30, :instrument 6, :pitch 56}

           {:time 31, :instrument 6, :pitch 56}

           {:time 31.5, :instrument 6, :pitch 56}

           {:time 32, :instrument 6, :pitch 58}

           {:time 33, :instrument 6, :pitch 58}

           {:time 33.5, :instrument 6, :pitch 58}

           {:time 34, :instrument 6, :pitch 58}

           {:time 35, :instrument 6, :pitch 58}

           {:time 35.5, :instrument 6, :pitch 58}

           {:time 36, :instrument 6, :pitch 58}

           {:time 37, :instrument 6, :pitch 58}

           {:time 37.5, :instrument 6, :pitch 58}

           {:time 38, :instrument 6, :pitch 58}

           {:time 39, :instrument 6, :pitch 58}

           {:time 39.5, :instrument 6, :pitch 58}

           {:time 40, :instrument 6, :pitch 58}

           {:time 41, :instrument 6, :pitch 58}

           {:time 41.5, :instrument 6, :pitch 58}

           {:time 42, :instrument 6, :pitch 58}

           {:time 43, :instrument 6, :pitch 58}

           {:time 43.5, :instrument 6, :pitch 58}

           {:time 44, :instrument 6, :pitch 58}

           {:time 45, :instrument 6, :pitch 58}

           {:time 45.5, :instrument 6, :pitch 58}

           {:time 46, :instrument 6, :pitch 58}

           {:time 47, :instrument 6, :pitch 58}

           {:time 47.5, :instrument 6, :pitch 58}

           {:time 48, :instrument 6, :pitch 60}

           {:time 49, :instrument 6, :pitch 60}

           {:time 49.5, :instrument 6, :pitch 60}

           {:time 50, :instrument 6, :pitch 60}

           {:time 51, :instrument 6, :pitch 60}

           {:time 51.5, :instrument 6, :pitch 60}

           {:time 52, :instrument 6, :pitch 60}

           {:time 53, :instrument 6, :pitch 60}

           {:time 53.5, :instrument 6, :pitch 60}

           {:time 54, :instrument 6, :pitch 60}

           {:time 55, :instrument 6, :pitch 60}

           {:time 55.5, :instrument 6, :pitch 60}

           {:time 56, :instrument 6, :pitch 60}

           {:time 57, :instrument 6, :pitch 60}

           {:time 57.5, :instrument 6, :pitch 60}

           {:time 58, :instrument 6, :pitch 60}

           {:time 59, :instrument 6, :pitch 60}

           {:time 59.5, :instrument 6, :pitch 60}

           {:time 60, :instrument 6, :pitch 60}

           {:time 61, :instrument 6, :pitch 60}

           {:time 61.5, :instrument 6, :pitch 60}

           {:time 62, :instrument 6, :pitch 60}

           {:time 63, :instrument 6, :pitch 60}

           {:time 63.5, :instrument 6, :pitch 60}]
          )))

(reg-event-db
 :load-zelda
 (fn [db [_ notes]]
   (dispatch [:set-tempo 360])
   (assoc db :notes
[{:time 1, :pitch 77, :instrument 14} {:time 5, :pitch 77, :instrument 14} {:time 6, :pitch 75, :instrument 14} {:time 7, :pitch 75, :instrument 14} {:time 8, :pitch 77, :instrument 14} {:time 9, :pitch 76, :instrument 14} {:time 9.5, :pitch 75, :instrument 14} {:time 10, :pitch 76, :instrument 14} {:time 13, :pitch 76, :instrument 14} {:time 17, :pitch 77, :instrument 14} {:time 21, :pitch 77, :instrument 14} {:time 22, :pitch 75, :instrument 14} {:time 23, :pitch 75, :instrument 14} {:time 24, :pitch 77, :instrument 14} {:time 25, :pitch 77, :instrument 14} {:time 25.5, :pitch 76, :instrument 14} {:time 26, :pitch 77, :instrument 14} {:time 29, :pitch 77, :instrument 14} {:time 33, :pitch 72, :instrument 14} {:time 41, :pitch 72, :instrument 14} {:time 49, :pitch 77, :instrument 14} {:time 51, :pitch 75, :instrument 14} {:time 53, :pitch 75, :instrument 14} {:time 54, :pitch 77, :instrument 14} {:time 55, :pitch 77, :instrument 14} {:time 55.5, :pitch 72, :instrument 14} {:time 56, :pitch 85, :instrument 14} {:time 56.5, :pitch 85, :instrument 14} {:time 57, :pitch 87, :instrument 14} {:time 58, :pitch 65, :instrument 14} {:time 59, :pitch 65, :instrument 14} {:time 59.5, :pitch 72, :instrument 14} {:time 60, :pitch 73, :instrument 14} {:time 60.5, :pitch 73, :instrument 14} {:time 61, :pitch 75, :instrument 14} {:time 65, :pitch 77, :instrument 14} {:time 67, :pitch 75, :instrument 14} {:time 69, :pitch 75, :instrument 14} {:time 70, :pitch 77, :instrument 14} {:time 71, :pitch 77, :instrument 14} {:time 71.5, :pitch 72, :instrument 14} {:time 72, :pitch 85, :instrument 14} {:time 72.5, :pitch 85, :instrument 14} {:time 73, :pitch 87, :instrument 14} {:time 74, :pitch 65, :instrument 14} {:time 75, :pitch 65, :instrument 14} {:time 75.5, :pitch 72, :instrument 14} {:time 76, :pitch 73, :instrument 14} {:time 76.5, :pitch 73, :instrument 14} {:time 77, :pitch 75, :instrument 14} {:time 81, :pitch 73, :instrument 14} {:time 83, :pitch 77, :instrument 14} {:time 85, :pitch 73, :instrument 14} {:time 85.66666666666667, :pitch 75, :instrument 14} {:time 86.33333333333334, :pitch 73, :instrument 14} {:time 87.00000000000001, :pitch 75, :instrument 14} {:time 87.66666666666669, :pitch 72, :instrument 14} {:time 88.33333333333336, :pitch 75, :instrument 14} {:time 89.00000000000003, :pitch 73, :instrument 14} {:time 90.00000000000003, :pitch 75, :instrument 14} {:time 91.00000000000003, :pitch 77, :instrument 14} {:time 91.50000000000003, :pitch 73, :instrument 14} {:time 92.00000000000003, :pitch 77, :instrument 14} {:time 92.50000000000003, :pitch 73, :instrument 14} {:time 93.00000000000003, :pitch 77, :instrument 14} {:time 93.50000000000003, :pitch 73, :instrument 14} {:time 94.00000000000003, :pitch 72, :instrument 14} {:time 94.50000000000003, :pitch 75, :instrument 14} {:time 95.00000000000003, :pitch 85, :instrument 14} {:time 95.50000000000003, :pitch 76, :instrument 14} {:time 96.00000000000003, :pitch 85, :instrument 14} {:time 96.50000000000003, :pitch 76, :instrument 14} {:time 98.00000000000003, :pitch 87, :instrument 14} {:time 99.50000000000003, :pitch 77, :instrument 14} {:time 100.00000000000003, :pitch 77, :instrument 14} {:time 100.50000000000003, :pitch 72, :instrument 14} {:time 101.00000000000003, :pitch 85, :instrument 14} {:time 101.50000000000003, :pitch 85, :instrument 14} {:time 102.00000000000003, :pitch 87, :instrument 14} {:time 103.00000000000003, :pitch 87, :instrument 14} {:time 104.00000000000003, :pitch 76, :instrument 14} {:time 104.6666666666667, :pitch 87, :instrument 14} {:time 105.33333333333337, :pitch 77, :instrument 14} {:time 106.00000000000004, :pitch 87, :instrument 14} {:time 106.66666666666671, :pitch 84, :instrument 14} {:time 107.33333333333339, :pitch 88, :instrument 14} {:time 108.00000000000006, :pitch 84, :instrument 14} {:time 109.50000000000006, :pitch 89, :instrument 14} {:time 111.00000000000006, :pitch 75, :instrument 14} {:time 111.50000000000006, :pitch 75, :instrument 14} {:time 112.00000000000006, :pitch 76, :instrument 14} {:time 112.50000000000006, :pitch 77, :instrument 14} {:time 113.00000000000006, :pitch 84, :instrument 14} {:time 113.50000000000006, :pitch 84, :instrument 14} {:time 114.83333333333339, :pitch 84, :instrument 14} {:time 115.50000000000006, :pitch 89, :instrument 14} {:time 116.16666666666673, :pitch 84, :instrument 14} {:time 116.8333333333334, :pitch 89, :instrument 14} {:time 117.50000000000007, :pitch 84, :instrument 14} {:time 118.16666666666674, :pitch 88, :instrument 14} {:time 118.83333333333341, :pitch 77, :instrument 14} {:time 119.50000000000009, :pitch 87, :instrument 14} {:time 120.16666666666676, :pitch 84, :instrument 14} {:time 121.50000000000009, :pitch 88, :instrument 14} {:time 122.83333333333341, :pitch 77, :instrument 14} {:time 123.50000000000009, :pitch 87, :instrument 14} {:time 124.16666666666676, :pitch 76, :instrument 14} {:time 124.83333333333343, :pitch 87, :instrument 14} {:time 125.5000000000001, :pitch 76, :instrument 14} {:time 126.16666666666677, :pitch 75, :instrument 14} {:time 126.83333333333344, :pitch 76, :instrument 14} {:time 128.16666666666677, :pitch 76, :instrument 14} {:time 128.83333333333343, :pitch 76, :instrument 14} {:time 129.50000000000009, :pitch 87, :instrument 14} {:time 130.16666666666674, :pitch 75, :instrument 14} {:time 130.8333333333334, :pitch 76, :instrument 14} {:time 131.50000000000006, :pitch 75, :instrument 14} {:time 132.50000000000006, :pitch 85, :instrument 14} {:time 133.50000000000006, :pitch 75, :instrument 14} {:time 134.00000000000006, :pitch 85, :instrument 14} {:time 134.50000000000006, :pitch 75, :instrument 14} {:time 135.00000000000006, :pitch 87, :instrument 14} {:time 135.50000000000006, :pitch 75, :instrument 14} {:time 136.50000000000006, :pitch 87, :instrument 14} {:time 137.50000000000006, :pitch 75, :instrument 14} {:time 138.00000000000006, :pitch 76, :instrument 14} {:time 138.50000000000006, :pitch 77, :instrument 14} {:time 140.50000000000006, :pitch 76, :instrument 14} {:time 141.50000000000006, :pitch 87, :instrument 14} {:time 142.50000000000006, :pitch 75, :instrument 14} {:time 143.50000000000006, :pitch 85, :instrument 14} {:time 144.50000000000006, :pitch 75, :instrument 14} {:time 145.50000000000006, :pitch 84, :instrument 14} {:time 146.50000000000006, :pitch 75, :instrument 14} {:time 147.00000000000006, :pitch 84, :instrument 14} {:time 147.50000000000006, :pitch 73, :instrument 14} {:time 148.00000000000006, :pitch 85, :instrument 14} {:time 148.50000000000006, :pitch 75, :instrument 14} {:time 149.50000000000006, :pitch 87, :instrument 14} {:time 150.50000000000006, :pitch 75, :instrument 14} {:time 151.00000000000006, :pitch 75, :instrument 14} {:time 151.50000000000006, :pitch 76, :instrument 14} {:time 153.50000000000006, :pitch 75, :instrument 14} {:time 154.50000000000006, :pitch 85, :instrument 14} {:time 155.50000000000006, :pitch 75, :instrument 14} {:time 156.50000000000006, :pitch 84, :instrument 14} {:time 157.50000000000006, :pitch 74, :instrument 14} {:time 158.50000000000006, :pitch 84, :instrument 14} {:time 159.50000000000006, :pitch 84, :instrument 14} {:time 160.00000000000006, :pitch 85, :instrument 14} {:time 160.50000000000006, :pitch 74, :instrument 14} {:time 161.50000000000006, :pitch 86, :instrument 14} {:time 162.50000000000006, :pitch 74, :instrument 14} {:time 163.00000000000006, :pitch 75, :instrument 14} {:time 163.50000000000006, :pitch 76, :instrument 14} {:time 164.50000000000006, :pitch 76, :instrument 14} {:time 165.00000000000006, :pitch 77, :instrument 14} {:time 165.50000000000006, :pitch 77, :instrument 14} {:time 166.50000000000006, :pitch 88, :instrument 14} {:time 167.50000000000006, :pitch 84, :instrument 14} {:time 168.50000000000006, :pitch 88, :instrument 14} {:time 169.50000000000006, :pitch 77, :instrument 14} {:time 170.50000000000006, :pitch 87, :instrument 14} {:time 171.50000000000006, :pitch 65, :instrument 14} {:time 172.00000000000006, :pitch 75, :instrument 14} {:time 172.50000000000006, :pitch 65, :instrument 14} {:time 173.00000000000006, :pitch 75, :instrument 14} {:time 173.50000000000006, :pitch 64, :instrument 14} {:time 174.50000000000006, :pitch 75, :instrument 14} {:time 175.50000000000006, :pitch 64, :instrument 14} {:time 176.00000000000006, :pitch 75, :instrument 14} {:time 176.50000000000006, :pitch 64, :instrument 14} {:time 177.00000000000006, :pitch 75, :instrument 14} {:time 177.50000000000006, :pitch 64, :instrument 14} {:time 178.50000000000006, :pitch 75, :instrument 14} {:time 179.50000000000006, :pitch 64, :instrument 14} {:time 180.00000000000006, :pitch 75, :instrument 14} {:time 180.50000000000006, :pitch 64, :instrument 14} {:time 181.00000000000006, :pitch 75, :instrument 14} {:time 181.50000000000006, :pitch 63, :instrument 14} {:time 182.50000000000006, :pitch 75, :instrument 14} {:time 183.50000000000006, :pitch 63, :instrument 14} {:time 184.50000000000006, :pitch 75, :instrument 14} {:time 185.50000000000006, :pitch 73, :instrument 14} {:time 187.50000000000006, :pitch 77, :instrument 14} {:time 189.50000000000006, :pitch 73, :instrument 14} {:time 190.1666666666667, :pitch 75, :instrument 14} {:time 190.83333333333337, :pitch 73, :instrument 14} {:time 191.50000000000003, :pitch 75, :instrument 14} {:time 192.16666666666669, :pitch 72, :instrument 14} {:time 192.83333333333334, :pitch 75, :instrument 14} {:time 193.5, :pitch 73, :instrument 14} {:time 194.5, :pitch 75, :instrument 14} {:time 195.5, :pitch 77, :instrument 14} {:time 196, :pitch 73, :instrument 14} {:time 196.5, :pitch 77, :instrument 14} {:time 197, :pitch 73, :instrument 14} {:time 197.5, :pitch 77, :instrument 14} {:time 198, :pitch 73, :instrument 14} {:time 198.5, :pitch 84, :instrument 14} {:time 199, :pitch 75, :instrument 14} {:time 199.5, :pitch 85, :instrument 14} {:time 200, :pitch 76, :instrument 14} {:time 200.5, :pitch 85, :instrument 14} {:time 201, :pitch 76, :instrument 14} {:time 202.5, :pitch 87, :instrument 14} {:time 204, :pitch 77, :instrument 14} {:time 204.5, :pitch 77, :instrument 14} {:time 205, :pitch 84, :instrument 14} {:time 205.5, :pitch 85, :instrument 14} {:time 206, :pitch 85, :instrument 14} {:time 206.5, :pitch 87, :instrument 14} {:time 207.5, :pitch 87, :instrument 14} {:time 208.5, :pitch 76, :instrument 14} {:time 209.16666666666666, :pitch 87, :instrument 14} {:time 209.83333333333331, :pitch 77, :instrument 14} {:time 210.49999999999997, :pitch 87, :instrument 14} {:time 211.16666666666663, :pitch 84, :instrument 14} {:time 211.8333333333333, :pitch 88, :instrument 14} {:time 212.49999999999994, :pitch 84, :instrument 14} {:time 218.49999999999994, :pitch 89, :instrument 14} {:time 224.49999999999994, :pitch 86, :instrument 14} {:time 226.49999999999994, :pitch 96, :instrument 14} {:time 228.49999999999994, :pitch 85, :instrument 14} {:time 230.49999999999994, :pitch 96, :instrument 14} {:time 232.49999999999994, :pitch 84, :instrument 14} {:time 236.49999999999994, :pitch 89, :instrument 14} {:time 240.49999999999994, :pitch 77, :instrument 14} {:time 242.49999999999994, :pitch 87, :instrument 14} {:time 244.49999999999994, :pitch 87, :instrument 14} {:time 245.1666666666666, :pitch 65, :instrument 14} {:time 245.83333333333326, :pitch 72, :instrument 14} {:time 246.49999999999991, :pitch 74, :instrument 14} {:time 247.16666666666657, :pitch 77, :instrument 14} {:time 247.83333333333323, :pitch 84, :instrument 14} {:time 248.4999999999999, :pitch 86, :instrument 14} {:time 250.4999999999999, :pitch 89, :instrument 14} {:time 252.4999999999999, :pitch 87, :instrument 14} {:time 254.4999999999999, :pitch 89, :instrument 14} {:time 256.4999999999999, :pitch 75, :instrument 14} {:time 257.1666666666666, :pitch 87, :instrument 14} {:time 257.83333333333326, :pitch 75, :instrument 14} {:time 258.49999999999994, :pitch 87, :instrument 14} {:time 259.16666666666663, :pitch 75, :instrument 14} {:time 259.8333333333333, :pitch 87, :instrument 14} {:time 260.5, :pitch 75, :instrument 14} {:time 262.5, :pitch 87, :instrument 14} {:time 264.5, :pitch 87, :instrument 14} {:time 266.5, :pitch 87, :instrument 14} {:time 267.1666666666667, :pitch 65, :instrument 14} {:time 267.83333333333337, :pitch 72, :instrument 14} {:time 268.50000000000006, :pitch 74, :instrument 14} {:time 269.16666666666674, :pitch 77, :instrument 14} {:time 269.8333333333334, :pitch 84, :instrument 14} {:time 270.5000000000001, :pitch 86, :instrument 14} {:time 272.5000000000001, :pitch 89, :instrument 14} {:time 274.5000000000001, :pitch 87, :instrument 14} {:time 276.5000000000001, :pitch 89, :instrument 14} {:time 278.5000000000001, :pitch 75, :instrument 14} {:time 279.1666666666668, :pitch 87, :instrument 14} {:time 279.8333333333335, :pitch 75, :instrument 14} {:time 280.50000000000017, :pitch 87, :instrument 14} {:time 281.16666666666686, :pitch 75, :instrument 14} {:time 281.83333333333354, :pitch 87, :instrument 14} {:time 282.5000000000002, :pitch 75, :instrument 14} {:time 284.5000000000002, :pitch 87, :instrument 14} {:time 286.5000000000002, :pitch 85, :instrument 14} {:time 288.5000000000002, :pitch 75, :instrument 14} {:time 294.5000000000002, :pitch 85, :instrument 14} {:time 300.5000000000002, :pitch 83, :instrument 14} {:time 302.5000000000002, :pitch 87, :instrument 14} {:time 304.5000000000002, :pitch 77, :instrument 14} {:time 306.5000000000002, :pitch 87, :instrument 14} {:time 308.5000000000002, :pitch 75, :instrument 14} {:time 312.5000000000002, :pitch 84, :instrument 14} {:time 316.5000000000002, :pitch 72, :instrument 14} {:time 318.5000000000002, :pitch 77, :instrument 14} {:time 320.5000000000002, :pitch 74, :instrument 14} {:time 321.5000000000002, :pitch 84, :instrument 14} {:time 322.5000000000002, :pitch 74, :instrument 14} {:time 323.0000000000002, :pitch 84, :instrument 14} {:time 323.5000000000002, :pitch 74, :instrument 14} {:time 324.0000000000002, :pitch 85, :instrument 14} {:time 324.5000000000002, :pitch 74, :instrument 14} {:time 325.5000000000002, :pitch 86, :instrument 14} {:time 326.5000000000002, :pitch 74, :instrument 14} {:time 327.0000000000002, :pitch 75, :instrument 14} {:time 327.5000000000002, :pitch 76, :instrument 14} {:time 328.5000000000002, :pitch 76, :instrument 14} {:time 329.0000000000002, :pitch 77, :instrument 14} {:time 329.5000000000002, :pitch 77, :instrument 14} {:time 330.5000000000002, :pitch 88, :instrument 14} {:time 331.5000000000002, :pitch 84, :instrument 14} {:time 332.5000000000002, :pitch 77, :instrument 14} {:time 333.5000000000002, :pitch 87, :instrument 14} {:time 334.5000000000002, :pitch 65, :instrument 14} {:time 335.0000000000002, :pitch 75, :instrument 14} {:time 335.5000000000002, :pitch 65, :instrument 14} {:time 336.0000000000002, :pitch 75, :instrument 14} {:time 336.5000000000002, :pitch 64, :instrument 14} {:time 337.5000000000002, :pitch 75, :instrument 14} {:time 338.5000000000002, :pitch 64, :instrument 14} {:time 339.0000000000002, :pitch 75, :instrument 14} {:time 339.5000000000002, :pitch 64, :instrument 14} {:time 340.0000000000002, :pitch 75, :instrument 14} {:time 340.5000000000002, :pitch 64, :instrument 14} {:time 341.5000000000002, :pitch 75, :instrument 14} {:time 342.5000000000002, :pitch 64, :instrument 14} {:time 343.0000000000002, :pitch 75, :instrument 14} {:time 343.5000000000002, :pitch 64, :instrument 14} {:time 344.0000000000002, :pitch 75, :instrument 14} {:time 344.5000000000002, :pitch 63, :instrument 14} {:time 345.5000000000002, :pitch 75, :instrument 14} {:time 346.5000000000002, :pitch 63, :instrument 14} {:time 347.5000000000002, :pitch 75, :instrument 14} {:time 348.5000000000002, :pitch 73, :instrument 14} {:time 352.5000000000002, :pitch 77, :instrument 14} {:time 356.5000000000002, :pitch 73, :instrument 14} {:time 357.83333333333354, :pitch 77, :instrument 14} {:time 359.16666666666686, :pitch 73, :instrument 14} {:time 359.83333333333354, :pitch 77, :instrument 14} {:time 360.5000000000002, :pitch 73, :instrument 14} {:time 361.1666666666669, :pitch 77, :instrument 14} {:time 361.8333333333336, :pitch 73, :instrument 14} {:time 362.5000000000003, :pitch 77, :instrument 14} {:time 363.16666666666697, :pitch 73, :instrument 14} {:time 363.83333333333366, :pitch 77, :instrument 14} {:time 364.50000000000034, :pitch 72, :instrument 14} {:time 365.83333333333366, :pitch 77, :instrument 14} {:time 367.16666666666697, :pitch 72, :instrument 14} {:time 367.83333333333366, :pitch 76, :instrument 14} {:time 368.50000000000034, :pitch 72, :instrument 14} {:time 370.50000000000034, :pitch 77, :instrument 14} {:time 372.50000000000034, :pitch 72, :instrument 14} {:time 373.83333333333366, :pitch 77, :instrument 14} {:time 375.16666666666697, :pitch 72, :instrument 14} {:time 375.83333333333366, :pitch 77, :instrument 14} {:time 376.50000000000034, :pitch 72, :instrument 14} {:time 377.166666666667, :pitch 77, :instrument 14} {:time 377.8333333333337, :pitch 72, :instrument 14} {:time 378.5000000000004, :pitch 77, :instrument 14} {:time 379.1666666666671, :pitch 72, :instrument 14} {:time 379.83333333333377, :pitch 77, :instrument 14} {:time 380.50000000000045, :pitch 72, :instrument 14} {:time 381.83333333333377, :pitch 77, :instrument 14} {:time 383.1666666666671, :pitch 72, :instrument 14} {:time 383.83333333333377, :pitch 76, :instrument 14} {:time 384.50000000000045, :pitch 72, :instrument 14} {:time 386.50000000000045, :pitch 77, :instrument 14} {:time 388.50000000000045, :pitch 72, :instrument 14} {:time 389.83333333333377, :pitch 77, :instrument 14} {:time 391.1666666666671, :pitch 72, :instrument 14} {:time 391.83333333333377, :pitch 77, :instrument 14} {:time 392.50000000000045, :pitch 72, :instrument 14} {:time 393.16666666666714, :pitch 77, :instrument 14} {:time 393.8333333333338, :pitch 72, :instrument 14} {:time 394.5000000000005, :pitch 77, :instrument 14} {:time 395.1666666666672, :pitch 72, :instrument 14} {:time 395.8333333333339, :pitch 77, :instrument 14} {:time 396.50000000000057, :pitch 72, :instrument 14} {:time 397.50000000000057, :pitch 77, :instrument 14} {:time 398.50000000000057, :pitch 65, :instrument 14} {:time 399.00000000000057, :pitch 75, :instrument 14} {:time 399.50000000000057, :pitch 65, :instrument 14} {:time 400.00000000000057, :pitch 75, :instrument 14} {:time 400.50000000000057, :pitch 65, :instrument 14} {:time 401.50000000000057, :pitch 75, :instrument 14} {:time 402.50000000000057, :pitch 65, :instrument 14} {:time 403.00000000000057, :pitch 75, :instrument 14} {:time 403.50000000000057, :pitch 65, :instrument 14} {:time 404.00000000000057, :pitch 75, :instrument 14} {:time 404.50000000000057, :pitch 65, :instrument 14} {:time 405.50000000000057, :pitch 75, :instrument 14} {:time 406.50000000000057, :pitch 65, :instrument 14} {:time 407.00000000000057, :pitch 75, :instrument 14} {:time 407.50000000000057, :pitch 65, :instrument 14} {:time 408.00000000000057, :pitch 75, :instrument 14} {:time 408.50000000000057, :pitch 65, :instrument 14} {:time 409.50000000000057, :pitch 75, :instrument 14} {:time 410.50000000000057, :pitch 65, :instrument 14} {:time 411.50000000000057, :pitch 75, :instrument 14} {:time 412.50000000000057, :pitch 73, :instrument 14} {:time 414.50000000000057, :pitch 77, :instrument 14} {:time 416.50000000000057, :pitch 73, :instrument 14} {:time 417.16666666666725, :pitch 75, :instrument 14} {:time 417.83333333333394, :pitch 73, :instrument 14} {:time 418.5000000000006, :pitch 75, :instrument 14} {:time 419.1666666666673, :pitch 72, :instrument 14} {:time 419.833333333334, :pitch 75, :instrument 14} {:time 420.5000000000007, :pitch 73, :instrument 14} {:time 422.0000000000007, :pitch 75, :instrument 14} {:time 423.5000000000007, :pitch 73, :instrument 14} {:time 424.0000000000007, :pitch 77, :instrument 14} {:time 424.5000000000007, :pitch 73, :instrument 14} {:time 425.0000000000007, :pitch 77, :instrument 14} {:time 425.5000000000007, :pitch 73, :instrument 14} {:time 426.0000000000007, :pitch 84, :instrument 14} {:time 426.5000000000007, :pitch 75, :instrument 14} {:time 427.0000000000007, :pitch 85, :instrument 14} {:time 427.5000000000007, :pitch 76, :instrument 14} {:time 428.0000000000007, :pitch 85, :instrument 14} {:time 428.5000000000007, :pitch 76, :instrument 14} {:time 430.0000000000007, :pitch 87, :instrument 14} {:time 431.5000000000007, :pitch 77, :instrument 14} {:time 432.0000000000007, :pitch 77, :instrument 14} {:time 432.5000000000007, :pitch 84, :instrument 14} {:time 433.0000000000007, :pitch 85, :instrument 14} {:time 433.5000000000007, :pitch 85, :instrument 14} {:time 434.0000000000007, :pitch 87, :instrument 14} {:time 435.0000000000007, :pitch 87, :instrument 14} {:time 436.0000000000007, :pitch 76, :instrument 14} {:time 436.66666666666737, :pitch 87, :instrument 14} {:time 437.33333333333405, :pitch 77, :instrument 14} {:time 438.00000000000074, :pitch 87, :instrument 14} {:time 438.6666666666674, :pitch 84, :instrument 14} {:time 439.3333333333341, :pitch 88, :instrument 14} {:time 440.0000000000008, :pitch 84, :instrument 14} {:time 441.5000000000008, :pitch 89, :instrument 14} {:time 443.0000000000008, :pitch 75, :instrument 14} {:time 443.5000000000008, :pitch 75, :instrument 14} {:time 444.0000000000008, :pitch 76, :instrument 14} {:time 444.5000000000008, :pitch 77, :instrument 14} {:time 445.0000000000008, :pitch 84, :instrument 14} {:time 445.5000000000008, :pitch 84, :instrument 14} {:time 446.1666666666675, :pitch 84, :instrument 14} {:time 446.83333333333417, :pitch 89, :instrument 14} {:time 447.50000000000085, :pitch 84, :instrument 14} {:time 448.16666666666754, :pitch 89, :instrument 14} {:time 448.8333333333342, :pitch 84, :instrument 14} {:time 449.5000000000009, :pitch 89, :instrument 14} {:time 450.1666666666676, :pitch 84, :instrument 14} {:time 450.8333333333343, :pitch 88, :instrument 14} {:time 451.50000000000097, :pitch 77, :instrument 14} {:time 452.16666666666765, :pitch 87, :instrument 14} {:time 452.83333333333434, :pitch 84, :instrument 14} {:time 454.16666666666765, :pitch 88, :instrument 14} {:time 455.50000000000097, :pitch 76, :instrument 14} {:time 456.16666666666765, :pitch 87, :instrument 14} {:time 456.83333333333434, :pitch 76, :instrument 14} {:time 457.500000000001, :pitch 87, :instrument 14} {:time 458.1666666666677, :pitch 76, :instrument 14} {:time 458.8333333333344, :pitch 75, :instrument 14} {:time 459.5000000000011, :pitch 76, :instrument 14} {:time 460.8333333333344, :pitch 76, :instrument 14} {:time 461.5000000000011, :pitch 76, :instrument 14} {:time 462.16666666666777, :pitch 87, :instrument 14} {:time 462.83333333333445, :pitch 75, :instrument 14} {:time 463.50000000000114, :pitch 76, :instrument 14} {:time 464.1666666666678, :pitch 75, :instrument 14} {:time 465.1666666666678, :pitch 85, :instrument 14} {:time 466.1666666666678, :pitch 75, :instrument 14} {:time 466.50000000000114, :pitch 85, :instrument 14} {:time 466.83333333333445, :pitch 85, :instrument 14} {:time 467.16666666666777, :pitch 87, :instrument 14} {:time 467.5000000000011, :pitch 75, :instrument 14} {:time 468.5000000000011, :pitch 87, :instrument 14} {:time 469.5000000000011, :pitch 75, :instrument 14} {:time 469.8333333333344, :pitch 87, :instrument 14} {:time 470.1666666666677, :pitch 75, :instrument 14} {:time 470.500000000001, :pitch 76, :instrument 14} {:time 470.83333333333434, :pitch 77, :instrument 14} {:time 472.83333333333434, :pitch 76, :instrument 14} {:time 473.83333333333434, :pitch 87, :instrument 14} {:time 474.83333333333434, :pitch 75, :instrument 14} {:time 475.83333333333434, :pitch 85, :instrument 14} {:time 476.83333333333434, :pitch 75, :instrument 14} {:time 477.83333333333434, :pitch 84, :instrument 14} {:time 478.83333333333434, :pitch 75, :instrument 14} {:time 479.16666666666765, :pitch 84, :instrument 14} {:time 479.50000000000097, :pitch 84, :instrument 14} {:time 479.8333333333343, :pitch 85, :instrument 14} {:time 480.1666666666676, :pitch 75, :instrument 14} {:time 481.1666666666676, :pitch 87, :instrument 14} {:time 482.1666666666676, :pitch 75, :instrument 14} {:time 482.5000000000009, :pitch 87, :instrument 14} {:time 482.8333333333342, :pitch 75, :instrument 14} {:time 483.16666666666754, :pitch 75, :instrument 14} {:time 483.50000000000085, :pitch 76, :instrument 14} {:time 485.50000000000085, :pitch 75, :instrument 14} {:time 486.50000000000085, :pitch 85, :instrument 14} {:time 487.50000000000085, :pitch 75, :instrument 14} {:time 488.50000000000085, :pitch 84, :instrument 14} {:time 489.50000000000085, :pitch 74, :instrument 14} {:time 490.50000000000085, :pitch 84, :instrument 14} {:time 491.50000000000085, :pitch 84, :instrument 14} {:time 492.00000000000085, :pitch 85, :instrument 14} {:time 492.50000000000085, :pitch 74, :instrument 14} {:time 494.00000000000085, :pitch 86, :instrument 14} {:time 495.50000000000085, :pitch 75, :instrument 14} {:time 496.00000000000085, :pitch 76, :instrument 14} {:time 497.00000000000085, :pitch 76, :instrument 14} {:time 497.33333333333417, :pitch 76, :instrument 14} {:time 497.6666666666675, :pitch 77, :instrument 14} {:time 498.0000000000008, :pitch 77, :instrument 14} {:time 499.0000000000008, :pitch 88, :instrument 14} {:time 500.0000000000008, :pitch 84, :instrument 14} {:time 501.0000000000008, :pitch 77, :instrument 14} {:time 502.0000000000008, :pitch 87, :instrument 14} {:time 503.0000000000008, :pitch 65, :instrument 14} {:time 503.5000000000008, :pitch 75, :instrument 14} {:time 504.0000000000008, :pitch 65, :instrument 14} {:time 504.5000000000008, :pitch 75, :instrument 14} {:time 505.0000000000008, :pitch 65, :instrument 14} {:time 506.0000000000008, :pitch 75, :instrument 14} {:time 507.0000000000008, :pitch 65, :instrument 14} {:time 507.5000000000008, :pitch 75, :instrument 14} {:time 508.0000000000008, :pitch 65, :instrument 14} {:time 508.5000000000008, :pitch 75, :instrument 14} {:time 509.0000000000008, :pitch 65, :instrument 14} {:time 510.0000000000008, :pitch 75, :instrument 14} {:time 511.0000000000008, :pitch 65, :instrument 14} {:time 511.5000000000008, :pitch 75, :instrument 14} {:time 512.0000000000008, :pitch 65, :instrument 14} {:time 512.5000000000008, :pitch 75, :instrument 14} {:time 513.0000000000008, :pitch 65, :instrument 14} {:time 514.0000000000008, :pitch 75, :instrument 14} {:time 515.0000000000008, :pitch 65, :instrument 14} {:time 516.0000000000008, :pitch 75, :instrument 14} {:time 517.0000000000008, :pitch 73, :instrument 14} {:time 519.0000000000008, :pitch 77, :instrument 14} {:time 521.0000000000008, :pitch 73, :instrument 14} {:time 521.6666666666674, :pitch 75, :instrument 14} {:time 522.333333333334, :pitch 73, :instrument 14} {:time 523.0000000000007, :pitch 75, :instrument 14} {:time 523.6666666666673, :pitch 72, :instrument 14} {:time 524.3333333333339, :pitch 75, :instrument 14} {:time 525.0000000000006, :pitch 73, :instrument 14} {:time 526.5000000000006, :pitch 75, :instrument 14} {:time 528.0000000000006, :pitch 73, :instrument 14} {:time 528.5000000000006, :pitch 77, :instrument 14} {:time 529.0000000000006, :pitch 73, :instrument 14} {:time 529.5000000000006, :pitch 77, :instrument 14} {:time 530.0000000000006, :pitch 73, :instrument 14} {:time 530.5000000000006, :pitch 84, :instrument 14} {:time 531.0000000000006, :pitch 75, :instrument 14} {:time 531.5000000000006, :pitch 85, :instrument 14} {:time 532.0000000000006, :pitch 76, :instrument 14} {:time 532.5000000000006, :pitch 85, :instrument 14} {:time 533.0000000000006, :pitch 76, :instrument 14} {:time 534.5000000000006, :pitch 87, :instrument 14} {:time 536.0000000000006, :pitch 77, :instrument 14} {:time 536.5000000000006, :pitch 77, :instrument 14} {:time 537.0000000000006, :pitch 84, :instrument 14} {:time 537.5000000000006, :pitch 85, :instrument 14} {:time 538.0000000000006, :pitch 85, :instrument 14} {:time 538.5000000000006, :pitch 87, :instrument 14} {:time 539.5000000000006, :pitch 87, :instrument 14} {:time 540.5000000000006, :pitch 76, :instrument 14} {:time 541.1666666666672, :pitch 87, :instrument 14} {:time 541.8333333333338, :pitch 77, :instrument 14} {:time 542.5000000000005, :pitch 87, :instrument 14} {:time 543.1666666666671, :pitch 84, :instrument 14} {:time 543.8333333333337, :pitch 88, :instrument 14} {:time 544.5000000000003, :pitch 84, :instrument 14} {:time 550.5000000000003, :pitch 89, :instrument 14} {:time 556.5000000000003, :pitch 86, :instrument 14} {:time 558.5000000000003, :pitch 96, :instrument 14} {:time 560.5000000000003, :pitch 85, :instrument 14} {:time 562.5000000000003, :pitch 96, :instrument 14} {:time 564.5000000000003, :pitch 84, :instrument 14} {:time 568.5000000000003, :pitch 89, :instrument 14} {:time 572.5000000000003, :pitch 77, :instrument 14} {:time 574.5000000000003, :pitch 87, :instrument 14} {:time 576.5000000000003, :pitch 83, :instrument 14} {:time 582.5000000000003, :pitch 87, :instrument 14} {:time 588.5000000000003, :pitch 84, :instrument 14} {:time 590.5000000000003, :pitch 89, :instrument 14} {:time 592.5000000000003, :pitch 84, :instrument 14} {:time 594.5000000000003, :pitch 89, :instrument 14} {:time 596.5000000000003, :pitch 77, :instrument 14} {:time 600.5000000000003, :pitch 87, :instrument 14} {:time 604.5000000000003, :pitch 77, :instrument 14} {:time 606.5000000000003, :pitch 87, :instrument 14} {:time 608.5000000000003, :pitch 83, :instrument 14} {:time 614.5000000000003, :pitch 87, :instrument 14} {:time 620.5000000000003, :pitch 84, :instrument 14} {:time 622.5000000000003, :pitch 89, :instrument 14} {:time 624.5000000000003, :pitch 84, :instrument 14} {:time 626.5000000000003, :pitch 89, :instrument 14} {:time 628.5000000000003, :pitch 77, :instrument 14} {:time 632.5000000000003, :pitch 87, :instrument 14} {:time 636.5000000000003, :pitch 77, :instrument 14} {:time 638.5000000000003, :pitch 85, :instrument 14} {:time 640.5000000000003, :pitch 75, :instrument 14} {:time 646.5000000000003, :pitch 85, :instrument 14} {:time 652.5000000000003, :pitch 83, :instrument 14} {:time 654.5000000000003, :pitch 87, :instrument 14} {:time 656.5000000000003, :pitch 77, :instrument 14} {:time 658.5000000000003, :pitch 87, :instrument 14} {:time 660.5000000000003, :pitch 75, :instrument 14} {:time 664.5000000000003, :pitch 84, :instrument 14} {:time 668.5000000000003, :pitch 72, :instrument 14} {:time 670.5000000000003, :pitch 77, :instrument 14} {:time 672.5000000000003, :pitch 74, :instrument 14} {:time 673.5000000000003, :pitch 84, :instrument 14} {:time 674.5000000000003, :pitch 84, :instrument 14} {:time 675.0000000000003, :pitch 85, :instrument 14} {:time 675.5000000000003, :pitch 74, :instrument 14} {:time 677.0000000000003, :pitch 86, :instrument 14} {:time 678.5000000000003, :pitch 75, :instrument 14} {:time 679.0000000000003, :pitch 76, :instrument 14} {:time 680.0000000000003, :pitch 76, :instrument 14} {:time 680.3333333333337, :pitch 76, :instrument 14} {:time 680.6666666666671, :pitch 77, :instrument 14} {:time 681.0000000000005, :pitch 77, :instrument 14} {:time 682.0000000000005, :pitch 88, :instrument 14} {:time 683.0000000000005, :pitch 84, :instrument 14} {:time 684.0000000000005, :pitch 77, :instrument 14} {:time 685.0000000000005, :pitch 87, :instrument 14} {:time 686.0000000000005, :pitch 65, :instrument 14} {:time 686.5000000000005, :pitch 75, :instrument 14} {:time 687.0000000000005, :pitch 65, :instrument 14} {:time 687.5000000000005, :pitch 75, :instrument 14} {:time 688.0000000000005, :pitch 65, :instrument 14} {:time 689.0000000000005, :pitch 75, :instrument 14} {:time 690.0000000000005, :pitch 65, :instrument 14} {:time 690.5000000000005, :pitch 75, :instrument 14} {:time 691.0000000000005, :pitch 65, :instrument 14} {:time 691.5000000000005, :pitch 75, :instrument 14} {:time 692.0000000000005, :pitch 65, :instrument 14} {:time 693.0000000000005, :pitch 75, :instrument 14} {:time 694.0000000000005, :pitch 65, :instrument 14} {:time 694.5000000000005, :pitch 75, :instrument 14} {:time 695.0000000000005, :pitch 65, :instrument 14} {:time 695.5000000000005, :pitch 75, :instrument 14} {:time 696.0000000000005, :pitch 65, :instrument 14} {:time 697.0000000000005, :pitch 75, :instrument 14} {:time 698.0000000000005, :pitch 65, :instrument 14} {:time 699.0000000000005, :pitch 75, :instrument 14} {:time 700.0000000000005, :pitch 77, :instrument 14} {:time 704.0000000000005, :pitch 77, :instrument 14} {:time 705.0000000000005, :pitch 75, :instrument 14} {:time 706.0000000000005, :pitch 75, :instrument 14} {:time 707.0000000000005, :pitch 77, :instrument 14} {:time 708.0000000000005, :pitch 76, :instrument 14} {:time 708.5000000000005, :pitch 75, :instrument 14} {:time 709.0000000000005, :pitch 76, :instrument 14} {:time 712.0000000000005, :pitch 76, :instrument 14} {:time 716.0000000000005, :pitch 77, :instrument 14} {:time 720.0000000000005, :pitch 77, :instrument 14} {:time 721.0000000000005, :pitch 75, :instrument 14} {:time 722.0000000000005, :pitch 75, :instrument 14} {:time 723.0000000000005, :pitch 77, :instrument 14} {:time 724.0000000000005, :pitch 77, :instrument 14} {:time 724.5000000000005, :pitch 76, :instrument 14} {:time 725.0000000000005, :pitch 77, :instrument 14} {:time 728.0000000000005, :pitch 77, :instrument 14} {:time 732.0000000000005, :pitch 77, :instrument 14} {:time 742.0000000000005, :pitch 75, :instrument 14} {:time 744.0000000000005, :pitch 77, :instrument 14} {:time 1, :pitch 65, :instrument 15} {:time 3, :pitch 75, :instrument 15} {:time 5, :pitch 77, :instrument 15} {:time 9, :pitch 64, :instrument 15} {:time 11, :pitch 73, :instrument 15} {:time 13, :pitch 76, :instrument 15} {:time 17, :pitch 63, :instrument 15} {:time 19, :pitch 72, :instrument 15} {:time 21, :pitch 75, :instrument 15} {:time 25, :pitch 63, :instrument 15} {:time 27, :pitch 72, :instrument 15} {:time 29, :pitch 75, :instrument 15} {:time 33, :pitch 65, :instrument 15} {:time 34, :pitch 75, :instrument 15} {:time 35, :pitch 77, :instrument 15} {:time 36, :pitch 75, :instrument 15} {:time 37, :pitch 77, :instrument 15} {:time 38, :pitch 75, :instrument 15} {:time 39, :pitch 77, :instrument 15} {:time 40, :pitch 75, :instrument 15} {:time 41, :pitch 65, :instrument 15} {:time 42, :pitch 75, :instrument 15} {:time 43, :pitch 77, :instrument 15} {:time 44, :pitch 75, :instrument 15} {:time 45, :pitch 77, :instrument 15} {:time 46, :pitch 75, :instrument 15} {:time 47, :pitch 77, :instrument 15} {:time 48, :pitch 75, :instrument 15} {:time 49, :pitch 65, :instrument 15} {:time 50, :pitch 75, :instrument 15} {:time 51, :pitch 77, :instrument 15} {:time 52, :pitch 75, :instrument 15} {:time 53, :pitch 77, :instrument 15} {:time 54, :pitch 75, :instrument 15} {:time 55, :pitch 77, :instrument 15} {:time 56, :pitch 75, :instrument 15} {:time 57, :pitch 64, :instrument 15} {:time 58, :pitch 73, :instrument 15} {:time 59, :pitch 76, :instrument 15} {:time 60, :pitch 73, :instrument 15} {:time 61, :pitch 76, :instrument 15} {:time 62, :pitch 73, :instrument 15} {:time 63, :pitch 76, :instrument 15} {:time 64, :pitch 73, :instrument 15} {:time 65, :pitch 63, :instrument 15} {:time 66, :pitch 72, :instrument 15} {:time 67, :pitch 75, :instrument 15} {:time 68, :pitch 72, :instrument 15} {:time 69, :pitch 75, :instrument 15} {:time 70, :pitch 72, :instrument 15} {:time 71, :pitch 75, :instrument 15} {:time 72, :pitch 72, :instrument 15} {:time 73, :pitch 63, :instrument 15} {:time 74, :pitch 72, :instrument 15} {:time 75, :pitch 75, :instrument 15} {:time 76, :pitch 72, :instrument 15} {:time 77, :pitch 75, :instrument 15} {:time 78, :pitch 72, :instrument 15} {:time 79, :pitch 75, :instrument 15} {:time 80, :pitch 72, :instrument 15} {:time 81, :pitch 65, :instrument 15} {:time 82, :pitch 75, :instrument 15} {:time 83, :pitch 77, :instrument 15} {:time 84, :pitch 75, :instrument 15} {:time 85, :pitch 77, :instrument 15} {:time 86, :pitch 75, :instrument 15} {:time 87, :pitch 77, :instrument 15} {:time 88, :pitch 75, :instrument 15} {:time 89, :pitch 64, :instrument 15} {:time 90, :pitch 73, :instrument 15} {:time 91, :pitch 76, :instrument 15} {:time 92, :pitch 73, :instrument 15} {:time 93, :pitch 76, :instrument 15} {:time 94, :pitch 73, :instrument 15} {:time 95, :pitch 76, :instrument 15} {:time 96, :pitch 73, :instrument 15} {:time 97, :pitch 63, :instrument 15} {:time 98, :pitch 72, :instrument 15} {:time 99, :pitch 75, :instrument 15} {:time 100, :pitch 72, :instrument 15} {:time 101, :pitch 75, :instrument 15} {:time 102, :pitch 72, :instrument 15} {:time 103, :pitch 75, :instrument 15} {:time 104, :pitch 72, :instrument 15} {:time 105, :pitch 60, :instrument 15} {:time 106, :pitch 64, :instrument 15} {:time 107, :pitch 72, :instrument 15} {:time 108, :pitch 64, :instrument 15} {:time 109, :pitch 72, :instrument 15} {:time 110, :pitch 64, :instrument 15} {:time 111, :pitch 72, :instrument 15} {:time 112, :pitch 64, :instrument 15} {:time 113, :pitch 71, :instrument 15} {:time 114, :pitch 75, :instrument 15} {:time 115, :pitch 83, :instrument 15} {:time 116, :pitch 75, :instrument 15} {:time 117, :pitch 83, :instrument 15} {:time 118, :pitch 75, :instrument 15} {:time 119, :pitch 83, :instrument 15} {:time 120, :pitch 75, :instrument 15} {:time 121, :pitch 65, :instrument 15} {:time 122, :pitch 75, :instrument 15} {:time 123, :pitch 77, :instrument 15} {:time 124, :pitch 75, :instrument 15} {:time 125, :pitch 77, :instrument 15} {:time 126, :pitch 75, :instrument 15} {:time 127, :pitch 77, :instrument 15} {:time 128, :pitch 75, :instrument 15} {:time 129, :pitch 72, :instrument 15} {:time 130, :pitch 76, :instrument 15} {:time 131, :pitch 72, :instrument 15} {:time 132, :pitch 76, :instrument 15} {:time 133, :pitch 72, :instrument 15} {:time 134, :pitch 76, :instrument 15} {:time 135, :pitch 72, :instrument 15} {:time 136, :pitch 76, :instrument 15} {:time 137, :pitch 63, :instrument 15} {:time 138, :pitch 72, :instrument 15} {:time 139, :pitch 75, :instrument 15} {:time 140, :pitch 72, :instrument 15} {:time 141, :pitch 75, :instrument 15} {:time 142, :pitch 72, :instrument 15} {:time 143, :pitch 75, :instrument 15} {:time 144, :pitch 72, :instrument 15} {:time 145, :pitch 65, :instrument 15} {:time 146, :pitch 75, :instrument 15} {:time 147, :pitch 77, :instrument 15} {:time 148, :pitch 75, :instrument 15} {:time 149, :pitch 77, :instrument 15} {:time 150, :pitch 75, :instrument 15} {:time 151, :pitch 77, :instrument 15} {:time 152, :pitch 75, :instrument 15} {:time 153, :pitch 64, :instrument 15} {:time 154, :pitch 73, :instrument 15} {:time 155, :pitch 76, :instrument 15} {:time 156, :pitch 73, :instrument 15} {:time 157, :pitch 76, :instrument 15} {:time 158, :pitch 73, :instrument 15} {:time 159, :pitch 76, :instrument 15} {:time 160, :pitch 73, :instrument 15} {:time 161, :pitch 63, :instrument 15} {:time 162, :pitch 72, :instrument 15} {:time 163, :pitch 75, :instrument 15} {:time 164, :pitch 72, :instrument 15} {:time 165, :pitch 75, :instrument 15} {:time 166, :pitch 72, :instrument 15} {:time 167, :pitch 75, :instrument 15} {:time 168, :pitch 72, :instrument 15} {:time 169, :pitch 63, :instrument 15} {:time 170, :pitch 72, :instrument 15} {:time 171, :pitch 75, :instrument 15} {:time 172, :pitch 72, :instrument 15} {:time 173, :pitch 75, :instrument 15} {:time 174, :pitch 72, :instrument 15} {:time 175, :pitch 75, :instrument 15} {:time 176, :pitch 72, :instrument 15} {:time 177, :pitch 62, :instrument 15} {:time 178, :pitch 71, :instrument 15} {:time 179, :pitch 74, :instrument 15} {:time 180, :pitch 71, :instrument 15} {:time 181, :pitch 74, :instrument 15} {:time 182, :pitch 71, :instrument 15} {:time 183, :pitch 74, :instrument 15} {:time 184, :pitch 71, :instrument 15} {:time 185, :pitch 63, :instrument 15} {:time 186, :pitch 72, :instrument 15} {:time 187, :pitch 75, :instrument 15} {:time 188, :pitch 72, :instrument 15} {:time 189, :pitch 75, :instrument 15} {:time 190, :pitch 72, :instrument 15} {:time 191, :pitch 75, :instrument 15} {:time 192, :pitch 72, :instrument 15} {:time 193, :pitch 62, :instrument 15} {:time 194, :pitch 71, :instrument 15} {:time 195, :pitch 74, :instrument 15} {:time 196, :pitch 71, :instrument 15} {:time 197, :pitch 74, :instrument 15} {:time 198, :pitch 71, :instrument 15} {:time 199, :pitch 74, :instrument 15} {:time 200, :pitch 71, :instrument 15} {:time 201, :pitch 63, :instrument 15} {:time 202, :pitch 72, :instrument 15} {:time 203, :pitch 75, :instrument 15} {:time 204, :pitch 72, :instrument 15} {:time 205, :pitch 75, :instrument 15} {:time 206, :pitch 72, :instrument 15} {:time 207, :pitch 75, :instrument 15} {:time 208, :pitch 72, :instrument 15} {:time 209, :pitch 71, :instrument 15} {:time 210, :pitch 75, :instrument 15} {:time 211, :pitch 83, :instrument 15} {:time 212, :pitch 75, :instrument 15} {:time 213, :pitch 83, :instrument 15} {:time 214, :pitch 75, :instrument 15} {:time 215, :pitch 83, :instrument 15} {:time 216, :pitch 75, :instrument 15} {:time 217, :pitch 65, :instrument 15} {:time 218, :pitch 75, :instrument 15} {:time 219, :pitch 77, :instrument 15} {:time 220, :pitch 75, :instrument 15} {:time 221, :pitch 77, :instrument 15} {:time 222, :pitch 75, :instrument 15} {:time 223, :pitch 77, :instrument 15} {:time 224, :pitch 75, :instrument 15} {:time 225, :pitch 72, :instrument 15} {:time 226, :pitch 76, :instrument 15} {:time 227, :pitch 72, :instrument 15} {:time 228, :pitch 76, :instrument 15} {:time 229, :pitch 72, :instrument 15} {:time 230, :pitch 76, :instrument 15} {:time 231, :pitch 72, :instrument 15} {:time 232, :pitch 76, :instrument 15} {:time 233, :pitch 63, :instrument 15} {:time 234, :pitch 72, :instrument 15} {:time 235, :pitch 75, :instrument 15} {:time 236, :pitch 72, :instrument 15} {:time 237, :pitch 75, :instrument 15} {:time 238, :pitch 72, :instrument 15} {:time 239, :pitch 75, :instrument 15} {:time 240, :pitch 72, :instrument 15} {:time 241, :pitch 65, :instrument 15} {:time 242, :pitch 75, :instrument 15} {:time 243, :pitch 77, :instrument 15} {:time 244, :pitch 75, :instrument 15} {:time 245, :pitch 77, :instrument 15} {:time 246, :pitch 75, :instrument 15} {:time 247, :pitch 77, :instrument 15} {:time 248, :pitch 75, :instrument 15} {:time 249, :pitch 64, :instrument 15} {:time 250, :pitch 73, :instrument 15} {:time 251, :pitch 76, :instrument 15} {:time 252, :pitch 73, :instrument 15} {:time 253, :pitch 76, :instrument 15} {:time 254, :pitch 73, :instrument 15} {:time 255, :pitch 76, :instrument 15} {:time 256, :pitch 73, :instrument 15} {:time 257, :pitch 63, :instrument 15} {:time 258, :pitch 72, :instrument 15} {:time 259, :pitch 75, :instrument 15} {:time 260, :pitch 72, :instrument 15} {:time 261, :pitch 75, :instrument 15} {:time 262, :pitch 72, :instrument 15} {:time 263, :pitch 75, :instrument 15} {:time 264, :pitch 72, :instrument 15} {:time 265, :pitch 63, :instrument 15} {:time 266, :pitch 72, :instrument 15} {:time 267, :pitch 75, :instrument 15} {:time 268, :pitch 72, :instrument 15} {:time 269, :pitch 75, :instrument 15} {:time 270, :pitch 72, :instrument 15} {:time 271, :pitch 75, :instrument 15} {:time 272, :pitch 72, :instrument 15} {:time 273, :pitch 65, :instrument 15} {:time 274, :pitch 75, :instrument 15} {:time 275, :pitch 77, :instrument 15} {:time 276, :pitch 75, :instrument 15} {:time 277, :pitch 77, :instrument 15} {:time 278, :pitch 75, :instrument 15} {:time 279, :pitch 77, :instrument 15} {:time 280, :pitch 75, :instrument 15} {:time 281, :pitch 64, :instrument 15} {:time 282, :pitch 73, :instrument 15} {:time 283, :pitch 76, :instrument 15} {:time 284, :pitch 73, :instrument 15} {:time 285, :pitch 76, :instrument 15} {:time 286, :pitch 73, :instrument 15} {:time 287, :pitch 76, :instrument 15} {:time 288, :pitch 73, :instrument 15} {:time 289, :pitch 63, :instrument 15} {:time 290, :pitch 72, :instrument 15} {:time 291, :pitch 75, :instrument 15} {:time 292, :pitch 72, :instrument 15} {:time 293, :pitch 75, :instrument 15} {:time 294, :pitch 72, :instrument 15} {:time 295, :pitch 75, :instrument 15} {:time 296, :pitch 72, :instrument 15} {:time 297, :pitch 60, :instrument 15} {:time 298, :pitch 64, :instrument 15} {:time 299, :pitch 72, :instrument 15} {:time 300, :pitch 64, :instrument 15} {:time 301, :pitch 72, :instrument 15} {:time 302, :pitch 64, :instrument 15} {:time 303, :pitch 72, :instrument 15} {:time 304, :pitch 64, :instrument 15} {:time 305, :pitch 71, :instrument 15} {:time 306, :pitch 75, :instrument 15} {:time 307, :pitch 83, :instrument 15} {:time 308, :pitch 75, :instrument 15} {:time 309, :pitch 83, :instrument 15} {:time 310, :pitch 75, :instrument 15} {:time 311, :pitch 83, :instrument 15} {:time 312, :pitch 75, :instrument 15} {:time 313, :pitch 65, :instrument 15} {:time 314, :pitch 75, :instrument 15} {:time 315, :pitch 77, :instrument 15} {:time 316, :pitch 75, :instrument 15} {:time 317, :pitch 77, :instrument 15} {:time 318, :pitch 75, :instrument 15} {:time 319, :pitch 77, :instrument 15} {:time 320, :pitch 75, :instrument 15} {:time 321, :pitch 72, :instrument 15} {:time 322, :pitch 76, :instrument 15} {:time 323, :pitch 72, :instrument 15} {:time 324, :pitch 76, :instrument 15} {:time 325, :pitch 72, :instrument 15} {:time 326, :pitch 76, :instrument 15} {:time 327, :pitch 72, :instrument 15} {:time 328, :pitch 76, :instrument 15} {:time 329, :pitch 63, :instrument 15} {:time 330, :pitch 72, :instrument 15} {:time 331, :pitch 75, :instrument 15} {:time 332, :pitch 72, :instrument 15} {:time 333, :pitch 75, :instrument 15} {:time 334, :pitch 72, :instrument 15} {:time 335, :pitch 75, :instrument 15} {:time 336, :pitch 72, :instrument 15} {:time 337, :pitch 65, :instrument 15} {:time 338, :pitch 75, :instrument 15} {:time 339, :pitch 77, :instrument 15} {:time 340, :pitch 75, :instrument 15} {:time 341, :pitch 77, :instrument 15} {:time 342, :pitch 75, :instrument 15} {:time 343, :pitch 77, :instrument 15} {:time 344, :pitch 75, :instrument 15} {:time 345, :pitch 64, :instrument 15} {:time 346, :pitch 73, :instrument 15} {:time 347, :pitch 76, :instrument 15} {:time 348, :pitch 73, :instrument 15} {:time 349, :pitch 76, :instrument 15} {:time 350, :pitch 73, :instrument 15} {:time 351, :pitch 76, :instrument 15} {:time 352, :pitch 73, :instrument 15} {:time 353, :pitch 63, :instrument 15} {:time 354, :pitch 72, :instrument 15} {:time 355, :pitch 75, :instrument 15} {:time 356, :pitch 72, :instrument 15} {:time 357, :pitch 75, :instrument 15} {:time 358, :pitch 72, :instrument 15} {:time 359, :pitch 75, :instrument 15} {:time 360, :pitch 72, :instrument 15} {:time 361, :pitch 63, :instrument 15} {:time 362, :pitch 72, :instrument 15} {:time 363, :pitch 75, :instrument 15} {:time 364, :pitch 72, :instrument 15} {:time 365, :pitch 75, :instrument 15} {:time 366, :pitch 72, :instrument 15} {:time 367, :pitch 75, :instrument 15} {:time 368, :pitch 72, :instrument 15} {:time 369, :pitch 62, :instrument 15} {:time 370, :pitch 71, :instrument 15} {:time 371, :pitch 74, :instrument 15} {:time 372, :pitch 71, :instrument 15} {:time 373, :pitch 74, :instrument 15} {:time 374, :pitch 71, :instrument 15} {:time 375, :pitch 74, :instrument 15} {:time 376, :pitch 71, :instrument 15} {:time 377, :pitch 63, :instrument 15} {:time 378, :pitch 72, :instrument 15} {:time 379, :pitch 75, :instrument 15} {:time 380, :pitch 72, :instrument 15} {:time 381, :pitch 75, :instrument 15} {:time 382, :pitch 72, :instrument 15} {:time 383, :pitch 75, :instrument 15} {:time 384, :pitch 72, :instrument 15} {:time 385, :pitch 62, :instrument 15} {:time 386, :pitch 71, :instrument 15} {:time 387, :pitch 74, :instrument 15} {:time 388, :pitch 71, :instrument 15} {:time 389, :pitch 74, :instrument 15} {:time 390, :pitch 71, :instrument 15} {:time 391, :pitch 74, :instrument 15} {:time 392, :pitch 71, :instrument 15} {:time 393, :pitch 63, :instrument 15} {:time 394, :pitch 72, :instrument 15} {:time 395, :pitch 75, :instrument 15} {:time 396, :pitch 72, :instrument 15} {:time 397, :pitch 75, :instrument 15} {:time 398, :pitch 72, :instrument 15} {:time 399, :pitch 75, :instrument 15} {:time 400, :pitch 72, :instrument 15} {:time 401, :pitch 71, :instrument 15} {:time 402, :pitch 75, :instrument 15} {:time 403, :pitch 83, :instrument 15} {:time 404, :pitch 75, :instrument 15} {:time 405, :pitch 83, :instrument 15} {:time 406, :pitch 75, :instrument 15} {:time 407, :pitch 83, :instrument 15} {:time 408, :pitch 75, :instrument 15} {:time 409, :pitch 65, :instrument 15} {:time 410, :pitch 75, :instrument 15} {:time 411, :pitch 77, :instrument 15} {:time 412, :pitch 75, :instrument 15} {:time 413, :pitch 77, :instrument 15} {:time 414, :pitch 75, :instrument 15} {:time 415, :pitch 77, :instrument 15} {:time 416, :pitch 75, :instrument 15} {:time 417, :pitch 72, :instrument 15} {:time 418, :pitch 76, :instrument 15} {:time 419, :pitch 72, :instrument 15} {:time 420, :pitch 76, :instrument 15} {:time 421, :pitch 72, :instrument 15} {:time 422, :pitch 76, :instrument 15} {:time 423, :pitch 72, :instrument 15} {:time 424, :pitch 76, :instrument 15} {:time 425, :pitch 63, :instrument 15} {:time 426, :pitch 72, :instrument 15} {:time 427, :pitch 75, :instrument 15} {:time 428, :pitch 72, :instrument 15} {:time 429, :pitch 75, :instrument 15} {:time 430, :pitch 72, :instrument 15} {:time 431, :pitch 75, :instrument 15} {:time 432, :pitch 72, :instrument 15} {:time 433, :pitch 65, :instrument 15} {:time 435, :pitch 75, :instrument 15} {:time 437, :pitch 77, :instrument 15} {:time 441, :pitch 64, :instrument 15} {:time 443, :pitch 73, :instrument 15} {:time 445, :pitch 76, :instrument 15} {:time 449, :pitch 63, :instrument 15} {:time 451, :pitch 72, :instrument 15} {:time 453, :pitch 75, :instrument 15} {:time 457, :pitch 63, :instrument 15} {:time 459, :pitch 72, :instrument 15} {:time 461, :pitch 75, :instrument 15} {:time 465, :pitch 65, :instrument 15} {:time 467, :pitch 75, :instrument 15} {:time 469, :pitch 77, :instrument 15} {:time 471, :pitch 72, :instrument 15} {:time 473, :pitch 72, :instrument 15}
]
)))

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
   (let [notes (subscribe [:notes])
         beat (subscribe [:current-position])
         to-play (filter #(= (+ 1 @beat) (:time %)) @notes)]
     (if (< 8 @beat)
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
   (update db :mario-run #(if (= % 3) 1 (inc %)))))

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

(reg-event-db
 :submit-xml
 (fn [db [_ xml]]
    (assoc db :xml xml)))
