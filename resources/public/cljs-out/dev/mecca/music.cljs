(ns ^:figwheel-hooks mecca.music
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf :refer [subscribe dispatch]]
   [mecca.music.processing] ; Import action defs.
   [mecca.music.actions :as action]
   [mecca.music.framework :as framework]
   [mecca.music.scale :as scale]
   [mecca.music.synthesis :as synthesis]
   [mecca.music.melody :as melody]))

(defonce state-atom (r/atom {:audiocontext (synthesis/audio-context)}))

(def handle!
  "An handler that components can use to raise events."
  (framework/handler-for state-atom))

(def notes ["C" "C#" "D" "D#" "E" "F" "F#" "G" "G#" "A" "A#" "B"])

(def scales
  {"Pentatonic" scale/pentatonic
   "Chromatic" scale/chromatic
   "Major" scale/major
   "Minor" scale/minor
   "Harmonic Minor" scale/harmonic-minor
   "Double Harmonic Minor" scale/double-harmonic-minor})

(def basslines
  [{:name "Alberti bass" :notes [1 5 3 5] :scales ["Minor" "Major"]}
   {:name "Walking bass" :notes [1 3 4 5 7 5 4 3] :scales ["Minor" "Major"]}
   {:name "Lament" :notes [8 8 7 7 6 6 5 5] :scales ["Chromatic"]}
   {:name "Pachelbel's Canon" :notes [8 8 5 5 6 6 3 3 4 4 8 8 4 4 5 5] :scales ["Major"]}
   {:name "Doo-wop" :notes [8 8 6 6 4 4 5 5] :scales ["Major"]}
   {:name "Circle of fifths" :notes [8 8 11 11 7 7 10 10 6 6 9 9 5 5 8 8] :scales ["Major"]}
   {:name "Pop-punk" :notes [1 1 5 5 6 6 4 4] :scales ["Major"]}])

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
  (let [scale-name (subscribe [:scale])
        scale-notes (get scales @scale-name)
        key @(subscribe [:key])
        base-pitch (get (zipmap (into notes notes) (range 24 36)) key)
        octave @(subscribe [:octave])]
    (if (nil? n) nil
      (+ n base-pitch))))

(defn bassline->midi-nums [v]
  (map #(interval->midi %) v))

(defn midi-num->note [midi-num]
  (str (base-pitch midi-num) (octave midi-num)))

(defn midi->freq [m]
  (* 440 (.pow js/Math 2 (/ (- m 69) 12))))

(defn bass [note]
  (synthesis/connect->
   (synthesis/oscillator "triangle" (:pitch note))
   (synthesis/adsr 0.0 0.0 0.25 0.1)
   (synthesis/gain 1)))

(defn play-bassline! []
  (synthesis/play! (:audiocontext @state-atom)
                   (->> (melody/phrase (vec (repeat 16 0.25))
                                       (take 16 (cycle @(subscribe [:bassline]))))
              (melody/tempo (melody/bpm @(subscribe [:tempo])))
                             (melody/all :instrument bass))))
