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
var len__4789__auto___34767 = arguments.length;
var i__4790__auto___34768 = (0);
while(true){
if((i__4790__auto___34768 < len__4789__auto___34767)){
args__4795__auto__.push((arguments[i__4790__auto___34768]));

var G__34769 = (i__4790__auto___34768 + (1));
i__4790__auto___34768 = G__34769;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq34534){
var G__34535 = cljs.core.first(seq34534);
var seq34534__$1 = cljs.core.next(seq34534);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34535,seq34534__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__34542){
var map__34544 = p__34542;
var map__34544__$1 = (((((!((map__34544 == null))))?(((((map__34544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34544):map__34544);
var src = map__34544__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34544__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34544__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__34547 = cljs.core.seq(sources);
var chunk__34548 = null;
var count__34549 = (0);
var i__34550 = (0);
while(true){
if((i__34550 < count__34549)){
var map__34560 = chunk__34548.cljs$core$IIndexed$_nth$arity$2(null,i__34550);
var map__34560__$1 = (((((!((map__34560 == null))))?(((((map__34560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34560):map__34560);
var src = map__34560__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34560__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34560__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34560__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34560__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34563){var e_34786 = e34563;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34786);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34786.message)].join('')));
}

var G__34787 = seq__34547;
var G__34788 = chunk__34548;
var G__34789 = count__34549;
var G__34790 = (i__34550 + (1));
seq__34547 = G__34787;
chunk__34548 = G__34788;
count__34549 = G__34789;
i__34550 = G__34790;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34547);
if(temp__5735__auto__){
var seq__34547__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34547__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34547__$1);
var G__34795 = cljs.core.chunk_rest(seq__34547__$1);
var G__34796 = c__4609__auto__;
var G__34797 = cljs.core.count(c__4609__auto__);
var G__34798 = (0);
seq__34547 = G__34795;
chunk__34548 = G__34796;
count__34549 = G__34797;
i__34550 = G__34798;
continue;
} else {
var map__34564 = cljs.core.first(seq__34547__$1);
var map__34564__$1 = (((((!((map__34564 == null))))?(((((map__34564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34564):map__34564);
var src = map__34564__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34564__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34564__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34564__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34564__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34566){var e_34802 = e34566;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34802);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34802.message)].join('')));
}

var G__34804 = cljs.core.next(seq__34547__$1);
var G__34805 = null;
var G__34806 = (0);
var G__34807 = (0);
seq__34547 = G__34804;
chunk__34548 = G__34805;
count__34549 = G__34806;
i__34550 = G__34807;
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
var seq__34569 = cljs.core.seq(js_requires);
var chunk__34570 = null;
var count__34571 = (0);
var i__34572 = (0);
while(true){
if((i__34572 < count__34571)){
var js_ns = chunk__34570.cljs$core$IIndexed$_nth$arity$2(null,i__34572);
var require_str_34813 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34813);


var G__34814 = seq__34569;
var G__34815 = chunk__34570;
var G__34816 = count__34571;
var G__34817 = (i__34572 + (1));
seq__34569 = G__34814;
chunk__34570 = G__34815;
count__34571 = G__34816;
i__34572 = G__34817;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34569);
if(temp__5735__auto__){
var seq__34569__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34569__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34569__$1);
var G__34822 = cljs.core.chunk_rest(seq__34569__$1);
var G__34823 = c__4609__auto__;
var G__34824 = cljs.core.count(c__4609__auto__);
var G__34825 = (0);
seq__34569 = G__34822;
chunk__34570 = G__34823;
count__34571 = G__34824;
i__34572 = G__34825;
continue;
} else {
var js_ns = cljs.core.first(seq__34569__$1);
var require_str_34826 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34826);


var G__34827 = cljs.core.next(seq__34569__$1);
var G__34828 = null;
var G__34829 = (0);
var G__34830 = (0);
seq__34569 = G__34827;
chunk__34570 = G__34828;
count__34571 = G__34829;
i__34572 = G__34830;
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
var G__34575 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__34575) : callback.call(null,G__34575));
} else {
var G__34576 = shadow.cljs.devtools.client.env.files_url();
var G__34577 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__34578 = "POST";
var G__34579 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__34580 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__34576,G__34577,G__34578,G__34579,G__34580);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__34583){
var map__34584 = p__34583;
var map__34584__$1 = (((((!((map__34584 == null))))?(((((map__34584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34584):map__34584);
var msg = map__34584__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34584__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34584__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__34586 = info;
var map__34586__$1 = (((((!((map__34586 == null))))?(((((map__34586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34586):map__34586);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34586__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34586__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34588(s__34589){
return (new cljs.core.LazySeq(null,(function (){
var s__34589__$1 = s__34589;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34589__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__34595 = cljs.core.first(xs__6292__auto__);
var map__34595__$1 = (((((!((map__34595 == null))))?(((((map__34595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34595):map__34595);
var src = map__34595__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34595__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34595__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__34589__$1,map__34595,map__34595__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34586,map__34586__$1,sources,compiled,map__34584,map__34584__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34588_$_iter__34590(s__34591){
return (new cljs.core.LazySeq(null,((function (s__34589__$1,map__34595,map__34595__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34586,map__34586__$1,sources,compiled,map__34584,map__34584__$1,msg,info,reload_info){
return (function (){
var s__34591__$1 = s__34591;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__34591__$1);
if(temp__5735__auto____$1){
var s__34591__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34591__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__34591__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__34593 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__34592 = (0);
while(true){
if((i__34592 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__34592);
cljs.core.chunk_append(b__34593,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__34849 = (i__34592 + (1));
i__34592 = G__34849;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34593),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34588_$_iter__34590(cljs.core.chunk_rest(s__34591__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34593),null);
}
} else {
var warning = cljs.core.first(s__34591__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34588_$_iter__34590(cljs.core.rest(s__34591__$2)));
}
} else {
return null;
}
break;
}
});})(s__34589__$1,map__34595,map__34595__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34586,map__34586__$1,sources,compiled,map__34584,map__34584__$1,msg,info,reload_info))
,null,null));
});})(s__34589__$1,map__34595,map__34595__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34586,map__34586__$1,sources,compiled,map__34584,map__34584__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34588(cljs.core.rest(s__34589__$1)));
} else {
var G__34854 = cljs.core.rest(s__34589__$1);
s__34589__$1 = G__34854;
continue;
}
} else {
var G__34855 = cljs.core.rest(s__34589__$1);
s__34589__$1 = G__34855;
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
var seq__34598_34856 = cljs.core.seq(warnings);
var chunk__34599_34857 = null;
var count__34600_34858 = (0);
var i__34601_34859 = (0);
while(true){
if((i__34601_34859 < count__34600_34858)){
var map__34608_34860 = chunk__34599_34857.cljs$core$IIndexed$_nth$arity$2(null,i__34601_34859);
var map__34608_34861__$1 = (((((!((map__34608_34860 == null))))?(((((map__34608_34860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34608_34860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34608_34860):map__34608_34860);
var w_34862 = map__34608_34861__$1;
var msg_34863__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34608_34861__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34608_34861__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34608_34861__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34608_34861__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34866)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34864),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34865),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34863__$1)].join(''));


var G__34871 = seq__34598_34856;
var G__34872 = chunk__34599_34857;
var G__34873 = count__34600_34858;
var G__34874 = (i__34601_34859 + (1));
seq__34598_34856 = G__34871;
chunk__34599_34857 = G__34872;
count__34600_34858 = G__34873;
i__34601_34859 = G__34874;
continue;
} else {
var temp__5735__auto___34875 = cljs.core.seq(seq__34598_34856);
if(temp__5735__auto___34875){
var seq__34598_34876__$1 = temp__5735__auto___34875;
if(cljs.core.chunked_seq_QMARK_(seq__34598_34876__$1)){
var c__4609__auto___34877 = cljs.core.chunk_first(seq__34598_34876__$1);
var G__34879 = cljs.core.chunk_rest(seq__34598_34876__$1);
var G__34880 = c__4609__auto___34877;
var G__34881 = cljs.core.count(c__4609__auto___34877);
var G__34882 = (0);
seq__34598_34856 = G__34879;
chunk__34599_34857 = G__34880;
count__34600_34858 = G__34881;
i__34601_34859 = G__34882;
continue;
} else {
var map__34611_34885 = cljs.core.first(seq__34598_34876__$1);
var map__34611_34886__$1 = (((((!((map__34611_34885 == null))))?(((((map__34611_34885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34611_34885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34611_34885):map__34611_34885);
var w_34887 = map__34611_34886__$1;
var msg_34888__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34611_34886__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34611_34886__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34611_34886__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34611_34886__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34891)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34889),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34890),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34888__$1)].join(''));


var G__34893 = cljs.core.next(seq__34598_34876__$1);
var G__34894 = null;
var G__34895 = (0);
var G__34896 = (0);
seq__34598_34856 = G__34893;
chunk__34599_34857 = G__34894;
count__34600_34858 = G__34895;
i__34601_34859 = G__34896;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34613){
var map__34614 = p__34613;
var map__34614__$1 = (((((!((map__34614 == null))))?(((((map__34614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34614):map__34614);
var src = map__34614__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34614__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34614__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34617){
var map__34618 = p__34617;
var map__34618__$1 = (((((!((map__34618 == null))))?(((((map__34618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34618):map__34618);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34618__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34620){
var map__34621 = p__34620;
var map__34621__$1 = (((((!((map__34621 == null))))?(((((map__34621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34621):map__34621);
var rc = map__34621__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34621__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__34581_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__34581_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__34624){
var map__34625 = p__34624;
var map__34625__$1 = (((((!((map__34625 == null))))?(((((map__34625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34625):map__34625);
var msg = map__34625__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34625__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__34628 = cljs.core.seq(updates);
var chunk__34630 = null;
var count__34631 = (0);
var i__34632 = (0);
while(true){
if((i__34632 < count__34631)){
var path = chunk__34630.cljs$core$IIndexed$_nth$arity$2(null,i__34632);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34660_34917 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34663_34918 = null;
var count__34664_34919 = (0);
var i__34665_34920 = (0);
while(true){
if((i__34665_34920 < count__34664_34919)){
var node_34921 = chunk__34663_34918.cljs$core$IIndexed$_nth$arity$2(null,i__34665_34920);
var path_match_34922 = shadow.cljs.devtools.client.browser.match_paths(node_34921.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34922)){
var new_link_34924 = (function (){var G__34671 = node_34921.cloneNode(true);
G__34671.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34922),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34671;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34922], 0));

goog.dom.insertSiblingAfter(new_link_34924,node_34921);

goog.dom.removeNode(node_34921);


var G__34925 = seq__34660_34917;
var G__34926 = chunk__34663_34918;
var G__34927 = count__34664_34919;
var G__34928 = (i__34665_34920 + (1));
seq__34660_34917 = G__34925;
chunk__34663_34918 = G__34926;
count__34664_34919 = G__34927;
i__34665_34920 = G__34928;
continue;
} else {
var G__34931 = seq__34660_34917;
var G__34932 = chunk__34663_34918;
var G__34933 = count__34664_34919;
var G__34934 = (i__34665_34920 + (1));
seq__34660_34917 = G__34931;
chunk__34663_34918 = G__34932;
count__34664_34919 = G__34933;
i__34665_34920 = G__34934;
continue;
}
} else {
var temp__5735__auto___34936 = cljs.core.seq(seq__34660_34917);
if(temp__5735__auto___34936){
var seq__34660_34937__$1 = temp__5735__auto___34936;
if(cljs.core.chunked_seq_QMARK_(seq__34660_34937__$1)){
var c__4609__auto___34938 = cljs.core.chunk_first(seq__34660_34937__$1);
var G__34939 = cljs.core.chunk_rest(seq__34660_34937__$1);
var G__34940 = c__4609__auto___34938;
var G__34941 = cljs.core.count(c__4609__auto___34938);
var G__34942 = (0);
seq__34660_34917 = G__34939;
chunk__34663_34918 = G__34940;
count__34664_34919 = G__34941;
i__34665_34920 = G__34942;
continue;
} else {
var node_34943 = cljs.core.first(seq__34660_34937__$1);
var path_match_34944 = shadow.cljs.devtools.client.browser.match_paths(node_34943.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34944)){
var new_link_34946 = (function (){var G__34673 = node_34943.cloneNode(true);
G__34673.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34944),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34673;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34944], 0));

goog.dom.insertSiblingAfter(new_link_34946,node_34943);

goog.dom.removeNode(node_34943);


var G__34947 = cljs.core.next(seq__34660_34937__$1);
var G__34948 = null;
var G__34949 = (0);
var G__34950 = (0);
seq__34660_34917 = G__34947;
chunk__34663_34918 = G__34948;
count__34664_34919 = G__34949;
i__34665_34920 = G__34950;
continue;
} else {
var G__34952 = cljs.core.next(seq__34660_34937__$1);
var G__34953 = null;
var G__34954 = (0);
var G__34955 = (0);
seq__34660_34917 = G__34952;
chunk__34663_34918 = G__34953;
count__34664_34919 = G__34954;
i__34665_34920 = G__34955;
continue;
}
}
} else {
}
}
break;
}


var G__34957 = seq__34628;
var G__34958 = chunk__34630;
var G__34959 = count__34631;
var G__34960 = (i__34632 + (1));
seq__34628 = G__34957;
chunk__34630 = G__34958;
count__34631 = G__34959;
i__34632 = G__34960;
continue;
} else {
var G__34962 = seq__34628;
var G__34963 = chunk__34630;
var G__34964 = count__34631;
var G__34965 = (i__34632 + (1));
seq__34628 = G__34962;
chunk__34630 = G__34963;
count__34631 = G__34964;
i__34632 = G__34965;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34628);
if(temp__5735__auto__){
var seq__34628__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34628__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34628__$1);
var G__34966 = cljs.core.chunk_rest(seq__34628__$1);
var G__34967 = c__4609__auto__;
var G__34968 = cljs.core.count(c__4609__auto__);
var G__34969 = (0);
seq__34628 = G__34966;
chunk__34630 = G__34967;
count__34631 = G__34968;
i__34632 = G__34969;
continue;
} else {
var path = cljs.core.first(seq__34628__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34675_34971 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34678_34972 = null;
var count__34679_34973 = (0);
var i__34680_34974 = (0);
while(true){
if((i__34680_34974 < count__34679_34973)){
var node_34975 = chunk__34678_34972.cljs$core$IIndexed$_nth$arity$2(null,i__34680_34974);
var path_match_34976 = shadow.cljs.devtools.client.browser.match_paths(node_34975.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34976)){
var new_link_34979 = (function (){var G__34685 = node_34975.cloneNode(true);
G__34685.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34976),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34685;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34976], 0));

goog.dom.insertSiblingAfter(new_link_34979,node_34975);

goog.dom.removeNode(node_34975);


var G__34981 = seq__34675_34971;
var G__34982 = chunk__34678_34972;
var G__34983 = count__34679_34973;
var G__34984 = (i__34680_34974 + (1));
seq__34675_34971 = G__34981;
chunk__34678_34972 = G__34982;
count__34679_34973 = G__34983;
i__34680_34974 = G__34984;
continue;
} else {
var G__34985 = seq__34675_34971;
var G__34986 = chunk__34678_34972;
var G__34987 = count__34679_34973;
var G__34988 = (i__34680_34974 + (1));
seq__34675_34971 = G__34985;
chunk__34678_34972 = G__34986;
count__34679_34973 = G__34987;
i__34680_34974 = G__34988;
continue;
}
} else {
var temp__5735__auto___34990__$1 = cljs.core.seq(seq__34675_34971);
if(temp__5735__auto___34990__$1){
var seq__34675_34991__$1 = temp__5735__auto___34990__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34675_34991__$1)){
var c__4609__auto___34992 = cljs.core.chunk_first(seq__34675_34991__$1);
var G__34993 = cljs.core.chunk_rest(seq__34675_34991__$1);
var G__34994 = c__4609__auto___34992;
var G__34995 = cljs.core.count(c__4609__auto___34992);
var G__34996 = (0);
seq__34675_34971 = G__34993;
chunk__34678_34972 = G__34994;
count__34679_34973 = G__34995;
i__34680_34974 = G__34996;
continue;
} else {
var node_34999 = cljs.core.first(seq__34675_34991__$1);
var path_match_35001 = shadow.cljs.devtools.client.browser.match_paths(node_34999.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35001)){
var new_link_35002 = (function (){var G__34686 = node_34999.cloneNode(true);
G__34686.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35001),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34686;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35001], 0));

goog.dom.insertSiblingAfter(new_link_35002,node_34999);

goog.dom.removeNode(node_34999);


var G__35003 = cljs.core.next(seq__34675_34991__$1);
var G__35004 = null;
var G__35005 = (0);
var G__35006 = (0);
seq__34675_34971 = G__35003;
chunk__34678_34972 = G__35004;
count__34679_34973 = G__35005;
i__34680_34974 = G__35006;
continue;
} else {
var G__35007 = cljs.core.next(seq__34675_34991__$1);
var G__35008 = null;
var G__35009 = (0);
var G__35010 = (0);
seq__34675_34971 = G__35007;
chunk__34678_34972 = G__35008;
count__34679_34973 = G__35009;
i__34680_34974 = G__35010;
continue;
}
}
} else {
}
}
break;
}


var G__35011 = cljs.core.next(seq__34628__$1);
var G__35012 = null;
var G__35013 = (0);
var G__35014 = (0);
seq__34628 = G__35011;
chunk__34630 = G__35012;
count__34631 = G__35013;
i__34632 = G__35014;
continue;
} else {
var G__35015 = cljs.core.next(seq__34628__$1);
var G__35016 = null;
var G__35017 = (0);
var G__35018 = (0);
seq__34628 = G__35015;
chunk__34630 = G__35016;
count__34631 = G__35017;
i__34632 = G__35018;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__34690){
var map__34691 = p__34690;
var map__34691__$1 = (((((!((map__34691 == null))))?(((((map__34691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34691):map__34691);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34691__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34691__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__34693,done){
var map__34694 = p__34693;
var map__34694__$1 = (((((!((map__34694 == null))))?(((((map__34694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34694):map__34694);
var msg = map__34694__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34694__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34694__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34694__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34694__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34698){
var map__34699 = p__34698;
var map__34699__$1 = (((((!((map__34699 == null))))?(((((map__34699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34699):map__34699);
var src = map__34699__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34699__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
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
}catch (e34701){var e = e34701;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__34702,done){
var map__34703 = p__34702;
var map__34703__$1 = (((((!((map__34703 == null))))?(((((map__34703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34703):map__34703);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34703__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34703__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__34707){
var map__34708 = p__34707;
var map__34708__$1 = (((((!((map__34708 == null))))?(((((map__34708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34708):map__34708);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34708__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34708__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__34719,done){
var map__34720 = p__34719;
var map__34720__$1 = (((((!((map__34720 == null))))?(((((map__34720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34720):map__34720);
var msg = map__34720__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34720__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__34722_35062 = type;
var G__34722_35063__$1 = (((G__34722_35062 instanceof cljs.core.Keyword))?G__34722_35062.fqn:null);
switch (G__34722_35063__$1) {
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
var G__34724 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__34725 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__34726 = "POST";
var G__34727 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__34728 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__34724,G__34725,G__34726,G__34727,G__34728);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__34733 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__34732 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__34732.cljs$core$IFn$_invoke$arity$1 ? fexpr__34732.cljs$core$IFn$_invoke$arity$1(G__34733) : fexpr__34732.call(null,G__34733));
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
}catch (e34749){var e = e34749;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___35120 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___35120)){
var s_35121 = temp__5735__auto___35120;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_35121.onclose = (function (e){
return null;
}));

s_35121.close();

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
