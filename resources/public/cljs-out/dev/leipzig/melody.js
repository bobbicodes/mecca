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
return cljs.core.map.call(null,(function (p1__13154_SHARP_,p2__13155_SHARP_){
return cljs.core.assoc.call(null,p1__13154_SHARP_,k,p2__13155_SHARP_);
}),notes,values);
});
leipzig.melody.utter = (function leipzig$melody$utter(object,time,duration,velocity){
if(typeof object === 'number'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pitch","pitch",1495126700),object,new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"duration","duration",1444101068),duration,new cljs.core.Keyword(null,"velocity","velocity",-581524355),velocity], null)], null);
} else {
if(cljs.core.sequential_QMARK_.call(null,object)){
return cljs.core.mapcat.call(null,(function (p1__13156_SHARP_){
return leipzig.melody.utter.call(null,p1__13156_SHARP_,time,duration,velocity);
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
var G__13159 = arguments.length;
switch (G__13159) {
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
return cljs.core.map.call(null,(function (p1__13157_SHARP_){
return cljs.core.dissoc.call(null,p1__13157_SHARP_,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
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
return cljs.core.map.call(null,leipzig.melody.if_applicable.call(null,applies_QMARK_,(function (p1__13161_SHARP_){
return cljs.core.update_in.call(null,p1__13161_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),f);
})),notes);
});
/**
 * Applies f to the k key of each note in notes, ignoring missing keys.
 *   e.g. (->> notes (where :time (bpm 90)))
 */
leipzig.melody.where = (function leipzig$melody$where(k,f,notes){
return leipzig.melody.wherever.call(null,(function (p1__13162_SHARP_){
return cljs.core.contains_QMARK_.call(null,p1__13162_SHARP_,k);
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
var G__13167 = arguments.length;
switch (G__13167) {
case 2:
return leipzig.melody.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___13177 = arguments.length;
var i__4532__auto___13178 = (0);
while(true){
if((i__4532__auto___13178 < len__4531__auto___13177)){
args_arr__4546__auto__.push((arguments[i__4532__auto___13178]));

var G__13179 = (i__4532__auto___13178 + (1));
i__4532__auto___13178 = G__13179;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((2)),(0),null));
return leipzig.melody.with$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4547__auto__);

}
});

leipzig.melody.with$.cljs$core$IFn$_invoke$arity$2 = (function (p__13168,p__13169){
var vec__13170 = p__13168;
var seq__13171 = cljs.core.seq.call(null,vec__13170);
var first__13172 = cljs.core.first.call(null,seq__13171);
var seq__13171__$1 = cljs.core.next.call(null,seq__13171);
var a = first__13172;
var other_as = seq__13171__$1;
var as = vec__13170;
var vec__13173 = p__13169;
var seq__13174 = cljs.core.seq.call(null,vec__13173);
var first__13175 = cljs.core.first.call(null,seq__13174);
var seq__13174__$1 = cljs.core.next.call(null,seq__13174);
var b = first__13175;
var other_bs = seq__13174__$1;
var bs = vec__13173;
if(cljs.core.empty_QMARK_.call(null,as)){
return bs;
} else {
if(cljs.core.empty_QMARK_.call(null,bs)){
return as;
} else {
if(cljs.core.truth_(leipzig.melody.before_QMARK_.call(null,a,b))){
return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,((function (vec__13170,seq__13171,first__13172,seq__13171__$1,a,other_as,as,vec__13173,seq__13174,first__13175,seq__13174__$1,b,other_bs,bs){
return (function (){
return leipzig.melody.with$.call(null,other_as,bs);
});})(vec__13170,seq__13171,first__13172,seq__13171__$1,a,other_as,as,vec__13173,seq__13174,first__13175,seq__13174__$1,b,other_bs,bs))
,null,null)));
} else {
return cljs.core.cons.call(null,b,(new cljs.core.LazySeq(null,((function (vec__13170,seq__13171,first__13172,seq__13171__$1,a,other_as,as,vec__13173,seq__13174,first__13175,seq__13174__$1,b,other_bs,bs){
return (function (){
return leipzig.melody.with$.call(null,as,other_bs);
});})(vec__13170,seq__13171,first__13172,seq__13171__$1,a,other_as,as,vec__13173,seq__13174,first__13175,seq__13174__$1,b,other_bs,bs))
,null,null)));

}
}
}
});

leipzig.melody.with$.cljs$core$IFn$_invoke$arity$variadic = (function (as,bs,others){
return cljs.core.reduce.call(null,leipzig.melody.with$,cljs.core.cons.call(null,as,cljs.core.cons.call(null,bs,others)));
});

/** @this {Function} */
leipzig.melody.with$.cljs$lang$applyTo = (function (seq13164){
var G__13165 = cljs.core.first.call(null,seq13164);
var seq13164__$1 = cljs.core.next.call(null,seq13164);
var G__13166 = cljs.core.first.call(null,seq13164__$1);
var seq13164__$2 = cljs.core.next.call(null,seq13164__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13165,G__13166,seq13164__$2);
});

leipzig.melody.with$.cljs$lang$maxFixedArity = (2);

/**
 * Replaces part of a melody with another.
 *   e.g. (->> notes (but 2 4 variation))
 */
leipzig.melody.but = (function leipzig$melody$but(start,end,variation,notes){
var starts_in_QMARK_ = (function (p__13180){
var map__13181 = p__13180;
var map__13181__$1 = ((((!((map__13181 == null)))?(((((map__13181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13181):map__13181);
var time = cljs.core.get.call(null,map__13181__$1,new cljs.core.Keyword(null,"time","time",1385887882));
return (((start <= time)) && ((time < end)));
});
var clip = ((function (starts_in_QMARK_){
return (function (p__13183){
var map__13184 = p__13183;
var map__13184__$1 = ((((!((map__13184 == null)))?(((((map__13184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13184):map__13184);
var note = map__13184__$1;
var time = cljs.core.get.call(null,map__13184__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__13184__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
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
var length = (function (p__13186){
var map__13187 = p__13186;
var map__13187__$1 = ((((!((map__13187 == null)))?(((((map__13187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13187):map__13187);
var time = cljs.core.get.call(null,map__13187__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__13187__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
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
var len__4531__auto___13193 = arguments.length;
var i__4532__auto___13194 = (0);
while(true){
if((i__4532__auto___13194 < len__4531__auto___13193)){
args__4534__auto__.push((arguments[i__4532__auto___13194]));

var G__13195 = (i__4532__auto___13194 + (1));
i__4532__auto___13194 = G__13195;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return leipzig.melody.mapthen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

leipzig.melody.mapthen.cljs$core$IFn$_invoke$arity$variadic = (function (f,melodies){

return cljs.core.reduce.call(null,(function (p1__13190_SHARP_,p2__13189_SHARP_){
return leipzig.melody.then.call(null,p2__13189_SHARP_,p1__13190_SHARP_);
}),cljs.core.apply.call(null,cljs.core.map,f,melodies));
});

leipzig.melody.mapthen.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
leipzig.melody.mapthen.cljs$lang$applyTo = (function (seq13191){
var G__13192 = cljs.core.first.call(null,seq13191);
var seq13191__$1 = cljs.core.next.call(null,seq13191);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13192,seq13191__$1);
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
return leipzig.melody.where.call(null,new cljs.core.Keyword(null,"time","time",1385887882),timing,cljs.core.map.call(null,(function (p__13196){
var map__13197 = p__13196;
var map__13197__$1 = ((((!((map__13197 == null)))?(((((map__13197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13197):map__13197);
var note = map__13197__$1;
var start = cljs.core.get.call(null,map__13197__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__13197__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
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
