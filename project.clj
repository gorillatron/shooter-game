(defproject shooter "0.1.0-SNAPSHOT"

  :description "FIXME: write description"

  :url "http://example.com/FIXME"

  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.48"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.clojure/data.json "0.2.6"]
                 [org.omcljs/om "0.9.0"]
                 [com.stuartsierra/component "0.2.3"]
                 [http-kit "2.1.18"]
                 [compojure "1.4.0"]
                 [javax.servlet/servlet-api "2.5"]
                 [ring/ring-devel "1.4.0"]
                 [ring/ring-core "1.4.0"]
                 [reloaded.repl "0.1.0"]
                 [com.wagjo/data-cljs "0.1.0-SNAPSHOT"]
                 [hiccup "1.0.5"]
                 [quil "2.2.6"]]

  :main ^:skip-aot shooter.core

  :target-path "target/%s"

  :profiles {:uberjar {:aot :all}
             :dev {:plugins [[lein-cljsbuild "1.1.0"]
                             [lein-npm "0.6.1"]
                             [lein-figwheel "0.3.9"]]
                   :dependencies [[reloaded.repl "0.1.0"]]
                   :source-paths ["dev"]
                   :cljsbuild {:builds [{:source-paths ["src" "dev"]
                                         :figwheel true
                                         :compiler {:output-to "resources/public/js/shooter.jsclient.client.js"
                                                    :output-dir "resources/public/js/out"
                                                    :optimizations :none
                                                    :main "shooter.jsclient.client"
                                                    :asset-path "/js/out"
                                                    :recompile-dependents true
                                                    :source-map true}}]}}})
