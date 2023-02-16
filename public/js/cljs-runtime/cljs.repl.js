goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__51971){
var map__51972 = p__51971;
var map__51972__$1 = cljs.core.__destructure_map(map__51972);
var m = map__51972__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51972__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51972__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
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
var seq__51977_52275 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51978_52276 = null;
var count__51979_52277 = (0);
var i__51980_52278 = (0);
while(true){
if((i__51980_52278 < count__51979_52277)){
var f_52279 = chunk__51978_52276.cljs$core$IIndexed$_nth$arity$2(null,i__51980_52278);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_52279], 0));


var G__52280 = seq__51977_52275;
var G__52281 = chunk__51978_52276;
var G__52282 = count__51979_52277;
var G__52283 = (i__51980_52278 + (1));
seq__51977_52275 = G__52280;
chunk__51978_52276 = G__52281;
count__51979_52277 = G__52282;
i__51980_52278 = G__52283;
continue;
} else {
var temp__5753__auto___52284 = cljs.core.seq(seq__51977_52275);
if(temp__5753__auto___52284){
var seq__51977_52286__$1 = temp__5753__auto___52284;
if(cljs.core.chunked_seq_QMARK_(seq__51977_52286__$1)){
var c__4649__auto___52287 = cljs.core.chunk_first(seq__51977_52286__$1);
var G__52288 = cljs.core.chunk_rest(seq__51977_52286__$1);
var G__52289 = c__4649__auto___52287;
var G__52290 = cljs.core.count(c__4649__auto___52287);
var G__52291 = (0);
seq__51977_52275 = G__52288;
chunk__51978_52276 = G__52289;
count__51979_52277 = G__52290;
i__51980_52278 = G__52291;
continue;
} else {
var f_52292 = cljs.core.first(seq__51977_52286__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_52292], 0));


var G__52293 = cljs.core.next(seq__51977_52286__$1);
var G__52294 = null;
var G__52295 = (0);
var G__52296 = (0);
seq__51977_52275 = G__52293;
chunk__51978_52276 = G__52294;
count__51979_52277 = G__52295;
i__51980_52278 = G__52296;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_52297 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_52297], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_52297)))?cljs.core.second(arglists_52297):arglists_52297)], 0));
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
var seq__51996_52298 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51997_52299 = null;
var count__51998_52300 = (0);
var i__51999_52301 = (0);
while(true){
if((i__51999_52301 < count__51998_52300)){
var vec__52046_52302 = chunk__51997_52299.cljs$core$IIndexed$_nth$arity$2(null,i__51999_52301);
var name_52303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52046_52302,(0),null);
var map__52049_52304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52046_52302,(1),null);
var map__52049_52305__$1 = cljs.core.__destructure_map(map__52049_52304);
var doc_52306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52049_52305__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52049_52305__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_52303], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_52307], 0));

if(cljs.core.truth_(doc_52306)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_52306], 0));
} else {
}


var G__52308 = seq__51996_52298;
var G__52309 = chunk__51997_52299;
var G__52310 = count__51998_52300;
var G__52311 = (i__51999_52301 + (1));
seq__51996_52298 = G__52308;
chunk__51997_52299 = G__52309;
count__51998_52300 = G__52310;
i__51999_52301 = G__52311;
continue;
} else {
var temp__5753__auto___52312 = cljs.core.seq(seq__51996_52298);
if(temp__5753__auto___52312){
var seq__51996_52313__$1 = temp__5753__auto___52312;
if(cljs.core.chunked_seq_QMARK_(seq__51996_52313__$1)){
var c__4649__auto___52314 = cljs.core.chunk_first(seq__51996_52313__$1);
var G__52315 = cljs.core.chunk_rest(seq__51996_52313__$1);
var G__52316 = c__4649__auto___52314;
var G__52317 = cljs.core.count(c__4649__auto___52314);
var G__52318 = (0);
seq__51996_52298 = G__52315;
chunk__51997_52299 = G__52316;
count__51998_52300 = G__52317;
i__51999_52301 = G__52318;
continue;
} else {
var vec__52076_52319 = cljs.core.first(seq__51996_52313__$1);
var name_52320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52076_52319,(0),null);
var map__52079_52321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52076_52319,(1),null);
var map__52079_52322__$1 = cljs.core.__destructure_map(map__52079_52321);
var doc_52323 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52079_52322__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52079_52322__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_52320], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_52324], 0));

if(cljs.core.truth_(doc_52323)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_52323], 0));
} else {
}


var G__52325 = cljs.core.next(seq__51996_52313__$1);
var G__52326 = null;
var G__52327 = (0);
var G__52328 = (0);
seq__51996_52298 = G__52325;
chunk__51997_52299 = G__52326;
count__51998_52300 = G__52327;
i__51999_52301 = G__52328;
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
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__52139 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__52140 = null;
var count__52141 = (0);
var i__52142 = (0);
while(true){
if((i__52142 < count__52141)){
var role = chunk__52140.cljs$core$IIndexed$_nth$arity$2(null,i__52142);
var temp__5753__auto___52329__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___52329__$1)){
var spec_52330 = temp__5753__auto___52329__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_52330)], 0));
} else {
}


var G__52331 = seq__52139;
var G__52332 = chunk__52140;
var G__52333 = count__52141;
var G__52334 = (i__52142 + (1));
seq__52139 = G__52331;
chunk__52140 = G__52332;
count__52141 = G__52333;
i__52142 = G__52334;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__52139);
if(temp__5753__auto____$1){
var seq__52139__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__52139__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__52139__$1);
var G__52335 = cljs.core.chunk_rest(seq__52139__$1);
var G__52336 = c__4649__auto__;
var G__52337 = cljs.core.count(c__4649__auto__);
var G__52338 = (0);
seq__52139 = G__52335;
chunk__52140 = G__52336;
count__52141 = G__52337;
i__52142 = G__52338;
continue;
} else {
var role = cljs.core.first(seq__52139__$1);
var temp__5753__auto___52339__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___52339__$2)){
var spec_52340 = temp__5753__auto___52339__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_52340)], 0));
} else {
}


var G__52341 = cljs.core.next(seq__52139__$1);
var G__52342 = null;
var G__52343 = (0);
var G__52344 = (0);
seq__52139 = G__52341;
chunk__52140 = G__52342;
count__52141 = G__52343;
i__52142 = G__52344;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
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
var G__52345 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__52346 = cljs.core.ex_cause(t);
via = G__52345;
t = G__52346;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
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
var map__52174 = datafied_throwable;
var map__52174__$1 = cljs.core.__destructure_map(map__52174);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52174__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52174__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52174__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__52175 = cljs.core.last(via);
var map__52175__$1 = cljs.core.__destructure_map(map__52175);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52175__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52175__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52175__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__52176 = data;
var map__52176__$1 = cljs.core.__destructure_map(map__52176);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52176__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52176__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52176__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__52177 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__52177__$1 = cljs.core.__destructure_map(map__52177);
var top_data = map__52177__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52177__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__52178 = phase;
var G__52178__$1 = (((G__52178 instanceof cljs.core.Keyword))?G__52178.fqn:null);
switch (G__52178__$1) {
case "read-source":
var map__52179 = data;
var map__52179__$1 = cljs.core.__destructure_map(map__52179);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52179__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52179__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__52180 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__52180__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52180,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__52180);
var G__52180__$2 = (cljs.core.truth_((function (){var fexpr__52181 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52181.cljs$core$IFn$_invoke$arity$1 ? fexpr__52181.cljs$core$IFn$_invoke$arity$1(source) : fexpr__52181.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52180__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__52180__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52180__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__52180__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__52182 = top_data;
var G__52182__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52182,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__52182);
var G__52182__$2 = (cljs.core.truth_((function (){var fexpr__52183 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52183.cljs$core$IFn$_invoke$arity$1 ? fexpr__52183.cljs$core$IFn$_invoke$arity$1(source) : fexpr__52183.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52182__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__52182__$1);
var G__52182__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52182__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__52182__$2);
var G__52182__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52182__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__52182__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52182__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__52182__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__52185 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52185,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52185,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52185,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52185,(3),null);
var G__52188 = top_data;
var G__52188__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52188,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__52188);
var G__52188__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52188__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__52188__$1);
var G__52188__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52188__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__52188__$2);
var G__52188__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52188__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__52188__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52188__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__52188__$4;
}

break;
case "execution":
var vec__52189 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52189,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52189,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52189,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52189,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__52173_SHARP_){
var or__4223__auto__ = (p1__52173_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__52193 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52193.cljs$core$IFn$_invoke$arity$1 ? fexpr__52193.cljs$core$IFn$_invoke$arity$1(p1__52173_SHARP_) : fexpr__52193.call(null,p1__52173_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__52194 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__52194__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52194,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__52194);
var G__52194__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52194__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__52194__$1);
var G__52194__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52194__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__52194__$2);
var G__52194__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52194__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__52194__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52194__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__52194__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52178__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__52201){
var map__52202 = p__52201;
var map__52202__$1 = cljs.core.__destructure_map(map__52202);
var triage_data = map__52202__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52202__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52202__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52202__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52202__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52202__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52202__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52202__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52202__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4223__auto__ = class$;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__52204 = phase;
var G__52204__$1 = (((G__52204 instanceof cljs.core.Keyword))?G__52204.fqn:null);
switch (G__52204__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__52205 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__52206 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52207 = loc;
var G__52208 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__52210_52372 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__52211_52373 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__52212_52374 = true;
var _STAR_print_fn_STAR__temp_val__52213_52375 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52212_52374);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52213_52375);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52199_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__52199_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52211_52373);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52210_52372);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__52205,G__52206,G__52207,G__52208) : format.call(null,G__52205,G__52206,G__52207,G__52208));

break;
case "macroexpansion":
var G__52214 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__52215 = cause_type;
var G__52216 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52217 = loc;
var G__52218 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52214,G__52215,G__52216,G__52217,G__52218) : format.call(null,G__52214,G__52215,G__52216,G__52217,G__52218));

break;
case "compile-syntax-check":
var G__52219 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__52220 = cause_type;
var G__52221 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52222 = loc;
var G__52223 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52219,G__52220,G__52221,G__52222,G__52223) : format.call(null,G__52219,G__52220,G__52221,G__52222,G__52223));

break;
case "compilation":
var G__52224 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__52225 = cause_type;
var G__52226 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52227 = loc;
var G__52228 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52224,G__52225,G__52226,G__52227,G__52228) : format.call(null,G__52224,G__52225,G__52226,G__52227,G__52228));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__52229 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__52230 = symbol;
var G__52231 = loc;
var G__52232 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__52233_52382 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__52234_52383 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__52235_52384 = true;
var _STAR_print_fn_STAR__temp_val__52236_52385 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52235_52384);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52236_52385);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52200_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__52200_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52234_52383);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52233_52382);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__52229,G__52230,G__52231,G__52232) : format.call(null,G__52229,G__52230,G__52231,G__52232));
} else {
var G__52237 = "Execution error%s at %s(%s).\n%s\n";
var G__52238 = cause_type;
var G__52239 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52240 = loc;
var G__52241 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52237,G__52238,G__52239,G__52240,G__52241) : format.call(null,G__52237,G__52238,G__52239,G__52240,G__52241));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52204__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
