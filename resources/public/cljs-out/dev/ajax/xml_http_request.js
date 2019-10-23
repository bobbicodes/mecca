// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__19260 = e.target.readyState;
var fexpr__19259 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__19259.cljs$core$IFn$_invoke$arity$1 ? fexpr__19259.cljs$core$IFn$_invoke$arity$1(G__19260) : fexpr__19259.call(null,G__19260));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__19262,handler){
var map__19263 = p__19262;
var map__19263__$1 = ((((!((map__19263 == null)))?(((((map__19263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19263):map__19263);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19263__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19263__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19263__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19263__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19263__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19263__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19263__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__19263,map__19263__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__19261_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__19261_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__19263,map__19263__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___19275 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___19275)){
var response_type_19276 = temp__5457__auto___19275;
this$__$1.responseType = cljs.core.name(response_type_19276);
} else {
}

var seq__19265_19277 = cljs.core.seq(headers);
var chunk__19266_19278 = null;
var count__19267_19279 = (0);
var i__19268_19280 = (0);
while(true){
if((i__19268_19280 < count__19267_19279)){
var vec__19269_19281 = chunk__19266_19278.cljs$core$IIndexed$_nth$arity$2(null,i__19268_19280);
var k_19282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19269_19281,(0),null);
var v_19283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19269_19281,(1),null);
this$__$1.setRequestHeader(k_19282,v_19283);


var G__19284 = seq__19265_19277;
var G__19285 = chunk__19266_19278;
var G__19286 = count__19267_19279;
var G__19287 = (i__19268_19280 + (1));
seq__19265_19277 = G__19284;
chunk__19266_19278 = G__19285;
count__19267_19279 = G__19286;
i__19268_19280 = G__19287;
continue;
} else {
var temp__5457__auto___19288 = cljs.core.seq(seq__19265_19277);
if(temp__5457__auto___19288){
var seq__19265_19289__$1 = temp__5457__auto___19288;
if(cljs.core.chunked_seq_QMARK_(seq__19265_19289__$1)){
var c__4351__auto___19290 = cljs.core.chunk_first(seq__19265_19289__$1);
var G__19291 = cljs.core.chunk_rest(seq__19265_19289__$1);
var G__19292 = c__4351__auto___19290;
var G__19293 = cljs.core.count(c__4351__auto___19290);
var G__19294 = (0);
seq__19265_19277 = G__19291;
chunk__19266_19278 = G__19292;
count__19267_19279 = G__19293;
i__19268_19280 = G__19294;
continue;
} else {
var vec__19272_19295 = cljs.core.first(seq__19265_19289__$1);
var k_19296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19272_19295,(0),null);
var v_19297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19272_19295,(1),null);
this$__$1.setRequestHeader(k_19296,v_19297);


var G__19298 = cljs.core.next(seq__19265_19289__$1);
var G__19299 = null;
var G__19300 = (0);
var G__19301 = (0);
seq__19265_19277 = G__19298;
chunk__19266_19278 = G__19299;
count__19267_19279 = G__19300;
i__19268_19280 = G__19301;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__3949__auto__ = body;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
