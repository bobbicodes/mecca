// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__22339 = e.target.readyState;
var fexpr__22338 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__22338.cljs$core$IFn$_invoke$arity$1 ? fexpr__22338.cljs$core$IFn$_invoke$arity$1(G__22339) : fexpr__22338.call(null,G__22339));
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

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__22341,handler){
var map__22342 = p__22341;
var map__22342__$1 = ((((!((map__22342 == null)))?(((((map__22342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22342):map__22342);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22342__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22342__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22342__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22342__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22342__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22342__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22342__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__22342,map__22342__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__22340_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__22340_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__22342,map__22342__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___22354 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___22354)){
var response_type_22355 = temp__5457__auto___22354;
this$__$1.responseType = cljs.core.name(response_type_22355);
} else {
}

var seq__22344_22356 = cljs.core.seq(headers);
var chunk__22345_22357 = null;
var count__22346_22358 = (0);
var i__22347_22359 = (0);
while(true){
if((i__22347_22359 < count__22346_22358)){
var vec__22348_22360 = chunk__22345_22357.cljs$core$IIndexed$_nth$arity$2(null,i__22347_22359);
var k_22361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22348_22360,(0),null);
var v_22362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22348_22360,(1),null);
this$__$1.setRequestHeader(k_22361,v_22362);


var G__22363 = seq__22344_22356;
var G__22364 = chunk__22345_22357;
var G__22365 = count__22346_22358;
var G__22366 = (i__22347_22359 + (1));
seq__22344_22356 = G__22363;
chunk__22345_22357 = G__22364;
count__22346_22358 = G__22365;
i__22347_22359 = G__22366;
continue;
} else {
var temp__5457__auto___22367 = cljs.core.seq(seq__22344_22356);
if(temp__5457__auto___22367){
var seq__22344_22368__$1 = temp__5457__auto___22367;
if(cljs.core.chunked_seq_QMARK_(seq__22344_22368__$1)){
var c__4351__auto___22369 = cljs.core.chunk_first(seq__22344_22368__$1);
var G__22370 = cljs.core.chunk_rest(seq__22344_22368__$1);
var G__22371 = c__4351__auto___22369;
var G__22372 = cljs.core.count(c__4351__auto___22369);
var G__22373 = (0);
seq__22344_22356 = G__22370;
chunk__22345_22357 = G__22371;
count__22346_22358 = G__22372;
i__22347_22359 = G__22373;
continue;
} else {
var vec__22351_22374 = cljs.core.first(seq__22344_22368__$1);
var k_22375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22351_22374,(0),null);
var v_22376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22351_22374,(1),null);
this$__$1.setRequestHeader(k_22375,v_22376);


var G__22377 = cljs.core.next(seq__22344_22368__$1);
var G__22378 = null;
var G__22379 = (0);
var G__22380 = (0);
seq__22344_22356 = G__22377;
chunk__22345_22357 = G__22378;
count__22346_22358 = G__22379;
i__22347_22359 = G__22380;
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
