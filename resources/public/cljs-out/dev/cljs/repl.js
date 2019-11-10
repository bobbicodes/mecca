// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32853){
var map__32854 = p__32853;
var map__32854__$1 = ((((!((map__32854 == null)))?(((((map__32854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32854):map__32854);
var m = map__32854__$1;
var n = cljs.core.get.call(null,map__32854__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32854__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__32856_32878 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32857_32879 = null;
var count__32858_32880 = (0);
var i__32859_32881 = (0);
while(true){
if((i__32859_32881 < count__32858_32880)){
var f_32882 = cljs.core._nth.call(null,chunk__32857_32879,i__32859_32881);
cljs.core.println.call(null,"  ",f_32882);


var G__32883 = seq__32856_32878;
var G__32884 = chunk__32857_32879;
var G__32885 = count__32858_32880;
var G__32886 = (i__32859_32881 + (1));
seq__32856_32878 = G__32883;
chunk__32857_32879 = G__32884;
count__32858_32880 = G__32885;
i__32859_32881 = G__32886;
continue;
} else {
var temp__5457__auto___32887 = cljs.core.seq.call(null,seq__32856_32878);
if(temp__5457__auto___32887){
var seq__32856_32888__$1 = temp__5457__auto___32887;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32856_32888__$1)){
var c__4351__auto___32889 = cljs.core.chunk_first.call(null,seq__32856_32888__$1);
var G__32890 = cljs.core.chunk_rest.call(null,seq__32856_32888__$1);
var G__32891 = c__4351__auto___32889;
var G__32892 = cljs.core.count.call(null,c__4351__auto___32889);
var G__32893 = (0);
seq__32856_32878 = G__32890;
chunk__32857_32879 = G__32891;
count__32858_32880 = G__32892;
i__32859_32881 = G__32893;
continue;
} else {
var f_32894 = cljs.core.first.call(null,seq__32856_32888__$1);
cljs.core.println.call(null,"  ",f_32894);


var G__32895 = cljs.core.next.call(null,seq__32856_32888__$1);
var G__32896 = null;
var G__32897 = (0);
var G__32898 = (0);
seq__32856_32878 = G__32895;
chunk__32857_32879 = G__32896;
count__32858_32880 = G__32897;
i__32859_32881 = G__32898;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32899 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32899);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32899)))?cljs.core.second.call(null,arglists_32899):arglists_32899));
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
var seq__32860_32900 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32861_32901 = null;
var count__32862_32902 = (0);
var i__32863_32903 = (0);
while(true){
if((i__32863_32903 < count__32862_32902)){
var vec__32864_32904 = cljs.core._nth.call(null,chunk__32861_32901,i__32863_32903);
var name_32905 = cljs.core.nth.call(null,vec__32864_32904,(0),null);
var map__32867_32906 = cljs.core.nth.call(null,vec__32864_32904,(1),null);
var map__32867_32907__$1 = ((((!((map__32867_32906 == null)))?(((((map__32867_32906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32867_32906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32867_32906):map__32867_32906);
var doc_32908 = cljs.core.get.call(null,map__32867_32907__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32909 = cljs.core.get.call(null,map__32867_32907__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32905);

cljs.core.println.call(null," ",arglists_32909);

if(cljs.core.truth_(doc_32908)){
cljs.core.println.call(null," ",doc_32908);
} else {
}


var G__32910 = seq__32860_32900;
var G__32911 = chunk__32861_32901;
var G__32912 = count__32862_32902;
var G__32913 = (i__32863_32903 + (1));
seq__32860_32900 = G__32910;
chunk__32861_32901 = G__32911;
count__32862_32902 = G__32912;
i__32863_32903 = G__32913;
continue;
} else {
var temp__5457__auto___32914 = cljs.core.seq.call(null,seq__32860_32900);
if(temp__5457__auto___32914){
var seq__32860_32915__$1 = temp__5457__auto___32914;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32860_32915__$1)){
var c__4351__auto___32916 = cljs.core.chunk_first.call(null,seq__32860_32915__$1);
var G__32917 = cljs.core.chunk_rest.call(null,seq__32860_32915__$1);
var G__32918 = c__4351__auto___32916;
var G__32919 = cljs.core.count.call(null,c__4351__auto___32916);
var G__32920 = (0);
seq__32860_32900 = G__32917;
chunk__32861_32901 = G__32918;
count__32862_32902 = G__32919;
i__32863_32903 = G__32920;
continue;
} else {
var vec__32869_32921 = cljs.core.first.call(null,seq__32860_32915__$1);
var name_32922 = cljs.core.nth.call(null,vec__32869_32921,(0),null);
var map__32872_32923 = cljs.core.nth.call(null,vec__32869_32921,(1),null);
var map__32872_32924__$1 = ((((!((map__32872_32923 == null)))?(((((map__32872_32923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32872_32923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32872_32923):map__32872_32923);
var doc_32925 = cljs.core.get.call(null,map__32872_32924__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32926 = cljs.core.get.call(null,map__32872_32924__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32922);

cljs.core.println.call(null," ",arglists_32926);

if(cljs.core.truth_(doc_32925)){
cljs.core.println.call(null," ",doc_32925);
} else {
}


var G__32927 = cljs.core.next.call(null,seq__32860_32915__$1);
var G__32928 = null;
var G__32929 = (0);
var G__32930 = (0);
seq__32860_32900 = G__32927;
chunk__32861_32901 = G__32928;
count__32862_32902 = G__32929;
i__32863_32903 = G__32930;
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

var seq__32874 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32875 = null;
var count__32876 = (0);
var i__32877 = (0);
while(true){
if((i__32877 < count__32876)){
var role = cljs.core._nth.call(null,chunk__32875,i__32877);
var temp__5457__auto___32931__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___32931__$1)){
var spec_32932 = temp__5457__auto___32931__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32932));
} else {
}


var G__32933 = seq__32874;
var G__32934 = chunk__32875;
var G__32935 = count__32876;
var G__32936 = (i__32877 + (1));
seq__32874 = G__32933;
chunk__32875 = G__32934;
count__32876 = G__32935;
i__32877 = G__32936;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__32874);
if(temp__5457__auto____$1){
var seq__32874__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32874__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__32874__$1);
var G__32937 = cljs.core.chunk_rest.call(null,seq__32874__$1);
var G__32938 = c__4351__auto__;
var G__32939 = cljs.core.count.call(null,c__4351__auto__);
var G__32940 = (0);
seq__32874 = G__32937;
chunk__32875 = G__32938;
count__32876 = G__32939;
i__32877 = G__32940;
continue;
} else {
var role = cljs.core.first.call(null,seq__32874__$1);
var temp__5457__auto___32941__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___32941__$2)){
var spec_32942 = temp__5457__auto___32941__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32942));
} else {
}


var G__32943 = cljs.core.next.call(null,seq__32874__$1);
var G__32944 = null;
var G__32945 = (0);
var G__32946 = (0);
seq__32874 = G__32943;
chunk__32875 = G__32944;
count__32876 = G__32945;
i__32877 = G__32946;
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
