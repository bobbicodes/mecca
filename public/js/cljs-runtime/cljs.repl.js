goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40072){
var map__40073 = p__40072;
var map__40073__$1 = (((((!((map__40073 == null))))?(((((map__40073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40073):map__40073);
var m = map__40073__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40073__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40073__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40077_40284 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40078_40285 = null;
var count__40079_40286 = (0);
var i__40080_40287 = (0);
while(true){
if((i__40080_40287 < count__40079_40286)){
var f_40288 = chunk__40078_40285.cljs$core$IIndexed$_nth$arity$2(null,i__40080_40287);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40288], 0));


var G__40289 = seq__40077_40284;
var G__40290 = chunk__40078_40285;
var G__40291 = count__40079_40286;
var G__40292 = (i__40080_40287 + (1));
seq__40077_40284 = G__40289;
chunk__40078_40285 = G__40290;
count__40079_40286 = G__40291;
i__40080_40287 = G__40292;
continue;
} else {
var temp__5735__auto___40293 = cljs.core.seq(seq__40077_40284);
if(temp__5735__auto___40293){
var seq__40077_40294__$1 = temp__5735__auto___40293;
if(cljs.core.chunked_seq_QMARK_(seq__40077_40294__$1)){
var c__4609__auto___40295 = cljs.core.chunk_first(seq__40077_40294__$1);
var G__40296 = cljs.core.chunk_rest(seq__40077_40294__$1);
var G__40297 = c__4609__auto___40295;
var G__40298 = cljs.core.count(c__4609__auto___40295);
var G__40299 = (0);
seq__40077_40284 = G__40296;
chunk__40078_40285 = G__40297;
count__40079_40286 = G__40298;
i__40080_40287 = G__40299;
continue;
} else {
var f_40300 = cljs.core.first(seq__40077_40294__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40300], 0));


var G__40301 = cljs.core.next(seq__40077_40294__$1);
var G__40302 = null;
var G__40303 = (0);
var G__40304 = (0);
seq__40077_40284 = G__40301;
chunk__40078_40285 = G__40302;
count__40079_40286 = G__40303;
i__40080_40287 = G__40304;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40305 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_40305], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_40305)))?cljs.core.second(arglists_40305):arglists_40305)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40088_40306 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40089_40307 = null;
var count__40090_40308 = (0);
var i__40091_40309 = (0);
while(true){
if((i__40091_40309 < count__40090_40308)){
var vec__40104_40310 = chunk__40089_40307.cljs$core$IIndexed$_nth$arity$2(null,i__40091_40309);
var name_40311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40104_40310,(0),null);
var map__40107_40312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40104_40310,(1),null);
var map__40107_40313__$1 = (((((!((map__40107_40312 == null))))?(((((map__40107_40312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40107_40312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40107_40312):map__40107_40312);
var doc_40314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40107_40313__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40107_40313__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40311], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40315], 0));

if(cljs.core.truth_(doc_40314)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40314], 0));
} else {
}


var G__40316 = seq__40088_40306;
var G__40317 = chunk__40089_40307;
var G__40318 = count__40090_40308;
var G__40319 = (i__40091_40309 + (1));
seq__40088_40306 = G__40316;
chunk__40089_40307 = G__40317;
count__40090_40308 = G__40318;
i__40091_40309 = G__40319;
continue;
} else {
var temp__5735__auto___40320 = cljs.core.seq(seq__40088_40306);
if(temp__5735__auto___40320){
var seq__40088_40321__$1 = temp__5735__auto___40320;
if(cljs.core.chunked_seq_QMARK_(seq__40088_40321__$1)){
var c__4609__auto___40322 = cljs.core.chunk_first(seq__40088_40321__$1);
var G__40323 = cljs.core.chunk_rest(seq__40088_40321__$1);
var G__40324 = c__4609__auto___40322;
var G__40325 = cljs.core.count(c__4609__auto___40322);
var G__40326 = (0);
seq__40088_40306 = G__40323;
chunk__40089_40307 = G__40324;
count__40090_40308 = G__40325;
i__40091_40309 = G__40326;
continue;
} else {
var vec__40109_40327 = cljs.core.first(seq__40088_40321__$1);
var name_40328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40109_40327,(0),null);
var map__40112_40329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40109_40327,(1),null);
var map__40112_40330__$1 = (((((!((map__40112_40329 == null))))?(((((map__40112_40329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40112_40329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40112_40329):map__40112_40329);
var doc_40331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40112_40330__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40112_40330__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40328], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40332], 0));

if(cljs.core.truth_(doc_40331)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40331], 0));
} else {
}


var G__40333 = cljs.core.next(seq__40088_40321__$1);
var G__40334 = null;
var G__40335 = (0);
var G__40336 = (0);
seq__40088_40306 = G__40333;
chunk__40089_40307 = G__40334;
count__40090_40308 = G__40335;
i__40091_40309 = G__40336;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__40114 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40115 = null;
var count__40116 = (0);
var i__40117 = (0);
while(true){
if((i__40117 < count__40116)){
var role = chunk__40115.cljs$core$IIndexed$_nth$arity$2(null,i__40117);
var temp__5735__auto___40337__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___40337__$1)){
var spec_40338 = temp__5735__auto___40337__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40338)], 0));
} else {
}


var G__40339 = seq__40114;
var G__40340 = chunk__40115;
var G__40341 = count__40116;
var G__40342 = (i__40117 + (1));
seq__40114 = G__40339;
chunk__40115 = G__40340;
count__40116 = G__40341;
i__40117 = G__40342;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__40114);
if(temp__5735__auto____$1){
var seq__40114__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__40114__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40114__$1);
var G__40343 = cljs.core.chunk_rest(seq__40114__$1);
var G__40344 = c__4609__auto__;
var G__40345 = cljs.core.count(c__4609__auto__);
var G__40346 = (0);
seq__40114 = G__40343;
chunk__40115 = G__40344;
count__40116 = G__40345;
i__40117 = G__40346;
continue;
} else {
var role = cljs.core.first(seq__40114__$1);
var temp__5735__auto___40347__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___40347__$2)){
var spec_40348 = temp__5735__auto___40347__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40348)], 0));
} else {
}


var G__40349 = cljs.core.next(seq__40114__$1);
var G__40350 = null;
var G__40351 = (0);
var G__40352 = (0);
seq__40114 = G__40349;
chunk__40115 = G__40350;
count__40116 = G__40351;
i__40117 = G__40352;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__40353 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__40354 = cljs.core.ex_cause(t);
via = G__40353;
t = G__40354;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__40120 = datafied_throwable;
var map__40120__$1 = (((((!((map__40120 == null))))?(((((map__40120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40120):map__40120);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40120__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40120__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40120__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__40121 = cljs.core.last(via);
var map__40121__$1 = (((((!((map__40121 == null))))?(((((map__40121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40121):map__40121);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40121__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40121__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40121__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__40122 = data;
var map__40122__$1 = (((((!((map__40122 == null))))?(((((map__40122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40122):map__40122);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40122__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40122__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40122__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__40123 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__40123__$1 = (((((!((map__40123 == null))))?(((((map__40123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40123):map__40123);
var top_data = map__40123__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40123__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__40128 = phase;
var G__40128__$1 = (((G__40128 instanceof cljs.core.Keyword))?G__40128.fqn:null);
switch (G__40128__$1) {
case "read-source":
var map__40129 = data;
var map__40129__$1 = (((((!((map__40129 == null))))?(((((map__40129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40129):map__40129);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40129__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40129__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__40131 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__40131__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40131,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40131);
var G__40131__$2 = (cljs.core.truth_((function (){var fexpr__40132 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40132.cljs$core$IFn$_invoke$arity$1 ? fexpr__40132.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40132.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40131__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40131__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40131__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40131__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__40133 = top_data;
var G__40133__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40133,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40133);
var G__40133__$2 = (cljs.core.truth_((function (){var fexpr__40134 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40134.cljs$core$IFn$_invoke$arity$1 ? fexpr__40134.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40134.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40133__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40133__$1);
var G__40133__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40133__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40133__$2);
var G__40133__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40133__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40133__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40133__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40133__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__40135 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40135,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40135,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40135,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40135,(3),null);
var G__40138 = top_data;
var G__40138__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40138,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__40138);
var G__40138__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40138__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__40138__$1);
var G__40138__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40138__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__40138__$2);
var G__40138__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40138__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40138__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40138__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40138__$4;
}

break;
case "execution":
var vec__40139 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40139,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40139,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40139,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40139,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__40119_SHARP_){
var or__4185__auto__ = (p1__40119_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__40143 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40143.cljs$core$IFn$_invoke$arity$1 ? fexpr__40143.cljs$core$IFn$_invoke$arity$1(p1__40119_SHARP_) : fexpr__40143.call(null,p1__40119_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__40144 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__40144__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40144,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__40144);
var G__40144__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40144__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40144__$1);
var G__40144__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40144__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__40144__$2);
var G__40144__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40144__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__40144__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40144__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40144__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40128__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__40147){
var map__40148 = p__40147;
var map__40148__$1 = (((((!((map__40148 == null))))?(((((map__40148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40148):map__40148);
var triage_data = map__40148__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40148__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40148__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40148__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40148__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40148__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40148__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40148__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40148__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__40240 = phase;
var G__40240__$1 = (((G__40240 instanceof cljs.core.Keyword))?G__40240.fqn:null);
switch (G__40240__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__40244 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__40245 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40246 = loc;
var G__40247 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40248_40368 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40249_40369 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40250_40370 = true;
var _STAR_print_fn_STAR__temp_val__40251_40371 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40250_40370);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40251_40371);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40145_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40145_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40249_40369);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40248_40368);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40244,G__40245,G__40246,G__40247) : format.call(null,G__40244,G__40245,G__40246,G__40247));

break;
case "macroexpansion":
var G__40256 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__40257 = cause_type;
var G__40258 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40259 = loc;
var G__40260 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40256,G__40257,G__40258,G__40259,G__40260) : format.call(null,G__40256,G__40257,G__40258,G__40259,G__40260));

break;
case "compile-syntax-check":
var G__40261 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__40262 = cause_type;
var G__40263 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40264 = loc;
var G__40265 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40261,G__40262,G__40263,G__40264,G__40265) : format.call(null,G__40261,G__40262,G__40263,G__40264,G__40265));

break;
case "compilation":
var G__40266 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__40267 = cause_type;
var G__40268 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40269 = loc;
var G__40270 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40266,G__40267,G__40268,G__40269,G__40270) : format.call(null,G__40266,G__40267,G__40268,G__40269,G__40270));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__40271 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__40272 = symbol;
var G__40273 = loc;
var G__40274 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40275_40375 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40276_40376 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40277_40377 = true;
var _STAR_print_fn_STAR__temp_val__40278_40378 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40277_40377);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40278_40378);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40146_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40146_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40276_40376);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40275_40375);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40271,G__40272,G__40273,G__40274) : format.call(null,G__40271,G__40272,G__40273,G__40274));
} else {
var G__40279 = "Execution error%s at %s(%s).\n%s\n";
var G__40280 = cause_type;
var G__40281 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40282 = loc;
var G__40283 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40279,G__40280,G__40281,G__40282,G__40283) : format.call(null,G__40279,G__40280,G__40281,G__40282,G__40283));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40240__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
