goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___53826 = arguments.length;
var i__4830__auto___53827 = (0);
while(true){
if((i__4830__auto___53827 < len__4829__auto___53826)){
args__4835__auto__.push((arguments[i__4830__auto___53827]));

var G__53828 = (i__4830__auto___53827 + (1));
i__4830__auto___53827 = G__53828;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq53601){
var G__53602 = cljs.core.first(seq53601);
var seq53601__$1 = cljs.core.next(seq53601);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53602,seq53601__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__53603 = cljs.core.seq(sources);
var chunk__53604 = null;
var count__53605 = (0);
var i__53606 = (0);
while(true){
if((i__53606 < count__53605)){
var map__53613 = chunk__53604.cljs$core$IIndexed$_nth$arity$2(null,i__53606);
var map__53613__$1 = cljs.core.__destructure_map(map__53613);
var src = map__53613__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53613__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53613__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53613__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53613__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e53615){var e_53829 = e53615;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53829);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53829.message)].join('')));
}

var G__53830 = seq__53603;
var G__53831 = chunk__53604;
var G__53832 = count__53605;
var G__53833 = (i__53606 + (1));
seq__53603 = G__53830;
chunk__53604 = G__53831;
count__53605 = G__53832;
i__53606 = G__53833;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53603);
if(temp__5753__auto__){
var seq__53603__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53603__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53603__$1);
var G__53834 = cljs.core.chunk_rest(seq__53603__$1);
var G__53835 = c__4649__auto__;
var G__53836 = cljs.core.count(c__4649__auto__);
var G__53837 = (0);
seq__53603 = G__53834;
chunk__53604 = G__53835;
count__53605 = G__53836;
i__53606 = G__53837;
continue;
} else {
var map__53617 = cljs.core.first(seq__53603__$1);
var map__53617__$1 = cljs.core.__destructure_map(map__53617);
var src = map__53617__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53617__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53617__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53617__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53617__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e53618){var e_53838 = e53618;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53838);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53838.message)].join('')));
}

var G__53839 = cljs.core.next(seq__53603__$1);
var G__53840 = null;
var G__53841 = (0);
var G__53842 = (0);
seq__53603 = G__53839;
chunk__53604 = G__53840;
count__53605 = G__53841;
i__53606 = G__53842;
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
return null;
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
var seq__53622 = cljs.core.seq(js_requires);
var chunk__53623 = null;
var count__53624 = (0);
var i__53625 = (0);
while(true){
if((i__53625 < count__53624)){
var js_ns = chunk__53623.cljs$core$IIndexed$_nth$arity$2(null,i__53625);
var require_str_53843 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53843);


var G__53844 = seq__53622;
var G__53845 = chunk__53623;
var G__53846 = count__53624;
var G__53847 = (i__53625 + (1));
seq__53622 = G__53844;
chunk__53623 = G__53845;
count__53624 = G__53846;
i__53625 = G__53847;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53622);
if(temp__5753__auto__){
var seq__53622__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53622__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53622__$1);
var G__53848 = cljs.core.chunk_rest(seq__53622__$1);
var G__53849 = c__4649__auto__;
var G__53850 = cljs.core.count(c__4649__auto__);
var G__53851 = (0);
seq__53622 = G__53848;
chunk__53623 = G__53849;
count__53624 = G__53850;
i__53625 = G__53851;
continue;
} else {
var js_ns = cljs.core.first(seq__53622__$1);
var require_str_53852 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53852);


var G__53853 = cljs.core.next(seq__53622__$1);
var G__53854 = null;
var G__53855 = (0);
var G__53856 = (0);
seq__53622 = G__53853;
chunk__53623 = G__53854;
count__53624 = G__53855;
i__53625 = G__53856;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__53628){
var map__53630 = p__53628;
var map__53630__$1 = cljs.core.__destructure_map(map__53630);
var msg = map__53630__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53630__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53630__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53632(s__53633){
return (new cljs.core.LazySeq(null,(function (){
var s__53633__$1 = s__53633;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__53633__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__53638 = cljs.core.first(xs__6308__auto__);
var map__53638__$1 = cljs.core.__destructure_map(map__53638);
var src = map__53638__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53638__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53638__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__53633__$1,map__53638,map__53638__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__53630,map__53630__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53632_$_iter__53634(s__53635){
return (new cljs.core.LazySeq(null,((function (s__53633__$1,map__53638,map__53638__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__53630,map__53630__$1,msg,info,reload_info){
return (function (){
var s__53635__$1 = s__53635;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__53635__$1);
if(temp__5753__auto____$1){
var s__53635__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53635__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__53635__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__53637 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__53636 = (0);
while(true){
if((i__53636 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__53636);
cljs.core.chunk_append(b__53637,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__53857 = (i__53636 + (1));
i__53636 = G__53857;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53637),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53632_$_iter__53634(cljs.core.chunk_rest(s__53635__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53637),null);
}
} else {
var warning = cljs.core.first(s__53635__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53632_$_iter__53634(cljs.core.rest(s__53635__$2)));
}
} else {
return null;
}
break;
}
});})(s__53633__$1,map__53638,map__53638__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__53630,map__53630__$1,msg,info,reload_info))
,null,null));
});})(s__53633__$1,map__53638,map__53638__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__53630,map__53630__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53632(cljs.core.rest(s__53633__$1)));
} else {
var G__53858 = cljs.core.rest(s__53633__$1);
s__53633__$1 = G__53858;
continue;
}
} else {
var G__53859 = cljs.core.rest(s__53633__$1);
s__53633__$1 = G__53859;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__53645_53860 = cljs.core.seq(warnings);
var chunk__53646_53861 = null;
var count__53647_53862 = (0);
var i__53648_53863 = (0);
while(true){
if((i__53648_53863 < count__53647_53862)){
var map__53660_53865 = chunk__53646_53861.cljs$core$IIndexed$_nth$arity$2(null,i__53648_53863);
var map__53660_53866__$1 = cljs.core.__destructure_map(map__53660_53865);
var w_53867 = map__53660_53866__$1;
var msg_53868__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53660_53866__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53660_53866__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53660_53866__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53660_53866__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53871)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53869),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53870),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53868__$1)].join(''));


var G__53875 = seq__53645_53860;
var G__53876 = chunk__53646_53861;
var G__53877 = count__53647_53862;
var G__53878 = (i__53648_53863 + (1));
seq__53645_53860 = G__53875;
chunk__53646_53861 = G__53876;
count__53647_53862 = G__53877;
i__53648_53863 = G__53878;
continue;
} else {
var temp__5753__auto___53879 = cljs.core.seq(seq__53645_53860);
if(temp__5753__auto___53879){
var seq__53645_53881__$1 = temp__5753__auto___53879;
if(cljs.core.chunked_seq_QMARK_(seq__53645_53881__$1)){
var c__4649__auto___53882 = cljs.core.chunk_first(seq__53645_53881__$1);
var G__53883 = cljs.core.chunk_rest(seq__53645_53881__$1);
var G__53884 = c__4649__auto___53882;
var G__53885 = cljs.core.count(c__4649__auto___53882);
var G__53886 = (0);
seq__53645_53860 = G__53883;
chunk__53646_53861 = G__53884;
count__53647_53862 = G__53885;
i__53648_53863 = G__53886;
continue;
} else {
var map__53666_53887 = cljs.core.first(seq__53645_53881__$1);
var map__53666_53888__$1 = cljs.core.__destructure_map(map__53666_53887);
var w_53889 = map__53666_53888__$1;
var msg_53890__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53666_53888__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53666_53888__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53666_53888__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53666_53888__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53893)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53891),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53892),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53890__$1)].join(''));


var G__53894 = cljs.core.next(seq__53645_53881__$1);
var G__53895 = null;
var G__53896 = (0);
var G__53897 = (0);
seq__53645_53860 = G__53894;
chunk__53646_53861 = G__53895;
count__53647_53862 = G__53896;
i__53648_53863 = G__53897;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__53626_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__53626_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__53695){
var map__53696 = p__53695;
var map__53696__$1 = cljs.core.__destructure_map(map__53696);
var msg = map__53696__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53696__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__53698 = cljs.core.seq(updates);
var chunk__53700 = null;
var count__53701 = (0);
var i__53702 = (0);
while(true){
if((i__53702 < count__53701)){
var path = chunk__53700.cljs$core$IIndexed$_nth$arity$2(null,i__53702);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53762_53898 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53766_53899 = null;
var count__53767_53900 = (0);
var i__53768_53901 = (0);
while(true){
if((i__53768_53901 < count__53767_53900)){
var node_53902 = chunk__53766_53899.cljs$core$IIndexed$_nth$arity$2(null,i__53768_53901);
if(cljs.core.not(node_53902.shadow$old)){
var path_match_53903 = shadow.cljs.devtools.client.browser.match_paths(node_53902.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53903)){
var new_link_53904 = (function (){var G__53781 = node_53902.cloneNode(true);
G__53781.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53903),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53781;
})();
(node_53902.shadow$old = true);

(new_link_53904.onload = ((function (seq__53762_53898,chunk__53766_53899,count__53767_53900,i__53768_53901,seq__53698,chunk__53700,count__53701,i__53702,new_link_53904,path_match_53903,node_53902,path,map__53696,map__53696__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53902);
});})(seq__53762_53898,chunk__53766_53899,count__53767_53900,i__53768_53901,seq__53698,chunk__53700,count__53701,i__53702,new_link_53904,path_match_53903,node_53902,path,map__53696,map__53696__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53903], 0));

goog.dom.insertSiblingAfter(new_link_53904,node_53902);


var G__53905 = seq__53762_53898;
var G__53906 = chunk__53766_53899;
var G__53907 = count__53767_53900;
var G__53908 = (i__53768_53901 + (1));
seq__53762_53898 = G__53905;
chunk__53766_53899 = G__53906;
count__53767_53900 = G__53907;
i__53768_53901 = G__53908;
continue;
} else {
var G__53909 = seq__53762_53898;
var G__53910 = chunk__53766_53899;
var G__53911 = count__53767_53900;
var G__53912 = (i__53768_53901 + (1));
seq__53762_53898 = G__53909;
chunk__53766_53899 = G__53910;
count__53767_53900 = G__53911;
i__53768_53901 = G__53912;
continue;
}
} else {
var G__53915 = seq__53762_53898;
var G__53916 = chunk__53766_53899;
var G__53917 = count__53767_53900;
var G__53918 = (i__53768_53901 + (1));
seq__53762_53898 = G__53915;
chunk__53766_53899 = G__53916;
count__53767_53900 = G__53917;
i__53768_53901 = G__53918;
continue;
}
} else {
var temp__5753__auto___53919 = cljs.core.seq(seq__53762_53898);
if(temp__5753__auto___53919){
var seq__53762_53920__$1 = temp__5753__auto___53919;
if(cljs.core.chunked_seq_QMARK_(seq__53762_53920__$1)){
var c__4649__auto___53921 = cljs.core.chunk_first(seq__53762_53920__$1);
var G__53922 = cljs.core.chunk_rest(seq__53762_53920__$1);
var G__53923 = c__4649__auto___53921;
var G__53924 = cljs.core.count(c__4649__auto___53921);
var G__53925 = (0);
seq__53762_53898 = G__53922;
chunk__53766_53899 = G__53923;
count__53767_53900 = G__53924;
i__53768_53901 = G__53925;
continue;
} else {
var node_53926 = cljs.core.first(seq__53762_53920__$1);
if(cljs.core.not(node_53926.shadow$old)){
var path_match_53927 = shadow.cljs.devtools.client.browser.match_paths(node_53926.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53927)){
var new_link_53928 = (function (){var G__53782 = node_53926.cloneNode(true);
G__53782.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53927),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53782;
})();
(node_53926.shadow$old = true);

(new_link_53928.onload = ((function (seq__53762_53898,chunk__53766_53899,count__53767_53900,i__53768_53901,seq__53698,chunk__53700,count__53701,i__53702,new_link_53928,path_match_53927,node_53926,seq__53762_53920__$1,temp__5753__auto___53919,path,map__53696,map__53696__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53926);
});})(seq__53762_53898,chunk__53766_53899,count__53767_53900,i__53768_53901,seq__53698,chunk__53700,count__53701,i__53702,new_link_53928,path_match_53927,node_53926,seq__53762_53920__$1,temp__5753__auto___53919,path,map__53696,map__53696__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53927], 0));

goog.dom.insertSiblingAfter(new_link_53928,node_53926);


var G__53929 = cljs.core.next(seq__53762_53920__$1);
var G__53930 = null;
var G__53931 = (0);
var G__53932 = (0);
seq__53762_53898 = G__53929;
chunk__53766_53899 = G__53930;
count__53767_53900 = G__53931;
i__53768_53901 = G__53932;
continue;
} else {
var G__53933 = cljs.core.next(seq__53762_53920__$1);
var G__53934 = null;
var G__53935 = (0);
var G__53936 = (0);
seq__53762_53898 = G__53933;
chunk__53766_53899 = G__53934;
count__53767_53900 = G__53935;
i__53768_53901 = G__53936;
continue;
}
} else {
var G__53937 = cljs.core.next(seq__53762_53920__$1);
var G__53938 = null;
var G__53939 = (0);
var G__53940 = (0);
seq__53762_53898 = G__53937;
chunk__53766_53899 = G__53938;
count__53767_53900 = G__53939;
i__53768_53901 = G__53940;
continue;
}
}
} else {
}
}
break;
}


var G__53941 = seq__53698;
var G__53942 = chunk__53700;
var G__53943 = count__53701;
var G__53944 = (i__53702 + (1));
seq__53698 = G__53941;
chunk__53700 = G__53942;
count__53701 = G__53943;
i__53702 = G__53944;
continue;
} else {
var G__53945 = seq__53698;
var G__53946 = chunk__53700;
var G__53947 = count__53701;
var G__53948 = (i__53702 + (1));
seq__53698 = G__53945;
chunk__53700 = G__53946;
count__53701 = G__53947;
i__53702 = G__53948;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53698);
if(temp__5753__auto__){
var seq__53698__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53698__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53698__$1);
var G__53949 = cljs.core.chunk_rest(seq__53698__$1);
var G__53950 = c__4649__auto__;
var G__53951 = cljs.core.count(c__4649__auto__);
var G__53952 = (0);
seq__53698 = G__53949;
chunk__53700 = G__53950;
count__53701 = G__53951;
i__53702 = G__53952;
continue;
} else {
var path = cljs.core.first(seq__53698__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53783_53953 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53787_53954 = null;
var count__53788_53955 = (0);
var i__53789_53956 = (0);
while(true){
if((i__53789_53956 < count__53788_53955)){
var node_53957 = chunk__53787_53954.cljs$core$IIndexed$_nth$arity$2(null,i__53789_53956);
if(cljs.core.not(node_53957.shadow$old)){
var path_match_53958 = shadow.cljs.devtools.client.browser.match_paths(node_53957.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53958)){
var new_link_53959 = (function (){var G__53797 = node_53957.cloneNode(true);
G__53797.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53958),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53797;
})();
(node_53957.shadow$old = true);

(new_link_53959.onload = ((function (seq__53783_53953,chunk__53787_53954,count__53788_53955,i__53789_53956,seq__53698,chunk__53700,count__53701,i__53702,new_link_53959,path_match_53958,node_53957,path,seq__53698__$1,temp__5753__auto__,map__53696,map__53696__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53957);
});})(seq__53783_53953,chunk__53787_53954,count__53788_53955,i__53789_53956,seq__53698,chunk__53700,count__53701,i__53702,new_link_53959,path_match_53958,node_53957,path,seq__53698__$1,temp__5753__auto__,map__53696,map__53696__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53958], 0));

goog.dom.insertSiblingAfter(new_link_53959,node_53957);


var G__53960 = seq__53783_53953;
var G__53961 = chunk__53787_53954;
var G__53962 = count__53788_53955;
var G__53963 = (i__53789_53956 + (1));
seq__53783_53953 = G__53960;
chunk__53787_53954 = G__53961;
count__53788_53955 = G__53962;
i__53789_53956 = G__53963;
continue;
} else {
var G__53964 = seq__53783_53953;
var G__53965 = chunk__53787_53954;
var G__53966 = count__53788_53955;
var G__53967 = (i__53789_53956 + (1));
seq__53783_53953 = G__53964;
chunk__53787_53954 = G__53965;
count__53788_53955 = G__53966;
i__53789_53956 = G__53967;
continue;
}
} else {
var G__53968 = seq__53783_53953;
var G__53969 = chunk__53787_53954;
var G__53970 = count__53788_53955;
var G__53971 = (i__53789_53956 + (1));
seq__53783_53953 = G__53968;
chunk__53787_53954 = G__53969;
count__53788_53955 = G__53970;
i__53789_53956 = G__53971;
continue;
}
} else {
var temp__5753__auto___53972__$1 = cljs.core.seq(seq__53783_53953);
if(temp__5753__auto___53972__$1){
var seq__53783_53973__$1 = temp__5753__auto___53972__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53783_53973__$1)){
var c__4649__auto___53974 = cljs.core.chunk_first(seq__53783_53973__$1);
var G__53975 = cljs.core.chunk_rest(seq__53783_53973__$1);
var G__53976 = c__4649__auto___53974;
var G__53977 = cljs.core.count(c__4649__auto___53974);
var G__53978 = (0);
seq__53783_53953 = G__53975;
chunk__53787_53954 = G__53976;
count__53788_53955 = G__53977;
i__53789_53956 = G__53978;
continue;
} else {
var node_53979 = cljs.core.first(seq__53783_53973__$1);
if(cljs.core.not(node_53979.shadow$old)){
var path_match_53980 = shadow.cljs.devtools.client.browser.match_paths(node_53979.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53980)){
var new_link_53981 = (function (){var G__53798 = node_53979.cloneNode(true);
G__53798.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53980),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53798;
})();
(node_53979.shadow$old = true);

(new_link_53981.onload = ((function (seq__53783_53953,chunk__53787_53954,count__53788_53955,i__53789_53956,seq__53698,chunk__53700,count__53701,i__53702,new_link_53981,path_match_53980,node_53979,seq__53783_53973__$1,temp__5753__auto___53972__$1,path,seq__53698__$1,temp__5753__auto__,map__53696,map__53696__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53979);
});})(seq__53783_53953,chunk__53787_53954,count__53788_53955,i__53789_53956,seq__53698,chunk__53700,count__53701,i__53702,new_link_53981,path_match_53980,node_53979,seq__53783_53973__$1,temp__5753__auto___53972__$1,path,seq__53698__$1,temp__5753__auto__,map__53696,map__53696__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53980], 0));

goog.dom.insertSiblingAfter(new_link_53981,node_53979);


var G__53982 = cljs.core.next(seq__53783_53973__$1);
var G__53983 = null;
var G__53984 = (0);
var G__53985 = (0);
seq__53783_53953 = G__53982;
chunk__53787_53954 = G__53983;
count__53788_53955 = G__53984;
i__53789_53956 = G__53985;
continue;
} else {
var G__53986 = cljs.core.next(seq__53783_53973__$1);
var G__53987 = null;
var G__53988 = (0);
var G__53989 = (0);
seq__53783_53953 = G__53986;
chunk__53787_53954 = G__53987;
count__53788_53955 = G__53988;
i__53789_53956 = G__53989;
continue;
}
} else {
var G__53990 = cljs.core.next(seq__53783_53973__$1);
var G__53991 = null;
var G__53992 = (0);
var G__53993 = (0);
seq__53783_53953 = G__53990;
chunk__53787_53954 = G__53991;
count__53788_53955 = G__53992;
i__53789_53956 = G__53993;
continue;
}
}
} else {
}
}
break;
}


var G__53994 = cljs.core.next(seq__53698__$1);
var G__53995 = null;
var G__53996 = (0);
var G__53997 = (0);
seq__53698 = G__53994;
chunk__53700 = G__53995;
count__53701 = G__53996;
i__53702 = G__53997;
continue;
} else {
var G__53998 = cljs.core.next(seq__53698__$1);
var G__53999 = null;
var G__54000 = (0);
var G__54001 = (0);
seq__53698 = G__53998;
chunk__53700 = G__53999;
count__53701 = G__54000;
i__53702 = G__54001;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__53799){
var map__53800 = p__53799;
var map__53800__$1 = cljs.core.__destructure_map(map__53800);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53800__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__53801){
var map__53802 = p__53801;
var map__53802__$1 = cljs.core.__destructure_map(map__53802);
var _ = map__53802__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53802__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__53803,done,error){
var map__53804 = p__53803;
var map__53804__$1 = cljs.core.__destructure_map(map__53804);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53804__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__53805,done,error){
var map__53806 = p__53805;
var map__53806__$1 = cljs.core.__destructure_map(map__53806);
var msg = map__53806__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53806__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53806__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53806__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__53807){
var map__53808 = p__53807;
var map__53808__$1 = cljs.core.__destructure_map(map__53808);
var src = map__53808__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53808__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__53809 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__53809) : done.call(null,G__53809));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__53810){
var map__53811 = p__53810;
var map__53811__$1 = cljs.core.__destructure_map(map__53811);
var msg__$1 = map__53811__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53811__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e53812){var ex = e53812;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__53813){
var map__53814 = p__53813;
var map__53814__$1 = cljs.core.__destructure_map(map__53814);
var env = map__53814__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53814__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__53815){
var map__53816 = p__53815;
var map__53816__$1 = cljs.core.__destructure_map(map__53816);
var msg = map__53816__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53816__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__53822){
var map__53823 = p__53822;
var map__53823__$1 = cljs.core.__destructure_map(map__53823);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53823__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53823__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__53824){
var map__53825 = p__53824;
var map__53825__$1 = cljs.core.__destructure_map(map__53825);
var svc = map__53825__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53825__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
