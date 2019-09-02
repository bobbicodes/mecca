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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),(function (db,p__20175){
var vec__20176 = p__20175;
var _ = cljs.core.nth.call(null,vec__20176,(0),null);
var bassline = cljs.core.nth.call(null,vec__20176,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"bassline","bassline",325787412),cljs.core.vec.call(null,(function (){var iter__4324__auto__ = ((function (vec__20176,_,bassline){
return (function mecca$events$iter__20179(s__20180){
return (new cljs.core.LazySeq(null,((function (vec__20176,_,bassline){
return (function (){
var s__20180__$1 = s__20180;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__20180__$1);
if(temp__5457__auto__){
var s__20180__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20180__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__20180__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__20182 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__20181 = (0);
while(true){
if((i__20181 < size__4323__auto__)){
var interval = cljs.core._nth.call(null,c__4322__auto__,i__20181);
cljs.core.chunk_append.call(null,b__20182,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))));

var G__20183 = (i__20181 + (1));
i__20181 = G__20183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20182),mecca$events$iter__20179.call(null,cljs.core.chunk_rest.call(null,s__20180__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20182),null);
}
} else {
var interval = cljs.core.first.call(null,s__20180__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))),mecca$events$iter__20179.call(null,cljs.core.rest.call(null,s__20180__$2)));
}
} else {
return null;
}
break;
}
});})(vec__20176,_,bassline))
,null,null));
});})(vec__20176,_,bassline))
;
return iter__4324__auto__.call(null,bassline);
})()));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-note","add-note",-926319985),(function (db,p__20184){
var vec__20185 = p__20184;
var _ = cljs.core.nth.call(null,vec__20185,(0),null);
var x = cljs.core.nth.call(null,vec__20185,(1),null);
var y = cljs.core.nth.call(null,vec__20185,(2),null);
return cljs.core.update_in.call(null,db,(((y < (18)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lead","lead",1214038903)], null):((((((18) < y)) && ((y < (31)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null):((((30) < y))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drums","drums",641393692)], null):null))),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),x,new cljs.core.Keyword(null,"duration","duration",1444101068),(1),new cljs.core.Keyword(null,"pitch","pitch",1495126700),((77) - y)], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-note","remove-note",-1957283966),(function (db,p__20189){
var vec__20190 = p__20189;
var _ = cljs.core.nth.call(null,vec__20190,(0),null);
var x = cljs.core.nth.call(null,vec__20190,(1),null);
var y = cljs.core.nth.call(null,vec__20190,(2),null);
return cljs.core.update_in.call(null,db,(((y < (18)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lead","lead",1214038903)], null):((((((18) < y)) && ((y < (31)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null):((((30) < y))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drums","drums",641393692)], null):null))),((function (vec__20190,_,x,y){
return (function (notes){
return cljs.core.remove.call(null,((function (vec__20190,_,x,y){
return (function (p1__20188_SHARP_){
return ((cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__20188_SHARP_))) && (cljs.core._EQ_.call(null,((77) - y),new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(p1__20188_SHARP_))));
});})(vec__20190,_,x,y))
,notes);
});})(vec__20190,_,x,y))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-drum-hit","add-drum-hit",-259631030),(function (db,p__20193){
var vec__20194 = p__20193;
var _ = cljs.core.nth.call(null,vec__20194,(0),null);
var x = cljs.core.nth.call(null,vec__20194,(1),null);
var y = cljs.core.nth.call(null,vec__20194,(2),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drums","drums",641393692)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),x,new cljs.core.Keyword(null,"duration","duration",1444101068),(1),new cljs.core.Keyword(null,"pitch","pitch",1495126700),((77) - y)], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"move-note","move-note",873805465),(function (db,p__20197){
var vec__20198 = p__20197;
var _ = cljs.core.nth.call(null,vec__20198,(0),null);
var bassline = cljs.core.nth.call(null,vec__20198,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"bassline","bassline",325787412),cljs.core.vec.call(null,(function (){var iter__4324__auto__ = ((function (vec__20198,_,bassline){
return (function mecca$events$iter__20201(s__20202){
return (new cljs.core.LazySeq(null,((function (vec__20198,_,bassline){
return (function (){
var s__20202__$1 = s__20202;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__20202__$1);
if(temp__5457__auto__){
var s__20202__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20202__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__20202__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__20204 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__20203 = (0);
while(true){
if((i__20203 < size__4323__auto__)){
var interval = cljs.core._nth.call(null,c__4322__auto__,i__20203);
cljs.core.chunk_append.call(null,b__20204,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))));

var G__20205 = (i__20203 + (1));
i__20203 = G__20205;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20204),mecca$events$iter__20201.call(null,cljs.core.chunk_rest.call(null,s__20202__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20204),null);
}
} else {
var interval = cljs.core.first.call(null,s__20202__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))),mecca$events$iter__20201.call(null,cljs.core.rest.call(null,s__20202__$2)));
}
} else {
return null;
}
break;
}
});})(vec__20198,_,bassline))
,null,null));
});})(vec__20198,_,bassline))
;
return iter__4324__auto__.call(null,bassline);
})()));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,p__20206){
var vec__20207 = p__20206;
var _ = cljs.core.nth.call(null,vec__20207,(0),null);
var new_time = cljs.core.nth.call(null,vec__20207,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time","time",1385887882),new_time);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"play-on","play-on",-1655917734),(function (db,p__20210){
var vec__20211 = p__20210;
var _ = cljs.core.nth.call(null,vec__20211,(0),null);
var scale = cljs.core.nth.call(null,vec__20211,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"play-off","play-off",2116693509),(function (db,p__20214){
var vec__20215 = p__20214;
var _ = cljs.core.nth.call(null,vec__20215,(0),null);
var scale = cljs.core.nth.call(null,vec__20215,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-scale","set-scale",-582286217),(function (db,p__20218){
var vec__20219 = p__20218;
var _ = cljs.core.nth.call(null,vec__20219,(0),null);
var scale = cljs.core.nth.call(null,vec__20219,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"scale","scale",-230427353),scale);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"advance-position","advance-position",-23796893),(function (db,p__20222){
var vec__20223 = p__20222;
var _ = cljs.core.nth.call(null,vec__20223,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__20223,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),cljs.core.inc);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),(function (db,p__20226){
var vec__20227 = p__20226;
var _ = cljs.core.nth.call(null,vec__20227,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__20227,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(function (db,p__20230){
var vec__20231 = p__20230;
var _ = cljs.core.nth.call(null,vec__20231,(0),null);
var tempo = cljs.core.nth.call(null,vec__20231,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),tempo);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-octave","set-octave",378200257),(function (db,p__20234){
var vec__20235 = p__20234;
var _ = cljs.core.nth.call(null,vec__20235,(0),null);
var octave = cljs.core.nth.call(null,vec__20235,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"octave","octave",1066197953),octave);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-key","set-key",-48186176),(function (db,p__20238){
var vec__20239 = p__20238;
var _ = cljs.core.nth.call(null,vec__20239,(0),null);
var key = cljs.core.nth.call(null,vec__20239,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"key","key",-1516042587),key);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"tick!","tick!",68058958),(function (db,p__20242){
var vec__20243 = p__20242;
var _ = cljs.core.nth.call(null,vec__20243,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__20243,(1),null);
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
var map__20246 = mecca.events.get_client_rect.call(null,e);
var map__20246__$1 = ((((!((map__20246 == null)))?(((((map__20246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20246):map__20246);
var left = cljs.core.get.call(null,map__20246__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.call(null,map__20246__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var offset = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(e.clientX - left),new cljs.core.Keyword(null,"y","y",-1757859776),(e.clientY - top)], null);
var on_move = mecca.events.mouse_move_handler.call(null,offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

return goog.events.listen(window,goog.events.EventType.MOUSEUP,mecca.events.mouse_up_handler.call(null,on_move));
});

//# sourceMappingURL=events.js.map
