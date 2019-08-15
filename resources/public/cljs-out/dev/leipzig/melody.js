// Compiled by ClojureScript 1.10.339 {}
goog.provide('leipzig.melody');
goog.require('cljs.core');
goog.require('leipzig.scale');
/**
 * Returns a function that translates a beat number into seconds.
 *   e.g. ((bpm 90) 5)
 */
leipzig.melody.bpm = (function leipzig$melody$bpm(beats){
return (function (beat){
return ((beat / beats) * (60));
});
});
/**
 * Zips an arbitrary quality onto a melody.
 *   e.g. (->> (rhythm [1 1/2]) (having :drum [:kick :snare]))
 */
leipzig.melody.having = (function leipzig$melody$having(k,values,notes){
return cljs.core.map.call(null,(function (p1__10346_SHARP_,p2__10347_SHARP_){
return cljs.core.assoc.call(null,p1__10346_SHARP_,k,p2__10347_SHARP_);
}),notes,values);
});
leipzig.melody.utter = (function leipzig$melody$utter(object,time,duration,velocity){
if(typeof object === 'number'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pitch","pitch",1495126700),object,new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"duration","duration",1444101068),duration,new cljs.core.Keyword(null,"velocity","velocity",-581524355),velocity], null)], null);
} else {
if(cljs.core.sequential_QMARK_.call(null,object)){
return cljs.core.mapcat.call(null,(function (p1__10348_SHARP_){
return leipzig.melody.utter.call(null,p1__10348_SHARP_,time,duration,velocity);
}),object);
} else {
if(cljs.core.map_QMARK_.call(null,object)){
return leipzig.melody.utter.call(null,cljs.core.sort.call(null,cljs.core.vals.call(null,object)),time,duration,velocity);
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
leipzig.melody.phrase = (function leipzig$melody$phrase(var_args){
var G__10351 = arguments.length;
switch (G__10351) {
case 3:
return leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$3 = (function (durations,pitches,velocities){
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
return cljs.core.mapcat.call(null,leipzig.melody.utter,normalised_pitches,times,normalised_durations,velocities);
});

leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$2 = (function (durations,pitches){
return cljs.core.map.call(null,(function (p1__10349_SHARP_){
return cljs.core.dissoc.call(null,p1__10349_SHARP_,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
}),leipzig.melody.phrase.call(null,durations,pitches,cljs.core.repeat.call(null,null)));
});

leipzig.melody.phrase.cljs$lang$maxFixedArity = 3;

/**
 * Translates a sequence of durations into a rhythm.
 *   e.g. (rhythm [1 1 2])
 */
leipzig.melody.rhythm = (function leipzig$melody$rhythm(durations){
return leipzig.melody.phrase.call(null,durations,cljs.core.repeat.call(null,null));
});
/**
 * Synonym for constantly.
 *   e.g. (->> notes (wherever (comp not :part), :part (is :bass)))
 */
leipzig.melody.is = cljs.core.constantly;
leipzig.melody.if_applicable = (function leipzig$melody$if_applicable(applies_QMARK_,f){
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
leipzig.melody.wherever = (function leipzig$melody$wherever(applies_QMARK_,k,f,notes){
return cljs.core.map.call(null,leipzig.melody.if_applicable.call(null,applies_QMARK_,(function (p1__10353_SHARP_){
return cljs.core.update_in.call(null,p1__10353_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),f);
})),notes);
});
/**
 * Applies f to the k key of each note in notes, ignoring missing keys.
 *   e.g. (->> notes (where :time (bpm 90)))
 */
leipzig.melody.where = (function leipzig$melody$where(k,f,notes){
return leipzig.melody.wherever.call(null,(function (p1__10354_SHARP_){
return cljs.core.contains_QMARK_.call(null,p1__10354_SHARP_,k);
}),k,f,notes);
});
/**
 * Sets a constant value for each note of a melody.
 *   e.g. (->> notes (all :part :drum))
 */
leipzig.melody.all = (function leipzig$melody$all(k,v,notes){
return leipzig.melody.wherever.call(null,leipzig.melody.is.call(null,true),k,leipzig.melody.is.call(null,v),notes);
});
/**
 * Delay notes by wait.
 *   e.g. (->> melody (after 3))
 */
leipzig.melody.after = (function leipzig$melody$after(wait,notes){
return leipzig.melody.where.call(null,new cljs.core.Keyword(null,"time","time",1385887882),leipzig.scale.from.call(null,wait),notes);
});
leipzig.melody.before_QMARK_ = (function leipzig$melody$before_QMARK_(a,b){
return (new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(a) <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(b));
});
/**
 * Blends melodies.
 *   e.g. (->> melody (with bass drums))
 */
leipzig.melody.with$ = (function leipzig$melody$with(var_args){
var G__10359 = arguments.length;
switch (G__10359) {
case 2:
return leipzig.melody.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___10369 = arguments.length;
var i__4532__auto___10370 = (0);
while(true){
if((i__4532__auto___10370 < len__4531__auto___10369)){
args_arr__4546__auto__.push((arguments[i__4532__auto___10370]));

var G__10371 = (i__4532__auto___10370 + (1));
i__4532__auto___10370 = G__10371;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((2)),(0),null));
return leipzig.melody.with$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4547__auto__);

}
});

leipzig.melody.with$.cljs$core$IFn$_invoke$arity$2 = (function (p__10360,p__10361){
var vec__10362 = p__10360;
var seq__10363 = cljs.core.seq.call(null,vec__10362);
var first__10364 = cljs.core.first.call(null,seq__10363);
var seq__10363__$1 = cljs.core.next.call(null,seq__10363);
var a = first__10364;
var other_as = seq__10363__$1;
var as = vec__10362;
var vec__10365 = p__10361;
var seq__10366 = cljs.core.seq.call(null,vec__10365);
var first__10367 = cljs.core.first.call(null,seq__10366);
var seq__10366__$1 = cljs.core.next.call(null,seq__10366);
var b = first__10367;
var other_bs = seq__10366__$1;
var bs = vec__10365;
if(cljs.core.empty_QMARK_.call(null,as)){
return bs;
} else {
if(cljs.core.empty_QMARK_.call(null,bs)){
return as;
} else {
if(cljs.core.truth_(leipzig.melody.before_QMARK_.call(null,a,b))){
return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,((function (vec__10362,seq__10363,first__10364,seq__10363__$1,a,other_as,as,vec__10365,seq__10366,first__10367,seq__10366__$1,b,other_bs,bs){
return (function (){
return leipzig.melody.with$.call(null,other_as,bs);
});})(vec__10362,seq__10363,first__10364,seq__10363__$1,a,other_as,as,vec__10365,seq__10366,first__10367,seq__10366__$1,b,other_bs,bs))
,null,null)));
} else {
return cljs.core.cons.call(null,b,(new cljs.core.LazySeq(null,((function (vec__10362,seq__10363,first__10364,seq__10363__$1,a,other_as,as,vec__10365,seq__10366,first__10367,seq__10366__$1,b,other_bs,bs){
return (function (){
return leipzig.melody.with$.call(null,as,other_bs);
});})(vec__10362,seq__10363,first__10364,seq__10363__$1,a,other_as,as,vec__10365,seq__10366,first__10367,seq__10366__$1,b,other_bs,bs))
,null,null)));

}
}
}
});

leipzig.melody.with$.cljs$core$IFn$_invoke$arity$variadic = (function (as,bs,others){
return cljs.core.reduce.call(null,leipzig.melody.with$,cljs.core.cons.call(null,as,cljs.core.cons.call(null,bs,others)));
});

/** @this {Function} */
leipzig.melody.with$.cljs$lang$applyTo = (function (seq10356){
var G__10357 = cljs.core.first.call(null,seq10356);
var seq10356__$1 = cljs.core.next.call(null,seq10356);
var G__10358 = cljs.core.first.call(null,seq10356__$1);
var seq10356__$2 = cljs.core.next.call(null,seq10356__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10357,G__10358,seq10356__$2);
});

leipzig.melody.with$.cljs$lang$maxFixedArity = (2);

/**
 * Replaces part of a melody with another.
 *   e.g. (->> notes (but 2 4 variation))
 */
leipzig.melody.but = (function leipzig$melody$but(start,end,variation,notes){
var starts_in_QMARK_ = (function (p__10372){
var map__10373 = p__10372;
var map__10373__$1 = ((((!((map__10373 == null)))?(((((map__10373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10373):map__10373);
var time = cljs.core.get.call(null,map__10373__$1,new cljs.core.Keyword(null,"time","time",1385887882));
return (((start <= time)) && ((time < end)));
});
var clip = ((function (starts_in_QMARK_){
return (function (p__10375){
var map__10376 = p__10375;
var map__10376__$1 = ((((!((map__10376 == null)))?(((((map__10376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10376):map__10376);
var note = map__10376__$1;
var time = cljs.core.get.call(null,map__10376__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__10376__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if((((time < start)) && ((start <= (time + duration))))){
return cljs.core.assoc.call(null,note,new cljs.core.Keyword(null,"duration","duration",1444101068),(start - time));
} else {
return note;
}
});})(starts_in_QMARK_))
;
return leipzig.melody.with$.call(null,leipzig.melody.after.call(null,start,variation),cljs.core.map.call(null,clip,cljs.core.filter.call(null,cljs.core.complement.call(null,starts_in_QMARK_),notes)));
});
/**
 * Returns the total duration of notes.
 *   e.g. (->> melody duration)
 */
leipzig.melody.duration = (function leipzig$melody$duration(notes){
var length = (function (p__10378){
var map__10379 = p__10378;
var map__10379__$1 = ((((!((map__10379 == null)))?(((((map__10379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10379):map__10379);
var time = cljs.core.get.call(null,map__10379__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__10379__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return (time + duration);
});
return cljs.core.reduce.call(null,cljs.core.max,(0),cljs.core.map.call(null,length,notes));
});
/**
 * Sequences later after earlier.
 *   e.g. (->> call (then response))
 */
leipzig.melody.then = (function leipzig$melody$then(later,earlier){
return leipzig.melody.with$.call(null,earlier,leipzig.melody.after.call(null,leipzig.melody.duration.call(null,earlier),later));
});
leipzig.melody.mapthen = (function leipzig$melody$mapthen(var_args){
var args__4534__auto__ = [];
var len__4531__auto___10385 = arguments.length;
var i__4532__auto___10386 = (0);
while(true){
if((i__4532__auto___10386 < len__4531__auto___10385)){
args__4534__auto__.push((arguments[i__4532__auto___10386]));

var G__10387 = (i__4532__auto___10386 + (1));
i__4532__auto___10386 = G__10387;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return leipzig.melody.mapthen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

leipzig.melody.mapthen.cljs$core$IFn$_invoke$arity$variadic = (function (f,melodies){

return cljs.core.reduce.call(null,(function (p1__10382_SHARP_,p2__10381_SHARP_){
return leipzig.melody.then.call(null,p2__10381_SHARP_,p1__10382_SHARP_);
}),cljs.core.apply.call(null,cljs.core.map,f,melodies));
});

leipzig.melody.mapthen.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
leipzig.melody.mapthen.cljs$lang$applyTo = (function (seq10383){
var G__10384 = cljs.core.first.call(null,seq10383);
var seq10383__$1 = cljs.core.next.call(null,seq10383);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10384,seq10383__$1);
});

/**
 * Repeats notes n times.
 *   e.g. (->> bassline (times 4))
 */
leipzig.melody.times = (function leipzig$melody$times(n,notes){
return leipzig.melody.mapthen.call(null,cljs.core.identity,cljs.core.repeat.call(null,n,notes));
});
/**
 * Transform both :time and :duration according to timing.
 *   e.g. (->> notes (tempo (bpm 120)))
 */
leipzig.melody.tempo = (function leipzig$melody$tempo(timing,notes){
return leipzig.melody.where.call(null,new cljs.core.Keyword(null,"time","time",1385887882),timing,cljs.core.map.call(null,(function (p__10388){
var map__10389 = p__10388;
var map__10389__$1 = ((((!((map__10389 == null)))?(((((map__10389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10389):map__10389);
var note = map__10389__$1;
var start = cljs.core.get.call(null,map__10389__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__10389__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return cljs.core.assoc.call(null,note,new cljs.core.Keyword(null,"duration","duration",1444101068),(timing.call(null,(start + duration)) - timing.call(null,start)));
}),notes));
});
/**
 * Linearly interpolated change between from and to.
 *   e.g. (->> notes (tempo (accelerando 0 4 3/2))))
 */
leipzig.melody.accelerando = (function leipzig$melody$accelerando(from,to,by){
return (function leipzig$melody$accelerando_$_rate(t){
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
return (leipzig$melody$accelerando_$_rate.call(null,to) + (by * (t - to)));

}
}
});
});

//# sourceMappingURL=melody.js.map
