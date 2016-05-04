// Compiled by ClojureScript 1.8.40 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor.call(null,reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__30415__auto__ = [];
var len__30408__auto___32637 = arguments.length;
var i__30409__auto___32638 = (0);
while(true){
if((i__30409__auto___32638 < len__30408__auto___32637)){
args__30415__auto__.push((arguments[i__30409__auto___32638]));

var G__32639 = (i__30409__auto___32638 + (1));
i__30409__auto___32638 = G__32639;
continue;
} else {
}
break;
}

var argseq__30416__auto__ = ((((1) < args__30415__auto__.length))?(new cljs.core.IndexedSeq(args__30415__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30416__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__32635){
var vec__32636 = p__32635;
var default$ = cljs.core.nth.call(null,vec__32636,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var or__29339__auto__ = cljs.core.deref.call(null,temp_a);
if(cljs.core.truth_(or__29339__auto__)){
return or__29339__auto__;
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq32633){
var G__32634 = cljs.core.first.call(null,seq32633);
var seq32633__$1 = cljs.core.next.call(null,seq32633);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__32634,seq32633__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__30415__auto__ = [];
var len__30408__auto___32644 = arguments.length;
var i__30409__auto___32645 = (0);
while(true){
if((i__30409__auto___32645 < len__30408__auto___32644)){
args__30415__auto__.push((arguments[i__30409__auto___32645]));

var G__32646 = (i__30409__auto___32645 + (1));
i__30409__auto___32645 = G__32646;
continue;
} else {
}
break;
}

var argseq__30416__auto__ = ((((1) < args__30415__auto__.length))?(new cljs.core.IndexedSeq(args__30415__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30416__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__32642){
var vec__32643 = p__32642;
var default$ = cljs.core.nth.call(null,vec__32643,(0),null);
var or__29339__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__29339__auto__)){
return or__29339__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq32640){
var G__32641 = cljs.core.first.call(null,seq32640);
var seq32640__$1 = cljs.core.next.call(null,seq32640);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__32641,seq32640__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__30415__auto__ = [];
var len__30408__auto___32649 = arguments.length;
var i__30409__auto___32650 = (0);
while(true){
if((i__30409__auto___32650 < len__30408__auto___32649)){
args__30415__auto__.push((arguments[i__30409__auto___32650]));

var G__32651 = (i__30409__auto___32650 + (1));
i__30409__auto___32650 = G__32651;
continue;
} else {
}
break;
}

var argseq__30416__auto__ = ((((1) < args__30415__auto__.length))?(new cljs.core.IndexedSeq(args__30415__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30416__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq32647){
var G__32648 = cljs.core.first.call(null,seq32647);
var seq32647__$1 = cljs.core.next.call(null,seq32647);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32648,seq32647__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__30415__auto__ = [];
var len__30408__auto___32656 = arguments.length;
var i__30409__auto___32657 = (0);
while(true){
if((i__30409__auto___32657 < len__30408__auto___32656)){
args__30415__auto__.push((arguments[i__30409__auto___32657]));

var G__32658 = (i__30409__auto___32657 + (1));
i__30409__auto___32657 = G__32658;
continue;
} else {
}
break;
}

var argseq__30416__auto__ = ((((1) < args__30415__auto__.length))?(new cljs.core.IndexedSeq(args__30415__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30416__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__32654){
var vec__32655 = p__32654;
var default$ = cljs.core.nth.call(null,vec__32655,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq32652){
var G__32653 = cljs.core.first.call(null,seq32652);
var seq32652__$1 = cljs.core.next.call(null,seq32652);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32653,seq32652__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__30415__auto__ = [];
var len__30408__auto___32663 = arguments.length;
var i__30409__auto___32664 = (0);
while(true){
if((i__30409__auto___32664 < len__30408__auto___32663)){
args__30415__auto__.push((arguments[i__30409__auto___32664]));

var G__32665 = (i__30409__auto___32664 + (1));
i__30409__auto___32664 = G__32665;
continue;
} else {
}
break;
}

var argseq__30416__auto__ = ((((1) < args__30415__auto__.length))?(new cljs.core.IndexedSeq(args__30415__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30416__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__32661){
var vec__32662 = p__32661;
var default$ = cljs.core.nth.call(null,vec__32662,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq32659){
var G__32660 = cljs.core.first.call(null,seq32659);
var seq32659__$1 = cljs.core.next.call(null,seq32659);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32660,seq32659__$1);
});
/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__30415__auto__ = [];
var len__30408__auto___32670 = arguments.length;
var i__30409__auto___32671 = (0);
while(true){
if((i__30409__auto___32671 < len__30408__auto___32670)){
args__30415__auto__.push((arguments[i__30409__auto___32671]));

var G__32672 = (i__30409__auto___32671 + (1));
i__30409__auto___32671 = G__32672;
continue;
} else {
}
break;
}

var argseq__30416__auto__ = ((((2) < args__30415__auto__.length))?(new cljs.core.IndexedSeq(args__30415__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30416__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__32666_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__32666_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq32667){
var G__32668 = cljs.core.first.call(null,seq32667);
var seq32667__$1 = cljs.core.next.call(null,seq32667);
var G__32669 = cljs.core.first.call(null,seq32667__$1);
var seq32667__$2 = cljs.core.next.call(null,seq32667__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32668,G__32669,seq32667__$2);
});
/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__30415__auto__ = [];
var len__30408__auto___32677 = arguments.length;
var i__30409__auto___32678 = (0);
while(true){
if((i__30409__auto___32678 < len__30408__auto___32677)){
args__30415__auto__.push((arguments[i__30409__auto___32678]));

var G__32679 = (i__30409__auto___32678 + (1));
i__30409__auto___32678 = G__32679;
continue;
} else {
}
break;
}

var argseq__30416__auto__ = ((((2) < args__30415__auto__.length))?(new cljs.core.IndexedSeq(args__30415__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30416__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__32673_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__32673_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq32674){
var G__32675 = cljs.core.first.call(null,seq32674);
var seq32674__$1 = cljs.core.next.call(null,seq32674);
var G__32676 = cljs.core.first.call(null,seq32674__$1);
var seq32674__$2 = cljs.core.next.call(null,seq32674__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32675,G__32676,seq32674__$2);
});

//# sourceMappingURL=session.js.map