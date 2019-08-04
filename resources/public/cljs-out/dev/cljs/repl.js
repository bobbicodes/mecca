// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18531){
var map__18532 = p__18531;
var map__18532__$1 = ((((!((map__18532 == null)))?(((((map__18532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18532):map__18532);
var m = map__18532__$1;
var n = cljs.core.get.call(null,map__18532__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__18532__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__18534_18556 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18535_18557 = null;
var count__18536_18558 = (0);
var i__18537_18559 = (0);
while(true){
if((i__18537_18559 < count__18536_18558)){
var f_18560 = cljs.core._nth.call(null,chunk__18535_18557,i__18537_18559);
cljs.core.println.call(null,"  ",f_18560);


var G__18561 = seq__18534_18556;
var G__18562 = chunk__18535_18557;
var G__18563 = count__18536_18558;
var G__18564 = (i__18537_18559 + (1));
seq__18534_18556 = G__18561;
chunk__18535_18557 = G__18562;
count__18536_18558 = G__18563;
i__18537_18559 = G__18564;
continue;
} else {
var temp__5457__auto___18565 = cljs.core.seq.call(null,seq__18534_18556);
if(temp__5457__auto___18565){
var seq__18534_18566__$1 = temp__5457__auto___18565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18534_18566__$1)){
var c__4351__auto___18567 = cljs.core.chunk_first.call(null,seq__18534_18566__$1);
var G__18568 = cljs.core.chunk_rest.call(null,seq__18534_18566__$1);
var G__18569 = c__4351__auto___18567;
var G__18570 = cljs.core.count.call(null,c__4351__auto___18567);
var G__18571 = (0);
seq__18534_18556 = G__18568;
chunk__18535_18557 = G__18569;
count__18536_18558 = G__18570;
i__18537_18559 = G__18571;
continue;
} else {
var f_18572 = cljs.core.first.call(null,seq__18534_18566__$1);
cljs.core.println.call(null,"  ",f_18572);


var G__18573 = cljs.core.next.call(null,seq__18534_18566__$1);
var G__18574 = null;
var G__18575 = (0);
var G__18576 = (0);
seq__18534_18556 = G__18573;
chunk__18535_18557 = G__18574;
count__18536_18558 = G__18575;
i__18537_18559 = G__18576;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18577 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_18577);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_18577)))?cljs.core.second.call(null,arglists_18577):arglists_18577));
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
var seq__18538_18578 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18539_18579 = null;
var count__18540_18580 = (0);
var i__18541_18581 = (0);
while(true){
if((i__18541_18581 < count__18540_18580)){
var vec__18542_18582 = cljs.core._nth.call(null,chunk__18539_18579,i__18541_18581);
var name_18583 = cljs.core.nth.call(null,vec__18542_18582,(0),null);
var map__18545_18584 = cljs.core.nth.call(null,vec__18542_18582,(1),null);
var map__18545_18585__$1 = ((((!((map__18545_18584 == null)))?(((((map__18545_18584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18545_18584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18545_18584):map__18545_18584);
var doc_18586 = cljs.core.get.call(null,map__18545_18585__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18587 = cljs.core.get.call(null,map__18545_18585__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18583);

cljs.core.println.call(null," ",arglists_18587);

if(cljs.core.truth_(doc_18586)){
cljs.core.println.call(null," ",doc_18586);
} else {
}


var G__18588 = seq__18538_18578;
var G__18589 = chunk__18539_18579;
var G__18590 = count__18540_18580;
var G__18591 = (i__18541_18581 + (1));
seq__18538_18578 = G__18588;
chunk__18539_18579 = G__18589;
count__18540_18580 = G__18590;
i__18541_18581 = G__18591;
continue;
} else {
var temp__5457__auto___18592 = cljs.core.seq.call(null,seq__18538_18578);
if(temp__5457__auto___18592){
var seq__18538_18593__$1 = temp__5457__auto___18592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18538_18593__$1)){
var c__4351__auto___18594 = cljs.core.chunk_first.call(null,seq__18538_18593__$1);
var G__18595 = cljs.core.chunk_rest.call(null,seq__18538_18593__$1);
var G__18596 = c__4351__auto___18594;
var G__18597 = cljs.core.count.call(null,c__4351__auto___18594);
var G__18598 = (0);
seq__18538_18578 = G__18595;
chunk__18539_18579 = G__18596;
count__18540_18580 = G__18597;
i__18541_18581 = G__18598;
continue;
} else {
var vec__18547_18599 = cljs.core.first.call(null,seq__18538_18593__$1);
var name_18600 = cljs.core.nth.call(null,vec__18547_18599,(0),null);
var map__18550_18601 = cljs.core.nth.call(null,vec__18547_18599,(1),null);
var map__18550_18602__$1 = ((((!((map__18550_18601 == null)))?(((((map__18550_18601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18550_18601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18550_18601):map__18550_18601);
var doc_18603 = cljs.core.get.call(null,map__18550_18602__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18604 = cljs.core.get.call(null,map__18550_18602__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18600);

cljs.core.println.call(null," ",arglists_18604);

if(cljs.core.truth_(doc_18603)){
cljs.core.println.call(null," ",doc_18603);
} else {
}


var G__18605 = cljs.core.next.call(null,seq__18538_18593__$1);
var G__18606 = null;
var G__18607 = (0);
var G__18608 = (0);
seq__18538_18578 = G__18605;
chunk__18539_18579 = G__18606;
count__18540_18580 = G__18607;
i__18541_18581 = G__18608;
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

var seq__18552 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18553 = null;
var count__18554 = (0);
var i__18555 = (0);
while(true){
if((i__18555 < count__18554)){
var role = cljs.core._nth.call(null,chunk__18553,i__18555);
var temp__5457__auto___18609__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___18609__$1)){
var spec_18610 = temp__5457__auto___18609__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18610));
} else {
}


var G__18611 = seq__18552;
var G__18612 = chunk__18553;
var G__18613 = count__18554;
var G__18614 = (i__18555 + (1));
seq__18552 = G__18611;
chunk__18553 = G__18612;
count__18554 = G__18613;
i__18555 = G__18614;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__18552);
if(temp__5457__auto____$1){
var seq__18552__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18552__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__18552__$1);
var G__18615 = cljs.core.chunk_rest.call(null,seq__18552__$1);
var G__18616 = c__4351__auto__;
var G__18617 = cljs.core.count.call(null,c__4351__auto__);
var G__18618 = (0);
seq__18552 = G__18615;
chunk__18553 = G__18616;
count__18554 = G__18617;
i__18555 = G__18618;
continue;
} else {
var role = cljs.core.first.call(null,seq__18552__$1);
var temp__5457__auto___18619__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___18619__$2)){
var spec_18620 = temp__5457__auto___18619__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18620));
} else {
}


var G__18621 = cljs.core.next.call(null,seq__18552__$1);
var G__18622 = null;
var G__18623 = (0);
var G__18624 = (0);
seq__18552 = G__18621;
chunk__18553 = G__18622;
count__18554 = G__18623;
i__18555 = G__18624;
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
