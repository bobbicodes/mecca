// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('leipzig.scale');
goog.require('cljs.core');
goog.require('cljs.core.constants');
leipzig.scale.sum_n = (function leipzig$scale$sum_n(series,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,series));
});
leipzig.scale.floor = (function leipzig$scale$floor(p1__9829_SHARP_){
return Math.floor(p1__9829_SHARP_);
});
leipzig.scale.ceil = (function leipzig$scale$ceil(p1__9831_SHARP_){
return Math.ceil(p1__9831_SHARP_);
});
if((typeof leipzig !== 'undefined') && (typeof leipzig.scale !== 'undefined') && (typeof leipzig.scale.scale_of !== 'undefined')){
} else {
leipzig.scale.scale_of = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("leipzig.scale","scale-of"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (intervals,degree){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(degree,leipzig.scale.floor(degree))){
return cljs.core.cst$kw$fraction;
} else {
if((degree < (0))){
return cljs.core.cst$kw$negative;
} else {
return cljs.core.cst$kw$natural;

}
}
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,cljs.core.cst$kw$default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
leipzig.scale.scale = (function leipzig$scale$scale(intervals){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(leipzig.scale.scale_of,intervals);
});
leipzig.scale.scale_of.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$natural,(function (intervals,degree){
return leipzig.scale.sum_n(cljs.core.cycle(intervals),degree);
}));
leipzig.scale.scale_of.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$negative,(function (intervals,degree){
return (- (function (){var G__9832 = cljs.core.reverse(intervals);
var G__9833 = (- degree);
return (leipzig.scale.scale_of.cljs$core$IFn$_invoke$arity$2 ? leipzig.scale.scale_of.cljs$core$IFn$_invoke$arity$2(G__9832,G__9833) : leipzig.scale.scale_of.call(null,G__9832,G__9833));
})());
}));
leipzig.scale.scale_of.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fraction,(function (intervals,degree){
var lower = (function (){var G__9834 = intervals;
var G__9835 = leipzig.scale.floor(degree);
return (leipzig.scale.scale_of.cljs$core$IFn$_invoke$arity$2 ? leipzig.scale.scale_of.cljs$core$IFn$_invoke$arity$2(G__9834,G__9835) : leipzig.scale.scale_of.call(null,G__9834,G__9835));
})();
var upper = (function (){var G__9836 = intervals;
var G__9837 = leipzig.scale.ceil(degree);
return (leipzig.scale.scale_of.cljs$core$IFn$_invoke$arity$2 ? leipzig.scale.scale_of.cljs$core$IFn$_invoke$arity$2(G__9836,G__9837) : leipzig.scale.scale_of.call(null,G__9836,G__9837));
})();
var fraction = (degree - leipzig.scale.floor(degree));
return (lower + (fraction * (upper - lower)));
}));
/**
 * Seven-tone scale, commonly used in Western music.
 */
leipzig.scale.major = leipzig.scale.scale(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(1),(2),(2),(2),(1)], null));
/**
 * Six-tone scale, used for blues music.
 */
leipzig.scale.blues = leipzig.scale.scale(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2),(1),(1),(3),(2)], null));
/**
 * Five-tone scale, common to East Asian music.
 */
leipzig.scale.pentatonic = leipzig.scale.scale(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2),(2),(3),(2)], null));
/**
 * Scale consisting of all twelve tones.
 */
leipzig.scale.chromatic = leipzig.scale.scale(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
leipzig.scale.from = (function leipzig$scale$from(base){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,base);
});
leipzig.scale.C = leipzig.scale.from((60));
leipzig.scale.D = leipzig.scale.from((62));
leipzig.scale.E = leipzig.scale.from((64));
leipzig.scale.F = leipzig.scale.from((65));
leipzig.scale.G = leipzig.scale.from((67));
leipzig.scale.A = leipzig.scale.from((69));
leipzig.scale.B = leipzig.scale.from((71));
leipzig.scale.sharp = cljs.core.inc;
leipzig.scale.flat = cljs.core.dec;
leipzig.scale.mode = (function leipzig$scale$mode(scale,n){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$3((function (p1__9838_SHARP_){
return (p1__9838_SHARP_ - (scale.cljs$core$IFn$_invoke$arity$1 ? scale.cljs$core$IFn$_invoke$arity$1(n) : scale.call(null,n)));
}),scale,leipzig.scale.from(n));
});
leipzig.scale.ionian = leipzig.scale.mode(leipzig.scale.major,(0));
leipzig.scale.dorian = leipzig.scale.mode(leipzig.scale.major,(1));
leipzig.scale.phrygian = leipzig.scale.mode(leipzig.scale.major,(2));
leipzig.scale.lydian = leipzig.scale.mode(leipzig.scale.major,(3));
leipzig.scale.mixolydian = leipzig.scale.mode(leipzig.scale.major,(4));
leipzig.scale.aeolian = leipzig.scale.mode(leipzig.scale.major,(5));
leipzig.scale.locrian = leipzig.scale.mode(leipzig.scale.major,(6));
/**
 * Natural minor is another name for the Aeolian mode.
 */
leipzig.scale.minor = leipzig.scale.aeolian;
/**
 * Lower midi one octave.
 *   e.g. (comp low D minor)
 */
leipzig.scale.low = (function leipzig$scale$low(midi){
var fexpr__9839 = leipzig.scale.from((-12));
return (fexpr__9839.cljs$core$IFn$_invoke$arity$1 ? fexpr__9839.cljs$core$IFn$_invoke$arity$1(midi) : fexpr__9839.call(null,midi));
});
/**
 * Raise midi one octave.
 *   e.g. (comp high C major)
 */
leipzig.scale.high = (function leipzig$scale$high(midi){
var fexpr__9840 = leipzig.scale.from((12));
return (fexpr__9840.cljs$core$IFn$_invoke$arity$1 ? fexpr__9840.cljs$core$IFn$_invoke$arity$1(midi) : fexpr__9840.call(null,midi));
});
/**
 * Lower degree one octave (assuming a heptatonic scale).
 */
leipzig.scale.lower = (function leipzig$scale$lower(degree){
var fexpr__9841 = leipzig.scale.from((-7));
return (fexpr__9841.cljs$core$IFn$_invoke$arity$1 ? fexpr__9841.cljs$core$IFn$_invoke$arity$1(degree) : fexpr__9841.call(null,degree));
});
leipzig.scale.raise = (function leipzig$scale$raise(degree){

var fexpr__9842 = leipzig.scale.from((7));
return (fexpr__9842.cljs$core$IFn$_invoke$arity$1 ? fexpr__9842.cljs$core$IFn$_invoke$arity$1(degree) : fexpr__9842.call(null,degree));
});
