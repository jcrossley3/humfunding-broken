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
humfunding.leave.generate_leave_row = (function humfunding$leave$generate_leave_row(r){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell.date","div.cell.date",1072679919),r.call(null,new cljs.core.Keyword(null,"request-date","request-date",-648024800))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell.name","div.cell.name",648997416),[cljs.core.str(r.call(null,new cljs.core.Keyword(null,"surname","surname",1407918027))),cljs.core.str(", "),cljs.core.str(r.call(null,new cljs.core.Keyword(null,"given-name","given-name",208174286)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell.title","div.cell.title",-1039839399),r.call(null,new cljs.core.Keyword(null,"project-title","project-title",1994600693))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell.leave-date","div.cell.leave-date",88857047),r.call(null,new cljs.core.Keyword(null,"project-start-date","project-start-date",605926941))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell.pdf","div.cell.pdf",-744562391),"PDF TODO"], null)], null);
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
return (function (p1__34758_SHARP_){
return cljs.core.sort_by.call(null,sort_key,p1__34758_SHARP_);
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
var table_skeleton = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table.col-md-12","div.table.col-md-12",914534556),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.headers","div.row.headers",1905678837),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell.date","div.cell.date",1072679919),humfunding.leave.header_link.call(null,"request-date","Submission Date")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell.name","div.cell.name",648997416),humfunding.leave.header_link.call(null,"surname","Applicant")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell.title","div.cell.title",-1039839399),humfunding.leave.header_link.call(null,"project-title","Project Title")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell.leave-date","div.cell.leave-date",88857047),humfunding.leave.header_link.call(null,"project-start-date","Project Start")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cell.pdf","div.cell.pdf",-744562391),"Download"], null)], null)], null);
return cljs.core.into.call(null,table_skeleton,(function (){var iter__30119__auto__ = ((function (table_skeleton){
return (function humfunding$leave$format_requests_$_iter__34763(s__34764){
return (new cljs.core.LazySeq(null,((function (table_skeleton){
return (function (){
var s__34764__$1 = s__34764;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34764__$1);
if(temp__4657__auto__){
var s__34764__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34764__$2)){
var c__30117__auto__ = cljs.core.chunk_first.call(null,s__34764__$2);
var size__30118__auto__ = cljs.core.count.call(null,c__30117__auto__);
var b__34766 = cljs.core.chunk_buffer.call(null,size__30118__auto__);
if((function (){var i__34765 = (0);
while(true){
if((i__34765 < size__30118__auto__)){
var r = cljs.core._nth.call(null,c__30117__auto__,i__34765);
cljs.core.chunk_append.call(null,b__34766,humfunding.leave.generate_leave_row.call(null,r));

var G__34767 = (i__34765 + (1));
i__34765 = G__34767;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34766),humfunding$leave$format_requests_$_iter__34763.call(null,cljs.core.chunk_rest.call(null,s__34764__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34766),null);
}
} else {
var r = cljs.core.first.call(null,s__34764__$2);
return cljs.core.cons.call(null,humfunding.leave.generate_leave_row.call(null,r),humfunding$leave$format_requests_$_iter__34763.call(null,cljs.core.rest.call(null,s__34764__$2)));
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
return iter__30119__auto__.call(null,cljs.core.deref.call(null,humfunding.leave.requests));
})());
} else {
return console.log("Requests is empty");
}
});
humfunding.leave.get_requests = (function humfunding$leave$get_requests(var_args){
var args__30415__auto__ = [];
var len__30408__auto___34773 = arguments.length;
var i__30409__auto___34774 = (0);
while(true){
if((i__30409__auto___34774 < len__30408__auto___34773)){
args__30415__auto__.push((arguments[i__30409__auto___34774]));

var G__34775 = (i__30409__auto___34774 + (1));
i__30409__auto___34774 = G__34775;
continue;
} else {
}
break;
}

var argseq__30416__auto__ = ((((1) < args__30415__auto__.length))?(new cljs.core.IndexedSeq(args__30415__auto__.slice((1)),(0),null)):null);
return humfunding.leave.get_requests.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30416__auto__);
});

humfunding.leave.get_requests.cljs$core$IFn$_invoke$arity$variadic = (function (category,p__34771){
var vec__34772 = p__34771;
var force_refresh = cljs.core.nth.call(null,vec__34772,(0),null);
return ajax.core.POST.call(null,[cljs.core.str("/leave/"),cljs.core.str(category)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__34772,force_refresh){
return (function (p1__34768_SHARP_){
return cljs.core.reset_BANG_.call(null,humfunding.leave.requests,p1__34768_SHARP_);
});})(vec__34772,force_refresh))
], null));
});

humfunding.leave.get_requests.cljs$lang$maxFixedArity = (1);

humfunding.leave.get_requests.cljs$lang$applyTo = (function (seq34769){
var G__34770 = cljs.core.first.call(null,seq34769);
var seq34769__$1 = cljs.core.next.call(null,seq34769);
return humfunding.leave.get_requests.cljs$core$IFn$_invoke$arity$variadic(G__34770,seq34769__$1);
});
humfunding.leave.leave_page = (function humfunding$leave$leave_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jumbotron","div.jumbotron",-1632448673),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"College Professional Leave Requests"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Requests submitted at the college-level for professional leave."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12.leave-requests","div.col-md-12.leave-requests",1153385909),"Right now only College Leave submissions are available.",humfunding.leave.format_requests.call(null)], null)], null)], null);
});

//# sourceMappingURL=leave.js.map