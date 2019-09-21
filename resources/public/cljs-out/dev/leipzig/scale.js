// Compiled by ClojureScript 1.10.339 {}
goog.provide('leipzig.scale');
goog.require('cljs.core');
leipzig.scale.sum_n = (function leipzig$scale$sum_n(series,n){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.take.call(null,n,series));
});
leipzig.scale.floor = (function leipzig$scale$floor(p1__11027_SHARP_){
return Math.floor(p1__11027_SHARP_);
});
leipzig.scale.ceil = (function leipzig$scale$ceil(p1__11029_SHARP_){
return Math.ceil(p1__11029_SHARP_);
});
if((typeof leipzig !== 'undefined') && (typeof leipzig.scale !== 'undefined') && (typeof leipzig.scale.scale_of !== 'undefined')){
} else {
leipzig.scale.scale_of = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"leipzig.scale","scale-of"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (intervals,degree){
if(cljs.core.not_EQ_.call(null,degree,leipzig.scale.floor.call(null,degree))){
return new cljs.core.Keyword(null,"fraction","fraction",107940680);
} else {
if((degree < (0))){
return new cljs.core.Keyword(null,"negative","negative",-1562068438);
} else {
return new cljs.core.Keyword(null,"natural","natural",722422122);

}
}
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
leipzig.scale.scale = (function leipzig$scale$scale(intervals){
return cljs.core.partial.call(null,leipzig.scale.scale_of,intervals);
});
cljs.core._add_method.call(null,leipzig.scale.scale_of,new cljs.core.Keyword(null,"natural","natural",722422122),(function (intervals,degree){
return leipzig.scale.sum_n.call(null,cljs.core.cycle.call(null,intervals),degree);
}));
cljs.core._add_method.call(null,leipzig.scale.scale_of,new cljs.core.Keyword(null,"negative","negative",-1562068438),(function (intervals,degree){
return (- leipzig.scale.scale_of.call(null,cljs.core.reverse.call(null,intervals),(- degree)));
}));
cljs.core._add_method.call(null,leipzig.scale.scale_of,new cljs.core.Keyword(null,"fraction","fraction",107940680),(function (intervals,degree){
var lower = leipzig.scale.scale_of.call(null,intervals,leipzig.scale.floor.call(null,degree));
var upper = leipzig.scale.scale_of.call(null,intervals,leipzig.scale.ceil.call(null,degree));
var fraction = (degree - leipzig.scale.floor.call(null,degree));
return (lower + (fraction * (upper - lower)));
}));
/**
 * Seven-tone scale, commonly used in Western music.
 */
leipzig.scale.major = leipzig.scale.scale.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(1),(2),(2),(2),(1)], null));
/**
 * Six-tone scale, used for blues music.
 */
leipzig.scale.blues = leipzig.scale.scale.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2),(1),(1),(3),(2)], null));
/**
 * Five-tone scale, common to East Asian music.
 */
leipzig.scale.pentatonic = leipzig.scale.scale.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2),(2),(3),(2)], null));
/**
 * Scale consisting of all twelve tones.
 */
leipzig.scale.chromatic = leipzig.scale.scale.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
leipzig.scale.from = (function leipzig$scale$from(base){
return cljs.core.partial.call(null,cljs.core._PLUS_,base);
});
leipzig.scale.C = leipzig.scale.from.call(null,(60));
leipzig.scale.D = leipzig.scale.from.call(null,(62));
leipzig.scale.E = leipzig.scale.from.call(null,(64));
leipzig.scale.F = leipzig.scale.from.call(null,(65));
leipzig.scale.G = leipzig.scale.from.call(null,(67));
leipzig.scale.A = leipzig.scale.from.call(null,(69));
leipzig.scale.B = leipzig.scale.from.call(null,(71));
leipzig.scale.sharp = cljs.core.inc;
leipzig.scale.flat = cljs.core.dec;
leipzig.scale.mode = (function leipzig$scale$mode(scale,n){
return cljs.core.comp.call(null,(function (p1__11030_SHARP_){
return (p1__11030_SHARP_ - scale.call(null,n));
}),scale,leipzig.scale.from.call(null,n));
});
leipzig.scale.ionian = leipzig.scale.mode.call(null,leipzig.scale.major,(0));
leipzig.scale.dorian = leipzig.scale.mode.call(null,leipzig.scale.major,(1));
leipzig.scale.phrygian = leipzig.scale.mode.call(null,leipzig.scale.major,(2));
leipzig.scale.lydian = leipzig.scale.mode.call(null,leipzig.scale.major,(3));
leipzig.scale.mixolydian = leipzig.scale.mode.call(null,leipzig.scale.major,(4));
leipzig.scale.aeolian = leipzig.scale.mode.call(null,leipzig.scale.major,(5));
leipzig.scale.locrian = leipzig.scale.mode.call(null,leipzig.scale.major,(6));
/**
 * Natural minor is another name for the Aeolian mode.
 */
leipzig.scale.minor = leipzig.scale.aeolian;
/**
 * Lower midi one octave.
 *   e.g. (comp low D minor)
 */
leipzig.scale.low = (function leipzig$scale$low(midi){
return leipzig.scale.from.call(null,(-12)).call(null,midi);
});
/**
 * Raise midi one octave.
 *   e.g. (comp high C major)
 */
leipzig.scale.high = (function leipzig$scale$high(midi){
return leipzig.scale.from.call(null,(12)).call(null,midi);
});
/**
 * Lower degree one octave (assuming a heptatonic scale).
 */
leipzig.scale.lower = (function leipzig$scale$lower(degree){
return leipzig.scale.from.call(null,(-7)).call(null,degree);
});
leipzig.scale.raise = (function leipzig$scale$raise(degree){

return leipzig.scale.from.call(null,(7)).call(null,degree);
});

//# sourceMappingURL=scale.js.map
