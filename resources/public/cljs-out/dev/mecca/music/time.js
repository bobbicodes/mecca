// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.music.time');
goog.require('cljs.core');
mecca.music.time._STAR_audio_context_STAR_ = (function (){var ctx = (function (){var or__3949__auto__ = window.AudioContext;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return window.webkitAudioContext;
}
})();
return (new ctx());
})();
mecca.music.time.default_options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"context","context",-830191113),mecca.music.time._STAR_audio_context_STAR_,new cljs.core.Keyword(null,"tolerance-late","tolerance-late",-765261359),(100),new cljs.core.Keyword(null,"tolerance-early","tolerance-early",1053037312),(1)], null);
mecca.music.time._STAR_clocks_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
mecca.music.time.clock = (function mecca$music$time$clock(var_args){
var args__4534__auto__ = [];
var len__4531__auto___16799 = arguments.length;
var i__4532__auto___16800 = (0);
while(true){
if((i__4532__auto___16800 < len__4531__auto___16799)){
args__4534__auto__.push((arguments[i__4532__auto___16800]));

var G__16801 = (i__4532__auto___16800 + (1));
i__4532__auto___16800 = G__16801;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return mecca.music.time.clock.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

mecca.music.time.clock.cljs$core$IFn$_invoke$arity$variadic = (function (p__16796){
var map__16797 = p__16796;
var map__16797__$1 = ((((!((map__16797 == null)))?(((((map__16797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16797):map__16797);
var attrs = map__16797__$1;
var id = cljs.core.gensym.call(null,"clock");
var clock = cljs.core.merge.call(null,mecca.music.time.default_options,attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"started","started",585705024),false], null));
var atomic_clock = cljs.core.atom.call(null,clock);
mecca.music.time._STAR_clocks_STAR_ = cljs.core.assoc.call(null,mecca.music.time._STAR_clocks_STAR_,id,atomic_clock);

return atomic_clock;
});

mecca.music.time.clock.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mecca.music.time.clock.cljs$lang$applyTo = (function (seq16795){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16795));
});

/**
 * Internal implementation for the public function current-time, which works
 * on atom-wrapped clocks.
 * This internal version works on non-atom-wrapped clocks.
 */
mecca.music.time.current_time_STAR_ = (function mecca$music$time$current_time_STAR_(p__16802){
var map__16803 = p__16802;
var map__16803__$1 = ((((!((map__16803 == null)))?(((((map__16803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16803):map__16803);
var clock = map__16803__$1;
var context = cljs.core.get.call(null,map__16803__$1,new cljs.core.Keyword(null,"context","context",-830191113));
return ((1000) * context.currentTime);
});
/**
 * Returns the current time of a clock's audio context, in milliseconds.
 */
mecca.music.time.current_time = (function mecca$music$time$current_time(clock){
return mecca.music.time.current_time_STAR_.call(null,cljs.core.deref.call(null,clock));
});
/**
 * Converts from relative -> absolute time.
 */
mecca.music.time.absolute_time = (function mecca$music$time$absolute_time(clock,rel_time){
return (rel_time + mecca.music.time.current_time_STAR_.call(null,clock));
});
/**
 * Converts from absolute -> relative time.
 */
mecca.music.time.relative_time = (function mecca$music$time$relative_time(clock,abs_time){
return (abs_time - mecca.music.time.current_time_STAR_.call(null,clock));
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
mecca.music.time.event_STAR_ = (function mecca$music$time$event_STAR_(p__16805){
var map__16806 = p__16805;
var map__16806__$1 = ((((!((map__16806 == null)))?(((((map__16806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16806):map__16806);
var event = map__16806__$1;
var id = cljs.core.get.call(null,map__16806__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var clock_id = cljs.core.get.call(null,map__16806__$1,new cljs.core.Keyword(null,"clock-id","clock-id",-240196257));
var clock = cljs.core.get.call(null,map__16806__$1,new cljs.core.Keyword(null,"clock","clock",-894301127));
var deadline = cljs.core.get.call(null,map__16806__$1,new cljs.core.Keyword(null,"deadline","deadline",628964572));
var tolerance_early = cljs.core.get.call(null,map__16806__$1,new cljs.core.Keyword(null,"tolerance-early","tolerance-early",1053037312));
var tolerance_late = cljs.core.get.call(null,map__16806__$1,new cljs.core.Keyword(null,"tolerance-late","tolerance-late",-765261359));
var clock__$1 = (cljs.core.truth_(clock_id)?cljs.core.get.call(null,mecca.music.time._STAR_clocks_STAR_,clock_id):clock);
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
mecca.music.time.tick_BANG_ = (function mecca$music$time$tick_BANG_(clock){
var map__16809 = cljs.core.deref.call(null,clock);
var map__16809__$1 = ((((!((map__16809 == null)))?(((((map__16809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16809):map__16809);
var events = cljs.core.get.call(null,map__16809__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var current_time = mecca.music.time.current_time.call(null,clock);
var execute_now_QMARK_ = ((function (map__16809,map__16809__$1,events,current_time){
return (function (p1__16808_SHARP_){
return (new cljs.core.Keyword(null,"earliest-time","earliest-time",-171748463).cljs$core$IFn$_invoke$arity$1(p1__16808_SHARP_) <= current_time);
});})(map__16809,map__16809__$1,events,current_time))
;
var now = cljs.core.take_while.call(null,execute_now_QMARK_,events);
var seq__16811_16815 = cljs.core.seq.call(null,now);
var chunk__16812_16816 = null;
var count__16813_16817 = (0);
var i__16814_16818 = (0);
while(true){
if((i__16814_16818 < count__16813_16817)){
var event_16819 = cljs.core._nth.call(null,chunk__16812_16816,i__16814_16818);
mecca.music.time.execute_BANG_.call(null,event_16819);


var G__16820 = seq__16811_16815;
var G__16821 = chunk__16812_16816;
var G__16822 = count__16813_16817;
var G__16823 = (i__16814_16818 + (1));
seq__16811_16815 = G__16820;
chunk__16812_16816 = G__16821;
count__16813_16817 = G__16822;
i__16814_16818 = G__16823;
continue;
} else {
var temp__5457__auto___16824 = cljs.core.seq.call(null,seq__16811_16815);
if(temp__5457__auto___16824){
var seq__16811_16825__$1 = temp__5457__auto___16824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16811_16825__$1)){
var c__4351__auto___16826 = cljs.core.chunk_first.call(null,seq__16811_16825__$1);
var G__16827 = cljs.core.chunk_rest.call(null,seq__16811_16825__$1);
var G__16828 = c__4351__auto___16826;
var G__16829 = cljs.core.count.call(null,c__4351__auto___16826);
var G__16830 = (0);
seq__16811_16815 = G__16827;
chunk__16812_16816 = G__16828;
count__16813_16817 = G__16829;
i__16814_16818 = G__16830;
continue;
} else {
var event_16831 = cljs.core.first.call(null,seq__16811_16825__$1);
mecca.music.time.execute_BANG_.call(null,event_16831);


var G__16832 = cljs.core.next.call(null,seq__16811_16825__$1);
var G__16833 = null;
var G__16834 = (0);
var G__16835 = (0);
seq__16811_16815 = G__16832;
chunk__16812_16816 = G__16833;
count__16813_16817 = G__16834;
i__16814_16818 = G__16835;
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
mecca.music.time.index_by_time = (function mecca$music$time$index_by_time(events,deadline){
var low = (0);
var high = cljs.core.count.call(null,events);
var mid = Math.floor(((low + high) / (2)));
while(true){
if((low < high)){
var map__16836 = cljs.core.nth.call(null,events,mid);
var map__16836__$1 = ((((!((map__16836 == null)))?(((((map__16836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16836):map__16836);
var earliest_time = cljs.core.get.call(null,map__16836__$1,new cljs.core.Keyword(null,"earliest-time","earliest-time",-171748463));
var action = (((earliest_time < deadline))?new cljs.core.Keyword(null,"higher","higher",-569576192):new cljs.core.Keyword(null,"lower","lower",1120320821));
var G__16838 = ((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"higher","higher",-569576192)))?(mid + (1)):low);
var G__16839 = ((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"lower","lower",1120320821)))?mid:high);
var G__16840 = Math.floor(((low + high) / (2)));
low = G__16838;
high = G__16839;
mid = G__16840;
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
mecca.music.time.insert_event = (function mecca$music$time$insert_event(events,p__16841){
var map__16842 = p__16841;
var map__16842__$1 = ((((!((map__16842 == null)))?(((((map__16842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16842):map__16842);
var event = map__16842__$1;
var earliest_time = cljs.core.get.call(null,map__16842__$1,new cljs.core.Keyword(null,"earliest-time","earliest-time",-171748463));
var i = mecca.music.time.index_by_time.call(null,events,earliest_time);
return cljs.core.concat.call(null,cljs.core.take.call(null,i,events),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null),cljs.core.drop.call(null,i,events));
});
/**
 * Create an event and insert into a clock's event queue.
 */
mecca.music.time.create_event_BANG_ = (function mecca$music$time$create_event_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___16854 = arguments.length;
var i__4532__auto___16855 = (0);
while(true){
if((i__4532__auto___16855 < len__4531__auto___16854)){
args__4534__auto__.push((arguments[i__4532__auto___16855]));

var G__16856 = (i__4532__auto___16855 + (1));
i__4532__auto___16855 = G__16856;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return mecca.music.time.create_event_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

mecca.music.time.create_event_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (clock,f,deadline,p__16848){
var vec__16849 = p__16848;
var map__16852 = cljs.core.nth.call(null,vec__16849,(0),null);
var map__16852__$1 = ((((!((map__16852 == null)))?(((((map__16852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16852):map__16852);
var opts = map__16852__$1;
var event = mecca.music.time.event_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),f,new cljs.core.Keyword(null,"clock","clock",-894301127),clock,new cljs.core.Keyword(null,"deadline","deadline",628964572),deadline], null),opts));
cljs.core.swap_BANG_.call(null,clock,cljs.core.update,new cljs.core.Keyword(null,"events","events",1792552201),mecca.music.time.insert_event,event);

return event;
});

mecca.music.time.create_event_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
mecca.music.time.create_event_BANG_.cljs$lang$applyTo = (function (seq16844){
var G__16845 = cljs.core.first.call(null,seq16844);
var seq16844__$1 = cljs.core.next.call(null,seq16844);
var G__16846 = cljs.core.first.call(null,seq16844__$1);
var seq16844__$2 = cljs.core.next.call(null,seq16844__$1);
var G__16847 = cljs.core.first.call(null,seq16844__$2);
var seq16844__$3 = cljs.core.next.call(null,seq16844__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16845,G__16846,G__16847,seq16844__$3);
});

/**
 * Insert a copy of an event into an event queue with a new deadline.
 */
mecca.music.time.schedule_STAR_ = (function mecca$music$time$schedule_STAR_(events,event,new_deadline){
var new_event = mecca.music.time.event_STAR_.call(null,cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"deadline","deadline",628964572),new_deadline));
return mecca.music.time.insert_event.call(null,events,new_event);
});
/**
 * Schedule a copy of an event with a new deadline.
 */
mecca.music.time.schedule_BANG_ = (function mecca$music$time$schedule_BANG_(p__16857,new_deadline){
var map__16858 = p__16857;
var map__16858__$1 = ((((!((map__16858 == null)))?(((((map__16858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16858):map__16858);
var event = map__16858__$1;
var clock_id = cljs.core.get.call(null,map__16858__$1,new cljs.core.Keyword(null,"clock-id","clock-id",-240196257));
var clock = cljs.core.get.call(null,mecca.music.time._STAR_clocks_STAR_,clock_id);
cljs.core.swap_BANG_.call(null,clock,cljs.core.update,new cljs.core.Keyword(null,"events","events",1792552201),mecca.music.time.schedule_STAR_,event,new_deadline);

return mecca.music.time.event_STAR_.call(null,cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"deadline","deadline",628964572),new_deadline));
});
mecca.music.time.execute_BANG_ = (function mecca$music$time$execute_BANG_(p__16860){
var map__16861 = p__16860;
var map__16861__$1 = ((((!((map__16861 == null)))?(((((map__16861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16861):map__16861);
var event = map__16861__$1;
var action = cljs.core.get.call(null,map__16861__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var clock_id = cljs.core.get.call(null,map__16861__$1,new cljs.core.Keyword(null,"clock-id","clock-id",-240196257));
var latest_time = cljs.core.get.call(null,map__16861__$1,new cljs.core.Keyword(null,"latest-time","latest-time",1740064819));
var deadline = cljs.core.get.call(null,map__16861__$1,new cljs.core.Keyword(null,"deadline","deadline",628964572));
var repeat_time = cljs.core.get.call(null,map__16861__$1,new cljs.core.Keyword(null,"repeat-time","repeat-time",-1963009396));
var clock = cljs.core.get.call(null,mecca.music.time._STAR_clocks_STAR_,clock_id);
if((mecca.music.time.current_time.call(null,clock) < latest_time)){
action.call(null);
} else {
}

if(cljs.core.truth_(repeat_time)){
return mecca.music.time.repeat_BANG_.call(null,event,repeat_time);
} else {
return null;
}
});
/**
 * Schedules `f` after `delay` milliseconds. Returns the event.
 * `opts` may contain :tolerance-early and :tolerance-late for optionally
 * overriding the clock's timing window for events.
 */
mecca.music.time.set_timeout_BANG_ = (function mecca$music$time$set_timeout_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___16870 = arguments.length;
var i__4532__auto___16871 = (0);
while(true){
if((i__4532__auto___16871 < len__4531__auto___16870)){
args__4534__auto__.push((arguments[i__4532__auto___16871]));

var G__16872 = (i__4532__auto___16871 + (1));
i__4532__auto___16871 = G__16872;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return mecca.music.time.set_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

mecca.music.time.set_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (clock,f,delay,p__16867){
var map__16868 = p__16867;
var map__16868__$1 = ((((!((map__16868 == null)))?(((((map__16868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16868):map__16868);
var opts = map__16868__$1;
return mecca.music.time.create_event_BANG_.call(null,clock,f,mecca.music.time.absolute_time.call(null,cljs.core.deref.call(null,clock),delay),opts);
});

mecca.music.time.set_timeout_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
mecca.music.time.set_timeout_BANG_.cljs$lang$applyTo = (function (seq16863){
var G__16864 = cljs.core.first.call(null,seq16863);
var seq16863__$1 = cljs.core.next.call(null,seq16863);
var G__16865 = cljs.core.first.call(null,seq16863__$1);
var seq16863__$2 = cljs.core.next.call(null,seq16863__$1);
var G__16866 = cljs.core.first.call(null,seq16863__$2);
var seq16863__$3 = cljs.core.next.call(null,seq16863__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16864,G__16865,G__16866,seq16863__$3);
});

/**
 * Schedules `f` to run before `deadline`. Returns the event.
 * `opts` may contain :tolerance-early and :tolerance-late for optionally
 * overriding the clock's timing window for events.
 */
mecca.music.time.callback_at_time_BANG_ = (function mecca$music$time$callback_at_time_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___16880 = arguments.length;
var i__4532__auto___16881 = (0);
while(true){
if((i__4532__auto___16881 < len__4531__auto___16880)){
args__4534__auto__.push((arguments[i__4532__auto___16881]));

var G__16882 = (i__4532__auto___16881 + (1));
i__4532__auto___16881 = G__16882;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return mecca.music.time.callback_at_time_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

mecca.music.time.callback_at_time_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (clock,f,deadline,p__16877){
var map__16878 = p__16877;
var map__16878__$1 = ((((!((map__16878 == null)))?(((((map__16878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16878):map__16878);
var opts = map__16878__$1;
return mecca.music.time.create_event_BANG_.call(null,clock,f,deadline,opts);
});

mecca.music.time.callback_at_time_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
mecca.music.time.callback_at_time_BANG_.cljs$lang$applyTo = (function (seq16873){
var G__16874 = cljs.core.first.call(null,seq16873);
var seq16873__$1 = cljs.core.next.call(null,seq16873);
var G__16875 = cljs.core.first.call(null,seq16873__$1);
var seq16873__$2 = cljs.core.next.call(null,seq16873__$1);
var G__16876 = cljs.core.first.call(null,seq16873__$2);
var seq16873__$3 = cljs.core.next.call(null,seq16873__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16874,G__16875,G__16876,seq16873__$3);
});

/**
 * Unschedules an event by removing it from its clock's event queue.
 */
mecca.music.time.clear_BANG_ = (function mecca$music$time$clear_BANG_(p__16884){
var map__16885 = p__16884;
var map__16885__$1 = ((((!((map__16885 == null)))?(((((map__16885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16885):map__16885);
var event = map__16885__$1;
var clock_id = cljs.core.get.call(null,map__16885__$1,new cljs.core.Keyword(null,"clock-id","clock-id",-240196257));
var clock = cljs.core.get.call(null,mecca.music.time._STAR_clocks_STAR_,clock_id);
cljs.core.swap_BANG_.call(null,clock,cljs.core.update,new cljs.core.Keyword(null,"events","events",1792552201),((function (clock,map__16885,map__16885__$1,event,clock_id){
return (function (p1__16883_SHARP_){
return cljs.core.filter.call(null,((function (clock,map__16885,map__16885__$1,event,clock_id){
return (function (p__16887){
var map__16888 = p__16887;
var map__16888__$1 = ((((!((map__16888 == null)))?(((((map__16888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16888):map__16888);
var id = cljs.core.get.call(null,map__16888__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.not_EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event));
});})(clock,map__16885,map__16885__$1,event,clock_id))
,p1__16883_SHARP_);
});})(clock,map__16885,map__16885__$1,event,clock_id))
);

return event;
});
/**
 * Sets the event to repeat every `time` milliseconds 
 */
mecca.music.time.repeat_BANG_ = (function mecca$music$time$repeat_BANG_(p__16890,time){
var map__16891 = p__16890;
var map__16891__$1 = ((((!((map__16891 == null)))?(((((map__16891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16891):map__16891);
var event = map__16891__$1;
var deadline = cljs.core.get.call(null,map__16891__$1,new cljs.core.Keyword(null,"deadline","deadline",628964572));
if((time > (0))){
} else {
throw (new Error("Assert failed: (pos? time)"));
}

return mecca.music.time.schedule_BANG_.call(null,cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"repeat-time","repeat-time",-1963009396),time),(deadline + time));
});
/**
 * Internal implementation for time-stretching a single event.
 */
mecca.music.time.time_stretch_BANG__STAR_ = (function mecca$music$time$time_stretch_BANG__STAR_(p__16894,time_reference,ratio){
var map__16895 = p__16894;
var map__16895__$1 = ((((!((map__16895 == null)))?(((((map__16895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16895):map__16895);
var event = map__16895__$1;
var repeat_time = cljs.core.get.call(null,map__16895__$1,new cljs.core.Keyword(null,"repeat-time","repeat-time",-1963009396));
var clock_id = cljs.core.get.call(null,map__16895__$1,new cljs.core.Keyword(null,"clock-id","clock-id",-240196257));
var deadline = cljs.core.get.call(null,map__16895__$1,new cljs.core.Keyword(null,"deadline","deadline",628964572));
var earliest_time = cljs.core.get.call(null,map__16895__$1,new cljs.core.Keyword(null,"earliest-time","earliest-time",-171748463));
var clock = cljs.core.get.call(null,mecca.music.time._STAR_clocks_STAR_,clock_id);
var deadline__$1 = (time_reference + (ratio * (deadline - time_reference)));
var repeat_time__$1 = (cljs.core.truth_(repeat_time)?(repeat_time * ratio):null);
var repeats = (cljs.core.truth_(repeat_time__$1)?cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,repeat_time__$1),deadline__$1):null);
mecca.music.time.clear_BANG_.call(null,event);

return mecca.music.time.schedule_BANG_.call(null,cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"repeat-time","repeat-time",-1963009396),repeat_time__$1),(cljs.core.truth_(repeats)?cljs.core.first.call(null,cljs.core.drop_while.call(null,((function (clock,deadline__$1,repeat_time__$1,repeats,map__16895,map__16895__$1,event,repeat_time,clock_id,deadline,earliest_time){
return (function (p1__16893_SHARP_){
return (mecca.music.time.current_time.call(null,clock) >= p1__16893_SHARP_);
});})(clock,deadline__$1,repeat_time__$1,repeats,map__16895,map__16895__$1,event,repeat_time,clock_id,deadline,earliest_time))
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
mecca.music.time.time_stretch_BANG_ = (function mecca$music$time$time_stretch_BANG_(var_args){
var G__16899 = arguments.length;
switch (G__16899) {
case 2:
return mecca.music.time.time_stretch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mecca.music.time.time_stretch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mecca.music.time.time_stretch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,ratio){
var map__16900 = ((cljs.core.sequential_QMARK_.call(null,e))?cljs.core.first.call(null,e):e);
var map__16900__$1 = ((((!((map__16900 == null)))?(((((map__16900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16900):map__16900);
var clock_id = cljs.core.get.call(null,map__16900__$1,new cljs.core.Keyword(null,"clock-id","clock-id",-240196257));
var clock = cljs.core.get.call(null,mecca.music.time._STAR_clocks_STAR_,clock_id);
return mecca.music.time.time_stretch_BANG_.call(null,e,mecca.music.time.current_time.call(null,clock),ratio);
});

mecca.music.time.time_stretch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (e,time_reference,ratio){
if(cljs.core.sequential_QMARK_.call(null,e)){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16897_SHARP_){
return mecca.music.time.time_stretch_BANG__STAR_.call(null,p1__16897_SHARP_,time_reference,ratio);
}),e));
} else {
return mecca.music.time.time_stretch_BANG__STAR_.call(null,e,time_reference,ratio);
}
});

mecca.music.time.time_stretch_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Remove all scheduled events and start the clock.
 */
mecca.music.time.start_BANG_ = (function mecca$music$time$start_BANG_(clock){
var map__16903 = cljs.core.deref.call(null,clock);
var map__16903__$1 = ((((!((map__16903 == null)))?(((((map__16903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16903):map__16903);
var context = cljs.core.get.call(null,map__16903__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var started = cljs.core.get.call(null,map__16903__$1,new cljs.core.Keyword(null,"started","started",585705024));
if(cljs.core.truth_(started)){
return null;
} else {
cljs.core.swap_BANG_.call(null,clock,cljs.core.assoc,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.PersistentVector.EMPTY);

var clock_node = (function (){var G__16905 = context.createScriptProcessor((256),(1),(1));
G__16905.connect(context.destination);

(G__16905["onaudioprocess"] = ((function (G__16905,map__16903,map__16903__$1,context,started){
return (function (){
return mecca.music.time.tick_BANG_.call(null,clock);
});})(G__16905,map__16903,map__16903__$1,context,started))
);

return G__16905;
})();
cljs.core.swap_BANG_.call(null,clock,cljs.core.assoc,new cljs.core.Keyword(null,"clock-node","clock-node",-1745180317),clock_node,new cljs.core.Keyword(null,"started","started",585705024),true);

return clock;
}
});
/**
 * Stops the clock.
 */
mecca.music.time.stop_BANG_ = (function mecca$music$time$stop_BANG_(clock){
var map__16906 = cljs.core.deref.call(null,clock);
var map__16906__$1 = ((((!((map__16906 == null)))?(((((map__16906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16906):map__16906);
var started = cljs.core.get.call(null,map__16906__$1,new cljs.core.Keyword(null,"started","started",585705024));
var clock_node = cljs.core.get.call(null,map__16906__$1,new cljs.core.Keyword(null,"clock-node","clock-node",-1745180317));
if(cljs.core.truth_(started)){
clock_node.disconnect();

cljs.core.swap_BANG_.call(null,clock,cljs.core.assoc,new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"clock-node","clock-node",-1745180317),null);

return clock;
} else {
return null;
}
});

//# sourceMappingURL=time.js.map
