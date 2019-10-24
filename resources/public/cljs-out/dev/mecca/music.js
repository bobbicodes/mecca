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
mecca.music.mario_jump = (function mecca$music$mario_jump(){
var beat = (function (){var G__18548 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18548) : re_frame.core.subscribe.call(null,G__18548));
})();
var notes = (function (){var G__18549 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18549) : re_frame.core.subscribe.call(null,G__18549));
})();
var jump = (function (){var G__18550 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18550) : re_frame.core.subscribe.call(null,G__18550));
})();
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.deref((function (){var G__18552 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18552) : re_frame.core.subscribe.call(null,G__18552));
})());
if(cljs.core.truth_(and__3938__auto__)){
return (cljs.core.deref(jump) === (0));
} else {
return and__3938__auto__;
}
})())){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (beat,notes,jump){
return (function (p1__18547_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__18547_SHARP_),(cljs.core.deref(beat) + (1)));
});})(beat,notes,jump))
,cljs.core.deref(notes))))){
var G__18553 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jump_BANG_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18553) : re_frame.core.dispatch.call(null,G__18553));
} else {
return null;
}
} else {
return null;
}
});
mecca.music.mario_move = (function mecca$music$mario_move(){
var notes = (function (){var G__18555 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18555) : re_frame.core.subscribe.call(null,G__18555));
})();
var playing_QMARK_ = cljs.core.deref((function (){var G__18556 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18556) : re_frame.core.subscribe.call(null,G__18556));
})());
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (notes,playing_QMARK_,now){
return (function (p1__18554_SHARP_){
return cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__18554_SHARP_);
});})(notes,playing_QMARK_,now))
,cljs.core.deref(notes)));
var started = (function (){var G__18557 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18557) : re_frame.core.subscribe.call(null,G__18557));
})();
var elapsed = (mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)) - cljs.core.deref(started));
var beat_length = ((60) / cljs.core.deref((function (){var G__18558 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18558) : re_frame.core.subscribe.call(null,G__18558));
})()));
var end_time = (cljs.core.deref(started) + (beat_length * (4)));
var current_beat = (elapsed / beat_length);
var last_drawn_pos = (function (){var G__18559 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18559) : re_frame.core.subscribe.call(null,G__18559));
})();
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
var G__18560_18563 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_off], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18560_18563) : re_frame.core.dispatch.call(null,G__18560_18563));
} else {
if((cljs.core.deref(last_drawn_pos) < current_beat)){
var G__18561_18564 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$move_DASH_mario], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18561_18564) : re_frame.core.dispatch.call(null,G__18561_18564));

var G__18562_18565 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$advance_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18562_18565) : re_frame.core.dispatch.call(null,G__18562_18565));
} else {
}
}
} else {
}

return mecca.music.mario_jump();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__18566_18567 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tick_BANG_], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18566_18567) : re_frame.core.dispatch.call(null,G__18566_18567));

return mecca.music.mario_move();
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.do_timer !== 'undefined')){
} else {
mecca.music.do_timer = setInterval(mecca.music.dispatch_timer_event,(60));
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
return (function (state_18579){
var state_val_18580 = (state_18579[(1)]);
if((state_val_18580 === (1))){
var inst_18568 = mecca.music.load_sound(named_url);
var state_18579__$1 = state_18579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18579__$1,(2),inst_18568);
} else {
if((state_val_18580 === (2))){
var inst_18570 = (state_18579[(7)]);
var inst_18570__$1 = (state_18579[(2)]);
var state_18579__$1 = (function (){var statearr_18581 = state_18579;
(statearr_18581[(7)] = inst_18570__$1);

return statearr_18581;
})();
if(cljs.core.truth_(inst_18570__$1)){
var statearr_18582_18590 = state_18579__$1;
(statearr_18582_18590[(1)] = (3));

} else {
var statearr_18583_18591 = state_18579__$1;
(statearr_18583_18591[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18580 === (3))){
var inst_18570 = (state_18579[(7)]);
var inst_18572 = mecca.music.decode(inst_18570);
var state_18579__$1 = state_18579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18579__$1,(6),inst_18572);
} else {
if((state_val_18580 === (4))){
var state_18579__$1 = state_18579;
var statearr_18584_18592 = state_18579__$1;
(statearr_18584_18592[(2)] = null);

(statearr_18584_18592[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18580 === (5))){
var inst_18577 = (state_18579[(2)]);
var state_18579__$1 = state_18579;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18579__$1,inst_18577);
} else {
if((state_val_18580 === (6))){
var inst_18574 = (state_18579[(2)]);
var state_18579__$1 = state_18579;
var statearr_18585_18593 = state_18579__$1;
(statearr_18585_18593[(2)] = inst_18574);

(statearr_18585_18593[(1)] = (5));


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
var statearr_18586 = [null,null,null,null,null,null,null,null];
(statearr_18586[(0)] = mecca$music$get_and_decode_$_state_machine__14553__auto__);

(statearr_18586[(1)] = (1));

return statearr_18586;
});
var mecca$music$get_and_decode_$_state_machine__14553__auto____1 = (function (state_18579){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_18579);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e18587){if((e18587 instanceof Object)){
var ex__14556__auto__ = e18587;
var statearr_18588_18594 = state_18579;
(statearr_18588_18594[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18579);

return cljs.core.cst$kw$recur;
} else {
throw e18587;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__18595 = state_18579;
state_18579 = G__18595;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__14553__auto__ = function(state_18579){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__14553__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__14553__auto____1.call(this,state_18579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__14553__auto____0;
mecca$music$get_and_decode_$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__14553__auto____1;
return mecca$music$get_and_decode_$_state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto__))
})();
var state__14737__auto__ = (function (){var statearr_18589 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_18589[(6)] = c__14735__auto__);

return statearr_18589;
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
return (function (state_18624){
var state_val_18625 = (state_18624[(1)]);
if((state_val_18625 === (1))){
var inst_18596 = cljs.core.PersistentHashMap.EMPTY;
var inst_18597 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(19));
var inst_18598 = inst_18596;
var inst_18599 = inst_18597;
var state_18624__$1 = (function (){var statearr_18626 = state_18624;
(statearr_18626[(7)] = inst_18598);

(statearr_18626[(8)] = inst_18599);

return statearr_18626;
})();
var statearr_18627_18639 = state_18624__$1;
(statearr_18627_18639[(2)] = null);

(statearr_18627_18639[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18625 === (2))){
var inst_18599 = (state_18624[(8)]);
var inst_18601 = cljs.core.first(inst_18599);
var inst_18602 = (inst_18601 == null);
var inst_18603 = cljs.core.not(inst_18602);
var state_18624__$1 = state_18624;
if(inst_18603){
var statearr_18628_18640 = state_18624__$1;
(statearr_18628_18640[(1)] = (4));

} else {
var statearr_18629_18641 = state_18624__$1;
(statearr_18629_18641[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18625 === (3))){
var inst_18622 = (state_18624[(2)]);
var state_18624__$1 = state_18624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18624__$1,inst_18622);
} else {
if((state_val_18625 === (4))){
var inst_18599 = (state_18624[(8)]);
var inst_18605 = (state_18624[(9)]);
var inst_18605__$1 = cljs.core.first(inst_18599);
var inst_18606 = [cljs.core.cst$kw$url,cljs.core.cst$kw$sound];
var inst_18607 = ["/mecca/resources/public/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18605__$1),".mp3"].join('');
var inst_18608 = [inst_18607,inst_18605__$1];
var inst_18609 = cljs.core.PersistentHashMap.fromArrays(inst_18606,inst_18608);
var inst_18610 = mecca.music.get_and_decode(inst_18609);
var state_18624__$1 = (function (){var statearr_18630 = state_18624;
(statearr_18630[(9)] = inst_18605__$1);

return statearr_18630;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18624__$1,(7),inst_18610);
} else {
if((state_val_18625 === (5))){
var inst_18598 = (state_18624[(7)]);
var state_18624__$1 = state_18624;
var statearr_18631_18642 = state_18624__$1;
(statearr_18631_18642[(2)] = inst_18598);

(statearr_18631_18642[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18625 === (6))){
var inst_18620 = (state_18624[(2)]);
var state_18624__$1 = state_18624;
var statearr_18632_18643 = state_18624__$1;
(statearr_18632_18643[(2)] = inst_18620);

(statearr_18632_18643[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18625 === (7))){
var inst_18598 = (state_18624[(7)]);
var inst_18599 = (state_18624[(8)]);
var inst_18605 = (state_18624[(9)]);
var inst_18612 = (state_18624[(2)]);
var inst_18613 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_18605], 0));
var inst_18614 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_18612], 0));
var inst_18615 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_18598,inst_18605,inst_18612);
var inst_18616 = cljs.core.rest(inst_18599);
var inst_18598__$1 = inst_18615;
var inst_18599__$1 = inst_18616;
var state_18624__$1 = (function (){var statearr_18633 = state_18624;
(statearr_18633[(7)] = inst_18598__$1);

(statearr_18633[(8)] = inst_18599__$1);

(statearr_18633[(10)] = inst_18613);

(statearr_18633[(11)] = inst_18614);

return statearr_18633;
})();
var statearr_18634_18644 = state_18624__$1;
(statearr_18634_18644[(2)] = null);

(statearr_18634_18644[(1)] = (2));


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
var statearr_18635 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18635[(0)] = mecca$music$load_samples_$_state_machine__14553__auto__);

(statearr_18635[(1)] = (1));

return statearr_18635;
});
var mecca$music$load_samples_$_state_machine__14553__auto____1 = (function (state_18624){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_18624);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e18636){if((e18636 instanceof Object)){
var ex__14556__auto__ = e18636;
var statearr_18637_18645 = state_18624;
(statearr_18637_18645[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18624);

return cljs.core.cst$kw$recur;
} else {
throw e18636;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__18646 = state_18624;
state_18624 = G__18646;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__14553__auto__ = function(state_18624){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__14553__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__14553__auto____1.call(this,state_18624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__14553__auto____0;
mecca$music$load_samples_$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__14553__auto____1;
return mecca$music$load_samples_$_state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto__))
})();
var state__14737__auto__ = (function (){var statearr_18638 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_18638[(6)] = c__14735__auto__);

return statearr_18638;
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
return (function (state_18653){
var state_val_18654 = (state_18653[(1)]);
if((state_val_18654 === (1))){
var inst_18647 = mecca.music.load_samples();
var state_18653__$1 = state_18653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18653__$1,(2),inst_18647);
} else {
if((state_val_18654 === (2))){
var inst_18649 = (state_18653[(2)]);
var inst_18650 = mecca.music.samples = inst_18649;
var inst_18651 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_18653__$1 = (function (){var statearr_18655 = state_18653;
(statearr_18655[(7)] = inst_18650);

return statearr_18655;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18653__$1,inst_18651);
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
var statearr_18656 = [null,null,null,null,null,null,null,null];
(statearr_18656[(0)] = mecca$music$state_machine__14553__auto__);

(statearr_18656[(1)] = (1));

return statearr_18656;
});
var mecca$music$state_machine__14553__auto____1 = (function (state_18653){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_18653);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e18657){if((e18657 instanceof Object)){
var ex__14556__auto__ = e18657;
var statearr_18658_18660 = state_18653;
(statearr_18658_18660[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18653);

return cljs.core.cst$kw$recur;
} else {
throw e18657;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__18661 = state_18653;
state_18653 = G__18661;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
mecca$music$state_machine__14553__auto__ = function(state_18653){
switch(arguments.length){
case 0:
return mecca$music$state_machine__14553__auto____0.call(this);
case 1:
return mecca$music$state_machine__14553__auto____1.call(this,state_18653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__14553__auto____0;
mecca$music$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__14553__auto____1;
return mecca$music$state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto__))
})();
var state__14737__auto__ = (function (){var statearr_18659 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_18659[(6)] = c__14735__auto__);

return statearr_18659;
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

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),time);

sample_source.connect(cljs.core.deref(context).destination);

sample_source.start(time);

return sample_source;
});
mecca.music.delay_note = (function mecca$music$delay_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$time,(function (p1__18662_SHARP_){
return (beats + p1__18662_SHARP_);
}));
});
mecca.music.advance_note = (function mecca$music$advance_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$time,(function (p1__18663_SHARP_){
return (p1__18663_SHARP_ - beats);
}));
});
mecca.music.queue_section = (function mecca$music$queue_section(from,to){
var notes = (function (){var G__18666 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18666) : re_frame.core.subscribe.call(null,G__18666));
})();
var started = (function (){var G__18667 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18667) : re_frame.core.subscribe.call(null,G__18667));
})();
var tempo = (function (){var G__18668 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18668) : re_frame.core.subscribe.call(null,G__18668));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (notes,started,tempo){
return (function (p1__18664_SHARP_){
return (((from <= cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__18664_SHARP_))) && ((cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__18664_SHARP_) <= to)));
});})(notes,started,tempo))
,cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (notes,started,tempo,section){
return (function (p1__18665_SHARP_){
return mecca.music.advance_note(from,p1__18665_SHARP_);
});})(notes,started,tempo,section))
,section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (notes,started,tempo,section,advanced){
return (function mecca$music$queue_section_$_iter__18669(s__18670){
return (new cljs.core.LazySeq(null,((function (notes,started,tempo,section,advanced){
return (function (){
var s__18670__$1 = s__18670;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__18670__$1);
if(temp__5457__auto__){
var s__18670__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18670__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__18670__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__18672 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__18671 = (0);
while(true){
if((i__18671 < size__4323__auto__)){
var map__18673 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__18671);
var map__18673__$1 = ((((!((map__18673 == null)))?(((((map__18673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18673):map__18673);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__18672,mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))));

var G__18677 = (i__18671 + (1));
i__18671 = G__18677;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18672),mecca$music$queue_section_$_iter__18669(cljs.core.chunk_rest(s__18670__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18672),null);
}
} else {
var map__18675 = cljs.core.first(s__18670__$2);
var map__18675__$1 = ((((!((map__18675 == null)))?(((((map__18675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18675):map__18675);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18675__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18675__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18675__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$queue_section_$_iter__18669(cljs.core.rest(s__18670__$2)));
}
} else {
return null;
}
break;
}
});})(notes,started,tempo,section,advanced))
,null,null));
});})(notes,started,tempo,section,advanced))
;
return iter__4324__auto__(section);
})());
});
mecca.music.play_section = (function mecca$music$play_section(from,to){
var notes = (function (){var G__18680 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18680) : re_frame.core.subscribe.call(null,G__18680));
})();
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var tempo = (function (){var G__18681 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18681) : re_frame.core.subscribe.call(null,G__18681));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (notes,now,tempo){
return (function (p1__18678_SHARP_){
return (((from <= cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__18678_SHARP_))) && ((cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__18678_SHARP_) <= to)));
});})(notes,now,tempo))
,cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (notes,now,tempo,section){
return (function (p1__18679_SHARP_){
return mecca.music.advance_note(from,p1__18679_SHARP_);
});})(notes,now,tempo,section))
,section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (notes,now,tempo,section,advanced){
return (function mecca$music$play_section_$_iter__18682(s__18683){
return (new cljs.core.LazySeq(null,((function (notes,now,tempo,section,advanced){
return (function (){
var s__18683__$1 = s__18683;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__18683__$1);
if(temp__5457__auto__){
var s__18683__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18683__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__18683__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__18685 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__18684 = (0);
while(true){
if((i__18684 < size__4323__auto__)){
var map__18686 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__18684);
var map__18686__$1 = ((((!((map__18686 == null)))?(((((map__18686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18686):map__18686);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18686__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18686__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18686__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__18685,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__18690 = (i__18684 + (1));
i__18684 = G__18690;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18685),mecca$music$play_section_$_iter__18682(cljs.core.chunk_rest(s__18683__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18685),null);
}
} else {
var map__18688 = cljs.core.first(s__18683__$2);
var map__18688__$1 = ((((!((map__18688 == null)))?(((((map__18688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18688):map__18688);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18688__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18688__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18688__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_section_$_iter__18682(cljs.core.rest(s__18683__$2)));
}
} else {
return null;
}
break;
}
});})(notes,now,tempo,section,advanced))
,null,null));
});})(notes,now,tempo,section,advanced))
;
return iter__4324__auto__(advanced);
})());
});
mecca.music.play_note = (function mecca$music$play_note(){
var editor_start = (function (){var G__18691 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18691) : re_frame.core.subscribe.call(null,G__18691));
})();
var play_pos = (((cljs.core.deref(editor_start) < (4)))?cljs.core.deref(editor_start):((4) + cljs.core.deref((function (){var G__18692 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18692) : re_frame.core.subscribe.call(null,G__18692));
})())));
return mecca.music.play_section((play_pos - (1)),(play_pos - 0.5));
});
mecca.music.play_notes = (function mecca$music$play_notes(n){
var editor_start = (function (){var G__18693 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18693) : re_frame.core.subscribe.call(null,G__18693));
})();
var tempo = (function (){var G__18694 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18694) : re_frame.core.subscribe.call(null,G__18694));
})();
var beat_length = ((60) / cljs.core.deref((function (){var G__18695 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18695) : re_frame.core.subscribe.call(null,G__18695));
})()));
var play_pos = (((cljs.core.deref(editor_start) < (4)))?cljs.core.deref(editor_start):((4) + cljs.core.deref((function (){var G__18696 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18696) : re_frame.core.subscribe.call(null,G__18696));
})())));
return mecca.music.play_section((play_pos - (1)),((play_pos - (1)) + (n * 0.5)));
});
mecca.music.play_from_here = (function mecca$music$play_from_here(){
var notes = (function (){var G__18698 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18698) : re_frame.core.subscribe.call(null,G__18698));
})();
var editor_start = (function (){var G__18699 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18699) : re_frame.core.subscribe.call(null,G__18699));
})();
var play_pos = cljs.core.deref(editor_start);
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (notes,editor_start,play_pos){
return (function (p1__18697_SHARP_){
return cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__18697_SHARP_);
});})(notes,editor_start,play_pos))
,cljs.core.deref(notes)));
return mecca.music.play_section((play_pos - (1)),((16) + play_pos));
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = (function (){var G__18700 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18700) : re_frame.core.subscribe.call(null,G__18700));
})();
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var tempo = (function (){var G__18701 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18701) : re_frame.core.subscribe.call(null,G__18701));
})();
var G__18702_18711 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18702_18711) : re_frame.core.dispatch.call(null,G__18702_18711));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (notes,now,tempo){
return (function mecca$music$play_song_BANG__$_iter__18703(s__18704){
return (new cljs.core.LazySeq(null,((function (notes,now,tempo){
return (function (){
var s__18704__$1 = s__18704;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__18704__$1);
if(temp__5457__auto__){
var s__18704__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18704__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__18704__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__18706 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__18705 = (0);
while(true){
if((i__18705 < size__4323__auto__)){
var map__18707 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__18705);
var map__18707__$1 = ((((!((map__18707 == null)))?(((((map__18707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18707):map__18707);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18707__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18707__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18707__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__18706,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__18712 = (i__18705 + (1));
i__18705 = G__18712;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18706),mecca$music$play_song_BANG__$_iter__18703(cljs.core.chunk_rest(s__18704__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18706),null);
}
} else {
var map__18709 = cljs.core.first(s__18704__$2);
var map__18709__$1 = ((((!((map__18709 == null)))?(((((map__18709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18709):map__18709);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18709__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18709__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18709__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__18703(cljs.core.rest(s__18704__$2)));
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
