(ns ^:figwheel-hooks mecca.sequencer
  (:require
   [mecca.music :refer [audiocontext]]
   [mecca.wavetable :refer [wavetable]]))

(defn tracks []
  [:div#tracks
   [:section.track-one
    [:h2 "Sweep"]
    [:section.controls
     [:label {:for "attack"} "Att"]
     [:input#attack {:name "attack" :type "range" :min 0 :max 1 :value 0.2 :step 0.1}]
     [:label {:for "release"} "Rel"]
     [:input#release {:name "release" :type "range" :min 0 :max 1 :value 0.5 :step 0.1}]]
    [:section.pads
     [:button {:role "switch" :aria-checked false}
      [:span "Voice 1, Note 1"]]
     [:button {:role "switch" :aria-checked false}
      [:span "Voice 1, Note 2"]]
     [:button {:role "switch" :aria-checked false}
      [:span "Voice 1, Note 3"]]
     [:button {:role "switch" :aria-checked false}
      [:span "Voice 1, Note 4"]]]]
   [:section.track-two
    [:h2 "Pulse"]
    [:section.controls
     [:label {:for "hz"} "Hz"]
     [:input#hz {:name "hz" :type "range" :min 660 :max 1320 :value 880 :step 1}]
     [:label {:for "lfo"} "LFO"]
     [:input#lfo {:name "lfo" :type "range" :min 20 :max 40 :value 30 :step 1}]]
    [:section.pads
     [:button {:role "switch" :aria-checked false}
      [:span "Voice 2, Note 1"]]
     [:button {:role "switch" :aria-checked false}
      [:span "Voice 2, Note 2"]]
     [:button {:role "switch" :aria-checked false}
      [:span "Voice 2, Note 3"]]
     [:button {:role "switch" :aria-checked false}
      [:span "Voice 2, Note 4"]]]]
   [:section.track-three
    [:h2 "Noise"]
    [:section.controls
     [:label {:for "duration"} "Dur"]
     [:input#duration {:name "duration" :type "range" :min 0 :max 2 :value 1 :step 0.1}]
     [:label {:for "band"} "Band"]
     [:input#band {:name "band" :type "range" :min 400 :max 1200 :value 1000 :step 5}]]
    [:section.pads
     [:button {:role "switch" :aria-checked false}
      [:span "Voice 3, Note 1"]]
     [:button {:role "switch" :aria-checked false}
      [:span "Voice 3, Note 2"]]
     [:button {:role "switch" :aria-checked false}
      [:span "Voice 3, Note 3"]]
     [:button {:role "switch" :aria-checked false}
      [:span "Voice 3, Note 4"]]]]
   [:section.track-four
    [:h2 "DTMF"]
    [:section.controls
     [:label {:for "rate"} "Rate"]
     [:input#rate {:name "rate" :type "range" :min 0.1 :max 2 :value 1 :step 0.1}]]
    [:section.pads
     [:button {:role "switch" :aria-checked false}
      [:span "Voice 4, Note 1"]]
     [:button {:role "switch" :aria-checked false}
      [:span "Voice 4, Note 2"]]
     [:button {:role "switch" :aria-checked false}
      [:span "Voice 4, Note 3"]]
     [:button {:role "switch" :aria-checked false}
      [:span "Voice 4, Note 4"]]]]])

(defn sequencer []
  [:div#sequencer
   [:section.controls-main
    [:h1 "ModemDN"]
    [:label {:for "bpm"} "BPM"]
    [:input#bpm {:name "bpm" :type "range"
                 :min 60 :max 180 :value 120 :step 1}]
    [:span#bpmval 120]
    [:button {:data-playing false} "Play"]]
   [tracks]])

(def pads (.querySelectorAll js/document ".pads"))

(def allPadButtons (.querySelectorAll js/document "#tracks button"))

(.forEach
 allPadButtons
 (fn [el]
   (.addEventListener
    el
    "click"
    (fn []
      (if (= (.getAttribute el "aria-checked") "false")
        (.setAttribute el "aria-checked" "true")
        (.setAttribute el "aria-checked" "false")))
    false)))

(def wave (.createPeriodicWave @audiocontext (.-real wavetable) (.-imag wavetable)))

(def attackTime 0.2)

(def attackControl (.querySelector js/document "#attack"))

(.addEventListener
 attackControl
 "input"
 (fn [ev] (set! attackTime (js/Number (.. ev -target -value))))
 false)

(def releaseTime 0.5)

(def releaseControl (.querySelector js/document "#release"))

(.addEventListener
 releaseControl
 "input"
 (fn [ev] (set! releaseTime (js/Number (.. ev -target -value))))
 false)

(def sweepLength 2)

(defn playSweep
  []
  (let [osc (.createOscillator @audiocontext)
        now (.-currentTime @audiocontext)]
    (.setPeriodicWave osc wave)
    (set! (.. osc -frequency -value) 380)
    (def sweepEnv (.createGain @audiocontext))
    (.cancelScheduledValues (.-gain sweepEnv) @now)
    (.setValueAtTime (.-gain sweepEnv) 0 @now)
    (.linearRampToValueAtTime
     (.-gain sweepEnv)
     1
     (+ @now attackTime))
    (.linearRampToValueAtTime
     (.-gain sweepEnv)
     0
     (- (+ @now sweepLength) releaseTime))
    (.connect (.connect osc sweepEnv) (.-destination @audiocontext))
    (.start osc)
    (.stop osc (+ @now sweepLength))))

(def pulseHz 880)

(def hzControl (.querySelector js/document "#hz"))

(.addEventListener
 hzControl
 "input"
 (fn [ev] (set! pulseHz (js/Number (.. ev -target -value))))
 false)

(def lfoHz 30)

(def lfoControl (.querySelector js/document "#lfo"))

(.addEventListener
 lfoControl
 "input"
 (fn [ev] (set! lfoHz (js/Number (.. ev -target -value))))
 false)

(def pulseTime 1)

(defn playPulse
  []
  (let [osc (.createOscillator @audiocontext)
        now (.-currentTime @audiocontext)]
    (set! (.-type osc) "sine")
    (.setValueAtTime (.-frequency osc) pulseHz @now)
    (def amp (.createGain @audiocontext))
    (.setValueAtTime (.-gain amp) 1 @now)
    (def lfo (.createOscillator @audiocontext))
    (set! (.-type lfo) "square")
    (.setValueAtTime (.-frequency lfo) lfoHz @now)
    (.connect lfo (.-gain amp))
    (.connect (.connect osc amp) (.-destination @audiocontext))
    (.start lfo)
    (.start osc)
    (.stop osc (+ @now pulseTime))))

(def noiseDuration 1)

(def durControl (.querySelector js/document "#duration"))

(.addEventListener
 durControl
 "input"
 (fn [ev] (set! noiseDuration (js/Number (.. ev -target -value))))
 false)

(def bandHz 1000)

(def bandControl (.querySelector js/document "#band"))

(.addEventListener
 bandControl
 "input"
 (fn [ev] (set! bandHz (js/Number (.. ev -target -value))))
 false)

