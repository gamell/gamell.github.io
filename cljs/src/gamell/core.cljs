(ns gamell.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [clojure.string :as str]
            [ajax.core :refer [GET]]
            [clairvoyant.core :refer-macros [trace-forms]]
            [re-frame-tracer.core :refer [tracer]]))

(def content-url "https://s3.amazonaws.com/gamell-io/data.json")
(trace-forms {:tracer (tracer :color "green")}

  ;; -- Domino 1 - Event Dispatch -----------------------------------------------

  ; (defn dispatch-timer-event
  ;   []
  ;   (let [now (js/Date.)]
  ;     (rf/dispatch [:timer now])))  ;; <-- dispatch used

  ;; Call the dispatching function every second.
  ;; `defonce` is like `def` but it ensures only one instance is ever
  ;; created in the face of figwheel hot-reloading of this file.
  ; (defonce do-timer (js/setInterval dispatch-timer-event 1000))

  (def initial-content
    {:pictures    ["first photo" "second photo"]
     :repos     ["repo1" "repo2"]
     :articles  ["article1" "article2"]})

  ;; -- Domino 2 - Event Handlers -----------------------------------------------

  (rf/reg-event-db              ;; sets up initial application state
    :initialize                 ;; usage:  (dispatch [:initialize])
    (fn [_ _]                   ;; the two parameters are not important here, so use _
      {:time (js/Date.)         ;; What it returns becomes the new application state
       :time-color "#f88"       ;; so the application state will initially be a map with two keys
       :content initial-content}))


  ; (rf/reg-event-db                ;; usage:  (dispatch [:time-color-change 34562])
  ;   :time-color-change            ;; dispatched when the user enters a new colour into the UI text field
  ;   (fn [db [_ new-color-value]]  ;; -db event handlers given 2 parameters:  current application state and event (a vector)
  ;     (assoc db :time-color new-color-value)))   ;; compute and return the new application state


  (defn load-content
    []
    (GET content-url
      {:response-format :json
       :keywords? true
       :handler (fn [content]
                  (js/console.log "*** CONTENT LOADED ***")
                  (rf/dispatch [:content-loaded content]))}))

  (rf/reg-event-db                  ;; usage:  (dispatch [:time-color-change 34562])
    :content-loaded
    (fn [db [_ new-content]]
      (assoc db :content (:data new-content))))

  ; (rf/reg-event-db                 ;; usage:  (dispatch [:timer a-js-Date])
  ;   :timer                         ;; every second an event of this kind will be dispatched
  ;   (fn [db [_ new-time]]          ;; note how the 2nd parameter is destructured to obtain the data value
  ;     (assoc db :time new-time)))  ;; compute and return the new application state


  ;; -- Domino 4 - Query  -------------------------------------------------------

  ; (rf/reg-sub
  ;   :time
  ;   (fn [db _]     ;; db is current app state. 2nd unused param is query vector
  ;     (:time db))) ;; return a query computation over the application state
  ;
  ; (rf/reg-sub
  ;   :time-color
  ;   (fn [db _]
  ;     (:time-color db)))

  (rf/reg-sub
    :content
    (fn [db _]
      (:content db)))


  ;; -- Domino 5 - View Functions ----------------------------------------------

  ; (defn clock
  ;   []
  ;   [:div.example-clock
  ;    {:style {:color @(rf/subscribe [:time-color])}}
  ;    (-> @(rf/subscribe [:time])
  ;        .toTimeString
  ;        (str/split " ")
  ;        first)])

  ; (defn color-input
  ;   []
  ;   [:div.color-input
  ;    "Time color: "
  ;    [:input {:type "text"
  ;             :value @(rf/subscribe [:time-color])
  ;             :on-change #(rf/dispatch [:time-color-change (-> % .-target .-value)])}]])  ;; <---

  (def card-types {
                   :pictures {
                              :title :name
                              :body :imageUrl}
                   :repos {
                           :title :repo
                           :body :description}

                   :articles {
                              :title :title
                              :body :content}})


  (defn card
    [type card-info id]
    ^{:key (str "update-card-" (name type) "-" id)}
    [:li.update-card ((:title (get card-types :pictures)) card-info)])

  (defn content-section
    [type data id]
    ^{:key (str "update-section-" (name type) "-" id)}
    [:ul.update-section (str ":type -> " type)
         (js/console.log type)
     (map #(card type %1 %2) data (iterate inc 0))])

  (defn page-content
    []
    [:div.app "Content"
     (let [content @(rf/subscribe [:content])]
       (map
         (fn [[type data] id] (content-section type data id))
         content
         (iterate inc 0)))])

  (defn ui
    []
    [page-content])


  ;; -- Entry Point -------------------------------------------------------------

  (defn ^:export run
    []
    (rf/dispatch-sync [:initialize])       ;; puts a value into application state
    (load-content)
    (reagent/render [ui]                   ;; mount the application's ui into '<div id="app" />'
                    (js/document.getElementById "content"))))
