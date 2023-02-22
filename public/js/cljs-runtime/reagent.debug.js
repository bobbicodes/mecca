goog.provide('reagent.debug');
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
var G__54136__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__54136 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54137__i = 0, G__54137__a = new Array(arguments.length -  0);
while (G__54137__i < G__54137__a.length) {G__54137__a[G__54137__i] = arguments[G__54137__i + 0]; ++G__54137__i;}
  args = new cljs.core.IndexedSeq(G__54137__a,0,null);
} 
return G__54136__delegate.call(this,args);};
G__54136.cljs$lang$maxFixedArity = 0;
G__54136.cljs$lang$applyTo = (function (arglist__54138){
var args = cljs.core.seq(arglist__54138);
return G__54136__delegate(args);
});
G__54136.cljs$core$IFn$_invoke$arity$variadic = G__54136__delegate;
return G__54136;
})()
);

(o.error = (function() { 
var G__54139__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__54139 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54140__i = 0, G__54140__a = new Array(arguments.length -  0);
while (G__54140__i < G__54140__a.length) {G__54140__a[G__54140__i] = arguments[G__54140__i + 0]; ++G__54140__i;}
  args = new cljs.core.IndexedSeq(G__54140__a,0,null);
} 
return G__54139__delegate.call(this,args);};
G__54139.cljs$lang$maxFixedArity = 0;
G__54139.cljs$lang$applyTo = (function (arglist__54141){
var args = cljs.core.seq(arglist__54141);
return G__54139__delegate(args);
});
G__54139.cljs$core$IFn$_invoke$arity$variadic = G__54139__delegate;
return G__54139;
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
