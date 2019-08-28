// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('mecca.music.processing');
goog.require('mecca.music.actions');
goog.require('mecca.music.framework');
goog.require('mecca.music.scale');
goog.require('mecca.music.synthesis');
goog.require('mecca.music.melody');
mecca.music.notes = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"], null);
mecca.music.scales = new cljs.core.PersistentArrayMap(null, 6, ["Pentatonic",mecca.music.scale.pentatonic,"Chromatic",mecca.music.scale.chromatic,"Major",mecca.music.scale.major,"Minor",mecca.music.scale.minor,"Harmonic Minor",mecca.music.scale.harmonic_minor,"Double Harmonic Minor",mecca.music.scale.double_harmonic_minor], null);
mecca.music.basslines = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Alberti bass",new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5),(3),(5)], null),new cljs.core.Keyword(null,"scales","scales",-1197224722),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Minor","Major"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Walking bass",new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3),(4),(5),(7),(5),(4),(3)], null),new cljs.core.Keyword(null,"scales","scales",-1197224722),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Minor","Major"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Lament",new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8),(7),(7),(6),(6),(5),(5)], null),new cljs.core.Keyword(null,"scales","scales",-1197224722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chromatic"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Pachelbel's Canon",new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8),(5),(5),(6),(6),(3),(3),(4),(4),(8),(8),(4),(4),(5),(5)], null),new cljs.core.Keyword(null,"scales","scales",-1197224722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Major"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Doo-wop",new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8),(6),(6),(4),(4),(5),(5)], null),new cljs.core.Keyword(null,"scales","scales",-1197224722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Major"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Circle of fifths",new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8),(11),(11),(7),(7),(10),(10),(6),(6),(9),(9),(5),(5),(8),(8)], null),new cljs.core.Keyword(null,"scales","scales",-1197224722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Major"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Pop-punk",new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(5),(5),(6),(6),(4),(4)], null),new cljs.core.Keyword(null,"scales","scales",-1197224722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Major"], null)], null)], null);
mecca.music.root_note_midi_num = (function mecca$music$root_note_midi_num(){
var key = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
var base_pitch = cljs.core.get.call(null,cljs.core.zipmap.call(null,cljs.core.into.call(null,mecca.music.notes,mecca.music.notes),cljs.core.range.call(null,(24),(36))),key);
var octave = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"octave","octave",1066197953)], null)));
return (((12) * (octave - (1))) + base_pitch);
});
mecca.music.base_pitch = (function mecca$music$base_pitch(midi_num){
return cljs.core.get.call(null,mecca.music.notes,cljs.core.mod.call(null,midi_num,(12)));
});
mecca.music.octave = (function mecca$music$octave(midi_num){
return (cljs.core.quot.call(null,midi_num,(12)) - (1));
});
mecca.music.interval__GT_midi = (function mecca$music$interval__GT_midi(n){
var scale_name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null));
var scale_notes = cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,scale_name));
var key = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
var base_pitch = cljs.core.get.call(null,cljs.core.zipmap.call(null,cljs.core.into.call(null,mecca.music.notes,mecca.music.notes),cljs.core.range.call(null,(24),(36))),key);
var octave = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"octave","octave",1066197953)], null)));
if((n == null)){
return null;
} else {
return (n + base_pitch);
}
});
mecca.music.bassline__GT_midi_nums = (function mecca$music$bassline__GT_midi_nums(v){
return cljs.core.map.call(null,(function (p1__18967_SHARP_){
return mecca.music.interval__GT_midi.call(null,p1__18967_SHARP_);
}),v);
});
mecca.music.midi_num__GT_note = (function mecca$music$midi_num__GT_note(midi_num){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.music.base_pitch.call(null,midi_num)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.music.octave.call(null,midi_num))].join('');
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
var G__18969 = arguments.length;
switch (G__18969) {
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),input,new cljs.core.Keyword(null,"output","output",-1105869043),output], null);
});

mecca.music.subgraph.cljs$core$IFn$_invoke$arity$1 = (function (singleton){
return mecca.music.subgraph.call(null,singleton,singleton);
});

mecca.music.subgraph.cljs$lang$maxFixedArity = 2;

/**
 * A graph of synthesis nodes without an input,
 *   so another graph can't connect to it.
 */
mecca.music.source = (function mecca$music$source(node){
return mecca.music.subgraph.call(null,null,node);
});
mecca.music.raw_buffer = (function mecca$music$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__18971_18975 = cljs.core.seq.call(null,cljs.core.range.call(null,frame_count));
var chunk__18972_18976 = null;
var count__18973_18977 = (0);
var i__18974_18978 = (0);
while(true){
if((i__18974_18978 < count__18973_18977)){
var i_18979 = cljs.core._nth.call(null,chunk__18972_18976,i__18974_18978);
(data[i_18979] = generate_bit_BANG_.call(null,i_18979));


var G__18980 = seq__18971_18975;
var G__18981 = chunk__18972_18976;
var G__18982 = count__18973_18977;
var G__18983 = (i__18974_18978 + (1));
seq__18971_18975 = G__18980;
chunk__18972_18976 = G__18981;
count__18973_18977 = G__18982;
i__18974_18978 = G__18983;
continue;
} else {
var temp__5457__auto___18984 = cljs.core.seq.call(null,seq__18971_18975);
if(temp__5457__auto___18984){
var seq__18971_18985__$1 = temp__5457__auto___18984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18971_18985__$1)){
var c__4351__auto___18986 = cljs.core.chunk_first.call(null,seq__18971_18985__$1);
var G__18987 = cljs.core.chunk_rest.call(null,seq__18971_18985__$1);
var G__18988 = c__4351__auto___18986;
var G__18989 = cljs.core.count.call(null,c__4351__auto___18986);
var G__18990 = (0);
seq__18971_18975 = G__18987;
chunk__18972_18976 = G__18988;
count__18973_18977 = G__18989;
i__18974_18978 = G__18990;
continue;
} else {
var i_18991 = cljs.core.first.call(null,seq__18971_18985__$1);
(data[i_18991] = generate_bit_BANG_.call(null,i_18991));


var G__18992 = cljs.core.next.call(null,seq__18971_18985__$1);
var G__18993 = null;
var G__18994 = (0);
var G__18995 = (0);
seq__18971_18975 = G__18992;
chunk__18972_18976 = G__18993;
count__18973_18977 = G__18994;
i__18974_18978 = G__18995;
continue;
}
} else {
}
}
break;
}

return buffer;
});
mecca.music.buffer = cljs.core.memoize.call(null,mecca.music.raw_buffer);
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var context = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014)], null));
var now = mecca.music.current_time.call(null,cljs.core.deref.call(null,context));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739),now], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick!","tick!",68058958)], null));
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.do_timer !== 'undefined')){
} else {
mecca.music.do_timer = setInterval(mecca.music.dispatch_timer_event,(200));
}
mecca.music.play_noise_BANG_ = (function mecca$music$play_noise_BANG_(start,duration){
var context = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014)], null));
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var noise = cljs.core.deref.call(null,context).createBufferSource();
var now = mecca.music.current_time.call(null,cljs.core.deref.call(null,context));
var seq__18996_19000 = cljs.core.seq.call(null,cljs.core.range.call(null,frame_count));
var chunk__18997_19001 = null;
var count__18998_19002 = (0);
var i__18999_19003 = (0);
while(true){
if((i__18999_19003 < count__18998_19002)){
var i_19004 = cljs.core._nth.call(null,chunk__18997_19001,i__18999_19003);
(data[i_19004] = ((Math.random() * 2.0) - 1.0));


var G__19005 = seq__18996_19000;
var G__19006 = chunk__18997_19001;
var G__19007 = count__18998_19002;
var G__19008 = (i__18999_19003 + (1));
seq__18996_19000 = G__19005;
chunk__18997_19001 = G__19006;
count__18998_19002 = G__19007;
i__18999_19003 = G__19008;
continue;
} else {
var temp__5457__auto___19009 = cljs.core.seq.call(null,seq__18996_19000);
if(temp__5457__auto___19009){
var seq__18996_19010__$1 = temp__5457__auto___19009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18996_19010__$1)){
var c__4351__auto___19011 = cljs.core.chunk_first.call(null,seq__18996_19010__$1);
var G__19012 = cljs.core.chunk_rest.call(null,seq__18996_19010__$1);
var G__19013 = c__4351__auto___19011;
var G__19014 = cljs.core.count.call(null,c__4351__auto___19011);
var G__19015 = (0);
seq__18996_19000 = G__19012;
chunk__18997_19001 = G__19013;
count__18998_19002 = G__19014;
i__18999_19003 = G__19015;
continue;
} else {
var i_19016 = cljs.core.first.call(null,seq__18996_19010__$1);
(data[i_19016] = ((Math.random() * 2.0) - 1.0));


var G__19017 = cljs.core.next.call(null,seq__18996_19010__$1);
var G__19018 = null;
var G__19019 = (0);
var G__19020 = (0);
seq__18996_19000 = G__19017;
chunk__18997_19001 = G__19018;
count__18998_19002 = G__19019;
i__18999_19003 = G__19020;
continue;
}
} else {
}
}
break;
}

noise.buffer = buffer;

noise.connect(cljs.core.deref.call(null,context).destination);

noise.start((now + start));

return noise.stop(((now + start) + duration));
});
mecca.music.play_note_BANG_ = (function mecca$music$play_note_BANG_(midi_num,start,duration){
var context = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014)], null));
var osc = cljs.core.deref.call(null,context).createOscillator();
var now = mecca.music.current_time.call(null,cljs.core.deref.call(null,context));
var freq = mecca.music.midi__GT_freq.call(null,midi_num);
var gain = cljs.core.deref.call(null,context).createGain();
osc.type = "triangle";

osc.frequency.value = freq;

osc.connect(gain);

gain.connect(cljs.core.deref.call(null,context).destination);

osc.start((now + start));

return osc.stop(((now + start) + duration));
});
mecca.music.play_bassline_BANG_ = (function mecca$music$play_bassline_BANG_(){
var context = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014)], null));
var bassline = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null));
var play_start = mecca.music.current_time.call(null,cljs.core.deref.call(null,context));
var tempo = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
var beat_length = ((60) / cljs.core.deref.call(null,tempo));
var total_duration = (beat_length * cljs.core.count.call(null,cljs.core.deref.call(null,bassline)));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-on","play-on",-1655917734)], null));

return cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (context,bassline,play_start,tempo,beat_length,total_duration){
return (function mecca$music$play_bassline_BANG__$_iter__19021(s__19022){
return (new cljs.core.LazySeq(null,((function (context,bassline,play_start,tempo,beat_length,total_duration){
return (function (){
var s__19022__$1 = s__19022;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__19022__$1);
if(temp__5457__auto__){
var s__19022__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19022__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__19022__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__19024 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__19023 = (0);
while(true){
if((i__19023 < size__4323__auto__)){
var map__19025 = cljs.core._nth.call(null,c__4322__auto__,i__19023);
var map__19025__$1 = ((((!((map__19025 == null)))?(((((map__19025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19025):map__19025);
var time = cljs.core.get.call(null,map__19025__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var pitch = cljs.core.get.call(null,map__19025__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append.call(null,b__19024,mecca.music.play_note_BANG_.call(null,pitch,(time * beat_length),beat_length));

var G__19029 = (i__19023 + (1));
i__19023 = G__19029;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19024),mecca$music$play_bassline_BANG__$_iter__19021.call(null,cljs.core.chunk_rest.call(null,s__19022__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19024),null);
}
} else {
var map__19027 = cljs.core.first.call(null,s__19022__$2);
var map__19027__$1 = ((((!((map__19027 == null)))?(((((map__19027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19027):map__19027);
var time = cljs.core.get.call(null,map__19027__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var pitch = cljs.core.get.call(null,map__19027__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons.call(null,mecca.music.play_note_BANG_.call(null,pitch,(time * beat_length),beat_length),mecca$music$play_bassline_BANG__$_iter__19021.call(null,cljs.core.rest.call(null,s__19022__$2)));
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
return iter__4324__auto__.call(null,cljs.core.deref.call(null,bassline));
})());
});

//# sourceMappingURL=music.js.map
