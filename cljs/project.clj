(defproject simple "0.9.0"
  :dependencies [[org.clojure/clojure        "1.8.0"]
                 [org.clojure/clojurescript  "1.9.908"]
                 [reagent  "0.7.0"]
                 [re-frame "0.10.1"]
                 [cljs-ajax "0.7.2"]
                 [binaryage/devtools "0.9.4"]
                 [org.clojars.stumitchell/clairvoyant "0.2.1"]
                 [day8/re-frame-tracer "0.1.1-SNAPSHOT"]
                 [proto-repl "0.3.1"]]

  :plugins [[lein-cljsbuild "1.1.5"]
            [lein-figwheel  "0.5.13"]
            [lein-less "1.7.5"]
            [lein-resource "16.9.1"]
            [lein-auto "0.1.3"]
            [lein-cooper "1.2.2"]]

  :hooks [leiningen.less leiningen.resource leiningen.cljsbuild]

  :profiles {:dev {:figwheel {:repl false}
                   :cljsbuild {:builds {:client {:figwheel {:on-jsload "gamell.core/run"}
                                                 :compiler {:main "gamell.core"
                                                            :asset-path "js"
                                                            :optimizations :none
                                                            :source-map true
                                                            :source-map-timestamp true
                                                            :closure-defines {"clairvoyant.core.devmode" true}
                                                            :preloads [devtools.preload]}}}}}

             :dev-min {:figwheel {:repl false}
                       :cljsbuild {:builds {:client {:compiler {:optimizations :advanced
                                                                :elide-asserts true
                                                                :pretty-print false}}}}}}

  :figwheel {:css-dirs ["resources/public/css"]}

  :cooper {"figwheel" ["lein" "figwheel"]
           "less" ["lein" "less" "auto"]          ;; LESS file watcher
           "reource"  ["lein" "auto" "resource"]}  ;; HTML Watcher


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

  :aliases {"dev"  ["with-profile" "dev" "cooper"]
            "dev-min" ["with-profile" "dev-min" "cooper"]})
