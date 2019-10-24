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
return cljs.core.every_QMARK_((function (p__19924){
var vec__19925 = p__19924;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19925,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19925,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(recent_key,k),v);
}),key_map);
});
re_pressed.impl.register_subs = (function re_pressed$impl$register_subs(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
var G__19928_19938 = (ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-keys") : ns_keyword.call(null,"-keys"));
var G__19929_19939 = ((function (G__19928_19938,ns_keyword){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$0 ? ns_keyword.cljs$core$IFn$_invoke$arity$0() : ns_keyword.call(null)),cljs.core.cst$kw$keys], null));
});})(G__19928_19938,ns_keyword))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19928_19938,G__19929_19939) : re_frame.core.reg_sub.call(null,G__19928_19938,G__19929_19939));

var G__19930_19940 = (ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-event-keys") : ns_keyword.call(null,"-event-keys"));
var G__19931_19941 = ((function (G__19930_19940,ns_keyword){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$0 ? ns_keyword.cljs$core$IFn$_invoke$arity$0() : ns_keyword.call(null)),cljs.core.cst$kw$event_DASH_keys], null));
});})(G__19930_19940,ns_keyword))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19930_19940,G__19931_19941) : re_frame.core.reg_sub.call(null,G__19930_19940,G__19931_19941));

var G__19932_19942 = (ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-clear-keys") : ns_keyword.call(null,"-clear-keys"));
var G__19933_19943 = ((function (G__19932_19942,ns_keyword){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$0 ? ns_keyword.cljs$core$IFn$_invoke$arity$0() : ns_keyword.call(null)),cljs.core.cst$kw$clear_DASH_keys], null));
});})(G__19932_19942,ns_keyword))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19932_19942,G__19933_19943) : re_frame.core.reg_sub.call(null,G__19932_19942,G__19933_19943));

var G__19934_19944 = (ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-always-listen-keys") : ns_keyword.call(null,"-always-listen-keys"));
var G__19935_19945 = ((function (G__19934_19944,ns_keyword){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$0 ? ns_keyword.cljs$core$IFn$_invoke$arity$0() : ns_keyword.call(null)),cljs.core.cst$kw$always_DASH_listen_DASH_keys], null));
});})(G__19934_19944,ns_keyword))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19934_19944,G__19935_19945) : re_frame.core.reg_sub.call(null,G__19934_19944,G__19935_19945));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
var G__19936 = (ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-prevent-default-keys") : ns_keyword.call(null,"-prevent-default-keys"));
var G__19937 = ((function (G__19936,ns_keyword){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$0 ? ns_keyword.cljs$core$IFn$_invoke$arity$0() : ns_keyword.call(null)),cljs.core.cst$kw$prevent_DASH_default_DASH_keys], null));
});})(G__19936,ns_keyword))
;
return (re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__19936,G__19937) : re_frame.core.reg_sub.call(null,G__19936,G__19937));
} else {
return null;
}
});
re_pressed.impl.__GT_set_key_BANG_ = (function re_pressed$impl$__GT_set_key_BANG_(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
return ((function (ns_keyword){
return (function re_pressed$impl$__GT_set_key_BANG__$_set_key_BANG_(p__19946,p__19947){
var map__19948 = p__19946;
var map__19948__$1 = ((((!((map__19948 == null)))?(((((map__19948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19948):map__19948);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19948__$1,cljs.core.cst$kw$db);
var vec__19949 = p__19947;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19949,(0),null);
var key_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19949,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$0 ? ns_keyword.cljs$core$IFn$_invoke$arity$0() : ns_keyword.call(null)),cljs.core.cst$kw$keys], null),((function (map__19948,map__19948__$1,db,vec__19949,_,key_map,ns_keyword){
return (function (key_maps){
var keys = (cljs.core.truth_(key_map)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__3949__auto__ = key_maps;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),key_map):key_maps);

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take_last(re_pressed.impl.max_record,keys));
});})(map__19948,map__19948__$1,db,vec__19949,_,key_map,ns_keyword))
)], null);
});
;})(ns_keyword))
});
re_pressed.impl.__GT_clear_keys_BANG_ = (function re_pressed$impl$__GT_clear_keys_BANG_(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
return ((function (ns_keyword){
return (function re_pressed$impl$__GT_clear_keys_BANG__$_clear_keys_BANG_(p__19953,p__19954){
var map__19955 = p__19953;
var map__19955__$1 = ((((!((map__19955 == null)))?(((((map__19955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19955):map__19955);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19955__$1,cljs.core.cst$kw$db);
var vec__19956 = p__19954;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19956,(0),null);
var key_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19956,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$0 ? ns_keyword.cljs$core$IFn$_invoke$arity$0() : ns_keyword.call(null)),cljs.core.cst$kw$keys], null),cljs.core.PersistentVector.EMPTY)], null);
});
;})(ns_keyword))
});
re_pressed.impl.prevent_default_keys_BANG_ = (function re_pressed$impl$prevent_default_keys_BANG_(_,p__19960){
var vec__19961 = p__19960;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19961,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19961,(1),null);
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
var G__19964 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_pressed.impl.ns_root),"prevent-default"].join(''));
var G__19965 = ((function (G__19964){
return (function (e){
return e.preventDefault();
});})(G__19964))
;
return (re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19964,G__19965) : re_frame.core.reg_fx.call(null,G__19964,G__19965));
} else {
return null;
}
});
var G__19971_20002 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_pressed.impl.ns_root),"keyboard-event"].join(''));
var G__19972_20003 = ((function (G__19971_20002){
return (function (p__19973){
var map__19974 = p__19973;
var map__19974__$1 = ((((!((map__19974 == null)))?(((((map__19974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19974):map__19974);
var event_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19974__$1,cljs.core.cst$kw$event_DASH_type);
re_pressed.impl.register_subs(event_type);

re_pressed.impl.register_events(event_type);

re_pressed.impl.register_effects(event_type);

var G__19976 = document;
var G__19977 = event_type;
var G__19978 = ((function (G__19976,G__19977,map__19974,map__19974__$1,event_type,G__19971_20002){
return (function (e){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
var e_key = e.keyCode;
var modifier_key_QMARK_ = (re_pressed.impl.modifier_keys.cljs$core$IFn$_invoke$arity$1 ? re_pressed.impl.modifier_keys.cljs$core$IFn$_invoke$arity$1(e_key) : re_pressed.impl.modifier_keys.call(null,e_key));
var tag_name = e.target.tagName;
var entering_input_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["SELECT",null,"INPUT",null,"TEXTAREA",null], null), null),tag_name);
var hit_key = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$altKey,e.altKey,cljs.core.cst$kw$ctrlKey,e.ctrlKey,cljs.core.cst$kw$metaKey,e.metaKey,cljs.core.cst$kw$shiftKey,e.shiftKey,cljs.core.cst$kw$keyCode,e.keyCode], null);
var always_listen_keys = cljs.core.deref((function (){var G__19979 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-always-listen-keys") : ns_keyword.call(null,"-always-listen-keys"))], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19979) : re_frame.core.subscribe.call(null,G__19979));
})());
var always_listen_QMARK_ = cljs.core.some(((function (ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,G__19976,G__19977,map__19974,map__19974__$1,event_type,G__19971_20002){
return (function (p1__19966_SHARP_){
return re_pressed.impl.is_key_QMARK_(hit_key,p1__19966_SHARP_);
});})(ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,G__19976,G__19977,map__19974,map__19974__$1,event_type,G__19971_20002))
,always_listen_keys);
if(cljs.core.truth_((function (){var or__3949__auto__ = ((cljs.core.not(modifier_key_QMARK_)) && (!(entering_input_QMARK_)));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return always_listen_QMARK_;
}
})())){
var G__19980_20004 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-set-key") : ns_keyword.call(null,"-set-key")),hit_key], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__19980_20004) : re_frame.core.dispatch_sync.call(null,G__19980_20004));

var recent_keys = cljs.core.deref((function (){var G__19984 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-keys") : ns_keyword.call(null,"-keys"))], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19984) : re_frame.core.subscribe.call(null,G__19984));
})());
var event_keys = cljs.core.deref((function (){var G__19985 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-event-keys") : ns_keyword.call(null,"-event-keys"))], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19985) : re_frame.core.subscribe.call(null,G__19985));
})());
var clear_keys = cljs.core.deref((function (){var G__19986 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-clear-keys") : ns_keyword.call(null,"-clear-keys"))], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19986) : re_frame.core.subscribe.call(null,G__19986));
})());
var recent_key = cljs.core.last(recent_keys);
var is_key_sequence_QMARK_ = ((function (recent_keys,event_keys,clear_keys,recent_key,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,G__19976,G__19977,map__19974,map__19974__$1,event_type,G__19971_20002){
return (function (key_maps){
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (recent_keys,event_keys,clear_keys,recent_key,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,G__19976,G__19977,map__19974,map__19974__$1,event_type,G__19971_20002){
return (function (p1__19967_SHARP_,p2__19968_SHARP_){
return re_pressed.impl.is_key_QMARK_(p1__19967_SHARP_,p2__19968_SHARP_);
});})(recent_keys,event_keys,clear_keys,recent_key,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,G__19976,G__19977,map__19974,map__19974__$1,event_type,G__19971_20002))
,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse(recent_keys),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(re_pressed.impl.max_record,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.reverse(key_maps)));
});})(recent_keys,event_keys,clear_keys,recent_key,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,G__19976,G__19977,map__19974,map__19974__$1,event_type,G__19971_20002))
;
var check_events = cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (recent_keys,event_keys,clear_keys,recent_key,is_key_sequence_QMARK_,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,G__19976,G__19977,map__19974,map__19974__$1,event_type,G__19971_20002){
return (function re_pressed$impl$iter__19987(s__19988){
return (new cljs.core.LazySeq(null,((function (recent_keys,event_keys,clear_keys,recent_key,is_key_sequence_QMARK_,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,G__19976,G__19977,map__19974,map__19974__$1,event_type,G__19971_20002){
return (function (){
var s__19988__$1 = s__19988;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__19988__$1);
if(temp__5457__auto__){
var s__19988__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19988__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__19988__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__19990 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__19989 = (0);
while(true){
if((i__19989 < size__4323__auto__)){
var vec__19991 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__19989);
var seq__19992 = cljs.core.seq(vec__19991);
var first__19993 = cljs.core.first(seq__19992);
var seq__19992__$1 = cljs.core.next(seq__19992);
var trigger_event = first__19993;
var ks = seq__19992__$1;
cljs.core.chunk_append(b__19990,(function (){var triggered_QMARK_ = cljs.core.some(is_key_sequence_QMARK_,ks);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[trigger_event,triggered_QMARK_],null));
})());

var G__20005 = (i__19989 + (1));
i__19989 = G__20005;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19990),re_pressed$impl$iter__19987(cljs.core.chunk_rest(s__19988__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19990),null);
}
} else {
var vec__19994 = cljs.core.first(s__19988__$2);
var seq__19995 = cljs.core.seq(vec__19994);
var first__19996 = cljs.core.first(seq__19995);
var seq__19995__$1 = cljs.core.next(seq__19995);
var trigger_event = first__19996;
var ks = seq__19995__$1;
return cljs.core.cons((function (){var triggered_QMARK_ = cljs.core.some(is_key_sequence_QMARK_,ks);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[trigger_event,triggered_QMARK_],null));
})(),re_pressed$impl$iter__19987(cljs.core.rest(s__19988__$2)));
}
} else {
return null;
}
break;
}
});})(recent_keys,event_keys,clear_keys,recent_key,is_key_sequence_QMARK_,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,G__19976,G__19977,map__19974,map__19974__$1,event_type,G__19971_20002))
,null,null));
});})(recent_keys,event_keys,clear_keys,recent_key,is_key_sequence_QMARK_,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,G__19976,G__19977,map__19974,map__19974__$1,event_type,G__19971_20002))
;
return iter__4324__auto__(event_keys);
})());
var vec__19981 = (function (){var G__19997 = check_events;
var G__19997__$1 = (((G__19997 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__19997,recent_keys,event_keys,clear_keys,recent_key,is_key_sequence_QMARK_,check_events,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,G__19976,G__19977,map__19974,map__19974__$1,event_type,G__19971_20002){
return (function (p1__19969_SHARP_){
return cljs.core.second(p1__19969_SHARP_) === true;
});})(G__19997,recent_keys,event_keys,clear_keys,recent_key,is_key_sequence_QMARK_,check_events,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,G__19976,G__19977,map__19974,map__19974__$1,event_type,G__19971_20002))
,G__19997));
if((G__19997__$1 == null)){
return null;
} else {
return cljs.core.first(G__19997__$1);
}
})();
var triggered_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19981,(0),null);
var event_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19981,(1),null);
var clear_QMARK_ = cljs.core.some(is_key_sequence_QMARK_,clear_keys);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
var prevent_default_keys_20006 = cljs.core.deref((function (){var G__19998 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-prevent-default-keys") : ns_keyword.call(null,"-prevent-default-keys"))], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19998) : re_frame.core.subscribe.call(null,G__19998));
})());
var prevent_default_QMARK__20007 = cljs.core.some(((function (prevent_default_keys_20006,recent_keys,event_keys,clear_keys,recent_key,is_key_sequence_QMARK_,check_events,vec__19981,triggered_event,event_QMARK_,clear_QMARK_,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,G__19976,G__19977,map__19974,map__19974__$1,event_type,G__19971_20002){
return (function (p1__19970_SHARP_){
return re_pressed.impl.is_key_QMARK_(recent_key,p1__19970_SHARP_);
});})(prevent_default_keys_20006,recent_keys,event_keys,clear_keys,recent_key,is_key_sequence_QMARK_,check_events,vec__19981,triggered_event,event_QMARK_,clear_QMARK_,ns_keyword,e_key,modifier_key_QMARK_,tag_name,entering_input_QMARK_,hit_key,always_listen_keys,always_listen_QMARK_,G__19976,G__19977,map__19974,map__19974__$1,event_type,G__19971_20002))
,prevent_default_keys_20006);
if(cljs.core.truth_(prevent_default_QMARK__20007)){
var G__19999_20008 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-prevent-default-keys") : ns_keyword.call(null,"-prevent-default-keys")),e], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__19999_20008) : re_frame.core.dispatch_sync.call(null,G__19999_20008));
} else {
}
} else {
}

if(cljs.core.truth_(clear_QMARK_)){
var G__20000 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-clear-keys") : ns_keyword.call(null,"-clear-keys"))], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__20000) : re_frame.core.dispatch_sync.call(null,G__20000));
} else {
if(cljs.core.truth_(event_QMARK_)){
var G__20001 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(triggered_event,e,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([recent_keys], 0));
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__20001) : re_frame.core.dispatch_sync.call(null,G__20001));
} else {
return null;

}
}
} else {
return null;
}
});})(G__19976,G__19977,map__19974,map__19974__$1,event_type,G__19971_20002))
;
return goog.events.listen(G__19976,G__19977,G__19978);
});})(G__19971_20002))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19971_20002,G__19972_20003) : re_frame.core.reg_fx.call(null,G__19971_20002,G__19972_20003));
