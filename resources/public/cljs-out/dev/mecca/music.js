// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs_bach.synthesis');
goog.require('leipzig.melody');
mecca.music.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453),(80),new cljs.core.Keyword(null,"scale","scale",-230427353),"Pentatonic",new cljs.core.Keyword(null,"octave","octave",1066197953),(2),new cljs.core.Keyword(null,"key","key",-1516042587),"C",new cljs.core.Keyword(null,"pitches","pitches",-2052174929),cljs.core.vec.call(null,cljs.core.repeat.call(null,(16),null)),new cljs.core.Keyword(null,"durations","durations",-658943749),cljs.core.vec.call(null,cljs.core.repeat.call(null,(16),(0))),new cljs.core.Keyword(null,"selected-note","selected-note",-1428497993),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null));
mecca.music.pitches = reagent.core.cursor.call(null,mecca.music.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pitches","pitches",-2052174929)], null));
mecca.music.durations = reagent.core.cursor.call(null,mecca.music.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"durations","durations",-658943749)], null));
mecca.music.selected_note = reagent.core.cursor.call(null,mecca.music.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-note","selected-note",-1428497993)], null));
mecca.music.notes = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"], null);
mecca.music.scales = new cljs.core.PersistentArrayMap(null, 6, ["Pentatonic",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(5),(7),(10),(12)], null),"Chromatic",new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12)], null),"Major",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(4),(5),(7),(9),(11),(12)], null),"Minor",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(3),(5),(7),(8),(10),(12)], null),"Harmonic Minor",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(3),(5),(7),(8),(11),(12)], null),"Double Harmonic Minor",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(4),(5),(7),(8),(11),(12)], null)], null);
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.context !== 'undefined')){
} else {
mecca.music.context = cljs_bach.synthesis.audio_context.call(null);
}
mecca.music.note__GT_midi_num = (function mecca$music$note__GT_midi_num(note){
return (((12) * (new cljs.core.Keyword(null,"octave","octave",1066197953).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.music.app_state)) - (1))) + cljs.core.get.call(null,cljs.core.zipmap.call(null,cljs.core.into.call(null,mecca.music.notes,mecca.music.notes),cljs.core.range.call(null,(24),(36))),note));
});
mecca.music.base_pitch = (function mecca$music$base_pitch(midi_num){
return cljs.core.get.call(null,mecca.music.notes,cljs.core.mod.call(null,midi_num,(12)));
});
mecca.music.octave = (function mecca$music$octave(midi_num){
return (cljs.core.quot.call(null,midi_num,(12)) - (1));
});
mecca.music.y__GT_midi = (function mecca$music$y__GT_midi(y){
if((y == null)){
return null;
} else {
return (mecca.music.note__GT_midi_num.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.music.app_state))) + cljs.core.nth.call(null,cljs.core.reverse.call(null,cljs.core.into.call(null,cljs.core.get.call(null,mecca.music.scales,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.music.app_state))),cljs.core.map.call(null,(function (p1__13201_SHARP_){
return ((12) + p1__13201_SHARP_);
}),cljs.core.rest.call(null,cljs.core.get.call(null,mecca.music.scales,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.music.app_state))))))),y));
}
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
mecca.music.melody = (function mecca$music$melody(){
return leipzig.melody.tempo.call(null,leipzig.melody.bpm.call(null,new cljs.core.Keyword(null,"tempo","tempo",-1555208453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.music.app_state))),leipzig.melody.phrase.call(null,cljs.core.deref.call(null,mecca.music.durations),cljs.core.map.call(null,mecca.music.y__GT_midi,cljs.core.deref.call(null,mecca.music.pitches))));
});

//# sourceMappingURL=music.js.map
