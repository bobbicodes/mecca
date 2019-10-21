// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__15393){
var vec__15394 = p__15393;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15394,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15394,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__15397 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15397,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15397,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15397,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__15401 = arguments.length;
switch (G__15401) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4037__auto__ = cljs.core.count(a);
var y__4038__auto__ = cljs.core.count(b);
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if(((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4243__auto__ = (((x == null))?null:x);
var m__4244__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto__.call(null,x));
} else {
var m__4244__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if(((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4243__auto__ = (((a == null))?null:a);
var m__4244__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto__.call(null,a,b));
} else {
var m__4244__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__15403_15427 = clojure.data.equality_partition;
var G__15404_15428 = "null";
var G__15405_15429 = ((function (G__15403_15427,G__15404_15428){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__15403_15427,G__15404_15428))
;
goog.object.set(G__15403_15427,G__15404_15428,G__15405_15429);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__15406_15430 = clojure.data.equality_partition;
var G__15407_15431 = "string";
var G__15408_15432 = ((function (G__15406_15430,G__15407_15431){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__15406_15430,G__15407_15431))
;
goog.object.set(G__15406_15430,G__15407_15431,G__15408_15432);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__15409_15433 = clojure.data.equality_partition;
var G__15410_15434 = "number";
var G__15411_15435 = ((function (G__15409_15433,G__15410_15434){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__15409_15433,G__15410_15434))
;
goog.object.set(G__15409_15433,G__15410_15434,G__15411_15435);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__15412_15436 = clojure.data.equality_partition;
var G__15413_15437 = "array";
var G__15414_15438 = ((function (G__15412_15436,G__15413_15437){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__15412_15436,G__15413_15437))
;
goog.object.set(G__15412_15436,G__15413_15437,G__15414_15438);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__15415_15439 = clojure.data.equality_partition;
var G__15416_15440 = "function";
var G__15417_15441 = ((function (G__15415_15439,G__15416_15440){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__15415_15439,G__15416_15440))
;
goog.object.set(G__15415_15439,G__15416_15440,G__15417_15441);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__15418_15442 = clojure.data.equality_partition;
var G__15419_15443 = "boolean";
var G__15420_15444 = ((function (G__15418_15442,G__15419_15443){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__15418_15442,G__15419_15443))
;
goog.object.set(G__15418_15442,G__15419_15443,G__15420_15444);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__15421_15445 = clojure.data.equality_partition;
var G__15422_15446 = "_";
var G__15423_15447 = ((function (G__15421_15445,G__15422_15446){
return (function (x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__15421_15445,G__15422_15446))
;
goog.object.set(G__15421_15445,G__15422_15446,G__15423_15447);
goog.object.set(clojure.data.Diff,"null",true);

var G__15448_15472 = clojure.data.diff_similar;
var G__15449_15473 = "null";
var G__15450_15474 = ((function (G__15448_15472,G__15449_15473){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__15448_15472,G__15449_15473))
;
goog.object.set(G__15448_15472,G__15449_15473,G__15450_15474);

goog.object.set(clojure.data.Diff,"string",true);

var G__15451_15475 = clojure.data.diff_similar;
var G__15452_15476 = "string";
var G__15453_15477 = ((function (G__15451_15475,G__15452_15476){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__15451_15475,G__15452_15476))
;
goog.object.set(G__15451_15475,G__15452_15476,G__15453_15477);

goog.object.set(clojure.data.Diff,"number",true);

var G__15454_15478 = clojure.data.diff_similar;
var G__15455_15479 = "number";
var G__15456_15480 = ((function (G__15454_15478,G__15455_15479){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__15454_15478,G__15455_15479))
;
goog.object.set(G__15454_15478,G__15455_15479,G__15456_15480);

goog.object.set(clojure.data.Diff,"array",true);

var G__15457_15481 = clojure.data.diff_similar;
var G__15458_15482 = "array";
var G__15459_15483 = ((function (G__15457_15481,G__15458_15482){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__15457_15481,G__15458_15482))
;
goog.object.set(G__15457_15481,G__15458_15482,G__15459_15483);

goog.object.set(clojure.data.Diff,"function",true);

var G__15460_15484 = clojure.data.diff_similar;
var G__15461_15485 = "function";
var G__15462_15486 = ((function (G__15460_15484,G__15461_15485){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__15460_15484,G__15461_15485))
;
goog.object.set(G__15460_15484,G__15461_15485,G__15462_15486);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__15463_15487 = clojure.data.diff_similar;
var G__15464_15488 = "boolean";
var G__15465_15489 = ((function (G__15463_15487,G__15464_15488){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__15463_15487,G__15464_15488))
;
goog.object.set(G__15463_15487,G__15464_15488,G__15465_15489);

goog.object.set(clojure.data.Diff,"_",true);

var G__15466_15490 = clojure.data.diff_similar;
var G__15467_15491 = "_";
var G__15468_15492 = ((function (G__15466_15490,G__15467_15491){
return (function (a,b){
var fexpr__15470 = (function (){var G__15471 = clojure.data.equality_partition(a);
var G__15471__$1 = (((G__15471 instanceof cljs.core.Keyword))?G__15471.fqn:null);
switch (G__15471__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15471__$1)].join('')));

}
})();
return (fexpr__15470.cljs$core$IFn$_invoke$arity$2 ? fexpr__15470.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__15470.call(null,a,b));
});})(G__15466_15490,G__15467_15491))
;
goog.object.set(G__15466_15490,G__15467_15491,G__15468_15492);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
