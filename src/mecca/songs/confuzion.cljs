(ns mecca.songs.confuzion
  (:require
   [mecca.music :as music]
   [re-frame.core :as rf :refer [subscribe dispatch]]))

(defn note-beats []
  (sort
   (map :time
        @(subscribe [:notes]))))

@(dispatch
  [:set-tempo 156.5])

(defn bass1 [time]
  [{:time (+ time 0), :instrument 15, :pitch 71} {:time (+ time 1.5) :instrument 15, :pitch 71} {:time (+ time 2) :instrument 15, :pitch 71} {:time (+ time 3) :instrument 15, :pitch 73} {:time (+ time 3.5) :instrument 15, :pitch 69} {:time (+ time 4) :instrument 15, :pitch 69} {:time (+ time 5.5) :instrument 15, :pitch 69} {:time (+ time 6) :instrument 15, :pitch 69} {:time (+ time 8) :instrument 15, :pitch 64} {:time (+ time 9.5) :instrument 15, :pitch 64} {:time (+ time 10) :instrument 15, :pitch 64} {:time (+ time 12) :instrument 15, :pitch 64} {:time (+ time 13.5) :instrument 15, :pitch 64} {:time (+ time 14) :instrument 15, :pitch 64}])

(defn bass2 [time]
  (map (fn [m] (update m :time #(+ % time)))
  [{:time 29.5, :instrument 15, :pitch 69} {:time 29, :instrument 15, :pitch 64} {:time 31, :instrument 15, :pitch 64} {:time 26, :instrument 15, :pitch 69} {:time 25.5, :instrument 15, :pitch 69} {:time 24, :instrument 15, :pitch 69} {:time 23, :instrument 15, :pitch 67} {:time 22.5, :instrument 15, :pitch 66} {:time 17.5, :instrument 15, :pitch 64} {:time 0, :instrument 15, :pitch 71} {:time 1.5, :instrument 15, :pitch 66} {:time 2, :instrument 15, :pitch 64} {:time 2.5, :instrument 15, :pitch 62} {:time 3.5, :instrument 15, :pitch 59} {:time 5.5, :instrument 15, :pitch 66} {:time 6, :instrument 15, :pitch 64} {:time 7, :instrument 15, :pitch 62} {:time 8, :instrument 15, :pitch 69} {:time 9.5, :instrument 15, :pitch 64} {:time 10, :instrument 15, :pitch 62} {:time 10.5, :instrument 15, :pitch 61} {:time 11.5, :instrument 15, :pitch 57} {:time 13.5, :instrument 15, :pitch 64} {:time 14, :instrument 15, :pitch 62} {:time 15, :instrument 15, :pitch 61} {:time 16, :instrument 15, :pitch 64} {:time 18.5, :instrument 15, :pitch 64} {:time 19, :instrument 15, :pitch 66} {:time 19.5, :instrument 15, :pitch 67} {:time 20.5, :instrument 15, :pitch 66} {:time 21, :instrument 15, :pitch 64} {:time 21.5, :instrument 15, :pitch 64}]))

(defn bass3 [time]
  (map (fn [m] (update m :time #(+ % time)))
  [{:time 0, :instrument 15, :pitch 66} {:time 1.5, :instrument 15, :pitch 66} {:time 2, :instrument 15, :pitch 66} {:time 3, :instrument 15, :pitch 69} {:time 4, :instrument 15, :pitch 64} {:time 5.5, :instrument 15, :pitch 64} {:time 6, :instrument 15, :pitch 64} {:time 8, :instrument 15, :pitch 64} {:time 9.5, :instrument 15, :pitch 64} {:time 10, :instrument 15, :pitch 64} {:time 11, :instrument 15, :pitch 61} {:time 12, :instrument 15, :pitch 62} {:time 13.5, :instrument 15, :pitch 62} {:time 14, :instrument 15, :pitch 62} {:time 16, :instrument 15, :pitch 62} {:time 17.5, :instrument 15, :pitch 62} {:time 18, :instrument 15, :pitch 62} {:time 20, :instrument 15, :pitch 61} {:time 21.5, :instrument 15, :pitch 61} {:time 22, :instrument 15, :pitch 61} {:time 24, :instrument 15, :pitch 61} {:time 25.5, :instrument 15, :pitch 73} {:time 26.5, :instrument 15, :pitch 71} {:time 27, :instrument 15, :pitch 69} {:time 27.5, :instrument 15, :pitch 68}]))

(defn bass4 [time]
  (map (fn [m] (update m :time #(+ % time)))
  [{:time 0, :instrument 15, :pitch 66} {:time 1.5, :instrument 15, :pitch 66} {:time 2, :instrument 15, :pitch 66} {:time 4, :instrument 15, :pitch 64} {:time 5.5, :instrument 15, :pitch 64} {:time 6, :instrument 15, :pitch 64} {:time 7, :instrument 15, :pitch 61} {:time 8, :instrument 15, :pitch 62} {:time 9.5, :instrument 15, :pitch 62} {:time 10, :instrument 15, :pitch 62} {:time 12, :instrument 15, :pitch 69} {:time 13.5, :instrument 15, :pitch 69} {:time 14, :instrument 15, :pitch 69}]))

(defn bass5 [time]
  (map (fn [m] (update m :time #(+ % time)))
  [{:time 0, :instrument 15, :pitch 67} {:time 8, :instrument 15, :pitch 66} {:time 16, :instrument 15, :pitch 64} {:time 17, :instrument 15, :pitch 62} {:time 18, :instrument 15, :pitch 61} {:time 19, :instrument 15, :pitch 59}]))

(def bass-pat-1 
  (concat (bass1 0) (bass1 16) (bass2 32) (bass3 64) (bass4 92) (bass4 108) (bass5 124)))

(defn bass6 [time]
  (map (fn [m] (update m :time #(+ % time)))
  [{:time 0, :instrument 15, :pitch 71} {:time 1.5, :instrument 15, :pitch 66} {:time 2, :instrument 15, :pitch 71} {:time 2.5, :instrument 15, :pitch 66} {:time 3.5, :instrument 15, :pitch 66} {:time 4, :instrument 15, :pitch 69} {:time 5.5, :instrument 15, :pitch 69} {:time 6, :instrument 15, :pitch 69} {:time 8, :instrument 15, :pitch 68} {:time 9.5, :instrument 15, :pitch 64} {:time 10, :instrument 15, :pitch 68} {:time 10.5, :instrument 15, :pitch 64} {:time 11.5, :instrument 15, :pitch 64} {:time 12, :instrument 15, :pitch 66} {:time 13.5, :instrument 15, :pitch 66} {:time 14, :instrument 15, :pitch 66}]))

(defn bass7 [time]
  (map (fn [m] (update m :time #(+ % time)))
    [{:time 0, :instrument 15, :pitch 67} {:time 1, :instrument 15, :pitch 62} {:time 1.5, :instrument 15, :pitch 64} {:time 2, :instrument 15, :pitch 67} {:time 2.5, :instrument 15, :pitch 62} {:time 3, :instrument 15, :pitch 67} {:time 3.5, :instrument 15, :pitch 67} {:time 4, :instrument 15, :pitch 66} {:time 5.5, :instrument 15, :pitch 66} {:time 6, :instrument 15, :pitch 66} {:time 8, :instrument 15, :pitch 67} {:time 9, :instrument 15, :pitch 62} {:time 9.5, :instrument 15, :pitch 64} {:time 10, :instrument 15, :pitch 67} {:time 10.5, :instrument 15, :pitch 62} {:time 11, :instrument 15, :pitch 67} {:time 11.5, :instrument 15, :pitch 66} {:time 12, :instrument 15, :pitch 64} {:time 13.5, :instrument 15, :pitch 64} {:time 14, :instrument 15, :pitch 64} {:time 16, :instrument 15, :pitch 64} {:time 17.5, :instrument 15, :pitch 64} {:time 18, :instrument 15, :pitch 64}]))

(def bass-pat-2
  (concat (bass6 144) (bass6 160) (bass7 176) (bass1 196) (bass1 212)))

(def bass-pat-3 
  (concat (bass2 228) (bass3 260) (bass4 288) (bass4 304) (bass5 320)))

(def bass-pat-4
  (concat (bass6 340) (bass6 356) (bass7 372) (bass1 392) (bass1 408)))

(def bass-pat-5
  (concat (bass6 424) (bass6 440) (bass7 456) (bass1 476) (bass1 492)))

@(dispatch 
  [:set-notes (concat bass-pat-1 bass-pat-2 bass-pat-3 bass-pat-4 bass-pat-5 (bass1 508) (bass1 524) (bass1 540) (bass1 556))])

(defn drums1 [time]
    (map (fn [m] (update m :time #(+ % time)))
  [{:time 15, :instrument 3, :pitch 67} {:time 14, :instrument 13, :pitch 77} {:time 13, :instrument 13, :pitch 77} {:time 12, :instrument 13, :pitch 77} {:time 11, :instrument 3, :pitch 67} {:time 10, :instrument 13, :pitch 77} {:time 9, :instrument 13, :pitch 77} {:time 8, :instrument 13, :pitch 77} {:time 7, :instrument 3, :pitch 67} {:time 6, :instrument 13, :pitch 77} {:time 5, :instrument 13, :pitch 77} {:time 4, :instrument 13, :pitch 77} {:time 3, :instrument 3, :pitch 67} {:time 2, :instrument 13, :pitch 77} {:time 1, :instrument 13, :pitch 77} {:time 0, :instrument 13, :pitch 77}]))

(defn drums2 [time]
  (map (fn [m] (update m :time #(+ % time)))
       [{:time 7.5, :instrument 13, :pitch 77} {:time 7, :instrument 3, :pitch 67} {:time 6.5, :instrument 13, :pitch 77} {:time 6, :instrument 13, :pitch 77} {:time 5.5, :instrument 13, :pitch 77} {:time 5, :instrument 3, :pitch 67} {:time 4.5, :instrument 13, :pitch 77} {:time 4, :instrument 13, :pitch 77} {:time 3.5, :instrument 13, :pitch 77} {:time 3, :instrument 3, :pitch 67} {:time 2.5, :instrument 13, :pitch 77} {:time 2, :instrument 13, :pitch 77} {:time 1.5, :instrument 13, :pitch 77} {:time 1, :instrument 3, :pitch 67} {:time 0.5, :instrument 13, :pitch 77} {:time 0, :instrument 13, :pitch 77}]))

(def drums-pat-1
  (concat (drums1 0) (drums1 16) (drums1 32) (drums1 48) (drums1 64) (drums1 80) (drums1 96) (drums1 112)
   [{:time 131, :instrument 3, :pitch 67} {:time 130, :instrument 13, :pitch 77} {:time 129, :instrument 13, :pitch 77} {:time 128, :instrument 13, :pitch 77}]))

(def drums-pat-2
  (concat
   (drums2 132)
   (drums2 140)))

(defn glis [notes]
  (let [chord (reverse (sort-by :pitch notes))
        times (for [note (range (count chord))]
                (update (nth chord note) :time #(+ % (* 0.1 note))))
        pitches (for [note (range (count times))]
                  (update (nth times note) :pitch #(- % note)))
        last-note (repeat 3 (last pitches))
        last-note (for [note (range 1 3)]
                    (update (nth last-note note) :time #(+ % (/ note 10.0))))]
(concat pitches last-note)))

(def lead1
  (concat [{:time 1.5, :instrument 14, :pitch 69} {:time 2, :instrument 14, :pitch 71} {:time 2.5, :instrument 14, :pitch 74} {:time 3, :instrument 14, :pitch 76} {:time 3.5, :instrument 14, :pitch 78} {:time 4, :instrument 14, :pitch 78} {:time 4.5, :instrument 14, :pitch 78} {:time 5, :instrument 14, :pitch 76} {:time 6, :instrument 14, :pitch 74} {:time 6.5, :instrument 14, :pitch 76} {:time 7.5, :instrument 14, :pitch 74} {:time 7.75, :instrument 14, :pitch 76} {:time 8, :instrument 14, :pitch 74} {:time 9, :instrument 14, :pitch 74} {:time 9.5, :instrument 14, :pitch 71}]
    (glis (repeat 12 {:time 10 :instrument 8, :pitch 71}))
    [{:time 12, :instrument 14, :pitch 74} {:time 12.5, :instrument 14, :pitch 74} {:time 13.5, :instrument 14, :pitch 74} {:time 14.5, :instrument 14, :pitch 71} {:time 15.5, :instrument 14, :pitch 69} {:time 16, :instrument 14, :pitch 71}]
    (glis (repeat 8 {:time 16, :instrument 8, :pitch 71}))
    [{:time 17.5, :instrument 14, :pitch 64} {:time 18, :instrument 14, :pitch 66} {:time 18.5, :instrument 14, :pitch 69} {:time 19, :instrument 14, :pitch 71} {:time 20, :instrument 14, :pitch 71} {:time 20.5, :instrument 14, :pitch 73} {:time 21.5, :instrument 14, :pitch 69} {:time 22.5, :instrument 14, :pitch 69} {:time 24, :instrument 14, :pitch 66} {:time 24.5, :instrument 14, :pitch 64} {:time 25.5, :instrument 14, :pitch 64}]))

(defn lead2 [time]
  (map (fn [m] (update m :time #(+ % time)))
  [{:time 0, :instrument 5, :pitch 66} {:time 1.5, :instrument 5, :pitch 71} {:time 7, :instrument 5, :pitch 71} {:time 8, :instrument 5, :pitch 71} {:time 8.5, :instrument 5, :pitch 69} {:time 9.5, :instrument 5, :pitch 64} {:time 15, :instrument 5, :pitch 66} {:time 16, :instrument 5, :pitch 67} {:time 16.5, :instrument 5, :pitch 64} {:time 17, :instrument 5, :pitch 59} {:time 17.5, :instrument 5, :pitch 64} {:time 21, :instrument 5, :pitch 61} {:time 21.5, :instrument 5, :pitch 61} {:time 22.5, :instrument 5, :pitch 62} {:time 24, :instrument 5, :pitch 66} {:time 25.5, :instrument 5, :pitch 64}]))

(def lead3
  [{:time 65, :instrument 5, :pitch 73} {:time 65.5, :instrument 5, :pitch 73} {:time 67, :instrument 5, :pitch 73} {:time 68, :instrument 5, :pitch 73} {:time 69, :instrument 5, :pitch 74} {:time 69.5, :instrument 5, :pitch 71} {:time 73.5, :instrument 5, :pitch 71} {:time 74, :instrument 5, :pitch 71} {:time 75, :instrument 5, :pitch 71} {:time 76, :instrument 5, :pitch 71} {:time 76.5, :instrument 5, :pitch 73} {:time 77, :instrument 5, :pitch 71} {:time 77.5, :instrument 5, :pitch 69} {:time 81, :instrument 5, :pitch 69} {:time 81.5, :instrument 5, :pitch 69} {:time 82.5, :instrument 5, :pitch 68} {:time 83.5, :instrument 5, :pitch 66} {:time 84, :instrument 5, :pitch 68} {:time 85.5, :instrument 5, :pitch 66} {:time 88, :instrument 5, :pitch 65} {:time 88.5, :instrument 5, :pitch 66} {:time 89.5, :instrument 5, :pitch 68} {:time 92, :instrument 5, :pitch 69}])

(def lead4
  [{:time 93.5, :instrument 14, :pitch 64} {:time 94, :instrument 14, :pitch 66} {:time 94.5, :instrument 14, :pitch 69} {:time 95, :instrument 14, :pitch 71} {:time 95.5, :instrument 14, :pitch 73} {:time 97, :instrument 14, :pitch 71} {:time 98, :instrument 14, :pitch 69} {:time 98.5, :instrument 14, :pitch 71} {:time 99.5, :instrument 14, :pitch 69} {:time 99.75, :instrument 14, :pitch 71} {:time 100, :instrument 14, :pitch 69} {:time 101.5, :instrument 14, :pitch 66}])

(def gb1 [{:time 102, :instrument 6, :pitch 66} {:time 103, :instrument 6, :pitch 74} {:time 104, :instrument 6, :pitch 73} {:time 118, :instrument 6, :pitch 66} {:time 119, :instrument 6, :pitch 74} {:time 120, :instrument 6, :pitch 73} {:time 125.5, :instrument 6, :pitch 71} {:time 126, :instrument 6, :pitch 71} {:time 126.5, :instrument 6, :pitch 71} {:time 128, :instrument 6, :pitch 71} {:time 128.5, :instrument 6, :pitch 73} {:time 129.5, :instrument 6, :pitch 69} {:time 133.5, :instrument 6, :pitch 69} {:time 134, :instrument 6, :pitch 69} {:time 135, :instrument 6, :pitch 66} {:time 136, :instrument 6, :pitch 69} {:time 137.5, :instrument 6, :pitch 68}])

(def lead5 [{:time 93.5, :instrument 14, :pitch 64} {:time 94, :instrument 14, :pitch 66} {:time 94.5, :instrument 14, :pitch 69} {:time 95, :instrument 14, :pitch 71} {:time 95.5, :instrument 14, :pitch 73} {:time 97, :instrument 14, :pitch 71} {:time 98, :instrument 14, :pitch 69} {:time 98.5, :instrument 14, :pitch 71} {:time 99.5, :instrument 14, :pitch 69} {:time 99.75, :instrument 14, :pitch 71} {:time 100, :instrument 14, :pitch 69} {:time 101.5, :instrument 14, :pitch 66} {:time 105.5, :instrument 14, :pitch 69} {:time 106, :instrument 14, :pitch 69} {:time 106.5, :instrument 14, :pitch 69} {:time 107, :instrument 14, :pitch 68} {:time 107.5, :instrument 14, :pitch 68} {:time 108, :instrument 14, :pitch 66} {:time 105.5, :instrument 14, :pitch 57} {:time 106, :instrument 14, :pitch 57} {:time 106.5, :instrument 14, :pitch 57} {:time 107, :instrument 14, :pitch 56} {:time 107.5, :instrument 14, :pitch 56} {:time 108, :instrument 14, :pitch 54} {:time 110, :instrument 14, :pitch 78} {:time 110.5, :instrument 14, :pitch 76} {:time 111, :instrument 14, :pitch 73} {:time 111.5, :instrument 14, :pitch 71} {:time 112, :instrument 14, :pitch 73} {:time 114.5, :instrument 14, :pitch 71} {:time 115, :instrument 14, :pitch 73} {:time 115.5, :instrument 14, :pitch 71} {:time 116, :instrument 14, :pitch 71} {:time 116.5, :instrument 14, :pitch 69} {:time 117.5, :instrument 14, :pitch 69} {:time 118, :instrument 6, :pitch 66} {:time 119, :instrument 6, :pitch 74} {:time 120, :instrument 6, :pitch 73}])

(def plane1 [{:time 125.5, :instrument 12, :pitch 86} {:time 126, :instrument 12, :pitch 86} {:time 126.5, :instrument 12, :pitch 86} {:time 128, :instrument 12, :pitch 86} {:time 128.5, :instrument 12, :pitch 88} {:time 129.5, :instrument 12, :pitch 85} {:time 133.5, :instrument 12, :pitch 85} {:time 134, :instrument 12, :pitch 85} {:time 135, :instrument 12, :pitch 81} {:time 136, :instrument 12, :pitch 85} {:time 137.5, :instrument 12, :pitch 83}])

@(dispatch
  [:set-notes lead5])

@(dispatch
  [:set-notes
   (concat
    bass-pat-1
    drums-pat-1 drums-pat-2
    lead1 (lead2 32) lead3 lead4 gb1 lead5 plane1
    )])

(sort-by :time
 (filter #(= 6 (:instrument %))
         @(subscribe [:notes])))

@(dispatch
  [:set-notes
(sort-by :time
         (filter #(or (= 14 (:instrument %))
                      (= 6 (:instrument %)))
         @(subscribe [:notes])))])