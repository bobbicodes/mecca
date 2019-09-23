// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('day8.re_frame.undo');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_frame.db');
day8.re_frame.undo.config = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$max_DASH_undos,(50),cljs.core.cst$kw$harvest_DASH_fn,cljs.core.deref,cljs.core.cst$kw$reinstate_DASH_fn,cljs.core.reset_BANG_], null));
/**
 * Set configuration parameters for library.
 * 
 *   Should be called on app startup.
 */
day8.re_frame.undo.undo_config_BANG_ = (function day8$re_frame$undo$undo_config_BANG_(new_config){
var temp__5455__auto__ = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(new_config)),cljs.core.set(cljs.core.keys(cljs.core.deref(day8.re_frame.undo.config)))));
if(temp__5455__auto__){
var unknown_keys = temp__5455__auto__;
var G__12591 = cljs.core.cst$kw$error;
var G__12592 = "re-frame-undo: undo-config! called within unknown keys: ";
var G__12593 = unknown_keys;
return (re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__12591,G__12592,G__12593) : re_frame.core.console.call(null,G__12591,G__12592,G__12593));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame.undo.config,cljs.core.merge,new_config);
}
});
day8.re_frame.undo.max_undos = (function day8$re_frame$undo$max_undos(){
return cljs.core.cst$kw$max_DASH_undos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(day8.re_frame.undo.config));
});
/**
 * A list of history states
 */
day8.re_frame.undo.undo_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
/**
 * A list of future states, caused by undoing
 */
day8.re_frame.undo.redo_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
/**
 * Mirrors app-db
 */
day8.re_frame.undo.app_explain = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
/**
 * Mirrors undo-list
 */
day8.re_frame.undo.undo_explain_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
/**
 * Mirrors redo-list
 */
day8.re_frame.undo.redo_explain_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
day8.re_frame.undo.clear_undos_BANG_ = (function day8$re_frame$undo$clear_undos_BANG_(){
cljs.core.reset_BANG_(day8.re_frame.undo.undo_list,cljs.core.PersistentVector.EMPTY);

return cljs.core.reset_BANG_(day8.re_frame.undo.undo_explain_list,cljs.core.PersistentVector.EMPTY);
});
day8.re_frame.undo.clear_redos_BANG_ = (function day8$re_frame$undo$clear_redos_BANG_(){
cljs.core.reset_BANG_(day8.re_frame.undo.redo_list,cljs.core.PersistentVector.EMPTY);

return cljs.core.reset_BANG_(day8.re_frame.undo.redo_explain_list,cljs.core.PersistentVector.EMPTY);
});
day8.re_frame.undo.clear_history_BANG_ = (function day8$re_frame$undo$clear_history_BANG_(){
day8.re_frame.undo.clear_undos_BANG_();

day8.re_frame.undo.clear_redos_BANG_();

return cljs.core.reset_BANG_(day8.re_frame.undo.app_explain,"");
});
/**
 * Stores the value currently in app-db, so the user can later undo
 */
day8.re_frame.undo.store_now_BANG_ = (function day8$re_frame$undo$store_now_BANG_(explanation){
day8.re_frame.undo.clear_redos_BANG_();

cljs.core.reset_BANG_(day8.re_frame.undo.undo_list,cljs.core.vec(cljs.core.take_last(day8.re_frame.undo.max_undos(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(day8.re_frame.undo.undo_list),(function (){var fexpr__12594 = cljs.core.cst$kw$harvest_DASH_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(day8.re_frame.undo.config));
return (fexpr__12594.cljs$core$IFn$_invoke$arity$1 ? fexpr__12594.cljs$core$IFn$_invoke$arity$1(re_frame.db.app_db) : fexpr__12594.call(null,re_frame.db.app_db));
})()))));

cljs.core.reset_BANG_(day8.re_frame.undo.undo_explain_list,cljs.core.vec(cljs.core.take_last(day8.re_frame.undo.max_undos(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(day8.re_frame.undo.undo_explain_list),cljs.core.deref(day8.re_frame.undo.app_explain)))));

return cljs.core.reset_BANG_(day8.re_frame.undo.app_explain,explanation);
});
/**
 * Returns true if undos exist, false otherwise
 */
day8.re_frame.undo.undos_QMARK_ = (function day8$re_frame$undo$undos_QMARK_(){
return cljs.core.seq(cljs.core.deref(day8.re_frame.undo.undo_list));
});
/**
 * Returns true if redos exist, false otherwise
 */
day8.re_frame.undo.redos_QMARK_ = (function day8$re_frame$undo$redos_QMARK_(){
return cljs.core.seq(cljs.core.deref(day8.re_frame.undo.redo_list));
});
/**
 * Returns a vector of undo descriptions, perhaps empty
 */
day8.re_frame.undo.undo_explanations = (function day8$re_frame$undo$undo_explanations(){
if(cljs.core.truth_(day8.re_frame.undo.undos_QMARK_())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(day8.re_frame.undo.undo_explain_list),cljs.core.deref(day8.re_frame.undo.app_explain));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
re_frame.core.reg_sub_raw(cljs.core.cst$kw$undos_QMARK_,(function day8$re_frame$undo$handler(_,___$1){
return reagent.ratom.make_reaction((function (){
return day8.re_frame.undo.undos_QMARK_();
}));
}));
re_frame.core.reg_sub_raw(cljs.core.cst$kw$redos_QMARK_,(function day8$re_frame$undo$handler(_,___$1){
return reagent.ratom.make_reaction((function (){
return day8.re_frame.undo.redos_QMARK_();
}));
}));
re_frame.core.reg_sub_raw(cljs.core.cst$kw$undo_DASH_explanations,(function day8$re_frame$undo$handler(_,___$1){
return reagent.ratom.make_reaction((function (){
return day8.re_frame.undo.undo_explanations();
}));
}));
re_frame.core.reg_sub_raw(cljs.core.cst$kw$redo_DASH_explanations,(function day8$re_frame$undo$handler(_,___$1){
return reagent.ratom.make_reaction((function (){
return cljs.core.deref(day8.re_frame.undo.redo_explain_list);
}));
}));
day8.re_frame.undo.undo = (function day8$re_frame$undo$undo(harvester,reinstater,undos,cur,redos){
var u = cljs.core.deref(undos);
var r = cljs.core.cons((harvester.cljs$core$IFn$_invoke$arity$1 ? harvester.cljs$core$IFn$_invoke$arity$1(cur) : harvester.call(null,cur)),cljs.core.deref(redos));
var G__12595_12597 = cur;
var G__12596_12598 = cljs.core.last(u);
(reinstater.cljs$core$IFn$_invoke$arity$2 ? reinstater.cljs$core$IFn$_invoke$arity$2(G__12595_12597,G__12596_12598) : reinstater.call(null,G__12595_12597,G__12596_12598));

cljs.core.reset_BANG_(redos,r);

return cljs.core.reset_BANG_(undos,cljs.core.pop(u));
});
/**
 * undo n steps or until we run out of undos
 */
day8.re_frame.undo.undo_n = (function day8$re_frame$undo$undo_n(n){
while(true){
if(cljs.core.truth_((function (){var and__3938__auto__ = (n > (0));
if(and__3938__auto__){
return day8.re_frame.undo.undos_QMARK_();
} else {
return and__3938__auto__;
}
})())){
day8.re_frame.undo.undo(cljs.core.cst$kw$harvest_DASH_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(day8.re_frame.undo.config)),cljs.core.cst$kw$reinstate_DASH_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(day8.re_frame.undo.config)),day8.re_frame.undo.undo_list,re_frame.db.app_db,day8.re_frame.undo.redo_list);

day8.re_frame.undo.undo(cljs.core.deref,cljs.core.reset_BANG_,day8.re_frame.undo.undo_explain_list,day8.re_frame.undo.app_explain,day8.re_frame.undo.redo_explain_list);

var G__12599 = (n - (1));
n = G__12599;
continue;
} else {
return null;
}
break;
}
});
day8.re_frame.undo.undo_handler = (function day8$re_frame$undo$undo_handler(_,p__12600){
var vec__12601 = p__12600;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12601,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12601,(1),null);
if(cljs.core.not(day8.re_frame.undo.undos_QMARK_())){
var G__12604_12606 = cljs.core.cst$kw$warn;
var G__12605_12607 = "re-frame: you did a (dispatch [:undo]), but there is nothing to undo.";
(re_frame.core.console.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$2(G__12604_12606,G__12605_12607) : re_frame.core.console.call(null,G__12604_12606,G__12605_12607));
} else {
day8.re_frame.undo.undo_n((function (){var or__3949__auto__ = n;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (1);
}
})());
}

return cljs.core.PersistentArrayMap.EMPTY;
});
day8.re_frame.undo.redo = (function day8$re_frame$undo$redo(harvester,reinstater,undos,cur,redos){
var u = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(undos),(harvester.cljs$core$IFn$_invoke$arity$1 ? harvester.cljs$core$IFn$_invoke$arity$1(cur) : harvester.call(null,cur)));
var r = cljs.core.deref(redos);
var G__12608_12610 = cur;
var G__12609_12611 = cljs.core.first(r);
(reinstater.cljs$core$IFn$_invoke$arity$2 ? reinstater.cljs$core$IFn$_invoke$arity$2(G__12608_12610,G__12609_12611) : reinstater.call(null,G__12608_12610,G__12609_12611));

cljs.core.reset_BANG_(redos,cljs.core.rest(r));

return cljs.core.reset_BANG_(undos,u);
});
/**
 * redo n steps or until we run out of redos
 */
day8.re_frame.undo.redo_n = (function day8$re_frame$undo$redo_n(n){
while(true){
if(cljs.core.truth_((function (){var and__3938__auto__ = (n > (0));
if(and__3938__auto__){
return day8.re_frame.undo.redos_QMARK_();
} else {
return and__3938__auto__;
}
})())){
day8.re_frame.undo.redo(cljs.core.cst$kw$harvest_DASH_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(day8.re_frame.undo.config)),cljs.core.cst$kw$reinstate_DASH_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(day8.re_frame.undo.config)),day8.re_frame.undo.undo_list,re_frame.db.app_db,day8.re_frame.undo.redo_list);

day8.re_frame.undo.redo(cljs.core.deref,cljs.core.reset_BANG_,day8.re_frame.undo.undo_explain_list,day8.re_frame.undo.app_explain,day8.re_frame.undo.redo_explain_list);

var G__12612 = (n - (1));
n = G__12612;
continue;
} else {
return null;
}
break;
}
});
day8.re_frame.undo.redo_handler = (function day8$re_frame$undo$redo_handler(_,p__12613){
var vec__12614 = p__12613;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12614,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12614,(1),null);
if(cljs.core.not(day8.re_frame.undo.redos_QMARK_())){
var G__12617_12619 = cljs.core.cst$kw$warn;
var G__12618_12620 = "re-frame: you did a (dispatch [:redo]), but there is nothing to redo.";
(re_frame.core.console.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$2(G__12617_12619,G__12618_12620) : re_frame.core.console.call(null,G__12617_12619,G__12618_12620));
} else {
day8.re_frame.undo.redo_n((function (){var or__3949__auto__ = n;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (1);
}
})());
}

return cljs.core.PersistentArrayMap.EMPTY;
});
day8.re_frame.undo.purge_redo_handler = (function day8$re_frame$undo$purge_redo_handler(db,_){
if(cljs.core.not(day8.re_frame.undo.redos_QMARK_())){
var G__12621_12623 = cljs.core.cst$kw$warn;
var G__12622_12624 = "re-frame: you did a (dispatch [:purge-redos]), but there is nothing to redo.";
(re_frame.core.console.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$2(G__12621_12623,G__12622_12624) : re_frame.core.console.call(null,G__12621_12623,G__12622_12624));
} else {
day8.re_frame.undo.clear_redos_BANG_();
}

return db;
});
/**
 * returns a side-effecting Interceptor, which stores an undo checkpoint in
 *   `:after` processing.
 * If the `:effect` cotnains an `:undo` key, then use the explanation provided
 * by it. Otherwise, `explanation` can be:
 *   - a string (of explanation)
 *   - a function expected to return a string of explanation. It will be called
 *     with two arguments: `db` and `event-vec`.
 *   - a nil, in which case "" is recorded as the explanation
 *   
 */
day8.re_frame.undo.undoable = (function day8$re_frame$undo$undoable(var_args){
var G__12626 = arguments.length;
switch (G__12626) {
case 0:
return day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$0 = (function (){
return day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1(null);
});

day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1 = (function (explanation){
var G__12627 = cljs.core.cst$kw$id;
var G__12628 = cljs.core.cst$kw$undoable;
var G__12629 = cljs.core.cst$kw$after;
var G__12630 = ((function (G__12627,G__12628,G__12629){
return (function (context){
var event = (function (){var G__12631 = context;
var G__12632 = cljs.core.cst$kw$event;
return (re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$2(G__12631,G__12632) : re_frame.core.get_coeffect.call(null,G__12631,G__12632));
})();
var undo_effect = (function (){var G__12633 = context;
var G__12634 = cljs.core.cst$kw$undo;
return (re_frame.core.get_effect.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.get_effect.cljs$core$IFn$_invoke$arity$2(G__12633,G__12634) : re_frame.core.get_effect.call(null,G__12633,G__12634));
})();
var explanation__$1 = ((!((undo_effect == null)))?undo_effect:((cljs.core.fn_QMARK_(explanation))?(function (){var G__12635 = (function (){var G__12637 = context;
var G__12638 = cljs.core.cst$kw$db;
return (re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$2(G__12637,G__12638) : re_frame.core.get_coeffect.call(null,G__12637,G__12638));
})();
var G__12636 = event;
return (explanation.cljs$core$IFn$_invoke$arity$2 ? explanation.cljs$core$IFn$_invoke$arity$2(G__12635,G__12636) : explanation.call(null,G__12635,G__12636));
})():((typeof explanation === 'string')?explanation:(((explanation == null))?"":(function (){var G__12639 = cljs.core.cst$kw$error;
var G__12640 = "re-frame-undo: \"undoable\" interceptor on event ";
var G__12641 = event;
var G__12642 = " given a bad parameter. Got: ";
var G__12643 = explanation;
return (re_frame.core.console.cljs$core$IFn$_invoke$arity$5 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$5(G__12639,G__12640,G__12641,G__12642,G__12643) : re_frame.core.console.call(null,G__12639,G__12640,G__12641,G__12642,G__12643));
})()
))));
day8.re_frame.undo.store_now_BANG_(explanation__$1);

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,cljs.core.cst$kw$effects,cljs.core.dissoc,cljs.core.cst$kw$undo);
});})(G__12627,G__12628,G__12629))
;
return (re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$4(G__12627,G__12628,G__12629,G__12630) : re_frame.core.__GT_interceptor.call(null,G__12627,G__12628,G__12629,G__12630));
});

day8.re_frame.undo.undoable.cljs$lang$maxFixedArity = 1;

day8.re_frame.undo.register_events_subs_BANG_ = (function day8$re_frame$undo$register_events_subs_BANG_(){
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$undo,day8.re_frame.undo.undo_handler);

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$redo,day8.re_frame.undo.redo_handler);

return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$purge_DASH_redos,day8.re_frame.undo.purge_redo_handler);
});
day8.re_frame.undo.register_events_subs_BANG_();
