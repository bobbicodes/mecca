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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null),(function (){var iter__4324__auto__ = (function mecca$view$note_targets_$_iter__11955(s__11956){
return (new cljs.core.LazySeq(null,(function (){
var s__11956__$1 = s__11956;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__11956__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__11956__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function mecca$view$note_targets_$_iter__11955_$_iter__11957(s__11958){
return (new cljs.core.LazySeq(null,((function (s__11956__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__11958__$1 = s__11958;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__11958__$1);
if(temp__5457__auto____$1){
var s__11958__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__11958__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__11958__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__11960 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__11959 = (0);
while(true){
if((i__11959 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__11959);
cljs.core.chunk_append(b__11960,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$stroke,cljs.core.cst$kw$transform,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$opacity,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(0.5 + y),"black","translate(12.5,0)",((function (i__11959,s__11956__$1,y,c__4322__auto__,size__4323__auto__,b__11960,s__11958__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var G__11961 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__11961) : re_frame.core.dispatch.call(null,G__11961));
});})(i__11959,s__11956__$1,y,c__4322__auto__,size__4323__auto__,b__11960,s__11958__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__))
,"gray",(3),((function (i__11959,s__11956__$1,y,c__4322__auto__,size__4323__auto__,b__11960,s__11958__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var G__11962 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_note,x,y], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__11962) : re_frame.core.dispatch.call(null,G__11962));
});})(i__11959,s__11956__$1,y,c__4322__auto__,size__4323__auto__,b__11960,s__11958__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__))
,0.2,0.2,((function (i__11959,s__11956__$1,y,c__4322__auto__,size__4323__auto__,b__11960,s__11958__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var G__11963 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__11963) : re_frame.core.dispatch.call(null,G__11963));
});})(i__11959,s__11956__$1,y,c__4322__auto__,size__4323__auto__,b__11960,s__11958__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__))
,((3) * x),"all","hidden",(1)])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__11967 = (i__11959 + (1));
i__11959 = G__11967;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11960),mecca$view$note_targets_$_iter__11955_$_iter__11957(cljs.core.chunk_rest(s__11958__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11960),null);
}
} else {
var y = cljs.core.first(s__11958__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$stroke,cljs.core.cst$kw$transform,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$opacity,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(0.5 + y),"black","translate(12.5,0)",((function (s__11956__$1,y,s__11958__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var G__11964 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__11964) : re_frame.core.dispatch.call(null,G__11964));
});})(s__11956__$1,y,s__11958__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__))
,"gray",(3),((function (s__11956__$1,y,s__11958__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var G__11965 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_note,x,y], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__11965) : re_frame.core.dispatch.call(null,G__11965));
});})(s__11956__$1,y,s__11958__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__))
,0.2,0.2,((function (s__11956__$1,y,s__11958__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var G__11966 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__11966) : re_frame.core.dispatch.call(null,G__11966));
});})(s__11956__$1,y,s__11958__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__))
,((3) * x),"all","hidden",(1)])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$view$note_targets_$_iter__11955_$_iter__11957(cljs.core.rest(s__11958__$2)));
}
} else {
return null;
}
break;
}
});})(s__11956__$1,x,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__11956__$1,x,xs__6012__auto__,temp__5457__auto__))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((34))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,mecca$view$note_targets_$_iter__11955(cljs.core.rest(s__11956__$1)));
} else {
var G__11968 = cljs.core.rest(s__11956__$1);
s__11956__$1 = G__11968;
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
var focused = (function (){var G__11969 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$focused_DASH_note_DASH_pos], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11969) : re_frame.core.subscribe.call(null,G__11969));
})();
var lead = (function (){var G__11970 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11970) : re_frame.core.subscribe.call(null,G__11970));
})();
var bassline = (function (){var G__11971 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11971) : re_frame.core.subscribe.call(null,G__11971));
})();
var drums = (function (){var G__11972 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11972) : re_frame.core.subscribe.call(null,G__11972));
})();
var current_position = (function (){var G__11973 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11973) : re_frame.core.subscribe.call(null,G__11973));
})();
var editor_beat_start = (function (){var G__11974 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11974) : re_frame.core.subscribe.call(null,G__11974));
})();
var playing_QMARK_ = (function (){var G__11975 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11975) : re_frame.core.subscribe.call(null,G__11975));
})();
var mario_run = (function (){var G__11976 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11976) : re_frame.core.subscribe.call(null,G__11976));
})();
var mario_jump = (function (){var G__11977 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11977) : re_frame.core.subscribe.call(null,G__11977));
})();
var selected_note_value = (function (){var G__11978 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_note_DASH_value], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11978) : re_frame.core.subscribe.call(null,G__11978));
})();
return ((function (focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((20),cljs.core.deref(mario_run))){
var G__11979_12008 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jump_DASH_reset], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__11979_12008) : re_frame.core.dispatch.call(null,G__11979_12008));
} else {
}

return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$view_DASH_box,"0 0 64 46"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.cloud,(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.hill,(40)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.castle.brick_face,(363),(18),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.castle.brick_face,(348),(48),(10)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.current_note_display,(59),(0),0.22], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_blocks], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.rest_blocks], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.floor_tile,(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect_SHARP_editorframe,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$fill,"none",cljs.core.cst$kw$height,(31),cljs.core.cst$kw$width,63.5,cljs.core.cst$kw$x,0.25,cljs.core.cst$kw$y,14.5], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$staff,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"translate(0,10.5) scale(1)",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"url(./images/hand.png),crosshair"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.staff_lines], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.deref(editor_beat_start)))?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.brace], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,-1.68], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_clefs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bass_clef], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.treble_clef], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.drum_clef], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.retract_editor,(8)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,32.7], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.retract_editor,(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,31.5], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.note_guides], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.advance_editor], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_line,(59)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_targets], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(focused),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)))?null:(function (){var vec__11980 = cljs.core.deref(focused);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11980,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11980,(1),null);
var G__11983 = cljs.core.deref(selected_note_value);
switch (G__11983) {
case "mario":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_icon,((32) + ((15) * x)),((5) * y),0.2], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11983)].join('')));

}
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function mecca$view$editor_$_iter__11984(s__11985){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function (){
var s__11985__$1 = s__11985;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__11985__$1);
if(temp__5457__auto__){
var s__11985__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11985__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__11985__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__11987 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__11986 = (0);
while(true){
if((i__11986 < size__4323__auto__)){
var map__11988 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__11986);
var map__11988__$1 = ((((!((map__11988 == null)))?(((((map__11988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11988):map__11988);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11988__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11988__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11988__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__11987,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)));

var G__12010 = (i__11986 + (1));
i__11986 = G__12010;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11987),mecca$view$editor_$_iter__11984(cljs.core.chunk_rest(s__11985__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11987),null);
}
} else {
var map__11990 = cljs.core.first(s__11985__$2);
var map__11990__$1 = ((((!((map__11990 == null)))?(((((map__11990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11990):map__11990);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11990__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11990__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11990__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)),mecca$view$editor_$_iter__11984(cljs.core.rest(s__11985__$2)));
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
return (function mecca$view$editor_$_iter__11992(s__11993){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function (){
var s__11993__$1 = s__11993;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__11993__$1);
if(temp__5457__auto__){
var s__11993__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11993__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__11993__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__11995 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__11994 = (0);
while(true){
if((i__11994 < size__4323__auto__)){
var map__11996 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__11994);
var map__11996__$1 = ((((!((map__11996 == null)))?(((((map__11996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11996):map__11996);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11996__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11996__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11996__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__11995,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)));

var G__12011 = (i__11994 + (1));
i__11994 = G__12011;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11995),mecca$view$editor_$_iter__11992(cljs.core.chunk_rest(s__11993__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11995),null);
}
} else {
var map__11998 = cljs.core.first(s__11993__$2);
var map__11998__$1 = ((((!((map__11998 == null)))?(((((map__11998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11998):map__11998);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11998__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11998__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11998__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)),mecca$view$editor_$_iter__11992(cljs.core.rest(s__11993__$2)));
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
return (function mecca$view$editor_$_iter__12000(s__12001){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position,editor_beat_start,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function (){
var s__12001__$1 = s__12001;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12001__$1);
if(temp__5457__auto__){
var s__12001__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12001__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12001__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12003 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12002 = (0);
while(true){
if((i__12002 < size__4323__auto__)){
var map__12004 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12002);
var map__12004__$1 = ((((!((map__12004 == null)))?(((((map__12004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12004):map__12004);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12004__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12004__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12004__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__12003,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.drum_hit,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)));

var G__12012 = (i__12002 + (1));
i__12002 = G__12012;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12003),mecca$view$editor_$_iter__12000(cljs.core.chunk_rest(s__12001__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12003),null);
}
} else {
var map__12006 = cljs.core.first(s__12001__$2);
var map__12006__$1 = ((((!((map__12006 == null)))?(((((map__12006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12006):map__12006);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12006__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12006__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12006__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.drum_hit,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)),mecca$view$editor_$_iter__12000(cljs.core.rest(s__12001__$2)));
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
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Absolute time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__12014 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$time], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12014) : re_frame.core.subscribe.call(null,G__12014));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Lead: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__12015 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12015) : re_frame.core.subscribe.call(null,G__12015));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Bassline: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__12016 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12016) : re_frame.core.subscribe.call(null,G__12016));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Drums: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__12017 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12017) : re_frame.core.subscribe.call(null,G__12017));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Mario run: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__12018 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12018) : re_frame.core.subscribe.call(null,G__12018));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Mario jump: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__12019 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12019) : re_frame.core.subscribe.call(null,G__12019));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Selected note value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__12020 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_note_DASH_value], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12020) : re_frame.core.subscribe.call(null,G__12020));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Focused note pos: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__12021 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$focused_DASH_note_DASH_pos], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12021) : re_frame.core.subscribe.call(null,G__12021));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__12022 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12022) : re_frame.core.subscribe.call(null,G__12022));
})()))," scale from MIDI number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.music.root_note_midi_num())," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__12023 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12023) : re_frame.core.subscribe.call(null,G__12023));
})())),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__12024 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$octave], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12024) : re_frame.core.subscribe.call(null,G__12024));
})())),"):"].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Tempo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__12025 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12025) : re_frame.core.subscribe.call(null,G__12025));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Current position: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__12026 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12026) : re_frame.core.subscribe.call(null,G__12026));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Editor beat start: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__12027 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12027) : re_frame.core.subscribe.call(null,G__12027));
})()))].join('')], null)], null);
});
mecca.view.mecca = (function mecca$view$mecca(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.editor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.controls], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
return mecca.music.play_bassline_BANG_();
})], null),"Play"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.debug_info], null)], null);
});
