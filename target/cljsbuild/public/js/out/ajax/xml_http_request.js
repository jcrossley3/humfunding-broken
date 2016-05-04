// Compiled by ClojureScript 1.8.40 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__30700,handler){
var map__30701 = p__30700;
var map__30701__$1 = ((((!((map__30701 == null)))?((((map__30701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30701):map__30701);
var uri = cljs.core.get.call(null,map__30701__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__30701__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__30701__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__30701__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__30701__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__30701__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__30701__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__30701,map__30701__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__30699_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__30699_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__30701,map__30701__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___30709 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___30709)){
var response_type_30710 = temp__4657__auto___30709;
this$__$1.responseType = cljs.core.name.call(null,response_type_30710);
} else {
}

var seq__30703_30711 = cljs.core.seq.call(null,headers);
var chunk__30704_30712 = null;
var count__30705_30713 = (0);
var i__30706_30714 = (0);
while(true){
if((i__30706_30714 < count__30705_30713)){
var vec__30707_30715 = cljs.core._nth.call(null,chunk__30704_30712,i__30706_30714);
var k_30716 = cljs.core.nth.call(null,vec__30707_30715,(0),null);
var v_30717 = cljs.core.nth.call(null,vec__30707_30715,(1),null);
this$__$1.setRequestHeader(k_30716,v_30717);

var G__30718 = seq__30703_30711;
var G__30719 = chunk__30704_30712;
var G__30720 = count__30705_30713;
var G__30721 = (i__30706_30714 + (1));
seq__30703_30711 = G__30718;
chunk__30704_30712 = G__30719;
count__30705_30713 = G__30720;
i__30706_30714 = G__30721;
continue;
} else {
var temp__4657__auto___30722 = cljs.core.seq.call(null,seq__30703_30711);
if(temp__4657__auto___30722){
var seq__30703_30723__$1 = temp__4657__auto___30722;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30703_30723__$1)){
var c__30150__auto___30724 = cljs.core.chunk_first.call(null,seq__30703_30723__$1);
var G__30725 = cljs.core.chunk_rest.call(null,seq__30703_30723__$1);
var G__30726 = c__30150__auto___30724;
var G__30727 = cljs.core.count.call(null,c__30150__auto___30724);
var G__30728 = (0);
seq__30703_30711 = G__30725;
chunk__30704_30712 = G__30726;
count__30705_30713 = G__30727;
i__30706_30714 = G__30728;
continue;
} else {
var vec__30708_30729 = cljs.core.first.call(null,seq__30703_30723__$1);
var k_30730 = cljs.core.nth.call(null,vec__30708_30729,(0),null);
var v_30731 = cljs.core.nth.call(null,vec__30708_30729,(1),null);
this$__$1.setRequestHeader(k_30730,v_30731);

var G__30732 = cljs.core.next.call(null,seq__30703_30723__$1);
var G__30733 = null;
var G__30734 = (0);
var G__30735 = (0);
seq__30703_30711 = G__30732;
chunk__30704_30712 = G__30733;
count__30705_30713 = G__30734;
i__30706_30714 = G__30735;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__29339__auto__ = body;
if(cljs.core.truth_(or__29339__auto__)){
return or__29339__auto__;
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

//# sourceMappingURL=xml_http_request.js.map