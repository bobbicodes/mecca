// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('re_frame.core');
mecca.music.audio_context = (function mecca$music$audio_context(){
if(cljs.core.truth_(window.AudioContext)){
return (new window.AudioContext());
} else {
return (new window.webkitAudioContext());
}
});
goog.exportSymbol('mecca.music.audio_context', mecca.music.audio_context);
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.audiocontext !== 'undefined')){
} else {
mecca.music.audiocontext = reagent.core.atom.call(null,mecca.music.audio_context.call(null));
}
mecca.music.current_time = (function mecca$music$current_time(context){
return context.currentTime;
});
goog.exportSymbol('mecca.music.current_time', mecca.music.current_time);
mecca.music.mario_jump_QMARK_ = (function mecca$music$mario_jump_QMARK_(){
var beat = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null)));
var notes = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null)));
if(cljs.core.truth_(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null))))){
if(((0) < cljs.core.count.call(null,cljs.core.filter.call(null,((function (beat,notes){
return (function (p1__24678_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__24678_SHARP_),beat);
});})(beat,notes))
,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null))))))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump!","jump!",-1168155200)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down!","down!",872870035)], null));
}
} else {
return null;
}
});
mecca.music.mario_move = (function mecca$music$mario_move(){
var playing_QMARK_ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null)));
var beat = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null)));
if(cljs.core.truth_(playing_QMARK_)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-mario","move-mario",-317739908),((40) * beat)], null));
} else {
return null;
}
});
mecca.music.song_done_QMARK_ = (function mecca$music$song_done_QMARK_(){
var notes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var playing_QMARK_ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null)));
var now = cljs.core.deref.call(null,mecca.music.audiocontext).currentTime;
var length = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (notes,playing_QMARK_,now){
return (function (p1__24679_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__24679_SHARP_);
});})(notes,playing_QMARK_,now))
,cljs.core.deref.call(null,notes)));
var started = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null)));
var elapsed = (mecca.music.current_time.call(null,cljs.core.deref.call(null,mecca.music.audiocontext)) - started);
var beat_length = ((60) / cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null))));
var current_beat = (elapsed / beat_length);
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-off","play-off",2116693509)], null));
} else {
if(((started + beat_length) < now)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-position","advance-position",-23796893)], null));
} else {
}
}
} else {
}

mecca.music.mario_move.call(null);

return mecca.music.mario_jump_QMARK_.call(null);
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick!","tick!",68058958)], null));

return mecca.music.song_done_QMARK_.call(null);
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.do_timer !== 'undefined')){
} else {
mecca.music.do_timer = setInterval(mecca.music.dispatch_timer_event,(150));
}
mecca.music.load_sound = (function mecca$music$load_sound(named_url){
var out = cljs.core.async.chan.call(null);
var req = (new XMLHttpRequest());
req.responseType = "arraybuffer";

req.onload = ((function (out,req){
return (function (e){
if(cljs.core._EQ_.call(null,req.status,(200))){
cljs.core.async.put_BANG_.call(null,out,cljs.core.assoc.call(null,named_url,new cljs.core.Keyword(null,"buffer","buffer",617295198),req.response));

return cljs.core.async.close_BANG_.call(null,out);
} else {
return cljs.core.async.close_BANG_.call(null,out);
}
});})(out,req))
;

req.open("GET",new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(named_url),true);

req.send();

return out;
});
mecca.music.decode = (function mecca$music$decode(named_url){
var out = cljs.core.async.chan.call(null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(named_url))){
cljs.core.deref.call(null,mecca.music.audiocontext).decodeAudioData(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(named_url),((function (out){
return (function (decoded_buffer){
cljs.core.async.put_BANG_.call(null,out,cljs.core.assoc.call(null,named_url,new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700),decoded_buffer));

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
,((function (out){
return (function (){
console.error("Error loading file ",cljs.core.prn.call(null,named_url));

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
} else {
cljs.core.async.close_BANG_.call(null,out);
}

return out;
});
mecca.music.buffer_source = (function mecca$music$buffer_source(buffer){
var source = cljs.core.deref.call(null,mecca.music.audiocontext).createBufferSource();
source.buffer = buffer;

return source;
});
mecca.music.get_and_decode = (function mecca$music$get_and_decode(named_url){
var c__10462__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10462__auto__){
return (function (){
var f__10463__auto__ = (function (){var switch__10439__auto__ = ((function (c__10462__auto__){
return (function (state_24691){
var state_val_24692 = (state_24691[(1)]);
if((state_val_24692 === (1))){
var inst_24680 = mecca.music.load_sound.call(null,named_url);
var state_24691__$1 = state_24691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24691__$1,(2),inst_24680);
} else {
if((state_val_24692 === (2))){
var inst_24682 = (state_24691[(7)]);
var inst_24682__$1 = (state_24691[(2)]);
var state_24691__$1 = (function (){var statearr_24693 = state_24691;
(statearr_24693[(7)] = inst_24682__$1);

return statearr_24693;
})();
if(cljs.core.truth_(inst_24682__$1)){
var statearr_24694_24702 = state_24691__$1;
(statearr_24694_24702[(1)] = (3));

} else {
var statearr_24695_24703 = state_24691__$1;
(statearr_24695_24703[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (3))){
var inst_24682 = (state_24691[(7)]);
var inst_24684 = mecca.music.decode.call(null,inst_24682);
var state_24691__$1 = state_24691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24691__$1,(6),inst_24684);
} else {
if((state_val_24692 === (4))){
var state_24691__$1 = state_24691;
var statearr_24696_24704 = state_24691__$1;
(statearr_24696_24704[(2)] = null);

(statearr_24696_24704[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24692 === (5))){
var inst_24689 = (state_24691[(2)]);
var state_24691__$1 = state_24691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24691__$1,inst_24689);
} else {
if((state_val_24692 === (6))){
var inst_24686 = (state_24691[(2)]);
var state_24691__$1 = state_24691;
var statearr_24697_24705 = state_24691__$1;
(statearr_24697_24705[(2)] = inst_24686);

(statearr_24697_24705[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__10462__auto__))
;
return ((function (switch__10439__auto__,c__10462__auto__){
return (function() {
var mecca$music$get_and_decode_$_state_machine__10440__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__10440__auto____0 = (function (){
var statearr_24698 = [null,null,null,null,null,null,null,null];
(statearr_24698[(0)] = mecca$music$get_and_decode_$_state_machine__10440__auto__);

(statearr_24698[(1)] = (1));

return statearr_24698;
});
var mecca$music$get_and_decode_$_state_machine__10440__auto____1 = (function (state_24691){
while(true){
var ret_value__10441__auto__ = (function (){try{while(true){
var result__10442__auto__ = switch__10439__auto__.call(null,state_24691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10442__auto__;
}
break;
}
}catch (e24699){if((e24699 instanceof Object)){
var ex__10443__auto__ = e24699;
var statearr_24700_24706 = state_24691;
(statearr_24700_24706[(5)] = ex__10443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24707 = state_24691;
state_24691 = G__24707;
continue;
} else {
return ret_value__10441__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__10440__auto__ = function(state_24691){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__10440__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__10440__auto____1.call(this,state_24691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__10440__auto____0;
mecca$music$get_and_decode_$_state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__10440__auto____1;
return mecca$music$get_and_decode_$_state_machine__10440__auto__;
})()
;})(switch__10439__auto__,c__10462__auto__))
})();
var state__10464__auto__ = (function (){var statearr_24701 = f__10463__auto__.call(null);
(statearr_24701[(6)] = c__10462__auto__);

return statearr_24701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10464__auto__);
});})(c__10462__auto__))
);

return c__10462__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__10462__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10462__auto__){
return (function (){
var f__10463__auto__ = (function (){var switch__10439__auto__ = ((function (c__10462__auto__){
return (function (state_24736){
var state_val_24737 = (state_24736[(1)]);
if((state_val_24737 === (1))){
var inst_24708 = cljs.core.PersistentHashMap.EMPTY;
var inst_24709 = cljs.core.range.call(null,(1),(27));
var inst_24710 = inst_24708;
var inst_24711 = inst_24709;
var state_24736__$1 = (function (){var statearr_24738 = state_24736;
(statearr_24738[(7)] = inst_24711);

(statearr_24738[(8)] = inst_24710);

return statearr_24738;
})();
var statearr_24739_24751 = state_24736__$1;
(statearr_24739_24751[(2)] = null);

(statearr_24739_24751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (2))){
var inst_24711 = (state_24736[(7)]);
var inst_24713 = cljs.core.first.call(null,inst_24711);
var inst_24714 = (inst_24713 == null);
var inst_24715 = cljs.core.not.call(null,inst_24714);
var state_24736__$1 = state_24736;
if(inst_24715){
var statearr_24740_24752 = state_24736__$1;
(statearr_24740_24752[(1)] = (4));

} else {
var statearr_24741_24753 = state_24736__$1;
(statearr_24741_24753[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (3))){
var inst_24734 = (state_24736[(2)]);
var state_24736__$1 = state_24736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24736__$1,inst_24734);
} else {
if((state_val_24737 === (4))){
var inst_24711 = (state_24736[(7)]);
var inst_24717 = (state_24736[(9)]);
var inst_24717__$1 = cljs.core.first.call(null,inst_24711);
var inst_24718 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"sound","sound",-2127407070)];
var inst_24719 = ["/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24717__$1),".mp3"].join('');
var inst_24720 = [inst_24719,inst_24717__$1];
var inst_24721 = cljs.core.PersistentHashMap.fromArrays(inst_24718,inst_24720);
var inst_24722 = mecca.music.get_and_decode.call(null,inst_24721);
var state_24736__$1 = (function (){var statearr_24742 = state_24736;
(statearr_24742[(9)] = inst_24717__$1);

return statearr_24742;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24736__$1,(7),inst_24722);
} else {
if((state_val_24737 === (5))){
var inst_24710 = (state_24736[(8)]);
var state_24736__$1 = state_24736;
var statearr_24743_24754 = state_24736__$1;
(statearr_24743_24754[(2)] = inst_24710);

(statearr_24743_24754[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (6))){
var inst_24732 = (state_24736[(2)]);
var state_24736__$1 = state_24736;
var statearr_24744_24755 = state_24736__$1;
(statearr_24744_24755[(2)] = inst_24732);

(statearr_24744_24755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24737 === (7))){
var inst_24711 = (state_24736[(7)]);
var inst_24717 = (state_24736[(9)]);
var inst_24710 = (state_24736[(8)]);
var inst_24724 = (state_24736[(2)]);
var inst_24725 = cljs.core.prn.call(null,inst_24717);
var inst_24726 = cljs.core.prn.call(null,inst_24724);
var inst_24727 = cljs.core.assoc.call(null,inst_24710,inst_24717,inst_24724);
var inst_24728 = cljs.core.rest.call(null,inst_24711);
var inst_24710__$1 = inst_24727;
var inst_24711__$1 = inst_24728;
var state_24736__$1 = (function (){var statearr_24745 = state_24736;
(statearr_24745[(7)] = inst_24711__$1);

(statearr_24745[(10)] = inst_24726);

(statearr_24745[(8)] = inst_24710__$1);

(statearr_24745[(11)] = inst_24725);

return statearr_24745;
})();
var statearr_24746_24756 = state_24736__$1;
(statearr_24746_24756[(2)] = null);

(statearr_24746_24756[(1)] = (2));


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
});})(c__10462__auto__))
;
return ((function (switch__10439__auto__,c__10462__auto__){
return (function() {
var mecca$music$load_samples_$_state_machine__10440__auto__ = null;
var mecca$music$load_samples_$_state_machine__10440__auto____0 = (function (){
var statearr_24747 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24747[(0)] = mecca$music$load_samples_$_state_machine__10440__auto__);

(statearr_24747[(1)] = (1));

return statearr_24747;
});
var mecca$music$load_samples_$_state_machine__10440__auto____1 = (function (state_24736){
while(true){
var ret_value__10441__auto__ = (function (){try{while(true){
var result__10442__auto__ = switch__10439__auto__.call(null,state_24736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10442__auto__;
}
break;
}
}catch (e24748){if((e24748 instanceof Object)){
var ex__10443__auto__ = e24748;
var statearr_24749_24757 = state_24736;
(statearr_24749_24757[(5)] = ex__10443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24758 = state_24736;
state_24736 = G__24758;
continue;
} else {
return ret_value__10441__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__10440__auto__ = function(state_24736){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__10440__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__10440__auto____1.call(this,state_24736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__10440__auto____0;
mecca$music$load_samples_$_state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__10440__auto____1;
return mecca$music$load_samples_$_state_machine__10440__auto__;
})()
;})(switch__10439__auto__,c__10462__auto__))
})();
var state__10464__auto__ = (function (){var statearr_24750 = f__10463__auto__.call(null);
(statearr_24750[(6)] = c__10462__auto__);

return statearr_24750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10464__auto__);
});})(c__10462__auto__))
);

return c__10462__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__10462__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10462__auto__){
return (function (){
var f__10463__auto__ = (function (){var switch__10439__auto__ = ((function (c__10462__auto__){
return (function (state_24765){
var state_val_24766 = (state_24765[(1)]);
if((state_val_24766 === (1))){
var inst_24759 = mecca.music.load_samples.call(null);
var state_24765__$1 = state_24765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24765__$1,(2),inst_24759);
} else {
if((state_val_24766 === (2))){
var inst_24761 = (state_24765[(2)]);
var inst_24762 = mecca.music.samples = inst_24761;
var inst_24763 = cljs.core.prn.call(null,"Samples loaded");
var state_24765__$1 = (function (){var statearr_24767 = state_24765;
(statearr_24767[(7)] = inst_24762);

return statearr_24767;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24765__$1,inst_24763);
} else {
return null;
}
}
});})(c__10462__auto__))
;
return ((function (switch__10439__auto__,c__10462__auto__){
return (function() {
var mecca$music$state_machine__10440__auto__ = null;
var mecca$music$state_machine__10440__auto____0 = (function (){
var statearr_24768 = [null,null,null,null,null,null,null,null];
(statearr_24768[(0)] = mecca$music$state_machine__10440__auto__);

(statearr_24768[(1)] = (1));

return statearr_24768;
});
var mecca$music$state_machine__10440__auto____1 = (function (state_24765){
while(true){
var ret_value__10441__auto__ = (function (){try{while(true){
var result__10442__auto__ = switch__10439__auto__.call(null,state_24765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10442__auto__;
}
break;
}
}catch (e24769){if((e24769 instanceof Object)){
var ex__10443__auto__ = e24769;
var statearr_24770_24772 = state_24765;
(statearr_24770_24772[(5)] = ex__10443__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10441__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24773 = state_24765;
state_24765 = G__24773;
continue;
} else {
return ret_value__10441__auto__;
}
break;
}
});
mecca$music$state_machine__10440__auto__ = function(state_24765){
switch(arguments.length){
case 0:
return mecca$music$state_machine__10440__auto____0.call(this);
case 1:
return mecca$music$state_machine__10440__auto____1.call(this,state_24765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__10440__auto____0;
mecca$music$state_machine__10440__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__10440__auto____1;
return mecca$music$state_machine__10440__auto__;
})()
;})(switch__10439__auto__,c__10462__auto__))
})();
var state__10464__auto__ = (function (){var statearr_24771 = f__10463__auto__.call(null);
(statearr_24771[(6)] = c__10462__auto__);

return statearr_24771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10464__auto__);
});})(c__10462__auto__))
);

return c__10462__auto__;
})();
}
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
var G__24774 = midi_num;
switch (G__24774) {
case (56):
return 0.528;

break;
case 56.5:
return 0.533;

break;
case (57):
return 0.56;

break;
case 57.5:
return 0.6;

break;
case (58):
return 0.63;

break;
case 58.5:
return 0.68;

break;
case (59):
return 0.71;

break;
case 59.5:
return 0.725;

break;
case (60):
return 0.75;

break;
case 60.5:
return 0.8;

break;
case (61):
return 0.9;

break;
case 61.5:
return 0.89;

break;
case (62):
return 0.96;

break;
case 62.5:
return 0.99;

break;
case (63):
return 1.06;

break;
case 63.5:
return 1.09;

break;
case (64):
return 1.135;

break;
case 64.5:
return 1.2;

break;
case (65):
return 1.28;

break;
case 65.5:
return 1.35;

break;
case (66):
return 1.43;

break;
case 66.5:
return 1.47;

break;
case (67):
return 1.5;

break;
case 67.5:
return 1.59;

break;
case (68):
return 1.7;

break;
case 68.5:
return 1.79;

break;
case (69):
return 1.89;

break;
case 69.5:
return 1.96;

break;
case (70):
return 2.13;

break;
case 70.5:
return 2.24;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24774)].join('')));

}
});
mecca.music.play_sample = (function mecca$music$play_sample(instrument,pitch){
var context = mecca.music.audiocontext;
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,mecca.music.samples,instrument));
var sample_source = cljs.core.deref.call(null,context).createBufferSource();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate.call(null,pitch),cljs.core.deref.call(null,context).currentTime);

sample_source.connect(cljs.core.deref.call(null,context).destination);

sample_source.start();

return sample_source;
});
mecca.music.play_at = (function mecca$music$play_at(instrument,pitch,time){
var context = mecca.music.audiocontext;
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,mecca.music.samples,instrument));
var sample_source = cljs.core.deref.call(null,context).createBufferSource();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate.call(null,pitch),time);

sample_source.connect(cljs.core.deref.call(null,context).destination);

sample_source.start(time);

return sample_source;
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var now = cljs.core.deref.call(null,mecca.music.audiocontext).currentTime;
var tempo = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860)], null));

return cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (notes,now,tempo){
return (function mecca$music$play_song_BANG__$_iter__24776(s__24777){
return (new cljs.core.LazySeq(null,((function (notes,now,tempo){
return (function (){
var s__24777__$1 = s__24777;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24777__$1);
if(temp__5457__auto__){
var s__24777__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24777__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__24777__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__24779 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__24778 = (0);
while(true){
if((i__24778 < size__4323__auto__)){
var map__24780 = cljs.core._nth.call(null,c__4322__auto__,i__24778);
var map__24780__$1 = ((((!((map__24780 == null)))?(((((map__24780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24780):map__24780);
var time = cljs.core.get.call(null,map__24780__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.call(null,map__24780__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.call(null,map__24780__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append.call(null,b__24779,mecca.music.play_at.call(null,instrument,pitch,(now + (((60) / cljs.core.deref.call(null,tempo)) * time))));

var G__24784 = (i__24778 + (1));
i__24778 = G__24784;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24779),mecca$music$play_song_BANG__$_iter__24776.call(null,cljs.core.chunk_rest.call(null,s__24777__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24779),null);
}
} else {
var map__24782 = cljs.core.first.call(null,s__24777__$2);
var map__24782__$1 = ((((!((map__24782 == null)))?(((((map__24782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24782):map__24782);
var time = cljs.core.get.call(null,map__24782__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.call(null,map__24782__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.call(null,map__24782__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons.call(null,mecca.music.play_at.call(null,instrument,pitch,(now + (((60) / cljs.core.deref.call(null,tempo)) * time))),mecca$music$play_song_BANG__$_iter__24776.call(null,cljs.core.rest.call(null,s__24777__$2)));
}
} else {
return null;
}
break;
}
});})(notes,now,tempo))
,null,null));
});})(notes,now,tempo))
;
return iter__4324__auto__.call(null,cljs.core.deref.call(null,notes));
})());
});

//# sourceMappingURL=music7F45684.js.map
