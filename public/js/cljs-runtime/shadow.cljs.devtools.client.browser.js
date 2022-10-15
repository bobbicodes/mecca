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
var len__4789__auto___35038 = arguments.length;
var i__4790__auto___35039 = (0);
while(true){
if((i__4790__auto___35039 < len__4789__auto___35038)){
args__4795__auto__.push((arguments[i__4790__auto___35039]));

var G__35041 = (i__4790__auto___35039 + (1));
i__4790__auto___35039 = G__35041;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq34619){
var G__34620 = cljs.core.first(seq34619);
var seq34619__$1 = cljs.core.next(seq34619);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34620,seq34619__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__34636){
var map__34638 = p__34636;
var map__34638__$1 = (((((!((map__34638 == null))))?(((((map__34638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34638):map__34638);
var src = map__34638__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34638__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34638__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__34644 = cljs.core.seq(sources);
var chunk__34645 = null;
var count__34646 = (0);
var i__34647 = (0);
while(true){
if((i__34647 < count__34646)){
var map__34676 = chunk__34645.cljs$core$IIndexed$_nth$arity$2(null,i__34647);
var map__34676__$1 = (((((!((map__34676 == null))))?(((((map__34676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34676):map__34676);
var src = map__34676__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34676__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34676__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34676__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34676__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34681){var e_35042 = e34681;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35042);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35042.message)].join('')));
}

var G__35043 = seq__34644;
var G__35044 = chunk__34645;
var G__35045 = count__34646;
var G__35046 = (i__34647 + (1));
seq__34644 = G__35043;
chunk__34645 = G__35044;
count__34646 = G__35045;
i__34647 = G__35046;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34644);
if(temp__5735__auto__){
var seq__34644__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34644__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34644__$1);
var G__35047 = cljs.core.chunk_rest(seq__34644__$1);
var G__35048 = c__4609__auto__;
var G__35049 = cljs.core.count(c__4609__auto__);
var G__35050 = (0);
seq__34644 = G__35047;
chunk__34645 = G__35048;
count__34646 = G__35049;
i__34647 = G__35050;
continue;
} else {
var map__34683 = cljs.core.first(seq__34644__$1);
var map__34683__$1 = (((((!((map__34683 == null))))?(((((map__34683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34683):map__34683);
var src = map__34683__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34683__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34683__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34683__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34683__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34688){var e_35051 = e34688;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35051);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35051.message)].join('')));
}

var G__35052 = cljs.core.next(seq__34644__$1);
var G__35053 = null;
var G__35054 = (0);
var G__35055 = (0);
seq__34644 = G__35052;
chunk__34645 = G__35053;
count__34646 = G__35054;
i__34647 = G__35055;
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
var seq__34693 = cljs.core.seq(js_requires);
var chunk__34694 = null;
var count__34695 = (0);
var i__34696 = (0);
while(true){
if((i__34696 < count__34695)){
var js_ns = chunk__34694.cljs$core$IIndexed$_nth$arity$2(null,i__34696);
var require_str_35056 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35056);


var G__35057 = seq__34693;
var G__35058 = chunk__34694;
var G__35059 = count__34695;
var G__35060 = (i__34696 + (1));
seq__34693 = G__35057;
chunk__34694 = G__35058;
count__34695 = G__35059;
i__34696 = G__35060;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34693);
if(temp__5735__auto__){
var seq__34693__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34693__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34693__$1);
var G__35061 = cljs.core.chunk_rest(seq__34693__$1);
var G__35062 = c__4609__auto__;
var G__35063 = cljs.core.count(c__4609__auto__);
var G__35064 = (0);
seq__34693 = G__35061;
chunk__34694 = G__35062;
count__34695 = G__35063;
i__34696 = G__35064;
continue;
} else {
var js_ns = cljs.core.first(seq__34693__$1);
var require_str_35065 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35065);


var G__35066 = cljs.core.next(seq__34693__$1);
var G__35067 = null;
var G__35068 = (0);
var G__35069 = (0);
seq__34693 = G__35066;
chunk__34694 = G__35067;
count__34695 = G__35068;
i__34696 = G__35069;
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
var G__34702 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__34702) : callback.call(null,G__34702));
} else {
var G__34703 = shadow.cljs.devtools.client.env.files_url();
var G__34704 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__34705 = "POST";
var G__34706 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__34708 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__34703,G__34704,G__34705,G__34706,G__34708);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__34717){
var map__34718 = p__34717;
var map__34718__$1 = (((((!((map__34718 == null))))?(((((map__34718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34718):map__34718);
var msg = map__34718__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34718__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34718__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__34725 = info;
var map__34725__$1 = (((((!((map__34725 == null))))?(((((map__34725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34725):map__34725);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34725__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34725__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34728(s__34729){
return (new cljs.core.LazySeq(null,(function (){
var s__34729__$1 = s__34729;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34729__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__34734 = cljs.core.first(xs__6292__auto__);
var map__34734__$1 = (((((!((map__34734 == null))))?(((((map__34734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34734):map__34734);
var src = map__34734__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34734__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34734__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__34729__$1,map__34734,map__34734__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34725,map__34725__$1,sources,compiled,map__34718,map__34718__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34728_$_iter__34730(s__34731){
return (new cljs.core.LazySeq(null,((function (s__34729__$1,map__34734,map__34734__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34725,map__34725__$1,sources,compiled,map__34718,map__34718__$1,msg,info,reload_info){
return (function (){
var s__34731__$1 = s__34731;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__34731__$1);
if(temp__5735__auto____$1){
var s__34731__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34731__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__34731__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__34733 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__34732 = (0);
while(true){
if((i__34732 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__34732);
cljs.core.chunk_append(b__34733,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35070 = (i__34732 + (1));
i__34732 = G__35070;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34733),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34728_$_iter__34730(cljs.core.chunk_rest(s__34731__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34733),null);
}
} else {
var warning = cljs.core.first(s__34731__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34728_$_iter__34730(cljs.core.rest(s__34731__$2)));
}
} else {
return null;
}
break;
}
});})(s__34729__$1,map__34734,map__34734__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34725,map__34725__$1,sources,compiled,map__34718,map__34718__$1,msg,info,reload_info))
,null,null));
});})(s__34729__$1,map__34734,map__34734__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34725,map__34725__$1,sources,compiled,map__34718,map__34718__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34728(cljs.core.rest(s__34729__$1)));
} else {
var G__35071 = cljs.core.rest(s__34729__$1);
s__34729__$1 = G__35071;
continue;
}
} else {
var G__35072 = cljs.core.rest(s__34729__$1);
s__34729__$1 = G__35072;
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
var seq__34746_35073 = cljs.core.seq(warnings);
var chunk__34747_35074 = null;
var count__34748_35075 = (0);
var i__34749_35076 = (0);
while(true){
if((i__34749_35076 < count__34748_35075)){
var map__34767_35077 = chunk__34747_35074.cljs$core$IIndexed$_nth$arity$2(null,i__34749_35076);
var map__34767_35078__$1 = (((((!((map__34767_35077 == null))))?(((((map__34767_35077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34767_35077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34767_35077):map__34767_35077);
var w_35079 = map__34767_35078__$1;
var msg_35080__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34767_35078__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34767_35078__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34767_35078__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34767_35078__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35083)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35081),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35082),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35080__$1)].join(''));


var G__35084 = seq__34746_35073;
var G__35085 = chunk__34747_35074;
var G__35086 = count__34748_35075;
var G__35087 = (i__34749_35076 + (1));
seq__34746_35073 = G__35084;
chunk__34747_35074 = G__35085;
count__34748_35075 = G__35086;
i__34749_35076 = G__35087;
continue;
} else {
var temp__5735__auto___35088 = cljs.core.seq(seq__34746_35073);
if(temp__5735__auto___35088){
var seq__34746_35089__$1 = temp__5735__auto___35088;
if(cljs.core.chunked_seq_QMARK_(seq__34746_35089__$1)){
var c__4609__auto___35090 = cljs.core.chunk_first(seq__34746_35089__$1);
var G__35091 = cljs.core.chunk_rest(seq__34746_35089__$1);
var G__35092 = c__4609__auto___35090;
var G__35093 = cljs.core.count(c__4609__auto___35090);
var G__35094 = (0);
seq__34746_35073 = G__35091;
chunk__34747_35074 = G__35092;
count__34748_35075 = G__35093;
i__34749_35076 = G__35094;
continue;
} else {
var map__34777_35095 = cljs.core.first(seq__34746_35089__$1);
var map__34777_35096__$1 = (((((!((map__34777_35095 == null))))?(((((map__34777_35095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34777_35095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34777_35095):map__34777_35095);
var w_35097 = map__34777_35096__$1;
var msg_35098__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34777_35096__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34777_35096__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34777_35096__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34777_35096__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35101)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35099),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35100),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35098__$1)].join(''));


var G__35102 = cljs.core.next(seq__34746_35089__$1);
var G__35103 = null;
var G__35104 = (0);
var G__35105 = (0);
seq__34746_35073 = G__35102;
chunk__34747_35074 = G__35103;
count__34748_35075 = G__35104;
i__34749_35076 = G__35105;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34779){
var map__34783 = p__34779;
var map__34783__$1 = (((((!((map__34783 == null))))?(((((map__34783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34783):map__34783);
var src = map__34783__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34783__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34783__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34785){
var map__34786 = p__34785;
var map__34786__$1 = (((((!((map__34786 == null))))?(((((map__34786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34786):map__34786);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34786__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34790){
var map__34791 = p__34790;
var map__34791__$1 = (((((!((map__34791 == null))))?(((((map__34791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34791):map__34791);
var rc = map__34791__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34791__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__34713_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__34713_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__34793){
var map__34794 = p__34793;
var map__34794__$1 = (((((!((map__34794 == null))))?(((((map__34794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34794):map__34794);
var msg = map__34794__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34794__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__34796 = cljs.core.seq(updates);
var chunk__34798 = null;
var count__34799 = (0);
var i__34800 = (0);
while(true){
if((i__34800 < count__34799)){
var path = chunk__34798.cljs$core$IIndexed$_nth$arity$2(null,i__34800);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34880_35130 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34883_35131 = null;
var count__34884_35132 = (0);
var i__34885_35133 = (0);
while(true){
if((i__34885_35133 < count__34884_35132)){
var node_35134 = chunk__34883_35131.cljs$core$IIndexed$_nth$arity$2(null,i__34885_35133);
var path_match_35135 = shadow.cljs.devtools.client.browser.match_paths(node_35134.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35135)){
var new_link_35137 = (function (){var G__34912 = node_35134.cloneNode(true);
G__34912.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35135),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34912;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35135], 0));

goog.dom.insertSiblingAfter(new_link_35137,node_35134);

goog.dom.removeNode(node_35134);


var G__35140 = seq__34880_35130;
var G__35141 = chunk__34883_35131;
var G__35142 = count__34884_35132;
var G__35143 = (i__34885_35133 + (1));
seq__34880_35130 = G__35140;
chunk__34883_35131 = G__35141;
count__34884_35132 = G__35142;
i__34885_35133 = G__35143;
continue;
} else {
var G__35144 = seq__34880_35130;
var G__35145 = chunk__34883_35131;
var G__35146 = count__34884_35132;
var G__35147 = (i__34885_35133 + (1));
seq__34880_35130 = G__35144;
chunk__34883_35131 = G__35145;
count__34884_35132 = G__35146;
i__34885_35133 = G__35147;
continue;
}
} else {
var temp__5735__auto___35148 = cljs.core.seq(seq__34880_35130);
if(temp__5735__auto___35148){
var seq__34880_35150__$1 = temp__5735__auto___35148;
if(cljs.core.chunked_seq_QMARK_(seq__34880_35150__$1)){
var c__4609__auto___35152 = cljs.core.chunk_first(seq__34880_35150__$1);
var G__35153 = cljs.core.chunk_rest(seq__34880_35150__$1);
var G__35154 = c__4609__auto___35152;
var G__35155 = cljs.core.count(c__4609__auto___35152);
var G__35156 = (0);
seq__34880_35130 = G__35153;
chunk__34883_35131 = G__35154;
count__34884_35132 = G__35155;
i__34885_35133 = G__35156;
continue;
} else {
var node_35157 = cljs.core.first(seq__34880_35150__$1);
var path_match_35159 = shadow.cljs.devtools.client.browser.match_paths(node_35157.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35159)){
var new_link_35160 = (function (){var G__34925 = node_35157.cloneNode(true);
G__34925.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35159),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34925;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35159], 0));

goog.dom.insertSiblingAfter(new_link_35160,node_35157);

goog.dom.removeNode(node_35157);


var G__35162 = cljs.core.next(seq__34880_35150__$1);
var G__35163 = null;
var G__35164 = (0);
var G__35165 = (0);
seq__34880_35130 = G__35162;
chunk__34883_35131 = G__35163;
count__34884_35132 = G__35164;
i__34885_35133 = G__35165;
continue;
} else {
var G__35166 = cljs.core.next(seq__34880_35150__$1);
var G__35167 = null;
var G__35168 = (0);
var G__35169 = (0);
seq__34880_35130 = G__35166;
chunk__34883_35131 = G__35167;
count__34884_35132 = G__35168;
i__34885_35133 = G__35169;
continue;
}
}
} else {
}
}
break;
}


var G__35170 = seq__34796;
var G__35171 = chunk__34798;
var G__35172 = count__34799;
var G__35173 = (i__34800 + (1));
seq__34796 = G__35170;
chunk__34798 = G__35171;
count__34799 = G__35172;
i__34800 = G__35173;
continue;
} else {
var G__35174 = seq__34796;
var G__35175 = chunk__34798;
var G__35176 = count__34799;
var G__35177 = (i__34800 + (1));
seq__34796 = G__35174;
chunk__34798 = G__35175;
count__34799 = G__35176;
i__34800 = G__35177;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34796);
if(temp__5735__auto__){
var seq__34796__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34796__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34796__$1);
var G__35180 = cljs.core.chunk_rest(seq__34796__$1);
var G__35181 = c__4609__auto__;
var G__35182 = cljs.core.count(c__4609__auto__);
var G__35183 = (0);
seq__34796 = G__35180;
chunk__34798 = G__35181;
count__34799 = G__35182;
i__34800 = G__35183;
continue;
} else {
var path = cljs.core.first(seq__34796__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34936_35187 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34939_35188 = null;
var count__34940_35189 = (0);
var i__34941_35190 = (0);
while(true){
if((i__34941_35190 < count__34940_35189)){
var node_35191 = chunk__34939_35188.cljs$core$IIndexed$_nth$arity$2(null,i__34941_35190);
var path_match_35192 = shadow.cljs.devtools.client.browser.match_paths(node_35191.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35192)){
var new_link_35193 = (function (){var G__34953 = node_35191.cloneNode(true);
G__34953.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35192),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34953;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35192], 0));

goog.dom.insertSiblingAfter(new_link_35193,node_35191);

goog.dom.removeNode(node_35191);


var G__35194 = seq__34936_35187;
var G__35195 = chunk__34939_35188;
var G__35196 = count__34940_35189;
var G__35197 = (i__34941_35190 + (1));
seq__34936_35187 = G__35194;
chunk__34939_35188 = G__35195;
count__34940_35189 = G__35196;
i__34941_35190 = G__35197;
continue;
} else {
var G__35198 = seq__34936_35187;
var G__35199 = chunk__34939_35188;
var G__35200 = count__34940_35189;
var G__35201 = (i__34941_35190 + (1));
seq__34936_35187 = G__35198;
chunk__34939_35188 = G__35199;
count__34940_35189 = G__35200;
i__34941_35190 = G__35201;
continue;
}
} else {
var temp__5735__auto___35203__$1 = cljs.core.seq(seq__34936_35187);
if(temp__5735__auto___35203__$1){
var seq__34936_35206__$1 = temp__5735__auto___35203__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34936_35206__$1)){
var c__4609__auto___35207 = cljs.core.chunk_first(seq__34936_35206__$1);
var G__35208 = cljs.core.chunk_rest(seq__34936_35206__$1);
var G__35209 = c__4609__auto___35207;
var G__35210 = cljs.core.count(c__4609__auto___35207);
var G__35211 = (0);
seq__34936_35187 = G__35208;
chunk__34939_35188 = G__35209;
count__34940_35189 = G__35210;
i__34941_35190 = G__35211;
continue;
} else {
var node_35212 = cljs.core.first(seq__34936_35206__$1);
var path_match_35214 = shadow.cljs.devtools.client.browser.match_paths(node_35212.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35214)){
var new_link_35216 = (function (){var G__34959 = node_35212.cloneNode(true);
G__34959.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35214),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34959;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35214], 0));

goog.dom.insertSiblingAfter(new_link_35216,node_35212);

goog.dom.removeNode(node_35212);


var G__35223 = cljs.core.next(seq__34936_35206__$1);
var G__35224 = null;
var G__35225 = (0);
var G__35226 = (0);
seq__34936_35187 = G__35223;
chunk__34939_35188 = G__35224;
count__34940_35189 = G__35225;
i__34941_35190 = G__35226;
continue;
} else {
var G__35227 = cljs.core.next(seq__34936_35206__$1);
var G__35228 = null;
var G__35229 = (0);
var G__35230 = (0);
seq__34936_35187 = G__35227;
chunk__34939_35188 = G__35228;
count__34940_35189 = G__35229;
i__34941_35190 = G__35230;
continue;
}
}
} else {
}
}
break;
}


var G__35232 = cljs.core.next(seq__34796__$1);
var G__35233 = null;
var G__35234 = (0);
var G__35235 = (0);
seq__34796 = G__35232;
chunk__34798 = G__35233;
count__34799 = G__35234;
i__34800 = G__35235;
continue;
} else {
var G__35236 = cljs.core.next(seq__34796__$1);
var G__35237 = null;
var G__35238 = (0);
var G__35239 = (0);
seq__34796 = G__35236;
chunk__34798 = G__35237;
count__34799 = G__35238;
i__34800 = G__35239;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__34970){
var map__34971 = p__34970;
var map__34971__$1 = (((((!((map__34971 == null))))?(((((map__34971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34971):map__34971);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34971__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34971__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__34977,done){
var map__34978 = p__34977;
var map__34978__$1 = (((((!((map__34978 == null))))?(((((map__34978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34978):map__34978);
var msg = map__34978__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34978__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34978__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34978__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34978__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34984){
var map__34985 = p__34984;
var map__34985__$1 = (((((!((map__34985 == null))))?(((((map__34985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34985):map__34985);
var src = map__34985__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34985__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
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
}catch (e34987){var e = e34987;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__34988,done){
var map__34989 = p__34988;
var map__34989__$1 = (((((!((map__34989 == null))))?(((((map__34989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34989):map__34989);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34989__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34989__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__34991){
var map__34992 = p__34991;
var map__34992__$1 = (((((!((map__34992 == null))))?(((((map__34992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34992):map__34992);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34992__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34992__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__34994,done){
var map__34995 = p__34994;
var map__34995__$1 = (((((!((map__34995 == null))))?(((((map__34995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34995):map__34995);
var msg = map__34995__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34995__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35001_35271 = type;
var G__35001_35272__$1 = (((G__35001_35271 instanceof cljs.core.Keyword))?G__35001_35271.fqn:null);
switch (G__35001_35272__$1) {
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
var G__35012 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__35013 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__35014 = "POST";
var G__35015 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__35016 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35012,G__35013,G__35014,G__35015,G__35016);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__35030 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__35029 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__35029.cljs$core$IFn$_invoke$arity$1 ? fexpr__35029.cljs$core$IFn$_invoke$arity$1(G__35030) : fexpr__35029.call(null,G__35030));
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
}catch (e35031){var e = e35031;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___35297 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___35297)){
var s_35298 = temp__5735__auto___35297;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_35298.onclose = (function (e){
return null;
}));

s_35298.close();

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
