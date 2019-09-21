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
var G__9951__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__9951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9952__i = 0, G__9952__a = new Array(arguments.length -  0);
while (G__9952__i < G__9952__a.length) {G__9952__a[G__9952__i] = arguments[G__9952__i + 0]; ++G__9952__i;}
  args = new cljs.core.IndexedSeq(G__9952__a,0,null);
} 
return G__9951__delegate.call(this,args);};
G__9951.cljs$lang$maxFixedArity = 0;
G__9951.cljs$lang$applyTo = (function (arglist__9953){
var args = cljs.core.seq(arglist__9953);
return G__9951__delegate(args);
});
G__9951.cljs$core$IFn$_invoke$arity$variadic = G__9951__delegate;
return G__9951;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__9954__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__9954 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9955__i = 0, G__9955__a = new Array(arguments.length -  0);
while (G__9955__i < G__9955__a.length) {G__9955__a[G__9955__i] = arguments[G__9955__i + 0]; ++G__9955__i;}
  args = new cljs.core.IndexedSeq(G__9955__a,0,null);
} 
return G__9954__delegate.call(this,args);};
G__9954.cljs$lang$maxFixedArity = 0;
G__9954.cljs$lang$applyTo = (function (arglist__9956){
var args = cljs.core.seq(arglist__9956);
return G__9954__delegate(args);
});
G__9954.cljs$core$IFn$_invoke$arity$variadic = G__9954__delegate;
return G__9954;
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
