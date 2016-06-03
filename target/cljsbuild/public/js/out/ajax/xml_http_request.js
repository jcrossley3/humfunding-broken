// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__12436,handler){
var map__12437 = p__12436;
var map__12437__$1 = ((((!((map__12437 == null)))?((((map__12437.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12437.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12437):map__12437);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12437__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12437__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12437__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12437__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12437__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12437__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12437__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__12437,map__12437__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__12435_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__12435_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__12437,map__12437__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___12445 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___12445)){
var response_type_12446 = temp__4657__auto___12445;
this$__$1.responseType = cljs.core.name(response_type_12446);
} else {
}

var seq__12439_12447 = cljs.core.seq(headers);
var chunk__12440_12448 = null;
var count__12441_12449 = (0);
var i__12442_12450 = (0);
while(true){
if((i__12442_12450 < count__12441_12449)){
var vec__12443_12451 = chunk__12440_12448.cljs$core$IIndexed$_nth$arity$2(null,i__12442_12450);
var k_12452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12443_12451,(0),null);
var v_12453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12443_12451,(1),null);
this$__$1.setRequestHeader(k_12452,v_12453);

var G__12454 = seq__12439_12447;
var G__12455 = chunk__12440_12448;
var G__12456 = count__12441_12449;
var G__12457 = (i__12442_12450 + (1));
seq__12439_12447 = G__12454;
chunk__12440_12448 = G__12455;
count__12441_12449 = G__12456;
i__12442_12450 = G__12457;
continue;
} else {
var temp__4657__auto___12458 = cljs.core.seq(seq__12439_12447);
if(temp__4657__auto___12458){
var seq__12439_12459__$1 = temp__4657__auto___12458;
if(cljs.core.chunked_seq_QMARK_(seq__12439_12459__$1)){
var c__6927__auto___12460 = cljs.core.chunk_first(seq__12439_12459__$1);
var G__12461 = cljs.core.chunk_rest(seq__12439_12459__$1);
var G__12462 = c__6927__auto___12460;
var G__12463 = cljs.core.count(c__6927__auto___12460);
var G__12464 = (0);
seq__12439_12447 = G__12461;
chunk__12440_12448 = G__12462;
count__12441_12449 = G__12463;
i__12442_12450 = G__12464;
continue;
} else {
var vec__12444_12465 = cljs.core.first(seq__12439_12459__$1);
var k_12466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12444_12465,(0),null);
var v_12467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12444_12465,(1),null);
this$__$1.setRequestHeader(k_12466,v_12467);

var G__12468 = cljs.core.next(seq__12439_12459__$1);
var G__12469 = null;
var G__12470 = (0);
var G__12471 = (0);
seq__12439_12447 = G__12468;
chunk__12440_12448 = G__12469;
count__12441_12449 = G__12470;
i__12442_12450 = G__12471;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__6116__auto__ = body;
if(cljs.core.truth_(or__6116__auto__)){
return or__6116__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
