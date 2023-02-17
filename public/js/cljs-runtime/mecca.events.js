goog.provide('mecca.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"samples","samples",635504833),new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),new cljs.core.Keyword(null,"instrument","instrument",-960698844),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),new cljs.core.Keyword(null,"eraser?","eraser?",-561181785),new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"play-start","play-start",-898241782),new cljs.core.Keyword(null,"current-note","current-note",-1767945909),new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628),new cljs.core.Keyword(null,"repeat?","repeat?",1245600428),new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),new cljs.core.Keyword(null,"jumping?","jumping?",-2092574161),new cljs.core.Keyword(null,"time-signature","time-signature",-1730387952),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),new cljs.core.Keyword(null,"loop-end","loop-end",-88908047),new cljs.core.Keyword(null,"mario-y","mario-y",1718385780),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"next-note-time","next-note-time",-1117617128),new cljs.core.Keyword(null,"focused-note-pos","focused-note-pos",-1443473576),new cljs.core.Keyword(null,"audio-context","audio-context",1642559898),new cljs.core.Keyword(null,"tempo","tempo",-1555208453),new cljs.core.Keyword(null,"mario-x","mario-x",1743249500),new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),new cljs.core.Keyword(null,"xml","xml",-1170142052),new cljs.core.Keyword(null,"current-position","current-position",2031348254),new cljs.core.Keyword(null,"notes-in-queue","notes-in-queue",-193583681)],[null,(1),(1),false,false,(0),(0),(0),(0),(1),false,"",false,(4),false,null,(61),cljs.core.PersistentVector.EMPTY,0.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),(new AudioContext()),(120),(16),null,"",(0),cljs.core.PersistentVector.EMPTY]);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"remove-note","remove-note",-1957283966),day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("remove note"),(function (db,p__61237){
var vec__61238 = p__61237;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61238,(0),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61238,(1),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61238,(2),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),(function (note){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__61236_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(time,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__61236_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(p1__61236_SHARP_))));
}),note);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),(function (db,p__61241){
var vec__61242 = p__61241;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61242,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61242,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),file);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-samples","load-samples",-40877701),(function (db,p__61245){
var vec__61246 = p__61245;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61246,(0),null);
var samples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61246,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"samples","samples",635504833),samples);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-time-signature","set-time-signature",-674659703),(function (db,p__61253){
var vec__61254 = p__61253;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61254,(0),null);
var beats_per_measure = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61254,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"time-signature","time-signature",-1730387952),beats_per_measure);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-notes","set-notes",-1718182261),(function (db,p__61257){
var vec__61258 = p__61257;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61258,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61258,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),notes);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,p__61261){
var vec__61262 = p__61261;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61262,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61262,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"time","time",1385887882),new_time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"play-on","play-on",-1655917734),(function (db,p__61265){
var vec__61266 = p__61265;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61266,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61266,(1),null);
mecca.music.play_song_BANG_();

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"play-start","play-start",-898241782),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).currentTime),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sharp-on","sharp-on",-1157509082),(function (db,p__61275){
var vec__61276 = p__61275;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61276,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61276,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sharp-toggle","sharp-toggle",1733862740),(function (db,p__61279){
var vec__61280 = p__61279;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61280,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61280,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eraser-toggle","eraser-toggle",360211261),(function (db,p__61283){
var vec__61284 = p__61283;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61284,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61284,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"eraser?","eraser?",-561181785),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sharp-off","sharp-off",2041506931),(function (db,p__61287){
var vec__61288 = p__61287;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61288,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61288,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pause","pause",-2095325672),(function (db,p__61291){
var vec__61292 = p__61291;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61292,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61292,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (db,p__61295){
var vec__61296 = p__61295;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61296,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61296,(1),null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-editor","reset-editor",1401688585)], null));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false),new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-focus-note","update-focus-note",-40352556),(function (db,p__61299){
var vec__61300 = p__61299;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61300,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61300,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"focused-note-pos","focused-note-pos",-1443473576),pos);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"select-instrument","select-instrument",75005084),(function (db,p__61303){
var vec__61304 = p__61303;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61304,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61304,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"instrument","instrument",-960698844),instrument,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"eraser?","eraser?",-561181785),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"play-off","play-off",2116693509),(function (db,p__61307){
var vec__61308 = p__61307;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61308,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61308,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"advance-position","advance-position",-23796893),(function (db,p__61313){
var vec__61314 = p__61313;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61314,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61314,(1),null);
var notes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var beat = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
var to_play = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__61311_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((1) + cljs.core.deref(beat)),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__61311_SHARP_));
}),cljs.core.deref(notes));
if(((4) < cljs.core.deref(beat))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-editor","advance-editor",-224480492),0.5], null));
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),(function (p1__61312_SHARP_){
return (0.5 + p1__61312_SHARP_);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"advance-editor","advance-editor",-224480492),(function (db,p__61318){
var vec__61319 = p__61318;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61319,(0),null);
var beats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61319,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),(function (p1__61317_SHARP_){
return (beats + p1__61317_SHARP_);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move-mario","move-mario",-317739908),(function (db,p__61323){
var vec__61324 = p__61323;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61324,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61324,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mario-x","mario-x",1743249500),(function (p1__61322_SHARP_){
return ((10) + p1__61322_SHARP_);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-editor","reset-editor",1401688585),(function (db,p__61328){
var vec__61329 = p__61328;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61329,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61329,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),(1)),new cljs.core.Keyword(null,"mario-x","mario-x",1743249500),(16));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"retract-editor","retract-editor",777879449),(function (db,p__61333){
var vec__61334 = p__61333;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61334,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61334,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),(function (p1__61332_SHARP_){
return (p1__61332_SHARP_ - 0.5);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),(function (db,p__61337){
var vec__61338 = p__61337;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61338,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61338,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(function (db,p__61341){
var vec__61342 = p__61341;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61342,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61342,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inc-tempo","inc-tempo",-1684511808),(function (db,p__61346){
var vec__61347 = p__61346;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61347,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61347,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),(function (p1__61345_SHARP_){
return ((8) + p1__61345_SHARP_);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dec-tempo","dec-tempo",375495204),(function (db,p__61351){
var vec__61352 = p__61351;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61352,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61352,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),(function (p1__61350_SHARP_){
return (p1__61350_SHARP_ - (8));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-key","set-key",-48186176),(function (db,p__61359){
var vec__61360 = p__61359;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61360,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61360,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"key","key",-1516042587),key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repeat-toggle","repeat-toggle",-221009908),(function (db,p__61364){
var vec__61365 = p__61364;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61365,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61365,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"repeat?","repeat?",1245600428),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-loop-end","set-loop-end",2098658713),(function (db,p__61368){
var vec__61369 = p__61368;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61369,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61369,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loop-end","loop-end",-88908047),x);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"next-note","next-note",-239967297),(function (db,p__61373){
var vec__61374 = p__61373;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61374,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61374,(1),null);
var tempo = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
var seconds_per_beat = (60.0 / cljs.core.deref(tempo));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-note","current-note",-1767945909),cljs.core.inc),new cljs.core.Keyword(null,"next-note-time","next-note-time",-1117617128),(function (p1__61372_SHARP_){
return (p1__61372_SHARP_ + seconds_per_beat);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"play-note","play-note",76179144),(function (db,p__61378){
var vec__61379 = p__61378;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61379,(0),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61379,(1),null);
mecca.music.play_note(pitch);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes-in-queue","notes-in-queue",-193583681),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pitch","pitch",1495126700),pitch,new cljs.core.Keyword(null,"time","time",1385887882),(0)], null)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schedule-note","schedule-note",2064270583),(function (db,p__61383){
var vec__61384 = p__61383;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61384,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61384,(1),null);
var notes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var beat = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-note","current-note",-1767945909)], null));
var to_play = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__61382_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((1) + cljs.core.deref(beat)),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__61382_SHARP_));
}),cljs.core.deref(notes));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"notes-in-queue","notes-in-queue",-193583681),cljs.core.into,to_play);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"add-note","add-note",-926319985),day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("add note"),(function (db,p__61387){
var vec__61388 = p__61387;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61388,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61388,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61388,(2),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61388,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).state,"suspended")){
cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).resume();
} else {
}

mecca.music.play_sample(instrument,(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sharp?","sharp?",411396133)], null))))?(pitch + (1)):pitch));

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"instrument","instrument",-960698844),instrument,new cljs.core.Keyword(null,"pitch","pitch",1495126700),(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sharp?","sharp?",411396133)], null))))?(pitch + (1)):pitch)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tick!","tick!",68058958),(function (db,p__61394){
var vec__61395 = p__61394;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61395,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61395,(1),null);
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null))));
if(and__4221__auto__){
return cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628),(function (p1__61391_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__61391_SHARP_,(12))){
return (0);
} else {
return (p1__61391_SHARP_ + (1));
}
})),new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),(function (p1__61392_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),p1__61392_SHARP_)){
return (0);
} else {
return (p1__61392_SHARP_ + (1));
}
})),new cljs.core.Keyword(null,"mario-y","mario-y",1718385780),((61) - cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(10),(15),(25),(30),(25),(15),(5)], null),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null))))));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628),(function (p1__61393_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__61393_SHARP_,(12))){
return (0);
} else {
return (p1__61393_SHARP_ + (1));
}
}));
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jump!","jump!",-1168155200),(function (db,p__61400){
var vec__61401 = p__61400;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61401,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61401,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),(1));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"submit-xml","submit-xml",-1403162082),(function (db,p__61404){
var vec__61405 = p__61404;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61405,(0),null);
var xml = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61405,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"xml","xml",-1170142052),xml);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-song","load-song",17308276),(function (db,p__61408){
var vec__61409 = p__61408;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61409,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61409,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),notes);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-megaman","load-megaman",59599960),(function (db,p__61412){
var vec__61413 = p__61412;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61413,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61413,(1),null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(260)], null));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),mecca.songs.megaman.megaman);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-castle","load-castle",-840389601),(function (db,p__61416){
var vec__61417 = p__61416;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61417,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61417,(1),null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(150)], null));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),mecca.songs.city.city);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-zelda","load-zelda",-1565536165),(function (db,p__61420){
var vec__61421 = p__61420;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61421,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61421,(1),null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(390)], null));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),mecca.songs.zelda.zelda);
}));

//# sourceMappingURL=mecca.events.js.map
