goog.provide('mecca.xml');
goog.require('cljs.core');
goog.require('mecca.score');
goog.require('re_frame.core');
mecca.xml.get_measures = (function mecca$xml$get_measures(score){
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(score),(7)));
});
mecca.xml.get_tag = (function mecca$xml$get_tag(tag,content){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__46697_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__46697_SHARP_,new cljs.core.Keyword(null,"tag","tag",-1290361223)));
}),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(content));
});
mecca.xml.extract_notes = (function mecca$xml$extract_notes(measure){
return mecca.xml.get_tag(new cljs.core.Keyword(null,"note","note",1426297904),measure);
});
mecca.xml.get_pitch = (function mecca$xml$get_pitch(note){
return cljs.core.first(mecca.xml.get_tag(new cljs.core.Keyword(null,"pitch","pitch",1495126700),note));
});
mecca.xml.get_attr = (function mecca$xml$get_attr(attr,note){
return cljs.core.first(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.first(mecca.xml.get_tag(attr,note))));
});
mecca.xml.get_duration = (function mecca$xml$get_duration(note){
return parseInt(mecca.xml.get_attr(new cljs.core.Keyword(null,"duration","duration",1444101068),note));
});
mecca.xml.get_voice = (function mecca$xml$get_voice(note){
return parseInt(mecca.xml.get_attr(new cljs.core.Keyword(null,"voice","voice",185716428),note));
});
mecca.xml.extract_voice = (function mecca$xml$extract_voice(measure,voice){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__46698_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(voice,mecca.xml.get_voice(p1__46698_SHARP_));
}),mecca.xml.get_tag(new cljs.core.Keyword(null,"note","note",1426297904),measure));
});
mecca.xml.get_step = (function mecca$xml$get_step(pitch){
return mecca.xml.get_attr(new cljs.core.Keyword(null,"step","step",1288888124),pitch);
});
mecca.xml.get_octave = (function mecca$xml$get_octave(pitch){
return parseInt(mecca.xml.get_attr(new cljs.core.Keyword(null,"octave","octave",1066197953),pitch));
});
mecca.xml.get_alter = (function mecca$xml$get_alter(pitch){
return parseInt(mecca.xml.get_attr(new cljs.core.Keyword(null,"alter","alter",1560300098),pitch));
});
mecca.xml.pitch__GT_midi = (function mecca$xml$pitch__GT_midi(pitch){
var base_pitch = ((12) + ((12) * mecca.xml.get_octave(pitch)));
var pitch_steps = cljs.core.zipmap(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","D","E","F","G","A","B"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(4),(5),(7),(9),(11)], null));
var step = mecca.xml.get_step(pitch);
var alter = ((cljs.core.int_QMARK_(mecca.xml.get_alter(pitch)))?mecca.xml.get_alter(pitch):(0));
return ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_steps,step) + base_pitch) + alter);
});
mecca.xml.parse_note = (function mecca$xml$parse_note(note,time){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"pitch","pitch",1495126700),((mecca.xml.pitch__GT_midi(mecca.xml.get_pitch(note)) + (function (){var G__46699 = mecca.xml.get_voice(note);
switch (G__46699) {
case (5):
return (12);

break;
default:
return (0);

}
})()) + (6)),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(function (){var G__46700 = mecca.xml.get_voice(note);
switch (G__46700) {
case (5):
return (15);

break;
case (1):
return (14);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46700)].join('')));

}
})()], null);
});
mecca.xml.parse_measure = (function mecca$xml$parse_measure(measure,voice){
var time = (1);
var notes = mecca.xml.extract_voice(measure,voice);
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(notes)){
return result;
} else {
var G__46709 = (time + (mecca.xml.get_duration(cljs.core.first(notes)) / (6)));
var G__46710 = cljs.core.rest(notes);
var G__46711 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,mecca.xml.parse_note(cljs.core.first(notes),time));
time = G__46709;
notes = G__46710;
result = G__46711;
continue;
}
break;
}
});
mecca.xml.parse_voice = (function mecca$xml$parse_voice(voice){
var time = (1);
var notes = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (time){
return (function (p1__46701_SHARP_){
return mecca.xml.extract_voice(p1__46701_SHARP_,voice);
});})(time))
,mecca.xml.get_measures(mecca.score.zelda_parsed)));
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(notes)){
return result;
} else {
var G__46721 = (time + (mecca.xml.get_duration(cljs.core.first(notes)) / (6)));
var G__46722 = cljs.core.rest(notes);
var G__46723 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,mecca.xml.parse_note(cljs.core.first(notes),time));
time = G__46721;
notes = G__46722;
result = G__46723;
continue;
}
break;
}
});

//# sourceMappingURL=mecca.xml.js.map
