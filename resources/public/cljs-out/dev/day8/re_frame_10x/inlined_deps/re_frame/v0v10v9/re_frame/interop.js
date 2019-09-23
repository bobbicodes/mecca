// Compiled by ClojureScript 1.10.339 {}
goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop');
goog.require('cljs.core');
goog.require('goog.async.nextTick');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.next_tick = goog.async.nextTick;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.empty_queue = cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.after_render = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.after_render;
/**
 * @define {boolean}
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.debug_enabled_QMARK_ = goog.DEBUG;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.ratom = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$interop$ratom(x){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.atom.call(null,x);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.ratom_QMARK_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$interop$ratom_QMARK_(x){
if(!((x == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$IReactiveAtom$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.IReactiveAtom,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.IReactiveAtom,x);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.deref_QMARK_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$interop$deref_QMARK_(x){
if(!((x == null))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.make_reaction = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$interop$make_reaction(f){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.make_reaction.call(null,f);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.add_on_dispose_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$interop$add_on_dispose_BANG_(a_ratom,f){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.add_on_dispose_BANG_.call(null,a_ratom,f);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.dispose_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$interop$dispose_BANG_(a_ratom){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.dispose_BANG_.call(null,a_ratom);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.set_timeout_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$interop$set_timeout_BANG_(f,ms){
return setTimeout(f,ms);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$interop$now(){
if((((typeof performance !== 'undefined')) && ((typeof performance !== 'undefined') && (typeof performance.now !== 'undefined')))){
return performance.now();
} else {
return Date.now();
}
});
/**
 * Produces an id for reactive Reagent values
 *   e.g. reactions, ratoms, cursors.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.reagent_id = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$interop$reagent_id(reactive_val){
if(((!((reactive_val == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === reactive_val.day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$IReactiveAtom$))))?true:false):false)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var pred__12104 = cljs.core.instance_QMARK_;
var expr__12105 = reactive_val;
if(cljs.core.truth_(pred__12104.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RAtom,expr__12105))){
return "ra";
} else {
if(cljs.core.truth_(pred__12104.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RCursor,expr__12105))){
return "rc";
} else {
if(cljs.core.truth_(pred__12104.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction,expr__12105))){
return "rx";
} else {
if(cljs.core.truth_(pred__12104.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Track,expr__12105))){
return "tr";
} else {
return "other";
}
}
}
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,reactive_val))].join('');
} else {
return null;
}
});

//# sourceMappingURL=interop.js.map
