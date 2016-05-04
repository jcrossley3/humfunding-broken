// Compiled by ClojureScript 1.8.40 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__29339__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__29339__auto__){
return or__29339__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__29339__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__29339__auto__)){
return or__29339__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36596_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36596_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__36601 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36602 = null;
var count__36603 = (0);
var i__36604 = (0);
while(true){
if((i__36604 < count__36603)){
var n = cljs.core._nth.call(null,chunk__36602,i__36604);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36605 = seq__36601;
var G__36606 = chunk__36602;
var G__36607 = count__36603;
var G__36608 = (i__36604 + (1));
seq__36601 = G__36605;
chunk__36602 = G__36606;
count__36603 = G__36607;
i__36604 = G__36608;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36601);
if(temp__4657__auto__){
var seq__36601__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36601__$1)){
var c__30150__auto__ = cljs.core.chunk_first.call(null,seq__36601__$1);
var G__36609 = cljs.core.chunk_rest.call(null,seq__36601__$1);
var G__36610 = c__30150__auto__;
var G__36611 = cljs.core.count.call(null,c__30150__auto__);
var G__36612 = (0);
seq__36601 = G__36609;
chunk__36602 = G__36610;
count__36603 = G__36611;
i__36604 = G__36612;
continue;
} else {
var n = cljs.core.first.call(null,seq__36601__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36613 = cljs.core.next.call(null,seq__36601__$1);
var G__36614 = null;
var G__36615 = (0);
var G__36616 = (0);
seq__36601 = G__36613;
chunk__36602 = G__36614;
count__36603 = G__36615;
i__36604 = G__36616;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__36655_36662 = cljs.core.seq.call(null,deps);
var chunk__36656_36663 = null;
var count__36657_36664 = (0);
var i__36658_36665 = (0);
while(true){
if((i__36658_36665 < count__36657_36664)){
var dep_36666 = cljs.core._nth.call(null,chunk__36656_36663,i__36658_36665);
topo_sort_helper_STAR_.call(null,dep_36666,(depth + (1)),state);

var G__36667 = seq__36655_36662;
var G__36668 = chunk__36656_36663;
var G__36669 = count__36657_36664;
var G__36670 = (i__36658_36665 + (1));
seq__36655_36662 = G__36667;
chunk__36656_36663 = G__36668;
count__36657_36664 = G__36669;
i__36658_36665 = G__36670;
continue;
} else {
var temp__4657__auto___36671 = cljs.core.seq.call(null,seq__36655_36662);
if(temp__4657__auto___36671){
var seq__36655_36672__$1 = temp__4657__auto___36671;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36655_36672__$1)){
var c__30150__auto___36673 = cljs.core.chunk_first.call(null,seq__36655_36672__$1);
var G__36674 = cljs.core.chunk_rest.call(null,seq__36655_36672__$1);
var G__36675 = c__30150__auto___36673;
var G__36676 = cljs.core.count.call(null,c__30150__auto___36673);
var G__36677 = (0);
seq__36655_36662 = G__36674;
chunk__36656_36663 = G__36675;
count__36657_36664 = G__36676;
i__36658_36665 = G__36677;
continue;
} else {
var dep_36678 = cljs.core.first.call(null,seq__36655_36672__$1);
topo_sort_helper_STAR_.call(null,dep_36678,(depth + (1)),state);

var G__36679 = cljs.core.next.call(null,seq__36655_36672__$1);
var G__36680 = null;
var G__36681 = (0);
var G__36682 = (0);
seq__36655_36662 = G__36679;
chunk__36656_36663 = G__36680;
count__36657_36664 = G__36681;
i__36658_36665 = G__36682;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36659){
var vec__36661 = p__36659;
var x = cljs.core.nth.call(null,vec__36661,(0),null);
var xs = cljs.core.nthnext.call(null,vec__36661,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36661,x,xs,get_deps__$1){
return (function (p1__36617_SHARP_){
return clojure.set.difference.call(null,p1__36617_SHARP_,x);
});})(vec__36661,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__36695 = cljs.core.seq.call(null,provides);
var chunk__36696 = null;
var count__36697 = (0);
var i__36698 = (0);
while(true){
if((i__36698 < count__36697)){
var prov = cljs.core._nth.call(null,chunk__36696,i__36698);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36699_36707 = cljs.core.seq.call(null,requires);
var chunk__36700_36708 = null;
var count__36701_36709 = (0);
var i__36702_36710 = (0);
while(true){
if((i__36702_36710 < count__36701_36709)){
var req_36711 = cljs.core._nth.call(null,chunk__36700_36708,i__36702_36710);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36711,prov);

var G__36712 = seq__36699_36707;
var G__36713 = chunk__36700_36708;
var G__36714 = count__36701_36709;
var G__36715 = (i__36702_36710 + (1));
seq__36699_36707 = G__36712;
chunk__36700_36708 = G__36713;
count__36701_36709 = G__36714;
i__36702_36710 = G__36715;
continue;
} else {
var temp__4657__auto___36716 = cljs.core.seq.call(null,seq__36699_36707);
if(temp__4657__auto___36716){
var seq__36699_36717__$1 = temp__4657__auto___36716;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36699_36717__$1)){
var c__30150__auto___36718 = cljs.core.chunk_first.call(null,seq__36699_36717__$1);
var G__36719 = cljs.core.chunk_rest.call(null,seq__36699_36717__$1);
var G__36720 = c__30150__auto___36718;
var G__36721 = cljs.core.count.call(null,c__30150__auto___36718);
var G__36722 = (0);
seq__36699_36707 = G__36719;
chunk__36700_36708 = G__36720;
count__36701_36709 = G__36721;
i__36702_36710 = G__36722;
continue;
} else {
var req_36723 = cljs.core.first.call(null,seq__36699_36717__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36723,prov);

var G__36724 = cljs.core.next.call(null,seq__36699_36717__$1);
var G__36725 = null;
var G__36726 = (0);
var G__36727 = (0);
seq__36699_36707 = G__36724;
chunk__36700_36708 = G__36725;
count__36701_36709 = G__36726;
i__36702_36710 = G__36727;
continue;
}
} else {
}
}
break;
}

var G__36728 = seq__36695;
var G__36729 = chunk__36696;
var G__36730 = count__36697;
var G__36731 = (i__36698 + (1));
seq__36695 = G__36728;
chunk__36696 = G__36729;
count__36697 = G__36730;
i__36698 = G__36731;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36695);
if(temp__4657__auto__){
var seq__36695__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36695__$1)){
var c__30150__auto__ = cljs.core.chunk_first.call(null,seq__36695__$1);
var G__36732 = cljs.core.chunk_rest.call(null,seq__36695__$1);
var G__36733 = c__30150__auto__;
var G__36734 = cljs.core.count.call(null,c__30150__auto__);
var G__36735 = (0);
seq__36695 = G__36732;
chunk__36696 = G__36733;
count__36697 = G__36734;
i__36698 = G__36735;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36695__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36703_36736 = cljs.core.seq.call(null,requires);
var chunk__36704_36737 = null;
var count__36705_36738 = (0);
var i__36706_36739 = (0);
while(true){
if((i__36706_36739 < count__36705_36738)){
var req_36740 = cljs.core._nth.call(null,chunk__36704_36737,i__36706_36739);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36740,prov);

var G__36741 = seq__36703_36736;
var G__36742 = chunk__36704_36737;
var G__36743 = count__36705_36738;
var G__36744 = (i__36706_36739 + (1));
seq__36703_36736 = G__36741;
chunk__36704_36737 = G__36742;
count__36705_36738 = G__36743;
i__36706_36739 = G__36744;
continue;
} else {
var temp__4657__auto___36745__$1 = cljs.core.seq.call(null,seq__36703_36736);
if(temp__4657__auto___36745__$1){
var seq__36703_36746__$1 = temp__4657__auto___36745__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36703_36746__$1)){
var c__30150__auto___36747 = cljs.core.chunk_first.call(null,seq__36703_36746__$1);
var G__36748 = cljs.core.chunk_rest.call(null,seq__36703_36746__$1);
var G__36749 = c__30150__auto___36747;
var G__36750 = cljs.core.count.call(null,c__30150__auto___36747);
var G__36751 = (0);
seq__36703_36736 = G__36748;
chunk__36704_36737 = G__36749;
count__36705_36738 = G__36750;
i__36706_36739 = G__36751;
continue;
} else {
var req_36752 = cljs.core.first.call(null,seq__36703_36746__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36752,prov);

var G__36753 = cljs.core.next.call(null,seq__36703_36746__$1);
var G__36754 = null;
var G__36755 = (0);
var G__36756 = (0);
seq__36703_36736 = G__36753;
chunk__36704_36737 = G__36754;
count__36705_36738 = G__36755;
i__36706_36739 = G__36756;
continue;
}
} else {
}
}
break;
}

var G__36757 = cljs.core.next.call(null,seq__36695__$1);
var G__36758 = null;
var G__36759 = (0);
var G__36760 = (0);
seq__36695 = G__36757;
chunk__36696 = G__36758;
count__36697 = G__36759;
i__36698 = G__36760;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__36765_36769 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36766_36770 = null;
var count__36767_36771 = (0);
var i__36768_36772 = (0);
while(true){
if((i__36768_36772 < count__36767_36771)){
var ns_36773 = cljs.core._nth.call(null,chunk__36766_36770,i__36768_36772);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36773);

var G__36774 = seq__36765_36769;
var G__36775 = chunk__36766_36770;
var G__36776 = count__36767_36771;
var G__36777 = (i__36768_36772 + (1));
seq__36765_36769 = G__36774;
chunk__36766_36770 = G__36775;
count__36767_36771 = G__36776;
i__36768_36772 = G__36777;
continue;
} else {
var temp__4657__auto___36778 = cljs.core.seq.call(null,seq__36765_36769);
if(temp__4657__auto___36778){
var seq__36765_36779__$1 = temp__4657__auto___36778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36765_36779__$1)){
var c__30150__auto___36780 = cljs.core.chunk_first.call(null,seq__36765_36779__$1);
var G__36781 = cljs.core.chunk_rest.call(null,seq__36765_36779__$1);
var G__36782 = c__30150__auto___36780;
var G__36783 = cljs.core.count.call(null,c__30150__auto___36780);
var G__36784 = (0);
seq__36765_36769 = G__36781;
chunk__36766_36770 = G__36782;
count__36767_36771 = G__36783;
i__36768_36772 = G__36784;
continue;
} else {
var ns_36785 = cljs.core.first.call(null,seq__36765_36779__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36785);

var G__36786 = cljs.core.next.call(null,seq__36765_36779__$1);
var G__36787 = null;
var G__36788 = (0);
var G__36789 = (0);
seq__36765_36769 = G__36786;
chunk__36766_36770 = G__36787;
count__36767_36771 = G__36788;
i__36768_36772 = G__36789;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__29339__auto__ = goog.require__;
if(cljs.core.truth_(or__29339__auto__)){
return or__29339__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__36790__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36790 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36791__i = 0, G__36791__a = new Array(arguments.length -  0);
while (G__36791__i < G__36791__a.length) {G__36791__a[G__36791__i] = arguments[G__36791__i + 0]; ++G__36791__i;}
  args = new cljs.core.IndexedSeq(G__36791__a,0);
} 
return G__36790__delegate.call(this,args);};
G__36790.cljs$lang$maxFixedArity = 0;
G__36790.cljs$lang$applyTo = (function (arglist__36792){
var args = cljs.core.seq(arglist__36792);
return G__36790__delegate(args);
});
G__36790.cljs$core$IFn$_invoke$arity$variadic = G__36790__delegate;
return G__36790;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36794 = cljs.core._EQ_;
var expr__36795 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36794.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36795))){
var path_parts = ((function (pred__36794,expr__36795){
return (function (p1__36793_SHARP_){
return clojure.string.split.call(null,p1__36793_SHARP_,/[\/\\]/);
});})(pred__36794,expr__36795))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__36794,expr__36795){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36797){if((e36797 instanceof Error)){
var e = e36797;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36797;

}
}})());
});
;})(path_parts,sep,root,pred__36794,expr__36795))
} else {
if(cljs.core.truth_(pred__36794.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36795))){
return ((function (pred__36794,expr__36795){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__36794,expr__36795){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__36794,expr__36795))
);

return deferred.addErrback(((function (deferred,pred__36794,expr__36795){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__36794,expr__36795))
);
});
;})(pred__36794,expr__36795))
} else {
return ((function (pred__36794,expr__36795){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36794,expr__36795))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36798,callback){
var map__36801 = p__36798;
var map__36801__$1 = ((((!((map__36801 == null)))?((((map__36801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36801):map__36801);
var file_msg = map__36801__$1;
var request_url = cljs.core.get.call(null,map__36801__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36801,map__36801__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36801,map__36801__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__33763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33763__auto__){
return (function (){
var f__33764__auto__ = (function (){var switch__33651__auto__ = ((function (c__33763__auto__){
return (function (state_36825){
var state_val_36826 = (state_36825[(1)]);
if((state_val_36826 === (7))){
var inst_36821 = (state_36825[(2)]);
var state_36825__$1 = state_36825;
var statearr_36827_36847 = state_36825__$1;
(statearr_36827_36847[(2)] = inst_36821);

(statearr_36827_36847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36826 === (1))){
var state_36825__$1 = state_36825;
var statearr_36828_36848 = state_36825__$1;
(statearr_36828_36848[(2)] = null);

(statearr_36828_36848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36826 === (4))){
var inst_36805 = (state_36825[(7)]);
var inst_36805__$1 = (state_36825[(2)]);
var state_36825__$1 = (function (){var statearr_36829 = state_36825;
(statearr_36829[(7)] = inst_36805__$1);

return statearr_36829;
})();
if(cljs.core.truth_(inst_36805__$1)){
var statearr_36830_36849 = state_36825__$1;
(statearr_36830_36849[(1)] = (5));

} else {
var statearr_36831_36850 = state_36825__$1;
(statearr_36831_36850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36826 === (6))){
var state_36825__$1 = state_36825;
var statearr_36832_36851 = state_36825__$1;
(statearr_36832_36851[(2)] = null);

(statearr_36832_36851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36826 === (3))){
var inst_36823 = (state_36825[(2)]);
var state_36825__$1 = state_36825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36825__$1,inst_36823);
} else {
if((state_val_36826 === (2))){
var state_36825__$1 = state_36825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36825__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36826 === (11))){
var inst_36817 = (state_36825[(2)]);
var state_36825__$1 = (function (){var statearr_36833 = state_36825;
(statearr_36833[(8)] = inst_36817);

return statearr_36833;
})();
var statearr_36834_36852 = state_36825__$1;
(statearr_36834_36852[(2)] = null);

(statearr_36834_36852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36826 === (9))){
var inst_36811 = (state_36825[(9)]);
var inst_36809 = (state_36825[(10)]);
var inst_36813 = inst_36811.call(null,inst_36809);
var state_36825__$1 = state_36825;
var statearr_36835_36853 = state_36825__$1;
(statearr_36835_36853[(2)] = inst_36813);

(statearr_36835_36853[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36826 === (5))){
var inst_36805 = (state_36825[(7)]);
var inst_36807 = figwheel.client.file_reloading.blocking_load.call(null,inst_36805);
var state_36825__$1 = state_36825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36825__$1,(8),inst_36807);
} else {
if((state_val_36826 === (10))){
var inst_36809 = (state_36825[(10)]);
var inst_36815 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36809);
var state_36825__$1 = state_36825;
var statearr_36836_36854 = state_36825__$1;
(statearr_36836_36854[(2)] = inst_36815);

(statearr_36836_36854[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36826 === (8))){
var inst_36805 = (state_36825[(7)]);
var inst_36811 = (state_36825[(9)]);
var inst_36809 = (state_36825[(2)]);
var inst_36810 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36811__$1 = cljs.core.get.call(null,inst_36810,inst_36805);
var state_36825__$1 = (function (){var statearr_36837 = state_36825;
(statearr_36837[(9)] = inst_36811__$1);

(statearr_36837[(10)] = inst_36809);

return statearr_36837;
})();
if(cljs.core.truth_(inst_36811__$1)){
var statearr_36838_36855 = state_36825__$1;
(statearr_36838_36855[(1)] = (9));

} else {
var statearr_36839_36856 = state_36825__$1;
(statearr_36839_36856[(1)] = (10));

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
});})(c__33763__auto__))
;
return ((function (switch__33651__auto__,c__33763__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33652__auto__ = null;
var figwheel$client$file_reloading$state_machine__33652__auto____0 = (function (){
var statearr_36843 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36843[(0)] = figwheel$client$file_reloading$state_machine__33652__auto__);

(statearr_36843[(1)] = (1));

return statearr_36843;
});
var figwheel$client$file_reloading$state_machine__33652__auto____1 = (function (state_36825){
while(true){
var ret_value__33653__auto__ = (function (){try{while(true){
var result__33654__auto__ = switch__33651__auto__.call(null,state_36825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33654__auto__;
}
break;
}
}catch (e36844){if((e36844 instanceof Object)){
var ex__33655__auto__ = e36844;
var statearr_36845_36857 = state_36825;
(statearr_36845_36857[(5)] = ex__33655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36858 = state_36825;
state_36825 = G__36858;
continue;
} else {
return ret_value__33653__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33652__auto__ = function(state_36825){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33652__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33652__auto____1.call(this,state_36825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33652__auto____0;
figwheel$client$file_reloading$state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33652__auto____1;
return figwheel$client$file_reloading$state_machine__33652__auto__;
})()
;})(switch__33651__auto__,c__33763__auto__))
})();
var state__33765__auto__ = (function (){var statearr_36846 = f__33764__auto__.call(null);
(statearr_36846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33763__auto__);

return statearr_36846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33765__auto__);
});})(c__33763__auto__))
);

return c__33763__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36859,callback){
var map__36862 = p__36859;
var map__36862__$1 = ((((!((map__36862 == null)))?((((map__36862.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36862.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36862):map__36862);
var file_msg = map__36862__$1;
var namespace = cljs.core.get.call(null,map__36862__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36862,map__36862__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36862,map__36862__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36864){
var map__36867 = p__36864;
var map__36867__$1 = ((((!((map__36867 == null)))?((((map__36867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36867):map__36867);
var file_msg = map__36867__$1;
var namespace = cljs.core.get.call(null,map__36867__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__29327__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__29327__auto__){
var or__29339__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__29339__auto__)){
return or__29339__auto__;
} else {
var or__29339__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__29339__auto____$1)){
return or__29339__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__29327__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36869,callback){
var map__36872 = p__36869;
var map__36872__$1 = ((((!((map__36872 == null)))?((((map__36872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36872):map__36872);
var file_msg = map__36872__$1;
var request_url = cljs.core.get.call(null,map__36872__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36872__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__33763__auto___36960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33763__auto___36960,out){
return (function (){
var f__33764__auto__ = (function (){var switch__33651__auto__ = ((function (c__33763__auto___36960,out){
return (function (state_36942){
var state_val_36943 = (state_36942[(1)]);
if((state_val_36943 === (1))){
var inst_36920 = cljs.core.nth.call(null,files,(0),null);
var inst_36921 = cljs.core.nthnext.call(null,files,(1));
var inst_36922 = files;
var state_36942__$1 = (function (){var statearr_36944 = state_36942;
(statearr_36944[(7)] = inst_36922);

(statearr_36944[(8)] = inst_36921);

(statearr_36944[(9)] = inst_36920);

return statearr_36944;
})();
var statearr_36945_36961 = state_36942__$1;
(statearr_36945_36961[(2)] = null);

(statearr_36945_36961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36943 === (2))){
var inst_36925 = (state_36942[(10)]);
var inst_36922 = (state_36942[(7)]);
var inst_36925__$1 = cljs.core.nth.call(null,inst_36922,(0),null);
var inst_36926 = cljs.core.nthnext.call(null,inst_36922,(1));
var inst_36927 = (inst_36925__$1 == null);
var inst_36928 = cljs.core.not.call(null,inst_36927);
var state_36942__$1 = (function (){var statearr_36946 = state_36942;
(statearr_36946[(10)] = inst_36925__$1);

(statearr_36946[(11)] = inst_36926);

return statearr_36946;
})();
if(inst_36928){
var statearr_36947_36962 = state_36942__$1;
(statearr_36947_36962[(1)] = (4));

} else {
var statearr_36948_36963 = state_36942__$1;
(statearr_36948_36963[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36943 === (3))){
var inst_36940 = (state_36942[(2)]);
var state_36942__$1 = state_36942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36942__$1,inst_36940);
} else {
if((state_val_36943 === (4))){
var inst_36925 = (state_36942[(10)]);
var inst_36930 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36925);
var state_36942__$1 = state_36942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36942__$1,(7),inst_36930);
} else {
if((state_val_36943 === (5))){
var inst_36936 = cljs.core.async.close_BANG_.call(null,out);
var state_36942__$1 = state_36942;
var statearr_36949_36964 = state_36942__$1;
(statearr_36949_36964[(2)] = inst_36936);

(statearr_36949_36964[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36943 === (6))){
var inst_36938 = (state_36942[(2)]);
var state_36942__$1 = state_36942;
var statearr_36950_36965 = state_36942__$1;
(statearr_36950_36965[(2)] = inst_36938);

(statearr_36950_36965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36943 === (7))){
var inst_36926 = (state_36942[(11)]);
var inst_36932 = (state_36942[(2)]);
var inst_36933 = cljs.core.async.put_BANG_.call(null,out,inst_36932);
var inst_36922 = inst_36926;
var state_36942__$1 = (function (){var statearr_36951 = state_36942;
(statearr_36951[(7)] = inst_36922);

(statearr_36951[(12)] = inst_36933);

return statearr_36951;
})();
var statearr_36952_36966 = state_36942__$1;
(statearr_36952_36966[(2)] = null);

(statearr_36952_36966[(1)] = (2));


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
});})(c__33763__auto___36960,out))
;
return ((function (switch__33651__auto__,c__33763__auto___36960,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33652__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33652__auto____0 = (function (){
var statearr_36956 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36956[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33652__auto__);

(statearr_36956[(1)] = (1));

return statearr_36956;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33652__auto____1 = (function (state_36942){
while(true){
var ret_value__33653__auto__ = (function (){try{while(true){
var result__33654__auto__ = switch__33651__auto__.call(null,state_36942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33654__auto__;
}
break;
}
}catch (e36957){if((e36957 instanceof Object)){
var ex__33655__auto__ = e36957;
var statearr_36958_36967 = state_36942;
(statearr_36958_36967[(5)] = ex__33655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36968 = state_36942;
state_36942 = G__36968;
continue;
} else {
return ret_value__33653__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33652__auto__ = function(state_36942){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33652__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33652__auto____1.call(this,state_36942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33652__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33652__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33652__auto__;
})()
;})(switch__33651__auto__,c__33763__auto___36960,out))
})();
var state__33765__auto__ = (function (){var statearr_36959 = f__33764__auto__.call(null);
(statearr_36959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33763__auto___36960);

return statearr_36959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33765__auto__);
});})(c__33763__auto___36960,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36969,opts){
var map__36973 = p__36969;
var map__36973__$1 = ((((!((map__36973 == null)))?((((map__36973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36973):map__36973);
var eval_body__$1 = cljs.core.get.call(null,map__36973__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36973__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__29327__auto__ = eval_body__$1;
if(cljs.core.truth_(and__29327__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__29327__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e36975){var e = e36975;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__36976_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36976_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__36981){
var vec__36982 = p__36981;
var k = cljs.core.nth.call(null,vec__36982,(0),null);
var v = cljs.core.nth.call(null,vec__36982,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36983){
var vec__36984 = p__36983;
var k = cljs.core.nth.call(null,vec__36984,(0),null);
var v = cljs.core.nth.call(null,vec__36984,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36988,p__36989){
var map__37236 = p__36988;
var map__37236__$1 = ((((!((map__37236 == null)))?((((map__37236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37236):map__37236);
var opts = map__37236__$1;
var before_jsload = cljs.core.get.call(null,map__37236__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37236__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37236__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37237 = p__36989;
var map__37237__$1 = ((((!((map__37237 == null)))?((((map__37237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37237):map__37237);
var msg = map__37237__$1;
var files = cljs.core.get.call(null,map__37237__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37237__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37237__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33763__auto__,map__37236,map__37236__$1,opts,before_jsload,on_jsload,reload_dependents,map__37237,map__37237__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33764__auto__ = (function (){var switch__33651__auto__ = ((function (c__33763__auto__,map__37236,map__37236__$1,opts,before_jsload,on_jsload,reload_dependents,map__37237,map__37237__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37390){
var state_val_37391 = (state_37390[(1)]);
if((state_val_37391 === (7))){
var inst_37252 = (state_37390[(7)]);
var inst_37251 = (state_37390[(8)]);
var inst_37254 = (state_37390[(9)]);
var inst_37253 = (state_37390[(10)]);
var inst_37259 = cljs.core._nth.call(null,inst_37252,inst_37254);
var inst_37260 = figwheel.client.file_reloading.eval_body.call(null,inst_37259,opts);
var inst_37261 = (inst_37254 + (1));
var tmp37392 = inst_37252;
var tmp37393 = inst_37251;
var tmp37394 = inst_37253;
var inst_37251__$1 = tmp37393;
var inst_37252__$1 = tmp37392;
var inst_37253__$1 = tmp37394;
var inst_37254__$1 = inst_37261;
var state_37390__$1 = (function (){var statearr_37395 = state_37390;
(statearr_37395[(7)] = inst_37252__$1);

(statearr_37395[(8)] = inst_37251__$1);

(statearr_37395[(9)] = inst_37254__$1);

(statearr_37395[(11)] = inst_37260);

(statearr_37395[(10)] = inst_37253__$1);

return statearr_37395;
})();
var statearr_37396_37482 = state_37390__$1;
(statearr_37396_37482[(2)] = null);

(statearr_37396_37482[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (20))){
var inst_37294 = (state_37390[(12)]);
var inst_37302 = figwheel.client.file_reloading.sort_files.call(null,inst_37294);
var state_37390__$1 = state_37390;
var statearr_37397_37483 = state_37390__$1;
(statearr_37397_37483[(2)] = inst_37302);

(statearr_37397_37483[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (27))){
var state_37390__$1 = state_37390;
var statearr_37398_37484 = state_37390__$1;
(statearr_37398_37484[(2)] = null);

(statearr_37398_37484[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (1))){
var inst_37243 = (state_37390[(13)]);
var inst_37240 = before_jsload.call(null,files);
var inst_37241 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37242 = (function (){return ((function (inst_37243,inst_37240,inst_37241,state_val_37391,c__33763__auto__,map__37236,map__37236__$1,opts,before_jsload,on_jsload,reload_dependents,map__37237,map__37237__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36985_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36985_SHARP_);
});
;})(inst_37243,inst_37240,inst_37241,state_val_37391,c__33763__auto__,map__37236,map__37236__$1,opts,before_jsload,on_jsload,reload_dependents,map__37237,map__37237__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37243__$1 = cljs.core.filter.call(null,inst_37242,files);
var inst_37244 = cljs.core.not_empty.call(null,inst_37243__$1);
var state_37390__$1 = (function (){var statearr_37399 = state_37390;
(statearr_37399[(13)] = inst_37243__$1);

(statearr_37399[(14)] = inst_37240);

(statearr_37399[(15)] = inst_37241);

return statearr_37399;
})();
if(cljs.core.truth_(inst_37244)){
var statearr_37400_37485 = state_37390__$1;
(statearr_37400_37485[(1)] = (2));

} else {
var statearr_37401_37486 = state_37390__$1;
(statearr_37401_37486[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (24))){
var state_37390__$1 = state_37390;
var statearr_37402_37487 = state_37390__$1;
(statearr_37402_37487[(2)] = null);

(statearr_37402_37487[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (39))){
var inst_37344 = (state_37390[(16)]);
var state_37390__$1 = state_37390;
var statearr_37403_37488 = state_37390__$1;
(statearr_37403_37488[(2)] = inst_37344);

(statearr_37403_37488[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (46))){
var inst_37385 = (state_37390[(2)]);
var state_37390__$1 = state_37390;
var statearr_37404_37489 = state_37390__$1;
(statearr_37404_37489[(2)] = inst_37385);

(statearr_37404_37489[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (4))){
var inst_37288 = (state_37390[(2)]);
var inst_37289 = cljs.core.List.EMPTY;
var inst_37290 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37289);
var inst_37291 = (function (){return ((function (inst_37288,inst_37289,inst_37290,state_val_37391,c__33763__auto__,map__37236,map__37236__$1,opts,before_jsload,on_jsload,reload_dependents,map__37237,map__37237__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36986_SHARP_){
var and__29327__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36986_SHARP_);
if(cljs.core.truth_(and__29327__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36986_SHARP_));
} else {
return and__29327__auto__;
}
});
;})(inst_37288,inst_37289,inst_37290,state_val_37391,c__33763__auto__,map__37236,map__37236__$1,opts,before_jsload,on_jsload,reload_dependents,map__37237,map__37237__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37292 = cljs.core.filter.call(null,inst_37291,files);
var inst_37293 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37294 = cljs.core.concat.call(null,inst_37292,inst_37293);
var state_37390__$1 = (function (){var statearr_37405 = state_37390;
(statearr_37405[(17)] = inst_37290);

(statearr_37405[(12)] = inst_37294);

(statearr_37405[(18)] = inst_37288);

return statearr_37405;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37406_37490 = state_37390__$1;
(statearr_37406_37490[(1)] = (16));

} else {
var statearr_37407_37491 = state_37390__$1;
(statearr_37407_37491[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (15))){
var inst_37278 = (state_37390[(2)]);
var state_37390__$1 = state_37390;
var statearr_37408_37492 = state_37390__$1;
(statearr_37408_37492[(2)] = inst_37278);

(statearr_37408_37492[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (21))){
var inst_37304 = (state_37390[(19)]);
var inst_37304__$1 = (state_37390[(2)]);
var inst_37305 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37304__$1);
var state_37390__$1 = (function (){var statearr_37409 = state_37390;
(statearr_37409[(19)] = inst_37304__$1);

return statearr_37409;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37390__$1,(22),inst_37305);
} else {
if((state_val_37391 === (31))){
var inst_37388 = (state_37390[(2)]);
var state_37390__$1 = state_37390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37390__$1,inst_37388);
} else {
if((state_val_37391 === (32))){
var inst_37344 = (state_37390[(16)]);
var inst_37349 = inst_37344.cljs$lang$protocol_mask$partition0$;
var inst_37350 = (inst_37349 & (64));
var inst_37351 = inst_37344.cljs$core$ISeq$;
var inst_37352 = (inst_37350) || (inst_37351);
var state_37390__$1 = state_37390;
if(cljs.core.truth_(inst_37352)){
var statearr_37410_37493 = state_37390__$1;
(statearr_37410_37493[(1)] = (35));

} else {
var statearr_37411_37494 = state_37390__$1;
(statearr_37411_37494[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (40))){
var inst_37365 = (state_37390[(20)]);
var inst_37364 = (state_37390[(2)]);
var inst_37365__$1 = cljs.core.get.call(null,inst_37364,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37366 = cljs.core.get.call(null,inst_37364,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37367 = cljs.core.not_empty.call(null,inst_37365__$1);
var state_37390__$1 = (function (){var statearr_37412 = state_37390;
(statearr_37412[(21)] = inst_37366);

(statearr_37412[(20)] = inst_37365__$1);

return statearr_37412;
})();
if(cljs.core.truth_(inst_37367)){
var statearr_37413_37495 = state_37390__$1;
(statearr_37413_37495[(1)] = (41));

} else {
var statearr_37414_37496 = state_37390__$1;
(statearr_37414_37496[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (33))){
var state_37390__$1 = state_37390;
var statearr_37415_37497 = state_37390__$1;
(statearr_37415_37497[(2)] = false);

(statearr_37415_37497[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (13))){
var inst_37264 = (state_37390[(22)]);
var inst_37268 = cljs.core.chunk_first.call(null,inst_37264);
var inst_37269 = cljs.core.chunk_rest.call(null,inst_37264);
var inst_37270 = cljs.core.count.call(null,inst_37268);
var inst_37251 = inst_37269;
var inst_37252 = inst_37268;
var inst_37253 = inst_37270;
var inst_37254 = (0);
var state_37390__$1 = (function (){var statearr_37416 = state_37390;
(statearr_37416[(7)] = inst_37252);

(statearr_37416[(8)] = inst_37251);

(statearr_37416[(9)] = inst_37254);

(statearr_37416[(10)] = inst_37253);

return statearr_37416;
})();
var statearr_37417_37498 = state_37390__$1;
(statearr_37417_37498[(2)] = null);

(statearr_37417_37498[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (22))){
var inst_37307 = (state_37390[(23)]);
var inst_37304 = (state_37390[(19)]);
var inst_37308 = (state_37390[(24)]);
var inst_37312 = (state_37390[(25)]);
var inst_37307__$1 = (state_37390[(2)]);
var inst_37308__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37307__$1);
var inst_37309 = (function (){var all_files = inst_37304;
var res_SINGLEQUOTE_ = inst_37307__$1;
var res = inst_37308__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37307,inst_37304,inst_37308,inst_37312,inst_37307__$1,inst_37308__$1,state_val_37391,c__33763__auto__,map__37236,map__37236__$1,opts,before_jsload,on_jsload,reload_dependents,map__37237,map__37237__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36987_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36987_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37307,inst_37304,inst_37308,inst_37312,inst_37307__$1,inst_37308__$1,state_val_37391,c__33763__auto__,map__37236,map__37236__$1,opts,before_jsload,on_jsload,reload_dependents,map__37237,map__37237__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37310 = cljs.core.filter.call(null,inst_37309,inst_37307__$1);
var inst_37311 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37312__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37311);
var inst_37313 = cljs.core.not_empty.call(null,inst_37312__$1);
var state_37390__$1 = (function (){var statearr_37418 = state_37390;
(statearr_37418[(23)] = inst_37307__$1);

(statearr_37418[(26)] = inst_37310);

(statearr_37418[(24)] = inst_37308__$1);

(statearr_37418[(25)] = inst_37312__$1);

return statearr_37418;
})();
if(cljs.core.truth_(inst_37313)){
var statearr_37419_37499 = state_37390__$1;
(statearr_37419_37499[(1)] = (23));

} else {
var statearr_37420_37500 = state_37390__$1;
(statearr_37420_37500[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (36))){
var state_37390__$1 = state_37390;
var statearr_37421_37501 = state_37390__$1;
(statearr_37421_37501[(2)] = false);

(statearr_37421_37501[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (41))){
var inst_37365 = (state_37390[(20)]);
var inst_37369 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37370 = cljs.core.map.call(null,inst_37369,inst_37365);
var inst_37371 = cljs.core.pr_str.call(null,inst_37370);
var inst_37372 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_37371)].join('');
var inst_37373 = figwheel.client.utils.log.call(null,inst_37372);
var state_37390__$1 = state_37390;
var statearr_37422_37502 = state_37390__$1;
(statearr_37422_37502[(2)] = inst_37373);

(statearr_37422_37502[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (43))){
var inst_37366 = (state_37390[(21)]);
var inst_37376 = (state_37390[(2)]);
var inst_37377 = cljs.core.not_empty.call(null,inst_37366);
var state_37390__$1 = (function (){var statearr_37423 = state_37390;
(statearr_37423[(27)] = inst_37376);

return statearr_37423;
})();
if(cljs.core.truth_(inst_37377)){
var statearr_37424_37503 = state_37390__$1;
(statearr_37424_37503[(1)] = (44));

} else {
var statearr_37425_37504 = state_37390__$1;
(statearr_37425_37504[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (29))){
var inst_37307 = (state_37390[(23)]);
var inst_37304 = (state_37390[(19)]);
var inst_37344 = (state_37390[(16)]);
var inst_37310 = (state_37390[(26)]);
var inst_37308 = (state_37390[(24)]);
var inst_37312 = (state_37390[(25)]);
var inst_37340 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37343 = (function (){var all_files = inst_37304;
var res_SINGLEQUOTE_ = inst_37307;
var res = inst_37308;
var files_not_loaded = inst_37310;
var dependencies_that_loaded = inst_37312;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37307,inst_37304,inst_37344,inst_37310,inst_37308,inst_37312,inst_37340,state_val_37391,c__33763__auto__,map__37236,map__37236__$1,opts,before_jsload,on_jsload,reload_dependents,map__37237,map__37237__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37342){
var map__37426 = p__37342;
var map__37426__$1 = ((((!((map__37426 == null)))?((((map__37426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37426):map__37426);
var namespace = cljs.core.get.call(null,map__37426__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37307,inst_37304,inst_37344,inst_37310,inst_37308,inst_37312,inst_37340,state_val_37391,c__33763__auto__,map__37236,map__37236__$1,opts,before_jsload,on_jsload,reload_dependents,map__37237,map__37237__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37344__$1 = cljs.core.group_by.call(null,inst_37343,inst_37310);
var inst_37346 = (inst_37344__$1 == null);
var inst_37347 = cljs.core.not.call(null,inst_37346);
var state_37390__$1 = (function (){var statearr_37428 = state_37390;
(statearr_37428[(16)] = inst_37344__$1);

(statearr_37428[(28)] = inst_37340);

return statearr_37428;
})();
if(inst_37347){
var statearr_37429_37505 = state_37390__$1;
(statearr_37429_37505[(1)] = (32));

} else {
var statearr_37430_37506 = state_37390__$1;
(statearr_37430_37506[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (44))){
var inst_37366 = (state_37390[(21)]);
var inst_37379 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37366);
var inst_37380 = cljs.core.pr_str.call(null,inst_37379);
var inst_37381 = [cljs.core.str("not required: "),cljs.core.str(inst_37380)].join('');
var inst_37382 = figwheel.client.utils.log.call(null,inst_37381);
var state_37390__$1 = state_37390;
var statearr_37431_37507 = state_37390__$1;
(statearr_37431_37507[(2)] = inst_37382);

(statearr_37431_37507[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (6))){
var inst_37285 = (state_37390[(2)]);
var state_37390__$1 = state_37390;
var statearr_37432_37508 = state_37390__$1;
(statearr_37432_37508[(2)] = inst_37285);

(statearr_37432_37508[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (28))){
var inst_37310 = (state_37390[(26)]);
var inst_37337 = (state_37390[(2)]);
var inst_37338 = cljs.core.not_empty.call(null,inst_37310);
var state_37390__$1 = (function (){var statearr_37433 = state_37390;
(statearr_37433[(29)] = inst_37337);

return statearr_37433;
})();
if(cljs.core.truth_(inst_37338)){
var statearr_37434_37509 = state_37390__$1;
(statearr_37434_37509[(1)] = (29));

} else {
var statearr_37435_37510 = state_37390__$1;
(statearr_37435_37510[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (25))){
var inst_37308 = (state_37390[(24)]);
var inst_37324 = (state_37390[(2)]);
var inst_37325 = cljs.core.not_empty.call(null,inst_37308);
var state_37390__$1 = (function (){var statearr_37436 = state_37390;
(statearr_37436[(30)] = inst_37324);

return statearr_37436;
})();
if(cljs.core.truth_(inst_37325)){
var statearr_37437_37511 = state_37390__$1;
(statearr_37437_37511[(1)] = (26));

} else {
var statearr_37438_37512 = state_37390__$1;
(statearr_37438_37512[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (34))){
var inst_37359 = (state_37390[(2)]);
var state_37390__$1 = state_37390;
if(cljs.core.truth_(inst_37359)){
var statearr_37439_37513 = state_37390__$1;
(statearr_37439_37513[(1)] = (38));

} else {
var statearr_37440_37514 = state_37390__$1;
(statearr_37440_37514[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (17))){
var state_37390__$1 = state_37390;
var statearr_37441_37515 = state_37390__$1;
(statearr_37441_37515[(2)] = recompile_dependents);

(statearr_37441_37515[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (3))){
var state_37390__$1 = state_37390;
var statearr_37442_37516 = state_37390__$1;
(statearr_37442_37516[(2)] = null);

(statearr_37442_37516[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (12))){
var inst_37281 = (state_37390[(2)]);
var state_37390__$1 = state_37390;
var statearr_37443_37517 = state_37390__$1;
(statearr_37443_37517[(2)] = inst_37281);

(statearr_37443_37517[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (2))){
var inst_37243 = (state_37390[(13)]);
var inst_37250 = cljs.core.seq.call(null,inst_37243);
var inst_37251 = inst_37250;
var inst_37252 = null;
var inst_37253 = (0);
var inst_37254 = (0);
var state_37390__$1 = (function (){var statearr_37444 = state_37390;
(statearr_37444[(7)] = inst_37252);

(statearr_37444[(8)] = inst_37251);

(statearr_37444[(9)] = inst_37254);

(statearr_37444[(10)] = inst_37253);

return statearr_37444;
})();
var statearr_37445_37518 = state_37390__$1;
(statearr_37445_37518[(2)] = null);

(statearr_37445_37518[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (23))){
var inst_37307 = (state_37390[(23)]);
var inst_37304 = (state_37390[(19)]);
var inst_37310 = (state_37390[(26)]);
var inst_37308 = (state_37390[(24)]);
var inst_37312 = (state_37390[(25)]);
var inst_37315 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37317 = (function (){var all_files = inst_37304;
var res_SINGLEQUOTE_ = inst_37307;
var res = inst_37308;
var files_not_loaded = inst_37310;
var dependencies_that_loaded = inst_37312;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37307,inst_37304,inst_37310,inst_37308,inst_37312,inst_37315,state_val_37391,c__33763__auto__,map__37236,map__37236__$1,opts,before_jsload,on_jsload,reload_dependents,map__37237,map__37237__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37316){
var map__37446 = p__37316;
var map__37446__$1 = ((((!((map__37446 == null)))?((((map__37446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37446):map__37446);
var request_url = cljs.core.get.call(null,map__37446__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37307,inst_37304,inst_37310,inst_37308,inst_37312,inst_37315,state_val_37391,c__33763__auto__,map__37236,map__37236__$1,opts,before_jsload,on_jsload,reload_dependents,map__37237,map__37237__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37318 = cljs.core.reverse.call(null,inst_37312);
var inst_37319 = cljs.core.map.call(null,inst_37317,inst_37318);
var inst_37320 = cljs.core.pr_str.call(null,inst_37319);
var inst_37321 = figwheel.client.utils.log.call(null,inst_37320);
var state_37390__$1 = (function (){var statearr_37448 = state_37390;
(statearr_37448[(31)] = inst_37315);

return statearr_37448;
})();
var statearr_37449_37519 = state_37390__$1;
(statearr_37449_37519[(2)] = inst_37321);

(statearr_37449_37519[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (35))){
var state_37390__$1 = state_37390;
var statearr_37450_37520 = state_37390__$1;
(statearr_37450_37520[(2)] = true);

(statearr_37450_37520[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (19))){
var inst_37294 = (state_37390[(12)]);
var inst_37300 = figwheel.client.file_reloading.expand_files.call(null,inst_37294);
var state_37390__$1 = state_37390;
var statearr_37451_37521 = state_37390__$1;
(statearr_37451_37521[(2)] = inst_37300);

(statearr_37451_37521[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (11))){
var state_37390__$1 = state_37390;
var statearr_37452_37522 = state_37390__$1;
(statearr_37452_37522[(2)] = null);

(statearr_37452_37522[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (9))){
var inst_37283 = (state_37390[(2)]);
var state_37390__$1 = state_37390;
var statearr_37453_37523 = state_37390__$1;
(statearr_37453_37523[(2)] = inst_37283);

(statearr_37453_37523[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (5))){
var inst_37254 = (state_37390[(9)]);
var inst_37253 = (state_37390[(10)]);
var inst_37256 = (inst_37254 < inst_37253);
var inst_37257 = inst_37256;
var state_37390__$1 = state_37390;
if(cljs.core.truth_(inst_37257)){
var statearr_37454_37524 = state_37390__$1;
(statearr_37454_37524[(1)] = (7));

} else {
var statearr_37455_37525 = state_37390__$1;
(statearr_37455_37525[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (14))){
var inst_37264 = (state_37390[(22)]);
var inst_37273 = cljs.core.first.call(null,inst_37264);
var inst_37274 = figwheel.client.file_reloading.eval_body.call(null,inst_37273,opts);
var inst_37275 = cljs.core.next.call(null,inst_37264);
var inst_37251 = inst_37275;
var inst_37252 = null;
var inst_37253 = (0);
var inst_37254 = (0);
var state_37390__$1 = (function (){var statearr_37456 = state_37390;
(statearr_37456[(7)] = inst_37252);

(statearr_37456[(8)] = inst_37251);

(statearr_37456[(32)] = inst_37274);

(statearr_37456[(9)] = inst_37254);

(statearr_37456[(10)] = inst_37253);

return statearr_37456;
})();
var statearr_37457_37526 = state_37390__$1;
(statearr_37457_37526[(2)] = null);

(statearr_37457_37526[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (45))){
var state_37390__$1 = state_37390;
var statearr_37458_37527 = state_37390__$1;
(statearr_37458_37527[(2)] = null);

(statearr_37458_37527[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (26))){
var inst_37307 = (state_37390[(23)]);
var inst_37304 = (state_37390[(19)]);
var inst_37310 = (state_37390[(26)]);
var inst_37308 = (state_37390[(24)]);
var inst_37312 = (state_37390[(25)]);
var inst_37327 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37329 = (function (){var all_files = inst_37304;
var res_SINGLEQUOTE_ = inst_37307;
var res = inst_37308;
var files_not_loaded = inst_37310;
var dependencies_that_loaded = inst_37312;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37307,inst_37304,inst_37310,inst_37308,inst_37312,inst_37327,state_val_37391,c__33763__auto__,map__37236,map__37236__$1,opts,before_jsload,on_jsload,reload_dependents,map__37237,map__37237__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37328){
var map__37459 = p__37328;
var map__37459__$1 = ((((!((map__37459 == null)))?((((map__37459.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37459.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37459):map__37459);
var namespace = cljs.core.get.call(null,map__37459__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37459__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37307,inst_37304,inst_37310,inst_37308,inst_37312,inst_37327,state_val_37391,c__33763__auto__,map__37236,map__37236__$1,opts,before_jsload,on_jsload,reload_dependents,map__37237,map__37237__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37330 = cljs.core.map.call(null,inst_37329,inst_37308);
var inst_37331 = cljs.core.pr_str.call(null,inst_37330);
var inst_37332 = figwheel.client.utils.log.call(null,inst_37331);
var inst_37333 = (function (){var all_files = inst_37304;
var res_SINGLEQUOTE_ = inst_37307;
var res = inst_37308;
var files_not_loaded = inst_37310;
var dependencies_that_loaded = inst_37312;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37307,inst_37304,inst_37310,inst_37308,inst_37312,inst_37327,inst_37329,inst_37330,inst_37331,inst_37332,state_val_37391,c__33763__auto__,map__37236,map__37236__$1,opts,before_jsload,on_jsload,reload_dependents,map__37237,map__37237__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37307,inst_37304,inst_37310,inst_37308,inst_37312,inst_37327,inst_37329,inst_37330,inst_37331,inst_37332,state_val_37391,c__33763__auto__,map__37236,map__37236__$1,opts,before_jsload,on_jsload,reload_dependents,map__37237,map__37237__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37334 = setTimeout(inst_37333,(10));
var state_37390__$1 = (function (){var statearr_37461 = state_37390;
(statearr_37461[(33)] = inst_37327);

(statearr_37461[(34)] = inst_37332);

return statearr_37461;
})();
var statearr_37462_37528 = state_37390__$1;
(statearr_37462_37528[(2)] = inst_37334);

(statearr_37462_37528[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (16))){
var state_37390__$1 = state_37390;
var statearr_37463_37529 = state_37390__$1;
(statearr_37463_37529[(2)] = reload_dependents);

(statearr_37463_37529[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (38))){
var inst_37344 = (state_37390[(16)]);
var inst_37361 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37344);
var state_37390__$1 = state_37390;
var statearr_37464_37530 = state_37390__$1;
(statearr_37464_37530[(2)] = inst_37361);

(statearr_37464_37530[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (30))){
var state_37390__$1 = state_37390;
var statearr_37465_37531 = state_37390__$1;
(statearr_37465_37531[(2)] = null);

(statearr_37465_37531[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (10))){
var inst_37264 = (state_37390[(22)]);
var inst_37266 = cljs.core.chunked_seq_QMARK_.call(null,inst_37264);
var state_37390__$1 = state_37390;
if(inst_37266){
var statearr_37466_37532 = state_37390__$1;
(statearr_37466_37532[(1)] = (13));

} else {
var statearr_37467_37533 = state_37390__$1;
(statearr_37467_37533[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (18))){
var inst_37298 = (state_37390[(2)]);
var state_37390__$1 = state_37390;
if(cljs.core.truth_(inst_37298)){
var statearr_37468_37534 = state_37390__$1;
(statearr_37468_37534[(1)] = (19));

} else {
var statearr_37469_37535 = state_37390__$1;
(statearr_37469_37535[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (42))){
var state_37390__$1 = state_37390;
var statearr_37470_37536 = state_37390__$1;
(statearr_37470_37536[(2)] = null);

(statearr_37470_37536[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (37))){
var inst_37356 = (state_37390[(2)]);
var state_37390__$1 = state_37390;
var statearr_37471_37537 = state_37390__$1;
(statearr_37471_37537[(2)] = inst_37356);

(statearr_37471_37537[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37391 === (8))){
var inst_37251 = (state_37390[(8)]);
var inst_37264 = (state_37390[(22)]);
var inst_37264__$1 = cljs.core.seq.call(null,inst_37251);
var state_37390__$1 = (function (){var statearr_37472 = state_37390;
(statearr_37472[(22)] = inst_37264__$1);

return statearr_37472;
})();
if(inst_37264__$1){
var statearr_37473_37538 = state_37390__$1;
(statearr_37473_37538[(1)] = (10));

} else {
var statearr_37474_37539 = state_37390__$1;
(statearr_37474_37539[(1)] = (11));

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
});})(c__33763__auto__,map__37236,map__37236__$1,opts,before_jsload,on_jsload,reload_dependents,map__37237,map__37237__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33651__auto__,c__33763__auto__,map__37236,map__37236__$1,opts,before_jsload,on_jsload,reload_dependents,map__37237,map__37237__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33652__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33652__auto____0 = (function (){
var statearr_37478 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37478[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33652__auto__);

(statearr_37478[(1)] = (1));

return statearr_37478;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33652__auto____1 = (function (state_37390){
while(true){
var ret_value__33653__auto__ = (function (){try{while(true){
var result__33654__auto__ = switch__33651__auto__.call(null,state_37390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33654__auto__;
}
break;
}
}catch (e37479){if((e37479 instanceof Object)){
var ex__33655__auto__ = e37479;
var statearr_37480_37540 = state_37390;
(statearr_37480_37540[(5)] = ex__33655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37541 = state_37390;
state_37390 = G__37541;
continue;
} else {
return ret_value__33653__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33652__auto__ = function(state_37390){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33652__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33652__auto____1.call(this,state_37390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33652__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33652__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33652__auto__;
})()
;})(switch__33651__auto__,c__33763__auto__,map__37236,map__37236__$1,opts,before_jsload,on_jsload,reload_dependents,map__37237,map__37237__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33765__auto__ = (function (){var statearr_37481 = f__33764__auto__.call(null);
(statearr_37481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33763__auto__);

return statearr_37481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33765__auto__);
});})(c__33763__auto__,map__37236,map__37236__$1,opts,before_jsload,on_jsload,reload_dependents,map__37237,map__37237__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33763__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37544,link){
var map__37547 = p__37544;
var map__37547__$1 = ((((!((map__37547 == null)))?((((map__37547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37547):map__37547);
var file = cljs.core.get.call(null,map__37547__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__37547,map__37547__$1,file){
return (function (p1__37542_SHARP_,p2__37543_SHARP_){
if(cljs.core._EQ_.call(null,p1__37542_SHARP_,p2__37543_SHARP_)){
return p1__37542_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__37547,map__37547__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37553){
var map__37554 = p__37553;
var map__37554__$1 = ((((!((map__37554 == null)))?((((map__37554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37554):map__37554);
var match_length = cljs.core.get.call(null,map__37554__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37554__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37549_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37549_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args37556 = [];
var len__30408__auto___37559 = arguments.length;
var i__30409__auto___37560 = (0);
while(true){
if((i__30409__auto___37560 < len__30408__auto___37559)){
args37556.push((arguments[i__30409__auto___37560]));

var G__37561 = (i__30409__auto___37560 + (1));
i__30409__auto___37560 = G__37561;
continue;
} else {
}
break;
}

var G__37558 = args37556.length;
switch (G__37558) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37556.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37563_SHARP_,p2__37564_SHARP_){
return cljs.core.assoc.call(null,p1__37563_SHARP_,cljs.core.get.call(null,p2__37564_SHARP_,key),p2__37564_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__37565){
var map__37568 = p__37565;
var map__37568__$1 = ((((!((map__37568 == null)))?((((map__37568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37568):map__37568);
var f_data = map__37568__$1;
var file = cljs.core.get.call(null,map__37568__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37570,files_msg){
var map__37577 = p__37570;
var map__37577__$1 = ((((!((map__37577 == null)))?((((map__37577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37577):map__37577);
var opts = map__37577__$1;
var on_cssload = cljs.core.get.call(null,map__37577__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__37579_37583 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__37580_37584 = null;
var count__37581_37585 = (0);
var i__37582_37586 = (0);
while(true){
if((i__37582_37586 < count__37581_37585)){
var f_37587 = cljs.core._nth.call(null,chunk__37580_37584,i__37582_37586);
figwheel.client.file_reloading.reload_css_file.call(null,f_37587);

var G__37588 = seq__37579_37583;
var G__37589 = chunk__37580_37584;
var G__37590 = count__37581_37585;
var G__37591 = (i__37582_37586 + (1));
seq__37579_37583 = G__37588;
chunk__37580_37584 = G__37589;
count__37581_37585 = G__37590;
i__37582_37586 = G__37591;
continue;
} else {
var temp__4657__auto___37592 = cljs.core.seq.call(null,seq__37579_37583);
if(temp__4657__auto___37592){
var seq__37579_37593__$1 = temp__4657__auto___37592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37579_37593__$1)){
var c__30150__auto___37594 = cljs.core.chunk_first.call(null,seq__37579_37593__$1);
var G__37595 = cljs.core.chunk_rest.call(null,seq__37579_37593__$1);
var G__37596 = c__30150__auto___37594;
var G__37597 = cljs.core.count.call(null,c__30150__auto___37594);
var G__37598 = (0);
seq__37579_37583 = G__37595;
chunk__37580_37584 = G__37596;
count__37581_37585 = G__37597;
i__37582_37586 = G__37598;
continue;
} else {
var f_37599 = cljs.core.first.call(null,seq__37579_37593__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_37599);

var G__37600 = cljs.core.next.call(null,seq__37579_37593__$1);
var G__37601 = null;
var G__37602 = (0);
var G__37603 = (0);
seq__37579_37583 = G__37600;
chunk__37580_37584 = G__37601;
count__37581_37585 = G__37602;
i__37582_37586 = G__37603;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__37577,map__37577__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__37577,map__37577__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map