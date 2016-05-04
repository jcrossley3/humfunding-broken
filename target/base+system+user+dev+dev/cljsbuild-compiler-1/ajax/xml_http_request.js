// Compiled by ClojureScript 1.8.40 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__36428,handler){
var map__36429 = p__36428;
var map__36429__$1 = ((((!((map__36429 == null)))?((((map__36429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36429):map__36429);
var uri = cljs.core.get.call(null,map__36429__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__36429__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__36429__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__36429__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__36429__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__36429__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__36429__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__36429,map__36429__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__36427_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__36427_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__36429,map__36429__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___36437 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___36437)){
var response_type_36438 = temp__4657__auto___36437;
this$__$1.responseType = cljs.core.name.call(null,response_type_36438);
} else {
}

var seq__36431_36439 = cljs.core.seq.call(null,headers);
var chunk__36432_36440 = null;
var count__36433_36441 = (0);
var i__36434_36442 = (0);
while(true){
if((i__36434_36442 < count__36433_36441)){
var vec__36435_36443 = cljs.core._nth.call(null,chunk__36432_36440,i__36434_36442);
var k_36444 = cljs.core.nth.call(null,vec__36435_36443,(0),null);
var v_36445 = cljs.core.nth.call(null,vec__36435_36443,(1),null);
this$__$1.setRequestHeader(k_36444,v_36445);

var G__36446 = seq__36431_36439;
var G__36447 = chunk__36432_36440;
var G__36448 = count__36433_36441;
var G__36449 = (i__36434_36442 + (1));
seq__36431_36439 = G__36446;
chunk__36432_36440 = G__36447;
count__36433_36441 = G__36448;
i__36434_36442 = G__36449;
continue;
} else {
var temp__4657__auto___36450 = cljs.core.seq.call(null,seq__36431_36439);
if(temp__4657__auto___36450){
var seq__36431_36451__$1 = temp__4657__auto___36450;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36431_36451__$1)){
var c__30411__auto___36452 = cljs.core.chunk_first.call(null,seq__36431_36451__$1);
var G__36453 = cljs.core.chunk_rest.call(null,seq__36431_36451__$1);
var G__36454 = c__30411__auto___36452;
var G__36455 = cljs.core.count.call(null,c__30411__auto___36452);
var G__36456 = (0);
seq__36431_36439 = G__36453;
chunk__36432_36440 = G__36454;
count__36433_36441 = G__36455;
i__36434_36442 = G__36456;
continue;
} else {
var vec__36436_36457 = cljs.core.first.call(null,seq__36431_36451__$1);
var k_36458 = cljs.core.nth.call(null,vec__36436_36457,(0),null);
var v_36459 = cljs.core.nth.call(null,vec__36436_36457,(1),null);
this$__$1.setRequestHeader(k_36458,v_36459);

var G__36460 = cljs.core.next.call(null,seq__36431_36451__$1);
var G__36461 = null;
var G__36462 = (0);
var G__36463 = (0);
seq__36431_36439 = G__36460;
chunk__36432_36440 = G__36461;
count__36433_36441 = G__36462;
i__36434_36442 = G__36463;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__29600__auto__ = body;
if(cljs.core.truth_(or__29600__auto__)){
return or__29600__auto__;
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
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});
