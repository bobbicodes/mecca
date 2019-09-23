// Compiled by ClojureScript 1.10.339 {}
goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.format = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$format(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12833 = arguments.length;
var i__4532__auto___12834 = (0);
while(true){
if((i__4532__auto___12834 < len__4531__auto___12833)){
args__4534__auto__.push((arguments[i__4532__auto___12834]));

var G__12835 = (i__4532__auto___12834 + (1));
i__4532__auto___12834 = G__12835;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.format.cljs$lang$applyTo = (function (seq12831){
var G__12832 = cljs.core.first.call(null,seq12831);
var seq12831__$1 = cljs.core.next.call(null,seq12831);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12832,seq12831__$1);
});


/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$to_str(this$){
if(((!((this$ == null))) && (!((this$.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$ToString$to_str$arity$1 == null))))){
return this$.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$ToString$to_str$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ToString.to-str",this$);
}
}
}
});

cljs.core.Keyword.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
});

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.ToString,"_",true);

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str,"_",(function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
}));

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.ToString,"null",true);

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str,"null",(function (this$){
return "";
}));
/**
 * Convert a variable number of values into strings.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.as_str = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$as_str(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12837 = arguments.length;
var i__4532__auto___12838 = (0);
while(true){
if((i__4532__auto___12838 < len__4531__auto___12837)){
args__4534__auto__.push((arguments[i__4532__auto___12838]));

var G__12839 = (i__4532__auto___12838 + (1));
i__4532__auto___12838 = G__12839;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str,args));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.as_str.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.as_str.cljs$lang$applyTo = (function (seq12836){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12836));
});

/**
 * Convert a string to an integer with optional base.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.string__GT_int = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$string__GT_int(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12846 = arguments.length;
var i__4532__auto___12847 = (0);
while(true){
if((i__4532__auto___12847 < len__4531__auto___12846)){
args__4534__auto__.push((arguments[i__4532__auto___12847]));

var G__12848 = (i__4532__auto___12847 + (1));
i__4532__auto___12847 = G__12848;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__12842){
var vec__12843 = p__12842;
var radix = cljs.core.nth.call(null,vec__12843,(0),null);
var radix__$1 = (function (){var or__3949__auto__ = radix;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.string__GT_int.cljs$lang$applyTo = (function (seq12840){
var G__12841 = cljs.core.first.call(null,seq12840);
var seq12840__$1 = cljs.core.next.call(null,seq12840);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12841,seq12840__$1);
});

/**
 * Convert an integer to a string with optional base.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.int__GT_string = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$int__GT_string(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12855 = arguments.length;
var i__4532__auto___12856 = (0);
while(true){
if((i__4532__auto___12856 < len__4531__auto___12855)){
args__4534__auto__.push((arguments[i__4532__auto___12856]));

var G__12857 = (i__4532__auto___12856 + (1));
i__4532__auto___12856 = G__12857;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__12851){
var vec__12852 = p__12851;
var radix = cljs.core.nth.call(null,vec__12852,(0),null);
var radix__$1 = (function (){var or__3949__auto__ = radix;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.int__GT_string.cljs$lang$applyTo = (function (seq12849){
var G__12850 = cljs.core.first.call(null,seq12849);
var seq12849__$1 = cljs.core.next.call(null,seq12849);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12850,seq12849__$1);
});

/**
 * Return a space separated list of values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.space_join = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$space_join(xs){
return clojure.string.join.call(null," ",cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.comma_join = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$comma_join(xs){
var ys = (function (){var iter__4324__auto__ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$comma_join_$_iter__12858(s__12859){
return (new cljs.core.LazySeq(null,(function (){
var s__12859__$1 = s__12859;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__12859__$1);
if(temp__5457__auto__){
var s__12859__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12859__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__12859__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__12861 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__12860 = (0);
while(true){
if((i__12860 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__12860);
cljs.core.chunk_append.call(null,b__12861,((cljs.core.sequential_QMARK_.call(null,x))?day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.space_join.call(null,x):day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str.call(null,x)));

var G__12862 = (i__12860 + (1));
i__12860 = G__12862;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12861),day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$comma_join_$_iter__12858.call(null,cljs.core.chunk_rest.call(null,s__12859__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12861),null);
}
} else {
var x = cljs.core.first.call(null,s__12859__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.space_join.call(null,x):day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str.call(null,x)),day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$comma_join_$_iter__12858.call(null,cljs.core.rest.call(null,s__12859__$2)));
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
return clojure.string.join.call(null,", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.wrap_quotes = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$wrap_quotes(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.hash_map_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$hash_map_QMARK_(x){
return ((cljs.core.map_QMARK_.call(null,x)) && (!(cljs.core.record_QMARK_.call(null,x))));
});
/**
 * Alias to `vector?`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.declaration_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.hash_map_QMARK_;
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_rule_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$at_rule_QMARK_(x){
return (x instanceof day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_media_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$at_media_QMARK_(x){
var and__3938__auto__ = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403));
} else {
return and__3938__auto__;
}
});
/**
 * True if `x` is a CSS `@supports` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_supports_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$at_supports_QMARK_(x){
var and__3938__auto__ = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"feature","feature",27242652));
} else {
return and__3938__auto__;
}
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_keyframes_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$at_keyframes_QMARK_(x){
var and__3938__auto__ = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012));
} else {
return and__3938__auto__;
}
});
/**
 * True if `x` is a CSS `@import` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_import_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$at_import_QMARK_(x){
var and__3938__auto__ = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709));
} else {
return and__3938__auto__;
}
});
/**
 * Attach a CSS style prefix to s.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.prefix = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$prefix(p,s){
var p__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.last.call(null,p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.vendor_prefix = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$vendor_prefix(p,s){
var p__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p__$1))){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.prefix.call(null,p__$1,s);
} else {
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.prefix.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.natural_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$natural_QMARK_(n){
return ((cljs.core.integer_QMARK_.call(null,n)) && ((n > (0))));
});
/**
 * True if n is a number between a and b.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.between_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__4040__auto__ = a;
var y__4041__auto__ = b;
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})();
var top = (function (){var x__4037__auto__ = a;
var y__4038__auto__ = b;
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})();
return (((n >= bottom)) && ((n <= top)));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.clip = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$clip(a,b,n){
var vec__12863 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.call(null,vec__12863,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__12863,(1),null);
var x__4037__auto__ = a__$1;
var y__4038__auto__ = (function (){var x__4040__auto__ = b__$1;
var y__4041__auto__ = n;
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})();
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
});
/**
 * Return the average of two or more numbers.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.average = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$average(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12869 = arguments.length;
var i__4532__auto___12870 = (0);
while(true){
if((i__4532__auto___12870 < len__4531__auto___12869)){
args__4534__auto__.push((arguments[i__4532__auto___12870]));

var G__12871 = (i__4532__auto___12870 + (1));
i__4532__auto___12870 = G__12871;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.call(null,cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count.call(null,more)));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.average.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.average.cljs$lang$applyTo = (function (seq12866){
var G__12867 = cljs.core.first.call(null,seq12866);
var seq12866__$1 = cljs.core.next.call(null,seq12866);
var G__12868 = cljs.core.first.call(null,seq12866__$1);
var seq12866__$2 = cljs.core.next.call(null,seq12866__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12867,G__12868,seq12866__$2);
});

/**
 * All the ways to take one item from each sequence.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.cartesian_product = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$cartesian_product(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12873 = arguments.length;
var i__4532__auto___12874 = (0);
while(true){
if((i__4532__auto___12874 < len__4531__auto___12873)){
args__4534__auto__.push((arguments[i__4532__auto___12874]));

var G__12875 = (i__4532__auto___12874 + (1));
i__4532__auto___12874 = G__12875;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec.call(null,seqs);
var step = ((function (v_original_seqs){
return (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count.call(null,v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
var temp__5455__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));
if(temp__5455__auto__){
var rst = temp__5455__auto__;
return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else {
var G__12876 = (i - (1));
var G__12877 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__12876;
v_seqs__$2 = G__12877;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step.call(null,v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.cartesian_product.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.cartesian_product.cljs$lang$applyTo = (function (seq12872){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12872));
});


//# sourceMappingURL=util.js.map
