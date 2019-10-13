// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24854){
var map__24855 = p__24854;
var map__24855__$1 = ((((!((map__24855 == null)))?(((((map__24855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24855):map__24855);
var m = map__24855__$1;
var n = cljs.core.get.call(null,map__24855__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__24855__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__24857_24879 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24858_24880 = null;
var count__24859_24881 = (0);
var i__24860_24882 = (0);
while(true){
if((i__24860_24882 < count__24859_24881)){
var f_24883 = cljs.core._nth.call(null,chunk__24858_24880,i__24860_24882);
cljs.core.println.call(null,"  ",f_24883);


var G__24884 = seq__24857_24879;
var G__24885 = chunk__24858_24880;
var G__24886 = count__24859_24881;
var G__24887 = (i__24860_24882 + (1));
seq__24857_24879 = G__24884;
chunk__24858_24880 = G__24885;
count__24859_24881 = G__24886;
i__24860_24882 = G__24887;
continue;
} else {
var temp__5457__auto___24888 = cljs.core.seq.call(null,seq__24857_24879);
if(temp__5457__auto___24888){
var seq__24857_24889__$1 = temp__5457__auto___24888;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24857_24889__$1)){
var c__4351__auto___24890 = cljs.core.chunk_first.call(null,seq__24857_24889__$1);
var G__24891 = cljs.core.chunk_rest.call(null,seq__24857_24889__$1);
var G__24892 = c__4351__auto___24890;
var G__24893 = cljs.core.count.call(null,c__4351__auto___24890);
var G__24894 = (0);
seq__24857_24879 = G__24891;
chunk__24858_24880 = G__24892;
count__24859_24881 = G__24893;
i__24860_24882 = G__24894;
continue;
} else {
var f_24895 = cljs.core.first.call(null,seq__24857_24889__$1);
cljs.core.println.call(null,"  ",f_24895);


var G__24896 = cljs.core.next.call(null,seq__24857_24889__$1);
var G__24897 = null;
var G__24898 = (0);
var G__24899 = (0);
seq__24857_24879 = G__24896;
chunk__24858_24880 = G__24897;
count__24859_24881 = G__24898;
i__24860_24882 = G__24899;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24900 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24900);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24900)))?cljs.core.second.call(null,arglists_24900):arglists_24900));
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
var seq__24861_24901 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24862_24902 = null;
var count__24863_24903 = (0);
var i__24864_24904 = (0);
while(true){
if((i__24864_24904 < count__24863_24903)){
var vec__24865_24905 = cljs.core._nth.call(null,chunk__24862_24902,i__24864_24904);
var name_24906 = cljs.core.nth.call(null,vec__24865_24905,(0),null);
var map__24868_24907 = cljs.core.nth.call(null,vec__24865_24905,(1),null);
var map__24868_24908__$1 = ((((!((map__24868_24907 == null)))?(((((map__24868_24907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24868_24907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24868_24907):map__24868_24907);
var doc_24909 = cljs.core.get.call(null,map__24868_24908__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24910 = cljs.core.get.call(null,map__24868_24908__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24906);

cljs.core.println.call(null," ",arglists_24910);

if(cljs.core.truth_(doc_24909)){
cljs.core.println.call(null," ",doc_24909);
} else {
}


var G__24911 = seq__24861_24901;
var G__24912 = chunk__24862_24902;
var G__24913 = count__24863_24903;
var G__24914 = (i__24864_24904 + (1));
seq__24861_24901 = G__24911;
chunk__24862_24902 = G__24912;
count__24863_24903 = G__24913;
i__24864_24904 = G__24914;
continue;
} else {
var temp__5457__auto___24915 = cljs.core.seq.call(null,seq__24861_24901);
if(temp__5457__auto___24915){
var seq__24861_24916__$1 = temp__5457__auto___24915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24861_24916__$1)){
var c__4351__auto___24917 = cljs.core.chunk_first.call(null,seq__24861_24916__$1);
var G__24918 = cljs.core.chunk_rest.call(null,seq__24861_24916__$1);
var G__24919 = c__4351__auto___24917;
var G__24920 = cljs.core.count.call(null,c__4351__auto___24917);
var G__24921 = (0);
seq__24861_24901 = G__24918;
chunk__24862_24902 = G__24919;
count__24863_24903 = G__24920;
i__24864_24904 = G__24921;
continue;
} else {
var vec__24870_24922 = cljs.core.first.call(null,seq__24861_24916__$1);
var name_24923 = cljs.core.nth.call(null,vec__24870_24922,(0),null);
var map__24873_24924 = cljs.core.nth.call(null,vec__24870_24922,(1),null);
var map__24873_24925__$1 = ((((!((map__24873_24924 == null)))?(((((map__24873_24924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24873_24924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24873_24924):map__24873_24924);
var doc_24926 = cljs.core.get.call(null,map__24873_24925__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24927 = cljs.core.get.call(null,map__24873_24925__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24923);

cljs.core.println.call(null," ",arglists_24927);

if(cljs.core.truth_(doc_24926)){
cljs.core.println.call(null," ",doc_24926);
} else {
}


var G__24928 = cljs.core.next.call(null,seq__24861_24916__$1);
var G__24929 = null;
var G__24930 = (0);
var G__24931 = (0);
seq__24861_24901 = G__24928;
chunk__24862_24902 = G__24929;
count__24863_24903 = G__24930;
i__24864_24904 = G__24931;
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

var seq__24875 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__24876 = null;
var count__24877 = (0);
var i__24878 = (0);
while(true){
if((i__24878 < count__24877)){
var role = cljs.core._nth.call(null,chunk__24876,i__24878);
var temp__5457__auto___24932__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___24932__$1)){
var spec_24933 = temp__5457__auto___24932__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24933));
} else {
}


var G__24934 = seq__24875;
var G__24935 = chunk__24876;
var G__24936 = count__24877;
var G__24937 = (i__24878 + (1));
seq__24875 = G__24934;
chunk__24876 = G__24935;
count__24877 = G__24936;
i__24878 = G__24937;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__24875);
if(temp__5457__auto____$1){
var seq__24875__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24875__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__24875__$1);
var G__24938 = cljs.core.chunk_rest.call(null,seq__24875__$1);
var G__24939 = c__4351__auto__;
var G__24940 = cljs.core.count.call(null,c__4351__auto__);
var G__24941 = (0);
seq__24875 = G__24938;
chunk__24876 = G__24939;
count__24877 = G__24940;
i__24878 = G__24941;
continue;
} else {
var role = cljs.core.first.call(null,seq__24875__$1);
var temp__5457__auto___24942__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___24942__$2)){
var spec_24943 = temp__5457__auto___24942__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24943));
} else {
}


var G__24944 = cljs.core.next.call(null,seq__24875__$1);
var G__24945 = null;
var G__24946 = (0);
var G__24947 = (0);
seq__24875 = G__24944;
chunk__24876 = G__24945;
count__24877 = G__24946;
i__24878 = G__24947;
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
