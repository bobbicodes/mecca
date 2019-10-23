// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('re_frame.core');
mecca.music.audio_context = (function mecca$music$audio_context(){
if(cljs.core.truth_(window.AudioContext)){
return (new window.AudioContext());
} else {
return (new window.webkitAudioContext());
}
});
goog.exportSymbol('mecca.music.audio_context', mecca.music.audio_context);
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.audiocontext !== 'undefined')){
} else {
mecca.music.audiocontext = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(mecca.music.audio_context());
}
mecca.music.current_time = (function mecca$music$current_time(context){
return context.currentTime;
});
goog.exportSymbol('mecca.music.current_time', mecca.music.current_time);
mecca.music.lookahead = 25.0;
mecca.music.schedule_ahead_time = 0.1;
mecca.music.scheduler = (function mecca$music$scheduler(){
var next_note_time = (function (){var G__18547 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_note_DASH_time], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18547) : re_frame.core.subscribe.call(null,G__18547));
})();
var current_note = (function (){var G__18548 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_note], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18548) : re_frame.core.subscribe.call(null,G__18548));
})();
if((cljs.core.deref(next_note_time) < (mecca.music.schedule_ahead_time + mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext))))){
var G__18549 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schedule_DASH_note,cljs.core.deref(current_note),cljs.core.deref(next_note_time)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18549) : re_frame.core.dispatch.call(null,G__18549));
} else {
var G__18550 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_note], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18550) : re_frame.core.dispatch.call(null,G__18550));
}
});
mecca.music.mario_jump = (function mecca$music$mario_jump(){
var beat = (function (){var G__18552 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18552) : re_frame.core.subscribe.call(null,G__18552));
})();
var notes = (function (){var G__18553 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18553) : re_frame.core.subscribe.call(null,G__18553));
})();
var jump = (function (){var G__18554 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18554) : re_frame.core.subscribe.call(null,G__18554));
})();
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.deref((function (){var G__18556 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18556) : re_frame.core.subscribe.call(null,G__18556));
})());
if(cljs.core.truth_(and__3938__auto__)){
return (cljs.core.deref(jump) === (0));
} else {
return and__3938__auto__;
}
})())){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (beat,notes,jump){
return (function (p1__18551_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__18551_SHARP_),(cljs.core.deref(beat) + (1)));
});})(beat,notes,jump))
,cljs.core.deref(notes))))){
var G__18557 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jump_BANG_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18557) : re_frame.core.dispatch.call(null,G__18557));
} else {
return null;
}
} else {
return null;
}
});
mecca.music.mario_move = (function mecca$music$mario_move(){
var notes = (function (){var G__18559 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18559) : re_frame.core.subscribe.call(null,G__18559));
})();
var playing_QMARK_ = cljs.core.deref((function (){var G__18560 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18560) : re_frame.core.subscribe.call(null,G__18560));
})());
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (notes,playing_QMARK_,now){
return (function (p1__18558_SHARP_){
return cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__18558_SHARP_);
});})(notes,playing_QMARK_,now))
,cljs.core.deref(notes)));
var started = (function (){var G__18561 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18561) : re_frame.core.subscribe.call(null,G__18561));
})();
var elapsed = (mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)) - cljs.core.deref(started));
var beat_length = ((60) / cljs.core.deref((function (){var G__18562 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18562) : re_frame.core.subscribe.call(null,G__18562));
})()));
var current_beat = (elapsed / beat_length);
var last_drawn_pos = (function (){var G__18563 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18563) : re_frame.core.subscribe.call(null,G__18563));
})();
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
var G__18564_18567 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_off], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18564_18567) : re_frame.core.dispatch.call(null,G__18564_18567));
} else {
if((cljs.core.deref(last_drawn_pos) < current_beat)){
var G__18565_18568 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$move_DASH_mario], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18565_18568) : re_frame.core.dispatch.call(null,G__18565_18568));

var G__18566_18569 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$advance_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18566_18569) : re_frame.core.dispatch.call(null,G__18566_18569));
} else {
}
}
} else {
}

return mecca.music.mario_jump();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__18570_18571 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tick_BANG_], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18570_18571) : re_frame.core.dispatch.call(null,G__18570_18571));

return mecca.music.mario_move();
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.do_timer !== 'undefined')){
} else {
mecca.music.do_timer = setInterval(mecca.music.dispatch_timer_event,(25));
}
mecca.music.load_sound = (function mecca$music$load_sound(named_url){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var req = (new XMLHttpRequest());
req.responseType = "arraybuffer";

req.onload = ((function (out,req){
return (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(req.status,(200))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(named_url,cljs.core.cst$kw$buffer,req.response));

return cljs.core.async.close_BANG_(out);
} else {
return cljs.core.async.close_BANG_(out);
}
});})(out,req))
;

req.open("GET",cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(named_url),true);

req.send();

return out;
});
mecca.music.decode = (function mecca$music$decode(named_url){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(named_url))){
cljs.core.deref(mecca.music.audiocontext).decodeAudioData(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(named_url),((function (out){
return (function (decoded_buffer){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(named_url,cljs.core.cst$kw$decoded_DASH_buffer,decoded_buffer));

return cljs.core.async.close_BANG_(out);
});})(out))
,((function (out){
return (function (){
console.error("Error loading file ",cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([named_url], 0)));

return cljs.core.async.close_BANG_(out);
});})(out))
);
} else {
cljs.core.async.close_BANG_(out);
}

return out;
});
mecca.music.buffer_source = (function mecca$music$buffer_source(buffer){
var source = cljs.core.deref(mecca.music.audiocontext).createBufferSource();
source.buffer = buffer;

return source;
});
mecca.music.get_and_decode = (function mecca$music$get_and_decode(named_url){
var c__14735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto__){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto__){
return (function (state_18583){
var state_val_18584 = (state_18583[(1)]);
if((state_val_18584 === (1))){
var inst_18572 = mecca.music.load_sound(named_url);
var state_18583__$1 = state_18583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18583__$1,(2),inst_18572);
} else {
if((state_val_18584 === (2))){
var inst_18574 = (state_18583[(7)]);
var inst_18574__$1 = (state_18583[(2)]);
var state_18583__$1 = (function (){var statearr_18585 = state_18583;
(statearr_18585[(7)] = inst_18574__$1);

return statearr_18585;
})();
if(cljs.core.truth_(inst_18574__$1)){
var statearr_18586_18594 = state_18583__$1;
(statearr_18586_18594[(1)] = (3));

} else {
var statearr_18587_18595 = state_18583__$1;
(statearr_18587_18595[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18584 === (3))){
var inst_18574 = (state_18583[(7)]);
var inst_18576 = mecca.music.decode(inst_18574);
var state_18583__$1 = state_18583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18583__$1,(6),inst_18576);
} else {
if((state_val_18584 === (4))){
var state_18583__$1 = state_18583;
var statearr_18588_18596 = state_18583__$1;
(statearr_18588_18596[(2)] = null);

(statearr_18588_18596[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18584 === (5))){
var inst_18581 = (state_18583[(2)]);
var state_18583__$1 = state_18583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18583__$1,inst_18581);
} else {
if((state_val_18584 === (6))){
var inst_18578 = (state_18583[(2)]);
var state_18583__$1 = state_18583;
var statearr_18589_18597 = state_18583__$1;
(statearr_18589_18597[(2)] = inst_18578);

(statearr_18589_18597[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
});})(c__14735__auto__))
;
return ((function (switch__14552__auto__,c__14735__auto__){
return (function() {
var mecca$music$get_and_decode_$_state_machine__14553__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__14553__auto____0 = (function (){
var statearr_18590 = [null,null,null,null,null,null,null,null];
(statearr_18590[(0)] = mecca$music$get_and_decode_$_state_machine__14553__auto__);

(statearr_18590[(1)] = (1));

return statearr_18590;
});
var mecca$music$get_and_decode_$_state_machine__14553__auto____1 = (function (state_18583){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_18583);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e18591){if((e18591 instanceof Object)){
var ex__14556__auto__ = e18591;
var statearr_18592_18598 = state_18583;
(statearr_18592_18598[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18583);

return cljs.core.cst$kw$recur;
} else {
throw e18591;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__18599 = state_18583;
state_18583 = G__18599;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__14553__auto__ = function(state_18583){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__14553__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__14553__auto____1.call(this,state_18583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__14553__auto____0;
mecca$music$get_and_decode_$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__14553__auto____1;
return mecca$music$get_and_decode_$_state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto__))
})();
var state__14737__auto__ = (function (){var statearr_18593 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_18593[(6)] = c__14735__auto__);

return statearr_18593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto__))
);

return c__14735__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__14735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto__){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto__){
return (function (state_18628){
var state_val_18629 = (state_18628[(1)]);
if((state_val_18629 === (1))){
var inst_18600 = cljs.core.PersistentHashMap.EMPTY;
var inst_18601 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(19));
var inst_18602 = inst_18600;
var inst_18603 = inst_18601;
var state_18628__$1 = (function (){var statearr_18630 = state_18628;
(statearr_18630[(7)] = inst_18602);

(statearr_18630[(8)] = inst_18603);

return statearr_18630;
})();
var statearr_18631_18643 = state_18628__$1;
(statearr_18631_18643[(2)] = null);

(statearr_18631_18643[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18629 === (2))){
var inst_18603 = (state_18628[(8)]);
var inst_18605 = cljs.core.first(inst_18603);
var inst_18606 = (inst_18605 == null);
var inst_18607 = cljs.core.not(inst_18606);
var state_18628__$1 = state_18628;
if(inst_18607){
var statearr_18632_18644 = state_18628__$1;
(statearr_18632_18644[(1)] = (4));

} else {
var statearr_18633_18645 = state_18628__$1;
(statearr_18633_18645[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18629 === (3))){
var inst_18626 = (state_18628[(2)]);
var state_18628__$1 = state_18628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18628__$1,inst_18626);
} else {
if((state_val_18629 === (4))){
var inst_18603 = (state_18628[(8)]);
var inst_18609 = (state_18628[(9)]);
var inst_18609__$1 = cljs.core.first(inst_18603);
var inst_18610 = [cljs.core.cst$kw$url,cljs.core.cst$kw$sound];
var inst_18611 = ["/mecca/resources/public/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18609__$1),".mp3"].join('');
var inst_18612 = [inst_18611,inst_18609__$1];
var inst_18613 = cljs.core.PersistentHashMap.fromArrays(inst_18610,inst_18612);
var inst_18614 = mecca.music.get_and_decode(inst_18613);
var state_18628__$1 = (function (){var statearr_18634 = state_18628;
(statearr_18634[(9)] = inst_18609__$1);

return statearr_18634;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18628__$1,(7),inst_18614);
} else {
if((state_val_18629 === (5))){
var inst_18602 = (state_18628[(7)]);
var state_18628__$1 = state_18628;
var statearr_18635_18646 = state_18628__$1;
(statearr_18635_18646[(2)] = inst_18602);

(statearr_18635_18646[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18629 === (6))){
var inst_18624 = (state_18628[(2)]);
var state_18628__$1 = state_18628;
var statearr_18636_18647 = state_18628__$1;
(statearr_18636_18647[(2)] = inst_18624);

(statearr_18636_18647[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18629 === (7))){
var inst_18602 = (state_18628[(7)]);
var inst_18603 = (state_18628[(8)]);
var inst_18609 = (state_18628[(9)]);
var inst_18616 = (state_18628[(2)]);
var inst_18617 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_18609], 0));
var inst_18618 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_18616], 0));
var inst_18619 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_18602,inst_18609,inst_18616);
var inst_18620 = cljs.core.rest(inst_18603);
var inst_18602__$1 = inst_18619;
var inst_18603__$1 = inst_18620;
var state_18628__$1 = (function (){var statearr_18637 = state_18628;
(statearr_18637[(7)] = inst_18602__$1);

(statearr_18637[(10)] = inst_18618);

(statearr_18637[(8)] = inst_18603__$1);

(statearr_18637[(11)] = inst_18617);

return statearr_18637;
})();
var statearr_18638_18648 = state_18628__$1;
(statearr_18638_18648[(2)] = null);

(statearr_18638_18648[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__14735__auto__))
;
return ((function (switch__14552__auto__,c__14735__auto__){
return (function() {
var mecca$music$load_samples_$_state_machine__14553__auto__ = null;
var mecca$music$load_samples_$_state_machine__14553__auto____0 = (function (){
var statearr_18639 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18639[(0)] = mecca$music$load_samples_$_state_machine__14553__auto__);

(statearr_18639[(1)] = (1));

return statearr_18639;
});
var mecca$music$load_samples_$_state_machine__14553__auto____1 = (function (state_18628){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_18628);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e18640){if((e18640 instanceof Object)){
var ex__14556__auto__ = e18640;
var statearr_18641_18649 = state_18628;
(statearr_18641_18649[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18628);

return cljs.core.cst$kw$recur;
} else {
throw e18640;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__18650 = state_18628;
state_18628 = G__18650;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__14553__auto__ = function(state_18628){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__14553__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__14553__auto____1.call(this,state_18628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__14553__auto____0;
mecca$music$load_samples_$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__14553__auto____1;
return mecca$music$load_samples_$_state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto__))
})();
var state__14737__auto__ = (function (){var statearr_18642 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_18642[(6)] = c__14735__auto__);

return statearr_18642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto__))
);

return c__14735__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__14735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto__){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto__){
return (function (state_18657){
var state_val_18658 = (state_18657[(1)]);
if((state_val_18658 === (1))){
var inst_18651 = mecca.music.load_samples();
var state_18657__$1 = state_18657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18657__$1,(2),inst_18651);
} else {
if((state_val_18658 === (2))){
var inst_18653 = (state_18657[(2)]);
var inst_18654 = mecca.music.samples = inst_18653;
var inst_18655 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_18657__$1 = (function (){var statearr_18659 = state_18657;
(statearr_18659[(7)] = inst_18654);

return statearr_18659;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18657__$1,inst_18655);
} else {
return null;
}
}
});})(c__14735__auto__))
;
return ((function (switch__14552__auto__,c__14735__auto__){
return (function() {
var mecca$music$state_machine__14553__auto__ = null;
var mecca$music$state_machine__14553__auto____0 = (function (){
var statearr_18660 = [null,null,null,null,null,null,null,null];
(statearr_18660[(0)] = mecca$music$state_machine__14553__auto__);

(statearr_18660[(1)] = (1));

return statearr_18660;
});
var mecca$music$state_machine__14553__auto____1 = (function (state_18657){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_18657);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e18661){if((e18661 instanceof Object)){
var ex__14556__auto__ = e18661;
var statearr_18662_18664 = state_18657;
(statearr_18662_18664[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18657);

return cljs.core.cst$kw$recur;
} else {
throw e18661;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__18665 = state_18657;
state_18657 = G__18665;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
mecca$music$state_machine__14553__auto__ = function(state_18657){
switch(arguments.length){
case 0:
return mecca$music$state_machine__14553__auto____0.call(this);
case 1:
return mecca$music$state_machine__14553__auto____1.call(this,state_18657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__14553__auto____0;
mecca$music$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__14553__auto____1;
return mecca$music$state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto__))
})();
var state__14737__auto__ = (function (){var statearr_18663 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_18663[(6)] = c__14735__auto__);

return statearr_18663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto__))
);

return c__14735__auto__;
})();
}
mecca.music.add_semitone = (function mecca$music$add_semitone(rate){
return (rate * Math.pow((2),((1) / (12))));
});
mecca.music.sub_semitone = (function mecca$music$sub_semitone(rate){
return (rate * Math.pow((2),((-1) / (12))));
});
mecca.music.inc_rate = (function mecca$music$inc_rate(semis){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(mecca.music.add_semitone,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(semis,(1)));
});
mecca.music.dec_rate = (function mecca$music$dec_rate(semis){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(mecca.music.sub_semitone,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(semis,(1)));
});
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
if(((66) < midi_num)){
return mecca.music.inc_rate((midi_num - (66)));
} else {
return mecca.music.dec_rate(((68) - midi_num));
}
});
mecca.music.play_sample = (function mecca$music$play_sample(instrument,pitch){
var context = mecca.music.audiocontext;
var audio_buffer = cljs.core.cst$kw$decoded_DASH_buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.samples,instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
var compressor = cljs.core.deref(context).createDynamicsCompressor();
var analyser = cljs.core.deref(context).createAnalyser();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),cljs.core.deref(context).currentTime);

sample_source.connect(analyser);

sample_source.connect(cljs.core.deref(context).destination);

sample_source.start();

return sample_source;
});
mecca.music.play_at = (function mecca$music$play_at(instrument,pitch,time){
var context = mecca.music.audiocontext;
var audio_buffer = cljs.core.cst$kw$decoded_DASH_buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.samples,instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(((((83) < pitch))?(pitch - (24)):pitch)),time);

sample_source.connect(cljs.core.deref(context).destination);

sample_source.start(time);

return sample_source;
});
mecca.music.play_section = (function mecca$music$play_section(from,to){
var notes = (function (){var G__18667 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18667) : re_frame.core.subscribe.call(null,G__18667));
})();
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var tempo = (function (){var G__18668 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18668) : re_frame.core.subscribe.call(null,G__18668));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (notes,now,tempo){
return (function (p1__18666_SHARP_){
return (((from <= cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__18666_SHARP_))) && ((cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__18666_SHARP_) <= to)));
});})(notes,now,tempo))
,cljs.core.deref(notes));
var G__18669_18678 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18669_18678) : re_frame.core.dispatch.call(null,G__18669_18678));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (notes,now,tempo,section){
return (function mecca$music$play_section_$_iter__18670(s__18671){
return (new cljs.core.LazySeq(null,((function (notes,now,tempo,section){
return (function (){
var s__18671__$1 = s__18671;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__18671__$1);
if(temp__5457__auto__){
var s__18671__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18671__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__18671__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__18673 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__18672 = (0);
while(true){
if((i__18672 < size__4323__auto__)){
var map__18674 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__18672);
var map__18674__$1 = ((((!((map__18674 == null)))?(((((map__18674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18674):map__18674);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18674__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18674__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18674__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__18673,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__18679 = (i__18672 + (1));
i__18672 = G__18679;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18673),mecca$music$play_section_$_iter__18670(cljs.core.chunk_rest(s__18671__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18673),null);
}
} else {
var map__18676 = cljs.core.first(s__18671__$2);
var map__18676__$1 = ((((!((map__18676 == null)))?(((((map__18676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18676):map__18676);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18676__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18676__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18676__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_section_$_iter__18670(cljs.core.rest(s__18671__$2)));
}
} else {
return null;
}
break;
}
});})(notes,now,tempo,section))
,null,null));
});})(notes,now,tempo,section))
;
return iter__4324__auto__(section);
})());
});
mecca.music.play_measure = (function mecca$music$play_measure(n){
return mecca.music.play_section(((n * (4)) - (4)),((n * (4)) + (1)));
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = (function (){var G__18680 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18680) : re_frame.core.subscribe.call(null,G__18680));
})();
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var tempo = (function (){var G__18681 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18681) : re_frame.core.subscribe.call(null,G__18681));
})();
var G__18682_18691 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18682_18691) : re_frame.core.dispatch.call(null,G__18682_18691));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (notes,now,tempo){
return (function mecca$music$play_song_BANG__$_iter__18683(s__18684){
return (new cljs.core.LazySeq(null,((function (notes,now,tempo){
return (function (){
var s__18684__$1 = s__18684;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__18684__$1);
if(temp__5457__auto__){
var s__18684__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18684__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__18684__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__18686 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__18685 = (0);
while(true){
if((i__18685 < size__4323__auto__)){
var map__18687 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__18685);
var map__18687__$1 = ((((!((map__18687 == null)))?(((((map__18687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18687):map__18687);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18687__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18687__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18687__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__18686,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__18692 = (i__18685 + (1));
i__18685 = G__18692;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18686),mecca$music$play_song_BANG__$_iter__18683(cljs.core.chunk_rest(s__18684__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18686),null);
}
} else {
var map__18689 = cljs.core.first(s__18684__$2);
var map__18689__$1 = ((((!((map__18689 == null)))?(((((map__18689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18689):map__18689);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18689__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18689__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18689__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__18683(cljs.core.rest(s__18684__$2)));
}
} else {
return null;
}
break;
}
});})(notes,now,tempo))
,null,null));
});})(notes,now,tempo))
;
return iter__4324__auto__(cljs.core.deref(notes));
})());
});
mecca.music.get_bytes_BANG_ = (function mecca$music$get_bytes_BANG_(analyser,freq_data){
analyser.getByteFrequencyData(freq_data);

return freq_data;
});
