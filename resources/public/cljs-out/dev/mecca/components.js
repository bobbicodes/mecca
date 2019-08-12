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
mecca.components.scale_picker = (function mecca$components$scale_picker(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Scale: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.deref((function (){var G__13026 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13026) : re_frame.core.subscribe.call(null,G__13026));
})()),cljs.core.cst$kw$on_DASH_change,(function (e){
e.preventDefault();

var G__13027 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_scale,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13027) : re_frame.core.dispatch.call(null,G__13027));
})], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = (function mecca$components$scale_picker_$_iter__13028(s__13029){
return (new cljs.core.LazySeq(null,(function (){
var s__13029__$1 = s__13029;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13029__$1);
if(temp__5457__auto__){
var s__13029__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13029__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13029__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13031 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13030 = (0);
while(true){
if((i__13030 < size__4323__auto__)){
var scale = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13030);
cljs.core.chunk_append(b__13031,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,scale], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,scale], null)));

var G__13032 = (i__13030 + (1));
i__13030 = G__13032;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13031),mecca$components$scale_picker_$_iter__13028(cljs.core.chunk_rest(s__13029__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13031),null);
}
} else {
var scale = cljs.core.first(s__13029__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,scale], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,scale], null)),mecca$components$scale_picker_$_iter__13028(cljs.core.rest(s__13029__$2)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label," Key: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.deref((function (){var G__13033 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13033) : re_frame.core.subscribe.call(null,G__13033));
})()),cljs.core.cst$kw$on_DASH_change,(function (e){
e.preventDefault();

var G__13034 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_key,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13034) : re_frame.core.dispatch.call(null,G__13034));
})], null),(function (){var iter__4324__auto__ = (function mecca$components$key_picker_$_iter__13035(s__13036){
return (new cljs.core.LazySeq(null,(function (){
var s__13036__$1 = s__13036;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13036__$1);
if(temp__5457__auto__){
var s__13036__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13036__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13036__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13038 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13037 = (0);
while(true){
if((i__13037 < size__4323__auto__)){
var note = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13037);
cljs.core.chunk_append(b__13038,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,note], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,note], null)));

var G__13039 = (i__13037 + (1));
i__13037 = G__13039;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13038),mecca$components$key_picker_$_iter__13035(cljs.core.chunk_rest(s__13036__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13038),null);
}
} else {
var note = cljs.core.first(s__13036__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,note], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,note], null)),mecca$components$key_picker_$_iter__13035(cljs.core.rest(s__13036__$2)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label," Octave: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"6%",cljs.core.cst$kw$background_DASH_color,"lightgray"], null),cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.deref((function (){var G__13040 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$octave], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13040) : re_frame.core.subscribe.call(null,G__13040));
})()),cljs.core.cst$kw$on_DASH_change,(function (e){
e.preventDefault();

var G__13041 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_octave,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13041) : re_frame.core.dispatch.call(null,G__13041));
})], null)], null)], null);
});
mecca.components.tempo_input = (function mecca$components$tempo_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label," Tempo: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"8%",cljs.core.cst$kw$background_DASH_color,"lightgray"], null),cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.deref((function (){var G__13042 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13042) : re_frame.core.subscribe.call(null,G__13042));
})()),cljs.core.cst$kw$on_DASH_change,(function (e){
e.preventDefault();

var G__13043 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_tempo,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13043) : re_frame.core.dispatch.call(null,G__13043));
})], null)], null)], null);
});
mecca.components.cell = (function mecca$components$cell(p__13044){
var vec__13045 = p__13044;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13045,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13045,(1),null);
var focused_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var bassline = (function (){var G__13048 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13048) : re_frame.core.subscribe.call(null,G__13048));
})();
return ((function (focused_QMARK_,bassline,vec__13045,x,y){
return (function (p__13049){
var vec__13050 = p__13049;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13050,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13050,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$stroke,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$height],[(y__$1 * 0.75),"black",((function (vec__13050,x__$1,y__$1,focused_QMARK_,bassline,vec__13045,x,y){
return (function (){
return cljs.core.reset_BANG_(focused_QMARK_,false);
});})(vec__13050,x__$1,y__$1,focused_QMARK_,bassline,vec__13045,x,y))
,(cljs.core.truth_(cljs.core.deref(focused_QMARK_))?"violet":((clojure.string.includes_QMARK_(mecca.music.midi_num__GT_note(y__$1),"#"))?"pink":"white"
)),(1),((function (vec__13050,x__$1,y__$1,focused_QMARK_,bassline,vec__13045,x,y){
return (function (){
var G__13053 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_bassline,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(bassline),x__$1,y__$1)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13053) : re_frame.core.dispatch.call(null,G__13053));
});})(vec__13050,x__$1,y__$1,focused_QMARK_,bassline,vec__13045,x,y))
,0.05,((function (vec__13050,x__$1,y__$1,focused_QMARK_,bassline,vec__13045,x,y){
return (function (){
return cljs.core.reset_BANG_(focused_QMARK_,true);
});})(vec__13050,x__$1,y__$1,focused_QMARK_,bassline,vec__13045,x,y))
,((1) + x__$1),0.75])], null);
});
;})(focused_QMARK_,bassline,vec__13045,x,y))
});
mecca.components.note_label = (function mecca$components$note_label(y){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$width,(1),cljs.core.cst$kw$y,(0.5 + (y * 0.75)),cljs.core.cst$kw$height,0.75,cljs.core.cst$kw$text_DASH_anchor,"left",cljs.core.cst$kw$font_DASH_size,0.5], null),mecca.music.midi_num__GT_note(y)], null);
});
mecca.components.grid_lines = (function mecca$components$grid_lines(p__13054){
var vec__13055 = p__13054;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13055,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13055,(1),null);
var line_focused_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var notes = cljs.core.deref((function (){var G__13058 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13058) : re_frame.core.subscribe.call(null,G__13058));
})());
var note_endings = cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (line_focused_QMARK_,notes,vec__13055,x,y){
return (function mecca$components$grid_lines_$_iter__13059(s__13060){
return (new cljs.core.LazySeq(null,((function (line_focused_QMARK_,notes,vec__13055,x,y){
return (function (){
var s__13060__$1 = s__13060;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13060__$1);
if(temp__5457__auto__){
var s__13060__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13060__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13060__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13062 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13061 = (0);
while(true){
if((i__13061 < size__4323__auto__)){
var map__13063 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13061);
var map__13063__$1 = ((((!((map__13063 == null)))?(((((map__13063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13063):map__13063);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13063__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13063__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13063__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__13062,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((time + duration) + (1)),pitch], null));

var G__13071 = (i__13061 + (1));
i__13061 = G__13071;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13062),mecca$components$grid_lines_$_iter__13059(cljs.core.chunk_rest(s__13060__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13062),null);
}
} else {
var map__13065 = cljs.core.first(s__13060__$2);
var map__13065__$1 = ((((!((map__13065 == null)))?(((((map__13065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13065):map__13065);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13065__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13065__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13065__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((time + duration) + (1)),pitch], null),mecca$components$grid_lines_$_iter__13059(cljs.core.rest(s__13060__$2)));
}
} else {
return null;
}
break;
}
});})(line_focused_QMARK_,notes,vec__13055,x,y))
,null,null));
});})(line_focused_QMARK_,notes,vec__13055,x,y))
;
return iter__4324__auto__(notes);
})());
return ((function (line_focused_QMARK_,notes,note_endings,vec__13055,x,y){
return (function (p__13067){
var vec__13068 = p__13067;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13068,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13068,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$stroke,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$y1,cljs.core.cst$kw$on_DASH_mouse_DASH_down,cljs.core.cst$kw$style,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x1,cljs.core.cst$kw$y2,cljs.core.cst$kw$x2],[((cljs.core.contains_QMARK_(cljs.core.set(note_endings),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)))?"red":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.mod(x__$1,(4))))?"black":"lightgrey"
)),((function (vec__13068,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__13055,x,y){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(line_focused_QMARK_,cljs.core.not);
});})(vec__13068,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__13055,x,y))
,(- y__$1),mecca.events.mouse_down_handler,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,(cljs.core.truth_(cljs.core.deref(line_focused_QMARK_))?"ew-resize":null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.mod(x__$1,(4))))?0.075:0.04),((function (vec__13068,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__13055,x,y){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(line_focused_QMARK_,cljs.core.not);
});})(vec__13068,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__13055,x,y))
,x__$1,(y__$1 - (1)),x__$1])], null);
});
;})(line_focused_QMARK_,notes,note_endings,vec__13055,x,y))
});
mecca.components.note = (function mecca$components$note(p__13072){
var vec__13073 = p__13072;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13073,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13073,(1),null);
var focused_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var bassline = cljs.core.deref((function (){var G__13076 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13076) : re_frame.core.subscribe.call(null,G__13076));
})());
return ((function (focused_QMARK_,bassline,vec__13073,x,y){
return (function (p__13077){
var vec__13078 = p__13077;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13078,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13078,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$stroke,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$height],[(0.75 * y__$1),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mecca.events.selected),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)))?"red":null),((function (vec__13078,x__$1,y__$1,focused_QMARK_,bassline,vec__13073,x,y){
return (function (e){
return cljs.core.reset_BANG_(focused_QMARK_,false);
});})(vec__13078,x__$1,y__$1,focused_QMARK_,bassline,vec__13073,x,y))
,"blue",((((4) * cljs.core.count(bassline)) * x__$1) - 0.05),((function (vec__13078,x__$1,y__$1,focused_QMARK_,bassline,vec__13073,x,y){
return (function (){
var G__13081 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_bassline,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13081) : re_frame.core.dispatch.call(null,G__13081));
});})(vec__13078,x__$1,y__$1,focused_QMARK_,bassline,vec__13073,x,y))
,0.1,((function (vec__13078,x__$1,y__$1,focused_QMARK_,bassline,vec__13073,x,y){
return (function (e){
return cljs.core.reset_BANG_(focused_QMARK_,true);
});})(vec__13078,x__$1,y__$1,focused_QMARK_,bassline,vec__13073,x,y))
,((1) + x__$1),0.75])], null),(cljs.core.truth_(cljs.core.deref(focused_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$stroke,"red",cljs.core.cst$kw$stroke_DASH_width,0.4,cljs.core.cst$kw$stroke_DASH_linecap,"round",cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1.5 + x__$1)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.375 + (0.75 * y__$1))),") ","scale(0.15)"].join(''),cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (vec__13078,x__$1,y__$1,focused_QMARK_,bassline,vec__13073,x,y){
return (function (e){
return cljs.core.reset_BANG_(focused_QMARK_,true);
});})(vec__13078,x__$1,y__$1,focused_QMARK_,bassline,vec__13073,x,y))
,cljs.core.cst$kw$on_DASH_click,((function (vec__13078,x__$1,y__$1,focused_QMARK_,bassline,vec__13073,x,y){
return (function (){
var G__13082 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_bassline,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13082) : re_frame.core.dispatch.call(null,G__13082));
});})(vec__13078,x__$1,y__$1,focused_QMARK_,bassline,vec__13073,x,y))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (vec__13078,x__$1,y__$1,focused_QMARK_,bassline,vec__13073,x,y){
return (function (e){
return cljs.core.reset_BANG_(focused_QMARK_,false);
});})(vec__13078,x__$1,y__$1,focused_QMARK_,bassline,vec__13073,x,y))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x1,(-1),cljs.core.cst$kw$y1,(-1),cljs.core.cst$kw$x2,(1),cljs.core.cst$kw$y2,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x1,(1),cljs.core.cst$kw$y1,(-1),cljs.core.cst$kw$x2,(-1),cljs.core.cst$kw$y2,(1)], null)], null)], null):null)], null);
});
;})(focused_QMARK_,bassline,vec__13073,x,y))
});
mecca.components.note_grid = (function mecca$components$note_grid(){
var scale_name = (function (){var G__13085 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13085) : re_frame.core.subscribe.call(null,G__13085));
})();
var scale_notes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref(scale_name));
var bassline = (function (){var G__13086 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13086) : re_frame.core.subscribe.call(null,G__13086));
})();
return ((function (scale_name,scale_notes,bassline){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$view_DASH_box,["0 0 17 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.75 * (((2) * cljs.core.count(scale_notes)) - (1))))].join('')], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (scale_name,scale_notes,bassline){
return (function mecca$components$note_grid_$_iter__13087(s__13088){
return (new cljs.core.LazySeq(null,((function (scale_name,scale_notes,bassline){
return (function (){
var s__13088__$1 = s__13088;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13088__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__13088__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline){
return (function mecca$components$note_grid_$_iter__13087_$_iter__13089(s__13090){
return (new cljs.core.LazySeq(null,((function (s__13088__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline){
return (function (){
var s__13090__$1 = s__13090;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__13090__$1);
if(temp__5457__auto____$1){
var s__13090__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13090__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13090__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13092 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13091 = (0);
while(true){
if((i__13091 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13091);
cljs.core.chunk_append(b__13092,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__13103 = (i__13091 + (1));
i__13091 = G__13103;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13092),mecca$components$note_grid_$_iter__13087_$_iter__13089(cljs.core.chunk_rest(s__13090__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13092),null);
}
} else {
var y = cljs.core.first(s__13090__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$components$note_grid_$_iter__13087_$_iter__13089(cljs.core.rest(s__13090__$2)));
}
} else {
return null;
}
break;
}
});})(s__13088__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline))
,null,null));
});})(s__13088__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((((2) * cljs.core.count(scale_notes)) - (1)))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,mecca$components$note_grid_$_iter__13087(cljs.core.rest(s__13088__$1)));
} else {
var G__13104 = cljs.core.rest(s__13088__$1);
s__13088__$1 = G__13104;
continue;
}
} else {
return null;
}
break;
}
});})(scale_name,scale_notes,bassline))
,null,null));
});})(scale_name,scale_notes,bassline))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((16)));
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (scale_name,scale_notes,bassline){
return (function mecca$components$note_grid_$_iter__13093(s__13094){
return (new cljs.core.LazySeq(null,((function (scale_name,scale_notes,bassline){
return (function (){
var s__13094__$1 = s__13094;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13094__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__13094__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline){
return (function mecca$components$note_grid_$_iter__13093_$_iter__13095(s__13096){
return (new cljs.core.LazySeq(null,((function (s__13094__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline){
return (function (){
var s__13096__$1 = s__13096;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__13096__$1);
if(temp__5457__auto____$1){
var s__13096__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13096__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13096__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13098 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13097 = (0);
while(true){
if((i__13097 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13097);
cljs.core.chunk_append(b__13098,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.grid_lines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__13105 = (i__13097 + (1));
i__13097 = G__13105;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13098),mecca$components$note_grid_$_iter__13093_$_iter__13095(cljs.core.chunk_rest(s__13096__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13098),null);
}
} else {
var y = cljs.core.first(s__13096__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.grid_lines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$components$note_grid_$_iter__13093_$_iter__13095(cljs.core.rest(s__13096__$2)));
}
} else {
return null;
}
break;
}
});})(s__13094__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline))
,null,null));
});})(s__13094__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((((2) * cljs.core.count(scale_notes)) - (1)))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,mecca$components$note_grid_$_iter__13093(cljs.core.rest(s__13094__$1)));
} else {
var G__13106 = cljs.core.rest(s__13094__$1);
s__13094__$1 = G__13106;
continue;
}
} else {
return null;
}
break;
}
});})(scale_name,scale_notes,bassline))
,null,null));
});})(scale_name,scale_notes,bassline))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((1),((4) * (16)),0.25));
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (scale_name,scale_notes,bassline){
return (function mecca$components$note_grid_$_iter__13099(s__13100){
return (new cljs.core.LazySeq(null,((function (scale_name,scale_notes,bassline){
return (function (){
var s__13100__$1 = s__13100;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13100__$1);
if(temp__5457__auto__){
var s__13100__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13100__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13100__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13102 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13101 = (0);
while(true){
if((i__13101 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13101);
var y = cljs.core.deref(bassline);
if(typeof y === 'number'){
cljs.core.chunk_append(b__13102,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,x], null)));

var G__13107 = (i__13101 + (1));
i__13101 = G__13107;
continue;
} else {
var G__13108 = (i__13101 + (1));
i__13101 = G__13108;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13102),mecca$components$note_grid_$_iter__13099(cljs.core.chunk_rest(s__13100__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13102),null);
}
} else {
var x = cljs.core.first(s__13100__$2);
var y = cljs.core.deref(bassline);
if(typeof y === 'number'){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,x], null)),mecca$components$note_grid_$_iter__13099(cljs.core.rest(s__13100__$2)));
} else {
var G__13109 = cljs.core.rest(s__13100__$2);
s__13100__$1 = G__13109;
continue;
}
}
} else {
return null;
}
break;
}
});})(scale_name,scale_notes,bassline))
,null,null));
});})(scale_name,scale_notes,bassline))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((16)));
})())], null);
});
;})(scale_name,scale_notes,bassline))
});
mecca.components.note_stem = (function mecca$components$note_stem(p__13111){
var vec__13112 = p__13111;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13112,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13112,(1),null);
var stem_down_QMARK_ = ((function (vec__13112,x,y){
return (function (p1__13110_SHARP_){
return (p1__13110_SHARP_ > (1));
});})(vec__13112,x,y))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,(cljs.core.truth_(stem_down_QMARK_(y))?new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$stroke_DASH_linecap,"round",cljs.core.cst$kw$stroke_DASH_linejoin,"bevel",cljs.core.cst$kw$x1,((7) + (6.5 * x)),cljs.core.cst$kw$x2,((7) + (6.5 * x)),cljs.core.cst$kw$y1,(13.5 - (0.57 * y)),cljs.core.cst$kw$y2,(19.1 - (0.57 * y))], null):new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$stroke_DASH_linecap,"round",cljs.core.cst$kw$stroke_DASH_linejoin,"bevel",cljs.core.cst$kw$x1,((10) + (6.5 * x)),cljs.core.cst$kw$x2,((10) + (6.5 * x)),cljs.core.cst$kw$y1,(6.1 - (0.57 * y)),cljs.core.cst$kw$y2,(12.5 - (0.57 * y))], null))], null)], null);
});
mecca.components.note_head = (function mecca$components$note_head(p__13115){
var vec__13116 = p__13115;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13116,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13116,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ellipse,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$transform,["rotate(-28, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((9) + (6.5 * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((14.2 - (0.5 * y))),")"].join(''),cljs.core.cst$kw$cx,((9) + (6.5 * x)),cljs.core.cst$kw$cy,(13.1 - (0.57 * y)),cljs.core.cst$kw$rx,1.6,cljs.core.cst$kw$ry,(1)], null)], null)], null);
});
mecca.components.bass_clef = (function mecca$components$bass_clef(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"scale(0.36,0.36) translate(-4.5,22)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"M18.3 9C18.4 11.9 17.1 14.6 15.1 16.6 12.6 19.1 9.4 20.6 6.1 21.7 5.6 21.9 5 21.6 5.7 21.3 7 20.7 8.4 20.2 9.6 19.3 12.3 17.7 14.6 15 15.2 11.8 15.5 9.8 15.4 7.8 14.9 5.8 14.6 4.4 13.6 3 12 2.8 10.6 2.5 9.1 3 8.1 4 7.8 4.3 7.3 5.1 7.4 5.9 8 5.4 8 5.5 8.5 5.3 9.6 4.8 11.1 5.5 11.4 6.7 11.7 7.9 11.5 9.4 10.3 10 9.1 10.6 7.4 10.3 6.7 9.1 5.6 7.1 6.2 4.4 8 3.1 9.8 1.6 12.4 1.5 14.6 2.3 16.8 3.1 18.1 5.4 18.3 7.6 18.3 8.1 18.3 8.6 18.3 9z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,(20),cljs.core.cst$kw$cy,5.5,cljs.core.cst$kw$r,1.25], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,(20),cljs.core.cst$kw$cy,9.5,cljs.core.cst$kw$r,1.25], null)], null)], null);
});
mecca.components.staff = (function mecca$components$staff(){
var bassline = (function (){var G__13119 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13119) : re_frame.core.subscribe.call(null,G__13119));
})();
var mouse_over = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
return ((function (bassline,mouse_over){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$view_DASH_box,"0 0 110 25"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bass_clef], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (bassline,mouse_over){
return (function mecca$components$staff_$_iter__13120(s__13121){
return (new cljs.core.LazySeq(null,((function (bassline,mouse_over){
return (function (){
var s__13121__$1 = s__13121;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13121__$1);
if(temp__5457__auto__){
var s__13121__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13121__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13121__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13123 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13122 = (0);
while(true){
if((i__13122 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13122);
cljs.core.chunk_append(b__13123,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$stroke_DASH_dasharray,cljs.core.cst$kw$stroke,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$stroke_DASH_linejoin,cljs.core.cst$kw$y1,cljs.core.cst$kw$stroke_DASH_linecap,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x1,cljs.core.cst$kw$y2,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$x2,cljs.core.cst$kw$visibility],[((cljs.core.odd_QMARK_(y))?0.5:null),"black",((function (i__13122,y,c__4322__auto__,size__4323__auto__,b__13123,s__13121__$2,temp__5457__auto__,bassline,mouse_over){
return (function (){
return cljs.core.reset_BANG_(mouse_over,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
});})(i__13122,y,c__4322__auto__,size__4323__auto__,b__13123,s__13121__$2,temp__5457__auto__,bassline,mouse_over))
,"bevel",(0.5 + y),"butt",((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.deref(mouse_over))) || (cljs.core.even_QMARK_(y))))?0.1:1.8),((function (i__13122,y,c__4322__auto__,size__4323__auto__,b__13123,s__13121__$2,temp__5457__auto__,bassline,mouse_over){
return (function (){
return cljs.core.reset_BANG_(mouse_over,y);
});})(i__13122,y,c__4322__auto__,size__4323__auto__,b__13123,s__13121__$2,temp__5457__auto__,bassline,mouse_over))
,(0),(0.5 + y),"all",(110),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.deref(mouse_over))) || (cljs.core.even_QMARK_(y))))?"visible":"hidden")])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,y], null)));

var G__13138 = (i__13122 + (1));
i__13122 = G__13138;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13123),mecca$components$staff_$_iter__13120(cljs.core.chunk_rest(s__13121__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13123),null);
}
} else {
var y = cljs.core.first(s__13121__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$stroke_DASH_dasharray,cljs.core.cst$kw$stroke,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$stroke_DASH_linejoin,cljs.core.cst$kw$y1,cljs.core.cst$kw$stroke_DASH_linecap,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x1,cljs.core.cst$kw$y2,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$x2,cljs.core.cst$kw$visibility],[((cljs.core.odd_QMARK_(y))?0.5:null),"black",((function (y,s__13121__$2,temp__5457__auto__,bassline,mouse_over){
return (function (){
return cljs.core.reset_BANG_(mouse_over,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
});})(y,s__13121__$2,temp__5457__auto__,bassline,mouse_over))
,"bevel",(0.5 + y),"butt",((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.deref(mouse_over))) || (cljs.core.even_QMARK_(y))))?0.1:1.8),((function (y,s__13121__$2,temp__5457__auto__,bassline,mouse_over){
return (function (){
return cljs.core.reset_BANG_(mouse_over,y);
});})(y,s__13121__$2,temp__5457__auto__,bassline,mouse_over))
,(0),(0.5 + y),"all",(110),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.deref(mouse_over))) || (cljs.core.even_QMARK_(y))))?"visible":"hidden")])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,y], null)),mecca$components$staff_$_iter__13120(cljs.core.rest(s__13121__$2)));
}
} else {
return null;
}
break;
}
});})(bassline,mouse_over))
,null,null));
});})(bassline,mouse_over))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((8),(17)));
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (bassline,mouse_over){
return (function mecca$components$staff_$_iter__13124(s__13125){
return (new cljs.core.LazySeq(null,((function (bassline,mouse_over){
return (function (){
var s__13125__$1 = s__13125;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13125__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__13125__$1,x,xs__6012__auto__,temp__5457__auto__,bassline,mouse_over){
return (function mecca$components$staff_$_iter__13124_$_iter__13126(s__13127){
return (new cljs.core.LazySeq(null,((function (s__13125__$1,x,xs__6012__auto__,temp__5457__auto__,bassline,mouse_over){
return (function (){
var s__13127__$1 = s__13127;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__13127__$1);
if(temp__5457__auto____$1){
var s__13127__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13127__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13127__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13129 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13128 = (0);
while(true){
if((i__13128 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13128);
cljs.core.chunk_append(b__13129,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$ry,cljs.core.cst$kw$height],[(0.5 + ((2) * y)),((function (i__13128,s__13125__$1,y,c__4322__auto__,size__4323__auto__,b__13129,s__13127__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,bassline,mouse_over){
return (function (){
return cljs.core.reset_BANG_(mouse_over,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
});})(i__13128,s__13125__$1,y,c__4322__auto__,size__4323__auto__,b__13129,s__13127__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,bassline,mouse_over))
,(3),((function (i__13128,s__13125__$1,y,c__4322__auto__,size__4323__auto__,b__13129,s__13127__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,bassline,mouse_over){
return (function (){
return cljs.core.reset_BANG_(mouse_over,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__13128,s__13125__$1,y,c__4322__auto__,size__4323__auto__,b__13129,s__13127__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,bassline,mouse_over))
,((7) + (6.5 * x)),"all",((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.deref(mouse_over))) && (((((7) < y)) && ((y < (17)))))))?"hidden":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.deref(mouse_over)))?"visible":"hidden"
)),0.1,0.2])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__13139 = (i__13128 + (1));
i__13128 = G__13139;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13129),mecca$components$staff_$_iter__13124_$_iter__13126(cljs.core.chunk_rest(s__13127__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13129),null);
}
} else {
var y = cljs.core.first(s__13127__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$ry,cljs.core.cst$kw$height],[(0.5 + ((2) * y)),((function (s__13125__$1,y,s__13127__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,bassline,mouse_over){
return (function (){
return cljs.core.reset_BANG_(mouse_over,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
});})(s__13125__$1,y,s__13127__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,bassline,mouse_over))
,(3),((function (s__13125__$1,y,s__13127__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,bassline,mouse_over){
return (function (){
return cljs.core.reset_BANG_(mouse_over,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(s__13125__$1,y,s__13127__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,bassline,mouse_over))
,((7) + (6.5 * x)),"all",((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.deref(mouse_over))) && (((((7) < y)) && ((y < (17)))))))?"hidden":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.deref(mouse_over)))?"visible":"hidden"
)),0.1,0.2])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$components$staff_$_iter__13124_$_iter__13126(cljs.core.rest(s__13127__$2)));
}
} else {
return null;
}
break;
}
});})(s__13125__$1,x,xs__6012__auto__,temp__5457__auto__,bassline,mouse_over))
,null,null));
});})(s__13125__$1,x,xs__6012__auto__,temp__5457__auto__,bassline,mouse_over))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((24))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,mecca$components$staff_$_iter__13124(cljs.core.rest(s__13125__$1)));
} else {
var G__13140 = cljs.core.rest(s__13125__$1);
s__13125__$1 = G__13140;
continue;
}
} else {
return null;
}
break;
}
});})(bassline,mouse_over))
,null,null));
});})(bassline,mouse_over))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((16)));
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (bassline,mouse_over){
return (function mecca$components$staff_$_iter__13130(s__13131){
return (new cljs.core.LazySeq(null,((function (bassline,mouse_over){
return (function (){
var s__13131__$1 = s__13131;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13131__$1);
if(temp__5457__auto__){
var s__13131__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13131__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13131__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13133 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13132 = (0);
while(true){
if((i__13132 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13132);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bassline),x);
if(typeof y === 'number'){
cljs.core.chunk_append(b__13133,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_head,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (48))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,x], null)));

var G__13141 = (i__13132 + (1));
i__13132 = G__13141;
continue;
} else {
var G__13142 = (i__13132 + (1));
i__13132 = G__13142;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13133),mecca$components$staff_$_iter__13130(cljs.core.chunk_rest(s__13131__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13133),null);
}
} else {
var x = cljs.core.first(s__13131__$2);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bassline),x);
if(typeof y === 'number'){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_head,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (48))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,x], null)),mecca$components$staff_$_iter__13130(cljs.core.rest(s__13131__$2)));
} else {
var G__13143 = cljs.core.rest(s__13131__$2);
s__13131__$1 = G__13143;
continue;
}
}
} else {
return null;
}
break;
}
});})(bassline,mouse_over))
,null,null));
});})(bassline,mouse_over))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((16)));
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (bassline,mouse_over){
return (function mecca$components$staff_$_iter__13134(s__13135){
return (new cljs.core.LazySeq(null,((function (bassline,mouse_over){
return (function (){
var s__13135__$1 = s__13135;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13135__$1);
if(temp__5457__auto__){
var s__13135__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13135__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13135__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13137 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13136 = (0);
while(true){
if((i__13136 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13136);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bassline),x);
if(typeof y === 'number'){
cljs.core.chunk_append(b__13137,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_stem,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (48))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,x], null)));

var G__13144 = (i__13136 + (1));
i__13136 = G__13144;
continue;
} else {
var G__13145 = (i__13136 + (1));
i__13136 = G__13145;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13137),mecca$components$staff_$_iter__13134(cljs.core.chunk_rest(s__13135__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13137),null);
}
} else {
var x = cljs.core.first(s__13135__$2);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(bassline),x);
if(typeof y === 'number'){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_stem,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (48))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,x], null)),mecca$components$staff_$_iter__13134(cljs.core.rest(s__13135__$2)));
} else {
var G__13146 = cljs.core.rest(s__13135__$2);
s__13135__$1 = G__13146;
continue;
}
}
} else {
return null;
}
break;
}
});})(bassline,mouse_over))
,null,null));
});})(bassline,mouse_over))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((16)));
})())], null);
});
;})(bassline,mouse_over))
});
mecca.components.basslines = (function mecca$components$basslines(){
var active = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Alberti bass");
return ((function (active){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Try some well-known musical patterns: "], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (active){
return (function mecca$components$basslines_$_iter__13147(s__13148){
return (new cljs.core.LazySeq(null,((function (active){
return (function (){
var s__13148__$1 = s__13148;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13148__$1);
if(temp__5457__auto__){
var s__13148__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13148__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13148__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13150 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13149 = (0);
while(true){
if((i__13149 < size__4323__auto__)){
var map__13151 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13149);
var map__13151__$1 = ((((!((map__13151 == null)))?(((((map__13151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13151):map__13151);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13151__$1,cljs.core.cst$kw$name);
var notes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13151__$1,cljs.core.cst$kw$notes);
var scales = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13151__$1,cljs.core.cst$kw$scales);
cljs.core.chunk_append(b__13150,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (i__13149,map__13151,map__13151__$1,name,notes,scales,c__4322__auto__,size__4323__auto__,b__13150,s__13148__$2,temp__5457__auto__,active){
return (function (e){
var G__13153_13159 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_bassline,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),cljs.core.cycle(notes)))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13153_13159) : re_frame.core.dispatch.call(null,G__13153_13159));

var G__13154_13160 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_scale,cljs.core.first(scales)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13154_13160) : re_frame.core.dispatch.call(null,G__13154_13160));

return cljs.core.reset_BANG_(active,name);
});})(i__13149,map__13151,map__13151__$1,name,notes,scales,c__4322__auto__,size__4323__auto__,b__13150,s__13148__$2,temp__5457__auto__,active))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.deref(active)))?"lightgreen":"violet")], null)], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,name], null)));

var G__13161 = (i__13149 + (1));
i__13149 = G__13161;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13150),mecca$components$basslines_$_iter__13147(cljs.core.chunk_rest(s__13148__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13150),null);
}
} else {
var map__13155 = cljs.core.first(s__13148__$2);
var map__13155__$1 = ((((!((map__13155 == null)))?(((((map__13155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13155):map__13155);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13155__$1,cljs.core.cst$kw$name);
var notes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13155__$1,cljs.core.cst$kw$notes);
var scales = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13155__$1,cljs.core.cst$kw$scales);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (map__13155,map__13155__$1,name,notes,scales,s__13148__$2,temp__5457__auto__,active){
return (function (e){
var G__13157_13162 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_bassline,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),cljs.core.cycle(notes)))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13157_13162) : re_frame.core.dispatch.call(null,G__13157_13162));

var G__13158_13163 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_scale,cljs.core.first(scales)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13158_13163) : re_frame.core.dispatch.call(null,G__13158_13163));

return cljs.core.reset_BANG_(active,name);
});})(map__13155,map__13155__$1,name,notes,scales,s__13148__$2,temp__5457__auto__,active))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.deref(active)))?"lightgreen":"violet")], null)], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,name], null)),mecca$components$basslines_$_iter__13147(cljs.core.rest(s__13148__$2)));
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
mecca.components.mecca = (function mecca$components$mecca(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$center,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"MECCA Music Platform"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"The Music Education, Composition & Creation Application"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.scale_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.key_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.octave_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.tempo_input], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mario], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.staff], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.basslines], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
return mecca.music.play_bassline_BANG_();
})], null),"Play Bassline"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_grid], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Intervals: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13165 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13165) : re_frame.core.subscribe.call(null,G__13165));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13166 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13166) : re_frame.core.subscribe.call(null,G__13166));
})()))," scale from MIDI number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.music.root_note_midi_num())," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13167 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13167) : re_frame.core.subscribe.call(null,G__13167));
})())),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13168 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$octave], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13168) : re_frame.core.subscribe.call(null,G__13168));
})())),"):"].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Tempo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13169 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13169) : re_frame.core.subscribe.call(null,G__13169));
})()))].join('')], null)], null)], null);
});
