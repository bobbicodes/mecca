(ns ^:figwheel-hooks mecca.music
  (:require [reagent.core :as r]
            [cljs-bach.synthesis :as synthesis]
            [leipzig.melody :as melody]))

(def app-state
  (r/atom
   {:tempo 80
    :scale "Pentatonic"
    :octave 2
    :key "C"
    :pitches (vec (repeat 16 nil))
    :durations (vec (repeat 16 0))
    :selected-note [nil nil]}))

(def pitches (r/cursor app-state [:pitches]))
(def durations (r/cursor app-state [:durations]))
(def selected-note (r/cursor app-state [:selected-note]))

(def notes ["C" "C#" "D" "D#" "E" "F" "F#" "G" "G#" "A" "A#" "B"])

(def scales
  {"Pentatonic" [0 3 5 7 10 12]
   "Chromatic" [0 1 2 3 4 5 6 7 8 9 10 11 12]
   "Major" [0 2 4 5 7 9 11 12]
   "Minor" [0 2 3 5 7 8 10 12]
   "Harmonic Minor" [0 2 3 5 7 8 11 12]
   "Double Harmonic Minor" [0 1 4 5 7 8 11 12]})

(defonce context (synthesis/audio-context))

(defn note->midi-num [note]
  (+ (* 12 (dec (:octave @app-state)))
     (get (zipmap (into notes notes) (range 24 36)) note)))

(defn base-pitch [midi-num]
  (get notes (mod midi-num 12)))

(defn octave [midi-num]
  (dec (quot midi-num 12)))

(defn y->midi [y]
  (if (nil? y) nil
      (+ (note->midi-num (:key @app-state))
         (nth (reverse (into (get scales (:scale @app-state))
                             (map #(+ 12 %)
                                  (rest (get scales (:scale @app-state)))))) y))))

(defn midi-num->note [midi-num]
  (str (base-pitch midi-num) (octave midi-num)))

(defn midi->freq [m]
  (* 440 (.pow js/Math 2 (/ (- m 69) 12))))

(defn bass [note]
  (synthesis/connect->
   (synthesis/oscillator "triangle" (:pitch note))
   (synthesis/adsr 0.0 0.0 0.25 0.4)
   (synthesis/gain 1)))

(defn melody []
  (melody/tempo (melody/bpm (:tempo @app-state))
                (melody/phrase @durations
                               (map y->midi @pitches))))