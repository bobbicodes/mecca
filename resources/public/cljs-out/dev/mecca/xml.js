// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.xml');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('mecca.score');
goog.require('re_frame.core');
mecca.xml.get_measures = (function mecca$xml$get_measures(score){
return cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(score),(7)));
});
mecca.xml.get_tag = (function mecca$xml$get_tag(tag,content){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20440_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__20440_SHARP_,cljs.core.cst$kw$tag));
}),cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(content));
});
mecca.xml.extract_notes = (function mecca$xml$extract_notes(measure){
return mecca.xml.get_tag(cljs.core.cst$kw$note,measure);
});
mecca.xml.get_pitch = (function mecca$xml$get_pitch(note){
return cljs.core.first(mecca.xml.get_tag(cljs.core.cst$kw$pitch,note));
});
mecca.xml.get_attr = (function mecca$xml$get_attr(attr,note){
return cljs.core.first(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mecca.xml.get_tag(attr,note))));
});
mecca.xml.get_duration = (function mecca$xml$get_duration(note){
return parseInt(mecca.xml.get_attr(cljs.core.cst$kw$duration,note));
});
mecca.xml.get_voice = (function mecca$xml$get_voice(note){
return parseInt(mecca.xml.get_attr(cljs.core.cst$kw$voice,note));
});
mecca.xml.extract_voice = (function mecca$xml$extract_voice(measure,voice){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20441_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(voice,mecca.xml.get_voice(p1__20441_SHARP_));
}),mecca.xml.get_tag(cljs.core.cst$kw$note,measure));
});
mecca.xml.get_step = (function mecca$xml$get_step(pitch){
return mecca.xml.get_attr(cljs.core.cst$kw$step,pitch);
});
mecca.xml.get_octave = (function mecca$xml$get_octave(pitch){
return parseInt(mecca.xml.get_attr(cljs.core.cst$kw$octave,pitch));
});
mecca.xml.get_alter = (function mecca$xml$get_alter(pitch){
return parseInt(mecca.xml.get_attr(cljs.core.cst$kw$alter,pitch));
});
mecca.xml.pitch__GT_midi = (function mecca$xml$pitch__GT_midi(pitch){
var base_pitch = ((12) + ((12) * mecca.xml.get_octave(pitch)));
var pitch_steps = cljs.core.zipmap(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","D","E","F","G","A","B"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(4),(5),(7),(9),(11)], null));
var step = mecca.xml.get_step(pitch);
var alter = ((cljs.core.int_QMARK_(mecca.xml.get_alter(pitch)))?mecca.xml.get_alter(pitch):(0));
return ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_steps,step) + base_pitch) + alter);
});
mecca.xml.parse_note = (function mecca$xml$parse_note(note,time){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$pitch,((mecca.xml.pitch__GT_midi(mecca.xml.get_pitch(note)) + (function (){var G__20442 = mecca.xml.get_voice(note);
switch (G__20442) {
case (5):
return (12);

break;
default:
return (0);

}
})()) + (6)),cljs.core.cst$kw$instrument,(function (){var G__20443 = mecca.xml.get_voice(note);
switch (G__20443) {
case (5):
return (15);

break;
case (1):
return (14);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20443)].join('')));

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
var G__20446 = (time + (mecca.xml.get_duration(cljs.core.first(notes)) / (6)));
var G__20447 = cljs.core.rest(notes);
var G__20448 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,mecca.xml.parse_note(cljs.core.first(notes),time));
time = G__20446;
notes = G__20447;
result = G__20448;
continue;
}
break;
}
});
mecca.xml.parse_voice = (function mecca$xml$parse_voice(voice){
var time = (1);
var notes = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (time){
return (function (p1__20449_SHARP_){
return mecca.xml.extract_voice(p1__20449_SHARP_,voice);
});})(time))
,mecca.xml.get_measures(mecca.score.zelda_parsed)));
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(notes)){
return result;
} else {
var G__20450 = (time + (mecca.xml.get_duration(cljs.core.first(notes)) / (6)));
var G__20451 = cljs.core.rest(notes);
var G__20452 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,mecca.xml.parse_note(cljs.core.first(notes),time));
time = G__20450;
notes = G__20451;
result = G__20452;
continue;
}
break;
}
});
