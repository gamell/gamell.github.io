(ns gamell.dev
  (:require
   [clairvoyant.core :refer-macros [trace-forms]]
   [re-frame-tracer.core :refer [tracer]]
   [gamell.core]))

(defn ^:export run
  []
  (trace-forms
   {:tracer (tracer :color "green")}
   (gamell.core/run)))