goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.core');
mecca.music.mario_jump = (function mecca$music$mario_jump(){
var beat = (function (){var G__37756 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37756) : re_frame.core.subscribe.call(null,G__37756));
})();
var notes = (function (){var G__37757 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37757) : re_frame.core.subscribe.call(null,G__37757));
})();
var jump = (function (){var G__37758 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37758) : re_frame.core.subscribe.call(null,G__37758));
})();
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.deref((function (){var G__37761 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37761) : re_frame.core.subscribe.call(null,G__37761));
})());
if(cljs.core.truth_(and__4174__auto__)){
return (cljs.core.deref(jump) === (0));
} else {
return and__4174__auto__;
}
})())){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37755_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__37755_SHARP_),(cljs.core.deref(beat) + (1)));
}),cljs.core.deref(notes))))){
var G__37762 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump!","jump!",-1168155200)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37762) : re_frame.core.dispatch.call(null,G__37762));
} else {
return null;
}
} else {
return null;
}
});
mecca.music.mario_move = (function mecca$music$mario_move(){
var notes = (function (){var G__37764 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37764) : re_frame.core.subscribe.call(null,G__37764));
})();
var playing_QMARK_ = cljs.core.deref((function (){var G__37765 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37765) : re_frame.core.subscribe.call(null,G__37765));
})());
var now = cljs.core.deref((function (){var G__37766 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37766) : re_frame.core.subscribe.call(null,G__37766));
})()).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37763_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__37763_SHARP_);
}),cljs.core.deref(notes)));
var started = (function (){var G__37767 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37767) : re_frame.core.subscribe.call(null,G__37767));
})();
var elapsed = (now - cljs.core.deref(started));
var beat_length = ((60) / cljs.core.deref((function (){var G__37768 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37768) : re_frame.core.subscribe.call(null,G__37768));
})()));
var end_time = (cljs.core.deref(started) + (beat_length * (4)));
var current_beat = (elapsed / beat_length);
var last_drawn_pos = (function (){var G__37769 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37769) : re_frame.core.subscribe.call(null,G__37769));
})();
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
var G__37770_37935 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-off","play-off",2116693509)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37770_37935) : re_frame.core.dispatch.call(null,G__37770_37935));
} else {
if((cljs.core.deref(last_drawn_pos) < current_beat)){
var G__37771_37936 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-mario","move-mario",-317739908)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37771_37936) : re_frame.core.dispatch.call(null,G__37771_37936));

var G__37772_37937 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-position","advance-position",-23796893)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37772_37937) : re_frame.core.dispatch.call(null,G__37772_37937));
} else {
}
}
} else {
}

return mecca.music.mario_jump();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__37773_37938 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick!","tick!",68058958)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37773_37938) : re_frame.core.dispatch.call(null,G__37773_37938));

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
cljs.core.deref((function (){var G__37775 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37775) : re_frame.core.subscribe.call(null,G__37775));
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
var source = cljs.core.deref((function (){var G__37776 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37776) : re_frame.core.subscribe.call(null,G__37776));
})()).createBufferSource();
(source.buffer = buffer);

return source;
});
mecca.music.get_and_decode = (function mecca$music$get_and_decode(named_url){
var c__30026__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30027__auto__ = (function (){var switch__29676__auto__ = (function (state_37788){
var state_val_37789 = (state_37788[(1)]);
if((state_val_37789 === (1))){
var inst_37777 = mecca.music.load_sound(named_url);
var state_37788__$1 = state_37788;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37788__$1,(2),inst_37777);
} else {
if((state_val_37789 === (2))){
var inst_37779 = (state_37788[(7)]);
var inst_37779__$1 = (state_37788[(2)]);
var state_37788__$1 = (function (){var statearr_37790 = state_37788;
(statearr_37790[(7)] = inst_37779__$1);

return statearr_37790;
})();
if(cljs.core.truth_(inst_37779__$1)){
var statearr_37791_37939 = state_37788__$1;
(statearr_37791_37939[(1)] = (3));

} else {
var statearr_37792_37940 = state_37788__$1;
(statearr_37792_37940[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37789 === (3))){
var inst_37779 = (state_37788[(7)]);
var inst_37781 = mecca.music.decode(inst_37779);
var state_37788__$1 = state_37788;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37788__$1,(6),inst_37781);
} else {
if((state_val_37789 === (4))){
var state_37788__$1 = state_37788;
var statearr_37793_37941 = state_37788__$1;
(statearr_37793_37941[(2)] = null);

(statearr_37793_37941[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37789 === (5))){
var inst_37786 = (state_37788[(2)]);
var state_37788__$1 = state_37788;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37788__$1,inst_37786);
} else {
if((state_val_37789 === (6))){
var inst_37783 = (state_37788[(2)]);
var state_37788__$1 = state_37788;
var statearr_37794_37942 = state_37788__$1;
(statearr_37794_37942[(2)] = inst_37783);

(statearr_37794_37942[(1)] = (5));


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
var mecca$music$get_and_decode_$_state_machine__29677__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__29677__auto____0 = (function (){
var statearr_37797 = [null,null,null,null,null,null,null,null];
(statearr_37797[(0)] = mecca$music$get_and_decode_$_state_machine__29677__auto__);

(statearr_37797[(1)] = (1));

return statearr_37797;
});
var mecca$music$get_and_decode_$_state_machine__29677__auto____1 = (function (state_37788){
while(true){
var ret_value__29678__auto__ = (function (){try{while(true){
var result__29679__auto__ = switch__29676__auto__(state_37788);
if(cljs.core.keyword_identical_QMARK_(result__29679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29679__auto__;
}
break;
}
}catch (e37798){if((e37798 instanceof Object)){
var ex__29680__auto__ = e37798;
var statearr_37800_37943 = state_37788;
(statearr_37800_37943[(5)] = ex__29680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37798;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37944 = state_37788;
state_37788 = G__37944;
continue;
} else {
return ret_value__29678__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__29677__auto__ = function(state_37788){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__29677__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__29677__auto____1.call(this,state_37788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__29677__auto____0;
mecca$music$get_and_decode_$_state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__29677__auto____1;
return mecca$music$get_and_decode_$_state_machine__29677__auto__;
})()
})();
var state__30028__auto__ = (function (){var statearr_37802 = (f__30027__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30027__auto__.cljs$core$IFn$_invoke$arity$0() : f__30027__auto__.call(null));
(statearr_37802[(6)] = c__30026__auto__);

return statearr_37802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30028__auto__);
}));

return c__30026__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__30026__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30027__auto__ = (function (){var switch__29676__auto__ = (function (state_37837){
var state_val_37838 = (state_37837[(1)]);
if((state_val_37838 === (1))){
var inst_37807 = cljs.core.PersistentHashMap.EMPTY;
var inst_37808 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(19));
var inst_37809 = inst_37807;
var inst_37810 = inst_37808;
var state_37837__$1 = (function (){var statearr_37840 = state_37837;
(statearr_37840[(7)] = inst_37809);

(statearr_37840[(8)] = inst_37810);

return statearr_37840;
})();
var statearr_37841_37945 = state_37837__$1;
(statearr_37841_37945[(2)] = null);

(statearr_37841_37945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (2))){
var inst_37810 = (state_37837[(8)]);
var inst_37812 = cljs.core.first(inst_37810);
var inst_37813 = (inst_37812 == null);
var inst_37814 = cljs.core.not(inst_37813);
var state_37837__$1 = state_37837;
if(inst_37814){
var statearr_37842_37946 = state_37837__$1;
(statearr_37842_37946[(1)] = (4));

} else {
var statearr_37843_37947 = state_37837__$1;
(statearr_37843_37947[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (3))){
var inst_37834 = (state_37837[(2)]);
var state_37837__$1 = state_37837;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37837__$1,inst_37834);
} else {
if((state_val_37838 === (4))){
var inst_37810 = (state_37837[(8)]);
var inst_37816 = (state_37837[(9)]);
var inst_37816__$1 = cljs.core.first(inst_37810);
var inst_37817 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"sound","sound",-2127407070)];
var inst_37819 = ["/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37816__$1),".mp3"].join('');
var inst_37820 = [inst_37819,inst_37816__$1];
var inst_37821 = cljs.core.PersistentHashMap.fromArrays(inst_37817,inst_37820);
var inst_37822 = mecca.music.get_and_decode(inst_37821);
var state_37837__$1 = (function (){var statearr_37844 = state_37837;
(statearr_37844[(9)] = inst_37816__$1);

return statearr_37844;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37837__$1,(7),inst_37822);
} else {
if((state_val_37838 === (5))){
var inst_37809 = (state_37837[(7)]);
var state_37837__$1 = state_37837;
var statearr_37845_37948 = state_37837__$1;
(statearr_37845_37948[(2)] = inst_37809);

(statearr_37845_37948[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (6))){
var inst_37832 = (state_37837[(2)]);
var state_37837__$1 = state_37837;
var statearr_37846_37949 = state_37837__$1;
(statearr_37846_37949[(2)] = inst_37832);

(statearr_37846_37949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (7))){
var inst_37809 = (state_37837[(7)]);
var inst_37810 = (state_37837[(8)]);
var inst_37816 = (state_37837[(9)]);
var inst_37824 = (state_37837[(2)]);
var inst_37825 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_37816], 0));
var inst_37826 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_37824], 0));
var inst_37827 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_37809,inst_37816,inst_37824);
var inst_37828 = cljs.core.rest(inst_37810);
var inst_37809__$1 = inst_37827;
var inst_37810__$1 = inst_37828;
var state_37837__$1 = (function (){var statearr_37847 = state_37837;
(statearr_37847[(7)] = inst_37809__$1);

(statearr_37847[(8)] = inst_37810__$1);

(statearr_37847[(10)] = inst_37826);

(statearr_37847[(11)] = inst_37825);

return statearr_37847;
})();
var statearr_37848_37950 = state_37837__$1;
(statearr_37848_37950[(2)] = null);

(statearr_37848_37950[(1)] = (2));


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
var mecca$music$load_samples_$_state_machine__29677__auto__ = null;
var mecca$music$load_samples_$_state_machine__29677__auto____0 = (function (){
var statearr_37849 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37849[(0)] = mecca$music$load_samples_$_state_machine__29677__auto__);

(statearr_37849[(1)] = (1));

return statearr_37849;
});
var mecca$music$load_samples_$_state_machine__29677__auto____1 = (function (state_37837){
while(true){
var ret_value__29678__auto__ = (function (){try{while(true){
var result__29679__auto__ = switch__29676__auto__(state_37837);
if(cljs.core.keyword_identical_QMARK_(result__29679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29679__auto__;
}
break;
}
}catch (e37851){if((e37851 instanceof Object)){
var ex__29680__auto__ = e37851;
var statearr_37852_37951 = state_37837;
(statearr_37852_37951[(5)] = ex__29680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37851;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37952 = state_37837;
state_37837 = G__37952;
continue;
} else {
return ret_value__29678__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__29677__auto__ = function(state_37837){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__29677__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__29677__auto____1.call(this,state_37837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__29677__auto____0;
mecca$music$load_samples_$_state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__29677__auto____1;
return mecca$music$load_samples_$_state_machine__29677__auto__;
})()
})();
var state__30028__auto__ = (function (){var statearr_37853 = (f__30027__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30027__auto__.cljs$core$IFn$_invoke$arity$0() : f__30027__auto__.call(null));
(statearr_37853[(6)] = c__30026__auto__);

return statearr_37853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30028__auto__);
}));

return c__30026__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__30026__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30027__auto__ = (function (){var switch__29676__auto__ = (function (state_37863){
var state_val_37864 = (state_37863[(1)]);
if((state_val_37864 === (1))){
var inst_37854 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37855 = mecca.music.load_samples();
var state_37863__$1 = (function (){var statearr_37865 = state_37863;
(statearr_37865[(7)] = inst_37854);

return statearr_37865;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37863__$1,(2),inst_37855);
} else {
if((state_val_37864 === (2))){
var inst_37854 = (state_37863[(7)]);
var inst_37857 = (state_37863[(2)]);
var inst_37858 = [new cljs.core.Keyword(null,"load-samples","load-samples",-40877701),inst_37857];
var inst_37859 = (new cljs.core.PersistentVector(null,2,(5),inst_37854,inst_37858,null));
var inst_37860 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_37859) : re_frame.core.dispatch.call(null,inst_37859));
var inst_37861 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_37863__$1 = (function (){var statearr_37867 = state_37863;
(statearr_37867[(8)] = inst_37860);

return statearr_37867;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37863__$1,inst_37861);
} else {
return null;
}
}
});
return (function() {
var mecca$music$state_machine__29677__auto__ = null;
var mecca$music$state_machine__29677__auto____0 = (function (){
var statearr_37868 = [null,null,null,null,null,null,null,null,null];
(statearr_37868[(0)] = mecca$music$state_machine__29677__auto__);

(statearr_37868[(1)] = (1));

return statearr_37868;
});
var mecca$music$state_machine__29677__auto____1 = (function (state_37863){
while(true){
var ret_value__29678__auto__ = (function (){try{while(true){
var result__29679__auto__ = switch__29676__auto__(state_37863);
if(cljs.core.keyword_identical_QMARK_(result__29679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29679__auto__;
}
break;
}
}catch (e37869){if((e37869 instanceof Object)){
var ex__29680__auto__ = e37869;
var statearr_37871_37953 = state_37863;
(statearr_37871_37953[(5)] = ex__29680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37869;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37954 = state_37863;
state_37863 = G__37954;
continue;
} else {
return ret_value__29678__auto__;
}
break;
}
});
mecca$music$state_machine__29677__auto__ = function(state_37863){
switch(arguments.length){
case 0:
return mecca$music$state_machine__29677__auto____0.call(this);
case 1:
return mecca$music$state_machine__29677__auto____1.call(this,state_37863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__29677__auto____0;
mecca$music$state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__29677__auto____1;
return mecca$music$state_machine__29677__auto__;
})()
})();
var state__30028__auto__ = (function (){var statearr_37872 = (f__30027__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30027__auto__.cljs$core$IFn$_invoke$arity$0() : f__30027__auto__.call(null));
(statearr_37872[(6)] = c__30026__auto__);

return statearr_37872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30028__auto__);
}));

return c__30026__auto__;
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
var context = cljs.core.deref((function (){var G__37874 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37874) : re_frame.core.subscribe.call(null,G__37874));
})());
var samples = (function (){var G__37875 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37875) : re_frame.core.subscribe.call(null,G__37875));
})();
var instrument = (function (){var G__37876 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37876) : re_frame.core.subscribe.call(null,G__37876));
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
var context = (function (){var G__37877 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37877) : re_frame.core.subscribe.call(null,G__37877));
})();
var samples = (function (){var G__37878 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37878) : re_frame.core.subscribe.call(null,G__37878));
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
var context = (function (){var G__37879 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37879) : re_frame.core.subscribe.call(null,G__37879));
})();
var samples = (function (){var G__37880 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37880) : re_frame.core.subscribe.call(null,G__37880));
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__37881_SHARP_){
return (beats + p1__37881_SHARP_);
}));
});
mecca.music.advance_note = (function mecca$music$advance_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__37882_SHARP_){
return (p1__37882_SHARP_ - beats);
}));
});
mecca.music.queue_section = (function mecca$music$queue_section(from,to){
var notes = (function (){var G__37885 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37885) : re_frame.core.subscribe.call(null,G__37885));
})();
var started = (function (){var G__37887 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37887) : re_frame.core.subscribe.call(null,G__37887));
})();
var tempo = (function (){var G__37888 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37888) : re_frame.core.subscribe.call(null,G__37888));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37883_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__37883_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__37883_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37884_SHARP_){
return mecca.music.advance_note(from,p1__37884_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$queue_section_$_iter__37889(s__37890){
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
var map__37894 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37891);
var map__37894__$1 = (((((!((map__37894 == null))))?(((((map__37894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37894):map__37894);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37894__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37894__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37894__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__37892,mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))));

var G__37955 = (i__37891 + (1));
i__37891 = G__37955;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37892),mecca$music$queue_section_$_iter__37889(cljs.core.chunk_rest(s__37890__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37892),null);
}
} else {
var map__37896 = cljs.core.first(s__37890__$2);
var map__37896__$1 = (((((!((map__37896 == null))))?(((((map__37896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37896):map__37896);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37896__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37896__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37896__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$queue_section_$_iter__37889(cljs.core.rest(s__37890__$2)));
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

var G__37956 = (i__37905 + (1));
i__37905 = G__37956;
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
var play_pos = (((cljs.core.deref(editor_start) < (4)))?cljs.core.deref(editor_start):((4) + cljs.core.deref((function (){var G__37914 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37914) : re_frame.core.subscribe.call(null,G__37914));
})())));
return mecca.music.play_section((play_pos - (1)),((play_pos - (1)) + (n * 0.5)));
});
mecca.music.play_from_here = (function mecca$music$play_from_here(){
var notes = (function (){var G__37916 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37916) : re_frame.core.subscribe.call(null,G__37916));
})();
var editor_start = (function (){var G__37917 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37917) : re_frame.core.subscribe.call(null,G__37917));
})();
var play_pos = cljs.core.deref(editor_start);
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37915_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__37915_SHARP_);
}),cljs.core.deref(notes)));
return mecca.music.play_section((play_pos - (1)),((16) + play_pos));
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = (function (){var G__37918 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37918) : re_frame.core.subscribe.call(null,G__37918));
})();
var now = cljs.core.deref((function (){var G__37919 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37919) : re_frame.core.subscribe.call(null,G__37919));
})()).currentTime;
var tempo = (function (){var G__37920 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37920) : re_frame.core.subscribe.call(null,G__37920));
})();
var G__37921_37957 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37921_37957) : re_frame.core.dispatch.call(null,G__37921_37957));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$play_song_BANG__$_iter__37922(s__37923){
return (new cljs.core.LazySeq(null,(function (){
var s__37923__$1 = s__37923;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37923__$1);
if(temp__5735__auto__){
var s__37923__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37923__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37923__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37925 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37924 = (0);
while(true){
if((i__37924 < size__4581__auto__)){
var map__37926 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37924);
var map__37926__$1 = (((((!((map__37926 == null))))?(((((map__37926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37926):map__37926);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37926__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37926__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37926__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__37925,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__37958 = (i__37924 + (1));
i__37924 = G__37958;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37925),mecca$music$play_song_BANG__$_iter__37922(cljs.core.chunk_rest(s__37923__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37925),null);
}
} else {
var map__37928 = cljs.core.first(s__37923__$2);
var map__37928__$1 = (((((!((map__37928 == null))))?(((((map__37928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37928):map__37928);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37928__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37928__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37928__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__37922(cljs.core.rest(s__37923__$2)));
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
