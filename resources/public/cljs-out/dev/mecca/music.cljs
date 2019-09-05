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

(defn ^:export current-time
  "Return the current time as recorded by the audio context."
  [context]
  (.-currentTime context))

(defn subgraph
  ([input output] {:input input :output output})
  ([singleton] (subgraph singleton singleton)))

(defn source
  "A graph of synthesis nodes without an input,
  so another graph can't connect to it."
  [node]
  (subgraph nil node))

(defn raw-buffer
  [generate-bit! context duration]
  (let [sample-rate 44100
        frame-count (* sample-rate duration)
        buffer (.createBuffer context 1 frame-count sample-rate)
        data (.getChannelData buffer 0)]
    (doseq [i (range frame-count)]
      (aset data i (generate-bit! i)))
    buffer))

(def buffer (memoize raw-buffer))

(defn dispatch-timer-event []
  (let [context (subscribe [:audiocontext])
        now (current-time @context)]
    (dispatch [:timer now])
    (dispatch [:tick!])))

(defonce do-timer (js/setInterval dispatch-timer-event 80))

(defn play-noise! [start duration]
  (let [context (subscribe [:audiocontext])
        sample-rate 44100
        frame-count (* sample-rate duration)
        buffer (.createBuffer context 1 frame-count sample-rate)
        data (.getChannelData buffer 0)
        noise (.createBufferSource @context)
        now (current-time @context)]
    (doseq [i (range frame-count)]
      (aset data i (-> (js/Math.random) (* 2.0) (- 1.0))))
    (set! (.-buffer noise) buffer)
    (.connect noise (.-destination @context))
    (.start noise (+ now start))
    (.stop noise (+ now start duration))))

(defn play-note! [midi-num start duration]
  (let [context (subscribe [:audiocontext])
        osc (.createOscillator @context)
        now (current-time @context)
        freq (midi->freq midi-num)
        gain (.createGain @context)]
    (set! (.-type osc) "triangle")
    (set! (.. osc -frequency -value) freq)
    (.connect osc gain)
    (.connect gain (.-destination @context))
    (.start osc (+ now start))
    (.stop osc (+ now start duration))))

(defn play-bassline! []
  (let [context (subscribe [:audiocontext])
        bassline (subscribe [:bassline])
        play-start (current-time @context)
        tempo (subscribe [:tempo])
        beat-length (/ 60 @tempo)
        total-duration (* beat-length (count @bassline))]
    (dispatch [:play-on])
    (doall (for [{:keys [time pitch]} @bassline]
             (play-note! pitch (* time beat-length) beat-length)))))
