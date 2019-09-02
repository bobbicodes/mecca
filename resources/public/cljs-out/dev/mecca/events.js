// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('mecca.mario');
goog.require('mecca.music');
goog.require('mecca.music.scale');
goog.require('goog.events');
goog.require('goog.events.EventType');
/**
 * Construct an audio context in a way that works even if it's prefixed.
 */
mecca.events.audio_context = (function mecca$events$audio_context(){
if(cljs.core.truth_(window.AudioContext)){
return (new window.AudioContext());
} else {
return (new window.webkitAudioContext());
}
});
goog.exportSymbol('mecca.events.audio_context', mecca.events.audio_context);
/**
 * Return the current time as recorded by the audio context.
 */
mecca.events.current_time = (function mecca$events$current_time(context){
return context.currentTime;
});
goog.exportSymbol('mecca.events.current_time', mecca.events.current_time);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),new cljs.core.Keyword(null,"octave","octave",1066197953),new cljs.core.Keyword(null,"selected-note-value","selected-note-value",-575447419),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),new cljs.core.Keyword(null,"bassline","bassline",325787412),new cljs.core.Keyword(null,"mario-sprite","mario-sprite",-1325469738),new cljs.core.Keyword(null,"lead","lead",1214038903),new cljs.core.Keyword(null,"tempo","tempo",-1555208453),new cljs.core.Keyword(null,"drums","drums",641393692),new cljs.core.Keyword(null,"current-position","current-position",2031348254)],[(1),(3),"quarter","C",mecca.events.audio_context.call(null),"Minor",(0),(0),false,cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(180),cljs.core.PersistentVector.EMPTY,(0)]);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),(function (db,p__11383){
var vec__11384 = p__11383;
var _ = cljs.core.nth.call(null,vec__11384,(0),null);
var bassline = cljs.core.nth.call(null,vec__11384,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"bassline","bassline",325787412),cljs.core.vec.call(null,(function (){var iter__4324__auto__ = ((function (vec__11384,_,bassline){
return (function mecca$events$iter__11387(s__11388){
return (new cljs.core.LazySeq(null,((function (vec__11384,_,bassline){
return (function (){
var s__11388__$1 = s__11388;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__11388__$1);
if(temp__5457__auto__){
var s__11388__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11388__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__11388__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__11390 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__11389 = (0);
while(true){
if((i__11389 < size__4323__auto__)){
var interval = cljs.core._nth.call(null,c__4322__auto__,i__11389);
cljs.core.chunk_append.call(null,b__11390,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))));

var G__11391 = (i__11389 + (1));
i__11389 = G__11391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11390),mecca$events$iter__11387.call(null,cljs.core.chunk_rest.call(null,s__11388__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11390),null);
}
} else {
var interval = cljs.core.first.call(null,s__11388__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))),mecca$events$iter__11387.call(null,cljs.core.rest.call(null,s__11388__$2)));
}
} else {
return null;
}
break;
}
});})(vec__11384,_,bassline))
,null,null));
});})(vec__11384,_,bassline))
;
return iter__4324__auto__.call(null,bassline);
})()));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-note","add-note",-926319985),(function (db,p__11392){
var vec__11393 = p__11392;
var _ = cljs.core.nth.call(null,vec__11393,(0),null);
var x = cljs.core.nth.call(null,vec__11393,(1),null);
var y = cljs.core.nth.call(null,vec__11393,(2),null);
return cljs.core.update_in.call(null,db,(((y < (18)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lead","lead",1214038903)], null):((((((18) < y)) && ((y < (31)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null):((((30) < y))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drums","drums",641393692)], null):null))),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),x,new cljs.core.Keyword(null,"duration","duration",1444101068),(1),new cljs.core.Keyword(null,"pitch","pitch",1495126700),((77) - y)], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-note","remove-note",-1957283966),(function (db,p__11397){
var vec__11398 = p__11397;
var _ = cljs.core.nth.call(null,vec__11398,(0),null);
var x = cljs.core.nth.call(null,vec__11398,(1),null);
var y = cljs.core.nth.call(null,vec__11398,(2),null);
return cljs.core.update_in.call(null,db,(((y < (18)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lead","lead",1214038903)], null):((((((18) < y)) && ((y < (31)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null):((((30) < y))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drums","drums",641393692)], null):null))),((function (vec__11398,_,x,y){
return (function (notes){
return cljs.core.remove.call(null,((function (vec__11398,_,x,y){
return (function (p1__11396_SHARP_){
return ((cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__11396_SHARP_))) && (cljs.core._EQ_.call(null,((77) - y),new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(p1__11396_SHARP_))));
});})(vec__11398,_,x,y))
,notes);
});})(vec__11398,_,x,y))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-drum-hit","add-drum-hit",-259631030),(function (db,p__11401){
var vec__11402 = p__11401;
var _ = cljs.core.nth.call(null,vec__11402,(0),null);
var x = cljs.core.nth.call(null,vec__11402,(1),null);
var y = cljs.core.nth.call(null,vec__11402,(2),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drums","drums",641393692)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),x,new cljs.core.Keyword(null,"duration","duration",1444101068),(1),new cljs.core.Keyword(null,"pitch","pitch",1495126700),((77) - y)], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"move-note","move-note",873805465),(function (db,p__11405){
var vec__11406 = p__11405;
var _ = cljs.core.nth.call(null,vec__11406,(0),null);
var bassline = cljs.core.nth.call(null,vec__11406,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"bassline","bassline",325787412),cljs.core.vec.call(null,(function (){var iter__4324__auto__ = ((function (vec__11406,_,bassline){
return (function mecca$events$iter__11409(s__11410){
return (new cljs.core.LazySeq(null,((function (vec__11406,_,bassline){
return (function (){
var s__11410__$1 = s__11410;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__11410__$1);
if(temp__5457__auto__){
var s__11410__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11410__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__11410__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__11412 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__11411 = (0);
while(true){
if((i__11411 < size__4323__auto__)){
var interval = cljs.core._nth.call(null,c__4322__auto__,i__11411);
cljs.core.chunk_append.call(null,b__11412,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))));

var G__11413 = (i__11411 + (1));
i__11411 = G__11413;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11412),mecca$events$iter__11409.call(null,cljs.core.chunk_rest.call(null,s__11410__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11412),null);
}
} else {
var interval = cljs.core.first.call(null,s__11410__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))),mecca$events$iter__11409.call(null,cljs.core.rest.call(null,s__11410__$2)));
}
} else {
return null;
}
break;
}
});})(vec__11406,_,bassline))
,null,null));
});})(vec__11406,_,bassline))
;
return iter__4324__auto__.call(null,bassline);
})()));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,p__11414){
var vec__11415 = p__11414;
var _ = cljs.core.nth.call(null,vec__11415,(0),null);
var new_time = cljs.core.nth.call(null,vec__11415,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time","time",1385887882),new_time);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"play-on","play-on",-1655917734),(function (db,p__11418){
var vec__11419 = p__11418;
var _ = cljs.core.nth.call(null,vec__11419,(0),null);
var scale = cljs.core.nth.call(null,vec__11419,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"play-off","play-off",2116693509),(function (db,p__11422){
var vec__11423 = p__11422;
var _ = cljs.core.nth.call(null,vec__11423,(0),null);
var scale = cljs.core.nth.call(null,vec__11423,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-scale","set-scale",-582286217),(function (db,p__11426){
var vec__11427 = p__11426;
var _ = cljs.core.nth.call(null,vec__11427,(0),null);
var scale = cljs.core.nth.call(null,vec__11427,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"scale","scale",-230427353),scale);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"advance-position","advance-position",-23796893),(function (db,p__11430){
var vec__11431 = p__11430;
var _ = cljs.core.nth.call(null,vec__11431,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__11431,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),cljs.core.inc);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),(function (db,p__11434){
var vec__11435 = p__11434;
var _ = cljs.core.nth.call(null,vec__11435,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__11435,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(function (db,p__11438){
var vec__11439 = p__11438;
var _ = cljs.core.nth.call(null,vec__11439,(0),null);
var tempo = cljs.core.nth.call(null,vec__11439,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),tempo);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-octave","set-octave",378200257),(function (db,p__11442){
var vec__11443 = p__11442;
var _ = cljs.core.nth.call(null,vec__11443,(0),null);
var octave = cljs.core.nth.call(null,vec__11443,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"octave","octave",1066197953),octave);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-key","set-key",-48186176),(function (db,p__11446){
var vec__11447 = p__11446;
var _ = cljs.core.nth.call(null,vec__11447,(0),null);
var key = cljs.core.nth.call(null,vec__11447,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"key","key",-1516042587),key);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"tick!","tick!",68058958),(function (db,p__11450){
var vec__11451 = p__11450;
var _ = cljs.core.nth.call(null,vec__11451,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__11451,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"mario-sprite","mario-sprite",-1325469738),cljs.core.inc);
}));
mecca.events.mouse_pos = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
mecca.events.selected = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
mecca.events.get_client_rect = (function mecca$events$get_client_rect(evt){
var r = evt.target.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"top","top",-1856271961),r.top], null);
});
mecca.events.mouse_move_handler = (function mecca$events$mouse_move_handler(offset){
return (function (evt){
var x = (evt.clientX - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(offset));
var y = (evt.clientY - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(offset));
return cljs.core.reset_BANG_.call(null,mecca.events.mouse_pos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));
});
});
mecca.events.mouse_up_handler = (function mecca$events$mouse_up_handler(on_move){
return (function mecca$events$mouse_up_handler_$_me(evt){
return goog.events.unlisten(window,goog.events.EventType.MOUSEMOVE,on_move);
});
});
mecca.events.mouse_down_handler = (function mecca$events$mouse_down_handler(e){
var map__11454 = mecca.events.get_client_rect.call(null,e);
var map__11454__$1 = ((((!((map__11454 == null)))?(((((map__11454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11454):map__11454);
var left = cljs.core.get.call(null,map__11454__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.call(null,map__11454__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var offset = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(e.clientX - left),new cljs.core.Keyword(null,"y","y",-1757859776),(e.clientY - top)], null);
var on_move = mecca.events.mouse_move_handler.call(null,offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

return goog.events.listen(window,goog.events.EventType.MOUSEUP,mecca.events.mouse_up_handler.call(null,on_move));
});

//# sourceMappingURL=events.js.map
