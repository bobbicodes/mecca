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
mecca.music.mario_jump_QMARK_ = (function mecca$music$mario_jump_QMARK_(){
var beat = cljs.core.deref((function (){var G__14598 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14598) : re_frame.core.subscribe.call(null,G__14598));
})());
var notes = cljs.core.deref((function (){var G__14599 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14599) : re_frame.core.subscribe.call(null,G__14599));
})());
if(cljs.core.truth_(cljs.core.deref((function (){var G__14600 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14600) : re_frame.core.subscribe.call(null,G__14600));
})()))){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (beat,notes){
return (function (p1__14597_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__14597_SHARP_),beat);
});})(beat,notes))
,cljs.core.deref((function (){var G__14601 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14601) : re_frame.core.subscribe.call(null,G__14601));
})()))))){
var G__14602 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jump_BANG_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14602) : re_frame.core.dispatch.call(null,G__14602));
} else {
var G__14603 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$down_BANG_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14603) : re_frame.core.dispatch.call(null,G__14603));
}
} else {
return null;
}
});
mecca.music.mario_move = (function mecca$music$mario_move(){
var playing_QMARK_ = cljs.core.deref((function (){var G__14604 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14604) : re_frame.core.subscribe.call(null,G__14604));
})());
var beat = cljs.core.deref((function (){var G__14605 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14605) : re_frame.core.subscribe.call(null,G__14605));
})());
if(cljs.core.truth_(playing_QMARK_)){
var G__14606 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$move_DASH_mario,((40) * beat)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14606) : re_frame.core.dispatch.call(null,G__14606));
} else {
return null;
}
});
mecca.music.song_done_QMARK_ = (function mecca$music$song_done_QMARK_(){
var notes = (function (){var G__14608 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14608) : re_frame.core.subscribe.call(null,G__14608));
})();
var playing_QMARK_ = cljs.core.deref((function (){var G__14609 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14609) : re_frame.core.subscribe.call(null,G__14609));
})());
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (notes,playing_QMARK_,now){
return (function (p1__14607_SHARP_){
return cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__14607_SHARP_);
});})(notes,playing_QMARK_,now))
,cljs.core.deref(notes)));
var started = cljs.core.deref((function (){var G__14610 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14610) : re_frame.core.subscribe.call(null,G__14610));
})());
var elapsed = (mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)) - started);
var beat_length = ((60) / cljs.core.deref((function (){var G__14611 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14611) : re_frame.core.subscribe.call(null,G__14611));
})()));
var current_beat = (elapsed / beat_length);
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
var G__14612_14614 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_off], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14612_14614) : re_frame.core.dispatch.call(null,G__14612_14614));
} else {
if(((started + beat_length) < now)){
var G__14613_14615 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$advance_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14613_14615) : re_frame.core.dispatch.call(null,G__14613_14615));
} else {
}
}
} else {
}

mecca.music.mario_move();

return mecca.music.mario_jump_QMARK_();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__14616_14617 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tick_BANG_], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14616_14617) : re_frame.core.dispatch.call(null,G__14616_14617));

return mecca.music.song_done_QMARK_();
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.do_timer !== 'undefined')){
} else {
mecca.music.do_timer = setInterval(mecca.music.dispatch_timer_event,(150));
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
var c__13082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13082__auto__){
return (function (){
var f__13083__auto__ = (function (){var switch__13017__auto__ = ((function (c__13082__auto__){
return (function (state_14629){
var state_val_14630 = (state_14629[(1)]);
if((state_val_14630 === (1))){
var inst_14618 = mecca.music.load_sound(named_url);
var state_14629__$1 = state_14629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14629__$1,(2),inst_14618);
} else {
if((state_val_14630 === (2))){
var inst_14620 = (state_14629[(7)]);
var inst_14620__$1 = (state_14629[(2)]);
var state_14629__$1 = (function (){var statearr_14631 = state_14629;
(statearr_14631[(7)] = inst_14620__$1);

return statearr_14631;
})();
if(cljs.core.truth_(inst_14620__$1)){
var statearr_14632_14640 = state_14629__$1;
(statearr_14632_14640[(1)] = (3));

} else {
var statearr_14633_14641 = state_14629__$1;
(statearr_14633_14641[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14630 === (3))){
var inst_14620 = (state_14629[(7)]);
var inst_14622 = mecca.music.decode(inst_14620);
var state_14629__$1 = state_14629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14629__$1,(6),inst_14622);
} else {
if((state_val_14630 === (4))){
var state_14629__$1 = state_14629;
var statearr_14634_14642 = state_14629__$1;
(statearr_14634_14642[(2)] = null);

(statearr_14634_14642[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14630 === (5))){
var inst_14627 = (state_14629[(2)]);
var state_14629__$1 = state_14629;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14629__$1,inst_14627);
} else {
if((state_val_14630 === (6))){
var inst_14624 = (state_14629[(2)]);
var state_14629__$1 = state_14629;
var statearr_14635_14643 = state_14629__$1;
(statearr_14635_14643[(2)] = inst_14624);

(statearr_14635_14643[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
});})(c__13082__auto__))
;
return ((function (switch__13017__auto__,c__13082__auto__){
return (function() {
var mecca$music$get_and_decode_$_state_machine__13018__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__13018__auto____0 = (function (){
var statearr_14636 = [null,null,null,null,null,null,null,null];
(statearr_14636[(0)] = mecca$music$get_and_decode_$_state_machine__13018__auto__);

(statearr_14636[(1)] = (1));

return statearr_14636;
});
var mecca$music$get_and_decode_$_state_machine__13018__auto____1 = (function (state_14629){
while(true){
var ret_value__13019__auto__ = (function (){try{while(true){
var result__13020__auto__ = switch__13017__auto__(state_14629);
if(cljs.core.keyword_identical_QMARK_(result__13020__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13020__auto__;
}
break;
}
}catch (e14637){if((e14637 instanceof Object)){
var ex__13021__auto__ = e14637;
var statearr_14638_14644 = state_14629;
(statearr_14638_14644[(5)] = ex__13021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14629);

return cljs.core.cst$kw$recur;
} else {
throw e14637;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13019__auto__,cljs.core.cst$kw$recur)){
var G__14645 = state_14629;
state_14629 = G__14645;
continue;
} else {
return ret_value__13019__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__13018__auto__ = function(state_14629){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__13018__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__13018__auto____1.call(this,state_14629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__13018__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__13018__auto____0;
mecca$music$get_and_decode_$_state_machine__13018__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__13018__auto____1;
return mecca$music$get_and_decode_$_state_machine__13018__auto__;
})()
;})(switch__13017__auto__,c__13082__auto__))
})();
var state__13084__auto__ = (function (){var statearr_14639 = (f__13083__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13083__auto__.cljs$core$IFn$_invoke$arity$0() : f__13083__auto__.call(null));
(statearr_14639[(6)] = c__13082__auto__);

return statearr_14639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13084__auto__);
});})(c__13082__auto__))
);

return c__13082__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__13082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13082__auto__){
return (function (){
var f__13083__auto__ = (function (){var switch__13017__auto__ = ((function (c__13082__auto__){
return (function (state_14674){
var state_val_14675 = (state_14674[(1)]);
if((state_val_14675 === (1))){
var inst_14646 = cljs.core.PersistentHashMap.EMPTY;
var inst_14647 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(27));
var inst_14648 = inst_14646;
var inst_14649 = inst_14647;
var state_14674__$1 = (function (){var statearr_14676 = state_14674;
(statearr_14676[(7)] = inst_14649);

(statearr_14676[(8)] = inst_14648);

return statearr_14676;
})();
var statearr_14677_14689 = state_14674__$1;
(statearr_14677_14689[(2)] = null);

(statearr_14677_14689[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14675 === (2))){
var inst_14649 = (state_14674[(7)]);
var inst_14651 = cljs.core.first(inst_14649);
var inst_14652 = (inst_14651 == null);
var inst_14653 = cljs.core.not(inst_14652);
var state_14674__$1 = state_14674;
if(inst_14653){
var statearr_14678_14690 = state_14674__$1;
(statearr_14678_14690[(1)] = (4));

} else {
var statearr_14679_14691 = state_14674__$1;
(statearr_14679_14691[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14675 === (3))){
var inst_14672 = (state_14674[(2)]);
var state_14674__$1 = state_14674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14674__$1,inst_14672);
} else {
if((state_val_14675 === (4))){
var inst_14649 = (state_14674[(7)]);
var inst_14655 = (state_14674[(9)]);
var inst_14655__$1 = cljs.core.first(inst_14649);
var inst_14656 = [cljs.core.cst$kw$url,cljs.core.cst$kw$sound];
var inst_14657 = ["/mecca/resources/public/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14655__$1),".mp3"].join('');
var inst_14658 = [inst_14657,inst_14655__$1];
var inst_14659 = cljs.core.PersistentHashMap.fromArrays(inst_14656,inst_14658);
var inst_14660 = mecca.music.get_and_decode(inst_14659);
var state_14674__$1 = (function (){var statearr_14680 = state_14674;
(statearr_14680[(9)] = inst_14655__$1);

return statearr_14680;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14674__$1,(7),inst_14660);
} else {
if((state_val_14675 === (5))){
var inst_14648 = (state_14674[(8)]);
var state_14674__$1 = state_14674;
var statearr_14681_14692 = state_14674__$1;
(statearr_14681_14692[(2)] = inst_14648);

(statearr_14681_14692[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14675 === (6))){
var inst_14670 = (state_14674[(2)]);
var state_14674__$1 = state_14674;
var statearr_14682_14693 = state_14674__$1;
(statearr_14682_14693[(2)] = inst_14670);

(statearr_14682_14693[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14675 === (7))){
var inst_14649 = (state_14674[(7)]);
var inst_14648 = (state_14674[(8)]);
var inst_14655 = (state_14674[(9)]);
var inst_14662 = (state_14674[(2)]);
var inst_14663 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_14655], 0));
var inst_14664 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_14662], 0));
var inst_14665 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_14648,inst_14655,inst_14662);
var inst_14666 = cljs.core.rest(inst_14649);
var inst_14648__$1 = inst_14665;
var inst_14649__$1 = inst_14666;
var state_14674__$1 = (function (){var statearr_14683 = state_14674;
(statearr_14683[(7)] = inst_14649__$1);

(statearr_14683[(10)] = inst_14663);

(statearr_14683[(11)] = inst_14664);

(statearr_14683[(8)] = inst_14648__$1);

return statearr_14683;
})();
var statearr_14684_14694 = state_14674__$1;
(statearr_14684_14694[(2)] = null);

(statearr_14684_14694[(1)] = (2));


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
});})(c__13082__auto__))
;
return ((function (switch__13017__auto__,c__13082__auto__){
return (function() {
var mecca$music$load_samples_$_state_machine__13018__auto__ = null;
var mecca$music$load_samples_$_state_machine__13018__auto____0 = (function (){
var statearr_14685 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14685[(0)] = mecca$music$load_samples_$_state_machine__13018__auto__);

(statearr_14685[(1)] = (1));

return statearr_14685;
});
var mecca$music$load_samples_$_state_machine__13018__auto____1 = (function (state_14674){
while(true){
var ret_value__13019__auto__ = (function (){try{while(true){
var result__13020__auto__ = switch__13017__auto__(state_14674);
if(cljs.core.keyword_identical_QMARK_(result__13020__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13020__auto__;
}
break;
}
}catch (e14686){if((e14686 instanceof Object)){
var ex__13021__auto__ = e14686;
var statearr_14687_14695 = state_14674;
(statearr_14687_14695[(5)] = ex__13021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14674);

return cljs.core.cst$kw$recur;
} else {
throw e14686;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13019__auto__,cljs.core.cst$kw$recur)){
var G__14696 = state_14674;
state_14674 = G__14696;
continue;
} else {
return ret_value__13019__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__13018__auto__ = function(state_14674){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__13018__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__13018__auto____1.call(this,state_14674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__13018__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__13018__auto____0;
mecca$music$load_samples_$_state_machine__13018__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__13018__auto____1;
return mecca$music$load_samples_$_state_machine__13018__auto__;
})()
;})(switch__13017__auto__,c__13082__auto__))
})();
var state__13084__auto__ = (function (){var statearr_14688 = (f__13083__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13083__auto__.cljs$core$IFn$_invoke$arity$0() : f__13083__auto__.call(null));
(statearr_14688[(6)] = c__13082__auto__);

return statearr_14688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13084__auto__);
});})(c__13082__auto__))
);

return c__13082__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__13082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13082__auto__){
return (function (){
var f__13083__auto__ = (function (){var switch__13017__auto__ = ((function (c__13082__auto__){
return (function (state_14703){
var state_val_14704 = (state_14703[(1)]);
if((state_val_14704 === (1))){
var inst_14697 = mecca.music.load_samples();
var state_14703__$1 = state_14703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14703__$1,(2),inst_14697);
} else {
if((state_val_14704 === (2))){
var inst_14699 = (state_14703[(2)]);
var inst_14700 = mecca.music.samples = inst_14699;
var inst_14701 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_14703__$1 = (function (){var statearr_14705 = state_14703;
(statearr_14705[(7)] = inst_14700);

return statearr_14705;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14703__$1,inst_14701);
} else {
return null;
}
}
});})(c__13082__auto__))
;
return ((function (switch__13017__auto__,c__13082__auto__){
return (function() {
var mecca$music$state_machine__13018__auto__ = null;
var mecca$music$state_machine__13018__auto____0 = (function (){
var statearr_14706 = [null,null,null,null,null,null,null,null];
(statearr_14706[(0)] = mecca$music$state_machine__13018__auto__);

(statearr_14706[(1)] = (1));

return statearr_14706;
});
var mecca$music$state_machine__13018__auto____1 = (function (state_14703){
while(true){
var ret_value__13019__auto__ = (function (){try{while(true){
var result__13020__auto__ = switch__13017__auto__(state_14703);
if(cljs.core.keyword_identical_QMARK_(result__13020__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13020__auto__;
}
break;
}
}catch (e14707){if((e14707 instanceof Object)){
var ex__13021__auto__ = e14707;
var statearr_14708_14710 = state_14703;
(statearr_14708_14710[(5)] = ex__13021__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14703);

return cljs.core.cst$kw$recur;
} else {
throw e14707;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13019__auto__,cljs.core.cst$kw$recur)){
var G__14711 = state_14703;
state_14703 = G__14711;
continue;
} else {
return ret_value__13019__auto__;
}
break;
}
});
mecca$music$state_machine__13018__auto__ = function(state_14703){
switch(arguments.length){
case 0:
return mecca$music$state_machine__13018__auto____0.call(this);
case 1:
return mecca$music$state_machine__13018__auto____1.call(this,state_14703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__13018__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__13018__auto____0;
mecca$music$state_machine__13018__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__13018__auto____1;
return mecca$music$state_machine__13018__auto__;
})()
;})(switch__13017__auto__,c__13082__auto__))
})();
var state__13084__auto__ = (function (){var statearr_14709 = (f__13083__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13083__auto__.cljs$core$IFn$_invoke$arity$0() : f__13083__auto__.call(null));
(statearr_14709[(6)] = c__13082__auto__);

return statearr_14709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13084__auto__);
});})(c__13082__auto__))
);

return c__13082__auto__;
})();
}
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
var G__14712 = midi_num;
switch (G__14712) {
case (56):
return 0.5297315471796479;

break;
case 56.5:
return 0.5297315471796479;

break;
case (57):
return 0.5612310241546867;

break;
case 57.5:
return 0.5946035575013607;

break;
case (58):
return 0.6299605249474368;

break;
case 58.5:
return 0.6674199270850174;

break;
case (59):
return 0.7071067811865477;

break;
case 59.5:
return 0.7071067811865477;

break;
case (60):
return 0.7491535384383409;

break;
case 60.5:
return 0.7937005259840998;

break;
case (61):
return 0.8408964152537146;

break;
case 61.5:
return 0.8908987181403394;

break;
case (62):
return 0.9438743126816935;

break;
case 62.5:
return (1);

break;
case (63):
return 1.0594630943592953;

break;
case 63.5:
return 1.122462048309373;

break;
case (64):
return 1.122462048309373;

break;
case 64.5:
return 1.1892071150027212;

break;
case (65):
return 1.2599210498948734;

break;
case 65.5:
return 1.3348398541700346;

break;
case (66):
return 1.4142135623730954;

break;
case 66.5:
return 1.498307076876682;

break;
case (67):
return 1.498307076876682;

break;
case 67.5:
return 1.5874010519682;

break;
case (68):
return 1.6817928305074297;

break;
case 68.5:
return 1.7817974362806792;

break;
case (69):
return 1.8877486253633877;

break;
case 69.5:
return (2);

break;
case (70):
return 2.1189261887185906;

break;
case 70.5:
return 2.244924096618746;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14712)].join('')));

}
});
mecca.music.play_sample = (function mecca$music$play_sample(instrument,pitch){
var context = mecca.music.audiocontext;
var audio_buffer = cljs.core.cst$kw$decoded_DASH_buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.samples,instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
var compressor = cljs.core.deref(context).createDynamicsCompressor();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),cljs.core.deref(context).currentTime);

sample_source.connect(compressor);

compressor.connect(cljs.core.deref(context).destination);

sample_source.start();

return sample_source;
});
mecca.music.play_at = (function mecca$music$play_at(instrument,pitch,time){
var context = mecca.music.audiocontext;
var audio_buffer = cljs.core.cst$kw$decoded_DASH_buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.samples,instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),time);

sample_source.connect(cljs.core.deref(context).destination);

sample_source.start(time);

return sample_source;
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = (function (){var G__14714 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14714) : re_frame.core.subscribe.call(null,G__14714));
})();
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var tempo = (function (){var G__14715 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14715) : re_frame.core.subscribe.call(null,G__14715));
})();
var G__14716_14725 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14716_14725) : re_frame.core.dispatch.call(null,G__14716_14725));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (notes,now,tempo){
return (function mecca$music$play_song_BANG__$_iter__14717(s__14718){
return (new cljs.core.LazySeq(null,((function (notes,now,tempo){
return (function (){
var s__14718__$1 = s__14718;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14718__$1);
if(temp__5457__auto__){
var s__14718__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14718__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14718__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14720 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14719 = (0);
while(true){
if((i__14719 < size__4323__auto__)){
var map__14721 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14719);
var map__14721__$1 = ((((!((map__14721 == null)))?(((((map__14721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14721):map__14721);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14721__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14721__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14721__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__14720,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__14726 = (i__14719 + (1));
i__14719 = G__14726;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14720),mecca$music$play_song_BANG__$_iter__14717(cljs.core.chunk_rest(s__14718__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14720),null);
}
} else {
var map__14723 = cljs.core.first(s__14718__$2);
var map__14723__$1 = ((((!((map__14723 == null)))?(((((map__14723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14723):map__14723);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14723__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14723__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14723__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__14717(cljs.core.rest(s__14718__$2)));
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
