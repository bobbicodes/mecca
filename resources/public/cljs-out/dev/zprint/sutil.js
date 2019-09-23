// Compiled by ClojureScript 1.10.339 {}
goog.provide('zprint.sutil');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.zfns');
goog.require('cljs.reader');
/**
 * The string value of this sexpr.
 */
zprint.sutil.sstring = (function zprint$sutil$sstring(sexpr){
return cljs.core.pr_str.call(null,sexpr);
});
/**
 * Does pr-str.
 */
zprint.sutil.snumstr = (function zprint$sutil$snumstr(zloc,hex_QMARK_,shift_seq){
return cljs.core.pr_str.call(null,zloc);
});
/**
 * Return a seq of everything after this. Maps get
 *   special handling here, as a seq of a map is a bunch
 *   of map elements, which are pretty much vectors of
 *   [k v] pairs.
 */
zprint.sutil.sseqnws = (function zprint$sutil$sseqnws(sexpr){
if(cljs.core.map_QMARK_.call(null,sexpr)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,sexpr));
} else {
return cljs.core.seq.call(null,sexpr);
}
});
/**
 * Map a function of all of the elements to ther right
 *   of this.
 */
zprint.sutil.smap_right = (function zprint$sutil$smap_right(zfn,sexpr){
if(cljs.core.coll_QMARK_.call(null,sexpr)){
return cljs.core.mapv.call(null,zfn,cljs.core.next.call(null,sexpr));
} else {
return null;
}
});
/**
 * Considering the current sexpr a collection, move down into it and
 *   take n non-whitespace elements, dropping the rest.  Then append the
 *   given element to the end.
 */
zprint.sutil.stake_append = (function zprint$sutil$stake_append(n,sexpr,end_sexpr){
return cljs.core.concat.call(null,cljs.core.take.call(null,n,sexpr),(new cljs.core.List(null,end_sexpr,null,(1),null)));
});
/**
 * Take the various inputs and come up with a style.  But we
 *   don't do focus, so that's easy.
 */
zprint.sutil.sfocus_style = (function zprint$sutil$sfocus_style(style,_,sexpr){
return style;
});
/**
 * Find the nthnext of this sexpr.
 */
zprint.sutil.snthnext = (function zprint$sutil$snthnext(sexpr,n){
if(cljs.core.coll_QMARK_.call(null,sexpr)){
return cljs.core.nthnext.call(null,sexpr,n);
} else {
return null;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.sutil.sfind = (function zprint$sutil$sfind(zthing_QMARK_,sexpr){
if(cljs.core.coll_QMARK_.call(null,sexpr)){
var sloc = sexpr;
var i = (0);
while(true){
if(cljs.core.truth_(sloc)){
if(cljs.core.truth_(zthing_QMARK_.call(null,cljs.core.first.call(null,sloc)))){
return i;
} else {
var G__11911 = cljs.core.next.call(null,sloc);
var G__11912 = (i + (1));
sloc = G__11911;
i = G__11912;
continue;
}
} else {
return null;
}
break;
}
} else {
return null;
}
});
/**
 * How many children does sexpr have?
 */
zprint.sutil.scount = (function zprint$sutil$scount(sexpr){
if(cljs.core.coll_QMARK_.call(null,sexpr)){
return cljs.core.count.call(null,sexpr);
} else {
return (0);
}
});
/**
 * Return a vector containing the return of applying a function to
 *   every element inside of sexpr.
 */
zprint.sutil.smap = (function zprint$sutil$smap(zfn,sexpr){
var v = ((cljs.core.coll_QMARK_.call(null,sexpr))?cljs.core.mapv.call(null,zfn,sexpr):cljs.core.PersistentVector.EMPTY);
return v;
});
/**
 * Is this an anonymous fn?
 */
zprint.sutil.sfn_QMARK_ = (function zprint$sutil$sfn_QMARK_(sexpr){
return cljs.core.fn_QMARK_.call(null,sexpr);
});
/**
 * Is this the focus.  It is possible that this could
 *   be implemented with path's and such, but that is not a goal
 *   at this point.
 */
zprint.sutil.sfocus = (function zprint$sutil$sfocus(sexpr,fsexpr){
return null;
});
/**
 * This is inherently impossible, as we don't have
 *   an up capability.  But we could build one as we
 *   go down which would give us an up capability (or
 *   at least we would always know where we were).  An
 *   interesting idea, but for now, return essentially
 *   nothing.
 */
zprint.sutil.sfind_root_and_path = (function zprint$sutil$sfind_root_and_path(sexpr){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["root",cljs.core.PersistentVector.EMPTY], null);
});
/**
 * Return true if this is whitespace.  But as we
 *   don't have any whitespace in regular s-expressions,
 *   we will always return false.
 */
zprint.sutil.swhitespace_QMARK_ = (function zprint$sutil$swhitespace_QMARK_(sexpr){
return null;
});
/**
 * Do the first thing, with the right amount of arguments.
 */
zprint.sutil.sfirst = (function zprint$sutil$sfirst(sexpr){
return cljs.core.first.call(null,sexpr);
});
/**
 * Do the second thing, with the right amount of arguments.
 */
zprint.sutil.ssecond = (function zprint$sutil$ssecond(sexpr){
return cljs.core.second.call(null,sexpr);
});
/**
 * Define a third since we need one, and znth isn't really nth.
 */
zprint.sutil.sthird = (function zprint$sutil$sthird(sexpr){
return cljs.core.nth.call(null,sexpr,(2));
});
/**
 * Define a fourth since we need one, and znth isn't really nth.
 */
zprint.sutil.sfourth = (function zprint$sutil$sfourth(sexpr){
return cljs.core.nth.call(null,sexpr,(3));
});
/**
 * A list? that includes cons.
 */
zprint.sutil.slist_QMARK_ = (function zprint$sutil$slist_QMARK_(sexpr){
return ((cljs.core.list_QMARK_.call(null,sexpr)) || (cljs.core.seq_QMARK_.call(null,sexpr)));
});
/**
 * last which can take two arguments.
 */
zprint.sutil.slast = (function zprint$sutil$slast(sexpr){
if(cljs.core.coll_QMARK_.call(null,sexpr)){
return cljs.core.last.call(null,sexpr);
} else {
return sexpr;
}
});
/**
 * Is this an array?
 */
zprint.sutil.sarray_QMARK_ = (function zprint$sutil$sarray_QMARK_(x){
if(cljs.core.truth_(x)){
return cljs.core.array_QMARK_.call(null,x);
} else {
return null;
}
});
/**
 * Is this an atom?
 */
zprint.sutil.satom_QMARK_ = (function zprint$sutil$satom_QMARK_(x){
if(cljs.core.truth_(x)){
return null;
} else {
return null;
}
});
/**
 * Deref this thing.
 */
zprint.sutil.sderef = (function zprint$sutil$sderef(x){
return cljs.core.deref.call(null,x);
});
/**
 * Blow an array out into a vector.
 */
zprint.sutil.sexpandarray = (function zprint$sutil$sexpandarray(a){
return cljs.core.mapv.call(null,cljs.core.identity,a);
});
/**
 * Is this a namespace?
 */
zprint.sutil.sns_QMARK_ = (function zprint$sutil$sns_QMARK_(x){
if((x instanceof cljs.core.Symbol)){
return cljs.core.find_ns.call(null,x);
} else {
return null;
}
});
/**
 * Turn something whose pr-str starts with #object into a vector.
 *   obj is the thing that prints as #object, and val is its value.
 *   Two forms, one with and one w/out val.  val could be nil, or
 *   anything, so there isn't a particularly good sentinal here.
 */
zprint.sutil.sobj_to_vec = (function zprint$sutil$sobj_to_vec(var_args){
var G__11914 = arguments.length;
switch (G__11914) {
case 2:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2 = (function (obj,val){
var obj_term = clojure.string.split.call(null,clojure.string.replace.call(null,cljs.core.pr_str.call(null,obj),/^\#object\[/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.call(null,cljs.core.first.call(null,obj_term)),cljs.core.second.call(null,obj_term),val], null);
});

zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1 = (function (obj){
var obj_term = clojure.string.split.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.pr_str.call(null,obj),/^\#object\[/,""),/\]$/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.call(null,cljs.core.first.call(null,obj_term)),cljs.core.second.call(null,obj_term),cljs.reader.read_string.call(null,cljs.core.nth.call(null,obj_term,(2)))], null);
});

zprint.sutil.sobj_to_vec.cljs$lang$maxFixedArity = 2;

/**
 * Is this a promise?
 */
zprint.sutil.spromise_QMARK_ = (function zprint$sutil$spromise_QMARK_(x){
return null;
});
/**
 * Is this an agent?
 */
zprint.sutil.sagent_QMARK_ = (function zprint$sutil$sagent_QMARK_(x){
return null;
});
/**
 * Is this a constant?
 */
zprint.sutil.sconstant_QMARK_ = (function zprint$sutil$sconstant_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || (typeof x === 'string') || (typeof x === 'number') || (cljs.core._EQ_.call(null,"true",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))) || (cljs.core._EQ_.call(null,"false",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))));
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.sutil.slift_ns = (function zprint$sutil$slift_ns(p__11916,pair_seq,ns){
var map__11917 = p__11916;
var map__11917__$1 = ((((!((map__11917 == null)))?(((((map__11917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11917):map__11917);
var map_options = map__11917__$1;
var in_code_QMARK_ = cljs.core.get.call(null,map__11917__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
var lift_ns_QMARK_ = cljs.core.get.call(null,map__11917__$1,new cljs.core.Keyword(null,"lift-ns?","lift-ns?",2021372853));
var lift_ns_in_code_QMARK_ = cljs.core.get.call(null,map__11917__$1,new cljs.core.Keyword(null,"lift-ns-in-code?","lift-ns-in-code?",1444279377));
var unlift_ns_QMARK_ = cljs.core.get.call(null,map__11917__$1,new cljs.core.Keyword(null,"unlift-ns?","unlift-ns?",1065087867));
if(cljs.core.truth_((function (){var and__3938__auto__ = lift_ns_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
if(cljs.core.truth_(in_code_QMARK_)){
return lift_ns_in_code_QMARK_;
} else {
return true;
}
} else {
return and__3938__auto__;
}
})())){
var strip_ns = ((function (map__11917,map__11917__$1,map_options,in_code_QMARK_,lift_ns_QMARK_,lift_ns_in_code_QMARK_,unlift_ns_QMARK_){
return (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,null,cljs.core.name.call(null,named));
} else {
return cljs.core.keyword.call(null,null,cljs.core.name.call(null,named));
}
});})(map__11917,map__11917__$1,map_options,in_code_QMARK_,lift_ns_QMARK_,lift_ns_in_code_QMARK_,unlift_ns_QMARK_))
;
var ns__$1 = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__11919 = cljs.core.first.call(null,pair_seq__$1);
var seq__11920 = cljs.core.seq.call(null,vec__11919);
var first__11921 = cljs.core.first.call(null,seq__11920);
var seq__11920__$1 = cljs.core.next.call(null,seq__11920);
var k = first__11921;
var rest_of_pair = seq__11920__$1;
var pair = vec__11919;
var current_ns = ((((rest_of_pair) && ((((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))))))?cljs.core.namespace.call(null,k):null);
if(cljs.core.not.call(null,k)){
if(cljs.core.truth_(ns__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1)].join(''),out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns__$1)){
if(cljs.core._EQ_.call(null,ns__$1,current_ns)){
var G__11922 = ns__$1;
var G__11923 = cljs.core.next.call(null,pair_seq__$1);
var G__11924 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,strip_ns.call(null,k),rest_of_pair));
ns__$1 = G__11922;
pair_seq__$1 = G__11923;
out = G__11924;
continue;
} else {
return null;
}
} else {
var G__11925 = current_ns;
var G__11926 = cljs.core.next.call(null,pair_seq__$1);
var G__11927 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,strip_ns.call(null,k),rest_of_pair));
ns__$1 = G__11925;
pair_seq__$1 = G__11926;
out = G__11927;
continue;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(1))){
var G__11928 = ns__$1;
var G__11929 = cljs.core.next.call(null,pair_seq__$1);
var G__11930 = cljs.core.conj.call(null,out,pair);
ns__$1 = G__11928;
pair_seq__$1 = G__11929;
out = G__11930;
continue;
} else {
return null;
}
}
}
break;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,pair_seq], null);
}
});
/**
 * Redefine all of the traversal functions for s-expressions, then
 *   call the function of no arguments passed in.
 */
zprint.sutil.sredef_call = (function zprint$sutil$sredef_call(body_fn){
var zstring11931 = zprint.zfns.zstring;
var znumstr11932 = zprint.zfns.znumstr;
var zcomment_QMARK_11933 = zprint.zfns.zcomment_QMARK_;
var zsexpr11934 = zprint.zfns.zsexpr;
var zseqnws11935 = zprint.zfns.zseqnws;
var zmap_right11936 = zprint.zfns.zmap_right;
var zfocus_style11937 = zprint.zfns.zfocus_style;
var zfirst11938 = zprint.zfns.zfirst;
var zfirst_no_comment11939 = zprint.zfns.zfirst_no_comment;
var zsecond11940 = zprint.zfns.zsecond;
var zthird11941 = zprint.zfns.zthird;
var zfourth11942 = zprint.zfns.zfourth;
var znthnext11943 = zprint.zfns.znthnext;
var zcount11944 = zprint.zfns.zcount;
var zmap11945 = zprint.zfns.zmap;
var zmap_w_nl11946 = zprint.zfns.zmap_w_nl;
var zanonfn_QMARK_11947 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK_11948 = zprint.zfns.zfn_obj_QMARK_;
var zfocus11949 = zprint.zfns.zfocus;
var zfind_path11950 = zprint.zfns.zfind_path;
var zwhitespace_QMARK_11951 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK_11952 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK_11953 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK_11954 = zprint.zfns.zmap_QMARK_;
var znamespacedmap_QMARK_11955 = zprint.zfns.znamespacedmap_QMARK_;
var zset_QMARK_11956 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK_11957 = zprint.zfns.zcoll_QMARK_;
var zmeta_QMARK_11958 = zprint.zfns.zmeta_QMARK_;
var zuneval_QMARK_11959 = zprint.zfns.zuneval_QMARK_;
var ztag11960 = zprint.zfns.ztag;
var zlast11961 = zprint.zfns.zlast;
var zarray_QMARK_11962 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK_11963 = zprint.zfns.zatom_QMARK_;
var zderef11964 = zprint.zfns.zderef;
var zrecord_QMARK_11965 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK_11966 = zprint.zfns.zns_QMARK_;
var zobj_to_vec11967 = zprint.zfns.zobj_to_vec;
var zexpandarray11968 = zprint.zfns.zexpandarray;
var znewline_QMARK_11969 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK_11970 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all11971 = zprint.zfns.zmap_all;
var zfuture_QMARK_11972 = zprint.zfns.zfuture_QMARK_;
var zpromise_QMARK_11973 = zprint.zfns.zpromise_QMARK_;
var zkeyword_QMARK_11974 = zprint.zfns.zkeyword_QMARK_;
var zdelay_QMARK_11975 = zprint.zfns.zdelay_QMARK_;
var zconstant_QMARK_11976 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK_11977 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK_11978 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq11979 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot11980 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK_11981 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK_11982 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK_11983 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK_11984 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns11985 = zprint.zfns.zlift_ns;
var zinlinecomment_QMARK_11986 = zprint.zfns.zinlinecomment_QMARK_;
var zfind11987 = zprint.zfns.zfind;
var ztake_append11988 = zprint.zfns.ztake_append;
zprint.zfns.zstring = zprint.sutil.sstring;

zprint.zfns.znumstr = zprint.sutil.snumstr;

zprint.zfns.zcomment_QMARK_ = cljs.core.constantly.call(null,false);

zprint.zfns.zsexpr = cljs.core.identity;

zprint.zfns.zseqnws = zprint.sutil.sseqnws;

zprint.zfns.zmap_right = zprint.sutil.smap_right;

zprint.zfns.zfocus_style = zprint.sutil.sfocus_style;

zprint.zfns.zfirst = zprint.sutil.sfirst;

zprint.zfns.zfirst_no_comment = zprint.sutil.sfirst;

zprint.zfns.zsecond = zprint.sutil.ssecond;

zprint.zfns.zthird = zprint.sutil.sthird;

zprint.zfns.zfourth = zprint.sutil.sfourth;

zprint.zfns.znthnext = zprint.sutil.snthnext;

zprint.zfns.zcount = zprint.sutil.scount;

zprint.zfns.zmap = zprint.sutil.smap;

zprint.zfns.zmap_w_nl = zprint.sutil.smap;

zprint.zfns.zanonfn_QMARK_ = cljs.core.constantly.call(null,false);

zprint.zfns.zfn_obj_QMARK_ = cljs.core.fn_QMARK_;

zprint.zfns.zfocus = zprint.sutil.sfocus;

zprint.zfns.zfind_path = zprint.sutil.sfind_root_and_path;

zprint.zfns.zwhitespace_QMARK_ = zprint.sutil.swhitespace_QMARK_;

zprint.zfns.zlist_QMARK_ = zprint.sutil.slist_QMARK_;

zprint.zfns.zvector_QMARK_ = cljs.core.vector_QMARK_;

zprint.zfns.zmap_QMARK_ = cljs.core.map_QMARK_;

zprint.zfns.znamespacedmap_QMARK_ = cljs.core.constantly.call(null,false);

zprint.zfns.zset_QMARK_ = cljs.core.set_QMARK_;

zprint.zfns.zcoll_QMARK_ = cljs.core.coll_QMARK_;

zprint.zfns.zmeta_QMARK_ = cljs.core.constantly.call(null,false);

zprint.zfns.zuneval_QMARK_ = cljs.core.constantly.call(null,false);

zprint.zfns.ztag = cljs.core.constantly.call(null,null);

zprint.zfns.zlast = zprint.sutil.slast;

zprint.zfns.zarray_QMARK_ = zprint.sutil.sarray_QMARK_;

zprint.zfns.zatom_QMARK_ = zprint.sutil.satom_QMARK_;

zprint.zfns.zderef = zprint.sutil.sderef;

zprint.zfns.zrecord_QMARK_ = cljs.core.record_QMARK_;

zprint.zfns.zns_QMARK_ = cljs.core.constantly.call(null,false);

zprint.zfns.zobj_to_vec = zprint.sutil.sobj_to_vec;

zprint.zfns.zexpandarray = zprint.sutil.sexpandarray;

zprint.zfns.znewline_QMARK_ = cljs.core.constantly.call(null,false);

zprint.zfns.zwhitespaceorcomment_QMARK_ = cljs.core.constantly.call(null,false);

zprint.zfns.zmap_all = cljs.core.map;

zprint.zfns.zfuture_QMARK_ = cljs.core.constantly.call(null,false);

zprint.zfns.zpromise_QMARK_ = zprint.sutil.spromise_QMARK_;

zprint.zfns.zkeyword_QMARK_ = cljs.core.keyword_QMARK_;

zprint.zfns.zdelay_QMARK_ = cljs.core.delay_QMARK_;

zprint.zfns.zconstant_QMARK_ = zprint.sutil.sconstant_QMARK_;

zprint.zfns.zagent_QMARK_ = zprint.sutil.sagent_QMARK_;

zprint.zfns.zreader_macro_QMARK_ = cljs.core.constantly.call(null,false);

zprint.zfns.zarray_to_shift_seq = null;

zprint.zfns.zdotdotdot = cljs.core.constantly.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null));

zprint.zfns.zsymbol_QMARK_ = cljs.core.symbol_QMARK_;

zprint.zfns.znil_QMARK_ = cljs.core.nil_QMARK_;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = cljs.core.constantly.call(null,false);

zprint.zfns.zreader_cond_w_coll_QMARK_ = cljs.core.constantly.call(null,false);

zprint.zfns.zlift_ns = zprint.sutil.slift_ns;

zprint.zfns.zinlinecomment_QMARK_ = cljs.core.constantly.call(null,false);

zprint.zfns.zfind = zprint.sutil.sfind;

zprint.zfns.ztake_append = zprint.sutil.stake_append;

try{return body_fn.call(null);
}finally {zprint.zfns.ztake_append = ztake_append11988;

zprint.zfns.zfind = zfind11987;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK_11986;

zprint.zfns.zlift_ns = zlift_ns11985;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK_11984;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK_11983;

zprint.zfns.znil_QMARK_ = znil_QMARK_11982;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK_11981;

zprint.zfns.zdotdotdot = zdotdotdot11980;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq11979;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK_11978;

zprint.zfns.zagent_QMARK_ = zagent_QMARK_11977;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK_11976;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK_11975;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK_11974;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK_11973;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK_11972;

zprint.zfns.zmap_all = zmap_all11971;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK_11970;

zprint.zfns.znewline_QMARK_ = znewline_QMARK_11969;

zprint.zfns.zexpandarray = zexpandarray11968;

zprint.zfns.zobj_to_vec = zobj_to_vec11967;

zprint.zfns.zns_QMARK_ = zns_QMARK_11966;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK_11965;

zprint.zfns.zderef = zderef11964;

zprint.zfns.zatom_QMARK_ = zatom_QMARK_11963;

zprint.zfns.zarray_QMARK_ = zarray_QMARK_11962;

zprint.zfns.zlast = zlast11961;

zprint.zfns.ztag = ztag11960;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK_11959;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK_11958;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK_11957;

zprint.zfns.zset_QMARK_ = zset_QMARK_11956;

zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK_11955;

zprint.zfns.zmap_QMARK_ = zmap_QMARK_11954;

zprint.zfns.zvector_QMARK_ = zvector_QMARK_11953;

zprint.zfns.zlist_QMARK_ = zlist_QMARK_11952;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK_11951;

zprint.zfns.zfind_path = zfind_path11950;

zprint.zfns.zfocus = zfocus11949;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK_11948;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK_11947;

zprint.zfns.zmap_w_nl = zmap_w_nl11946;

zprint.zfns.zmap = zmap11945;

zprint.zfns.zcount = zcount11944;

zprint.zfns.znthnext = znthnext11943;

zprint.zfns.zfourth = zfourth11942;

zprint.zfns.zthird = zthird11941;

zprint.zfns.zsecond = zsecond11940;

zprint.zfns.zfirst_no_comment = zfirst_no_comment11939;

zprint.zfns.zfirst = zfirst11938;

zprint.zfns.zfocus_style = zfocus_style11937;

zprint.zfns.zmap_right = zmap_right11936;

zprint.zfns.zseqnws = zseqnws11935;

zprint.zfns.zsexpr = zsexpr11934;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK_11933;

zprint.zfns.znumstr = znumstr11932;

zprint.zfns.zstring = zstring11931;
}});

//# sourceMappingURL=sutil.js.map
