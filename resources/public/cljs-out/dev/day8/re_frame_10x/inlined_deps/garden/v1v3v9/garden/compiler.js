// Compiled by ClojureScript 1.10.339 {}
goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compression');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.selectors');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.units');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types');
/**
 * The current compiler flags.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler._STAR_flags_STAR_ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158),true,new cljs.core.Keyword(null,"preamble","preamble",1641040241),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"output-to","output-to",-965533968),null,new cljs.core.Keyword(null,"vendors","vendors",-153040496),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"media-expressions","media-expressions",1920421643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nesting-behavior","nesting-behavior",-1555995755),new cljs.core.Keyword(null,"default","default",-1987822328)], null)], null);
/**
 * Retun a function to call when rendering a media expression.
 *   The returned function accepts two arguments: the media
 *   expression being evaluated and the current media expression context.
 *   Both arguments are maps. This is used to provide semantics for nested
 *   media queries.  Also used to support feature queries.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.media_expression_behavior = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"merge","merge",-1804319409),(function (expr,context){
return cljs.core.merge.call(null,context,expr);
}),new cljs.core.Keyword(null,"default","default",-1987822328),(function (expr,_){
return expr;
})], null);
/**
 * The current parent selector context.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler._STAR_selector_context_STAR_ = null;
/**
 * The current media query context.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler._STAR_media_query_context_STAR_ = null;
var ret__4565__auto___14211 = (function (){
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.with_selector_context = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$with_selector_context(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14212 = arguments.length;
var i__4532__auto___14213 = (0);
while(true){
if((i__4532__auto___14213 < len__4531__auto___14212)){
args__4534__auto__.push((arguments[i__4532__auto___14213]));

var G__14214 = (i__4532__auto___14213 + (1));
i__4532__auto___14213 = G__14214;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.with_selector_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.with_selector_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,selector_context,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.garden.v1v3v9.garden.compiler","*selector-context*","day8.re-frame-10x.inlined-deps.garden.v1v3v9.garden.compiler/*selector-context*",195207649,null),null,(1),null)),(new cljs.core.List(null,selector_context,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)))));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.with_selector_context.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.with_selector_context.cljs$lang$applyTo = (function (seq14207){
var G__14208 = cljs.core.first.call(null,seq14207);
var seq14207__$1 = cljs.core.next.call(null,seq14207);
var G__14209 = cljs.core.first.call(null,seq14207__$1);
var seq14207__$2 = cljs.core.next.call(null,seq14207__$1);
var G__14210 = cljs.core.first.call(null,seq14207__$2);
var seq14207__$3 = cljs.core.next.call(null,seq14207__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14208,G__14209,G__14210,seq14207__$3);
});

return null;
})()
;
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.with_selector_context.cljs$lang$macro = true;

var ret__4565__auto___14219 = (function (){
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.with_media_query_context = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$with_media_query_context(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14220 = arguments.length;
var i__4532__auto___14221 = (0);
while(true){
if((i__4532__auto___14221 < len__4531__auto___14220)){
args__4534__auto__.push((arguments[i__4532__auto___14221]));

var G__14222 = (i__4532__auto___14221 + (1));
i__4532__auto___14221 = G__14222;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.with_media_query_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.with_media_query_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,selector_context,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.garden.v1v3v9.garden.compiler","*media-query-context*","day8.re-frame-10x.inlined-deps.garden.v1v3v9.garden.compiler/*media-query-context*",-2131446209,null),null,(1),null)),(new cljs.core.List(null,selector_context,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)))));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.with_media_query_context.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.with_media_query_context.cljs$lang$applyTo = (function (seq14215){
var G__14216 = cljs.core.first.call(null,seq14215);
var seq14215__$1 = cljs.core.next.call(null,seq14215);
var G__14217 = cljs.core.first.call(null,seq14215__$1);
var seq14215__$2 = cljs.core.next.call(null,seq14215__$1);
var G__14218 = cljs.core.first.call(null,seq14215__$2);
var seq14215__$3 = cljs.core.next.call(null,seq14215__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14216,G__14217,G__14218,seq14215__$3);
});

return null;
})()
;
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.with_media_query_context.cljs$lang$macro = true;

/**
 * Return the current list of browser vendors specified in `*flags*`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.vendors = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$vendors(){
return cljs.core.seq.call(null,new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler._STAR_flags_STAR_));
});
/**
 * Return the current list of auto-prefixed properties specified in `*flags*`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.auto_prefixed_properties = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$auto_prefixed_properties(){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.name,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler._STAR_flags_STAR_)));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.auto_prefix_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$auto_prefix_QMARK_(property){
return cljs.core.contains_QMARK_.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.auto_prefixed_properties.call(null),property);
});
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.top_level_expression_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$top_level_expression_QMARK_(x){
var or__3949__auto__ = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.rule_QMARK_.call(null,x);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_import_QMARK_.call(null,x);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_media_QMARK_.call(null,x);
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
var or__3949__auto____$3 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_supports_QMARK_.call(null,x);
if(cljs.core.truth_(or__3949__auto____$3)){
return or__3949__auto____$3;
} else {
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_keyframes_QMARK_.call(null,x);
}
}
}
}
});
/**
 * Return a vector of [(filter pred coll) (remove pred coll)].
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.divide_vec = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$divide_vec(pred,coll){
return cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,pred,coll);
});

/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.IExpandable = function(){};

/**
 * Return a list containing the expanded form of `this`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$expand(this$){
if(((!((this$ == null))) && (!((this$.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$expand$arity$1 == null))))){
return this$.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$expand$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IExpandable.expand",this$);
}
}
}
});

/**
 * Like flatten but only affects seqs.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_seqs = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$expand_seqs(coll){
return cljs.core.mapcat.call(null,(function (x){
if(cljs.core.seq_QMARK_.call(null,x)){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_seqs.call(null,x);
} else {
return (new cljs.core.List(null,x,null,(1),null));
}
}),coll);
});
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_declaration_1 = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$expand_declaration_1(declaration){
if(cljs.core.map_QMARK_.call(null,declaration)){
} else {
throw (new Error("Assert failed: (map? declaration)"));
}

var prefix = (function (p1__14223_SHARP_,p2__14224_SHARP_){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.as_str.call(null,p1__14223_SHARP_,"-",p2__14224_SHARP_);
});
return cljs.core.reduce.call(null,((function (prefix){
return (function (m,p__14225){
var vec__14226 = p__14225;
var k = cljs.core.nth.call(null,vec__14226,(0),null);
var v = cljs.core.nth.call(null,vec__14226,(1),null);
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.hash_map_QMARK_.call(null,v))){
return cljs.core.reduce.call(null,((function (vec__14226,k,v,prefix){
return (function (m1,p__14229){
var vec__14230 = p__14229;
var k1 = cljs.core.nth.call(null,vec__14230,(0),null);
var v1 = cljs.core.nth.call(null,vec__14230,(1),null);
return cljs.core.assoc.call(null,m1,prefix.call(null,k,k1),v1);
});})(vec__14226,k,v,prefix))
,m,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_declaration_1.call(null,v));
} else {
return cljs.core.assoc.call(null,m,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str.call(null,k),v);
}
});})(prefix))
,cljs.core.empty.call(null,declaration),declaration);
});
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_declaration = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$expand_declaration(declaration){
if(cljs.core.empty_QMARK_.call(null,declaration)){
return declaration;
} else {
return cljs.core.with_meta.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_declaration_1.call(null,declaration),cljs.core.meta.call(null,declaration));
}
});
/**
 * Matches a single "&" or "&" follow by one or more
 *   non-whitespace characters.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.parent_selector_re = /^&(?:\S+)?$/;
/**
 * Extract the selector portion of a parent selector reference.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.extract_reference = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$extract_reference(selector){
var temp__5457__auto__ = cljs.core.re_find.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.parent_selector_re,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str.call(null,cljs.core.last.call(null,selector)));
if(cljs.core.truth_(temp__5457__auto__)){
var reference = temp__5457__auto__;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,reference));
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_selector_reference = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$expand_selector_reference(selector){
var temp__5455__auto__ = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.extract_reference.call(null,selector);
if(cljs.core.truth_(temp__5455__auto__)){
var reference = temp__5455__auto__;
var parent = cljs.core.butlast.call(null,selector);
return cljs.core.concat.call(null,cljs.core.butlast.call(null,parent),(new cljs.core.List(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.as_str.call(null,cljs.core.last.call(null,parent),reference),null,(1),null)));
} else {
return selector;
}
});
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_selector = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$expand_selector(selector,parent){
var selector__$1 = cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.selectors.css_selector,selector);
var selector__$2 = ((cljs.core.seq.call(null,parent))?cljs.core.map.call(null,cljs.core.flatten,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.cartesian_product.call(null,parent,selector__$1)):cljs.core.map.call(null,cljs.core.list,selector__$1));
return cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_selector_reference,selector__$2);
});
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$expand_rule(rule){
var vec__14233 = cljs.core.split_with.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.selectors.selector_QMARK_,rule);
var selector = cljs.core.nth.call(null,vec__14233,(0),null);
var children = cljs.core.nth.call(null,vec__14233,(1),null);
var selector__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_selector.call(null,selector,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler._STAR_selector_context_STAR_);
var children__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand.call(null,children);
var vec__14236 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.divide_vec.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.declaration_QMARK_,children__$1);
var declarations = cljs.core.nth.call(null,vec__14236,(0),null);
var xs = cljs.core.nth.call(null,vec__14236,(1),null);
var ys = (function (){var _STAR_selector_context_STAR_14239 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler._STAR_selector_context_STAR_;
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler._STAR_selector_context_STAR_ = ((cljs.core.seq.call(null,selector__$1))?selector__$1:day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler._STAR_selector_context_STAR_);

try{return cljs.core.doall.call(null,cljs.core.mapcat.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand,xs));
}finally {day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler._STAR_selector_context_STAR_ = _STAR_selector_context_STAR_14239;
}})();
return cljs.core.conj.call(null,ys,cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector__$1], null),cljs.core.mapcat.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand,declarations)));
});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden.v1v3v9 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_at_rule !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_at_rule = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"day8.re-frame-10x.inlined-deps.garden.v1v3v9.garden.compiler","expand-at-rule"),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.core._add_method.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_at_rule,new cljs.core.Keyword(null,"default","default",-1987822328),(function (at_rule){
return (new cljs.core.List(null,at_rule,null,(1),null));
}));
cljs.core._add_method.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_at_rule,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),(function (p__14240){
var map__14241 = p__14240;
var map__14241__$1 = ((((!((map__14241 == null)))?(((((map__14241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14241):map__14241);
var value = cljs.core.get.call(null,map__14241__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__14243 = value;
var map__14243__$1 = ((((!((map__14243 == null)))?(((((map__14243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14243):map__14243);
var identifier = cljs.core.get.call(null,map__14243__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498));
var frames = cljs.core.get.call(null,map__14243__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
return (new cljs.core.List(null,(new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str.call(null,identifier),new cljs.core.Keyword(null,"frames","frames",1765687497),cljs.core.mapcat.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand,frames)], null),null,null,null)),null,(1),null));
}));
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_media_query_expression = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$expand_media_query_expression(expression){
var temp__5455__auto__ = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.media_expression_behavior.call(null,cljs.core.get_in.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler._STAR_flags_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"media-expressions","media-expressions",1920421643),new cljs.core.Keyword(null,"nesting-behavior","nesting-behavior",-1555995755)], null)));
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return f.call(null,expression,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler._STAR_media_query_context_STAR_);
} else {
return expression;
}
});
cljs.core._add_method.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_at_rule,new cljs.core.Keyword(null,"media","media",-1066138403),(function (p__14245){
var map__14246 = p__14245;
var map__14246__$1 = ((((!((map__14246 == null)))?(((((map__14246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14246):map__14246);
var value = cljs.core.get.call(null,map__14246__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__14248 = value;
var map__14248__$1 = ((((!((map__14248 == null)))?(((((map__14248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14248):map__14248);
var media_queries = cljs.core.get.call(null,map__14248__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var rules = cljs.core.get.call(null,map__14248__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var media_queries__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_media_query_expression.call(null,media_queries);
var xs = (function (){var _STAR_media_query_context_STAR_14253 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler._STAR_media_query_context_STAR_;
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler._STAR_media_query_context_STAR_ = media_queries__$1;

try{return cljs.core.doall.call(null,cljs.core.mapcat.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand.call(null,rules)));
}finally {day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler._STAR_media_query_context_STAR_ = _STAR_media_query_context_STAR_14253;
}})();
var vec__14249 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.divide_vec.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_media_QMARK_,xs);
var subqueries = cljs.core.nth.call(null,vec__14249,(0),null);
var rules__$1 = cljs.core.nth.call(null,vec__14249,(1),null);
return cljs.core.cons.call(null,(new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries__$1,new cljs.core.Keyword(null,"rules","rules",1198912366),rules__$1], null),null,null,null)),subqueries);
}));
cljs.core._add_method.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_at_rule,new cljs.core.Keyword(null,"feature","feature",27242652),(function (p__14254){
var map__14255 = p__14254;
var map__14255__$1 = ((((!((map__14255 == null)))?(((((map__14255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14255):map__14255);
var value = cljs.core.get.call(null,map__14255__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__14257 = value;
var map__14257__$1 = ((((!((map__14257 == null)))?(((((map__14257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14257):map__14257);
var feature_queries = cljs.core.get.call(null,map__14257__$1,new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408));
var rules = cljs.core.get.call(null,map__14257__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var feature_queries__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_media_query_expression.call(null,feature_queries);
var xs = (function (){var _STAR_media_query_context_STAR_14262 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler._STAR_media_query_context_STAR_;
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler._STAR_media_query_context_STAR_ = feature_queries__$1;

try{return cljs.core.doall.call(null,cljs.core.mapcat.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand.call(null,rules)));
}finally {day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler._STAR_media_query_context_STAR_ = _STAR_media_query_context_STAR_14262;
}})();
var vec__14258 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.divide_vec.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_supports_QMARK_,xs);
var subqueries = cljs.core.nth.call(null,vec__14258,(0),null);
var rules__$1 = cljs.core.nth.call(null,vec__14258,(1),null);
return cljs.core.cons.call(null,(new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule(new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries__$1,new cljs.core.Keyword(null,"rules","rules",1198912366),rules__$1], null),null,null,null)),subqueries);
}));
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_stylesheet = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$expand_stylesheet(xs){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand.call(null,xs)));
});
goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.IExpandable,"null",true);

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand,"null",(function (this$){
return null;
}));

cljs.core.IndexedSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.LazySeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.NodeSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.NodeSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.BlackNode.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.BlackNode.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_rule.call(null,this$__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMapSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.ChunkedSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.Cons.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.RSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_seqs.call(null,this$__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,this$__$1,null,(1),null));
});

cljs.core.PersistentHashMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_declaration.call(null,this$__$1),null,(1),null));
});

cljs.core.ArrayNodeSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ArrayNodeSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.Subvec.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_rule.call(null,this$__$1);
});

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.IExpandable,"_",true);

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand,"_",(function (this$){
return (new cljs.core.List(null,this$,null,(1),null));
}));

cljs.core.PersistentTreeMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_declaration.call(null,this$__$1),null,(1),null));
});

cljs.core.ChunkedCons.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedCons.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_seqs.call(null,this$__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_at_rule.call(null,this$__$1);
});

cljs.core.RedNode.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RedNode.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_rule.call(null,this$__$1);
});

cljs.core.PersistentVector.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_rule.call(null,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_declaration.call(null,this$__$1),null,(1),null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,this$__$1,null,(1),null));
});

cljs.core.List.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_seqs.call(null,this$__$1);
});

/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.CSSRenderer = function(){};

/**
 * Convert a Clojure data type in to a string of CSS.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$render_css(this$){
if(((!((this$ == null))) && (!((this$.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$render_css$arity$1 == null))))){
return this$.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$render_css$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"CSSRenderer.render-css",this$);
}
}
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.comma = ", ";
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.colon = ": ";
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.semicolon = ";";
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.l_brace = " {\n";
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.r_brace = "\n}";
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.l_brace_1 = " {\n\n";
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.r_brace_1 = "\n\n}";
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.rule_sep = "\n\n";
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.indent = "  ";
/**
 * Return a space separated list of values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.space_separated_list = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$space_separated_list(var_args){
var G__14264 = arguments.length;
switch (G__14264) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.space_separated_list.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css,xs);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return clojure.string.join.call(null," ",cljs.core.map.call(null,f,xs));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.space_separated_list.cljs$lang$maxFixedArity = 2;

/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.comma_separated_list = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$comma_separated_list(var_args){
var G__14267 = arguments.length;
switch (G__14267) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.comma_separated_list.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css,xs);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
var ys = (function (){var iter__4324__auto__ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$iter__14268(s__14269){
return (new cljs.core.LazySeq(null,(function (){
var s__14269__$1 = s__14269;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14269__$1);
if(temp__5457__auto__){
var s__14269__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14269__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__14269__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__14271 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__14270 = (0);
while(true){
if((i__14270 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__14270);
cljs.core.chunk_append.call(null,b__14271,((cljs.core.sequential_QMARK_.call(null,x))?day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.space_separated_list.call(null,f,x):f.call(null,x)));

var G__14273 = (i__14270 + (1));
i__14270 = G__14273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14271),day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$iter__14268.call(null,cljs.core.chunk_rest.call(null,s__14269__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14271),null);
}
} else {
var x = cljs.core.first.call(null,s__14269__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.space_separated_list.call(null,f,x):f.call(null,x)),day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$iter__14268.call(null,cljs.core.rest.call(null,s__14269__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,xs);
})();
return clojure.string.join.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.comma,ys);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.comma_separated_list.cljs$lang$maxFixedArity = 2;

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.rule_join = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$rule_join(xs){
return clojure.string.join.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.rule_sep,xs);
});
/**
 * Match the start of a line if the characters immediately
 *   after it are spaces or used in a CSS id (#), class (.), or tag name.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.indent_loc_re = (new RegExp("(?=[ A-Za-z#.}-]+)^","gm"));
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.indent_str = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$indent_str(s){
return s.replace(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.indent_loc_re,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.indent);
});
/**
 * Render the value portion of a declaration.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_value = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$render_value(x){
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_keyframes_QMARK_.call(null,x))){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str.call(null,cljs.core.get_in.call(null,x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"identifier","identifier",-805503498)], null)));
} else {
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css.call(null,x);
}
});
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_property_and_value = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$render_property_and_value(p__14274){
var vec__14275 = p__14274;
var prop = cljs.core.nth.call(null,vec__14275,(0),null);
var val = cljs.core.nth.call(null,vec__14275,(1),null);
if(cljs.core.set_QMARK_.call(null,val)){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_property_and_value,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,cljs.core.repeat.call(null,prop),val))));
} else {
var val__$1 = ((cljs.core.sequential_QMARK_.call(null,val))?day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.comma_separated_list.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_value,val):day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_value.call(null,val));
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.as_str.call(null,prop,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.colon,val__$1,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.semicolon);
}
});
/**
 * For each block in `declaration`, add sequence of blocks
 * returned from calling `f` on the block.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.add_blocks = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$add_blocks(f,declaration){
return cljs.core.mapcat.call(null,(function (p1__14278_SHARP_){
return cljs.core.cons.call(null,p1__14278_SHARP_,f.call(null,p1__14278_SHARP_));
}),declaration);
});
/**
 * Sequence of blocks with their properties prefixed by
 * each vendor in `vendors`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.prefixed_blocks = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$prefixed_blocks(vendors,p__14279){
var vec__14280 = p__14279;
var p = cljs.core.nth.call(null,vec__14280,(0),null);
var v = cljs.core.nth.call(null,vec__14280,(1),null);
var iter__4324__auto__ = ((function (vec__14280,p,v){
return (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$prefixed_blocks_$_iter__14283(s__14284){
return (new cljs.core.LazySeq(null,((function (vec__14280,p,v){
return (function (){
var s__14284__$1 = s__14284;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14284__$1);
if(temp__5457__auto__){
var s__14284__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14284__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__14284__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__14286 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__14285 = (0);
while(true){
if((i__14285 < size__4323__auto__)){
var vendor = cljs.core._nth.call(null,c__4322__auto__,i__14285);
cljs.core.chunk_append.call(null,b__14286,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.vendor_prefix.call(null,vendor,cljs.core.name.call(null,p)),v], null));

var G__14287 = (i__14285 + (1));
i__14285 = G__14287;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14286),day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$prefixed_blocks_$_iter__14283.call(null,cljs.core.chunk_rest.call(null,s__14284__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14286),null);
}
} else {
var vendor = cljs.core.first.call(null,s__14284__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.vendor_prefix.call(null,vendor,cljs.core.name.call(null,p)),v], null),day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$prefixed_blocks_$_iter__14283.call(null,cljs.core.rest.call(null,s__14284__$2)));
}
} else {
return null;
}
break;
}
});})(vec__14280,p,v))
,null,null));
});})(vec__14280,p,v))
;
return iter__4324__auto__.call(null,vendors);
});
/**
 * Add prefixes to all blocks in `declaration` using
 * vendor prefixes in `vendors`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.prefix_all_properties = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$prefix_all_properties(vendors,declaration){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.add_blocks.call(null,cljs.core.partial.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.prefixed_blocks,vendors),declaration);
});
/**
 * Add prefixes to all blocks in `declaration` when property
 * is in the `:auto-prefix` set.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.prefix_auto_properties = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$prefix_auto_properties(vendors,declaration){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.add_blocks.call(null,(function (block){
var vec__14288 = block;
var p = cljs.core.nth.call(null,vec__14288,(0),null);
var _ = cljs.core.nth.call(null,vec__14288,(1),null);
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.auto_prefix_QMARK_.call(null,cljs.core.name.call(null,p)))){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.prefixed_blocks.call(null,vendors,block);
} else {
return null;
}
}),declaration);
});
/**
 * Prefix properties within a `declaration` if `{:prefix true}` is
 * set in its meta, or if a property is in the `:auto-prefix` set.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.prefix_declaration = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$prefix_declaration(declaration){
var vendors = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,declaration));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.vendors.call(null);
}
})();
var prefix_fn = (cljs.core.truth_(new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,declaration)))?day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.prefix_all_properties:day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.prefix_auto_properties);
return prefix_fn.call(null,vendors,declaration);
});
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_declaration = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$render_declaration(declaration){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_property_and_value,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.prefix_declaration.call(null,declaration)));
});
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_selector = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$render_selector(selector){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.comma_separated_list.call(null,selector);
});
/**
 * Convert a vector to a CSS rule string. The vector is expected to be
 *   fully expanded.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$render_rule(p__14291){
var vec__14292 = p__14291;
var selector = cljs.core.nth.call(null,vec__14292,(0),null);
var declarations = cljs.core.nth.call(null,vec__14292,(1),null);
var rule = vec__14292;
if(((cljs.core.seq.call(null,rule)) && (cljs.core.every_QMARK_.call(null,cljs.core.seq,rule)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_selector.call(null,selector)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.l_brace),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.indent_str.call(null,clojure.string.join.call(null,"\n",cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css,declarations)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.r_brace)].join('');
} else {
return null;
}
});
/**
 * Render the individual components of a media expression.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_media_expr_part = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$render_media_expr_part(p__14295){
var vec__14296 = p__14295;
var k = cljs.core.nth.call(null,vec__14296,(0),null);
var v = cljs.core.nth.call(null,vec__14296,(1),null);
var vec__14299 = cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var sk = cljs.core.nth.call(null,vec__14299,(0),null);
var sv = cljs.core.nth.call(null,vec__14299,(1),null);
if(v === true){
return sk;
} else {
if(v === false){
return ["not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk)].join('');
} else {
if(cljs.core._EQ_.call(null,"only",sv)){
return ["only ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk)].join('');
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.seq.call(null,sv);
} else {
return and__3938__auto__;
}
})())){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.colon),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sv),")"].join('');
} else {
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),")"].join('');
}

}
}
}
});
/**
 * Make a media query expession from one or more maps. Keys are not
 *   validated but values have the following semantics:
 * 
 *  `true`  as in `{:screen true}`  == "screen"
 *  `false` as in `{:screen false}` == "not screen"
 *  `:only` as in `{:screen :only}  == "only screen"
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_media_expr = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$render_media_expr(expr){
if(cljs.core.sequential_QMARK_.call(null,expr)){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.comma_separated_list.call(null,cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_media_expr,expr));
} else {
return clojure.string.join.call(null," and ",cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_media_expr_part,expr));
}
});
/**
 * Render the individual components of a query expression.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_feature_expr_part = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$render_feature_expr_part(p__14302){
var vec__14303 = p__14302;
var k = cljs.core.nth.call(null,vec__14303,(0),null);
var v = cljs.core.nth.call(null,vec__14303,(1),null);
var vec__14306 = cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var sk = cljs.core.nth.call(null,vec__14306,(0),null);
var sv = cljs.core.nth.call(null,vec__14306,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.seq.call(null,sv);
} else {
return and__3938__auto__;
}
})())){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.colon),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sv),")"].join('');
} else {
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),")"].join('');
}
});
/**
 * Make a query expression from one or more maps. Keys are not
 *   validated.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_feature_expr = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$render_feature_expr(expr){
if(cljs.core.sequential_QMARK_.call(null,expr)){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.comma_separated_list.call(null,cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_feature_expr,expr));
} else {
return clojure.string.join.call(null," and ",cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_feature_expr_part,expr));
}
});
/**
 * Render a CSSUnit.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_unit = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$render_unit(css_unit){
var map__14309 = css_unit;
var map__14309__$1 = ((((!((map__14309 == null)))?(((((map__14309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14309):map__14309);
var magnitude = cljs.core.get.call(null,map__14309__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var unit = cljs.core.get.call(null,map__14309__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var magnitude__$1 = magnitude;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(magnitude__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,unit))].join('');
});
/**
 * Render a CSS function.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_function = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$render_function(css_function){
var map__14311 = css_function;
var map__14311__$1 = ((((!((map__14311 == null)))?(((((map__14311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14311):map__14311);
var f = cljs.core.get.call(null,map__14311__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__14311__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var args__$1 = ((cljs.core.sequential_QMARK_.call(null,args))?day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.comma_separated_list.call(null,args):day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str.call(null,args));
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.format.call(null,"%s(%s)",day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str.call(null,f),args__$1);
});
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_color = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$render_color(c){
var temp__5455__auto__ = new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(temp__5455__auto__)){
var a = temp__5455__auto__;
var map__14313 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_hsl.call(null,c);
var map__14313__$1 = ((((!((map__14313 == null)))?(((((map__14313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14313):map__14313);
var hue = cljs.core.get.call(null,map__14313__$1,new cljs.core.Keyword(null,"hue","hue",-508078848));
var saturation = cljs.core.get.call(null,map__14313__$1,new cljs.core.Keyword(null,"saturation","saturation",-14247929));
var lightness = cljs.core.get.call(null,map__14313__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930));
var vec__14314 = cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.units.percent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [saturation,lightness], null));
var s = cljs.core.nth.call(null,vec__14314,(0),null);
var l = cljs.core.nth.call(null,vec__14314,(1),null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.format.call(null,"hsla(%s)",day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.comma_separated_list.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [hue,s,l,a], null)));
} else {
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.as_hex.call(null,c);
}
});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden.v1v3v9 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_at_rule !== 'undefined')){
} else {
/**
 * Render a CSS at-rule
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_at_rule = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"day8.re-frame-10x.inlined-deps.garden.v1v3v9.garden.compiler","render-at-rule"),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.core._add_method.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_at_rule,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));
cljs.core._add_method.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_at_rule,new cljs.core.Keyword(null,"import","import",-1399500709),(function (p__14318){
var map__14319 = p__14318;
var map__14319__$1 = ((((!((map__14319 == null)))?(((((map__14319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14319):map__14319);
var value = cljs.core.get.call(null,map__14319__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__14321 = value;
var map__14321__$1 = ((((!((map__14321 == null)))?(((((map__14321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14321):map__14321);
var url = cljs.core.get.call(null,map__14321__$1,new cljs.core.Keyword(null,"url","url",276297046));
var media_queries = cljs.core.get.call(null,map__14321__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var url__$1 = ((typeof url === 'string')?day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.wrap_quotes.call(null,url):day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css.call(null,url));
var queries = (cljs.core.truth_(media_queries)?day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_media_expr.call(null,media_queries):null);
return ["@import ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(queries)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(queries)].join(''):url__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.semicolon)].join('');
}));
cljs.core._add_method.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_at_rule,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),(function (p__14324){
var map__14325 = p__14324;
var map__14325__$1 = ((((!((map__14325 == null)))?(((((map__14325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14325):map__14325);
var value = cljs.core.get.call(null,map__14325__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__14327 = value;
var map__14327__$1 = ((((!((map__14327 == null)))?(((((map__14327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14327):map__14327);
var identifier = cljs.core.get.call(null,map__14327__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498));
var frames = cljs.core.get.call(null,map__14327__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
if(cljs.core.seq.call(null,frames)){
var body = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str.call(null,identifier)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.l_brace_1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.indent_str.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.rule_join.call(null,cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css,frames)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.r_brace_1)].join('');
var prefix = ((function (body,map__14327,map__14327__$1,identifier,frames,map__14325,map__14325__$1,value){
return (function (vendor){
return ["@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.vendor_prefix.call(null,vendor,"keyframes "))].join('');
});})(body,map__14327,map__14327__$1,identifier,frames,map__14325,map__14325__$1,value))
;
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.rule_join.call(null,cljs.core.map.call(null,((function (body,prefix,map__14327,map__14327__$1,identifier,frames,map__14325,map__14325__$1,value){
return (function (p1__14323_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14323_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(body)].join('');
});})(body,prefix,map__14327,map__14327__$1,identifier,frames,map__14325,map__14325__$1,value))
,cljs.core.cons.call(null,"@keyframes ",cljs.core.map.call(null,prefix,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.vendors.call(null)))));
} else {
return null;
}
}));
cljs.core._add_method.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_at_rule,new cljs.core.Keyword(null,"media","media",-1066138403),(function (p__14329){
var map__14330 = p__14329;
var map__14330__$1 = ((((!((map__14330 == null)))?(((((map__14330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14330):map__14330);
var value = cljs.core.get.call(null,map__14330__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__14332 = value;
var map__14332__$1 = ((((!((map__14332 == null)))?(((((map__14332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14332):map__14332);
var media_queries = cljs.core.get.call(null,map__14332__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var rules = cljs.core.get.call(null,map__14332__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
if(cljs.core.seq.call(null,rules)){
return ["@media ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_media_expr.call(null,media_queries)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.l_brace_1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.indent_str.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.rule_join.call(null,cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css,rules)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.r_brace_1)].join('');
} else {
return null;
}
}));
cljs.core._add_method.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_at_rule,new cljs.core.Keyword(null,"feature","feature",27242652),(function (p__14334){
var map__14335 = p__14334;
var map__14335__$1 = ((((!((map__14335 == null)))?(((((map__14335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14335):map__14335);
var value = cljs.core.get.call(null,map__14335__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__14337 = value;
var map__14337__$1 = ((((!((map__14337 == null)))?(((((map__14337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14337):map__14337);
var feature_queries = cljs.core.get.call(null,map__14337__$1,new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408));
var rules = cljs.core.get.call(null,map__14337__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
if(cljs.core.seq.call(null,rules)){
return ["@supports ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_feature_expr.call(null,feature_queries)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.l_brace_1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.indent_str.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.rule_join.call(null,cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css,rules)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.r_brace_1)].join('');
} else {
return null;
}
}));
goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.CSSRenderer,"null",true);

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css,"null",(function (this$){
return "";
}));

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.CSSColor.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_color.call(null,this$__$1);
});

cljs.core.IndexedSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css,this$__$1);
});

cljs.core.LazySeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css,this$__$1);
});

cljs.core.NodeSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.NodeSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css,this$__$1);
});

cljs.core.BlackNode.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.BlackNode.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_rule.call(null,this$__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMapSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css,this$__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSUnit.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_unit.call(null,this$__$1);
});

cljs.core.ChunkedSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css,this$__$1);
});

cljs.core.Cons.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css,this$__$1);
});

cljs.core.RSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css,this$__$1);
});

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.CSSRenderer,"number",true);

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css,"number",(function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
}));

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_function.call(null,this$__$1);
});

cljs.core.PersistentHashMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_declaration.call(null,this$__$1);
});

cljs.core.ArrayNodeSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ArrayNodeSeq.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css,this$__$1);
});

cljs.core.Subvec.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_rule.call(null,this$__$1);
});

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.CSSRenderer,"_",true);

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css,"_",(function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
}));

cljs.core.PersistentTreeMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_declaration.call(null,this$__$1);
});

cljs.core.ChunkedCons.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedCons.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css,this$__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_at_rule.call(null,this$__$1);
});

cljs.core.RedNode.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RedNode.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_rule.call(null,this$__$1);
});

cljs.core.PersistentVector.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_rule.call(null,this$__$1);
});

cljs.core.Keyword.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_declaration.call(null,this$__$1);
});

cljs.core.List.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css,this$__$1);
});
/**
 * Convert a sequence of maps into CSS for use with the HTML style
 * attribute.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.compile_style = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$compile_style(ms){
return cljs.core.first.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand.call(null,cljs.core.reduce.call(null,cljs.core.merge,cljs.core.filter.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.declaration_QMARK_,ms)))));
});
/**
 * Return a string of CSS.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.do_compile = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$do_compile(flags,rules){
var _STAR_flags_STAR_14339 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler._STAR_flags_STAR_;
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler._STAR_flags_STAR_ = flags;

try{return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.rule_join.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.render_css,cljs.core.filter.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.top_level_expression_QMARK_,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.expand_stylesheet.call(null,rules)))));
}finally {day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler._STAR_flags_STAR_ = _STAR_flags_STAR_14339;
}});
/**
 * Prefix stylesheet with files in preamble. Not available in
 *   ClojureScript.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.do_preamble = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$do_preamble(p__14340,stylesheet){
var map__14341 = p__14340;
var map__14341__$1 = ((((!((map__14341 == null)))?(((((map__14341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14341):map__14341);
var preamble = cljs.core.get.call(null,map__14341__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
return stylesheet;
});
/**
 * Compress CSS if the pretty-print(?) flag is true.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.do_compression = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$do_compression(p__14343,stylesheet){
var map__14344 = p__14343;
var map__14344__$1 = ((((!((map__14344 == null)))?(((((map__14344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14344):map__14344);
var pretty_print_QMARK_ = cljs.core.get.call(null,map__14344__$1,new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158));
var pretty_print = cljs.core.get.call(null,map__14344__$1,new cljs.core.Keyword(null,"pretty-print","pretty-print",-1314067013));
if(cljs.core.truth_((function (){var or__3949__auto__ = pretty_print_QMARK_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return pretty_print;
}
})())){
return stylesheet;
} else {
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compression.compress_stylesheet.call(null,stylesheet);
}
});
/**
 * Write contents of stylesheet to disk.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.do_output_to = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$do_output_to(p__14346,stylesheet){
var map__14347 = p__14346;
var map__14347__$1 = ((((!((map__14347 == null)))?(((((map__14347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14347):map__14347);
var output_to = cljs.core.get.call(null,map__14347__$1,new cljs.core.Keyword(null,"output-to","output-to",-965533968));
return stylesheet;
});
/**
 * Convert any number of Clojure data structures to CSS.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.compile_css = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$compiler$compile_css(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14354 = arguments.length;
var i__4532__auto___14355 = (0);
while(true){
if((i__4532__auto___14355 < len__4531__auto___14354)){
args__4534__auto__.push((arguments[i__4532__auto___14355]));

var G__14356 = (i__4532__auto___14355 + (1));
i__4532__auto___14355 = G__14356;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic = (function (flags,rules){
var vec__14351 = (cljs.core.truth_((function (){var and__3938__auto__ = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.hash_map_QMARK_.call(null,flags);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.some.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,flags)),cljs.core.keys.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler._STAR_flags_STAR_));
} else {
return and__3938__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler._STAR_flags_STAR_,flags),rules], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler._STAR_flags_STAR_,cljs.core.cons.call(null,flags,rules)], null));
var flags__$1 = cljs.core.nth.call(null,vec__14351,(0),null);
var rules__$1 = cljs.core.nth.call(null,vec__14351,(1),null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.do_output_to.call(null,flags__$1,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.do_compression.call(null,flags__$1,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.do_preamble.call(null,flags__$1,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.do_compile.call(null,flags__$1,rules__$1))));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.compile_css.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.compile_css.cljs$lang$applyTo = (function (seq14349){
var G__14350 = cljs.core.first.call(null,seq14349);
var seq14349__$1 = cljs.core.next.call(null,seq14349);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14350,seq14349__$1);
});


//# sourceMappingURL=compiler.js.map
