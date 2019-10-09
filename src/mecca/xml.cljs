(ns ^:figwheel-hooks mecca.xml
  (:require [mecca.score :refer [zelda-parsed]]))

(defn get-measures [score]
  (:content (nth (:content score) 7)))

(defn get-tag [tag content]
  (filter #(= tag (get % :tag))
          (:content content)))

(defn extract-notes [measure]
  (get-tag :note measure))

(defn get-pitch [note]
  (first (get-tag :pitch note)))

(defn get-attr [attr note]
  (first (:content (first (get-tag attr note)))))

(defn get-duration [note]
  (js/parseInt (get-attr :duration note)))

(defn get-voice [note]
  (js/parseInt (get-attr :voice note)))

(defn get-step [pitch]
  (get-attr :step pitch))

(defn get-octave [pitch]
  (js/parseInt 
   (get-attr :octave pitch)))

(defn get-alter [pitch]
  (js/parseInt 
   (get-attr :alter pitch)))

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
   :instrument (get-voice note)})

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
