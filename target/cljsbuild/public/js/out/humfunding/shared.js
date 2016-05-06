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
var args__30507__auto__ = [];
var len__30500__auto___32361 = arguments.length;
var i__30501__auto___32362 = (0);
while(true){
if((i__30501__auto___32362 < len__30500__auto___32361)){
args__30507__auto__.push((arguments[i__30501__auto___32362]));

var G__32363 = (i__30501__auto___32362 + (1));
i__30501__auto___32362 = G__32363;
continue;
} else {
}
break;
}

var argseq__30508__auto__ = ((((1) < args__30507__auto__.length))?(new cljs.core.IndexedSeq(args__30507__auto__.slice((1)),(0),null)):null);
return humfunding.shared.make_list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30508__auto__);
});

humfunding.shared.make_list.cljs$core$IFn$_invoke$arity$variadic = (function (type,items){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null),(function (){var iter__30211__auto__ = (function humfunding$shared$iter__32357(s__32358){
return (new cljs.core.LazySeq(null,(function (){
var s__32358__$1 = s__32358;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32358__$1);
if(temp__4657__auto__){
var s__32358__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32358__$2)){
var c__30209__auto__ = cljs.core.chunk_first.call(null,s__32358__$2);
var size__30210__auto__ = cljs.core.count.call(null,c__30209__auto__);
var b__32360 = cljs.core.chunk_buffer.call(null,size__30210__auto__);
if((function (){var i__32359 = (0);
while(true){
if((i__32359 < size__30210__auto__)){
var i = cljs.core._nth.call(null,c__30209__auto__,i__32359);
cljs.core.chunk_append.call(null,b__32360,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),i], null));

var G__32364 = (i__32359 + (1));
i__32359 = G__32364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32360),humfunding$shared$iter__32357.call(null,cljs.core.chunk_rest.call(null,s__32358__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32360),null);
}
} else {
var i = cljs.core.first.call(null,s__32358__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),i], null),humfunding$shared$iter__32357.call(null,cljs.core.rest.call(null,s__32358__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30211__auto__.call(null,items);
})());
});

humfunding.shared.make_list.cljs$lang$maxFixedArity = (1);

humfunding.shared.make_list.cljs$lang$applyTo = (function (seq32355){
var G__32356 = cljs.core.first.call(null,seq32355);
var seq32355__$1 = cljs.core.next.call(null,seq32355);
return humfunding.shared.make_list.cljs$core$IFn$_invoke$arity$variadic(G__32356,seq32355__$1);
});
/**
 * The `sign in' link that triggers & populates the initial form
 */
humfunding.shared.make_sign_in = (function humfunding$shared$make_sign_in(app_type){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary.signin","a.btn.btn-primary.signin",-643917282),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Sign In"], null);
});
/**
 * Make a css-animated busy indicator
 */
humfunding.shared.busy_indicator = (function humfunding$shared$busy_indicator(num_circles){
var circle_class = "f_circleG";
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#floatingCirclesG","div#floatingCirclesG",-2116600059)], null),(function (){var iter__30211__auto__ = ((function (circle_class){
return (function humfunding$shared$busy_indicator_$_iter__32369(s__32370){
return (new cljs.core.LazySeq(null,((function (circle_class){
return (function (){
var s__32370__$1 = s__32370;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32370__$1);
if(temp__4657__auto__){
var s__32370__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32370__$2)){
var c__30209__auto__ = cljs.core.chunk_first.call(null,s__32370__$2);
var size__30210__auto__ = cljs.core.count.call(null,c__30209__auto__);
var b__32372 = cljs.core.chunk_buffer.call(null,size__30210__auto__);
if((function (){var i__32371 = (0);
while(true){
if((i__32371 < size__30210__auto__)){
var n = cljs.core._nth.call(null,c__30209__auto__,i__32371);
cljs.core.chunk_append.call(null,b__32372,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),circle_class,new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("frotateG_"),cljs.core.str(n)].join('')], null)], null));

var G__32373 = (i__32371 + (1));
i__32371 = G__32373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32372),humfunding$shared$busy_indicator_$_iter__32369.call(null,cljs.core.chunk_rest.call(null,s__32370__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32372),null);
}
} else {
var n = cljs.core.first.call(null,s__32370__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),circle_class,new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("frotateG_"),cljs.core.str(n)].join('')], null)], null),humfunding$shared$busy_indicator_$_iter__32369.call(null,cljs.core.rest.call(null,s__32370__$2)));
}
} else {
return null;
}
break;
}
});})(circle_class))
,null,null));
});})(circle_class))
;
return iter__30211__auto__.call(null,cljs.core.range.call(null,num_circles));
})());
});

//# sourceMappingURL=shared.js.map