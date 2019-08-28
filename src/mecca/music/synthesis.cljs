(ns ^:figwheel-hooks mecca.music.synthesis)


(defn ^:export current-time
  "Return the current time as recorded by the audio context."
  [context]
  (.-currentTime context))

; Definitions

(defn subgraph
  ([input output] {:input input :output output})
  ([singleton] (subgraph singleton singleton)))

(defn source
  "A graph of synthesis nodes without an input,
  so another graph can't connect to it."
  [node]
  (subgraph nil node))

(defn sink
  "A graph of synthesis nodes without an output,
  so it can't connect to another graph."
  [node]
  (subgraph node nil))

; Plumbing

(defn ^:export run-with
  "Convert a synth (actually a reader fn) into a concrete
  subgraph by supplying context and timing."
  [synth context at duration]
  (synth context at duration))

(defn ^:export destination
  "The destination of the audio context i.e. the speakers."
  [context at duration]
  (sink (.-destination context)))

(defn plug [param input context at duration]
  "Plug an input into an audio parameter, accepting both
  numbers and synths."
  (if (number? input)
    (.setValueAtTime param input at)
    (-> input (run-with context at duration) :output (.connect param))))

(defn ^:export gain
  "Multiply the signal by level."
  [level]
  (fn [context at duration]
    (subgraph
      (doto (.createGain context)
        (-> .-gain (plug level context at duration))))))

(def ^:export pass-through
  "Pass the signal through unaltered."
  (gain 1.0))


; Envelopes

(defn envelope
  "Build an envelope out of [segment-duration final-level] coordinates."
  [& corners]
  (fn [context at duration]
    (let [audio-node (.createGain context)]
      (-> audio-node .-gain (.setValueAtTime 0 at))
      (loop [x at, coordinates corners]
        (when-let [[[dx y] & remaining] coordinates]
          (-> audio-node .-gain (.linearRampToValueAtTime y (+ x dx)))
          (recur (+ dx x) remaining)))
      (subgraph audio-node))))

(defn adshr
  "An ADSR envelope that also lets you specify the hold duration."
  [attack decay sustain hold release]
  (envelope [attack 1.0] [decay sustain] [hold sustain] [release 0]))

(defn ^:export adsr
  "A four-stage envelope."
  [attack decay sustain release]
  (fn [context at duration]
    (let [remainder (- duration attack decay release)
          hold (max 0.0 remainder)
          node (adshr attack decay sustain hold release)]
      (-> node (run-with context at duration)))))

(defn ^:export percussive
  "A simple envelope."
  [attack decay]
  (envelope [attack 1.0] [decay 0.0]))


; Combinators

(defn apply-to-graph
  "Like apply, but for the node graphs synths produce."
  [f & synths]
  (fn [context at duration]
    (->> synths
         (map #(run-with % context at duration))
         (apply f))))

(defn join-in-series
  [graph1 graph2]
  (.connect (:output graph1) (:input graph2))
  (subgraph (:input graph1) (:output graph2)))

(defn ^:export connect
  "Use the output of one synth as the input to another."
  [upstream-synth downstream-synth]
  (apply-to-graph join-in-series upstream-synth downstream-synth))

(defn connect->
  "Connect synths in series."
  [& nodes]
  (reduce connect nodes))

(defn join-in-parallel
  [upstream downstream & graphs]
  (doseq [graph graphs]
    (.connect (:output graph) (:input downstream))
    (when (:input graph)
      (.connect (:output upstream) (:input graph))))
  (subgraph (:input upstream) (:output downstream)))

(defn ^:export add
  "Add together synths by connecting them all to the same
  upstream and downstream gains."
  [& synths]
    (apply
      apply-to-graph
      join-in-parallel
      pass-through pass-through synths))


; Noise

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

(defn noise
  "Make noise according to the supplied strategy for creating bits."
  [generate-bit!]
  (fn [context at duration]
    (source
      (doto (.createBufferSource context)
        (-> .-buffer (set! (buffer generate-bit! context (+ duration 1.0))))
        (.start at)))))

(def ^:export white-noise
  "Random noise."
  (let [white (fn [_] (-> (js/Math.random) (* 2.0) (- 1.0)))]
    (noise white)))

(defn ^:export constant
  "Make a constant value by creating noise with a fixed value."
  [x]
  (noise (constantly x)))

; Oscillators

(defn oscillator
  "A periodic wave."
  [type freq]
  (fn [context at duration]
    (source
      (doto (.createOscillator context)
        (-> .-frequency .-value (set! 0))
        (-> .-frequency (plug freq context at duration))
        (-> .-type (set! type))
        (.start at)
        (.stop (+ at duration 1.0)))))) ; Give a bit extra for the release

(def ^:export sine (partial oscillator "sine"))
(def ^:export sawtooth (partial oscillator "sawtooth"))
(def ^:export square (partial oscillator "square"))
(def ^:export triangle (partial oscillator "triangle"))


; Filters

(defn biquad-filter
  "Attenuate frequencies beyond the cutoff, and intensify
  the cutoff frequency based on the value of q."
  ([type freq]
   (biquad-filter type freq 1.0))
  ([type freq q]
   (fn [context at duration]
     (subgraph
       (doto (.createBiquadFilter context)
         (-> .-frequency .-value (set! 0))
         (-> .-frequency (plug freq context at duration))
         (-> .-Q (plug q context at duration))
         (-> .-type (set! type)))))))

(def ^:export low-pass (partial biquad-filter "lowpass"))
(def ^:export high-pass (partial biquad-filter "highpass"))


; Effects

(defn ^:export stereo-panner
  "Pan the signal left (-1) or right (1)."
  [pan]
  (fn [context at duration]
    (subgraph
      (doto (.createStereoPanner context)
        (-> .-pan (plug pan context at duration))))))

(defn ^:export delay-line
  "Delay the signal."
  [seconds]
  (fn [context at duration]
    (subgraph
      (let [maximum 5]
        (doto (.createDelay context maximum)
          (-> .-delayTime (plug seconds context at duration)))))))

(defn convolver
  "Linear convolution."
  [generate-bit!]
  (fn [context at duration]
    (subgraph
      (doto (.createConvolver context)
        (-> .-buffer (set! (buffer generate-bit! context (+ duration 1.0))))))))

(def ^:export reverb
  "Crude reverb."
  (let [duration 5
        decay 3
        sample-rate 44100
        length (* sample-rate (+ duration 1.0))
        logarithmic-decay (fn [i]
                            (* (-> i (js/Math.random) (* 2.0) (- 1.0))
                               (.pow js/Math (- 1 (/ i length)) decay)))]
    (convolver logarithmic-decay)))

(defn ^:export enhance
  "Mix the original signal with one with the effect applied."
  [effect level]
  (add pass-through (connect-> effect (gain level))))

(defn- align-concert-a [tuning] (fn [midi] (-> midi tuning (* (/ 440 (tuning 69))))))
(defn- temper [midi ratios]
  (cond
    (< midi 0) (* (/ 1 2) (temper (+ midi 12) ratios))
    (> midi 11) (* 2 (temper (- midi 12) ratios))
    :otherwise (nth ratios midi)))

(defn- tune
  [root incremental-ratios]
  (let [geometric-progression (partial reductions * 1)
        ratios (->>
                (geometric-progression incremental-ratios)
                (map (fn normalise [ratio] (if (< ratio 2) ratio (normalise (/ ratio 2)))))
                sort)
        tuning (fn [midi] (-> midi (- root) (temper ratios)))]
    (align-concert-a tuning)))

(def equal
  "Converts midi to hertz using equal temperament.
  e.g. (equal 69)"
  (tune 69 (repeat 11 (.pow js/Math 2 (/ 1 12)))))

(defn play-from!
  "Take a sequence of notes and play them from a set point in an audiocontext."
  [audiocontext from notes]
  (doseq [{:keys [time duration instrument] :as note} notes]
    (let [at (+ time from)
          synth-instance (-> note
                             (update :pitch equal)
                             (dissoc :time)
                             instrument)
          connected-instance (connect synth-instance destination)]
      (connected-instance audiocontext at duration))))

(defn play!
  "Take a sequence of notes and play them in an audiocontext."
  [audiocontext notes]
  (play-from! audiocontext (current-time audiocontext) notes))