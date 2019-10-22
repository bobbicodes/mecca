(ns mecca.megaman)

(defn delay-note [beats note]
  (update note :time #(+ beats %)))

(defn loop-notes [notes]
  (let [length (apply max (map #(:time %) notes))]
    (into notes 
          (map #(delay-note (inc length) %) notes))))

(defn bass-triad [time root third]
  [{:time time :instrument 15, :pitch root}
   {:time (+ time 3) :instrument 15, :pitch root}
   {:time (+ time 4) :instrument 15, :pitch (+ root (if (= "major" third) 4 3))}
   {:time (+ time 6) :instrument 15, :pitch (+ root 7)}
   {:time (+ time 9) :instrument 15, :pitch root}
   {:time (+ time 10) :instrument 15, :pitch root}
   {:time (+ time 11) :instrument 15, :pitch root}
   {:time (+ time 12) :instrument 15, :pitch (+ root (if (= "major" third) 4 3))}
   {:time (+ time 14) :instrument 15, :pitch (+ root 7)}])

(def lead1
  [{:time 1, :instrument 5, :pitch 67} {:time 1.5, :instrument 5, :pitch 67} {:time 2, :instrument 5, :pitch 67} {:time 3, :instrument 5, :pitch 67} {:time 3.5, :instrument 5, :pitch 67} {:time 4, :instrument 5, :pitch 67} {:time 5, :instrument 5, :pitch 64} {:time 7, :instrument 5, :pitch 64} {:time 8, :instrument 5, :pitch 67} {:time 9, :instrument 5, :pitch 67} {:time 9.5, :instrument 5, :pitch 67} {:time 10, :instrument 5, :pitch 67} {:time 11, :instrument 5, :pitch 64} {:time 13, :instrument 5, :pitch 71} {:time 14, :instrument 5, :pitch 69} {:time 15, :instrument 5, :pitch 71} {:time 17, :instrument 5, :pitch 67} {:time 17.5, :instrument 5, :pitch 67} {:time 18, :instrument 5, :pitch 67} {:time 19, :instrument 5, :pitch 67} {:time 19.5, :instrument 5, :pitch 67} {:time 20, :instrument 5, :pitch 67} {:time 21, :instrument 5, :pitch 64} {:time 23, :instrument 5, :pitch 71} {:time 25, :instrument 5, :pitch 69} {:time 27, :instrument 5, :pitch 67} {:time 29, :instrument 5, :pitch 69} {:time 33, :instrument 5, :pitch 69} {:time 33.5, :instrument 5, :pitch 69} {:time 34, :instrument 5, :pitch 69} {:time 35, :instrument 5, :pitch 69} {:time 35.5, :instrument 5, :pitch 69} {:time 36, :instrument 5, :pitch 69} {:time 37, :instrument 5, :pitch 66} {:time 39, :instrument 5, :pitch 71} {:time 41, :instrument 5, :pitch 69} {:time 43, :instrument 5, :pitch 67} {:time 45, :instrument 5, :pitch 66} {:time 48, :instrument 5, :pitch 66} {:time 49, :instrument 5, :pitch 67} {:time 50, :instrument 5, :pitch 66} {:time 51, :instrument 5, :pitch 64} {:time 62, :instrument 5, :pitch 66} {:time 63, :instrument 5, :pitch 67}])

(def megaman
  (loop-notes 
    (into 
     (concat
      (bass-triad 0 64 "minor")
      (bass-triad 16 60 "major")
      (bass-triad 32 62 "major")
      (bass-triad 48 64 "minor"))
     lead1)))