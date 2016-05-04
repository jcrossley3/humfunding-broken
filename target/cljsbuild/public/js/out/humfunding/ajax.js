// Compiled by ClojureScript 1.8.40 {}
goog.provide('humfunding.ajax');
goog.require('cljs.core');
goog.require('ajax.core');
humfunding.ajax.default_headers = (function humfunding$ajax$default_headers(request){
return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),(function (p1__32374_SHARP_){
return cljs.core.merge.call(null,p1__32374_SHARP_,new cljs.core.PersistentArrayMap(null, 2, ["Accept","application/transit+json","x-csrf-token",csrfToken], null));
}));
});
humfunding.ajax.load_interceptors_BANG_ = (function humfunding$ajax$load_interceptors_BANG_(){
return cljs.core.swap_BANG_.call(null,ajax.core.default_interceptors,cljs.core.conj,ajax.core.to_interceptor.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"default headers",new cljs.core.Keyword(null,"request","request",1772954723),humfunding.ajax.default_headers], null)));
});

//# sourceMappingURL=ajax.js.map