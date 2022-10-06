goog.provide('shadow.util');
goog.require('cljs.core');
goog.require('cljs.core.async');
shadow.util.console_friendly = (function shadow$util$console_friendly(a){
if((a == null)){
return "nil";
} else {
if((a instanceof cljs.core.Keyword)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(a);
} else {
if(typeof a === 'string'){
return a;
} else {
if(typeof a === 'number'){
return a;
} else {
if((((!((a == null))))?(((((a.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IPrintWithWriter$))))?true:(((!a.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,a):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,a))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
} else {
return a;

}
}
}
}
}
});
shadow.util.go_BANG_ = (function shadow$util$go_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32593 = arguments.length;
var i__4790__auto___32594 = (0);
while(true){
if((i__4790__auto___32594 < len__4789__auto___32593)){
args__4795__auto__.push((arguments[i__4790__auto___32594]));

var G__32595 = (i__4790__auto___32594 + (1));
i__4790__auto___32594 = G__32595;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.util.go_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.util.go_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (body){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("go! is a macro",cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.util.go_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.util.go_BANG_.cljs$lang$applyTo = (function (seq32532){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32532));
}));

shadow.util.console_QMARK_ = (typeof console !== 'undefined');
shadow.util.log = (function shadow$util$log(var_args){
var G__32553 = arguments.length;
switch (G__32553) {
case 1:
return shadow.util.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.util.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.util.log.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.util.log.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return shadow.util.log.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.util.log.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___32599 = arguments.length;
var i__4790__auto___32601 = (0);
while(true){
if((i__4790__auto___32601 < len__4789__auto___32599)){
args_arr__4810__auto__.push((arguments[i__4790__auto___32601]));

var G__32602 = (i__4790__auto___32601 + (1));
i__4790__auto___32601 = G__32602;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((6)),(0),null));
return shadow.util.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__4811__auto__);

}
});

(shadow.util.log.cljs$core$IFn$_invoke$arity$1 = (function (a1){
if(shadow.util.console_QMARK_){
return console.log(shadow.util.console_friendly(a1));
} else {
return null;
}
}));

(shadow.util.log.cljs$core$IFn$_invoke$arity$2 = (function (a1,a2){
if(shadow.util.console_QMARK_){
return console.log(shadow.util.console_friendly(a1),shadow.util.console_friendly(a2));
} else {
return null;
}
}));

(shadow.util.log.cljs$core$IFn$_invoke$arity$3 = (function (a1,a2,a3){
if(shadow.util.console_QMARK_){
return console.log(shadow.util.console_friendly(a1),shadow.util.console_friendly(a2),shadow.util.console_friendly(a3));
} else {
return null;
}
}));

(shadow.util.log.cljs$core$IFn$_invoke$arity$4 = (function (a1,a2,a3,a4){
if(shadow.util.console_QMARK_){
return console.log(shadow.util.console_friendly(a1),shadow.util.console_friendly(a2),shadow.util.console_friendly(a3),shadow.util.console_friendly(a4));
} else {
return null;
}
}));

(shadow.util.log.cljs$core$IFn$_invoke$arity$5 = (function (a1,a2,a3,a4,a5){
if(shadow.util.console_QMARK_){
return console.log(shadow.util.console_friendly(a1),shadow.util.console_friendly(a2),shadow.util.console_friendly(a3),shadow.util.console_friendly(a4),shadow.util.console_friendly(a5));
} else {
return null;
}
}));

(shadow.util.log.cljs$core$IFn$_invoke$arity$6 = (function (a1,a2,a3,a4,a5,a6){
if(shadow.util.console_QMARK_){
return console.log(shadow.util.console_friendly(a1),shadow.util.console_friendly(a2),shadow.util.console_friendly(a3),shadow.util.console_friendly(a4),shadow.util.console_friendly(a5),shadow.util.console_friendly(a6));
} else {
return null;
}
}));

(shadow.util.log.cljs$core$IFn$_invoke$arity$variadic = (function (a1,a2,a3,a4,a5,a6,more){
if(shadow.util.console_QMARK_){
return console.log(shadow.util.console_friendly(a1),shadow.util.console_friendly(a2),shadow.util.console_friendly(a3),shadow.util.console_friendly(a4),shadow.util.console_friendly(a5),shadow.util.console_friendly(a6),"more:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)));
} else {
return null;
}
}));

/** @this {Function} */
(shadow.util.log.cljs$lang$applyTo = (function (seq32544){
var G__32546 = cljs.core.first(seq32544);
var seq32544__$1 = cljs.core.next(seq32544);
var G__32547 = cljs.core.first(seq32544__$1);
var seq32544__$2 = cljs.core.next(seq32544__$1);
var G__32548 = cljs.core.first(seq32544__$2);
var seq32544__$3 = cljs.core.next(seq32544__$2);
var G__32549 = cljs.core.first(seq32544__$3);
var seq32544__$4 = cljs.core.next(seq32544__$3);
var G__32550 = cljs.core.first(seq32544__$4);
var seq32544__$5 = cljs.core.next(seq32544__$4);
var G__32551 = cljs.core.first(seq32544__$5);
var seq32544__$6 = cljs.core.next(seq32544__$5);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32546,G__32547,G__32548,G__32549,G__32550,G__32551,seq32544__$6);
}));

(shadow.util.log.cljs$lang$maxFixedArity = (6));

shadow.util.remove_from_vector = (function shadow$util$remove_from_vector(coll,key){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,p__32581){
var vec__32582 = p__32581;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32582,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32582,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,key)){
return v;
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,item);
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll)));
});
shadow.util.remove_item_from_coll = (function shadow$util$remove_item_from_coll(coll,key,value){
if((((!((coll == null))))?(((((coll.cljs$lang$protocol_mask$partition0$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === coll.cljs$core$IVector$))))?true:(((!coll.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IVector,coll):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IVector,coll))){
return shadow.util.remove_from_vector(coll,key);
} else {
if((((!((coll == null))))?(((((coll.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === coll.cljs$core$IMap$))))?true:(((!coll.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,coll):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,coll))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(coll,key);
} else {
if((((!((coll == null))))?(((((coll.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === coll.cljs$core$ISet$))))?true:(((!coll.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,coll):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,coll))){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(coll,value);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unknown coll type",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"coll","coll",1647737163),coll,new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"value","value",305978217),value], null));

}
}
}
});

//# sourceMappingURL=shadow.util.js.map
