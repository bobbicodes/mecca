// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__8722__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8722 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8723__i = 0, G__8723__a = new Array(arguments.length -  0);
while (G__8723__i < G__8723__a.length) {G__8723__a[G__8723__i] = arguments[G__8723__i + 0]; ++G__8723__i;}
  args = new cljs.core.IndexedSeq(G__8723__a,0,null);
} 
return G__8722__delegate.call(this,args);};
G__8722.cljs$lang$maxFixedArity = 0;
G__8722.cljs$lang$applyTo = (function (arglist__8724){
var args = cljs.core.seq(arglist__8724);
return G__8722__delegate(args);
});
G__8722.cljs$core$IFn$_invoke$arity$variadic = G__8722__delegate;
return G__8722;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__8725__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8725 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8726__i = 0, G__8726__a = new Array(arguments.length -  0);
while (G__8726__i < G__8726__a.length) {G__8726__a[G__8726__i] = arguments[G__8726__i + 0]; ++G__8726__i;}
  args = new cljs.core.IndexedSeq(G__8726__a,0,null);
} 
return G__8725__delegate.call(this,args);};
G__8725.cljs$lang$maxFixedArity = 0;
G__8725.cljs$lang$applyTo = (function (arglist__8727){
var args = cljs.core.seq(arglist__8727);
return G__8725__delegate(args);
});
G__8725.cljs$core$IFn$_invoke$arity$variadic = G__8725__delegate;
return G__8725;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
