goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40098){
var map__40099 = p__40098;
var map__40099__$1 = (((((!((map__40099 == null))))?(((((map__40099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40099):map__40099);
var m = map__40099__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40099__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40099__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__40101_40338 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40103_40339 = null;
var count__40104_40340 = (0);
var i__40105_40341 = (0);
while(true){
if((i__40105_40341 < count__40104_40340)){
var f_40342 = chunk__40103_40339.cljs$core$IIndexed$_nth$arity$2(null,i__40105_40341);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40342], 0));


var G__40343 = seq__40101_40338;
var G__40344 = chunk__40103_40339;
var G__40345 = count__40104_40340;
var G__40346 = (i__40105_40341 + (1));
seq__40101_40338 = G__40343;
chunk__40103_40339 = G__40344;
count__40104_40340 = G__40345;
i__40105_40341 = G__40346;
continue;
} else {
var temp__5735__auto___40347 = cljs.core.seq(seq__40101_40338);
if(temp__5735__auto___40347){
var seq__40101_40348__$1 = temp__5735__auto___40347;
if(cljs.core.chunked_seq_QMARK_(seq__40101_40348__$1)){
var c__4609__auto___40349 = cljs.core.chunk_first(seq__40101_40348__$1);
var G__40350 = cljs.core.chunk_rest(seq__40101_40348__$1);
var G__40351 = c__4609__auto___40349;
var G__40352 = cljs.core.count(c__4609__auto___40349);
var G__40353 = (0);
seq__40101_40338 = G__40350;
chunk__40103_40339 = G__40351;
count__40104_40340 = G__40352;
i__40105_40341 = G__40353;
continue;
} else {
var f_40354 = cljs.core.first(seq__40101_40348__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40354], 0));


var G__40355 = cljs.core.next(seq__40101_40348__$1);
var G__40356 = null;
var G__40357 = (0);
var G__40358 = (0);
seq__40101_40338 = G__40355;
chunk__40103_40339 = G__40356;
count__40104_40340 = G__40357;
i__40105_40341 = G__40358;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40359 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_40359], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_40359)))?cljs.core.second(arglists_40359):arglists_40359)], 0));
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
var seq__40110_40360 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40111_40361 = null;
var count__40112_40362 = (0);
var i__40113_40363 = (0);
while(true){
if((i__40113_40363 < count__40112_40362)){
var vec__40132_40364 = chunk__40111_40361.cljs$core$IIndexed$_nth$arity$2(null,i__40113_40363);
var name_40365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40132_40364,(0),null);
var map__40135_40366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40132_40364,(1),null);
var map__40135_40367__$1 = (((((!((map__40135_40366 == null))))?(((((map__40135_40366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40135_40366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40135_40366):map__40135_40366);
var doc_40368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40135_40367__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40135_40367__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40365], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40369], 0));

if(cljs.core.truth_(doc_40368)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40368], 0));
} else {
}


var G__40370 = seq__40110_40360;
var G__40371 = chunk__40111_40361;
var G__40372 = count__40112_40362;
var G__40373 = (i__40113_40363 + (1));
seq__40110_40360 = G__40370;
chunk__40111_40361 = G__40371;
count__40112_40362 = G__40372;
i__40113_40363 = G__40373;
continue;
} else {
var temp__5735__auto___40374 = cljs.core.seq(seq__40110_40360);
if(temp__5735__auto___40374){
var seq__40110_40379__$1 = temp__5735__auto___40374;
if(cljs.core.chunked_seq_QMARK_(seq__40110_40379__$1)){
var c__4609__auto___40380 = cljs.core.chunk_first(seq__40110_40379__$1);
var G__40381 = cljs.core.chunk_rest(seq__40110_40379__$1);
var G__40382 = c__4609__auto___40380;
var G__40383 = cljs.core.count(c__4609__auto___40380);
var G__40384 = (0);
seq__40110_40360 = G__40381;
chunk__40111_40361 = G__40382;
count__40112_40362 = G__40383;
i__40113_40363 = G__40384;
continue;
} else {
var vec__40140_40385 = cljs.core.first(seq__40110_40379__$1);
var name_40386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40140_40385,(0),null);
var map__40143_40387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40140_40385,(1),null);
var map__40143_40388__$1 = (((((!((map__40143_40387 == null))))?(((((map__40143_40387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40143_40387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40143_40387):map__40143_40387);
var doc_40389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40143_40388__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40143_40388__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40386], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40390], 0));

if(cljs.core.truth_(doc_40389)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40389], 0));
} else {
}


var G__40391 = cljs.core.next(seq__40110_40379__$1);
var G__40392 = null;
var G__40393 = (0);
var G__40394 = (0);
seq__40110_40360 = G__40391;
chunk__40111_40361 = G__40392;
count__40112_40362 = G__40393;
i__40113_40363 = G__40394;
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

var seq__40145 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40146 = null;
var count__40147 = (0);
var i__40148 = (0);
while(true){
if((i__40148 < count__40147)){
var role = chunk__40146.cljs$core$IIndexed$_nth$arity$2(null,i__40148);
var temp__5735__auto___40395__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___40395__$1)){
var spec_40396 = temp__5735__auto___40395__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40396)], 0));
} else {
}


var G__40397 = seq__40145;
var G__40398 = chunk__40146;
var G__40399 = count__40147;
var G__40400 = (i__40148 + (1));
seq__40145 = G__40397;
chunk__40146 = G__40398;
count__40147 = G__40399;
i__40148 = G__40400;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__40145);
if(temp__5735__auto____$1){
var seq__40145__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__40145__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40145__$1);
var G__40403 = cljs.core.chunk_rest(seq__40145__$1);
var G__40404 = c__4609__auto__;
var G__40405 = cljs.core.count(c__4609__auto__);
var G__40406 = (0);
seq__40145 = G__40403;
chunk__40146 = G__40404;
count__40147 = G__40405;
i__40148 = G__40406;
continue;
} else {
var role = cljs.core.first(seq__40145__$1);
var temp__5735__auto___40407__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___40407__$2)){
var spec_40408 = temp__5735__auto___40407__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40408)], 0));
} else {
}


var G__40409 = cljs.core.next(seq__40145__$1);
var G__40410 = null;
var G__40411 = (0);
var G__40412 = (0);
seq__40145 = G__40409;
chunk__40146 = G__40410;
count__40147 = G__40411;
i__40148 = G__40412;
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
var G__40413 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__40414 = cljs.core.ex_cause(t);
via = G__40413;
t = G__40414;
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
var map__40220 = datafied_throwable;
var map__40220__$1 = (((((!((map__40220 == null))))?(((((map__40220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40220):map__40220);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40220__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40220__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40220__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__40221 = cljs.core.last(via);
var map__40221__$1 = (((((!((map__40221 == null))))?(((((map__40221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40221):map__40221);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40221__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40221__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40221__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__40222 = data;
var map__40222__$1 = (((((!((map__40222 == null))))?(((((map__40222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40222):map__40222);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40222__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40222__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40222__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__40223 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__40223__$1 = (((((!((map__40223 == null))))?(((((map__40223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40223):map__40223);
var top_data = map__40223__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40223__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__40228 = phase;
var G__40228__$1 = (((G__40228 instanceof cljs.core.Keyword))?G__40228.fqn:null);
switch (G__40228__$1) {
case "read-source":
var map__40229 = data;
var map__40229__$1 = (((((!((map__40229 == null))))?(((((map__40229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40229):map__40229);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40229__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40229__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__40237 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__40237__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40237,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40237);
var G__40237__$2 = (cljs.core.truth_((function (){var fexpr__40241 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40241.cljs$core$IFn$_invoke$arity$1 ? fexpr__40241.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40241.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40237__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40237__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40237__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40237__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__40242 = top_data;
var G__40242__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40242,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40242);
var G__40242__$2 = (cljs.core.truth_((function (){var fexpr__40243 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40243.cljs$core$IFn$_invoke$arity$1 ? fexpr__40243.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40243.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40242__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40242__$1);
var G__40242__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40242__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40242__$2);
var G__40242__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40242__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40242__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40242__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40242__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__40250 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40250,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40250,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40250,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40250,(3),null);
var G__40258 = top_data;
var G__40258__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40258,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__40258);
var G__40258__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40258__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__40258__$1);
var G__40258__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40258__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__40258__$2);
var G__40258__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40258__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40258__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40258__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40258__$4;
}

break;
case "execution":
var vec__40270 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40270,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40270,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40270,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40270,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__40217_SHARP_){
var or__4185__auto__ = (p1__40217_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__40278 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40278.cljs$core$IFn$_invoke$arity$1 ? fexpr__40278.cljs$core$IFn$_invoke$arity$1(p1__40217_SHARP_) : fexpr__40278.call(null,p1__40217_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__40279 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__40279__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40279,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__40279);
var G__40279__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40279__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40279__$1);
var G__40279__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40279__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__40279__$2);
var G__40279__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40279__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__40279__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40279__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40279__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40228__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__40290){
var map__40291 = p__40290;
var map__40291__$1 = (((((!((map__40291 == null))))?(((((map__40291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40291):map__40291);
var triage_data = map__40291__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40291__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40291__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40291__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40291__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40291__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40291__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40291__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40291__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__40294 = phase;
var G__40294__$1 = (((G__40294 instanceof cljs.core.Keyword))?G__40294.fqn:null);
switch (G__40294__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__40295 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__40296 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40297 = loc;
var G__40298 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40301_40446 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40302_40447 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40303_40448 = true;
var _STAR_print_fn_STAR__temp_val__40304_40449 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40303_40448);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40304_40449);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40285_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40285_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40302_40447);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40301_40446);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40295,G__40296,G__40297,G__40298) : format.call(null,G__40295,G__40296,G__40297,G__40298));

break;
case "macroexpansion":
var G__40306 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__40307 = cause_type;
var G__40308 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40309 = loc;
var G__40310 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40306,G__40307,G__40308,G__40309,G__40310) : format.call(null,G__40306,G__40307,G__40308,G__40309,G__40310));

break;
case "compile-syntax-check":
var G__40311 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__40312 = cause_type;
var G__40313 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40314 = loc;
var G__40315 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40311,G__40312,G__40313,G__40314,G__40315) : format.call(null,G__40311,G__40312,G__40313,G__40314,G__40315));

break;
case "compilation":
var G__40316 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__40317 = cause_type;
var G__40318 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40319 = loc;
var G__40320 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40316,G__40317,G__40318,G__40319,G__40320) : format.call(null,G__40316,G__40317,G__40318,G__40319,G__40320));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__40321 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__40322 = symbol;
var G__40323 = loc;
var G__40324 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40325_40450 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40326_40451 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40327_40452 = true;
var _STAR_print_fn_STAR__temp_val__40328_40453 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40327_40452);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40328_40453);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40289_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40289_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40326_40451);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40325_40450);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40321,G__40322,G__40323,G__40324) : format.call(null,G__40321,G__40322,G__40323,G__40324));
} else {
var G__40329 = "Execution error%s at %s(%s).\n%s\n";
var G__40330 = cause_type;
var G__40331 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40332 = loc;
var G__40333 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40329,G__40330,G__40331,G__40332,G__40333) : format.call(null,G__40329,G__40330,G__40331,G__40332,G__40333));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40294__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
