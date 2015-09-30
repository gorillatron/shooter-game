(ns shooter.jsclient.client
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om]
            [om.dom :as dom]
            [cljs.core.async :refer [put! take! chan <! >! timeout]]
            [shooter.jsclient.gamecomponent :refer [game-component]]))

(enable-console-print!)


(def comm (chan))

(defn app [state owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (go (while true
            (let [event (<! comm)]
              (doseq []
                (let [newstate (:state event)]
                  (om/update-state! owner (fn [] newstate))))))))
    om/IRenderState
    (render-state [this state]
      (dom/div nil
        (om/build game-component nil)))))


(om/root app {}
  {:target (. js/document (getElementById "app"))})
