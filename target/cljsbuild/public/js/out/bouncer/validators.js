// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('bouncer.validators');
goog.require('cljs.core');
goog.require('cljs_time.format');
bouncer.validators.required = cljs.core.with_meta((function bouncer$validators$required(value){
if(typeof value === 'string'){
return !(cljs.core.empty_QMARK_(value));
} else {
return !((value == null));
}
}),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$optional,false,cljs.core.cst$kw$default_DASH_message_DASH_format,"%s must be present",cljs.core.cst$kw$validator,cljs.core.cst$kw$bouncer$validators_SLASH_required], null));
bouncer.validators.number = cljs.core.with_meta((function bouncer$validators$number(maybe_a_number){
return typeof maybe_a_number === 'number';
}),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$optional,true,cljs.core.cst$kw$default_DASH_message_DASH_format,"%s must be a number",cljs.core.cst$kw$validator,cljs.core.cst$kw$bouncer$validators_SLASH_number], null));
bouncer.validators.integer = cljs.core.with_meta((function bouncer$validators$integer(maybe_an_int){
return cljs.core.integer_QMARK_(maybe_an_int);
}),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$optional,true,cljs.core.cst$kw$default_DASH_message_DASH_format,"%s must be an integer",cljs.core.cst$kw$validator,cljs.core.cst$kw$bouncer$validators_SLASH_integer], null));
bouncer.validators.boolean$ = cljs.core.with_meta((function bouncer$validators$boolean(maybe_a_boolean){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,maybe_a_boolean)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,maybe_a_boolean));
}),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$optional,true,cljs.core.cst$kw$default_DASH_message_DASH_format,"%s must be a boolean",cljs.core.cst$kw$validator,cljs.core.cst$kw$bouncer$validators_SLASH_boolean], null));
bouncer.validators.string = cljs.core.with_meta((function bouncer$validators$string(maybe_a_string){
return typeof maybe_a_string === 'string';
}),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$optional,true,cljs.core.cst$kw$default_DASH_message_DASH_format,"%s must be a string",cljs.core.cst$kw$validator,cljs.core.cst$kw$bouncer$validators_SLASH_string], null));
bouncer.validators.in_range = cljs.core.with_meta((function bouncer$validators$in_range(value,p__14974){
var vec__14976 = p__14974;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14976,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14976,(1),null);
return ((from <= value)) && ((value <= to));
}),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$optional,true,cljs.core.cst$kw$default_DASH_message_DASH_format,"%s must be in a specified range",cljs.core.cst$kw$validator,cljs.core.cst$kw$bouncer$validators_SLASH_in_DASH_range], null));
bouncer.validators.positive = cljs.core.with_meta((function bouncer$validators$positive(number){
return (number > (0));
}),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$optional,true,cljs.core.cst$kw$default_DASH_message_DASH_format,"%s must be a positive number",cljs.core.cst$kw$validator,cljs.core.cst$kw$bouncer$validators_SLASH_positive], null));
bouncer.validators.member = cljs.core.with_meta((function bouncer$validators$member(value,coll){
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([value], true),coll);
}),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$optional,true,cljs.core.cst$kw$default_DASH_message_DASH_format,"%s must be one of the values in the list",cljs.core.cst$kw$validator,cljs.core.cst$kw$bouncer$validators_SLASH_member], null));
bouncer.validators.custom = cljs.core.with_meta((function bouncer$validators$custom(value,pred){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Warning: bouncer.validators/custom is deprecated and will be removed. Use plain functions instead."], 0));

return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(value) : pred.call(null,value));
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$optional,true,cljs.core.cst$kw$validator,cljs.core.cst$kw$bouncer$validators_SLASH_custom], null));
bouncer.validators.every = cljs.core.with_meta((function bouncer$validators$every(coll,pred){
return cljs.core.every_QMARK_(pred,coll);
}),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$optional,true,cljs.core.cst$kw$default_DASH_message_DASH_format,"All items in %s must satisfy the predicate",cljs.core.cst$kw$validator,cljs.core.cst$kw$bouncer$validators_SLASH_every], null));
bouncer.validators.matches = cljs.core.with_meta((function bouncer$validators$matches(value,re){
return cljs.core.complement(cljs.core.empty_QMARK_).call(null,cljs.core.re_seq(re,value));
}),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$optional,true,cljs.core.cst$kw$default_DASH_message_DASH_format,"%s must satisfy the given pattern",cljs.core.cst$kw$validator,cljs.core.cst$kw$bouncer$validators_SLASH_matches], null));
bouncer.validators.email = cljs.core.with_meta((function bouncer$validators$email(value){
var and__6104__auto__ = (bouncer.validators.required.cljs$core$IFn$_invoke$arity$1 ? bouncer.validators.required.cljs$core$IFn$_invoke$arity$1(value) : bouncer.validators.required.call(null,value));
if(cljs.core.truth_(and__6104__auto__)){
return (bouncer.validators.matches.cljs$core$IFn$_invoke$arity$2 ? bouncer.validators.matches.cljs$core$IFn$_invoke$arity$2(value,/^[^@]+@[^@\\.]+[\\.].+/) : bouncer.validators.matches.call(null,value,/^[^@]+@[^@\\.]+[\\.].+/));
} else {
return and__6104__auto__;
}
}),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$optional,true,cljs.core.cst$kw$default_DASH_message_DASH_format,"%s must be a valid email address",cljs.core.cst$kw$validator,cljs.core.cst$kw$bouncer$validators_SLASH_email], null));
bouncer.validators.datetime = cljs.core.with_meta((function() { 
var bouncer$validators$datetime__delegate = function (value,p__14977){
var vec__14980 = p__14977;
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14980,(0),null);
var _ = cljs.core.nthnext(vec__14980,(1));
var formatter = ((typeof opt === 'string')?cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(opt):opt);
try{if(cljs.core.truth_(formatter)){
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(formatter,value);
} else {
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$1(value);
}
}catch (e14981){if((e14981 instanceof Error)){
var e = e14981;
return false;
} else {
throw e14981;

}
}};
var bouncer$validators$datetime = function (value,var_args){
var p__14977 = null;
if (arguments.length > 1) {
var G__14982__i = 0, G__14982__a = new Array(arguments.length -  1);
while (G__14982__i < G__14982__a.length) {G__14982__a[G__14982__i] = arguments[G__14982__i + 1]; ++G__14982__i;}
  p__14977 = new cljs.core.IndexedSeq(G__14982__a,0);
} 
return bouncer$validators$datetime__delegate.call(this,value,p__14977);};
bouncer$validators$datetime.cljs$lang$maxFixedArity = 1;
bouncer$validators$datetime.cljs$lang$applyTo = (function (arglist__14983){
var value = cljs.core.first(arglist__14983);
var p__14977 = cljs.core.rest(arglist__14983);
return bouncer$validators$datetime__delegate(value,p__14977);
});
bouncer$validators$datetime.cljs$core$IFn$_invoke$arity$variadic = bouncer$validators$datetime__delegate;
return bouncer$validators$datetime;
})()
,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$optional,true,cljs.core.cst$kw$default_DASH_message_DASH_format,"%s must be a valid date",cljs.core.cst$kw$validator,cljs.core.cst$kw$bouncer$validators_SLASH_datetime], null));
bouncer.validators.max_count = cljs.core.with_meta((function bouncer$validators$max_count(value,maximum){
return (cljs.core.count(cljs.core.seq(value)) <= maximum);
}),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$optional,true,cljs.core.cst$kw$default_DASH_message_DASH_format,"%s is longer than the maximum",cljs.core.cst$kw$validator,cljs.core.cst$kw$bouncer$validators_SLASH_max_DASH_count], null));
bouncer.validators.min_count = cljs.core.with_meta((function bouncer$validators$min_count(value,minimum){
return (cljs.core.count(cljs.core.seq(value)) >= minimum);
}),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$optional,true,cljs.core.cst$kw$default_DASH_message_DASH_format,"%s is less than the minimum",cljs.core.cst$kw$validator,cljs.core.cst$kw$bouncer$validators_SLASH_min_DASH_count], null));
