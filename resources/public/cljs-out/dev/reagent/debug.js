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
var G__9944__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__9944 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9945__i = 0, G__9945__a = new Array(arguments.length -  0);
while (G__9945__i < G__9945__a.length) {G__9945__a[G__9945__i] = arguments[G__9945__i + 0]; ++G__9945__i;}
  args = new cljs.core.IndexedSeq(G__9945__a,0,null);
} 
return G__9944__delegate.call(this,args);};
G__9944.cljs$lang$maxFixedArity = 0;
G__9944.cljs$lang$applyTo = (function (arglist__9946){
var args = cljs.core.seq(arglist__9946);
return G__9944__delegate(args);
});
G__9944.cljs$core$IFn$_invoke$arity$variadic = G__9944__delegate;
return G__9944;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__9947__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__9947 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9948__i = 0, G__9948__a = new Array(arguments.length -  0);
while (G__9948__i < G__9948__a.length) {G__9948__a[G__9948__i] = arguments[G__9948__i + 0]; ++G__9948__i;}
  args = new cljs.core.IndexedSeq(G__9948__a,0,null);
} 
return G__9947__delegate.call(this,args);};
G__9947.cljs$lang$maxFixedArity = 0;
G__9947.cljs$lang$applyTo = (function (arglist__9949){
var args = cljs.core.seq(arglist__9949);
return G__9947__delegate(args);
});
G__9947.cljs$core$IFn$_invoke$arity$variadic = G__9947__delegate;
return G__9947;
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
