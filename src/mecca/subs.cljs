(ns ^:figwheel-hooks mecca.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 :scale
 (fn [db _]
   (:scale db)))

(rf/reg-sub
 :playing?
 (fn [db _]
   (:playing? db)))

(rf/reg-sub
 :tempo
 (fn [db _]
   (:tempo db)))

(rf/reg-sub
 :time
 (fn [db _]     ;; db is current app state. 2nd unused param is query vector
   (:time db)))

(rf/reg-sub
 :octave
 (fn [db _]
   (:octave db)))

(rf/reg-sub
 :key
 (fn [db _]
   (:key db)))

(rf/reg-sub
 :current-position
 (fn [db _]
   (:current-position db)))

(rf/reg-sub
 :lead
 (fn [db _]
   (:lead db)))

(rf/reg-sub
 :bassline
 (fn [db _]
   (:bassline db)))

(rf/reg-sub
 :drums
 (fn [db _]
   (:drums db)))

(rf/reg-sub
 :audiocontext
 (fn [db _]
   (:audiocontext db)))

(rf/reg-sub
 :mario-sprite
 (fn [db _]
   (:mario-sprite db)))

(rf/reg-sub
 :mario-jump
 (fn [db _]
   (:mario-jump db)))