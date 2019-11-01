// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('ajax.json');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cognitect.transit');
goog.require('clojure.walk');
goog.require('ajax.interceptors');
goog.require('ajax.protocols');
ajax.json.write_json_native = (function ajax$json$write_json_native(data){
return JSON.stringify(cljs.core.clj__GT_js(data));
});
ajax.json.read_json_native = (function ajax$json$read_json_native(raw,keywords_QMARK_,text){
var result_raw = JSON.parse(text);
if(cljs.core.truth_(raw)){
return result_raw;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(result_raw,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});
ajax.json.read_json_transit = (function ajax$json$read_json_transit(raw,keywords_QMARK_,text){
if(cljs.core.truth_(raw)){
return JSON.parse(text);
} else {
var edn = cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json),text);
if(cljs.core.truth_(keywords_QMARK_)){
return clojure.walk.keywordize_keys(edn);
} else {
return edn;
}
}
});
ajax.json.make_json_request_format = (function ajax$json$make_json_request_format(write_json){
return (function ajax$json$make_json_request_format_$_json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,write_json,cljs.core.cst$kw$content_DASH_type,"application/json"], null);
});
});
ajax.json.strip_prefix = (function ajax$json$strip_prefix(prefix,text){
if(cljs.core.truth_((function (){var and__3938__auto__ = prefix;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),text.indexOf(prefix));
} else {
return and__3938__auto__;
}
})())){
return text.substring(prefix.length);
} else {
return text;
}
});
ajax.json.make_json_response_format = (function ajax$json$make_json_response_format(read_json){

return (function() {
var ajax$json$make_json_response_format_$_json_response_format = null;
var ajax$json$make_json_response_format_$_json_response_format__0 = (function (){
return ajax$json$make_json_response_format_$_json_response_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});
var ajax$json$make_json_response_format_$_json_response_format__1 = (function (p__19367){
var map__19368 = p__19367;
var map__19368__$1 = ((((!((map__19368 == null)))?(((((map__19368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19368):map__19368);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19368__$1,cljs.core.cst$kw$prefix);
var keywords_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19368__$1,cljs.core.cst$kw$keywords_QMARK_);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19368__$1,cljs.core.cst$kw$raw);
return ajax.interceptors.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,((function (map__19368,map__19368__$1,prefix,keywords_QMARK_,raw){
return (function ajax$json$make_json_response_format_$_json_response_format_$_json_read_response_format(xhrio){
var G__19370 = raw;
var G__19371 = keywords_QMARK_;
var G__19372 = ajax.json.strip_prefix(prefix,ajax.protocols._body(xhrio));
return (read_json.cljs$core$IFn$_invoke$arity$3 ? read_json.cljs$core$IFn$_invoke$arity$3(G__19370,G__19371,G__19372) : read_json.call(null,G__19370,G__19371,G__19372));
});})(map__19368,map__19368__$1,prefix,keywords_QMARK_,raw))
,cljs.core.cst$kw$description,["JSON",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(prefix)?[" prefix '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"'"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),cljs.core.cst$kw$content_DASH_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json"], null)], null));
});
ajax$json$make_json_response_format_$_json_response_format = function(p__19367){
switch(arguments.length){
case 0:
return ajax$json$make_json_response_format_$_json_response_format__0.call(this);
case 1:
return ajax$json$make_json_response_format_$_json_response_format__1.call(this,p__19367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$json$make_json_response_format_$_json_response_format.cljs$core$IFn$_invoke$arity$0 = ajax$json$make_json_response_format_$_json_response_format__0;
ajax$json$make_json_response_format_$_json_response_format.cljs$core$IFn$_invoke$arity$1 = ajax$json$make_json_response_format_$_json_response_format__1;
return ajax$json$make_json_response_format_$_json_response_format;
})()
});
/**
 * Returns a JSON response format using the native JSON 
 * implementation. Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.json.json_response_format = ajax.json.make_json_response_format(ajax.json.read_json_native);
ajax.json.json_request_format = ajax.json.make_json_request_format(ajax.json.write_json_native);
ajax.json.safe_json_request_format = ajax.json.make_json_response_format(ajax.json.read_json_transit);
