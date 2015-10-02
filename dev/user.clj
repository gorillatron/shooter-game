(ns user
  (:require [reloaded.repl :refer [system reset stop]]
            [clojure.core.async :refer [go chan <! >! put!]]
            [shooter.game.server-connection :as sc])
  (:use [shooter.game.client]))
