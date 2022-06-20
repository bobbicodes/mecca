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
var len__4789__auto___35033 = arguments.length;
var i__4790__auto___35034 = (0);
while(true){
if((i__4790__auto___35034 < len__4789__auto___35033)){
args__4795__auto__.push((arguments[i__4790__auto___35034]));

var G__35035 = (i__4790__auto___35034 + (1));
i__4790__auto___35034 = G__35035;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq34737){
var G__34738 = cljs.core.first(seq34737);
var seq34737__$1 = cljs.core.next(seq34737);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34738,seq34737__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__34741){
var map__34742 = p__34741;
var map__34742__$1 = (((((!((map__34742 == null))))?(((((map__34742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34742):map__34742);
var src = map__34742__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34742__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34742__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__34746 = cljs.core.seq(sources);
var chunk__34752 = null;
var count__34753 = (0);
var i__34754 = (0);
while(true){
if((i__34754 < count__34753)){
var map__34768 = chunk__34752.cljs$core$IIndexed$_nth$arity$2(null,i__34754);
var map__34768__$1 = (((((!((map__34768 == null))))?(((((map__34768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34768):map__34768);
var src = map__34768__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34768__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34768__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34768__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34768__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34771){var e_35042 = e34771;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35042);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35042.message)].join('')));
}

var G__35043 = seq__34746;
var G__35044 = chunk__34752;
var G__35045 = count__34753;
var G__35046 = (i__34754 + (1));
seq__34746 = G__35043;
chunk__34752 = G__35044;
count__34753 = G__35045;
i__34754 = G__35046;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34746);
if(temp__5735__auto__){
var seq__34746__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34746__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34746__$1);
var G__35050 = cljs.core.chunk_rest(seq__34746__$1);
var G__35051 = c__4609__auto__;
var G__35052 = cljs.core.count(c__4609__auto__);
var G__35053 = (0);
seq__34746 = G__35050;
chunk__34752 = G__35051;
count__34753 = G__35052;
i__34754 = G__35053;
continue;
} else {
var map__34772 = cljs.core.first(seq__34746__$1);
var map__34772__$1 = (((((!((map__34772 == null))))?(((((map__34772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34772):map__34772);
var src = map__34772__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34772__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34772__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34772__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34772__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34774){var e_35070 = e34774;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35070);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35070.message)].join('')));
}

var G__35071 = cljs.core.next(seq__34746__$1);
var G__35072 = null;
var G__35073 = (0);
var G__35074 = (0);
seq__34746 = G__35071;
chunk__34752 = G__35072;
count__34753 = G__35073;
i__34754 = G__35074;
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
var seq__34779 = cljs.core.seq(js_requires);
var chunk__34780 = null;
var count__34781 = (0);
var i__34782 = (0);
while(true){
if((i__34782 < count__34781)){
var js_ns = chunk__34780.cljs$core$IIndexed$_nth$arity$2(null,i__34782);
var require_str_35075 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35075);


var G__35076 = seq__34779;
var G__35077 = chunk__34780;
var G__35078 = count__34781;
var G__35079 = (i__34782 + (1));
seq__34779 = G__35076;
chunk__34780 = G__35077;
count__34781 = G__35078;
i__34782 = G__35079;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34779);
if(temp__5735__auto__){
var seq__34779__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34779__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34779__$1);
var G__35080 = cljs.core.chunk_rest(seq__34779__$1);
var G__35081 = c__4609__auto__;
var G__35082 = cljs.core.count(c__4609__auto__);
var G__35083 = (0);
seq__34779 = G__35080;
chunk__34780 = G__35081;
count__34781 = G__35082;
i__34782 = G__35083;
continue;
} else {
var js_ns = cljs.core.first(seq__34779__$1);
var require_str_35084 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35084);


var G__35085 = cljs.core.next(seq__34779__$1);
var G__35086 = null;
var G__35087 = (0);
var G__35088 = (0);
seq__34779 = G__35085;
chunk__34780 = G__35086;
count__34781 = G__35087;
i__34782 = G__35088;
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
var G__34785 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__34785) : callback.call(null,G__34785));
} else {
var G__34786 = shadow.cljs.devtools.client.env.files_url();
var G__34787 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__34788 = "POST";
var G__34789 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__34790 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__34786,G__34787,G__34788,G__34789,G__34790);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__34793){
var map__34794 = p__34793;
var map__34794__$1 = (((((!((map__34794 == null))))?(((((map__34794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34794):map__34794);
var msg = map__34794__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34794__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34794__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__34797 = info;
var map__34797__$1 = (((((!((map__34797 == null))))?(((((map__34797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34797):map__34797);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34797__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34797__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34799(s__34800){
return (new cljs.core.LazySeq(null,(function (){
var s__34800__$1 = s__34800;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34800__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__34805 = cljs.core.first(xs__6292__auto__);
var map__34805__$1 = (((((!((map__34805 == null))))?(((((map__34805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34805):map__34805);
var src = map__34805__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34805__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34805__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__34800__$1,map__34805,map__34805__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34797,map__34797__$1,sources,compiled,map__34794,map__34794__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34799_$_iter__34801(s__34802){
return (new cljs.core.LazySeq(null,((function (s__34800__$1,map__34805,map__34805__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34797,map__34797__$1,sources,compiled,map__34794,map__34794__$1,msg,info,reload_info){
return (function (){
var s__34802__$1 = s__34802;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__34802__$1);
if(temp__5735__auto____$1){
var s__34802__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34802__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__34802__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__34804 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__34803 = (0);
while(true){
if((i__34803 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__34803);
cljs.core.chunk_append(b__34804,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35106 = (i__34803 + (1));
i__34803 = G__35106;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34804),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34799_$_iter__34801(cljs.core.chunk_rest(s__34802__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34804),null);
}
} else {
var warning = cljs.core.first(s__34802__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34799_$_iter__34801(cljs.core.rest(s__34802__$2)));
}
} else {
return null;
}
break;
}
});})(s__34800__$1,map__34805,map__34805__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34797,map__34797__$1,sources,compiled,map__34794,map__34794__$1,msg,info,reload_info))
,null,null));
});})(s__34800__$1,map__34805,map__34805__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34797,map__34797__$1,sources,compiled,map__34794,map__34794__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34799(cljs.core.rest(s__34800__$1)));
} else {
var G__35111 = cljs.core.rest(s__34800__$1);
s__34800__$1 = G__35111;
continue;
}
} else {
var G__35112 = cljs.core.rest(s__34800__$1);
s__34800__$1 = G__35112;
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
var seq__34807_35113 = cljs.core.seq(warnings);
var chunk__34808_35114 = null;
var count__34809_35115 = (0);
var i__34810_35116 = (0);
while(true){
if((i__34810_35116 < count__34809_35115)){
var map__34817_35117 = chunk__34808_35114.cljs$core$IIndexed$_nth$arity$2(null,i__34810_35116);
var map__34817_35118__$1 = (((((!((map__34817_35117 == null))))?(((((map__34817_35117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34817_35117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34817_35117):map__34817_35117);
var w_35119 = map__34817_35118__$1;
var msg_35120__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34817_35118__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34817_35118__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34817_35118__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34817_35118__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35123)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35121),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35122),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35120__$1)].join(''));


var G__35124 = seq__34807_35113;
var G__35125 = chunk__34808_35114;
var G__35126 = count__34809_35115;
var G__35127 = (i__34810_35116 + (1));
seq__34807_35113 = G__35124;
chunk__34808_35114 = G__35125;
count__34809_35115 = G__35126;
i__34810_35116 = G__35127;
continue;
} else {
var temp__5735__auto___35128 = cljs.core.seq(seq__34807_35113);
if(temp__5735__auto___35128){
var seq__34807_35129__$1 = temp__5735__auto___35128;
if(cljs.core.chunked_seq_QMARK_(seq__34807_35129__$1)){
var c__4609__auto___35130 = cljs.core.chunk_first(seq__34807_35129__$1);
var G__35131 = cljs.core.chunk_rest(seq__34807_35129__$1);
var G__35132 = c__4609__auto___35130;
var G__35133 = cljs.core.count(c__4609__auto___35130);
var G__35134 = (0);
seq__34807_35113 = G__35131;
chunk__34808_35114 = G__35132;
count__34809_35115 = G__35133;
i__34810_35116 = G__35134;
continue;
} else {
var map__34823_35135 = cljs.core.first(seq__34807_35129__$1);
var map__34823_35136__$1 = (((((!((map__34823_35135 == null))))?(((((map__34823_35135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34823_35135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34823_35135):map__34823_35135);
var w_35137 = map__34823_35136__$1;
var msg_35138__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34823_35136__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34823_35136__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34823_35136__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34823_35136__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35141)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35139),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35140),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35138__$1)].join(''));


var G__35142 = cljs.core.next(seq__34807_35129__$1);
var G__35143 = null;
var G__35144 = (0);
var G__35145 = (0);
seq__34807_35113 = G__35142;
chunk__34808_35114 = G__35143;
count__34809_35115 = G__35144;
i__34810_35116 = G__35145;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34831){
var map__34832 = p__34831;
var map__34832__$1 = (((((!((map__34832 == null))))?(((((map__34832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34832):map__34832);
var src = map__34832__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34832__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34832__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34864){
var map__34865 = p__34864;
var map__34865__$1 = (((((!((map__34865 == null))))?(((((map__34865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34865):map__34865);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34865__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34871){
var map__34872 = p__34871;
var map__34872__$1 = (((((!((map__34872 == null))))?(((((map__34872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34872):map__34872);
var rc = map__34872__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34872__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__34791_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__34791_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__34884){
var map__34885 = p__34884;
var map__34885__$1 = (((((!((map__34885 == null))))?(((((map__34885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34885):map__34885);
var msg = map__34885__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34885__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__34887 = cljs.core.seq(updates);
var chunk__34889 = null;
var count__34890 = (0);
var i__34891 = (0);
while(true){
if((i__34891 < count__34890)){
var path = chunk__34889.cljs$core$IIndexed$_nth$arity$2(null,i__34891);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34951_35150 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34954_35151 = null;
var count__34955_35152 = (0);
var i__34956_35153 = (0);
while(true){
if((i__34956_35153 < count__34955_35152)){
var node_35154 = chunk__34954_35151.cljs$core$IIndexed$_nth$arity$2(null,i__34956_35153);
var path_match_35155 = shadow.cljs.devtools.client.browser.match_paths(node_35154.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35155)){
var new_link_35156 = (function (){var G__34969 = node_35154.cloneNode(true);
G__34969.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35155),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34969;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35155], 0));

goog.dom.insertSiblingAfter(new_link_35156,node_35154);

goog.dom.removeNode(node_35154);


var G__35157 = seq__34951_35150;
var G__35158 = chunk__34954_35151;
var G__35159 = count__34955_35152;
var G__35160 = (i__34956_35153 + (1));
seq__34951_35150 = G__35157;
chunk__34954_35151 = G__35158;
count__34955_35152 = G__35159;
i__34956_35153 = G__35160;
continue;
} else {
var G__35161 = seq__34951_35150;
var G__35162 = chunk__34954_35151;
var G__35163 = count__34955_35152;
var G__35164 = (i__34956_35153 + (1));
seq__34951_35150 = G__35161;
chunk__34954_35151 = G__35162;
count__34955_35152 = G__35163;
i__34956_35153 = G__35164;
continue;
}
} else {
var temp__5735__auto___35165 = cljs.core.seq(seq__34951_35150);
if(temp__5735__auto___35165){
var seq__34951_35166__$1 = temp__5735__auto___35165;
if(cljs.core.chunked_seq_QMARK_(seq__34951_35166__$1)){
var c__4609__auto___35168 = cljs.core.chunk_first(seq__34951_35166__$1);
var G__35169 = cljs.core.chunk_rest(seq__34951_35166__$1);
var G__35170 = c__4609__auto___35168;
var G__35171 = cljs.core.count(c__4609__auto___35168);
var G__35172 = (0);
seq__34951_35150 = G__35169;
chunk__34954_35151 = G__35170;
count__34955_35152 = G__35171;
i__34956_35153 = G__35172;
continue;
} else {
var node_35173 = cljs.core.first(seq__34951_35166__$1);
var path_match_35174 = shadow.cljs.devtools.client.browser.match_paths(node_35173.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35174)){
var new_link_35176 = (function (){var G__34970 = node_35173.cloneNode(true);
G__34970.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35174),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34970;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35174], 0));

goog.dom.insertSiblingAfter(new_link_35176,node_35173);

goog.dom.removeNode(node_35173);


var G__35177 = cljs.core.next(seq__34951_35166__$1);
var G__35178 = null;
var G__35179 = (0);
var G__35180 = (0);
seq__34951_35150 = G__35177;
chunk__34954_35151 = G__35178;
count__34955_35152 = G__35179;
i__34956_35153 = G__35180;
continue;
} else {
var G__35181 = cljs.core.next(seq__34951_35166__$1);
var G__35182 = null;
var G__35183 = (0);
var G__35184 = (0);
seq__34951_35150 = G__35181;
chunk__34954_35151 = G__35182;
count__34955_35152 = G__35183;
i__34956_35153 = G__35184;
continue;
}
}
} else {
}
}
break;
}


var G__35186 = seq__34887;
var G__35187 = chunk__34889;
var G__35188 = count__34890;
var G__35189 = (i__34891 + (1));
seq__34887 = G__35186;
chunk__34889 = G__35187;
count__34890 = G__35188;
i__34891 = G__35189;
continue;
} else {
var G__35190 = seq__34887;
var G__35191 = chunk__34889;
var G__35192 = count__34890;
var G__35193 = (i__34891 + (1));
seq__34887 = G__35190;
chunk__34889 = G__35191;
count__34890 = G__35192;
i__34891 = G__35193;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34887);
if(temp__5735__auto__){
var seq__34887__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34887__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34887__$1);
var G__35195 = cljs.core.chunk_rest(seq__34887__$1);
var G__35196 = c__4609__auto__;
var G__35197 = cljs.core.count(c__4609__auto__);
var G__35198 = (0);
seq__34887 = G__35195;
chunk__34889 = G__35196;
count__34890 = G__35197;
i__34891 = G__35198;
continue;
} else {
var path = cljs.core.first(seq__34887__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34971_35202 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34974_35203 = null;
var count__34975_35204 = (0);
var i__34976_35205 = (0);
while(true){
if((i__34976_35205 < count__34975_35204)){
var node_35206 = chunk__34974_35203.cljs$core$IIndexed$_nth$arity$2(null,i__34976_35205);
var path_match_35207 = shadow.cljs.devtools.client.browser.match_paths(node_35206.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35207)){
var new_link_35208 = (function (){var G__34986 = node_35206.cloneNode(true);
G__34986.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35207),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34986;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35207], 0));

goog.dom.insertSiblingAfter(new_link_35208,node_35206);

goog.dom.removeNode(node_35206);


var G__35209 = seq__34971_35202;
var G__35210 = chunk__34974_35203;
var G__35211 = count__34975_35204;
var G__35212 = (i__34976_35205 + (1));
seq__34971_35202 = G__35209;
chunk__34974_35203 = G__35210;
count__34975_35204 = G__35211;
i__34976_35205 = G__35212;
continue;
} else {
var G__35213 = seq__34971_35202;
var G__35214 = chunk__34974_35203;
var G__35215 = count__34975_35204;
var G__35216 = (i__34976_35205 + (1));
seq__34971_35202 = G__35213;
chunk__34974_35203 = G__35214;
count__34975_35204 = G__35215;
i__34976_35205 = G__35216;
continue;
}
} else {
var temp__5735__auto___35217__$1 = cljs.core.seq(seq__34971_35202);
if(temp__5735__auto___35217__$1){
var seq__34971_35218__$1 = temp__5735__auto___35217__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34971_35218__$1)){
var c__4609__auto___35219 = cljs.core.chunk_first(seq__34971_35218__$1);
var G__35220 = cljs.core.chunk_rest(seq__34971_35218__$1);
var G__35221 = c__4609__auto___35219;
var G__35222 = cljs.core.count(c__4609__auto___35219);
var G__35223 = (0);
seq__34971_35202 = G__35220;
chunk__34974_35203 = G__35221;
count__34975_35204 = G__35222;
i__34976_35205 = G__35223;
continue;
} else {
var node_35224 = cljs.core.first(seq__34971_35218__$1);
var path_match_35225 = shadow.cljs.devtools.client.browser.match_paths(node_35224.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35225)){
var new_link_35226 = (function (){var G__34987 = node_35224.cloneNode(true);
G__34987.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35225),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34987;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35225], 0));

goog.dom.insertSiblingAfter(new_link_35226,node_35224);

goog.dom.removeNode(node_35224);


var G__35227 = cljs.core.next(seq__34971_35218__$1);
var G__35228 = null;
var G__35229 = (0);
var G__35230 = (0);
seq__34971_35202 = G__35227;
chunk__34974_35203 = G__35228;
count__34975_35204 = G__35229;
i__34976_35205 = G__35230;
continue;
} else {
var G__35231 = cljs.core.next(seq__34971_35218__$1);
var G__35232 = null;
var G__35233 = (0);
var G__35234 = (0);
seq__34971_35202 = G__35231;
chunk__34974_35203 = G__35232;
count__34975_35204 = G__35233;
i__34976_35205 = G__35234;
continue;
}
}
} else {
}
}
break;
}


var G__35235 = cljs.core.next(seq__34887__$1);
var G__35236 = null;
var G__35237 = (0);
var G__35238 = (0);
seq__34887 = G__35235;
chunk__34889 = G__35236;
count__34890 = G__35237;
i__34891 = G__35238;
continue;
} else {
var G__35239 = cljs.core.next(seq__34887__$1);
var G__35240 = null;
var G__35241 = (0);
var G__35242 = (0);
seq__34887 = G__35239;
chunk__34889 = G__35240;
count__34890 = G__35241;
i__34891 = G__35242;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__34990){
var map__34991 = p__34990;
var map__34991__$1 = (((((!((map__34991 == null))))?(((((map__34991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34991):map__34991);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34991__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34991__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__34993,done){
var map__34994 = p__34993;
var map__34994__$1 = (((((!((map__34994 == null))))?(((((map__34994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34994):map__34994);
var msg = map__34994__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34994__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34994__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34994__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34994__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34996){
var map__34997 = p__34996;
var map__34997__$1 = (((((!((map__34997 == null))))?(((((map__34997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34997):map__34997);
var src = map__34997__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34997__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
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
}catch (e35000){var e = e35000;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__35002,done){
var map__35003 = p__35002;
var map__35003__$1 = (((((!((map__35003 == null))))?(((((map__35003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35003):map__35003);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35003__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35003__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__35007){
var map__35008 = p__35007;
var map__35008__$1 = (((((!((map__35008 == null))))?(((((map__35008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35008):map__35008);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35008__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35008__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__35010,done){
var map__35011 = p__35010;
var map__35011__$1 = (((((!((map__35011 == null))))?(((((map__35011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35011):map__35011);
var msg = map__35011__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35011__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35013_35265 = type;
var G__35013_35266__$1 = (((G__35013_35265 instanceof cljs.core.Keyword))?G__35013_35265.fqn:null);
switch (G__35013_35266__$1) {
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
var G__35016 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__35017 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__35018 = "POST";
var G__35019 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__35020 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35016,G__35017,G__35018,G__35019,G__35020);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__35022 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__35021 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__35021.cljs$core$IFn$_invoke$arity$1 ? fexpr__35021.cljs$core$IFn$_invoke$arity$1(G__35022) : fexpr__35021.call(null,G__35022));
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
}catch (e35023){var e = e35023;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___35273 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___35273)){
var s_35274 = temp__5735__auto___35273;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_35274.onclose = (function (e){
return null;
}));

s_35274.close();

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
