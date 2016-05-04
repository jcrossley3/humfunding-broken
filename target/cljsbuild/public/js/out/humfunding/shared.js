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
], null),"\u2630"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.collapse.navbar-toggleable-xs","div.collapse.navbar-toggleable-xs",-474131623),(cljs.core.truth_(cljs.core.deref.call(null,collapsed_QMARK_))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"in"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",691442118),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"BYU Humanities Funding"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav","ul.nav.navbar-nav",1805559761),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [humfunding.shared.nav_link,"#/","Home",new cljs.core.Keyword(null,"home","home",-74557309),collapsed_QMARK_], null)], null)], null)], null);
});
;})(collapsed_QMARK_))
});
humfunding.shared.make_list = (function humfunding$shared$make_list(var_args){
var args__30415__auto__ = [];
var len__30408__auto___32101 = arguments.length;
var i__30409__auto___32102 = (0);
while(true){
if((i__30409__auto___32102 < len__30408__auto___32101)){
args__30415__auto__.push((arguments[i__30409__auto___32102]));

var G__32103 = (i__30409__auto___32102 + (1));
i__30409__auto___32102 = G__32103;
continue;
} else {
}
break;
}

var argseq__30416__auto__ = ((((1) < args__30415__auto__.length))?(new cljs.core.IndexedSeq(args__30415__auto__.slice((1)),(0),null)):null);
return humfunding.shared.make_list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30416__auto__);
});

humfunding.shared.make_list.cljs$core$IFn$_invoke$arity$variadic = (function (type,items){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null),(function (){var iter__30119__auto__ = (function humfunding$shared$iter__32097(s__32098){
return (new cljs.core.LazySeq(null,(function (){
var s__32098__$1 = s__32098;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32098__$1);
if(temp__4657__auto__){
var s__32098__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32098__$2)){
var c__30117__auto__ = cljs.core.chunk_first.call(null,s__32098__$2);
var size__30118__auto__ = cljs.core.count.call(null,c__30117__auto__);
var b__32100 = cljs.core.chunk_buffer.call(null,size__30118__auto__);
if((function (){var i__32099 = (0);
while(true){
if((i__32099 < size__30118__auto__)){
var i = cljs.core._nth.call(null,c__30117__auto__,i__32099);
cljs.core.chunk_append.call(null,b__32100,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),i], null));

var G__32104 = (i__32099 + (1));
i__32099 = G__32104;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32100),humfunding$shared$iter__32097.call(null,cljs.core.chunk_rest.call(null,s__32098__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32100),null);
}
} else {
var i = cljs.core.first.call(null,s__32098__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),i], null),humfunding$shared$iter__32097.call(null,cljs.core.rest.call(null,s__32098__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30119__auto__.call(null,items);
})());
});

humfunding.shared.make_list.cljs$lang$maxFixedArity = (1);

humfunding.shared.make_list.cljs$lang$applyTo = (function (seq32095){
var G__32096 = cljs.core.first.call(null,seq32095);
var seq32095__$1 = cljs.core.next.call(null,seq32095);
return humfunding.shared.make_list.cljs$core$IFn$_invoke$arity$variadic(G__32096,seq32095__$1);
});
/**
 * The `sign in' link that triggers & populates the initial form
 */
humfunding.shared.make_sign_in = (function humfunding$shared$make_sign_in(app_type){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary.signin","a.btn.btn-primary.signin",-643917282),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Sign In"], null);
});

//# sourceMappingURL=shared.js.map