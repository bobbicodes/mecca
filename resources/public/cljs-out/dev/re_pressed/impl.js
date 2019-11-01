// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('re_pressed.impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('goog.events');
re_pressed.impl.ns_root = "re-pressed.core/";
re_pressed.impl.max_record = (25);
re_pressed.impl.modifier_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(91),null,(17),null,(16),null,(18),null], null), null);
re_pressed.impl.__GT_ns_keyword = (function re_pressed$impl$__GT_ns_keyword(event_type){
return (function() {
var re_pressed$impl$__GT_ns_keyword_$_ns_keyword = null;
var re_pressed$impl$__GT_ns_keyword_$_ns_keyword__0 = (function (){
return re_pressed$impl$__GT_ns_keyword_$_ns_keyword.cljs$core$IFn$_invoke$arity$1(null);
});
var re_pressed$impl$__GT_ns_keyword_$_ns_keyword__1 = (function (suffix){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_pressed.impl.ns_root),cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_type),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));
});
re_pressed$impl$__GT_ns_keyword_$_ns_keyword = function(suffix){
switch(arguments.length){
case 0:
return re_pressed$impl$__GT_ns_keyword_$_ns_keyword__0.call(this);
case 1:
return re_pressed$impl$__GT_ns_keyword_$_ns_keyword__1.call(this,suffix);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_pressed$impl$__GT_ns_keyword_$_ns_keyword.cljs$core$IFn$_invoke$arity$0 = re_pressed$impl$__GT_ns_keyword_$_ns_keyword__0;
re_pressed$impl$__GT_ns_keyword_$_ns_keyword.cljs$core$IFn$_invoke$arity$1 = re_pressed$impl$__GT_ns_keyword_$_ns_keyword__1;
return re_pressed$impl$__GT_ns_keyword_$_ns_keyword;
})()
});
re_pressed.impl.is_key_QMARK_ = (function re_pressed$impl$is_key_QMARK_(recent_key,key_map){
return cljs.core.every_QMARK_((function (p__19690){
var vec__19691 = p__19690;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19691,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19691,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(recent_key,k),v);
}),key_map);
});
re_pressed.impl.register_subs = (function re_pressed$impl$register_subs(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
var G__19694_19704 = (ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-keys") : ns_keyword.call(null,"-keys"));
var G__19695_19705 = ((function (G__19694_19704,ns_keyword){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$0 ? ns_keyword.cljs$core$IFn$_invoke$arity$0() : ns_keyword.call(null)),cljs.core.cst$kw$keys], null));
});})(G__19694_19704,ns_keyword))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19694_19704,G__19695_19705) : re_frame.core.reg_sub.call(null,G__19694_19704,G__19695_19705));

var G__19696_19706 = (ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-event-keys") : ns_keyword.call(null,"-event-keys"));
var G__19697_19707 = ((function (G__19696_19706,ns_keyword){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$0 ? ns_keyword.cljs$core$IFn$_invoke$arity$0() : ns_keyword.call(null)),cljs.core.cst$kw$event_DASH_keys], null));
});})(G__19696_19706,ns_keyword))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19696_19706,G__19697_19707) : re_frame.core.reg_sub.call(null,G__19696_19706,G__19697_19707));

var G__19698_19708 = (ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-clear-keys") : ns_keyword.call(null,"-clear-keys"));
var G__19699_19709 = ((function (G__19698_19708,ns_keyword){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$0 ? ns_keyword.cljs$core$IFn$_invoke$arity$0() : ns_keyword.call(null)),cljs.core.cst$kw$clear_DASH_keys], null));
});})(G__19698_19708,ns_keyword))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19698_19708,G__19699_19709) : re_frame.core.reg_sub.call(null,G__19698_19708,G__19699_19709));

var G__19700_19710 = (ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-always-listen-keys") : ns_keyword.call(null,"-always-listen-keys"));
var G__19701_19711 = ((function (G__19700_19710,ns_keyword){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$0 ? ns_keyword.cljs$core$IFn$_invoke$arity$0() : ns_keyword.call(null)),cljs.core.cst$kw$always_DASH_listen_DASH_keys], null));
});})(G__19700_19710,ns_keyword))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19700_19710,G__19701_19711) : re_frame.core.reg_sub.call(null,G__19700_19710,G__19701_19711));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
var G__19702 = (ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-prevent-default-keys") : ns_keyword.call(null,"-prevent-default-keys"));
var G__19703 = ((function (G__19702,ns_keyword){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$0 ? ns_keyword.cljs$core$IFn$_invoke$arity$0() : ns_keyword.call(null)),cljs.core.cst$kw$prevent_DASH_default_DASH_keys], null));
});})(G__19702,ns_keyword))
;
return (re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19702,G__19703) : re_frame.core.reg_sub.call(null,G__19702,G__19703));
} else {
return null;
}
});
re_pressed.impl.__GT_set_key_BANG_ = (function re_pressed$impl$__GT_set_key_BANG_(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
return ((function (ns_keyword){
return (function re_pressed$impl$__GT_set_key_BANG__$_set_key_BANG_(p__19712,p__19713){
var map__19714 = p__19712;
var map__19714__$1 = ((((!((map__19714 == null)))?(((((map__19714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19714):map__19714);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19714__$1,cljs.core.cst$kw$db);
var vec__19715 = p__19713;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19715,(0),null);
var key_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19715,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$0 ? ns_keyword.cljs$core$IFn$_invoke$arity$0() : ns_keyword.call(null)),cljs.core.cst$kw$keys], null),((function (map__19714,map__19714__$1,db,vec__19715,_,key_map,ns_keyword){
return (function (key_maps){
var keys = (cljs.core.truth_(key_map)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__3949__auto__ = key_maps;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),key_map):key_maps);

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take_last(re_pressed.impl.max_record,keys));
});})(map__19714,map__19714__$1,db,vec__19715,_,key_map,ns_keyword))
)], null);
});
;})(ns_keyword))
});
re_pressed.impl.__GT_clear_keys_BANG_ = (function re_pressed$impl$__GT_clear_keys_BANG_(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
return ((function (ns_keyword){
return (function re_pressed$impl$__GT_clear_keys_BANG__$_clear_keys_BANG_(p__19719,p__19720){
var map__19721 = p__19719;
var map__19721__$1 = ((((!((map__19721 == null)))?(((((map__19721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19721):map__19721);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19721__$1,cljs.core.cst$kw$db);
var vec__19722 = p__19720;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19722,(0),null);
var key_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19722,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$0 ? ns_keyword.cljs$core$IFn$_invoke$arity$0() : ns_keyword.call(null)),cljs.core.cst$kw$keys], null),cljs.core.PersistentVector.EMPTY)], null);
});
;})(ns_keyword))
});
re_pressed.impl.prevent_default_keys_BANG_ = (function re_pressed$impl$prevent_default_keys_BANG_(_,p__19726){
var vec__19727 = p__19726;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19727,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19727,(1),null);
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_pressed.impl.ns_root),"prevent-default"].join(''));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,e]);
});
re_pressed.impl.register_events = (function re_pressed$impl$register_events(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-set-key") : ns_keyword.call(null,"-set-key")),re_pressed.impl.__GT_set_key_BANG_(event_type));

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-clear-keys") : ns_keyword.call(null,"-clear-keys")),re_pressed.impl.__GT_clear_keys_BANG_(event_type));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-prevent-default-keys") : ns_keyword.call(null,"-prevent-default-keys")),re_pressed.impl.prevent_default_keys_BANG_);
} else {
return null;
}
});
re_pressed.impl.register_effects = (function re_pressed$impl$register_effects(event_type){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
var G__19730 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_pressed.impl.ns_root),"prevent-default"].join(''));
var G__19731 = ((function (G__19730){
return (function (e){
return e.preventDefault();
});})(G__19730))
;
return (re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19730,G__19731) : re_frame.core.reg_fx.call(null,G__19730,G__19731));
} else {
return null;
}
});
var G__19737_19768 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_pressed.impl.ns_root),"keyboard-event"].join(''));
var G__19738_19769 = ((function (G__19737_19768){
return (function (p__19739){
var map__19740 = p__19739;
var map__19740__$1 = ((((!((map__19740 == null)))?(((((map__19740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19740):map__19740);
var event_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19740__$1,cljs.core.cst$kw$event_DASH_type);
re_pressed.impl.register_subs(event_type);

re_pressed.impl.register_events(event_type);

re_pressed.impl.register_effects(event_type);

var G__19742 = document;
var G__19743 = event_type;
var G__19744 = ((function (G__19742,G__19743,map__19740,map__19740__$1,event_type,G__19737_19768){
return (function (e){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
var e_key = e.keyCode;
var modifier_key_QMARK_ = (re_pressed.impl.modifier_keys.cljs$core$IFn$_invoke$arity$1 ? re_pressed.impl.modifier_keys.cljs$core$IFn$_invoke$arity$1(e_key) : re_pressed.impl.modifier_keys.call(null,e_key));
var tag_name = e.target.tagName;
var entering_input_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["SELECT",null,"INPUT",null,"TEXTAREA",null], null), null),tag_name);
var hit_key = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$altKey,e.altKey,cljs.core.cst$kw$ctrlKey,e.ctrlKey,cljs.core.cst$kw$metaKey,e.metaKey,cljs.core.cst$kw$shiftKey,e.shiftKey,cljs.core.cst$kw$keyCode,e.keyCode], null);
var always_listen_keys = cljs.core.deref((function (){var G__19745 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-always-listen-keys") : ns_keyword.call(null,"-always-listen-keys"))], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19745) : re_frame.core.subscribe.call(null,G__19745));
})());
var always_listen_QMARK_ = cljs.core.some(((function (ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,G__19742,G__19743,map__19740,map__19740__$1,event_type,G__19737_19768){
return (function (p1__19732_SHARP_){
return re_pressed.impl.is_key_QMARK_(hit_key,p1__19732_SHARP_);
});})(ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,G__19742,G__19743,map__19740,map__19740__$1,event_type,G__19737_19768))
,always_listen_keys);
if(cljs.core.truth_((function (){var or__3949__auto__ = ((cljs.core.not(modifier_key_QMARK_)) && (!(entering_input_QMARK_)));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return always_listen_QMARK_;
}
})())){
var G__19746_19770 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-set-key") : ns_keyword.call(null,"-set-key")),hit_key], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__19746_19770) : re_frame.core.dispatch_sync.call(null,G__19746_19770));

var recent_keys = cljs.core.deref((function (){var G__19750 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-keys") : ns_keyword.call(null,"-keys"))], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19750) : re_frame.core.subscribe.call(null,G__19750));
})());
var event_keys = cljs.core.deref((function (){var G__19751 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-event-keys") : ns_keyword.call(null,"-event-keys"))], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19751) : re_frame.core.subscribe.call(null,G__19751));
})());
var clear_keys = cljs.core.deref((function (){var G__19752 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-clear-keys") : ns_keyword.call(null,"-clear-keys"))], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19752) : re_frame.core.subscribe.call(null,G__19752));
})());
var recent_key = cljs.core.last(recent_keys);
var is_key_sequence_QMARK_ = ((function (recent_keys,event_keys,clear_keys,recent_key,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,G__19742,G__19743,map__19740,map__19740__$1,event_type,G__19737_19768){
return (function (key_maps){
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (recent_keys,event_keys,clear_keys,recent_key,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,G__19742,G__19743,map__19740,map__19740__$1,event_type,G__19737_19768){
return (function (p1__19733_SHARP_,p2__19734_SHARP_){
return re_pressed.impl.is_key_QMARK_(p1__19733_SHARP_,p2__19734_SHARP_);
});})(recent_keys,event_keys,clear_keys,recent_key,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,G__19742,G__19743,map__19740,map__19740__$1,event_type,G__19737_19768))
,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse(recent_keys),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(re_pressed.impl.max_record,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.reverse(key_maps)));
});})(recent_keys,event_keys,clear_keys,recent_key,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,G__19742,G__19743,map__19740,map__19740__$1,event_type,G__19737_19768))
;
var check_events = cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (recent_keys,event_keys,clear_keys,recent_key,is_key_sequence_QMARK_,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,G__19742,G__19743,map__19740,map__19740__$1,event_type,G__19737_19768){
return (function re_pressed$impl$iter__19753(s__19754){
return (new cljs.core.LazySeq(null,((function (recent_keys,event_keys,clear_keys,recent_key,is_key_sequence_QMARK_,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,G__19742,G__19743,map__19740,map__19740__$1,event_type,G__19737_19768){
return (function (){
var s__19754__$1 = s__19754;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__19754__$1);
if(temp__5457__auto__){
var s__19754__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19754__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__19754__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__19756 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__19755 = (0);
while(true){
if((i__19755 < size__4323__auto__)){
var vec__19757 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__19755);
var seq__19758 = cljs.core.seq(vec__19757);
var first__19759 = cljs.core.first(seq__19758);
var seq__19758__$1 = cljs.core.next(seq__19758);
var trigger_event = first__19759;
var ks = seq__19758__$1;
cljs.core.chunk_append(b__19756,(function (){var triggered_QMARK_ = cljs.core.some(is_key_sequence_QMARK_,ks);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[trigger_event,triggered_QMARK_],null));
})());

var G__19771 = (i__19755 + (1));
i__19755 = G__19771;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19756),re_pressed$impl$iter__19753(cljs.core.chunk_rest(s__19754__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19756),null);
}
} else {
var vec__19760 = cljs.core.first(s__19754__$2);
var seq__19761 = cljs.core.seq(vec__19760);
var first__19762 = cljs.core.first(seq__19761);
var seq__19761__$1 = cljs.core.next(seq__19761);
var trigger_event = first__19762;
var ks = seq__19761__$1;
return cljs.core.cons((function (){var triggered_QMARK_ = cljs.core.some(is_key_sequence_QMARK_,ks);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[trigger_event,triggered_QMARK_],null));
})(),re_pressed$impl$iter__19753(cljs.core.rest(s__19754__$2)));
}
} else {
return null;
}
break;
}
});})(recent_keys,event_keys,clear_keys,recent_key,is_key_sequence_QMARK_,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,G__19742,G__19743,map__19740,map__19740__$1,event_type,G__19737_19768))
,null,null));
});})(recent_keys,event_keys,clear_keys,recent_key,is_key_sequence_QMARK_,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,G__19742,G__19743,map__19740,map__19740__$1,event_type,G__19737_19768))
;
return iter__4324__auto__(event_keys);
})());
var vec__19747 = (function (){var G__19763 = check_events;
var G__19763__$1 = (((G__19763 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__19763,recent_keys,event_keys,clear_keys,recent_key,is_key_sequence_QMARK_,check_events,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,G__19742,G__19743,map__19740,map__19740__$1,event_type,G__19737_19768){
return (function (p1__19735_SHARP_){
return cljs.core.second(p1__19735_SHARP_) === true;
});})(G__19763,recent_keys,event_keys,clear_keys,recent_key,is_key_sequence_QMARK_,check_events,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,G__19742,G__19743,map__19740,map__19740__$1,event_type,G__19737_19768))
,G__19763));
if((G__19763__$1 == null)){
return null;
} else {
return cljs.core.first(G__19763__$1);
}
})();
var triggered_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19747,(0),null);
var event_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19747,(1),null);
var clear_QMARK_ = cljs.core.some(is_key_sequence_QMARK_,clear_keys);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
var prevent_default_keys_19772 = cljs.core.deref((function (){var G__19764 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-prevent-default-keys") : ns_keyword.call(null,"-prevent-default-keys"))], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19764) : re_frame.core.subscribe.call(null,G__19764));
})());
var prevent_default_QMARK__19773 = cljs.core.some(((function (prevent_default_keys_19772,recent_keys,event_keys,clear_keys,recent_key,is_key_sequence_QMARK_,check_events,vec__19747,triggered_event,event_QMARK_,clear_QMARK_,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,G__19742,G__19743,map__19740,map__19740__$1,event_type,G__19737_19768){
return (function (p1__19736_SHARP_){
return re_pressed.impl.is_key_QMARK_(recent_key,p1__19736_SHARP_);
});})(prevent_default_keys_19772,recent_keys,event_keys,clear_keys,recent_key,is_key_sequence_QMARK_,check_events,vec__19747,triggered_event,event_QMARK_,clear_QMARK_,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,G__19742,G__19743,map__19740,map__19740__$1,event_type,G__19737_19768))
,prevent_default_keys_19772);
if(cljs.core.truth_(prevent_default_QMARK__19773)){
var G__19765_19774 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-prevent-default-keys") : ns_keyword.call(null,"-prevent-default-keys")),e], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__19765_19774) : re_frame.core.dispatch_sync.call(null,G__19765_19774));
} else {
}
} else {
}

if(cljs.core.truth_(clear_QMARK_)){
var G__19766 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-clear-keys") : ns_keyword.call(null,"-clear-keys"))], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__19766) : re_frame.core.dispatch_sync.call(null,G__19766));
} else {
if(cljs.core.truth_(event_QMARK_)){
var G__19767 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(triggered_event,e,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([recent_keys], 0));
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__19767) : re_frame.core.dispatch_sync.call(null,G__19767));
} else {
return null;

}
}
} else {
return null;
}
});})(G__19742,G__19743,map__19740,map__19740__$1,event_type,G__19737_19768))
;
return goog.events.listen(G__19742,G__19743,G__19744);
});})(G__19737_19768))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19737_19768,G__19738_19769) : re_frame.core.reg_fx.call(null,G__19737_19768,G__19738_19769));
