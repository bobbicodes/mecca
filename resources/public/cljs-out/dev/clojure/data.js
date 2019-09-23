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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__12002){
var vec__12003 = p__12002;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12003,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12003,(1),null);
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
var vec__12006 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12006,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12006,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12006,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__12010 = arguments.length;
switch (G__12010) {
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

var G__12012_12036 = clojure.data.equality_partition;
var G__12013_12037 = "null";
var G__12014_12038 = ((function (G__12012_12036,G__12013_12037){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12012_12036,G__12013_12037))
;
goog.object.set(G__12012_12036,G__12013_12037,G__12014_12038);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__12015_12039 = clojure.data.equality_partition;
var G__12016_12040 = "string";
var G__12017_12041 = ((function (G__12015_12039,G__12016_12040){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12015_12039,G__12016_12040))
;
goog.object.set(G__12015_12039,G__12016_12040,G__12017_12041);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__12018_12042 = clojure.data.equality_partition;
var G__12019_12043 = "number";
var G__12020_12044 = ((function (G__12018_12042,G__12019_12043){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12018_12042,G__12019_12043))
;
goog.object.set(G__12018_12042,G__12019_12043,G__12020_12044);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__12021_12045 = clojure.data.equality_partition;
var G__12022_12046 = "array";
var G__12023_12047 = ((function (G__12021_12045,G__12022_12046){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__12021_12045,G__12022_12046))
;
goog.object.set(G__12021_12045,G__12022_12046,G__12023_12047);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__12024_12048 = clojure.data.equality_partition;
var G__12025_12049 = "function";
var G__12026_12050 = ((function (G__12024_12048,G__12025_12049){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12024_12048,G__12025_12049))
;
goog.object.set(G__12024_12048,G__12025_12049,G__12026_12050);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__12027_12051 = clojure.data.equality_partition;
var G__12028_12052 = "boolean";
var G__12029_12053 = ((function (G__12027_12051,G__12028_12052){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12027_12051,G__12028_12052))
;
goog.object.set(G__12027_12051,G__12028_12052,G__12029_12053);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__12030_12054 = clojure.data.equality_partition;
var G__12031_12055 = "_";
var G__12032_12056 = ((function (G__12030_12054,G__12031_12055){
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
});})(G__12030_12054,G__12031_12055))
;
goog.object.set(G__12030_12054,G__12031_12055,G__12032_12056);
goog.object.set(clojure.data.Diff,"null",true);

var G__12057_12081 = clojure.data.diff_similar;
var G__12058_12082 = "null";
var G__12059_12083 = ((function (G__12057_12081,G__12058_12082){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12057_12081,G__12058_12082))
;
goog.object.set(G__12057_12081,G__12058_12082,G__12059_12083);

goog.object.set(clojure.data.Diff,"string",true);

var G__12060_12084 = clojure.data.diff_similar;
var G__12061_12085 = "string";
var G__12062_12086 = ((function (G__12060_12084,G__12061_12085){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12060_12084,G__12061_12085))
;
goog.object.set(G__12060_12084,G__12061_12085,G__12062_12086);

goog.object.set(clojure.data.Diff,"number",true);

var G__12063_12087 = clojure.data.diff_similar;
var G__12064_12088 = "number";
var G__12065_12089 = ((function (G__12063_12087,G__12064_12088){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12063_12087,G__12064_12088))
;
goog.object.set(G__12063_12087,G__12064_12088,G__12065_12089);

goog.object.set(clojure.data.Diff,"array",true);

var G__12066_12090 = clojure.data.diff_similar;
var G__12067_12091 = "array";
var G__12068_12092 = ((function (G__12066_12090,G__12067_12091){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__12066_12090,G__12067_12091))
;
goog.object.set(G__12066_12090,G__12067_12091,G__12068_12092);

goog.object.set(clojure.data.Diff,"function",true);

var G__12069_12093 = clojure.data.diff_similar;
var G__12070_12094 = "function";
var G__12071_12095 = ((function (G__12069_12093,G__12070_12094){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12069_12093,G__12070_12094))
;
goog.object.set(G__12069_12093,G__12070_12094,G__12071_12095);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__12072_12096 = clojure.data.diff_similar;
var G__12073_12097 = "boolean";
var G__12074_12098 = ((function (G__12072_12096,G__12073_12097){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12072_12096,G__12073_12097))
;
goog.object.set(G__12072_12096,G__12073_12097,G__12074_12098);

goog.object.set(clojure.data.Diff,"_",true);

var G__12075_12099 = clojure.data.diff_similar;
var G__12076_12100 = "_";
var G__12077_12101 = ((function (G__12075_12099,G__12076_12100){
return (function (a,b){
var fexpr__12079 = (function (){var G__12080 = clojure.data.equality_partition(a);
var G__12080__$1 = (((G__12080 instanceof cljs.core.Keyword))?G__12080.fqn:null);
switch (G__12080__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12080__$1)].join('')));

}
})();
return (fexpr__12079.cljs$core$IFn$_invoke$arity$2 ? fexpr__12079.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__12079.call(null,a,b));
});})(G__12075_12099,G__12076_12100))
;
goog.object.set(G__12075_12099,G__12076_12100,G__12077_12101);
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
