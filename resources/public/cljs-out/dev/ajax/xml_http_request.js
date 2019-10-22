// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__19319 = e.target.readyState;
var fexpr__19318 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__19318.cljs$core$IFn$_invoke$arity$1 ? fexpr__19318.cljs$core$IFn$_invoke$arity$1(G__19319) : fexpr__19318.call(null,G__19319));
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

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__19321,handler){
var map__19322 = p__19321;
var map__19322__$1 = ((((!((map__19322 == null)))?(((((map__19322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19322):map__19322);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19322__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19322__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19322__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19322__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19322__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19322__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19322__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__19322,map__19322__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__19320_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__19320_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__19322,map__19322__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___19334 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___19334)){
var response_type_19335 = temp__5457__auto___19334;
this$__$1.responseType = cljs.core.name(response_type_19335);
} else {
}

var seq__19324_19336 = cljs.core.seq(headers);
var chunk__19325_19337 = null;
var count__19326_19338 = (0);
var i__19327_19339 = (0);
while(true){
if((i__19327_19339 < count__19326_19338)){
var vec__19328_19340 = chunk__19325_19337.cljs$core$IIndexed$_nth$arity$2(null,i__19327_19339);
var k_19341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19328_19340,(0),null);
var v_19342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19328_19340,(1),null);
this$__$1.setRequestHeader(k_19341,v_19342);


var G__19343 = seq__19324_19336;
var G__19344 = chunk__19325_19337;
var G__19345 = count__19326_19338;
var G__19346 = (i__19327_19339 + (1));
seq__19324_19336 = G__19343;
chunk__19325_19337 = G__19344;
count__19326_19338 = G__19345;
i__19327_19339 = G__19346;
continue;
} else {
var temp__5457__auto___19347 = cljs.core.seq(seq__19324_19336);
if(temp__5457__auto___19347){
var seq__19324_19348__$1 = temp__5457__auto___19347;
if(cljs.core.chunked_seq_QMARK_(seq__19324_19348__$1)){
var c__4351__auto___19349 = cljs.core.chunk_first(seq__19324_19348__$1);
var G__19350 = cljs.core.chunk_rest(seq__19324_19348__$1);
var G__19351 = c__4351__auto___19349;
var G__19352 = cljs.core.count(c__4351__auto___19349);
var G__19353 = (0);
seq__19324_19336 = G__19350;
chunk__19325_19337 = G__19351;
count__19326_19338 = G__19352;
i__19327_19339 = G__19353;
continue;
} else {
var vec__19331_19354 = cljs.core.first(seq__19324_19348__$1);
var k_19355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19331_19354,(0),null);
var v_19356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19331_19354,(1),null);
this$__$1.setRequestHeader(k_19355,v_19356);


var G__19357 = cljs.core.next(seq__19324_19348__$1);
var G__19358 = null;
var G__19359 = (0);
var G__19360 = (0);
seq__19324_19336 = G__19357;
chunk__19325_19337 = G__19358;
count__19326_19338 = G__19359;
i__19327_19339 = G__19360;
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
