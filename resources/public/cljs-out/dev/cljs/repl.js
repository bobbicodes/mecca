// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32474){
var map__32475 = p__32474;
var map__32475__$1 = ((((!((map__32475 == null)))?(((((map__32475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32475):map__32475);
var m = map__32475__$1;
var n = cljs.core.get.call(null,map__32475__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32475__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__32477_32499 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32478_32500 = null;
var count__32479_32501 = (0);
var i__32480_32502 = (0);
while(true){
if((i__32480_32502 < count__32479_32501)){
var f_32503 = cljs.core._nth.call(null,chunk__32478_32500,i__32480_32502);
cljs.core.println.call(null,"  ",f_32503);


var G__32504 = seq__32477_32499;
var G__32505 = chunk__32478_32500;
var G__32506 = count__32479_32501;
var G__32507 = (i__32480_32502 + (1));
seq__32477_32499 = G__32504;
chunk__32478_32500 = G__32505;
count__32479_32501 = G__32506;
i__32480_32502 = G__32507;
continue;
} else {
var temp__5457__auto___32508 = cljs.core.seq.call(null,seq__32477_32499);
if(temp__5457__auto___32508){
var seq__32477_32509__$1 = temp__5457__auto___32508;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32477_32509__$1)){
var c__4351__auto___32510 = cljs.core.chunk_first.call(null,seq__32477_32509__$1);
var G__32511 = cljs.core.chunk_rest.call(null,seq__32477_32509__$1);
var G__32512 = c__4351__auto___32510;
var G__32513 = cljs.core.count.call(null,c__4351__auto___32510);
var G__32514 = (0);
seq__32477_32499 = G__32511;
chunk__32478_32500 = G__32512;
count__32479_32501 = G__32513;
i__32480_32502 = G__32514;
continue;
} else {
var f_32515 = cljs.core.first.call(null,seq__32477_32509__$1);
cljs.core.println.call(null,"  ",f_32515);


var G__32516 = cljs.core.next.call(null,seq__32477_32509__$1);
var G__32517 = null;
var G__32518 = (0);
var G__32519 = (0);
seq__32477_32499 = G__32516;
chunk__32478_32500 = G__32517;
count__32479_32501 = G__32518;
i__32480_32502 = G__32519;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32520 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32520);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32520)))?cljs.core.second.call(null,arglists_32520):arglists_32520));
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
var seq__32481_32521 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32482_32522 = null;
var count__32483_32523 = (0);
var i__32484_32524 = (0);
while(true){
if((i__32484_32524 < count__32483_32523)){
var vec__32485_32525 = cljs.core._nth.call(null,chunk__32482_32522,i__32484_32524);
var name_32526 = cljs.core.nth.call(null,vec__32485_32525,(0),null);
var map__32488_32527 = cljs.core.nth.call(null,vec__32485_32525,(1),null);
var map__32488_32528__$1 = ((((!((map__32488_32527 == null)))?(((((map__32488_32527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32488_32527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32488_32527):map__32488_32527);
var doc_32529 = cljs.core.get.call(null,map__32488_32528__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32530 = cljs.core.get.call(null,map__32488_32528__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32526);

cljs.core.println.call(null," ",arglists_32530);

if(cljs.core.truth_(doc_32529)){
cljs.core.println.call(null," ",doc_32529);
} else {
}


var G__32531 = seq__32481_32521;
var G__32532 = chunk__32482_32522;
var G__32533 = count__32483_32523;
var G__32534 = (i__32484_32524 + (1));
seq__32481_32521 = G__32531;
chunk__32482_32522 = G__32532;
count__32483_32523 = G__32533;
i__32484_32524 = G__32534;
continue;
} else {
var temp__5457__auto___32535 = cljs.core.seq.call(null,seq__32481_32521);
if(temp__5457__auto___32535){
var seq__32481_32536__$1 = temp__5457__auto___32535;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32481_32536__$1)){
var c__4351__auto___32537 = cljs.core.chunk_first.call(null,seq__32481_32536__$1);
var G__32538 = cljs.core.chunk_rest.call(null,seq__32481_32536__$1);
var G__32539 = c__4351__auto___32537;
var G__32540 = cljs.core.count.call(null,c__4351__auto___32537);
var G__32541 = (0);
seq__32481_32521 = G__32538;
chunk__32482_32522 = G__32539;
count__32483_32523 = G__32540;
i__32484_32524 = G__32541;
continue;
} else {
var vec__32490_32542 = cljs.core.first.call(null,seq__32481_32536__$1);
var name_32543 = cljs.core.nth.call(null,vec__32490_32542,(0),null);
var map__32493_32544 = cljs.core.nth.call(null,vec__32490_32542,(1),null);
var map__32493_32545__$1 = ((((!((map__32493_32544 == null)))?(((((map__32493_32544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32493_32544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32493_32544):map__32493_32544);
var doc_32546 = cljs.core.get.call(null,map__32493_32545__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32547 = cljs.core.get.call(null,map__32493_32545__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32543);

cljs.core.println.call(null," ",arglists_32547);

if(cljs.core.truth_(doc_32546)){
cljs.core.println.call(null," ",doc_32546);
} else {
}


var G__32548 = cljs.core.next.call(null,seq__32481_32536__$1);
var G__32549 = null;
var G__32550 = (0);
var G__32551 = (0);
seq__32481_32521 = G__32548;
chunk__32482_32522 = G__32549;
count__32483_32523 = G__32550;
i__32484_32524 = G__32551;
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

var seq__32495 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32496 = null;
var count__32497 = (0);
var i__32498 = (0);
while(true){
if((i__32498 < count__32497)){
var role = cljs.core._nth.call(null,chunk__32496,i__32498);
var temp__5457__auto___32552__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___32552__$1)){
var spec_32553 = temp__5457__auto___32552__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32553));
} else {
}


var G__32554 = seq__32495;
var G__32555 = chunk__32496;
var G__32556 = count__32497;
var G__32557 = (i__32498 + (1));
seq__32495 = G__32554;
chunk__32496 = G__32555;
count__32497 = G__32556;
i__32498 = G__32557;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__32495);
if(temp__5457__auto____$1){
var seq__32495__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32495__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__32495__$1);
var G__32558 = cljs.core.chunk_rest.call(null,seq__32495__$1);
var G__32559 = c__4351__auto__;
var G__32560 = cljs.core.count.call(null,c__4351__auto__);
var G__32561 = (0);
seq__32495 = G__32558;
chunk__32496 = G__32559;
count__32497 = G__32560;
i__32498 = G__32561;
continue;
} else {
var role = cljs.core.first.call(null,seq__32495__$1);
var temp__5457__auto___32562__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___32562__$2)){
var spec_32563 = temp__5457__auto___32562__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32563));
} else {
}


var G__32564 = cljs.core.next.call(null,seq__32495__$1);
var G__32565 = null;
var G__32566 = (0);
var G__32567 = (0);
seq__32495 = G__32564;
chunk__32496 = G__32565;
count__32497 = G__32566;
i__32498 = G__32567;
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
