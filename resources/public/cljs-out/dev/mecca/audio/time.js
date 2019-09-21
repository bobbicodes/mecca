// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.audio.time');
goog.require('cljs.core');
mecca.audio.time._STAR_audio_context_STAR_ = (function (){var ctx = (function (){var or__3949__auto__ = window.AudioContext;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return window.webkitAudioContext;
}
})();
return (new ctx());
})();
mecca.audio.time.default_options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"context","context",-830191113),mecca.audio.time._STAR_audio_context_STAR_,new cljs.core.Keyword(null,"tolerance-late","tolerance-late",-765261359),(100),new cljs.core.Keyword(null,"tolerance-early","tolerance-early",1053037312),(1)], null);
mecca.audio.time._STAR_clocks_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
mecca.audio.time.clock = (function mecca$audio$time$clock(var_args){
var args__4534__auto__ = [];
var len__4531__auto___10589 = arguments.length;
var i__4532__auto___10590 = (0);
while(true){
if((i__4532__auto___10590 < len__4531__auto___10589)){
args__4534__auto__.push((arguments[i__4532__auto___10590]));

var G__10591 = (i__4532__auto___10590 + (1));
i__4532__auto___10590 = G__10591;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return mecca.audio.time.clock.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

mecca.audio.time.clock.cljs$core$IFn$_invoke$arity$variadic = (function (p__10586){
var map__10587 = p__10586;
var map__10587__$1 = ((((!((map__10587 == null)))?(((((map__10587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10587):map__10587);
var attrs = map__10587__$1;
var id = cljs.core.gensym.call(null,"clock");
var clock = cljs.core.merge.call(null,mecca.audio.time.default_options,attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"started","started",585705024),false], null));
var atomic_clock = cljs.core.atom.call(null,clock);
mecca.audio.time._STAR_clocks_STAR_ = cljs.core.assoc.call(null,mecca.audio.time._STAR_clocks_STAR_,id,atomic_clock);

return atomic_clock;
});

mecca.audio.time.clock.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mecca.audio.time.clock.cljs$lang$applyTo = (function (seq10585){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10585));
});

/**
 * Internal implementation for the public function current-time, which works
 * on atom-wrapped clocks.
 * This internal version works on non-atom-wrapped clocks.
 */
mecca.audio.time.current_time_STAR_ = (function mecca$audio$time$current_time_STAR_(p__10592){
var map__10593 = p__10592;
var map__10593__$1 = ((((!((map__10593 == null)))?(((((map__10593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10593):map__10593);
var clock = map__10593__$1;
var context = cljs.core.get.call(null,map__10593__$1,new cljs.core.Keyword(null,"context","context",-830191113));
return ((1000) * context.currentTime);
});
/**
 * Returns the current time of a clock's audio context, in milliseconds.
 */
mecca.audio.time.current_time = (function mecca$audio$time$current_time(clock){
return mecca.audio.time.current_time_STAR_.call(null,cljs.core.deref.call(null,clock));
});
/**
 * Converts from relative -> absolute time.
 */
mecca.audio.time.absolute_time = (function mecca$audio$time$absolute_time(clock,rel_time){
return (rel_time + mecca.audio.time.current_time_STAR_.call(null,clock));
});
/**
 * Converts from absolute -> relative time.
 */
mecca.audio.time.relative_time = (function mecca$audio$time$relative_time(clock,abs_time){
return (abs_time - mecca.audio.time.current_time_STAR_.call(null,clock));
});
/**
 * Constructor for an event. Requires `action`, `clock` (as an atom) and
 * `deadline` at the minimum.
 * Assigns a randomly generated id for the event if an :id is not provided to
 * the constructor. This is useful for removing and repeating events.
 * The tolerance interval (:latest-time and :earliest-time) is calculated
 * based on the deadline and :tolerance-early and :tolerance-late, which are
 * either provided as keyword arguments, or taken from the clock's options.
 */
mecca.audio.time.event_STAR_ = (function mecca$audio$time$event_STAR_(p__10595){
var map__10596 = p__10595;
var map__10596__$1 = ((((!((map__10596 == null)))?(((((map__10596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10596):map__10596);
var event = map__10596__$1;
var id = cljs.core.get.call(null,map__10596__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var clock_id = cljs.core.get.call(null,map__10596__$1,new cljs.core.Keyword(null,"clock-id","clock-id",-240196257));
var clock = cljs.core.get.call(null,map__10596__$1,new cljs.core.Keyword(null,"clock","clock",-894301127));
var deadline = cljs.core.get.call(null,map__10596__$1,new cljs.core.Keyword(null,"deadline","deadline",628964572));
var tolerance_early = cljs.core.get.call(null,map__10596__$1,new cljs.core.Keyword(null,"tolerance-early","tolerance-early",1053037312));
var tolerance_late = cljs.core.get.call(null,map__10596__$1,new cljs.core.Keyword(null,"tolerance-late","tolerance-late",-765261359));
var clock__$1 = (cljs.core.truth_(clock_id)?cljs.core.get.call(null,mecca.audio.time._STAR_clocks_STAR_,clock_id):clock);
var id__$1 = (function (){var or__3949__auto__ = id;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.gensym.call(null,new cljs.core.Symbol(null,"event","event",1941966969,null));
}
})();
var latest = (deadline + (function (){var or__3949__auto__ = tolerance_late;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"tolerance-late","tolerance-late",-765261359).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clock__$1));
}
})());
var earliest = (deadline - (function (){var or__3949__auto__ = tolerance_early;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"tolerance-early","tolerance-early",1053037312).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clock__$1));
}
})());
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"id","id",-1388402092),id__$1,new cljs.core.Keyword(null,"clock-id","clock-id",-240196257),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clock__$1)),new cljs.core.Keyword(null,"latest-time","latest-time",1740064819),latest,new cljs.core.Keyword(null,"earliest-time","earliest-time",-171748463),earliest),new cljs.core.Keyword(null,"clock","clock",-894301127));
});

/**
 * This function is ran periodically, and at each tick it executes
 * events for which `currentTime` is included in their tolerance interval.
 */
mecca.audio.time.tick_BANG_ = (function mecca$audio$time$tick_BANG_(clock){
var map__10599 = cljs.core.deref.call(null,clock);
var map__10599__$1 = ((((!((map__10599 == null)))?(((((map__10599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10599):map__10599);
var events = cljs.core.get.call(null,map__10599__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var current_time = mecca.audio.time.current_time.call(null,clock);
var execute_now_QMARK_ = ((function (map__10599,map__10599__$1,events,current_time){
return (function (p1__10598_SHARP_){
return (new cljs.core.Keyword(null,"earliest-time","earliest-time",-171748463).cljs$core$IFn$_invoke$arity$1(p1__10598_SHARP_) <= current_time);
});})(map__10599,map__10599__$1,events,current_time))
;
var now = cljs.core.take_while.call(null,execute_now_QMARK_,events);
var seq__10601_10605 = cljs.core.seq.call(null,now);
var chunk__10602_10606 = null;
var count__10603_10607 = (0);
var i__10604_10608 = (0);
while(true){
if((i__10604_10608 < count__10603_10607)){
var event_10609 = cljs.core._nth.call(null,chunk__10602_10606,i__10604_10608);
mecca.audio.time.execute_BANG_.call(null,event_10609);


var G__10610 = seq__10601_10605;
var G__10611 = chunk__10602_10606;
var G__10612 = count__10603_10607;
var G__10613 = (i__10604_10608 + (1));
seq__10601_10605 = G__10610;
chunk__10602_10606 = G__10611;
count__10603_10607 = G__10612;
i__10604_10608 = G__10613;
continue;
} else {
var temp__5457__auto___10614 = cljs.core.seq.call(null,seq__10601_10605);
if(temp__5457__auto___10614){
var seq__10601_10615__$1 = temp__5457__auto___10614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10601_10615__$1)){
var c__4351__auto___10616 = cljs.core.chunk_first.call(null,seq__10601_10615__$1);
var G__10617 = cljs.core.chunk_rest.call(null,seq__10601_10615__$1);
var G__10618 = c__4351__auto___10616;
var G__10619 = cljs.core.count.call(null,c__4351__auto___10616);
var G__10620 = (0);
seq__10601_10605 = G__10617;
chunk__10602_10606 = G__10618;
count__10603_10607 = G__10619;
i__10604_10608 = G__10620;
continue;
} else {
var event_10621 = cljs.core.first.call(null,seq__10601_10615__$1);
mecca.audio.time.execute_BANG_.call(null,event_10621);


var G__10622 = cljs.core.next.call(null,seq__10601_10615__$1);
var G__10623 = null;
var G__10624 = (0);
var G__10625 = (0);
seq__10601_10605 = G__10622;
chunk__10602_10606 = G__10623;
count__10603_10607 = G__10624;
i__10604_10608 = G__10625;
continue;
}
} else {
}
}
break;
}

return cljs.core.swap_BANG_.call(null,clock,cljs.core.assoc,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.drop_while.call(null,execute_now_QMARK_,new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clock))),new cljs.core.Keyword(null,"current-time","current-time",-1609407134),current_time);
});
/**
 * Does a binary search to find the index of the first event whose deadline is
 * >= `deadline`.
 */
mecca.audio.time.index_by_time = (function mecca$audio$time$index_by_time(events,deadline){
var low = (0);
var high = cljs.core.count.call(null,events);
var mid = Math.floor(((low + high) / (2)));
while(true){
if((low < high)){
var map__10626 = cljs.core.nth.call(null,events,mid);
var map__10626__$1 = ((((!((map__10626 == null)))?(((((map__10626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10626):map__10626);
var earliest_time = cljs.core.get.call(null,map__10626__$1,new cljs.core.Keyword(null,"earliest-time","earliest-time",-171748463));
var action = (((earliest_time < deadline))?new cljs.core.Keyword(null,"higher","higher",-569576192):new cljs.core.Keyword(null,"lower","lower",1120320821));
var G__10628 = ((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"higher","higher",-569576192)))?(mid + (1)):low);
var G__10629 = ((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"lower","lower",1120320821)))?mid:high);
var G__10630 = Math.floor(((low + high) / (2)));
low = G__10628;
high = G__10629;
mid = G__10630;
continue;
} else {
return low;
}
break;
}
});
/**
 * Insert an event into an event queue, properly sorted by deadline.
 */
mecca.audio.time.insert_event = (function mecca$audio$time$insert_event(events,p__10631){
var map__10632 = p__10631;
var map__10632__$1 = ((((!((map__10632 == null)))?(((((map__10632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10632):map__10632);
var event = map__10632__$1;
var earliest_time = cljs.core.get.call(null,map__10632__$1,new cljs.core.Keyword(null,"earliest-time","earliest-time",-171748463));
var i = mecca.audio.time.index_by_time.call(null,events,earliest_time);
return cljs.core.concat.call(null,cljs.core.take.call(null,i,events),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null),cljs.core.drop.call(null,i,events));
});
/**
 * Create an event and insert into a clock's event queue.
 */
mecca.audio.time.create_event_BANG_ = (function mecca$audio$time$create_event_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___10644 = arguments.length;
var i__4532__auto___10645 = (0);
while(true){
if((i__4532__auto___10645 < len__4531__auto___10644)){
args__4534__auto__.push((arguments[i__4532__auto___10645]));

var G__10646 = (i__4532__auto___10645 + (1));
i__4532__auto___10645 = G__10646;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return mecca.audio.time.create_event_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

mecca.audio.time.create_event_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (clock,f,deadline,p__10638){
var vec__10639 = p__10638;
var map__10642 = cljs.core.nth.call(null,vec__10639,(0),null);
var map__10642__$1 = ((((!((map__10642 == null)))?(((((map__10642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10642):map__10642);
var opts = map__10642__$1;
var event = mecca.audio.time.event_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),f,new cljs.core.Keyword(null,"clock","clock",-894301127),clock,new cljs.core.Keyword(null,"deadline","deadline",628964572),deadline], null),opts));
cljs.core.swap_BANG_.call(null,clock,cljs.core.update,new cljs.core.Keyword(null,"events","events",1792552201),mecca.audio.time.insert_event,event);

return event;
});

mecca.audio.time.create_event_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
mecca.audio.time.create_event_BANG_.cljs$lang$applyTo = (function (seq10634){
var G__10635 = cljs.core.first.call(null,seq10634);
var seq10634__$1 = cljs.core.next.call(null,seq10634);
var G__10636 = cljs.core.first.call(null,seq10634__$1);
var seq10634__$2 = cljs.core.next.call(null,seq10634__$1);
var G__10637 = cljs.core.first.call(null,seq10634__$2);
var seq10634__$3 = cljs.core.next.call(null,seq10634__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10635,G__10636,G__10637,seq10634__$3);
});

/**
 * Insert a copy of an event into an event queue with a new deadline.
 */
mecca.audio.time.schedule_STAR_ = (function mecca$audio$time$schedule_STAR_(events,event,new_deadline){
var new_event = mecca.audio.time.event_STAR_.call(null,cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"deadline","deadline",628964572),new_deadline));
return mecca.audio.time.insert_event.call(null,events,new_event);
});
/**
 * Schedule a copy of an event with a new deadline.
 */
mecca.audio.time.schedule_BANG_ = (function mecca$audio$time$schedule_BANG_(p__10647,new_deadline){
var map__10648 = p__10647;
var map__10648__$1 = ((((!((map__10648 == null)))?(((((map__10648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10648):map__10648);
var event = map__10648__$1;
var clock_id = cljs.core.get.call(null,map__10648__$1,new cljs.core.Keyword(null,"clock-id","clock-id",-240196257));
var clock = cljs.core.get.call(null,mecca.audio.time._STAR_clocks_STAR_,clock_id);
cljs.core.swap_BANG_.call(null,clock,cljs.core.update,new cljs.core.Keyword(null,"events","events",1792552201),mecca.audio.time.schedule_STAR_,event,new_deadline);

return mecca.audio.time.event_STAR_.call(null,cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"deadline","deadline",628964572),new_deadline));
});
mecca.audio.time.execute_BANG_ = (function mecca$audio$time$execute_BANG_(p__10650){
var map__10651 = p__10650;
var map__10651__$1 = ((((!((map__10651 == null)))?(((((map__10651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10651):map__10651);
var event = map__10651__$1;
var action = cljs.core.get.call(null,map__10651__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var clock_id = cljs.core.get.call(null,map__10651__$1,new cljs.core.Keyword(null,"clock-id","clock-id",-240196257));
var latest_time = cljs.core.get.call(null,map__10651__$1,new cljs.core.Keyword(null,"latest-time","latest-time",1740064819));
var deadline = cljs.core.get.call(null,map__10651__$1,new cljs.core.Keyword(null,"deadline","deadline",628964572));
var repeat_time = cljs.core.get.call(null,map__10651__$1,new cljs.core.Keyword(null,"repeat-time","repeat-time",-1963009396));
var clock = cljs.core.get.call(null,mecca.audio.time._STAR_clocks_STAR_,clock_id);
if((mecca.audio.time.current_time.call(null,clock) < latest_time)){
action.call(null);
} else {
}

if(cljs.core.truth_(repeat_time)){
return mecca.audio.time.repeat_BANG_.call(null,event,repeat_time);
} else {
return null;
}
});
/**
 * Schedules `f` after `delay` milliseconds. Returns the event.
 * `opts` may contain :tolerance-early and :tolerance-late for optionally
 * overriding the clock's timing window for events.
 */
mecca.audio.time.set_timeout_BANG_ = (function mecca$audio$time$set_timeout_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___10660 = arguments.length;
var i__4532__auto___10661 = (0);
while(true){
if((i__4532__auto___10661 < len__4531__auto___10660)){
args__4534__auto__.push((arguments[i__4532__auto___10661]));

var G__10662 = (i__4532__auto___10661 + (1));
i__4532__auto___10661 = G__10662;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return mecca.audio.time.set_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

mecca.audio.time.set_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (clock,f,delay,p__10657){
var map__10658 = p__10657;
var map__10658__$1 = ((((!((map__10658 == null)))?(((((map__10658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10658):map__10658);
var opts = map__10658__$1;
return mecca.audio.time.create_event_BANG_.call(null,clock,f,mecca.audio.time.absolute_time.call(null,cljs.core.deref.call(null,clock),delay),opts);
});

mecca.audio.time.set_timeout_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
mecca.audio.time.set_timeout_BANG_.cljs$lang$applyTo = (function (seq10653){
var G__10654 = cljs.core.first.call(null,seq10653);
var seq10653__$1 = cljs.core.next.call(null,seq10653);
var G__10655 = cljs.core.first.call(null,seq10653__$1);
var seq10653__$2 = cljs.core.next.call(null,seq10653__$1);
var G__10656 = cljs.core.first.call(null,seq10653__$2);
var seq10653__$3 = cljs.core.next.call(null,seq10653__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10654,G__10655,G__10656,seq10653__$3);
});

/**
 * Schedules `f` to run before `deadline`. Returns the event.
 * `opts` may contain :tolerance-early and :tolerance-late for optionally
 * overriding the clock's timing window for events.
 */
mecca.audio.time.callback_at_time_BANG_ = (function mecca$audio$time$callback_at_time_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___10670 = arguments.length;
var i__4532__auto___10671 = (0);
while(true){
if((i__4532__auto___10671 < len__4531__auto___10670)){
args__4534__auto__.push((arguments[i__4532__auto___10671]));

var G__10672 = (i__4532__auto___10671 + (1));
i__4532__auto___10671 = G__10672;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return mecca.audio.time.callback_at_time_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

mecca.audio.time.callback_at_time_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (clock,f,deadline,p__10667){
var map__10668 = p__10667;
var map__10668__$1 = ((((!((map__10668 == null)))?(((((map__10668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10668):map__10668);
var opts = map__10668__$1;
return mecca.audio.time.create_event_BANG_.call(null,clock,f,deadline,opts);
});

mecca.audio.time.callback_at_time_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
mecca.audio.time.callback_at_time_BANG_.cljs$lang$applyTo = (function (seq10663){
var G__10664 = cljs.core.first.call(null,seq10663);
var seq10663__$1 = cljs.core.next.call(null,seq10663);
var G__10665 = cljs.core.first.call(null,seq10663__$1);
var seq10663__$2 = cljs.core.next.call(null,seq10663__$1);
var G__10666 = cljs.core.first.call(null,seq10663__$2);
var seq10663__$3 = cljs.core.next.call(null,seq10663__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10664,G__10665,G__10666,seq10663__$3);
});

/**
 * Unschedules an event by removing it from its clock's event queue.
 */
mecca.audio.time.clear_BANG_ = (function mecca$audio$time$clear_BANG_(p__10674){
var map__10675 = p__10674;
var map__10675__$1 = ((((!((map__10675 == null)))?(((((map__10675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10675):map__10675);
var event = map__10675__$1;
var clock_id = cljs.core.get.call(null,map__10675__$1,new cljs.core.Keyword(null,"clock-id","clock-id",-240196257));
var clock = cljs.core.get.call(null,mecca.audio.time._STAR_clocks_STAR_,clock_id);
cljs.core.swap_BANG_.call(null,clock,cljs.core.update,new cljs.core.Keyword(null,"events","events",1792552201),((function (clock,map__10675,map__10675__$1,event,clock_id){
return (function (p1__10673_SHARP_){
return cljs.core.filter.call(null,((function (clock,map__10675,map__10675__$1,event,clock_id){
return (function (p__10677){
var map__10678 = p__10677;
var map__10678__$1 = ((((!((map__10678 == null)))?(((((map__10678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10678):map__10678);
var id = cljs.core.get.call(null,map__10678__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.not_EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event));
});})(clock,map__10675,map__10675__$1,event,clock_id))
,p1__10673_SHARP_);
});})(clock,map__10675,map__10675__$1,event,clock_id))
);

return event;
});
/**
 * Sets the event to repeat every `time` milliseconds 
 */
mecca.audio.time.repeat_BANG_ = (function mecca$audio$time$repeat_BANG_(p__10680,time){
var map__10681 = p__10680;
var map__10681__$1 = ((((!((map__10681 == null)))?(((((map__10681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10681):map__10681);
var event = map__10681__$1;
var deadline = cljs.core.get.call(null,map__10681__$1,new cljs.core.Keyword(null,"deadline","deadline",628964572));
if((time > (0))){
} else {
throw (new Error("Assert failed: (pos? time)"));
}

return mecca.audio.time.schedule_BANG_.call(null,cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"repeat-time","repeat-time",-1963009396),time),(deadline + time));
});
/**
 * Internal implementation for time-stretching a single event.
 */
mecca.audio.time.time_stretch_BANG__STAR_ = (function mecca$audio$time$time_stretch_BANG__STAR_(p__10684,time_reference,ratio){
var map__10685 = p__10684;
var map__10685__$1 = ((((!((map__10685 == null)))?(((((map__10685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10685):map__10685);
var event = map__10685__$1;
var repeat_time = cljs.core.get.call(null,map__10685__$1,new cljs.core.Keyword(null,"repeat-time","repeat-time",-1963009396));
var clock_id = cljs.core.get.call(null,map__10685__$1,new cljs.core.Keyword(null,"clock-id","clock-id",-240196257));
var deadline = cljs.core.get.call(null,map__10685__$1,new cljs.core.Keyword(null,"deadline","deadline",628964572));
var earliest_time = cljs.core.get.call(null,map__10685__$1,new cljs.core.Keyword(null,"earliest-time","earliest-time",-171748463));
var clock = cljs.core.get.call(null,mecca.audio.time._STAR_clocks_STAR_,clock_id);
var deadline__$1 = (time_reference + (ratio * (deadline - time_reference)));
var repeat_time__$1 = (cljs.core.truth_(repeat_time)?(repeat_time * ratio):null);
var repeats = (cljs.core.truth_(repeat_time__$1)?cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,repeat_time__$1),deadline__$1):null);
mecca.audio.time.clear_BANG_.call(null,event);

return mecca.audio.time.schedule_BANG_.call(null,cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"repeat-time","repeat-time",-1963009396),repeat_time__$1),(cljs.core.truth_(repeats)?cljs.core.first.call(null,cljs.core.drop_while.call(null,((function (clock,deadline__$1,repeat_time__$1,repeats,map__10685,map__10685__$1,event,repeat_time,clock_id,deadline,earliest_time){
return (function (p1__10683_SHARP_){
return (mecca.audio.time.current_time.call(null,clock) >= p1__10683_SHARP_);
});})(clock,deadline__$1,repeat_time__$1,repeats,map__10685,map__10685__$1,event,repeat_time,clock_id,deadline,earliest_time))
,repeats)):deadline__$1));
});
/**
 * Reschedules events according to a `time-reference` and a `ratio`.
 * If the event is a repeating event, adjusts its repeat-time accordingly.
 * The first argument can be either a single event or a list of events.
 * Returns the rescheduled event, or a list of rescheduled events, depending
 * on the input type.
 * e.g.
 * (time-stretch! e (current-time clock) 0.5)
 * ^-- makes an event `e` occur twice as soon as it would otherwise
 * If `time-reference` is omitted, the default value is the current time of the
 * event's clock.
 */
mecca.audio.time.time_stretch_BANG_ = (function mecca$audio$time$time_stretch_BANG_(var_args){
var G__10689 = arguments.length;
switch (G__10689) {
case 2:
return mecca.audio.time.time_stretch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mecca.audio.time.time_stretch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mecca.audio.time.time_stretch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,ratio){
var map__10690 = ((cljs.core.sequential_QMARK_.call(null,e))?cljs.core.first.call(null,e):e);
var map__10690__$1 = ((((!((map__10690 == null)))?(((((map__10690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10690):map__10690);
var clock_id = cljs.core.get.call(null,map__10690__$1,new cljs.core.Keyword(null,"clock-id","clock-id",-240196257));
var clock = cljs.core.get.call(null,mecca.audio.time._STAR_clocks_STAR_,clock_id);
return mecca.audio.time.time_stretch_BANG_.call(null,e,mecca.audio.time.current_time.call(null,clock),ratio);
});

mecca.audio.time.time_stretch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (e,time_reference,ratio){
if(cljs.core.sequential_QMARK_.call(null,e)){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__10687_SHARP_){
return mecca.audio.time.time_stretch_BANG__STAR_.call(null,p1__10687_SHARP_,time_reference,ratio);
}),e));
} else {
return mecca.audio.time.time_stretch_BANG__STAR_.call(null,e,time_reference,ratio);
}
});

mecca.audio.time.time_stretch_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Remove all scheduled events and start the clock.
 */
mecca.audio.time.start_BANG_ = (function mecca$audio$time$start_BANG_(clock){
var map__10693 = cljs.core.deref.call(null,clock);
var map__10693__$1 = ((((!((map__10693 == null)))?(((((map__10693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10693):map__10693);
var context = cljs.core.get.call(null,map__10693__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var started = cljs.core.get.call(null,map__10693__$1,new cljs.core.Keyword(null,"started","started",585705024));
if(cljs.core.truth_(started)){
return null;
} else {
cljs.core.swap_BANG_.call(null,clock,cljs.core.assoc,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.PersistentVector.EMPTY);

var clock_node = (function (){var G__10695 = context.createScriptProcessor((256),(1),(1));
G__10695.connect(context.destination);

(G__10695["onaudioprocess"] = ((function (G__10695,map__10693,map__10693__$1,context,started){
return (function (){
return mecca.audio.time.tick_BANG_.call(null,clock);
});})(G__10695,map__10693,map__10693__$1,context,started))
);

return G__10695;
})();
cljs.core.swap_BANG_.call(null,clock,cljs.core.assoc,new cljs.core.Keyword(null,"clock-node","clock-node",-1745180317),clock_node,new cljs.core.Keyword(null,"started","started",585705024),true);

return clock;
}
});
/**
 * Stops the clock.
 */
mecca.audio.time.stop_BANG_ = (function mecca$audio$time$stop_BANG_(clock){
var map__10696 = cljs.core.deref.call(null,clock);
var map__10696__$1 = ((((!((map__10696 == null)))?(((((map__10696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10696):map__10696);
var started = cljs.core.get.call(null,map__10696__$1,new cljs.core.Keyword(null,"started","started",585705024));
var clock_node = cljs.core.get.call(null,map__10696__$1,new cljs.core.Keyword(null,"clock-node","clock-node",-1745180317));
if(cljs.core.truth_(started)){
clock_node.disconnect();

cljs.core.swap_BANG_.call(null,clock,cljs.core.assoc,new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"clock-node","clock-node",-1745180317),null);

return clock;
} else {
return null;
}
});

//# sourceMappingURL=time.js.map
