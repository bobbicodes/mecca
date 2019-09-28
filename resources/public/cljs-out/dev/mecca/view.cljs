(ns ^:figwheel-hooks mecca.view
  (:require [mecca.music :as music]
            [mecca.subs :as subs]
            [reagent.core :as r]
            [re-frame.core :as rf :refer [subscribe dispatch]]
            [mecca.events :as events]
            [mecca.audio.melody :as melody]
            [mecca.audio.sequencer :as sequencer]
            [mecca.audio.scale :as scale]
            [mecca.components.notation :as notation]
            [mecca.components.castle :as castle]
            [mecca.components.key :as key]
            [mecca.components.editor :as editor]
            [mecca.mario :as mario :refer [mario]]))

(defn note-targets []
  (let [instrument (subscribe [:instrument])]
    (fn []
      (into [:g]
            (for [time (range 0 8 0.5) pitch (range 34)]
              ^{:key [time pitch]}
              [:rect {:transform "translate(12.5,0)"
                      :x (* 6 time)
                      :y (+ 0.5 pitch)
                      :height 1 :width 3
                      :stroke "black"
                      :stroke-width 0.2
                      :fill "gray"
                      :visibility "hidden"
                      :opacity 0.2
                      :pointer-events "all"
                      :on-mouse-over #(dispatch [:update-focus-note [time pitch]])
                      :on-mouse-out #(dispatch [:update-focus-note [nil nil]])
                      :on-click #(dispatch [:add-note @instrument time pitch])}])))))

(defn editor []
  (let [instruments (subscribe [:instruments])
        focused (subscribe [:focused-note-pos])
        current-position (subscribe [:current-position])
        editor-beat-start (subscribe [:editor-beat-start])
        playing? (subscribe [:playing?])
        mario-run (subscribe [:mario-run])
        mario-jump (subscribe [:mario-jump])
        instrument (subscribe [:instrument])]
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
       [editor/current-note-display 59 0 0.22]
       [editor/note-blocks]
       [mario/floor-tile 16]
       [:rect#editorframe
          {:stroke "black"
           :stroke-width 0.25
           :fill "none"
           :height 31 :width 63.5 :x 0.25 :y 14.5}]
       [:g.staff {:transform "translate(0,10.5) scale(1)"
                  :style {:cursor "url(./images/hand.png),crosshair"}}
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
        (when-not (= @focused [nil nil])
          (let [[x y] @focused]
            (case @instrument
              1 [mario/mario-icon (+ 32 (* 30 x)) (- (* 5 y) 5) 0.2]
              2 [mario/shroom (+ 32 (* 30 x)) (- (* 5 y) 5) 0.2])))
        (doall (for [{:keys [time _ pitch]} (get @instruments @instrument)]
                 ^{:key [time pitch]}
                 [mario/mario-note (+ 32 (* 30 time)) (- (* 5 (- 77 pitch)) 5) 0.2]))]])))

(defn debug-info []
  [:div
   [:p (str "Absolute time: " @(subscribe [:time]))]
   [:p (str "Mario notes: " @(subscribe [:instruments]))]
   [:p (str "Mario run: " @(subscribe [:mario-run]))]
   [:p (str "Mario jump: " @(subscribe [:mario-jump]))]
   [:p (str "Instrument: " @(subscribe [:instrument]))]
   [:p (str "Focused note pos: " @(subscribe [:focused-note-pos]))]
   [:p (str "Tempo: " @(subscribe [:tempo]))]
   [:p (str "Current position: " @(subscribe [:current-position]))]
   [:p (str "Editor beat start: " @(subscribe [:editor-beat-start]))]])

(defn mecca []
  [:div
   [editor]
   [editor/controls]
   [debug-info]])