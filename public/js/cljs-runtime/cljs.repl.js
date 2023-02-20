goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__52852){
var map__52853 = p__52852;
var map__52853__$1 = cljs.core.__destructure_map(map__52853);
var m = map__52853__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52853__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52853__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__52854_53122 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52855_53123 = null;
var count__52856_53124 = (0);
var i__52857_53125 = (0);
while(true){
if((i__52857_53125 < count__52856_53124)){
var f_53130 = chunk__52855_53123.cljs$core$IIndexed$_nth$arity$2(null,i__52857_53125);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53130], 0));


var G__53131 = seq__52854_53122;
var G__53132 = chunk__52855_53123;
var G__53133 = count__52856_53124;
var G__53134 = (i__52857_53125 + (1));
seq__52854_53122 = G__53131;
chunk__52855_53123 = G__53132;
count__52856_53124 = G__53133;
i__52857_53125 = G__53134;
continue;
} else {
var temp__5753__auto___53135 = cljs.core.seq(seq__52854_53122);
if(temp__5753__auto___53135){
var seq__52854_53136__$1 = temp__5753__auto___53135;
if(cljs.core.chunked_seq_QMARK_(seq__52854_53136__$1)){
var c__4649__auto___53137 = cljs.core.chunk_first(seq__52854_53136__$1);
var G__53138 = cljs.core.chunk_rest(seq__52854_53136__$1);
var G__53139 = c__4649__auto___53137;
var G__53140 = cljs.core.count(c__4649__auto___53137);
var G__53141 = (0);
seq__52854_53122 = G__53138;
chunk__52855_53123 = G__53139;
count__52856_53124 = G__53140;
i__52857_53125 = G__53141;
continue;
} else {
var f_53142 = cljs.core.first(seq__52854_53136__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53142], 0));


var G__53143 = cljs.core.next(seq__52854_53136__$1);
var G__53144 = null;
var G__53145 = (0);
var G__53146 = (0);
seq__52854_53122 = G__53143;
chunk__52855_53123 = G__53144;
count__52856_53124 = G__53145;
i__52857_53125 = G__53146;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53147 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_53147], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_53147)))?cljs.core.second(arglists_53147):arglists_53147)], 0));
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
var seq__52863_53148 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52864_53149 = null;
var count__52865_53150 = (0);
var i__52866_53151 = (0);
while(true){
if((i__52866_53151 < count__52865_53150)){
var vec__52878_53156 = chunk__52864_53149.cljs$core$IIndexed$_nth$arity$2(null,i__52866_53151);
var name_53157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52878_53156,(0),null);
var map__52881_53158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52878_53156,(1),null);
var map__52881_53159__$1 = cljs.core.__destructure_map(map__52881_53158);
var doc_53160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52881_53159__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52881_53159__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53157], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53161], 0));

if(cljs.core.truth_(doc_53160)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53160], 0));
} else {
}


var G__53164 = seq__52863_53148;
var G__53165 = chunk__52864_53149;
var G__53166 = count__52865_53150;
var G__53167 = (i__52866_53151 + (1));
seq__52863_53148 = G__53164;
chunk__52864_53149 = G__53165;
count__52865_53150 = G__53166;
i__52866_53151 = G__53167;
continue;
} else {
var temp__5753__auto___53168 = cljs.core.seq(seq__52863_53148);
if(temp__5753__auto___53168){
var seq__52863_53169__$1 = temp__5753__auto___53168;
if(cljs.core.chunked_seq_QMARK_(seq__52863_53169__$1)){
var c__4649__auto___53170 = cljs.core.chunk_first(seq__52863_53169__$1);
var G__53171 = cljs.core.chunk_rest(seq__52863_53169__$1);
var G__53172 = c__4649__auto___53170;
var G__53173 = cljs.core.count(c__4649__auto___53170);
var G__53174 = (0);
seq__52863_53148 = G__53171;
chunk__52864_53149 = G__53172;
count__52865_53150 = G__53173;
i__52866_53151 = G__53174;
continue;
} else {
var vec__52882_53179 = cljs.core.first(seq__52863_53169__$1);
var name_53180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52882_53179,(0),null);
var map__52885_53181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52882_53179,(1),null);
var map__52885_53182__$1 = cljs.core.__destructure_map(map__52885_53181);
var doc_53183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52885_53182__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52885_53182__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53180], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53184], 0));

if(cljs.core.truth_(doc_53183)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53183], 0));
} else {
}


var G__53185 = cljs.core.next(seq__52863_53169__$1);
var G__53186 = null;
var G__53187 = (0);
var G__53188 = (0);
seq__52863_53148 = G__53185;
chunk__52864_53149 = G__53186;
count__52865_53150 = G__53187;
i__52866_53151 = G__53188;
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

var seq__52936 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__52937 = null;
var count__52938 = (0);
var i__52939 = (0);
while(true){
if((i__52939 < count__52938)){
var role = chunk__52937.cljs$core$IIndexed$_nth$arity$2(null,i__52939);
var temp__5753__auto___53189__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___53189__$1)){
var spec_53190 = temp__5753__auto___53189__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53190)], 0));
} else {
}


var G__53191 = seq__52936;
var G__53192 = chunk__52937;
var G__53193 = count__52938;
var G__53194 = (i__52939 + (1));
seq__52936 = G__53191;
chunk__52937 = G__53192;
count__52938 = G__53193;
i__52939 = G__53194;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__52936);
if(temp__5753__auto____$1){
var seq__52936__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__52936__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__52936__$1);
var G__53197 = cljs.core.chunk_rest(seq__52936__$1);
var G__53198 = c__4649__auto__;
var G__53199 = cljs.core.count(c__4649__auto__);
var G__53200 = (0);
seq__52936 = G__53197;
chunk__52937 = G__53198;
count__52938 = G__53199;
i__52939 = G__53200;
continue;
} else {
var role = cljs.core.first(seq__52936__$1);
var temp__5753__auto___53201__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___53201__$2)){
var spec_53202 = temp__5753__auto___53201__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53202)], 0));
} else {
}


var G__53203 = cljs.core.next(seq__52936__$1);
var G__53204 = null;
var G__53205 = (0);
var G__53206 = (0);
seq__52936 = G__53203;
chunk__52937 = G__53204;
count__52938 = G__53205;
i__52939 = G__53206;
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
var G__53208 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__53209 = cljs.core.ex_cause(t);
via = G__53208;
t = G__53209;
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
var map__52997 = datafied_throwable;
var map__52997__$1 = cljs.core.__destructure_map(map__52997);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52997__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52997__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52997__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__52998 = cljs.core.last(via);
var map__52998__$1 = cljs.core.__destructure_map(map__52998);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52998__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52998__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52998__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__52999 = data;
var map__52999__$1 = cljs.core.__destructure_map(map__52999);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52999__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52999__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52999__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__53000 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__53000__$1 = cljs.core.__destructure_map(map__53000);
var top_data = map__53000__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53000__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__53019 = phase;
var G__53019__$1 = (((G__53019 instanceof cljs.core.Keyword))?G__53019.fqn:null);
switch (G__53019__$1) {
case "read-source":
var map__53027 = data;
var map__53027__$1 = cljs.core.__destructure_map(map__53027);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53027__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53027__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__53028 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__53028__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53028,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53028);
var G__53028__$2 = (cljs.core.truth_((function (){var fexpr__53033 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53033.cljs$core$IFn$_invoke$arity$1 ? fexpr__53033.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53033.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53028__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53028__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53028__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53028__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__53034 = top_data;
var G__53034__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53034,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53034);
var G__53034__$2 = (cljs.core.truth_((function (){var fexpr__53039 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53039.cljs$core$IFn$_invoke$arity$1 ? fexpr__53039.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53039.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53034__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53034__$1);
var G__53034__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53034__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53034__$2);
var G__53034__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53034__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53034__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53034__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53034__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__53040 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53040,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53040,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53040,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53040,(3),null);
var G__53043 = top_data;
var G__53043__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53043,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__53043);
var G__53043__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53043__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__53043__$1);
var G__53043__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53043__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__53043__$2);
var G__53043__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53043__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53043__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53043__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53043__$4;
}

break;
case "execution":
var vec__53044 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53044,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53044,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53044,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53044,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__52963_SHARP_){
var or__4223__auto__ = (p1__52963_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__53047 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53047.cljs$core$IFn$_invoke$arity$1 ? fexpr__53047.cljs$core$IFn$_invoke$arity$1(p1__52963_SHARP_) : fexpr__53047.call(null,p1__52963_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__53048 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__53048__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53048,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__53048);
var G__53048__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53048__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53048__$1);
var G__53048__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53048__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__53048__$2);
var G__53048__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53048__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__53048__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53048__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53048__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53019__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__53052){
var map__53053 = p__53052;
var map__53053__$1 = cljs.core.__destructure_map(map__53053);
var triage_data = map__53053__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53053__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53053__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53053__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53053__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53053__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53053__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53053__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53053__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__53056 = phase;
var G__53056__$1 = (((G__53056 instanceof cljs.core.Keyword))?G__53056.fqn:null);
switch (G__53056__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__53057 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__53058 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53059 = loc;
var G__53060 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53061_53249 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53062_53250 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53063_53251 = true;
var _STAR_print_fn_STAR__temp_val__53064_53252 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53063_53251);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53064_53252);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53050_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53050_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53062_53250);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53061_53249);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53057,G__53058,G__53059,G__53060) : format.call(null,G__53057,G__53058,G__53059,G__53060));

break;
case "macroexpansion":
var G__53066 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__53067 = cause_type;
var G__53068 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53069 = loc;
var G__53070 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53066,G__53067,G__53068,G__53069,G__53070) : format.call(null,G__53066,G__53067,G__53068,G__53069,G__53070));

break;
case "compile-syntax-check":
var G__53072 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__53073 = cause_type;
var G__53074 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53075 = loc;
var G__53076 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53072,G__53073,G__53074,G__53075,G__53076) : format.call(null,G__53072,G__53073,G__53074,G__53075,G__53076));

break;
case "compilation":
var G__53077 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__53078 = cause_type;
var G__53079 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53080 = loc;
var G__53081 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53077,G__53078,G__53079,G__53080,G__53081) : format.call(null,G__53077,G__53078,G__53079,G__53080,G__53081));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__53083 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__53084 = symbol;
var G__53085 = loc;
var G__53086 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53087_53261 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53088_53262 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53089_53263 = true;
var _STAR_print_fn_STAR__temp_val__53090_53264 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53089_53263);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53090_53264);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53051_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53051_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53088_53262);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53087_53261);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53083,G__53084,G__53085,G__53086) : format.call(null,G__53083,G__53084,G__53085,G__53086));
} else {
var G__53093 = "Execution error%s at %s(%s).\n%s\n";
var G__53094 = cause_type;
var G__53095 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53096 = loc;
var G__53097 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53093,G__53094,G__53095,G__53096,G__53097) : format.call(null,G__53093,G__53094,G__53095,G__53096,G__53097));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53056__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
