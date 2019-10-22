// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('ajax.url');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('ajax.util');
ajax.url.key_encode = (function ajax$url$key_encode(key){
if((key instanceof cljs.core.Keyword)){
return cljs.core.name(key);
} else {
return key;
}
});
ajax.url.value_encode = encodeURIComponent;
ajax.url.key_value_pair_to_str = (function ajax$url$key_value_pair_to_str(p__18896){
var vec__18897 = p__18896;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18897,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18897,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.key_encode(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((ajax.url.value_encode.cljs$core$IFn$_invoke$arity$1 ? ajax.url.value_encode.cljs$core$IFn$_invoke$arity$1(v) : ajax.url.value_encode.call(null,v)))].join('');
});
ajax.url.vec_key_transform_fn = (function ajax$url$vec_key_transform_fn(var_args){
var G__18901 = arguments.length;
switch (G__18901) {
case 3:
return ajax.url.vec_key_transform_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.url.vec_key_transform_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.url.vec_key_transform_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.url.vec_key_transform_fn.cljs$core$IFn$_invoke$arity$3 = (function (vec_key_encode,k,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vec_key_encode.cljs$core$IFn$_invoke$arity$1 ? vec_key_encode.cljs$core$IFn$_invoke$arity$1(k) : vec_key_encode.call(null,k)),v], null);
});

ajax.url.vec_key_transform_fn.cljs$core$IFn$_invoke$arity$2 = (function (vec_key_encode,k){
return (function (v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vec_key_encode.cljs$core$IFn$_invoke$arity$1 ? vec_key_encode.cljs$core$IFn$_invoke$arity$1(k) : vec_key_encode.call(null,k)),v], null);
});
});

ajax.url.vec_key_transform_fn.cljs$core$IFn$_invoke$arity$1 = (function (vec_key_encode){
return (function (k,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vec_key_encode.cljs$core$IFn$_invoke$arity$1 ? vec_key_encode.cljs$core$IFn$_invoke$arity$1(k) : vec_key_encode.call(null,k)),v], null);
});
});

ajax.url.vec_key_transform_fn.cljs$lang$maxFixedArity = 3;

ajax.url.to_vec_key_transform = (function ajax$url$to_vec_key_transform(vec_strategy){
var vec_key_encode = (function (){var G__18903 = (function (){var or__3949__auto__ = vec_strategy;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.cst$kw$java;
}
})();
var G__18903__$1 = (((G__18903 instanceof cljs.core.Keyword))?G__18903.fqn:null);
switch (G__18903__$1) {
case "java":
return ((function (G__18903,G__18903__$1){
return (function (k){
return null;
});
;})(G__18903,G__18903__$1))

break;
case "rails":
return ((function (G__18903,G__18903__$1){
return (function (k){
return "";
});
;})(G__18903,G__18903__$1))

break;
case "indexed":
return cljs.core.identity;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18903__$1)].join('')));

}
})();
return ajax.url.vec_key_transform_fn.cljs$core$IFn$_invoke$arity$1(vec_key_encode);
});
ajax.url.param_to_key_value_pairs = (function ajax$url$param_to_key_value_pairs(var_args){
var G__18906 = arguments.length;
switch (G__18906) {
case 3:
return ajax.url.param_to_key_value_pairs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.url.param_to_key_value_pairs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.url.param_to_key_value_pairs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.url.param_to_key_value_pairs.cljs$core$IFn$_invoke$arity$3 = (function (vec_key_transform,prefix,p__18907){
var vec__18908 = p__18907;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18908,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18908,(1),null);

var k1 = ajax.url.key_encode(key);
var new_key = (cljs.core.truth_(prefix)?(cljs.core.truth_(key)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k1),"]"].join(''):prefix):k1);
var recurse = ajax.url.param_to_key_value_pairs.cljs$core$IFn$_invoke$arity$2(vec_key_transform,new_key);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if((value instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,cljs.core.name(value)], null)], null);
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(recurse,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.seq(value)], 0));
} else {
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(recurse,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(vec_key_transform,cljs.core.seq(value))], 0));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
}
});

ajax.url.param_to_key_value_pairs.cljs$core$IFn$_invoke$arity$2 = (function (vec_key_transform,prefix){
return (function (p__18911){
var vec__18912 = p__18911;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18912,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18912,(1),null);

var k1 = ajax.url.key_encode(key);
var new_key = (cljs.core.truth_(prefix)?(cljs.core.truth_(key)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k1),"]"].join(''):prefix):k1);
var recurse = ajax.url.param_to_key_value_pairs.cljs$core$IFn$_invoke$arity$2(vec_key_transform,new_key);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if((value instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,cljs.core.name(value)], null)], null);
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(recurse,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.seq(value)], 0));
} else {
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(recurse,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(vec_key_transform,cljs.core.seq(value))], 0));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
}
});
});

ajax.url.param_to_key_value_pairs.cljs$core$IFn$_invoke$arity$1 = (function (vec_key_transform){
return (function (prefix,p__18915){
var vec__18916 = p__18915;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18916,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18916,(1),null);

var k1 = ajax.url.key_encode(key);
var new_key = (cljs.core.truth_(prefix)?(cljs.core.truth_(key)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k1),"]"].join(''):prefix):k1);
var recurse = ajax.url.param_to_key_value_pairs.cljs$core$IFn$_invoke$arity$2(vec_key_transform,new_key);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if((value instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,cljs.core.name(value)], null)], null);
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(recurse,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.seq(value)], 0));
} else {
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(recurse,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(vec_key_transform,cljs.core.seq(value))], 0));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
}
});
});

ajax.url.param_to_key_value_pairs.cljs$lang$maxFixedArity = 3;

ajax.url.params_to_str = (function ajax$url$params_to_str(var_args){
var G__18921 = arguments.length;
switch (G__18921) {
case 2:
return ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$2 = (function (vec_strategy,params){

return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(ajax.url.key_value_pair_to_str,ajax.url.param_to_key_value_pairs.cljs$core$IFn$_invoke$arity$3(ajax.url.to_vec_key_transform(vec_strategy),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,params], null))));
});

ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$1 = (function (vec_strategy){
return (function (params){

return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(ajax.url.key_value_pair_to_str,ajax.url.param_to_key_value_pairs.cljs$core$IFn$_invoke$arity$3(ajax.url.to_vec_key_transform(vec_strategy),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,params], null))));
});
});

ajax.url.params_to_str.cljs$lang$maxFixedArity = 2;

/**
 * The request format for simple POST and GET.
 */
ajax.url.url_request_format = (function ajax$url$url_request_format(var_args){
var G__18924 = arguments.length;
switch (G__18924) {
case 0:
return ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$1 = (function (p__18925){
var map__18926 = p__18925;
var map__18926__$1 = ((((!((map__18926 == null)))?(((((map__18926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18926):map__18926);
var vec_strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18926__$1,cljs.core.cst$kw$vec_DASH_strategy);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.util.to_utf8_writer(ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$1(vec_strategy)),cljs.core.cst$kw$content_DASH_type,"application/x-www-form-urlencoded; charset=utf-8"], null);
});

ajax.url.url_request_format.cljs$lang$maxFixedArity = 1;

