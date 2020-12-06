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
var len__4789__auto___37842 = arguments.length;
var i__4790__auto___37843 = (0);
while(true){
if((i__4790__auto___37843 < len__4789__auto___37842)){
args__4795__auto__.push((arguments[i__4790__auto___37843]));

var G__37844 = (i__4790__auto___37843 + (1));
i__4790__auto___37843 = G__37844;
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
(shadow.util.go_BANG_.cljs$lang$applyTo = (function (seq37776){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37776));
}));

shadow.util.console_QMARK_ = (typeof console !== 'undefined');
shadow.util.log = (function shadow$util$log(var_args){
var G__37785 = arguments.length;
switch (G__37785) {
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
var len__4789__auto___37846 = arguments.length;
var i__4790__auto___37847 = (0);
while(true){
if((i__4790__auto___37847 < len__4789__auto___37846)){
args_arr__4810__auto__.push((arguments[i__4790__auto___37847]));

var G__37848 = (i__4790__auto___37847 + (1));
i__4790__auto___37847 = G__37848;
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
(shadow.util.log.cljs$lang$applyTo = (function (seq37778){
var G__37779 = cljs.core.first(seq37778);
var seq37778__$1 = cljs.core.next(seq37778);
var G__37780 = cljs.core.first(seq37778__$1);
var seq37778__$2 = cljs.core.next(seq37778__$1);
var G__37781 = cljs.core.first(seq37778__$2);
var seq37778__$3 = cljs.core.next(seq37778__$2);
var G__37782 = cljs.core.first(seq37778__$3);
var seq37778__$4 = cljs.core.next(seq37778__$3);
var G__37783 = cljs.core.first(seq37778__$4);
var seq37778__$5 = cljs.core.next(seq37778__$4);
var G__37784 = cljs.core.first(seq37778__$5);
var seq37778__$6 = cljs.core.next(seq37778__$5);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37779,G__37780,G__37781,G__37782,G__37783,G__37784,seq37778__$6);
}));

(shadow.util.log.cljs$lang$maxFixedArity = (6));

shadow.util.remove_from_vector = (function shadow$util$remove_from_vector(coll,key){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,p__37834){
var vec__37835 = p__37834;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37835,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37835,(1),null);
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
