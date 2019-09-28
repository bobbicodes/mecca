// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('ajax.protocols');
goog.require('mecca.audio.scale');
goog.require('mecca.audio.synthesis');
goog.require('mecca.audio.melody');
/**
 * Construct an audio context in a way that works even if it's prefixed.
 */
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
/**
 * Return the current time as recorded by the audio context.
 */
mecca.music.current_time = (function mecca$music$current_time(context){
return context.currentTime;
});
goog.exportSymbol('mecca.music.current_time', mecca.music.current_time);
/**
 * Convert a synth (actually a reader fn) into a concrete
 *   subgraph by supplying context and timing.
 */
mecca.music.run_with = (function mecca$music$run_with(synth,context,at,duration){
return (synth.cljs$core$IFn$_invoke$arity$3 ? synth.cljs$core$IFn$_invoke$arity$3(context,at,duration) : synth.call(null,context,at,duration));
});
goog.exportSymbol('mecca.music.run_with', mecca.music.run_with);
mecca.music.plug = (function mecca$music$plug(param,input,context,at,duration){

if(typeof input === 'number'){
return param.setValueAtTime(input,at);
} else {
return cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(mecca.music.run_with(input,context,at,duration)).connect(param);
}
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__19781 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tick_BANG_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19781) : re_frame.core.dispatch.call(null,G__19781));
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.do_timer !== 'undefined')){
} else {
mecca.music.do_timer = setInterval(mecca.music.dispatch_timer_event,(200));
}
mecca.music.play_noise_BANG_ = (function mecca$music$play_noise_BANG_(start,duration){
var context = mecca.music.audiocontext;
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = cljs.core.deref(context).createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var noise = cljs.core.deref(context).createBufferSource();
var now = mecca.music.current_time(cljs.core.deref(context));
var seq__19782_19786 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(frame_count));
var chunk__19783_19787 = null;
var count__19784_19788 = (0);
var i__19785_19789 = (0);
while(true){
if((i__19785_19789 < count__19784_19788)){
var i_19790 = chunk__19783_19787.cljs$core$IIndexed$_nth$arity$2(null,i__19785_19789);
(data[i_19790] = ((Math.random() * 2.0) - 1.0));


var G__19791 = seq__19782_19786;
var G__19792 = chunk__19783_19787;
var G__19793 = count__19784_19788;
var G__19794 = (i__19785_19789 + (1));
seq__19782_19786 = G__19791;
chunk__19783_19787 = G__19792;
count__19784_19788 = G__19793;
i__19785_19789 = G__19794;
continue;
} else {
var temp__5457__auto___19795 = cljs.core.seq(seq__19782_19786);
if(temp__5457__auto___19795){
var seq__19782_19796__$1 = temp__5457__auto___19795;
if(cljs.core.chunked_seq_QMARK_(seq__19782_19796__$1)){
var c__4351__auto___19797 = cljs.core.chunk_first(seq__19782_19796__$1);
var G__19798 = cljs.core.chunk_rest(seq__19782_19796__$1);
var G__19799 = c__4351__auto___19797;
var G__19800 = cljs.core.count(c__4351__auto___19797);
var G__19801 = (0);
seq__19782_19786 = G__19798;
chunk__19783_19787 = G__19799;
count__19784_19788 = G__19800;
i__19785_19789 = G__19801;
continue;
} else {
var i_19802 = cljs.core.first(seq__19782_19796__$1);
(data[i_19802] = ((Math.random() * 2.0) - 1.0));


var G__19803 = cljs.core.next(seq__19782_19796__$1);
var G__19804 = null;
var G__19805 = (0);
var G__19806 = (0);
seq__19782_19786 = G__19803;
chunk__19783_19787 = G__19804;
count__19784_19788 = G__19805;
i__19785_19789 = G__19806;
continue;
}
} else {
}
}
break;
}

noise.buffer = buffer;

noise.connect(context.destination);

noise.start((now + start));

return noise.stop(((now + start) + duration));
});
mecca.music.play_sample_BANG_ = (function mecca$music$play_sample_BANG_(instrument,pitch){
var context = mecca.music.audiocontext;
var now = mecca.music.current_time(cljs.core.deref(context));
var buffer = (function (){var G__19807 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sample_DASH_buffer,instrument], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19807) : re_frame.core.subscribe.call(null,G__19807));
})();
var sample_source = cljs.core.deref(context).createBufferSource();
var playback_rate = (pitch / (2));
sample_source.buffer = cljs.core.deref(buffer);

sample_source.playbackRate.setValueAtTime(playback_rate,now);

sample_source.connect(cljs.core.deref(context).destination);

return sample_source.start();
});
mecca.music.subgraph = (function mecca$music$subgraph(var_args){
var G__19809 = arguments.length;
switch (G__19809) {
case 2:
return mecca.music.subgraph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return mecca.music.subgraph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mecca.music.subgraph.cljs$core$IFn$_invoke$arity$2 = (function (input,output){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,input,cljs.core.cst$kw$output,output], null);
});

mecca.music.subgraph.cljs$core$IFn$_invoke$arity$1 = (function (singleton){
return mecca.music.subgraph.cljs$core$IFn$_invoke$arity$2(singleton,singleton);
});

mecca.music.subgraph.cljs$lang$maxFixedArity = 2;

/**
 * Multiply the signal by level.
 */
mecca.music.gain = (function mecca$music$gain(level){
return (function (context,at,duration){
return mecca.music.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__19811 = context.createGain();
mecca.music.plug(G__19811.gain,level,context,at,duration);

return G__19811;
})());
});
});
goog.exportSymbol('mecca.music.gain', mecca.music.gain);
/**
 * A graph of synthesis nodes without an input,
 *   so another graph can't connect to it.
 */
mecca.music.source = (function mecca$music$source(node){
return mecca.music.subgraph.cljs$core$IFn$_invoke$arity$2(null,node);
});
/**
 * A graph of synthesis nodes without an output,
 *   so it can't connect to another graph.
 */
mecca.music.sink = (function mecca$music$sink(node){
return mecca.music.subgraph.cljs$core$IFn$_invoke$arity$2(node,null);
});
/**
 * The destination of the audio context i.e. the speakers.
 */
mecca.music.destination = (function mecca$music$destination(context,at,duration){
return mecca.music.sink(context.destination);
});
goog.exportSymbol('mecca.music.destination', mecca.music.destination);
/**
 * Like apply, but for the node graphs synths produce.
 */
mecca.music.apply_to_graph = (function mecca$music$apply_to_graph(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19815 = arguments.length;
var i__4532__auto___19816 = (0);
while(true){
if((i__4532__auto___19816 < len__4531__auto___19815)){
args__4534__auto__.push((arguments[i__4532__auto___19816]));

var G__19817 = (i__4532__auto___19816 + (1));
i__4532__auto___19816 = G__19817;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return mecca.music.apply_to_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

mecca.music.apply_to_graph.cljs$core$IFn$_invoke$arity$variadic = (function (f,synths){
return (function (context,at,duration){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19812_SHARP_){
return mecca.music.run_with(p1__19812_SHARP_,context,at,duration);
}),synths));
});
});

mecca.music.apply_to_graph.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mecca.music.apply_to_graph.cljs$lang$applyTo = (function (seq19813){
var G__19814 = cljs.core.first(seq19813);
var seq19813__$1 = cljs.core.next(seq19813);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19814,seq19813__$1);
});

mecca.music.join_in_series = (function mecca$music$join_in_series(graph1,graph2){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph1).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph2));

return mecca.music.subgraph.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph1),cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph2));
});
/**
 * Use the output of one synth as the input to another.
 */
mecca.music.connect = (function mecca$music$connect(upstream_synth,downstream_synth){
return mecca.music.apply_to_graph.cljs$core$IFn$_invoke$arity$variadic(mecca.music.join_in_series,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([upstream_synth,downstream_synth], 0));
});
goog.exportSymbol('mecca.music.connect', mecca.music.connect);
mecca.music.get_mp3 = (function mecca$music$get_mp3(uri,callback){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(uri,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$response_DASH_format,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$arraybuffer,cljs.core.cst$kw$read,ajax.protocols._body,cljs.core.cst$kw$description,"audio",cljs.core.cst$kw$content_DASH_type,"audio/mpeg"], null),cljs.core.cst$kw$handler,callback], null)], 0));
});
/**
 * Play a sample addressed via a URI. Until fetching and decoding is complete, it will play silence.
 */
mecca.music.raw_sample = (function mecca$music$raw_sample(uri){
var psuedo_promise = {};
mecca.music.get_mp3(uri,((function (psuedo_promise){
return (function (p1__19818_SHARP_){
return psuedo_promise.data = p1__19818_SHARP_;
});})(psuedo_promise))
);

return ((function (psuedo_promise){
return (function (context,at,duration){
return mecca.music.source((function (){var node = (function (){var G__19821 = context.createBufferSource();
G__19821.start(at);

G__19821.stop((at + duration));

return G__19821;
})();
var set_buffer = ((function (node,psuedo_promise){
return (function (buffer){
psuedo_promise.buffer = buffer;

return node.buffer = buffer;
});})(node,psuedo_promise))
;
var temp__5457__auto___19822 = psuedo_promise.data;
if(cljs.core.truth_(temp__5457__auto___19822)){
var data_19823 = temp__5457__auto___19822;
var temp__5455__auto___19824 = psuedo_promise.buffer;
if(cljs.core.truth_(temp__5455__auto___19824)){
var buffer_19825 = temp__5455__auto___19824;
set_buffer(buffer_19825);
} else {
context.decodeAudioData(data_19823,set_buffer);
}
} else {
}

return node;
})());
});
;})(psuedo_promise))
});
mecca.music.sample = cljs.core.memoize(mecca.music.raw_sample);
goog.exportSymbol('mecca.music.sample', mecca.music.sample);
mecca.music.play_mp3_BANG_ = (function mecca$music$play_mp3_BANG_(){
var context = mecca.music.audiocontext;
var now = mecca.music.current_time(cljs.core.deref(context));
var sample_source = cljs.core.deref(context).createBufferSource();
var set_buffer = sample_source.buffer = null;
var pitched = sample_source.playbackRate.setValueAtTime(0.7,now);
var mp3 = mecca.music.connect((mecca.music.sample.cljs$core$IFn$_invoke$arity$1 ? mecca.music.sample.cljs$core$IFn$_invoke$arity$1("/resources/public/audio/1.mp3") : mecca.music.sample.call(null,"/resources/public/audio/1.mp3")),mecca.music.destination);
return mecca.music.run_with(mp3,cljs.core.deref(context),now,0.5);
});
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
var c__15911__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15911__auto__){
return (function (){
var f__15912__auto__ = (function (){var switch__15728__auto__ = ((function (c__15911__auto__){
return (function (state_19837){
var state_val_19838 = (state_19837[(1)]);
if((state_val_19838 === (1))){
var inst_19826 = mecca.music.load_sound(named_url);
var state_19837__$1 = state_19837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19837__$1,(2),inst_19826);
} else {
if((state_val_19838 === (2))){
var inst_19828 = (state_19837[(7)]);
var inst_19828__$1 = (state_19837[(2)]);
var state_19837__$1 = (function (){var statearr_19839 = state_19837;
(statearr_19839[(7)] = inst_19828__$1);

return statearr_19839;
})();
if(cljs.core.truth_(inst_19828__$1)){
var statearr_19840_19848 = state_19837__$1;
(statearr_19840_19848[(1)] = (3));

} else {
var statearr_19841_19849 = state_19837__$1;
(statearr_19841_19849[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19838 === (3))){
var inst_19828 = (state_19837[(7)]);
var inst_19830 = mecca.music.decode(inst_19828);
var state_19837__$1 = state_19837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19837__$1,(6),inst_19830);
} else {
if((state_val_19838 === (4))){
var state_19837__$1 = state_19837;
var statearr_19842_19850 = state_19837__$1;
(statearr_19842_19850[(2)] = null);

(statearr_19842_19850[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19838 === (5))){
var inst_19835 = (state_19837[(2)]);
var state_19837__$1 = state_19837;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19837__$1,inst_19835);
} else {
if((state_val_19838 === (6))){
var inst_19832 = (state_19837[(2)]);
var state_19837__$1 = state_19837;
var statearr_19843_19851 = state_19837__$1;
(statearr_19843_19851[(2)] = inst_19832);

(statearr_19843_19851[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
});})(c__15911__auto__))
;
return ((function (switch__15728__auto__,c__15911__auto__){
return (function() {
var mecca$music$get_and_decode_$_state_machine__15729__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__15729__auto____0 = (function (){
var statearr_19844 = [null,null,null,null,null,null,null,null];
(statearr_19844[(0)] = mecca$music$get_and_decode_$_state_machine__15729__auto__);

(statearr_19844[(1)] = (1));

return statearr_19844;
});
var mecca$music$get_and_decode_$_state_machine__15729__auto____1 = (function (state_19837){
while(true){
var ret_value__15730__auto__ = (function (){try{while(true){
var result__15731__auto__ = switch__15728__auto__(state_19837);
if(cljs.core.keyword_identical_QMARK_(result__15731__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15731__auto__;
}
break;
}
}catch (e19845){if((e19845 instanceof Object)){
var ex__15732__auto__ = e19845;
var statearr_19846_19852 = state_19837;
(statearr_19846_19852[(5)] = ex__15732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19837);

return cljs.core.cst$kw$recur;
} else {
throw e19845;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15730__auto__,cljs.core.cst$kw$recur)){
var G__19853 = state_19837;
state_19837 = G__19853;
continue;
} else {
return ret_value__15730__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__15729__auto__ = function(state_19837){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__15729__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__15729__auto____1.call(this,state_19837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__15729__auto____0;
mecca$music$get_and_decode_$_state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__15729__auto____1;
return mecca$music$get_and_decode_$_state_machine__15729__auto__;
})()
;})(switch__15728__auto__,c__15911__auto__))
})();
var state__15913__auto__ = (function (){var statearr_19847 = (f__15912__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15912__auto__.cljs$core$IFn$_invoke$arity$0() : f__15912__auto__.call(null));
(statearr_19847[(6)] = c__15911__auto__);

return statearr_19847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15913__auto__);
});})(c__15911__auto__))
);

return c__15911__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__15911__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15911__auto__){
return (function (){
var f__15912__auto__ = (function (){var switch__15728__auto__ = ((function (c__15911__auto__){
return (function (state_19882){
var state_val_19883 = (state_19882[(1)]);
if((state_val_19883 === (1))){
var inst_19854 = cljs.core.PersistentHashMap.EMPTY;
var inst_19855 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(27));
var inst_19856 = inst_19854;
var inst_19857 = inst_19855;
var state_19882__$1 = (function (){var statearr_19884 = state_19882;
(statearr_19884[(7)] = inst_19857);

(statearr_19884[(8)] = inst_19856);

return statearr_19884;
})();
var statearr_19885_19897 = state_19882__$1;
(statearr_19885_19897[(2)] = null);

(statearr_19885_19897[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19883 === (2))){
var inst_19857 = (state_19882[(7)]);
var inst_19859 = cljs.core.first(inst_19857);
var inst_19860 = (inst_19859 == null);
var inst_19861 = cljs.core.not(inst_19860);
var state_19882__$1 = state_19882;
if(inst_19861){
var statearr_19886_19898 = state_19882__$1;
(statearr_19886_19898[(1)] = (4));

} else {
var statearr_19887_19899 = state_19882__$1;
(statearr_19887_19899[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19883 === (3))){
var inst_19880 = (state_19882[(2)]);
var state_19882__$1 = state_19882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19882__$1,inst_19880);
} else {
if((state_val_19883 === (4))){
var inst_19857 = (state_19882[(7)]);
var inst_19863 = (state_19882[(9)]);
var inst_19863__$1 = cljs.core.first(inst_19857);
var inst_19864 = [cljs.core.cst$kw$url,cljs.core.cst$kw$sound];
var inst_19865 = ["/mecca/resources/public/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19863__$1),".mp3"].join('');
var inst_19866 = [inst_19865,inst_19863__$1];
var inst_19867 = cljs.core.PersistentHashMap.fromArrays(inst_19864,inst_19866);
var inst_19868 = mecca.music.get_and_decode(inst_19867);
var state_19882__$1 = (function (){var statearr_19888 = state_19882;
(statearr_19888[(9)] = inst_19863__$1);

return statearr_19888;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19882__$1,(7),inst_19868);
} else {
if((state_val_19883 === (5))){
var inst_19856 = (state_19882[(8)]);
var state_19882__$1 = state_19882;
var statearr_19889_19900 = state_19882__$1;
(statearr_19889_19900[(2)] = inst_19856);

(statearr_19889_19900[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19883 === (6))){
var inst_19878 = (state_19882[(2)]);
var state_19882__$1 = state_19882;
var statearr_19890_19901 = state_19882__$1;
(statearr_19890_19901[(2)] = inst_19878);

(statearr_19890_19901[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19883 === (7))){
var inst_19857 = (state_19882[(7)]);
var inst_19856 = (state_19882[(8)]);
var inst_19863 = (state_19882[(9)]);
var inst_19870 = (state_19882[(2)]);
var inst_19871 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_19863], 0));
var inst_19872 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_19870], 0));
var inst_19873 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_19856,inst_19863,inst_19870);
var inst_19874 = cljs.core.rest(inst_19857);
var inst_19856__$1 = inst_19873;
var inst_19857__$1 = inst_19874;
var state_19882__$1 = (function (){var statearr_19891 = state_19882;
(statearr_19891[(7)] = inst_19857__$1);

(statearr_19891[(8)] = inst_19856__$1);

(statearr_19891[(10)] = inst_19871);

(statearr_19891[(11)] = inst_19872);

return statearr_19891;
})();
var statearr_19892_19902 = state_19882__$1;
(statearr_19892_19902[(2)] = null);

(statearr_19892_19902[(1)] = (2));


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
});})(c__15911__auto__))
;
return ((function (switch__15728__auto__,c__15911__auto__){
return (function() {
var mecca$music$load_samples_$_state_machine__15729__auto__ = null;
var mecca$music$load_samples_$_state_machine__15729__auto____0 = (function (){
var statearr_19893 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19893[(0)] = mecca$music$load_samples_$_state_machine__15729__auto__);

(statearr_19893[(1)] = (1));

return statearr_19893;
});
var mecca$music$load_samples_$_state_machine__15729__auto____1 = (function (state_19882){
while(true){
var ret_value__15730__auto__ = (function (){try{while(true){
var result__15731__auto__ = switch__15728__auto__(state_19882);
if(cljs.core.keyword_identical_QMARK_(result__15731__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15731__auto__;
}
break;
}
}catch (e19894){if((e19894 instanceof Object)){
var ex__15732__auto__ = e19894;
var statearr_19895_19903 = state_19882;
(statearr_19895_19903[(5)] = ex__15732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19882);

return cljs.core.cst$kw$recur;
} else {
throw e19894;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15730__auto__,cljs.core.cst$kw$recur)){
var G__19904 = state_19882;
state_19882 = G__19904;
continue;
} else {
return ret_value__15730__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__15729__auto__ = function(state_19882){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__15729__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__15729__auto____1.call(this,state_19882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__15729__auto____0;
mecca$music$load_samples_$_state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__15729__auto____1;
return mecca$music$load_samples_$_state_machine__15729__auto__;
})()
;})(switch__15728__auto__,c__15911__auto__))
})();
var state__15913__auto__ = (function (){var statearr_19896 = (f__15912__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15912__auto__.cljs$core$IFn$_invoke$arity$0() : f__15912__auto__.call(null));
(statearr_19896[(6)] = c__15911__auto__);

return statearr_19896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15913__auto__);
});})(c__15911__auto__))
);

return c__15911__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__15911__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15911__auto__){
return (function (){
var f__15912__auto__ = (function (){var switch__15728__auto__ = ((function (c__15911__auto__){
return (function (state_19911){
var state_val_19912 = (state_19911[(1)]);
if((state_val_19912 === (1))){
var inst_19905 = mecca.music.load_samples();
var state_19911__$1 = state_19911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19911__$1,(2),inst_19905);
} else {
if((state_val_19912 === (2))){
var inst_19907 = (state_19911[(2)]);
var inst_19908 = mecca.music.samples = inst_19907;
var inst_19909 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_19911__$1 = (function (){var statearr_19913 = state_19911;
(statearr_19913[(7)] = inst_19908);

return statearr_19913;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19911__$1,inst_19909);
} else {
return null;
}
}
});})(c__15911__auto__))
;
return ((function (switch__15728__auto__,c__15911__auto__){
return (function() {
var mecca$music$state_machine__15729__auto__ = null;
var mecca$music$state_machine__15729__auto____0 = (function (){
var statearr_19914 = [null,null,null,null,null,null,null,null];
(statearr_19914[(0)] = mecca$music$state_machine__15729__auto__);

(statearr_19914[(1)] = (1));

return statearr_19914;
});
var mecca$music$state_machine__15729__auto____1 = (function (state_19911){
while(true){
var ret_value__15730__auto__ = (function (){try{while(true){
var result__15731__auto__ = switch__15728__auto__(state_19911);
if(cljs.core.keyword_identical_QMARK_(result__15731__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15731__auto__;
}
break;
}
}catch (e19915){if((e19915 instanceof Object)){
var ex__15732__auto__ = e19915;
var statearr_19916_19918 = state_19911;
(statearr_19916_19918[(5)] = ex__15732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19911);

return cljs.core.cst$kw$recur;
} else {
throw e19915;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15730__auto__,cljs.core.cst$kw$recur)){
var G__19919 = state_19911;
state_19911 = G__19919;
continue;
} else {
return ret_value__15730__auto__;
}
break;
}
});
mecca$music$state_machine__15729__auto__ = function(state_19911){
switch(arguments.length){
case 0:
return mecca$music$state_machine__15729__auto____0.call(this);
case 1:
return mecca$music$state_machine__15729__auto____1.call(this,state_19911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__15729__auto____0;
mecca$music$state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__15729__auto____1;
return mecca$music$state_machine__15729__auto__;
})()
;})(switch__15728__auto__,c__15911__auto__))
})();
var state__15913__auto__ = (function (){var statearr_19917 = (f__15912__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15912__auto__.cljs$core$IFn$_invoke$arity$0() : f__15912__auto__.call(null));
(statearr_19917[(6)] = c__15911__auto__);

return statearr_19917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15913__auto__);
});})(c__15911__auto__))
);

return c__15911__auto__;
})();
}
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
var G__19920 = midi_num;
switch (G__19920) {
case (49):
return 0.25;

break;
case (50):
return 0.28;

break;
case (51):
return 0.31;

break;
case (52):
return 0.35;

break;
case (53):
return 0.375;

break;
case (54):
return 0.41;

break;
case (55):
return 0.46;

break;
case (56):
return 0.5;

break;
case (57):
return 0.55;

break;
case (58):
return 0.63;

break;
case (59):
return 0.7;

break;
case (60):
return 0.75;

break;
case (61):
return 0.85;

break;
case (62):
return 0.96;

break;
case (63):
return (1);

break;
case (64):
return 1.135;

break;
case (65):
return 1.28;

break;
case (66):
return 1.43;

break;
case (67):
return 1.5;

break;
case (68):
return 1.714285714285714;

break;
case (69):
return 1.8571428571428568;

break;
case (70):
return (2);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19920)].join('')));

}
});
mecca.music.play_sample = (function mecca$music$play_sample(instrument,pitch){
var context = mecca.music.audiocontext;
var audio_buffer = cljs.core.cst$kw$decoded_DASH_buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.samples,instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(((77) - pitch)),cljs.core.deref(context).currentTime);

sample_source.connect(cljs.core.deref(context).destination);

sample_source.start();

return sample_source;
});
