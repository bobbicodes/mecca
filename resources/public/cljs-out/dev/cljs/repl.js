// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__16977){
var map__16978 = p__16977;
var map__16978__$1 = ((((!((map__16978 == null)))?(((((map__16978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16978):map__16978);
var m = map__16978__$1;
var n = cljs.core.get.call(null,map__16978__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__16978__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__16980_17002 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16981_17003 = null;
var count__16982_17004 = (0);
var i__16983_17005 = (0);
while(true){
if((i__16983_17005 < count__16982_17004)){
var f_17006 = cljs.core._nth.call(null,chunk__16981_17003,i__16983_17005);
cljs.core.println.call(null,"  ",f_17006);


var G__17007 = seq__16980_17002;
var G__17008 = chunk__16981_17003;
var G__17009 = count__16982_17004;
var G__17010 = (i__16983_17005 + (1));
seq__16980_17002 = G__17007;
chunk__16981_17003 = G__17008;
count__16982_17004 = G__17009;
i__16983_17005 = G__17010;
continue;
} else {
var temp__5457__auto___17011 = cljs.core.seq.call(null,seq__16980_17002);
if(temp__5457__auto___17011){
var seq__16980_17012__$1 = temp__5457__auto___17011;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16980_17012__$1)){
var c__4351__auto___17013 = cljs.core.chunk_first.call(null,seq__16980_17012__$1);
var G__17014 = cljs.core.chunk_rest.call(null,seq__16980_17012__$1);
var G__17015 = c__4351__auto___17013;
var G__17016 = cljs.core.count.call(null,c__4351__auto___17013);
var G__17017 = (0);
seq__16980_17002 = G__17014;
chunk__16981_17003 = G__17015;
count__16982_17004 = G__17016;
i__16983_17005 = G__17017;
continue;
} else {
var f_17018 = cljs.core.first.call(null,seq__16980_17012__$1);
cljs.core.println.call(null,"  ",f_17018);


var G__17019 = cljs.core.next.call(null,seq__16980_17012__$1);
var G__17020 = null;
var G__17021 = (0);
var G__17022 = (0);
seq__16980_17002 = G__17019;
chunk__16981_17003 = G__17020;
count__16982_17004 = G__17021;
i__16983_17005 = G__17022;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17023 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_17023);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_17023)))?cljs.core.second.call(null,arglists_17023):arglists_17023));
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
var seq__16984_17024 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16985_17025 = null;
var count__16986_17026 = (0);
var i__16987_17027 = (0);
while(true){
if((i__16987_17027 < count__16986_17026)){
var vec__16988_17028 = cljs.core._nth.call(null,chunk__16985_17025,i__16987_17027);
var name_17029 = cljs.core.nth.call(null,vec__16988_17028,(0),null);
var map__16991_17030 = cljs.core.nth.call(null,vec__16988_17028,(1),null);
var map__16991_17031__$1 = ((((!((map__16991_17030 == null)))?(((((map__16991_17030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16991_17030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16991_17030):map__16991_17030);
var doc_17032 = cljs.core.get.call(null,map__16991_17031__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17033 = cljs.core.get.call(null,map__16991_17031__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17029);

cljs.core.println.call(null," ",arglists_17033);

if(cljs.core.truth_(doc_17032)){
cljs.core.println.call(null," ",doc_17032);
} else {
}


var G__17034 = seq__16984_17024;
var G__17035 = chunk__16985_17025;
var G__17036 = count__16986_17026;
var G__17037 = (i__16987_17027 + (1));
seq__16984_17024 = G__17034;
chunk__16985_17025 = G__17035;
count__16986_17026 = G__17036;
i__16987_17027 = G__17037;
continue;
} else {
var temp__5457__auto___17038 = cljs.core.seq.call(null,seq__16984_17024);
if(temp__5457__auto___17038){
var seq__16984_17039__$1 = temp__5457__auto___17038;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16984_17039__$1)){
var c__4351__auto___17040 = cljs.core.chunk_first.call(null,seq__16984_17039__$1);
var G__17041 = cljs.core.chunk_rest.call(null,seq__16984_17039__$1);
var G__17042 = c__4351__auto___17040;
var G__17043 = cljs.core.count.call(null,c__4351__auto___17040);
var G__17044 = (0);
seq__16984_17024 = G__17041;
chunk__16985_17025 = G__17042;
count__16986_17026 = G__17043;
i__16987_17027 = G__17044;
continue;
} else {
var vec__16993_17045 = cljs.core.first.call(null,seq__16984_17039__$1);
var name_17046 = cljs.core.nth.call(null,vec__16993_17045,(0),null);
var map__16996_17047 = cljs.core.nth.call(null,vec__16993_17045,(1),null);
var map__16996_17048__$1 = ((((!((map__16996_17047 == null)))?(((((map__16996_17047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16996_17047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16996_17047):map__16996_17047);
var doc_17049 = cljs.core.get.call(null,map__16996_17048__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17050 = cljs.core.get.call(null,map__16996_17048__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17046);

cljs.core.println.call(null," ",arglists_17050);

if(cljs.core.truth_(doc_17049)){
cljs.core.println.call(null," ",doc_17049);
} else {
}


var G__17051 = cljs.core.next.call(null,seq__16984_17039__$1);
var G__17052 = null;
var G__17053 = (0);
var G__17054 = (0);
seq__16984_17024 = G__17051;
chunk__16985_17025 = G__17052;
count__16986_17026 = G__17053;
i__16987_17027 = G__17054;
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

var seq__16998 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__16999 = null;
var count__17000 = (0);
var i__17001 = (0);
while(true){
if((i__17001 < count__17000)){
var role = cljs.core._nth.call(null,chunk__16999,i__17001);
var temp__5457__auto___17055__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___17055__$1)){
var spec_17056 = temp__5457__auto___17055__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_17056));
} else {
}


var G__17057 = seq__16998;
var G__17058 = chunk__16999;
var G__17059 = count__17000;
var G__17060 = (i__17001 + (1));
seq__16998 = G__17057;
chunk__16999 = G__17058;
count__17000 = G__17059;
i__17001 = G__17060;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__16998);
if(temp__5457__auto____$1){
var seq__16998__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16998__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__16998__$1);
var G__17061 = cljs.core.chunk_rest.call(null,seq__16998__$1);
var G__17062 = c__4351__auto__;
var G__17063 = cljs.core.count.call(null,c__4351__auto__);
var G__17064 = (0);
seq__16998 = G__17061;
chunk__16999 = G__17062;
count__17000 = G__17063;
i__17001 = G__17064;
continue;
} else {
var role = cljs.core.first.call(null,seq__16998__$1);
var temp__5457__auto___17065__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___17065__$2)){
var spec_17066 = temp__5457__auto___17065__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_17066));
} else {
}


var G__17067 = cljs.core.next.call(null,seq__16998__$1);
var G__17068 = null;
var G__17069 = (0);
var G__17070 = (0);
seq__16998 = G__17067;
chunk__16999 = G__17068;
count__17000 = G__17069;
i__17001 = G__17070;
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
