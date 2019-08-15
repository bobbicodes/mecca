// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.music.melody');
goog.require('cljs.core');
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
return cljs.core.map.call(null,(function (p1__10575_SHARP_,p2__10576_SHARP_){
return cljs.core.assoc.call(null,p1__10575_SHARP_,k,p2__10576_SHARP_);
}),notes,values);
});
mecca.music.melody.utter = (function mecca$music$melody$utter(object,time,duration,velocity){
if(typeof object === 'number'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pitch","pitch",1495126700),object,new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"duration","duration",1444101068),duration,new cljs.core.Keyword(null,"velocity","velocity",-581524355),velocity], null)], null);
} else {
if(cljs.core.sequential_QMARK_.call(null,object)){
return cljs.core.mapcat.call(null,(function (p1__10577_SHARP_){
return mecca.music.melody.utter.call(null,p1__10577_SHARP_,time,duration,velocity);
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
var G__10580 = arguments.length;
switch (G__10580) {
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
return cljs.core.map.call(null,(function (p1__10578_SHARP_){
return cljs.core.dissoc.call(null,p1__10578_SHARP_,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
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
return cljs.core.map.call(null,mecca.music.melody.if_applicable.call(null,applies_QMARK_,(function (p1__10582_SHARP_){
return cljs.core.update_in.call(null,p1__10582_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),f);
})),notes);
});
/**
 * Applies f to the k key of each note in notes, ignoring missing keys.
 *   e.g. (->> notes (where :time (bpm 90)))
 */
mecca.music.melody.where = (function mecca$music$melody$where(k,f,notes){
return mecca.music.melody.wherever.call(null,(function (p1__10583_SHARP_){
return cljs.core.contains_QMARK_.call(null,p1__10583_SHARP_,k);
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
var G__10588 = arguments.length;
switch (G__10588) {
case 2:
return mecca.music.melody.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___10598 = arguments.length;
var i__4532__auto___10599 = (0);
while(true){
if((i__4532__auto___10599 < len__4531__auto___10598)){
args_arr__4546__auto__.push((arguments[i__4532__auto___10599]));

var G__10600 = (i__4532__auto___10599 + (1));
i__4532__auto___10599 = G__10600;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((2)),(0),null));
return mecca.music.melody.with$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4547__auto__);

}
});

mecca.music.melody.with$.cljs$core$IFn$_invoke$arity$2 = (function (p__10589,p__10590){
var vec__10591 = p__10589;
var seq__10592 = cljs.core.seq.call(null,vec__10591);
var first__10593 = cljs.core.first.call(null,seq__10592);
var seq__10592__$1 = cljs.core.next.call(null,seq__10592);
var a = first__10593;
var other_as = seq__10592__$1;
var as = vec__10591;
var vec__10594 = p__10590;
var seq__10595 = cljs.core.seq.call(null,vec__10594);
var first__10596 = cljs.core.first.call(null,seq__10595);
var seq__10595__$1 = cljs.core.next.call(null,seq__10595);
var b = first__10596;
var other_bs = seq__10595__$1;
var bs = vec__10594;
if(cljs.core.empty_QMARK_.call(null,as)){
return bs;
} else {
if(cljs.core.empty_QMARK_.call(null,bs)){
return as;
} else {
if(cljs.core.truth_(mecca.music.melody.before_QMARK_.call(null,a,b))){
return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,((function (vec__10591,seq__10592,first__10593,seq__10592__$1,a,other_as,as,vec__10594,seq__10595,first__10596,seq__10595__$1,b,other_bs,bs){
return (function (){
return mecca.music.melody.with$.call(null,other_as,bs);
});})(vec__10591,seq__10592,first__10593,seq__10592__$1,a,other_as,as,vec__10594,seq__10595,first__10596,seq__10595__$1,b,other_bs,bs))
,null,null)));
} else {
return cljs.core.cons.call(null,b,(new cljs.core.LazySeq(null,((function (vec__10591,seq__10592,first__10593,seq__10592__$1,a,other_as,as,vec__10594,seq__10595,first__10596,seq__10595__$1,b,other_bs,bs){
return (function (){
return mecca.music.melody.with$.call(null,as,other_bs);
});})(vec__10591,seq__10592,first__10593,seq__10592__$1,a,other_as,as,vec__10594,seq__10595,first__10596,seq__10595__$1,b,other_bs,bs))
,null,null)));

}
}
}
});

mecca.music.melody.with$.cljs$core$IFn$_invoke$arity$variadic = (function (as,bs,others){
return cljs.core.reduce.call(null,mecca.music.melody.with$,cljs.core.cons.call(null,as,cljs.core.cons.call(null,bs,others)));
});

/** @this {Function} */
mecca.music.melody.with$.cljs$lang$applyTo = (function (seq10585){
var G__10586 = cljs.core.first.call(null,seq10585);
var seq10585__$1 = cljs.core.next.call(null,seq10585);
var G__10587 = cljs.core.first.call(null,seq10585__$1);
var seq10585__$2 = cljs.core.next.call(null,seq10585__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10586,G__10587,seq10585__$2);
});

mecca.music.melody.with$.cljs$lang$maxFixedArity = (2);

/**
 * Replaces part of a melody with another.
 *   e.g. (->> notes (but 2 4 variation))
 */
mecca.music.melody.but = (function mecca$music$melody$but(start,end,variation,notes){
var starts_in_QMARK_ = (function (p__10601){
var map__10602 = p__10601;
var map__10602__$1 = ((((!((map__10602 == null)))?(((((map__10602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10602):map__10602);
var time = cljs.core.get.call(null,map__10602__$1,new cljs.core.Keyword(null,"time","time",1385887882));
return (((start <= time)) && ((time < end)));
});
var clip = ((function (starts_in_QMARK_){
return (function (p__10604){
var map__10605 = p__10604;
var map__10605__$1 = ((((!((map__10605 == null)))?(((((map__10605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10605):map__10605);
var note = map__10605__$1;
var time = cljs.core.get.call(null,map__10605__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__10605__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
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
var length = (function (p__10607){
var map__10608 = p__10607;
var map__10608__$1 = ((((!((map__10608 == null)))?(((((map__10608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10608):map__10608);
var time = cljs.core.get.call(null,map__10608__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__10608__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
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
var len__4531__auto___10614 = arguments.length;
var i__4532__auto___10615 = (0);
while(true){
if((i__4532__auto___10615 < len__4531__auto___10614)){
args__4534__auto__.push((arguments[i__4532__auto___10615]));

var G__10616 = (i__4532__auto___10615 + (1));
i__4532__auto___10615 = G__10616;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return mecca.music.melody.mapthen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

mecca.music.melody.mapthen.cljs$core$IFn$_invoke$arity$variadic = (function (f,melodies){

return cljs.core.reduce.call(null,(function (p1__10611_SHARP_,p2__10610_SHARP_){
return mecca.music.melody.then.call(null,p2__10610_SHARP_,p1__10611_SHARP_);
}),cljs.core.apply.call(null,cljs.core.map,f,melodies));
});

mecca.music.melody.mapthen.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mecca.music.melody.mapthen.cljs$lang$applyTo = (function (seq10612){
var G__10613 = cljs.core.first.call(null,seq10612);
var seq10612__$1 = cljs.core.next.call(null,seq10612);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10613,seq10612__$1);
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
return mecca.music.melody.where.call(null,new cljs.core.Keyword(null,"time","time",1385887882),timing,cljs.core.map.call(null,(function (p__10617){
var map__10618 = p__10617;
var map__10618__$1 = ((((!((map__10618 == null)))?(((((map__10618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10618):map__10618);
var note = map__10618__$1;
var start = cljs.core.get.call(null,map__10618__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__10618__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
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
