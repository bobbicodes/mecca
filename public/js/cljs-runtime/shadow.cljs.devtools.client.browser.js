goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35015 = arguments.length;
var i__4790__auto___35016 = (0);
while(true){
if((i__4790__auto___35016 < len__4789__auto___35015)){
args__4795__auto__.push((arguments[i__4790__auto___35016]));

var G__35020 = (i__4790__auto___35016 + (1));
i__4790__auto___35016 = G__35020;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq34555){
var G__34556 = cljs.core.first(seq34555);
var seq34555__$1 = cljs.core.next(seq34555);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34556,seq34555__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__34561){
var map__34562 = p__34561;
var map__34562__$1 = (((((!((map__34562 == null))))?(((((map__34562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34562):map__34562);
var src = map__34562__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34562__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34562__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__34565 = cljs.core.seq(sources);
var chunk__34567 = null;
var count__34568 = (0);
var i__34569 = (0);
while(true){
if((i__34569 < count__34568)){
var map__34578 = chunk__34567.cljs$core$IIndexed$_nth$arity$2(null,i__34569);
var map__34578__$1 = (((((!((map__34578 == null))))?(((((map__34578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34578):map__34578);
var src = map__34578__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34578__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34578__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34578__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34578__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34582){var e_35050 = e34582;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35050);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35050.message)].join('')));
}

var G__35053 = seq__34565;
var G__35054 = chunk__34567;
var G__35055 = count__34568;
var G__35056 = (i__34569 + (1));
seq__34565 = G__35053;
chunk__34567 = G__35054;
count__34568 = G__35055;
i__34569 = G__35056;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34565);
if(temp__5735__auto__){
var seq__34565__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34565__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34565__$1);
var G__35061 = cljs.core.chunk_rest(seq__34565__$1);
var G__35062 = c__4609__auto__;
var G__35063 = cljs.core.count(c__4609__auto__);
var G__35064 = (0);
seq__34565 = G__35061;
chunk__34567 = G__35062;
count__34568 = G__35063;
i__34569 = G__35064;
continue;
} else {
var map__34583 = cljs.core.first(seq__34565__$1);
var map__34583__$1 = (((((!((map__34583 == null))))?(((((map__34583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34583):map__34583);
var src = map__34583__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34583__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34583__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34583__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34583__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34585){var e_35075 = e34585;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35075);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35075.message)].join('')));
}

var G__35077 = cljs.core.next(seq__34565__$1);
var G__35078 = null;
var G__35079 = (0);
var G__35080 = (0);
seq__34565 = G__35077;
chunk__34567 = G__35078;
count__34568 = G__35079;
i__34569 = G__35080;
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
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
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
var seq__34588 = cljs.core.seq(js_requires);
var chunk__34589 = null;
var count__34590 = (0);
var i__34591 = (0);
while(true){
if((i__34591 < count__34590)){
var js_ns = chunk__34589.cljs$core$IIndexed$_nth$arity$2(null,i__34591);
var require_str_35091 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35091);


var G__35093 = seq__34588;
var G__35094 = chunk__34589;
var G__35095 = count__34590;
var G__35096 = (i__34591 + (1));
seq__34588 = G__35093;
chunk__34589 = G__35094;
count__34590 = G__35095;
i__34591 = G__35096;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34588);
if(temp__5735__auto__){
var seq__34588__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34588__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34588__$1);
var G__35098 = cljs.core.chunk_rest(seq__34588__$1);
var G__35099 = c__4609__auto__;
var G__35100 = cljs.core.count(c__4609__auto__);
var G__35101 = (0);
seq__34588 = G__35098;
chunk__34589 = G__35099;
count__34590 = G__35100;
i__34591 = G__35101;
continue;
} else {
var js_ns = cljs.core.first(seq__34588__$1);
var require_str_35103 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35103);


var G__35105 = cljs.core.next(seq__34588__$1);
var G__35106 = null;
var G__35107 = (0);
var G__35108 = (0);
seq__34588 = G__35105;
chunk__34589 = G__35106;
count__34590 = G__35107;
i__34591 = G__35108;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__34592 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__34592) : callback.call(null,G__34592));
} else {
var G__34593 = shadow.cljs.devtools.client.env.files_url();
var G__34594 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__34595 = "POST";
var G__34596 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__34597 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__34593,G__34594,G__34595,G__34596,G__34597);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__34601){
var map__34602 = p__34601;
var map__34602__$1 = (((((!((map__34602 == null))))?(((((map__34602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34602):map__34602);
var msg = map__34602__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34602__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34602__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__34607 = info;
var map__34607__$1 = (((((!((map__34607 == null))))?(((((map__34607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34607):map__34607);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34607__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34607__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34610(s__34611){
return (new cljs.core.LazySeq(null,(function (){
var s__34611__$1 = s__34611;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34611__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__34619 = cljs.core.first(xs__6292__auto__);
var map__34619__$1 = (((((!((map__34619 == null))))?(((((map__34619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34619):map__34619);
var src = map__34619__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34619__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34619__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__34611__$1,map__34619,map__34619__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34607,map__34607__$1,sources,compiled,map__34602,map__34602__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34610_$_iter__34612(s__34613){
return (new cljs.core.LazySeq(null,((function (s__34611__$1,map__34619,map__34619__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34607,map__34607__$1,sources,compiled,map__34602,map__34602__$1,msg,info,reload_info){
return (function (){
var s__34613__$1 = s__34613;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__34613__$1);
if(temp__5735__auto____$1){
var s__34613__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34613__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__34613__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__34615 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__34614 = (0);
while(true){
if((i__34614 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__34614);
cljs.core.chunk_append(b__34615,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35125 = (i__34614 + (1));
i__34614 = G__35125;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34615),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34610_$_iter__34612(cljs.core.chunk_rest(s__34613__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34615),null);
}
} else {
var warning = cljs.core.first(s__34613__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34610_$_iter__34612(cljs.core.rest(s__34613__$2)));
}
} else {
return null;
}
break;
}
});})(s__34611__$1,map__34619,map__34619__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34607,map__34607__$1,sources,compiled,map__34602,map__34602__$1,msg,info,reload_info))
,null,null));
});})(s__34611__$1,map__34619,map__34619__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34607,map__34607__$1,sources,compiled,map__34602,map__34602__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34610(cljs.core.rest(s__34611__$1)));
} else {
var G__35127 = cljs.core.rest(s__34611__$1);
s__34611__$1 = G__35127;
continue;
}
} else {
var G__35128 = cljs.core.rest(s__34611__$1);
s__34611__$1 = G__35128;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__34625_35131 = cljs.core.seq(warnings);
var chunk__34626_35132 = null;
var count__34627_35133 = (0);
var i__34628_35134 = (0);
while(true){
if((i__34628_35134 < count__34627_35133)){
var map__34641_35136 = chunk__34626_35132.cljs$core$IIndexed$_nth$arity$2(null,i__34628_35134);
var map__34641_35137__$1 = (((((!((map__34641_35136 == null))))?(((((map__34641_35136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34641_35136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34641_35136):map__34641_35136);
var w_35138 = map__34641_35137__$1;
var msg_35139__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34641_35137__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34641_35137__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34641_35137__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34641_35137__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35143)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35141),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35142),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35139__$1)].join(''));


var G__35144 = seq__34625_35131;
var G__35145 = chunk__34626_35132;
var G__35146 = count__34627_35133;
var G__35147 = (i__34628_35134 + (1));
seq__34625_35131 = G__35144;
chunk__34626_35132 = G__35145;
count__34627_35133 = G__35146;
i__34628_35134 = G__35147;
continue;
} else {
var temp__5735__auto___35149 = cljs.core.seq(seq__34625_35131);
if(temp__5735__auto___35149){
var seq__34625_35150__$1 = temp__5735__auto___35149;
if(cljs.core.chunked_seq_QMARK_(seq__34625_35150__$1)){
var c__4609__auto___35152 = cljs.core.chunk_first(seq__34625_35150__$1);
var G__35153 = cljs.core.chunk_rest(seq__34625_35150__$1);
var G__35154 = c__4609__auto___35152;
var G__35155 = cljs.core.count(c__4609__auto___35152);
var G__35156 = (0);
seq__34625_35131 = G__35153;
chunk__34626_35132 = G__35154;
count__34627_35133 = G__35155;
i__34628_35134 = G__35156;
continue;
} else {
var map__34647_35157 = cljs.core.first(seq__34625_35150__$1);
var map__34647_35158__$1 = (((((!((map__34647_35157 == null))))?(((((map__34647_35157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34647_35157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34647_35157):map__34647_35157);
var w_35159 = map__34647_35158__$1;
var msg_35160__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34647_35158__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34647_35158__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34647_35158__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34647_35158__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35163)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35161),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35162),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35160__$1)].join(''));


var G__35164 = cljs.core.next(seq__34625_35150__$1);
var G__35165 = null;
var G__35166 = (0);
var G__35167 = (0);
seq__34625_35131 = G__35164;
chunk__34626_35132 = G__35165;
count__34627_35133 = G__35166;
i__34628_35134 = G__35167;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34654){
var map__34655 = p__34654;
var map__34655__$1 = (((((!((map__34655 == null))))?(((((map__34655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34655):map__34655);
var src = map__34655__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34655__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34655__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34661){
var map__34662 = p__34661;
var map__34662__$1 = (((((!((map__34662 == null))))?(((((map__34662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34662):map__34662);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34662__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34667){
var map__34668 = p__34667;
var map__34668__$1 = (((((!((map__34668 == null))))?(((((map__34668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34668):map__34668);
var rc = map__34668__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34668__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__34600_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__34600_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__34683){
var map__34684 = p__34683;
var map__34684__$1 = (((((!((map__34684 == null))))?(((((map__34684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34684):map__34684);
var msg = map__34684__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34684__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__34689 = cljs.core.seq(updates);
var chunk__34691 = null;
var count__34692 = (0);
var i__34693 = (0);
while(true){
if((i__34693 < count__34692)){
var path = chunk__34691.cljs$core$IIndexed$_nth$arity$2(null,i__34693);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34767_35174 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34770_35175 = null;
var count__34771_35176 = (0);
var i__34772_35177 = (0);
while(true){
if((i__34772_35177 < count__34771_35176)){
var node_35178 = chunk__34770_35175.cljs$core$IIndexed$_nth$arity$2(null,i__34772_35177);
var path_match_35179 = shadow.cljs.devtools.client.browser.match_paths(node_35178.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35179)){
var new_link_35180 = (function (){var G__34791 = node_35178.cloneNode(true);
G__34791.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35179),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34791;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35179], 0));

goog.dom.insertSiblingAfter(new_link_35180,node_35178);

goog.dom.removeNode(node_35178);


var G__35181 = seq__34767_35174;
var G__35182 = chunk__34770_35175;
var G__35183 = count__34771_35176;
var G__35184 = (i__34772_35177 + (1));
seq__34767_35174 = G__35181;
chunk__34770_35175 = G__35182;
count__34771_35176 = G__35183;
i__34772_35177 = G__35184;
continue;
} else {
var G__35185 = seq__34767_35174;
var G__35186 = chunk__34770_35175;
var G__35187 = count__34771_35176;
var G__35188 = (i__34772_35177 + (1));
seq__34767_35174 = G__35185;
chunk__34770_35175 = G__35186;
count__34771_35176 = G__35187;
i__34772_35177 = G__35188;
continue;
}
} else {
var temp__5735__auto___35189 = cljs.core.seq(seq__34767_35174);
if(temp__5735__auto___35189){
var seq__34767_35190__$1 = temp__5735__auto___35189;
if(cljs.core.chunked_seq_QMARK_(seq__34767_35190__$1)){
var c__4609__auto___35191 = cljs.core.chunk_first(seq__34767_35190__$1);
var G__35192 = cljs.core.chunk_rest(seq__34767_35190__$1);
var G__35193 = c__4609__auto___35191;
var G__35194 = cljs.core.count(c__4609__auto___35191);
var G__35195 = (0);
seq__34767_35174 = G__35192;
chunk__34770_35175 = G__35193;
count__34771_35176 = G__35194;
i__34772_35177 = G__35195;
continue;
} else {
var node_35196 = cljs.core.first(seq__34767_35190__$1);
var path_match_35197 = shadow.cljs.devtools.client.browser.match_paths(node_35196.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35197)){
var new_link_35198 = (function (){var G__34796 = node_35196.cloneNode(true);
G__34796.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35197),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34796;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35197], 0));

goog.dom.insertSiblingAfter(new_link_35198,node_35196);

goog.dom.removeNode(node_35196);


var G__35199 = cljs.core.next(seq__34767_35190__$1);
var G__35200 = null;
var G__35201 = (0);
var G__35202 = (0);
seq__34767_35174 = G__35199;
chunk__34770_35175 = G__35200;
count__34771_35176 = G__35201;
i__34772_35177 = G__35202;
continue;
} else {
var G__35203 = cljs.core.next(seq__34767_35190__$1);
var G__35204 = null;
var G__35205 = (0);
var G__35206 = (0);
seq__34767_35174 = G__35203;
chunk__34770_35175 = G__35204;
count__34771_35176 = G__35205;
i__34772_35177 = G__35206;
continue;
}
}
} else {
}
}
break;
}


var G__35207 = seq__34689;
var G__35208 = chunk__34691;
var G__35209 = count__34692;
var G__35210 = (i__34693 + (1));
seq__34689 = G__35207;
chunk__34691 = G__35208;
count__34692 = G__35209;
i__34693 = G__35210;
continue;
} else {
var G__35211 = seq__34689;
var G__35212 = chunk__34691;
var G__35213 = count__34692;
var G__35214 = (i__34693 + (1));
seq__34689 = G__35211;
chunk__34691 = G__35212;
count__34692 = G__35213;
i__34693 = G__35214;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34689);
if(temp__5735__auto__){
var seq__34689__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34689__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34689__$1);
var G__35215 = cljs.core.chunk_rest(seq__34689__$1);
var G__35216 = c__4609__auto__;
var G__35217 = cljs.core.count(c__4609__auto__);
var G__35218 = (0);
seq__34689 = G__35215;
chunk__34691 = G__35216;
count__34692 = G__35217;
i__34693 = G__35218;
continue;
} else {
var path = cljs.core.first(seq__34689__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34801_35219 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34804_35220 = null;
var count__34805_35221 = (0);
var i__34806_35222 = (0);
while(true){
if((i__34806_35222 < count__34805_35221)){
var node_35223 = chunk__34804_35220.cljs$core$IIndexed$_nth$arity$2(null,i__34806_35222);
var path_match_35224 = shadow.cljs.devtools.client.browser.match_paths(node_35223.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35224)){
var new_link_35225 = (function (){var G__34819 = node_35223.cloneNode(true);
G__34819.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35224),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34819;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35224], 0));

goog.dom.insertSiblingAfter(new_link_35225,node_35223);

goog.dom.removeNode(node_35223);


var G__35226 = seq__34801_35219;
var G__35227 = chunk__34804_35220;
var G__35228 = count__34805_35221;
var G__35229 = (i__34806_35222 + (1));
seq__34801_35219 = G__35226;
chunk__34804_35220 = G__35227;
count__34805_35221 = G__35228;
i__34806_35222 = G__35229;
continue;
} else {
var G__35230 = seq__34801_35219;
var G__35231 = chunk__34804_35220;
var G__35232 = count__34805_35221;
var G__35233 = (i__34806_35222 + (1));
seq__34801_35219 = G__35230;
chunk__34804_35220 = G__35231;
count__34805_35221 = G__35232;
i__34806_35222 = G__35233;
continue;
}
} else {
var temp__5735__auto___35234__$1 = cljs.core.seq(seq__34801_35219);
if(temp__5735__auto___35234__$1){
var seq__34801_35235__$1 = temp__5735__auto___35234__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34801_35235__$1)){
var c__4609__auto___35236 = cljs.core.chunk_first(seq__34801_35235__$1);
var G__35237 = cljs.core.chunk_rest(seq__34801_35235__$1);
var G__35238 = c__4609__auto___35236;
var G__35239 = cljs.core.count(c__4609__auto___35236);
var G__35240 = (0);
seq__34801_35219 = G__35237;
chunk__34804_35220 = G__35238;
count__34805_35221 = G__35239;
i__34806_35222 = G__35240;
continue;
} else {
var node_35241 = cljs.core.first(seq__34801_35235__$1);
var path_match_35242 = shadow.cljs.devtools.client.browser.match_paths(node_35241.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35242)){
var new_link_35243 = (function (){var G__34824 = node_35241.cloneNode(true);
G__34824.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35242),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34824;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35242], 0));

goog.dom.insertSiblingAfter(new_link_35243,node_35241);

goog.dom.removeNode(node_35241);


var G__35244 = cljs.core.next(seq__34801_35235__$1);
var G__35245 = null;
var G__35246 = (0);
var G__35247 = (0);
seq__34801_35219 = G__35244;
chunk__34804_35220 = G__35245;
count__34805_35221 = G__35246;
i__34806_35222 = G__35247;
continue;
} else {
var G__35248 = cljs.core.next(seq__34801_35235__$1);
var G__35249 = null;
var G__35250 = (0);
var G__35251 = (0);
seq__34801_35219 = G__35248;
chunk__34804_35220 = G__35249;
count__34805_35221 = G__35250;
i__34806_35222 = G__35251;
continue;
}
}
} else {
}
}
break;
}


var G__35252 = cljs.core.next(seq__34689__$1);
var G__35253 = null;
var G__35254 = (0);
var G__35255 = (0);
seq__34689 = G__35252;
chunk__34691 = G__35253;
count__34692 = G__35254;
i__34693 = G__35255;
continue;
} else {
var G__35256 = cljs.core.next(seq__34689__$1);
var G__35257 = null;
var G__35258 = (0);
var G__35259 = (0);
seq__34689 = G__35256;
chunk__34691 = G__35257;
count__34692 = G__35258;
i__34693 = G__35259;
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
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__34843){
var map__34845 = p__34843;
var map__34845__$1 = (((((!((map__34845 == null))))?(((((map__34845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34845):map__34845);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34845__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34845__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__34855,done){
var map__34856 = p__34855;
var map__34856__$1 = (((((!((map__34856 == null))))?(((((map__34856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34856):map__34856);
var msg = map__34856__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34856__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34856__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34856__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34856__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34862){
var map__34863 = p__34862;
var map__34863__$1 = (((((!((map__34863 == null))))?(((((map__34863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34863):map__34863);
var src = map__34863__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34863__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e34869){var e = e34869;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__34873,done){
var map__34874 = p__34873;
var map__34874__$1 = (((((!((map__34874 == null))))?(((((map__34874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34874):map__34874);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34874__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34874__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__34882){
var map__34884 = p__34882;
var map__34884__$1 = (((((!((map__34884 == null))))?(((((map__34884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34884):map__34884);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34884__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34884__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__34898,done){
var map__34899 = p__34898;
var map__34899__$1 = (((((!((map__34899 == null))))?(((((map__34899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34899):map__34899);
var msg = map__34899__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34899__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__34907_35266 = type;
var G__34907_35267__$1 = (((G__34907_35266 instanceof cljs.core.Keyword))?G__34907_35266.fqn:null);
switch (G__34907_35267__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__34938 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__34939 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__34940 = "POST";
var G__34941 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__34942 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__34938,G__34939,G__34940,G__34941,G__34942);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__34963 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__34962 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__34962.cljs$core$IFn$_invoke$arity$1 ? fexpr__34962.cljs$core$IFn$_invoke$arity$1(G__34963) : fexpr__34962.call(null,G__34963));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e34978){var e = e34978;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___35282 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___35282)){
var s_35283 = temp__5735__auto___35282;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_35283.onclose = (function (e){
return null;
}));

s_35283.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
