// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.components');
goog.require('cljs.core');
goog.require('mecca.music');
goog.require('reagent.core');
goog.require('goog.events');
goog.require('goog.events.EventType');
mecca.components.scale_picker = (function mecca$components$scale_picker(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Scale: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.music.app_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
e.preventDefault();

return cljs.core.swap_BANG_.call(null,mecca.music.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"scale","scale",-230427353),e.target.value);
})], null),(function (){var iter__4324__auto__ = (function mecca$components$scale_picker_$_iter__13204(s__13205){
return (new cljs.core.LazySeq(null,(function (){
var s__13205__$1 = s__13205;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__13205__$1);
if(temp__5457__auto__){
var s__13205__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13205__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__13205__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__13207 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__13206 = (0);
while(true){
if((i__13206 < size__4323__auto__)){
var scale = cljs.core._nth.call(null,c__4322__auto__,i__13206);
cljs.core.chunk_append.call(null,b__13207,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),scale], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scale], null)));

var G__13208 = (i__13206 + (1));
i__13206 = G__13208;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13207),mecca$components$scale_picker_$_iter__13204.call(null,cljs.core.chunk_rest.call(null,s__13205__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13207),null);
}
} else {
var scale = cljs.core.first.call(null,s__13205__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),scale], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scale], null)),mecca$components$scale_picker_$_iter__13204.call(null,cljs.core.rest.call(null,s__13205__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.keys.call(null,mecca.music.scales));
})()], null)], null);
});
mecca.components.key_picker = (function mecca$components$key_picker(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804)," Key: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.music.app_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
e.preventDefault();

return cljs.core.swap_BANG_.call(null,mecca.music.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"key","key",-1516042587),e.target.value);
})], null),(function (){var iter__4324__auto__ = (function mecca$components$key_picker_$_iter__13209(s__13210){
return (new cljs.core.LazySeq(null,(function (){
var s__13210__$1 = s__13210;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__13210__$1);
if(temp__5457__auto__){
var s__13210__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13210__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__13210__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__13212 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__13211 = (0);
while(true){
if((i__13211 < size__4323__auto__)){
var note = cljs.core._nth.call(null,c__4322__auto__,i__13211);
cljs.core.chunk_append.call(null,b__13212,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),note], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),note], null)));

var G__13213 = (i__13211 + (1));
i__13211 = G__13213;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13212),mecca$components$key_picker_$_iter__13209.call(null,cljs.core.chunk_rest.call(null,s__13210__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13212),null);
}
} else {
var note = cljs.core.first.call(null,s__13210__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),note], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),note], null)),mecca$components$key_picker_$_iter__13209.call(null,cljs.core.rest.call(null,s__13210__$2)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804)," Octave: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"6%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"lightgray"], null),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"octave","octave",1066197953).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.music.app_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.swap_BANG_.call(null,mecca.music.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"octave","octave",1066197953),e.target.value);
})], null)], null)], null);
});
mecca.components.tempo_input = (function mecca$components$tempo_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804)," Tempo: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"8%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"lightgray"], null),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"tempo","tempo",-1555208453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.music.app_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.swap_BANG_.call(null,mecca.music.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),e.target.value);
})], null)], null)], null);
});

//# sourceMappingURL=components.js.map
