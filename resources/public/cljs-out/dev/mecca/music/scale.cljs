(ns ^:figwheel-hooks mecca.music.scale)

(defn scale
  ([intervals]
   (reductions + (cycle intervals)))
  ([intervals start]
   (reductions + start (cycle intervals))))

(def major "Seven-tone scale, commonly used in Western music." [2 2 1 2 2 2 1])
(def blues "Six-tone scale, used for blues music." [3 2 1 1 3 2])
(def pentatonic "Five-tone scale, common to East Asian music." [3 2 2 3 2])
(def chromatic "Scale consisting of all twelve tones." [1])

(def sharp inc)
(def flat dec)

(defn mode [n]
  (let [c (mod n 7)]
    (concat (drop c major) (take c major))))

(def ionian (mode 0))
(def dorian (mode 1))
(def phrygian (mode 2))
(def lydian (mode 3))
(def mixolydian (mode 4))
(def aeolian (mode 5))
(def locrian (mode 6))

(def minor "Natural minor is another name for the Aeolian mode." aeolian)
(def harmonic-minor [2 1 2 2 1 3 1])
(def double-harmonic-minor [1 3 1 2 1 3 1])


(comment 
 (defn low
   "Lower midi one octave.
  e.g. (comp low D minor)"
   [midi]
   ((from -12) midi))
 
 (defn high
   "Raise midi one octave.
  e.g. (comp high C major)"
   [midi]
   ((from 12) midi))
 
 (defn lower
   "Lower degree one octave (assuming a heptatonic scale)."
   [degree]
   ((from -7) degree))
 
 (defn raise
   [degree]
   "Raise degree one octave (assuming a heptatonic scale)."
   ((from 7) degree)))