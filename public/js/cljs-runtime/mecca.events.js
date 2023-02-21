goog.provide('mecca.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"samples","samples",635504833),new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),new cljs.core.Keyword(null,"instrument","instrument",-960698844),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),new cljs.core.Keyword(null,"eval-result","eval-result",937286342),new cljs.core.Keyword(null,"eraser?","eraser?",-561181785),new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"play-start","play-start",-898241782),new cljs.core.Keyword(null,"current-note","current-note",-1767945909),new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628),new cljs.core.Keyword(null,"repeat?","repeat?",1245600428),new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),new cljs.core.Keyword(null,"jumping?","jumping?",-2092574161),new cljs.core.Keyword(null,"time-signature","time-signature",-1730387952),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),new cljs.core.Keyword(null,"loop-end","loop-end",-88908047),new cljs.core.Keyword(null,"mario-y","mario-y",1718385780),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"next-note-time","next-note-time",-1117617128),new cljs.core.Keyword(null,"focused-note-pos","focused-note-pos",-1443473576),new cljs.core.Keyword(null,"audio-context","audio-context",1642559898),new cljs.core.Keyword(null,"tempo","tempo",-1555208453),new cljs.core.Keyword(null,"mario-x","mario-x",1743249500),new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),new cljs.core.Keyword(null,"xml","xml",-1170142052),new cljs.core.Keyword(null,"current-position","current-position",2031348254),new cljs.core.Keyword(null,"notes-in-queue","notes-in-queue",-193583681)],[null,(1),(1),false,"",false,(0),(0),(0),(0),(1),false,"",false,(4),false,null,(61),cljs.core.PersistentVector.EMPTY,0.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),(new AudioContext()),(180),(16),null,"",(0),cljs.core.PersistentVector.EMPTY]);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"remove-note","remove-note",-1957283966),day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("remove note"),(function (db,p__78093){
var vec__78094 = p__78093;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78094,(0),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78094,(1),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78094,(2),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),(function (note){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__78092_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(time,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__78092_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(p1__78092_SHARP_))));
}),note);
}));
}));
mecca.events.test_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-result","set-result",766028711),(function (db,p__78105){
var vec__78106 = p__78105;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78106,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78106,(1),null);
mecca.sci_editor.update_result_BANG_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.sci_editor.eval_all(cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__78115 = cljs.core.deref(mecca.sci_editor._BANG_points);
var G__78115__$1 = (((G__78115 == null))?null:G__78115.state);
var G__78115__$2 = (((G__78115__$1 == null))?null:G__78115__$1.doc);
if((G__78115__$2 == null)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78115__$2);
}
})()))));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"eval-result","eval-result",937286342),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.sci_editor.eval_all(cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__78123 = cljs.core.deref(mecca.sci_editor._BANG_points);
var G__78123__$1 = (((G__78123 == null))?null:G__78123.state);
var G__78123__$2 = (((G__78123__$1 == null))?null:G__78123__$1.doc);
if((G__78123__$2 == null)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78123__$2);
}
})()))));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),(function (db,p__78124){
var vec__78125 = p__78124;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78125,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78125,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),file);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-samples","load-samples",-40877701),(function (db,p__78128){
var vec__78129 = p__78128;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78129,(0),null);
var samples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78129,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"samples","samples",635504833),samples);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-time-signature","set-time-signature",-674659703),(function (db,p__78132){
var vec__78133 = p__78132;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78133,(0),null);
var beats_per_measure = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78133,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"time-signature","time-signature",-1730387952),beats_per_measure);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-notes","set-notes",-1718182261),(function (db,p__78136){
var vec__78137 = p__78136;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78137,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78137,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),notes);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,p__78140){
var vec__78141 = p__78140;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78141,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78141,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"time","time",1385887882),new_time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"play-on","play-on",-1655917734),(function (db,p__78144){
var vec__78145 = p__78144;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78145,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78145,(1),null);
cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).resume();

mecca.music.play_song_BANG_();

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"play-start","play-start",-898241782),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).currentTime),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sharp-on","sharp-on",-1157509082),(function (db,p__78148){
var vec__78149 = p__78148;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78149,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78149,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sharp-toggle","sharp-toggle",1733862740),(function (db,p__78152){
var vec__78153 = p__78152;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78153,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78153,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eraser-toggle","eraser-toggle",360211261),(function (db,p__78156){
var vec__78157 = p__78156;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78157,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78157,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"eraser?","eraser?",-561181785),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sharp-off","sharp-off",2041506931),(function (db,p__78160){
var vec__78161 = p__78160;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78161,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78161,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pause","pause",-2095325672),(function (db,p__78164){
var vec__78165 = p__78164;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78165,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78165,(1),null);
cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).suspend();

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (db,p__78168){
var vec__78169 = p__78168;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78169,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78169,(1),null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-editor","reset-editor",1401688585)], null));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false),new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-focus-note","update-focus-note",-40352556),(function (db,p__78172){
var vec__78173 = p__78172;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78173,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78173,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"focused-note-pos","focused-note-pos",-1443473576),pos);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"select-instrument","select-instrument",75005084),(function (db,p__78176){
var vec__78177 = p__78176;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78177,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78177,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"instrument","instrument",-960698844),instrument,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"eraser?","eraser?",-561181785),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"play-off","play-off",2116693509),(function (db,p__78180){
var vec__78181 = p__78180;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78181,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78181,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"advance-position","advance-position",-23796893),(function (db,p__78186){
var vec__78187 = p__78186;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78187,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78187,(1),null);
var notes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var beat = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
var to_play = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__78184_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((1) + cljs.core.deref(beat)),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__78184_SHARP_));
}),cljs.core.deref(notes));
if(((4) < cljs.core.deref(beat))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-editor","advance-editor",-224480492),0.5], null));
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),(function (p1__78185_SHARP_){
return (0.5 + p1__78185_SHARP_);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"advance-editor","advance-editor",-224480492),(function (db,p__78191){
var vec__78192 = p__78191;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78192,(0),null);
var beats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78192,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),(function (p1__78190_SHARP_){
return (beats + p1__78190_SHARP_);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move-mario","move-mario",-317739908),(function (db,p__78196){
var vec__78197 = p__78196;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78197,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78197,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mario-x","mario-x",1743249500),(function (p1__78195_SHARP_){
return ((10) + p1__78195_SHARP_);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-editor","reset-editor",1401688585),(function (db,p__78200){
var vec__78201 = p__78200;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78201,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78201,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),(1)),new cljs.core.Keyword(null,"mario-x","mario-x",1743249500),(16));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"retract-editor","retract-editor",777879449),(function (db,p__78206){
var vec__78207 = p__78206;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78207,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78207,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),(function (p1__78205_SHARP_){
return (p1__78205_SHARP_ - 0.5);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),(function (db,p__78210){
var vec__78211 = p__78210;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78211,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78211,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(function (db,p__78214){
var vec__78215 = p__78214;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78215,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78215,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inc-tempo","inc-tempo",-1684511808),(function (db,p__78219){
var vec__78220 = p__78219;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78220,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78220,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),(function (p1__78218_SHARP_){
return ((8) + p1__78218_SHARP_);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dec-tempo","dec-tempo",375495204),(function (db,p__78224){
var vec__78225 = p__78224;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78225,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78225,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),(function (p1__78223_SHARP_){
return (p1__78223_SHARP_ - (8));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-key","set-key",-48186176),(function (db,p__78228){
var vec__78229 = p__78228;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78229,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78229,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"key","key",-1516042587),key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repeat-toggle","repeat-toggle",-221009908),(function (db,p__78232){
var vec__78233 = p__78232;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78233,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78233,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"repeat?","repeat?",1245600428),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-loop-end","set-loop-end",2098658713),(function (db,p__78236){
var vec__78237 = p__78236;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78237,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78237,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loop-end","loop-end",-88908047),x);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"next-note","next-note",-239967297),(function (db,p__78241){
var vec__78242 = p__78241;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78242,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78242,(1),null);
var tempo = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
var seconds_per_beat = (60.0 / cljs.core.deref(tempo));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-note","current-note",-1767945909),cljs.core.inc),new cljs.core.Keyword(null,"next-note-time","next-note-time",-1117617128),(function (p1__78240_SHARP_){
return (p1__78240_SHARP_ + seconds_per_beat);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"play-note","play-note",76179144),(function (db,p__78245){
var vec__78246 = p__78245;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78246,(0),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78246,(1),null);
mecca.music.play_note(pitch);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes-in-queue","notes-in-queue",-193583681),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pitch","pitch",1495126700),pitch,new cljs.core.Keyword(null,"time","time",1385887882),(0)], null)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schedule-note","schedule-note",2064270583),(function (db,p__78250){
var vec__78251 = p__78250;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78251,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78251,(1),null);
var notes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var beat = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-note","current-note",-1767945909)], null));
var to_play = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__78249_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((1) + cljs.core.deref(beat)),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__78249_SHARP_));
}),cljs.core.deref(notes));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"notes-in-queue","notes-in-queue",-193583681),cljs.core.into,to_play);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"add-note","add-note",-926319985),day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("add note"),(function (db,p__78254){
var vec__78255 = p__78254;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78255,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78255,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78255,(2),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78255,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).state,"suspended")){
cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).resume();
} else {
}

mecca.music.play_sample(instrument,(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sharp?","sharp?",411396133)], null))))?(pitch + (1)):pitch));

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"instrument","instrument",-960698844),instrument,new cljs.core.Keyword(null,"pitch","pitch",1495126700),(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sharp?","sharp?",411396133)], null))))?(pitch + (1)):pitch)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tick!","tick!",68058958),(function (db,p__78261){
var vec__78263 = p__78261;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78263,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78263,(1),null);
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null))));
if(and__4221__auto__){
return cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628),(function (p1__78258_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__78258_SHARP_,(12))){
return (0);
} else {
return (p1__78258_SHARP_ + (1));
}
})),new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),(function (p1__78259_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),p1__78259_SHARP_)){
return (0);
} else {
return (p1__78259_SHARP_ + (1));
}
})),new cljs.core.Keyword(null,"mario-y","mario-y",1718385780),((61) - cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(10),(15),(25),(30),(25),(15),(5)], null),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null))))));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628),(function (p1__78260_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__78260_SHARP_,(12))){
return (0);
} else {
return (p1__78260_SHARP_ + (1));
}
}));
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jump!","jump!",-1168155200),(function (db,p__78266){
var vec__78267 = p__78266;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78267,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78267,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),(1));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"submit-xml","submit-xml",-1403162082),(function (db,p__78270){
var vec__78271 = p__78270;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78271,(0),null);
var xml = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78271,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"xml","xml",-1170142052),xml);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-song","load-song",17308276),(function (db,p__78274){
var vec__78275 = p__78274;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78275,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78275,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),notes);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-megaman","load-megaman",59599960),(function (db,p__78278){
var vec__78279 = p__78278;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78279,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78279,(1),null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(260)], null));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),mecca.songs.megaman.megaman);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-castle","load-castle",-840389601),(function (db,p__78282){
var vec__78283 = p__78282;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78283,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78283,(1),null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(150)], null));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),mecca.songs.city.city);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-zelda","load-zelda",-1565536165),(function (db,p__78286){
var vec__78287 = p__78286;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78287,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78287,(1),null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(390)], null));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),mecca.songs.zelda.zelda);
}));

//# sourceMappingURL=mecca.events.js.map
