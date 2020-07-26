(defproject gamell-io "1.0.0"
  :dependencies [[org.clojure/clojure        "1.10.1"]
                 [org.clojure/clojurescript  "1.10.773"]
                 [reagent  "0.10.0"]
                 [re-frame "1.0.0"]
                 [cljs-ajax "0.8.0"]]

  :plugins [[lein-cljsbuild "1.1.5"]
            [lein-figwheel  "0.5.19"]
            [lein-less "1.7.5"]
            [lein-resource "16.9.1"]
            [lein-auto "0.1.3"]
            [lein-cooper "1.2.2"]
            [lein-ancient "0.6.15"]]

  :hooks [leiningen.less leiningen.resource leiningen.cljsbuild]

  :repl-options {:port 12345}

  :profiles {:dev {:figwheel {:repl false}
                   :cljsbuild {:builds {:client {:figwheel {:on-jsload "gamell.core/run"}
                                                 :source-paths ["src"]
                                                 :compiler {:main "gamell.core"
                                                            :asset-path "js"
                                                            :optimizations :none
                                                            :source-map true
                                                            :source-map-timestamp true}}}}}
             
             :prod {:less {:target-path "build/css"}
                    :resource {:target-path "build"}
                    :cljsbuild {:builds {:client {:source-paths ["src"]
                                                  :compiler {:output-to "build/js/client.js"
                                                             :asset-path "js"
                                                             :source-map "/build/js/sourcemap.js"
                                                             :optimizations :advanced
                                                             :pretty-print false
                                                             :elide-asserts true}}}}}}

  :figwheel {:css-dirs ["resources/public/css"]}

  :cooper {"figwheel" ["lein" "figwheel"]
           "less" ["lein" "less" "auto"]           ;; LESS compiler & file watcher
           "reource"  ["lein" "auto" "resource"]}  ;; HTML Watcher


  :clean-targets ^{:protect false} ["resources/public" "build"]

  :cljsbuild {:builds {:client {:compiler     {:output-dir "resources/public/js"
                                               :output-to  "resources/public/js/client.js"}}}}

  :less {:source-paths ["resources/src/less"]
         :target-path "resources/public/css"}

  :resource {:resource-paths ["resources/src"]
             :target-path "resources/public"
             :excludes [#".+less"]}

  :auto {:default {:paths ["resources/src"]
                   :file-pattern #"\.(html)$"}}

  :aliases {"dev"  ["with-profile" "dev" "cooper"]
            "dev-min" ["with-profile" "prod" "cooper"]
            "build" ["with-profile" "prod" "do"
                     ["clean"]
                     ["less" "once"]
                     ["resource"]
                     ["cljsbuild" "once" "client"]]})
