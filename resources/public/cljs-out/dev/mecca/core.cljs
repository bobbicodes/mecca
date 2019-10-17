(ns ^:figwheel-hooks mecca.core
  (:require
   [cljs.core.async :refer [<! timeout chan put! close!]]
   [goog.dom :as gdom]
   [reagent.core :as r]
   [re-frame.core :as rf]
   [re-pressed.core :as rp]
   [day8.re-frame.http-fx]
   [mecca.events]
   [mecca.subs]
   [mecca.view :as view])
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]]))

(rf/dispatch-sync [:initialize-db])

(rf/dispatch-sync [::rp/add-keyboard-event-listener "keydown"])

(rf/dispatch
 [::rp/set-keydown-rules
  {:event-keys [[[:jump!]
                 [{:keyCode 13}]
                 [{:keyCode 32}]]]}])

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount [el]
  (rf/clear-subscription-cache!)
  (r/render-component [view/mecca] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

(defn ^:export init []
  (mount-app-element))