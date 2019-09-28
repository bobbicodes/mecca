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
var instrument = (function (){var G__15117 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instrument], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15117) : re_frame.core.subscribe.call(null,G__15117));
})();
return ((function (instrument){
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null),(function (){var iter__4324__auto__ = ((function (instrument){
return (function mecca$view$note_targets_$_iter__15118(s__15119){
return (new cljs.core.LazySeq(null,((function (instrument){
return (function (){
var s__15119__$1 = s__15119;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__15119__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var time = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__15119__$1,time,xs__6012__auto__,temp__5457__auto__,instrument){
return (function mecca$view$note_targets_$_iter__15118_$_iter__15120(s__15121){
return (new cljs.core.LazySeq(null,((function (s__15119__$1,time,xs__6012__auto__,temp__5457__auto__,instrument){
return (function (){
var s__15121__$1 = s__15121;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__15121__$1);
if(temp__5457__auto____$1){
var s__15121__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15121__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__15121__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__15123 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__15122 = (0);
while(true){
if((i__15122 < size__4323__auto__)){
var pitch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__15122);
cljs.core.chunk_append(b__15123,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$stroke,cljs.core.cst$kw$transform,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$opacity,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(0.5 + pitch),"black","translate(12.5,0)",((function (i__15122,s__15119__$1,pitch,c__4322__auto__,size__4323__auto__,b__15123,s__15121__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument){
return (function (){
var G__15124 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15124) : re_frame.core.dispatch.call(null,G__15124));
});})(i__15122,s__15119__$1,pitch,c__4322__auto__,size__4323__auto__,b__15123,s__15121__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument))
,"gray",(3),((function (i__15122,s__15119__$1,pitch,c__4322__auto__,size__4323__auto__,b__15123,s__15121__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument){
return (function (){
var G__15125 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_note,cljs.core.deref(instrument),time,pitch], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15125) : re_frame.core.dispatch.call(null,G__15125));
});})(i__15122,s__15119__$1,pitch,c__4322__auto__,size__4323__auto__,b__15123,s__15121__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument))
,0.2,0.2,((function (i__15122,s__15119__$1,pitch,c__4322__auto__,size__4323__auto__,b__15123,s__15121__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument){
return (function (){
var G__15126 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15126) : re_frame.core.dispatch.call(null,G__15126));
});})(i__15122,s__15119__$1,pitch,c__4322__auto__,size__4323__auto__,b__15123,s__15121__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument))
,((6) * time),"all","hidden",(1)])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)));

var G__15130 = (i__15122 + (1));
i__15122 = G__15130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15123),mecca$view$note_targets_$_iter__15118_$_iter__15120(cljs.core.chunk_rest(s__15121__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15123),null);
}
} else {
var pitch = cljs.core.first(s__15121__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$stroke,cljs.core.cst$kw$transform,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$opacity,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(0.5 + pitch),"black","translate(12.5,0)",((function (s__15119__$1,pitch,s__15121__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument){
return (function (){
var G__15127 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15127) : re_frame.core.dispatch.call(null,G__15127));
});})(s__15119__$1,pitch,s__15121__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument))
,"gray",(3),((function (s__15119__$1,pitch,s__15121__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument){
return (function (){
var G__15128 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_note,cljs.core.deref(instrument),time,pitch], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15128) : re_frame.core.dispatch.call(null,G__15128));
});})(s__15119__$1,pitch,s__15121__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument))
,0.2,0.2,((function (s__15119__$1,pitch,s__15121__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument){
return (function (){
var G__15129 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15129) : re_frame.core.dispatch.call(null,G__15129));
});})(s__15119__$1,pitch,s__15121__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument))
,((6) * time),"all","hidden",(1)])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)),mecca$view$note_targets_$_iter__15118_$_iter__15120(cljs.core.rest(s__15121__$2)));
}
} else {
return null;
}
break;
}
});})(s__15119__$1,time,xs__6012__auto__,temp__5457__auto__,instrument))
,null,null));
});})(s__15119__$1,time,xs__6012__auto__,temp__5457__auto__,instrument))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((34))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,mecca$view$note_targets_$_iter__15118(cljs.core.rest(s__15119__$1)));
} else {
var G__15131 = cljs.core.rest(s__15119__$1);
s__15119__$1 = G__15131;
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
var instruments = (function (){var G__15132 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instruments], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15132) : re_frame.core.subscribe.call(null,G__15132));
})();
var focused = (function (){var G__15133 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$focused_DASH_note_DASH_pos], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15133) : re_frame.core.subscribe.call(null,G__15133));
})();
var current_position = (function (){var G__15134 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15134) : re_frame.core.subscribe.call(null,G__15134));
})();
var editor_beat_start = (function (){var G__15135 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15135) : re_frame.core.subscribe.call(null,G__15135));
})();
var playing_QMARK_ = (function (){var G__15136 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15136) : re_frame.core.subscribe.call(null,G__15136));
})();
var mario_run = (function (){var G__15137 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15137) : re_frame.core.subscribe.call(null,G__15137));
})();
var mario_jump = (function (){var G__15138 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15138) : re_frame.core.subscribe.call(null,G__15138));
})();
var instrument = (function (){var G__15139 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instrument], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15139) : re_frame.core.subscribe.call(null,G__15139));
})();
return ((function (instruments,focused,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,instrument){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((20),cljs.core.deref(mario_run))){
var G__15140_15153 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jump_DASH_reset], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15140_15153) : re_frame.core.dispatch.call(null,G__15140_15153));
} else {
}

return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$view_DASH_box,"0 0 64 46"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.cloud,(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.hill,(40)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.castle.brick_face,(363),(18),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.castle.brick_face,(348),(48),(10)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.current_note_display,(59),(0),0.22], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_blocks], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.floor_tile,(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect_SHARP_editorframe,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$fill,"none",cljs.core.cst$kw$height,(31),cljs.core.cst$kw$width,63.5,cljs.core.cst$kw$x,0.25,cljs.core.cst$kw$y,14.5], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$staff,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"translate(0,10.5) scale(1)",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"url(./images/hand.png),crosshair"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.staff_lines], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.deref(editor_beat_start)))?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.brace], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,-1.68], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_clefs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bass_clef], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.treble_clef], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.drum_clef], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.retract_editor,(8)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,32.7], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.retract_editor,(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,31.5], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.advance_editor], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,(59)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_targets], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(focused),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)))?null:(function (){var vec__15141 = cljs.core.deref(focused);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15141,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15141,(1),null);
var G__15144 = cljs.core.deref(instrument);
switch (G__15144) {
case (1):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_icon,((32) + ((30) * x)),(((5) * y) - (5)),0.2], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.shroom,((32) + ((30) * x)),(((5) * y) - (5)),0.2], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15144)].join('')));

}
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (instruments,focused,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,instrument){
return (function mecca$view$editor_$_iter__15145(s__15146){
return (new cljs.core.LazySeq(null,((function (instruments,focused,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,instrument){
return (function (){
var s__15146__$1 = s__15146;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__15146__$1);
if(temp__5457__auto__){
var s__15146__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15146__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__15146__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__15148 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__15147 = (0);
while(true){
if((i__15147 < size__4323__auto__)){
var map__15149 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__15147);
var map__15149__$1 = ((((!((map__15149 == null)))?(((((map__15149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15149):map__15149);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15149__$1,cljs.core.cst$kw$time);
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15149__$1,cljs.core.cst$kw$_);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15149__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__15148,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_note,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)));

var G__15155 = (i__15147 + (1));
i__15147 = G__15155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15148),mecca$view$editor_$_iter__15145(cljs.core.chunk_rest(s__15146__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15148),null);
}
} else {
var map__15151 = cljs.core.first(s__15146__$2);
var map__15151__$1 = ((((!((map__15151 == null)))?(((((map__15151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15151):map__15151);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15151__$1,cljs.core.cst$kw$time);
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15151__$1,cljs.core.cst$kw$_);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15151__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_note,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (5)),0.2], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)),mecca$view$editor_$_iter__15145(cljs.core.rest(s__15146__$2)));
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
return iter__4324__auto__(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(instruments),cljs.core.deref(instrument)));
})())], null)], null);
});
;})(instruments,focused,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,instrument))
});
mecca.view.debug_info = (function mecca$view$debug_info(){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Absolute time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__15156 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$time], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15156) : re_frame.core.subscribe.call(null,G__15156));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Mario notes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__15157 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instruments], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15157) : re_frame.core.subscribe.call(null,G__15157));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Mario run: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__15158 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15158) : re_frame.core.subscribe.call(null,G__15158));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Mario jump: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__15159 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15159) : re_frame.core.subscribe.call(null,G__15159));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Instrument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__15160 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instrument], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15160) : re_frame.core.subscribe.call(null,G__15160));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Focused note pos: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__15161 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$focused_DASH_note_DASH_pos], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15161) : re_frame.core.subscribe.call(null,G__15161));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Tempo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__15162 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15162) : re_frame.core.subscribe.call(null,G__15162));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Current position: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__15163 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15163) : re_frame.core.subscribe.call(null,G__15163));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Editor beat start: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__15164 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15164) : re_frame.core.subscribe.call(null,G__15164));
})()))].join('')], null)], null);
});
mecca.view.mecca = (function mecca$view$mecca(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.editor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.controls], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.debug_info], null)], null);
});
