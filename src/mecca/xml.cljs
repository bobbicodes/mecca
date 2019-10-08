(ns ^:figwheel-hooks mecca.xml
  (:require [mecca.score :refer [zelda-parsed]]))

(defn get-measures [score]
  (:content (nth (:content score) 7)))

(defn extract-notes [measure]
  (filter #(= :note (get % :tag))
          (get measure :content)))

(defn get-pitch [note]
  (first (filter #(= :pitch (get % :tag))
                 (get note :content))))

(defn get-duration [note]
  (js/parseInt (first (:content (first (filter #(= :duration (get % :tag))
                                               (get note :content)))))))

(defn get-step [pitch]
  (first (:content (first (filter #(= :step (get % :tag))
                                  (get pitch :content))))))

(defn get-octave [pitch]
  (js/parseInt 
   (first (:content (first (filter #(= :octave (get % :tag))
                                   (get pitch :content)))))))

(defn get-alter [pitch]
  (js/parseInt 
   (first (:content (first (filter #(= :alter (get % :tag))
                                   (get pitch :content)))))))

(defn pitch->midi [pitch]
  (let [base-pitch (* 12 (get-octave pitch))
        pitch-steps (zipmap ["C" "D" "E" "F" "G" "A" "B"]
                            (range 7))
        step (get-step pitch)
        alter (if (int? (get-alter pitch))
                (get-alter pitch)
                0)]
    (+ (get pitch-steps step)
       base-pitch
       alter)))

(defn parse-note [note time]
  {:time time
   :pitch (pitch->midi (get-pitch note))
   :duration (/ (get-duration note) 6)})

(defn parse-measure [measure]
  (loop [time 1
         notes (extract-notes measure)
         result []]
    (if (empty? notes)
      result
      (recur (+ time (/ (get-duration (first notes)) 6))
             (rest notes)
             (conj result (parse-note (first notes)
                                      time))))))