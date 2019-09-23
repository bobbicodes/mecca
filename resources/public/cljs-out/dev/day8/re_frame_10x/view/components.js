// Compiled by ClojureScript 1.10.339 {}
goog.provide('day8.re_frame_10x.view.components');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.fx.dom');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core');
goog.require('day8.re_frame_10x.utils.re_com');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core');
goog.require('devtools.prefs');
goog.require('devtools.formatters.core');
goog.require('react_highlight.js');
goog.require('highlight.js.lib.languages.clojure');
day8.re_frame_10x.view.components.global$module$react_highlight$js = goog.global["Highlight"];
day8.re_frame_10x.view.components.search_input = (function day8$re_frame_10x$view$components$search_input(p__15155){
var map__15156 = p__15155;
var map__15156__$1 = ((((!((map__15156 == null)))?(((((map__15156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15156):map__15156);
var title = cljs.core.get.call(null,map__15156__$1,new cljs.core.Keyword(null,"title","title",636505583));
var placeholder = cljs.core.get.call(null,map__15156__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var on_save = cljs.core.get.call(null,map__15156__$1,new cljs.core.Keyword(null,"on-save","on-save",1618176266));
var on_change = cljs.core.get.call(null,map__15156__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_stop = cljs.core.get.call(null,map__15156__$1,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));
var val = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.atom.call(null,title);
var save = ((function (val,map__15156,map__15156__$1,title,placeholder,on_save,on_change,on_stop){
return (function (){
var v = clojure.string.trim.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,val))].join(''));
if((cljs.core.count.call(null,v) > (0))){
return on_save.call(null,v);
} else {
return null;
}
});})(val,map__15156,map__15156__$1,title,placeholder,on_save,on_change,on_stop))
;
return ((function (val,save,map__15156,map__15156__$1,title,placeholder,on_save,on_change,on_stop){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"size","size",1098693007),((((20) > cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,val))].join(''))))?(25):cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,val))].join(''))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val,save,map__15156,map__15156__$1,title,placeholder,on_save,on_change,on_stop){
return (function (p1__15153_SHARP_){
cljs.core.reset_BANG_.call(null,val,p1__15153_SHARP_.target.value);

return on_change.call(null,p1__15153_SHARP_);
});})(val,save,map__15156,map__15156__$1,title,placeholder,on_save,on_change,on_stop))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (val,save,map__15156,map__15156__$1,title,placeholder,on_save,on_change,on_stop){
return (function (p1__15154_SHARP_){
var G__15158 = p1__15154_SHARP_.which;
switch (G__15158) {
case (13):
save.call(null);

return cljs.core.reset_BANG_.call(null,val,"");

break;
default:
return null;

}
});})(val,save,map__15156,map__15156__$1,title,placeholder,on_save,on_change,on_stop))
], null)], null);
});
;})(val,save,map__15156,map__15156__$1,title,placeholder,on_save,on_change,on_stop))
});
day8.re_frame_10x.view.components.scroll_BANG_ = (function day8$re_frame_10x$view$components$scroll_BANG_(el,start,end,time){
return (new goog.fx.dom.Scroll(el,cljs.core.clj__GT_js.call(null,start),cljs.core.clj__GT_js.call(null,end),time)).play();
});
day8.re_frame_10x.view.components.scrolled_to_end_QMARK_ = (function day8$re_frame_10x$view$components$scrolled_to_end_QMARK_(el,tolerance){
return (tolerance > ((el.scrollHeight - el.scrollTop) - el.clientHeight));
});
day8.re_frame_10x.view.components.string__GT_css = (function day8$re_frame_10x$view$components$string__GT_css(css_string){

return cljs.core.reduce.call(null,(function (acc,p__15161){
var vec__15162 = p__15161;
var property = cljs.core.nth.call(null,vec__15162,(0),null);
var value = cljs.core.nth.call(null,vec__15162,(1),null);
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,property),value);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__15160_SHARP_){
return clojure.string.split.call(null,p1__15160_SHARP_,/:/);
}),clojure.string.split.call(null,css_string,/;/)));
});
day8.re_frame_10x.view.components.default_cljs_devtools_prefs = cljs.core.deref.call(null,devtools.prefs.default_config);
day8.re_frame_10x.view.components.reset_wrapping = (function day8$re_frame_10x$view$components$reset_wrapping(css_string){
return clojure.string.replace.call(null,css_string,/white-space:nowrap;/,"");
});
day8.re_frame_10x.view.components.customized_cljs_devtools_prefs = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"none-style","none-style",1613422814),"display: none",new cljs.core.Keyword(null,"index-tag","index-tag",693492486),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"none-style","none-style",1613422814)], null),new cljs.core.Keyword(null,"min-expandable-sequable-count-for-well-known-types","min-expandable-sequable-count-for-well-known-types",-1879576081),(3),new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807),false], null);
day8.re_frame_10x.view.components.effective_cljs_devtools_prefs = cljs.core.merge.call(null,day8.re_frame_10x.view.components.default_cljs_devtools_prefs,day8.re_frame_10x.view.components.customized_cljs_devtools_prefs);
day8.re_frame_10x.view.components.make_devtools_api_call = (function day8$re_frame_10x$view$components$make_devtools_api_call(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15167 = arguments.length;
var i__4532__auto___15168 = (0);
while(true){
if((i__4532__auto___15168 < len__4531__auto___15167)){
args__4534__auto__.push((arguments[i__4532__auto___15168]));

var G__15169 = (i__4532__auto___15168 + (1));
i__4532__auto___15168 = G__15169;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.view.components.make_devtools_api_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

day8.re_frame_10x.view.components.make_devtools_api_call.cljs$core$IFn$_invoke$arity$variadic = (function (api_fn,args){
var previous_config__15144__auto__ = devtools.prefs.get_prefs.call(null);
var prefs__15145__auto__ = day8.re_frame_10x.view.components.effective_cljs_devtools_prefs;
try{devtools.prefs.set_prefs_BANG_.call(null,prefs__15145__auto__);

return cljs.core.apply.call(null,api_fn,args);
}finally {if(cljs.core._EQ_.call(null,devtools.prefs.get_prefs.call(null),prefs__15145__auto__)){
} else {
throw (new Error(["Assert failed: ","someone modified devtools.prefs behind our back!","\n","(clojure.core/= (devtools.prefs/get-prefs) prefs__15145__auto__)"].join('')));
}

devtools.prefs.set_prefs_BANG_.call(null,previous_config__15144__auto__);
}});

day8.re_frame_10x.view.components.make_devtools_api_call.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.view.components.make_devtools_api_call.cljs$lang$applyTo = (function (seq15165){
var G__15166 = cljs.core.first.call(null,seq15165);
var seq15165__$1 = cljs.core.next.call(null,seq15165);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15166,seq15165__$1);
});

day8.re_frame_10x.view.components.cljs_devtools_header = (function day8$re_frame_10x$view$components$cljs_devtools_header(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15171 = arguments.length;
var i__4532__auto___15172 = (0);
while(true){
if((i__4532__auto___15172 < len__4531__auto___15171)){
args__4534__auto__.push((arguments[i__4532__auto___15172]));

var G__15173 = (i__4532__auto___15172 + (1));
i__4532__auto___15172 = G__15173;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

day8.re_frame_10x.view.components.cljs_devtools_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,day8.re_frame_10x.view.components.make_devtools_api_call,devtools.formatters.core.header_api_call,args);
});

day8.re_frame_10x.view.components.cljs_devtools_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.view.components.cljs_devtools_header.cljs$lang$applyTo = (function (seq15170){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15170));
});

day8.re_frame_10x.view.components.cljs_devtools_body = (function day8$re_frame_10x$view$components$cljs_devtools_body(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15175 = arguments.length;
var i__4532__auto___15176 = (0);
while(true){
if((i__4532__auto___15176 < len__4531__auto___15175)){
args__4534__auto__.push((arguments[i__4532__auto___15176]));

var G__15177 = (i__4532__auto___15176 + (1));
i__4532__auto___15176 = G__15177;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.view.components.cljs_devtools_body.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

day8.re_frame_10x.view.components.cljs_devtools_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,day8.re_frame_10x.view.components.make_devtools_api_call,devtools.formatters.core.body_api_call,args);
});

day8.re_frame_10x.view.components.cljs_devtools_body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.view.components.cljs_devtools_body.cljs$lang$applyTo = (function (seq15174){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15174));
});

day8.re_frame_10x.view.components.cljs_devtools_has_body = (function day8$re_frame_10x$view$components$cljs_devtools_has_body(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15179 = arguments.length;
var i__4532__auto___15180 = (0);
while(true){
if((i__4532__auto___15180 < len__4531__auto___15179)){
args__4534__auto__.push((arguments[i__4532__auto___15180]));

var G__15181 = (i__4532__auto___15180 + (1));
i__4532__auto___15180 = G__15181;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.view.components.cljs_devtools_has_body.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

day8.re_frame_10x.view.components.cljs_devtools_has_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,day8.re_frame_10x.view.components.make_devtools_api_call,devtools.formatters.core.has_body_api_call,args);
});

day8.re_frame_10x.view.components.cljs_devtools_has_body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.view.components.cljs_devtools_has_body.cljs$lang$applyTo = (function (seq15178){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15178));
});

day8.re_frame_10x.view.components.get_object = (function day8$re_frame_10x$view$components$get_object(jsonml){
return cljs.core.get.call(null,jsonml,(1)).object;
});
day8.re_frame_10x.view.components.get_config = (function day8$re_frame_10x$view$components$get_config(jsonml){
return cljs.core.get.call(null,jsonml,(1)).config;
});
day8.re_frame_10x.view.components.data_structure = (function day8$re_frame_10x$view$components$data_structure(jsonml,path){
var expanded_QMARK_ = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540),path], null));
return ((function (expanded_QMARK_){
return (function (jsonml__$1,path__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["re-frame-10x--object",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?" expanded":null))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (expanded_QMARK_){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","toggle-expansion","app-db/toggle-expansion",-1617765538),path__$1], null));
});})(expanded_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.expansion-button","button.expansion-button",-676095342),(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"\u25BC":"\u25B6")], null)], null),(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.deref.call(null,expanded_QMARK_);
if(cljs.core.truth_(and__3938__auto__)){
return day8.re_frame_10x.view.components.cljs_devtools_has_body.call(null,day8.re_frame_10x.view.components.get_object.call(null,jsonml__$1),day8.re_frame_10x.view.components.get_config.call(null,jsonml__$1));
} else {
return and__3938__auto__;
}
})())?day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,day8.re_frame_10x.view.components.cljs_devtools_body.call(null,day8.re_frame_10x.view.components.get_object.call(null,jsonml__$1),day8.re_frame_10x.view.components.get_config.call(null,jsonml__$1)),cljs.core.conj.call(null,path__$1,new cljs.core.Keyword(null,"body","body",-2049205669))):day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,day8.re_frame_10x.view.components.cljs_devtools_header.call(null,day8.re_frame_10x.view.components.get_object.call(null,jsonml__$1),day8.re_frame_10x.view.components.get_config.call(null,jsonml__$1)),cljs.core.conj.call(null,path__$1,new cljs.core.Keyword(null,"header","header",119441134))))], null);
});
;})(expanded_QMARK_))
});
/**
 * JSONML is the format used by Chrome's Custom Object Formatters.
 *   The spec is at https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview.
 * 
 *   JSONML is pretty much Hiccup over JSON. Chrome's implementation of this can
 *   be found at https://cs.chromium.org/chromium/src/third_party/WebKit/Source/devtools/front_end/object_ui/CustomPreviewComponent.js
 *   
 */
day8.re_frame_10x.view.components.jsonml__GT_hiccup = (function day8$re_frame_10x$view$components$jsonml__GT_hiccup(jsonml,path){
if(typeof jsonml === 'number'){
return jsonml;
} else {
var vec__15182 = jsonml;
var seq__15183 = cljs.core.seq.call(null,vec__15182);
var first__15184 = cljs.core.first.call(null,seq__15183);
var seq__15183__$1 = cljs.core.next.call(null,seq__15183);
var tag_name = first__15184;
var first__15184__$1 = cljs.core.first.call(null,seq__15183__$1);
var seq__15183__$2 = cljs.core.next.call(null,seq__15183__$1);
var attributes = first__15184__$1;
var children = seq__15183__$2;
var tagnames = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["table",null,"td",null,"tr",null,"span",null,"ol",null,"div",null,"li",null], null), null);
if(cljs.core.contains_QMARK_.call(null,tagnames,tag_name)){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,tag_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),day8.re_frame_10x.view.components.string__GT_css.call(null,cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,attributes),"style"))], null)], null),cljs.core.map_indexed.call(null,((function (vec__15182,seq__15183,first__15184,seq__15183__$1,tag_name,first__15184__$1,seq__15183__$2,attributes,children,tagnames){
return (function (i,child){
return day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,child,cljs.core.conj.call(null,path,i));
});})(vec__15182,seq__15183,first__15184,seq__15183__$1,tag_name,first__15184__$1,seq__15183__$2,attributes,children,tagnames))
),children);
} else {
if(cljs.core._EQ_.call(null,tag_name,"object")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.components.data_structure,jsonml,path], null);
} else {
return jsonml;

}
}
}
});
day8.re_frame_10x.view.components.subtree = (function day8$re_frame_10x$view$components$subtree(data,title,path){
var expanded_QMARK_ = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540),path], null));
return ((function (expanded_QMARK_){
return (function (data__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["re-frame-10x--object",(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"expanded":null)], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (expanded_QMARK_){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","toggle-expansion","app-db/toggle-expansion",-1617765538),path], null));
});})(expanded_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.expansion-button","button.expansion-button",-676095342),(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"\u25BC ":"\u25B6 ")], null)], null),(function (){var or__3949__auto__ = title;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "data";
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(20)], null)], null),(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.deref.call(null,expanded_QMARK_);
if(cljs.core.truth_(and__3938__auto__)){
return ((typeof data__$1 === 'string') || (typeof data__$1 === 'number') || (cljs.core.boolean_QMARK_.call(null,data__$1)) || ((data__$1 == null)));
} else {
return and__3938__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),cljs.core.prn_str.call(null,data__$1)], null):(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,day8.re_frame_10x.view.components.cljs_devtools_header.call(null,data__$1),cljs.core.conj.call(null,path,(0))):null))], null)], null)], null)], null)], null);
});
;})(expanded_QMARK_))
});
day8.re_frame_10x.view.components.subscription_render = (function day8$re_frame_10x$view$components$subscription_render(data,title,path){
var expanded_QMARK_ = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.atom.call(null,true);
return ((function (expanded_QMARK_){
return (function (data__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["re-frame-10x--object",(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"expanded":null)], null))], null),(function (){var or__3949__auto__ = title;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "data";
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(20)], null)], null),(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.deref.call(null,expanded_QMARK_);
if(cljs.core.truth_(and__3938__auto__)){
return ((typeof data__$1 === 'string') || (typeof data__$1 === 'number') || (cljs.core.boolean_QMARK_.call(null,data__$1)) || ((data__$1 == null)));
} else {
return and__3938__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),cljs.core.prn_str.call(null,data__$1)], null):(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,day8.re_frame_10x.view.components.cljs_devtools_header.call(null,data__$1),cljs.core.conj.call(null,path,(0))):null))], null)], null);
});
;})(expanded_QMARK_))
});
day8.re_frame_10x.view.components.simple_render = (function day8$re_frame_10x$view$components$simple_render(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15192 = arguments.length;
var i__4532__auto___15193 = (0);
while(true){
if((i__4532__auto___15193 < len__4531__auto___15192)){
args__4534__auto__.push((arguments[i__4532__auto___15193]));

var G__15194 = (i__4532__auto___15193 + (1));
i__4532__auto___15193 = G__15194;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.view.components.simple_render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

day8.re_frame_10x.view.components.simple_render.cljs$core$IFn$_invoke$arity$variadic = (function (data,path,p__15188){
var vec__15189 = p__15188;
var class$ = cljs.core.nth.call(null,vec__15189,(0),null);
var expanded_QMARK_ = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.atom.call(null,true);
return ((function (expanded_QMARK_,vec__15189,class$){
return (function (data__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["re-frame-10x--object",(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?"expanded":null),class$], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.deref.call(null,expanded_QMARK_);
if(cljs.core.truth_(and__3938__auto__)){
return ((typeof data__$1 === 'string') || ((data__$1 instanceof RegExp)) || (typeof data__$1 === 'number') || (cljs.core.boolean_QMARK_.call(null,data__$1)) || ((data__$1 == null)));
} else {
return and__3938__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),cljs.core.prn_str.call(null,data__$1)], null):(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?day8.re_frame_10x.view.components.jsonml__GT_hiccup.call(null,day8.re_frame_10x.view.components.cljs_devtools_header.call(null,data__$1),cljs.core.conj.call(null,path,(0))):null))], null)], null);
});
;})(expanded_QMARK_,vec__15189,class$))
});

day8.re_frame_10x.view.components.simple_render.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame_10x.view.components.simple_render.cljs$lang$applyTo = (function (seq15185){
var G__15186 = cljs.core.first.call(null,seq15185);
var seq15185__$1 = cljs.core.next.call(null,seq15185);
var G__15187 = cljs.core.first.call(null,seq15185__$1);
var seq15185__$2 = cljs.core.next.call(null,seq15185__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15186,G__15187,seq15185__$2);
});

day8.re_frame_10x.view.components.tag = (function day8$re_frame_10x$view$components$tag(class$,label){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),["rft-tag noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null),label], null)], null);
});
day8.re_frame_10x.view.components.highlight = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.core.adapt_react_class.call(null,(function (){var or__3949__auto__ = day8.re_frame_10x.view.components.global$module$react_highlight$js.default$;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return day8.re_frame_10x.view.components.global$module$react_highlight$js;
}
})());

//# sourceMappingURL=components.js.map
