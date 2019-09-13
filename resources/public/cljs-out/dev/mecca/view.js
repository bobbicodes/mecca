// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.view');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('mecca.music');
goog.require('mecca.subs');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('mecca.events');
goog.require('mecca.music.melody');
goog.require('mecca.music.scale');
goog.require('mecca.components.notation');
goog.require('mecca.components.castle');
goog.require('mecca.components.key');
goog.require('mecca.components.editor');
goog.require('mecca.mario');
mecca.view.editor = (function mecca$view$editor(){
var focused = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
var lead = (function (){var G__13262 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13262) : re_frame.core.subscribe.call(null,G__13262));
})();
var bassline = (function (){var G__13263 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13263) : re_frame.core.subscribe.call(null,G__13263));
})();
var drums = (function (){var G__13264 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13264) : re_frame.core.subscribe.call(null,G__13264));
})();
var current_position = (function (){var G__13265 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13265) : re_frame.core.subscribe.call(null,G__13265));
})();
var editor_beat_start = (function (){var G__13266 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13266) : re_frame.core.subscribe.call(null,G__13266));
})();
var playing_QMARK_ = (function (){var G__13267 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13267) : re_frame.core.subscribe.call(null,G__13267));
})();
var mario_run = (function (){var G__13268 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13268) : re_frame.core.subscribe.call(null,G__13268));
})();
var mario_jump = (function (){var G__13269 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13269) : re_frame.core.subscribe.call(null,G__13269));
})();
var selected_note_value = (function (){var G__13270 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_note_DASH_value], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13270) : re_frame.core.subscribe.call(null,G__13270));
})();
return ((function (focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((20),cljs.core.deref(mario_run))){
var G__13271_13304 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jump_DASH_reset], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13271_13304) : re_frame.core.dispatch.call(null,G__13271_13304));
} else {
}

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$view_DASH_box,"0 0 64 46"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.castle.brick_face,(16),(0),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.castle.brick_face,(0),(32),(10)], null),(((cljs.core.deref(mario_jump) < (4)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario,cljs.core.cst$kw$jump1], null):((((((3) < cljs.core.deref(mario_jump))) && ((cljs.core.deref(mario_jump) < (8)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario,cljs.core.cst$kw$jump2], null):((cljs.core.odd_QMARK_(cljs.core.deref(mario_run)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario,cljs.core.cst$kw$run1], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario,cljs.core.cst$kw$run2], null)
))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_blocks], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.rest_blocks], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.floor_tile,(16)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$staff,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"translate(0,10.5) scale(1)"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.staff_lines], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.deref(editor_beat_start)))?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.brace], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,-1.68], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_clefs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bass_clef], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.treble_clef], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.drum_clef], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.retract_editor,(8)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,31.5], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.retract_editor,(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,31.5], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.advance_editor], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,(59)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function mecca$view$editor_$_iter__13272(s__13273){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function (){
var s__13273__$1 = s__13273;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13273__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__13273__$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function mecca$view$editor_$_iter__13272_$_iter__13274(s__13275){
return (new cljs.core.LazySeq(null,((function (s__13273__$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function (){
var s__13275__$1 = s__13275;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__13275__$1);
if(temp__5457__auto____$1){
var s__13275__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13275__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13275__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13277 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13276 = (0);
while(true){
if((i__13276 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13276);
cljs.core.chunk_append(b__13277,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"translate(12.5,0)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(0.5 + y),((function (i__13276,s__13273__$1,y,c__4322__auto__,size__4323__auto__,b__13277,s__13275__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function (){
return cljs.core.reset_BANG_(focused,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
});})(i__13276,s__13273__$1,y,c__4322__auto__,size__4323__auto__,b__13277,s__13275__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value))
,"gray",(3),((function (i__13276,s__13273__$1,y,c__4322__auto__,size__4323__auto__,b__13277,s__13275__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function (){
var G__13278 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_note,x,y], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13278) : re_frame.core.dispatch.call(null,G__13278));
});})(i__13276,s__13273__$1,y,c__4322__auto__,size__4323__auto__,b__13277,s__13275__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value))
,((function (i__13276,s__13273__$1,y,c__4322__auto__,size__4323__auto__,b__13277,s__13275__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function (e){
return cljs.core.reset_BANG_(focused,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__13276,s__13273__$1,y,c__4322__auto__,size__4323__auto__,b__13277,s__13275__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value))
,((6) * x),"all","hidden",(1)])], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(focused),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?((((30) < y))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.35 + ((6) * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y + (1))),") "].join(''),cljs.core.cst$kw$pointer_DASH_events,"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"m1.24.27 .9.74c.02.01 .04.03 .07.03 .02 0 .05-.01.08-.03l.15-.12c.02-.02.04-.06.04-.09 0-.03-.02-.06-.04-.08L1.56 0 2.43-.71c.02-.02.04-.05.04-.08 0-.03-.02-.07-.04-.09l-.15-.12c-.02-.01-.05-.03-.08-.03-.02 0-.04.01-.07.03L1.24-.27.33-1.01c-.02-.01-.04-.03-.07-.03-.02 0-.05.01-.08.03l-.15.12c-.02.02-.04.06-.04.09 0 .03.02 .06.04 .08L.91 0 .04.71c-.02.02-.04.05-.04.08 0 .03.02 .07.04 .09l.15.12c.02.01 .05.03 .08.03 .02 0 .04-.01.07-.03z",cljs.core.cst$kw$fill,"gray"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,((((31) < y))?2.2:(0)),cljs.core.cst$kw$y,((((31) < y))?-6.3:0.8),cljs.core.cst$kw$height,5.5,cljs.core.cst$kw$width,0.25,cljs.core.cst$kw$fill,"gray"], null)], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.5 + ((6) * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y + (1))),")"].join(''),cljs.core.cst$kw$pointer_DASH_events,"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"m1.62-1.06c.41 0 .8.21 .8.67 0 .53-.41.89-.76 1.1-.27.16-.56.27-.86.27-.41 0-.8-.21-.8-.67 0-.53.41-.89.76-1.1.27-.16.56-.27.86-.27z",cljs.core.cst$kw$fill,"gray"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?2.15:0.02),cljs.core.cst$kw$y,((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?-7.1:(0)),cljs.core.cst$kw$height,6.794,cljs.core.cst$kw$width,0.25,cljs.core.cst$kw$fill,"gray"], null)], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(3))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(5))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(17))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(29)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transform,"scale (1.75)",cljs.core.cst$kw$height,0.2,cljs.core.cst$kw$width,2.085,cljs.core.cst$kw$ry,0.1,cljs.core.cst$kw$x,-0.334,cljs.core.cst$kw$y,-0.1,cljs.core.cst$kw$fill,"gray"], null)], null):null)], null)):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__13305 = (i__13276 + (1));
i__13276 = G__13305;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13277),mecca$view$editor_$_iter__13272_$_iter__13274(cljs.core.chunk_rest(s__13275__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13277),null);
}
} else {
var y = cljs.core.first(s__13275__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"translate(12.5,0)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(0.5 + y),((function (s__13273__$1,y,s__13275__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function (){
return cljs.core.reset_BANG_(focused,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
});})(s__13273__$1,y,s__13275__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value))
,"gray",(3),((function (s__13273__$1,y,s__13275__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function (){
var G__13279 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_note,x,y], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13279) : re_frame.core.dispatch.call(null,G__13279));
});})(s__13273__$1,y,s__13275__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value))
,((function (s__13273__$1,y,s__13275__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function (e){
return cljs.core.reset_BANG_(focused,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(s__13273__$1,y,s__13275__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value))
,((6) * x),"all","hidden",(1)])], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(focused),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?((((30) < y))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.35 + ((6) * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y + (1))),") "].join(''),cljs.core.cst$kw$pointer_DASH_events,"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"m1.24.27 .9.74c.02.01 .04.03 .07.03 .02 0 .05-.01.08-.03l.15-.12c.02-.02.04-.06.04-.09 0-.03-.02-.06-.04-.08L1.56 0 2.43-.71c.02-.02.04-.05.04-.08 0-.03-.02-.07-.04-.09l-.15-.12c-.02-.01-.05-.03-.08-.03-.02 0-.04.01-.07.03L1.24-.27.33-1.01c-.02-.01-.04-.03-.07-.03-.02 0-.05.01-.08.03l-.15.12c-.02.02-.04.06-.04.09 0 .03.02 .06.04 .08L.91 0 .04.71c-.02.02-.04.05-.04.08 0 .03.02 .07.04 .09l.15.12c.02.01 .05.03 .08.03 .02 0 .04-.01.07-.03z",cljs.core.cst$kw$fill,"gray"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,((((31) < y))?2.2:(0)),cljs.core.cst$kw$y,((((31) < y))?-6.3:0.8),cljs.core.cst$kw$height,5.5,cljs.core.cst$kw$width,0.25,cljs.core.cst$kw$fill,"gray"], null)], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.5 + ((6) * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y + (1))),")"].join(''),cljs.core.cst$kw$pointer_DASH_events,"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"m1.62-1.06c.41 0 .8.21 .8.67 0 .53-.41.89-.76 1.1-.27.16-.56.27-.86.27-.41 0-.8-.21-.8-.67 0-.53.41-.89.76-1.1.27-.16.56-.27.86-.27z",cljs.core.cst$kw$fill,"gray"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?2.15:0.02),cljs.core.cst$kw$y,((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?-7.1:(0)),cljs.core.cst$kw$height,6.794,cljs.core.cst$kw$width,0.25,cljs.core.cst$kw$fill,"gray"], null)], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(3))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(5))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(17))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(29)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transform,"scale (1.75)",cljs.core.cst$kw$height,0.2,cljs.core.cst$kw$width,2.085,cljs.core.cst$kw$ry,0.1,cljs.core.cst$kw$x,-0.334,cljs.core.cst$kw$y,-0.1,cljs.core.cst$kw$fill,"gray"], null)], null):null)], null)):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$view$editor_$_iter__13272_$_iter__13274(cljs.core.rest(s__13275__$2)));
}
} else {
return null;
}
break;
}
});})(s__13273__$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value))
,null,null));
});})(s__13273__$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.conj.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1((34)))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,mecca$view$editor_$_iter__13272(cljs.core.rest(s__13273__$1)));
} else {
var G__13306 = cljs.core.rest(s__13273__$1);
s__13273__$1 = G__13306;
continue;
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
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((8)));
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function mecca$view$editor_$_iter__13280(s__13281){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function (){
var s__13281__$1 = s__13281;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13281__$1);
if(temp__5457__auto__){
var s__13281__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13281__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13281__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13283 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13282 = (0);
while(true){
if((i__13282 < size__4323__auto__)){
var map__13284 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13282);
var map__13284__$1 = ((((!((map__13284 == null)))?(((((map__13284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13284):map__13284);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13284__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13284__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13284__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__13283,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)));

var G__13307 = (i__13282 + (1));
i__13282 = G__13307;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13283),mecca$view$editor_$_iter__13280(cljs.core.chunk_rest(s__13281__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13283),null);
}
} else {
var map__13286 = cljs.core.first(s__13281__$2);
var map__13286__$1 = ((((!((map__13286 == null)))?(((((map__13286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13286):map__13286);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13286__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13286__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13286__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)),mecca$view$editor_$_iter__13280(cljs.core.rest(s__13281__$2)));
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
return (function mecca$view$editor_$_iter__13288(s__13289){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function (){
var s__13289__$1 = s__13289;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13289__$1);
if(temp__5457__auto__){
var s__13289__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13289__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13289__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13291 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13290 = (0);
while(true){
if((i__13290 < size__4323__auto__)){
var map__13292 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13290);
var map__13292__$1 = ((((!((map__13292 == null)))?(((((map__13292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13292):map__13292);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13292__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13292__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13292__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__13291,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)));

var G__13308 = (i__13290 + (1));
i__13290 = G__13308;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13291),mecca$view$editor_$_iter__13288(cljs.core.chunk_rest(s__13289__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13291),null);
}
} else {
var map__13294 = cljs.core.first(s__13289__$2);
var map__13294__$1 = ((((!((map__13294 == null)))?(((((map__13294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13294):map__13294);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13294__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13294__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13294__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)),mecca$view$editor_$_iter__13288(cljs.core.rest(s__13289__$2)));
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
return (function mecca$view$editor_$_iter__13296(s__13297){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function (){
var s__13297__$1 = s__13297;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13297__$1);
if(temp__5457__auto__){
var s__13297__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13297__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13297__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13299 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13298 = (0);
while(true){
if((i__13298 < size__4323__auto__)){
var map__13300 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13298);
var map__13300__$1 = ((((!((map__13300 == null)))?(((((map__13300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13300):map__13300);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13300__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13300__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13300__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__13299,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.drum_hit,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)));

var G__13309 = (i__13298 + (1));
i__13298 = G__13309;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13299),mecca$view$editor_$_iter__13296(cljs.core.chunk_rest(s__13297__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13299),null);
}
} else {
var map__13302 = cljs.core.first(s__13297__$2);
var map__13302__$1 = ((((!((map__13302 == null)))?(((((map__13302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13302):map__13302);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13302__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13302__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13302__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.drum_hit,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)),mecca$view$editor_$_iter__13296(cljs.core.rest(s__13297__$2)));
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
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Absolute time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13311 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$time], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13311) : re_frame.core.subscribe.call(null,G__13311));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Lead: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13312 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13312) : re_frame.core.subscribe.call(null,G__13312));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Bassline: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13313 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13313) : re_frame.core.subscribe.call(null,G__13313));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Drums: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13314 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13314) : re_frame.core.subscribe.call(null,G__13314));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Mario run: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13315 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13315) : re_frame.core.subscribe.call(null,G__13315));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Mario jump: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13316 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13316) : re_frame.core.subscribe.call(null,G__13316));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13317 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13317) : re_frame.core.subscribe.call(null,G__13317));
})()))," scale from MIDI number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.music.root_note_midi_num())," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13318 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13318) : re_frame.core.subscribe.call(null,G__13318));
})())),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13319 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$octave], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13319) : re_frame.core.subscribe.call(null,G__13319));
})())),"):"].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Tempo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13320 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13320) : re_frame.core.subscribe.call(null,G__13320));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Current position: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13321 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13321) : re_frame.core.subscribe.call(null,G__13321));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Editor beat start: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13322 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13322) : re_frame.core.subscribe.call(null,G__13322));
})()))].join('')], null)], null);
});
mecca.view.mecca = (function mecca$view$mecca(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.editor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.controls], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.tempo_input], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
return mecca.music.play_bassline_BANG_();
})], null),"Play"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.debug_info], null)], null);
});
