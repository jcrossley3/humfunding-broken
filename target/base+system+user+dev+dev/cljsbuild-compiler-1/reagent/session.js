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
var args__30676__auto__ = [];
var len__30669__auto___38317 = arguments.length;
var i__30670__auto___38318 = (0);
while(true){
if((i__30670__auto___38318 < len__30669__auto___38317)){
args__30676__auto__.push((arguments[i__30670__auto___38318]));

var G__38319 = (i__30670__auto___38318 + (1));
i__30670__auto___38318 = G__38319;
continue;
} else {
}
break;
}

var argseq__30677__auto__ = ((((1) < args__30676__auto__.length))?(new cljs.core.IndexedSeq(args__30676__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30677__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__38315){
var vec__38316 = p__38315;
var default$ = cljs.core.nth.call(null,vec__38316,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var or__29600__auto__ = cljs.core.deref.call(null,temp_a);
if(cljs.core.truth_(or__29600__auto__)){
return or__29600__auto__;
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq38313){
var G__38314 = cljs.core.first.call(null,seq38313);
var seq38313__$1 = cljs.core.next.call(null,seq38313);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__38314,seq38313__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__30676__auto__ = [];
var len__30669__auto___38324 = arguments.length;
var i__30670__auto___38325 = (0);
while(true){
if((i__30670__auto___38325 < len__30669__auto___38324)){
args__30676__auto__.push((arguments[i__30670__auto___38325]));

var G__38326 = (i__30670__auto___38325 + (1));
i__30670__auto___38325 = G__38326;
continue;
} else {
}
break;
}

var argseq__30677__auto__ = ((((1) < args__30676__auto__.length))?(new cljs.core.IndexedSeq(args__30676__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30677__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__38322){
var vec__38323 = p__38322;
var default$ = cljs.core.nth.call(null,vec__38323,(0),null);
var or__29600__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__29600__auto__)){
return or__29600__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq38320){
var G__38321 = cljs.core.first.call(null,seq38320);
var seq38320__$1 = cljs.core.next.call(null,seq38320);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__38321,seq38320__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__30676__auto__ = [];
var len__30669__auto___38329 = arguments.length;
var i__30670__auto___38330 = (0);
while(true){
if((i__30670__auto___38330 < len__30669__auto___38329)){
args__30676__auto__.push((arguments[i__30670__auto___38330]));

var G__38331 = (i__30670__auto___38330 + (1));
i__30670__auto___38330 = G__38331;
continue;
} else {
}
break;
}

var argseq__30677__auto__ = ((((1) < args__30676__auto__.length))?(new cljs.core.IndexedSeq(args__30676__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30677__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq38327){
var G__38328 = cljs.core.first.call(null,seq38327);
var seq38327__$1 = cljs.core.next.call(null,seq38327);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38328,seq38327__$1);
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
var args__30676__auto__ = [];
var len__30669__auto___38336 = arguments.length;
var i__30670__auto___38337 = (0);
while(true){
if((i__30670__auto___38337 < len__30669__auto___38336)){
args__30676__auto__.push((arguments[i__30670__auto___38337]));

var G__38338 = (i__30670__auto___38337 + (1));
i__30670__auto___38337 = G__38338;
continue;
} else {
}
break;
}

var argseq__30677__auto__ = ((((1) < args__30676__auto__.length))?(new cljs.core.IndexedSeq(args__30676__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30677__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__38334){
var vec__38335 = p__38334;
var default$ = cljs.core.nth.call(null,vec__38335,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq38332){
var G__38333 = cljs.core.first.call(null,seq38332);
var seq38332__$1 = cljs.core.next.call(null,seq38332);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38333,seq38332__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__30676__auto__ = [];
var len__30669__auto___38343 = arguments.length;
var i__30670__auto___38344 = (0);
while(true){
if((i__30670__auto___38344 < len__30669__auto___38343)){
args__30676__auto__.push((arguments[i__30670__auto___38344]));

var G__38345 = (i__30670__auto___38344 + (1));
i__30670__auto___38344 = G__38345;
continue;
} else {
}
break;
}

var argseq__30677__auto__ = ((((1) < args__30676__auto__.length))?(new cljs.core.IndexedSeq(args__30676__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30677__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__38341){
var vec__38342 = p__38341;
var default$ = cljs.core.nth.call(null,vec__38342,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq38339){
var G__38340 = cljs.core.first.call(null,seq38339);
var seq38339__$1 = cljs.core.next.call(null,seq38339);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38340,seq38339__$1);
});
/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__30676__auto__ = [];
var len__30669__auto___38350 = arguments.length;
var i__30670__auto___38351 = (0);
while(true){
if((i__30670__auto___38351 < len__30669__auto___38350)){
args__30676__auto__.push((arguments[i__30670__auto___38351]));

var G__38352 = (i__30670__auto___38351 + (1));
i__30670__auto___38351 = G__38352;
continue;
} else {
}
break;
}

var argseq__30677__auto__ = ((((2) < args__30676__auto__.length))?(new cljs.core.IndexedSeq(args__30676__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30677__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__38346_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__38346_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq38347){
var G__38348 = cljs.core.first.call(null,seq38347);
var seq38347__$1 = cljs.core.next.call(null,seq38347);
var G__38349 = cljs.core.first.call(null,seq38347__$1);
var seq38347__$2 = cljs.core.next.call(null,seq38347__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38348,G__38349,seq38347__$2);
});
/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__30676__auto__ = [];
var len__30669__auto___38357 = arguments.length;
var i__30670__auto___38358 = (0);
while(true){
if((i__30670__auto___38358 < len__30669__auto___38357)){
args__30676__auto__.push((arguments[i__30670__auto___38358]));

var G__38359 = (i__30670__auto___38358 + (1));
i__30670__auto___38358 = G__38359;
continue;
} else {
}
break;
}

var argseq__30677__auto__ = ((((2) < args__30676__auto__.length))?(new cljs.core.IndexedSeq(args__30676__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30677__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__38353_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__38353_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq38354){
var G__38355 = cljs.core.first.call(null,seq38354);
var seq38354__$1 = cljs.core.next.call(null,seq38354);
var G__38356 = cljs.core.first.call(null,seq38354__$1);
var seq38354__$2 = cljs.core.next.call(null,seq38354__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38355,G__38356,seq38354__$2);
});
