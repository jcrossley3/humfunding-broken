// Compiled by ClojureScript 1.8.40 {}
goog.provide('humfunding.leave');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('ajax.core');
goog.require('humfunding.shared');
if(typeof humfunding.leave.requests !== 'undefined'){
} else {
humfunding.leave.requests = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
humfunding.leave.last_sorted_by = reagent.core.atom.call(null,null);
humfunding.leave.table_busy = reagent.core.atom.call(null,null);
humfunding.leave.download_script = (function humfunding$leave$download_script(element_id){
var uri = [cljs.core.str("/pdf/"),cljs.core.str(element_id)].join('');
return window.location = uri;
});
humfunding.leave.download_link = (function humfunding$leave$download_link(submission_id){
var url = [cljs.core.str("/pdf/"),cljs.core.str(submission_id)].join('');
var label = "PDF";
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (url,label){
return (function (){
return humfunding.leave.download_script.call(null,submission_id);
});})(url,label))
], null),label], null);
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
return (function (p1__32630_SHARP_){
return cljs.core.sort_by.call(null,sort_key,p1__32630_SHARP_);
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
return cljs.core.into.call(null,table_skeleton,(function (){var iter__30211__auto__ = ((function (table_skeleton){
return (function humfunding$leave$format_requests_$_iter__32635(s__32636){
return (new cljs.core.LazySeq(null,((function (table_skeleton){
return (function (){
var s__32636__$1 = s__32636;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32636__$1);
if(temp__4657__auto__){
var s__32636__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32636__$2)){
var c__30209__auto__ = cljs.core.chunk_first.call(null,s__32636__$2);
var size__30210__auto__ = cljs.core.count.call(null,c__30209__auto__);
var b__32638 = cljs.core.chunk_buffer.call(null,size__30210__auto__);
if((function (){var i__32637 = (0);
while(true){
if((i__32637 < size__30210__auto__)){
var r = cljs.core._nth.call(null,c__30209__auto__,i__32637);
cljs.core.chunk_append.call(null,b__32638,humfunding.leave.generate_leave_row.call(null,r));

var G__32639 = (i__32637 + (1));
i__32637 = G__32639;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32638),humfunding$leave$format_requests_$_iter__32635.call(null,cljs.core.chunk_rest.call(null,s__32636__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32638),null);
}
} else {
var r = cljs.core.first.call(null,s__32636__$2);
return cljs.core.cons.call(null,humfunding.leave.generate_leave_row.call(null,r),humfunding$leave$format_requests_$_iter__32635.call(null,cljs.core.rest.call(null,s__32636__$2)));
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
return iter__30211__auto__.call(null,cljs.core.deref.call(null,humfunding.leave.requests));
})());
} else {
return console.log("Requests is empty");
}
});
humfunding.leave.get_requests = (function humfunding$leave$get_requests(var_args){
var args__30507__auto__ = [];
var len__30500__auto___32645 = arguments.length;
var i__30501__auto___32646 = (0);
while(true){
if((i__30501__auto___32646 < len__30500__auto___32645)){
args__30507__auto__.push((arguments[i__30501__auto___32646]));

var G__32647 = (i__30501__auto___32646 + (1));
i__30501__auto___32646 = G__32647;
continue;
} else {
}
break;
}

var argseq__30508__auto__ = ((((1) < args__30507__auto__.length))?(new cljs.core.IndexedSeq(args__30507__auto__.slice((1)),(0),null)):null);
return humfunding.leave.get_requests.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30508__auto__);
});

humfunding.leave.get_requests.cljs$core$IFn$_invoke$arity$variadic = (function (category,p__32643){
var vec__32644 = p__32643;
var force_refresh = cljs.core.nth.call(null,vec__32644,(0),null);
cljs.core.reset_BANG_.call(null,humfunding.leave.table_busy,humfunding.shared.busy_indicator.call(null,(8)));

return ajax.core.POST.call(null,[cljs.core.str("/leave/"),cljs.core.str(category)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__32644,force_refresh){
return (function (p1__32640_SHARP_){
cljs.core.reset_BANG_.call(null,humfunding.leave.requests,p1__32640_SHARP_);

return cljs.core.reset_BANG_.call(null,humfunding.leave.table_busy,null);
});})(vec__32644,force_refresh))
], null));
});

humfunding.leave.get_requests.cljs$lang$maxFixedArity = (1);

humfunding.leave.get_requests.cljs$lang$applyTo = (function (seq32641){
var G__32642 = cljs.core.first.call(null,seq32641);
var seq32641__$1 = cljs.core.next.call(null,seq32641);
return humfunding.leave.get_requests.cljs$core$IFn$_invoke$arity$variadic(G__32642,seq32641__$1);
});
humfunding.leave.leave_page = (function humfunding$leave$leave_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jumbotron","div.jumbotron",-1632448673),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"College Professional Leave Requests"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Requests submitted at the college-level for professional leave."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12.leave-requests","div.col-md-12.leave-requests",1153385909),"Right now only College Leave submissions are available.",humfunding.leave.format_requests.call(null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-busy","div.table-busy",-172640415),cljs.core.deref.call(null,humfunding.leave.table_busy)], null)], null);
});

//# sourceMappingURL=leave.js.map