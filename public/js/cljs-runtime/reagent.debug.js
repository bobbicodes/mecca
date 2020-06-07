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
var G__39703__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__39703 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39706__i = 0, G__39706__a = new Array(arguments.length -  0);
while (G__39706__i < G__39706__a.length) {G__39706__a[G__39706__i] = arguments[G__39706__i + 0]; ++G__39706__i;}
  args = new cljs.core.IndexedSeq(G__39706__a,0,null);
} 
return G__39703__delegate.call(this,args);};
G__39703.cljs$lang$maxFixedArity = 0;
G__39703.cljs$lang$applyTo = (function (arglist__39707){
var args = cljs.core.seq(arglist__39707);
return G__39703__delegate(args);
});
G__39703.cljs$core$IFn$_invoke$arity$variadic = G__39703__delegate;
return G__39703;
})()
);

(o.error = (function() { 
var G__39708__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__39708 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39709__i = 0, G__39709__a = new Array(arguments.length -  0);
while (G__39709__i < G__39709__a.length) {G__39709__a[G__39709__i] = arguments[G__39709__i + 0]; ++G__39709__i;}
  args = new cljs.core.IndexedSeq(G__39709__a,0,null);
} 
return G__39708__delegate.call(this,args);};
G__39708.cljs$lang$maxFixedArity = 0;
G__39708.cljs$lang$applyTo = (function (arglist__39711){
var args = cljs.core.seq(arglist__39711);
return G__39708__delegate(args);
});
G__39708.cljs$core$IFn$_invoke$arity$variadic = G__39708__delegate;
return G__39708;
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
