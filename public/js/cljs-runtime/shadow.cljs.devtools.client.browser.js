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
var len__4789__auto___39102 = arguments.length;
var i__4790__auto___39103 = (0);
while(true){
if((i__4790__auto___39103 < len__4789__auto___39102)){
args__4795__auto__.push((arguments[i__4790__auto___39103]));

var G__39104 = (i__4790__auto___39103 + (1));
i__4790__auto___39103 = G__39104;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38830){
var G__38831 = cljs.core.first(seq38830);
var seq38830__$1 = cljs.core.next(seq38830);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38831,seq38830__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__38835){
var map__38836 = p__38835;
var map__38836__$1 = (((((!((map__38836 == null))))?(((((map__38836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38836):map__38836);
var src = map__38836__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38836__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38836__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__38844 = cljs.core.seq(sources);
var chunk__38845 = null;
var count__38846 = (0);
var i__38847 = (0);
while(true){
if((i__38847 < count__38846)){
var map__38855 = chunk__38845.cljs$core$IIndexed$_nth$arity$2(null,i__38847);
var map__38855__$1 = (((((!((map__38855 == null))))?(((((map__38855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38855):map__38855);
var src = map__38855__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38855__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38855__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38855__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38855__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e38857){var e_39146 = e38857;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39146);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39146.message)].join('')));
}

var G__39149 = seq__38844;
var G__39150 = chunk__38845;
var G__39151 = count__38846;
var G__39152 = (i__38847 + (1));
seq__38844 = G__39149;
chunk__38845 = G__39150;
count__38846 = G__39151;
i__38847 = G__39152;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38844);
if(temp__5735__auto__){
var seq__38844__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38844__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38844__$1);
var G__39154 = cljs.core.chunk_rest(seq__38844__$1);
var G__39155 = c__4609__auto__;
var G__39156 = cljs.core.count(c__4609__auto__);
var G__39157 = (0);
seq__38844 = G__39154;
chunk__38845 = G__39155;
count__38846 = G__39156;
i__38847 = G__39157;
continue;
} else {
var map__38858 = cljs.core.first(seq__38844__$1);
var map__38858__$1 = (((((!((map__38858 == null))))?(((((map__38858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38858):map__38858);
var src = map__38858__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38858__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38858__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38858__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38858__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e38861){var e_39159 = e38861;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39159);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39159.message)].join('')));
}

var G__39162 = cljs.core.next(seq__38844__$1);
var G__39163 = null;
var G__39164 = (0);
var G__39165 = (0);
seq__38844 = G__39162;
chunk__38845 = G__39163;
count__38846 = G__39164;
i__38847 = G__39165;
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
var seq__38864 = cljs.core.seq(js_requires);
var chunk__38865 = null;
var count__38866 = (0);
var i__38867 = (0);
while(true){
if((i__38867 < count__38866)){
var js_ns = chunk__38865.cljs$core$IIndexed$_nth$arity$2(null,i__38867);
var require_str_39170 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39170);


var G__39172 = seq__38864;
var G__39173 = chunk__38865;
var G__39174 = count__38866;
var G__39175 = (i__38867 + (1));
seq__38864 = G__39172;
chunk__38865 = G__39173;
count__38866 = G__39174;
i__38867 = G__39175;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38864);
if(temp__5735__auto__){
var seq__38864__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38864__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38864__$1);
var G__39176 = cljs.core.chunk_rest(seq__38864__$1);
var G__39177 = c__4609__auto__;
var G__39178 = cljs.core.count(c__4609__auto__);
var G__39179 = (0);
seq__38864 = G__39176;
chunk__38865 = G__39177;
count__38866 = G__39178;
i__38867 = G__39179;
continue;
} else {
var js_ns = cljs.core.first(seq__38864__$1);
var require_str_39181 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39181);


var G__39182 = cljs.core.next(seq__38864__$1);
var G__39183 = null;
var G__39184 = (0);
var G__39185 = (0);
seq__38864 = G__39182;
chunk__38865 = G__39183;
count__38866 = G__39184;
i__38867 = G__39185;
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
var G__38869 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__38869) : callback.call(null,G__38869));
} else {
var G__38870 = shadow.cljs.devtools.client.env.files_url();
var G__38871 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__38872 = "POST";
var G__38873 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__38874 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__38870,G__38871,G__38872,G__38873,G__38874);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__38876){
var map__38877 = p__38876;
var map__38877__$1 = (((((!((map__38877 == null))))?(((((map__38877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38877):map__38877);
var msg = map__38877__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38877__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38877__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__38879 = info;
var map__38879__$1 = (((((!((map__38879 == null))))?(((((map__38879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38879):map__38879);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38879__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38879__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38884(s__38885){
return (new cljs.core.LazySeq(null,(function (){
var s__38885__$1 = s__38885;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38885__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__38890 = cljs.core.first(xs__6292__auto__);
var map__38890__$1 = (((((!((map__38890 == null))))?(((((map__38890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38890):map__38890);
var src = map__38890__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38890__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38890__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__38885__$1,map__38890,map__38890__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38879,map__38879__$1,sources,compiled,map__38877,map__38877__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38884_$_iter__38886(s__38887){
return (new cljs.core.LazySeq(null,((function (s__38885__$1,map__38890,map__38890__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38879,map__38879__$1,sources,compiled,map__38877,map__38877__$1,msg,info,reload_info){
return (function (){
var s__38887__$1 = s__38887;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38887__$1);
if(temp__5735__auto____$1){
var s__38887__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38887__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38887__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38889 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38888 = (0);
while(true){
if((i__38888 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38888);
cljs.core.chunk_append(b__38889,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39228 = (i__38888 + (1));
i__38888 = G__39228;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38889),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38884_$_iter__38886(cljs.core.chunk_rest(s__38887__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38889),null);
}
} else {
var warning = cljs.core.first(s__38887__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38884_$_iter__38886(cljs.core.rest(s__38887__$2)));
}
} else {
return null;
}
break;
}
});})(s__38885__$1,map__38890,map__38890__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38879,map__38879__$1,sources,compiled,map__38877,map__38877__$1,msg,info,reload_info))
,null,null));
});})(s__38885__$1,map__38890,map__38890__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38879,map__38879__$1,sources,compiled,map__38877,map__38877__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38884(cljs.core.rest(s__38885__$1)));
} else {
var G__39232 = cljs.core.rest(s__38885__$1);
s__38885__$1 = G__39232;
continue;
}
} else {
var G__39233 = cljs.core.rest(s__38885__$1);
s__38885__$1 = G__39233;
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
var seq__38892_39234 = cljs.core.seq(warnings);
var chunk__38893_39235 = null;
var count__38894_39236 = (0);
var i__38895_39237 = (0);
while(true){
if((i__38895_39237 < count__38894_39236)){
var map__38900_39239 = chunk__38893_39235.cljs$core$IIndexed$_nth$arity$2(null,i__38895_39237);
var map__38900_39240__$1 = (((((!((map__38900_39239 == null))))?(((((map__38900_39239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38900_39239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38900_39239):map__38900_39239);
var w_39241 = map__38900_39240__$1;
var msg_39242__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38900_39240__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38900_39240__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38900_39240__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38900_39240__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39245)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39243),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39244),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39242__$1)].join(''));


var G__39249 = seq__38892_39234;
var G__39250 = chunk__38893_39235;
var G__39251 = count__38894_39236;
var G__39252 = (i__38895_39237 + (1));
seq__38892_39234 = G__39249;
chunk__38893_39235 = G__39250;
count__38894_39236 = G__39251;
i__38895_39237 = G__39252;
continue;
} else {
var temp__5735__auto___39253 = cljs.core.seq(seq__38892_39234);
if(temp__5735__auto___39253){
var seq__38892_39254__$1 = temp__5735__auto___39253;
if(cljs.core.chunked_seq_QMARK_(seq__38892_39254__$1)){
var c__4609__auto___39255 = cljs.core.chunk_first(seq__38892_39254__$1);
var G__39257 = cljs.core.chunk_rest(seq__38892_39254__$1);
var G__39258 = c__4609__auto___39255;
var G__39259 = cljs.core.count(c__4609__auto___39255);
var G__39260 = (0);
seq__38892_39234 = G__39257;
chunk__38893_39235 = G__39258;
count__38894_39236 = G__39259;
i__38895_39237 = G__39260;
continue;
} else {
var map__38902_39263 = cljs.core.first(seq__38892_39254__$1);
var map__38902_39264__$1 = (((((!((map__38902_39263 == null))))?(((((map__38902_39263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38902_39263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38902_39263):map__38902_39263);
var w_39265 = map__38902_39264__$1;
var msg_39266__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38902_39264__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38902_39264__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38902_39264__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38902_39264__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39269)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39267),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39268),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39266__$1)].join(''));


var G__39283 = cljs.core.next(seq__38892_39254__$1);
var G__39284 = null;
var G__39285 = (0);
var G__39286 = (0);
seq__38892_39234 = G__39283;
chunk__38893_39235 = G__39284;
count__38894_39236 = G__39285;
i__38895_39237 = G__39286;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__38904){
var map__38905 = p__38904;
var map__38905__$1 = (((((!((map__38905 == null))))?(((((map__38905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38905):map__38905);
var src = map__38905__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38905__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38905__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38907){
var map__38908 = p__38907;
var map__38908__$1 = (((((!((map__38908 == null))))?(((((map__38908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38908):map__38908);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38908__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__38911){
var map__38912 = p__38911;
var map__38912__$1 = (((((!((map__38912 == null))))?(((((map__38912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38912):map__38912);
var rc = map__38912__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38912__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__38875_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38875_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__38916){
var map__38917 = p__38916;
var map__38917__$1 = (((((!((map__38917 == null))))?(((((map__38917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38917):map__38917);
var msg = map__38917__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38917__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__38919 = cljs.core.seq(updates);
var chunk__38921 = null;
var count__38922 = (0);
var i__38923 = (0);
while(true){
if((i__38923 < count__38922)){
var path = chunk__38921.cljs$core$IIndexed$_nth$arity$2(null,i__38923);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38950_39308 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38953_39309 = null;
var count__38954_39310 = (0);
var i__38955_39311 = (0);
while(true){
if((i__38955_39311 < count__38954_39310)){
var node_39313 = chunk__38953_39309.cljs$core$IIndexed$_nth$arity$2(null,i__38955_39311);
var path_match_39314 = shadow.cljs.devtools.client.browser.match_paths(node_39313.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39314)){
var new_link_39315 = (function (){var G__38962 = node_39313.cloneNode(true);
G__38962.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39314),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38962;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39314], 0));

goog.dom.insertSiblingAfter(new_link_39315,node_39313);

goog.dom.removeNode(node_39313);


var G__39340 = seq__38950_39308;
var G__39341 = chunk__38953_39309;
var G__39342 = count__38954_39310;
var G__39343 = (i__38955_39311 + (1));
seq__38950_39308 = G__39340;
chunk__38953_39309 = G__39341;
count__38954_39310 = G__39342;
i__38955_39311 = G__39343;
continue;
} else {
var G__39344 = seq__38950_39308;
var G__39345 = chunk__38953_39309;
var G__39346 = count__38954_39310;
var G__39347 = (i__38955_39311 + (1));
seq__38950_39308 = G__39344;
chunk__38953_39309 = G__39345;
count__38954_39310 = G__39346;
i__38955_39311 = G__39347;
continue;
}
} else {
var temp__5735__auto___39348 = cljs.core.seq(seq__38950_39308);
if(temp__5735__auto___39348){
var seq__38950_39349__$1 = temp__5735__auto___39348;
if(cljs.core.chunked_seq_QMARK_(seq__38950_39349__$1)){
var c__4609__auto___39354 = cljs.core.chunk_first(seq__38950_39349__$1);
var G__39355 = cljs.core.chunk_rest(seq__38950_39349__$1);
var G__39356 = c__4609__auto___39354;
var G__39357 = cljs.core.count(c__4609__auto___39354);
var G__39358 = (0);
seq__38950_39308 = G__39355;
chunk__38953_39309 = G__39356;
count__38954_39310 = G__39357;
i__38955_39311 = G__39358;
continue;
} else {
var node_39359 = cljs.core.first(seq__38950_39349__$1);
var path_match_39363 = shadow.cljs.devtools.client.browser.match_paths(node_39359.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39363)){
var new_link_39365 = (function (){var G__38964 = node_39359.cloneNode(true);
G__38964.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39363),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38964;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39363], 0));

goog.dom.insertSiblingAfter(new_link_39365,node_39359);

goog.dom.removeNode(node_39359);


var G__39366 = cljs.core.next(seq__38950_39349__$1);
var G__39367 = null;
var G__39368 = (0);
var G__39369 = (0);
seq__38950_39308 = G__39366;
chunk__38953_39309 = G__39367;
count__38954_39310 = G__39368;
i__38955_39311 = G__39369;
continue;
} else {
var G__39370 = cljs.core.next(seq__38950_39349__$1);
var G__39371 = null;
var G__39372 = (0);
var G__39373 = (0);
seq__38950_39308 = G__39370;
chunk__38953_39309 = G__39371;
count__38954_39310 = G__39372;
i__38955_39311 = G__39373;
continue;
}
}
} else {
}
}
break;
}


var G__39374 = seq__38919;
var G__39375 = chunk__38921;
var G__39376 = count__38922;
var G__39377 = (i__38923 + (1));
seq__38919 = G__39374;
chunk__38921 = G__39375;
count__38922 = G__39376;
i__38923 = G__39377;
continue;
} else {
var G__39381 = seq__38919;
var G__39382 = chunk__38921;
var G__39383 = count__38922;
var G__39384 = (i__38923 + (1));
seq__38919 = G__39381;
chunk__38921 = G__39382;
count__38922 = G__39383;
i__38923 = G__39384;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38919);
if(temp__5735__auto__){
var seq__38919__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38919__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38919__$1);
var G__39386 = cljs.core.chunk_rest(seq__38919__$1);
var G__39387 = c__4609__auto__;
var G__39388 = cljs.core.count(c__4609__auto__);
var G__39389 = (0);
seq__38919 = G__39386;
chunk__38921 = G__39387;
count__38922 = G__39388;
i__38923 = G__39389;
continue;
} else {
var path = cljs.core.first(seq__38919__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38967_39393 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38970_39394 = null;
var count__38971_39395 = (0);
var i__38972_39396 = (0);
while(true){
if((i__38972_39396 < count__38971_39395)){
var node_39398 = chunk__38970_39394.cljs$core$IIndexed$_nth$arity$2(null,i__38972_39396);
var path_match_39399 = shadow.cljs.devtools.client.browser.match_paths(node_39398.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39399)){
var new_link_39400 = (function (){var G__38978 = node_39398.cloneNode(true);
G__38978.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39399),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38978;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39399], 0));

goog.dom.insertSiblingAfter(new_link_39400,node_39398);

goog.dom.removeNode(node_39398);


var G__39401 = seq__38967_39393;
var G__39402 = chunk__38970_39394;
var G__39403 = count__38971_39395;
var G__39404 = (i__38972_39396 + (1));
seq__38967_39393 = G__39401;
chunk__38970_39394 = G__39402;
count__38971_39395 = G__39403;
i__38972_39396 = G__39404;
continue;
} else {
var G__39405 = seq__38967_39393;
var G__39406 = chunk__38970_39394;
var G__39407 = count__38971_39395;
var G__39408 = (i__38972_39396 + (1));
seq__38967_39393 = G__39405;
chunk__38970_39394 = G__39406;
count__38971_39395 = G__39407;
i__38972_39396 = G__39408;
continue;
}
} else {
var temp__5735__auto___39409__$1 = cljs.core.seq(seq__38967_39393);
if(temp__5735__auto___39409__$1){
var seq__38967_39410__$1 = temp__5735__auto___39409__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38967_39410__$1)){
var c__4609__auto___39411 = cljs.core.chunk_first(seq__38967_39410__$1);
var G__39412 = cljs.core.chunk_rest(seq__38967_39410__$1);
var G__39413 = c__4609__auto___39411;
var G__39414 = cljs.core.count(c__4609__auto___39411);
var G__39415 = (0);
seq__38967_39393 = G__39412;
chunk__38970_39394 = G__39413;
count__38971_39395 = G__39414;
i__38972_39396 = G__39415;
continue;
} else {
var node_39416 = cljs.core.first(seq__38967_39410__$1);
var path_match_39417 = shadow.cljs.devtools.client.browser.match_paths(node_39416.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39417)){
var new_link_39418 = (function (){var G__38980 = node_39416.cloneNode(true);
G__38980.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39417),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38980;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39417], 0));

goog.dom.insertSiblingAfter(new_link_39418,node_39416);

goog.dom.removeNode(node_39416);


var G__39423 = cljs.core.next(seq__38967_39410__$1);
var G__39424 = null;
var G__39425 = (0);
var G__39426 = (0);
seq__38967_39393 = G__39423;
chunk__38970_39394 = G__39424;
count__38971_39395 = G__39425;
i__38972_39396 = G__39426;
continue;
} else {
var G__39427 = cljs.core.next(seq__38967_39410__$1);
var G__39428 = null;
var G__39429 = (0);
var G__39430 = (0);
seq__38967_39393 = G__39427;
chunk__38970_39394 = G__39428;
count__38971_39395 = G__39429;
i__38972_39396 = G__39430;
continue;
}
}
} else {
}
}
break;
}


var G__39431 = cljs.core.next(seq__38919__$1);
var G__39432 = null;
var G__39433 = (0);
var G__39434 = (0);
seq__38919 = G__39431;
chunk__38921 = G__39432;
count__38922 = G__39433;
i__38923 = G__39434;
continue;
} else {
var G__39435 = cljs.core.next(seq__38919__$1);
var G__39436 = null;
var G__39437 = (0);
var G__39438 = (0);
seq__38919 = G__39435;
chunk__38921 = G__39436;
count__38922 = G__39437;
i__38923 = G__39438;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__38983){
var map__38984 = p__38983;
var map__38984__$1 = (((((!((map__38984 == null))))?(((((map__38984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38984):map__38984);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38984__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38984__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__38986,done){
var map__38987 = p__38986;
var map__38987__$1 = (((((!((map__38987 == null))))?(((((map__38987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38987):map__38987);
var msg = map__38987__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38987__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38987__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38987__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38987__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38990){
var map__38991 = p__38990;
var map__38991__$1 = (((((!((map__38991 == null))))?(((((map__38991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38991):map__38991);
var src = map__38991__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38991__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
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
}catch (e38998){var e = e38998;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__39001,done){
var map__39002 = p__39001;
var map__39002__$1 = (((((!((map__39002 == null))))?(((((map__39002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39002):map__39002);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39002__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39002__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__39007){
var map__39008 = p__39007;
var map__39008__$1 = (((((!((map__39008 == null))))?(((((map__39008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39008):map__39008);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39008__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39008__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__39016,done){
var map__39017 = p__39016;
var map__39017__$1 = (((((!((map__39017 == null))))?(((((map__39017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39017):map__39017);
var msg = map__39017__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39017__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__39019_39468 = type;
var G__39019_39469__$1 = (((G__39019_39468 instanceof cljs.core.Keyword))?G__39019_39468.fqn:null);
switch (G__39019_39469__$1) {
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
var G__39025 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__39026 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__39027 = "POST";
var G__39028 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__39029 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__39025,G__39026,G__39027,G__39028,G__39029);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__39038 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__39037 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__39037.cljs$core$IFn$_invoke$arity$1 ? fexpr__39037.cljs$core$IFn$_invoke$arity$1(G__39038) : fexpr__39037.call(null,G__39038));
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
}catch (e39072){var e = e39072;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___39477 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___39477)){
var s_39478 = temp__5735__auto___39477;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_39478.onclose = (function (e){
return null;
}));

s_39478.close();

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
