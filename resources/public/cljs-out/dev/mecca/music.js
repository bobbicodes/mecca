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
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.state_atom !== 'undefined')){
} else {
mecca.music.state_atom = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014),mecca.music.synthesis.audio_context.call(null)], null));
}
/**
 * An handler that components can use to raise events.
 */
mecca.music.handle_BANG_ = mecca.music.framework.handler_for.call(null,mecca.music.state_atom);
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
return cljs.core.map.call(null,(function (p1__14684_SHARP_){
return mecca.music.interval__GT_midi.call(null,p1__14684_SHARP_);
}),v);
});
mecca.music.midi_num__GT_note = (function mecca$music$midi_num__GT_note(midi_num){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.music.base_pitch.call(null,midi_num)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.music.octave.call(null,midi_num))].join('');
});
mecca.music.midi__GT_freq = (function mecca$music$midi__GT_freq(m){
return ((440) * Math.pow((2),((m - (69)) / (12))));
});
mecca.music.bass = (function mecca$music$bass(note){
return mecca.music.synthesis.connect__GT_.call(null,mecca.music.synthesis.oscillator.call(null,"triangle",new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(note)),mecca.music.synthesis.adsr.call(null,0.0,0.0,0.25,0.1),mecca.music.synthesis.gain.call(null,(1)));
});
/**
 * Return the current time as recorded by the audio context.
 */
mecca.music.current_time = (function mecca$music$current_time(context){
return context.currentTime;
});
goog.exportSymbol('mecca.music.current_time', mecca.music.current_time);
mecca.music.play_note_BANG_ = (function mecca$music$play_note_BANG_(midi_num,start,duration){
var context = new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.music.state_atom));
var osc = context.createOscillator();
var now = mecca.music.current_time.call(null,context);
var freq = mecca.music.midi__GT_freq.call(null,midi_num);
osc.type = "triangle";

osc.frequency.value = freq;

osc.connect(new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.music.state_atom)).destination);

osc.start((now + start));

return osc.stop(((now + start) + duration));
});
mecca.music.play_bassline_BANG_ = (function mecca$music$play_bassline_BANG_(){
var context = new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.music.state_atom));
var bassline = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null));
var now = mecca.music.current_time.call(null,context);
var current_position = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
return cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (context,bassline,now,current_position){
return (function mecca$music$play_bassline_BANG__$_iter__14685(s__14686){
return (new cljs.core.LazySeq(null,((function (context,bassline,now,current_position){
return (function (){
var s__14686__$1 = s__14686;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14686__$1);
if(temp__5457__auto__){
var s__14686__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14686__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__14686__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__14688 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__14687 = (0);
while(true){
if((i__14687 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__14687);
cljs.core.chunk_append.call(null,b__14688,(function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-position","advance-position",-23796893)], null));

mecca.music.play_note_BANG_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,bassline),x),(x * 0.25),0.25);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860)], null));
})()
);

var G__14689 = (i__14687 + (1));
i__14687 = G__14689;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14688),mecca$music$play_bassline_BANG__$_iter__14685.call(null,cljs.core.chunk_rest.call(null,s__14686__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14688),null);
}
} else {
var x = cljs.core.first.call(null,s__14686__$2);
return cljs.core.cons.call(null,(function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-position","advance-position",-23796893)], null));

mecca.music.play_note_BANG_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,bassline),x),(x * 0.25),0.25);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860)], null));
})()
,mecca$music$play_bassline_BANG__$_iter__14685.call(null,cljs.core.rest.call(null,s__14686__$2)));
}
} else {
return null;
}
break;
}
});})(context,bassline,now,current_position))
,null,null));
});})(context,bassline,now,current_position))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,bassline))));
})());
});

//# sourceMappingURL=music.js.map
