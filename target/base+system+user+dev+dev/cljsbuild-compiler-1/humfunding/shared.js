// Compiled by ClojureScript 1.8.40 {}
goog.provide('humfunding.shared');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
humfunding.shared.hum_link = (function humfunding$shared$hum_link(target,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),target], null),content], null);
});
humfunding.shared.nav_link = (function humfunding$shared$nav_link(uri,title,page,collapsed_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,page,reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397))))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),uri,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,collapsed_QMARK_,true);
})], null),title], null)], null);
});
humfunding.shared.navbar = (function humfunding$shared$navbar(){
var collapsed_QMARK_ = reagent.core.atom.call(null,true);
return ((function (collapsed_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar.navbar-light.bg-faded","nav.navbar.navbar-light.bg-faded",244269307),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.navbar-toggler.hidden-sm-up","button.navbar-toggler.hidden-sm-up",-398271905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (collapsed_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,collapsed_QMARK_,cljs.core.not);
});})(collapsed_QMARK_))
], null),"\u2630"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.collapse.navbar-toggleable-xs","div.collapse.navbar-toggleable-xs",-474131623),(cljs.core.truth_(cljs.core.deref.call(null,collapsed_QMARK_))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"in"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",691442118),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"BYU Humanities+ Funding"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav","ul.nav.navbar-nav",1805559761),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [humfunding.shared.nav_link,"#/","Home",new cljs.core.Keyword(null,"home","home",-74557309),collapsed_QMARK_], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [humfunding.shared.nav_link,"#/iif","Internships",new cljs.core.Keyword(null,"internship","internship",-692945875),collapsed_QMARK_], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [humfunding.shared.nav_link,"#/sa","Study Abroad",new cljs.core.Keyword(null,"study-abroad","study-abroad",-1463065380),collapsed_QMARK_], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [humfunding.shared.nav_link,"#/el","Experiential Learning",new cljs.core.Keyword(null,"experiential","experiential",1860327333),collapsed_QMARK_], null)], null)], null)], null);
});
;})(collapsed_QMARK_))
});
humfunding.shared.make_list = (function humfunding$shared$make_list(var_args){
var args__30676__auto__ = [];
var len__30669__auto___38441 = arguments.length;
var i__30670__auto___38442 = (0);
while(true){
if((i__30670__auto___38442 < len__30669__auto___38441)){
args__30676__auto__.push((arguments[i__30670__auto___38442]));

var G__38443 = (i__30670__auto___38442 + (1));
i__30670__auto___38442 = G__38443;
continue;
} else {
}
break;
}

var argseq__30677__auto__ = ((((1) < args__30676__auto__.length))?(new cljs.core.IndexedSeq(args__30676__auto__.slice((1)),(0),null)):null);
return humfunding.shared.make_list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30677__auto__);
});

humfunding.shared.make_list.cljs$core$IFn$_invoke$arity$variadic = (function (type,items){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null),(function (){var iter__30380__auto__ = (function humfunding$shared$iter__38437(s__38438){
return (new cljs.core.LazySeq(null,(function (){
var s__38438__$1 = s__38438;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38438__$1);
if(temp__4657__auto__){
var s__38438__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38438__$2)){
var c__30378__auto__ = cljs.core.chunk_first.call(null,s__38438__$2);
var size__30379__auto__ = cljs.core.count.call(null,c__30378__auto__);
var b__38440 = cljs.core.chunk_buffer.call(null,size__30379__auto__);
if((function (){var i__38439 = (0);
while(true){
if((i__38439 < size__30379__auto__)){
var i = cljs.core._nth.call(null,c__30378__auto__,i__38439);
cljs.core.chunk_append.call(null,b__38440,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),i], null));

var G__38444 = (i__38439 + (1));
i__38439 = G__38444;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38440),humfunding$shared$iter__38437.call(null,cljs.core.chunk_rest.call(null,s__38438__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38440),null);
}
} else {
var i = cljs.core.first.call(null,s__38438__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),i], null),humfunding$shared$iter__38437.call(null,cljs.core.rest.call(null,s__38438__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30380__auto__.call(null,items);
})());
});

humfunding.shared.make_list.cljs$lang$maxFixedArity = (1);

humfunding.shared.make_list.cljs$lang$applyTo = (function (seq38435){
var G__38436 = cljs.core.first.call(null,seq38435);
var seq38435__$1 = cljs.core.next.call(null,seq38435);
return humfunding.shared.make_list.cljs$core$IFn$_invoke$arity$variadic(G__38436,seq38435__$1);
});
/**
 * The `sign in' link that triggers & populates the initial form
 */
humfunding.shared.make_sign_in = (function humfunding$shared$make_sign_in(app_type){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary.signin","a.btn.btn-primary.signin",-643917282),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Sign In"], null);
});
