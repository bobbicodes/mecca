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
var G__10093__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__10093 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10094__i = 0, G__10094__a = new Array(arguments.length -  0);
while (G__10094__i < G__10094__a.length) {G__10094__a[G__10094__i] = arguments[G__10094__i + 0]; ++G__10094__i;}
  args = new cljs.core.IndexedSeq(G__10094__a,0,null);
} 
return G__10093__delegate.call(this,args);};
G__10093.cljs$lang$maxFixedArity = 0;
G__10093.cljs$lang$applyTo = (function (arglist__10095){
var args = cljs.core.seq(arglist__10095);
return G__10093__delegate(args);
});
G__10093.cljs$core$IFn$_invoke$arity$variadic = G__10093__delegate;
return G__10093;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__10096__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__10096 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10097__i = 0, G__10097__a = new Array(arguments.length -  0);
while (G__10097__i < G__10097__a.length) {G__10097__a[G__10097__i] = arguments[G__10097__i + 0]; ++G__10097__i;}
  args = new cljs.core.IndexedSeq(G__10097__a,0,null);
} 
return G__10096__delegate.call(this,args);};
G__10096.cljs$lang$maxFixedArity = 0;
G__10096.cljs$lang$applyTo = (function (arglist__10098){
var args = cljs.core.seq(arglist__10098);
return G__10096__delegate(args);
});
G__10096.cljs$core$IFn$_invoke$arity$variadic = G__10096__delegate;
return G__10096;
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
