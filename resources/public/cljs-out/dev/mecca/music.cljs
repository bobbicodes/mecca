(ns ^:figwheel-hooks mecca.music
  (:require [reagent.core :as r]
            [re-frame.core :as rf :refer [subscribe dispatch]]
            [cljs-bach.synthesis :as synthesis]
            [leipzig.melody :as melody]
            [leipzig.temperament :as temperament]))

(defonce context (synthesis/audio-context))

(def notes ["C" "C#" "D" "D#" "E" "F" "F#" "G" "G#" "A" "A#" "B"])

(def scales
  {"Pentatonic" [0 3 5 7 10 12]
   "Chromatic" [0 1 2 3 4 5 6 7 8 9 10 11 12]
   "Major" [0 2 4 5 7 9 11 12]
   "Minor" [0 2 3 5 7 8 10 12]
   "Harmonic Minor" [0 2 3 5 7 8 11 12]
   "Double Harmonic Minor" [0 1 4 5 7 8 11 12]})

(def basslines
  {"Alberti bass" [1 5 3 5]
   "Walking bass" [1 3 5 6 7 6 5 3]
   "Lament" [8 8 7 7 6 6 5 5]
   "Pachelbel" [8 8 5 5 6 6 3 3 4 4 8 8 4 4 5 5]
   "Doo-wop" [8 8 6 6 4 4 5 5]
   "Circle of fifths" [8 8 11 11 7 7 10 10 6 6 9 9 5 5 8 8]
   "Pop-punk" [1 1 5 5 6 6 4 4]})

(defn root-note-midi-num []
  (let [key @(subscribe [:key])
        base-pitch (get (zipmap (into notes notes) (range 24 36)) key)
        octave @(subscribe [:octave])]
    (+ (* 12 (dec octave))
       base-pitch)))

(defn base-pitch [midi-num]
  (get notes (mod midi-num 12)))

(defn octave [midi-num]
  (dec (quot midi-num 12)))

(defn interval->midi [n]
  (let [scale-name @(subscribe [:scale])
        scale-notes (get scales scale-name)
        key @(subscribe [:key])
        base-pitch (get (zipmap (into notes notes) (range 24 36)) key)
        octave @(subscribe [:octave])]
    (if (nil? n) nil
      (+ n base-pitch))))

(defn bassline->midi-nums [v]
  (map #(interval->midi %) @(subscribe [:bassline])))

(defn midi-num->note [midi-num]
  (str (base-pitch midi-num) (octave midi-num)))

(defn midi->freq [m]
  (* 440 (.pow js/Math 2 (/ (- m 69) 12))))

(defn bass [note]
  (synthesis/connect->
   (synthesis/oscillator "triangle" (:pitch note))
   (synthesis/adsr 0.0 0.0 0.25 0.4)
   (synthesis/gain 1)))

(defn play-from!
  "Take a sequence of notes and play them from a set point in an audiocontext."
  [audiocontext from notes]
  (doseq [{:keys [time duration instrument] :as note} notes]
    (let [at (+ time from)
          synth-instance (-> note
                             (update :pitch temperament/equal)
                             (dissoc :time)
                             instrument)
          connected-instance (synthesis/connect synth-instance synthesis/destination)]
      (connected-instance audiocontext at duration))))

(defn play!
  "Take a sequence of notes and play them in an audiocontext."
  [audiocontext notes]
  (play-from! audiocontext (synthesis/current-time audiocontext) notes))

(defn play-bassline! []
  (play! context
         (->> (melody/phrase (vec (repeat 16 0.25))
                             (bassline->midi-nums @(subscribe [:bassline])))
              (melody/tempo (melody/bpm @(subscribe [:tempo])))
                             (melody/all :instrument bass))))