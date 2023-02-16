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
var G__53469__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__53469 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53470__i = 0, G__53470__a = new Array(arguments.length -  0);
while (G__53470__i < G__53470__a.length) {G__53470__a[G__53470__i] = arguments[G__53470__i + 0]; ++G__53470__i;}
  args = new cljs.core.IndexedSeq(G__53470__a,0,null);
} 
return G__53469__delegate.call(this,args);};
G__53469.cljs$lang$maxFixedArity = 0;
G__53469.cljs$lang$applyTo = (function (arglist__53471){
var args = cljs.core.seq(arglist__53471);
return G__53469__delegate(args);
});
G__53469.cljs$core$IFn$_invoke$arity$variadic = G__53469__delegate;
return G__53469;
})()
);

(o.error = (function() { 
var G__53472__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__53472 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53473__i = 0, G__53473__a = new Array(arguments.length -  0);
while (G__53473__i < G__53473__a.length) {G__53473__a[G__53473__i] = arguments[G__53473__i + 0]; ++G__53473__i;}
  args = new cljs.core.IndexedSeq(G__53473__a,0,null);
} 
return G__53472__delegate.call(this,args);};
G__53472.cljs$lang$maxFixedArity = 0;
G__53472.cljs$lang$applyTo = (function (arglist__53474){
var args = cljs.core.seq(arglist__53474);
return G__53472__delegate(args);
});
G__53472.cljs$core$IFn$_invoke$arity$variadic = G__53472__delegate;
return G__53472;
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
