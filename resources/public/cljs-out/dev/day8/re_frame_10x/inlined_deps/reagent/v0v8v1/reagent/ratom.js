// Compiled by ClojureScript 1.10.339 {}
goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching');
goog.require('clojure.set');
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.debug !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.debug = false;
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.generation !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.generation = (0);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom._running !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom._running = cljs.core.atom.call(null,(0));
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.reactive_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$reactive_QMARK_(){
return !((day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom._STAR_ratom_context_STAR_ == null));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.running = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$running(){
return cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom._running);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.arr_len = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$arr_len(x){
if((x == null)){
return (0);
} else {
return x.length;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.arr_eq = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$arr_eq(x,y){
var len = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.arr_len.call(null,x);
var and__3938__auto__ = (len === day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.arr_len.call(null,y));
if(and__3938__auto__){
var i = (0);
while(true){
var or__3949__auto__ = (i === len);
if(or__3949__auto__){
return or__3949__auto__;
} else {
if(((x[i]) === (y[i]))){
var G__9693 = (i + (1));
i = G__9693;
continue;
} else {
return false;
}
}
break;
}
} else {
return and__3938__auto__;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.in_context = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$in_context(obj,f){
var _STAR_ratom_context_STAR_9694 = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom._STAR_ratom_context_STAR_;
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return f.call(null);
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_9694;
}});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.deref_capture = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$deref_capture(f,r){
r.captured = null;

r.ratomGeneration = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.generation = (day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.generation + (1));


var res = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.in_context.call(null,r,f);
var c = r.captured;
r.dirty_QMARK_ = false;

if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.arr_eq.call(null,c,r.watching)){
} else {
r._update_watching(c);
}

return res;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.notify_deref_watcher_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$notify_deref_watcher_BANG_(derefed){
var temp__5461__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5461__auto__ == null)){
return null;
} else {
var r = temp__5461__auto__;
var c = r.captured;
if((c == null)){
return r.captured = [derefed];
} else {
return c.push(derefed);
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.check_watches = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$check_watches(old,new$){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom._running,cljs.core._PLUS_,(cljs.core.count.call(null,new$) - cljs.core.count.call(null,old)));
} else {
}

return new$;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.add_w = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$add_w(this$,key,f){
var w = this$.watches;
this$.watches = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.check_watches.call(null,w,cljs.core.assoc.call(null,w,key,f));

return this$.watchesArr = null;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.remove_w = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$remove_w(this$,key){
var w = this$.watches;
this$.watches = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.check_watches.call(null,w,cljs.core.dissoc.call(null,w,key));

return this$.watchesArr = null;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.notify_w = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$notify_w(this$,old,new$){
var w = this$.watchesArr;
var a = (((w == null))?this$.watchesArr = cljs.core.reduce_kv.call(null,((function (w){
return (function (p1__9695_SHARP_,p2__9696_SHARP_,p3__9697_SHARP_){
var G__9698 = p1__9695_SHARP_;
G__9698.push(p2__9696_SHARP_);

G__9698.push(p3__9697_SHARP_);

return G__9698;
});})(w))
,[],this$.watches):w);
var len = a.length;
var i = (0);
while(true){
if((i < len)){
var k_9699 = (a[i]);
var f_9700 = (a[(i + (1))]);
f_9700.call(null,k_9699,this$,old,new$);

var G__9701 = ((2) + i);
i = G__9701;
continue;
} else {
return null;
}
break;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.pr_atom = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$pr_atom(a,writer,opts,s){
cljs.core._write.call(null,writer,["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''));

cljs.core.pr_writer.call(null,(function (){var _STAR_ratom_context_STAR_9702 = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom._STAR_ratom_context_STAR_;
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref.call(null,a);
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_9702;
}})(),writer,opts);

return cljs.core._write.call(null,writer,">");
});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.rea_queue !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.rea_queue = null;
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.rea_enqueue = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$rea_enqueue(r){
if((day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.rea_queue == null)){
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.rea_queue = [];

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.schedule.call(null);
} else {
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.rea_queue.push(r);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.flush_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$flush_BANG_(){
while(true){
var q = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.rea_queue;
if((q == null)){
return null;
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.rea_queue = null;

var n__4408__auto___9703 = q.length;
var i_9704 = (0);
while(true){
if((i_9704 < n__4408__auto___9703)){
(q[i_9704])._queued_run();

var G__9705 = (i_9704 + (1));
i_9704 = G__9705;
continue;
} else {
}
break;
}

continue;
}
break;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.ratom_flush = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.flush_BANG_;

/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.IReactiveAtom = function(){};


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IWithMeta}
*/
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2154201088;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RAtom.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Atom:");
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error(["Assert failed: ","Validator rejected reference state","\n","(validator new-value)"].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.notify_w.call(null,a__$1,old_value,new_value);
}

return new_value;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.notify_w.call(null,this$__$1,old,new$);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.add_w.call(null,this$__$1,key,f);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.remove_w.call(null,this$__$1,key);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RAtom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RAtom(self__.state,new_meta,self__.validator,self__.watches));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RAtom.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RAtom.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v0v8v1.reagent.ratom/RAtom";

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"day8.re-frame-10x.inlined-deps.reagent.v0v8v1.reagent.ratom/RAtom");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v0v8v1.reagent.ratom/RAtom.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.__GT_RAtom = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.atom = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$atom(var_args){
var G__9709 = arguments.length;
switch (G__9709) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___9714 = arguments.length;
var i__4532__auto___9715 = (0);
while(true){
if((i__4532__auto___9715 < len__4531__auto___9714)){
args_arr__4546__auto__.push((arguments[i__4532__auto___9715]));

var G__9716 = (i__4532__auto___9715 + (1));
i__4532__auto___9715 = G__9716;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((1)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4547__auto__);

}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.__GT_RAtom.call(null,x,null,null,null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__9710){
var map__9711 = p__9710;
var map__9711__$1 = ((((!((map__9711 == null)))?(((((map__9711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9711):map__9711);
var meta = cljs.core.get.call(null,map__9711__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var validator = cljs.core.get.call(null,map__9711__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.__GT_RAtom.call(null,x,meta,validator,null);
});

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.atom.cljs$lang$applyTo = (function (seq9707){
var G__9708 = cljs.core.first.call(null,seq9707);
var seq9707__$1 = cljs.core.next.call(null,seq9707);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9708,seq9707__$1);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.atom.cljs$lang$maxFixedArity = (1);

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.cache_key = "reagReactionCache";
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.cached_reaction = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$cached_reaction(f,o,k,obj,destroy){
var m = (o["reagReactionCache"]);
var m__$1 = (((m == null))?cljs.core.PersistentArrayMap.EMPTY:m);
var r = m__$1.call(null,k,null);
if(!((r == null))){
return cljs.core._deref.call(null,r);
} else {
if((day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom._STAR_ratom_context_STAR_ == null)){
return f.call(null);
} else {
var r__$1 = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.make_reaction.call(null,f,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),((function (m,m__$1,r){
return (function (x){
if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom._running,cljs.core.dec);
} else {
}

var __9717 = (o["reagReactionCache"]);
var __9718__$1 = cljs.core.dissoc.call(null,__9717,k);
(o["reagReactionCache"] = __9718__$1);

if(!((obj == null))){
obj.reaction = null;
} else {
}

if(!((destroy == null))){
return destroy.call(null,x);
} else {
return null;
}
});})(m,m__$1,r))
);
var v = cljs.core._deref.call(null,r__$1);
(o["reagReactionCache"] = cljs.core.assoc.call(null,m__$1,k,r__$1));

if(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom._running,cljs.core.inc);
} else {
}

if(!((obj == null))){
obj.reaction = r__$1;
} else {
}

return v;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.IReactiveAtom}
*/
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Track = (function (f,args,reaction){
this.f = f;
this.args = args;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Track.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Track.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5459__auto__ = self__.reaction;
if((temp__5459__auto__ == null)){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.cached_reaction.call(null,((function (temp__5459__auto__,this$__$1){
return (function (){
return cljs.core.apply.call(null,self__.f,self__.args);
});})(temp__5459__auto__,this$__$1))
,self__.f,self__.args,this$__$1,null);
} else {
var r = temp__5459__auto__;
return cljs.core._deref.call(null,r);
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Track.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Track)) && (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args)));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Track.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Track.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Track:");
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Track.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Track.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Track.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v0v8v1.reagent.ratom/Track";

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Track.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"day8.re-frame-10x.inlined-deps.reagent.v0v8v1.reagent.ratom/Track");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v0v8v1.reagent.ratom/Track.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.__GT_Track = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$__GT_Track(f,args,reaction){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Track(f,args,reaction));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.make_track = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$make_track(f,args){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Track(f,args,null));
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.make_track_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$make_track_BANG_(f,args){
var t = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.make_track.call(null,f,args);
var r = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.make_reaction.call(null,((function (t){
return (function (){
return cljs.core._deref.call(null,t);
});})(t))
,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),true);
cljs.core.deref.call(null,r);

return r;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.track = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$track(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9721 = arguments.length;
var i__4532__auto___9722 = (0);
while(true){
if((i__4532__auto___9722 < len__4531__auto___9721)){
args__4534__auto__.push((arguments[i__4532__auto___9722]));

var G__9723 = (i__4532__auto___9722 + (1));
i__4532__auto___9722 = G__9723;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.make_track.call(null,f,args);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.track.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.track.cljs$lang$applyTo = (function (seq9719){
var G__9720 = cljs.core.first.call(null,seq9719);
var seq9719__$1 = cljs.core.next.call(null,seq9719);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9720,seq9719__$1);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.track_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$track_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9726 = arguments.length;
var i__4532__auto___9727 = (0);
while(true){
if((i__4532__auto___9727 < len__4531__auto___9726)){
args__4534__auto__.push((arguments[i__4532__auto___9727]));

var G__9728 = (i__4532__auto___9727 + (1));
i__4532__auto___9727 = G__9728;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.make_track_BANG_.call(null,f,args);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.track_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.track_BANG_.cljs$lang$applyTo = (function (seq9724){
var G__9725 = cljs.core.first.call(null,seq9724);
var seq9724__$1 = cljs.core.next.call(null,seq9724);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9725,seq9724__$1);
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Object}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.IReactiveAtom}
*/
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RCursor = (function (ratom,path,reaction,state,watches){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.state = state;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_9729 = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom._STAR_ratom_context_STAR_;
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref.call(null,this$);
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_9729;
}});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RCursor.prototype._set_state = (function (oldstate,newstate){
var self__ = this;
var this$ = this;
if((oldstate === newstate)){
return null;
} else {
self__.state = newstate;

if(!((self__.watches == null))){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.notify_w.call(null,this$,oldstate,newstate);
} else {
return null;
}
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RCursor.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.pr_atom.call(null,a__$1,w,opts,["Cursor: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path)].join(''));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RCursor)) && (cljs.core._EQ_.call(null,self__.path,other.path)) && (cljs.core._EQ_.call(null,self__.ratom,other.ratom)));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
this$__$1._set_state(oldstate,new_value);

if(((!((self__.ratom == null)))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom))){
if(cljs.core._EQ_.call(null,self__.path,cljs.core.PersistentVector.EMPTY)){
cljs.core.reset_BANG_.call(null,self__.ratom,new_value);
} else {
cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,new_value);
}
} else {
self__.ratom.call(null,self__.path,new_value);
}

return new_value;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek()));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek(),x));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek(),x,y));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,a__$1._peek(),x,y,more));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.notify_w.call(null,this$__$1,old,new$);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.add_w.call(null,this$__$1,key,f);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.remove_w.call(null,this$__$1,key);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var newstate = (function (){var temp__5459__auto__ = self__.reaction;
if((temp__5459__auto__ == null)){
var f = ((((!((self__.ratom == null)))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom)))?((function (temp__5459__auto__,oldstate,this$__$1){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});})(temp__5459__auto__,oldstate,this$__$1))
:((function (temp__5459__auto__,oldstate,this$__$1){
return (function (){
return self__.ratom.call(null,self__.path);
});})(temp__5459__auto__,oldstate,this$__$1))
);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.cached_reaction.call(null,f,self__.ratom,self__.path,this$__$1,null);
} else {
var r = temp__5459__auto__;
return cljs.core._deref.call(null,r);
}
})();
this$__$1._set_state(oldstate,newstate);

return newstate;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ratom","ratom",1514010260,null),new cljs.core.Symbol(null,"path","path",1452340359,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RCursor.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RCursor.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v0v8v1.reagent.ratom/RCursor";

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"day8.re-frame-10x.inlined-deps.reagent.v0v8v1.reagent.ratom/RCursor");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v0v8v1.reagent.ratom/RCursor.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.__GT_RCursor = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$__GT_RCursor(ratom,path,reaction,state,watches){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.RCursor(ratom,path,reaction,state,watches));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.cursor = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$cursor(src,path){
if((function (){var or__3949__auto__ = ((!((src == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === src.day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$IReactiveAtom$))))?true:(((!src.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.IReactiveAtom,src):false)):cljs.core.native_satisfies_QMARK_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.IReactiveAtom,src));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return ((cljs.core.ifn_QMARK_.call(null,src)) && (!(cljs.core.vector_QMARK_.call(null,src))));
}
})()){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["src must be a reactive atom or a function, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,src))].join('')),"\n","(or (satisfies? IReactiveAtom src) (and (ifn? src) (not (vector? src))))"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.__GT_RCursor.call(null,src,path,null,null,null);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.with_let_destroy = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$with_let_destroy(v){
var temp__5461__auto__ = v.destroy;
if((temp__5461__auto__ == null)){
return null;
} else {
var f = temp__5461__auto__;
return f.call(null);
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.with_let_values = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$with_let_values(key){
var temp__5459__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5459__auto__ == null)){
return [];
} else {
var c = temp__5459__auto__;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.cached_reaction.call(null,cljs.core.array,c,key,null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.with_let_destroy);
}
});

/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.IDisposable = function(){};

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.dispose_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$dispose_BANG_(this$){
if(((!((this$ == null))) && (!((this$.day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$IDisposable$dispose_BANG_$arity$1 == null))))){
return this$.day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.dispose_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.dispose_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.add_on_dispose_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$add_on_dispose_BANG_(this$,f){
if(((!((this$ == null))) && (!((this$.day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 == null))))){
return this$.day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2(this$,f);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.add_on_dispose_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,f);
} else {
var m__4244__auto____$1 = (day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.add_on_dispose_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,f);
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.add-on-dispose!",this$);
}
}
}
});


/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.IRunnable = function(){};

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.run = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$run(this$){
if(((!((this$ == null))) && (!((this$.day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$IRunnable$run$arity$1 == null))))){
return this$.day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.run[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.run["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.handle_reaction_change = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$handle_reaction_change(this$,sender,old,new$){
return this$._handle_change(sender,old,new$);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.IDisposable}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Object}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.IReactiveAtom}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.IRunnable}
*/
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.nocache_QMARK_ = nocache_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.caught = caught;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.prototype._peek_at = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_9734 = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom._STAR_ratom_context_STAR_;
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref.call(null,this$);
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_9734;
}});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.prototype._handle_change = (function (sender,oldval,newval){
var self__ = this;
var this$ = this;
if((((oldval === newval)) || (self__.dirty_QMARK_))){
return null;
} else {
if((self__.auto_run == null)){
self__.dirty_QMARK_ = true;

return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.rea_enqueue.call(null,this$);
} else {
if(self__.auto_run === true){
return this$._run(false);
} else {
return self__.auto_run.call(null,this$);
}
}
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.prototype._update_watching = (function (derefed){
var self__ = this;
var this$ = this;
var new$ = cljs.core.set.call(null,derefed);
var old = cljs.core.set.call(null,self__.watching);
self__.watching = derefed;

var seq__9735_9751 = cljs.core.seq.call(null,clojure.set.difference.call(null,new$,old));
var chunk__9736_9752 = null;
var count__9737_9753 = (0);
var i__9738_9754 = (0);
while(true){
if((i__9738_9754 < count__9737_9753)){
var w_9755 = cljs.core._nth.call(null,chunk__9736_9752,i__9738_9754);
cljs.core._add_watch.call(null,w_9755,this$,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.handle_reaction_change);


var G__9756 = seq__9735_9751;
var G__9757 = chunk__9736_9752;
var G__9758 = count__9737_9753;
var G__9759 = (i__9738_9754 + (1));
seq__9735_9751 = G__9756;
chunk__9736_9752 = G__9757;
count__9737_9753 = G__9758;
i__9738_9754 = G__9759;
continue;
} else {
var temp__5457__auto___9760 = cljs.core.seq.call(null,seq__9735_9751);
if(temp__5457__auto___9760){
var seq__9735_9761__$1 = temp__5457__auto___9760;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9735_9761__$1)){
var c__4351__auto___9762 = cljs.core.chunk_first.call(null,seq__9735_9761__$1);
var G__9763 = cljs.core.chunk_rest.call(null,seq__9735_9761__$1);
var G__9764 = c__4351__auto___9762;
var G__9765 = cljs.core.count.call(null,c__4351__auto___9762);
var G__9766 = (0);
seq__9735_9751 = G__9763;
chunk__9736_9752 = G__9764;
count__9737_9753 = G__9765;
i__9738_9754 = G__9766;
continue;
} else {
var w_9767 = cljs.core.first.call(null,seq__9735_9761__$1);
cljs.core._add_watch.call(null,w_9767,this$,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.handle_reaction_change);


var G__9768 = cljs.core.next.call(null,seq__9735_9761__$1);
var G__9769 = null;
var G__9770 = (0);
var G__9771 = (0);
seq__9735_9751 = G__9768;
chunk__9736_9752 = G__9769;
count__9737_9753 = G__9770;
i__9738_9754 = G__9771;
continue;
}
} else {
}
}
break;
}

var seq__9739 = cljs.core.seq.call(null,clojure.set.difference.call(null,old,new$));
var chunk__9740 = null;
var count__9741 = (0);
var i__9742 = (0);
while(true){
if((i__9742 < count__9741)){
var w = cljs.core._nth.call(null,chunk__9740,i__9742);
cljs.core._remove_watch.call(null,w,this$);


var G__9772 = seq__9739;
var G__9773 = chunk__9740;
var G__9774 = count__9741;
var G__9775 = (i__9742 + (1));
seq__9739 = G__9772;
chunk__9740 = G__9773;
count__9741 = G__9774;
i__9742 = G__9775;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__9739);
if(temp__5457__auto__){
var seq__9739__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9739__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__9739__$1);
var G__9776 = cljs.core.chunk_rest.call(null,seq__9739__$1);
var G__9777 = c__4351__auto__;
var G__9778 = cljs.core.count.call(null,c__4351__auto__);
var G__9779 = (0);
seq__9739 = G__9776;
chunk__9740 = G__9777;
count__9741 = G__9778;
i__9742 = G__9779;
continue;
} else {
var w = cljs.core.first.call(null,seq__9739__$1);
cljs.core._remove_watch.call(null,w,this$);


var G__9780 = cljs.core.next.call(null,seq__9739__$1);
var G__9781 = null;
var G__9782 = (0);
var G__9783 = (0);
seq__9739 = G__9780;
chunk__9740 = G__9781;
count__9741 = G__9782;
i__9742 = G__9783;
continue;
}
} else {
return null;
}
}
break;
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.prototype._queued_run = (function (){
var self__ = this;
var this$ = this;
if(((self__.dirty_QMARK_) && (!((self__.watching == null))))){
return this$._run(true);
} else {
return null;
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.prototype._try_capture = (function (f__$1){
var self__ = this;
var this$ = this;
try{self__.caught = null;

return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.deref_capture.call(null,f__$1,this$);
}catch (e9743){var e = e9743;
self__.state = e;

self__.caught = e;

return self__.dirty_QMARK_ = false;
}});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.prototype._run = (function (check){
var self__ = this;
var this$ = this;
var oldstate = self__.state;
var res = (cljs.core.truth_(check)?this$._try_capture(self__.f):day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.deref_capture.call(null,self__.f,this$));
if(self__.nocache_QMARK_){
} else {
self__.state = res;

if((((self__.watches == null)) || (cljs.core._EQ_.call(null,oldstate,res)))){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.notify_w.call(null,this$,oldstate,res);
}
}

return res;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.prototype._set_opts = (function (p__9744){
var self__ = this;
var map__9745 = p__9744;
var map__9745__$1 = ((((!((map__9745 == null)))?(((((map__9745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9745):map__9745);
var auto_run__$1 = cljs.core.get.call(null,map__9745__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.call(null,map__9745__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.call(null,map__9745__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var no_cache = cljs.core.get.call(null,map__9745__$1,new cljs.core.Keyword(null,"no-cache","no-cache",1588056370));
var this$ = this;
if(!((auto_run__$1 == null))){
this$.auto_run = auto_run__$1;
} else {
}

if(!((on_set == null))){
this$.on_set = on_set;
} else {
}

if(!((on_dispose == null))){
this$.on_dispose = on_dispose;
} else {
}

if(!((no_cache == null))){
return this$.nocache_QMARK_ = no_cache;
} else {
return null;
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.pr_atom.call(null,a__$1,w,opts,["Reaction ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,a__$1)),":"].join(''));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$IDisposable$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var s = self__.state;
var wg = self__.watching;
self__.watching = null;

self__.state = null;

self__.auto_run = null;

self__.dirty_QMARK_ = true;

var seq__9747_9784 = cljs.core.seq.call(null,cljs.core.set.call(null,wg));
var chunk__9748_9785 = null;
var count__9749_9786 = (0);
var i__9750_9787 = (0);
while(true){
if((i__9750_9787 < count__9749_9786)){
var w_9788 = cljs.core._nth.call(null,chunk__9748_9785,i__9750_9787);
cljs.core._remove_watch.call(null,w_9788,this$__$1);


var G__9789 = seq__9747_9784;
var G__9790 = chunk__9748_9785;
var G__9791 = count__9749_9786;
var G__9792 = (i__9750_9787 + (1));
seq__9747_9784 = G__9789;
chunk__9748_9785 = G__9790;
count__9749_9786 = G__9791;
i__9750_9787 = G__9792;
continue;
} else {
var temp__5457__auto___9793 = cljs.core.seq.call(null,seq__9747_9784);
if(temp__5457__auto___9793){
var seq__9747_9794__$1 = temp__5457__auto___9793;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9747_9794__$1)){
var c__4351__auto___9795 = cljs.core.chunk_first.call(null,seq__9747_9794__$1);
var G__9796 = cljs.core.chunk_rest.call(null,seq__9747_9794__$1);
var G__9797 = c__4351__auto___9795;
var G__9798 = cljs.core.count.call(null,c__4351__auto___9795);
var G__9799 = (0);
seq__9747_9784 = G__9796;
chunk__9748_9785 = G__9797;
count__9749_9786 = G__9798;
i__9750_9787 = G__9799;
continue;
} else {
var w_9800 = cljs.core.first.call(null,seq__9747_9794__$1);
cljs.core._remove_watch.call(null,w_9800,this$__$1);


var G__9801 = cljs.core.next.call(null,seq__9747_9794__$1);
var G__9802 = null;
var G__9803 = (0);
var G__9804 = (0);
seq__9747_9784 = G__9801;
chunk__9748_9785 = G__9802;
count__9749_9786 = G__9803;
i__9750_9787 = G__9804;
continue;
}
} else {
}
}
break;
}

if(!((this$__$1.on_dispose == null))){
this$__$1.on_dispose(s);
} else {
}

var temp__5461__auto__ = this$__$1.on_dispose_arr;
if((temp__5461__auto__ == null)){
return null;
} else {
var a = temp__5461__auto__;
var n__4408__auto__ = a.length;
var i = (0);
while(true){
if((i < n__4408__auto__)){
(a[i]).call(null,this$__$1);

var G__9805 = (i + (1));
i = G__9805;
continue;
} else {
return null;
}
break;
}
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 = (function (this$,f__$1){
var self__ = this;
var this$__$1 = this;
var temp__5459__auto__ = this$__$1.on_dispose_arr;
if((temp__5459__auto__ == null)){
return this$__$1.on_dispose_arr = [f__$1];
} else {
var a = temp__5459__auto__;
return a.push(f__$1);
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
if(cljs.core.fn_QMARK_.call(null,a__$1.on_set)){
} else {
throw (new Error(["Assert failed: ","Reaction is read only; on-set is not allowed","\n","(fn? (.-on-set a))"].join('')));
}

var oldval = self__.state;
self__.state = newval;

a__$1.on_set(oldval,newval);

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.notify_w.call(null,a__$1,oldval,newval);

return newval;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at()));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at(),x));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at(),x,y));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,a__$1._peek_at(),x,y,more));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$IRunnable$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.flush_BANG_.call(null);

return this$__$1._run(false);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.notify_w.call(null,this$__$1,old,new$);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f__$1){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.add_w.call(null,this$__$1,key,f__$1);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var was_empty = cljs.core.empty_QMARK_.call(null,self__.watches);
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.remove_w.call(null,this$__$1,key);

if(((!(was_empty)) && (cljs.core.empty_QMARK_.call(null,self__.watches)) && ((self__.auto_run == null)))){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5461__auto___9806 = self__.caught;
if((temp__5461__auto___9806 == null)){
} else {
var e_9807 = temp__5461__auto___9806;
throw e_9807;
}

var non_reactive_9808 = (day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom._STAR_ratom_context_STAR_ == null);
if(non_reactive_9808){
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.flush_BANG_.call(null);
} else {
}

if(((non_reactive_9808) && ((self__.auto_run == null)))){
if(self__.dirty_QMARK_){
var oldstate_9809 = self__.state;
self__.state = self__.f.call(null);

if((((self__.watches == null)) || (cljs.core._EQ_.call(null,oldstate_9809,self__.state)))){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.notify_w.call(null,this$__$1,oldstate_9809,self__.state);
}
} else {
}
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(self__.dirty_QMARK_){
this$__$1._run(false);
} else {
}
}

return self__.state;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty?","dirty?",-419314319,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"nocache?","nocache?",-1065670978,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watching","watching",1947648227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"caught","caught",2084008322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v0v8v1.reagent.ratom/Reaction";

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"day8.re-frame-10x.inlined-deps.reagent.v0v8v1.reagent.ratom/Reaction");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v0v8v1.reagent.ratom/Reaction.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.__GT_Reaction = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.make_reaction = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$make_reaction(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9815 = arguments.length;
var i__4532__auto___9816 = (0);
while(true){
if((i__4532__auto___9816 < len__4531__auto___9815)){
args__4534__auto__.push((arguments[i__4532__auto___9816]));

var G__9817 = (i__4532__auto___9816 + (1));
i__4532__auto___9816 = G__9817;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__9812){
var map__9813 = p__9812;
var map__9813__$1 = ((((!((map__9813 == null)))?(((((map__9813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9813):map__9813);
var auto_run = cljs.core.get.call(null,map__9813__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.call(null,map__9813__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.call(null,map__9813__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var reaction = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.__GT_Reaction.call(null,f,null,true,false,null,null,null,null);
reaction._set_opts(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),auto_run,new cljs.core.Keyword(null,"on-set","on-set",-140953470),on_set,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),on_dispose], null));

return reaction;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq9810){
var G__9811 = cljs.core.first.call(null,seq9810);
var seq9810__$1 = cljs.core.next.call(null,seq9810);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9811,seq9810__$1);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.temp_reaction = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.make_reaction.call(null,null);
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.run_in_reaction = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$run_in_reaction(f,obj,key,run,opts){
var r = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.temp_reaction;
var res = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.deref_capture.call(null,f,r);
if((r.watching == null)){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.temp_reaction = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.make_reaction.call(null,null);

r._set_opts(opts);

r.f = f;

r.auto_run = ((function (r,res){
return (function (){
return run.call(null,obj);
});})(r,res))
;

(obj[key] = r);
}

return res;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.check_derefs = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$check_derefs(f){
var ctx = {};
var res = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.in_context.call(null,ctx,f);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,!((ctx.captured == null))], null);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(((self__.changed) && (!((day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom._STAR_ratom_context_STAR_ == null))))){
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.has_console)){
(cljs.core.truth_(day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug.track_console:console).warn(["Warning: ","derefing stale wrap: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,this$__$1))].join(''));
} else {
}
} else {
}


return self__.state;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if(!((self__.watches == null))){
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.notify_w.call(null,this$__$1,oldval,newval);
} else {
}

self__.callback.call(null,newval);

return newval;
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Wrapper)) && (!(self__.changed)) && (cljs.core.not.call(null,other.changed)) && (cljs.core._EQ_.call(null,self__.state,other.state)) && (cljs.core._EQ_.call(null,self__.callback,other.callback)));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.notify_w.call(null,this$__$1,old,new$);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.add_w.call(null,this$__$1,key,f);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.remove_w.call(null,this$__$1,key);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Wrap:");
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Wrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null),cljs.core.with_meta(new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Wrapper.cljs$lang$type = true;

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Wrapper.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v0v8v1.reagent.ratom/Wrapper";

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"day8.re-frame-10x.inlined-deps.reagent.v0v8v1.reagent.ratom/Wrapper");
});

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v0v8v1.reagent.ratom/Wrapper.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.__GT_Wrapper = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.Wrapper(state,callback,changed,watches));
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.make_wrapper = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$ratom$make_wrapper(value,callback_fn,args){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.__GT_Wrapper.call(null,value,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util.make_partial_fn.call(null,callback_fn,args),false,null);
});

//# sourceMappingURL=ratom.js.map
