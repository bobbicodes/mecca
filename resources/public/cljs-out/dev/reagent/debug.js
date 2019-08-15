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
var G__8676__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8676 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8677__i = 0, G__8677__a = new Array(arguments.length -  0);
while (G__8677__i < G__8677__a.length) {G__8677__a[G__8677__i] = arguments[G__8677__i + 0]; ++G__8677__i;}
  args = new cljs.core.IndexedSeq(G__8677__a,0,null);
} 
return G__8676__delegate.call(this,args);};
G__8676.cljs$lang$maxFixedArity = 0;
G__8676.cljs$lang$applyTo = (function (arglist__8678){
var args = cljs.core.seq(arglist__8678);
return G__8676__delegate(args);
});
G__8676.cljs$core$IFn$_invoke$arity$variadic = G__8676__delegate;
return G__8676;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__8679__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8679 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8680__i = 0, G__8680__a = new Array(arguments.length -  0);
while (G__8680__i < G__8680__a.length) {G__8680__a[G__8680__i] = arguments[G__8680__i + 0]; ++G__8680__i;}
  args = new cljs.core.IndexedSeq(G__8680__a,0,null);
} 
return G__8679__delegate.call(this,args);};
G__8679.cljs$lang$maxFixedArity = 0;
G__8679.cljs$lang$applyTo = (function (arglist__8681){
var args = cljs.core.seq(arglist__8681);
return G__8679__delegate(args);
});
G__8679.cljs$core$IFn$_invoke$arity$variadic = G__8679__delegate;
return G__8679;
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
