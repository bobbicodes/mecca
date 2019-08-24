// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.components');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('mecca.music');
goog.require('mecca.subs');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('mecca.events');
goog.require('mecca.music.melody');
goog.require('mecca.music.scale');
goog.require('mecca.music.mario');
mecca.components.scale_picker = (function mecca$components$scale_picker(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Scale: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.deref((function (){var G__13079 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13079) : re_frame.core.subscribe.call(null,G__13079));
})()),cljs.core.cst$kw$on_DASH_change,(function (e){
e.preventDefault();

var G__13080 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_scale,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13080) : re_frame.core.dispatch.call(null,G__13080));
})], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = (function mecca$components$scale_picker_$_iter__13081(s__13082){
return (new cljs.core.LazySeq(null,(function (){
var s__13082__$1 = s__13082;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13082__$1);
if(temp__5457__auto__){
var s__13082__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13082__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13082__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13084 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13083 = (0);
while(true){
if((i__13083 < size__4323__auto__)){
var scale = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13083);
cljs.core.chunk_append(b__13084,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,scale], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,scale], null)));

var G__13085 = (i__13083 + (1));
i__13083 = G__13085;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13084),mecca$components$scale_picker_$_iter__13081(cljs.core.chunk_rest(s__13082__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13084),null);
}
} else {
var scale = cljs.core.first(s__13082__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,scale], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,scale], null)),mecca$components$scale_picker_$_iter__13081(cljs.core.rest(s__13082__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.keys(mecca.music.scales));
})())], null)], null);
});
mecca.components.key_picker = (function mecca$components$key_picker(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label," Key: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.deref((function (){var G__13086 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13086) : re_frame.core.subscribe.call(null,G__13086));
})()),cljs.core.cst$kw$on_DASH_change,(function (e){
e.preventDefault();

var G__13087 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_key,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13087) : re_frame.core.dispatch.call(null,G__13087));
})], null),(function (){var iter__4324__auto__ = (function mecca$components$key_picker_$_iter__13088(s__13089){
return (new cljs.core.LazySeq(null,(function (){
var s__13089__$1 = s__13089;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13089__$1);
if(temp__5457__auto__){
var s__13089__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13089__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13089__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13091 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13090 = (0);
while(true){
if((i__13090 < size__4323__auto__)){
var note = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13090);
cljs.core.chunk_append(b__13091,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,note], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,note], null)));

var G__13092 = (i__13090 + (1));
i__13090 = G__13092;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13091),mecca$components$key_picker_$_iter__13088(cljs.core.chunk_rest(s__13089__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13091),null);
}
} else {
var note = cljs.core.first(s__13089__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,note], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,note], null)),mecca$components$key_picker_$_iter__13088(cljs.core.rest(s__13089__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(mecca.music.notes);
})()], null)], null);
});
mecca.components.octave_input = (function mecca$components$octave_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label," Octave: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"6%",cljs.core.cst$kw$background_DASH_color,"lightgray"], null),cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.deref((function (){var G__13093 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$octave], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13093) : re_frame.core.subscribe.call(null,G__13093));
})()),cljs.core.cst$kw$on_DASH_change,(function (e){
e.preventDefault();

var G__13094 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_octave,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13094) : re_frame.core.dispatch.call(null,G__13094));
})], null)], null)], null);
});
mecca.components.tempo_input = (function mecca$components$tempo_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label," Tempo: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"8%",cljs.core.cst$kw$background_DASH_color,"lightgray"], null),cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.deref((function (){var G__13095 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13095) : re_frame.core.subscribe.call(null,G__13095));
})()),cljs.core.cst$kw$on_DASH_change,(function (e){
e.preventDefault();

var G__13096 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_tempo,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13096) : re_frame.core.dispatch.call(null,G__13096));
})], null)], null)], null);
});
mecca.components.bar_line_solid = (function mecca$components$bar_line_solid(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transform,"scale (2.5,2.5) translate(2,-2.8)",cljs.core.cst$kw$x1,11.625,cljs.core.cst$kw$x2,11.625,cljs.core.cst$kw$y1,(6),cljs.core.cst$kw$y2,17.2,cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.1], null)], null);
});
mecca.components.bar_line = (function mecca$components$bar_line(x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$transform,"scale (2.5,2.5) translate(4,-2.8)",cljs.core.cst$kw$x1,x,cljs.core.cst$kw$x2,x,cljs.core.cst$kw$y1,5.5,cljs.core.cst$kw$y2,(18),cljs.core.cst$kw$stroke,"orange",cljs.core.cst$kw$stroke_DASH_width,0.1,cljs.core.cst$kw$stroke_DASH_dasharray,0.15], null)], null);
});
mecca.components.ending_bar = (function mecca$components$ending_bar(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"scale (2.5,2.5) translate(3,0.2)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,22.25,cljs.core.cst$kw$y,(3),cljs.core.cst$kw$width,0.24,cljs.core.cst$kw$height,11.25,cljs.core.cst$kw$ry,(0),cljs.core.cst$kw$fill,"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x1,22.125,cljs.core.cst$kw$x2,22.125,cljs.core.cst$kw$y1,(3),cljs.core.cst$kw$y2,14.25,cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.1], null)], null)], null);
});
mecca.components.ending_bar_repeat = (function mecca$components$ending_bar_repeat(){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"scale (2.5,2.5) translate(3,0.2)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,22.25,cljs.core.cst$kw$y,(3),cljs.core.cst$kw$width,0.24,cljs.core.cst$kw$height,11.25,cljs.core.cst$kw$ry,(0),cljs.core.cst$kw$fill,"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x1,22.125,cljs.core.cst$kw$x2,22.125,cljs.core.cst$kw$y1,(3),cljs.core.cst$kw$y2,14.25,cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,21.8,cljs.core.cst$kw$cy,4.3,cljs.core.cst$kw$r,0.14], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,21.8,cljs.core.cst$kw$cy,4.9,cljs.core.cst$kw$r,0.14], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,21.8,cljs.core.cst$kw$cy,9.1,cljs.core.cst$kw$r,0.14], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,21.8,cljs.core.cst$kw$cy,9.7,cljs.core.cst$kw$r,0.14], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,21.8,cljs.core.cst$kw$cy,13.1,cljs.core.cst$kw$r,0.14], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,21.8,cljs.core.cst$kw$cy,13.7,cljs.core.cst$kw$r,0.14], null)], null)], null);
});
mecca.components.beat_line = (function mecca$components$beat_line(x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$transform,"scale (2.5,2.5) translate(4,-2.8)",cljs.core.cst$kw$x1,x,cljs.core.cst$kw$x2,x,cljs.core.cst$kw$y1,5.5,cljs.core.cst$kw$y2,(18),cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.03,cljs.core.cst$kw$stroke_DASH_dasharray,0.15], null)], null);
});
mecca.components.eighth_note_flag = (function mecca$components$eighth_note_flag(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"scale(0.007,-0.007)",cljs.core.cst$kw$d,"M179 -646c15 29 28.5449 55.0752 46 102c18.3213 49.2549 30 108.298 30 138c0 105 -80 173 -168 200c-18 5 -47 9 -87 16v190h22c8 0 33 -61 71 -95c4 -3 -2 3 61 -56c62 -58 122 -137 122 -241c0 -37.5245 -12.6807 -106.071 -35 -163 c-19.9111 -50.7861 -43 -99 -66 -132c-6 -5 -10 -7 -13 -7s-5 2 -5 5l4 10c1.17241 2.93103 13.7644 24.8111 18 33z"], null)], null);
});
mecca.components.beam = (function mecca$components$beam(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$polygon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$points,"2981,475 3499,424 3499,484 2981,535"], null)], null);
});
mecca.components.drum_hit = (function mecca$components$drum_hit(color,p__13097){
var vec__13098 = p__13097;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13098,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13098,(1),null);
var mouseover_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (mouseover_QMARK_,vec__13098,x,y){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((8.75 + (6.88 * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((25.0375 - y)),") "].join(''),cljs.core.cst$kw$visibility,(cljs.core.truth_(cljs.core.deref(mouseover_QMARK_))?"visible":"hidden"),cljs.core.cst$kw$pointer_DASH_events,"all",cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (mouseover_QMARK_,vec__13098,x,y){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(mouseover_QMARK_,vec__13098,x,y))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (mouseover_QMARK_,vec__13098,x,y){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(mouseover_QMARK_,vec__13098,x,y))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"m1.24.27 .9.74c.02.01 .04.03 .07.03 .02 0 .05-.01.08-.03l.15-.12c.02-.02.04-.06.04-.09 0-.03-.02-.06-.04-.08L1.56 0 2.43-.71c.02-.02.04-.05.04-.08 0-.03-.02-.07-.04-.09l-.15-.12c-.02-.01-.05-.03-.08-.03-.02 0-.04.01-.07.03L1.24-.27.33-1.01c-.02-.01-.04-.03-.07-.03-.02 0-.05.01-.08.03l-.15.12c-.02.02-.04.06-.04.09 0 .03.02 .06.04 .08L.91 0 .04.71c-.02.02-.04.05-.04.08 0 .03.02 .07.04 .09l.15.12c.02.01 .05.03 .08.03 .02 0 .04-.01.07-.03z",cljs.core.cst$kw$fill,color], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,(((y < (-8)))?2.2:(0)),cljs.core.cst$kw$y,(((y < (-8)))?-6.3:0.8),cljs.core.cst$kw$height,5.5,cljs.core.cst$kw$width,0.25,cljs.core.cst$kw$fill,color], null)], null)], null);
});
;})(mouseover_QMARK_,vec__13098,x,y))
});
mecca.components.quarter_note = (function mecca$components$quarter_note(color,p__13101){
var vec__13102 = p__13101;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13102,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13102,(1),null);
var mouseover_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (mouseover_QMARK_,vec__13102,x,y){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$visibility,(cljs.core.truth_((function (){var or__3949__auto__ = cljs.core.deref(mouseover_QMARK_);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,"black");
}
})())?"visible":"hidden"),cljs.core.cst$kw$pointer_DASH_events,"all",cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (mouseover_QMARK_,vec__13102,x,y){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(mouseover_QMARK_,vec__13102,x,y))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (mouseover_QMARK_,vec__13102,x,y){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(mouseover_QMARK_,vec__13102,x,y))
,cljs.core.cst$kw$on_DASH_click,((function (mouseover_QMARK_,vec__13102,x,y){
return (function (e){
var G__13105 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_bass_DASH_note,x,y], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13105) : re_frame.core.dispatch.call(null,G__13105));
});})(mouseover_QMARK_,vec__13102,x,y))
,cljs.core.cst$kw$transform,["scale (1,1) translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((8.875 + (6.9 * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((25.0375 - y)),") "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"m1.62-1.06c.41 0 .8.21 .8.67 0 .53-.41.89-.76 1.1-.27.16-.56.27-.86.27-.41 0-.8-.21-.8-.67 0-.53.41-.89.76-1.1.27-.16.56-.27.86-.27z",cljs.core.cst$kw$fill,color], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,(((((y < (1))) || (((((7) < y)) && ((y < (13)))))))?2.15:0.02),cljs.core.cst$kw$y,(((((y < (1))) || (((((7) < y)) && ((y < (13)))))))?-7.1:(0)),cljs.core.cst$kw$height,6.794,cljs.core.cst$kw$width,0.25,cljs.core.cst$kw$fill,color], null)], null)], null);
});
;})(mouseover_QMARK_,vec__13102,x,y))
});
mecca.components.drum_clef = (function mecca$components$drum_clef(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$transform,"translate(2,33.3) scale(0.009, 0.009)",cljs.core.cst$kw$d,"M281-143h-80c-5 0-9 3-9 9v415c0 5 3 9 9 9h80c5 0 9-3 9-9v-415c0-5-3-9-9-9zM91-143h-80c-5 0-9 3-9 9v415c0 5 3 9 9 9h80c5 0 9-3 9-9v-415c0-5-3-9-9-9z",cljs.core.cst$kw$fill,"black"], null)], null);
});
mecca.components.bass_clef = (function mecca$components$bass_clef(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"scale(0.0138,0.0138) translate(16,1596)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"M287 14C289 78 260 138 216 182 161 237 91 270 18 294 7 298-6 292 9 285 38 272 69 261 95 241 154 206 205 146 218 76 225 32 223-12 212-56 205-87 183-118 148-122 117-129 84-118 62-96 55-89 44-72 47-54 60-65 60-63 71-67 95-78 128-63 135-36 141-10 137 23 110 36 84 50 47 43 31 16 7-28 20-87 60-116 99-149 157-151 205-133 254-116 282-65 287-17 287-6 287 5 287 14z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,(340),cljs.core.cst$kw$cy,(-60),cljs.core.cst$kw$r,(26)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,(340),cljs.core.cst$kw$cy,(60),cljs.core.cst$kw$r,(26)], null)], null)], null);
});
});
mecca.components.treble_clef = (function mecca$components$treble_clef(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"scale(0.026,0.026) translate(25,420)",cljs.core.cst$kw$d,"m87 95c-6 2-12 6-18 12-5 6-8 13-8 20 0 5 2 10 5 16 3 6 8 10 14 12 2 0 3 1 3 3 0 1-1 1-3 1-10-2-18-8-24-15-6-8-9-17-10-27 0-11 4-21 10-30 6-9 14-16 24-20l-7-38c-16 14-29 28-40 42-10 15-16 31-16 48 0 8 2 15 5 22 3 7 7 14 13 20 12 12 27 18 46 19 6 0 13-2 21-3l-16-83zm8-1 16 81c16-7 24-21 24-43-1-7-3-14-7-20-3-6-8-11-14-14-6-3-13-5-20-5zm-22-110c3-2 8-6 12-11 4-5 9-11 13-18 4-7 7-14 10-21 2-7 4-14 4-20 0-3 0-5-1-8 0-4-2-7-4-9-2-2-5-3-8-3-6 0-12 4-17 12-4 7-7 15-10 24-2 9-4 18-4 27 1 10 2 19 5 26zm-7 6c-5-17-7-35-8-52 0-11 1-22 3-32 2-10 5-18 9-26 4-7 8-13 14-17 5-3 8-5 10-5 1 0 3 1 4 1 1 1 2 3 4 5 13 18 19 39 19 65 0 12-2 24-5 35-3 12-8 23-14 33-6 10-13 19-22 27l9 42c5-1 8-1 10-1 8 0 15 2 22 5 7 3 12 8 17 14 5 6 8 12 11 20 2 7 4 15 4 23 0 12-3 24-10 34-7 10-16 18-30 23 1 5 2 13 5 22 2 10 4 17 5 23 1 6 1 11 1 17 0 8-2 16-6 22-4 7-10 12-17 15-7 4-14 5-23 5-12 0-22-3-30-10-9-7-13-15-14-27 0-5 1-10 4-14 2-4 5-8 9-11 4-3 8-4 13-5 4 0 8 1 12 3 4 2 7 5 9 9 2 4 3 8 3 13 0 6-2 12-6 16-4 4-10 7-16 7h-2c4 6 11 10 20 10 5 0 10-1 14-3 5-2 9-5 13-8 3-3 6-7 7-11 2-4 3-10 3-18 0-5-1-10-1-15-1-5-2-12-4-20-2-8-3-14-4-19-6 2-13 2-20 2-12 0-22-2-33-7-10-5-19-11-27-20-8-8-14-18-18-29-4-11-6-22-7-33 0-11 2-21 6-31 4-10 9-19 15-28 6-9 12-17 19-24 7-7 15-16 26-27z"], null)], null);
});
mecca.components.quarter_note_button = (function mecca$components$quarter_note_button(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"translate(0,0)"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"M 69.920725,132.90712 V 102.20693 H 99.12731 128.3339 v 30.70019 30.70021 H 99.12731 69.920725 Z m 8.344738,24.12159 v -2.19287 h -2.086184 -2.086185 v 2.19287 2.19288 h 2.086185 2.086184 z m 45.896057,0 v -2.19287 h -2.08618 -2.08619 v 2.19287 2.19288 h 2.08619 2.08618 z m -22.94803,-5.48217 v -1.09644 h 2.08619 2.08618 v -1.09643 -1.09644 h 1.0431 1.04308 v -18.63941 -18.6394 h -1.04308 -1.0431 v -1.09645 -1.09643 h -1.04309 -1.04309 V 121.94277 135.1 h -7.301647 -7.301647 v 1.09643 1.09645 h -2.086184 -2.086185 v 1.09643 1.09643 h -1.043092 -1.043092 v 1.09645 1.09642 H 81.39474 80.351648 v 2.19288 2.19287 h 1.043092 1.043093 v 2.19287 2.19287 h 1.043092 1.043092 v 1.09644 1.09644 h 8.344739 8.344734 z m -22.948027,-42.761 v -2.19287 h -2.086184 -2.086185 v 2.19287 2.19288 h 2.086185 2.086184 z m 45.896057,0 v -2.19287 h -2.08618 -2.08619 v 2.19287 2.19288 h 2.08619 2.08618 z"], null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fill,"#fab100",cljs.core.cst$kw$stroke_DASH_width,0.26735786], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"m 64.40715,132.43769 v -32.0231 h 2.145117 2.145116 v -2.287373 -2.287361 h 30.031629 30.031628 v 2.287361 2.287373 H 98.729012 68.697383 v 32.0231 32.02313 H 66.552267 64.40715 Z m 21.451164,17.15525 v -1.14368 h -2.145117 -2.145115 v -1.14369 -1.14368 h -1.072559 -1.072558 v -2.28735 -2.28738 h 1.072558 1.072559 v -1.14367 -1.14369 h 1.072557 1.072558 v -1.14369 -1.14368 h 2.145117 2.145116 v -1.14368 -1.14368 h 7.507907 7.507913 v -13.72419 -13.7242 h 1.07255 1.07256 v 19.44262 19.44259 h -2.14511 -2.14512 v 1.14368 1.14369 h -3.217676 -3.217675 v 1.14368 1.14368 h -4.290232 -4.290233 z"], null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fill,"#fa7500",cljs.core.cst$kw$stroke_DASH_width,0.27688742], null)], null)], null);
});
});
mecca.components.play_button = (function mecca$components$play_button(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"scale (0.35,0.35) translate(285,893)",cljs.core.cst$kw$on_DASH_click,(function (){
return mecca.music.play_bassline_BANG_();
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"m 17.333333,38.666667 v -24 H 26.666667 36 V 18 21.333333 h 6 6 V 24 26.666667 h 6 6 V 30 33.333333 h 2.666667 2.666666 V 36 38.666667 H 62.666667 60 V 36 33.333333 H 54 48 V 30 26.666667 H 42 36 V 24 21.333333 H 30 24 V 42 62.666667 h -3.333333 -3.333334 z",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,"#c4e5dd"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"m 24,54 v -3.333333 h 6 6 V 48 45.333333 h 6 6 V 42 38.666667 h 2.666667 2.666666 V 36 33.333333 H 56.666667 60 v 6 6 H 54 48 V 48 50.666667 H 42 36 V 54 57.333333 h -6 -6 z",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,"#cdcdcd"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"m 17.333333,90 v -3.333333 h 6 6 V 84 81.333333 h 6 6 V 78 74.666667 h 6 6 V 72 69.333333 h 6 6 V 66 62.666667 H 68.666667 72 V 60 57.333333 h 2.666667 2.666666 v -6 -6 H 80.666667 84 v 6 6 H 80.666667 77.333333 V 60 62.666667 H 74.666667 72 V 66 69.333333 H 68.666667 65.333333 V 72 74.666667 h -6 -6 V 78 81.333333 h -6 -6 V 84 86.666667 h -6 -6 V 90 93.333333 h -6 -6 z m 0,-18 V 69.333333 H 20.666667 24 V 66 62.666667 h 6 6 V 60 57.333333 h 6 6 V 54 50.666667 h 6 6 V 48 45.333333 h 2.666667 2.666666 V 48 50.666667 H 62.666667 60 V 54 57.333333 H 54 48 V 60 62.666667 H 42 36 V 66 69.333333 H 30 24 V 72 74.666667 h -3.333333 -3.333334 z m 12,-36 V 26.666667 H 32.666667 36 V 30 33.333333 h 6 6 V 36 38.666667 H 42 36 V 42 45.333333 h -3.333333 -3.333334 z",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,"#a4a4a4"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"M 17.333333,84 V 81.333333 H 20.666667 24 V 78 74.666667 h 6 6 V 72 69.333333 h 6 6 V 66 62.666667 h 6 6 V 60 57.333333 h 2.666667 2.666666 V 54 50.666667 H 68.666667 72 V 48 45.333333 h 2.666667 2.666666 v 6 6 H 74.666667 72 V 60 62.666667 H 68.666667 65.333333 V 66 69.333333 h -6 -6 V 72 74.666667 h -6 -6 V 78 81.333333 h -6 -6 V 84 86.666667 h -6 -6 z M 12,38.666667 V 2.6666667 h 6 6 V 6 9.3333333 h 6 6 V 12 14.666667 h 6 6 V 18 21.333333 h 6 6 V 24 26.666667 h 2.666667 2.666666 V 30 33.333333 H 68.666667 72 V 36 38.666667 H 68.666667 65.333333 V 42 45.333333 H 62.666667 60 V 48 50.666667 H 54 48 V 54 57.333333 H 42 36 V 60 62.666667 H 30 24 V 66 69.333333 H 20.666667 17.333333 V 72 74.666667 H 14.666667 12 Z M 24,60 v -2.666667 h 6 6 V 54 50.666667 h 6 6 V 48 45.333333 h 6 6 V 42 38.666667 h 2.666667 2.666666 V 36 33.333333 H 62.666667 60 V 30 26.666667 H 54 48 V 24 21.333333 H 42 36 V 18 14.666667 H 30 24 V 12 9.3333333 H 20.666667 17.333333 V 36 62.666667 H 20.666667 24 Z M 24,36 V 21.333333 h 6 6 V 24 26.666667 h 6 6 V 30 33.333333 h 2.666667 2.666666 V 36 38.666667 H 50.666667 48 V 42 45.333333 H 42 36 V 48 50.666667 h -6 -6 z m 12,6 v -3.333333 h 6 6 V 36 33.333333 H 42 36 V 30 26.666667 H 32.666667 29.333333 V 36 45.333333 H 32.666667 36 Z",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,"#727272"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"M 17.333333,78 V 74.666667 H 20.666667 24 V 72 69.333333 h 6 6 V 66 62.666667 h 6 6 V 60 57.333333 h 6 6 V 54 50.666667 h 2.666667 2.666666 v -6 -6 H 68.666667 72 v 6 6 H 68.666667 65.333333 V 54 57.333333 H 62.666667 60 V 60 62.666667 H 54 48 V 66 69.333333 H 42 36 V 72 74.666667 H 30 24 V 78 81.333333 h -3.333333 -3.333334 z",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,"#000000"], null)], null)], null)], null)], null);
});
});
mecca.components.play_button_on = (function mecca$components$play_button_on(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"scale (0.35,0.35) translate(285,893)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"M 12.655368,40.632764 V 25.966097 h 6 6 v 2.666667 2.666667 h 6 6 v 3.333333 3.333333 h 6 6 v 2.666667 2.666667 h -6 -6 v 3.333333 3.333333 h -6 -6 v 2.666667 2.666667 h -6 -6 z",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,"#f6f600"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"m 7.322035,64.632764 v -2.666667 h 2.6666667 2.6666663 v -3.333333 -3.333333 h 6 6 v -2.666667 -2.666667 h 6 6 v -3.333333 -3.333333 h 6 6 v 3.333333 3.333333 h -6 -6 v 2.666667 2.666667 h -6 -6 v 3.333333 3.333333 h -6 -6 v 2.666667 2.666667 H 9.9887017 7.322035 Z",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,"#f69300"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"m 7.322035,76.632764 v -2.666667 h 2.6666667 2.6666663 v -3.333333 -3.333333 h 6 6 v -2.666667 -2.666667 h 6 6 v -3.333333 -3.333333 h 6 6 v -2.666667 -2.666667 h 3.333334 3.333333 v -3.333333 -3.333333 h 6 6 v 3.333333 3.333333 h -3.333333 -3.333334 v 2.666667 2.666667 h -2.666666 -2.666667 v 3.333333 3.333333 h -6 -6 v 2.666667 2.666667 h -6 -6 v 3.333333 3.333333 h -6 -6 v 2.666667 2.666667 h -6 -6 z",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,"#727272"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"M 0.65536833,40.632764 V 7.2994306 H 6.6553683 12.655368 v 3.3333334 3.333333 h 6 6 v 2.666667 2.666667 h 6 6 v 3.333333 3.333333 h 6 6 v 2.666667 2.666667 h 3.333334 3.333333 v 3.333333 3.333333 h 2.666667 2.666666 v 2.666667 2.666667 h -2.666666 -2.666667 v 3.333333 3.333333 h -3.333333 -3.333334 v 2.666667 2.666667 h -6 -6 v 3.333333 3.333333 h -6 -6 v 2.666667 2.666667 h -6 -6 v 3.333333 3.333333 H 6.6553683 0.65536833 Z m 11.99999967,24 v -2.666667 h 6 6 v -3.333333 -3.333333 h 6 6 v -2.666667 -2.666667 h 6 6 v -3.333333 -3.333333 h 3.333334 3.333333 v -2.666667 -2.666667 h -3.333333 -3.333334 v -3.333333 -3.333333 h -6 -6 v -2.666667 -2.666667 h -6 -6 v -3.333333 -3.333333 h -6 -6 V 16.632764 13.966097 H 9.9887017 7.322035 v 26.666667 26.666667 h 2.6666667 2.6666663 z",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,"#000000"], null)], null)], null)], null)], null);
});
});
mecca.components.basslines = (function mecca$components$basslines(){
var active = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Alberti bass");
return ((function (active){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Try some well-known musical patterns: "], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (active){
return (function mecca$components$basslines_$_iter__13106(s__13107){
return (new cljs.core.LazySeq(null,((function (active){
return (function (){
var s__13107__$1 = s__13107;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13107__$1);
if(temp__5457__auto__){
var s__13107__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13107__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13107__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13109 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13108 = (0);
while(true){
if((i__13108 < size__4323__auto__)){
var map__13110 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13108);
var map__13110__$1 = ((((!((map__13110 == null)))?(((((map__13110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13110):map__13110);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13110__$1,cljs.core.cst$kw$name);
var notes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13110__$1,cljs.core.cst$kw$notes);
var scales = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13110__$1,cljs.core.cst$kw$scales);
cljs.core.chunk_append(b__13109,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (i__13108,map__13110,map__13110__$1,name,notes,scales,c__4322__auto__,size__4323__auto__,b__13109,s__13107__$2,temp__5457__auto__,active){
return (function (e){
var G__13112_13118 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_scale,cljs.core.first(scales)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13112_13118) : re_frame.core.dispatch.call(null,G__13112_13118));

var G__13113_13119 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_bassline,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),cljs.core.cycle(notes)))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13113_13119) : re_frame.core.dispatch.call(null,G__13113_13119));

return cljs.core.reset_BANG_(active,name);
});})(i__13108,map__13110,map__13110__$1,name,notes,scales,c__4322__auto__,size__4323__auto__,b__13109,s__13107__$2,temp__5457__auto__,active))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.deref(active)))?"lightgreen":"violet")], null)], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,name], null)));

var G__13120 = (i__13108 + (1));
i__13108 = G__13120;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13109),mecca$components$basslines_$_iter__13106(cljs.core.chunk_rest(s__13107__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13109),null);
}
} else {
var map__13114 = cljs.core.first(s__13107__$2);
var map__13114__$1 = ((((!((map__13114 == null)))?(((((map__13114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13114):map__13114);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13114__$1,cljs.core.cst$kw$name);
var notes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13114__$1,cljs.core.cst$kw$notes);
var scales = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13114__$1,cljs.core.cst$kw$scales);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (map__13114,map__13114__$1,name,notes,scales,s__13107__$2,temp__5457__auto__,active){
return (function (e){
var G__13116_13121 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_scale,cljs.core.first(scales)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13116_13121) : re_frame.core.dispatch.call(null,G__13116_13121));

var G__13117_13122 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_bassline,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),cljs.core.cycle(notes)))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13117_13122) : re_frame.core.dispatch.call(null,G__13117_13122));

return cljs.core.reset_BANG_(active,name);
});})(map__13114,map__13114__$1,name,notes,scales,s__13107__$2,temp__5457__auto__,active))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.deref(active)))?"lightgreen":"violet")], null)], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,name], null)),mecca$components$basslines_$_iter__13106(cljs.core.rest(s__13107__$2)));
}
} else {
return null;
}
break;
}
});})(active))
,null,null));
});})(active))
;
return iter__4324__auto__(cljs.core.seq(mecca.music.basslines));
})())], null);
});
;})(active))
});
mecca.components.staff = (function mecca$components$staff(){
var mouse_over = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
var bassline = (function (){var G__13123 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13123) : re_frame.core.subscribe.call(null,G__13123));
})();
var current_position = (function (){var G__13124 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13124) : re_frame.core.subscribe.call(null,G__13124));
})();
return ((function (mouse_over,bassline,current_position){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$staff,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"scale (7,7) translate(2.5,2)",cljs.core.cst$kw$view_DASH_box,"0 0 450 160"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_lines,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (mouse_over,bassline,current_position){
return (function mecca$components$staff_$_iter__13125(s__13126){
return (new cljs.core.LazySeq(null,((function (mouse_over,bassline,current_position){
return (function (){
var s__13126__$1 = s__13126;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13126__$1);
if(temp__5457__auto__){
var s__13126__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13126__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13126__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13128 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13127 = (0);
while(true){
if((i__13127 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13127);
cljs.core.chunk_append(b__13128,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$stroke_DASH_dasharray,cljs.core.cst$kw$stroke,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$stroke_DASH_linejoin,cljs.core.cst$kw$y1,cljs.core.cst$kw$stroke_DASH_linecap,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x1,cljs.core.cst$kw$y2,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$x2,cljs.core.cst$kw$visibility],[((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(30))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(18)))))?0.25:null),"black",((function (i__13127,y,c__4322__auto__,size__4323__auto__,b__13128,s__13126__$2,temp__5457__auto__,mouse_over,bassline,current_position){
return (function (){
return cljs.core.reset_BANG_(mouse_over,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
});})(i__13127,y,c__4322__auto__,size__4323__auto__,b__13128,s__13126__$2,temp__5457__auto__,mouse_over,bassline,current_position))
,"bevel",y,"butt",((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(30))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(18)))))?0.06:0.2),((function (i__13127,y,c__4322__auto__,size__4323__auto__,b__13128,s__13126__$2,temp__5457__auto__,mouse_over,bassline,current_position){
return (function (){
return cljs.core.reset_BANG_(mouse_over,y);
});})(i__13127,y,c__4322__auto__,size__4323__auto__,b__13128,s__13126__$2,temp__5457__auto__,mouse_over,bassline,current_position))
,(0),y,"all",63.7,(((((y > (7))) && (cljs.core.even_QMARK_(y)) && ((y < (42)))))?"visible":"hidden")])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,y], null)));

var G__13167 = (i__13127 + (1));
i__13127 = G__13167;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13128),mecca$components$staff_$_iter__13125(cljs.core.chunk_rest(s__13126__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13128),null);
}
} else {
var y = cljs.core.first(s__13126__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$stroke_DASH_dasharray,cljs.core.cst$kw$stroke,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$stroke_DASH_linejoin,cljs.core.cst$kw$y1,cljs.core.cst$kw$stroke_DASH_linecap,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x1,cljs.core.cst$kw$y2,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$x2,cljs.core.cst$kw$visibility],[((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(30))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(18)))))?0.25:null),"black",((function (y,s__13126__$2,temp__5457__auto__,mouse_over,bassline,current_position){
return (function (){
return cljs.core.reset_BANG_(mouse_over,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
});})(y,s__13126__$2,temp__5457__auto__,mouse_over,bassline,current_position))
,"bevel",y,"butt",((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(30))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(18)))))?0.06:0.2),((function (y,s__13126__$2,temp__5457__auto__,mouse_over,bassline,current_position){
return (function (){
return cljs.core.reset_BANG_(mouse_over,y);
});})(y,s__13126__$2,temp__5457__auto__,mouse_over,bassline,current_position))
,(0),y,"all",63.7,(((((y > (7))) && (cljs.core.even_QMARK_(y)) && ((y < (42)))))?"visible":"hidden")])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,y], null)),mecca$components$staff_$_iter__13125(cljs.core.rest(s__13126__$2)));
}
} else {
return null;
}
break;
}
});})(mouse_over,bassline,current_position))
,null,null));
});})(mouse_over,bassline,current_position))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((38)));
})())], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_clefs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bass_clef], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.treble_clef], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.drum_clef], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bar_line,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,2.75], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,5.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,8.25], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bar_line_solid], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bar_line,(11)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,13.75], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,16.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,19.25], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.ending_bar_repeat], null)], null),(function (){var notes = cljs.core.set((function (){var iter__4324__auto__ = ((function (mouse_over,bassline,current_position){
return (function mecca$components$staff_$_iter__13129(s__13130){
return (new cljs.core.LazySeq(null,((function (mouse_over,bassline,current_position){
return (function (){
var s__13130__$1 = s__13130;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13130__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__13130__$1,x,xs__6012__auto__,temp__5457__auto__,mouse_over,bassline,current_position){
return (function mecca$components$staff_$_iter__13129_$_iter__13131(s__13132){
return (new cljs.core.LazySeq(null,((function (s__13130__$1,x,xs__6012__auto__,temp__5457__auto__,mouse_over,bassline,current_position){
return (function (){
var s__13132__$1 = s__13132;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__13132__$1);
if(temp__5457__auto____$1){
var s__13132__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13132__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13132__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13134 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13133 = (0);
while(true){
if((i__13133 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13133);
cljs.core.chunk_append(b__13134,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__13168 = (i__13133 + (1));
i__13133 = G__13168;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13134),mecca$components$staff_$_iter__13129_$_iter__13131(cljs.core.chunk_rest(s__13132__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13134),null);
}
} else {
var y = cljs.core.first(s__13132__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),mecca$components$staff_$_iter__13129_$_iter__13131(cljs.core.rest(s__13132__$2)));
}
} else {
return null;
}
break;
}
});})(s__13130__$1,x,xs__6012__auto__,temp__5457__auto__,mouse_over,bassline,current_position))
,null,null));
});})(s__13130__$1,x,xs__6012__auto__,temp__5457__auto__,mouse_over,bassline,current_position))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((-6),(19))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,mecca$components$staff_$_iter__13129(cljs.core.rest(s__13130__$1)));
} else {
var G__13169 = cljs.core.rest(s__13130__$1);
s__13130__$1 = G__13169;
continue;
}
} else {
return null;
}
break;
}
});})(mouse_over,bassline,current_position))
,null,null));
});})(mouse_over,bassline,current_position))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((8)));
})());
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (notes,mouse_over,bassline,current_position){
return (function mecca$components$staff_$_iter__13135(s__13136){
return (new cljs.core.LazySeq(null,((function (notes,mouse_over,bassline,current_position){
return (function (){
var s__13136__$1 = s__13136;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13136__$1);
if(temp__5457__auto__){
var s__13136__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13136__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13136__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13138 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13137 = (0);
while(true){
if((i__13137 < size__4323__auto__)){
var vec__13139 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13137);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13139,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13139,(1),null);
cljs.core.chunk_append(b__13138,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.quarter_note,"gray",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__13170 = (i__13137 + (1));
i__13137 = G__13170;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13138),mecca$components$staff_$_iter__13135(cljs.core.chunk_rest(s__13136__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13138),null);
}
} else {
var vec__13142 = cljs.core.first(s__13136__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13142,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13142,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.quarter_note,"gray",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$components$staff_$_iter__13135(cljs.core.rest(s__13136__$2)));
}
} else {
return null;
}
break;
}
});})(notes,mouse_over,bassline,current_position))
,null,null));
});})(notes,mouse_over,bassline,current_position))
;
return iter__4324__auto__(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(notes,cljs.core.set((function (){var iter__4324__auto____$1 = ((function (iter__4324__auto__,notes,mouse_over,bassline,current_position){
return (function mecca$components$staff_$_iter__13145(s__13146){
return (new cljs.core.LazySeq(null,((function (iter__4324__auto__,notes,mouse_over,bassline,current_position){
return (function (){
var s__13146__$1 = s__13146;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13146__$1);
if(temp__5457__auto__){
var s__13146__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13146__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13146__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13148 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13147 = (0);
while(true){
if((i__13147 < size__4323__auto__)){
var map__13149 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13147);
var map__13149__$1 = ((((!((map__13149 == null)))?(((((map__13149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13149):map__13149);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13149__$1,cljs.core.cst$kw$time);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13149__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__13148,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,(pitch - (48))], null));

var G__13171 = (i__13147 + (1));
i__13147 = G__13171;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13148),mecca$components$staff_$_iter__13145(cljs.core.chunk_rest(s__13146__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13148),null);
}
} else {
var map__13151 = cljs.core.first(s__13146__$2);
var map__13151__$1 = ((((!((map__13151 == null)))?(((((map__13151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13151):map__13151);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13151__$1,cljs.core.cst$kw$time);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13151__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,(pitch - (48))], null),mecca$components$staff_$_iter__13145(cljs.core.rest(s__13146__$2)));
}
} else {
return null;
}
break;
}
});})(iter__4324__auto__,notes,mouse_over,bassline,current_position))
,null,null));
});})(iter__4324__auto__,notes,mouse_over,bassline,current_position))
;
return iter__4324__auto____$1(cljs.core.deref(bassline));
})())));
})());
})(),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (mouse_over,bassline,current_position){
return (function mecca$components$staff_$_iter__13153(s__13154){
return (new cljs.core.LazySeq(null,((function (mouse_over,bassline,current_position){
return (function (){
var s__13154__$1 = s__13154;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13154__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__13154__$1,x,xs__6012__auto__,temp__5457__auto__,mouse_over,bassline,current_position){
return (function mecca$components$staff_$_iter__13153_$_iter__13155(s__13156){
return (new cljs.core.LazySeq(null,((function (s__13154__$1,x,xs__6012__auto__,temp__5457__auto__,mouse_over,bassline,current_position){
return (function (){
var s__13156__$1 = s__13156;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__13156__$1);
if(temp__5457__auto____$1){
var s__13156__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13156__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13156__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13158 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13157 = (0);
while(true){
if((i__13157 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13157);
cljs.core.chunk_append(b__13158,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.drum_hit,"gray",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__13172 = (i__13157 + (1));
i__13157 = G__13172;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13158),mecca$components$staff_$_iter__13153_$_iter__13155(cljs.core.chunk_rest(s__13156__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13158),null);
}
} else {
var y = cljs.core.first(s__13156__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.drum_hit,"gray",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$components$staff_$_iter__13153_$_iter__13155(cljs.core.rest(s__13156__$2)));
}
} else {
return null;
}
break;
}
});})(s__13154__$1,x,xs__6012__auto__,temp__5457__auto__,mouse_over,bassline,current_position))
,null,null));
});})(s__13154__$1,x,xs__6012__auto__,temp__5457__auto__,mouse_over,bassline,current_position))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((-11),(-6),(2))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,mecca$components$staff_$_iter__13153(cljs.core.rest(s__13154__$1)));
} else {
var G__13173 = cljs.core.rest(s__13154__$1);
s__13154__$1 = G__13173;
continue;
}
} else {
return null;
}
break;
}
});})(mouse_over,bassline,current_position))
,null,null));
});})(mouse_over,bassline,current_position))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((8)));
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (mouse_over,bassline,current_position){
return (function mecca$components$staff_$_iter__13159(s__13160){
return (new cljs.core.LazySeq(null,((function (mouse_over,bassline,current_position){
return (function (){
var s__13160__$1 = s__13160;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13160__$1);
if(temp__5457__auto__){
var s__13160__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13160__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13160__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13162 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13161 = (0);
while(true){
if((i__13161 < size__4323__auto__)){
var map__13163 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13161);
var map__13163__$1 = ((((!((map__13163 == null)))?(((((map__13163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13163):map__13163);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13163__$1,cljs.core.cst$kw$time);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13163__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__13162,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.quarter_note,"black",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,(pitch - (48))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)));

var G__13174 = (i__13161 + (1));
i__13161 = G__13174;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13162),mecca$components$staff_$_iter__13159(cljs.core.chunk_rest(s__13160__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13162),null);
}
} else {
var map__13165 = cljs.core.first(s__13160__$2);
var map__13165__$1 = ((((!((map__13165 == null)))?(((((map__13165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13165):map__13165);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13165__$1,cljs.core.cst$kw$time);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13165__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.quarter_note,"black",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,(pitch - (48))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)),mecca$components$staff_$_iter__13159(cljs.core.rest(s__13160__$2)));
}
} else {
return null;
}
break;
}
});})(mouse_over,bassline,current_position))
,null,null));
});})(mouse_over,bassline,current_position))
;
return iter__4324__auto__(cljs.core.deref(bassline));
})())], null);
});
;})(mouse_over,bassline,current_position))
});
mecca.components.editor = (function mecca$components$editor(){
var current_position = (function (){var G__13175 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13175) : re_frame.core.subscribe.call(null,G__13175));
})();
var playing_QMARK_ = (function (){var G__13176 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13176) : re_frame.core.subscribe.call(null,G__13176));
})();
return ((function (current_position,playing_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$view_DASH_box,"0 0 480 420"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.music.mario.editor_bg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.staff], null),(cljs.core.truth_(cljs.core.deref(playing_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.play_button_on], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.play_button], null))], null);
});
;})(current_position,playing_QMARK_))
});
mecca.components.mecca = (function mecca$components$mecca(){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"MECCA Music Platform"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"The Music Education, Composition & Creation Application"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.scale_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.key_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.octave_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.tempo_input], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"/images/mariodance72.gif"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
return mecca.music.play_bassline_BANG_();
})], null),"Play Bassline"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Bassline: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13178 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13178) : re_frame.core.subscribe.call(null,G__13178));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13179 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13179) : re_frame.core.subscribe.call(null,G__13179));
})()))," scale from MIDI number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.music.root_note_midi_num())," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13180 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13180) : re_frame.core.subscribe.call(null,G__13180));
})())),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13181 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$octave], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13181) : re_frame.core.subscribe.call(null,G__13181));
})())),"):"].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Tempo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13182 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13182) : re_frame.core.subscribe.call(null,G__13182));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Current position: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13183 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13183) : re_frame.core.subscribe.call(null,G__13183));
})()))].join('')], null)], null);
});
