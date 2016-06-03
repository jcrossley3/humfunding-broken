// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('markdown.transformers');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('markdown.links');
goog.require('markdown.lists');
goog.require('markdown.tables');
goog.require('markdown.common');
markdown.transformers.heading_QMARK_ = (function markdown$transformers$heading_QMARK_(text,type){
if(cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [" ",null], null), null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),text))){
return null;
} else {
var trimmed = (cljs.core.truth_(text)?clojure.string.trim(text):null);
var and__6104__auto__ = cljs.core.not_empty(trimmed);
if(cljs.core.truth_(and__6104__auto__)){
return cljs.core.every_QMARK_(cljs.core.PersistentHashSet.fromArray([type], true),trimmed);
} else {
return and__6104__auto__;
}
}
});
markdown.transformers.h1_QMARK_ = (function markdown$transformers$h1_QMARK_(text){
return markdown.transformers.heading_QMARK_(text,"=");
});
markdown.transformers.h2_QMARK_ = (function markdown$transformers$h2_QMARK_(text){
return markdown.transformers.heading_QMARK_(text,"-");
});
markdown.transformers.empty_line = (function markdown$transformers$empty_line(text,state){
if(cljs.core.truth_((function (){var or__6116__auto__ = cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__6116__auto__)){
return or__6116__auto__;
} else {
return cljs.core.cst$kw$codeblock.cljs$core$IFn$_invoke$arity$1(state);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__6116__auto__ = markdown.transformers.h1_QMARK_(text);
if(cljs.core.truth_(or__6116__auto__)){
return or__6116__auto__;
} else {
return markdown.transformers.h2_QMARK_(text);
}
})())?"":text),((clojure.string.blank_QMARK_(text))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$hr,cljs.core.array_seq([cljs.core.cst$kw$heading], 0)):state)], null);
}
});
markdown.transformers.superscript = (function markdown$transformers$superscript(text,state){
if(cljs.core.truth_(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var tokens = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"^",null], null), null)),text);
var buf = cljs.core.PersistentVector.EMPTY;
var remaining = tokens;
while(true){
if(cljs.core.empty_QMARK_(remaining)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$1(buf),state], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(remaining),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null))){
var G__14134 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq("<sup>"),cljs.core.second(remaining),cljs.core.array_seq([cljs.core.seq("</sup>")], 0)));
var G__14135 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),remaining);
buf = G__14134;
remaining = G__14135;
continue;
} else {
var G__14136 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.first(remaining));
var G__14137 = cljs.core.rest(remaining);
buf = G__14136;
remaining = G__14137;
continue;

}
}
break;
}
}
});
markdown.transformers.heading = (function markdown$transformers$heading(text,state){
if(cljs.core.truth_((function (){var or__6116__auto__ = cljs.core.cst$kw$codeblock.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__6116__auto__)){
return or__6116__auto__;
} else {
return cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(state);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.transformers.h1_QMARK_(markdown.transformers._STAR_next_line_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<h1>"),cljs.core.str(text),cljs.core.str("</h1>")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$heading,true)], null);
} else {
if(cljs.core.truth_(markdown.transformers.h2_QMARK_(markdown.transformers._STAR_next_line_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<h2>"),cljs.core.str(text),cljs.core.str("</h2>")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$heading,true)], null);
} else {
var temp__4655__auto__ = markdown.common.make_heading(text,cljs.core.cst$kw$heading_DASH_anchors.cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(temp__4655__auto__)){
var heading__$1 = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [heading__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$heading,true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
}
});
markdown.transformers.br = (function markdown$transformers$br(text,p__14138){
var map__14141 = p__14138;
var map__14141__$1 = ((((!((map__14141 == null)))?((((map__14141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14141):map__14141);
var state = map__14141__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14141__$1,cljs.core.cst$kw$code);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14141__$1,cljs.core.cst$kw$lists);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "," "], null),cljs.core.take_last((2),text))) && (cljs.core.not((function (){var or__6116__auto__ = code;
if(cljs.core.truth_(or__6116__auto__)){
return or__6116__auto__;
} else {
return lists;
}
})())))?[cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),text))),cljs.core.str("<br />")].join(''):text),state], null);
});
markdown.transformers.autourl_transformer = (function markdown$transformers$autourl_transformer(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(state))?text:clojure.string.replace(text,/<https?:\/\/[-A-Za-z0-9+&@#\/%?=~_()|!:,.;]*[-A-Za-z0-9+&@#\/%=~_()|]>/,(function (p1__14143_SHARP_){
var url = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__14143_SHARP_,(1),(cljs.core.count(p1__14143_SHARP_) - (1)));
return [cljs.core.str("<a href=\""),cljs.core.str(url),cljs.core.str("\">"),cljs.core.str(url),cljs.core.str("</a>")].join('');
}))),state], null);
});
markdown.transformers.autoemail_transformer = (function markdown$transformers$autoemail_transformer(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__6116__auto__ = cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__6116__auto__)){
return or__6116__auto__;
} else {
return cljs.core.cst$kw$codeblock.cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace(text,/<[\w._%+-]+@[\w.-]+\.[\w]{2,4}>/,(function (p1__14144_SHARP_){
var encoded = (cljs.core.truth_(cljs.core.cst$kw$clojurescript.cljs$core$IFn$_invoke$arity$1(state))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__14144_SHARP_,(1),(cljs.core.count(p1__14144_SHARP_) - (1))):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
if((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() > 0.5)){
var G__14147 = "&#x%02x;";
var G__14148 = (c | (0));
return (markdown.transformers.formatter.cljs$core$IFn$_invoke$arity$2 ? markdown.transformers.formatter.cljs$core$IFn$_invoke$arity$2(G__14147,G__14148) : markdown.transformers.formatter.call(null,G__14147,G__14148));
} else {
return c;
}
}),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__14144_SHARP_,(1),(cljs.core.count(p1__14144_SHARP_) - (1))))));
return [cljs.core.str("<a href=\"mailto:"),cljs.core.str(encoded),cljs.core.str("\">"),cljs.core.str(encoded),cljs.core.str("</a>")].join('');
}))),state], null);
});
markdown.transformers.paragraph_text = (function markdown$transformers$paragraph_text(last_line_empty_QMARK_,text){
if(cljs.core.truth_((function (){var and__6104__auto__ = cljs.core.not(last_line_empty_QMARK_);
if(and__6104__auto__){
return cljs.core.not_empty(text);
} else {
return and__6104__auto__;
}
})())){
return [cljs.core.str(" "),cljs.core.str(text)].join('');
} else {
return text;
}
});
markdown.transformers.paragraph = (function markdown$transformers$paragraph(text,p__14149){
var map__14152 = p__14149;
var map__14152__$1 = ((((!((map__14152 == null)))?((((map__14152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14152):map__14152);
var state = map__14152__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14152__$1,cljs.core.cst$kw$eof);
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14152__$1,cljs.core.cst$kw$heading);
var hr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14152__$1,cljs.core.cst$kw$hr);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14152__$1,cljs.core.cst$kw$code);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14152__$1,cljs.core.cst$kw$lists);
var blockquote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14152__$1,cljs.core.cst$kw$blockquote);
var paragraph__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14152__$1,cljs.core.cst$kw$paragraph);
var last_line_empty_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14152__$1,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_);
if(cljs.core.truth_((function (){var and__6104__auto__ = paragraph__$1;
if(cljs.core.truth_(and__6104__auto__)){
return lists;
} else {
return and__6104__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</p>"),cljs.core.str(text)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$paragraph,false)], null);
} else {
if(cljs.core.truth_((function (){var or__6116__auto__ = heading;
if(cljs.core.truth_(or__6116__auto__)){
return or__6116__auto__;
} else {
var or__6116__auto____$1 = hr;
if(cljs.core.truth_(or__6116__auto____$1)){
return or__6116__auto____$1;
} else {
var or__6116__auto____$2 = code;
if(cljs.core.truth_(or__6116__auto____$2)){
return or__6116__auto____$2;
} else {
var or__6116__auto____$3 = lists;
if(cljs.core.truth_(or__6116__auto____$3)){
return or__6116__auto____$3;
} else {
return blockquote;
}
}
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(paragraph__$1)){
if(cljs.core.truth_((function (){var or__6116__auto__ = eof;
if(cljs.core.truth_(or__6116__auto__)){
return or__6116__auto__;
} else {
return cljs.core.empty_QMARK_(clojure.string.trim(text));
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(markdown.transformers.paragraph_text(last_line_empty_QMARK_,text)),cljs.core.str("</p>")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$paragraph,false)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.paragraph_text(last_line_empty_QMARK_,text),state], null);
}
} else {
if(cljs.core.truth_((function (){var and__6104__auto__ = cljs.core.not(eof);
if(and__6104__auto__){
return last_line_empty_QMARK_;
} else {
return and__6104__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<p>"),cljs.core.str(text)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$paragraph,true,cljs.core.array_seq([cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,false], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}
});
markdown.transformers.code = (function markdown$transformers$code(text,p__14154){
var map__14157 = p__14154;
var map__14157__$1 = ((((!((map__14157 == null)))?((((map__14157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14157):map__14157);
var state = map__14157__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14157__$1,cljs.core.cst$kw$eof);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14157__$1,cljs.core.cst$kw$lists);
var code__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14157__$1,cljs.core.cst$kw$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14157__$1,cljs.core.cst$kw$codeblock);
if(cljs.core.truth_((function (){var or__6116__auto__ = lists;
if(cljs.core.truth_(or__6116__auto__)){
return or__6116__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(code__$1)){
if(cljs.core.truth_((function (){var or__6116__auto__ = eof;
if(cljs.core.truth_(or__6116__auto__)){
return or__6116__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("    ",clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),text)));
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</code></pre>"),cljs.core.str(text)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$code,false,cljs.core.array_seq([cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,false], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("\n"),cljs.core.str(markdown.common.escape_code(clojure.string.replace_first(text,/    /,"")))].join(''),state], null);
}
} else {
if(cljs.core.empty_QMARK_(clojure.string.trim(text))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var num_spaces = cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_," "),text));
if((num_spaces > (3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<pre><code>"),cljs.core.str(markdown.common.escape_code(clojure.string.replace_first(text,/    /,"")))].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$code,true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
}
});
markdown.transformers.codeblock = (function markdown$transformers$codeblock(text,state){
var trimmed = clojure.string.trim(text);
if(cljs.core.truth_((function (){var and__6104__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),trimmed));
if(and__6104__auto__){
return cljs.core.cst$kw$codeblock.cljs$core$IFn$_invoke$arity$1(state);
} else {
return and__6104__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</code></pre>"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),trimmed)))].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$code,false,cljs.core.array_seq([cljs.core.cst$kw$codeblock,false,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,false], 0))], null);
} else {
if(cljs.core.truth_((function (){var and__6104__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take_last((3),trimmed));
if(and__6104__auto__){
return cljs.core.cst$kw$codeblock.cljs$core$IFn$_invoke$arity$1(state);
} else {
return and__6104__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</code></pre>"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((3),trimmed)))].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$code,false,cljs.core.array_seq([cljs.core.cst$kw$codeblock,false,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,false], 0))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),trimmed))){
var vec__14161 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),trimmed));
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14161,(0),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14161,(1),null);
var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(code));
var formatter = cljs.core.cst$kw$code_DASH_style.cljs$core$IFn$_invoke$arity$1(state);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<pre><code"),cljs.core.str((cljs.core.truth_(cljs.core.not_empty(lang))?[cljs.core.str(" "),cljs.core.str((cljs.core.truth_(formatter)?(function (){var G__14162 = clojure.string.join.cljs$core$IFn$_invoke$arity$1(lang);
return (formatter.cljs$core$IFn$_invoke$arity$1 ? formatter.cljs$core$IFn$_invoke$arity$1(G__14162) : formatter.call(null,G__14162));
})():[cljs.core.str("class=\""),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$1(lang)),cljs.core.str("\"")].join('')))].join(''):null)),cljs.core.str(">"),cljs.core.str(markdown.common.escape_code(((cljs.core.empty_QMARK_(s))?s:[cljs.core.str(s),cljs.core.str("\n")].join(''))))].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$code,true,cljs.core.array_seq([cljs.core.cst$kw$codeblock,true], 0))], null);
} else {
if(cljs.core.truth_(cljs.core.cst$kw$codeblock.cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(markdown.common.escape_code(text)),cljs.core.str("\n")].join(''),state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}
});
markdown.transformers.hr = (function markdown$transformers$hr(text,state){
if(cljs.core.truth_(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(((cljs.core.empty_QMARK_(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"*",null], null), null),text))) || (cljs.core.empty_QMARK_(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"-",null], null), null),text))) || (cljs.core.empty_QMARK_(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"_",null], null), null),text)))) && ((cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [" ",null], null), null),text)) > (2)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<hr/>")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$hr,true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
}
});
markdown.transformers.blockquote = (function markdown$transformers$blockquote(text,p__14163){
var map__14166 = p__14163;
var map__14166__$1 = ((((!((map__14166 == null)))?((((map__14166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14166):map__14166);
var state = map__14166__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14166__$1,cljs.core.cst$kw$eof);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14166__$1,cljs.core.cst$kw$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14166__$1,cljs.core.cst$kw$codeblock);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14166__$1,cljs.core.cst$kw$lists);
var trimmed = clojure.string.trim(text);
if(cljs.core.truth_((function (){var or__6116__auto__ = code;
if(cljs.core.truth_(or__6116__auto__)){
return or__6116__auto__;
} else {
var or__6116__auto____$1 = codeblock;
if(cljs.core.truth_(or__6116__auto____$1)){
return or__6116__auto____$1;
} else {
return lists;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(cljs.core.cst$kw$blockquote.cljs$core$IFn$_invoke$arity$1(state))){
if(cljs.core.truth_((function (){var or__6116__auto__ = eof;
if(cljs.core.truth_(or__6116__auto__)){
return or__6116__auto__;
} else {
return cljs.core.empty_QMARK_(trimmed);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["</p></blockquote>",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$blockquote,false)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",trimmed)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["</p><p>",state], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">-",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(trimmed,(0),(2)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</p><footer>"),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,(2))),cljs.core.str("</footer><p>")].join(''),state], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(trimmed,(0),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,(1))),cljs.core.str(" ")].join(''),state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(text),cljs.core.str(" ")].join(''),state], null);

}
}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",cljs.core.first(text))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<blockquote><p>"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.rest(text))),cljs.core.str(" ")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$blockquote,true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
});
markdown.transformers.footer = (function markdown$transformers$footer(footnotes){
if(cljs.core.empty_QMARK_(cljs.core.cst$kw$processed.cljs$core$IFn$_invoke$arity$1(footnotes))){
return "";
} else {
return (function (p1__14168_SHARP_){
return [cljs.core.str("<ol class='footnotes'>"),cljs.core.str(p1__14168_SHARP_),cljs.core.str("</ol>")].join('');
}).call(null,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (footnotes__$1,p__14171){
var vec__14172 = p__14171;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14172,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14172,(1),null);
return [cljs.core.str(footnotes__$1),cljs.core.str("<li id='fn-"),cljs.core.str(id),cljs.core.str("'>"),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",label))),cljs.core.str("<a href='#fnref"),cljs.core.str(id),cljs.core.str("'>&#8617;</a></li>")].join('');
}),"",cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.cst$kw$processed.cljs$core$IFn$_invoke$arity$1(footnotes))));
}
});
/**
 * Given a line of metadata header text return either a list containing a parsed
 *   and normalizd key and the original text of the value, or if no header is found
 *   (this is a continuation or new value from a pervious header key) simply
 *   return the text. If a blank or invalid line is found return nil.
 */
markdown.transformers.parse_metadata_line = (function markdown$transformers$parse_metadata_line(line){
if(cljs.core.truth_(line)){
var vec__14175 = cljs.core.re_matches(/^([0-9A-Za-z_-]*):(.*)$/,line);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14175,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14175,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14175,(2),null);
var vec__14176 = cljs.core.re_matches(/^    (.*)$/,line);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14176,(0),null);
var next_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14176,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),"")){
if(cljs.core.truth_(key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(key)),val], null);
} else {
if(cljs.core.truth_(next_val)){
return line;
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given a list of maps which contain a single key/value, flatten them all into
 *   a single map with all the leading spaces removed. If an empty list is provided
 *   then return nil.
 */
markdown.transformers.flatten_metadata = (function markdown$transformers$flatten_metadata(metadata){
if((cljs.core.count(metadata) > (0))){
var acc = cljs.core.PersistentArrayMap.EMPTY;
var remain = metadata;
var prev_key = null;
while(true){
if(!(cljs.core.empty_QMARK_(remain))){
var data = cljs.core.first(remain);
var vec__14178 = ((cljs.core.sequential_QMARK_(data))?data:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_key,data], null));
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14178,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14178,(1),null);
var prev_val = cljs.core.get.cljs$core$IFn$_invoke$arity$3(acc,key,cljs.core.PersistentVector.EMPTY);
var postfix = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "," "], null),cljs.core.take_last((2),val)))?"\n":"");
var norm_val = [cljs.core.str(clojure.string.trim(val)),cljs.core.str(postfix)].join('');
var new_val = ((!(cljs.core.empty_QMARK_(norm_val)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_val,norm_val):prev_val);
var G__14179 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([acc,cljs.core.PersistentArrayMap.fromArray([key,new_val], true, false)], 0));
var G__14180 = cljs.core.rest(remain);
var G__14181 = key;
acc = G__14179;
remain = G__14180;
prev_key = G__14181;
continue;
} else {
return acc;
}
break;
}
} else {
return null;
}
});
/**
 * Given a sequence of lines from a markdown document, attempt to parse a
 *   metadata header if it exists.
 */
markdown.transformers.parse_metadata_headers = (function markdown$transformers$parse_metadata_headers(lines_seq){
if(cljs.core.sequential_QMARK_(lines_seq)){
} else {
throw (new Error("Assert failed: (sequential? lines-seq)"));
}

if(cljs.core.every_QMARK_(cljs.core.string_QMARK_,lines_seq)){
} else {
throw (new Error("Assert failed: (every? string? lines-seq)"));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,line){
var temp__4655__auto__ = markdown.transformers.parse_metadata_line(line);
if(cljs.core.truth_(temp__4655__auto__)){
var parsed = temp__4655__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,parsed);
} else {
return cljs.core.reduced(markdown.transformers.flatten_metadata(acc));
}
}),cljs.core.PersistentVector.EMPTY,lines_seq);
});
markdown.transformers.transformer_vector = new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.empty_line,markdown.transformers.codeblock,markdown.transformers.code,markdown.common.escaped_chars,markdown.common.inline_code,markdown.transformers.autoemail_transformer,markdown.transformers.autourl_transformer,markdown.links.image,markdown.links.image_reference_link,markdown.links.link,markdown.links.implicit_reference_link,markdown.links.reference_link,markdown.links.footnote_link,markdown.transformers.hr,markdown.lists.li,markdown.transformers.heading,markdown.common.italics,markdown.common.em,markdown.common.strong,markdown.common.bold,markdown.common.strikethrough,markdown.transformers.superscript,markdown.transformers.blockquote,markdown.tables.table,markdown.transformers.paragraph,markdown.transformers.br,markdown.common.thaw_strings,markdown.common.dashes], null);
