// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('mecca.music');
goog.require('mecca.music.scale');
goog.require('goog.events');
goog.require('goog.events.EventType');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"octave","octave",1066197953),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),new cljs.core.Keyword(null,"bassline","bassline",325787412),new cljs.core.Keyword(null,"tempo","tempo",-1555208453),new cljs.core.Keyword(null,"drums","drums",641393692),new cljs.core.Keyword(null,"current-position","current-position",2031348254)],[(3),"C","Minor",(0),false,cljs.core.PersistentVector.EMPTY,(180),cljs.core.PersistentVector.EMPTY,(0)]);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),(function (db,p__35207){
var vec__35208 = p__35207;
var _ = cljs.core.nth.call(null,vec__35208,(0),null);
var bassline = cljs.core.nth.call(null,vec__35208,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"bassline","bassline",325787412),cljs.core.vec.call(null,(function (){var iter__4324__auto__ = ((function (vec__35208,_,bassline){
return (function mecca$events$iter__35211(s__35212){
return (new cljs.core.LazySeq(null,((function (vec__35208,_,bassline){
return (function (){
var s__35212__$1 = s__35212;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35212__$1);
if(temp__5457__auto__){
var s__35212__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35212__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__35212__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__35214 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__35213 = (0);
while(true){
if((i__35213 < size__4323__auto__)){
var interval = cljs.core._nth.call(null,c__4322__auto__,i__35213);
cljs.core.chunk_append.call(null,b__35214,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))));

var G__35215 = (i__35213 + (1));
i__35213 = G__35215;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35214),mecca$events$iter__35211.call(null,cljs.core.chunk_rest.call(null,s__35212__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35214),null);
}
} else {
var interval = cljs.core.first.call(null,s__35212__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))),mecca$events$iter__35211.call(null,cljs.core.rest.call(null,s__35212__$2)));
}
} else {
return null;
}
break;
}
});})(vec__35208,_,bassline))
,null,null));
});})(vec__35208,_,bassline))
;
return iter__4324__auto__.call(null,bassline);
})()));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-bass-note","add-bass-note",-2031433729),(function (db,p__35216){
var vec__35217 = p__35216;
var _ = cljs.core.nth.call(null,vec__35217,(0),null);
var x = cljs.core.nth.call(null,vec__35217,(1),null);
var y = cljs.core.nth.call(null,vec__35217,(2),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),x,new cljs.core.Keyword(null,"duration","duration",1444101068),(1),new cljs.core.Keyword(null,"pitch","pitch",1495126700),((48) + y)], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-drum-hit","add-drum-hit",-259631030),(function (db,p__35220){
var vec__35221 = p__35220;
var _ = cljs.core.nth.call(null,vec__35221,(0),null);
var x = cljs.core.nth.call(null,vec__35221,(1),null);
var y = cljs.core.nth.call(null,vec__35221,(2),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drums","drums",641393692)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),x,new cljs.core.Keyword(null,"duration","duration",1444101068),(1),new cljs.core.Keyword(null,"pitch","pitch",1495126700),((48) + y)], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"move-note","move-note",873805465),(function (db,p__35224){
var vec__35225 = p__35224;
var _ = cljs.core.nth.call(null,vec__35225,(0),null);
var bassline = cljs.core.nth.call(null,vec__35225,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"bassline","bassline",325787412),cljs.core.vec.call(null,(function (){var iter__4324__auto__ = ((function (vec__35225,_,bassline){
return (function mecca$events$iter__35228(s__35229){
return (new cljs.core.LazySeq(null,((function (vec__35225,_,bassline){
return (function (){
var s__35229__$1 = s__35229;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35229__$1);
if(temp__5457__auto__){
var s__35229__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35229__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__35229__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__35231 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__35230 = (0);
while(true){
if((i__35230 < size__4323__auto__)){
var interval = cljs.core._nth.call(null,c__4322__auto__,i__35230);
cljs.core.chunk_append.call(null,b__35231,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))));

var G__35232 = (i__35230 + (1));
i__35230 = G__35232;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35231),mecca$events$iter__35228.call(null,cljs.core.chunk_rest.call(null,s__35229__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35231),null);
}
} else {
var interval = cljs.core.first.call(null,s__35229__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))),mecca$events$iter__35228.call(null,cljs.core.rest.call(null,s__35229__$2)));
}
} else {
return null;
}
break;
}
});})(vec__35225,_,bassline))
,null,null));
});})(vec__35225,_,bassline))
;
return iter__4324__auto__.call(null,bassline);
})()));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,p__35233){
var vec__35234 = p__35233;
var _ = cljs.core.nth.call(null,vec__35234,(0),null);
var new_time = cljs.core.nth.call(null,vec__35234,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time","time",1385887882),new_time);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"play-on","play-on",-1655917734),(function (db,p__35237){
var vec__35238 = p__35237;
var _ = cljs.core.nth.call(null,vec__35238,(0),null);
var scale = cljs.core.nth.call(null,vec__35238,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"play-off","play-off",2116693509),(function (db,p__35241){
var vec__35242 = p__35241;
var _ = cljs.core.nth.call(null,vec__35242,(0),null);
var scale = cljs.core.nth.call(null,vec__35242,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-scale","set-scale",-582286217),(function (db,p__35245){
var vec__35246 = p__35245;
var _ = cljs.core.nth.call(null,vec__35246,(0),null);
var scale = cljs.core.nth.call(null,vec__35246,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"scale","scale",-230427353),scale);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"advance-position","advance-position",-23796893),(function (db,p__35249){
var vec__35250 = p__35249;
var _ = cljs.core.nth.call(null,vec__35250,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__35250,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),cljs.core.inc);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),(function (db,p__35253){
var vec__35254 = p__35253;
var _ = cljs.core.nth.call(null,vec__35254,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__35254,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(function (db,p__35257){
var vec__35258 = p__35257;
var _ = cljs.core.nth.call(null,vec__35258,(0),null);
var tempo = cljs.core.nth.call(null,vec__35258,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),tempo);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-octave","set-octave",378200257),(function (db,p__35261){
var vec__35262 = p__35261;
var _ = cljs.core.nth.call(null,vec__35262,(0),null);
var octave = cljs.core.nth.call(null,vec__35262,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"octave","octave",1066197953),octave);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-key","set-key",-48186176),(function (db,p__35265){
var vec__35266 = p__35265;
var _ = cljs.core.nth.call(null,vec__35266,(0),null);
var key = cljs.core.nth.call(null,vec__35266,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"key","key",-1516042587),key);
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
var map__35269 = mecca.events.get_client_rect.call(null,e);
var map__35269__$1 = ((((!((map__35269 == null)))?(((((map__35269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35269):map__35269);
var left = cljs.core.get.call(null,map__35269__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.call(null,map__35269__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var offset = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(e.clientX - left),new cljs.core.Keyword(null,"y","y",-1757859776),(e.clientY - top)], null);
var on_move = mecca.events.mouse_move_handler.call(null,offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

return goog.events.listen(window,goog.events.EventType.MOUSEUP,mecca.events.mouse_up_handler.call(null,on_move));
});

//# sourceMappingURL=events.js.map
