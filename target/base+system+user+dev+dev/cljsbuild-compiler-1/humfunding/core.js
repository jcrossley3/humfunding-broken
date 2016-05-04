// Compiled by ClojureScript 1.8.40 {}
goog.provide('humfunding.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('markdown.core');
goog.require('goog.history.EventType');
goog.require('reagent.session');
goog.require('reagent.core');
goog.require('humfunding.shared');
goog.require('humfunding.ajax');
goog.require('goog.History');
goog.require('goog.events');
humfunding.core.about_page = (function humfunding$core$about_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),"this is the story of humfunding... work in progress"], null)], null)], null);
});
humfunding.core.home_page = (function humfunding$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jumbotron","div.jumbotron",-1632448673),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"BYU Humanities+ Funding"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Welcome to the BYU Humanities College funding administration website."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12.funding-type","div.col-md-12.funding-type",1646631222)], null)], null)], null);
});
humfunding.core.pages = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Var(function(){return humfunding.core.home_page;},new cljs.core.Symbol("humfunding.core","home-page","humfunding.core/home-page",2096804441,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"humfunding.core","humfunding.core",2101567068,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/home/torysa/Workspace/humfunding/src/cljs/humfunding/core.cljs",16,1,19,19,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(humfunding.core.home_page)?humfunding.core.home_page.cljs$lang$test:null)]))], null);
humfunding.core.page = (function humfunding$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [humfunding.core.pages.call(null,reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397)))], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__38470__auto___38582 = (function (params__38471__auto__){
if(cljs.core.map_QMARK_.call(null,params__38471__auto__)){
var map__38578 = params__38471__auto__;
var map__38578__$1 = ((((!((map__38578 == null)))?((((map__38578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38578):map__38578);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__38471__auto__)){
var vec__38580 = params__38471__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__38470__auto___38582);

humfunding.core.home_route = ((function (action__38470__auto___38582){
return (function humfunding$core$home_route(var_args){
var args__30676__auto__ = [];
var len__30669__auto___38583 = arguments.length;
var i__30670__auto___38584 = (0);
while(true){
if((i__30670__auto___38584 < len__30669__auto___38583)){
args__30676__auto__.push((arguments[i__30670__auto___38584]));

var G__38585 = (i__30670__auto___38584 + (1));
i__30670__auto___38584 = G__38585;
continue;
} else {
}
break;
}

var argseq__30677__auto__ = ((((0) < args__30676__auto__.length))?(new cljs.core.IndexedSeq(args__30676__auto__.slice((0)),(0),null)):null);
return humfunding.core.home_route.cljs$core$IFn$_invoke$arity$variadic(argseq__30677__auto__);
});})(action__38470__auto___38582))
;

humfunding.core.home_route.cljs$core$IFn$_invoke$arity$variadic = ((function (action__38470__auto___38582){
return (function (args__38469__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__38469__auto__);
});})(action__38470__auto___38582))
;

humfunding.core.home_route.cljs$lang$maxFixedArity = (0);

humfunding.core.home_route.cljs$lang$applyTo = ((function (action__38470__auto___38582){
return (function (seq38581){
return humfunding.core.home_route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38581));
});})(action__38470__auto___38582))
;
humfunding.core.hook_browser_navigation_BANG_ = (function humfunding$core$hook_browser_navigation_BANG_(){
var G__38587 = (new goog.History());
goog.events.listen(G__38587,goog.history.EventType.NAVIGATE,((function (G__38587){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__38587))
);

G__38587.setEnabled(true);

return G__38587;
});
humfunding.core.mount_components = (function humfunding$core$mount_components(){
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return humfunding.shared.navbar;},new cljs.core.Symbol("humfunding.shared","navbar","humfunding.shared/navbar",1539371998,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"humfunding.shared","humfunding.shared",324964042,null),new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),"/home/torysa/Workspace/humfunding/src/cljs/humfunding/shared.cljs",13,1,17,17,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(humfunding.shared.navbar)?humfunding.shared.navbar.cljs$lang$test:null)]))], null),document.getElementById("navbar"));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return humfunding.core.page;},new cljs.core.Symbol("humfunding.core","page","humfunding.core/page",1187235428,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"humfunding.core","humfunding.core",2101567068,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),"/home/torysa/Workspace/humfunding/src/cljs/humfunding/core.cljs",11,1,34,34,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(humfunding.core.page)?humfunding.core.page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
humfunding.core.init_BANG_ = (function humfunding$core$init_BANG_(){
humfunding.ajax.load_interceptors_BANG_.call(null);

humfunding.core.hook_browser_navigation_BANG_.call(null);

return humfunding.core.mount_components.call(null);
});
