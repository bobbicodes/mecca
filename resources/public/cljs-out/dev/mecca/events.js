// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('mecca.music');
goog.require('goog.events');
goog.require('goog.events.EventType');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"scale","scale",-230427353),"Pentatonic",new cljs.core.Keyword(null,"octave","octave",1066197953),(3),new cljs.core.Keyword(null,"key","key",-1516042587),"C",new cljs.core.Keyword(null,"tempo","tempo",-1555208453),(100),new cljs.core.Keyword(null,"bassline","bassline",325787412),cljs.core.vec.call(null,cljs.core.repeat.call(null,(16),null))], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),(function (db,p__26814){
var vec__26815 = p__26814;
var _ = cljs.core.nth.call(null,vec__26815,(0),null);
var bassline = cljs.core.nth.call(null,vec__26815,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"bassline","bassline",325787412),bassline);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-scale","set-scale",-582286217),(function (db,p__26818){
var vec__26819 = p__26818;
var _ = cljs.core.nth.call(null,vec__26819,(0),null);
var scale = cljs.core.nth.call(null,vec__26819,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"scale","scale",-230427353),scale);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(function (db,p__26822){
var vec__26823 = p__26822;
var _ = cljs.core.nth.call(null,vec__26823,(0),null);
var tempo = cljs.core.nth.call(null,vec__26823,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),tempo);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-octave","set-octave",378200257),(function (db,p__26826){
var vec__26827 = p__26826;
var _ = cljs.core.nth.call(null,vec__26827,(0),null);
var octave = cljs.core.nth.call(null,vec__26827,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"octave","octave",1066197953),octave);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-key","set-key",-48186176),(function (db,p__26830){
var vec__26831 = p__26830;
var _ = cljs.core.nth.call(null,vec__26831,(0),null);
var key = cljs.core.nth.call(null,vec__26831,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"key","key",-1516042587),key);
}));
mecca.events.mouse_pos = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null));
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
var map__26834 = mecca.events.get_client_rect.call(null,e);
var map__26834__$1 = ((((!((map__26834 == null)))?(((((map__26834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26834):map__26834);
var left = cljs.core.get.call(null,map__26834__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.call(null,map__26834__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var offset = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(e.clientX - left),new cljs.core.Keyword(null,"y","y",-1757859776),(e.clientY - top)], null);
var on_move = mecca.events.mouse_move_handler.call(null,offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

return goog.events.listen(window,goog.events.EventType.MOUSEUP,mecca.events.mouse_up_handler.call(null,on_move));
});

//# sourceMappingURL=events.js.map
