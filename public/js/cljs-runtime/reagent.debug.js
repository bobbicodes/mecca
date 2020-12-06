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
var G__39615__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__39615 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39616__i = 0, G__39616__a = new Array(arguments.length -  0);
while (G__39616__i < G__39616__a.length) {G__39616__a[G__39616__i] = arguments[G__39616__i + 0]; ++G__39616__i;}
  args = new cljs.core.IndexedSeq(G__39616__a,0,null);
} 
return G__39615__delegate.call(this,args);};
G__39615.cljs$lang$maxFixedArity = 0;
G__39615.cljs$lang$applyTo = (function (arglist__39617){
var args = cljs.core.seq(arglist__39617);
return G__39615__delegate(args);
});
G__39615.cljs$core$IFn$_invoke$arity$variadic = G__39615__delegate;
return G__39615;
})()
);

(o.error = (function() { 
var G__39618__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__39618 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39619__i = 0, G__39619__a = new Array(arguments.length -  0);
while (G__39619__i < G__39619__a.length) {G__39619__a[G__39619__i] = arguments[G__39619__i + 0]; ++G__39619__i;}
  args = new cljs.core.IndexedSeq(G__39619__a,0,null);
} 
return G__39618__delegate.call(this,args);};
G__39618.cljs$lang$maxFixedArity = 0;
G__39618.cljs$lang$applyTo = (function (arglist__39620){
var args = cljs.core.seq(arglist__39620);
return G__39618__delegate(args);
});
G__39618.cljs$core$IFn$_invoke$arity$variadic = G__39618__delegate;
return G__39618;
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
