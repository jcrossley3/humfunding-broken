// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('cljs_time.internal.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
cljs_time.internal.core._EQ_ = (function cljs_time$internal$core$_EQ_(var_args){
var args__7192__auto__ = [];
var len__7185__auto___14346 = arguments.length;
var i__7186__auto___14347 = (0);
while(true){
if((i__7186__auto___14347 < len__7185__auto___14346)){
args__7192__auto__.push((arguments[i__7186__auto___14347]));

var G__14348 = (i__7186__auto___14347 + (1));
i__7186__auto___14347 = G__14348;
continue;
} else {
}
break;
}

var argseq__7193__auto__ = ((((0) < args__7192__auto__.length))?(new cljs.core.IndexedSeq(args__7192__auto__.slice((0)),(0),null)):null);
return cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__7193__auto__);
});

cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.every_QMARK_((function (p1__14343_SHARP_){
return (p1__14343_SHARP_ instanceof goog.date.Date);
}),args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14344_SHARP_){
return p1__14344_SHARP_.getTime();
}),args));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,args);

}
});

cljs_time.internal.core._EQ_.cljs$lang$maxFixedArity = (0);

cljs_time.internal.core._EQ_.cljs$lang$applyTo = (function (seq14345){
return cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14345));
});
cljs_time.internal.core.leap_year_QMARK_ = (function cljs_time$internal$core$leap_year_QMARK_(y){
if((cljs.core.mod(y,(400)) === (0))){
return true;
} else {
if((cljs.core.mod(y,(100)) === (0))){
return false;
} else {
if((cljs.core.mod(y,(4)) === (0))){
return true;
} else {
return false;

}
}
}
});
cljs_time.internal.core.days_in_month = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
cljs_time.internal.core.year_corrected_dim = (function cljs_time$internal$core$year_corrected_dim(year,month){
var G__14351 = (function (){var G__14352 = (cljs.core.truth_(cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([month,(1)], 0)))?(11):(month - (1)));
return (cljs_time.internal.core.days_in_month.cljs$core$IFn$_invoke$arity$1 ? cljs_time.internal.core.days_in_month.cljs$core$IFn$_invoke$arity$1(G__14352) : cljs_time.internal.core.days_in_month.call(null,G__14352));
})();
if(cljs.core.truth_((function (){var and__6104__auto__ = cljs_time.internal.core.leap_year_QMARK_(year);
if(cljs.core.truth_(and__6104__auto__)){
return cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([month,(2)], 0));
} else {
return and__6104__auto__;
}
})())){
return (G__14351 + (1));
} else {
return G__14351;
}
});
cljs_time.internal.core.valid_date_QMARK_ = (function cljs_time$internal$core$valid_date_QMARK_(p__14353){
var map__14356 = p__14353;
var map__14356__$1 = ((((!((map__14356 == null)))?((((map__14356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14356):map__14356);
var d = map__14356__$1;
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14356__$1,cljs.core.cst$kw$years);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14356__$1,cljs.core.cst$kw$months);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14356__$1,cljs.core.cst$kw$days);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14356__$1,cljs.core.cst$kw$hours);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14356__$1,cljs.core.cst$kw$minutes);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14356__$1,cljs.core.cst$kw$seconds);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14356__$1,cljs.core.cst$kw$millis);
var months__$1 = (months + (1));
var _GT__LT_ = ((function (months__$1,map__14356,map__14356__$1,d,years,months,days,hours,minutes,seconds,millis){
return (function cljs_time$internal$core$valid_date_QMARK__$__GT__LT_(a,b,x){
return ((x >= a)) && ((x <= b));
});})(months__$1,map__14356,map__14356__$1,d,years,months,days,hours,minutes,seconds,millis))
;
if(cljs.core.truth_((function (){var and__6104__auto__ = years;
if(cljs.core.truth_(and__6104__auto__)){
var and__6104__auto____$1 = _GT__LT_((1),(12),months__$1);
if(cljs.core.truth_(and__6104__auto____$1)){
var and__6104__auto____$2 = _GT__LT_((1),cljs_time.internal.core.year_corrected_dim(years,months__$1),days);
if(cljs.core.truth_(and__6104__auto____$2)){
var and__6104__auto____$3 = _GT__LT_((0),(23),hours);
if(cljs.core.truth_(and__6104__auto____$3)){
var and__6104__auto____$4 = _GT__LT_((0),(59),minutes);
if(cljs.core.truth_(and__6104__auto____$4)){
var and__6104__auto____$5 = _GT__LT_((0),(60),seconds);
if(cljs.core.truth_(and__6104__auto____$5)){
return _GT__LT_((0),(999),millis);
} else {
return and__6104__auto____$5;
}
} else {
return and__6104__auto____$4;
}
} else {
return and__6104__auto____$3;
}
} else {
return and__6104__auto____$2;
}
} else {
return and__6104__auto____$1;
}
} else {
return and__6104__auto__;
}
})())){
return d;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Date is not valid",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$invalid_DASH_date,cljs.core.cst$kw$date,d], null));
}
});
cljs_time.internal.core.index_of = (function cljs_time$internal$core$index_of(coll,x){
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__14359_SHARP_,p2__14358_SHARP_){
if(cljs.core.truth_(cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p2__14358_SHARP_,x], 0)))){
return p1__14359_SHARP_;
} else {
return null;
}
}),coll));
});
/**
 * Formats a string using goog.string.format.
 */
cljs_time.internal.core.format = (function cljs_time$internal$core$format(var_args){
var args__7192__auto__ = [];
var len__7185__auto___14362 = arguments.length;
var i__7186__auto___14363 = (0);
while(true){
if((i__7186__auto___14363 < len__7185__auto___14362)){
args__7192__auto__.push((arguments[i__7186__auto___14363]));

var G__14364 = (i__7186__auto___14363 + (1));
i__7186__auto___14363 = G__14364;
continue;
} else {
}
break;
}

var argseq__7193__auto__ = ((((1) < args__7192__auto__.length))?(new cljs.core.IndexedSeq(args__7192__auto__.slice((1)),(0),null)):null);
return cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7193__auto__);
});

cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol))){
return [cljs.core.str(x)].join('');
} else {
return x;
}
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args__$1);
});

cljs_time.internal.core.format.cljs$lang$maxFixedArity = (1);

cljs_time.internal.core.format.cljs$lang$applyTo = (function (seq14360){
var G__14361 = cljs.core.first(seq14360);
var seq14360__$1 = cljs.core.next(seq14360);
return cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(G__14361,seq14360__$1);
});
/**
 * Remove the need to pull in gstring/format code in advanced compilation
 */
cljs_time.internal.core.zero_pad = (function cljs_time$internal$core$zero_pad(var_args){
var args14365 = [];
var len__7185__auto___14368 = arguments.length;
var i__7186__auto___14369 = (0);
while(true){
if((i__7186__auto___14369 < len__7185__auto___14368)){
args14365.push((arguments[i__7186__auto___14369]));

var G__14370 = (i__7186__auto___14369 + (1));
i__7186__auto___14369 = G__14370;
continue;
} else {
}
break;
}

var G__14367 = args14365.length;
switch (G__14367) {
case 1:
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14365.length)].join('')));

}
});

cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1 = (function (n){
if((((0) <= n)) && ((n <= (9)))){
return [cljs.core.str("0"),cljs.core.str(n)].join('');
} else {
return [cljs.core.str(n)].join('');
}
});

cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2 = (function (n,zeros){
if(((1) > zeros)){
return [cljs.core.str(n)].join('');
} else {
return [cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((zeros - cljs.core.count([cljs.core.str(n)].join(''))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("0")))),cljs.core.str(n)].join('');
}
});

cljs_time.internal.core.zero_pad.cljs$lang$maxFixedArity = 2;
cljs_time.internal.core.multiplied_by = (function cljs_time$internal$core$multiplied_by(period,scalar){
var scale_fn = (function cljs_time$internal$core$multiplied_by_$_scale_fn(field){
if(cljs.core.truth_(field)){
return (field * scalar);
} else {
return null;
}
});
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(period,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$millis], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seconds], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$minutes], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hours], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$days], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$weeks], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$months], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$years], null),scale_fn);
});
