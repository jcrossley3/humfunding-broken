// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('bouncer.core');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
bouncer.core.build_multi_step = (function bouncer$core$build_multi_step(var_args){
var args14986 = [];
var len__7185__auto___14992 = arguments.length;
var i__7186__auto___14993 = (0);
while(true){
if((i__7186__auto___14993 < len__7185__auto___14992)){
args14986.push((arguments[i__7186__auto___14993]));

var G__14994 = (i__7186__auto___14993 + (1));
i__7186__auto___14993 = G__14994;
continue;
} else {
}
break;
}

var G__14988 = args14986.length;
switch (G__14988) {
case 2:
return bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14986.length)].join('')));

}
});

bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$2 = (function (key_or_vec,fn_vec){
return bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$3(key_or_vec,fn_vec,cljs.core.PersistentVector.EMPTY);
});

bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$3 = (function (key_or_vec,p__14989,acc){
while(true){
var vec__14990 = p__14989;
var f_or_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14990,(0),null);
var rest = cljs.core.nthnext(vec__14990,(1));
if(cljs.core.not(f_or_list)){
return acc;
} else {
if(cljs.core.sequential_QMARK_(f_or_list)){
var vec__14991 = f_or_list;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14991,(0),null);
var opts = cljs.core.nthnext(vec__14991,(1));
var G__14996 = key_or_vec;
var G__14997 = rest;
var G__14998 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,key_or_vec], null),opts));
key_or_vec = G__14996;
p__14989 = G__14997;
acc = G__14998;
continue;
} else {
var G__14999 = key_or_vec;
var G__15000 = rest;
var G__15001 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f_or_list,key_or_vec], null));
key_or_vec = G__14999;
p__14989 = G__15000;
acc = G__15001;
continue;

}
}
break;
}
});

bouncer.core.build_multi_step.cljs$lang$maxFixedArity = 3;
/**
 * Takes two arguments:
 * 
 *   `parent-keyword` is a :keyword - or a vector of :keywords denoting a path in a associative structure
 * 
 *   `validations-map` is a map of forms following this spec:
 * 
 * 
 *    {:keyword [f g] :another-keyword h}
 * 
 * 
 *   Merges `:parent-keyword` with every first element of validations-map, transforming it into:
 * 
 * 
 *    ([:parent-keyword :keyword] [f g] [:parent-keyword :another-keyword] h)
 */
bouncer.core.merge_path = (function bouncer$core$merge_path(parent_key,validations_map){
var parent_key__$1 = (((parent_key instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_key], null):parent_key);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (parent_key__$1){
return (function (p__15004){
var vec__15005 = p__15004;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15005,(0),null);
var validations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15005,(1),null);
if(cljs.core.vector_QMARK_(key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(parent_key__$1,key)),validations], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(parent_key__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null))),validations], null);
}
});})(parent_key__$1))
,cljs.core.array_seq([validations_map], 0));
});
bouncer.core.build_steps = (function bouncer$core$build_steps(p__15006){
var vec__15011 = p__15006;
var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15011,(0),null);
var tail = cljs.core.nthnext(vec__15011,(1));
var forms = vec__15011;
var forms__$1 = ((cljs.core.map_QMARK_(head))?cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.array_seq([head], 0))):forms);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (forms__$1,vec__15011,head,tail,forms){
return (function (acc,p__15012){
var vec__15013 = p__15012;
var key_or_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15013,(0),null);
var sym_or_coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15013,(1),null);
var rule = vec__15013;
if(cljs.core.vector_QMARK_(sym_or_coll)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(acc,bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$2(key_or_vec,sym_or_coll));
} else {
if(cljs.core.map_QMARK_(sym_or_coll)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(acc,bouncer$core$build_steps(bouncer.core.merge_path(key_or_vec,sym_or_coll)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym_or_coll,key_or_vec], null));

}
}
});})(forms__$1,vec__15011,head,tail,forms))
,cljs.core.PersistentVector.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),forms__$1));
});
bouncer.core.pre_condition_met_QMARK_ = (function bouncer$core$pre_condition_met_QMARK_(pre_fn,map){
var or__6116__auto__ = (pre_fn == null);
if(or__6116__auto__){
return or__6116__auto__;
} else {
return (pre_fn.cljs$core$IFn$_invoke$arity$1 ? pre_fn.cljs$core$IFn$_invoke$arity$1(map) : pre_fn.call(null,map));
}
});
/**
 * Wraps pred in the context of validating a single value
 * 
 *   - `acc`  is the map being validated
 * 
 *   - `pred` is a validator
 * 
 *   - `k`    the path to the value to be validated in the associative structure `acc`
 * 
 *   - `args` any extra args to pred
 * 
 *   It only runs pred if:
 * 
 *   - the validator contains a pre-condition *and* it is met or;
 *   - the validator is optional  *and* there is a non-nil value to be validated (this information is read from pred's metadata) or;
 *   - there are no previous errors for the given path
 * 
 *   Returns `acc` augmented with a namespace qualified ::errors keyword
 */
bouncer.core.wrap = (function bouncer$core$wrap(message_fn,acc,p__15015){
var vec__15023 = p__15015;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15023,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15023,(1),null);
var args = cljs.core.nthnext(vec__15023,(2));
var k__$1 = ((cljs.core.vector_QMARK_(k))?k:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var error_path = cljs.core.cons(cljs.core.cst$kw$bouncer$core_SLASH_errors,k__$1);
var map__15024 = cljs.core.meta(pred);
var map__15024__$1 = ((((!((map__15024 == null)))?((((map__15024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15024):map__15024);
var metadata = map__15024__$1;
var optional = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15024__$1,cljs.core.cst$kw$optional,false);
var default_message_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15024__$1,cljs.core.cst$kw$default_DASH_message_DASH_format,"Custom validation failed for %s");
var meta_with_defaults = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([metadata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$default_DASH_message_DASH_format,default_message_format,cljs.core.cst$kw$optional,optional], null)], 0));
var vec__15025 = cljs.core.split_with(cljs.core.complement(cljs.core.keyword_QMARK_),args);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15025,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15025,(1),null);
var map__15026 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var map__15026__$1 = ((((!((map__15026 == null)))?((((map__15026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15026):map__15026);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15026__$1,cljs.core.cst$kw$message);
var pre = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15026__$1,cljs.core.cst$kw$pre);
var pred_subject = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(acc,k__$1);
if(cljs.core.truth_(bouncer.core.pre_condition_met_QMARK_(pre,acc))){
if(cljs.core.truth_((function (){var or__6116__auto__ = (function (){var and__6104__auto__ = optional;
if(cljs.core.truth_(and__6104__auto__)){
return (pred_subject == null);
} else {
return and__6104__auto__;
}
})();
if(cljs.core.truth_(or__6116__auto__)){
return or__6116__auto__;
} else {
var or__6116__auto____$1 = !(cljs.core.empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(acc,error_path)));
if(or__6116__auto____$1){
return or__6116__auto____$1;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(pred,pred_subject,args__$1);
}
}
})())){
return acc;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(acc,error_path,((function (k__$1,error_path,map__15024,map__15024__$1,metadata,optional,default_message_format,meta_with_defaults,vec__15025,args__$1,opts,map__15026,map__15026__$1,message,pre,pred_subject,vec__15023,pred,k,args){
return (function (p1__15014_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__15014_SHARP_,(function (){var G__15029 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,k__$1,cljs.core.cst$kw$value,pred_subject,cljs.core.cst$kw$args,cljs.core.seq(args__$1),cljs.core.cst$kw$metadata,meta_with_defaults,cljs.core.cst$kw$message,message], null);
return (message_fn.cljs$core$IFn$_invoke$arity$1 ? message_fn.cljs$core$IFn$_invoke$arity$1(G__15029) : message_fn.call(null,G__15029));
})());
});})(k__$1,error_path,map__15024,map__15024__$1,metadata,optional,default_message_format,meta_with_defaults,vec__15025,args__$1,opts,map__15026,map__15026__$1,message,pre,pred_subject,vec__15023,pred,k,args))
);
}
} else {
return acc;
}
});
/**
 * Internal Use.
 * 
 *   Chain of responsibility.
 * 
 *   Takes the current state and a collection of validators `fs`
 * 
 *   Will run all validators against `old-state` and eventually return a vector with the result - the errors map - and the new state - the original map augmented with the errors map.
 * 
 *   See also `wrap`
 */
bouncer.core.wrap_chain = (function bouncer$core$wrap_chain(var_args){
var args__7192__auto__ = [];
var len__7185__auto___15033 = arguments.length;
var i__7186__auto___15034 = (0);
while(true){
if((i__7186__auto___15034 < len__7185__auto___15033)){
args__7192__auto__.push((arguments[i__7186__auto___15034]));

var G__15035 = (i__7186__auto___15034 + (1));
i__7186__auto___15034 = G__15035;
continue;
} else {
}
break;
}

var argseq__7193__auto__ = ((((2) < args__7192__auto__.length))?(new cljs.core.IndexedSeq(args__7192__auto__.slice((2)),(0),null)):null);
return bouncer.core.wrap_chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7193__auto__);
});

bouncer.core.wrap_chain.cljs$core$IFn$_invoke$arity$variadic = (function (old_state,message_fn,fs){
var new_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bouncer.core.wrap,message_fn),old_state,fs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bouncer$core_SLASH_errors.cljs$core$IFn$_invoke$arity$1(new_state),new_state], null);
});

bouncer.core.wrap_chain.cljs$lang$maxFixedArity = (2);

bouncer.core.wrap_chain.cljs$lang$applyTo = (function (seq15030){
var G__15031 = cljs.core.first(seq15030);
var seq15030__$1 = cljs.core.next(seq15030);
var G__15032 = cljs.core.first(seq15030__$1);
var seq15030__$2 = cljs.core.next(seq15030__$1);
return bouncer.core.wrap_chain.cljs$core$IFn$_invoke$arity$variadic(G__15031,G__15032,seq15030__$2);
});
/**
 * Internal use.
 * 
 *   Validates the map m using the validation functions fs.
 * 
 *   Returns a vector where the first element is the map of validation errors if any and the second is the original map (possibly) augmented with the errors map.
 */
bouncer.core.validate_STAR_ = (function bouncer$core$validate_STAR_(message_fn,m,fs){
var G__15041 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,m], null);
var vec__15042 = G__15041;
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15042,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15042,(1),null);
var ret = vec__15042;
var fs__$1 = fs;
var G__15041__$1 = G__15041;
var fs__$2 = fs__$1;
while(true){
var vec__15043 = G__15041__$1;
var errors__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15043,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15043,(1),null);
var ret__$1 = vec__15043;
var fs__$3 = fs__$2;
if(cljs.core.seq(fs__$3)){
var G__15044 = bouncer.core.wrap_chain.cljs$core$IFn$_invoke$arity$variadic(state__$1,message_fn,cljs.core.array_seq([cljs.core.first(fs__$3)], 0));
var G__15045 = cljs.core.rest(fs__$3);
G__15041__$1 = G__15044;
fs__$2 = G__15045;
continue;
} else {
return ret__$1;
}
break;
}
});
/**
 * Use together with `validate`, e.g.:
 * 
 * 
 *    (core/validate core/with-default-messages {}
 *                   :name v/required)
 */
bouncer.core.with_default_messages = (function bouncer$core$with_default_messages(error){
var map__15050 = error;
var map__15050__$1 = ((((!((map__15050 == null)))?((((map__15050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15050):map__15050);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15050__$1,cljs.core.cst$kw$message);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15050__$1,cljs.core.cst$kw$path);
var metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15050__$1,cljs.core.cst$kw$metadata);
var G__15052 = (function (){var or__6116__auto__ = message;
if(cljs.core.truth_(or__6116__auto__)){
return or__6116__auto__;
} else {
return cljs.core.cst$kw$default_DASH_message_DASH_format.cljs$core$IFn$_invoke$arity$1(metadata);
}
})();
var G__15053 = cljs.core.name(cljs.core.peek(path));
return goog.string.format(G__15052,G__15053);
});
/**
 * Takes a
 * 
 *   - `message-fn` (optional) responsible for transforming error metadata into
 *   the validation result (defaults to `with-default-messages`)
 * 
 *   - `m` map to be validated
 * 
 *   - `forms` validations to be performed on the map
 * 
 *   forms can be a single validator set or a sequence of key/value pairs where:
 * 
 *   key   ==> :keyword or [:a :path]
 * 
 *   value ==> validation-function or
 *          validator-set or
 *         [[validation-function args+opts]] or
 *         [validation-function another-validation-function] or
 *         [validation-function [another-validation-function args+opts]]
 * 
 *   e.g.:
 * 
 * 
 *    (core/validate a-map
 *             :name v/required
 *             :age  [v/required
 *                   [v/number :message "age must be a number"]]
 *             [:passport :number] v/positive)
 * 
 * 
 *   Returns a vector where the first element is the map of validation errors if
 *   any and the second is the original map (possibly) augmented with the errors
 *   map.
 * 
 *   See also `defvalidator`
 */
bouncer.core.validate = (function bouncer$core$validate(var_args){
var args__7192__auto__ = [];
var len__7185__auto___15057 = arguments.length;
var i__7186__auto___15058 = (0);
while(true){
if((i__7186__auto___15058 < len__7185__auto___15057)){
args__7192__auto__.push((arguments[i__7186__auto___15058]));

var G__15059 = (i__7186__auto___15058 + (1));
i__7186__auto___15058 = G__15059;
continue;
} else {
}
break;
}

var argseq__7193__auto__ = ((((0) < args__7192__auto__.length))?(new cljs.core.IndexedSeq(args__7192__auto__.slice((0)),(0),null)):null);
return bouncer.core.validate.cljs$core$IFn$_invoke$arity$variadic(argseq__7193__auto__);
});

bouncer.core.validate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__15055 = ((cljs.core.fn_QMARK_(cljs.core.first(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.next(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.core.with_default_messages,args], null));
var message_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15055,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15055,(1),null);
var vec__15056 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args__$1),cljs.core.next(args__$1)], null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15056,(0),null);
var forms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15056,(1),null);
return bouncer.core.validate_STAR_(message_fn,m,bouncer.core.build_steps(forms));
});

bouncer.core.validate.cljs$lang$maxFixedArity = (0);

bouncer.core.validate.cljs$lang$applyTo = (function (seq15054){
return bouncer.core.validate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15054));
});
/**
 * Takes a map and one or more validation functions with semantics provided by "validate". Returns true if the map passes all validations. False otherwise.
 */
bouncer.core.valid_QMARK_ = (function bouncer$core$valid_QMARK_(var_args){
var args__7192__auto__ = [];
var len__7185__auto___15061 = arguments.length;
var i__7186__auto___15062 = (0);
while(true){
if((i__7186__auto___15062 < len__7185__auto___15061)){
args__7192__auto__.push((arguments[i__7186__auto___15062]));

var G__15063 = (i__7186__auto___15062 + (1));
i__7186__auto___15062 = G__15063;
continue;
} else {
}
break;
}

var argseq__7193__auto__ = ((((0) < args__7192__auto__.length))?(new cljs.core.IndexedSeq(args__7192__auto__.slice((0)),(0),null)):null);
return bouncer.core.valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__7193__auto__);
});

bouncer.core.valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.empty_QMARK_(cljs.core.first(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bouncer.core.validate,args)));
});

bouncer.core.valid_QMARK_.cljs$lang$maxFixedArity = (0);

bouncer.core.valid_QMARK_.cljs$lang$applyTo = (function (seq15060){
return bouncer.core.valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15060));
});
