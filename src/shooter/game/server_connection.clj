(ns shooter.game.server-connection
  (:require [gniazdo.core :as ws]
            [clojure.core.async :refer [go chan <! >! put!]]
            [clojure.data.json :refer [write-str read-str]]
            [com.stuartsierra.component :as component]))


(def connected (atom false))
(def socket (atom nil))
(def message-channel (chan))

(defn on-receive-handler [message]
  (put! message-channel (read-str message)))

(defn join-game [player]
  (do
    (reset! connected true)
    (reset! socket (ws/connect (str "ws://localhost:8080/game/join?player-name=" (:name player))
                               :on-receive on-receive-handler
                               :on-error #(reset! connected false)
                               :on-close #(reset! connected false)))))

(defn send-update [update]
  (ws/send-msg @socket (write-str update)))