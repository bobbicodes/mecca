// Compiled by ClojureScript 1.10.339 {}
goog.provide('zprint.zprint');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.zfns');
goog.require('zprint.ansi');
goog.require('zprint.config');
goog.require('zprint.zutil');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.zip');
/**
 * Produce a blank string of desired size.
 */
zprint.zprint.blanks = (function zprint$zprint$blanks(n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n," "));
});
/**
 * Produce a dot string of desired size.
 */
zprint.zprint.dots = (function zprint$zprint$dots(n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"."));
});
/**
 * error
 */
zprint.zprint.indent = (function zprint$zprint$indent(){
return null;
});
/**
 * Make a version of conj! that take multiple arguments.
 */
zprint.zprint.conj_it_BANG_ = (function zprint$zprint$conj_it_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11513 = arguments.length;
var i__4532__auto___11514 = (0);
while(true){
if((i__4532__auto___11514 < len__4531__auto___11513)){
args__4534__auto__.push((arguments[i__4532__auto___11514]));

var G__11515 = (i__4532__auto___11514 + (1));
i__4532__auto___11514 = G__11515;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (rest){
var out = cljs.core.first.call(null,rest);
var more = cljs.core.next.call(null,rest);
while(true){
if(more){
var G__11516 = cljs.core.conj_BANG_.call(null,out,cljs.core.first.call(null,more));
var G__11517 = cljs.core.next.call(null,more);
out = G__11516;
more = G__11517;
continue;
} else {
return out;
}
break;
}
});

zprint.zprint.conj_it_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
zprint.zprint.conj_it_BANG_.cljs$lang$applyTo = (function (seq11512){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11512));
});

/**
 * Do split for newlines, instead of using regular expressions.
 */
zprint.zprint.split_lf = (function zprint$zprint$split_lf(s){
var input = s;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,input)){
return out;
} else {
var next_lf = clojure.string.index_of.call(null,input,"\n");
var chunk = (cljs.core.truth_(next_lf)?cljs.core.subs.call(null,input,(0),next_lf):input);
var G__11518 = (cljs.core.truth_(next_lf)?cljs.core.subs.call(null,input,(next_lf + (1))):null);
var G__11519 = cljs.core.conj.call(null,out,chunk);
input = G__11518;
out = G__11519;
continue;
}
break;
}
});
/**
 * Do split for newlines, instead of using regular expressions.
 *   Maximum split is 2.
 */
zprint.zprint.split_lf_2 = (function zprint$zprint$split_lf_2(s){
var temp__5455__auto__ = clojure.string.index_of.call(null,s,"\n");
if(cljs.core.truth_(temp__5455__auto__)){
var next_lf = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,(0),next_lf),cljs.core.subs.call(null,s,(next_lf + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
}
});
zprint.zprint.zpmap = (function zprint$zprint$zpmap(var_args){
var G__11521 = arguments.length;
switch (G__11521) {
case 3:
return zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$3 = (function (options,f,coll){
return cljs.core.map.call(null,f,coll);
});

zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$4 = (function (options,f,coll1,coll2){
return cljs.core.map.call(null,f,coll1,coll2);
});

zprint.zprint.zpmap.cljs$lang$maxFixedArity = 4;

/**
 * Takes an option map and the return from zfuture.  If the
 *   options map has (:parallel? options) as true, then deref
 *   the value, otherwise just pass it through.
 */
zprint.zprint.zat = (function zprint$zprint$zat(options,value){
return value;
});
zprint.zprint.fzprint_dbg = cljs.core.atom.call(null,null);
/**
 * Accept a style-vec that we are about to hand to style-lines, and
 *   output it if called for, to aid in debugging.
 */
zprint.zprint.log_lines = (function zprint$zprint$log_lines(p__11523,dbg_output,ind,style_vec){
var map__11524 = p__11523;
var map__11524__$1 = ((((!((map__11524 == null)))?(((((map__11524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11524):map__11524);
var options = map__11524__$1;
var dbg_print_QMARK_ = cljs.core.get.call(null,map__11524__$1,new cljs.core.Keyword(null,"dbg-print?","dbg-print?",-660113872));
var dbg_indent = cljs.core.get.call(null,map__11524__$1,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778));
var in_hang_QMARK_ = cljs.core.get.call(null,map__11524__$1,new cljs.core.Keyword(null,"in-hang?","in-hang?",-1065695639));
if(cljs.core.truth_(dbg_print_QMARK_)){
if(cljs.core.truth_(style_vec)){
cljs.core.println.call(null,dbg_indent,dbg_output,"--------------","in-hang?",in_hang_QMARK_);

return cljs.core.println.call(null,cljs.core.apply.call(null,cljs.core.str,zprint.zprint.blanks.call(null,ind),cljs.core.map.call(null,cljs.core.first,style_vec)));
} else {
return cljs.core.println.call(null,dbg_indent,dbg_output,"--------------- no style-vec");
}
} else {
return null;
}
});
/**
 * Show this thing as a function?
 */
zprint.zprint.showfn_QMARK_ = (function zprint$zprint$showfn_QMARK_(fn_map,f){
if(!(typeof f === 'string')){
var f_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('');
var or__3949__auto__ = fn_map.call(null,f_str);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = cljs.core.re_find.call(null,/clojure/,f_str);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
if((f instanceof cljs.core.Symbol)){
try{var or__3949__auto____$2 = cljs.core.re_find.call(null,/clojure/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,f)))].join(''));
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return fn_map.call(null,cljs.core.name.call(null,f));
}
}catch (e11526){var e = e11526;
return null;
}} else {
return null;
}
}
}
} else {
return null;
}
});
/**
 * Show this thing as a user defined function?  Assumes that we
 *   have already handled any clojure defined functions!
 */
zprint.zprint.show_user_fn_QMARK_ = (function zprint$zprint$show_user_fn_QMARK_(options,f){
if(!(typeof f === 'string')){
var f_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('');
var user_fn_map = new cljs.core.Keyword(null,"user-fn-map","user-fn-map",-908243227).cljs$core$IFn$_invoke$arity$1(options);
var or__3949__auto__ = cljs.core.get.call(null,user_fn_map,f_str);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if((f instanceof cljs.core.Symbol)){
try{var or__3949__auto____$1 = !(cljs.core.empty_QMARK_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,f)))].join('')));
if(or__3949__auto____$1){
return or__3949__auto____$1;
} else {
return cljs.core.get.call(null,user_fn_map,cljs.core.name.call(null,f));
}
}catch (e11527){var e = e11527;
return null;
}} else {
return null;
}
}
} else {
return null;
}
});
zprint.zprint.right_separator_map = new cljs.core.PersistentArrayMap(null, 3, [")",(1),"]",(1),"}",(1)], null);
/**
 * Given the fn-style, is the first output good enough to be worth
 *   doing. p is pretty, which is typically hanging, and b is basic, which
 *   is typically flow. p-count is the number of elements in the hang.
 */
zprint.zprint.good_enough_QMARK_ = (function zprint$zprint$good_enough_QMARK_(caller,p__11528,fn_style,p_count,indent_diff,p__11529,p__11530){
var map__11531 = p__11528;
var map__11531__$1 = ((((!((map__11531 == null)))?(((((map__11531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11531):map__11531);
var options = map__11531__$1;
var map__11532 = cljs.core.get.call(null,map__11531__$1,new cljs.core.Keyword(null,"tuning","tuning",-48660925));
var map__11532__$1 = ((((!((map__11532 == null)))?(((((map__11532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11532):map__11532);
var hang_flow = cljs.core.get.call(null,map__11532__$1,new cljs.core.Keyword(null,"hang-flow","hang-flow",428126548));
var hang_type_flow = cljs.core.get.call(null,map__11532__$1,new cljs.core.Keyword(null,"hang-type-flow","hang-type-flow",-1585576590));
var hang_flow_limit = cljs.core.get.call(null,map__11532__$1,new cljs.core.Keyword(null,"hang-flow-limit","hang-flow-limit",389146586));
var general_hang_adjust = cljs.core.get.call(null,map__11532__$1,new cljs.core.Keyword(null,"general-hang-adjust","general-hang-adjust",-1631406987));
var hang_if_equal_flow_QMARK_ = cljs.core.get.call(null,map__11532__$1,new cljs.core.Keyword(null,"hang-if-equal-flow?","hang-if-equal-flow?",-1113113992));
var map__11533 = cljs.core.get.call(null,map__11531__$1,caller);
var map__11533__$1 = ((((!((map__11533 == null)))?(((((map__11533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11533):map__11533);
var hang_expand = cljs.core.get.call(null,map__11533__$1,new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559));
var hang_diff = cljs.core.get.call(null,map__11533__$1,new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424));
var hang_size = cljs.core.get.call(null,map__11533__$1,new cljs.core.Keyword(null,"hang-size","hang-size",-347944063));
var hang_adjust = cljs.core.get.call(null,map__11533__$1,new cljs.core.Keyword(null,"hang-adjust","hang-adjust",-613514382));
var width = cljs.core.get.call(null,map__11531__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rightcnt = cljs.core.get.call(null,map__11531__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var dbg_QMARK_ = cljs.core.get.call(null,map__11531__$1,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771));
var vec__11534 = p__11529;
var p_lines = cljs.core.nth.call(null,vec__11534,(0),null);
var p_maxwidth = cljs.core.nth.call(null,vec__11534,(1),null);
var p_length_seq = cljs.core.nth.call(null,vec__11534,(2),null);
var p_what = cljs.core.nth.call(null,vec__11534,(3),null);
var vec__11537 = p__11530;
var b_lines = cljs.core.nth.call(null,vec__11537,(0),null);
var b_maxwidth = cljs.core.nth.call(null,vec__11537,(1),null);
var _ = cljs.core.nth.call(null,vec__11537,(2),null);
var b_what = cljs.core.nth.call(null,vec__11537,(3),null);
var p_last_maxwidth = cljs.core.last.call(null,p_length_seq);
var hang_diff__$1 = (function (){var or__3949__auto__ = hang_diff;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})();
var hang_expand__$1 = (function (){var or__3949__auto__ = hang_expand;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return 1000.0;
}
})();
var hang_adjust__$1 = (function (){var or__3949__auto__ = hang_adjust;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return general_hang_adjust;
}
})();
var options__$1 = (cljs.core.truth_((function (){var or__3949__auto__ = p_what;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return b_what;
}
})())?cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771),true):options);
var result = ((cljs.core.not.call(null,b_lines))?true:(function (){var and__3938__auto__ = p_lines;
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = (p_last_maxwidth <= (width - zprint.zprint.fix_rightcnt.call(null,rightcnt)));
if(and__3938__auto____$1){
var and__3938__auto____$2 = (p_maxwidth <= width);
if(and__3938__auto____$2){
var or__3949__auto__ = (p_lines === (0));
if(or__3949__auto__){
return or__3949__auto__;
} else {
var and__3938__auto____$3 = (b_lines > (0));
if(and__3938__auto____$3){
var and__3938__auto____$4 = (p_count > (0));
if(and__3938__auto____$4){
if(cljs.core.truth_((function (){var and__3938__auto____$5 = cljs.core._EQ_.call(null,p_lines,b_lines);
if(and__3938__auto____$5){
return hang_if_equal_flow_QMARK_;
} else {
return and__3938__auto____$5;
}
})())){
return true;
} else {
var and__3938__auto____$5 = (((indent_diff <= hang_diff__$1))?true:(((p_lines - (1)) / p_count) <= hang_expand__$1));
if(and__3938__auto____$5){
var and__3938__auto____$6 = (cljs.core.truth_(hang_size)?(p_lines < hang_size):true);
if(and__3938__auto____$6){
var factor = ((cljs.core._EQ_.call(null,fn_style,new cljs.core.Keyword(null,"hang","hang",-1007256173)))?hang_type_flow:hang_flow);
if((p_lines > hang_flow_limit)){
return ((p_lines - (1)) <= b_lines);
} else {
return (((p_lines + hang_adjust__$1) / b_lines) < factor);
}
} else {
return and__3938__auto____$6;
}
} else {
return and__3938__auto____$5;
}
}
} else {
return and__3938__auto____$4;
}
} else {
return and__3938__auto____$3;
}
}
} else {
return and__3938__auto____$2;
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),(cljs.core.truth_(result)?"++++++":"XXXXXX"),"p-what",p_what,"good-enough? caller:",caller,"fn-style:",fn_style,"width:",width,"rightcnt:",rightcnt,"hang-expand:",hang_expand__$1,"p-count:",p_count,"p-lines:",p_lines,"p-maxwidth:",p_maxwidth,"indent-diff:",indent_diff,"hang-diff:",hang_diff__$1,"p-last-maxwidth:",p_last_maxwidth,"b-lines:",b_lines,"b-maxwidth:",b_maxwidth);
} else {
}

return result;
});
/**
 * Add :in-hang? true to the options map.
 */
zprint.zprint.in_hang = (function zprint$zprint$in_hang(options){
if(cljs.core.truth_(new cljs.core.Keyword(null,"in-hang?","in-hang?",-1065695639).cljs$core$IFn$_invoke$arity$1(options))){
return options;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"do-in-hang?","do-in-hang?",-1235364947).cljs$core$IFn$_invoke$arity$1(options))){
return cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"in-hang?","in-hang?",-1065695639),(function (){var or__3949__auto__ = new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return true;
}
})());
} else {
return options;
}
}
});
/**
 * Scan a collection, and return the number of nils or empty collections
 *   present (if any), and nil otherwise.
 */
zprint.zprint.contains_nil_QMARK_ = (function zprint$zprint$contains_nil_QMARK_(coll){
var n = cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__11543_SHARP_){
if(cljs.core.coll_QMARK_.call(null,p1__11543_SHARP_)){
return cljs.core.empty_QMARK_.call(null,p1__11543_SHARP_);
} else {
return (p1__11543_SHARP_ == null);
}
}),coll));
if(!((n === (0)))){
return n;
} else {
return null;
}
});
/**
 * Concatentate multiple sequences, but if any of them are nil, return nil.
 *   This version is 15-20% slower than the version below. Keeping it around
 *   just for illustrative purposes.
 */
zprint.zprint.concat_no_nil_alt = (function zprint$zprint$concat_no_nil_alt(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11545 = arguments.length;
var i__4532__auto___11546 = (0);
while(true){
if((i__4532__auto___11546 < len__4531__auto___11545)){
args__4534__auto__.push((arguments[i__4532__auto___11546]));

var G__11547 = (i__4532__auto___11546 + (1));
i__4532__auto___11546 = G__11547;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return zprint.zprint.concat_no_nil_alt.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

zprint.zprint.concat_no_nil_alt.cljs$core$IFn$_invoke$arity$variadic = (function (rest){
var coll = rest;
var out = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var c = cljs.core.first.call(null,coll);
if(cljs.core.not.call(null,c)){
return cljs.core.persistent_BANG_.call(null,out);
} else {
if(((((cljs.core.coll_QMARK_.call(null,c)) && (!(cljs.core.empty_QMARK_.call(null,c))))) || (!((c == null))))){
var G__11548 = cljs.core.next.call(null,coll);
var G__11549 = cljs.core.conj_BANG_.call(null,out,c);
coll = G__11548;
out = G__11549;
continue;
} else {
return null;
}
}
break;
}
});

zprint.zprint.concat_no_nil_alt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
zprint.zprint.concat_no_nil_alt.cljs$lang$applyTo = (function (seq11544){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11544));
});

/**
 * Concatentate multiple sequences, but if any of them are nil or empty
 *   collections, return nil.
 */
zprint.zprint.concat_no_nil = (function zprint$zprint$concat_no_nil(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11551 = arguments.length;
var i__4532__auto___11552 = (0);
while(true){
if((i__4532__auto___11552 < len__4531__auto___11551)){
args__4534__auto__.push((arguments[i__4532__auto___11552]));

var G__11553 = (i__4532__auto___11552 + (1));
i__4532__auto___11552 = G__11553;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic = (function (rest){
var result = cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.coll_QMARK_.call(null,o)){
if(cljs.core.empty_QMARK_.call(null,o)){
return cljs.core.reduced.call(null,null);
} else {
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,v,o);
}
} else {
if((o == null)){
return cljs.core.reduced.call(null,null);
} else {
return cljs.core.conj_BANG_.call(null,v,o);
}
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),rest);
if(cljs.core.truth_(result)){
return cljs.core.persistent_BANG_.call(null,result);
} else {
return null;
}
});

zprint.zprint.concat_no_nil.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
zprint.zprint.concat_no_nil.cljs$lang$applyTo = (function (seq11550){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11550));
});

/**
 * Ensure that whatever we have is a vector.
 */
zprint.zprint.force_vector = (function zprint$zprint$force_vector(coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return coll;
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,coll);
}
});
/**
 * Takes a string, and returns the fn-style if it is a keyword and
 *   without the : it can be found in the fn-map.
 */
zprint.zprint.keyword_fn_QMARK_ = (function zprint$zprint$keyword_fn_QMARK_(options,s){
var vec__11554 = clojure.string.split.call(null,s,/^:/);
var left = cljs.core.nth.call(null,vec__11554,(0),null);
var right = cljs.core.nth.call(null,vec__11554,(1),null);
if(cljs.core.truth_(right)){
return new cljs.core.Keyword(null,"fn-map","fn-map",565481146).cljs$core$IFn$_invoke$arity$1(options).call(null,right);
} else {
return null;
}
});
/**
 * Given the options map, return the max length.  This might be
 *   a constant number, but it might be based on the depth as well.
 *   Returns nil of there is no max-length set.
 */
zprint.zprint.get_max_length = (function zprint$zprint$get_max_length(p__11557){
var map__11558 = p__11557;
var map__11558__$1 = ((((!((map__11558 == null)))?(((((map__11558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11558):map__11558);
var options = map__11558__$1;
var max_length = cljs.core.get.call(null,map__11558__$1,new cljs.core.Keyword(null,"max-length","max-length",-254826109));
var depth = cljs.core.get.call(null,map__11558__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
if(cljs.core.truth_(max_length)){
if(cljs.core.vector_QMARK_.call(null,max_length)){
return cljs.core.nth.call(null,max_length,(function (){var x__4040__auto__ = (depth - (1));
var y__4041__auto__ = (cljs.core.count.call(null,max_length) - (1));
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})());
} else {
return max_length;
}
} else {
return null;
}
});
/**
 * Given an options map, return another options map with no
 *   :max-length key.  This is to that you can call a routine that
 *   normally deals with :max-length and get it to do the normal
 *   thing.
 */
zprint.zprint.no_max_length = (function zprint$zprint$no_max_length(options){
return cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"max-length","max-length",-254826109),(10000));
});
/**
 * Take the vector carrying the intermediate results, and
 *   do the right thing with a new string. Vector is
 *   [ 0 out - vector accumulating line lengths 
 *  1 cur-len - length of current line
 *  just-eol? - did we just do an eol?
 *  ]
 *   s - string to add to current line
 *   tag - element type of string (comment's don't count in length)
 *   eol? - should we terminate line after adding count of s
 */
zprint.zprint.accumulate_ll = (function zprint$zprint$accumulate_ll(count_comment_QMARK_,p__11560,s,tag,eol_QMARK_){
var vec__11561 = p__11560;
var out = cljs.core.nth.call(null,vec__11561,(0),null);
var cur_len = cljs.core.nth.call(null,vec__11561,(1),null);
var just_eol_QMARK_ = cljs.core.nth.call(null,vec__11561,(2),null);
var just_comment_QMARK_ = cljs.core.nth.call(null,vec__11561,(3),null);
var in$ = vec__11561;
var comment_QMARK_ = ((cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))));
var count_s = ((((comment_QMARK_) && (cljs.core.not.call(null,count_comment_QMARK_))))?(0):cljs.core.count.call(null,s));
if(cljs.core.truth_((function (){var or__3949__auto__ = (function (){var and__3938__auto__ = eol_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,(function (){var and__3938__auto____$1 = just_eol_QMARK_;
if(cljs.core.truth_(and__3938__auto____$1)){
return (count_s === (0));
} else {
return and__3938__auto____$1;
}
})());
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return comment_QMARK_;
}
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,out,(cur_len + count_s)),(0),true,comment_QMARK_], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [out,(cur_len + count_s),null,comment_QMARK_], null);

}
});
zprint.zprint.generate_ll = (function zprint$zprint$generate_ll(count_comment_QMARK_,p__11564,p__11565){
var vec__11566 = p__11564;
var out = cljs.core.nth.call(null,vec__11566,(0),null);
var cur_len = cljs.core.nth.call(null,vec__11566,(1),null);
var just_eol_QMARK_ = cljs.core.nth.call(null,vec__11566,(2),null);
var just_comment_QMARK_ = cljs.core.nth.call(null,vec__11566,(3),null);
var in$ = vec__11566;
var vec__11569 = p__11565;
var s = cljs.core.nth.call(null,vec__11569,(0),null);
var _ = cljs.core.nth.call(null,vec__11569,(1),null);
var tag = cljs.core.nth.call(null,vec__11569,(2),null);
var element = vec__11569;
var vec__11572 = ((((cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) || (cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"newline","newline",1790071323)))))?zprint.zprint.split_lf_2.call(null,s):(new cljs.core.List(null,s,null,(1),null)));
var l = cljs.core.nth.call(null,vec__11572,(0),null);
var r = cljs.core.nth.call(null,vec__11572,(1),null);
var in$__$1 = zprint.zprint.accumulate_ll.call(null,count_comment_QMARK_,in$,l,tag,!((r == null)));
var in$__$2 = ((cljs.core.empty_QMARK_.call(null,r))?in$__$1:zprint.zprint.accumulate_ll.call(null,count_comment_QMARK_,in$__$1,r,tag,null));
return in$__$2;
});
/**
 * Take a style-vec, and output a sequence of numbers, one for each
 *   line, which contains the actual length. Must take the current
 *   indent to have a prayer of getting this right, but it is used
 *   only for the first line.  The ind can be an integer or a seq of
 *   integers, in which case only the first integer is used. Newlines
 *   can come anywhere in an element in a style-vec, it will account
 *   for both sides.  Will break lines on comments even if no newlines
 *   in them.  This doesn't count the length of comment lines unless
 *   [:comment :count?] is true, so that we don't format based on
 *   comment size -- that is handled with the wrap-comments elsewhere.
 *   Note that only vectors with :whitespace, :indent, or :newline are scanned
 *   for newlines, and if consecutive newlines appear, only the first
 *   is counted as a newline -- the second is counted as a regular 
 *   character. A single comment is counted as two lines. Lots of edge
 *   conditions that are really quite important.
 */
zprint.zprint.line_lengths_iter = (function zprint$zprint$line_lengths_iter(options,ind,style_vec){
var count_comment_QMARK_ = new cljs.core.Keyword(null,"count?","count?",-122202128).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options));
var ind__$1 = ((cljs.core.coll_QMARK_.call(null,ind))?cljs.core.first.call(null,ind):ind);
var next_vec = style_vec;
var current_string = null;
var line_length = ind__$1;
var previous_comment_QMARK_ = null;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(((cljs.core.empty_QMARK_.call(null,next_vec)) && (cljs.core.empty_QMARK_.call(null,current_string)))){
if((((line_length === (0))) && (cljs.core.not.call(null,previous_comment_QMARK_)))){
return out;
} else {
if(cljs.core.truth_(previous_comment_QMARK_)){
return cljs.core.conj.call(null,out,line_length,(0));
} else {
return cljs.core.conj.call(null,out,line_length);

}
}
} else {
var advance_QMARK_ = cljs.core.empty_QMARK_.call(null,current_string);
var vec__11575 = ((advance_QMARK_)?cljs.core.first.call(null,next_vec):null);
var next_string = cljs.core.nth.call(null,vec__11575,(0),null);
var _ = cljs.core.nth.call(null,vec__11575,(1),null);
var tag = cljs.core.nth.call(null,vec__11575,(2),null);
var comment_QMARK_ = ((cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))));
var s = ((advance_QMARK_)?next_string:current_string);
var vec__11578 = (cljs.core.truth_(s)?((((comment_QMARK_) && (cljs.core.not.call(null,count_comment_QMARK_))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null):(cljs.core.truth_((function (){var or__3949__auto__ = ((advance_QMARK_) && (((cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) || (cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.call(null,tag,new cljs.core.Keyword(null,"indent","indent",-148200125))))));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return current_string;
}
})())?zprint.zprint.split_lf_2.call(null,s):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)
)):null);
var l = cljs.core.nth.call(null,vec__11578,(0),null);
var r = cljs.core.nth.call(null,vec__11578,(1),null);
var force_newline_QMARK_ = (function (){var and__3938__auto__ = previous_comment_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return !(cljs.core.empty_QMARK_.call(null,l));
} else {
return and__3938__auto__;
}
})();
var r__$1 = (cljs.core.truth_(force_newline_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join(''):r);
var l__$1 = (cljs.core.truth_(force_newline_QMARK_)?null:l);
var new_line_length = (line_length + cljs.core.count.call(null,l__$1));
var G__11581 = ((advance_QMARK_)?cljs.core.next.call(null,next_vec):next_vec);
var G__11582 = r__$1;
var G__11583 = (cljs.core.truth_(r__$1)?(0):new_line_length);
var G__11584 = comment_QMARK_;
var G__11585 = (cljs.core.truth_(r__$1)?cljs.core.conj.call(null,out,new_line_length):out);
next_vec = G__11581;
current_string = G__11582;
line_length = G__11583;
previous_comment_QMARK_ = G__11584;
out = G__11585;
continue;
}
break;
}
});
/**
 * Take a style-vec, and output a sequence of numbers, one for each
 *   line, which contains the actual length. Must take the current
 *   indent to have a prayer of getting this right, but it is used
 *   only for the first line.  The ind can be an integer or a seq of
 *   integers, in which case only the first integer is used. Newlines
 *   can come anywhere in an element in a style-vec, it will account
 *   for both sides.  Will break lines on comments even if no newlines
 *   in them.  This doesn't count the length of comment lines unless
 *   [:comment :count?] is true, so that we don't format based on
 *   comment size -- that is handled with the wrap-comments at the
 *   end. Note that only vectors with :whitespace or :indent are scanned
 *   for newlines, and if consecutive newlines appear, only the first
 *   is counted as a newline -- the second is counted as a regular 
 *   character.
 */
zprint.zprint.line_lengths = (function zprint$zprint$line_lengths(options,ind,style_vec){
var length_vec = cljs.core.first.call(null,(function (){var count_comment_QMARK_ = new cljs.core.Keyword(null,"count?","count?",-122202128).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options));
var vec__11586 = cljs.core.reduce.call(null,cljs.core.partial.call(null,zprint.zprint.generate_ll,count_comment_QMARK_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,((cljs.core.coll_QMARK_.call(null,ind))?cljs.core.first.call(null,ind):ind),null,null], null),style_vec);
var _ = cljs.core.nth.call(null,vec__11586,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__11586,(1),null);
var just_eol_QMARK_ = cljs.core.nth.call(null,vec__11586,(2),null);
var just_comment_QMARK_ = cljs.core.nth.call(null,vec__11586,(3),null);
var result = vec__11586;
if(cljs.core.truth_((function (){var and__3938__auto__ = just_eol_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,just_comment_QMARK_);
} else {
return and__3938__auto__;
}
})())){
return result;
} else {
return zprint.zprint.accumulate_ll.call(null,count_comment_QMARK_,cljs.core.assoc.call(null,result,(2),null),"",null,true);
}
})());
return length_vec;
});
/**
 * This looks at a style vec and doesn't do all that style-lines does.
 *   It just looks for a new-line in the strings, and returns true if it
 *   doesn't find one.
 */
zprint.zprint.single_line_QMARK_ = (function zprint$zprint$single_line_QMARK_(style_vec){
return cljs.core.not.call(null,cljs.core.reduce.call(null,(function (p1__11589_SHARP_,p2__11590_SHARP_){
var or__3949__auto__ = p1__11589_SHARP_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return p2__11590_SHARP_;
}
}),false,cljs.core.map.call(null,(function (p1__11591_SHARP_){
return clojure.string.includes_QMARK_.call(null,cljs.core.first.call(null,p1__11591_SHARP_),"\n");
}),style_vec)));
});
/**
 * Given a style-vec, come up with a string that gives some hint of 
 *   where this style-vec came from.
 */
zprint.zprint.find_what = (function zprint$zprint$find_what(style_vec){
var s_vec = style_vec;
while(true){
if(cljs.core.truth_(s_vec)){
var vec__11592 = cljs.core.first.call(null,s_vec);
var what = cljs.core.nth.call(null,vec__11592,(0),null);
var _ = cljs.core.nth.call(null,vec__11592,(1),null);
var this$ = cljs.core.nth.call(null,vec__11592,(2),null);
if(cljs.core._EQ_.call(null,this$,new cljs.core.Keyword(null,"element","element",1974019749))){
return what;
} else {
var G__11595 = cljs.core.next.call(null,s_vec);
s_vec = G__11595;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Take a style output, and tell us how many lines it takes to print it
 *   and the maximum width that it reaches. Returns 
 *   [<line-count> <max-width> [line-lengths]].
 *   Doesn't require any max-width inside the style-vec. Also returns the
 *   line lengths in case that is helpful (since we have them anyway).
 *   If (:dbg-ge options) has value, then uses find-what to see if what it
 *   finds matches the value, and if it does, place the value in the
 *   resulting vector.
 */
zprint.zprint.style_lines = (function zprint$zprint$style_lines(options,ind,style_vec){
if(cljs.core.truth_((function (){var and__3938__auto__ = style_vec;
if(cljs.core.truth_(and__3938__auto__)){
return ((!(cljs.core.empty_QMARK_.call(null,style_vec))) && (cljs.core.not.call(null,zprint.zprint.contains_nil_QMARK_.call(null,style_vec))));
} else {
return and__3938__auto__;
}
})())){
var lengths = zprint.zprint.line_lengths_iter.call(null,options,ind,style_vec);
var result = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,lengths),cljs.core.apply.call(null,cljs.core.max,lengths),lengths], null);
var dbg_ge = new cljs.core.Keyword(null,"dbg-ge","dbg-ge",257927017).cljs$core$IFn$_invoke$arity$1(options);
var what = (cljs.core.truth_((function (){var and__3938__auto__ = dbg_ge;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,zprint.zprint.find_what.call(null,style_vec),dbg_ge);
} else {
return and__3938__auto__;
}
})())?dbg_ge:null);
if(cljs.core.truth_(what)){
return cljs.core.conj.call(null,result,what);
} else {
return result;
}
} else {
return null;
}
});
/**
 * Given output from style-lines and options, see if it fits the width.  
 *   Return the number of lines it takes if it fits, nil otherwise.
 */
zprint.zprint.fzfit = (function zprint$zprint$fzfit(p__11596,p__11597){
var map__11598 = p__11596;
var map__11598__$1 = ((((!((map__11598 == null)))?(((((map__11598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11598):map__11598);
var options = map__11598__$1;
var width = cljs.core.get.call(null,map__11598__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rightcnt = cljs.core.get.call(null,map__11598__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var dbg_QMARK_ = cljs.core.get.call(null,map__11598__$1,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771));
var vec__11599 = p__11597;
var line_count = cljs.core.nth.call(null,vec__11599,(0),null);
var max_width = cljs.core.nth.call(null,vec__11599,(1),null);
var style_lines_return = vec__11599;
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzfit: fixed-rightcnt:",zprint.zprint.fix_rightcnt.call(null,rightcnt),"line-count:",line_count,"max-width:",max_width,"width:",width);
} else {
}

if(cljs.core.truth_(style_lines_return)){
if((max_width <= (width - zprint.zprint.fix_rightcnt.call(null,rightcnt)))){
return line_count;
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given the return from style-lines  and options, 
 *   return true if it fits on a single line.
 */
zprint.zprint.fzfit_one_line = (function zprint$zprint$fzfit_one_line(options,style_lines_return){
var lines = zprint.zprint.fzfit.call(null,options,style_lines_return);
return ((typeof lines === 'number') && (cljs.core._EQ_.call(null,lines,(1))));
});
/**
 * Increase the rightmost count, if any, and return one if not.
 */
zprint.zprint.rightmost = (function zprint$zprint$rightmost(options){
return cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070),(new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070).cljs$core$IFn$_invoke$arity$2(options,(0)) + (1)));
});
/**
 * Remove the rightmost count.
 */
zprint.zprint.not_rightmost = (function zprint$zprint$not_rightmost(options){
return cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
});
/**
 * Handle the complexity of commas and rightmost-pair with options.
 *   If it isn't a rightmost, it loses rightmost status.
 *   If it is a rightmost, and in the rightmost pair, it gain one rightmost
 *   since it has the right end thing (and we don't care about the comma).
 *   If it is the rightmost of the non-rightmost-pair, then the comma
 *   matters, and we handle that appropriately.  Whew!
 */
zprint.zprint.c_r_pair = (function zprint$zprint$c_r_pair(commas_QMARK_,rightmost_pair_QMARK_,rightmost_QMARK_,options){
if(cljs.core.not.call(null,rightmost_QMARK_)){
return zprint.zprint.not_rightmost.call(null,options);
} else {
if(cljs.core.truth_(rightmost_pair_QMARK_)){
return options;
} else {
if(cljs.core.truth_(commas_QMARK_)){
return zprint.zprint.rightmost.call(null,zprint.zprint.not_rightmost.call(null,options));
} else {
return zprint.zprint.not_rightmost.call(null,options);
}
}
}
});
/**
 * Handle issue with rightcnt.
 */
zprint.zprint.fix_rightcnt = (function zprint$zprint$fix_rightcnt(rightcnt){
if(typeof rightcnt === 'number'){
return rightcnt;
} else {
return (0);
}
});
zprint.zprint.str__GT_key = cljs.core.PersistentHashMap.fromArrays(["]","'",")","`","~@","~","#{","(","#(","{","}","[","#_","@"],[new cljs.core.Keyword(null,"bracket","bracket",-600276523),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"paren","paren",-294107600),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"hash-brace","hash-brace",-1522139685),new cljs.core.Keyword(null,"paren","paren",-294107600),new cljs.core.Keyword(null,"hash-paren","hash-paren",-1158425562),new cljs.core.Keyword(null,"brace","brace",-1705077624),new cljs.core.Keyword(null,"brace","brace",-1705077624),new cljs.core.Keyword(null,"bracket","bracket",-600276523),new cljs.core.Keyword(null,"uneval","uneval",1932037707),new cljs.core.Keyword(null,"deref","deref",-145586795)]);
/**
 * Look up the thing in the zprint-color-map.  Accepts keywords or
 *   strings.
 */
zprint.zprint.zcolor_map = (function zprint$zprint$zcolor_map(p__11603,key_or_str){
var map__11604 = p__11603;
var map__11604__$1 = ((((!((map__11604 == null)))?(((((map__11604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11604):map__11604);
var options = map__11604__$1;
var color_map = cljs.core.get.call(null,map__11604__$1,new cljs.core.Keyword(null,"color-map","color-map",-207789684));
return color_map.call(null,(((key_or_str instanceof cljs.core.Keyword))?key_or_str:zprint.zprint.str__GT_key.call(null,key_or_str)));
});
/**
 * Take a style-vec, and if hangflow? is true, return a
 *   vector [hang-or-flow style-vec], else return style-vec.
 *   But a nil style-vec returns nil.
 */
zprint.zprint.hangflow = (function zprint$zprint$hangflow(hangflow_QMARK_,hang_or_flow,style_vec){
if(cljs.core.truth_(style_vec)){
if(cljs.core.truth_(hangflow_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hang_or_flow,style_vec], null);
} else {
return style_vec;
}
} else {
return null;
}
});
/**
 * Try to hang something and if it doesn't hang at all, then flow it,
 *   but strongly prefer hang.  Has hang and flow indents, and fzfn is the
 *   fzprint-? function to use with zloc.  Callers need to know whether this
 *   was hang or flow, so it returns [{:hang | :flow} style-vec] all the time.
 */
zprint.zprint.fzprint_hang_unless_fail = (function zprint$zprint$fzprint_hang_unless_fail(options,hindent,findent,fzfn,zloc){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-unless-fail:",zprint.zfns.zstring.call(null,zprint.zfns.zfirst.call(null,zloc)));
} else {
}

var hanging = fzfn.call(null,zprint.zprint.in_hang.call(null,options),hindent,zloc);
var value__11486__auto__ = (cljs.core.truth_((function (){var and__3938__auto__ = hanging;
if(cljs.core.truth_(and__3938__auto__)){
return zprint.zprint.fzfit.call(null,options,zprint.zprint.style_lines.call(null,options,hindent,hanging));
} else {
return and__3938__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hang","hang",-1007256173),hanging], null):(function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-unless-fail: hang failed, doing flow");
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow","flow",590489032),zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,findent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),fzfn.call(null,options,findent,zloc))], null);
})()
);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-unless-fail: exit:",cljs.core.pr_str.call(null,value__11486__auto__));
} else {
}

return value__11486__auto__;
});
/**
 * Given a style-vec with exactly one thing in it, replace the color
 *   with whatever local color we have determined is correct.
 */
zprint.zprint.replace_color = (function zprint$zprint$replace_color(local_color,style_vec){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,style_vec),(1))){
var vec__11606 = style_vec;
var vec__11609 = cljs.core.nth.call(null,vec__11606,(0),null);
var string = cljs.core.nth.call(null,vec__11609,(0),null);
var color = cljs.core.nth.call(null,vec__11609,(1),null);
var element = cljs.core.nth.call(null,vec__11609,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [string,local_color,element], null)], null);
} else {
return style_vec;
}
});
/**
 * Print a single pair of things (though it might not be exactly a
 *   pair, given comments and :extend and the like), like bindings in
 *   a let, clauses in a cond, keys and values in a map.  Controlled
 *   by various maps, the key of which is caller.  This will return a
 *   style-vec (or nil), unless hangflow? is true, in which case it
 *   will return [:hang <style-vec>] or [:flow <style-vec>] so that
 *   the upstream folks know whether this was a hang or flow and can
 *   do the right thing based on that.
 */
zprint.zprint.fzprint_two_up = (function zprint$zprint$fzprint_two_up(caller,p__11612,ind,commas_QMARK_,justify_width,rightmost_pair_QMARK_,p__11613){
var map__11614 = p__11612;
var map__11614__$1 = ((((!((map__11614 == null)))?(((((map__11614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11614):map__11614);
var options = map__11614__$1;
var map__11615 = cljs.core.get.call(null,map__11614__$1,caller);
var map__11615__$1 = ((((!((map__11615 == null)))?(((((map__11615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11615):map__11615);
var hang_QMARK_ = cljs.core.get.call(null,map__11615__$1,new cljs.core.Keyword(null,"hang?","hang?",-579442854));
var dbg_local_QMARK_ = cljs.core.get.call(null,map__11615__$1,new cljs.core.Keyword(null,"dbg-local?","dbg-local?",-895545325));
var dbg_cnt_QMARK_ = cljs.core.get.call(null,map__11615__$1,new cljs.core.Keyword(null,"dbg-cnt?","dbg-cnt?",-1638028976));
var indent = cljs.core.get.call(null,map__11615__$1,new cljs.core.Keyword(null,"indent","indent",-148200125));
var indent_arg = cljs.core.get.call(null,map__11615__$1,new cljs.core.Keyword(null,"indent-arg","indent-arg",58691874));
var flow_QMARK_ = cljs.core.get.call(null,map__11615__$1,new cljs.core.Keyword(null,"flow?","flow?",96929057));
var key_color = cljs.core.get.call(null,map__11615__$1,new cljs.core.Keyword(null,"key-color","key-color",-209002572));
var key_depth_color = cljs.core.get.call(null,map__11615__$1,new cljs.core.Keyword(null,"key-depth-color","key-depth-color",1448522819));
var key_value_color = cljs.core.get.call(null,map__11615__$1,new cljs.core.Keyword(null,"key-value-color","key-value-color",676042889));
var one_line_QMARK_ = cljs.core.get.call(null,map__11614__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var dbg_QMARK_ = cljs.core.get.call(null,map__11614__$1,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771));
var dbg_indent = cljs.core.get.call(null,map__11614__$1,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778));
var in_hang_QMARK_ = cljs.core.get.call(null,map__11614__$1,new cljs.core.Keyword(null,"in-hang?","in-hang?",-1065695639));
var do_in_hang_QMARK_ = cljs.core.get.call(null,map__11614__$1,new cljs.core.Keyword(null,"do-in-hang?","do-in-hang?",-1235364947));
var map_depth = cljs.core.get.call(null,map__11614__$1,new cljs.core.Keyword(null,"map-depth","map-depth",-191378641));
var vec__11616 = p__11613;
var lloc = cljs.core.nth.call(null,vec__11616,(0),null);
var rloc = cljs.core.nth.call(null,vec__11616,(1),null);
var xloc = cljs.core.nth.call(null,vec__11616,(2),null);
var pair = vec__11616;
if(cljs.core.truth_(dbg_cnt_QMARK_)){
cljs.core.println.call(null,"two-up: caller:",caller,"hang?",hang_QMARK_,"dbg?",dbg_QMARK_);
} else {
}

if(cljs.core.truth_((function (){var or__3949__auto__ = dbg_QMARK_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return dbg_local_QMARK_;
}
})())){
cljs.core.println.call(null,(function (){var or__3949__auto__ = dbg_indent;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "";
}
})(),"==========================",["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3949__auto__ = dbg_indent;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "";
}
})())].join(''),"fzprint-two-up:",zprint.zfns.zstring.call(null,lloc),"caller:",caller,"count:",cljs.core.count.call(null,pair),"ind:",ind,"indent:",indent,"indent-arg:",indent_arg,"justify-width:",justify_width,"one-line?:",one_line_QMARK_,"hang?:",hang_QMARK_,"in-hang?",in_hang_QMARK_,"do-in-hang?",do_in_hang_QMARK_,"flow?",flow_QMARK_,"commas?",commas_QMARK_,"rightmost-pair?",rightmost_pair_QMARK_);
} else {
}

var local_hang_QMARK_ = (function (){var or__3949__auto__ = one_line_QMARK_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return hang_QMARK_;
}
})();
var indent__$1 = (function (){var or__3949__auto__ = indent;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return indent_arg;
}
})();
var local_options = ((cljs.core.not.call(null,local_hang_QMARK_))?cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111),true):options);
var loptions = zprint.zprint.c_r_pair.call(null,commas_QMARK_,rightmost_pair_QMARK_,null,options);
var roptions = zprint.zprint.c_r_pair.call(null,commas_QMARK_,rightmost_pair_QMARK_,new cljs.core.Keyword(null,"rightmost","rightmost",800279518),options);
var local_roptions = zprint.zprint.c_r_pair.call(null,commas_QMARK_,rightmost_pair_QMARK_,new cljs.core.Keyword(null,"rightmost","rightmost",800279518),local_options);
var value_color_map = (function (){var and__3938__auto__ = key_value_color;
if(cljs.core.truth_(and__3938__auto__)){
return key_value_color.call(null,zprint.zfns.zsexpr.call(null,lloc));
} else {
return and__3938__auto__;
}
})();
var local_roptions__$1 = (cljs.core.truth_(value_color_map)?zprint.config.merge_deep.call(null,local_roptions,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color-map","color-map",-207789684),value_color_map], null)):local_roptions);
var roptions__$1 = (cljs.core.truth_(value_color_map)?zprint.config.merge_deep.call(null,roptions,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color-map","color-map",-207789684),value_color_map], null)):roptions);
var modifier_set = new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1(options.call(null,caller));
var modifier_QMARK_ = (function (){var or__3949__auto__ = (function (){var and__3938__auto__ = modifier_set;
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = modifier_set.call(null,zprint.zfns.zstring.call(null,lloc));
if(cljs.core.truth_(and__3938__auto____$1)){
return (cljs.core.count.call(null,pair) > (2));
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return zprint.zprint.middle_element_QMARK_.call(null,options,rloc);
}
})();
var local_color = cljs.core.get.call(null,key_depth_color,(map_depth - (1)));
var local_color__$1 = (cljs.core.truth_(key_color)?key_color.call(null,zprint.zfns.zsexpr.call(null,lloc)):local_color);
var arg_1 = zprint.zprint.fzprint_STAR_.call(null,loptions,ind,lloc);
var arg_1__$1 = (cljs.core.truth_(local_color__$1)?zprint.zprint.replace_color.call(null,local_color__$1,arg_1):arg_1);
var vec__11621 = zprint.zprint.style_lines.call(null,options,ind,arg_1__$1);
var arg_1_line_count = cljs.core.nth.call(null,vec__11621,(0),null);
var arg_1_max_width = cljs.core.nth.call(null,vec__11621,(1),null);
var arg_1_lines = vec__11621;
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-two-up before modifier: arg-1-line-count:",arg_1_line_count,"arg-1-max-width:",arg_1_max_width):null);
var modifier_QMARK___$1 = (cljs.core.truth_((function (){var and__3938__auto__ = arg_1_line_count;
if(cljs.core.truth_(and__3938__auto__)){
return (arg_1_line_count > (1));
} else {
return and__3938__auto__;
}
})())?null:modifier_QMARK_);
var combined_arg_1 = (cljs.core.truth_(modifier_QMARK___$1)?zprint.zprint.concat_no_nil.call(null,arg_1__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[" "].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null),zprint.zprint.fzprint_STAR_.call(null,zprint.zprint.in_hang.call(null,loptions),(ind + arg_1_max_width),rloc)):arg_1__$1);
var arg_1__$2 = (cljs.core.truth_(combined_arg_1)?combined_arg_1:arg_1__$1);
var modifier_QMARK___$2 = (cljs.core.truth_(combined_arg_1)?modifier_QMARK___$1:null);
var vec__11624 = (cljs.core.truth_(combined_arg_1)?zprint.zprint.style_lines.call(null,options,ind,arg_1__$2):arg_1_lines);
var arg_1_line_count__$1 = cljs.core.nth.call(null,vec__11624,(0),null);
var arg_1_max_width__$1 = cljs.core.nth.call(null,vec__11624,(1),null);
var arg_1_lines__$1 = vec__11624;
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-two-up after modifier: arg-1-line-count:",arg_1_line_count__$1,"arg-1-max-width:",arg_1_max_width__$1):null);
var lloc__$1 = (cljs.core.truth_(modifier_QMARK___$2)?rloc:lloc);
var rloc__$1 = (cljs.core.truth_(modifier_QMARK___$2)?xloc:rloc);
var arg_1_fit_oneline_QMARK_ = (function (){var and__3938__auto__ = cljs.core.not.call(null,flow_QMARK_);
if(and__3938__auto__){
return zprint.zprint.fzfit_one_line.call(null,loptions,arg_1_lines__$1);
} else {
return and__3938__auto__;
}
})();
var arg_1_fit_QMARK_ = (function (){var or__3949__auto__ = arg_1_fit_oneline_QMARK_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.not.call(null,one_line_QMARK_)){
return zprint.zprint.fzfit.call(null,loptions,arg_1_lines__$1);
} else {
return null;
}
}
})();
var arg_1_width = ((function (){var or__3949__auto__ = arg_1_max_width__$1;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})() - ind);
if(cljs.core.truth_((function (){var and__3938__auto__ = arg_1__$2;
if(cljs.core.truth_(and__3938__auto__)){
var or__3949__auto__ = arg_1_fit_QMARK_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.not.call(null,in_hang_QMARK_);
}
} else {
return and__3938__auto__;
}
})())){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hang","hang",-1007256173),zprint.zprint.fzprint_STAR_.call(null,roptions__$1,ind,lloc__$1)], null);
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(2));
if(or__3949__auto__){
return or__3949__auto__;
} else {
var and__3938__auto__ = modifier_QMARK___$2;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(3));
} else {
return and__3938__auto__;
}
}
})())){
var hanging_width = (cljs.core.truth_(justify_width)?justify_width:arg_1_width);
var hanging_spaces = (cljs.core.truth_(justify_width)?((justify_width - arg_1_width) + (1)):(1));
var hanging_indent = (((1) + hanging_width) + ind);
var flow_indent = (indent__$1 + ind);
if(cljs.core.truth_((function (){var and__3938__auto__ = zprint.zfns.zstring.call(null,lloc__$1);
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = zprint.zprint.keyword_fn_QMARK_.call(null,options,zprint.zfns.zstring.call(null,lloc__$1));
if(cljs.core.truth_(and__3938__auto____$1)){
return zprint.zfns.zvector_QMARK_.call(null,rloc__$1);
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())){
var vec__11627 = zprint.zprint.fzprint_hang_unless_fail.call(null,loptions,hanging_indent,flow_indent,zprint.zprint.fzprint_binding_vec,rloc__$1);
var hang_or_flow = cljs.core.nth.call(null,vec__11627,(0),null);
var style_vec = cljs.core.nth.call(null,vec__11627,(1),null);
var arg_1__$3 = ((cljs.core._EQ_.call(null,hang_or_flow,new cljs.core.Keyword(null,"hang","hang",-1007256173)))?zprint.zprint.concat_no_nil.call(null,arg_1__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zprint.blanks.call(null,hanging_spaces),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null)):arg_1__$2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hang_or_flow,zprint.zprint.concat_no_nil.call(null,arg_1__$3,style_vec)], null);
} else {
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-two-up: before hang.  hanging tried?",(function (){var and__3938__auto__ = arg_1_fit_oneline_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,flow_QMARK_)) && ((flow_indent >= hanging_indent)));
} else {
return and__3938__auto__;
}
})()):null);
var hanging = (cljs.core.truth_((function (){var or__3949__auto__ = arg_1_fit_oneline_QMARK_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ((cljs.core.not.call(null,flow_QMARK_)) && ((flow_indent >= hanging_indent)));
}
})())?zprint.zprint.fzprint_STAR_.call(null,(((flow_indent < hanging_indent))?zprint.zprint.in_hang.call(null,local_roptions__$1):local_roptions__$1),hanging_indent,rloc__$1):null);
var hang_count = zprint.zfns.zcount.call(null,rloc__$1);
var ___$3 = zprint.zprint.log_lines.call(null,options,"fzprint-two-up: hanging:",hanging_indent,hanging);
var hanging_lines = zprint.zprint.style_lines.call(null,options,hanging_indent,hanging);
var fit_QMARK_ = zprint.zprint.fzfit_one_line.call(null,local_roptions__$1,hanging_lines);
var hanging_lines__$1 = (cljs.core.truth_(fit_QMARK_)?hanging_lines:(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.not.call(null,one_line_QMARK_);
if(and__3938__auto__){
return hang_QMARK_;
} else {
return and__3938__auto__;
}
})())?hanging_lines:null));
var ___$4 = zprint.zprint.log_lines.call(null,options,"fzprint-two-up: hanging-2:",hanging_indent,hanging);
var flow_it_QMARK_ = ((((((cljs.core.not.call(null,hanging_lines__$1)) && (cljs.core.not.call(null,one_line_QMARK_)))) || (cljs.core.not.call(null,(function (){var or__3949__auto__ = fit_QMARK_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return one_line_QMARK_;
}
})())))) && ((((flow_indent < hanging_indent)) || (cljs.core.not.call(null,hanging_lines__$1)))));
var ___$5 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-two-up: before flow. flow-it?",flow_it_QMARK_):null);
var flow = ((flow_it_QMARK_)?zprint.zprint.fzprint_STAR_.call(null,roptions__$1,flow_indent,rloc__$1):null);
var ___$6 = zprint.zprint.log_lines.call(null,options,"fzprint-two-up: flow:",(indent__$1 + ind),flow);
var flow_lines = zprint.zprint.style_lines.call(null,options,(indent__$1 + ind),flow);
if(cljs.core.truth_(dbg_local_QMARK_)){
cljs.core.prn.call(null,"fzprint-two-up: local-hang:",local_hang_QMARK_);

cljs.core.prn.call(null,"fzprint-two-up: one-line?:",one_line_QMARK_);

cljs.core.prn.call(null,"fzprint-two-up: hanging-indent:",hanging_indent);

cljs.core.prn.call(null,"fzprint-two-up: hanging-lines:",hanging_lines__$1);

cljs.core.prn.call(null,"fzprint-two-up: flow?:",flow_QMARK_);

cljs.core.prn.call(null,"fzprint-two-up: flow-it?:",flow_it_QMARK_);

cljs.core.prn.call(null,"fzprint-two-up: fit?:",fit_QMARK_);

cljs.core.prn.call(null,"fzprint-two-up: flow-indent:",flow_indent);

cljs.core.prn.call(null,"fzprint-two-up: hanging:",zprint.zfns.zstring.call(null,lloc__$1),hanging);

cljs.core.prn.call(null,"fzprint-two-up: (+ indent ind):",(indent__$1 + ind));

cljs.core.prn.call(null,"fzprint-two-up: flow:",zprint.zfns.zstring.call(null,lloc__$1),flow);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-two-up: before good-enough");
} else {
}

if(cljs.core.truth_(fit_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hang","hang",-1007256173),zprint.zprint.concat_no_nil.call(null,arg_1__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zprint.blanks.call(null,hanging_spaces),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null),hanging)], null);
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = hanging_lines__$1;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return flow_lines;
}
})())){
if(cljs.core.truth_(zprint.zprint.good_enough_QMARK_.call(null,caller,roptions__$1,new cljs.core.Keyword(null,"none-two-up","none-two-up",-457831686),hang_count,(hanging_indent - flow_indent),hanging_lines__$1,flow_lines))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hang","hang",-1007256173),zprint.zprint.concat_no_nil.call(null,arg_1__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zprint.blanks.call(null,hanging_spaces),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null),hanging)], null);
} else {
if(cljs.core.truth_(justify_width)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow","flow",590489032),zprint.zprint.concat_no_nil.call(null,arg_1__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,(indent__$1 + ind)))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),flow)], null);
}
}
} else {
return null;
}
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow","flow",590489032),zprint.zprint.concat_no_nil.call(null,arg_1__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,(indent__$1 + ind)))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.fzprint_flow_seq.call(null,options,(indent__$1 + ind),(cljs.core.truth_(modifier_QMARK___$2)?cljs.core.nnext.call(null,pair):cljs.core.next.call(null,pair)),new cljs.core.Keyword(null,"force-nl","force-nl",-755040826)))], null);

}
}
} else {
return null;
}
});
/**
 * Figure the width for a justification of a set of pairs in coll.  
 *   Also, decide if it makes any sense to justify the pairs at all.
 *   For instance, they all need to be one-line.
 */
zprint.zprint.fzprint_justify_width = (function zprint$zprint$fzprint_justify_width(caller,p__11635,ind,coll){
var map__11636 = p__11635;
var map__11636__$1 = ((((!((map__11636 == null)))?(((((map__11636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11636):map__11636);
var options = map__11636__$1;
var map__11637 = cljs.core.get.call(null,map__11636__$1,caller);
var map__11637__$1 = ((((!((map__11637 == null)))?(((((map__11637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11637):map__11637);
var justify_QMARK_ = cljs.core.get.call(null,map__11637__$1,new cljs.core.Keyword(null,"justify?","justify?",294994148));
var firsts = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (map__11636,map__11636__$1,options,map__11637,map__11637__$1,justify_QMARK_){
return (function (p1__11630_SHARP_){
if((cljs.core.count.call(null,p1__11630_SHARP_) > (1))){
return zprint.zprint.fzprint_STAR_.call(null,options,ind,cljs.core.first.call(null,p1__11630_SHARP_));
} else {
return null;
}
});})(map__11636,map__11636__$1,options,map__11637,map__11637__$1,justify_QMARK_))
,coll));
var style_seq = cljs.core.map.call(null,cljs.core.partial.call(null,zprint.zprint.style_lines,options,ind),firsts);
var each_one_line_QMARK_ = cljs.core.reduce.call(null,((function (firsts,style_seq,map__11636,map__11636__$1,options,map__11637,map__11637__$1,justify_QMARK_){
return (function (p1__11631_SHARP_,p2__11632_SHARP_){
if(cljs.core.truth_(p1__11631_SHARP_)){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p2__11632_SHARP_),(1));
} else {
return null;
}
});})(firsts,style_seq,map__11636,map__11636__$1,options,map__11637,map__11637__$1,justify_QMARK_))
,true,style_seq);
var justify_width = (cljs.core.truth_(each_one_line_QMARK_)?cljs.core.reduce.call(null,((function (firsts,style_seq,each_one_line_QMARK_,map__11636,map__11636__$1,options,map__11637,map__11637__$1,justify_QMARK_){
return (function (p1__11633_SHARP_,p2__11634_SHARP_){
var x__4037__auto__ = p1__11633_SHARP_;
var y__4038__auto__ = cljs.core.second.call(null,p2__11634_SHARP_);
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
});})(firsts,style_seq,each_one_line_QMARK_,map__11636,map__11636__$1,options,map__11637,map__11637__$1,justify_QMARK_))
,(0),style_seq):null);
if(cljs.core.truth_(justify_width)){
return (justify_width - ind);
} else {
return null;
}
});
/**
 * Take a size and a collection of vectors with two or more elements
 *   per vector.  The elements are zlocs, the vectors are not.  Return
 *   the remaining character count or nil if it for sure doesn't fit.
 *   In order to be sure it doesn't fit, this version doesn't assume
 *   *any* separators, so it really underestimates the size.
 */
zprint.zprint.fit_within_QMARK_ = (function zprint$zprint$fit_within_QMARK_(var_args){
var G__11641 = arguments.length;
switch (G__11641) {
case 3:
return zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (size,coll,depth){
return cljs.core.reduce.call(null,(function (size__$1,element){
var or__3949__auto__ = ((cljs.core._EQ_.call(null,depth,(0)))?zprint.zprint.fit_within_QMARK_.call(null,size__$1,element,(depth + (1))):(function (){var remaining = (size__$1 - cljs.core.count.call(null,zprint.zfns.zstring.call(null,element)));
if((remaining > (0))){
return remaining;
} else {
return null;
}
})());
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.reduced.call(null,null);
}
}),size,coll);
});

zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (size,coll){
return zprint.zprint.fit_within_QMARK_.call(null,size,coll,(0));
});

zprint.zprint.fit_within_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * Convert a hangflow style-vec to a regular style-vec.
 */
zprint.zprint.remove_hangflow = (function zprint$zprint$remove_hangflow(hf_style_vec){
if(cljs.core.truth_(hf_style_vec)){
return cljs.core.map.call(null,cljs.core.second,hf_style_vec);
} else {
return null;
}
});
/**
 * Accept a sequence of pairs, and map fzprint-two-up across those pairs.
 *   If you have :one-line? set, this will return nil if it is way over,
 *   but it can't accurately tell exactly what will fit on one line, since
 *   it doesn't know the separators and such.  So, :one-line? true is a
 *   performance optimization, so it doesn't do a whole huge map just to
 *   find out that it could not possibly have fit on one line.  So, this
 *   returns a sequence of style-vecs, where the indentation for the
 *   stuff inside of the pairs is already there, but the separators of
 *   the style-vecs (including indentation and commas) is done by the
 *   caller of fzprint-map-two-up. Always returns a sequence of vector pairs:
 *   [[:hang <style-vec-for-one-pair>] [:flow <style-vec-for-one-pair>] ...].
 *   If you want a style vec instead, call remove-hangflow on the return 
 *   from fzprint-map-two-up.  This will use one-line?, but not check to see
 *   that it actually fits.  If you care about that, then you should check the
 *   return yourself.  It will, however, make an estimate of whether or not
 *   it will fit and if it clearly doesn't, it will return a nil.
 */
zprint.zprint.fzprint_map_two_up = (function zprint$zprint$fzprint_map_two_up(caller,p__11643,ind,commas_QMARK_,coll){
var map__11644 = p__11643;
var map__11644__$1 = ((((!((map__11644 == null)))?(((((map__11644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11644):map__11644);
var options = map__11644__$1;
var map__11645 = cljs.core.get.call(null,map__11644__$1,caller);
var map__11645__$1 = ((((!((map__11645 == null)))?(((((map__11645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11645):map__11645);
var justify_QMARK_ = cljs.core.get.call(null,map__11645__$1,new cljs.core.Keyword(null,"justify?","justify?",294994148));
var force_nl_QMARK_ = cljs.core.get.call(null,map__11645__$1,new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462));
var width = cljs.core.get.call(null,map__11644__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rightcnt = cljs.core.get.call(null,map__11644__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var one_line_QMARK_ = cljs.core.get.call(null,map__11644__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var parallel_QMARK_ = cljs.core.get.call(null,map__11644__$1,new cljs.core.Keyword(null,"parallel?","parallel?",-25273892));
var caller_map = caller.call(null,options);
var len = cljs.core.count.call(null,coll);
var justify_width = (cljs.core.truth_((function (){var and__3938__auto__ = justify_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,one_line_QMARK_);
} else {
return and__3938__auto__;
}
})())?zprint.zprint.fzprint_justify_width.call(null,caller,options,ind,coll):null);
var caller_options = (cljs.core.truth_(justify_width)?options.call(null,caller):null);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"dbg-print?","dbg-print?",-660113872).cljs$core$IFn$_invoke$arity$1(options);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-map-two-up: one-line?",new cljs.core.Keyword(null,"one-line?","one-line?",2055953111).cljs$core$IFn$_invoke$arity$1(options),"justify?:",justify_QMARK_);
} else {
}

if(cljs.core.not.call(null,(function (){var and__3938__auto__ = one_line_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = force_nl_QMARK_;
if(cljs.core.truth_(and__3938__auto____$1)){
return (len > (1));
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())){
var justify_width__$1 = justify_width;
var justify_options = (cljs.core.truth_(justify_width__$1)?zprint.config.merge_deep.call(null,zprint.config.merge_deep.call(null,options,cljs.core.PersistentArrayMap.createAsIfByAssoc([caller,caller_options.call(null,new cljs.core.Keyword(null,"justify-hang","justify-hang",1083292243))])),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tuning","tuning",-48660925),caller_options.call(null,new cljs.core.Keyword(null,"justify-tuning","justify-tuning",-958931675))], null)):options);
while(true){
var beginning_coll = cljs.core.butlast.call(null,coll);
var beginning_remaining = (cljs.core.truth_(one_line_QMARK_)?zprint.zprint.fit_within_QMARK_.call(null,(width - ind),beginning_coll):true);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-map-two-up: remaining:",(width - ind),"beginning-remaining:",beginning_remaining):null);
var beginning = (cljs.core.truth_(beginning_remaining)?zprint.zprint.zpmap.call(null,options,cljs.core.partial.call(null,zprint.zprint.fzprint_two_up,caller,justify_options,ind,commas_QMARK_,justify_width__$1,null),beginning_coll):null);
var beginning__$1 = (cljs.core.truth_(zprint.zprint.contains_nil_QMARK_.call(null,beginning))?null:beginning);
var end_coll = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,coll)], null);
var end_remaining = (cljs.core.truth_(one_line_QMARK_)?(function (){var and__3938__auto__ = beginning__$1;
if(cljs.core.truth_(and__3938__auto__)){
return zprint.zprint.fit_within_QMARK_.call(null,(beginning_remaining - rightcnt),end_coll);
} else {
return and__3938__auto__;
}
})():true);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-map-two-up: beginning-remaining:",beginning_remaining,"rightcnt:",rightcnt,"end-remaining:",end_remaining):null);
var end = (cljs.core.truth_(end_remaining)?(function (){var temp__5457__auto__ = zprint.zprint.fzprint_two_up.call(null,caller,justify_options,ind,commas_QMARK_,justify_width__$1,new cljs.core.Keyword(null,"rightmost-pair","rightmost-pair",-39229380),cljs.core.first.call(null,end_coll));
if(cljs.core.truth_(temp__5457__auto__)){
var end_result = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [end_result], null);
} else {
return null;
}
})():null);
var result = ((cljs.core._EQ_.call(null,len,(1)))?end:zprint.zprint.concat_no_nil.call(null,beginning__$1,end)
);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-map-two-up: len:",len,"(nil? end):",(end == null),"end:",end,"(nil? beginning):",(beginning__$1 == null),"beginning:",beginning__$1,"(count end):",cljs.core.count.call(null,end),"(count beginnging):",cljs.core.count.call(null,beginning__$1),"justify-width:",justify_width__$1,"result:",result);
} else {
}

if(cljs.core.truth_((function (){var or__3949__auto__ = result;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.not.call(null,justify_width__$1);
}
})())){
return result;
} else {
var G__11648 = null;
var G__11649 = options;
justify_width__$1 = G__11648;
justify_options = G__11649;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Do a key comparison that works well for numbers as well as
 *   strings.
 */
zprint.zprint.compare_keys = (function zprint$zprint$compare_keys(x,y){
if(((typeof x === 'number') && (typeof y === 'number'))){
return cljs.core.compare.call(null,x,y);
} else {
return cljs.core.compare.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join(''));

}
});
/**
 * Do a key comparison that places ordered keys first.
 */
zprint.zprint.compare_ordered_keys = (function zprint$zprint$compare_ordered_keys(key_value,zdotdotdot,x,y){
if(cljs.core.truth_((function (){var and__3938__auto__ = key_value.call(null,x);
if(cljs.core.truth_(and__3938__auto__)){
return key_value.call(null,y);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.compare.call(null,key_value.call(null,x),key_value.call(null,y));
} else {
if(cljs.core.truth_(key_value.call(null,x))){
return (-1);
} else {
if(cljs.core.truth_(key_value.call(null,y))){
return (1);
} else {
if(cljs.core._EQ_.call(null,zdotdotdot,x)){
return (1);
} else {
if(cljs.core._EQ_.call(null,zdotdotdot,y)){
return (-1);
} else {
return zprint.zprint.compare_keys.call(null,x,y);

}
}
}
}
}
});
/**
 * A variety of sorting and ordering options for the output of
 *   partition-all-2-nc.  It can sort, which is the default, but if
 *   the caller has a key-order vector, it will extract any keys in
 *   that vector and place them first (in order) before sorting the
 *   other keys.  If sorting is not called for, does nothing.
 */
zprint.zprint.order_out = (function zprint$zprint$order_out(caller,p__11652,access,out){
var map__11653 = p__11652;
var map__11653__$1 = ((((!((map__11653 == null)))?(((((map__11653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11653):map__11653);
var options = map__11653__$1;
var map__11654 = cljs.core.get.call(null,map__11653__$1,caller);
var map__11654__$1 = ((((!((map__11654 == null)))?(((((map__11654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11654):map__11654);
var sort_QMARK_ = cljs.core.get.call(null,map__11654__$1,new cljs.core.Keyword(null,"sort?","sort?",-567661924));
var sort_in_code_QMARK_ = cljs.core.get.call(null,map__11654__$1,new cljs.core.Keyword(null,"sort-in-code?","sort-in-code?",111878497));
var key_order = cljs.core.get.call(null,map__11654__$1,new cljs.core.Keyword(null,"key-order","key-order",-356936372));
var key_value = cljs.core.get.call(null,map__11654__$1,new cljs.core.Keyword(null,"key-value","key-value",-34906839));
var in_code_QMARK_ = cljs.core.get.call(null,map__11653__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
if(cljs.core.truth_((function (){var and__3938__auto__ = sort_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
if(cljs.core.truth_(in_code_QMARK_)){
return sort_in_code_QMARK_;
} else {
return true;
}
} else {
return and__3938__auto__;
}
})())){
return cljs.core.sort.call(null,((function (map__11653,map__11653__$1,options,map__11654,map__11654__$1,sort_QMARK_,sort_in_code_QMARK_,key_order,key_value,in_code_QMARK_){
return (function (p1__11650_SHARP_,p2__11651_SHARP_){
return cljs.core.partial.call(null,zprint.zprint.compare_ordered_keys,(function (){var or__3949__auto__ = key_value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),zprint.zfns.zdotdotdot.call(null)).call(null,zprint.zfns.zsexpr.call(null,access.call(null,p1__11650_SHARP_)),zprint.zfns.zsexpr.call(null,access.call(null,p2__11651_SHARP_)));
});})(map__11653,map__11653__$1,options,map__11654,map__11654__$1,sort_QMARK_,sort_in_code_QMARK_,key_order,key_value,in_code_QMARK_))
,out);
} else {
return out;
}
});
/**
 * This checks to see if an element should be considered part of a
 *   pair if it comes between other elements, and a single element on
 *   its own if it would otherwise be the first part of a pair.  Mostly
 *   this will trigger on comments, but a #_(...) element will also
 *   trigger this.
 */
zprint.zprint.pair_element_QMARK_ = (function zprint$zprint$pair_element_QMARK_(zloc){
var or__3949__auto__ = zprint.zfns.zcomment_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return zprint.zfns.zuneval_QMARK_.call(null,zloc);
}
});
/**
 * This checks to see if an element should be considered the middle element
 *   of a pair.  At some point, we can expand this, but for now there is only
 *   one middle element.
 */
zprint.zprint.middle_element_QMARK_ = (function zprint$zprint$middle_element_QMARK_(p__11657,zloc){
var map__11658 = p__11657;
var map__11658__$1 = ((((!((map__11658 == null)))?(((((map__11658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11658):map__11658);
var options = map__11658__$1;
var in_code_QMARK_ = cljs.core.get.call(null,map__11658__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
if(cljs.core._EQ_.call(null,in_code_QMARK_,"condp")){
return cljs.core._EQ_.call(null,zprint.zfns.zstring.call(null,zloc),":>>");
} else {
return null;
}
});
/**
 * If given a non-collection, simply does a dissoc of the key, but
 *   if given a sequence of keys, will remove the final one.
 */
zprint.zprint.remove_key_seq = (function zprint$zprint$remove_key_seq(m,ks){
if(cljs.core.coll_QMARK_.call(null,ks)){
var this_key = cljs.core.first.call(null,ks);
var next_key = cljs.core.next.call(null,ks);
if(next_key){
var removed_map = zprint.zprint.remove_key_seq.call(null,cljs.core.get.call(null,m,this_key),cljs.core.next.call(null,ks));
if(cljs.core.empty_QMARK_.call(null,removed_map)){
return cljs.core.dissoc.call(null,m,this_key);
} else {
return cljs.core.assoc.call(null,m,this_key,removed_map);
}
} else {
return cljs.core.dissoc.call(null,m,this_key);
}
} else {
return cljs.core.dissoc.call(null,m,ks);
}
});
/**
 * Given a map and a key sequence, remove that key sequence if
 *   it appears in the map, and terminate the reduce if it changes
 *   the map.
 */
zprint.zprint.ignore_key_seq_silent = (function zprint$zprint$ignore_key_seq_silent(m,ks){
if(cljs.core.coll_QMARK_.call(null,ks)){
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,m,ks,new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411)),new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411))){
return m;
} else {
return zprint.zprint.remove_key_seq.call(null,m,ks);
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,m,ks,new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411)),new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411))){
return m;
} else {
return cljs.core.dissoc.call(null,m,ks);
}
}
});
/**
 * Given a map and a key sequence, remove that key sequence if
 *   it appears in the map leaving behind a key :zprint-ignored, 
 *   and terminate the reduce if it changes the map.
 */
zprint.zprint.ignore_key_seq = (function zprint$zprint$ignore_key_seq(m,ks){
if(cljs.core.coll_QMARK_.call(null,ks)){
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,m,ks,new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411)),new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411))){
return m;
} else {
return cljs.core.assoc_in.call(null,m,ks,new cljs.core.Keyword(null,"zprint-ignored","zprint-ignored",434436784));
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,m,ks,new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411)),new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411))){
return m;
} else {
return cljs.core.assoc.call(null,m,ks,new cljs.core.Keyword(null,"zprint-ignored","zprint-ignored",434436784));
}
}
});
/**
 * Take a map and remove any of the key sequences specified from it.
 *   Note that this only works for sexpressions, not for actual zippers.
 */
zprint.zprint.map_ignore = (function zprint$zprint$map_ignore(caller,p__11660,zloc){
var map__11661 = p__11660;
var map__11661__$1 = ((((!((map__11661 == null)))?(((((map__11661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11661):map__11661);
var options = map__11661__$1;
var map__11662 = cljs.core.get.call(null,map__11661__$1,caller);
var map__11662__$1 = ((((!((map__11662 == null)))?(((((map__11662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11662):map__11662);
var key_ignore = cljs.core.get.call(null,map__11662__$1,new cljs.core.Keyword(null,"key-ignore","key-ignore",75506668));
var key_ignore_silent = cljs.core.get.call(null,map__11662__$1,new cljs.core.Keyword(null,"key-ignore-silent","key-ignore-silent",-1720115060));
var ignored_silent = (cljs.core.truth_(key_ignore_silent)?cljs.core.reduce.call(null,zprint.zprint.ignore_key_seq_silent,zloc,key_ignore_silent):zloc);
var ignored = (cljs.core.truth_(key_ignore)?cljs.core.reduce.call(null,zprint.zprint.ignore_key_seq,ignored_silent,key_ignore):ignored_silent);
return ignored;
});
/**
 * Input is (zseqnws zloc) where one assumes that these are pairs.
 *   Thus, a seq of zlocs.  Output is a sequence of seqs, where the
 *   seqs are usually pairs, but might be single things.  Doesn't pair
 *   up comments or #_(...) unevaled sexpressions.  The ones before
 *   the first part of a pair come as a single element in what would
 *   usually be a pair, and the ones between the first and second parts
 *   of a pair come inside the pair.  There may be an arbitrary number
 *   of elements between the first and second elements of the pair
 *   (one per line).  If there are any comments or unevaled sexpressions,
 *   don't sort the keys, as we might lose track of where the comments
 *   or unevaled s-expressions go.
 */
zprint.zprint.partition_all_2_nc = (function zprint$zprint$partition_all_2_nc(options,coll){
if(cljs.core.empty_QMARK_.call(null,coll)){
return null;
} else {
var max_length = zprint.zprint.get_max_length.call(null,options);
var remaining = coll;
var no_sort_QMARK_ = null;
var index = (0);
var out = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.not.call(null,remaining)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [no_sort_QMARK_,cljs.core.persistent_BANG_.call(null,out)], null);
} else {
var vec__11666 = (cljs.core.truth_(zprint.zprint.pair_element_QMARK_.call(null,cljs.core.first.call(null,remaining)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next.call(null,remaining),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,remaining)], null),true], null):(cljs.core.truth_((function (){var or__3949__auto__ = zprint.zprint.pair_element_QMARK_.call(null,cljs.core.second.call(null,remaining));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return zprint.zprint.middle_element_QMARK_.call(null,options,cljs.core.second.call(null,remaining));
}
})())?(function (){var vec__11669 = cljs.core.split_with.call(null,((function (remaining,no_sort_QMARK_,index,out,max_length){
return (function (p1__11665_SHARP_){
var or__3949__auto__ = zprint.zprint.pair_element_QMARK_.call(null,p1__11665_SHARP_);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return zprint.zprint.middle_element_QMARK_.call(null,options,p1__11665_SHARP_);
}
});})(remaining,no_sort_QMARK_,index,out,max_length))
,cljs.core.next.call(null,remaining));
var comment_seq = cljs.core.nth.call(null,vec__11669,(0),null);
var rest_seq = cljs.core.nth.call(null,vec__11669,(1),null);
if(cljs.core.truth_(cljs.core.first.call(null,rest_seq))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next.call(null,rest_seq),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,remaining)], null),comment_seq,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rest_seq)], null))),true], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next.call(null,remaining),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,remaining)], null),true], null);
}
})():((cljs.core._EQ_.call(null,cljs.core.count.call(null,remaining),(1)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next.call(null,remaining),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,remaining)], null),null], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next.call(null,cljs.core.next.call(null,remaining)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,remaining),cljs.core.second.call(null,remaining)], null),null], null)
)));
var new_remaining = cljs.core.nth.call(null,vec__11666,(0),null);
var pair_vec = cljs.core.nth.call(null,vec__11666,(1),null);
var new_no_sort_QMARK_ = cljs.core.nth.call(null,vec__11666,(2),null);
var G__11672 = ((((index + (1)) < max_length))?new_remaining:(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core._EQ_.call(null,(index + (1)),max_length);
if(and__3938__auto__){
return new_remaining;
} else {
return and__3938__auto__;
}
})())?(new cljs.core.List(null,zprint.zfns.zdotdotdot.call(null),null,(1),null)):null
));
var G__11673 = (function (){var or__3949__auto__ = no_sort_QMARK_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new_no_sort_QMARK_;
}
})();
var G__11674 = (index + (1));
var G__11675 = cljs.core.conj_BANG_.call(null,out,pair_vec);
remaining = G__11672;
no_sort_QMARK_ = G__11673;
index = G__11674;
out = G__11675;
continue;
}
break;
}
}
});
/**
 * Take a seq, and if it is contains a single symbol, simply return
 *   it in another seq.  If it contains something else, remove any non
 *   collections off of the end and return them in their own double seqs,
 *   as well as return the remainder (the beginning) as a double seq.
 */
zprint.zprint.cleave_end = (function zprint$zprint$cleave_end(coll){
if(cljs.core.truth_((function (){var or__3949__auto__ = zprint.zfns.zsymbol_QMARK_.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return zprint.zfns.zreader_cond_w_symbol_QMARK_.call(null,cljs.core.first.call(null,coll));
}
})())){
return (new cljs.core.List(null,coll,null,(1),null));
} else {
var rev_seq = cljs.core.reverse.call(null,coll);
var vec__11677 = cljs.core.split_with.call(null,((function (rev_seq){
return (function (p1__11676_SHARP_){
return cljs.core.not.call(null,(function (){var or__3949__auto__ = zprint.zfns.zcoll_QMARK_.call(null,p1__11676_SHARP_);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return zprint.zfns.zreader_cond_w_coll_QMARK_.call(null,p1__11676_SHARP_);
}
})());
});})(rev_seq))
,rev_seq);
var split_non_coll = cljs.core.nth.call(null,vec__11677,(0),null);
var _ = cljs.core.nth.call(null,vec__11677,(1),null);
var split_non_coll__$1 = cljs.core.map.call(null,cljs.core.list,cljs.core.reverse.call(null,split_non_coll));
var remainder = cljs.core.take.call(null,(cljs.core.count.call(null,coll) - cljs.core.count.call(null,split_non_coll__$1)),coll);
if(cljs.core.empty_QMARK_.call(null,remainder)){
return split_non_coll__$1;
} else {
return cljs.core.concat.call(null,(new cljs.core.List(null,remainder,null,(1),null)),split_non_coll__$1);
}
}
});
/**
 * Similar to partition-all-2-nc, but instead of trying to pair things
 *   up (modulo comments and unevaled expressions), this begins things
 *   with a symbol, and then accumulates collections until the next symbol.
 *   Returns a seq of seqs, where the first thing in each internal seq is
 *   a protocol and the remaining thing in that seq are the expressions that
 *   follow.  If there is a single thing, it is returned in its own internal
 *   seq. ((P (foo [this a) (bar-me [this] b) (barx [this y] (+ c y))) ...)
 *   Made harder by the fact that the symbol might be inside of a #?() reader
 *   conditional.  It handles comments before symbols on the symbol indent, 
 *   and the comments before the collections on the collection indent.  
 *   Since it doesn't know how many collections there are, this is not trivial.  
 *   Must be called with a sequence of z-things
 */
zprint.zprint.partition_all_sym = (function zprint$zprint$partition_all_sym(options,modifier_set,coll){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"partition-all-sym: coll:",cljs.core.map.call(null,zprint.zfns.zstring,coll));
} else {
}

var part_sym = cljs.core.partition_by.call(null,(function (p1__11680_SHARP_){
var or__3949__auto__ = zprint.zfns.zsymbol_QMARK_.call(null,p1__11680_SHARP_);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = zprint.zfns.znil_QMARK_.call(null,p1__11680_SHARP_);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return zprint.zfns.zreader_cond_w_symbol_QMARK_.call(null,p1__11680_SHARP_);
}
}
}),coll);
var split_non_coll = cljs.core.mapcat.call(null,zprint.zprint.cleave_end,part_sym);
var remaining = split_non_coll;
var out = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_.call(null,remaining)){
return cljs.core.persistent_BANG_.call(null,out);
} else {
var vec__11681 = (cljs.core.truth_((function (){var and__3938__auto__ = (function (){var or__3949__auto__ = zprint.zfns.zsymbol_QMARK_.call(null,cljs.core.ffirst.call(null,remaining));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = zprint.zfns.znil_QMARK_.call(null,cljs.core.ffirst.call(null,remaining));
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return zprint.zfns.zreader_cond_w_symbol_QMARK_.call(null,cljs.core.ffirst.call(null,remaining));
}
}
})();
if(cljs.core.truth_(and__3938__auto__)){
return !(cljs.core.empty_QMARK_.call(null,cljs.core.second.call(null,remaining)));
} else {
return and__3938__auto__;
}
})())?((cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.first.call(null,remaining)),(1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nthnext.call(null,remaining,(2)),cljs.core.conj_BANG_.call(null,out,cljs.core.concat.call(null,cljs.core.first.call(null,remaining),cljs.core.second.call(null,remaining)))], null):(cljs.core.truth_((function (){var and__3938__auto__ = modifier_set;
if(cljs.core.truth_(and__3938__auto__)){
return modifier_set.call(null,zprint.zfns.zstring.call(null,cljs.core.ffirst.call(null,remaining)));
} else {
return and__3938__auto__;
}
})())?((cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.first.call(null,remaining)),(2)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nthnext.call(null,remaining,(2)),cljs.core.conj_BANG_.call(null,out,cljs.core.concat.call(null,cljs.core.first.call(null,remaining),cljs.core.second.call(null,remaining)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.next.call(null,cljs.core.next.call(null,cljs.core.first.call(null,remaining))))?cljs.core.cons.call(null,cljs.core.next.call(null,cljs.core.next.call(null,cljs.core.first.call(null,remaining))),cljs.core.next.call(null,remaining)):cljs.core.next.call(null,remaining)),cljs.core.conj_BANG_.call(null,out,(new cljs.core.List(null,cljs.core.ffirst.call(null,remaining),(new cljs.core.List(null,cljs.core.second.call(null,cljs.core.first.call(null,remaining)),null,(1),null)),(2),null)))], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cons.call(null,cljs.core.next.call(null,cljs.core.first.call(null,remaining)),cljs.core.next.call(null,remaining)),cljs.core.conj_BANG_.call(null,out,(new cljs.core.List(null,cljs.core.ffirst.call(null,remaining),null,(1),null)))], null))):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next.call(null,remaining),cljs.core.conj_BANG_.call(null,out,cljs.core.first.call(null,remaining))], null)
);
var next_remaining = cljs.core.nth.call(null,vec__11681,(0),null);
var new_out = cljs.core.nth.call(null,vec__11681,(1),null);
var G__11684 = next_remaining;
var G__11685 = new_out;
remaining = G__11684;
out = G__11685;
continue;
}
break;
}
});
/**
 * Create an r-str-vec with, possibly, a newline at the beginning if
 *   the last thing before it is a comment.
 */
zprint.zprint.rstr_vec = (function zprint$zprint$rstr_vec(var_args){
var G__11687 = arguments.length;
switch (G__11687) {
case 5:
return zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$5 = (function (options,ind,zloc,r_str,r_type){
var nl = (cljs.core.truth_(zprint.zfns.zcomment_QMARK_.call(null,zprint.zfns.zlast.call(null,zloc)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,ind))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null):null);
return cljs.core.concat.call(null,nl,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_str,zprint.zprint.zcolor_map.call(null,options,(function (){var or__3949__auto__ = r_type;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return r_str;
}
})()),(function (){var or__3949__auto__ = r_type;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"right","right",-452581833);
}
})()], null)], null));
});

zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4 = (function (options,ind,zloc,r_str){
return zprint.zprint.rstr_vec.call(null,options,ind,zloc,r_str,null);
});

zprint.zprint.rstr_vec.cljs$lang$maxFixedArity = 5;

zprint.zprint.fzprint_binding_vec = (function zprint$zprint$fzprint_binding_vec(p__11689,ind,zloc){
var map__11690 = p__11689;
var map__11690__$1 = ((((!((map__11690 == null)))?(((((map__11690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11690):map__11690);
var options = map__11690__$1;
var map__11691 = cljs.core.get.call(null,map__11690__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var map__11691__$1 = ((((!((map__11691 == null)))?(((((map__11691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11691):map__11691);
var nl_separator_QMARK_ = cljs.core.get.call(null,map__11691__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-binding-vec:",zprint.zfns.zstring.call(null,zprint.zfns.zfirst.call(null,zloc)));
} else {
}

var options__$1 = zprint.zprint.rightmost.call(null,options);
var l_str = "[";
var r_str = "]";
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options__$1,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options__$1,(ind + (1)),zloc,r_str);
var value__11486__auto__ = ((cljs.core._EQ_.call(null,zprint.zfns.zcount.call(null,zloc),(0)))?zprint.zprint.concat_no_nil.call(null,l_str_vec,r_str_vec):zprint.zprint.concat_no_nil.call(null,l_str_vec,zprint.zprint.interpose_nl_hf.call(null,new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(options__$1),(ind + (1)),zprint.zprint.fzprint_map_two_up.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),options__$1,(ind + (1)),false,cljs.core.second.call(null,zprint.zprint.partition_all_2_nc.call(null,options__$1,zprint.zfns.zseqnws.call(null,zloc))))),r_str_vec));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-binding-vec exit:",cljs.core.pr_str.call(null,value__11486__auto__));
} else {
}

return value__11486__auto__;
});
/**
 * Try to hang something and try to flow it, and then see which is
 *   better.  Has hang and flow indents. fzfn is the function to use 
 *   to do zloc.  Note what fzfn does with the input.  For instance,
 *   fzprint-pairs does a (zmap-right identity zloc).  Presumably the
 *   caller knows what the fzfn does, so it has to count the items
 *   itself and pass it in here as zloc-count if it isn't just (zcount zloc).
 */
zprint.zprint.fzprint_hang = (function zprint$zprint$fzprint_hang(p__11694,caller,hindent,findent,fzfn,zloc_count,zloc){
var map__11695 = p__11694;
var map__11695__$1 = ((((!((map__11695 == null)))?(((((map__11695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11695):map__11695);
var options = map__11695__$1;
var one_line_QMARK_ = cljs.core.get.call(null,map__11695__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang:",zprint.zfns.zstring.call(null,zprint.zfns.zfirst.call(null,zloc)),"caller:",caller);
} else {
}

var hanging = (cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.not_EQ_.call(null,hindent,findent);
if(and__3938__auto__){
return options.call(null,caller).call(null,new cljs.core.Keyword(null,"hang?","hang?",-579442854));
} else {
return and__3938__auto__;
}
})())?zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[" "].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null),fzfn.call(null,zprint.zprint.in_hang.call(null,options),hindent,zloc)):null);
var hang_count = (function (){var or__3949__auto__ = zloc_count;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return zprint.zfns.zcount.call(null,zloc);
}
})();
var hr_lines = zprint.zprint.style_lines.call(null,options,(hindent - (1)),hanging);
if(cljs.core.truth_((function (){var or__3949__auto__ = zprint.zprint.fzfit_one_line.call(null,options,hr_lines);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return one_line_QMARK_;
}
})())){
return hanging;
} else {
var flow = zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,findent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),fzfn.call(null,options,findent,zloc));
var _ = zprint.zprint.log_lines.call(null,options,"fzprint-hang: flow:",findent,flow);
var fd_lines = zprint.zprint.style_lines.call(null,options,findent,flow);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang: ending: hang-count:",hang_count,"hanging:",hanging,"flow:",flow):null);
var hr_good_QMARK_ = (cljs.core.truth_(new cljs.core.Keyword(null,"hang?","hang?",-579442854).cljs$core$IFn$_invoke$arity$1(caller.call(null,options)))?zprint.zprint.good_enough_QMARK_.call(null,caller,options,new cljs.core.Keyword(null,"none-hang","none-hang",-1101780299),hang_count,(hindent - findent),hr_lines,fd_lines):null);
if(cljs.core.truth_(hr_good_QMARK_)){
return hanging;
} else {
return flow;
}
}
});
/**
 * Always prints pairs on a different line from other pairs.
 */
zprint.zprint.fzprint_pairs = (function zprint$zprint$fzprint_pairs(p__11697,ind,zloc){
var map__11698 = p__11697;
var map__11698__$1 = ((((!((map__11698 == null)))?(((((map__11698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11698):map__11698);
var options = map__11698__$1;
var map__11699 = cljs.core.get.call(null,map__11698__$1,new cljs.core.Keyword(null,"pair","pair",-447516312));
var map__11699__$1 = ((((!((map__11699 == null)))?(((((map__11699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11699):map__11699);
var nl_separator_QMARK_ = cljs.core.get.call(null,map__11699__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-pairs:",zprint.zfns.zstring.call(null,zprint.zfns.zfirst.call(null,zloc)));
} else {
}

var value__11486__auto__ = zprint.zprint.interpose_nl_hf.call(null,new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(options),ind,zprint.zprint.fzprint_map_two_up.call(null,new cljs.core.Keyword(null,"pair","pair",-447516312),options,ind,false,(function (){var vec__11702 = zprint.zprint.partition_all_2_nc.call(null,options,zprint.zfns.zmap_right.call(null,cljs.core.identity,zloc));
var _ = cljs.core.nth.call(null,vec__11702,(0),null);
var part = cljs.core.nth.call(null,vec__11702,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-pairs: partition:",cljs.core.map.call(null,cljs.core.comp.call(null,zprint.zfns.zstring,cljs.core.first),part));
} else {
}

return part;
})()));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-pairs: exit:",cljs.core.pr_str.call(null,value__11486__auto__));
} else {
}

return value__11486__auto__;
});
/**
 * Print things with a symbol and collections following.  Kind of like with
 *   pairs, but not quite. This skips over zloc and does everything to the
 *   right of it!
 */
zprint.zprint.fzprint_extend = (function zprint$zprint$fzprint_extend(p__11706,ind,zloc){
var map__11707 = p__11706;
var map__11707__$1 = ((((!((map__11707 == null)))?(((((map__11707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11707):map__11707);
var options = map__11707__$1;
var map__11708 = cljs.core.get.call(null,map__11707__$1,new cljs.core.Keyword(null,"extend","extend",1836484006));
var map__11708__$1 = ((((!((map__11708 == null)))?(((((map__11708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11708):map__11708);
var nl_separator_QMARK_ = cljs.core.get.call(null,map__11708__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-extend:",zprint.zfns.zstring.call(null,zprint.zfns.zfirst.call(null,zloc)));
} else {
}

var value__11486__auto__ = zprint.zprint.interpose_nl_hf.call(null,new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(options),ind,zprint.zprint.fzprint_map_two_up.call(null,new cljs.core.Keyword(null,"extend","extend",1836484006),cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917),new cljs.core.Keyword(null,"fn","fn",-1175266204)),ind,false,(function (){var part = zprint.zprint.partition_all_sym.call(null,options,new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(options)),zprint.zfns.zmap_right.call(null,cljs.core.identity,zloc));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-extend: partition:",cljs.core.map.call(null,((function (part,map__11707,map__11707__$1,options,map__11708,map__11708__$1,nl_separator_QMARK_){
return (function (p1__11705_SHARP_){
return cljs.core.map.call(null,zprint.zfns.zstring,p1__11705_SHARP_);
});})(part,map__11707,map__11707__$1,options,map__11708,map__11708__$1,nl_separator_QMARK_))
,part));
} else {
}

return part;
})()));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-extend: exit:",cljs.core.pr_str.call(null,value__11486__auto__));
} else {
}

return value__11486__auto__;
});
/**
 * Given a transient vector v, concatenate all of the other
 *   elements in all of the remaining collections onto v.
 */
zprint.zprint.concatv_BANG_ = (function zprint$zprint$concatv_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11713 = arguments.length;
var i__4532__auto___11714 = (0);
while(true){
if((i__4532__auto___11714 < len__4531__auto___11713)){
args__4534__auto__.push((arguments[i__4532__auto___11714]));

var G__11715 = (i__4532__auto___11714 + (1));
i__4532__auto___11714 = G__11715;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return zprint.zprint.concatv_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

zprint.zprint.concatv_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (v,rest){
var cols = rest;
var out = v;
while(true){
if(cljs.core.truth_(cols)){
var G__11716 = cljs.core.next.call(null,cols);
var G__11717 = (function (){var col = cljs.core.first.call(null,cols);
var out__$1 = out;
while(true){
if(cljs.core.truth_(col)){
var G__11718 = cljs.core.next.call(null,col);
var G__11719 = cljs.core.conj_BANG_.call(null,out__$1,cljs.core.first.call(null,col));
col = G__11718;
out__$1 = G__11719;
continue;
} else {
return out__$1;
}
break;
}
})();
cols = G__11716;
out = G__11717;
continue;
} else {
return out;
}
break;
}
});

zprint.zprint.concatv_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
zprint.zprint.concatv_BANG_.cljs$lang$applyTo = (function (seq11711){
var G__11712 = cljs.core.first.call(null,seq11711);
var seq11711__$1 = cljs.core.next.call(null,seq11711);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11712,seq11711__$1);
});

/**
 * Do a fzprint-seq like thing, but do it incrementally and
 *   if it gets too big, return nil.
 */
zprint.zprint.fzprint_one_line = (function zprint$zprint$fzprint_one_line(options,ind,zloc){
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"dbg-print?","dbg-print?",-660113872).cljs$core$IFn$_invoke$arity$1(options);
}
})())){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-one-line:");
} else {
}

var seq_right = zprint.zfns.zmap.call(null,cljs.core.identity,zloc);
var len = cljs.core.count.call(null,seq_right);
var last_index = (len - (1));
var gt_1_QMARK_ = (cljs.core.count.call(null,seq_right) > (1));
var options__$1 = cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111),true);
var zloc_seq = seq_right;
var new_ind = cljs.core.long$.call(null,ind);
var index = (0);
var out = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_.call(null,zloc_seq)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-one-line: exiting count:",cljs.core.count.call(null,out));
} else {
}

return cljs.core.persistent_BANG_.call(null,out);
} else {
var next_zloc = cljs.core.first.call(null,zloc_seq);
var vec__11720 = ((cljs.core._EQ_.call(null,index,last_index))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((!((index === (0))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null):null),options__$1], null):((cljs.core._EQ_.call(null,index,(0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,zprint.zprint.not_rightmost.call(null,options__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null),zprint.zprint.not_rightmost.call(null,options__$1)], null)
));
var sep = cljs.core.nth.call(null,vec__11720,(0),null);
var next_options = cljs.core.nth.call(null,vec__11720,(1),null);
var next_out = zprint.zprint.fzprint_STAR_.call(null,next_options,new_ind,next_zloc);
var _ = zprint.zprint.log_lines.call(null,options__$1,"fzprint-one-line:",new_ind,next_out);
var vec__11723 = zprint.zprint.style_lines.call(null,options__$1,new_ind,next_out);
var line_count = cljs.core.nth.call(null,vec__11723,(0),null);
var max_width = cljs.core.nth.call(null,vec__11723,(1),null);
var next_lines = vec__11723;
if(cljs.core.not.call(null,zprint.zprint.fzfit_one_line.call(null,next_options,next_lines))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-one-line: failed, too wide or too many lines!");
} else {
}

return null;
} else {
var G__11726 = cljs.core.next.call(null,zloc_seq);
var G__11727 = (cljs.core.long$.call(null,max_width) + (1));
var G__11728 = (index + (1));
var G__11729 = zprint.zprint.concatv_BANG_.call(null,out,sep,next_out);
zloc_seq = G__11726;
new_ind = G__11727;
index = G__11728;
out = G__11729;
continue;
}
}
break;
}
});
/**
 * Take a seq of a zloc, created by (zmap identity zloc) when zloc
 *   is a collection, or (zmap-right identity zloc) when zloc is already
 *   inside of a collection, and return a seq of the fzprint* of each 
 *   element.  No spacing between any of these elements. Note that this
 *   is not a style-vec, but a seq of style-vecs of each of the elements.
 *   These would need to be concatenated together to become a style-vec.
 *   ind is either a constant or a seq of indents, one for each element in
 *   zloc-seq.
 */
zprint.zprint.fzprint_seq = (function zprint$zprint$fzprint_seq(options,ind,zloc_seq){
var max_length = zprint.zprint.get_max_length.call(null,options);
var len = cljs.core.count.call(null,zloc_seq);
var zloc_seq__$1 = (((len > max_length))?cljs.core.concat.call(null,cljs.core.take.call(null,max_length,zloc_seq),(new cljs.core.List(null,zprint.zfns.zdotdotdot.call(null),null,(1),null))):zloc_seq);
var len__$1 = cljs.core.count.call(null,zloc_seq__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-seq: (count zloc-seq):",len__$1,"max-length:",max_length);
} else {
}

if(cljs.core.empty_QMARK_.call(null,zloc_seq__$1)){
return null;
} else {
if((max_length === (0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#?#",zprint.zprint.zcolor_map.call(null,options,new cljs.core.Keyword(null,"keyword","keyword",811389747)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null)], null);
} else {
var left = zprint.zprint.zpmap.call(null,options,((function (max_length,len,zloc_seq__$1,len__$1){
return (function (p1__11730_SHARP_,p2__11731_SHARP_){
return zprint.zprint.fzprint_STAR_.call(null,zprint.zprint.not_rightmost.call(null,options),p1__11730_SHARP_,p2__11731_SHARP_);
});})(max_length,len,zloc_seq__$1,len__$1))
,((cljs.core.coll_QMARK_.call(null,ind))?ind:cljs.core.repeat.call(null,ind)),cljs.core.butlast.call(null,zloc_seq__$1));
var right = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zprint.fzprint_STAR_.call(null,options,((cljs.core.coll_QMARK_.call(null,ind))?cljs.core.last.call(null,ind):ind),cljs.core.last.call(null,zloc_seq__$1))], null);
if(cljs.core._EQ_.call(null,len__$1,(1))){
return right;
} else {
return zprint.zprint.concat_no_nil.call(null,left,right);

}

}
}
});
/**
 * Take a seq of a zloc, created by (zmap identity zloc) or
 *   and return a style-vec of the result.  Either it fits on one line, 
 *   or it is rendered on multiple lines.  You can force multiple lines 
 *   with force-nl?. If you want it to do less than everything in the 
 *   original zloc, modify the result of (zmap identity zloc) to just 
 *   contain what you want to print. ind is either a single indent,
 *   or a seq of indents, one for each element in zloc-seq.
 */
zprint.zprint.fzprint_flow_seq = (function zprint$zprint$fzprint_flow_seq(var_args){
var G__11734 = arguments.length;
switch (G__11734) {
case 4:
return zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$4 = (function (options,ind,zloc_seq,force_nl_QMARK_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-flow-seq: count zloc-seq:",cljs.core.count.call(null,zloc_seq));
} else {
}

var coll_print = zprint.zprint.fzprint_seq.call(null,options,ind,zloc_seq);
var one_line = cljs.core.apply.call(null,zprint.zprint.concat_no_nil,cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null),coll_print));
var _ = zprint.zprint.log_lines.call(null,options,"fzprint-flow-seq:",ind,one_line);
var one_line_lines = zprint.zprint.style_lines.call(null,options,ind,one_line);
var value__11486__auto__ = (cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.not.call(null,force_nl_QMARK_);
if(and__3938__auto__){
return zprint.zprint.fzfit_one_line.call(null,options,one_line_lines);
} else {
return and__3938__auto__;
}
})())?one_line:cljs.core.apply.call(null,zprint.zprint.concat_no_nil,((cljs.core.coll_QMARK_.call(null,ind))?cljs.core.drop.call(null,(1),cljs.core.interleave.call(null,cljs.core.map.call(null,((function (coll_print,one_line,_,one_line_lines){
return (function (p1__11732_SHARP_){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,p1__11732_SHARP_))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)],null));
});})(coll_print,one_line,_,one_line_lines))
,ind),coll_print)):cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,ind))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),coll_print))));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-flow-seq: exit:",cljs.core.pr_str.call(null,value__11486__auto__));
} else {
}

return value__11486__auto__;
});

zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$3 = (function (options,ind,zloc_seq){
return zprint.zprint.fzprint_flow_seq.call(null,options,ind,zloc_seq,null);
});

zprint.zprint.fzprint_flow_seq.cljs$lang$maxFixedArity = 4;

/**
 * Try out the given zloc, and if it fits on the current line, just
 *   do that. It might fit on the same line, as this may not be the rest
 *   of the list that we are printing. If not, check it out with good-enough?
 *   and do the best you can.  Three choices, really: fits on same line, 
 *   does ok as hanging, or better with flow. hindent is hang-indent, and 
 *   findent is flow-indent, and each contains the initial separator.  
 *   Might be nice if the fn-style actually got sent to this fn.
 */
zprint.zprint.fzprint_hang_one = (function zprint$zprint$fzprint_hang_one(caller,p__11736,hindent,findent,zloc){
var map__11737 = p__11736;
var map__11737__$1 = ((((!((map__11737 == null)))?(((((map__11737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11737):map__11737);
var options = map__11737__$1;
var one_line_QMARK_ = cljs.core.get.call(null,map__11737__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-one: hindent:",hindent,"findent:",findent);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg-hang","dbg-hang",-1928862076).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,zprint.zprint.dots.call(null,new cljs.core.Keyword(null,"pdepth","pdepth",-1943862342).cljs$core$IFn$_invoke$arity$1(options)),"h1 caller:",caller,zprint.zfns.zstring.call(null,(cljs.core.truth_(zprint.zfns.zcoll_QMARK_.call(null,zloc))?zprint.zfns.zfirst.call(null,zloc):zloc)));
} else {
}

var local_options = ((((cljs.core.not.call(null,one_line_QMARK_)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"hang?","hang?",-579442854).cljs$core$IFn$_invoke$arity$1(caller.call(null,options))))))?cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111),true):options);
var hindent__$1 = (function (){var or__3949__auto__ = hindent;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return findent;
}
})();
var hanging = ((cljs.core.not_EQ_.call(null,hindent__$1,findent))?zprint.zprint.fzprint_STAR_.call(null,zprint.zprint.in_hang.call(null,local_options),hindent__$1,zloc):null);
var hang_count = zprint.zfns.zcount.call(null,zloc);
var hanging__$1 = zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null),hanging);
var _ = zprint.zprint.log_lines.call(null,options,"fzprint-hang-one: hanging:",(hindent__$1 - (1)),hanging__$1);
var hr_lines = zprint.zprint.style_lines.call(null,options,(hindent__$1 - (1)),hanging__$1);

if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-one: hr-lines:",hr_lines,"hang-count:",hang_count);
} else {
}

if(cljs.core.truth_((function (){var or__3949__auto__ = zprint.zprint.fzfit_one_line.call(null,options,hr_lines);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return one_line_QMARK_;
}
})())){
return hanging__$1;
} else {
var flow = zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,findent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.fzprint_STAR_.call(null,options,findent,zloc));
var ___$1 = zprint.zprint.log_lines.call(null,options,"fzprint-hang-one: flow:",findent,flow);
var fd_lines = zprint.zprint.style_lines.call(null,options,findent,flow);
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-one: fd-lines:",fd_lines):null);
var ___$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-one: ending: hang-count:",hang_count,"hanging:",cljs.core.pr_str.call(null,hanging__$1),"flow:",cljs.core.pr_str.call(null,flow)):null);
var hr_good_QMARK_ = (function (){var and__3938__auto__ = new cljs.core.Keyword(null,"hang?","hang?",-579442854).cljs$core$IFn$_invoke$arity$1(caller.call(null,options));
if(cljs.core.truth_(and__3938__auto__)){
return zprint.zprint.good_enough_QMARK_.call(null,caller,options,new cljs.core.Keyword(null,"none-hang-one","none-hang-one",-1392848107),hang_count,(hindent__$1 - findent),hr_lines,fd_lines);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(hr_good_QMARK_)){
return hanging__$1;
} else {
return flow;
}
}
});
/**
 * Given a seq of zlocs, work backwards from the end, and see how
 *   many elements are pairs of constants (using zconstant?).  So that
 *   (... :a (stuff) :b (bother)) returns 4, since both :a and :b are
 *   zconstant? true. This is made more difficult by having to skip
 *   comments along the way as part of the pair check, but keep track
 *   of the ones we skip so the count is right in the end.  We don't
 *   expect any whitespace in this, because this seq should have been
 *   produced by zmap-right or its equivalent, which already skips the
 *   whitespace.
 */
zprint.zprint.count_constant_pairs = (function zprint$zprint$count_constant_pairs(seq_right){
var seq_right_rev = cljs.core.reverse.call(null,seq_right);
var element_count = (0);
var constant_required_QMARK_ = null;
var pair_size = (0);
while(true){
var element = cljs.core.first.call(null,seq_right_rev);
if(cljs.core.empty_QMARK_.call(null,seq_right_rev)){
return (element_count - pair_size);
} else {
var comment_QMARK_ = zprint.zfns.zcomment_QMARK_.call(null,element);
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.not.call(null,comment_QMARK_);
if(and__3938__auto__){
var and__3938__auto____$1 = constant_required_QMARK_;
if(cljs.core.truth_(and__3938__auto____$1)){
return cljs.core.not.call(null,zprint.zfns.zconstant_QMARK_.call(null,element));
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())){
return (element_count - pair_size);
} else {
var G__11739 = cljs.core.next.call(null,seq_right_rev);
var G__11740 = (element_count + (1));
var G__11741 = (cljs.core.truth_(comment_QMARK_)?constant_required_QMARK_:cljs.core.not.call(null,constant_required_QMARK_));
var G__11742 = (cljs.core.truth_((function (){var and__3938__auto__ = constant_required_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,comment_QMARK_);
} else {
return and__3938__auto__;
}
})())?(0):(pair_size + (1)));
seq_right_rev = G__11739;
element_count = G__11740;
constant_required_QMARK_ = G__11741;
pair_size = G__11742;
continue;
}
}
break;
}
});
/**
 * Argument is result of (zmap-right identity zloc), that is to say
 *   a seq of zlocs.  Output is a [pair-seq non-paired-item-count],
 *   if any.  If there are no pair-seqs, pair-seq must be nil, not
 *   an empty seq.
 */
zprint.zprint.constant_pair = (function zprint$zprint$constant_pair(caller,p__11743,seq_right){
var map__11744 = p__11743;
var map__11744__$1 = ((((!((map__11744 == null)))?(((((map__11744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11744):map__11744);
var options = map__11744__$1;
var map__11745 = cljs.core.get.call(null,map__11744__$1,caller);
var map__11745__$1 = ((((!((map__11745 == null)))?(((((map__11745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11745):map__11745);
var constant_pair_QMARK_ = cljs.core.get.call(null,map__11745__$1,new cljs.core.Keyword(null,"constant-pair?","constant-pair?",-1009181437));
var constant_pair_min = cljs.core.get.call(null,map__11745__$1,new cljs.core.Keyword(null,"constant-pair-min","constant-pair-min",1245759721));
if(cljs.core.truth_(constant_pair_QMARK_)){
var paired_item_count = zprint.zprint.count_constant_pairs.call(null,seq_right);
var non_paired_item_count = (cljs.core.count.call(null,seq_right) - paired_item_count);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"constant-pair: non-paired-items:",non_paired_item_count):null);
var pair_seq = (((paired_item_count >= constant_pair_min))?cljs.core.second.call(null,zprint.zprint.partition_all_2_nc.call(null,options,cljs.core.drop.call(null,non_paired_item_count,seq_right))):null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pair_seq,non_paired_item_count], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.count.call(null,seq_right)], null);
}
});
/**
 * zloc is already down inside a collection, it is not the collection
 *   itself. Operate on what is to the right of zloc.  We already know
 *   that the given zloc won't fit on the current line. [Besides, we
 *   ensure that if there are two things remaining anyway. ???] So
 *   now, try hanging and see if that is better than flow.  Unless
 *   :hang? is nil, in which case we will just flow.  hindent is
 *   hang-indent, and findent is flow-indent. This should never be
 *   called with :one-line because this is only called from fzprint-list*
 *   after the one-line processing is done. If the hindent equals the
 *   flow indent, then just do flow.  Do only zloc-count non-whitespace
 *   elements of zloc.
 */
zprint.zprint.fzprint_hang_remaining = (function zprint$zprint$fzprint_hang_remaining(var_args){
var G__11749 = arguments.length;
switch (G__11749) {
case 7:
return zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 6:
return zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$7 = (function (caller,p__11750,hindent,findent,zloc,fn_style,zloc_count){
var map__11751 = p__11750;
var map__11751__$1 = ((((!((map__11751 == null)))?(((((map__11751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11751):map__11751);
var options = map__11751__$1;
var map__11752 = cljs.core.get.call(null,map__11751__$1,caller);
var map__11752__$1 = ((((!((map__11752 == null)))?(((((map__11752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11752):map__11752);
var hang_QMARK_ = cljs.core.get.call(null,map__11752__$1,new cljs.core.Keyword(null,"hang?","hang?",-579442854));
var constant_pair_QMARK_ = cljs.core.get.call(null,map__11752__$1,new cljs.core.Keyword(null,"constant-pair?","constant-pair?",-1009181437));
var constant_pair_min = cljs.core.get.call(null,map__11752__$1,new cljs.core.Keyword(null,"constant-pair-min","constant-pair-min",1245759721));
var hang_avoid = cljs.core.get.call(null,map__11752__$1,new cljs.core.Keyword(null,"hang-avoid","hang-avoid",-138703568));
var hang_expand = cljs.core.get.call(null,map__11752__$1,new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559));
var hang_diff = cljs.core.get.call(null,map__11752__$1,new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424));
var nl_separator_QMARK_ = cljs.core.get.call(null,map__11752__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
var dbg_QMARK_ = cljs.core.get.call(null,map__11751__$1,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771));
var width = cljs.core.get.call(null,map__11751__$1,new cljs.core.Keyword(null,"width","width",-384071477));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg-hang","dbg-hang",-1928862076).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,zprint.zprint.dots.call(null,new cljs.core.Keyword(null,"pdepth","pdepth",-1943862342).cljs$core$IFn$_invoke$arity$1(options)),"hr",zprint.zfns.zstring.call(null,zloc));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining:",zprint.zfns.zstring.call(null,zloc),"hindent:",hindent,"findent:",findent,"caller:",caller,"nl-separator?:",nl_separator_QMARK_);
} else {
}

var seq_right = zprint.zfns.zmap_right.call(null,cljs.core.identity,zloc);
var seq_right__$1 = (cljs.core.truth_(zloc_count)?cljs.core.take.call(null,zloc_count,seq_right):seq_right);
var vec__11755 = zprint.zprint.constant_pair.call(null,caller,options,seq_right__$1);
var pair_seq = cljs.core.nth.call(null,vec__11755,(0),null);
var non_paired_item_count = cljs.core.nth.call(null,vec__11755,(1),null);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining count pair-seq:",cljs.core.count.call(null,pair_seq)):null);
var flow = (function (){var flow_result = ((cljs.core.not.call(null,pair_seq))?cljs.core.apply.call(null,zprint.zprint.concat_no_nil,cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,findent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.fzprint_seq.call(null,options,findent,seq_right__$1))):((!((non_paired_item_count === (0))))?zprint.zprint.concat_no_nil.call(null,cljs.core.apply.call(null,zprint.zprint.concat_no_nil,cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,findent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.zpmap.call(null,options,cljs.core.partial.call(null,zprint.zprint.fzprint_STAR_,zprint.zprint.not_rightmost.call(null,options),findent),cljs.core.take.call(null,non_paired_item_count,seq_right__$1)))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,findent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.interpose_nl_hf.call(null,new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(options),findent,zprint.zprint.fzprint_map_two_up.call(null,new cljs.core.Keyword(null,"pair","pair",-447516312),options,findent,null,pair_seq))):zprint.zprint.interpose_nl_hf.call(null,new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(options),findent,zprint.zprint.fzprint_map_two_up.call(null,new cljs.core.Keyword(null,"pair","pair",-447516312),options,findent,null,pair_seq))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow_result,zprint.zprint.style_lines.call(null,options,findent,flow_result)], null);
})();
var hang_QMARK___$1 = (function (){var and__3938__auto__ = hang_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not_EQ_.call(null,hindent,findent)) && (((cljs.core.not.call(null,hang_avoid)) || ((cljs.core.count.call(null,seq_right__$1) < ((width - hindent) * hang_avoid))))));
} else {
return and__3938__auto__;
}
})();
var hanging = (function (){var hang_result = (cljs.core.truth_(hang_QMARK___$1)?((cljs.core.not.call(null,pair_seq))?cljs.core.apply.call(null,zprint.zprint.concat_no_nil,cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,hindent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.fzprint_seq.call(null,zprint.zprint.in_hang.call(null,options),hindent,seq_right__$1))):((!((non_paired_item_count === (0))))?zprint.zprint.concat_no_nil.call(null,(function (){var value__11486__auto__ = cljs.core.apply.call(null,zprint.zprint.concat_no_nil,cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,hindent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.zpmap.call(null,options,cljs.core.partial.call(null,zprint.zprint.fzprint_STAR_,zprint.zprint.not_rightmost.call(null,zprint.zprint.in_hang.call(null,options)),hindent),cljs.core.take.call(null,non_paired_item_count,seq_right__$1))));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: mapv:",cljs.core.pr_str.call(null,value__11486__auto__));
} else {
}

return value__11486__auto__;
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,hindent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),(function (){var value__11486__auto__ = zprint.zprint.interpose_nl_hf.call(null,new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(options),hindent,zprint.zprint.fzprint_map_two_up.call(null,new cljs.core.Keyword(null,"pair","pair",-447516312),zprint.zprint.in_hang.call(null,options),hindent,null,pair_seq));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: fzprint-hang:",cljs.core.pr_str.call(null,value__11486__auto__));
} else {
}

return value__11486__auto__;
})()):zprint.zprint.interpose_nl_hf.call(null,new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(options),hindent,zprint.zprint.fzprint_map_two_up.call(null,new cljs.core.Keyword(null,"pair","pair",-447516312),zprint.zprint.in_hang.call(null,options),hindent,null,pair_seq)))):null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hang_result,zprint.zprint.style_lines.call(null,options,hindent,hang_result)], null);
})();
var vec__11758 = zprint.zprint.zat.call(null,options,flow);
var flow__$1 = cljs.core.nth.call(null,vec__11758,(0),null);
var flow_lines = cljs.core.nth.call(null,vec__11758,(1),null);
var vec__11761 = zprint.zprint.zat.call(null,options,hanging);
var hanging__$1 = cljs.core.nth.call(null,vec__11761,(0),null);
var hanging_lines = cljs.core.nth.call(null,vec__11761,(1),null);
var hang_count = cljs.core.count.call(null,seq_right__$1);
var ___$1 = zprint.zprint.log_lines.call(null,options,"fzprint-hang-remaining: hanging:",hindent,hanging__$1);
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: hanging-lines:",hanging_lines,"hang-count:",hang_count):null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: flow-lines:",flow_lines);
} else {
}

if(cljs.core.truth_(dbg_QMARK_)){
if((hang_count === (0))){
cljs.core.println.call(null,"hang-count = 0:",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zfns.zmap_right.call(null,zprint.zfns.zstring,zloc))].join(''));
} else {
}
} else {
}

zprint.zprint.log_lines.call(null,options,"fzprint-hang-remaining: flow",findent,flow__$1);

if(cljs.core.truth_(flow_lines)){
if(cljs.core.truth_(zprint.zprint.good_enough_QMARK_.call(null,caller,options,fn_style,hang_count,(hindent - findent),hanging_lines,flow_lines))){
return zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null),hanging__$1);
} else {
return zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,findent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),flow__$1);
}
} else {
return null;
}
});

zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6 = (function (caller,options,hindent,findent,zloc,fn_style){
return zprint.zprint.fzprint_hang_remaining.call(null,caller,options,hindent,findent,zloc,fn_style,null);
});

zprint.zprint.fzprint_hang_remaining.cljs$lang$maxFixedArity = 7;

zprint.zprint.body_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),null,new cljs.core.Keyword(null,"noarg1-body","noarg1-body",774553320),null,new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),null,new cljs.core.Keyword(null,"arg2-fn","arg2-fn",1172769072),null,new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"flow-body","flow-body",1355242804),null,new cljs.core.Keyword(null,"arg1->","arg1->",1319654329),null,new cljs.core.Keyword(null,"none-body","none-body",-171554854),null], null), null);
zprint.zprint.body_map = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953),new cljs.core.Keyword(null,"none-body","none-body",-171554854),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"flow-body","flow-body",1355242804),new cljs.core.Keyword(null,"flow","flow",590489032),new cljs.core.Keyword(null,"noarg1-body","noarg1-body",774553320),new cljs.core.Keyword(null,"noarg1","noarg1",2031519464),new cljs.core.Keyword(null,"force-nl-body","force-nl-body",1789087439),new cljs.core.Keyword(null,"force-nl","force-nl",-755040826)], null);
zprint.zprint.noarg1_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"noarg1","noarg1",2031519464),null,new cljs.core.Keyword(null,"arg1->","arg1->",1319654329),null], null), null);
zprint.zprint.noarg1_map = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.Keyword(null,"arg1-extend","arg1-extend",-157225050),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126),new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953)], null);
/**
 * Set noarg1 in the options if it is the right fn-type.
 */
zprint.zprint.noarg1 = (function zprint$zprint$noarg1(options,fn_type){
if(cljs.core.truth_(zprint.zprint.noarg1_set.call(null,fn_type))){
return cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"no-arg1?","no-arg1?",1560368430),true);
} else {
return options;
}
});
zprint.zprint.fn_style__GT_caller = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg1-extend","arg1-extend",-157225050),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"arg2-extend","arg2-extend",1554629186),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.Keyword(null,"pair","pair",-447516312)], null);
/**
 * Should we allow this function to print on a single line?
 */
zprint.zprint.allow_one_line_QMARK_ = (function zprint$zprint$allow_one_line_QMARK_(p__11765,len,fn_style){
var map__11766 = p__11765;
var map__11766__$1 = ((((!((map__11766 == null)))?(((((map__11766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11766):map__11766);
var options = map__11766__$1;
var fn_force_nl = cljs.core.get.call(null,map__11766__$1,new cljs.core.Keyword(null,"fn-force-nl","fn-force-nl",1501458692));
var fn_gt2_force_nl = cljs.core.get.call(null,map__11766__$1,new cljs.core.Keyword(null,"fn-gt2-force-nl","fn-gt2-force-nl",1348579537));
var fn_gt3_force_nl = cljs.core.get.call(null,map__11766__$1,new cljs.core.Keyword(null,"fn-gt3-force-nl","fn-gt3-force-nl",-58306985));
return cljs.core.not.call(null,(function (){var or__3949__auto__ = fn_force_nl.call(null,fn_style);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = (function (){var and__3938__auto__ = (len > (3));
if(and__3938__auto__){
return fn_gt2_force_nl.call(null,fn_style);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = (function (){var and__3938__auto__ = (len > (4));
if(and__3938__auto__){
return fn_gt3_force_nl.call(null,fn_style);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
var temp__5455__auto__ = zprint.zprint.fn_style__GT_caller.call(null,fn_style);
if(cljs.core.truth_(temp__5455__auto__)){
var future_caller = temp__5455__auto__;
var caller_map = future_caller.call(null,options);
var or__3949__auto____$3 = new cljs.core.Keyword(null,"flow?","flow?",96929057).cljs$core$IFn$_invoke$arity$1(caller_map);
if(cljs.core.truth_(or__3949__auto____$3)){
return or__3949__auto____$3;
} else {
return new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462).cljs$core$IFn$_invoke$arity$1(caller_map);
}
} else {
return null;
}
}
}
}
})());
});
/**
 * If the (caller options) has a value for :return-altered-zipper, then
 *   examine the value.  It should be [<depth> <symbol> <fn>]. 
 *   If the <depth> is nil, any depth will do. If the
 *   <symbol> is nil, any symbol will do.  If the <depth> and <symbol>
 *   match, then the <fn> is called as (fn caller options zloc), and must
 *   return a new zloc.
 */
zprint.zprint.modify_zloc = (function zprint$zprint$modify_zloc(caller,options,zloc){
var vec__11768 = new cljs.core.Keyword(null,"return-altered-zipper","return-altered-zipper",837872379).cljs$core$IFn$_invoke$arity$1(caller.call(null,options));
var depth = cljs.core.nth.call(null,vec__11768,(0),null);
var trigger_symbol = cljs.core.nth.call(null,vec__11768,(1),null);
var modify_fn = cljs.core.nth.call(null,vec__11768,(2),null);
var return_altered_zipper_value = vec__11768;
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"modify-zloc caller:",caller,"ztype",new cljs.core.Keyword(null,"ztype","ztype",-562179020).cljs$core$IFn$_invoke$arity$1(options),"return-altered-zipper-value:",return_altered_zipper_value);
} else {
}

if(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"ztype","ztype",-562179020).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"zipper","zipper",1500694438))) || ((return_altered_zipper_value == null)))){
return zloc;
} else {
var call_fn_QMARK_ = (function (){var and__3938__auto__ = (((depth == null)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(options),depth)));
if(and__3938__auto__){
var and__3938__auto____$1 = ((cljs.core.not.call(null,trigger_symbol)) || (cljs.core._EQ_.call(null,trigger_symbol,zprint.zfns.zsexpr.call(null,zprint.zfns.zfirst.call(null,zloc)))));
if(and__3938__auto____$1){
return modify_fn;
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"modify-zloc: zloc",zprint.zfns.zstring.call(null,zloc),"call-fn?",call_fn_QMARK_);
} else {
}

if(cljs.core.truth_(call_fn_QMARK_)){
var return$ = modify_fn.call(null,caller,options,zloc);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"modify-zloc return:",zprint.zfns.zstring.call(null,return$));
} else {
}

return return$;
} else {
return zloc;
}
}
});
/**
 * Print a list, which might be a list or an anon fn.  
 *   Lots of work to make a list look good, as that is typically code. 
 *   Presently all of the callers of this are :list.
 */
zprint.zprint.fzprint_list_STAR_ = (function zprint$zprint$fzprint_list_STAR_(caller,l_str,r_str,p__11772,ind,zloc){
var map__11773 = p__11772;
var map__11773__$1 = ((((!((map__11773 == null)))?(((((map__11773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11773):map__11773);
var options = map__11773__$1;
var fn_map = cljs.core.get.call(null,map__11773__$1,new cljs.core.Keyword(null,"fn-map","fn-map",565481146));
var user_fn_map = cljs.core.get.call(null,map__11773__$1,new cljs.core.Keyword(null,"user-fn-map","user-fn-map",-908243227));
var one_line_QMARK_ = cljs.core.get.call(null,map__11773__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var fn_style = cljs.core.get.call(null,map__11773__$1,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917));
var no_arg1_QMARK_ = cljs.core.get.call(null,map__11773__$1,new cljs.core.Keyword(null,"no-arg1?","no-arg1?",1560368430));
var fn_force_nl = cljs.core.get.call(null,map__11773__$1,new cljs.core.Keyword(null,"fn-force-nl","fn-force-nl",1501458692));
var max_length = zprint.zprint.get_max_length.call(null,options);
var zloc__$1 = zprint.zprint.modify_zloc.call(null,caller,options,zloc);
var len = zprint.zfns.zcount.call(null,zloc__$1);
var zloc__$2 = (((len > max_length))?zprint.zfns.ztake_append.call(null,max_length,zloc__$1,new cljs.core.Symbol(null,"...","...",-1926939749,null)):zloc__$1);
var len__$1 = zprint.zfns.zcount.call(null,zloc__$2);
var l_str_len = cljs.core.count.call(null,l_str);
var arg_1_coll_QMARK_ = cljs.core.not.call(null,(function (){var or__3949__auto__ = zprint.zfns.zkeyword_QMARK_.call(null,zprint.zfns.zfirst.call(null,zloc__$2));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return zprint.zfns.zsymbol_QMARK_.call(null,zprint.zfns.zfirst.call(null,zloc__$2));
}
})());
var arg_1_indent_alt_QMARK_ = (function (){var and__3938__auto__ = arg_1_coll_QMARK_;
if(and__3938__auto__){
return fn_style;
} else {
return and__3938__auto__;
}
})();
var fn_str = ((!(arg_1_coll_QMARK_))?zprint.zfns.zstring.call(null,zprint.zfns.zfirst.call(null,zloc__$2)):null);
var fn_style__$1 = (function (){var or__3949__auto__ = fn_style;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = fn_map.call(null,fn_str);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return user_fn_map.call(null,fn_str);
}
}
})();
var fn_style__$2 = (cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.not.call(null,fn_style__$1);
if(and__3938__auto__){
return fn_str;
} else {
return and__3938__auto__;
}
})())?fn_map.call(null,cljs.core.last.call(null,clojure.string.split.call(null,fn_str,/\//))):fn_style__$1);
var options__$1 = ((cljs.core.vector_QMARK_.call(null,fn_style__$2))?zprint.config.merge_deep.call(null,options,cljs.core.second.call(null,fn_style__$2)):options);
var fn_style__$3 = ((cljs.core.vector_QMARK_.call(null,fn_style__$2))?cljs.core.first.call(null,fn_style__$2):fn_style__$2);
var indent = new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(options__$1.call(null,caller));
var indent_arg = new cljs.core.Keyword(null,"indent-arg","indent-arg",58691874).cljs$core$IFn$_invoke$arity$1(options__$1.call(null,caller));
var indent__$1 = (cljs.core.truth_(zprint.zprint.body_set.call(null,fn_style__$3))?indent:(function (){var or__3949__auto__ = indent_arg;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return indent;
}
})());
var indent__$2 = (indent__$1 + (l_str_len - (1)));
var one_line_ok_QMARK_ = zprint.zprint.allow_one_line_QMARK_.call(null,options__$1,len__$1,fn_style__$3);
var fn_style__$4 = (function (){var or__3949__auto__ = zprint.zprint.body_map.call(null,fn_style__$3);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return fn_style__$3;
}
})();
var fn_style__$5 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flow","flow",590489032),null,new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"hang","hang",-1007256173),null,new cljs.core.Keyword(null,"flow-body","flow-body",1355242804),null], null), null).call(null,fn_style__$4))?fn_style__$4:(((len__$1 < (3)))?null:fn_style__$4));
var fn_style__$6 = (cljs.core.truth_(no_arg1_QMARK_)?(function (){var or__3949__auto__ = zprint.zprint.noarg1_map.call(null,fn_style__$5);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return fn_style__$5;
}
})():fn_style__$5);
var options__$2 = (cljs.core.truth_(no_arg1_QMARK_)?cljs.core.dissoc.call(null,options__$1,new cljs.core.Keyword(null,"no-arg1?","no-arg1?",1560368430)):options__$1);
var indent_adj = (l_str_len - (1));
var default_indent = (cljs.core.truth_(zprint.zfns.zlist_QMARK_.call(null,zprint.zfns.zfirst.call(null,zloc__$2)))?indent__$2:l_str_len);
var arg_1_indent = ((cljs.core.not.call(null,(function (){var or__3949__auto__ = arg_1_coll_QMARK_;
if(or__3949__auto__){
return or__3949__auto__;
} else {
return zprint.zfns.zcomment_QMARK_.call(null,zprint.zfns.zfirst.call(null,zloc__$2));
}
})()))?((ind + (l_str_len + (1))) + cljs.core.count.call(null,fn_str)):null);
var arg_1_indent__$1 = (function (){var or__3949__auto__ = arg_1_indent;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.truth_(arg_1_indent_alt_QMARK_)){
return (indent__$2 + ind);
} else {
return null;
}
}
})();
var options__$3 = ((!(arg_1_coll_QMARK_))?cljs.core.assoc.call(null,options__$2,new cljs.core.Keyword(null,"in-code?","in-code?",194866464),fn_str):options__$2);
var options__$4 = cljs.core.assoc.call(null,options__$3,new cljs.core.Keyword(null,"pdepth","pdepth",-1943862342),(cljs.core.long$.call(null,(function (){var or__3949__auto__ = new cljs.core.Keyword(null,"pdepth","pdepth",-1943862342).cljs$core$IFn$_invoke$arity$1(options__$3);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})()) + (1)));
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg-hang","dbg-hang",-1928862076).cljs$core$IFn$_invoke$arity$1(options__$4))?cljs.core.println.call(null,zprint.zprint.dots.call(null,new cljs.core.Keyword(null,"pdepth","pdepth",-1943862342).cljs$core$IFn$_invoke$arity$1(options__$4)),"fzs",fn_str):null);
var new_ind = (indent__$2 + ind);
var one_line_ind = (l_str_len + ind);
var options__$5 = (cljs.core.truth_(fn_style__$6)?cljs.core.dissoc.call(null,options__$4,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917)):options__$4);
var loptions = zprint.zprint.not_rightmost.call(null,options__$5);
var roptions = options__$5;
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options__$5,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options__$5,(indent__$2 + ind),zloc__$2,r_str);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$5))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$5),"fzprint-list*:",zprint.zfns.zstring.call(null,zloc__$2),"fn-str",fn_str,"fn-style:",fn_style__$6,"ind:",ind,"indent:",indent__$2,"default-indent:",default_indent,"one-line-ok?",one_line_ok_QMARK_,"arg-1-coll?",arg_1_coll_QMARK_,"arg-1-indent:",arg_1_indent__$1,"l-str:",["'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l_str),"'"].join(''),"indent-adj:",indent_adj,"len:",len__$1,"one-line?:",one_line_QMARK_,"rightcnt:",new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070).cljs$core$IFn$_invoke$arity$1(options__$5)):null);
var one_line = (((len__$1 === (0)))?new cljs.core.Keyword(null,"empty","empty",767870958):(cljs.core.truth_(one_line_ok_QMARK_)?zprint.zprint.fzprint_one_line.call(null,options__$5,one_line_ind,zloc__$2):null));
if(cljs.core.truth_(one_line)){
if(cljs.core._EQ_.call(null,one_line,new cljs.core.Keyword(null,"empty","empty",767870958))){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,r_str_vec);
} else {
return zprint.zprint.concat_no_nil.call(null,l_str_vec,one_line,r_str_vec);
}
} else {
if(cljs.core.truth_(one_line_QMARK_)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$5))){
return cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$5),"fzprint-list*:",fn_str," one-line did not work!!!");
} else {
return null;
}
} else {
if(cljs.core.truth_((cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$5))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$5),"fzprint-list*: fn-style:",fn_style__$6):null))){
return null;
} else {
if(cljs.core._EQ_.call(null,len__$1,(0))){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,r_str_vec);
} else {
if(cljs.core._EQ_.call(null,len__$1,(1))){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,zprint.zprint.fzprint_STAR_.call(null,roptions,one_line_ind,zprint.zfns.zfirst.call(null,zloc__$2)),r_str_vec);
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core._EQ_.call(null,fn_style__$6,new cljs.core.Keyword(null,"binding","binding",539932593));
if(and__3938__auto__){
var and__3938__auto____$1 = (len__$1 > (1));
if(and__3938__auto____$1){
return zprint.zfns.zvector_QMARK_.call(null,zprint.zfns.zsecond.call(null,zloc__$2));
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())){
var vec__11775 = zprint.zprint.fzprint_hang_unless_fail.call(null,loptions,arg_1_indent__$1,(indent__$2 + ind),zprint.zprint.fzprint_binding_vec,zprint.zfns.zsecond.call(null,zloc__$2));
var hang_or_flow = cljs.core.nth.call(null,vec__11775,(0),null);
var binding_style_vec = cljs.core.nth.call(null,vec__11775,(1),null);
var binding_style_vec__$1 = ((cljs.core._EQ_.call(null,hang_or_flow,new cljs.core.Keyword(null,"hang","hang",-1007256173)))?zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null),binding_style_vec):binding_style_vec);
return zprint.zprint.concat_no_nil.call(null,l_str_vec,zprint.zprint.fzprint_STAR_.call(null,loptions,(ind + (1)),zprint.zfns.zfirst.call(null,zloc__$2)),binding_style_vec__$1,(((len__$1 > (2)))?zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,(indent__$2 + ind)))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.fzprint_flow_seq.call(null,options__$5,(indent__$2 + ind),cljs.core.nthnext.call(null,zprint.zfns.zmap.call(null,cljs.core.identity,zloc__$2),(2)),new cljs.core.Keyword(null,"force-nl","force-nl",-755040826)),r_str_vec):r_str_vec));
} else {
if(cljs.core._EQ_.call(null,fn_style__$6,new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586))){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,zprint.zprint.fzprint_STAR_.call(null,loptions,(ind + (1)),zprint.zfns.zfirst.call(null,zloc__$2)),zprint.zprint.fzprint_hang.call(null,options__$5,new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),arg_1_indent__$1,(indent__$2 + ind),zprint.zprint.fzprint_pairs,cljs.core.count.call(null,zprint.zfns.zmap_right.call(null,cljs.core.identity,zprint.zfns.znthnext.call(null,zloc__$2,(0)))),zprint.zfns.znthnext.call(null,zloc__$2,(0))),r_str_vec);
} else {
if(cljs.core._EQ_.call(null,fn_style__$6,new cljs.core.Keyword(null,"extend","extend",1836484006))){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,zprint.zprint.fzprint_STAR_.call(null,loptions,(ind + (1)),zprint.zfns.zfirst.call(null,zloc__$2)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,(indent__$2 + ind)))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.fzprint_extend.call(null,options__$5,(indent__$2 + ind),zprint.zfns.znthnext.call(null,zloc__$2,(0))),r_str_vec);
} else {
if(((((cljs.core._EQ_.call(null,fn_style__$6,new cljs.core.Keyword(null,"fn","fn",-1175266204))) && (cljs.core.not.call(null,zprint.zfns.zlist_QMARK_.call(null,zprint.zfns.zsecond.call(null,zloc__$2)))))) || (cljs.core._EQ_.call(null,fn_style__$6,new cljs.core.Keyword(null,"arg2","arg2",1729550917))) || (cljs.core._EQ_.call(null,fn_style__$6,new cljs.core.Keyword(null,"arg2-fn","arg2-fn",1172769072))) || (cljs.core._EQ_.call(null,fn_style__$6,new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126))) || (cljs.core._EQ_.call(null,fn_style__$6,new cljs.core.Keyword(null,"arg2-extend","arg2-extend",1554629186))))){
var second_element = zprint.zprint.fzprint_hang_one.call(null,caller,((cljs.core._EQ_.call(null,len__$1,(2)))?options__$5:loptions),arg_1_indent__$1,(indent__$2 + ind),zprint.zfns.zsecond.call(null,zloc__$2));
var vec__11778 = zprint.zprint.style_lines.call(null,loptions,arg_1_indent__$1,second_element);
var line_count = cljs.core.nth.call(null,vec__11778,(0),null);
var max_width = cljs.core.nth.call(null,vec__11778,(1),null);
var third = zprint.zfns.zthird.call(null,zloc__$2);
var first_three = (cljs.core.truth_(second_element)?zprint.zprint.concat_no_nil.call(null,zprint.zprint.fzprint_STAR_.call(null,loptions,(indent__$2 + ind),zprint.zfns.zfirst.call(null,zloc__$2)),second_element,(cljs.core.truth_((function (){var or__3949__auto__ = cljs.core._EQ_.call(null,fn_style__$6,new cljs.core.Keyword(null,"arg2","arg2",1729550917));
if(or__3949__auto__){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = cljs.core._EQ_.call(null,fn_style__$6,new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126));
if(or__3949__auto____$1){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = cljs.core._EQ_.call(null,fn_style__$6,new cljs.core.Keyword(null,"arg2-fn","arg2-fn",1172769072));
if(or__3949__auto____$2){
return or__3949__auto____$2;
} else {
var and__3938__auto__ = zprint.zfns.zvector_QMARK_.call(null,third);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,line_count,(1));
} else {
return and__3938__auto__;
}
}
}
}
})())?zprint.zprint.fzprint_hang_one.call(null,caller,((cljs.core._EQ_.call(null,len__$1,(3)))?options__$5:loptions),max_width,(indent__$2 + ind),third):zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,(indent__$2 + ind)))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.fzprint_STAR_.call(null,((cljs.core._EQ_.call(null,len__$1,(3)))?options__$5:loptions),(indent__$2 + ind),third)))):null);
if(cljs.core.truth_(first_three)){
if(cljs.core._EQ_.call(null,len__$1,(3))){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,first_three,r_str_vec);
} else {
return zprint.zprint.concat_no_nil.call(null,l_str_vec,first_three,((cljs.core._EQ_.call(null,fn_style__$6,new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126)))?zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,(indent__$2 + ind)))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.fzprint_pairs.call(null,options__$5,(indent__$2 + ind),zprint.zfns.znthnext.call(null,zloc__$2,(2)))):((cljs.core._EQ_.call(null,fn_style__$6,new cljs.core.Keyword(null,"arg2-extend","arg2-extend",1554629186)))?zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,(indent__$2 + ind)))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.fzprint_extend.call(null,options__$5,(indent__$2 + ind),zprint.zfns.znthnext.call(null,zloc__$2,(2)))):zprint.zprint.fzprint_hang_remaining.call(null,caller,((cljs.core._EQ_.call(null,fn_style__$6,new cljs.core.Keyword(null,"arg2-fn","arg2-fn",1172769072)))?cljs.core.assoc.call(null,options__$5,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917),new cljs.core.Keyword(null,"fn","fn",-1175266204)):options__$5),(indent__$2 + ind),(indent__$2 + ind),zprint.zfns.znthnext.call(null,zloc__$2,(2)),fn_style__$6)
)),r_str_vec);
}
} else {
return null;
}
} else {
if(((cljs.core._EQ_.call(null,fn_style__$6,new cljs.core.Keyword(null,"arg1-mixin","arg1-mixin",1553512120))) && ((len__$1 > (3))))){
var arg_vec_index = (function (){var or__3949__auto__ = zprint.zfns.zfind.call(null,((function (max_length,zloc__$1,len,zloc__$2,len__$1,l_str_len,arg_1_coll_QMARK_,arg_1_indent_alt_QMARK_,fn_str,fn_style__$1,fn_style__$2,options__$1,fn_style__$3,indent,indent_arg,indent__$1,indent__$2,one_line_ok_QMARK_,fn_style__$4,fn_style__$5,fn_style__$6,options__$2,indent_adj,default_indent,arg_1_indent,arg_1_indent__$1,options__$3,options__$4,_,new_ind,one_line_ind,options__$5,loptions,roptions,l_str_vec,r_str_vec,___$1,one_line,map__11773,map__11773__$1,options,fn_map,user_fn_map,one_line_QMARK_,fn_style,no_arg1_QMARK_,fn_force_nl){
return (function (p1__11771_SHARP_){
var or__3949__auto__ = zprint.zfns.zvector_QMARK_.call(null,p1__11771_SHARP_);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.truth_(zprint.zfns.zlist_QMARK_.call(null,p1__11771_SHARP_))){
return zprint.zfns.zvector_QMARK_.call(null,zprint.zfns.zfirst.call(null,p1__11771_SHARP_));
} else {
return null;
}
}
});})(max_length,zloc__$1,len,zloc__$2,len__$1,l_str_len,arg_1_coll_QMARK_,arg_1_indent_alt_QMARK_,fn_str,fn_style__$1,fn_style__$2,options__$1,fn_style__$3,indent,indent_arg,indent__$1,indent__$2,one_line_ok_QMARK_,fn_style__$4,fn_style__$5,fn_style__$6,options__$2,indent_adj,default_indent,arg_1_indent,arg_1_indent__$1,options__$3,options__$4,_,new_ind,one_line_ind,options__$5,loptions,roptions,l_str_vec,r_str_vec,___$1,one_line,map__11773,map__11773__$1,options,fn_map,user_fn_map,one_line_QMARK_,fn_style,no_arg1_QMARK_,fn_force_nl))
,zloc__$2);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})();
var doc_string_QMARK_ = typeof zprint.zfns.zsexpr.call(null,zprint.zfns.zthird.call(null,zloc__$2)) === 'string';
var mixin_start = ((doc_string_QMARK_)?(4):(3));
var mixin_length = (arg_vec_index - mixin_start);
var mixins_QMARK_ = (mixin_length > (0));
var doc_string = ((doc_string_QMARK_)?zprint.zprint.fzprint_hang_one.call(null,caller,loptions,(indent__$2 + ind),(indent__$2 + ind),zprint.zfns.zthird.call(null,zloc__$2)):null);
var mixins = ((mixins_QMARK_)?(function (){var mixin_sentinal = zprint.zprint.fzprint_hang_one.call(null,caller,loptions,(indent__$2 + ind),(indent__$2 + ind),((doc_string_QMARK_)?zprint.zfns.zfourth.call(null,zloc__$2):zprint.zfns.zthird.call(null,zloc__$2)));
var vec__11781 = zprint.zprint.style_lines.call(null,loptions,(indent__$2 + ind),mixin_sentinal);
var line_count = cljs.core.nth.call(null,vec__11781,(0),null);
var max_width = cljs.core.nth.call(null,vec__11781,(1),null);
return zprint.zprint.concat_no_nil.call(null,mixin_sentinal,zprint.zprint.fzprint_hang_remaining.call(null,caller,loptions,(max_width + (1)),(((indent__$2 + indent__$2) + ind) - (1)),zprint.zfns.znthnext.call(null,zloc__$2,((doc_string_QMARK_)?(3):(2))),fn_style__$6,mixin_length));
})():null);
return zprint.zprint.concat_no_nil.call(null,l_str_vec,zprint.zprint.fzprint_STAR_.call(null,loptions,(ind + (1)),zprint.zfns.zfirst.call(null,zloc__$2)),zprint.zprint.fzprint_hang_one.call(null,caller,((cljs.core._EQ_.call(null,len__$1,(2)))?options__$5:loptions),arg_1_indent__$1,(indent__$2 + ind),zprint.zfns.zsecond.call(null,zloc__$2)),((((doc_string_QMARK_) && (mixins_QMARK_)))?zprint.zprint.concat_no_nil.call(null,doc_string,mixins):((doc_string_QMARK_)?doc_string:((mixins_QMARK_)?mixins:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null)
))),zprint.zprint.fzprint_hang_remaining.call(null,caller,zprint.zprint.noarg1.call(null,options__$5,fn_style__$6),(indent__$2 + ind),(indent__$2 + ind),zprint.zfns.znthnext.call(null,zloc__$2,((mixins_QMARK_)?(arg_vec_index - (1)):((doc_string_QMARK_)?(2):(1)))),fn_style__$6),r_str_vec);
} else {
if(((cljs.core._EQ_.call(null,fn_style__$6,new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953))) || (cljs.core._EQ_.call(null,fn_style__$6,new cljs.core.Keyword(null,"arg1","arg1",951899358))) || (cljs.core._EQ_.call(null,fn_style__$6,new cljs.core.Keyword(null,"arg1-force-nl","arg1-force-nl",-945624718))) || (cljs.core._EQ_.call(null,fn_style__$6,new cljs.core.Keyword(null,"arg1->","arg1->",1319654329))))){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,zprint.zprint.fzprint_STAR_.call(null,loptions,(ind + (1)),zprint.zfns.zfirst.call(null,zloc__$2)),zprint.zprint.fzprint_hang_one.call(null,caller,((cljs.core._EQ_.call(null,len__$1,(2)))?options__$5:loptions),arg_1_indent__$1,(indent__$2 + ind),zprint.zfns.zsecond.call(null,zloc__$2)),(((len__$1 > (2)))?((cljs.core._EQ_.call(null,fn_style__$6,new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953)))?zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,(indent__$2 + ind)))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.fzprint_pairs.call(null,options__$5,(indent__$2 + ind),zprint.zfns.znthnext.call(null,zloc__$2,(1)))):zprint.zprint.fzprint_hang_remaining.call(null,caller,zprint.zprint.noarg1.call(null,options__$5,fn_style__$6),(indent__$2 + ind),(indent__$2 + ind),zprint.zfns.znthnext.call(null,zloc__$2,(1)),fn_style__$6)):null),r_str_vec);
} else {
if(cljs.core._EQ_.call(null,fn_style__$6,new cljs.core.Keyword(null,"arg1-extend","arg1-extend",-157225050))){
if(cljs.core.truth_(zprint.zfns.zvector_QMARK_.call(null,zprint.zfns.zsecond.call(null,zloc__$2)))){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,zprint.zprint.fzprint_STAR_.call(null,loptions,(ind + (1)),zprint.zfns.zfirst.call(null,zloc__$2)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,(indent__$2 + ind)))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.fzprint_STAR_.call(null,loptions,(ind + (1)),zprint.zfns.zsecond.call(null,zloc__$2)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,(indent__$2 + ind)))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.fzprint_extend.call(null,options__$5,(indent__$2 + ind),zprint.zfns.znthnext.call(null,zloc__$2,(1))),r_str_vec);
} else {
return zprint.zprint.concat_no_nil.call(null,l_str_vec,zprint.zprint.fzprint_STAR_.call(null,loptions,(ind + (1)),zprint.zfns.zfirst.call(null,zloc__$2)),zprint.zprint.fzprint_hang_one.call(null,caller,((cljs.core._EQ_.call(null,len__$1,(2)))?options__$5:loptions),arg_1_indent__$1,(indent__$2 + ind),zprint.zfns.zsecond.call(null,zloc__$2)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,(indent__$2 + ind)))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.fzprint_extend.call(null,options__$5,(indent__$2 + ind),zprint.zfns.znthnext.call(null,zloc__$2,(1))),r_str_vec);

}
} else {
return zprint.zprint.concat_no_nil.call(null,l_str_vec,zprint.zprint.fzprint_STAR_.call(null,loptions,(l_str_len + ind),zprint.zfns.zfirst.call(null,zloc__$2)),(cljs.core.truth_((function (){var and__3938__auto__ = arg_1_indent__$1;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not_EQ_.call(null,fn_style__$6,new cljs.core.Keyword(null,"flow","flow",590489032));
} else {
return and__3938__auto__;
}
})())?zprint.zprint.fzprint_hang_remaining.call(null,caller,zprint.zprint.noarg1.call(null,options__$5,fn_style__$6),arg_1_indent__$1,((indent__$2 + ind) + indent_adj),zprint.zfns.znthnext.call(null,zloc__$2,(0)),fn_style__$6):(function (){var local_indent = ((cljs.core._EQ_.call(null,fn_style__$6,new cljs.core.Keyword(null,"flow","flow",590489032)))?(indent__$2 + ind):((default_indent + ind) + indent_adj));
return zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,local_indent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.fzprint_flow_seq.call(null,zprint.zprint.noarg1.call(null,options__$5,fn_style__$6),local_indent,cljs.core.nthnext.call(null,zprint.zfns.zmap.call(null,cljs.core.identity,zloc__$2),(1)),new cljs.core.Keyword(null,"force-nl","force-nl",-755040826)));
})()),r_str_vec);

}
}
}
}
}
}
}
}
}
}
}
}
});
/**
 * Pretty print and focus style a :list element.
 */
zprint.zprint.fzprint_list = (function zprint$zprint$fzprint_list(options,ind,zloc){
return zprint.zprint.fzprint_list_STAR_.call(null,new cljs.core.Keyword(null,"list","list",765357683),"(",")",zprint.zprint.rightmost.call(null,options),ind,zloc);
});
/**
 * Pretty print and focus style a fn element.
 */
zprint.zprint.fzprint_anon_fn = (function zprint$zprint$fzprint_anon_fn(options,ind,zloc){
return zprint.zprint.fzprint_list_STAR_.call(null,new cljs.core.Keyword(null,"list","list",765357683),"#(",")",zprint.zprint.rightmost.call(null,options),ind,zloc);
});
/**
 * Return true if there are any collections in the collection.
 */
zprint.zprint.any_zcoll_QMARK_ = (function zprint$zprint$any_zcoll_QMARK_(options,ind,zloc){
var coll_QMARK__seq = zprint.zfns.zmap.call(null,zprint.zfns.zcoll_QMARK_,zloc);
return cljs.core.reduce.call(null,((function (coll_QMARK__seq){
return (function (p1__11784_SHARP_,p2__11785_SHARP_){
var or__3949__auto__ = p1__11784_SHARP_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return p2__11785_SHARP_;
}
});})(coll_QMARK__seq))
,null,coll_QMARK__seq);
});
/**
 * Given the output from fzprint-seq, which is a style-vec in
 *   the making without spacing, but with extra [] around the elements,
 *   wrap the elements to the right margin.
 */
zprint.zprint.wrap_zmap = (function zprint$zprint$wrap_zmap(caller,p__11786,ind,coll_print){
var map__11787 = p__11786;
var map__11787__$1 = ((((!((map__11787 == null)))?(((((map__11787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11787):map__11787);
var options = map__11787__$1;
var map__11788 = cljs.core.get.call(null,map__11787__$1,caller);
var map__11788__$1 = ((((!((map__11788 == null)))?(((((map__11788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11788):map__11788);
var wrap_after_multi_QMARK_ = cljs.core.get.call(null,map__11788__$1,new cljs.core.Keyword(null,"wrap-after-multi?","wrap-after-multi?",1010808052));
var width = cljs.core.get.call(null,map__11787__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rightcnt = cljs.core.get.call(null,map__11787__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var last_index = (cljs.core.count.call(null,coll_print) - (1));
var rightcnt__$1 = zprint.zprint.fix_rightcnt.call(null,rightcnt);
var cur_seq = coll_print;
var cur_ind = ind;
var index = (0);
var previous_newline_QMARK_ = false;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,cur_seq)){
return out;
} else {
var next_seq = cljs.core.first.call(null,cur_seq);
if(cljs.core.truth_(next_seq)){
var multi_QMARK_ = (cljs.core.count.call(null,cljs.core.first.call(null,cur_seq)) > (1));
var this_seq = cljs.core.first.call(null,cur_seq);
var _ = zprint.zprint.log_lines.call(null,options,"wrap-zmap:",ind,this_seq);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"wrap-zmap: ind:",ind,"this-seq:",this_seq):null);
var vec__11791 = zprint.zprint.style_lines.call(null,options,ind,this_seq);
var linecnt = cljs.core.nth.call(null,vec__11791,(0),null);
var max_width = cljs.core.nth.call(null,vec__11791,(1),null);
var lines = cljs.core.nth.call(null,vec__11791,(2),null);
var last_width = cljs.core.last.call(null,lines);
var len = (last_width - ind);
var len__$1 = (function (){var x__4037__auto__ = (0);
var y__4038__auto__ = len;
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})();
var newline_QMARK_ = cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,this_seq),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323));
var width__$1 = ((cljs.core._EQ_.call(null,index,last_index))?(width - rightcnt__$1):width);
var fit_QMARK_ = (function (){var and__3938__auto__ = !(newline_QMARK_);
if(and__3938__auto__){
var or__3949__auto__ = (index === (0));
if(or__3949__auto__){
return or__3949__auto__;
} else {
var and__3938__auto____$1 = ((multi_QMARK_)?cljs.core._EQ_.call(null,linecnt,(1)):true);
if(and__3938__auto____$1){
return ((cur_ind + len__$1) <= width__$1);
} else {
return and__3938__auto____$1;
}
}
} else {
return and__3938__auto__;
}
})();
var new_ind = ((((cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,this_seq),(2)),new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,this_seq),(2)),new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405)))))?(width__$1 + (1)):((((multi_QMARK_) && ((linecnt > (1))) && (cljs.core.not.call(null,wrap_after_multi_QMARK_))))?width__$1:((fit_QMARK_)?((cur_ind + len__$1) + (1)):((newline_QMARK_)?ind:((ind + len__$1) + (1))
))));
var G__11794 = cljs.core.next.call(null,cur_seq);
var G__11795 = new_ind;
var G__11796 = (index + (1));
var G__11797 = newline_QMARK_;
var G__11798 = cljs.core.concat.call(null,out,((fit_QMARK_)?((!((index === (0))))?zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null),this_seq):this_seq):((newline_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,(new_ind - (1))))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null):((previous_newline_QMARK_)?zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),this_seq):zprint.zprint.concat_no_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,ind))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),this_seq)))));
cur_seq = G__11794;
cur_ind = G__11795;
index = G__11796;
previous_newline_QMARK_ = G__11797;
out = G__11798;
continue;
} else {
return null;
}
}
break;
}
});
/**
 * Remove any [_ _ :newline] from the seq.
 */
zprint.zprint.remove_nl = (function zprint$zprint$remove_nl(coll){
return cljs.core.remove.call(null,(function (p1__11799_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,p1__11799_SHARP_),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323));
}),coll);
});
/**
 * Validate an options map that was returned from some internal configuration
 *   expression or configuration.  Either returns the options map or throws
 *   an error.
 */
zprint.zprint.internal_validate = (function zprint$zprint$internal_validate(options,error_str){
var errors = zprint.config.validate_options.call(null,options);
var errors__$1 = (cljs.core.truth_(errors)?["Options resulting from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_str)," had these errors: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(errors)].join(''):null);
if(!(cljs.core.empty_QMARK_.call(null,errors__$1))){
throw (new Error(errors__$1));
} else {
return options;
}
});
/**
 * Print basic stuff like a vector or a set.  Several options for how to
 *   print them.
 */
zprint.zprint.fzprint_vec_STAR_ = (function zprint$zprint$fzprint_vec_STAR_(caller,l_str,r_str,p__11800,ind,zloc){
var map__11801 = p__11800;
var map__11801__$1 = ((((!((map__11801 == null)))?(((((map__11801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11801):map__11801);
var options = map__11801__$1;
var map__11802 = cljs.core.get.call(null,map__11801__$1,caller);
var map__11802__$1 = ((((!((map__11802 == null)))?(((((map__11802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11802):map__11802);
var wrap_coll_QMARK_ = cljs.core.get.call(null,map__11802__$1,new cljs.core.Keyword(null,"wrap-coll?","wrap-coll?",908181571));
var wrap_QMARK_ = cljs.core.get.call(null,map__11802__$1,new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054));
var binding_QMARK_ = cljs.core.get.call(null,map__11802__$1,new cljs.core.Keyword(null,"binding?","binding?",-1071925644));
var option_fn_first = cljs.core.get.call(null,map__11802__$1,new cljs.core.Keyword(null,"option-fn-first","option-fn-first",-1679196201));
var respect_nl_QMARK_ = cljs.core.get.call(null,map__11802__$1,new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635));
var sort_QMARK_ = cljs.core.get.call(null,map__11802__$1,new cljs.core.Keyword(null,"sort?","sort?",-567661924));
var sort_in_code_QMARK_ = cljs.core.get.call(null,map__11802__$1,new cljs.core.Keyword(null,"sort-in-code?","sort-in-code?",111878497));
var rightcnt = cljs.core.get.call(null,map__11801__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var in_code_QMARK_ = cljs.core.get.call(null,map__11801__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
if(cljs.core.truth_((function (){var and__3938__auto__ = binding_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(options),(1));
} else {
return and__3938__auto__;
}
})())){
return zprint.zprint.fzprint_binding_vec.call(null,options,ind,zloc);
} else {
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options,ind,zloc,r_str);
var new_options = (cljs.core.truth_(option_fn_first)?(function (){var first_sexpr = zprint.zfns.zsexpr.call(null,zprint.zfns.zfirst_no_comment.call(null,zloc));
return zprint.zprint.internal_validate.call(null,option_fn_first.call(null,options,first_sexpr),[":vector :option-fn-first called with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_sexpr)].join(''));
})():null);
var map__11805 = zprint.config.merge_deep.call(null,options,new_options);
var map__11805__$1 = ((((!((map__11805 == null)))?(((((map__11805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11805):map__11805);
var options__$1 = map__11805__$1;
var map__11806 = cljs.core.get.call(null,map__11805__$1,caller);
var map__11806__$1 = ((((!((map__11806 == null)))?(((((map__11806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11806):map__11806);
var wrap_coll_QMARK___$1 = cljs.core.get.call(null,map__11806__$1,new cljs.core.Keyword(null,"wrap-coll?","wrap-coll?",908181571));
var wrap_QMARK___$1 = cljs.core.get.call(null,map__11806__$1,new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054));
var binding_QMARK___$1 = cljs.core.get.call(null,map__11806__$1,new cljs.core.Keyword(null,"binding?","binding?",-1071925644));
var option_fn_first__$1 = cljs.core.get.call(null,map__11806__$1,new cljs.core.Keyword(null,"option-fn-first","option-fn-first",-1679196201));
var respect_nl_QMARK___$1 = cljs.core.get.call(null,map__11806__$1,new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635));
var sort_QMARK___$1 = cljs.core.get.call(null,map__11806__$1,new cljs.core.Keyword(null,"sort?","sort?",-567661924));
var sort_in_code_QMARK___$1 = cljs.core.get.call(null,map__11806__$1,new cljs.core.Keyword(null,"sort-in-code?","sort-in-code?",111878497));
var respect_nl_QMARK___$2 = (function (){var and__3938__auto__ = respect_nl_QMARK___$1;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,sort_QMARK___$1);
} else {
return and__3938__auto__;
}
})();
var new_ind = (cljs.core.count.call(null,l_str) + ind);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),cljs.core.pr_str.call(null,"fzprint-vec*:",zprint.zfns.zstring.call(null,zloc),"new-ind:",new_ind)):null);
var zloc_seq = (cljs.core.truth_(respect_nl_QMARK___$2)?zprint.zfns.zmap_w_nl.call(null,cljs.core.identity,zloc):zprint.zfns.zmap.call(null,cljs.core.identity,zloc));
var zloc_seq__$1 = (cljs.core.truth_((function (){var and__3938__auto__ = sort_QMARK___$1;
if(cljs.core.truth_(and__3938__auto__)){
if(cljs.core.truth_(in_code_QMARK_)){
return sort_in_code_QMARK___$1;
} else {
return true;
}
} else {
return and__3938__auto__;
}
})())?zprint.zprint.order_out.call(null,caller,options__$1,cljs.core.identity,zloc_seq):zloc_seq);
var coll_print = (((zprint.zfns.zcount.call(null,zloc) === (0)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null)], null):zprint.zprint.fzprint_seq.call(null,options__$1,new_ind,zloc_seq__$1));
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),cljs.core.pr_str.call(null,"fzprint-vec*: coll-print:",coll_print)):null);
var coll_print__$1 = ((cljs.core.not.call(null,zprint.zprint.contains_nil_QMARK_.call(null,coll_print)))?coll_print:null);
var one_line = (cljs.core.truth_(coll_print__$1)?cljs.core.apply.call(null,zprint.zprint.concat_no_nil,cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null),(cljs.core.truth_(respect_nl_QMARK___$2)?coll_print__$1:zprint.zprint.remove_nl.call(null,coll_print__$1)))):null);
var ___$2 = zprint.zprint.log_lines.call(null,options__$1,"fzprint-vec*:",new_ind,one_line);
var one_line_lines = zprint.zprint.style_lines.call(null,options__$1,new_ind,one_line);
if(cljs.core.truth_(one_line_lines)){
if(cljs.core.truth_(zprint.zprint.fzfit_one_line.call(null,options__$1,one_line_lines))){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,one_line,r_str_vec);
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = (function (){var and__3938__auto__ = cljs.core.not.call(null,wrap_coll_QMARK___$1);
if(and__3938__auto__){
return zprint.zprint.any_zcoll_QMARK_.call(null,options__$1,new_ind,zloc);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.not.call(null,wrap_QMARK___$1);
}
})())){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,cljs.core.apply.call(null,zprint.zprint.concat_no_nil,cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,new_ind))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),zprint.zprint.remove_nl.call(null,coll_print__$1))),r_str_vec);
} else {
return zprint.zprint.concat_no_nil.call(null,l_str_vec,(function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-vec*: wrap coll-print:",coll_print__$1);
} else {
}

return zprint.zprint.wrap_zmap.call(null,caller,options__$1,new_ind,coll_print__$1);
})()
,r_str_vec);
}
}
} else {
return null;
}
}
});
zprint.zprint.fzprint_vec = (function zprint$zprint$fzprint_vec(options,ind,zloc){
return zprint.zprint.fzprint_vec_STAR_.call(null,new cljs.core.Keyword(null,"vector","vector",1902966158),"[","]",zprint.zprint.rightmost.call(null,options),ind,zloc);
});
zprint.zprint.fzprint_array = (function zprint$zprint$fzprint_array(options,ind,zloc){
return zprint.zprint.fzprint_vec_STAR_.call(null,new cljs.core.Keyword(null,"array","array",-2080713842),"[","]",zprint.zprint.rightmost.call(null,options),ind,zloc);
});
/**
 * Pretty print and focus style a :set element.
 */
zprint.zprint.fzprint_set = (function zprint$zprint$fzprint_set(options,ind,zloc){
return zprint.zprint.fzprint_vec_STAR_.call(null,new cljs.core.Keyword(null,"set","set",304602554),"#{","}",zprint.zprint.rightmost.call(null,options),ind,zloc);
});
/**
 * Do the same as interpose, but different seps depending on pred?.
 */
zprint.zprint.interpose_either = (function zprint$zprint$interpose_either(sep_true,sep_nil,pred_QMARK_,coll){
var coll__$1 = coll;
var out = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var interpose_QMARK_ = null;
while(true){
if(cljs.core.empty_QMARK_.call(null,coll__$1)){
return cljs.core.persistent_BANG_.call(null,out);
} else {
var G__11809 = cljs.core.next.call(null,coll__$1);
var G__11810 = (cljs.core.truth_(interpose_QMARK_)?zprint.zprint.conj_it_BANG_.call(null,out,sep_true,cljs.core.first.call(null,coll__$1)):(((cljs.core.count.call(null,out) === (0)))?cljs.core.conj_BANG_.call(null,out,cljs.core.first.call(null,coll__$1)):zprint.zprint.conj_it_BANG_.call(null,out,sep_nil,cljs.core.first.call(null,coll__$1))));
var G__11811 = pred_QMARK_.call(null,cljs.core.first.call(null,coll__$1));
coll__$1 = G__11809;
out = G__11810;
interpose_QMARK_ = G__11811;
continue;
}
break;
}
});
/**
 * Do the same as interpose, but different seps depending on pred-fn
 *   return and nl-separator?.
 */
zprint.zprint.interpose_either_nl_hf = (function zprint$zprint$interpose_either_nl_hf(sep_true,sep_true_nl,sep_nil,sep_nil_nl,p__11812,pred_fn,coll){
var map__11813 = p__11812;
var map__11813__$1 = ((((!((map__11813 == null)))?(((((map__11813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11813):map__11813);
var suboptions = map__11813__$1;
var nl_separator_QMARK_ = cljs.core.get.call(null,map__11813__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
var nl_separator_flow_QMARK_ = cljs.core.get.call(null,map__11813__$1,new cljs.core.Keyword(null,"nl-separator-flow?","nl-separator-flow?",495760215));
var coll__$1 = coll;
var out = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var interpose_QMARK_ = null;
var add_nl_QMARK_ = null;
while(true){
if(cljs.core.empty_QMARK_.call(null,coll__$1)){
return cljs.core.apply.call(null,zprint.zprint.concat_no_nil,cljs.core.persistent_BANG_.call(null,out));
} else {
var vec__11815 = cljs.core.first.call(null,coll__$1);
var hangflow = cljs.core.nth.call(null,vec__11815,(0),null);
var style_vec = cljs.core.nth.call(null,vec__11815,(1),null);
var G__11818 = cljs.core.next.call(null,coll__$1);
var G__11819 = (cljs.core.truth_(interpose_QMARK_)?zprint.zprint.conj_it_BANG_.call(null,out,(cljs.core.truth_(add_nl_QMARK_)?sep_true_nl:sep_true),style_vec):(((cljs.core.count.call(null,out) === (0)))?cljs.core.conj_BANG_.call(null,out,style_vec):zprint.zprint.conj_it_BANG_.call(null,out,(cljs.core.truth_(add_nl_QMARK_)?sep_nil_nl:sep_nil),style_vec)));
var G__11820 = (cljs.core.truth_(pred_fn)?pred_fn.call(null,style_vec):null);
var G__11821 = (function (){var and__3938__auto__ = nl_separator_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,hangflow,new cljs.core.Keyword(null,"flow","flow",590489032));
} else {
return and__3938__auto__;
}
})();
coll__$1 = G__11818;
out = G__11819;
interpose_QMARK_ = G__11820;
add_nl_QMARK_ = G__11821;
continue;
}
break;
}
});
/**
 * Put a single or double line between pairs returned from fzprint-map-two-up.
 *   The first argument is the map resulting from (:map options) or (:pair options)
 *   or whatever.  It should have :nl-separator? and :nl-separator-flow? in it.
 */
zprint.zprint.interpose_nl_hf = (function zprint$zprint$interpose_nl_hf(suboptions,ind,coll){
return zprint.zprint.interpose_either_nl_hf.call(null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,ind))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n"].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,ind))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),suboptions,null,coll);
});
zprint.zprint.fzprint_map_STAR_ = (function zprint$zprint$fzprint_map_STAR_(caller,l_str,r_str,p__11823,ind,zloc,ns){
var map__11824 = p__11823;
var map__11824__$1 = ((((!((map__11824 == null)))?(((((map__11824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11824):map__11824);
var options = map__11824__$1;
var map__11825 = cljs.core.get.call(null,map__11824__$1,caller);
var map__11825__$1 = ((((!((map__11825 == null)))?(((((map__11825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11825):map__11825);
var map_options = map__11825__$1;
var comma_QMARK_ = cljs.core.get.call(null,map__11825__$1,new cljs.core.Keyword(null,"comma?","comma?",1532168963));
var key_ignore = cljs.core.get.call(null,map__11825__$1,new cljs.core.Keyword(null,"key-ignore","key-ignore",75506668));
var key_ignore_silent = cljs.core.get.call(null,map__11825__$1,new cljs.core.Keyword(null,"key-ignore-silent","key-ignore-silent",-1720115060));
var nl_separator_QMARK_ = cljs.core.get.call(null,map__11825__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
var force_nl_QMARK_ = cljs.core.get.call(null,map__11825__$1,new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462));
var lift_ns_QMARK_ = cljs.core.get.call(null,map__11825__$1,new cljs.core.Keyword(null,"lift-ns?","lift-ns?",2021372853));
var lift_ns_in_code_QMARK_ = cljs.core.get.call(null,map__11825__$1,new cljs.core.Keyword(null,"lift-ns-in-code?","lift-ns-in-code?",1444279377));
var one_line_QMARK_ = cljs.core.get.call(null,map__11824__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var ztype = cljs.core.get.call(null,map__11824__$1,new cljs.core.Keyword(null,"ztype","ztype",-562179020));
var map_depth = cljs.core.get.call(null,map__11824__$1,new cljs.core.Keyword(null,"map-depth","map-depth",-191378641));
var in_code_QMARK_ = cljs.core.get.call(null,map__11824__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
var options__$1 = cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"map-depth","map-depth",-191378641),(map_depth + (1)));
var zloc__$1 = (cljs.core.truth_((function (){var and__3938__auto__ = cljs.core._EQ_.call(null,ztype,new cljs.core.Keyword(null,"sexpr","sexpr",-783344087));
if(and__3938__auto__){
var or__3949__auto__ = key_ignore;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return key_ignore_silent;
}
} else {
return and__3938__auto__;
}
})())?zprint.zprint.map_ignore.call(null,caller,options__$1,zloc):zloc);
var vec__11828 = zprint.zprint.partition_all_2_nc.call(null,zprint.zprint.no_max_length.call(null,options__$1),zprint.zfns.zseqnws.call(null,zloc__$1));
var no_sort_QMARK_ = cljs.core.nth.call(null,vec__11828,(0),null);
var pair_seq = cljs.core.nth.call(null,vec__11828,(1),null);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),cljs.core.pr_str.call(null,"fzprint-map* ns:",ns,"lift-ns?",lift_ns_QMARK_,"lift-ns-in-code?",lift_ns_in_code_QMARK_,"in-code?",in_code_QMARK_,"map-options:",map_options,"(first pair-seq):",cljs.core.map.call(null,cljs.core.comp.call(null,zprint.zfns.zstring,cljs.core.first),pair_seq))):null);
var vec__11831 = zprint.zfns.zlift_ns.call(null,cljs.core.assoc.call(null,map_options,new cljs.core.Keyword(null,"in-code?","in-code?",194866464),in_code_QMARK_),pair_seq,ns);
var ns__$1 = cljs.core.nth.call(null,vec__11831,(0),null);
var lift_pair_seq = cljs.core.nth.call(null,vec__11831,(1),null);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),cljs.core.pr_str.call(null,"fzprint-map* zlift-ns ns:",ns__$1)):null);
var l_str__$1 = (cljs.core.truth_(ns__$1)?["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(l_str)].join(''):l_str);
var pair_seq__$1 = (function (){var or__3949__auto__ = lift_pair_seq;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return pair_seq;
}
})();
var pair_seq__$2 = (cljs.core.truth_(no_sort_QMARK_)?pair_seq__$1:zprint.zprint.order_out.call(null,caller,options__$1,cljs.core.first,pair_seq__$1));
var max_length = zprint.zprint.get_max_length.call(null,options__$1);
var pair_count = cljs.core.count.call(null,pair_seq__$2);
var pair_seq__$3 = (((pair_count > max_length))?cljs.core.concat.call(null,cljs.core.take.call(null,max_length,pair_seq__$2),(new cljs.core.List(null,(new cljs.core.List(null,zprint.zfns.zdotdotdot.call(null),null,(1),null)),null,(1),null))):pair_seq__$2);
var indent = cljs.core.count.call(null,l_str__$1);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str__$1,zprint.zprint.zcolor_map.call(null,options__$1,l_str__$1),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options__$1,(indent + ind),zloc__$1,r_str);
if(cljs.core.empty_QMARK_.call(null,pair_seq__$3)){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,r_str_vec);
} else {
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-map*:",zprint.zfns.zstring.call(null,zloc__$1),"ind:",ind,"comma?",comma_QMARK_,"rightcnt:",new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070).cljs$core$IFn$_invoke$arity$1(options__$1)):null);
var pair_print_one_line = zprint.zprint.fzprint_map_two_up.call(null,caller,(cljs.core.truth_(one_line_QMARK_)?options__$1:cljs.core.assoc.call(null,options__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111),true)),(indent + ind),comma_QMARK_,pair_seq__$3);
var pair_print_one_line__$1 = zprint.zprint.remove_hangflow.call(null,pair_print_one_line);
var pair_print_one_line__$2 = (cljs.core.truth_(zprint.zprint.fzfit_one_line.call(null,options__$1,zprint.zprint.style_lines.call(null,options__$1,(indent + ind),pair_print_one_line__$1)))?pair_print_one_line__$1:null);
var one_line = (cljs.core.truth_(pair_print_one_line__$2)?cljs.core.apply.call(null,zprint.zprint.concat_no_nil,zprint.zprint.interpose_either.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [", ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null),cljs.core.constantly.call(null,comma_QMARK_),pair_print_one_line__$2)):null);
var one_line_lines = zprint.zprint.style_lines.call(null,options__$1,(indent + ind),one_line);
var one_line__$1 = (cljs.core.truth_(zprint.zprint.fzfit_one_line.call(null,options__$1,one_line_lines))?one_line:null);
if(cljs.core.truth_(one_line__$1)){
return zprint.zprint.concat_no_nil.call(null,l_str_vec,one_line__$1,r_str_vec);
} else {
if(cljs.core.not.call(null,one_line_QMARK_)){
var pair_print = zprint.zprint.fzprint_map_two_up.call(null,caller,options__$1,(indent + ind),comma_QMARK_,pair_seq__$3);
return zprint.zprint.concat_no_nil.call(null,l_str_vec,zprint.zprint.interpose_either_nl_hf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,(ind + (1))))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,(ind + (1))))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,(ind + (1))))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,(ind + (1))))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,(ind + (1))))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null),new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(options__$1),((function (pair_print,___$2,pair_print_one_line,pair_print_one_line__$1,pair_print_one_line__$2,one_line,one_line_lines,one_line__$1,options__$1,zloc__$1,vec__11828,no_sort_QMARK_,pair_seq,_,vec__11831,ns__$1,lift_pair_seq,___$1,l_str__$1,pair_seq__$1,pair_seq__$2,max_length,pair_count,pair_seq__$3,indent,l_str_vec,r_str_vec,map__11824,map__11824__$1,options,map__11825,map__11825__$1,map_options,comma_QMARK_,key_ignore,key_ignore_silent,nl_separator_QMARK_,force_nl_QMARK_,lift_ns_QMARK_,lift_ns_in_code_QMARK_,one_line_QMARK_,ztype,map_depth,in_code_QMARK_){
return (function (p1__11822_SHARP_){
var and__3938__auto__ = comma_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not_EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,p1__11822_SHARP_),(2)),new cljs.core.Keyword(null,"comment","comment",532206069))) && (cljs.core.not_EQ_.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,p1__11822_SHARP_),(2)),new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))));
} else {
return and__3938__auto__;
}
});})(pair_print,___$2,pair_print_one_line,pair_print_one_line__$1,pair_print_one_line__$2,one_line,one_line_lines,one_line__$1,options__$1,zloc__$1,vec__11828,no_sort_QMARK_,pair_seq,_,vec__11831,ns__$1,lift_pair_seq,___$1,l_str__$1,pair_seq__$1,pair_seq__$2,max_length,pair_count,pair_seq__$3,indent,l_str_vec,r_str_vec,map__11824,map__11824__$1,options,map__11825,map__11825__$1,map_options,comma_QMARK_,key_ignore,key_ignore_silent,nl_separator_QMARK_,force_nl_QMARK_,lift_ns_QMARK_,lift_ns_in_code_QMARK_,one_line_QMARK_,ztype,map_depth,in_code_QMARK_))
,pair_print),r_str_vec);
} else {
return null;
}
}
}
});
/**
 * Format a real map.
 */
zprint.zprint.fzprint_map = (function zprint$zprint$fzprint_map(options,ind,zloc){
var vec__11834 = (cljs.core.truth_(zprint.zfns.znamespacedmap_QMARK_.call(null,zloc))?(function (){var zloc_seq = zprint.zfns.zmap.call(null,cljs.core.identity,zloc);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-map: zloc-seq",cljs.core.map.call(null,zprint.zfns.zstring,zloc_seq)));
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zfns.zstring.call(null,cljs.core.first.call(null,zloc_seq)),cljs.core.second.call(null,zloc_seq)], null);
})():null);
var ns = cljs.core.nth.call(null,vec__11834,(0),null);
var lifted_map = cljs.core.nth.call(null,vec__11834,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-map: ns:",ns));
} else {
}

if(cljs.core.truth_(ns)){
return zprint.zprint.fzprint_map_STAR_.call(null,new cljs.core.Keyword(null,"map","map",1371690461),"{","}",zprint.zprint.rightmost.call(null,options),ind,lifted_map,ns);
} else {
return zprint.zprint.fzprint_map_STAR_.call(null,new cljs.core.Keyword(null,"map","map",1371690461),"{","}",zprint.zprint.rightmost.call(null,options),ind,zloc,null);
}
});
/**
 * Return true if the string starts with #object[
 */
zprint.zprint.object_str_QMARK_ = (function zprint$zprint$object_str_QMARK_(s){
return cljs.core.re_find.call(null,/^#object\[/,s);
});
/**
 * Print something that looks like #object[...] in a way
 *   that will acknowledge the structure inside of the [...]
 */
zprint.zprint.fzprint_object = (function zprint$zprint$fzprint_object(var_args){
var G__11838 = arguments.length;
switch (G__11838) {
case 4:
return zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$4 = (function (options,ind,zloc,zloc_value){
return zprint.zprint.fzprint_vec_STAR_.call(null,new cljs.core.Keyword(null,"object","object",1474613949),"#object[","]",options,ind,zprint.zfns.zobj_to_vec.call(null,zloc,zloc_value));
});

zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$3 = (function (options,ind,zloc){
return zprint.zprint.fzprint_vec_STAR_.call(null,new cljs.core.Keyword(null,"object","object",1474613949),"#object[","]",options,ind,zprint.zfns.zobj_to_vec.call(null,zloc));
});

zprint.zprint.fzprint_object.cljs$lang$maxFixedArity = 4;

/**
 * Find the hash-code identity for an object.
 */
zprint.zprint.hash_identity_str = (function zprint$zprint$hash_identity_str(obj){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,obj))].join('');
});
zprint.zprint.fzprint_atom = (function zprint$zprint$fzprint_atom(p__11840,ind,zloc){
var map__11841 = p__11840;
var map__11841__$1 = ((((!((map__11841 == null)))?(((((map__11841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11841):map__11841);
var options = map__11841__$1;
var map__11842 = cljs.core.get.call(null,map__11841__$1,new cljs.core.Keyword(null,"atom","atom",-397043653));
var map__11842__$1 = ((((!((map__11842 == null)))?(((((map__11842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11842):map__11842);
var object_QMARK_ = cljs.core.get.call(null,map__11842__$1,new cljs.core.Keyword(null,"object?","object?",-1313059217));
if(cljs.core.truth_((function (){var and__3938__auto__ = object_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return zprint.zprint.object_str_QMARK_.call(null,zprint.zfns.zstring.call(null,zloc));
} else {
return and__3938__auto__;
}
})())){
return zprint.zprint.fzprint_object.call(null,options,ind,zloc,zprint.zfns.zderef.call(null,zloc));
} else {
var l_str = "#<";
var r_str = ">";
var indent = cljs.core.count.call(null,l_str);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options,(indent + ind),zloc,r_str);
var arg_1 = ["Atom@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.hash_identity_str.call(null,zloc))].join('');
var arg_1_indent = (((ind + indent) + (1)) + cljs.core.count.call(null,arg_1));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-atom: arg-1:",arg_1,"zstring arg-1:",zprint.zfns.zstring.call(null,zloc)));
} else {
}

return zprint.zprint.concat_no_nil.call(null,l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1,zprint.zprint.zcolor_map.call(null,options,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),zprint.zprint.fzprint_hang_one.call(null,new cljs.core.Keyword(null,"unknown","unknown",-935977881),zprint.zprint.rightmost.call(null,options),arg_1_indent,(indent + ind),zprint.zfns.zderef.call(null,zloc)),r_str_vec);
}
});
/**
 * Print out a future or a promise or a delay.  These can only be 
 *   sexpressions, since they don't exist in a textual representation 
 *   of code (or data for that matter).  That means that we can use 
 *   regular sexpression operations on zloc.
 */
zprint.zprint.fzprint_future_promise_delay_agent = (function zprint$zprint$fzprint_future_promise_delay_agent(options,ind,zloc){
var zloc_type = (cljs.core.truth_(zprint.zfns.zfuture_QMARK_.call(null,zloc))?new cljs.core.Keyword(null,"future","future",1877842724):(cljs.core.truth_(zprint.zfns.zpromise_QMARK_.call(null,zloc))?new cljs.core.Keyword(null,"promise","promise",1767129287):(cljs.core.truth_(zprint.zfns.zdelay_QMARK_.call(null,zloc))?new cljs.core.Keyword(null,"delay","delay",-574225219):(cljs.core.truth_(zprint.zfns.zagent_QMARK_.call(null,zloc))?new cljs.core.Keyword(null,"agent","agent",-766455027):(function(){throw (new Error("Not a future, promise, or delay:",zprint.zfns.zstring.call(null,zloc)))})()
))));
if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"object?","object?",-1313059217).cljs$core$IFn$_invoke$arity$1(options.call(null,zloc_type));
if(cljs.core.truth_(and__3938__auto__)){
return zprint.zprint.object_str_QMARK_.call(null,zprint.zfns.zstring.call(null,zloc));
} else {
return and__3938__auto__;
}
})())){
if(((cljs.core._EQ_.call(null,zloc_type,new cljs.core.Keyword(null,"agent","agent",-766455027))) || (cljs.core.realized_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_object.call(null,options,ind,zloc,zprint.zfns.zderef.call(null,zloc));
} else {
return zprint.zprint.fzprint_object.call(null,options,ind,zloc);
}
} else {
var l_str = "#<";
var r_str = ">";
var indent = cljs.core.count.call(null,l_str);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options,(indent + ind),zloc,r_str);
var type_str = (function (){var G__11845 = zloc_type;
var G__11845__$1 = (((G__11845 instanceof cljs.core.Keyword))?G__11845.fqn:null);
switch (G__11845__$1) {
case "future":
return "Future@";

break;
case "promise":
return "Promise@";

break;
case "delay":
return "Delay@";

break;
case "agent":
return "Agent@";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11845__$1)].join('')));

}
})();
var arg_1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.hash_identity_str.call(null,zloc))].join('');
var arg_1_indent = (((ind + indent) + (1)) + cljs.core.count.call(null,arg_1));
var zloc_realized_QMARK_ = ((cljs.core._EQ_.call(null,zloc_type,new cljs.core.Keyword(null,"agent","agent",-766455027)))?true:cljs.core.realized_QMARK_.call(null,zloc));
var value = ((zloc_realized_QMARK_)?zprint.zfns.zderef.call(null,zloc):(function (){var G__11846 = zloc_type;
var G__11846__$1 = (((G__11846 instanceof cljs.core.Keyword))?G__11846.fqn:null);
switch (G__11846__$1) {
case "future":
return "pending";

break;
case "promise":
return "not-delivered";

break;
case "delay":
return "pending";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11846__$1)].join('')));

}
})());
var options__$1 = ((zloc_realized_QMARK_)?options:cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"string-str?","string-str?",2059147352),true));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),cljs.core.pr_str.call(null,"fzprint-fpda: arg-1:",arg_1,"zstring arg-1:",zprint.zfns.zstring.call(null,zloc)));
} else {
}

return zprint.zprint.concat_no_nil.call(null,l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1,zprint.zprint.zcolor_map.call(null,options__$1,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),zprint.zprint.fzprint_hang_one.call(null,new cljs.core.Keyword(null,"unknown","unknown",-935977881),zprint.zprint.rightmost.call(null,options__$1),arg_1_indent,(indent + ind),value),r_str_vec);
}
});
/**
 * Print a function object, what you get when you put a function in
 *   a collection, for instance.  This doesn't do macros, you will notice.
 *   It also can't be invoked when zloc is a zipper.
 */
zprint.zprint.fzprint_fn_obj = (function zprint$zprint$fzprint_fn_obj(p__11849,ind,zloc){
var map__11850 = p__11849;
var map__11850__$1 = ((((!((map__11850 == null)))?(((((map__11850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11850):map__11850);
var options = map__11850__$1;
var map__11851 = cljs.core.get.call(null,map__11850__$1,new cljs.core.Keyword(null,"fn-obj","fn-obj",465065936));
var map__11851__$1 = ((((!((map__11851 == null)))?(((((map__11851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11851):map__11851);
var object_QMARK_ = cljs.core.get.call(null,map__11851__$1,new cljs.core.Keyword(null,"object?","object?",-1313059217));
if(cljs.core.truth_((function (){var and__3938__auto__ = object_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return zprint.zprint.object_str_QMARK_.call(null,zprint.zfns.zstring.call(null,zloc));
} else {
return and__3938__auto__;
}
})())){
return zprint.zprint.fzprint_object.call(null,options,ind,zloc);
} else {
var l_str = "#<";
var r_str = ">";
var indent = cljs.core.count.call(null,l_str);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options,new cljs.core.Keyword(null,"fn","fn",-1175266204)),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options,(indent + ind),zloc,r_str,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var arg_1_left = "Fn@";
var arg_1_right = zprint.zprint.hash_identity_str.call(null,zloc);
var arg_1_indent = ((((ind + indent) + (1)) + cljs.core.count.call(null,arg_1_left)) + cljs.core.count.call(null,arg_1_right));
var class_str = cljs.core.pr_str.call(null,cljs.core.type.call(null,zloc));
var name_js = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(zloc.name)].join('');
var color = (cljs.core.truth_((function (){var or__3949__auto__ = cljs.core.re_find.call(null,/^clojure/,name_js);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.re_find.call(null,/^cljs/,name_js);
}
})())?zprint.zprint.zcolor_map.call(null,options,new cljs.core.Keyword(null,"fn","fn",-1175266204)):new cljs.core.Keyword(null,"none","none",1333468478));
var name_split = clojure.string.split.call(null,name_js,/\$/);
var arg_2 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,".",cljs.core.butlast.call(null,name_split)))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,name_split))].join('');
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-fn-obj: arg-1:",arg_1_left,arg_1_right,"zstring arg-1:",zprint.zfns.zstring.call(null,zloc)));
} else {
}

return zprint.zprint.concat_no_nil.call(null,l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1_left,zprint.zprint.zcolor_map.call(null,options,new cljs.core.Keyword(null,"fn","fn",-1175266204)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1_right,zprint.zprint.zcolor_map.call(null,options,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),zprint.zprint.fzprint_hang_one.call(null,new cljs.core.Keyword(null,"unknown","unknown",-935977881),zprint.zprint.rightmost.call(null,cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"string-str?","string-str?",2059147352),true,new cljs.core.Keyword(null,"string-color","string-color",-1853875244),color)),arg_1_indent,(indent + ind),arg_2),r_str_vec);
}
});
zprint.zprint.fzprint_ns = (function zprint$zprint$fzprint_ns(options,ind,zloc){
var l_str = "#<";
var r_str = ">";
var indent = cljs.core.count.call(null,l_str);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options,(indent + ind),zloc,r_str);
var arg_1 = "Namespace";
var arg_1_indent = (((ind + indent) + (1)) + cljs.core.count.call(null,arg_1));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-atom: arg-1:",arg_1,"zstring arg-1:",zprint.zfns.zstring.call(null,zloc)));
} else {
}

return zprint.zprint.concat_no_nil.call(null,l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1,zprint.zprint.zcolor_map.call(null,options,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),zprint.zprint.fzprint_hang_one.call(null,new cljs.core.Keyword(null,"unknown","unknown",-935977881),zprint.zprint.rightmost.call(null,options),arg_1_indent,(indent + ind),cljs.core.ns_name.call(null,zloc)),r_str_vec);
});
/**
 * Given an options map, decrement the :depth value and return the result.
 */
zprint.zprint.dec_depth = (function zprint$zprint$dec_depth(options){
if(cljs.core.truth_(options)){
return cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"depth","depth",1768663640),((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (1);
}
})() - (1)));
} else {
return null;
}
});
zprint.zprint.fzprint_record = (function zprint$zprint$fzprint_record(p__11854,ind,zloc){
var map__11855 = p__11854;
var map__11855__$1 = ((((!((map__11855 == null)))?(((((map__11855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11855):map__11855);
var options = map__11855__$1;
var map__11856 = cljs.core.get.call(null,map__11855__$1,new cljs.core.Keyword(null,"record","record",-779106859));
var map__11856__$1 = ((((!((map__11856 == null)))?(((((map__11856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11856):map__11856);
var record_type_QMARK_ = cljs.core.get.call(null,map__11856__$1,new cljs.core.Keyword(null,"record-type?","record-type?",-1195765660));
var to_string_QMARK_ = cljs.core.get.call(null,map__11856__$1,new cljs.core.Keyword(null,"to-string?","to-string?",1452120886));
if(cljs.core.truth_(to_string_QMARK_)){
return zprint.zprint.fzprint_STAR_.call(null,options,ind,zloc.toString());
} else {
if(cljs.core.not.call(null,record_type_QMARK_)){
return zprint.zprint.fzprint_STAR_.call(null,options,ind,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,zloc));
} else {
var l_str = "#";
var r_str = "";
var indent = cljs.core.count.call(null,l_str);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options,(indent + ind),zloc,r_str);
var arg_1 = cljs.core.pr_str.call(null,cljs.core.type.call(null,zloc));
var arg_1__$1 = (function (){var tokens = clojure.string.split.call(null,arg_1,/\./);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.interpose.call(null,".",tokens)));
})();
var arg_1_indent = (((ind + indent) + (1)) + cljs.core.count.call(null,arg_1__$1));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-record: arg-1:",arg_1__$1,"zstring zloc:",zprint.zfns.zstring.call(null,zloc)));
} else {
}

return zprint.zprint.concat_no_nil.call(null,l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1__$1,zprint.zprint.zcolor_map.call(null,options,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),zprint.zprint.fzprint_hang_one.call(null,new cljs.core.Keyword(null,"record","record",-779106859),zprint.zprint.dec_depth.call(null,options),arg_1_indent,(indent + ind),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,zloc)),r_str_vec);
}
}
});
/**
 * Print the two items in a meta node.  Different because it doesn't print
 *   a single collection, so it doesn't do any indent or rightmost.  It also
 *   uses a different approach to calling fzprint-flow-seq with the
 *   results zmap, so that it prints all of the seq, not just the rightmost.
 */
zprint.zprint.fzprint_meta = (function zprint$zprint$fzprint_meta(options,ind,zloc){
var l_str = "^";
var r_str = "";
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options,ind,zloc,r_str);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-meta: zloc:",zprint.zfns.zstring.call(null,zloc)));
} else {
}

return zprint.zprint.concat_no_nil.call(null,l_str_vec,zprint.zprint.fzprint_flow_seq.call(null,options,cljs.core.apply.call(null,cljs.core.vector,(cljs.core.count.call(null,l_str) + ind),cljs.core.repeat.call(null,(zprint.zfns.zcount.call(null,zloc) - (1)),ind)),zprint.zfns.zmap.call(null,cljs.core.identity,zloc)),r_str_vec);
});
/**
 * Print a reader-macro, often a reader-conditional. Adapted for differences
 *   in parsing #?@ between rewrite-clj and rewrite-cljs.  Also adapted for
 *   the rewrite-clj not parsing namespaced maps in the version presently
 *   used.
 */
zprint.zprint.fzprint_reader_macro = (function zprint$zprint$fzprint_reader_macro(options,ind,zloc){
var zstr = zprint.zfns.zstring.call(null,zprint.zfns.zfirst.call(null,zloc));
var alt_at_QMARK_ = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,zstr),(2))) && (cljs.core._EQ_.call(null,cljs.core.subs.call(null,zstr,(1),(2)),"@")));
var reader_cond_QMARK_ = cljs.core._EQ_.call(null,cljs.core.subs.call(null,zstr,(0),(1)),"?");
var namespaced_QMARK_ = cljs.core._EQ_.call(null,cljs.core.subs.call(null,zstr,(0),(1)),":");
var at_QMARK_ = ((cljs.core._EQ_.call(null,zprint.zfns.ztag.call(null,zprint.zfns.zsecond.call(null,zloc)),new cljs.core.Keyword(null,"deref","deref",-145586795))) || (alt_at_QMARK_));
var l_str = ((((reader_cond_QMARK_) && (at_QMARK_)))?"#?@":(cljs.core.truth_((function (){var and__3938__auto__ = reader_cond_QMARK_;
if(and__3938__auto__){
return zprint.zfns.zcoll_QMARK_.call(null,zprint.zfns.zsecond.call(null,zloc));
} else {
return and__3938__auto__;
}
})())?"#?":((reader_cond_QMARK_)?(function(){throw (new Error(["Unknown reader macro: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zfns.zstring.call(null,zloc)),"' zfirst zloc: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zfns.zstring.call(null,zprint.zfns.zfirst.call(null,zloc)))].join('')))})():((namespaced_QMARK_)?["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zstr)].join(''):"#"
))));
var r_str = "";
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg-bug?","dbg-bug?",-315779526).cljs$core$IFn$_invoke$arity$1(options))?null:null);
var indent = cljs.core.count.call(null,l_str);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map.call(null,options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.call(null,options,(indent + ind),zloc,r_str);
var floc = ((((at_QMARK_) && (!(alt_at_QMARK_))))?zprint.zfns.zfirst.call(null,zprint.zfns.zsecond.call(null,zloc)):zprint.zfns.zsecond.call(null,zloc));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.call(null,"fzprint-reader-macro: zloc:",zprint.zfns.zstring.call(null,zloc),"floc:",zprint.zfns.zstring.call(null,floc),"l-str:",l_str));
} else {
}

return zprint.zprint.concat_no_nil.call(null,l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),((reader_cond_QMARK_)?zprint.zprint.fzprint_map_STAR_.call(null,new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058),"(",")",zprint.zprint.rightmost.call(null,options),(indent + ind),floc,null):zprint.zprint.fzprint_flow_seq.call(null,options,(indent + ind),(function (){var zloc_seq = zprint.zfns.zmap.call(null,cljs.core.identity,zloc);
if(namespaced_QMARK_){
return cljs.core.next.call(null,zloc_seq);
} else {
return zloc_seq;
}
})())),r_str_vec);
});
zprint.zprint.prefix_tags = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"quote","quote",-262615245),"'",new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),"`",new cljs.core.Keyword(null,"unquote","unquote",1649741032),"~",new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),"~@",new cljs.core.Keyword(null,"deref","deref",-145586795),"@",new cljs.core.Keyword(null,"var","var",-769682797),"#'",new cljs.core.Keyword(null,"uneval","uneval",1932037707),"#_"], null);
/**
 * Change options as necessary based on prefix tag.
 */
zprint.zprint.prefix_options = (function zprint$zprint$prefix_options(options,prefix_tag){
if(cljs.core._EQ_.call(null,prefix_tag,new cljs.core.Keyword(null,"uneval","uneval",1932037707))){
return cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"color-map","color-map",-207789684),new cljs.core.Keyword(null,"color-map","color-map",-207789684).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uneval","uneval",1932037707).cljs$core$IFn$_invoke$arity$1(options)));
} else {
if(cljs.core._EQ_.call(null,prefix_tag,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847))){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color-map","color-map",-207789684),new cljs.core.Keyword(null,"paren","paren",-294107600)], null),new cljs.core.Keyword(null,"syntax-quote-paren","syntax-quote-paren",646342677).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color-map","color-map",-207789684).cljs$core$IFn$_invoke$arity$1(options))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color-map","color-map",-207789684),new cljs.core.Keyword(null,"hash-paren","hash-paren",-1158425562)], null),new cljs.core.Keyword(null,"syntax-quote-paren","syntax-quote-paren",646342677).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color-map","color-map",-207789684).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return options;

}
}
});
/**
 * The pretty print part of fzprint.
 */
zprint.zprint.fzprint_STAR_ = (function zprint$zprint$fzprint_STAR_(p__11859,indent,zloc){
var map__11860 = p__11859;
var map__11860__$1 = ((((!((map__11860 == null)))?(((((map__11860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11860):map__11860);
var options = map__11860__$1;
var max_depth = cljs.core.get.call(null,map__11860__$1,new cljs.core.Keyword(null,"max-depth","max-depth",127060793));
var fn_map = cljs.core.get.call(null,map__11860__$1,new cljs.core.Keyword(null,"fn-map","fn-map",565481146));
var shift_seq = cljs.core.get.call(null,map__11860__$1,new cljs.core.Keyword(null,"shift-seq","shift-seq",267527195));
var max_hang_count = cljs.core.get.call(null,map__11860__$1,new cljs.core.Keyword(null,"max-hang-count","max-hang-count",637294812));
var in_code_QMARK_ = cljs.core.get.call(null,map__11860__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
var max_hang_depth = cljs.core.get.call(null,map__11860__$1,new cljs.core.Keyword(null,"max-hang-depth","max-hang-depth",-915232220));
var in_hang_QMARK_ = cljs.core.get.call(null,map__11860__$1,new cljs.core.Keyword(null,"in-hang?","in-hang?",-1065695639));
var rightcnt = cljs.core.get.call(null,map__11860__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var width = cljs.core.get.call(null,map__11860__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var hex_QMARK_ = cljs.core.get.call(null,map__11860__$1,new cljs.core.Keyword(null,"hex?","hex?",890937870));
var dbg_print_QMARK_ = cljs.core.get.call(null,map__11860__$1,new cljs.core.Keyword(null,"dbg-print?","dbg-print?",-660113872));
var dbg_QMARK_ = cljs.core.get.call(null,map__11860__$1,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771));
var string_color = cljs.core.get.call(null,map__11860__$1,new cljs.core.Keyword(null,"string-color","string-color",-1853875244));
var trim_comments_QMARK_ = cljs.core.get.call(null,map__11860__$1,new cljs.core.Keyword(null,"trim-comments?","trim-comments?",-1532658667));
var max_hang_span = cljs.core.get.call(null,map__11860__$1,new cljs.core.Keyword(null,"max-hang-span","max-hang-span",256100693));
var one_line_QMARK_ = cljs.core.get.call(null,map__11860__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var depth = cljs.core.get.call(null,map__11860__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var string_str_QMARK_ = cljs.core.get.call(null,map__11860__$1,new cljs.core.Keyword(null,"string-str?","string-str?",2059147352));
var avail = (width - indent);
var options__$1 = cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"depth","depth",1768663640),(depth + (1)));
var options__$2 = (cljs.core.truth_((function (){var or__3949__auto__ = dbg_QMARK_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return dbg_print_QMARK_;
}
})())?cljs.core.assoc.call(null,options__$1,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,options__$1,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778),"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(one_line_QMARK_)?"o":(cljs.core.truth_(in_hang_QMARK_)?"h":"."
)))].join('')):options__$1);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$2))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$2),"fzprint* **** rightcnt:",rightcnt,"depth:",depth,cljs.core.pr_str.call(null,zprint.zfns.zstring.call(null,zloc))):null);
var dbg_data = cljs.core.deref.call(null,zprint.zprint.fzprint_dbg);
var dbg_focus_QMARK_ = (function (){var and__3938__auto__ = dbg_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,dbg_data,cljs.core.second.call(null,zprint.zfns.zfind_path.call(null,zloc)));
} else {
return and__3938__auto__;
}
})();
var options__$3 = (cljs.core.truth_(dbg_focus_QMARK_)?cljs.core.assoc.call(null,options__$2,new cljs.core.Keyword(null,"dbg","dbg",202767554),new cljs.core.Keyword(null,"on","on",173873944)):options__$2);
var ___$1 = (cljs.core.truth_(dbg_focus_QMARK_)?cljs.core.println.call(null,"fzprint dbg-data:",dbg_data):null);
if(cljs.core.truth_((function (){var and__3938__auto__ = zprint.zfns.zcoll_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__3938__auto__)){
return (((depth >= max_depth)) || ((zprint.zprint.get_max_length.call(null,options__$3) === (0))));
} else {
return and__3938__auto__;
}
})())){
if(cljs.core._EQ_.call(null,zloc,zprint.zfns.zdotdotdot.call(null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["...",zprint.zprint.zcolor_map.call(null,options__$3,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max-depth-string","max-depth-string",-474325435).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.zprint.zcolor_map.call(null,options__$3,new cljs.core.Keyword(null,"keyword","keyword",811389747)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
}
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = in_hang_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,in_code_QMARK_)) && (((((depth - in_hang_QMARK_) > max_hang_span)) || (((cljs.core.not.call(null,one_line_QMARK_)) && ((zprint.zfns.zcount.call(null,zloc) > max_hang_count)) && ((depth > max_hang_depth)))))));
} else {
return and__3938__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(zprint.zfns.zrecord_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_record.call(null,options__$3,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zlist_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_list.call(null,options__$3,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zvector_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_vec.call(null,options__$3,indent,zloc);
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = zprint.zfns.zmap_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return zprint.zfns.znamespacedmap_QMARK_.call(null,zloc);
}
})())){
return zprint.zprint.fzprint_map.call(null,options__$3,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zset_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_set.call(null,options__$3,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zanonfn_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_anon_fn.call(null,options__$3,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zfn_obj_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_fn_obj.call(null,options__$3,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zarray_QMARK_.call(null,zloc))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"object?","object?",-1313059217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"array","array",-2080713842).cljs$core$IFn$_invoke$arity$1(options__$3)))){
return zprint.zprint.fzprint_object.call(null,options__$3,indent,zloc);
} else {
return zprint.zprint.fzprint_array.call(null,options__$3,indent,zprint.zfns.zexpandarray.call(null,zloc));
}
} else {
if(cljs.core.truth_(zprint.zfns.zatom_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_atom.call(null,options__$3,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zmeta_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_meta.call(null,options__$3,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zprint.prefix_tags.call(null,zprint.zfns.ztag.call(null,zloc)))){
return zprint.zprint.fzprint_vec_STAR_.call(null,new cljs.core.Keyword(null,"none","none",1333468478),zprint.zprint.prefix_tags.call(null,zprint.zfns.ztag.call(null,zloc)),"",zprint.zprint.prefix_options.call(null,options__$3,zprint.zfns.ztag.call(null,zloc)),indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zns_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_ns.call(null,options__$3,indent,zloc);
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = zprint.zfns.zpromise_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = zprint.zfns.zfuture_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = zprint.zfns.zdelay_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return zprint.zfns.zagent_QMARK_.call(null,zloc);
}
}
}
})())){
return zprint.zprint.fzprint_future_promise_delay_agent.call(null,options__$3,indent,zloc);
} else {
if(cljs.core.truth_(zprint.zfns.zreader_macro_QMARK_.call(null,zloc))){
return zprint.zprint.fzprint_reader_macro.call(null,options__$3,indent,zloc);
} else {
if(((cljs.core._EQ_.call(null,zprint.zfns.ztag.call(null,zloc),new cljs.core.Keyword(null,"newline","newline",1790071323))) && ((depth > (0))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"newline","newline",1790071323)], null)], null);
} else {
var zstr = zprint.zfns.zstring.call(null,zloc);
var overflow_in_hang_QMARK_ = (function (){var and__3938__auto__ = in_hang_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return (((cljs.core.count.call(null,zstr) + indent) + (function (){var or__3949__auto__ = rightcnt;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})()) > width);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(zprint.zfns.zcomment_QMARK_.call(null,zloc))){
var zcomment = (((((depth === (0))) && (cljs.core.not.call(null,trim_comments_QMARK_))))?zstr:clojure.string.replace.call(null,zstr,"\n",""));
var inline_spaces = (cljs.core.truth_(new cljs.core.Keyword(null,"inline?","inline?",-1674483791).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options__$3)))?zprint.zfns.zinlinecomment_QMARK_.call(null,zloc):null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),"fzprint* trim-comments?:",trim_comments_QMARK_);
} else {
}

if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"count?","count?",-122202128).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(and__3938__auto__)){
return overflow_in_hang_QMARK_;
} else {
return and__3938__auto__;
}
})())){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),"fzprint*: overflow comment ========");
} else {
}

return null;
} else {
if(cljs.core.truth_(inline_spaces)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zcomment,zprint.zprint.zcolor_map.call(null,options__$3,new cljs.core.Keyword(null,"comment","comment",532206069)),new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405),inline_spaces], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zcomment,zprint.zprint.zcolor_map.call(null,options__$3,new cljs.core.Keyword(null,"comment","comment",532206069)),new cljs.core.Keyword(null,"comment","comment",532206069)], null)], null);
}
}
} else {
if(cljs.core.truth_(zprint.zfns.zwhitespaceorcomment_QMARK_.call(null,zloc))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null)], null);
} else {
if(cljs.core.truth_(overflow_in_hang_QMARK_)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),"fzprint*: overflow <<<<<<<<<<");
} else {
}

return null;
} else {
if(cljs.core.truth_(zprint.zfns.zkeyword_QMARK_.call(null,zloc))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map.call(null,options__$3,new cljs.core.Keyword(null,"keyword","keyword",811389747)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(typeof zprint.zfns.zsexpr.call(null,zloc) === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(string_str_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zfns.zsexpr.call(null,zloc))].join(''):zprint.zfns.zstring.call(null,zloc)),(cljs.core.truth_(string_color)?string_color:zprint.zprint.zcolor_map.call(null,options__$3,new cljs.core.Keyword(null,"string","string",-1989541586))),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(cljs.core.truth_(zprint.zprint.showfn_QMARK_.call(null,fn_map,zprint.zfns.zsexpr.call(null,zloc)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map.call(null,options__$3,new cljs.core.Keyword(null,"fn","fn",-1175266204)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(cljs.core.truth_(zprint.zprint.show_user_fn_QMARK_.call(null,options__$3,zprint.zfns.zsexpr.call(null,zloc)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map.call(null,options__$3,new cljs.core.Keyword(null,"user-fn","user-fn",223976490)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(typeof zprint.zfns.zsexpr.call(null,zloc) === 'number'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(hex_QMARK_)?zprint.zfns.znumstr.call(null,zloc,hex_QMARK_,shift_seq):zstr),zprint.zprint.zcolor_map.call(null,options__$3,new cljs.core.Keyword(null,"number","number",1570378438)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if((zprint.zfns.zsexpr.call(null,zloc) == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map.call(null,options__$3,new cljs.core.Keyword(null,"nil","nil",99600501)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map.call(null,options__$3,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);

}
}
}
}
}
}
}
}
}

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
 * Take a string and an index, and look for the last space prior to the
 *   index. If we wanted to tie ourselves to 1.8, we could use 
 *   clojure.string/last-index-of, but we don't.  However, we use similar
 *   conventions, i.e., if no space is found, return nil, and if the index
 *   is a space return that value, and accept any from-index, including one
 *   larger than the length of the string.
 */
zprint.zprint.last_space = (function zprint$zprint$last_space(s,from_index){
var from_index__$1 = (function (){var x__4040__auto__ = (cljs.core.count.call(null,s) - (1));
var y__4041__auto__ = from_index;
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})();
var rev_seq = cljs.core.reverse.call(null,cljs.core.take.call(null,(from_index__$1 + (1)),s));
var seq_after_space = cljs.core.take_while.call(null,((function (from_index__$1,rev_seq){
return (function (p1__11862_SHARP_){
return cljs.core.not_EQ_.call(null,p1__11862_SHARP_," ");
});})(from_index__$1,rev_seq))
,rev_seq);
var space_index = (from_index__$1 - cljs.core.count.call(null,seq_after_space));
if((space_index < (0))){
return null;
} else {
return space_index;
}
});
/**
 * Take a string and an index, and look for the next space *after* the
 *   index. If no space is found, return nil. Accept any from-index, 
 *   including one larger than the length of the string.
 */
zprint.zprint.next_space = (function zprint$zprint$next_space(s,from_index){
var from_index__$1 = (from_index + (1));
if((from_index__$1 < cljs.core.count.call(null,s))){
var seq_after_space = cljs.core.take_while.call(null,((function (from_index__$1){
return (function (p1__11863_SHARP_){
return cljs.core.not_EQ_.call(null,p1__11863_SHARP_," ");
});})(from_index__$1))
,cljs.core.drop.call(null,from_index__$1,cljs.core.seq.call(null,s)));
var space_index = (from_index__$1 + cljs.core.count.call(null,seq_after_space));
if((space_index >= cljs.core.count.call(null,s))){
return null;
} else {
return space_index;
}
} else {
return null;
}
});
/**
 * If this is a comment, and it is too long, word wrap it to the right width.
 *   Note that top level comments may well end with a newline, so remove it
 *   and reapply it at the end if that is the case.
 */
zprint.zprint.wrap_comment = (function zprint$zprint$wrap_comment(width,p__11864,start){
var vec__11865 = p__11864;
var s = cljs.core.nth.call(null,vec__11865,(0),null);
var color = cljs.core.nth.call(null,vec__11865,(1),null);
var stype = cljs.core.nth.call(null,vec__11865,(2),null);
var element = vec__11865;
if(!(cljs.core._EQ_.call(null,stype,new cljs.core.Keyword(null,"comment","comment",532206069)))){
return element;
} else {
var comment_width = (width - start);
var semi_str = cljs.core.re_find.call(null,/;*/,s);
var rest_str = cljs.core.subs.call(null,s,cljs.core.count.call(null,semi_str));
var space_str = cljs.core.re_find.call(null,/ */,rest_str);
var rest_str__$1 = cljs.core.subs.call(null,rest_str,cljs.core.count.call(null,space_str));
var newline_QMARK_ = cljs.core.re_find.call(null,/\n$/,s);
var comment_width__$1 = ((comment_width - cljs.core.count.call(null,semi_str)) - cljs.core.count.call(null,space_str));
var comment_str = rest_str__$1;
var out = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_.call(null,comment_str)){
if((cljs.core.count.call(null,out) === (0))){
if(cljs.core.truth_(newline_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semi_str,color,stype], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [semi_str,color,stype], null)], null);
}
} else {
return cljs.core.persistent_BANG_.call(null,(cljs.core.truth_(newline_QMARK_)?cljs.core.conj_BANG_.call(null,out,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)):out));
}
} else {
var last_space_index = (((cljs.core.count.call(null,comment_str) <= comment_width__$1))?(cljs.core.count.call(null,comment_str) - (1)):(((comment_width__$1 <= (0)))?(function (){var or__3949__auto__ = zprint.zprint.next_space.call(null,comment_str,(0));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (cljs.core.count.call(null,comment_str) - (1));
}
})():(function (){var or__3949__auto__ = zprint.zprint.last_space.call(null,comment_str,comment_width__$1);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = zprint.zprint.next_space.call(null,comment_str,comment_width__$1);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return (cljs.core.count.call(null,comment_str) - (1));
}
}
})()));
var next_comment = clojure.string.trimr.call(null,cljs.core.subs.call(null,comment_str,(0),(last_space_index + (1))));
var G__11868 = cljs.core.subs.call(null,comment_str,(last_space_index + (1)));
var G__11869 = (((cljs.core.count.call(null,out) === (0)))?cljs.core.conj_BANG_.call(null,out,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(semi_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(space_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_comment)].join(''),color,stype], null)):cljs.core.conj_BANG_.call(null,cljs.core.conj_BANG_.call(null,out,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,start))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(semi_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(space_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_comment)].join(''),color,new cljs.core.Keyword(null,"comment-wrap","comment-wrap",720664128)], null)));
comment_str = G__11868;
out = G__11869;
continue;
}
break;
}
}
});
/**
 * Takes the start of this vector and the vector itself.
 */
zprint.zprint.loc_vec = (function zprint$zprint$loc_vec(start,p__11870){
var vec__11871 = p__11870;
var s = cljs.core.nth.call(null,vec__11871,(0),null);
var split = zprint.zprint.split_lf.call(null,s);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,split),(1))){
return (start + cljs.core.count.call(null,s));
} else {
return cljs.core.count.call(null,cljs.core.last.call(null,split));
}
});
/**
 * Take a style-vec and produce a style-loc-vec with the starting column
 *   of each element in the style-vec.
 */
zprint.zprint.style_loc_vec = (function zprint$zprint$style_loc_vec(style_vec){
return cljs.core.butlast.call(null,cljs.core.reductions.call(null,zprint.zprint.loc_vec,(0),style_vec));
});
/**
 * Take a transient output vector and a vector and lift any style-vec elements
 *   out of the input vector.
 */
zprint.zprint.lift_vec = (function zprint$zprint$lift_vec(out_vec,element){
if(typeof cljs.core.first.call(null,element) === 'string'){
return cljs.core.conj.call(null,out_vec,element);
} else {
var element_vec = element;
var out = out_vec;
while(true){
if(cljs.core.not.call(null,element_vec)){
return out;
} else {
var G__11874 = cljs.core.next.call(null,element_vec);
var G__11875 = cljs.core.conj.call(null,out,cljs.core.first.call(null,element_vec));
element_vec = G__11874;
out = G__11875;
continue;
}
break;
}
}
});
/**
 * Take a style-vec [[s color type] [s color type] [[s color type]
 *   [s color type]] [s color type] ...] and lift out the inner vectors.
 */
zprint.zprint.lift_style_vec = (function zprint$zprint$lift_style_vec(style_vec){
return cljs.core.reduce.call(null,zprint.zprint.lift_vec,cljs.core.PersistentVector.EMPTY,style_vec);
});
/**
 * Take the final output style-vec, and wrap any comments which run over
 *   the width. Looking for 
 */
zprint.zprint.fzprint_wrap_comments = (function zprint$zprint$fzprint_wrap_comments(p__11876,style_vec){
var map__11877 = p__11876;
var map__11877__$1 = ((((!((map__11877 == null)))?(((((map__11877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11877):map__11877);
var options = map__11877__$1;
var width = cljs.core.get.call(null,map__11877__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var start_col = zprint.zprint.style_loc_vec.call(null,style_vec);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-wrap-comments: style-vec:",cljs.core.pr_str.call(null,style_vec)):null);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-wrap-comments: start-col:",start_col):null);
var wrap_style_vec = cljs.core.mapv.call(null,cljs.core.partial.call(null,zprint.zprint.wrap_comment,width),style_vec,start_col);
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.call(null,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-wrap-comments: wrap:",cljs.core.pr_str.call(null,style_vec)):null);
var out_style_vec = zprint.zprint.lift_style_vec.call(null,wrap_style_vec);
return out_style_vec;
});
/**
 * Try to bring inline comments back onto the line on which they belong.
 */
zprint.zprint.fzprint_inline_comments = (function zprint$zprint$fzprint_inline_comments(p__11879,style_vec){
var map__11880 = p__11879;
var map__11880__$1 = ((((!((map__11880 == null)))?(((((map__11880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11880):map__11880);
var options = map__11880__$1;
var width = cljs.core.get.call(null,map__11880__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var cvec = style_vec;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,cvec)){
return out;
} else {
var vec__11882 = cljs.core.first.call(null,cvec);
var s = cljs.core.nth.call(null,vec__11882,(0),null);
var c = cljs.core.nth.call(null,vec__11882,(1),null);
var e = cljs.core.nth.call(null,vec__11882,(2),null);
var element = vec__11882;
var vec__11885 = cljs.core.second.call(null,cvec);
var _ = cljs.core.nth.call(null,vec__11885,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__11885,(1),null);
var ne = cljs.core.nth.call(null,vec__11885,(2),null);
var nn = cljs.core.nth.call(null,vec__11885,(3),null);
var next_element = vec__11885;
var new_element = ((((cljs.core._EQ_.call(null,e,new cljs.core.Keyword(null,"indent","indent",-148200125))) && (cljs.core._EQ_.call(null,ne,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zprint.blanks.call(null,nn),c,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)], null):((cljs.core._EQ_.call(null,e,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,c,new cljs.core.Keyword(null,"comment","comment",532206069)], null):element
));
var G__11888 = cljs.core.next.call(null,cvec);
var G__11889 = cljs.core.conj.call(null,out,new_element);
cvec = G__11888;
out = G__11889;
continue;
}
break;
}
});
/**
 * The pretty print part of fzprint.
 */
zprint.zprint.fzprint = (function zprint$zprint$fzprint(options,indent,zloc){
var zloc__$1 = ((cljs.core.not.call(null,(function (){var and__3938__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ztype","ztype",-562179020).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"zipper","zipper",1500694438));
if(and__3938__auto__){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(options));
} else {
return and__3938__auto__;
}
})()))?zloc:zprint.zutil.add_spec_to_docstring.call(null,zloc,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(options))));
var style_vec = zprint.zprint.fzprint_STAR_.call(null,cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"depth","depth",1768663640),(0),new cljs.core.Keyword(null,"map-depth","map-depth",-191378641),(0)),indent,zloc__$1);
return style_vec;
});
/**
 * Count lines in a string.
 */
zprint.zprint.line_count = (function zprint$zprint$line_count(s){
return (cljs.core.count.call(null,cljs.core.re_seq.call(null,/\n/,s)) + (1));
});
/**
 * Return a vector the lengths of lines.
 */
zprint.zprint.line_widths = (function zprint$zprint$line_widths(s){
return cljs.core.map.call(null,cljs.core.count,clojure.string.split.call(null,s,/\n/));
});
/**
 * Split a string into lines, and figure the max width.
 */
zprint.zprint.max_width = (function zprint$zprint$max_width(s){
return cljs.core.reduce.call(null,cljs.core.max,zprint.zprint.line_widths.call(null,s));
});
/**
 * Takes a string, and expands tabs inside of the string based
 *   on a tab-size argument.
 */
zprint.zprint.expand_tabs = (function zprint$zprint$expand_tabs(var_args){
var G__11891 = arguments.length;
switch (G__11891) {
case 2:
return zprint.zprint.expand_tabs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.zprint.expand_tabs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.zprint.expand_tabs.cljs$core$IFn$_invoke$arity$2 = (function (tab_size,s){
return cljs.core.apply.call(null,cljs.core.str,(function (){var char_seq = cljs.core.seq.call(null,s);
var cur_len = cljs.core.long$.call(null,(0));
var out = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_.call(null,char_seq)){
return cljs.core.persistent_BANG_.call(null,out);
} else {
var this_char = cljs.core.first.call(null,char_seq);
var tab_expansion = ((cljs.core._EQ_.call(null,this_char,"\t"))?(tab_size - cljs.core.mod.call(null,cur_len,tab_size)):null);
var G__11893 = cljs.core.rest.call(null,char_seq);
var G__11894 = ((cljs.core._EQ_.call(null,this_char,"\n"))?(0):(cur_len + cljs.core.long$.call(null,(function (){var or__3949__auto__ = tab_expansion;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (1);
}
})())));
var G__11895 = (cljs.core.truth_(tab_expansion)?cljs.core.apply.call(null,zprint.zprint.conj_it_BANG_,out,cljs.core.seq.call(null,zprint.zprint.blanks.call(null,tab_expansion))):cljs.core.conj_BANG_.call(null,out,this_char));
char_seq = G__11893;
cur_len = G__11894;
out = G__11895;
continue;
}
break;
}
})());
});

zprint.zprint.expand_tabs.cljs$core$IFn$_invoke$arity$1 = (function (s){
return zprint.zprint.expand_tabs.call(null,(8),s);
});

zprint.zprint.expand_tabs.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
zprint.zprint.r = (function (left,right,__meta,__extmap,__hash){
this.left = left;
this.right = right;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
zprint.zprint.r.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

zprint.zprint.r.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k11897,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__11901 = k11897;
var G__11901__$1 = (((G__11901 instanceof cljs.core.Keyword))?G__11901.fqn:null);
switch (G__11901__$1) {
case "left":
return self__.left;

break;
case "right":
return self__.right;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11897,else__4206__auto__);

}
});

zprint.zprint.r.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#zprint.zprint.r{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"left","left",-399115937),self__.left],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"right","right",-452581833),self__.right],null))], null),self__.__extmap));
});

zprint.zprint.r.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11896){
var self__ = this;
var G__11896__$1 = this;
return (new cljs.core.RecordIter((0),G__11896__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

zprint.zprint.r.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

zprint.zprint.r.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new zprint.zprint.r(self__.left,self__.right,self__.__meta,self__.__extmap,self__.__hash));
});

zprint.zprint.r.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

zprint.zprint.r.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1384233907 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

zprint.zprint.r.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11898,other11899){
var self__ = this;
var this11898__$1 = this;
return ((!((other11899 == null))) && ((this11898__$1.constructor === other11899.constructor)) && (cljs.core._EQ_.call(null,this11898__$1.left,other11899.left)) && (cljs.core._EQ_.call(null,this11898__$1.right,other11899.right)) && (cljs.core._EQ_.call(null,this11898__$1.__extmap,other11899.__extmap)));
});

zprint.zprint.r.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new zprint.zprint.r(self__.left,self__.right,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

zprint.zprint.r.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__11896){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__11902 = cljs.core.keyword_identical_QMARK_;
var expr__11903 = k__4211__auto__;
if(cljs.core.truth_(pred__11902.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expr__11903))){
return (new zprint.zprint.r(G__11896,self__.right,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11902.call(null,new cljs.core.Keyword(null,"right","right",-452581833),expr__11903))){
return (new zprint.zprint.r(self__.left,G__11896,self__.__meta,self__.__extmap,null));
} else {
return (new zprint.zprint.r(self__.left,self__.right,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__11896),null));
}
}
});

zprint.zprint.r.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"left","left",-399115937),self__.left,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"right","right",-452581833),self__.right,null))], null),self__.__extmap));
});

zprint.zprint.r.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__11896){
var self__ = this;
var this__4202__auto____$1 = this;
return (new zprint.zprint.r(self__.left,self__.right,G__11896,self__.__extmap,self__.__hash));
});

zprint.zprint.r.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

zprint.zprint.r.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"right","right",1187949694,null)], null);
});

zprint.zprint.r.cljs$lang$type = true;

zprint.zprint.r.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"zprint.zprint/r",null,(1),null));
});

zprint.zprint.r.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"zprint.zprint/r");
});

/**
 * Positional factory function for zprint.zprint/r.
 */
zprint.zprint.__GT_r = (function zprint$zprint$__GT_r(left,right){
return (new zprint.zprint.r(left,right,null,null,null));
});

/**
 * Factory function for zprint.zprint/r, taking a map of keywords to field values.
 */
zprint.zprint.map__GT_r = (function zprint$zprint$map__GT_r(G__11900){
var extmap__4236__auto__ = (function (){var G__11905 = cljs.core.dissoc.call(null,G__11900,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.record_QMARK_.call(null,G__11900)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__11905);
} else {
return G__11905;
}
})();
return (new zprint.zprint.r(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(G__11900),new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(G__11900),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

zprint.zprint.make_record = (function zprint$zprint$make_record(l,r){
return (new r(l,r));
});

//# sourceMappingURL=zprint.js.map
