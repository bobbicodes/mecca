goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__42224__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__42224 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42225__i = 0, G__42225__a = new Array(arguments.length -  0);
while (G__42225__i < G__42225__a.length) {G__42225__a[G__42225__i] = arguments[G__42225__i + 0]; ++G__42225__i;}
  args = new cljs.core.IndexedSeq(G__42225__a,0,null);
} 
return G__42224__delegate.call(this,args);};
G__42224.cljs$lang$maxFixedArity = 0;
G__42224.cljs$lang$applyTo = (function (arglist__42226){
var args = cljs.core.seq(arglist__42226);
return G__42224__delegate(args);
});
G__42224.cljs$core$IFn$_invoke$arity$variadic = G__42224__delegate;
return G__42224;
})()
);

(o.error = (function() { 
var G__42227__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__42227 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42229__i = 0, G__42229__a = new Array(arguments.length -  0);
while (G__42229__i < G__42229__a.length) {G__42229__a[G__42229__i] = arguments[G__42229__i + 0]; ++G__42229__i;}
  args = new cljs.core.IndexedSeq(G__42229__a,0,null);
} 
return G__42227__delegate.call(this,args);};
G__42227.cljs$lang$maxFixedArity = 0;
G__42227.cljs$lang$applyTo = (function (arglist__42230){
var args = cljs.core.seq(arglist__42230);
return G__42227__delegate(args);
});
G__42227.cljs$core$IFn$_invoke$arity$variadic = G__42227__delegate;
return G__42227;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
