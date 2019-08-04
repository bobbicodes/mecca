(ns mecca.helpers
  "Helpers around starting/stopping an nREPL server."
  (:require [clojure.tools.nrepl.server :as nrepl-server]
            [clojure.java.io :as io]))

(def nrepl-port 7888)
(defonce nrepl-server (atom nil))

(defn nrepl-handler []
  (require 'cider.nrepl)
  (ns-resolve 'cider.nrepl 'cider-nrepl-handler))

(defn start-nrepl-server! []
  (reset!
    nrepl-server
    (nrepl-server/start-server :port nrepl-port
                               :handler (nrepl-handler)))
  (println "Cider nREPL server started on port" nrepl-port)
  (spit ".nrepl-port" nrepl-port))

(defn stop-nrepl-server! []
  (when (not (nil? @nrepl-server))
    (nrepl-server/stop-server @nrepl-server)
    (println "Cider nREPL server on port" nrepl-port "stopped")
    (reset! nrepl-server nil)
    (io/delete-file ".nrepl-port" true)))