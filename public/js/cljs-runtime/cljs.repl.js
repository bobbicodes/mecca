goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35979){
var map__35980 = p__35979;
var map__35980__$1 = (((((!((map__35980 == null))))?(((((map__35980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35980):map__35980);
var m = map__35980__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35980__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35980__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35984_36199 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35985_36200 = null;
var count__35986_36201 = (0);
var i__35987_36202 = (0);
while(true){
if((i__35987_36202 < count__35986_36201)){
var f_36203 = chunk__35985_36200.cljs$core$IIndexed$_nth$arity$2(null,i__35987_36202);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36203], 0));


var G__36204 = seq__35984_36199;
var G__36205 = chunk__35985_36200;
var G__36206 = count__35986_36201;
var G__36207 = (i__35987_36202 + (1));
seq__35984_36199 = G__36204;
chunk__35985_36200 = G__36205;
count__35986_36201 = G__36206;
i__35987_36202 = G__36207;
continue;
} else {
var temp__5735__auto___36208 = cljs.core.seq(seq__35984_36199);
if(temp__5735__auto___36208){
var seq__35984_36210__$1 = temp__5735__auto___36208;
if(cljs.core.chunked_seq_QMARK_(seq__35984_36210__$1)){
var c__4609__auto___36211 = cljs.core.chunk_first(seq__35984_36210__$1);
var G__36212 = cljs.core.chunk_rest(seq__35984_36210__$1);
var G__36213 = c__4609__auto___36211;
var G__36214 = cljs.core.count(c__4609__auto___36211);
var G__36215 = (0);
seq__35984_36199 = G__36212;
chunk__35985_36200 = G__36213;
count__35986_36201 = G__36214;
i__35987_36202 = G__36215;
continue;
} else {
var f_36216 = cljs.core.first(seq__35984_36210__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36216], 0));


var G__36217 = cljs.core.next(seq__35984_36210__$1);
var G__36218 = null;
var G__36219 = (0);
var G__36220 = (0);
seq__35984_36199 = G__36217;
chunk__35985_36200 = G__36218;
count__35986_36201 = G__36219;
i__35987_36202 = G__36220;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36221 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36221], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36221)))?cljs.core.second(arglists_36221):arglists_36221)], 0));
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
var seq__36021_36226 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36022_36227 = null;
var count__36023_36228 = (0);
var i__36024_36229 = (0);
while(true){
if((i__36024_36229 < count__36023_36228)){
var vec__36061_36230 = chunk__36022_36227.cljs$core$IIndexed$_nth$arity$2(null,i__36024_36229);
var name_36231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36061_36230,(0),null);
var map__36064_36232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36061_36230,(1),null);
var map__36064_36233__$1 = (((((!((map__36064_36232 == null))))?(((((map__36064_36232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36064_36232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36064_36232):map__36064_36232);
var doc_36234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36064_36233__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36064_36233__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36231], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36235], 0));

if(cljs.core.truth_(doc_36234)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36234], 0));
} else {
}


var G__36238 = seq__36021_36226;
var G__36239 = chunk__36022_36227;
var G__36240 = count__36023_36228;
var G__36241 = (i__36024_36229 + (1));
seq__36021_36226 = G__36238;
chunk__36022_36227 = G__36239;
count__36023_36228 = G__36240;
i__36024_36229 = G__36241;
continue;
} else {
var temp__5735__auto___36242 = cljs.core.seq(seq__36021_36226);
if(temp__5735__auto___36242){
var seq__36021_36243__$1 = temp__5735__auto___36242;
if(cljs.core.chunked_seq_QMARK_(seq__36021_36243__$1)){
var c__4609__auto___36244 = cljs.core.chunk_first(seq__36021_36243__$1);
var G__36245 = cljs.core.chunk_rest(seq__36021_36243__$1);
var G__36246 = c__4609__auto___36244;
var G__36247 = cljs.core.count(c__4609__auto___36244);
var G__36248 = (0);
seq__36021_36226 = G__36245;
chunk__36022_36227 = G__36246;
count__36023_36228 = G__36247;
i__36024_36229 = G__36248;
continue;
} else {
var vec__36116_36249 = cljs.core.first(seq__36021_36243__$1);
var name_36250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36116_36249,(0),null);
var map__36119_36251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36116_36249,(1),null);
var map__36119_36252__$1 = (((((!((map__36119_36251 == null))))?(((((map__36119_36251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36119_36251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36119_36251):map__36119_36251);
var doc_36253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36119_36252__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36119_36252__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36250], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36254], 0));

if(cljs.core.truth_(doc_36253)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36253], 0));
} else {
}


var G__36257 = cljs.core.next(seq__36021_36243__$1);
var G__36258 = null;
var G__36259 = (0);
var G__36260 = (0);
seq__36021_36226 = G__36257;
chunk__36022_36227 = G__36258;
count__36023_36228 = G__36259;
i__36024_36229 = G__36260;
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

var seq__36124 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36125 = null;
var count__36126 = (0);
var i__36127 = (0);
while(true){
if((i__36127 < count__36126)){
var role = chunk__36125.cljs$core$IIndexed$_nth$arity$2(null,i__36127);
var temp__5735__auto___36261__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36261__$1)){
var spec_36262 = temp__5735__auto___36261__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36262)], 0));
} else {
}


var G__36263 = seq__36124;
var G__36264 = chunk__36125;
var G__36265 = count__36126;
var G__36266 = (i__36127 + (1));
seq__36124 = G__36263;
chunk__36125 = G__36264;
count__36126 = G__36265;
i__36127 = G__36266;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36124);
if(temp__5735__auto____$1){
var seq__36124__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36124__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36124__$1);
var G__36267 = cljs.core.chunk_rest(seq__36124__$1);
var G__36268 = c__4609__auto__;
var G__36269 = cljs.core.count(c__4609__auto__);
var G__36270 = (0);
seq__36124 = G__36267;
chunk__36125 = G__36268;
count__36126 = G__36269;
i__36127 = G__36270;
continue;
} else {
var role = cljs.core.first(seq__36124__$1);
var temp__5735__auto___36274__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36274__$2)){
var spec_36275 = temp__5735__auto___36274__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36275)], 0));
} else {
}


var G__36276 = cljs.core.next(seq__36124__$1);
var G__36277 = null;
var G__36278 = (0);
var G__36279 = (0);
seq__36124 = G__36276;
chunk__36125 = G__36277;
count__36126 = G__36278;
i__36127 = G__36279;
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
var G__36280 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36281 = cljs.core.ex_cause(t);
via = G__36280;
t = G__36281;
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
var map__36130 = datafied_throwable;
var map__36130__$1 = (((((!((map__36130 == null))))?(((((map__36130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36130):map__36130);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36130__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36130__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36130__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36131 = cljs.core.last(via);
var map__36131__$1 = (((((!((map__36131 == null))))?(((((map__36131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36131):map__36131);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36131__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36131__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36131__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36132 = data;
var map__36132__$1 = (((((!((map__36132 == null))))?(((((map__36132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36132):map__36132);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36132__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36132__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36132__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36133 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36133__$1 = (((((!((map__36133 == null))))?(((((map__36133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36133):map__36133);
var top_data = map__36133__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36133__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36138 = phase;
var G__36138__$1 = (((G__36138 instanceof cljs.core.Keyword))?G__36138.fqn:null);
switch (G__36138__$1) {
case "read-source":
var map__36139 = data;
var map__36139__$1 = (((((!((map__36139 == null))))?(((((map__36139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36139):map__36139);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36139__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36139__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36141 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36141__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36141,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36141);
var G__36141__$2 = (cljs.core.truth_((function (){var fexpr__36142 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36142.cljs$core$IFn$_invoke$arity$1 ? fexpr__36142.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36142.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36141__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36141__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36141__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36141__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36143 = top_data;
var G__36143__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36143,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36143);
var G__36143__$2 = (cljs.core.truth_((function (){var fexpr__36144 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36144.cljs$core$IFn$_invoke$arity$1 ? fexpr__36144.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36144.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36143__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36143__$1);
var G__36143__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36143__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36143__$2);
var G__36143__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36143__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36143__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36143__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36143__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36145 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36145,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36145,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36145,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36145,(3),null);
var G__36148 = top_data;
var G__36148__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36148,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36148);
var G__36148__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36148__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36148__$1);
var G__36148__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36148__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36148__$2);
var G__36148__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36148__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36148__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36148__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36148__$4;
}

break;
case "execution":
var vec__36149 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36149,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36149,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36149,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36149,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36129_SHARP_){
var or__4185__auto__ = (p1__36129_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__36153 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36153.cljs$core$IFn$_invoke$arity$1 ? fexpr__36153.cljs$core$IFn$_invoke$arity$1(p1__36129_SHARP_) : fexpr__36153.call(null,p1__36129_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__36154 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36154__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36154,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36154);
var G__36154__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36154__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36154__$1);
var G__36154__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36154__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36154__$2);
var G__36154__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36154__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36154__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36154__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36154__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36138__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36157){
var map__36158 = p__36157;
var map__36158__$1 = (((((!((map__36158 == null))))?(((((map__36158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36158):map__36158);
var triage_data = map__36158__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36158__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36158__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36158__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36158__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36158__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36158__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36158__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36158__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__36160 = phase;
var G__36160__$1 = (((G__36160 instanceof cljs.core.Keyword))?G__36160.fqn:null);
switch (G__36160__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36161 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36162 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36163 = loc;
var G__36164 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36165_36297 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36166_36298 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36167_36299 = true;
var _STAR_print_fn_STAR__temp_val__36168_36300 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36167_36299);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36168_36300);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36155_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36155_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36166_36298);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36165_36297);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36161,G__36162,G__36163,G__36164) : format.call(null,G__36161,G__36162,G__36163,G__36164));

break;
case "macroexpansion":
var G__36169 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36170 = cause_type;
var G__36171 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36172 = loc;
var G__36173 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36169,G__36170,G__36171,G__36172,G__36173) : format.call(null,G__36169,G__36170,G__36171,G__36172,G__36173));

break;
case "compile-syntax-check":
var G__36174 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36175 = cause_type;
var G__36176 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36177 = loc;
var G__36178 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36174,G__36175,G__36176,G__36177,G__36178) : format.call(null,G__36174,G__36175,G__36176,G__36177,G__36178));

break;
case "compilation":
var G__36179 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36180 = cause_type;
var G__36181 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36182 = loc;
var G__36183 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36179,G__36180,G__36181,G__36182,G__36183) : format.call(null,G__36179,G__36180,G__36181,G__36182,G__36183));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36184 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36185 = symbol;
var G__36186 = loc;
var G__36187 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36188_36302 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36189_36303 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36190_36304 = true;
var _STAR_print_fn_STAR__temp_val__36191_36305 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36190_36304);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36191_36305);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36156_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36156_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36189_36303);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36188_36302);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36184,G__36185,G__36186,G__36187) : format.call(null,G__36184,G__36185,G__36186,G__36187));
} else {
var G__36192 = "Execution error%s at %s(%s).\n%s\n";
var G__36193 = cause_type;
var G__36194 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36195 = loc;
var G__36196 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36192,G__36193,G__36194,G__36195,G__36196) : format.call(null,G__36192,G__36193,G__36194,G__36195,G__36196));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36160__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
