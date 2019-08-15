(ns ^:figwheel-hooks mecca.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 :scale
 (fn [db _]
   (:scale db)))

(rf/reg-sub
 :tempo
 (fn [db _]
   (:tempo db)))

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
 :bassline
 (fn [db _]
   (:bassline db)))