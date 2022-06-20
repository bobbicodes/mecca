goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.core');
mecca.music.mario_jump = (function mecca$music$mario_jump(){
var beat = (function (){var G__37712 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37712) : re_frame.core.subscribe.call(null,G__37712));
})();
var notes = (function (){var G__37713 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37713) : re_frame.core.subscribe.call(null,G__37713));
})();
var jump = (function (){var G__37714 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37714) : re_frame.core.subscribe.call(null,G__37714));
})();
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.deref((function (){var G__37717 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37717) : re_frame.core.subscribe.call(null,G__37717));
})());
if(cljs.core.truth_(and__4174__auto__)){
return (cljs.core.deref(jump) === (0));
} else {
return and__4174__auto__;
}
})())){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37711_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__37711_SHARP_),(cljs.core.deref(beat) + (1)));
}),cljs.core.deref(notes))))){
var G__37718 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump!","jump!",-1168155200)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37718) : re_frame.core.dispatch.call(null,G__37718));
} else {
return null;
}
} else {
return null;
}
});
mecca.music.mario_move = (function mecca$music$mario_move(){
var notes = (function (){var G__37720 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37720) : re_frame.core.subscribe.call(null,G__37720));
})();
var playing_QMARK_ = cljs.core.deref((function (){var G__37721 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37721) : re_frame.core.subscribe.call(null,G__37721));
})());
var now = cljs.core.deref((function (){var G__37722 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37722) : re_frame.core.subscribe.call(null,G__37722));
})()).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37719_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__37719_SHARP_);
}),cljs.core.deref(notes)));
var started = (function (){var G__37723 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37723) : re_frame.core.subscribe.call(null,G__37723));
})();
var elapsed = (now - cljs.core.deref(started));
var beat_length = ((60) / cljs.core.deref((function (){var G__37724 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37724) : re_frame.core.subscribe.call(null,G__37724));
})()));
var end_time = (cljs.core.deref(started) + (beat_length * (4)));
var current_beat = (elapsed / beat_length);
var last_drawn_pos = (function (){var G__37725 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37725) : re_frame.core.subscribe.call(null,G__37725));
})();
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
var G__37726_37928 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-off","play-off",2116693509)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37726_37928) : re_frame.core.dispatch.call(null,G__37726_37928));
} else {
if((cljs.core.deref(last_drawn_pos) < current_beat)){
var G__37727_37929 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-mario","move-mario",-317739908)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37727_37929) : re_frame.core.dispatch.call(null,G__37727_37929));

var G__37728_37930 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-position","advance-position",-23796893)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37728_37930) : re_frame.core.dispatch.call(null,G__37728_37930));
} else {
}
}
} else {
}

return mecca.music.mario_jump();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__37729_37931 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick!","tick!",68058958)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37729_37931) : re_frame.core.dispatch.call(null,G__37729_37931));

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
cljs.core.deref((function (){var G__37730 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37730) : re_frame.core.subscribe.call(null,G__37730));
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
var source = cljs.core.deref((function (){var G__37731 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37731) : re_frame.core.subscribe.call(null,G__37731));
})()).createBufferSource();
(source.buffer = buffer);

return source;
});
mecca.music.get_and_decode = (function mecca$music$get_and_decode(named_url){
var c__30529__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30217__auto__ = (function (state_37743){
var state_val_37744 = (state_37743[(1)]);
if((state_val_37744 === (1))){
var inst_37732 = mecca.music.load_sound(named_url);
var state_37743__$1 = state_37743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37743__$1,(2),inst_37732);
} else {
if((state_val_37744 === (2))){
var inst_37734 = (state_37743[(7)]);
var inst_37734__$1 = (state_37743[(2)]);
var state_37743__$1 = (function (){var statearr_37745 = state_37743;
(statearr_37745[(7)] = inst_37734__$1);

return statearr_37745;
})();
if(cljs.core.truth_(inst_37734__$1)){
var statearr_37746_37932 = state_37743__$1;
(statearr_37746_37932[(1)] = (3));

} else {
var statearr_37747_37933 = state_37743__$1;
(statearr_37747_37933[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37744 === (3))){
var inst_37734 = (state_37743[(7)]);
var inst_37736 = mecca.music.decode(inst_37734);
var state_37743__$1 = state_37743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37743__$1,(6),inst_37736);
} else {
if((state_val_37744 === (4))){
var state_37743__$1 = state_37743;
var statearr_37748_37934 = state_37743__$1;
(statearr_37748_37934[(2)] = null);

(statearr_37748_37934[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37744 === (5))){
var inst_37741 = (state_37743[(2)]);
var state_37743__$1 = state_37743;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37743__$1,inst_37741);
} else {
if((state_val_37744 === (6))){
var inst_37738 = (state_37743[(2)]);
var state_37743__$1 = state_37743;
var statearr_37749_37935 = state_37743__$1;
(statearr_37749_37935[(2)] = inst_37738);

(statearr_37749_37935[(1)] = (5));


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
var mecca$music$get_and_decode_$_state_machine__30218__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__30218__auto____0 = (function (){
var statearr_37750 = [null,null,null,null,null,null,null,null];
(statearr_37750[(0)] = mecca$music$get_and_decode_$_state_machine__30218__auto__);

(statearr_37750[(1)] = (1));

return statearr_37750;
});
var mecca$music$get_and_decode_$_state_machine__30218__auto____1 = (function (state_37743){
while(true){
var ret_value__30219__auto__ = (function (){try{while(true){
var result__30220__auto__ = switch__30217__auto__(state_37743);
if(cljs.core.keyword_identical_QMARK_(result__30220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30220__auto__;
}
break;
}
}catch (e37751){if((e37751 instanceof Object)){
var ex__30221__auto__ = e37751;
var statearr_37752_37936 = state_37743;
(statearr_37752_37936[(5)] = ex__30221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37751;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37937 = state_37743;
state_37743 = G__37937;
continue;
} else {
return ret_value__30219__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__30218__auto__ = function(state_37743){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__30218__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__30218__auto____1.call(this,state_37743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__30218__auto____0;
mecca$music$get_and_decode_$_state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__30218__auto____1;
return mecca$music$get_and_decode_$_state_machine__30218__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_37753 = (f__30530__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30530__auto__.cljs$core$IFn$_invoke$arity$0() : f__30530__auto__.call(null));
(statearr_37753[(6)] = c__30529__auto__);

return statearr_37753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));

return c__30529__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__30529__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30217__auto__ = (function (state_37782){
var state_val_37783 = (state_37782[(1)]);
if((state_val_37783 === (1))){
var inst_37754 = cljs.core.PersistentHashMap.EMPTY;
var inst_37755 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(19));
var inst_37756 = inst_37754;
var inst_37757 = inst_37755;
var state_37782__$1 = (function (){var statearr_37784 = state_37782;
(statearr_37784[(7)] = inst_37757);

(statearr_37784[(8)] = inst_37756);

return statearr_37784;
})();
var statearr_37785_37938 = state_37782__$1;
(statearr_37785_37938[(2)] = null);

(statearr_37785_37938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37783 === (2))){
var inst_37757 = (state_37782[(7)]);
var inst_37759 = cljs.core.first(inst_37757);
var inst_37760 = (inst_37759 == null);
var inst_37761 = cljs.core.not(inst_37760);
var state_37782__$1 = state_37782;
if(inst_37761){
var statearr_37786_37939 = state_37782__$1;
(statearr_37786_37939[(1)] = (4));

} else {
var statearr_37787_37940 = state_37782__$1;
(statearr_37787_37940[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37783 === (3))){
var inst_37780 = (state_37782[(2)]);
var state_37782__$1 = state_37782;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37782__$1,inst_37780);
} else {
if((state_val_37783 === (4))){
var inst_37757 = (state_37782[(7)]);
var inst_37763 = (state_37782[(9)]);
var inst_37763__$1 = cljs.core.first(inst_37757);
var inst_37764 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"sound","sound",-2127407070)];
var inst_37765 = ["/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37763__$1),".mp3"].join('');
var inst_37766 = [inst_37765,inst_37763__$1];
var inst_37767 = cljs.core.PersistentHashMap.fromArrays(inst_37764,inst_37766);
var inst_37768 = mecca.music.get_and_decode(inst_37767);
var state_37782__$1 = (function (){var statearr_37788 = state_37782;
(statearr_37788[(9)] = inst_37763__$1);

return statearr_37788;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37782__$1,(7),inst_37768);
} else {
if((state_val_37783 === (5))){
var inst_37756 = (state_37782[(8)]);
var state_37782__$1 = state_37782;
var statearr_37789_37941 = state_37782__$1;
(statearr_37789_37941[(2)] = inst_37756);

(statearr_37789_37941[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37783 === (6))){
var inst_37778 = (state_37782[(2)]);
var state_37782__$1 = state_37782;
var statearr_37790_37942 = state_37782__$1;
(statearr_37790_37942[(2)] = inst_37778);

(statearr_37790_37942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37783 === (7))){
var inst_37757 = (state_37782[(7)]);
var inst_37763 = (state_37782[(9)]);
var inst_37756 = (state_37782[(8)]);
var inst_37770 = (state_37782[(2)]);
var inst_37771 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_37763], 0));
var inst_37772 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_37770], 0));
var inst_37773 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_37756,inst_37763,inst_37770);
var inst_37774 = cljs.core.rest(inst_37757);
var inst_37756__$1 = inst_37773;
var inst_37757__$1 = inst_37774;
var state_37782__$1 = (function (){var statearr_37791 = state_37782;
(statearr_37791[(10)] = inst_37772);

(statearr_37791[(7)] = inst_37757__$1);

(statearr_37791[(11)] = inst_37771);

(statearr_37791[(8)] = inst_37756__$1);

return statearr_37791;
})();
var statearr_37792_37943 = state_37782__$1;
(statearr_37792_37943[(2)] = null);

(statearr_37792_37943[(1)] = (2));


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
var mecca$music$load_samples_$_state_machine__30218__auto__ = null;
var mecca$music$load_samples_$_state_machine__30218__auto____0 = (function (){
var statearr_37793 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37793[(0)] = mecca$music$load_samples_$_state_machine__30218__auto__);

(statearr_37793[(1)] = (1));

return statearr_37793;
});
var mecca$music$load_samples_$_state_machine__30218__auto____1 = (function (state_37782){
while(true){
var ret_value__30219__auto__ = (function (){try{while(true){
var result__30220__auto__ = switch__30217__auto__(state_37782);
if(cljs.core.keyword_identical_QMARK_(result__30220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30220__auto__;
}
break;
}
}catch (e37794){if((e37794 instanceof Object)){
var ex__30221__auto__ = e37794;
var statearr_37795_37944 = state_37782;
(statearr_37795_37944[(5)] = ex__30221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37794;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37945 = state_37782;
state_37782 = G__37945;
continue;
} else {
return ret_value__30219__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__30218__auto__ = function(state_37782){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__30218__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__30218__auto____1.call(this,state_37782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__30218__auto____0;
mecca$music$load_samples_$_state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__30218__auto____1;
return mecca$music$load_samples_$_state_machine__30218__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_37796 = (f__30530__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30530__auto__.cljs$core$IFn$_invoke$arity$0() : f__30530__auto__.call(null));
(statearr_37796[(6)] = c__30529__auto__);

return statearr_37796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));

return c__30529__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__30529__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30217__auto__ = (function (state_37806){
var state_val_37807 = (state_37806[(1)]);
if((state_val_37807 === (1))){
var inst_37797 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37798 = mecca.music.load_samples();
var state_37806__$1 = (function (){var statearr_37808 = state_37806;
(statearr_37808[(7)] = inst_37797);

return statearr_37808;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37806__$1,(2),inst_37798);
} else {
if((state_val_37807 === (2))){
var inst_37797 = (state_37806[(7)]);
var inst_37800 = (state_37806[(2)]);
var inst_37801 = [new cljs.core.Keyword(null,"load-samples","load-samples",-40877701),inst_37800];
var inst_37802 = (new cljs.core.PersistentVector(null,2,(5),inst_37797,inst_37801,null));
var inst_37803 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_37802) : re_frame.core.dispatch.call(null,inst_37802));
var inst_37804 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_37806__$1 = (function (){var statearr_37809 = state_37806;
(statearr_37809[(8)] = inst_37803);

return statearr_37809;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37806__$1,inst_37804);
} else {
return null;
}
}
});
return (function() {
var mecca$music$state_machine__30218__auto__ = null;
var mecca$music$state_machine__30218__auto____0 = (function (){
var statearr_37810 = [null,null,null,null,null,null,null,null,null];
(statearr_37810[(0)] = mecca$music$state_machine__30218__auto__);

(statearr_37810[(1)] = (1));

return statearr_37810;
});
var mecca$music$state_machine__30218__auto____1 = (function (state_37806){
while(true){
var ret_value__30219__auto__ = (function (){try{while(true){
var result__30220__auto__ = switch__30217__auto__(state_37806);
if(cljs.core.keyword_identical_QMARK_(result__30220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30220__auto__;
}
break;
}
}catch (e37811){if((e37811 instanceof Object)){
var ex__30221__auto__ = e37811;
var statearr_37812_37946 = state_37806;
(statearr_37812_37946[(5)] = ex__30221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37811;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37947 = state_37806;
state_37806 = G__37947;
continue;
} else {
return ret_value__30219__auto__;
}
break;
}
});
mecca$music$state_machine__30218__auto__ = function(state_37806){
switch(arguments.length){
case 0:
return mecca$music$state_machine__30218__auto____0.call(this);
case 1:
return mecca$music$state_machine__30218__auto____1.call(this,state_37806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__30218__auto____0;
mecca$music$state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__30218__auto____1;
return mecca$music$state_machine__30218__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_37818 = (f__30530__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30530__auto__.cljs$core$IFn$_invoke$arity$0() : f__30530__auto__.call(null));
(statearr_37818[(6)] = c__30529__auto__);

return statearr_37818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));

return c__30529__auto__;
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
var context = cljs.core.deref((function (){var G__37822 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37822) : re_frame.core.subscribe.call(null,G__37822));
})());
var samples = (function (){var G__37824 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37824) : re_frame.core.subscribe.call(null,G__37824));
})();
var instrument = (function (){var G__37825 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37825) : re_frame.core.subscribe.call(null,G__37825));
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
var context = (function (){var G__37830 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37830) : re_frame.core.subscribe.call(null,G__37830));
})();
var samples = (function (){var G__37840 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37840) : re_frame.core.subscribe.call(null,G__37840));
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
var context = (function (){var G__37844 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37844) : re_frame.core.subscribe.call(null,G__37844));
})();
var samples = (function (){var G__37849 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37849) : re_frame.core.subscribe.call(null,G__37849));
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__37858_SHARP_){
return (beats + p1__37858_SHARP_);
}));
});
mecca.music.advance_note = (function mecca$music$advance_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__37864_SHARP_){
return (p1__37864_SHARP_ - beats);
}));
});
mecca.music.queue_section = (function mecca$music$queue_section(from,to){
var notes = (function (){var G__37868 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37868) : re_frame.core.subscribe.call(null,G__37868));
})();
var started = (function (){var G__37869 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37869) : re_frame.core.subscribe.call(null,G__37869));
})();
var tempo = (function (){var G__37870 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37870) : re_frame.core.subscribe.call(null,G__37870));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37866_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__37866_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__37866_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37867_SHARP_){
return mecca.music.advance_note(from,p1__37867_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$queue_section_$_iter__37871(s__37872){
return (new cljs.core.LazySeq(null,(function (){
var s__37872__$1 = s__37872;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37872__$1);
if(temp__5735__auto__){
var s__37872__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37872__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37872__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37874 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37873 = (0);
while(true){
if((i__37873 < size__4581__auto__)){
var map__37876 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37873);
var map__37876__$1 = (((((!((map__37876 == null))))?(((((map__37876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37876):map__37876);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37876__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37876__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37876__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__37874,mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))));

var G__37948 = (i__37873 + (1));
i__37873 = G__37948;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37874),mecca$music$queue_section_$_iter__37871(cljs.core.chunk_rest(s__37872__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37874),null);
}
} else {
var map__37878 = cljs.core.first(s__37872__$2);
var map__37878__$1 = (((((!((map__37878 == null))))?(((((map__37878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37878):map__37878);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37878__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37878__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37878__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$queue_section_$_iter__37871(cljs.core.rest(s__37872__$2)));
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
var notes = (function (){var G__37884 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37884) : re_frame.core.subscribe.call(null,G__37884));
})();
var now = cljs.core.deref((function (){var G__37887 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37887) : re_frame.core.subscribe.call(null,G__37887));
})()).currentTime;
var tempo = (function (){var G__37888 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37888) : re_frame.core.subscribe.call(null,G__37888));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37881_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__37881_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__37881_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37882_SHARP_){
return mecca.music.advance_note(from,p1__37882_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$play_section_$_iter__37889(s__37890){
return (new cljs.core.LazySeq(null,(function (){
var s__37890__$1 = s__37890;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37890__$1);
if(temp__5735__auto__){
var s__37890__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37890__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37890__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37892 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37891 = (0);
while(true){
if((i__37891 < size__4581__auto__)){
var map__37893 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37891);
var map__37893__$1 = (((((!((map__37893 == null))))?(((((map__37893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37893):map__37893);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37893__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37893__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37893__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__37892,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__37949 = (i__37891 + (1));
i__37891 = G__37949;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37892),mecca$music$play_section_$_iter__37889(cljs.core.chunk_rest(s__37890__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37892),null);
}
} else {
var map__37896 = cljs.core.first(s__37890__$2);
var map__37896__$1 = (((((!((map__37896 == null))))?(((((map__37896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37896):map__37896);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37896__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37896__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37896__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_section_$_iter__37889(cljs.core.rest(s__37890__$2)));
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
var editor_start = (function (){var G__37902 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37902) : re_frame.core.subscribe.call(null,G__37902));
})();
var tempo = (function (){var G__37904 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37904) : re_frame.core.subscribe.call(null,G__37904));
})();
var beat_length = ((60) / cljs.core.deref((function (){var G__37905 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37905) : re_frame.core.subscribe.call(null,G__37905));
})()));
var play_pos = (((cljs.core.deref(editor_start) < (4)))?cljs.core.deref(editor_start):((4) + cljs.core.deref((function (){var G__37906 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37906) : re_frame.core.subscribe.call(null,G__37906));
})())));
return mecca.music.play_section((play_pos - (1)),((play_pos - (1)) + (n * 0.5)));
});
mecca.music.play_from_here = (function mecca$music$play_from_here(){
var notes = (function (){var G__37912 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37912) : re_frame.core.subscribe.call(null,G__37912));
})();
var editor_start = (function (){var G__37913 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37913) : re_frame.core.subscribe.call(null,G__37913));
})();
var play_pos = cljs.core.deref(editor_start);
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37909_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__37909_SHARP_);
}),cljs.core.deref(notes)));
return mecca.music.play_section((play_pos - (1)),((16) + play_pos));
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = (function (){var G__37915 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37915) : re_frame.core.subscribe.call(null,G__37915));
})();
var now = cljs.core.deref((function (){var G__37916 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37916) : re_frame.core.subscribe.call(null,G__37916));
})()).currentTime;
var tempo = (function (){var G__37917 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37917) : re_frame.core.subscribe.call(null,G__37917));
})();
var G__37918_37950 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37918_37950) : re_frame.core.dispatch.call(null,G__37918_37950));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$play_song_BANG__$_iter__37919(s__37920){
return (new cljs.core.LazySeq(null,(function (){
var s__37920__$1 = s__37920;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37920__$1);
if(temp__5735__auto__){
var s__37920__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37920__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37920__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37922 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37921 = (0);
while(true){
if((i__37921 < size__4581__auto__)){
var map__37924 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37921);
var map__37924__$1 = (((((!((map__37924 == null))))?(((((map__37924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37924):map__37924);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37924__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37924__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37924__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__37922,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__37951 = (i__37921 + (1));
i__37921 = G__37951;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37922),mecca$music$play_song_BANG__$_iter__37919(cljs.core.chunk_rest(s__37920__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37922),null);
}
} else {
var map__37926 = cljs.core.first(s__37920__$2);
var map__37926__$1 = (((((!((map__37926 == null))))?(((((map__37926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37926):map__37926);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37926__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37926__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37926__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__37919(cljs.core.rest(s__37920__$2)));
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
