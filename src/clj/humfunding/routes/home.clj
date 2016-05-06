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
                            (-> si fs/get-submission-vals fs/make-submission-valmap)))]
    (layout/render :dean-requests requests)))

(defn leave-requests-raw [category]
  (println ">>>>> Requesting leave request for: " category)
  ;;(response/ok {:body "Requested leave!"})
  (let [form-id (-> (re-pattern (str category "_leave")) fs/get-forms-by-category first (get "id"))
        sub-ids (map #(get % "id")
                     (-> (fs/get-submissions form-id) (get "submissions")))
        requests (into [] (for [si sub-ids]
                            (-> si fs/get-submission-vals fs/make-submission-valmap)))]
    ;; Return xml vals via transit
    (response/ok  requests))
  ;(response/ok "I'm just sending something.")
  )

(defn home-page []
  (layout/hiccup-render-cljs-base))

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/leave/dean" [] (leave-requests #"dean_leave"))
  (GET "/pdf/:sub-id" [sub-id] (-> (fs/serve-pdf sub-id)
                                   response/ok
                                   (response/header "Content-Disposition" (str "attachment; filename=\"" (str sub-id ".pdf") "\""))
                                   (response/content-type "application/pdf")
                                   )) ;; TODO invalid subids, and what format can be served
                                        ;(GET "/:dept/:request-type" [dept request-type] (get-submissions dept type)) ;; TODO
  (POST "/leave/:category" [category] (leave-requests-raw category))
  (GET "/docs" [] (response/ok (-> "docs/docs.md" io/resource slurp))))

