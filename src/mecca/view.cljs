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
           :stroke-width 0.5
           :fill "none"
           :height 31 :width 63.5 :x 0.25 :y 14.5}]
       [:g.staff {:transform "translate(0,10.5) scale(1)"}
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
           [notation/bar-line 31.5]
           [editor/note-guides]]
          [:g
           [editor/retract-editor 2]
           [editor/note-guides]
           [notation/bar-line 31.5]
           [editor/note-guides]])
        [editor/advance-editor]
        [notation/bar-line 59]
        (doall (for [x (range 8)
                     y (conj (range 34))]
                 ^{:key [x y]}
                 [:g {:transform "translate(12.5,0)"}
                  [:rect {:x (* 6 x)
                          :y (+ 0.5 y)
                          :height 1 :width 3
                          :fill "gray"
                          :visibility "hidden"
                          :pointer-events "all"
                          :on-mouse-over (fn [e]
                                           (reset! focused [x y]))
                          :on-mouse-out #(reset! focused [nil nil])
                          :on-click #(dispatch [:add-note x y])}]
                  (if (= @focused [x y])
                    (if (< 30 y)
                      [:g {:transform (str "translate(" (+ 0.35 (* 6 x)) "," (inc y) ") ")
                           :pointer-events "none"}
                       [:path {:d "m1.24.27 .9.74c.02.01 .04.03 .07.03 .02 0 .05-.01.08-.03l.15-.12c.02-.02.04-.06.04-.09 0-.03-.02-.06-.04-.08L1.56 0 2.43-.71c.02-.02.04-.05.04-.08 0-.03-.02-.07-.04-.09l-.15-.12c-.02-.01-.05-.03-.08-.03-.02 0-.04.01-.07.03L1.24-.27.33-1.01c-.02-.01-.04-.03-.07-.03-.02 0-.05.01-.08.03l-.15.12c-.02.02-.04.06-.04.09 0 .03.02 .06.04 .08L.91 0 .04.71c-.02.02-.04.05-.04.08 0 .03.02 .07.04 .09l.15.12c.02.01 .05.03 .08.03 .02 0 .04-.01.07-.03z"
                               :fill "gray"}]
                       [:rect {:x (if (< 31 y)
                                    2.2 0)
                               :y (if (< 31 y)
                                    -6.3
                                    0.8)
                               :height 5.5 :width 0.25
                               :fill "gray"}]]
                      [:g {:transform (str "translate(" (+ 0.5 (* 6 x)) "," (inc y) ")")
                           :pointer-events "none"}
                       [:path {:d "m1.62-1.06c.41 0 .8.21 .8.67 0 .53-.41.89-.76 1.1-.27.16-.56.27-.86.27-.41 0-.8-.21-.8-.67 0-.53.41-.89.76-1.1.27-.16.56-.27.86-.27z"
                               :fill "gray"}]
                       [:rect {:x (if (or (< 11 y 18) (< 23 y))
                                    2.15 0.02)
                               :y (if (or (< 11 y 18) (< 23 y))
                                    -7.1 0)
                               :height 6.794 :width 0.25
                               :fill "gray"}]
                       (if (or (= y 1)
                               (= y 3)
                               (= y 5)
                               (= y 17)
                               (= y 29))
                         [:rect {:transform "scale (1.75)"
                                 :height 0.2
                                 :width 2.085
                                 :ry 0.1
                                 :x -0.334 :y -0.1
                                 :fill "gray"}])]))]))
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
    [editor/tempo-input]
   [:button
    {:on-click
     (fn [e]
       (music/play-bassline!))}
    "Play"]
   [:p]
   ;[sequencer/sequencer]
   [debug-info]])