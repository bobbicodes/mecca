goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.core');
mecca.music.mario_jump = (function mecca$music$mario_jump(){
var beat = (function (){var G__27508 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27508) : re_frame.core.subscribe.call(null,G__27508));
})();
var notes = (function (){var G__27509 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27509) : re_frame.core.subscribe.call(null,G__27509));
})();
var jump = (function (){var G__27510 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27510) : re_frame.core.subscribe.call(null,G__27510));
})();
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.deref((function (){var G__27513 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27513) : re_frame.core.subscribe.call(null,G__27513));
})());
if(cljs.core.truth_(and__4174__auto__)){
return (cljs.core.deref(jump) === (0));
} else {
return and__4174__auto__;
}
})())){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__27507_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__27507_SHARP_),(cljs.core.deref(beat) + (1)));
}),cljs.core.deref(notes))))){
var G__27514 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump!","jump!",-1168155200)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27514) : re_frame.core.dispatch.call(null,G__27514));
} else {
return null;
}
} else {
return null;
}
});
mecca.music.mario_move = (function mecca$music$mario_move(){
var notes = (function (){var G__27516 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27516) : re_frame.core.subscribe.call(null,G__27516));
})();
var playing_QMARK_ = cljs.core.deref((function (){var G__27517 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27517) : re_frame.core.subscribe.call(null,G__27517));
})());
var now = cljs.core.deref((function (){var G__27518 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27518) : re_frame.core.subscribe.call(null,G__27518));
})()).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27515_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__27515_SHARP_);
}),cljs.core.deref(notes)));
var started = (function (){var G__27519 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27519) : re_frame.core.subscribe.call(null,G__27519));
})();
var elapsed = (now - cljs.core.deref(started));
var beat_length = ((60) / cljs.core.deref((function (){var G__27520 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27520) : re_frame.core.subscribe.call(null,G__27520));
})()));
var end_time = (cljs.core.deref(started) + (beat_length * (4)));
var current_beat = (elapsed / beat_length);
var last_drawn_pos = (function (){var G__27521 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27521) : re_frame.core.subscribe.call(null,G__27521));
})();
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
var G__27522_27693 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-off","play-off",2116693509)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27522_27693) : re_frame.core.dispatch.call(null,G__27522_27693));
} else {
if((cljs.core.deref(last_drawn_pos) < current_beat)){
var G__27523_27694 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-mario","move-mario",-317739908)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27523_27694) : re_frame.core.dispatch.call(null,G__27523_27694));

var G__27524_27695 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-position","advance-position",-23796893)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27524_27695) : re_frame.core.dispatch.call(null,G__27524_27695));
} else {
}
}
} else {
}

return mecca.music.mario_jump();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__27525_27696 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick!","tick!",68058958)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27525_27696) : re_frame.core.dispatch.call(null,G__27525_27696));

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
cljs.core.deref((function (){var G__27526 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27526) : re_frame.core.subscribe.call(null,G__27526));
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
var source = cljs.core.deref((function (){var G__27527 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27527) : re_frame.core.subscribe.call(null,G__27527));
})()).createBufferSource();
(source.buffer = buffer);

return source;
});
mecca.music.get_and_decode = (function mecca$music$get_and_decode(named_url){
var c__25573__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25574__auto__ = (function (){var switch__25528__auto__ = (function (state_27540){
var state_val_27541 = (state_27540[(1)]);
if((state_val_27541 === (1))){
var inst_27529 = mecca.music.load_sound(named_url);
var state_27540__$1 = state_27540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27540__$1,(2),inst_27529);
} else {
if((state_val_27541 === (2))){
var inst_27531 = (state_27540[(7)]);
var inst_27531__$1 = (state_27540[(2)]);
var state_27540__$1 = (function (){var statearr_27551 = state_27540;
(statearr_27551[(7)] = inst_27531__$1);

return statearr_27551;
})();
if(cljs.core.truth_(inst_27531__$1)){
var statearr_27552_27731 = state_27540__$1;
(statearr_27552_27731[(1)] = (3));

} else {
var statearr_27553_27732 = state_27540__$1;
(statearr_27553_27732[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27541 === (3))){
var inst_27531 = (state_27540[(7)]);
var inst_27533 = mecca.music.decode(inst_27531);
var state_27540__$1 = state_27540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27540__$1,(6),inst_27533);
} else {
if((state_val_27541 === (4))){
var state_27540__$1 = state_27540;
var statearr_27567_27737 = state_27540__$1;
(statearr_27567_27737[(2)] = null);

(statearr_27567_27737[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27541 === (5))){
var inst_27538 = (state_27540[(2)]);
var state_27540__$1 = state_27540;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27540__$1,inst_27538);
} else {
if((state_val_27541 === (6))){
var inst_27535 = (state_27540[(2)]);
var state_27540__$1 = state_27540;
var statearr_27568_27739 = state_27540__$1;
(statearr_27568_27739[(2)] = inst_27535);

(statearr_27568_27739[(1)] = (5));


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
var mecca$music$get_and_decode_$_state_machine__25529__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__25529__auto____0 = (function (){
var statearr_27569 = [null,null,null,null,null,null,null,null];
(statearr_27569[(0)] = mecca$music$get_and_decode_$_state_machine__25529__auto__);

(statearr_27569[(1)] = (1));

return statearr_27569;
});
var mecca$music$get_and_decode_$_state_machine__25529__auto____1 = (function (state_27540){
while(true){
var ret_value__25530__auto__ = (function (){try{while(true){
var result__25531__auto__ = switch__25528__auto__(state_27540);
if(cljs.core.keyword_identical_QMARK_(result__25531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25531__auto__;
}
break;
}
}catch (e27570){if((e27570 instanceof Object)){
var ex__25532__auto__ = e27570;
var statearr_27571_27778 = state_27540;
(statearr_27571_27778[(5)] = ex__25532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27570;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27783 = state_27540;
state_27540 = G__27783;
continue;
} else {
return ret_value__25530__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__25529__auto__ = function(state_27540){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__25529__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__25529__auto____1.call(this,state_27540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__25529__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__25529__auto____0;
mecca$music$get_and_decode_$_state_machine__25529__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__25529__auto____1;
return mecca$music$get_and_decode_$_state_machine__25529__auto__;
})()
})();
var state__25575__auto__ = (function (){var statearr_27576 = (f__25574__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25574__auto__.cljs$core$IFn$_invoke$arity$0() : f__25574__auto__.call(null));
(statearr_27576[(6)] = c__25573__auto__);

return statearr_27576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25575__auto__);
}));

return c__25573__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__25573__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25574__auto__ = (function (){var switch__25528__auto__ = (function (state_27605){
var state_val_27606 = (state_27605[(1)]);
if((state_val_27606 === (1))){
var inst_27577 = cljs.core.PersistentHashMap.EMPTY;
var inst_27578 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(19));
var inst_27579 = inst_27577;
var inst_27580 = inst_27578;
var state_27605__$1 = (function (){var statearr_27607 = state_27605;
(statearr_27607[(7)] = inst_27579);

(statearr_27607[(8)] = inst_27580);

return statearr_27607;
})();
var statearr_27608_27798 = state_27605__$1;
(statearr_27608_27798[(2)] = null);

(statearr_27608_27798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27606 === (2))){
var inst_27580 = (state_27605[(8)]);
var inst_27582 = cljs.core.first(inst_27580);
var inst_27583 = (inst_27582 == null);
var inst_27584 = cljs.core.not(inst_27583);
var state_27605__$1 = state_27605;
if(inst_27584){
var statearr_27609_27800 = state_27605__$1;
(statearr_27609_27800[(1)] = (4));

} else {
var statearr_27610_27801 = state_27605__$1;
(statearr_27610_27801[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27606 === (3))){
var inst_27603 = (state_27605[(2)]);
var state_27605__$1 = state_27605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27605__$1,inst_27603);
} else {
if((state_val_27606 === (4))){
var inst_27586 = (state_27605[(9)]);
var inst_27580 = (state_27605[(8)]);
var inst_27586__$1 = cljs.core.first(inst_27580);
var inst_27587 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"sound","sound",-2127407070)];
var inst_27588 = ["/mecca/public/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27586__$1),".mp3"].join('');
var inst_27589 = [inst_27588,inst_27586__$1];
var inst_27590 = cljs.core.PersistentHashMap.fromArrays(inst_27587,inst_27589);
var inst_27591 = mecca.music.get_and_decode(inst_27590);
var state_27605__$1 = (function (){var statearr_27611 = state_27605;
(statearr_27611[(9)] = inst_27586__$1);

return statearr_27611;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27605__$1,(7),inst_27591);
} else {
if((state_val_27606 === (5))){
var inst_27579 = (state_27605[(7)]);
var state_27605__$1 = state_27605;
var statearr_27612_27872 = state_27605__$1;
(statearr_27612_27872[(2)] = inst_27579);

(statearr_27612_27872[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27606 === (6))){
var inst_27601 = (state_27605[(2)]);
var state_27605__$1 = state_27605;
var statearr_27613_27874 = state_27605__$1;
(statearr_27613_27874[(2)] = inst_27601);

(statearr_27613_27874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27606 === (7))){
var inst_27579 = (state_27605[(7)]);
var inst_27586 = (state_27605[(9)]);
var inst_27580 = (state_27605[(8)]);
var inst_27593 = (state_27605[(2)]);
var inst_27594 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_27586], 0));
var inst_27595 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_27593], 0));
var inst_27596 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_27579,inst_27586,inst_27593);
var inst_27597 = cljs.core.rest(inst_27580);
var inst_27579__$1 = inst_27596;
var inst_27580__$1 = inst_27597;
var state_27605__$1 = (function (){var statearr_27614 = state_27605;
(statearr_27614[(7)] = inst_27579__$1);

(statearr_27614[(10)] = inst_27594);

(statearr_27614[(8)] = inst_27580__$1);

(statearr_27614[(11)] = inst_27595);

return statearr_27614;
})();
var statearr_27615_27879 = state_27605__$1;
(statearr_27615_27879[(2)] = null);

(statearr_27615_27879[(1)] = (2));


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
var mecca$music$load_samples_$_state_machine__25529__auto__ = null;
var mecca$music$load_samples_$_state_machine__25529__auto____0 = (function (){
var statearr_27616 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27616[(0)] = mecca$music$load_samples_$_state_machine__25529__auto__);

(statearr_27616[(1)] = (1));

return statearr_27616;
});
var mecca$music$load_samples_$_state_machine__25529__auto____1 = (function (state_27605){
while(true){
var ret_value__25530__auto__ = (function (){try{while(true){
var result__25531__auto__ = switch__25528__auto__(state_27605);
if(cljs.core.keyword_identical_QMARK_(result__25531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25531__auto__;
}
break;
}
}catch (e27617){if((e27617 instanceof Object)){
var ex__25532__auto__ = e27617;
var statearr_27618_27887 = state_27605;
(statearr_27618_27887[(5)] = ex__25532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27617;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27888 = state_27605;
state_27605 = G__27888;
continue;
} else {
return ret_value__25530__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__25529__auto__ = function(state_27605){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__25529__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__25529__auto____1.call(this,state_27605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__25529__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__25529__auto____0;
mecca$music$load_samples_$_state_machine__25529__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__25529__auto____1;
return mecca$music$load_samples_$_state_machine__25529__auto__;
})()
})();
var state__25575__auto__ = (function (){var statearr_27619 = (f__25574__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25574__auto__.cljs$core$IFn$_invoke$arity$0() : f__25574__auto__.call(null));
(statearr_27619[(6)] = c__25573__auto__);

return statearr_27619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25575__auto__);
}));

return c__25573__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__25573__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25574__auto__ = (function (){var switch__25528__auto__ = (function (state_27630){
var state_val_27631 = (state_27630[(1)]);
if((state_val_27631 === (1))){
var inst_27621 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27622 = mecca.music.load_samples();
var state_27630__$1 = (function (){var statearr_27632 = state_27630;
(statearr_27632[(7)] = inst_27621);

return statearr_27632;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27630__$1,(2),inst_27622);
} else {
if((state_val_27631 === (2))){
var inst_27621 = (state_27630[(7)]);
var inst_27624 = (state_27630[(2)]);
var inst_27625 = [new cljs.core.Keyword(null,"load-samples","load-samples",-40877701),inst_27624];
var inst_27626 = (new cljs.core.PersistentVector(null,2,(5),inst_27621,inst_27625,null));
var inst_27627 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_27626) : re_frame.core.dispatch.call(null,inst_27626));
var inst_27628 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_27630__$1 = (function (){var statearr_27633 = state_27630;
(statearr_27633[(8)] = inst_27627);

return statearr_27633;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27630__$1,inst_27628);
} else {
return null;
}
}
});
return (function() {
var mecca$music$state_machine__25529__auto__ = null;
var mecca$music$state_machine__25529__auto____0 = (function (){
var statearr_27634 = [null,null,null,null,null,null,null,null,null];
(statearr_27634[(0)] = mecca$music$state_machine__25529__auto__);

(statearr_27634[(1)] = (1));

return statearr_27634;
});
var mecca$music$state_machine__25529__auto____1 = (function (state_27630){
while(true){
var ret_value__25530__auto__ = (function (){try{while(true){
var result__25531__auto__ = switch__25528__auto__(state_27630);
if(cljs.core.keyword_identical_QMARK_(result__25531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25531__auto__;
}
break;
}
}catch (e27635){if((e27635 instanceof Object)){
var ex__25532__auto__ = e27635;
var statearr_27636_27906 = state_27630;
(statearr_27636_27906[(5)] = ex__25532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27635;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27907 = state_27630;
state_27630 = G__27907;
continue;
} else {
return ret_value__25530__auto__;
}
break;
}
});
mecca$music$state_machine__25529__auto__ = function(state_27630){
switch(arguments.length){
case 0:
return mecca$music$state_machine__25529__auto____0.call(this);
case 1:
return mecca$music$state_machine__25529__auto____1.call(this,state_27630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__25529__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__25529__auto____0;
mecca$music$state_machine__25529__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__25529__auto____1;
return mecca$music$state_machine__25529__auto__;
})()
})();
var state__25575__auto__ = (function (){var statearr_27637 = (f__25574__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25574__auto__.cljs$core$IFn$_invoke$arity$0() : f__25574__auto__.call(null));
(statearr_27637[(6)] = c__25573__auto__);

return statearr_27637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25575__auto__);
}));

return c__25573__auto__;
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
var context = cljs.core.deref((function (){var G__27638 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27638) : re_frame.core.subscribe.call(null,G__27638));
})());
var samples = (function (){var G__27639 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27639) : re_frame.core.subscribe.call(null,G__27639));
})();
var instrument = (function (){var G__27640 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27640) : re_frame.core.subscribe.call(null,G__27640));
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
var context = (function (){var G__27641 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27641) : re_frame.core.subscribe.call(null,G__27641));
})();
var samples = (function (){var G__27642 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27642) : re_frame.core.subscribe.call(null,G__27642));
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
var context = (function (){var G__27643 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27643) : re_frame.core.subscribe.call(null,G__27643));
})();
var samples = (function (){var G__27644 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27644) : re_frame.core.subscribe.call(null,G__27644));
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__27645_SHARP_){
return (beats + p1__27645_SHARP_);
}));
});
mecca.music.advance_note = (function mecca$music$advance_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__27646_SHARP_){
return (p1__27646_SHARP_ - beats);
}));
});
mecca.music.queue_section = (function mecca$music$queue_section(from,to){
var notes = (function (){var G__27649 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27649) : re_frame.core.subscribe.call(null,G__27649));
})();
var started = (function (){var G__27650 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27650) : re_frame.core.subscribe.call(null,G__27650));
})();
var tempo = (function (){var G__27651 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27651) : re_frame.core.subscribe.call(null,G__27651));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__27647_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__27647_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__27647_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27648_SHARP_){
return mecca.music.advance_note(from,p1__27648_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$queue_section_$_iter__27652(s__27653){
return (new cljs.core.LazySeq(null,(function (){
var s__27653__$1 = s__27653;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27653__$1);
if(temp__5735__auto__){
var s__27653__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27653__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27653__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27655 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27654 = (0);
while(true){
if((i__27654 < size__4581__auto__)){
var map__27656 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__27654);
var map__27656__$1 = (((((!((map__27656 == null))))?(((((map__27656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27656):map__27656);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27656__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27656__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27656__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__27655,mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))));

var G__27937 = (i__27654 + (1));
i__27654 = G__27937;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27655),mecca$music$queue_section_$_iter__27652(cljs.core.chunk_rest(s__27653__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27655),null);
}
} else {
var map__27659 = cljs.core.first(s__27653__$2);
var map__27659__$1 = (((((!((map__27659 == null))))?(((((map__27659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27659):map__27659);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27659__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27659__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27659__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$queue_section_$_iter__27652(cljs.core.rest(s__27653__$2)));
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
var notes = (function (){var G__27663 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27663) : re_frame.core.subscribe.call(null,G__27663));
})();
var now = cljs.core.deref((function (){var G__27664 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27664) : re_frame.core.subscribe.call(null,G__27664));
})()).currentTime;
var tempo = (function (){var G__27665 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27665) : re_frame.core.subscribe.call(null,G__27665));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__27661_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__27661_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__27661_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27662_SHARP_){
return mecca.music.advance_note(from,p1__27662_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$play_section_$_iter__27666(s__27667){
return (new cljs.core.LazySeq(null,(function (){
var s__27667__$1 = s__27667;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27667__$1);
if(temp__5735__auto__){
var s__27667__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27667__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27667__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27669 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27668 = (0);
while(true){
if((i__27668 < size__4581__auto__)){
var map__27670 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__27668);
var map__27670__$1 = (((((!((map__27670 == null))))?(((((map__27670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27670):map__27670);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27670__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27670__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27670__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__27669,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__27952 = (i__27668 + (1));
i__27668 = G__27952;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27669),mecca$music$play_section_$_iter__27666(cljs.core.chunk_rest(s__27667__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27669),null);
}
} else {
var map__27672 = cljs.core.first(s__27667__$2);
var map__27672__$1 = (((((!((map__27672 == null))))?(((((map__27672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27672):map__27672);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27672__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27672__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27672__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_section_$_iter__27666(cljs.core.rest(s__27667__$2)));
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
var editor_start = (function (){var G__27674 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27674) : re_frame.core.subscribe.call(null,G__27674));
})();
var tempo = (function (){var G__27675 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27675) : re_frame.core.subscribe.call(null,G__27675));
})();
var beat_length = ((60) / cljs.core.deref((function (){var G__27676 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27676) : re_frame.core.subscribe.call(null,G__27676));
})()));
var play_pos = (((cljs.core.deref(editor_start) < (4)))?cljs.core.deref(editor_start):((4) + cljs.core.deref((function (){var G__27677 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27677) : re_frame.core.subscribe.call(null,G__27677));
})())));
return mecca.music.play_section((play_pos - (1)),((play_pos - (1)) + (n * 0.5)));
});
mecca.music.play_from_here = (function mecca$music$play_from_here(){
var notes = (function (){var G__27679 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27679) : re_frame.core.subscribe.call(null,G__27679));
})();
var editor_start = (function (){var G__27680 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27680) : re_frame.core.subscribe.call(null,G__27680));
})();
var play_pos = cljs.core.deref(editor_start);
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27678_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__27678_SHARP_);
}),cljs.core.deref(notes)));
return mecca.music.play_section((play_pos - (1)),((16) + play_pos));
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = (function (){var G__27681 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27681) : re_frame.core.subscribe.call(null,G__27681));
})();
var now = cljs.core.deref((function (){var G__27682 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27682) : re_frame.core.subscribe.call(null,G__27682));
})()).currentTime;
var tempo = (function (){var G__27683 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27683) : re_frame.core.subscribe.call(null,G__27683));
})();
var G__27684_27958 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27684_27958) : re_frame.core.dispatch.call(null,G__27684_27958));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$play_song_BANG__$_iter__27685(s__27686){
return (new cljs.core.LazySeq(null,(function (){
var s__27686__$1 = s__27686;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27686__$1);
if(temp__5735__auto__){
var s__27686__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27686__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__27686__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__27688 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__27687 = (0);
while(true){
if((i__27687 < size__4581__auto__)){
var map__27689 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__27687);
var map__27689__$1 = (((((!((map__27689 == null))))?(((((map__27689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27689):map__27689);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27689__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27689__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27689__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__27688,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__27960 = (i__27687 + (1));
i__27687 = G__27960;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27688),mecca$music$play_song_BANG__$_iter__27685(cljs.core.chunk_rest(s__27686__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27688),null);
}
} else {
var map__27691 = cljs.core.first(s__27686__$2);
var map__27691__$1 = (((((!((map__27691 == null))))?(((((map__27691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27691):map__27691);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27691__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27691__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27691__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__27685(cljs.core.rest(s__27686__$2)));
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
