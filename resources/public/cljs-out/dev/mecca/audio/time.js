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
var len__4531__auto___11247 = arguments.length;
var i__4532__auto___11248 = (0);
while(true){
if((i__4532__auto___11248 < len__4531__auto___11247)){
args__4534__auto__.push((arguments[i__4532__auto___11248]));

var G__11249 = (i__4532__auto___11248 + (1));
i__4532__auto___11248 = G__11249;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return mecca.audio.time.clock.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

mecca.audio.time.clock.cljs$core$IFn$_invoke$arity$variadic = (function (p__11244){
var map__11245 = p__11244;
var map__11245__$1 = ((((!((map__11245 == null)))?(((((map__11245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11245):map__11245);
var attrs = map__11245__$1;
var id = cljs.core.gensym.call(null,"clock");
var clock = cljs.core.merge.call(null,mecca.audio.time.default_options,attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"started","started",585705024),false], null));
var atomic_clock = cljs.core.atom.call(null,clock);
mecca.audio.time._STAR_clocks_STAR_ = cljs.core.assoc.call(null,mecca.audio.time._STAR_clocks_STAR_,id,atomic_clock);

return atomic_clock;
});

mecca.audio.time.clock.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mecca.audio.time.clock.cljs$lang$applyTo = (function (seq11243){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11243));
});

/**
 * Internal implementation for the public function current-time, which works
 * on atom-wrapped clocks.
 * This internal version works on non-atom-wrapped clocks.
 */
mecca.audio.time.current_time_STAR_ = (function mecca$audio$time$current_time_STAR_(p__11250){
var map__11251 = p__11250;
var map__11251__$1 = ((((!((map__11251 == null)))?(((((map__11251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11251):map__11251);
var clock = map__11251__$1;
var context = cljs.core.get.call(null,map__11251__$1,new cljs.core.Keyword(null,"context","context",-830191113));
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
mecca.audio.time.event_STAR_ = (function mecca$audio$time$event_STAR_(p__11253){
var map__11254 = p__11253;
var map__11254__$1 = ((((!((map__11254 == null)))?(((((map__11254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11254):map__11254);
var event = map__11254__$1;
var id = cljs.core.get.call(null,map__11254__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var clock_id = cljs.core.get.call(null,map__11254__$1,new cljs.core.Keyword(null,"clock-id","clock-id",-240196257));
var clock = cljs.core.get.call(null,map__11254__$1,new cljs.core.Keyword(null,"clock","clock",-894301127));
var deadline = cljs.core.get.call(null,map__11254__$1,new cljs.core.Keyword(null,"deadline","deadline",628964572));
var tolerance_early = cljs.core.get.call(null,map__11254__$1,new cljs.core.Keyword(null,"tolerance-early","tolerance-early",1053037312));
var tolerance_late = cljs.core.get.call(null,map__11254__$1,new cljs.core.Keyword(null,"tolerance-late","tolerance-late",-765261359));
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
var map__11257 = cljs.core.deref.call(null,clock);
var map__11257__$1 = ((((!((map__11257 == null)))?(((((map__11257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11257):map__11257);
var events = cljs.core.get.call(null,map__11257__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var current_time = mecca.audio.time.current_time.call(null,clock);
var execute_now_QMARK_ = ((function (map__11257,map__11257__$1,events,current_time){
return (function (p1__11256_SHARP_){
return (new cljs.core.Keyword(null,"earliest-time","earliest-time",-171748463).cljs$core$IFn$_invoke$arity$1(p1__11256_SHARP_) <= current_time);
});})(map__11257,map__11257__$1,events,current_time))
;
var now = cljs.core.take_while.call(null,execute_now_QMARK_,events);
var seq__11259_11263 = cljs.core.seq.call(null,now);
var chunk__11260_11264 = null;
var count__11261_11265 = (0);
var i__11262_11266 = (0);
while(true){
if((i__11262_11266 < count__11261_11265)){
var event_11267 = cljs.core._nth.call(null,chunk__11260_11264,i__11262_11266);
mecca.audio.time.execute_BANG_.call(null,event_11267);


var G__11268 = seq__11259_11263;
var G__11269 = chunk__11260_11264;
var G__11270 = count__11261_11265;
var G__11271 = (i__11262_11266 + (1));
seq__11259_11263 = G__11268;
chunk__11260_11264 = G__11269;
count__11261_11265 = G__11270;
i__11262_11266 = G__11271;
continue;
} else {
var temp__5457__auto___11272 = cljs.core.seq.call(null,seq__11259_11263);
if(temp__5457__auto___11272){
var seq__11259_11273__$1 = temp__5457__auto___11272;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11259_11273__$1)){
var c__4351__auto___11274 = cljs.core.chunk_first.call(null,seq__11259_11273__$1);
var G__11275 = cljs.core.chunk_rest.call(null,seq__11259_11273__$1);
var G__11276 = c__4351__auto___11274;
var G__11277 = cljs.core.count.call(null,c__4351__auto___11274);
var G__11278 = (0);
seq__11259_11263 = G__11275;
chunk__11260_11264 = G__11276;
count__11261_11265 = G__11277;
i__11262_11266 = G__11278;
continue;
} else {
var event_11279 = cljs.core.first.call(null,seq__11259_11273__$1);
mecca.audio.time.execute_BANG_.call(null,event_11279);


var G__11280 = cljs.core.next.call(null,seq__11259_11273__$1);
var G__11281 = null;
var G__11282 = (0);
var G__11283 = (0);
seq__11259_11263 = G__11280;
chunk__11260_11264 = G__11281;
count__11261_11265 = G__11282;
i__11262_11266 = G__11283;
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
var map__11284 = cljs.core.nth.call(null,events,mid);
var map__11284__$1 = ((((!((map__11284 == null)))?(((((map__11284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11284):map__11284);
var earliest_time = cljs.core.get.call(null,map__11284__$1,new cljs.core.Keyword(null,"earliest-time","earliest-time",-171748463));
var action = (((earliest_time < deadline))?new cljs.core.Keyword(null,"higher","higher",-569576192):new cljs.core.Keyword(null,"lower","lower",1120320821));
var G__11286 = ((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"higher","higher",-569576192)))?(mid + (1)):low);
var G__11287 = ((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"lower","lower",1120320821)))?mid:high);
var G__11288 = Math.floor(((low + high) / (2)));
low = G__11286;
high = G__11287;
mid = G__11288;
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
mecca.audio.time.insert_event = (function mecca$audio$time$insert_event(events,p__11289){
var map__11290 = p__11289;
var map__11290__$1 = ((((!((map__11290 == null)))?(((((map__11290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11290):map__11290);
var event = map__11290__$1;
var earliest_time = cljs.core.get.call(null,map__11290__$1,new cljs.core.Keyword(null,"earliest-time","earliest-time",-171748463));
var i = mecca.audio.time.index_by_time.call(null,events,earliest_time);
return cljs.core.concat.call(null,cljs.core.take.call(null,i,events),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null),cljs.core.drop.call(null,i,events));
});
/**
 * Create an event and insert into a clock's event queue.
 */
mecca.audio.time.create_event_BANG_ = (function mecca$audio$time$create_event_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11302 = arguments.length;
var i__4532__auto___11303 = (0);
while(true){
if((i__4532__auto___11303 < len__4531__auto___11302)){
args__4534__auto__.push((arguments[i__4532__auto___11303]));

var G__11304 = (i__4532__auto___11303 + (1));
i__4532__auto___11303 = G__11304;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return mecca.audio.time.create_event_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

mecca.audio.time.create_event_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (clock,f,deadline,p__11296){
var vec__11297 = p__11296;
var map__11300 = cljs.core.nth.call(null,vec__11297,(0),null);
var map__11300__$1 = ((((!((map__11300 == null)))?(((((map__11300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11300):map__11300);
var opts = map__11300__$1;
var event = mecca.audio.time.event_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),f,new cljs.core.Keyword(null,"clock","clock",-894301127),clock,new cljs.core.Keyword(null,"deadline","deadline",628964572),deadline], null),opts));
cljs.core.swap_BANG_.call(null,clock,cljs.core.update,new cljs.core.Keyword(null,"events","events",1792552201),mecca.audio.time.insert_event,event);

return event;
});

mecca.audio.time.create_event_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
mecca.audio.time.create_event_BANG_.cljs$lang$applyTo = (function (seq11292){
var G__11293 = cljs.core.first.call(null,seq11292);
var seq11292__$1 = cljs.core.next.call(null,seq11292);
var G__11294 = cljs.core.first.call(null,seq11292__$1);
var seq11292__$2 = cljs.core.next.call(null,seq11292__$1);
var G__11295 = cljs.core.first.call(null,seq11292__$2);
var seq11292__$3 = cljs.core.next.call(null,seq11292__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11293,G__11294,G__11295,seq11292__$3);
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
mecca.audio.time.schedule_BANG_ = (function mecca$audio$time$schedule_BANG_(p__11305,new_deadline){
var map__11306 = p__11305;
var map__11306__$1 = ((((!((map__11306 == null)))?(((((map__11306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11306):map__11306);
var event = map__11306__$1;
var clock_id = cljs.core.get.call(null,map__11306__$1,new cljs.core.Keyword(null,"clock-id","clock-id",-240196257));
var clock = cljs.core.get.call(null,mecca.audio.time._STAR_clocks_STAR_,clock_id);
cljs.core.swap_BANG_.call(null,clock,cljs.core.update,new cljs.core.Keyword(null,"events","events",1792552201),mecca.audio.time.schedule_STAR_,event,new_deadline);

return mecca.audio.time.event_STAR_.call(null,cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"deadline","deadline",628964572),new_deadline));
});
mecca.audio.time.execute_BANG_ = (function mecca$audio$time$execute_BANG_(p__11308){
var map__11309 = p__11308;
var map__11309__$1 = ((((!((map__11309 == null)))?(((((map__11309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11309):map__11309);
var event = map__11309__$1;
var action = cljs.core.get.call(null,map__11309__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var clock_id = cljs.core.get.call(null,map__11309__$1,new cljs.core.Keyword(null,"clock-id","clock-id",-240196257));
var latest_time = cljs.core.get.call(null,map__11309__$1,new cljs.core.Keyword(null,"latest-time","latest-time",1740064819));
var deadline = cljs.core.get.call(null,map__11309__$1,new cljs.core.Keyword(null,"deadline","deadline",628964572));
var repeat_time = cljs.core.get.call(null,map__11309__$1,new cljs.core.Keyword(null,"repeat-time","repeat-time",-1963009396));
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
var len__4531__auto___11318 = arguments.length;
var i__4532__auto___11319 = (0);
while(true){
if((i__4532__auto___11319 < len__4531__auto___11318)){
args__4534__auto__.push((arguments[i__4532__auto___11319]));

var G__11320 = (i__4532__auto___11319 + (1));
i__4532__auto___11319 = G__11320;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return mecca.audio.time.set_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

mecca.audio.time.set_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (clock,f,delay,p__11315){
var map__11316 = p__11315;
var map__11316__$1 = ((((!((map__11316 == null)))?(((((map__11316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11316):map__11316);
var opts = map__11316__$1;
return mecca.audio.time.create_event_BANG_.call(null,clock,f,mecca.audio.time.absolute_time.call(null,cljs.core.deref.call(null,clock),delay),opts);
});

mecca.audio.time.set_timeout_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
mecca.audio.time.set_timeout_BANG_.cljs$lang$applyTo = (function (seq11311){
var G__11312 = cljs.core.first.call(null,seq11311);
var seq11311__$1 = cljs.core.next.call(null,seq11311);
var G__11313 = cljs.core.first.call(null,seq11311__$1);
var seq11311__$2 = cljs.core.next.call(null,seq11311__$1);
var G__11314 = cljs.core.first.call(null,seq11311__$2);
var seq11311__$3 = cljs.core.next.call(null,seq11311__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11312,G__11313,G__11314,seq11311__$3);
});

/**
 * Schedules `f` to run before `deadline`. Returns the event.
 * `opts` may contain :tolerance-early and :tolerance-late for optionally
 * overriding the clock's timing window for events.
 */
mecca.audio.time.callback_at_time_BANG_ = (function mecca$audio$time$callback_at_time_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11328 = arguments.length;
var i__4532__auto___11329 = (0);
while(true){
if((i__4532__auto___11329 < len__4531__auto___11328)){
args__4534__auto__.push((arguments[i__4532__auto___11329]));

var G__11330 = (i__4532__auto___11329 + (1));
i__4532__auto___11329 = G__11330;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return mecca.audio.time.callback_at_time_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

mecca.audio.time.callback_at_time_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (clock,f,deadline,p__11325){
var map__11326 = p__11325;
var map__11326__$1 = ((((!((map__11326 == null)))?(((((map__11326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11326):map__11326);
var opts = map__11326__$1;
return mecca.audio.time.create_event_BANG_.call(null,clock,f,deadline,opts);
});

mecca.audio.time.callback_at_time_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
mecca.audio.time.callback_at_time_BANG_.cljs$lang$applyTo = (function (seq11321){
var G__11322 = cljs.core.first.call(null,seq11321);
var seq11321__$1 = cljs.core.next.call(null,seq11321);
var G__11323 = cljs.core.first.call(null,seq11321__$1);
var seq11321__$2 = cljs.core.next.call(null,seq11321__$1);
var G__11324 = cljs.core.first.call(null,seq11321__$2);
var seq11321__$3 = cljs.core.next.call(null,seq11321__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11322,G__11323,G__11324,seq11321__$3);
});

/**
 * Unschedules an event by removing it from its clock's event queue.
 */
mecca.audio.time.clear_BANG_ = (function mecca$audio$time$clear_BANG_(p__11332){
var map__11333 = p__11332;
var map__11333__$1 = ((((!((map__11333 == null)))?(((((map__11333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11333):map__11333);
var event = map__11333__$1;
var clock_id = cljs.core.get.call(null,map__11333__$1,new cljs.core.Keyword(null,"clock-id","clock-id",-240196257));
var clock = cljs.core.get.call(null,mecca.audio.time._STAR_clocks_STAR_,clock_id);
cljs.core.swap_BANG_.call(null,clock,cljs.core.update,new cljs.core.Keyword(null,"events","events",1792552201),((function (clock,map__11333,map__11333__$1,event,clock_id){
return (function (p1__11331_SHARP_){
return cljs.core.filter.call(null,((function (clock,map__11333,map__11333__$1,event,clock_id){
return (function (p__11335){
var map__11336 = p__11335;
var map__11336__$1 = ((((!((map__11336 == null)))?(((((map__11336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11336):map__11336);
var id = cljs.core.get.call(null,map__11336__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.not_EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event));
});})(clock,map__11333,map__11333__$1,event,clock_id))
,p1__11331_SHARP_);
});})(clock,map__11333,map__11333__$1,event,clock_id))
);

return event;
});
/**
 * Sets the event to repeat every `time` milliseconds 
 */
mecca.audio.time.repeat_BANG_ = (function mecca$audio$time$repeat_BANG_(p__11338,time){
var map__11339 = p__11338;
var map__11339__$1 = ((((!((map__11339 == null)))?(((((map__11339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11339):map__11339);
var event = map__11339__$1;
var deadline = cljs.core.get.call(null,map__11339__$1,new cljs.core.Keyword(null,"deadline","deadline",628964572));
if((time > (0))){
} else {
throw (new Error("Assert failed: (pos? time)"));
}

return mecca.audio.time.schedule_BANG_.call(null,cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"repeat-time","repeat-time",-1963009396),time),(deadline + time));
});
/**
 * Internal implementation for time-stretching a single event.
 */
mecca.audio.time.time_stretch_BANG__STAR_ = (function mecca$audio$time$time_stretch_BANG__STAR_(p__11342,time_reference,ratio){
var map__11343 = p__11342;
var map__11343__$1 = ((((!((map__11343 == null)))?(((((map__11343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11343):map__11343);
var event = map__11343__$1;
var repeat_time = cljs.core.get.call(null,map__11343__$1,new cljs.core.Keyword(null,"repeat-time","repeat-time",-1963009396));
var clock_id = cljs.core.get.call(null,map__11343__$1,new cljs.core.Keyword(null,"clock-id","clock-id",-240196257));
var deadline = cljs.core.get.call(null,map__11343__$1,new cljs.core.Keyword(null,"deadline","deadline",628964572));
var earliest_time = cljs.core.get.call(null,map__11343__$1,new cljs.core.Keyword(null,"earliest-time","earliest-time",-171748463));
var clock = cljs.core.get.call(null,mecca.audio.time._STAR_clocks_STAR_,clock_id);
var deadline__$1 = (time_reference + (ratio * (deadline - time_reference)));
var repeat_time__$1 = (cljs.core.truth_(repeat_time)?(repeat_time * ratio):null);
var repeats = (cljs.core.truth_(repeat_time__$1)?cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,repeat_time__$1),deadline__$1):null);
mecca.audio.time.clear_BANG_.call(null,event);

return mecca.audio.time.schedule_BANG_.call(null,cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"repeat-time","repeat-time",-1963009396),repeat_time__$1),(cljs.core.truth_(repeats)?cljs.core.first.call(null,cljs.core.drop_while.call(null,((function (clock,deadline__$1,repeat_time__$1,repeats,map__11343,map__11343__$1,event,repeat_time,clock_id,deadline,earliest_time){
return (function (p1__11341_SHARP_){
return (mecca.audio.time.current_time.call(null,clock) >= p1__11341_SHARP_);
});})(clock,deadline__$1,repeat_time__$1,repeats,map__11343,map__11343__$1,event,repeat_time,clock_id,deadline,earliest_time))
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
var G__11347 = arguments.length;
switch (G__11347) {
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
var map__11348 = ((cljs.core.sequential_QMARK_.call(null,e))?cljs.core.first.call(null,e):e);
var map__11348__$1 = ((((!((map__11348 == null)))?(((((map__11348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11348):map__11348);
var clock_id = cljs.core.get.call(null,map__11348__$1,new cljs.core.Keyword(null,"clock-id","clock-id",-240196257));
var clock = cljs.core.get.call(null,mecca.audio.time._STAR_clocks_STAR_,clock_id);
return mecca.audio.time.time_stretch_BANG_.call(null,e,mecca.audio.time.current_time.call(null,clock),ratio);
});

mecca.audio.time.time_stretch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (e,time_reference,ratio){
if(cljs.core.sequential_QMARK_.call(null,e)){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__11345_SHARP_){
return mecca.audio.time.time_stretch_BANG__STAR_.call(null,p1__11345_SHARP_,time_reference,ratio);
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
var map__11351 = cljs.core.deref.call(null,clock);
var map__11351__$1 = ((((!((map__11351 == null)))?(((((map__11351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11351):map__11351);
var context = cljs.core.get.call(null,map__11351__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var started = cljs.core.get.call(null,map__11351__$1,new cljs.core.Keyword(null,"started","started",585705024));
if(cljs.core.truth_(started)){
return null;
} else {
cljs.core.swap_BANG_.call(null,clock,cljs.core.assoc,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.PersistentVector.EMPTY);

var clock_node = (function (){var G__11353 = context.createScriptProcessor((256),(1),(1));
G__11353.connect(context.destination);

(G__11353["onaudioprocess"] = ((function (G__11353,map__11351,map__11351__$1,context,started){
return (function (){
return mecca.audio.time.tick_BANG_.call(null,clock);
});})(G__11353,map__11351,map__11351__$1,context,started))
);

return G__11353;
})();
cljs.core.swap_BANG_.call(null,clock,cljs.core.assoc,new cljs.core.Keyword(null,"clock-node","clock-node",-1745180317),clock_node,new cljs.core.Keyword(null,"started","started",585705024),true);

return clock;
}
});
/**
 * Stops the clock.
 */
mecca.audio.time.stop_BANG_ = (function mecca$audio$time$stop_BANG_(clock){
var map__11354 = cljs.core.deref.call(null,clock);
var map__11354__$1 = ((((!((map__11354 == null)))?(((((map__11354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11354):map__11354);
var started = cljs.core.get.call(null,map__11354__$1,new cljs.core.Keyword(null,"started","started",585705024));
var clock_node = cljs.core.get.call(null,map__11354__$1,new cljs.core.Keyword(null,"clock-node","clock-node",-1745180317));
if(cljs.core.truth_(started)){
clock_node.disconnect();

cljs.core.swap_BANG_.call(null,clock,cljs.core.assoc,new cljs.core.Keyword(null,"started","started",585705024),false,new cljs.core.Keyword(null,"clock-node","clock-node",-1745180317),null);

return clock;
} else {
return null;
}
});

//# sourceMappingURL=time.js.map
