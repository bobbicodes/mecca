// Compiled by ClojureScript 1.10.339 {}
goog.provide('day8.re_frame_10x.metamorphic');
goog.require('cljs.core');
/**
 * Returns a transducer that filters for :id between beginning and ending. Inclusive on both ends.
 */
day8.re_frame_10x.metamorphic.id_between_xf = (function day8$re_frame_10x$metamorphic$id_between_xf(beginning,ending){
return cljs.core.filter.call(null,(function (p1__12673_SHARP_){
return (((beginning <= new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__12673_SHARP_))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__12673_SHARP_) <= ending)));
}));
});
day8.re_frame_10x.metamorphic.fsm_trigger_QMARK_ = (function day8$re_frame_10x$metamorphic$fsm_trigger_QMARK_(event){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("re-frame.router","fsm-trigger","re-frame.router/fsm-trigger",1379787274),new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(event));
});
day8.re_frame_10x.metamorphic.elapsed_time = (function day8$re_frame_10x$metamorphic$elapsed_time(ev1,ev2){
var start_of_epoch = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(ev1);
var end_of_epoch = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(ev2);
if(((!((start_of_epoch == null))) && (!((end_of_epoch == null))))){
return (end_of_epoch - start_of_epoch);
} else {
return null;
}
});
day8.re_frame_10x.metamorphic.run_queue_QMARK_ = (function day8$re_frame_10x$metamorphic$run_queue_QMARK_(event){
var and__3938__auto__ = day8.re_frame_10x.metamorphic.fsm_trigger_QMARK_.call(null,event);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027)], null));
} else {
return and__3938__auto__;
}
});
day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_ = (function day8$re_frame_10x$metamorphic$request_animation_frame_QMARK_(event){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"raf","raf",-1295410152),new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(event));
});
day8.re_frame_10x.metamorphic.request_animation_frame_end_QMARK_ = (function day8$re_frame_10x$metamorphic$request_animation_frame_end_QMARK_(event){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"raf-end","raf-end",-220596864),new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(event));
});
day8.re_frame_10x.metamorphic.summarise_event = (function day8$re_frame_10x$metamorphic$summarise_event(ev){
return cljs.core.update.call(null,cljs.core.dissoc.call(null,ev,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"child-of","child-of",-903376662)),new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.dissoc,new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964),new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
});
day8.re_frame_10x.metamorphic.summarise_match = (function day8$re_frame_10x$metamorphic$summarise_match(match){
return cljs.core.map.call(null,day8.re_frame_10x.metamorphic.summarise_event,match);
});
day8.re_frame_10x.metamorphic.beginning_id = (function day8$re_frame_10x$metamorphic$beginning_id(match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,match));
});
day8.re_frame_10x.metamorphic.ending_id = (function day8$re_frame_10x$metamorphic$ending_id(match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,match));
});
day8.re_frame_10x.metamorphic.add_event_from_idle_QMARK_ = (function day8$re_frame_10x$metamorphic$add_event_from_idle_QMARK_(event){
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword("re-frame.router","fsm-trigger","re-frame.router/fsm-trigger",1379787274),new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(event))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null))));
});
day8.re_frame_10x.metamorphic.subscription_QMARK_ = (function day8$re_frame_10x$metamorphic$subscription_QMARK_(trace){
return ((cljs.core._EQ_.call(null,"sub",cljs.core.namespace.call(null,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)))) && (cljs.core.not.call(null,cljs.core.get_in.call(null,trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"cached?","cached?",86081880)], null)))));
});
day8.re_frame_10x.metamorphic.subscription_created_QMARK_ = (function day8$re_frame_10x$metamorphic$subscription_created_QMARK_(trace){
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace))) && (cljs.core.not.call(null,cljs.core.get_in.call(null,trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"cached?","cached?",86081880)], null)))));
});
day8.re_frame_10x.metamorphic.subscription_re_run_QMARK_ = (function day8$re_frame_10x$metamorphic$subscription_re_run_QMARK_(trace){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace));
});
day8.re_frame_10x.metamorphic.subscription_destroyed_QMARK_ = (function day8$re_frame_10x$metamorphic$subscription_destroyed_QMARK_(trace){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace));
});
day8.re_frame_10x.metamorphic.subscription_not_run_QMARK_ = (function day8$re_frame_10x$metamorphic$subscription_not_run_QMARK_(trace){
return false;
});
/**
 * Is this part of re-frame internals?
 */
day8.re_frame_10x.metamorphic.low_level_re_frame_trace_QMARK_ = (function day8$re_frame_10x$metamorphic$low_level_re_frame_trace_QMARK_(trace){
var G__12674 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace);
var G__12674__$1 = (((G__12674 instanceof cljs.core.Keyword))?G__12674.fqn:null);
switch (G__12674__$1) {
case "re-frame.router/fsm-trigger":
return true;

break;
default:
return false;

}
});
/**
 * Is this part of reagent internals?
 */
day8.re_frame_10x.metamorphic.low_level_reagent_trace_QMARK_ = (function day8$re_frame_10x$metamorphic$low_level_reagent_trace_QMARK_(trace){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace));
});
day8.re_frame_10x.metamorphic.render_QMARK_ = (function day8$re_frame_10x$metamorphic$render_QMARK_(trace){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace));
});
day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_ = (function day8$re_frame_10x$metamorphic$unchanged_l2_subscription_QMARK_(sub){
var and__3938__auto__ = cljs.core.get_in.call(null,sub,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","traits","sub/traits",1778340671),new cljs.core.Keyword(null,"unchanged?","unchanged?",1212001763)], null));
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not_any_QMARK_.call(null,((function (and__3938__auto__){
return (function (p1__12676_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),p1__12676_SHARP_);
});})(and__3938__auto__))
,new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(sub))) && (cljs.core._EQ_.call(null,(2),cljs.core.get.call(null,sub,new cljs.core.Keyword(null,"layer","layer",-1601820589)))));
} else {
return and__3938__auto__;
}
});
/**
 * Marks the end of event processing running.
 */
day8.re_frame_10x.metamorphic.finish_run_QMARK_ = (function day8$re_frame_10x$metamorphic$finish_run_QMARK_(event){
var and__3938__auto__ = day8.re_frame_10x.metamorphic.fsm_trigger_QMARK_.call(null,event);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"finish-run","finish-run",753148477)], null));
} else {
return and__3938__auto__;
}
});
day8.re_frame_10x.metamorphic.event_run_QMARK_ = (function day8$re_frame_10x$metamorphic$event_run_QMARK_(event){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(event));
});
day8.re_frame_10x.metamorphic.event_handler_QMARK_ = (function day8$re_frame_10x$metamorphic$event_handler_QMARK_(trace){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("event","handler","event/handler",-295903150),new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace));
});
day8.re_frame_10x.metamorphic.event_dofx_QMARK_ = (function day8$re_frame_10x$metamorphic$event_dofx_QMARK_(trace){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452),new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace));
});
/**
 * Detects the start of a re-frame epoch
 * 
 *   Normally an epoch would always start with the queue being run, but with a dispatch-sync, the event is run directly.
 */
day8.re_frame_10x.metamorphic.start_of_epoch_QMARK_ = (function day8$re_frame_10x$metamorphic$start_of_epoch_QMARK_(event){
var or__3949__auto__ = day8.re_frame_10x.metamorphic.run_queue_QMARK_.call(null,event);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return day8.re_frame_10x.metamorphic.event_run_QMARK_.call(null,event);
}
});
/**
 * Detects that a new epoch has started and that the previous one ended on the previous event.
 * 
 *   If multiple events are dispatched while processing the first event, each one is considered its
 *   own epoch.
 */
day8.re_frame_10x.metamorphic.start_of_epoch_and_prev_end_QMARK_ = (function day8$re_frame_10x$metamorphic$start_of_epoch_and_prev_end_QMARK_(event,state){
var or__3949__auto__ = day8.re_frame_10x.metamorphic.run_queue_QMARK_.call(null,event);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var and__3938__auto__ = day8.re_frame_10x.metamorphic.event_run_QMARK_.call(null,event);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,day8.re_frame_10x.metamorphic.run_queue_QMARK_.call(null,new cljs.core.Keyword(null,"previous-event","previous-event",-726928509).cljs$core$IFn$_invoke$arity$1(state)));
} else {
return and__3938__auto__;
}
}
});
day8.re_frame_10x.metamorphic.quiescent_QMARK_ = (function day8$re_frame_10x$metamorphic$quiescent_QMARK_(event){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681),new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(event));
});
day8.re_frame_10x.metamorphic.initial_parse_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-match","current-match",-551498177),null,new cljs.core.Keyword(null,"previous-event","previous-event",-726928509),null,new cljs.core.Keyword(null,"partitions","partitions",602979514),cljs.core.PersistentVector.EMPTY], null);
day8.re_frame_10x.metamorphic.initial_sub_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"last-matched-id","last-matched-id",1192489515),(0),new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039),cljs.core.PersistentArrayMap.EMPTY], null);
day8.re_frame_10x.metamorphic.parse_traces = (function day8$re_frame_10x$metamorphic$parse_traces(parse_state,traces){
return cljs.core.reduce.call(null,(function (state,event){
var current_match = new cljs.core.Keyword(null,"current-match","current-match",-551498177).cljs$core$IFn$_invoke$arity$1(state);
var previous_event = new cljs.core.Keyword(null,"previous-event","previous-event",-726928509).cljs$core$IFn$_invoke$arity$1(state);
var no_match_QMARK_ = (current_match == null);
return cljs.core.assoc.call(null,((no_match_QMARK_)?(cljs.core.truth_(day8.re_frame_10x.metamorphic.start_of_epoch_QMARK_.call(null,event))?cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-match","current-match",-551498177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null)):state):(cljs.core.truth_(day8.re_frame_10x.metamorphic.quiescent_QMARK_.call(null,event))?cljs.core.assoc.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"partitions","partitions",602979514),cljs.core.conj,cljs.core.conj.call(null,current_match,event)),new cljs.core.Keyword(null,"current-match","current-match",-551498177),null):(cljs.core.truth_(day8.re_frame_10x.metamorphic.start_of_epoch_and_prev_end_QMARK_.call(null,event,state))?cljs.core.assoc.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"partitions","partitions",602979514),cljs.core.conj,cljs.core.conj.call(null,current_match,previous_event)),new cljs.core.Keyword(null,"current-match","current-match",-551498177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null)):(cljs.core.truth_(day8.re_frame_10x.metamorphic.event_run_QMARK_.call(null,event))?cljs.core.update.call(null,state,new cljs.core.Keyword(null,"current-match","current-match",-551498177),cljs.core.conj,event):state
)))),new cljs.core.Keyword(null,"previous-event","previous-event",-726928509),event);
}),parse_state,traces);
});
day8.re_frame_10x.metamorphic.matched_event = (function day8$re_frame_10x$metamorphic$matched_event(match){
return cljs.core.first.call(null,cljs.core.filter.call(null,day8.re_frame_10x.metamorphic.event_run_QMARK_,match));
});
day8.re_frame_10x.metamorphic.app_db_after = (function day8$re_frame_10x$metamorphic$app_db_after(event_trace){
return cljs.core.get_in.call(null,event_trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
});
day8.re_frame_10x.metamorphic.app_db_before = (function day8$re_frame_10x$metamorphic$app_db_before(event_trace){
return cljs.core.get_in.call(null,event_trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
});
/**
 * Collect information about the subscription that we'd like
 *   to know, like its layer.
 */
day8.re_frame_10x.metamorphic.subscription_info = (function day8$re_frame_10x$metamorphic$subscription_info(initial_state,filtered_traces,app_db_id){
return cljs.core.reduce.call(null,(function (state,trace){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"layer","layer",-1601820589)], null),(cljs.core.truth_(cljs.core.some.call(null,(function (p1__12677_SHARP_){
return cljs.core._EQ_.call(null,app_db_id,p1__12677_SHARP_);
}),cljs.core.get_in.call(null,trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"input-signals","input-signals",563633497)], null))))?(2):(3)));
}),initial_state,cljs.core.filter.call(null,day8.re_frame_10x.metamorphic.subscription_re_run_QMARK_,filtered_traces));
});
/**
 * Remove information about the subscription that is transient and specific to a single
 *   phase.
 */
day8.re_frame_10x.metamorphic.reset_sub_state = (function day8$re_frame_10x$metamorphic$reset_sub_state(state){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,(function (me){
if(cljs.core.truth_(new cljs.core.Keyword(null,"disposed?","disposed?",1178302522).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,me)))){
return null;
} else {
return me;
}
})),cljs.core.map.call(null,(function (p__12678){
var vec__12679 = p__12678;
var k = cljs.core.nth.call(null,vec__12679,(0),null);
var v = cljs.core.nth.call(null,vec__12679,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.dissoc.call(null,v,new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"created?","created?",850508195),new cljs.core.Keyword(null,"run?","run?",752622859),new cljs.core.Keyword(null,"disposed?","disposed?",1178302522),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword("sub","traits","sub/traits",1778340671))], null);
}))),state);
});
day8.re_frame_10x.metamorphic.process_sub_traces = (function day8$re_frame_10x$metamorphic$process_sub_traces(initial_state,traces){
var first_pass = cljs.core.reduce.call(null,(function (init_state,trace){
var tags = cljs.core.get.call(null,trace,new cljs.core.Keyword(null,"tags","tags",1771418977));
var reaction_id = new cljs.core.Keyword(null,"reaction","reaction",490869788).cljs$core$IFn$_invoke$arity$1(tags);
var state = cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,init_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reaction_id,new cljs.core.Keyword(null,"order","order",-1254677256)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reaction_id,new cljs.core.Keyword(null,"subscription","subscription",1949009182)], null),new cljs.core.Keyword(null,"query-v","query-v",-1514170131).cljs$core$IFn$_invoke$arity$1(tags));
var new_state = (function (){var G__12682 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace);
var G__12682__$1 = (((G__12682 instanceof cljs.core.Keyword))?G__12682.fqn:null);
switch (G__12682__$1) {
case "sub/create":
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reaction_id,new cljs.core.Keyword(null,"created?","created?",850508195)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reaction_id,new cljs.core.Keyword(null,"subscription","subscription",1949009182)], null),new cljs.core.Keyword(null,"query-v","query-v",-1514170131).cljs$core$IFn$_invoke$arity$1(tags));

break;
case "sub/run":
return cljs.core.update.call(null,state,reaction_id,((function (G__12682,G__12682__$1,tags,reaction_id,state){
return (function (sub_state){
return cljs.core.assoc.call(null,((cljs.core.contains_QMARK_.call(null,sub_state,new cljs.core.Keyword(null,"value","value",305978217)))?cljs.core.assoc.call(null,sub_state,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(sub_state)):sub_state),new cljs.core.Keyword(null,"run?","run?",752622859),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(tags));
});})(G__12682,G__12682__$1,tags,reaction_id,state))
);

break;
case "sub/dispose":
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reaction_id,new cljs.core.Keyword(null,"disposed?","disposed?",1178302522)], null),true);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12682__$1)].join('')));

}
})();
if(cljs.core.contains_QMARK_.call(null,cljs.core.get.call(null,new_state,reaction_id),new cljs.core.Keyword(null,"subscription","subscription",1949009182))){
} else {
console.warn(trace,cljs.core.get.call(null,new_state,reaction_id));
}

return new_state;
}),initial_state,traces);
var second_pass = cljs.core.reduce.call(null,((function (first_pass){
return (function (all_state,p__12683){
var vec__12684 = p__12683;
var sub_id = cljs.core.nth.call(null,vec__12684,(0),null);
var sub_state = cljs.core.nth.call(null,vec__12684,(1),null);
if(((cljs.core.contains_QMARK_.call(null,sub_state,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677))) && (cljs.core.contains_QMARK_.call(null,sub_state,new cljs.core.Keyword(null,"value","value",305978217))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677).cljs$core$IFn$_invoke$arity$1(sub_state),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(sub_state))))){
return cljs.core.assoc_in.call(null,all_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub_id,new cljs.core.Keyword("sub","traits","sub/traits",1778340671),new cljs.core.Keyword(null,"unchanged?","unchanged?",1212001763)], null),true);
} else {
return all_state;
}
});})(first_pass))
,first_pass,first_pass);
return second_pass;
});
/**
 * Build up the state of re-frame's running subscriptions over each matched epoch.
 *   Returns initial state as first item in list
 */
day8.re_frame_10x.metamorphic.subscription_match_state = (function day8$re_frame_10x$metamorphic$subscription_match_state(sub_state,filtered_traces,new_matches){
return cljs.core.reductions.call(null,(function (state,match){
var previous_id = new cljs.core.Keyword(null,"last-matched-id","last-matched-id",1192489515).cljs$core$IFn$_invoke$arity$1(state);
var first_match_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,match));
var last_match_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,match));
var pre_epoch_traces = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,day8.re_frame_10x.metamorphic.id_between_xf.call(null,(previous_id + (1)),(first_match_id - (1))),cljs.core.filter.call(null,day8.re_frame_10x.metamorphic.subscription_QMARK_)),filtered_traces);
var epoch_traces = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,day8.re_frame_10x.metamorphic.id_between_xf.call(null,first_match_id,last_match_id),cljs.core.filter.call(null,day8.re_frame_10x.metamorphic.subscription_QMARK_)),filtered_traces);
var reaction_state = new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(state);
var pre_epoch_state = day8.re_frame_10x.metamorphic.process_sub_traces.call(null,day8.re_frame_10x.metamorphic.reset_sub_state.call(null,reaction_state),pre_epoch_traces);
var epoch_state = day8.re_frame_10x.metamorphic.process_sub_traces.call(null,day8.re_frame_10x.metamorphic.reset_sub_state.call(null,pre_epoch_state),epoch_traces);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164),pre_epoch_state,new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039),epoch_state,new cljs.core.Keyword(null,"first-matched-id","first-matched-id",-1052882417),first_match_id,new cljs.core.Keyword(null,"last-matched-id","last-matched-id",1192489515),last_match_id,new cljs.core.Keyword(null,"previous-matched-id","previous-matched-id",888670192),previous_id], null);
}),sub_state,new_matches);
});

//# sourceMappingURL=metamorphic.js.map
