// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__14184){
var map__14191 = p__14184;
var map__14191__$1 = ((((!((map__14191 == null)))?((((map__14191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14191):map__14191);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14191__$1,cljs.core.cst$kw$replacement_DASH_transformers);
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14191__$1,cljs.core.cst$kw$custom_DASH_transformers);
return ((function (map__14191,map__14191__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_14193 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__14194 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_STAR_next_line_STAR_14193,map__14191,map__14191__$1,replacement_transformers,custom_transformers){
return (function (p__14195,transformer){
var vec__14196 = p__14195;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14196,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14196,(1),null);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(text,state__$1) : transformer.call(null,text,state__$1));
});})(_STAR_next_line_STAR_14193,map__14191,map__14191__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__6116__auto__ = replacement_transformers;
if(cljs.core.truth_(or__6116__auto__)){
return or__6116__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14194,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14194,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_14193;
}});
;})(map__14191,map__14191__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__7192__auto__ = [];
var len__7185__auto___14199 = arguments.length;
var i__7186__auto___14200 = (0);
while(true){
if((i__7186__auto___14200 < len__7185__auto___14199)){
args__7192__auto__.push((arguments[i__7186__auto___14200]));

var G__14201 = (i__7186__auto___14200 + (1));
i__7186__auto___14200 = G__14201;
continue;
} else {
}
break;
}

var argseq__7193__auto__ = ((((1) < args__7192__auto__.length))?(new cljs.core.IndexedSeq(args__7192__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7193__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq14197){
var G__14198 = cljs.core.first(seq14197);
var seq14197__$1 = cljs.core.next(seq14197);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__14198,seq14197__$1);
});
markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = (function (){var G__14207 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14207) : cljs.core.atom.call(null,G__14207));
})();
var seq__14208_14212 = cljs.core.seq(lines);
var chunk__14209_14213 = null;
var count__14210_14214 = (0);
var i__14211_14215 = (0);
while(true){
if((i__14211_14215 < count__14210_14214)){
var line_14216 = chunk__14209_14213.cljs$core$IIndexed$_nth$arity$2(null,i__14211_14215);
markdown.links.parse_reference_link(line_14216,references);

var G__14217 = seq__14208_14212;
var G__14218 = chunk__14209_14213;
var G__14219 = count__14210_14214;
var G__14220 = (i__14211_14215 + (1));
seq__14208_14212 = G__14217;
chunk__14209_14213 = G__14218;
count__14210_14214 = G__14219;
i__14211_14215 = G__14220;
continue;
} else {
var temp__4657__auto___14221 = cljs.core.seq(seq__14208_14212);
if(temp__4657__auto___14221){
var seq__14208_14222__$1 = temp__4657__auto___14221;
if(cljs.core.chunked_seq_QMARK_(seq__14208_14222__$1)){
var c__6927__auto___14223 = cljs.core.chunk_first(seq__14208_14222__$1);
var G__14224 = cljs.core.chunk_rest(seq__14208_14222__$1);
var G__14225 = c__6927__auto___14223;
var G__14226 = cljs.core.count(c__6927__auto___14223);
var G__14227 = (0);
seq__14208_14212 = G__14224;
chunk__14209_14213 = G__14225;
count__14210_14214 = G__14226;
i__14211_14215 = G__14227;
continue;
} else {
var line_14228 = cljs.core.first(seq__14208_14222__$1);
markdown.links.parse_reference_link(line_14228,references);

var G__14229 = cljs.core.next(seq__14208_14222__$1);
var G__14230 = null;
var G__14231 = (0);
var G__14232 = (0);
seq__14208_14212 = G__14229;
chunk__14209_14213 = G__14230;
count__14210_14214 = G__14231;
i__14211_14215 = G__14232;
continue;
}
} else {
}
}
break;
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(references) : cljs.core.deref.call(null,references));
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = (function (){var G__14238 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$next_DASH_fn_DASH_id,(1),cljs.core.cst$kw$processed,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$unprocessed,cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14238) : cljs.core.atom.call(null,G__14238));
})();
var seq__14239_14243 = cljs.core.seq(lines);
var chunk__14240_14244 = null;
var count__14241_14245 = (0);
var i__14242_14246 = (0);
while(true){
if((i__14242_14246 < count__14241_14245)){
var line_14247 = chunk__14240_14244.cljs$core$IIndexed$_nth$arity$2(null,i__14242_14246);
markdown.links.parse_footnote_link(line_14247,footnotes);

var G__14248 = seq__14239_14243;
var G__14249 = chunk__14240_14244;
var G__14250 = count__14241_14245;
var G__14251 = (i__14242_14246 + (1));
seq__14239_14243 = G__14248;
chunk__14240_14244 = G__14249;
count__14241_14245 = G__14250;
i__14242_14246 = G__14251;
continue;
} else {
var temp__4657__auto___14252 = cljs.core.seq(seq__14239_14243);
if(temp__4657__auto___14252){
var seq__14239_14253__$1 = temp__4657__auto___14252;
if(cljs.core.chunked_seq_QMARK_(seq__14239_14253__$1)){
var c__6927__auto___14254 = cljs.core.chunk_first(seq__14239_14253__$1);
var G__14255 = cljs.core.chunk_rest(seq__14239_14253__$1);
var G__14256 = c__6927__auto___14254;
var G__14257 = cljs.core.count(c__6927__auto___14254);
var G__14258 = (0);
seq__14239_14243 = G__14255;
chunk__14240_14244 = G__14256;
count__14241_14245 = G__14257;
i__14242_14246 = G__14258;
continue;
} else {
var line_14259 = cljs.core.first(seq__14239_14253__$1);
markdown.links.parse_footnote_link(line_14259,footnotes);

var G__14260 = cljs.core.next(seq__14239_14253__$1);
var G__14261 = null;
var G__14262 = (0);
var G__14263 = (0);
seq__14239_14243 = G__14260;
chunk__14240_14244 = G__14261;
count__14241_14245 = G__14262;
i__14242_14246 = G__14263;
continue;
}
} else {
}
}
break;
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(footnotes) : cljs.core.deref.call(null,footnotes));
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__14266 = cljs.core.split_with((function (p1__14264_SHARP_){
return cljs.core.not_empty(p1__14264_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14266,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14266,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers(metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_14286 = markdown.common._STAR_substring_STAR_;
var formatter14287 = markdown.transformers.formatter;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_14286,formatter14287){
return (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});})(_STAR_substring_STAR_14286,formatter14287))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str(text),cljs.core.str("\n")].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(cljs.core.cst$kw$reference_DASH_links_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(cljs.core.cst$kw$footnotes_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__14288 = (cljs.core.truth_(cljs.core.cst$kw$parse_DASH_meta_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14288,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14288,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__14290_14305 = lines__$1;
var vec__14291_14306 = G__14290_14305;
var line_14307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14291_14306,(0),null);
var more_14308 = cljs.core.nthnext(vec__14291_14306,(1));
var state_14309 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$clojurescript,true,cljs.core.cst$kw$references,references,cljs.core.cst$kw$footnotes,footnotes,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,true], null),params__$1], 0));
var G__14290_14310__$1 = G__14290_14305;
var state_14311__$1 = state_14309;
while(true){
var vec__14292_14312 = G__14290_14310__$1;
var line_14313__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14292_14312,(0),null);
var more_14314__$1 = cljs.core.nthnext(vec__14292_14312,(1));
var state_14315__$2 = state_14311__$1;
var state_14316__$3 = (cljs.core.truth_(cljs.core.cst$kw$buf.cljs$core$IFn$_invoke$arity$1(state_14315__$2))?(function (){var G__14293 = html;
var G__14294 = cljs.core.cst$kw$buf.cljs$core$IFn$_invoke$arity$1(state_14315__$2);
var G__14295 = cljs.core.first(more_14314__$1);
var G__14296 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_14315__$2,cljs.core.cst$kw$buf,cljs.core.array_seq([cljs.core.cst$kw$lists], 0)),cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,true);
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__14293,G__14294,G__14295,G__14296) : transformer.call(null,G__14293,G__14294,G__14295,G__14296));
})():state_14315__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_14314__$1))){
var G__14317 = more_14314__$1;
var G__14318 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__14297 = html;
var G__14298 = line_14313__$1;
var G__14299 = cljs.core.first(more_14314__$1);
var G__14300 = state_14316__$3;
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__14297,G__14298,G__14299,G__14300) : transformer.call(null,G__14297,G__14298,G__14299,G__14300));
})(),cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,cljs.core.empty_QMARK_(line_14313__$1));
G__14290_14310__$1 = G__14317;
state_14311__$1 = G__14318;
continue;
} else {
var G__14301_14319 = html.append(markdown.transformers.footer(cljs.core.cst$kw$footnotes.cljs$core$IFn$_invoke$arity$1(state_14316__$3)));
var G__14302_14320 = line_14313__$1;
var G__14303_14321 = "";
var G__14304_14322 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_14316__$3,cljs.core.cst$kw$eof,true);
(transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__14301_14319,G__14302_14320,G__14303_14321,G__14304_14322) : transformer.call(null,G__14301_14319,G__14302_14320,G__14303_14321,G__14304_14322));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$metadata,metadata,cljs.core.cst$kw$html,html.toString()], null);
}finally {markdown.transformers.formatter = formatter14287;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_14286;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__7192__auto__ = [];
var len__7185__auto___14325 = arguments.length;
var i__7186__auto___14326 = (0);
while(true){
if((i__7186__auto___14326 < len__7185__auto___14325)){
args__7192__auto__.push((arguments[i__7186__auto___14326]));

var G__14327 = (i__7186__auto___14326 + (1));
i__7186__auto___14326 = G__14327;
continue;
} else {
}
break;
}

var argseq__7193__auto__ = ((((1) < args__7192__auto__.length))?(new cljs.core.IndexedSeq(args__7192__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7193__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return cljs.core.cst$kw$html.cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq14323){
var G__14324 = cljs.core.first(seq14323);
var seq14323__$1 = cljs.core.next(seq14323);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__14324,seq14323__$1);
});
markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__7192__auto__ = [];
var len__7185__auto___14330 = arguments.length;
var i__7186__auto___14331 = (0);
while(true){
if((i__7186__auto___14331 < len__7185__auto___14330)){
args__7192__auto__.push((arguments[i__7186__auto___14331]));

var G__14332 = (i__7186__auto___14331 + (1));
i__7186__auto___14331 = G__14332;
continue;
} else {
}
break;
}

var argseq__7193__auto__ = ((((1) < args__7192__auto__.length))?(new cljs.core.IndexedSeq(args__7192__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7193__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_(text,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parse_DASH_meta_QMARK_,true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq14328){
var G__14329 = cljs.core.first(seq14328);
var seq14328__$1 = cljs.core.next(seq14328);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__14329,seq14328__$1);
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__7192__auto__ = [];
var len__7185__auto___14334 = arguments.length;
var i__7186__auto___14335 = (0);
while(true){
if((i__7186__auto___14335 < len__7185__auto___14334)){
args__7192__auto__.push((arguments[i__7186__auto___14335]));

var G__14336 = (i__7186__auto___14335 + (1));
i__7186__auto___14335 = G__14336;
continue;
} else {
}
break;
}

var argseq__7193__auto__ = ((((0) < args__7192__auto__.length))?(new cljs.core.IndexedSeq(args__7192__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__7193__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq14333){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14333));
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__7192__auto__ = [];
var len__7185__auto___14338 = arguments.length;
var i__7186__auto___14339 = (0);
while(true){
if((i__7186__auto___14339 < len__7185__auto___14338)){
args__7192__auto__.push((arguments[i__7186__auto___14339]));

var G__14340 = (i__7186__auto___14339 + (1));
i__7186__auto___14339 = G__14340;
continue;
} else {
}
break;
}

var argseq__7193__auto__ = ((((0) < args__7192__auto__.length))?(new cljs.core.IndexedSeq(args__7192__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__7193__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq14337){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14337));
});
