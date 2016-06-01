// Compiled by ClojureScript 1.8.40 {}
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jumbotron","div.jumbotron",-1632448673),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"BYU Humanities Funding Administration"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Welcome to the BYU Humanities College funding administration website. Here you can view the submissions for each category."], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.requests.leave-requests","div.row.requests.leave-requests",1314682221),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Leave Requests"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Select the Leave Requests you would like to browse"], null),humfunding.leave.leave_request_dropdown.call(null)], null)], null);
});
humfunding.core.pages = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Var(function(){return humfunding.core.home_page;},new cljs.core.Symbol("humfunding.core","home-page","humfunding.core/home-page",2096804441,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"humfunding.core","humfunding.core",2101567068,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/humfunding/core.cljs",16,1,16,16,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(humfunding.core.home_page)?humfunding.core.home_page.cljs$lang$test:null)])),new cljs.core.Keyword(null,"leave","leave",1022579443),new cljs.core.Var(function(){return humfunding.leave.leave_page;},new cljs.core.Symbol("humfunding.leave","leave-page","humfunding.leave/leave-page",688647483,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"humfunding.leave","humfunding.leave",-1817210396,null),new cljs.core.Symbol(null,"leave-page","leave-page",-731753035,null),"src/cljs/humfunding/leave.cljs",17,1,109,109,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(humfunding.leave.leave_page)?humfunding.leave.leave_page.cljs$lang$test:null)]))], null);
humfunding.core.page = (function humfunding$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [humfunding.core.pages.call(null,reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397)))], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__31163__auto___32767 = (function (params__31164__auto__){
if(cljs.core.map_QMARK_.call(null,params__31164__auto__)){
var map__32763 = params__31164__auto__;
var map__32763__$1 = ((((!((map__32763 == null)))?((((map__32763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32763):map__32763);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__31164__auto__)){
var vec__32765 = params__31164__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__31163__auto___32767);

humfunding.core.home_route = ((function (action__31163__auto___32767){
return (function humfunding$core$home_route(var_args){
var args__30527__auto__ = [];
var len__30520__auto___32768 = arguments.length;
var i__30521__auto___32769 = (0);
while(true){
if((i__30521__auto___32769 < len__30520__auto___32768)){
args__30527__auto__.push((arguments[i__30521__auto___32769]));

var G__32770 = (i__30521__auto___32769 + (1));
i__30521__auto___32769 = G__32770;
continue;
} else {
}
break;
}

var argseq__30528__auto__ = ((((0) < args__30527__auto__.length))?(new cljs.core.IndexedSeq(args__30527__auto__.slice((0)),(0),null)):null);
return humfunding.core.home_route.cljs$core$IFn$_invoke$arity$variadic(argseq__30528__auto__);
});})(action__31163__auto___32767))
;

humfunding.core.home_route.cljs$core$IFn$_invoke$arity$variadic = ((function (action__31163__auto___32767){
return (function (args__31162__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__31162__auto__);
});})(action__31163__auto___32767))
;

humfunding.core.home_route.cljs$lang$maxFixedArity = (0);

humfunding.core.home_route.cljs$lang$applyTo = ((function (action__31163__auto___32767){
return (function (seq32766){
return humfunding.core.home_route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32766));
});})(action__31163__auto___32767))
;
var action__31163__auto___32775 = (function (params__31164__auto__){
if(cljs.core.map_QMARK_.call(null,params__31164__auto__)){
var map__32771 = params__31164__auto__;
var map__32771__$1 = ((((!((map__32771 == null)))?((((map__32771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32771):map__32771);
var category = cljs.core.get.call(null,map__32771__$1,new cljs.core.Keyword(null,"category","category",-593092832));
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"category","category",-593092832),category);

humfunding.leave.get_requests.call(null,category,new cljs.core.Keyword(null,"init","init",-1875481434));

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"leave","leave",1022579443));
} else {
if(cljs.core.vector_QMARK_.call(null,params__31164__auto__)){
var vec__32773 = params__31164__auto__;
var category = cljs.core.nth.call(null,vec__32773,(0),null);
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"category","category",-593092832),category);

humfunding.leave.get_requests.call(null,category,new cljs.core.Keyword(null,"init","init",-1875481434));

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"leave","leave",1022579443));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/leave/:category",action__31163__auto___32775);

humfunding.core.leave_route = ((function (action__31163__auto___32775){
return (function humfunding$core$leave_route(var_args){
var args__30527__auto__ = [];
var len__30520__auto___32776 = arguments.length;
var i__30521__auto___32777 = (0);
while(true){
if((i__30521__auto___32777 < len__30520__auto___32776)){
args__30527__auto__.push((arguments[i__30521__auto___32777]));

var G__32778 = (i__30521__auto___32777 + (1));
i__30521__auto___32777 = G__32778;
continue;
} else {
}
break;
}

var argseq__30528__auto__ = ((((0) < args__30527__auto__.length))?(new cljs.core.IndexedSeq(args__30527__auto__.slice((0)),(0),null)):null);
return humfunding.core.leave_route.cljs$core$IFn$_invoke$arity$variadic(argseq__30528__auto__);
});})(action__31163__auto___32775))
;

humfunding.core.leave_route.cljs$core$IFn$_invoke$arity$variadic = ((function (action__31163__auto___32775){
return (function (args__31162__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/leave/:category",args__31162__auto__);
});})(action__31163__auto___32775))
;

humfunding.core.leave_route.cljs$lang$maxFixedArity = (0);

humfunding.core.leave_route.cljs$lang$applyTo = ((function (action__31163__auto___32775){
return (function (seq32774){
return humfunding.core.leave_route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32774));
});})(action__31163__auto___32775))
;
humfunding.core.hook_browser_navigation_BANG_ = (function humfunding$core$hook_browser_navigation_BANG_(){
var G__32780 = (new goog.History());
goog.events.listen(G__32780,goog.history.EventType.NAVIGATE,((function (G__32780){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__32780))
);

G__32780.setEnabled(true);

return G__32780;
});
humfunding.core.mount_components = (function humfunding$core$mount_components(){
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return humfunding.shared.navbar;},new cljs.core.Symbol("humfunding.shared","navbar","humfunding.shared/navbar",1539371998,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"humfunding.shared","humfunding.shared",324964042,null),new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),"src/cljs/humfunding/shared.cljs",13,1,17,17,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(humfunding.shared.navbar)?humfunding.shared.navbar.cljs$lang$test:null)]))], null),document.getElementById("navbar"));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return humfunding.core.page;},new cljs.core.Symbol("humfunding.core","page","humfunding.core/page",1187235428,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"humfunding.core","humfunding.core",2101567068,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),"src/cljs/humfunding/core.cljs",11,1,32,32,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(humfunding.core.page)?humfunding.core.page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
humfunding.core.init_BANG_ = (function humfunding$core$init_BANG_(){
humfunding.ajax.load_interceptors_BANG_.call(null);

humfunding.core.hook_browser_navigation_BANG_.call(null);

return humfunding.core.mount_components.call(null);
});

//# sourceMappingURL=core.js.map