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
mecca.components.scale_picker = (function mecca$components$scale_picker(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Scale: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
e.preventDefault();

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-scale","set-scale",-582286217),e.target.value], null));
})], null),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function mecca$components$scale_picker_$_iter__14410(s__14411){
return (new cljs.core.LazySeq(null,(function (){
var s__14411__$1 = s__14411;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14411__$1);
if(temp__5457__auto__){
var s__14411__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14411__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__14411__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__14413 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__14412 = (0);
while(true){
if((i__14412 < size__4323__auto__)){
var scale = cljs.core._nth.call(null,c__4322__auto__,i__14412);
cljs.core.chunk_append.call(null,b__14413,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),scale], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scale], null)));

var G__14414 = (i__14412 + (1));
i__14412 = G__14414;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14413),mecca$components$scale_picker_$_iter__14410.call(null,cljs.core.chunk_rest.call(null,s__14411__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14413),null);
}
} else {
var scale = cljs.core.first.call(null,s__14411__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),scale], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scale], null)),mecca$components$scale_picker_$_iter__14410.call(null,cljs.core.rest.call(null,s__14411__$2)));
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
})], null),(function (){var iter__4324__auto__ = (function mecca$components$key_picker_$_iter__14415(s__14416){
return (new cljs.core.LazySeq(null,(function (){
var s__14416__$1 = s__14416;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14416__$1);
if(temp__5457__auto__){
var s__14416__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14416__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__14416__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__14418 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__14417 = (0);
while(true){
if((i__14417 < size__4323__auto__)){
var note = cljs.core._nth.call(null,c__4322__auto__,i__14417);
cljs.core.chunk_append.call(null,b__14418,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),note], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),note], null)));

var G__14419 = (i__14417 + (1));
i__14417 = G__14419;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14418),mecca$components$key_picker_$_iter__14415.call(null,cljs.core.chunk_rest.call(null,s__14416__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14418),null);
}
} else {
var note = cljs.core.first.call(null,s__14416__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),note], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),note], null)),mecca$components$key_picker_$_iter__14415.call(null,cljs.core.rest.call(null,s__14416__$2)));
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
mecca.components.cell = (function mecca$components$cell(p__14420){
var vec__14421 = p__14420;
var x = cljs.core.nth.call(null,vec__14421,(0),null);
var y = cljs.core.nth.call(null,vec__14421,(1),null);
var focused_QMARK_ = reagent.core.atom.call(null,false);
var bassline = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null));
return ((function (focused_QMARK_,bassline,vec__14421,x,y){
return (function (p__14424){
var vec__14425 = p__14424;
var x__$1 = cljs.core.nth.call(null,vec__14425,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__14425,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],[(y__$1 * 0.75),"black",((function (vec__14425,x__$1,y__$1,focused_QMARK_,bassline,vec__14421,x,y){
return (function (){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,false);
});})(vec__14425,x__$1,y__$1,focused_QMARK_,bassline,vec__14421,x,y))
,(cljs.core.truth_(cljs.core.deref.call(null,focused_QMARK_))?"violet":((clojure.string.includes_QMARK_.call(null,mecca.music.midi_num__GT_note.call(null,y__$1),"#"))?"pink":"white"
)),(1),((function (vec__14425,x__$1,y__$1,focused_QMARK_,bassline,vec__14421,x,y){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),cljs.core.assoc.call(null,cljs.core.deref.call(null,bassline),x__$1,y__$1)], null));
});})(vec__14425,x__$1,y__$1,focused_QMARK_,bassline,vec__14421,x,y))
,0.05,((function (vec__14425,x__$1,y__$1,focused_QMARK_,bassline,vec__14421,x,y){
return (function (){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,true);
});})(vec__14425,x__$1,y__$1,focused_QMARK_,bassline,vec__14421,x,y))
,((1) + x__$1),0.75])], null);
});
;})(focused_QMARK_,bassline,vec__14421,x,y))
});
mecca.components.note_label = (function mecca$components$note_label(y){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0.5 + (y * 0.75)),new cljs.core.Keyword(null,"height","height",1025178622),0.75,new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"left",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),0.5], null),mecca.music.midi_num__GT_note.call(null,y)], null);
});
mecca.components.grid_lines = (function mecca$components$grid_lines(p__14428){
var vec__14429 = p__14428;
var x = cljs.core.nth.call(null,vec__14429,(0),null);
var y = cljs.core.nth.call(null,vec__14429,(1),null);
var line_focused_QMARK_ = reagent.core.atom.call(null,false);
var notes = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null)));
var note_endings = cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (line_focused_QMARK_,notes,vec__14429,x,y){
return (function mecca$components$grid_lines_$_iter__14432(s__14433){
return (new cljs.core.LazySeq(null,((function (line_focused_QMARK_,notes,vec__14429,x,y){
return (function (){
var s__14433__$1 = s__14433;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14433__$1);
if(temp__5457__auto__){
var s__14433__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14433__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__14433__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__14435 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__14434 = (0);
while(true){
if((i__14434 < size__4323__auto__)){
var map__14436 = cljs.core._nth.call(null,c__4322__auto__,i__14434);
var map__14436__$1 = ((((!((map__14436 == null)))?(((((map__14436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14436):map__14436);
var time = cljs.core.get.call(null,map__14436__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__14436__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var pitch = cljs.core.get.call(null,map__14436__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append.call(null,b__14435,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((time + duration) + (1)),pitch], null));

var G__14444 = (i__14434 + (1));
i__14434 = G__14444;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14435),mecca$components$grid_lines_$_iter__14432.call(null,cljs.core.chunk_rest.call(null,s__14433__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14435),null);
}
} else {
var map__14438 = cljs.core.first.call(null,s__14433__$2);
var map__14438__$1 = ((((!((map__14438 == null)))?(((((map__14438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14438):map__14438);
var time = cljs.core.get.call(null,map__14438__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__14438__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var pitch = cljs.core.get.call(null,map__14438__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((time + duration) + (1)),pitch], null),mecca$components$grid_lines_$_iter__14432.call(null,cljs.core.rest.call(null,s__14433__$2)));
}
} else {
return null;
}
break;
}
});})(line_focused_QMARK_,notes,vec__14429,x,y))
,null,null));
});})(line_focused_QMARK_,notes,vec__14429,x,y))
;
return iter__4324__auto__.call(null,notes);
})());
return ((function (line_focused_QMARK_,notes,note_endings,vec__14429,x,y){
return (function (p__14440){
var vec__14441 = p__14440;
var x__$1 = cljs.core.nth.call(null,vec__14441,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__14441,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475)],[((cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,note_endings),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)))?"red":((cljs.core._EQ_.call(null,(1),cljs.core.mod.call(null,x__$1,(4))))?"black":"lightgrey"
)),((function (vec__14441,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__14429,x,y){
return (function (e){
return cljs.core.swap_BANG_.call(null,line_focused_QMARK_,cljs.core.not);
});})(vec__14441,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__14429,x,y))
,(- y__$1),mecca.events.mouse_down_handler,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(cljs.core.deref.call(null,line_focused_QMARK_))?"ew-resize":null)], null),((cljs.core._EQ_.call(null,(1),cljs.core.mod.call(null,x__$1,(4))))?0.075:0.04),((function (vec__14441,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__14429,x,y){
return (function (e){
return cljs.core.swap_BANG_.call(null,line_focused_QMARK_,cljs.core.not);
});})(vec__14441,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__14429,x,y))
,x__$1,(y__$1 - (1)),x__$1])], null);
});
;})(line_focused_QMARK_,notes,note_endings,vec__14429,x,y))
});
mecca.components.note = (function mecca$components$note(p__14445){
var vec__14446 = p__14445;
var x = cljs.core.nth.call(null,vec__14446,(0),null);
var y = cljs.core.nth.call(null,vec__14446,(1),null);
var focused_QMARK_ = cljs.core.atom.call(null,false);
var bassline = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null)));
return ((function (focused_QMARK_,bassline,vec__14446,x,y){
return (function (p__14449){
var vec__14450 = p__14449;
var x__$1 = cljs.core.nth.call(null,vec__14450,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__14450,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],[(0.75 * y__$1),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,mecca.events.selected),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)))?"red":null),((function (vec__14450,x__$1,y__$1,focused_QMARK_,bassline,vec__14446,x,y){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,false);
});})(vec__14450,x__$1,y__$1,focused_QMARK_,bassline,vec__14446,x,y))
,"blue",((((4) * cljs.core.count.call(null,bassline)) * x__$1) - 0.05),((function (vec__14450,x__$1,y__$1,focused_QMARK_,bassline,vec__14446,x,y){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,null], null)], null));
});})(vec__14450,x__$1,y__$1,focused_QMARK_,bassline,vec__14446,x,y))
,0.1,((function (vec__14450,x__$1,y__$1,focused_QMARK_,bassline,vec__14446,x,y){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,true);
});})(vec__14450,x__$1,y__$1,focused_QMARK_,bassline,vec__14446,x,y))
,((1) + x__$1),0.75])], null),(cljs.core.truth_(cljs.core.deref.call(null,focused_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"red",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.4,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1.5 + x__$1)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.375 + (0.75 * y__$1))),") ","scale(0.15)"].join(''),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (vec__14450,x__$1,y__$1,focused_QMARK_,bassline,vec__14446,x,y){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,true);
});})(vec__14450,x__$1,y__$1,focused_QMARK_,bassline,vec__14446,x,y))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__14450,x__$1,y__$1,focused_QMARK_,bassline,vec__14446,x,y){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,null], null)], null));
});})(vec__14450,x__$1,y__$1,focused_QMARK_,bassline,vec__14446,x,y))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (vec__14450,x__$1,y__$1,focused_QMARK_,bassline,vec__14446,x,y){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,false);
});})(vec__14450,x__$1,y__$1,focused_QMARK_,bassline,vec__14446,x,y))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(-1),new cljs.core.Keyword(null,"y1","y1",589123466),(-1),new cljs.core.Keyword(null,"x2","x2",-1362513475),(1),new cljs.core.Keyword(null,"y2","y2",-718691301),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(1),new cljs.core.Keyword(null,"y1","y1",589123466),(-1),new cljs.core.Keyword(null,"x2","x2",-1362513475),(-1),new cljs.core.Keyword(null,"y2","y2",-718691301),(1)], null)], null)], null):null)], null);
});
;})(focused_QMARK_,bassline,vec__14446,x,y))
});
mecca.components.note_grid = (function mecca$components$note_grid(){
var scale_name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null));
var scale_notes = cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,scale_name));
var bassline = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null));
return ((function (scale_name,scale_notes,bassline){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),["0 0 17 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.75 * (((2) * cljs.core.count.call(null,scale_notes)) - (1))))].join('')], null),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (scale_name,scale_notes,bassline){
return (function mecca$components$note_grid_$_iter__14455(s__14456){
return (new cljs.core.LazySeq(null,((function (scale_name,scale_notes,bassline){
return (function (){
var s__14456__$1 = s__14456;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14456__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__14456__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline){
return (function mecca$components$note_grid_$_iter__14455_$_iter__14457(s__14458){
return (new cljs.core.LazySeq(null,((function (s__14456__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline){
return (function (){
var s__14458__$1 = s__14458;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__14458__$1);
if(temp__5457__auto____$1){
var s__14458__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14458__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__14458__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__14460 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__14459 = (0);
while(true){
if((i__14459 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__14459);
cljs.core.chunk_append.call(null,b__14460,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__14471 = (i__14459 + (1));
i__14459 = G__14471;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14460),mecca$components$note_grid_$_iter__14455_$_iter__14457.call(null,cljs.core.chunk_rest.call(null,s__14458__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14460),null);
}
} else {
var y = cljs.core.first.call(null,s__14458__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$components$note_grid_$_iter__14455_$_iter__14457.call(null,cljs.core.rest.call(null,s__14458__$2)));
}
} else {
return null;
}
break;
}
});})(s__14456__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline))
,null,null));
});})(s__14456__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,(((2) * cljs.core.count.call(null,scale_notes)) - (1)))));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,mecca$components$note_grid_$_iter__14455.call(null,cljs.core.rest.call(null,s__14456__$1)));
} else {
var G__14472 = cljs.core.rest.call(null,s__14456__$1);
s__14456__$1 = G__14472;
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
return (function mecca$components$note_grid_$_iter__14461(s__14462){
return (new cljs.core.LazySeq(null,((function (scale_name,scale_notes,bassline){
return (function (){
var s__14462__$1 = s__14462;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14462__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__14462__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline){
return (function mecca$components$note_grid_$_iter__14461_$_iter__14463(s__14464){
return (new cljs.core.LazySeq(null,((function (s__14462__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline){
return (function (){
var s__14464__$1 = s__14464;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__14464__$1);
if(temp__5457__auto____$1){
var s__14464__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14464__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__14464__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__14466 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__14465 = (0);
while(true){
if((i__14465 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__14465);
cljs.core.chunk_append.call(null,b__14466,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.grid_lines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__14473 = (i__14465 + (1));
i__14465 = G__14473;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14466),mecca$components$note_grid_$_iter__14461_$_iter__14463.call(null,cljs.core.chunk_rest.call(null,s__14464__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14466),null);
}
} else {
var y = cljs.core.first.call(null,s__14464__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.grid_lines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$components$note_grid_$_iter__14461_$_iter__14463.call(null,cljs.core.rest.call(null,s__14464__$2)));
}
} else {
return null;
}
break;
}
});})(s__14462__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline))
,null,null));
});})(s__14462__$1,x,xs__6012__auto__,temp__5457__auto__,scale_name,scale_notes,bassline))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,(((2) * cljs.core.count.call(null,scale_notes)) - (1)))));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,mecca$components$note_grid_$_iter__14461.call(null,cljs.core.rest.call(null,s__14462__$1)));
} else {
var G__14474 = cljs.core.rest.call(null,s__14462__$1);
s__14462__$1 = G__14474;
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
return (function mecca$components$note_grid_$_iter__14467(s__14468){
return (new cljs.core.LazySeq(null,((function (scale_name,scale_notes,bassline){
return (function (){
var s__14468__$1 = s__14468;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14468__$1);
if(temp__5457__auto__){
var s__14468__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14468__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__14468__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__14470 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__14469 = (0);
while(true){
if((i__14469 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__14469);
var y = cljs.core.deref.call(null,bassline);
if(typeof y === 'number'){
cljs.core.chunk_append.call(null,b__14470,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__14475 = (i__14469 + (1));
i__14469 = G__14475;
continue;
} else {
var G__14476 = (i__14469 + (1));
i__14469 = G__14476;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14470),mecca$components$note_grid_$_iter__14467.call(null,cljs.core.chunk_rest.call(null,s__14468__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14470),null);
}
} else {
var x = cljs.core.first.call(null,s__14468__$2);
var y = cljs.core.deref.call(null,bassline);
if(typeof y === 'number'){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),mecca$components$note_grid_$_iter__14467.call(null,cljs.core.rest.call(null,s__14468__$2)));
} else {
var G__14477 = cljs.core.rest.call(null,s__14468__$2);
s__14468__$1 = G__14477;
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
mecca.components.note_stem = (function mecca$components$note_stem(p__14479){
var vec__14480 = p__14479;
var x = cljs.core.nth.call(null,vec__14480,(0),null);
var y = cljs.core.nth.call(null,vec__14480,(1),null);
var stem_down_QMARK_ = ((function (vec__14480,x,y){
return (function (p1__14478_SHARP_){
return (p1__14478_SHARP_ > (1));
});})(vec__14480,x,y))
;
return ((function (stem_down_QMARK_,vec__14480,x,y){
return (function (p__14483){
var vec__14484 = p__14483;
var x__$1 = cljs.core.nth.call(null,vec__14484,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__14484,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_(stem_down_QMARK_.call(null,y__$1))?new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.25,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"bevel",new cljs.core.Keyword(null,"x1","x1",-1863922247),(7.1 + (6.5 * x__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),(7.1 + (6.5 * x__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),(13.5 - (0.57 * y__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),(19.2 - (0.57 * y__$1))], null):new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.25,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"bevel",new cljs.core.Keyword(null,"x1","x1",-1863922247),((10) + (6.5 * x__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),((10) + (6.5 * x__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),(6.1 - (0.57 * y__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),(12.5 - (0.57 * y__$1))], null))], null)], null);
});
;})(stem_down_QMARK_,vec__14480,x,y))
});
mecca.components.note_head = (function mecca$components$note_head(color,p__14487){
var vec__14488 = p__14487;
var x = cljs.core.nth.call(null,vec__14488,(0),null);
var y = cljs.core.nth.call(null,vec__14488,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"transform","transform",1381301764),["rotate(-28, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((9) + (6.5 * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((14.2 - (0.5 * y))),")"].join(''),new cljs.core.Keyword(null,"cx","cx",1272694324),(9.1 + (6.5 * x)),new cljs.core.Keyword(null,"cy","cy",755331060),(13.1 - (0.57 * y)),new cljs.core.Keyword(null,"rx","rx",1627208482),1.5,new cljs.core.Keyword(null,"ry","ry",-334598563),(1),new cljs.core.Keyword(null,"fill","fill",883462889),color], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_stem,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], null);
});
mecca.components.bass_clef = (function mecca$components$bass_clef(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.36,0.36) translate(-4.5,22)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M18.3 9C18.4 11.9 17.1 14.6 15.1 16.6 12.6 19.1 9.4 20.6 6.1 21.7 5.6 21.9 5 21.6 5.7 21.3 7 20.7 8.4 20.2 9.6 19.3 12.3 17.7 14.6 15 15.2 11.8 15.5 9.8 15.4 7.8 14.9 5.8 14.6 4.4 13.6 3 12 2.8 10.6 2.5 9.1 3 8.1 4 7.8 4.3 7.3 5.1 7.4 5.9 8 5.4 8 5.5 8.5 5.3 9.6 4.8 11.1 5.5 11.4 6.7 11.7 7.9 11.5 9.4 10.3 10 9.1 10.6 7.4 10.3 6.7 9.1 5.6 7.1 6.2 4.4 8 3.1 9.8 1.6 12.4 1.5 14.6 2.3 16.8 3.1 18.1 5.4 18.3 7.6 18.3 8.1 18.3 8.6 18.3 9z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),(20),new cljs.core.Keyword(null,"cy","cy",755331060),5.5,new cljs.core.Keyword(null,"r","r",-471384190),1.25], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),(20),new cljs.core.Keyword(null,"cy","cy",755331060),9.5,new cljs.core.Keyword(null,"r","r",-471384190),1.25], null)], null)], null);
});
mecca.components.staff = (function mecca$components$staff(){
var bassline = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null));
var mouse_over = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
var current_position = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
return ((function (bassline,mouse_over,current_position){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 110 25"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bass_clef], null),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (bassline,mouse_over,current_position){
return (function mecca$components$staff_$_iter__14491(s__14492){
return (new cljs.core.LazySeq(null,((function (bassline,mouse_over,current_position){
return (function (){
var s__14492__$1 = s__14492;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14492__$1);
if(temp__5457__auto__){
var s__14492__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14492__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__14492__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__14494 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__14493 = (0);
while(true){
if((i__14493 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__14493);
cljs.core.chunk_append.call(null,b__14494,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"visibility","visibility",1338380893)],[((cljs.core.odd_QMARK_.call(null,y))?0.5:null),"black",((function (i__14493,y,c__4322__auto__,size__4323__auto__,b__14494,s__14492__$2,temp__5457__auto__,bassline,mouse_over,current_position){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_over,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
});})(i__14493,y,c__4322__auto__,size__4323__auto__,b__14494,s__14492__$2,temp__5457__auto__,bassline,mouse_over,current_position))
,"bevel",(0.5 + y),((function (i__14493,y,c__4322__auto__,size__4323__auto__,b__14494,s__14492__$2,temp__5457__auto__,bassline,mouse_over,current_position){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155)], null));
});})(i__14493,y,c__4322__auto__,size__4323__auto__,b__14494,s__14492__$2,temp__5457__auto__,bassline,mouse_over,current_position))
,"butt",((((cljs.core._EQ_.call(null,y,cljs.core.deref.call(null,mouse_over))) || (cljs.core.even_QMARK_.call(null,y))))?0.1:1.8),((function (i__14493,y,c__4322__auto__,size__4323__auto__,b__14494,s__14492__$2,temp__5457__auto__,bassline,mouse_over,current_position){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_over,y);
});})(i__14493,y,c__4322__auto__,size__4323__auto__,b__14494,s__14492__$2,temp__5457__auto__,bassline,mouse_over,current_position))
,(0),(0.5 + y),"all",(110),((((cljs.core._EQ_.call(null,y,cljs.core.deref.call(null,mouse_over))) || (cljs.core.even_QMARK_.call(null,y))))?"visible":"hidden")])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)));

var G__14505 = (i__14493 + (1));
i__14493 = G__14505;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14494),mecca$components$staff_$_iter__14491.call(null,cljs.core.chunk_rest.call(null,s__14492__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14494),null);
}
} else {
var y = cljs.core.first.call(null,s__14492__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"visibility","visibility",1338380893)],[((cljs.core.odd_QMARK_.call(null,y))?0.5:null),"black",((function (y,s__14492__$2,temp__5457__auto__,bassline,mouse_over,current_position){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_over,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
});})(y,s__14492__$2,temp__5457__auto__,bassline,mouse_over,current_position))
,"bevel",(0.5 + y),((function (y,s__14492__$2,temp__5457__auto__,bassline,mouse_over,current_position){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155)], null));
});})(y,s__14492__$2,temp__5457__auto__,bassline,mouse_over,current_position))
,"butt",((((cljs.core._EQ_.call(null,y,cljs.core.deref.call(null,mouse_over))) || (cljs.core.even_QMARK_.call(null,y))))?0.1:1.8),((function (y,s__14492__$2,temp__5457__auto__,bassline,mouse_over,current_position){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_over,y);
});})(y,s__14492__$2,temp__5457__auto__,bassline,mouse_over,current_position))
,(0),(0.5 + y),"all",(110),((((cljs.core._EQ_.call(null,y,cljs.core.deref.call(null,mouse_over))) || (cljs.core.even_QMARK_.call(null,y))))?"visible":"hidden")])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)),mecca$components$staff_$_iter__14491.call(null,cljs.core.rest.call(null,s__14492__$2)));
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
return iter__4324__auto__.call(null,cljs.core.range.call(null,(8),(17)));
})()),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (bassline,mouse_over,current_position){
return (function mecca$components$staff_$_iter__14495(s__14496){
return (new cljs.core.LazySeq(null,((function (bassline,mouse_over,current_position){
return (function (){
var s__14496__$1 = s__14496;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14496__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__14496__$1,x,xs__6012__auto__,temp__5457__auto__,bassline,mouse_over,current_position){
return (function mecca$components$staff_$_iter__14495_$_iter__14497(s__14498){
return (new cljs.core.LazySeq(null,((function (s__14496__$1,x,xs__6012__auto__,temp__5457__auto__,bassline,mouse_over,current_position){
return (function (){
var s__14498__$1 = s__14498;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__14498__$1);
if(temp__5457__auto____$1){
var s__14498__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14498__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__14498__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__14500 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__14499 = (0);
while(true){
if((i__14499 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__14499);
cljs.core.chunk_append.call(null,b__14500,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"ry","ry",-334598563),new cljs.core.Keyword(null,"height","height",1025178622)],[(0.5 + ((2) * y)),((function (i__14499,s__14496__$1,y,c__4322__auto__,size__4323__auto__,b__14500,s__14498__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,bassline,mouse_over,current_position){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_over,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
});})(i__14499,s__14496__$1,y,c__4322__auto__,size__4323__auto__,b__14500,s__14498__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,bassline,mouse_over,current_position))
,(3),((function (i__14499,s__14496__$1,y,c__4322__auto__,size__4323__auto__,b__14500,s__14498__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,bassline,mouse_over,current_position){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_over,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__14499,s__14496__$1,y,c__4322__auto__,size__4323__auto__,b__14500,s__14498__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,bassline,mouse_over,current_position))
,((7) + (6.5 * x)),"all",((((cljs.core.not_EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.deref.call(null,mouse_over))) && (((((7) < y)) && ((y < (17)))))))?"hidden":((cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.deref.call(null,mouse_over)))?"visible":"hidden"
)),0.1,0.2])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__14506 = (i__14499 + (1));
i__14499 = G__14506;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14500),mecca$components$staff_$_iter__14495_$_iter__14497.call(null,cljs.core.chunk_rest.call(null,s__14498__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14500),null);
}
} else {
var y = cljs.core.first.call(null,s__14498__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"ry","ry",-334598563),new cljs.core.Keyword(null,"height","height",1025178622)],[(0.5 + ((2) * y)),((function (s__14496__$1,y,s__14498__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,bassline,mouse_over,current_position){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_over,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
});})(s__14496__$1,y,s__14498__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,bassline,mouse_over,current_position))
,(3),((function (s__14496__$1,y,s__14498__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,bassline,mouse_over,current_position){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_over,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(s__14496__$1,y,s__14498__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,bassline,mouse_over,current_position))
,((7) + (6.5 * x)),"all",((((cljs.core.not_EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.deref.call(null,mouse_over))) && (((((7) < y)) && ((y < (17)))))))?"hidden":((cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.deref.call(null,mouse_over)))?"visible":"hidden"
)),0.1,0.2])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$components$staff_$_iter__14495_$_iter__14497.call(null,cljs.core.rest.call(null,s__14498__$2)));
}
} else {
return null;
}
break;
}
});})(s__14496__$1,x,xs__6012__auto__,temp__5457__auto__,bassline,mouse_over,current_position))
,null,null));
});})(s__14496__$1,x,xs__6012__auto__,temp__5457__auto__,bassline,mouse_over,current_position))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,(24))));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,mecca$components$staff_$_iter__14495.call(null,cljs.core.rest.call(null,s__14496__$1)));
} else {
var G__14507 = cljs.core.rest.call(null,s__14496__$1);
s__14496__$1 = G__14507;
continue;
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
})()),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (bassline,mouse_over,current_position){
return (function mecca$components$staff_$_iter__14501(s__14502){
return (new cljs.core.LazySeq(null,((function (bassline,mouse_over,current_position){
return (function (){
var s__14502__$1 = s__14502;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14502__$1);
if(temp__5457__auto__){
var s__14502__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14502__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__14502__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__14504 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__14503 = (0);
while(true){
if((i__14503 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__14503);
var y = cljs.core.get.call(null,cljs.core.deref.call(null,bassline),x);
if(typeof y === 'number'){
cljs.core.chunk_append.call(null,b__14504,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_head,((cljs.core._EQ_.call(null,cljs.core.deref.call(null,current_position),(x + (1))))?"red":"black"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (48))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__14508 = (i__14503 + (1));
i__14503 = G__14508;
continue;
} else {
var G__14509 = (i__14503 + (1));
i__14503 = G__14509;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14504),mecca$components$staff_$_iter__14501.call(null,cljs.core.chunk_rest.call(null,s__14502__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14504),null);
}
} else {
var x = cljs.core.first.call(null,s__14502__$2);
var y = cljs.core.get.call(null,cljs.core.deref.call(null,bassline),x);
if(typeof y === 'number'){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_head,((cljs.core._EQ_.call(null,cljs.core.deref.call(null,current_position),(x + (1))))?"red":"black"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (48))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),mecca$components$staff_$_iter__14501.call(null,cljs.core.rest.call(null,s__14502__$2)));
} else {
var G__14510 = cljs.core.rest.call(null,s__14502__$2);
s__14502__$1 = G__14510;
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
})())], null);
});
;})(bassline,mouse_over,current_position))
});
mecca.components.basslines = (function mecca$components$basslines(){
var active = reagent.core.atom.call(null,"Alberti bass");
return ((function (active){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Try some well-known musical patterns: "], null),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (active){
return (function mecca$components$basslines_$_iter__14511(s__14512){
return (new cljs.core.LazySeq(null,((function (active){
return (function (){
var s__14512__$1 = s__14512;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14512__$1);
if(temp__5457__auto__){
var s__14512__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14512__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__14512__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__14514 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__14513 = (0);
while(true){
if((i__14513 < size__4323__auto__)){
var map__14515 = cljs.core._nth.call(null,c__4322__auto__,i__14513);
var map__14515__$1 = ((((!((map__14515 == null)))?(((((map__14515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14515):map__14515);
var name = cljs.core.get.call(null,map__14515__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var notes = cljs.core.get.call(null,map__14515__$1,new cljs.core.Keyword(null,"notes","notes",-1039600523));
var scales = cljs.core.get.call(null,map__14515__$1,new cljs.core.Keyword(null,"scales","scales",-1197224722));
cljs.core.chunk_append.call(null,b__14514,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__14513,map__14515,map__14515__$1,name,notes,scales,c__4322__auto__,size__4323__auto__,b__14514,s__14512__$2,temp__5457__auto__,active){
return (function (e){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-scale","set-scale",-582286217),cljs.core.first.call(null,scales)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),cljs.core.vec.call(null,cljs.core.take.call(null,(16),cljs.core.cycle.call(null,notes)))], null));

return cljs.core.reset_BANG_.call(null,active,name);
});})(i__14513,map__14515,map__14515__$1,name,notes,scales,c__4322__auto__,size__4323__auto__,b__14514,s__14512__$2,temp__5457__auto__,active))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.call(null,name,cljs.core.deref.call(null,active)))?"lightgreen":"violet")], null)], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null)));

var G__14519 = (i__14513 + (1));
i__14513 = G__14519;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14514),mecca$components$basslines_$_iter__14511.call(null,cljs.core.chunk_rest.call(null,s__14512__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14514),null);
}
} else {
var map__14517 = cljs.core.first.call(null,s__14512__$2);
var map__14517__$1 = ((((!((map__14517 == null)))?(((((map__14517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14517):map__14517);
var name = cljs.core.get.call(null,map__14517__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var notes = cljs.core.get.call(null,map__14517__$1,new cljs.core.Keyword(null,"notes","notes",-1039600523));
var scales = cljs.core.get.call(null,map__14517__$1,new cljs.core.Keyword(null,"scales","scales",-1197224722));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__14517,map__14517__$1,name,notes,scales,s__14512__$2,temp__5457__auto__,active){
return (function (e){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-scale","set-scale",-582286217),cljs.core.first.call(null,scales)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),cljs.core.vec.call(null,cljs.core.take.call(null,(16),cljs.core.cycle.call(null,notes)))], null));

return cljs.core.reset_BANG_.call(null,active,name);
});})(map__14517,map__14517__$1,name,notes,scales,s__14512__$2,temp__5457__auto__,active))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.call(null,name,cljs.core.deref.call(null,active)))?"lightgreen":"violet")], null)], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null)),mecca$components$basslines_$_iter__14511.call(null,cljs.core.rest.call(null,s__14512__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"MECCA Music Platform"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The Music Education, Composition & Creation Application"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.scale_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.key_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.octave_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.tempo_input], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mario","div.mario",-1368725782)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.staff], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.basslines], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return mecca.music.play_bassline_BANG_.call(null);
})], null),"Play Bassline"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_grid], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Intervals: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null))))," scale from MIDI number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.music.root_note_midi_num.call(null))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"octave","octave",1066197953)], null)))),"):"].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Tempo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null))))].join('')], null)], null)], null);
});

//# sourceMappingURL=components.js.map
