// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,((function (seen){
return (function (p1__19351_SHARP_){
var k = f.call(null,p1__19351_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
});})(seen))
,coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__19352){
var vec__19353 = p__19352;
var k = cljs.core.nth.call(null,vec__19353,(0),null);
var v = cljs.core.nth.call(null,vec__19353,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,text,/\n/," "))," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19357 = arguments.length;
var i__4532__auto___19358 = (0);
while(true){
if((i__4532__auto___19358 < len__4531__auto___19357)){
args__4534__auto__.push((arguments[i__4532__auto___19358]));

var G__19359 = (i__4532__auto___19358 + (1));
i__4532__auto___19358 = G__19359;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
});

figwheel.core.cross_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.core.cross_format.cljs$lang$applyTo = (function (seq19356){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19356));
});

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__19362){
var map__19363 = p__19362;
var map__19363__$1 = ((((!((map__19363 == null)))?(((((map__19363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19363):map__19363);
var message = cljs.core.get.call(null,map__19363__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__19363__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,((function (map__19363,map__19363__$1,message,column){
return (function (p1__19361_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19361_SHARP_], null)));
});})(map__19363,map__19363__$1,message,column))
,cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,((function (map__19363,map__19363__$1,message,column){
return (function (p1__19360_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__19360_SHARP_);
});})(map__19363,map__19363__$1,message,column))
,figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__19366){
var map__19367 = p__19366;
var map__19367__$1 = ((((!((map__19367 == null)))?(((((map__19367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19367):map__19367);
var message_data = map__19367__$1;
var message = cljs.core.get.call(null,map__19367__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__19367__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__19367__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__19367__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__19369 = file_excerpt;
var map__19369__$1 = ((((!((map__19369 == null)))?(((((map__19369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19369):map__19369);
var start_line = cljs.core.get.call(null,map__19369__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__19369__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__19369__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,((function (map__19369,map__19369__$1,start_line,path,excerpt,map__19367,map__19367__$1,message_data,message,line,column,file_excerpt){
return (function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
});})(map__19369,map__19369__$1,start_line,path,excerpt,map__19367,map__19367__$1,message_data,message,line,column,file_excerpt))
,clojure.string.split_lines.call(null,excerpt));
var vec__19370 = cljs.core.split_with.call(null,((function (map__19369,map__19369__$1,start_line,path,excerpt,lines,map__19367,map__19367__$1,message_data,message,line,column,file_excerpt){
return (function (p1__19365_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__19365_SHARP_));
});})(map__19369,map__19369__$1,start_line,path,excerpt,lines,map__19367,map__19367__$1,message_data,message,line,column,file_excerpt))
,lines);
var begin = cljs.core.nth.call(null,vec__19370,(0),null);
var end = cljs.core.nth.call(null,vec__19370,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__19374){
var map__19375 = p__19374;
var map__19375__$1 = ((((!((map__19375 == null)))?(((((map__19375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19375):map__19375);
var file = cljs.core.get.call(null,map__19375__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__19375__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__19375__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__19377 = "";
var G__19377__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19377),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__19377);
var G__19377__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19377__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__19377__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19377__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__19377__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger("Figwheel");
}

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_19424 = (new goog.debug.Console());
var G__19384_19425 = c_19424.getFormatter();
goog.object.set(G__19384_19425,"showAbsoluteTime",false);

goog.object.set(G__19384_19425,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_19424);

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
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__19385 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__19385,"data",(function (){var or__3949__auto__ = data;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__19385;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5455__auto__ = e.event_;
if(cljs.core.truth_(temp__5455__auto__)){
var e__$1 = temp__5455__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/** @define {boolean} */
goog.define("figwheel.core.load_warninged_code",false);


/** @define {boolean} */
goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
return ((figwheel.core.heads_up_display) && (!((goog.global.document == null))));
});

var last_reload_timestamp_19426 = cljs.core.atom.call(null,(0));
var promise_chain_19427 = (new goog.Promise(((function (last_reload_timestamp_19426){
return (function (r,_){
return r.call(null,true);
});})(last_reload_timestamp_19426))
));
figwheel.core.render_watcher = ((function (last_reload_timestamp_19426,promise_chain_19427){
return (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5455__auto__ = (function (){var temp__5457__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5457__auto__)){
var ts = temp__5457__auto__;
var and__3938__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_19426) < ts);
if(and__3938__auto__){
return ts;
} else {
return and__3938__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var ts = temp__5455__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_19426,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_19427.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_19426,promise_chain_19427){
return (function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR_19386 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (132);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then(((function (_STAR_inline_code_message_max_column_STAR_19386,warn,warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_19426,promise_chain_19427){
return (function (){
var seq__19387 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__19388 = null;
var count__19389 = (0);
var i__19390 = (0);
while(true){
if((i__19390 < count__19389)){
var w = cljs.core._nth.call(null,chunk__19388,i__19390);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__19428 = seq__19387;
var G__19429 = chunk__19388;
var G__19430 = count__19389;
var G__19431 = (i__19390 + (1));
seq__19387 = G__19428;
chunk__19388 = G__19429;
count__19389 = G__19430;
i__19390 = G__19431;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__19387);
if(temp__5457__auto__){
var seq__19387__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19387__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__19387__$1);
var G__19432 = cljs.core.chunk_rest.call(null,seq__19387__$1);
var G__19433 = c__4351__auto__;
var G__19434 = cljs.core.count.call(null,c__4351__auto__);
var G__19435 = (0);
seq__19387 = G__19432;
chunk__19388 = G__19433;
count__19389 = G__19434;
i__19390 = G__19435;
continue;
} else {
var w = cljs.core.first.call(null,seq__19387__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__19436 = cljs.core.next.call(null,seq__19387__$1);
var G__19437 = null;
var G__19438 = (0);
var G__19439 = (0);
seq__19387 = G__19436;
chunk__19388 = G__19437;
count__19389 = G__19438;
i__19390 = G__19439;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_inline_code_message_max_column_STAR_19386,warn,warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_19426,promise_chain_19427))
);
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR_19386;
}});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_19426,promise_chain_19427))
);
} else {
if(cljs.core.truth_(exception)){
return promise_chain_19427.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_19426,promise_chain_19427){
return (function (){
var _STAR_inline_code_message_max_column_STAR_19391 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (132);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR_19391;
}});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_19426,promise_chain_19427))
);
} else {
return promise_chain_19427.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_19426,promise_chain_19427){
return (function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_19426,promise_chain_19427))
);

}
}
} else {
return null;
}
} else {
return null;
}
});})(last_reload_timestamp_19426,promise_chain_19427))
;

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.string.startsWith("clojure.",ns__$1);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return goog.string.startsWith("goog.",ns__$1);
}
}
});

figwheel.core.name__GT_path = (function figwheel$core$name__GT_path(ns){
return goog.object.get(goog.dependencies_.nameToPath,ns);
});

figwheel.core.provided_QMARK_ = (function figwheel$core$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.core.name__GT_path.call(null,cljs.core.name.call(null,ns)));
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__3938__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__3938__auto__){
var and__3938__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__3938__auto____$1){
var or__3949__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = figwheel.core.provided_QMARK_.call(null,namespace);
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19440 = arguments.length;
var i__4532__auto___19441 = (0);
while(true){
if((i__4532__auto___19441 < len__4531__auto___19440)){
args__4534__auto__.push((arguments[i__4532__auto___19441]));

var G__19442 = (i__4532__auto___19441 + (1));
i__4532__auto___19441 = G__19442;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__19394){
var vec__19395 = p__19394;
var n = cljs.core.nth.call(null,vec__19395,(0),null);
var mdata = cljs.core.nth.call(null,vec__19395,(1),null);
var temp__5457__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__19398 = cljs.core.seq.call(null,hooks);
var chunk__19399 = null;
var count__19400 = (0);
var i__19401 = (0);
while(true){
if((i__19401 < count__19400)){
var vec__19402 = cljs.core._nth.call(null,chunk__19399,i__19401);
var n = cljs.core.nth.call(null,vec__19402,(0),null);
var f = cljs.core.nth.call(null,vec__19402,(1),null);
var temp__5455__auto___19443 = cljs.core.reduce.call(null,((function (seq__19398,chunk__19399,count__19400,i__19401,vec__19402,n,f,hooks){
return (function (p1__19378_SHARP_,p2__19379_SHARP_){
if(cljs.core.truth_(p1__19378_SHARP_)){
return goog.object.get(p1__19378_SHARP_,p2__19379_SHARP_);
} else {
return null;
}
});})(seq__19398,chunk__19399,count__19400,i__19401,vec__19402,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5455__auto___19443)){
var hook_19444 = temp__5455__auto___19443;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_19444,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__19445 = seq__19398;
var G__19446 = chunk__19399;
var G__19447 = count__19400;
var G__19448 = (i__19401 + (1));
seq__19398 = G__19445;
chunk__19399 = G__19446;
count__19400 = G__19447;
i__19401 = G__19448;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__19398);
if(temp__5457__auto__){
var seq__19398__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19398__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__19398__$1);
var G__19449 = cljs.core.chunk_rest.call(null,seq__19398__$1);
var G__19450 = c__4351__auto__;
var G__19451 = cljs.core.count.call(null,c__4351__auto__);
var G__19452 = (0);
seq__19398 = G__19449;
chunk__19399 = G__19450;
count__19400 = G__19451;
i__19401 = G__19452;
continue;
} else {
var vec__19405 = cljs.core.first.call(null,seq__19398__$1);
var n = cljs.core.nth.call(null,vec__19405,(0),null);
var f = cljs.core.nth.call(null,vec__19405,(1),null);
var temp__5455__auto___19453 = cljs.core.reduce.call(null,((function (seq__19398,chunk__19399,count__19400,i__19401,vec__19405,n,f,seq__19398__$1,temp__5457__auto__,hooks){
return (function (p1__19378_SHARP_,p2__19379_SHARP_){
if(cljs.core.truth_(p1__19378_SHARP_)){
return goog.object.get(p1__19378_SHARP_,p2__19379_SHARP_);
} else {
return null;
}
});})(seq__19398,chunk__19399,count__19400,i__19401,vec__19405,n,f,seq__19398__$1,temp__5457__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5455__auto___19453)){
var hook_19454 = temp__5455__auto___19453;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_19454,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__19455 = cljs.core.next.call(null,seq__19398__$1);
var G__19456 = null;
var G__19457 = (0);
var G__19458 = (0);
seq__19398 = G__19455;
chunk__19399 = G__19456;
count__19400 = G__19457;
i__19401 = G__19458;
continue;
}
} else {
return null;
}
}
break;
}
});

figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq19392){
var G__19393 = cljs.core.first.call(null,seq19392);
var seq19392__$1 = cljs.core.next.call(null,seq19392);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19393,seq19392__$1);
});


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__19408){
var vec__19409 = p__19408;
var k = cljs.core.nth.call(null,vec__19409,(0),null);
var v = cljs.core.nth.call(null,vec__19409,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,((function (figwheel_meta__$1){
return (function (p1__19380_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__19380_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__19380_SHARP_));
});})(figwheel_meta__$1))
,namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__19381_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__19381_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
});})(figwheel_meta__$1,namespaces__$1))
);

var to_reload = (cljs.core.truth_((function (){var and__3938__auto__ = !(figwheel.core.load_warninged_code);
if(and__3938__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__3938__auto__;
}
})())?null:cljs.core.filter.call(null,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__19382_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__19382_SHARP_);
});})(figwheel_meta__$1,namespaces__$1))
,namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout(((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
});})(to_reload,figwheel_meta__$1,namespaces__$1))
,(0));
}

var seq__19412_19459 = cljs.core.seq.call(null,to_reload);
var chunk__19413_19460 = null;
var count__19414_19461 = (0);
var i__19415_19462 = (0);
while(true){
if((i__19415_19462 < count__19414_19461)){
var ns_19463 = cljs.core._nth.call(null,chunk__19413_19460,i__19415_19462);
goog.require(cljs.core.name.call(null,ns_19463),true);


var G__19464 = seq__19412_19459;
var G__19465 = chunk__19413_19460;
var G__19466 = count__19414_19461;
var G__19467 = (i__19415_19462 + (1));
seq__19412_19459 = G__19464;
chunk__19413_19460 = G__19465;
count__19414_19461 = G__19466;
i__19415_19462 = G__19467;
continue;
} else {
var temp__5457__auto___19468 = cljs.core.seq.call(null,seq__19412_19459);
if(temp__5457__auto___19468){
var seq__19412_19469__$1 = temp__5457__auto___19468;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19412_19469__$1)){
var c__4351__auto___19470 = cljs.core.chunk_first.call(null,seq__19412_19469__$1);
var G__19471 = cljs.core.chunk_rest.call(null,seq__19412_19469__$1);
var G__19472 = c__4351__auto___19470;
var G__19473 = cljs.core.count.call(null,c__4351__auto___19470);
var G__19474 = (0);
seq__19412_19459 = G__19471;
chunk__19413_19460 = G__19472;
count__19414_19461 = G__19473;
i__19415_19462 = G__19474;
continue;
} else {
var ns_19475 = cljs.core.first.call(null,seq__19412_19469__$1);
goog.require(cljs.core.name.call(null,ns_19475),true);


var G__19476 = cljs.core.next.call(null,seq__19412_19469__$1);
var G__19477 = null;
var G__19478 = (0);
var G__19479 = (0);
seq__19412_19459 = G__19476;
chunk__19413_19460 = G__19477;
count__19414_19461 = G__19478;
i__19415_19462 = G__19479;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_19480 = ((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
goog.log.info(figwheel.core.logger,["loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,to_reload))].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5457__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5457__auto__)){
var not_loaded = temp__5457__auto__;
return goog.log.info(figwheel.core.logger,["did not load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,not_loaded))].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});})(to_reload,figwheel_meta__$1,namespaces__$1))
;
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_19480);
} else {
setTimeout(after_reload_fn_19480,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__19416 = cljs.core.seq.call(null,warnings);
var chunk__19417 = null;
var count__19418 = (0);
var i__19419 = (0);
while(true){
if((i__19419 < count__19418)){
var warning = cljs.core._nth.call(null,chunk__19417,i__19419);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,warning))].join(''));


var G__19481 = seq__19416;
var G__19482 = chunk__19417;
var G__19483 = count__19418;
var G__19484 = (i__19419 + (1));
seq__19416 = G__19481;
chunk__19417 = G__19482;
count__19418 = G__19483;
i__19419 = G__19484;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__19416);
if(temp__5457__auto__){
var seq__19416__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19416__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__19416__$1);
var G__19485 = cljs.core.chunk_rest.call(null,seq__19416__$1);
var G__19486 = c__4351__auto__;
var G__19487 = cljs.core.count.call(null,c__4351__auto__);
var G__19488 = (0);
seq__19416 = G__19485;
chunk__19417 = G__19486;
count__19418 = G__19487;
i__19419 = G__19488;
continue;
} else {
var warning = cljs.core.first.call(null,seq__19416__$1);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,warning))].join(''));


var G__19489 = cljs.core.next.call(null,seq__19416__$1);
var G__19490 = null;
var G__19491 = (0);
var G__19492 = (0);
seq__19416 = G__19489;
chunk__19417 = G__19490;
count__19418 = G__19491;
i__19419 = G__19492;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__19420){
var map__19421 = p__19420;
var map__19421__$1 = ((((!((map__19421 == null)))?(((((map__19421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19421):map__19421);
var exception_data = map__19421__$1;
var file = cljs.core.get.call(null,map__19421__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__19421__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__19421__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout(((function (map__19421,map__19421__$1,exception_data,file,type,message){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
});})(map__19421,map__19421__$1,exception_data,file,type,message))
,(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (map__19421,map__19421__$1,exception_data,file,type,message){
return (function (p1__19383_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__19383_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
});})(map__19421,map__19421__$1,exception_data,file,type,message))
);

return goog.log.warning(figwheel.core.logger,(function (){var G__19423 = "Compile Exception - ";
var G__19423__$1 = (cljs.core.truth_((function (){var or__3949__auto__ = type;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return message;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19423),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null))))].join(''):G__19423);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19423__$1)," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,exception_data))].join('');
} else {
return G__19423__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
