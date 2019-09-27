// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('ajax.protocols');
goog.require('day8.re_frame.undo');
goog.require('mecca.mario');
goog.require('mecca.music');
goog.require('mecca.audio.scale');
goog.require('goog.events');
goog.require('goog.events.EventType');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize_DASH_db,(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.cst$kw$mario,cljs.core.cst$kw$instrument,cljs.core.cst$kw$key,cljs.core.cst$kw$mario_DASH_jump,cljs.core.cst$kw$time,cljs.core.cst$kw$mario_DASH_run,cljs.core.cst$kw$playing_QMARK_,cljs.core.cst$kw$mario_DASH_y,cljs.core.cst$kw$bassline,cljs.core.cst$kw$lead,cljs.core.cst$kw$focused_DASH_note_DASH_pos,cljs.core.cst$kw$tempo,cljs.core.cst$kw$drums,cljs.core.cst$kw$mario_DASH_x,cljs.core.cst$kw$array_DASH_buffer,cljs.core.cst$kw$current_DASH_position],[(1),cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$mario,"C",(0),(0),(1),false,41.5,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),(180),cljs.core.PersistentVector.EMPTY,(54),null,(0)]);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_sample,(function (p__14124,_){
var map__14125 = p__14124;
var map__14125__$1 = ((((!((map__14125 == null)))?(((((map__14125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14125):map__14125);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14125__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$show_DASH_twirly,true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$uri,"/audio/sound01.mp3",cljs.core.cst$kw$response_DASH_format,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$arraybuffer,cljs.core.cst$kw$read,ajax.protocols._body,cljs.core.cst$kw$description,"audio",cljs.core.cst$kw$content_DASH_type,"audio/mpeg"], null),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$load_DASH_audio], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$log_DASH_info], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_audio,(function (db,p__14127){
var vec__14128 = p__14127;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14128,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14128,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$array_DASH_buffer,result);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$log_DASH_info,(function (db,p__14131){
var vec__14132 = p__14131;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14132,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14132,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$error_DASH_log,result);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_bassline,(function (db,p__14135){
var vec__14136 = p__14135;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14136,(0),null);
var bassline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14136,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bassline,cljs.core.vec((function (){var iter__4324__auto__ = ((function (vec__14136,_,bassline){
return (function mecca$events$iter__14139(s__14140){
return (new cljs.core.LazySeq(null,((function (vec__14136,_,bassline){
return (function (){
var s__14140__$1 = s__14140;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14140__$1);
if(temp__5457__auto__){
var s__14140__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14140__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14140__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14142 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14141 = (0);
while(true){
if((i__14141 < size__4323__auto__)){
var interval = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14141);
cljs.core.chunk_append(b__14142,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__14143 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14143) : re_frame.core.subscribe.call(null,G__14143));
})())),mecca.music.root_note_midi_num())),(interval - (1))));

var G__14145 = (i__14141 + (1));
i__14141 = G__14145;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14142),mecca$events$iter__14139(cljs.core.chunk_rest(s__14140__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14142),null);
}
} else {
var interval = cljs.core.first(s__14140__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__14144 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14144) : re_frame.core.subscribe.call(null,G__14144));
})())),mecca.music.root_note_midi_num())),(interval - (1))),mecca$events$iter__14139(cljs.core.rest(s__14140__$2)));
}
} else {
return null;
}
break;
}
});})(vec__14136,_,bassline))
,null,null));
});})(vec__14136,_,bassline))
;
return iter__4324__auto__(bassline);
})()));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$add_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("add note"),(function (db,p__14146){
var vec__14147 = p__14146;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14147,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14147,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14147,(2),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14147,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mecca.music.audiocontext).state,"suspended")){
cljs.core.deref(mecca.music.audiocontext).resume();
} else {
}

mecca.music.play_mp3_BANG_();

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,instrument,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$duration,0.5,cljs.core.cst$kw$pitch,((77) - pitch)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$remove_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("remove note"),(function (db,p__14151){
var vec__14152 = p__14151;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14152,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14152,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14152,(2),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14152,(3),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(instrument),((function (vec__14152,_,instrument,time,pitch){
return (function (notes){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__14152,_,instrument,time,pitch){
return (function (p1__14150_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(time,cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__14150_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((77) - pitch),cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(p1__14150_SHARP_))));
});})(vec__14152,_,instrument,time,pitch))
,notes);
});})(vec__14152,_,instrument,time,pitch))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$add_DASH_drum_DASH_hit,(function (db,p__14155){
var vec__14156 = p__14155;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14156,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14156,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14156,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,x,cljs.core.cst$kw$duration,(1),cljs.core.cst$kw$pitch,((77) - y)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$move_DASH_note,(function (db,p__14159){
var vec__14160 = p__14159;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14160,(0),null);
var bassline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14160,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bassline,cljs.core.vec((function (){var iter__4324__auto__ = ((function (vec__14160,_,bassline){
return (function mecca$events$iter__14163(s__14164){
return (new cljs.core.LazySeq(null,((function (vec__14160,_,bassline){
return (function (){
var s__14164__$1 = s__14164;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14164__$1);
if(temp__5457__auto__){
var s__14164__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14164__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14164__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14166 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14165 = (0);
while(true){
if((i__14165 < size__4323__auto__)){
var interval = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14165);
cljs.core.chunk_append(b__14166,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__14167 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14167) : re_frame.core.subscribe.call(null,G__14167));
})())),mecca.music.root_note_midi_num())),(interval - (1))));

var G__14169 = (i__14165 + (1));
i__14165 = G__14169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14166),mecca$events$iter__14163(cljs.core.chunk_rest(s__14164__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14166),null);
}
} else {
var interval = cljs.core.first(s__14164__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__14168 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14168) : re_frame.core.subscribe.call(null,G__14168));
})())),mecca.music.root_note_midi_num())),(interval - (1))),mecca$events$iter__14163(cljs.core.rest(s__14164__$2)));
}
} else {
return null;
}
break;
}
});})(vec__14160,_,bassline))
,null,null));
});})(vec__14160,_,bassline))
;
return iter__4324__auto__(bassline);
})()));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timer,(function (db,p__14170){
var vec__14171 = p__14170;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14171,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14171,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time,new_time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_on,(function (db,p__14174){
var vec__14175 = p__14174;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14175,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14175,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_toggle,(function (db,p__14178){
var vec__14179 = p__14178;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14179,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14179,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mecca.music.audiocontext).state,"suspended")){
cljs.core.deref(mecca.music.audiocontext).resume();
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$update_DASH_focus_DASH_note,(function (db,p__14182){
var vec__14183 = p__14182;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14183,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14183,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$focused_DASH_note_DASH_pos,pos);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_instrument,(function (db,p__14186){
var vec__14187 = p__14186;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14187,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14187,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$instrument,instrument);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_off,(function (db,p__14190){
var vec__14191 = p__14190;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14191,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14191,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_scale,(function (db,p__14194){
var vec__14195 = p__14194;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14195,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14195,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$scale,scale);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_position,(function (db,p__14198){
var vec__14199 = p__14198;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14199,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14199,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_editor,(function (db,p__14202){
var vec__14203 = p__14202;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14203,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14203,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$retract_DASH_editor,(function (db,p__14206){
var vec__14207 = p__14206;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14207,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14207,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.dec);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_position,(function (db,p__14210){
var vec__14211 = p__14210;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14211,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14211,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_tempo,(function (db,p__14214){
var vec__14215 = p__14214;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14215,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14215,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_octave,(function (db,p__14218){
var vec__14219 = p__14218;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14219,(0),null);
var octave = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14219,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$octave,octave);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_key,(function (db,p__14222){
var vec__14223 = p__14222;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14223,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14223,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$key,key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tick_BANG_,(function (db,p__14227){
var vec__14228 = p__14227;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14228,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14228,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_run,((function (vec__14228,_,___$1){
return (function (p1__14226_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__14226_SHARP_,(3))){
return (1);
} else {
return (p1__14226_SHARP_ + (1));
}
});})(vec__14228,_,___$1))
),cljs.core.cst$kw$mario_DASH_jump,cljs.core.inc),cljs.core.cst$kw$time,mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jump_DASH_reset,(function (db,p__14231){
var vec__14232 = p__14231;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14232,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14232,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_jump,(0));
}));
