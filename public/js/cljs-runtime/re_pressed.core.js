goog.provide('re_pressed.core');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("re-pressed.core","add-keyboard-event-listener","re-pressed.core/add-keyboard-event-listener",719500381),(function (_,p__56077){
var vec__56078 = p__56077;
var seq__56079 = cljs.core.seq(vec__56078);
var first__56080 = cljs.core.first(seq__56079);
var seq__56079__$1 = cljs.core.next(seq__56079);
var ___$1 = first__56080;
var first__56080__$1 = cljs.core.first(seq__56079__$1);
var seq__56079__$2 = cljs.core.next(seq__56079__$1);
var event_type = first__56080__$1;
var map__56081 = seq__56079__$2;
var map__56081__$1 = cljs.core.__destructure_map(map__56081);
var args_map = map__56081__$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("re-pressed.core","keyboard-event","re-pressed.core/keyboard-event",-1923839752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-type","event-type",319722813),event_type,new cljs.core.Keyword(null,"arguments","arguments",-1182834456),args_map], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("re-pressed.core","set-keydown-rules","re-pressed.core/set-keydown-rules",1002257871),(function (p__56082,p__56083){
var map__56084 = p__56082;
var map__56084__$1 = cljs.core.__destructure_map(map__56084);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56084__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56085 = p__56083;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56085,(0),null);
var map__56088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56085,(1),null);
var map__56088__$1 = cljs.core.__destructure_map(map__56088);
var opts = map__56088__$1;
var event_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56088__$1,new cljs.core.Keyword(null,"event-keys","event-keys",-835966631));
var clear_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56088__$1,new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539));
var always_listen_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56088__$1,new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050));
var prevent_default_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56088__$1,new cljs.core.Keyword(null,"prevent-default-keys","prevent-default-keys",1744205310));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"event-keys","event-keys",-835966631)], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539)], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050)], null),always_listen_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"prevent-default-keys","prevent-default-keys",1744205310)], null),prevent_default_keys)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("re-pressed.core","set-keypress-rules","re-pressed.core/set-keypress-rules",1541561860),(function (p__56090,p__56091){
var map__56092 = p__56090;
var map__56092__$1 = cljs.core.__destructure_map(map__56092);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56092__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56093 = p__56091;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56093,(0),null);
var map__56096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56093,(1),null);
var map__56096__$1 = cljs.core.__destructure_map(map__56096);
var opts = map__56096__$1;
var event_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56096__$1,new cljs.core.Keyword(null,"event-keys","event-keys",-835966631));
var clear_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56096__$1,new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539));
var always_listen_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56096__$1,new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keypress","re-pressed.core/keypress",1975307043),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keypress","re-pressed.core/keypress",1975307043),new cljs.core.Keyword(null,"event-keys","event-keys",-835966631)], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keypress","re-pressed.core/keypress",1975307043),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539)], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keypress","re-pressed.core/keypress",1975307043),new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050)], null),always_listen_keys)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("re-pressed.core","set-keyup-rules","re-pressed.core/set-keyup-rules",519284589),(function (p__56098,p__56099){
var map__56100 = p__56098;
var map__56100__$1 = cljs.core.__destructure_map(map__56100);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56100__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56101 = p__56099;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56101,(0),null);
var map__56104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56101,(1),null);
var map__56104__$1 = cljs.core.__destructure_map(map__56104);
var opts = map__56104__$1;
var event_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56104__$1,new cljs.core.Keyword(null,"event-keys","event-keys",-835966631));
var clear_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56104__$1,new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539));
var always_listen_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56104__$1,new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keyup","re-pressed.core/keyup",-981006728),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keyup","re-pressed.core/keyup",-981006728),new cljs.core.Keyword(null,"event-keys","event-keys",-835966631)], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keyup","re-pressed.core/keyup",-981006728),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539)], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keyup","re-pressed.core/keyup",-981006728),new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050)], null),always_listen_keys)], null);
}));

//# sourceMappingURL=re_pressed.core.js.map
