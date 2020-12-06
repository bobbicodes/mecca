goog.provide('clojure.data');
goog.require('cljs.core');
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__37569){
var vec__37570 = p__37569;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37570,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37570,(1),null);
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
var vec__37573 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37573,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37573,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37573,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__37578 = arguments.length;
switch (G__37578) {
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

(clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
}));

(clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
}));

(clojure.data.diff_associative.cljs$lang$maxFixedArity = 3);

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4273__auto__ = cljs.core.count(a);
var y__4274__auto__ = cljs.core.count(b);
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
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
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4487__auto__ = (((x == null))?null:x);
var m__4488__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4488__auto__.call(null,x));
} else {
var m__4485__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4485__auto__.call(null,x));
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
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4487__auto__ = (((a == null))?null:a);
var m__4488__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4488__auto__.call(null,a,b));
} else {
var m__4485__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4485__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__37786_37849 = clojure.data.equality_partition;
var G__37787_37850 = "null";
var G__37788_37851 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__37786_37849,G__37787_37850,G__37788_37851);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__37789_37852 = clojure.data.equality_partition;
var G__37790_37853 = "string";
var G__37791_37854 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__37789_37852,G__37790_37853,G__37791_37854);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__37792_37855 = clojure.data.equality_partition;
var G__37793_37856 = "number";
var G__37794_37857 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__37792_37855,G__37793_37856,G__37794_37857);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__37795_37858 = clojure.data.equality_partition;
var G__37796_37859 = "array";
var G__37797_37860 = (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});
goog.object.set(G__37795_37858,G__37796_37859,G__37797_37860);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__37798_37861 = clojure.data.equality_partition;
var G__37799_37862 = "function";
var G__37800_37863 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__37798_37861,G__37799_37862,G__37800_37863);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__37801_37864 = clojure.data.equality_partition;
var G__37802_37865 = "boolean";
var G__37803_37866 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__37801_37864,G__37802_37865,G__37803_37866);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__37804_37867 = clojure.data.equality_partition;
var G__37805_37868 = "_";
var G__37806_37869 = (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});
goog.object.set(G__37804_37867,G__37805_37868,G__37806_37869);
goog.object.set(clojure.data.Diff,"null",true);

var G__37810_37870 = clojure.data.diff_similar;
var G__37811_37871 = "null";
var G__37812_37872 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__37810_37870,G__37811_37871,G__37812_37872);

goog.object.set(clojure.data.Diff,"string",true);

var G__37813_37873 = clojure.data.diff_similar;
var G__37814_37874 = "string";
var G__37815_37875 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__37813_37873,G__37814_37874,G__37815_37875);

goog.object.set(clojure.data.Diff,"number",true);

var G__37816_37876 = clojure.data.diff_similar;
var G__37817_37877 = "number";
var G__37818_37878 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__37816_37876,G__37817_37877,G__37818_37878);

goog.object.set(clojure.data.Diff,"array",true);

var G__37819_37879 = clojure.data.diff_similar;
var G__37820_37880 = "array";
var G__37821_37881 = (function (a,b){
return clojure.data.diff_sequential(a,b);
});
goog.object.set(G__37819_37879,G__37820_37880,G__37821_37881);

goog.object.set(clojure.data.Diff,"function",true);

var G__37822_37882 = clojure.data.diff_similar;
var G__37823_37883 = "function";
var G__37824_37884 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__37822_37882,G__37823_37883,G__37824_37884);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__37825_37885 = clojure.data.diff_similar;
var G__37826_37886 = "boolean";
var G__37827_37887 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__37825_37885,G__37826_37886,G__37827_37887);

goog.object.set(clojure.data.Diff,"_",true);

var G__37828_37888 = clojure.data.diff_similar;
var G__37829_37889 = "_";
var G__37830_37890 = (function (a,b){
var fexpr__37832 = (function (){var G__37833 = clojure.data.equality_partition(a);
var G__37833__$1 = (((G__37833 instanceof cljs.core.Keyword))?G__37833.fqn:null);
switch (G__37833__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37833__$1)].join('')));

}
})();
return (fexpr__37832.cljs$core$IFn$_invoke$arity$2 ? fexpr__37832.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__37832.call(null,a,b));
});
goog.object.set(G__37828_37888,G__37829_37889,G__37830_37890);
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

//# sourceMappingURL=clojure.data.js.map
