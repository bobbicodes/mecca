// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32849){
var map__32850 = p__32849;
var map__32850__$1 = ((((!((map__32850 == null)))?(((((map__32850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32850):map__32850);
var m = map__32850__$1;
var n = cljs.core.get.call(null,map__32850__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32850__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__32852_32874 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32853_32875 = null;
var count__32854_32876 = (0);
var i__32855_32877 = (0);
while(true){
if((i__32855_32877 < count__32854_32876)){
var f_32878 = cljs.core._nth.call(null,chunk__32853_32875,i__32855_32877);
cljs.core.println.call(null,"  ",f_32878);


var G__32879 = seq__32852_32874;
var G__32880 = chunk__32853_32875;
var G__32881 = count__32854_32876;
var G__32882 = (i__32855_32877 + (1));
seq__32852_32874 = G__32879;
chunk__32853_32875 = G__32880;
count__32854_32876 = G__32881;
i__32855_32877 = G__32882;
continue;
} else {
var temp__5457__auto___32883 = cljs.core.seq.call(null,seq__32852_32874);
if(temp__5457__auto___32883){
var seq__32852_32884__$1 = temp__5457__auto___32883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32852_32884__$1)){
var c__4351__auto___32885 = cljs.core.chunk_first.call(null,seq__32852_32884__$1);
var G__32886 = cljs.core.chunk_rest.call(null,seq__32852_32884__$1);
var G__32887 = c__4351__auto___32885;
var G__32888 = cljs.core.count.call(null,c__4351__auto___32885);
var G__32889 = (0);
seq__32852_32874 = G__32886;
chunk__32853_32875 = G__32887;
count__32854_32876 = G__32888;
i__32855_32877 = G__32889;
continue;
} else {
var f_32890 = cljs.core.first.call(null,seq__32852_32884__$1);
cljs.core.println.call(null,"  ",f_32890);


var G__32891 = cljs.core.next.call(null,seq__32852_32884__$1);
var G__32892 = null;
var G__32893 = (0);
var G__32894 = (0);
seq__32852_32874 = G__32891;
chunk__32853_32875 = G__32892;
count__32854_32876 = G__32893;
i__32855_32877 = G__32894;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32895 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32895);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32895)))?cljs.core.second.call(null,arglists_32895):arglists_32895));
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
var seq__32856_32896 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32857_32897 = null;
var count__32858_32898 = (0);
var i__32859_32899 = (0);
while(true){
if((i__32859_32899 < count__32858_32898)){
var vec__32860_32900 = cljs.core._nth.call(null,chunk__32857_32897,i__32859_32899);
var name_32901 = cljs.core.nth.call(null,vec__32860_32900,(0),null);
var map__32863_32902 = cljs.core.nth.call(null,vec__32860_32900,(1),null);
var map__32863_32903__$1 = ((((!((map__32863_32902 == null)))?(((((map__32863_32902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32863_32902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32863_32902):map__32863_32902);
var doc_32904 = cljs.core.get.call(null,map__32863_32903__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32905 = cljs.core.get.call(null,map__32863_32903__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32901);

cljs.core.println.call(null," ",arglists_32905);

if(cljs.core.truth_(doc_32904)){
cljs.core.println.call(null," ",doc_32904);
} else {
}


var G__32906 = seq__32856_32896;
var G__32907 = chunk__32857_32897;
var G__32908 = count__32858_32898;
var G__32909 = (i__32859_32899 + (1));
seq__32856_32896 = G__32906;
chunk__32857_32897 = G__32907;
count__32858_32898 = G__32908;
i__32859_32899 = G__32909;
continue;
} else {
var temp__5457__auto___32910 = cljs.core.seq.call(null,seq__32856_32896);
if(temp__5457__auto___32910){
var seq__32856_32911__$1 = temp__5457__auto___32910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32856_32911__$1)){
var c__4351__auto___32912 = cljs.core.chunk_first.call(null,seq__32856_32911__$1);
var G__32913 = cljs.core.chunk_rest.call(null,seq__32856_32911__$1);
var G__32914 = c__4351__auto___32912;
var G__32915 = cljs.core.count.call(null,c__4351__auto___32912);
var G__32916 = (0);
seq__32856_32896 = G__32913;
chunk__32857_32897 = G__32914;
count__32858_32898 = G__32915;
i__32859_32899 = G__32916;
continue;
} else {
var vec__32865_32917 = cljs.core.first.call(null,seq__32856_32911__$1);
var name_32918 = cljs.core.nth.call(null,vec__32865_32917,(0),null);
var map__32868_32919 = cljs.core.nth.call(null,vec__32865_32917,(1),null);
var map__32868_32920__$1 = ((((!((map__32868_32919 == null)))?(((((map__32868_32919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32868_32919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32868_32919):map__32868_32919);
var doc_32921 = cljs.core.get.call(null,map__32868_32920__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32922 = cljs.core.get.call(null,map__32868_32920__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32918);

cljs.core.println.call(null," ",arglists_32922);

if(cljs.core.truth_(doc_32921)){
cljs.core.println.call(null," ",doc_32921);
} else {
}


var G__32923 = cljs.core.next.call(null,seq__32856_32911__$1);
var G__32924 = null;
var G__32925 = (0);
var G__32926 = (0);
seq__32856_32896 = G__32923;
chunk__32857_32897 = G__32924;
count__32858_32898 = G__32925;
i__32859_32899 = G__32926;
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

var seq__32870 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32871 = null;
var count__32872 = (0);
var i__32873 = (0);
while(true){
if((i__32873 < count__32872)){
var role = cljs.core._nth.call(null,chunk__32871,i__32873);
var temp__5457__auto___32927__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___32927__$1)){
var spec_32928 = temp__5457__auto___32927__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32928));
} else {
}


var G__32929 = seq__32870;
var G__32930 = chunk__32871;
var G__32931 = count__32872;
var G__32932 = (i__32873 + (1));
seq__32870 = G__32929;
chunk__32871 = G__32930;
count__32872 = G__32931;
i__32873 = G__32932;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__32870);
if(temp__5457__auto____$1){
var seq__32870__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32870__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__32870__$1);
var G__32933 = cljs.core.chunk_rest.call(null,seq__32870__$1);
var G__32934 = c__4351__auto__;
var G__32935 = cljs.core.count.call(null,c__4351__auto__);
var G__32936 = (0);
seq__32870 = G__32933;
chunk__32871 = G__32934;
count__32872 = G__32935;
i__32873 = G__32936;
continue;
} else {
var role = cljs.core.first.call(null,seq__32870__$1);
var temp__5457__auto___32937__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___32937__$2)){
var spec_32938 = temp__5457__auto___32937__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32938));
} else {
}


var G__32939 = cljs.core.next.call(null,seq__32870__$1);
var G__32940 = null;
var G__32941 = (0);
var G__32942 = (0);
seq__32870 = G__32939;
chunk__32871 = G__32940;
count__32872 = G__32941;
i__32873 = G__32942;
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
