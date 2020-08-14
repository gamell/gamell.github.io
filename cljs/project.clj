(defproject gamell-io "1.0.0"
  :dependencies [[org.clojure/clojure        "1.10.1"]
                 [org.clojure/clojurescript  "1.10.773"]
                 [reagent  "0.10.0"]
                 [re-frame "1.0.0"]
                 [cljs-ajax "0.8.0"]]

  :plugins [[lein-cljsbuild "1.1.5"]
            [lein-figwheel  "0.5.19"]
            [lein-less "1.7.5"]
            [lein-resource "17.06.1"]
            [lein-auto "0.1.3"]
            [lein-cooper "1.2.2"]
            [lein-ancient "0.6.15"]]

  :hooks [leiningen.less leiningen.resource leiningen.cljsbuild]

  :repl-options {:port 12345}

  :profiles {:dev {:dependencies [[binaryage/devtools "1.0.2"]
                                  [org.clojars.stumitchell/clairvoyant "0.2.1"]
                                  [day8/re-frame-tracer "0.1.1-SNAPSHOT"]]
                   :figwheel {:repl false}
                   :cljsbuild {:builds {:client {:figwheel {:on-jsload "gamell.core/run"}
                                                 :source-paths ["src"]
                                                 :compiler {:main "gamell.core"
                                                            :output-dir "resources/public/js"
                                                            :output-to  "resources/public/js/client.js"
                                                            :asset-path "js"
                                                            :optimizations :none
                                                            :source-map true
                                                            :source-map-timestamp true
                                                            :closure-defines {"clairvoyant.core.devmode" true}
                                                            :preloads [devtools.preload]}}}}}

             :prod {:less {:target-path "build/css"}
                    :resource {:target-path "build"}
                    :cljsbuild {:builds {:client {:source-paths ["src"]
                                                  :compiler {:output-to "build/js/client.js"
                                                             :output-dir "build/js"
                                                             :asset-path "js"
                                                             :source-map "build/js/sourcemap.js"
                                                             :optimizations :advanced
                                                             :pretty-print false
                                                             :elide-asserts true}}}}}}

  :figwheel {:css-dirs ["resources/public/css"]}

  :clean-targets ^{:protect false} ["resources/public" "build"]

  :less {:source-paths ["resources/src/less"]
         :target-path "resources/public/css"}

  :resource {:resource-paths ["resources/src"]
             :target-path "resources/public"
             :skip-stencil [#".*"] ; do not process the files, just copy them
             :excludes [#".+less"]}

  :auto {:default {:paths ["resources/src"]
                   :file-pattern #"\.(html)$"}}

  :cooper {"reource"  ["lein" "auto" "resource"] ;; HTML & resource watcher
           "figwheel" ["lein" "figwheel"] ;; JS compiler and more
           "less" ["lein" "less" "auto"] ;; LESS compiler & file watcher
           }

  :aliases {"dev"  ["with-profile" "dev" "do" ["clean"] ["cooper"]]
            "dev-min" ["with-profile" "prod" "cooper"]
            "build" ["with-profile" "prod" "do"
                     ["clean"]
                     ["resource"]
                     ["less" "once"]
                     ["cljsbuild" "once" "client"]]})
