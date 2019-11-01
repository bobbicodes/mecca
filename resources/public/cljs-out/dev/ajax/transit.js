// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('ajax.transit');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cognitect.transit');
goog.require('ajax.interceptors');
goog.require('ajax.protocols');
goog.require('ajax.util');
ajax.transit.transit_type = (function ajax$transit$transit_type(p__19348){
var map__19349 = p__19348;
var map__19349__$1 = ((((!((map__19349 == null)))?(((((map__19349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19349):map__19349);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19349__$1,cljs.core.cst$kw$type);
var or__3949__auto__ = type;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.cst$kw$json;
}
});
ajax.transit.transit_write_fn = (function ajax$transit$transit_write_fn(type,opts){
var writer = (function (){var or__3949__auto__ = cljs.core.cst$kw$writer.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(type,opts);
}
})();
return ((function (writer){
return (function ajax$transit$transit_write_fn_$_transit_write_params(params){
return cognitect.transit.write(writer,params);
});
;})(writer))
});
/**
 * Returns a Transit request format.
 * 
 * Options include:
 * :writer Explicit Transit writer. If not supplied one will be created using the other options.
 *         The default type is :json for ClojureScript and :msgpack for Clojure.
 * :type Override the default transit type with value :json, :json-verbose or :msgpack
 * :handlers Custom Transit handlers (refer to Transit documentation)
 */
ajax.transit.transit_request_format = (function ajax$transit$transit_request_format(var_args){
var G__19352 = arguments.length;
switch (G__19352) {
case 0:
return ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var type = ajax.transit.transit_type(opts);
var mime_type = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$json)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$json_DASH_verbose))))?"json":"msgpack");
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.transit.transit_write_fn(type,opts),cljs.core.cst$kw$content_DASH_type,["application/transit+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mime_type)].join('')], null);
});

ajax.transit.transit_request_format.cljs$lang$maxFixedArity = 1;

ajax.transit.transit_read_fn = (function ajax$transit$transit_read_fn(opts){
var reader = (function (){var or__3949__auto__ = cljs.core.cst$kw$reader.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,opts);
}
})();
return ((function (reader){
return (function ajax$transit$transit_read_fn_$_transit_read_response(response){
return cognitect.transit.read(reader,ajax.protocols._body(response));
});
;})(reader))
});
/**
 * Returns a Transit request format.
 * 
 * Options include:
 * :reader (CLJS only) Explicit Transit reader. If not supplied one will be created using the other options.
 * :handlers Custom Transit handlers (refer to Transit documentation)
 */
ajax.transit.transit_response_format = (function ajax$transit$transit_response_format(var_args){
var G__19355 = arguments.length;
switch (G__19355) {
case 0:
return ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$2(ajax.transit.transit_type(opts),opts);
});

ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return ajax.interceptors.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.transit.transit_read_fn(opts),cljs.core.cst$kw$description,"Transit",cljs.core.cst$kw$content_DASH_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json"], null)], null));
});

ajax.transit.transit_response_format.cljs$lang$maxFixedArity = 2;

