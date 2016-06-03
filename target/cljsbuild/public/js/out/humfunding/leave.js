// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('humfunding.leave');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('secretary.core');
goog.require('ajax.core');
goog.require('humfunding.shared');
if(typeof humfunding.leave.requests !== 'undefined'){
} else {
humfunding.leave.requests = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
humfunding.leave.last_sorted_by = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
humfunding.leave.table_busy = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if(typeof humfunding.leave.request_title !== 'undefined'){
} else {
humfunding.leave.request_title = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof humfunding.leave.selected_request_option !== 'undefined'){
} else {
humfunding.leave.selected_request_option = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
humfunding.leave.go_to_leave_page = (function humfunding$leave$go_to_leave_page(e){
var p = secretary.core.get_config(cljs.core.cst$kw$prefix);
var ls = document.getElementById("leave-selector");
var val = ls.value;
var url = [cljs.core.str(p),cljs.core.str("/leave/"),cljs.core.str(val)].join('');
var si = ls.selectedIndex;
var content = (ls.options[si]).text;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(humfunding.leave.request_title,content) : cljs.core.reset_BANG_.call(null,humfunding.leave.request_title,content));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(humfunding.leave.selected_request_option,si) : cljs.core.reset_BANG_.call(null,humfunding.leave.selected_request_option,si));

return document.location.href = url;
});
/**
 * Leave Request Selector
 */
humfunding.leave.leave_request_dropdown = (function humfunding$leave$leave_request_dropdown(){
var option_map = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["all","All"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dean","Dean's Office"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ane","Asian & Near Eastern"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cal","Comparative Arts & Letters"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["english","English"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["frenital","French & Italian"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["germruss","German & Russian"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["linguistics","Linguistics & English Language"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["philosophy","Philosophy"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["spanport","Spanish & Portuguese"], null)], null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select_SHARP_leave_DASH_selector$form_DASH_control,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_change,humfunding.leave.go_to_leave_page], null)], null),(function (){var iter__6896__auto__ = ((function (option_map){
return (function humfunding$leave$leave_request_dropdown_$_iter__13904(s__13905){
return (new cljs.core.LazySeq(null,((function (option_map){
return (function (){
var s__13905__$1 = s__13905;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13905__$1);
if(temp__4657__auto__){
var s__13905__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13905__$2)){
var c__6894__auto__ = cljs.core.chunk_first(s__13905__$2);
var size__6895__auto__ = cljs.core.count(c__6894__auto__);
var b__13907 = cljs.core.chunk_buffer(size__6895__auto__);
if((function (){var i__13906 = (0);
while(true){
if((i__13906 < size__6895__auto__)){
var vec__13912 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6894__auto__,i__13906);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13912,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13912,(1),null);
cljs.core.chunk_append(b__13907,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,k], null),n], null));

var G__13914 = (i__13906 + (1));
i__13906 = G__13914;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13907),humfunding$leave$leave_request_dropdown_$_iter__13904(cljs.core.chunk_rest(s__13905__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13907),null);
}
} else {
var vec__13913 = cljs.core.first(s__13905__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13913,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13913,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,k], null),n], null),humfunding$leave$leave_request_dropdown_$_iter__13904(cljs.core.rest(s__13905__$2)));
}
} else {
return null;
}
break;
}
});})(option_map))
,null,null));
});})(option_map))
;
return iter__6896__auto__(option_map);
})());
});
humfunding.leave.download_script = (function humfunding$leave$download_script(var_args){
var args__7192__auto__ = [];
var len__7185__auto___13917 = arguments.length;
var i__7186__auto___13918 = (0);
while(true){
if((i__7186__auto___13918 < len__7185__auto___13917)){
args__7192__auto__.push((arguments[i__7186__auto___13918]));

var G__13919 = (i__7186__auto___13918 + (1));
i__7186__auto___13918 = G__13919;
continue;
} else {
}
break;
}

var argseq__7193__auto__ = ((((1) < args__7192__auto__.length))?(new cljs.core.IndexedSeq(args__7192__auto__.slice((1)),(0),null)):null);
return humfunding.leave.download_script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7193__auto__);
});

humfunding.leave.download_script.cljs$core$IFn$_invoke$arity$variadic = (function (element_id,refresh){
var uri = [cljs.core.str("/pdf/"),cljs.core.str(element_id)].join('');
var refresh_uri = [cljs.core.str(uri),cljs.core.str("?refresh=true")].join('');
return window.location = ((cljs.core.not(refresh))?uri:refresh_uri);
});

humfunding.leave.download_script.cljs$lang$maxFixedArity = (1);

humfunding.leave.download_script.cljs$lang$applyTo = (function (seq13915){
var G__13916 = cljs.core.first(seq13915);
var seq13915__$1 = cljs.core.next(seq13915);
return humfunding.leave.download_script.cljs$core$IFn$_invoke$arity$variadic(G__13916,seq13915__$1);
});
humfunding.leave.download_link = (function humfunding$leave$download_link(submission_id){
var url = [cljs.core.str("/pdf/"),cljs.core.str(submission_id)].join('');
var label = "PDF";
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$pdf_DASH_links,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (url,label){
return (function (){
return humfunding.leave.download_script(submission_id);
});})(url,label))
], null),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (url,label){
return (function (){
return humfunding.leave.download_script.cljs$core$IFn$_invoke$arity$variadic(submission_id,cljs.core.array_seq([cljs.core.cst$kw$refresh], 0));
});})(url,label))
,cljs.core.cst$kw$alt,"Rebuild PDF"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_refresh], null)], null)], null);
});
humfunding.leave.generate_leave_row = (function humfunding$leave$generate_leave_row(r){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$cell$date,(r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$request_DASH_date) : r.call(null,cljs.core.cst$kw$request_DASH_date))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$cell$name,[cljs.core.str((r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$surname) : r.call(null,cljs.core.cst$kw$surname))),cljs.core.str(", "),cljs.core.str((r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$given_DASH_name) : r.call(null,cljs.core.cst$kw$given_DASH_name)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$cell$title,(r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$project_DASH_title) : r.call(null,cljs.core.cst$kw$project_DASH_title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$cell$leave_DASH_date,(r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$project_DASH_start_DASH_date) : r.call(null,cljs.core.cst$kw$project_DASH_start_DASH_date))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$cell$pdf,humfunding.leave.download_link((r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$submission_DASH_id) : r.call(null,cljs.core.cst$kw$submission_DASH_id)))], null)], null);
});
humfunding.leave.sort_request = (function humfunding$leave$sort_request(item){
var sort_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(item.target.id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_key,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(humfunding.leave.last_sorted_by) : cljs.core.deref.call(null,humfunding.leave.last_sorted_by)))){
console.log([cljs.core.str("Reversing on "),cljs.core.str(sort_key)].join(''));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(humfunding.leave.requests,cljs.core.reverse);

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(humfunding.leave.last_sorted_by,null) : cljs.core.reset_BANG_.call(null,humfunding.leave.last_sorted_by,null));
} else {
console.log([cljs.core.str("Sorting on "),cljs.core.str(sort_key)].join(''));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(humfunding.leave.requests,((function (sort_key){
return (function (p1__13920_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(sort_key,p1__13920_SHARP_);
});})(sort_key))
);

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(humfunding.leave.last_sorted_by,sort_key) : cljs.core.reset_BANG_.call(null,humfunding.leave.last_sorted_by,sort_key));
}
});
humfunding.leave.header_link = (function humfunding$leave$header_link(key_name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,key_name,cljs.core.cst$kw$on_DASH_click,humfunding.leave.sort_request], null),text], null);
});
humfunding.leave.format_requests = (function humfunding$leave$format_requests(){
if(!(cljs.core.empty_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(humfunding.leave.requests) : cljs.core.deref.call(null,humfunding.leave.requests))))){
var table_skeleton = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$table$col_DASH_md_DASH_12,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$headers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$cell$date,humfunding.leave.header_link("request-date","Submission Date")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$cell$name,humfunding.leave.header_link("surname","Applicant")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$cell$title,humfunding.leave.header_link("project-title","Project Title")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$cell$leave_DASH_date,humfunding.leave.header_link("project-start-date","Project Start")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$cell$pdf,"Form"], null)], null)], null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(table_skeleton,(function (){var iter__6896__auto__ = ((function (table_skeleton){
return (function humfunding$leave$format_requests_$_iter__13927(s__13928){
return (new cljs.core.LazySeq(null,((function (table_skeleton){
return (function (){
var s__13928__$1 = s__13928;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13928__$1);
if(temp__4657__auto__){
var s__13928__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13928__$2)){
var c__6894__auto__ = cljs.core.chunk_first(s__13928__$2);
var size__6895__auto__ = cljs.core.count(c__6894__auto__);
var b__13930 = cljs.core.chunk_buffer(size__6895__auto__);
if((function (){var i__13929 = (0);
while(true){
if((i__13929 < size__6895__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6894__auto__,i__13929);
cljs.core.chunk_append(b__13930,humfunding.leave.generate_leave_row(r));

var G__13933 = (i__13929 + (1));
i__13929 = G__13933;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13930),humfunding$leave$format_requests_$_iter__13927(cljs.core.chunk_rest(s__13928__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13930),null);
}
} else {
var r = cljs.core.first(s__13928__$2);
return cljs.core.cons(humfunding.leave.generate_leave_row(r),humfunding$leave$format_requests_$_iter__13927(cljs.core.rest(s__13928__$2)));
}
} else {
return null;
}
break;
}
});})(table_skeleton))
,null,null));
});})(table_skeleton))
;
return iter__6896__auto__((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(humfunding.leave.requests) : cljs.core.deref.call(null,humfunding.leave.requests)));
})());
} else {
if(cljs.core.empty_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(humfunding.leave.table_busy) : cljs.core.deref.call(null,humfunding.leave.table_busy)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$no_DASH_requests,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Sorry; there are no approved leave requests recorded for ",(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(humfunding.leave.request_title) : cljs.core.deref.call(null,humfunding.leave.request_title)),"."], null)], null);
} else {
return null;
}
}
});
humfunding.leave.get_requests = (function humfunding$leave$get_requests(var_args){
var args__7192__auto__ = [];
var len__7185__auto___13941 = arguments.length;
var i__7186__auto___13942 = (0);
while(true){
if((i__7186__auto___13942 < len__7185__auto___13941)){
args__7192__auto__.push((arguments[i__7186__auto___13942]));

var G__13943 = (i__7186__auto___13942 + (1));
i__7186__auto___13942 = G__13943;
continue;
} else {
}
break;
}

var argseq__7193__auto__ = ((((1) < args__7192__auto__.length))?(new cljs.core.IndexedSeq(args__7192__auto__.slice((1)),(0),null)):null);
return humfunding.leave.get_requests.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7193__auto__);
});

humfunding.leave.get_requests.cljs$core$IFn$_invoke$arity$variadic = (function (category,p__13937){
var vec__13938 = p__13937;
var force_refresh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13938,(0),null);
if(cljs.core.truth_(force_refresh)){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(humfunding.leave.requests,null) : cljs.core.reset_BANG_.call(null,humfunding.leave.requests,null));
} else {
}

var G__13939_13944 = humfunding.leave.table_busy;
var G__13940_13945 = humfunding.shared.busy_indicator((8));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13939_13944,G__13940_13945) : cljs.core.reset_BANG_.call(null,G__13939_13944,G__13940_13945));

return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str("/leave/"),cljs.core.str(category)].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,((function (vec__13938,force_refresh){
return (function (p1__13934_SHARP_){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(humfunding.leave.requests,p1__13934_SHARP_) : cljs.core.reset_BANG_.call(null,humfunding.leave.requests,p1__13934_SHARP_));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(humfunding.leave.table_busy,null) : cljs.core.reset_BANG_.call(null,humfunding.leave.table_busy,null));
});})(vec__13938,force_refresh))
], null)], 0));
});

humfunding.leave.get_requests.cljs$lang$maxFixedArity = (1);

humfunding.leave.get_requests.cljs$lang$applyTo = (function (seq13935){
var G__13936 = cljs.core.first(seq13935);
var seq13935__$1 = cljs.core.next(seq13935);
return humfunding.leave.get_requests.cljs$core$IFn$_invoke$arity$variadic(G__13936,seq13935__$1);
});
humfunding.leave.leave_page = (function humfunding$leave$leave_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$jumbotron$centralize,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$page_DASH_title,"Professional Leave Requests"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$organization,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(humfunding.leave.request_title) : cljs.core.deref.call(null,humfunding.leave.request_title))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_12$leave_DASH_requests,humfunding.leave.leave_request_dropdown(),humfunding.leave.format_requests()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$table_DASH_busy,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(humfunding.leave.table_busy) : cljs.core.deref.call(null,humfunding.leave.table_busy))], null)], null);
});
