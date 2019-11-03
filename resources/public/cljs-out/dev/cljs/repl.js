// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17339){
var map__17340 = p__17339;
var map__17340__$1 = ((((!((map__17340 == null)))?(((((map__17340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17340):map__17340);
var m = map__17340__$1;
var n = cljs.core.get.call(null,map__17340__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__17340__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__17342_17364 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17343_17365 = null;
var count__17344_17366 = (0);
var i__17345_17367 = (0);
while(true){
if((i__17345_17367 < count__17344_17366)){
var f_17368 = cljs.core._nth.call(null,chunk__17343_17365,i__17345_17367);
cljs.core.println.call(null,"  ",f_17368);


var G__17369 = seq__17342_17364;
var G__17370 = chunk__17343_17365;
var G__17371 = count__17344_17366;
var G__17372 = (i__17345_17367 + (1));
seq__17342_17364 = G__17369;
chunk__17343_17365 = G__17370;
count__17344_17366 = G__17371;
i__17345_17367 = G__17372;
continue;
} else {
var temp__5457__auto___17373 = cljs.core.seq.call(null,seq__17342_17364);
if(temp__5457__auto___17373){
var seq__17342_17374__$1 = temp__5457__auto___17373;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17342_17374__$1)){
var c__4351__auto___17375 = cljs.core.chunk_first.call(null,seq__17342_17374__$1);
var G__17376 = cljs.core.chunk_rest.call(null,seq__17342_17374__$1);
var G__17377 = c__4351__auto___17375;
var G__17378 = cljs.core.count.call(null,c__4351__auto___17375);
var G__17379 = (0);
seq__17342_17364 = G__17376;
chunk__17343_17365 = G__17377;
count__17344_17366 = G__17378;
i__17345_17367 = G__17379;
continue;
} else {
var f_17380 = cljs.core.first.call(null,seq__17342_17374__$1);
cljs.core.println.call(null,"  ",f_17380);


var G__17381 = cljs.core.next.call(null,seq__17342_17374__$1);
var G__17382 = null;
var G__17383 = (0);
var G__17384 = (0);
seq__17342_17364 = G__17381;
chunk__17343_17365 = G__17382;
count__17344_17366 = G__17383;
i__17345_17367 = G__17384;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17385 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_17385);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_17385)))?cljs.core.second.call(null,arglists_17385):arglists_17385));
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
var seq__17346_17386 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17347_17387 = null;
var count__17348_17388 = (0);
var i__17349_17389 = (0);
while(true){
if((i__17349_17389 < count__17348_17388)){
var vec__17350_17390 = cljs.core._nth.call(null,chunk__17347_17387,i__17349_17389);
var name_17391 = cljs.core.nth.call(null,vec__17350_17390,(0),null);
var map__17353_17392 = cljs.core.nth.call(null,vec__17350_17390,(1),null);
var map__17353_17393__$1 = ((((!((map__17353_17392 == null)))?(((((map__17353_17392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17353_17392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17353_17392):map__17353_17392);
var doc_17394 = cljs.core.get.call(null,map__17353_17393__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17395 = cljs.core.get.call(null,map__17353_17393__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17391);

cljs.core.println.call(null," ",arglists_17395);

if(cljs.core.truth_(doc_17394)){
cljs.core.println.call(null," ",doc_17394);
} else {
}


var G__17396 = seq__17346_17386;
var G__17397 = chunk__17347_17387;
var G__17398 = count__17348_17388;
var G__17399 = (i__17349_17389 + (1));
seq__17346_17386 = G__17396;
chunk__17347_17387 = G__17397;
count__17348_17388 = G__17398;
i__17349_17389 = G__17399;
continue;
} else {
var temp__5457__auto___17400 = cljs.core.seq.call(null,seq__17346_17386);
if(temp__5457__auto___17400){
var seq__17346_17401__$1 = temp__5457__auto___17400;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17346_17401__$1)){
var c__4351__auto___17402 = cljs.core.chunk_first.call(null,seq__17346_17401__$1);
var G__17403 = cljs.core.chunk_rest.call(null,seq__17346_17401__$1);
var G__17404 = c__4351__auto___17402;
var G__17405 = cljs.core.count.call(null,c__4351__auto___17402);
var G__17406 = (0);
seq__17346_17386 = G__17403;
chunk__17347_17387 = G__17404;
count__17348_17388 = G__17405;
i__17349_17389 = G__17406;
continue;
} else {
var vec__17355_17407 = cljs.core.first.call(null,seq__17346_17401__$1);
var name_17408 = cljs.core.nth.call(null,vec__17355_17407,(0),null);
var map__17358_17409 = cljs.core.nth.call(null,vec__17355_17407,(1),null);
var map__17358_17410__$1 = ((((!((map__17358_17409 == null)))?(((((map__17358_17409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17358_17409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17358_17409):map__17358_17409);
var doc_17411 = cljs.core.get.call(null,map__17358_17410__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17412 = cljs.core.get.call(null,map__17358_17410__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17408);

cljs.core.println.call(null," ",arglists_17412);

if(cljs.core.truth_(doc_17411)){
cljs.core.println.call(null," ",doc_17411);
} else {
}


var G__17413 = cljs.core.next.call(null,seq__17346_17401__$1);
var G__17414 = null;
var G__17415 = (0);
var G__17416 = (0);
seq__17346_17386 = G__17413;
chunk__17347_17387 = G__17414;
count__17348_17388 = G__17415;
i__17349_17389 = G__17416;
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

var seq__17360 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17361 = null;
var count__17362 = (0);
var i__17363 = (0);
while(true){
if((i__17363 < count__17362)){
var role = cljs.core._nth.call(null,chunk__17361,i__17363);
var temp__5457__auto___17417__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___17417__$1)){
var spec_17418 = temp__5457__auto___17417__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_17418));
} else {
}


var G__17419 = seq__17360;
var G__17420 = chunk__17361;
var G__17421 = count__17362;
var G__17422 = (i__17363 + (1));
seq__17360 = G__17419;
chunk__17361 = G__17420;
count__17362 = G__17421;
i__17363 = G__17422;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__17360);
if(temp__5457__auto____$1){
var seq__17360__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17360__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__17360__$1);
var G__17423 = cljs.core.chunk_rest.call(null,seq__17360__$1);
var G__17424 = c__4351__auto__;
var G__17425 = cljs.core.count.call(null,c__4351__auto__);
var G__17426 = (0);
seq__17360 = G__17423;
chunk__17361 = G__17424;
count__17362 = G__17425;
i__17363 = G__17426;
continue;
} else {
var role = cljs.core.first.call(null,seq__17360__$1);
var temp__5457__auto___17427__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___17427__$2)){
var spec_17428 = temp__5457__auto___17427__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_17428));
} else {
}


var G__17429 = cljs.core.next.call(null,seq__17360__$1);
var G__17430 = null;
var G__17431 = (0);
var G__17432 = (0);
seq__17360 = G__17429;
chunk__17361 = G__17430;
count__17362 = G__17431;
i__17363 = G__17432;
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
