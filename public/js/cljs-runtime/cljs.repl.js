goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39323){
var map__39324 = p__39323;
var map__39324__$1 = (((((!((map__39324 == null))))?(((((map__39324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39324):map__39324);
var m = map__39324__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39324__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39324__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__39327_39577 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39328_39578 = null;
var count__39329_39579 = (0);
var i__39330_39580 = (0);
while(true){
if((i__39330_39580 < count__39329_39579)){
var f_39581 = chunk__39328_39578.cljs$core$IIndexed$_nth$arity$2(null,i__39330_39580);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39581], 0));


var G__39582 = seq__39327_39577;
var G__39583 = chunk__39328_39578;
var G__39584 = count__39329_39579;
var G__39585 = (i__39330_39580 + (1));
seq__39327_39577 = G__39582;
chunk__39328_39578 = G__39583;
count__39329_39579 = G__39584;
i__39330_39580 = G__39585;
continue;
} else {
var temp__5735__auto___39586 = cljs.core.seq(seq__39327_39577);
if(temp__5735__auto___39586){
var seq__39327_39587__$1 = temp__5735__auto___39586;
if(cljs.core.chunked_seq_QMARK_(seq__39327_39587__$1)){
var c__4609__auto___39588 = cljs.core.chunk_first(seq__39327_39587__$1);
var G__39589 = cljs.core.chunk_rest(seq__39327_39587__$1);
var G__39590 = c__4609__auto___39588;
var G__39591 = cljs.core.count(c__4609__auto___39588);
var G__39592 = (0);
seq__39327_39577 = G__39589;
chunk__39328_39578 = G__39590;
count__39329_39579 = G__39591;
i__39330_39580 = G__39592;
continue;
} else {
var f_39593 = cljs.core.first(seq__39327_39587__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39593], 0));


var G__39594 = cljs.core.next(seq__39327_39587__$1);
var G__39595 = null;
var G__39596 = (0);
var G__39597 = (0);
seq__39327_39577 = G__39594;
chunk__39328_39578 = G__39595;
count__39329_39579 = G__39596;
i__39330_39580 = G__39597;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39598 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_39598], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_39598)))?cljs.core.second(arglists_39598):arglists_39598)], 0));
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
var seq__39334_39599 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39335_39600 = null;
var count__39336_39601 = (0);
var i__39337_39602 = (0);
while(true){
if((i__39337_39602 < count__39336_39601)){
var vec__39350_39603 = chunk__39335_39600.cljs$core$IIndexed$_nth$arity$2(null,i__39337_39602);
var name_39604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39350_39603,(0),null);
var map__39353_39605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39350_39603,(1),null);
var map__39353_39606__$1 = (((((!((map__39353_39605 == null))))?(((((map__39353_39605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39353_39605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39353_39605):map__39353_39605);
var doc_39607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39353_39606__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39353_39606__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39604], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39608], 0));

if(cljs.core.truth_(doc_39607)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39607], 0));
} else {
}


var G__39609 = seq__39334_39599;
var G__39610 = chunk__39335_39600;
var G__39611 = count__39336_39601;
var G__39612 = (i__39337_39602 + (1));
seq__39334_39599 = G__39609;
chunk__39335_39600 = G__39610;
count__39336_39601 = G__39611;
i__39337_39602 = G__39612;
continue;
} else {
var temp__5735__auto___39613 = cljs.core.seq(seq__39334_39599);
if(temp__5735__auto___39613){
var seq__39334_39614__$1 = temp__5735__auto___39613;
if(cljs.core.chunked_seq_QMARK_(seq__39334_39614__$1)){
var c__4609__auto___39615 = cljs.core.chunk_first(seq__39334_39614__$1);
var G__39616 = cljs.core.chunk_rest(seq__39334_39614__$1);
var G__39617 = c__4609__auto___39615;
var G__39618 = cljs.core.count(c__4609__auto___39615);
var G__39619 = (0);
seq__39334_39599 = G__39616;
chunk__39335_39600 = G__39617;
count__39336_39601 = G__39618;
i__39337_39602 = G__39619;
continue;
} else {
var vec__39355_39620 = cljs.core.first(seq__39334_39614__$1);
var name_39621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39355_39620,(0),null);
var map__39358_39622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39355_39620,(1),null);
var map__39358_39623__$1 = (((((!((map__39358_39622 == null))))?(((((map__39358_39622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39358_39622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39358_39622):map__39358_39622);
var doc_39624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39358_39623__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39358_39623__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39621], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39625], 0));

if(cljs.core.truth_(doc_39624)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39624], 0));
} else {
}


var G__39626 = cljs.core.next(seq__39334_39614__$1);
var G__39627 = null;
var G__39628 = (0);
var G__39629 = (0);
seq__39334_39599 = G__39626;
chunk__39335_39600 = G__39627;
count__39336_39601 = G__39628;
i__39337_39602 = G__39629;
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

var seq__39368 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39369 = null;
var count__39370 = (0);
var i__39371 = (0);
while(true){
if((i__39371 < count__39370)){
var role = chunk__39369.cljs$core$IIndexed$_nth$arity$2(null,i__39371);
var temp__5735__auto___39630__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___39630__$1)){
var spec_39631 = temp__5735__auto___39630__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39631)], 0));
} else {
}


var G__39632 = seq__39368;
var G__39633 = chunk__39369;
var G__39634 = count__39370;
var G__39635 = (i__39371 + (1));
seq__39368 = G__39632;
chunk__39369 = G__39633;
count__39370 = G__39634;
i__39371 = G__39635;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__39368);
if(temp__5735__auto____$1){
var seq__39368__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__39368__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__39368__$1);
var G__39636 = cljs.core.chunk_rest(seq__39368__$1);
var G__39637 = c__4609__auto__;
var G__39638 = cljs.core.count(c__4609__auto__);
var G__39639 = (0);
seq__39368 = G__39636;
chunk__39369 = G__39637;
count__39370 = G__39638;
i__39371 = G__39639;
continue;
} else {
var role = cljs.core.first(seq__39368__$1);
var temp__5735__auto___39640__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___39640__$2)){
var spec_39641 = temp__5735__auto___39640__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39641)], 0));
} else {
}


var G__39642 = cljs.core.next(seq__39368__$1);
var G__39643 = null;
var G__39644 = (0);
var G__39645 = (0);
seq__39368 = G__39642;
chunk__39369 = G__39643;
count__39370 = G__39644;
i__39371 = G__39645;
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
var G__39646 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__39647 = cljs.core.ex_cause(t);
via = G__39646;
t = G__39647;
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
var map__39415 = datafied_throwable;
var map__39415__$1 = (((((!((map__39415 == null))))?(((((map__39415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39415):map__39415);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39415__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39415__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39415__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__39416 = cljs.core.last(via);
var map__39416__$1 = (((((!((map__39416 == null))))?(((((map__39416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39416):map__39416);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39416__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39416__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39416__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__39417 = data;
var map__39417__$1 = (((((!((map__39417 == null))))?(((((map__39417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39417):map__39417);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39417__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39417__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39417__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__39418 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__39418__$1 = (((((!((map__39418 == null))))?(((((map__39418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39418):map__39418);
var top_data = map__39418__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39418__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__39452 = phase;
var G__39452__$1 = (((G__39452 instanceof cljs.core.Keyword))?G__39452.fqn:null);
switch (G__39452__$1) {
case "read-source":
var map__39461 = data;
var map__39461__$1 = (((((!((map__39461 == null))))?(((((map__39461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39461):map__39461);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39461__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39461__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__39464 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__39464__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39464,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39464);
var G__39464__$2 = (cljs.core.truth_((function (){var fexpr__39466 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39466.cljs$core$IFn$_invoke$arity$1 ? fexpr__39466.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39466.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39464__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39464__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39464__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39464__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__39468 = top_data;
var G__39468__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39468,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39468);
var G__39468__$2 = (cljs.core.truth_((function (){var fexpr__39469 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39469.cljs$core$IFn$_invoke$arity$1 ? fexpr__39469.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39469.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39468__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39468__$1);
var G__39468__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39468__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39468__$2);
var G__39468__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39468__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39468__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39468__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39468__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__39484 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39484,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39484,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39484,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39484,(3),null);
var G__39487 = top_data;
var G__39487__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39487,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__39487);
var G__39487__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39487__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__39487__$1);
var G__39487__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39487__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__39487__$2);
var G__39487__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39487__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39487__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39487__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39487__$4;
}

break;
case "execution":
var vec__39506 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39506,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39506,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39506,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39506,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__39405_SHARP_){
var or__4185__auto__ = (p1__39405_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__39510 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39510.cljs$core$IFn$_invoke$arity$1 ? fexpr__39510.cljs$core$IFn$_invoke$arity$1(p1__39405_SHARP_) : fexpr__39510.call(null,p1__39405_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__39516 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__39516__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39516,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__39516);
var G__39516__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39516__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39516__$1);
var G__39516__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39516__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__39516__$2);
var G__39516__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39516__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__39516__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39516__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39516__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39452__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__39522){
var map__39523 = p__39522;
var map__39523__$1 = (((((!((map__39523 == null))))?(((((map__39523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39523):map__39523);
var triage_data = map__39523__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39523__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39523__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39523__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39523__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39523__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39523__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39523__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39523__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__39531 = phase;
var G__39531__$1 = (((G__39531 instanceof cljs.core.Keyword))?G__39531.fqn:null);
switch (G__39531__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__39532 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__39533 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39534 = loc;
var G__39535 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39537_39651 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39538_39652 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39539_39653 = true;
var _STAR_print_fn_STAR__temp_val__39540_39654 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39539_39653);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39540_39654);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39520_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39520_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39538_39652);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39537_39651);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39532,G__39533,G__39534,G__39535) : format.call(null,G__39532,G__39533,G__39534,G__39535));

break;
case "macroexpansion":
var G__39546 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__39547 = cause_type;
var G__39548 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39549 = loc;
var G__39550 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39546,G__39547,G__39548,G__39549,G__39550) : format.call(null,G__39546,G__39547,G__39548,G__39549,G__39550));

break;
case "compile-syntax-check":
var G__39551 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__39552 = cause_type;
var G__39553 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39554 = loc;
var G__39555 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39551,G__39552,G__39553,G__39554,G__39555) : format.call(null,G__39551,G__39552,G__39553,G__39554,G__39555));

break;
case "compilation":
var G__39556 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__39557 = cause_type;
var G__39558 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39559 = loc;
var G__39560 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39556,G__39557,G__39558,G__39559,G__39560) : format.call(null,G__39556,G__39557,G__39558,G__39559,G__39560));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__39561 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__39562 = symbol;
var G__39563 = loc;
var G__39564 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39565_39657 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39566_39658 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39567_39659 = true;
var _STAR_print_fn_STAR__temp_val__39568_39660 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39567_39659);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39568_39660);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39521_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39521_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39566_39658);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39565_39657);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39561,G__39562,G__39563,G__39564) : format.call(null,G__39561,G__39562,G__39563,G__39564));
} else {
var G__39569 = "Execution error%s at %s(%s).\n%s\n";
var G__39570 = cause_type;
var G__39571 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39572 = loc;
var G__39573 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39569,G__39570,G__39571,G__39572,G__39573) : format.call(null,G__39569,G__39570,G__39571,G__39572,G__39573));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39531__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
