(ns day8.re-frame.tracing
  #?(:cljs (:require-macros
             [debux.dbgn :as dbgn]
             [debux.cs.macro-types :as mt]))
  (:require [debux.common.util :as ut]
            [debux.common.macro-specs :as ms]
            [clojure.spec.alpha :as s]))

#?(:cljs (enable-console-print!))

#?(:cljs (goog-define trace-enabled? false)
   :clj  (def ^boolean trace-enabled? false))

(defn ^boolean is-trace-enabled?
  "See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details"
  ;; We can remove this extra step of type hinting indirection once our minimum CLJS version includes
  ;; https://dev.clojure.org/jira/browse/CLJS-1439
  ;; r1.10.63 is the first version with this:
  ;; https://github.com/clojure/clojurescript/commit/9ec796d791b1b2bd613af2f62cdecfd25caa6482
  []
  trace-enabled?)

(def reset-indent-level! ut/reset-indent-level!)
(def set-print-seq-length! ut/set-print-seq-length!)


;;; debugging APIs
(defmacro dbgn [form & opts]
  (let [opts' (ut/parse-opts opts)]
    `(debux.dbgn/dbgn ~form ~opts')))

;;; macro registering APIs
(defmacro register-macros! [macro-type symbols]
  `(debux.cs.macro-types/register-macros! ~macro-type ~symbols))

(defmacro show-macros
  ([] `(debux.cs.macro-types/show-macros))
  ([macro-type] `(debux.cs.macro-types/show-macros ~macro-type)))


(defn fn-body [args+body]
  (if (= :body (nth (:body args+body) 0))
    `(~(or (:args (:args args+body)) [])
       ~@(map (fn [body] `(dbgn ~body)) (nth (:body args+body) 1)))
    ;; prepost+body
    `(~(or (:args (:args args+body)) [])
       ~(:prepost (nth (:body args+body) 1))
       ~@(map (fn [body] `(dbgn ~body)) (:body (nth (:body args+body) 1))))))

;; Components of a defn
;; name
;; docstring?
;; meta?
;; bs (1-n)
;; body
;; prepost?

(defmacro defn-traced*
  [& definition]
  (let [conformed (s/conform ::ms/defn-args definition)
        name      (:name conformed)
        bs        (:bs conformed)
        arity-1?  (= (nth bs 0) :arity-1)
        args+body (nth bs 1)]
    (if arity-1?
      `(defn ~name ~@(fn-body args+body))
      `(defn ~name ~@(map fn-body (:bodies args+body))))))

(defmacro defn-traced
  "Traced defn"
  {:arglists '([name doc-string? attr-map? [params*] prepost-map? body]
                [name doc-string? attr-map? ([params*] prepost-map? body) + attr-map?])}
  [& definition]
  `(if (is-trace-enabled?)
     (defn-traced* ~@definition)
     (defn ~@definition)))



;; Components of a fn
;; name?
;; bs (1-n)
;; body
;; prepost?

(defmacro fn-traced*
  "Traced form of fn. Prefer fn-traced to compile out under advanced optimizations."
  [& definition]
  (let [conformed (s/conform ::ms/fn-args definition)
        name      (:name conformed)
        bs        (:bs conformed)
        arity-1?  (= (nth bs 0) :arity-1)
        args+body (nth bs 1)]
    (if arity-1?
      ;; If name is nil, then the empty vector is removed by the unquote
      `(fn ~@(when name [name])
         ~@(fn-body args+body))
      ;; arity-n
      (let [bodies (:bodies args+body)]
        `(fn ~@(when name [name])
           ~@(map fn-body bodies))))))

(defmacro fn-traced
  "Defines a traced fn"
  {:arglists '[(fn name? [params*] exprs*) (fn name? ([params*] exprs*) +)]}
  [& definition]
  `(if (is-trace-enabled?)
     (fn-traced* ~@definition)
     (fn ~@definition)))

