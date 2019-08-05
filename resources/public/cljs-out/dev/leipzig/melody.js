// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('leipzig.melody');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__9897_SHARP_,p2__9898_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9897_SHARP_,k,p2__9898_SHARP_);
}),notes,values);
});
leipzig.melody.utter = (function leipzig$melody$utter(object,time,duration,velocity){
if(typeof object === 'number'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pitch,object,cljs.core.cst$kw$time,time,cljs.core.cst$kw$duration,duration,cljs.core.cst$kw$velocity,velocity], null)], null);
} else {
if(cljs.core.sequential_QMARK_(object)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__9899_SHARP_){
return (leipzig.melody.utter.cljs$core$IFn$_invoke$arity$4 ? leipzig.melody.utter.cljs$core$IFn$_invoke$arity$4(p1__9899_SHARP_,time,duration,velocity) : leipzig.melody.utter.call(null,p1__9899_SHARP_,time,duration,velocity));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object], 0));
} else {
if(cljs.core.map_QMARK_(object)){
var G__9900 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(object));
var G__9901 = time;
var G__9902 = duration;
var G__9903 = velocity;
return (leipzig.melody.utter.cljs$core$IFn$_invoke$arity$4 ? leipzig.melody.utter.cljs$core$IFn$_invoke$arity$4(G__9900,G__9901,G__9902,G__9903) : leipzig.melody.utter.call(null,G__9900,G__9901,G__9902,G__9903));
} else {
if((object == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$duration,duration], null)], null);
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
var G__9906 = arguments.length;
switch (G__9906) {
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
if(cljs.core.sequential_QMARK_(x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
});
var counts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,wrap),durations);
var normalised_pitches = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.repeat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([counts,pitches], 0));
var normalised_durations = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(wrap,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([durations], 0));
var times = cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),normalised_durations);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(leipzig.melody.utter,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([normalised_pitches,times,normalised_durations,velocities], 0));
});

leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$2 = (function (durations,pitches){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__9904_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__9904_SHARP_,cljs.core.cst$kw$velocity);
}),leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$3(durations,pitches,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});

leipzig.melody.phrase.cljs$lang$maxFixedArity = 3;

/**
 * Translates a sequence of durations into a rhythm.
 *   e.g. (rhythm [1 1 2])
 */
leipzig.melody.rhythm = (function leipzig$melody$rhythm(durations){
return leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$2(durations,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));
});
/**
 * Synonym for constantly.
 *   e.g. (->> notes (wherever (comp not :part), :part (is :bass)))
 */
leipzig.melody.is = cljs.core.constantly;
leipzig.melody.if_applicable = (function leipzig$melody$if_applicable(applies_QMARK_,f){
return (function (x){
if(cljs.core.truth_((applies_QMARK_.cljs$core$IFn$_invoke$arity$1 ? applies_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : applies_QMARK_.call(null,x)))){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(leipzig.melody.if_applicable(applies_QMARK_,(function (p1__9908_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__9908_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),f);
})),notes);
});
/**
 * Applies f to the k key of each note in notes, ignoring missing keys.
 *   e.g. (->> notes (where :time (bpm 90)))
 */
leipzig.melody.where = (function leipzig$melody$where(k,f,notes){
return leipzig.melody.wherever((function (p1__9909_SHARP_){
return cljs.core.contains_QMARK_(p1__9909_SHARP_,k);
}),k,f,notes);
});
/**
 * Sets a constant value for each note of a melody.
 *   e.g. (->> notes (all :part :drum))
 */
leipzig.melody.all = (function leipzig$melody$all(k,v,notes){
return leipzig.melody.wherever((leipzig.melody.is.cljs$core$IFn$_invoke$arity$1 ? leipzig.melody.is.cljs$core$IFn$_invoke$arity$1(true) : leipzig.melody.is.call(null,true)),k,(leipzig.melody.is.cljs$core$IFn$_invoke$arity$1 ? leipzig.melody.is.cljs$core$IFn$_invoke$arity$1(v) : leipzig.melody.is.call(null,v)),notes);
});
/**
 * Delay notes by wait.
 *   e.g. (->> melody (after 3))
 */
leipzig.melody.after = (function leipzig$melody$after(wait,notes){
return leipzig.melody.where(cljs.core.cst$kw$time,leipzig.scale.from(wait),notes);
});
leipzig.melody.before_QMARK_ = (function leipzig$melody$before_QMARK_(a,b){
return (cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(a) <= cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(b));
});
/**
 * Blends melodies.
 *   e.g. (->> melody (with bass drums))
 */
leipzig.melody.with$ = (function leipzig$melody$with(var_args){
var G__9914 = arguments.length;
switch (G__9914) {
case 2:
return leipzig.melody.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___9924 = arguments.length;
var i__4532__auto___9925 = (0);
while(true){
if((i__4532__auto___9925 < len__4531__auto___9924)){
args_arr__4546__auto__.push((arguments[i__4532__auto___9925]));

var G__9926 = (i__4532__auto___9925 + (1));
i__4532__auto___9925 = G__9926;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((2)),(0),null));
return leipzig.melody.with$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4547__auto__);

}
});

leipzig.melody.with$.cljs$core$IFn$_invoke$arity$2 = (function (p__9915,p__9916){
var vec__9917 = p__9915;
var seq__9918 = cljs.core.seq(vec__9917);
var first__9919 = cljs.core.first(seq__9918);
var seq__9918__$1 = cljs.core.next(seq__9918);
var a = first__9919;
var other_as = seq__9918__$1;
var as = vec__9917;
var vec__9920 = p__9916;
var seq__9921 = cljs.core.seq(vec__9920);
var first__9922 = cljs.core.first(seq__9921);
var seq__9921__$1 = cljs.core.next(seq__9921);
var b = first__9922;
var other_bs = seq__9921__$1;
var bs = vec__9920;
if(cljs.core.empty_QMARK_(as)){
return bs;
} else {
if(cljs.core.empty_QMARK_(bs)){
return as;
} else {
if(cljs.core.truth_(leipzig.melody.before_QMARK_(a,b))){
return cljs.core.cons(a,(new cljs.core.LazySeq(null,((function (vec__9917,seq__9918,first__9919,seq__9918__$1,a,other_as,as,vec__9920,seq__9921,first__9922,seq__9921__$1,b,other_bs,bs){
return (function (){
return leipzig.melody.with$.cljs$core$IFn$_invoke$arity$2(other_as,bs);
});})(vec__9917,seq__9918,first__9919,seq__9918__$1,a,other_as,as,vec__9920,seq__9921,first__9922,seq__9921__$1,b,other_bs,bs))
,null,null)));
} else {
return cljs.core.cons(b,(new cljs.core.LazySeq(null,((function (vec__9917,seq__9918,first__9919,seq__9918__$1,a,other_as,as,vec__9920,seq__9921,first__9922,seq__9921__$1,b,other_bs,bs){
return (function (){
return leipzig.melody.with$.cljs$core$IFn$_invoke$arity$2(as,other_bs);
});})(vec__9917,seq__9918,first__9919,seq__9918__$1,a,other_as,as,vec__9920,seq__9921,first__9922,seq__9921__$1,b,other_bs,bs))
,null,null)));

}
}
}
});

leipzig.melody.with$.cljs$core$IFn$_invoke$arity$variadic = (function (as,bs,others){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(leipzig.melody.with$,cljs.core.cons(as,cljs.core.cons(bs,others)));
});

/** @this {Function} */
leipzig.melody.with$.cljs$lang$applyTo = (function (seq9911){
var G__9912 = cljs.core.first(seq9911);
var seq9911__$1 = cljs.core.next(seq9911);
var G__9913 = cljs.core.first(seq9911__$1);
var seq9911__$2 = cljs.core.next(seq9911__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9912,G__9913,seq9911__$2);
});

leipzig.melody.with$.cljs$lang$maxFixedArity = (2);

/**
 * Replaces part of a melody with another.
 *   e.g. (->> notes (but 2 4 variation))
 */
leipzig.melody.but = (function leipzig$melody$but(start,end,variation,notes){
var starts_in_QMARK_ = (function (p__9927){
var map__9928 = p__9927;
var map__9928__$1 = ((((!((map__9928 == null)))?(((((map__9928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9928):map__9928);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9928__$1,cljs.core.cst$kw$time);
return (((start <= time)) && ((time < end)));
});
var clip = ((function (starts_in_QMARK_){
return (function (p__9930){
var map__9931 = p__9930;
var map__9931__$1 = ((((!((map__9931 == null)))?(((((map__9931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9931):map__9931);
var note = map__9931__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9931__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9931__$1,cljs.core.cst$kw$duration);
if((((time < start)) && ((start <= (time + duration))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$duration,(start - time));
} else {
return note;
}
});})(starts_in_QMARK_))
;
return leipzig.melody.with$.cljs$core$IFn$_invoke$arity$2(leipzig.melody.after(start,variation),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clip,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(starts_in_QMARK_),notes)));
});
/**
 * Returns the total duration of notes.
 *   e.g. (->> melody duration)
 */
leipzig.melody.duration = (function leipzig$melody$duration(notes){
var length = (function (p__9933){
var map__9934 = p__9933;
var map__9934__$1 = ((((!((map__9934 == null)))?(((((map__9934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9934):map__9934);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9934__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9934__$1,cljs.core.cst$kw$duration);
return (time + duration);
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(length,notes));
});
/**
 * Sequences later after earlier.
 *   e.g. (->> call (then response))
 */
leipzig.melody.then = (function leipzig$melody$then(later,earlier){
return leipzig.melody.with$.cljs$core$IFn$_invoke$arity$2(earlier,leipzig.melody.after(leipzig.melody.duration(earlier),later));
});
leipzig.melody.mapthen = (function leipzig$melody$mapthen(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9940 = arguments.length;
var i__4532__auto___9941 = (0);
while(true){
if((i__4532__auto___9941 < len__4531__auto___9940)){
args__4534__auto__.push((arguments[i__4532__auto___9941]));

var G__9942 = (i__4532__auto___9941 + (1));
i__4532__auto___9941 = G__9942;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return leipzig.melody.mapthen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

leipzig.melody.mapthen.cljs$core$IFn$_invoke$arity$variadic = (function (f,melodies){

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__9937_SHARP_,p2__9936_SHARP_){
return leipzig.melody.then(p2__9936_SHARP_,p1__9937_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,f,melodies));
});

leipzig.melody.mapthen.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
leipzig.melody.mapthen.cljs$lang$applyTo = (function (seq9938){
var G__9939 = cljs.core.first(seq9938);
var seq9938__$1 = cljs.core.next(seq9938);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9939,seq9938__$1);
});

/**
 * Repeats notes n times.
 *   e.g. (->> bassline (times 4))
 */
leipzig.melody.times = (function leipzig$melody$times(n,notes){
return leipzig.melody.mapthen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,notes)], 0));
});
/**
 * Transform both :time and :duration according to timing.
 *   e.g. (->> notes (tempo (bpm 120)))
 */
leipzig.melody.tempo = (function leipzig$melody$tempo(timing,notes){
return leipzig.melody.where(cljs.core.cst$kw$time,timing,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__9943){
var map__9944 = p__9943;
var map__9944__$1 = ((((!((map__9944 == null)))?(((((map__9944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9944):map__9944);
var note = map__9944__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9944__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9944__$1,cljs.core.cst$kw$duration);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$duration,((function (){var G__9946 = (start + duration);
return (timing.cljs$core$IFn$_invoke$arity$1 ? timing.cljs$core$IFn$_invoke$arity$1(G__9946) : timing.call(null,G__9946));
})() - (timing.cljs$core$IFn$_invoke$arity$1 ? timing.cljs$core$IFn$_invoke$arity$1(start) : timing.call(null,start))));
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
return (leipzig$melody$accelerando_$_rate(to) + (by * (t - to)));

}
}
});
});
