// Compiled by ClojureScript 1.8.40 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__31578){
var map__31585 = p__31578;
var map__31585__$1 = ((((!((map__31585 == null)))?((((map__31585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31585):map__31585);
var replacement_transformers = cljs.core.get.call(null,map__31585__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__31585__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
return ((function (map__31585,map__31585__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_31587 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__31588 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_31587,map__31585,map__31585__$1,replacement_transformers,custom_transformers){
return (function (p__31589,transformer){
var vec__31590 = p__31589;
var text = cljs.core.nth.call(null,vec__31590,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__31590,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_31587,map__31585,map__31585__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__29339__auto__ = replacement_transformers;
if(cljs.core.truth_(or__29339__auto__)){
return or__29339__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__31588,(0),null);
var new_state = cljs.core.nth.call(null,vec__31588,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_31587;
}});
;})(map__31585,map__31585__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__30415__auto__ = [];
var len__30408__auto___31593 = arguments.length;
var i__30409__auto___31594 = (0);
while(true){
if((i__30409__auto___31594 < len__30408__auto___31593)){
args__30415__auto__.push((arguments[i__30409__auto___31594]));

var G__31595 = (i__30409__auto___31594 + (1));
i__30409__auto___31594 = G__31595;
continue;
} else {
}
break;
}

var argseq__30416__auto__ = ((((1) < args__30415__auto__.length))?(new cljs.core.IndexedSeq(args__30415__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30416__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq31591){
var G__31592 = cljs.core.first.call(null,seq31591);
var seq31591__$1 = cljs.core.next.call(null,seq31591);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__31592,seq31591__$1);
});
markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__31600_31604 = cljs.core.seq.call(null,lines);
var chunk__31601_31605 = null;
var count__31602_31606 = (0);
var i__31603_31607 = (0);
while(true){
if((i__31603_31607 < count__31602_31606)){
var line_31608 = cljs.core._nth.call(null,chunk__31601_31605,i__31603_31607);
markdown.links.parse_reference_link.call(null,line_31608,references);

var G__31609 = seq__31600_31604;
var G__31610 = chunk__31601_31605;
var G__31611 = count__31602_31606;
var G__31612 = (i__31603_31607 + (1));
seq__31600_31604 = G__31609;
chunk__31601_31605 = G__31610;
count__31602_31606 = G__31611;
i__31603_31607 = G__31612;
continue;
} else {
var temp__4657__auto___31613 = cljs.core.seq.call(null,seq__31600_31604);
if(temp__4657__auto___31613){
var seq__31600_31614__$1 = temp__4657__auto___31613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31600_31614__$1)){
var c__30150__auto___31615 = cljs.core.chunk_first.call(null,seq__31600_31614__$1);
var G__31616 = cljs.core.chunk_rest.call(null,seq__31600_31614__$1);
var G__31617 = c__30150__auto___31615;
var G__31618 = cljs.core.count.call(null,c__30150__auto___31615);
var G__31619 = (0);
seq__31600_31604 = G__31616;
chunk__31601_31605 = G__31617;
count__31602_31606 = G__31618;
i__31603_31607 = G__31619;
continue;
} else {
var line_31620 = cljs.core.first.call(null,seq__31600_31614__$1);
markdown.links.parse_reference_link.call(null,line_31620,references);

var G__31621 = cljs.core.next.call(null,seq__31600_31614__$1);
var G__31622 = null;
var G__31623 = (0);
var G__31624 = (0);
seq__31600_31604 = G__31621;
chunk__31601_31605 = G__31622;
count__31602_31606 = G__31623;
i__31603_31607 = G__31624;
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
var seq__31629_31633 = cljs.core.seq.call(null,lines);
var chunk__31630_31634 = null;
var count__31631_31635 = (0);
var i__31632_31636 = (0);
while(true){
if((i__31632_31636 < count__31631_31635)){
var line_31637 = cljs.core._nth.call(null,chunk__31630_31634,i__31632_31636);
markdown.links.parse_footnote_link.call(null,line_31637,footnotes);

var G__31638 = seq__31629_31633;
var G__31639 = chunk__31630_31634;
var G__31640 = count__31631_31635;
var G__31641 = (i__31632_31636 + (1));
seq__31629_31633 = G__31638;
chunk__31630_31634 = G__31639;
count__31631_31635 = G__31640;
i__31632_31636 = G__31641;
continue;
} else {
var temp__4657__auto___31642 = cljs.core.seq.call(null,seq__31629_31633);
if(temp__4657__auto___31642){
var seq__31629_31643__$1 = temp__4657__auto___31642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31629_31643__$1)){
var c__30150__auto___31644 = cljs.core.chunk_first.call(null,seq__31629_31643__$1);
var G__31645 = cljs.core.chunk_rest.call(null,seq__31629_31643__$1);
var G__31646 = c__30150__auto___31644;
var G__31647 = cljs.core.count.call(null,c__30150__auto___31644);
var G__31648 = (0);
seq__31629_31633 = G__31645;
chunk__31630_31634 = G__31646;
count__31631_31635 = G__31647;
i__31632_31636 = G__31648;
continue;
} else {
var line_31649 = cljs.core.first.call(null,seq__31629_31643__$1);
markdown.links.parse_footnote_link.call(null,line_31649,footnotes);

var G__31650 = cljs.core.next.call(null,seq__31629_31643__$1);
var G__31651 = null;
var G__31652 = (0);
var G__31653 = (0);
seq__31629_31633 = G__31650;
chunk__31630_31634 = G__31651;
count__31631_31635 = G__31652;
i__31632_31636 = G__31653;
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
var vec__31656 = cljs.core.split_with.call(null,(function (p1__31654_SHARP_){
return cljs.core.not_empty.call(null,p1__31654_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__31656,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__31656,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_31664 = markdown.common._STAR_substring_STAR_;
var formatter31665 = markdown.transformers.formatter;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_31664,formatter31665){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_31664,formatter31665))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str(text),cljs.core.str("\n")].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__31666 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__31666,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__31666,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__31668_31671 = lines__$1;
var vec__31669_31672 = G__31668_31671;
var line_31673 = cljs.core.nth.call(null,vec__31669_31672,(0),null);
var more_31674 = cljs.core.nthnext.call(null,vec__31669_31672,(1));
var state_31675 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__31668_31676__$1 = G__31668_31671;
var state_31677__$1 = state_31675;
while(true){
var vec__31670_31678 = G__31668_31676__$1;
var line_31679__$1 = cljs.core.nth.call(null,vec__31670_31678,(0),null);
var more_31680__$1 = cljs.core.nthnext.call(null,vec__31670_31678,(1));
var state_31681__$2 = state_31677__$1;
var state_31682__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_31681__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_31681__$2),cljs.core.first.call(null,more_31680__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_31681__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_31681__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_31680__$1))){
var G__31683 = more_31680__$1;
var G__31684 = cljs.core.assoc.call(null,transformer.call(null,html,line_31679__$1,cljs.core.first.call(null,more_31680__$1),state_31682__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_31679__$1));
G__31668_31676__$1 = G__31683;
state_31677__$1 = G__31684;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_31682__$3))),line_31679__$1,"",cljs.core.assoc.call(null,state_31682__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers.formatter = formatter31665;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_31664;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__30415__auto__ = [];
var len__30408__auto___31687 = arguments.length;
var i__30409__auto___31688 = (0);
while(true){
if((i__30409__auto___31688 < len__30408__auto___31687)){
args__30415__auto__.push((arguments[i__30409__auto___31688]));

var G__31689 = (i__30409__auto___31688 + (1));
i__30409__auto___31688 = G__31689;
continue;
} else {
}
break;
}

var argseq__30416__auto__ = ((((1) < args__30415__auto__.length))?(new cljs.core.IndexedSeq(args__30415__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30416__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq31685){
var G__31686 = cljs.core.first.call(null,seq31685);
var seq31685__$1 = cljs.core.next.call(null,seq31685);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__31686,seq31685__$1);
});
markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__30415__auto__ = [];
var len__30408__auto___31692 = arguments.length;
var i__30409__auto___31693 = (0);
while(true){
if((i__30409__auto___31693 < len__30408__auto___31692)){
args__30415__auto__.push((arguments[i__30409__auto___31693]));

var G__31694 = (i__30409__auto___31693 + (1));
i__30409__auto___31693 = G__31694;
continue;
} else {
}
break;
}

var argseq__30416__auto__ = ((((1) < args__30415__auto__.length))?(new cljs.core.IndexedSeq(args__30415__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30416__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq31690){
var G__31691 = cljs.core.first.call(null,seq31690);
var seq31690__$1 = cljs.core.next.call(null,seq31690);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__31691,seq31690__$1);
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__30415__auto__ = [];
var len__30408__auto___31696 = arguments.length;
var i__30409__auto___31697 = (0);
while(true){
if((i__30409__auto___31697 < len__30408__auto___31696)){
args__30415__auto__.push((arguments[i__30409__auto___31697]));

var G__31698 = (i__30409__auto___31697 + (1));
i__30409__auto___31697 = G__31698;
continue;
} else {
}
break;
}

var argseq__30416__auto__ = ((((0) < args__30415__auto__.length))?(new cljs.core.IndexedSeq(args__30415__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__30416__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq31695){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31695));
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__30415__auto__ = [];
var len__30408__auto___31700 = arguments.length;
var i__30409__auto___31701 = (0);
while(true){
if((i__30409__auto___31701 < len__30408__auto___31700)){
args__30415__auto__.push((arguments[i__30409__auto___31701]));

var G__31702 = (i__30409__auto___31701 + (1));
i__30409__auto___31701 = G__31702;
continue;
} else {
}
break;
}

var argseq__30416__auto__ = ((((0) < args__30415__auto__.length))?(new cljs.core.IndexedSeq(args__30415__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__30416__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq31699){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31699));
});

//# sourceMappingURL=core.js.map