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
var G__8689__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8689 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8690__i = 0, G__8690__a = new Array(arguments.length -  0);
while (G__8690__i < G__8690__a.length) {G__8690__a[G__8690__i] = arguments[G__8690__i + 0]; ++G__8690__i;}
  args = new cljs.core.IndexedSeq(G__8690__a,0,null);
} 
return G__8689__delegate.call(this,args);};
G__8689.cljs$lang$maxFixedArity = 0;
G__8689.cljs$lang$applyTo = (function (arglist__8691){
var args = cljs.core.seq(arglist__8691);
return G__8689__delegate(args);
});
G__8689.cljs$core$IFn$_invoke$arity$variadic = G__8689__delegate;
return G__8689;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__8692__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8692 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8693__i = 0, G__8693__a = new Array(arguments.length -  0);
while (G__8693__i < G__8693__a.length) {G__8693__a[G__8693__i] = arguments[G__8693__i + 0]; ++G__8693__i;}
  args = new cljs.core.IndexedSeq(G__8693__a,0,null);
} 
return G__8692__delegate.call(this,args);};
G__8692.cljs$lang$maxFixedArity = 0;
G__8692.cljs$lang$applyTo = (function (arglist__8694){
var args = cljs.core.seq(arglist__8694);
return G__8692__delegate(args);
});
G__8692.cljs$core$IFn$_invoke$arity$variadic = G__8692__delegate;
return G__8692;
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
