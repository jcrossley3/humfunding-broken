// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('markdown.tables');
goog.require('cljs.core');
goog.require('clojure.string');
markdown.tables.parse_table_row = (function markdown$tables$parse_table_row(text){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14094_SHARP_){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,p1__14094_SHARP_], null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,(function (p1__14093_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__14093_SHARP_,/\|/);
}).call(null,clojure.string.trim((function (p1__14092_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__14092_SHARP_),"|")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(p1__14092_SHARP_));
} else {
return p1__14092_SHARP_;
}
}).call(null,text)))));
});
markdown.tables.table_row__GT_str = (function markdown$tables$table_row__GT_str(row_data,is_header_QMARK_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (row,col){
var alignment_str = (cljs.core.truth_(cljs.core.cst$kw$alignment.cljs$core$IFn$_invoke$arity$1(col))?[cljs.core.str(" align='"),cljs.core.str(cljs.core.name(cljs.core.cst$kw$alignment.cljs$core$IFn$_invoke$arity$1(col))),cljs.core.str("'")].join(''):null);
if(cljs.core.truth_(is_header_QMARK_)){
return [cljs.core.str(row),cljs.core.str("<th"),cljs.core.str(alignment_str),cljs.core.str(">"),cljs.core.str(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(col)),cljs.core.str("</th>")].join('');
} else {
return [cljs.core.str(row),cljs.core.str("<td"),cljs.core.str(alignment_str),cljs.core.str(">"),cljs.core.str(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(col)),cljs.core.str("</td>")].join('');
}
}),"",row_data);
});
markdown.tables.table__GT_str = (function markdown$tables$table__GT_str(table){
var table_data = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(table));
var alignment_seq = cljs.core.cst$kw$alignment_DASH_seq.cljs$core$IFn$_invoke$arity$1(table);
return [cljs.core.str("<table>"),cljs.core.str(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (table_data,alignment_seq){
return (function (table_acc,row){
var row_idx = cljs.core.first(row);
var row_data = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.second(row),alignment_seq);
var is_header_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_idx,(0));
var is_first_row_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_idx,(1));
var is_last_row_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_idx,(cljs.core.count(table_data) - (1)));
return [cljs.core.str(table_acc),cljs.core.str(((is_header_QMARK_)?"<thead>":((is_first_row_QMARK_)?"<tbody>":null))),cljs.core.str("<tr>"),cljs.core.str(markdown.tables.table_row__GT_str(row_data,is_header_QMARK_)),cljs.core.str("</tr>"),cljs.core.str(((is_header_QMARK_)?"</thead>":((is_last_row_QMARK_)?"</tbody>":null)))].join('');
});})(table_data,alignment_seq))
,"",table_data)),cljs.core.str("</table>")].join('');
});
markdown.tables.divider_seq__GT_alignment = (function markdown$tables$divider_seq__GT_alignment(divider_seq){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (divider){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.re_find(/^:-+/,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(divider)),cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(divider))){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$alignment,cljs.core.cst$kw$left], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.re_find(/^-+:/,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(divider)),cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(divider))){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$alignment,cljs.core.cst$kw$right], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.re_find(/^:-+:/,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(divider)),cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(divider))){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$alignment,cljs.core.cst$kw$center], null));
} else {
return null;

}
}
}
}),divider_seq);
});
markdown.tables.table = (function markdown$tables$table(text,state){
var table_row_re = cljs.core.re_find(/\|(?: [\S ]+ \|)+/,text);
var table_divider_re = cljs.core.re_find(/\|(?: :?-+:? \|)+/,text);
var is_table_row_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(table_row_re,text);
var is_table_header_QMARK_ = (is_table_row_QMARK_) && (cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,cljs.core.cst$kw$in_DASH_table_DASH_body_QMARK_], null))));
var is_table_divider_QMARK_ = (function (){var and__6104__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(table_divider_re,text);
if(and__6104__auto__){
var and__6104__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,cljs.core.cst$kw$in_DASH_table_DASH_body_QMARK_], null));
if(cljs.core.truth_(and__6104__auto____$1)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,cljs.core.cst$kw$is_DASH_prev_DASH_header_QMARK_], null));
} else {
return and__6104__auto____$1;
}
} else {
return and__6104__auto__;
}
})();
if(is_table_header_QMARK_){
var header_seq = markdown.tables.parse_table_row(text);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,cljs.core.cst$kw$is_DASH_prev_DASH_header_QMARK_], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,cljs.core.cst$kw$in_DASH_table_DASH_body_QMARK_], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,cljs.core.cst$kw$data], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.vec(header_seq))], null);
} else {
if(cljs.core.truth_(is_table_divider_QMARK_)){
var divider_seq = markdown.tables.parse_table_row(text);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,cljs.core.cst$kw$is_DASH_prev_DASH_header_QMARK_], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,cljs.core.cst$kw$alignment_DASH_seq], null),markdown.tables.divider_seq__GT_alignment(divider_seq))], null);
} else {
if(is_table_row_QMARK_){
var row_seq = markdown.tables.parse_table_row(text);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,cljs.core.cst$kw$is_DASH_prev_DASH_header_QMARK_], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,cljs.core.cst$kw$data], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.vec(row_seq))], null);
} else {
var out = ((cljs.core.empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,cljs.core.cst$kw$data], null))))?text:[cljs.core.str(markdown.tables.table__GT_str(cljs.core.cst$kw$table.cljs$core$IFn$_invoke$arity$1(state))),cljs.core.str(text)].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$table)], null);

}
}
}
});
