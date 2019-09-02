// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.music.framework');
goog.require('cljs.core');

/**
 * Calculate the new state and `handle!` any new Actions that arise.
 * @interface
 */
mecca.music.framework.Action = function(){};

mecca.music.framework.process = (function mecca$music$framework$process(this$,handle_BANG_,state){
if(((!((this$ == null))) && (!((this$.mecca$music$framework$Action$process$arity$3 == null))))){
return this$.mecca$music$framework$Action$process$arity$3(this$,handle_BANG_,state);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (mecca.music.framework.process[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,handle_BANG_,state);
} else {
var m__4244__auto____$1 = (mecca.music.framework.process["_"]);
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
mecca.music.framework.apply_action_BANG_ = (function mecca$music$framework$apply_action_BANG_(state_atom,action){
return cljs.core.swap_BANG_.call(null,state_atom,(function (state){
return mecca.music.framework.process.call(null,action,mecca.music.framework.handler_for.call(null,state_atom),state);
}));
});
/**
 * Build a `handle!` function for the atom.
 */
mecca.music.framework.handler_for = (function mecca$music$framework$handler_for(state_atom){
return cljs.core.partial.call(null,mecca.music.framework.apply_action_BANG_,state_atom);
});

//# sourceMappingURL=framework.js.map
