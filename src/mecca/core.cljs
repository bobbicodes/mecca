(ns mecca.core
  (:require
   [reagent.core :as r]
   [reagent.dom :as rdom]
   [mecca.sci-editor :as sci-editor :refer [points !result]]
   [re-frame.core :as rf]
   [re-pressed.core :as rp]
   [mecca.events]
   [goog.events :as gev]
   [goog.events.KeyCodes :as keycodes]
   [mecca.sci :refer [eval-result !points]]
   [mecca.subs]
   [mecca.view :as view])
  (:import [goog.events EventType KeyHandler]))

(rf/dispatch-sync [:initialize-db])

(rf/dispatch-sync [::rp/add-keyboard-event-listener "keydown"])

(defn eval-all [s]
  (try (sci.core/eval-string s {:classes {'js goog/global :allow :all}})
       (catch :default e
         (str e))))

(rf/dispatch [:set-result (str (eval-all (str (some-> @!points .-state .-doc str))))])

(into []
      (for [n (range 100)]
        [[:clear-result]
         [{:keyCode n}]]))

(rf/dispatch
 [::rp/set-keydown-rules
  {:event-keys 
                (into []
                      (for [n (into [8 27 32 37 38 39 40] (range 40 100))]
                        [[:clear-result]
                         [{:keyCode n}]]))
   :always-listen-keys [{:keyCode   13 :shiftKey true}]
   :prevent-default-keys [{:keyCode   13 :shiftKey true}]
   }])

(defn ^:dev/after-load start []
  (rf/clear-subscription-cache!)
  (rdom/render [view/mecca]
            (.getElementById js/document "app")))

(defn ^:export init []
  (start))