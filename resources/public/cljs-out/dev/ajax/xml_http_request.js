// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__10210 = e.target.readyState;
var fexpr__10209 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__10209.cljs$core$IFn$_invoke$arity$1 ? fexpr__10209.cljs$core$IFn$_invoke$arity$1(G__10210) : fexpr__10209.call(null,G__10210));
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__10212,handler){
var map__10213 = p__10212;
var map__10213__$1 = ((((!((map__10213 == null)))?(((((map__10213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10213):map__10213);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10213__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10213__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10213__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10213__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10213__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10213__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10213__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__10213,map__10213__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__10211_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__10211_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__10213,map__10213__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___10225 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___10225)){
var response_type_10226 = temp__5457__auto___10225;
this$__$1.responseType = cljs.core.name(response_type_10226);
} else {
}

var seq__10215_10227 = cljs.core.seq(headers);
var chunk__10216_10228 = null;
var count__10217_10229 = (0);
var i__10218_10230 = (0);
while(true){
if((i__10218_10230 < count__10217_10229)){
var vec__10219_10231 = chunk__10216_10228.cljs$core$IIndexed$_nth$arity$2(null,i__10218_10230);
var k_10232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10219_10231,(0),null);
var v_10233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10219_10231,(1),null);
this$__$1.setRequestHeader(k_10232,v_10233);


var G__10234 = seq__10215_10227;
var G__10235 = chunk__10216_10228;
var G__10236 = count__10217_10229;
var G__10237 = (i__10218_10230 + (1));
seq__10215_10227 = G__10234;
chunk__10216_10228 = G__10235;
count__10217_10229 = G__10236;
i__10218_10230 = G__10237;
continue;
} else {
var temp__5457__auto___10238 = cljs.core.seq(seq__10215_10227);
if(temp__5457__auto___10238){
var seq__10215_10239__$1 = temp__5457__auto___10238;
if(cljs.core.chunked_seq_QMARK_(seq__10215_10239__$1)){
var c__4351__auto___10240 = cljs.core.chunk_first(seq__10215_10239__$1);
var G__10241 = cljs.core.chunk_rest(seq__10215_10239__$1);
var G__10242 = c__4351__auto___10240;
var G__10243 = cljs.core.count(c__4351__auto___10240);
var G__10244 = (0);
seq__10215_10227 = G__10241;
chunk__10216_10228 = G__10242;
count__10217_10229 = G__10243;
i__10218_10230 = G__10244;
continue;
} else {
var vec__10222_10245 = cljs.core.first(seq__10215_10239__$1);
var k_10246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10222_10245,(0),null);
var v_10247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10222_10245,(1),null);
this$__$1.setRequestHeader(k_10246,v_10247);


var G__10248 = cljs.core.next(seq__10215_10239__$1);
var G__10249 = null;
var G__10250 = (0);
var G__10251 = (0);
seq__10215_10227 = G__10248;
chunk__10216_10228 = G__10249;
count__10217_10229 = G__10250;
i__10218_10230 = G__10251;
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

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
