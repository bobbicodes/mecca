// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
mecca.music.audiocontext = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(mecca.music.audio_context());
}
mecca.music.current_time = (function mecca$music$current_time(context){
return context.currentTime;
});
goog.exportSymbol('mecca.music.current_time', mecca.music.current_time);
mecca.music.lookahead = 25.0;
mecca.music.scheduleAheadTime = 0.1;
mecca.music.scheduler = (function mecca$music$scheduler(){
var next_note_time = (function (){var G__22738 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_note_DASH_time], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__22738) : re_frame.core.subscribe.call(null,G__22738));
})();
var current_note = (function (){var G__22739 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_note], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__22739) : re_frame.core.subscribe.call(null,G__22739));
})();
if((cljs.core.deref(next_note_time) < (mecca.music.scheduleAheadTime + mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext))))){
var G__22740 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schedule_DASH_note,cljs.core.deref(current_note),cljs.core.deref(next_note_time)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__22740) : re_frame.core.dispatch.call(null,G__22740));
} else {
var G__22741 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_note], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__22741) : re_frame.core.dispatch.call(null,G__22741));
}
});
mecca.music.mm = (function mecca$music$mm(time,instrument,pitch){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$instrument,instrument,cljs.core.cst$kw$pitch,pitch], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + (1)),cljs.core.cst$kw$instrument,instrument,cljs.core.cst$kw$pitch,pitch], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(1.5 + time),cljs.core.cst$kw$instrument,instrument,cljs.core.cst$kw$pitch,pitch], null)], null);
});
mecca.music.mm8 = (function mecca$music$mm8(time,instrument,pitch){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4324__auto__ = (function mecca$music$mm8_$_iter__22742(s__22743){
return (new cljs.core.LazySeq(null,(function (){
var s__22743__$1 = s__22743;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__22743__$1);
if(temp__5457__auto__){
var s__22743__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22743__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__22743__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__22745 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__22744 = (0);
while(true){
if((i__22744 < size__4323__auto__)){
var beat = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__22744);
cljs.core.chunk_append(b__22745,mecca.music.mm((beat + time),instrument,pitch));

var G__22746 = (i__22744 + (1));
i__22744 = G__22746;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22745),mecca$music$mm8_$_iter__22742(cljs.core.chunk_rest(s__22743__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22745),null);
}
} else {
var beat = cljs.core.first(s__22743__$2);
return cljs.core.cons(mecca.music.mm((beat + time),instrument,pitch),mecca$music$mm8_$_iter__22742(cljs.core.rest(s__22743__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(8),(2)));
})());
});
mecca.music.mmbass = (function mecca$music$mmbass(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(mecca.music.mm8((0),(6),(60)),mecca.music.mm8((8),(6),(60)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mecca.music.mm8((16),(6),(56)),mecca.music.mm8((24),(6),(56)),mecca.music.mm8((32),(6),(58)),mecca.music.mm8((40),(6),(58)),mecca.music.mm8((48),(6),(60)),mecca.music.mm8((56),(6),(60))], 0));
});
mecca.music.mario_jump_QMARK_ = (function mecca$music$mario_jump_QMARK_(){
var beat = cljs.core.deref((function (){var G__22748 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__22748) : re_frame.core.subscribe.call(null,G__22748));
})());
var notes = cljs.core.deref((function (){var G__22749 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__22749) : re_frame.core.subscribe.call(null,G__22749));
})());
if(cljs.core.truth_(cljs.core.deref((function (){var G__22750 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__22750) : re_frame.core.subscribe.call(null,G__22750));
})()))){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (beat,notes){
return (function (p1__22747_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__22747_SHARP_),beat);
});})(beat,notes))
,cljs.core.deref((function (){var G__22751 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__22751) : re_frame.core.subscribe.call(null,G__22751));
})()))))){
var G__22752 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jump_BANG_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__22752) : re_frame.core.dispatch.call(null,G__22752));
} else {
var G__22753 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$down_BANG_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__22753) : re_frame.core.dispatch.call(null,G__22753));
}
} else {
return null;
}
});
mecca.music.mario_move = (function mecca$music$mario_move(){
var playing_QMARK_ = cljs.core.deref((function (){var G__22754 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__22754) : re_frame.core.subscribe.call(null,G__22754));
})());
var beat = cljs.core.deref((function (){var G__22755 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__22755) : re_frame.core.subscribe.call(null,G__22755));
})());
if(cljs.core.truth_(playing_QMARK_)){
var G__22756 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$move_DASH_mario,((40) * beat)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__22756) : re_frame.core.dispatch.call(null,G__22756));
} else {
return null;
}
});
mecca.music.song_done_QMARK_ = (function mecca$music$song_done_QMARK_(){
var notes = (function (){var G__22758 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__22758) : re_frame.core.subscribe.call(null,G__22758));
})();
var playing_QMARK_ = cljs.core.deref((function (){var G__22759 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__22759) : re_frame.core.subscribe.call(null,G__22759));
})());
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (notes,playing_QMARK_,now){
return (function (p1__22757_SHARP_){
return cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__22757_SHARP_);
});})(notes,playing_QMARK_,now))
,cljs.core.deref(notes)));
var started = cljs.core.deref((function (){var G__22760 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__22760) : re_frame.core.subscribe.call(null,G__22760));
})());
var elapsed = (mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)) - started);
var beat_length = ((60) / cljs.core.deref((function (){var G__22761 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__22761) : re_frame.core.subscribe.call(null,G__22761));
})()));
var current_beat = (elapsed / beat_length);
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
var G__22762_22764 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_off], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__22762_22764) : re_frame.core.dispatch.call(null,G__22762_22764));
} else {
if(((started + beat_length) < now)){
var G__22763_22765 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$advance_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__22763_22765) : re_frame.core.dispatch.call(null,G__22763_22765));
} else {
}
}
} else {
}

mecca.music.mario_move();

return mecca.music.mario_jump_QMARK_();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__22766_22767 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tick_BANG_], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__22766_22767) : re_frame.core.dispatch.call(null,G__22766_22767));

mecca.music.song_done_QMARK_();

return mecca.music.scheduler();
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.do_timer !== 'undefined')){
} else {
mecca.music.do_timer = setInterval(mecca.music.dispatch_timer_event,(150));
}
mecca.music.load_sound = (function mecca$music$load_sound(named_url){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var req = (new XMLHttpRequest());
req.responseType = "arraybuffer";

req.onload = ((function (out,req){
return (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(req.status,(200))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(named_url,cljs.core.cst$kw$buffer,req.response));

return cljs.core.async.close_BANG_(out);
} else {
return cljs.core.async.close_BANG_(out);
}
});})(out,req))
;

req.open("GET",cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(named_url),true);

req.send();

return out;
});
mecca.music.decode = (function mecca$music$decode(named_url){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(named_url))){
cljs.core.deref(mecca.music.audiocontext).decodeAudioData(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(named_url),((function (out){
return (function (decoded_buffer){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(named_url,cljs.core.cst$kw$decoded_DASH_buffer,decoded_buffer));

return cljs.core.async.close_BANG_(out);
});})(out))
,((function (out){
return (function (){
console.error("Error loading file ",cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([named_url], 0)));

return cljs.core.async.close_BANG_(out);
});})(out))
);
} else {
cljs.core.async.close_BANG_(out);
}

return out;
});
mecca.music.buffer_source = (function mecca$music$buffer_source(buffer){
var source = cljs.core.deref(mecca.music.audiocontext).createBufferSource();
source.buffer = buffer;

return source;
});
mecca.music.get_and_decode = (function mecca$music$get_and_decode(named_url){
var c__18926__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18926__auto__){
return (function (){
var f__18927__auto__ = (function (){var switch__18743__auto__ = ((function (c__18926__auto__){
return (function (state_22779){
var state_val_22780 = (state_22779[(1)]);
if((state_val_22780 === (1))){
var inst_22768 = mecca.music.load_sound(named_url);
var state_22779__$1 = state_22779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22779__$1,(2),inst_22768);
} else {
if((state_val_22780 === (2))){
var inst_22770 = (state_22779[(7)]);
var inst_22770__$1 = (state_22779[(2)]);
var state_22779__$1 = (function (){var statearr_22781 = state_22779;
(statearr_22781[(7)] = inst_22770__$1);

return statearr_22781;
})();
if(cljs.core.truth_(inst_22770__$1)){
var statearr_22782_22790 = state_22779__$1;
(statearr_22782_22790[(1)] = (3));

} else {
var statearr_22783_22791 = state_22779__$1;
(statearr_22783_22791[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22780 === (3))){
var inst_22770 = (state_22779[(7)]);
var inst_22772 = mecca.music.decode(inst_22770);
var state_22779__$1 = state_22779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22779__$1,(6),inst_22772);
} else {
if((state_val_22780 === (4))){
var state_22779__$1 = state_22779;
var statearr_22784_22792 = state_22779__$1;
(statearr_22784_22792[(2)] = null);

(statearr_22784_22792[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22780 === (5))){
var inst_22777 = (state_22779[(2)]);
var state_22779__$1 = state_22779;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22779__$1,inst_22777);
} else {
if((state_val_22780 === (6))){
var inst_22774 = (state_22779[(2)]);
var state_22779__$1 = state_22779;
var statearr_22785_22793 = state_22779__$1;
(statearr_22785_22793[(2)] = inst_22774);

(statearr_22785_22793[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
});})(c__18926__auto__))
;
return ((function (switch__18743__auto__,c__18926__auto__){
return (function() {
var mecca$music$get_and_decode_$_state_machine__18744__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__18744__auto____0 = (function (){
var statearr_22786 = [null,null,null,null,null,null,null,null];
(statearr_22786[(0)] = mecca$music$get_and_decode_$_state_machine__18744__auto__);

(statearr_22786[(1)] = (1));

return statearr_22786;
});
var mecca$music$get_and_decode_$_state_machine__18744__auto____1 = (function (state_22779){
while(true){
var ret_value__18745__auto__ = (function (){try{while(true){
var result__18746__auto__ = switch__18743__auto__(state_22779);
if(cljs.core.keyword_identical_QMARK_(result__18746__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18746__auto__;
}
break;
}
}catch (e22787){if((e22787 instanceof Object)){
var ex__18747__auto__ = e22787;
var statearr_22788_22794 = state_22779;
(statearr_22788_22794[(5)] = ex__18747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22779);

return cljs.core.cst$kw$recur;
} else {
throw e22787;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18745__auto__,cljs.core.cst$kw$recur)){
var G__22795 = state_22779;
state_22779 = G__22795;
continue;
} else {
return ret_value__18745__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__18744__auto__ = function(state_22779){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__18744__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__18744__auto____1.call(this,state_22779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__18744__auto____0;
mecca$music$get_and_decode_$_state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__18744__auto____1;
return mecca$music$get_and_decode_$_state_machine__18744__auto__;
})()
;})(switch__18743__auto__,c__18926__auto__))
})();
var state__18928__auto__ = (function (){var statearr_22789 = (f__18927__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18927__auto__.cljs$core$IFn$_invoke$arity$0() : f__18927__auto__.call(null));
(statearr_22789[(6)] = c__18926__auto__);

return statearr_22789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18928__auto__);
});})(c__18926__auto__))
);

return c__18926__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__18926__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18926__auto__){
return (function (){
var f__18927__auto__ = (function (){var switch__18743__auto__ = ((function (c__18926__auto__){
return (function (state_22824){
var state_val_22825 = (state_22824[(1)]);
if((state_val_22825 === (1))){
var inst_22796 = cljs.core.PersistentHashMap.EMPTY;
var inst_22797 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(27));
var inst_22798 = inst_22796;
var inst_22799 = inst_22797;
var state_22824__$1 = (function (){var statearr_22826 = state_22824;
(statearr_22826[(7)] = inst_22799);

(statearr_22826[(8)] = inst_22798);

return statearr_22826;
})();
var statearr_22827_22839 = state_22824__$1;
(statearr_22827_22839[(2)] = null);

(statearr_22827_22839[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22825 === (2))){
var inst_22799 = (state_22824[(7)]);
var inst_22801 = cljs.core.first(inst_22799);
var inst_22802 = (inst_22801 == null);
var inst_22803 = cljs.core.not(inst_22802);
var state_22824__$1 = state_22824;
if(inst_22803){
var statearr_22828_22840 = state_22824__$1;
(statearr_22828_22840[(1)] = (4));

} else {
var statearr_22829_22841 = state_22824__$1;
(statearr_22829_22841[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22825 === (3))){
var inst_22822 = (state_22824[(2)]);
var state_22824__$1 = state_22824;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22824__$1,inst_22822);
} else {
if((state_val_22825 === (4))){
var inst_22805 = (state_22824[(9)]);
var inst_22799 = (state_22824[(7)]);
var inst_22805__$1 = cljs.core.first(inst_22799);
var inst_22806 = [cljs.core.cst$kw$url,cljs.core.cst$kw$sound];
var inst_22807 = ["/mecca/resources/public/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22805__$1),".mp3"].join('');
var inst_22808 = [inst_22807,inst_22805__$1];
var inst_22809 = cljs.core.PersistentHashMap.fromArrays(inst_22806,inst_22808);
var inst_22810 = mecca.music.get_and_decode(inst_22809);
var state_22824__$1 = (function (){var statearr_22830 = state_22824;
(statearr_22830[(9)] = inst_22805__$1);

return statearr_22830;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22824__$1,(7),inst_22810);
} else {
if((state_val_22825 === (5))){
var inst_22798 = (state_22824[(8)]);
var state_22824__$1 = state_22824;
var statearr_22831_22842 = state_22824__$1;
(statearr_22831_22842[(2)] = inst_22798);

(statearr_22831_22842[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22825 === (6))){
var inst_22820 = (state_22824[(2)]);
var state_22824__$1 = state_22824;
var statearr_22832_22843 = state_22824__$1;
(statearr_22832_22843[(2)] = inst_22820);

(statearr_22832_22843[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22825 === (7))){
var inst_22805 = (state_22824[(9)]);
var inst_22799 = (state_22824[(7)]);
var inst_22798 = (state_22824[(8)]);
var inst_22812 = (state_22824[(2)]);
var inst_22813 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_22805], 0));
var inst_22814 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_22812], 0));
var inst_22815 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_22798,inst_22805,inst_22812);
var inst_22816 = cljs.core.rest(inst_22799);
var inst_22798__$1 = inst_22815;
var inst_22799__$1 = inst_22816;
var state_22824__$1 = (function (){var statearr_22833 = state_22824;
(statearr_22833[(7)] = inst_22799__$1);

(statearr_22833[(10)] = inst_22813);

(statearr_22833[(8)] = inst_22798__$1);

(statearr_22833[(11)] = inst_22814);

return statearr_22833;
})();
var statearr_22834_22844 = state_22824__$1;
(statearr_22834_22844[(2)] = null);

(statearr_22834_22844[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__18926__auto__))
;
return ((function (switch__18743__auto__,c__18926__auto__){
return (function() {
var mecca$music$load_samples_$_state_machine__18744__auto__ = null;
var mecca$music$load_samples_$_state_machine__18744__auto____0 = (function (){
var statearr_22835 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22835[(0)] = mecca$music$load_samples_$_state_machine__18744__auto__);

(statearr_22835[(1)] = (1));

return statearr_22835;
});
var mecca$music$load_samples_$_state_machine__18744__auto____1 = (function (state_22824){
while(true){
var ret_value__18745__auto__ = (function (){try{while(true){
var result__18746__auto__ = switch__18743__auto__(state_22824);
if(cljs.core.keyword_identical_QMARK_(result__18746__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18746__auto__;
}
break;
}
}catch (e22836){if((e22836 instanceof Object)){
var ex__18747__auto__ = e22836;
var statearr_22837_22845 = state_22824;
(statearr_22837_22845[(5)] = ex__18747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22824);

return cljs.core.cst$kw$recur;
} else {
throw e22836;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18745__auto__,cljs.core.cst$kw$recur)){
var G__22846 = state_22824;
state_22824 = G__22846;
continue;
} else {
return ret_value__18745__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__18744__auto__ = function(state_22824){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__18744__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__18744__auto____1.call(this,state_22824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__18744__auto____0;
mecca$music$load_samples_$_state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__18744__auto____1;
return mecca$music$load_samples_$_state_machine__18744__auto__;
})()
;})(switch__18743__auto__,c__18926__auto__))
})();
var state__18928__auto__ = (function (){var statearr_22838 = (f__18927__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18927__auto__.cljs$core$IFn$_invoke$arity$0() : f__18927__auto__.call(null));
(statearr_22838[(6)] = c__18926__auto__);

return statearr_22838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18928__auto__);
});})(c__18926__auto__))
);

return c__18926__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__18926__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18926__auto__){
return (function (){
var f__18927__auto__ = (function (){var switch__18743__auto__ = ((function (c__18926__auto__){
return (function (state_22853){
var state_val_22854 = (state_22853[(1)]);
if((state_val_22854 === (1))){
var inst_22847 = mecca.music.load_samples();
var state_22853__$1 = state_22853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22853__$1,(2),inst_22847);
} else {
if((state_val_22854 === (2))){
var inst_22849 = (state_22853[(2)]);
var inst_22850 = mecca.music.samples = inst_22849;
var inst_22851 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_22853__$1 = (function (){var statearr_22855 = state_22853;
(statearr_22855[(7)] = inst_22850);

return statearr_22855;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22853__$1,inst_22851);
} else {
return null;
}
}
});})(c__18926__auto__))
;
return ((function (switch__18743__auto__,c__18926__auto__){
return (function() {
var mecca$music$state_machine__18744__auto__ = null;
var mecca$music$state_machine__18744__auto____0 = (function (){
var statearr_22856 = [null,null,null,null,null,null,null,null];
(statearr_22856[(0)] = mecca$music$state_machine__18744__auto__);

(statearr_22856[(1)] = (1));

return statearr_22856;
});
var mecca$music$state_machine__18744__auto____1 = (function (state_22853){
while(true){
var ret_value__18745__auto__ = (function (){try{while(true){
var result__18746__auto__ = switch__18743__auto__(state_22853);
if(cljs.core.keyword_identical_QMARK_(result__18746__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18746__auto__;
}
break;
}
}catch (e22857){if((e22857 instanceof Object)){
var ex__18747__auto__ = e22857;
var statearr_22858_22860 = state_22853;
(statearr_22858_22860[(5)] = ex__18747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22853);

return cljs.core.cst$kw$recur;
} else {
throw e22857;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18745__auto__,cljs.core.cst$kw$recur)){
var G__22861 = state_22853;
state_22853 = G__22861;
continue;
} else {
return ret_value__18745__auto__;
}
break;
}
});
mecca$music$state_machine__18744__auto__ = function(state_22853){
switch(arguments.length){
case 0:
return mecca$music$state_machine__18744__auto____0.call(this);
case 1:
return mecca$music$state_machine__18744__auto____1.call(this,state_22853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__18744__auto____0;
mecca$music$state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__18744__auto____1;
return mecca$music$state_machine__18744__auto__;
})()
;})(switch__18743__auto__,c__18926__auto__))
})();
var state__18928__auto__ = (function (){var statearr_22859 = (f__18927__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18927__auto__.cljs$core$IFn$_invoke$arity$0() : f__18927__auto__.call(null));
(statearr_22859[(6)] = c__18926__auto__);

return statearr_22859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18928__auto__);
});})(c__18926__auto__))
);

return c__18926__auto__;
})();
}
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
var G__22862 = midi_num;
switch (G__22862) {
case (55):
return 0.5;

break;
case (56):
return 0.5297315471796479;

break;
case (57):
return 0.5612310241546867;

break;
case (58):
return 0.5946035575013607;

break;
case (59):
return 0.6299605249474368;

break;
case (60):
return 0.6674199270850174;

break;
case (61):
return 0.7071067811865477;

break;
case (62):
return 0.7491535384383409;

break;
case (63):
return 0.7937005259840998;

break;
case (64):
return 0.8408964152537146;

break;
case (65):
return 0.8908987181403394;

break;
case (66):
return 0.9438743126816935;

break;
case (67):
return (1);

break;
case (68):
return 1.0594630943592953;

break;
case (69):
return 1.122462048309373;

break;
case (70):
return 1.1892071150027212;

break;
case (71):
return 1.2599210498948734;

break;
case (72):
return 1.3348398541700346;

break;
case (73):
return 1.4142135623730954;

break;
case (74):
return 1.498307076876682;

break;
case (75):
return 1.5874010519682;

break;
case (76):
return 1.6817928305074297;

break;
case (77):
return 1.7817974362806792;

break;
case (78):
return 1.8877486253633877;

break;
case (79):
return (2);

break;
case (80):
return 2.1189261887185906;

break;
case (81):
return 2.244924096618746;

break;
case (82):
return 2.3784142300054425;

break;
case (83):
return 2.519842099789747;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22862)].join('')));

}
});
mecca.music.play_sample = (function mecca$music$play_sample(instrument,pitch){
var context = mecca.music.audiocontext;
var audio_buffer = cljs.core.cst$kw$decoded_DASH_buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.samples,instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
var compressor = cljs.core.deref(context).createDynamicsCompressor();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),cljs.core.deref(context).currentTime);

sample_source.connect(cljs.core.deref(context).destination);

sample_source.start();

return sample_source;
});
mecca.music.play_at = (function mecca$music$play_at(instrument,pitch,time){
var context = mecca.music.audiocontext;
var audio_buffer = cljs.core.cst$kw$decoded_DASH_buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.samples,instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(((((83) < pitch))?(pitch - (24)):pitch)),time);

sample_source.connect(cljs.core.deref(context).destination);

sample_source.start(time);

return sample_source;
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = (function (){var G__22864 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__22864) : re_frame.core.subscribe.call(null,G__22864));
})();
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var tempo = (function (){var G__22865 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__22865) : re_frame.core.subscribe.call(null,G__22865));
})();
var G__22866_22875 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__22866_22875) : re_frame.core.dispatch.call(null,G__22866_22875));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (notes,now,tempo){
return (function mecca$music$play_song_BANG__$_iter__22867(s__22868){
return (new cljs.core.LazySeq(null,((function (notes,now,tempo){
return (function (){
var s__22868__$1 = s__22868;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__22868__$1);
if(temp__5457__auto__){
var s__22868__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22868__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__22868__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__22870 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__22869 = (0);
while(true){
if((i__22869 < size__4323__auto__)){
var map__22871 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__22869);
var map__22871__$1 = ((((!((map__22871 == null)))?(((((map__22871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22871):map__22871);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22871__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22871__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22871__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__22870,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__22876 = (i__22869 + (1));
i__22869 = G__22876;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22870),mecca$music$play_song_BANG__$_iter__22867(cljs.core.chunk_rest(s__22868__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22870),null);
}
} else {
var map__22873 = cljs.core.first(s__22868__$2);
var map__22873__$1 = ((((!((map__22873 == null)))?(((((map__22873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22873):map__22873);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22873__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22873__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22873__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__22867(cljs.core.rest(s__22868__$2)));
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
return iter__4324__auto__(cljs.core.deref(notes));
})());
});
