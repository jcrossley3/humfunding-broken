(ns humfunding.fop
  (:require [clojure.java.io :as io])
  (:import (javax.xml.transform
           Result
           Source
           Transformer
           TransformerFactory)
          (javax.xml.transform.sax
           SAXResult)
          (javax.xml.transform.stream
           StreamSource)
          (org.apache.fop.apps
           FOUserAgent
           FopFactory
           Fop
           MimeConstants)))


;; see /home/torysa/Downloads/fop-2.1/examples/embedding/java/embedding/ExampleXML2PDF.java


(defn generate-leave-pdf [{:keys [xml-file xslt-file pdf-file] ;; TODO doesn't yet connect the process all the way from xml-making to pdf-producing
                           :or   {xslt-file (-> "leave.xsl"
                                                io/resource
                                                io/file)
                                  pdf-file  (io/file "/home/torysa/temp/fopout.pdf")}}]
  (let [fop-factory   (-> (.toURI (io/file ".")) FopFactory/newInstance) ;; TODO can these take in-memory, bufferedoutputstream for example? 
        fo-user-agent (-> fop-factory .newFOUserAgent)
        transformer   (-> (TransformerFactory/newInstance) (.newTransformer (StreamSource. xslt-file)))]
    (with-open [out (io/output-stream pdf-file)]
      (let [res (-> (.newFop fop-factory MimeConstants/MIME_PDF fo-user-agent out)
                    .getDefaultHandler
                    SAXResult.)
            src (-> xml-file StreamSource.)]
        (.setParameter transformer "versionParam" "2.0")
        (.transform transformer src res)
        (str pdf-file)))))

(defn generate-leave-pdf-faster [{:keys [xml-file xslt-file pdf-file] ;; TODO doesn't yet connect the process all the way from xml-making to pdf-producing
                           :or   {xslt-file (-> "leave.xsl"
                                                io/resource
                                                io/file)
                                  pdf-file  (io/file "/home/torysa/temp/fopout.pdf")}}]
  (let [fop-factory   (-> (.toURI (io/file ".")) FopFactory/newInstance) ;; TODO can these take in-memory, bufferedoutputstream for example? 
        fo-user-agent (-> fop-factory .newFOUserAgent)
        transformer   (-> (TransformerFactory/newInstance) (.newTransformer (StreamSource. xslt-file)))
        out (io/output-stream pdf-file)]
    (try 
      (let [res (-> (.newFop fop-factory MimeConstants/MIME_PDF fo-user-agent out)
                    .getDefaultHandler
                    SAXResult.)
            src (-> xml-file StreamSource.)]
        (.setParameter transformer "versionParam" "2.0")
        (.transform transformer src res)
        (str pdf-file))
      (finally (.close out)))))

(defn generate-leave-pdf-mem
  "Generate the pdf from an input StringReader stream of XML, rather than from an xml file"
  [{:keys [xml xslt-file pdf-file] 
    :or   {xslt-file (-> "leave.xsl"
                         io/resource
                         io/file)
           pdf-file  (io/file "/home/torysa/temp/fopout.pdf")}}]
  (let [fop-factory   (-> (.toURI (io/file ".")) FopFactory/newInstance)
        fo-user-agent (.newFOUserAgent fop-factory)
        transformer   (-> (TransformerFactory/newInstance) (.newTransformer (StreamSource. xslt-file)))]
    (with-open [out (io/output-stream pdf-file)]
      (let [res (-> (.newFop fop-factory MimeConstants/MIME_PDF fo-user-agent out)
                    .getDefaultHandler
                    SAXResult.)
            src (-> xml StreamSource.)]
        (.setParameter transformer "versionParam" "2.0")
        (.transform transformer src res)
        (str pdf-file)))))

