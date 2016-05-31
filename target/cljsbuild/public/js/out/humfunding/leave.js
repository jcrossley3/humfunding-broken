// Compiled by ClojureScript 1.8.40 {}
goog.provide('humfunding.leave');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('secretary.core');
goog.require('ajax.core');
goog.require('humfunding.shared');
if(typeof humfunding.leave.requests !== 'undefined'){
} else {
humfunding.leave.requests = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
humfunding.leave.last_sorted_by = reagent.core.atom.call(null,null);
humfunding.leave.table_busy = reagent.core.atom.call(null,null);
if(typeof humfunding.leave.request_title !== 'undefined'){
} else {
humfunding.leave.request_title = reagent.core.atom.call(null,null);
}
if(typeof humfunding.leave.selected_request_option !== 'undefined'){
} else {
humfunding.leave.selected_request_option = reagent.core.atom.call(null,(0));
}
humfunding.leave.go_to_leave_page = (function humfunding$leave$go_to_leave_page(e){
var p = secretary.core.get_config.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var ls = document.getElementById("leave-selector");
var val = ls.value;
var url = [cljs.core.str(p),cljs.core.str("/leave/"),cljs.core.str(val)].join('');
var si = ls.selectedIndex;
var content = (ls.options[si]).text;
cljs.core.reset_BANG_.call(null,humfunding.leave.request_title,content);

cljs.core.reset_BANG_.call(null,humfunding.leave.selected_request_option,si);

return document.location.href = url;
});
/**
 * Leave Request Selector
 */
humfunding.leave.leave_request_dropdown = (function humfunding$leave$leave_request_dropdown(){
var option_map = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["all","All"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dean","College"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ane","Asian & Near Eastern"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cal","Comparative Arts & Letters"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["english","English"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["frenital","French & Italian"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["germruss","German & Russian"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["linguistics","Linguistics & English Language"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["philosophy","Philosophy"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["spanport","Spanish & Portuguese"], null)], null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select#leave-selector","select#leave-selector",-142845563),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),humfunding.leave.go_to_leave_page], null)], null),(function (){var iter__30212__auto__ = ((function (option_map){
return (function humfunding$leave$leave_request_dropdown_$_iter__33392(s__33393){
return (new cljs.core.LazySeq(null,((function (option_map){
return (function (){
var s__33393__$1 = s__33393;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33393__$1);
if(temp__4657__auto__){
var s__33393__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33393__$2)){
var c__30210__auto__ = cljs.core.chunk_first.call(null,s__33393__$2);
var size__30211__auto__ = cljs.core.count.call(null,c__30210__auto__);
var b__33395 = cljs.core.chunk_buffer.call(null,size__30211__auto__);
if((function (){var i__33394 = (0);
while(true){
if((i__33394 < size__30211__auto__)){
var vec__33398 = cljs.core._nth.call(null,c__30210__auto__,i__33394);
var k = cljs.core.nth.call(null,vec__33398,(0),null);
var n = cljs.core.nth.call(null,vec__33398,(1),null);
cljs.core.chunk_append.call(null,b__33395,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),k], null),n], null));

var G__33400 = (i__33394 + (1));
i__33394 = G__33400;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33395),humfunding$leave$leave_request_dropdown_$_iter__33392.call(null,cljs.core.chunk_rest.call(null,s__33393__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33395),null);
}
} else {
var vec__33399 = cljs.core.first.call(null,s__33393__$2);
var k = cljs.core.nth.call(null,vec__33399,(0),null);
var n = cljs.core.nth.call(null,vec__33399,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),k], null),n], null),humfunding$leave$leave_request_dropdown_$_iter__33392.call(null,cljs.core.rest.call(null,s__33393__$2)));
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
return iter__30212__auto__.call(null,option_map);
})());
});
humfunding.leave.download_script = (function humfunding$leave$download_script(var_args){
var args__30508__auto__ = [];
var len__30501__auto___33403 = arguments.length;
var i__30502__auto___33404 = (0);
while(true){
if((i__30502__auto___33404 < len__30501__auto___33403)){
args__30508__auto__.push((arguments[i__30502__auto___33404]));

var G__33405 = (i__30502__auto___33404 + (1));
i__30502__auto___33404 = G__33405;
continue;
} else {
}
break;
}

var argseq__30509__auto__ = ((((1) < args__30508__auto__.length))?(new cljs.core.IndexedSeq(args__30508__auto__.slice((1)),(0),null)):null);
return humfunding.leave.download_script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30509__auto__);
});

humfunding.leave.download_script.cljs$core$IFn$_invoke$arity$variadic = (function (element_id,refresh){
var uri = [cljs.core.str("/pdf/"),cljs.core.str(element_id)].join('');
var refresh_uri = [cljs.core.str(uri),cljs.core.str("?refresh=true")].join('');
return window.location = ((cljs.core.not.call(null,refresh))?uri:refresh_uri);
});

humfunding.leave.download_script.cljs$lang$maxFixedArity = (1);

humfunding.leave.download_script.cljs$lang$applyTo = (function (seq33401){
var G__33402 = cljs.core.first.call(null,seq33401);
var seq33401__$1 = cljs.core.next.call(null,seq33401);
return humfunding.leave.download_script.cljs$core$IFn$_invoke$arity$variadic(G__33402,seq33401__$1);
});
humfunding.leave.download_link = (function humfunding$leave$download_link(submission_id){
var url = [cljs.core.str("/pdf/"),cljs.core.str(submission_id)].join('');
var label = "PDF";
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pdf-links","span.pdf-links",-1800785936),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (url,label){
return (function (){
return humfunding.leave.download_script.call(null,submission_id);
});})(url,label))
], null),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (url,label){
return (function (){
return humfunding.leave.download_script.call(null,submission_id,new cljs.core.Keyword(null,"refresh","refresh",1947415525));
});})(url,label))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-refresh","i.fa.fa-refresh",898303444)], null)], null)], null);
});
humfunding.leave.generate_leave_row = (function humfunding$leave$generate_leave_row(r){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell.date","div.cell.date",1072679919),r.call(null,new cljs.core.Keyword(null,"request-date","request-date",-648024800))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell.name","div.cell.name",648997416),[cljs.core.str(r.call(null,new cljs.core.Keyword(null,"surname","surname",1407918027))),cljs.core.str(", "),cljs.core.str(r.call(null,new cljs.core.Keyword(null,"given-name","given-name",208174286)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell.title","div.cell.title",-1039839399),r.call(null,new cljs.core.Keyword(null,"project-title","project-title",1994600693))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell.leave-date","div.cell.leave-date",88857047),r.call(null,new cljs.core.Keyword(null,"project-start-date","project-start-date",605926941))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell.pdf","div.cell.pdf",-744562391),humfunding.leave.download_link.call(null,r.call(null,new cljs.core.Keyword(null,"submission-id","submission-id",-1311702310)))], null)], null);
});
humfunding.leave.sort_request = (function humfunding$leave$sort_request(item){
var sort_key = cljs.core.keyword.call(null,item.target.id);
if(cljs.core._EQ_.call(null,sort_key,cljs.core.deref.call(null,humfunding.leave.last_sorted_by))){
console.log([cljs.core.str("Reversing on "),cljs.core.str(sort_key)].join(''));

cljs.core.swap_BANG_.call(null,humfunding.leave.requests,cljs.core.reverse);

return cljs.core.reset_BANG_.call(null,humfunding.leave.last_sorted_by,null);
} else {
console.log([cljs.core.str("Sorting on "),cljs.core.str(sort_key)].join(''));

cljs.core.swap_BANG_.call(null,humfunding.leave.requests,((function (sort_key){
return (function (p1__33406_SHARP_){
return cljs.core.sort_by.call(null,sort_key,p1__33406_SHARP_);
});})(sort_key))
);

return cljs.core.reset_BANG_.call(null,humfunding.leave.last_sorted_by,sort_key);
}
});
humfunding.leave.header_link = (function humfunding$leave$header_link(key_name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),key_name,new cljs.core.Keyword(null,"on-click","on-click",1632826543),humfunding.leave.sort_request], null),text], null);
});
humfunding.leave.format_requests = (function humfunding$leave$format_requests(){
if(!(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,humfunding.leave.requests)))){
var table_skeleton = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table.col-md-12","div.table.col-md-12",914534556),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.headers","div.row.headers",1905678837),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell.date","div.cell.date",1072679919),humfunding.leave.header_link.call(null,"request-date","Submission Date")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell.name","div.cell.name",648997416),humfunding.leave.header_link.call(null,"surname","Applicant")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell.title","div.cell.title",-1039839399),humfunding.leave.header_link.call(null,"project-title","Project Title")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell.leave-date","div.cell.leave-date",88857047),humfunding.leave.header_link.call(null,"project-start-date","Project Start")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell.pdf","div.cell.pdf",-744562391),"Form"], null)], null)], null);
return cljs.core.into.call(null,table_skeleton,(function (){var iter__30212__auto__ = ((function (table_skeleton){
return (function humfunding$leave$format_requests_$_iter__33411(s__33412){
return (new cljs.core.LazySeq(null,((function (table_skeleton){
return (function (){
var s__33412__$1 = s__33412;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33412__$1);
if(temp__4657__auto__){
var s__33412__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33412__$2)){
var c__30210__auto__ = cljs.core.chunk_first.call(null,s__33412__$2);
var size__30211__auto__ = cljs.core.count.call(null,c__30210__auto__);
var b__33414 = cljs.core.chunk_buffer.call(null,size__30211__auto__);
if((function (){var i__33413 = (0);
while(true){
if((i__33413 < size__30211__auto__)){
var r = cljs.core._nth.call(null,c__30210__auto__,i__33413);
cljs.core.chunk_append.call(null,b__33414,humfunding.leave.generate_leave_row.call(null,r));

var G__33415 = (i__33413 + (1));
i__33413 = G__33415;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33414),humfunding$leave$format_requests_$_iter__33411.call(null,cljs.core.chunk_rest.call(null,s__33412__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33414),null);
}
} else {
var r = cljs.core.first.call(null,s__33412__$2);
return cljs.core.cons.call(null,humfunding.leave.generate_leave_row.call(null,r),humfunding$leave$format_requests_$_iter__33411.call(null,cljs.core.rest.call(null,s__33412__$2)));
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
return iter__30212__auto__.call(null,cljs.core.deref.call(null,humfunding.leave.requests));
})());
} else {
return console.log("Requests is empty");
}
});
humfunding.leave.get_requests = (function humfunding$leave$get_requests(var_args){
var args__30508__auto__ = [];
var len__30501__auto___33421 = arguments.length;
var i__30502__auto___33422 = (0);
while(true){
if((i__30502__auto___33422 < len__30501__auto___33421)){
args__30508__auto__.push((arguments[i__30502__auto___33422]));

var G__33423 = (i__30502__auto___33422 + (1));
i__30502__auto___33422 = G__33423;
continue;
} else {
}
break;
}

var argseq__30509__auto__ = ((((1) < args__30508__auto__.length))?(new cljs.core.IndexedSeq(args__30508__auto__.slice((1)),(0),null)):null);
return humfunding.leave.get_requests.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30509__auto__);
});

humfunding.leave.get_requests.cljs$core$IFn$_invoke$arity$variadic = (function (category,p__33419){
var vec__33420 = p__33419;
var force_refresh = cljs.core.nth.call(null,vec__33420,(0),null);
if(cljs.core.truth_(force_refresh)){
cljs.core.reset_BANG_.call(null,humfunding.leave.requests,null);
} else {
}

cljs.core.reset_BANG_.call(null,humfunding.leave.table_busy,humfunding.shared.busy_indicator.call(null,(8)));

return ajax.core.POST.call(null,[cljs.core.str("/leave/"),cljs.core.str(category)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__33420,force_refresh){
return (function (p1__33416_SHARP_){
cljs.core.reset_BANG_.call(null,humfunding.leave.requests,p1__33416_SHARP_);

return cljs.core.reset_BANG_.call(null,humfunding.leave.table_busy,null);
});})(vec__33420,force_refresh))
], null));
});

humfunding.leave.get_requests.cljs$lang$maxFixedArity = (1);

humfunding.leave.get_requests.cljs$lang$applyTo = (function (seq33417){
var G__33418 = cljs.core.first.call(null,seq33417);
var seq33417__$1 = cljs.core.next.call(null,seq33417);
return humfunding.leave.get_requests.cljs$core$IFn$_invoke$arity$variadic(G__33418,seq33417__$1);
});
humfunding.leave.leave_page = (function humfunding$leave$leave_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jumbotron","div.jumbotron",-1632448673),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),[cljs.core.str(cljs.core.deref.call(null,humfunding.leave.request_title)),cljs.core.str(" Professional Leave Requests")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Requests submitted at the college-level for professional leave."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12.leave-requests","div.col-md-12.leave-requests",1153385909),humfunding.leave.leave_request_dropdown.call(null),humfunding.leave.format_requests.call(null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-busy","div.table-busy",-172640415),cljs.core.deref.call(null,humfunding.leave.table_busy)], null)], null);
});

//# sourceMappingURL=leave.js.map