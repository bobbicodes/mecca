// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.xml');
goog.require('cljs.core');
goog.require('mecca.score');
mecca.xml.get_measures = (function mecca$xml$get_measures(score){
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(score),(7)));
});
mecca.xml.extract_notes = (function mecca$xml$extract_notes(measure){
return cljs.core.filter.call(null,(function (p1__19269_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"note","note",1426297904),cljs.core.get.call(null,p1__19269_SHARP_,new cljs.core.Keyword(null,"tag","tag",-1290361223)));
}),cljs.core.get.call(null,measure,new cljs.core.Keyword(null,"content","content",15833224)));
});
mecca.xml.get_pitch = (function mecca$xml$get_pitch(note){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__19270_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),cljs.core.get.call(null,p1__19270_SHARP_,new cljs.core.Keyword(null,"tag","tag",-1290361223)));
}),cljs.core.get.call(null,note,new cljs.core.Keyword(null,"content","content",15833224))));
});
mecca.xml.get_duration = (function mecca$xml$get_duration(note){
return parseInt(cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__19271_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068),cljs.core.get.call(null,p1__19271_SHARP_,new cljs.core.Keyword(null,"tag","tag",-1290361223)));
}),cljs.core.get.call(null,note,new cljs.core.Keyword(null,"content","content",15833224)))))));
});
mecca.xml.get_step = (function mecca$xml$get_step(pitch){
return cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__19272_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"step","step",1288888124),cljs.core.get.call(null,p1__19272_SHARP_,new cljs.core.Keyword(null,"tag","tag",-1290361223)));
}),cljs.core.get.call(null,pitch,new cljs.core.Keyword(null,"content","content",15833224))))));
});
mecca.xml.get_octave = (function mecca$xml$get_octave(pitch){
return parseInt(cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__19273_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"octave","octave",1066197953),cljs.core.get.call(null,p1__19273_SHARP_,new cljs.core.Keyword(null,"tag","tag",-1290361223)));
}),cljs.core.get.call(null,pitch,new cljs.core.Keyword(null,"content","content",15833224)))))));
});
mecca.xml.get_alter = (function mecca$xml$get_alter(pitch){
return parseInt(cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__19274_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"alter","alter",1560300098),cljs.core.get.call(null,p1__19274_SHARP_,new cljs.core.Keyword(null,"tag","tag",-1290361223)));
}),cljs.core.get.call(null,pitch,new cljs.core.Keyword(null,"content","content",15833224)))))));
});
mecca.xml.pitch__GT_midi = (function mecca$xml$pitch__GT_midi(pitch){
var base_pitch = ((12) * mecca.xml.get_octave.call(null,pitch));
var pitch_steps = cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","D","E","F","G","A","B"], null),cljs.core.range.call(null,(7)));
var step = mecca.xml.get_step.call(null,pitch);
var alter = ((cljs.core.int_QMARK_.call(null,mecca.xml.get_alter.call(null,pitch)))?mecca.xml.get_alter.call(null,pitch):(0));
return ((cljs.core.get.call(null,pitch_steps,step) + base_pitch) + alter);
});
mecca.xml.parse_note = (function mecca$xml$parse_note(note,time){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"pitch","pitch",1495126700),mecca.xml.pitch__GT_midi.call(null,mecca.xml.get_pitch.call(null,note)),new cljs.core.Keyword(null,"duration","duration",1444101068),(mecca.xml.get_duration.call(null,note) / (6))], null);
});
mecca.xml.parse_measure = (function mecca$xml$parse_measure(measure){
var time = (1);
var notes = mecca.xml.extract_notes.call(null,measure);
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,notes)){
return result;
} else {
var G__19275 = (time + (mecca.xml.get_duration.call(null,cljs.core.first.call(null,notes)) / (6)));
var G__19276 = cljs.core.rest.call(null,notes);
var G__19277 = cljs.core.conj.call(null,result,mecca.xml.parse_note.call(null,cljs.core.first.call(null,notes),time));
time = G__19275;
notes = G__19276;
result = G__19277;
continue;
}
break;
}
});

//# sourceMappingURL=xml.js.map
