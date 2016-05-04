(ns humfunding.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [humfunding.core-test]))

(doo-tests 'humfunding.core-test)

