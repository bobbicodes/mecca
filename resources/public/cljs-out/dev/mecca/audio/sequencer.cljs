(ns ^:figwheel-hooks mecca.audio.sequencer)

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

