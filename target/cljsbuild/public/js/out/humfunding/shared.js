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
], null),"\u2630"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.collapse.navbar-toggleable-xs","div.collapse.navbar-toggleable-xs",-474131623),(cljs.core.truth_(cljs.core.deref.call(null,collapsed_QMARK_))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"in"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",691442118),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://humanities.byu.edu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.pull-left","img.pull-left",-515684467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/humanities-logo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"BYU Humanities Funding"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav","ul.nav.navbar-nav",1805559761),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [humfunding.shared.nav_link,"#/","Home",new cljs.core.Keyword(null,"home","home",-74557309),collapsed_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item.registered","li.nav-item.registered",731787673),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.nav-link","span.nav-link",-1757986208),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://cas.byu.edu/logout"], null),"Logged in as"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.username","span.username",1869100274),window.USERNAME], null)], null)], null)], null)], null);
});
;})(collapsed_QMARK_))
});
humfunding.shared.make_list = (function humfunding$shared$make_list(var_args){
var args__30527__auto__ = [];
var len__30520__auto___32231 = arguments.length;
var i__30521__auto___32232 = (0);
while(true){
if((i__30521__auto___32232 < len__30520__auto___32231)){
args__30527__auto__.push((arguments[i__30521__auto___32232]));

var G__32233 = (i__30521__auto___32232 + (1));
i__30521__auto___32232 = G__32233;
continue;
} else {
}
break;
}

var argseq__30528__auto__ = ((((1) < args__30527__auto__.length))?(new cljs.core.IndexedSeq(args__30527__auto__.slice((1)),(0),null)):null);
return humfunding.shared.make_list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30528__auto__);
});

humfunding.shared.make_list.cljs$core$IFn$_invoke$arity$variadic = (function (type,items){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null),(function (){var iter__30231__auto__ = (function humfunding$shared$iter__32227(s__32228){
return (new cljs.core.LazySeq(null,(function (){
var s__32228__$1 = s__32228;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32228__$1);
if(temp__4657__auto__){
var s__32228__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32228__$2)){
var c__30229__auto__ = cljs.core.chunk_first.call(null,s__32228__$2);
var size__30230__auto__ = cljs.core.count.call(null,c__30229__auto__);
var b__32230 = cljs.core.chunk_buffer.call(null,size__30230__auto__);
if((function (){var i__32229 = (0);
while(true){
if((i__32229 < size__30230__auto__)){
var i = cljs.core._nth.call(null,c__30229__auto__,i__32229);
cljs.core.chunk_append.call(null,b__32230,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),i], null));

var G__32234 = (i__32229 + (1));
i__32229 = G__32234;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32230),humfunding$shared$iter__32227.call(null,cljs.core.chunk_rest.call(null,s__32228__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32230),null);
}
} else {
var i = cljs.core.first.call(null,s__32228__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),i], null),humfunding$shared$iter__32227.call(null,cljs.core.rest.call(null,s__32228__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30231__auto__.call(null,items);
})());
});

humfunding.shared.make_list.cljs$lang$maxFixedArity = (1);

humfunding.shared.make_list.cljs$lang$applyTo = (function (seq32225){
var G__32226 = cljs.core.first.call(null,seq32225);
var seq32225__$1 = cljs.core.next.call(null,seq32225);
return humfunding.shared.make_list.cljs$core$IFn$_invoke$arity$variadic(G__32226,seq32225__$1);
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
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#floatingCirclesG","div#floatingCirclesG",-2116600059)], null),(function (){var iter__30231__auto__ = ((function (circle_class){
return (function humfunding$shared$busy_indicator_$_iter__32239(s__32240){
return (new cljs.core.LazySeq(null,((function (circle_class){
return (function (){
var s__32240__$1 = s__32240;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32240__$1);
if(temp__4657__auto__){
var s__32240__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32240__$2)){
var c__30229__auto__ = cljs.core.chunk_first.call(null,s__32240__$2);
var size__30230__auto__ = cljs.core.count.call(null,c__30229__auto__);
var b__32242 = cljs.core.chunk_buffer.call(null,size__30230__auto__);
if((function (){var i__32241 = (0);
while(true){
if((i__32241 < size__30230__auto__)){
var n = cljs.core._nth.call(null,c__30229__auto__,i__32241);
cljs.core.chunk_append.call(null,b__32242,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),circle_class,new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("frotateG_"),cljs.core.str(n)].join('')], null)], null));

var G__32243 = (i__32241 + (1));
i__32241 = G__32243;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32242),humfunding$shared$busy_indicator_$_iter__32239.call(null,cljs.core.chunk_rest.call(null,s__32240__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32242),null);
}
} else {
var n = cljs.core.first.call(null,s__32240__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),circle_class,new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("frotateG_"),cljs.core.str(n)].join('')], null)], null),humfunding$shared$busy_indicator_$_iter__32239.call(null,cljs.core.rest.call(null,s__32240__$2)));
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
return iter__30231__auto__.call(null,cljs.core.range.call(null,num_circles));
})());
});

//# sourceMappingURL=shared.js.map