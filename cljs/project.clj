(defproject simple "0.9.0"
  :dependencies [[org.clojure/clojure        "1.8.0"]
                 [org.clojure/clojurescript  "1.9.908"]
                 [reagent  "0.7.0"]
                 [re-frame "0.10.1"]]

  :plugins [[lein-cljsbuild "1.1.5"]
            [lein-figwheel  "0.5.13"]
            [lein-less "1.7.5"]
            [lein-resource "16.9.1"]
            [lein-auto "0.1.3"]
            [lein-cooper "1.2.2"]]

  :hooks [leiningen.less leiningen.resource leiningen.cljsbuild]

  :profiles {:dev {:cljsbuild
                   {:builds {:client {:figwheel     {:on-jsload "gamell.core/run"}
                                      :compiler     {:main "gamell.core"
                                                     :asset-path "js"
                                                     :optimizations :none
                                                     :source-map true
                                                     :source-map-timestamp true}}}}}

             :prod {:cljsbuild
                    {:builds {:client {:compiler    {:optimizations :advanced
                                                     :elide-asserts true
                                                     :pretty-print false}}}}}}

  :figwheel {:repl false}

  :clean-targets ^{:protect false} ["resources/public"]

  :cljsbuild {:builds {:client {:source-paths ["src"]
                                :compiler     {:output-dir "resources/public/js"
                                               :output-to  "resources/public/js/client.js"}}}}

  :less {:source-paths ["resources/src/less"]
         :target-path "resources/public/css"}

  :resource { :resource-paths ["resources/src"]
              :target-path "resources/public"
              :excludes [ #".+less"]}

  :auto {:default {:paths ["resources/src"]
                   :file-pattern #"\.(html)$"}}

  :aliases {"dev" ["cooper"]}

  :cooper {"less" ["lein" "less" "auto"]
           "reource"  ["lein" "auto" "resource"]
           "figwheel" ["lein" "figwheel"]})
