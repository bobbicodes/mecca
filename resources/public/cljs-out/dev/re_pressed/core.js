// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('re_pressed.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('re_pressed.impl');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$re_DASH_pressed$core_SLASH_add_DASH_keyboard_DASH_event_DASH_listener,(function (_,p__19811){
var vec__19812 = p__19811;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19812,(0),null);
var event_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19812,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keyboard_DASH_event,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event_DASH_type,event_type], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$re_DASH_pressed$core_SLASH_set_DASH_keydown_DASH_rules,(function (p__19815,p__19816){
var map__19817 = p__19815;
var map__19817__$1 = ((((!((map__19817 == null)))?(((((map__19817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19817):map__19817);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19817__$1,cljs.core.cst$kw$db);
var vec__19818 = p__19816;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19818,(0),null);
var map__19821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19818,(1),null);
var map__19821__$1 = ((((!((map__19821 == null)))?(((((map__19821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19821):map__19821);
var opts = map__19821__$1;
var event_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19821__$1,cljs.core.cst$kw$event_DASH_keys);
var clear_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19821__$1,cljs.core.cst$kw$clear_DASH_keys);
var always_listen_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19821__$1,cljs.core.cst$kw$always_DASH_listen_DASH_keys);
var prevent_default_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19821__$1,cljs.core.cst$kw$prevent_DASH_default_DASH_keys);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keydown,cljs.core.cst$kw$keys], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keydown,cljs.core.cst$kw$event_DASH_keys], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keydown,cljs.core.cst$kw$clear_DASH_keys], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keydown,cljs.core.cst$kw$always_DASH_listen_DASH_keys], null),always_listen_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keydown,cljs.core.cst$kw$prevent_DASH_default_DASH_keys], null),prevent_default_keys)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$re_DASH_pressed$core_SLASH_set_DASH_keypress_DASH_rules,(function (p__19824,p__19825){
var map__19826 = p__19824;
var map__19826__$1 = ((((!((map__19826 == null)))?(((((map__19826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19826):map__19826);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19826__$1,cljs.core.cst$kw$db);
var vec__19827 = p__19825;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19827,(0),null);
var map__19830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19827,(1),null);
var map__19830__$1 = ((((!((map__19830 == null)))?(((((map__19830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19830):map__19830);
var opts = map__19830__$1;
var event_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19830__$1,cljs.core.cst$kw$event_DASH_keys);
var clear_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19830__$1,cljs.core.cst$kw$clear_DASH_keys);
var always_listen_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19830__$1,cljs.core.cst$kw$always_DASH_listen_DASH_keys);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keypress,cljs.core.cst$kw$keys], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keypress,cljs.core.cst$kw$event_DASH_keys], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keypress,cljs.core.cst$kw$clear_DASH_keys], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keypress,cljs.core.cst$kw$always_DASH_listen_DASH_keys], null),always_listen_keys)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$re_DASH_pressed$core_SLASH_set_DASH_keyup_DASH_rules,(function (p__19833,p__19834){
var map__19835 = p__19833;
var map__19835__$1 = ((((!((map__19835 == null)))?(((((map__19835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19835):map__19835);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19835__$1,cljs.core.cst$kw$db);
var vec__19836 = p__19834;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19836,(0),null);
var map__19839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19836,(1),null);
var map__19839__$1 = ((((!((map__19839 == null)))?(((((map__19839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19839):map__19839);
var opts = map__19839__$1;
var event_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19839__$1,cljs.core.cst$kw$event_DASH_keys);
var clear_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19839__$1,cljs.core.cst$kw$clear_DASH_keys);
var always_listen_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19839__$1,cljs.core.cst$kw$always_DASH_listen_DASH_keys);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keyup,cljs.core.cst$kw$keys], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keyup,cljs.core.cst$kw$event_DASH_keys], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keyup,cljs.core.cst$kw$clear_DASH_keys], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_pressed$core_SLASH_keyup,cljs.core.cst$kw$always_DASH_listen_DASH_keys], null),always_listen_keys)], null);
}));
