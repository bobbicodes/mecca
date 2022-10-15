goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35996){
var map__35997 = p__35996;
var map__35997__$1 = (((((!((map__35997 == null))))?(((((map__35997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35997):map__35997);
var m = map__35997__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35997__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35997__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35999_36216 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36000_36217 = null;
var count__36001_36218 = (0);
var i__36002_36219 = (0);
while(true){
if((i__36002_36219 < count__36001_36218)){
var f_36220 = chunk__36000_36217.cljs$core$IIndexed$_nth$arity$2(null,i__36002_36219);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36220], 0));


var G__36221 = seq__35999_36216;
var G__36222 = chunk__36000_36217;
var G__36223 = count__36001_36218;
var G__36224 = (i__36002_36219 + (1));
seq__35999_36216 = G__36221;
chunk__36000_36217 = G__36222;
count__36001_36218 = G__36223;
i__36002_36219 = G__36224;
continue;
} else {
var temp__5735__auto___36225 = cljs.core.seq(seq__35999_36216);
if(temp__5735__auto___36225){
var seq__35999_36226__$1 = temp__5735__auto___36225;
if(cljs.core.chunked_seq_QMARK_(seq__35999_36226__$1)){
var c__4609__auto___36227 = cljs.core.chunk_first(seq__35999_36226__$1);
var G__36228 = cljs.core.chunk_rest(seq__35999_36226__$1);
var G__36229 = c__4609__auto___36227;
var G__36230 = cljs.core.count(c__4609__auto___36227);
var G__36231 = (0);
seq__35999_36216 = G__36228;
chunk__36000_36217 = G__36229;
count__36001_36218 = G__36230;
i__36002_36219 = G__36231;
continue;
} else {
var f_36232 = cljs.core.first(seq__35999_36226__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36232], 0));


var G__36233 = cljs.core.next(seq__35999_36226__$1);
var G__36234 = null;
var G__36235 = (0);
var G__36236 = (0);
seq__35999_36216 = G__36233;
chunk__36000_36217 = G__36234;
count__36001_36218 = G__36235;
i__36002_36219 = G__36236;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36237 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36237], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36237)))?cljs.core.second(arglists_36237):arglists_36237)], 0));
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
var seq__36008_36239 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36009_36240 = null;
var count__36010_36241 = (0);
var i__36011_36242 = (0);
while(true){
if((i__36011_36242 < count__36010_36241)){
var vec__36022_36243 = chunk__36009_36240.cljs$core$IIndexed$_nth$arity$2(null,i__36011_36242);
var name_36244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36022_36243,(0),null);
var map__36025_36245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36022_36243,(1),null);
var map__36025_36246__$1 = (((((!((map__36025_36245 == null))))?(((((map__36025_36245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36025_36245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36025_36245):map__36025_36245);
var doc_36247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36025_36246__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36025_36246__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36244], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36248], 0));

if(cljs.core.truth_(doc_36247)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36247], 0));
} else {
}


var G__36252 = seq__36008_36239;
var G__36253 = chunk__36009_36240;
var G__36254 = count__36010_36241;
var G__36255 = (i__36011_36242 + (1));
seq__36008_36239 = G__36252;
chunk__36009_36240 = G__36253;
count__36010_36241 = G__36254;
i__36011_36242 = G__36255;
continue;
} else {
var temp__5735__auto___36256 = cljs.core.seq(seq__36008_36239);
if(temp__5735__auto___36256){
var seq__36008_36257__$1 = temp__5735__auto___36256;
if(cljs.core.chunked_seq_QMARK_(seq__36008_36257__$1)){
var c__4609__auto___36258 = cljs.core.chunk_first(seq__36008_36257__$1);
var G__36259 = cljs.core.chunk_rest(seq__36008_36257__$1);
var G__36260 = c__4609__auto___36258;
var G__36261 = cljs.core.count(c__4609__auto___36258);
var G__36262 = (0);
seq__36008_36239 = G__36259;
chunk__36009_36240 = G__36260;
count__36010_36241 = G__36261;
i__36011_36242 = G__36262;
continue;
} else {
var vec__36044_36264 = cljs.core.first(seq__36008_36257__$1);
var name_36265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36044_36264,(0),null);
var map__36047_36266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36044_36264,(1),null);
var map__36047_36267__$1 = (((((!((map__36047_36266 == null))))?(((((map__36047_36266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36047_36266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36047_36266):map__36047_36266);
var doc_36268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36047_36267__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36047_36267__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36265], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36269], 0));

if(cljs.core.truth_(doc_36268)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36268], 0));
} else {
}


var G__36270 = cljs.core.next(seq__36008_36257__$1);
var G__36271 = null;
var G__36272 = (0);
var G__36273 = (0);
seq__36008_36239 = G__36270;
chunk__36009_36240 = G__36271;
count__36010_36241 = G__36272;
i__36011_36242 = G__36273;
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

var seq__36053 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36054 = null;
var count__36055 = (0);
var i__36056 = (0);
while(true){
if((i__36056 < count__36055)){
var role = chunk__36054.cljs$core$IIndexed$_nth$arity$2(null,i__36056);
var temp__5735__auto___36274__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36274__$1)){
var spec_36275 = temp__5735__auto___36274__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36275)], 0));
} else {
}


var G__36276 = seq__36053;
var G__36277 = chunk__36054;
var G__36278 = count__36055;
var G__36279 = (i__36056 + (1));
seq__36053 = G__36276;
chunk__36054 = G__36277;
count__36055 = G__36278;
i__36056 = G__36279;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36053);
if(temp__5735__auto____$1){
var seq__36053__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36053__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36053__$1);
var G__36280 = cljs.core.chunk_rest(seq__36053__$1);
var G__36281 = c__4609__auto__;
var G__36282 = cljs.core.count(c__4609__auto__);
var G__36283 = (0);
seq__36053 = G__36280;
chunk__36054 = G__36281;
count__36055 = G__36282;
i__36056 = G__36283;
continue;
} else {
var role = cljs.core.first(seq__36053__$1);
var temp__5735__auto___36284__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36284__$2)){
var spec_36285 = temp__5735__auto___36284__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36285)], 0));
} else {
}


var G__36286 = cljs.core.next(seq__36053__$1);
var G__36287 = null;
var G__36288 = (0);
var G__36289 = (0);
seq__36053 = G__36286;
chunk__36054 = G__36287;
count__36055 = G__36288;
i__36056 = G__36289;
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
var G__36291 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36292 = cljs.core.ex_cause(t);
via = G__36291;
t = G__36292;
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
var map__36128 = datafied_throwable;
var map__36128__$1 = (((((!((map__36128 == null))))?(((((map__36128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36128):map__36128);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36128__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36128__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36128__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36129 = cljs.core.last(via);
var map__36129__$1 = (((((!((map__36129 == null))))?(((((map__36129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36129):map__36129);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36129__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36129__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36129__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36130 = data;
var map__36130__$1 = (((((!((map__36130 == null))))?(((((map__36130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36130):map__36130);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36130__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36130__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36130__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36131 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36131__$1 = (((((!((map__36131 == null))))?(((((map__36131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36131):map__36131);
var top_data = map__36131__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36131__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36144 = phase;
var G__36144__$1 = (((G__36144 instanceof cljs.core.Keyword))?G__36144.fqn:null);
switch (G__36144__$1) {
case "read-source":
var map__36145 = data;
var map__36145__$1 = (((((!((map__36145 == null))))?(((((map__36145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36145):map__36145);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36145__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36145__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36147 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36147__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36147,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36147);
var G__36147__$2 = (cljs.core.truth_((function (){var fexpr__36149 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36149.cljs$core$IFn$_invoke$arity$1 ? fexpr__36149.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36149.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36147__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36147__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36147__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36147__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36150 = top_data;
var G__36150__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36150,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36150);
var G__36150__$2 = (cljs.core.truth_((function (){var fexpr__36151 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36151.cljs$core$IFn$_invoke$arity$1 ? fexpr__36151.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36151.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36150__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36150__$1);
var G__36150__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36150__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36150__$2);
var G__36150__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36150__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36150__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36150__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36150__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36152 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36152,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36152,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36152,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36152,(3),null);
var G__36155 = top_data;
var G__36155__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36155,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36155);
var G__36155__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36155__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36155__$1);
var G__36155__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36155__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36155__$2);
var G__36155__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36155__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36155__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36155__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36155__$4;
}

break;
case "execution":
var vec__36157 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36157,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36157,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36157,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36157,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36122_SHARP_){
var or__4185__auto__ = (p1__36122_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__36161 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36161.cljs$core$IFn$_invoke$arity$1 ? fexpr__36161.cljs$core$IFn$_invoke$arity$1(p1__36122_SHARP_) : fexpr__36161.call(null,p1__36122_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__36162 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36162__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36162,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36162);
var G__36162__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36162__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36162__$1);
var G__36162__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36162__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36162__$2);
var G__36162__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36162__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36162__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36162__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36162__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36144__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36170){
var map__36171 = p__36170;
var map__36171__$1 = (((((!((map__36171 == null))))?(((((map__36171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36171):map__36171);
var triage_data = map__36171__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36171__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36171__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36171__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36171__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36171__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36171__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36171__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36171__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__36174 = phase;
var G__36174__$1 = (((G__36174 instanceof cljs.core.Keyword))?G__36174.fqn:null);
switch (G__36174__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36176 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36177 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36178 = loc;
var G__36179 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36180_36311 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36181_36312 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36182_36313 = true;
var _STAR_print_fn_STAR__temp_val__36183_36314 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36182_36313);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36183_36314);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36168_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36168_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36181_36312);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36180_36311);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36176,G__36177,G__36178,G__36179) : format.call(null,G__36176,G__36177,G__36178,G__36179));

break;
case "macroexpansion":
var G__36184 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36185 = cause_type;
var G__36186 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36187 = loc;
var G__36188 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36184,G__36185,G__36186,G__36187,G__36188) : format.call(null,G__36184,G__36185,G__36186,G__36187,G__36188));

break;
case "compile-syntax-check":
var G__36189 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36190 = cause_type;
var G__36191 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36192 = loc;
var G__36193 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36189,G__36190,G__36191,G__36192,G__36193) : format.call(null,G__36189,G__36190,G__36191,G__36192,G__36193));

break;
case "compilation":
var G__36194 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36195 = cause_type;
var G__36196 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36197 = loc;
var G__36198 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36194,G__36195,G__36196,G__36197,G__36198) : format.call(null,G__36194,G__36195,G__36196,G__36197,G__36198));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36199 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36200 = symbol;
var G__36201 = loc;
var G__36202 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36203_36315 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36204_36316 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36205_36317 = true;
var _STAR_print_fn_STAR__temp_val__36206_36318 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36205_36317);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36206_36318);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36169_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36169_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36204_36316);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36203_36315);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36199,G__36200,G__36201,G__36202) : format.call(null,G__36199,G__36200,G__36201,G__36202));
} else {
var G__36208 = "Execution error%s at %s(%s).\n%s\n";
var G__36209 = cause_type;
var G__36210 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36211 = loc;
var G__36212 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36208,G__36209,G__36210,G__36211,G__36212) : format.call(null,G__36208,G__36209,G__36210,G__36211,G__36212));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36174__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
