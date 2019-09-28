// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17837 = arguments.length;
switch (G__17837) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17838 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17838 = (function (f,blockable,meta17839){
this.f = f;
this.blockable = blockable;
this.meta17839 = meta17839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17840,meta17839__$1){
var self__ = this;
var _17840__$1 = this;
return (new cljs.core.async.t_cljs$core$async17838(self__.f,self__.blockable,meta17839__$1));
});

cljs.core.async.t_cljs$core$async17838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17840){
var self__ = this;
var _17840__$1 = this;
return self__.meta17839;
});

cljs.core.async.t_cljs$core$async17838.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17838.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17838.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17838.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17838.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta17839], null);
});

cljs.core.async.t_cljs$core$async17838.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17838";

cljs.core.async.t_cljs$core$async17838.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17838");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17838.
 */
cljs.core.async.__GT_t_cljs$core$async17838 = (function cljs$core$async$__GT_t_cljs$core$async17838(f__$1,blockable__$1,meta17839){
return (new cljs.core.async.t_cljs$core$async17838(f__$1,blockable__$1,meta17839));
});

}

return (new cljs.core.async.t_cljs$core$async17838(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__17844 = arguments.length;
switch (G__17844) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17847 = arguments.length;
switch (G__17847) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__17850 = arguments.length;
switch (G__17850) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17852 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17852) : fn1.call(null,val_17852));
} else {
cljs.core.async.impl.dispatch.run(((function (val_17852,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17852) : fn1.call(null,val_17852));
});})(val_17852,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__17854 = arguments.length;
switch (G__17854) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___17856 = n;
var x_17857 = (0);
while(true){
if((x_17857 < n__4408__auto___17856)){
(a[x_17857] = x_17857);

var G__17858 = (x_17857 + (1));
x_17857 = G__17858;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17859 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17859 = (function (flag,meta17860){
this.flag = flag;
this.meta17860 = meta17860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17861,meta17860__$1){
var self__ = this;
var _17861__$1 = this;
return (new cljs.core.async.t_cljs$core$async17859(self__.flag,meta17860__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17859.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17861){
var self__ = this;
var _17861__$1 = this;
return self__.meta17860;
});})(flag))
;

cljs.core.async.t_cljs$core$async17859.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17859.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17859.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17859.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17859.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta17860], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17859.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17859.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17859";

cljs.core.async.t_cljs$core$async17859.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17859");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17859.
 */
cljs.core.async.__GT_t_cljs$core$async17859 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17859(flag__$1,meta17860){
return (new cljs.core.async.t_cljs$core$async17859(flag__$1,meta17860));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17859(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17862 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17862 = (function (flag,cb,meta17863){
this.flag = flag;
this.cb = cb;
this.meta17863 = meta17863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17864,meta17863__$1){
var self__ = this;
var _17864__$1 = this;
return (new cljs.core.async.t_cljs$core$async17862(self__.flag,self__.cb,meta17863__$1));
});

cljs.core.async.t_cljs$core$async17862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17864){
var self__ = this;
var _17864__$1 = this;
return self__.meta17863;
});

cljs.core.async.t_cljs$core$async17862.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17862.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async17862.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17862.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17862.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta17863], null);
});

cljs.core.async.t_cljs$core$async17862.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17862";

cljs.core.async.t_cljs$core$async17862.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17862");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17862.
 */
cljs.core.async.__GT_t_cljs$core$async17862 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17862(flag__$1,cb__$1,meta17863){
return (new cljs.core.async.t_cljs$core$async17862(flag__$1,cb__$1,meta17863));
});

}

return (new cljs.core.async.t_cljs$core$async17862(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17865_SHARP_){
var G__17867 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17865_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17867) : fret.call(null,G__17867));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17866_SHARP_){
var G__17868 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17866_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17868) : fret.call(null,G__17868));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17869 = (i + (1));
i = G__17869;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17875 = arguments.length;
var i__4532__auto___17876 = (0);
while(true){
if((i__4532__auto___17876 < len__4531__auto___17875)){
args__4534__auto__.push((arguments[i__4532__auto___17876]));

var G__17877 = (i__4532__auto___17876 + (1));
i__4532__auto___17876 = G__17877;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17872){
var map__17873 = p__17872;
var map__17873__$1 = ((((!((map__17873 == null)))?(((((map__17873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17873):map__17873);
var opts = map__17873__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17870){
var G__17871 = cljs.core.first(seq17870);
var seq17870__$1 = cljs.core.next(seq17870);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17871,seq17870__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__17879 = arguments.length;
switch (G__17879) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15910__auto___17925 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15910__auto___17925){
return (function (){
var f__15911__auto__ = (function (){var switch__15727__auto__ = ((function (c__15910__auto___17925){
return (function (state_17903){
var state_val_17904 = (state_17903[(1)]);
if((state_val_17904 === (7))){
var inst_17899 = (state_17903[(2)]);
var state_17903__$1 = state_17903;
var statearr_17905_17926 = state_17903__$1;
(statearr_17905_17926[(2)] = inst_17899);

(statearr_17905_17926[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17904 === (1))){
var state_17903__$1 = state_17903;
var statearr_17906_17927 = state_17903__$1;
(statearr_17906_17927[(2)] = null);

(statearr_17906_17927[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17904 === (4))){
var inst_17882 = (state_17903[(7)]);
var inst_17882__$1 = (state_17903[(2)]);
var inst_17883 = (inst_17882__$1 == null);
var state_17903__$1 = (function (){var statearr_17907 = state_17903;
(statearr_17907[(7)] = inst_17882__$1);

return statearr_17907;
})();
if(cljs.core.truth_(inst_17883)){
var statearr_17908_17928 = state_17903__$1;
(statearr_17908_17928[(1)] = (5));

} else {
var statearr_17909_17929 = state_17903__$1;
(statearr_17909_17929[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17904 === (13))){
var state_17903__$1 = state_17903;
var statearr_17910_17930 = state_17903__$1;
(statearr_17910_17930[(2)] = null);

(statearr_17910_17930[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17904 === (6))){
var inst_17882 = (state_17903[(7)]);
var state_17903__$1 = state_17903;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17903__$1,(11),to,inst_17882);
} else {
if((state_val_17904 === (3))){
var inst_17901 = (state_17903[(2)]);
var state_17903__$1 = state_17903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17903__$1,inst_17901);
} else {
if((state_val_17904 === (12))){
var state_17903__$1 = state_17903;
var statearr_17911_17931 = state_17903__$1;
(statearr_17911_17931[(2)] = null);

(statearr_17911_17931[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17904 === (2))){
var state_17903__$1 = state_17903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17903__$1,(4),from);
} else {
if((state_val_17904 === (11))){
var inst_17892 = (state_17903[(2)]);
var state_17903__$1 = state_17903;
if(cljs.core.truth_(inst_17892)){
var statearr_17912_17932 = state_17903__$1;
(statearr_17912_17932[(1)] = (12));

} else {
var statearr_17913_17933 = state_17903__$1;
(statearr_17913_17933[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17904 === (9))){
var state_17903__$1 = state_17903;
var statearr_17914_17934 = state_17903__$1;
(statearr_17914_17934[(2)] = null);

(statearr_17914_17934[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17904 === (5))){
var state_17903__$1 = state_17903;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17915_17935 = state_17903__$1;
(statearr_17915_17935[(1)] = (8));

} else {
var statearr_17916_17936 = state_17903__$1;
(statearr_17916_17936[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17904 === (14))){
var inst_17897 = (state_17903[(2)]);
var state_17903__$1 = state_17903;
var statearr_17917_17937 = state_17903__$1;
(statearr_17917_17937[(2)] = inst_17897);

(statearr_17917_17937[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17904 === (10))){
var inst_17889 = (state_17903[(2)]);
var state_17903__$1 = state_17903;
var statearr_17918_17938 = state_17903__$1;
(statearr_17918_17938[(2)] = inst_17889);

(statearr_17918_17938[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17904 === (8))){
var inst_17886 = cljs.core.async.close_BANG_(to);
var state_17903__$1 = state_17903;
var statearr_17919_17939 = state_17903__$1;
(statearr_17919_17939[(2)] = inst_17886);

(statearr_17919_17939[(1)] = (10));


return cljs.core.cst$kw$recur;
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
}
}
}
}
}
});})(c__15910__auto___17925))
;
return ((function (switch__15727__auto__,c__15910__auto___17925){
return (function() {
var cljs$core$async$state_machine__15728__auto__ = null;
var cljs$core$async$state_machine__15728__auto____0 = (function (){
var statearr_17920 = [null,null,null,null,null,null,null,null];
(statearr_17920[(0)] = cljs$core$async$state_machine__15728__auto__);

(statearr_17920[(1)] = (1));

return statearr_17920;
});
var cljs$core$async$state_machine__15728__auto____1 = (function (state_17903){
while(true){
var ret_value__15729__auto__ = (function (){try{while(true){
var result__15730__auto__ = switch__15727__auto__(state_17903);
if(cljs.core.keyword_identical_QMARK_(result__15730__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15730__auto__;
}
break;
}
}catch (e17921){if((e17921 instanceof Object)){
var ex__15731__auto__ = e17921;
var statearr_17922_17940 = state_17903;
(statearr_17922_17940[(5)] = ex__15731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17903);

return cljs.core.cst$kw$recur;
} else {
throw e17921;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15729__auto__,cljs.core.cst$kw$recur)){
var G__17941 = state_17903;
state_17903 = G__17941;
continue;
} else {
return ret_value__15729__auto__;
}
break;
}
});
cljs$core$async$state_machine__15728__auto__ = function(state_17903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15728__auto____1.call(this,state_17903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15728__auto____0;
cljs$core$async$state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15728__auto____1;
return cljs$core$async$state_machine__15728__auto__;
})()
;})(switch__15727__auto__,c__15910__auto___17925))
})();
var state__15912__auto__ = (function (){var statearr_17923 = (f__15911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15911__auto__.cljs$core$IFn$_invoke$arity$0() : f__15911__auto__.call(null));
(statearr_17923[(6)] = c__15910__auto___17925);

return statearr_17923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15912__auto__);
});})(c__15910__auto___17925))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__17942){
var vec__17943 = p__17942;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17943,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17943,(1),null);
var job = vec__17943;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15910__auto___18114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15910__auto___18114,res,vec__17943,v,p,job,jobs,results){
return (function (){
var f__15911__auto__ = (function (){var switch__15727__auto__ = ((function (c__15910__auto___18114,res,vec__17943,v,p,job,jobs,results){
return (function (state_17950){
var state_val_17951 = (state_17950[(1)]);
if((state_val_17951 === (1))){
var state_17950__$1 = state_17950;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17950__$1,(2),res,v);
} else {
if((state_val_17951 === (2))){
var inst_17947 = (state_17950[(2)]);
var inst_17948 = cljs.core.async.close_BANG_(res);
var state_17950__$1 = (function (){var statearr_17952 = state_17950;
(statearr_17952[(7)] = inst_17947);

return statearr_17952;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17950__$1,inst_17948);
} else {
return null;
}
}
});})(c__15910__auto___18114,res,vec__17943,v,p,job,jobs,results))
;
return ((function (switch__15727__auto__,c__15910__auto___18114,res,vec__17943,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____0 = (function (){
var statearr_17953 = [null,null,null,null,null,null,null,null];
(statearr_17953[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__);

(statearr_17953[(1)] = (1));

return statearr_17953;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____1 = (function (state_17950){
while(true){
var ret_value__15729__auto__ = (function (){try{while(true){
var result__15730__auto__ = switch__15727__auto__(state_17950);
if(cljs.core.keyword_identical_QMARK_(result__15730__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15730__auto__;
}
break;
}
}catch (e17954){if((e17954 instanceof Object)){
var ex__15731__auto__ = e17954;
var statearr_17955_18115 = state_17950;
(statearr_17955_18115[(5)] = ex__15731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17950);

return cljs.core.cst$kw$recur;
} else {
throw e17954;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15729__auto__,cljs.core.cst$kw$recur)){
var G__18116 = state_17950;
state_17950 = G__18116;
continue;
} else {
return ret_value__15729__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__ = function(state_17950){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____1.call(this,state_17950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__;
})()
;})(switch__15727__auto__,c__15910__auto___18114,res,vec__17943,v,p,job,jobs,results))
})();
var state__15912__auto__ = (function (){var statearr_17956 = (f__15911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15911__auto__.cljs$core$IFn$_invoke$arity$0() : f__15911__auto__.call(null));
(statearr_17956[(6)] = c__15910__auto___18114);

return statearr_17956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15912__auto__);
});})(c__15910__auto___18114,res,vec__17943,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17957){
var vec__17958 = p__17957;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17958,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17958,(1),null);
var job = vec__17958;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___18117 = n;
var __18118 = (0);
while(true){
if((__18118 < n__4408__auto___18117)){
var G__17961_18119 = type;
var G__17961_18120__$1 = (((G__17961_18119 instanceof cljs.core.Keyword))?G__17961_18119.fqn:null);
switch (G__17961_18120__$1) {
case "compute":
var c__15910__auto___18122 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18118,c__15910__auto___18122,G__17961_18119,G__17961_18120__$1,n__4408__auto___18117,jobs,results,process,async){
return (function (){
var f__15911__auto__ = (function (){var switch__15727__auto__ = ((function (__18118,c__15910__auto___18122,G__17961_18119,G__17961_18120__$1,n__4408__auto___18117,jobs,results,process,async){
return (function (state_17974){
var state_val_17975 = (state_17974[(1)]);
if((state_val_17975 === (1))){
var state_17974__$1 = state_17974;
var statearr_17976_18123 = state_17974__$1;
(statearr_17976_18123[(2)] = null);

(statearr_17976_18123[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17975 === (2))){
var state_17974__$1 = state_17974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17974__$1,(4),jobs);
} else {
if((state_val_17975 === (3))){
var inst_17972 = (state_17974[(2)]);
var state_17974__$1 = state_17974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17974__$1,inst_17972);
} else {
if((state_val_17975 === (4))){
var inst_17964 = (state_17974[(2)]);
var inst_17965 = process(inst_17964);
var state_17974__$1 = state_17974;
if(cljs.core.truth_(inst_17965)){
var statearr_17977_18124 = state_17974__$1;
(statearr_17977_18124[(1)] = (5));

} else {
var statearr_17978_18125 = state_17974__$1;
(statearr_17978_18125[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17975 === (5))){
var state_17974__$1 = state_17974;
var statearr_17979_18126 = state_17974__$1;
(statearr_17979_18126[(2)] = null);

(statearr_17979_18126[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17975 === (6))){
var state_17974__$1 = state_17974;
var statearr_17980_18127 = state_17974__$1;
(statearr_17980_18127[(2)] = null);

(statearr_17980_18127[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17975 === (7))){
var inst_17970 = (state_17974[(2)]);
var state_17974__$1 = state_17974;
var statearr_17981_18128 = state_17974__$1;
(statearr_17981_18128[(2)] = inst_17970);

(statearr_17981_18128[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__18118,c__15910__auto___18122,G__17961_18119,G__17961_18120__$1,n__4408__auto___18117,jobs,results,process,async))
;
return ((function (__18118,switch__15727__auto__,c__15910__auto___18122,G__17961_18119,G__17961_18120__$1,n__4408__auto___18117,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____0 = (function (){
var statearr_17982 = [null,null,null,null,null,null,null];
(statearr_17982[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__);

(statearr_17982[(1)] = (1));

return statearr_17982;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____1 = (function (state_17974){
while(true){
var ret_value__15729__auto__ = (function (){try{while(true){
var result__15730__auto__ = switch__15727__auto__(state_17974);
if(cljs.core.keyword_identical_QMARK_(result__15730__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15730__auto__;
}
break;
}
}catch (e17983){if((e17983 instanceof Object)){
var ex__15731__auto__ = e17983;
var statearr_17984_18129 = state_17974;
(statearr_17984_18129[(5)] = ex__15731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17974);

return cljs.core.cst$kw$recur;
} else {
throw e17983;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15729__auto__,cljs.core.cst$kw$recur)){
var G__18130 = state_17974;
state_17974 = G__18130;
continue;
} else {
return ret_value__15729__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__ = function(state_17974){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____1.call(this,state_17974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__;
})()
;})(__18118,switch__15727__auto__,c__15910__auto___18122,G__17961_18119,G__17961_18120__$1,n__4408__auto___18117,jobs,results,process,async))
})();
var state__15912__auto__ = (function (){var statearr_17985 = (f__15911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15911__auto__.cljs$core$IFn$_invoke$arity$0() : f__15911__auto__.call(null));
(statearr_17985[(6)] = c__15910__auto___18122);

return statearr_17985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15912__auto__);
});})(__18118,c__15910__auto___18122,G__17961_18119,G__17961_18120__$1,n__4408__auto___18117,jobs,results,process,async))
);


break;
case "async":
var c__15910__auto___18131 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18118,c__15910__auto___18131,G__17961_18119,G__17961_18120__$1,n__4408__auto___18117,jobs,results,process,async){
return (function (){
var f__15911__auto__ = (function (){var switch__15727__auto__ = ((function (__18118,c__15910__auto___18131,G__17961_18119,G__17961_18120__$1,n__4408__auto___18117,jobs,results,process,async){
return (function (state_17998){
var state_val_17999 = (state_17998[(1)]);
if((state_val_17999 === (1))){
var state_17998__$1 = state_17998;
var statearr_18000_18132 = state_17998__$1;
(statearr_18000_18132[(2)] = null);

(statearr_18000_18132[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17999 === (2))){
var state_17998__$1 = state_17998;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17998__$1,(4),jobs);
} else {
if((state_val_17999 === (3))){
var inst_17996 = (state_17998[(2)]);
var state_17998__$1 = state_17998;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17998__$1,inst_17996);
} else {
if((state_val_17999 === (4))){
var inst_17988 = (state_17998[(2)]);
var inst_17989 = async(inst_17988);
var state_17998__$1 = state_17998;
if(cljs.core.truth_(inst_17989)){
var statearr_18001_18133 = state_17998__$1;
(statearr_18001_18133[(1)] = (5));

} else {
var statearr_18002_18134 = state_17998__$1;
(statearr_18002_18134[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17999 === (5))){
var state_17998__$1 = state_17998;
var statearr_18003_18135 = state_17998__$1;
(statearr_18003_18135[(2)] = null);

(statearr_18003_18135[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17999 === (6))){
var state_17998__$1 = state_17998;
var statearr_18004_18136 = state_17998__$1;
(statearr_18004_18136[(2)] = null);

(statearr_18004_18136[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17999 === (7))){
var inst_17994 = (state_17998[(2)]);
var state_17998__$1 = state_17998;
var statearr_18005_18137 = state_17998__$1;
(statearr_18005_18137[(2)] = inst_17994);

(statearr_18005_18137[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__18118,c__15910__auto___18131,G__17961_18119,G__17961_18120__$1,n__4408__auto___18117,jobs,results,process,async))
;
return ((function (__18118,switch__15727__auto__,c__15910__auto___18131,G__17961_18119,G__17961_18120__$1,n__4408__auto___18117,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____0 = (function (){
var statearr_18006 = [null,null,null,null,null,null,null];
(statearr_18006[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__);

(statearr_18006[(1)] = (1));

return statearr_18006;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____1 = (function (state_17998){
while(true){
var ret_value__15729__auto__ = (function (){try{while(true){
var result__15730__auto__ = switch__15727__auto__(state_17998);
if(cljs.core.keyword_identical_QMARK_(result__15730__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15730__auto__;
}
break;
}
}catch (e18007){if((e18007 instanceof Object)){
var ex__15731__auto__ = e18007;
var statearr_18008_18138 = state_17998;
(statearr_18008_18138[(5)] = ex__15731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17998);

return cljs.core.cst$kw$recur;
} else {
throw e18007;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15729__auto__,cljs.core.cst$kw$recur)){
var G__18139 = state_17998;
state_17998 = G__18139;
continue;
} else {
return ret_value__15729__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__ = function(state_17998){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____1.call(this,state_17998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__;
})()
;})(__18118,switch__15727__auto__,c__15910__auto___18131,G__17961_18119,G__17961_18120__$1,n__4408__auto___18117,jobs,results,process,async))
})();
var state__15912__auto__ = (function (){var statearr_18009 = (f__15911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15911__auto__.cljs$core$IFn$_invoke$arity$0() : f__15911__auto__.call(null));
(statearr_18009[(6)] = c__15910__auto___18131);

return statearr_18009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15912__auto__);
});})(__18118,c__15910__auto___18131,G__17961_18119,G__17961_18120__$1,n__4408__auto___18117,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17961_18120__$1)].join('')));

}

var G__18140 = (__18118 + (1));
__18118 = G__18140;
continue;
} else {
}
break;
}

var c__15910__auto___18141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15910__auto___18141,jobs,results,process,async){
return (function (){
var f__15911__auto__ = (function (){var switch__15727__auto__ = ((function (c__15910__auto___18141,jobs,results,process,async){
return (function (state_18031){
var state_val_18032 = (state_18031[(1)]);
if((state_val_18032 === (1))){
var state_18031__$1 = state_18031;
var statearr_18033_18142 = state_18031__$1;
(statearr_18033_18142[(2)] = null);

(statearr_18033_18142[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18032 === (2))){
var state_18031__$1 = state_18031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18031__$1,(4),from);
} else {
if((state_val_18032 === (3))){
var inst_18029 = (state_18031[(2)]);
var state_18031__$1 = state_18031;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18031__$1,inst_18029);
} else {
if((state_val_18032 === (4))){
var inst_18012 = (state_18031[(7)]);
var inst_18012__$1 = (state_18031[(2)]);
var inst_18013 = (inst_18012__$1 == null);
var state_18031__$1 = (function (){var statearr_18034 = state_18031;
(statearr_18034[(7)] = inst_18012__$1);

return statearr_18034;
})();
if(cljs.core.truth_(inst_18013)){
var statearr_18035_18143 = state_18031__$1;
(statearr_18035_18143[(1)] = (5));

} else {
var statearr_18036_18144 = state_18031__$1;
(statearr_18036_18144[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18032 === (5))){
var inst_18015 = cljs.core.async.close_BANG_(jobs);
var state_18031__$1 = state_18031;
var statearr_18037_18145 = state_18031__$1;
(statearr_18037_18145[(2)] = inst_18015);

(statearr_18037_18145[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18032 === (6))){
var inst_18017 = (state_18031[(8)]);
var inst_18012 = (state_18031[(7)]);
var inst_18017__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18018 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18019 = [inst_18012,inst_18017__$1];
var inst_18020 = (new cljs.core.PersistentVector(null,2,(5),inst_18018,inst_18019,null));
var state_18031__$1 = (function (){var statearr_18038 = state_18031;
(statearr_18038[(8)] = inst_18017__$1);

return statearr_18038;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18031__$1,(8),jobs,inst_18020);
} else {
if((state_val_18032 === (7))){
var inst_18027 = (state_18031[(2)]);
var state_18031__$1 = state_18031;
var statearr_18039_18146 = state_18031__$1;
(statearr_18039_18146[(2)] = inst_18027);

(statearr_18039_18146[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18032 === (8))){
var inst_18017 = (state_18031[(8)]);
var inst_18022 = (state_18031[(2)]);
var state_18031__$1 = (function (){var statearr_18040 = state_18031;
(statearr_18040[(9)] = inst_18022);

return statearr_18040;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18031__$1,(9),results,inst_18017);
} else {
if((state_val_18032 === (9))){
var inst_18024 = (state_18031[(2)]);
var state_18031__$1 = (function (){var statearr_18041 = state_18031;
(statearr_18041[(10)] = inst_18024);

return statearr_18041;
})();
var statearr_18042_18147 = state_18031__$1;
(statearr_18042_18147[(2)] = null);

(statearr_18042_18147[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15910__auto___18141,jobs,results,process,async))
;
return ((function (switch__15727__auto__,c__15910__auto___18141,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____0 = (function (){
var statearr_18043 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18043[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__);

(statearr_18043[(1)] = (1));

return statearr_18043;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____1 = (function (state_18031){
while(true){
var ret_value__15729__auto__ = (function (){try{while(true){
var result__15730__auto__ = switch__15727__auto__(state_18031);
if(cljs.core.keyword_identical_QMARK_(result__15730__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15730__auto__;
}
break;
}
}catch (e18044){if((e18044 instanceof Object)){
var ex__15731__auto__ = e18044;
var statearr_18045_18148 = state_18031;
(statearr_18045_18148[(5)] = ex__15731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18031);

return cljs.core.cst$kw$recur;
} else {
throw e18044;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15729__auto__,cljs.core.cst$kw$recur)){
var G__18149 = state_18031;
state_18031 = G__18149;
continue;
} else {
return ret_value__15729__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__ = function(state_18031){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____1.call(this,state_18031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__;
})()
;})(switch__15727__auto__,c__15910__auto___18141,jobs,results,process,async))
})();
var state__15912__auto__ = (function (){var statearr_18046 = (f__15911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15911__auto__.cljs$core$IFn$_invoke$arity$0() : f__15911__auto__.call(null));
(statearr_18046[(6)] = c__15910__auto___18141);

return statearr_18046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15912__auto__);
});})(c__15910__auto___18141,jobs,results,process,async))
);


var c__15910__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15910__auto__,jobs,results,process,async){
return (function (){
var f__15911__auto__ = (function (){var switch__15727__auto__ = ((function (c__15910__auto__,jobs,results,process,async){
return (function (state_18084){
var state_val_18085 = (state_18084[(1)]);
if((state_val_18085 === (7))){
var inst_18080 = (state_18084[(2)]);
var state_18084__$1 = state_18084;
var statearr_18086_18150 = state_18084__$1;
(statearr_18086_18150[(2)] = inst_18080);

(statearr_18086_18150[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18085 === (20))){
var state_18084__$1 = state_18084;
var statearr_18087_18151 = state_18084__$1;
(statearr_18087_18151[(2)] = null);

(statearr_18087_18151[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18085 === (1))){
var state_18084__$1 = state_18084;
var statearr_18088_18152 = state_18084__$1;
(statearr_18088_18152[(2)] = null);

(statearr_18088_18152[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18085 === (4))){
var inst_18049 = (state_18084[(7)]);
var inst_18049__$1 = (state_18084[(2)]);
var inst_18050 = (inst_18049__$1 == null);
var state_18084__$1 = (function (){var statearr_18089 = state_18084;
(statearr_18089[(7)] = inst_18049__$1);

return statearr_18089;
})();
if(cljs.core.truth_(inst_18050)){
var statearr_18090_18153 = state_18084__$1;
(statearr_18090_18153[(1)] = (5));

} else {
var statearr_18091_18154 = state_18084__$1;
(statearr_18091_18154[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18085 === (15))){
var inst_18062 = (state_18084[(8)]);
var state_18084__$1 = state_18084;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18084__$1,(18),to,inst_18062);
} else {
if((state_val_18085 === (21))){
var inst_18075 = (state_18084[(2)]);
var state_18084__$1 = state_18084;
var statearr_18092_18155 = state_18084__$1;
(statearr_18092_18155[(2)] = inst_18075);

(statearr_18092_18155[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18085 === (13))){
var inst_18077 = (state_18084[(2)]);
var state_18084__$1 = (function (){var statearr_18093 = state_18084;
(statearr_18093[(9)] = inst_18077);

return statearr_18093;
})();
var statearr_18094_18156 = state_18084__$1;
(statearr_18094_18156[(2)] = null);

(statearr_18094_18156[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18085 === (6))){
var inst_18049 = (state_18084[(7)]);
var state_18084__$1 = state_18084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18084__$1,(11),inst_18049);
} else {
if((state_val_18085 === (17))){
var inst_18070 = (state_18084[(2)]);
var state_18084__$1 = state_18084;
if(cljs.core.truth_(inst_18070)){
var statearr_18095_18157 = state_18084__$1;
(statearr_18095_18157[(1)] = (19));

} else {
var statearr_18096_18158 = state_18084__$1;
(statearr_18096_18158[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18085 === (3))){
var inst_18082 = (state_18084[(2)]);
var state_18084__$1 = state_18084;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18084__$1,inst_18082);
} else {
if((state_val_18085 === (12))){
var inst_18059 = (state_18084[(10)]);
var state_18084__$1 = state_18084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18084__$1,(14),inst_18059);
} else {
if((state_val_18085 === (2))){
var state_18084__$1 = state_18084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18084__$1,(4),results);
} else {
if((state_val_18085 === (19))){
var state_18084__$1 = state_18084;
var statearr_18097_18159 = state_18084__$1;
(statearr_18097_18159[(2)] = null);

(statearr_18097_18159[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18085 === (11))){
var inst_18059 = (state_18084[(2)]);
var state_18084__$1 = (function (){var statearr_18098 = state_18084;
(statearr_18098[(10)] = inst_18059);

return statearr_18098;
})();
var statearr_18099_18160 = state_18084__$1;
(statearr_18099_18160[(2)] = null);

(statearr_18099_18160[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18085 === (9))){
var state_18084__$1 = state_18084;
var statearr_18100_18161 = state_18084__$1;
(statearr_18100_18161[(2)] = null);

(statearr_18100_18161[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18085 === (5))){
var state_18084__$1 = state_18084;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18101_18162 = state_18084__$1;
(statearr_18101_18162[(1)] = (8));

} else {
var statearr_18102_18163 = state_18084__$1;
(statearr_18102_18163[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18085 === (14))){
var inst_18062 = (state_18084[(8)]);
var inst_18064 = (state_18084[(11)]);
var inst_18062__$1 = (state_18084[(2)]);
var inst_18063 = (inst_18062__$1 == null);
var inst_18064__$1 = cljs.core.not(inst_18063);
var state_18084__$1 = (function (){var statearr_18103 = state_18084;
(statearr_18103[(8)] = inst_18062__$1);

(statearr_18103[(11)] = inst_18064__$1);

return statearr_18103;
})();
if(inst_18064__$1){
var statearr_18104_18164 = state_18084__$1;
(statearr_18104_18164[(1)] = (15));

} else {
var statearr_18105_18165 = state_18084__$1;
(statearr_18105_18165[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18085 === (16))){
var inst_18064 = (state_18084[(11)]);
var state_18084__$1 = state_18084;
var statearr_18106_18166 = state_18084__$1;
(statearr_18106_18166[(2)] = inst_18064);

(statearr_18106_18166[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18085 === (10))){
var inst_18056 = (state_18084[(2)]);
var state_18084__$1 = state_18084;
var statearr_18107_18167 = state_18084__$1;
(statearr_18107_18167[(2)] = inst_18056);

(statearr_18107_18167[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18085 === (18))){
var inst_18067 = (state_18084[(2)]);
var state_18084__$1 = state_18084;
var statearr_18108_18168 = state_18084__$1;
(statearr_18108_18168[(2)] = inst_18067);

(statearr_18108_18168[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18085 === (8))){
var inst_18053 = cljs.core.async.close_BANG_(to);
var state_18084__$1 = state_18084;
var statearr_18109_18169 = state_18084__$1;
(statearr_18109_18169[(2)] = inst_18053);

(statearr_18109_18169[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__15910__auto__,jobs,results,process,async))
;
return ((function (switch__15727__auto__,c__15910__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____0 = (function (){
var statearr_18110 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18110[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__);

(statearr_18110[(1)] = (1));

return statearr_18110;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____1 = (function (state_18084){
while(true){
var ret_value__15729__auto__ = (function (){try{while(true){
var result__15730__auto__ = switch__15727__auto__(state_18084);
if(cljs.core.keyword_identical_QMARK_(result__15730__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15730__auto__;
}
break;
}
}catch (e18111){if((e18111 instanceof Object)){
var ex__15731__auto__ = e18111;
var statearr_18112_18170 = state_18084;
(statearr_18112_18170[(5)] = ex__15731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18084);

return cljs.core.cst$kw$recur;
} else {
throw e18111;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15729__auto__,cljs.core.cst$kw$recur)){
var G__18171 = state_18084;
state_18084 = G__18171;
continue;
} else {
return ret_value__15729__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__ = function(state_18084){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____1.call(this,state_18084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15728__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15728__auto__;
})()
;})(switch__15727__auto__,c__15910__auto__,jobs,results,process,async))
})();
var state__15912__auto__ = (function (){var statearr_18113 = (f__15911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15911__auto__.cljs$core$IFn$_invoke$arity$0() : f__15911__auto__.call(null));
(statearr_18113[(6)] = c__15910__auto__);

return statearr_18113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15912__auto__);
});})(c__15910__auto__,jobs,results,process,async))
);

return c__15910__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__18173 = arguments.length;
switch (G__18173) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__18176 = arguments.length;
switch (G__18176) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__18179 = arguments.length;
switch (G__18179) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15910__auto___18228 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15910__auto___18228,tc,fc){
return (function (){
var f__15911__auto__ = (function (){var switch__15727__auto__ = ((function (c__15910__auto___18228,tc,fc){
return (function (state_18205){
var state_val_18206 = (state_18205[(1)]);
if((state_val_18206 === (7))){
var inst_18201 = (state_18205[(2)]);
var state_18205__$1 = state_18205;
var statearr_18207_18229 = state_18205__$1;
(statearr_18207_18229[(2)] = inst_18201);

(statearr_18207_18229[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18206 === (1))){
var state_18205__$1 = state_18205;
var statearr_18208_18230 = state_18205__$1;
(statearr_18208_18230[(2)] = null);

(statearr_18208_18230[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18206 === (4))){
var inst_18182 = (state_18205[(7)]);
var inst_18182__$1 = (state_18205[(2)]);
var inst_18183 = (inst_18182__$1 == null);
var state_18205__$1 = (function (){var statearr_18209 = state_18205;
(statearr_18209[(7)] = inst_18182__$1);

return statearr_18209;
})();
if(cljs.core.truth_(inst_18183)){
var statearr_18210_18231 = state_18205__$1;
(statearr_18210_18231[(1)] = (5));

} else {
var statearr_18211_18232 = state_18205__$1;
(statearr_18211_18232[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18206 === (13))){
var state_18205__$1 = state_18205;
var statearr_18212_18233 = state_18205__$1;
(statearr_18212_18233[(2)] = null);

(statearr_18212_18233[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18206 === (6))){
var inst_18182 = (state_18205[(7)]);
var inst_18188 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18182) : p.call(null,inst_18182));
var state_18205__$1 = state_18205;
if(cljs.core.truth_(inst_18188)){
var statearr_18213_18234 = state_18205__$1;
(statearr_18213_18234[(1)] = (9));

} else {
var statearr_18214_18235 = state_18205__$1;
(statearr_18214_18235[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18206 === (3))){
var inst_18203 = (state_18205[(2)]);
var state_18205__$1 = state_18205;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18205__$1,inst_18203);
} else {
if((state_val_18206 === (12))){
var state_18205__$1 = state_18205;
var statearr_18215_18236 = state_18205__$1;
(statearr_18215_18236[(2)] = null);

(statearr_18215_18236[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18206 === (2))){
var state_18205__$1 = state_18205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18205__$1,(4),ch);
} else {
if((state_val_18206 === (11))){
var inst_18182 = (state_18205[(7)]);
var inst_18192 = (state_18205[(2)]);
var state_18205__$1 = state_18205;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18205__$1,(8),inst_18192,inst_18182);
} else {
if((state_val_18206 === (9))){
var state_18205__$1 = state_18205;
var statearr_18216_18237 = state_18205__$1;
(statearr_18216_18237[(2)] = tc);

(statearr_18216_18237[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18206 === (5))){
var inst_18185 = cljs.core.async.close_BANG_(tc);
var inst_18186 = cljs.core.async.close_BANG_(fc);
var state_18205__$1 = (function (){var statearr_18217 = state_18205;
(statearr_18217[(8)] = inst_18185);

return statearr_18217;
})();
var statearr_18218_18238 = state_18205__$1;
(statearr_18218_18238[(2)] = inst_18186);

(statearr_18218_18238[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18206 === (14))){
var inst_18199 = (state_18205[(2)]);
var state_18205__$1 = state_18205;
var statearr_18219_18239 = state_18205__$1;
(statearr_18219_18239[(2)] = inst_18199);

(statearr_18219_18239[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18206 === (10))){
var state_18205__$1 = state_18205;
var statearr_18220_18240 = state_18205__$1;
(statearr_18220_18240[(2)] = fc);

(statearr_18220_18240[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18206 === (8))){
var inst_18194 = (state_18205[(2)]);
var state_18205__$1 = state_18205;
if(cljs.core.truth_(inst_18194)){
var statearr_18221_18241 = state_18205__$1;
(statearr_18221_18241[(1)] = (12));

} else {
var statearr_18222_18242 = state_18205__$1;
(statearr_18222_18242[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
}
}
}
}
}
});})(c__15910__auto___18228,tc,fc))
;
return ((function (switch__15727__auto__,c__15910__auto___18228,tc,fc){
return (function() {
var cljs$core$async$state_machine__15728__auto__ = null;
var cljs$core$async$state_machine__15728__auto____0 = (function (){
var statearr_18223 = [null,null,null,null,null,null,null,null,null];
(statearr_18223[(0)] = cljs$core$async$state_machine__15728__auto__);

(statearr_18223[(1)] = (1));

return statearr_18223;
});
var cljs$core$async$state_machine__15728__auto____1 = (function (state_18205){
while(true){
var ret_value__15729__auto__ = (function (){try{while(true){
var result__15730__auto__ = switch__15727__auto__(state_18205);
if(cljs.core.keyword_identical_QMARK_(result__15730__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15730__auto__;
}
break;
}
}catch (e18224){if((e18224 instanceof Object)){
var ex__15731__auto__ = e18224;
var statearr_18225_18243 = state_18205;
(statearr_18225_18243[(5)] = ex__15731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18205);

return cljs.core.cst$kw$recur;
} else {
throw e18224;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15729__auto__,cljs.core.cst$kw$recur)){
var G__18244 = state_18205;
state_18205 = G__18244;
continue;
} else {
return ret_value__15729__auto__;
}
break;
}
});
cljs$core$async$state_machine__15728__auto__ = function(state_18205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15728__auto____1.call(this,state_18205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15728__auto____0;
cljs$core$async$state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15728__auto____1;
return cljs$core$async$state_machine__15728__auto__;
})()
;})(switch__15727__auto__,c__15910__auto___18228,tc,fc))
})();
var state__15912__auto__ = (function (){var statearr_18226 = (f__15911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15911__auto__.cljs$core$IFn$_invoke$arity$0() : f__15911__auto__.call(null));
(statearr_18226[(6)] = c__15910__auto___18228);

return statearr_18226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15912__auto__);
});})(c__15910__auto___18228,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15910__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15910__auto__){
return (function (){
var f__15911__auto__ = (function (){var switch__15727__auto__ = ((function (c__15910__auto__){
return (function (state_18265){
var state_val_18266 = (state_18265[(1)]);
if((state_val_18266 === (7))){
var inst_18261 = (state_18265[(2)]);
var state_18265__$1 = state_18265;
var statearr_18267_18285 = state_18265__$1;
(statearr_18267_18285[(2)] = inst_18261);

(statearr_18267_18285[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18266 === (1))){
var inst_18245 = init;
var state_18265__$1 = (function (){var statearr_18268 = state_18265;
(statearr_18268[(7)] = inst_18245);

return statearr_18268;
})();
var statearr_18269_18286 = state_18265__$1;
(statearr_18269_18286[(2)] = null);

(statearr_18269_18286[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18266 === (4))){
var inst_18248 = (state_18265[(8)]);
var inst_18248__$1 = (state_18265[(2)]);
var inst_18249 = (inst_18248__$1 == null);
var state_18265__$1 = (function (){var statearr_18270 = state_18265;
(statearr_18270[(8)] = inst_18248__$1);

return statearr_18270;
})();
if(cljs.core.truth_(inst_18249)){
var statearr_18271_18287 = state_18265__$1;
(statearr_18271_18287[(1)] = (5));

} else {
var statearr_18272_18288 = state_18265__$1;
(statearr_18272_18288[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18266 === (6))){
var inst_18252 = (state_18265[(9)]);
var inst_18248 = (state_18265[(8)]);
var inst_18245 = (state_18265[(7)]);
var inst_18252__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18245,inst_18248) : f.call(null,inst_18245,inst_18248));
var inst_18253 = cljs.core.reduced_QMARK_(inst_18252__$1);
var state_18265__$1 = (function (){var statearr_18273 = state_18265;
(statearr_18273[(9)] = inst_18252__$1);

return statearr_18273;
})();
if(inst_18253){
var statearr_18274_18289 = state_18265__$1;
(statearr_18274_18289[(1)] = (8));

} else {
var statearr_18275_18290 = state_18265__$1;
(statearr_18275_18290[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18266 === (3))){
var inst_18263 = (state_18265[(2)]);
var state_18265__$1 = state_18265;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18265__$1,inst_18263);
} else {
if((state_val_18266 === (2))){
var state_18265__$1 = state_18265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18265__$1,(4),ch);
} else {
if((state_val_18266 === (9))){
var inst_18252 = (state_18265[(9)]);
var inst_18245 = inst_18252;
var state_18265__$1 = (function (){var statearr_18276 = state_18265;
(statearr_18276[(7)] = inst_18245);

return statearr_18276;
})();
var statearr_18277_18291 = state_18265__$1;
(statearr_18277_18291[(2)] = null);

(statearr_18277_18291[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18266 === (5))){
var inst_18245 = (state_18265[(7)]);
var state_18265__$1 = state_18265;
var statearr_18278_18292 = state_18265__$1;
(statearr_18278_18292[(2)] = inst_18245);

(statearr_18278_18292[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18266 === (10))){
var inst_18259 = (state_18265[(2)]);
var state_18265__$1 = state_18265;
var statearr_18279_18293 = state_18265__$1;
(statearr_18279_18293[(2)] = inst_18259);

(statearr_18279_18293[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18266 === (8))){
var inst_18252 = (state_18265[(9)]);
var inst_18255 = cljs.core.deref(inst_18252);
var state_18265__$1 = state_18265;
var statearr_18280_18294 = state_18265__$1;
(statearr_18280_18294[(2)] = inst_18255);

(statearr_18280_18294[(1)] = (10));


return cljs.core.cst$kw$recur;
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
}
});})(c__15910__auto__))
;
return ((function (switch__15727__auto__,c__15910__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15728__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15728__auto____0 = (function (){
var statearr_18281 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18281[(0)] = cljs$core$async$reduce_$_state_machine__15728__auto__);

(statearr_18281[(1)] = (1));

return statearr_18281;
});
var cljs$core$async$reduce_$_state_machine__15728__auto____1 = (function (state_18265){
while(true){
var ret_value__15729__auto__ = (function (){try{while(true){
var result__15730__auto__ = switch__15727__auto__(state_18265);
if(cljs.core.keyword_identical_QMARK_(result__15730__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15730__auto__;
}
break;
}
}catch (e18282){if((e18282 instanceof Object)){
var ex__15731__auto__ = e18282;
var statearr_18283_18295 = state_18265;
(statearr_18283_18295[(5)] = ex__15731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18265);

return cljs.core.cst$kw$recur;
} else {
throw e18282;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15729__auto__,cljs.core.cst$kw$recur)){
var G__18296 = state_18265;
state_18265 = G__18296;
continue;
} else {
return ret_value__15729__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15728__auto__ = function(state_18265){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15728__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15728__auto____1.call(this,state_18265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15728__auto____0;
cljs$core$async$reduce_$_state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15728__auto____1;
return cljs$core$async$reduce_$_state_machine__15728__auto__;
})()
;})(switch__15727__auto__,c__15910__auto__))
})();
var state__15912__auto__ = (function (){var statearr_18284 = (f__15911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15911__auto__.cljs$core$IFn$_invoke$arity$0() : f__15911__auto__.call(null));
(statearr_18284[(6)] = c__15910__auto__);

return statearr_18284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15912__auto__);
});})(c__15910__auto__))
);

return c__15910__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15910__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15910__auto__,f__$1){
return (function (){
var f__15911__auto__ = (function (){var switch__15727__auto__ = ((function (c__15910__auto__,f__$1){
return (function (state_18302){
var state_val_18303 = (state_18302[(1)]);
if((state_val_18303 === (1))){
var inst_18297 = cljs.core.async.reduce(f__$1,init,ch);
var state_18302__$1 = state_18302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18302__$1,(2),inst_18297);
} else {
if((state_val_18303 === (2))){
var inst_18299 = (state_18302[(2)]);
var inst_18300 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18299) : f__$1.call(null,inst_18299));
var state_18302__$1 = state_18302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18302__$1,inst_18300);
} else {
return null;
}
}
});})(c__15910__auto__,f__$1))
;
return ((function (switch__15727__auto__,c__15910__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15728__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15728__auto____0 = (function (){
var statearr_18304 = [null,null,null,null,null,null,null];
(statearr_18304[(0)] = cljs$core$async$transduce_$_state_machine__15728__auto__);

(statearr_18304[(1)] = (1));

return statearr_18304;
});
var cljs$core$async$transduce_$_state_machine__15728__auto____1 = (function (state_18302){
while(true){
var ret_value__15729__auto__ = (function (){try{while(true){
var result__15730__auto__ = switch__15727__auto__(state_18302);
if(cljs.core.keyword_identical_QMARK_(result__15730__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15730__auto__;
}
break;
}
}catch (e18305){if((e18305 instanceof Object)){
var ex__15731__auto__ = e18305;
var statearr_18306_18308 = state_18302;
(statearr_18306_18308[(5)] = ex__15731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18302);

return cljs.core.cst$kw$recur;
} else {
throw e18305;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15729__auto__,cljs.core.cst$kw$recur)){
var G__18309 = state_18302;
state_18302 = G__18309;
continue;
} else {
return ret_value__15729__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15728__auto__ = function(state_18302){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15728__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15728__auto____1.call(this,state_18302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15728__auto____0;
cljs$core$async$transduce_$_state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15728__auto____1;
return cljs$core$async$transduce_$_state_machine__15728__auto__;
})()
;})(switch__15727__auto__,c__15910__auto__,f__$1))
})();
var state__15912__auto__ = (function (){var statearr_18307 = (f__15911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15911__auto__.cljs$core$IFn$_invoke$arity$0() : f__15911__auto__.call(null));
(statearr_18307[(6)] = c__15910__auto__);

return statearr_18307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15912__auto__);
});})(c__15910__auto__,f__$1))
);

return c__15910__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18311 = arguments.length;
switch (G__18311) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15910__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15910__auto__){
return (function (){
var f__15911__auto__ = (function (){var switch__15727__auto__ = ((function (c__15910__auto__){
return (function (state_18336){
var state_val_18337 = (state_18336[(1)]);
if((state_val_18337 === (7))){
var inst_18318 = (state_18336[(2)]);
var state_18336__$1 = state_18336;
var statearr_18338_18359 = state_18336__$1;
(statearr_18338_18359[(2)] = inst_18318);

(statearr_18338_18359[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18337 === (1))){
var inst_18312 = cljs.core.seq(coll);
var inst_18313 = inst_18312;
var state_18336__$1 = (function (){var statearr_18339 = state_18336;
(statearr_18339[(7)] = inst_18313);

return statearr_18339;
})();
var statearr_18340_18360 = state_18336__$1;
(statearr_18340_18360[(2)] = null);

(statearr_18340_18360[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18337 === (4))){
var inst_18313 = (state_18336[(7)]);
var inst_18316 = cljs.core.first(inst_18313);
var state_18336__$1 = state_18336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18336__$1,(7),ch,inst_18316);
} else {
if((state_val_18337 === (13))){
var inst_18330 = (state_18336[(2)]);
var state_18336__$1 = state_18336;
var statearr_18341_18361 = state_18336__$1;
(statearr_18341_18361[(2)] = inst_18330);

(statearr_18341_18361[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18337 === (6))){
var inst_18321 = (state_18336[(2)]);
var state_18336__$1 = state_18336;
if(cljs.core.truth_(inst_18321)){
var statearr_18342_18362 = state_18336__$1;
(statearr_18342_18362[(1)] = (8));

} else {
var statearr_18343_18363 = state_18336__$1;
(statearr_18343_18363[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18337 === (3))){
var inst_18334 = (state_18336[(2)]);
var state_18336__$1 = state_18336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18336__$1,inst_18334);
} else {
if((state_val_18337 === (12))){
var state_18336__$1 = state_18336;
var statearr_18344_18364 = state_18336__$1;
(statearr_18344_18364[(2)] = null);

(statearr_18344_18364[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18337 === (2))){
var inst_18313 = (state_18336[(7)]);
var state_18336__$1 = state_18336;
if(cljs.core.truth_(inst_18313)){
var statearr_18345_18365 = state_18336__$1;
(statearr_18345_18365[(1)] = (4));

} else {
var statearr_18346_18366 = state_18336__$1;
(statearr_18346_18366[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18337 === (11))){
var inst_18327 = cljs.core.async.close_BANG_(ch);
var state_18336__$1 = state_18336;
var statearr_18347_18367 = state_18336__$1;
(statearr_18347_18367[(2)] = inst_18327);

(statearr_18347_18367[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18337 === (9))){
var state_18336__$1 = state_18336;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18348_18368 = state_18336__$1;
(statearr_18348_18368[(1)] = (11));

} else {
var statearr_18349_18369 = state_18336__$1;
(statearr_18349_18369[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18337 === (5))){
var inst_18313 = (state_18336[(7)]);
var state_18336__$1 = state_18336;
var statearr_18350_18370 = state_18336__$1;
(statearr_18350_18370[(2)] = inst_18313);

(statearr_18350_18370[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18337 === (10))){
var inst_18332 = (state_18336[(2)]);
var state_18336__$1 = state_18336;
var statearr_18351_18371 = state_18336__$1;
(statearr_18351_18371[(2)] = inst_18332);

(statearr_18351_18371[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18337 === (8))){
var inst_18313 = (state_18336[(7)]);
var inst_18323 = cljs.core.next(inst_18313);
var inst_18313__$1 = inst_18323;
var state_18336__$1 = (function (){var statearr_18352 = state_18336;
(statearr_18352[(7)] = inst_18313__$1);

return statearr_18352;
})();
var statearr_18353_18372 = state_18336__$1;
(statearr_18353_18372[(2)] = null);

(statearr_18353_18372[(1)] = (2));


return cljs.core.cst$kw$recur;
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
}
}
}
}
});})(c__15910__auto__))
;
return ((function (switch__15727__auto__,c__15910__auto__){
return (function() {
var cljs$core$async$state_machine__15728__auto__ = null;
var cljs$core$async$state_machine__15728__auto____0 = (function (){
var statearr_18354 = [null,null,null,null,null,null,null,null];
(statearr_18354[(0)] = cljs$core$async$state_machine__15728__auto__);

(statearr_18354[(1)] = (1));

return statearr_18354;
});
var cljs$core$async$state_machine__15728__auto____1 = (function (state_18336){
while(true){
var ret_value__15729__auto__ = (function (){try{while(true){
var result__15730__auto__ = switch__15727__auto__(state_18336);
if(cljs.core.keyword_identical_QMARK_(result__15730__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15730__auto__;
}
break;
}
}catch (e18355){if((e18355 instanceof Object)){
var ex__15731__auto__ = e18355;
var statearr_18356_18373 = state_18336;
(statearr_18356_18373[(5)] = ex__15731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18336);

return cljs.core.cst$kw$recur;
} else {
throw e18355;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15729__auto__,cljs.core.cst$kw$recur)){
var G__18374 = state_18336;
state_18336 = G__18374;
continue;
} else {
return ret_value__15729__auto__;
}
break;
}
});
cljs$core$async$state_machine__15728__auto__ = function(state_18336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15728__auto____1.call(this,state_18336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15728__auto____0;
cljs$core$async$state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15728__auto____1;
return cljs$core$async$state_machine__15728__auto__;
})()
;})(switch__15727__auto__,c__15910__auto__))
})();
var state__15912__auto__ = (function (){var statearr_18357 = (f__15911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15911__auto__.cljs$core$IFn$_invoke$arity$0() : f__15911__auto__.call(null));
(statearr_18357[(6)] = c__15910__auto__);

return statearr_18357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15912__auto__);
});})(c__15910__auto__))
);

return c__15910__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto__.call(null,_));
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18375 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18375 = (function (ch,cs,meta18376){
this.ch = ch;
this.cs = cs;
this.meta18376 = meta18376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18377,meta18376__$1){
var self__ = this;
var _18377__$1 = this;
return (new cljs.core.async.t_cljs$core$async18375(self__.ch,self__.cs,meta18376__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18375.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18377){
var self__ = this;
var _18377__$1 = this;
return self__.meta18376;
});})(cs))
;

cljs.core.async.t_cljs$core$async18375.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18375.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18375.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18375.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18375.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18375.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18375.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta18376], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18375.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18375";

cljs.core.async.t_cljs$core$async18375.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18375");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18375.
 */
cljs.core.async.__GT_t_cljs$core$async18375 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18375(ch__$1,cs__$1,meta18376){
return (new cljs.core.async.t_cljs$core$async18375(ch__$1,cs__$1,meta18376));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18375(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__15910__auto___18597 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15910__auto___18597,cs,m,dchan,dctr,done){
return (function (){
var f__15911__auto__ = (function (){var switch__15727__auto__ = ((function (c__15910__auto___18597,cs,m,dchan,dctr,done){
return (function (state_18512){
var state_val_18513 = (state_18512[(1)]);
if((state_val_18513 === (7))){
var inst_18508 = (state_18512[(2)]);
var state_18512__$1 = state_18512;
var statearr_18514_18598 = state_18512__$1;
(statearr_18514_18598[(2)] = inst_18508);

(statearr_18514_18598[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (20))){
var inst_18411 = (state_18512[(7)]);
var inst_18423 = cljs.core.first(inst_18411);
var inst_18424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18423,(0),null);
var inst_18425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18423,(1),null);
var state_18512__$1 = (function (){var statearr_18515 = state_18512;
(statearr_18515[(8)] = inst_18424);

return statearr_18515;
})();
if(cljs.core.truth_(inst_18425)){
var statearr_18516_18599 = state_18512__$1;
(statearr_18516_18599[(1)] = (22));

} else {
var statearr_18517_18600 = state_18512__$1;
(statearr_18517_18600[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (27))){
var inst_18380 = (state_18512[(9)]);
var inst_18453 = (state_18512[(10)]);
var inst_18455 = (state_18512[(11)]);
var inst_18460 = (state_18512[(12)]);
var inst_18460__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18453,inst_18455);
var inst_18461 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18460__$1,inst_18380,done);
var state_18512__$1 = (function (){var statearr_18518 = state_18512;
(statearr_18518[(12)] = inst_18460__$1);

return statearr_18518;
})();
if(cljs.core.truth_(inst_18461)){
var statearr_18519_18601 = state_18512__$1;
(statearr_18519_18601[(1)] = (30));

} else {
var statearr_18520_18602 = state_18512__$1;
(statearr_18520_18602[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (1))){
var state_18512__$1 = state_18512;
var statearr_18521_18603 = state_18512__$1;
(statearr_18521_18603[(2)] = null);

(statearr_18521_18603[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (24))){
var inst_18411 = (state_18512[(7)]);
var inst_18430 = (state_18512[(2)]);
var inst_18431 = cljs.core.next(inst_18411);
var inst_18389 = inst_18431;
var inst_18390 = null;
var inst_18391 = (0);
var inst_18392 = (0);
var state_18512__$1 = (function (){var statearr_18522 = state_18512;
(statearr_18522[(13)] = inst_18389);

(statearr_18522[(14)] = inst_18391);

(statearr_18522[(15)] = inst_18430);

(statearr_18522[(16)] = inst_18392);

(statearr_18522[(17)] = inst_18390);

return statearr_18522;
})();
var statearr_18523_18604 = state_18512__$1;
(statearr_18523_18604[(2)] = null);

(statearr_18523_18604[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (39))){
var state_18512__$1 = state_18512;
var statearr_18527_18605 = state_18512__$1;
(statearr_18527_18605[(2)] = null);

(statearr_18527_18605[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (4))){
var inst_18380 = (state_18512[(9)]);
var inst_18380__$1 = (state_18512[(2)]);
var inst_18381 = (inst_18380__$1 == null);
var state_18512__$1 = (function (){var statearr_18528 = state_18512;
(statearr_18528[(9)] = inst_18380__$1);

return statearr_18528;
})();
if(cljs.core.truth_(inst_18381)){
var statearr_18529_18606 = state_18512__$1;
(statearr_18529_18606[(1)] = (5));

} else {
var statearr_18530_18607 = state_18512__$1;
(statearr_18530_18607[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (15))){
var inst_18389 = (state_18512[(13)]);
var inst_18391 = (state_18512[(14)]);
var inst_18392 = (state_18512[(16)]);
var inst_18390 = (state_18512[(17)]);
var inst_18407 = (state_18512[(2)]);
var inst_18408 = (inst_18392 + (1));
var tmp18524 = inst_18389;
var tmp18525 = inst_18391;
var tmp18526 = inst_18390;
var inst_18389__$1 = tmp18524;
var inst_18390__$1 = tmp18526;
var inst_18391__$1 = tmp18525;
var inst_18392__$1 = inst_18408;
var state_18512__$1 = (function (){var statearr_18531 = state_18512;
(statearr_18531[(13)] = inst_18389__$1);

(statearr_18531[(14)] = inst_18391__$1);

(statearr_18531[(16)] = inst_18392__$1);

(statearr_18531[(17)] = inst_18390__$1);

(statearr_18531[(18)] = inst_18407);

return statearr_18531;
})();
var statearr_18532_18608 = state_18512__$1;
(statearr_18532_18608[(2)] = null);

(statearr_18532_18608[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (21))){
var inst_18434 = (state_18512[(2)]);
var state_18512__$1 = state_18512;
var statearr_18536_18609 = state_18512__$1;
(statearr_18536_18609[(2)] = inst_18434);

(statearr_18536_18609[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (31))){
var inst_18460 = (state_18512[(12)]);
var inst_18464 = done(null);
var inst_18465 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18460);
var state_18512__$1 = (function (){var statearr_18537 = state_18512;
(statearr_18537[(19)] = inst_18464);

return statearr_18537;
})();
var statearr_18538_18610 = state_18512__$1;
(statearr_18538_18610[(2)] = inst_18465);

(statearr_18538_18610[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (32))){
var inst_18452 = (state_18512[(20)]);
var inst_18453 = (state_18512[(10)]);
var inst_18455 = (state_18512[(11)]);
var inst_18454 = (state_18512[(21)]);
var inst_18467 = (state_18512[(2)]);
var inst_18468 = (inst_18455 + (1));
var tmp18533 = inst_18452;
var tmp18534 = inst_18453;
var tmp18535 = inst_18454;
var inst_18452__$1 = tmp18533;
var inst_18453__$1 = tmp18534;
var inst_18454__$1 = tmp18535;
var inst_18455__$1 = inst_18468;
var state_18512__$1 = (function (){var statearr_18539 = state_18512;
(statearr_18539[(20)] = inst_18452__$1);

(statearr_18539[(10)] = inst_18453__$1);

(statearr_18539[(11)] = inst_18455__$1);

(statearr_18539[(22)] = inst_18467);

(statearr_18539[(21)] = inst_18454__$1);

return statearr_18539;
})();
var statearr_18540_18611 = state_18512__$1;
(statearr_18540_18611[(2)] = null);

(statearr_18540_18611[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (40))){
var inst_18480 = (state_18512[(23)]);
var inst_18484 = done(null);
var inst_18485 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18480);
var state_18512__$1 = (function (){var statearr_18541 = state_18512;
(statearr_18541[(24)] = inst_18484);

return statearr_18541;
})();
var statearr_18542_18612 = state_18512__$1;
(statearr_18542_18612[(2)] = inst_18485);

(statearr_18542_18612[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (33))){
var inst_18471 = (state_18512[(25)]);
var inst_18473 = cljs.core.chunked_seq_QMARK_(inst_18471);
var state_18512__$1 = state_18512;
if(inst_18473){
var statearr_18543_18613 = state_18512__$1;
(statearr_18543_18613[(1)] = (36));

} else {
var statearr_18544_18614 = state_18512__$1;
(statearr_18544_18614[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (13))){
var inst_18401 = (state_18512[(26)]);
var inst_18404 = cljs.core.async.close_BANG_(inst_18401);
var state_18512__$1 = state_18512;
var statearr_18545_18615 = state_18512__$1;
(statearr_18545_18615[(2)] = inst_18404);

(statearr_18545_18615[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (22))){
var inst_18424 = (state_18512[(8)]);
var inst_18427 = cljs.core.async.close_BANG_(inst_18424);
var state_18512__$1 = state_18512;
var statearr_18546_18616 = state_18512__$1;
(statearr_18546_18616[(2)] = inst_18427);

(statearr_18546_18616[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (36))){
var inst_18471 = (state_18512[(25)]);
var inst_18475 = cljs.core.chunk_first(inst_18471);
var inst_18476 = cljs.core.chunk_rest(inst_18471);
var inst_18477 = cljs.core.count(inst_18475);
var inst_18452 = inst_18476;
var inst_18453 = inst_18475;
var inst_18454 = inst_18477;
var inst_18455 = (0);
var state_18512__$1 = (function (){var statearr_18547 = state_18512;
(statearr_18547[(20)] = inst_18452);

(statearr_18547[(10)] = inst_18453);

(statearr_18547[(11)] = inst_18455);

(statearr_18547[(21)] = inst_18454);

return statearr_18547;
})();
var statearr_18548_18617 = state_18512__$1;
(statearr_18548_18617[(2)] = null);

(statearr_18548_18617[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (41))){
var inst_18471 = (state_18512[(25)]);
var inst_18487 = (state_18512[(2)]);
var inst_18488 = cljs.core.next(inst_18471);
var inst_18452 = inst_18488;
var inst_18453 = null;
var inst_18454 = (0);
var inst_18455 = (0);
var state_18512__$1 = (function (){var statearr_18549 = state_18512;
(statearr_18549[(27)] = inst_18487);

(statearr_18549[(20)] = inst_18452);

(statearr_18549[(10)] = inst_18453);

(statearr_18549[(11)] = inst_18455);

(statearr_18549[(21)] = inst_18454);

return statearr_18549;
})();
var statearr_18550_18618 = state_18512__$1;
(statearr_18550_18618[(2)] = null);

(statearr_18550_18618[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (43))){
var state_18512__$1 = state_18512;
var statearr_18551_18619 = state_18512__$1;
(statearr_18551_18619[(2)] = null);

(statearr_18551_18619[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (29))){
var inst_18496 = (state_18512[(2)]);
var state_18512__$1 = state_18512;
var statearr_18552_18620 = state_18512__$1;
(statearr_18552_18620[(2)] = inst_18496);

(statearr_18552_18620[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (44))){
var inst_18505 = (state_18512[(2)]);
var state_18512__$1 = (function (){var statearr_18553 = state_18512;
(statearr_18553[(28)] = inst_18505);

return statearr_18553;
})();
var statearr_18554_18621 = state_18512__$1;
(statearr_18554_18621[(2)] = null);

(statearr_18554_18621[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (6))){
var inst_18444 = (state_18512[(29)]);
var inst_18443 = cljs.core.deref(cs);
var inst_18444__$1 = cljs.core.keys(inst_18443);
var inst_18445 = cljs.core.count(inst_18444__$1);
var inst_18446 = cljs.core.reset_BANG_(dctr,inst_18445);
var inst_18451 = cljs.core.seq(inst_18444__$1);
var inst_18452 = inst_18451;
var inst_18453 = null;
var inst_18454 = (0);
var inst_18455 = (0);
var state_18512__$1 = (function (){var statearr_18555 = state_18512;
(statearr_18555[(20)] = inst_18452);

(statearr_18555[(30)] = inst_18446);

(statearr_18555[(10)] = inst_18453);

(statearr_18555[(29)] = inst_18444__$1);

(statearr_18555[(11)] = inst_18455);

(statearr_18555[(21)] = inst_18454);

return statearr_18555;
})();
var statearr_18556_18622 = state_18512__$1;
(statearr_18556_18622[(2)] = null);

(statearr_18556_18622[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (28))){
var inst_18452 = (state_18512[(20)]);
var inst_18471 = (state_18512[(25)]);
var inst_18471__$1 = cljs.core.seq(inst_18452);
var state_18512__$1 = (function (){var statearr_18557 = state_18512;
(statearr_18557[(25)] = inst_18471__$1);

return statearr_18557;
})();
if(inst_18471__$1){
var statearr_18558_18623 = state_18512__$1;
(statearr_18558_18623[(1)] = (33));

} else {
var statearr_18559_18624 = state_18512__$1;
(statearr_18559_18624[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (25))){
var inst_18455 = (state_18512[(11)]);
var inst_18454 = (state_18512[(21)]);
var inst_18457 = (inst_18455 < inst_18454);
var inst_18458 = inst_18457;
var state_18512__$1 = state_18512;
if(cljs.core.truth_(inst_18458)){
var statearr_18560_18625 = state_18512__$1;
(statearr_18560_18625[(1)] = (27));

} else {
var statearr_18561_18626 = state_18512__$1;
(statearr_18561_18626[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (34))){
var state_18512__$1 = state_18512;
var statearr_18562_18627 = state_18512__$1;
(statearr_18562_18627[(2)] = null);

(statearr_18562_18627[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (17))){
var state_18512__$1 = state_18512;
var statearr_18563_18628 = state_18512__$1;
(statearr_18563_18628[(2)] = null);

(statearr_18563_18628[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (3))){
var inst_18510 = (state_18512[(2)]);
var state_18512__$1 = state_18512;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18512__$1,inst_18510);
} else {
if((state_val_18513 === (12))){
var inst_18439 = (state_18512[(2)]);
var state_18512__$1 = state_18512;
var statearr_18564_18629 = state_18512__$1;
(statearr_18564_18629[(2)] = inst_18439);

(statearr_18564_18629[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (2))){
var state_18512__$1 = state_18512;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18512__$1,(4),ch);
} else {
if((state_val_18513 === (23))){
var state_18512__$1 = state_18512;
var statearr_18565_18630 = state_18512__$1;
(statearr_18565_18630[(2)] = null);

(statearr_18565_18630[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (35))){
var inst_18494 = (state_18512[(2)]);
var state_18512__$1 = state_18512;
var statearr_18566_18631 = state_18512__$1;
(statearr_18566_18631[(2)] = inst_18494);

(statearr_18566_18631[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (19))){
var inst_18411 = (state_18512[(7)]);
var inst_18415 = cljs.core.chunk_first(inst_18411);
var inst_18416 = cljs.core.chunk_rest(inst_18411);
var inst_18417 = cljs.core.count(inst_18415);
var inst_18389 = inst_18416;
var inst_18390 = inst_18415;
var inst_18391 = inst_18417;
var inst_18392 = (0);
var state_18512__$1 = (function (){var statearr_18567 = state_18512;
(statearr_18567[(13)] = inst_18389);

(statearr_18567[(14)] = inst_18391);

(statearr_18567[(16)] = inst_18392);

(statearr_18567[(17)] = inst_18390);

return statearr_18567;
})();
var statearr_18568_18632 = state_18512__$1;
(statearr_18568_18632[(2)] = null);

(statearr_18568_18632[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (11))){
var inst_18411 = (state_18512[(7)]);
var inst_18389 = (state_18512[(13)]);
var inst_18411__$1 = cljs.core.seq(inst_18389);
var state_18512__$1 = (function (){var statearr_18569 = state_18512;
(statearr_18569[(7)] = inst_18411__$1);

return statearr_18569;
})();
if(inst_18411__$1){
var statearr_18570_18633 = state_18512__$1;
(statearr_18570_18633[(1)] = (16));

} else {
var statearr_18571_18634 = state_18512__$1;
(statearr_18571_18634[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (9))){
var inst_18441 = (state_18512[(2)]);
var state_18512__$1 = state_18512;
var statearr_18572_18635 = state_18512__$1;
(statearr_18572_18635[(2)] = inst_18441);

(statearr_18572_18635[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (5))){
var inst_18387 = cljs.core.deref(cs);
var inst_18388 = cljs.core.seq(inst_18387);
var inst_18389 = inst_18388;
var inst_18390 = null;
var inst_18391 = (0);
var inst_18392 = (0);
var state_18512__$1 = (function (){var statearr_18573 = state_18512;
(statearr_18573[(13)] = inst_18389);

(statearr_18573[(14)] = inst_18391);

(statearr_18573[(16)] = inst_18392);

(statearr_18573[(17)] = inst_18390);

return statearr_18573;
})();
var statearr_18574_18636 = state_18512__$1;
(statearr_18574_18636[(2)] = null);

(statearr_18574_18636[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (14))){
var state_18512__$1 = state_18512;
var statearr_18575_18637 = state_18512__$1;
(statearr_18575_18637[(2)] = null);

(statearr_18575_18637[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (45))){
var inst_18502 = (state_18512[(2)]);
var state_18512__$1 = state_18512;
var statearr_18576_18638 = state_18512__$1;
(statearr_18576_18638[(2)] = inst_18502);

(statearr_18576_18638[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (26))){
var inst_18444 = (state_18512[(29)]);
var inst_18498 = (state_18512[(2)]);
var inst_18499 = cljs.core.seq(inst_18444);
var state_18512__$1 = (function (){var statearr_18577 = state_18512;
(statearr_18577[(31)] = inst_18498);

return statearr_18577;
})();
if(inst_18499){
var statearr_18578_18639 = state_18512__$1;
(statearr_18578_18639[(1)] = (42));

} else {
var statearr_18579_18640 = state_18512__$1;
(statearr_18579_18640[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (16))){
var inst_18411 = (state_18512[(7)]);
var inst_18413 = cljs.core.chunked_seq_QMARK_(inst_18411);
var state_18512__$1 = state_18512;
if(inst_18413){
var statearr_18580_18641 = state_18512__$1;
(statearr_18580_18641[(1)] = (19));

} else {
var statearr_18581_18642 = state_18512__$1;
(statearr_18581_18642[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (38))){
var inst_18491 = (state_18512[(2)]);
var state_18512__$1 = state_18512;
var statearr_18582_18643 = state_18512__$1;
(statearr_18582_18643[(2)] = inst_18491);

(statearr_18582_18643[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (30))){
var state_18512__$1 = state_18512;
var statearr_18583_18644 = state_18512__$1;
(statearr_18583_18644[(2)] = null);

(statearr_18583_18644[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (10))){
var inst_18392 = (state_18512[(16)]);
var inst_18390 = (state_18512[(17)]);
var inst_18400 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18390,inst_18392);
var inst_18401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18400,(0),null);
var inst_18402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18400,(1),null);
var state_18512__$1 = (function (){var statearr_18584 = state_18512;
(statearr_18584[(26)] = inst_18401);

return statearr_18584;
})();
if(cljs.core.truth_(inst_18402)){
var statearr_18585_18645 = state_18512__$1;
(statearr_18585_18645[(1)] = (13));

} else {
var statearr_18586_18646 = state_18512__$1;
(statearr_18586_18646[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (18))){
var inst_18437 = (state_18512[(2)]);
var state_18512__$1 = state_18512;
var statearr_18587_18647 = state_18512__$1;
(statearr_18587_18647[(2)] = inst_18437);

(statearr_18587_18647[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (42))){
var state_18512__$1 = state_18512;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18512__$1,(45),dchan);
} else {
if((state_val_18513 === (37))){
var inst_18380 = (state_18512[(9)]);
var inst_18471 = (state_18512[(25)]);
var inst_18480 = (state_18512[(23)]);
var inst_18480__$1 = cljs.core.first(inst_18471);
var inst_18481 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18480__$1,inst_18380,done);
var state_18512__$1 = (function (){var statearr_18588 = state_18512;
(statearr_18588[(23)] = inst_18480__$1);

return statearr_18588;
})();
if(cljs.core.truth_(inst_18481)){
var statearr_18589_18648 = state_18512__$1;
(statearr_18589_18648[(1)] = (39));

} else {
var statearr_18590_18649 = state_18512__$1;
(statearr_18590_18649[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18513 === (8))){
var inst_18391 = (state_18512[(14)]);
var inst_18392 = (state_18512[(16)]);
var inst_18394 = (inst_18392 < inst_18391);
var inst_18395 = inst_18394;
var state_18512__$1 = state_18512;
if(cljs.core.truth_(inst_18395)){
var statearr_18591_18650 = state_18512__$1;
(statearr_18591_18650[(1)] = (10));

} else {
var statearr_18592_18651 = state_18512__$1;
(statearr_18592_18651[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__15910__auto___18597,cs,m,dchan,dctr,done))
;
return ((function (switch__15727__auto__,c__15910__auto___18597,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15728__auto__ = null;
var cljs$core$async$mult_$_state_machine__15728__auto____0 = (function (){
var statearr_18593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18593[(0)] = cljs$core$async$mult_$_state_machine__15728__auto__);

(statearr_18593[(1)] = (1));

return statearr_18593;
});
var cljs$core$async$mult_$_state_machine__15728__auto____1 = (function (state_18512){
while(true){
var ret_value__15729__auto__ = (function (){try{while(true){
var result__15730__auto__ = switch__15727__auto__(state_18512);
if(cljs.core.keyword_identical_QMARK_(result__15730__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15730__auto__;
}
break;
}
}catch (e18594){if((e18594 instanceof Object)){
var ex__15731__auto__ = e18594;
var statearr_18595_18652 = state_18512;
(statearr_18595_18652[(5)] = ex__15731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18512);

return cljs.core.cst$kw$recur;
} else {
throw e18594;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15729__auto__,cljs.core.cst$kw$recur)){
var G__18653 = state_18512;
state_18512 = G__18653;
continue;
} else {
return ret_value__15729__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15728__auto__ = function(state_18512){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15728__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15728__auto____1.call(this,state_18512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15728__auto____0;
cljs$core$async$mult_$_state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15728__auto____1;
return cljs$core$async$mult_$_state_machine__15728__auto__;
})()
;})(switch__15727__auto__,c__15910__auto___18597,cs,m,dchan,dctr,done))
})();
var state__15912__auto__ = (function (){var statearr_18596 = (f__15911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15911__auto__.cljs$core$IFn$_invoke$arity$0() : f__15911__auto__.call(null));
(statearr_18596[(6)] = c__15910__auto___18597);

return statearr_18596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15912__auto__);
});})(c__15910__auto___18597,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18655 = arguments.length;
switch (G__18655) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto__.call(null,m,state_map));
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto__.call(null,m,mode));
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18667 = arguments.length;
var i__4532__auto___18668 = (0);
while(true){
if((i__4532__auto___18668 < len__4531__auto___18667)){
args__4534__auto__.push((arguments[i__4532__auto___18668]));

var G__18669 = (i__4532__auto___18668 + (1));
i__4532__auto___18668 = G__18669;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18661){
var map__18662 = p__18661;
var map__18662__$1 = ((((!((map__18662 == null)))?(((((map__18662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18662):map__18662);
var opts = map__18662__$1;
var statearr_18664_18670 = state;
(statearr_18664_18670[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__18662,map__18662__$1,opts){
return (function (val){
var statearr_18665_18671 = state;
(statearr_18665_18671[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__18662,map__18662__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_18666_18672 = state;
(statearr_18666_18672[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18657){
var G__18658 = cljs.core.first(seq18657);
var seq18657__$1 = cljs.core.next(seq18657);
var G__18659 = cljs.core.first(seq18657__$1);
var seq18657__$2 = cljs.core.next(seq18657__$1);
var G__18660 = cljs.core.first(seq18657__$2);
var seq18657__$3 = cljs.core.next(seq18657__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18658,G__18659,G__18660,seq18657__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18673 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18673 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta18674){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta18674 = meta18674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18675,meta18674__$1){
var self__ = this;
var _18675__$1 = this;
return (new cljs.core.async.t_cljs$core$async18673(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta18674__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18673.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18675){
var self__ = this;
var _18675__$1 = this;
return self__.meta18674;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18673.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18673.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18673.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18673.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18673.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18673.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18673.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18673.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18673.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta18674], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18673.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18673.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18673";

cljs.core.async.t_cljs$core$async18673.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18673");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18673.
 */
cljs.core.async.__GT_t_cljs$core$async18673 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18673(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18674){
return (new cljs.core.async.t_cljs$core$async18673(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18674));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18673(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15910__auto___18837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15910__auto___18837,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15911__auto__ = (function (){var switch__15727__auto__ = ((function (c__15910__auto___18837,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18777){
var state_val_18778 = (state_18777[(1)]);
if((state_val_18778 === (7))){
var inst_18692 = (state_18777[(2)]);
var state_18777__$1 = state_18777;
var statearr_18779_18838 = state_18777__$1;
(statearr_18779_18838[(2)] = inst_18692);

(statearr_18779_18838[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (20))){
var inst_18704 = (state_18777[(7)]);
var state_18777__$1 = state_18777;
var statearr_18780_18839 = state_18777__$1;
(statearr_18780_18839[(2)] = inst_18704);

(statearr_18780_18839[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (27))){
var state_18777__$1 = state_18777;
var statearr_18781_18840 = state_18777__$1;
(statearr_18781_18840[(2)] = null);

(statearr_18781_18840[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (1))){
var inst_18679 = (state_18777[(8)]);
var inst_18679__$1 = calc_state();
var inst_18681 = (inst_18679__$1 == null);
var inst_18682 = cljs.core.not(inst_18681);
var state_18777__$1 = (function (){var statearr_18782 = state_18777;
(statearr_18782[(8)] = inst_18679__$1);

return statearr_18782;
})();
if(inst_18682){
var statearr_18783_18841 = state_18777__$1;
(statearr_18783_18841[(1)] = (2));

} else {
var statearr_18784_18842 = state_18777__$1;
(statearr_18784_18842[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (24))){
var inst_18751 = (state_18777[(9)]);
var inst_18728 = (state_18777[(10)]);
var inst_18737 = (state_18777[(11)]);
var inst_18751__$1 = (inst_18728.cljs$core$IFn$_invoke$arity$1 ? inst_18728.cljs$core$IFn$_invoke$arity$1(inst_18737) : inst_18728.call(null,inst_18737));
var state_18777__$1 = (function (){var statearr_18785 = state_18777;
(statearr_18785[(9)] = inst_18751__$1);

return statearr_18785;
})();
if(cljs.core.truth_(inst_18751__$1)){
var statearr_18786_18843 = state_18777__$1;
(statearr_18786_18843[(1)] = (29));

} else {
var statearr_18787_18844 = state_18777__$1;
(statearr_18787_18844[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (4))){
var inst_18695 = (state_18777[(2)]);
var state_18777__$1 = state_18777;
if(cljs.core.truth_(inst_18695)){
var statearr_18788_18845 = state_18777__$1;
(statearr_18788_18845[(1)] = (8));

} else {
var statearr_18789_18846 = state_18777__$1;
(statearr_18789_18846[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (15))){
var inst_18722 = (state_18777[(2)]);
var state_18777__$1 = state_18777;
if(cljs.core.truth_(inst_18722)){
var statearr_18790_18847 = state_18777__$1;
(statearr_18790_18847[(1)] = (19));

} else {
var statearr_18791_18848 = state_18777__$1;
(statearr_18791_18848[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (21))){
var inst_18727 = (state_18777[(12)]);
var inst_18727__$1 = (state_18777[(2)]);
var inst_18728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18727__$1,cljs.core.cst$kw$solos);
var inst_18729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18727__$1,cljs.core.cst$kw$mutes);
var inst_18730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18727__$1,cljs.core.cst$kw$reads);
var state_18777__$1 = (function (){var statearr_18792 = state_18777;
(statearr_18792[(10)] = inst_18728);

(statearr_18792[(13)] = inst_18729);

(statearr_18792[(12)] = inst_18727__$1);

return statearr_18792;
})();
return cljs.core.async.ioc_alts_BANG_(state_18777__$1,(22),inst_18730);
} else {
if((state_val_18778 === (31))){
var inst_18759 = (state_18777[(2)]);
var state_18777__$1 = state_18777;
if(cljs.core.truth_(inst_18759)){
var statearr_18793_18849 = state_18777__$1;
(statearr_18793_18849[(1)] = (32));

} else {
var statearr_18794_18850 = state_18777__$1;
(statearr_18794_18850[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (32))){
var inst_18736 = (state_18777[(14)]);
var state_18777__$1 = state_18777;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18777__$1,(35),out,inst_18736);
} else {
if((state_val_18778 === (33))){
var inst_18727 = (state_18777[(12)]);
var inst_18704 = inst_18727;
var state_18777__$1 = (function (){var statearr_18795 = state_18777;
(statearr_18795[(7)] = inst_18704);

return statearr_18795;
})();
var statearr_18796_18851 = state_18777__$1;
(statearr_18796_18851[(2)] = null);

(statearr_18796_18851[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (13))){
var inst_18704 = (state_18777[(7)]);
var inst_18711 = inst_18704.cljs$lang$protocol_mask$partition0$;
var inst_18712 = (inst_18711 & (64));
var inst_18713 = inst_18704.cljs$core$ISeq$;
var inst_18714 = (cljs.core.PROTOCOL_SENTINEL === inst_18713);
var inst_18715 = ((inst_18712) || (inst_18714));
var state_18777__$1 = state_18777;
if(cljs.core.truth_(inst_18715)){
var statearr_18797_18852 = state_18777__$1;
(statearr_18797_18852[(1)] = (16));

} else {
var statearr_18798_18853 = state_18777__$1;
(statearr_18798_18853[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (22))){
var inst_18736 = (state_18777[(14)]);
var inst_18737 = (state_18777[(11)]);
var inst_18735 = (state_18777[(2)]);
var inst_18736__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18735,(0),null);
var inst_18737__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18735,(1),null);
var inst_18738 = (inst_18736__$1 == null);
var inst_18739 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18737__$1,change);
var inst_18740 = ((inst_18738) || (inst_18739));
var state_18777__$1 = (function (){var statearr_18799 = state_18777;
(statearr_18799[(14)] = inst_18736__$1);

(statearr_18799[(11)] = inst_18737__$1);

return statearr_18799;
})();
if(cljs.core.truth_(inst_18740)){
var statearr_18800_18854 = state_18777__$1;
(statearr_18800_18854[(1)] = (23));

} else {
var statearr_18801_18855 = state_18777__$1;
(statearr_18801_18855[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (36))){
var inst_18727 = (state_18777[(12)]);
var inst_18704 = inst_18727;
var state_18777__$1 = (function (){var statearr_18802 = state_18777;
(statearr_18802[(7)] = inst_18704);

return statearr_18802;
})();
var statearr_18803_18856 = state_18777__$1;
(statearr_18803_18856[(2)] = null);

(statearr_18803_18856[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (29))){
var inst_18751 = (state_18777[(9)]);
var state_18777__$1 = state_18777;
var statearr_18804_18857 = state_18777__$1;
(statearr_18804_18857[(2)] = inst_18751);

(statearr_18804_18857[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (6))){
var state_18777__$1 = state_18777;
var statearr_18805_18858 = state_18777__$1;
(statearr_18805_18858[(2)] = false);

(statearr_18805_18858[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (28))){
var inst_18747 = (state_18777[(2)]);
var inst_18748 = calc_state();
var inst_18704 = inst_18748;
var state_18777__$1 = (function (){var statearr_18806 = state_18777;
(statearr_18806[(15)] = inst_18747);

(statearr_18806[(7)] = inst_18704);

return statearr_18806;
})();
var statearr_18807_18859 = state_18777__$1;
(statearr_18807_18859[(2)] = null);

(statearr_18807_18859[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (25))){
var inst_18773 = (state_18777[(2)]);
var state_18777__$1 = state_18777;
var statearr_18808_18860 = state_18777__$1;
(statearr_18808_18860[(2)] = inst_18773);

(statearr_18808_18860[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (34))){
var inst_18771 = (state_18777[(2)]);
var state_18777__$1 = state_18777;
var statearr_18809_18861 = state_18777__$1;
(statearr_18809_18861[(2)] = inst_18771);

(statearr_18809_18861[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (17))){
var state_18777__$1 = state_18777;
var statearr_18810_18862 = state_18777__$1;
(statearr_18810_18862[(2)] = false);

(statearr_18810_18862[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (3))){
var state_18777__$1 = state_18777;
var statearr_18811_18863 = state_18777__$1;
(statearr_18811_18863[(2)] = false);

(statearr_18811_18863[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (12))){
var inst_18775 = (state_18777[(2)]);
var state_18777__$1 = state_18777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18777__$1,inst_18775);
} else {
if((state_val_18778 === (2))){
var inst_18679 = (state_18777[(8)]);
var inst_18684 = inst_18679.cljs$lang$protocol_mask$partition0$;
var inst_18685 = (inst_18684 & (64));
var inst_18686 = inst_18679.cljs$core$ISeq$;
var inst_18687 = (cljs.core.PROTOCOL_SENTINEL === inst_18686);
var inst_18688 = ((inst_18685) || (inst_18687));
var state_18777__$1 = state_18777;
if(cljs.core.truth_(inst_18688)){
var statearr_18812_18864 = state_18777__$1;
(statearr_18812_18864[(1)] = (5));

} else {
var statearr_18813_18865 = state_18777__$1;
(statearr_18813_18865[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (23))){
var inst_18736 = (state_18777[(14)]);
var inst_18742 = (inst_18736 == null);
var state_18777__$1 = state_18777;
if(cljs.core.truth_(inst_18742)){
var statearr_18814_18866 = state_18777__$1;
(statearr_18814_18866[(1)] = (26));

} else {
var statearr_18815_18867 = state_18777__$1;
(statearr_18815_18867[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (35))){
var inst_18762 = (state_18777[(2)]);
var state_18777__$1 = state_18777;
if(cljs.core.truth_(inst_18762)){
var statearr_18816_18868 = state_18777__$1;
(statearr_18816_18868[(1)] = (36));

} else {
var statearr_18817_18869 = state_18777__$1;
(statearr_18817_18869[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (19))){
var inst_18704 = (state_18777[(7)]);
var inst_18724 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18704);
var state_18777__$1 = state_18777;
var statearr_18818_18870 = state_18777__$1;
(statearr_18818_18870[(2)] = inst_18724);

(statearr_18818_18870[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (11))){
var inst_18704 = (state_18777[(7)]);
var inst_18708 = (inst_18704 == null);
var inst_18709 = cljs.core.not(inst_18708);
var state_18777__$1 = state_18777;
if(inst_18709){
var statearr_18819_18871 = state_18777__$1;
(statearr_18819_18871[(1)] = (13));

} else {
var statearr_18820_18872 = state_18777__$1;
(statearr_18820_18872[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (9))){
var inst_18679 = (state_18777[(8)]);
var state_18777__$1 = state_18777;
var statearr_18821_18873 = state_18777__$1;
(statearr_18821_18873[(2)] = inst_18679);

(statearr_18821_18873[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (5))){
var state_18777__$1 = state_18777;
var statearr_18822_18874 = state_18777__$1;
(statearr_18822_18874[(2)] = true);

(statearr_18822_18874[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (14))){
var state_18777__$1 = state_18777;
var statearr_18823_18875 = state_18777__$1;
(statearr_18823_18875[(2)] = false);

(statearr_18823_18875[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (26))){
var inst_18737 = (state_18777[(11)]);
var inst_18744 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18737);
var state_18777__$1 = state_18777;
var statearr_18824_18876 = state_18777__$1;
(statearr_18824_18876[(2)] = inst_18744);

(statearr_18824_18876[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (16))){
var state_18777__$1 = state_18777;
var statearr_18825_18877 = state_18777__$1;
(statearr_18825_18877[(2)] = true);

(statearr_18825_18877[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (38))){
var inst_18767 = (state_18777[(2)]);
var state_18777__$1 = state_18777;
var statearr_18826_18878 = state_18777__$1;
(statearr_18826_18878[(2)] = inst_18767);

(statearr_18826_18878[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (30))){
var inst_18728 = (state_18777[(10)]);
var inst_18729 = (state_18777[(13)]);
var inst_18737 = (state_18777[(11)]);
var inst_18754 = cljs.core.empty_QMARK_(inst_18728);
var inst_18755 = (inst_18729.cljs$core$IFn$_invoke$arity$1 ? inst_18729.cljs$core$IFn$_invoke$arity$1(inst_18737) : inst_18729.call(null,inst_18737));
var inst_18756 = cljs.core.not(inst_18755);
var inst_18757 = ((inst_18754) && (inst_18756));
var state_18777__$1 = state_18777;
var statearr_18827_18879 = state_18777__$1;
(statearr_18827_18879[(2)] = inst_18757);

(statearr_18827_18879[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (10))){
var inst_18679 = (state_18777[(8)]);
var inst_18700 = (state_18777[(2)]);
var inst_18701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18700,cljs.core.cst$kw$solos);
var inst_18702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18700,cljs.core.cst$kw$mutes);
var inst_18703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18700,cljs.core.cst$kw$reads);
var inst_18704 = inst_18679;
var state_18777__$1 = (function (){var statearr_18828 = state_18777;
(statearr_18828[(16)] = inst_18701);

(statearr_18828[(17)] = inst_18702);

(statearr_18828[(7)] = inst_18704);

(statearr_18828[(18)] = inst_18703);

return statearr_18828;
})();
var statearr_18829_18880 = state_18777__$1;
(statearr_18829_18880[(2)] = null);

(statearr_18829_18880[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (18))){
var inst_18719 = (state_18777[(2)]);
var state_18777__$1 = state_18777;
var statearr_18830_18881 = state_18777__$1;
(statearr_18830_18881[(2)] = inst_18719);

(statearr_18830_18881[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (37))){
var state_18777__$1 = state_18777;
var statearr_18831_18882 = state_18777__$1;
(statearr_18831_18882[(2)] = null);

(statearr_18831_18882[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18778 === (8))){
var inst_18679 = (state_18777[(8)]);
var inst_18697 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18679);
var state_18777__$1 = state_18777;
var statearr_18832_18883 = state_18777__$1;
(statearr_18832_18883[(2)] = inst_18697);

(statearr_18832_18883[(1)] = (10));


return cljs.core.cst$kw$recur;
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
}
}
}
});})(c__15910__auto___18837,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15727__auto__,c__15910__auto___18837,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15728__auto__ = null;
var cljs$core$async$mix_$_state_machine__15728__auto____0 = (function (){
var statearr_18833 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18833[(0)] = cljs$core$async$mix_$_state_machine__15728__auto__);

(statearr_18833[(1)] = (1));

return statearr_18833;
});
var cljs$core$async$mix_$_state_machine__15728__auto____1 = (function (state_18777){
while(true){
var ret_value__15729__auto__ = (function (){try{while(true){
var result__15730__auto__ = switch__15727__auto__(state_18777);
if(cljs.core.keyword_identical_QMARK_(result__15730__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15730__auto__;
}
break;
}
}catch (e18834){if((e18834 instanceof Object)){
var ex__15731__auto__ = e18834;
var statearr_18835_18884 = state_18777;
(statearr_18835_18884[(5)] = ex__15731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18777);

return cljs.core.cst$kw$recur;
} else {
throw e18834;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15729__auto__,cljs.core.cst$kw$recur)){
var G__18885 = state_18777;
state_18777 = G__18885;
continue;
} else {
return ret_value__15729__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15728__auto__ = function(state_18777){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15728__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15728__auto____1.call(this,state_18777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15728__auto____0;
cljs$core$async$mix_$_state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15728__auto____1;
return cljs$core$async$mix_$_state_machine__15728__auto__;
})()
;})(switch__15727__auto__,c__15910__auto___18837,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15912__auto__ = (function (){var statearr_18836 = (f__15911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15911__auto__.cljs$core$IFn$_invoke$arity$0() : f__15911__auto__.call(null));
(statearr_18836[(6)] = c__15910__auto___18837);

return statearr_18836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15912__auto__);
});})(c__15910__auto___18837,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto__.call(null,p,v,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18887 = arguments.length;
switch (G__18887) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto__.call(null,p));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto__.call(null,p,v));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__18891 = arguments.length;
switch (G__18891) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3949__auto__,mults){
return (function (p1__18889_SHARP_){
if(cljs.core.truth_((p1__18889_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18889_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18889_SHARP_.call(null,topic)))){
return p1__18889_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18889_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18892 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18892 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18893){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18893 = meta18893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18894,meta18893__$1){
var self__ = this;
var _18894__$1 = this;
return (new cljs.core.async.t_cljs$core$async18892(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18893__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18892.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18894){
var self__ = this;
var _18894__$1 = this;
return self__.meta18893;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18892.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18892.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18892.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18892.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18892.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18892.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18892.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18892.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta18893], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18892.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18892.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18892";

cljs.core.async.t_cljs$core$async18892.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18892");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18892.
 */
cljs.core.async.__GT_t_cljs$core$async18892 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18892(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18893){
return (new cljs.core.async.t_cljs$core$async18892(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18893));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18892(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15910__auto___19012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15910__auto___19012,mults,ensure_mult,p){
return (function (){
var f__15911__auto__ = (function (){var switch__15727__auto__ = ((function (c__15910__auto___19012,mults,ensure_mult,p){
return (function (state_18966){
var state_val_18967 = (state_18966[(1)]);
if((state_val_18967 === (7))){
var inst_18962 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
var statearr_18968_19013 = state_18966__$1;
(statearr_18968_19013[(2)] = inst_18962);

(statearr_18968_19013[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18967 === (20))){
var state_18966__$1 = state_18966;
var statearr_18969_19014 = state_18966__$1;
(statearr_18969_19014[(2)] = null);

(statearr_18969_19014[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18967 === (1))){
var state_18966__$1 = state_18966;
var statearr_18970_19015 = state_18966__$1;
(statearr_18970_19015[(2)] = null);

(statearr_18970_19015[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18967 === (24))){
var inst_18945 = (state_18966[(7)]);
var inst_18954 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18945);
var state_18966__$1 = state_18966;
var statearr_18971_19016 = state_18966__$1;
(statearr_18971_19016[(2)] = inst_18954);

(statearr_18971_19016[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18967 === (4))){
var inst_18897 = (state_18966[(8)]);
var inst_18897__$1 = (state_18966[(2)]);
var inst_18898 = (inst_18897__$1 == null);
var state_18966__$1 = (function (){var statearr_18972 = state_18966;
(statearr_18972[(8)] = inst_18897__$1);

return statearr_18972;
})();
if(cljs.core.truth_(inst_18898)){
var statearr_18973_19017 = state_18966__$1;
(statearr_18973_19017[(1)] = (5));

} else {
var statearr_18974_19018 = state_18966__$1;
(statearr_18974_19018[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18967 === (15))){
var inst_18939 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
var statearr_18975_19019 = state_18966__$1;
(statearr_18975_19019[(2)] = inst_18939);

(statearr_18975_19019[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18967 === (21))){
var inst_18959 = (state_18966[(2)]);
var state_18966__$1 = (function (){var statearr_18976 = state_18966;
(statearr_18976[(9)] = inst_18959);

return statearr_18976;
})();
var statearr_18977_19020 = state_18966__$1;
(statearr_18977_19020[(2)] = null);

(statearr_18977_19020[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18967 === (13))){
var inst_18921 = (state_18966[(10)]);
var inst_18923 = cljs.core.chunked_seq_QMARK_(inst_18921);
var state_18966__$1 = state_18966;
if(inst_18923){
var statearr_18978_19021 = state_18966__$1;
(statearr_18978_19021[(1)] = (16));

} else {
var statearr_18979_19022 = state_18966__$1;
(statearr_18979_19022[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18967 === (22))){
var inst_18951 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
if(cljs.core.truth_(inst_18951)){
var statearr_18980_19023 = state_18966__$1;
(statearr_18980_19023[(1)] = (23));

} else {
var statearr_18981_19024 = state_18966__$1;
(statearr_18981_19024[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18967 === (6))){
var inst_18945 = (state_18966[(7)]);
var inst_18947 = (state_18966[(11)]);
var inst_18897 = (state_18966[(8)]);
var inst_18945__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18897) : topic_fn.call(null,inst_18897));
var inst_18946 = cljs.core.deref(mults);
var inst_18947__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18946,inst_18945__$1);
var state_18966__$1 = (function (){var statearr_18982 = state_18966;
(statearr_18982[(7)] = inst_18945__$1);

(statearr_18982[(11)] = inst_18947__$1);

return statearr_18982;
})();
if(cljs.core.truth_(inst_18947__$1)){
var statearr_18983_19025 = state_18966__$1;
(statearr_18983_19025[(1)] = (19));

} else {
var statearr_18984_19026 = state_18966__$1;
(statearr_18984_19026[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18967 === (25))){
var inst_18956 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
var statearr_18985_19027 = state_18966__$1;
(statearr_18985_19027[(2)] = inst_18956);

(statearr_18985_19027[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18967 === (17))){
var inst_18921 = (state_18966[(10)]);
var inst_18930 = cljs.core.first(inst_18921);
var inst_18931 = cljs.core.async.muxch_STAR_(inst_18930);
var inst_18932 = cljs.core.async.close_BANG_(inst_18931);
var inst_18933 = cljs.core.next(inst_18921);
var inst_18907 = inst_18933;
var inst_18908 = null;
var inst_18909 = (0);
var inst_18910 = (0);
var state_18966__$1 = (function (){var statearr_18986 = state_18966;
(statearr_18986[(12)] = inst_18932);

(statearr_18986[(13)] = inst_18909);

(statearr_18986[(14)] = inst_18910);

(statearr_18986[(15)] = inst_18907);

(statearr_18986[(16)] = inst_18908);

return statearr_18986;
})();
var statearr_18987_19028 = state_18966__$1;
(statearr_18987_19028[(2)] = null);

(statearr_18987_19028[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18967 === (3))){
var inst_18964 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18966__$1,inst_18964);
} else {
if((state_val_18967 === (12))){
var inst_18941 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
var statearr_18988_19029 = state_18966__$1;
(statearr_18988_19029[(2)] = inst_18941);

(statearr_18988_19029[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18967 === (2))){
var state_18966__$1 = state_18966;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18966__$1,(4),ch);
} else {
if((state_val_18967 === (23))){
var state_18966__$1 = state_18966;
var statearr_18989_19030 = state_18966__$1;
(statearr_18989_19030[(2)] = null);

(statearr_18989_19030[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18967 === (19))){
var inst_18947 = (state_18966[(11)]);
var inst_18897 = (state_18966[(8)]);
var inst_18949 = cljs.core.async.muxch_STAR_(inst_18947);
var state_18966__$1 = state_18966;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18966__$1,(22),inst_18949,inst_18897);
} else {
if((state_val_18967 === (11))){
var inst_18907 = (state_18966[(15)]);
var inst_18921 = (state_18966[(10)]);
var inst_18921__$1 = cljs.core.seq(inst_18907);
var state_18966__$1 = (function (){var statearr_18990 = state_18966;
(statearr_18990[(10)] = inst_18921__$1);

return statearr_18990;
})();
if(inst_18921__$1){
var statearr_18991_19031 = state_18966__$1;
(statearr_18991_19031[(1)] = (13));

} else {
var statearr_18992_19032 = state_18966__$1;
(statearr_18992_19032[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18967 === (9))){
var inst_18943 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
var statearr_18993_19033 = state_18966__$1;
(statearr_18993_19033[(2)] = inst_18943);

(statearr_18993_19033[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18967 === (5))){
var inst_18904 = cljs.core.deref(mults);
var inst_18905 = cljs.core.vals(inst_18904);
var inst_18906 = cljs.core.seq(inst_18905);
var inst_18907 = inst_18906;
var inst_18908 = null;
var inst_18909 = (0);
var inst_18910 = (0);
var state_18966__$1 = (function (){var statearr_18994 = state_18966;
(statearr_18994[(13)] = inst_18909);

(statearr_18994[(14)] = inst_18910);

(statearr_18994[(15)] = inst_18907);

(statearr_18994[(16)] = inst_18908);

return statearr_18994;
})();
var statearr_18995_19034 = state_18966__$1;
(statearr_18995_19034[(2)] = null);

(statearr_18995_19034[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18967 === (14))){
var state_18966__$1 = state_18966;
var statearr_18999_19035 = state_18966__$1;
(statearr_18999_19035[(2)] = null);

(statearr_18999_19035[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18967 === (16))){
var inst_18921 = (state_18966[(10)]);
var inst_18925 = cljs.core.chunk_first(inst_18921);
var inst_18926 = cljs.core.chunk_rest(inst_18921);
var inst_18927 = cljs.core.count(inst_18925);
var inst_18907 = inst_18926;
var inst_18908 = inst_18925;
var inst_18909 = inst_18927;
var inst_18910 = (0);
var state_18966__$1 = (function (){var statearr_19000 = state_18966;
(statearr_19000[(13)] = inst_18909);

(statearr_19000[(14)] = inst_18910);

(statearr_19000[(15)] = inst_18907);

(statearr_19000[(16)] = inst_18908);

return statearr_19000;
})();
var statearr_19001_19036 = state_18966__$1;
(statearr_19001_19036[(2)] = null);

(statearr_19001_19036[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18967 === (10))){
var inst_18909 = (state_18966[(13)]);
var inst_18910 = (state_18966[(14)]);
var inst_18907 = (state_18966[(15)]);
var inst_18908 = (state_18966[(16)]);
var inst_18915 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18908,inst_18910);
var inst_18916 = cljs.core.async.muxch_STAR_(inst_18915);
var inst_18917 = cljs.core.async.close_BANG_(inst_18916);
var inst_18918 = (inst_18910 + (1));
var tmp18996 = inst_18909;
var tmp18997 = inst_18907;
var tmp18998 = inst_18908;
var inst_18907__$1 = tmp18997;
var inst_18908__$1 = tmp18998;
var inst_18909__$1 = tmp18996;
var inst_18910__$1 = inst_18918;
var state_18966__$1 = (function (){var statearr_19002 = state_18966;
(statearr_19002[(13)] = inst_18909__$1);

(statearr_19002[(17)] = inst_18917);

(statearr_19002[(14)] = inst_18910__$1);

(statearr_19002[(15)] = inst_18907__$1);

(statearr_19002[(16)] = inst_18908__$1);

return statearr_19002;
})();
var statearr_19003_19037 = state_18966__$1;
(statearr_19003_19037[(2)] = null);

(statearr_19003_19037[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18967 === (18))){
var inst_18936 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
var statearr_19004_19038 = state_18966__$1;
(statearr_19004_19038[(2)] = inst_18936);

(statearr_19004_19038[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18967 === (8))){
var inst_18909 = (state_18966[(13)]);
var inst_18910 = (state_18966[(14)]);
var inst_18912 = (inst_18910 < inst_18909);
var inst_18913 = inst_18912;
var state_18966__$1 = state_18966;
if(cljs.core.truth_(inst_18913)){
var statearr_19005_19039 = state_18966__$1;
(statearr_19005_19039[(1)] = (10));

} else {
var statearr_19006_19040 = state_18966__$1;
(statearr_19006_19040[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__15910__auto___19012,mults,ensure_mult,p))
;
return ((function (switch__15727__auto__,c__15910__auto___19012,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15728__auto__ = null;
var cljs$core$async$state_machine__15728__auto____0 = (function (){
var statearr_19007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19007[(0)] = cljs$core$async$state_machine__15728__auto__);

(statearr_19007[(1)] = (1));

return statearr_19007;
});
var cljs$core$async$state_machine__15728__auto____1 = (function (state_18966){
while(true){
var ret_value__15729__auto__ = (function (){try{while(true){
var result__15730__auto__ = switch__15727__auto__(state_18966);
if(cljs.core.keyword_identical_QMARK_(result__15730__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15730__auto__;
}
break;
}
}catch (e19008){if((e19008 instanceof Object)){
var ex__15731__auto__ = e19008;
var statearr_19009_19041 = state_18966;
(statearr_19009_19041[(5)] = ex__15731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18966);

return cljs.core.cst$kw$recur;
} else {
throw e19008;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15729__auto__,cljs.core.cst$kw$recur)){
var G__19042 = state_18966;
state_18966 = G__19042;
continue;
} else {
return ret_value__15729__auto__;
}
break;
}
});
cljs$core$async$state_machine__15728__auto__ = function(state_18966){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15728__auto____1.call(this,state_18966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15728__auto____0;
cljs$core$async$state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15728__auto____1;
return cljs$core$async$state_machine__15728__auto__;
})()
;})(switch__15727__auto__,c__15910__auto___19012,mults,ensure_mult,p))
})();
var state__15912__auto__ = (function (){var statearr_19010 = (f__15911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15911__auto__.cljs$core$IFn$_invoke$arity$0() : f__15911__auto__.call(null));
(statearr_19010[(6)] = c__15910__auto___19012);

return statearr_19010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15912__auto__);
});})(c__15910__auto___19012,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19044 = arguments.length;
switch (G__19044) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__19047 = arguments.length;
switch (G__19047) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__19050 = arguments.length;
switch (G__19050) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__15910__auto___19117 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15910__auto___19117,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15911__auto__ = (function (){var switch__15727__auto__ = ((function (c__15910__auto___19117,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19089){
var state_val_19090 = (state_19089[(1)]);
if((state_val_19090 === (7))){
var state_19089__$1 = state_19089;
var statearr_19091_19118 = state_19089__$1;
(statearr_19091_19118[(2)] = null);

(statearr_19091_19118[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19090 === (1))){
var state_19089__$1 = state_19089;
var statearr_19092_19119 = state_19089__$1;
(statearr_19092_19119[(2)] = null);

(statearr_19092_19119[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19090 === (4))){
var inst_19053 = (state_19089[(7)]);
var inst_19055 = (inst_19053 < cnt);
var state_19089__$1 = state_19089;
if(cljs.core.truth_(inst_19055)){
var statearr_19093_19120 = state_19089__$1;
(statearr_19093_19120[(1)] = (6));

} else {
var statearr_19094_19121 = state_19089__$1;
(statearr_19094_19121[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19090 === (15))){
var inst_19085 = (state_19089[(2)]);
var state_19089__$1 = state_19089;
var statearr_19095_19122 = state_19089__$1;
(statearr_19095_19122[(2)] = inst_19085);

(statearr_19095_19122[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19090 === (13))){
var inst_19078 = cljs.core.async.close_BANG_(out);
var state_19089__$1 = state_19089;
var statearr_19096_19123 = state_19089__$1;
(statearr_19096_19123[(2)] = inst_19078);

(statearr_19096_19123[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19090 === (6))){
var state_19089__$1 = state_19089;
var statearr_19097_19124 = state_19089__$1;
(statearr_19097_19124[(2)] = null);

(statearr_19097_19124[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19090 === (3))){
var inst_19087 = (state_19089[(2)]);
var state_19089__$1 = state_19089;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19089__$1,inst_19087);
} else {
if((state_val_19090 === (12))){
var inst_19075 = (state_19089[(8)]);
var inst_19075__$1 = (state_19089[(2)]);
var inst_19076 = cljs.core.some(cljs.core.nil_QMARK_,inst_19075__$1);
var state_19089__$1 = (function (){var statearr_19098 = state_19089;
(statearr_19098[(8)] = inst_19075__$1);

return statearr_19098;
})();
if(cljs.core.truth_(inst_19076)){
var statearr_19099_19125 = state_19089__$1;
(statearr_19099_19125[(1)] = (13));

} else {
var statearr_19100_19126 = state_19089__$1;
(statearr_19100_19126[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19090 === (2))){
var inst_19052 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19053 = (0);
var state_19089__$1 = (function (){var statearr_19101 = state_19089;
(statearr_19101[(7)] = inst_19053);

(statearr_19101[(9)] = inst_19052);

return statearr_19101;
})();
var statearr_19102_19127 = state_19089__$1;
(statearr_19102_19127[(2)] = null);

(statearr_19102_19127[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19090 === (11))){
var inst_19053 = (state_19089[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19089,(10),Object,null,(9));
var inst_19062 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19053) : chs__$1.call(null,inst_19053));
var inst_19063 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19053) : done.call(null,inst_19053));
var inst_19064 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19062,inst_19063);
var state_19089__$1 = state_19089;
var statearr_19103_19128 = state_19089__$1;
(statearr_19103_19128[(2)] = inst_19064);


cljs.core.async.impl.ioc_helpers.process_exception(state_19089__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19090 === (9))){
var inst_19053 = (state_19089[(7)]);
var inst_19066 = (state_19089[(2)]);
var inst_19067 = (inst_19053 + (1));
var inst_19053__$1 = inst_19067;
var state_19089__$1 = (function (){var statearr_19104 = state_19089;
(statearr_19104[(7)] = inst_19053__$1);

(statearr_19104[(10)] = inst_19066);

return statearr_19104;
})();
var statearr_19105_19129 = state_19089__$1;
(statearr_19105_19129[(2)] = null);

(statearr_19105_19129[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19090 === (5))){
var inst_19073 = (state_19089[(2)]);
var state_19089__$1 = (function (){var statearr_19106 = state_19089;
(statearr_19106[(11)] = inst_19073);

return statearr_19106;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19089__$1,(12),dchan);
} else {
if((state_val_19090 === (14))){
var inst_19075 = (state_19089[(8)]);
var inst_19080 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19075);
var state_19089__$1 = state_19089;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19089__$1,(16),out,inst_19080);
} else {
if((state_val_19090 === (16))){
var inst_19082 = (state_19089[(2)]);
var state_19089__$1 = (function (){var statearr_19107 = state_19089;
(statearr_19107[(12)] = inst_19082);

return statearr_19107;
})();
var statearr_19108_19130 = state_19089__$1;
(statearr_19108_19130[(2)] = null);

(statearr_19108_19130[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19090 === (10))){
var inst_19057 = (state_19089[(2)]);
var inst_19058 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19089__$1 = (function (){var statearr_19109 = state_19089;
(statearr_19109[(13)] = inst_19057);

return statearr_19109;
})();
var statearr_19110_19131 = state_19089__$1;
(statearr_19110_19131[(2)] = inst_19058);


cljs.core.async.impl.ioc_helpers.process_exception(state_19089__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19090 === (8))){
var inst_19071 = (state_19089[(2)]);
var state_19089__$1 = state_19089;
var statearr_19111_19132 = state_19089__$1;
(statearr_19111_19132[(2)] = inst_19071);

(statearr_19111_19132[(1)] = (5));


return cljs.core.cst$kw$recur;
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
}
}
}
}
}
}
}
});})(c__15910__auto___19117,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15727__auto__,c__15910__auto___19117,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15728__auto__ = null;
var cljs$core$async$state_machine__15728__auto____0 = (function (){
var statearr_19112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19112[(0)] = cljs$core$async$state_machine__15728__auto__);

(statearr_19112[(1)] = (1));

return statearr_19112;
});
var cljs$core$async$state_machine__15728__auto____1 = (function (state_19089){
while(true){
var ret_value__15729__auto__ = (function (){try{while(true){
var result__15730__auto__ = switch__15727__auto__(state_19089);
if(cljs.core.keyword_identical_QMARK_(result__15730__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15730__auto__;
}
break;
}
}catch (e19113){if((e19113 instanceof Object)){
var ex__15731__auto__ = e19113;
var statearr_19114_19133 = state_19089;
(statearr_19114_19133[(5)] = ex__15731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19089);

return cljs.core.cst$kw$recur;
} else {
throw e19113;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15729__auto__,cljs.core.cst$kw$recur)){
var G__19134 = state_19089;
state_19089 = G__19134;
continue;
} else {
return ret_value__15729__auto__;
}
break;
}
});
cljs$core$async$state_machine__15728__auto__ = function(state_19089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15728__auto____1.call(this,state_19089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15728__auto____0;
cljs$core$async$state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15728__auto____1;
return cljs$core$async$state_machine__15728__auto__;
})()
;})(switch__15727__auto__,c__15910__auto___19117,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15912__auto__ = (function (){var statearr_19115 = (f__15911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15911__auto__.cljs$core$IFn$_invoke$arity$0() : f__15911__auto__.call(null));
(statearr_19115[(6)] = c__15910__auto___19117);

return statearr_19115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15912__auto__);
});})(c__15910__auto___19117,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19137 = arguments.length;
switch (G__19137) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15910__auto___19191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15910__auto___19191,out){
return (function (){
var f__15911__auto__ = (function (){var switch__15727__auto__ = ((function (c__15910__auto___19191,out){
return (function (state_19169){
var state_val_19170 = (state_19169[(1)]);
if((state_val_19170 === (7))){
var inst_19148 = (state_19169[(7)]);
var inst_19149 = (state_19169[(8)]);
var inst_19148__$1 = (state_19169[(2)]);
var inst_19149__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19148__$1,(0),null);
var inst_19150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19148__$1,(1),null);
var inst_19151 = (inst_19149__$1 == null);
var state_19169__$1 = (function (){var statearr_19171 = state_19169;
(statearr_19171[(9)] = inst_19150);

(statearr_19171[(7)] = inst_19148__$1);

(statearr_19171[(8)] = inst_19149__$1);

return statearr_19171;
})();
if(cljs.core.truth_(inst_19151)){
var statearr_19172_19192 = state_19169__$1;
(statearr_19172_19192[(1)] = (8));

} else {
var statearr_19173_19193 = state_19169__$1;
(statearr_19173_19193[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19170 === (1))){
var inst_19138 = cljs.core.vec(chs);
var inst_19139 = inst_19138;
var state_19169__$1 = (function (){var statearr_19174 = state_19169;
(statearr_19174[(10)] = inst_19139);

return statearr_19174;
})();
var statearr_19175_19194 = state_19169__$1;
(statearr_19175_19194[(2)] = null);

(statearr_19175_19194[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19170 === (4))){
var inst_19139 = (state_19169[(10)]);
var state_19169__$1 = state_19169;
return cljs.core.async.ioc_alts_BANG_(state_19169__$1,(7),inst_19139);
} else {
if((state_val_19170 === (6))){
var inst_19165 = (state_19169[(2)]);
var state_19169__$1 = state_19169;
var statearr_19176_19195 = state_19169__$1;
(statearr_19176_19195[(2)] = inst_19165);

(statearr_19176_19195[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19170 === (3))){
var inst_19167 = (state_19169[(2)]);
var state_19169__$1 = state_19169;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19169__$1,inst_19167);
} else {
if((state_val_19170 === (2))){
var inst_19139 = (state_19169[(10)]);
var inst_19141 = cljs.core.count(inst_19139);
var inst_19142 = (inst_19141 > (0));
var state_19169__$1 = state_19169;
if(cljs.core.truth_(inst_19142)){
var statearr_19178_19196 = state_19169__$1;
(statearr_19178_19196[(1)] = (4));

} else {
var statearr_19179_19197 = state_19169__$1;
(statearr_19179_19197[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19170 === (11))){
var inst_19139 = (state_19169[(10)]);
var inst_19158 = (state_19169[(2)]);
var tmp19177 = inst_19139;
var inst_19139__$1 = tmp19177;
var state_19169__$1 = (function (){var statearr_19180 = state_19169;
(statearr_19180[(10)] = inst_19139__$1);

(statearr_19180[(11)] = inst_19158);

return statearr_19180;
})();
var statearr_19181_19198 = state_19169__$1;
(statearr_19181_19198[(2)] = null);

(statearr_19181_19198[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19170 === (9))){
var inst_19149 = (state_19169[(8)]);
var state_19169__$1 = state_19169;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19169__$1,(11),out,inst_19149);
} else {
if((state_val_19170 === (5))){
var inst_19163 = cljs.core.async.close_BANG_(out);
var state_19169__$1 = state_19169;
var statearr_19182_19199 = state_19169__$1;
(statearr_19182_19199[(2)] = inst_19163);

(statearr_19182_19199[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19170 === (10))){
var inst_19161 = (state_19169[(2)]);
var state_19169__$1 = state_19169;
var statearr_19183_19200 = state_19169__$1;
(statearr_19183_19200[(2)] = inst_19161);

(statearr_19183_19200[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19170 === (8))){
var inst_19150 = (state_19169[(9)]);
var inst_19139 = (state_19169[(10)]);
var inst_19148 = (state_19169[(7)]);
var inst_19149 = (state_19169[(8)]);
var inst_19153 = (function (){var cs = inst_19139;
var vec__19144 = inst_19148;
var v = inst_19149;
var c = inst_19150;
return ((function (cs,vec__19144,v,c,inst_19150,inst_19139,inst_19148,inst_19149,state_val_19170,c__15910__auto___19191,out){
return (function (p1__19135_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19135_SHARP_);
});
;})(cs,vec__19144,v,c,inst_19150,inst_19139,inst_19148,inst_19149,state_val_19170,c__15910__auto___19191,out))
})();
var inst_19154 = cljs.core.filterv(inst_19153,inst_19139);
var inst_19139__$1 = inst_19154;
var state_19169__$1 = (function (){var statearr_19184 = state_19169;
(statearr_19184[(10)] = inst_19139__$1);

return statearr_19184;
})();
var statearr_19185_19201 = state_19169__$1;
(statearr_19185_19201[(2)] = null);

(statearr_19185_19201[(1)] = (2));


return cljs.core.cst$kw$recur;
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
}
}
});})(c__15910__auto___19191,out))
;
return ((function (switch__15727__auto__,c__15910__auto___19191,out){
return (function() {
var cljs$core$async$state_machine__15728__auto__ = null;
var cljs$core$async$state_machine__15728__auto____0 = (function (){
var statearr_19186 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19186[(0)] = cljs$core$async$state_machine__15728__auto__);

(statearr_19186[(1)] = (1));

return statearr_19186;
});
var cljs$core$async$state_machine__15728__auto____1 = (function (state_19169){
while(true){
var ret_value__15729__auto__ = (function (){try{while(true){
var result__15730__auto__ = switch__15727__auto__(state_19169);
if(cljs.core.keyword_identical_QMARK_(result__15730__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15730__auto__;
}
break;
}
}catch (e19187){if((e19187 instanceof Object)){
var ex__15731__auto__ = e19187;
var statearr_19188_19202 = state_19169;
(statearr_19188_19202[(5)] = ex__15731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19169);

return cljs.core.cst$kw$recur;
} else {
throw e19187;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15729__auto__,cljs.core.cst$kw$recur)){
var G__19203 = state_19169;
state_19169 = G__19203;
continue;
} else {
return ret_value__15729__auto__;
}
break;
}
});
cljs$core$async$state_machine__15728__auto__ = function(state_19169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15728__auto____1.call(this,state_19169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15728__auto____0;
cljs$core$async$state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15728__auto____1;
return cljs$core$async$state_machine__15728__auto__;
})()
;})(switch__15727__auto__,c__15910__auto___19191,out))
})();
var state__15912__auto__ = (function (){var statearr_19189 = (f__15911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15911__auto__.cljs$core$IFn$_invoke$arity$0() : f__15911__auto__.call(null));
(statearr_19189[(6)] = c__15910__auto___19191);

return statearr_19189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15912__auto__);
});})(c__15910__auto___19191,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19205 = arguments.length;
switch (G__19205) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15910__auto___19250 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15910__auto___19250,out){
return (function (){
var f__15911__auto__ = (function (){var switch__15727__auto__ = ((function (c__15910__auto___19250,out){
return (function (state_19229){
var state_val_19230 = (state_19229[(1)]);
if((state_val_19230 === (7))){
var inst_19211 = (state_19229[(7)]);
var inst_19211__$1 = (state_19229[(2)]);
var inst_19212 = (inst_19211__$1 == null);
var inst_19213 = cljs.core.not(inst_19212);
var state_19229__$1 = (function (){var statearr_19231 = state_19229;
(statearr_19231[(7)] = inst_19211__$1);

return statearr_19231;
})();
if(inst_19213){
var statearr_19232_19251 = state_19229__$1;
(statearr_19232_19251[(1)] = (8));

} else {
var statearr_19233_19252 = state_19229__$1;
(statearr_19233_19252[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19230 === (1))){
var inst_19206 = (0);
var state_19229__$1 = (function (){var statearr_19234 = state_19229;
(statearr_19234[(8)] = inst_19206);

return statearr_19234;
})();
var statearr_19235_19253 = state_19229__$1;
(statearr_19235_19253[(2)] = null);

(statearr_19235_19253[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19230 === (4))){
var state_19229__$1 = state_19229;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19229__$1,(7),ch);
} else {
if((state_val_19230 === (6))){
var inst_19224 = (state_19229[(2)]);
var state_19229__$1 = state_19229;
var statearr_19236_19254 = state_19229__$1;
(statearr_19236_19254[(2)] = inst_19224);

(statearr_19236_19254[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19230 === (3))){
var inst_19226 = (state_19229[(2)]);
var inst_19227 = cljs.core.async.close_BANG_(out);
var state_19229__$1 = (function (){var statearr_19237 = state_19229;
(statearr_19237[(9)] = inst_19226);

return statearr_19237;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19229__$1,inst_19227);
} else {
if((state_val_19230 === (2))){
var inst_19206 = (state_19229[(8)]);
var inst_19208 = (inst_19206 < n);
var state_19229__$1 = state_19229;
if(cljs.core.truth_(inst_19208)){
var statearr_19238_19255 = state_19229__$1;
(statearr_19238_19255[(1)] = (4));

} else {
var statearr_19239_19256 = state_19229__$1;
(statearr_19239_19256[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19230 === (11))){
var inst_19206 = (state_19229[(8)]);
var inst_19216 = (state_19229[(2)]);
var inst_19217 = (inst_19206 + (1));
var inst_19206__$1 = inst_19217;
var state_19229__$1 = (function (){var statearr_19240 = state_19229;
(statearr_19240[(10)] = inst_19216);

(statearr_19240[(8)] = inst_19206__$1);

return statearr_19240;
})();
var statearr_19241_19257 = state_19229__$1;
(statearr_19241_19257[(2)] = null);

(statearr_19241_19257[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19230 === (9))){
var state_19229__$1 = state_19229;
var statearr_19242_19258 = state_19229__$1;
(statearr_19242_19258[(2)] = null);

(statearr_19242_19258[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19230 === (5))){
var state_19229__$1 = state_19229;
var statearr_19243_19259 = state_19229__$1;
(statearr_19243_19259[(2)] = null);

(statearr_19243_19259[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19230 === (10))){
var inst_19221 = (state_19229[(2)]);
var state_19229__$1 = state_19229;
var statearr_19244_19260 = state_19229__$1;
(statearr_19244_19260[(2)] = inst_19221);

(statearr_19244_19260[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19230 === (8))){
var inst_19211 = (state_19229[(7)]);
var state_19229__$1 = state_19229;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19229__$1,(11),out,inst_19211);
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
}
}
});})(c__15910__auto___19250,out))
;
return ((function (switch__15727__auto__,c__15910__auto___19250,out){
return (function() {
var cljs$core$async$state_machine__15728__auto__ = null;
var cljs$core$async$state_machine__15728__auto____0 = (function (){
var statearr_19245 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19245[(0)] = cljs$core$async$state_machine__15728__auto__);

(statearr_19245[(1)] = (1));

return statearr_19245;
});
var cljs$core$async$state_machine__15728__auto____1 = (function (state_19229){
while(true){
var ret_value__15729__auto__ = (function (){try{while(true){
var result__15730__auto__ = switch__15727__auto__(state_19229);
if(cljs.core.keyword_identical_QMARK_(result__15730__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15730__auto__;
}
break;
}
}catch (e19246){if((e19246 instanceof Object)){
var ex__15731__auto__ = e19246;
var statearr_19247_19261 = state_19229;
(statearr_19247_19261[(5)] = ex__15731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19229);

return cljs.core.cst$kw$recur;
} else {
throw e19246;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15729__auto__,cljs.core.cst$kw$recur)){
var G__19262 = state_19229;
state_19229 = G__19262;
continue;
} else {
return ret_value__15729__auto__;
}
break;
}
});
cljs$core$async$state_machine__15728__auto__ = function(state_19229){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15728__auto____1.call(this,state_19229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15728__auto____0;
cljs$core$async$state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15728__auto____1;
return cljs$core$async$state_machine__15728__auto__;
})()
;})(switch__15727__auto__,c__15910__auto___19250,out))
})();
var state__15912__auto__ = (function (){var statearr_19248 = (f__15911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15911__auto__.cljs$core$IFn$_invoke$arity$0() : f__15911__auto__.call(null));
(statearr_19248[(6)] = c__15910__auto___19250);

return statearr_19248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15912__auto__);
});})(c__15910__auto___19250,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19264 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19264 = (function (f,ch,meta19265){
this.f = f;
this.ch = ch;
this.meta19265 = meta19265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19266,meta19265__$1){
var self__ = this;
var _19266__$1 = this;
return (new cljs.core.async.t_cljs$core$async19264(self__.f,self__.ch,meta19265__$1));
});

cljs.core.async.t_cljs$core$async19264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19266){
var self__ = this;
var _19266__$1 = this;
return self__.meta19265;
});

cljs.core.async.t_cljs$core$async19264.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19264.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19264.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19264.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19264.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19267 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19267 = (function (f,ch,meta19265,_,fn1,meta19268){
this.f = f;
this.ch = ch;
this.meta19265 = meta19265;
this._ = _;
this.fn1 = fn1;
this.meta19268 = meta19268;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19269,meta19268__$1){
var self__ = this;
var _19269__$1 = this;
return (new cljs.core.async.t_cljs$core$async19267(self__.f,self__.ch,self__.meta19265,self__._,self__.fn1,meta19268__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19267.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19269){
var self__ = this;
var _19269__$1 = this;
return self__.meta19268;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19267.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19267.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19267.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19267.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19263_SHARP_){
var G__19270 = (((p1__19263_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19263_SHARP_) : self__.f.call(null,p1__19263_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19270) : f1.call(null,G__19270));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19267.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19265,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async19264], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta19268], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19267.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19267.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19267";

cljs.core.async.t_cljs$core$async19267.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19267");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19267.
 */
cljs.core.async.__GT_t_cljs$core$async19267 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19267(f__$1,ch__$1,meta19265__$1,___$2,fn1__$1,meta19268){
return (new cljs.core.async.t_cljs$core$async19267(f__$1,ch__$1,meta19265__$1,___$2,fn1__$1,meta19268));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19267(self__.f,self__.ch,self__.meta19265,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19271 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19271) : self__.f.call(null,G__19271));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async19264.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19264.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19265], null);
});

cljs.core.async.t_cljs$core$async19264.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19264";

cljs.core.async.t_cljs$core$async19264.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19264");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19264.
 */
cljs.core.async.__GT_t_cljs$core$async19264 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19264(f__$1,ch__$1,meta19265){
return (new cljs.core.async.t_cljs$core$async19264(f__$1,ch__$1,meta19265));
});

}

return (new cljs.core.async.t_cljs$core$async19264(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19272 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19272 = (function (f,ch,meta19273){
this.f = f;
this.ch = ch;
this.meta19273 = meta19273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19274,meta19273__$1){
var self__ = this;
var _19274__$1 = this;
return (new cljs.core.async.t_cljs$core$async19272(self__.f,self__.ch,meta19273__$1));
});

cljs.core.async.t_cljs$core$async19272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19274){
var self__ = this;
var _19274__$1 = this;
return self__.meta19273;
});

cljs.core.async.t_cljs$core$async19272.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19272.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19272.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19272.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19272.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19272.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async19272.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19273], null);
});

cljs.core.async.t_cljs$core$async19272.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19272.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19272";

cljs.core.async.t_cljs$core$async19272.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19272");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19272.
 */
cljs.core.async.__GT_t_cljs$core$async19272 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19272(f__$1,ch__$1,meta19273){
return (new cljs.core.async.t_cljs$core$async19272(f__$1,ch__$1,meta19273));
});

}

return (new cljs.core.async.t_cljs$core$async19272(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19275 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19275 = (function (p,ch,meta19276){
this.p = p;
this.ch = ch;
this.meta19276 = meta19276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19277,meta19276__$1){
var self__ = this;
var _19277__$1 = this;
return (new cljs.core.async.t_cljs$core$async19275(self__.p,self__.ch,meta19276__$1));
});

cljs.core.async.t_cljs$core$async19275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19277){
var self__ = this;
var _19277__$1 = this;
return self__.meta19276;
});

cljs.core.async.t_cljs$core$async19275.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19275.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19275.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19275.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19275.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19275.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19275.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19275.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19276], null);
});

cljs.core.async.t_cljs$core$async19275.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19275";

cljs.core.async.t_cljs$core$async19275.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19275");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19275.
 */
cljs.core.async.__GT_t_cljs$core$async19275 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19275(p__$1,ch__$1,meta19276){
return (new cljs.core.async.t_cljs$core$async19275(p__$1,ch__$1,meta19276));
});

}

return (new cljs.core.async.t_cljs$core$async19275(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19279 = arguments.length;
switch (G__19279) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15910__auto___19319 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15910__auto___19319,out){
return (function (){
var f__15911__auto__ = (function (){var switch__15727__auto__ = ((function (c__15910__auto___19319,out){
return (function (state_19300){
var state_val_19301 = (state_19300[(1)]);
if((state_val_19301 === (7))){
var inst_19296 = (state_19300[(2)]);
var state_19300__$1 = state_19300;
var statearr_19302_19320 = state_19300__$1;
(statearr_19302_19320[(2)] = inst_19296);

(statearr_19302_19320[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19301 === (1))){
var state_19300__$1 = state_19300;
var statearr_19303_19321 = state_19300__$1;
(statearr_19303_19321[(2)] = null);

(statearr_19303_19321[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19301 === (4))){
var inst_19282 = (state_19300[(7)]);
var inst_19282__$1 = (state_19300[(2)]);
var inst_19283 = (inst_19282__$1 == null);
var state_19300__$1 = (function (){var statearr_19304 = state_19300;
(statearr_19304[(7)] = inst_19282__$1);

return statearr_19304;
})();
if(cljs.core.truth_(inst_19283)){
var statearr_19305_19322 = state_19300__$1;
(statearr_19305_19322[(1)] = (5));

} else {
var statearr_19306_19323 = state_19300__$1;
(statearr_19306_19323[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19301 === (6))){
var inst_19282 = (state_19300[(7)]);
var inst_19287 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19282) : p.call(null,inst_19282));
var state_19300__$1 = state_19300;
if(cljs.core.truth_(inst_19287)){
var statearr_19307_19324 = state_19300__$1;
(statearr_19307_19324[(1)] = (8));

} else {
var statearr_19308_19325 = state_19300__$1;
(statearr_19308_19325[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19301 === (3))){
var inst_19298 = (state_19300[(2)]);
var state_19300__$1 = state_19300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19300__$1,inst_19298);
} else {
if((state_val_19301 === (2))){
var state_19300__$1 = state_19300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19300__$1,(4),ch);
} else {
if((state_val_19301 === (11))){
var inst_19290 = (state_19300[(2)]);
var state_19300__$1 = state_19300;
var statearr_19309_19326 = state_19300__$1;
(statearr_19309_19326[(2)] = inst_19290);

(statearr_19309_19326[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19301 === (9))){
var state_19300__$1 = state_19300;
var statearr_19310_19327 = state_19300__$1;
(statearr_19310_19327[(2)] = null);

(statearr_19310_19327[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19301 === (5))){
var inst_19285 = cljs.core.async.close_BANG_(out);
var state_19300__$1 = state_19300;
var statearr_19311_19328 = state_19300__$1;
(statearr_19311_19328[(2)] = inst_19285);

(statearr_19311_19328[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19301 === (10))){
var inst_19293 = (state_19300[(2)]);
var state_19300__$1 = (function (){var statearr_19312 = state_19300;
(statearr_19312[(8)] = inst_19293);

return statearr_19312;
})();
var statearr_19313_19329 = state_19300__$1;
(statearr_19313_19329[(2)] = null);

(statearr_19313_19329[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19301 === (8))){
var inst_19282 = (state_19300[(7)]);
var state_19300__$1 = state_19300;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19300__$1,(11),out,inst_19282);
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
}
}
});})(c__15910__auto___19319,out))
;
return ((function (switch__15727__auto__,c__15910__auto___19319,out){
return (function() {
var cljs$core$async$state_machine__15728__auto__ = null;
var cljs$core$async$state_machine__15728__auto____0 = (function (){
var statearr_19314 = [null,null,null,null,null,null,null,null,null];
(statearr_19314[(0)] = cljs$core$async$state_machine__15728__auto__);

(statearr_19314[(1)] = (1));

return statearr_19314;
});
var cljs$core$async$state_machine__15728__auto____1 = (function (state_19300){
while(true){
var ret_value__15729__auto__ = (function (){try{while(true){
var result__15730__auto__ = switch__15727__auto__(state_19300);
if(cljs.core.keyword_identical_QMARK_(result__15730__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15730__auto__;
}
break;
}
}catch (e19315){if((e19315 instanceof Object)){
var ex__15731__auto__ = e19315;
var statearr_19316_19330 = state_19300;
(statearr_19316_19330[(5)] = ex__15731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19300);

return cljs.core.cst$kw$recur;
} else {
throw e19315;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15729__auto__,cljs.core.cst$kw$recur)){
var G__19331 = state_19300;
state_19300 = G__19331;
continue;
} else {
return ret_value__15729__auto__;
}
break;
}
});
cljs$core$async$state_machine__15728__auto__ = function(state_19300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15728__auto____1.call(this,state_19300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15728__auto____0;
cljs$core$async$state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15728__auto____1;
return cljs$core$async$state_machine__15728__auto__;
})()
;})(switch__15727__auto__,c__15910__auto___19319,out))
})();
var state__15912__auto__ = (function (){var statearr_19317 = (f__15911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15911__auto__.cljs$core$IFn$_invoke$arity$0() : f__15911__auto__.call(null));
(statearr_19317[(6)] = c__15910__auto___19319);

return statearr_19317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15912__auto__);
});})(c__15910__auto___19319,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19333 = arguments.length;
switch (G__19333) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15910__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15910__auto__){
return (function (){
var f__15911__auto__ = (function (){var switch__15727__auto__ = ((function (c__15910__auto__){
return (function (state_19396){
var state_val_19397 = (state_19396[(1)]);
if((state_val_19397 === (7))){
var inst_19392 = (state_19396[(2)]);
var state_19396__$1 = state_19396;
var statearr_19398_19436 = state_19396__$1;
(statearr_19398_19436[(2)] = inst_19392);

(statearr_19398_19436[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19397 === (20))){
var inst_19362 = (state_19396[(7)]);
var inst_19373 = (state_19396[(2)]);
var inst_19374 = cljs.core.next(inst_19362);
var inst_19348 = inst_19374;
var inst_19349 = null;
var inst_19350 = (0);
var inst_19351 = (0);
var state_19396__$1 = (function (){var statearr_19399 = state_19396;
(statearr_19399[(8)] = inst_19348);

(statearr_19399[(9)] = inst_19350);

(statearr_19399[(10)] = inst_19373);

(statearr_19399[(11)] = inst_19349);

(statearr_19399[(12)] = inst_19351);

return statearr_19399;
})();
var statearr_19400_19437 = state_19396__$1;
(statearr_19400_19437[(2)] = null);

(statearr_19400_19437[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19397 === (1))){
var state_19396__$1 = state_19396;
var statearr_19401_19438 = state_19396__$1;
(statearr_19401_19438[(2)] = null);

(statearr_19401_19438[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19397 === (4))){
var inst_19337 = (state_19396[(13)]);
var inst_19337__$1 = (state_19396[(2)]);
var inst_19338 = (inst_19337__$1 == null);
var state_19396__$1 = (function (){var statearr_19402 = state_19396;
(statearr_19402[(13)] = inst_19337__$1);

return statearr_19402;
})();
if(cljs.core.truth_(inst_19338)){
var statearr_19403_19439 = state_19396__$1;
(statearr_19403_19439[(1)] = (5));

} else {
var statearr_19404_19440 = state_19396__$1;
(statearr_19404_19440[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19397 === (15))){
var state_19396__$1 = state_19396;
var statearr_19408_19441 = state_19396__$1;
(statearr_19408_19441[(2)] = null);

(statearr_19408_19441[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19397 === (21))){
var state_19396__$1 = state_19396;
var statearr_19409_19442 = state_19396__$1;
(statearr_19409_19442[(2)] = null);

(statearr_19409_19442[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19397 === (13))){
var inst_19348 = (state_19396[(8)]);
var inst_19350 = (state_19396[(9)]);
var inst_19349 = (state_19396[(11)]);
var inst_19351 = (state_19396[(12)]);
var inst_19358 = (state_19396[(2)]);
var inst_19359 = (inst_19351 + (1));
var tmp19405 = inst_19348;
var tmp19406 = inst_19350;
var tmp19407 = inst_19349;
var inst_19348__$1 = tmp19405;
var inst_19349__$1 = tmp19407;
var inst_19350__$1 = tmp19406;
var inst_19351__$1 = inst_19359;
var state_19396__$1 = (function (){var statearr_19410 = state_19396;
(statearr_19410[(8)] = inst_19348__$1);

(statearr_19410[(9)] = inst_19350__$1);

(statearr_19410[(11)] = inst_19349__$1);

(statearr_19410[(14)] = inst_19358);

(statearr_19410[(12)] = inst_19351__$1);

return statearr_19410;
})();
var statearr_19411_19443 = state_19396__$1;
(statearr_19411_19443[(2)] = null);

(statearr_19411_19443[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19397 === (22))){
var state_19396__$1 = state_19396;
var statearr_19412_19444 = state_19396__$1;
(statearr_19412_19444[(2)] = null);

(statearr_19412_19444[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19397 === (6))){
var inst_19337 = (state_19396[(13)]);
var inst_19346 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19337) : f.call(null,inst_19337));
var inst_19347 = cljs.core.seq(inst_19346);
var inst_19348 = inst_19347;
var inst_19349 = null;
var inst_19350 = (0);
var inst_19351 = (0);
var state_19396__$1 = (function (){var statearr_19413 = state_19396;
(statearr_19413[(8)] = inst_19348);

(statearr_19413[(9)] = inst_19350);

(statearr_19413[(11)] = inst_19349);

(statearr_19413[(12)] = inst_19351);

return statearr_19413;
})();
var statearr_19414_19445 = state_19396__$1;
(statearr_19414_19445[(2)] = null);

(statearr_19414_19445[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19397 === (17))){
var inst_19362 = (state_19396[(7)]);
var inst_19366 = cljs.core.chunk_first(inst_19362);
var inst_19367 = cljs.core.chunk_rest(inst_19362);
var inst_19368 = cljs.core.count(inst_19366);
var inst_19348 = inst_19367;
var inst_19349 = inst_19366;
var inst_19350 = inst_19368;
var inst_19351 = (0);
var state_19396__$1 = (function (){var statearr_19415 = state_19396;
(statearr_19415[(8)] = inst_19348);

(statearr_19415[(9)] = inst_19350);

(statearr_19415[(11)] = inst_19349);

(statearr_19415[(12)] = inst_19351);

return statearr_19415;
})();
var statearr_19416_19446 = state_19396__$1;
(statearr_19416_19446[(2)] = null);

(statearr_19416_19446[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19397 === (3))){
var inst_19394 = (state_19396[(2)]);
var state_19396__$1 = state_19396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19396__$1,inst_19394);
} else {
if((state_val_19397 === (12))){
var inst_19382 = (state_19396[(2)]);
var state_19396__$1 = state_19396;
var statearr_19417_19447 = state_19396__$1;
(statearr_19417_19447[(2)] = inst_19382);

(statearr_19417_19447[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19397 === (2))){
var state_19396__$1 = state_19396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19396__$1,(4),in$);
} else {
if((state_val_19397 === (23))){
var inst_19390 = (state_19396[(2)]);
var state_19396__$1 = state_19396;
var statearr_19418_19448 = state_19396__$1;
(statearr_19418_19448[(2)] = inst_19390);

(statearr_19418_19448[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19397 === (19))){
var inst_19377 = (state_19396[(2)]);
var state_19396__$1 = state_19396;
var statearr_19419_19449 = state_19396__$1;
(statearr_19419_19449[(2)] = inst_19377);

(statearr_19419_19449[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19397 === (11))){
var inst_19348 = (state_19396[(8)]);
var inst_19362 = (state_19396[(7)]);
var inst_19362__$1 = cljs.core.seq(inst_19348);
var state_19396__$1 = (function (){var statearr_19420 = state_19396;
(statearr_19420[(7)] = inst_19362__$1);

return statearr_19420;
})();
if(inst_19362__$1){
var statearr_19421_19450 = state_19396__$1;
(statearr_19421_19450[(1)] = (14));

} else {
var statearr_19422_19451 = state_19396__$1;
(statearr_19422_19451[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19397 === (9))){
var inst_19384 = (state_19396[(2)]);
var inst_19385 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19396__$1 = (function (){var statearr_19423 = state_19396;
(statearr_19423[(15)] = inst_19384);

return statearr_19423;
})();
if(cljs.core.truth_(inst_19385)){
var statearr_19424_19452 = state_19396__$1;
(statearr_19424_19452[(1)] = (21));

} else {
var statearr_19425_19453 = state_19396__$1;
(statearr_19425_19453[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19397 === (5))){
var inst_19340 = cljs.core.async.close_BANG_(out);
var state_19396__$1 = state_19396;
var statearr_19426_19454 = state_19396__$1;
(statearr_19426_19454[(2)] = inst_19340);

(statearr_19426_19454[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19397 === (14))){
var inst_19362 = (state_19396[(7)]);
var inst_19364 = cljs.core.chunked_seq_QMARK_(inst_19362);
var state_19396__$1 = state_19396;
if(inst_19364){
var statearr_19427_19455 = state_19396__$1;
(statearr_19427_19455[(1)] = (17));

} else {
var statearr_19428_19456 = state_19396__$1;
(statearr_19428_19456[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19397 === (16))){
var inst_19380 = (state_19396[(2)]);
var state_19396__$1 = state_19396;
var statearr_19429_19457 = state_19396__$1;
(statearr_19429_19457[(2)] = inst_19380);

(statearr_19429_19457[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19397 === (10))){
var inst_19349 = (state_19396[(11)]);
var inst_19351 = (state_19396[(12)]);
var inst_19356 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19349,inst_19351);
var state_19396__$1 = state_19396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19396__$1,(13),out,inst_19356);
} else {
if((state_val_19397 === (18))){
var inst_19362 = (state_19396[(7)]);
var inst_19371 = cljs.core.first(inst_19362);
var state_19396__$1 = state_19396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19396__$1,(20),out,inst_19371);
} else {
if((state_val_19397 === (8))){
var inst_19350 = (state_19396[(9)]);
var inst_19351 = (state_19396[(12)]);
var inst_19353 = (inst_19351 < inst_19350);
var inst_19354 = inst_19353;
var state_19396__$1 = state_19396;
if(cljs.core.truth_(inst_19354)){
var statearr_19430_19458 = state_19396__$1;
(statearr_19430_19458[(1)] = (10));

} else {
var statearr_19431_19459 = state_19396__$1;
(statearr_19431_19459[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__15910__auto__))
;
return ((function (switch__15727__auto__,c__15910__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15728__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15728__auto____0 = (function (){
var statearr_19432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19432[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15728__auto__);

(statearr_19432[(1)] = (1));

return statearr_19432;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15728__auto____1 = (function (state_19396){
while(true){
var ret_value__15729__auto__ = (function (){try{while(true){
var result__15730__auto__ = switch__15727__auto__(state_19396);
if(cljs.core.keyword_identical_QMARK_(result__15730__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15730__auto__;
}
break;
}
}catch (e19433){if((e19433 instanceof Object)){
var ex__15731__auto__ = e19433;
var statearr_19434_19460 = state_19396;
(statearr_19434_19460[(5)] = ex__15731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19396);

return cljs.core.cst$kw$recur;
} else {
throw e19433;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15729__auto__,cljs.core.cst$kw$recur)){
var G__19461 = state_19396;
state_19396 = G__19461;
continue;
} else {
return ret_value__15729__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15728__auto__ = function(state_19396){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15728__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15728__auto____1.call(this,state_19396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15728__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15728__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15728__auto__;
})()
;})(switch__15727__auto__,c__15910__auto__))
})();
var state__15912__auto__ = (function (){var statearr_19435 = (f__15911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15911__auto__.cljs$core$IFn$_invoke$arity$0() : f__15911__auto__.call(null));
(statearr_19435[(6)] = c__15910__auto__);

return statearr_19435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15912__auto__);
});})(c__15910__auto__))
);

return c__15910__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19463 = arguments.length;
switch (G__19463) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19466 = arguments.length;
switch (G__19466) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19469 = arguments.length;
switch (G__19469) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15910__auto___19516 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15910__auto___19516,out){
return (function (){
var f__15911__auto__ = (function (){var switch__15727__auto__ = ((function (c__15910__auto___19516,out){
return (function (state_19493){
var state_val_19494 = (state_19493[(1)]);
if((state_val_19494 === (7))){
var inst_19488 = (state_19493[(2)]);
var state_19493__$1 = state_19493;
var statearr_19495_19517 = state_19493__$1;
(statearr_19495_19517[(2)] = inst_19488);

(statearr_19495_19517[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19494 === (1))){
var inst_19470 = null;
var state_19493__$1 = (function (){var statearr_19496 = state_19493;
(statearr_19496[(7)] = inst_19470);

return statearr_19496;
})();
var statearr_19497_19518 = state_19493__$1;
(statearr_19497_19518[(2)] = null);

(statearr_19497_19518[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19494 === (4))){
var inst_19473 = (state_19493[(8)]);
var inst_19473__$1 = (state_19493[(2)]);
var inst_19474 = (inst_19473__$1 == null);
var inst_19475 = cljs.core.not(inst_19474);
var state_19493__$1 = (function (){var statearr_19498 = state_19493;
(statearr_19498[(8)] = inst_19473__$1);

return statearr_19498;
})();
if(inst_19475){
var statearr_19499_19519 = state_19493__$1;
(statearr_19499_19519[(1)] = (5));

} else {
var statearr_19500_19520 = state_19493__$1;
(statearr_19500_19520[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19494 === (6))){
var state_19493__$1 = state_19493;
var statearr_19501_19521 = state_19493__$1;
(statearr_19501_19521[(2)] = null);

(statearr_19501_19521[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19494 === (3))){
var inst_19490 = (state_19493[(2)]);
var inst_19491 = cljs.core.async.close_BANG_(out);
var state_19493__$1 = (function (){var statearr_19502 = state_19493;
(statearr_19502[(9)] = inst_19490);

return statearr_19502;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19493__$1,inst_19491);
} else {
if((state_val_19494 === (2))){
var state_19493__$1 = state_19493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19493__$1,(4),ch);
} else {
if((state_val_19494 === (11))){
var inst_19473 = (state_19493[(8)]);
var inst_19482 = (state_19493[(2)]);
var inst_19470 = inst_19473;
var state_19493__$1 = (function (){var statearr_19503 = state_19493;
(statearr_19503[(10)] = inst_19482);

(statearr_19503[(7)] = inst_19470);

return statearr_19503;
})();
var statearr_19504_19522 = state_19493__$1;
(statearr_19504_19522[(2)] = null);

(statearr_19504_19522[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19494 === (9))){
var inst_19473 = (state_19493[(8)]);
var state_19493__$1 = state_19493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19493__$1,(11),out,inst_19473);
} else {
if((state_val_19494 === (5))){
var inst_19473 = (state_19493[(8)]);
var inst_19470 = (state_19493[(7)]);
var inst_19477 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19473,inst_19470);
var state_19493__$1 = state_19493;
if(inst_19477){
var statearr_19506_19523 = state_19493__$1;
(statearr_19506_19523[(1)] = (8));

} else {
var statearr_19507_19524 = state_19493__$1;
(statearr_19507_19524[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19494 === (10))){
var inst_19485 = (state_19493[(2)]);
var state_19493__$1 = state_19493;
var statearr_19508_19525 = state_19493__$1;
(statearr_19508_19525[(2)] = inst_19485);

(statearr_19508_19525[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19494 === (8))){
var inst_19470 = (state_19493[(7)]);
var tmp19505 = inst_19470;
var inst_19470__$1 = tmp19505;
var state_19493__$1 = (function (){var statearr_19509 = state_19493;
(statearr_19509[(7)] = inst_19470__$1);

return statearr_19509;
})();
var statearr_19510_19526 = state_19493__$1;
(statearr_19510_19526[(2)] = null);

(statearr_19510_19526[(1)] = (2));


return cljs.core.cst$kw$recur;
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
}
}
});})(c__15910__auto___19516,out))
;
return ((function (switch__15727__auto__,c__15910__auto___19516,out){
return (function() {
var cljs$core$async$state_machine__15728__auto__ = null;
var cljs$core$async$state_machine__15728__auto____0 = (function (){
var statearr_19511 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19511[(0)] = cljs$core$async$state_machine__15728__auto__);

(statearr_19511[(1)] = (1));

return statearr_19511;
});
var cljs$core$async$state_machine__15728__auto____1 = (function (state_19493){
while(true){
var ret_value__15729__auto__ = (function (){try{while(true){
var result__15730__auto__ = switch__15727__auto__(state_19493);
if(cljs.core.keyword_identical_QMARK_(result__15730__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15730__auto__;
}
break;
}
}catch (e19512){if((e19512 instanceof Object)){
var ex__15731__auto__ = e19512;
var statearr_19513_19527 = state_19493;
(statearr_19513_19527[(5)] = ex__15731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19493);

return cljs.core.cst$kw$recur;
} else {
throw e19512;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15729__auto__,cljs.core.cst$kw$recur)){
var G__19528 = state_19493;
state_19493 = G__19528;
continue;
} else {
return ret_value__15729__auto__;
}
break;
}
});
cljs$core$async$state_machine__15728__auto__ = function(state_19493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15728__auto____1.call(this,state_19493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15728__auto____0;
cljs$core$async$state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15728__auto____1;
return cljs$core$async$state_machine__15728__auto__;
})()
;})(switch__15727__auto__,c__15910__auto___19516,out))
})();
var state__15912__auto__ = (function (){var statearr_19514 = (f__15911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15911__auto__.cljs$core$IFn$_invoke$arity$0() : f__15911__auto__.call(null));
(statearr_19514[(6)] = c__15910__auto___19516);

return statearr_19514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15912__auto__);
});})(c__15910__auto___19516,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19530 = arguments.length;
switch (G__19530) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15910__auto___19596 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15910__auto___19596,out){
return (function (){
var f__15911__auto__ = (function (){var switch__15727__auto__ = ((function (c__15910__auto___19596,out){
return (function (state_19568){
var state_val_19569 = (state_19568[(1)]);
if((state_val_19569 === (7))){
var inst_19564 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
var statearr_19570_19597 = state_19568__$1;
(statearr_19570_19597[(2)] = inst_19564);

(statearr_19570_19597[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19569 === (1))){
var inst_19531 = (new Array(n));
var inst_19532 = inst_19531;
var inst_19533 = (0);
var state_19568__$1 = (function (){var statearr_19571 = state_19568;
(statearr_19571[(7)] = inst_19533);

(statearr_19571[(8)] = inst_19532);

return statearr_19571;
})();
var statearr_19572_19598 = state_19568__$1;
(statearr_19572_19598[(2)] = null);

(statearr_19572_19598[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19569 === (4))){
var inst_19536 = (state_19568[(9)]);
var inst_19536__$1 = (state_19568[(2)]);
var inst_19537 = (inst_19536__$1 == null);
var inst_19538 = cljs.core.not(inst_19537);
var state_19568__$1 = (function (){var statearr_19573 = state_19568;
(statearr_19573[(9)] = inst_19536__$1);

return statearr_19573;
})();
if(inst_19538){
var statearr_19574_19599 = state_19568__$1;
(statearr_19574_19599[(1)] = (5));

} else {
var statearr_19575_19600 = state_19568__$1;
(statearr_19575_19600[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19569 === (15))){
var inst_19558 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
var statearr_19576_19601 = state_19568__$1;
(statearr_19576_19601[(2)] = inst_19558);

(statearr_19576_19601[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19569 === (13))){
var state_19568__$1 = state_19568;
var statearr_19577_19602 = state_19568__$1;
(statearr_19577_19602[(2)] = null);

(statearr_19577_19602[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19569 === (6))){
var inst_19533 = (state_19568[(7)]);
var inst_19554 = (inst_19533 > (0));
var state_19568__$1 = state_19568;
if(cljs.core.truth_(inst_19554)){
var statearr_19578_19603 = state_19568__$1;
(statearr_19578_19603[(1)] = (12));

} else {
var statearr_19579_19604 = state_19568__$1;
(statearr_19579_19604[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19569 === (3))){
var inst_19566 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19568__$1,inst_19566);
} else {
if((state_val_19569 === (12))){
var inst_19532 = (state_19568[(8)]);
var inst_19556 = cljs.core.vec(inst_19532);
var state_19568__$1 = state_19568;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19568__$1,(15),out,inst_19556);
} else {
if((state_val_19569 === (2))){
var state_19568__$1 = state_19568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19568__$1,(4),ch);
} else {
if((state_val_19569 === (11))){
var inst_19548 = (state_19568[(2)]);
var inst_19549 = (new Array(n));
var inst_19532 = inst_19549;
var inst_19533 = (0);
var state_19568__$1 = (function (){var statearr_19580 = state_19568;
(statearr_19580[(10)] = inst_19548);

(statearr_19580[(7)] = inst_19533);

(statearr_19580[(8)] = inst_19532);

return statearr_19580;
})();
var statearr_19581_19605 = state_19568__$1;
(statearr_19581_19605[(2)] = null);

(statearr_19581_19605[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19569 === (9))){
var inst_19532 = (state_19568[(8)]);
var inst_19546 = cljs.core.vec(inst_19532);
var state_19568__$1 = state_19568;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19568__$1,(11),out,inst_19546);
} else {
if((state_val_19569 === (5))){
var inst_19533 = (state_19568[(7)]);
var inst_19541 = (state_19568[(11)]);
var inst_19532 = (state_19568[(8)]);
var inst_19536 = (state_19568[(9)]);
var inst_19540 = (inst_19532[inst_19533] = inst_19536);
var inst_19541__$1 = (inst_19533 + (1));
var inst_19542 = (inst_19541__$1 < n);
var state_19568__$1 = (function (){var statearr_19582 = state_19568;
(statearr_19582[(12)] = inst_19540);

(statearr_19582[(11)] = inst_19541__$1);

return statearr_19582;
})();
if(cljs.core.truth_(inst_19542)){
var statearr_19583_19606 = state_19568__$1;
(statearr_19583_19606[(1)] = (8));

} else {
var statearr_19584_19607 = state_19568__$1;
(statearr_19584_19607[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19569 === (14))){
var inst_19561 = (state_19568[(2)]);
var inst_19562 = cljs.core.async.close_BANG_(out);
var state_19568__$1 = (function (){var statearr_19586 = state_19568;
(statearr_19586[(13)] = inst_19561);

return statearr_19586;
})();
var statearr_19587_19608 = state_19568__$1;
(statearr_19587_19608[(2)] = inst_19562);

(statearr_19587_19608[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19569 === (10))){
var inst_19552 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
var statearr_19588_19609 = state_19568__$1;
(statearr_19588_19609[(2)] = inst_19552);

(statearr_19588_19609[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19569 === (8))){
var inst_19541 = (state_19568[(11)]);
var inst_19532 = (state_19568[(8)]);
var tmp19585 = inst_19532;
var inst_19532__$1 = tmp19585;
var inst_19533 = inst_19541;
var state_19568__$1 = (function (){var statearr_19589 = state_19568;
(statearr_19589[(7)] = inst_19533);

(statearr_19589[(8)] = inst_19532__$1);

return statearr_19589;
})();
var statearr_19590_19610 = state_19568__$1;
(statearr_19590_19610[(2)] = null);

(statearr_19590_19610[(1)] = (2));


return cljs.core.cst$kw$recur;
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
}
}
}
}
}
}
});})(c__15910__auto___19596,out))
;
return ((function (switch__15727__auto__,c__15910__auto___19596,out){
return (function() {
var cljs$core$async$state_machine__15728__auto__ = null;
var cljs$core$async$state_machine__15728__auto____0 = (function (){
var statearr_19591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19591[(0)] = cljs$core$async$state_machine__15728__auto__);

(statearr_19591[(1)] = (1));

return statearr_19591;
});
var cljs$core$async$state_machine__15728__auto____1 = (function (state_19568){
while(true){
var ret_value__15729__auto__ = (function (){try{while(true){
var result__15730__auto__ = switch__15727__auto__(state_19568);
if(cljs.core.keyword_identical_QMARK_(result__15730__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15730__auto__;
}
break;
}
}catch (e19592){if((e19592 instanceof Object)){
var ex__15731__auto__ = e19592;
var statearr_19593_19611 = state_19568;
(statearr_19593_19611[(5)] = ex__15731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19568);

return cljs.core.cst$kw$recur;
} else {
throw e19592;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15729__auto__,cljs.core.cst$kw$recur)){
var G__19612 = state_19568;
state_19568 = G__19612;
continue;
} else {
return ret_value__15729__auto__;
}
break;
}
});
cljs$core$async$state_machine__15728__auto__ = function(state_19568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15728__auto____1.call(this,state_19568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15728__auto____0;
cljs$core$async$state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15728__auto____1;
return cljs$core$async$state_machine__15728__auto__;
})()
;})(switch__15727__auto__,c__15910__auto___19596,out))
})();
var state__15912__auto__ = (function (){var statearr_19594 = (f__15911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15911__auto__.cljs$core$IFn$_invoke$arity$0() : f__15911__auto__.call(null));
(statearr_19594[(6)] = c__15910__auto___19596);

return statearr_19594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15912__auto__);
});})(c__15910__auto___19596,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19614 = arguments.length;
switch (G__19614) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15910__auto___19684 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15910__auto___19684,out){
return (function (){
var f__15911__auto__ = (function (){var switch__15727__auto__ = ((function (c__15910__auto___19684,out){
return (function (state_19656){
var state_val_19657 = (state_19656[(1)]);
if((state_val_19657 === (7))){
var inst_19652 = (state_19656[(2)]);
var state_19656__$1 = state_19656;
var statearr_19658_19685 = state_19656__$1;
(statearr_19658_19685[(2)] = inst_19652);

(statearr_19658_19685[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19657 === (1))){
var inst_19615 = [];
var inst_19616 = inst_19615;
var inst_19617 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_19656__$1 = (function (){var statearr_19659 = state_19656;
(statearr_19659[(7)] = inst_19616);

(statearr_19659[(8)] = inst_19617);

return statearr_19659;
})();
var statearr_19660_19686 = state_19656__$1;
(statearr_19660_19686[(2)] = null);

(statearr_19660_19686[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19657 === (4))){
var inst_19620 = (state_19656[(9)]);
var inst_19620__$1 = (state_19656[(2)]);
var inst_19621 = (inst_19620__$1 == null);
var inst_19622 = cljs.core.not(inst_19621);
var state_19656__$1 = (function (){var statearr_19661 = state_19656;
(statearr_19661[(9)] = inst_19620__$1);

return statearr_19661;
})();
if(inst_19622){
var statearr_19662_19687 = state_19656__$1;
(statearr_19662_19687[(1)] = (5));

} else {
var statearr_19663_19688 = state_19656__$1;
(statearr_19663_19688[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19657 === (15))){
var inst_19646 = (state_19656[(2)]);
var state_19656__$1 = state_19656;
var statearr_19664_19689 = state_19656__$1;
(statearr_19664_19689[(2)] = inst_19646);

(statearr_19664_19689[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19657 === (13))){
var state_19656__$1 = state_19656;
var statearr_19665_19690 = state_19656__$1;
(statearr_19665_19690[(2)] = null);

(statearr_19665_19690[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19657 === (6))){
var inst_19616 = (state_19656[(7)]);
var inst_19641 = inst_19616.length;
var inst_19642 = (inst_19641 > (0));
var state_19656__$1 = state_19656;
if(cljs.core.truth_(inst_19642)){
var statearr_19666_19691 = state_19656__$1;
(statearr_19666_19691[(1)] = (12));

} else {
var statearr_19667_19692 = state_19656__$1;
(statearr_19667_19692[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19657 === (3))){
var inst_19654 = (state_19656[(2)]);
var state_19656__$1 = state_19656;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19656__$1,inst_19654);
} else {
if((state_val_19657 === (12))){
var inst_19616 = (state_19656[(7)]);
var inst_19644 = cljs.core.vec(inst_19616);
var state_19656__$1 = state_19656;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19656__$1,(15),out,inst_19644);
} else {
if((state_val_19657 === (2))){
var state_19656__$1 = state_19656;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19656__$1,(4),ch);
} else {
if((state_val_19657 === (11))){
var inst_19620 = (state_19656[(9)]);
var inst_19624 = (state_19656[(10)]);
var inst_19634 = (state_19656[(2)]);
var inst_19635 = [];
var inst_19636 = inst_19635.push(inst_19620);
var inst_19616 = inst_19635;
var inst_19617 = inst_19624;
var state_19656__$1 = (function (){var statearr_19668 = state_19656;
(statearr_19668[(7)] = inst_19616);

(statearr_19668[(11)] = inst_19636);

(statearr_19668[(12)] = inst_19634);

(statearr_19668[(8)] = inst_19617);

return statearr_19668;
})();
var statearr_19669_19693 = state_19656__$1;
(statearr_19669_19693[(2)] = null);

(statearr_19669_19693[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19657 === (9))){
var inst_19616 = (state_19656[(7)]);
var inst_19632 = cljs.core.vec(inst_19616);
var state_19656__$1 = state_19656;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19656__$1,(11),out,inst_19632);
} else {
if((state_val_19657 === (5))){
var inst_19620 = (state_19656[(9)]);
var inst_19624 = (state_19656[(10)]);
var inst_19617 = (state_19656[(8)]);
var inst_19624__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19620) : f.call(null,inst_19620));
var inst_19625 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19624__$1,inst_19617);
var inst_19626 = cljs.core.keyword_identical_QMARK_(inst_19617,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_19627 = ((inst_19625) || (inst_19626));
var state_19656__$1 = (function (){var statearr_19670 = state_19656;
(statearr_19670[(10)] = inst_19624__$1);

return statearr_19670;
})();
if(cljs.core.truth_(inst_19627)){
var statearr_19671_19694 = state_19656__$1;
(statearr_19671_19694[(1)] = (8));

} else {
var statearr_19672_19695 = state_19656__$1;
(statearr_19672_19695[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19657 === (14))){
var inst_19649 = (state_19656[(2)]);
var inst_19650 = cljs.core.async.close_BANG_(out);
var state_19656__$1 = (function (){var statearr_19674 = state_19656;
(statearr_19674[(13)] = inst_19649);

return statearr_19674;
})();
var statearr_19675_19696 = state_19656__$1;
(statearr_19675_19696[(2)] = inst_19650);

(statearr_19675_19696[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19657 === (10))){
var inst_19639 = (state_19656[(2)]);
var state_19656__$1 = state_19656;
var statearr_19676_19697 = state_19656__$1;
(statearr_19676_19697[(2)] = inst_19639);

(statearr_19676_19697[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19657 === (8))){
var inst_19620 = (state_19656[(9)]);
var inst_19624 = (state_19656[(10)]);
var inst_19616 = (state_19656[(7)]);
var inst_19629 = inst_19616.push(inst_19620);
var tmp19673 = inst_19616;
var inst_19616__$1 = tmp19673;
var inst_19617 = inst_19624;
var state_19656__$1 = (function (){var statearr_19677 = state_19656;
(statearr_19677[(14)] = inst_19629);

(statearr_19677[(7)] = inst_19616__$1);

(statearr_19677[(8)] = inst_19617);

return statearr_19677;
})();
var statearr_19678_19698 = state_19656__$1;
(statearr_19678_19698[(2)] = null);

(statearr_19678_19698[(1)] = (2));


return cljs.core.cst$kw$recur;
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
}
}
}
}
}
}
});})(c__15910__auto___19684,out))
;
return ((function (switch__15727__auto__,c__15910__auto___19684,out){
return (function() {
var cljs$core$async$state_machine__15728__auto__ = null;
var cljs$core$async$state_machine__15728__auto____0 = (function (){
var statearr_19679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19679[(0)] = cljs$core$async$state_machine__15728__auto__);

(statearr_19679[(1)] = (1));

return statearr_19679;
});
var cljs$core$async$state_machine__15728__auto____1 = (function (state_19656){
while(true){
var ret_value__15729__auto__ = (function (){try{while(true){
var result__15730__auto__ = switch__15727__auto__(state_19656);
if(cljs.core.keyword_identical_QMARK_(result__15730__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15730__auto__;
}
break;
}
}catch (e19680){if((e19680 instanceof Object)){
var ex__15731__auto__ = e19680;
var statearr_19681_19699 = state_19656;
(statearr_19681_19699[(5)] = ex__15731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19656);

return cljs.core.cst$kw$recur;
} else {
throw e19680;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15729__auto__,cljs.core.cst$kw$recur)){
var G__19700 = state_19656;
state_19656 = G__19700;
continue;
} else {
return ret_value__15729__auto__;
}
break;
}
});
cljs$core$async$state_machine__15728__auto__ = function(state_19656){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15728__auto____1.call(this,state_19656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15728__auto____0;
cljs$core$async$state_machine__15728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15728__auto____1;
return cljs$core$async$state_machine__15728__auto__;
})()
;})(switch__15727__auto__,c__15910__auto___19684,out))
})();
var state__15912__auto__ = (function (){var statearr_19682 = (f__15911__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15911__auto__.cljs$core$IFn$_invoke$arity$0() : f__15911__auto__.call(null));
(statearr_19682[(6)] = c__15910__auto___19684);

return statearr_19682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15912__auto__);
});})(c__15910__auto___19684,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

