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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null),(function (){var iter__4324__auto__ = (function mecca$view$note_targets_$_iter__13376(s__13377){
return (new cljs.core.LazySeq(null,(function (){
var s__13377__$1 = s__13377;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13377__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__13377__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function mecca$view$note_targets_$_iter__13376_$_iter__13378(s__13379){
return (new cljs.core.LazySeq(null,((function (s__13377__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__13379__$1 = s__13379;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__13379__$1);
if(temp__5457__auto____$1){
var s__13379__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13379__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13379__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13381 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13380 = (0);
while(true){
if((i__13380 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13380);
cljs.core.chunk_append(b__13381,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$stroke,cljs.core.cst$kw$transform,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$opacity,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(0.5 + y),"black","translate(12.5,0)",((function (i__13380,s__13377__$1,y,c__4322__auto__,size__4323__auto__,b__13381,s__13379__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var G__13382 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13382) : re_frame.core.dispatch.call(null,G__13382));
});})(i__13380,s__13377__$1,y,c__4322__auto__,size__4323__auto__,b__13381,s__13379__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__))
,"gray",(3),((function (i__13380,s__13377__$1,y,c__4322__auto__,size__4323__auto__,b__13381,s__13379__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var G__13383 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_note,x,y], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13383) : re_frame.core.dispatch.call(null,G__13383));
});})(i__13380,s__13377__$1,y,c__4322__auto__,size__4323__auto__,b__13381,s__13379__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__))
,0.2,0.2,((function (i__13380,s__13377__$1,y,c__4322__auto__,size__4323__auto__,b__13381,s__13379__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var G__13384 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13384) : re_frame.core.dispatch.call(null,G__13384));
});})(i__13380,s__13377__$1,y,c__4322__auto__,size__4323__auto__,b__13381,s__13379__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__))
,((3) * x),"all","visible",(1)])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__13388 = (i__13380 + (1));
i__13380 = G__13388;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13381),mecca$view$note_targets_$_iter__13376_$_iter__13378(cljs.core.chunk_rest(s__13379__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13381),null);
}
} else {
var y = cljs.core.first(s__13379__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$stroke,cljs.core.cst$kw$transform,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$opacity,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(0.5 + y),"black","translate(12.5,0)",((function (s__13377__$1,y,s__13379__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var G__13385 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13385) : re_frame.core.dispatch.call(null,G__13385));
});})(s__13377__$1,y,s__13379__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__))
,"gray",(3),((function (s__13377__$1,y,s__13379__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var G__13386 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_note,x,y], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13386) : re_frame.core.dispatch.call(null,G__13386));
});})(s__13377__$1,y,s__13379__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__))
,0.2,0.2,((function (s__13377__$1,y,s__13379__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var G__13387 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13387) : re_frame.core.dispatch.call(null,G__13387));
});})(s__13377__$1,y,s__13379__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__))
,((3) * x),"all","visible",(1)])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$view$note_targets_$_iter__13376_$_iter__13378(cljs.core.rest(s__13379__$2)));
}
} else {
return null;
}
break;
}
});})(s__13377__$1,x,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__13377__$1,x,xs__6012__auto__,temp__5457__auto__))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((34))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,mecca$view$note_targets_$_iter__13376(cljs.core.rest(s__13377__$1)));
} else {
var G__13389 = cljs.core.rest(s__13377__$1);
s__13377__$1 = G__13389;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((16)));
})());
});
mecca.view.editor = (function mecca$view$editor(){
var focused = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
var lead = (function (){var G__13390 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13390) : re_frame.core.subscribe.call(null,G__13390));
})();
var bassline = (function (){var G__13391 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13391) : re_frame.core.subscribe.call(null,G__13391));
})();
var drums = (function (){var G__13392 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13392) : re_frame.core.subscribe.call(null,G__13392));
})();
var current_position = (function (){var G__13393 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13393) : re_frame.core.subscribe.call(null,G__13393));
})();
var editor_beat_start = (function (){var G__13394 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13394) : re_frame.core.subscribe.call(null,G__13394));
})();
var playing_QMARK_ = (function (){var G__13395 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13395) : re_frame.core.subscribe.call(null,G__13395));
})();
var mario_run = (function (){var G__13396 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13396) : re_frame.core.subscribe.call(null,G__13396));
})();
var mario_jump = (function (){var G__13397 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13397) : re_frame.core.subscribe.call(null,G__13397));
})();
var selected_note_value = (function (){var G__13398 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_note_DASH_value], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13398) : re_frame.core.subscribe.call(null,G__13398));
})();
return ((function (focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((20),cljs.core.deref(mario_run))){
var G__13399_13424 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jump_DASH_reset], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13399_13424) : re_frame.core.dispatch.call(null,G__13399_13424));
} else {
}

return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$view_DASH_box,"0 0 64 46"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.cloud,(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.hill,(40)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.castle.brick_face,(363),(18),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.castle.brick_face,(348),(48),(10)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_blocks], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.rest_blocks], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.floor_tile,(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect_SHARP_editorframe,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$fill,"none",cljs.core.cst$kw$height,(31),cljs.core.cst$kw$width,63.5,cljs.core.cst$kw$x,0.25,cljs.core.cst$kw$y,14.5], null)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$staff,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"translate(0,10.5) scale(1)",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"url(images/hand.png),crosshair"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.staff_lines], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.deref(editor_beat_start)))?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.brace], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,-1.68], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_clefs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bass_clef], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.treble_clef], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.drum_clef], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.retract_editor,(8)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,32.7], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.retract_editor,(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,31.5], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.advance_editor], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,(59)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_targets], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function mecca$view$editor_$_iter__13400(s__13401){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function (){
var s__13401__$1 = s__13401;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13401__$1);
if(temp__5457__auto__){
var s__13401__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13401__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13401__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13403 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13402 = (0);
while(true){
if((i__13402 < size__4323__auto__)){
var map__13404 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13402);
var map__13404__$1 = ((((!((map__13404 == null)))?(((((map__13404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13404):map__13404);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13404__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13404__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13404__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__13403,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)));

var G__13425 = (i__13402 + (1));
i__13402 = G__13425;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13403),mecca$view$editor_$_iter__13400(cljs.core.chunk_rest(s__13401__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13403),null);
}
} else {
var map__13406 = cljs.core.first(s__13401__$2);
var map__13406__$1 = ((((!((map__13406 == null)))?(((((map__13406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13406):map__13406);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13406__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13406__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13406__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)),mecca$view$editor_$_iter__13400(cljs.core.rest(s__13401__$2)));
}
} else {
return null;
}
break;
}
});})(focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value))
,null,null));
});})(focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value))
;
return iter__4324__auto__(cljs.core.deref(lead));
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function mecca$view$editor_$_iter__13408(s__13409){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function (){
var s__13409__$1 = s__13409;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13409__$1);
if(temp__5457__auto__){
var s__13409__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13409__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13409__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13411 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13410 = (0);
while(true){
if((i__13410 < size__4323__auto__)){
var map__13412 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13410);
var map__13412__$1 = ((((!((map__13412 == null)))?(((((map__13412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13412):map__13412);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13412__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13412__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13412__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__13411,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)));

var G__13426 = (i__13410 + (1));
i__13410 = G__13426;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13411),mecca$view$editor_$_iter__13408(cljs.core.chunk_rest(s__13409__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13411),null);
}
} else {
var map__13414 = cljs.core.first(s__13409__$2);
var map__13414__$1 = ((((!((map__13414 == null)))?(((((map__13414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13414):map__13414);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13414__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13414__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13414__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)),mecca$view$editor_$_iter__13408(cljs.core.rest(s__13409__$2)));
}
} else {
return null;
}
break;
}
});})(focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value))
,null,null));
});})(focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value))
;
return iter__4324__auto__(cljs.core.deref(bassline));
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function mecca$view$editor_$_iter__13416(s__13417){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function (){
var s__13417__$1 = s__13417;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13417__$1);
if(temp__5457__auto__){
var s__13417__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13417__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13417__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13419 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13418 = (0);
while(true){
if((i__13418 < size__4323__auto__)){
var map__13420 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13418);
var map__13420__$1 = ((((!((map__13420 == null)))?(((((map__13420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13420):map__13420);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13420__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13420__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13420__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__13419,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.drum_hit,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)));

var G__13427 = (i__13418 + (1));
i__13418 = G__13427;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13419),mecca$view$editor_$_iter__13416(cljs.core.chunk_rest(s__13417__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13419),null);
}
} else {
var map__13422 = cljs.core.first(s__13417__$2);
var map__13422__$1 = ((((!((map__13422 == null)))?(((((map__13422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13422):map__13422);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13422__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13422__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13422__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.drum_hit,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)),mecca$view$editor_$_iter__13416(cljs.core.rest(s__13417__$2)));
}
} else {
return null;
}
break;
}
});})(focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value))
,null,null));
});})(focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value))
;
return iter__4324__auto__(cljs.core.deref(drums));
})())], null)], null);
});
;})(focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value))
});
mecca.view.debug_info = (function mecca$view$debug_info(){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Absolute time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13429 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$time], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13429) : re_frame.core.subscribe.call(null,G__13429));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Lead: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13430 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13430) : re_frame.core.subscribe.call(null,G__13430));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Bassline: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13431 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13431) : re_frame.core.subscribe.call(null,G__13431));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Drums: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13432 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13432) : re_frame.core.subscribe.call(null,G__13432));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Mario run: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13433 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13433) : re_frame.core.subscribe.call(null,G__13433));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Mario jump: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13434 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13434) : re_frame.core.subscribe.call(null,G__13434));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Selected note value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13435 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_note_DASH_value], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13435) : re_frame.core.subscribe.call(null,G__13435));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Focused note pos: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13436 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$focused_DASH_note_DASH_pos], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13436) : re_frame.core.subscribe.call(null,G__13436));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13437 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13437) : re_frame.core.subscribe.call(null,G__13437));
})()))," scale from MIDI number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.music.root_note_midi_num())," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13438 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13438) : re_frame.core.subscribe.call(null,G__13438));
})())),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13439 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$octave], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13439) : re_frame.core.subscribe.call(null,G__13439));
})())),"):"].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Tempo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13440 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13440) : re_frame.core.subscribe.call(null,G__13440));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Current position: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13441 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13441) : re_frame.core.subscribe.call(null,G__13441));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Editor beat start: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13442 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13442) : re_frame.core.subscribe.call(null,G__13442));
})()))].join('')], null)], null);
});
mecca.view.mecca = (function mecca$view$mecca(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.editor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.controls], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
return mecca.music.play_bassline_BANG_();
})], null),"Play"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.debug_info], null)], null);
});
