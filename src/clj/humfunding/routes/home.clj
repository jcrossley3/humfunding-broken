(ns humfunding.routes.home
  (:require [humfunding.layout :as layout]
            [compojure.core :refer [defroutes GET POST]]
            [ring.util.http-response :as response]
            [clojure.java.io :as io]
            [humfunding.formstack :as fs]))

(defn leave-requests [category]
  (let [form-id (-> category fs/get-forms-by-category first (get "id"))
        sub-ids (map #(get % "id")
                     (-> (fs/get-submissions form-id) (get "submissions")))
        requests (into [] (for [si sub-ids]
                            (-> si (fs/get-submission-vals form-id) fs/make-xml-vals)))]
    (layout/render :dean-requests requests)))

(defn leave-requests-raw [category]
  (println ">>>>> Requesting leave request for: " category)
  ;;(response/ok {:body "Requested leave!"})
  (let [form-id (-> (re-pattern (str category "_leave")) fs/get-forms-by-category first (get "id"))
        sub-ids (map #(get % "id")
                     (-> (fs/get-submissions form-id) (get "submissions")))
        requests (into [] (for [si sub-ids]
                            (-> si (fs/get-submission-vals form-id) fs/make-xml-vals)))]
    ;; Return xml vals via transit
    (response/ok  requests))
  ;(response/ok "I'm just sending something.")
  )

(defn home-page []
  (layout/hiccup-render-cljs-base))

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/dean/leave" [] (leave-requests #"dean_leave"))
                                        ;(GET "/:dept/:request-type" [dept request-type] (get-submissions dept type)) ;; TODO
  (POST "/leave/:category" [category] (leave-requests-raw category))
  (GET "/docs" [] (response/ok (-> "docs/docs.md" io/resource slurp))))

