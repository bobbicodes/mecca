goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_pressed.core');
goog.require('day8.re_frame.undo');
goog.require('mecca.mario');
goog.require('mecca.songs.megaman');
goog.require('mecca.songs.zelda');
goog.require('mecca.songs.city');
goog.require('mecca.music');
goog.require('goog.events');
goog.require('goog.events.EventType');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"samples","samples",635504833),new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),new cljs.core.Keyword(null,"instrument","instrument",-960698844),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),new cljs.core.Keyword(null,"eraser?","eraser?",-561181785),new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"play-start","play-start",-898241782),new cljs.core.Keyword(null,"current-note","current-note",-1767945909),new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628),new cljs.core.Keyword(null,"repeat?","repeat?",1245600428),new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),new cljs.core.Keyword(null,"jumping?","jumping?",-2092574161),new cljs.core.Keyword(null,"time-signature","time-signature",-1730387952),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),new cljs.core.Keyword(null,"loop-end","loop-end",-88908047),new cljs.core.Keyword(null,"mario-y","mario-y",1718385780),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"next-note-time","next-note-time",-1117617128),new cljs.core.Keyword(null,"focused-note-pos","focused-note-pos",-1443473576),new cljs.core.Keyword(null,"audio-context","audio-context",1642559898),new cljs.core.Keyword(null,"tempo","tempo",-1555208453),new cljs.core.Keyword(null,"mario-x","mario-x",1743249500),new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),new cljs.core.Keyword(null,"xml","xml",-1170142052),new cljs.core.Keyword(null,"current-position","current-position",2031348254),new cljs.core.Keyword(null,"notes-in-queue","notes-in-queue",-193583681)],[null,(1),(1),false,false,(0),(0),(0),(0),(1),false,"",false,(4),false,null,(61),cljs.core.PersistentVector.EMPTY,0.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),(new AudioContext()),(120),(16),null,"",(0),cljs.core.PersistentVector.EMPTY]);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"remove-note","remove-note",-1957283966),day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("remove note"),(function (db,p__42203){
var vec__42204 = p__42203;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42204,(0),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42204,(1),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42204,(2),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),(function (note){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__42202_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(time,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__42202_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(p1__42202_SHARP_))));
}),note);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),(function (db,p__42208){
var vec__42210 = p__42208;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42210,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42210,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),file);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-samples","load-samples",-40877701),(function (db,p__42213){
var vec__42214 = p__42213;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42214,(0),null);
var samples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42214,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"samples","samples",635504833),samples);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-time-signature","set-time-signature",-674659703),(function (db,p__42220){
var vec__42221 = p__42220;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42221,(0),null);
var beats_per_measure = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42221,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"time-signature","time-signature",-1730387952),beats_per_measure);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-notes","set-notes",-1718182261),(function (db,p__42224){
var vec__42225 = p__42224;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42225,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42225,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),notes);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,p__42228){
var vec__42229 = p__42228;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42229,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42229,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"time","time",1385887882),new_time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"play-on","play-on",-1655917734),(function (db,p__42232){
var vec__42233 = p__42232;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42233,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42233,(1),null);
mecca.music.play_song_BANG_();

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"play-start","play-start",-898241782),cljs.core.deref((function (){var G__42236 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42236) : re_frame.core.subscribe.call(null,G__42236));
})()).currentTime),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sharp-on","sharp-on",-1157509082),(function (db,p__42237){
var vec__42238 = p__42237;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42238,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42238,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sharp-toggle","sharp-toggle",1733862740),(function (db,p__42241){
var vec__42242 = p__42241;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42242,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42242,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eraser-toggle","eraser-toggle",360211261),(function (db,p__42245){
var vec__42246 = p__42245;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42246,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42246,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"eraser?","eraser?",-561181785),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sharp-off","sharp-off",2041506931),(function (db,p__42249){
var vec__42250 = p__42249;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42250,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42250,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pause","pause",-2095325672),(function (db,p__42253){
var vec__42254 = p__42253;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42254,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42254,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (db,p__42257){
var vec__42258 = p__42257;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42258,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42258,(1),null);
var G__42261_42445 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-editor","reset-editor",1401688585)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42261_42445) : re_frame.core.dispatch.call(null,G__42261_42445));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false),new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-focus-note","update-focus-note",-40352556),(function (db,p__42262){
var vec__42263 = p__42262;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42263,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42263,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"focused-note-pos","focused-note-pos",-1443473576),pos);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"select-instrument","select-instrument",75005084),(function (db,p__42266){
var vec__42267 = p__42266;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42267,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42267,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"instrument","instrument",-960698844),instrument,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"eraser?","eraser?",-561181785),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"play-off","play-off",2116693509),(function (db,p__42270){
var vec__42271 = p__42270;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42271,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42271,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"advance-position","advance-position",-23796893),(function (db,p__42276){
var vec__42277 = p__42276;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42277,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42277,(1),null);
var notes = (function (){var G__42280 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42280) : re_frame.core.subscribe.call(null,G__42280));
})();
var beat = (function (){var G__42281 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42281) : re_frame.core.subscribe.call(null,G__42281));
})();
var to_play = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42274_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((1) + cljs.core.deref(beat)),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__42274_SHARP_));
}),cljs.core.deref(notes));
if(((4) < cljs.core.deref(beat))){
var G__42282_42446 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-editor","advance-editor",-224480492),0.5], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42282_42446) : re_frame.core.dispatch.call(null,G__42282_42446));
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),(function (p1__42275_SHARP_){
return (0.5 + p1__42275_SHARP_);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"advance-editor","advance-editor",-224480492),(function (db,p__42284){
var vec__42285 = p__42284;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42285,(0),null);
var beats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42285,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),(function (p1__42283_SHARP_){
return (beats + p1__42283_SHARP_);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move-mario","move-mario",-317739908),(function (db,p__42289){
var vec__42290 = p__42289;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42290,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42290,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mario-x","mario-x",1743249500),(function (p1__42288_SHARP_){
return ((10) + p1__42288_SHARP_);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-editor","reset-editor",1401688585),(function (db,p__42293){
var vec__42294 = p__42293;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42294,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42294,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),(1)),new cljs.core.Keyword(null,"mario-x","mario-x",1743249500),(16));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"retract-editor","retract-editor",777879449),(function (db,p__42298){
var vec__42299 = p__42298;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42299,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42299,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),(function (p1__42297_SHARP_){
return (p1__42297_SHARP_ - 0.5);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),(function (db,p__42302){
var vec__42303 = p__42302;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42303,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42303,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(function (db,p__42306){
var vec__42307 = p__42306;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42307,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42307,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inc-tempo","inc-tempo",-1684511808),(function (db,p__42311){
var vec__42313 = p__42311;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42313,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42313,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),(function (p1__42310_SHARP_){
return ((8) + p1__42310_SHARP_);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dec-tempo","dec-tempo",375495204),(function (db,p__42317){
var vec__42318 = p__42317;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42318,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42318,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),(function (p1__42316_SHARP_){
return (p1__42316_SHARP_ - (8));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-key","set-key",-48186176),(function (db,p__42321){
var vec__42325 = p__42321;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42325,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42325,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"key","key",-1516042587),key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repeat-toggle","repeat-toggle",-221009908),(function (db,p__42328){
var vec__42329 = p__42328;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42329,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42329,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"repeat?","repeat?",1245600428),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-loop-end","set-loop-end",2098658713),(function (db,p__42332){
var vec__42333 = p__42332;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42333,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42333,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loop-end","loop-end",-88908047),x);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"next-note","next-note",-239967297),(function (db,p__42337){
var vec__42338 = p__42337;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42338,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42338,(1),null);
var tempo = (function (){var G__42341 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42341) : re_frame.core.subscribe.call(null,G__42341));
})();
var seconds_per_beat = (60.0 / cljs.core.deref(tempo));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-note","current-note",-1767945909),cljs.core.inc),new cljs.core.Keyword(null,"next-note-time","next-note-time",-1117617128),(function (p1__42336_SHARP_){
return (p1__42336_SHARP_ + seconds_per_beat);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"play-note","play-note",76179144),(function (db,p__42342){
var vec__42343 = p__42342;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42343,(0),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42343,(1),null);
mecca.music.play_note(pitch);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes-in-queue","notes-in-queue",-193583681),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pitch","pitch",1495126700),pitch,new cljs.core.Keyword(null,"time","time",1385887882),(0)], null)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schedule-note","schedule-note",2064270583),(function (db,p__42347){
var vec__42348 = p__42347;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42348,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42348,(1),null);
var notes = (function (){var G__42351 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42351) : re_frame.core.subscribe.call(null,G__42351));
})();
var beat = (function (){var G__42352 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-note","current-note",-1767945909)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42352) : re_frame.core.subscribe.call(null,G__42352));
})();
var to_play = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42346_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((1) + cljs.core.deref(beat)),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__42346_SHARP_));
}),cljs.core.deref(notes));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"notes-in-queue","notes-in-queue",-193583681),cljs.core.into,to_play);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"add-note","add-note",-926319985),day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("add note"),(function (db,p__42353){
var vec__42354 = p__42353;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42354,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42354,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42354,(2),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42354,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__42357 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42357) : re_frame.core.subscribe.call(null,G__42357));
})()).state,"suspended")){
cljs.core.deref((function (){var G__42358 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42358) : re_frame.core.subscribe.call(null,G__42358));
})()).resume();
} else {
}

mecca.music.play_sample(instrument,(cljs.core.truth_(cljs.core.deref((function (){var G__42359 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sharp?","sharp?",411396133)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42359) : re_frame.core.subscribe.call(null,G__42359));
})()))?(pitch + (1)):pitch));

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"instrument","instrument",-960698844),instrument,new cljs.core.Keyword(null,"pitch","pitch",1495126700),(cljs.core.truth_(cljs.core.deref((function (){var G__42360 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sharp?","sharp?",411396133)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42360) : re_frame.core.subscribe.call(null,G__42360));
})()))?(pitch + (1)):pitch)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tick!","tick!",68058958),(function (db,p__42364){
var vec__42365 = p__42364;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42365,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42365,(1),null);
if(cljs.core.truth_(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref((function (){var G__42371 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42371) : re_frame.core.subscribe.call(null,G__42371));
})())))?cljs.core.deref((function (){var G__42372 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42372) : re_frame.core.subscribe.call(null,G__42372));
})()):false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628),(function (p1__42361_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__42361_SHARP_,(12))){
return (0);
} else {
return (p1__42361_SHARP_ + (1));
}
})),new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),(function (p1__42362_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),p1__42362_SHARP_)){
return (0);
} else {
return (p1__42362_SHARP_ + (1));
}
})),new cljs.core.Keyword(null,"mario-y","mario-y",1718385780),((61) - cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(10),(15),(25),(30),(25),(15),(5)], null),cljs.core.deref((function (){var G__42373 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42373) : re_frame.core.subscribe.call(null,G__42373));
})()))));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628),(function (p1__42363_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__42363_SHARP_,(12))){
return (0);
} else {
return (p1__42363_SHARP_ + (1));
}
}));
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jump!","jump!",-1168155200),(function (db,p__42374){
var vec__42375 = p__42374;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42375,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42375,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),(1));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"submit-xml","submit-xml",-1403162082),(function (db,p__42378){
var vec__42379 = p__42378;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42379,(0),null);
var xml = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42379,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"xml","xml",-1170142052),xml);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-song","load-song",17308276),(function (db,p__42382){
var vec__42383 = p__42382;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42383,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42383,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),notes);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-megaman","load-megaman",59599960),(function (db,p__42386){
var vec__42387 = p__42386;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42387,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42387,(1),null);
var G__42390_42530 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(260)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42390_42530) : re_frame.core.dispatch.call(null,G__42390_42530));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),mecca.songs.megaman.megaman);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-castle","load-castle",-840389601),(function (db,p__42391){
var vec__42392 = p__42391;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42392,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42392,(1),null);
var G__42395_42531 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(150)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42395_42531) : re_frame.core.dispatch.call(null,G__42395_42531));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),mecca.songs.city.city);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-zelda","load-zelda",-1565536165),(function (db,p__42396){
var vec__42397 = p__42396;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42397,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42397,(1),null);
var G__42400_42532 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(390)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42400_42532) : re_frame.core.dispatch.call(null,G__42400_42532));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),mecca.songs.zelda.zelda);
}));

//# sourceMappingURL=mecca.events.js.map
