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
var G__12740 = cljs.core.cst$kw$error;
var G__12741 = "re-frame-undo: undo-config! called within unknown keys: ";
var G__12742 = unknown_keys;
return (re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__12740,G__12741,G__12742) : re_frame.core.console.call(null,G__12740,G__12741,G__12742));
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

cljs.core.reset_BANG_(day8.re_frame.undo.undo_list,cljs.core.vec(cljs.core.take_last(day8.re_frame.undo.max_undos(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(day8.re_frame.undo.undo_list),(function (){var fexpr__12743 = cljs.core.cst$kw$harvest_DASH_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(day8.re_frame.undo.config));
return (fexpr__12743.cljs$core$IFn$_invoke$arity$1 ? fexpr__12743.cljs$core$IFn$_invoke$arity$1(re_frame.db.app_db) : fexpr__12743.call(null,re_frame.db.app_db));
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
var G__12744_12746 = cur;
var G__12745_12747 = cljs.core.last(u);
(reinstater.cljs$core$IFn$_invoke$arity$2 ? reinstater.cljs$core$IFn$_invoke$arity$2(G__12744_12746,G__12745_12747) : reinstater.call(null,G__12744_12746,G__12745_12747));

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

var G__12748 = (n - (1));
n = G__12748;
continue;
} else {
return null;
}
break;
}
});
day8.re_frame.undo.undo_handler = (function day8$re_frame$undo$undo_handler(_,p__12749){
var vec__12750 = p__12749;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12750,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12750,(1),null);
if(cljs.core.not(day8.re_frame.undo.undos_QMARK_())){
var G__12753_12755 = cljs.core.cst$kw$warn;
var G__12754_12756 = "re-frame: you did a (dispatch [:undo]), but there is nothing to undo.";
(re_frame.core.console.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$2(G__12753_12755,G__12754_12756) : re_frame.core.console.call(null,G__12753_12755,G__12754_12756));
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
var G__12757_12759 = cur;
var G__12758_12760 = cljs.core.first(r);
(reinstater.cljs$core$IFn$_invoke$arity$2 ? reinstater.cljs$core$IFn$_invoke$arity$2(G__12757_12759,G__12758_12760) : reinstater.call(null,G__12757_12759,G__12758_12760));

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

var G__12761 = (n - (1));
n = G__12761;
continue;
} else {
return null;
}
break;
}
});
day8.re_frame.undo.redo_handler = (function day8$re_frame$undo$redo_handler(_,p__12762){
var vec__12763 = p__12762;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12763,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12763,(1),null);
if(cljs.core.not(day8.re_frame.undo.redos_QMARK_())){
var G__12766_12768 = cljs.core.cst$kw$warn;
var G__12767_12769 = "re-frame: you did a (dispatch [:redo]), but there is nothing to redo.";
(re_frame.core.console.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$2(G__12766_12768,G__12767_12769) : re_frame.core.console.call(null,G__12766_12768,G__12767_12769));
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
var G__12770_12772 = cljs.core.cst$kw$warn;
var G__12771_12773 = "re-frame: you did a (dispatch [:purge-redos]), but there is nothing to redo.";
(re_frame.core.console.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$2(G__12770_12772,G__12771_12773) : re_frame.core.console.call(null,G__12770_12772,G__12771_12773));
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
var G__12775 = arguments.length;
switch (G__12775) {
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
var G__12776 = cljs.core.cst$kw$id;
var G__12777 = cljs.core.cst$kw$undoable;
var G__12778 = cljs.core.cst$kw$after;
var G__12779 = ((function (G__12776,G__12777,G__12778){
return (function (context){
var event = (function (){var G__12780 = context;
var G__12781 = cljs.core.cst$kw$event;
return (re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$2(G__12780,G__12781) : re_frame.core.get_coeffect.call(null,G__12780,G__12781));
})();
var undo_effect = (function (){var G__12782 = context;
var G__12783 = cljs.core.cst$kw$undo;
return (re_frame.core.get_effect.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.get_effect.cljs$core$IFn$_invoke$arity$2(G__12782,G__12783) : re_frame.core.get_effect.call(null,G__12782,G__12783));
})();
var explanation__$1 = ((!((undo_effect == null)))?undo_effect:((cljs.core.fn_QMARK_(explanation))?(function (){var G__12784 = (function (){var G__12786 = context;
var G__12787 = cljs.core.cst$kw$db;
return (re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$2(G__12786,G__12787) : re_frame.core.get_coeffect.call(null,G__12786,G__12787));
})();
var G__12785 = event;
return (explanation.cljs$core$IFn$_invoke$arity$2 ? explanation.cljs$core$IFn$_invoke$arity$2(G__12784,G__12785) : explanation.call(null,G__12784,G__12785));
})():((typeof explanation === 'string')?explanation:(((explanation == null))?"":(function (){var G__12788 = cljs.core.cst$kw$error;
var G__12789 = "re-frame-undo: \"undoable\" interceptor on event ";
var G__12790 = event;
var G__12791 = " given a bad parameter. Got: ";
var G__12792 = explanation;
return (re_frame.core.console.cljs$core$IFn$_invoke$arity$5 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$5(G__12788,G__12789,G__12790,G__12791,G__12792) : re_frame.core.console.call(null,G__12788,G__12789,G__12790,G__12791,G__12792));
})()
))));
day8.re_frame.undo.store_now_BANG_(explanation__$1);

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,cljs.core.cst$kw$effects,cljs.core.dissoc,cljs.core.cst$kw$undo);
});})(G__12776,G__12777,G__12778))
;
return (re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$4(G__12776,G__12777,G__12778,G__12779) : re_frame.core.__GT_interceptor.call(null,G__12776,G__12777,G__12778,G__12779));
});

day8.re_frame.undo.undoable.cljs$lang$maxFixedArity = 1;

day8.re_frame.undo.register_events_subs_BANG_ = (function day8$re_frame$undo$register_events_subs_BANG_(){
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$undo,day8.re_frame.undo.undo_handler);

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$redo,day8.re_frame.undo.redo_handler);

return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$purge_DASH_redos,day8.re_frame.undo.purge_redo_handler);
});
day8.re_frame.undo.register_events_subs_BANG_();
