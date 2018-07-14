(defproject simple "0.9.0"
  :dependencies [[org.clojure/clojure        "1.9.0"]
                 [org.clojure/clojurescript  "1.10.339"]
                 [reagent  "0.8.1"]
                 [re-frame "0.10.5"]
                 [cljs-ajax "0.7.4"]]

  :plugins [[lein-cljsbuild "1.1.5"]
            [lein-figwheel  "0.5.13"]
            [lein-less "1.7.5"]
            [lein-resource "16.9.1"]
            [lein-auto "0.1.3"]
            [lein-cooper "1.2.2"]
            [lein-ancient "0.6.15"]]

  :hooks [leiningen.less leiningen.resource leiningen.cljsbuild]

  :repl-options {:port 12345}

  :profiles {:dev {:dependencies [[binaryage/devtools "0.9.10"]
                                  [org.clojars.stumitchell/clairvoyant "0.2.1"]
                                  [day8/re-frame-tracer "0.1.1-SNAPSHOT"]]
                   :figwheel {:repl false}
                   :cljsbuild {:builds {:client {:figwheel {:on-jsload "gamell.dev/run"}
                                                 :source-paths ["src" "dev-src"]
                                                 :compiler {:main "gamell.dev"
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
                                                             :asset-path "js"
                                                             :source-map false
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
