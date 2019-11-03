// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('re_frame.core');
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
var now = cljs.core.deref((function (){var G__18557 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$audio_DASH_context], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18557) : re_frame.core.subscribe.call(null,G__18557));
})()).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (notes,playing_QMARK_,now){
return (function (p1__18554_SHARP_){
return cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__18554_SHARP_);
});})(notes,playing_QMARK_,now))
,cljs.core.deref(notes)));
var started = (function (){var G__18558 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18558) : re_frame.core.subscribe.call(null,G__18558));
})();
var elapsed = (now - cljs.core.deref(started));
var beat_length = ((60) / cljs.core.deref((function (){var G__18559 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18559) : re_frame.core.subscribe.call(null,G__18559));
})()));
var end_time = (cljs.core.deref(started) + (beat_length * (4)));
var current_beat = (elapsed / beat_length);
var last_drawn_pos = (function (){var G__18560 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18560) : re_frame.core.subscribe.call(null,G__18560));
})();
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
var G__18561_18564 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_off], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18561_18564) : re_frame.core.dispatch.call(null,G__18561_18564));
} else {
if((cljs.core.deref(last_drawn_pos) < current_beat)){
var G__18562_18565 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$move_DASH_mario], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18562_18565) : re_frame.core.dispatch.call(null,G__18562_18565));

var G__18563_18566 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$advance_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18563_18566) : re_frame.core.dispatch.call(null,G__18563_18566));
} else {
}
}
} else {
}

return mecca.music.mario_jump();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__18567_18568 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tick_BANG_], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18567_18568) : re_frame.core.dispatch.call(null,G__18567_18568));

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
cljs.core.deref((function (){var G__18569 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$audio_DASH_context], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18569) : re_frame.core.subscribe.call(null,G__18569));
})()).decodeAudioData(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(named_url),((function (out){
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
var source = cljs.core.deref((function (){var G__18570 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$audio_DASH_context], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18570) : re_frame.core.subscribe.call(null,G__18570));
})()).createBufferSource();
source.buffer = buffer;

return source;
});
mecca.music.get_and_decode = (function mecca$music$get_and_decode(named_url){
var c__14735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto__){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto__){
return (function (state_18582){
var state_val_18583 = (state_18582[(1)]);
if((state_val_18583 === (1))){
var inst_18571 = mecca.music.load_sound(named_url);
var state_18582__$1 = state_18582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18582__$1,(2),inst_18571);
} else {
if((state_val_18583 === (2))){
var inst_18573 = (state_18582[(7)]);
var inst_18573__$1 = (state_18582[(2)]);
var state_18582__$1 = (function (){var statearr_18584 = state_18582;
(statearr_18584[(7)] = inst_18573__$1);

return statearr_18584;
})();
if(cljs.core.truth_(inst_18573__$1)){
var statearr_18585_18593 = state_18582__$1;
(statearr_18585_18593[(1)] = (3));

} else {
var statearr_18586_18594 = state_18582__$1;
(statearr_18586_18594[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18583 === (3))){
var inst_18573 = (state_18582[(7)]);
var inst_18575 = mecca.music.decode(inst_18573);
var state_18582__$1 = state_18582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18582__$1,(6),inst_18575);
} else {
if((state_val_18583 === (4))){
var state_18582__$1 = state_18582;
var statearr_18587_18595 = state_18582__$1;
(statearr_18587_18595[(2)] = null);

(statearr_18587_18595[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18583 === (5))){
var inst_18580 = (state_18582[(2)]);
var state_18582__$1 = state_18582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18582__$1,inst_18580);
} else {
if((state_val_18583 === (6))){
var inst_18577 = (state_18582[(2)]);
var state_18582__$1 = state_18582;
var statearr_18588_18596 = state_18582__$1;
(statearr_18588_18596[(2)] = inst_18577);

(statearr_18588_18596[(1)] = (5));


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
var statearr_18589 = [null,null,null,null,null,null,null,null];
(statearr_18589[(0)] = mecca$music$get_and_decode_$_state_machine__14553__auto__);

(statearr_18589[(1)] = (1));

return statearr_18589;
});
var mecca$music$get_and_decode_$_state_machine__14553__auto____1 = (function (state_18582){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_18582);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e18590){if((e18590 instanceof Object)){
var ex__14556__auto__ = e18590;
var statearr_18591_18597 = state_18582;
(statearr_18591_18597[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18582);

return cljs.core.cst$kw$recur;
} else {
throw e18590;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__18598 = state_18582;
state_18582 = G__18598;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__14553__auto__ = function(state_18582){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__14553__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__14553__auto____1.call(this,state_18582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__14553__auto____0;
mecca$music$get_and_decode_$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__14553__auto____1;
return mecca$music$get_and_decode_$_state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto__))
})();
var state__14737__auto__ = (function (){var statearr_18592 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_18592[(6)] = c__14735__auto__);

return statearr_18592;
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
return (function (state_18627){
var state_val_18628 = (state_18627[(1)]);
if((state_val_18628 === (1))){
var inst_18599 = cljs.core.PersistentHashMap.EMPTY;
var inst_18600 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(19));
var inst_18601 = inst_18599;
var inst_18602 = inst_18600;
var state_18627__$1 = (function (){var statearr_18629 = state_18627;
(statearr_18629[(7)] = inst_18602);

(statearr_18629[(8)] = inst_18601);

return statearr_18629;
})();
var statearr_18630_18642 = state_18627__$1;
(statearr_18630_18642[(2)] = null);

(statearr_18630_18642[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18628 === (2))){
var inst_18602 = (state_18627[(7)]);
var inst_18604 = cljs.core.first(inst_18602);
var inst_18605 = (inst_18604 == null);
var inst_18606 = cljs.core.not(inst_18605);
var state_18627__$1 = state_18627;
if(inst_18606){
var statearr_18631_18643 = state_18627__$1;
(statearr_18631_18643[(1)] = (4));

} else {
var statearr_18632_18644 = state_18627__$1;
(statearr_18632_18644[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18628 === (3))){
var inst_18625 = (state_18627[(2)]);
var state_18627__$1 = state_18627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18627__$1,inst_18625);
} else {
if((state_val_18628 === (4))){
var inst_18608 = (state_18627[(9)]);
var inst_18602 = (state_18627[(7)]);
var inst_18608__$1 = cljs.core.first(inst_18602);
var inst_18609 = [cljs.core.cst$kw$url,cljs.core.cst$kw$sound];
var inst_18610 = ["/mecca/resources/public/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18608__$1),".mp3"].join('');
var inst_18611 = [inst_18610,inst_18608__$1];
var inst_18612 = cljs.core.PersistentHashMap.fromArrays(inst_18609,inst_18611);
var inst_18613 = mecca.music.get_and_decode(inst_18612);
var state_18627__$1 = (function (){var statearr_18633 = state_18627;
(statearr_18633[(9)] = inst_18608__$1);

return statearr_18633;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18627__$1,(7),inst_18613);
} else {
if((state_val_18628 === (5))){
var inst_18601 = (state_18627[(8)]);
var state_18627__$1 = state_18627;
var statearr_18634_18645 = state_18627__$1;
(statearr_18634_18645[(2)] = inst_18601);

(statearr_18634_18645[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18628 === (6))){
var inst_18623 = (state_18627[(2)]);
var state_18627__$1 = state_18627;
var statearr_18635_18646 = state_18627__$1;
(statearr_18635_18646[(2)] = inst_18623);

(statearr_18635_18646[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18628 === (7))){
var inst_18608 = (state_18627[(9)]);
var inst_18602 = (state_18627[(7)]);
var inst_18601 = (state_18627[(8)]);
var inst_18615 = (state_18627[(2)]);
var inst_18616 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_18608], 0));
var inst_18617 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_18615], 0));
var inst_18618 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_18601,inst_18608,inst_18615);
var inst_18619 = cljs.core.rest(inst_18602);
var inst_18601__$1 = inst_18618;
var inst_18602__$1 = inst_18619;
var state_18627__$1 = (function (){var statearr_18636 = state_18627;
(statearr_18636[(7)] = inst_18602__$1);

(statearr_18636[(8)] = inst_18601__$1);

(statearr_18636[(10)] = inst_18616);

(statearr_18636[(11)] = inst_18617);

return statearr_18636;
})();
var statearr_18637_18647 = state_18627__$1;
(statearr_18637_18647[(2)] = null);

(statearr_18637_18647[(1)] = (2));


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
var statearr_18638 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18638[(0)] = mecca$music$load_samples_$_state_machine__14553__auto__);

(statearr_18638[(1)] = (1));

return statearr_18638;
});
var mecca$music$load_samples_$_state_machine__14553__auto____1 = (function (state_18627){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_18627);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e18639){if((e18639 instanceof Object)){
var ex__14556__auto__ = e18639;
var statearr_18640_18648 = state_18627;
(statearr_18640_18648[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18627);

return cljs.core.cst$kw$recur;
} else {
throw e18639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__18649 = state_18627;
state_18627 = G__18649;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__14553__auto__ = function(state_18627){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__14553__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__14553__auto____1.call(this,state_18627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__14553__auto____0;
mecca$music$load_samples_$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__14553__auto____1;
return mecca$music$load_samples_$_state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto__))
})();
var state__14737__auto__ = (function (){var statearr_18641 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_18641[(6)] = c__14735__auto__);

return statearr_18641;
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
return (function (state_18659){
var state_val_18660 = (state_18659[(1)]);
if((state_val_18660 === (1))){
var inst_18650 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18651 = mecca.music.load_samples();
var state_18659__$1 = (function (){var statearr_18661 = state_18659;
(statearr_18661[(7)] = inst_18650);

return statearr_18661;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18659__$1,(2),inst_18651);
} else {
if((state_val_18660 === (2))){
var inst_18650 = (state_18659[(7)]);
var inst_18653 = (state_18659[(2)]);
var inst_18654 = [cljs.core.cst$kw$load_DASH_samples,inst_18653];
var inst_18655 = (new cljs.core.PersistentVector(null,2,(5),inst_18650,inst_18654,null));
var inst_18656 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_18655) : re_frame.core.dispatch.call(null,inst_18655));
var inst_18657 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_18659__$1 = (function (){var statearr_18662 = state_18659;
(statearr_18662[(8)] = inst_18656);

return statearr_18662;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18659__$1,inst_18657);
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
var statearr_18663 = [null,null,null,null,null,null,null,null,null];
(statearr_18663[(0)] = mecca$music$state_machine__14553__auto__);

(statearr_18663[(1)] = (1));

return statearr_18663;
});
var mecca$music$state_machine__14553__auto____1 = (function (state_18659){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_18659);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e18664){if((e18664 instanceof Object)){
var ex__14556__auto__ = e18664;
var statearr_18665_18667 = state_18659;
(statearr_18665_18667[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18659);

return cljs.core.cst$kw$recur;
} else {
throw e18664;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__18668 = state_18659;
state_18659 = G__18668;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
mecca$music$state_machine__14553__auto__ = function(state_18659){
switch(arguments.length){
case 0:
return mecca$music$state_machine__14553__auto____0.call(this);
case 1:
return mecca$music$state_machine__14553__auto____1.call(this,state_18659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__14553__auto____0;
mecca$music$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__14553__auto____1;
return mecca$music$state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto__))
})();
var state__14737__auto__ = (function (){var statearr_18666 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_18666[(6)] = c__14735__auto__);

return statearr_18666;
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
mecca.music.play_note = (function mecca$music$play_note(pitch){
var context = cljs.core.deref((function (){var G__18669 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$audio_DASH_context], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18669) : re_frame.core.subscribe.call(null,G__18669));
})());
var samples = (function (){var G__18670 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$samples], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18670) : re_frame.core.subscribe.call(null,G__18670));
})();
var instrument = (function (){var G__18671 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instrument], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18671) : re_frame.core.subscribe.call(null,G__18671));
})();
var audio_buffer = cljs.core.cst$kw$decoded_DASH_buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(samples),cljs.core.deref(instrument)));
var sample_source = context.createBufferSource();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),context.currentTime);

sample_source.connect(context.destination);

sample_source.start();

return sample_source;
});
mecca.music.play_sample = (function mecca$music$play_sample(instrument,pitch){
var context = (function (){var G__18672 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$audio_DASH_context], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18672) : re_frame.core.subscribe.call(null,G__18672));
})();
var samples = (function (){var G__18673 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$samples], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18673) : re_frame.core.subscribe.call(null,G__18673));
})();
var audio_buffer = cljs.core.cst$kw$decoded_DASH_buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(samples),instrument));
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
var context = (function (){var G__18674 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$audio_DASH_context], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18674) : re_frame.core.subscribe.call(null,G__18674));
})();
var samples = (function (){var G__18675 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$samples], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18675) : re_frame.core.subscribe.call(null,G__18675));
})();
var audio_buffer = cljs.core.cst$kw$decoded_DASH_buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(samples),instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),time);

sample_source.connect(cljs.core.deref(context).destination);

sample_source.start(time);

return sample_source;
});
mecca.music.delay_note = (function mecca$music$delay_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$time,(function (p1__18676_SHARP_){
return (beats + p1__18676_SHARP_);
}));
});
mecca.music.advance_note = (function mecca$music$advance_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$time,(function (p1__18677_SHARP_){
return (p1__18677_SHARP_ - beats);
}));
});
mecca.music.queue_section = (function mecca$music$queue_section(from,to){
var notes = (function (){var G__18680 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18680) : re_frame.core.subscribe.call(null,G__18680));
})();
var started = (function (){var G__18681 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18681) : re_frame.core.subscribe.call(null,G__18681));
})();
var tempo = (function (){var G__18682 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18682) : re_frame.core.subscribe.call(null,G__18682));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (notes,started,tempo){
return (function (p1__18678_SHARP_){
return (((from <= cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__18678_SHARP_))) && ((cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__18678_SHARP_) <= to)));
});})(notes,started,tempo))
,cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (notes,started,tempo,section){
return (function (p1__18679_SHARP_){
return mecca.music.advance_note(from,p1__18679_SHARP_);
});})(notes,started,tempo,section))
,section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (notes,started,tempo,section,advanced){
return (function mecca$music$queue_section_$_iter__18683(s__18684){
return (new cljs.core.LazySeq(null,((function (notes,started,tempo,section,advanced){
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
cljs.core.chunk_append(b__18686,mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))));

var G__18691 = (i__18685 + (1));
i__18685 = G__18691;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18686),mecca$music$queue_section_$_iter__18683(cljs.core.chunk_rest(s__18684__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18686),null);
}
} else {
var map__18689 = cljs.core.first(s__18684__$2);
var map__18689__$1 = ((((!((map__18689 == null)))?(((((map__18689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18689):map__18689);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18689__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18689__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18689__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$queue_section_$_iter__18683(cljs.core.rest(s__18684__$2)));
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
var notes = (function (){var G__18694 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18694) : re_frame.core.subscribe.call(null,G__18694));
})();
var now = cljs.core.deref((function (){var G__18695 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$audio_DASH_context], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18695) : re_frame.core.subscribe.call(null,G__18695));
})()).currentTime;
var tempo = (function (){var G__18696 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18696) : re_frame.core.subscribe.call(null,G__18696));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (notes,now,tempo){
return (function (p1__18692_SHARP_){
return (((from <= cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__18692_SHARP_))) && ((cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__18692_SHARP_) <= to)));
});})(notes,now,tempo))
,cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (notes,now,tempo,section){
return (function (p1__18693_SHARP_){
return mecca.music.advance_note(from,p1__18693_SHARP_);
});})(notes,now,tempo,section))
,section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (notes,now,tempo,section,advanced){
return (function mecca$music$play_section_$_iter__18697(s__18698){
return (new cljs.core.LazySeq(null,((function (notes,now,tempo,section,advanced){
return (function (){
var s__18698__$1 = s__18698;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__18698__$1);
if(temp__5457__auto__){
var s__18698__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18698__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__18698__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__18700 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__18699 = (0);
while(true){
if((i__18699 < size__4323__auto__)){
var map__18701 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__18699);
var map__18701__$1 = ((((!((map__18701 == null)))?(((((map__18701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18701):map__18701);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18701__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18701__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18701__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__18700,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__18705 = (i__18699 + (1));
i__18699 = G__18705;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18700),mecca$music$play_section_$_iter__18697(cljs.core.chunk_rest(s__18698__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18700),null);
}
} else {
var map__18703 = cljs.core.first(s__18698__$2);
var map__18703__$1 = ((((!((map__18703 == null)))?(((((map__18703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18703):map__18703);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18703__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18703__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18703__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_section_$_iter__18697(cljs.core.rest(s__18698__$2)));
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
mecca.music.play_notes = (function mecca$music$play_notes(n){
var editor_start = (function (){var G__18706 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18706) : re_frame.core.subscribe.call(null,G__18706));
})();
var tempo = (function (){var G__18707 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18707) : re_frame.core.subscribe.call(null,G__18707));
})();
var beat_length = ((60) / cljs.core.deref((function (){var G__18708 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18708) : re_frame.core.subscribe.call(null,G__18708));
})()));
var play_pos = (((cljs.core.deref(editor_start) < (4)))?cljs.core.deref(editor_start):((4) + cljs.core.deref((function (){var G__18709 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18709) : re_frame.core.subscribe.call(null,G__18709));
})())));
return mecca.music.play_section((play_pos - (1)),((play_pos - (1)) + (n * 0.5)));
});
mecca.music.play_from_here = (function mecca$music$play_from_here(){
var notes = (function (){var G__18711 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18711) : re_frame.core.subscribe.call(null,G__18711));
})();
var editor_start = (function (){var G__18712 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18712) : re_frame.core.subscribe.call(null,G__18712));
})();
var play_pos = cljs.core.deref(editor_start);
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (notes,editor_start,play_pos){
return (function (p1__18710_SHARP_){
return cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__18710_SHARP_);
});})(notes,editor_start,play_pos))
,cljs.core.deref(notes)));
return mecca.music.play_section((play_pos - (1)),((16) + play_pos));
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = (function (){var G__18713 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18713) : re_frame.core.subscribe.call(null,G__18713));
})();
var now = cljs.core.deref((function (){var G__18714 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$audio_DASH_context], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18714) : re_frame.core.subscribe.call(null,G__18714));
})()).currentTime;
var tempo = (function (){var G__18715 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18715) : re_frame.core.subscribe.call(null,G__18715));
})();
var G__18716_18725 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18716_18725) : re_frame.core.dispatch.call(null,G__18716_18725));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (notes,now,tempo){
return (function mecca$music$play_song_BANG__$_iter__18717(s__18718){
return (new cljs.core.LazySeq(null,((function (notes,now,tempo){
return (function (){
var s__18718__$1 = s__18718;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__18718__$1);
if(temp__5457__auto__){
var s__18718__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18718__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__18718__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__18720 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__18719 = (0);
while(true){
if((i__18719 < size__4323__auto__)){
var map__18721 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__18719);
var map__18721__$1 = ((((!((map__18721 == null)))?(((((map__18721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18721):map__18721);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18721__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18721__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18721__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__18720,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__18726 = (i__18719 + (1));
i__18719 = G__18726;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18720),mecca$music$play_song_BANG__$_iter__18717(cljs.core.chunk_rest(s__18718__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18720),null);
}
} else {
var map__18723 = cljs.core.first(s__18718__$2);
var map__18723__$1 = ((((!((map__18723 == null)))?(((((map__18723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18723):map__18723);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18723__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18723__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18723__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__18717(cljs.core.rest(s__18718__$2)));
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
