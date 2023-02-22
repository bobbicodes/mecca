goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___54346 = arguments.length;
var i__4830__auto___54347 = (0);
while(true){
if((i__4830__auto___54347 < len__4829__auto___54346)){
args__4835__auto__.push((arguments[i__4830__auto___54347]));

var G__54348 = (i__4830__auto___54347 + (1));
i__4830__auto___54347 = G__54348;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq54154){
var G__54155 = cljs.core.first(seq54154);
var seq54154__$1 = cljs.core.next(seq54154);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54155,seq54154__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__54157 = cljs.core.seq(sources);
var chunk__54158 = null;
var count__54159 = (0);
var i__54160 = (0);
while(true){
if((i__54160 < count__54159)){
var map__54166 = chunk__54158.cljs$core$IIndexed$_nth$arity$2(null,i__54160);
var map__54166__$1 = cljs.core.__destructure_map(map__54166);
var src = map__54166__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54166__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54166__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54166__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54166__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e54167){var e_54349 = e54167;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_54349);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_54349.message)].join('')));
}

var G__54350 = seq__54157;
var G__54351 = chunk__54158;
var G__54352 = count__54159;
var G__54353 = (i__54160 + (1));
seq__54157 = G__54350;
chunk__54158 = G__54351;
count__54159 = G__54352;
i__54160 = G__54353;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__54157);
if(temp__5753__auto__){
var seq__54157__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54157__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__54157__$1);
var G__54354 = cljs.core.chunk_rest(seq__54157__$1);
var G__54355 = c__4649__auto__;
var G__54356 = cljs.core.count(c__4649__auto__);
var G__54357 = (0);
seq__54157 = G__54354;
chunk__54158 = G__54355;
count__54159 = G__54356;
i__54160 = G__54357;
continue;
} else {
var map__54168 = cljs.core.first(seq__54157__$1);
var map__54168__$1 = cljs.core.__destructure_map(map__54168);
var src = map__54168__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54168__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54168__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54168__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54168__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e54169){var e_54358 = e54169;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_54358);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_54358.message)].join('')));
}

var G__54359 = cljs.core.next(seq__54157__$1);
var G__54360 = null;
var G__54361 = (0);
var G__54362 = (0);
seq__54157 = G__54359;
chunk__54158 = G__54360;
count__54159 = G__54361;
i__54160 = G__54362;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__54170 = cljs.core.seq(js_requires);
var chunk__54171 = null;
var count__54172 = (0);
var i__54173 = (0);
while(true){
if((i__54173 < count__54172)){
var js_ns = chunk__54171.cljs$core$IIndexed$_nth$arity$2(null,i__54173);
var require_str_54363 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_54363);


var G__54364 = seq__54170;
var G__54365 = chunk__54171;
var G__54366 = count__54172;
var G__54367 = (i__54173 + (1));
seq__54170 = G__54364;
chunk__54171 = G__54365;
count__54172 = G__54366;
i__54173 = G__54367;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__54170);
if(temp__5753__auto__){
var seq__54170__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54170__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__54170__$1);
var G__54368 = cljs.core.chunk_rest(seq__54170__$1);
var G__54369 = c__4649__auto__;
var G__54370 = cljs.core.count(c__4649__auto__);
var G__54371 = (0);
seq__54170 = G__54368;
chunk__54171 = G__54369;
count__54172 = G__54370;
i__54173 = G__54371;
continue;
} else {
var js_ns = cljs.core.first(seq__54170__$1);
var require_str_54372 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_54372);


var G__54373 = cljs.core.next(seq__54170__$1);
var G__54374 = null;
var G__54375 = (0);
var G__54376 = (0);
seq__54170 = G__54373;
chunk__54171 = G__54374;
count__54172 = G__54375;
i__54173 = G__54376;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__54175){
var map__54176 = p__54175;
var map__54176__$1 = cljs.core.__destructure_map(map__54176);
var msg = map__54176__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54176__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54176__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54177(s__54178){
return (new cljs.core.LazySeq(null,(function (){
var s__54178__$1 = s__54178;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__54178__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__54183 = cljs.core.first(xs__6308__auto__);
var map__54183__$1 = cljs.core.__destructure_map(map__54183);
var src = map__54183__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54183__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54183__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__54178__$1,map__54183,map__54183__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__54176,map__54176__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54177_$_iter__54179(s__54180){
return (new cljs.core.LazySeq(null,((function (s__54178__$1,map__54183,map__54183__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__54176,map__54176__$1,msg,info,reload_info){
return (function (){
var s__54180__$1 = s__54180;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__54180__$1);
if(temp__5753__auto____$1){
var s__54180__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__54180__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__54180__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__54182 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__54181 = (0);
while(true){
if((i__54181 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__54181);
cljs.core.chunk_append(b__54182,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__54377 = (i__54181 + (1));
i__54181 = G__54377;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54182),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54177_$_iter__54179(cljs.core.chunk_rest(s__54180__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54182),null);
}
} else {
var warning = cljs.core.first(s__54180__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54177_$_iter__54179(cljs.core.rest(s__54180__$2)));
}
} else {
return null;
}
break;
}
});})(s__54178__$1,map__54183,map__54183__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__54176,map__54176__$1,msg,info,reload_info))
,null,null));
});})(s__54178__$1,map__54183,map__54183__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__54176,map__54176__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54177(cljs.core.rest(s__54178__$1)));
} else {
var G__54378 = cljs.core.rest(s__54178__$1);
s__54178__$1 = G__54378;
continue;
}
} else {
var G__54379 = cljs.core.rest(s__54178__$1);
s__54178__$1 = G__54379;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__54184_54380 = cljs.core.seq(warnings);
var chunk__54185_54381 = null;
var count__54186_54382 = (0);
var i__54187_54383 = (0);
while(true){
if((i__54187_54383 < count__54186_54382)){
var map__54190_54384 = chunk__54185_54381.cljs$core$IIndexed$_nth$arity$2(null,i__54187_54383);
var map__54190_54385__$1 = cljs.core.__destructure_map(map__54190_54384);
var w_54386 = map__54190_54385__$1;
var msg_54387__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54190_54385__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_54388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54190_54385__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_54389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54190_54385__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_54390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54190_54385__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_54390)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_54388),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_54389),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_54387__$1)].join(''));


var G__54391 = seq__54184_54380;
var G__54392 = chunk__54185_54381;
var G__54393 = count__54186_54382;
var G__54394 = (i__54187_54383 + (1));
seq__54184_54380 = G__54391;
chunk__54185_54381 = G__54392;
count__54186_54382 = G__54393;
i__54187_54383 = G__54394;
continue;
} else {
var temp__5753__auto___54395 = cljs.core.seq(seq__54184_54380);
if(temp__5753__auto___54395){
var seq__54184_54396__$1 = temp__5753__auto___54395;
if(cljs.core.chunked_seq_QMARK_(seq__54184_54396__$1)){
var c__4649__auto___54397 = cljs.core.chunk_first(seq__54184_54396__$1);
var G__54398 = cljs.core.chunk_rest(seq__54184_54396__$1);
var G__54399 = c__4649__auto___54397;
var G__54400 = cljs.core.count(c__4649__auto___54397);
var G__54401 = (0);
seq__54184_54380 = G__54398;
chunk__54185_54381 = G__54399;
count__54186_54382 = G__54400;
i__54187_54383 = G__54401;
continue;
} else {
var map__54191_54402 = cljs.core.first(seq__54184_54396__$1);
var map__54191_54403__$1 = cljs.core.__destructure_map(map__54191_54402);
var w_54404 = map__54191_54403__$1;
var msg_54405__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54191_54403__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_54406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54191_54403__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_54407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54191_54403__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_54408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54191_54403__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_54408)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_54406),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_54407),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_54405__$1)].join(''));


var G__54409 = cljs.core.next(seq__54184_54396__$1);
var G__54410 = null;
var G__54411 = (0);
var G__54412 = (0);
seq__54184_54380 = G__54409;
chunk__54185_54381 = G__54410;
count__54186_54382 = G__54411;
i__54187_54383 = G__54412;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__54174_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__54174_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__54192){
var map__54193 = p__54192;
var map__54193__$1 = cljs.core.__destructure_map(map__54193);
var msg = map__54193__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54193__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__54194 = cljs.core.seq(updates);
var chunk__54196 = null;
var count__54197 = (0);
var i__54198 = (0);
while(true){
if((i__54198 < count__54197)){
var path = chunk__54196.cljs$core$IIndexed$_nth$arity$2(null,i__54198);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__54242_54413 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__54246_54414 = null;
var count__54247_54415 = (0);
var i__54248_54416 = (0);
while(true){
if((i__54248_54416 < count__54247_54415)){
var node_54417 = chunk__54246_54414.cljs$core$IIndexed$_nth$arity$2(null,i__54248_54416);
if(cljs.core.not(node_54417.shadow$old)){
var path_match_54418 = shadow.cljs.devtools.client.browser.match_paths(node_54417.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54418)){
var new_link_54419 = (function (){var G__54262 = node_54417.cloneNode(true);
G__54262.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54418),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54262;
})();
(node_54417.shadow$old = true);

(new_link_54419.onload = ((function (seq__54242_54413,chunk__54246_54414,count__54247_54415,i__54248_54416,seq__54194,chunk__54196,count__54197,i__54198,new_link_54419,path_match_54418,node_54417,path,map__54193,map__54193__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_54417);
});})(seq__54242_54413,chunk__54246_54414,count__54247_54415,i__54248_54416,seq__54194,chunk__54196,count__54197,i__54198,new_link_54419,path_match_54418,node_54417,path,map__54193,map__54193__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54418], 0));

goog.dom.insertSiblingAfter(new_link_54419,node_54417);


var G__54420 = seq__54242_54413;
var G__54421 = chunk__54246_54414;
var G__54422 = count__54247_54415;
var G__54423 = (i__54248_54416 + (1));
seq__54242_54413 = G__54420;
chunk__54246_54414 = G__54421;
count__54247_54415 = G__54422;
i__54248_54416 = G__54423;
continue;
} else {
var G__54424 = seq__54242_54413;
var G__54425 = chunk__54246_54414;
var G__54426 = count__54247_54415;
var G__54427 = (i__54248_54416 + (1));
seq__54242_54413 = G__54424;
chunk__54246_54414 = G__54425;
count__54247_54415 = G__54426;
i__54248_54416 = G__54427;
continue;
}
} else {
var G__54428 = seq__54242_54413;
var G__54429 = chunk__54246_54414;
var G__54430 = count__54247_54415;
var G__54431 = (i__54248_54416 + (1));
seq__54242_54413 = G__54428;
chunk__54246_54414 = G__54429;
count__54247_54415 = G__54430;
i__54248_54416 = G__54431;
continue;
}
} else {
var temp__5753__auto___54432 = cljs.core.seq(seq__54242_54413);
if(temp__5753__auto___54432){
var seq__54242_54433__$1 = temp__5753__auto___54432;
if(cljs.core.chunked_seq_QMARK_(seq__54242_54433__$1)){
var c__4649__auto___54434 = cljs.core.chunk_first(seq__54242_54433__$1);
var G__54435 = cljs.core.chunk_rest(seq__54242_54433__$1);
var G__54436 = c__4649__auto___54434;
var G__54437 = cljs.core.count(c__4649__auto___54434);
var G__54438 = (0);
seq__54242_54413 = G__54435;
chunk__54246_54414 = G__54436;
count__54247_54415 = G__54437;
i__54248_54416 = G__54438;
continue;
} else {
var node_54439 = cljs.core.first(seq__54242_54433__$1);
if(cljs.core.not(node_54439.shadow$old)){
var path_match_54440 = shadow.cljs.devtools.client.browser.match_paths(node_54439.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54440)){
var new_link_54441 = (function (){var G__54265 = node_54439.cloneNode(true);
G__54265.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54440),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54265;
})();
(node_54439.shadow$old = true);

(new_link_54441.onload = ((function (seq__54242_54413,chunk__54246_54414,count__54247_54415,i__54248_54416,seq__54194,chunk__54196,count__54197,i__54198,new_link_54441,path_match_54440,node_54439,seq__54242_54433__$1,temp__5753__auto___54432,path,map__54193,map__54193__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_54439);
});})(seq__54242_54413,chunk__54246_54414,count__54247_54415,i__54248_54416,seq__54194,chunk__54196,count__54197,i__54198,new_link_54441,path_match_54440,node_54439,seq__54242_54433__$1,temp__5753__auto___54432,path,map__54193,map__54193__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54440], 0));

goog.dom.insertSiblingAfter(new_link_54441,node_54439);


var G__54442 = cljs.core.next(seq__54242_54433__$1);
var G__54443 = null;
var G__54444 = (0);
var G__54445 = (0);
seq__54242_54413 = G__54442;
chunk__54246_54414 = G__54443;
count__54247_54415 = G__54444;
i__54248_54416 = G__54445;
continue;
} else {
var G__54446 = cljs.core.next(seq__54242_54433__$1);
var G__54447 = null;
var G__54448 = (0);
var G__54449 = (0);
seq__54242_54413 = G__54446;
chunk__54246_54414 = G__54447;
count__54247_54415 = G__54448;
i__54248_54416 = G__54449;
continue;
}
} else {
var G__54450 = cljs.core.next(seq__54242_54433__$1);
var G__54451 = null;
var G__54452 = (0);
var G__54453 = (0);
seq__54242_54413 = G__54450;
chunk__54246_54414 = G__54451;
count__54247_54415 = G__54452;
i__54248_54416 = G__54453;
continue;
}
}
} else {
}
}
break;
}


var G__54454 = seq__54194;
var G__54455 = chunk__54196;
var G__54456 = count__54197;
var G__54457 = (i__54198 + (1));
seq__54194 = G__54454;
chunk__54196 = G__54455;
count__54197 = G__54456;
i__54198 = G__54457;
continue;
} else {
var G__54458 = seq__54194;
var G__54459 = chunk__54196;
var G__54460 = count__54197;
var G__54461 = (i__54198 + (1));
seq__54194 = G__54458;
chunk__54196 = G__54459;
count__54197 = G__54460;
i__54198 = G__54461;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__54194);
if(temp__5753__auto__){
var seq__54194__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54194__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__54194__$1);
var G__54462 = cljs.core.chunk_rest(seq__54194__$1);
var G__54463 = c__4649__auto__;
var G__54464 = cljs.core.count(c__4649__auto__);
var G__54465 = (0);
seq__54194 = G__54462;
chunk__54196 = G__54463;
count__54197 = G__54464;
i__54198 = G__54465;
continue;
} else {
var path = cljs.core.first(seq__54194__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__54269_54466 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__54273_54467 = null;
var count__54274_54468 = (0);
var i__54275_54469 = (0);
while(true){
if((i__54275_54469 < count__54274_54468)){
var node_54470 = chunk__54273_54467.cljs$core$IIndexed$_nth$arity$2(null,i__54275_54469);
if(cljs.core.not(node_54470.shadow$old)){
var path_match_54471 = shadow.cljs.devtools.client.browser.match_paths(node_54470.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54471)){
var new_link_54472 = (function (){var G__54287 = node_54470.cloneNode(true);
G__54287.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54471),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54287;
})();
(node_54470.shadow$old = true);

(new_link_54472.onload = ((function (seq__54269_54466,chunk__54273_54467,count__54274_54468,i__54275_54469,seq__54194,chunk__54196,count__54197,i__54198,new_link_54472,path_match_54471,node_54470,path,seq__54194__$1,temp__5753__auto__,map__54193,map__54193__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_54470);
});})(seq__54269_54466,chunk__54273_54467,count__54274_54468,i__54275_54469,seq__54194,chunk__54196,count__54197,i__54198,new_link_54472,path_match_54471,node_54470,path,seq__54194__$1,temp__5753__auto__,map__54193,map__54193__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54471], 0));

goog.dom.insertSiblingAfter(new_link_54472,node_54470);


var G__54473 = seq__54269_54466;
var G__54474 = chunk__54273_54467;
var G__54475 = count__54274_54468;
var G__54476 = (i__54275_54469 + (1));
seq__54269_54466 = G__54473;
chunk__54273_54467 = G__54474;
count__54274_54468 = G__54475;
i__54275_54469 = G__54476;
continue;
} else {
var G__54477 = seq__54269_54466;
var G__54478 = chunk__54273_54467;
var G__54479 = count__54274_54468;
var G__54480 = (i__54275_54469 + (1));
seq__54269_54466 = G__54477;
chunk__54273_54467 = G__54478;
count__54274_54468 = G__54479;
i__54275_54469 = G__54480;
continue;
}
} else {
var G__54481 = seq__54269_54466;
var G__54482 = chunk__54273_54467;
var G__54483 = count__54274_54468;
var G__54484 = (i__54275_54469 + (1));
seq__54269_54466 = G__54481;
chunk__54273_54467 = G__54482;
count__54274_54468 = G__54483;
i__54275_54469 = G__54484;
continue;
}
} else {
var temp__5753__auto___54485__$1 = cljs.core.seq(seq__54269_54466);
if(temp__5753__auto___54485__$1){
var seq__54269_54486__$1 = temp__5753__auto___54485__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54269_54486__$1)){
var c__4649__auto___54487 = cljs.core.chunk_first(seq__54269_54486__$1);
var G__54488 = cljs.core.chunk_rest(seq__54269_54486__$1);
var G__54489 = c__4649__auto___54487;
var G__54490 = cljs.core.count(c__4649__auto___54487);
var G__54491 = (0);
seq__54269_54466 = G__54488;
chunk__54273_54467 = G__54489;
count__54274_54468 = G__54490;
i__54275_54469 = G__54491;
continue;
} else {
var node_54492 = cljs.core.first(seq__54269_54486__$1);
if(cljs.core.not(node_54492.shadow$old)){
var path_match_54493 = shadow.cljs.devtools.client.browser.match_paths(node_54492.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54493)){
var new_link_54494 = (function (){var G__54289 = node_54492.cloneNode(true);
G__54289.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54493),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54289;
})();
(node_54492.shadow$old = true);

(new_link_54494.onload = ((function (seq__54269_54466,chunk__54273_54467,count__54274_54468,i__54275_54469,seq__54194,chunk__54196,count__54197,i__54198,new_link_54494,path_match_54493,node_54492,seq__54269_54486__$1,temp__5753__auto___54485__$1,path,seq__54194__$1,temp__5753__auto__,map__54193,map__54193__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_54492);
});})(seq__54269_54466,chunk__54273_54467,count__54274_54468,i__54275_54469,seq__54194,chunk__54196,count__54197,i__54198,new_link_54494,path_match_54493,node_54492,seq__54269_54486__$1,temp__5753__auto___54485__$1,path,seq__54194__$1,temp__5753__auto__,map__54193,map__54193__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54493], 0));

goog.dom.insertSiblingAfter(new_link_54494,node_54492);


var G__54495 = cljs.core.next(seq__54269_54486__$1);
var G__54496 = null;
var G__54497 = (0);
var G__54498 = (0);
seq__54269_54466 = G__54495;
chunk__54273_54467 = G__54496;
count__54274_54468 = G__54497;
i__54275_54469 = G__54498;
continue;
} else {
var G__54499 = cljs.core.next(seq__54269_54486__$1);
var G__54500 = null;
var G__54501 = (0);
var G__54502 = (0);
seq__54269_54466 = G__54499;
chunk__54273_54467 = G__54500;
count__54274_54468 = G__54501;
i__54275_54469 = G__54502;
continue;
}
} else {
var G__54503 = cljs.core.next(seq__54269_54486__$1);
var G__54504 = null;
var G__54505 = (0);
var G__54506 = (0);
seq__54269_54466 = G__54503;
chunk__54273_54467 = G__54504;
count__54274_54468 = G__54505;
i__54275_54469 = G__54506;
continue;
}
}
} else {
}
}
break;
}


var G__54507 = cljs.core.next(seq__54194__$1);
var G__54508 = null;
var G__54509 = (0);
var G__54510 = (0);
seq__54194 = G__54507;
chunk__54196 = G__54508;
count__54197 = G__54509;
i__54198 = G__54510;
continue;
} else {
var G__54511 = cljs.core.next(seq__54194__$1);
var G__54512 = null;
var G__54513 = (0);
var G__54514 = (0);
seq__54194 = G__54511;
chunk__54196 = G__54512;
count__54197 = G__54513;
i__54198 = G__54514;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__54290){
var map__54291 = p__54290;
var map__54291__$1 = cljs.core.__destructure_map(map__54291);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54291__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__54292){
var map__54293 = p__54292;
var map__54293__$1 = cljs.core.__destructure_map(map__54293);
var _ = map__54293__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54293__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__54294,done,error){
var map__54295 = p__54294;
var map__54295__$1 = cljs.core.__destructure_map(map__54295);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54295__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__54296,done,error){
var map__54297 = p__54296;
var map__54297__$1 = cljs.core.__destructure_map(map__54297);
var msg = map__54297__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54297__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54297__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54297__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__54298){
var map__54299 = p__54298;
var map__54299__$1 = cljs.core.__destructure_map(map__54299);
var src = map__54299__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54299__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__54300 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__54300) : done.call(null,G__54300));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__54305){
var map__54306 = p__54305;
var map__54306__$1 = cljs.core.__destructure_map(map__54306);
var msg__$1 = map__54306__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54306__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e54307){var ex = e54307;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__54312){
var map__54313 = p__54312;
var map__54313__$1 = cljs.core.__destructure_map(map__54313);
var env = map__54313__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54313__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__54324){
var map__54325 = p__54324;
var map__54325__$1 = cljs.core.__destructure_map(map__54325);
var msg = map__54325__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54325__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__54334){
var map__54335 = p__54334;
var map__54335__$1 = cljs.core.__destructure_map(map__54335);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54335__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54335__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__54340){
var map__54341 = p__54340;
var map__54341__$1 = cljs.core.__destructure_map(map__54341);
var svc = map__54341__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54341__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
