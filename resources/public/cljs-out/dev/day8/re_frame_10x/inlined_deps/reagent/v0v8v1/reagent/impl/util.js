// Compiled by ClojureScript 1.10.339 {}
goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.interop');
goog.require('clojure.string');
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.is_client = (((typeof window !== 'undefined')) && (!(((window["document"]) == null))));
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_non_reactive_STAR_ = false;
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.memoize_1 = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$util$memoize_1(f){
var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (mem){
return (function (arg){
var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),arg);
if(!((v == null))){
return v;
} else {
var ret = f.call(null,arg);
cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.capitalize = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$util$capitalize(s){
if((cljs.core.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(1)))].join('');
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.dash_to_camel = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$util$dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var vec__9637 = clojure.string.split.call(null,name_str,/-/);
var seq__9638 = cljs.core.seq.call(null,vec__9637);
var first__9639 = cljs.core.first.call(null,seq__9638);
var seq__9638__$1 = cljs.core.next.call(null,seq__9638);
var start = first__9639;
var parts = seq__9638__$1;
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.dont_camel_case.call(null,start))){
return name_str;
} else {
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.capitalize,parts));
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.fun_name = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$util$fun_name(f){
var n = (function (){var or__3949__auto__ = (function (){var and__3938__auto__ = cljs.core.fn_QMARK_.call(null,f);
if(and__3938__auto__){
var or__3949__auto__ = (f["displayName"]);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (f["name"]);
}
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = (function (){var and__3938__auto__ = ((!((f == null)))?(((((f.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === f.cljs$core$INamed$))))?true:false):false);
if(and__3938__auto__){
return cljs.core.name.call(null,f);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var m = cljs.core.meta.call(null,f);
if(cljs.core.map_QMARK_.call(null,m)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
})();
return clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),"$",".");
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.Fn}
*/
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn = (function (pfn,f,args){
this.pfn = pfn;
this.f = f;
this.args = args;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.prototype.cljs$core$Fn$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.prototype.call = (function() {
var G__9645 = null;
var G__9645__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null);
});
var G__9645__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a);
});
var G__9645__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b);
});
var G__9645__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c);
});
var G__9645__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d);
});
var G__9645__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e);
});
var G__9645__7 = (function (self__,a,b,c,d,e,f__$1){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1);
});
var G__9645__8 = (function (self__,a,b,c,d,e,f__$1,g){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g);
});
var G__9645__9 = (function (self__,a,b,c,d,e,f__$1,g,h){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h);
});
var G__9645__10 = (function (self__,a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i);
});
var G__9645__11 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j);
});
var G__9645__12 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k);
});
var G__9645__13 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l);
});
var G__9645__14 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
});
var G__9645__15 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
});
var G__9645__16 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
});
var G__9645__17 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
});
var G__9645__18 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
});
var G__9645__19 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
});
var G__9645__20 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
});
var G__9645__21 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
});
var G__9645__22 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return cljs.core.apply.call(null,self__.pfn,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
});
G__9645 = function(self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__9645__1.call(this,self__);
case 2:
return G__9645__2.call(this,self__,a);
case 3:
return G__9645__3.call(this,self__,a,b);
case 4:
return G__9645__4.call(this,self__,a,b,c);
case 5:
return G__9645__5.call(this,self__,a,b,c,d);
case 6:
return G__9645__6.call(this,self__,a,b,c,d,e);
case 7:
return G__9645__7.call(this,self__,a,b,c,d,e,f__$1);
case 8:
return G__9645__8.call(this,self__,a,b,c,d,e,f__$1,g);
case 9:
return G__9645__9.call(this,self__,a,b,c,d,e,f__$1,g,h);
case 10:
return G__9645__10.call(this,self__,a,b,c,d,e,f__$1,g,h,i);
case 11:
return G__9645__11.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j);
case 12:
return G__9645__12.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k);
case 13:
return G__9645__13.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l);
case 14:
return G__9645__14.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
case 15:
return G__9645__15.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
case 16:
return G__9645__16.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
case 17:
return G__9645__17.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__9645__18.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__9645__19.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__9645__20.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__9645__21.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__9645__22.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__9645.cljs$core$IFn$_invoke$arity$1 = G__9645__1;
G__9645.cljs$core$IFn$_invoke$arity$2 = G__9645__2;
G__9645.cljs$core$IFn$_invoke$arity$3 = G__9645__3;
G__9645.cljs$core$IFn$_invoke$arity$4 = G__9645__4;
G__9645.cljs$core$IFn$_invoke$arity$5 = G__9645__5;
G__9645.cljs$core$IFn$_invoke$arity$6 = G__9645__6;
G__9645.cljs$core$IFn$_invoke$arity$7 = G__9645__7;
G__9645.cljs$core$IFn$_invoke$arity$8 = G__9645__8;
G__9645.cljs$core$IFn$_invoke$arity$9 = G__9645__9;
G__9645.cljs$core$IFn$_invoke$arity$10 = G__9645__10;
G__9645.cljs$core$IFn$_invoke$arity$11 = G__9645__11;
G__9645.cljs$core$IFn$_invoke$arity$12 = G__9645__12;
G__9645.cljs$core$IFn$_invoke$arity$13 = G__9645__13;
G__9645.cljs$core$IFn$_invoke$arity$14 = G__9645__14;
G__9645.cljs$core$IFn$_invoke$arity$15 = G__9645__15;
G__9645.cljs$core$IFn$_invoke$arity$16 = G__9645__16;
G__9645.cljs$core$IFn$_invoke$arity$17 = G__9645__17;
G__9645.cljs$core$IFn$_invoke$arity$18 = G__9645__18;
G__9645.cljs$core$IFn$_invoke$arity$19 = G__9645__19;
G__9645.cljs$core$IFn$_invoke$arity$20 = G__9645__20;
G__9645.cljs$core$IFn$_invoke$arity$21 = G__9645__21;
G__9645.cljs$core$IFn$_invoke$arity$22 = G__9645__22;
return G__9645;
})()
;

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.prototype.apply = (function (self__,args9644){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9644)));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return self__.pfn.call(null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f__$1){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f__$1,g){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f__$1,g,h){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return cljs.core.apply.call(null,self__.pfn,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args)));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pfn","pfn",-513383568,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v0v8v1.reagent.impl.util/PartialFn";

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"day8.re-frame-10x.inlined-deps.reagent.v0v8v1.reagent.impl.util/PartialFn");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v0v8v1.reagent.impl.util/PartialFn.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.__GT_PartialFn = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$util$__GT_PartialFn(pfn,f,args){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.PartialFn(pfn,f,args));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.make_partial_fn = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$util$make_partial_fn(f,args){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.__GT_PartialFn.call(null,cljs.core.apply.call(null,cljs.core.partial,f,args),f,args);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.merge_class = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$util$merge_class(p1,p2){
var class$ = (function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__5457__auto__)){
var c1 = temp__5457__auto__;
var temp__5457__auto____$1 = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__5457__auto____$1)){
var c2 = temp__5457__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.merge_style = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__5457__auto__)){
var s1 = temp__5457__auto__;
var temp__5457__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__5457__auto____$1)){
var s2 = temp__5457__auto____$1;
return cljs.core.merge.call(null,s1,s2);
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.merge_props = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$util$merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_.call(null,p1)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Property must be a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,p1))].join('')),"\n","(map? p1)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.merge_style.call(null,p1,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.merge_class.call(null,p1,cljs.core.merge.call(null,p1,p2)));
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_always_update_STAR_ = false;
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.force_update = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$impl$util$force_update(comp,deep){
if(cljs.core.truth_(deep)){
var _STAR_always_update_STAR_9646 = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_always_update_STAR_;
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (comp["forceUpdate"])();
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_9646;
}} else {
return (comp["forceUpdate"])();
}
});

//# sourceMappingURL=util.js.map
