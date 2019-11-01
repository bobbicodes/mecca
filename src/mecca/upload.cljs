(ns mecca.upload
  (:require
    [re-frame.core :as rf :refer [subscribe dispatch]]
    [cljs.core.async :refer [put! chan <! >!]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

;; derived from https://mrmcc3.github.io/post/csv-with-clojurescript/
;; and based on reagent-frontend template. 

;; dependencies from project.clj in addition to clojure, clojurescript, and reagent:
;; [org.clojure/core.async "0.2.395"]

;; atom to store file contents

;; transducer to stick on a core-async channel to manipulate all the weird javascript
;; event objects --- basically just takes the array of file objects or something
;; that the incomprehensible browser API creates and grabs the first one, then resets things.
(def first-file
  (map (fn [e]
         (let [target (.-currentTarget e)
               file (-> target .-files (aget 0))]
           (set! (.-value target) "")
           file))))

;; transducer to get text out of file object.
(def extract-result
  (map #(-> % .-target .-result)))

;; two core.async channels to take file array and then file and apply above transducers to them.
(def upload-reqs (chan 1 first-file))
(def file-reads (chan 1 extract-result))

;; function to call when a file event appears: stick it on the upload-reqs channel (which will use the transducer to grab the first file)
(defn put-upload [e]
  (put! upload-reqs e))

;; sit around in a loop waiting for a file to appear in the upload-reqs channel, read any such file, and when the read is successful, stick the file on the file-reads channel.
(go-loop []
  (let [reader (js/FileReader.)
        file (<! upload-reqs)]
    (set! (.-onload reader) #(put! file-reads %))
    (.readAsArrayBuffer reader file)
    (recur)))

;; sit around in a loop waiting for a string to appear in the file-reads channel and put it in the state atom to be read by reagent and rendered on the page.
(go-loop []
  (dispatch [:file-upload (js/ArrayBuffer. (<! file-reads))])
  (recur))
