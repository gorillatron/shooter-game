(ns shooter.game.server-connection
  (:require [gniazdo.core :as ws]
            [clojure.core.async :refer [go chan <! >! put!]]
            [clojure.data.json :refer [write-str read-str]]
            [com.stuartsierra.component :as component]))


(def connected (atom false))
(def socket (atom nil))
(def message-channel (chan))

(defn on-receive-handler [message]
  (do
    (put! message-channel (read-str message :key-fn clojure.core/keyword))))


(defn on-close [& args]
  (do
    #(reset! connected false)
    (println "on-close" args)))

(defn join-game [player]
  (do
    (reset! connected true)
    (reset! socket (ws/connect (str "ws://shooter-server.herokuapp.com/game/join?player-name=" (:name player))
                               :on-receive on-receive-handler
                               :on-error on-close
                               :on-close on-close))))

(defn send-update [update]
  (ws/send-msg @socket (write-str update)))