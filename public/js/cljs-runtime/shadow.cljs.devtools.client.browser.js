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
var len__4789__auto___40869 = arguments.length;
var i__4790__auto___40870 = (0);
while(true){
if((i__4790__auto___40870 < len__4789__auto___40869)){
args__4795__auto__.push((arguments[i__4790__auto___40870]));

var G__40871 = (i__4790__auto___40870 + (1));
i__4790__auto___40870 = G__40871;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq40680){
var G__40681 = cljs.core.first(seq40680);
var seq40680__$1 = cljs.core.next(seq40680);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40681,seq40680__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__40682){
var map__40683 = p__40682;
var map__40683__$1 = (((((!((map__40683 == null))))?(((((map__40683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40683):map__40683);
var src = map__40683__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40683__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40683__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__40685 = cljs.core.seq(sources);
var chunk__40686 = null;
var count__40687 = (0);
var i__40688 = (0);
while(true){
if((i__40688 < count__40687)){
var map__40697 = chunk__40686.cljs$core$IIndexed$_nth$arity$2(null,i__40688);
var map__40697__$1 = (((((!((map__40697 == null))))?(((((map__40697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40697):map__40697);
var src = map__40697__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40697__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40697__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40697__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40697__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e40699){var e_40876 = e40699;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40876);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40876.message)].join('')));
}

var G__40877 = seq__40685;
var G__40878 = chunk__40686;
var G__40879 = count__40687;
var G__40880 = (i__40688 + (1));
seq__40685 = G__40877;
chunk__40686 = G__40878;
count__40687 = G__40879;
i__40688 = G__40880;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40685);
if(temp__5735__auto__){
var seq__40685__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40685__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40685__$1);
var G__40881 = cljs.core.chunk_rest(seq__40685__$1);
var G__40882 = c__4609__auto__;
var G__40883 = cljs.core.count(c__4609__auto__);
var G__40884 = (0);
seq__40685 = G__40881;
chunk__40686 = G__40882;
count__40687 = G__40883;
i__40688 = G__40884;
continue;
} else {
var map__40700 = cljs.core.first(seq__40685__$1);
var map__40700__$1 = (((((!((map__40700 == null))))?(((((map__40700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40700):map__40700);
var src = map__40700__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40700__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40700__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40700__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40700__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e40702){var e_40886 = e40702;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40886);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40886.message)].join('')));
}

var G__40887 = cljs.core.next(seq__40685__$1);
var G__40888 = null;
var G__40889 = (0);
var G__40890 = (0);
seq__40685 = G__40887;
chunk__40686 = G__40888;
count__40687 = G__40889;
i__40688 = G__40890;
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
var seq__40703 = cljs.core.seq(js_requires);
var chunk__40704 = null;
var count__40705 = (0);
var i__40706 = (0);
while(true){
if((i__40706 < count__40705)){
var js_ns = chunk__40704.cljs$core$IIndexed$_nth$arity$2(null,i__40706);
var require_str_40891 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40891);


var G__40892 = seq__40703;
var G__40893 = chunk__40704;
var G__40894 = count__40705;
var G__40895 = (i__40706 + (1));
seq__40703 = G__40892;
chunk__40704 = G__40893;
count__40705 = G__40894;
i__40706 = G__40895;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40703);
if(temp__5735__auto__){
var seq__40703__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40703__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40703__$1);
var G__40896 = cljs.core.chunk_rest(seq__40703__$1);
var G__40897 = c__4609__auto__;
var G__40898 = cljs.core.count(c__4609__auto__);
var G__40899 = (0);
seq__40703 = G__40896;
chunk__40704 = G__40897;
count__40705 = G__40898;
i__40706 = G__40899;
continue;
} else {
var js_ns = cljs.core.first(seq__40703__$1);
var require_str_40900 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40900);


var G__40901 = cljs.core.next(seq__40703__$1);
var G__40902 = null;
var G__40903 = (0);
var G__40904 = (0);
seq__40703 = G__40901;
chunk__40704 = G__40902;
count__40705 = G__40903;
i__40706 = G__40904;
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
var G__40707 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__40707) : callback.call(null,G__40707));
} else {
var G__40708 = shadow.cljs.devtools.client.env.files_url();
var G__40709 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__40710 = "POST";
var G__40711 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__40712 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__40708,G__40709,G__40710,G__40711,G__40712);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__40714){
var map__40715 = p__40714;
var map__40715__$1 = (((((!((map__40715 == null))))?(((((map__40715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40715):map__40715);
var msg = map__40715__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40715__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40715__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__40717 = info;
var map__40717__$1 = (((((!((map__40717 == null))))?(((((map__40717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40717):map__40717);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40717__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40717__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40719(s__40720){
return (new cljs.core.LazySeq(null,(function (){
var s__40720__$1 = s__40720;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40720__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__40725 = cljs.core.first(xs__6292__auto__);
var map__40725__$1 = (((((!((map__40725 == null))))?(((((map__40725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40725):map__40725);
var src = map__40725__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40725__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40725__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__40720__$1,map__40725,map__40725__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__40717,map__40717__$1,sources,compiled,map__40715,map__40715__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40719_$_iter__40721(s__40722){
return (new cljs.core.LazySeq(null,((function (s__40720__$1,map__40725,map__40725__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__40717,map__40717__$1,sources,compiled,map__40715,map__40715__$1,msg,info,reload_info){
return (function (){
var s__40722__$1 = s__40722;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__40722__$1);
if(temp__5735__auto____$1){
var s__40722__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40722__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__40722__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__40724 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__40723 = (0);
while(true){
if((i__40723 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__40723);
cljs.core.chunk_append(b__40724,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__40906 = (i__40723 + (1));
i__40723 = G__40906;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40724),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40719_$_iter__40721(cljs.core.chunk_rest(s__40722__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40724),null);
}
} else {
var warning = cljs.core.first(s__40722__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40719_$_iter__40721(cljs.core.rest(s__40722__$2)));
}
} else {
return null;
}
break;
}
});})(s__40720__$1,map__40725,map__40725__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__40717,map__40717__$1,sources,compiled,map__40715,map__40715__$1,msg,info,reload_info))
,null,null));
});})(s__40720__$1,map__40725,map__40725__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__40717,map__40717__$1,sources,compiled,map__40715,map__40715__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40719(cljs.core.rest(s__40720__$1)));
} else {
var G__40908 = cljs.core.rest(s__40720__$1);
s__40720__$1 = G__40908;
continue;
}
} else {
var G__40909 = cljs.core.rest(s__40720__$1);
s__40720__$1 = G__40909;
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
var seq__40727_40910 = cljs.core.seq(warnings);
var chunk__40728_40911 = null;
var count__40729_40912 = (0);
var i__40730_40913 = (0);
while(true){
if((i__40730_40913 < count__40729_40912)){
var map__40740_40914 = chunk__40728_40911.cljs$core$IIndexed$_nth$arity$2(null,i__40730_40913);
var map__40740_40915__$1 = (((((!((map__40740_40914 == null))))?(((((map__40740_40914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40740_40914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40740_40914):map__40740_40914);
var w_40916 = map__40740_40915__$1;
var msg_40917__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40740_40915__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40740_40915__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40740_40915__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40740_40915__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40920)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40918),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40919),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40917__$1)].join(''));


var G__40921 = seq__40727_40910;
var G__40922 = chunk__40728_40911;
var G__40923 = count__40729_40912;
var G__40924 = (i__40730_40913 + (1));
seq__40727_40910 = G__40921;
chunk__40728_40911 = G__40922;
count__40729_40912 = G__40923;
i__40730_40913 = G__40924;
continue;
} else {
var temp__5735__auto___40925 = cljs.core.seq(seq__40727_40910);
if(temp__5735__auto___40925){
var seq__40727_40926__$1 = temp__5735__auto___40925;
if(cljs.core.chunked_seq_QMARK_(seq__40727_40926__$1)){
var c__4609__auto___40927 = cljs.core.chunk_first(seq__40727_40926__$1);
var G__40928 = cljs.core.chunk_rest(seq__40727_40926__$1);
var G__40929 = c__4609__auto___40927;
var G__40930 = cljs.core.count(c__4609__auto___40927);
var G__40931 = (0);
seq__40727_40910 = G__40928;
chunk__40728_40911 = G__40929;
count__40729_40912 = G__40930;
i__40730_40913 = G__40931;
continue;
} else {
var map__40744_40932 = cljs.core.first(seq__40727_40926__$1);
var map__40744_40933__$1 = (((((!((map__40744_40932 == null))))?(((((map__40744_40932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40744_40932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40744_40932):map__40744_40932);
var w_40934 = map__40744_40933__$1;
var msg_40935__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40744_40933__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40744_40933__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40744_40933__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40744_40933__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40938)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40936),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40937),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40935__$1)].join(''));


var G__40939 = cljs.core.next(seq__40727_40926__$1);
var G__40940 = null;
var G__40941 = (0);
var G__40942 = (0);
seq__40727_40910 = G__40939;
chunk__40728_40911 = G__40940;
count__40729_40912 = G__40941;
i__40730_40913 = G__40942;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__40750){
var map__40751 = p__40750;
var map__40751__$1 = (((((!((map__40751 == null))))?(((((map__40751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40751):map__40751);
var src = map__40751__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40751__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40751__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__40757){
var map__40758 = p__40757;
var map__40758__$1 = (((((!((map__40758 == null))))?(((((map__40758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40758):map__40758);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40758__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__40760){
var map__40761 = p__40760;
var map__40761__$1 = (((((!((map__40761 == null))))?(((((map__40761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40761):map__40761);
var rc = map__40761__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40761__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__40713_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__40713_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__40763){
var map__40764 = p__40763;
var map__40764__$1 = (((((!((map__40764 == null))))?(((((map__40764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40764):map__40764);
var msg = map__40764__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40764__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__40766 = cljs.core.seq(updates);
var chunk__40768 = null;
var count__40769 = (0);
var i__40770 = (0);
while(true){
if((i__40770 < count__40769)){
var path = chunk__40768.cljs$core$IIndexed$_nth$arity$2(null,i__40770);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40798_40946 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40801_40947 = null;
var count__40802_40948 = (0);
var i__40803_40949 = (0);
while(true){
if((i__40803_40949 < count__40802_40948)){
var node_40950 = chunk__40801_40947.cljs$core$IIndexed$_nth$arity$2(null,i__40803_40949);
var path_match_40951 = shadow.cljs.devtools.client.browser.match_paths(node_40950.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40951)){
var new_link_40953 = (function (){var G__40810 = node_40950.cloneNode(true);
G__40810.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40951),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40810;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40951], 0));

goog.dom.insertSiblingAfter(new_link_40953,node_40950);

goog.dom.removeNode(node_40950);


var G__40956 = seq__40798_40946;
var G__40957 = chunk__40801_40947;
var G__40958 = count__40802_40948;
var G__40959 = (i__40803_40949 + (1));
seq__40798_40946 = G__40956;
chunk__40801_40947 = G__40957;
count__40802_40948 = G__40958;
i__40803_40949 = G__40959;
continue;
} else {
var G__40960 = seq__40798_40946;
var G__40961 = chunk__40801_40947;
var G__40962 = count__40802_40948;
var G__40963 = (i__40803_40949 + (1));
seq__40798_40946 = G__40960;
chunk__40801_40947 = G__40961;
count__40802_40948 = G__40962;
i__40803_40949 = G__40963;
continue;
}
} else {
var temp__5735__auto___40964 = cljs.core.seq(seq__40798_40946);
if(temp__5735__auto___40964){
var seq__40798_40965__$1 = temp__5735__auto___40964;
if(cljs.core.chunked_seq_QMARK_(seq__40798_40965__$1)){
var c__4609__auto___40966 = cljs.core.chunk_first(seq__40798_40965__$1);
var G__40967 = cljs.core.chunk_rest(seq__40798_40965__$1);
var G__40968 = c__4609__auto___40966;
var G__40969 = cljs.core.count(c__4609__auto___40966);
var G__40970 = (0);
seq__40798_40946 = G__40967;
chunk__40801_40947 = G__40968;
count__40802_40948 = G__40969;
i__40803_40949 = G__40970;
continue;
} else {
var node_40971 = cljs.core.first(seq__40798_40965__$1);
var path_match_40972 = shadow.cljs.devtools.client.browser.match_paths(node_40971.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40972)){
var new_link_40973 = (function (){var G__40813 = node_40971.cloneNode(true);
G__40813.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40972),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40813;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40972], 0));

goog.dom.insertSiblingAfter(new_link_40973,node_40971);

goog.dom.removeNode(node_40971);


var G__40975 = cljs.core.next(seq__40798_40965__$1);
var G__40976 = null;
var G__40977 = (0);
var G__40978 = (0);
seq__40798_40946 = G__40975;
chunk__40801_40947 = G__40976;
count__40802_40948 = G__40977;
i__40803_40949 = G__40978;
continue;
} else {
var G__40979 = cljs.core.next(seq__40798_40965__$1);
var G__40980 = null;
var G__40981 = (0);
var G__40982 = (0);
seq__40798_40946 = G__40979;
chunk__40801_40947 = G__40980;
count__40802_40948 = G__40981;
i__40803_40949 = G__40982;
continue;
}
}
} else {
}
}
break;
}


var G__40983 = seq__40766;
var G__40984 = chunk__40768;
var G__40985 = count__40769;
var G__40986 = (i__40770 + (1));
seq__40766 = G__40983;
chunk__40768 = G__40984;
count__40769 = G__40985;
i__40770 = G__40986;
continue;
} else {
var G__40987 = seq__40766;
var G__40988 = chunk__40768;
var G__40989 = count__40769;
var G__40990 = (i__40770 + (1));
seq__40766 = G__40987;
chunk__40768 = G__40988;
count__40769 = G__40989;
i__40770 = G__40990;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40766);
if(temp__5735__auto__){
var seq__40766__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40766__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40766__$1);
var G__40991 = cljs.core.chunk_rest(seq__40766__$1);
var G__40992 = c__4609__auto__;
var G__40993 = cljs.core.count(c__4609__auto__);
var G__40994 = (0);
seq__40766 = G__40991;
chunk__40768 = G__40992;
count__40769 = G__40993;
i__40770 = G__40994;
continue;
} else {
var path = cljs.core.first(seq__40766__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40815_40995 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40818_40996 = null;
var count__40819_40997 = (0);
var i__40820_40998 = (0);
while(true){
if((i__40820_40998 < count__40819_40997)){
var node_40999 = chunk__40818_40996.cljs$core$IIndexed$_nth$arity$2(null,i__40820_40998);
var path_match_41000 = shadow.cljs.devtools.client.browser.match_paths(node_40999.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41000)){
var new_link_41001 = (function (){var G__40827 = node_40999.cloneNode(true);
G__40827.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41000),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40827;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41000], 0));

goog.dom.insertSiblingAfter(new_link_41001,node_40999);

goog.dom.removeNode(node_40999);


var G__41002 = seq__40815_40995;
var G__41003 = chunk__40818_40996;
var G__41004 = count__40819_40997;
var G__41005 = (i__40820_40998 + (1));
seq__40815_40995 = G__41002;
chunk__40818_40996 = G__41003;
count__40819_40997 = G__41004;
i__40820_40998 = G__41005;
continue;
} else {
var G__41006 = seq__40815_40995;
var G__41007 = chunk__40818_40996;
var G__41008 = count__40819_40997;
var G__41009 = (i__40820_40998 + (1));
seq__40815_40995 = G__41006;
chunk__40818_40996 = G__41007;
count__40819_40997 = G__41008;
i__40820_40998 = G__41009;
continue;
}
} else {
var temp__5735__auto___41010__$1 = cljs.core.seq(seq__40815_40995);
if(temp__5735__auto___41010__$1){
var seq__40815_41011__$1 = temp__5735__auto___41010__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40815_41011__$1)){
var c__4609__auto___41012 = cljs.core.chunk_first(seq__40815_41011__$1);
var G__41013 = cljs.core.chunk_rest(seq__40815_41011__$1);
var G__41014 = c__4609__auto___41012;
var G__41015 = cljs.core.count(c__4609__auto___41012);
var G__41016 = (0);
seq__40815_40995 = G__41013;
chunk__40818_40996 = G__41014;
count__40819_40997 = G__41015;
i__40820_40998 = G__41016;
continue;
} else {
var node_41017 = cljs.core.first(seq__40815_41011__$1);
var path_match_41018 = shadow.cljs.devtools.client.browser.match_paths(node_41017.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41018)){
var new_link_41019 = (function (){var G__40828 = node_41017.cloneNode(true);
G__40828.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41018),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40828;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41018], 0));

goog.dom.insertSiblingAfter(new_link_41019,node_41017);

goog.dom.removeNode(node_41017);


var G__41021 = cljs.core.next(seq__40815_41011__$1);
var G__41022 = null;
var G__41023 = (0);
var G__41024 = (0);
seq__40815_40995 = G__41021;
chunk__40818_40996 = G__41022;
count__40819_40997 = G__41023;
i__40820_40998 = G__41024;
continue;
} else {
var G__41025 = cljs.core.next(seq__40815_41011__$1);
var G__41026 = null;
var G__41027 = (0);
var G__41028 = (0);
seq__40815_40995 = G__41025;
chunk__40818_40996 = G__41026;
count__40819_40997 = G__41027;
i__40820_40998 = G__41028;
continue;
}
}
} else {
}
}
break;
}


var G__41029 = cljs.core.next(seq__40766__$1);
var G__41030 = null;
var G__41031 = (0);
var G__41032 = (0);
seq__40766 = G__41029;
chunk__40768 = G__41030;
count__40769 = G__41031;
i__40770 = G__41032;
continue;
} else {
var G__41033 = cljs.core.next(seq__40766__$1);
var G__41034 = null;
var G__41035 = (0);
var G__41036 = (0);
seq__40766 = G__41033;
chunk__40768 = G__41034;
count__40769 = G__41035;
i__40770 = G__41036;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__40831){
var map__40832 = p__40831;
var map__40832__$1 = (((((!((map__40832 == null))))?(((((map__40832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40832):map__40832);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40832__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40832__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__40834,done){
var map__40835 = p__40834;
var map__40835__$1 = (((((!((map__40835 == null))))?(((((map__40835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40835):map__40835);
var msg = map__40835__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40835__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40835__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40835__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40835__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__40838){
var map__40839 = p__40838;
var map__40839__$1 = (((((!((map__40839 == null))))?(((((map__40839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40839):map__40839);
var src = map__40839__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40839__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
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
}catch (e40842){var e = e40842;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__40843,done){
var map__40844 = p__40843;
var map__40844__$1 = (((((!((map__40844 == null))))?(((((map__40844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40844):map__40844);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40844__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40844__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__40847){
var map__40848 = p__40847;
var map__40848__$1 = (((((!((map__40848 == null))))?(((((map__40848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40848):map__40848);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40848__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40848__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__40851,done){
var map__40852 = p__40851;
var map__40852__$1 = (((((!((map__40852 == null))))?(((((map__40852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40852):map__40852);
var msg = map__40852__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40852__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__40854_41040 = type;
var G__40854_41041__$1 = (((G__40854_41040 instanceof cljs.core.Keyword))?G__40854_41040.fqn:null);
switch (G__40854_41041__$1) {
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
var G__40856 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__40857 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__40858 = "POST";
var G__40859 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__40860 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__40856,G__40857,G__40858,G__40859,G__40860);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__40862 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__40861 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__40861.cljs$core$IFn$_invoke$arity$1 ? fexpr__40861.cljs$core$IFn$_invoke$arity$1(G__40862) : fexpr__40861.call(null,G__40862));
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
}catch (e40864){var e = e40864;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___41044 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___41044)){
var s_41045 = temp__5735__auto___41044;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_41045.onclose = (function (e){
return null;
}));

s_41045.close();

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
