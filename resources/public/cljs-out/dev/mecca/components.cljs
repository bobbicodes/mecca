(ns ^:figwheel-hooks mecca.components
  (:require [mecca.music :refer [app-state]:as music]
            [reagent.core :as r]
            [goog.events :as events])
  (:import [goog.events EventType]))

(defn scale-picker []
  [:label
   "Scale: "
   [:select
    {:value (:scale @app-state)
     :on-change
     (fn [e]
       (.preventDefault e)
       (swap! app-state assoc :scale (.. e -target -value)))}
    (for [scale (keys music/scales)]
      ^{:key scale}
      [:option scale])]])

(defn key-picker []
  [:label " Key: "
   [:select {:value (:key @app-state)
             :on-change
             (fn [e]
               (.preventDefault e)
               (swap! app-state assoc :key (-> e .-target .-value)))}
    (for [note music/notes]
      ^{:key note}
      [:option note])]])

(defn octave-input []
  [:label " Octave: "
   [:input
    {:style {:width "6%"
             :background-color "lightgray"}
     :type "number"
     :value (:octave @app-state)
     :on-change (fn [e] (swap! app-state assoc :octave
                               (-> e .-target .-value)))}]])

(defn tempo-input []
  [:label " Tempo: "
   [:input
    {:style {:width "8%"
             :background-color "lightgray"}
     :type "number"
     :value (:tempo @app-state)
     :on-change (fn [e] (swap! app-state assoc :tempo
                               (-> e .-target .-value)))}]])

