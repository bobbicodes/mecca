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
var note = (function (){var G__14315 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_note], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14315) : re_frame.core.subscribe.call(null,G__14315));
})();
return ((function (note){
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null),(function (){var iter__4324__auto__ = ((function (note){
return (function mecca$view$note_targets_$_iter__14316(s__14317){
return (new cljs.core.LazySeq(null,((function (note){
return (function (){
var s__14317__$1 = s__14317;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14317__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__14317__$1,x,xs__6012__auto__,temp__5457__auto__,note){
return (function mecca$view$note_targets_$_iter__14316_$_iter__14318(s__14319){
return (new cljs.core.LazySeq(null,((function (s__14317__$1,x,xs__6012__auto__,temp__5457__auto__,note){
return (function (){
var s__14319__$1 = s__14319;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__14319__$1);
if(temp__5457__auto____$1){
var s__14319__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14319__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14319__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14321 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14320 = (0);
while(true){
if((i__14320 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14320);
cljs.core.chunk_append(b__14321,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$stroke,cljs.core.cst$kw$transform,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$opacity,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(0.5 + y),"black","translate(12.5,0)",((function (i__14320,s__14317__$1,y,c__4322__auto__,size__4323__auto__,b__14321,s__14319__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,note){
return (function (){
var G__14322 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14322) : re_frame.core.dispatch.call(null,G__14322));
});})(i__14320,s__14317__$1,y,c__4322__auto__,size__4323__auto__,b__14321,s__14319__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,note))
,"gray",(3),((function (i__14320,s__14317__$1,y,c__4322__auto__,size__4323__auto__,b__14321,s__14319__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,note){
return (function (){
var G__14323 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_note,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(note))], null),x,y], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14323) : re_frame.core.dispatch.call(null,G__14323));
});})(i__14320,s__14317__$1,y,c__4322__auto__,size__4323__auto__,b__14321,s__14319__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,note))
,0.2,0.2,((function (i__14320,s__14317__$1,y,c__4322__auto__,size__4323__auto__,b__14321,s__14319__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,note){
return (function (){
var G__14324 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14324) : re_frame.core.dispatch.call(null,G__14324));
});})(i__14320,s__14317__$1,y,c__4322__auto__,size__4323__auto__,b__14321,s__14319__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,note))
,((6) * x),"all","hidden",(1)])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__14328 = (i__14320 + (1));
i__14320 = G__14328;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14321),mecca$view$note_targets_$_iter__14316_$_iter__14318(cljs.core.chunk_rest(s__14319__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14321),null);
}
} else {
var y = cljs.core.first(s__14319__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$stroke,cljs.core.cst$kw$transform,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$opacity,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(0.5 + y),"black","translate(12.5,0)",((function (s__14317__$1,y,s__14319__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,note){
return (function (){
var G__14325 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14325) : re_frame.core.dispatch.call(null,G__14325));
});})(s__14317__$1,y,s__14319__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,note))
,"gray",(3),((function (s__14317__$1,y,s__14319__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,note){
return (function (){
var G__14326 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_note,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(note))], null),x,y], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14326) : re_frame.core.dispatch.call(null,G__14326));
});})(s__14317__$1,y,s__14319__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,note))
,0.2,0.2,((function (s__14317__$1,y,s__14319__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,note){
return (function (){
var G__14327 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14327) : re_frame.core.dispatch.call(null,G__14327));
});})(s__14317__$1,y,s__14319__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,note))
,((6) * x),"all","hidden",(1)])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$view$note_targets_$_iter__14316_$_iter__14318(cljs.core.rest(s__14319__$2)));
}
} else {
return null;
}
break;
}
});})(s__14317__$1,x,xs__6012__auto__,temp__5457__auto__,note))
,null,null));
});})(s__14317__$1,x,xs__6012__auto__,temp__5457__auto__,note))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((34))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,mecca$view$note_targets_$_iter__14316(cljs.core.rest(s__14317__$1)));
} else {
var G__14329 = cljs.core.rest(s__14317__$1);
s__14317__$1 = G__14329;
continue;
}
} else {
return null;
}
break;
}
});})(note))
,null,null));
});})(note))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(8),0.5));
})());
});
;})(note))
});
mecca.view.editor = (function mecca$view$editor(){
var focused = (function (){var G__14330 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$focused_DASH_note_DASH_pos], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14330) : re_frame.core.subscribe.call(null,G__14330));
})();
var mario_note = (function (){var G__14331 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14331) : re_frame.core.subscribe.call(null,G__14331));
})();
var lead = (function (){var G__14332 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14332) : re_frame.core.subscribe.call(null,G__14332));
})();
var bassline = (function (){var G__14333 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14333) : re_frame.core.subscribe.call(null,G__14333));
})();
var drums = (function (){var G__14334 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14334) : re_frame.core.subscribe.call(null,G__14334));
})();
var current_position = (function (){var G__14335 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14335) : re_frame.core.subscribe.call(null,G__14335));
})();
var editor_beat_start = (function (){var G__14336 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14336) : re_frame.core.subscribe.call(null,G__14336));
})();
var playing_QMARK_ = (function (){var G__14337 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14337) : re_frame.core.subscribe.call(null,G__14337));
})();
var mario_run = (function (){var G__14338 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14338) : re_frame.core.subscribe.call(null,G__14338));
})();
var mario_jump = (function (){var G__14339 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14339) : re_frame.core.subscribe.call(null,G__14339));
})();
var selected_note = (function (){var G__14340 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_note], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14340) : re_frame.core.subscribe.call(null,G__14340));
})();
return ((function (focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((20),cljs.core.deref(mario_run))){
var G__14341_14378 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jump_DASH_reset], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14341_14378) : re_frame.core.dispatch.call(null,G__14341_14378));
} else {
}

return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$view_DASH_box,"0 0 64 46"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.cloud,(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.hill,(40)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.castle.brick_face,(363),(18),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.castle.brick_face,(348),(48),(10)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.current_note_display,(59),(0),0.22], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_blocks], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.rest_blocks], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.floor_tile,(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect_SHARP_editorframe,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$fill,"none",cljs.core.cst$kw$height,(31),cljs.core.cst$kw$width,63.5,cljs.core.cst$kw$x,0.25,cljs.core.cst$kw$y,14.5], null)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$staff,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"translate(0,10.5) scale(1)",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"url(./images/hand.png),crosshair"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.staff_lines], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.deref(editor_beat_start)))?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.brace], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,-1.68], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_clefs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bass_clef], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.treble_clef], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.drum_clef], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.retract_editor,(8)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,32.7], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.retract_editor,(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,31.5], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.advance_editor], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,(59)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_targets], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(focused),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)))?null:(function (){var vec__14342 = cljs.core.deref(focused);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14342,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14342,(1),null);
var G__14345 = cljs.core.deref(selected_note);
switch (G__14345) {
case "mario":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_icon,((32) + ((30) * x)),(((5) * y) - (5)),0.2], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14345)].join('')));

}
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note){
return (function mecca$view$editor_$_iter__14346(s__14347){
return (new cljs.core.LazySeq(null,((function (focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note){
return (function (){
var s__14347__$1 = s__14347;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14347__$1);
if(temp__5457__auto__){
var s__14347__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14347__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14347__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14349 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14348 = (0);
while(true){
if((i__14348 < size__4323__auto__)){
var map__14350 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14348);
var map__14350__$1 = ((((!((map__14350 == null)))?(((((map__14350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14350):map__14350);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14350__$1,cljs.core.cst$kw$time);
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14350__$1,cljs.core.cst$kw$_);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14350__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__14349,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_note,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)));

var G__14380 = (i__14348 + (1));
i__14348 = G__14380;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14349),mecca$view$editor_$_iter__14346(cljs.core.chunk_rest(s__14347__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14349),null);
}
} else {
var map__14352 = cljs.core.first(s__14347__$2);
var map__14352__$1 = ((((!((map__14352 == null)))?(((((map__14352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14352):map__14352);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14352__$1,cljs.core.cst$kw$time);
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14352__$1,cljs.core.cst$kw$_);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14352__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_note,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)),mecca$view$editor_$_iter__14346(cljs.core.rest(s__14347__$2)));
}
} else {
return null;
}
break;
}
});})(focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note))
,null,null));
});})(focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note))
;
return iter__4324__auto__(cljs.core.deref(mario_note));
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note){
return (function mecca$view$editor_$_iter__14354(s__14355){
return (new cljs.core.LazySeq(null,((function (focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note){
return (function (){
var s__14355__$1 = s__14355;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14355__$1);
if(temp__5457__auto__){
var s__14355__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14355__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14355__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14357 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14356 = (0);
while(true){
if((i__14356 < size__4323__auto__)){
var map__14358 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14356);
var map__14358__$1 = ((((!((map__14358 == null)))?(((((map__14358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14358):map__14358);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14358__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14358__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14358__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__14357,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)));

var G__14381 = (i__14356 + (1));
i__14356 = G__14381;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14357),mecca$view$editor_$_iter__14354(cljs.core.chunk_rest(s__14355__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14357),null);
}
} else {
var map__14360 = cljs.core.first(s__14355__$2);
var map__14360__$1 = ((((!((map__14360 == null)))?(((((map__14360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14360):map__14360);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14360__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14360__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14360__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)),mecca$view$editor_$_iter__14354(cljs.core.rest(s__14355__$2)));
}
} else {
return null;
}
break;
}
});})(focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note))
,null,null));
});})(focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note))
;
return iter__4324__auto__(cljs.core.deref(lead));
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note){
return (function mecca$view$editor_$_iter__14362(s__14363){
return (new cljs.core.LazySeq(null,((function (focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note){
return (function (){
var s__14363__$1 = s__14363;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14363__$1);
if(temp__5457__auto__){
var s__14363__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14363__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14363__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14365 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14364 = (0);
while(true){
if((i__14364 < size__4323__auto__)){
var map__14366 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14364);
var map__14366__$1 = ((((!((map__14366 == null)))?(((((map__14366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14366):map__14366);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14366__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14366__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14366__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__14365,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)));

var G__14382 = (i__14364 + (1));
i__14364 = G__14382;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14365),mecca$view$editor_$_iter__14362(cljs.core.chunk_rest(s__14363__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14365),null);
}
} else {
var map__14368 = cljs.core.first(s__14363__$2);
var map__14368__$1 = ((((!((map__14368 == null)))?(((((map__14368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14368):map__14368);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14368__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14368__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14368__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)),mecca$view$editor_$_iter__14362(cljs.core.rest(s__14363__$2)));
}
} else {
return null;
}
break;
}
});})(focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note))
,null,null));
});})(focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note))
;
return iter__4324__auto__(cljs.core.deref(bassline));
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note){
return (function mecca$view$editor_$_iter__14370(s__14371){
return (new cljs.core.LazySeq(null,((function (focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note){
return (function (){
var s__14371__$1 = s__14371;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14371__$1);
if(temp__5457__auto__){
var s__14371__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14371__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14371__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14373 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14372 = (0);
while(true){
if((i__14372 < size__4323__auto__)){
var map__14374 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14372);
var map__14374__$1 = ((((!((map__14374 == null)))?(((((map__14374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14374):map__14374);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14374__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14374__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14374__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__14373,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.drum_hit,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)));

var G__14383 = (i__14372 + (1));
i__14372 = G__14383;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14373),mecca$view$editor_$_iter__14370(cljs.core.chunk_rest(s__14371__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14373),null);
}
} else {
var map__14376 = cljs.core.first(s__14371__$2);
var map__14376__$1 = ((((!((map__14376 == null)))?(((((map__14376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14376):map__14376);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14376__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14376__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14376__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.drum_hit,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)),mecca$view$editor_$_iter__14370(cljs.core.rest(s__14371__$2)));
}
} else {
return null;
}
break;
}
});})(focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note))
,null,null));
});})(focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note))
;
return iter__4324__auto__(cljs.core.deref(drums));
})())], null)], null);
});
;})(focused,mario_note,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note))
});
mecca.view.debug_info = (function mecca$view$debug_info(){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Absolute time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__14385 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$time], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14385) : re_frame.core.subscribe.call(null,G__14385));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Mario notes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__14386 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14386) : re_frame.core.subscribe.call(null,G__14386));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Mario run: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__14387 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14387) : re_frame.core.subscribe.call(null,G__14387));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Mario jump: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__14388 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14388) : re_frame.core.subscribe.call(null,G__14388));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Selected note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__14389 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_note], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14389) : re_frame.core.subscribe.call(null,G__14389));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Focused note pos: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__14390 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$focused_DASH_note_DASH_pos], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14390) : re_frame.core.subscribe.call(null,G__14390));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__14391 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14391) : re_frame.core.subscribe.call(null,G__14391));
})()))," scale from MIDI number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.music.root_note_midi_num())," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__14392 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14392) : re_frame.core.subscribe.call(null,G__14392));
})())),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__14393 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$octave], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14393) : re_frame.core.subscribe.call(null,G__14393));
})())),"):"].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Tempo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__14394 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14394) : re_frame.core.subscribe.call(null,G__14394));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Current position: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__14395 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14395) : re_frame.core.subscribe.call(null,G__14395));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Editor beat start: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__14396 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14396) : re_frame.core.subscribe.call(null,G__14396));
})()))].join('')], null)], null);
});
mecca.view.mecca = (function mecca$view$mecca(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.editor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.controls], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
return mecca.music.play_bassline_BANG_();
})], null),"Play"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.debug_info], null)], null);
});
