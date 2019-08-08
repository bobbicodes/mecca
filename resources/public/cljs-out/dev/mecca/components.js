// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.components');
goog.require('cljs.core');
goog.require('mecca.music');
goog.require('mecca.subs');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('mecca.events');
goog.require('leipzig.melody');
mecca.components.scale_picker = (function mecca$components$scale_picker(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Scale: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
e.preventDefault();

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-scale","set-scale",-582286217),e.target.value], null));
})], null),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function mecca$components$scale_picker_$_iter__15985(s__15986){
return (new cljs.core.LazySeq(null,(function (){
var s__15986__$1 = s__15986;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15986__$1);
if(temp__5457__auto__){
var s__15986__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15986__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15986__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15988 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15987 = (0);
while(true){
if((i__15987 < size__4323__auto__)){
var scale = cljs.core._nth.call(null,c__4322__auto__,i__15987);
cljs.core.chunk_append.call(null,b__15988,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),scale], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scale], null)));

var G__15989 = (i__15987 + (1));
i__15987 = G__15989;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15988),mecca$components$scale_picker_$_iter__15985.call(null,cljs.core.chunk_rest.call(null,s__15986__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15988),null);
}
} else {
var scale = cljs.core.first.call(null,s__15986__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),scale], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scale], null)),mecca$components$scale_picker_$_iter__15985.call(null,cljs.core.rest.call(null,s__15986__$2)));
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
})], null),(function (){var iter__4324__auto__ = (function mecca$components$key_picker_$_iter__15990(s__15991){
return (new cljs.core.LazySeq(null,(function (){
var s__15991__$1 = s__15991;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15991__$1);
if(temp__5457__auto__){
var s__15991__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15991__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15991__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15993 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15992 = (0);
while(true){
if((i__15992 < size__4323__auto__)){
var note = cljs.core._nth.call(null,c__4322__auto__,i__15992);
cljs.core.chunk_append.call(null,b__15993,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),note], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),note], null)));

var G__15994 = (i__15992 + (1));
i__15992 = G__15994;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15993),mecca$components$key_picker_$_iter__15990.call(null,cljs.core.chunk_rest.call(null,s__15991__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15993),null);
}
} else {
var note = cljs.core.first.call(null,s__15991__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),note], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),note], null)),mecca$components$key_picker_$_iter__15990.call(null,cljs.core.rest.call(null,s__15991__$2)));
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
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-octave","set-octave",378200257),e.target.value], null));
})], null)], null)], null);
});
mecca.components.tempo_input = (function mecca$components$tempo_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804)," Tempo: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"8%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"lightgray"], null),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),e.target.value], null));
})], null)], null)], null);
});
mecca.components.blank = (function mecca$components$blank(p__15995){
var vec__15996 = p__15995;
var x = cljs.core.nth.call(null,vec__15996,(0),null);
var y = cljs.core.nth.call(null,vec__15996,(1),null);
var focused_QMARK_ = reagent.core.atom.call(null,false);
return ((function (focused_QMARK_,vec__15996,x,y){
return (function (p__15999){
var vec__16000 = p__15999;
var x__$1 = cljs.core.nth.call(null,vec__16000,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__16000,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],[(y__$1 * 0.75),"black",((function (vec__16000,x__$1,y__$1,focused_QMARK_,vec__15996,x,y){
return (function (){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,false);
});})(vec__16000,x__$1,y__$1,focused_QMARK_,vec__15996,x,y))
,(cljs.core.truth_(cljs.core.deref.call(null,focused_QMARK_))?"violet":((clojure.string.includes_QMARK_.call(null,mecca.music.midi_num__GT_note.call(null,y__$1),"#"))?"pink":"white"
)),(1),((function (vec__16000,x__$1,y__$1,focused_QMARK_,vec__15996,x,y){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)], null));
});})(vec__16000,x__$1,y__$1,focused_QMARK_,vec__15996,x,y))
,0.05,((function (vec__16000,x__$1,y__$1,focused_QMARK_,vec__15996,x,y){
return (function (){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,true);
});})(vec__16000,x__$1,y__$1,focused_QMARK_,vec__15996,x,y))
,((1) + x__$1),0.75])], null);
});
;})(focused_QMARK_,vec__15996,x,y))
});
mecca.components.note_label = (function mecca$components$note_label(y){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0.5 + (y * 0.75)),new cljs.core.Keyword(null,"height","height",1025178622),0.75,new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"left",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),0.5], null),mecca.music.midi_num__GT_note.call(null,y)], null);
});
mecca.components.grid_lines = (function mecca$components$grid_lines(p__16003){
var vec__16004 = p__16003;
var x = cljs.core.nth.call(null,vec__16004,(0),null);
var y = cljs.core.nth.call(null,vec__16004,(1),null);
var line_focused_QMARK_ = cljs.core.atom.call(null,false);
var notes = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null)));
var note_endings = cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (line_focused_QMARK_,notes,vec__16004,x,y){
return (function mecca$components$grid_lines_$_iter__16007(s__16008){
return (new cljs.core.LazySeq(null,((function (line_focused_QMARK_,notes,vec__16004,x,y){
return (function (){
var s__16008__$1 = s__16008;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16008__$1);
if(temp__5457__auto__){
var s__16008__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16008__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__16008__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__16010 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__16009 = (0);
while(true){
if((i__16009 < size__4323__auto__)){
var map__16011 = cljs.core._nth.call(null,c__4322__auto__,i__16009);
var map__16011__$1 = ((((!((map__16011 == null)))?(((((map__16011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16011):map__16011);
var time = cljs.core.get.call(null,map__16011__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__16011__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var pitch = cljs.core.get.call(null,map__16011__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append.call(null,b__16010,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((time + duration) + (1)),pitch], null));

var G__16019 = (i__16009 + (1));
i__16009 = G__16019;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16010),mecca$components$grid_lines_$_iter__16007.call(null,cljs.core.chunk_rest.call(null,s__16008__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16010),null);
}
} else {
var map__16013 = cljs.core.first.call(null,s__16008__$2);
var map__16013__$1 = ((((!((map__16013 == null)))?(((((map__16013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16013):map__16013);
var time = cljs.core.get.call(null,map__16013__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__16013__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var pitch = cljs.core.get.call(null,map__16013__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((time + duration) + (1)),pitch], null),mecca$components$grid_lines_$_iter__16007.call(null,cljs.core.rest.call(null,s__16008__$2)));
}
} else {
return null;
}
break;
}
});})(line_focused_QMARK_,notes,vec__16004,x,y))
,null,null));
});})(line_focused_QMARK_,notes,vec__16004,x,y))
;
return iter__4324__auto__.call(null,notes);
})());
return ((function (line_focused_QMARK_,notes,note_endings,vec__16004,x,y){
return (function (p__16015){
var vec__16016 = p__16015;
var x__$1 = cljs.core.nth.call(null,vec__16016,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__16016,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475)],[((cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,note_endings),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)))?"red":((cljs.core._EQ_.call(null,(1),cljs.core.mod.call(null,x__$1,(4))))?"black":"lightgrey"
)),((function (vec__16016,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__16004,x,y){
return (function (e){
return cljs.core.swap_BANG_.call(null,line_focused_QMARK_,cljs.core.not);
});})(vec__16016,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__16004,x,y))
,(- y__$1),mecca.events.mouse_down_handler,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(cljs.core.deref.call(null,line_focused_QMARK_))?"ew-resize":null)], null),((cljs.core._EQ_.call(null,(1),cljs.core.mod.call(null,x__$1,(4))))?0.075:0.04),((function (vec__16016,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__16004,x,y){
return (function (e){
return cljs.core.swap_BANG_.call(null,line_focused_QMARK_,cljs.core.not);
});})(vec__16016,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__16004,x,y))
,x__$1,(y__$1 - (1)),x__$1])], null);
});
;})(line_focused_QMARK_,notes,note_endings,vec__16004,x,y))
});
mecca.components.note = (function mecca$components$note(p__16020){
var vec__16021 = p__16020;
var x = cljs.core.nth.call(null,vec__16021,(0),null);
var y = cljs.core.nth.call(null,vec__16021,(1),null);
var focused_QMARK_ = cljs.core.atom.call(null,false);
var bassline = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null)));
return ((function (focused_QMARK_,bassline,vec__16021,x,y){
return (function (p__16024){
var vec__16025 = p__16024;
var x__$1 = cljs.core.nth.call(null,vec__16025,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__16025,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],[(0.75 * y__$1),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,mecca.events.selected),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)))?"red":null),((function (vec__16025,x__$1,y__$1,focused_QMARK_,bassline,vec__16021,x,y){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,false);
});})(vec__16025,x__$1,y__$1,focused_QMARK_,bassline,vec__16021,x,y))
,"blue",((((4) * cljs.core.count.call(null,bassline)) * x__$1) - 0.05),((function (vec__16025,x__$1,y__$1,focused_QMARK_,bassline,vec__16021,x,y){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,null], null)], null));
});})(vec__16025,x__$1,y__$1,focused_QMARK_,bassline,vec__16021,x,y))
,0.1,((function (vec__16025,x__$1,y__$1,focused_QMARK_,bassline,vec__16021,x,y){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,true);
});})(vec__16025,x__$1,y__$1,focused_QMARK_,bassline,vec__16021,x,y))
,((1) + x__$1),0.75])], null),(cljs.core.truth_(cljs.core.deref.call(null,focused_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"red",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.4,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1.5 + x__$1)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.375 + (0.75 * y__$1))),") ","scale(0.15)"].join(''),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (vec__16025,x__$1,y__$1,focused_QMARK_,bassline,vec__16021,x,y){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,true);
});})(vec__16025,x__$1,y__$1,focused_QMARK_,bassline,vec__16021,x,y))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__16025,x__$1,y__$1,focused_QMARK_,bassline,vec__16021,x,y){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,null], null)], null));
});})(vec__16025,x__$1,y__$1,focused_QMARK_,bassline,vec__16021,x,y))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (vec__16025,x__$1,y__$1,focused_QMARK_,bassline,vec__16021,x,y){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,false);
});})(vec__16025,x__$1,y__$1,focused_QMARK_,bassline,vec__16021,x,y))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(-1),new cljs.core.Keyword(null,"y1","y1",589123466),(-1),new cljs.core.Keyword(null,"x2","x2",-1362513475),(1),new cljs.core.Keyword(null,"y2","y2",-718691301),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(1),new cljs.core.Keyword(null,"y1","y1",589123466),(-1),new cljs.core.Keyword(null,"x2","x2",-1362513475),(-1),new cljs.core.Keyword(null,"y2","y2",-718691301),(1)], null)], null)], null):null)], null);
});
;})(focused_QMARK_,bassline,vec__16021,x,y))
});
mecca.components.note_grid = (function mecca$components$note_grid(){
var scale_name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null));
var scale_notes = cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,scale_name));
var bassline = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null));
return ((function (scale_name,scale_notes,bassline){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),["0 0 17 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.75 * (((2) * cljs.core.count.call(null,scale_notes)) - (1))))].join('')], null),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (scale_name,scale_notes,bassline){
return (function mecca$components$note_grid_$_iter__16028(s__16029){
return (new cljs.core.LazySeq(null,((function (scale_name,scale_notes,bassline){
return (function (){
var s__16029__$1 = s__16029;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16029__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__16029__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline){
return (function mecca$components$note_grid_$_iter__16028_$_iter__16030(s__16031){
return (new cljs.core.LazySeq(null,((function (s__16029__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline){
return (function (){
var s__16031__$1 = s__16031;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__16031__$1);
if(temp__5457__auto____$1){
var s__16031__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16031__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__16031__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__16033 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__16032 = (0);
while(true){
if((i__16032 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__16032);
cljs.core.chunk_append.call(null,b__16033,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.blank,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__16048 = (i__16032 + (1));
i__16032 = G__16048;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16033),mecca$components$note_grid_$_iter__16028_$_iter__16030.call(null,cljs.core.chunk_rest.call(null,s__16031__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16033),null);
}
} else {
var y = cljs.core.first.call(null,s__16031__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.blank,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$components$note_grid_$_iter__16028_$_iter__16030.call(null,cljs.core.rest.call(null,s__16031__$2)));
}
} else {
return null;
}
break;
}
});})(s__16029__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline))
,null,null));
});})(s__16029__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,(((2) * cljs.core.count.call(null,scale_notes)) - (1)))));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,mecca$components$note_grid_$_iter__16028.call(null,cljs.core.rest.call(null,s__16029__$1)));
} else {
var G__16049 = cljs.core.rest.call(null,s__16029__$1);
s__16029__$1 = G__16049;
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
return (function mecca$components$note_grid_$_iter__16034(s__16035){
return (new cljs.core.LazySeq(null,((function (scale_name,scale_notes,bassline){
return (function (){
var s__16035__$1 = s__16035;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16035__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__16035__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline){
return (function mecca$components$note_grid_$_iter__16034_$_iter__16036(s__16037){
return (new cljs.core.LazySeq(null,((function (s__16035__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline){
return (function (){
var s__16037__$1 = s__16037;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__16037__$1);
if(temp__5457__auto____$1){
var s__16037__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16037__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__16037__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__16039 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__16038 = (0);
while(true){
if((i__16038 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__16038);
cljs.core.chunk_append.call(null,b__16039,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.grid_lines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__16050 = (i__16038 + (1));
i__16038 = G__16050;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16039),mecca$components$note_grid_$_iter__16034_$_iter__16036.call(null,cljs.core.chunk_rest.call(null,s__16037__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16039),null);
}
} else {
var y = cljs.core.first.call(null,s__16037__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.grid_lines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$components$note_grid_$_iter__16034_$_iter__16036.call(null,cljs.core.rest.call(null,s__16037__$2)));
}
} else {
return null;
}
break;
}
});})(s__16035__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline))
,null,null));
});})(s__16035__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,(((2) * cljs.core.count.call(null,scale_notes)) - (1)))));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,mecca$components$note_grid_$_iter__16034.call(null,cljs.core.rest.call(null,s__16035__$1)));
} else {
var G__16051 = cljs.core.rest.call(null,s__16035__$1);
s__16035__$1 = G__16051;
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
return (function mecca$components$note_grid_$_iter__16040(s__16041){
return (new cljs.core.LazySeq(null,((function (scale_name,scale_notes,bassline){
return (function (){
var s__16041__$1 = s__16041;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16041__$1);
if(temp__5457__auto__){
var s__16041__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16041__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__16041__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__16043 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__16042 = (0);
while(true){
if((i__16042 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__16042);
var y = cljs.core.deref.call(null,bassline);
if(typeof y === 'number'){
cljs.core.chunk_append.call(null,b__16043,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__16052 = (i__16042 + (1));
i__16042 = G__16052;
continue;
} else {
var G__16053 = (i__16042 + (1));
i__16042 = G__16053;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16043),mecca$components$note_grid_$_iter__16040.call(null,cljs.core.chunk_rest.call(null,s__16041__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16043),null);
}
} else {
var x = cljs.core.first.call(null,s__16041__$2);
var y = cljs.core.deref.call(null,bassline);
if(typeof y === 'number'){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),mecca$components$note_grid_$_iter__16040.call(null,cljs.core.rest.call(null,s__16041__$2)));
} else {
var G__16054 = cljs.core.rest.call(null,s__16041__$2);
s__16041__$1 = G__16054;
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
})()),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (scale_name,scale_notes,bassline){
return (function mecca$components$note_grid_$_iter__16044(s__16045){
return (new cljs.core.LazySeq(null,((function (scale_name,scale_notes,bassline){
return (function (){
var s__16045__$1 = s__16045;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16045__$1);
if(temp__5457__auto__){
var s__16045__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16045__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__16045__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__16047 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__16046 = (0);
while(true){
if((i__16046 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__16046);
cljs.core.chunk_append.call(null,b__16047,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_label,y], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)));

var G__16055 = (i__16046 + (1));
i__16046 = G__16055;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16047),mecca$components$note_grid_$_iter__16044.call(null,cljs.core.chunk_rest.call(null,s__16045__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16047),null);
}
} else {
var y = cljs.core.first.call(null,s__16045__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_label,y], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)),mecca$components$note_grid_$_iter__16044.call(null,cljs.core.rest.call(null,s__16045__$2)));
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
return iter__4324__auto__.call(null,cljs.core.range.call(null,(((2) * cljs.core.count.call(null,scale_notes)) - (1))));
})())], null);
});
;})(scale_name,scale_notes,bassline))
});
mecca.components.note_stem = (function mecca$components$note_stem(p__16056){
var vec__16057 = p__16056;
var x = cljs.core.nth.call(null,vec__16057,(0),null);
var y = cljs.core.nth.call(null,vec__16057,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.35,new cljs.core.Keyword(null,"x1","x1",-1863922247),((((10) > y))?(9.1 + (5.25 * x)):(10.9 + (5.25 * x))),new cljs.core.Keyword(null,"x2","x2",-1362513475),((((10) > y))?(9.1 + (5.25 * x)):(10.9 + (5.25 * x))),new cljs.core.Keyword(null,"y1","y1",589123466),((((10) > y))?(y - 4.25):((y - (5)) - 4.25)),new cljs.core.Keyword(null,"y2","y2",-718691301),((((10) > y))?(((5) + y) - 4.25):(y - 4.25))], null)], null)], null);
});
mecca.components.note_head = (function mecca$components$note_head(p__16060){
var vec__16061 = p__16060;
var x = cljs.core.nth.call(null,vec__16061,(0),null);
var y = cljs.core.nth.call(null,vec__16061,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),((10) + (5.25 * x)),new cljs.core.Keyword(null,"cy","cy",755331060),((0.74 * y) - 2.1),new cljs.core.Keyword(null,"rx","rx",1627208482),1.15,new cljs.core.Keyword(null,"ry","ry",-334598563),0.8], null)], null)], null);
});
mecca.components.staff = (function mecca$components$staff(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 100 10"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.028,0.028)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M95,0C46.286,0,20,35.035,20,68c0,16.393,5.134,30.499,14.848,40.794C44.851,119.396,58.736,125,75,125\n\t\tc16.569,0,30-13.431,30-30S91.569,65,75,65c-9.828,0-18.551,4.726-24.023,12.028C50.234,73.834,50,70.676,50,68\n\t\tc0-18.884,15.457-38,45-38c37.664,0,65,35.748,65,85c0,47.058-20.573,76.48-37.831,92.875C100.995,227.991,72.146,240,45,240v30\n\t\tc35.164,0,70.822-14.716,97.831-40.375C173.248,200.729,190,160.02,190,115c0-31.97-9.544-61.113-26.874-82.062\n\t\tC145.554,11.698,121.36,0,95,0z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),(235),new cljs.core.Keyword(null,"cy","cy",755331060),(54),new cljs.core.Keyword(null,"r","r",-471384190),(15)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),(235),new cljs.core.Keyword(null,"cy","cy",755331060),(114),new cljs.core.Keyword(null,"r","r",-471384190),(15)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function mecca$components$staff_$_iter__16064(s__16065){
return (new cljs.core.LazySeq(null,(function (){
var s__16065__$1 = s__16065;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16065__$1);
if(temp__5457__auto__){
var s__16065__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16065__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__16065__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__16067 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__16066 = (0);
while(true){
if((i__16066 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__16066);
cljs.core.chunk_append.call(null,b__16067,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(0),new cljs.core.Keyword(null,"x2","x2",-1362513475),(100),new cljs.core.Keyword(null,"y1","y1",589123466),(0.25 + ((2) * y)),new cljs.core.Keyword(null,"y2","y2",-718691301),(0.25 + ((2) * y)),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.4], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)));

var G__16076 = (i__16066 + (1));
i__16066 = G__16076;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16067),mecca$components$staff_$_iter__16064.call(null,cljs.core.chunk_rest.call(null,s__16065__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16067),null);
}
} else {
var y = cljs.core.first.call(null,s__16065__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(0),new cljs.core.Keyword(null,"x2","x2",-1362513475),(100),new cljs.core.Keyword(null,"y1","y1",589123466),(0.25 + ((2) * y)),new cljs.core.Keyword(null,"y2","y2",-718691301),(0.25 + ((2) * y)),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.4], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)),mecca$components$staff_$_iter__16064.call(null,cljs.core.rest.call(null,s__16065__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,(5)));
})()),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function mecca$components$staff_$_iter__16068(s__16069){
return (new cljs.core.LazySeq(null,(function (){
var s__16069__$1 = s__16069;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16069__$1);
if(temp__5457__auto__){
var s__16069__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16069__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__16069__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__16071 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__16070 = (0);
while(true){
if((i__16070 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__16070);
var y = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null)));
if(typeof y === 'number'){
cljs.core.chunk_append.call(null,b__16071,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_head,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__16077 = (i__16070 + (1));
i__16070 = G__16077;
continue;
} else {
var G__16078 = (i__16070 + (1));
i__16070 = G__16078;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16071),mecca$components$staff_$_iter__16068.call(null,cljs.core.chunk_rest.call(null,s__16069__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16071),null);
}
} else {
var x = cljs.core.first.call(null,s__16069__$2);
var y = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null)));
if(typeof y === 'number'){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_head,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),mecca$components$staff_$_iter__16068.call(null,cljs.core.rest.call(null,s__16069__$2)));
} else {
var G__16079 = cljs.core.rest.call(null,s__16069__$2);
s__16069__$1 = G__16079;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,(16)));
})()),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function mecca$components$staff_$_iter__16072(s__16073){
return (new cljs.core.LazySeq(null,(function (){
var s__16073__$1 = s__16073;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16073__$1);
if(temp__5457__auto__){
var s__16073__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16073__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__16073__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__16075 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__16074 = (0);
while(true){
if((i__16074 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__16074);
var y = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null)));
if(typeof y === 'number'){
cljs.core.chunk_append.call(null,b__16075,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_stem,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__16080 = (i__16074 + (1));
i__16074 = G__16080;
continue;
} else {
var G__16081 = (i__16074 + (1));
i__16074 = G__16081;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16075),mecca$components$staff_$_iter__16072.call(null,cljs.core.chunk_rest.call(null,s__16073__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16075),null);
}
} else {
var x = cljs.core.first.call(null,s__16073__$2);
var y = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null)));
if(typeof y === 'number'){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_stem,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),mecca$components$staff_$_iter__16072.call(null,cljs.core.rest.call(null,s__16073__$2)));
} else {
var G__16082 = cljs.core.rest.call(null,s__16073__$2);
s__16073__$1 = G__16082;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,(16)));
})())], null);
});
mecca.components.mecca = (function mecca$components$mecca(){
var active = reagent.core.atom.call(null,null);
return ((function (active){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"MECCA Music Platform"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The Music Education, Composition & Creation Application"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.scale_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.key_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.octave_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.tempo_input], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mario","div.mario",-1368725782)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.staff], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active){
return (function (e){
return mecca.music.play_bassline_BANG_.call(null);
});})(active))
], null),"Play Bassline"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_grid], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Patterns: ",cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (active){
return (function mecca$components$mecca_$_iter__16083(s__16084){
return (new cljs.core.LazySeq(null,((function (active){
return (function (){
var s__16084__$1 = s__16084;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16084__$1);
if(temp__5457__auto__){
var s__16084__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16084__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__16084__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__16086 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__16085 = (0);
while(true){
if((i__16085 < size__4323__auto__)){
var vec__16087 = cljs.core._nth.call(null,c__4322__auto__,i__16085);
var x = cljs.core.nth.call(null,vec__16087,(0),null);
var pattern = cljs.core.nth.call(null,vec__16087,(1),null);
cljs.core.chunk_append.call(null,b__16086,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16085,vec__16087,x,pattern,c__4322__auto__,size__4323__auto__,b__16086,s__16084__$2,temp__5457__auto__,active){
return (function (e){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),cljs.core.vec.call(null,cljs.core.take.call(null,(16),cljs.core.cycle.call(null,pattern)))], null));

return cljs.core.reset_BANG_.call(null,active,x);
});})(i__16085,vec__16087,x,pattern,c__4322__auto__,size__4323__auto__,b__16086,s__16084__$2,temp__5457__auto__,active))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.call(null,x,cljs.core.deref.call(null,active)))?"lightgreen":"violet")], null)], null),x], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__16093 = (i__16085 + (1));
i__16085 = G__16093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16086),mecca$components$mecca_$_iter__16083.call(null,cljs.core.chunk_rest.call(null,s__16084__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16086),null);
}
} else {
var vec__16090 = cljs.core.first.call(null,s__16084__$2);
var x = cljs.core.nth.call(null,vec__16090,(0),null);
var pattern = cljs.core.nth.call(null,vec__16090,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__16090,x,pattern,s__16084__$2,temp__5457__auto__,active){
return (function (e){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),cljs.core.vec.call(null,cljs.core.take.call(null,(16),cljs.core.cycle.call(null,pattern)))], null));

return cljs.core.reset_BANG_.call(null,active,x);
});})(vec__16090,x,pattern,s__16084__$2,temp__5457__auto__,active))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.call(null,x,cljs.core.deref.call(null,active)))?"lightgreen":"violet")], null)], null),x], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),mecca$components$mecca_$_iter__16083.call(null,cljs.core.rest.call(null,s__16084__$2)));
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
})())], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Bassline: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Scale: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Octave: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"octave","octave",1066197953)], null))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Tempo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null))))].join('')], null)], null)], null);
});
;})(active))
});

//# sourceMappingURL=components.js.map
