// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
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
var key = cljs.core.deref((function (){var G__12889 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12889) : re_frame.core.subscribe.call(null,G__12889));
})());
var base_pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.zipmap(cljs.core.into.cljs$core$IFn$_invoke$arity$2(mecca.music.notes,mecca.music.notes),cljs.core.range.cljs$core$IFn$_invoke$arity$2((24),(36))),key);
var octave = cljs.core.deref((function (){var G__12890 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$octave], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12890) : re_frame.core.subscribe.call(null,G__12890));
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
var scale_name = (function (){var G__12891 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12891) : re_frame.core.subscribe.call(null,G__12891));
})();
var scale_notes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref(scale_name));
var key = cljs.core.deref((function (){var G__12892 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12892) : re_frame.core.subscribe.call(null,G__12892));
})());
var base_pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.zipmap(cljs.core.into.cljs$core$IFn$_invoke$arity$2(mecca.music.notes,mecca.music.notes),cljs.core.range.cljs$core$IFn$_invoke$arity$2((24),(36))),key);
var octave = cljs.core.deref((function (){var G__12893 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$octave], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12893) : re_frame.core.subscribe.call(null,G__12893));
})());
if((n == null)){
return null;
} else {
return (n + base_pitch);
}
});
mecca.music.bassline__GT_midi_nums = (function mecca$music$bassline__GT_midi_nums(v){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12894_SHARP_){
return mecca.music.interval__GT_midi(p1__12894_SHARP_);
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
var G__12896 = arguments.length;
switch (G__12896) {
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
mecca.music.raw_buffer = (function mecca$music$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__12898_12902 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(frame_count));
var chunk__12899_12903 = null;
var count__12900_12904 = (0);
var i__12901_12905 = (0);
while(true){
if((i__12901_12905 < count__12900_12904)){
var i_12906 = chunk__12899_12903.cljs$core$IIndexed$_nth$arity$2(null,i__12901_12905);
(data[i_12906] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_12906) : generate_bit_BANG_.call(null,i_12906)));


var G__12907 = seq__12898_12902;
var G__12908 = chunk__12899_12903;
var G__12909 = count__12900_12904;
var G__12910 = (i__12901_12905 + (1));
seq__12898_12902 = G__12907;
chunk__12899_12903 = G__12908;
count__12900_12904 = G__12909;
i__12901_12905 = G__12910;
continue;
} else {
var temp__5457__auto___12911 = cljs.core.seq(seq__12898_12902);
if(temp__5457__auto___12911){
var seq__12898_12912__$1 = temp__5457__auto___12911;
if(cljs.core.chunked_seq_QMARK_(seq__12898_12912__$1)){
var c__4351__auto___12913 = cljs.core.chunk_first(seq__12898_12912__$1);
var G__12914 = cljs.core.chunk_rest(seq__12898_12912__$1);
var G__12915 = c__4351__auto___12913;
var G__12916 = cljs.core.count(c__4351__auto___12913);
var G__12917 = (0);
seq__12898_12902 = G__12914;
chunk__12899_12903 = G__12915;
count__12900_12904 = G__12916;
i__12901_12905 = G__12917;
continue;
} else {
var i_12918 = cljs.core.first(seq__12898_12912__$1);
(data[i_12918] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_12918) : generate_bit_BANG_.call(null,i_12918)));


var G__12919 = cljs.core.next(seq__12898_12912__$1);
var G__12920 = null;
var G__12921 = (0);
var G__12922 = (0);
seq__12898_12902 = G__12919;
chunk__12899_12903 = G__12920;
count__12900_12904 = G__12921;
i__12901_12905 = G__12922;
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
var G__12923 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tick_BANG_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12923) : re_frame.core.dispatch.call(null,G__12923));
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
var seq__12924_12928 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(frame_count));
var chunk__12925_12929 = null;
var count__12926_12930 = (0);
var i__12927_12931 = (0);
while(true){
if((i__12927_12931 < count__12926_12930)){
var i_12932 = chunk__12925_12929.cljs$core$IIndexed$_nth$arity$2(null,i__12927_12931);
(data[i_12932] = ((Math.random() * 2.0) - 1.0));


var G__12933 = seq__12924_12928;
var G__12934 = chunk__12925_12929;
var G__12935 = count__12926_12930;
var G__12936 = (i__12927_12931 + (1));
seq__12924_12928 = G__12933;
chunk__12925_12929 = G__12934;
count__12926_12930 = G__12935;
i__12927_12931 = G__12936;
continue;
} else {
var temp__5457__auto___12937 = cljs.core.seq(seq__12924_12928);
if(temp__5457__auto___12937){
var seq__12924_12938__$1 = temp__5457__auto___12937;
if(cljs.core.chunked_seq_QMARK_(seq__12924_12938__$1)){
var c__4351__auto___12939 = cljs.core.chunk_first(seq__12924_12938__$1);
var G__12940 = cljs.core.chunk_rest(seq__12924_12938__$1);
var G__12941 = c__4351__auto___12939;
var G__12942 = cljs.core.count(c__4351__auto___12939);
var G__12943 = (0);
seq__12924_12928 = G__12940;
chunk__12925_12929 = G__12941;
count__12926_12930 = G__12942;
i__12927_12931 = G__12943;
continue;
} else {
var i_12944 = cljs.core.first(seq__12924_12938__$1);
(data[i_12944] = ((Math.random() * 2.0) - 1.0));


var G__12945 = cljs.core.next(seq__12924_12938__$1);
var G__12946 = null;
var G__12947 = (0);
var G__12948 = (0);
seq__12924_12928 = G__12945;
chunk__12925_12929 = G__12946;
count__12926_12930 = G__12947;
i__12927_12931 = G__12948;
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
var bassline = (function (){var G__12949 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12949) : re_frame.core.subscribe.call(null,G__12949));
})();
var play_start = mecca.music.current_time(context);
var tempo = (function (){var G__12950 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12950) : re_frame.core.subscribe.call(null,G__12950));
})();
var beat_length = ((60) / cljs.core.deref(tempo));
var total_duration = (beat_length * cljs.core.count(cljs.core.deref(bassline)));
var G__12951_12960 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_on], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12951_12960) : re_frame.core.dispatch.call(null,G__12951_12960));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (context,bassline,play_start,tempo,beat_length,total_duration){
return (function mecca$music$play_bassline_BANG__$_iter__12952(s__12953){
return (new cljs.core.LazySeq(null,((function (context,bassline,play_start,tempo,beat_length,total_duration){
return (function (){
var s__12953__$1 = s__12953;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12953__$1);
if(temp__5457__auto__){
var s__12953__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12953__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12953__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12955 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12954 = (0);
while(true){
if((i__12954 < size__4323__auto__)){
var map__12956 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12954);
var map__12956__$1 = ((((!((map__12956 == null)))?(((((map__12956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12956):map__12956);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12956__$1,cljs.core.cst$kw$time);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12956__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__12955,mecca.music.play_note_BANG_(pitch,(time * beat_length),beat_length));

var G__12961 = (i__12954 + (1));
i__12954 = G__12961;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12955),mecca$music$play_bassline_BANG__$_iter__12952(cljs.core.chunk_rest(s__12953__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12955),null);
}
} else {
var map__12958 = cljs.core.first(s__12953__$2);
var map__12958__$1 = ((((!((map__12958 == null)))?(((((map__12958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12958):map__12958);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12958__$1,cljs.core.cst$kw$time);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12958__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(mecca.music.play_note_BANG_(pitch,(time * beat_length),beat_length),mecca$music$play_bassline_BANG__$_iter__12952(cljs.core.rest(s__12953__$2)));
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
