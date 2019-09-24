// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('ajax.protocols');
goog.require('mecca.audio.processing');
goog.require('mecca.audio.actions');
goog.require('mecca.audio.framework');
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
var key = cljs.core.deref((function (){var G__14121 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14121) : re_frame.core.subscribe.call(null,G__14121));
})());
var base_pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.zipmap(cljs.core.into.cljs$core$IFn$_invoke$arity$2(mecca.music.notes,mecca.music.notes),cljs.core.range.cljs$core$IFn$_invoke$arity$2((24),(36))),key);
var octave = cljs.core.deref((function (){var G__14122 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$octave], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14122) : re_frame.core.subscribe.call(null,G__14122));
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
var scale_name = (function (){var G__14123 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14123) : re_frame.core.subscribe.call(null,G__14123));
})();
var scale_notes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref(scale_name));
var key = cljs.core.deref((function (){var G__14124 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14124) : re_frame.core.subscribe.call(null,G__14124));
})());
var base_pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.zipmap(cljs.core.into.cljs$core$IFn$_invoke$arity$2(mecca.music.notes,mecca.music.notes),cljs.core.range.cljs$core$IFn$_invoke$arity$2((24),(36))),key);
var octave = cljs.core.deref((function (){var G__14125 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$octave], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14125) : re_frame.core.subscribe.call(null,G__14125));
})());
if((n == null)){
return null;
} else {
return (n + base_pitch);
}
});
mecca.music.bassline__GT_midi_nums = (function mecca$music$bassline__GT_midi_nums(v){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14126_SHARP_){
return mecca.music.interval__GT_midi(p1__14126_SHARP_);
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
var G__14128 = arguments.length;
switch (G__14128) {
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
return (function (p1__14130_SHARP_){
return psuedo_promise.data = p1__14130_SHARP_;
});})(psuedo_promise))
);

return ((function (psuedo_promise){
return (function (context,at,duration){
return mecca.music.source((function (){var node = (function (){var G__14133 = context.createBufferSource();
G__14133.start(at);

G__14133.stop((at + duration));

return G__14133;
})();
var set_buffer = ((function (node,psuedo_promise){
return (function (buffer){
psuedo_promise.buffer = buffer;

return node.buffer = buffer;
});})(node,psuedo_promise))
;
var temp__5457__auto___14134 = psuedo_promise.data;
if(cljs.core.truth_(temp__5457__auto___14134)){
var data_14135 = temp__5457__auto___14134;
var temp__5455__auto___14136 = psuedo_promise.buffer;
if(cljs.core.truth_(temp__5455__auto___14136)){
var buffer_14137 = temp__5455__auto___14136;
set_buffer(buffer_14137);
} else {
context.decodeAudioData(data_14135,set_buffer);
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
var seq__14138_14142 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(frame_count));
var chunk__14139_14143 = null;
var count__14140_14144 = (0);
var i__14141_14145 = (0);
while(true){
if((i__14141_14145 < count__14140_14144)){
var i_14146 = chunk__14139_14143.cljs$core$IIndexed$_nth$arity$2(null,i__14141_14145);
(data[i_14146] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_14146) : generate_bit_BANG_.call(null,i_14146)));


var G__14147 = seq__14138_14142;
var G__14148 = chunk__14139_14143;
var G__14149 = count__14140_14144;
var G__14150 = (i__14141_14145 + (1));
seq__14138_14142 = G__14147;
chunk__14139_14143 = G__14148;
count__14140_14144 = G__14149;
i__14141_14145 = G__14150;
continue;
} else {
var temp__5457__auto___14151 = cljs.core.seq(seq__14138_14142);
if(temp__5457__auto___14151){
var seq__14138_14152__$1 = temp__5457__auto___14151;
if(cljs.core.chunked_seq_QMARK_(seq__14138_14152__$1)){
var c__4351__auto___14153 = cljs.core.chunk_first(seq__14138_14152__$1);
var G__14154 = cljs.core.chunk_rest(seq__14138_14152__$1);
var G__14155 = c__4351__auto___14153;
var G__14156 = cljs.core.count(c__4351__auto___14153);
var G__14157 = (0);
seq__14138_14142 = G__14154;
chunk__14139_14143 = G__14155;
count__14140_14144 = G__14156;
i__14141_14145 = G__14157;
continue;
} else {
var i_14158 = cljs.core.first(seq__14138_14152__$1);
(data[i_14158] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_14158) : generate_bit_BANG_.call(null,i_14158)));


var G__14159 = cljs.core.next(seq__14138_14152__$1);
var G__14160 = null;
var G__14161 = (0);
var G__14162 = (0);
seq__14138_14142 = G__14159;
chunk__14139_14143 = G__14160;
count__14140_14144 = G__14161;
i__14141_14145 = G__14162;
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
var G__14163 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tick_BANG_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14163) : re_frame.core.dispatch.call(null,G__14163));
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
var seq__14164_14168 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(frame_count));
var chunk__14165_14169 = null;
var count__14166_14170 = (0);
var i__14167_14171 = (0);
while(true){
if((i__14167_14171 < count__14166_14170)){
var i_14172 = chunk__14165_14169.cljs$core$IIndexed$_nth$arity$2(null,i__14167_14171);
(data[i_14172] = ((Math.random() * 2.0) - 1.0));


var G__14173 = seq__14164_14168;
var G__14174 = chunk__14165_14169;
var G__14175 = count__14166_14170;
var G__14176 = (i__14167_14171 + (1));
seq__14164_14168 = G__14173;
chunk__14165_14169 = G__14174;
count__14166_14170 = G__14175;
i__14167_14171 = G__14176;
continue;
} else {
var temp__5457__auto___14177 = cljs.core.seq(seq__14164_14168);
if(temp__5457__auto___14177){
var seq__14164_14178__$1 = temp__5457__auto___14177;
if(cljs.core.chunked_seq_QMARK_(seq__14164_14178__$1)){
var c__4351__auto___14179 = cljs.core.chunk_first(seq__14164_14178__$1);
var G__14180 = cljs.core.chunk_rest(seq__14164_14178__$1);
var G__14181 = c__4351__auto___14179;
var G__14182 = cljs.core.count(c__4351__auto___14179);
var G__14183 = (0);
seq__14164_14168 = G__14180;
chunk__14165_14169 = G__14181;
count__14166_14170 = G__14182;
i__14167_14171 = G__14183;
continue;
} else {
var i_14184 = cljs.core.first(seq__14164_14178__$1);
(data[i_14184] = ((Math.random() * 2.0) - 1.0));


var G__14185 = cljs.core.next(seq__14164_14178__$1);
var G__14186 = null;
var G__14187 = (0);
var G__14188 = (0);
seq__14164_14168 = G__14185;
chunk__14165_14169 = G__14186;
count__14166_14170 = G__14187;
i__14167_14171 = G__14188;
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
var bassline = (function (){var G__14189 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14189) : re_frame.core.subscribe.call(null,G__14189));
})();
var play_start = mecca.music.current_time(context);
var tempo = (function (){var G__14190 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14190) : re_frame.core.subscribe.call(null,G__14190));
})();
var beat_length = ((60) / cljs.core.deref(tempo));
var total_duration = (beat_length * cljs.core.count(cljs.core.deref(bassline)));
var G__14191_14200 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_on], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14191_14200) : re_frame.core.dispatch.call(null,G__14191_14200));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (context,bassline,play_start,tempo,beat_length,total_duration){
return (function mecca$music$play_bassline_BANG__$_iter__14192(s__14193){
return (new cljs.core.LazySeq(null,((function (context,bassline,play_start,tempo,beat_length,total_duration){
return (function (){
var s__14193__$1 = s__14193;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14193__$1);
if(temp__5457__auto__){
var s__14193__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14193__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14193__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14195 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14194 = (0);
while(true){
if((i__14194 < size__4323__auto__)){
var map__14196 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14194);
var map__14196__$1 = ((((!((map__14196 == null)))?(((((map__14196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14196):map__14196);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14196__$1,cljs.core.cst$kw$time);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14196__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__14195,mecca.music.play_note_BANG_(pitch,(time * beat_length),beat_length));

var G__14201 = (i__14194 + (1));
i__14194 = G__14201;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14195),mecca$music$play_bassline_BANG__$_iter__14192(cljs.core.chunk_rest(s__14193__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14195),null);
}
} else {
var map__14198 = cljs.core.first(s__14193__$2);
var map__14198__$1 = ((((!((map__14198 == null)))?(((((map__14198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14198):map__14198);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14198__$1,cljs.core.cst$kw$time);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14198__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(mecca.music.play_note_BANG_(pitch,(time * beat_length),beat_length),mecca$music$play_bassline_BANG__$_iter__14192(cljs.core.rest(s__14193__$2)));
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
