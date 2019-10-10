(ns ^:figwheel-hooks mecca.xml
  (:require [mecca.score :refer [zelda-parsed]]
            [re-frame.core :as rf :refer [subscribe dispatch]]))

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

(defn extract-voice [measure voice]
  (filter #(= voice (get-voice %)) (get-tag :note measure)))

(defn get-step [pitch]
  (get-attr :step pitch))

(defn get-octave [pitch]
  (js/parseInt 
   (get-attr :octave pitch)))

(defn get-alter [pitch]
  (js/parseInt 
   (get-attr :alter pitch)))

(defn pitch->midi [pitch]
  (let [base-pitch (+ 12 (* 12 (get-octave pitch)))
        pitch-steps (zipmap ["C" "D" "E" "F" "G" "A" "B"]
                            [0 2 4 5 7 9 11])
        step (get-step pitch)
        alter (if (int? (get-alter pitch))
                (get-alter pitch)
                0)]
    (+ (get pitch-steps step)
       base-pitch
       alter)))

(defn parse-note [note time]
  {:time time
   :pitch (+ (+ (pitch->midi (get-pitch note))
                (case (get-voice note)
                  5 12
                  0)) 6)
   :instrument (case (get-voice note)
                 5 15
                 1 14)})

(defn parse-measure [measure voice]
  (loop [time 1
         notes (extract-voice measure voice)
         result []]
    (if (empty? notes)
      result
      (recur (+ time (/ (get-duration (first notes)) 6))
             (rest notes)
             (conj result (parse-note (first notes)
                                      time))))))

(defn parse-voice [voice]
  (loop [time 1
         notes (flatten (map #(extract-voice % voice) (get-measures zelda-parsed)))
         result []]
    (if (empty? notes)
      result
      (recur (+ time (/ (get-duration (first notes)) 6))
             (rest notes)
             (conj result (parse-note (first notes)
                                      time))))))
