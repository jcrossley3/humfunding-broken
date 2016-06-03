// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('markdown.links');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('markdown.common');
markdown.links.href = (function markdown$links$href(title,link,state){
return markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.seq("<a href='"),link,cljs.core.seq("'>"),title,cljs.core.seq("</a>"),state], 0));
});
markdown.links.img = (function markdown$links$img(var_args){
var args__7192__auto__ = [];
var len__7185__auto___13982 = arguments.length;
var i__7186__auto___13983 = (0);
while(true){
if((i__7186__auto___13983 < len__7185__auto___13982)){
args__7192__auto__.push((arguments[i__7186__auto___13983]));

var G__13984 = (i__7186__auto___13983 + (1));
i__7186__auto___13983 = G__13984;
continue;
} else {
}
break;
}

var argseq__7193__auto__ = ((((3) < args__7192__auto__.length))?(new cljs.core.IndexedSeq(args__7192__auto__.slice((3)),(0),null)):null);
return markdown.links.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7193__auto__);
});

markdown.links.img.cljs$core$IFn$_invoke$arity$variadic = (function (alt,url,state,p__13980){
var vec__13981 = p__13980;
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13981,(0),null);
return markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.seq("<img src=\""),url,cljs.core.seq("\" alt=\""),alt,(cljs.core.truth_(cljs.core.not_empty(title))?cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"\" title=",clojure.string.join.cljs$core$IFn$_invoke$arity$1(title)," />")):cljs.core.seq("\" />")),state], 0));
});

markdown.links.img.cljs$lang$maxFixedArity = (3);

markdown.links.img.cljs$lang$applyTo = (function (seq13976){
var G__13977 = cljs.core.first(seq13976);
var seq13976__$1 = cljs.core.next(seq13976);
var G__13978 = cljs.core.first(seq13976__$1);
var seq13976__$2 = cljs.core.next(seq13976__$1);
var G__13979 = cljs.core.first(seq13976__$2);
var seq13976__$3 = cljs.core.next(seq13976__$2);
return markdown.links.img.cljs$core$IFn$_invoke$arity$variadic(G__13977,G__13978,G__13979,seq13976__$3);
});
markdown.links.handle_img_link = (function markdown$links$handle_img_link(xs,state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","!","["], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),xs))){
var xs__$1 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),xs);
var vec__13989 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"]"),xs__$1);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13989,(0),null);
var xy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13989,(1),null);
var vec__13990 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,")"),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),xy));
var url_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13990,(0),null);
var zy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13990,(1),null);
var vec__13991 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),url_title);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13991,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13991,(1),null);
var vec__13992 = markdown.links.img.cljs$core$IFn$_invoke$arity$variadic(alt,url,state,cljs.core.array_seq([cljs.core.not_empty(title)], 0));
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13992,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13992,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic("[",new_text,cljs.core.array_seq([cljs.core.rest(zy)], 0)),new_state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs,state], null);
}
});
markdown.links.process_link_title = (function markdown$links$process_link_title(title,state){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__13994_SHARP_,p2__13993_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(p2__13993_SHARP_,p1__13994_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,state], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.common.italics,markdown.common.em,markdown.common.strong,markdown.common.bold,markdown.common.strikethrough], null)));
});
markdown.links.make_link = (function markdown$links$make_link(img_QMARK_){
return (function markdown$links$make_link_$_link(text,p__14016){
var map__14027 = p__14016;
var map__14027__$1 = ((((!((map__14027 == null)))?((((map__14027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14027):map__14027);
var state = map__14027__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14027__$1,cljs.core.cst$kw$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14027__$1,cljs.core.cst$kw$codeblock);
if(cljs.core.truth_((function (){var or__6116__auto__ = code;
if(cljs.core.truth_(or__6116__auto__)){
return or__6116__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.seq(text);
var loop_state = state;
while(true){
if(cljs.core.empty_QMARK_(tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$1(out),loop_state], null);
} else {
var vec__14029 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"["),tokens);
var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14029,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14029,(1),null);
var vec__14030 = markdown.links.handle_img_link(xs,loop_state);
var xs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14030,(0),null);
var loop_state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14030,(1),null);
var vec__14031 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"]"),xs__$1);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14031,(0),null);
var ys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14031,(1),null);
var vec__14032 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"("),ys);
var dud = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14032,(0),null);
var zs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14032,(1),null);
var vec__14033 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,")"),zs);
var link__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14033,(0),null);
var tail = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14033,(1),null);
if(((cljs.core.count(link__$1) < (2))) || ((cljs.core.count(tail) < (1))) || ((cljs.core.count(dud) > (1)))){
var G__14037 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(out,head,cljs.core.array_seq([markdown.links.process_link_title(title,state),dud,link__$1], 0));
var G__14038 = tail;
var G__14039 = loop_state__$1;
out = G__14037;
tokens = G__14038;
loop_state = G__14039;
continue;
} else {
if((cljs.core.not(img_QMARK_)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(head),"!"))){
var vec__14034 = markdown.links.href(cljs.core.rest(markdown.links.process_link_title(title,state)),cljs.core.rest(link__$1),loop_state__$1);
var link_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14034,(0),null);
var new_loop_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14034,(1),null);
var G__14040 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(out,head,cljs.core.array_seq([link_text], 0));
var G__14041 = cljs.core.rest(tail);
var G__14042 = new_loop_state;
out = G__14040;
tokens = G__14041;
loop_state = G__14042;
continue;
} else {
if(cljs.core.truth_((function (){var and__6104__auto__ = img_QMARK_;
if(cljs.core.truth_(and__6104__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(head),"!");
} else {
return and__6104__auto__;
}
})())){
var alt = cljs.core.rest(title);
var vec__14035 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),cljs.core.rest(link__$1));
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14035,(0),null);
var title__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14035,(1),null);
var title__$2 = markdown.links.process_link_title(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.rest(title__$1)),loop_state__$1);
var vec__14036 = markdown.links.img.cljs$core$IFn$_invoke$arity$variadic(alt,url,loop_state__$1,cljs.core.array_seq([title__$2], 0));
var img_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14036,(0),null);
var new_loop_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14036,(1),null);
var G__14043 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(head),img_text);
var G__14044 = cljs.core.rest(tail);
var G__14045 = new_loop_state;
out = G__14043;
tokens = G__14044;
loop_state = G__14045;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}
break;
}
}
});
});
markdown.links.link = markdown.links.make_link(false);
markdown.links.image = markdown.links.make_link(true);
markdown.links.reference = (function markdown$links$reference(text){
return cljs.core.re_find(/^\[[a-zA-Z0-9 ]+\]:/,text);
});
markdown.links.parse_reference = (function markdown$links$parse_reference(reference,start){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(reference,start)),/\s+/,(2));
});
markdown.links.parse_reference_link = (function markdown$links$parse_reference_link(line,references){
var trimmed = clojure.string.trim(line);
var temp__4657__auto__ = markdown.links.reference(trimmed);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(references,cljs.core.assoc,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(link,(0),(cljs.core.count(link) - (1))),markdown.links.parse_reference(trimmed,(cljs.core.count(link) + (1))));
} else {
return null;
}
});
markdown.links.replace_reference_link = (function markdown$links$replace_reference_link(references,reference){
var vec__14048 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(reference,/\]\s*/,(2));
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14048,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14048,(1),null);
var vec__14049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(references,id);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14049,(0),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14049,(1),null);
return [cljs.core.str("<a href='"),cljs.core.str(link),cljs.core.str("'"),cljs.core.str((cljs.core.truth_(alt)?[cljs.core.str(" title='"),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(alt,(1),(cljs.core.count(alt) - (1)))),cljs.core.str("'")].join(''):null)),cljs.core.str(">"),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(title,(1))),cljs.core.str("</a>")].join('');
});
markdown.links.encode_links = (function markdown$links$encode_links(links,i){
return cljs.core.second(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__14052,link){
var vec__14053 = p__14052;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14053,(0),null);
var encoded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14053,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(encoded,markdown.common.gen_token(i__$1),link)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.PersistentArrayMap.EMPTY], null),links));
});
markdown.links.parse_links = (function markdown$links$parse_links(references,links){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14056){
var vec__14057 = p__14056;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14057,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14057,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,markdown.links.replace_reference_link(references,v)], null);
}),links));
});
markdown.links.freeze_links = (function markdown$links$freeze_links(references,text,state){
var links = cljs.core.re_seq(/\[[^\]]+\]\s*\[[a-zA-Z0-9 ]+\]/,text);
var encoded_links = markdown.links.encode_links(links,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.PersistentVector.EMPTY).call(null,cljs.core.cst$kw$frozen_DASH_strings.cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (links,encoded_links){
return (function (s,p__14060){
var vec__14061 = p__14060;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14061,(0),null);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14061,(1),null);
return clojure.string.replace(s,link,id);
});})(links,encoded_links))
,text,encoded_links),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$frozen_DASH_strings,cljs.core.merge,markdown.links.parse_links(references,encoded_links))], null);
});
markdown.links.reference_link = (function markdown$links$reference_link(text,p__14062){
var map__14065 = p__14062;
var map__14065__$1 = ((((!((map__14065 == null)))?((((map__14065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14065):map__14065);
var state = map__14065__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14065__$1,cljs.core.cst$kw$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14065__$1,cljs.core.cst$kw$codeblock);
var references = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14065__$1,cljs.core.cst$kw$references);
if(cljs.core.truth_((function (){var or__6116__auto__ = (references == null);
if(or__6116__auto__){
return or__6116__auto__;
} else {
var or__6116__auto____$1 = code;
if(cljs.core.truth_(or__6116__auto____$1)){
return or__6116__auto____$1;
} else {
return codeblock;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.links.reference(clojure.string.trim(text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
return markdown.links.freeze_links(references,text,state);

}
}
});
markdown.links.implicit_reference_link = (function markdown$links$implicit_reference_link(text,state){
var replacement_text = clojure.string.replace(text,/\[([^\]]+)\]\[\]/,"[$1][$1]");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replacement_text,state], null);
});
markdown.links.footnote = (function markdown$links$footnote(text){
return cljs.core.re_find(/^\[\^[a-zA-Z0-9_-]+\]:/,text);
});
markdown.links.parse_footnote_link = (function markdown$links$parse_footnote_link(line,footnotes){
var trimmed = clojure.string.trim(line);
var temp__4657__auto__ = markdown.links.footnote(trimmed);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(footnotes,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unprocessed,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(link,(0),(cljs.core.count(link) - (1)))], null),markdown.links.parse_reference(trimmed,(cljs.core.count(link) + (1))));
} else {
return null;
}
});
markdown.links.replace_footnote_link = (function markdown$links$replace_footnote_link(footnotes,footnote){
var next_fn_id = cljs.core.cst$kw$next_DASH_fn_DASH_id.cljs$core$IFn$_invoke$arity$1(footnotes);
var link = [cljs.core.str("#fn-"),cljs.core.str(next_fn_id)].join('');
return [cljs.core.str("<a href='"),cljs.core.str(link),cljs.core.str("' id='fnref"),cljs.core.str(next_fn_id),cljs.core.str("'><sup>"),cljs.core.str(next_fn_id),cljs.core.str("</sup></a>")].join('');
});
markdown.links.replace_all_footnote_links = (function markdown$links$replace_all_footnote_links(text,p__14067){
while(true){
var map__14070 = p__14067;
var map__14070__$1 = ((((!((map__14070 == null)))?((((map__14070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14070):map__14070);
var state = map__14070__$1;
var footnotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14070__$1,cljs.core.cst$kw$footnotes);
var matcher = /\[\^[a-zA-Z0-9_-]+\]/;
var match = cljs.core.re_find(matcher,text);
if((match == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var next_text = clojure.string.replace_first(text,matcher,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(markdown.links.replace_footnote_link,footnotes));
var next_state = cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footnotes,cljs.core.cst$kw$next_DASH_fn_DASH_id], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footnotes,cljs.core.cst$kw$processed,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footnotes,cljs.core.cst$kw$next_DASH_fn_DASH_id], null))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footnotes,cljs.core.cst$kw$unprocessed,match], null)));
var G__14072 = next_text;
var G__14073 = next_state;
text = G__14072;
p__14067 = G__14073;
continue;
}
break;
}
});
markdown.links.footnote_link = (function markdown$links$footnote_link(text,p__14074){
var map__14078 = p__14074;
var map__14078__$1 = ((((!((map__14078 == null)))?((((map__14078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14078):map__14078);
var state = map__14078__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14078__$1,cljs.core.cst$kw$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14078__$1,cljs.core.cst$kw$codeblock);
var footnotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14078__$1,cljs.core.cst$kw$footnotes);
if(cljs.core.truth_((function (){var or__6116__auto__ = (cljs.core.cst$kw$unprocessed.cljs$core$IFn$_invoke$arity$1(footnotes) == null);
if(or__6116__auto__){
return or__6116__auto__;
} else {
var or__6116__auto____$1 = code;
if(cljs.core.truth_(or__6116__auto____$1)){
return or__6116__auto____$1;
} else {
return codeblock;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.links.footnote(clojure.string.trim(text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
var vec__14080 = markdown.links.replace_all_footnote_links(text,state);
var text__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14080,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14080,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text__$1,state__$1], null);

}
}
});
markdown.links.make_image_reference = (function markdown$links$make_image_reference(src,alt,title){
var title_text = [cljs.core.str((cljs.core.truth_(title)?[cljs.core.str("\" title="),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$1(title)),cljs.core.str("")].join(''):"\""))].join('');
return [cljs.core.str("<img src=\""),cljs.core.str(src),cljs.core.str("\" alt=\""),cljs.core.str(alt),cljs.core.str(title_text),cljs.core.str(" />")].join('');
});
markdown.links.image_reference_link = (function markdown$links$image_reference_link(text,p__14081){
var map__14085 = p__14081;
var map__14085__$1 = ((((!((map__14085 == null)))?((((map__14085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14085):map__14085);
var state = map__14085__$1;
var references = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14085__$1,cljs.core.cst$kw$references);
if((cljs.core.not(cljs.core.cst$kw$reference_DASH_links_QMARK_.cljs$core$IFn$_invoke$arity$1(state))) || (cljs.core.empty_QMARK_(references))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var matcher = /!\[([^\]]+)\]\s*(\[[a-zA-Z0-9 ]+\])/;
var matches = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.re_seq(matcher,text));
var ms = matches;
var new_text = text;
while(true){
if(cljs.core.seq(ms)){
var vec__14087 = cljs.core.first(ms);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14087,(0),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14087,(1),null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14087,(2),null);
var refval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(references,ref);
var im = markdown.links.make_image_reference(cljs.core.first(refval),alt,cljs.core.second(refval));
var G__14088 = cljs.core.rest(ms);
var G__14089 = clojure.string.replace(new_text,m,im);
ms = G__14088;
new_text = G__14089;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_text,state], null);
}
break;
}
}
});
