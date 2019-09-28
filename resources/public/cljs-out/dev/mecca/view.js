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
var instrument = (function (){var G__20096 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instrument], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20096) : re_frame.core.subscribe.call(null,G__20096));
})();
return ((function (instrument){
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null),(function (){var iter__4324__auto__ = ((function (instrument){
return (function mecca$view$note_targets_$_iter__20097(s__20098){
return (new cljs.core.LazySeq(null,((function (instrument){
return (function (){
var s__20098__$1 = s__20098;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__20098__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var time = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__20098__$1,time,xs__6012__auto__,temp__5457__auto__,instrument){
return (function mecca$view$note_targets_$_iter__20097_$_iter__20099(s__20100){
return (new cljs.core.LazySeq(null,((function (s__20098__$1,time,xs__6012__auto__,temp__5457__auto__,instrument){
return (function (){
var s__20100__$1 = s__20100;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__20100__$1);
if(temp__5457__auto____$1){
var s__20100__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20100__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__20100__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__20102 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__20101 = (0);
while(true){
if((i__20101 < size__4323__auto__)){
var pitch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__20101);
cljs.core.chunk_append(b__20102,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$stroke,cljs.core.cst$kw$transform,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$opacity,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(0.5 + pitch),"black","translate(12.5,0)",((function (i__20101,s__20098__$1,pitch,c__4322__auto__,size__4323__auto__,b__20102,s__20100__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument){
return (function (){
var G__20103 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20103) : re_frame.core.dispatch.call(null,G__20103));
});})(i__20101,s__20098__$1,pitch,c__4322__auto__,size__4323__auto__,b__20102,s__20100__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument))
,"gray",(3),((function (i__20101,s__20098__$1,pitch,c__4322__auto__,size__4323__auto__,b__20102,s__20100__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument){
return (function (){
var G__20104 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_note,cljs.core.deref(instrument),time,pitch], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20104) : re_frame.core.dispatch.call(null,G__20104));
});})(i__20101,s__20098__$1,pitch,c__4322__auto__,size__4323__auto__,b__20102,s__20100__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument))
,0.2,0.2,((function (i__20101,s__20098__$1,pitch,c__4322__auto__,size__4323__auto__,b__20102,s__20100__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument){
return (function (){
var G__20105 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20105) : re_frame.core.dispatch.call(null,G__20105));
});})(i__20101,s__20098__$1,pitch,c__4322__auto__,size__4323__auto__,b__20102,s__20100__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument))
,((6) * time),"all","hidden",(1)])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)));

var G__20109 = (i__20101 + (1));
i__20101 = G__20109;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20102),mecca$view$note_targets_$_iter__20097_$_iter__20099(cljs.core.chunk_rest(s__20100__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20102),null);
}
} else {
var pitch = cljs.core.first(s__20100__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$stroke,cljs.core.cst$kw$transform,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$opacity,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(0.5 + pitch),"black","translate(12.5,0)",((function (s__20098__$1,pitch,s__20100__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument){
return (function (){
var G__20106 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20106) : re_frame.core.dispatch.call(null,G__20106));
});})(s__20098__$1,pitch,s__20100__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument))
,"gray",(3),((function (s__20098__$1,pitch,s__20100__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument){
return (function (){
var G__20107 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_note,cljs.core.deref(instrument),time,pitch], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20107) : re_frame.core.dispatch.call(null,G__20107));
});})(s__20098__$1,pitch,s__20100__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument))
,0.2,0.2,((function (s__20098__$1,pitch,s__20100__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument){
return (function (){
var G__20108 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20108) : re_frame.core.dispatch.call(null,G__20108));
});})(s__20098__$1,pitch,s__20100__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument))
,((6) * time),"all","hidden",(1)])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)),mecca$view$note_targets_$_iter__20097_$_iter__20099(cljs.core.rest(s__20100__$2)));
}
} else {
return null;
}
break;
}
});})(s__20098__$1,time,xs__6012__auto__,temp__5457__auto__,instrument))
,null,null));
});})(s__20098__$1,time,xs__6012__auto__,temp__5457__auto__,instrument))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((34))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,mecca$view$note_targets_$_iter__20097(cljs.core.rest(s__20098__$1)));
} else {
var G__20110 = cljs.core.rest(s__20098__$1);
s__20098__$1 = G__20110;
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
var instruments = (function (){var G__20111 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instruments], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20111) : re_frame.core.subscribe.call(null,G__20111));
})();
var focused = (function (){var G__20112 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$focused_DASH_note_DASH_pos], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20112) : re_frame.core.subscribe.call(null,G__20112));
})();
var current_position = (function (){var G__20113 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20113) : re_frame.core.subscribe.call(null,G__20113));
})();
var editor_beat_start = (function (){var G__20114 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20114) : re_frame.core.subscribe.call(null,G__20114));
})();
var playing_QMARK_ = (function (){var G__20115 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20115) : re_frame.core.subscribe.call(null,G__20115));
})();
var mario_run = (function (){var G__20116 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20116) : re_frame.core.subscribe.call(null,G__20116));
})();
var mario_jump = (function (){var G__20117 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20117) : re_frame.core.subscribe.call(null,G__20117));
})();
var instrument = (function (){var G__20118 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instrument], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20118) : re_frame.core.subscribe.call(null,G__20118));
})();
return ((function (instruments,focused,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,instrument){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((20),cljs.core.deref(mario_run))){
var G__20119_20134 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jump_DASH_reset], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20119_20134) : re_frame.core.dispatch.call(null,G__20119_20134));
} else {
}

return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$view_DASH_box,"0 0 64 46"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.cloud,(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.hill,(40)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.castle.brick_face,(363),(18),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.castle.brick_face,(348),(48),(10)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.current_note_display,(47),(0),0.22], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_blocks], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.floor_tile,(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect_SHARP_editorframe,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$fill,"none",cljs.core.cst$kw$height,(31),cljs.core.cst$kw$width,63.5,cljs.core.cst$kw$x,0.25,cljs.core.cst$kw$y,14.5], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$staff,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"translate(0,10.5) scale(1)",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"url(./images/hand.png),crosshair"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.staff_lines], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.deref(editor_beat_start)))?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.brace], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,-1.68], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_clefs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bass_clef], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.treble_clef], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.retract_editor,(8)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,32.7], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.retract_editor,(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,31.5], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.advance_editor], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,(59)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_targets], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(focused),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)))?null:(function (){var vec__20120 = cljs.core.deref(focused);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20120,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20120,(1),null);
var G__20123 = cljs.core.deref(instrument);
switch (G__20123) {
case (1):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_icon,((32) + ((30) * x)),(((5) * y) - (5)),0.2], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.shroom,((62) + ((30) * x)),(((5) * y) - (5)),0.2], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.yoshi,((62) + ((30) * x)),(((5) * y) - (5)),0.2], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.star,((62) + ((30) * x)),(((5) * y) - (5)),0.2], null);

break;
case (5):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.flower,((62) + ((30) * x)),(((5) * y) - (5)),0.2], null);

break;
case (6):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.gb,((62) + ((30) * x)),(((5) * y) - (5)),0.2], null);

break;
case (7):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.dog,((62) + ((30) * x)),(((5) * y) - (5)),0.2], null);

break;
case (8):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.kitty,((62) + ((30) * x)),(((5) * y) - (5)),0.2], null);

break;
case (9):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.pig,((62) + ((30) * x)),(((5) * y) - (5)),0.2], null);

break;
case (10):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.swan,((62) + ((30) * x)),(((5) * y) - (5)),0.2], null);

break;
case (11):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.face,((62) + ((30) * x)),(((5) * y) - (5)),0.2], null);

break;
case (12):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.plane,((62) + ((30) * x)),(((5) * y) - (5)),0.2], null);

break;
case (13):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.boat,((62) + ((30) * x)),(((5) * y) - (5)),0.2], null);

break;
case (14):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.car,((62) + ((30) * x)),(((5) * y) - (5)),0.2], null);

break;
case (15):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.heart,((62) + ((30) * x)),(((5) * y) - (5)),0.2], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20123)].join('')));

}
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (instruments,focused,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,instrument){
return (function mecca$view$editor_$_iter__20124(s__20125){
return (new cljs.core.LazySeq(null,((function (instruments,focused,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,instrument){
return (function (){
var s__20125__$1 = s__20125;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__20125__$1);
if(temp__5457__auto__){
var s__20125__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20125__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__20125__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__20127 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__20126 = (0);
while(true){
if((i__20126 < size__4323__auto__)){
var map__20128 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__20126);
var map__20128__$1 = ((((!((map__20128 == null)))?(((((map__20128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20128):map__20128);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20128__$1,cljs.core.cst$kw$time);
var instrument__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20128__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20128__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__20127,(function (){var G__20130 = instrument__$1;
switch (G__20130) {
case (1):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_note,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.shroom,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.yoshi,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.star,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
case (5):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.flower,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
case (6):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.gb,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
case (7):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.dog,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
case (8):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.kitty,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
case (9):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.pig,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
case (10):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.swan,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
case (11):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.face,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
case (12):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.plane,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
case (13):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.boat,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
case (14):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.car,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
case (15):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.heart,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20130)].join('')));

}
})());

var G__20137 = (i__20126 + (1));
i__20126 = G__20137;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20127),mecca$view$editor_$_iter__20124(cljs.core.chunk_rest(s__20125__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20127),null);
}
} else {
var map__20131 = cljs.core.first(s__20125__$2);
var map__20131__$1 = ((((!((map__20131 == null)))?(((((map__20131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20131):map__20131);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20131__$1,cljs.core.cst$kw$time);
var instrument__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20131__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20131__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons((function (){var G__20133 = instrument__$1;
switch (G__20133) {
case (1):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_note,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.shroom,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.yoshi,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.star,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
case (5):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.flower,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
case (6):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.gb,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
case (7):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.dog,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
case (8):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.kitty,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
case (9):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.pig,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
case (10):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.swan,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
case (11):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.face,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
case (12):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.plane,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
case (13):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.boat,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
case (14):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.car,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
case (15):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.heart,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20133)].join('')));

}
})(),mecca$view$editor_$_iter__20124(cljs.core.rest(s__20125__$2)));
}
} else {
return null;
}
break;
}
});})(instruments,focused,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,instrument))
,null,null));
});})(instruments,focused,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,instrument))
;
return iter__4324__auto__(cljs.core.deref(instruments));
})())], null)], null);
});
;})(instruments,focused,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,instrument))
});
mecca.view.debug_info = (function mecca$view$debug_info(){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Absolute time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__20139 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$time], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20139) : re_frame.core.subscribe.call(null,G__20139));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Notes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__20140 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instruments], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20140) : re_frame.core.subscribe.call(null,G__20140));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Mario run: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__20141 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20141) : re_frame.core.subscribe.call(null,G__20141));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Mario jump: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__20142 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20142) : re_frame.core.subscribe.call(null,G__20142));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Instrument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__20143 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instrument], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20143) : re_frame.core.subscribe.call(null,G__20143));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Focused note pos: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__20144 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$focused_DASH_note_DASH_pos], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20144) : re_frame.core.subscribe.call(null,G__20144));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Tempo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__20145 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20145) : re_frame.core.subscribe.call(null,G__20145));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Current position: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__20146 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20146) : re_frame.core.subscribe.call(null,G__20146));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Editor beat start: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__20147 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20147) : re_frame.core.subscribe.call(null,G__20147));
})()))].join('')], null)], null);
});
mecca.view.mecca = (function mecca$view$mecca(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.editor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.controls], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.debug_info], null)], null);
});
