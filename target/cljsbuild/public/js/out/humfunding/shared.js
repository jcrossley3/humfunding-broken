// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('humfunding.shared');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
humfunding.shared.hum_link = (function humfunding$shared$hum_link(target,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,target], null),content], null);
});
humfunding.shared.nav_link = (function humfunding$shared$nav_link(uri,title,page,collapsed_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,reagent.session.get(cljs.core.cst$kw$page)))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,uri,cljs.core.cst$kw$on_DASH_click,(function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(collapsed_QMARK_,true) : cljs.core.reset_BANG_.call(null,collapsed_QMARK_,true));
})], null),title], null)], null);
});
humfunding.shared.navbar = (function humfunding$shared$navbar(){
var collapsed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return ((function (collapsed_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav$navbar$navbar_DASH_light$bg_DASH_faded,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$navbar_DASH_toggler$hidden_DASH_sm_DASH_up,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (collapsed_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(collapsed_QMARK_,cljs.core.not);
});})(collapsed_QMARK_))
], null),"\u2630"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$collapse$navbar_DASH_toggleable_DASH_xs,(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(collapsed_QMARK_) : cljs.core.deref.call(null,collapsed_QMARK_)))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"in"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$navbar_DASH_brand,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"http://humanities.byu.edu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$pull_DASH_left,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"img/humanities-logo.png",cljs.core.cst$kw$alt,"BYU Humanities Funding"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$nav$navbar_DASH_nav,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [humfunding.shared.nav_link,"#/","Home",cljs.core.cst$kw$home,collapsed_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item$registered,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"http://cas.byu.edu/logout"], null),"Logged in as"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$username,window.USERNAME], null)], null)], null)], null)], null);
});
;})(collapsed_QMARK_))
});
humfunding.shared.make_list = (function humfunding$shared$make_list(var_args){
var args__7192__auto__ = [];
var len__7185__auto___13730 = arguments.length;
var i__7186__auto___13731 = (0);
while(true){
if((i__7186__auto___13731 < len__7185__auto___13730)){
args__7192__auto__.push((arguments[i__7186__auto___13731]));

var G__13732 = (i__7186__auto___13731 + (1));
i__7186__auto___13731 = G__13732;
continue;
} else {
}
break;
}

var argseq__7193__auto__ = ((((1) < args__7192__auto__.length))?(new cljs.core.IndexedSeq(args__7192__auto__.slice((1)),(0),null)):null);
return humfunding.shared.make_list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7193__auto__);
});

humfunding.shared.make_list.cljs$core$IFn$_invoke$arity$variadic = (function (type,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null),(function (){var iter__6896__auto__ = (function humfunding$shared$iter__13724(s__13725){
return (new cljs.core.LazySeq(null,(function (){
var s__13725__$1 = s__13725;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13725__$1);
if(temp__4657__auto__){
var s__13725__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13725__$2)){
var c__6894__auto__ = cljs.core.chunk_first(s__13725__$2);
var size__6895__auto__ = cljs.core.count(c__6894__auto__);
var b__13727 = cljs.core.chunk_buffer(size__6895__auto__);
if((function (){var i__13726 = (0);
while(true){
if((i__13726 < size__6895__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6894__auto__,i__13726);
cljs.core.chunk_append(b__13727,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,i], null));

var G__13733 = (i__13726 + (1));
i__13726 = G__13733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13727),humfunding$shared$iter__13724(cljs.core.chunk_rest(s__13725__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13727),null);
}
} else {
var i = cljs.core.first(s__13725__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,i], null),humfunding$shared$iter__13724(cljs.core.rest(s__13725__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6896__auto__(items);
})());
});

humfunding.shared.make_list.cljs$lang$maxFixedArity = (1);

humfunding.shared.make_list.cljs$lang$applyTo = (function (seq13722){
var G__13723 = cljs.core.first(seq13722);
var seq13722__$1 = cljs.core.next(seq13722);
return humfunding.shared.make_list.cljs$core$IFn$_invoke$arity$variadic(G__13723,seq13722__$1);
});
/**
 * The `sign in' link that triggers & populates the initial form
 */
humfunding.shared.make_sign_in = (function humfunding$shared$make_sign_in(app_type){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$btn$btn_DASH_primary$signin,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#"], null),"Sign In"], null);
});
/**
 * Make a css-animated busy indicator
 */
humfunding.shared.busy_indicator = (function humfunding$shared$busy_indicator(num_circles){
var circle_class = "f_circleG";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_floatingCirclesG], null),(function (){var iter__6896__auto__ = ((function (circle_class){
return (function humfunding$shared$busy_indicator_$_iter__13740(s__13741){
return (new cljs.core.LazySeq(null,((function (circle_class){
return (function (){
var s__13741__$1 = s__13741;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13741__$1);
if(temp__4657__auto__){
var s__13741__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13741__$2)){
var c__6894__auto__ = cljs.core.chunk_first(s__13741__$2);
var size__6895__auto__ = cljs.core.count(c__6894__auto__);
var b__13743 = cljs.core.chunk_buffer(size__6895__auto__);
if((function (){var i__13742 = (0);
while(true){
if((i__13742 < size__6895__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6894__auto__,i__13742);
cljs.core.chunk_append(b__13743,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,circle_class,cljs.core.cst$kw$id,[cljs.core.str("frotateG_"),cljs.core.str(n)].join('')], null)], null));

var G__13746 = (i__13742 + (1));
i__13742 = G__13746;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13743),humfunding$shared$busy_indicator_$_iter__13740(cljs.core.chunk_rest(s__13741__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13743),null);
}
} else {
var n = cljs.core.first(s__13741__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,circle_class,cljs.core.cst$kw$id,[cljs.core.str("frotateG_"),cljs.core.str(n)].join('')], null)], null),humfunding$shared$busy_indicator_$_iter__13740(cljs.core.rest(s__13741__$2)));
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
return iter__6896__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(num_circles));
})());
});
