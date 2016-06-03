// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor(reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__7192__auto__ = [];
var len__7185__auto___13671 = arguments.length;
var i__7186__auto___13672 = (0);
while(true){
if((i__7186__auto___13672 < len__7185__auto___13671)){
args__7192__auto__.push((arguments[i__7186__auto___13672]));

var G__13673 = (i__7186__auto___13672 + (1));
i__7186__auto___13672 = G__13673;
continue;
} else {
}
break;
}

var argseq__7193__auto__ = ((((1) < args__7192__auto__.length))?(new cljs.core.IndexedSeq(args__7192__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7193__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__13669){
var vec__13670 = p__13669;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13670,(0),null);
var temp_a = reagent.session.cursor(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var or__6116__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(temp_a) : cljs.core.deref.call(null,temp_a));
if(cljs.core.truth_(or__6116__auto__)){
return or__6116__auto__;
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq13667){
var G__13668 = cljs.core.first(seq13667);
var seq13667__$1 = cljs.core.next(seq13667);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__13668,seq13667__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__7192__auto__ = [];
var len__7185__auto___13680 = arguments.length;
var i__7186__auto___13681 = (0);
while(true){
if((i__7186__auto___13681 < len__7185__auto___13680)){
args__7192__auto__.push((arguments[i__7186__auto___13681]));

var G__13682 = (i__7186__auto___13681 + (1));
i__7186__auto___13681 = G__13682;
continue;
} else {
}
break;
}

var argseq__7193__auto__ = ((((1) < args__7192__auto__.length))?(new cljs.core.IndexedSeq(args__7192__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7193__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__13676){
var vec__13677 = p__13676;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13677,(0),null);
var or__6116__auto__ = (function (){var G__13679 = reagent.session.cursor(ks);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13679) : cljs.core.deref.call(null,G__13679));
})();
if(cljs.core.truth_(or__6116__auto__)){
return or__6116__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq13674){
var G__13675 = cljs.core.first(seq13674);
var seq13674__$1 = cljs.core.next(seq13674);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__13675,seq13674__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__7192__auto__ = [];
var len__7185__auto___13685 = arguments.length;
var i__7186__auto___13686 = (0);
while(true){
if((i__7186__auto___13686 < len__7185__auto___13685)){
args__7192__auto__.push((arguments[i__7186__auto___13686]));

var G__13687 = (i__7186__auto___13686 + (1));
i__7186__auto___13686 = G__13687;
continue;
} else {
}
break;
}

var argseq__7193__auto__ = ((((1) < args__7192__auto__.length))?(new cljs.core.IndexedSeq(args__7192__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7193__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq13683){
var G__13684 = cljs.core.first(seq13683);
var seq13683__$1 = cljs.core.next(seq13683);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13684,seq13683__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
var G__13690 = reagent.session.state;
var G__13691 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13690,G__13691) : cljs.core.reset_BANG_.call(null,G__13690,G__13691));
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,m) : cljs.core.reset_BANG_.call(null,reagent.session.state,m));
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__7192__auto__ = [];
var len__7185__auto___13696 = arguments.length;
var i__7186__auto___13697 = (0);
while(true){
if((i__7186__auto___13697 < len__7185__auto___13696)){
args__7192__auto__.push((arguments[i__7186__auto___13697]));

var G__13698 = (i__7186__auto___13697 + (1));
i__7186__auto___13697 = G__13698;
continue;
} else {
}
break;
}

var argseq__7193__auto__ = ((((1) < args__7192__auto__.length))?(new cljs.core.IndexedSeq(args__7192__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7193__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__13694){
var vec__13695 = p__13694;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13695,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.array_seq([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq13692){
var G__13693 = cljs.core.first(seq13692);
var seq13692__$1 = cljs.core.next(seq13692);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13693,seq13692__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__7192__auto__ = [];
var len__7185__auto___13703 = arguments.length;
var i__7186__auto___13704 = (0);
while(true){
if((i__7186__auto___13704 < len__7185__auto___13703)){
args__7192__auto__.push((arguments[i__7186__auto___13704]));

var G__13705 = (i__7186__auto___13704 + (1));
i__7186__auto___13704 = G__13705;
continue;
} else {
}
break;
}

var argseq__7193__auto__ = ((((1) < args__7192__auto__.length))?(new cljs.core.IndexedSeq(args__7192__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7193__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__13701){
var vec__13702 = p__13701;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13702,(0),null);
var cur = reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(ks,cljs.core.array_seq([default$], 0));
reagent.session.assoc_in_BANG_(ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq13699){
var G__13700 = cljs.core.first(seq13699);
var seq13699__$1 = cljs.core.next(seq13699);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13700,seq13699__$1);
});
/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__7192__auto__ = [];
var len__7185__auto___13710 = arguments.length;
var i__7186__auto___13711 = (0);
while(true){
if((i__7186__auto___13711 < len__7185__auto___13710)){
args__7192__auto__.push((arguments[i__7186__auto___13711]));

var G__13712 = (i__7186__auto___13711 + (1));
i__7186__auto___13711 = G__13712;
continue;
} else {
}
break;
}

var argseq__7193__auto__ = ((((2) < args__7192__auto__.length))?(new cljs.core.IndexedSeq(args__7192__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7193__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__13706_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update,p1__13706_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq13707){
var G__13708 = cljs.core.first(seq13707);
var seq13707__$1 = cljs.core.next(seq13707);
var G__13709 = cljs.core.first(seq13707__$1);
var seq13707__$2 = cljs.core.next(seq13707__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13708,G__13709,seq13707__$2);
});
/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__7192__auto__ = [];
var len__7185__auto___13717 = arguments.length;
var i__7186__auto___13718 = (0);
while(true){
if((i__7186__auto___13718 < len__7185__auto___13717)){
args__7192__auto__.push((arguments[i__7186__auto___13718]));

var G__13719 = (i__7186__auto___13718 + (1));
i__7186__auto___13718 = G__13719;
continue;
} else {
}
break;
}

var argseq__7193__auto__ = ((((2) < args__7192__auto__.length))?(new cljs.core.IndexedSeq(args__7192__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7193__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__13713_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__13713_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq13714){
var G__13715 = cljs.core.first(seq13714);
var seq13714__$1 = cljs.core.next(seq13714);
var G__13716 = cljs.core.first(seq13714__$1);
var seq13714__$2 = cljs.core.next(seq13714__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13715,G__13716,seq13714__$2);
});
