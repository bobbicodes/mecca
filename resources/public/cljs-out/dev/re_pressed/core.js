// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('re_pressed.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('re_pressed.impl');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$re_DASH_pressed$core_SLASH_add_DASH_keyboard_DASH_event_DASH_listener,(function (_,p__20024){
var vec__20025 = p__20024;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20025,(0),null);
var event_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20025,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keyboard_DASH_event,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event_DASH_type,event_type], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$re_DASH_pressed$core_SLASH_set_DASH_keydown_DASH_rules,(function (p__20028,p__20029){
var map__20030 = p__20028;
var map__20030__$1 = ((((!((map__20030 == null)))?(((((map__20030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20030):map__20030);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20030__$1,cljs.core.cst$kw$db);
var vec__20031 = p__20029;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20031,(0),null);
var map__20034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20031,(1),null);
var map__20034__$1 = ((((!((map__20034 == null)))?(((((map__20034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20034):map__20034);
var opts = map__20034__$1;
var event_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20034__$1,cljs.core.cst$kw$event_DASH_keys);
var clear_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20034__$1,cljs.core.cst$kw$clear_DASH_keys);
var always_listen_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20034__$1,cljs.core.cst$kw$always_DASH_listen_DASH_keys);
var prevent_default_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20034__$1,cljs.core.cst$kw$prevent_DASH_default_DASH_keys);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keydown,cljs.core.cst$kw$keys], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keydown,cljs.core.cst$kw$event_DASH_keys], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keydown,cljs.core.cst$kw$clear_DASH_keys], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keydown,cljs.core.cst$kw$always_DASH_listen_DASH_keys], null),always_listen_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keydown,cljs.core.cst$kw$prevent_DASH_default_DASH_keys], null),prevent_default_keys)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$re_DASH_pressed$core_SLASH_set_DASH_keypress_DASH_rules,(function (p__20037,p__20038){
var map__20039 = p__20037;
var map__20039__$1 = ((((!((map__20039 == null)))?(((((map__20039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20039):map__20039);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20039__$1,cljs.core.cst$kw$db);
var vec__20040 = p__20038;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20040,(0),null);
var map__20043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20040,(1),null);
var map__20043__$1 = ((((!((map__20043 == null)))?(((((map__20043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20043):map__20043);
var opts = map__20043__$1;
var event_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20043__$1,cljs.core.cst$kw$event_DASH_keys);
var clear_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20043__$1,cljs.core.cst$kw$clear_DASH_keys);
var always_listen_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20043__$1,cljs.core.cst$kw$always_DASH_listen_DASH_keys);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keypress,cljs.core.cst$kw$keys], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keypress,cljs.core.cst$kw$event_DASH_keys], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keypress,cljs.core.cst$kw$clear_DASH_keys], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keypress,cljs.core.cst$kw$always_DASH_listen_DASH_keys], null),always_listen_keys)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$re_DASH_pressed$core_SLASH_set_DASH_keyup_DASH_rules,(function (p__20046,p__20047){
var map__20048 = p__20046;
var map__20048__$1 = ((((!((map__20048 == null)))?(((((map__20048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20048):map__20048);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20048__$1,cljs.core.cst$kw$db);
var vec__20049 = p__20047;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20049,(0),null);
var map__20052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20049,(1),null);
var map__20052__$1 = ((((!((map__20052 == null)))?(((((map__20052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20052):map__20052);
var opts = map__20052__$1;
var event_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20052__$1,cljs.core.cst$kw$event_DASH_keys);
var clear_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20052__$1,cljs.core.cst$kw$clear_DASH_keys);
var always_listen_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20052__$1,cljs.core.cst$kw$always_DASH_listen_DASH_keys);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keyup,cljs.core.cst$kw$keys], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keyup,cljs.core.cst$kw$event_DASH_keys], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keyup,cljs.core.cst$kw$clear_DASH_keys], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keyup,cljs.core.cst$kw$always_DASH_listen_DASH_keys], null),always_listen_keys)], null);
}));
