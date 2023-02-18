goog.provide('mecca.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"samples","samples",635504833),new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),new cljs.core.Keyword(null,"instrument","instrument",-960698844),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),new cljs.core.Keyword(null,"eraser?","eraser?",-561181785),new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"play-start","play-start",-898241782),new cljs.core.Keyword(null,"current-note","current-note",-1767945909),new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628),new cljs.core.Keyword(null,"repeat?","repeat?",1245600428),new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),new cljs.core.Keyword(null,"jumping?","jumping?",-2092574161),new cljs.core.Keyword(null,"time-signature","time-signature",-1730387952),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),new cljs.core.Keyword(null,"loop-end","loop-end",-88908047),new cljs.core.Keyword(null,"mario-y","mario-y",1718385780),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"next-note-time","next-note-time",-1117617128),new cljs.core.Keyword(null,"focused-note-pos","focused-note-pos",-1443473576),new cljs.core.Keyword(null,"audio-context","audio-context",1642559898),new cljs.core.Keyword(null,"tempo","tempo",-1555208453),new cljs.core.Keyword(null,"mario-x","mario-x",1743249500),new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),new cljs.core.Keyword(null,"xml","xml",-1170142052),new cljs.core.Keyword(null,"current-position","current-position",2031348254),new cljs.core.Keyword(null,"notes-in-queue","notes-in-queue",-193583681)],[null,(1),(1),false,false,(0),(0),(0),(0),(1),false,"",false,(4),false,null,(61),cljs.core.PersistentVector.EMPTY,0.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),(new AudioContext()),(180),(16),null,"",(0),cljs.core.PersistentVector.EMPTY]);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"remove-note","remove-note",-1957283966),day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("remove note"),(function (db,p__59545){
var vec__59546 = p__59545;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59546,(0),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59546,(1),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59546,(2),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),(function (note){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__59544_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(time,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__59544_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(p1__59544_SHARP_))));
}),note);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),(function (db,p__59549){
var vec__59550 = p__59549;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59550,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59550,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),file);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-samples","load-samples",-40877701),(function (db,p__59554){
var vec__59555 = p__59554;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59555,(0),null);
var samples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59555,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"samples","samples",635504833),samples);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-time-signature","set-time-signature",-674659703),(function (db,p__59559){
var vec__59560 = p__59559;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59560,(0),null);
var beats_per_measure = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59560,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"time-signature","time-signature",-1730387952),beats_per_measure);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-notes","set-notes",-1718182261),(function (db,p__59563){
var vec__59564 = p__59563;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59564,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59564,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),notes);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,p__59567){
var vec__59568 = p__59567;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59568,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59568,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"time","time",1385887882),new_time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"play-on","play-on",-1655917734),(function (db,p__59571){
var vec__59572 = p__59571;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59572,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59572,(1),null);
cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).resume();

mecca.music.play_song_BANG_();

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"play-start","play-start",-898241782),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).currentTime),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sharp-on","sharp-on",-1157509082),(function (db,p__59579){
var vec__59580 = p__59579;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59580,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59580,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sharp-toggle","sharp-toggle",1733862740),(function (db,p__59589){
var vec__59590 = p__59589;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59590,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59590,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eraser-toggle","eraser-toggle",360211261),(function (db,p__59593){
var vec__59594 = p__59593;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59594,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59594,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"eraser?","eraser?",-561181785),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sharp-off","sharp-off",2041506931),(function (db,p__59601){
var vec__59602 = p__59601;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59602,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59602,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pause","pause",-2095325672),(function (db,p__59605){
var vec__59606 = p__59605;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59606,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59606,(1),null);
cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).suspend();

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (db,p__59609){
var vec__59610 = p__59609;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59610,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59610,(1),null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-editor","reset-editor",1401688585)], null));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false),new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-focus-note","update-focus-note",-40352556),(function (db,p__59613){
var vec__59614 = p__59613;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59614,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59614,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"focused-note-pos","focused-note-pos",-1443473576),pos);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"select-instrument","select-instrument",75005084),(function (db,p__59617){
var vec__59618 = p__59617;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59618,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59618,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"instrument","instrument",-960698844),instrument,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"eraser?","eraser?",-561181785),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"play-off","play-off",2116693509),(function (db,p__59621){
var vec__59622 = p__59621;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59622,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59622,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"advance-position","advance-position",-23796893),(function (db,p__59627){
var vec__59628 = p__59627;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59628,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59628,(1),null);
var notes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var beat = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
var to_play = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59625_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((1) + cljs.core.deref(beat)),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__59625_SHARP_));
}),cljs.core.deref(notes));
if(((4) < cljs.core.deref(beat))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-editor","advance-editor",-224480492),0.5], null));
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),(function (p1__59626_SHARP_){
return (0.5 + p1__59626_SHARP_);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"advance-editor","advance-editor",-224480492),(function (db,p__59632){
var vec__59633 = p__59632;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59633,(0),null);
var beats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59633,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),(function (p1__59631_SHARP_){
return (beats + p1__59631_SHARP_);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move-mario","move-mario",-317739908),(function (db,p__59637){
var vec__59638 = p__59637;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59638,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59638,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mario-x","mario-x",1743249500),(function (p1__59636_SHARP_){
return ((10) + p1__59636_SHARP_);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-editor","reset-editor",1401688585),(function (db,p__59641){
var vec__59642 = p__59641;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59642,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59642,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),(1)),new cljs.core.Keyword(null,"mario-x","mario-x",1743249500),(16));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"retract-editor","retract-editor",777879449),(function (db,p__59646){
var vec__59647 = p__59646;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59647,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59647,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),(function (p1__59645_SHARP_){
return (p1__59645_SHARP_ - 0.5);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),(function (db,p__59650){
var vec__59651 = p__59650;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59651,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59651,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(function (db,p__59654){
var vec__59655 = p__59654;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59655,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59655,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inc-tempo","inc-tempo",-1684511808),(function (db,p__59659){
var vec__59660 = p__59659;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59660,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59660,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),(function (p1__59658_SHARP_){
return ((8) + p1__59658_SHARP_);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dec-tempo","dec-tempo",375495204),(function (db,p__59664){
var vec__59665 = p__59664;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59665,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59665,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),(function (p1__59663_SHARP_){
return (p1__59663_SHARP_ - (8));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-key","set-key",-48186176),(function (db,p__59668){
var vec__59669 = p__59668;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59669,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59669,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"key","key",-1516042587),key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repeat-toggle","repeat-toggle",-221009908),(function (db,p__59672){
var vec__59673 = p__59672;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59673,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59673,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"repeat?","repeat?",1245600428),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-loop-end","set-loop-end",2098658713),(function (db,p__59676){
var vec__59677 = p__59676;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59677,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59677,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loop-end","loop-end",-88908047),x);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"next-note","next-note",-239967297),(function (db,p__59681){
var vec__59682 = p__59681;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59682,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59682,(1),null);
var tempo = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
var seconds_per_beat = (60.0 / cljs.core.deref(tempo));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-note","current-note",-1767945909),cljs.core.inc),new cljs.core.Keyword(null,"next-note-time","next-note-time",-1117617128),(function (p1__59680_SHARP_){
return (p1__59680_SHARP_ + seconds_per_beat);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"play-note","play-note",76179144),(function (db,p__59685){
var vec__59686 = p__59685;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59686,(0),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59686,(1),null);
mecca.music.play_note(pitch);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes-in-queue","notes-in-queue",-193583681),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pitch","pitch",1495126700),pitch,new cljs.core.Keyword(null,"time","time",1385887882),(0)], null)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schedule-note","schedule-note",2064270583),(function (db,p__59690){
var vec__59691 = p__59690;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59691,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59691,(1),null);
var notes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var beat = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-note","current-note",-1767945909)], null));
var to_play = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59689_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((1) + cljs.core.deref(beat)),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__59689_SHARP_));
}),cljs.core.deref(notes));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"notes-in-queue","notes-in-queue",-193583681),cljs.core.into,to_play);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"add-note","add-note",-926319985),day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("add note"),(function (db,p__59694){
var vec__59695 = p__59694;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59695,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59695,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59695,(2),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59695,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).state,"suspended")){
cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).resume();
} else {
}

mecca.music.play_sample(instrument,(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sharp?","sharp?",411396133)], null))))?(pitch + (1)):pitch));

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"instrument","instrument",-960698844),instrument,new cljs.core.Keyword(null,"pitch","pitch",1495126700),(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sharp?","sharp?",411396133)], null))))?(pitch + (1)):pitch)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tick!","tick!",68058958),(function (db,p__59701){
var vec__59702 = p__59701;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59702,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59702,(1),null);
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null))));
if(and__4221__auto__){
return cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628),(function (p1__59698_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__59698_SHARP_,(12))){
return (0);
} else {
return (p1__59698_SHARP_ + (1));
}
})),new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),(function (p1__59699_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),p1__59699_SHARP_)){
return (0);
} else {
return (p1__59699_SHARP_ + (1));
}
})),new cljs.core.Keyword(null,"mario-y","mario-y",1718385780),((61) - cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(10),(15),(25),(30),(25),(15),(5)], null),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null))))));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628),(function (p1__59700_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__59700_SHARP_,(12))){
return (0);
} else {
return (p1__59700_SHARP_ + (1));
}
}));
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jump!","jump!",-1168155200),(function (db,p__59707){
var vec__59708 = p__59707;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59708,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59708,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),(1));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"submit-xml","submit-xml",-1403162082),(function (db,p__59711){
var vec__59712 = p__59711;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59712,(0),null);
var xml = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59712,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"xml","xml",-1170142052),xml);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-song","load-song",17308276),(function (db,p__59715){
var vec__59716 = p__59715;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59716,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59716,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),notes);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-megaman","load-megaman",59599960),(function (db,p__59719){
var vec__59720 = p__59719;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59720,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59720,(1),null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(260)], null));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),mecca.songs.megaman.megaman);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-castle","load-castle",-840389601),(function (db,p__59723){
var vec__59724 = p__59723;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59724,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59724,(1),null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(150)], null));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),mecca.songs.city.city);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-zelda","load-zelda",-1565536165),(function (db,p__59727){
var vec__59728 = p__59727;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59728,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59728,(1),null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(390)], null));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),mecca.songs.zelda.zelda);
}));

//# sourceMappingURL=mecca.events.js.map
