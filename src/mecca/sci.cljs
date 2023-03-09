(ns mecca.sci
  (:require ["@codemirror/view" :as view]
            [mecca.max-or-throw :refer [max-or-throw]]
            [applied-science.js-interop :as j]
            [nextjournal.clojure-mode.extensions.eval-region :as eval-region]
            [sci.core :as sci]
            [reagent.core :as r]
            [sci.impl.evaluator]
            [clojure.string :as str]))

(defonce last-result (r/atom (sci/eval-string "(map inc (range 8))")))

(def eval-result
  (r/atom ""))

(defonce context
  (sci/init {:classes {'js goog/global
                       :allow :all}
             :namespaces {'max-or-throw.core {'max-or-throw max-or-throw}}}))

(def max-seq-limit 10000)

(defn instrument-1 [form]
  (if (seq? form)
    (list 'max-or-throw.core/max-or-throw form max-seq-limit)
    form))

;; Note from @borkdude: this is a hack. We intercept each result from the
;; evaluator and wrap it in a call to max-or-throw.
(defonce instrument-eval
  (let [old-eval sci.impl.evaluator/eval]
    (set! sci.impl.evaluator/eval
          (fn [ctx bindings expr]
            (max-or-throw (old-eval ctx bindings expr) 10000)))))

(defn eval-string [source]
  (try (sci/eval-string* context source)
       (catch :default e
         (str e))))

(defonce !points (r/atom ""))

(defn update-editor! [text]
  (let [code (str (first (str/split (str (some-> @!points .-state .-doc str)) #" => ")))
        end (count (some-> @!points .-state .-doc str))]
    (.dispatch @!points #js{:changes #js{:from 0 :to end :insert text}
                            :selection #js{:anchor (count code) :head (count code)}})))

(let [])
(.dispatch @!points #js{:selection #js{:anchor 5 :head 5}})

(j/defn eval-at-cursor [on-result ^:js {:keys [state]}]
  (some->> (eval-region/cursor-node-string state)
           (eval-string)
           (on-result))
  (update-editor! (str (first (str/split (str (some-> @!points .-state .-doc str)) #" => "))
                       (when-not (= "" @last-result) " => ") @last-result))
  true)

(j/defn eval-top-level [on-result ^:js {:keys [state]}]
  (some->> (eval-region/top-level-string state)
           (eval-string)
           (on-result))
  true)

(j/defn eval-cell [on-result ^:js {:keys [state]}]
  (-> (str "(do " (.-doc state) " )")
      (eval-string)
      (on-result))
  true)

(defn keymap* [modifier]
  {:eval-cell
   [{:key (str modifier "-Enter")
     :doc "Evaluate cell"}]
   :eval-at-cursor
   [{:key "Mod-Enter"
     :doc "Evaluates form at cursor"}]
   :eval-top-level
   [{:key "Shift-Enter"
     :doc "Evaluates top-level form at cursor"}]})

(defn extension [{:keys [modifier on-result]}]
  (.of view/keymap
       (j/lit
        [{:key (str modifier "-Enter")
          :run (partial eval-cell on-result)}
         {:key  "Mod-Enter"
          :run (partial eval-at-cursor on-result)}
         {:key "Enter"
          :shift (partial eval-top-level on-result)
          :run #()}])))