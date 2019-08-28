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
goog.require('mecca.mario');
mecca.components.scale_picker = (function mecca$components$scale_picker(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Scale: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
e.preventDefault();

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-scale","set-scale",-582286217),e.target.value], null));
})], null),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function mecca$components$scale_picker_$_iter__18405(s__18406){
return (new cljs.core.LazySeq(null,(function (){
var s__18406__$1 = s__18406;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18406__$1);
if(temp__5457__auto__){
var s__18406__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18406__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18406__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18408 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18407 = (0);
while(true){
if((i__18407 < size__4323__auto__)){
var scale = cljs.core._nth.call(null,c__4322__auto__,i__18407);
cljs.core.chunk_append.call(null,b__18408,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),scale], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scale], null)));

var G__18409 = (i__18407 + (1));
i__18407 = G__18409;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18408),mecca$components$scale_picker_$_iter__18405.call(null,cljs.core.chunk_rest.call(null,s__18406__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18408),null);
}
} else {
var scale = cljs.core.first.call(null,s__18406__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),scale], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scale], null)),mecca$components$scale_picker_$_iter__18405.call(null,cljs.core.rest.call(null,s__18406__$2)));
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
})], null),(function (){var iter__4324__auto__ = (function mecca$components$key_picker_$_iter__18410(s__18411){
return (new cljs.core.LazySeq(null,(function (){
var s__18411__$1 = s__18411;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18411__$1);
if(temp__5457__auto__){
var s__18411__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18411__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18411__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18413 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18412 = (0);
while(true){
if((i__18412 < size__4323__auto__)){
var note = cljs.core._nth.call(null,c__4322__auto__,i__18412);
cljs.core.chunk_append.call(null,b__18413,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),note], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),note], null)));

var G__18414 = (i__18412 + (1));
i__18412 = G__18414;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18413),mecca$components$key_picker_$_iter__18410.call(null,cljs.core.chunk_rest.call(null,s__18411__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18413),null);
}
} else {
var note = cljs.core.first.call(null,s__18411__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),note], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),note], null)),mecca$components$key_picker_$_iter__18410.call(null,cljs.core.rest.call(null,s__18411__$2)));
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
mecca.components.brace = (function mecca$components$brace(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale (2,2.15) translate (0,1.95)",new cljs.core.Keyword(null,"d","d",1972142424),"m 0.792,10.271 c 0,1.044 -0.408,2.064 -0.408,3.06 0,0.54 0.12,1.044 0.516,1.44 0.06,0.06 -0.036,0.156 -0.096,0.096 -0.528,-0.54 -0.708,-1.248 -0.708,-2.004 0,-1.068 0.432,-2.112 0.432,-3.12 0,-0.54 -0.132,-1.044 -0.516,-1.44 C 0,8.291 0,8.291 0,8.279 0,8.267 0,8.267 0.012,8.255 c 0.384,-0.396 0.516,-0.9 0.516,-1.44 0,-1.008 -0.432,-2.052 -0.432,-3.12 0,-0.756 0.18,-1.464 0.708,-2.004 0.06,-0.06 0.156,0.036 0.096,0.096 -0.396,0.396 -0.516,0.9 -0.516,1.44 0,0.996 0.408,2.016 0.408,3.06 0,0.744 -0.18,1.452 -0.696,1.992 0.516,0.54 0.696,1.248 0.696,1.992 z"], null)], null);
});
mecca.components.bar_line = (function mecca$components$bar_line(x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(3.825,-0.09)",new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"x2","x2",-1362513475),x,new cljs.core.Keyword(null,"y1","y1",589123466),(8),new cljs.core.Keyword(null,"y2","y2",-718691301),36.19,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.35], null)], null);
});
mecca.components.bar_line_dotted = (function mecca$components$bar_line_dotted(x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(14,0)",new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"x2","x2",-1362513475),x,new cljs.core.Keyword(null,"y1","y1",589123466),(6),new cljs.core.Keyword(null,"y2","y2",-718691301),(38),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"orange",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.25,new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),0.5], null)], null);
});
mecca.components.beat_line = (function mecca$components$beat_line(x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(14,0)",new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"x2","x2",-1362513475),x,new cljs.core.Keyword(null,"y1","y1",589123466),(6),new cljs.core.Keyword(null,"y2","y2",-718691301),(38),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.075,new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),0.5], null)], null);
});
mecca.components.ending_bar = (function mecca$components$ending_bar(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(1.2,0.06)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),22.25,new cljs.core.Keyword(null,"y","y",-1757859776),(3),new cljs.core.Keyword(null,"width","width",-384071477),0.24,new cljs.core.Keyword(null,"height","height",1025178622),11.25,new cljs.core.Keyword(null,"ry","ry",-334598563),(0),new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),22.125,new cljs.core.Keyword(null,"x2","x2",-1362513475),22.125,new cljs.core.Keyword(null,"y1","y1",589123466),(3),new cljs.core.Keyword(null,"y2","y2",-718691301),14.25,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.1], null)], null)], null);
});
mecca.components.ending_bar_repeat = (function mecca$components$ending_bar_repeat(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),62.5,new cljs.core.Keyword(null,"y","y",-1757859776),(8),new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"height","height",1025178622),(28),new cljs.core.Keyword(null,"ry","ry",-334598563),(0),new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),61.8,new cljs.core.Keyword(null,"x2","x2",-1362513475),61.8,new cljs.core.Keyword(null,"y1","y1",589123466),(8),new cljs.core.Keyword(null,"y2","y2",-718691301),(36),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.35], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),60.8,new cljs.core.Keyword(null,"cy","cy",755331060),(11),new cljs.core.Keyword(null,"r","r",-471384190),0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),60.8,new cljs.core.Keyword(null,"cy","cy",755331060),(13),new cljs.core.Keyword(null,"r","r",-471384190),0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),60.8,new cljs.core.Keyword(null,"cy","cy",755331060),(23),new cljs.core.Keyword(null,"r","r",-471384190),0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),60.8,new cljs.core.Keyword(null,"cy","cy",755331060),(25),new cljs.core.Keyword(null,"r","r",-471384190),0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),60.8,new cljs.core.Keyword(null,"cy","cy",755331060),(33),new cljs.core.Keyword(null,"r","r",-471384190),0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),60.8,new cljs.core.Keyword(null,"cy","cy",755331060),(35),new cljs.core.Keyword(null,"r","r",-471384190),0.4], null)], null)], null);
});
mecca.components.eighth_note_flag = (function mecca$components$eighth_note_flag(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.007,-0.007)",new cljs.core.Keyword(null,"d","d",1972142424),"M179 -646c15 29 28.5449 55.0752 46 102c18.3213 49.2549 30 108.298 30 138c0 105 -80 173 -168 200c-18 5 -47 9 -87 16v190h22c8 0 33 -61 71 -95c4 -3 -2 3 61 -56c62 -58 122 -137 122 -241c0 -37.5245 -12.6807 -106.071 -35 -163 c-19.9111 -50.7861 -43 -99 -66 -132c-6 -5 -10 -7 -13 -7s-5 2 -5 5l4 10c1.17241 2.93103 13.7644 24.8111 18 33z"], null)], null);
});
mecca.components.beam = (function mecca$components$beam(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),"2981,475 3499,424 3499,484 2981,535"], null)], null);
});
mecca.components.kill_note = (function mecca$components$kill_note(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"d","d",1972142424),"M 0.75,0.3 L 1.75,-0.7 M 1.75,0.3 L 0.75,-0.7",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"red",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.35], null)], null);
});
mecca.components.drum_hit = (function mecca$components$drum_hit(color,p__18415){
var vec__18416 = p__18415;
var x = cljs.core.nth.call(null,vec__18416,(0),null);
var y = cljs.core.nth.call(null,vec__18416,(1),null);
var mouseover_QMARK_ = reagent.core.atom.call(null,false);
return ((function (mouseover_QMARK_,vec__18416,x,y){
return (function (color__$1,p__18419){
var vec__18420 = p__18419;
var x__$1 = cljs.core.nth.call(null,vec__18420,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__18420,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (vec__18420,x__$1,y__$1,mouseover_QMARK_,vec__18416,x,y){
return (function (){
return cljs.core.reset_BANG_.call(null,mouseover_QMARK_,true);
});})(vec__18420,x__$1,y__$1,mouseover_QMARK_,vec__18416,x,y))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (vec__18420,x__$1,y__$1,mouseover_QMARK_,vec__18416,x,y){
return (function (){
return cljs.core.reset_BANG_.call(null,mouseover_QMARK_,false);
});})(vec__18420,x__$1,y__$1,mouseover_QMARK_,vec__18416,x,y))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__18420,x__$1,y__$1,mouseover_QMARK_,vec__18416,x,y){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-note","remove-note",-1957283966),x__$1,y__$1], null));
});})(vec__18420,x__$1,y__$1,mouseover_QMARK_,vec__18416,x,y))
,new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((12.78 + ((6) * x__$1))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y__$1 + (1))),") "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"m1.24.27 .9.74c.02.01 .04.03 .07.03 .02 0 .05-.01.08-.03l.15-.12c.02-.02.04-.06.04-.09 0-.03-.02-.06-.04-.08L1.56 0 2.43-.71c.02-.02.04-.05.04-.08 0-.03-.02-.07-.04-.09l-.15-.12c-.02-.01-.05-.03-.08-.03-.02 0-.04.01-.07.03L1.24-.27.33-1.01c-.02-.01-.04-.03-.07-.03-.02 0-.05.01-.08.03l-.15.12c-.02.02-.04.06-.04.09 0 .03.02 .06.04 .08L.91 0 .04.71c-.02.02-.04.05-.04.08 0 .03.02 .07.04 .09l.15.12c.02.01 .05.03 .08.03 .02 0 .04-.01.07-.03z",new cljs.core.Keyword(null,"fill","fill",883462889),color__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),((((31) < y__$1))?2.2:(0)),new cljs.core.Keyword(null,"y","y",-1757859776),((((31) < y__$1))?-6.3:0.8),new cljs.core.Keyword(null,"height","height",1025178622),5.5,new cljs.core.Keyword(null,"width","width",-384071477),0.25,new cljs.core.Keyword(null,"fill","fill",883462889),color__$1], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,mouseover_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.kill_note], null):null)], null);
});
;})(mouseover_QMARK_,vec__18416,x,y))
});
mecca.components.ledger_line = (function mecca$components$ledger_line(p__18423){
var vec__18424 = p__18423;
var x = cljs.core.nth.call(null,vec__18424,(0),null);
var y = cljs.core.nth.call(null,vec__18424,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"transform","transform",1381301764),["scale (1,1) translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((8.875 + (6.9 * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((25.0375 - y)),") "].join(''),new cljs.core.Keyword(null,"height","height",1025178622),0.2,new cljs.core.Keyword(null,"width","width",-384071477),2.085,new cljs.core.Keyword(null,"ry","ry",-334598563),0.1,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null)], null);
});
mecca.components.quarter_note = (function mecca$components$quarter_note(color,p__18427){
var vec__18428 = p__18427;
var x = cljs.core.nth.call(null,vec__18428,(0),null);
var y = cljs.core.nth.call(null,vec__18428,(1),null);
var mouseover_QMARK_ = reagent.core.atom.call(null,false);
return ((function (mouseover_QMARK_,vec__18428,x,y){
return (function (color__$1,p__18431){
var vec__18432 = p__18431;
var x__$1 = cljs.core.nth.call(null,vec__18432,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__18432,(1),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (vec__18432,x__$1,y__$1,mouseover_QMARK_,vec__18428,x,y){
return (function (){
return cljs.core.reset_BANG_.call(null,mouseover_QMARK_,true);
});})(vec__18432,x__$1,y__$1,mouseover_QMARK_,vec__18428,x,y))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (vec__18432,x__$1,y__$1,mouseover_QMARK_,vec__18428,x,y){
return (function (){
return cljs.core.reset_BANG_.call(null,mouseover_QMARK_,false);
});})(vec__18432,x__$1,y__$1,mouseover_QMARK_,vec__18428,x,y))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__18432,x__$1,y__$1,mouseover_QMARK_,vec__18428,x,y){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-note","remove-note",-1957283966),x__$1,y__$1], null));
});})(vec__18432,x__$1,y__$1,mouseover_QMARK_,vec__18428,x,y))
,new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((13) + ((6) * x__$1))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y__$1 + (1))),") "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"m1.62-1.06c.41 0 .8.21 .8.67 0 .53-.41.89-.76 1.1-.27.16-.56.27-.86.27-.41 0-.8-.21-.8-.67 0-.53.41-.89.76-1.1.27-.16.56-.27.86-.27z",new cljs.core.Keyword(null,"fill","fill",883462889),color__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),((((((((11) < y__$1)) && ((y__$1 < (18))))) || (((23) < y__$1))))?2.15:0.02),new cljs.core.Keyword(null,"y","y",-1757859776),((((((((11) < y__$1)) && ((y__$1 < (18))))) || (((23) < y__$1))))?-7.1:(0)),new cljs.core.Keyword(null,"height","height",1025178622),6.794,new cljs.core.Keyword(null,"width","width",-384071477),0.25,new cljs.core.Keyword(null,"fill","fill",883462889),color__$1], null)], null),((((cljs.core._EQ_.call(null,y__$1,(-5))) || (cljs.core._EQ_.call(null,y__$1,(7))) || (cljs.core._EQ_.call(null,y__$1,(19)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale (1.75,1.75)",new cljs.core.Keyword(null,"height","height",1025178622),0.2,new cljs.core.Keyword(null,"width","width",-384071477),2.085,new cljs.core.Keyword(null,"ry","ry",-334598563),0.1,new cljs.core.Keyword(null,"x","x",2099068185),-0.334,new cljs.core.Keyword(null,"y","y",-1757859776),-0.1], null)], null):null),(cljs.core.truth_(cljs.core.deref.call(null,mouseover_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.kill_note], null):null)], null);
});
;})(mouseover_QMARK_,vec__18428,x,y))
});
mecca.components.drum_clef = (function mecca$components$drum_clef(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(4,33.334)",new cljs.core.Keyword(null,"d","d",1972142424),"M2.5-1.3h-.7c0 0-.1 0-.1.1v3.7c0 0 0 .1.1 .1h.7c0 0 .1 0 .1-.1v-3.7c0 0 0-.1-.1-.1zM.8-1.3h-.7c0 0-.1 0-.1.1v3.7c0 0 0 .1.1 .1h.7c0 0 .1 0 .1-.1v-3.7c0 0 0-.1-.1-.1z",new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null)], null);
});
mecca.components.bass_clef = (function mecca$components$bass_clef(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(2.5,22)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M4 .2C4 1.1 3.6 1.9 3 2.5 2.2 3.3 1.3 3.7.2 4.1.1 4.1-.1 4 .1 3.9.5 3.8 1 3.6 1.3 3.3 2.1 2.8 2.8 2 3 1 3.1.4 3.1-.2 2.9-.8 2.8-1.2 2.5-1.6 2-1.7 1.6-1.8 1.2-1.6.9-1.3.8-1.2.6-1 .6-.7.8-.9.8-.9 1-.9 1.3-1.1 1.8-.9 1.9-.5 1.9-.1 1.9.3 1.5.5 1.2.7 .6.6 .4.2 .1-.4.3-1.2.8-1.6 1.4-2.1 2.2-2.1 2.8-1.8 3.5-1.6 3.9-.9 4-.2 4-.1 4 .1 4 .2z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),4.5,new cljs.core.Keyword(null,"cy","cy",755331060),(-1),new cljs.core.Keyword(null,"r","r",-471384190),0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),4.5,new cljs.core.Keyword(null,"cy","cy",755331060),(1),new cljs.core.Keyword(null,"r","r",-471384190),0.4], null)], null)], null);
});
});
mecca.components.treble_clef = (function mecca$components$treble_clef(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(2.65,10.5)",new cljs.core.Keyword(null,"d","d",1972142424),"m2.51 2.74c-.18.06-.34.18-.52.34-.14.18-.23.38-.23.58 0 .14.06 .29.14 .47.09 .18.23 .29.4 .34.06 0 .09.03 .09.09 0 .03-.03.03-.09.03-.29-.06-.52-.23-.69-.43-.18-.23-.26-.49-.29-.78 0-.32.11-.61.29-.87.18-.26.4-.47.69-.58l-.2-1.1c-.47.4-.83.81-1.16 1.21-.29.43-.47.9-.47 1.39 0 .23.06 .43.14 .63.09 .2.2 .4.38 .58.34 .34.78 .52 1.33.54 .18 0 .38-.06.61-.09l-.47-2.4zm.23-.03.47 2.34c.47-.2.69-.61.69-1.24-.03-.2-.09-.4-.2-.58-.09-.18-.23-.32-.4-.4-.18-.09-.38-.14-.58-.14zm-.63-3.18c.09-.06.23-.18.34-.32.11-.14.26-.32.38-.52.11-.2.2-.4.29-.61.06-.2.11-.4.11-.58 0-.09 0-.14-.03-.23 0-.11-.06-.2-.11-.26-.06-.06-.14-.09-.23-.09-.18 0-.34.11-.49.34-.11.2-.2.43-.29.69-.06.26-.11.52-.11.78 .03.29 .06.54 .14.76zm-.2.18c-.14-.49-.2-1.01-.23-1.5 0-.32.03-.63.09-.92.06-.29.14-.52.26-.76.11-.2.23-.38.4-.49.14-.09.23-.14.29-.14.03 0 .09.03 .11.03 .03.03 .06.09 .11.14 .38.52 .54 1.12.54 1.88 0 .34-.06.69-.14 1.01-.09.34-.23.67-.4.96-.18.29-.38.54-.63.78l.26 1.21c.14-.03.23-.03.29-.03.23 0 .43.06 .63.14 .2.09 .34.23 .49.4 .14.18 .23.34 .32.58 .06.2 .11.43 .11.67 0 .34-.09.69-.29.98-.2.29-.47.52-.87.67 .03.14 .06.38 .14.63 .06.29 .11.49 .14.67 .03.18 .03.32 .03.49 0 .23-.06.47-.18.63-.11.2-.29.34-.49.43-.2.11-.4.14-.67.14-.34 0-.63-.09-.87-.29-.26-.2-.38-.43-.4-.78 0-.14.03-.29.11-.4.06-.11.14-.23.26-.32.11-.09.23-.11.38-.14.11 0 .23.03 .34.09 .11.06 .2.14 .26.26 .06.11 .09.23 .09.38 0 .18-.06.34-.18.47-.11.11-.29.2-.47.2h-.06c.11.18 .32.29 .58.29 .14 0 .29-.03.4-.09.14-.06.26-.14.38-.23.09-.09.18-.2.2-.32.06-.11.09-.29.09-.52 0-.14-.03-.29-.03-.43-.03-.14-.06-.34-.11-.58-.06-.23-.09-.4-.11-.54-.18.06-.38.06-.58.06-.34 0-.63-.06-.96-.2-.29-.14-.54-.32-.78-.58-.23-.23-.4-.52-.52-.83-.11-.32-.18-.63-.2-.96 0-.32.06-.61.18-.9.11-.29.26-.54.43-.81.18-.26.34-.49.54-.69.2-.2.43-.47.76-.78z"], null)], null);
});
mecca.components.sharp = (function mecca$components$sharp(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.5 + y)),")"].join(''),new cljs.core.Keyword(null,"d","d",1972142424),"M.18.04V-.91l.4-.11v.95zM.98-.19.7-.11V-1.05l.28-.08v-.39l-.28.08V-2.42h-.11v1l-.4.12V-2.24h-.11v.98l-.28.08v.39l.28-.08v.95l-.28.08V.55L.08.47v.96h.11V.43l.4-.11v.94h.11V.29L.98.21Z"], null)], null);
});
mecca.components.flat = (function mecca$components$flat(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"m .94 1.62s-.06-1.2-.06-2c0-.32.02-.56.04-.64.08-.24.6-.68.88-.84.18-.1.36-.14.52-.14.2 0 .38.08.5.22.2.22.32.56.32.94 0 .36-.1.78-.34 1.2-.26.48-.84 1.12-1.44 1.5-.08.04-.14.06-.2.06-.18 0-.22-.2-.22-.3m-.7 1.78c.06.08.12.1.18.1s.12-.04.12-.04c.6-.34 1.08-.88 1.58-1.22 1.78-1.24 2.4-2.46 2.4-3.38 0-1.14-.88-1.86-1.8-1.92-.14 0-.28.02-.42.06-.22.06-.46.14-.68.28-.12.1-.34.28-.44.28-.04 0-.06 0-.1-.02-.14-.06-.22-.2-.22-.34.02-.44.14-5.24.14-5.64 0-.22-.18-.34-.38-.34-.28 0-.6.2-.62.56 0 0 .08 11.42.24 11.62"], null)], null);
});
mecca.components.c_sharp_minor = (function mecca$components$c_sharp_minor(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.sharp,6.6,(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.sharp,7.4,(11)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.sharp,8.2,(7)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.sharp,(9),(10)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.sharp,9.8,(13)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.sharp,10.6,(9)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.sharp,11.4,(12)], null)], null);
});
mecca.components.quarter_note_button = (function mecca$components$quarter_note_button(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(0,0)"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M 69.920725,132.90712 V 102.20693 H 99.12731 128.3339 v 30.70019 30.70021 H 99.12731 69.920725 Z m 8.344738,24.12159 v -2.19287 h -2.086184 -2.086185 v 2.19287 2.19288 h 2.086185 2.086184 z m 45.896057,0 v -2.19287 h -2.08618 -2.08619 v 2.19287 2.19288 h 2.08619 2.08618 z m -22.94803,-5.48217 v -1.09644 h 2.08619 2.08618 v -1.09643 -1.09644 h 1.0431 1.04308 v -18.63941 -18.6394 h -1.04308 -1.0431 v -1.09645 -1.09643 h -1.04309 -1.04309 V 121.94277 135.1 h -7.301647 -7.301647 v 1.09643 1.09645 h -2.086184 -2.086185 v 1.09643 1.09643 h -1.043092 -1.043092 v 1.09645 1.09642 H 81.39474 80.351648 v 2.19288 2.19287 h 1.043092 1.043093 v 2.19287 2.19287 h 1.043092 1.043092 v 1.09644 1.09644 h 8.344739 8.344734 z m -22.948027,-42.761 v -2.19287 h -2.086184 -2.086185 v 2.19287 2.19288 h 2.086185 2.086184 z m 45.896057,0 v -2.19287 h -2.08618 -2.08619 v 2.19287 2.19288 h 2.08619 2.08618 z"], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fab100",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.26735786], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"m 64.40715,132.43769 v -32.0231 h 2.145117 2.145116 v -2.287373 -2.287361 h 30.031629 30.031628 v 2.287361 2.287373 H 98.729012 68.697383 v 32.0231 32.02313 H 66.552267 64.40715 Z m 21.451164,17.15525 v -1.14368 h -2.145117 -2.145115 v -1.14369 -1.14368 h -1.072559 -1.072558 v -2.28735 -2.28738 h 1.072558 1.072559 v -1.14367 -1.14369 h 1.072557 1.072558 v -1.14369 -1.14368 h 2.145117 2.145116 v -1.14368 -1.14368 h 7.507907 7.507913 v -13.72419 -13.7242 h 1.07255 1.07256 v 19.44262 19.44259 h -2.14511 -2.14512 v 1.14368 1.14369 h -3.217676 -3.217675 v 1.14368 1.14368 h -4.290232 -4.290233 z"], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fa7500",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.27688742], null)], null)], null);
});
mecca.components.basslines = (function mecca$components$basslines(){
var active = reagent.core.atom.call(null,"Alberti bass");
return ((function (active){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Try some well-known musical patterns: "], null),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (active){
return (function mecca$components$basslines_$_iter__18435(s__18436){
return (new cljs.core.LazySeq(null,((function (active){
return (function (){
var s__18436__$1 = s__18436;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18436__$1);
if(temp__5457__auto__){
var s__18436__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18436__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18436__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18438 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18437 = (0);
while(true){
if((i__18437 < size__4323__auto__)){
var map__18439 = cljs.core._nth.call(null,c__4322__auto__,i__18437);
var map__18439__$1 = ((((!((map__18439 == null)))?(((((map__18439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18439):map__18439);
var name = cljs.core.get.call(null,map__18439__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var notes = cljs.core.get.call(null,map__18439__$1,new cljs.core.Keyword(null,"notes","notes",-1039600523));
var scales = cljs.core.get.call(null,map__18439__$1,new cljs.core.Keyword(null,"scales","scales",-1197224722));
cljs.core.chunk_append.call(null,b__18438,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18437,map__18439,map__18439__$1,name,notes,scales,c__4322__auto__,size__4323__auto__,b__18438,s__18436__$2,temp__5457__auto__,active){
return (function (e){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-scale","set-scale",-582286217),cljs.core.first.call(null,scales)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),cljs.core.vec.call(null,cljs.core.take.call(null,(16),cljs.core.cycle.call(null,notes)))], null));

return cljs.core.reset_BANG_.call(null,active,name);
});})(i__18437,map__18439,map__18439__$1,name,notes,scales,c__4322__auto__,size__4323__auto__,b__18438,s__18436__$2,temp__5457__auto__,active))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.call(null,name,cljs.core.deref.call(null,active)))?"lightgreen":"violet")], null)], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null)));

var G__18443 = (i__18437 + (1));
i__18437 = G__18443;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18438),mecca$components$basslines_$_iter__18435.call(null,cljs.core.chunk_rest.call(null,s__18436__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18438),null);
}
} else {
var map__18441 = cljs.core.first.call(null,s__18436__$2);
var map__18441__$1 = ((((!((map__18441 == null)))?(((((map__18441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18441):map__18441);
var name = cljs.core.get.call(null,map__18441__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var notes = cljs.core.get.call(null,map__18441__$1,new cljs.core.Keyword(null,"notes","notes",-1039600523));
var scales = cljs.core.get.call(null,map__18441__$1,new cljs.core.Keyword(null,"scales","scales",-1197224722));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__18441,map__18441__$1,name,notes,scales,s__18436__$2,temp__5457__auto__,active){
return (function (e){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-scale","set-scale",-582286217),cljs.core.first.call(null,scales)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),cljs.core.vec.call(null,cljs.core.take.call(null,(16),cljs.core.cycle.call(null,notes)))], null));

return cljs.core.reset_BANG_.call(null,active,name);
});})(map__18441,map__18441__$1,name,notes,scales,s__18436__$2,temp__5457__auto__,active))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.call(null,name,cljs.core.deref.call(null,active)))?"lightgreen":"violet")], null)], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null)),mecca$components$basslines_$_iter__18435.call(null,cljs.core.rest.call(null,s__18436__$2)));
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
mecca.components.staff = (function mecca$components$staff(){
var focused = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
var lead = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lead","lead",1214038903)], null));
var bassline = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null));
var drums = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drums","drums",641393692)], null));
var current_position = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
return ((function (focused,lead,bassline,drums,current_position){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.staff","g.staff",1070451758),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(1.3,1) scale(0.96,0.96)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g#lines","g#lines",1814887067),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (focused,lead,bassline,drums,current_position){
return (function mecca$components$staff_$_iter__18444(s__18445){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position){
return (function (){
var s__18445__$1 = s__18445;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18445__$1);
if(temp__5457__auto__){
var s__18445__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18445__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18445__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18447 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18446 = (0);
while(true){
if((i__18446 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__18446);
cljs.core.chunk_append.call(null,b__18447,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"visibility","visibility",1338380893)],[((((cljs.core._EQ_.call(null,y,(30))) || (cljs.core._EQ_.call(null,y,(18)))))?0.25:null),"black","bevel",y,"butt",((((cljs.core._EQ_.call(null,y,(30))) || (cljs.core._EQ_.call(null,y,(18)))))?0.06:0.15),2.25,y,63.5,(((((y > (7))) && (cljs.core.even_QMARK_.call(null,y)) && ((y < (42)))))?"visible":"hidden")])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)));

var G__18478 = (i__18446 + (1));
i__18446 = G__18478;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18447),mecca$components$staff_$_iter__18444.call(null,cljs.core.chunk_rest.call(null,s__18445__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18447),null);
}
} else {
var y = cljs.core.first.call(null,s__18445__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"visibility","visibility",1338380893)],[((((cljs.core._EQ_.call(null,y,(30))) || (cljs.core._EQ_.call(null,y,(18)))))?0.25:null),"black","bevel",y,"butt",((((cljs.core._EQ_.call(null,y,(30))) || (cljs.core._EQ_.call(null,y,(18)))))?0.06:0.15),2.25,y,63.5,(((((y > (7))) && (cljs.core.even_QMARK_.call(null,y)) && ((y < (42)))))?"visible":"hidden")])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)),mecca$components$staff_$_iter__18444.call(null,cljs.core.rest.call(null,s__18445__$2)));
}
} else {
return null;
}
break;
}
});})(focused,lead,bassline,drums,current_position))
,null,null));
});})(focused,lead,bassline,drums,current_position))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(38)));
})())], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.brace], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bar_line,-1.68], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g#clefs","g#clefs",-142950481),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bass_clef], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.treble_clef], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.drum_clef], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bar_line_dotted,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,(18)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bar_line,31.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bar_line_dotted,(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,(30)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,(36)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,(42)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.ending_bar_repeat], null)], null),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (focused,lead,bassline,drums,current_position){
return (function mecca$components$staff_$_iter__18448(s__18449){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position){
return (function (){
var s__18449__$1 = s__18449;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18449__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__18449__$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position){
return (function mecca$components$staff_$_iter__18448_$_iter__18450(s__18451){
return (new cljs.core.LazySeq(null,((function (s__18449__$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position){
return (function (){
var s__18451__$1 = s__18451;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__18451__$1);
if(temp__5457__auto____$1){
var s__18451__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18451__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18451__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18453 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18452 = (0);
while(true){
if((i__18452 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__18452);
cljs.core.chunk_append.call(null,b__18453,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(12.5,0)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"height","height",1025178622)],[(0.5 + y),((function (i__18452,s__18449__$1,y,c__4322__auto__,size__4323__auto__,b__18453,s__18451__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position){
return (function (){
return cljs.core.reset_BANG_.call(null,focused,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
});})(i__18452,s__18449__$1,y,c__4322__auto__,size__4323__auto__,b__18453,s__18451__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position))
,"gray",(3),((function (i__18452,s__18449__$1,y,c__4322__auto__,size__4323__auto__,b__18453,s__18451__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-note","add-note",-926319985),x,y], null));
});})(i__18452,s__18449__$1,y,c__4322__auto__,size__4323__auto__,b__18453,s__18451__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position))
,((function (i__18452,s__18449__$1,y,c__4322__auto__,size__4323__auto__,b__18453,s__18451__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__18452,s__18449__$1,y,c__4322__auto__,size__4323__auto__,b__18453,s__18451__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position))
,((6) * x),"all","hidden",(1)])], null),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,focused),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?((((30) < y))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.35 + ((6) * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y + (1))),") "].join(''),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"m1.24.27 .9.74c.02.01 .04.03 .07.03 .02 0 .05-.01.08-.03l.15-.12c.02-.02.04-.06.04-.09 0-.03-.02-.06-.04-.08L1.56 0 2.43-.71c.02-.02.04-.05.04-.08 0-.03-.02-.07-.04-.09l-.15-.12c-.02-.01-.05-.03-.08-.03-.02 0-.04.01-.07.03L1.24-.27.33-1.01c-.02-.01-.04-.03-.07-.03-.02 0-.05.01-.08.03l-.15.12c-.02.02-.04.06-.04.09 0 .03.02 .06.04 .08L.91 0 .04.71c-.02.02-.04.05-.04.08 0 .03.02 .07.04 .09l.15.12c.02.01 .05.03 .08.03 .02 0 .04-.01.07-.03z",new cljs.core.Keyword(null,"fill","fill",883462889),"gray"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),((((31) < y))?2.2:(0)),new cljs.core.Keyword(null,"y","y",-1757859776),((((31) < y))?-6.3:0.8),new cljs.core.Keyword(null,"height","height",1025178622),5.5,new cljs.core.Keyword(null,"width","width",-384071477),0.25,new cljs.core.Keyword(null,"fill","fill",883462889),"gray"], null)], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.5 + ((6) * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y + (1))),")"].join(''),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"m1.62-1.06c.41 0 .8.21 .8.67 0 .53-.41.89-.76 1.1-.27.16-.56.27-.86.27-.41 0-.8-.21-.8-.67 0-.53.41-.89.76-1.1.27-.16.56-.27.86-.27z",new cljs.core.Keyword(null,"fill","fill",883462889),"gray"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?2.15:0.02),new cljs.core.Keyword(null,"y","y",-1757859776),((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?-7.1:(0)),new cljs.core.Keyword(null,"height","height",1025178622),6.794,new cljs.core.Keyword(null,"width","width",-384071477),0.25,new cljs.core.Keyword(null,"fill","fill",883462889),"gray"], null)], null)], null)):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__18479 = (i__18452 + (1));
i__18452 = G__18479;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18453),mecca$components$staff_$_iter__18448_$_iter__18450.call(null,cljs.core.chunk_rest.call(null,s__18451__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18453),null);
}
} else {
var y = cljs.core.first.call(null,s__18451__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(12.5,0)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"height","height",1025178622)],[(0.5 + y),((function (s__18449__$1,y,s__18451__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position){
return (function (){
return cljs.core.reset_BANG_.call(null,focused,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
});})(s__18449__$1,y,s__18451__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position))
,"gray",(3),((function (s__18449__$1,y,s__18451__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-note","add-note",-926319985),x,y], null));
});})(s__18449__$1,y,s__18451__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position))
,((function (s__18449__$1,y,s__18451__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(s__18449__$1,y,s__18451__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position))
,((6) * x),"all","hidden",(1)])], null),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,focused),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?((((30) < y))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.35 + ((6) * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y + (1))),") "].join(''),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"m1.24.27 .9.74c.02.01 .04.03 .07.03 .02 0 .05-.01.08-.03l.15-.12c.02-.02.04-.06.04-.09 0-.03-.02-.06-.04-.08L1.56 0 2.43-.71c.02-.02.04-.05.04-.08 0-.03-.02-.07-.04-.09l-.15-.12c-.02-.01-.05-.03-.08-.03-.02 0-.04.01-.07.03L1.24-.27.33-1.01c-.02-.01-.04-.03-.07-.03-.02 0-.05.01-.08.03l-.15.12c-.02.02-.04.06-.04.09 0 .03.02 .06.04 .08L.91 0 .04.71c-.02.02-.04.05-.04.08 0 .03.02 .07.04 .09l.15.12c.02.01 .05.03 .08.03 .02 0 .04-.01.07-.03z",new cljs.core.Keyword(null,"fill","fill",883462889),"gray"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),((((31) < y))?2.2:(0)),new cljs.core.Keyword(null,"y","y",-1757859776),((((31) < y))?-6.3:0.8),new cljs.core.Keyword(null,"height","height",1025178622),5.5,new cljs.core.Keyword(null,"width","width",-384071477),0.25,new cljs.core.Keyword(null,"fill","fill",883462889),"gray"], null)], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.5 + ((6) * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y + (1))),")"].join(''),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"m1.62-1.06c.41 0 .8.21 .8.67 0 .53-.41.89-.76 1.1-.27.16-.56.27-.86.27-.41 0-.8-.21-.8-.67 0-.53.41-.89.76-1.1.27-.16.56-.27.86-.27z",new cljs.core.Keyword(null,"fill","fill",883462889),"gray"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?2.15:0.02),new cljs.core.Keyword(null,"y","y",-1757859776),((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?-7.1:(0)),new cljs.core.Keyword(null,"height","height",1025178622),6.794,new cljs.core.Keyword(null,"width","width",-384071477),0.25,new cljs.core.Keyword(null,"fill","fill",883462889),"gray"], null)], null)], null)):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$components$staff_$_iter__18448_$_iter__18450.call(null,cljs.core.rest.call(null,s__18451__$2)));
}
} else {
return null;
}
break;
}
});})(s__18449__$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position))
,null,null));
});})(s__18449__$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.conj.call(null,cljs.core.range.call(null,(31)),(31),(33),(35))));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,mecca$components$staff_$_iter__18448.call(null,cljs.core.rest.call(null,s__18449__$1)));
} else {
var G__18480 = cljs.core.rest.call(null,s__18449__$1);
s__18449__$1 = G__18480;
continue;
}
} else {
return null;
}
break;
}
});})(focused,lead,bassline,drums,current_position))
,null,null));
});})(focused,lead,bassline,drums,current_position))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(8)));
})()),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (focused,lead,bassline,drums,current_position){
return (function mecca$components$staff_$_iter__18454(s__18455){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position){
return (function (){
var s__18455__$1 = s__18455;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18455__$1);
if(temp__5457__auto__){
var s__18455__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18455__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18455__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18457 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18456 = (0);
while(true){
if((i__18456 < size__4323__auto__)){
var map__18458 = cljs.core._nth.call(null,c__4322__auto__,i__18456);
var map__18458__$1 = ((((!((map__18458 == null)))?(((((map__18458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18458):map__18458);
var time = cljs.core.get.call(null,map__18458__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var pitch = cljs.core.get.call(null,map__18458__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append.call(null,b__18457,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.quarter_note,"black",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)));

var G__18481 = (i__18456 + (1));
i__18456 = G__18481;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18457),mecca$components$staff_$_iter__18454.call(null,cljs.core.chunk_rest.call(null,s__18455__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18457),null);
}
} else {
var map__18460 = cljs.core.first.call(null,s__18455__$2);
var map__18460__$1 = ((((!((map__18460 == null)))?(((((map__18460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18460):map__18460);
var time = cljs.core.get.call(null,map__18460__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var pitch = cljs.core.get.call(null,map__18460__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.quarter_note,"black",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)),mecca$components$staff_$_iter__18454.call(null,cljs.core.rest.call(null,s__18455__$2)));
}
} else {
return null;
}
break;
}
});})(focused,lead,bassline,drums,current_position))
,null,null));
});})(focused,lead,bassline,drums,current_position))
;
return iter__4324__auto__.call(null,cljs.core.deref.call(null,lead));
})()),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (focused,lead,bassline,drums,current_position){
return (function mecca$components$staff_$_iter__18462(s__18463){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position){
return (function (){
var s__18463__$1 = s__18463;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18463__$1);
if(temp__5457__auto__){
var s__18463__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18463__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18463__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18465 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18464 = (0);
while(true){
if((i__18464 < size__4323__auto__)){
var map__18466 = cljs.core._nth.call(null,c__4322__auto__,i__18464);
var map__18466__$1 = ((((!((map__18466 == null)))?(((((map__18466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18466):map__18466);
var time = cljs.core.get.call(null,map__18466__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var pitch = cljs.core.get.call(null,map__18466__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append.call(null,b__18465,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.quarter_note,"black",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)));

var G__18482 = (i__18464 + (1));
i__18464 = G__18482;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18465),mecca$components$staff_$_iter__18462.call(null,cljs.core.chunk_rest.call(null,s__18463__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18465),null);
}
} else {
var map__18468 = cljs.core.first.call(null,s__18463__$2);
var map__18468__$1 = ((((!((map__18468 == null)))?(((((map__18468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18468):map__18468);
var time = cljs.core.get.call(null,map__18468__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var pitch = cljs.core.get.call(null,map__18468__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.quarter_note,"black",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)),mecca$components$staff_$_iter__18462.call(null,cljs.core.rest.call(null,s__18463__$2)));
}
} else {
return null;
}
break;
}
});})(focused,lead,bassline,drums,current_position))
,null,null));
});})(focused,lead,bassline,drums,current_position))
;
return iter__4324__auto__.call(null,cljs.core.deref.call(null,bassline));
})()),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (focused,lead,bassline,drums,current_position){
return (function mecca$components$staff_$_iter__18470(s__18471){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position){
return (function (){
var s__18471__$1 = s__18471;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18471__$1);
if(temp__5457__auto__){
var s__18471__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18471__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18471__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18473 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18472 = (0);
while(true){
if((i__18472 < size__4323__auto__)){
var map__18474 = cljs.core._nth.call(null,c__4322__auto__,i__18472);
var map__18474__$1 = ((((!((map__18474 == null)))?(((((map__18474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18474):map__18474);
var time = cljs.core.get.call(null,map__18474__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var pitch = cljs.core.get.call(null,map__18474__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append.call(null,b__18473,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.drum_hit,"black",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)));

var G__18483 = (i__18472 + (1));
i__18472 = G__18483;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18473),mecca$components$staff_$_iter__18470.call(null,cljs.core.chunk_rest.call(null,s__18471__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18473),null);
}
} else {
var map__18476 = cljs.core.first.call(null,s__18471__$2);
var map__18476__$1 = ((((!((map__18476 == null)))?(((((map__18476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18476):map__18476);
var time = cljs.core.get.call(null,map__18476__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var pitch = cljs.core.get.call(null,map__18476__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.drum_hit,"black",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)),mecca$components$staff_$_iter__18470.call(null,cljs.core.rest.call(null,s__18471__$2)));
}
} else {
return null;
}
break;
}
});})(focused,lead,bassline,drums,current_position))
,null,null));
});})(focused,lead,bassline,drums,current_position))
;
return iter__4324__auto__.call(null,cljs.core.deref.call(null,drums));
})())], null);
});
;})(focused,lead,bassline,drums,current_position))
});
mecca.components.editor = (function mecca$components$editor(){
var current_position = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
var playing_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null));
var mario_sprite = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-sprite","mario-sprite",-1325469738)], null));
var jump = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null));
return ((function (current_position,playing_QMARK_,mario_sprite,jump){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 64 38"], null),((cljs.core.even_QMARK_.call(null,cljs.core.deref.call(null,mario_sprite)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario,new cljs.core.Keyword(null,"run1","run1",-335773478),cljs.core.nth.call(null,cljs.core.into.call(null,cljs.core.reverse.call(null,cljs.core.range.call(null,(32))),cljs.core.reverse.call(null,cljs.core.range.call(null,(32)))),cljs.core.mod.call(null,cljs.core.deref.call(null,mario_sprite),(64)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario,new cljs.core.Keyword(null,"run2","run2",-1491341138),cljs.core.nth.call(null,cljs.core.into.call(null,cljs.core.reverse.call(null,cljs.core.range.call(null,(32))),cljs.core.reverse.call(null,cljs.core.range.call(null,(32)))),cljs.core.mod.call(null,cljs.core.deref.call(null,mario_sprite),(64)))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.editor_bg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.staff], null)], null);
});
;})(current_position,playing_QMARK_,mario_sprite,jump))
});
mecca.components.mecca = (function mecca$components$mecca(){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"MECCA Music Platform"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The Music Education, Composition & Creation Application"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.scale_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.key_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.octave_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.tempo_input], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return mecca.music.play_bassline_BANG_.call(null);
})], null),"Play Bassline"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Absolute time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Lead: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lead","lead",1214038903)], null))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Bassline: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Drums: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drums","drums",641393692)], null))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Mario Sprite: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-sprite","mario-sprite",-1325469738)], null))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null))))," scale from MIDI number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.music.root_note_midi_num.call(null))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"octave","octave",1066197953)], null)))),"):"].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Tempo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Current position: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null))))].join('')], null)], null);
});

//# sourceMappingURL=components.js.map
