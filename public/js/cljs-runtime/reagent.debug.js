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
var G__53754__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__53754 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53755__i = 0, G__53755__a = new Array(arguments.length -  0);
while (G__53755__i < G__53755__a.length) {G__53755__a[G__53755__i] = arguments[G__53755__i + 0]; ++G__53755__i;}
  args = new cljs.core.IndexedSeq(G__53755__a,0,null);
} 
return G__53754__delegate.call(this,args);};
G__53754.cljs$lang$maxFixedArity = 0;
G__53754.cljs$lang$applyTo = (function (arglist__53756){
var args = cljs.core.seq(arglist__53756);
return G__53754__delegate(args);
});
G__53754.cljs$core$IFn$_invoke$arity$variadic = G__53754__delegate;
return G__53754;
})()
);

(o.error = (function() { 
var G__53757__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__53757 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53758__i = 0, G__53758__a = new Array(arguments.length -  0);
while (G__53758__i < G__53758__a.length) {G__53758__a[G__53758__i] = arguments[G__53758__i + 0]; ++G__53758__i;}
  args = new cljs.core.IndexedSeq(G__53758__a,0,null);
} 
return G__53757__delegate.call(this,args);};
G__53757.cljs$lang$maxFixedArity = 0;
G__53757.cljs$lang$applyTo = (function (arglist__53759){
var args = cljs.core.seq(arglist__53759);
return G__53757__delegate(args);
});
G__53757.cljs$core$IFn$_invoke$arity$variadic = G__53757__delegate;
return G__53757;
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
