// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('humfunding.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('markdown.core');
goog.require('humfunding.leave');
goog.require('goog.history.EventType');
goog.require('reagent.session');
goog.require('reagent.core');
goog.require('humfunding.shared');
goog.require('humfunding.ajax');
goog.require('goog.History');
goog.require('goog.events');
humfunding.core.home_page = (function humfunding$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$jumbotron,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"BYU Humanities Funding Administration"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Welcome to the BYU Humanities College funding administration website. Here you can view the submissions for each category."], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$requests$leave_DASH_requests,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Leave Requests"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Select the Leave Requests you would like to browse"], null),humfunding.leave.leave_request_dropdown()], null)], null);
});
humfunding.core.pages = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$home,new cljs.core.Var(function(){return humfunding.core.home_page;},cljs.core.cst$sym$humfunding$core_SLASH_home_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$humfunding$core,cljs.core.cst$sym$home_DASH_page,"src/cljs/humfunding/core.cljs",16,1,16,16,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(humfunding.core.home_page)?humfunding.core.home_page.cljs$lang$test:null)])),cljs.core.cst$kw$leave,new cljs.core.Var(function(){return humfunding.leave.leave_page;},cljs.core.cst$sym$humfunding$leave_SLASH_leave_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$humfunding$leave,cljs.core.cst$sym$leave_DASH_page,"/home/torysa/Workspace/humfunding/src/cljs/humfunding/leave.cljs",17,1,109,109,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(humfunding.leave.leave_page)?humfunding.leave.leave_page.cljs$lang$test:null)]))], null);
humfunding.core.page = (function humfunding$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15070 = reagent.session.get(cljs.core.cst$kw$page);
return (humfunding.core.pages.cljs$core$IFn$_invoke$arity$1 ? humfunding.core.pages.cljs$core$IFn$_invoke$arity$1(G__15070) : humfunding.core.pages.call(null,G__15070));
})()], null);
});
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
var action__13776__auto___15075 = (function (params__13777__auto__){
if(cljs.core.map_QMARK_(params__13777__auto__)){
var map__15071 = params__13777__auto__;
var map__15071__$1 = ((((!((map__15071 == null)))?((((map__15071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15071):map__15071);
return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__13777__auto__)){
var vec__15073 = params__13777__auto__;
return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__13776__auto___15075);

humfunding.core.home_route = ((function (action__13776__auto___15075){
return (function humfunding$core$home_route(var_args){
var args__7192__auto__ = [];
var len__7185__auto___15076 = arguments.length;
var i__7186__auto___15077 = (0);
while(true){
if((i__7186__auto___15077 < len__7185__auto___15076)){
args__7192__auto__.push((arguments[i__7186__auto___15077]));

var G__15078 = (i__7186__auto___15077 + (1));
i__7186__auto___15077 = G__15078;
continue;
} else {
}
break;
}

var argseq__7193__auto__ = ((((0) < args__7192__auto__.length))?(new cljs.core.IndexedSeq(args__7192__auto__.slice((0)),(0),null)):null);
return humfunding.core.home_route.cljs$core$IFn$_invoke$arity$variadic(argseq__7193__auto__);
});})(action__13776__auto___15075))
;

humfunding.core.home_route.cljs$core$IFn$_invoke$arity$variadic = ((function (action__13776__auto___15075){
return (function (args__13775__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/",args__13775__auto__);
});})(action__13776__auto___15075))
;

humfunding.core.home_route.cljs$lang$maxFixedArity = (0);

humfunding.core.home_route.cljs$lang$applyTo = ((function (action__13776__auto___15075){
return (function (seq15074){
return humfunding.core.home_route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15074));
});})(action__13776__auto___15075))
;
var action__13776__auto___15083 = (function (params__13777__auto__){
if(cljs.core.map_QMARK_(params__13777__auto__)){
var map__15079 = params__13777__auto__;
var map__15079__$1 = ((((!((map__15079 == null)))?((((map__15079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15079):map__15079);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15079__$1,cljs.core.cst$kw$category);
reagent.session.put_BANG_(cljs.core.cst$kw$category,category);

humfunding.leave.get_requests.cljs$core$IFn$_invoke$arity$variadic(category,cljs.core.array_seq([cljs.core.cst$kw$init], 0));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$leave);
} else {
if(cljs.core.vector_QMARK_(params__13777__auto__)){
var vec__15081 = params__13777__auto__;
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15081,(0),null);
reagent.session.put_BANG_(cljs.core.cst$kw$category,category);

humfunding.leave.get_requests.cljs$core$IFn$_invoke$arity$variadic(category,cljs.core.array_seq([cljs.core.cst$kw$init], 0));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$leave);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/leave/:category",action__13776__auto___15083);

humfunding.core.leave_route = ((function (action__13776__auto___15083){
return (function humfunding$core$leave_route(var_args){
var args__7192__auto__ = [];
var len__7185__auto___15084 = arguments.length;
var i__7186__auto___15085 = (0);
while(true){
if((i__7186__auto___15085 < len__7185__auto___15084)){
args__7192__auto__.push((arguments[i__7186__auto___15085]));

var G__15086 = (i__7186__auto___15085 + (1));
i__7186__auto___15085 = G__15086;
continue;
} else {
}
break;
}

var argseq__7193__auto__ = ((((0) < args__7192__auto__.length))?(new cljs.core.IndexedSeq(args__7192__auto__.slice((0)),(0),null)):null);
return humfunding.core.leave_route.cljs$core$IFn$_invoke$arity$variadic(argseq__7193__auto__);
});})(action__13776__auto___15083))
;

humfunding.core.leave_route.cljs$core$IFn$_invoke$arity$variadic = ((function (action__13776__auto___15083){
return (function (args__13775__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/leave/:category",args__13775__auto__);
});})(action__13776__auto___15083))
;

humfunding.core.leave_route.cljs$lang$maxFixedArity = (0);

humfunding.core.leave_route.cljs$lang$applyTo = ((function (action__13776__auto___15083){
return (function (seq15082){
return humfunding.core.leave_route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15082));
});})(action__13776__auto___15083))
;
humfunding.core.hook_browser_navigation_BANG_ = (function humfunding$core$hook_browser_navigation_BANG_(){
var G__15091 = (new goog.History());
var G__15092_15095 = G__15091;
var G__15093_15096 = goog.history.EventType.NAVIGATE;
var G__15094_15097 = ((function (G__15092_15095,G__15093_15096,G__15091){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__15092_15095,G__15093_15096,G__15091))
;
goog.events.listen(G__15092_15095,G__15093_15096,G__15094_15097);

G__15091.setEnabled(true);

return G__15091;
});
humfunding.core.mount_components = (function humfunding$core$mount_components(){
reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return humfunding.shared.navbar;},cljs.core.cst$sym$humfunding$shared_SLASH_navbar,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$humfunding$shared,cljs.core.cst$sym$navbar,"src/cljs/humfunding/shared.cljs",13,1,17,17,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(humfunding.shared.navbar)?humfunding.shared.navbar.cljs$lang$test:null)]))], null),document.getElementById("navbar"));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return humfunding.core.page;},cljs.core.cst$sym$humfunding$core_SLASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$humfunding$core,cljs.core.cst$sym$page,"src/cljs/humfunding/core.cljs",11,1,32,32,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(humfunding.core.page)?humfunding.core.page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
humfunding.core.init_BANG_ = (function humfunding$core$init_BANG_(){
humfunding.ajax.load_interceptors_BANG_();

humfunding.core.hook_browser_navigation_BANG_();

return humfunding.core.mount_components();
});
