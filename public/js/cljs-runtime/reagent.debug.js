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
var G__35168__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35168 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35169__i = 0, G__35169__a = new Array(arguments.length -  0);
while (G__35169__i < G__35169__a.length) {G__35169__a[G__35169__i] = arguments[G__35169__i + 0]; ++G__35169__i;}
  args = new cljs.core.IndexedSeq(G__35169__a,0,null);
} 
return G__35168__delegate.call(this,args);};
G__35168.cljs$lang$maxFixedArity = 0;
G__35168.cljs$lang$applyTo = (function (arglist__35170){
var args = cljs.core.seq(arglist__35170);
return G__35168__delegate(args);
});
G__35168.cljs$core$IFn$_invoke$arity$variadic = G__35168__delegate;
return G__35168;
})()
);

(o.error = (function() { 
var G__35171__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35171 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35172__i = 0, G__35172__a = new Array(arguments.length -  0);
while (G__35172__i < G__35172__a.length) {G__35172__a[G__35172__i] = arguments[G__35172__i + 0]; ++G__35172__i;}
  args = new cljs.core.IndexedSeq(G__35172__a,0,null);
} 
return G__35171__delegate.call(this,args);};
G__35171.cljs$lang$maxFixedArity = 0;
G__35171.cljs$lang$applyTo = (function (arglist__35173){
var args = cljs.core.seq(arglist__35173);
return G__35171__delegate(args);
});
G__35171.cljs$core$IFn$_invoke$arity$variadic = G__35171__delegate;
return G__35171;
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
