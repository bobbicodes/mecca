(ns ^:figwheel-hooks mecca.components.editor
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf :refer [subscribe dispatch]]
   [mecca.components.notation :as notation]
   [mecca.components.key :as key]))

(defn tempo-input []
  [:label " Tempo: "
   [:input
    {:style {:width "8%"
             :background-color "lightgray"}
     :type "number"
     :value @(subscribe [:tempo])
     :on-change (fn [e]
                  (.preventDefault e)
                  (dispatch [:set-tempo
                             (-> e .-target .-value)]))}]])

(defn scroll-cue-left [x y]
  [:g.fade [:line {:stroke "black" :stroke-width 0.25
                   :x1 x :y1 y :x2 (dec x) :y2 (inc y)}]
   [:line {:stroke "black" :stroke-width 0.25
           :x1 (dec x) :y1 (inc y) :x2 x :y2 (+ 2 y)}]])

(defn scroll-cue-right [x y]
  [:g.fade [:line {:stroke "black" :stroke-width 0.25
                   :x1 x :y1 y :x2 (inc x) :y2 (inc y)}]
   [:line {:stroke "black" :stroke-width 0.25
           :x1 (inc x) :y1 (inc y) :x2 x :y2 (+ 2 y)}]])

(defn advance-editor []
  (let [mouseover? (r/atom false)]
    (fn []
      [:g
       [:rect {:x 58 :y 5
               :height 32
               :width 6
               :pointer-events "all"
               :visibility "hidden"
               :on-mouse-over #(reset! mouseover? true)
               :on-mouse-out #(reset! mouseover? false)
               :on-click #(dispatch [:advance-editor])}]
       (if @mouseover?
         [:g
          [scroll-cue-right 61.5 8]
          [scroll-cue-right 61.5 14]
          [scroll-cue-right 61.5 20]
          [scroll-cue-right 61.5 26]
          [scroll-cue-right 61.5 32]])])))

(defn retract-editor [x]
  (let [mouseover? (r/atom false)]
    (fn []
      [:g
       [:rect {:x x :y 5
               :height 32
               :width 6
               :pointer-events "all"
               :visibility "hidden"
               :on-mouse-over #(reset! mouseover? true)
               :on-mouse-out #(reset! mouseover? false)
               :on-click #(dispatch [:retract-editor])}]
       (if @mouseover?
         [:g
          [scroll-cue-left (+ 3 x) 8]
          [scroll-cue-left (+ 3 x) 14]
          [scroll-cue-left (+ 3 x) 20]
          [scroll-cue-left (+ 3 x) 26]
          [scroll-cue-left (+ 3 x) 32]])])))

(defn note-guides []
  [:g [notation/beat-line 0 0]
   [notation/beat-line 1 1]
   [notation/beat-line 2 2]
   [notation/beat-line 3 3]])

(defn tempo-slider []
  [:path {:d "M37.867 10.655 37.43 10.643 37.001 10.186 36.572 9.728V9.332 8.935L37.04 8.468 37.507 8H37.906 38.304L38.772 8.468 39.239 8.935V9.333 9.732L38.772 10.199 38.304 10.667 37.867 10.655Z
;M37.873 10.278 38.315 10.286 38.587 10.014 38.859 9.742V9.334 8.925L38.587 8.653 38.314 8.381H37.906 37.498L37.226 8.653 36.954 8.925V9.328 9.73L37.192 10.001 37.43 10.271 37.872 10.279Z
M37.907 9.524H37.335V9.333 9.143H37.906 38.478V9.333 9.524Z
M59.582 10.655 59.145 10.643 58.716 10.186 58.288 9.728V9.332 8.935L58.755 8.468 59.223 8H59.621 60.019L60.487 8.468 60.954 8.935V9.333 9.732L60.487 10.199 60.019 10.667 59.582 10.655Z
M59.588 10.278 60.03 10.286 60.302 10.014 60.575 9.742V9.334 8.925L60.302 8.653 60.03 8.381H59.621 59.213L58.941 8.653 58.669 8.926V9.328 9.731L58.907 10.001 59.145 10.272 59.587 10.279Z
M59.588 9.898 59.527 9.89 59.278 9.608 59.03 9.327 59.326 9.03 59.622 8.734 59.922 9.033 60.221 9.333 59.935 9.619 59.649 9.904 59.588 9.896Z
M48.765 9.905H41.145V9.524 9.143H48.764 56.383V9.524 9.905Z"}])

(defn stop-button-label []
  [:path {:d "M4.572 5.714H3.81V5.524 5.333H4.381 4.953V5.143 4.952H4.381 3.81V4.381 3.81H4.572 5.334V4 4.191H4.762 4.191V4.381 4.571H4.762 5.334V5.143 5.714Z
M6.667 5.714H6.476V4.952 4.191H6.095 5.714V4 3.81H6.667 7.619V4 4.191H7.238 6.857V4.952 5.714Z
M8.762 5.714H8V4.762 3.81H8.762 9.524V4.762 5.714Z
M8.762 5.333H9.143V4.762 4.191H8.762 8.381V4.762 5.333Z
M10.095 5.714H9.905V4.762 3.81H10.667 11.429V4.381 4.952H10.857 10.286V5.333 5.714Z
M10.667 4.571H11.048V4.381 4.191H10.667 10.286V4.381 4.571Z"}])

(defn play-button-label []
  [:path {:d "M16.191 5.714H16V4.762 3.81H16.762 17.524V4.381 4.952H16.953 16.381V5.333 5.714Z
M16.762 4.571H17.143V4.381 4.191H16.762 16.381V4.381 4.571Z
M18.667 5.714H17.905V4.762 3.81H18.095 18.286V4.571 5.333H18.857 19.429V5.524 5.714Z
M20 5.714H19.81V5.034 4.354L20.082 4.082 20.354 3.81H20.572 20.789L21.061 4.082 21.334 4.354V5.034 5.714H21.143 20.953V5.333 4.952H20.572 20.191V5.333 5.714Z
M20.572 4.571H20.953V4.381 4.191H20.572 20.191V4.381 4.571Z
M22.667 5.714H22.476V5.213 4.711L22.065 4.355 21.653 3.998 21.778 3.873 21.903 3.749 22.285 4.189 22.667 4.63 23.049 4.189 23.431 3.749 23.556 3.873 23.68 3.998 23.269 4.355 22.857 4.711V5.213 5.714Z"}])

(defn loop-button-label []
  [:path {:d "M28.953 5.714H28.191V4.762 3.81H28.381 28.572V4.571 5.333H29.143 29.715V5.524 5.714Z
M30.857 5.714H30.095V4.762 3.81H30.857 31.619V4.762 5.714Z
M30.857 5.333H31.238V4.762 4.191H30.857 30.476V4.762 5.333Z
M32.762 5.714H32V4.762 3.81H32.762 33.524V4.762 5.714Z
M32.762 5.333H33.143V4.762 4.191H32.762 32.381V4.762 5.333Z
M34.095 5.714H33.905V4.762 3.81H34.667 35.429V4.381 4.952H34.857 34.286V5.333 5.714Z
M34.667 4.571H35.048V4.381 4.191H34.667 34.286V4.381 4.571Z"}])

(defn controls []
  [:svg {:width "100%" :view-box "0 0 64 16"}
   [:path {:d "M63.5 2V14L62 15.5H2L0.5 14V2L2 0.5H62Z"
           :fill "none"
           :stroke-width 0.5
           :stroke "black"}]
   [:path {:d "M62 3V13L61 14H3L2 13V3L3 2H61Z"
           :fill "none"
           :stroke-width 0.25
           :stroke "black"}]
   [key/circle-of-fifths]])

(defn note-blocks []
  [:g#notes {:transform "scale(0.2) translate(8,0)"}
   [notation/note-button "whole" 80]
   [notation/note-button "dotted-half" 96]
   [notation/note-button "half" 112]
   [notation/note-button "dotted-quarter" 128]
   [notation/note-button 1 144]
   [notation/note-button "dotted-eighth" 160]
   [notation/note-button "q-triplets" 176]
   [notation/note-button 0.5 192]
   [notation/note-button "dotted-sixteenth" 208]
   [notation/note-button "e-triplets" 224]
   [notation/note-button "sixteenth" 240]])

(defn rest-blocks []
  [:g#rests {:transform "scale(0.2) translate(8,16)"}
   [notation/note-button "whole-rest" 80]
   [notation/note-button "half-rest" 112]
   [notation/note-button "quarter-rest" 144]
   [notation/note-button "eighth-rest" 192]
   [notation/note-button "sixteenth-rest" 240]])