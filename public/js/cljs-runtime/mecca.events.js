goog.provide('mecca.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"samples","samples",635504833),new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),new cljs.core.Keyword(null,"instrument","instrument",-960698844),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),new cljs.core.Keyword(null,"eraser?","eraser?",-561181785),new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"play-start","play-start",-898241782),new cljs.core.Keyword(null,"current-note","current-note",-1767945909),new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628),new cljs.core.Keyword(null,"repeat?","repeat?",1245600428),new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),new cljs.core.Keyword(null,"jumping?","jumping?",-2092574161),new cljs.core.Keyword(null,"time-signature","time-signature",-1730387952),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),new cljs.core.Keyword(null,"loop-end","loop-end",-88908047),new cljs.core.Keyword(null,"mario-y","mario-y",1718385780),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"next-note-time","next-note-time",-1117617128),new cljs.core.Keyword(null,"focused-note-pos","focused-note-pos",-1443473576),new cljs.core.Keyword(null,"audio-context","audio-context",1642559898),new cljs.core.Keyword(null,"tempo","tempo",-1555208453),new cljs.core.Keyword(null,"mario-x","mario-x",1743249500),new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),new cljs.core.Keyword(null,"xml","xml",-1170142052),new cljs.core.Keyword(null,"current-position","current-position",2031348254),new cljs.core.Keyword(null,"notes-in-queue","notes-in-queue",-193583681)],[null,(1),(1),false,false,(0),(0),(0),(0),(1),false,"",false,(4),false,null,(61),cljs.core.PersistentVector.EMPTY,0.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),(new AudioContext()),(120),(16),null,"",(0),cljs.core.PersistentVector.EMPTY]);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"remove-note","remove-note",-1957283966),day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("remove note"),(function (db,p__56227){
var vec__56228 = p__56227;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56228,(0),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56228,(1),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56228,(2),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),(function (note){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56226_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(time,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__56226_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(p1__56226_SHARP_))));
}),note);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),(function (db,p__56231){
var vec__56232 = p__56231;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56232,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56232,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),file);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-samples","load-samples",-40877701),(function (db,p__56235){
var vec__56236 = p__56235;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56236,(0),null);
var samples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56236,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"samples","samples",635504833),samples);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-time-signature","set-time-signature",-674659703),(function (db,p__56239){
var vec__56240 = p__56239;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56240,(0),null);
var beats_per_measure = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56240,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"time-signature","time-signature",-1730387952),beats_per_measure);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-notes","set-notes",-1718182261),(function (db,p__56243){
var vec__56244 = p__56243;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56244,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56244,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),notes);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,p__56247){
var vec__56248 = p__56247;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56248,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56248,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"time","time",1385887882),new_time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"play-on","play-on",-1655917734),(function (db,p__56251){
var vec__56252 = p__56251;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56252,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56252,(1),null);
mecca.music.play_song_BANG_();

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"play-start","play-start",-898241782),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).currentTime),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sharp-on","sharp-on",-1157509082),(function (db,p__56255){
var vec__56256 = p__56255;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56256,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56256,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sharp-toggle","sharp-toggle",1733862740),(function (db,p__56259){
var vec__56260 = p__56259;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56260,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56260,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eraser-toggle","eraser-toggle",360211261),(function (db,p__56263){
var vec__56264 = p__56263;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56264,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56264,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"eraser?","eraser?",-561181785),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sharp-off","sharp-off",2041506931),(function (db,p__56267){
var vec__56268 = p__56267;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56268,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56268,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pause","pause",-2095325672),(function (db,p__56271){
var vec__56272 = p__56271;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56272,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56272,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (db,p__56275){
var vec__56276 = p__56275;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56276,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56276,(1),null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-editor","reset-editor",1401688585)], null));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false),new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-focus-note","update-focus-note",-40352556),(function (db,p__56279){
var vec__56280 = p__56279;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56280,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56280,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"focused-note-pos","focused-note-pos",-1443473576),pos);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"select-instrument","select-instrument",75005084),(function (db,p__56283){
var vec__56284 = p__56283;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56284,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56284,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"instrument","instrument",-960698844),instrument,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"eraser?","eraser?",-561181785),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"play-off","play-off",2116693509),(function (db,p__56287){
var vec__56288 = p__56287;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56288,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56288,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"advance-position","advance-position",-23796893),(function (db,p__56293){
var vec__56294 = p__56293;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56294,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56294,(1),null);
var notes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var beat = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
var to_play = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56291_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((1) + cljs.core.deref(beat)),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__56291_SHARP_));
}),cljs.core.deref(notes));
if(((4) < cljs.core.deref(beat))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-editor","advance-editor",-224480492),0.5], null));
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),(function (p1__56292_SHARP_){
return (0.5 + p1__56292_SHARP_);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"advance-editor","advance-editor",-224480492),(function (db,p__56298){
var vec__56299 = p__56298;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56299,(0),null);
var beats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56299,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),(function (p1__56297_SHARP_){
return (beats + p1__56297_SHARP_);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move-mario","move-mario",-317739908),(function (db,p__56305){
var vec__56306 = p__56305;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56306,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56306,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mario-x","mario-x",1743249500),(function (p1__56303_SHARP_){
return ((10) + p1__56303_SHARP_);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-editor","reset-editor",1401688585),(function (db,p__56309){
var vec__56310 = p__56309;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56310,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56310,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),(1)),new cljs.core.Keyword(null,"mario-x","mario-x",1743249500),(16));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"retract-editor","retract-editor",777879449),(function (db,p__56314){
var vec__56315 = p__56314;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56315,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56315,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),(function (p1__56313_SHARP_){
return (p1__56313_SHARP_ - 0.5);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),(function (db,p__56322){
var vec__56323 = p__56322;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56323,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56323,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(function (db,p__56326){
var vec__56327 = p__56326;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56327,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56327,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inc-tempo","inc-tempo",-1684511808),(function (db,p__56331){
var vec__56332 = p__56331;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56332,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56332,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),(function (p1__56330_SHARP_){
return ((8) + p1__56330_SHARP_);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dec-tempo","dec-tempo",375495204),(function (db,p__56336){
var vec__56337 = p__56336;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56337,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56337,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),(function (p1__56335_SHARP_){
return (p1__56335_SHARP_ - (8));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-key","set-key",-48186176),(function (db,p__56340){
var vec__56341 = p__56340;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56341,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56341,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"key","key",-1516042587),key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repeat-toggle","repeat-toggle",-221009908),(function (db,p__56344){
var vec__56345 = p__56344;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56345,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56345,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"repeat?","repeat?",1245600428),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-loop-end","set-loop-end",2098658713),(function (db,p__56348){
var vec__56349 = p__56348;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56349,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56349,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loop-end","loop-end",-88908047),x);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"next-note","next-note",-239967297),(function (db,p__56373){
var vec__56375 = p__56373;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56375,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56375,(1),null);
var tempo = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
var seconds_per_beat = (60.0 / cljs.core.deref(tempo));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-note","current-note",-1767945909),cljs.core.inc),new cljs.core.Keyword(null,"next-note-time","next-note-time",-1117617128),(function (p1__56352_SHARP_){
return (p1__56352_SHARP_ + seconds_per_beat);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"play-note","play-note",76179144),(function (db,p__56388){
var vec__56393 = p__56388;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56393,(0),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56393,(1),null);
mecca.music.play_note(pitch);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes-in-queue","notes-in-queue",-193583681),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pitch","pitch",1495126700),pitch,new cljs.core.Keyword(null,"time","time",1385887882),(0)], null)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schedule-note","schedule-note",2064270583),(function (db,p__56397){
var vec__56398 = p__56397;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56398,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56398,(1),null);
var notes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var beat = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-note","current-note",-1767945909)], null));
var to_play = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56396_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((1) + cljs.core.deref(beat)),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__56396_SHARP_));
}),cljs.core.deref(notes));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"notes-in-queue","notes-in-queue",-193583681),cljs.core.into,to_play);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"add-note","add-note",-926319985),day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("add note"),(function (db,p__56401){
var vec__56402 = p__56401;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56402,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56402,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56402,(2),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56402,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).state,"suspended")){
cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).resume();
} else {
}

mecca.music.play_sample(instrument,(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sharp?","sharp?",411396133)], null))))?(pitch + (1)):pitch));

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"instrument","instrument",-960698844),instrument,new cljs.core.Keyword(null,"pitch","pitch",1495126700),(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sharp?","sharp?",411396133)], null))))?(pitch + (1)):pitch)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tick!","tick!",68058958),(function (db,p__56408){
var vec__56409 = p__56408;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56409,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56409,(1),null);
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null))));
if(and__4221__auto__){
return cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628),(function (p1__56405_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__56405_SHARP_,(12))){
return (0);
} else {
return (p1__56405_SHARP_ + (1));
}
})),new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),(function (p1__56406_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),p1__56406_SHARP_)){
return (0);
} else {
return (p1__56406_SHARP_ + (1));
}
})),new cljs.core.Keyword(null,"mario-y","mario-y",1718385780),((61) - cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(10),(15),(25),(30),(25),(15),(5)], null),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null))))));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628),(function (p1__56407_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__56407_SHARP_,(12))){
return (0);
} else {
return (p1__56407_SHARP_ + (1));
}
}));
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jump!","jump!",-1168155200),(function (db,p__56412){
var vec__56413 = p__56412;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56413,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56413,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),(1));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"submit-xml","submit-xml",-1403162082),(function (db,p__56416){
var vec__56417 = p__56416;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56417,(0),null);
var xml = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56417,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"xml","xml",-1170142052),xml);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-song","load-song",17308276),(function (db,p__56420){
var vec__56421 = p__56420;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56421,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56421,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),notes);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-megaman","load-megaman",59599960),(function (db,p__56424){
var vec__56425 = p__56424;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56425,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56425,(1),null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(260)], null));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),mecca.songs.megaman.megaman);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-castle","load-castle",-840389601),(function (db,p__56428){
var vec__56429 = p__56428;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56429,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56429,(1),null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(150)], null));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),mecca.songs.city.city);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-zelda","load-zelda",-1565536165),(function (db,p__56432){
var vec__56433 = p__56432;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56433,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56433,(1),null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(390)], null));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),mecca.songs.zelda.zelda);
}));

//# sourceMappingURL=mecca.events.js.map
