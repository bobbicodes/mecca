// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.view');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('mecca.music');
goog.require('mecca.subs');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('mecca.events');
goog.require('mecca.audio.melody');
goog.require('mecca.audio.sequencer');
goog.require('mecca.audio.scale');
goog.require('mecca.components.notation');
goog.require('mecca.components.castle');
goog.require('mecca.components.key');
goog.require('mecca.components.editor');
goog.require('mecca.mario');
mecca.view.note_targets = (function mecca$view$note_targets(){
var instrument = (function (){var G__14330 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instrument], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14330) : re_frame.core.subscribe.call(null,G__14330));
})();
return ((function (instrument){
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null),(function (){var iter__4324__auto__ = ((function (instrument){
return (function mecca$view$note_targets_$_iter__14331(s__14332){
return (new cljs.core.LazySeq(null,((function (instrument){
return (function (){
var s__14332__$1 = s__14332;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14332__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var time = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__14332__$1,time,xs__6012__auto__,temp__5457__auto__,instrument){
return (function mecca$view$note_targets_$_iter__14331_$_iter__14333(s__14334){
return (new cljs.core.LazySeq(null,((function (s__14332__$1,time,xs__6012__auto__,temp__5457__auto__,instrument){
return (function (){
var s__14334__$1 = s__14334;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__14334__$1);
if(temp__5457__auto____$1){
var s__14334__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14334__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14334__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14336 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14335 = (0);
while(true){
if((i__14335 < size__4323__auto__)){
var pitch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14335);
cljs.core.chunk_append(b__14336,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$stroke,cljs.core.cst$kw$transform,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$opacity,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(0.5 + pitch),"black","translate(12.5,0)",((function (i__14335,s__14332__$1,pitch,c__4322__auto__,size__4323__auto__,b__14336,s__14334__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument){
return (function (){
var G__14337 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14337) : re_frame.core.dispatch.call(null,G__14337));
});})(i__14335,s__14332__$1,pitch,c__4322__auto__,size__4323__auto__,b__14336,s__14334__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument))
,"gray",(3),((function (i__14335,s__14332__$1,pitch,c__4322__auto__,size__4323__auto__,b__14336,s__14334__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument){
return (function (){
var G__14338 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_note,cljs.core.deref(instrument),time,pitch], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14338) : re_frame.core.dispatch.call(null,G__14338));
});})(i__14335,s__14332__$1,pitch,c__4322__auto__,size__4323__auto__,b__14336,s__14334__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument))
,0.2,0.2,((function (i__14335,s__14332__$1,pitch,c__4322__auto__,size__4323__auto__,b__14336,s__14334__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument){
return (function (){
var G__14339 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14339) : re_frame.core.dispatch.call(null,G__14339));
});})(i__14335,s__14332__$1,pitch,c__4322__auto__,size__4323__auto__,b__14336,s__14334__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument))
,((6) * time),"all","hidden",(1)])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)));

var G__14343 = (i__14335 + (1));
i__14335 = G__14343;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14336),mecca$view$note_targets_$_iter__14331_$_iter__14333(cljs.core.chunk_rest(s__14334__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14336),null);
}
} else {
var pitch = cljs.core.first(s__14334__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$stroke,cljs.core.cst$kw$transform,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$opacity,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(0.5 + pitch),"black","translate(12.5,0)",((function (s__14332__$1,pitch,s__14334__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument){
return (function (){
var G__14340 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14340) : re_frame.core.dispatch.call(null,G__14340));
});})(s__14332__$1,pitch,s__14334__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument))
,"gray",(3),((function (s__14332__$1,pitch,s__14334__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument){
return (function (){
var G__14341 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_note,cljs.core.deref(instrument),time,pitch], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14341) : re_frame.core.dispatch.call(null,G__14341));
});})(s__14332__$1,pitch,s__14334__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument))
,0.2,0.2,((function (s__14332__$1,pitch,s__14334__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument){
return (function (){
var G__14342 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14342) : re_frame.core.dispatch.call(null,G__14342));
});})(s__14332__$1,pitch,s__14334__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument))
,((6) * time),"all","hidden",(1)])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)),mecca$view$note_targets_$_iter__14331_$_iter__14333(cljs.core.rest(s__14334__$2)));
}
} else {
return null;
}
break;
}
});})(s__14332__$1,time,xs__6012__auto__,temp__5457__auto__,instrument))
,null,null));
});})(s__14332__$1,time,xs__6012__auto__,temp__5457__auto__,instrument))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((34))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,mecca$view$note_targets_$_iter__14331(cljs.core.rest(s__14332__$1)));
} else {
var G__14344 = cljs.core.rest(s__14332__$1);
s__14332__$1 = G__14344;
continue;
}
} else {
return null;
}
break;
}
});})(instrument))
,null,null));
});})(instrument))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(8),0.5));
})());
});
;})(instrument))
});
mecca.view.editor = (function mecca$view$editor(){
var focused = (function (){var G__14345 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$focused_DASH_note_DASH_pos], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14345) : re_frame.core.subscribe.call(null,G__14345));
})();
var mario_note = (function (){var G__14346 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14346) : re_frame.core.subscribe.call(null,G__14346));
})();
var lead = (function (){var G__14347 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14347) : re_frame.core.subscribe.call(null,G__14347));
})();
var bassline = (function (){var G__14348 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14348) : re_frame.core.subscribe.call(null,G__14348));
})();
var drums = (function (){var G__14349 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14349) : re_frame.core.subscribe.call(null,G__14349));
})();
var current_position = (function (){var G__14350 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14350) : re_frame.core.subscribe.call(null,G__14350));
})();
var editor_beat_start = (function (){var G__14351 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14351) : re_frame.core.subscribe.call(null,G__14351));
})();
var playing_QMARK_ = (function (){var G__14352 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14352) : re_frame.core.subscribe.call(null,G__14352));
})();
var mario_run = (function (){var G__14353 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14353) : re_frame.core.subscribe.call(null,G__14353));
})();
var mario_jump = (function (){var G__14354 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14354) : re_frame.core.subscribe.call(null,G__14354));
})();
var instrument = (function (){var G__14355 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instrument], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14355) : re_frame.core.subscribe.call(null,G__14355));
})();
return ((function (focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,instrument){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((20),cljs.core.deref(mario_run))){
var G__14356_14393 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jump_DASH_reset], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14356_14393) : re_frame.core.dispatch.call(null,G__14356_14393));
} else {
}

return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$view_DASH_box,"0 0 64 46"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.cloud,(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.hill,(40)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.castle.brick_face,(363),(18),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.castle.brick_face,(348),(48),(10)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.current_note_display,(59),(0),0.22], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_blocks], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.rest_blocks], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.floor_tile,(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect_SHARP_editorframe,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$fill,"none",cljs.core.cst$kw$height,(31),cljs.core.cst$kw$width,63.5,cljs.core.cst$kw$x,0.25,cljs.core.cst$kw$y,14.5], null)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$staff,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"translate(0,10.5) scale(1)",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"url(./images/hand.png),crosshair"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.staff_lines], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.deref(editor_beat_start)))?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.brace], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,-1.68], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_clefs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bass_clef], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.treble_clef], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.drum_clef], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.retract_editor,(8)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,32.7], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.retract_editor,(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,31.5], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.advance_editor], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,(59)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_targets], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(focused),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)))?null:(function (){var vec__14357 = cljs.core.deref(focused);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14357,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14357,(1),null);
var G__14360 = cljs.core.deref(instrument);
var G__14360__$1 = (((G__14360 instanceof cljs.core.Keyword))?G__14360.fqn:null);
switch (G__14360__$1) {
case "mario":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_icon,((32) + ((30) * x)),(((5) * y) - (5)),0.2], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14360__$1)].join('')));

}
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,instrument){
return (function mecca$view$editor_$_iter__14361(s__14362){
return (new cljs.core.LazySeq(null,((function (focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,instrument){
return (function (){
var s__14362__$1 = s__14362;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14362__$1);
if(temp__5457__auto__){
var s__14362__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14362__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14362__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14364 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14363 = (0);
while(true){
if((i__14363 < size__4323__auto__)){
var map__14365 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14363);
var map__14365__$1 = ((((!((map__14365 == null)))?(((((map__14365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14365):map__14365);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14365__$1,cljs.core.cst$kw$time);
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14365__$1,cljs.core.cst$kw$_);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14365__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__14364,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_note,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)));

var G__14395 = (i__14363 + (1));
i__14363 = G__14395;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14364),mecca$view$editor_$_iter__14361(cljs.core.chunk_rest(s__14362__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14364),null);
}
} else {
var map__14367 = cljs.core.first(s__14362__$2);
var map__14367__$1 = ((((!((map__14367 == null)))?(((((map__14367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14367):map__14367);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14367__$1,cljs.core.cst$kw$time);
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14367__$1,cljs.core.cst$kw$_);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14367__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_note,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)),mecca$view$editor_$_iter__14361(cljs.core.rest(s__14362__$2)));
}
} else {
return null;
}
break;
}
});})(focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,instrument))
,null,null));
});})(focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,instrument))
;
return iter__4324__auto__(cljs.core.deref(mario_note));
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,instrument){
return (function mecca$view$editor_$_iter__14369(s__14370){
return (new cljs.core.LazySeq(null,((function (focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,instrument){
return (function (){
var s__14370__$1 = s__14370;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14370__$1);
if(temp__5457__auto__){
var s__14370__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14370__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14370__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14372 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14371 = (0);
while(true){
if((i__14371 < size__4323__auto__)){
var map__14373 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14371);
var map__14373__$1 = ((((!((map__14373 == null)))?(((((map__14373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14373):map__14373);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14373__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14373__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14373__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__14372,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)));

var G__14396 = (i__14371 + (1));
i__14371 = G__14396;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14372),mecca$view$editor_$_iter__14369(cljs.core.chunk_rest(s__14370__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14372),null);
}
} else {
var map__14375 = cljs.core.first(s__14370__$2);
var map__14375__$1 = ((((!((map__14375 == null)))?(((((map__14375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14375):map__14375);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14375__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14375__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14375__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)),mecca$view$editor_$_iter__14369(cljs.core.rest(s__14370__$2)));
}
} else {
return null;
}
break;
}
});})(focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,instrument))
,null,null));
});})(focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,instrument))
;
return iter__4324__auto__(cljs.core.deref(lead));
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,instrument){
return (function mecca$view$editor_$_iter__14377(s__14378){
return (new cljs.core.LazySeq(null,((function (focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,instrument){
return (function (){
var s__14378__$1 = s__14378;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14378__$1);
if(temp__5457__auto__){
var s__14378__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14378__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14378__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14380 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14379 = (0);
while(true){
if((i__14379 < size__4323__auto__)){
var map__14381 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14379);
var map__14381__$1 = ((((!((map__14381 == null)))?(((((map__14381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14381):map__14381);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14381__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14381__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14381__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__14380,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)));

var G__14397 = (i__14379 + (1));
i__14379 = G__14397;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14380),mecca$view$editor_$_iter__14377(cljs.core.chunk_rest(s__14378__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14380),null);
}
} else {
var map__14383 = cljs.core.first(s__14378__$2);
var map__14383__$1 = ((((!((map__14383 == null)))?(((((map__14383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14383):map__14383);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14383__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14383__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14383__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)),mecca$view$editor_$_iter__14377(cljs.core.rest(s__14378__$2)));
}
} else {
return null;
}
break;
}
});})(focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,instrument))
,null,null));
});})(focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,instrument))
;
return iter__4324__auto__(cljs.core.deref(bassline));
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,instrument){
return (function mecca$view$editor_$_iter__14385(s__14386){
return (new cljs.core.LazySeq(null,((function (focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,instrument){
return (function (){
var s__14386__$1 = s__14386;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14386__$1);
if(temp__5457__auto__){
var s__14386__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14386__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14386__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14388 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14387 = (0);
while(true){
if((i__14387 < size__4323__auto__)){
var map__14389 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14387);
var map__14389__$1 = ((((!((map__14389 == null)))?(((((map__14389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14389):map__14389);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14389__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14389__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14389__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__14388,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.drum_hit,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)));

var G__14398 = (i__14387 + (1));
i__14387 = G__14398;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14388),mecca$view$editor_$_iter__14385(cljs.core.chunk_rest(s__14386__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14388),null);
}
} else {
var map__14391 = cljs.core.first(s__14386__$2);
var map__14391__$1 = ((((!((map__14391 == null)))?(((((map__14391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14391):map__14391);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14391__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14391__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14391__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.drum_hit,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)),mecca$view$editor_$_iter__14385(cljs.core.rest(s__14386__$2)));
}
} else {
return null;
}
break;
}
});})(focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,instrument))
,null,null));
});})(focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,instrument))
;
return iter__4324__auto__(cljs.core.deref(drums));
})())], null)], null);
});
;})(focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,instrument))
});
mecca.view.debug_info = (function mecca$view$debug_info(){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Absolute time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__14400 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$time], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14400) : re_frame.core.subscribe.call(null,G__14400));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Mario notes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__14401 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14401) : re_frame.core.subscribe.call(null,G__14401));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Mario run: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__14402 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14402) : re_frame.core.subscribe.call(null,G__14402));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Mario jump: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__14403 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14403) : re_frame.core.subscribe.call(null,G__14403));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Instrument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__14404 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instrument], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14404) : re_frame.core.subscribe.call(null,G__14404));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Focused note pos: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__14405 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$focused_DASH_note_DASH_pos], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14405) : re_frame.core.subscribe.call(null,G__14405));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__14406 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14406) : re_frame.core.subscribe.call(null,G__14406));
})()))," scale from MIDI number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.music.root_note_midi_num())," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__14407 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14407) : re_frame.core.subscribe.call(null,G__14407));
})())),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__14408 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$octave], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14408) : re_frame.core.subscribe.call(null,G__14408));
})())),"):"].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Tempo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__14409 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14409) : re_frame.core.subscribe.call(null,G__14409));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Current position: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__14410 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14410) : re_frame.core.subscribe.call(null,G__14410));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Editor beat start: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__14411 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14411) : re_frame.core.subscribe.call(null,G__14411));
})()))].join('')], null)], null);
});
mecca.view.mecca = (function mecca$view$mecca(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.editor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.controls], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
return mecca.music.play_bassline_BANG_();
})], null),"Play"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.debug_info], null)], null);
});
