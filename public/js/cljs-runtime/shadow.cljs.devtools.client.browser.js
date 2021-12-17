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
var len__4789__auto___38077 = arguments.length;
var i__4790__auto___38078 = (0);
while(true){
if((i__4790__auto___38078 < len__4789__auto___38077)){
args__4795__auto__.push((arguments[i__4790__auto___38078]));

var G__38079 = (i__4790__auto___38078 + (1));
i__4790__auto___38078 = G__38079;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37884){
var G__37885 = cljs.core.first(seq37884);
var seq37884__$1 = cljs.core.next(seq37884);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37885,seq37884__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__37891){
var map__37892 = p__37891;
var map__37892__$1 = (((((!((map__37892 == null))))?(((((map__37892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37892):map__37892);
var src = map__37892__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37892__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37892__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__37894 = cljs.core.seq(sources);
var chunk__37895 = null;
var count__37896 = (0);
var i__37897 = (0);
while(true){
if((i__37897 < count__37896)){
var map__37908 = chunk__37895.cljs$core$IIndexed$_nth$arity$2(null,i__37897);
var map__37908__$1 = (((((!((map__37908 == null))))?(((((map__37908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37908):map__37908);
var src = map__37908__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37908__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37908__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37908__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37908__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e37912){var e_38084 = e37912;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38084);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38084.message)].join('')));
}

var G__38085 = seq__37894;
var G__38086 = chunk__37895;
var G__38087 = count__37896;
var G__38088 = (i__37897 + (1));
seq__37894 = G__38085;
chunk__37895 = G__38086;
count__37896 = G__38087;
i__37897 = G__38088;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37894);
if(temp__5735__auto__){
var seq__37894__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37894__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37894__$1);
var G__38089 = cljs.core.chunk_rest(seq__37894__$1);
var G__38090 = c__4609__auto__;
var G__38091 = cljs.core.count(c__4609__auto__);
var G__38092 = (0);
seq__37894 = G__38089;
chunk__37895 = G__38090;
count__37896 = G__38091;
i__37897 = G__38092;
continue;
} else {
var map__37914 = cljs.core.first(seq__37894__$1);
var map__37914__$1 = (((((!((map__37914 == null))))?(((((map__37914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37914):map__37914);
var src = map__37914__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37914__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37914__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37914__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37914__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e37916){var e_38093 = e37916;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38093);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38093.message)].join('')));
}

var G__38094 = cljs.core.next(seq__37894__$1);
var G__38095 = null;
var G__38096 = (0);
var G__38097 = (0);
seq__37894 = G__38094;
chunk__37895 = G__38095;
count__37896 = G__38096;
i__37897 = G__38097;
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
var seq__37921 = cljs.core.seq(js_requires);
var chunk__37922 = null;
var count__37923 = (0);
var i__37924 = (0);
while(true){
if((i__37924 < count__37923)){
var js_ns = chunk__37922.cljs$core$IIndexed$_nth$arity$2(null,i__37924);
var require_str_38098 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38098);


var G__38099 = seq__37921;
var G__38100 = chunk__37922;
var G__38101 = count__37923;
var G__38102 = (i__37924 + (1));
seq__37921 = G__38099;
chunk__37922 = G__38100;
count__37923 = G__38101;
i__37924 = G__38102;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37921);
if(temp__5735__auto__){
var seq__37921__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37921__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37921__$1);
var G__38103 = cljs.core.chunk_rest(seq__37921__$1);
var G__38104 = c__4609__auto__;
var G__38105 = cljs.core.count(c__4609__auto__);
var G__38106 = (0);
seq__37921 = G__38103;
chunk__37922 = G__38104;
count__37923 = G__38105;
i__37924 = G__38106;
continue;
} else {
var js_ns = cljs.core.first(seq__37921__$1);
var require_str_38107 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38107);


var G__38108 = cljs.core.next(seq__37921__$1);
var G__38109 = null;
var G__38110 = (0);
var G__38111 = (0);
seq__37921 = G__38108;
chunk__37922 = G__38109;
count__37923 = G__38110;
i__37924 = G__38111;
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
var G__37925 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__37925) : callback.call(null,G__37925));
} else {
var G__37926 = shadow.cljs.devtools.client.env.files_url();
var G__37927 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__37928 = "POST";
var G__37929 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__37930 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37926,G__37927,G__37928,G__37929,G__37930);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__37936){
var map__37937 = p__37936;
var map__37937__$1 = (((((!((map__37937 == null))))?(((((map__37937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37937):map__37937);
var msg = map__37937__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37937__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37937__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__37939 = info;
var map__37939__$1 = (((((!((map__37939 == null))))?(((((map__37939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37939):map__37939);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37939__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37939__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37941(s__37942){
return (new cljs.core.LazySeq(null,(function (){
var s__37942__$1 = s__37942;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37942__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__37947 = cljs.core.first(xs__6292__auto__);
var map__37947__$1 = (((((!((map__37947 == null))))?(((((map__37947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37947):map__37947);
var src = map__37947__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37947__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37947__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__37942__$1,map__37947,map__37947__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37939,map__37939__$1,sources,compiled,map__37937,map__37937__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37941_$_iter__37943(s__37944){
return (new cljs.core.LazySeq(null,((function (s__37942__$1,map__37947,map__37947__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37939,map__37939__$1,sources,compiled,map__37937,map__37937__$1,msg,info,reload_info){
return (function (){
var s__37944__$1 = s__37944;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37944__$1);
if(temp__5735__auto____$1){
var s__37944__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37944__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37944__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37946 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37945 = (0);
while(true){
if((i__37945 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37945);
cljs.core.chunk_append(b__37946,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38113 = (i__37945 + (1));
i__37945 = G__38113;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37946),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37941_$_iter__37943(cljs.core.chunk_rest(s__37944__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37946),null);
}
} else {
var warning = cljs.core.first(s__37944__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37941_$_iter__37943(cljs.core.rest(s__37944__$2)));
}
} else {
return null;
}
break;
}
});})(s__37942__$1,map__37947,map__37947__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37939,map__37939__$1,sources,compiled,map__37937,map__37937__$1,msg,info,reload_info))
,null,null));
});})(s__37942__$1,map__37947,map__37947__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37939,map__37939__$1,sources,compiled,map__37937,map__37937__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37941(cljs.core.rest(s__37942__$1)));
} else {
var G__38114 = cljs.core.rest(s__37942__$1);
s__37942__$1 = G__38114;
continue;
}
} else {
var G__38115 = cljs.core.rest(s__37942__$1);
s__37942__$1 = G__38115;
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
var seq__37951_38116 = cljs.core.seq(warnings);
var chunk__37952_38117 = null;
var count__37953_38118 = (0);
var i__37954_38119 = (0);
while(true){
if((i__37954_38119 < count__37953_38118)){
var map__37961_38120 = chunk__37952_38117.cljs$core$IIndexed$_nth$arity$2(null,i__37954_38119);
var map__37961_38121__$1 = (((((!((map__37961_38120 == null))))?(((((map__37961_38120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37961_38120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37961_38120):map__37961_38120);
var w_38122 = map__37961_38121__$1;
var msg_38123__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37961_38121__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37961_38121__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37961_38121__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37961_38121__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38126)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38124),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38125),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38123__$1)].join(''));


var G__38130 = seq__37951_38116;
var G__38131 = chunk__37952_38117;
var G__38132 = count__37953_38118;
var G__38133 = (i__37954_38119 + (1));
seq__37951_38116 = G__38130;
chunk__37952_38117 = G__38131;
count__37953_38118 = G__38132;
i__37954_38119 = G__38133;
continue;
} else {
var temp__5735__auto___38134 = cljs.core.seq(seq__37951_38116);
if(temp__5735__auto___38134){
var seq__37951_38135__$1 = temp__5735__auto___38134;
if(cljs.core.chunked_seq_QMARK_(seq__37951_38135__$1)){
var c__4609__auto___38136 = cljs.core.chunk_first(seq__37951_38135__$1);
var G__38137 = cljs.core.chunk_rest(seq__37951_38135__$1);
var G__38138 = c__4609__auto___38136;
var G__38139 = cljs.core.count(c__4609__auto___38136);
var G__38140 = (0);
seq__37951_38116 = G__38137;
chunk__37952_38117 = G__38138;
count__37953_38118 = G__38139;
i__37954_38119 = G__38140;
continue;
} else {
var map__37963_38141 = cljs.core.first(seq__37951_38135__$1);
var map__37963_38142__$1 = (((((!((map__37963_38141 == null))))?(((((map__37963_38141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37963_38141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37963_38141):map__37963_38141);
var w_38143 = map__37963_38142__$1;
var msg_38144__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37963_38142__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37963_38142__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37963_38142__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37963_38142__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38147)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38145),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38146),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38144__$1)].join(''));


var G__38148 = cljs.core.next(seq__37951_38135__$1);
var G__38149 = null;
var G__38150 = (0);
var G__38151 = (0);
seq__37951_38116 = G__38148;
chunk__37952_38117 = G__38149;
count__37953_38118 = G__38150;
i__37954_38119 = G__38151;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__37965){
var map__37966 = p__37965;
var map__37966__$1 = (((((!((map__37966 == null))))?(((((map__37966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37966):map__37966);
var src = map__37966__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37966__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37966__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37968){
var map__37969 = p__37968;
var map__37969__$1 = (((((!((map__37969 == null))))?(((((map__37969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37969):map__37969);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37969__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__37974){
var map__37975 = p__37974;
var map__37975__$1 = (((((!((map__37975 == null))))?(((((map__37975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37975):map__37975);
var rc = map__37975__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37975__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__37935_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37935_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__37981){
var map__37982 = p__37981;
var map__37982__$1 = (((((!((map__37982 == null))))?(((((map__37982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37982):map__37982);
var msg = map__37982__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37982__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37984 = cljs.core.seq(updates);
var chunk__37986 = null;
var count__37987 = (0);
var i__37988 = (0);
while(true){
if((i__37988 < count__37987)){
var path = chunk__37986.cljs$core$IIndexed$_nth$arity$2(null,i__37988);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38016_38154 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38019_38155 = null;
var count__38020_38156 = (0);
var i__38021_38157 = (0);
while(true){
if((i__38021_38157 < count__38020_38156)){
var node_38158 = chunk__38019_38155.cljs$core$IIndexed$_nth$arity$2(null,i__38021_38157);
var path_match_38159 = shadow.cljs.devtools.client.browser.match_paths(node_38158.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38159)){
var new_link_38160 = (function (){var G__38027 = node_38158.cloneNode(true);
G__38027.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38159),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38027;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38159], 0));

goog.dom.insertSiblingAfter(new_link_38160,node_38158);

goog.dom.removeNode(node_38158);


var G__38161 = seq__38016_38154;
var G__38162 = chunk__38019_38155;
var G__38163 = count__38020_38156;
var G__38164 = (i__38021_38157 + (1));
seq__38016_38154 = G__38161;
chunk__38019_38155 = G__38162;
count__38020_38156 = G__38163;
i__38021_38157 = G__38164;
continue;
} else {
var G__38165 = seq__38016_38154;
var G__38166 = chunk__38019_38155;
var G__38167 = count__38020_38156;
var G__38168 = (i__38021_38157 + (1));
seq__38016_38154 = G__38165;
chunk__38019_38155 = G__38166;
count__38020_38156 = G__38167;
i__38021_38157 = G__38168;
continue;
}
} else {
var temp__5735__auto___38169 = cljs.core.seq(seq__38016_38154);
if(temp__5735__auto___38169){
var seq__38016_38170__$1 = temp__5735__auto___38169;
if(cljs.core.chunked_seq_QMARK_(seq__38016_38170__$1)){
var c__4609__auto___38171 = cljs.core.chunk_first(seq__38016_38170__$1);
var G__38172 = cljs.core.chunk_rest(seq__38016_38170__$1);
var G__38173 = c__4609__auto___38171;
var G__38174 = cljs.core.count(c__4609__auto___38171);
var G__38175 = (0);
seq__38016_38154 = G__38172;
chunk__38019_38155 = G__38173;
count__38020_38156 = G__38174;
i__38021_38157 = G__38175;
continue;
} else {
var node_38176 = cljs.core.first(seq__38016_38170__$1);
var path_match_38177 = shadow.cljs.devtools.client.browser.match_paths(node_38176.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38177)){
var new_link_38178 = (function (){var G__38028 = node_38176.cloneNode(true);
G__38028.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38177),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38028;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38177], 0));

goog.dom.insertSiblingAfter(new_link_38178,node_38176);

goog.dom.removeNode(node_38176);


var G__38179 = cljs.core.next(seq__38016_38170__$1);
var G__38180 = null;
var G__38181 = (0);
var G__38182 = (0);
seq__38016_38154 = G__38179;
chunk__38019_38155 = G__38180;
count__38020_38156 = G__38181;
i__38021_38157 = G__38182;
continue;
} else {
var G__38183 = cljs.core.next(seq__38016_38170__$1);
var G__38184 = null;
var G__38185 = (0);
var G__38186 = (0);
seq__38016_38154 = G__38183;
chunk__38019_38155 = G__38184;
count__38020_38156 = G__38185;
i__38021_38157 = G__38186;
continue;
}
}
} else {
}
}
break;
}


var G__38187 = seq__37984;
var G__38188 = chunk__37986;
var G__38189 = count__37987;
var G__38190 = (i__37988 + (1));
seq__37984 = G__38187;
chunk__37986 = G__38188;
count__37987 = G__38189;
i__37988 = G__38190;
continue;
} else {
var G__38191 = seq__37984;
var G__38192 = chunk__37986;
var G__38193 = count__37987;
var G__38194 = (i__37988 + (1));
seq__37984 = G__38191;
chunk__37986 = G__38192;
count__37987 = G__38193;
i__37988 = G__38194;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37984);
if(temp__5735__auto__){
var seq__37984__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37984__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37984__$1);
var G__38195 = cljs.core.chunk_rest(seq__37984__$1);
var G__38196 = c__4609__auto__;
var G__38197 = cljs.core.count(c__4609__auto__);
var G__38198 = (0);
seq__37984 = G__38195;
chunk__37986 = G__38196;
count__37987 = G__38197;
i__37988 = G__38198;
continue;
} else {
var path = cljs.core.first(seq__37984__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38029_38199 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38032_38200 = null;
var count__38033_38201 = (0);
var i__38034_38202 = (0);
while(true){
if((i__38034_38202 < count__38033_38201)){
var node_38203 = chunk__38032_38200.cljs$core$IIndexed$_nth$arity$2(null,i__38034_38202);
var path_match_38204 = shadow.cljs.devtools.client.browser.match_paths(node_38203.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38204)){
var new_link_38205 = (function (){var G__38039 = node_38203.cloneNode(true);
G__38039.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38204),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38039;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38204], 0));

goog.dom.insertSiblingAfter(new_link_38205,node_38203);

goog.dom.removeNode(node_38203);


var G__38206 = seq__38029_38199;
var G__38207 = chunk__38032_38200;
var G__38208 = count__38033_38201;
var G__38209 = (i__38034_38202 + (1));
seq__38029_38199 = G__38206;
chunk__38032_38200 = G__38207;
count__38033_38201 = G__38208;
i__38034_38202 = G__38209;
continue;
} else {
var G__38210 = seq__38029_38199;
var G__38211 = chunk__38032_38200;
var G__38212 = count__38033_38201;
var G__38213 = (i__38034_38202 + (1));
seq__38029_38199 = G__38210;
chunk__38032_38200 = G__38211;
count__38033_38201 = G__38212;
i__38034_38202 = G__38213;
continue;
}
} else {
var temp__5735__auto___38214__$1 = cljs.core.seq(seq__38029_38199);
if(temp__5735__auto___38214__$1){
var seq__38029_38215__$1 = temp__5735__auto___38214__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38029_38215__$1)){
var c__4609__auto___38216 = cljs.core.chunk_first(seq__38029_38215__$1);
var G__38217 = cljs.core.chunk_rest(seq__38029_38215__$1);
var G__38218 = c__4609__auto___38216;
var G__38219 = cljs.core.count(c__4609__auto___38216);
var G__38220 = (0);
seq__38029_38199 = G__38217;
chunk__38032_38200 = G__38218;
count__38033_38201 = G__38219;
i__38034_38202 = G__38220;
continue;
} else {
var node_38221 = cljs.core.first(seq__38029_38215__$1);
var path_match_38222 = shadow.cljs.devtools.client.browser.match_paths(node_38221.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38222)){
var new_link_38223 = (function (){var G__38041 = node_38221.cloneNode(true);
G__38041.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38222),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38041;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38222], 0));

goog.dom.insertSiblingAfter(new_link_38223,node_38221);

goog.dom.removeNode(node_38221);


var G__38224 = cljs.core.next(seq__38029_38215__$1);
var G__38225 = null;
var G__38226 = (0);
var G__38227 = (0);
seq__38029_38199 = G__38224;
chunk__38032_38200 = G__38225;
count__38033_38201 = G__38226;
i__38034_38202 = G__38227;
continue;
} else {
var G__38228 = cljs.core.next(seq__38029_38215__$1);
var G__38229 = null;
var G__38230 = (0);
var G__38231 = (0);
seq__38029_38199 = G__38228;
chunk__38032_38200 = G__38229;
count__38033_38201 = G__38230;
i__38034_38202 = G__38231;
continue;
}
}
} else {
}
}
break;
}


var G__38234 = cljs.core.next(seq__37984__$1);
var G__38235 = null;
var G__38236 = (0);
var G__38237 = (0);
seq__37984 = G__38234;
chunk__37986 = G__38235;
count__37987 = G__38236;
i__37988 = G__38237;
continue;
} else {
var G__38238 = cljs.core.next(seq__37984__$1);
var G__38239 = null;
var G__38240 = (0);
var G__38241 = (0);
seq__37984 = G__38238;
chunk__37986 = G__38239;
count__37987 = G__38240;
i__37988 = G__38241;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__38042){
var map__38043 = p__38042;
var map__38043__$1 = (((((!((map__38043 == null))))?(((((map__38043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38043):map__38043);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38043__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38043__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__38047,done){
var map__38048 = p__38047;
var map__38048__$1 = (((((!((map__38048 == null))))?(((((map__38048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38048):map__38048);
var msg = map__38048__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38048__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38048__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38048__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38048__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38050){
var map__38051 = p__38050;
var map__38051__$1 = (((((!((map__38051 == null))))?(((((map__38051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38051):map__38051);
var src = map__38051__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38051__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
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
}catch (e38054){var e = e38054;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__38055,done){
var map__38056 = p__38055;
var map__38056__$1 = (((((!((map__38056 == null))))?(((((map__38056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38056):map__38056);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38056__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38056__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__38058){
var map__38059 = p__38058;
var map__38059__$1 = (((((!((map__38059 == null))))?(((((map__38059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38059):map__38059);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38059__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38059__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__38061,done){
var map__38062 = p__38061;
var map__38062__$1 = (((((!((map__38062 == null))))?(((((map__38062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38062):map__38062);
var msg = map__38062__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38062__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__38064_38243 = type;
var G__38064_38244__$1 = (((G__38064_38243 instanceof cljs.core.Keyword))?G__38064_38243.fqn:null);
switch (G__38064_38244__$1) {
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
var G__38065 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__38066 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__38067 = "POST";
var G__38068 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__38069 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__38065,G__38066,G__38067,G__38068,G__38069);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__38072 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__38071 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__38071.cljs$core$IFn$_invoke$arity$1 ? fexpr__38071.cljs$core$IFn$_invoke$arity$1(G__38072) : fexpr__38071.call(null,G__38072));
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
}catch (e38074){var e = e38074;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___38251 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___38251)){
var s_38252 = temp__5735__auto___38251;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_38252.onclose = (function (e){
return null;
}));

s_38252.close();

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
