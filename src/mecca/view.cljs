(ns ^:figwheel-hooks mecca.view
  (:require [mecca.music :as music]
            [mecca.subs :as subs]
            [reagent.core :as r]
            [re-frame.core :as rf :refer [subscribe dispatch]]
            [mecca.events :as events :refer [mouse-pos mouse-down-handler selected]]
            [mecca.audio.melody :as melody]
            [mecca.audio.sequencer :as sequencer]
            [mecca.audio.scale :as scale]
            [mecca.components.notation :as notation]
            [mecca.components.castle :as castle]
            [mecca.components.key :as key]
            [mecca.components.editor :as editor]
            [mecca.mario :as mario :refer [editor-bg mario]]))

(defn note-targets []
  (into [:g] (for [x (range 16)
               y (range 34)]
           ^{:key [x y]}
            [:rect {:transform "translate(12.5,0)"
                    :x (* 3 x)
                    :y (+ 0.5 y)
                    :height 1 :width 3
                    :stroke "black"
                    :stroke-width 0.2
                    :fill "gray"
                    :visibility "visible"
                    :opacity 0.2
                    :pointer-events "all"
                    :on-mouse-over #(dispatch [:update-focus-note [x y]])
                    :on-mouse-out #(dispatch [:update-focus-note [nil nil]])
                    :on-click #(dispatch [:add-note x y])}])))

(defn editor []
  (let [focused (r/atom [nil nil])
        lead (subscribe [:lead])
        bassline (subscribe [:bassline])
        drums (subscribe [:drums])
        current-position (subscribe [:current-position])
        editor-beat-start (subscribe [:editor-beat-start])
        playing? (subscribe [:playing?])
        mario-run (subscribe [:mario-run])
        mario-jump (subscribe [:mario-jump])
        selected-note-value (subscribe [:selected-note-value])]
    (fn []
      (if (= 20 @mario-run)
        (dispatch [:jump-reset]))
      [:svg {:width "100%"
             :view-box "0 0 64 46"}
       [mario/cloud 1 1]
       [mario/hill 40]
       [castle/brick-face 363 18 6]
       [castle/brick-face 348 48 10]
       [mario]
       [editor/note-blocks]
       [editor/rest-blocks]
       [mario/floor-tile 16]
       [:rect#editorframe
          {:stroke "black"
           :stroke-width 0.25
           :fill "none"
           :height 31 :width 63.5 :x 0.25 :y 14.5}]
       [:g.staff {:transform "translate(0,10.5) scale(1)"
                  :style {:cursor "url(images/hand.png),crosshair"}}
        [notation/staff-lines]
        (if (= 1 @editor-beat-start)
          [:g [notation/brace]
           [notation/bar-line -1.68]
           [:g#clefs
            [notation/bass-clef]
            [notation/treble-clef]
            [notation/drum-clef]]
           [editor/note-guides]
           [editor/retract-editor 8]
           [editor/note-guides]
           [notation/bar-line 32.7]
           [editor/note-guides]]
          [:g
           [editor/retract-editor 2]
           [editor/note-guides]
           [notation/bar-line 31.5]
           [editor/note-guides]])
        [editor/advance-editor]
        [notation/bar-line 59]
        [note-targets]
        (doall (for [{:keys [time duration pitch]} @lead]
                 ^{:key [time duration pitch]}
                 [notation/note duration [time (- 77 pitch)]]))
        (doall (for [{:keys [time duration pitch]} @bassline]
                 ^{:key [time duration pitch]}
                 [notation/note duration [time (- 77 pitch)]]))
        (doall (for [{:keys [time duration pitch]} @drums]
                 ^{:key [time duration pitch]}
                 [notation/drum-hit duration [time (- 77 pitch)]]))]])))

(defn debug-info []
  [:div
   [:p (str "Absolute time: " @(subscribe [:time]))]
   [:p (str "Lead: " @(subscribe [:lead]))]
   [:p (str "Bassline: " @(subscribe [:bassline]))]
   [:p (str "Drums: " @(subscribe [:drums]))]
   [:p (str "Mario run: " @(subscribe [:mario-run]))]
   [:p (str "Mario jump: " @(subscribe [:mario-jump]))]
   [:p (str "Selected note value: " @(subscribe [:selected-note-value]))]
   [:p (str "Focused note pos: " @(subscribe [:focused-note-pos]))]
   [:p (str @(subscribe [:scale])
            " scale from MIDI number "
            (music/root-note-midi-num) " ("
            @(subscribe [:key]) @(subscribe [:octave]) "):")]
   [:p #_(let [scale (subscribe [:scale])
               key (subscribe [:key])
               octave (subscribe [:octave])
               root (music/root-note-midi-num)
               intervals (subscribe [:bassline])
               scale-region (take 16 (scale/scale (get music/scales @scale) root))]
           (str (map #(nth scale-region (dec %)) @intervals)))]
   [:p (str "Tempo: " @(subscribe [:tempo]))]
   [:p (str "Current position: " @(subscribe [:current-position]))]
   [:p (str "Editor beat start: " @(subscribe [:editor-beat-start]))]])

(defn mecca []
  [:div
   [editor]
   [editor/controls]
   [:button
    {:on-click
     (fn [e]
       (music/play-bassline!))}
    "Play"]
   [:p]
   ;[sequencer/sequencer]
   [debug-info]])