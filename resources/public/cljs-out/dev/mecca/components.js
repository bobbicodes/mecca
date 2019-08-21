// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.components');
goog.require('cljs.core');
goog.require('mecca.music');
goog.require('mecca.subs');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('mecca.events');
goog.require('mecca.music.melody');
goog.require('mecca.music.scale');
goog.require('mecca.music.mario');
mecca.components.scale_picker = (function mecca$components$scale_picker(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Scale: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
e.preventDefault();

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-scale","set-scale",-582286217),e.target.value], null));
})], null),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function mecca$components$scale_picker_$_iter__27332(s__27333){
return (new cljs.core.LazySeq(null,(function (){
var s__27333__$1 = s__27333;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__27333__$1);
if(temp__5457__auto__){
var s__27333__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27333__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__27333__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__27335 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__27334 = (0);
while(true){
if((i__27334 < size__4323__auto__)){
var scale = cljs.core._nth.call(null,c__4322__auto__,i__27334);
cljs.core.chunk_append.call(null,b__27335,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),scale], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scale], null)));

var G__27336 = (i__27334 + (1));
i__27334 = G__27336;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27335),mecca$components$scale_picker_$_iter__27332.call(null,cljs.core.chunk_rest.call(null,s__27333__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27335),null);
}
} else {
var scale = cljs.core.first.call(null,s__27333__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),scale], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scale], null)),mecca$components$scale_picker_$_iter__27332.call(null,cljs.core.rest.call(null,s__27333__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.keys.call(null,mecca.music.scales));
})())], null)], null);
});
mecca.components.key_picker = (function mecca$components$key_picker(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804)," Key: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
e.preventDefault();

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-key","set-key",-48186176),e.target.value], null));
})], null),(function (){var iter__4324__auto__ = (function mecca$components$key_picker_$_iter__27337(s__27338){
return (new cljs.core.LazySeq(null,(function (){
var s__27338__$1 = s__27338;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__27338__$1);
if(temp__5457__auto__){
var s__27338__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27338__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__27338__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__27340 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__27339 = (0);
while(true){
if((i__27339 < size__4323__auto__)){
var note = cljs.core._nth.call(null,c__4322__auto__,i__27339);
cljs.core.chunk_append.call(null,b__27340,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),note], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),note], null)));

var G__27341 = (i__27339 + (1));
i__27339 = G__27341;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27340),mecca$components$key_picker_$_iter__27337.call(null,cljs.core.chunk_rest.call(null,s__27338__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27340),null);
}
} else {
var note = cljs.core.first.call(null,s__27338__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),note], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),note], null)),mecca$components$key_picker_$_iter__27337.call(null,cljs.core.rest.call(null,s__27338__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,mecca.music.notes);
})()], null)], null);
});
mecca.components.octave_input = (function mecca$components$octave_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804)," Octave: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"6%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"lightgray"], null),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"octave","octave",1066197953)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
e.preventDefault();

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-octave","set-octave",378200257),e.target.value], null));
})], null)], null)], null);
});
mecca.components.tempo_input = (function mecca$components$tempo_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804)," Tempo: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"8%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"lightgray"], null),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
e.preventDefault();

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),e.target.value], null));
})], null)], null)], null);
});
mecca.components.cell = (function mecca$components$cell(p__27342){
var vec__27343 = p__27342;
var x = cljs.core.nth.call(null,vec__27343,(0),null);
var y = cljs.core.nth.call(null,vec__27343,(1),null);
var focused_QMARK_ = reagent.core.atom.call(null,false);
var bassline = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null));
return ((function (focused_QMARK_,bassline,vec__27343,x,y){
return (function (p__27346){
var vec__27347 = p__27346;
var x__$1 = cljs.core.nth.call(null,vec__27347,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__27347,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],[(y__$1 * 0.75),"black",((function (vec__27347,x__$1,y__$1,focused_QMARK_,bassline,vec__27343,x,y){
return (function (){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,false);
});})(vec__27347,x__$1,y__$1,focused_QMARK_,bassline,vec__27343,x,y))
,(cljs.core.truth_(cljs.core.deref.call(null,focused_QMARK_))?"violet":((clojure.string.includes_QMARK_.call(null,mecca.music.midi_num__GT_note.call(null,y__$1),"#"))?"pink":"white"
)),(1),((function (vec__27347,x__$1,y__$1,focused_QMARK_,bassline,vec__27343,x,y){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),cljs.core.assoc.call(null,cljs.core.deref.call(null,bassline),x__$1,y__$1)], null));
});})(vec__27347,x__$1,y__$1,focused_QMARK_,bassline,vec__27343,x,y))
,0.05,((function (vec__27347,x__$1,y__$1,focused_QMARK_,bassline,vec__27343,x,y){
return (function (){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,true);
});})(vec__27347,x__$1,y__$1,focused_QMARK_,bassline,vec__27343,x,y))
,((1) + x__$1),0.75])], null);
});
;})(focused_QMARK_,bassline,vec__27343,x,y))
});
mecca.components.note_label = (function mecca$components$note_label(y){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0.5 + (y * 0.75)),new cljs.core.Keyword(null,"height","height",1025178622),0.75,new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"left",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),0.5], null),mecca.music.midi_num__GT_note.call(null,y)], null);
});
mecca.components.grid_lines = (function mecca$components$grid_lines(p__27350){
var vec__27351 = p__27350;
var x = cljs.core.nth.call(null,vec__27351,(0),null);
var y = cljs.core.nth.call(null,vec__27351,(1),null);
var line_focused_QMARK_ = reagent.core.atom.call(null,false);
var notes = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null)));
var note_endings = cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (line_focused_QMARK_,notes,vec__27351,x,y){
return (function mecca$components$grid_lines_$_iter__27354(s__27355){
return (new cljs.core.LazySeq(null,((function (line_focused_QMARK_,notes,vec__27351,x,y){
return (function (){
var s__27355__$1 = s__27355;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__27355__$1);
if(temp__5457__auto__){
var s__27355__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27355__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__27355__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__27357 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__27356 = (0);
while(true){
if((i__27356 < size__4323__auto__)){
var map__27358 = cljs.core._nth.call(null,c__4322__auto__,i__27356);
var map__27358__$1 = ((((!((map__27358 == null)))?(((((map__27358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27358):map__27358);
var time = cljs.core.get.call(null,map__27358__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__27358__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var pitch = cljs.core.get.call(null,map__27358__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append.call(null,b__27357,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((time + duration) + (1)),pitch], null));

var G__27366 = (i__27356 + (1));
i__27356 = G__27366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27357),mecca$components$grid_lines_$_iter__27354.call(null,cljs.core.chunk_rest.call(null,s__27355__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27357),null);
}
} else {
var map__27360 = cljs.core.first.call(null,s__27355__$2);
var map__27360__$1 = ((((!((map__27360 == null)))?(((((map__27360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27360):map__27360);
var time = cljs.core.get.call(null,map__27360__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__27360__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var pitch = cljs.core.get.call(null,map__27360__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((time + duration) + (1)),pitch], null),mecca$components$grid_lines_$_iter__27354.call(null,cljs.core.rest.call(null,s__27355__$2)));
}
} else {
return null;
}
break;
}
});})(line_focused_QMARK_,notes,vec__27351,x,y))
,null,null));
});})(line_focused_QMARK_,notes,vec__27351,x,y))
;
return iter__4324__auto__.call(null,notes);
})());
return ((function (line_focused_QMARK_,notes,note_endings,vec__27351,x,y){
return (function (p__27362){
var vec__27363 = p__27362;
var x__$1 = cljs.core.nth.call(null,vec__27363,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__27363,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475)],[((cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,note_endings),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)))?"red":((cljs.core._EQ_.call(null,(1),cljs.core.mod.call(null,x__$1,(4))))?"black":"lightgrey"
)),((function (vec__27363,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__27351,x,y){
return (function (e){
return cljs.core.swap_BANG_.call(null,line_focused_QMARK_,cljs.core.not);
});})(vec__27363,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__27351,x,y))
,(- y__$1),mecca.events.mouse_down_handler,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(cljs.core.deref.call(null,line_focused_QMARK_))?"ew-resize":null)], null),((cljs.core._EQ_.call(null,(1),cljs.core.mod.call(null,x__$1,(4))))?0.075:0.04),((function (vec__27363,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__27351,x,y){
return (function (e){
return cljs.core.swap_BANG_.call(null,line_focused_QMARK_,cljs.core.not);
});})(vec__27363,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__27351,x,y))
,x__$1,(y__$1 - (1)),x__$1])], null);
});
;})(line_focused_QMARK_,notes,note_endings,vec__27351,x,y))
});
mecca.components.note = (function mecca$components$note(p__27367){
var vec__27368 = p__27367;
var x = cljs.core.nth.call(null,vec__27368,(0),null);
var y = cljs.core.nth.call(null,vec__27368,(1),null);
var focused_QMARK_ = cljs.core.atom.call(null,false);
var bassline = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null)));
return ((function (focused_QMARK_,bassline,vec__27368,x,y){
return (function (p__27371){
var vec__27372 = p__27371;
var x__$1 = cljs.core.nth.call(null,vec__27372,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__27372,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],[(0.75 * y__$1),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,mecca.events.selected),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)))?"red":null),((function (vec__27372,x__$1,y__$1,focused_QMARK_,bassline,vec__27368,x,y){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,false);
});})(vec__27372,x__$1,y__$1,focused_QMARK_,bassline,vec__27368,x,y))
,"blue",((((4) * cljs.core.count.call(null,bassline)) * x__$1) - 0.05),((function (vec__27372,x__$1,y__$1,focused_QMARK_,bassline,vec__27368,x,y){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,null], null)], null));
});})(vec__27372,x__$1,y__$1,focused_QMARK_,bassline,vec__27368,x,y))
,0.1,((function (vec__27372,x__$1,y__$1,focused_QMARK_,bassline,vec__27368,x,y){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,true);
});})(vec__27372,x__$1,y__$1,focused_QMARK_,bassline,vec__27368,x,y))
,((1) + x__$1),0.75])], null),(cljs.core.truth_(cljs.core.deref.call(null,focused_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"red",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.4,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1.5 + x__$1)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.375 + (0.75 * y__$1))),") ","scale(0.15)"].join(''),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (vec__27372,x__$1,y__$1,focused_QMARK_,bassline,vec__27368,x,y){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,true);
});})(vec__27372,x__$1,y__$1,focused_QMARK_,bassline,vec__27368,x,y))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__27372,x__$1,y__$1,focused_QMARK_,bassline,vec__27368,x,y){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,null], null)], null));
});})(vec__27372,x__$1,y__$1,focused_QMARK_,bassline,vec__27368,x,y))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (vec__27372,x__$1,y__$1,focused_QMARK_,bassline,vec__27368,x,y){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,false);
});})(vec__27372,x__$1,y__$1,focused_QMARK_,bassline,vec__27368,x,y))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(-1),new cljs.core.Keyword(null,"y1","y1",589123466),(-1),new cljs.core.Keyword(null,"x2","x2",-1362513475),(1),new cljs.core.Keyword(null,"y2","y2",-718691301),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(1),new cljs.core.Keyword(null,"y1","y1",589123466),(-1),new cljs.core.Keyword(null,"x2","x2",-1362513475),(-1),new cljs.core.Keyword(null,"y2","y2",-718691301),(1)], null)], null)], null):null)], null);
});
;})(focused_QMARK_,bassline,vec__27368,x,y))
});
mecca.components.note_grid = (function mecca$components$note_grid(){
var scale_name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null));
var scale_notes = cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,scale_name));
var bassline = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null));
return ((function (scale_name,scale_notes,bassline){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),["0 0 17 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.75 * (((2) * cljs.core.count.call(null,scale_notes)) - (1))))].join('')], null),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (scale_name,scale_notes,bassline){
return (function mecca$components$note_grid_$_iter__27377(s__27378){
return (new cljs.core.LazySeq(null,((function (scale_name,scale_notes,bassline){
return (function (){
var s__27378__$1 = s__27378;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__27378__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__27378__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline){
return (function mecca$components$note_grid_$_iter__27377_$_iter__27379(s__27380){
return (new cljs.core.LazySeq(null,((function (s__27378__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline){
return (function (){
var s__27380__$1 = s__27380;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__27380__$1);
if(temp__5457__auto____$1){
var s__27380__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27380__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__27380__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__27382 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__27381 = (0);
while(true){
if((i__27381 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__27381);
cljs.core.chunk_append.call(null,b__27382,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__27393 = (i__27381 + (1));
i__27381 = G__27393;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27382),mecca$components$note_grid_$_iter__27377_$_iter__27379.call(null,cljs.core.chunk_rest.call(null,s__27380__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27382),null);
}
} else {
var y = cljs.core.first.call(null,s__27380__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$components$note_grid_$_iter__27377_$_iter__27379.call(null,cljs.core.rest.call(null,s__27380__$2)));
}
} else {
return null;
}
break;
}
});})(s__27378__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline))
,null,null));
});})(s__27378__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,(((2) * cljs.core.count.call(null,scale_notes)) - (1)))));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,mecca$components$note_grid_$_iter__27377.call(null,cljs.core.rest.call(null,s__27378__$1)));
} else {
var G__27394 = cljs.core.rest.call(null,s__27378__$1);
s__27378__$1 = G__27394;
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
return iter__4324__auto__.call(null,cljs.core.range.call(null,(16)));
})()),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (scale_name,scale_notes,bassline){
return (function mecca$components$note_grid_$_iter__27383(s__27384){
return (new cljs.core.LazySeq(null,((function (scale_name,scale_notes,bassline){
return (function (){
var s__27384__$1 = s__27384;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__27384__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__27384__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline){
return (function mecca$components$note_grid_$_iter__27383_$_iter__27385(s__27386){
return (new cljs.core.LazySeq(null,((function (s__27384__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline){
return (function (){
var s__27386__$1 = s__27386;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__27386__$1);
if(temp__5457__auto____$1){
var s__27386__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27386__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__27386__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__27388 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__27387 = (0);
while(true){
if((i__27387 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__27387);
cljs.core.chunk_append.call(null,b__27388,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.grid_lines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__27395 = (i__27387 + (1));
i__27387 = G__27395;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27388),mecca$components$note_grid_$_iter__27383_$_iter__27385.call(null,cljs.core.chunk_rest.call(null,s__27386__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27388),null);
}
} else {
var y = cljs.core.first.call(null,s__27386__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.grid_lines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$components$note_grid_$_iter__27383_$_iter__27385.call(null,cljs.core.rest.call(null,s__27386__$2)));
}
} else {
return null;
}
break;
}
});})(s__27384__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline))
,null,null));
});})(s__27384__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,(((2) * cljs.core.count.call(null,scale_notes)) - (1)))));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,mecca$components$note_grid_$_iter__27383.call(null,cljs.core.rest.call(null,s__27384__$1)));
} else {
var G__27396 = cljs.core.rest.call(null,s__27384__$1);
s__27384__$1 = G__27396;
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
return iter__4324__auto__.call(null,cljs.core.range.call(null,(1),((4) * (16)),0.25));
})()),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (scale_name,scale_notes,bassline){
return (function mecca$components$note_grid_$_iter__27389(s__27390){
return (new cljs.core.LazySeq(null,((function (scale_name,scale_notes,bassline){
return (function (){
var s__27390__$1 = s__27390;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__27390__$1);
if(temp__5457__auto__){
var s__27390__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27390__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__27390__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__27392 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__27391 = (0);
while(true){
if((i__27391 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__27391);
var y = cljs.core.deref.call(null,bassline);
if(typeof y === 'number'){
cljs.core.chunk_append.call(null,b__27392,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__27397 = (i__27391 + (1));
i__27391 = G__27397;
continue;
} else {
var G__27398 = (i__27391 + (1));
i__27391 = G__27398;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27392),mecca$components$note_grid_$_iter__27389.call(null,cljs.core.chunk_rest.call(null,s__27390__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27392),null);
}
} else {
var x = cljs.core.first.call(null,s__27390__$2);
var y = cljs.core.deref.call(null,bassline);
if(typeof y === 'number'){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),mecca$components$note_grid_$_iter__27389.call(null,cljs.core.rest.call(null,s__27390__$2)));
} else {
var G__27399 = cljs.core.rest.call(null,s__27390__$2);
s__27390__$1 = G__27399;
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
return iter__4324__auto__.call(null,cljs.core.range.call(null,(16)));
})())], null);
});
;})(scale_name,scale_notes,bassline))
});
mecca.components.eighth_note_flag = (function mecca$components$eighth_note_flag(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.007,-0.007)",new cljs.core.Keyword(null,"d","d",1972142424),"M179 -646c15 29 28.5449 55.0752 46 102c18.3213 49.2549 30 108.298 30 138c0 105 -80 173 -168 200c-18 5 -47 9 -87 16v190h22c8 0 33 -61 71 -95c4 -3 -2 3 61 -56c62 -58 122 -137 122 -241c0 -37.5245 -12.6807 -106.071 -35 -163 c-19.9111 -50.7861 -43 -99 -66 -132c-6 -5 -10 -7 -13 -7s-5 2 -5 5l4 10c1.17241 2.93103 13.7644 24.8111 18 33z"], null)], null);
});
mecca.components.beam = (function mecca$components$beam(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),"2981,475 3499,424 3499,484 2981,535"], null)], null);
});
mecca.components.quarter_note = (function mecca$components$quarter_note(){
return (function (color,p__27400){
var vec__27401 = p__27400;
var x = cljs.core.nth.call(null,vec__27401,(0),null);
var y = cljs.core.nth.call(null,vec__27401,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["scale (7,7) translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((7.75 + (6.5 * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((- y)),") "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M0 25.325c0-.567.608-1.433 1.667-1.433.55 0 .95.308 .95.792 0 .7-.883 1.425-1.817 1.425-.533 0-.8-.25-.8-.783Z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(((y < (1)))?2.4:(0)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y < (1)))?(((25) - (y * 0.1433)) - 6.794):(25.588 - (y * 0.1433))),new cljs.core.Keyword(null,"height","height",1025178622),6.794,new cljs.core.Keyword(null,"width","width",-384071477),0.2], null)], null)], null);
});
});
mecca.components.note_stem = (function mecca$components$note_stem(p__27405){
var vec__27406 = p__27405;
var x = cljs.core.nth.call(null,vec__27406,(0),null);
var y = cljs.core.nth.call(null,vec__27406,(1),null);
var stem_down_QMARK_ = ((function (vec__27406,x,y){
return (function (p1__27404_SHARP_){
return (p1__27404_SHARP_ > (1));
});})(vec__27406,x,y))
;
return ((function (stem_down_QMARK_,vec__27406,x,y){
return (function (p__27409){
var vec__27410 = p__27409;
var x__$1 = cljs.core.nth.call(null,vec__27410,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__27410,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_(stem_down_QMARK_.call(null,y__$1))?new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.25,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"bevel",new cljs.core.Keyword(null,"x1","x1",-1863922247),(7.75 + (6.5 * x__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),(7.75 + (6.5 * x__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),(13.5 - (0.5 * y__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),(19.2 - (0.5 * y__$1))], null):new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.25,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"bevel",new cljs.core.Keyword(null,"x1","x1",-1863922247),(10.25 + (6.5 * x__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),(10.25 + (6.5 * x__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),(6.5 - (0.5 * y__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),(13.5 - (0.5 * y__$1))], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.eighth_note_flag], null)], null);
});
;})(stem_down_QMARK_,vec__27406,x,y))
});
mecca.components.bass_clef = (function mecca$components$bass_clef(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(2.3,2.3) translate(2,81.35)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M18.3 9C18.4 11.9 17.1 14.6 15.1 16.6 12.6 19.1 9.4 20.6 6.1 21.7 5.6 21.9 5 21.6 5.7 21.3 7 20.7 8.4 20.2 9.6 19.3 12.3 17.7 14.6 15 15.2 11.8 15.5 9.8 15.4 7.8 14.9 5.8 14.6 4.4 13.6 3 12 2.8 10.6 2.5 9.1 3 8.1 4 7.8 4.3 7.3 5.1 7.4 5.9 8 5.4 8 5.5 8.5 5.3 9.6 4.8 11.1 5.5 11.4 6.7 11.7 7.9 11.5 9.4 10.3 10 9.1 10.6 7.4 10.3 6.7 9.1 5.6 7.1 6.2 4.4 8 3.1 9.8 1.6 12.4 1.5 14.6 2.3 16.8 3.1 18.1 5.4 18.3 7.6 18.3 8.1 18.3 8.6 18.3 9z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),(20),new cljs.core.Keyword(null,"cy","cy",755331060),5.5,new cljs.core.Keyword(null,"r","r",-471384190),1.25], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),(20),new cljs.core.Keyword(null,"cy","cy",755331060),9.5,new cljs.core.Keyword(null,"r","r",-471384190),1.25], null)], null)], null);
});
mecca.components.treble_clef = (function mecca$components$treble_clef(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.17,0.17) translate(100,550)",new cljs.core.Keyword(null,"d","d",1972142424),"m103.53 279.582c-7.14 1.99-13.578 6.438-19.548 13.227-5.97 6.906-8.896 14.515-8.896 22.709 0 5.15 1.756 11.003 5.15 17.207 3.395 6.321 8.545 10.886 15.217 13.813 2.224.468 3.278 1.639 3.278 3.278 0 .585-.819 1.171-2.809 1.639-10.652-2.692-19.431-8.428-26.22-16.973-6.789-8.662-10.301-18.495-10.535-29.732.351-12.057 3.98-23.294 10.886-33.595 7.023-10.418 16.037-17.792 27.04-22.123l-8.077-41.555c-18.027 14.983-32.658 30.551-44.013 46.939-11.354 16.271-17.207 33.946-17.675 53.026.234 8.545 1.99 16.856 5.267 24.816 3.278 8.077 8.194 15.334 14.749 22.006 13.227 13.227 30.434 20.134 51.387 20.836 7.14-.468 14.749-1.756 22.943-3.863l-18.144-91.654zm8.428-1.171 18.261 90.016c18.027-7.257 27.04-23.06 27.04-47.173-1.053-8.077-3.395-15.334-7.374-21.772-3.863-6.555-9.013-11.706-15.568-15.451-6.555-3.746-13.93-5.619-22.358-5.619zm-23.996-121.738c3.863-2.341 8.311-6.438 13.11-12.174 4.799-5.619 9.481-12.291 13.93-19.782 4.565-7.609 8.194-15.334 10.886-23.177 2.692-7.726 3.98-15.1 3.98-21.889 0-2.926-.234-5.853-.819-8.428-.468-4.214-1.756-7.492-3.98-9.716-2.224-2.107-5.033-3.278-8.545-3.278-7.023 0-13.344 4.331-18.963 12.993-4.331 7.492-7.96 16.388-10.535 26.455-2.692 10.184-4.214 20.251-4.448 30.434.585 11.588 2.458 21.07 5.385 28.561zm-7.374 6.789c-5.267-18.963-8.194-38.277-8.779-57.942.117-12.642 1.405-24.465 3.863-35.468 2.341-11.003 5.736-20.485 10.184-28.679 4.331-8.194 9.364-14.398 14.983-18.612 5.033-3.746 8.662-5.736 10.652-5.736 1.522 0 2.809.585 3.98 1.639 1.171 1.053 2.692 2.809 4.565 5.15 13.93 19.782 20.953 43.662 20.953 71.521 0 13.227-1.756 26.103-5.267 38.979-3.395 12.759-8.428 24.933-15.1 36.287-6.789 11.471-14.749 21.421-23.996 29.966l9.481 46.12c5.15-.585 8.662-1.053 10.652-1.053 8.896 0 16.856 1.873 24.23 5.619 7.374 3.746 13.695 8.779 18.846 15.217 5.15 6.321 9.13 13.578 11.94 21.772 2.692 8.194 4.214 16.739 4.214 25.635 0 13.813-3.629 26.455-10.886 37.809-7.257 11.354-18.144 19.665-32.775 25.05.936 5.736 2.575 14.047 5.033 24.699 2.341 10.769 4.097 19.314 5.267 25.635 1.171 6.321 1.639 12.408 1.639 18.378 0 9.247-2.224 17.441-6.672 24.699-4.565 7.257-10.652 12.876-18.378 16.856-7.609 3.98-16.037 5.97-25.167 5.97-12.876 0-24.113-3.629-33.712-10.769-9.599-7.257-14.749-16.973-15.217-29.381.351-5.502 1.639-10.652 3.98-15.568 2.341-4.916 5.502-8.896 9.599-11.94 3.98-3.16 8.779-4.799 14.281-5.15 4.565 0 8.896 1.288 12.993 3.746 3.98 2.575 7.257 5.97 9.716 10.301 2.341 4.331 3.629 9.13 3.629 14.281 0 6.906-2.341 12.759-7.023 17.558-4.682 4.799-10.652 7.257-17.792 7.257h-2.692c4.565 7.023 12.057 10.652 22.475 10.652 5.267 0 10.652-1.171 16.037-3.278 5.502-2.224 10.067-5.15 13.93-8.896 3.863-3.746 6.438-7.726 7.492-11.94 1.99-4.799 2.926-11.471 2.926-19.782 0-5.619-.585-11.237-1.639-16.856-1.053-5.502-2.692-12.876-4.916-22.006-2.224-9.013-3.863-16.037-4.799-20.836-7.023 1.756-14.281 2.692-21.889 2.692-12.759 0-24.816-2.575-36.17-7.843-11.354-5.267-21.304-12.525-29.966-21.889-8.545-9.364-15.217-19.899-20.016-31.839-4.682-11.823-7.14-24.23-7.257-37.107.468-11.94 2.692-23.411 6.906-34.18 4.214-10.886 9.599-21.187 16.271-30.786 6.672-9.599 13.578-18.378 20.719-26.22 7.257-7.726 16.739-17.675 28.679-29.732z"], null)], null);
});
mecca.components.quarter_note_button = (function mecca$components$quarter_note_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(121.62298,5.5477151)"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"y","y",-1757859776),97.120094,new cljs.core.Keyword(null,"x","x",2099068185),65.653259,new cljs.core.Keyword(null,"height","height",1025178622),67.767456,new cljs.core.Keyword(null,"width","width",-384071477),64.387627,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"fill","fill",883462889),"#040301",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(1),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.29489258], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M 69.920725,132.90712 V 102.20693 H 99.12731 128.3339 v 30.70019 30.70021 H 99.12731 69.920725 Z m 8.344738,24.12159 v -2.19287 h -2.086184 -2.086185 v 2.19287 2.19288 h 2.086185 2.086184 z m 45.896057,0 v -2.19287 h -2.08618 -2.08619 v 2.19287 2.19288 h 2.08619 2.08618 z m -22.94803,-5.48217 v -1.09644 h 2.08619 2.08618 v -1.09643 -1.09644 h 1.0431 1.04308 v -18.63941 -18.6394 h -1.04308 -1.0431 v -1.09645 -1.09643 h -1.04309 -1.04309 V 121.94277 135.1 h -7.301647 -7.301647 v 1.09643 1.09645 h -2.086184 -2.086185 v 1.09643 1.09643 h -1.043092 -1.043092 v 1.09645 1.09642 H 81.39474 80.351648 v 2.19288 2.19287 h 1.043092 1.043093 v 2.19287 2.19287 h 1.043092 1.043092 v 1.09644 1.09644 h 8.344739 8.344734 z m -22.948027,-42.761 v -2.19287 h -2.086184 -2.086185 v 2.19287 2.19288 h 2.086185 2.086184 z m 45.896057,0 v -2.19287 h -2.08618 -2.08619 v 2.19287 2.19288 h 2.08619 2.08618 z"], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fab100",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.26735786], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"m 64.40715,132.43769 v -32.0231 h 2.145117 2.145116 v -2.287373 -2.287361 h 30.031629 30.031628 v 2.287361 2.287373 H 98.729012 68.697383 v 32.0231 32.02313 H 66.552267 64.40715 Z m 21.451164,17.15525 v -1.14368 h -2.145117 -2.145115 v -1.14369 -1.14368 h -1.072559 -1.072558 v -2.28735 -2.28738 h 1.072558 1.072559 v -1.14367 -1.14369 h 1.072557 1.072558 v -1.14369 -1.14368 h 2.145117 2.145116 v -1.14368 -1.14368 h 7.507907 7.507913 v -13.72419 -13.7242 h 1.07255 1.07256 v 19.44262 19.44259 h -2.14511 -2.14512 v 1.14368 1.14369 h -3.217676 -3.217675 v 1.14368 1.14368 h -4.290232 -4.290233 z"], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fa7500",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.27688742], null)], null)], null)], null);
});
mecca.components.editor = (function mecca$components$editor(){
var bassline = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null));
var mouse_over = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
var current_position = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
return ((function (bassline,mouse_over,current_position){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 480 420"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.music.mario.editor_bg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bass_clef], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.treble_clef], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g#staff","g#staff",-970380914),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(15,50)",new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 450 160"], null),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (bassline,mouse_over,current_position){
return (function mecca$components$editor_$_iter__27413(s__27414){
return (new cljs.core.LazySeq(null,((function (bassline,mouse_over,current_position){
return (function (){
var s__27414__$1 = s__27414;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__27414__$1);
if(temp__5457__auto__){
var s__27414__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27414__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__27414__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__27416 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__27415 = (0);
while(true){
if((i__27415 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__27415);
cljs.core.chunk_append.call(null,b__27416,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"visibility","visibility",1338380893)],[((cljs.core._EQ_.call(null,y,(18)))?(1):null),"black",((function (i__27415,y,c__4322__auto__,size__4323__auto__,b__27416,s__27414__$2,temp__5457__auto__,bassline,mouse_over,current_position){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_over,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
});})(i__27415,y,c__4322__auto__,size__4323__auto__,b__27416,s__27414__$2,temp__5457__auto__,bassline,mouse_over,current_position))
,"bevel",((7) * y),((function (i__27415,y,c__4322__auto__,size__4323__auto__,b__27416,s__27414__$2,temp__5457__auto__,bassline,mouse_over,current_position){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155)], null));
});})(i__27415,y,c__4322__auto__,size__4323__auto__,b__27416,s__27414__$2,temp__5457__auto__,bassline,mouse_over,current_position))
,"butt",((cljs.core._EQ_.call(null,y,(18)))?0.5:1.05),((function (i__27415,y,c__4322__auto__,size__4323__auto__,b__27416,s__27414__$2,temp__5457__auto__,bassline,mouse_over,current_position){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_over,y);
});})(i__27415,y,c__4322__auto__,size__4323__auto__,b__27416,s__27414__$2,temp__5457__auto__,bassline,mouse_over,current_position))
,(0),((7) * y),"all",(450),(((((y > (7))) && (cljs.core.even_QMARK_.call(null,y)) && ((y < (30)))))?"visible":"hidden")])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)));

var G__27421 = (i__27415 + (1));
i__27415 = G__27421;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27416),mecca$components$editor_$_iter__27413.call(null,cljs.core.chunk_rest.call(null,s__27414__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27416),null);
}
} else {
var y = cljs.core.first.call(null,s__27414__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"visibility","visibility",1338380893)],[((cljs.core._EQ_.call(null,y,(18)))?(1):null),"black",((function (y,s__27414__$2,temp__5457__auto__,bassline,mouse_over,current_position){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_over,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
});})(y,s__27414__$2,temp__5457__auto__,bassline,mouse_over,current_position))
,"bevel",((7) * y),((function (y,s__27414__$2,temp__5457__auto__,bassline,mouse_over,current_position){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155)], null));
});})(y,s__27414__$2,temp__5457__auto__,bassline,mouse_over,current_position))
,"butt",((cljs.core._EQ_.call(null,y,(18)))?0.5:1.05),((function (y,s__27414__$2,temp__5457__auto__,bassline,mouse_over,current_position){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_over,y);
});})(y,s__27414__$2,temp__5457__auto__,bassline,mouse_over,current_position))
,(0),((7) * y),"all",(450),(((((y > (7))) && (cljs.core.even_QMARK_.call(null,y)) && ((y < (30)))))?"visible":"hidden")])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)),mecca$components$editor_$_iter__27413.call(null,cljs.core.rest.call(null,s__27414__$2)));
}
} else {
return null;
}
break;
}
});})(bassline,mouse_over,current_position))
,null,null));
});})(bassline,mouse_over,current_position))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(40)));
})()),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (bassline,mouse_over,current_position){
return (function mecca$components$editor_$_iter__27417(s__27418){
return (new cljs.core.LazySeq(null,((function (bassline,mouse_over,current_position){
return (function (){
var s__27418__$1 = s__27418;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__27418__$1);
if(temp__5457__auto__){
var s__27418__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27418__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__27418__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__27420 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__27419 = (0);
while(true){
if((i__27419 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__27419);
var y = mecca.music.melody.chromatic__GT_diatonic.call(null,(cljs.core.get.call(null,cljs.core.deref.call(null,bassline),x) - mecca.music.root_note_midi_num.call(null)));
if(typeof y === 'number'){
cljs.core.chunk_append.call(null,b__27420,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.quarter_note,((cljs.core._EQ_.call(null,cljs.core.deref.call(null,current_position),(x + (1))))?"red":"black"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__27422 = (i__27419 + (1));
i__27419 = G__27422;
continue;
} else {
var G__27423 = (i__27419 + (1));
i__27419 = G__27423;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27420),mecca$components$editor_$_iter__27417.call(null,cljs.core.chunk_rest.call(null,s__27418__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27420),null);
}
} else {
var x = cljs.core.first.call(null,s__27418__$2);
var y = mecca.music.melody.chromatic__GT_diatonic.call(null,(cljs.core.get.call(null,cljs.core.deref.call(null,bassline),x) - mecca.music.root_note_midi_num.call(null)));
if(typeof y === 'number'){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.quarter_note,((cljs.core._EQ_.call(null,cljs.core.deref.call(null,current_position),(x + (1))))?"red":"black"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),mecca$components$editor_$_iter__27417.call(null,cljs.core.rest.call(null,s__27418__$2)));
} else {
var G__27424 = cljs.core.rest.call(null,s__27418__$2);
s__27418__$1 = G__27424;
continue;
}
}
} else {
return null;
}
break;
}
});})(bassline,mouse_over,current_position))
,null,null));
});})(bassline,mouse_over,current_position))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(16)));
})())], null)], null);
});
;})(bassline,mouse_over,current_position))
});
mecca.components.basslines = (function mecca$components$basslines(){
var active = reagent.core.atom.call(null,"Alberti bass");
return ((function (active){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Try some well-known musical patterns: "], null),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (active){
return (function mecca$components$basslines_$_iter__27425(s__27426){
return (new cljs.core.LazySeq(null,((function (active){
return (function (){
var s__27426__$1 = s__27426;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__27426__$1);
if(temp__5457__auto__){
var s__27426__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27426__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__27426__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__27428 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__27427 = (0);
while(true){
if((i__27427 < size__4323__auto__)){
var map__27429 = cljs.core._nth.call(null,c__4322__auto__,i__27427);
var map__27429__$1 = ((((!((map__27429 == null)))?(((((map__27429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27429):map__27429);
var name = cljs.core.get.call(null,map__27429__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var notes = cljs.core.get.call(null,map__27429__$1,new cljs.core.Keyword(null,"notes","notes",-1039600523));
var scales = cljs.core.get.call(null,map__27429__$1,new cljs.core.Keyword(null,"scales","scales",-1197224722));
cljs.core.chunk_append.call(null,b__27428,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27427,map__27429,map__27429__$1,name,notes,scales,c__4322__auto__,size__4323__auto__,b__27428,s__27426__$2,temp__5457__auto__,active){
return (function (e){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-scale","set-scale",-582286217),cljs.core.first.call(null,scales)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),cljs.core.vec.call(null,cljs.core.take.call(null,(16),cljs.core.cycle.call(null,notes)))], null));

return cljs.core.reset_BANG_.call(null,active,name);
});})(i__27427,map__27429,map__27429__$1,name,notes,scales,c__4322__auto__,size__4323__auto__,b__27428,s__27426__$2,temp__5457__auto__,active))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.call(null,name,cljs.core.deref.call(null,active)))?"lightgreen":"violet")], null)], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null)));

var G__27433 = (i__27427 + (1));
i__27427 = G__27433;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27428),mecca$components$basslines_$_iter__27425.call(null,cljs.core.chunk_rest.call(null,s__27426__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27428),null);
}
} else {
var map__27431 = cljs.core.first.call(null,s__27426__$2);
var map__27431__$1 = ((((!((map__27431 == null)))?(((((map__27431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27431):map__27431);
var name = cljs.core.get.call(null,map__27431__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var notes = cljs.core.get.call(null,map__27431__$1,new cljs.core.Keyword(null,"notes","notes",-1039600523));
var scales = cljs.core.get.call(null,map__27431__$1,new cljs.core.Keyword(null,"scales","scales",-1197224722));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__27431,map__27431__$1,name,notes,scales,s__27426__$2,temp__5457__auto__,active){
return (function (e){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-scale","set-scale",-582286217),cljs.core.first.call(null,scales)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),cljs.core.vec.call(null,cljs.core.take.call(null,(16),cljs.core.cycle.call(null,notes)))], null));

return cljs.core.reset_BANG_.call(null,active,name);
});})(map__27431,map__27431__$1,name,notes,scales,s__27426__$2,temp__5457__auto__,active))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.call(null,name,cljs.core.deref.call(null,active)))?"lightgreen":"violet")], null)], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null)),mecca$components$basslines_$_iter__27425.call(null,cljs.core.rest.call(null,s__27426__$2)));
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
return iter__4324__auto__.call(null,cljs.core.seq.call(null,mecca.music.basslines));
})())], null);
});
;})(active))
});
mecca.components.mecca = (function mecca$components$mecca(){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"MECCA Music Platform"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The Music Education, Composition & Creation Application"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.scale_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.key_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.octave_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.tempo_input], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/mariodance72.gif"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.music.mario.editor_bg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.basslines], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return mecca.music.play_bassline_BANG_.call(null);
})], null),"Play Bassline"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Bassline: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null))))," scale from MIDI number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.music.root_note_midi_num.call(null))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"octave","octave",1066197953)], null)))),"):"].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Tempo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null))))].join('')], null)], null);
});

//# sourceMappingURL=components.js.map
