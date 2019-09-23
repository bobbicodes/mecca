// Compiled by ClojureScript 1.10.339 {}
goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.core');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.core.css = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$core$css(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15370 = arguments.length;
var i__4532__auto___15371 = (0);
while(true){
if((i__4532__auto___15371 < len__4531__auto___15370)){
args__4534__auto__.push((arguments[i__4532__auto___15371]));

var G__15372 = (i__4532__auto___15371 + (1));
i__4532__auto___15371 = G__15372;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.compile_css,rules);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.core.css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.core.css.cljs$lang$applyTo = (function (seq15369){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15369));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.core.style = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$core$style(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15374 = arguments.length;
var i__4532__auto___15375 = (0);
while(true){
if((i__4532__auto___15375 < len__4531__auto___15374)){
args__4534__auto__.push((arguments[i__4532__auto___15375]));

var G__15376 = (i__4532__auto___15375 + (1));
i__4532__auto___15375 = G__15376;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.compiler.compile_style.call(null,maps);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.core.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.core.style.cljs$lang$applyTo = (function (seq15373){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15373));
});


//# sourceMappingURL=core.js.map
