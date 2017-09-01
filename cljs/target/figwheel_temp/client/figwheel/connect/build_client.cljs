(ns figwheel.connect.build-client (:require [gamell.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/gamell.core.run (apply js/gamell.core.run x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'gamell.core/run' is missing"))), :build-id "client", :websocket-url "ws://localhost:3449/figwheel-ws"})

