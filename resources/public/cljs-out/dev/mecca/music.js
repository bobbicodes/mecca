// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
mecca.music.notes = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"], null);
mecca.music.scales = new cljs.core.PersistentArrayMap(null, 6, ["Pentatonic",mecca.audio.scale.pentatonic,"Chromatic",mecca.audio.scale.chromatic,"Major",mecca.audio.scale.major,"Minor",mecca.audio.scale.minor,"Harmonic Minor",mecca.audio.scale.harmonic_minor,"Double Harmonic Minor",mecca.audio.scale.double_harmonic_minor], null);
mecca.music.basslines = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Alberti bass",cljs.core.cst$kw$notes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5),(3),(5)], null),cljs.core.cst$kw$scales,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Minor","Major"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Walking bass",cljs.core.cst$kw$notes,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3),(4),(5),(7),(5),(4),(3)], null),cljs.core.cst$kw$scales,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Minor","Major"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Lament",cljs.core.cst$kw$notes,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8),(7),(7),(6),(6),(5),(5)], null),cljs.core.cst$kw$scales,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chromatic"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Pachelbel's Canon",cljs.core.cst$kw$notes,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8),(5),(5),(6),(6),(3),(3),(4),(4),(8),(8),(4),(4),(5),(5)], null),cljs.core.cst$kw$scales,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Major"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Doo-wop",cljs.core.cst$kw$notes,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8),(6),(6),(4),(4),(5),(5)], null),cljs.core.cst$kw$scales,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Major"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Circle of fifths",cljs.core.cst$kw$notes,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8),(11),(11),(7),(7),(10),(10),(6),(6),(9),(9),(5),(5),(8),(8)], null),cljs.core.cst$kw$scales,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Major"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Pop-punk",cljs.core.cst$kw$notes,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(5),(5),(6),(6),(4),(4)], null),cljs.core.cst$kw$scales,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Major"], null)], null)], null);
mecca.music.root_note_midi_num = (function mecca$music$root_note_midi_num(){
var key = cljs.core.deref((function (){var G__14029 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14029) : re_frame.core.subscribe.call(null,G__14029));
})());
var base_pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.zipmap(cljs.core.into.cljs$core$IFn$_invoke$arity$2(mecca.music.notes,mecca.music.notes),cljs.core.range.cljs$core$IFn$_invoke$arity$2((24),(36))),key);
var octave = cljs.core.deref((function (){var G__14030 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$octave], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14030) : re_frame.core.subscribe.call(null,G__14030));
})());
return (((12) * (octave - (1))) + base_pitch);
});
mecca.music.base_pitch = (function mecca$music$base_pitch(midi_num){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.notes,cljs.core.mod(midi_num,(12)));
});
mecca.music.octave = (function mecca$music$octave(midi_num){
return (cljs.core.quot(midi_num,(12)) - (1));
});
mecca.music.interval__GT_midi = (function mecca$music$interval__GT_midi(n){
var scale_name = (function (){var G__14031 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14031) : re_frame.core.subscribe.call(null,G__14031));
})();
var scale_notes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref(scale_name));
var key = cljs.core.deref((function (){var G__14032 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14032) : re_frame.core.subscribe.call(null,G__14032));
})());
var base_pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.zipmap(cljs.core.into.cljs$core$IFn$_invoke$arity$2(mecca.music.notes,mecca.music.notes),cljs.core.range.cljs$core$IFn$_invoke$arity$2((24),(36))),key);
var octave = cljs.core.deref((function (){var G__14033 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$octave], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14033) : re_frame.core.subscribe.call(null,G__14033));
})());
if((n == null)){
return null;
} else {
return (n + base_pitch);
}
});
mecca.music.bassline__GT_midi_nums = (function mecca$music$bassline__GT_midi_nums(v){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14034_SHARP_){
return mecca.music.interval__GT_midi(p1__14034_SHARP_);
}),v);
});
mecca.music.midi_num__GT_note = (function mecca$music$midi_num__GT_note(midi_num){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.music.base_pitch(midi_num)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.music.octave(midi_num))].join('');
});
mecca.music.midi__GT_freq = (function mecca$music$midi__GT_freq(m){
return ((440) * Math.pow((2),((m - (69)) / (12))));
});
/**
 * Return the current time as recorded by the audio context.
 */
mecca.music.current_time = (function mecca$music$current_time(context){
return context.currentTime;
});
goog.exportSymbol('mecca.music.current_time', mecca.music.current_time);
mecca.music.subgraph = (function mecca$music$subgraph(var_args){
var G__14036 = arguments.length;
switch (G__14036) {
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
 * Convert a synth (actually a reader fn) into a concrete
 *   subgraph by supplying context and timing.
 */
mecca.music.run_with = (function mecca$music$run_with(synth,context,at,duration){
return (synth.cljs$core$IFn$_invoke$arity$3 ? synth.cljs$core$IFn$_invoke$arity$3(context,at,duration) : synth.call(null,context,at,duration));
});
goog.exportSymbol('mecca.music.run_with', mecca.music.run_with);
/**
 * The destination of the audio context i.e. the speakers.
 */
mecca.music.destination = (function mecca$music$destination(context,at,duration){
return mecca.music.sink(context.destination);
});
goog.exportSymbol('mecca.music.destination', mecca.music.destination);
mecca.music.plug = (function mecca$music$plug(param,input,context,at,duration){

if(typeof input === 'number'){
return param.setValueAtTime(input,at);
} else {
return cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(mecca.music.run_with(input,context,at,duration)).connect(param);
}
});
/**
 * Multiply the signal by level.
 */
mecca.music.gain = (function mecca$music$gain(level){
return (function (context,at,duration){
return mecca.music.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__14038 = context.createGain();
mecca.music.plug(G__14038.gain,level,context,at,duration);

return G__14038;
})());
});
});
goog.exportSymbol('mecca.music.gain', mecca.music.gain);
/**
 * Like apply, but for the node graphs synths produce.
 */
mecca.music.apply_to_graph = (function mecca$music$apply_to_graph(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14042 = arguments.length;
var i__4532__auto___14043 = (0);
while(true){
if((i__4532__auto___14043 < len__4531__auto___14042)){
args__4534__auto__.push((arguments[i__4532__auto___14043]));

var G__14044 = (i__4532__auto___14043 + (1));
i__4532__auto___14043 = G__14044;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14039_SHARP_){
return mecca.music.run_with(p1__14039_SHARP_,context,at,duration);
}),synths));
});
});

mecca.music.apply_to_graph.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mecca.music.apply_to_graph.cljs$lang$applyTo = (function (seq14040){
var G__14041 = cljs.core.first(seq14040);
var seq14040__$1 = cljs.core.next(seq14040);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14041,seq14040__$1);
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
/**
 * Connect synths in series.
 */
mecca.music.connect__GT_ = (function mecca$music$connect__GT_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14046 = arguments.length;
var i__4532__auto___14047 = (0);
while(true){
if((i__4532__auto___14047 < len__4531__auto___14046)){
args__4534__auto__.push((arguments[i__4532__auto___14047]));

var G__14048 = (i__4532__auto___14047 + (1));
i__4532__auto___14047 = G__14048;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return mecca.music.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

mecca.music.connect__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(mecca.music.connect,nodes);
});

mecca.music.connect__GT_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mecca.music.connect__GT_.cljs$lang$applyTo = (function (seq14045){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14045));
});

mecca.music.get_mp3 = (function mecca$music$get_mp3(uri,callback){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(uri,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$response_DASH_format,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$arraybuffer,cljs.core.cst$kw$read,ajax.protocols._body,cljs.core.cst$kw$description,"audio",cljs.core.cst$kw$content_DASH_type,"audio/mpeg"], null),cljs.core.cst$kw$handler,callback], null)], 0));
});
/**
 * Play a sample addressed via a URI. Until fetching and decoding is complete, it will play silence.
 */
mecca.music.raw_sample = (function mecca$music$raw_sample(uri){
var psuedo_promise = {};
mecca.music.get_mp3(uri,((function (psuedo_promise){
return (function (p1__14049_SHARP_){
return psuedo_promise.data = p1__14049_SHARP_;
});})(psuedo_promise))
);

return ((function (psuedo_promise){
return (function (context,at,duration){
return mecca.music.source((function (){var node = (function (){var G__14052 = context.createBufferSource();
G__14052.start(at);

G__14052.stop((at + duration));

return G__14052;
})();
var set_buffer = ((function (node,psuedo_promise){
return (function (buffer){
psuedo_promise.buffer = buffer;

return node.buffer = buffer;
});})(node,psuedo_promise))
;
var temp__5457__auto___14053 = psuedo_promise.data;
if(cljs.core.truth_(temp__5457__auto___14053)){
var data_14054 = temp__5457__auto___14053;
var temp__5455__auto___14055 = psuedo_promise.buffer;
if(cljs.core.truth_(temp__5455__auto___14055)){
var buffer_14056 = temp__5455__auto___14055;
set_buffer(buffer_14056);
} else {
context.decodeAudioData(data_14054,set_buffer);
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
mecca.music.raw_buffer = (function mecca$music$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__14057_14061 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(frame_count));
var chunk__14058_14062 = null;
var count__14059_14063 = (0);
var i__14060_14064 = (0);
while(true){
if((i__14060_14064 < count__14059_14063)){
var i_14065 = chunk__14058_14062.cljs$core$IIndexed$_nth$arity$2(null,i__14060_14064);
(data[i_14065] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_14065) : generate_bit_BANG_.call(null,i_14065)));


var G__14066 = seq__14057_14061;
var G__14067 = chunk__14058_14062;
var G__14068 = count__14059_14063;
var G__14069 = (i__14060_14064 + (1));
seq__14057_14061 = G__14066;
chunk__14058_14062 = G__14067;
count__14059_14063 = G__14068;
i__14060_14064 = G__14069;
continue;
} else {
var temp__5457__auto___14070 = cljs.core.seq(seq__14057_14061);
if(temp__5457__auto___14070){
var seq__14057_14071__$1 = temp__5457__auto___14070;
if(cljs.core.chunked_seq_QMARK_(seq__14057_14071__$1)){
var c__4351__auto___14072 = cljs.core.chunk_first(seq__14057_14071__$1);
var G__14073 = cljs.core.chunk_rest(seq__14057_14071__$1);
var G__14074 = c__4351__auto___14072;
var G__14075 = cljs.core.count(c__4351__auto___14072);
var G__14076 = (0);
seq__14057_14061 = G__14073;
chunk__14058_14062 = G__14074;
count__14059_14063 = G__14075;
i__14060_14064 = G__14076;
continue;
} else {
var i_14077 = cljs.core.first(seq__14057_14071__$1);
(data[i_14077] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_14077) : generate_bit_BANG_.call(null,i_14077)));


var G__14078 = cljs.core.next(seq__14057_14071__$1);
var G__14079 = null;
var G__14080 = (0);
var G__14081 = (0);
seq__14057_14061 = G__14078;
chunk__14058_14062 = G__14079;
count__14059_14063 = G__14080;
i__14060_14064 = G__14081;
continue;
}
} else {
}
}
break;
}

return buffer;
});
mecca.music.buffer = cljs.core.memoize(mecca.music.raw_buffer);
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__14082 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tick_BANG_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14082) : re_frame.core.dispatch.call(null,G__14082));
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
var seq__14083_14087 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(frame_count));
var chunk__14084_14088 = null;
var count__14085_14089 = (0);
var i__14086_14090 = (0);
while(true){
if((i__14086_14090 < count__14085_14089)){
var i_14091 = chunk__14084_14088.cljs$core$IIndexed$_nth$arity$2(null,i__14086_14090);
(data[i_14091] = ((Math.random() * 2.0) - 1.0));


var G__14092 = seq__14083_14087;
var G__14093 = chunk__14084_14088;
var G__14094 = count__14085_14089;
var G__14095 = (i__14086_14090 + (1));
seq__14083_14087 = G__14092;
chunk__14084_14088 = G__14093;
count__14085_14089 = G__14094;
i__14086_14090 = G__14095;
continue;
} else {
var temp__5457__auto___14096 = cljs.core.seq(seq__14083_14087);
if(temp__5457__auto___14096){
var seq__14083_14097__$1 = temp__5457__auto___14096;
if(cljs.core.chunked_seq_QMARK_(seq__14083_14097__$1)){
var c__4351__auto___14098 = cljs.core.chunk_first(seq__14083_14097__$1);
var G__14099 = cljs.core.chunk_rest(seq__14083_14097__$1);
var G__14100 = c__4351__auto___14098;
var G__14101 = cljs.core.count(c__4351__auto___14098);
var G__14102 = (0);
seq__14083_14087 = G__14099;
chunk__14084_14088 = G__14100;
count__14085_14089 = G__14101;
i__14086_14090 = G__14102;
continue;
} else {
var i_14103 = cljs.core.first(seq__14083_14097__$1);
(data[i_14103] = ((Math.random() * 2.0) - 1.0));


var G__14104 = cljs.core.next(seq__14083_14097__$1);
var G__14105 = null;
var G__14106 = (0);
var G__14107 = (0);
seq__14083_14087 = G__14104;
chunk__14084_14088 = G__14105;
count__14085_14089 = G__14106;
i__14086_14090 = G__14107;
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
var buffer = (function (){var G__14108 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sample_DASH_buffer,instrument], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14108) : re_frame.core.subscribe.call(null,G__14108));
})();
var sample_source = cljs.core.deref(context).createBufferSource();
var playback_rate = (pitch / (2));
sample_source.buffer = cljs.core.deref(buffer);

sample_source.playbackRate.setValueAtTime(playback_rate,now);

sample_source.connect(cljs.core.deref(context).destination);

return sample_source.start();
});
mecca.music.play_mp3_BANG_ = (function mecca$music$play_mp3_BANG_(){
var context = mecca.music.audiocontext;
var now = mecca.music.current_time(cljs.core.deref(context));
var mp3 = mecca.music.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(mecca.music.sample.cljs$core$IFn$_invoke$arity$1 ? mecca.music.sample.cljs$core$IFn$_invoke$arity$1("/audio/sound01.mp3") : mecca.music.sample.call(null,"/audio/sound01.mp3")),mecca.music.gain(0.5),mecca.music.destination], 0));
return mecca.music.run_with(mp3,cljs.core.deref(context),now,0.5);
});
mecca.music.play_note_BANG_ = (function mecca$music$play_note_BANG_(midi_num,start,duration){
var context = cljs.core.deref(mecca.music.audiocontext);
var osc = cljs.core.deref(mecca.music.audiocontext).createOscillator();
var now = mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext));
var freq = mecca.music.midi__GT_freq(midi_num);
var gain = cljs.core.deref(mecca.music.audiocontext).createGain();
osc.type = "triangle";

osc.frequency.value = freq;

osc.connect(gain);

gain.connect(cljs.core.deref(mecca.music.audiocontext).destination);

osc.start((now + start));

return osc.stop(((now + start) + duration));
});
mecca.music.play_bassline_BANG_ = (function mecca$music$play_bassline_BANG_(){
var context = cljs.core.deref(mecca.music.audiocontext);
var bassline = (function (){var G__14109 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14109) : re_frame.core.subscribe.call(null,G__14109));
})();
var play_start = mecca.music.current_time(context);
var tempo = (function (){var G__14110 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14110) : re_frame.core.subscribe.call(null,G__14110));
})();
var beat_length = ((60) / cljs.core.deref(tempo));
var total_duration = (beat_length * cljs.core.count(cljs.core.deref(bassline)));
var G__14111_14120 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_on], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14111_14120) : re_frame.core.dispatch.call(null,G__14111_14120));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (context,bassline,play_start,tempo,beat_length,total_duration){
return (function mecca$music$play_bassline_BANG__$_iter__14112(s__14113){
return (new cljs.core.LazySeq(null,((function (context,bassline,play_start,tempo,beat_length,total_duration){
return (function (){
var s__14113__$1 = s__14113;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14113__$1);
if(temp__5457__auto__){
var s__14113__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14113__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14113__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14115 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14114 = (0);
while(true){
if((i__14114 < size__4323__auto__)){
var map__14116 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14114);
var map__14116__$1 = ((((!((map__14116 == null)))?(((((map__14116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14116):map__14116);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14116__$1,cljs.core.cst$kw$time);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14116__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__14115,mecca.music.play_note_BANG_(pitch,(time * beat_length),beat_length));

var G__14121 = (i__14114 + (1));
i__14114 = G__14121;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14115),mecca$music$play_bassline_BANG__$_iter__14112(cljs.core.chunk_rest(s__14113__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14115),null);
}
} else {
var map__14118 = cljs.core.first(s__14113__$2);
var map__14118__$1 = ((((!((map__14118 == null)))?(((((map__14118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14118):map__14118);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14118__$1,cljs.core.cst$kw$time);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14118__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(mecca.music.play_note_BANG_(pitch,(time * beat_length),beat_length),mecca$music$play_bassline_BANG__$_iter__14112(cljs.core.rest(s__14113__$2)));
}
} else {
return null;
}
break;
}
});})(context,bassline,play_start,tempo,beat_length,total_duration))
,null,null));
});})(context,bassline,play_start,tempo,beat_length,total_duration))
;
return iter__4324__auto__(cljs.core.deref(bassline));
})());
});
