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
return (function (p1__26002_SHARP_){
var k = f.call(null,p1__26002_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
});})(seen))
,coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__26003){
var vec__26004 = p__26003;
var k = cljs.core.nth.call(null,vec__26004,(0),null);
var v = cljs.core.nth.call(null,vec__26004,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,text,/\n/," "))," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26008 = arguments.length;
var i__4532__auto___26009 = (0);
while(true){
if((i__4532__auto___26009 < len__4531__auto___26008)){
args__4534__auto__.push((arguments[i__4532__auto___26009]));

var G__26010 = (i__4532__auto___26009 + (1));
i__4532__auto___26009 = G__26010;
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
figwheel.core.cross_format.cljs$lang$applyTo = (function (seq26007){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26007));
});

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__26013){
var map__26014 = p__26013;
var map__26014__$1 = ((((!((map__26014 == null)))?(((((map__26014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26014):map__26014);
var message = cljs.core.get.call(null,map__26014__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__26014__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,((function (map__26014,map__26014__$1,message,column){
return (function (p1__26012_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26012_SHARP_], null)));
});})(map__26014,map__26014__$1,message,column))
,cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,((function (map__26014,map__26014__$1,message,column){
return (function (p1__26011_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__26011_SHARP_);
});})(map__26014,map__26014__$1,message,column))
,figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__26017){
var map__26018 = p__26017;
var map__26018__$1 = ((((!((map__26018 == null)))?(((((map__26018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26018):map__26018);
var message_data = map__26018__$1;
var message = cljs.core.get.call(null,map__26018__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__26018__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__26018__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__26018__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__26020 = file_excerpt;
var map__26020__$1 = ((((!((map__26020 == null)))?(((((map__26020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26020):map__26020);
var start_line = cljs.core.get.call(null,map__26020__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__26020__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__26020__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,((function (map__26020,map__26020__$1,start_line,path,excerpt,map__26018,map__26018__$1,message_data,message,line,column,file_excerpt){
return (function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
});})(map__26020,map__26020__$1,start_line,path,excerpt,map__26018,map__26018__$1,message_data,message,line,column,file_excerpt))
,clojure.string.split_lines.call(null,excerpt));
var vec__26021 = cljs.core.split_with.call(null,((function (map__26020,map__26020__$1,start_line,path,excerpt,lines,map__26018,map__26018__$1,message_data,message,line,column,file_excerpt){
return (function (p1__26016_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__26016_SHARP_));
});})(map__26020,map__26020__$1,start_line,path,excerpt,lines,map__26018,map__26018__$1,message_data,message,line,column,file_excerpt))
,lines);
var begin = cljs.core.nth.call(null,vec__26021,(0),null);
var end = cljs.core.nth.call(null,vec__26021,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__26025){
var map__26026 = p__26025;
var map__26026__$1 = ((((!((map__26026 == null)))?(((((map__26026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26026):map__26026);
var file = cljs.core.get.call(null,map__26026__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__26026__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__26026__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__26028 = "";
var G__26028__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26028),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__26028);
var G__26028__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26028__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__26028__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26028__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__26028__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger("Figwheel");
}

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_26075 = (new goog.debug.Console());
var G__26035_26076 = c_26075.getFormatter();
goog.object.set(G__26035_26076,"showAbsoluteTime",false);

goog.object.set(G__26035_26076,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_26075);

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
return figwheel.core.event_target.dispatchEvent((function (){var G__26036 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__26036,"data",(function (){var or__3949__auto__ = data;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__26036;
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

var last_reload_timestamp_26077 = cljs.core.atom.call(null,(0));
var promise_chain_26078 = (new goog.Promise(((function (last_reload_timestamp_26077){
return (function (r,_){
return r.call(null,true);
});})(last_reload_timestamp_26077))
));
figwheel.core.render_watcher = ((function (last_reload_timestamp_26077,promise_chain_26078){
return (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5455__auto__ = (function (){var temp__5457__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5457__auto__)){
var ts = temp__5457__auto__;
var and__3938__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_26077) < ts);
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
cljs.core.reset_BANG_.call(null,last_reload_timestamp_26077,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_26078.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_26077,promise_chain_26078){
return (function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR_26037 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (132);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then(((function (_STAR_inline_code_message_max_column_STAR_26037,warn,warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_26077,promise_chain_26078){
return (function (){
var seq__26038 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__26039 = null;
var count__26040 = (0);
var i__26041 = (0);
while(true){
if((i__26041 < count__26040)){
var w = cljs.core._nth.call(null,chunk__26039,i__26041);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__26079 = seq__26038;
var G__26080 = chunk__26039;
var G__26081 = count__26040;
var G__26082 = (i__26041 + (1));
seq__26038 = G__26079;
chunk__26039 = G__26080;
count__26040 = G__26081;
i__26041 = G__26082;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26038);
if(temp__5457__auto__){
var seq__26038__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26038__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__26038__$1);
var G__26083 = cljs.core.chunk_rest.call(null,seq__26038__$1);
var G__26084 = c__4351__auto__;
var G__26085 = cljs.core.count.call(null,c__4351__auto__);
var G__26086 = (0);
seq__26038 = G__26083;
chunk__26039 = G__26084;
count__26040 = G__26085;
i__26041 = G__26086;
continue;
} else {
var w = cljs.core.first.call(null,seq__26038__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__26087 = cljs.core.next.call(null,seq__26038__$1);
var G__26088 = null;
var G__26089 = (0);
var G__26090 = (0);
seq__26038 = G__26087;
chunk__26039 = G__26088;
count__26040 = G__26089;
i__26041 = G__26090;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_inline_code_message_max_column_STAR_26037,warn,warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_26077,promise_chain_26078))
);
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR_26037;
}});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_26077,promise_chain_26078))
);
} else {
if(cljs.core.truth_(exception)){
return promise_chain_26078.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_26077,promise_chain_26078){
return (function (){
var _STAR_inline_code_message_max_column_STAR_26042 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (132);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR_26042;
}});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_26077,promise_chain_26078))
);
} else {
return promise_chain_26078.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_26077,promise_chain_26078){
return (function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_26077,promise_chain_26078))
);

}
}
} else {
return null;
}
} else {
return null;
}
});})(last_reload_timestamp_26077,promise_chain_26078))
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
var len__4531__auto___26091 = arguments.length;
var i__4532__auto___26092 = (0);
while(true){
if((i__4532__auto___26092 < len__4531__auto___26091)){
args__4534__auto__.push((arguments[i__4532__auto___26092]));

var G__26093 = (i__4532__auto___26092 + (1));
i__4532__auto___26092 = G__26093;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__26045){
var vec__26046 = p__26045;
var n = cljs.core.nth.call(null,vec__26046,(0),null);
var mdata = cljs.core.nth.call(null,vec__26046,(1),null);
var temp__5457__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__26049 = cljs.core.seq.call(null,hooks);
var chunk__26050 = null;
var count__26051 = (0);
var i__26052 = (0);
while(true){
if((i__26052 < count__26051)){
var vec__26053 = cljs.core._nth.call(null,chunk__26050,i__26052);
var n = cljs.core.nth.call(null,vec__26053,(0),null);
var f = cljs.core.nth.call(null,vec__26053,(1),null);
var temp__5455__auto___26094 = cljs.core.reduce.call(null,((function (seq__26049,chunk__26050,count__26051,i__26052,vec__26053,n,f,hooks){
return (function (p1__26029_SHARP_,p2__26030_SHARP_){
if(cljs.core.truth_(p1__26029_SHARP_)){
return goog.object.get(p1__26029_SHARP_,p2__26030_SHARP_);
} else {
return null;
}
});})(seq__26049,chunk__26050,count__26051,i__26052,vec__26053,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5455__auto___26094)){
var hook_26095 = temp__5455__auto___26094;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_26095,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__26096 = seq__26049;
var G__26097 = chunk__26050;
var G__26098 = count__26051;
var G__26099 = (i__26052 + (1));
seq__26049 = G__26096;
chunk__26050 = G__26097;
count__26051 = G__26098;
i__26052 = G__26099;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26049);
if(temp__5457__auto__){
var seq__26049__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26049__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__26049__$1);
var G__26100 = cljs.core.chunk_rest.call(null,seq__26049__$1);
var G__26101 = c__4351__auto__;
var G__26102 = cljs.core.count.call(null,c__4351__auto__);
var G__26103 = (0);
seq__26049 = G__26100;
chunk__26050 = G__26101;
count__26051 = G__26102;
i__26052 = G__26103;
continue;
} else {
var vec__26056 = cljs.core.first.call(null,seq__26049__$1);
var n = cljs.core.nth.call(null,vec__26056,(0),null);
var f = cljs.core.nth.call(null,vec__26056,(1),null);
var temp__5455__auto___26104 = cljs.core.reduce.call(null,((function (seq__26049,chunk__26050,count__26051,i__26052,vec__26056,n,f,seq__26049__$1,temp__5457__auto__,hooks){
return (function (p1__26029_SHARP_,p2__26030_SHARP_){
if(cljs.core.truth_(p1__26029_SHARP_)){
return goog.object.get(p1__26029_SHARP_,p2__26030_SHARP_);
} else {
return null;
}
});})(seq__26049,chunk__26050,count__26051,i__26052,vec__26056,n,f,seq__26049__$1,temp__5457__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5455__auto___26104)){
var hook_26105 = temp__5455__auto___26104;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_26105,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__26106 = cljs.core.next.call(null,seq__26049__$1);
var G__26107 = null;
var G__26108 = (0);
var G__26109 = (0);
seq__26049 = G__26106;
chunk__26050 = G__26107;
count__26051 = G__26108;
i__26052 = G__26109;
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
figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq26043){
var G__26044 = cljs.core.first.call(null,seq26043);
var seq26043__$1 = cljs.core.next.call(null,seq26043);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26044,seq26043__$1);
});


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__26059){
var vec__26060 = p__26059;
var k = cljs.core.nth.call(null,vec__26060,(0),null);
var v = cljs.core.nth.call(null,vec__26060,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,((function (figwheel_meta__$1){
return (function (p1__26031_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__26031_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__26031_SHARP_));
});})(figwheel_meta__$1))
,namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__26032_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__26032_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
});})(figwheel_meta__$1,namespaces__$1))
);

var to_reload = (cljs.core.truth_((function (){var and__3938__auto__ = !(figwheel.core.load_warninged_code);
if(and__3938__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__3938__auto__;
}
})())?null:cljs.core.filter.call(null,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__26033_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__26033_SHARP_);
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

var seq__26063_26110 = cljs.core.seq.call(null,to_reload);
var chunk__26064_26111 = null;
var count__26065_26112 = (0);
var i__26066_26113 = (0);
while(true){
if((i__26066_26113 < count__26065_26112)){
var ns_26114 = cljs.core._nth.call(null,chunk__26064_26111,i__26066_26113);
goog.require(cljs.core.name.call(null,ns_26114),true);


var G__26115 = seq__26063_26110;
var G__26116 = chunk__26064_26111;
var G__26117 = count__26065_26112;
var G__26118 = (i__26066_26113 + (1));
seq__26063_26110 = G__26115;
chunk__26064_26111 = G__26116;
count__26065_26112 = G__26117;
i__26066_26113 = G__26118;
continue;
} else {
var temp__5457__auto___26119 = cljs.core.seq.call(null,seq__26063_26110);
if(temp__5457__auto___26119){
var seq__26063_26120__$1 = temp__5457__auto___26119;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26063_26120__$1)){
var c__4351__auto___26121 = cljs.core.chunk_first.call(null,seq__26063_26120__$1);
var G__26122 = cljs.core.chunk_rest.call(null,seq__26063_26120__$1);
var G__26123 = c__4351__auto___26121;
var G__26124 = cljs.core.count.call(null,c__4351__auto___26121);
var G__26125 = (0);
seq__26063_26110 = G__26122;
chunk__26064_26111 = G__26123;
count__26065_26112 = G__26124;
i__26066_26113 = G__26125;
continue;
} else {
var ns_26126 = cljs.core.first.call(null,seq__26063_26120__$1);
goog.require(cljs.core.name.call(null,ns_26126),true);


var G__26127 = cljs.core.next.call(null,seq__26063_26120__$1);
var G__26128 = null;
var G__26129 = (0);
var G__26130 = (0);
seq__26063_26110 = G__26127;
chunk__26064_26111 = G__26128;
count__26065_26112 = G__26129;
i__26066_26113 = G__26130;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_26131 = ((function (to_reload,figwheel_meta__$1,namespaces__$1){
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
figwheel.repl.after_reloads(after_reload_fn_26131);
} else {
setTimeout(after_reload_fn_26131,(100));
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

var seq__26067 = cljs.core.seq.call(null,warnings);
var chunk__26068 = null;
var count__26069 = (0);
var i__26070 = (0);
while(true){
if((i__26070 < count__26069)){
var warning = cljs.core._nth.call(null,chunk__26068,i__26070);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,warning))].join(''));


var G__26132 = seq__26067;
var G__26133 = chunk__26068;
var G__26134 = count__26069;
var G__26135 = (i__26070 + (1));
seq__26067 = G__26132;
chunk__26068 = G__26133;
count__26069 = G__26134;
i__26070 = G__26135;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__26067);
if(temp__5457__auto__){
var seq__26067__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26067__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__26067__$1);
var G__26136 = cljs.core.chunk_rest.call(null,seq__26067__$1);
var G__26137 = c__4351__auto__;
var G__26138 = cljs.core.count.call(null,c__4351__auto__);
var G__26139 = (0);
seq__26067 = G__26136;
chunk__26068 = G__26137;
count__26069 = G__26138;
i__26070 = G__26139;
continue;
} else {
var warning = cljs.core.first.call(null,seq__26067__$1);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,warning))].join(''));


var G__26140 = cljs.core.next.call(null,seq__26067__$1);
var G__26141 = null;
var G__26142 = (0);
var G__26143 = (0);
seq__26067 = G__26140;
chunk__26068 = G__26141;
count__26069 = G__26142;
i__26070 = G__26143;
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

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__26071){
var map__26072 = p__26071;
var map__26072__$1 = ((((!((map__26072 == null)))?(((((map__26072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26072):map__26072);
var exception_data = map__26072__$1;
var file = cljs.core.get.call(null,map__26072__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__26072__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__26072__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout(((function (map__26072,map__26072__$1,exception_data,file,type,message){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
});})(map__26072,map__26072__$1,exception_data,file,type,message))
,(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (map__26072,map__26072__$1,exception_data,file,type,message){
return (function (p1__26034_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__26034_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
});})(map__26072,map__26072__$1,exception_data,file,type,message))
);

return goog.log.warning(figwheel.core.logger,(function (){var G__26074 = "Compile Exception - ";
var G__26074__$1 = (cljs.core.truth_((function (){var or__3949__auto__ = type;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return message;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26074),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null))))].join(''):G__26074);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26074__$1)," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,exception_data))].join('');
} else {
return G__26074__$1;
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
