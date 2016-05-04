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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jumbotron","div.jumbotron",-1632448673),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"BYU Humanities Funding Administration"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Welcome to the BYU Humanities College funding administration website. Here you can view the submissions for each category."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12.funding-type","div.col-md-12.funding-type",1646631222),"Right now only College Submissions are available.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button-holder","div.button-holder",397732413),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-inactive","a.btn.btn-inactive",-155457845),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"College Research Requests"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button-holder","div.button-holder",397732413),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-inactive","a.btn.btn-inactive",-155457845),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"College Travel Requests"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button-holder","div.button-holder",397732413),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/leave/dean"], null),"College Leave Requests"], null)], null)], null)], null)], null);
});
humfunding.core.pages = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Var(function(){return humfunding.core.home_page;},new cljs.core.Symbol("humfunding.core","home-page","humfunding.core/home-page",2096804441,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"humfunding.core","humfunding.core",2101567068,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/humfunding/core.cljs",16,1,14,14,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(humfunding.core.home_page)?humfunding.core.home_page.cljs$lang$test:null)])),new cljs.core.Keyword(null,"leave","leave",1022579443),new cljs.core.Var(function(){return humfunding.leave.leave_page;},new cljs.core.Symbol("humfunding.leave","leave-page","humfunding.leave/leave-page",688647483,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"humfunding.leave","humfunding.leave",-1817210396,null),new cljs.core.Symbol(null,"leave-page","leave-page",-731753035,null),"src/cljs/humfunding/leave.cljs",17,1,56,56,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(humfunding.leave.leave_page)?humfunding.leave.leave_page.cljs$lang$test:null)]))], null);
humfunding.core.page = (function humfunding$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [humfunding.core.pages.call(null,reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397)))], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__31031__auto___34782 = (function (params__31032__auto__){
if(cljs.core.map_QMARK_.call(null,params__31032__auto__)){
var map__34778 = params__31032__auto__;
var map__34778__$1 = ((((!((map__34778 == null)))?((((map__34778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34778):map__34778);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__31032__auto__)){
var vec__34780 = params__31032__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__31031__auto___34782);

humfunding.core.home_route = ((function (action__31031__auto___34782){
return (function humfunding$core$home_route(var_args){
var args__30415__auto__ = [];
var len__30408__auto___34783 = arguments.length;
var i__30409__auto___34784 = (0);
while(true){
if((i__30409__auto___34784 < len__30408__auto___34783)){
args__30415__auto__.push((arguments[i__30409__auto___34784]));

var G__34785 = (i__30409__auto___34784 + (1));
i__30409__auto___34784 = G__34785;
continue;
} else {
}
break;
}

var argseq__30416__auto__ = ((((0) < args__30415__auto__.length))?(new cljs.core.IndexedSeq(args__30415__auto__.slice((0)),(0),null)):null);
return humfunding.core.home_route.cljs$core$IFn$_invoke$arity$variadic(argseq__30416__auto__);
});})(action__31031__auto___34782))
;

humfunding.core.home_route.cljs$core$IFn$_invoke$arity$variadic = ((function (action__31031__auto___34782){
return (function (args__31030__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__31030__auto__);
});})(action__31031__auto___34782))
;

humfunding.core.home_route.cljs$lang$maxFixedArity = (0);

humfunding.core.home_route.cljs$lang$applyTo = ((function (action__31031__auto___34782){
return (function (seq34781){
return humfunding.core.home_route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34781));
});})(action__31031__auto___34782))
;
var action__31031__auto___34790 = (function (params__31032__auto__){
if(cljs.core.map_QMARK_.call(null,params__31032__auto__)){
var map__34786 = params__31032__auto__;
var map__34786__$1 = ((((!((map__34786 == null)))?((((map__34786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34786):map__34786);
var category = cljs.core.get.call(null,map__34786__$1,new cljs.core.Keyword(null,"category","category",-593092832));
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"category","category",-593092832),category);

humfunding.leave.get_requests.call(null,category);

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"leave","leave",1022579443));
} else {
if(cljs.core.vector_QMARK_.call(null,params__31032__auto__)){
var vec__34788 = params__31032__auto__;
var category = cljs.core.nth.call(null,vec__34788,(0),null);
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"category","category",-593092832),category);

humfunding.leave.get_requests.call(null,category);

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"leave","leave",1022579443));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/leave/:category",action__31031__auto___34790);

humfunding.core.leave_route = ((function (action__31031__auto___34790){
return (function humfunding$core$leave_route(var_args){
var args__30415__auto__ = [];
var len__30408__auto___34791 = arguments.length;
var i__30409__auto___34792 = (0);
while(true){
if((i__30409__auto___34792 < len__30408__auto___34791)){
args__30415__auto__.push((arguments[i__30409__auto___34792]));

var G__34793 = (i__30409__auto___34792 + (1));
i__30409__auto___34792 = G__34793;
continue;
} else {
}
break;
}

var argseq__30416__auto__ = ((((0) < args__30415__auto__.length))?(new cljs.core.IndexedSeq(args__30415__auto__.slice((0)),(0),null)):null);
return humfunding.core.leave_route.cljs$core$IFn$_invoke$arity$variadic(argseq__30416__auto__);
});})(action__31031__auto___34790))
;

humfunding.core.leave_route.cljs$core$IFn$_invoke$arity$variadic = ((function (action__31031__auto___34790){
return (function (args__31030__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/leave/:category",args__31030__auto__);
});})(action__31031__auto___34790))
;

humfunding.core.leave_route.cljs$lang$maxFixedArity = (0);

humfunding.core.leave_route.cljs$lang$applyTo = ((function (action__31031__auto___34790){
return (function (seq34789){
return humfunding.core.leave_route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34789));
});})(action__31031__auto___34790))
;
humfunding.core.hook_browser_navigation_BANG_ = (function humfunding$core$hook_browser_navigation_BANG_(){
var G__34795 = (new goog.History());
goog.events.listen(G__34795,goog.history.EventType.NAVIGATE,((function (G__34795){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__34795))
);

G__34795.setEnabled(true);

return G__34795;
});
humfunding.core.mount_components = (function humfunding$core$mount_components(){
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return humfunding.shared.navbar;},new cljs.core.Symbol("humfunding.shared","navbar","humfunding.shared/navbar",1539371998,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"humfunding.shared","humfunding.shared",324964042,null),new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),"src/cljs/humfunding/shared.cljs",13,1,17,17,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(humfunding.shared.navbar)?humfunding.shared.navbar.cljs$lang$test:null)]))], null),document.getElementById("navbar"));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return humfunding.core.page;},new cljs.core.Symbol("humfunding.core","page","humfunding.core/page",1187235428,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"humfunding.core","humfunding.core",2101567068,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),"src/cljs/humfunding/core.cljs",11,1,35,35,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(humfunding.core.page)?humfunding.core.page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
humfunding.core.init_BANG_ = (function humfunding$core$init_BANG_(){
humfunding.ajax.load_interceptors_BANG_.call(null);

humfunding.core.hook_browser_navigation_BANG_.call(null);

return humfunding.core.mount_components.call(null);
});

//# sourceMappingURL=core.js.map