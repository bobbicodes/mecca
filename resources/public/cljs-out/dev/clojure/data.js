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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__12326){
var vec__12327 = p__12326;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12327,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12327,(1),null);
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
var vec__12330 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12330,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12330,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12330,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__12334 = arguments.length;
switch (G__12334) {
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

var G__12336_12360 = clojure.data.equality_partition;
var G__12337_12361 = "null";
var G__12338_12362 = ((function (G__12336_12360,G__12337_12361){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12336_12360,G__12337_12361))
;
goog.object.set(G__12336_12360,G__12337_12361,G__12338_12362);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__12339_12363 = clojure.data.equality_partition;
var G__12340_12364 = "string";
var G__12341_12365 = ((function (G__12339_12363,G__12340_12364){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12339_12363,G__12340_12364))
;
goog.object.set(G__12339_12363,G__12340_12364,G__12341_12365);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__12342_12366 = clojure.data.equality_partition;
var G__12343_12367 = "number";
var G__12344_12368 = ((function (G__12342_12366,G__12343_12367){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12342_12366,G__12343_12367))
;
goog.object.set(G__12342_12366,G__12343_12367,G__12344_12368);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__12345_12369 = clojure.data.equality_partition;
var G__12346_12370 = "array";
var G__12347_12371 = ((function (G__12345_12369,G__12346_12370){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__12345_12369,G__12346_12370))
;
goog.object.set(G__12345_12369,G__12346_12370,G__12347_12371);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__12348_12372 = clojure.data.equality_partition;
var G__12349_12373 = "function";
var G__12350_12374 = ((function (G__12348_12372,G__12349_12373){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12348_12372,G__12349_12373))
;
goog.object.set(G__12348_12372,G__12349_12373,G__12350_12374);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__12351_12375 = clojure.data.equality_partition;
var G__12352_12376 = "boolean";
var G__12353_12377 = ((function (G__12351_12375,G__12352_12376){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__12351_12375,G__12352_12376))
;
goog.object.set(G__12351_12375,G__12352_12376,G__12353_12377);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__12354_12378 = clojure.data.equality_partition;
var G__12355_12379 = "_";
var G__12356_12380 = ((function (G__12354_12378,G__12355_12379){
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
});})(G__12354_12378,G__12355_12379))
;
goog.object.set(G__12354_12378,G__12355_12379,G__12356_12380);
goog.object.set(clojure.data.Diff,"null",true);

var G__12381_12405 = clojure.data.diff_similar;
var G__12382_12406 = "null";
var G__12383_12407 = ((function (G__12381_12405,G__12382_12406){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12381_12405,G__12382_12406))
;
goog.object.set(G__12381_12405,G__12382_12406,G__12383_12407);

goog.object.set(clojure.data.Diff,"string",true);

var G__12384_12408 = clojure.data.diff_similar;
var G__12385_12409 = "string";
var G__12386_12410 = ((function (G__12384_12408,G__12385_12409){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12384_12408,G__12385_12409))
;
goog.object.set(G__12384_12408,G__12385_12409,G__12386_12410);

goog.object.set(clojure.data.Diff,"number",true);

var G__12387_12411 = clojure.data.diff_similar;
var G__12388_12412 = "number";
var G__12389_12413 = ((function (G__12387_12411,G__12388_12412){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12387_12411,G__12388_12412))
;
goog.object.set(G__12387_12411,G__12388_12412,G__12389_12413);

goog.object.set(clojure.data.Diff,"array",true);

var G__12390_12414 = clojure.data.diff_similar;
var G__12391_12415 = "array";
var G__12392_12416 = ((function (G__12390_12414,G__12391_12415){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__12390_12414,G__12391_12415))
;
goog.object.set(G__12390_12414,G__12391_12415,G__12392_12416);

goog.object.set(clojure.data.Diff,"function",true);

var G__12393_12417 = clojure.data.diff_similar;
var G__12394_12418 = "function";
var G__12395_12419 = ((function (G__12393_12417,G__12394_12418){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12393_12417,G__12394_12418))
;
goog.object.set(G__12393_12417,G__12394_12418,G__12395_12419);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__12396_12420 = clojure.data.diff_similar;
var G__12397_12421 = "boolean";
var G__12398_12422 = ((function (G__12396_12420,G__12397_12421){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__12396_12420,G__12397_12421))
;
goog.object.set(G__12396_12420,G__12397_12421,G__12398_12422);

goog.object.set(clojure.data.Diff,"_",true);

var G__12399_12423 = clojure.data.diff_similar;
var G__12400_12424 = "_";
var G__12401_12425 = ((function (G__12399_12423,G__12400_12424){
return (function (a,b){
var fexpr__12403 = (function (){var G__12404 = clojure.data.equality_partition(a);
var G__12404__$1 = (((G__12404 instanceof cljs.core.Keyword))?G__12404.fqn:null);
switch (G__12404__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12404__$1)].join('')));

}
})();
return (fexpr__12403.cljs$core$IFn$_invoke$arity$2 ? fexpr__12403.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__12403.call(null,a,b));
});})(G__12399_12423,G__12400_12424))
;
goog.object.set(G__12399_12423,G__12400_12424,G__12401_12425);
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
