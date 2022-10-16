goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35972){
var map__35973 = p__35972;
var map__35973__$1 = (((((!((map__35973 == null))))?(((((map__35973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35973):map__35973);
var m = map__35973__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35973__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35973__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35977_36198 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35978_36199 = null;
var count__35979_36200 = (0);
var i__35980_36201 = (0);
while(true){
if((i__35980_36201 < count__35979_36200)){
var f_36202 = chunk__35978_36199.cljs$core$IIndexed$_nth$arity$2(null,i__35980_36201);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36202], 0));


var G__36203 = seq__35977_36198;
var G__36204 = chunk__35978_36199;
var G__36205 = count__35979_36200;
var G__36206 = (i__35980_36201 + (1));
seq__35977_36198 = G__36203;
chunk__35978_36199 = G__36204;
count__35979_36200 = G__36205;
i__35980_36201 = G__36206;
continue;
} else {
var temp__5735__auto___36207 = cljs.core.seq(seq__35977_36198);
if(temp__5735__auto___36207){
var seq__35977_36208__$1 = temp__5735__auto___36207;
if(cljs.core.chunked_seq_QMARK_(seq__35977_36208__$1)){
var c__4609__auto___36209 = cljs.core.chunk_first(seq__35977_36208__$1);
var G__36210 = cljs.core.chunk_rest(seq__35977_36208__$1);
var G__36211 = c__4609__auto___36209;
var G__36212 = cljs.core.count(c__4609__auto___36209);
var G__36213 = (0);
seq__35977_36198 = G__36210;
chunk__35978_36199 = G__36211;
count__35979_36200 = G__36212;
i__35980_36201 = G__36213;
continue;
} else {
var f_36214 = cljs.core.first(seq__35977_36208__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36214], 0));


var G__36215 = cljs.core.next(seq__35977_36208__$1);
var G__36216 = null;
var G__36217 = (0);
var G__36218 = (0);
seq__35977_36198 = G__36215;
chunk__35978_36199 = G__36216;
count__35979_36200 = G__36217;
i__35980_36201 = G__36218;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36220 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36220], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36220)))?cljs.core.second(arglists_36220):arglists_36220)], 0));
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
var seq__35986_36221 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35987_36222 = null;
var count__35988_36223 = (0);
var i__35989_36224 = (0);
while(true){
if((i__35989_36224 < count__35988_36223)){
var vec__36000_36225 = chunk__35987_36222.cljs$core$IIndexed$_nth$arity$2(null,i__35989_36224);
var name_36226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36000_36225,(0),null);
var map__36003_36227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36000_36225,(1),null);
var map__36003_36228__$1 = (((((!((map__36003_36227 == null))))?(((((map__36003_36227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36003_36227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36003_36227):map__36003_36227);
var doc_36229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36003_36228__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36003_36228__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36226], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36230], 0));

if(cljs.core.truth_(doc_36229)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36229], 0));
} else {
}


var G__36231 = seq__35986_36221;
var G__36232 = chunk__35987_36222;
var G__36233 = count__35988_36223;
var G__36234 = (i__35989_36224 + (1));
seq__35986_36221 = G__36231;
chunk__35987_36222 = G__36232;
count__35988_36223 = G__36233;
i__35989_36224 = G__36234;
continue;
} else {
var temp__5735__auto___36235 = cljs.core.seq(seq__35986_36221);
if(temp__5735__auto___36235){
var seq__35986_36236__$1 = temp__5735__auto___36235;
if(cljs.core.chunked_seq_QMARK_(seq__35986_36236__$1)){
var c__4609__auto___36237 = cljs.core.chunk_first(seq__35986_36236__$1);
var G__36238 = cljs.core.chunk_rest(seq__35986_36236__$1);
var G__36239 = c__4609__auto___36237;
var G__36240 = cljs.core.count(c__4609__auto___36237);
var G__36241 = (0);
seq__35986_36221 = G__36238;
chunk__35987_36222 = G__36239;
count__35988_36223 = G__36240;
i__35989_36224 = G__36241;
continue;
} else {
var vec__36005_36242 = cljs.core.first(seq__35986_36236__$1);
var name_36243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36005_36242,(0),null);
var map__36008_36244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36005_36242,(1),null);
var map__36008_36245__$1 = (((((!((map__36008_36244 == null))))?(((((map__36008_36244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36008_36244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36008_36244):map__36008_36244);
var doc_36246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36008_36245__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36008_36245__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36243], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36247], 0));

if(cljs.core.truth_(doc_36246)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36246], 0));
} else {
}


var G__36248 = cljs.core.next(seq__35986_36236__$1);
var G__36249 = null;
var G__36250 = (0);
var G__36251 = (0);
seq__35986_36221 = G__36248;
chunk__35987_36222 = G__36249;
count__35988_36223 = G__36250;
i__35989_36224 = G__36251;
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

var seq__36012 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36013 = null;
var count__36014 = (0);
var i__36015 = (0);
while(true){
if((i__36015 < count__36014)){
var role = chunk__36013.cljs$core$IIndexed$_nth$arity$2(null,i__36015);
var temp__5735__auto___36253__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36253__$1)){
var spec_36254 = temp__5735__auto___36253__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36254)], 0));
} else {
}


var G__36255 = seq__36012;
var G__36256 = chunk__36013;
var G__36257 = count__36014;
var G__36259 = (i__36015 + (1));
seq__36012 = G__36255;
chunk__36013 = G__36256;
count__36014 = G__36257;
i__36015 = G__36259;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36012);
if(temp__5735__auto____$1){
var seq__36012__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36012__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36012__$1);
var G__36260 = cljs.core.chunk_rest(seq__36012__$1);
var G__36261 = c__4609__auto__;
var G__36262 = cljs.core.count(c__4609__auto__);
var G__36263 = (0);
seq__36012 = G__36260;
chunk__36013 = G__36261;
count__36014 = G__36262;
i__36015 = G__36263;
continue;
} else {
var role = cljs.core.first(seq__36012__$1);
var temp__5735__auto___36264__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36264__$2)){
var spec_36265 = temp__5735__auto___36264__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36265)], 0));
} else {
}


var G__36266 = cljs.core.next(seq__36012__$1);
var G__36267 = null;
var G__36268 = (0);
var G__36269 = (0);
seq__36012 = G__36266;
chunk__36013 = G__36267;
count__36014 = G__36268;
i__36015 = G__36269;
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
var G__36271 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36272 = cljs.core.ex_cause(t);
via = G__36271;
t = G__36272;
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
var map__36029 = datafied_throwable;
var map__36029__$1 = (((((!((map__36029 == null))))?(((((map__36029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36029):map__36029);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36029__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36029__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36029__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36030 = cljs.core.last(via);
var map__36030__$1 = (((((!((map__36030 == null))))?(((((map__36030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36030):map__36030);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36030__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36030__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36030__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36031 = data;
var map__36031__$1 = (((((!((map__36031 == null))))?(((((map__36031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36031):map__36031);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36031__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36031__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36031__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36032 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36032__$1 = (((((!((map__36032 == null))))?(((((map__36032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36032):map__36032);
var top_data = map__36032__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36032__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36037 = phase;
var G__36037__$1 = (((G__36037 instanceof cljs.core.Keyword))?G__36037.fqn:null);
switch (G__36037__$1) {
case "read-source":
var map__36038 = data;
var map__36038__$1 = (((((!((map__36038 == null))))?(((((map__36038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36038):map__36038);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36038__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36038__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36040 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36040__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36040,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36040);
var G__36040__$2 = (cljs.core.truth_((function (){var fexpr__36041 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36041.cljs$core$IFn$_invoke$arity$1 ? fexpr__36041.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36041.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36040__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36040__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36040__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36040__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36042 = top_data;
var G__36042__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36042,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36042);
var G__36042__$2 = (cljs.core.truth_((function (){var fexpr__36043 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36043.cljs$core$IFn$_invoke$arity$1 ? fexpr__36043.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36043.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36042__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36042__$1);
var G__36042__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36042__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36042__$2);
var G__36042__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36042__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36042__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36042__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36042__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36044 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36044,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36044,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36044,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36044,(3),null);
var G__36051 = top_data;
var G__36051__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36051,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36051);
var G__36051__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36051__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36051__$1);
var G__36051__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36051__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36051__$2);
var G__36051__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36051__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36051__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36051__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36051__$4;
}

break;
case "execution":
var vec__36065 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36065,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36065,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36065,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36065,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36027_SHARP_){
var or__4185__auto__ = (p1__36027_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__36070 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36070.cljs$core$IFn$_invoke$arity$1 ? fexpr__36070.cljs$core$IFn$_invoke$arity$1(p1__36027_SHARP_) : fexpr__36070.call(null,p1__36027_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__36071 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36071__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36071,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36071);
var G__36071__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36071__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36071__$1);
var G__36071__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36071__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36071__$2);
var G__36071__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36071__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36071__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36071__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36071__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36037__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36106){
var map__36109 = p__36106;
var map__36109__$1 = (((((!((map__36109 == null))))?(((((map__36109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36109):map__36109);
var triage_data = map__36109__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36109__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36109__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36109__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36109__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36109__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36109__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36109__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36109__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__36133 = phase;
var G__36133__$1 = (((G__36133 instanceof cljs.core.Keyword))?G__36133.fqn:null);
switch (G__36133__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36134 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36135 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36136 = loc;
var G__36137 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36138_36290 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36139_36291 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36140_36292 = true;
var _STAR_print_fn_STAR__temp_val__36141_36293 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36140_36292);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36141_36293);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36094_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36094_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36139_36291);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36138_36290);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36134,G__36135,G__36136,G__36137) : format.call(null,G__36134,G__36135,G__36136,G__36137));

break;
case "macroexpansion":
var G__36156 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36157 = cause_type;
var G__36158 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36159 = loc;
var G__36160 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36156,G__36157,G__36158,G__36159,G__36160) : format.call(null,G__36156,G__36157,G__36158,G__36159,G__36160));

break;
case "compile-syntax-check":
var G__36161 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36162 = cause_type;
var G__36163 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36164 = loc;
var G__36165 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36161,G__36162,G__36163,G__36164,G__36165) : format.call(null,G__36161,G__36162,G__36163,G__36164,G__36165));

break;
case "compilation":
var G__36166 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36167 = cause_type;
var G__36168 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36169 = loc;
var G__36171 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36166,G__36167,G__36168,G__36169,G__36171) : format.call(null,G__36166,G__36167,G__36168,G__36169,G__36171));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36179 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36180 = symbol;
var G__36181 = loc;
var G__36182 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36183_36294 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36184_36295 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36185_36296 = true;
var _STAR_print_fn_STAR__temp_val__36186_36297 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36185_36296);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36186_36297);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36095_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36095_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36184_36295);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36183_36294);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36179,G__36180,G__36181,G__36182) : format.call(null,G__36179,G__36180,G__36181,G__36182));
} else {
var G__36191 = "Execution error%s at %s(%s).\n%s\n";
var G__36192 = cause_type;
var G__36193 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36194 = loc;
var G__36195 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36191,G__36192,G__36193,G__36194,G__36195) : format.call(null,G__36191,G__36192,G__36193,G__36194,G__36195));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36133__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
