goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.core');
mecca.music.mario_jump = (function mecca$music$mario_jump(){
var beat = (function (){var G__37770 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37770) : re_frame.core.subscribe.call(null,G__37770));
})();
var notes = (function (){var G__37771 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37771) : re_frame.core.subscribe.call(null,G__37771));
})();
var jump = (function (){var G__37772 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37772) : re_frame.core.subscribe.call(null,G__37772));
})();
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.deref((function (){var G__37775 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37775) : re_frame.core.subscribe.call(null,G__37775));
})());
if(cljs.core.truth_(and__4174__auto__)){
return (cljs.core.deref(jump) === (0));
} else {
return and__4174__auto__;
}
})())){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37769_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__37769_SHARP_),(cljs.core.deref(beat) + (1)));
}),cljs.core.deref(notes))))){
var G__37776 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump!","jump!",-1168155200)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37776) : re_frame.core.dispatch.call(null,G__37776));
} else {
return null;
}
} else {
return null;
}
});
mecca.music.mario_move = (function mecca$music$mario_move(){
var notes = (function (){var G__37797 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37797) : re_frame.core.subscribe.call(null,G__37797));
})();
var playing_QMARK_ = cljs.core.deref((function (){var G__37798 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37798) : re_frame.core.subscribe.call(null,G__37798));
})());
var now = cljs.core.deref((function (){var G__37799 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37799) : re_frame.core.subscribe.call(null,G__37799));
})()).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37796_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__37796_SHARP_);
}),cljs.core.deref(notes)));
var started = (function (){var G__37800 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37800) : re_frame.core.subscribe.call(null,G__37800));
})();
var elapsed = (now - cljs.core.deref(started));
var beat_length = ((60) / cljs.core.deref((function (){var G__37801 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37801) : re_frame.core.subscribe.call(null,G__37801));
})()));
var end_time = (cljs.core.deref(started) + (beat_length * (4)));
var current_beat = (elapsed / beat_length);
var last_drawn_pos = (function (){var G__37802 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37802) : re_frame.core.subscribe.call(null,G__37802));
})();
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
var G__37803_37947 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-off","play-off",2116693509)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37803_37947) : re_frame.core.dispatch.call(null,G__37803_37947));
} else {
if((cljs.core.deref(last_drawn_pos) < current_beat)){
var G__37804_37948 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-mario","move-mario",-317739908)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37804_37948) : re_frame.core.dispatch.call(null,G__37804_37948));

var G__37805_37949 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-position","advance-position",-23796893)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37805_37949) : re_frame.core.dispatch.call(null,G__37805_37949));
} else {
}
}
} else {
}

return mecca.music.mario_jump();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__37806_37950 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick!","tick!",68058958)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37806_37950) : re_frame.core.dispatch.call(null,G__37806_37950));

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
cljs.core.deref((function (){var G__37807 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37807) : re_frame.core.subscribe.call(null,G__37807));
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
var source = cljs.core.deref((function (){var G__37808 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37808) : re_frame.core.subscribe.call(null,G__37808));
})()).createBufferSource();
(source.buffer = buffer);

return source;
});
mecca.music.get_and_decode = (function mecca$music$get_and_decode(named_url){
var c__29967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29968__auto__ = (function (){var switch__29657__auto__ = (function (state_37820){
var state_val_37821 = (state_37820[(1)]);
if((state_val_37821 === (1))){
var inst_37809 = mecca.music.load_sound(named_url);
var state_37820__$1 = state_37820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37820__$1,(2),inst_37809);
} else {
if((state_val_37821 === (2))){
var inst_37811 = (state_37820[(7)]);
var inst_37811__$1 = (state_37820[(2)]);
var state_37820__$1 = (function (){var statearr_37822 = state_37820;
(statearr_37822[(7)] = inst_37811__$1);

return statearr_37822;
})();
if(cljs.core.truth_(inst_37811__$1)){
var statearr_37823_37951 = state_37820__$1;
(statearr_37823_37951[(1)] = (3));

} else {
var statearr_37824_37952 = state_37820__$1;
(statearr_37824_37952[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37821 === (3))){
var inst_37811 = (state_37820[(7)]);
var inst_37813 = mecca.music.decode(inst_37811);
var state_37820__$1 = state_37820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37820__$1,(6),inst_37813);
} else {
if((state_val_37821 === (4))){
var state_37820__$1 = state_37820;
var statearr_37825_37953 = state_37820__$1;
(statearr_37825_37953[(2)] = null);

(statearr_37825_37953[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37821 === (5))){
var inst_37818 = (state_37820[(2)]);
var state_37820__$1 = state_37820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37820__$1,inst_37818);
} else {
if((state_val_37821 === (6))){
var inst_37815 = (state_37820[(2)]);
var state_37820__$1 = state_37820;
var statearr_37826_37954 = state_37820__$1;
(statearr_37826_37954[(2)] = inst_37815);

(statearr_37826_37954[(1)] = (5));


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
var mecca$music$get_and_decode_$_state_machine__29658__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__29658__auto____0 = (function (){
var statearr_37827 = [null,null,null,null,null,null,null,null];
(statearr_37827[(0)] = mecca$music$get_and_decode_$_state_machine__29658__auto__);

(statearr_37827[(1)] = (1));

return statearr_37827;
});
var mecca$music$get_and_decode_$_state_machine__29658__auto____1 = (function (state_37820){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__(state_37820);
if(cljs.core.keyword_identical_QMARK_(result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e37828){if((e37828 instanceof Object)){
var ex__29661__auto__ = e37828;
var statearr_37829_37955 = state_37820;
(statearr_37829_37955[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37828;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37956 = state_37820;
state_37820 = G__37956;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__29658__auto__ = function(state_37820){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__29658__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__29658__auto____1.call(this,state_37820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__29658__auto____0;
mecca$music$get_and_decode_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__29658__auto____1;
return mecca$music$get_and_decode_$_state_machine__29658__auto__;
})()
})();
var state__29969__auto__ = (function (){var statearr_37830 = (f__29968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29968__auto__.cljs$core$IFn$_invoke$arity$0() : f__29968__auto__.call(null));
(statearr_37830[(6)] = c__29967__auto__);

return statearr_37830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29969__auto__);
}));

return c__29967__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__29967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29968__auto__ = (function (){var switch__29657__auto__ = (function (state_37859){
var state_val_37860 = (state_37859[(1)]);
if((state_val_37860 === (1))){
var inst_37831 = cljs.core.PersistentHashMap.EMPTY;
var inst_37832 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(19));
var inst_37833 = inst_37831;
var inst_37834 = inst_37832;
var state_37859__$1 = (function (){var statearr_37861 = state_37859;
(statearr_37861[(7)] = inst_37833);

(statearr_37861[(8)] = inst_37834);

return statearr_37861;
})();
var statearr_37862_37957 = state_37859__$1;
(statearr_37862_37957[(2)] = null);

(statearr_37862_37957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37860 === (2))){
var inst_37834 = (state_37859[(8)]);
var inst_37836 = cljs.core.first(inst_37834);
var inst_37837 = (inst_37836 == null);
var inst_37838 = cljs.core.not(inst_37837);
var state_37859__$1 = state_37859;
if(inst_37838){
var statearr_37863_37958 = state_37859__$1;
(statearr_37863_37958[(1)] = (4));

} else {
var statearr_37864_37959 = state_37859__$1;
(statearr_37864_37959[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37860 === (3))){
var inst_37857 = (state_37859[(2)]);
var state_37859__$1 = state_37859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37859__$1,inst_37857);
} else {
if((state_val_37860 === (4))){
var inst_37834 = (state_37859[(8)]);
var inst_37840 = (state_37859[(9)]);
var inst_37840__$1 = cljs.core.first(inst_37834);
var inst_37841 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"sound","sound",-2127407070)];
var inst_37842 = ["/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37840__$1),".mp3"].join('');
var inst_37843 = [inst_37842,inst_37840__$1];
var inst_37844 = cljs.core.PersistentHashMap.fromArrays(inst_37841,inst_37843);
var inst_37845 = mecca.music.get_and_decode(inst_37844);
var state_37859__$1 = (function (){var statearr_37865 = state_37859;
(statearr_37865[(9)] = inst_37840__$1);

return statearr_37865;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37859__$1,(7),inst_37845);
} else {
if((state_val_37860 === (5))){
var inst_37833 = (state_37859[(7)]);
var state_37859__$1 = state_37859;
var statearr_37866_37960 = state_37859__$1;
(statearr_37866_37960[(2)] = inst_37833);

(statearr_37866_37960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37860 === (6))){
var inst_37855 = (state_37859[(2)]);
var state_37859__$1 = state_37859;
var statearr_37867_37961 = state_37859__$1;
(statearr_37867_37961[(2)] = inst_37855);

(statearr_37867_37961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37860 === (7))){
var inst_37833 = (state_37859[(7)]);
var inst_37834 = (state_37859[(8)]);
var inst_37840 = (state_37859[(9)]);
var inst_37847 = (state_37859[(2)]);
var inst_37848 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_37840], 0));
var inst_37849 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_37847], 0));
var inst_37850 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_37833,inst_37840,inst_37847);
var inst_37851 = cljs.core.rest(inst_37834);
var inst_37833__$1 = inst_37850;
var inst_37834__$1 = inst_37851;
var state_37859__$1 = (function (){var statearr_37868 = state_37859;
(statearr_37868[(7)] = inst_37833__$1);

(statearr_37868[(10)] = inst_37849);

(statearr_37868[(8)] = inst_37834__$1);

(statearr_37868[(11)] = inst_37848);

return statearr_37868;
})();
var statearr_37869_37962 = state_37859__$1;
(statearr_37869_37962[(2)] = null);

(statearr_37869_37962[(1)] = (2));


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
var mecca$music$load_samples_$_state_machine__29658__auto__ = null;
var mecca$music$load_samples_$_state_machine__29658__auto____0 = (function (){
var statearr_37870 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37870[(0)] = mecca$music$load_samples_$_state_machine__29658__auto__);

(statearr_37870[(1)] = (1));

return statearr_37870;
});
var mecca$music$load_samples_$_state_machine__29658__auto____1 = (function (state_37859){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__(state_37859);
if(cljs.core.keyword_identical_QMARK_(result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e37871){if((e37871 instanceof Object)){
var ex__29661__auto__ = e37871;
var statearr_37872_37963 = state_37859;
(statearr_37872_37963[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37871;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37964 = state_37859;
state_37859 = G__37964;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__29658__auto__ = function(state_37859){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__29658__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__29658__auto____1.call(this,state_37859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__29658__auto____0;
mecca$music$load_samples_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__29658__auto____1;
return mecca$music$load_samples_$_state_machine__29658__auto__;
})()
})();
var state__29969__auto__ = (function (){var statearr_37873 = (f__29968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29968__auto__.cljs$core$IFn$_invoke$arity$0() : f__29968__auto__.call(null));
(statearr_37873[(6)] = c__29967__auto__);

return statearr_37873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29969__auto__);
}));

return c__29967__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__29967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29968__auto__ = (function (){var switch__29657__auto__ = (function (state_37883){
var state_val_37884 = (state_37883[(1)]);
if((state_val_37884 === (1))){
var inst_37874 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37875 = mecca.music.load_samples();
var state_37883__$1 = (function (){var statearr_37885 = state_37883;
(statearr_37885[(7)] = inst_37874);

return statearr_37885;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37883__$1,(2),inst_37875);
} else {
if((state_val_37884 === (2))){
var inst_37874 = (state_37883[(7)]);
var inst_37877 = (state_37883[(2)]);
var inst_37878 = [new cljs.core.Keyword(null,"load-samples","load-samples",-40877701),inst_37877];
var inst_37879 = (new cljs.core.PersistentVector(null,2,(5),inst_37874,inst_37878,null));
var inst_37880 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_37879) : re_frame.core.dispatch.call(null,inst_37879));
var inst_37881 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_37883__$1 = (function (){var statearr_37886 = state_37883;
(statearr_37886[(8)] = inst_37880);

return statearr_37886;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37883__$1,inst_37881);
} else {
return null;
}
}
});
return (function() {
var mecca$music$state_machine__29658__auto__ = null;
var mecca$music$state_machine__29658__auto____0 = (function (){
var statearr_37887 = [null,null,null,null,null,null,null,null,null];
(statearr_37887[(0)] = mecca$music$state_machine__29658__auto__);

(statearr_37887[(1)] = (1));

return statearr_37887;
});
var mecca$music$state_machine__29658__auto____1 = (function (state_37883){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__(state_37883);
if(cljs.core.keyword_identical_QMARK_(result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e37888){if((e37888 instanceof Object)){
var ex__29661__auto__ = e37888;
var statearr_37889_37965 = state_37883;
(statearr_37889_37965[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37888;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37966 = state_37883;
state_37883 = G__37966;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
mecca$music$state_machine__29658__auto__ = function(state_37883){
switch(arguments.length){
case 0:
return mecca$music$state_machine__29658__auto____0.call(this);
case 1:
return mecca$music$state_machine__29658__auto____1.call(this,state_37883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__29658__auto____0;
mecca$music$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__29658__auto____1;
return mecca$music$state_machine__29658__auto__;
})()
})();
var state__29969__auto__ = (function (){var statearr_37890 = (f__29968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29968__auto__.cljs$core$IFn$_invoke$arity$0() : f__29968__auto__.call(null));
(statearr_37890[(6)] = c__29967__auto__);

return statearr_37890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29969__auto__);
}));

return c__29967__auto__;
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
var context = cljs.core.deref((function (){var G__37891 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37891) : re_frame.core.subscribe.call(null,G__37891));
})());
var samples = (function (){var G__37892 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37892) : re_frame.core.subscribe.call(null,G__37892));
})();
var instrument = (function (){var G__37893 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37893) : re_frame.core.subscribe.call(null,G__37893));
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
var context = (function (){var G__37894 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37894) : re_frame.core.subscribe.call(null,G__37894));
})();
var samples = (function (){var G__37895 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37895) : re_frame.core.subscribe.call(null,G__37895));
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
var context = (function (){var G__37896 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37896) : re_frame.core.subscribe.call(null,G__37896));
})();
var samples = (function (){var G__37897 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37897) : re_frame.core.subscribe.call(null,G__37897));
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__37898_SHARP_){
return (beats + p1__37898_SHARP_);
}));
});
mecca.music.advance_note = (function mecca$music$advance_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__37899_SHARP_){
return (p1__37899_SHARP_ - beats);
}));
});
mecca.music.queue_section = (function mecca$music$queue_section(from,to){
var notes = (function (){var G__37902 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37902) : re_frame.core.subscribe.call(null,G__37902));
})();
var started = (function (){var G__37903 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37903) : re_frame.core.subscribe.call(null,G__37903));
})();
var tempo = (function (){var G__37904 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37904) : re_frame.core.subscribe.call(null,G__37904));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37900_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__37900_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__37900_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37901_SHARP_){
return mecca.music.advance_note(from,p1__37901_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$queue_section_$_iter__37905(s__37906){
return (new cljs.core.LazySeq(null,(function (){
var s__37906__$1 = s__37906;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37906__$1);
if(temp__5735__auto__){
var s__37906__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37906__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37906__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37908 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37907 = (0);
while(true){
if((i__37907 < size__4581__auto__)){
var map__37909 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37907);
var map__37909__$1 = (((((!((map__37909 == null))))?(((((map__37909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37909):map__37909);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37909__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37909__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37909__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__37908,mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))));

var G__37967 = (i__37907 + (1));
i__37907 = G__37967;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37908),mecca$music$queue_section_$_iter__37905(cljs.core.chunk_rest(s__37906__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37908),null);
}
} else {
var map__37911 = cljs.core.first(s__37906__$2);
var map__37911__$1 = (((((!((map__37911 == null))))?(((((map__37911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37911):map__37911);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37911__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37911__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37911__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$queue_section_$_iter__37905(cljs.core.rest(s__37906__$2)));
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
var notes = (function (){var G__37915 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37915) : re_frame.core.subscribe.call(null,G__37915));
})();
var now = cljs.core.deref((function (){var G__37916 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37916) : re_frame.core.subscribe.call(null,G__37916));
})()).currentTime;
var tempo = (function (){var G__37917 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37917) : re_frame.core.subscribe.call(null,G__37917));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37913_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__37913_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__37913_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37914_SHARP_){
return mecca.music.advance_note(from,p1__37914_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$play_section_$_iter__37918(s__37919){
return (new cljs.core.LazySeq(null,(function (){
var s__37919__$1 = s__37919;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37919__$1);
if(temp__5735__auto__){
var s__37919__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37919__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37919__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37921 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37920 = (0);
while(true){
if((i__37920 < size__4581__auto__)){
var map__37922 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37920);
var map__37922__$1 = (((((!((map__37922 == null))))?(((((map__37922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37922):map__37922);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37922__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37922__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37922__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__37921,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__37970 = (i__37920 + (1));
i__37920 = G__37970;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37921),mecca$music$play_section_$_iter__37918(cljs.core.chunk_rest(s__37919__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37921),null);
}
} else {
var map__37924 = cljs.core.first(s__37919__$2);
var map__37924__$1 = (((((!((map__37924 == null))))?(((((map__37924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37924):map__37924);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37924__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37924__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37924__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_section_$_iter__37918(cljs.core.rest(s__37919__$2)));
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
var editor_start = (function (){var G__37927 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37927) : re_frame.core.subscribe.call(null,G__37927));
})();
var tempo = (function (){var G__37928 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37928) : re_frame.core.subscribe.call(null,G__37928));
})();
var beat_length = ((60) / cljs.core.deref((function (){var G__37929 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37929) : re_frame.core.subscribe.call(null,G__37929));
})()));
var play_pos = (((cljs.core.deref(editor_start) < (4)))?cljs.core.deref(editor_start):((4) + cljs.core.deref((function (){var G__37931 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37931) : re_frame.core.subscribe.call(null,G__37931));
})())));
return mecca.music.play_section((play_pos - (1)),((play_pos - (1)) + (n * 0.5)));
});
mecca.music.play_from_here = (function mecca$music$play_from_here(){
var notes = (function (){var G__37933 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37933) : re_frame.core.subscribe.call(null,G__37933));
})();
var editor_start = (function (){var G__37934 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37934) : re_frame.core.subscribe.call(null,G__37934));
})();
var play_pos = cljs.core.deref(editor_start);
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37932_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__37932_SHARP_);
}),cljs.core.deref(notes)));
return mecca.music.play_section((play_pos - (1)),((16) + play_pos));
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = (function (){var G__37935 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37935) : re_frame.core.subscribe.call(null,G__37935));
})();
var now = cljs.core.deref((function (){var G__37936 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37936) : re_frame.core.subscribe.call(null,G__37936));
})()).currentTime;
var tempo = (function (){var G__37937 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37937) : re_frame.core.subscribe.call(null,G__37937));
})();
var G__37938_37987 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37938_37987) : re_frame.core.dispatch.call(null,G__37938_37987));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$play_song_BANG__$_iter__37939(s__37940){
return (new cljs.core.LazySeq(null,(function (){
var s__37940__$1 = s__37940;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37940__$1);
if(temp__5735__auto__){
var s__37940__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37940__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37940__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37942 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37941 = (0);
while(true){
if((i__37941 < size__4581__auto__)){
var map__37943 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37941);
var map__37943__$1 = (((((!((map__37943 == null))))?(((((map__37943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37943):map__37943);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37943__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37943__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37943__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__37942,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__37996 = (i__37941 + (1));
i__37941 = G__37996;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37942),mecca$music$play_song_BANG__$_iter__37939(cljs.core.chunk_rest(s__37940__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37942),null);
}
} else {
var map__37945 = cljs.core.first(s__37940__$2);
var map__37945__$1 = (((((!((map__37945 == null))))?(((((map__37945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37945):map__37945);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37945__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37945__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37945__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__37939(cljs.core.rest(s__37940__$2)));
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
