goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('mecca.songs.popcorn');
goog.require('mecca.songs.oohchild');
goog.require('mecca.songs.stmp');
goog.require('re_frame.core');
mecca.music.mario_jump = (function mecca$music$mario_jump(){
var beat = (function (){var G__32463 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32463) : re_frame.core.subscribe.call(null,G__32463));
})();
var notes = (function (){var G__32464 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32464) : re_frame.core.subscribe.call(null,G__32464));
})();
var jump = (function (){var G__32465 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32465) : re_frame.core.subscribe.call(null,G__32465));
})();
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.deref((function (){var G__32468 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32468) : re_frame.core.subscribe.call(null,G__32468));
})());
if(cljs.core.truth_(and__4174__auto__)){
return (cljs.core.deref(jump) === (0));
} else {
return and__4174__auto__;
}
})())){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32462_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__32462_SHARP_),(cljs.core.deref(beat) + (1)));
}),cljs.core.deref(notes))))){
var G__32469 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump!","jump!",-1168155200)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__32469) : re_frame.core.dispatch.call(null,G__32469));
} else {
return null;
}
} else {
return null;
}
});
mecca.music.mario_move = (function mecca$music$mario_move(){
var notes = (function (){var G__32471 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32471) : re_frame.core.subscribe.call(null,G__32471));
})();
var playing_QMARK_ = cljs.core.deref((function (){var G__32472 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32472) : re_frame.core.subscribe.call(null,G__32472));
})());
var now = cljs.core.deref((function (){var G__32473 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32473) : re_frame.core.subscribe.call(null,G__32473));
})()).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32470_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__32470_SHARP_);
}),cljs.core.deref(notes)));
var started = (function (){var G__32474 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32474) : re_frame.core.subscribe.call(null,G__32474));
})();
var elapsed = (now - cljs.core.deref(started));
var beat_length = ((60) / cljs.core.deref((function (){var G__32475 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32475) : re_frame.core.subscribe.call(null,G__32475));
})()));
var end_time = (cljs.core.deref(started) + (beat_length * (4)));
var current_beat = (elapsed / beat_length);
var last_drawn_pos = (function (){var G__32476 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32476) : re_frame.core.subscribe.call(null,G__32476));
})();
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
var G__32477_32687 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-off","play-off",2116693509)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__32477_32687) : re_frame.core.dispatch.call(null,G__32477_32687));
} else {
if((cljs.core.deref(last_drawn_pos) < current_beat)){
var G__32478_32688 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-mario","move-mario",-317739908)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__32478_32688) : re_frame.core.dispatch.call(null,G__32478_32688));

var G__32479_32689 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-position","advance-position",-23796893)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__32479_32689) : re_frame.core.dispatch.call(null,G__32479_32689));
} else {
}
}
} else {
}

return mecca.music.mario_jump();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__32480_32690 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick!","tick!",68058958)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__32480_32690) : re_frame.core.dispatch.call(null,G__32480_32690));

return mecca.music.mario_move();
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.do_timer !== 'undefined')){
} else {
mecca.music.do_timer = setInterval(mecca.music.dispatch_timer_event,(60));
}
mecca.music.load_sound = (function mecca$music$load_sound(named_url){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var req = (new XMLHttpRequest());
(req.responseType = "arraybuffer");

(req.onload = (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(req.status,(200))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(named_url,new cljs.core.Keyword(null,"buffer","buffer",617295198),req.response));

return cljs.core.async.close_BANG_(out);
} else {
return cljs.core.async.close_BANG_(out);
}
}));

req.open("GET",new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(named_url),true);

req.send();

return out;
});
mecca.music.decode = (function mecca$music$decode(named_url){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(named_url))){
cljs.core.deref((function (){var G__32481 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32481) : re_frame.core.subscribe.call(null,G__32481));
})()).decodeAudioData(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(named_url),(function (decoded_buffer){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(named_url,new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700),decoded_buffer));

return cljs.core.async.close_BANG_(out);
}),(function (){
console.error("Error loading file ",cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([named_url], 0)));

return cljs.core.async.close_BANG_(out);
}));
} else {
cljs.core.async.close_BANG_(out);
}

return out;
});
mecca.music.buffer_source = (function mecca$music$buffer_source(buffer){
var source = cljs.core.deref((function (){var G__32482 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32482) : re_frame.core.subscribe.call(null,G__32482));
})()).createBufferSource();
(source.buffer = buffer);

return source;
});
mecca.music.get_and_decode = (function mecca$music$get_and_decode(named_url){
var c__28952__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28953__auto__ = (function (){var switch__28929__auto__ = (function (state_32494){
var state_val_32495 = (state_32494[(1)]);
if((state_val_32495 === (1))){
var inst_32483 = mecca.music.load_sound(named_url);
var state_32494__$1 = state_32494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32494__$1,(2),inst_32483);
} else {
if((state_val_32495 === (2))){
var inst_32485 = (state_32494[(7)]);
var inst_32485__$1 = (state_32494[(2)]);
var state_32494__$1 = (function (){var statearr_32496 = state_32494;
(statearr_32496[(7)] = inst_32485__$1);

return statearr_32496;
})();
if(cljs.core.truth_(inst_32485__$1)){
var statearr_32497_32691 = state_32494__$1;
(statearr_32497_32691[(1)] = (3));

} else {
var statearr_32498_32692 = state_32494__$1;
(statearr_32498_32692[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32495 === (3))){
var inst_32485 = (state_32494[(7)]);
var inst_32487 = mecca.music.decode(inst_32485);
var state_32494__$1 = state_32494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32494__$1,(6),inst_32487);
} else {
if((state_val_32495 === (4))){
var state_32494__$1 = state_32494;
var statearr_32499_32714 = state_32494__$1;
(statearr_32499_32714[(2)] = null);

(statearr_32499_32714[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32495 === (5))){
var inst_32492 = (state_32494[(2)]);
var state_32494__$1 = state_32494;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32494__$1,inst_32492);
} else {
if((state_val_32495 === (6))){
var inst_32489 = (state_32494[(2)]);
var state_32494__$1 = state_32494;
var statearr_32500_32715 = state_32494__$1;
(statearr_32500_32715[(2)] = inst_32489);

(statearr_32500_32715[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var mecca$music$get_and_decode_$_state_machine__28930__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__28930__auto____0 = (function (){
var statearr_32501 = [null,null,null,null,null,null,null,null];
(statearr_32501[(0)] = mecca$music$get_and_decode_$_state_machine__28930__auto__);

(statearr_32501[(1)] = (1));

return statearr_32501;
});
var mecca$music$get_and_decode_$_state_machine__28930__auto____1 = (function (state_32494){
while(true){
var ret_value__28931__auto__ = (function (){try{while(true){
var result__28932__auto__ = switch__28929__auto__(state_32494);
if(cljs.core.keyword_identical_QMARK_(result__28932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28932__auto__;
}
break;
}
}catch (e32502){if((e32502 instanceof Object)){
var ex__28933__auto__ = e32502;
var statearr_32503_32725 = state_32494;
(statearr_32503_32725[(5)] = ex__28933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32502;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32728 = state_32494;
state_32494 = G__32728;
continue;
} else {
return ret_value__28931__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__28930__auto__ = function(state_32494){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__28930__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__28930__auto____1.call(this,state_32494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__28930__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__28930__auto____0;
mecca$music$get_and_decode_$_state_machine__28930__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__28930__auto____1;
return mecca$music$get_and_decode_$_state_machine__28930__auto__;
})()
})();
var state__28954__auto__ = (function (){var statearr_32504 = (f__28953__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28953__auto__.cljs$core$IFn$_invoke$arity$0() : f__28953__auto__.call(null));
(statearr_32504[(6)] = c__28952__auto__);

return statearr_32504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28954__auto__);
}));

return c__28952__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__28952__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28953__auto__ = (function (){var switch__28929__auto__ = (function (state_32533){
var state_val_32534 = (state_32533[(1)]);
if((state_val_32534 === (1))){
var inst_32505 = cljs.core.PersistentHashMap.EMPTY;
var inst_32506 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(19));
var inst_32507 = inst_32505;
var inst_32508 = inst_32506;
var state_32533__$1 = (function (){var statearr_32535 = state_32533;
(statearr_32535[(7)] = inst_32508);

(statearr_32535[(8)] = inst_32507);

return statearr_32535;
})();
var statearr_32536_32729 = state_32533__$1;
(statearr_32536_32729[(2)] = null);

(statearr_32536_32729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32534 === (2))){
var inst_32508 = (state_32533[(7)]);
var inst_32510 = cljs.core.first(inst_32508);
var inst_32511 = (inst_32510 == null);
var inst_32512 = cljs.core.not(inst_32511);
var state_32533__$1 = state_32533;
if(inst_32512){
var statearr_32537_32730 = state_32533__$1;
(statearr_32537_32730[(1)] = (4));

} else {
var statearr_32538_32731 = state_32533__$1;
(statearr_32538_32731[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32534 === (3))){
var inst_32531 = (state_32533[(2)]);
var state_32533__$1 = state_32533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32533__$1,inst_32531);
} else {
if((state_val_32534 === (4))){
var inst_32514 = (state_32533[(9)]);
var inst_32508 = (state_32533[(7)]);
var inst_32514__$1 = cljs.core.first(inst_32508);
var inst_32515 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"sound","sound",-2127407070)];
var inst_32516 = ["/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32514__$1),".mp3"].join('');
var inst_32517 = [inst_32516,inst_32514__$1];
var inst_32518 = cljs.core.PersistentHashMap.fromArrays(inst_32515,inst_32517);
var inst_32519 = mecca.music.get_and_decode(inst_32518);
var state_32533__$1 = (function (){var statearr_32539 = state_32533;
(statearr_32539[(9)] = inst_32514__$1);

return statearr_32539;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32533__$1,(7),inst_32519);
} else {
if((state_val_32534 === (5))){
var inst_32507 = (state_32533[(8)]);
var state_32533__$1 = state_32533;
var statearr_32540_32743 = state_32533__$1;
(statearr_32540_32743[(2)] = inst_32507);

(statearr_32540_32743[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32534 === (6))){
var inst_32529 = (state_32533[(2)]);
var state_32533__$1 = state_32533;
var statearr_32541_32744 = state_32533__$1;
(statearr_32541_32744[(2)] = inst_32529);

(statearr_32541_32744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32534 === (7))){
var inst_32514 = (state_32533[(9)]);
var inst_32508 = (state_32533[(7)]);
var inst_32507 = (state_32533[(8)]);
var inst_32521 = (state_32533[(2)]);
var inst_32522 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_32514], 0));
var inst_32523 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_32521], 0));
var inst_32524 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_32507,inst_32514,inst_32521);
var inst_32525 = cljs.core.rest(inst_32508);
var inst_32507__$1 = inst_32524;
var inst_32508__$1 = inst_32525;
var state_32533__$1 = (function (){var statearr_32542 = state_32533;
(statearr_32542[(10)] = inst_32522);

(statearr_32542[(11)] = inst_32523);

(statearr_32542[(7)] = inst_32508__$1);

(statearr_32542[(8)] = inst_32507__$1);

return statearr_32542;
})();
var statearr_32543_32745 = state_32533__$1;
(statearr_32543_32745[(2)] = null);

(statearr_32543_32745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var mecca$music$load_samples_$_state_machine__28930__auto__ = null;
var mecca$music$load_samples_$_state_machine__28930__auto____0 = (function (){
var statearr_32544 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32544[(0)] = mecca$music$load_samples_$_state_machine__28930__auto__);

(statearr_32544[(1)] = (1));

return statearr_32544;
});
var mecca$music$load_samples_$_state_machine__28930__auto____1 = (function (state_32533){
while(true){
var ret_value__28931__auto__ = (function (){try{while(true){
var result__28932__auto__ = switch__28929__auto__(state_32533);
if(cljs.core.keyword_identical_QMARK_(result__28932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28932__auto__;
}
break;
}
}catch (e32545){if((e32545 instanceof Object)){
var ex__28933__auto__ = e32545;
var statearr_32546_32770 = state_32533;
(statearr_32546_32770[(5)] = ex__28933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32545;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32771 = state_32533;
state_32533 = G__32771;
continue;
} else {
return ret_value__28931__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__28930__auto__ = function(state_32533){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__28930__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__28930__auto____1.call(this,state_32533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__28930__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__28930__auto____0;
mecca$music$load_samples_$_state_machine__28930__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__28930__auto____1;
return mecca$music$load_samples_$_state_machine__28930__auto__;
})()
})();
var state__28954__auto__ = (function (){var statearr_32547 = (f__28953__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28953__auto__.cljs$core$IFn$_invoke$arity$0() : f__28953__auto__.call(null));
(statearr_32547[(6)] = c__28952__auto__);

return statearr_32547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28954__auto__);
}));

return c__28952__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__28952__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28953__auto__ = (function (){var switch__28929__auto__ = (function (state_32557){
var state_val_32558 = (state_32557[(1)]);
if((state_val_32558 === (1))){
var inst_32548 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32549 = mecca.music.load_samples();
var state_32557__$1 = (function (){var statearr_32559 = state_32557;
(statearr_32559[(7)] = inst_32548);

return statearr_32559;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32557__$1,(2),inst_32549);
} else {
if((state_val_32558 === (2))){
var inst_32548 = (state_32557[(7)]);
var inst_32551 = (state_32557[(2)]);
var inst_32552 = [new cljs.core.Keyword(null,"load-samples","load-samples",-40877701),inst_32551];
var inst_32553 = (new cljs.core.PersistentVector(null,2,(5),inst_32548,inst_32552,null));
var inst_32554 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_32553) : re_frame.core.dispatch.call(null,inst_32553));
var inst_32555 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_32557__$1 = (function (){var statearr_32560 = state_32557;
(statearr_32560[(8)] = inst_32554);

return statearr_32560;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32557__$1,inst_32555);
} else {
return null;
}
}
});
return (function() {
var mecca$music$state_machine__28930__auto__ = null;
var mecca$music$state_machine__28930__auto____0 = (function (){
var statearr_32561 = [null,null,null,null,null,null,null,null,null];
(statearr_32561[(0)] = mecca$music$state_machine__28930__auto__);

(statearr_32561[(1)] = (1));

return statearr_32561;
});
var mecca$music$state_machine__28930__auto____1 = (function (state_32557){
while(true){
var ret_value__28931__auto__ = (function (){try{while(true){
var result__28932__auto__ = switch__28929__auto__(state_32557);
if(cljs.core.keyword_identical_QMARK_(result__28932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28932__auto__;
}
break;
}
}catch (e32562){if((e32562 instanceof Object)){
var ex__28933__auto__ = e32562;
var statearr_32563_32795 = state_32557;
(statearr_32563_32795[(5)] = ex__28933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32562;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32796 = state_32557;
state_32557 = G__32796;
continue;
} else {
return ret_value__28931__auto__;
}
break;
}
});
mecca$music$state_machine__28930__auto__ = function(state_32557){
switch(arguments.length){
case 0:
return mecca$music$state_machine__28930__auto____0.call(this);
case 1:
return mecca$music$state_machine__28930__auto____1.call(this,state_32557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__28930__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__28930__auto____0;
mecca$music$state_machine__28930__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__28930__auto____1;
return mecca$music$state_machine__28930__auto__;
})()
})();
var state__28954__auto__ = (function (){var statearr_32564 = (f__28953__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28953__auto__.cljs$core$IFn$_invoke$arity$0() : f__28953__auto__.call(null));
(statearr_32564[(6)] = c__28952__auto__);

return statearr_32564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28954__auto__);
}));

return c__28952__auto__;
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
var context = cljs.core.deref((function (){var G__32565 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32565) : re_frame.core.subscribe.call(null,G__32565));
})());
var samples = (function (){var G__32566 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32566) : re_frame.core.subscribe.call(null,G__32566));
})();
var instrument = (function (){var G__32567 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32567) : re_frame.core.subscribe.call(null,G__32567));
})();
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(samples),cljs.core.deref(instrument)));
var sample_source = context.createBufferSource();
(sample_source.buffer = audio_buffer);

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),context.currentTime);

sample_source.connect(context.destination);

sample_source.start();

return sample_source;
});
mecca.music.play_sample = (function mecca$music$play_sample(instrument,pitch){
var context = (function (){var G__32568 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32568) : re_frame.core.subscribe.call(null,G__32568));
})();
var samples = (function (){var G__32569 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32569) : re_frame.core.subscribe.call(null,G__32569));
})();
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(samples),instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
var compressor = cljs.core.deref(context).createDynamicsCompressor();
var analyser = cljs.core.deref(context).createAnalyser();
(sample_source.buffer = audio_buffer);

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),cljs.core.deref(context).currentTime);

sample_source.connect(analyser);

sample_source.connect(cljs.core.deref(context).destination);

sample_source.start();

return sample_source;
});
mecca.music.play_at = (function mecca$music$play_at(instrument,pitch,time){
var context = (function (){var G__32570 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32570) : re_frame.core.subscribe.call(null,G__32570));
})();
var samples = (function (){var G__32571 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32571) : re_frame.core.subscribe.call(null,G__32571));
})();
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(samples),instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
(sample_source.buffer = audio_buffer);

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),time);

sample_source.connect(cljs.core.deref(context).destination);

sample_source.start(time);

return sample_source;
});
mecca.music.delay_note = (function mecca$music$delay_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__32572_SHARP_){
return (beats + p1__32572_SHARP_);
}));
});
mecca.music.advance_note = (function mecca$music$advance_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__32573_SHARP_){
return (p1__32573_SHARP_ - beats);
}));
});
mecca.music.queue_section = (function mecca$music$queue_section(from,to){
var notes = (function (){var G__32576 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32576) : re_frame.core.subscribe.call(null,G__32576));
})();
var started = (function (){var G__32577 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32577) : re_frame.core.subscribe.call(null,G__32577));
})();
var tempo = (function (){var G__32578 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32578) : re_frame.core.subscribe.call(null,G__32578));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32574_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__32574_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__32574_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32575_SHARP_){
return mecca.music.advance_note(from,p1__32575_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$queue_section_$_iter__32579(s__32580){
return (new cljs.core.LazySeq(null,(function (){
var s__32580__$1 = s__32580;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__32580__$1);
if(temp__5735__auto__){
var s__32580__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32580__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__32580__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__32582 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__32581 = (0);
while(true){
if((i__32581 < size__4581__auto__)){
var map__32583 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__32581);
var map__32583__$1 = (((((!((map__32583 == null))))?(((((map__32583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32583):map__32583);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32583__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32583__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32583__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__32582,mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))));

var G__32849 = (i__32581 + (1));
i__32581 = G__32849;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32582),mecca$music$queue_section_$_iter__32579(cljs.core.chunk_rest(s__32580__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32582),null);
}
} else {
var map__32585 = cljs.core.first(s__32580__$2);
var map__32585__$1 = (((((!((map__32585 == null))))?(((((map__32585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32585):map__32585);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32585__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32585__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32585__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$queue_section_$_iter__32579(cljs.core.rest(s__32580__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(section);
})());
});
mecca.music.play_section = (function mecca$music$play_section(from,to){
var notes = (function (){var G__32589 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32589) : re_frame.core.subscribe.call(null,G__32589));
})();
var now = cljs.core.deref((function (){var G__32590 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32590) : re_frame.core.subscribe.call(null,G__32590));
})()).currentTime;
var tempo = (function (){var G__32591 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32591) : re_frame.core.subscribe.call(null,G__32591));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32587_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__32587_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__32587_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32588_SHARP_){
return mecca.music.advance_note(from,p1__32588_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$play_section_$_iter__32592(s__32593){
return (new cljs.core.LazySeq(null,(function (){
var s__32593__$1 = s__32593;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__32593__$1);
if(temp__5735__auto__){
var s__32593__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32593__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__32593__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__32595 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__32594 = (0);
while(true){
if((i__32594 < size__4581__auto__)){
var map__32596 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__32594);
var map__32596__$1 = (((((!((map__32596 == null))))?(((((map__32596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32596):map__32596);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32596__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32596__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32596__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__32595,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__32887 = (i__32594 + (1));
i__32594 = G__32887;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32595),mecca$music$play_section_$_iter__32592(cljs.core.chunk_rest(s__32593__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32595),null);
}
} else {
var map__32598 = cljs.core.first(s__32593__$2);
var map__32598__$1 = (((((!((map__32598 == null))))?(((((map__32598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32598):map__32598);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32598__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32598__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32598__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_section_$_iter__32592(cljs.core.rest(s__32593__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(advanced);
})());
});
mecca.music.play_notes = (function mecca$music$play_notes(n){
var editor_start = (function (){var G__32600 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32600) : re_frame.core.subscribe.call(null,G__32600));
})();
var tempo = (function (){var G__32601 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32601) : re_frame.core.subscribe.call(null,G__32601));
})();
var beat_length = ((60) / cljs.core.deref((function (){var G__32602 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32602) : re_frame.core.subscribe.call(null,G__32602));
})()));
var play_pos = (((cljs.core.deref(editor_start) < (4)))?cljs.core.deref(editor_start):((4) + cljs.core.deref((function (){var G__32603 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32603) : re_frame.core.subscribe.call(null,G__32603));
})())));
return mecca.music.play_section((play_pos - (1)),((play_pos - (1)) + (n * 0.5)));
});
mecca.music.play_from_here = (function mecca$music$play_from_here(){
var notes = (function (){var G__32605 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32605) : re_frame.core.subscribe.call(null,G__32605));
})();
var editor_start = (function (){var G__32606 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32606) : re_frame.core.subscribe.call(null,G__32606));
})();
var play_pos = cljs.core.deref(editor_start);
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32604_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__32604_SHARP_);
}),cljs.core.deref(notes)));
return mecca.music.play_section((play_pos - (1)),((16) + play_pos));
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = (function (){var G__32607 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32607) : re_frame.core.subscribe.call(null,G__32607));
})();
var now = cljs.core.deref((function (){var G__32608 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32608) : re_frame.core.subscribe.call(null,G__32608));
})()).currentTime;
var tempo = (function (){var G__32609 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32609) : re_frame.core.subscribe.call(null,G__32609));
})();
var G__32610_32909 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__32610_32909) : re_frame.core.dispatch.call(null,G__32610_32909));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$play_song_BANG__$_iter__32611(s__32612){
return (new cljs.core.LazySeq(null,(function (){
var s__32612__$1 = s__32612;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__32612__$1);
if(temp__5735__auto__){
var s__32612__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32612__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__32612__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__32614 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__32613 = (0);
while(true){
if((i__32613 < size__4581__auto__)){
var map__32615 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__32613);
var map__32615__$1 = (((((!((map__32615 == null))))?(((((map__32615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32615):map__32615);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32615__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32615__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32615__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__32614,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__32913 = (i__32613 + (1));
i__32613 = G__32913;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32614),mecca$music$play_song_BANG__$_iter__32611(cljs.core.chunk_rest(s__32612__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32614),null);
}
} else {
var map__32617 = cljs.core.first(s__32612__$2);
var map__32617__$1 = (((((!((map__32617 == null))))?(((((map__32617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32617):map__32617);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32617__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32617__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32617__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__32611(cljs.core.rest(s__32612__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.deref(notes));
})());
});
mecca.music.get_bytes_BANG_ = (function mecca$music$get_bytes_BANG_(analyser,freq_data){
analyser.getByteFrequencyData(freq_data);

return freq_data;
});
cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32619_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),new cljs.core.Keyword(null,"instrument","instrument",-960698844).cljs$core$IFn$_invoke$arity$1(p1__32619_SHARP_));
}),cljs.core.deref((function (){var G__32620 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__32620) : re_frame.core.subscribe.call(null,G__32620));
})()));
mecca.music.loop_notes = (function mecca$music$loop_notes(notes){
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32621_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__32621_SHARP_);
}),notes));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(notes,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32622_SHARP_){
return mecca.music.delay_note((0.5 + length),p1__32622_SHARP_);
}),notes));
});
cljs.core.deref((function (){var G__32623 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-notes","set-notes",-1718182261),mecca.songs.stmp.stmp], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__32623) : re_frame.core.dispatch.call(null,G__32623));
})());

//# sourceMappingURL=mecca.music.js.map
