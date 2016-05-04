// Compiled by ClojureScript 1.8.40 {}
goog.provide('bouncer.core');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
bouncer.core.build_multi_step = (function bouncer$core$build_multi_step(var_args){
var args38362 = [];
var len__30669__auto___38368 = arguments.length;
var i__30670__auto___38369 = (0);
while(true){
if((i__30670__auto___38369 < len__30669__auto___38368)){
args38362.push((arguments[i__30670__auto___38369]));

var G__38370 = (i__30670__auto___38369 + (1));
i__30670__auto___38369 = G__38370;
continue;
} else {
}
break;
}

var G__38364 = args38362.length;
switch (G__38364) {
case 2:
return bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38362.length)].join('')));

}
});

bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$2 = (function (key_or_vec,fn_vec){
return bouncer.core.build_multi_step.call(null,key_or_vec,fn_vec,cljs.core.PersistentVector.EMPTY);
});

bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$3 = (function (key_or_vec,p__38365,acc){
while(true){
var vec__38366 = p__38365;
var f_or_list = cljs.core.nth.call(null,vec__38366,(0),null);
var rest = cljs.core.nthnext.call(null,vec__38366,(1));
if(cljs.core.not.call(null,f_or_list)){
return acc;
} else {
if(cljs.core.sequential_QMARK_.call(null,f_or_list)){
var vec__38367 = f_or_list;
var f = cljs.core.nth.call(null,vec__38367,(0),null);
var opts = cljs.core.nthnext.call(null,vec__38367,(1));
var G__38372 = key_or_vec;
var G__38373 = rest;
var G__38374 = cljs.core.conj.call(null,acc,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,key_or_vec], null),opts));
key_or_vec = G__38372;
p__38365 = G__38373;
acc = G__38374;
continue;
} else {
var G__38375 = key_or_vec;
var G__38376 = rest;
var G__38377 = cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f_or_list,key_or_vec], null));
key_or_vec = G__38375;
p__38365 = G__38376;
acc = G__38377;
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
return cljs.core.mapcat.call(null,((function (parent_key__$1){
return (function (p__38380){
var vec__38381 = p__38380;
var key = cljs.core.nth.call(null,vec__38381,(0),null);
var validations = cljs.core.nth.call(null,vec__38381,(1),null);
if(cljs.core.vector_QMARK_.call(null,key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.vector,cljs.core.concat.call(null,parent_key__$1,key)),validations], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.vector,cljs.core.concat.call(null,parent_key__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null))),validations], null);
}
});})(parent_key__$1))
,validations_map);
});
bouncer.core.build_steps = (function bouncer$core$build_steps(p__38382){
var vec__38386 = p__38382;
var head = cljs.core.nth.call(null,vec__38386,(0),null);
var tail = cljs.core.nthnext.call(null,vec__38386,(1));
var forms = vec__38386;
var forms__$1 = ((cljs.core.map_QMARK_.call(null,head))?cljs.core.vec.call(null,cljs.core.mapcat.call(null,cljs.core.identity,head)):forms);
return cljs.core.reduce.call(null,((function (forms__$1,vec__38386,head,tail,forms){
return (function (acc,p__38387){
var vec__38388 = p__38387;
var key_or_vec = cljs.core.nth.call(null,vec__38388,(0),null);
var sym_or_coll = cljs.core.nth.call(null,vec__38388,(1),null);
var rule = vec__38388;
if(cljs.core.vector_QMARK_.call(null,sym_or_coll)){
return cljs.core.concat.call(null,acc,bouncer.core.build_multi_step.call(null,key_or_vec,sym_or_coll));
} else {
if(cljs.core.map_QMARK_.call(null,sym_or_coll)){
return cljs.core.concat.call(null,acc,bouncer$core$build_steps.call(null,bouncer.core.merge_path.call(null,key_or_vec,sym_or_coll)));
} else {
return cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym_or_coll,key_or_vec], null));

}
}
});})(forms__$1,vec__38386,head,tail,forms))
,cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),forms__$1));
});
bouncer.core.pre_condition_met_QMARK_ = (function bouncer$core$pre_condition_met_QMARK_(pre_fn,map){
var or__29600__auto__ = (pre_fn == null);
if(or__29600__auto__){
return or__29600__auto__;
} else {
return pre_fn.call(null,map);
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
bouncer.core.wrap = (function bouncer$core$wrap(message_fn,acc,p__38390){
var vec__38397 = p__38390;
var pred = cljs.core.nth.call(null,vec__38397,(0),null);
var k = cljs.core.nth.call(null,vec__38397,(1),null);
var args = cljs.core.nthnext.call(null,vec__38397,(2));
var k__$1 = ((cljs.core.vector_QMARK_.call(null,k))?k:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var error_path = cljs.core.cons.call(null,new cljs.core.Keyword("bouncer.core","errors","bouncer.core/errors",-444562289),k__$1);
var map__38398 = cljs.core.meta.call(null,pred);
var map__38398__$1 = ((((!((map__38398 == null)))?((((map__38398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38398):map__38398);
var metadata = map__38398__$1;
var optional = cljs.core.get.call(null,map__38398__$1,new cljs.core.Keyword(null,"optional","optional",2053951509),false);
var default_message_format = cljs.core.get.call(null,map__38398__$1,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"Custom validation failed for %s");
var meta_with_defaults = cljs.core.merge.call(null,metadata,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),default_message_format,new cljs.core.Keyword(null,"optional","optional",2053951509),optional], null));
var vec__38399 = cljs.core.split_with.call(null,cljs.core.complement.call(null,cljs.core.keyword_QMARK_),args);
var args__$1 = cljs.core.nth.call(null,vec__38399,(0),null);
var opts = cljs.core.nth.call(null,vec__38399,(1),null);
var map__38400 = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var map__38400__$1 = ((((!((map__38400 == null)))?((((map__38400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38400):map__38400);
var message = cljs.core.get.call(null,map__38400__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var pre = cljs.core.get.call(null,map__38400__$1,new cljs.core.Keyword(null,"pre","pre",2118456869));
var pred_subject = cljs.core.get_in.call(null,acc,k__$1);
if(cljs.core.truth_(bouncer.core.pre_condition_met_QMARK_.call(null,pre,acc))){
if(cljs.core.truth_((function (){var or__29600__auto__ = (function (){var and__29588__auto__ = optional;
if(cljs.core.truth_(and__29588__auto__)){
return (pred_subject == null);
} else {
return and__29588__auto__;
}
})();
if(cljs.core.truth_(or__29600__auto__)){
return or__29600__auto__;
} else {
var or__29600__auto____$1 = !(cljs.core.empty_QMARK_.call(null,cljs.core.get_in.call(null,acc,error_path)));
if(or__29600__auto____$1){
return or__29600__auto____$1;
} else {
return cljs.core.apply.call(null,pred,pred_subject,args__$1);
}
}
})())){
return acc;
} else {
return cljs.core.update_in.call(null,acc,error_path,((function (k__$1,error_path,map__38398,map__38398__$1,metadata,optional,default_message_format,meta_with_defaults,vec__38399,args__$1,opts,map__38400,map__38400__$1,message,pre,pred_subject,vec__38397,pred,k,args){
return (function (p1__38389_SHARP_){
return cljs.core.conj.call(null,p1__38389_SHARP_,message_fn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),k__$1,new cljs.core.Keyword(null,"value","value",305978217),pred_subject,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.seq.call(null,args__$1),new cljs.core.Keyword(null,"metadata","metadata",1799301597),meta_with_defaults,new cljs.core.Keyword(null,"message","message",-406056002),message], null)));
});})(k__$1,error_path,map__38398,map__38398__$1,metadata,optional,default_message_format,meta_with_defaults,vec__38399,args__$1,opts,map__38400,map__38400__$1,message,pre,pred_subject,vec__38397,pred,k,args))
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
var args__30676__auto__ = [];
var len__30669__auto___38406 = arguments.length;
var i__30670__auto___38407 = (0);
while(true){
if((i__30670__auto___38407 < len__30669__auto___38406)){
args__30676__auto__.push((arguments[i__30670__auto___38407]));

var G__38408 = (i__30670__auto___38407 + (1));
i__30670__auto___38407 = G__38408;
continue;
} else {
}
break;
}

var argseq__30677__auto__ = ((((2) < args__30676__auto__.length))?(new cljs.core.IndexedSeq(args__30676__auto__.slice((2)),(0),null)):null);
return bouncer.core.wrap_chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30677__auto__);
});

bouncer.core.wrap_chain.cljs$core$IFn$_invoke$arity$variadic = (function (old_state,message_fn,fs){
var new_state = cljs.core.reduce.call(null,cljs.core.partial.call(null,bouncer.core.wrap,message_fn),old_state,fs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bouncer.core","errors","bouncer.core/errors",-444562289).cljs$core$IFn$_invoke$arity$1(new_state),new_state], null);
});

bouncer.core.wrap_chain.cljs$lang$maxFixedArity = (2);

bouncer.core.wrap_chain.cljs$lang$applyTo = (function (seq38403){
var G__38404 = cljs.core.first.call(null,seq38403);
var seq38403__$1 = cljs.core.next.call(null,seq38403);
var G__38405 = cljs.core.first.call(null,seq38403__$1);
var seq38403__$2 = cljs.core.next.call(null,seq38403__$1);
return bouncer.core.wrap_chain.cljs$core$IFn$_invoke$arity$variadic(G__38404,G__38405,seq38403__$2);
});
/**
 * Internal use.
 * 
 *   Validates the map m using the validation functions fs.
 * 
 *   Returns a vector where the first element is the map of validation errors if any and the second is the original map (possibly) augmented with the errors map.
 */
bouncer.core.validate_STAR_ = (function bouncer$core$validate_STAR_(message_fn,m,fs){
var G__38414 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,m], null);
var vec__38415 = G__38414;
var errors = cljs.core.nth.call(null,vec__38415,(0),null);
var state = cljs.core.nth.call(null,vec__38415,(1),null);
var ret = vec__38415;
var fs__$1 = fs;
var G__38414__$1 = G__38414;
var fs__$2 = fs__$1;
while(true){
var vec__38416 = G__38414__$1;
var errors__$1 = cljs.core.nth.call(null,vec__38416,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__38416,(1),null);
var ret__$1 = vec__38416;
var fs__$3 = fs__$2;
if(cljs.core.seq.call(null,fs__$3)){
var G__38417 = bouncer.core.wrap_chain.call(null,state__$1,message_fn,cljs.core.first.call(null,fs__$3));
var G__38418 = cljs.core.rest.call(null,fs__$3);
G__38414__$1 = G__38417;
fs__$2 = G__38418;
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
var map__38421 = error;
var map__38421__$1 = ((((!((map__38421 == null)))?((((map__38421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38421):map__38421);
var message = cljs.core.get.call(null,map__38421__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var path = cljs.core.get.call(null,map__38421__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var metadata = cljs.core.get.call(null,map__38421__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));
return goog.string.format((function (){var or__29600__auto__ = message;
if(cljs.core.truth_(or__29600__auto__)){
return or__29600__auto__;
} else {
return new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141).cljs$core$IFn$_invoke$arity$1(metadata);
}
})(),cljs.core.name.call(null,cljs.core.peek.call(null,path)));
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
var args__30676__auto__ = [];
var len__30669__auto___38426 = arguments.length;
var i__30670__auto___38427 = (0);
while(true){
if((i__30670__auto___38427 < len__30669__auto___38426)){
args__30676__auto__.push((arguments[i__30670__auto___38427]));

var G__38428 = (i__30670__auto___38427 + (1));
i__30670__auto___38427 = G__38428;
continue;
} else {
}
break;
}

var argseq__30677__auto__ = ((((0) < args__30676__auto__.length))?(new cljs.core.IndexedSeq(args__30676__auto__.slice((0)),(0),null)):null);
return bouncer.core.validate.cljs$core$IFn$_invoke$arity$variadic(argseq__30677__auto__);
});

bouncer.core.validate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__38424 = ((cljs.core.fn_QMARK_.call(null,cljs.core.first.call(null,args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.next.call(null,args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.core.with_default_messages,args], null));
var message_fn = cljs.core.nth.call(null,vec__38424,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__38424,(1),null);
var vec__38425 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__$1),cljs.core.next.call(null,args__$1)], null);
var m = cljs.core.nth.call(null,vec__38425,(0),null);
var forms = cljs.core.nth.call(null,vec__38425,(1),null);
return bouncer.core.validate_STAR_.call(null,message_fn,m,bouncer.core.build_steps.call(null,forms));
});

bouncer.core.validate.cljs$lang$maxFixedArity = (0);

bouncer.core.validate.cljs$lang$applyTo = (function (seq38423){
return bouncer.core.validate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38423));
});
/**
 * Takes a map and one or more validation functions with semantics provided by "validate". Returns true if the map passes all validations. False otherwise.
 */
bouncer.core.valid_QMARK_ = (function bouncer$core$valid_QMARK_(var_args){
var args__30676__auto__ = [];
var len__30669__auto___38430 = arguments.length;
var i__30670__auto___38431 = (0);
while(true){
if((i__30670__auto___38431 < len__30669__auto___38430)){
args__30676__auto__.push((arguments[i__30670__auto___38431]));

var G__38432 = (i__30670__auto___38431 + (1));
i__30670__auto___38431 = G__38432;
continue;
} else {
}
break;
}

var argseq__30677__auto__ = ((((0) < args__30676__auto__.length))?(new cljs.core.IndexedSeq(args__30676__auto__.slice((0)),(0),null)):null);
return bouncer.core.valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__30677__auto__);
});

bouncer.core.valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.empty_QMARK_.call(null,cljs.core.first.call(null,cljs.core.apply.call(null,bouncer.core.validate,args)));
});

bouncer.core.valid_QMARK_.cljs$lang$maxFixedArity = (0);

bouncer.core.valid_QMARK_.cljs$lang$applyTo = (function (seq38429){
return bouncer.core.valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38429));
});
