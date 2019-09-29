// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20047){
var map__20048 = p__20047;
var map__20048__$1 = ((((!((map__20048 == null)))?(((((map__20048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20048):map__20048);
var m = map__20048__$1;
var n = cljs.core.get.call(null,map__20048__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__20048__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20050_20072 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20051_20073 = null;
var count__20052_20074 = (0);
var i__20053_20075 = (0);
while(true){
if((i__20053_20075 < count__20052_20074)){
var f_20076 = cljs.core._nth.call(null,chunk__20051_20073,i__20053_20075);
cljs.core.println.call(null,"  ",f_20076);


var G__20077 = seq__20050_20072;
var G__20078 = chunk__20051_20073;
var G__20079 = count__20052_20074;
var G__20080 = (i__20053_20075 + (1));
seq__20050_20072 = G__20077;
chunk__20051_20073 = G__20078;
count__20052_20074 = G__20079;
i__20053_20075 = G__20080;
continue;
} else {
var temp__5457__auto___20081 = cljs.core.seq.call(null,seq__20050_20072);
if(temp__5457__auto___20081){
var seq__20050_20082__$1 = temp__5457__auto___20081;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20050_20082__$1)){
var c__4351__auto___20083 = cljs.core.chunk_first.call(null,seq__20050_20082__$1);
var G__20084 = cljs.core.chunk_rest.call(null,seq__20050_20082__$1);
var G__20085 = c__4351__auto___20083;
var G__20086 = cljs.core.count.call(null,c__4351__auto___20083);
var G__20087 = (0);
seq__20050_20072 = G__20084;
chunk__20051_20073 = G__20085;
count__20052_20074 = G__20086;
i__20053_20075 = G__20087;
continue;
} else {
var f_20088 = cljs.core.first.call(null,seq__20050_20082__$1);
cljs.core.println.call(null,"  ",f_20088);


var G__20089 = cljs.core.next.call(null,seq__20050_20082__$1);
var G__20090 = null;
var G__20091 = (0);
var G__20092 = (0);
seq__20050_20072 = G__20089;
chunk__20051_20073 = G__20090;
count__20052_20074 = G__20091;
i__20053_20075 = G__20092;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20093 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_20093);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_20093)))?cljs.core.second.call(null,arglists_20093):arglists_20093));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20054_20094 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20055_20095 = null;
var count__20056_20096 = (0);
var i__20057_20097 = (0);
while(true){
if((i__20057_20097 < count__20056_20096)){
var vec__20058_20098 = cljs.core._nth.call(null,chunk__20055_20095,i__20057_20097);
var name_20099 = cljs.core.nth.call(null,vec__20058_20098,(0),null);
var map__20061_20100 = cljs.core.nth.call(null,vec__20058_20098,(1),null);
var map__20061_20101__$1 = ((((!((map__20061_20100 == null)))?(((((map__20061_20100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20061_20100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20061_20100):map__20061_20100);
var doc_20102 = cljs.core.get.call(null,map__20061_20101__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20103 = cljs.core.get.call(null,map__20061_20101__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20099);

cljs.core.println.call(null," ",arglists_20103);

if(cljs.core.truth_(doc_20102)){
cljs.core.println.call(null," ",doc_20102);
} else {
}


var G__20104 = seq__20054_20094;
var G__20105 = chunk__20055_20095;
var G__20106 = count__20056_20096;
var G__20107 = (i__20057_20097 + (1));
seq__20054_20094 = G__20104;
chunk__20055_20095 = G__20105;
count__20056_20096 = G__20106;
i__20057_20097 = G__20107;
continue;
} else {
var temp__5457__auto___20108 = cljs.core.seq.call(null,seq__20054_20094);
if(temp__5457__auto___20108){
var seq__20054_20109__$1 = temp__5457__auto___20108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20054_20109__$1)){
var c__4351__auto___20110 = cljs.core.chunk_first.call(null,seq__20054_20109__$1);
var G__20111 = cljs.core.chunk_rest.call(null,seq__20054_20109__$1);
var G__20112 = c__4351__auto___20110;
var G__20113 = cljs.core.count.call(null,c__4351__auto___20110);
var G__20114 = (0);
seq__20054_20094 = G__20111;
chunk__20055_20095 = G__20112;
count__20056_20096 = G__20113;
i__20057_20097 = G__20114;
continue;
} else {
var vec__20063_20115 = cljs.core.first.call(null,seq__20054_20109__$1);
var name_20116 = cljs.core.nth.call(null,vec__20063_20115,(0),null);
var map__20066_20117 = cljs.core.nth.call(null,vec__20063_20115,(1),null);
var map__20066_20118__$1 = ((((!((map__20066_20117 == null)))?(((((map__20066_20117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20066_20117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20066_20117):map__20066_20117);
var doc_20119 = cljs.core.get.call(null,map__20066_20118__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20120 = cljs.core.get.call(null,map__20066_20118__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20116);

cljs.core.println.call(null," ",arglists_20120);

if(cljs.core.truth_(doc_20119)){
cljs.core.println.call(null," ",doc_20119);
} else {
}


var G__20121 = cljs.core.next.call(null,seq__20054_20109__$1);
var G__20122 = null;
var G__20123 = (0);
var G__20124 = (0);
seq__20054_20094 = G__20121;
chunk__20055_20095 = G__20122;
count__20056_20096 = G__20123;
i__20057_20097 = G__20124;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__20068 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20069 = null;
var count__20070 = (0);
var i__20071 = (0);
while(true){
if((i__20071 < count__20070)){
var role = cljs.core._nth.call(null,chunk__20069,i__20071);
var temp__5457__auto___20125__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___20125__$1)){
var spec_20126 = temp__5457__auto___20125__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_20126));
} else {
}


var G__20127 = seq__20068;
var G__20128 = chunk__20069;
var G__20129 = count__20070;
var G__20130 = (i__20071 + (1));
seq__20068 = G__20127;
chunk__20069 = G__20128;
count__20070 = G__20129;
i__20071 = G__20130;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__20068);
if(temp__5457__auto____$1){
var seq__20068__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20068__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__20068__$1);
var G__20131 = cljs.core.chunk_rest.call(null,seq__20068__$1);
var G__20132 = c__4351__auto__;
var G__20133 = cljs.core.count.call(null,c__4351__auto__);
var G__20134 = (0);
seq__20068 = G__20131;
chunk__20069 = G__20132;
count__20070 = G__20133;
i__20071 = G__20134;
continue;
} else {
var role = cljs.core.first.call(null,seq__20068__$1);
var temp__5457__auto___20135__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___20135__$2)){
var spec_20136 = temp__5457__auto___20135__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_20136));
} else {
}


var G__20137 = cljs.core.next.call(null,seq__20068__$1);
var G__20138 = null;
var G__20139 = (0);
var G__20140 = (0);
seq__20068 = G__20137;
chunk__20069 = G__20138;
count__20070 = G__20139;
i__20071 = G__20140;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
