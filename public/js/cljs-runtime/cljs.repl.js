goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36038){
var map__36042 = p__36038;
var map__36042__$1 = (((((!((map__36042 == null))))?(((((map__36042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36042):map__36042);
var m = map__36042__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36042__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36042__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36044_36319 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36045_36320 = null;
var count__36046_36321 = (0);
var i__36047_36322 = (0);
while(true){
if((i__36047_36322 < count__36046_36321)){
var f_36323 = chunk__36045_36320.cljs$core$IIndexed$_nth$arity$2(null,i__36047_36322);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36323], 0));


var G__36324 = seq__36044_36319;
var G__36325 = chunk__36045_36320;
var G__36326 = count__36046_36321;
var G__36327 = (i__36047_36322 + (1));
seq__36044_36319 = G__36324;
chunk__36045_36320 = G__36325;
count__36046_36321 = G__36326;
i__36047_36322 = G__36327;
continue;
} else {
var temp__5735__auto___36328 = cljs.core.seq(seq__36044_36319);
if(temp__5735__auto___36328){
var seq__36044_36329__$1 = temp__5735__auto___36328;
if(cljs.core.chunked_seq_QMARK_(seq__36044_36329__$1)){
var c__4609__auto___36330 = cljs.core.chunk_first(seq__36044_36329__$1);
var G__36331 = cljs.core.chunk_rest(seq__36044_36329__$1);
var G__36332 = c__4609__auto___36330;
var G__36333 = cljs.core.count(c__4609__auto___36330);
var G__36334 = (0);
seq__36044_36319 = G__36331;
chunk__36045_36320 = G__36332;
count__36046_36321 = G__36333;
i__36047_36322 = G__36334;
continue;
} else {
var f_36335 = cljs.core.first(seq__36044_36329__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36335], 0));


var G__36336 = cljs.core.next(seq__36044_36329__$1);
var G__36337 = null;
var G__36338 = (0);
var G__36339 = (0);
seq__36044_36319 = G__36336;
chunk__36045_36320 = G__36337;
count__36046_36321 = G__36338;
i__36047_36322 = G__36339;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36340 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36340], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36340)))?cljs.core.second(arglists_36340):arglists_36340)], 0));
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
var seq__36059_36341 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36060_36342 = null;
var count__36061_36343 = (0);
var i__36062_36344 = (0);
while(true){
if((i__36062_36344 < count__36061_36343)){
var vec__36077_36345 = chunk__36060_36342.cljs$core$IIndexed$_nth$arity$2(null,i__36062_36344);
var name_36346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36077_36345,(0),null);
var map__36080_36347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36077_36345,(1),null);
var map__36080_36348__$1 = (((((!((map__36080_36347 == null))))?(((((map__36080_36347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36080_36347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36080_36347):map__36080_36347);
var doc_36349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36080_36348__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36080_36348__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36346], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36350], 0));

if(cljs.core.truth_(doc_36349)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36349], 0));
} else {
}


var G__36351 = seq__36059_36341;
var G__36352 = chunk__36060_36342;
var G__36353 = count__36061_36343;
var G__36354 = (i__36062_36344 + (1));
seq__36059_36341 = G__36351;
chunk__36060_36342 = G__36352;
count__36061_36343 = G__36353;
i__36062_36344 = G__36354;
continue;
} else {
var temp__5735__auto___36355 = cljs.core.seq(seq__36059_36341);
if(temp__5735__auto___36355){
var seq__36059_36356__$1 = temp__5735__auto___36355;
if(cljs.core.chunked_seq_QMARK_(seq__36059_36356__$1)){
var c__4609__auto___36357 = cljs.core.chunk_first(seq__36059_36356__$1);
var G__36358 = cljs.core.chunk_rest(seq__36059_36356__$1);
var G__36359 = c__4609__auto___36357;
var G__36360 = cljs.core.count(c__4609__auto___36357);
var G__36361 = (0);
seq__36059_36341 = G__36358;
chunk__36060_36342 = G__36359;
count__36061_36343 = G__36360;
i__36062_36344 = G__36361;
continue;
} else {
var vec__36095_36362 = cljs.core.first(seq__36059_36356__$1);
var name_36363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36095_36362,(0),null);
var map__36098_36364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36095_36362,(1),null);
var map__36098_36365__$1 = (((((!((map__36098_36364 == null))))?(((((map__36098_36364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36098_36364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36098_36364):map__36098_36364);
var doc_36366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36098_36365__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36098_36365__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36363], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36367], 0));

if(cljs.core.truth_(doc_36366)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36366], 0));
} else {
}


var G__36368 = cljs.core.next(seq__36059_36356__$1);
var G__36369 = null;
var G__36370 = (0);
var G__36371 = (0);
seq__36059_36341 = G__36368;
chunk__36060_36342 = G__36369;
count__36061_36343 = G__36370;
i__36062_36344 = G__36371;
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

var seq__36108 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36109 = null;
var count__36110 = (0);
var i__36111 = (0);
while(true){
if((i__36111 < count__36110)){
var role = chunk__36109.cljs$core$IIndexed$_nth$arity$2(null,i__36111);
var temp__5735__auto___36372__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36372__$1)){
var spec_36373 = temp__5735__auto___36372__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36373)], 0));
} else {
}


var G__36374 = seq__36108;
var G__36375 = chunk__36109;
var G__36376 = count__36110;
var G__36377 = (i__36111 + (1));
seq__36108 = G__36374;
chunk__36109 = G__36375;
count__36110 = G__36376;
i__36111 = G__36377;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36108);
if(temp__5735__auto____$1){
var seq__36108__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36108__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36108__$1);
var G__36378 = cljs.core.chunk_rest(seq__36108__$1);
var G__36379 = c__4609__auto__;
var G__36380 = cljs.core.count(c__4609__auto__);
var G__36381 = (0);
seq__36108 = G__36378;
chunk__36109 = G__36379;
count__36110 = G__36380;
i__36111 = G__36381;
continue;
} else {
var role = cljs.core.first(seq__36108__$1);
var temp__5735__auto___36382__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36382__$2)){
var spec_36383 = temp__5735__auto___36382__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36383)], 0));
} else {
}


var G__36384 = cljs.core.next(seq__36108__$1);
var G__36385 = null;
var G__36386 = (0);
var G__36387 = (0);
seq__36108 = G__36384;
chunk__36109 = G__36385;
count__36110 = G__36386;
i__36111 = G__36387;
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
var G__36389 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36390 = cljs.core.ex_cause(t);
via = G__36389;
t = G__36390;
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
var map__36206 = datafied_throwable;
var map__36206__$1 = (((((!((map__36206 == null))))?(((((map__36206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36206):map__36206);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36206__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36206__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36206__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36207 = cljs.core.last(via);
var map__36207__$1 = (((((!((map__36207 == null))))?(((((map__36207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36207):map__36207);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36207__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36207__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36207__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36209 = data;
var map__36209__$1 = (((((!((map__36209 == null))))?(((((map__36209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36209):map__36209);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36209__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36209__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36209__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36210 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36210__$1 = (((((!((map__36210 == null))))?(((((map__36210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36210):map__36210);
var top_data = map__36210__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36210__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36218 = phase;
var G__36218__$1 = (((G__36218 instanceof cljs.core.Keyword))?G__36218.fqn:null);
switch (G__36218__$1) {
case "read-source":
var map__36221 = data;
var map__36221__$1 = (((((!((map__36221 == null))))?(((((map__36221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36221):map__36221);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36221__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36221__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36224 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36224__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36224,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36224);
var G__36224__$2 = (cljs.core.truth_((function (){var fexpr__36225 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36225.cljs$core$IFn$_invoke$arity$1 ? fexpr__36225.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36225.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36224__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36224__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36224__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36224__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36226 = top_data;
var G__36226__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36226,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36226);
var G__36226__$2 = (cljs.core.truth_((function (){var fexpr__36227 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36227.cljs$core$IFn$_invoke$arity$1 ? fexpr__36227.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36227.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36226__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36226__$1);
var G__36226__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36226__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36226__$2);
var G__36226__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36226__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36226__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36226__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36226__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36230 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36230,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36230,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36230,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36230,(3),null);
var G__36233 = top_data;
var G__36233__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36233,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36233);
var G__36233__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36233__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36233__$1);
var G__36233__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36233__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36233__$2);
var G__36233__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36233__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36233__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36233__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36233__$4;
}

break;
case "execution":
var vec__36239 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36239,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36239,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36239,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36239,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36201_SHARP_){
var or__4185__auto__ = (p1__36201_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__36255 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36255.cljs$core$IFn$_invoke$arity$1 ? fexpr__36255.cljs$core$IFn$_invoke$arity$1(p1__36201_SHARP_) : fexpr__36255.call(null,p1__36201_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__36261 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36261__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36261,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36261);
var G__36261__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36261__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36261__$1);
var G__36261__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36261__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36261__$2);
var G__36261__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36261__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36261__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36261__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36261__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36218__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36265){
var map__36267 = p__36265;
var map__36267__$1 = (((((!((map__36267 == null))))?(((((map__36267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36267):map__36267);
var triage_data = map__36267__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36267__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36267__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36267__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36267__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36267__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36267__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36267__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36267__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__36273 = phase;
var G__36273__$1 = (((G__36273 instanceof cljs.core.Keyword))?G__36273.fqn:null);
switch (G__36273__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36274 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36275 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36276 = loc;
var G__36277 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36279_36415 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36280_36416 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36281_36417 = true;
var _STAR_print_fn_STAR__temp_val__36282_36418 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36281_36417);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36282_36418);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36263_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36263_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36280_36416);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36279_36415);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36274,G__36275,G__36276,G__36277) : format.call(null,G__36274,G__36275,G__36276,G__36277));

break;
case "macroexpansion":
var G__36283 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36284 = cause_type;
var G__36285 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36286 = loc;
var G__36287 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36283,G__36284,G__36285,G__36286,G__36287) : format.call(null,G__36283,G__36284,G__36285,G__36286,G__36287));

break;
case "compile-syntax-check":
var G__36288 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36289 = cause_type;
var G__36290 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36291 = loc;
var G__36292 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36288,G__36289,G__36290,G__36291,G__36292) : format.call(null,G__36288,G__36289,G__36290,G__36291,G__36292));

break;
case "compilation":
var G__36293 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36294 = cause_type;
var G__36295 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36296 = loc;
var G__36297 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36293,G__36294,G__36295,G__36296,G__36297) : format.call(null,G__36293,G__36294,G__36295,G__36296,G__36297));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36298 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36299 = symbol;
var G__36300 = loc;
var G__36301 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36302_36426 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36303_36427 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36304_36428 = true;
var _STAR_print_fn_STAR__temp_val__36305_36429 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36304_36428);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36305_36429);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36264_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36264_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36303_36427);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36302_36426);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36298,G__36299,G__36300,G__36301) : format.call(null,G__36298,G__36299,G__36300,G__36301));
} else {
var G__36306 = "Execution error%s at %s(%s).\n%s\n";
var G__36307 = cause_type;
var G__36308 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36309 = loc;
var G__36310 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36306,G__36307,G__36308,G__36309,G__36310) : format.call(null,G__36306,G__36307,G__36308,G__36309,G__36310));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36273__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
