// Compiled by ClojureScript 1.10.339 {}
goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug');
goog.require('cljs.core');
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.has_console = (typeof console !== 'undefined');
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.tracking = false;
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.warnings !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.track_console !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__9594__delegate = function (args){
return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9594 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9595__i = 0, G__9595__a = new Array(arguments.length -  0);
while (G__9595__i < G__9595__a.length) {G__9595__a[G__9595__i] = arguments[G__9595__i + 0]; ++G__9595__i;}
  args = new cljs.core.IndexedSeq(G__9595__a,0,null);
} 
return G__9594__delegate.call(this,args);};
G__9594.cljs$lang$maxFixedArity = 0;
G__9594.cljs$lang$applyTo = (function (arglist__9596){
var args = cljs.core.seq(arglist__9596);
return G__9594__delegate(args);
});
G__9594.cljs$core$IFn$_invoke$arity$variadic = G__9594__delegate;
return G__9594;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__9597__delegate = function (args){
return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9597 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9598__i = 0, G__9598__a = new Array(arguments.length -  0);
while (G__9598__i < G__9598__a.length) {G__9598__a[G__9598__i] = arguments[G__9598__i + 0]; ++G__9598__i;}
  args = new cljs.core.IndexedSeq(G__9598__a,0,null);
} 
return G__9597__delegate.call(this,args);};
G__9597.cljs$lang$maxFixedArity = 0;
G__9597.cljs$lang$applyTo = (function (arglist__9599){
var args = cljs.core.seq(arglist__9599);
return G__9597__delegate(args);
});
G__9597.cljs$core$IFn$_invoke$arity$variadic = G__9597__delegate;
return G__9597;
})()
;})(o))
;

return o;
})();
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.track_warnings = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$debug$track_warnings(f){
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.warnings,null);

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
