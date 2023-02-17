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
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56634_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__56634_SHARP_),(cljs.core.deref(beat) + (1)));
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
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56635_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__56635_SHARP_);
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
var c__44447__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44448__auto__ = (function (){var switch__44409__auto__ = (function (state_56647){
var state_val_56648 = (state_56647[(1)]);
if((state_val_56648 === (1))){
var inst_56636 = mecca.music.load_sound(named_url);
var state_56647__$1 = state_56647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56647__$1,(2),inst_56636);
} else {
if((state_val_56648 === (2))){
var inst_56638 = (state_56647[(7)]);
var inst_56638__$1 = (state_56647[(2)]);
var state_56647__$1 = (function (){var statearr_56649 = state_56647;
(statearr_56649[(7)] = inst_56638__$1);

return statearr_56649;
})();
if(cljs.core.truth_(inst_56638__$1)){
var statearr_56650_56921 = state_56647__$1;
(statearr_56650_56921[(1)] = (3));

} else {
var statearr_56651_56922 = state_56647__$1;
(statearr_56651_56922[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56648 === (3))){
var inst_56638 = (state_56647[(7)]);
var inst_56640 = mecca.music.decode(inst_56638);
var state_56647__$1 = state_56647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56647__$1,(6),inst_56640);
} else {
if((state_val_56648 === (4))){
var state_56647__$1 = state_56647;
var statearr_56652_56923 = state_56647__$1;
(statearr_56652_56923[(2)] = null);

(statearr_56652_56923[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56648 === (5))){
var inst_56645 = (state_56647[(2)]);
var state_56647__$1 = state_56647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56647__$1,inst_56645);
} else {
if((state_val_56648 === (6))){
var inst_56642 = (state_56647[(2)]);
var state_56647__$1 = state_56647;
var statearr_56653_56944 = state_56647__$1;
(statearr_56653_56944[(2)] = inst_56642);

(statearr_56653_56944[(1)] = (5));


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
var mecca$music$get_and_decode_$_state_machine__44410__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__44410__auto____0 = (function (){
var statearr_56654 = [null,null,null,null,null,null,null,null];
(statearr_56654[(0)] = mecca$music$get_and_decode_$_state_machine__44410__auto__);

(statearr_56654[(1)] = (1));

return statearr_56654;
});
var mecca$music$get_and_decode_$_state_machine__44410__auto____1 = (function (state_56647){
while(true){
var ret_value__44411__auto__ = (function (){try{while(true){
var result__44412__auto__ = switch__44409__auto__(state_56647);
if(cljs.core.keyword_identical_QMARK_(result__44412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44412__auto__;
}
break;
}
}catch (e56655){var ex__44413__auto__ = e56655;
var statearr_56656_56945 = state_56647;
(statearr_56656_56945[(2)] = ex__44413__auto__);


if(cljs.core.seq((state_56647[(4)]))){
var statearr_56657_56947 = state_56647;
(statearr_56657_56947[(1)] = cljs.core.first((state_56647[(4)])));

} else {
throw ex__44413__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56948 = state_56647;
state_56647 = G__56948;
continue;
} else {
return ret_value__44411__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__44410__auto__ = function(state_56647){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__44410__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__44410__auto____1.call(this,state_56647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__44410__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__44410__auto____0;
mecca$music$get_and_decode_$_state_machine__44410__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__44410__auto____1;
return mecca$music$get_and_decode_$_state_machine__44410__auto__;
})()
})();
var state__44449__auto__ = (function (){var statearr_56658 = f__44448__auto__();
(statearr_56658[(6)] = c__44447__auto__);

return statearr_56658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44449__auto__);
}));

return c__44447__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__44447__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44448__auto__ = (function (){var switch__44409__auto__ = (function (state_56687){
var state_val_56688 = (state_56687[(1)]);
if((state_val_56688 === (1))){
var inst_56659 = cljs.core.PersistentHashMap.EMPTY;
var inst_56660 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(19));
var inst_56661 = inst_56659;
var inst_56662 = inst_56660;
var state_56687__$1 = (function (){var statearr_56689 = state_56687;
(statearr_56689[(7)] = inst_56661);

(statearr_56689[(8)] = inst_56662);

return statearr_56689;
})();
var statearr_56690_56954 = state_56687__$1;
(statearr_56690_56954[(2)] = null);

(statearr_56690_56954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56688 === (2))){
var inst_56662 = (state_56687[(8)]);
var inst_56664 = cljs.core.first(inst_56662);
var inst_56665 = (inst_56664 == null);
var inst_56666 = cljs.core.not(inst_56665);
var state_56687__$1 = state_56687;
if(inst_56666){
var statearr_56691_56955 = state_56687__$1;
(statearr_56691_56955[(1)] = (4));

} else {
var statearr_56692_56956 = state_56687__$1;
(statearr_56692_56956[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56688 === (3))){
var inst_56685 = (state_56687[(2)]);
var state_56687__$1 = state_56687;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56687__$1,inst_56685);
} else {
if((state_val_56688 === (4))){
var inst_56668 = (state_56687[(9)]);
var inst_56662 = (state_56687[(8)]);
var inst_56668__$1 = cljs.core.first(inst_56662);
var inst_56669 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"sound","sound",-2127407070)];
var inst_56670 = ["/mecca/public/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_56668__$1),".mp3"].join('');
var inst_56671 = [inst_56670,inst_56668__$1];
var inst_56672 = cljs.core.PersistentHashMap.fromArrays(inst_56669,inst_56671);
var inst_56673 = mecca.music.get_and_decode(inst_56672);
var state_56687__$1 = (function (){var statearr_56693 = state_56687;
(statearr_56693[(9)] = inst_56668__$1);

return statearr_56693;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56687__$1,(7),inst_56673);
} else {
if((state_val_56688 === (5))){
var inst_56661 = (state_56687[(7)]);
var state_56687__$1 = state_56687;
var statearr_56694_56957 = state_56687__$1;
(statearr_56694_56957[(2)] = inst_56661);

(statearr_56694_56957[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56688 === (6))){
var inst_56683 = (state_56687[(2)]);
var state_56687__$1 = state_56687;
var statearr_56695_56958 = state_56687__$1;
(statearr_56695_56958[(2)] = inst_56683);

(statearr_56695_56958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56688 === (7))){
var inst_56668 = (state_56687[(9)]);
var inst_56661 = (state_56687[(7)]);
var inst_56662 = (state_56687[(8)]);
var inst_56675 = (state_56687[(2)]);
var inst_56676 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_56668], 0));
var inst_56677 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_56675], 0));
var inst_56678 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_56661,inst_56668,inst_56675);
var inst_56679 = cljs.core.rest(inst_56662);
var inst_56661__$1 = inst_56678;
var inst_56662__$1 = inst_56679;
var state_56687__$1 = (function (){var statearr_56696 = state_56687;
(statearr_56696[(10)] = inst_56677);

(statearr_56696[(11)] = inst_56676);

(statearr_56696[(7)] = inst_56661__$1);

(statearr_56696[(8)] = inst_56662__$1);

return statearr_56696;
})();
var statearr_56697_56959 = state_56687__$1;
(statearr_56697_56959[(2)] = null);

(statearr_56697_56959[(1)] = (2));


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
var mecca$music$load_samples_$_state_machine__44410__auto__ = null;
var mecca$music$load_samples_$_state_machine__44410__auto____0 = (function (){
var statearr_56698 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56698[(0)] = mecca$music$load_samples_$_state_machine__44410__auto__);

(statearr_56698[(1)] = (1));

return statearr_56698;
});
var mecca$music$load_samples_$_state_machine__44410__auto____1 = (function (state_56687){
while(true){
var ret_value__44411__auto__ = (function (){try{while(true){
var result__44412__auto__ = switch__44409__auto__(state_56687);
if(cljs.core.keyword_identical_QMARK_(result__44412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44412__auto__;
}
break;
}
}catch (e56699){var ex__44413__auto__ = e56699;
var statearr_56700_56960 = state_56687;
(statearr_56700_56960[(2)] = ex__44413__auto__);


if(cljs.core.seq((state_56687[(4)]))){
var statearr_56701_56961 = state_56687;
(statearr_56701_56961[(1)] = cljs.core.first((state_56687[(4)])));

} else {
throw ex__44413__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56962 = state_56687;
state_56687 = G__56962;
continue;
} else {
return ret_value__44411__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__44410__auto__ = function(state_56687){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__44410__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__44410__auto____1.call(this,state_56687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__44410__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__44410__auto____0;
mecca$music$load_samples_$_state_machine__44410__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__44410__auto____1;
return mecca$music$load_samples_$_state_machine__44410__auto__;
})()
})();
var state__44449__auto__ = (function (){var statearr_56702 = f__44448__auto__();
(statearr_56702[(6)] = c__44447__auto__);

return statearr_56702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44449__auto__);
}));

return c__44447__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__44447__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44448__auto__ = (function (){var switch__44409__auto__ = (function (state_56712){
var state_val_56713 = (state_56712[(1)]);
if((state_val_56713 === (1))){
var inst_56703 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56704 = mecca.music.load_samples();
var state_56712__$1 = (function (){var statearr_56714 = state_56712;
(statearr_56714[(7)] = inst_56703);

return statearr_56714;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56712__$1,(2),inst_56704);
} else {
if((state_val_56713 === (2))){
var inst_56703 = (state_56712[(7)]);
var inst_56706 = (state_56712[(2)]);
var inst_56707 = [new cljs.core.Keyword(null,"load-samples","load-samples",-40877701),inst_56706];
var inst_56708 = (new cljs.core.PersistentVector(null,2,(5),inst_56703,inst_56707,null));
var inst_56709 = re_frame.core.dispatch(inst_56708);
var inst_56710 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_56712__$1 = (function (){var statearr_56715 = state_56712;
(statearr_56715[(8)] = inst_56709);

return statearr_56715;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56712__$1,inst_56710);
} else {
return null;
}
}
});
return (function() {
var mecca$music$state_machine__44410__auto__ = null;
var mecca$music$state_machine__44410__auto____0 = (function (){
var statearr_56716 = [null,null,null,null,null,null,null,null,null];
(statearr_56716[(0)] = mecca$music$state_machine__44410__auto__);

(statearr_56716[(1)] = (1));

return statearr_56716;
});
var mecca$music$state_machine__44410__auto____1 = (function (state_56712){
while(true){
var ret_value__44411__auto__ = (function (){try{while(true){
var result__44412__auto__ = switch__44409__auto__(state_56712);
if(cljs.core.keyword_identical_QMARK_(result__44412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44412__auto__;
}
break;
}
}catch (e56717){var ex__44413__auto__ = e56717;
var statearr_56718_56963 = state_56712;
(statearr_56718_56963[(2)] = ex__44413__auto__);


if(cljs.core.seq((state_56712[(4)]))){
var statearr_56719_56964 = state_56712;
(statearr_56719_56964[(1)] = cljs.core.first((state_56712[(4)])));

} else {
throw ex__44413__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56965 = state_56712;
state_56712 = G__56965;
continue;
} else {
return ret_value__44411__auto__;
}
break;
}
});
mecca$music$state_machine__44410__auto__ = function(state_56712){
switch(arguments.length){
case 0:
return mecca$music$state_machine__44410__auto____0.call(this);
case 1:
return mecca$music$state_machine__44410__auto____1.call(this,state_56712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__44410__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__44410__auto____0;
mecca$music$state_machine__44410__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__44410__auto____1;
return mecca$music$state_machine__44410__auto__;
})()
})();
var state__44449__auto__ = (function (){var statearr_56720 = f__44448__auto__();
(statearr_56720[(6)] = c__44447__auto__);

return statearr_56720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44449__auto__);
}));

return c__44447__auto__;
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__56721_SHARP_){
return (beats + p1__56721_SHARP_);
}));
});
mecca.music.advance_note = (function mecca$music$advance_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__56722_SHARP_){
return (p1__56722_SHARP_ - beats);
}));
});
mecca.music.queue_section = (function mecca$music$queue_section(from,to){
var notes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var started = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null));
var tempo = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56723_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__56723_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__56723_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56724_SHARP_){
return mecca.music.advance_note(from,p1__56724_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function mecca$music$queue_section_$_iter__56725(s__56726){
return (new cljs.core.LazySeq(null,(function (){
var s__56726__$1 = s__56726;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__56726__$1);
if(temp__5753__auto__){
var s__56726__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56726__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__56726__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__56728 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__56727 = (0);
while(true){
if((i__56727 < size__4621__auto__)){
var map__56729 = cljs.core._nth(c__4620__auto__,i__56727);
var map__56729__$1 = cljs.core.__destructure_map(map__56729);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56729__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56729__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56729__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__56728,mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))));

var G__56980 = (i__56727 + (1));
i__56727 = G__56980;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56728),mecca$music$queue_section_$_iter__56725(cljs.core.chunk_rest(s__56726__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56728),null);
}
} else {
var map__56730 = cljs.core.first(s__56726__$2);
var map__56730__$1 = cljs.core.__destructure_map(map__56730);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56730__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56730__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56730__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$queue_section_$_iter__56725(cljs.core.rest(s__56726__$2)));
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
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56731_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__56731_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__56731_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56732_SHARP_){
return mecca.music.advance_note(from,p1__56732_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function mecca$music$play_section_$_iter__56733(s__56734){
return (new cljs.core.LazySeq(null,(function (){
var s__56734__$1 = s__56734;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__56734__$1);
if(temp__5753__auto__){
var s__56734__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56734__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__56734__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__56736 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__56735 = (0);
while(true){
if((i__56735 < size__4621__auto__)){
var map__56737 = cljs.core._nth(c__4620__auto__,i__56735);
var map__56737__$1 = cljs.core.__destructure_map(map__56737);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56737__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56737__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56737__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__56736,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__56982 = (i__56735 + (1));
i__56735 = G__56982;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56736),mecca$music$play_section_$_iter__56733(cljs.core.chunk_rest(s__56734__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56736),null);
}
} else {
var map__56738 = cljs.core.first(s__56734__$2);
var map__56738__$1 = cljs.core.__destructure_map(map__56738);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56738__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56738__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56738__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_section_$_iter__56733(cljs.core.rest(s__56734__$2)));
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
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56739_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__56739_SHARP_);
}),cljs.core.deref(notes)));
return mecca.music.play_section((play_pos - (1)),((16) + play_pos));
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var now = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).currentTime;
var tempo = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860)], null));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function mecca$music$play_song_BANG__$_iter__56740(s__56741){
return (new cljs.core.LazySeq(null,(function (){
var s__56741__$1 = s__56741;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__56741__$1);
if(temp__5753__auto__){
var s__56741__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56741__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__56741__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__56743 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__56742 = (0);
while(true){
if((i__56742 < size__4621__auto__)){
var map__56744 = cljs.core._nth(c__4620__auto__,i__56742);
var map__56744__$1 = cljs.core.__destructure_map(map__56744);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56744__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56744__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56744__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__56743,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__56985 = (i__56742 + (1));
i__56742 = G__56985;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56743),mecca$music$play_song_BANG__$_iter__56740(cljs.core.chunk_rest(s__56741__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56743),null);
}
} else {
var map__56745 = cljs.core.first(s__56741__$2);
var map__56745__$1 = cljs.core.__destructure_map(map__56745);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56745__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56745__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56745__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__56740(cljs.core.rest(s__56741__$2)));
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
