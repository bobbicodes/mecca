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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__12151){
var vec__12152 = p__12151;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12152,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12152,(1),null);
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
var vec__12155 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12155,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12155,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12155,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__12159 = arguments.length;
switch (G__12159) {
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

var G__12161_12185 = clojure.data.equality_partition;
var G__12162_12186 = "null";
var G__12163_12187 = ((function (G__12161_12185,G__12162_12186){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12161_12185,G__12162_12186))
;
goog.object.set(G__12161_12185,G__12162_12186,G__12163_12187);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__12164_12188 = clojure.data.equality_partition;
var G__12165_12189 = "string";
var G__12166_12190 = ((function (G__12164_12188,G__12165_12189){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12164_12188,G__12165_12189))
;
goog.object.set(G__12164_12188,G__12165_12189,G__12166_12190);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__12167_12191 = clojure.data.equality_partition;
var G__12168_12192 = "number";
var G__12169_12193 = ((function (G__12167_12191,G__12168_12192){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12167_12191,G__12168_12192))
;
goog.object.set(G__12167_12191,G__12168_12192,G__12169_12193);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__12170_12194 = clojure.data.equality_partition;
var G__12171_12195 = "array";
var G__12172_12196 = ((function (G__12170_12194,G__12171_12195){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__12170_12194,G__12171_12195))
;
goog.object.set(G__12170_12194,G__12171_12195,G__12172_12196);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__12173_12197 = clojure.data.equality_partition;
var G__12174_12198 = "function";
var G__12175_12199 = ((function (G__12173_12197,G__12174_12198){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12173_12197,G__12174_12198))
;
goog.object.set(G__12173_12197,G__12174_12198,G__12175_12199);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__12176_12200 = clojure.data.equality_partition;
var G__12177_12201 = "boolean";
var G__12178_12202 = ((function (G__12176_12200,G__12177_12201){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12176_12200,G__12177_12201))
;
goog.object.set(G__12176_12200,G__12177_12201,G__12178_12202);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__12179_12203 = clojure.data.equality_partition;
var G__12180_12204 = "_";
var G__12181_12205 = ((function (G__12179_12203,G__12180_12204){
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
});})(G__12179_12203,G__12180_12204))
;
goog.object.set(G__12179_12203,G__12180_12204,G__12181_12205);
goog.object.set(clojure.data.Diff,"null",true);

var G__12206_12230 = clojure.data.diff_similar;
var G__12207_12231 = "null";
var G__12208_12232 = ((function (G__12206_12230,G__12207_12231){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12206_12230,G__12207_12231))
;
goog.object.set(G__12206_12230,G__12207_12231,G__12208_12232);

goog.object.set(clojure.data.Diff,"string",true);

var G__12209_12233 = clojure.data.diff_similar;
var G__12210_12234 = "string";
var G__12211_12235 = ((function (G__12209_12233,G__12210_12234){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12209_12233,G__12210_12234))
;
goog.object.set(G__12209_12233,G__12210_12234,G__12211_12235);

goog.object.set(clojure.data.Diff,"number",true);

var G__12212_12236 = clojure.data.diff_similar;
var G__12213_12237 = "number";
var G__12214_12238 = ((function (G__12212_12236,G__12213_12237){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12212_12236,G__12213_12237))
;
goog.object.set(G__12212_12236,G__12213_12237,G__12214_12238);

goog.object.set(clojure.data.Diff,"array",true);

var G__12215_12239 = clojure.data.diff_similar;
var G__12216_12240 = "array";
var G__12217_12241 = ((function (G__12215_12239,G__12216_12240){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__12215_12239,G__12216_12240))
;
goog.object.set(G__12215_12239,G__12216_12240,G__12217_12241);

goog.object.set(clojure.data.Diff,"function",true);

var G__12218_12242 = clojure.data.diff_similar;
var G__12219_12243 = "function";
var G__12220_12244 = ((function (G__12218_12242,G__12219_12243){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12218_12242,G__12219_12243))
;
goog.object.set(G__12218_12242,G__12219_12243,G__12220_12244);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__12221_12245 = clojure.data.diff_similar;
var G__12222_12246 = "boolean";
var G__12223_12247 = ((function (G__12221_12245,G__12222_12246){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12221_12245,G__12222_12246))
;
goog.object.set(G__12221_12245,G__12222_12246,G__12223_12247);

goog.object.set(clojure.data.Diff,"_",true);

var G__12224_12248 = clojure.data.diff_similar;
var G__12225_12249 = "_";
var G__12226_12250 = ((function (G__12224_12248,G__12225_12249){
return (function (a,b){
var fexpr__12228 = (function (){var G__12229 = clojure.data.equality_partition(a);
var G__12229__$1 = (((G__12229 instanceof cljs.core.Keyword))?G__12229.fqn:null);
switch (G__12229__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12229__$1)].join('')));

}
})();
return (fexpr__12228.cljs$core$IFn$_invoke$arity$2 ? fexpr__12228.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__12228.call(null,a,b));
});})(G__12224_12248,G__12225_12249))
;
goog.object.set(G__12224_12248,G__12225_12249,G__12226_12250);
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
