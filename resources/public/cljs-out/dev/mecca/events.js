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
goog.require('goog.events');
goog.require('goog.events.EventType');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize_DASH_db,(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.cst$kw$instrument,cljs.core.cst$kw$key,cljs.core.cst$kw$mario_DASH_jump,cljs.core.cst$kw$time,cljs.core.cst$kw$play_DASH_start,cljs.core.cst$kw$mario_DASH_run,cljs.core.cst$kw$jumping_QMARK_,cljs.core.cst$kw$time_DASH_signature,cljs.core.cst$kw$playing_QMARK_,cljs.core.cst$kw$instruments,cljs.core.cst$kw$mario_DASH_y,cljs.core.cst$kw$bassline,cljs.core.cst$kw$lead,cljs.core.cst$kw$next_DASH_note_DASH_time,cljs.core.cst$kw$focused_DASH_note_DASH_pos,cljs.core.cst$kw$tempo,cljs.core.cst$kw$drums,cljs.core.cst$kw$mario_DASH_x,cljs.core.cst$kw$array_DASH_buffer,cljs.core.cst$kw$current_DASH_position,cljs.core.cst$kw$notes_DASH_in_DASH_queue],[(1),(1),"C",(0),(0),(0),(1),false,(4),false,cljs.core.PersistentVector.EMPTY,(59),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,0.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),(120),cljs.core.PersistentVector.EMPTY,(54),null,(0),cljs.core.PersistentVector.EMPTY]);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$add_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("add note"),(function (db,p__19614){
var vec__19615 = p__19614;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19615,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19615,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19615,(2),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19615,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mecca.music.audiocontext).state,"suspended")){
cljs.core.deref(mecca.music.audiocontext).resume();
} else {
}

mecca.music.play_sample(instrument,pitch);

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$instruments,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$instrument,instrument,cljs.core.cst$kw$pitch,pitch], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$remove_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("remove note"),(function (db,p__19619){
var vec__19620 = p__19619;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19620,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19620,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19620,(2),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19620,(3),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(instrument),((function (vec__19620,_,instrument,time,pitch){
return (function (notes){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__19620,_,instrument,time,pitch){
return (function (p1__19618_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(time,cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__19618_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((77) - pitch),cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(p1__19618_SHARP_))));
});})(vec__19620,_,instrument,time,pitch))
,notes);
});})(vec__19620,_,instrument,time,pitch))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_time_DASH_signature,(function (db,p__19623){
var vec__19624 = p__19623;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19624,(0),null);
var beats_per_measure = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19624,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time_DASH_signature,beats_per_measure);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timer,(function (db,p__19627){
var vec__19628 = p__19627;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19628,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19628,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time,new_time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_on,(function (db,p__19631){
var vec__19632 = p__19631;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19632,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19632,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$play_DASH_start,cljs.core.deref(mecca.music.audiocontext).currentTime),cljs.core.cst$kw$playing_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pause,(function (db,p__19635){
var vec__19636 = p__19635;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19636,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19636,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stop,(function (db,p__19639){
var vec__19640 = p__19639;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19640,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19640,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false),cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$update_DASH_focus_DASH_note,(function (db,p__19643){
var vec__19644 = p__19643;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19644,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19644,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$focused_DASH_note_DASH_pos,pos);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_instrument,(function (db,p__19647){
var vec__19648 = p__19647;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19648,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19648,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$instrument,instrument);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_off,(function (db,p__19651){
var vec__19652 = p__19651;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19652,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19652,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_position,(function (db,p__19657){
var vec__19658 = p__19657;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19658,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19658,(1),null);
var notes = cljs.core.deref((function (){var G__19661 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instruments], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19661) : re_frame.core.subscribe.call(null,G__19661));
})());
var beat = cljs.core.deref((function (){var G__19662 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19662) : re_frame.core.subscribe.call(null,G__19662));
})());
var to_play = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (notes,beat,vec__19658,_,___$1){
return (function (p1__19655_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((1) + beat),cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__19655_SHARP_));
});})(notes,beat,vec__19658,_,___$1))
,notes);
cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (notes,beat,to_play,vec__19658,_,___$1){
return (function mecca$events$iter__19663(s__19664){
return (new cljs.core.LazySeq(null,((function (notes,beat,to_play,vec__19658,_,___$1){
return (function (){
var s__19664__$1 = s__19664;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__19664__$1);
if(temp__5457__auto__){
var s__19664__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19664__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__19664__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__19666 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__19665 = (0);
while(true){
if((i__19665 < size__4323__auto__)){
var map__19667 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__19665);
var map__19667__$1 = ((((!((map__19667 == null)))?(((((map__19667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19667):map__19667);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19667__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19667__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__19666,mecca.music.play_sample(instrument,pitch));

var G__19671 = (i__19665 + (1));
i__19665 = G__19671;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19666),mecca$events$iter__19663(cljs.core.chunk_rest(s__19664__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19666),null);
}
} else {
var map__19669 = cljs.core.first(s__19664__$2);
var map__19669__$1 = ((((!((map__19669 == null)))?(((((map__19669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19669):map__19669);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19669__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19669__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(mecca.music.play_sample(instrument,pitch),mecca$events$iter__19663(cljs.core.rest(s__19664__$2)));
}
} else {
return null;
}
break;
}
});})(notes,beat,to_play,vec__19658,_,___$1))
,null,null));
});})(notes,beat,to_play,vec__19658,_,___$1))
;
return iter__4324__auto__(to_play);
})());

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,((function (notes,beat,to_play,vec__19658,_,___$1){
return (function (p1__19656_SHARP_){
return (0.5 + p1__19656_SHARP_);
});})(notes,beat,to_play,vec__19658,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_editor,(function (db,p__19673){
var vec__19674 = p__19673;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19674,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19674,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,((function (vec__19674,_,___$1){
return (function (p1__19672_SHARP_){
return (0.5 + p1__19672_SHARP_);
});})(vec__19674,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$move_DASH_mario,(function (db,p__19677){
var vec__19678 = p__19677;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19678,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19678,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_x,x);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_editor,(function (db,p__19681){
var vec__19682 = p__19681;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19682,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19682,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,(1));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$retract_DASH_editor,(function (db,p__19686){
var vec__19687 = p__19686;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19687,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19687,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,((function (vec__19687,_,___$1){
return (function (p1__19685_SHARP_){
return (p1__19685_SHARP_ - 0.5);
});})(vec__19687,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_position,(function (db,p__19690){
var vec__19691 = p__19690;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19691,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19691,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_tempo,(function (db,p__19694){
var vec__19695 = p__19694;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19695,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19695,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$inc_DASH_tempo,(function (db,p__19699){
var vec__19700 = p__19699;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19700,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19700,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,((function (vec__19700,_,tempo){
return (function (p1__19698_SHARP_){
return ((8) + p1__19698_SHARP_);
});})(vec__19700,_,tempo))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dec_DASH_tempo,(function (db,p__19704){
var vec__19705 = p__19704;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19705,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19705,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,((function (vec__19705,_,tempo){
return (function (p1__19703_SHARP_){
return (p1__19703_SHARP_ - (8));
});})(vec__19705,_,tempo))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_key,(function (db,p__19708){
var vec__19709 = p__19708;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19709,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19709,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$key,key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tick_BANG_,(function (db,p__19713){
var vec__19714 = p__19713;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19714,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19714,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_run,((function (vec__19714,_,___$1){
return (function (p1__19712_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__19712_SHARP_,(3))){
return (1);
} else {
return (p1__19712_SHARP_ + (1));
}
});})(vec__19714,_,___$1))
),cljs.core.cst$kw$mario_DASH_jump,cljs.core.inc),cljs.core.cst$kw$time,mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jump_DASH_reset,(function (db,p__19717){
var vec__19718 = p__19717;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19718,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19718,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_jump,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jump_BANG_,(function (db,p__19721){
var vec__19722 = p__19721;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19722,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19722,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_y,(50));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$down_BANG_,(function (db,p__19725){
var vec__19726 = p__19725;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19726,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19726,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_y,(59));
}));
