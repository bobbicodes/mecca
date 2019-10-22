// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('re_pressed.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('re_pressed.impl');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$re_DASH_pressed$core_SLASH_add_DASH_keyboard_DASH_event_DASH_listener,(function (_,p__20083){
var vec__20084 = p__20083;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20084,(0),null);
var event_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20084,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keyboard_DASH_event,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event_DASH_type,event_type], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$re_DASH_pressed$core_SLASH_set_DASH_keydown_DASH_rules,(function (p__20087,p__20088){
var map__20089 = p__20087;
var map__20089__$1 = ((((!((map__20089 == null)))?(((((map__20089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20089):map__20089);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20089__$1,cljs.core.cst$kw$db);
var vec__20090 = p__20088;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20090,(0),null);
var map__20093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20090,(1),null);
var map__20093__$1 = ((((!((map__20093 == null)))?(((((map__20093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20093):map__20093);
var opts = map__20093__$1;
var event_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20093__$1,cljs.core.cst$kw$event_DASH_keys);
var clear_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20093__$1,cljs.core.cst$kw$clear_DASH_keys);
var always_listen_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20093__$1,cljs.core.cst$kw$always_DASH_listen_DASH_keys);
var prevent_default_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20093__$1,cljs.core.cst$kw$prevent_DASH_default_DASH_keys);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keydown,cljs.core.cst$kw$keys], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keydown,cljs.core.cst$kw$event_DASH_keys], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keydown,cljs.core.cst$kw$clear_DASH_keys], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keydown,cljs.core.cst$kw$always_DASH_listen_DASH_keys], null),always_listen_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keydown,cljs.core.cst$kw$prevent_DASH_default_DASH_keys], null),prevent_default_keys)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$re_DASH_pressed$core_SLASH_set_DASH_keypress_DASH_rules,(function (p__20096,p__20097){
var map__20098 = p__20096;
var map__20098__$1 = ((((!((map__20098 == null)))?(((((map__20098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20098):map__20098);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20098__$1,cljs.core.cst$kw$db);
var vec__20099 = p__20097;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20099,(0),null);
var map__20102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20099,(1),null);
var map__20102__$1 = ((((!((map__20102 == null)))?(((((map__20102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20102):map__20102);
var opts = map__20102__$1;
var event_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20102__$1,cljs.core.cst$kw$event_DASH_keys);
var clear_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20102__$1,cljs.core.cst$kw$clear_DASH_keys);
var always_listen_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20102__$1,cljs.core.cst$kw$always_DASH_listen_DASH_keys);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keypress,cljs.core.cst$kw$keys], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keypress,cljs.core.cst$kw$event_DASH_keys], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keypress,cljs.core.cst$kw$clear_DASH_keys], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keypress,cljs.core.cst$kw$always_DASH_listen_DASH_keys], null),always_listen_keys)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$re_DASH_pressed$core_SLASH_set_DASH_keyup_DASH_rules,(function (p__20105,p__20106){
var map__20107 = p__20105;
var map__20107__$1 = ((((!((map__20107 == null)))?(((((map__20107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20107):map__20107);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20107__$1,cljs.core.cst$kw$db);
var vec__20108 = p__20106;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20108,(0),null);
var map__20111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20108,(1),null);
var map__20111__$1 = ((((!((map__20111 == null)))?(((((map__20111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20111):map__20111);
var opts = map__20111__$1;
var event_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20111__$1,cljs.core.cst$kw$event_DASH_keys);
var clear_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20111__$1,cljs.core.cst$kw$clear_DASH_keys);
var always_listen_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20111__$1,cljs.core.cst$kw$always_DASH_listen_DASH_keys);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keyup,cljs.core.cst$kw$keys], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keyup,cljs.core.cst$kw$event_DASH_keys], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keyup,cljs.core.cst$kw$clear_DASH_keys], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keyup,cljs.core.cst$kw$always_DASH_listen_DASH_keys], null),always_listen_keys)], null);
}));
