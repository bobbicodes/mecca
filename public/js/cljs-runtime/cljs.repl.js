goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41801){
var map__41802 = p__41801;
var map__41802__$1 = (((((!((map__41802 == null))))?(((((map__41802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41802):map__41802);
var m = map__41802__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41802__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41802__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__41821_42015 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41822_42016 = null;
var count__41823_42017 = (0);
var i__41824_42018 = (0);
while(true){
if((i__41824_42018 < count__41823_42017)){
var f_42019 = chunk__41822_42016.cljs$core$IIndexed$_nth$arity$2(null,i__41824_42018);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42019], 0));


var G__42020 = seq__41821_42015;
var G__42021 = chunk__41822_42016;
var G__42022 = count__41823_42017;
var G__42023 = (i__41824_42018 + (1));
seq__41821_42015 = G__42020;
chunk__41822_42016 = G__42021;
count__41823_42017 = G__42022;
i__41824_42018 = G__42023;
continue;
} else {
var temp__5735__auto___42024 = cljs.core.seq(seq__41821_42015);
if(temp__5735__auto___42024){
var seq__41821_42025__$1 = temp__5735__auto___42024;
if(cljs.core.chunked_seq_QMARK_(seq__41821_42025__$1)){
var c__4609__auto___42026 = cljs.core.chunk_first(seq__41821_42025__$1);
var G__42027 = cljs.core.chunk_rest(seq__41821_42025__$1);
var G__42028 = c__4609__auto___42026;
var G__42029 = cljs.core.count(c__4609__auto___42026);
var G__42030 = (0);
seq__41821_42015 = G__42027;
chunk__41822_42016 = G__42028;
count__41823_42017 = G__42029;
i__41824_42018 = G__42030;
continue;
} else {
var f_42031 = cljs.core.first(seq__41821_42025__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42031], 0));


var G__42032 = cljs.core.next(seq__41821_42025__$1);
var G__42033 = null;
var G__42034 = (0);
var G__42035 = (0);
seq__41821_42015 = G__42032;
chunk__41822_42016 = G__42033;
count__41823_42017 = G__42034;
i__41824_42018 = G__42035;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42036 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_42036], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_42036)))?cljs.core.second(arglists_42036):arglists_42036)], 0));
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
var seq__41846_42037 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41847_42038 = null;
var count__41848_42039 = (0);
var i__41849_42040 = (0);
while(true){
if((i__41849_42040 < count__41848_42039)){
var vec__41891_42041 = chunk__41847_42038.cljs$core$IIndexed$_nth$arity$2(null,i__41849_42040);
var name_42042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41891_42041,(0),null);
var map__41894_42043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41891_42041,(1),null);
var map__41894_42044__$1 = (((((!((map__41894_42043 == null))))?(((((map__41894_42043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41894_42043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41894_42043):map__41894_42043);
var doc_42045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41894_42044__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41894_42044__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_42042], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_42046], 0));

if(cljs.core.truth_(doc_42045)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_42045], 0));
} else {
}


var G__42048 = seq__41846_42037;
var G__42049 = chunk__41847_42038;
var G__42050 = count__41848_42039;
var G__42051 = (i__41849_42040 + (1));
seq__41846_42037 = G__42048;
chunk__41847_42038 = G__42049;
count__41848_42039 = G__42050;
i__41849_42040 = G__42051;
continue;
} else {
var temp__5735__auto___42052 = cljs.core.seq(seq__41846_42037);
if(temp__5735__auto___42052){
var seq__41846_42053__$1 = temp__5735__auto___42052;
if(cljs.core.chunked_seq_QMARK_(seq__41846_42053__$1)){
var c__4609__auto___42054 = cljs.core.chunk_first(seq__41846_42053__$1);
var G__42055 = cljs.core.chunk_rest(seq__41846_42053__$1);
var G__42056 = c__4609__auto___42054;
var G__42057 = cljs.core.count(c__4609__auto___42054);
var G__42058 = (0);
seq__41846_42037 = G__42055;
chunk__41847_42038 = G__42056;
count__41848_42039 = G__42057;
i__41849_42040 = G__42058;
continue;
} else {
var vec__41902_42059 = cljs.core.first(seq__41846_42053__$1);
var name_42060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41902_42059,(0),null);
var map__41905_42061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41902_42059,(1),null);
var map__41905_42062__$1 = (((((!((map__41905_42061 == null))))?(((((map__41905_42061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41905_42061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41905_42061):map__41905_42061);
var doc_42063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41905_42062__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41905_42062__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_42060], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_42064], 0));

if(cljs.core.truth_(doc_42063)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_42063], 0));
} else {
}


var G__42065 = cljs.core.next(seq__41846_42053__$1);
var G__42066 = null;
var G__42067 = (0);
var G__42068 = (0);
seq__41846_42037 = G__42065;
chunk__41847_42038 = G__42066;
count__41848_42039 = G__42067;
i__41849_42040 = G__42068;
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

var seq__41927 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41928 = null;
var count__41929 = (0);
var i__41930 = (0);
while(true){
if((i__41930 < count__41929)){
var role = chunk__41928.cljs$core$IIndexed$_nth$arity$2(null,i__41930);
var temp__5735__auto___42069__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___42069__$1)){
var spec_42070 = temp__5735__auto___42069__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_42070)], 0));
} else {
}


var G__42071 = seq__41927;
var G__42072 = chunk__41928;
var G__42073 = count__41929;
var G__42074 = (i__41930 + (1));
seq__41927 = G__42071;
chunk__41928 = G__42072;
count__41929 = G__42073;
i__41930 = G__42074;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__41927);
if(temp__5735__auto____$1){
var seq__41927__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__41927__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41927__$1);
var G__42075 = cljs.core.chunk_rest(seq__41927__$1);
var G__42076 = c__4609__auto__;
var G__42077 = cljs.core.count(c__4609__auto__);
var G__42078 = (0);
seq__41927 = G__42075;
chunk__41928 = G__42076;
count__41929 = G__42077;
i__41930 = G__42078;
continue;
} else {
var role = cljs.core.first(seq__41927__$1);
var temp__5735__auto___42079__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___42079__$2)){
var spec_42080 = temp__5735__auto___42079__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_42080)], 0));
} else {
}


var G__42081 = cljs.core.next(seq__41927__$1);
var G__42082 = null;
var G__42083 = (0);
var G__42084 = (0);
seq__41927 = G__42081;
chunk__41928 = G__42082;
count__41929 = G__42083;
i__41930 = G__42084;
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
var G__42085 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__42086 = cljs.core.ex_cause(t);
via = G__42085;
t = G__42086;
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
var map__41938 = datafied_throwable;
var map__41938__$1 = (((((!((map__41938 == null))))?(((((map__41938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41938):map__41938);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41938__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41938__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41938__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__41939 = cljs.core.last(via);
var map__41939__$1 = (((((!((map__41939 == null))))?(((((map__41939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41939):map__41939);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41939__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41939__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41939__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__41940 = data;
var map__41940__$1 = (((((!((map__41940 == null))))?(((((map__41940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41940):map__41940);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41940__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41940__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41940__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__41941 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__41941__$1 = (((((!((map__41941 == null))))?(((((map__41941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41941):map__41941);
var top_data = map__41941__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41941__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__41947 = phase;
var G__41947__$1 = (((G__41947 instanceof cljs.core.Keyword))?G__41947.fqn:null);
switch (G__41947__$1) {
case "read-source":
var map__41948 = data;
var map__41948__$1 = (((((!((map__41948 == null))))?(((((map__41948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41948):map__41948);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41948__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41948__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__41950 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__41950__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41950,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__41950);
var G__41950__$2 = (cljs.core.truth_((function (){var fexpr__41951 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41951.cljs$core$IFn$_invoke$arity$1 ? fexpr__41951.cljs$core$IFn$_invoke$arity$1(source) : fexpr__41951.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41950__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__41950__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41950__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41950__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__41952 = top_data;
var G__41952__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41952,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__41952);
var G__41952__$2 = (cljs.core.truth_((function (){var fexpr__41953 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41953.cljs$core$IFn$_invoke$arity$1 ? fexpr__41953.cljs$core$IFn$_invoke$arity$1(source) : fexpr__41953.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41952__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__41952__$1);
var G__41952__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41952__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41952__$2);
var G__41952__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41952__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41952__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41952__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41952__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__41954 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41954,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41954,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41954,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41954,(3),null);
var G__41957 = top_data;
var G__41957__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41957,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__41957);
var G__41957__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41957__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__41957__$1);
var G__41957__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41957__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__41957__$2);
var G__41957__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41957__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41957__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41957__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41957__$4;
}

break;
case "execution":
var vec__41958 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41958,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41958,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41958,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41958,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__41937_SHARP_){
var or__4185__auto__ = (p1__41937_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__41962 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41962.cljs$core$IFn$_invoke$arity$1 ? fexpr__41962.cljs$core$IFn$_invoke$arity$1(p1__41937_SHARP_) : fexpr__41962.call(null,p1__41937_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__41965 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__41965__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41965,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__41965);
var G__41965__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41965__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41965__$1);
var G__41965__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41965__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__41965__$2);
var G__41965__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41965__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__41965__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41965__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41965__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41947__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__41974){
var map__41975 = p__41974;
var map__41975__$1 = (((((!((map__41975 == null))))?(((((map__41975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41975):map__41975);
var triage_data = map__41975__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41975__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41975__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41975__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41975__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41975__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41975__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41975__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41975__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__41977 = phase;
var G__41977__$1 = (((G__41977 instanceof cljs.core.Keyword))?G__41977.fqn:null);
switch (G__41977__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__41978 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__41979 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41980 = loc;
var G__41981 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41982_42115 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41983_42116 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41984_42117 = true;
var _STAR_print_fn_STAR__temp_val__41985_42118 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41984_42117);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41985_42118);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41972_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41972_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41983_42116);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41982_42115);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__41978,G__41979,G__41980,G__41981) : format.call(null,G__41978,G__41979,G__41980,G__41981));

break;
case "macroexpansion":
var G__41986 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__41987 = cause_type;
var G__41988 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41989 = loc;
var G__41990 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41986,G__41987,G__41988,G__41989,G__41990) : format.call(null,G__41986,G__41987,G__41988,G__41989,G__41990));

break;
case "compile-syntax-check":
var G__41991 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__41992 = cause_type;
var G__41993 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41994 = loc;
var G__41995 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41991,G__41992,G__41993,G__41994,G__41995) : format.call(null,G__41991,G__41992,G__41993,G__41994,G__41995));

break;
case "compilation":
var G__41996 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__41997 = cause_type;
var G__41998 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41999 = loc;
var G__42000 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41996,G__41997,G__41998,G__41999,G__42000) : format.call(null,G__41996,G__41997,G__41998,G__41999,G__42000));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__42001 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__42002 = symbol;
var G__42003 = loc;
var G__42004 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42005_42119 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42006_42120 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42007_42121 = true;
var _STAR_print_fn_STAR__temp_val__42008_42122 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42007_42121);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42008_42122);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41973_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41973_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42006_42120);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42005_42119);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__42001,G__42002,G__42003,G__42004) : format.call(null,G__42001,G__42002,G__42003,G__42004));
} else {
var G__42009 = "Execution error%s at %s(%s).\n%s\n";
var G__42010 = cause_type;
var G__42011 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42012 = loc;
var G__42013 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42009,G__42010,G__42011,G__42012,G__42013) : format.call(null,G__42009,G__42010,G__42011,G__42012,G__42013));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41977__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
