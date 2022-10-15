goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.core');
mecca.music.mario_jump = (function mecca$music$mario_jump(){
var beat = (function (){var G__71477 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71477) : re_frame.core.subscribe.call(null,G__71477));
})();
var notes = (function (){var G__71478 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71478) : re_frame.core.subscribe.call(null,G__71478));
})();
var jump = (function (){var G__71479 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71479) : re_frame.core.subscribe.call(null,G__71479));
})();
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.deref((function (){var G__71482 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71482) : re_frame.core.subscribe.call(null,G__71482));
})());
if(cljs.core.truth_(and__4174__auto__)){
return (cljs.core.deref(jump) === (0));
} else {
return and__4174__auto__;
}
})())){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__71476_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__71476_SHARP_),(cljs.core.deref(beat) + (1)));
}),cljs.core.deref(notes))))){
var G__71483 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump!","jump!",-1168155200)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__71483) : re_frame.core.dispatch.call(null,G__71483));
} else {
return null;
}
} else {
return null;
}
});
mecca.music.mario_move = (function mecca$music$mario_move(){
var notes = (function (){var G__71485 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71485) : re_frame.core.subscribe.call(null,G__71485));
})();
var playing_QMARK_ = cljs.core.deref((function (){var G__71486 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71486) : re_frame.core.subscribe.call(null,G__71486));
})());
var now = cljs.core.deref((function (){var G__71487 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71487) : re_frame.core.subscribe.call(null,G__71487));
})()).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__71484_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__71484_SHARP_);
}),cljs.core.deref(notes)));
var started = (function (){var G__71488 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71488) : re_frame.core.subscribe.call(null,G__71488));
})();
var elapsed = (now - cljs.core.deref(started));
var beat_length = ((60) / cljs.core.deref((function (){var G__71489 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71489) : re_frame.core.subscribe.call(null,G__71489));
})()));
var end_time = (cljs.core.deref(started) + (beat_length * (4)));
var current_beat = (elapsed / beat_length);
var last_drawn_pos = (function (){var G__71490 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71490) : re_frame.core.subscribe.call(null,G__71490));
})();
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
var G__71491_71651 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-off","play-off",2116693509)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__71491_71651) : re_frame.core.dispatch.call(null,G__71491_71651));
} else {
if((cljs.core.deref(last_drawn_pos) < current_beat)){
var G__71492_71652 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-mario","move-mario",-317739908)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__71492_71652) : re_frame.core.dispatch.call(null,G__71492_71652));

var G__71493_71653 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-position","advance-position",-23796893)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__71493_71653) : re_frame.core.dispatch.call(null,G__71493_71653));
} else {
}
}
} else {
}

return mecca.music.mario_jump();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__71494_71654 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick!","tick!",68058958)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__71494_71654) : re_frame.core.dispatch.call(null,G__71494_71654));

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
cljs.core.deref((function (){var G__71495 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71495) : re_frame.core.subscribe.call(null,G__71495));
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
var source = cljs.core.deref((function (){var G__71496 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71496) : re_frame.core.subscribe.call(null,G__71496));
})()).createBufferSource();
(source.buffer = buffer);

return source;
});
mecca.music.get_and_decode = (function mecca$music$get_and_decode(named_url){
var c__29789__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29790__auto__ = (function (){var switch__29585__auto__ = (function (state_71508){
var state_val_71509 = (state_71508[(1)]);
if((state_val_71509 === (1))){
var inst_71497 = mecca.music.load_sound(named_url);
var state_71508__$1 = state_71508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71508__$1,(2),inst_71497);
} else {
if((state_val_71509 === (2))){
var inst_71499 = (state_71508[(7)]);
var inst_71499__$1 = (state_71508[(2)]);
var state_71508__$1 = (function (){var statearr_71510 = state_71508;
(statearr_71510[(7)] = inst_71499__$1);

return statearr_71510;
})();
if(cljs.core.truth_(inst_71499__$1)){
var statearr_71511_71657 = state_71508__$1;
(statearr_71511_71657[(1)] = (3));

} else {
var statearr_71512_71658 = state_71508__$1;
(statearr_71512_71658[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71509 === (3))){
var inst_71499 = (state_71508[(7)]);
var inst_71501 = mecca.music.decode(inst_71499);
var state_71508__$1 = state_71508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71508__$1,(6),inst_71501);
} else {
if((state_val_71509 === (4))){
var state_71508__$1 = state_71508;
var statearr_71513_71661 = state_71508__$1;
(statearr_71513_71661[(2)] = null);

(statearr_71513_71661[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71509 === (5))){
var inst_71506 = (state_71508[(2)]);
var state_71508__$1 = state_71508;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71508__$1,inst_71506);
} else {
if((state_val_71509 === (6))){
var inst_71503 = (state_71508[(2)]);
var state_71508__$1 = state_71508;
var statearr_71514_71662 = state_71508__$1;
(statearr_71514_71662[(2)] = inst_71503);

(statearr_71514_71662[(1)] = (5));


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
var mecca$music$get_and_decode_$_state_machine__29586__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__29586__auto____0 = (function (){
var statearr_71515 = [null,null,null,null,null,null,null,null];
(statearr_71515[(0)] = mecca$music$get_and_decode_$_state_machine__29586__auto__);

(statearr_71515[(1)] = (1));

return statearr_71515;
});
var mecca$music$get_and_decode_$_state_machine__29586__auto____1 = (function (state_71508){
while(true){
var ret_value__29587__auto__ = (function (){try{while(true){
var result__29588__auto__ = switch__29585__auto__(state_71508);
if(cljs.core.keyword_identical_QMARK_(result__29588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29588__auto__;
}
break;
}
}catch (e71516){if((e71516 instanceof Object)){
var ex__29589__auto__ = e71516;
var statearr_71517_71668 = state_71508;
(statearr_71517_71668[(5)] = ex__29589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_71508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71516;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71669 = state_71508;
state_71508 = G__71669;
continue;
} else {
return ret_value__29587__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__29586__auto__ = function(state_71508){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__29586__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__29586__auto____1.call(this,state_71508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__29586__auto____0;
mecca$music$get_and_decode_$_state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__29586__auto____1;
return mecca$music$get_and_decode_$_state_machine__29586__auto__;
})()
})();
var state__29791__auto__ = (function (){var statearr_71518 = (f__29790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29790__auto__.cljs$core$IFn$_invoke$arity$0() : f__29790__auto__.call(null));
(statearr_71518[(6)] = c__29789__auto__);

return statearr_71518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29791__auto__);
}));

return c__29789__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__29789__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29790__auto__ = (function (){var switch__29585__auto__ = (function (state_71547){
var state_val_71548 = (state_71547[(1)]);
if((state_val_71548 === (1))){
var inst_71519 = cljs.core.PersistentHashMap.EMPTY;
var inst_71520 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(19));
var inst_71521 = inst_71519;
var inst_71522 = inst_71520;
var state_71547__$1 = (function (){var statearr_71549 = state_71547;
(statearr_71549[(7)] = inst_71521);

(statearr_71549[(8)] = inst_71522);

return statearr_71549;
})();
var statearr_71550_71682 = state_71547__$1;
(statearr_71550_71682[(2)] = null);

(statearr_71550_71682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71548 === (2))){
var inst_71522 = (state_71547[(8)]);
var inst_71524 = cljs.core.first(inst_71522);
var inst_71525 = (inst_71524 == null);
var inst_71526 = cljs.core.not(inst_71525);
var state_71547__$1 = state_71547;
if(inst_71526){
var statearr_71551_71687 = state_71547__$1;
(statearr_71551_71687[(1)] = (4));

} else {
var statearr_71552_71691 = state_71547__$1;
(statearr_71552_71691[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71548 === (3))){
var inst_71545 = (state_71547[(2)]);
var state_71547__$1 = state_71547;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71547__$1,inst_71545);
} else {
if((state_val_71548 === (4))){
var inst_71522 = (state_71547[(8)]);
var inst_71528 = (state_71547[(9)]);
var inst_71528__$1 = cljs.core.first(inst_71522);
var inst_71529 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"sound","sound",-2127407070)];
var inst_71530 = ["/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_71528__$1),".mp3"].join('');
var inst_71531 = [inst_71530,inst_71528__$1];
var inst_71532 = cljs.core.PersistentHashMap.fromArrays(inst_71529,inst_71531);
var inst_71533 = mecca.music.get_and_decode(inst_71532);
var state_71547__$1 = (function (){var statearr_71553 = state_71547;
(statearr_71553[(9)] = inst_71528__$1);

return statearr_71553;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71547__$1,(7),inst_71533);
} else {
if((state_val_71548 === (5))){
var inst_71521 = (state_71547[(7)]);
var state_71547__$1 = state_71547;
var statearr_71554_71703 = state_71547__$1;
(statearr_71554_71703[(2)] = inst_71521);

(statearr_71554_71703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71548 === (6))){
var inst_71543 = (state_71547[(2)]);
var state_71547__$1 = state_71547;
var statearr_71555_71710 = state_71547__$1;
(statearr_71555_71710[(2)] = inst_71543);

(statearr_71555_71710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71548 === (7))){
var inst_71521 = (state_71547[(7)]);
var inst_71522 = (state_71547[(8)]);
var inst_71528 = (state_71547[(9)]);
var inst_71535 = (state_71547[(2)]);
var inst_71536 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_71528], 0));
var inst_71537 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_71535], 0));
var inst_71538 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_71521,inst_71528,inst_71535);
var inst_71539 = cljs.core.rest(inst_71522);
var inst_71521__$1 = inst_71538;
var inst_71522__$1 = inst_71539;
var state_71547__$1 = (function (){var statearr_71556 = state_71547;
(statearr_71556[(7)] = inst_71521__$1);

(statearr_71556[(10)] = inst_71536);

(statearr_71556[(11)] = inst_71537);

(statearr_71556[(8)] = inst_71522__$1);

return statearr_71556;
})();
var statearr_71557_71720 = state_71547__$1;
(statearr_71557_71720[(2)] = null);

(statearr_71557_71720[(1)] = (2));


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
var mecca$music$load_samples_$_state_machine__29586__auto__ = null;
var mecca$music$load_samples_$_state_machine__29586__auto____0 = (function (){
var statearr_71558 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71558[(0)] = mecca$music$load_samples_$_state_machine__29586__auto__);

(statearr_71558[(1)] = (1));

return statearr_71558;
});
var mecca$music$load_samples_$_state_machine__29586__auto____1 = (function (state_71547){
while(true){
var ret_value__29587__auto__ = (function (){try{while(true){
var result__29588__auto__ = switch__29585__auto__(state_71547);
if(cljs.core.keyword_identical_QMARK_(result__29588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29588__auto__;
}
break;
}
}catch (e71559){if((e71559 instanceof Object)){
var ex__29589__auto__ = e71559;
var statearr_71560_71727 = state_71547;
(statearr_71560_71727[(5)] = ex__29589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_71547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71559;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71729 = state_71547;
state_71547 = G__71729;
continue;
} else {
return ret_value__29587__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__29586__auto__ = function(state_71547){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__29586__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__29586__auto____1.call(this,state_71547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__29586__auto____0;
mecca$music$load_samples_$_state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__29586__auto____1;
return mecca$music$load_samples_$_state_machine__29586__auto__;
})()
})();
var state__29791__auto__ = (function (){var statearr_71561 = (f__29790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29790__auto__.cljs$core$IFn$_invoke$arity$0() : f__29790__auto__.call(null));
(statearr_71561[(6)] = c__29789__auto__);

return statearr_71561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29791__auto__);
}));

return c__29789__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__29789__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29790__auto__ = (function (){var switch__29585__auto__ = (function (state_71571){
var state_val_71572 = (state_71571[(1)]);
if((state_val_71572 === (1))){
var inst_71562 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71563 = mecca.music.load_samples();
var state_71571__$1 = (function (){var statearr_71573 = state_71571;
(statearr_71573[(7)] = inst_71562);

return statearr_71573;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71571__$1,(2),inst_71563);
} else {
if((state_val_71572 === (2))){
var inst_71562 = (state_71571[(7)]);
var inst_71565 = (state_71571[(2)]);
var inst_71566 = [new cljs.core.Keyword(null,"load-samples","load-samples",-40877701),inst_71565];
var inst_71567 = (new cljs.core.PersistentVector(null,2,(5),inst_71562,inst_71566,null));
var inst_71568 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_71567) : re_frame.core.dispatch.call(null,inst_71567));
var inst_71569 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_71571__$1 = (function (){var statearr_71574 = state_71571;
(statearr_71574[(8)] = inst_71568);

return statearr_71574;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_71571__$1,inst_71569);
} else {
return null;
}
}
});
return (function() {
var mecca$music$state_machine__29586__auto__ = null;
var mecca$music$state_machine__29586__auto____0 = (function (){
var statearr_71575 = [null,null,null,null,null,null,null,null,null];
(statearr_71575[(0)] = mecca$music$state_machine__29586__auto__);

(statearr_71575[(1)] = (1));

return statearr_71575;
});
var mecca$music$state_machine__29586__auto____1 = (function (state_71571){
while(true){
var ret_value__29587__auto__ = (function (){try{while(true){
var result__29588__auto__ = switch__29585__auto__(state_71571);
if(cljs.core.keyword_identical_QMARK_(result__29588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29588__auto__;
}
break;
}
}catch (e71576){if((e71576 instanceof Object)){
var ex__29589__auto__ = e71576;
var statearr_71577_71750 = state_71571;
(statearr_71577_71750[(5)] = ex__29589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_71571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71576;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71751 = state_71571;
state_71571 = G__71751;
continue;
} else {
return ret_value__29587__auto__;
}
break;
}
});
mecca$music$state_machine__29586__auto__ = function(state_71571){
switch(arguments.length){
case 0:
return mecca$music$state_machine__29586__auto____0.call(this);
case 1:
return mecca$music$state_machine__29586__auto____1.call(this,state_71571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__29586__auto____0;
mecca$music$state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__29586__auto____1;
return mecca$music$state_machine__29586__auto__;
})()
})();
var state__29791__auto__ = (function (){var statearr_71578 = (f__29790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29790__auto__.cljs$core$IFn$_invoke$arity$0() : f__29790__auto__.call(null));
(statearr_71578[(6)] = c__29789__auto__);

return statearr_71578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29791__auto__);
}));

return c__29789__auto__;
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
mecca.music.detune_cents = (function mecca$music$detune_cents(midi_num){
if(((66) < midi_num)){
return ((100) * (midi_num - (66)));
} else {
return ((-100) * ((68) - midi_num));
}
});
mecca.music.computedPlaybackRate = (function mecca$music$computedPlaybackRate(detune,playbackRate){
return (playbackRate * Math.pow((2),(detune / (1200))));
});
mecca.music.detune_cents((72));
mecca.music.play_note = (function mecca$music$play_note(pitch){
var context = cljs.core.deref((function (){var G__71579 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71579) : re_frame.core.subscribe.call(null,G__71579));
})());
var samples = (function (){var G__71580 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71580) : re_frame.core.subscribe.call(null,G__71580));
})();
var instrument = (function (){var G__71581 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71581) : re_frame.core.subscribe.call(null,G__71581));
})();
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(samples),cljs.core.deref(instrument)));
var sample_source = context.createBufferSource();
(sample_source.buffer = audio_buffer);

sample_source.detune.setValueAtTime(mecca.music.detune_cents(pitch),context.currentTime);

sample_source.playbackRate.setValueAtTime(mecca.music.computedPlaybackRate(mecca.music.detune_cents(pitch),(1)),context.currentTime);

sample_source.connect(context.destination);

sample_source.start();

return sample_source;
});
mecca.music.computedPlaybackRate(mecca.music.detune_cents((72)),mecca.music.pitch__GT_rate((72)));
mecca.music.createFadeBuffer = (function mecca$music$createFadeBuffer(context,activeTime,fadeTime){
var length1 = (activeTime * context.sampleRate);
var length2 = ((activeTime - ((2) * fadeTime)) * context.sampleRate);
var length = (length1 + length2);
var buffer = context.createBuffer((1),length,context.sampleRate);
var p = buffer.getChannelData((0));
var fadeLength = (fadeTime * context.sampleRate);
var fadeIndex1 = fadeLength;
var fadeIndex2 = (length1 - fadeLength);
console.log(["createFadeBuffer() length = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(length)].join(''));

var seq__71582_71785 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(length1));
var chunk__71583_71786 = null;
var count__71584_71787 = (0);
var i__71585_71788 = (0);
while(true){
if((i__71585_71788 < count__71584_71787)){
var i_71789 = chunk__71583_71786.cljs$core$IIndexed$_nth$arity$2(null,i__71585_71788);
if((i_71789 < fadeIndex1)){
(p[i_71789] = Math.sqrt((i_71789 / fadeLength)));
} else {
if((i_71789 >= fadeIndex2)){
(p[i_71789] = Math.sqrt(((1) - ((i_71789 - fadeIndex2) / fadeLength))));
} else {
(p[i_71789] = (1));

}
}


var G__71795 = seq__71582_71785;
var G__71796 = chunk__71583_71786;
var G__71797 = count__71584_71787;
var G__71798 = (i__71585_71788 + (1));
seq__71582_71785 = G__71795;
chunk__71583_71786 = G__71796;
count__71584_71787 = G__71797;
i__71585_71788 = G__71798;
continue;
} else {
var temp__5735__auto___71799 = cljs.core.seq(seq__71582_71785);
if(temp__5735__auto___71799){
var seq__71582_71801__$1 = temp__5735__auto___71799;
if(cljs.core.chunked_seq_QMARK_(seq__71582_71801__$1)){
var c__4609__auto___71802 = cljs.core.chunk_first(seq__71582_71801__$1);
var G__71806 = cljs.core.chunk_rest(seq__71582_71801__$1);
var G__71807 = c__4609__auto___71802;
var G__71808 = cljs.core.count(c__4609__auto___71802);
var G__71809 = (0);
seq__71582_71785 = G__71806;
chunk__71583_71786 = G__71807;
count__71584_71787 = G__71808;
i__71585_71788 = G__71809;
continue;
} else {
var i_71810 = cljs.core.first(seq__71582_71801__$1);
if((i_71810 < fadeIndex1)){
(p[i_71810] = Math.sqrt((i_71810 / fadeLength)));
} else {
if((i_71810 >= fadeIndex2)){
(p[i_71810] = Math.sqrt(((1) - ((i_71810 - fadeIndex2) / fadeLength))));
} else {
(p[i_71810] = (1));

}
}


var G__71817 = cljs.core.next(seq__71582_71801__$1);
var G__71818 = null;
var G__71819 = (0);
var G__71820 = (0);
seq__71582_71785 = G__71817;
chunk__71583_71786 = G__71818;
count__71584_71787 = G__71819;
i__71585_71788 = G__71820;
continue;
}
} else {
}
}
break;
}

var seq__71586_71821 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(length1,length));
var chunk__71587_71822 = null;
var count__71588_71823 = (0);
var i__71589_71824 = (0);
while(true){
if((i__71589_71824 < count__71588_71823)){
var i_71826 = chunk__71587_71822.cljs$core$IIndexed$_nth$arity$2(null,i__71589_71824);
(p[i_71826] = (0));


var G__71828 = seq__71586_71821;
var G__71829 = chunk__71587_71822;
var G__71830 = count__71588_71823;
var G__71831 = (i__71589_71824 + (1));
seq__71586_71821 = G__71828;
chunk__71587_71822 = G__71829;
count__71588_71823 = G__71830;
i__71589_71824 = G__71831;
continue;
} else {
var temp__5735__auto___71835 = cljs.core.seq(seq__71586_71821);
if(temp__5735__auto___71835){
var seq__71586_71836__$1 = temp__5735__auto___71835;
if(cljs.core.chunked_seq_QMARK_(seq__71586_71836__$1)){
var c__4609__auto___71837 = cljs.core.chunk_first(seq__71586_71836__$1);
var G__71839 = cljs.core.chunk_rest(seq__71586_71836__$1);
var G__71840 = c__4609__auto___71837;
var G__71841 = cljs.core.count(c__4609__auto___71837);
var G__71842 = (0);
seq__71586_71821 = G__71839;
chunk__71587_71822 = G__71840;
count__71588_71823 = G__71841;
i__71589_71824 = G__71842;
continue;
} else {
var i_71843 = cljs.core.first(seq__71586_71836__$1);
(p[i_71843] = (0));


var G__71845 = cljs.core.next(seq__71586_71836__$1);
var G__71846 = null;
var G__71847 = (0);
var G__71848 = (0);
seq__71586_71821 = G__71845;
chunk__71587_71822 = G__71846;
count__71588_71823 = G__71847;
i__71589_71824 = G__71848;
continue;
}
} else {
}
}
break;
}

return buffer;
});
mecca.music.createDelayTimeBuffer = (function mecca$music$createDelayTimeBuffer(context,activeTime,fadeTime,shiftUp){
var length1 = (activeTime * context.sampleRate);
var length2 = ((activeTime - ((2) * fadeTime)) * context.sampleRate);
var length = (length1 + length2);
var buffer = context.createBuffer((1),length,context.sampleRate);
var p = buffer.getChannelData((0));
console.log(["createDelayTimeBuffer() length = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(length)].join(''));

var seq__71590_71857 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(length1));
var chunk__71591_71858 = null;
var count__71592_71859 = (0);
var i__71593_71860 = (0);
while(true){
if((i__71593_71860 < count__71592_71859)){
var i_71862 = chunk__71591_71858.cljs$core$IIndexed$_nth$arity$2(null,i__71593_71860);
if(cljs.core.truth_(shiftUp)){
(p[i_71862] = ((length1 - i_71862) / length));
} else {
(p[i_71862] = (i_71862 / length1));
}


var G__71867 = seq__71590_71857;
var G__71868 = chunk__71591_71858;
var G__71869 = count__71592_71859;
var G__71870 = (i__71593_71860 + (1));
seq__71590_71857 = G__71867;
chunk__71591_71858 = G__71868;
count__71592_71859 = G__71869;
i__71593_71860 = G__71870;
continue;
} else {
var temp__5735__auto___71873 = cljs.core.seq(seq__71590_71857);
if(temp__5735__auto___71873){
var seq__71590_71875__$1 = temp__5735__auto___71873;
if(cljs.core.chunked_seq_QMARK_(seq__71590_71875__$1)){
var c__4609__auto___71876 = cljs.core.chunk_first(seq__71590_71875__$1);
var G__71878 = cljs.core.chunk_rest(seq__71590_71875__$1);
var G__71879 = c__4609__auto___71876;
var G__71880 = cljs.core.count(c__4609__auto___71876);
var G__71881 = (0);
seq__71590_71857 = G__71878;
chunk__71591_71858 = G__71879;
count__71592_71859 = G__71880;
i__71593_71860 = G__71881;
continue;
} else {
var i_71885 = cljs.core.first(seq__71590_71875__$1);
if(cljs.core.truth_(shiftUp)){
(p[i_71885] = ((length1 - i_71885) / length));
} else {
(p[i_71885] = (i_71885 / length1));
}


var G__71888 = cljs.core.next(seq__71590_71875__$1);
var G__71889 = null;
var G__71890 = (0);
var G__71891 = (0);
seq__71590_71857 = G__71888;
chunk__71591_71858 = G__71889;
count__71592_71859 = G__71890;
i__71593_71860 = G__71891;
continue;
}
} else {
}
}
break;
}

var seq__71594_71896 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(length));
var chunk__71595_71897 = null;
var count__71596_71898 = (0);
var i__71597_71899 = (0);
while(true){
if((i__71597_71899 < count__71596_71898)){
var i_71900 = chunk__71595_71897.cljs$core$IIndexed$_nth$arity$2(null,i__71597_71899);
(p[i_71900] = (0));


var G__71901 = seq__71594_71896;
var G__71902 = chunk__71595_71897;
var G__71903 = count__71596_71898;
var G__71904 = (i__71597_71899 + (1));
seq__71594_71896 = G__71901;
chunk__71595_71897 = G__71902;
count__71596_71898 = G__71903;
i__71597_71899 = G__71904;
continue;
} else {
var temp__5735__auto___71905 = cljs.core.seq(seq__71594_71896);
if(temp__5735__auto___71905){
var seq__71594_71906__$1 = temp__5735__auto___71905;
if(cljs.core.chunked_seq_QMARK_(seq__71594_71906__$1)){
var c__4609__auto___71907 = cljs.core.chunk_first(seq__71594_71906__$1);
var G__71908 = cljs.core.chunk_rest(seq__71594_71906__$1);
var G__71909 = c__4609__auto___71907;
var G__71910 = cljs.core.count(c__4609__auto___71907);
var G__71911 = (0);
seq__71594_71896 = G__71908;
chunk__71595_71897 = G__71909;
count__71596_71898 = G__71910;
i__71597_71899 = G__71911;
continue;
} else {
var i_71913 = cljs.core.first(seq__71594_71906__$1);
(p[i_71913] = (0));


var G__71914 = cljs.core.next(seq__71594_71906__$1);
var G__71915 = null;
var G__71916 = (0);
var G__71917 = (0);
seq__71594_71896 = G__71914;
chunk__71595_71897 = G__71915;
count__71596_71898 = G__71916;
i__71597_71899 = G__71917;
continue;
}
} else {
}
}
break;
}

return buffer;
});
mecca.music.delayTime = (-1);
mecca.music.fadeTime = 0.05;
mecca.music.bufferTime = (2);
mecca.music.previousPitch = (-1);
mecca.music.play_time_stretched = (function mecca$music$play_time_stretched(instrument,pitch){
var context = (function (){var G__71598 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71598) : re_frame.core.subscribe.call(null,G__71598));
})();
var current_time = cljs.core.deref(context).currentTime;
var samples = (function (){var G__71599 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71599) : re_frame.core.subscribe.call(null,G__71599));
})();
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(samples),instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
var input = cljs.core.deref(context).createGain();
var output = cljs.core.deref(context).createGain();
var mod1 = cljs.core.deref(context).createBufferSource();
var mod2 = cljs.core.deref(context).createBufferSource();
var mod3 = cljs.core.deref(context).createBufferSource();
var mod4 = cljs.core.deref(context).createBufferSource();
var mod1Gain = cljs.core.deref(context).createGain();
var mod2Gain = cljs.core.deref(context).createGain();
var mod3Gain = cljs.core.deref(context).createGain();
var mod4Gain = cljs.core.deref(context).createGain();
var modGain1 = cljs.core.deref(context).createGain();
var modGain2 = cljs.core.deref(context).createGain();
var delay1 = cljs.core.deref(context).createDelay();
var delay2 = cljs.core.deref(context).createDelay();
var fade1 = cljs.core.deref(context).createBufferSource();
var fade2 = cljs.core.deref(context).createBufferSource();
var fadeBuffer = mecca.music.createFadeBuffer(cljs.core.deref(context),mecca.music.bufferTime,mecca.music.fadeTime);
var mix1 = cljs.core.deref(context).createGain();
var mix2 = cljs.core.deref(context).createGain();
var t = (cljs.core.deref(context).currentTime + 0.05);
var t2 = ((t + mecca.music.bufferTime) - mecca.music.fadeTime);
var shiftDownBuffer = mecca.music.createDelayTimeBuffer(cljs.core.deref(context),mecca.music.bufferTime,mecca.music.fadeTime,false);
var shiftUpBuffer = mecca.music.createDelayTimeBuffer(cljs.core.deref(context),mecca.music.bufferTime,mecca.music.fadeTime,true);
(sample_source.buffer = audio_buffer);

(mod1.buffer = shiftDownBuffer);

(mod2.buffer = shiftDownBuffer);

(mod3.buffer = shiftUpBuffer);

(mod4.buffer = shiftUpBuffer);

(mod1.loop = true);

(mod2.loop = true);

(mod3.loop = true);

(mod4.loop = true);

(mod3Gain.gain.value = (0));

(mod4Gain.gain.value = (0));

mod1.connect(mod1Gain);

mod2.connect(mod2Gain);

mod3.connect(mod3Gain);

mod4.connect(mod4Gain);

mod1Gain.connect(modGain1);

mod2Gain.connect(modGain2);

mod3Gain.connect(modGain1);

mod4Gain.connect(modGain2);

modGain1.connect(delay1.delayTime);

modGain2.connect(delay2.delayTime);

(fade1.buffer = fadeBuffer);

(fade2.buffer = fadeBuffer);

(fade1.loop = true);

(fade2.loop = true);

(mix1.gain.value = (0));

(mix2.gain.value = (0));

fade1.connect(mix1.gain);

fade2.connect(mix2.gain);

sample_source.connect(input);

input.connect(delay1);

input.connect(delay2);

delay1.connect(mix1);

delay2.connect(mix2);

mix1.connect(output);

mix2.connect(output);

output.connect(cljs.core.deref(context).destination);

mod1.start(t);

mod2.start(t2);

mod3.start(t);

mod4.start(t2);

fade1.start(t);

fade2.start(t2);

sample_source.start();

(modGain1.gain.value = (1));

(modGain2.gain.value = (1));

modGain1.gain.setTargetAtTime(((1) * mecca.music.delayTime),(0),0.01);

return modGain2.gain.setTargetAtTime(((1) * mecca.music.delayTime),(0),0.01);
});
mecca.music.play_time_stretched((1),(70));
mecca.music.play_sample = (function mecca$music$play_sample(instrument,pitch){
var context = (function (){var G__71600 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71600) : re_frame.core.subscribe.call(null,G__71600));
})();
var samples = (function (){var G__71601 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71601) : re_frame.core.subscribe.call(null,G__71601));
})();
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(samples),instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
var compressor = cljs.core.deref(context).createDynamicsCompressor();
var analyser = cljs.core.deref(context).createAnalyser();
(sample_source.buffer = audio_buffer);

sample_source.detune.setValueAtTime(mecca.music.detune_cents(pitch),cljs.core.deref(context).currentTime);

sample_source.connect(analyser);

sample_source.connect(cljs.core.deref(context).destination);

sample_source.start();

return sample_source;
});
mecca.music.play_at = (function mecca$music$play_at(instrument,pitch,time){
var context = (function (){var G__71602 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71602) : re_frame.core.subscribe.call(null,G__71602));
})();
var samples = (function (){var G__71603 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71603) : re_frame.core.subscribe.call(null,G__71603));
})();
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(samples),instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
(sample_source.buffer = audio_buffer);

sample_source.detune.setValueAtTime(mecca.music.detune_cents(pitch),time);

sample_source.playbackRate.setValueAtTime(mecca.music.computedPlaybackRate(mecca.music.detune_cents(pitch),(1)),time);

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),time);

sample_source.connect(cljs.core.deref(context).destination);

sample_source.start(time);

return sample_source;
});
mecca.music.delay_note = (function mecca$music$delay_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__71604_SHARP_){
return (beats + p1__71604_SHARP_);
}));
});
mecca.music.advance_note = (function mecca$music$advance_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__71605_SHARP_){
return (p1__71605_SHARP_ - beats);
}));
});
mecca.music.queue_section = (function mecca$music$queue_section(from,to){
var notes = (function (){var G__71608 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71608) : re_frame.core.subscribe.call(null,G__71608));
})();
var started = (function (){var G__71609 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71609) : re_frame.core.subscribe.call(null,G__71609));
})();
var tempo = (function (){var G__71610 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71610) : re_frame.core.subscribe.call(null,G__71610));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__71606_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__71606_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__71606_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__71607_SHARP_){
return mecca.music.advance_note(from,p1__71607_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$queue_section_$_iter__71611(s__71612){
return (new cljs.core.LazySeq(null,(function (){
var s__71612__$1 = s__71612;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__71612__$1);
if(temp__5735__auto__){
var s__71612__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71612__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__71612__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__71614 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__71613 = (0);
while(true){
if((i__71613 < size__4581__auto__)){
var map__71615 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__71613);
var map__71615__$1 = (((((!((map__71615 == null))))?(((((map__71615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71615):map__71615);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71615__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71615__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71615__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__71614,mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))));

var G__71986 = (i__71613 + (1));
i__71613 = G__71986;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71614),mecca$music$queue_section_$_iter__71611(cljs.core.chunk_rest(s__71612__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71614),null);
}
} else {
var map__71617 = cljs.core.first(s__71612__$2);
var map__71617__$1 = (((((!((map__71617 == null))))?(((((map__71617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71617):map__71617);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71617__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71617__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71617__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$queue_section_$_iter__71611(cljs.core.rest(s__71612__$2)));
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
var notes = (function (){var G__71621 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71621) : re_frame.core.subscribe.call(null,G__71621));
})();
var now = cljs.core.deref((function (){var G__71622 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71622) : re_frame.core.subscribe.call(null,G__71622));
})()).currentTime;
var tempo = (function (){var G__71623 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71623) : re_frame.core.subscribe.call(null,G__71623));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__71619_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__71619_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__71619_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__71620_SHARP_){
return mecca.music.advance_note(from,p1__71620_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$play_section_$_iter__71624(s__71625){
return (new cljs.core.LazySeq(null,(function (){
var s__71625__$1 = s__71625;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__71625__$1);
if(temp__5735__auto__){
var s__71625__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71625__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__71625__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__71627 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__71626 = (0);
while(true){
if((i__71626 < size__4581__auto__)){
var map__71628 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__71626);
var map__71628__$1 = (((((!((map__71628 == null))))?(((((map__71628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71628):map__71628);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71628__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71628__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71628__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__71627,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__72011 = (i__71626 + (1));
i__71626 = G__72011;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71627),mecca$music$play_section_$_iter__71624(cljs.core.chunk_rest(s__71625__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71627),null);
}
} else {
var map__71630 = cljs.core.first(s__71625__$2);
var map__71630__$1 = (((((!((map__71630 == null))))?(((((map__71630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71630):map__71630);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71630__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71630__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71630__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_section_$_iter__71624(cljs.core.rest(s__71625__$2)));
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
var editor_start = (function (){var G__71632 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71632) : re_frame.core.subscribe.call(null,G__71632));
})();
var tempo = (function (){var G__71633 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71633) : re_frame.core.subscribe.call(null,G__71633));
})();
var beat_length = ((60) / cljs.core.deref((function (){var G__71634 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71634) : re_frame.core.subscribe.call(null,G__71634));
})()));
var play_pos = (((cljs.core.deref(editor_start) < (4)))?cljs.core.deref(editor_start):((4) + cljs.core.deref((function (){var G__71635 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71635) : re_frame.core.subscribe.call(null,G__71635));
})())));
return mecca.music.play_section((play_pos - (1)),((play_pos - (1)) + (n * 0.5)));
});
mecca.music.play_from_here = (function mecca$music$play_from_here(){
var notes = (function (){var G__71637 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71637) : re_frame.core.subscribe.call(null,G__71637));
})();
var editor_start = (function (){var G__71638 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71638) : re_frame.core.subscribe.call(null,G__71638));
})();
var play_pos = cljs.core.deref(editor_start);
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__71636_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__71636_SHARP_);
}),cljs.core.deref(notes)));
return mecca.music.play_section((play_pos - (1)),((16) + play_pos));
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = (function (){var G__71639 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71639) : re_frame.core.subscribe.call(null,G__71639));
})();
var now = cljs.core.deref((function (){var G__71640 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71640) : re_frame.core.subscribe.call(null,G__71640));
})()).currentTime;
var tempo = (function (){var G__71641 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__71641) : re_frame.core.subscribe.call(null,G__71641));
})();
var G__71642_72023 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__71642_72023) : re_frame.core.dispatch.call(null,G__71642_72023));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$play_song_BANG__$_iter__71643(s__71644){
return (new cljs.core.LazySeq(null,(function (){
var s__71644__$1 = s__71644;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__71644__$1);
if(temp__5735__auto__){
var s__71644__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71644__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__71644__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__71646 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__71645 = (0);
while(true){
if((i__71645 < size__4581__auto__)){
var map__71647 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__71645);
var map__71647__$1 = (((((!((map__71647 == null))))?(((((map__71647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71647):map__71647);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71647__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71647__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71647__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__71646,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__72025 = (i__71645 + (1));
i__71645 = G__72025;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71646),mecca$music$play_song_BANG__$_iter__71643(cljs.core.chunk_rest(s__71644__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71646),null);
}
} else {
var map__71649 = cljs.core.first(s__71644__$2);
var map__71649__$1 = (((((!((map__71649 == null))))?(((((map__71649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71649):map__71649);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71649__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71649__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71649__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__71643(cljs.core.rest(s__71644__$2)));
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

//# sourceMappingURL=mecca.music.js.map
