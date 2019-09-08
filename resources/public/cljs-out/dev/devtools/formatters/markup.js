// Compiled by ClojureScript 1.10.339 {}
goog.provide('devtools.formatters.markup');
goog.require('cljs.core');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.printing');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.templating');
goog.require('devtools.munging');
devtools.formatters.markup.print_with = (function devtools$formatters$markup$print_with(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18029 = arguments.length;
var i__4532__auto___18030 = (0);
while(true){
if((i__4532__auto___18030 < len__4531__auto___18029)){
args__4534__auto__.push((arguments[i__4532__auto___18030]));

var G__18031 = (i__4532__auto___18030 + (1));
i__4532__auto___18030 = G__18031;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return devtools.formatters.markup.print_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

devtools.formatters.markup.print_with.cljs$core$IFn$_invoke$arity$variadic = (function (method,value,tag,p__18024){
var vec__18025 = p__18024;
var max_level = cljs.core.nth.call(null,vec__18025,(0),null);
var job_fn = ((function (vec__18025,max_level){
return (function (){
return method.call(null,value,tag,devtools.formatters.markup.get_markup_db.call(null));
});})(vec__18025,max_level))
;
if(!((max_level == null))){
var _STAR_print_level_STAR_18028 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (max_level + (1));

try{return job_fn.call(null);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_18028;
}} else {
return job_fn.call(null);
}
});

devtools.formatters.markup.print_with.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
devtools.formatters.markup.print_with.cljs$lang$applyTo = (function (seq18020){
var G__18021 = cljs.core.first.call(null,seq18020);
var seq18020__$1 = cljs.core.next.call(null,seq18020);
var G__18022 = cljs.core.first.call(null,seq18020__$1);
var seq18020__$2 = cljs.core.next.call(null,seq18020__$1);
var G__18023 = cljs.core.first.call(null,seq18020__$2);
var seq18020__$3 = cljs.core.next.call(null,seq18020__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18021,G__18022,G__18023,seq18020__$3);
});

devtools.formatters.markup.print_via_writer = (function devtools$formatters$markup$print_via_writer(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18039 = arguments.length;
var i__4532__auto___18040 = (0);
while(true){
if((i__4532__auto___18040 < len__4531__auto___18039)){
args__4534__auto__.push((arguments[i__4532__auto___18040]));

var G__18041 = (i__4532__auto___18040 + (1));
i__4532__auto___18040 = G__18041;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return devtools.formatters.markup.print_via_writer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

devtools.formatters.markup.print_via_writer.cljs$core$IFn$_invoke$arity$variadic = (function (value,tag,p__18035){
var vec__18036 = p__18035;
var max_level = cljs.core.nth.call(null,vec__18036,(0),null);
return devtools.formatters.markup.print_with.call(null,devtools.formatters.printing.managed_print_via_writer,value,tag,max_level);
});

devtools.formatters.markup.print_via_writer.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
devtools.formatters.markup.print_via_writer.cljs$lang$applyTo = (function (seq18032){
var G__18033 = cljs.core.first.call(null,seq18032);
var seq18032__$1 = cljs.core.next.call(null,seq18032);
var G__18034 = cljs.core.first.call(null,seq18032__$1);
var seq18032__$2 = cljs.core.next.call(null,seq18032__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18033,G__18034,seq18032__$2);
});

devtools.formatters.markup.print_via_protocol = (function devtools$formatters$markup$print_via_protocol(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18049 = arguments.length;
var i__4532__auto___18050 = (0);
while(true){
if((i__4532__auto___18050 < len__4531__auto___18049)){
args__4534__auto__.push((arguments[i__4532__auto___18050]));

var G__18051 = (i__4532__auto___18050 + (1));
i__4532__auto___18050 = G__18051;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return devtools.formatters.markup.print_via_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

devtools.formatters.markup.print_via_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (value,tag,p__18045){
var vec__18046 = p__18045;
var max_level = cljs.core.nth.call(null,vec__18046,(0),null);
return devtools.formatters.markup.print_with.call(null,devtools.formatters.printing.managed_print_via_protocol,value,tag,max_level);
});

devtools.formatters.markup.print_via_protocol.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
devtools.formatters.markup.print_via_protocol.cljs$lang$applyTo = (function (seq18042){
var G__18043 = cljs.core.first.call(null,seq18042);
var seq18042__$1 = cljs.core.next.call(null,seq18042);
var G__18044 = cljs.core.first.call(null,seq18042__$1);
var seq18042__$2 = cljs.core.next.call(null,seq18042__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18043,G__18044,seq18042__$2);
});

devtools.formatters.markup._LT_expandable_GT_ = (function devtools$formatters$markup$_LT_expandable_GT_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18053 = arguments.length;
var i__4532__auto___18054 = (0);
while(true){
if((i__4532__auto___18054 < len__4531__auto___18053)){
args__4534__auto__.push((arguments[i__4532__auto___18054]));

var G__18055 = (i__4532__auto___18054 + (1));
i__4532__auto___18054 = G__18055;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_expandable_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.formatters.markup._LT_expandable_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var inner_markup = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expandable-inner-tag","expandable-inner-tag",-799648560)], null),children);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expandable-tag","expandable-tag",151027578),new cljs.core.Keyword(null,"expandable-symbol","expandable-symbol",1644611290),inner_markup], null);
});

devtools.formatters.markup._LT_expandable_GT_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.formatters.markup._LT_expandable_GT_.cljs$lang$applyTo = (function (seq18052){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18052));
});

devtools.formatters.markup._LT_raw_surrogate_GT_ = (function devtools$formatters$markup$_LT_raw_surrogate_GT_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18057 = arguments.length;
var i__4532__auto___18058 = (0);
while(true){
if((i__4532__auto___18058 < len__4531__auto___18057)){
args__4534__auto__.push((arguments[i__4532__auto___18058]));

var G__18059 = (i__4532__auto___18058 + (1));
i__4532__auto___18058 = G__18059;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["surrogate"], null),args);
});

devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$lang$applyTo = (function (seq18056){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18056));
});

devtools.formatters.markup._LT_surrogate_GT_ = (function devtools$formatters$markup$_LT_surrogate_GT_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18065 = arguments.length;
var i__4532__auto___18066 = (0);
while(true){
if((i__4532__auto___18066 < len__4531__auto___18065)){
args__4534__auto__.push((arguments[i__4532__auto___18066]));

var G__18067 = (i__4532__auto___18066 + (1));
i__4532__auto___18066 = G__18067;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.formatters.markup._LT_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (p__18061){
var vec__18062 = p__18061;
var object = cljs.core.nth.call(null,vec__18062,(0),null);
var header = cljs.core.nth.call(null,vec__18062,(1),null);
var body = cljs.core.nth.call(null,vec__18062,(2),null);
var start_index = cljs.core.nth.call(null,vec__18062,(3),null);
var header__$1 = ((!((body == null)))?devtools.formatters.markup._LT_expandable_GT_.call(null,header):header);
return devtools.formatters.markup._LT_raw_surrogate_GT_.call(null,object,header__$1,body,start_index);
});

devtools.formatters.markup._LT_surrogate_GT_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.formatters.markup._LT_surrogate_GT_.cljs$lang$applyTo = (function (seq18060){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18060));
});

devtools.formatters.markup._LT_reference_GT_ = (function devtools$formatters$markup$_LT_reference_GT_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18069 = arguments.length;
var i__4532__auto___18070 = (0);
while(true){
if((i__4532__auto___18070 < len__4531__auto___18069)){
args__4534__auto__.push((arguments[i__4532__auto___18070]));

var G__18071 = (i__4532__auto___18070 + (1));
i__4532__auto___18070 = G__18071;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reference"], null),args);
});

devtools.formatters.markup._LT_reference_GT_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.formatters.markup._LT_reference_GT_.cljs$lang$applyTo = (function (seq18068){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18068));
});

devtools.formatters.markup._LT_reference_surrogate_GT_ = (function devtools$formatters$markup$_LT_reference_surrogate_GT_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18073 = arguments.length;
var i__4532__auto___18074 = (0);
while(true){
if((i__4532__auto___18074 < len__4531__auto___18073)){
args__4534__auto__.push((arguments[i__4532__auto___18074]));

var G__18075 = (i__4532__auto___18074 + (1));
i__4532__auto___18074 = G__18075;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return devtools.formatters.markup._LT_reference_GT_.call(null,cljs.core.apply.call(null,devtools.formatters.markup._LT_surrogate_GT_,args));
});

devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$lang$applyTo = (function (seq18072){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18072));
});

devtools.formatters.markup._LT_circular_reference_GT_ = (function devtools$formatters$markup$_LT_circular_reference_GT_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18077 = arguments.length;
var i__4532__auto___18078 = (0);
while(true){
if((i__4532__auto___18078 < len__4531__auto___18077)){
args__4534__auto__.push((arguments[i__4532__auto___18078]));

var G__18079 = (i__4532__auto___18078 + (1));
i__4532__auto___18078 = G__18079;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_circular_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.formatters.markup._LT_circular_reference_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return devtools.formatters.markup._LT_reference_surrogate_GT_.call(null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circular-reference-tag","circular-reference-tag",858973471),new cljs.core.Keyword(null,"circular-ref-icon","circular-ref-icon",-2087682919)], null),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circular-reference-body-tag","circular-reference-body-tag",-1301830023)], null),children));
});

devtools.formatters.markup._LT_circular_reference_GT_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.formatters.markup._LT_circular_reference_GT_.cljs$lang$applyTo = (function (seq18076){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18076));
});

devtools.formatters.markup._LT_native_reference_GT_ = (function devtools$formatters$markup$_LT_native_reference_GT_(object){
var reference = devtools.formatters.markup._LT_reference_GT_.call(null,object,(function (p1__18080_SHARP_){
return devtools.formatters.state.set_prevent_recursion.call(null,p1__18080_SHARP_,true);
}));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"native-reference-wrapper-tag","native-reference-wrapper-tag",2047690940),new cljs.core.Keyword(null,"native-reference-background","native-reference-background",-286129550),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"native-reference-tag","native-reference-tag",-1516119079),reference], null)], null);
});
devtools.formatters.markup._LT_header_expander_GT_ = (function devtools$formatters$markup$_LT_header_expander_GT_(object){
return devtools.formatters.markup._LT_reference_GT_.call(null,devtools.formatters.markup._LT_raw_surrogate_GT_.call(null,object,new cljs.core.Keyword(null,"header-expander-symbol","header-expander-symbol",907531743),new cljs.core.Keyword(null,"target","target",253001721)),devtools.formatters.state.reset_depth_limits);
});
devtools.formatters.markup._LT_cljs_land_GT_ = (function devtools$formatters$markup$_LT_cljs_land_GT_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18082 = arguments.length;
var i__4532__auto___18083 = (0);
while(true){
if((i__4532__auto___18083 < len__4531__auto___18082)){
args__4534__auto__.push((arguments[i__4532__auto___18083]));

var G__18084 = (i__4532__auto___18083 + (1));
i__4532__auto___18083 = G__18084;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_cljs_land_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.formatters.markup._LT_cljs_land_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs-land-tag","cljs-land-tag",-7524377)], null),children);
});

devtools.formatters.markup._LT_cljs_land_GT_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.formatters.markup._LT_cljs_land_GT_.cljs$lang$applyTo = (function (seq18081){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18081));
});

devtools.formatters.markup._LT_nil_GT_ = (function devtools$formatters$markup$_LT_nil_GT_(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil-tag","nil-tag",-1587449115),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203)], null);
});
devtools.formatters.markup._LT_bool_GT_ = (function devtools$formatters$markup$_LT_bool_GT_(bool){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool-tag","bool-tag",-10409808),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(bool)].join('')], null);
});
devtools.formatters.markup._LT_keyword_GT_ = (function devtools$formatters$markup$_LT_keyword_GT_(keyword){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyword-tag","keyword-tag",1587228387),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(keyword)].join('')], null);
});
devtools.formatters.markup._LT_symbol_GT_ = (function devtools$formatters$markup$_LT_symbol_GT_(symbol){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol-tag","symbol-tag",-100807517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)].join('')], null);
});
devtools.formatters.markup._LT_number_GT_ = (function devtools$formatters$markup$_LT_number_GT_(number){
if(cljs.core.integer_QMARK_.call(null,number)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer-tag","integer-tag",698000472),number], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float-tag","float-tag",-390834106),number], null);
}
});
devtools.formatters.markup._LT_string_GT_ = (function devtools$formatters$markup$_LT_string_GT_(string){
var dq = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"dq","dq",-1690275860));
var re_nl = (new RegExp("\n","g"));
var nl_marker = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"new-line-string-replacer","new-line-string-replacer",-753206206));
var inline_string = string.replace(re_nl,nl_marker);
var max_inline_string_size = (devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"string-prefix-limit","string-prefix-limit",1256106332)) + devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"string-postfix-limit","string-postfix-limit",-1282205963)));
var quote_string = ((function (dq,re_nl,nl_marker,inline_string,max_inline_string_size){
return (function (s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dq),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dq)].join('');
});})(dq,re_nl,nl_marker,inline_string,max_inline_string_size))
;
var should_abbreviate_QMARK_ = (cljs.core.count.call(null,inline_string) > max_inline_string_size);
if(should_abbreviate_QMARK_){
var abbreviated_string = devtools.formatters.helpers.abbreviate_long_string.call(null,inline_string,devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"string-abbreviation-marker","string-abbreviation-marker",-347785112)),devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"string-prefix-limit","string-prefix-limit",1256106332)),devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"string-postfix-limit","string-postfix-limit",-1282205963)));
var abbreviated_string_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string-tag","string-tag",1639024494),quote_string.call(null,abbreviated_string)], null);
var string_with_nl_markers = string.replace(re_nl,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nl_marker),"\n"].join(''));
var details_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expanded-string-tag","expanded-string-tag",-2125162127),string_with_nl_markers], null);
return devtools.formatters.markup._LT_reference_surrogate_GT_.call(null,string,abbreviated_string_markup,details_markup);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string-tag","string-tag",1639024494),quote_string.call(null,inline_string)], null);
}
});
devtools.formatters.markup._LT_preview_GT_ = (function devtools$formatters$markup$_LT_preview_GT_(value){
return devtools.formatters.markup.print_via_writer.call(null,value,new cljs.core.Keyword(null,"header-tag","header-tag",1594852433),devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"max-print-level","max-print-level",-462237413)));
});
devtools.formatters.markup._LT_body_GT_ = (function devtools$formatters$markup$_LT_body_GT_(markup){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body-tag","body-tag",433527431),markup], null);
});
devtools.formatters.markup._LT_aligned_body_GT_ = (function devtools$formatters$markup$_LT_aligned_body_GT_(markups_lists){
var prepend_li_tag = (function (line){
if(cljs.core.truth_(line)){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aligned-li-tag","aligned-li-tag",1727029722)], null),line);
} else {
return null;
}
});
var aligned_lines = cljs.core.keep.call(null,prepend_li_tag,markups_lists);
return devtools.formatters.markup._LT_body_GT_.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"standard-ol-no-margin-tag","standard-ol-no-margin-tag",583023747)], null),aligned_lines));
});
devtools.formatters.markup._LT_standard_body_GT_ = (function devtools$formatters$markup$_LT_standard_body_GT_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18091 = arguments.length;
var i__4532__auto___18092 = (0);
while(true){
if((i__4532__auto___18092 < len__4531__auto___18091)){
args__4534__auto__.push((arguments[i__4532__auto___18092]));

var G__18093 = (i__4532__auto___18092 + (1));
i__4532__auto___18092 = G__18093;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_standard_body_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

devtools.formatters.markup._LT_standard_body_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (markups_lists,p__18087){
var vec__18088 = p__18087;
var no_margin_QMARK_ = cljs.core.nth.call(null,vec__18088,(0),null);
var ol_tag = (cljs.core.truth_(no_margin_QMARK_)?new cljs.core.Keyword(null,"standard-ol-no-margin-tag","standard-ol-no-margin-tag",583023747):new cljs.core.Keyword(null,"standard-ol-tag","standard-ol-tag",1120081433));
var li_tag = (cljs.core.truth_(no_margin_QMARK_)?new cljs.core.Keyword(null,"standard-li-no-margin-tag","standard-li-no-margin-tag",-844555468):new cljs.core.Keyword(null,"standard-li-tag","standard-li-tag",-932749876));
var prepend_li_tag = ((function (ol_tag,li_tag,vec__18088,no_margin_QMARK_){
return (function (line){
if(cljs.core.truth_(line)){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [li_tag], null),line);
} else {
return null;
}
});})(ol_tag,li_tag,vec__18088,no_margin_QMARK_))
;
var lines_markups = cljs.core.keep.call(null,prepend_li_tag,markups_lists);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ol_tag], null),lines_markups);
});

devtools.formatters.markup._LT_standard_body_GT_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.formatters.markup._LT_standard_body_GT_.cljs$lang$applyTo = (function (seq18085){
var G__18086 = cljs.core.first.call(null,seq18085);
var seq18085__$1 = cljs.core.next.call(null,seq18085);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18086,seq18085__$1);
});

devtools.formatters.markup._LT_standard_body_reference_GT_ = (function devtools$formatters$markup$_LT_standard_body_reference_GT_(o){
return devtools.formatters.markup._LT_standard_body_GT_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [devtools.formatters.markup._LT_reference_GT_.call(null,o)], null)], null));
});
devtools.formatters.markup._LT_index_GT_ = (function devtools$formatters$markup$_LT_index_GT_(value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index-tag","index-tag",693492486),value,new cljs.core.Keyword(null,"line-index-separator","line-index-separator",-1735989246)], null);
});
devtools.formatters.markup.body_line = (function devtools$formatters$markup$body_line(index,value){
var index_markup = devtools.formatters.markup._LT_index_GT_.call(null,index);
var value_markup = devtools.formatters.markup.print_via_writer.call(null,value,new cljs.core.Keyword(null,"item-tag","item-tag",-988763304),devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"body-line-max-print-level","body-line-max-print-level",571158623)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index_markup,value_markup], null);
});
devtools.formatters.markup.prepare_body_lines = (function devtools$formatters$markup$prepare_body_lines(data,starting_index){
var work = data;
var index = starting_index;
var lines = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,work)){
return lines;
} else {
var G__18094 = cljs.core.rest.call(null,work);
var G__18095 = (index + (1));
var G__18096 = cljs.core.conj.call(null,lines,devtools.formatters.markup.body_line.call(null,index,cljs.core.first.call(null,work)));
work = G__18094;
index = G__18095;
lines = G__18096;
continue;
}
break;
}
});
devtools.formatters.markup.body_lines = (function devtools$formatters$markup$body_lines(value,starting_index){
var seq = cljs.core.seq.call(null,value);
var max_number_body_items = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"max-number-body-items","max-number-body-items",299914624));
var chunk = cljs.core.take.call(null,max_number_body_items,seq);
var rest = cljs.core.drop.call(null,max_number_body_items,seq);
var lines = devtools.formatters.markup.prepare_body_lines.call(null,chunk,starting_index);
var continue_QMARK_ = !(cljs.core.empty_QMARK_.call(null,cljs.core.take.call(null,(1),rest)));
if(!(continue_QMARK_)){
return lines;
} else {
var more_label_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body-items-more-tag","body-items-more-tag",867141569),new cljs.core.Keyword(null,"body-items-more-label","body-items-more-label",-1561152123)], null);
var start_index = (starting_index + max_number_body_items);
var more_markup = devtools.formatters.markup._LT_reference_surrogate_GT_.call(null,rest,more_label_markup,new cljs.core.Keyword(null,"target","target",253001721),start_index);
return cljs.core.conj.call(null,lines,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [more_markup], null));
}
});
devtools.formatters.markup._LT_details_GT_ = (function devtools$formatters$markup$_LT_details_GT_(value,starting_index){
var has_continuation_QMARK_ = (starting_index > (0));
var body_markup = devtools.formatters.markup._LT_standard_body_GT_.call(null,devtools.formatters.markup.body_lines.call(null,value,starting_index),has_continuation_QMARK_);
if(has_continuation_QMARK_){
return body_markup;
} else {
return devtools.formatters.markup._LT_body_GT_.call(null,body_markup);
}
});
devtools.formatters.markup._LT_list_details_GT_ = (function devtools$formatters$markup$_LT_list_details_GT_(items,_opts){
return devtools.formatters.markup._LT_aligned_body_GT_.call(null,cljs.core.map.call(null,cljs.core.list,items));
});
devtools.formatters.markup._LT_list_GT_ = (function devtools$formatters$markup$_LT_list_GT_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18104 = arguments.length;
var i__4532__auto___18105 = (0);
while(true){
if((i__4532__auto___18105 < len__4531__auto___18104)){
args__4534__auto__.push((arguments[i__4532__auto___18105]));

var G__18106 = (i__4532__auto___18105 + (1));
i__4532__auto___18105 = G__18106;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return devtools.formatters.markup._LT_list_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

devtools.formatters.markup._LT_list_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (items,max_count,p__18100){
var vec__18101 = p__18100;
var opts = cljs.core.nth.call(null,vec__18101,(0),null);
var items_markups = cljs.core.take.call(null,max_count,items);
var more_count = (cljs.core.count.call(null,items) - max_count);
var more_QMARK_ = (more_count > (0));
var separator = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"list-separator","list-separator",900562185);
}
})();
var more_symbol = ((more_QMARK_)?(function (){var temp__5455__auto__ = new cljs.core.Keyword(null,"more-symbol","more-symbol",-2139760242).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5455__auto__)){
var more_symbol = temp__5455__auto__;
if(cljs.core.fn_QMARK_.call(null,more_symbol)){
return more_symbol.call(null,more_count);
} else {
return more_symbol;
}
} else {
return devtools.formatters.helpers.get_more_marker.call(null,more_count);
}
})():null);
var preview_markup = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3949__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"list-tag","list-tag",1555796884);
}
})(),(function (){var or__3949__auto__ = new cljs.core.Keyword(null,"open-symbol","open-symbol",674247825).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"list-open-symbol","list-open-symbol",-1162287443);
}
})()], null),cljs.core.interpose.call(null,separator,items_markups),((more_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [separator,more_symbol], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3949__auto__ = new cljs.core.Keyword(null,"close-symbol","close-symbol",1051951165).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"list-close-symbol","list-close-symbol",-1120016586);
}
})()], null));
if(more_QMARK_){
var details_markup = new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(opts);
var default_details_fn = cljs.core.partial.call(null,devtools.formatters.markup._LT_list_details_GT_,items,opts);
return devtools.formatters.markup._LT_reference_surrogate_GT_.call(null,null,preview_markup,(function (){var or__3949__auto__ = details_markup;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return default_details_fn;
}
})());
} else {
return preview_markup;
}
});

devtools.formatters.markup._LT_list_GT_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
devtools.formatters.markup._LT_list_GT_.cljs$lang$applyTo = (function (seq18097){
var G__18098 = cljs.core.first.call(null,seq18097);
var seq18097__$1 = cljs.core.next.call(null,seq18097);
var G__18099 = cljs.core.first.call(null,seq18097__$1);
var seq18097__$2 = cljs.core.next.call(null,seq18097__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18098,G__18099,seq18097__$2);
});

devtools.formatters.markup._LT_meta_GT_ = (function devtools$formatters$markup$_LT_meta_GT_(metadata){
var body_fn = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-body-tag","meta-body-tag",1689183121),devtools.formatters.markup._LT_preview_GT_.call(null,metadata)], null);
});
var header = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-header-tag","meta-header-tag",-1207812581),"meta"], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-reference-tag","meta-reference-tag",914791936),devtools.formatters.markup._LT_reference_surrogate_GT_.call(null,metadata,header,body_fn)], null);
});
devtools.formatters.markup._LT_meta_wrapper_GT_ = (function devtools$formatters$markup$_LT_meta_wrapper_GT_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18109 = arguments.length;
var i__4532__auto___18110 = (0);
while(true){
if((i__4532__auto___18110 < len__4531__auto___18109)){
args__4534__auto__.push((arguments[i__4532__auto___18110]));

var G__18111 = (i__4532__auto___18110 + (1));
i__4532__auto___18110 = G__18111;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_meta_wrapper_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

devtools.formatters.markup._LT_meta_wrapper_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (metadata,children){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-wrapper-tag","meta-wrapper-tag",1927429038)], null),children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [devtools.formatters.markup._LT_meta_GT_.call(null,metadata)], null));
});

devtools.formatters.markup._LT_meta_wrapper_GT_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.formatters.markup._LT_meta_wrapper_GT_.cljs$lang$applyTo = (function (seq18107){
var G__18108 = cljs.core.first.call(null,seq18107);
var seq18107__$1 = cljs.core.next.call(null,seq18107);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18108,seq18107__$1);
});

devtools.formatters.markup._LT_function_details_GT_ = (function devtools$formatters$markup$_LT_function_details_GT_(fn_obj,ns,_name,arities,prefix){
if(cljs.core.fn_QMARK_.call(null,fn_obj)){
} else {
throw (new Error("Assert failed: (fn? fn-obj)"));
}

var arities__$1 = cljs.core.map.call(null,devtools.formatters.helpers.wrap_arity,arities);
var make_arity_markup_list = ((function (arities__$1){
return (function (arity){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-multi-arity-args-indent-tag","fn-multi-arity-args-indent-tag",-1931373734),prefix], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-args-tag","fn-args-tag",549126831),arity], null)], null);
});})(arities__$1))
;
var arities_markupts_lists = (((cljs.core.count.call(null,arities__$1) > (1)))?cljs.core.map.call(null,make_arity_markup_list,arities__$1):null);
var ns_markups_list = ((!(cljs.core.empty_QMARK_.call(null,ns)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns-icon","ns-icon",725601214),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-ns-name-tag","fn-ns-name-tag",-900073712),ns], null)], null):null);
var native_markups_list = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"native-icon","native-icon",-126040824),devtools.formatters.markup._LT_native_reference_GT_.call(null,fn_obj)], null);
return devtools.formatters.markup._LT_aligned_body_GT_.call(null,cljs.core.concat.call(null,arities_markupts_lists,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_markups_list,native_markups_list], null)));
});
devtools.formatters.markup._LT_arities_GT_ = (function devtools$formatters$markup$_LT_arities_GT_(arities){
var multi_arity_QMARK_ = (cljs.core.count.call(null,arities) > (1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-args-tag","fn-args-tag",549126831),devtools.formatters.helpers.wrap_arity.call(null,((multi_arity_QMARK_)?devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"multi-arity-symbol","multi-arity-symbol",-420139653)):cljs.core.first.call(null,arities)))], null);
});
devtools.formatters.markup._LT_function_GT_ = (function devtools$formatters$markup$_LT_function_GT_(fn_obj){
if(cljs.core.fn_QMARK_.call(null,fn_obj)){
} else {
throw (new Error("Assert failed: (fn? fn-obj)"));
}

var vec__18112 = devtools.munging.parse_fn_info.call(null,fn_obj);
var ns = cljs.core.nth.call(null,vec__18112,(0),null);
var name = cljs.core.nth.call(null,vec__18112,(1),null);
var lambda_QMARK_ = cljs.core.empty_QMARK_.call(null,name);
var spacer_symbol = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"spacer","spacer",2067425139));
var rest_symbol = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"rest-symbol","rest-symbol",1021371174));
var multi_arity_symbol = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"multi-arity-symbol","multi-arity-symbol",-420139653));
var arities = devtools.munging.extract_arities.call(null,fn_obj,true,spacer_symbol,multi_arity_symbol,rest_symbol);
var arities_markup = devtools.formatters.markup._LT_arities_GT_.call(null,arities);
var name_markup = ((!(lambda_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-name-tag","fn-name-tag",555823755),name], null):null);
var icon_markup = ((lambda_QMARK_)?new cljs.core.Keyword(null,"lambda-icon","lambda-icon",980753546):new cljs.core.Keyword(null,"fn-icon","fn-icon",-1412665288));
var prefix_markup = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-prefix-tag","fn-prefix-tag",1947411856),icon_markup,name_markup], null);
var preview_markup = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-header-tag","fn-header-tag",-1262068349),prefix_markup,arities_markup], null);
var details_fn = cljs.core.partial.call(null,devtools.formatters.markup._LT_function_details_GT_,fn_obj,ns,name,arities,prefix_markup);
return devtools.formatters.markup._LT_reference_surrogate_GT_.call(null,fn_obj,preview_markup,details_fn);
});
devtools.formatters.markup._LT_type_basis_item_GT_ = (function devtools$formatters$markup$_LT_type_basis_item_GT_(basis_item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-basis-item-tag","type-basis-item-tag",50612816),cljs.core.name.call(null,basis_item)], null);
});
devtools.formatters.markup._LT_type_basis_GT_ = (function devtools$formatters$markup$_LT_type_basis_GT_(basis){
var item_markups = cljs.core.map.call(null,devtools.formatters.markup._LT_type_basis_item_GT_,basis);
var children_markups = cljs.core.interpose.call(null,new cljs.core.Keyword(null,"type-basis-item-separator","type-basis-item-separator",-2029193896),item_markups);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-basis-tag","type-basis-tag",-2122159204)], null),children_markups);
});
devtools.formatters.markup._LT_type_details_GT_ = (function devtools$formatters$markup$_LT_type_details_GT_(constructor_fn,ns,_name,basis){
var ns_markup = ((!(cljs.core.empty_QMARK_.call(null,ns)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns-icon","ns-icon",725601214),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-ns-name-tag","fn-ns-name-tag",-900073712),ns], null)], null):null);
var basis_markup = ((cljs.core.empty_QMARK_.call(null,basis))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty-basis-symbol","empty-basis-symbol",-1971559593)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"basis-icon","basis-icon",1917779567),devtools.formatters.markup._LT_type_basis_GT_.call(null,basis)], null));
var native_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"native-icon","native-icon",-126040824),devtools.formatters.markup._LT_native_reference_GT_.call(null,constructor_fn)], null);
return devtools.formatters.markup._LT_aligned_body_GT_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [basis_markup,ns_markup,native_markup], null));
});
devtools.formatters.markup._LT_type_GT_ = (function devtools$formatters$markup$_LT_type_GT_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18124 = arguments.length;
var i__4532__auto___18125 = (0);
while(true){
if((i__4532__auto___18125 < len__4531__auto___18124)){
args__4534__auto__.push((arguments[i__4532__auto___18125]));

var G__18126 = (i__4532__auto___18125 + (1));
i__4532__auto___18125 = G__18126;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_type_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

devtools.formatters.markup._LT_type_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (constructor_fn,p__18117){
var vec__18118 = p__18117;
var header_tag = cljs.core.nth.call(null,vec__18118,(0),null);
var vec__18121 = devtools.munging.parse_constructor_info.call(null,constructor_fn);
var ns = cljs.core.nth.call(null,vec__18121,(0),null);
var name = cljs.core.nth.call(null,vec__18121,(1),null);
var basis = cljs.core.nth.call(null,vec__18121,(2),null);
var name_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-name-tag","type-name-tag",-1317275511),name], null);
var preview_markup = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3949__auto__ = header_tag;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"type-header-tag","type-header-tag",1645372265);
}
})(),new cljs.core.Keyword(null,"type-symbol","type-symbol",-941894755),name_markup], null);
var details_markup_fn = cljs.core.partial.call(null,devtools.formatters.markup._LT_type_details_GT_,constructor_fn,ns,name,basis);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-wrapper-tag","type-wrapper-tag",-1732366004),new cljs.core.Keyword(null,"type-header-background","type-header-background",-810861696),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-ref-tag","type-ref-tag",2126727355),devtools.formatters.markup._LT_reference_surrogate_GT_.call(null,constructor_fn,preview_markup,details_markup_fn)], null)], null);
});

devtools.formatters.markup._LT_type_GT_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.formatters.markup._LT_type_GT_.cljs$lang$applyTo = (function (seq18115){
var G__18116 = cljs.core.first.call(null,seq18115);
var seq18115__$1 = cljs.core.next.call(null,seq18115);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18116,seq18115__$1);
});

devtools.formatters.markup._LT_standalone_type_GT_ = (function devtools$formatters$markup$_LT_standalone_type_GT_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18133 = arguments.length;
var i__4532__auto___18134 = (0);
while(true){
if((i__4532__auto___18134 < len__4531__auto___18133)){
args__4534__auto__.push((arguments[i__4532__auto___18134]));

var G__18135 = (i__4532__auto___18134 + (1));
i__4532__auto___18134 = G__18135;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_standalone_type_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

devtools.formatters.markup._LT_standalone_type_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (constructor_fn,p__18129){
var vec__18130 = p__18129;
var header_tag = cljs.core.nth.call(null,vec__18130,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"standalone-type-tag","standalone-type-tag",-1677164791),devtools.formatters.markup._LT_type_GT_.call(null,constructor_fn,header_tag)], null);
});

devtools.formatters.markup._LT_standalone_type_GT_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.formatters.markup._LT_standalone_type_GT_.cljs$lang$applyTo = (function (seq18127){
var G__18128 = cljs.core.first.call(null,seq18127);
var seq18127__$1 = cljs.core.next.call(null,seq18127);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18128,seq18127__$1);
});

devtools.formatters.markup._LT_protocol_method_arity_GT_ = (function devtools$formatters$markup$_LT_protocol_method_arity_GT_(arity_fn){
return devtools.formatters.markup._LT_reference_GT_.call(null,arity_fn);
});
devtools.formatters.markup._LT_protocol_method_arities_details_GT_ = (function devtools$formatters$markup$_LT_protocol_method_arities_details_GT_(fns){
return devtools.formatters.markup._LT_aligned_body_GT_.call(null,cljs.core.map.call(null,devtools.formatters.markup._LT_protocol_method_arity_GT_,fns));
});
devtools.formatters.markup._LT_protocol_method_arities_GT_ = (function devtools$formatters$markup$_LT_protocol_method_arities_GT_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18142 = arguments.length;
var i__4532__auto___18143 = (0);
while(true){
if((i__4532__auto___18143 < len__4531__auto___18142)){
args__4534__auto__.push((arguments[i__4532__auto___18143]));

var G__18144 = (i__4532__auto___18143 + (1));
i__4532__auto___18143 = G__18144;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_protocol_method_arities_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

devtools.formatters.markup._LT_protocol_method_arities_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (fns,p__18138){
var vec__18139 = p__18138;
var max_fns = cljs.core.nth.call(null,vec__18139,(0),null);
var max_fns__$1 = (function (){var or__3949__auto__ = max_fns;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"max-protocol-method-arities-list","max-protocol-method-arities-list",-45936465));
}
})();
var more_QMARK_ = (cljs.core.count.call(null,fns) > max_fns__$1);
var aritites_markups = cljs.core.map.call(null,devtools.formatters.markup._LT_protocol_method_arity_GT_,cljs.core.take.call(null,max_fns__$1,fns));
var preview_markup = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-method-arities-header-tag","protocol-method-arities-header-tag",734407707),new cljs.core.Keyword(null,"protocol-method-arities-header-open-symbol","protocol-method-arities-header-open-symbol",1704200465)], null),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"protocol-method-arities-list-header-separator","protocol-method-arities-list-header-separator",-115158954),aritites_markups),((more_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-method-arities-more-symbol","protocol-method-arities-more-symbol",-477018522)], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-method-arities-header-close-symbol","protocol-method-arities-header-close-symbol",-1375237120)], null));
if(more_QMARK_){
var details_markup_fn = cljs.core.partial.call(null,devtools.formatters.markup._LT_protocol_method_arities_details_GT_,fns);
return devtools.formatters.markup._LT_reference_surrogate_GT_.call(null,null,preview_markup,details_markup_fn);
} else {
return preview_markup;
}
});

devtools.formatters.markup._LT_protocol_method_arities_GT_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.formatters.markup._LT_protocol_method_arities_GT_.cljs$lang$applyTo = (function (seq18136){
var G__18137 = cljs.core.first.call(null,seq18136);
var seq18136__$1 = cljs.core.next.call(null,seq18136);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18137,seq18136__$1);
});

devtools.formatters.markup._LT_protocol_method_GT_ = (function devtools$formatters$markup$_LT_protocol_method_GT_(name,arities){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-method-tag","protocol-method-tag",2032279830),new cljs.core.Keyword(null,"method-icon","method-icon",-1678775281),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-method-name-tag","protocol-method-name-tag",-1030376744),name], null),devtools.formatters.markup._LT_protocol_method_arities_GT_.call(null,arities)], null);
});
devtools.formatters.markup._LT_protocol_details_GT_ = (function devtools$formatters$markup$_LT_protocol_details_GT_(obj,ns,_name,selector,_fast_QMARK_){
var protocol_obj = devtools.munging.get_protocol_object.call(null,selector);
var ns_markups_list = ((!(cljs.core.empty_QMARK_.call(null,ns)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns-icon","ns-icon",725601214),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-ns-name-tag","protocol-ns-name-tag",1832081510),ns], null)], null):null);
var native_markups_list = ((!((protocol_obj == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"native-icon","native-icon",-126040824),devtools.formatters.markup._LT_native_reference_GT_.call(null,protocol_obj)], null):null);
var methods$ = devtools.munging.collect_protocol_methods.call(null,obj,selector);
var methods_markups = cljs.core.map.call(null,((function (protocol_obj,ns_markups_list,native_markups_list,methods$){
return (function (p__18145){
var vec__18146 = p__18145;
var name = cljs.core.nth.call(null,vec__18146,(0),null);
var arities = cljs.core.nth.call(null,vec__18146,(1),null);
return devtools.formatters.markup._LT_protocol_method_GT_.call(null,name,arities);
});})(protocol_obj,ns_markups_list,native_markups_list,methods$))
,methods$);
var methods_markups_lists = cljs.core.map.call(null,cljs.core.list,methods_markups);
return devtools.formatters.markup._LT_aligned_body_GT_.call(null,cljs.core.concat.call(null,methods_markups_lists,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_markups_list,native_markups_list], null)));
});
devtools.formatters.markup._LT_protocol_GT_ = (function devtools$formatters$markup$_LT_protocol_GT_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18158 = arguments.length;
var i__4532__auto___18159 = (0);
while(true){
if((i__4532__auto___18159 < len__4531__auto___18158)){
args__4534__auto__.push((arguments[i__4532__auto___18159]));

var G__18160 = (i__4532__auto___18159 + (1));
i__4532__auto___18159 = G__18160;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return devtools.formatters.markup._LT_protocol_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

devtools.formatters.markup._LT_protocol_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,protocol,p__18152){
var vec__18153 = p__18152;
var tag = cljs.core.nth.call(null,vec__18153,(0),null);
var map__18156 = protocol;
var map__18156__$1 = ((((!((map__18156 == null)))?(((((map__18156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18156):map__18156);
var ns = cljs.core.get.call(null,map__18156__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__18156__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var selector = cljs.core.get.call(null,map__18156__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var fast_QMARK_ = cljs.core.get.call(null,map__18156__$1,new cljs.core.Keyword(null,"fast?","fast?",-1813307150));
var preview_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3949__auto__ = tag;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"protocol-name-tag","protocol-name-tag",1508238310);
}
})(),name], null);
var prefix_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(fast_QMARK_)?new cljs.core.Keyword(null,"fast-protocol-tag","fast-protocol-tag",2066025065):new cljs.core.Keyword(null,"slow-protocol-tag","slow-protocol-tag",2061129467)),new cljs.core.Keyword(null,"protocol-background","protocol-background",1111513794)], null);
if(!((obj == null))){
var details_markup_fn = cljs.core.partial.call(null,devtools.formatters.markup._LT_protocol_details_GT_,obj,ns,name,selector,fast_QMARK_);
return cljs.core.conj.call(null,prefix_markup,devtools.formatters.markup._LT_reference_surrogate_GT_.call(null,obj,preview_markup,details_markup_fn));
} else {
return cljs.core.conj.call(null,prefix_markup,preview_markup);
}
});

devtools.formatters.markup._LT_protocol_GT_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
devtools.formatters.markup._LT_protocol_GT_.cljs$lang$applyTo = (function (seq18149){
var G__18150 = cljs.core.first.call(null,seq18149);
var seq18149__$1 = cljs.core.next.call(null,seq18149);
var G__18151 = cljs.core.first.call(null,seq18149__$1);
var seq18149__$2 = cljs.core.next.call(null,seq18149__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18150,G__18151,seq18149__$2);
});

devtools.formatters.markup._LT_more_protocols_GT_ = (function devtools$formatters$markup$_LT_more_protocols_GT_(more_count){
var fake_protocol = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),devtools.formatters.helpers.get_more_marker.call(null,more_count)], null);
return devtools.formatters.markup._LT_protocol_GT_.call(null,null,fake_protocol,new cljs.core.Keyword(null,"protocol-more-tag","protocol-more-tag",2098702865));
});
devtools.formatters.markup._LT_protocols_list_GT_ = (function devtools$formatters$markup$_LT_protocols_list_GT_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18168 = arguments.length;
var i__4532__auto___18169 = (0);
while(true){
if((i__4532__auto___18169 < len__4531__auto___18168)){
args__4534__auto__.push((arguments[i__4532__auto___18169]));

var G__18170 = (i__4532__auto___18169 + (1));
i__4532__auto___18169 = G__18170;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return devtools.formatters.markup._LT_protocols_list_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

devtools.formatters.markup._LT_protocols_list_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,protocols,p__18164){
var vec__18165 = p__18164;
var max_protocols = cljs.core.nth.call(null,vec__18165,(0),null);
var max_protocols__$1 = (function (){var or__3949__auto__ = max_protocols;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"max-list-protocols","max-list-protocols",-537135129));
}
})();
var protocols_markups = cljs.core.map.call(null,cljs.core.partial.call(null,devtools.formatters.markup._LT_protocol_GT_,obj),protocols);
return devtools.formatters.markup._LT_list_GT_.call(null,protocols_markups,max_protocols__$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"protocols-header-tag","protocols-header-tag",-734413384),new cljs.core.Keyword(null,"open-symbol","open-symbol",674247825),new cljs.core.Keyword(null,"protocols-list-open-symbol","protocols-list-open-symbol",-729713043),new cljs.core.Keyword(null,"close-symbol","close-symbol",1051951165),new cljs.core.Keyword(null,"protocols-list-close-symbol","protocols-list-close-symbol",652072902),new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"header-protocol-separator","header-protocol-separator",445531439),new cljs.core.Keyword(null,"more-symbol","more-symbol",-2139760242),devtools.formatters.markup._LT_more_protocols_GT_], null));
});

devtools.formatters.markup._LT_protocols_list_GT_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
devtools.formatters.markup._LT_protocols_list_GT_.cljs$lang$applyTo = (function (seq18161){
var G__18162 = cljs.core.first.call(null,seq18161);
var seq18161__$1 = cljs.core.next.call(null,seq18161);
var G__18163 = cljs.core.first.call(null,seq18161__$1);
var seq18161__$2 = cljs.core.next.call(null,seq18161__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18162,G__18163,seq18161__$2);
});

devtools.formatters.markup._LT_field_GT_ = (function devtools$formatters$markup$_LT_field_GT_(name,value){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header-field-tag","header-field-tag",-1403476101),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header-field-name-tag","header-field-name-tag",82291956),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null),new cljs.core.Keyword(null,"header-field-value-spacer","header-field-value-spacer",-1210630679),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header-field-value-tag","header-field-value-tag",-1708691701),devtools.formatters.markup._LT_reference_GT_.call(null,devtools.formatters.markup._LT_surrogate_GT_.call(null,value),(function (p1__18171_SHARP_){
return devtools.formatters.state.set_managed_print_level.call(null,p1__18171_SHARP_,(1));
}))], null),new cljs.core.Keyword(null,"header-field-separator","header-field-separator",-774444018)], null);
});
devtools.formatters.markup._LT_fields_details_row_GT_ = (function devtools$formatters$markup$_LT_fields_details_row_GT_(field){
var vec__18172 = field;
var name = cljs.core.nth.call(null,vec__18172,(0),null);
var value = cljs.core.nth.call(null,vec__18172,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body-field-tr-tag","body-field-tr-tag",37280691),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body-field-td1-tag","body-field-td1-tag",256357429),new cljs.core.Keyword(null,"body-field-symbol","body-field-symbol",256897537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body-field-name-tag","body-field-name-tag",917867601),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body-field-td2-tag","body-field-td2-tag",94501500),new cljs.core.Keyword(null,"body-field-value-spacer","body-field-value-spacer",1279911362)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body-field-td3-tag","body-field-td3-tag",-803119922),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body-field-value-tag","body-field-value-tag",800789079),devtools.formatters.markup._LT_reference_surrogate_GT_.call(null,value)], null)], null)], null);
});
devtools.formatters.markup._LT_fields_GT_ = (function devtools$formatters$markup$_LT_fields_GT_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18185 = arguments.length;
var i__4532__auto___18186 = (0);
while(true){
if((i__4532__auto___18186 < len__4531__auto___18185)){
args__4534__auto__.push((arguments[i__4532__auto___18186]));

var G__18187 = (i__4532__auto___18186 + (1));
i__4532__auto___18186 = G__18187;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_fields_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

devtools.formatters.markup._LT_fields_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (fields,p__18177){
var vec__18178 = p__18177;
var max_fields = cljs.core.nth.call(null,vec__18178,(0),null);
if((cljs.core.count.call(null,fields) === (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fields-header-tag","fields-header-tag",1339134308),new cljs.core.Keyword(null,"fields-header-no-fields-symbol","fields-header-no-fields-symbol",-1749204979)], null);
} else {
var max_fields__$1 = (function (){var or__3949__auto__ = max_fields;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"max-instance-header-fields","max-instance-header-fields",-126007269));
}
})();
var more_QMARK_ = (cljs.core.count.call(null,fields) > max_fields__$1);
var fields_markups = cljs.core.map.call(null,((function (max_fields__$1,more_QMARK_,vec__18178,max_fields){
return (function (p__18181){
var vec__18182 = p__18181;
var name = cljs.core.nth.call(null,vec__18182,(0),null);
var value = cljs.core.nth.call(null,vec__18182,(1),null);
return devtools.formatters.markup._LT_field_GT_.call(null,name,value);
});})(max_fields__$1,more_QMARK_,vec__18178,max_fields))
,cljs.core.take.call(null,max_fields__$1,fields));
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fields-header-tag","fields-header-tag",1339134308),new cljs.core.Keyword(null,"fields-header-open-symbol","fields-header-open-symbol",-26243798)], null),fields_markups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((more_QMARK_)?new cljs.core.Keyword(null,"more-fields-symbol","more-fields-symbol",720022882):null),new cljs.core.Keyword(null,"fields-header-close-symbol","fields-header-close-symbol",1615181116)], null));
}
});

devtools.formatters.markup._LT_fields_GT_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.formatters.markup._LT_fields_GT_.cljs$lang$applyTo = (function (seq18175){
var G__18176 = cljs.core.first.call(null,seq18175);
var seq18175__$1 = cljs.core.next.call(null,seq18175);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18176,seq18175__$1);
});

devtools.formatters.markup._LT_fields_details_GT_ = (function devtools$formatters$markup$_LT_fields_details_GT_(fields,obj){
var protocols = devtools.munging.scan_protocols.call(null,obj);
var has_protocols_QMARK_ = !(cljs.core.empty_QMARK_.call(null,protocols));
var fields_markup = ((!((cljs.core.count.call(null,fields) === (0))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fields-icon","fields-icon",-436030420),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance-body-fields-table-tag","instance-body-fields-table-tag",1306340776)], null),cljs.core.map.call(null,devtools.formatters.markup._LT_fields_details_row_GT_,fields))], null):null);
var protocols_list_markup = ((has_protocols_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocols-icon","protocols-icon",-517302494),devtools.formatters.markup._LT_protocols_list_GT_.call(null,obj,protocols)], null):null);
var native_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"native-icon","native-icon",-126040824),devtools.formatters.markup._LT_native_reference_GT_.call(null,obj)], null);
return devtools.formatters.markup._LT_aligned_body_GT_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fields_markup,protocols_list_markup,native_markup], null));
});
devtools.formatters.markup._LT_instance_GT_ = (function devtools$formatters$markup$_LT_instance_GT_(value){
var constructor_fn = devtools.formatters.helpers.get_constructor.call(null,value);
var vec__18188 = devtools.munging.parse_constructor_info.call(null,constructor_fn);
var _ns = cljs.core.nth.call(null,vec__18188,(0),null);
var _name = cljs.core.nth.call(null,vec__18188,(1),null);
var basis = cljs.core.nth.call(null,vec__18188,(2),null);
var custom_printing_QMARK_ = ((!((value == null)))?(((((value.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IPrintWithWriter$))))?true:false):false);
var type_markup = devtools.formatters.markup._LT_type_GT_.call(null,constructor_fn,new cljs.core.Keyword(null,"instance-type-header-tag","instance-type-header-tag",-1015702989));
var fields = devtools.formatters.helpers.fetch_fields_values.call(null,value,basis);
var fields_markup = devtools.formatters.markup._LT_fields_GT_.call(null,fields,((custom_printing_QMARK_)?(0):null));
var fields_details_markup_fn = ((function (constructor_fn,vec__18188,_ns,_name,basis,custom_printing_QMARK_,type_markup,fields,fields_markup){
return (function (){
return devtools.formatters.markup._LT_fields_details_GT_.call(null,fields,value);
});})(constructor_fn,vec__18188,_ns,_name,basis,custom_printing_QMARK_,type_markup,fields,fields_markup))
;
var fields_preview_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance-value-tag","instance-value-tag",-1739593896),devtools.formatters.markup._LT_reference_surrogate_GT_.call(null,value,fields_markup,fields_details_markup_fn)], null);
var custom_printing_markup = ((custom_printing_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance-custom-printing-wrapper-tag","instance-custom-printing-wrapper-tag",1461890684),new cljs.core.Keyword(null,"instance-custom-printing-background","instance-custom-printing-background",-248433646),devtools.formatters.markup.print_via_protocol.call(null,value,new cljs.core.Keyword(null,"instance-custom-printing-tag","instance-custom-printing-tag",-67034432))], null):null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance-header-tag","instance-header-tag",903623870),new cljs.core.Keyword(null,"instance-header-background","instance-header-background",1510357287),fields_preview_markup,custom_printing_markup,type_markup], null);
});
devtools.formatters.markup._LT_header_GT_ = (function devtools$formatters$markup$_LT_header_GT_(value){
return devtools.formatters.markup._LT_cljs_land_GT_.call(null,devtools.formatters.markup._LT_preview_GT_.call(null,value));
});
devtools.formatters.markup._LT_surrogate_header_GT_ = (function devtools$formatters$markup$_LT_surrogate_header_GT_(surrogate){
var or__3949__auto__ = devtools.formatters.templating.get_surrogate_header.call(null,surrogate);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return devtools.formatters.markup._LT_preview_GT_.call(null,devtools.formatters.templating.get_surrogate_target.call(null,surrogate));
}
});
devtools.formatters.markup._LT_surrogate_target_GT_ = (function devtools$formatters$markup$_LT_surrogate_target_GT_(surrogate){
var target = devtools.formatters.templating.get_surrogate_target.call(null,surrogate);
if(cljs.core.seqable_QMARK_.call(null,target)){
var starting_index = devtools.formatters.templating.get_surrogate_start_index.call(null,surrogate);
return devtools.formatters.markup._LT_details_GT_.call(null,target,starting_index);
} else {
return devtools.formatters.markup._LT_standard_body_reference_GT_.call(null,target);
}
});
devtools.formatters.markup._LT_surrogate_body_GT_ = (function devtools$formatters$markup$_LT_surrogate_body_GT_(surrogate){
var temp__5455__auto__ = devtools.formatters.templating.get_surrogate_body.call(null,surrogate);
if(cljs.core.truth_(temp__5455__auto__)){
var body = temp__5455__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"target","target",253001721),body)){
return devtools.formatters.markup._LT_surrogate_target_GT_.call(null,surrogate);
} else {
return body;
}
} else {
return null;
}
});
devtools.formatters.markup._LT_atomic_GT_ = (function devtools$formatters$markup$_LT_atomic_GT_(value){
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_.call(null,new cljs.core.Keyword(null,"render-nils","render-nils",1360008699),value,cljs.core.nil_QMARK_))){
return devtools.formatters.markup._LT_nil_GT_.call(null);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_.call(null,new cljs.core.Keyword(null,"render-bools","render-bools",1793659724),value,devtools.formatters.helpers.bool_QMARK_))){
return devtools.formatters.markup._LT_bool_GT_.call(null,value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_.call(null,new cljs.core.Keyword(null,"render-strings","render-strings",-1497177335),value,cljs.core.string_QMARK_))){
return devtools.formatters.markup._LT_string_GT_.call(null,value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_.call(null,new cljs.core.Keyword(null,"render-numbers","render-numbers",-1385392009),value,cljs.core.number_QMARK_))){
return devtools.formatters.markup._LT_number_GT_.call(null,value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_.call(null,new cljs.core.Keyword(null,"render-keywords","render-keywords",1200455875),value,cljs.core.keyword_QMARK_))){
return devtools.formatters.markup._LT_keyword_GT_.call(null,value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_.call(null,new cljs.core.Keyword(null,"render-symbols","render-symbols",-887705016),value,cljs.core.symbol_QMARK_))){
return devtools.formatters.markup._LT_symbol_GT_.call(null,value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_.call(null,new cljs.core.Keyword(null,"render-instances","render-instances",-1803579686),value,devtools.formatters.helpers.should_render_instance_QMARK_))){
return devtools.formatters.markup._LT_instance_GT_.call(null,value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_.call(null,new cljs.core.Keyword(null,"render-types","render-types",-129927851),value,devtools.formatters.helpers.cljs_type_QMARK_))){
return devtools.formatters.markup._LT_standalone_type_GT_.call(null,value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_.call(null,new cljs.core.Keyword(null,"render-functions","render-functions",1273333002),value,devtools.formatters.helpers.cljs_function_QMARK_))){
return devtools.formatters.markup._LT_function_GT_.call(null,value);
} else {
return null;
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
devtools.formatters.markup.get_markup_db = (function devtools$formatters$markup$get_markup_db(){
if((devtools.formatters.markup._STAR_markup_db_STAR_ == null)){
devtools.formatters.markup._STAR_markup_db_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"aligned-body","aligned-body",-2124118747),new cljs.core.Keyword(null,"native-reference","native-reference",-2013708658),new cljs.core.Keyword(null,"reference-surrogate","reference-surrogate",274031791),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"protocol-method-arities","protocol-method-arities",-545542044),new cljs.core.Keyword(null,"surrogate-header","surrogate-header",1705524526),new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.Keyword(null,"more-protocols","more-protocols",359555207),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"fields-details","fields-details",-269572714),new cljs.core.Keyword(null,"atomic","atomic",-120459460),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"standard-body","standard-body",-1563020798),new cljs.core.Keyword(null,"type-basis","type-basis",-1825246054),new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"standalone-type","standalone-type",-802565278),new cljs.core.Keyword(null,"preview","preview",451279890),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"protocol-method","protocol-method",1794903206),new cljs.core.Keyword(null,"cljs-land","cljs-land",1255896927),new cljs.core.Keyword(null,"type-basis-item","type-basis-item",-1662150132),new cljs.core.Keyword(null,"protocol-method-arities-details","protocol-method-arities-details",1944702118),new cljs.core.Keyword(null,"fields-details-row","fields-details-row",2066344936),new cljs.core.Keyword(null,"standard-body-reference","standard-body-reference",1513301561),new cljs.core.Keyword(null,"surrogate-body","surrogate-body",-1618569585),new cljs.core.Keyword(null,"expandable","expandable",-704609097),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"protocol-method-arity","protocol-method-arity",-1861927833),new cljs.core.Keyword(null,"raw-surrogate","raw-surrogate",904931181),new cljs.core.Keyword(null,"type-details","type-details",477755178),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"meta-wrapper","meta-wrapper",-1989845587),new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"surrogate","surrogate",2122284260),new cljs.core.Keyword(null,"protocols-list","protocols-list",371434187),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword(null,"reference","reference",-1711695023),new cljs.core.Keyword(null,"function-details","function-details",1501147310),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"arities","arities",-1781122917),new cljs.core.Keyword(null,"header-expander","header-expander",-1606368578),new cljs.core.Keyword(null,"list-details","list-details",46031799),new cljs.core.Keyword(null,"circular-reference","circular-reference",970308727),new cljs.core.Keyword(null,"surrogate-target","surrogate-target",-1262730220),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"protocol-details","protocol-details",-121549824)],[devtools.formatters.markup._LT_aligned_body_GT_,devtools.formatters.markup._LT_native_reference_GT_,devtools.formatters.markup._LT_reference_surrogate_GT_,devtools.formatters.markup._LT_keyword_GT_,devtools.formatters.markup._LT_protocol_method_arities_GT_,devtools.formatters.markup._LT_surrogate_header_GT_,devtools.formatters.markup._LT_details_GT_,devtools.formatters.markup._LT_more_protocols_GT_,devtools.formatters.markup._LT_field_GT_,devtools.formatters.markup._LT_symbol_GT_,devtools.formatters.markup._LT_fields_details_GT_,devtools.formatters.markup._LT_atomic_GT_,devtools.formatters.markup._LT_string_GT_,devtools.formatters.markup._LT_standard_body_GT_,devtools.formatters.markup._LT_type_basis_GT_,devtools.formatters.markup._LT_bool_GT_,devtools.formatters.markup._LT_standalone_type_GT_,devtools.formatters.markup._LT_preview_GT_,devtools.formatters.markup._LT_header_GT_,devtools.formatters.markup._LT_protocol_method_GT_,devtools.formatters.markup._LT_cljs_land_GT_,devtools.formatters.markup._LT_type_basis_item_GT_,devtools.formatters.markup._LT_protocol_method_arities_details_GT_,devtools.formatters.markup._LT_fields_details_row_GT_,devtools.formatters.markup._LT_standard_body_reference_GT_,devtools.formatters.markup._LT_surrogate_body_GT_,devtools.formatters.markup._LT_expandable_GT_,devtools.formatters.markup._LT_type_GT_,devtools.formatters.markup._LT_protocol_method_arity_GT_,devtools.formatters.markup._LT_raw_surrogate_GT_,devtools.formatters.markup._LT_type_details_GT_,devtools.formatters.markup._LT_list_GT_,devtools.formatters.markup._LT_meta_wrapper_GT_,devtools.formatters.markup._LT_protocol_GT_,devtools.formatters.markup._LT_index_GT_,devtools.formatters.markup._LT_surrogate_GT_,devtools.formatters.markup._LT_protocols_list_GT_,devtools.formatters.markup._LT_meta_GT_,devtools.formatters.markup._LT_instance_GT_,devtools.formatters.markup._LT_reference_GT_,devtools.formatters.markup._LT_function_details_GT_,devtools.formatters.markup._LT_function_GT_,devtools.formatters.markup._LT_arities_GT_,devtools.formatters.markup._LT_header_expander_GT_,devtools.formatters.markup._LT_list_details_GT_,devtools.formatters.markup._LT_circular_reference_GT_,devtools.formatters.markup._LT_surrogate_target_GT_,devtools.formatters.markup._LT_fields_GT_,devtools.formatters.markup._LT_nil_GT_,devtools.formatters.markup._LT_body_GT_,devtools.formatters.markup._LT_number_GT_,devtools.formatters.markup._LT_protocol_details_GT_]);
} else {
}

return devtools.formatters.markup._STAR_markup_db_STAR_;
});

//# sourceMappingURL=markup.js.map
