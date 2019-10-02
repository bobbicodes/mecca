// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.repl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.object');
goog.require('goog.storage.mechanism.mechanismfactory');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('goog.net.XhrIo');
goog.require('goog.log');
goog.require('goog.array');
goog.require('goog.json');
goog.require('goog.html.legacyconversions');
goog.require('goog.userAgent.product');
goog.require('goog.net.WebSocket');
goog.require('goog.debug.Console');
goog.require('goog.Uri.QueryData');
goog.require('goog.Promise');
goog.require('goog.storage.mechanism.HTML5SessionStorage');
figwheel.repl.default_port = (9500);
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.logger !== 'undefined')){
} else {
figwheel.repl.logger = goog.log.getLogger("Figwheel REPL");
}

figwheel.repl.console_logging = (function figwheel$repl$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_25195 = (new goog.debug.Console());
var G__25112_25196 = c_25195.getFormatter();
goog.object.set(G__25112_25196,"showAbsoluteTime",false);

goog.object.set(G__25112_25196,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_25195);

}

var temp__5457__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5457__auto__)){
var console_instance = temp__5457__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.repl.console_logging', figwheel.repl.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.log_console !== 'undefined')){
} else {
figwheel.repl.log_console = figwheel.repl.console_logging.call(null);
}

figwheel.repl.debug = (function figwheel$repl$debug(msg){
return goog.log.log(figwheel.repl.logger,goog.debug.Logger.Level.FINEST,msg);
});


figwheel.repl.unprovide_BANG_ = (function figwheel$repl$unprovide_BANG_(ns){
var path = goog.object.get(goog.dependencies_.nameToPath,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});

figwheel.repl.figwheel_require = (function figwheel$repl$figwheel_require(src,reload){
goog.require = figwheel.repl.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
goog.cljsReloadAll_ = true;
} else {
}

if(cljs.core.truth_((function (){var or__3949__auto__ = reload;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.cljsReloadAll_;
}
})())){
figwheel.repl.unprovide_BANG_.call(null,src);
} else {
}

var res = goog.require_figwheel_backup_(src);
if(cljs.core._EQ_.call(null,reload,"reload-all")){
goog.cljsReloadAll_ = false;
} else {
}

return res;
});

/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.repl.bootstrap_goog_base = (function figwheel$repl$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
if(cljs.core.truth_(goog.require_figwheel_backup_)){
} else {
goog.require_figwheel_backup_ = (function (){var or__3949__auto__ = goog.require__;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.require;
}
})();
}

goog.isProvided_ = (function (name){
return false;
});

if((((typeof cljs !== 'undefined')) && ((typeof cljs !== 'undefined') && (typeof cljs.user !== 'undefined')))){
} else {
goog.constructNamespace_("cljs.user");
}

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.repl.queued_file_reload;

return goog.require = figwheel.repl.figwheel_require;
}
});

figwheel.repl.patch_goog_base = (function figwheel$repl$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.repl.bootstrapped_cljs = (function (){
figwheel.repl.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});

figwheel.repl.add_cache_buster = (function figwheel$repl$add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});

figwheel.repl.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__25100_SHARP_,p2__25101_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25100_SHARP_)].join('')),p2__25101_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__25102_SHARP_,p2__25103_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25102_SHARP_)].join(''),p2__25103_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));

figwheel.repl.reload_file_in_html_env = (function figwheel$repl$reload_file_in_html_env(request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if(!((callback == null))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

var G__25113 = figwheel.repl.gloader.call(null,figwheel.repl.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__25113.addCallback(((function (G__25113){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__25113))
);

G__25113.addErrback(((function (G__25113){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__25113))
);

return G__25113;
});

figwheel.repl.write_script_tag_import = figwheel.repl.reload_file_in_html_env;
goog.exportSymbol('figwheel.repl.write_script_tag_import', figwheel.repl.write_script_tag_import);

figwheel.repl.worker_import_script = (function figwheel$repl$worker_import_script(request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if(!((callback == null))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

return callback.call(null,(function (){try{self.importScripts(figwheel.repl.add_cache_buster.call(null,request_url));

return true;
}catch (e25114){if((e25114 instanceof Error)){
var e = e25114;
goog.log.error(figwheel.repl.logger,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

goog.log.error(figwheel.repl.logger,e);

return false;
} else {
throw e25114;

}
}})());
});
goog.exportSymbol('figwheel.repl.worker_import_script', figwheel.repl.worker_import_script);

figwheel.repl.create_node_script_import_fn = (function figwheel$repl$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(!((callback == null))),"\n","(string? request-url)"].join('')));
}

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25115){if((e25115 instanceof Error)){
var e = e25115;
goog.log.error(figwheel.repl.logger,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

goog.log.error(figwheel.repl.logger,e);

return false;
} else {
throw e25115;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.repl.create_node_script_import_fn', figwheel.repl.create_node_script_import_fn);

figwheel.repl.host_env = ((!((goog.nodeGlobalRequire == null)))?new cljs.core.Keyword(null,"node","node",581201198):((!((goog.global.document == null)))?new cljs.core.Keyword(null,"html","html",-998796897):(((((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.navigator !== 'undefined')) && (cljs.core._EQ_.call(null,goog.global.navigator.product,"ReactNative"))))?new cljs.core.Keyword(null,"react-native","react-native",-1543085138):(((((goog.global.document == null)) && ((typeof self !== 'undefined')) && (!((self.importScripts == null)))))?new cljs.core.Keyword(null,"worker","worker",938239996):null))));

figwheel.repl.reload_file_STAR_ = (function (){var pred__25116 = cljs.core._EQ_;
var expr__25117 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__25116.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25117))){
return figwheel.repl.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__25116.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25117))){
return figwheel.repl.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__25116.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__25117))){
return figwheel.repl.worker_import_script;
} else {
return ((function (pred__25116,expr__25117){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25116,expr__25117))
}
}
}
})();

figwheel.repl.reload_file = (function figwheel$repl$reload_file(p__25119,callback){
var map__25120 = p__25119;
var map__25120__$1 = ((((!((map__25120 == null)))?(((((map__25120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25120):map__25120);
var file_msg = map__25120__$1;
var request_url = cljs.core.get.call(null,map__25120__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if(!((callback == null))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

goog.log.fine(figwheel.repl.logger,["Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.repl.reload_file_STAR_;
}
})().call(null,request_url,((function (map__25120,map__25120__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
goog.log.fine(figwheel.repl.logger,["Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
goog.log.error(figwheel.repl.logger,["Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25120,map__25120__$1,file_msg,request_url))
);
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.reload_promise_chain !== 'undefined')){
} else {
figwheel.repl.reload_promise_chain = cljs.core.atom.call(null,(new goog.Promise((function (p1__25104_SHARP_){
return p1__25104_SHARP_.call(null,true);
}))));
}

figwheel.repl.queued_file_reload = (function figwheel$repl$queued_file_reload(var_args){
var G__25123 = arguments.length;
switch (G__25123) {
case 1:
return figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.repl.queued_file_reload.call(null,url,null);
});

figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
var temp__5457__auto__ = (cljs.core.truth_(opt_source_text)?(function (p1__25105_SHARP_){
return p1__25105_SHARP_.then((function (_){
return (new goog.Promise((function (r,___$1){
try{eval(opt_source_text);
}catch (e25124){if((e25124 instanceof Error)){
var e_25198 = e25124;
goog.log.error(figwheel.repl.logger,e_25198);
} else {
throw e25124;

}
}
return r.call(null,true);
})));
}));
}):(cljs.core.truth_(url)?(function (p1__25106_SHARP_){
return p1__25106_SHARP_.then((function (_){
return (new goog.Promise((function (r,___$1){
return figwheel.repl.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
return r.call(null,true);
}));
})));
}));
}):null));
if(cljs.core.truth_(temp__5457__auto__)){
var next_promise_fn = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.repl.reload_promise_chain,next_promise_fn);
} else {
return null;
}
});

figwheel.repl.queued_file_reload.cljs$lang$maxFixedArity = 2;


figwheel.repl.after_reloads = (function figwheel$repl$after_reloads(f){
return cljs.core.swap_BANG_.call(null,figwheel.repl.reload_promise_chain,(function (p1__25107_SHARP_){
return p1__25107_SHARP_.then(f);
}));
});
goog.exportSymbol('figwheel.repl.after_reloads', figwheel.repl.after_reloads);


/** @define {string} */
goog.define("figwheel.repl.print_output","console,repl");

figwheel.repl.print_receivers = (function figwheel$repl$print_receivers(outputs){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.filter.call(null,cljs.core.complement.call(null,clojure.string.blank_QMARK_),cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,outputs,/,/)))));
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.out_print !== 'undefined')){
} else {
figwheel.repl.out_print = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","out-print"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (k,args){
return k;
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.out_print,new cljs.core.Keyword(null,"console","console",1228072057),(function (_,args){
return console.log.apply(console,goog.array.clone(cljs.core.to_array.call(null,args)));
}));

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.err_print !== 'undefined')){
} else {
figwheel.repl.err_print = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","err-print"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (k,args){
return k;
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.err_print,new cljs.core.Keyword(null,"console","console",1228072057),(function (_,args){
return console.error.apply(console,goog.array.clone(cljs.core.to_array.call(null,args)));
}));

figwheel.repl.setup_printing_BANG_ = (function figwheel$repl$setup_printing_BANG_(){
var printers = figwheel.repl.print_receivers.call(null,figwheel.repl.print_output);
cljs.core.set_print_fn_BANG_.call(null,((function (printers){
return (function() { 
var G__25199__delegate = function (args){
var seq__25125 = cljs.core.seq.call(null,printers);
var chunk__25126 = null;
var count__25127 = (0);
var i__25128 = (0);
while(true){
if((i__25128 < count__25127)){
var p = cljs.core._nth.call(null,chunk__25126,i__25128);
figwheel.repl.out_print.call(null,p,args);


var G__25200 = seq__25125;
var G__25201 = chunk__25126;
var G__25202 = count__25127;
var G__25203 = (i__25128 + (1));
seq__25125 = G__25200;
chunk__25126 = G__25201;
count__25127 = G__25202;
i__25128 = G__25203;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25125);
if(temp__5457__auto__){
var seq__25125__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25125__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__25125__$1);
var G__25204 = cljs.core.chunk_rest.call(null,seq__25125__$1);
var G__25205 = c__4351__auto__;
var G__25206 = cljs.core.count.call(null,c__4351__auto__);
var G__25207 = (0);
seq__25125 = G__25204;
chunk__25126 = G__25205;
count__25127 = G__25206;
i__25128 = G__25207;
continue;
} else {
var p = cljs.core.first.call(null,seq__25125__$1);
figwheel.repl.out_print.call(null,p,args);


var G__25208 = cljs.core.next.call(null,seq__25125__$1);
var G__25209 = null;
var G__25210 = (0);
var G__25211 = (0);
seq__25125 = G__25208;
chunk__25126 = G__25209;
count__25127 = G__25210;
i__25128 = G__25211;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__25199 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25212__i = 0, G__25212__a = new Array(arguments.length -  0);
while (G__25212__i < G__25212__a.length) {G__25212__a[G__25212__i] = arguments[G__25212__i + 0]; ++G__25212__i;}
  args = new cljs.core.IndexedSeq(G__25212__a,0,null);
} 
return G__25199__delegate.call(this,args);};
G__25199.cljs$lang$maxFixedArity = 0;
G__25199.cljs$lang$applyTo = (function (arglist__25213){
var args = cljs.core.seq(arglist__25213);
return G__25199__delegate(args);
});
G__25199.cljs$core$IFn$_invoke$arity$variadic = G__25199__delegate;
return G__25199;
})()
;})(printers))
);

return cljs.core.set_print_err_fn_BANG_.call(null,((function (printers){
return (function() { 
var G__25214__delegate = function (args){
var seq__25129 = cljs.core.seq.call(null,printers);
var chunk__25130 = null;
var count__25131 = (0);
var i__25132 = (0);
while(true){
if((i__25132 < count__25131)){
var p = cljs.core._nth.call(null,chunk__25130,i__25132);
figwheel.repl.err_print.call(null,p,args);


var G__25215 = seq__25129;
var G__25216 = chunk__25130;
var G__25217 = count__25131;
var G__25218 = (i__25132 + (1));
seq__25129 = G__25215;
chunk__25130 = G__25216;
count__25131 = G__25217;
i__25132 = G__25218;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25129);
if(temp__5457__auto__){
var seq__25129__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25129__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__25129__$1);
var G__25219 = cljs.core.chunk_rest.call(null,seq__25129__$1);
var G__25220 = c__4351__auto__;
var G__25221 = cljs.core.count.call(null,c__4351__auto__);
var G__25222 = (0);
seq__25129 = G__25219;
chunk__25130 = G__25220;
count__25131 = G__25221;
i__25132 = G__25222;
continue;
} else {
var p = cljs.core.first.call(null,seq__25129__$1);
figwheel.repl.err_print.call(null,p,args);


var G__25223 = cljs.core.next.call(null,seq__25129__$1);
var G__25224 = null;
var G__25225 = (0);
var G__25226 = (0);
seq__25129 = G__25223;
chunk__25130 = G__25224;
count__25131 = G__25225;
i__25132 = G__25226;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__25214 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25227__i = 0, G__25227__a = new Array(arguments.length -  0);
while (G__25227__i < G__25227__a.length) {G__25227__a[G__25227__i] = arguments[G__25227__i + 0]; ++G__25227__i;}
  args = new cljs.core.IndexedSeq(G__25227__a,0,null);
} 
return G__25214__delegate.call(this,args);};
G__25214.cljs$lang$maxFixedArity = 0;
G__25214.cljs$lang$applyTo = (function (arglist__25228){
var args = cljs.core.seq(arglist__25228);
return G__25214__delegate(args);
});
G__25214.cljs$core$IFn$_invoke$arity$variadic = G__25214__delegate;
return G__25214;
})()
;})(printers))
);
});


/** @define {string} */
goog.define("figwheel.repl.connect_url","ws://[[client-hostname]]:[[client-port]]/figwheel-connect");

figwheel.repl.state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);

figwheel.repl.storage = goog.storage.mechanism.mechanismfactory.createHTML5SessionStorage("figwheel.repl");

figwheel.repl.set_state = (function figwheel$repl$set_state(k,v){
cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,k,v);

if(cljs.core.truth_(figwheel.repl.storage)){
return figwheel.repl.storage.set([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),v);
} else {
return null;
}
});

figwheel.repl.get_state = (function figwheel$repl$get_state(k){
if(cljs.core.truth_(figwheel.repl.storage)){
return figwheel.repl.storage.get([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.repl.state),k);
}
});

figwheel.repl.session_name = (function figwheel$repl$session_name(){
return figwheel.repl.get_state.call(null,new cljs.core.Keyword("figwheel.repl","session-name","figwheel.repl/session-name",2102143102));
});
goog.exportSymbol('figwheel.repl.session_name', figwheel.repl.session_name);

figwheel.repl.session_id = (function figwheel$repl$session_id(){
return figwheel.repl.get_state.call(null,new cljs.core.Keyword("figwheel.repl","session-id","figwheel.repl/session-id",594324955));
});
goog.exportSymbol('figwheel.repl.session_id', figwheel.repl.session_id);

figwheel.repl.response_for = (function figwheel$repl$response_for(p__25133,response_body){
var map__25134 = p__25133;
var map__25134__$1 = ((((!((map__25134 == null)))?(((((map__25134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25134):map__25134);
var uuid = cljs.core.get.call(null,map__25134__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var G__25136 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351),figwheel.repl.session_id.call(null),new cljs.core.Keyword(null,"session-name","session-name",-167167576),figwheel.repl.session_name.call(null),new cljs.core.Keyword(null,"response","response",-1068424192),response_body], null);
if(cljs.core.truth_(uuid)){
return cljs.core.assoc.call(null,G__25136,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),uuid);
} else {
return G__25136;
}
});

figwheel.repl.http_post = (function (){var pred__25137 = cljs.core._EQ_;
var expr__25138 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__25137.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25138))){
var http = require("http");
return ((function (http,pred__25137,expr__25138){
return (function (url,post_data){
var data = cljs.core.volatile_BANG_.call(null,"");
var uri = goog.Uri.parse([cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''));
var G__25140 = http.request(({"host": uri.getDomain(), "port": uri.getPort(), "path": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri.getPath()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = uri.getQuery();
if(cljs.core.truth_(temp__5457__auto__)){
var q = temp__5457__auto__;
return ["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)].join('');
} else {
return null;
}
})())].join(''), "method": "POST", "headers": ({"Content-Length": Buffer.byteLength(post_data)})}),((function (data,uri,http,pred__25137,expr__25138){
return (function (x){
return null;
});})(data,uri,http,pred__25137,expr__25138))
).on("error",((function (data,uri,http,pred__25137,expr__25138){
return (function (p1__25108_SHARP_){
return console.error(p1__25108_SHARP_);
});})(data,uri,http,pred__25137,expr__25138))
);
G__25140.write(post_data);

G__25140.end();

return G__25140;
});
;})(http,pred__25137,expr__25138))
} else {
return ((function (pred__25137,expr__25138){
return (function (url,response){
return goog.net.XhrIo.send(url,((function (pred__25137,expr__25138){
return (function (e){
return figwheel.repl.debug.call(null,"Response Posted");
});})(pred__25137,expr__25138))
,"POST",response);
});
;})(pred__25137,expr__25138))
}
})();

figwheel.repl.respond_to = (function figwheel$repl$respond_to(p__25141,response_body){
var map__25142 = p__25141;
var map__25142__$1 = ((((!((map__25142 == null)))?(((((map__25142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25142):map__25142);
var old_msg = map__25142__$1;
var websocket = cljs.core.get.call(null,map__25142__$1,new cljs.core.Keyword(null,"websocket","websocket",-1714963101));
var http_url = cljs.core.get.call(null,map__25142__$1,new cljs.core.Keyword(null,"http-url","http-url",-2043776269));
var response = figwheel.repl.response_for.call(null,old_msg,response_body);
if(cljs.core.truth_(websocket)){
return websocket.send(cljs.core.pr_str.call(null,response));
} else {
if(cljs.core.truth_(http_url)){
return figwheel.repl.http_post.call(null,http_url,cljs.core.pr_str.call(null,response));
} else {
return null;
}
}
});

figwheel.repl.respond_to_connection = (function figwheel$repl$respond_to_connection(response_body){
return figwheel.repl.respond_to.call(null,new cljs.core.Keyword(null,"connection","connection",-123599300).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.repl.state)),response_body);
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.message !== 'undefined')){
} else {
figwheel.repl.message = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","message"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.message,"naming",(function (msg){
var temp__5457__auto___25229 = new cljs.core.Keyword(null,"session-name","session-name",-167167576).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(temp__5457__auto___25229)){
var sn_25230 = temp__5457__auto___25229;
figwheel.repl.set_state.call(null,new cljs.core.Keyword("figwheel.repl","session-name","figwheel.repl/session-name",2102143102),sn_25230);
} else {
}

var temp__5457__auto___25231 = new cljs.core.Keyword(null,"session-id","session-id",-1147060351).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(temp__5457__auto___25231)){
var sid_25232 = temp__5457__auto___25231;
figwheel.repl.set_state.call(null,new cljs.core.Keyword("figwheel.repl","session-id","figwheel.repl/session-id",594324955),sid_25232);
} else {
}

goog.log.info(figwheel.repl.logger,["Session ID: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.session_id.call(null))].join(''));

return goog.log.info(figwheel.repl.logger,["Session Name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.session_name.call(null))].join(''));
}));

cljs.core._add_method.call(null,figwheel.repl.message,"ping",(function (msg){
return figwheel.repl.respond_to.call(null,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pong","pong",-172484958),true], null));
}));

figwheel.repl.get_ua_product = (function figwheel$repl$get_ua_product(){
if(!((goog.nodeGlobalRequire == null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
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
}
});

var print_to_console_QMARK__25233 = figwheel.repl.print_receivers.call(null,figwheel.repl.print_output).call(null,new cljs.core.Keyword(null,"console","console",1228072057));
figwheel.repl.eval_javascript_STAR__STAR_ = ((function (print_to_console_QMARK__25233){
return (function figwheel$repl$eval_javascript_STAR__STAR_(code){
var ua_product = figwheel.repl.get_ua_product.call(null);
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_25145 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_25146 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_25145,_STAR_print_fn_STAR_25146,sb,ua_product,print_to_console_QMARK__25233){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_25145,_STAR_print_fn_STAR_25146,sb,ua_product,print_to_console_QMARK__25233))
;

try{var result_value = eval(code);
var result_value__$1 = ((!(typeof result_value === 'string'))?(function (){try{return cljs.core.pr_str.call(null,result_value);
}catch (e25147){if((e25147 instanceof Error)){
var e = e25147;
return null;
} else {
throw e25147;

}
}})():result_value);
var output_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
if(cljs.core.truth_((function (){var and__3938__auto__ = print_to_console_QMARK__25233;
if(cljs.core.truth_(and__3938__auto__)){
return !((sb.getLength() === (0)));
} else {
return and__3938__auto__;
}
})())){
setTimeout(((function (result_value,result_value__$1,output_str,_STAR_print_newline_STAR_25145,_STAR_print_fn_STAR_25146,sb,ua_product,print_to_console_QMARK__25233){
return (function (){
return figwheel.repl.out_print.call(null,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [output_str], null));
});})(result_value,result_value__$1,output_str,_STAR_print_newline_STAR_25145,_STAR_print_fn_STAR_25146,sb,ua_product,print_to_console_QMARK__25233))
,(0));
} else {
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),output_str,new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25146;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25145;
}}catch (e25144){if((e25144 instanceof Error)){
var e = e25144;
if((((typeof console !== 'undefined')) && ((typeof console !== 'undefined') && (typeof console.error !== 'undefined')))){
console.error("REPL eval error",e);
} else {
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),e.stack], null);
} else {
var e = e25144;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null);

}
}});})(print_to_console_QMARK__25233))
;

cljs.core._add_method.call(null,figwheel.repl.message,"eval",(function (p__25148){
var map__25149 = p__25148;
var map__25149__$1 = ((((!((map__25149 == null)))?(((((map__25149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25149):map__25149);
var msg = map__25149__$1;
var code = cljs.core.get.call(null,map__25149__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var result = figwheel.repl.eval_javascript_STAR__STAR_.call(null,code);
return figwheel.repl.respond_to.call(null,msg,result);
}));

cljs.core._add_method.call(null,figwheel.repl.message,"messages",(function (p__25151){
var map__25152 = p__25151;
var map__25152__$1 = ((((!((map__25152 == null)))?(((((map__25152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25152):map__25152);
var messages = cljs.core.get.call(null,map__25152__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var http_url = cljs.core.get.call(null,map__25152__$1,new cljs.core.Keyword(null,"http-url","http-url",-2043776269));
var seq__25154 = cljs.core.seq.call(null,messages);
var chunk__25155 = null;
var count__25156 = (0);
var i__25157 = (0);
while(true){
if((i__25157 < count__25156)){
var msg = cljs.core._nth.call(null,chunk__25155,i__25157);
figwheel.repl.message.call(null,(function (){var G__25158 = cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core.truth_(http_url)){
return cljs.core.assoc.call(null,G__25158,new cljs.core.Keyword(null,"http-url","http-url",-2043776269),http_url);
} else {
return G__25158;
}
})());


var G__25234 = seq__25154;
var G__25235 = chunk__25155;
var G__25236 = count__25156;
var G__25237 = (i__25157 + (1));
seq__25154 = G__25234;
chunk__25155 = G__25235;
count__25156 = G__25236;
i__25157 = G__25237;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25154);
if(temp__5457__auto__){
var seq__25154__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25154__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__25154__$1);
var G__25238 = cljs.core.chunk_rest.call(null,seq__25154__$1);
var G__25239 = c__4351__auto__;
var G__25240 = cljs.core.count.call(null,c__4351__auto__);
var G__25241 = (0);
seq__25154 = G__25238;
chunk__25155 = G__25239;
count__25156 = G__25240;
i__25157 = G__25241;
continue;
} else {
var msg = cljs.core.first.call(null,seq__25154__$1);
figwheel.repl.message.call(null,(function (){var G__25159 = cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core.truth_(http_url)){
return cljs.core.assoc.call(null,G__25159,new cljs.core.Keyword(null,"http-url","http-url",-2043776269),http_url);
} else {
return G__25159;
}
})());


var G__25242 = cljs.core.next.call(null,seq__25154__$1);
var G__25243 = null;
var G__25244 = (0);
var G__25245 = (0);
seq__25154 = G__25242;
chunk__25155 = G__25243;
count__25156 = G__25244;
i__25157 = G__25245;
continue;
}
} else {
return null;
}
}
break;
}
}));

figwheel.repl.fill_url_template = (function figwheel$repl$fill_url_template(connect_url_SINGLEQUOTE_){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
return clojure.string.replace.call(null,clojure.string.replace.call(null,connect_url_SINGLEQUOTE_,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
} else {
return connect_url_SINGLEQUOTE_;
}
});

figwheel.repl.make_url = (function figwheel$repl$make_url(connect_url_SINGLEQUOTE_){
var uri = goog.Uri.parse(figwheel.repl.fill_url_template.call(null,(function (){var or__3949__auto__ = connect_url_SINGLEQUOTE_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.repl.connect_url;
}
})()));
var domain = uri.getDomain();
if(clojure.string.ends_with_QMARK_.call(null,domain,":")){
uri.setDomain(cljs.core.subs.call(null,domain,(0),(cljs.core.count.call(null,domain) - (1))));
} else {
}

var G__25160_25246 = uri.getQueryData().add("fwsid",(function (){var or__3949__auto__ = figwheel.repl.session_id.call(null);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.random_uuid.call(null);
}
})());
if(cljs.core.truth_(figwheel.repl.session_name.call(null))){
G__25160_25246.add("fwsname",figwheel.repl.session_name.call(null));
} else {
}

return uri;
});

figwheel.repl.exponential_backoff = (function figwheel$repl$exponential_backoff(attempt){
return ((1000) * (function (){var x__4040__auto__ = Math.pow((2),attempt);
var y__4041__auto__ = (20);
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})());
});

figwheel.repl.hook_repl_printing_output_BANG_ = (function figwheel$repl$hook_repl_printing_output_BANG_(respond_msg){
cljs.core._add_method.call(null,figwheel.repl.out_print,new cljs.core.Keyword(null,"repl","repl",-35398667),(function (_,args){
return figwheel.repl.respond_to.call(null,respond_msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"output","output",-1105869043),true,new cljs.core.Keyword(null,"stream","stream",1534941648),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__25109_SHARP_){
if(typeof p1__25109_SHARP_ === 'string'){
return p1__25109_SHARP_;
} else {
return goog.json.serialize(p1__25109_SHARP_);
}
}),args)], null));
}));

cljs.core._add_method.call(null,figwheel.repl.err_print,new cljs.core.Keyword(null,"repl","repl",-35398667),(function (_,args){
return figwheel.repl.respond_to.call(null,respond_msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"output","output",-1105869043),true,new cljs.core.Keyword(null,"stream","stream",1534941648),new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__25110_SHARP_){
if(typeof p1__25110_SHARP_ === 'string'){
return p1__25110_SHARP_;
} else {
return goog.json.serialize(p1__25110_SHARP_);
}
}),args)], null));
}));

return figwheel.repl.setup_printing_BANG_.call(null);
});

figwheel.repl.connection_established_BANG_ = (function figwheel$repl$connection_established_BANG_(url){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
var target = goog.global.document.body;
return target.dispatchEvent((function (){var G__25161 = (new Event("figwheel.repl.connected",target));
goog.object.add(G__25161,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null));

return G__25161;
})());
} else {
return null;
}
});

figwheel.repl.connection_closed_BANG_ = (function figwheel$repl$connection_closed_BANG_(url){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
var target = goog.global.document.body;
return target.dispatchEvent((function (){var G__25162 = (new Event("figwheel.repl.disconnected",target));
goog.object.add(G__25162,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null));

return G__25162;
})());
} else {
return null;
}
});

figwheel.repl.get_websocket_class = (function figwheel$repl$get_websocket_class(){
var or__3949__auto__ = goog.object.get(goog.global,"WebSocket");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.object.get(goog.global,"FIGWHEEL_WEBSOCKET_CLASS");
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = (function (){var and__3938__auto__ = cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198));
if(and__3938__auto__){
try{return require("ws");
}catch (e25166){if((e25166 instanceof Error)){
var e = e25166;
return null;
} else {
throw e25166;

}
}} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
var and__3938__auto__ = cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"worker","worker",938239996));
if(and__3938__auto__){
return goog.object.get(self,"WebSocket");
} else {
return and__3938__auto__;
}
}
}
}
});

figwheel.repl.ensure_websocket = (function figwheel$repl$ensure_websocket(thunk){
if(cljs.core.truth_(goog.object.get(goog.global,"WebSocket"))){
return thunk.call(null);
} else {
var temp__5455__auto__ = figwheel.repl.get_websocket_class.call(null);
if(cljs.core.truth_(temp__5455__auto__)){
var websocket_class = temp__5455__auto__;
goog.object.set(goog.global,"WebSocket",websocket_class);

thunk.call(null);

return goog.object.set(goog.global,"WebSocket",null);
} else {
return goog.log.error(figwheel.repl.logger,((cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198)))?"Can't connect!! Please make sure ws is installed\n do -> 'npm install ws'":"Can't connect!! This client doesn't support WebSockets"));
}
}
});

figwheel.repl.ws_connect = (function figwheel$repl$ws_connect(var_args){
var args__4534__auto__ = [];
var len__4531__auto___25247 = arguments.length;
var i__4532__auto___25248 = (0);
while(true){
if((i__4532__auto___25248 < len__4531__auto___25247)){
args__4534__auto__.push((arguments[i__4532__auto___25248]));

var G__25249 = (i__4532__auto___25248 + (1));
i__4532__auto___25248 = G__25249;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.repl.ws_connect.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.repl.ws_connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__25168){
var vec__25169 = p__25168;
var websocket_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__25169,(0),null);
return figwheel.repl.ensure_websocket.call(null,((function (vec__25169,websocket_url_SINGLEQUOTE_){
return (function (){
var websocket = (new goog.net.WebSocket());
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.make_url.call(null,websocket_url_SINGLEQUOTE_))].join('');
var G__25172 = websocket;
G__25172.addEventListener(goog.net.WebSocket.EventType.MESSAGE,((function (G__25172,websocket,url,vec__25169,websocket_url_SINGLEQUOTE_){
return (function (e){
var temp__5457__auto__ = goog.object.get(e,"message");
if(cljs.core.truth_(temp__5457__auto__)){
var msg = temp__5457__auto__;
try{figwheel.repl.debug.call(null,msg);

return figwheel.repl.message.call(null,cljs.core.assoc.call(null,cljs.core.js__GT_clj.call(null,JSON.parse(msg),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket));
}catch (e25173){if((e25173 instanceof Error)){
var e__$1 = e25173;
return goog.log.error(figwheel.repl.logger,e__$1);
} else {
throw e25173;

}
}} else {
return null;
}
});})(G__25172,websocket,url,vec__25169,websocket_url_SINGLEQUOTE_))
);

G__25172.addEventListener(goog.net.WebSocket.EventType.OPENED,((function (G__25172,websocket,url,vec__25169,websocket_url_SINGLEQUOTE_){
return (function (e){
figwheel.repl.connection_established_BANG_.call(null,url);

cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket], null));

return figwheel.repl.hook_repl_printing_output_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket], null));
});})(G__25172,websocket,url,vec__25169,websocket_url_SINGLEQUOTE_))
);

G__25172.addEventListener(goog.net.WebSocket.EventType.CLOSED,((function (G__25172,websocket,url,vec__25169,websocket_url_SINGLEQUOTE_){
return (function (e){
return figwheel.repl.connection_closed_BANG_.call(null,url);
});})(G__25172,websocket,url,vec__25169,websocket_url_SINGLEQUOTE_))
);

G__25172.open(url);

return G__25172;
});})(vec__25169,websocket_url_SINGLEQUOTE_))
);
});

figwheel.repl.ws_connect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.repl.ws_connect.cljs$lang$applyTo = (function (seq25167){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25167));
});


figwheel.repl.http_get = (function (){var pred__25174 = cljs.core._EQ_;
var expr__25175 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__25174.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25175))){
var http = require("http");
return ((function (http,pred__25174,expr__25175){
return (function (url){
return (new goog.Promise(((function (http,pred__25174,expr__25175){
return (function (succ,err){
var data = cljs.core.volatile_BANG_.call(null,"");
return http.get([cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''),((function (data,http,pred__25174,expr__25175){
return (function (response){
response.on("data",((function (data,http,pred__25174,expr__25175){
return (function (chunk){
return cljs.core._vreset_BANG_.call(null,data,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._deref.call(null,data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chunk)].join(''));
});})(data,http,pred__25174,expr__25175))
);

return response.on("end",((function (data,http,pred__25174,expr__25175){
return (function (){
return succ.call(null,(function (){try{return JSON.parse(cljs.core.deref.call(null,data));
}catch (e25177){if((e25177 instanceof Error)){
var e = e25177;
console.error(e);

return err.call(null,e);
} else {
throw e25177;

}
}})());
});})(data,http,pred__25174,expr__25175))
);
});})(data,http,pred__25174,expr__25175))
).on("error",err);
});})(http,pred__25174,expr__25175))
));
});
;})(http,pred__25174,expr__25175))
} else {
return ((function (pred__25174,expr__25175){
return (function (url){
return (new goog.Promise(((function (pred__25174,expr__25175){
return (function (succ,err){
return goog.net.XhrIo.send(url,((function (pred__25174,expr__25175){
return (function (e){
var xhr = goog.object.get(e,"target");
if(cljs.core.truth_(xhr.isSuccess())){
return succ.call(null,xhr.getResponseJson());
} else {
return err.call(null,xhr);
}
});})(pred__25174,expr__25175))
);
});})(pred__25174,expr__25175))
));
});
;})(pred__25174,expr__25175))
}
})();



figwheel.repl.poll = (function figwheel$repl$poll(msg_fn,connect_url_SINGLEQUOTE_){
return figwheel.repl.http_get.call(null,figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_)).then((function (msg){
msg_fn.call(null,msg);

return setTimeout((function (){
return figwheel.repl.poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}),(500));
}),(function (e){
figwheel.repl.connection_closed_BANG_.call(null,connect_url_SINGLEQUOTE_);

return figwheel.repl.http_connect.call(null,connect_url_SINGLEQUOTE_);
}));
});

figwheel.repl.long_poll = (function figwheel$repl$long_poll(msg_fn,connect_url_SINGLEQUOTE_){
return figwheel.repl.http_get.call(null,figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_)).then((function (msg){
msg_fn.call(null,msg);

return figwheel.repl.long_poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}),(function (e){
figwheel.repl.connection_closed_BANG_.call(null,connect_url_SINGLEQUOTE_);

return figwheel.repl.http_connect.call(null,connect_url_SINGLEQUOTE_);
}));
});

figwheel.repl.http_connect_STAR_ = (function figwheel$repl$http_connect_STAR_(attempt,connect_url_SINGLEQUOTE_){
var url = figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_);
var surl = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
var msg_fn = ((function (url,surl){
return (function (msg){
try{figwheel.repl.debug.call(null,cljs.core.pr_str.call(null,msg));

return figwheel.repl.message.call(null,cljs.core.assoc.call(null,cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl));
}catch (e25178){if((e25178 instanceof Error)){
var e = e25178;
return goog.log.error(figwheel.repl.logger,e);
} else {
throw e25178;

}
}});})(url,surl))
;
var G__25179_25250 = url.getQueryData();
G__25179_25250.add("fwinit","true");


return figwheel.repl.http_get.call(null,url).then(((function (url,surl,msg_fn){
return (function (msg){
var typ = goog.object.get(msg,"connection-type");
goog.log.info(figwheel.repl.logger,["Connected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(typ)].join(''));

msg_fn.call(null,msg);

figwheel.repl.connection_established_BANG_.call(null,url);

cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl], null));

figwheel.repl.hook_repl_printing_output_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl], null));

if(cljs.core._EQ_.call(null,typ,"http-long-polling")){
return figwheel.repl.long_poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
} else {
return figwheel.repl.poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}
});})(url,surl,msg_fn))
,((function (url,surl,msg_fn){
return (function (e){
if((e instanceof Error)){
goog.log.error(figwheel.repl.logger,e);
} else {
}

if(cljs.core.truth_((function (){var and__3938__auto__ = (e instanceof goog.net.XhrIo);
if(and__3938__auto__){
return e.getResponseBody();
} else {
return and__3938__auto__;
}
})())){
figwheel.repl.debug.call(null,e.getResponseBody());
} else {
}

var wait_time = figwheel.repl.exponential_backoff.call(null,attempt);
goog.log.info(figwheel.repl.logger,["HTTP Connection Error: next connection attempt in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((wait_time / (1000)))," seconds"].join(''));

return setTimeout(((function (wait_time,url,surl,msg_fn){
return (function (){
return figwheel.repl.http_connect_STAR_.call(null,(attempt + (1)),connect_url_SINGLEQUOTE_);
});})(wait_time,url,surl,msg_fn))
,wait_time);
});})(url,surl,msg_fn))
);
});

figwheel.repl.http_connect = (function figwheel$repl$http_connect(var_args){
var args__4534__auto__ = [];
var len__4531__auto___25251 = arguments.length;
var i__4532__auto___25252 = (0);
while(true){
if((i__4532__auto___25252 < len__4531__auto___25251)){
args__4534__auto__.push((arguments[i__4532__auto___25252]));

var G__25253 = (i__4532__auto___25252 + (1));
i__4532__auto___25252 = G__25253;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.repl.http_connect.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.repl.http_connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__25181){
var vec__25182 = p__25181;
var connect_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__25182,(0),null);
return figwheel.repl.http_connect_STAR_.call(null,(0),connect_url_SINGLEQUOTE_);
});

figwheel.repl.http_connect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.repl.http_connect.cljs$lang$applyTo = (function (seq25180){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25180));
});


figwheel.repl.switch_to_http_QMARK_ = (function figwheel$repl$switch_to_http_QMARK_(url){
if(cljs.core.truth_((function (){var or__3949__auto__ = goog.string.startsWith(url,"http");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.repl.get_websocket_class.call(null);
}
})())){
return url;
} else {
goog.log.warning(figwheel.repl.logger,["No WebSocket implementation found! Falling back to http-long-polling",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198)))?":\n For a more efficient connection ensure that \"ws\" is installed :: do -> 'npm install ws'":null))].join(''));

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.Uri.parse(url).setScheme("http"))].join('');
}
});


/** @define {string} */
goog.define("figwheel.repl.client_log_level","info");

figwheel.repl.log_levels = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,clojure.string.lower_case,(function (p1__25111_SHARP_){
return goog.object.get(goog.debug.Logger.Level,p1__25111_SHARP_);
})),cljs.core.map.call(null,cljs.core.str,cljs.core.list(new cljs.core.Symbol(null,"SEVERE","SEVERE",2038088045,null),new cljs.core.Symbol(null,"WARNING","WARNING",1233939303,null),new cljs.core.Symbol(null,"INFO","INFO",578874437,null),new cljs.core.Symbol(null,"CONFIG","CONFIG",1613043737,null),new cljs.core.Symbol(null,"FINE","FINE",1120074650,null),new cljs.core.Symbol(null,"FINER","FINER",1219697631,null),new cljs.core.Symbol(null,"FINEST","FINEST",-1116440228,null)))));

figwheel.repl.set_log_level = (function figwheel$repl$set_log_level(logger_SINGLEQUOTE_,level){
var temp__5455__auto__ = cljs.core.get.call(null,figwheel.repl.log_levels,level);
if(cljs.core.truth_(temp__5455__auto__)){
var lvl = temp__5455__auto__;
logger_SINGLEQUOTE_.setLevel(lvl);

return figwheel.repl.debug.call(null,["setting log level to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level)].join(''));
} else {
return goog.log.warn(["Log level ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,level))," doesn't exist must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list("severe","warning","info","config","fine","finer","finest")))].join(''));
}
});

figwheel.repl.init_log_level_BANG_ = (function figwheel$repl$init_log_level_BANG_(){
var seq__25185 = cljs.core.seq.call(null,(function (){var G__25189 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [figwheel.repl.logger], null);
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined')){
return cljs.core.conj.call(null,G__25189,figwheel.core.logger);
} else {
return G__25189;
}
})());
var chunk__25186 = null;
var count__25187 = (0);
var i__25188 = (0);
while(true){
if((i__25188 < count__25187)){
var logger_SINGLEQUOTE_ = cljs.core._nth.call(null,chunk__25186,i__25188);
figwheel.repl.set_log_level.call(null,logger_SINGLEQUOTE_,figwheel.repl.client_log_level);


var G__25254 = seq__25185;
var G__25255 = chunk__25186;
var G__25256 = count__25187;
var G__25257 = (i__25188 + (1));
seq__25185 = G__25254;
chunk__25186 = G__25255;
count__25187 = G__25256;
i__25188 = G__25257;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25185);
if(temp__5457__auto__){
var seq__25185__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25185__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__25185__$1);
var G__25258 = cljs.core.chunk_rest.call(null,seq__25185__$1);
var G__25259 = c__4351__auto__;
var G__25260 = cljs.core.count.call(null,c__4351__auto__);
var G__25261 = (0);
seq__25185 = G__25258;
chunk__25186 = G__25259;
count__25187 = G__25260;
i__25188 = G__25261;
continue;
} else {
var logger_SINGLEQUOTE_ = cljs.core.first.call(null,seq__25185__$1);
figwheel.repl.set_log_level.call(null,logger_SINGLEQUOTE_,figwheel.repl.client_log_level);


var G__25262 = cljs.core.next.call(null,seq__25185__$1);
var G__25263 = null;
var G__25264 = (0);
var G__25265 = (0);
seq__25185 = G__25262;
chunk__25186 = G__25263;
count__25187 = G__25264;
i__25188 = G__25265;
continue;
}
} else {
return null;
}
}
break;
}
});

figwheel.repl.connect_STAR_ = (function figwheel$repl$connect_STAR_(connect_url_SINGLEQUOTE_){
figwheel.repl.init_log_level_BANG_.call(null);

figwheel.repl.patch_goog_base.call(null);

var url = figwheel.repl.switch_to_http_QMARK_.call(null,clojure.string.trim.call(null,(function (){var or__3949__auto__ = connect_url_SINGLEQUOTE_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.repl.connect_url;
}
})()));
if(cljs.core.truth_(goog.string.startsWith(url,"ws"))){
return figwheel.repl.ws_connect.call(null,url);
} else {
if(cljs.core.truth_(goog.string.startsWith(url,"http"))){
return figwheel.repl.http_connect.call(null,url);
} else {
return null;
}
}
});

figwheel.repl.connect = (function figwheel$repl$connect(var_args){
var args__4534__auto__ = [];
var len__4531__auto___25266 = arguments.length;
var i__4532__auto___25267 = (0);
while(true){
if((i__4532__auto___25267 < len__4531__auto___25266)){
args__4534__auto__.push((arguments[i__4532__auto___25267]));

var G__25268 = (i__4532__auto___25267 + (1));
i__4532__auto___25267 = G__25268;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.repl.connect.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.repl.connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__25191){
var vec__25192 = p__25191;
var connect_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__25192,(0),null);
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.connected !== 'undefined')){
return null;
} else {
return (
figwheel.repl.connected = (function (){
figwheel.repl.connect_STAR_.call(null,connect_url_SINGLEQUOTE_);

return true;
})()
)
;
}
});

figwheel.repl.connect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.repl.connect.cljs$lang$applyTo = (function (seq25190){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25190));
});


//# sourceMappingURL=repl.js.map
