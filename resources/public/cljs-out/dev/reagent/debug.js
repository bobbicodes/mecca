// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__10065__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__10065 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10066__i = 0, G__10066__a = new Array(arguments.length -  0);
while (G__10066__i < G__10066__a.length) {G__10066__a[G__10066__i] = arguments[G__10066__i + 0]; ++G__10066__i;}
  args = new cljs.core.IndexedSeq(G__10066__a,0,null);
} 
return G__10065__delegate.call(this,args);};
G__10065.cljs$lang$maxFixedArity = 0;
G__10065.cljs$lang$applyTo = (function (arglist__10067){
var args = cljs.core.seq(arglist__10067);
return G__10065__delegate(args);
});
G__10065.cljs$core$IFn$_invoke$arity$variadic = G__10065__delegate;
return G__10065;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__10068__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__10068 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10069__i = 0, G__10069__a = new Array(arguments.length -  0);
while (G__10069__i < G__10069__a.length) {G__10069__a[G__10069__i] = arguments[G__10069__i + 0]; ++G__10069__i;}
  args = new cljs.core.IndexedSeq(G__10069__a,0,null);
} 
return G__10068__delegate.call(this,args);};
G__10068.cljs$lang$maxFixedArity = 0;
G__10068.cljs$lang$applyTo = (function (arglist__10070){
var args = cljs.core.seq(arglist__10070);
return G__10068__delegate(args);
});
G__10068.cljs$core$IFn$_invoke$arity$variadic = G__10068__delegate;
return G__10068;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
