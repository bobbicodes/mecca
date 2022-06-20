(ns mecca.demo
  (:require [mecca.music :as music]
            [re-frame.core :as rf :refer [subscribe dispatch]]))

@(subscribe [:instrument])

@(subscribe [:notes])

@(dispatch [:set-notes [{:time 0, :instrument 14, :pitch 59}]])

(dispatch [:add-note 14
           0
           60])