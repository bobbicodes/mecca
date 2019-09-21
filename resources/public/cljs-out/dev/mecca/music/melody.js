// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.music.melody');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('mecca.audio.scale');
mecca.music.melody.scales = new cljs.core.PersistentArrayMap(null, 6, ["Pentatonic",mecca.audio.scale.pentatonic,"Chromatic",mecca.audio.scale.chromatic,"Major",mecca.audio.scale.major,"Minor",mecca.audio.scale.minor,"Harmonic Minor",mecca.audio.scale.harmonic_minor,"Double Harmonic Minor",mecca.audio.scale.double_harmonic_minor], null);
mecca.music.melody.scale_degrees = (function mecca$music$melody$scale_degrees(scale){
return cljs.core.zipmap.call(null,cljs.core.reductions.call(null,cljs.core._PLUS_,(0),cljs.core.take.call(null,(24),cljs.core.get.call(null,mecca.music.melody.scales,scale))),cljs.core.range.call(null,(24)));
});
mecca.music.melody.chromatic__GT_diatonic = (function mecca$music$melody$chromatic__GT_diatonic(interval){
var degrees = mecca.music.melody.scale_degrees.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null))));
return cljs.core.get.call(null,degrees,interval);
});
/**
 * Returns a function that translates a beat number into seconds.
 *   e.g. ((bpm 90) 5)
 */
mecca.music.melody.bpm = (function mecca$music$melody$bpm(beats){
return (function (beat){
return ((beat / beats) * (60));
});
});
/**
 * Zips an arbitrary quality onto a melody.
 *   e.g. (->> (rhythm [1 1/2]) (having :drum [:kick :snare]))
 */
mecca.music.melody.having = (function mecca$music$melody$having(k,values,notes){
return cljs.core.map.call(null,(function (p1__18874_SHARP_,p2__18875_SHARP_){
return cljs.core.assoc.call(null,p1__18874_SHARP_,k,p2__18875_SHARP_);
}),notes,values);
});
mecca.music.melody.utter = (function mecca$music$melody$utter(object,time,duration,velocity){
if(typeof object === 'number'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pitch","pitch",1495126700),object,new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"duration","duration",1444101068),duration,new cljs.core.Keyword(null,"velocity","velocity",-581524355),velocity], null)], null);
} else {
if(cljs.core.sequential_QMARK_.call(null,object)){
return cljs.core.mapcat.call(null,(function (p1__18876_SHARP_){
return mecca.music.melody.utter.call(null,p1__18876_SHARP_,time,duration,velocity);
}),object);
} else {
if(cljs.core.map_QMARK_.call(null,object)){
return mecca.music.melody.utter.call(null,cljs.core.sort.call(null,cljs.core.vals.call(null,object)),time,duration,velocity);
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
mecca.music.melody.phrase = (function mecca$music$melody$phrase(var_args){
var G__18879 = arguments.length;
switch (G__18879) {
case 3:
return mecca.music.melody.phrase.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return mecca.music.melody.phrase.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mecca.music.melody.phrase.cljs$core$IFn$_invoke$arity$3 = (function (durations,pitches,velocities){
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
return cljs.core.mapcat.call(null,mecca.music.melody.utter,normalised_pitches,times,normalised_durations,velocities);
});

mecca.music.melody.phrase.cljs$core$IFn$_invoke$arity$2 = (function (durations,pitches){
return cljs.core.map.call(null,(function (p1__18877_SHARP_){
return cljs.core.dissoc.call(null,p1__18877_SHARP_,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
}),mecca.music.melody.phrase.call(null,durations,pitches,cljs.core.repeat.call(null,null)));
});

mecca.music.melody.phrase.cljs$lang$maxFixedArity = 3;

/**
 * Translates a sequence of durations into a rhythm.
 *   e.g. (rhythm [1 1 2])
 */
mecca.music.melody.rhythm = (function mecca$music$melody$rhythm(durations){
return mecca.music.melody.phrase.call(null,durations,cljs.core.repeat.call(null,null));
});
/**
 * Synonym for constantly.
 *   e.g. (->> notes (wherever (comp not :part), :part (is :bass)))
 */
mecca.music.melody.is = cljs.core.constantly;
mecca.music.melody.if_applicable = (function mecca$music$melody$if_applicable(applies_QMARK_,f){
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
mecca.music.melody.wherever = (function mecca$music$melody$wherever(applies_QMARK_,k,f,notes){
return cljs.core.map.call(null,mecca.music.melody.if_applicable.call(null,applies_QMARK_,(function (p1__18881_SHARP_){
return cljs.core.update_in.call(null,p1__18881_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),f);
})),notes);
});
/**
 * Applies f to the k key of each note in notes, ignoring missing keys.
 *   e.g. (->> notes (where :time (bpm 90)))
 */
mecca.music.melody.where = (function mecca$music$melody$where(k,f,notes){
return mecca.music.melody.wherever.call(null,(function (p1__18882_SHARP_){
return cljs.core.contains_QMARK_.call(null,p1__18882_SHARP_,k);
}),k,f,notes);
});
/**
 * Sets a constant value for each note of a melody.
 *   e.g. (->> notes (all :part :drum))
 */
mecca.music.melody.all = (function mecca$music$melody$all(k,v,notes){
return mecca.music.melody.wherever.call(null,mecca.music.melody.is.call(null,true),k,mecca.music.melody.is.call(null,v),notes);
});
/**
 * Delay notes by wait.
 *   e.g. (->> melody (after 3))
 */
mecca.music.melody.after = (function mecca$music$melody$after(wait,notes){
return mecca.music.melody.where.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.partial.call(null,cljs.core._PLUS_,wait),notes);
});
mecca.music.melody.before_QMARK_ = (function mecca$music$melody$before_QMARK_(a,b){
return (new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(a) <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(b));
});
/**
 * Blends melodies.
 *   e.g. (->> melody (with bass drums))
 */
mecca.music.melody.with$ = (function mecca$music$melody$with(var_args){
var G__18887 = arguments.length;
switch (G__18887) {
case 2:
return mecca.music.melody.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___18897 = arguments.length;
var i__4532__auto___18898 = (0);
while(true){
if((i__4532__auto___18898 < len__4531__auto___18897)){
args_arr__4546__auto__.push((arguments[i__4532__auto___18898]));

var G__18899 = (i__4532__auto___18898 + (1));
i__4532__auto___18898 = G__18899;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((2)),(0),null));
return mecca.music.melody.with$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4547__auto__);

}
});

mecca.music.melody.with$.cljs$core$IFn$_invoke$arity$2 = (function (p__18888,p__18889){
var vec__18890 = p__18888;
var seq__18891 = cljs.core.seq.call(null,vec__18890);
var first__18892 = cljs.core.first.call(null,seq__18891);
var seq__18891__$1 = cljs.core.next.call(null,seq__18891);
var a = first__18892;
var other_as = seq__18891__$1;
var as = vec__18890;
var vec__18893 = p__18889;
var seq__18894 = cljs.core.seq.call(null,vec__18893);
var first__18895 = cljs.core.first.call(null,seq__18894);
var seq__18894__$1 = cljs.core.next.call(null,seq__18894);
var b = first__18895;
var other_bs = seq__18894__$1;
var bs = vec__18893;
if(cljs.core.empty_QMARK_.call(null,as)){
return bs;
} else {
if(cljs.core.empty_QMARK_.call(null,bs)){
return as;
} else {
if(cljs.core.truth_(mecca.music.melody.before_QMARK_.call(null,a,b))){
return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,((function (vec__18890,seq__18891,first__18892,seq__18891__$1,a,other_as,as,vec__18893,seq__18894,first__18895,seq__18894__$1,b,other_bs,bs){
return (function (){
return mecca.music.melody.with$.call(null,other_as,bs);
});})(vec__18890,seq__18891,first__18892,seq__18891__$1,a,other_as,as,vec__18893,seq__18894,first__18895,seq__18894__$1,b,other_bs,bs))
,null,null)));
} else {
return cljs.core.cons.call(null,b,(new cljs.core.LazySeq(null,((function (vec__18890,seq__18891,first__18892,seq__18891__$1,a,other_as,as,vec__18893,seq__18894,first__18895,seq__18894__$1,b,other_bs,bs){
return (function (){
return mecca.music.melody.with$.call(null,as,other_bs);
});})(vec__18890,seq__18891,first__18892,seq__18891__$1,a,other_as,as,vec__18893,seq__18894,first__18895,seq__18894__$1,b,other_bs,bs))
,null,null)));

}
}
}
});

mecca.music.melody.with$.cljs$core$IFn$_invoke$arity$variadic = (function (as,bs,others){
return cljs.core.reduce.call(null,mecca.music.melody.with$,cljs.core.cons.call(null,as,cljs.core.cons.call(null,bs,others)));
});

/** @this {Function} */
mecca.music.melody.with$.cljs$lang$applyTo = (function (seq18884){
var G__18885 = cljs.core.first.call(null,seq18884);
var seq18884__$1 = cljs.core.next.call(null,seq18884);
var G__18886 = cljs.core.first.call(null,seq18884__$1);
var seq18884__$2 = cljs.core.next.call(null,seq18884__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18885,G__18886,seq18884__$2);
});

mecca.music.melody.with$.cljs$lang$maxFixedArity = (2);

/**
 * Replaces part of a melody with another.
 *   e.g. (->> notes (but 2 4 variation))
 */
mecca.music.melody.but = (function mecca$music$melody$but(start,end,variation,notes){
var starts_in_QMARK_ = (function (p__18900){
var map__18901 = p__18900;
var map__18901__$1 = ((((!((map__18901 == null)))?(((((map__18901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18901):map__18901);
var time = cljs.core.get.call(null,map__18901__$1,new cljs.core.Keyword(null,"time","time",1385887882));
return (((start <= time)) && ((time < end)));
});
var clip = ((function (starts_in_QMARK_){
return (function (p__18903){
var map__18904 = p__18903;
var map__18904__$1 = ((((!((map__18904 == null)))?(((((map__18904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18904):map__18904);
var note = map__18904__$1;
var time = cljs.core.get.call(null,map__18904__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__18904__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if((((time < start)) && ((start <= (time + duration))))){
return cljs.core.assoc.call(null,note,new cljs.core.Keyword(null,"duration","duration",1444101068),(start - time));
} else {
return note;
}
});})(starts_in_QMARK_))
;
return mecca.music.melody.with$.call(null,mecca.music.melody.after.call(null,start,variation),cljs.core.map.call(null,clip,cljs.core.filter.call(null,cljs.core.complement.call(null,starts_in_QMARK_),notes)));
});
/**
 * Returns the total duration of notes.
 *   e.g. (->> melody duration)
 */
mecca.music.melody.duration = (function mecca$music$melody$duration(notes){
var length = (function (p__18906){
var map__18907 = p__18906;
var map__18907__$1 = ((((!((map__18907 == null)))?(((((map__18907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18907):map__18907);
var time = cljs.core.get.call(null,map__18907__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__18907__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return (time + duration);
});
return cljs.core.reduce.call(null,cljs.core.max,(0),cljs.core.map.call(null,length,notes));
});
/**
 * Sequences later after earlier.
 *   e.g. (->> call (then response))
 */
mecca.music.melody.then = (function mecca$music$melody$then(later,earlier){
return mecca.music.melody.with$.call(null,earlier,mecca.music.melody.after.call(null,mecca.music.melody.duration.call(null,earlier),later));
});
mecca.music.melody.mapthen = (function mecca$music$melody$mapthen(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18913 = arguments.length;
var i__4532__auto___18914 = (0);
while(true){
if((i__4532__auto___18914 < len__4531__auto___18913)){
args__4534__auto__.push((arguments[i__4532__auto___18914]));

var G__18915 = (i__4532__auto___18914 + (1));
i__4532__auto___18914 = G__18915;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return mecca.music.melody.mapthen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

mecca.music.melody.mapthen.cljs$core$IFn$_invoke$arity$variadic = (function (f,melodies){

return cljs.core.reduce.call(null,(function (p1__18910_SHARP_,p2__18909_SHARP_){
return mecca.music.melody.then.call(null,p2__18909_SHARP_,p1__18910_SHARP_);
}),cljs.core.apply.call(null,cljs.core.map,f,melodies));
});

mecca.music.melody.mapthen.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mecca.music.melody.mapthen.cljs$lang$applyTo = (function (seq18911){
var G__18912 = cljs.core.first.call(null,seq18911);
var seq18911__$1 = cljs.core.next.call(null,seq18911);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18912,seq18911__$1);
});

/**
 * Repeats notes n times.
 *   e.g. (->> bassline (times 4))
 */
mecca.music.melody.times = (function mecca$music$melody$times(n,notes){
return mecca.music.melody.mapthen.call(null,cljs.core.identity,cljs.core.repeat.call(null,n,notes));
});
/**
 * Transform both :time and :duration according to timing.
 *   e.g. (->> notes (tempo (bpm 120)))
 */
mecca.music.melody.tempo = (function mecca$music$melody$tempo(timing,notes){
return mecca.music.melody.where.call(null,new cljs.core.Keyword(null,"time","time",1385887882),timing,cljs.core.map.call(null,(function (p__18916){
var map__18917 = p__18916;
var map__18917__$1 = ((((!((map__18917 == null)))?(((((map__18917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18917):map__18917);
var note = map__18917__$1;
var start = cljs.core.get.call(null,map__18917__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__18917__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return cljs.core.assoc.call(null,note,new cljs.core.Keyword(null,"duration","duration",1444101068),(timing.call(null,(start + duration)) - timing.call(null,start)));
}),notes));
});
/**
 * Linearly interpolated change between from and to.
 *   e.g. (->> notes (tempo (accelerando 0 4 3/2))))
 */
mecca.music.melody.accelerando = (function mecca$music$melody$accelerando(from,to,by){
return (function mecca$music$melody$accelerando_$_rate(t){
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
return (mecca$music$melody$accelerando_$_rate.call(null,to) + (by * (t - to)));

}
}
});
});

//# sourceMappingURL=melody.js.map
