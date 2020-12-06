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
var len__4789__auto___38949 = arguments.length;
var i__4790__auto___38950 = (0);
while(true){
if((i__4790__auto___38950 < len__4789__auto___38949)){
args__4795__auto__.push((arguments[i__4790__auto___38950]));

var G__38951 = (i__4790__auto___38950 + (1));
i__4790__auto___38950 = G__38951;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38769){
var G__38770 = cljs.core.first(seq38769);
var seq38769__$1 = cljs.core.next(seq38769);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38770,seq38769__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__38773){
var map__38774 = p__38773;
var map__38774__$1 = (((((!((map__38774 == null))))?(((((map__38774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38774):map__38774);
var src = map__38774__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38774__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38774__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__38778 = cljs.core.seq(sources);
var chunk__38779 = null;
var count__38780 = (0);
var i__38781 = (0);
while(true){
if((i__38781 < count__38780)){
var map__38788 = chunk__38779.cljs$core$IIndexed$_nth$arity$2(null,i__38781);
var map__38788__$1 = (((((!((map__38788 == null))))?(((((map__38788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38788):map__38788);
var src = map__38788__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38788__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38788__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38788__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38788__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e38790){var e_38954 = e38790;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38954);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38954.message)].join('')));
}

var G__38955 = seq__38778;
var G__38956 = chunk__38779;
var G__38957 = count__38780;
var G__38958 = (i__38781 + (1));
seq__38778 = G__38955;
chunk__38779 = G__38956;
count__38780 = G__38957;
i__38781 = G__38958;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38778);
if(temp__5735__auto__){
var seq__38778__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38778__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38778__$1);
var G__38960 = cljs.core.chunk_rest(seq__38778__$1);
var G__38961 = c__4609__auto__;
var G__38962 = cljs.core.count(c__4609__auto__);
var G__38963 = (0);
seq__38778 = G__38960;
chunk__38779 = G__38961;
count__38780 = G__38962;
i__38781 = G__38963;
continue;
} else {
var map__38791 = cljs.core.first(seq__38778__$1);
var map__38791__$1 = (((((!((map__38791 == null))))?(((((map__38791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38791):map__38791);
var src = map__38791__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38791__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38791__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38791__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38791__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e38793){var e_38964 = e38793;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38964);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38964.message)].join('')));
}

var G__38965 = cljs.core.next(seq__38778__$1);
var G__38966 = null;
var G__38967 = (0);
var G__38968 = (0);
seq__38778 = G__38965;
chunk__38779 = G__38966;
count__38780 = G__38967;
i__38781 = G__38968;
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
var seq__38794 = cljs.core.seq(js_requires);
var chunk__38795 = null;
var count__38796 = (0);
var i__38797 = (0);
while(true){
if((i__38797 < count__38796)){
var js_ns = chunk__38795.cljs$core$IIndexed$_nth$arity$2(null,i__38797);
var require_str_38970 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38970);


var G__38971 = seq__38794;
var G__38972 = chunk__38795;
var G__38973 = count__38796;
var G__38974 = (i__38797 + (1));
seq__38794 = G__38971;
chunk__38795 = G__38972;
count__38796 = G__38973;
i__38797 = G__38974;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38794);
if(temp__5735__auto__){
var seq__38794__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38794__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38794__$1);
var G__38975 = cljs.core.chunk_rest(seq__38794__$1);
var G__38976 = c__4609__auto__;
var G__38977 = cljs.core.count(c__4609__auto__);
var G__38978 = (0);
seq__38794 = G__38975;
chunk__38795 = G__38976;
count__38796 = G__38977;
i__38797 = G__38978;
continue;
} else {
var js_ns = cljs.core.first(seq__38794__$1);
var require_str_38979 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38979);


var G__38980 = cljs.core.next(seq__38794__$1);
var G__38981 = null;
var G__38982 = (0);
var G__38983 = (0);
seq__38794 = G__38980;
chunk__38795 = G__38981;
count__38796 = G__38982;
i__38797 = G__38983;
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
var G__38798 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__38798) : callback.call(null,G__38798));
} else {
var G__38799 = shadow.cljs.devtools.client.env.files_url();
var G__38800 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__38801 = "POST";
var G__38802 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__38803 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__38799,G__38800,G__38801,G__38802,G__38803);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__38805){
var map__38808 = p__38805;
var map__38808__$1 = (((((!((map__38808 == null))))?(((((map__38808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38808):map__38808);
var msg = map__38808__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38808__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38808__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__38810 = info;
var map__38810__$1 = (((((!((map__38810 == null))))?(((((map__38810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38810):map__38810);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38810__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38810__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38812(s__38813){
return (new cljs.core.LazySeq(null,(function (){
var s__38813__$1 = s__38813;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38813__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__38818 = cljs.core.first(xs__6292__auto__);
var map__38818__$1 = (((((!((map__38818 == null))))?(((((map__38818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38818):map__38818);
var src = map__38818__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38818__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38818__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__38813__$1,map__38818,map__38818__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38810,map__38810__$1,sources,compiled,map__38808,map__38808__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38812_$_iter__38814(s__38815){
return (new cljs.core.LazySeq(null,((function (s__38813__$1,map__38818,map__38818__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38810,map__38810__$1,sources,compiled,map__38808,map__38808__$1,msg,info,reload_info){
return (function (){
var s__38815__$1 = s__38815;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38815__$1);
if(temp__5735__auto____$1){
var s__38815__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38815__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38815__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38817 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38816 = (0);
while(true){
if((i__38816 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38816);
cljs.core.chunk_append(b__38817,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38986 = (i__38816 + (1));
i__38816 = G__38986;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38817),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38812_$_iter__38814(cljs.core.chunk_rest(s__38815__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38817),null);
}
} else {
var warning = cljs.core.first(s__38815__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38812_$_iter__38814(cljs.core.rest(s__38815__$2)));
}
} else {
return null;
}
break;
}
});})(s__38813__$1,map__38818,map__38818__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38810,map__38810__$1,sources,compiled,map__38808,map__38808__$1,msg,info,reload_info))
,null,null));
});})(s__38813__$1,map__38818,map__38818__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38810,map__38810__$1,sources,compiled,map__38808,map__38808__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38812(cljs.core.rest(s__38813__$1)));
} else {
var G__38990 = cljs.core.rest(s__38813__$1);
s__38813__$1 = G__38990;
continue;
}
} else {
var G__38991 = cljs.core.rest(s__38813__$1);
s__38813__$1 = G__38991;
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
var seq__38821_38992 = cljs.core.seq(warnings);
var chunk__38822_38993 = null;
var count__38823_38994 = (0);
var i__38824_38995 = (0);
while(true){
if((i__38824_38995 < count__38823_38994)){
var map__38833_38996 = chunk__38822_38993.cljs$core$IIndexed$_nth$arity$2(null,i__38824_38995);
var map__38833_38997__$1 = (((((!((map__38833_38996 == null))))?(((((map__38833_38996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38833_38996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38833_38996):map__38833_38996);
var w_38998 = map__38833_38997__$1;
var msg_38999__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38833_38997__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38833_38997__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38833_38997__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38833_38997__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39002)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39000),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39001),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38999__$1)].join(''));


var G__39003 = seq__38821_38992;
var G__39004 = chunk__38822_38993;
var G__39005 = count__38823_38994;
var G__39006 = (i__38824_38995 + (1));
seq__38821_38992 = G__39003;
chunk__38822_38993 = G__39004;
count__38823_38994 = G__39005;
i__38824_38995 = G__39006;
continue;
} else {
var temp__5735__auto___39007 = cljs.core.seq(seq__38821_38992);
if(temp__5735__auto___39007){
var seq__38821_39008__$1 = temp__5735__auto___39007;
if(cljs.core.chunked_seq_QMARK_(seq__38821_39008__$1)){
var c__4609__auto___39009 = cljs.core.chunk_first(seq__38821_39008__$1);
var G__39010 = cljs.core.chunk_rest(seq__38821_39008__$1);
var G__39011 = c__4609__auto___39009;
var G__39012 = cljs.core.count(c__4609__auto___39009);
var G__39013 = (0);
seq__38821_38992 = G__39010;
chunk__38822_38993 = G__39011;
count__38823_38994 = G__39012;
i__38824_38995 = G__39013;
continue;
} else {
var map__38836_39014 = cljs.core.first(seq__38821_39008__$1);
var map__38836_39015__$1 = (((((!((map__38836_39014 == null))))?(((((map__38836_39014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38836_39014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38836_39014):map__38836_39014);
var w_39016 = map__38836_39015__$1;
var msg_39017__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38836_39015__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38836_39015__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38836_39015__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38836_39015__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39020)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39018),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39019),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39017__$1)].join(''));


var G__39022 = cljs.core.next(seq__38821_39008__$1);
var G__39023 = null;
var G__39024 = (0);
var G__39025 = (0);
seq__38821_38992 = G__39022;
chunk__38822_38993 = G__39023;
count__38823_38994 = G__39024;
i__38824_38995 = G__39025;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__38838){
var map__38839 = p__38838;
var map__38839__$1 = (((((!((map__38839 == null))))?(((((map__38839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38839):map__38839);
var src = map__38839__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38839__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38839__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38842){
var map__38843 = p__38842;
var map__38843__$1 = (((((!((map__38843 == null))))?(((((map__38843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38843):map__38843);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38843__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__38845){
var map__38846 = p__38845;
var map__38846__$1 = (((((!((map__38846 == null))))?(((((map__38846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38846):map__38846);
var rc = map__38846__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38846__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__38804_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38804_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__38850){
var map__38851 = p__38850;
var map__38851__$1 = (((((!((map__38851 == null))))?(((((map__38851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38851):map__38851);
var msg = map__38851__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38851__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__38853 = cljs.core.seq(updates);
var chunk__38855 = null;
var count__38856 = (0);
var i__38857 = (0);
while(true){
if((i__38857 < count__38856)){
var path = chunk__38855.cljs$core$IIndexed$_nth$arity$2(null,i__38857);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38886_39029 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38889_39030 = null;
var count__38890_39031 = (0);
var i__38891_39032 = (0);
while(true){
if((i__38891_39032 < count__38890_39031)){
var node_39033 = chunk__38889_39030.cljs$core$IIndexed$_nth$arity$2(null,i__38891_39032);
var path_match_39034 = shadow.cljs.devtools.client.browser.match_paths(node_39033.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39034)){
var new_link_39035 = (function (){var G__38897 = node_39033.cloneNode(true);
G__38897.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39034),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38897;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39034], 0));

goog.dom.insertSiblingAfter(new_link_39035,node_39033);

goog.dom.removeNode(node_39033);


var G__39036 = seq__38886_39029;
var G__39037 = chunk__38889_39030;
var G__39038 = count__38890_39031;
var G__39039 = (i__38891_39032 + (1));
seq__38886_39029 = G__39036;
chunk__38889_39030 = G__39037;
count__38890_39031 = G__39038;
i__38891_39032 = G__39039;
continue;
} else {
var G__39040 = seq__38886_39029;
var G__39041 = chunk__38889_39030;
var G__39042 = count__38890_39031;
var G__39043 = (i__38891_39032 + (1));
seq__38886_39029 = G__39040;
chunk__38889_39030 = G__39041;
count__38890_39031 = G__39042;
i__38891_39032 = G__39043;
continue;
}
} else {
var temp__5735__auto___39044 = cljs.core.seq(seq__38886_39029);
if(temp__5735__auto___39044){
var seq__38886_39045__$1 = temp__5735__auto___39044;
if(cljs.core.chunked_seq_QMARK_(seq__38886_39045__$1)){
var c__4609__auto___39046 = cljs.core.chunk_first(seq__38886_39045__$1);
var G__39047 = cljs.core.chunk_rest(seq__38886_39045__$1);
var G__39048 = c__4609__auto___39046;
var G__39049 = cljs.core.count(c__4609__auto___39046);
var G__39050 = (0);
seq__38886_39029 = G__39047;
chunk__38889_39030 = G__39048;
count__38890_39031 = G__39049;
i__38891_39032 = G__39050;
continue;
} else {
var node_39051 = cljs.core.first(seq__38886_39045__$1);
var path_match_39052 = shadow.cljs.devtools.client.browser.match_paths(node_39051.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39052)){
var new_link_39053 = (function (){var G__38898 = node_39051.cloneNode(true);
G__38898.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39052),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38898;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39052], 0));

goog.dom.insertSiblingAfter(new_link_39053,node_39051);

goog.dom.removeNode(node_39051);


var G__39054 = cljs.core.next(seq__38886_39045__$1);
var G__39055 = null;
var G__39056 = (0);
var G__39057 = (0);
seq__38886_39029 = G__39054;
chunk__38889_39030 = G__39055;
count__38890_39031 = G__39056;
i__38891_39032 = G__39057;
continue;
} else {
var G__39058 = cljs.core.next(seq__38886_39045__$1);
var G__39059 = null;
var G__39060 = (0);
var G__39061 = (0);
seq__38886_39029 = G__39058;
chunk__38889_39030 = G__39059;
count__38890_39031 = G__39060;
i__38891_39032 = G__39061;
continue;
}
}
} else {
}
}
break;
}


var G__39062 = seq__38853;
var G__39063 = chunk__38855;
var G__39064 = count__38856;
var G__39065 = (i__38857 + (1));
seq__38853 = G__39062;
chunk__38855 = G__39063;
count__38856 = G__39064;
i__38857 = G__39065;
continue;
} else {
var G__39066 = seq__38853;
var G__39067 = chunk__38855;
var G__39068 = count__38856;
var G__39069 = (i__38857 + (1));
seq__38853 = G__39066;
chunk__38855 = G__39067;
count__38856 = G__39068;
i__38857 = G__39069;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38853);
if(temp__5735__auto__){
var seq__38853__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38853__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38853__$1);
var G__39070 = cljs.core.chunk_rest(seq__38853__$1);
var G__39071 = c__4609__auto__;
var G__39072 = cljs.core.count(c__4609__auto__);
var G__39073 = (0);
seq__38853 = G__39070;
chunk__38855 = G__39071;
count__38856 = G__39072;
i__38857 = G__39073;
continue;
} else {
var path = cljs.core.first(seq__38853__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38900_39074 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38903_39075 = null;
var count__38904_39076 = (0);
var i__38905_39077 = (0);
while(true){
if((i__38905_39077 < count__38904_39076)){
var node_39078 = chunk__38903_39075.cljs$core$IIndexed$_nth$arity$2(null,i__38905_39077);
var path_match_39079 = shadow.cljs.devtools.client.browser.match_paths(node_39078.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39079)){
var new_link_39080 = (function (){var G__38911 = node_39078.cloneNode(true);
G__38911.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39079),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38911;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39079], 0));

goog.dom.insertSiblingAfter(new_link_39080,node_39078);

goog.dom.removeNode(node_39078);


var G__39081 = seq__38900_39074;
var G__39082 = chunk__38903_39075;
var G__39083 = count__38904_39076;
var G__39084 = (i__38905_39077 + (1));
seq__38900_39074 = G__39081;
chunk__38903_39075 = G__39082;
count__38904_39076 = G__39083;
i__38905_39077 = G__39084;
continue;
} else {
var G__39085 = seq__38900_39074;
var G__39086 = chunk__38903_39075;
var G__39087 = count__38904_39076;
var G__39088 = (i__38905_39077 + (1));
seq__38900_39074 = G__39085;
chunk__38903_39075 = G__39086;
count__38904_39076 = G__39087;
i__38905_39077 = G__39088;
continue;
}
} else {
var temp__5735__auto___39089__$1 = cljs.core.seq(seq__38900_39074);
if(temp__5735__auto___39089__$1){
var seq__38900_39090__$1 = temp__5735__auto___39089__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38900_39090__$1)){
var c__4609__auto___39091 = cljs.core.chunk_first(seq__38900_39090__$1);
var G__39092 = cljs.core.chunk_rest(seq__38900_39090__$1);
var G__39093 = c__4609__auto___39091;
var G__39094 = cljs.core.count(c__4609__auto___39091);
var G__39095 = (0);
seq__38900_39074 = G__39092;
chunk__38903_39075 = G__39093;
count__38904_39076 = G__39094;
i__38905_39077 = G__39095;
continue;
} else {
var node_39096 = cljs.core.first(seq__38900_39090__$1);
var path_match_39097 = shadow.cljs.devtools.client.browser.match_paths(node_39096.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39097)){
var new_link_39098 = (function (){var G__38912 = node_39096.cloneNode(true);
G__38912.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39097),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38912;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39097], 0));

goog.dom.insertSiblingAfter(new_link_39098,node_39096);

goog.dom.removeNode(node_39096);


var G__39099 = cljs.core.next(seq__38900_39090__$1);
var G__39100 = null;
var G__39101 = (0);
var G__39102 = (0);
seq__38900_39074 = G__39099;
chunk__38903_39075 = G__39100;
count__38904_39076 = G__39101;
i__38905_39077 = G__39102;
continue;
} else {
var G__39103 = cljs.core.next(seq__38900_39090__$1);
var G__39104 = null;
var G__39105 = (0);
var G__39106 = (0);
seq__38900_39074 = G__39103;
chunk__38903_39075 = G__39104;
count__38904_39076 = G__39105;
i__38905_39077 = G__39106;
continue;
}
}
} else {
}
}
break;
}


var G__39107 = cljs.core.next(seq__38853__$1);
var G__39108 = null;
var G__39109 = (0);
var G__39110 = (0);
seq__38853 = G__39107;
chunk__38855 = G__39108;
count__38856 = G__39109;
i__38857 = G__39110;
continue;
} else {
var G__39111 = cljs.core.next(seq__38853__$1);
var G__39112 = null;
var G__39113 = (0);
var G__39114 = (0);
seq__38853 = G__39111;
chunk__38855 = G__39112;
count__38856 = G__39113;
i__38857 = G__39114;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__38915){
var map__38916 = p__38915;
var map__38916__$1 = (((((!((map__38916 == null))))?(((((map__38916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38916):map__38916);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38916__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38916__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__38918,done){
var map__38919 = p__38918;
var map__38919__$1 = (((((!((map__38919 == null))))?(((((map__38919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38919):map__38919);
var msg = map__38919__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38919__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38919__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38919__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38919__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38922){
var map__38923 = p__38922;
var map__38923__$1 = (((((!((map__38923 == null))))?(((((map__38923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38923):map__38923);
var src = map__38923__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38923__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
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
}catch (e38925){var e = e38925;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__38927,done){
var map__38928 = p__38927;
var map__38928__$1 = (((((!((map__38928 == null))))?(((((map__38928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38928):map__38928);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38928__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38928__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__38930){
var map__38931 = p__38930;
var map__38931__$1 = (((((!((map__38931 == null))))?(((((map__38931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38931):map__38931);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38931__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38931__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__38934,done){
var map__38935 = p__38934;
var map__38935__$1 = (((((!((map__38935 == null))))?(((((map__38935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38935):map__38935);
var msg = map__38935__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38935__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__38937_39123 = type;
var G__38937_39124__$1 = (((G__38937_39123 instanceof cljs.core.Keyword))?G__38937_39123.fqn:null);
switch (G__38937_39124__$1) {
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
var G__38939 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__38940 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__38941 = "POST";
var G__38942 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__38943 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__38939,G__38940,G__38941,G__38942,G__38943);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__38946 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__38945 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__38945.cljs$core$IFn$_invoke$arity$1 ? fexpr__38945.cljs$core$IFn$_invoke$arity$1(G__38946) : fexpr__38945.call(null,G__38946));
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
}catch (e38948){var e = e38948;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___39128 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___39128)){
var s_39129 = temp__5735__auto___39128;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_39129.onclose = (function (e){
return null;
}));

s_39129.close();

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
