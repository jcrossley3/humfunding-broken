// Compiled by ClojureScript 1.8.40 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__38039 = cljs.core._EQ_;
var expr__38040 = (function (){var or__29339__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e38043){if((e38043 instanceof Error)){
var e = e38043;
return false;
} else {
throw e38043;

}
}})();
if(cljs.core.truth_(or__29339__auto__)){
return or__29339__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__38039.call(null,"true",expr__38040))){
return true;
} else {
if(cljs.core.truth_(pred__38039.call(null,"false",expr__38040))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__38040)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e38045){if((e38045 instanceof Error)){
var e = e38045;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e38045;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__30415__auto__ = [];
var len__30408__auto___38047 = arguments.length;
var i__30409__auto___38048 = (0);
while(true){
if((i__30409__auto___38048 < len__30408__auto___38047)){
args__30415__auto__.push((arguments[i__30409__auto___38048]));

var G__38049 = (i__30409__auto___38048 + (1));
i__30409__auto___38048 = G__38049;
continue;
} else {
}
break;
}

var argseq__30416__auto__ = ((((0) < args__30415__auto__.length))?(new cljs.core.IndexedSeq(args__30415__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__30416__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq38046){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38046));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38050){
var map__38053 = p__38050;
var map__38053__$1 = ((((!((map__38053 == null)))?((((map__38053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38053):map__38053);
var message = cljs.core.get.call(null,map__38053__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38053__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__29339__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__29339__auto__)){
return or__29339__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__29327__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__29327__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__29327__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__33763__auto___38215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33763__auto___38215,ch){
return (function (){
var f__33764__auto__ = (function (){var switch__33651__auto__ = ((function (c__33763__auto___38215,ch){
return (function (state_38184){
var state_val_38185 = (state_38184[(1)]);
if((state_val_38185 === (7))){
var inst_38180 = (state_38184[(2)]);
var state_38184__$1 = state_38184;
var statearr_38186_38216 = state_38184__$1;
(statearr_38186_38216[(2)] = inst_38180);

(statearr_38186_38216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38185 === (1))){
var state_38184__$1 = state_38184;
var statearr_38187_38217 = state_38184__$1;
(statearr_38187_38217[(2)] = null);

(statearr_38187_38217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38185 === (4))){
var inst_38137 = (state_38184[(7)]);
var inst_38137__$1 = (state_38184[(2)]);
var state_38184__$1 = (function (){var statearr_38188 = state_38184;
(statearr_38188[(7)] = inst_38137__$1);

return statearr_38188;
})();
if(cljs.core.truth_(inst_38137__$1)){
var statearr_38189_38218 = state_38184__$1;
(statearr_38189_38218[(1)] = (5));

} else {
var statearr_38190_38219 = state_38184__$1;
(statearr_38190_38219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38185 === (15))){
var inst_38144 = (state_38184[(8)]);
var inst_38159 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38144);
var inst_38160 = cljs.core.first.call(null,inst_38159);
var inst_38161 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38160);
var inst_38162 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_38161)].join('');
var inst_38163 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38162);
var state_38184__$1 = state_38184;
var statearr_38191_38220 = state_38184__$1;
(statearr_38191_38220[(2)] = inst_38163);

(statearr_38191_38220[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38185 === (13))){
var inst_38168 = (state_38184[(2)]);
var state_38184__$1 = state_38184;
var statearr_38192_38221 = state_38184__$1;
(statearr_38192_38221[(2)] = inst_38168);

(statearr_38192_38221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38185 === (6))){
var state_38184__$1 = state_38184;
var statearr_38193_38222 = state_38184__$1;
(statearr_38193_38222[(2)] = null);

(statearr_38193_38222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38185 === (17))){
var inst_38166 = (state_38184[(2)]);
var state_38184__$1 = state_38184;
var statearr_38194_38223 = state_38184__$1;
(statearr_38194_38223[(2)] = inst_38166);

(statearr_38194_38223[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38185 === (3))){
var inst_38182 = (state_38184[(2)]);
var state_38184__$1 = state_38184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38184__$1,inst_38182);
} else {
if((state_val_38185 === (12))){
var inst_38143 = (state_38184[(9)]);
var inst_38157 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38143,opts);
var state_38184__$1 = state_38184;
if(cljs.core.truth_(inst_38157)){
var statearr_38195_38224 = state_38184__$1;
(statearr_38195_38224[(1)] = (15));

} else {
var statearr_38196_38225 = state_38184__$1;
(statearr_38196_38225[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38185 === (2))){
var state_38184__$1 = state_38184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38184__$1,(4),ch);
} else {
if((state_val_38185 === (11))){
var inst_38144 = (state_38184[(8)]);
var inst_38149 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38150 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38144);
var inst_38151 = cljs.core.async.timeout.call(null,(1000));
var inst_38152 = [inst_38150,inst_38151];
var inst_38153 = (new cljs.core.PersistentVector(null,2,(5),inst_38149,inst_38152,null));
var state_38184__$1 = state_38184;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38184__$1,(14),inst_38153);
} else {
if((state_val_38185 === (9))){
var inst_38144 = (state_38184[(8)]);
var inst_38170 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38171 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38144);
var inst_38172 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38171);
var inst_38173 = [cljs.core.str("Not loading: "),cljs.core.str(inst_38172)].join('');
var inst_38174 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38173);
var state_38184__$1 = (function (){var statearr_38197 = state_38184;
(statearr_38197[(10)] = inst_38170);

return statearr_38197;
})();
var statearr_38198_38226 = state_38184__$1;
(statearr_38198_38226[(2)] = inst_38174);

(statearr_38198_38226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38185 === (5))){
var inst_38137 = (state_38184[(7)]);
var inst_38139 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38140 = (new cljs.core.PersistentArrayMap(null,2,inst_38139,null));
var inst_38141 = (new cljs.core.PersistentHashSet(null,inst_38140,null));
var inst_38142 = figwheel.client.focus_msgs.call(null,inst_38141,inst_38137);
var inst_38143 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38142);
var inst_38144 = cljs.core.first.call(null,inst_38142);
var inst_38145 = figwheel.client.autoload_QMARK_.call(null);
var state_38184__$1 = (function (){var statearr_38199 = state_38184;
(statearr_38199[(9)] = inst_38143);

(statearr_38199[(8)] = inst_38144);

return statearr_38199;
})();
if(cljs.core.truth_(inst_38145)){
var statearr_38200_38227 = state_38184__$1;
(statearr_38200_38227[(1)] = (8));

} else {
var statearr_38201_38228 = state_38184__$1;
(statearr_38201_38228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38185 === (14))){
var inst_38155 = (state_38184[(2)]);
var state_38184__$1 = state_38184;
var statearr_38202_38229 = state_38184__$1;
(statearr_38202_38229[(2)] = inst_38155);

(statearr_38202_38229[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38185 === (16))){
var state_38184__$1 = state_38184;
var statearr_38203_38230 = state_38184__$1;
(statearr_38203_38230[(2)] = null);

(statearr_38203_38230[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38185 === (10))){
var inst_38176 = (state_38184[(2)]);
var state_38184__$1 = (function (){var statearr_38204 = state_38184;
(statearr_38204[(11)] = inst_38176);

return statearr_38204;
})();
var statearr_38205_38231 = state_38184__$1;
(statearr_38205_38231[(2)] = null);

(statearr_38205_38231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38185 === (8))){
var inst_38143 = (state_38184[(9)]);
var inst_38147 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38143,opts);
var state_38184__$1 = state_38184;
if(cljs.core.truth_(inst_38147)){
var statearr_38206_38232 = state_38184__$1;
(statearr_38206_38232[(1)] = (11));

} else {
var statearr_38207_38233 = state_38184__$1;
(statearr_38207_38233[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33763__auto___38215,ch))
;
return ((function (switch__33651__auto__,c__33763__auto___38215,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33652__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33652__auto____0 = (function (){
var statearr_38211 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38211[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33652__auto__);

(statearr_38211[(1)] = (1));

return statearr_38211;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33652__auto____1 = (function (state_38184){
while(true){
var ret_value__33653__auto__ = (function (){try{while(true){
var result__33654__auto__ = switch__33651__auto__.call(null,state_38184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33654__auto__;
}
break;
}
}catch (e38212){if((e38212 instanceof Object)){
var ex__33655__auto__ = e38212;
var statearr_38213_38234 = state_38184;
(statearr_38213_38234[(5)] = ex__33655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38235 = state_38184;
state_38184 = G__38235;
continue;
} else {
return ret_value__33653__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33652__auto__ = function(state_38184){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33652__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33652__auto____1.call(this,state_38184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33652__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33652__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33652__auto__;
})()
;})(switch__33651__auto__,c__33763__auto___38215,ch))
})();
var state__33765__auto__ = (function (){var statearr_38214 = f__33764__auto__.call(null);
(statearr_38214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33763__auto___38215);

return statearr_38214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33765__auto__);
});})(c__33763__auto___38215,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38236_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38236_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38243 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38243){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_38241 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_38242 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_38242;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_38241;
}}catch (e38240){if((e38240 instanceof Error)){
var e = e38240;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38243], null));
} else {
var e = e38240;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_38243))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38244){
var map__38251 = p__38244;
var map__38251__$1 = ((((!((map__38251 == null)))?((((map__38251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38251):map__38251);
var opts = map__38251__$1;
var build_id = cljs.core.get.call(null,map__38251__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38251,map__38251__$1,opts,build_id){
return (function (p__38253){
var vec__38254 = p__38253;
var map__38255 = cljs.core.nth.call(null,vec__38254,(0),null);
var map__38255__$1 = ((((!((map__38255 == null)))?((((map__38255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38255):map__38255);
var msg = map__38255__$1;
var msg_name = cljs.core.get.call(null,map__38255__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__38254,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38254,map__38255,map__38255__$1,msg,msg_name,_,map__38251,map__38251__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38254,map__38255,map__38255__$1,msg,msg_name,_,map__38251,map__38251__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38251,map__38251__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38261){
var vec__38262 = p__38261;
var map__38263 = cljs.core.nth.call(null,vec__38262,(0),null);
var map__38263__$1 = ((((!((map__38263 == null)))?((((map__38263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38263):map__38263);
var msg = map__38263__$1;
var msg_name = cljs.core.get.call(null,map__38263__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__38262,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38265){
var map__38275 = p__38265;
var map__38275__$1 = ((((!((map__38275 == null)))?((((map__38275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38275):map__38275);
var on_compile_warning = cljs.core.get.call(null,map__38275__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38275__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38275,map__38275__$1,on_compile_warning,on_compile_fail){
return (function (p__38277){
var vec__38278 = p__38277;
var map__38279 = cljs.core.nth.call(null,vec__38278,(0),null);
var map__38279__$1 = ((((!((map__38279 == null)))?((((map__38279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38279):map__38279);
var msg = map__38279__$1;
var msg_name = cljs.core.get.call(null,map__38279__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__38278,(1));
var pred__38281 = cljs.core._EQ_;
var expr__38282 = msg_name;
if(cljs.core.truth_(pred__38281.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38282))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38281.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38282))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38275,map__38275__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__33763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33763__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33764__auto__ = (function (){var switch__33651__auto__ = ((function (c__33763__auto__,msg_hist,msg_names,msg){
return (function (state_38498){
var state_val_38499 = (state_38498[(1)]);
if((state_val_38499 === (7))){
var inst_38422 = (state_38498[(2)]);
var state_38498__$1 = state_38498;
if(cljs.core.truth_(inst_38422)){
var statearr_38500_38546 = state_38498__$1;
(statearr_38500_38546[(1)] = (8));

} else {
var statearr_38501_38547 = state_38498__$1;
(statearr_38501_38547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (20))){
var inst_38492 = (state_38498[(2)]);
var state_38498__$1 = state_38498;
var statearr_38502_38548 = state_38498__$1;
(statearr_38502_38548[(2)] = inst_38492);

(statearr_38502_38548[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (27))){
var inst_38488 = (state_38498[(2)]);
var state_38498__$1 = state_38498;
var statearr_38503_38549 = state_38498__$1;
(statearr_38503_38549[(2)] = inst_38488);

(statearr_38503_38549[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (1))){
var inst_38415 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38498__$1 = state_38498;
if(cljs.core.truth_(inst_38415)){
var statearr_38504_38550 = state_38498__$1;
(statearr_38504_38550[(1)] = (2));

} else {
var statearr_38505_38551 = state_38498__$1;
(statearr_38505_38551[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (24))){
var inst_38490 = (state_38498[(2)]);
var state_38498__$1 = state_38498;
var statearr_38506_38552 = state_38498__$1;
(statearr_38506_38552[(2)] = inst_38490);

(statearr_38506_38552[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (4))){
var inst_38496 = (state_38498[(2)]);
var state_38498__$1 = state_38498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38498__$1,inst_38496);
} else {
if((state_val_38499 === (15))){
var inst_38494 = (state_38498[(2)]);
var state_38498__$1 = state_38498;
var statearr_38507_38553 = state_38498__$1;
(statearr_38507_38553[(2)] = inst_38494);

(statearr_38507_38553[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (21))){
var inst_38453 = (state_38498[(2)]);
var state_38498__$1 = state_38498;
var statearr_38508_38554 = state_38498__$1;
(statearr_38508_38554[(2)] = inst_38453);

(statearr_38508_38554[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (31))){
var inst_38477 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38498__$1 = state_38498;
if(cljs.core.truth_(inst_38477)){
var statearr_38509_38555 = state_38498__$1;
(statearr_38509_38555[(1)] = (34));

} else {
var statearr_38510_38556 = state_38498__$1;
(statearr_38510_38556[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (32))){
var inst_38486 = (state_38498[(2)]);
var state_38498__$1 = state_38498;
var statearr_38511_38557 = state_38498__$1;
(statearr_38511_38557[(2)] = inst_38486);

(statearr_38511_38557[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (33))){
var inst_38475 = (state_38498[(2)]);
var state_38498__$1 = state_38498;
var statearr_38512_38558 = state_38498__$1;
(statearr_38512_38558[(2)] = inst_38475);

(statearr_38512_38558[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (13))){
var inst_38436 = figwheel.client.heads_up.clear.call(null);
var state_38498__$1 = state_38498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38498__$1,(16),inst_38436);
} else {
if((state_val_38499 === (22))){
var inst_38457 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38458 = figwheel.client.heads_up.append_message.call(null,inst_38457);
var state_38498__$1 = state_38498;
var statearr_38513_38559 = state_38498__$1;
(statearr_38513_38559[(2)] = inst_38458);

(statearr_38513_38559[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (36))){
var inst_38484 = (state_38498[(2)]);
var state_38498__$1 = state_38498;
var statearr_38514_38560 = state_38498__$1;
(statearr_38514_38560[(2)] = inst_38484);

(statearr_38514_38560[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (29))){
var inst_38468 = (state_38498[(2)]);
var state_38498__$1 = state_38498;
var statearr_38515_38561 = state_38498__$1;
(statearr_38515_38561[(2)] = inst_38468);

(statearr_38515_38561[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (6))){
var inst_38417 = (state_38498[(7)]);
var state_38498__$1 = state_38498;
var statearr_38516_38562 = state_38498__$1;
(statearr_38516_38562[(2)] = inst_38417);

(statearr_38516_38562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (28))){
var inst_38464 = (state_38498[(2)]);
var inst_38465 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38466 = figwheel.client.heads_up.display_warning.call(null,inst_38465);
var state_38498__$1 = (function (){var statearr_38517 = state_38498;
(statearr_38517[(8)] = inst_38464);

return statearr_38517;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38498__$1,(29),inst_38466);
} else {
if((state_val_38499 === (25))){
var inst_38462 = figwheel.client.heads_up.clear.call(null);
var state_38498__$1 = state_38498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38498__$1,(28),inst_38462);
} else {
if((state_val_38499 === (34))){
var inst_38479 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38498__$1 = state_38498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38498__$1,(37),inst_38479);
} else {
if((state_val_38499 === (17))){
var inst_38444 = (state_38498[(2)]);
var state_38498__$1 = state_38498;
var statearr_38518_38563 = state_38498__$1;
(statearr_38518_38563[(2)] = inst_38444);

(statearr_38518_38563[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (3))){
var inst_38434 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38498__$1 = state_38498;
if(cljs.core.truth_(inst_38434)){
var statearr_38519_38564 = state_38498__$1;
(statearr_38519_38564[(1)] = (13));

} else {
var statearr_38520_38565 = state_38498__$1;
(statearr_38520_38565[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (12))){
var inst_38430 = (state_38498[(2)]);
var state_38498__$1 = state_38498;
var statearr_38521_38566 = state_38498__$1;
(statearr_38521_38566[(2)] = inst_38430);

(statearr_38521_38566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (2))){
var inst_38417 = (state_38498[(7)]);
var inst_38417__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38498__$1 = (function (){var statearr_38522 = state_38498;
(statearr_38522[(7)] = inst_38417__$1);

return statearr_38522;
})();
if(cljs.core.truth_(inst_38417__$1)){
var statearr_38523_38567 = state_38498__$1;
(statearr_38523_38567[(1)] = (5));

} else {
var statearr_38524_38568 = state_38498__$1;
(statearr_38524_38568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (23))){
var inst_38460 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38498__$1 = state_38498;
if(cljs.core.truth_(inst_38460)){
var statearr_38525_38569 = state_38498__$1;
(statearr_38525_38569[(1)] = (25));

} else {
var statearr_38526_38570 = state_38498__$1;
(statearr_38526_38570[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (35))){
var state_38498__$1 = state_38498;
var statearr_38527_38571 = state_38498__$1;
(statearr_38527_38571[(2)] = null);

(statearr_38527_38571[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (19))){
var inst_38455 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38498__$1 = state_38498;
if(cljs.core.truth_(inst_38455)){
var statearr_38528_38572 = state_38498__$1;
(statearr_38528_38572[(1)] = (22));

} else {
var statearr_38529_38573 = state_38498__$1;
(statearr_38529_38573[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (11))){
var inst_38426 = (state_38498[(2)]);
var state_38498__$1 = state_38498;
var statearr_38530_38574 = state_38498__$1;
(statearr_38530_38574[(2)] = inst_38426);

(statearr_38530_38574[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (9))){
var inst_38428 = figwheel.client.heads_up.clear.call(null);
var state_38498__$1 = state_38498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38498__$1,(12),inst_38428);
} else {
if((state_val_38499 === (5))){
var inst_38419 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38498__$1 = state_38498;
var statearr_38531_38575 = state_38498__$1;
(statearr_38531_38575[(2)] = inst_38419);

(statearr_38531_38575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (14))){
var inst_38446 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38498__$1 = state_38498;
if(cljs.core.truth_(inst_38446)){
var statearr_38532_38576 = state_38498__$1;
(statearr_38532_38576[(1)] = (18));

} else {
var statearr_38533_38577 = state_38498__$1;
(statearr_38533_38577[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (26))){
var inst_38470 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38498__$1 = state_38498;
if(cljs.core.truth_(inst_38470)){
var statearr_38534_38578 = state_38498__$1;
(statearr_38534_38578[(1)] = (30));

} else {
var statearr_38535_38579 = state_38498__$1;
(statearr_38535_38579[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (16))){
var inst_38438 = (state_38498[(2)]);
var inst_38439 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38440 = figwheel.client.format_messages.call(null,inst_38439);
var inst_38441 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38442 = figwheel.client.heads_up.display_error.call(null,inst_38440,inst_38441);
var state_38498__$1 = (function (){var statearr_38536 = state_38498;
(statearr_38536[(9)] = inst_38438);

return statearr_38536;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38498__$1,(17),inst_38442);
} else {
if((state_val_38499 === (30))){
var inst_38472 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38473 = figwheel.client.heads_up.display_warning.call(null,inst_38472);
var state_38498__$1 = state_38498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38498__$1,(33),inst_38473);
} else {
if((state_val_38499 === (10))){
var inst_38432 = (state_38498[(2)]);
var state_38498__$1 = state_38498;
var statearr_38537_38580 = state_38498__$1;
(statearr_38537_38580[(2)] = inst_38432);

(statearr_38537_38580[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (18))){
var inst_38448 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38449 = figwheel.client.format_messages.call(null,inst_38448);
var inst_38450 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38451 = figwheel.client.heads_up.display_error.call(null,inst_38449,inst_38450);
var state_38498__$1 = state_38498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38498__$1,(21),inst_38451);
} else {
if((state_val_38499 === (37))){
var inst_38481 = (state_38498[(2)]);
var state_38498__$1 = state_38498;
var statearr_38538_38581 = state_38498__$1;
(statearr_38538_38581[(2)] = inst_38481);

(statearr_38538_38581[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38499 === (8))){
var inst_38424 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38498__$1 = state_38498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38498__$1,(11),inst_38424);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33763__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33651__auto__,c__33763__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33652__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33652__auto____0 = (function (){
var statearr_38542 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38542[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33652__auto__);

(statearr_38542[(1)] = (1));

return statearr_38542;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33652__auto____1 = (function (state_38498){
while(true){
var ret_value__33653__auto__ = (function (){try{while(true){
var result__33654__auto__ = switch__33651__auto__.call(null,state_38498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33654__auto__;
}
break;
}
}catch (e38543){if((e38543 instanceof Object)){
var ex__33655__auto__ = e38543;
var statearr_38544_38582 = state_38498;
(statearr_38544_38582[(5)] = ex__33655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38583 = state_38498;
state_38498 = G__38583;
continue;
} else {
return ret_value__33653__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33652__auto__ = function(state_38498){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33652__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33652__auto____1.call(this,state_38498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33652__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33652__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33652__auto__;
})()
;})(switch__33651__auto__,c__33763__auto__,msg_hist,msg_names,msg))
})();
var state__33765__auto__ = (function (){var statearr_38545 = f__33764__auto__.call(null);
(statearr_38545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33763__auto__);

return statearr_38545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33765__auto__);
});})(c__33763__auto__,msg_hist,msg_names,msg))
);

return c__33763__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33763__auto___38646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33763__auto___38646,ch){
return (function (){
var f__33764__auto__ = (function (){var switch__33651__auto__ = ((function (c__33763__auto___38646,ch){
return (function (state_38629){
var state_val_38630 = (state_38629[(1)]);
if((state_val_38630 === (1))){
var state_38629__$1 = state_38629;
var statearr_38631_38647 = state_38629__$1;
(statearr_38631_38647[(2)] = null);

(statearr_38631_38647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (2))){
var state_38629__$1 = state_38629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38629__$1,(4),ch);
} else {
if((state_val_38630 === (3))){
var inst_38627 = (state_38629[(2)]);
var state_38629__$1 = state_38629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38629__$1,inst_38627);
} else {
if((state_val_38630 === (4))){
var inst_38617 = (state_38629[(7)]);
var inst_38617__$1 = (state_38629[(2)]);
var state_38629__$1 = (function (){var statearr_38632 = state_38629;
(statearr_38632[(7)] = inst_38617__$1);

return statearr_38632;
})();
if(cljs.core.truth_(inst_38617__$1)){
var statearr_38633_38648 = state_38629__$1;
(statearr_38633_38648[(1)] = (5));

} else {
var statearr_38634_38649 = state_38629__$1;
(statearr_38634_38649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (5))){
var inst_38617 = (state_38629[(7)]);
var inst_38619 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38617);
var state_38629__$1 = state_38629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38629__$1,(8),inst_38619);
} else {
if((state_val_38630 === (6))){
var state_38629__$1 = state_38629;
var statearr_38635_38650 = state_38629__$1;
(statearr_38635_38650[(2)] = null);

(statearr_38635_38650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (7))){
var inst_38625 = (state_38629[(2)]);
var state_38629__$1 = state_38629;
var statearr_38636_38651 = state_38629__$1;
(statearr_38636_38651[(2)] = inst_38625);

(statearr_38636_38651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (8))){
var inst_38621 = (state_38629[(2)]);
var state_38629__$1 = (function (){var statearr_38637 = state_38629;
(statearr_38637[(8)] = inst_38621);

return statearr_38637;
})();
var statearr_38638_38652 = state_38629__$1;
(statearr_38638_38652[(2)] = null);

(statearr_38638_38652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__33763__auto___38646,ch))
;
return ((function (switch__33651__auto__,c__33763__auto___38646,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33652__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33652__auto____0 = (function (){
var statearr_38642 = [null,null,null,null,null,null,null,null,null];
(statearr_38642[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33652__auto__);

(statearr_38642[(1)] = (1));

return statearr_38642;
});
var figwheel$client$heads_up_plugin_$_state_machine__33652__auto____1 = (function (state_38629){
while(true){
var ret_value__33653__auto__ = (function (){try{while(true){
var result__33654__auto__ = switch__33651__auto__.call(null,state_38629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33654__auto__;
}
break;
}
}catch (e38643){if((e38643 instanceof Object)){
var ex__33655__auto__ = e38643;
var statearr_38644_38653 = state_38629;
(statearr_38644_38653[(5)] = ex__33655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38654 = state_38629;
state_38629 = G__38654;
continue;
} else {
return ret_value__33653__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33652__auto__ = function(state_38629){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33652__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33652__auto____1.call(this,state_38629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33652__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33652__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33652__auto__;
})()
;})(switch__33651__auto__,c__33763__auto___38646,ch))
})();
var state__33765__auto__ = (function (){var statearr_38645 = f__33764__auto__.call(null);
(statearr_38645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33763__auto___38646);

return statearr_38645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33765__auto__);
});})(c__33763__auto___38646,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33763__auto__){
return (function (){
var f__33764__auto__ = (function (){var switch__33651__auto__ = ((function (c__33763__auto__){
return (function (state_38675){
var state_val_38676 = (state_38675[(1)]);
if((state_val_38676 === (1))){
var inst_38670 = cljs.core.async.timeout.call(null,(3000));
var state_38675__$1 = state_38675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38675__$1,(2),inst_38670);
} else {
if((state_val_38676 === (2))){
var inst_38672 = (state_38675[(2)]);
var inst_38673 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38675__$1 = (function (){var statearr_38677 = state_38675;
(statearr_38677[(7)] = inst_38672);

return statearr_38677;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38675__$1,inst_38673);
} else {
return null;
}
}
});})(c__33763__auto__))
;
return ((function (switch__33651__auto__,c__33763__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33652__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33652__auto____0 = (function (){
var statearr_38681 = [null,null,null,null,null,null,null,null];
(statearr_38681[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33652__auto__);

(statearr_38681[(1)] = (1));

return statearr_38681;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33652__auto____1 = (function (state_38675){
while(true){
var ret_value__33653__auto__ = (function (){try{while(true){
var result__33654__auto__ = switch__33651__auto__.call(null,state_38675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33654__auto__;
}
break;
}
}catch (e38682){if((e38682 instanceof Object)){
var ex__33655__auto__ = e38682;
var statearr_38683_38685 = state_38675;
(statearr_38683_38685[(5)] = ex__33655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38686 = state_38675;
state_38675 = G__38686;
continue;
} else {
return ret_value__33653__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33652__auto__ = function(state_38675){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33652__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33652__auto____1.call(this,state_38675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33652__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33652__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33652__auto__;
})()
;})(switch__33651__auto__,c__33763__auto__))
})();
var state__33765__auto__ = (function (){var statearr_38684 = f__33764__auto__.call(null);
(statearr_38684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33763__auto__);

return statearr_38684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33765__auto__);
});})(c__33763__auto__))
);

return c__33763__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38687){
var map__38694 = p__38687;
var map__38694__$1 = ((((!((map__38694 == null)))?((((map__38694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38694):map__38694);
var ed = map__38694__$1;
var formatted_exception = cljs.core.get.call(null,map__38694__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38694__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38694__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38696_38700 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38697_38701 = null;
var count__38698_38702 = (0);
var i__38699_38703 = (0);
while(true){
if((i__38699_38703 < count__38698_38702)){
var msg_38704 = cljs.core._nth.call(null,chunk__38697_38701,i__38699_38703);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38704);

var G__38705 = seq__38696_38700;
var G__38706 = chunk__38697_38701;
var G__38707 = count__38698_38702;
var G__38708 = (i__38699_38703 + (1));
seq__38696_38700 = G__38705;
chunk__38697_38701 = G__38706;
count__38698_38702 = G__38707;
i__38699_38703 = G__38708;
continue;
} else {
var temp__4657__auto___38709 = cljs.core.seq.call(null,seq__38696_38700);
if(temp__4657__auto___38709){
var seq__38696_38710__$1 = temp__4657__auto___38709;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38696_38710__$1)){
var c__30150__auto___38711 = cljs.core.chunk_first.call(null,seq__38696_38710__$1);
var G__38712 = cljs.core.chunk_rest.call(null,seq__38696_38710__$1);
var G__38713 = c__30150__auto___38711;
var G__38714 = cljs.core.count.call(null,c__30150__auto___38711);
var G__38715 = (0);
seq__38696_38700 = G__38712;
chunk__38697_38701 = G__38713;
count__38698_38702 = G__38714;
i__38699_38703 = G__38715;
continue;
} else {
var msg_38716 = cljs.core.first.call(null,seq__38696_38710__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38716);

var G__38717 = cljs.core.next.call(null,seq__38696_38710__$1);
var G__38718 = null;
var G__38719 = (0);
var G__38720 = (0);
seq__38696_38700 = G__38717;
chunk__38697_38701 = G__38718;
count__38698_38702 = G__38719;
i__38699_38703 = G__38720;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38721){
var map__38724 = p__38721;
var map__38724__$1 = ((((!((map__38724 == null)))?((((map__38724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38724):map__38724);
var w = map__38724__$1;
var message = cljs.core.get.call(null,map__38724__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__29327__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__29327__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__29327__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38732 = cljs.core.seq.call(null,plugins);
var chunk__38733 = null;
var count__38734 = (0);
var i__38735 = (0);
while(true){
if((i__38735 < count__38734)){
var vec__38736 = cljs.core._nth.call(null,chunk__38733,i__38735);
var k = cljs.core.nth.call(null,vec__38736,(0),null);
var plugin = cljs.core.nth.call(null,vec__38736,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38738 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38732,chunk__38733,count__38734,i__38735,pl_38738,vec__38736,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38738.call(null,msg_hist);
});})(seq__38732,chunk__38733,count__38734,i__38735,pl_38738,vec__38736,k,plugin))
);
} else {
}

var G__38739 = seq__38732;
var G__38740 = chunk__38733;
var G__38741 = count__38734;
var G__38742 = (i__38735 + (1));
seq__38732 = G__38739;
chunk__38733 = G__38740;
count__38734 = G__38741;
i__38735 = G__38742;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38732);
if(temp__4657__auto__){
var seq__38732__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38732__$1)){
var c__30150__auto__ = cljs.core.chunk_first.call(null,seq__38732__$1);
var G__38743 = cljs.core.chunk_rest.call(null,seq__38732__$1);
var G__38744 = c__30150__auto__;
var G__38745 = cljs.core.count.call(null,c__30150__auto__);
var G__38746 = (0);
seq__38732 = G__38743;
chunk__38733 = G__38744;
count__38734 = G__38745;
i__38735 = G__38746;
continue;
} else {
var vec__38737 = cljs.core.first.call(null,seq__38732__$1);
var k = cljs.core.nth.call(null,vec__38737,(0),null);
var plugin = cljs.core.nth.call(null,vec__38737,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38747 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38732,chunk__38733,count__38734,i__38735,pl_38747,vec__38737,k,plugin,seq__38732__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38747.call(null,msg_hist);
});})(seq__38732,chunk__38733,count__38734,i__38735,pl_38747,vec__38737,k,plugin,seq__38732__$1,temp__4657__auto__))
);
} else {
}

var G__38748 = cljs.core.next.call(null,seq__38732__$1);
var G__38749 = null;
var G__38750 = (0);
var G__38751 = (0);
seq__38732 = G__38748;
chunk__38733 = G__38749;
count__38734 = G__38750;
i__38735 = G__38751;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args38752 = [];
var len__30408__auto___38755 = arguments.length;
var i__30409__auto___38756 = (0);
while(true){
if((i__30409__auto___38756 < len__30408__auto___38755)){
args38752.push((arguments[i__30409__auto___38756]));

var G__38757 = (i__30409__auto___38756 + (1));
i__30409__auto___38756 = G__38757;
continue;
} else {
}
break;
}

var G__38754 = args38752.length;
switch (G__38754) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38752.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__30415__auto__ = [];
var len__30408__auto___38763 = arguments.length;
var i__30409__auto___38764 = (0);
while(true){
if((i__30409__auto___38764 < len__30408__auto___38763)){
args__30415__auto__.push((arguments[i__30409__auto___38764]));

var G__38765 = (i__30409__auto___38764 + (1));
i__30409__auto___38764 = G__38765;
continue;
} else {
}
break;
}

var argseq__30416__auto__ = ((((0) < args__30415__auto__.length))?(new cljs.core.IndexedSeq(args__30415__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__30416__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38760){
var map__38761 = p__38760;
var map__38761__$1 = ((((!((map__38761 == null)))?((((map__38761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38761):map__38761);
var opts = map__38761__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38759){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38759));
});

//# sourceMappingURL=client.js.map