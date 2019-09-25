// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.audio.framework');
goog.require('cljs.core');

/**
 * Calculate the new state and `handle!` any new Actions that arise.
 * @interface
 */
mecca.audio.framework.Action = function(){};

mecca.audio.framework.process = (function mecca$audio$framework$process(this$,handle_BANG_,state){
if(((!((this$ == null))) && (!((this$.mecca$audio$framework$Action$process$arity$3 == null))))){
return this$.mecca$audio$framework$Action$process$arity$3(this$,handle_BANG_,state);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (mecca.audio.framework.process[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,handle_BANG_,state);
} else {
var m__4244__auto____$1 = (mecca.audio.framework.process["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,handle_BANG_,state);
} else {
throw cljs.core.missing_protocol.call(null,"Action.process",this$);
}
}
}
});

/**
 * Update the atom using the action.
 */
mecca.audio.framework.apply_action_BANG_ = (function mecca$audio$framework$apply_action_BANG_(state_atom,action){
return cljs.core.swap_BANG_.call(null,state_atom,(function (state){
return mecca.audio.framework.process.call(null,action,mecca.audio.framework.handler_for.call(null,state_atom),state);
}));
});
/**
 * Build a `handle!` function for the atom.
 */
mecca.audio.framework.handler_for = (function mecca$audio$framework$handler_for(state_atom){
return cljs.core.partial.call(null,mecca.audio.framework.apply_action_BANG_,state_atom);
});

//# sourceMappingURL=framework.js.map
