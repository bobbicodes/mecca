goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___54469 = arguments.length;
var i__4830__auto___54470 = (0);
while(true){
if((i__4830__auto___54470 < len__4829__auto___54469)){
args__4835__auto__.push((arguments[i__4830__auto___54470]));

var G__54471 = (i__4830__auto___54470 + (1));
i__4830__auto___54470 = G__54471;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq54206){
var G__54207 = cljs.core.first(seq54206);
var seq54206__$1 = cljs.core.next(seq54206);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54207,seq54206__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__54209 = cljs.core.seq(sources);
var chunk__54210 = null;
var count__54211 = (0);
var i__54212 = (0);
while(true){
if((i__54212 < count__54211)){
var map__54219 = chunk__54210.cljs$core$IIndexed$_nth$arity$2(null,i__54212);
var map__54219__$1 = cljs.core.__destructure_map(map__54219);
var src = map__54219__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54219__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54219__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54219__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54219__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e54220){var e_54472 = e54220;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_54472);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_54472.message)].join('')));
}

var G__54473 = seq__54209;
var G__54474 = chunk__54210;
var G__54475 = count__54211;
var G__54476 = (i__54212 + (1));
seq__54209 = G__54473;
chunk__54210 = G__54474;
count__54211 = G__54475;
i__54212 = G__54476;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__54209);
if(temp__5753__auto__){
var seq__54209__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54209__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__54209__$1);
var G__54477 = cljs.core.chunk_rest(seq__54209__$1);
var G__54478 = c__4649__auto__;
var G__54479 = cljs.core.count(c__4649__auto__);
var G__54480 = (0);
seq__54209 = G__54477;
chunk__54210 = G__54478;
count__54211 = G__54479;
i__54212 = G__54480;
continue;
} else {
var map__54225 = cljs.core.first(seq__54209__$1);
var map__54225__$1 = cljs.core.__destructure_map(map__54225);
var src = map__54225__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54225__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54225__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54225__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54225__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e54226){var e_54481 = e54226;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_54481);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_54481.message)].join('')));
}

var G__54482 = cljs.core.next(seq__54209__$1);
var G__54483 = null;
var G__54484 = (0);
var G__54485 = (0);
seq__54209 = G__54482;
chunk__54210 = G__54483;
count__54211 = G__54484;
i__54212 = G__54485;
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
var seq__54234 = cljs.core.seq(js_requires);
var chunk__54235 = null;
var count__54236 = (0);
var i__54237 = (0);
while(true){
if((i__54237 < count__54236)){
var js_ns = chunk__54235.cljs$core$IIndexed$_nth$arity$2(null,i__54237);
var require_str_54486 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_54486);


var G__54487 = seq__54234;
var G__54488 = chunk__54235;
var G__54489 = count__54236;
var G__54490 = (i__54237 + (1));
seq__54234 = G__54487;
chunk__54235 = G__54488;
count__54236 = G__54489;
i__54237 = G__54490;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__54234);
if(temp__5753__auto__){
var seq__54234__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54234__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__54234__$1);
var G__54491 = cljs.core.chunk_rest(seq__54234__$1);
var G__54492 = c__4649__auto__;
var G__54493 = cljs.core.count(c__4649__auto__);
var G__54494 = (0);
seq__54234 = G__54491;
chunk__54235 = G__54492;
count__54236 = G__54493;
i__54237 = G__54494;
continue;
} else {
var js_ns = cljs.core.first(seq__54234__$1);
var require_str_54495 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_54495);


var G__54496 = cljs.core.next(seq__54234__$1);
var G__54497 = null;
var G__54498 = (0);
var G__54499 = (0);
seq__54234 = G__54496;
chunk__54235 = G__54497;
count__54236 = G__54498;
i__54237 = G__54499;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__54245){
var map__54246 = p__54245;
var map__54246__$1 = cljs.core.__destructure_map(map__54246);
var msg = map__54246__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54246__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54246__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54247(s__54248){
return (new cljs.core.LazySeq(null,(function (){
var s__54248__$1 = s__54248;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__54248__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__54253 = cljs.core.first(xs__6308__auto__);
var map__54253__$1 = cljs.core.__destructure_map(map__54253);
var src = map__54253__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54253__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54253__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__54248__$1,map__54253,map__54253__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__54246,map__54246__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54247_$_iter__54249(s__54250){
return (new cljs.core.LazySeq(null,((function (s__54248__$1,map__54253,map__54253__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__54246,map__54246__$1,msg,info,reload_info){
return (function (){
var s__54250__$1 = s__54250;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__54250__$1);
if(temp__5753__auto____$1){
var s__54250__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__54250__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__54250__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__54252 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__54251 = (0);
while(true){
if((i__54251 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__54251);
cljs.core.chunk_append(b__54252,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__54500 = (i__54251 + (1));
i__54251 = G__54500;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54252),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54247_$_iter__54249(cljs.core.chunk_rest(s__54250__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54252),null);
}
} else {
var warning = cljs.core.first(s__54250__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54247_$_iter__54249(cljs.core.rest(s__54250__$2)));
}
} else {
return null;
}
break;
}
});})(s__54248__$1,map__54253,map__54253__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__54246,map__54246__$1,msg,info,reload_info))
,null,null));
});})(s__54248__$1,map__54253,map__54253__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__54246,map__54246__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54247(cljs.core.rest(s__54248__$1)));
} else {
var G__54501 = cljs.core.rest(s__54248__$1);
s__54248__$1 = G__54501;
continue;
}
} else {
var G__54502 = cljs.core.rest(s__54248__$1);
s__54248__$1 = G__54502;
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
var seq__54254_54503 = cljs.core.seq(warnings);
var chunk__54255_54504 = null;
var count__54256_54505 = (0);
var i__54257_54506 = (0);
while(true){
if((i__54257_54506 < count__54256_54505)){
var map__54264_54507 = chunk__54255_54504.cljs$core$IIndexed$_nth$arity$2(null,i__54257_54506);
var map__54264_54508__$1 = cljs.core.__destructure_map(map__54264_54507);
var w_54509 = map__54264_54508__$1;
var msg_54510__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54264_54508__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_54511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54264_54508__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_54512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54264_54508__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_54513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54264_54508__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_54513)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_54511),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_54512),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_54510__$1)].join(''));


var G__54514 = seq__54254_54503;
var G__54515 = chunk__54255_54504;
var G__54516 = count__54256_54505;
var G__54517 = (i__54257_54506 + (1));
seq__54254_54503 = G__54514;
chunk__54255_54504 = G__54515;
count__54256_54505 = G__54516;
i__54257_54506 = G__54517;
continue;
} else {
var temp__5753__auto___54518 = cljs.core.seq(seq__54254_54503);
if(temp__5753__auto___54518){
var seq__54254_54519__$1 = temp__5753__auto___54518;
if(cljs.core.chunked_seq_QMARK_(seq__54254_54519__$1)){
var c__4649__auto___54520 = cljs.core.chunk_first(seq__54254_54519__$1);
var G__54521 = cljs.core.chunk_rest(seq__54254_54519__$1);
var G__54522 = c__4649__auto___54520;
var G__54523 = cljs.core.count(c__4649__auto___54520);
var G__54524 = (0);
seq__54254_54503 = G__54521;
chunk__54255_54504 = G__54522;
count__54256_54505 = G__54523;
i__54257_54506 = G__54524;
continue;
} else {
var map__54265_54525 = cljs.core.first(seq__54254_54519__$1);
var map__54265_54526__$1 = cljs.core.__destructure_map(map__54265_54525);
var w_54527 = map__54265_54526__$1;
var msg_54528__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54265_54526__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_54529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54265_54526__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_54530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54265_54526__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_54531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54265_54526__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_54531)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_54529),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_54530),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_54528__$1)].join(''));


var G__54532 = cljs.core.next(seq__54254_54519__$1);
var G__54533 = null;
var G__54534 = (0);
var G__54535 = (0);
seq__54254_54503 = G__54532;
chunk__54255_54504 = G__54533;
count__54256_54505 = G__54534;
i__54257_54506 = G__54535;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__54244_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__54244_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__54266){
var map__54267 = p__54266;
var map__54267__$1 = cljs.core.__destructure_map(map__54267);
var msg = map__54267__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54267__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__54268 = cljs.core.seq(updates);
var chunk__54270 = null;
var count__54271 = (0);
var i__54272 = (0);
while(true){
if((i__54272 < count__54271)){
var path = chunk__54270.cljs$core$IIndexed$_nth$arity$2(null,i__54272);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__54389_54536 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__54393_54537 = null;
var count__54394_54538 = (0);
var i__54395_54539 = (0);
while(true){
if((i__54395_54539 < count__54394_54538)){
var node_54540 = chunk__54393_54537.cljs$core$IIndexed$_nth$arity$2(null,i__54395_54539);
if(cljs.core.not(node_54540.shadow$old)){
var path_match_54541 = shadow.cljs.devtools.client.browser.match_paths(node_54540.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54541)){
var new_link_54542 = (function (){var G__54401 = node_54540.cloneNode(true);
G__54401.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54541),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54401;
})();
(node_54540.shadow$old = true);

(new_link_54542.onload = ((function (seq__54389_54536,chunk__54393_54537,count__54394_54538,i__54395_54539,seq__54268,chunk__54270,count__54271,i__54272,new_link_54542,path_match_54541,node_54540,path,map__54267,map__54267__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_54540);
});})(seq__54389_54536,chunk__54393_54537,count__54394_54538,i__54395_54539,seq__54268,chunk__54270,count__54271,i__54272,new_link_54542,path_match_54541,node_54540,path,map__54267,map__54267__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54541], 0));

goog.dom.insertSiblingAfter(new_link_54542,node_54540);


var G__54543 = seq__54389_54536;
var G__54544 = chunk__54393_54537;
var G__54545 = count__54394_54538;
var G__54546 = (i__54395_54539 + (1));
seq__54389_54536 = G__54543;
chunk__54393_54537 = G__54544;
count__54394_54538 = G__54545;
i__54395_54539 = G__54546;
continue;
} else {
var G__54547 = seq__54389_54536;
var G__54548 = chunk__54393_54537;
var G__54549 = count__54394_54538;
var G__54550 = (i__54395_54539 + (1));
seq__54389_54536 = G__54547;
chunk__54393_54537 = G__54548;
count__54394_54538 = G__54549;
i__54395_54539 = G__54550;
continue;
}
} else {
var G__54551 = seq__54389_54536;
var G__54552 = chunk__54393_54537;
var G__54553 = count__54394_54538;
var G__54554 = (i__54395_54539 + (1));
seq__54389_54536 = G__54551;
chunk__54393_54537 = G__54552;
count__54394_54538 = G__54553;
i__54395_54539 = G__54554;
continue;
}
} else {
var temp__5753__auto___54555 = cljs.core.seq(seq__54389_54536);
if(temp__5753__auto___54555){
var seq__54389_54556__$1 = temp__5753__auto___54555;
if(cljs.core.chunked_seq_QMARK_(seq__54389_54556__$1)){
var c__4649__auto___54557 = cljs.core.chunk_first(seq__54389_54556__$1);
var G__54558 = cljs.core.chunk_rest(seq__54389_54556__$1);
var G__54559 = c__4649__auto___54557;
var G__54560 = cljs.core.count(c__4649__auto___54557);
var G__54561 = (0);
seq__54389_54536 = G__54558;
chunk__54393_54537 = G__54559;
count__54394_54538 = G__54560;
i__54395_54539 = G__54561;
continue;
} else {
var node_54562 = cljs.core.first(seq__54389_54556__$1);
if(cljs.core.not(node_54562.shadow$old)){
var path_match_54563 = shadow.cljs.devtools.client.browser.match_paths(node_54562.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54563)){
var new_link_54564 = (function (){var G__54408 = node_54562.cloneNode(true);
G__54408.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54563),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54408;
})();
(node_54562.shadow$old = true);

(new_link_54564.onload = ((function (seq__54389_54536,chunk__54393_54537,count__54394_54538,i__54395_54539,seq__54268,chunk__54270,count__54271,i__54272,new_link_54564,path_match_54563,node_54562,seq__54389_54556__$1,temp__5753__auto___54555,path,map__54267,map__54267__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_54562);
});})(seq__54389_54536,chunk__54393_54537,count__54394_54538,i__54395_54539,seq__54268,chunk__54270,count__54271,i__54272,new_link_54564,path_match_54563,node_54562,seq__54389_54556__$1,temp__5753__auto___54555,path,map__54267,map__54267__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54563], 0));

goog.dom.insertSiblingAfter(new_link_54564,node_54562);


var G__54565 = cljs.core.next(seq__54389_54556__$1);
var G__54566 = null;
var G__54567 = (0);
var G__54568 = (0);
seq__54389_54536 = G__54565;
chunk__54393_54537 = G__54566;
count__54394_54538 = G__54567;
i__54395_54539 = G__54568;
continue;
} else {
var G__54569 = cljs.core.next(seq__54389_54556__$1);
var G__54570 = null;
var G__54571 = (0);
var G__54572 = (0);
seq__54389_54536 = G__54569;
chunk__54393_54537 = G__54570;
count__54394_54538 = G__54571;
i__54395_54539 = G__54572;
continue;
}
} else {
var G__54573 = cljs.core.next(seq__54389_54556__$1);
var G__54574 = null;
var G__54575 = (0);
var G__54576 = (0);
seq__54389_54536 = G__54573;
chunk__54393_54537 = G__54574;
count__54394_54538 = G__54575;
i__54395_54539 = G__54576;
continue;
}
}
} else {
}
}
break;
}


var G__54577 = seq__54268;
var G__54578 = chunk__54270;
var G__54579 = count__54271;
var G__54580 = (i__54272 + (1));
seq__54268 = G__54577;
chunk__54270 = G__54578;
count__54271 = G__54579;
i__54272 = G__54580;
continue;
} else {
var G__54581 = seq__54268;
var G__54582 = chunk__54270;
var G__54583 = count__54271;
var G__54584 = (i__54272 + (1));
seq__54268 = G__54581;
chunk__54270 = G__54582;
count__54271 = G__54583;
i__54272 = G__54584;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__54268);
if(temp__5753__auto__){
var seq__54268__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54268__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__54268__$1);
var G__54588 = cljs.core.chunk_rest(seq__54268__$1);
var G__54589 = c__4649__auto__;
var G__54590 = cljs.core.count(c__4649__auto__);
var G__54591 = (0);
seq__54268 = G__54588;
chunk__54270 = G__54589;
count__54271 = G__54590;
i__54272 = G__54591;
continue;
} else {
var path = cljs.core.first(seq__54268__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__54409_54592 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__54413_54593 = null;
var count__54414_54594 = (0);
var i__54415_54595 = (0);
while(true){
if((i__54415_54595 < count__54414_54594)){
var node_54596 = chunk__54413_54593.cljs$core$IIndexed$_nth$arity$2(null,i__54415_54595);
if(cljs.core.not(node_54596.shadow$old)){
var path_match_54597 = shadow.cljs.devtools.client.browser.match_paths(node_54596.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54597)){
var new_link_54598 = (function (){var G__54421 = node_54596.cloneNode(true);
G__54421.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54597),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54421;
})();
(node_54596.shadow$old = true);

(new_link_54598.onload = ((function (seq__54409_54592,chunk__54413_54593,count__54414_54594,i__54415_54595,seq__54268,chunk__54270,count__54271,i__54272,new_link_54598,path_match_54597,node_54596,path,seq__54268__$1,temp__5753__auto__,map__54267,map__54267__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_54596);
});})(seq__54409_54592,chunk__54413_54593,count__54414_54594,i__54415_54595,seq__54268,chunk__54270,count__54271,i__54272,new_link_54598,path_match_54597,node_54596,path,seq__54268__$1,temp__5753__auto__,map__54267,map__54267__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54597], 0));

goog.dom.insertSiblingAfter(new_link_54598,node_54596);


var G__54599 = seq__54409_54592;
var G__54600 = chunk__54413_54593;
var G__54601 = count__54414_54594;
var G__54602 = (i__54415_54595 + (1));
seq__54409_54592 = G__54599;
chunk__54413_54593 = G__54600;
count__54414_54594 = G__54601;
i__54415_54595 = G__54602;
continue;
} else {
var G__54603 = seq__54409_54592;
var G__54604 = chunk__54413_54593;
var G__54605 = count__54414_54594;
var G__54606 = (i__54415_54595 + (1));
seq__54409_54592 = G__54603;
chunk__54413_54593 = G__54604;
count__54414_54594 = G__54605;
i__54415_54595 = G__54606;
continue;
}
} else {
var G__54607 = seq__54409_54592;
var G__54608 = chunk__54413_54593;
var G__54609 = count__54414_54594;
var G__54610 = (i__54415_54595 + (1));
seq__54409_54592 = G__54607;
chunk__54413_54593 = G__54608;
count__54414_54594 = G__54609;
i__54415_54595 = G__54610;
continue;
}
} else {
var temp__5753__auto___54611__$1 = cljs.core.seq(seq__54409_54592);
if(temp__5753__auto___54611__$1){
var seq__54409_54612__$1 = temp__5753__auto___54611__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54409_54612__$1)){
var c__4649__auto___54613 = cljs.core.chunk_first(seq__54409_54612__$1);
var G__54614 = cljs.core.chunk_rest(seq__54409_54612__$1);
var G__54615 = c__4649__auto___54613;
var G__54616 = cljs.core.count(c__4649__auto___54613);
var G__54617 = (0);
seq__54409_54592 = G__54614;
chunk__54413_54593 = G__54615;
count__54414_54594 = G__54616;
i__54415_54595 = G__54617;
continue;
} else {
var node_54618 = cljs.core.first(seq__54409_54612__$1);
if(cljs.core.not(node_54618.shadow$old)){
var path_match_54619 = shadow.cljs.devtools.client.browser.match_paths(node_54618.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54619)){
var new_link_54620 = (function (){var G__54422 = node_54618.cloneNode(true);
G__54422.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54619),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54422;
})();
(node_54618.shadow$old = true);

(new_link_54620.onload = ((function (seq__54409_54592,chunk__54413_54593,count__54414_54594,i__54415_54595,seq__54268,chunk__54270,count__54271,i__54272,new_link_54620,path_match_54619,node_54618,seq__54409_54612__$1,temp__5753__auto___54611__$1,path,seq__54268__$1,temp__5753__auto__,map__54267,map__54267__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_54618);
});})(seq__54409_54592,chunk__54413_54593,count__54414_54594,i__54415_54595,seq__54268,chunk__54270,count__54271,i__54272,new_link_54620,path_match_54619,node_54618,seq__54409_54612__$1,temp__5753__auto___54611__$1,path,seq__54268__$1,temp__5753__auto__,map__54267,map__54267__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54619], 0));

goog.dom.insertSiblingAfter(new_link_54620,node_54618);


var G__54621 = cljs.core.next(seq__54409_54612__$1);
var G__54622 = null;
var G__54623 = (0);
var G__54624 = (0);
seq__54409_54592 = G__54621;
chunk__54413_54593 = G__54622;
count__54414_54594 = G__54623;
i__54415_54595 = G__54624;
continue;
} else {
var G__54625 = cljs.core.next(seq__54409_54612__$1);
var G__54626 = null;
var G__54627 = (0);
var G__54628 = (0);
seq__54409_54592 = G__54625;
chunk__54413_54593 = G__54626;
count__54414_54594 = G__54627;
i__54415_54595 = G__54628;
continue;
}
} else {
var G__54629 = cljs.core.next(seq__54409_54612__$1);
var G__54630 = null;
var G__54631 = (0);
var G__54632 = (0);
seq__54409_54592 = G__54629;
chunk__54413_54593 = G__54630;
count__54414_54594 = G__54631;
i__54415_54595 = G__54632;
continue;
}
}
} else {
}
}
break;
}


var G__54633 = cljs.core.next(seq__54268__$1);
var G__54634 = null;
var G__54635 = (0);
var G__54636 = (0);
seq__54268 = G__54633;
chunk__54270 = G__54634;
count__54271 = G__54635;
i__54272 = G__54636;
continue;
} else {
var G__54637 = cljs.core.next(seq__54268__$1);
var G__54638 = null;
var G__54639 = (0);
var G__54640 = (0);
seq__54268 = G__54637;
chunk__54270 = G__54638;
count__54271 = G__54639;
i__54272 = G__54640;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__54423){
var map__54424 = p__54423;
var map__54424__$1 = cljs.core.__destructure_map(map__54424);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54424__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__54430){
var map__54431 = p__54430;
var map__54431__$1 = cljs.core.__destructure_map(map__54431);
var _ = map__54431__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54431__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__54432,done,error){
var map__54433 = p__54432;
var map__54433__$1 = cljs.core.__destructure_map(map__54433);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54433__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__54436,done,error){
var map__54437 = p__54436;
var map__54437__$1 = cljs.core.__destructure_map(map__54437);
var msg = map__54437__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54437__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54437__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54437__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__54438){
var map__54439 = p__54438;
var map__54439__$1 = cljs.core.__destructure_map(map__54439);
var src = map__54439__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54439__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__54457 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__54457) : done.call(null,G__54457));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__54458){
var map__54459 = p__54458;
var map__54459__$1 = cljs.core.__destructure_map(map__54459);
var msg__$1 = map__54459__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54459__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e54460){var ex = e54460;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__54461){
var map__54462 = p__54461;
var map__54462__$1 = cljs.core.__destructure_map(map__54462);
var env = map__54462__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54462__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__54463){
var map__54464 = p__54463;
var map__54464__$1 = cljs.core.__destructure_map(map__54464);
var msg = map__54464__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54464__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__54465){
var map__54466 = p__54465;
var map__54466__$1 = cljs.core.__destructure_map(map__54466);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54466__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54466__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__54467){
var map__54468 = p__54467;
var map__54468__$1 = cljs.core.__destructure_map(map__54468);
var svc = map__54468__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54468__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
