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
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),new cljs.core.Keyword(null,"octave","octave",1066197953),new cljs.core.Keyword(null,"selected-note-value","selected-note-value",-575447419),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628),new cljs.core.Keyword(null,"jumping?","jumping?",-2092574161),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),new cljs.core.Keyword(null,"bassline","bassline",325787412),new cljs.core.Keyword(null,"lead","lead",1214038903),new cljs.core.Keyword(null,"tempo","tempo",-1555208453),new cljs.core.Keyword(null,"drums","drums",641393692),new cljs.core.Keyword(null,"current-position","current-position",2031348254)],[(1),(3),(1),"C",mecca.events.audio_context.call(null),"Minor",(0),(0),(0),false,false,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,(180),cljs.core.PersistentVector.EMPTY,(0)]);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),(function (db,p__41709){
var vec__41710 = p__41709;
var _ = cljs.core.nth.call(null,vec__41710,(0),null);
var bassline = cljs.core.nth.call(null,vec__41710,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"bassline","bassline",325787412),cljs.core.vec.call(null,(function (){var iter__4324__auto__ = ((function (vec__41710,_,bassline){
return (function mecca$events$iter__41713(s__41714){
return (new cljs.core.LazySeq(null,((function (vec__41710,_,bassline){
return (function (){
var s__41714__$1 = s__41714;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__41714__$1);
if(temp__5457__auto__){
var s__41714__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41714__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__41714__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__41716 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__41715 = (0);
while(true){
if((i__41715 < size__4323__auto__)){
var interval = cljs.core._nth.call(null,c__4322__auto__,i__41715);
cljs.core.chunk_append.call(null,b__41716,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))));

var G__41717 = (i__41715 + (1));
i__41715 = G__41717;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41716),mecca$events$iter__41713.call(null,cljs.core.chunk_rest.call(null,s__41714__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41716),null);
}
} else {
var interval = cljs.core.first.call(null,s__41714__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))),mecca$events$iter__41713.call(null,cljs.core.rest.call(null,s__41714__$2)));
}
} else {
return null;
}
break;
}
});})(vec__41710,_,bassline))
,null,null));
});})(vec__41710,_,bassline))
;
return iter__4324__auto__.call(null,bassline);
})()));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-note","add-note",-926319985),(function (db,p__41718){
var vec__41719 = p__41718;
var _ = cljs.core.nth.call(null,vec__41719,(0),null);
var x = cljs.core.nth.call(null,vec__41719,(1),null);
var y = cljs.core.nth.call(null,vec__41719,(2),null);
return cljs.core.update_in.call(null,db,(((y < (18)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lead","lead",1214038903)], null):((((((18) < y)) && ((y < (31)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null):((((30) < y))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drums","drums",641393692)], null):null))),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),x,new cljs.core.Keyword(null,"duration","duration",1444101068),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-note-value","selected-note-value",-575447419)], null))),new cljs.core.Keyword(null,"pitch","pitch",1495126700),((77) - y)], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-note","remove-note",-1957283966),(function (db,p__41725){
var vec__41726 = p__41725;
var _ = cljs.core.nth.call(null,vec__41726,(0),null);
var x = cljs.core.nth.call(null,vec__41726,(1),null);
var y = cljs.core.nth.call(null,vec__41726,(2),null);
return cljs.core.update_in.call(null,db,(((y < (18)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lead","lead",1214038903)], null):((((((18) < y)) && ((y < (31)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null):((((30) < y))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drums","drums",641393692)], null):null))),((function (vec__41726,_,x,y){
return (function (notes){
return cljs.core.remove.call(null,((function (vec__41726,_,x,y){
return (function (p1__41724_SHARP_){
return ((cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__41724_SHARP_))) && (cljs.core._EQ_.call(null,((77) - y),new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(p1__41724_SHARP_))));
});})(vec__41726,_,x,y))
,notes);
});})(vec__41726,_,x,y))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-drum-hit","add-drum-hit",-259631030),(function (db,p__41740){
var vec__41741 = p__41740;
var _ = cljs.core.nth.call(null,vec__41741,(0),null);
var x = cljs.core.nth.call(null,vec__41741,(1),null);
var y = cljs.core.nth.call(null,vec__41741,(2),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drums","drums",641393692)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),x,new cljs.core.Keyword(null,"duration","duration",1444101068),(1),new cljs.core.Keyword(null,"pitch","pitch",1495126700),((77) - y)], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"move-note","move-note",873805465),(function (db,p__41744){
var vec__41745 = p__41744;
var _ = cljs.core.nth.call(null,vec__41745,(0),null);
var bassline = cljs.core.nth.call(null,vec__41745,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"bassline","bassline",325787412),cljs.core.vec.call(null,(function (){var iter__4324__auto__ = ((function (vec__41745,_,bassline){
return (function mecca$events$iter__41748(s__41749){
return (new cljs.core.LazySeq(null,((function (vec__41745,_,bassline){
return (function (){
var s__41749__$1 = s__41749;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__41749__$1);
if(temp__5457__auto__){
var s__41749__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41749__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__41749__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__41751 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__41750 = (0);
while(true){
if((i__41750 < size__4323__auto__)){
var interval = cljs.core._nth.call(null,c__4322__auto__,i__41750);
cljs.core.chunk_append.call(null,b__41751,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))));

var G__41752 = (i__41750 + (1));
i__41750 = G__41752;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41751),mecca$events$iter__41748.call(null,cljs.core.chunk_rest.call(null,s__41749__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41751),null);
}
} else {
var interval = cljs.core.first.call(null,s__41749__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))),mecca$events$iter__41748.call(null,cljs.core.rest.call(null,s__41749__$2)));
}
} else {
return null;
}
break;
}
});})(vec__41745,_,bassline))
,null,null));
});})(vec__41745,_,bassline))
;
return iter__4324__auto__.call(null,bassline);
})()));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"play-on","play-on",-1655917734),(function (db,p__41753){
var vec__41754 = p__41753;
var _ = cljs.core.nth.call(null,vec__41754,(0),null);
var scale = cljs.core.nth.call(null,vec__41754,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"select-note-value","select-note-value",-1351124134),(function (db,p__41757){
var vec__41758 = p__41757;
var _ = cljs.core.nth.call(null,vec__41758,(0),null);
var value = cljs.core.nth.call(null,vec__41758,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-note-value","selected-note-value",-575447419),value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"play-off","play-off",2116693509),(function (db,p__41761){
var vec__41762 = p__41761;
var _ = cljs.core.nth.call(null,vec__41762,(0),null);
var scale = cljs.core.nth.call(null,vec__41762,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-scale","set-scale",-582286217),(function (db,p__41765){
var vec__41766 = p__41765;
var _ = cljs.core.nth.call(null,vec__41766,(0),null);
var scale = cljs.core.nth.call(null,vec__41766,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"scale","scale",-230427353),scale);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"advance-position","advance-position",-23796893),(function (db,p__41769){
var vec__41770 = p__41769;
var _ = cljs.core.nth.call(null,vec__41770,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__41770,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),cljs.core.inc);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"advance-editor","advance-editor",-224480492),(function (db,p__41773){
var vec__41774 = p__41773;
var _ = cljs.core.nth.call(null,vec__41774,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__41774,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),cljs.core.inc);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"retract-editor","retract-editor",777879449),(function (db,p__41777){
var vec__41778 = p__41777;
var _ = cljs.core.nth.call(null,vec__41778,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__41778,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),cljs.core.dec);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),(function (db,p__41781){
var vec__41782 = p__41781;
var _ = cljs.core.nth.call(null,vec__41782,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__41782,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(function (db,p__41785){
var vec__41786 = p__41785;
var _ = cljs.core.nth.call(null,vec__41786,(0),null);
var tempo = cljs.core.nth.call(null,vec__41786,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),tempo);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-octave","set-octave",378200257),(function (db,p__41789){
var vec__41790 = p__41789;
var _ = cljs.core.nth.call(null,vec__41790,(0),null);
var octave = cljs.core.nth.call(null,vec__41790,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"octave","octave",1066197953),octave);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-key","set-key",-48186176),(function (db,p__41793){
var vec__41794 = p__41793;
var _ = cljs.core.nth.call(null,vec__41794,(0),null);
var key = cljs.core.nth.call(null,vec__41794,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"key","key",-1516042587),key);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"tick!","tick!",68058958),(function (db,p__41798){
var vec__41799 = p__41798;
var _ = cljs.core.nth.call(null,vec__41799,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__41799,(1),null);
return cljs.core.update.call(null,cljs.core.update.call(null,db,new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628),((function (vec__41799,_,___$1){
return (function (p1__41797_SHARP_){
if(cljs.core._EQ_.call(null,p1__41797_SHARP_,(56))){
return (0);
} else {
return (p1__41797_SHARP_ + (1));
}
});})(vec__41799,_,___$1))
),new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),cljs.core.inc);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"jump-advance","jump-advance",-1552223631),(function (db,p__41802){
var vec__41803 = p__41802;
var _ = cljs.core.nth.call(null,vec__41803,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__41803,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),cljs.core.inc);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"jump-reset","jump-reset",-1337123824),(function (db,p__41806){
var vec__41807 = p__41806;
var _ = cljs.core.nth.call(null,vec__41807,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__41807,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),(0));
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
var map__41810 = mecca.events.get_client_rect.call(null,e);
var map__41810__$1 = ((((!((map__41810 == null)))?(((((map__41810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41810):map__41810);
var left = cljs.core.get.call(null,map__41810__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.call(null,map__41810__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var offset = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(e.clientX - left),new cljs.core.Keyword(null,"y","y",-1757859776),(e.clientY - top)], null);
var on_move = mecca.events.mouse_move_handler.call(null,offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

return goog.events.listen(window,goog.events.EventType.MOUSEUP,mecca.events.mouse_up_handler.call(null,on_move));
});

//# sourceMappingURL=events9123039.js.map
