// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('cljs_bach.synthesis');
goog.require('leipzig.melody');
mecca.music.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$tempo,(80),cljs.core.cst$kw$scale,"Pentatonic",cljs.core.cst$kw$octave,(2),cljs.core.cst$kw$key,"C",cljs.core.cst$kw$pitches,cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((16),null)),cljs.core.cst$kw$durations,cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((16),(0))),cljs.core.cst$kw$selected_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null));
mecca.music.pitches = reagent.core.cursor(mecca.music.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pitches], null));
mecca.music.durations = reagent.core.cursor(mecca.music.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$durations], null));
mecca.music.selected_note = reagent.core.cursor(mecca.music.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_note], null));
mecca.music.notes = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"], null);
mecca.music.scales = new cljs.core.PersistentArrayMap(null, 6, ["Pentatonic",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(5),(7),(10),(12)], null),"Chromatic",new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8),(9),(10),(11),(12)], null),"Major",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(4),(5),(7),(9),(11),(12)], null),"Minor",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(3),(5),(7),(8),(10),(12)], null),"Harmonic Minor",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(3),(5),(7),(8),(11),(12)], null),"Double Harmonic Minor",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(4),(5),(7),(8),(11),(12)], null)], null);
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.context !== 'undefined')){
} else {
mecca.music.context = cljs_bach.synthesis.audio_context();
}
mecca.music.note__GT_midi_num = (function mecca$music$note__GT_midi_num(note){
return (((12) * (cljs.core.cst$kw$octave.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mecca.music.app_state)) - (1))) + cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.zipmap(cljs.core.into.cljs$core$IFn$_invoke$arity$2(mecca.music.notes,mecca.music.notes),cljs.core.range.cljs$core$IFn$_invoke$arity$2((24),(36))),note));
});
mecca.music.base_pitch = (function mecca$music$base_pitch(midi_num){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.notes,cljs.core.mod(midi_num,(12)));
});
mecca.music.octave = (function mecca$music$octave(midi_num){
return (cljs.core.quot(midi_num,(12)) - (1));
});
mecca.music.y__GT_midi = (function mecca$music$y__GT_midi(y){
if((y == null)){
return null;
} else {
return (mecca.music.note__GT_midi_num(cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mecca.music.app_state))) + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.cst$kw$scale.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mecca.music.app_state))),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12248_SHARP_){
return ((12) + p1__12248_SHARP_);
}),cljs.core.rest(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.cst$kw$scale.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mecca.music.app_state))))))),y));
}
});
mecca.music.midi_num__GT_note = (function mecca$music$midi_num__GT_note(midi_num){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.music.base_pitch(midi_num)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.music.octave(midi_num))].join('');
});
mecca.music.midi__GT_freq = (function mecca$music$midi__GT_freq(m){
return ((440) * Math.pow((2),((m - (69)) / (12))));
});
mecca.music.bass = (function mecca$music$bass(note){
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_bach.synthesis.oscillator("triangle",cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(note)),cljs_bach.synthesis.adsr(0.0,0.0,0.25,0.4),cljs_bach.synthesis.gain((1))], 0));
});
mecca.music.melody = (function mecca$music$melody(){
return leipzig.melody.tempo(leipzig.melody.bpm(cljs.core.cst$kw$tempo.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mecca.music.app_state))),leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mecca.music.durations),cljs.core.map.cljs$core$IFn$_invoke$arity$2(mecca.music.y__GT_midi,cljs.core.deref(mecca.music.pitches))));
});
