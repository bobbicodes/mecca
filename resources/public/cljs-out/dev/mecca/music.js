// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('cljs_bach.synthesis');
goog.require('leipzig.melody');
goog.require('leipzig.temperament');
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.context !== 'undefined')){
} else {
mecca.music.context = cljs_bach.synthesis.audio_context.call(null);
}
mecca.music.notes = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"], null);
mecca.music.scales = new cljs.core.PersistentArrayMap(null, 6, ["Pentatonic",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(5),(7),(10),(12)], null),"Chromatic",new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12)], null),"Major",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(4),(5),(7),(9),(11),(12)], null),"Minor",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(3),(5),(7),(8),(10),(12)], null),"Harmonic Minor",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(3),(5),(7),(8),(11),(12)], null),"Double Harmonic Minor",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(4),(5),(7),(8),(11),(12)], null)], null);
mecca.music.basslines = new cljs.core.PersistentArrayMap(null, 7, ["Alberti bass",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5),(3),(5)], null),"Walking bass",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3),(5),(6),(7),(6),(5),(3)], null),"Lament",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8),(7),(7),(6),(6),(5),(5)], null),"Pachelbel",new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8),(5),(5),(6),(6),(3),(3),(4),(4),(8),(8),(4),(4),(5),(5)], null),"Doo-wop",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8),(6),(6),(4),(4),(5),(5)], null),"Circle of fifths",new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8),(11),(11),(7),(7),(10),(10),(6),(6),(9),(9),(5),(5),(8),(8)], null),"Pop-punk",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(5),(5),(6),(6),(4),(4)], null)], null);
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
var scale_name = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)));
var scale_notes = cljs.core.get.call(null,mecca.music.scales,scale_name);
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
return cljs.core.map.call(null,(function (p1__26785_SHARP_){
return mecca.music.interval__GT_midi.call(null,p1__26785_SHARP_);
}),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null))));
});
mecca.music.midi_num__GT_note = (function mecca$music$midi_num__GT_note(midi_num){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.music.base_pitch.call(null,midi_num)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.music.octave.call(null,midi_num))].join('');
});
mecca.music.midi__GT_freq = (function mecca$music$midi__GT_freq(m){
return ((440) * Math.pow((2),((m - (69)) / (12))));
});
mecca.music.bass = (function mecca$music$bass(note){
return cljs_bach.synthesis.connect__GT_.call(null,cljs_bach.synthesis.oscillator.call(null,"triangle",new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(note)),cljs_bach.synthesis.adsr.call(null,0.0,0.0,0.25,0.4),cljs_bach.synthesis.gain.call(null,(1)));
});
/**
 * Take a sequence of notes and play them from a set point in an audiocontext.
 */
mecca.music.play_from_BANG_ = (function mecca$music$play_from_BANG_(audiocontext,from,notes){
var seq__26786 = cljs.core.seq.call(null,notes);
var chunk__26787 = null;
var count__26788 = (0);
var i__26789 = (0);
while(true){
if((i__26789 < count__26788)){
var map__26790 = cljs.core._nth.call(null,chunk__26787,i__26789);
var map__26790__$1 = ((((!((map__26790 == null)))?(((((map__26790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26790):map__26790);
var note = map__26790__$1;
var time = cljs.core.get.call(null,map__26790__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__26790__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var instrument = cljs.core.get.call(null,map__26790__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var at_26794 = (time + from);
var synth_instance_26795 = instrument.call(null,cljs.core.dissoc.call(null,cljs.core.update.call(null,note,new cljs.core.Keyword(null,"pitch","pitch",1495126700),leipzig.temperament.equal),new cljs.core.Keyword(null,"time","time",1385887882)));
var connected_instance_26796 = cljs_bach.synthesis.connect.call(null,synth_instance_26795,cljs_bach.synthesis.destination);
connected_instance_26796.call(null,audiocontext,at_26794,duration);


var G__26797 = seq__26786;
var G__26798 = chunk__26787;
var G__26799 = count__26788;
var G__26800 = (i__26789 + (1));
seq__26786 = G__26797;
chunk__26787 = G__26798;
count__26788 = G__26799;
i__26789 = G__26800;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26786);
if(temp__5457__auto__){
var seq__26786__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26786__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__26786__$1);
var G__26801 = cljs.core.chunk_rest.call(null,seq__26786__$1);
var G__26802 = c__4351__auto__;
var G__26803 = cljs.core.count.call(null,c__4351__auto__);
var G__26804 = (0);
seq__26786 = G__26801;
chunk__26787 = G__26802;
count__26788 = G__26803;
i__26789 = G__26804;
continue;
} else {
var map__26792 = cljs.core.first.call(null,seq__26786__$1);
var map__26792__$1 = ((((!((map__26792 == null)))?(((((map__26792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26792):map__26792);
var note = map__26792__$1;
var time = cljs.core.get.call(null,map__26792__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__26792__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var instrument = cljs.core.get.call(null,map__26792__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var at_26805 = (time + from);
var synth_instance_26806 = instrument.call(null,cljs.core.dissoc.call(null,cljs.core.update.call(null,note,new cljs.core.Keyword(null,"pitch","pitch",1495126700),leipzig.temperament.equal),new cljs.core.Keyword(null,"time","time",1385887882)));
var connected_instance_26807 = cljs_bach.synthesis.connect.call(null,synth_instance_26806,cljs_bach.synthesis.destination);
connected_instance_26807.call(null,audiocontext,at_26805,duration);


var G__26808 = cljs.core.next.call(null,seq__26786__$1);
var G__26809 = null;
var G__26810 = (0);
var G__26811 = (0);
seq__26786 = G__26808;
chunk__26787 = G__26809;
count__26788 = G__26810;
i__26789 = G__26811;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Take a sequence of notes and play them in an audiocontext.
 */
mecca.music.play_BANG_ = (function mecca$music$play_BANG_(audiocontext,notes){
return mecca.music.play_from_BANG_.call(null,audiocontext,cljs_bach.synthesis.current_time.call(null,audiocontext),notes);
});
mecca.music.play_bassline_BANG_ = (function mecca$music$play_bassline_BANG_(){
return mecca.music.play_BANG_.call(null,mecca.music.context,leipzig.melody.all.call(null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),mecca.music.bass,leipzig.melody.tempo.call(null,leipzig.melody.bpm.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null)))),leipzig.melody.phrase.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,(16),0.25)),mecca.music.bassline__GT_midi_nums.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null))))))));
});

//# sourceMappingURL=music.js.map
