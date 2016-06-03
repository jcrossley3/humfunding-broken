// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('humfunding.ajax');
goog.require('cljs.core');
goog.require('ajax.core');
humfunding.ajax.default_headers = (function humfunding$ajax$default_headers(request){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$headers,(function (p1__15066_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__15066_SHARP_,new cljs.core.PersistentArrayMap(null, 2, ["Accept","application/transit+json","x-csrf-token",csrfToken], null)], 0));
}));
});
humfunding.ajax.load_interceptors_BANG_ = (function humfunding$ajax$load_interceptors_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ajax.core.default_interceptors,cljs.core.conj,ajax.core.to_interceptor(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"default headers",cljs.core.cst$kw$request,humfunding.ajax.default_headers], null)));
});
