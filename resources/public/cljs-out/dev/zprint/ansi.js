// Compiled by ClojureScript 1.10.339 {}
goog.provide('zprint.ansi');
goog.require('cljs.core');
goog.require('clojure.string');
zprint.ansi.ansi_codes = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"back-magenta","back-magenta",1900361441),new cljs.core.Keyword(null,"blink","blink",-271985917),new cljs.core.Keyword(null,"back-green","back-green",1691074021),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"back-blue","back-blue",-548906873),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"back-yellow","back-yellow",432707272),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"back-purple","back-purple",-1009092470),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"underline","underline",2018066703),new cljs.core.Keyword(null,"xsf","xsf",1294187664),new cljs.core.Keyword(null,"back-cyan","back-cyan",-1507796336),new cljs.core.Keyword(null,"strike","strike",-1173815471),new cljs.core.Keyword(null,"back-red","back-red",-1985566158),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"off","off",606440789),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"reverse","reverse",-888455266),new cljs.core.Keyword(null,"black","black",1294279647)],[(1),(45),(5),(42),(37),(44),(33),(43),(32),(45),(36),(3),(38),(66),(9),(41),(8),(31),(34),(0),(35),(35),(30),(7),(30)]);
/**
 * Wraps a string with ANSI escape codes.
 */
zprint.ansi.color_str = (function zprint$ansi$color_str(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11355 = arguments.length;
var i__4532__auto___11356 = (0);
while(true){
if((i__4532__auto___11356 < len__4531__auto___11355)){
args__4534__auto__.push((arguments[i__4532__auto___11356]));

var G__11357 = (i__4532__auto___11356 + (1));
i__4532__auto___11356 = G__11357;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic = (function (s,ansi){
var ansi_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,";",cljs.core.map.call(null,zprint.ansi.ansi_codes,ansi)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\u001B"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ansi_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1("m"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\u001B"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1("0"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("m")].join('');
});

zprint.ansi.color_str.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
zprint.ansi.color_str.cljs$lang$applyTo = (function (seq11353){
var G__11354 = cljs.core.first.call(null,seq11353);
var seq11353__$1 = cljs.core.next.call(null,seq11353);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11354,seq11353__$1);
});


//# sourceMappingURL=ansi.js.map
