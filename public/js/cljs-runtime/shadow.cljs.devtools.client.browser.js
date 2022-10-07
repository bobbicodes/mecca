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
var len__4789__auto___34774 = arguments.length;
var i__4790__auto___34775 = (0);
while(true){
if((i__4790__auto___34775 < len__4789__auto___34774)){
args__4795__auto__.push((arguments[i__4790__auto___34775]));

var G__34776 = (i__4790__auto___34775 + (1));
i__4790__auto___34775 = G__34776;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq34544){
var G__34545 = cljs.core.first(seq34544);
var seq34544__$1 = cljs.core.next(seq34544);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34545,seq34544__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__34550){
var map__34551 = p__34550;
var map__34551__$1 = (((((!((map__34551 == null))))?(((((map__34551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34551):map__34551);
var src = map__34551__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34551__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34551__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__34554 = cljs.core.seq(sources);
var chunk__34555 = null;
var count__34556 = (0);
var i__34557 = (0);
while(true){
if((i__34557 < count__34556)){
var map__34565 = chunk__34555.cljs$core$IIndexed$_nth$arity$2(null,i__34557);
var map__34565__$1 = (((((!((map__34565 == null))))?(((((map__34565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34565):map__34565);
var src = map__34565__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34565__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34565__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34565__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34565__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34567){var e_34793 = e34567;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34793);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34793.message)].join('')));
}

var G__34795 = seq__34554;
var G__34796 = chunk__34555;
var G__34797 = count__34556;
var G__34798 = (i__34557 + (1));
seq__34554 = G__34795;
chunk__34555 = G__34796;
count__34556 = G__34797;
i__34557 = G__34798;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34554);
if(temp__5735__auto__){
var seq__34554__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34554__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34554__$1);
var G__34799 = cljs.core.chunk_rest(seq__34554__$1);
var G__34800 = c__4609__auto__;
var G__34801 = cljs.core.count(c__4609__auto__);
var G__34802 = (0);
seq__34554 = G__34799;
chunk__34555 = G__34800;
count__34556 = G__34801;
i__34557 = G__34802;
continue;
} else {
var map__34569 = cljs.core.first(seq__34554__$1);
var map__34569__$1 = (((((!((map__34569 == null))))?(((((map__34569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34569):map__34569);
var src = map__34569__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34569__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34569__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34569__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34569__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34571){var e_34807 = e34571;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34807);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34807.message)].join('')));
}

var G__34808 = cljs.core.next(seq__34554__$1);
var G__34809 = null;
var G__34810 = (0);
var G__34811 = (0);
seq__34554 = G__34808;
chunk__34555 = G__34809;
count__34556 = G__34810;
i__34557 = G__34811;
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
var seq__34574 = cljs.core.seq(js_requires);
var chunk__34575 = null;
var count__34576 = (0);
var i__34577 = (0);
while(true){
if((i__34577 < count__34576)){
var js_ns = chunk__34575.cljs$core$IIndexed$_nth$arity$2(null,i__34577);
var require_str_34815 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34815);


var G__34817 = seq__34574;
var G__34818 = chunk__34575;
var G__34819 = count__34576;
var G__34820 = (i__34577 + (1));
seq__34574 = G__34817;
chunk__34575 = G__34818;
count__34576 = G__34819;
i__34577 = G__34820;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34574);
if(temp__5735__auto__){
var seq__34574__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34574__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34574__$1);
var G__34822 = cljs.core.chunk_rest(seq__34574__$1);
var G__34823 = c__4609__auto__;
var G__34824 = cljs.core.count(c__4609__auto__);
var G__34825 = (0);
seq__34574 = G__34822;
chunk__34575 = G__34823;
count__34576 = G__34824;
i__34577 = G__34825;
continue;
} else {
var js_ns = cljs.core.first(seq__34574__$1);
var require_str_34826 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34826);


var G__34827 = cljs.core.next(seq__34574__$1);
var G__34828 = null;
var G__34829 = (0);
var G__34830 = (0);
seq__34574 = G__34827;
chunk__34575 = G__34828;
count__34576 = G__34829;
i__34577 = G__34830;
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
var G__34580 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__34580) : callback.call(null,G__34580));
} else {
var G__34581 = shadow.cljs.devtools.client.env.files_url();
var G__34582 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__34583 = "POST";
var G__34584 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__34585 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__34581,G__34582,G__34583,G__34584,G__34585);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__34588){
var map__34589 = p__34588;
var map__34589__$1 = (((((!((map__34589 == null))))?(((((map__34589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34589):map__34589);
var msg = map__34589__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34589__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34589__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__34591 = info;
var map__34591__$1 = (((((!((map__34591 == null))))?(((((map__34591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34591):map__34591);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34591__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34591__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34594(s__34595){
return (new cljs.core.LazySeq(null,(function (){
var s__34595__$1 = s__34595;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34595__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__34600 = cljs.core.first(xs__6292__auto__);
var map__34600__$1 = (((((!((map__34600 == null))))?(((((map__34600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34600):map__34600);
var src = map__34600__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34600__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34600__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__34595__$1,map__34600,map__34600__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34591,map__34591__$1,sources,compiled,map__34589,map__34589__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34594_$_iter__34596(s__34597){
return (new cljs.core.LazySeq(null,((function (s__34595__$1,map__34600,map__34600__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34591,map__34591__$1,sources,compiled,map__34589,map__34589__$1,msg,info,reload_info){
return (function (){
var s__34597__$1 = s__34597;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__34597__$1);
if(temp__5735__auto____$1){
var s__34597__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34597__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__34597__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__34599 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__34598 = (0);
while(true){
if((i__34598 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__34598);
cljs.core.chunk_append(b__34599,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__34850 = (i__34598 + (1));
i__34598 = G__34850;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34599),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34594_$_iter__34596(cljs.core.chunk_rest(s__34597__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34599),null);
}
} else {
var warning = cljs.core.first(s__34597__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34594_$_iter__34596(cljs.core.rest(s__34597__$2)));
}
} else {
return null;
}
break;
}
});})(s__34595__$1,map__34600,map__34600__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34591,map__34591__$1,sources,compiled,map__34589,map__34589__$1,msg,info,reload_info))
,null,null));
});})(s__34595__$1,map__34600,map__34600__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34591,map__34591__$1,sources,compiled,map__34589,map__34589__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34594(cljs.core.rest(s__34595__$1)));
} else {
var G__34858 = cljs.core.rest(s__34595__$1);
s__34595__$1 = G__34858;
continue;
}
} else {
var G__34859 = cljs.core.rest(s__34595__$1);
s__34595__$1 = G__34859;
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
var seq__34603_34860 = cljs.core.seq(warnings);
var chunk__34604_34861 = null;
var count__34605_34862 = (0);
var i__34606_34863 = (0);
while(true){
if((i__34606_34863 < count__34605_34862)){
var map__34612_34864 = chunk__34604_34861.cljs$core$IIndexed$_nth$arity$2(null,i__34606_34863);
var map__34612_34865__$1 = (((((!((map__34612_34864 == null))))?(((((map__34612_34864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34612_34864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34612_34864):map__34612_34864);
var w_34866 = map__34612_34865__$1;
var msg_34867__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34612_34865__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34612_34865__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34612_34865__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34612_34865__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34870)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34868),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34869),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34867__$1)].join(''));


var G__34873 = seq__34603_34860;
var G__34874 = chunk__34604_34861;
var G__34875 = count__34605_34862;
var G__34876 = (i__34606_34863 + (1));
seq__34603_34860 = G__34873;
chunk__34604_34861 = G__34874;
count__34605_34862 = G__34875;
i__34606_34863 = G__34876;
continue;
} else {
var temp__5735__auto___34879 = cljs.core.seq(seq__34603_34860);
if(temp__5735__auto___34879){
var seq__34603_34880__$1 = temp__5735__auto___34879;
if(cljs.core.chunked_seq_QMARK_(seq__34603_34880__$1)){
var c__4609__auto___34881 = cljs.core.chunk_first(seq__34603_34880__$1);
var G__34882 = cljs.core.chunk_rest(seq__34603_34880__$1);
var G__34883 = c__4609__auto___34881;
var G__34884 = cljs.core.count(c__4609__auto___34881);
var G__34885 = (0);
seq__34603_34860 = G__34882;
chunk__34604_34861 = G__34883;
count__34605_34862 = G__34884;
i__34606_34863 = G__34885;
continue;
} else {
var map__34615_34888 = cljs.core.first(seq__34603_34880__$1);
var map__34615_34889__$1 = (((((!((map__34615_34888 == null))))?(((((map__34615_34888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34615_34888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34615_34888):map__34615_34888);
var w_34890 = map__34615_34889__$1;
var msg_34891__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34615_34889__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34615_34889__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34615_34889__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34894 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34615_34889__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34894)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34892),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34893),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34891__$1)].join(''));


var G__34898 = cljs.core.next(seq__34603_34880__$1);
var G__34899 = null;
var G__34900 = (0);
var G__34901 = (0);
seq__34603_34860 = G__34898;
chunk__34604_34861 = G__34899;
count__34605_34862 = G__34900;
i__34606_34863 = G__34901;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34617){
var map__34618 = p__34617;
var map__34618__$1 = (((((!((map__34618 == null))))?(((((map__34618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34618):map__34618);
var src = map__34618__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34618__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34618__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34621){
var map__34622 = p__34621;
var map__34622__$1 = (((((!((map__34622 == null))))?(((((map__34622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34622):map__34622);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34622__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34624){
var map__34625 = p__34624;
var map__34625__$1 = (((((!((map__34625 == null))))?(((((map__34625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34625):map__34625);
var rc = map__34625__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34625__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__34587_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__34587_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__34629){
var map__34630 = p__34629;
var map__34630__$1 = (((((!((map__34630 == null))))?(((((map__34630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34630):map__34630);
var msg = map__34630__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34630__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__34632 = cljs.core.seq(updates);
var chunk__34634 = null;
var count__34635 = (0);
var i__34636 = (0);
while(true){
if((i__34636 < count__34635)){
var path = chunk__34634.cljs$core$IIndexed$_nth$arity$2(null,i__34636);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34666_34917 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34669_34918 = null;
var count__34670_34919 = (0);
var i__34671_34920 = (0);
while(true){
if((i__34671_34920 < count__34670_34919)){
var node_34923 = chunk__34669_34918.cljs$core$IIndexed$_nth$arity$2(null,i__34671_34920);
var path_match_34925 = shadow.cljs.devtools.client.browser.match_paths(node_34923.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34925)){
var new_link_34927 = (function (){var G__34678 = node_34923.cloneNode(true);
G__34678.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34925),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34678;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34925], 0));

goog.dom.insertSiblingAfter(new_link_34927,node_34923);

goog.dom.removeNode(node_34923);


var G__34931 = seq__34666_34917;
var G__34932 = chunk__34669_34918;
var G__34933 = count__34670_34919;
var G__34934 = (i__34671_34920 + (1));
seq__34666_34917 = G__34931;
chunk__34669_34918 = G__34932;
count__34670_34919 = G__34933;
i__34671_34920 = G__34934;
continue;
} else {
var G__34935 = seq__34666_34917;
var G__34936 = chunk__34669_34918;
var G__34937 = count__34670_34919;
var G__34938 = (i__34671_34920 + (1));
seq__34666_34917 = G__34935;
chunk__34669_34918 = G__34936;
count__34670_34919 = G__34937;
i__34671_34920 = G__34938;
continue;
}
} else {
var temp__5735__auto___34939 = cljs.core.seq(seq__34666_34917);
if(temp__5735__auto___34939){
var seq__34666_34940__$1 = temp__5735__auto___34939;
if(cljs.core.chunked_seq_QMARK_(seq__34666_34940__$1)){
var c__4609__auto___34941 = cljs.core.chunk_first(seq__34666_34940__$1);
var G__34942 = cljs.core.chunk_rest(seq__34666_34940__$1);
var G__34943 = c__4609__auto___34941;
var G__34944 = cljs.core.count(c__4609__auto___34941);
var G__34945 = (0);
seq__34666_34917 = G__34942;
chunk__34669_34918 = G__34943;
count__34670_34919 = G__34944;
i__34671_34920 = G__34945;
continue;
} else {
var node_34947 = cljs.core.first(seq__34666_34940__$1);
var path_match_34948 = shadow.cljs.devtools.client.browser.match_paths(node_34947.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34948)){
var new_link_34949 = (function (){var G__34679 = node_34947.cloneNode(true);
G__34679.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34948),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34679;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34948], 0));

goog.dom.insertSiblingAfter(new_link_34949,node_34947);

goog.dom.removeNode(node_34947);


var G__34952 = cljs.core.next(seq__34666_34940__$1);
var G__34953 = null;
var G__34954 = (0);
var G__34955 = (0);
seq__34666_34917 = G__34952;
chunk__34669_34918 = G__34953;
count__34670_34919 = G__34954;
i__34671_34920 = G__34955;
continue;
} else {
var G__34957 = cljs.core.next(seq__34666_34940__$1);
var G__34958 = null;
var G__34959 = (0);
var G__34960 = (0);
seq__34666_34917 = G__34957;
chunk__34669_34918 = G__34958;
count__34670_34919 = G__34959;
i__34671_34920 = G__34960;
continue;
}
}
} else {
}
}
break;
}


var G__34961 = seq__34632;
var G__34962 = chunk__34634;
var G__34963 = count__34635;
var G__34964 = (i__34636 + (1));
seq__34632 = G__34961;
chunk__34634 = G__34962;
count__34635 = G__34963;
i__34636 = G__34964;
continue;
} else {
var G__34965 = seq__34632;
var G__34966 = chunk__34634;
var G__34967 = count__34635;
var G__34968 = (i__34636 + (1));
seq__34632 = G__34965;
chunk__34634 = G__34966;
count__34635 = G__34967;
i__34636 = G__34968;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34632);
if(temp__5735__auto__){
var seq__34632__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34632__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34632__$1);
var G__34970 = cljs.core.chunk_rest(seq__34632__$1);
var G__34971 = c__4609__auto__;
var G__34972 = cljs.core.count(c__4609__auto__);
var G__34973 = (0);
seq__34632 = G__34970;
chunk__34634 = G__34971;
count__34635 = G__34972;
i__34636 = G__34973;
continue;
} else {
var path = cljs.core.first(seq__34632__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34680_34974 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34683_34975 = null;
var count__34684_34976 = (0);
var i__34685_34977 = (0);
while(true){
if((i__34685_34977 < count__34684_34976)){
var node_34981 = chunk__34683_34975.cljs$core$IIndexed$_nth$arity$2(null,i__34685_34977);
var path_match_34982 = shadow.cljs.devtools.client.browser.match_paths(node_34981.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34982)){
var new_link_34983 = (function (){var G__34691 = node_34981.cloneNode(true);
G__34691.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34982),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34691;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34982], 0));

goog.dom.insertSiblingAfter(new_link_34983,node_34981);

goog.dom.removeNode(node_34981);


var G__34984 = seq__34680_34974;
var G__34985 = chunk__34683_34975;
var G__34986 = count__34684_34976;
var G__34987 = (i__34685_34977 + (1));
seq__34680_34974 = G__34984;
chunk__34683_34975 = G__34985;
count__34684_34976 = G__34986;
i__34685_34977 = G__34987;
continue;
} else {
var G__34989 = seq__34680_34974;
var G__34990 = chunk__34683_34975;
var G__34991 = count__34684_34976;
var G__34992 = (i__34685_34977 + (1));
seq__34680_34974 = G__34989;
chunk__34683_34975 = G__34990;
count__34684_34976 = G__34991;
i__34685_34977 = G__34992;
continue;
}
} else {
var temp__5735__auto___34993__$1 = cljs.core.seq(seq__34680_34974);
if(temp__5735__auto___34993__$1){
var seq__34680_34994__$1 = temp__5735__auto___34993__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34680_34994__$1)){
var c__4609__auto___34995 = cljs.core.chunk_first(seq__34680_34994__$1);
var G__34998 = cljs.core.chunk_rest(seq__34680_34994__$1);
var G__34999 = c__4609__auto___34995;
var G__35000 = cljs.core.count(c__4609__auto___34995);
var G__35001 = (0);
seq__34680_34974 = G__34998;
chunk__34683_34975 = G__34999;
count__34684_34976 = G__35000;
i__34685_34977 = G__35001;
continue;
} else {
var node_35003 = cljs.core.first(seq__34680_34994__$1);
var path_match_35004 = shadow.cljs.devtools.client.browser.match_paths(node_35003.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35004)){
var new_link_35005 = (function (){var G__34693 = node_35003.cloneNode(true);
G__34693.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35004),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34693;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35004], 0));

goog.dom.insertSiblingAfter(new_link_35005,node_35003);

goog.dom.removeNode(node_35003);


var G__35006 = cljs.core.next(seq__34680_34994__$1);
var G__35007 = null;
var G__35008 = (0);
var G__35009 = (0);
seq__34680_34974 = G__35006;
chunk__34683_34975 = G__35007;
count__34684_34976 = G__35008;
i__34685_34977 = G__35009;
continue;
} else {
var G__35010 = cljs.core.next(seq__34680_34994__$1);
var G__35011 = null;
var G__35012 = (0);
var G__35013 = (0);
seq__34680_34974 = G__35010;
chunk__34683_34975 = G__35011;
count__34684_34976 = G__35012;
i__34685_34977 = G__35013;
continue;
}
}
} else {
}
}
break;
}


var G__35014 = cljs.core.next(seq__34632__$1);
var G__35015 = null;
var G__35016 = (0);
var G__35017 = (0);
seq__34632 = G__35014;
chunk__34634 = G__35015;
count__34635 = G__35016;
i__34636 = G__35017;
continue;
} else {
var G__35018 = cljs.core.next(seq__34632__$1);
var G__35019 = null;
var G__35020 = (0);
var G__35021 = (0);
seq__34632 = G__35018;
chunk__34634 = G__35019;
count__34635 = G__35020;
i__34636 = G__35021;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__34700){
var map__34701 = p__34700;
var map__34701__$1 = (((((!((map__34701 == null))))?(((((map__34701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34701):map__34701);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34701__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34701__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__34705,done){
var map__34706 = p__34705;
var map__34706__$1 = (((((!((map__34706 == null))))?(((((map__34706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34706):map__34706);
var msg = map__34706__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34706__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34706__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34706__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34706__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34713){
var map__34714 = p__34713;
var map__34714__$1 = (((((!((map__34714 == null))))?(((((map__34714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34714):map__34714);
var src = map__34714__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34714__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
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
}catch (e34717){var e = e34717;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__34719,done){
var map__34720 = p__34719;
var map__34720__$1 = (((((!((map__34720 == null))))?(((((map__34720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34720):map__34720);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34720__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34720__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__34727){
var map__34728 = p__34727;
var map__34728__$1 = (((((!((map__34728 == null))))?(((((map__34728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34728):map__34728);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34728__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34728__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__34734,done){
var map__34735 = p__34734;
var map__34735__$1 = (((((!((map__34735 == null))))?(((((map__34735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34735):map__34735);
var msg = map__34735__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34735__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__34739_35044 = type;
var G__34739_35045__$1 = (((G__34739_35044 instanceof cljs.core.Keyword))?G__34739_35044.fqn:null);
switch (G__34739_35045__$1) {
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
var G__34744 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__34745 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__34746 = "POST";
var G__34747 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__34748 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__34744,G__34745,G__34746,G__34747,G__34748);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__34754 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__34753 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__34753.cljs$core$IFn$_invoke$arity$1 ? fexpr__34753.cljs$core$IFn$_invoke$arity$1(G__34754) : fexpr__34753.call(null,G__34754));
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
}catch (e34760){var e = e34760;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___35068 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___35068)){
var s_35070 = temp__5735__auto___35068;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_35070.onclose = (function (e){
return null;
}));

s_35070.close();

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
