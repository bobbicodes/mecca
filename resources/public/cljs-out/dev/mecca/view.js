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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null),(function (){var iter__4324__auto__ = (function mecca$view$note_targets_$_iter__11515(s__11516){
return (new cljs.core.LazySeq(null,(function (){
var s__11516__$1 = s__11516;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__11516__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__11516__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function mecca$view$note_targets_$_iter__11515_$_iter__11517(s__11518){
return (new cljs.core.LazySeq(null,((function (s__11516__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__11518__$1 = s__11518;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__11518__$1);
if(temp__5457__auto____$1){
var s__11518__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__11518__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__11518__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__11520 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__11519 = (0);
while(true){
if((i__11519 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__11519);
cljs.core.chunk_append(b__11520,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$stroke,cljs.core.cst$kw$transform,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$opacity,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(0.5 + y),"black","translate(12.5,0)",((function (i__11519,s__11516__$1,y,c__4322__auto__,size__4323__auto__,b__11520,s__11518__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var G__11521 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__11521) : re_frame.core.dispatch.call(null,G__11521));
});})(i__11519,s__11516__$1,y,c__4322__auto__,size__4323__auto__,b__11520,s__11518__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__))
,"gray",(3),((function (i__11519,s__11516__$1,y,c__4322__auto__,size__4323__auto__,b__11520,s__11518__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var G__11522 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_note,x,y], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__11522) : re_frame.core.dispatch.call(null,G__11522));
});})(i__11519,s__11516__$1,y,c__4322__auto__,size__4323__auto__,b__11520,s__11518__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__))
,0.2,0.2,((function (i__11519,s__11516__$1,y,c__4322__auto__,size__4323__auto__,b__11520,s__11518__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var G__11523 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__11523) : re_frame.core.dispatch.call(null,G__11523));
});})(i__11519,s__11516__$1,y,c__4322__auto__,size__4323__auto__,b__11520,s__11518__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__))
,((3) * x),"all","visible",(1)])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__11527 = (i__11519 + (1));
i__11519 = G__11527;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11520),mecca$view$note_targets_$_iter__11515_$_iter__11517(cljs.core.chunk_rest(s__11518__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11520),null);
}
} else {
var y = cljs.core.first(s__11518__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$stroke,cljs.core.cst$kw$transform,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$opacity,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(0.5 + y),"black","translate(12.5,0)",((function (s__11516__$1,y,s__11518__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var G__11524 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__11524) : re_frame.core.dispatch.call(null,G__11524));
});})(s__11516__$1,y,s__11518__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__))
,"gray",(3),((function (s__11516__$1,y,s__11518__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var G__11525 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_note,x,y], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__11525) : re_frame.core.dispatch.call(null,G__11525));
});})(s__11516__$1,y,s__11518__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__))
,0.2,0.2,((function (s__11516__$1,y,s__11518__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var G__11526 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__11526) : re_frame.core.dispatch.call(null,G__11526));
});})(s__11516__$1,y,s__11518__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__))
,((3) * x),"all","visible",(1)])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$view$note_targets_$_iter__11515_$_iter__11517(cljs.core.rest(s__11518__$2)));
}
} else {
return null;
}
break;
}
});})(s__11516__$1,x,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__11516__$1,x,xs__6012__auto__,temp__5457__auto__))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((34))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,mecca$view$note_targets_$_iter__11515(cljs.core.rest(s__11516__$1)));
} else {
var G__11528 = cljs.core.rest(s__11516__$1);
s__11516__$1 = G__11528;
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
var lead = (function (){var G__11529 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11529) : re_frame.core.subscribe.call(null,G__11529));
})();
var bassline = (function (){var G__11530 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11530) : re_frame.core.subscribe.call(null,G__11530));
})();
var drums = (function (){var G__11531 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11531) : re_frame.core.subscribe.call(null,G__11531));
})();
var current_position = (function (){var G__11532 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11532) : re_frame.core.subscribe.call(null,G__11532));
})();
var editor_beat_start = (function (){var G__11533 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11533) : re_frame.core.subscribe.call(null,G__11533));
})();
var playing_QMARK_ = (function (){var G__11534 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11534) : re_frame.core.subscribe.call(null,G__11534));
})();
var mario_run = (function (){var G__11535 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11535) : re_frame.core.subscribe.call(null,G__11535));
})();
var mario_jump = (function (){var G__11536 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11536) : re_frame.core.subscribe.call(null,G__11536));
})();
var selected_note_value = (function (){var G__11537 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_note_DASH_value], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11537) : re_frame.core.subscribe.call(null,G__11537));
})();
return ((function (focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((20),cljs.core.deref(mario_run))){
var G__11538_11563 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jump_DASH_reset], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__11538_11563) : re_frame.core.dispatch.call(null,G__11538_11563));
} else {
}

return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$view_DASH_box,"0 0 64 46"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.cloud,(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.hill,(40)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.castle.brick_face,(363),(18),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.castle.brick_face,(348),(48),(10)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_blocks], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.rest_blocks], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.floor_tile,(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect_SHARP_editorframe,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$fill,"none",cljs.core.cst$kw$height,(31),cljs.core.cst$kw$width,63.5,cljs.core.cst$kw$x,0.25,cljs.core.cst$kw$y,14.5], null)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$staff,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"translate(0,10.5) scale(1)",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"url(resources/public/images/hand.png),crosshair"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.staff_lines], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.deref(editor_beat_start)))?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.brace], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,-1.68], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_clefs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bass_clef], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.treble_clef], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.drum_clef], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.retract_editor,(8)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,32.7], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.retract_editor,(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,31.5], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.advance_editor], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,(59)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_targets], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function mecca$view$editor_$_iter__11539(s__11540){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function (){
var s__11540__$1 = s__11540;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__11540__$1);
if(temp__5457__auto__){
var s__11540__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11540__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__11540__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__11542 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__11541 = (0);
while(true){
if((i__11541 < size__4323__auto__)){
var map__11543 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__11541);
var map__11543__$1 = ((((!((map__11543 == null)))?(((((map__11543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11543):map__11543);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11543__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11543__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11543__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__11542,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)));

var G__11564 = (i__11541 + (1));
i__11541 = G__11564;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11542),mecca$view$editor_$_iter__11539(cljs.core.chunk_rest(s__11540__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11542),null);
}
} else {
var map__11545 = cljs.core.first(s__11540__$2);
var map__11545__$1 = ((((!((map__11545 == null)))?(((((map__11545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11545):map__11545);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11545__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11545__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11545__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)),mecca$view$editor_$_iter__11539(cljs.core.rest(s__11540__$2)));
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
return (function mecca$view$editor_$_iter__11547(s__11548){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function (){
var s__11548__$1 = s__11548;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__11548__$1);
if(temp__5457__auto__){
var s__11548__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11548__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__11548__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__11550 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__11549 = (0);
while(true){
if((i__11549 < size__4323__auto__)){
var map__11551 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__11549);
var map__11551__$1 = ((((!((map__11551 == null)))?(((((map__11551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11551):map__11551);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11551__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11551__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11551__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__11550,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)));

var G__11565 = (i__11549 + (1));
i__11549 = G__11565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11550),mecca$view$editor_$_iter__11547(cljs.core.chunk_rest(s__11548__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11550),null);
}
} else {
var map__11553 = cljs.core.first(s__11548__$2);
var map__11553__$1 = ((((!((map__11553 == null)))?(((((map__11553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11553):map__11553);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11553__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11553__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11553__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)),mecca$view$editor_$_iter__11547(cljs.core.rest(s__11548__$2)));
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
return (function mecca$view$editor_$_iter__11555(s__11556){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function (){
var s__11556__$1 = s__11556;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__11556__$1);
if(temp__5457__auto__){
var s__11556__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11556__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__11556__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__11558 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__11557 = (0);
while(true){
if((i__11557 < size__4323__auto__)){
var map__11559 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__11557);
var map__11559__$1 = ((((!((map__11559 == null)))?(((((map__11559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11559):map__11559);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11559__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11559__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11559__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__11558,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.drum_hit,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)));

var G__11566 = (i__11557 + (1));
i__11557 = G__11566;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11558),mecca$view$editor_$_iter__11555(cljs.core.chunk_rest(s__11556__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11558),null);
}
} else {
var map__11561 = cljs.core.first(s__11556__$2);
var map__11561__$1 = ((((!((map__11561 == null)))?(((((map__11561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11561):map__11561);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11561__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11561__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11561__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.drum_hit,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)),mecca$view$editor_$_iter__11555(cljs.core.rest(s__11556__$2)));
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
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Absolute time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__11568 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$time], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11568) : re_frame.core.subscribe.call(null,G__11568));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Lead: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__11569 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11569) : re_frame.core.subscribe.call(null,G__11569));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Bassline: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__11570 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11570) : re_frame.core.subscribe.call(null,G__11570));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Drums: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__11571 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11571) : re_frame.core.subscribe.call(null,G__11571));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Mario run: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__11572 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11572) : re_frame.core.subscribe.call(null,G__11572));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Mario jump: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__11573 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11573) : re_frame.core.subscribe.call(null,G__11573));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Selected note value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__11574 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_note_DASH_value], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11574) : re_frame.core.subscribe.call(null,G__11574));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Focused note pos: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__11575 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$focused_DASH_note_DASH_pos], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11575) : re_frame.core.subscribe.call(null,G__11575));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__11576 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11576) : re_frame.core.subscribe.call(null,G__11576));
})()))," scale from MIDI number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.music.root_note_midi_num())," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__11577 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11577) : re_frame.core.subscribe.call(null,G__11577));
})())),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__11578 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$octave], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11578) : re_frame.core.subscribe.call(null,G__11578));
})())),"):"].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Tempo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__11579 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11579) : re_frame.core.subscribe.call(null,G__11579));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Current position: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__11580 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11580) : re_frame.core.subscribe.call(null,G__11580));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Editor beat start: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__11581 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11581) : re_frame.core.subscribe.call(null,G__11581));
})()))].join('')], null)], null);
});
mecca.view.mecca = (function mecca$view$mecca(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.editor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.controls], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
return mecca.music.play_bassline_BANG_();
})], null),"Play"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.debug_info], null)], null);
});
