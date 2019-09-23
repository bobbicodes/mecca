// Compiled by ClojureScript 1.10.339 {}
goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$rule(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15433 = arguments.length;
var i__4532__auto___15434 = (0);
while(true){
if((i__4532__auto___15434 < len__4531__auto___15433)){
args__4534__auto__.push((arguments[i__4532__auto___15434]));

var G__15435 = (i__4532__auto___15434 + (1));
i__4532__auto___15434 = G__15435;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if(!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol))))){
throw cljs.core.ex_info.call(null,"Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__15436__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__15436 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__15437__i = 0, G__15437__a = new Array(arguments.length -  0);
while (G__15437__i < G__15437__a.length) {G__15437__a[G__15437__i] = arguments[G__15437__i + 0]; ++G__15437__i;}
  children = new cljs.core.IndexedSeq(G__15437__a,0,null);
} 
return G__15436__delegate.call(this,children);};
G__15436.cljs$lang$maxFixedArity = 0;
G__15436.cljs$lang$applyTo = (function (arglist__15438){
var children = cljs.core.seq(arglist__15438);
return G__15436__delegate(children);
});
G__15436.cljs$core$IFn$_invoke$arity$variadic = G__15436__delegate;
return G__15436;
})()
;
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rule.cljs$lang$applyTo = (function (seq15431){
var G__15432 = cljs.core.first.call(null,seq15431);
var seq15431__$1 = cljs.core.next.call(null,seq15431);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15432,seq15431__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.cssfn = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__15439__delegate = function (args){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__15439 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15440__i = 0, G__15440__a = new Array(arguments.length -  0);
while (G__15440__i < G__15440__a.length) {G__15440__a[G__15440__i] = arguments[G__15440__i + 0]; ++G__15440__i;}
  args = new cljs.core.IndexedSeq(G__15440__a,0,null);
} 
return G__15439__delegate.call(this,args);};
G__15439.cljs$lang$maxFixedArity = 0;
G__15439.cljs$lang$applyTo = (function (arglist__15441){
var args = cljs.core.seq(arglist__15441);
return G__15439__delegate(args);
});
G__15439.cljs$core$IFn$_invoke$arity$variadic = G__15439__delegate;
return G__15439;
})()
;
});
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_rule(identifier,value){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_font_face = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_font_face(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15443 = arguments.length;
var i__4532__auto___15444 = (0);
while(true){
if((i__4532__auto___15444 < len__4531__auto___15443)){
args__4534__auto__.push((arguments[i__4532__auto___15444]));

var G__15445 = (i__4532__auto___15444 + (1));
i__4532__auto___15444 = G__15445;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq15442){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15442));
});

/**
 * Create a CSS @import rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_import(var_args){
var G__15449 = arguments.length;
switch (G__15449) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___15451 = arguments.length;
var i__4532__auto___15452 = (0);
while(true){
if((i__4532__auto___15452 < len__4531__auto___15451)){
args_arr__4546__auto__.push((arguments[i__4532__auto___15452]));

var G__15453 = (i__4532__auto___15452 + (1));
i__4532__auto___15452 = G__15453;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((1)),(0),null));
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4547__auto__);

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
});

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq15447){
var G__15448 = cljs.core.first.call(null,seq15447);
var seq15447__$1 = cljs.core.next.call(null,seq15447);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15448,seq15447__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_media = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_media(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15456 = arguments.length;
var i__4532__auto___15457 = (0);
while(true){
if((i__4532__auto___15457 < len__4531__auto___15456)){
args__4534__auto__.push((arguments[i__4532__auto___15457]));

var G__15458 = (i__4532__auto___15457 + (1));
i__4532__auto___15457 = G__15458;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq15454){
var G__15455 = cljs.core.first.call(null,seq15454);
var seq15454__$1 = cljs.core.next.call(null,seq15454);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15455,seq15454__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_supports = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_supports(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15461 = arguments.length;
var i__4532__auto___15462 = (0);
while(true){
if((i__4532__auto___15462 < len__4531__auto___15461)){
args__4534__auto__.push((arguments[i__4532__auto___15462]));

var G__15463 = (i__4532__auto___15462 + (1));
i__4532__auto___15462 = G__15463;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq15459){
var G__15460 = cljs.core.first.call(null,seq15459);
var seq15459__$1 = cljs.core.next.call(null,seq15459);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15460,seq15459__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_keyframes = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_keyframes(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15466 = arguments.length;
var i__4532__auto___15467 = (0);
while(true){
if((i__4532__auto___15467 < len__4531__auto___15466)){
args__4534__auto__.push((arguments[i__4532__auto___15467]));

var G__15468 = (i__4532__auto___15467 + (1));
i__4532__auto___15467 = G__15468;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq15464){
var G__15465 = cljs.core.first.call(null,seq15464);
var seq15464__$1 = cljs.core.next.call(null,seq15464);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15465,seq15464__$1);
});

/**
 * Create a color from RGB values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$rgb(r,g,b){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.hsl = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$hsl(h,s,l){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=stylesheet.js.map
