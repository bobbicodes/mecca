(ns mecca.songs.confuzion
  (:require
   [mecca.music :as music]
   [re-frame.core :as rf :refer [subscribe dispatch]]))


(defn glis [notes]
  (let [chord (reverse (sort-by :pitch notes))
        times (for [note (range (count chord))]
                (update (nth chord note) :time #(+ % (* 0.03125 note))))]
    (for [note (range (count times))]
      (update (nth times note) :pitch #(- % note)))))

(defn note-beats []
  (sort
   (map :time
        @(subscribe [:notes]))))

(defn delay-note [beats note]
  (update note :time #(+ beats %)))

(defn loop-notes [notes]
  (let [length (apply max (map #(:time %) notes))]
    (into notes
          (map #(delay-note (inc length) %) notes))))

@(dispatch
  [:set-tempo 156.5])

(defn bass1 [time]
  [{:time (+ time 0), :instrument 15, :pitch 71}
   {:time (+ time 1.5) :instrument 15, :pitch 71}
   {:time (+ time 2) :instrument 15, :pitch 71}
   {:time (+ time 3) :instrument 15, :pitch 73}
   {:time (+ time 3.5) :instrument 15, :pitch 69}
   {:time (+ time 4) :instrument 15, :pitch 69}
   {:time (+ time 5.5) :instrument 15, :pitch 69}
   {:time (+ time 6) :instrument 15, :pitch 69}
   {:time (+ time 8) :instrument 15, :pitch 64}
   {:time (+ time 9.5) :instrument 15, :pitch 64}
   {:time (+ time 10) :instrument 15, :pitch 64}
   {:time (+ time 12) :instrument 15, :pitch 64}
   {:time (+ time 13.5) :instrument 15, :pitch 64}
   {:time (+ time 14) :instrument 15, :pitch 64}])

(defn bass2 [time]
  (map (fn [m] (update m :time #(+ % time)))
  [{:time 29.5, :instrument 15, :pitch 69} 
   {:time 29, :instrument 15, :pitch 64} 
   {:time 31, :instrument 15, :pitch 64} 
   {:time 26, :instrument 15, :pitch 69} 
   {:time 25.5, :instrument 15, :pitch 69} 
   {:time 24, :instrument 15, :pitch 69} 
   {:time 23, :instrument 15, :pitch 67} 
   {:time 22.5, :instrument 15, :pitch 66} 
   {:time 17.5, :instrument 15, :pitch 64} 
   {:time 0, :instrument 15, :pitch 71} 
   {:time 1.5, :instrument 15, :pitch 66} 
   {:time 2, :instrument 15, :pitch 64} 
   {:time 2.5, :instrument 15, :pitch 62} 
   {:time 3.5, :instrument 15, :pitch 59} 
   {:time 5.5, :instrument 15, :pitch 66} 
   {:time 6, :instrument 15, :pitch 64} 
   {:time 7, :instrument 15, :pitch 62} 
   {:time 8, :instrument 15, :pitch 69} 
   {:time 9.5, :instrument 15, :pitch 64} 
   {:time 10, :instrument 15, :pitch 62} 
   {:time 10.5, :instrument 15, :pitch 61} 
   {:time 11.5, :instrument 15, :pitch 57} 
   {:time 13.5, :instrument 15, :pitch 64} 
   {:time 14, :instrument 15, :pitch 62}
   {:time 15, :instrument 15, :pitch 61} 
   {:time 16, :instrument 15, :pitch 64} 
   {:time 18.5, :instrument 15, :pitch 64} 
   {:time 19, :instrument 15, :pitch 66} 
   {:time 19.5, :instrument 15, :pitch 67} 
   {:time 20.5, :instrument 15, :pitch 66} 
   {:time 21, :instrument 15, :pitch 64} 
   {:time 21.5, :instrument 15, :pitch 64}]))

(defn bass3 [time]
  (map (fn [m] (update m :time #(+ % time)))
  [{:time 0, :instrument 15, :pitch 66} {:time 1.5, :instrument 15, :pitch 66} {:time 2, :instrument 15, :pitch 66} {:time 3, :instrument 15, :pitch 69} {:time 4, :instrument 15, :pitch 64} {:time 5.5, :instrument 15, :pitch 64} {:time 6, :instrument 15, :pitch 64} {:time 8, :instrument 15, :pitch 64} {:time 9.5, :instrument 15, :pitch 64} {:time 10, :instrument 15, :pitch 64} {:time 11, :instrument 15, :pitch 61} {:time 12, :instrument 15, :pitch 62} {:time 13.5, :instrument 15, :pitch 62} {:time 14, :instrument 15, :pitch 62} {:time 16, :instrument 15, :pitch 62} {:time 17.5, :instrument 15, :pitch 62} {:time 18, :instrument 15, :pitch 62} {:time 20, :instrument 15, :pitch 61} {:time 21.5, :instrument 15, :pitch 61} {:time 22, :instrument 15, :pitch 61} {:time 24, :instrument 15, :pitch 61} {:time 25.5, :instrument 15, :pitch 73} {:time 26.5, :instrument 15, :pitch 71} {:time 27, :instrument 15, :pitch 69} {:time 27.5, :instrument 15, :pitch 68}]))

(defn bass4 [time]
  (map (fn [m] (update m :time #(+ % time)))
  [{:time 0, :instrument 15, :pitch 66} {:time 1.5, :instrument 15, :pitch 66} {:time 2, :instrument 15, :pitch 66} {:time 4, :instrument 15, :pitch 64} {:time 5.5, :instrument 15, :pitch 64} {:time 6, :instrument 15, :pitch 64} {:time 7, :instrument 15, :pitch 61} {:time 8, :instrument 15, :pitch 62} {:time 9.5, :instrument 15, :pitch 62} {:time 10, :instrument 15, :pitch 62} {:time 12, :instrument 15, :pitch 69} {:time 13.5, :instrument 15, :pitch 69} {:time 14, :instrument 15, :pitch 69}]))

(defn bass5 [time]
  (map (fn [m] (update m :time #(+ % time)))
  [{:time 0, :instrument 15, :pitch 67} {:time 8, :instrument 15, :pitch 66} {:time 16, :instrument 15, :pitch 64} {:time 17, :instrument 15, :pitch 62} {:time 18, :instrument 15, :pitch 61} {:time 19, :instrument 15, :pitch 59}]))

(def bass-pat-1 (concat
                 (bass1 0)
                 (bass1 16)
                 (bass2 32)
                 (bass3 64)
                 (bass4 92)
                 (bass4 108)
                 (bass5 124)))

(defn bass6 [time]
  (map (fn [m] (update m :time #(+ % time)))
  [{:time 0, :instrument 15, :pitch 71} {:time 1.5, :instrument 15, :pitch 66} {:time 2, :instrument 15, :pitch 71} {:time 2.5, :instrument 15, :pitch 66} {:time 3.5, :instrument 15, :pitch 66} {:time 4, :instrument 15, :pitch 69} {:time 5.5, :instrument 15, :pitch 69} {:time 6, :instrument 15, :pitch 69} {:time 8, :instrument 15, :pitch 68} {:time 9.5, :instrument 15, :pitch 64} {:time 10, :instrument 15, :pitch 68} {:time 10.5, :instrument 15, :pitch 64} {:time 11.5, :instrument 15, :pitch 64} {:time 12, :instrument 15, :pitch 66} {:time 13.5, :instrument 15, :pitch 66} {:time 14, :instrument 15, :pitch 66}]))

(defn bass7 [time]
  (map (fn [m] (update m :time #(+ % time)))
    [{:time 0, :instrument 15, :pitch 67} {:time 1, :instrument 15, :pitch 62} {:time 1.5, :instrument 15, :pitch 64} {:time 2, :instrument 15, :pitch 67} {:time 2.5, :instrument 15, :pitch 62} {:time 3, :instrument 15, :pitch 67} {:time 3.5, :instrument 15, :pitch 67} {:time 4, :instrument 15, :pitch 66} {:time 5.5, :instrument 15, :pitch 66} {:time 6, :instrument 15, :pitch 66} {:time 8, :instrument 15, :pitch 67} {:time 9, :instrument 15, :pitch 62} {:time 9.5, :instrument 15, :pitch 64} {:time 10, :instrument 15, :pitch 67} {:time 10.5, :instrument 15, :pitch 62} {:time 11, :instrument 15, :pitch 67} {:time 11.5, :instrument 15, :pitch 66} {:time 12, :instrument 15, :pitch 64} {:time 13.5, :instrument 15, :pitch 64} {:time 14, :instrument 15, :pitch 64} {:time 16, :instrument 15, :pitch 64} {:time 17.5, :instrument 15, :pitch 64} {:time 18, :instrument 15, :pitch 64}]))

(def bass-pat-2
  (concat
   (bass6 144)
   (bass6 160)
   (bass7 176)
   (bass1 196)
   (bass1 212)))

(def bass-pat-3 (concat
                 (bass2 228)
                 (bass3 260)
                 (bass4 288)
                 (bass4 304)
                 (bass5 320)))

(def bass-pat-4
  (concat
   (bass6 340)
   (bass6 356)
   (bass7 372)
   (bass1 392)
   (bass1 408)))

(def bass-pat-5
  (concat
   (bass6 424)
   (bass6 440)
   (bass7 456)
   (bass1 476)
   (bass1 492)))

@(dispatch 
  [:set-notes 
   (concat
    bass-pat-1
    bass-pat-2
    bass-pat-3
    bass-pat-4
    bass-pat-5
    (bass1 508)
    (bass1 524)
    (bass1 540)
    (bass1 556))])

(defn drums1 [time]
    (map (fn [m] (update m :time #(+ % time)))
  [
   {:time 15, :instrument 3, :pitch 67}
   {:time 14, :instrument 13, :pitch 77}
   {:time 13, :instrument 13, :pitch 77}
   {:time 12, :instrument 13, :pitch 77}
   {:time 11, :instrument 3, :pitch 67}
   {:time 10, :instrument 13, :pitch 77}
   {:time 9, :instrument 13, :pitch 77}
   {:time 8, :instrument 13, :pitch 77}
   {:time 7, :instrument 3, :pitch 67} 
   {:time 6, :instrument 13, :pitch 77} 
   {:time 5, :instrument 13, :pitch 77} 
   {:time 4, :instrument 13, :pitch 77}
   {:time 3, :instrument 3, :pitch 67}
   {:time 2, :instrument 13, :pitch 77}
   {:time 1, :instrument 13, :pitch 77}
   {:time 0, :instrument 13, :pitch 77}]))

(defn drums2 [time]
  (map (fn [m] (update m :time #(+ % time)))
       [{:time 7.5, :instrument 3, :pitch 67}
        {:time 7, :instrument 13, :pitch 77}
        {:time 6.5, :instrument 13, :pitch 77}
        {:time 6, :instrument 13, :pitch 77}
        {:time 5.5, :instrument 3, :pitch 67}
        {:time 5, :instrument 13, :pitch 77}
        {:time 4.5, :instrument 13, :pitch 77}
        {:time 4, :instrument 13, :pitch 77}
        {:time 3.5, :instrument 3, :pitch 67}
        {:time 3, :instrument 13, :pitch 77}
        {:time 2.5, :instrument 13, :pitch 77}
        {:time 2, :instrument 13, :pitch 77}
        {:time 1.5, :instrument 3, :pitch 67}
        {:time 1, :instrument 13, :pitch 77}
        {:time 0.5, :instrument 13, :pitch 77}
        {:time 0, :instrument 13, :pitch 77}]))

(def drums-pat-1
  (concat
   (drums1 0)
   (drums1 16)
   (drums1 32)
   (drums1 48)
   (drums1 64)
   (drums1 80)
   (drums1 96)
   (drums1 112)
   [{:time 131, :instrument 3, :pitch 67}
    {:time 130, :instrument 13, :pitch 77}
    {:time 129, :instrument 13, :pitch 77}
    {:time 128, :instrument 13, :pitch 77}]
   ))

(def drums-pat-2
  (drums2 132))

(def lead1
  (concat
   [{:time 1.5, :instrument 14, :pitch 69}
    {:time 2, :instrument 14, :pitch 71}
    {:time 2.5, :instrument 14, :pitch 74}
    {:time 3, :instrument 14, :pitch 76}
    {:time 3.5, :instrument 14, :pitch 78}
    {:time 4, :instrument 14, :pitch 78}
    {:time 4.5, :instrument 14, :pitch 78}
    {:time 5, :instrument 14, :pitch 76}
    {:time 5.5, :instrument 14, :pitch 76}
    {:time 6, :instrument 14, :pitch 74}
    {:time 6.5, :instrument 14, :pitch 76}
    {:time 7, :instrument 14, :pitch 76}
    {:time 7.5, :instrument 14, :pitch 74}
    {:time 7.75, :instrument 14, :pitch 76}
    {:time 8, :instrument 14, :pitch 74}
    {:time 8.5, :instrument 14, :pitch 74}
    {:time 9, :instrument 14, :pitch 74}
    {:time 9.5, :instrument 14, :pitch 71}
    {:time 10 :instrument 14, :pitch 71}]
    (glis
     (repeat 12 {:time 10 :instrument 8, :pitch 71}))
    [{:time 10.4, :instrument 8, :pitch 60}
     {:time 10.5, :instrument 8, :pitch 60}
     {:time 12, :instrument 14, :pitch 74} 
     {:time 12.5, :instrument 14, :pitch 74} 
     {:time 13.5, :instrument 14, :pitch 74}
     {:time 14.5, :instrument 14, :pitch 71} 
     {:time 15.5, :instrument 14, :pitch 69} 
     {:time 16, :instrument 14, :pitch 71}]
    (glis
     (repeat 8 {:time 16, :instrument 8, :pitch 71}))
    [{:time 16.2, :instrument 8, :pitch 64}
     {:time 16.3, :instrument 8, :pitch 64}
     {:time 16.4, :instrument 8, :pitch 64}
     {:time 17.5, :instrument 14, :pitch 64} {:time 18, :instrument 14, :pitch 66} {:time 18.5, :instrument 14, :pitch 69} {:time 19, :instrument 14, :pitch 71} {:time 20, :instrument 14, :pitch 71} {:time 20.5, :instrument 14, :pitch 73} {:time 21.5, :instrument 14, :pitch 69} {:time 22.5, :instrument 14, :pitch 69} {:time 24, :instrument 14, :pitch 66} {:time 24.5, :instrument 14, :pitch 64} {:time 25.5, :instrument 14, :pitch 64}]))

@(dispatch
  [:set-notes
   (concat
    (bass1 0)
    (bass1 16)
    (drums1 0)
    (drums1 16)
    lead1
    )])

(reverse
 (filter #(= 14 (:instrument %))
         @(subscribe [:notes])))

(sort-by :time
         (filter #(or (= 14 (:instrument %))
                      (= 8 (:instrument %)))
         @(subscribe [:notes])))