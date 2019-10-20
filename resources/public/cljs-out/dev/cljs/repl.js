// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33535){
var map__33536 = p__33535;
var map__33536__$1 = ((((!((map__33536 == null)))?(((((map__33536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33536):map__33536);
var m = map__33536__$1;
var n = cljs.core.get.call(null,map__33536__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33536__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33538_33560 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33539_33561 = null;
var count__33540_33562 = (0);
var i__33541_33563 = (0);
while(true){
if((i__33541_33563 < count__33540_33562)){
var f_33564 = cljs.core._nth.call(null,chunk__33539_33561,i__33541_33563);
cljs.core.println.call(null,"  ",f_33564);


var G__33565 = seq__33538_33560;
var G__33566 = chunk__33539_33561;
var G__33567 = count__33540_33562;
var G__33568 = (i__33541_33563 + (1));
seq__33538_33560 = G__33565;
chunk__33539_33561 = G__33566;
count__33540_33562 = G__33567;
i__33541_33563 = G__33568;
continue;
} else {
var temp__5457__auto___33569 = cljs.core.seq.call(null,seq__33538_33560);
if(temp__5457__auto___33569){
var seq__33538_33570__$1 = temp__5457__auto___33569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33538_33570__$1)){
var c__4351__auto___33571 = cljs.core.chunk_first.call(null,seq__33538_33570__$1);
var G__33572 = cljs.core.chunk_rest.call(null,seq__33538_33570__$1);
var G__33573 = c__4351__auto___33571;
var G__33574 = cljs.core.count.call(null,c__4351__auto___33571);
var G__33575 = (0);
seq__33538_33560 = G__33572;
chunk__33539_33561 = G__33573;
count__33540_33562 = G__33574;
i__33541_33563 = G__33575;
continue;
} else {
var f_33576 = cljs.core.first.call(null,seq__33538_33570__$1);
cljs.core.println.call(null,"  ",f_33576);


var G__33577 = cljs.core.next.call(null,seq__33538_33570__$1);
var G__33578 = null;
var G__33579 = (0);
var G__33580 = (0);
seq__33538_33560 = G__33577;
chunk__33539_33561 = G__33578;
count__33540_33562 = G__33579;
i__33541_33563 = G__33580;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33581 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33581);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33581)))?cljs.core.second.call(null,arglists_33581):arglists_33581));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33542_33582 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33543_33583 = null;
var count__33544_33584 = (0);
var i__33545_33585 = (0);
while(true){
if((i__33545_33585 < count__33544_33584)){
var vec__33546_33586 = cljs.core._nth.call(null,chunk__33543_33583,i__33545_33585);
var name_33587 = cljs.core.nth.call(null,vec__33546_33586,(0),null);
var map__33549_33588 = cljs.core.nth.call(null,vec__33546_33586,(1),null);
var map__33549_33589__$1 = ((((!((map__33549_33588 == null)))?(((((map__33549_33588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33549_33588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33549_33588):map__33549_33588);
var doc_33590 = cljs.core.get.call(null,map__33549_33589__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33591 = cljs.core.get.call(null,map__33549_33589__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33587);

cljs.core.println.call(null," ",arglists_33591);

if(cljs.core.truth_(doc_33590)){
cljs.core.println.call(null," ",doc_33590);
} else {
}


var G__33592 = seq__33542_33582;
var G__33593 = chunk__33543_33583;
var G__33594 = count__33544_33584;
var G__33595 = (i__33545_33585 + (1));
seq__33542_33582 = G__33592;
chunk__33543_33583 = G__33593;
count__33544_33584 = G__33594;
i__33545_33585 = G__33595;
continue;
} else {
var temp__5457__auto___33596 = cljs.core.seq.call(null,seq__33542_33582);
if(temp__5457__auto___33596){
var seq__33542_33597__$1 = temp__5457__auto___33596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33542_33597__$1)){
var c__4351__auto___33598 = cljs.core.chunk_first.call(null,seq__33542_33597__$1);
var G__33599 = cljs.core.chunk_rest.call(null,seq__33542_33597__$1);
var G__33600 = c__4351__auto___33598;
var G__33601 = cljs.core.count.call(null,c__4351__auto___33598);
var G__33602 = (0);
seq__33542_33582 = G__33599;
chunk__33543_33583 = G__33600;
count__33544_33584 = G__33601;
i__33545_33585 = G__33602;
continue;
} else {
var vec__33551_33603 = cljs.core.first.call(null,seq__33542_33597__$1);
var name_33604 = cljs.core.nth.call(null,vec__33551_33603,(0),null);
var map__33554_33605 = cljs.core.nth.call(null,vec__33551_33603,(1),null);
var map__33554_33606__$1 = ((((!((map__33554_33605 == null)))?(((((map__33554_33605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33554_33605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33554_33605):map__33554_33605);
var doc_33607 = cljs.core.get.call(null,map__33554_33606__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33608 = cljs.core.get.call(null,map__33554_33606__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33604);

cljs.core.println.call(null," ",arglists_33608);

if(cljs.core.truth_(doc_33607)){
cljs.core.println.call(null," ",doc_33607);
} else {
}


var G__33609 = cljs.core.next.call(null,seq__33542_33597__$1);
var G__33610 = null;
var G__33611 = (0);
var G__33612 = (0);
seq__33542_33582 = G__33609;
chunk__33543_33583 = G__33610;
count__33544_33584 = G__33611;
i__33545_33585 = G__33612;
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
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__33556 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33557 = null;
var count__33558 = (0);
var i__33559 = (0);
while(true){
if((i__33559 < count__33558)){
var role = cljs.core._nth.call(null,chunk__33557,i__33559);
var temp__5457__auto___33613__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___33613__$1)){
var spec_33614 = temp__5457__auto___33613__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33614));
} else {
}


var G__33615 = seq__33556;
var G__33616 = chunk__33557;
var G__33617 = count__33558;
var G__33618 = (i__33559 + (1));
seq__33556 = G__33615;
chunk__33557 = G__33616;
count__33558 = G__33617;
i__33559 = G__33618;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__33556);
if(temp__5457__auto____$1){
var seq__33556__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33556__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__33556__$1);
var G__33619 = cljs.core.chunk_rest.call(null,seq__33556__$1);
var G__33620 = c__4351__auto__;
var G__33621 = cljs.core.count.call(null,c__4351__auto__);
var G__33622 = (0);
seq__33556 = G__33619;
chunk__33557 = G__33620;
count__33558 = G__33621;
i__33559 = G__33622;
continue;
} else {
var role = cljs.core.first.call(null,seq__33556__$1);
var temp__5457__auto___33623__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___33623__$2)){
var spec_33624 = temp__5457__auto___33623__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33624));
} else {
}


var G__33625 = cljs.core.next.call(null,seq__33556__$1);
var G__33626 = null;
var G__33627 = (0);
var G__33628 = (0);
seq__33556 = G__33625;
chunk__33557 = G__33626;
count__33558 = G__33627;
i__33559 = G__33628;
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

//# sourceMappingURL=repl.js.map
