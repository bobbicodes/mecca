goog.provide('mecca.music');
mecca.music.mario_jump = (function mecca$music$mario_jump(){
var beat = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
var notes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var jump = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null));
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null)));
if(cljs.core.truth_(and__4221__auto__)){
return (cljs.core.deref(jump) === (0));
} else {
return and__4221__auto__;
}
})())){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__66505_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__66505_SHARP_),(cljs.core.deref(beat) + (1)));
}),cljs.core.deref(notes))))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump!","jump!",-1168155200)], null));
} else {
return null;
}
} else {
return null;
}
});
mecca.music.mario_move = (function mecca$music$mario_move(){
var notes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var playing_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null)));
var now = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66506_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__66506_SHARP_);
}),cljs.core.deref(notes)));
var started = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null));
var elapsed = (now - cljs.core.deref(started));
var beat_length = ((60) / cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null))));
var end_time = (cljs.core.deref(started) + (beat_length * (4)));
var current_beat = (elapsed / beat_length);
var last_drawn_pos = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-off","play-off",2116693509)], null));
} else {
if((cljs.core.deref(last_drawn_pos) < current_beat)){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-mario","move-mario",-317739908)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-position","advance-position",-23796893)], null));
} else {
}
}
} else {
}

return mecca.music.mario_jump();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick!","tick!",68058958)], null));

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
cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).decodeAudioData(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(named_url),(function (decoded_buffer){
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
var source = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).createBufferSource();
(source.buffer = buffer);

return source;
});
mecca.music.get_and_decode = (function mecca$music$get_and_decode(named_url){
var c__47337__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47338__auto__ = (function (){var switch__47246__auto__ = (function (state_66518){
var state_val_66519 = (state_66518[(1)]);
if((state_val_66519 === (1))){
var inst_66507 = mecca.music.load_sound(named_url);
var state_66518__$1 = state_66518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66518__$1,(2),inst_66507);
} else {
if((state_val_66519 === (2))){
var inst_66509 = (state_66518[(7)]);
var inst_66509__$1 = (state_66518[(2)]);
var state_66518__$1 = (function (){var statearr_66520 = state_66518;
(statearr_66520[(7)] = inst_66509__$1);

return statearr_66520;
})();
if(cljs.core.truth_(inst_66509__$1)){
var statearr_66521_66639 = state_66518__$1;
(statearr_66521_66639[(1)] = (3));

} else {
var statearr_66522_66640 = state_66518__$1;
(statearr_66522_66640[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66519 === (3))){
var inst_66509 = (state_66518[(7)]);
var inst_66511 = mecca.music.decode(inst_66509);
var state_66518__$1 = state_66518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66518__$1,(6),inst_66511);
} else {
if((state_val_66519 === (4))){
var state_66518__$1 = state_66518;
var statearr_66523_66641 = state_66518__$1;
(statearr_66523_66641[(2)] = null);

(statearr_66523_66641[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66519 === (5))){
var inst_66516 = (state_66518[(2)]);
var state_66518__$1 = state_66518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66518__$1,inst_66516);
} else {
if((state_val_66519 === (6))){
var inst_66513 = (state_66518[(2)]);
var state_66518__$1 = state_66518;
var statearr_66524_66642 = state_66518__$1;
(statearr_66524_66642[(2)] = inst_66513);

(statearr_66524_66642[(1)] = (5));


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
var mecca$music$get_and_decode_$_state_machine__47247__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__47247__auto____0 = (function (){
var statearr_66525 = [null,null,null,null,null,null,null,null];
(statearr_66525[(0)] = mecca$music$get_and_decode_$_state_machine__47247__auto__);

(statearr_66525[(1)] = (1));

return statearr_66525;
});
var mecca$music$get_and_decode_$_state_machine__47247__auto____1 = (function (state_66518){
while(true){
var ret_value__47248__auto__ = (function (){try{while(true){
var result__47249__auto__ = switch__47246__auto__(state_66518);
if(cljs.core.keyword_identical_QMARK_(result__47249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47249__auto__;
}
break;
}
}catch (e66526){var ex__47250__auto__ = e66526;
var statearr_66527_66643 = state_66518;
(statearr_66527_66643[(2)] = ex__47250__auto__);


if(cljs.core.seq((state_66518[(4)]))){
var statearr_66528_66644 = state_66518;
(statearr_66528_66644[(1)] = cljs.core.first((state_66518[(4)])));

} else {
throw ex__47250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66645 = state_66518;
state_66518 = G__66645;
continue;
} else {
return ret_value__47248__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__47247__auto__ = function(state_66518){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__47247__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__47247__auto____1.call(this,state_66518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__47247__auto____0;
mecca$music$get_and_decode_$_state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__47247__auto____1;
return mecca$music$get_and_decode_$_state_machine__47247__auto__;
})()
})();
var state__47339__auto__ = (function (){var statearr_66529 = f__47338__auto__();
(statearr_66529[(6)] = c__47337__auto__);

return statearr_66529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47339__auto__);
}));

return c__47337__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__47337__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47338__auto__ = (function (){var switch__47246__auto__ = (function (state_66558){
var state_val_66559 = (state_66558[(1)]);
if((state_val_66559 === (1))){
var inst_66530 = cljs.core.PersistentHashMap.EMPTY;
var inst_66531 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(19));
var inst_66532 = inst_66530;
var inst_66533 = inst_66531;
var state_66558__$1 = (function (){var statearr_66560 = state_66558;
(statearr_66560[(7)] = inst_66533);

(statearr_66560[(8)] = inst_66532);

return statearr_66560;
})();
var statearr_66561_66646 = state_66558__$1;
(statearr_66561_66646[(2)] = null);

(statearr_66561_66646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66559 === (2))){
var inst_66533 = (state_66558[(7)]);
var inst_66535 = cljs.core.first(inst_66533);
var inst_66536 = (inst_66535 == null);
var inst_66537 = cljs.core.not(inst_66536);
var state_66558__$1 = state_66558;
if(inst_66537){
var statearr_66562_66647 = state_66558__$1;
(statearr_66562_66647[(1)] = (4));

} else {
var statearr_66563_66648 = state_66558__$1;
(statearr_66563_66648[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66559 === (3))){
var inst_66556 = (state_66558[(2)]);
var state_66558__$1 = state_66558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66558__$1,inst_66556);
} else {
if((state_val_66559 === (4))){
var inst_66533 = (state_66558[(7)]);
var inst_66539 = (state_66558[(9)]);
var inst_66539__$1 = cljs.core.first(inst_66533);
var inst_66540 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"sound","sound",-2127407070)];
var inst_66541 = ["/mecca/public/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_66539__$1),".mp3"].join('');
var inst_66542 = [inst_66541,inst_66539__$1];
var inst_66543 = cljs.core.PersistentHashMap.fromArrays(inst_66540,inst_66542);
var inst_66544 = mecca.music.get_and_decode(inst_66543);
var state_66558__$1 = (function (){var statearr_66564 = state_66558;
(statearr_66564[(9)] = inst_66539__$1);

return statearr_66564;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66558__$1,(7),inst_66544);
} else {
if((state_val_66559 === (5))){
var inst_66532 = (state_66558[(8)]);
var state_66558__$1 = state_66558;
var statearr_66565_66649 = state_66558__$1;
(statearr_66565_66649[(2)] = inst_66532);

(statearr_66565_66649[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66559 === (6))){
var inst_66554 = (state_66558[(2)]);
var state_66558__$1 = state_66558;
var statearr_66566_66650 = state_66558__$1;
(statearr_66566_66650[(2)] = inst_66554);

(statearr_66566_66650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66559 === (7))){
var inst_66533 = (state_66558[(7)]);
var inst_66539 = (state_66558[(9)]);
var inst_66532 = (state_66558[(8)]);
var inst_66546 = (state_66558[(2)]);
var inst_66547 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_66539], 0));
var inst_66548 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_66546], 0));
var inst_66549 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_66532,inst_66539,inst_66546);
var inst_66550 = cljs.core.rest(inst_66533);
var inst_66532__$1 = inst_66549;
var inst_66533__$1 = inst_66550;
var state_66558__$1 = (function (){var statearr_66567 = state_66558;
(statearr_66567[(7)] = inst_66533__$1);

(statearr_66567[(10)] = inst_66547);

(statearr_66567[(8)] = inst_66532__$1);

(statearr_66567[(11)] = inst_66548);

return statearr_66567;
})();
var statearr_66570_66651 = state_66558__$1;
(statearr_66570_66651[(2)] = null);

(statearr_66570_66651[(1)] = (2));


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
var mecca$music$load_samples_$_state_machine__47247__auto__ = null;
var mecca$music$load_samples_$_state_machine__47247__auto____0 = (function (){
var statearr_66571 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66571[(0)] = mecca$music$load_samples_$_state_machine__47247__auto__);

(statearr_66571[(1)] = (1));

return statearr_66571;
});
var mecca$music$load_samples_$_state_machine__47247__auto____1 = (function (state_66558){
while(true){
var ret_value__47248__auto__ = (function (){try{while(true){
var result__47249__auto__ = switch__47246__auto__(state_66558);
if(cljs.core.keyword_identical_QMARK_(result__47249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47249__auto__;
}
break;
}
}catch (e66572){var ex__47250__auto__ = e66572;
var statearr_66573_66652 = state_66558;
(statearr_66573_66652[(2)] = ex__47250__auto__);


if(cljs.core.seq((state_66558[(4)]))){
var statearr_66575_66653 = state_66558;
(statearr_66575_66653[(1)] = cljs.core.first((state_66558[(4)])));

} else {
throw ex__47250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66654 = state_66558;
state_66558 = G__66654;
continue;
} else {
return ret_value__47248__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__47247__auto__ = function(state_66558){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__47247__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__47247__auto____1.call(this,state_66558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__47247__auto____0;
mecca$music$load_samples_$_state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__47247__auto____1;
return mecca$music$load_samples_$_state_machine__47247__auto__;
})()
})();
var state__47339__auto__ = (function (){var statearr_66578 = f__47338__auto__();
(statearr_66578[(6)] = c__47337__auto__);

return statearr_66578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47339__auto__);
}));

return c__47337__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__47337__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47338__auto__ = (function (){var switch__47246__auto__ = (function (state_66589){
var state_val_66590 = (state_66589[(1)]);
if((state_val_66590 === (1))){
var inst_66579 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66580 = mecca.music.load_samples();
var state_66589__$1 = (function (){var statearr_66591 = state_66589;
(statearr_66591[(7)] = inst_66579);

return statearr_66591;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66589__$1,(2),inst_66580);
} else {
if((state_val_66590 === (2))){
var inst_66579 = (state_66589[(7)]);
var inst_66582 = (state_66589[(2)]);
var inst_66584 = [new cljs.core.Keyword(null,"load-samples","load-samples",-40877701),inst_66582];
var inst_66585 = (new cljs.core.PersistentVector(null,2,(5),inst_66579,inst_66584,null));
var inst_66586 = re_frame.core.dispatch(inst_66585);
var inst_66587 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_66589__$1 = (function (){var statearr_66592 = state_66589;
(statearr_66592[(8)] = inst_66586);

return statearr_66592;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_66589__$1,inst_66587);
} else {
return null;
}
}
});
return (function() {
var mecca$music$state_machine__47247__auto__ = null;
var mecca$music$state_machine__47247__auto____0 = (function (){
var statearr_66593 = [null,null,null,null,null,null,null,null,null];
(statearr_66593[(0)] = mecca$music$state_machine__47247__auto__);

(statearr_66593[(1)] = (1));

return statearr_66593;
});
var mecca$music$state_machine__47247__auto____1 = (function (state_66589){
while(true){
var ret_value__47248__auto__ = (function (){try{while(true){
var result__47249__auto__ = switch__47246__auto__(state_66589);
if(cljs.core.keyword_identical_QMARK_(result__47249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47249__auto__;
}
break;
}
}catch (e66594){var ex__47250__auto__ = e66594;
var statearr_66595_66655 = state_66589;
(statearr_66595_66655[(2)] = ex__47250__auto__);


if(cljs.core.seq((state_66589[(4)]))){
var statearr_66596_66656 = state_66589;
(statearr_66596_66656[(1)] = cljs.core.first((state_66589[(4)])));

} else {
throw ex__47250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66657 = state_66589;
state_66589 = G__66657;
continue;
} else {
return ret_value__47248__auto__;
}
break;
}
});
mecca$music$state_machine__47247__auto__ = function(state_66589){
switch(arguments.length){
case 0:
return mecca$music$state_machine__47247__auto____0.call(this);
case 1:
return mecca$music$state_machine__47247__auto____1.call(this,state_66589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__47247__auto____0;
mecca$music$state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__47247__auto____1;
return mecca$music$state_machine__47247__auto__;
})()
})();
var state__47339__auto__ = (function (){var statearr_66597 = f__47338__auto__();
(statearr_66597[(6)] = c__47337__auto__);

return statearr_66597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47339__auto__);
}));

return c__47337__auto__;
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
var context = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null)));
var samples = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null));
var instrument = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844)], null));
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(samples),cljs.core.deref(instrument)));
var sample_source = context.createBufferSource();
(sample_source.buffer = audio_buffer);

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),context.currentTime);

sample_source.connect(context.destination);

sample_source.start();

return sample_source;
});
mecca.music.play_sample = (function mecca$music$play_sample(instrument,pitch){
var context = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null));
var samples = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null));
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
var context = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null));
var samples = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null));
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(samples),instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
(sample_source.buffer = audio_buffer);

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),time);

sample_source.connect(cljs.core.deref(context).destination);

sample_source.start(time);

return sample_source;
});
mecca.music.delay_note = (function mecca$music$delay_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__66606_SHARP_){
return (beats + p1__66606_SHARP_);
}));
});
mecca.music.advance_note = (function mecca$music$advance_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__66607_SHARP_){
return (p1__66607_SHARP_ - beats);
}));
});
mecca.music.queue_section = (function mecca$music$queue_section(from,to){
var notes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var started = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null));
var tempo = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__66608_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__66608_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__66608_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66609_SHARP_){
return mecca.music.advance_note(from,p1__66609_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function mecca$music$queue_section_$_iter__66610(s__66611){
return (new cljs.core.LazySeq(null,(function (){
var s__66611__$1 = s__66611;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__66611__$1);
if(temp__5753__auto__){
var s__66611__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66611__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__66611__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__66613 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__66612 = (0);
while(true){
if((i__66612 < size__4621__auto__)){
var map__66616 = cljs.core._nth(c__4620__auto__,i__66612);
var map__66616__$1 = cljs.core.__destructure_map(map__66616);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66616__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66616__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66616__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__66613,mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))));

var G__66658 = (i__66612 + (1));
i__66612 = G__66658;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66613),mecca$music$queue_section_$_iter__66610(cljs.core.chunk_rest(s__66611__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66613),null);
}
} else {
var map__66619 = cljs.core.first(s__66611__$2);
var map__66619__$1 = cljs.core.__destructure_map(map__66619);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66619__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66619__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66619__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$queue_section_$_iter__66610(cljs.core.rest(s__66611__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(section);
})());
});
mecca.music.play_section = (function mecca$music$play_section(from,to){
var notes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var now = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).currentTime;
var tempo = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__66623_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__66623_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__66623_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66624_SHARP_){
return mecca.music.advance_note(from,p1__66624_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function mecca$music$play_section_$_iter__66626(s__66627){
return (new cljs.core.LazySeq(null,(function (){
var s__66627__$1 = s__66627;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__66627__$1);
if(temp__5753__auto__){
var s__66627__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66627__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__66627__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__66629 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__66628 = (0);
while(true){
if((i__66628 < size__4621__auto__)){
var map__66630 = cljs.core._nth(c__4620__auto__,i__66628);
var map__66630__$1 = cljs.core.__destructure_map(map__66630);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66630__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66630__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66630__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__66629,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__66659 = (i__66628 + (1));
i__66628 = G__66659;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66629),mecca$music$play_section_$_iter__66626(cljs.core.chunk_rest(s__66627__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66629),null);
}
} else {
var map__66631 = cljs.core.first(s__66627__$2);
var map__66631__$1 = cljs.core.__destructure_map(map__66631);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66631__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66631__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66631__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_section_$_iter__66626(cljs.core.rest(s__66627__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(advanced);
})());
});
mecca.music.play_notes = (function mecca$music$play_notes(n){
var editor_start = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null));
var tempo = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
var beat_length = ((60) / cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null))));
var play_pos = (((cljs.core.deref(editor_start) < (4)))?cljs.core.deref(editor_start):((4) + cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null)))));
return mecca.music.play_section((play_pos - (1)),((play_pos - (1)) + (n * 0.5)));
});
mecca.music.play_from_here = (function mecca$music$play_from_here(){
var notes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var editor_start = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null));
var play_pos = cljs.core.deref(editor_start);
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66632_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__66632_SHARP_);
}),cljs.core.deref(notes)));
return mecca.music.play_section((play_pos - (1)),((16) + play_pos));
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var now = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).currentTime;
var tempo = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860)], null));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function mecca$music$play_song_BANG__$_iter__66633(s__66634){
return (new cljs.core.LazySeq(null,(function (){
var s__66634__$1 = s__66634;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__66634__$1);
if(temp__5753__auto__){
var s__66634__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66634__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__66634__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__66636 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__66635 = (0);
while(true){
if((i__66635 < size__4621__auto__)){
var map__66637 = cljs.core._nth(c__4620__auto__,i__66635);
var map__66637__$1 = cljs.core.__destructure_map(map__66637);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66637__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66637__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66637__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__66636,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__66660 = (i__66635 + (1));
i__66635 = G__66660;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66636),mecca$music$play_song_BANG__$_iter__66633(cljs.core.chunk_rest(s__66634__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66636),null);
}
} else {
var map__66638 = cljs.core.first(s__66634__$2);
var map__66638__$1 = cljs.core.__destructure_map(map__66638);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66638__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66638__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66638__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__66633(cljs.core.rest(s__66634__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.deref(notes));
})());
});
mecca.music.get_bytes_BANG_ = (function mecca$music$get_bytes_BANG_(analyser,freq_data){
analyser.getByteFrequencyData(freq_data);

return freq_data;
});

//# sourceMappingURL=mecca.music.js.map
