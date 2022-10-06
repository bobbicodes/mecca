goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.core');
mecca.music.mario_jump = (function mecca$music$mario_jump(){
var beat = (function (){var G__37772 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37772) : re_frame.core.subscribe.call(null,G__37772));
})();
var notes = (function (){var G__37773 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37773) : re_frame.core.subscribe.call(null,G__37773));
})();
var jump = (function (){var G__37774 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37774) : re_frame.core.subscribe.call(null,G__37774));
})();
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.deref((function (){var G__37777 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37777) : re_frame.core.subscribe.call(null,G__37777));
})());
if(cljs.core.truth_(and__4174__auto__)){
return (cljs.core.deref(jump) === (0));
} else {
return and__4174__auto__;
}
})())){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37770_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__37770_SHARP_),(cljs.core.deref(beat) + (1)));
}),cljs.core.deref(notes))))){
var G__37778 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump!","jump!",-1168155200)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37778) : re_frame.core.dispatch.call(null,G__37778));
} else {
return null;
}
} else {
return null;
}
});
mecca.music.mario_move = (function mecca$music$mario_move(){
var notes = (function (){var G__37780 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37780) : re_frame.core.subscribe.call(null,G__37780));
})();
var playing_QMARK_ = cljs.core.deref((function (){var G__37781 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37781) : re_frame.core.subscribe.call(null,G__37781));
})());
var now = cljs.core.deref((function (){var G__37782 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37782) : re_frame.core.subscribe.call(null,G__37782));
})()).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37779_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__37779_SHARP_);
}),cljs.core.deref(notes)));
var started = (function (){var G__37783 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37783) : re_frame.core.subscribe.call(null,G__37783));
})();
var elapsed = (now - cljs.core.deref(started));
var beat_length = ((60) / cljs.core.deref((function (){var G__37784 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37784) : re_frame.core.subscribe.call(null,G__37784));
})()));
var end_time = (cljs.core.deref(started) + (beat_length * (4)));
var current_beat = (elapsed / beat_length);
var last_drawn_pos = (function (){var G__37785 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37785) : re_frame.core.subscribe.call(null,G__37785));
})();
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
var G__37786_37974 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-off","play-off",2116693509)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37786_37974) : re_frame.core.dispatch.call(null,G__37786_37974));
} else {
if((cljs.core.deref(last_drawn_pos) < current_beat)){
var G__37787_37977 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-mario","move-mario",-317739908)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37787_37977) : re_frame.core.dispatch.call(null,G__37787_37977));

var G__37788_37978 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-position","advance-position",-23796893)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37788_37978) : re_frame.core.dispatch.call(null,G__37788_37978));
} else {
}
}
} else {
}

return mecca.music.mario_jump();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__37789_37981 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick!","tick!",68058958)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37789_37981) : re_frame.core.dispatch.call(null,G__37789_37981));

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
cljs.core.deref((function (){var G__37790 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37790) : re_frame.core.subscribe.call(null,G__37790));
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
var source = cljs.core.deref((function (){var G__37791 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37791) : re_frame.core.subscribe.call(null,G__37791));
})()).createBufferSource();
(source.buffer = buffer);

return source;
});
mecca.music.get_and_decode = (function mecca$music$get_and_decode(named_url){
var c__29726__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29727__auto__ = (function (){var switch__29479__auto__ = (function (state_37803){
var state_val_37804 = (state_37803[(1)]);
if((state_val_37804 === (1))){
var inst_37792 = mecca.music.load_sound(named_url);
var state_37803__$1 = state_37803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37803__$1,(2),inst_37792);
} else {
if((state_val_37804 === (2))){
var inst_37794 = (state_37803[(7)]);
var inst_37794__$1 = (state_37803[(2)]);
var state_37803__$1 = (function (){var statearr_37805 = state_37803;
(statearr_37805[(7)] = inst_37794__$1);

return statearr_37805;
})();
if(cljs.core.truth_(inst_37794__$1)){
var statearr_37806_37994 = state_37803__$1;
(statearr_37806_37994[(1)] = (3));

} else {
var statearr_37807_37995 = state_37803__$1;
(statearr_37807_37995[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37804 === (3))){
var inst_37794 = (state_37803[(7)]);
var inst_37796 = mecca.music.decode(inst_37794);
var state_37803__$1 = state_37803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37803__$1,(6),inst_37796);
} else {
if((state_val_37804 === (4))){
var state_37803__$1 = state_37803;
var statearr_37808_37996 = state_37803__$1;
(statearr_37808_37996[(2)] = null);

(statearr_37808_37996[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37804 === (5))){
var inst_37801 = (state_37803[(2)]);
var state_37803__$1 = state_37803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37803__$1,inst_37801);
} else {
if((state_val_37804 === (6))){
var inst_37798 = (state_37803[(2)]);
var state_37803__$1 = state_37803;
var statearr_37809_37997 = state_37803__$1;
(statearr_37809_37997[(2)] = inst_37798);

(statearr_37809_37997[(1)] = (5));


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
var mecca$music$get_and_decode_$_state_machine__29480__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__29480__auto____0 = (function (){
var statearr_37810 = [null,null,null,null,null,null,null,null];
(statearr_37810[(0)] = mecca$music$get_and_decode_$_state_machine__29480__auto__);

(statearr_37810[(1)] = (1));

return statearr_37810;
});
var mecca$music$get_and_decode_$_state_machine__29480__auto____1 = (function (state_37803){
while(true){
var ret_value__29481__auto__ = (function (){try{while(true){
var result__29482__auto__ = switch__29479__auto__(state_37803);
if(cljs.core.keyword_identical_QMARK_(result__29482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29482__auto__;
}
break;
}
}catch (e37811){if((e37811 instanceof Object)){
var ex__29483__auto__ = e37811;
var statearr_37812_37998 = state_37803;
(statearr_37812_37998[(5)] = ex__29483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37811;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37999 = state_37803;
state_37803 = G__37999;
continue;
} else {
return ret_value__29481__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__29480__auto__ = function(state_37803){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__29480__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__29480__auto____1.call(this,state_37803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__29480__auto____0;
mecca$music$get_and_decode_$_state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__29480__auto____1;
return mecca$music$get_and_decode_$_state_machine__29480__auto__;
})()
})();
var state__29728__auto__ = (function (){var statearr_37813 = (f__29727__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29727__auto__.cljs$core$IFn$_invoke$arity$0() : f__29727__auto__.call(null));
(statearr_37813[(6)] = c__29726__auto__);

return statearr_37813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29728__auto__);
}));

return c__29726__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__29726__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29727__auto__ = (function (){var switch__29479__auto__ = (function (state_37842){
var state_val_37843 = (state_37842[(1)]);
if((state_val_37843 === (1))){
var inst_37814 = cljs.core.PersistentHashMap.EMPTY;
var inst_37815 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(19));
var inst_37816 = inst_37814;
var inst_37817 = inst_37815;
var state_37842__$1 = (function (){var statearr_37844 = state_37842;
(statearr_37844[(7)] = inst_37817);

(statearr_37844[(8)] = inst_37816);

return statearr_37844;
})();
var statearr_37845_38000 = state_37842__$1;
(statearr_37845_38000[(2)] = null);

(statearr_37845_38000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (2))){
var inst_37817 = (state_37842[(7)]);
var inst_37819 = cljs.core.first(inst_37817);
var inst_37820 = (inst_37819 == null);
var inst_37821 = cljs.core.not(inst_37820);
var state_37842__$1 = state_37842;
if(inst_37821){
var statearr_37846_38001 = state_37842__$1;
(statearr_37846_38001[(1)] = (4));

} else {
var statearr_37847_38002 = state_37842__$1;
(statearr_37847_38002[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (3))){
var inst_37840 = (state_37842[(2)]);
var state_37842__$1 = state_37842;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37842__$1,inst_37840);
} else {
if((state_val_37843 === (4))){
var inst_37817 = (state_37842[(7)]);
var inst_37823 = (state_37842[(9)]);
var inst_37823__$1 = cljs.core.first(inst_37817);
var inst_37824 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"sound","sound",-2127407070)];
var inst_37825 = ["/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37823__$1),".mp3"].join('');
var inst_37826 = [inst_37825,inst_37823__$1];
var inst_37827 = cljs.core.PersistentHashMap.fromArrays(inst_37824,inst_37826);
var inst_37828 = mecca.music.get_and_decode(inst_37827);
var state_37842__$1 = (function (){var statearr_37848 = state_37842;
(statearr_37848[(9)] = inst_37823__$1);

return statearr_37848;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37842__$1,(7),inst_37828);
} else {
if((state_val_37843 === (5))){
var inst_37816 = (state_37842[(8)]);
var state_37842__$1 = state_37842;
var statearr_37851_38003 = state_37842__$1;
(statearr_37851_38003[(2)] = inst_37816);

(statearr_37851_38003[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (6))){
var inst_37838 = (state_37842[(2)]);
var state_37842__$1 = state_37842;
var statearr_37852_38004 = state_37842__$1;
(statearr_37852_38004[(2)] = inst_37838);

(statearr_37852_38004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37843 === (7))){
var inst_37817 = (state_37842[(7)]);
var inst_37816 = (state_37842[(8)]);
var inst_37823 = (state_37842[(9)]);
var inst_37830 = (state_37842[(2)]);
var inst_37831 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_37823], 0));
var inst_37832 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_37830], 0));
var inst_37833 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_37816,inst_37823,inst_37830);
var inst_37834 = cljs.core.rest(inst_37817);
var inst_37816__$1 = inst_37833;
var inst_37817__$1 = inst_37834;
var state_37842__$1 = (function (){var statearr_37853 = state_37842;
(statearr_37853[(7)] = inst_37817__$1);

(statearr_37853[(8)] = inst_37816__$1);

(statearr_37853[(10)] = inst_37831);

(statearr_37853[(11)] = inst_37832);

return statearr_37853;
})();
var statearr_37854_38005 = state_37842__$1;
(statearr_37854_38005[(2)] = null);

(statearr_37854_38005[(1)] = (2));


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
var mecca$music$load_samples_$_state_machine__29480__auto__ = null;
var mecca$music$load_samples_$_state_machine__29480__auto____0 = (function (){
var statearr_37855 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37855[(0)] = mecca$music$load_samples_$_state_machine__29480__auto__);

(statearr_37855[(1)] = (1));

return statearr_37855;
});
var mecca$music$load_samples_$_state_machine__29480__auto____1 = (function (state_37842){
while(true){
var ret_value__29481__auto__ = (function (){try{while(true){
var result__29482__auto__ = switch__29479__auto__(state_37842);
if(cljs.core.keyword_identical_QMARK_(result__29482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29482__auto__;
}
break;
}
}catch (e37856){if((e37856 instanceof Object)){
var ex__29483__auto__ = e37856;
var statearr_37857_38010 = state_37842;
(statearr_37857_38010[(5)] = ex__29483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37856;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38027 = state_37842;
state_37842 = G__38027;
continue;
} else {
return ret_value__29481__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__29480__auto__ = function(state_37842){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__29480__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__29480__auto____1.call(this,state_37842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__29480__auto____0;
mecca$music$load_samples_$_state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__29480__auto____1;
return mecca$music$load_samples_$_state_machine__29480__auto__;
})()
})();
var state__29728__auto__ = (function (){var statearr_37858 = (f__29727__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29727__auto__.cljs$core$IFn$_invoke$arity$0() : f__29727__auto__.call(null));
(statearr_37858[(6)] = c__29726__auto__);

return statearr_37858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29728__auto__);
}));

return c__29726__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__29726__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29727__auto__ = (function (){var switch__29479__auto__ = (function (state_37868){
var state_val_37869 = (state_37868[(1)]);
if((state_val_37869 === (1))){
var inst_37859 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37860 = mecca.music.load_samples();
var state_37868__$1 = (function (){var statearr_37870 = state_37868;
(statearr_37870[(7)] = inst_37859);

return statearr_37870;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37868__$1,(2),inst_37860);
} else {
if((state_val_37869 === (2))){
var inst_37859 = (state_37868[(7)]);
var inst_37862 = (state_37868[(2)]);
var inst_37863 = [new cljs.core.Keyword(null,"load-samples","load-samples",-40877701),inst_37862];
var inst_37864 = (new cljs.core.PersistentVector(null,2,(5),inst_37859,inst_37863,null));
var inst_37865 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_37864) : re_frame.core.dispatch.call(null,inst_37864));
var inst_37866 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_37868__$1 = (function (){var statearr_37871 = state_37868;
(statearr_37871[(8)] = inst_37865);

return statearr_37871;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37868__$1,inst_37866);
} else {
return null;
}
}
});
return (function() {
var mecca$music$state_machine__29480__auto__ = null;
var mecca$music$state_machine__29480__auto____0 = (function (){
var statearr_37872 = [null,null,null,null,null,null,null,null,null];
(statearr_37872[(0)] = mecca$music$state_machine__29480__auto__);

(statearr_37872[(1)] = (1));

return statearr_37872;
});
var mecca$music$state_machine__29480__auto____1 = (function (state_37868){
while(true){
var ret_value__29481__auto__ = (function (){try{while(true){
var result__29482__auto__ = switch__29479__auto__(state_37868);
if(cljs.core.keyword_identical_QMARK_(result__29482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29482__auto__;
}
break;
}
}catch (e37873){if((e37873 instanceof Object)){
var ex__29483__auto__ = e37873;
var statearr_37874_38042 = state_37868;
(statearr_37874_38042[(5)] = ex__29483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37873;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38045 = state_37868;
state_37868 = G__38045;
continue;
} else {
return ret_value__29481__auto__;
}
break;
}
});
mecca$music$state_machine__29480__auto__ = function(state_37868){
switch(arguments.length){
case 0:
return mecca$music$state_machine__29480__auto____0.call(this);
case 1:
return mecca$music$state_machine__29480__auto____1.call(this,state_37868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__29480__auto____0;
mecca$music$state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__29480__auto____1;
return mecca$music$state_machine__29480__auto__;
})()
})();
var state__29728__auto__ = (function (){var statearr_37875 = (f__29727__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29727__auto__.cljs$core$IFn$_invoke$arity$0() : f__29727__auto__.call(null));
(statearr_37875[(6)] = c__29726__auto__);

return statearr_37875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29728__auto__);
}));

return c__29726__auto__;
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
var context = cljs.core.deref((function (){var G__37876 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37876) : re_frame.core.subscribe.call(null,G__37876));
})());
var samples = (function (){var G__37877 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37877) : re_frame.core.subscribe.call(null,G__37877));
})();
var instrument = (function (){var G__37878 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37878) : re_frame.core.subscribe.call(null,G__37878));
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
var context = (function (){var G__37879 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37879) : re_frame.core.subscribe.call(null,G__37879));
})();
var samples = (function (){var G__37880 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37880) : re_frame.core.subscribe.call(null,G__37880));
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
var context = (function (){var G__37881 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37881) : re_frame.core.subscribe.call(null,G__37881));
})();
var samples = (function (){var G__37882 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37882) : re_frame.core.subscribe.call(null,G__37882));
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__37883_SHARP_){
return (beats + p1__37883_SHARP_);
}));
});
mecca.music.advance_note = (function mecca$music$advance_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__37884_SHARP_){
return (p1__37884_SHARP_ - beats);
}));
});
mecca.music.queue_section = (function mecca$music$queue_section(from,to){
var notes = (function (){var G__37887 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37887) : re_frame.core.subscribe.call(null,G__37887));
})();
var started = (function (){var G__37888 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37888) : re_frame.core.subscribe.call(null,G__37888));
})();
var tempo = (function (){var G__37889 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37889) : re_frame.core.subscribe.call(null,G__37889));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37885_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__37885_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__37885_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37886_SHARP_){
return mecca.music.advance_note(from,p1__37886_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$queue_section_$_iter__37890(s__37891){
return (new cljs.core.LazySeq(null,(function (){
var s__37891__$1 = s__37891;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37891__$1);
if(temp__5735__auto__){
var s__37891__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37891__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37891__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37893 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37892 = (0);
while(true){
if((i__37892 < size__4581__auto__)){
var map__37894 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37892);
var map__37894__$1 = (((((!((map__37894 == null))))?(((((map__37894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37894):map__37894);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37894__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37894__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37894__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__37893,mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))));

var G__38066 = (i__37892 + (1));
i__37892 = G__38066;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37893),mecca$music$queue_section_$_iter__37890(cljs.core.chunk_rest(s__37891__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37893),null);
}
} else {
var map__37896 = cljs.core.first(s__37891__$2);
var map__37896__$1 = (((((!((map__37896 == null))))?(((((map__37896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37896):map__37896);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37896__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37896__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37896__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$queue_section_$_iter__37890(cljs.core.rest(s__37891__$2)));
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
var notes = (function (){var G__37900 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37900) : re_frame.core.subscribe.call(null,G__37900));
})();
var now = cljs.core.deref((function (){var G__37901 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37901) : re_frame.core.subscribe.call(null,G__37901));
})()).currentTime;
var tempo = (function (){var G__37902 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37902) : re_frame.core.subscribe.call(null,G__37902));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37898_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__37898_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__37898_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37899_SHARP_){
return mecca.music.advance_note(from,p1__37899_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$play_section_$_iter__37903(s__37904){
return (new cljs.core.LazySeq(null,(function (){
var s__37904__$1 = s__37904;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37904__$1);
if(temp__5735__auto__){
var s__37904__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37904__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37904__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37906 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37905 = (0);
while(true){
if((i__37905 < size__4581__auto__)){
var map__37907 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37905);
var map__37907__$1 = (((((!((map__37907 == null))))?(((((map__37907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37907):map__37907);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37907__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37907__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37907__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__37906,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__38067 = (i__37905 + (1));
i__37905 = G__38067;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37906),mecca$music$play_section_$_iter__37903(cljs.core.chunk_rest(s__37904__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37906),null);
}
} else {
var map__37909 = cljs.core.first(s__37904__$2);
var map__37909__$1 = (((((!((map__37909 == null))))?(((((map__37909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37909):map__37909);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37909__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37909__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37909__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_section_$_iter__37903(cljs.core.rest(s__37904__$2)));
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
var editor_start = (function (){var G__37911 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37911) : re_frame.core.subscribe.call(null,G__37911));
})();
var tempo = (function (){var G__37912 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37912) : re_frame.core.subscribe.call(null,G__37912));
})();
var beat_length = ((60) / cljs.core.deref((function (){var G__37913 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37913) : re_frame.core.subscribe.call(null,G__37913));
})()));
var play_pos = (((cljs.core.deref(editor_start) < (4)))?cljs.core.deref(editor_start):((4) + cljs.core.deref((function (){var G__37916 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37916) : re_frame.core.subscribe.call(null,G__37916));
})())));
return mecca.music.play_section((play_pos - (1)),((play_pos - (1)) + (n * 0.5)));
});
mecca.music.play_from_here = (function mecca$music$play_from_here(){
var notes = (function (){var G__37922 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37922) : re_frame.core.subscribe.call(null,G__37922));
})();
var editor_start = (function (){var G__37925 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37925) : re_frame.core.subscribe.call(null,G__37925));
})();
var play_pos = cljs.core.deref(editor_start);
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37919_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__37919_SHARP_);
}),cljs.core.deref(notes)));
return mecca.music.play_section((play_pos - (1)),((16) + play_pos));
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = (function (){var G__37930 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37930) : re_frame.core.subscribe.call(null,G__37930));
})();
var now = cljs.core.deref((function (){var G__37931 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37931) : re_frame.core.subscribe.call(null,G__37931));
})()).currentTime;
var tempo = (function (){var G__37932 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37932) : re_frame.core.subscribe.call(null,G__37932));
})();
var G__37933_38068 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37933_38068) : re_frame.core.dispatch.call(null,G__37933_38068));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$play_song_BANG__$_iter__37936(s__37937){
return (new cljs.core.LazySeq(null,(function (){
var s__37937__$1 = s__37937;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37937__$1);
if(temp__5735__auto__){
var s__37937__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37937__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37937__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37939 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37938 = (0);
while(true){
if((i__37938 < size__4581__auto__)){
var map__37944 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37938);
var map__37944__$1 = (((((!((map__37944 == null))))?(((((map__37944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37944):map__37944);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37944__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37944__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37944__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__37939,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__38069 = (i__37938 + (1));
i__37938 = G__38069;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37939),mecca$music$play_song_BANG__$_iter__37936(cljs.core.chunk_rest(s__37937__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37939),null);
}
} else {
var map__37952 = cljs.core.first(s__37937__$2);
var map__37952__$1 = (((((!((map__37952 == null))))?(((((map__37952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37952):map__37952);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37952__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37952__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37952__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__37936(cljs.core.rest(s__37937__$2)));
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
