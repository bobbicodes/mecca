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
var key = cljs.core.deref((function (){var G__14032 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14032) : re_frame.core.subscribe.call(null,G__14032));
})());
var base_pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.zipmap(cljs.core.into.cljs$core$IFn$_invoke$arity$2(mecca.music.notes,mecca.music.notes),cljs.core.range.cljs$core$IFn$_invoke$arity$2((24),(36))),key);
var octave = cljs.core.deref((function (){var G__14033 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$octave], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14033) : re_frame.core.subscribe.call(null,G__14033));
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
var scale_name = (function (){var G__14034 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14034) : re_frame.core.subscribe.call(null,G__14034));
})();
var scale_notes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref(scale_name));
var key = cljs.core.deref((function (){var G__14035 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14035) : re_frame.core.subscribe.call(null,G__14035));
})());
var base_pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.zipmap(cljs.core.into.cljs$core$IFn$_invoke$arity$2(mecca.music.notes,mecca.music.notes),cljs.core.range.cljs$core$IFn$_invoke$arity$2((24),(36))),key);
var octave = cljs.core.deref((function (){var G__14036 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$octave], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14036) : re_frame.core.subscribe.call(null,G__14036));
})());
if((n == null)){
return null;
} else {
return (n + base_pitch);
}
});
mecca.music.bassline__GT_midi_nums = (function mecca$music$bassline__GT_midi_nums(v){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14037_SHARP_){
return mecca.music.interval__GT_midi(p1__14037_SHARP_);
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
var G__14039 = arguments.length;
switch (G__14039) {
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
mecca.music.get_mp3 = (function mecca$music$get_mp3(uri,callback){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(uri,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$response_DASH_format,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$arraybuffer,cljs.core.cst$kw$read,ajax.protocols._body,cljs.core.cst$kw$description,"audio",cljs.core.cst$kw$content_DASH_type,"audio/mpeg"], null),cljs.core.cst$kw$handler,callback], null)], 0));
});
/**
 * Play a sample addressed via a URI. Until fetching and decoding is complete, it will play silence.
 */
mecca.music.raw_sample = (function mecca$music$raw_sample(uri){
var psuedo_promise = {};
mecca.music.get_mp3(uri,((function (psuedo_promise){
return (function (p1__14041_SHARP_){
return psuedo_promise.data = p1__14041_SHARP_;
});})(psuedo_promise))
);

return ((function (psuedo_promise){
return (function (context,at,duration){
return mecca.music.source((function (){var node = (function (){var G__14044 = context.createBufferSource();
G__14044.start(at);

G__14044.stop((at + duration));

return G__14044;
})();
var set_buffer = ((function (node,psuedo_promise){
return (function (buffer){
psuedo_promise.buffer = buffer;

return node.buffer = buffer;
});})(node,psuedo_promise))
;
var temp__5457__auto___14045 = psuedo_promise.data;
if(cljs.core.truth_(temp__5457__auto___14045)){
var data_14046 = temp__5457__auto___14045;
var temp__5455__auto___14047 = psuedo_promise.buffer;
if(cljs.core.truth_(temp__5455__auto___14047)){
var buffer_14048 = temp__5455__auto___14047;
set_buffer(buffer_14048);
} else {
context.decodeAudioData(data_14046,set_buffer);
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
var seq__14049_14053 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(frame_count));
var chunk__14050_14054 = null;
var count__14051_14055 = (0);
var i__14052_14056 = (0);
while(true){
if((i__14052_14056 < count__14051_14055)){
var i_14057 = chunk__14050_14054.cljs$core$IIndexed$_nth$arity$2(null,i__14052_14056);
(data[i_14057] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_14057) : generate_bit_BANG_.call(null,i_14057)));


var G__14058 = seq__14049_14053;
var G__14059 = chunk__14050_14054;
var G__14060 = count__14051_14055;
var G__14061 = (i__14052_14056 + (1));
seq__14049_14053 = G__14058;
chunk__14050_14054 = G__14059;
count__14051_14055 = G__14060;
i__14052_14056 = G__14061;
continue;
} else {
var temp__5457__auto___14062 = cljs.core.seq(seq__14049_14053);
if(temp__5457__auto___14062){
var seq__14049_14063__$1 = temp__5457__auto___14062;
if(cljs.core.chunked_seq_QMARK_(seq__14049_14063__$1)){
var c__4351__auto___14064 = cljs.core.chunk_first(seq__14049_14063__$1);
var G__14065 = cljs.core.chunk_rest(seq__14049_14063__$1);
var G__14066 = c__4351__auto___14064;
var G__14067 = cljs.core.count(c__4351__auto___14064);
var G__14068 = (0);
seq__14049_14053 = G__14065;
chunk__14050_14054 = G__14066;
count__14051_14055 = G__14067;
i__14052_14056 = G__14068;
continue;
} else {
var i_14069 = cljs.core.first(seq__14049_14063__$1);
(data[i_14069] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_14069) : generate_bit_BANG_.call(null,i_14069)));


var G__14070 = cljs.core.next(seq__14049_14063__$1);
var G__14071 = null;
var G__14072 = (0);
var G__14073 = (0);
seq__14049_14053 = G__14070;
chunk__14050_14054 = G__14071;
count__14051_14055 = G__14072;
i__14052_14056 = G__14073;
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
var G__14074 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tick_BANG_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14074) : re_frame.core.dispatch.call(null,G__14074));
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.do_timer !== 'undefined')){
} else {
mecca.music.do_timer = setInterval(mecca.music.dispatch_timer_event,(200));
}
mecca.music.play_noise_BANG_ = (function mecca$music$play_noise_BANG_(start,duration){
var context = cljs.core.deref(mecca.music.audiocontext);
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var noise = cljs.core.deref(mecca.music.audiocontext).createBufferSource();
var now = mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext));
var seq__14075_14079 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(frame_count));
var chunk__14076_14080 = null;
var count__14077_14081 = (0);
var i__14078_14082 = (0);
while(true){
if((i__14078_14082 < count__14077_14081)){
var i_14083 = chunk__14076_14080.cljs$core$IIndexed$_nth$arity$2(null,i__14078_14082);
(data[i_14083] = ((Math.random() * 2.0) - 1.0));


var G__14084 = seq__14075_14079;
var G__14085 = chunk__14076_14080;
var G__14086 = count__14077_14081;
var G__14087 = (i__14078_14082 + (1));
seq__14075_14079 = G__14084;
chunk__14076_14080 = G__14085;
count__14077_14081 = G__14086;
i__14078_14082 = G__14087;
continue;
} else {
var temp__5457__auto___14088 = cljs.core.seq(seq__14075_14079);
if(temp__5457__auto___14088){
var seq__14075_14089__$1 = temp__5457__auto___14088;
if(cljs.core.chunked_seq_QMARK_(seq__14075_14089__$1)){
var c__4351__auto___14090 = cljs.core.chunk_first(seq__14075_14089__$1);
var G__14091 = cljs.core.chunk_rest(seq__14075_14089__$1);
var G__14092 = c__4351__auto___14090;
var G__14093 = cljs.core.count(c__4351__auto___14090);
var G__14094 = (0);
seq__14075_14079 = G__14091;
chunk__14076_14080 = G__14092;
count__14077_14081 = G__14093;
i__14078_14082 = G__14094;
continue;
} else {
var i_14095 = cljs.core.first(seq__14075_14089__$1);
(data[i_14095] = ((Math.random() * 2.0) - 1.0));


var G__14096 = cljs.core.next(seq__14075_14089__$1);
var G__14097 = null;
var G__14098 = (0);
var G__14099 = (0);
seq__14075_14079 = G__14096;
chunk__14076_14080 = G__14097;
count__14077_14081 = G__14098;
i__14078_14082 = G__14099;
continue;
}
} else {
}
}
break;
}

noise.buffer = buffer;

noise.connect(cljs.core.deref(mecca.music.audiocontext).destination);

noise.start((now + start));

return noise.stop(((now + start) + duration));
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
var bassline = (function (){var G__14100 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14100) : re_frame.core.subscribe.call(null,G__14100));
})();
var play_start = mecca.music.current_time(context);
var tempo = (function (){var G__14101 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14101) : re_frame.core.subscribe.call(null,G__14101));
})();
var beat_length = ((60) / cljs.core.deref(tempo));
var total_duration = (beat_length * cljs.core.count(cljs.core.deref(bassline)));
var G__14102_14111 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_on], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14102_14111) : re_frame.core.dispatch.call(null,G__14102_14111));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (context,bassline,play_start,tempo,beat_length,total_duration){
return (function mecca$music$play_bassline_BANG__$_iter__14103(s__14104){
return (new cljs.core.LazySeq(null,((function (context,bassline,play_start,tempo,beat_length,total_duration){
return (function (){
var s__14104__$1 = s__14104;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14104__$1);
if(temp__5457__auto__){
var s__14104__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14104__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14104__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14106 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14105 = (0);
while(true){
if((i__14105 < size__4323__auto__)){
var map__14107 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14105);
var map__14107__$1 = ((((!((map__14107 == null)))?(((((map__14107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14107):map__14107);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14107__$1,cljs.core.cst$kw$time);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14107__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__14106,mecca.music.play_note_BANG_(pitch,(time * beat_length),beat_length));

var G__14112 = (i__14105 + (1));
i__14105 = G__14112;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14106),mecca$music$play_bassline_BANG__$_iter__14103(cljs.core.chunk_rest(s__14104__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14106),null);
}
} else {
var map__14109 = cljs.core.first(s__14104__$2);
var map__14109__$1 = ((((!((map__14109 == null)))?(((((map__14109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14109):map__14109);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14109__$1,cljs.core.cst$kw$time);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14109__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(mecca.music.play_note_BANG_(pitch,(time * beat_length),beat_length),mecca$music$play_bassline_BANG__$_iter__14103(cljs.core.rest(s__14104__$2)));
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
