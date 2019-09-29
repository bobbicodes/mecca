// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.audio.melody');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('mecca.audio.scale');
mecca.audio.melody.scales = new cljs.core.PersistentArrayMap(null, 6, ["Pentatonic",mecca.audio.scale.pentatonic,"Chromatic",mecca.audio.scale.chromatic,"Major",mecca.audio.scale.major,"Minor",mecca.audio.scale.minor,"Harmonic Minor",mecca.audio.scale.harmonic_minor,"Double Harmonic Minor",mecca.audio.scale.double_harmonic_minor], null);
mecca.audio.melody.scale_degrees = (function mecca$audio$melody$scale_degrees(scale){
return cljs.core.zipmap.call(null,cljs.core.reductions.call(null,cljs.core._PLUS_,(0),cljs.core.take.call(null,(24),cljs.core.get.call(null,mecca.audio.melody.scales,scale))),cljs.core.range.call(null,(24)));
});
mecca.audio.melody.chromatic__GT_diatonic = (function mecca$audio$melody$chromatic__GT_diatonic(interval){
var degrees = mecca.audio.melody.scale_degrees.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null))));
return cljs.core.get.call(null,degrees,interval);
});
/**
 * Returns a function that translates a beat number into seconds.
 *   e.g. ((bpm 90) 5)
 */
mecca.audio.melody.bpm = (function mecca$audio$melody$bpm(beats){
return (function (beat){
return ((beat / beats) * (60));
});
});
/**
 * Zips an arbitrary quality onto a melody.
 *   e.g. (->> (rhythm [1 1/2]) (having :drum [:kick :snare]))
 */
mecca.audio.melody.having = (function mecca$audio$melody$having(k,values,notes){
return cljs.core.map.call(null,(function (p1__17695_SHARP_,p2__17696_SHARP_){
return cljs.core.assoc.call(null,p1__17695_SHARP_,k,p2__17696_SHARP_);
}),notes,values);
});
mecca.audio.melody.utter = (function mecca$audio$melody$utter(object,time,duration,velocity){
if(typeof object === 'number'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pitch","pitch",1495126700),object,new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"duration","duration",1444101068),duration,new cljs.core.Keyword(null,"velocity","velocity",-581524355),velocity], null)], null);
} else {
if(cljs.core.sequential_QMARK_.call(null,object)){
return cljs.core.mapcat.call(null,(function (p1__17697_SHARP_){
return mecca.audio.melody.utter.call(null,p1__17697_SHARP_,time,duration,velocity);
}),object);
} else {
if(cljs.core.map_QMARK_.call(null,object)){
return mecca.audio.melody.utter.call(null,cljs.core.sort.call(null,cljs.core.vals.call(null,object)),time,duration,velocity);
} else {
if((object == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"duration","duration",1444101068),duration], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Translates a sequence of durations and pitches into a melody.
 *   nil pitches signify rests, vectors represent clusters, and maps
 *   represent chords. Vector durations represent repeated notes.
 *   e.g. (phrase [1/2 1/2 3/2 3/2] [0 1 nil 4])
 *   (phrase [1 1 2] [4 3 [0 2]])
 *   (phrase [1 [1 2]] [4 3])
 *   (phrase (repeat 4) (map #(-> triad (root %))) [0 3 4 3])
 */
mecca.audio.melody.phrase = (function mecca$audio$melody$phrase(var_args){
var G__17700 = arguments.length;
switch (G__17700) {
case 3:
return mecca.audio.melody.phrase.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return mecca.audio.melody.phrase.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mecca.audio.melody.phrase.cljs$core$IFn$_invoke$arity$3 = (function (durations,pitches,velocities){
var wrap = (function (x){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
});
var counts = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.count,wrap),durations);
var normalised_pitches = cljs.core.mapcat.call(null,cljs.core.repeat,counts,pitches);
var normalised_durations = cljs.core.mapcat.call(null,wrap,durations);
var times = cljs.core.reductions.call(null,cljs.core._PLUS_,(0),normalised_durations);
return cljs.core.mapcat.call(null,mecca.audio.melody.utter,normalised_pitches,times,normalised_durations,velocities);
});

mecca.audio.melody.phrase.cljs$core$IFn$_invoke$arity$2 = (function (durations,pitches){
return cljs.core.map.call(null,(function (p1__17698_SHARP_){
return cljs.core.dissoc.call(null,p1__17698_SHARP_,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
}),mecca.audio.melody.phrase.call(null,durations,pitches,cljs.core.repeat.call(null,null)));
});

mecca.audio.melody.phrase.cljs$lang$maxFixedArity = 3;

/**
 * Translates a sequence of durations into a rhythm.
 *   e.g. (rhythm [1 1 2])
 */
mecca.audio.melody.rhythm = (function mecca$audio$melody$rhythm(durations){
return mecca.audio.melody.phrase.call(null,durations,cljs.core.repeat.call(null,null));
});
/**
 * Synonym for constantly.
 *   e.g. (->> notes (wherever (comp not :part), :part (is :bass)))
 */
mecca.audio.melody.is = cljs.core.constantly;
mecca.audio.melody.if_applicable = (function mecca$audio$melody$if_applicable(applies_QMARK_,f){
return (function (x){
if(cljs.core.truth_(applies_QMARK_.call(null,x))){
return f.call(null,x);
} else {
return x;
}
});
});
/**
 * Applies f to the k key of each note wherever condition? returns true.
 *   e.g. (->> notes (wherever (comp not :part), :part (is :piano))
 */
mecca.audio.melody.wherever = (function mecca$audio$melody$wherever(applies_QMARK_,k,f,notes){
return cljs.core.map.call(null,mecca.audio.melody.if_applicable.call(null,applies_QMARK_,(function (p1__17702_SHARP_){
return cljs.core.update_in.call(null,p1__17702_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),f);
})),notes);
});
/**
 * Applies f to the k key of each note in notes, ignoring missing keys.
 *   e.g. (->> notes (where :time (bpm 90)))
 */
mecca.audio.melody.where = (function mecca$audio$melody$where(k,f,notes){
return mecca.audio.melody.wherever.call(null,(function (p1__17703_SHARP_){
return cljs.core.contains_QMARK_.call(null,p1__17703_SHARP_,k);
}),k,f,notes);
});
/**
 * Sets a constant value for each note of a melody.
 *   e.g. (->> notes (all :part :drum))
 */
mecca.audio.melody.all = (function mecca$audio$melody$all(k,v,notes){
return mecca.audio.melody.wherever.call(null,mecca.audio.melody.is.call(null,true),k,mecca.audio.melody.is.call(null,v),notes);
});
/**
 * Delay notes by wait.
 *   e.g. (->> melody (after 3))
 */
mecca.audio.melody.after = (function mecca$audio$melody$after(wait,notes){
return mecca.audio.melody.where.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.partial.call(null,cljs.core._PLUS_,wait),notes);
});
mecca.audio.melody.before_QMARK_ = (function mecca$audio$melody$before_QMARK_(a,b){
return (new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(a) <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(b));
});
/**
 * Blends melodies.
 *   e.g. (->> melody (with bass drums))
 */
mecca.audio.melody.with$ = (function mecca$audio$melody$with(var_args){
var G__17708 = arguments.length;
switch (G__17708) {
case 2:
return mecca.audio.melody.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___17718 = arguments.length;
var i__4532__auto___17719 = (0);
while(true){
if((i__4532__auto___17719 < len__4531__auto___17718)){
args_arr__4546__auto__.push((arguments[i__4532__auto___17719]));

var G__17720 = (i__4532__auto___17719 + (1));
i__4532__auto___17719 = G__17720;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((2)),(0),null));
return mecca.audio.melody.with$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4547__auto__);

}
});

mecca.audio.melody.with$.cljs$core$IFn$_invoke$arity$2 = (function (p__17709,p__17710){
var vec__17711 = p__17709;
var seq__17712 = cljs.core.seq.call(null,vec__17711);
var first__17713 = cljs.core.first.call(null,seq__17712);
var seq__17712__$1 = cljs.core.next.call(null,seq__17712);
var a = first__17713;
var other_as = seq__17712__$1;
var as = vec__17711;
var vec__17714 = p__17710;
var seq__17715 = cljs.core.seq.call(null,vec__17714);
var first__17716 = cljs.core.first.call(null,seq__17715);
var seq__17715__$1 = cljs.core.next.call(null,seq__17715);
var b = first__17716;
var other_bs = seq__17715__$1;
var bs = vec__17714;
if(cljs.core.empty_QMARK_.call(null,as)){
return bs;
} else {
if(cljs.core.empty_QMARK_.call(null,bs)){
return as;
} else {
if(cljs.core.truth_(mecca.audio.melody.before_QMARK_.call(null,a,b))){
return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,((function (vec__17711,seq__17712,first__17713,seq__17712__$1,a,other_as,as,vec__17714,seq__17715,first__17716,seq__17715__$1,b,other_bs,bs){
return (function (){
return mecca.audio.melody.with$.call(null,other_as,bs);
});})(vec__17711,seq__17712,first__17713,seq__17712__$1,a,other_as,as,vec__17714,seq__17715,first__17716,seq__17715__$1,b,other_bs,bs))
,null,null)));
} else {
return cljs.core.cons.call(null,b,(new cljs.core.LazySeq(null,((function (vec__17711,seq__17712,first__17713,seq__17712__$1,a,other_as,as,vec__17714,seq__17715,first__17716,seq__17715__$1,b,other_bs,bs){
return (function (){
return mecca.audio.melody.with$.call(null,as,other_bs);
});})(vec__17711,seq__17712,first__17713,seq__17712__$1,a,other_as,as,vec__17714,seq__17715,first__17716,seq__17715__$1,b,other_bs,bs))
,null,null)));

}
}
}
});

mecca.audio.melody.with$.cljs$core$IFn$_invoke$arity$variadic = (function (as,bs,others){
return cljs.core.reduce.call(null,mecca.audio.melody.with$,cljs.core.cons.call(null,as,cljs.core.cons.call(null,bs,others)));
});

/** @this {Function} */
mecca.audio.melody.with$.cljs$lang$applyTo = (function (seq17705){
var G__17706 = cljs.core.first.call(null,seq17705);
var seq17705__$1 = cljs.core.next.call(null,seq17705);
var G__17707 = cljs.core.first.call(null,seq17705__$1);
var seq17705__$2 = cljs.core.next.call(null,seq17705__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17706,G__17707,seq17705__$2);
});

mecca.audio.melody.with$.cljs$lang$maxFixedArity = (2);

/**
 * Replaces part of a melody with another.
 *   e.g. (->> notes (but 2 4 variation))
 */
mecca.audio.melody.but = (function mecca$audio$melody$but(start,end,variation,notes){
var starts_in_QMARK_ = (function (p__17721){
var map__17722 = p__17721;
var map__17722__$1 = ((((!((map__17722 == null)))?(((((map__17722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17722):map__17722);
var time = cljs.core.get.call(null,map__17722__$1,new cljs.core.Keyword(null,"time","time",1385887882));
return (((start <= time)) && ((time < end)));
});
var clip = ((function (starts_in_QMARK_){
return (function (p__17724){
var map__17725 = p__17724;
var map__17725__$1 = ((((!((map__17725 == null)))?(((((map__17725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17725):map__17725);
var note = map__17725__$1;
var time = cljs.core.get.call(null,map__17725__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__17725__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if((((time < start)) && ((start <= (time + duration))))){
return cljs.core.assoc.call(null,note,new cljs.core.Keyword(null,"duration","duration",1444101068),(start - time));
} else {
return note;
}
});})(starts_in_QMARK_))
;
return mecca.audio.melody.with$.call(null,mecca.audio.melody.after.call(null,start,variation),cljs.core.map.call(null,clip,cljs.core.filter.call(null,cljs.core.complement.call(null,starts_in_QMARK_),notes)));
});
/**
 * Returns the total duration of notes.
 *   e.g. (->> melody duration)
 */
mecca.audio.melody.duration = (function mecca$audio$melody$duration(notes){
var length = (function (p__17727){
var map__17728 = p__17727;
var map__17728__$1 = ((((!((map__17728 == null)))?(((((map__17728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17728):map__17728);
var time = cljs.core.get.call(null,map__17728__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__17728__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return (time + duration);
});
return cljs.core.reduce.call(null,cljs.core.max,(0),cljs.core.map.call(null,length,notes));
});
/**
 * Sequences later after earlier.
 *   e.g. (->> call (then response))
 */
mecca.audio.melody.then = (function mecca$audio$melody$then(later,earlier){
return mecca.audio.melody.with$.call(null,earlier,mecca.audio.melody.after.call(null,mecca.audio.melody.duration.call(null,earlier),later));
});
mecca.audio.melody.mapthen = (function mecca$audio$melody$mapthen(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17734 = arguments.length;
var i__4532__auto___17735 = (0);
while(true){
if((i__4532__auto___17735 < len__4531__auto___17734)){
args__4534__auto__.push((arguments[i__4532__auto___17735]));

var G__17736 = (i__4532__auto___17735 + (1));
i__4532__auto___17735 = G__17736;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return mecca.audio.melody.mapthen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

mecca.audio.melody.mapthen.cljs$core$IFn$_invoke$arity$variadic = (function (f,melodies){

return cljs.core.reduce.call(null,(function (p1__17731_SHARP_,p2__17730_SHARP_){
return mecca.audio.melody.then.call(null,p2__17730_SHARP_,p1__17731_SHARP_);
}),cljs.core.apply.call(null,cljs.core.map,f,melodies));
});

mecca.audio.melody.mapthen.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mecca.audio.melody.mapthen.cljs$lang$applyTo = (function (seq17732){
var G__17733 = cljs.core.first.call(null,seq17732);
var seq17732__$1 = cljs.core.next.call(null,seq17732);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17733,seq17732__$1);
});

/**
 * Repeats notes n times.
 *   e.g. (->> bassline (times 4))
 */
mecca.audio.melody.times = (function mecca$audio$melody$times(n,notes){
return mecca.audio.melody.mapthen.call(null,cljs.core.identity,cljs.core.repeat.call(null,n,notes));
});
/**
 * Transform both :time and :duration according to timing.
 *   e.g. (->> notes (tempo (bpm 120)))
 */
mecca.audio.melody.tempo = (function mecca$audio$melody$tempo(timing,notes){
return mecca.audio.melody.where.call(null,new cljs.core.Keyword(null,"time","time",1385887882),timing,cljs.core.map.call(null,(function (p__17737){
var map__17738 = p__17737;
var map__17738__$1 = ((((!((map__17738 == null)))?(((((map__17738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17738):map__17738);
var note = map__17738__$1;
var start = cljs.core.get.call(null,map__17738__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__17738__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return cljs.core.assoc.call(null,note,new cljs.core.Keyword(null,"duration","duration",1444101068),(timing.call(null,(start + duration)) - timing.call(null,start)));
}),notes));
});
/**
 * Linearly interpolated change between from and to.
 *   e.g. (->> notes (tempo (accelerando 0 4 3/2))))
 */
mecca.audio.melody.accelerando = (function mecca$audio$melody$accelerando(from,to,by){
return (function mecca$audio$melody$accelerando_$_rate(t){
if((from >= t)){
return t;
} else {
if((to >= t)){
var duration = (to - from);
var position = (t - from);
var completion = (position / duration);
var extent = (by - (1));
var base = t;
var extra = (((position * 0.5) * completion) * extent);
return (base + extra);
} else {
return (mecca$audio$melody$accelerando_$_rate.call(null,to) + (by * (t - to)));

}
}
});
});

//# sourceMappingURL=melody.js.map
