// Compiled by ClojureScript 1.8.40 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__37314){
var map__37321 = p__37314;
var map__37321__$1 = ((((!((map__37321 == null)))?((((map__37321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37321):map__37321);
var replacement_transformers = cljs.core.get.call(null,map__37321__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__37321__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
return ((function (map__37321,map__37321__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_37323 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__37324 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_37323,map__37321,map__37321__$1,replacement_transformers,custom_transformers){
return (function (p__37325,transformer){
var vec__37326 = p__37325;
var text = cljs.core.nth.call(null,vec__37326,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__37326,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_37323,map__37321,map__37321__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__29600__auto__ = replacement_transformers;
if(cljs.core.truth_(or__29600__auto__)){
return or__29600__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__37324,(0),null);
var new_state = cljs.core.nth.call(null,vec__37324,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_37323;
}});
;})(map__37321,map__37321__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__30676__auto__ = [];
var len__30669__auto___37329 = arguments.length;
var i__30670__auto___37330 = (0);
while(true){
if((i__30670__auto___37330 < len__30669__auto___37329)){
args__30676__auto__.push((arguments[i__30670__auto___37330]));

var G__37331 = (i__30670__auto___37330 + (1));
i__30670__auto___37330 = G__37331;
continue;
} else {
}
break;
}

var argseq__30677__auto__ = ((((1) < args__30676__auto__.length))?(new cljs.core.IndexedSeq(args__30676__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30677__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq37327){
var G__37328 = cljs.core.first.call(null,seq37327);
var seq37327__$1 = cljs.core.next.call(null,seq37327);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__37328,seq37327__$1);
});
markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__37336_37340 = cljs.core.seq.call(null,lines);
var chunk__37337_37341 = null;
var count__37338_37342 = (0);
var i__37339_37343 = (0);
while(true){
if((i__37339_37343 < count__37338_37342)){
var line_37344 = cljs.core._nth.call(null,chunk__37337_37341,i__37339_37343);
markdown.links.parse_reference_link.call(null,line_37344,references);

var G__37345 = seq__37336_37340;
var G__37346 = chunk__37337_37341;
var G__37347 = count__37338_37342;
var G__37348 = (i__37339_37343 + (1));
seq__37336_37340 = G__37345;
chunk__37337_37341 = G__37346;
count__37338_37342 = G__37347;
i__37339_37343 = G__37348;
continue;
} else {
var temp__4657__auto___37349 = cljs.core.seq.call(null,seq__37336_37340);
if(temp__4657__auto___37349){
var seq__37336_37350__$1 = temp__4657__auto___37349;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37336_37350__$1)){
var c__30411__auto___37351 = cljs.core.chunk_first.call(null,seq__37336_37350__$1);
var G__37352 = cljs.core.chunk_rest.call(null,seq__37336_37350__$1);
var G__37353 = c__30411__auto___37351;
var G__37354 = cljs.core.count.call(null,c__30411__auto___37351);
var G__37355 = (0);
seq__37336_37340 = G__37352;
chunk__37337_37341 = G__37353;
count__37338_37342 = G__37354;
i__37339_37343 = G__37355;
continue;
} else {
var line_37356 = cljs.core.first.call(null,seq__37336_37350__$1);
markdown.links.parse_reference_link.call(null,line_37356,references);

var G__37357 = cljs.core.next.call(null,seq__37336_37350__$1);
var G__37358 = null;
var G__37359 = (0);
var G__37360 = (0);
seq__37336_37340 = G__37357;
chunk__37337_37341 = G__37358;
count__37338_37342 = G__37359;
i__37339_37343 = G__37360;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__37365_37369 = cljs.core.seq.call(null,lines);
var chunk__37366_37370 = null;
var count__37367_37371 = (0);
var i__37368_37372 = (0);
while(true){
if((i__37368_37372 < count__37367_37371)){
var line_37373 = cljs.core._nth.call(null,chunk__37366_37370,i__37368_37372);
markdown.links.parse_footnote_link.call(null,line_37373,footnotes);

var G__37374 = seq__37365_37369;
var G__37375 = chunk__37366_37370;
var G__37376 = count__37367_37371;
var G__37377 = (i__37368_37372 + (1));
seq__37365_37369 = G__37374;
chunk__37366_37370 = G__37375;
count__37367_37371 = G__37376;
i__37368_37372 = G__37377;
continue;
} else {
var temp__4657__auto___37378 = cljs.core.seq.call(null,seq__37365_37369);
if(temp__4657__auto___37378){
var seq__37365_37379__$1 = temp__4657__auto___37378;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37365_37379__$1)){
var c__30411__auto___37380 = cljs.core.chunk_first.call(null,seq__37365_37379__$1);
var G__37381 = cljs.core.chunk_rest.call(null,seq__37365_37379__$1);
var G__37382 = c__30411__auto___37380;
var G__37383 = cljs.core.count.call(null,c__30411__auto___37380);
var G__37384 = (0);
seq__37365_37369 = G__37381;
chunk__37366_37370 = G__37382;
count__37367_37371 = G__37383;
i__37368_37372 = G__37384;
continue;
} else {
var line_37385 = cljs.core.first.call(null,seq__37365_37379__$1);
markdown.links.parse_footnote_link.call(null,line_37385,footnotes);

var G__37386 = cljs.core.next.call(null,seq__37365_37379__$1);
var G__37387 = null;
var G__37388 = (0);
var G__37389 = (0);
seq__37365_37369 = G__37386;
chunk__37366_37370 = G__37387;
count__37367_37371 = G__37388;
i__37368_37372 = G__37389;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__37392 = cljs.core.split_with.call(null,(function (p1__37390_SHARP_){
return cljs.core.not_empty.call(null,p1__37390_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__37392,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__37392,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_37400 = markdown.common._STAR_substring_STAR_;
var formatter37401 = markdown.transformers.formatter;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_37400,formatter37401){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_37400,formatter37401))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str(text),cljs.core.str("\n")].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__37402 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__37402,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__37402,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__37404_37407 = lines__$1;
var vec__37405_37408 = G__37404_37407;
var line_37409 = cljs.core.nth.call(null,vec__37405_37408,(0),null);
var more_37410 = cljs.core.nthnext.call(null,vec__37405_37408,(1));
var state_37411 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__37404_37412__$1 = G__37404_37407;
var state_37413__$1 = state_37411;
while(true){
var vec__37406_37414 = G__37404_37412__$1;
var line_37415__$1 = cljs.core.nth.call(null,vec__37406_37414,(0),null);
var more_37416__$1 = cljs.core.nthnext.call(null,vec__37406_37414,(1));
var state_37417__$2 = state_37413__$1;
var state_37418__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_37417__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_37417__$2),cljs.core.first.call(null,more_37416__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_37417__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_37417__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_37416__$1))){
var G__37419 = more_37416__$1;
var G__37420 = cljs.core.assoc.call(null,transformer.call(null,html,line_37415__$1,cljs.core.first.call(null,more_37416__$1),state_37418__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_37415__$1));
G__37404_37412__$1 = G__37419;
state_37413__$1 = G__37420;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_37418__$3))),line_37415__$1,"",cljs.core.assoc.call(null,state_37418__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers.formatter = formatter37401;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_37400;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__30676__auto__ = [];
var len__30669__auto___37423 = arguments.length;
var i__30670__auto___37424 = (0);
while(true){
if((i__30670__auto___37424 < len__30669__auto___37423)){
args__30676__auto__.push((arguments[i__30670__auto___37424]));

var G__37425 = (i__30670__auto___37424 + (1));
i__30670__auto___37424 = G__37425;
continue;
} else {
}
break;
}

var argseq__30677__auto__ = ((((1) < args__30676__auto__.length))?(new cljs.core.IndexedSeq(args__30676__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30677__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq37421){
var G__37422 = cljs.core.first.call(null,seq37421);
var seq37421__$1 = cljs.core.next.call(null,seq37421);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__37422,seq37421__$1);
});
markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__30676__auto__ = [];
var len__30669__auto___37428 = arguments.length;
var i__30670__auto___37429 = (0);
while(true){
if((i__30670__auto___37429 < len__30669__auto___37428)){
args__30676__auto__.push((arguments[i__30670__auto___37429]));

var G__37430 = (i__30670__auto___37429 + (1));
i__30670__auto___37429 = G__37430;
continue;
} else {
}
break;
}

var argseq__30677__auto__ = ((((1) < args__30676__auto__.length))?(new cljs.core.IndexedSeq(args__30676__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30677__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq37426){
var G__37427 = cljs.core.first.call(null,seq37426);
var seq37426__$1 = cljs.core.next.call(null,seq37426);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__37427,seq37426__$1);
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__30676__auto__ = [];
var len__30669__auto___37432 = arguments.length;
var i__30670__auto___37433 = (0);
while(true){
if((i__30670__auto___37433 < len__30669__auto___37432)){
args__30676__auto__.push((arguments[i__30670__auto___37433]));

var G__37434 = (i__30670__auto___37433 + (1));
i__30670__auto___37433 = G__37434;
continue;
} else {
}
break;
}

var argseq__30677__auto__ = ((((0) < args__30676__auto__.length))?(new cljs.core.IndexedSeq(args__30676__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__30677__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq37431){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37431));
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__30676__auto__ = [];
var len__30669__auto___37436 = arguments.length;
var i__30670__auto___37437 = (0);
while(true){
if((i__30670__auto___37437 < len__30669__auto___37436)){
args__30676__auto__.push((arguments[i__30670__auto___37437]));

var G__37438 = (i__30670__auto___37437 + (1));
i__30670__auto___37437 = G__37438;
continue;
} else {
}
break;
}

var argseq__30677__auto__ = ((((0) < args__30676__auto__.length))?(new cljs.core.IndexedSeq(args__30676__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__30677__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq37435){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37435));
});
