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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__12009){
var vec__12010 = p__12009;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12010,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12010,(1),null);
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
var vec__12013 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12013,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12013,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12013,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__12017 = arguments.length;
switch (G__12017) {
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

var G__12019_12043 = clojure.data.equality_partition;
var G__12020_12044 = "null";
var G__12021_12045 = ((function (G__12019_12043,G__12020_12044){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12019_12043,G__12020_12044))
;
goog.object.set(G__12019_12043,G__12020_12044,G__12021_12045);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__12022_12046 = clojure.data.equality_partition;
var G__12023_12047 = "string";
var G__12024_12048 = ((function (G__12022_12046,G__12023_12047){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12022_12046,G__12023_12047))
;
goog.object.set(G__12022_12046,G__12023_12047,G__12024_12048);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__12025_12049 = clojure.data.equality_partition;
var G__12026_12050 = "number";
var G__12027_12051 = ((function (G__12025_12049,G__12026_12050){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12025_12049,G__12026_12050))
;
goog.object.set(G__12025_12049,G__12026_12050,G__12027_12051);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__12028_12052 = clojure.data.equality_partition;
var G__12029_12053 = "array";
var G__12030_12054 = ((function (G__12028_12052,G__12029_12053){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__12028_12052,G__12029_12053))
;
goog.object.set(G__12028_12052,G__12029_12053,G__12030_12054);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__12031_12055 = clojure.data.equality_partition;
var G__12032_12056 = "function";
var G__12033_12057 = ((function (G__12031_12055,G__12032_12056){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12031_12055,G__12032_12056))
;
goog.object.set(G__12031_12055,G__12032_12056,G__12033_12057);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__12034_12058 = clojure.data.equality_partition;
var G__12035_12059 = "boolean";
var G__12036_12060 = ((function (G__12034_12058,G__12035_12059){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12034_12058,G__12035_12059))
;
goog.object.set(G__12034_12058,G__12035_12059,G__12036_12060);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__12037_12061 = clojure.data.equality_partition;
var G__12038_12062 = "_";
var G__12039_12063 = ((function (G__12037_12061,G__12038_12062){
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
});})(G__12037_12061,G__12038_12062))
;
goog.object.set(G__12037_12061,G__12038_12062,G__12039_12063);
goog.object.set(clojure.data.Diff,"null",true);

var G__12064_12088 = clojure.data.diff_similar;
var G__12065_12089 = "null";
var G__12066_12090 = ((function (G__12064_12088,G__12065_12089){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12064_12088,G__12065_12089))
;
goog.object.set(G__12064_12088,G__12065_12089,G__12066_12090);

goog.object.set(clojure.data.Diff,"string",true);

var G__12067_12091 = clojure.data.diff_similar;
var G__12068_12092 = "string";
var G__12069_12093 = ((function (G__12067_12091,G__12068_12092){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12067_12091,G__12068_12092))
;
goog.object.set(G__12067_12091,G__12068_12092,G__12069_12093);

goog.object.set(clojure.data.Diff,"number",true);

var G__12070_12094 = clojure.data.diff_similar;
var G__12071_12095 = "number";
var G__12072_12096 = ((function (G__12070_12094,G__12071_12095){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12070_12094,G__12071_12095))
;
goog.object.set(G__12070_12094,G__12071_12095,G__12072_12096);

goog.object.set(clojure.data.Diff,"array",true);

var G__12073_12097 = clojure.data.diff_similar;
var G__12074_12098 = "array";
var G__12075_12099 = ((function (G__12073_12097,G__12074_12098){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__12073_12097,G__12074_12098))
;
goog.object.set(G__12073_12097,G__12074_12098,G__12075_12099);

goog.object.set(clojure.data.Diff,"function",true);

var G__12076_12100 = clojure.data.diff_similar;
var G__12077_12101 = "function";
var G__12078_12102 = ((function (G__12076_12100,G__12077_12101){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12076_12100,G__12077_12101))
;
goog.object.set(G__12076_12100,G__12077_12101,G__12078_12102);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__12079_12103 = clojure.data.diff_similar;
var G__12080_12104 = "boolean";
var G__12081_12105 = ((function (G__12079_12103,G__12080_12104){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12079_12103,G__12080_12104))
;
goog.object.set(G__12079_12103,G__12080_12104,G__12081_12105);

goog.object.set(clojure.data.Diff,"_",true);

var G__12082_12106 = clojure.data.diff_similar;
var G__12083_12107 = "_";
var G__12084_12108 = ((function (G__12082_12106,G__12083_12107){
return (function (a,b){
var fexpr__12086 = (function (){var G__12087 = clojure.data.equality_partition(a);
var G__12087__$1 = (((G__12087 instanceof cljs.core.Keyword))?G__12087.fqn:null);
switch (G__12087__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12087__$1)].join('')));

}
})();
return (fexpr__12086.cljs$core$IFn$_invoke$arity$2 ? fexpr__12086.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__12086.call(null,a,b));
});})(G__12082_12106,G__12083_12107))
;
goog.object.set(G__12082_12106,G__12083_12107,G__12084_12108);
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
