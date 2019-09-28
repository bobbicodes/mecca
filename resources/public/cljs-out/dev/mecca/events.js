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
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.cst$kw$instrument,cljs.core.cst$kw$key,cljs.core.cst$kw$mario_DASH_jump,cljs.core.cst$kw$time,cljs.core.cst$kw$mario_DASH_run,cljs.core.cst$kw$playing_QMARK_,cljs.core.cst$kw$instruments,cljs.core.cst$kw$mario_DASH_y,cljs.core.cst$kw$bassline,cljs.core.cst$kw$lead,cljs.core.cst$kw$focused_DASH_note_DASH_pos,cljs.core.cst$kw$tempo,cljs.core.cst$kw$drums,cljs.core.cst$kw$mario_DASH_x,cljs.core.cst$kw$array_DASH_buffer,cljs.core.cst$kw$current_DASH_position],[(1),(1),"C",(0),(0),(1),false,cljs.core.PersistentVector.EMPTY,41.5,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),(180),cljs.core.PersistentVector.EMPTY,(54),null,(0)]);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_sample,(function (p__19932,_){
var map__19933 = p__19932;
var map__19933__$1 = ((((!((map__19933 == null)))?(((((map__19933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19933):map__19933);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19933__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$show_DASH_twirly,true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$uri,"/audio/1.mp3",cljs.core.cst$kw$response_DASH_format,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$arraybuffer,cljs.core.cst$kw$read,ajax.protocols._body,cljs.core.cst$kw$description,"audio",cljs.core.cst$kw$content_DASH_type,"audio/mpeg"], null),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$load_DASH_audio], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$log_DASH_info], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_audio,(function (db,p__19935){
var vec__19936 = p__19935;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19936,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19936,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$array_DASH_buffer,result);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$log_DASH_info,(function (db,p__19939){
var vec__19940 = p__19939;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19940,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19940,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$error_DASH_log,result);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$add_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("add note"),(function (db,p__19943){
var vec__19944 = p__19943;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19944,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19944,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19944,(2),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19944,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mecca.music.audiocontext).state,"suspended")){
cljs.core.deref(mecca.music.audiocontext).resume();
} else {
}

mecca.music.play_sample(instrument,pitch);

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$instruments,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$instrument,instrument,cljs.core.cst$kw$pitch,((77) - pitch)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$remove_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("remove note"),(function (db,p__19948){
var vec__19949 = p__19948;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19949,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19949,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19949,(2),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19949,(3),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(instrument),((function (vec__19949,_,instrument,time,pitch){
return (function (notes){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__19949,_,instrument,time,pitch){
return (function (p1__19947_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(time,cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__19947_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((77) - pitch),cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(p1__19947_SHARP_))));
});})(vec__19949,_,instrument,time,pitch))
,notes);
});})(vec__19949,_,instrument,time,pitch))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$add_DASH_drum_DASH_hit,(function (db,p__19952){
var vec__19953 = p__19952;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19953,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19953,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19953,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,x,cljs.core.cst$kw$duration,(1),cljs.core.cst$kw$pitch,((77) - y)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timer,(function (db,p__19956){
var vec__19957 = p__19956;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19957,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19957,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time,new_time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_on,(function (db,p__19960){
var vec__19961 = p__19960;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19961,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19961,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_toggle,(function (db,p__19964){
var vec__19965 = p__19964;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19965,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19965,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mecca.music.audiocontext).state,"suspended")){
cljs.core.deref(mecca.music.audiocontext).resume();
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$update_DASH_focus_DASH_note,(function (db,p__19968){
var vec__19969 = p__19968;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19969,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19969,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$focused_DASH_note_DASH_pos,pos);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_instrument,(function (db,p__19972){
var vec__19973 = p__19972;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19973,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19973,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$instrument,instrument);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_off,(function (db,p__19976){
var vec__19977 = p__19976;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19977,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19977,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_scale,(function (db,p__19980){
var vec__19981 = p__19980;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19981,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19981,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$scale,scale);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_position,(function (db,p__19984){
var vec__19985 = p__19984;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19985,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19985,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_editor,(function (db,p__19988){
var vec__19989 = p__19988;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19989,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19989,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$retract_DASH_editor,(function (db,p__19992){
var vec__19993 = p__19992;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19993,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19993,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.dec);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_position,(function (db,p__19996){
var vec__19997 = p__19996;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19997,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19997,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_tempo,(function (db,p__20000){
var vec__20001 = p__20000;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20001,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20001,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_octave,(function (db,p__20004){
var vec__20005 = p__20004;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20005,(0),null);
var octave = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20005,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$octave,octave);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_key,(function (db,p__20008){
var vec__20009 = p__20008;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20009,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20009,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$key,key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tick_BANG_,(function (db,p__20013){
var vec__20014 = p__20013;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20014,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20014,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_run,((function (vec__20014,_,___$1){
return (function (p1__20012_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__20012_SHARP_,(3))){
return (1);
} else {
return (p1__20012_SHARP_ + (1));
}
});})(vec__20014,_,___$1))
),cljs.core.cst$kw$mario_DASH_jump,cljs.core.inc),cljs.core.cst$kw$time,mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jump_DASH_reset,(function (db,p__20017){
var vec__20018 = p__20017;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20018,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20018,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_jump,(0));
}));
