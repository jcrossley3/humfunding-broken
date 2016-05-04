// Compiled by ClojureScript 1.8.40 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37620_37634 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37621_37635 = null;
var count__37622_37636 = (0);
var i__37623_37637 = (0);
while(true){
if((i__37623_37637 < count__37622_37636)){
var f_37638 = cljs.core._nth.call(null,chunk__37621_37635,i__37623_37637);
cljs.core.println.call(null,"  ",f_37638);

var G__37639 = seq__37620_37634;
var G__37640 = chunk__37621_37635;
var G__37641 = count__37622_37636;
var G__37642 = (i__37623_37637 + (1));
seq__37620_37634 = G__37639;
chunk__37621_37635 = G__37640;
count__37622_37636 = G__37641;
i__37623_37637 = G__37642;
continue;
} else {
var temp__4657__auto___37643 = cljs.core.seq.call(null,seq__37620_37634);
if(temp__4657__auto___37643){
var seq__37620_37644__$1 = temp__4657__auto___37643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37620_37644__$1)){
var c__30150__auto___37645 = cljs.core.chunk_first.call(null,seq__37620_37644__$1);
var G__37646 = cljs.core.chunk_rest.call(null,seq__37620_37644__$1);
var G__37647 = c__30150__auto___37645;
var G__37648 = cljs.core.count.call(null,c__30150__auto___37645);
var G__37649 = (0);
seq__37620_37634 = G__37646;
chunk__37621_37635 = G__37647;
count__37622_37636 = G__37648;
i__37623_37637 = G__37649;
continue;
} else {
var f_37650 = cljs.core.first.call(null,seq__37620_37644__$1);
cljs.core.println.call(null,"  ",f_37650);

var G__37651 = cljs.core.next.call(null,seq__37620_37644__$1);
var G__37652 = null;
var G__37653 = (0);
var G__37654 = (0);
seq__37620_37634 = G__37651;
chunk__37621_37635 = G__37652;
count__37622_37636 = G__37653;
i__37623_37637 = G__37654;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37655 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__29339__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__29339__auto__)){
return or__29339__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37655);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37655)))?cljs.core.second.call(null,arglists_37655):arglists_37655));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37624 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37625 = null;
var count__37626 = (0);
var i__37627 = (0);
while(true){
if((i__37627 < count__37626)){
var vec__37628 = cljs.core._nth.call(null,chunk__37625,i__37627);
var name = cljs.core.nth.call(null,vec__37628,(0),null);
var map__37629 = cljs.core.nth.call(null,vec__37628,(1),null);
var map__37629__$1 = ((((!((map__37629 == null)))?((((map__37629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37629):map__37629);
var doc = cljs.core.get.call(null,map__37629__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__37629__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__37656 = seq__37624;
var G__37657 = chunk__37625;
var G__37658 = count__37626;
var G__37659 = (i__37627 + (1));
seq__37624 = G__37656;
chunk__37625 = G__37657;
count__37626 = G__37658;
i__37627 = G__37659;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37624);
if(temp__4657__auto__){
var seq__37624__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37624__$1)){
var c__30150__auto__ = cljs.core.chunk_first.call(null,seq__37624__$1);
var G__37660 = cljs.core.chunk_rest.call(null,seq__37624__$1);
var G__37661 = c__30150__auto__;
var G__37662 = cljs.core.count.call(null,c__30150__auto__);
var G__37663 = (0);
seq__37624 = G__37660;
chunk__37625 = G__37661;
count__37626 = G__37662;
i__37627 = G__37663;
continue;
} else {
var vec__37631 = cljs.core.first.call(null,seq__37624__$1);
var name = cljs.core.nth.call(null,vec__37631,(0),null);
var map__37632 = cljs.core.nth.call(null,vec__37631,(1),null);
var map__37632__$1 = ((((!((map__37632 == null)))?((((map__37632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37632):map__37632);
var doc = cljs.core.get.call(null,map__37632__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__37632__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__37664 = cljs.core.next.call(null,seq__37624__$1);
var G__37665 = null;
var G__37666 = (0);
var G__37667 = (0);
seq__37624 = G__37664;
chunk__37625 = G__37665;
count__37626 = G__37666;
i__37627 = G__37667;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map