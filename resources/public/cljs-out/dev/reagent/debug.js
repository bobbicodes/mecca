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
var G__13047__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13047 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13048__i = 0, G__13048__a = new Array(arguments.length -  0);
while (G__13048__i < G__13048__a.length) {G__13048__a[G__13048__i] = arguments[G__13048__i + 0]; ++G__13048__i;}
  args = new cljs.core.IndexedSeq(G__13048__a,0,null);
} 
return G__13047__delegate.call(this,args);};
G__13047.cljs$lang$maxFixedArity = 0;
G__13047.cljs$lang$applyTo = (function (arglist__13049){
var args = cljs.core.seq(arglist__13049);
return G__13047__delegate(args);
});
G__13047.cljs$core$IFn$_invoke$arity$variadic = G__13047__delegate;
return G__13047;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__13050__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13050 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13051__i = 0, G__13051__a = new Array(arguments.length -  0);
while (G__13051__i < G__13051__a.length) {G__13051__a[G__13051__i] = arguments[G__13051__i + 0]; ++G__13051__i;}
  args = new cljs.core.IndexedSeq(G__13051__a,0,null);
} 
return G__13050__delegate.call(this,args);};
G__13050.cljs$lang$maxFixedArity = 0;
G__13050.cljs$lang$applyTo = (function (arglist__13052){
var args = cljs.core.seq(arglist__13052);
return G__13050__delegate(args);
});
G__13050.cljs$core$IFn$_invoke$arity$variadic = G__13050__delegate;
return G__13050;
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
