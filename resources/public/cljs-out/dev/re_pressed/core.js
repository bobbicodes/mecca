// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('re_pressed.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('re_pressed.impl');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$re_DASH_pressed$core_SLASH_add_DASH_keyboard_DASH_event_DASH_listener,(function (_,p__19810){
var vec__19811 = p__19810;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19811,(0),null);
var event_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19811,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keyboard_DASH_event,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event_DASH_type,event_type], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$re_DASH_pressed$core_SLASH_set_DASH_keydown_DASH_rules,(function (p__19814,p__19815){
var map__19816 = p__19814;
var map__19816__$1 = ((((!((map__19816 == null)))?(((((map__19816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19816):map__19816);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19816__$1,cljs.core.cst$kw$db);
var vec__19817 = p__19815;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19817,(0),null);
var map__19820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19817,(1),null);
var map__19820__$1 = ((((!((map__19820 == null)))?(((((map__19820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19820):map__19820);
var opts = map__19820__$1;
var event_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19820__$1,cljs.core.cst$kw$event_DASH_keys);
var clear_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19820__$1,cljs.core.cst$kw$clear_DASH_keys);
var always_listen_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19820__$1,cljs.core.cst$kw$always_DASH_listen_DASH_keys);
var prevent_default_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19820__$1,cljs.core.cst$kw$prevent_DASH_default_DASH_keys);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keydown,cljs.core.cst$kw$keys], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keydown,cljs.core.cst$kw$event_DASH_keys], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keydown,cljs.core.cst$kw$clear_DASH_keys], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keydown,cljs.core.cst$kw$always_DASH_listen_DASH_keys], null),always_listen_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keydown,cljs.core.cst$kw$prevent_DASH_default_DASH_keys], null),prevent_default_keys)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$re_DASH_pressed$core_SLASH_set_DASH_keypress_DASH_rules,(function (p__19823,p__19824){
var map__19825 = p__19823;
var map__19825__$1 = ((((!((map__19825 == null)))?(((((map__19825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19825):map__19825);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19825__$1,cljs.core.cst$kw$db);
var vec__19826 = p__19824;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19826,(0),null);
var map__19829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19826,(1),null);
var map__19829__$1 = ((((!((map__19829 == null)))?(((((map__19829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19829):map__19829);
var opts = map__19829__$1;
var event_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19829__$1,cljs.core.cst$kw$event_DASH_keys);
var clear_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19829__$1,cljs.core.cst$kw$clear_DASH_keys);
var always_listen_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19829__$1,cljs.core.cst$kw$always_DASH_listen_DASH_keys);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keypress,cljs.core.cst$kw$keys], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keypress,cljs.core.cst$kw$event_DASH_keys], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keypress,cljs.core.cst$kw$clear_DASH_keys], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keypress,cljs.core.cst$kw$always_DASH_listen_DASH_keys], null),always_listen_keys)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$re_DASH_pressed$core_SLASH_set_DASH_keyup_DASH_rules,(function (p__19832,p__19833){
var map__19834 = p__19832;
var map__19834__$1 = ((((!((map__19834 == null)))?(((((map__19834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19834):map__19834);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19834__$1,cljs.core.cst$kw$db);
var vec__19835 = p__19833;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19835,(0),null);
var map__19838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19835,(1),null);
var map__19838__$1 = ((((!((map__19838 == null)))?(((((map__19838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19838):map__19838);
var opts = map__19838__$1;
var event_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19838__$1,cljs.core.cst$kw$event_DASH_keys);
var clear_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19838__$1,cljs.core.cst$kw$clear_DASH_keys);
var always_listen_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19838__$1,cljs.core.cst$kw$always_DASH_listen_DASH_keys);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keyup,cljs.core.cst$kw$keys], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keyup,cljs.core.cst$kw$event_DASH_keys], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keyup,cljs.core.cst$kw$clear_DASH_keys], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keyup,cljs.core.cst$kw$always_DASH_listen_DASH_keys], null),always_listen_keys)], null);
}));
