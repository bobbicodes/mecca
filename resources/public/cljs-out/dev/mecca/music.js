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
var G__19780 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tick_BANG_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19780) : re_frame.core.dispatch.call(null,G__19780));
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
var seq__19781_19785 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(frame_count));
var chunk__19782_19786 = null;
var count__19783_19787 = (0);
var i__19784_19788 = (0);
while(true){
if((i__19784_19788 < count__19783_19787)){
var i_19789 = chunk__19782_19786.cljs$core$IIndexed$_nth$arity$2(null,i__19784_19788);
(data[i_19789] = ((Math.random() * 2.0) - 1.0));


var G__19790 = seq__19781_19785;
var G__19791 = chunk__19782_19786;
var G__19792 = count__19783_19787;
var G__19793 = (i__19784_19788 + (1));
seq__19781_19785 = G__19790;
chunk__19782_19786 = G__19791;
count__19783_19787 = G__19792;
i__19784_19788 = G__19793;
continue;
} else {
var temp__5457__auto___19794 = cljs.core.seq(seq__19781_19785);
if(temp__5457__auto___19794){
var seq__19781_19795__$1 = temp__5457__auto___19794;
if(cljs.core.chunked_seq_QMARK_(seq__19781_19795__$1)){
var c__4351__auto___19796 = cljs.core.chunk_first(seq__19781_19795__$1);
var G__19797 = cljs.core.chunk_rest(seq__19781_19795__$1);
var G__19798 = c__4351__auto___19796;
var G__19799 = cljs.core.count(c__4351__auto___19796);
var G__19800 = (0);
seq__19781_19785 = G__19797;
chunk__19782_19786 = G__19798;
count__19783_19787 = G__19799;
i__19784_19788 = G__19800;
continue;
} else {
var i_19801 = cljs.core.first(seq__19781_19795__$1);
(data[i_19801] = ((Math.random() * 2.0) - 1.0));


var G__19802 = cljs.core.next(seq__19781_19795__$1);
var G__19803 = null;
var G__19804 = (0);
var G__19805 = (0);
seq__19781_19785 = G__19802;
chunk__19782_19786 = G__19803;
count__19783_19787 = G__19804;
i__19784_19788 = G__19805;
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
var buffer = (function (){var G__19806 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sample_DASH_buffer,instrument], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19806) : re_frame.core.subscribe.call(null,G__19806));
})();
var sample_source = cljs.core.deref(context).createBufferSource();
var playback_rate = (pitch / (2));
sample_source.buffer = cljs.core.deref(buffer);

sample_source.playbackRate.setValueAtTime(playback_rate,now);

sample_source.connect(cljs.core.deref(context).destination);

return sample_source.start();
});
mecca.music.subgraph = (function mecca$music$subgraph(var_args){
var G__19808 = arguments.length;
switch (G__19808) {
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
return mecca.music.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__19810 = context.createGain();
mecca.music.plug(G__19810.gain,level,context,at,duration);

return G__19810;
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
var len__4531__auto___19814 = arguments.length;
var i__4532__auto___19815 = (0);
while(true){
if((i__4532__auto___19815 < len__4531__auto___19814)){
args__4534__auto__.push((arguments[i__4532__auto___19815]));

var G__19816 = (i__4532__auto___19815 + (1));
i__4532__auto___19815 = G__19816;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19811_SHARP_){
return mecca.music.run_with(p1__19811_SHARP_,context,at,duration);
}),synths));
});
});

mecca.music.apply_to_graph.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mecca.music.apply_to_graph.cljs$lang$applyTo = (function (seq19812){
var G__19813 = cljs.core.first(seq19812);
var seq19812__$1 = cljs.core.next(seq19812);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19813,seq19812__$1);
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
return (function (p1__19817_SHARP_){
return psuedo_promise.data = p1__19817_SHARP_;
});})(psuedo_promise))
);

return ((function (psuedo_promise){
return (function (context,at,duration){
return mecca.music.source((function (){var node = (function (){var G__19820 = context.createBufferSource();
G__19820.start(at);

G__19820.stop((at + duration));

return G__19820;
})();
var set_buffer = ((function (node,psuedo_promise){
return (function (buffer){
psuedo_promise.buffer = buffer;

return node.buffer = buffer;
});})(node,psuedo_promise))
;
var temp__5457__auto___19821 = psuedo_promise.data;
if(cljs.core.truth_(temp__5457__auto___19821)){
var data_19822 = temp__5457__auto___19821;
var temp__5455__auto___19823 = psuedo_promise.buffer;
if(cljs.core.truth_(temp__5455__auto___19823)){
var buffer_19824 = temp__5455__auto___19823;
set_buffer(buffer_19824);
} else {
context.decodeAudioData(data_19822,set_buffer);
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
var mp3 = mecca.music.connect((mecca.music.sample.cljs$core$IFn$_invoke$arity$1 ? mecca.music.sample.cljs$core$IFn$_invoke$arity$1("/audio/1.mp3") : mecca.music.sample.call(null,"/audio/1.mp3")),mecca.music.destination);
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
var c__15910__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15910__auto__){
return (function (){
var f__15911__auto__ = (function (){var switch__15727__auto__ = ((function (c__15910__auto__){
return (function (state_19836){
var state_val_19837 = (state_19836[(1)]);
if((state_val_19837 === (1))){
var inst_19825 = mecca.music.load_sound(named_url);
var state_19836__$1 = state_19836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19836__$1,(2),inst_19825);
} else {
if((state_val_19837 === (2))){
var inst_19827 = (state_19836[(7)]);
var inst_19827__$1 = (state_19836[(2)]);
var state_19836__$1 = (function (){var statearr_19838 = state_19836;
(statearr_19838[(7)] = inst_19827__$1);

return statearr_19838;
})();
if(cljs.core.truth_(inst_19827__$1)){
var statearr_19839_19847 = state_19836__$1;
(statearr_19839_19847[(1)] = (3));

} else {
var statearr_19840_19848 = state_19836__$1;
(statearr_19840_19848[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19837 === (3))){
var inst_19827 = (state_19836[(7)]);
var inst_19829 = mecca.music.decode(inst_19827);
var state_19836__$1 = state_19836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19836__$1,(6),inst_19829);
} else {
if((state_val_19837 === (4))){
var state_19836__$1 = state_19836;
var statearr_19841_19849 = state_19836__$1;
(statearr_19841_19849[(2)] = null);

(statearr_19841_19849[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19837 === (5))){
var inst_19834 = (state_19836[(2)]);
var state_19836__$1 = state_19836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19836__$1,inst_19834);
} else {
if((state_val_19837 === (6))){
var inst_19831 = (state_19836[(2)]);
var state_19836__$1 = state_19836;
var statearr_19842_19850 = state_19836__$1;
(statearr_19842_19850[(2)] = inst_19831);

(statearr_19842_19850[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
});})(c__15910__auto__))
;
return ((function (switch__15727__auto__,c__15910__auto__){
return (function() {
var mecca$music$get_and_decode_$_state_machine__15728__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__15728__auto____0 = (function (){
var statearr_19843 = [null,null,null,null,null,null,null,null];
(statearr_19843[(0)] = mecca$music$get_and_decode_$_state_machine__15728__auto__);

(statearr_19843[(1)] = (1));

return statearr_19843;
});
var mecca$music$get_and_decode_$_state_machine__15728__auto____1 = (function (state_19836){
while(true){
var ret_value__15729__auto__ = (function (){try{while(true){
var result__15730__auto__ = switch__15727__auto__(state_19836);
if(cljs.core.keyword_identical_QMARK_(result__15730__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15730__auto__;
}
break;
}
}catch (e19844){if((e19844 instanceof Object)){
var ex__15731__auto__ = e19844;
var statearr_19845_19851 = state_19836;
(statearr_19845_19851[(5)] = ex__15731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19836);

return cljs.core.cst$kw$recur;
} else {
throw e19844;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15729__auto__,cljs.core.cst$kw$recur)){
var G__19852 = state_19836;
state_19836 = G__19852;
continue;
} else {
return ret_value__15729__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__15728__auto__ = function(state_19836){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__15728__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__15728__auto____1.call(this,state_19836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__15728__auto____0;
mecca$music$get_and_decode_$_state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__15728__auto____1;
return mecca$music$get_and_decode_$_state_machine__15728__auto__;
})()
;})(switch__15727__auto__,c__15910__auto__))
})();
var state__15912__auto__ = (function (){var statearr_19846 = (f__15911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15911__auto__.cljs$core$IFn$_invoke$arity$0() : f__15911__auto__.call(null));
(statearr_19846[(6)] = c__15910__auto__);

return statearr_19846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15912__auto__);
});})(c__15910__auto__))
);

return c__15910__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__15910__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15910__auto__){
return (function (){
var f__15911__auto__ = (function (){var switch__15727__auto__ = ((function (c__15910__auto__){
return (function (state_19881){
var state_val_19882 = (state_19881[(1)]);
if((state_val_19882 === (1))){
var inst_19853 = cljs.core.PersistentHashMap.EMPTY;
var inst_19854 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(27));
var inst_19855 = inst_19853;
var inst_19856 = inst_19854;
var state_19881__$1 = (function (){var statearr_19883 = state_19881;
(statearr_19883[(7)] = inst_19856);

(statearr_19883[(8)] = inst_19855);

return statearr_19883;
})();
var statearr_19884_19896 = state_19881__$1;
(statearr_19884_19896[(2)] = null);

(statearr_19884_19896[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19882 === (2))){
var inst_19856 = (state_19881[(7)]);
var inst_19858 = cljs.core.first(inst_19856);
var inst_19859 = (inst_19858 == null);
var inst_19860 = cljs.core.not(inst_19859);
var state_19881__$1 = state_19881;
if(inst_19860){
var statearr_19885_19897 = state_19881__$1;
(statearr_19885_19897[(1)] = (4));

} else {
var statearr_19886_19898 = state_19881__$1;
(statearr_19886_19898[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19882 === (3))){
var inst_19879 = (state_19881[(2)]);
var state_19881__$1 = state_19881;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19881__$1,inst_19879);
} else {
if((state_val_19882 === (4))){
var inst_19856 = (state_19881[(7)]);
var inst_19862 = (state_19881[(9)]);
var inst_19862__$1 = cljs.core.first(inst_19856);
var inst_19863 = [cljs.core.cst$kw$url,cljs.core.cst$kw$sound];
var inst_19864 = ["/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19862__$1),".mp3"].join('');
var inst_19865 = [inst_19864,inst_19862__$1];
var inst_19866 = cljs.core.PersistentHashMap.fromArrays(inst_19863,inst_19865);
var inst_19867 = mecca.music.get_and_decode(inst_19866);
var state_19881__$1 = (function (){var statearr_19887 = state_19881;
(statearr_19887[(9)] = inst_19862__$1);

return statearr_19887;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19881__$1,(7),inst_19867);
} else {
if((state_val_19882 === (5))){
var inst_19855 = (state_19881[(8)]);
var state_19881__$1 = state_19881;
var statearr_19888_19899 = state_19881__$1;
(statearr_19888_19899[(2)] = inst_19855);

(statearr_19888_19899[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19882 === (6))){
var inst_19877 = (state_19881[(2)]);
var state_19881__$1 = state_19881;
var statearr_19889_19900 = state_19881__$1;
(statearr_19889_19900[(2)] = inst_19877);

(statearr_19889_19900[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19882 === (7))){
var inst_19856 = (state_19881[(7)]);
var inst_19855 = (state_19881[(8)]);
var inst_19862 = (state_19881[(9)]);
var inst_19869 = (state_19881[(2)]);
var inst_19870 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_19862], 0));
var inst_19871 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_19869], 0));
var inst_19872 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_19855,inst_19862,inst_19869);
var inst_19873 = cljs.core.rest(inst_19856);
var inst_19855__$1 = inst_19872;
var inst_19856__$1 = inst_19873;
var state_19881__$1 = (function (){var statearr_19890 = state_19881;
(statearr_19890[(10)] = inst_19870);

(statearr_19890[(7)] = inst_19856__$1);

(statearr_19890[(8)] = inst_19855__$1);

(statearr_19890[(11)] = inst_19871);

return statearr_19890;
})();
var statearr_19891_19901 = state_19881__$1;
(statearr_19891_19901[(2)] = null);

(statearr_19891_19901[(1)] = (2));


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
});})(c__15910__auto__))
;
return ((function (switch__15727__auto__,c__15910__auto__){
return (function() {
var mecca$music$load_samples_$_state_machine__15728__auto__ = null;
var mecca$music$load_samples_$_state_machine__15728__auto____0 = (function (){
var statearr_19892 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19892[(0)] = mecca$music$load_samples_$_state_machine__15728__auto__);

(statearr_19892[(1)] = (1));

return statearr_19892;
});
var mecca$music$load_samples_$_state_machine__15728__auto____1 = (function (state_19881){
while(true){
var ret_value__15729__auto__ = (function (){try{while(true){
var result__15730__auto__ = switch__15727__auto__(state_19881);
if(cljs.core.keyword_identical_QMARK_(result__15730__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15730__auto__;
}
break;
}
}catch (e19893){if((e19893 instanceof Object)){
var ex__15731__auto__ = e19893;
var statearr_19894_19902 = state_19881;
(statearr_19894_19902[(5)] = ex__15731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19881);

return cljs.core.cst$kw$recur;
} else {
throw e19893;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15729__auto__,cljs.core.cst$kw$recur)){
var G__19903 = state_19881;
state_19881 = G__19903;
continue;
} else {
return ret_value__15729__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__15728__auto__ = function(state_19881){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__15728__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__15728__auto____1.call(this,state_19881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__15728__auto____0;
mecca$music$load_samples_$_state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__15728__auto____1;
return mecca$music$load_samples_$_state_machine__15728__auto__;
})()
;})(switch__15727__auto__,c__15910__auto__))
})();
var state__15912__auto__ = (function (){var statearr_19895 = (f__15911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15911__auto__.cljs$core$IFn$_invoke$arity$0() : f__15911__auto__.call(null));
(statearr_19895[(6)] = c__15910__auto__);

return statearr_19895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15912__auto__);
});})(c__15910__auto__))
);

return c__15910__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__15910__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15910__auto__){
return (function (){
var f__15911__auto__ = (function (){var switch__15727__auto__ = ((function (c__15910__auto__){
return (function (state_19910){
var state_val_19911 = (state_19910[(1)]);
if((state_val_19911 === (1))){
var inst_19904 = mecca.music.load_samples();
var state_19910__$1 = state_19910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19910__$1,(2),inst_19904);
} else {
if((state_val_19911 === (2))){
var inst_19906 = (state_19910[(2)]);
var inst_19907 = mecca.music.samples = inst_19906;
var inst_19908 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_19910__$1 = (function (){var statearr_19912 = state_19910;
(statearr_19912[(7)] = inst_19907);

return statearr_19912;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19910__$1,inst_19908);
} else {
return null;
}
}
});})(c__15910__auto__))
;
return ((function (switch__15727__auto__,c__15910__auto__){
return (function() {
var mecca$music$state_machine__15728__auto__ = null;
var mecca$music$state_machine__15728__auto____0 = (function (){
var statearr_19913 = [null,null,null,null,null,null,null,null];
(statearr_19913[(0)] = mecca$music$state_machine__15728__auto__);

(statearr_19913[(1)] = (1));

return statearr_19913;
});
var mecca$music$state_machine__15728__auto____1 = (function (state_19910){
while(true){
var ret_value__15729__auto__ = (function (){try{while(true){
var result__15730__auto__ = switch__15727__auto__(state_19910);
if(cljs.core.keyword_identical_QMARK_(result__15730__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15730__auto__;
}
break;
}
}catch (e19914){if((e19914 instanceof Object)){
var ex__15731__auto__ = e19914;
var statearr_19915_19917 = state_19910;
(statearr_19915_19917[(5)] = ex__15731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19910);

return cljs.core.cst$kw$recur;
} else {
throw e19914;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15729__auto__,cljs.core.cst$kw$recur)){
var G__19918 = state_19910;
state_19910 = G__19918;
continue;
} else {
return ret_value__15729__auto__;
}
break;
}
});
mecca$music$state_machine__15728__auto__ = function(state_19910){
switch(arguments.length){
case 0:
return mecca$music$state_machine__15728__auto____0.call(this);
case 1:
return mecca$music$state_machine__15728__auto____1.call(this,state_19910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__15728__auto____0;
mecca$music$state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__15728__auto____1;
return mecca$music$state_machine__15728__auto__;
})()
;})(switch__15727__auto__,c__15910__auto__))
})();
var state__15912__auto__ = (function (){var statearr_19916 = (f__15911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15911__auto__.cljs$core$IFn$_invoke$arity$0() : f__15911__auto__.call(null));
(statearr_19916[(6)] = c__15910__auto__);

return statearr_19916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15912__auto__);
});})(c__15910__auto__))
);

return c__15910__auto__;
})();
}
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
var G__19919 = midi_num;
switch (G__19919) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19919)].join('')));

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
