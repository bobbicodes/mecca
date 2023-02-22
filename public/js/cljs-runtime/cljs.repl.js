goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__53382){
var map__53383 = p__53382;
var map__53383__$1 = cljs.core.__destructure_map(map__53383);
var m = map__53383__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53383__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53383__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__53384_53595 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53385_53596 = null;
var count__53386_53597 = (0);
var i__53387_53598 = (0);
while(true){
if((i__53387_53598 < count__53386_53597)){
var f_53599 = chunk__53385_53596.cljs$core$IIndexed$_nth$arity$2(null,i__53387_53598);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53599], 0));


var G__53600 = seq__53384_53595;
var G__53601 = chunk__53385_53596;
var G__53602 = count__53386_53597;
var G__53603 = (i__53387_53598 + (1));
seq__53384_53595 = G__53600;
chunk__53385_53596 = G__53601;
count__53386_53597 = G__53602;
i__53387_53598 = G__53603;
continue;
} else {
var temp__5753__auto___53604 = cljs.core.seq(seq__53384_53595);
if(temp__5753__auto___53604){
var seq__53384_53605__$1 = temp__5753__auto___53604;
if(cljs.core.chunked_seq_QMARK_(seq__53384_53605__$1)){
var c__4649__auto___53606 = cljs.core.chunk_first(seq__53384_53605__$1);
var G__53607 = cljs.core.chunk_rest(seq__53384_53605__$1);
var G__53608 = c__4649__auto___53606;
var G__53609 = cljs.core.count(c__4649__auto___53606);
var G__53610 = (0);
seq__53384_53595 = G__53607;
chunk__53385_53596 = G__53608;
count__53386_53597 = G__53609;
i__53387_53598 = G__53610;
continue;
} else {
var f_53611 = cljs.core.first(seq__53384_53605__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53611], 0));


var G__53612 = cljs.core.next(seq__53384_53605__$1);
var G__53613 = null;
var G__53614 = (0);
var G__53615 = (0);
seq__53384_53595 = G__53612;
chunk__53385_53596 = G__53613;
count__53386_53597 = G__53614;
i__53387_53598 = G__53615;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53616 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_53616], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_53616)))?cljs.core.second(arglists_53616):arglists_53616)], 0));
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
var seq__53388_53622 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53389_53623 = null;
var count__53390_53624 = (0);
var i__53391_53625 = (0);
while(true){
if((i__53391_53625 < count__53390_53624)){
var vec__53401_53626 = chunk__53389_53623.cljs$core$IIndexed$_nth$arity$2(null,i__53391_53625);
var name_53627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53401_53626,(0),null);
var map__53404_53628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53401_53626,(1),null);
var map__53404_53629__$1 = cljs.core.__destructure_map(map__53404_53628);
var doc_53630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53404_53629__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53404_53629__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53627], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53631], 0));

if(cljs.core.truth_(doc_53630)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53630], 0));
} else {
}


var G__53632 = seq__53388_53622;
var G__53633 = chunk__53389_53623;
var G__53634 = count__53390_53624;
var G__53635 = (i__53391_53625 + (1));
seq__53388_53622 = G__53632;
chunk__53389_53623 = G__53633;
count__53390_53624 = G__53634;
i__53391_53625 = G__53635;
continue;
} else {
var temp__5753__auto___53636 = cljs.core.seq(seq__53388_53622);
if(temp__5753__auto___53636){
var seq__53388_53637__$1 = temp__5753__auto___53636;
if(cljs.core.chunked_seq_QMARK_(seq__53388_53637__$1)){
var c__4649__auto___53638 = cljs.core.chunk_first(seq__53388_53637__$1);
var G__53639 = cljs.core.chunk_rest(seq__53388_53637__$1);
var G__53640 = c__4649__auto___53638;
var G__53641 = cljs.core.count(c__4649__auto___53638);
var G__53642 = (0);
seq__53388_53622 = G__53639;
chunk__53389_53623 = G__53640;
count__53390_53624 = G__53641;
i__53391_53625 = G__53642;
continue;
} else {
var vec__53405_53643 = cljs.core.first(seq__53388_53637__$1);
var name_53644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53405_53643,(0),null);
var map__53408_53645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53405_53643,(1),null);
var map__53408_53646__$1 = cljs.core.__destructure_map(map__53408_53645);
var doc_53647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53408_53646__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53408_53646__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53644], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53648], 0));

if(cljs.core.truth_(doc_53647)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53647], 0));
} else {
}


var G__53649 = cljs.core.next(seq__53388_53637__$1);
var G__53650 = null;
var G__53651 = (0);
var G__53652 = (0);
seq__53388_53622 = G__53649;
chunk__53389_53623 = G__53650;
count__53390_53624 = G__53651;
i__53391_53625 = G__53652;
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

var seq__53409 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__53410 = null;
var count__53411 = (0);
var i__53412 = (0);
while(true){
if((i__53412 < count__53411)){
var role = chunk__53410.cljs$core$IIndexed$_nth$arity$2(null,i__53412);
var temp__5753__auto___53654__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___53654__$1)){
var spec_53655 = temp__5753__auto___53654__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53655)], 0));
} else {
}


var G__53666 = seq__53409;
var G__53667 = chunk__53410;
var G__53668 = count__53411;
var G__53669 = (i__53412 + (1));
seq__53409 = G__53666;
chunk__53410 = G__53667;
count__53411 = G__53668;
i__53412 = G__53669;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__53409);
if(temp__5753__auto____$1){
var seq__53409__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__53409__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53409__$1);
var G__53670 = cljs.core.chunk_rest(seq__53409__$1);
var G__53671 = c__4649__auto__;
var G__53672 = cljs.core.count(c__4649__auto__);
var G__53673 = (0);
seq__53409 = G__53670;
chunk__53410 = G__53671;
count__53411 = G__53672;
i__53412 = G__53673;
continue;
} else {
var role = cljs.core.first(seq__53409__$1);
var temp__5753__auto___53674__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___53674__$2)){
var spec_53675 = temp__5753__auto___53674__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53675)], 0));
} else {
}


var G__53676 = cljs.core.next(seq__53409__$1);
var G__53677 = null;
var G__53678 = (0);
var G__53679 = (0);
seq__53409 = G__53676;
chunk__53410 = G__53677;
count__53411 = G__53678;
i__53412 = G__53679;
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
var G__53681 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__53682 = cljs.core.ex_cause(t);
via = G__53681;
t = G__53682;
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
var map__53426 = datafied_throwable;
var map__53426__$1 = cljs.core.__destructure_map(map__53426);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53426__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53426__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53426__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__53427 = cljs.core.last(via);
var map__53427__$1 = cljs.core.__destructure_map(map__53427);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53427__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53427__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53427__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__53428 = data;
var map__53428__$1 = cljs.core.__destructure_map(map__53428);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53428__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53428__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53428__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__53429 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__53429__$1 = cljs.core.__destructure_map(map__53429);
var top_data = map__53429__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53429__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__53447 = phase;
var G__53447__$1 = (((G__53447 instanceof cljs.core.Keyword))?G__53447.fqn:null);
switch (G__53447__$1) {
case "read-source":
var map__53448 = data;
var map__53448__$1 = cljs.core.__destructure_map(map__53448);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53448__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53448__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__53449 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__53449__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53449,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53449);
var G__53449__$2 = (cljs.core.truth_((function (){var fexpr__53450 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53450.cljs$core$IFn$_invoke$arity$1 ? fexpr__53450.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53450.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53449__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53449__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53449__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53449__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__53451 = top_data;
var G__53451__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53451,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53451);
var G__53451__$2 = (cljs.core.truth_((function (){var fexpr__53459 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53459.cljs$core$IFn$_invoke$arity$1 ? fexpr__53459.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53459.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53451__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53451__$1);
var G__53451__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53451__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53451__$2);
var G__53451__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53451__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53451__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53451__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53451__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__53471 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53471,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53471,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53471,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53471,(3),null);
var G__53477 = top_data;
var G__53477__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53477,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__53477);
var G__53477__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53477__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__53477__$1);
var G__53477__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53477__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__53477__$2);
var G__53477__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53477__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53477__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53477__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53477__$4;
}

break;
case "execution":
var vec__53506 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53506,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53506,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53506,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53506,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__53425_SHARP_){
var or__4223__auto__ = (p1__53425_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__53512 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53512.cljs$core$IFn$_invoke$arity$1 ? fexpr__53512.cljs$core$IFn$_invoke$arity$1(p1__53425_SHARP_) : fexpr__53512.call(null,p1__53425_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__53527 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__53527__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53527,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__53527);
var G__53527__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53527__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53527__$1);
var G__53527__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53527__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__53527__$2);
var G__53527__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53527__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__53527__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53527__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53527__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53447__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__53547){
var map__53548 = p__53547;
var map__53548__$1 = cljs.core.__destructure_map(map__53548);
var triage_data = map__53548__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53548__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53548__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53548__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53548__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53548__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53548__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53548__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53548__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__53550 = phase;
var G__53550__$1 = (((G__53550 instanceof cljs.core.Keyword))?G__53550.fqn:null);
switch (G__53550__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__53551 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__53552 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53553 = loc;
var G__53554 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53555_53685 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53556_53686 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53557_53687 = true;
var _STAR_print_fn_STAR__temp_val__53558_53688 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53557_53687);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53558_53688);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53545_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53545_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53556_53686);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53555_53685);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53551,G__53552,G__53553,G__53554) : format.call(null,G__53551,G__53552,G__53553,G__53554));

break;
case "macroexpansion":
var G__53559 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__53560 = cause_type;
var G__53561 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53562 = loc;
var G__53563 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53559,G__53560,G__53561,G__53562,G__53563) : format.call(null,G__53559,G__53560,G__53561,G__53562,G__53563));

break;
case "compile-syntax-check":
var G__53564 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__53565 = cause_type;
var G__53566 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53567 = loc;
var G__53568 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53564,G__53565,G__53566,G__53567,G__53568) : format.call(null,G__53564,G__53565,G__53566,G__53567,G__53568));

break;
case "compilation":
var G__53569 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__53570 = cause_type;
var G__53571 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53572 = loc;
var G__53573 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53569,G__53570,G__53571,G__53572,G__53573) : format.call(null,G__53569,G__53570,G__53571,G__53572,G__53573));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__53574 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__53575 = symbol;
var G__53576 = loc;
var G__53577 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53578_53690 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53579_53691 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53580_53692 = true;
var _STAR_print_fn_STAR__temp_val__53581_53693 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53580_53692);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53581_53693);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53546_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53546_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53579_53691);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53578_53690);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53574,G__53575,G__53576,G__53577) : format.call(null,G__53574,G__53575,G__53576,G__53577));
} else {
var G__53590 = "Execution error%s at %s(%s).\n%s\n";
var G__53591 = cause_type;
var G__53592 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53593 = loc;
var G__53594 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53590,G__53591,G__53592,G__53593,G__53594) : format.call(null,G__53590,G__53591,G__53592,G__53593,G__53594));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53550__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
