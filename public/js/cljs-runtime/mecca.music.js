goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.core');
mecca.music.mario_jump = (function mecca$music$mario_jump(){
var beat = (function (){var G__45668 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45668) : re_frame.core.subscribe.call(null,G__45668));
})();
var notes = (function (){var G__45669 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45669) : re_frame.core.subscribe.call(null,G__45669));
})();
var jump = (function (){var G__45670 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45670) : re_frame.core.subscribe.call(null,G__45670));
})();
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.deref((function (){var G__45673 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45673) : re_frame.core.subscribe.call(null,G__45673));
})());
if(cljs.core.truth_(and__4174__auto__)){
return (cljs.core.deref(jump) === (0));
} else {
return and__4174__auto__;
}
})())){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45667_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__45667_SHARP_),(cljs.core.deref(beat) + (1)));
}),cljs.core.deref(notes))))){
var G__45674 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump!","jump!",-1168155200)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45674) : re_frame.core.dispatch.call(null,G__45674));
} else {
return null;
}
} else {
return null;
}
});
mecca.music.mario_move = (function mecca$music$mario_move(){
var notes = (function (){var G__45676 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45676) : re_frame.core.subscribe.call(null,G__45676));
})();
var playing_QMARK_ = cljs.core.deref((function (){var G__45677 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45677) : re_frame.core.subscribe.call(null,G__45677));
})());
var now = cljs.core.deref((function (){var G__45678 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45678) : re_frame.core.subscribe.call(null,G__45678));
})()).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45675_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__45675_SHARP_);
}),cljs.core.deref(notes)));
var started = (function (){var G__45679 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45679) : re_frame.core.subscribe.call(null,G__45679));
})();
var elapsed = (now - cljs.core.deref(started));
var beat_length = ((60) / cljs.core.deref((function (){var G__45680 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45680) : re_frame.core.subscribe.call(null,G__45680));
})()));
var end_time = (cljs.core.deref(started) + (beat_length * (4)));
var current_beat = (elapsed / beat_length);
var last_drawn_pos = (function (){var G__45681 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45681) : re_frame.core.subscribe.call(null,G__45681));
})();
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
var G__45682_45859 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-off","play-off",2116693509)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45682_45859) : re_frame.core.dispatch.call(null,G__45682_45859));
} else {
if((cljs.core.deref(last_drawn_pos) < current_beat)){
var G__45683_45860 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-mario","move-mario",-317739908)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45683_45860) : re_frame.core.dispatch.call(null,G__45683_45860));

var G__45684_45861 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-position","advance-position",-23796893)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45684_45861) : re_frame.core.dispatch.call(null,G__45684_45861));
} else {
}
}
} else {
}

return mecca.music.mario_jump();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__45685_45865 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick!","tick!",68058958)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45685_45865) : re_frame.core.dispatch.call(null,G__45685_45865));

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
cljs.core.deref((function (){var G__45686 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45686) : re_frame.core.subscribe.call(null,G__45686));
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
var source = cljs.core.deref((function (){var G__45687 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45687) : re_frame.core.subscribe.call(null,G__45687));
})()).createBufferSource();
(source.buffer = buffer);

return source;
});
mecca.music.get_and_decode = (function mecca$music$get_and_decode(named_url){
var c__36933__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36934__auto__ = (function (){var switch__36865__auto__ = (function (state_45699){
var state_val_45700 = (state_45699[(1)]);
if((state_val_45700 === (1))){
var inst_45688 = mecca.music.load_sound(named_url);
var state_45699__$1 = state_45699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45699__$1,(2),inst_45688);
} else {
if((state_val_45700 === (2))){
var inst_45690 = (state_45699[(7)]);
var inst_45690__$1 = (state_45699[(2)]);
var state_45699__$1 = (function (){var statearr_45701 = state_45699;
(statearr_45701[(7)] = inst_45690__$1);

return statearr_45701;
})();
if(cljs.core.truth_(inst_45690__$1)){
var statearr_45702_45887 = state_45699__$1;
(statearr_45702_45887[(1)] = (3));

} else {
var statearr_45703_45888 = state_45699__$1;
(statearr_45703_45888[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45700 === (3))){
var inst_45690 = (state_45699[(7)]);
var inst_45692 = mecca.music.decode(inst_45690);
var state_45699__$1 = state_45699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45699__$1,(6),inst_45692);
} else {
if((state_val_45700 === (4))){
var state_45699__$1 = state_45699;
var statearr_45704_45893 = state_45699__$1;
(statearr_45704_45893[(2)] = null);

(statearr_45704_45893[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45700 === (5))){
var inst_45697 = (state_45699[(2)]);
var state_45699__$1 = state_45699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45699__$1,inst_45697);
} else {
if((state_val_45700 === (6))){
var inst_45694 = (state_45699[(2)]);
var state_45699__$1 = state_45699;
var statearr_45705_45898 = state_45699__$1;
(statearr_45705_45898[(2)] = inst_45694);

(statearr_45705_45898[(1)] = (5));


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
var mecca$music$get_and_decode_$_state_machine__36866__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__36866__auto____0 = (function (){
var statearr_45706 = [null,null,null,null,null,null,null,null];
(statearr_45706[(0)] = mecca$music$get_and_decode_$_state_machine__36866__auto__);

(statearr_45706[(1)] = (1));

return statearr_45706;
});
var mecca$music$get_and_decode_$_state_machine__36866__auto____1 = (function (state_45699){
while(true){
var ret_value__36867__auto__ = (function (){try{while(true){
var result__36868__auto__ = switch__36865__auto__(state_45699);
if(cljs.core.keyword_identical_QMARK_(result__36868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36868__auto__;
}
break;
}
}catch (e45707){if((e45707 instanceof Object)){
var ex__36869__auto__ = e45707;
var statearr_45708_45907 = state_45699;
(statearr_45708_45907[(5)] = ex__36869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45707;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45914 = state_45699;
state_45699 = G__45914;
continue;
} else {
return ret_value__36867__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__36866__auto__ = function(state_45699){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__36866__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__36866__auto____1.call(this,state_45699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__36866__auto____0;
mecca$music$get_and_decode_$_state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__36866__auto____1;
return mecca$music$get_and_decode_$_state_machine__36866__auto__;
})()
})();
var state__36935__auto__ = (function (){var statearr_45709 = (f__36934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36934__auto__.cljs$core$IFn$_invoke$arity$0() : f__36934__auto__.call(null));
(statearr_45709[(6)] = c__36933__auto__);

return statearr_45709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36935__auto__);
}));

return c__36933__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__36933__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36934__auto__ = (function (){var switch__36865__auto__ = (function (state_45738){
var state_val_45739 = (state_45738[(1)]);
if((state_val_45739 === (1))){
var inst_45710 = cljs.core.PersistentHashMap.EMPTY;
var inst_45711 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(19));
var inst_45712 = inst_45710;
var inst_45713 = inst_45711;
var state_45738__$1 = (function (){var statearr_45740 = state_45738;
(statearr_45740[(7)] = inst_45713);

(statearr_45740[(8)] = inst_45712);

return statearr_45740;
})();
var statearr_45741_45924 = state_45738__$1;
(statearr_45741_45924[(2)] = null);

(statearr_45741_45924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45739 === (2))){
var inst_45713 = (state_45738[(7)]);
var inst_45715 = cljs.core.first(inst_45713);
var inst_45716 = (inst_45715 == null);
var inst_45717 = cljs.core.not(inst_45716);
var state_45738__$1 = state_45738;
if(inst_45717){
var statearr_45742_45927 = state_45738__$1;
(statearr_45742_45927[(1)] = (4));

} else {
var statearr_45743_45928 = state_45738__$1;
(statearr_45743_45928[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45739 === (3))){
var inst_45736 = (state_45738[(2)]);
var state_45738__$1 = state_45738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45738__$1,inst_45736);
} else {
if((state_val_45739 === (4))){
var inst_45719 = (state_45738[(9)]);
var inst_45713 = (state_45738[(7)]);
var inst_45719__$1 = cljs.core.first(inst_45713);
var inst_45720 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"sound","sound",-2127407070)];
var inst_45721 = ["/mecca/public/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45719__$1),".mp3"].join('');
var inst_45722 = [inst_45721,inst_45719__$1];
var inst_45723 = cljs.core.PersistentHashMap.fromArrays(inst_45720,inst_45722);
var inst_45724 = mecca.music.get_and_decode(inst_45723);
var state_45738__$1 = (function (){var statearr_45744 = state_45738;
(statearr_45744[(9)] = inst_45719__$1);

return statearr_45744;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45738__$1,(7),inst_45724);
} else {
if((state_val_45739 === (5))){
var inst_45712 = (state_45738[(8)]);
var state_45738__$1 = state_45738;
var statearr_45745_45945 = state_45738__$1;
(statearr_45745_45945[(2)] = inst_45712);

(statearr_45745_45945[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45739 === (6))){
var inst_45734 = (state_45738[(2)]);
var state_45738__$1 = state_45738;
var statearr_45746_45946 = state_45738__$1;
(statearr_45746_45946[(2)] = inst_45734);

(statearr_45746_45946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45739 === (7))){
var inst_45719 = (state_45738[(9)]);
var inst_45713 = (state_45738[(7)]);
var inst_45712 = (state_45738[(8)]);
var inst_45726 = (state_45738[(2)]);
var inst_45727 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_45719], 0));
var inst_45728 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_45726], 0));
var inst_45729 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_45712,inst_45719,inst_45726);
var inst_45730 = cljs.core.rest(inst_45713);
var inst_45712__$1 = inst_45729;
var inst_45713__$1 = inst_45730;
var state_45738__$1 = (function (){var statearr_45747 = state_45738;
(statearr_45747[(7)] = inst_45713__$1);

(statearr_45747[(8)] = inst_45712__$1);

(statearr_45747[(10)] = inst_45728);

(statearr_45747[(11)] = inst_45727);

return statearr_45747;
})();
var statearr_45748_45952 = state_45738__$1;
(statearr_45748_45952[(2)] = null);

(statearr_45748_45952[(1)] = (2));


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
var mecca$music$load_samples_$_state_machine__36866__auto__ = null;
var mecca$music$load_samples_$_state_machine__36866__auto____0 = (function (){
var statearr_45749 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45749[(0)] = mecca$music$load_samples_$_state_machine__36866__auto__);

(statearr_45749[(1)] = (1));

return statearr_45749;
});
var mecca$music$load_samples_$_state_machine__36866__auto____1 = (function (state_45738){
while(true){
var ret_value__36867__auto__ = (function (){try{while(true){
var result__36868__auto__ = switch__36865__auto__(state_45738);
if(cljs.core.keyword_identical_QMARK_(result__36868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36868__auto__;
}
break;
}
}catch (e45750){if((e45750 instanceof Object)){
var ex__36869__auto__ = e45750;
var statearr_45751_45957 = state_45738;
(statearr_45751_45957[(5)] = ex__36869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45750;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45958 = state_45738;
state_45738 = G__45958;
continue;
} else {
return ret_value__36867__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__36866__auto__ = function(state_45738){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__36866__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__36866__auto____1.call(this,state_45738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__36866__auto____0;
mecca$music$load_samples_$_state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__36866__auto____1;
return mecca$music$load_samples_$_state_machine__36866__auto__;
})()
})();
var state__36935__auto__ = (function (){var statearr_45752 = (f__36934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36934__auto__.cljs$core$IFn$_invoke$arity$0() : f__36934__auto__.call(null));
(statearr_45752[(6)] = c__36933__auto__);

return statearr_45752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36935__auto__);
}));

return c__36933__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__36933__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36934__auto__ = (function (){var switch__36865__auto__ = (function (state_45762){
var state_val_45763 = (state_45762[(1)]);
if((state_val_45763 === (1))){
var inst_45753 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45754 = mecca.music.load_samples();
var state_45762__$1 = (function (){var statearr_45764 = state_45762;
(statearr_45764[(7)] = inst_45753);

return statearr_45764;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45762__$1,(2),inst_45754);
} else {
if((state_val_45763 === (2))){
var inst_45753 = (state_45762[(7)]);
var inst_45756 = (state_45762[(2)]);
var inst_45757 = [new cljs.core.Keyword(null,"load-samples","load-samples",-40877701),inst_45756];
var inst_45758 = (new cljs.core.PersistentVector(null,2,(5),inst_45753,inst_45757,null));
var inst_45759 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_45758) : re_frame.core.dispatch.call(null,inst_45758));
var inst_45760 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_45762__$1 = (function (){var statearr_45765 = state_45762;
(statearr_45765[(8)] = inst_45759);

return statearr_45765;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45762__$1,inst_45760);
} else {
return null;
}
}
});
return (function() {
var mecca$music$state_machine__36866__auto__ = null;
var mecca$music$state_machine__36866__auto____0 = (function (){
var statearr_45766 = [null,null,null,null,null,null,null,null,null];
(statearr_45766[(0)] = mecca$music$state_machine__36866__auto__);

(statearr_45766[(1)] = (1));

return statearr_45766;
});
var mecca$music$state_machine__36866__auto____1 = (function (state_45762){
while(true){
var ret_value__36867__auto__ = (function (){try{while(true){
var result__36868__auto__ = switch__36865__auto__(state_45762);
if(cljs.core.keyword_identical_QMARK_(result__36868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36868__auto__;
}
break;
}
}catch (e45767){if((e45767 instanceof Object)){
var ex__36869__auto__ = e45767;
var statearr_45768_45978 = state_45762;
(statearr_45768_45978[(5)] = ex__36869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45767;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45979 = state_45762;
state_45762 = G__45979;
continue;
} else {
return ret_value__36867__auto__;
}
break;
}
});
mecca$music$state_machine__36866__auto__ = function(state_45762){
switch(arguments.length){
case 0:
return mecca$music$state_machine__36866__auto____0.call(this);
case 1:
return mecca$music$state_machine__36866__auto____1.call(this,state_45762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__36866__auto____0;
mecca$music$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__36866__auto____1;
return mecca$music$state_machine__36866__auto__;
})()
})();
var state__36935__auto__ = (function (){var statearr_45769 = (f__36934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36934__auto__.cljs$core$IFn$_invoke$arity$0() : f__36934__auto__.call(null));
(statearr_45769[(6)] = c__36933__auto__);

return statearr_45769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36935__auto__);
}));

return c__36933__auto__;
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
var context = cljs.core.deref((function (){var G__45770 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45770) : re_frame.core.subscribe.call(null,G__45770));
})());
var samples = (function (){var G__45771 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45771) : re_frame.core.subscribe.call(null,G__45771));
})();
var instrument = (function (){var G__45772 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45772) : re_frame.core.subscribe.call(null,G__45772));
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
var context = (function (){var G__45773 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45773) : re_frame.core.subscribe.call(null,G__45773));
})();
var samples = (function (){var G__45774 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45774) : re_frame.core.subscribe.call(null,G__45774));
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
var context = (function (){var G__45775 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45775) : re_frame.core.subscribe.call(null,G__45775));
})();
var samples = (function (){var G__45776 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45776) : re_frame.core.subscribe.call(null,G__45776));
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__45777_SHARP_){
return (beats + p1__45777_SHARP_);
}));
});
mecca.music.advance_note = (function mecca$music$advance_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__45778_SHARP_){
return (p1__45778_SHARP_ - beats);
}));
});
mecca.music.queue_section = (function mecca$music$queue_section(from,to){
var notes = (function (){var G__45781 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45781) : re_frame.core.subscribe.call(null,G__45781));
})();
var started = (function (){var G__45782 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45782) : re_frame.core.subscribe.call(null,G__45782));
})();
var tempo = (function (){var G__45783 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45783) : re_frame.core.subscribe.call(null,G__45783));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45779_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__45779_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__45779_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45780_SHARP_){
return mecca.music.advance_note(from,p1__45780_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$queue_section_$_iter__45784(s__45785){
return (new cljs.core.LazySeq(null,(function (){
var s__45785__$1 = s__45785;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45785__$1);
if(temp__5735__auto__){
var s__45785__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45785__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__45785__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__45787 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__45786 = (0);
while(true){
if((i__45786 < size__4581__auto__)){
var map__45788 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__45786);
var map__45788__$1 = (((((!((map__45788 == null))))?(((((map__45788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45788):map__45788);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45788__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45788__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45788__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__45787,mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))));

var G__46001 = (i__45786 + (1));
i__45786 = G__46001;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45787),mecca$music$queue_section_$_iter__45784(cljs.core.chunk_rest(s__45785__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45787),null);
}
} else {
var map__45790 = cljs.core.first(s__45785__$2);
var map__45790__$1 = (((((!((map__45790 == null))))?(((((map__45790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45790):map__45790);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45790__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45790__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45790__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$queue_section_$_iter__45784(cljs.core.rest(s__45785__$2)));
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
var notes = (function (){var G__45794 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45794) : re_frame.core.subscribe.call(null,G__45794));
})();
var now = cljs.core.deref((function (){var G__45795 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45795) : re_frame.core.subscribe.call(null,G__45795));
})()).currentTime;
var tempo = (function (){var G__45796 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45796) : re_frame.core.subscribe.call(null,G__45796));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45792_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__45792_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__45792_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45793_SHARP_){
return mecca.music.advance_note(from,p1__45793_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$play_section_$_iter__45797(s__45798){
return (new cljs.core.LazySeq(null,(function (){
var s__45798__$1 = s__45798;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45798__$1);
if(temp__5735__auto__){
var s__45798__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45798__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__45798__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__45800 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__45799 = (0);
while(true){
if((i__45799 < size__4581__auto__)){
var map__45801 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__45799);
var map__45801__$1 = (((((!((map__45801 == null))))?(((((map__45801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45801):map__45801);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45801__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45801__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45801__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__45800,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__46007 = (i__45799 + (1));
i__45799 = G__46007;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45800),mecca$music$play_section_$_iter__45797(cljs.core.chunk_rest(s__45798__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45800),null);
}
} else {
var map__45803 = cljs.core.first(s__45798__$2);
var map__45803__$1 = (((((!((map__45803 == null))))?(((((map__45803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45803):map__45803);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45803__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45803__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45803__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_section_$_iter__45797(cljs.core.rest(s__45798__$2)));
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
var editor_start = (function (){var G__45805 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45805) : re_frame.core.subscribe.call(null,G__45805));
})();
var tempo = (function (){var G__45806 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45806) : re_frame.core.subscribe.call(null,G__45806));
})();
var beat_length = ((60) / cljs.core.deref((function (){var G__45807 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45807) : re_frame.core.subscribe.call(null,G__45807));
})()));
var play_pos = (((cljs.core.deref(editor_start) < (4)))?cljs.core.deref(editor_start):((4) + cljs.core.deref((function (){var G__45808 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45808) : re_frame.core.subscribe.call(null,G__45808));
})())));
return mecca.music.play_section((play_pos - (1)),((play_pos - (1)) + (n * 0.5)));
});
mecca.music.play_from_here = (function mecca$music$play_from_here(){
var notes = (function (){var G__45810 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45810) : re_frame.core.subscribe.call(null,G__45810));
})();
var editor_start = (function (){var G__45811 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45811) : re_frame.core.subscribe.call(null,G__45811));
})();
var play_pos = cljs.core.deref(editor_start);
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45809_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__45809_SHARP_);
}),cljs.core.deref(notes)));
return mecca.music.play_section((play_pos - (1)),((16) + play_pos));
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = (function (){var G__45812 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45812) : re_frame.core.subscribe.call(null,G__45812));
})();
var now = cljs.core.deref((function (){var G__45813 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45813) : re_frame.core.subscribe.call(null,G__45813));
})()).currentTime;
var tempo = (function (){var G__45814 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45814) : re_frame.core.subscribe.call(null,G__45814));
})();
var G__45815_46036 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45815_46036) : re_frame.core.dispatch.call(null,G__45815_46036));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$play_song_BANG__$_iter__45816(s__45817){
return (new cljs.core.LazySeq(null,(function (){
var s__45817__$1 = s__45817;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45817__$1);
if(temp__5735__auto__){
var s__45817__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45817__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__45817__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__45819 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__45818 = (0);
while(true){
if((i__45818 < size__4581__auto__)){
var map__45820 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__45818);
var map__45820__$1 = (((((!((map__45820 == null))))?(((((map__45820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45820):map__45820);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45820__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45820__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45820__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__45819,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__46037 = (i__45818 + (1));
i__45818 = G__46037;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45819),mecca$music$play_song_BANG__$_iter__45816(cljs.core.chunk_rest(s__45817__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45819),null);
}
} else {
var map__45822 = cljs.core.first(s__45817__$2);
var map__45822__$1 = (((((!((map__45822 == null))))?(((((map__45822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45822):map__45822);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45822__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45822__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45822__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__45816(cljs.core.rest(s__45817__$2)));
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
