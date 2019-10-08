// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__20156){
var vec__20157 = p__20156;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20157,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20157,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__20160 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__20160);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__20163){
var map__20164 = p__20163;
var map__20164__$1 = ((((!((map__20164 == null)))?(((((map__20164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20164):map__20164);
var request = map__20164__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20164__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20164__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__20164,map__20164__$1,request,on_success,on_failure){
return (function (p1__20161_SHARP_){
var G__20166 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__20161_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20166) : re_frame.core.dispatch.call(null,G__20166));
});})(api,map__20164,map__20164__$1,request,on_success,on_failure))
,((function (api,map__20164,map__20164__$1,request,on_success,on_failure){
return (function (p1__20162_SHARP_){
var G__20167 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__20162_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20167) : re_frame.core.dispatch.call(null,G__20167));
});})(api,map__20164,map__20164__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__20168 = cljs.core.seq(seq_request_maps);
var chunk__20169 = null;
var count__20170 = (0);
var i__20171 = (0);
while(true){
if((i__20171 < count__20170)){
var request__$1 = chunk__20169.cljs$core$IIndexed$_nth$arity$2(null,i__20171);
var G__20172_20174 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__20172_20174) : ajax.core.ajax_request.call(null,G__20172_20174));


var G__20175 = seq__20168;
var G__20176 = chunk__20169;
var G__20177 = count__20170;
var G__20178 = (i__20171 + (1));
seq__20168 = G__20175;
chunk__20169 = G__20176;
count__20170 = G__20177;
i__20171 = G__20178;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20168);
if(temp__5457__auto__){
var seq__20168__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20168__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20168__$1);
var G__20179 = cljs.core.chunk_rest(seq__20168__$1);
var G__20180 = c__4351__auto__;
var G__20181 = cljs.core.count(c__4351__auto__);
var G__20182 = (0);
seq__20168 = G__20179;
chunk__20169 = G__20180;
count__20170 = G__20181;
i__20171 = G__20182;
continue;
} else {
var request__$1 = cljs.core.first(seq__20168__$1);
var G__20173_20183 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__20173_20183) : ajax.core.ajax_request.call(null,G__20173_20183));


var G__20184 = cljs.core.next(seq__20168__$1);
var G__20185 = null;
var G__20186 = (0);
var G__20187 = (0);
seq__20168 = G__20184;
chunk__20169 = G__20185;
count__20170 = G__20186;
i__20171 = G__20187;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__20188_20190 = cljs.core.cst$kw$http_DASH_xhrio;
var G__20189_20191 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__20188_20190,G__20189_20191) : re_frame.core.reg_fx.call(null,G__20188_20190,G__20189_20191));
