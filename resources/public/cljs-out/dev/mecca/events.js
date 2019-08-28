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
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"octave","octave",1066197953),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),new cljs.core.Keyword(null,"bassline","bassline",325787412),new cljs.core.Keyword(null,"mario-sprite","mario-sprite",-1325469738),new cljs.core.Keyword(null,"lead","lead",1214038903),new cljs.core.Keyword(null,"tempo","tempo",-1555208453),new cljs.core.Keyword(null,"drums","drums",641393692),new cljs.core.Keyword(null,"current-position","current-position",2031348254)],[(3),"C",mecca.events.audio_context.call(null),"Minor",(0),(0),false,cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(180),cljs.core.PersistentVector.EMPTY,(0)]);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),(function (db,p__18041){
var vec__18042 = p__18041;
var _ = cljs.core.nth.call(null,vec__18042,(0),null);
var bassline = cljs.core.nth.call(null,vec__18042,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"bassline","bassline",325787412),cljs.core.vec.call(null,(function (){var iter__4324__auto__ = ((function (vec__18042,_,bassline){
return (function mecca$events$iter__18045(s__18046){
return (new cljs.core.LazySeq(null,((function (vec__18042,_,bassline){
return (function (){
var s__18046__$1 = s__18046;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18046__$1);
if(temp__5457__auto__){
var s__18046__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18046__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18046__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18048 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18047 = (0);
while(true){
if((i__18047 < size__4323__auto__)){
var interval = cljs.core._nth.call(null,c__4322__auto__,i__18047);
cljs.core.chunk_append.call(null,b__18048,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))));

var G__18049 = (i__18047 + (1));
i__18047 = G__18049;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18048),mecca$events$iter__18045.call(null,cljs.core.chunk_rest.call(null,s__18046__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18048),null);
}
} else {
var interval = cljs.core.first.call(null,s__18046__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))),mecca$events$iter__18045.call(null,cljs.core.rest.call(null,s__18046__$2)));
}
} else {
return null;
}
break;
}
});})(vec__18042,_,bassline))
,null,null));
});})(vec__18042,_,bassline))
;
return iter__4324__auto__.call(null,bassline);
})()));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-note","add-note",-926319985),(function (db,p__18050){
var vec__18051 = p__18050;
var _ = cljs.core.nth.call(null,vec__18051,(0),null);
var x = cljs.core.nth.call(null,vec__18051,(1),null);
var y = cljs.core.nth.call(null,vec__18051,(2),null);
return cljs.core.update_in.call(null,db,(((y < (18)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lead","lead",1214038903)], null):((((((18) < y)) && ((y < (31)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null):((((30) < y))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drums","drums",641393692)], null):null))),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),x,new cljs.core.Keyword(null,"duration","duration",1444101068),(1),new cljs.core.Keyword(null,"pitch","pitch",1495126700),((77) - y)], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-note","remove-note",-1957283966),(function (db,p__18055){
var vec__18056 = p__18055;
var _ = cljs.core.nth.call(null,vec__18056,(0),null);
var x = cljs.core.nth.call(null,vec__18056,(1),null);
var y = cljs.core.nth.call(null,vec__18056,(2),null);
return cljs.core.update_in.call(null,db,(((y < (18)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lead","lead",1214038903)], null):((((((18) < y)) && ((y < (31)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null):((((30) < y))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drums","drums",641393692)], null):null))),((function (vec__18056,_,x,y){
return (function (notes){
return cljs.core.remove.call(null,((function (vec__18056,_,x,y){
return (function (p1__18054_SHARP_){
return ((cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__18054_SHARP_))) && (cljs.core._EQ_.call(null,((77) - y),new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(p1__18054_SHARP_))));
});})(vec__18056,_,x,y))
,notes);
});})(vec__18056,_,x,y))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-drum-hit","add-drum-hit",-259631030),(function (db,p__18059){
var vec__18060 = p__18059;
var _ = cljs.core.nth.call(null,vec__18060,(0),null);
var x = cljs.core.nth.call(null,vec__18060,(1),null);
var y = cljs.core.nth.call(null,vec__18060,(2),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drums","drums",641393692)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),x,new cljs.core.Keyword(null,"duration","duration",1444101068),(1),new cljs.core.Keyword(null,"pitch","pitch",1495126700),((77) - y)], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"move-note","move-note",873805465),(function (db,p__18063){
var vec__18064 = p__18063;
var _ = cljs.core.nth.call(null,vec__18064,(0),null);
var bassline = cljs.core.nth.call(null,vec__18064,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"bassline","bassline",325787412),cljs.core.vec.call(null,(function (){var iter__4324__auto__ = ((function (vec__18064,_,bassline){
return (function mecca$events$iter__18067(s__18068){
return (new cljs.core.LazySeq(null,((function (vec__18064,_,bassline){
return (function (){
var s__18068__$1 = s__18068;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18068__$1);
if(temp__5457__auto__){
var s__18068__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18068__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18068__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18070 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18069 = (0);
while(true){
if((i__18069 < size__4323__auto__)){
var interval = cljs.core._nth.call(null,c__4322__auto__,i__18069);
cljs.core.chunk_append.call(null,b__18070,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))));

var G__18071 = (i__18069 + (1));
i__18069 = G__18071;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18070),mecca$events$iter__18067.call(null,cljs.core.chunk_rest.call(null,s__18068__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18070),null);
}
} else {
var interval = cljs.core.first.call(null,s__18068__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))),mecca$events$iter__18067.call(null,cljs.core.rest.call(null,s__18068__$2)));
}
} else {
return null;
}
break;
}
});})(vec__18064,_,bassline))
,null,null));
});})(vec__18064,_,bassline))
;
return iter__4324__auto__.call(null,bassline);
})()));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,p__18072){
var vec__18073 = p__18072;
var _ = cljs.core.nth.call(null,vec__18073,(0),null);
var new_time = cljs.core.nth.call(null,vec__18073,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time","time",1385887882),new_time);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"play-on","play-on",-1655917734),(function (db,p__18076){
var vec__18077 = p__18076;
var _ = cljs.core.nth.call(null,vec__18077,(0),null);
var scale = cljs.core.nth.call(null,vec__18077,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"play-off","play-off",2116693509),(function (db,p__18080){
var vec__18081 = p__18080;
var _ = cljs.core.nth.call(null,vec__18081,(0),null);
var scale = cljs.core.nth.call(null,vec__18081,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-scale","set-scale",-582286217),(function (db,p__18084){
var vec__18085 = p__18084;
var _ = cljs.core.nth.call(null,vec__18085,(0),null);
var scale = cljs.core.nth.call(null,vec__18085,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"scale","scale",-230427353),scale);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"advance-position","advance-position",-23796893),(function (db,p__18088){
var vec__18089 = p__18088;
var _ = cljs.core.nth.call(null,vec__18089,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__18089,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),cljs.core.inc);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),(function (db,p__18092){
var vec__18093 = p__18092;
var _ = cljs.core.nth.call(null,vec__18093,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__18093,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(function (db,p__18096){
var vec__18097 = p__18096;
var _ = cljs.core.nth.call(null,vec__18097,(0),null);
var tempo = cljs.core.nth.call(null,vec__18097,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),tempo);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-octave","set-octave",378200257),(function (db,p__18100){
var vec__18101 = p__18100;
var _ = cljs.core.nth.call(null,vec__18101,(0),null);
var octave = cljs.core.nth.call(null,vec__18101,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"octave","octave",1066197953),octave);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-key","set-key",-48186176),(function (db,p__18104){
var vec__18105 = p__18104;
var _ = cljs.core.nth.call(null,vec__18105,(0),null);
var key = cljs.core.nth.call(null,vec__18105,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"key","key",-1516042587),key);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"tick!","tick!",68058958),(function (db,p__18108){
var vec__18109 = p__18108;
var _ = cljs.core.nth.call(null,vec__18109,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__18109,(1),null);
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
var map__18112 = mecca.events.get_client_rect.call(null,e);
var map__18112__$1 = ((((!((map__18112 == null)))?(((((map__18112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18112):map__18112);
var left = cljs.core.get.call(null,map__18112__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.call(null,map__18112__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var offset = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(e.clientX - left),new cljs.core.Keyword(null,"y","y",-1757859776),(e.clientY - top)], null);
var on_move = mecca.events.mouse_move_handler.call(null,offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

return goog.events.listen(window,goog.events.EventType.MOUSEUP,mecca.events.mouse_up_handler.call(null,on_move));
});

//# sourceMappingURL=events.js.map
