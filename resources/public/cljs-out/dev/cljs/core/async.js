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
var G__16662 = arguments.length;
switch (G__16662) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16663 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16663 = (function (f,blockable,meta16664){
this.f = f;
this.blockable = blockable;
this.meta16664 = meta16664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16665,meta16664__$1){
var self__ = this;
var _16665__$1 = this;
return (new cljs.core.async.t_cljs$core$async16663(self__.f,self__.blockable,meta16664__$1));
});

cljs.core.async.t_cljs$core$async16663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16665){
var self__ = this;
var _16665__$1 = this;
return self__.meta16664;
});

cljs.core.async.t_cljs$core$async16663.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16663.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16663.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16663.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16663.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta16664], null);
});

cljs.core.async.t_cljs$core$async16663.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16663";

cljs.core.async.t_cljs$core$async16663.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async16663");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16663.
 */
cljs.core.async.__GT_t_cljs$core$async16663 = (function cljs$core$async$__GT_t_cljs$core$async16663(f__$1,blockable__$1,meta16664){
return (new cljs.core.async.t_cljs$core$async16663(f__$1,blockable__$1,meta16664));
});

}

return (new cljs.core.async.t_cljs$core$async16663(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__16669 = arguments.length;
switch (G__16669) {
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
var G__16672 = arguments.length;
switch (G__16672) {
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
var G__16675 = arguments.length;
switch (G__16675) {
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
var val_16677 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16677) : fn1.call(null,val_16677));
} else {
cljs.core.async.impl.dispatch.run(((function (val_16677,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16677) : fn1.call(null,val_16677));
});})(val_16677,ret))
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
var G__16679 = arguments.length;
switch (G__16679) {
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
var n__4408__auto___16681 = n;
var x_16682 = (0);
while(true){
if((x_16682 < n__4408__auto___16681)){
(a[x_16682] = x_16682);

var G__16683 = (x_16682 + (1));
x_16682 = G__16683;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16684 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16684 = (function (flag,meta16685){
this.flag = flag;
this.meta16685 = meta16685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16686,meta16685__$1){
var self__ = this;
var _16686__$1 = this;
return (new cljs.core.async.t_cljs$core$async16684(self__.flag,meta16685__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16684.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16686){
var self__ = this;
var _16686__$1 = this;
return self__.meta16685;
});})(flag))
;

cljs.core.async.t_cljs$core$async16684.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16684.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async16684.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16684.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16684.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta16685], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16684.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16684.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16684";

cljs.core.async.t_cljs$core$async16684.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async16684");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16684.
 */
cljs.core.async.__GT_t_cljs$core$async16684 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16684(flag__$1,meta16685){
return (new cljs.core.async.t_cljs$core$async16684(flag__$1,meta16685));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16684(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16687 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16687 = (function (flag,cb,meta16688){
this.flag = flag;
this.cb = cb;
this.meta16688 = meta16688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16689,meta16688__$1){
var self__ = this;
var _16689__$1 = this;
return (new cljs.core.async.t_cljs$core$async16687(self__.flag,self__.cb,meta16688__$1));
});

cljs.core.async.t_cljs$core$async16687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16689){
var self__ = this;
var _16689__$1 = this;
return self__.meta16688;
});

cljs.core.async.t_cljs$core$async16687.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16687.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async16687.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16687.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta16688], null);
});

cljs.core.async.t_cljs$core$async16687.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16687";

cljs.core.async.t_cljs$core$async16687.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async16687");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16687.
 */
cljs.core.async.__GT_t_cljs$core$async16687 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16687(flag__$1,cb__$1,meta16688){
return (new cljs.core.async.t_cljs$core$async16687(flag__$1,cb__$1,meta16688));
});

}

return (new cljs.core.async.t_cljs$core$async16687(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__16690_SHARP_){
var G__16692 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16690_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16692) : fret.call(null,G__16692));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16691_SHARP_){
var G__16693 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16691_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16693) : fret.call(null,G__16693));
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
var G__16694 = (i + (1));
i = G__16694;
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
var len__4531__auto___16700 = arguments.length;
var i__4532__auto___16701 = (0);
while(true){
if((i__4532__auto___16701 < len__4531__auto___16700)){
args__4534__auto__.push((arguments[i__4532__auto___16701]));

var G__16702 = (i__4532__auto___16701 + (1));
i__4532__auto___16701 = G__16702;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16697){
var map__16698 = p__16697;
var map__16698__$1 = ((((!((map__16698 == null)))?(((((map__16698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16698):map__16698);
var opts = map__16698__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16695){
var G__16696 = cljs.core.first(seq16695);
var seq16695__$1 = cljs.core.next(seq16695);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16696,seq16695__$1);
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
var G__16704 = arguments.length;
switch (G__16704) {
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
var c__14735__auto___16750 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto___16750){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto___16750){
return (function (state_16728){
var state_val_16729 = (state_16728[(1)]);
if((state_val_16729 === (7))){
var inst_16724 = (state_16728[(2)]);
var state_16728__$1 = state_16728;
var statearr_16730_16751 = state_16728__$1;
(statearr_16730_16751[(2)] = inst_16724);

(statearr_16730_16751[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16729 === (1))){
var state_16728__$1 = state_16728;
var statearr_16731_16752 = state_16728__$1;
(statearr_16731_16752[(2)] = null);

(statearr_16731_16752[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16729 === (4))){
var inst_16707 = (state_16728[(7)]);
var inst_16707__$1 = (state_16728[(2)]);
var inst_16708 = (inst_16707__$1 == null);
var state_16728__$1 = (function (){var statearr_16732 = state_16728;
(statearr_16732[(7)] = inst_16707__$1);

return statearr_16732;
})();
if(cljs.core.truth_(inst_16708)){
var statearr_16733_16753 = state_16728__$1;
(statearr_16733_16753[(1)] = (5));

} else {
var statearr_16734_16754 = state_16728__$1;
(statearr_16734_16754[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16729 === (13))){
var state_16728__$1 = state_16728;
var statearr_16735_16755 = state_16728__$1;
(statearr_16735_16755[(2)] = null);

(statearr_16735_16755[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16729 === (6))){
var inst_16707 = (state_16728[(7)]);
var state_16728__$1 = state_16728;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16728__$1,(11),to,inst_16707);
} else {
if((state_val_16729 === (3))){
var inst_16726 = (state_16728[(2)]);
var state_16728__$1 = state_16728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16728__$1,inst_16726);
} else {
if((state_val_16729 === (12))){
var state_16728__$1 = state_16728;
var statearr_16736_16756 = state_16728__$1;
(statearr_16736_16756[(2)] = null);

(statearr_16736_16756[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16729 === (2))){
var state_16728__$1 = state_16728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16728__$1,(4),from);
} else {
if((state_val_16729 === (11))){
var inst_16717 = (state_16728[(2)]);
var state_16728__$1 = state_16728;
if(cljs.core.truth_(inst_16717)){
var statearr_16737_16757 = state_16728__$1;
(statearr_16737_16757[(1)] = (12));

} else {
var statearr_16738_16758 = state_16728__$1;
(statearr_16738_16758[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16729 === (9))){
var state_16728__$1 = state_16728;
var statearr_16739_16759 = state_16728__$1;
(statearr_16739_16759[(2)] = null);

(statearr_16739_16759[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16729 === (5))){
var state_16728__$1 = state_16728;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16740_16760 = state_16728__$1;
(statearr_16740_16760[(1)] = (8));

} else {
var statearr_16741_16761 = state_16728__$1;
(statearr_16741_16761[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16729 === (14))){
var inst_16722 = (state_16728[(2)]);
var state_16728__$1 = state_16728;
var statearr_16742_16762 = state_16728__$1;
(statearr_16742_16762[(2)] = inst_16722);

(statearr_16742_16762[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16729 === (10))){
var inst_16714 = (state_16728[(2)]);
var state_16728__$1 = state_16728;
var statearr_16743_16763 = state_16728__$1;
(statearr_16743_16763[(2)] = inst_16714);

(statearr_16743_16763[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16729 === (8))){
var inst_16711 = cljs.core.async.close_BANG_(to);
var state_16728__$1 = state_16728;
var statearr_16744_16764 = state_16728__$1;
(statearr_16744_16764[(2)] = inst_16711);

(statearr_16744_16764[(1)] = (10));


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
});})(c__14735__auto___16750))
;
return ((function (switch__14552__auto__,c__14735__auto___16750){
return (function() {
var cljs$core$async$state_machine__14553__auto__ = null;
var cljs$core$async$state_machine__14553__auto____0 = (function (){
var statearr_16745 = [null,null,null,null,null,null,null,null];
(statearr_16745[(0)] = cljs$core$async$state_machine__14553__auto__);

(statearr_16745[(1)] = (1));

return statearr_16745;
});
var cljs$core$async$state_machine__14553__auto____1 = (function (state_16728){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_16728);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e16746){if((e16746 instanceof Object)){
var ex__14556__auto__ = e16746;
var statearr_16747_16765 = state_16728;
(statearr_16747_16765[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16728);

return cljs.core.cst$kw$recur;
} else {
throw e16746;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__16766 = state_16728;
state_16728 = G__16766;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
cljs$core$async$state_machine__14553__auto__ = function(state_16728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14553__auto____1.call(this,state_16728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14553__auto____0;
cljs$core$async$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14553__auto____1;
return cljs$core$async$state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto___16750))
})();
var state__14737__auto__ = (function (){var statearr_16748 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_16748[(6)] = c__14735__auto___16750);

return statearr_16748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto___16750))
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
return (function (p__16767){
var vec__16768 = p__16767;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16768,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16768,(1),null);
var job = vec__16768;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14735__auto___16939 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto___16939,res,vec__16768,v,p,job,jobs,results){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto___16939,res,vec__16768,v,p,job,jobs,results){
return (function (state_16775){
var state_val_16776 = (state_16775[(1)]);
if((state_val_16776 === (1))){
var state_16775__$1 = state_16775;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16775__$1,(2),res,v);
} else {
if((state_val_16776 === (2))){
var inst_16772 = (state_16775[(2)]);
var inst_16773 = cljs.core.async.close_BANG_(res);
var state_16775__$1 = (function (){var statearr_16777 = state_16775;
(statearr_16777[(7)] = inst_16772);

return statearr_16777;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16775__$1,inst_16773);
} else {
return null;
}
}
});})(c__14735__auto___16939,res,vec__16768,v,p,job,jobs,results))
;
return ((function (switch__14552__auto__,c__14735__auto___16939,res,vec__16768,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____0 = (function (){
var statearr_16778 = [null,null,null,null,null,null,null,null];
(statearr_16778[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__);

(statearr_16778[(1)] = (1));

return statearr_16778;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____1 = (function (state_16775){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_16775);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e16779){if((e16779 instanceof Object)){
var ex__14556__auto__ = e16779;
var statearr_16780_16940 = state_16775;
(statearr_16780_16940[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16775);

return cljs.core.cst$kw$recur;
} else {
throw e16779;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__16941 = state_16775;
state_16775 = G__16941;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__ = function(state_16775){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____1.call(this,state_16775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto___16939,res,vec__16768,v,p,job,jobs,results))
})();
var state__14737__auto__ = (function (){var statearr_16781 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_16781[(6)] = c__14735__auto___16939);

return statearr_16781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto___16939,res,vec__16768,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16782){
var vec__16783 = p__16782;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16783,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16783,(1),null);
var job = vec__16783;
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
var n__4408__auto___16942 = n;
var __16943 = (0);
while(true){
if((__16943 < n__4408__auto___16942)){
var G__16786_16944 = type;
var G__16786_16945__$1 = (((G__16786_16944 instanceof cljs.core.Keyword))?G__16786_16944.fqn:null);
switch (G__16786_16945__$1) {
case "compute":
var c__14735__auto___16947 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16943,c__14735__auto___16947,G__16786_16944,G__16786_16945__$1,n__4408__auto___16942,jobs,results,process,async){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (__16943,c__14735__auto___16947,G__16786_16944,G__16786_16945__$1,n__4408__auto___16942,jobs,results,process,async){
return (function (state_16799){
var state_val_16800 = (state_16799[(1)]);
if((state_val_16800 === (1))){
var state_16799__$1 = state_16799;
var statearr_16801_16948 = state_16799__$1;
(statearr_16801_16948[(2)] = null);

(statearr_16801_16948[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16800 === (2))){
var state_16799__$1 = state_16799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16799__$1,(4),jobs);
} else {
if((state_val_16800 === (3))){
var inst_16797 = (state_16799[(2)]);
var state_16799__$1 = state_16799;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16799__$1,inst_16797);
} else {
if((state_val_16800 === (4))){
var inst_16789 = (state_16799[(2)]);
var inst_16790 = process(inst_16789);
var state_16799__$1 = state_16799;
if(cljs.core.truth_(inst_16790)){
var statearr_16802_16949 = state_16799__$1;
(statearr_16802_16949[(1)] = (5));

} else {
var statearr_16803_16950 = state_16799__$1;
(statearr_16803_16950[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16800 === (5))){
var state_16799__$1 = state_16799;
var statearr_16804_16951 = state_16799__$1;
(statearr_16804_16951[(2)] = null);

(statearr_16804_16951[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16800 === (6))){
var state_16799__$1 = state_16799;
var statearr_16805_16952 = state_16799__$1;
(statearr_16805_16952[(2)] = null);

(statearr_16805_16952[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16800 === (7))){
var inst_16795 = (state_16799[(2)]);
var state_16799__$1 = state_16799;
var statearr_16806_16953 = state_16799__$1;
(statearr_16806_16953[(2)] = inst_16795);

(statearr_16806_16953[(1)] = (3));


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
});})(__16943,c__14735__auto___16947,G__16786_16944,G__16786_16945__$1,n__4408__auto___16942,jobs,results,process,async))
;
return ((function (__16943,switch__14552__auto__,c__14735__auto___16947,G__16786_16944,G__16786_16945__$1,n__4408__auto___16942,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____0 = (function (){
var statearr_16807 = [null,null,null,null,null,null,null];
(statearr_16807[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__);

(statearr_16807[(1)] = (1));

return statearr_16807;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____1 = (function (state_16799){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_16799);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e16808){if((e16808 instanceof Object)){
var ex__14556__auto__ = e16808;
var statearr_16809_16954 = state_16799;
(statearr_16809_16954[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16799);

return cljs.core.cst$kw$recur;
} else {
throw e16808;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__16955 = state_16799;
state_16799 = G__16955;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__ = function(state_16799){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____1.call(this,state_16799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__;
})()
;})(__16943,switch__14552__auto__,c__14735__auto___16947,G__16786_16944,G__16786_16945__$1,n__4408__auto___16942,jobs,results,process,async))
})();
var state__14737__auto__ = (function (){var statearr_16810 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_16810[(6)] = c__14735__auto___16947);

return statearr_16810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(__16943,c__14735__auto___16947,G__16786_16944,G__16786_16945__$1,n__4408__auto___16942,jobs,results,process,async))
);


break;
case "async":
var c__14735__auto___16956 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16943,c__14735__auto___16956,G__16786_16944,G__16786_16945__$1,n__4408__auto___16942,jobs,results,process,async){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (__16943,c__14735__auto___16956,G__16786_16944,G__16786_16945__$1,n__4408__auto___16942,jobs,results,process,async){
return (function (state_16823){
var state_val_16824 = (state_16823[(1)]);
if((state_val_16824 === (1))){
var state_16823__$1 = state_16823;
var statearr_16825_16957 = state_16823__$1;
(statearr_16825_16957[(2)] = null);

(statearr_16825_16957[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16824 === (2))){
var state_16823__$1 = state_16823;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16823__$1,(4),jobs);
} else {
if((state_val_16824 === (3))){
var inst_16821 = (state_16823[(2)]);
var state_16823__$1 = state_16823;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16823__$1,inst_16821);
} else {
if((state_val_16824 === (4))){
var inst_16813 = (state_16823[(2)]);
var inst_16814 = async(inst_16813);
var state_16823__$1 = state_16823;
if(cljs.core.truth_(inst_16814)){
var statearr_16826_16958 = state_16823__$1;
(statearr_16826_16958[(1)] = (5));

} else {
var statearr_16827_16959 = state_16823__$1;
(statearr_16827_16959[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16824 === (5))){
var state_16823__$1 = state_16823;
var statearr_16828_16960 = state_16823__$1;
(statearr_16828_16960[(2)] = null);

(statearr_16828_16960[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16824 === (6))){
var state_16823__$1 = state_16823;
var statearr_16829_16961 = state_16823__$1;
(statearr_16829_16961[(2)] = null);

(statearr_16829_16961[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16824 === (7))){
var inst_16819 = (state_16823[(2)]);
var state_16823__$1 = state_16823;
var statearr_16830_16962 = state_16823__$1;
(statearr_16830_16962[(2)] = inst_16819);

(statearr_16830_16962[(1)] = (3));


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
});})(__16943,c__14735__auto___16956,G__16786_16944,G__16786_16945__$1,n__4408__auto___16942,jobs,results,process,async))
;
return ((function (__16943,switch__14552__auto__,c__14735__auto___16956,G__16786_16944,G__16786_16945__$1,n__4408__auto___16942,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____0 = (function (){
var statearr_16831 = [null,null,null,null,null,null,null];
(statearr_16831[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__);

(statearr_16831[(1)] = (1));

return statearr_16831;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____1 = (function (state_16823){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_16823);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e16832){if((e16832 instanceof Object)){
var ex__14556__auto__ = e16832;
var statearr_16833_16963 = state_16823;
(statearr_16833_16963[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16823);

return cljs.core.cst$kw$recur;
} else {
throw e16832;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__16964 = state_16823;
state_16823 = G__16964;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__ = function(state_16823){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____1.call(this,state_16823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__;
})()
;})(__16943,switch__14552__auto__,c__14735__auto___16956,G__16786_16944,G__16786_16945__$1,n__4408__auto___16942,jobs,results,process,async))
})();
var state__14737__auto__ = (function (){var statearr_16834 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_16834[(6)] = c__14735__auto___16956);

return statearr_16834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(__16943,c__14735__auto___16956,G__16786_16944,G__16786_16945__$1,n__4408__auto___16942,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16786_16945__$1)].join('')));

}

var G__16965 = (__16943 + (1));
__16943 = G__16965;
continue;
} else {
}
break;
}

var c__14735__auto___16966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto___16966,jobs,results,process,async){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto___16966,jobs,results,process,async){
return (function (state_16856){
var state_val_16857 = (state_16856[(1)]);
if((state_val_16857 === (1))){
var state_16856__$1 = state_16856;
var statearr_16858_16967 = state_16856__$1;
(statearr_16858_16967[(2)] = null);

(statearr_16858_16967[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16857 === (2))){
var state_16856__$1 = state_16856;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16856__$1,(4),from);
} else {
if((state_val_16857 === (3))){
var inst_16854 = (state_16856[(2)]);
var state_16856__$1 = state_16856;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16856__$1,inst_16854);
} else {
if((state_val_16857 === (4))){
var inst_16837 = (state_16856[(7)]);
var inst_16837__$1 = (state_16856[(2)]);
var inst_16838 = (inst_16837__$1 == null);
var state_16856__$1 = (function (){var statearr_16859 = state_16856;
(statearr_16859[(7)] = inst_16837__$1);

return statearr_16859;
})();
if(cljs.core.truth_(inst_16838)){
var statearr_16860_16968 = state_16856__$1;
(statearr_16860_16968[(1)] = (5));

} else {
var statearr_16861_16969 = state_16856__$1;
(statearr_16861_16969[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16857 === (5))){
var inst_16840 = cljs.core.async.close_BANG_(jobs);
var state_16856__$1 = state_16856;
var statearr_16862_16970 = state_16856__$1;
(statearr_16862_16970[(2)] = inst_16840);

(statearr_16862_16970[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16857 === (6))){
var inst_16842 = (state_16856[(8)]);
var inst_16837 = (state_16856[(7)]);
var inst_16842__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16843 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16844 = [inst_16837,inst_16842__$1];
var inst_16845 = (new cljs.core.PersistentVector(null,2,(5),inst_16843,inst_16844,null));
var state_16856__$1 = (function (){var statearr_16863 = state_16856;
(statearr_16863[(8)] = inst_16842__$1);

return statearr_16863;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16856__$1,(8),jobs,inst_16845);
} else {
if((state_val_16857 === (7))){
var inst_16852 = (state_16856[(2)]);
var state_16856__$1 = state_16856;
var statearr_16864_16971 = state_16856__$1;
(statearr_16864_16971[(2)] = inst_16852);

(statearr_16864_16971[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16857 === (8))){
var inst_16842 = (state_16856[(8)]);
var inst_16847 = (state_16856[(2)]);
var state_16856__$1 = (function (){var statearr_16865 = state_16856;
(statearr_16865[(9)] = inst_16847);

return statearr_16865;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16856__$1,(9),results,inst_16842);
} else {
if((state_val_16857 === (9))){
var inst_16849 = (state_16856[(2)]);
var state_16856__$1 = (function (){var statearr_16866 = state_16856;
(statearr_16866[(10)] = inst_16849);

return statearr_16866;
})();
var statearr_16867_16972 = state_16856__$1;
(statearr_16867_16972[(2)] = null);

(statearr_16867_16972[(1)] = (2));


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
});})(c__14735__auto___16966,jobs,results,process,async))
;
return ((function (switch__14552__auto__,c__14735__auto___16966,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____0 = (function (){
var statearr_16868 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16868[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__);

(statearr_16868[(1)] = (1));

return statearr_16868;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____1 = (function (state_16856){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_16856);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e16869){if((e16869 instanceof Object)){
var ex__14556__auto__ = e16869;
var statearr_16870_16973 = state_16856;
(statearr_16870_16973[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16856);

return cljs.core.cst$kw$recur;
} else {
throw e16869;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__16974 = state_16856;
state_16856 = G__16974;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__ = function(state_16856){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____1.call(this,state_16856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto___16966,jobs,results,process,async))
})();
var state__14737__auto__ = (function (){var statearr_16871 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_16871[(6)] = c__14735__auto___16966);

return statearr_16871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto___16966,jobs,results,process,async))
);


var c__14735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto__,jobs,results,process,async){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto__,jobs,results,process,async){
return (function (state_16909){
var state_val_16910 = (state_16909[(1)]);
if((state_val_16910 === (7))){
var inst_16905 = (state_16909[(2)]);
var state_16909__$1 = state_16909;
var statearr_16911_16975 = state_16909__$1;
(statearr_16911_16975[(2)] = inst_16905);

(statearr_16911_16975[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (20))){
var state_16909__$1 = state_16909;
var statearr_16912_16976 = state_16909__$1;
(statearr_16912_16976[(2)] = null);

(statearr_16912_16976[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (1))){
var state_16909__$1 = state_16909;
var statearr_16913_16977 = state_16909__$1;
(statearr_16913_16977[(2)] = null);

(statearr_16913_16977[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (4))){
var inst_16874 = (state_16909[(7)]);
var inst_16874__$1 = (state_16909[(2)]);
var inst_16875 = (inst_16874__$1 == null);
var state_16909__$1 = (function (){var statearr_16914 = state_16909;
(statearr_16914[(7)] = inst_16874__$1);

return statearr_16914;
})();
if(cljs.core.truth_(inst_16875)){
var statearr_16915_16978 = state_16909__$1;
(statearr_16915_16978[(1)] = (5));

} else {
var statearr_16916_16979 = state_16909__$1;
(statearr_16916_16979[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (15))){
var inst_16887 = (state_16909[(8)]);
var state_16909__$1 = state_16909;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16909__$1,(18),to,inst_16887);
} else {
if((state_val_16910 === (21))){
var inst_16900 = (state_16909[(2)]);
var state_16909__$1 = state_16909;
var statearr_16917_16980 = state_16909__$1;
(statearr_16917_16980[(2)] = inst_16900);

(statearr_16917_16980[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (13))){
var inst_16902 = (state_16909[(2)]);
var state_16909__$1 = (function (){var statearr_16918 = state_16909;
(statearr_16918[(9)] = inst_16902);

return statearr_16918;
})();
var statearr_16919_16981 = state_16909__$1;
(statearr_16919_16981[(2)] = null);

(statearr_16919_16981[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (6))){
var inst_16874 = (state_16909[(7)]);
var state_16909__$1 = state_16909;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16909__$1,(11),inst_16874);
} else {
if((state_val_16910 === (17))){
var inst_16895 = (state_16909[(2)]);
var state_16909__$1 = state_16909;
if(cljs.core.truth_(inst_16895)){
var statearr_16920_16982 = state_16909__$1;
(statearr_16920_16982[(1)] = (19));

} else {
var statearr_16921_16983 = state_16909__$1;
(statearr_16921_16983[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (3))){
var inst_16907 = (state_16909[(2)]);
var state_16909__$1 = state_16909;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16909__$1,inst_16907);
} else {
if((state_val_16910 === (12))){
var inst_16884 = (state_16909[(10)]);
var state_16909__$1 = state_16909;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16909__$1,(14),inst_16884);
} else {
if((state_val_16910 === (2))){
var state_16909__$1 = state_16909;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16909__$1,(4),results);
} else {
if((state_val_16910 === (19))){
var state_16909__$1 = state_16909;
var statearr_16922_16984 = state_16909__$1;
(statearr_16922_16984[(2)] = null);

(statearr_16922_16984[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (11))){
var inst_16884 = (state_16909[(2)]);
var state_16909__$1 = (function (){var statearr_16923 = state_16909;
(statearr_16923[(10)] = inst_16884);

return statearr_16923;
})();
var statearr_16924_16985 = state_16909__$1;
(statearr_16924_16985[(2)] = null);

(statearr_16924_16985[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (9))){
var state_16909__$1 = state_16909;
var statearr_16925_16986 = state_16909__$1;
(statearr_16925_16986[(2)] = null);

(statearr_16925_16986[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (5))){
var state_16909__$1 = state_16909;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16926_16987 = state_16909__$1;
(statearr_16926_16987[(1)] = (8));

} else {
var statearr_16927_16988 = state_16909__$1;
(statearr_16927_16988[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (14))){
var inst_16889 = (state_16909[(11)]);
var inst_16887 = (state_16909[(8)]);
var inst_16887__$1 = (state_16909[(2)]);
var inst_16888 = (inst_16887__$1 == null);
var inst_16889__$1 = cljs.core.not(inst_16888);
var state_16909__$1 = (function (){var statearr_16928 = state_16909;
(statearr_16928[(11)] = inst_16889__$1);

(statearr_16928[(8)] = inst_16887__$1);

return statearr_16928;
})();
if(inst_16889__$1){
var statearr_16929_16989 = state_16909__$1;
(statearr_16929_16989[(1)] = (15));

} else {
var statearr_16930_16990 = state_16909__$1;
(statearr_16930_16990[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (16))){
var inst_16889 = (state_16909[(11)]);
var state_16909__$1 = state_16909;
var statearr_16931_16991 = state_16909__$1;
(statearr_16931_16991[(2)] = inst_16889);

(statearr_16931_16991[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (10))){
var inst_16881 = (state_16909[(2)]);
var state_16909__$1 = state_16909;
var statearr_16932_16992 = state_16909__$1;
(statearr_16932_16992[(2)] = inst_16881);

(statearr_16932_16992[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (18))){
var inst_16892 = (state_16909[(2)]);
var state_16909__$1 = state_16909;
var statearr_16933_16993 = state_16909__$1;
(statearr_16933_16993[(2)] = inst_16892);

(statearr_16933_16993[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (8))){
var inst_16878 = cljs.core.async.close_BANG_(to);
var state_16909__$1 = state_16909;
var statearr_16934_16994 = state_16909__$1;
(statearr_16934_16994[(2)] = inst_16878);

(statearr_16934_16994[(1)] = (10));


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
});})(c__14735__auto__,jobs,results,process,async))
;
return ((function (switch__14552__auto__,c__14735__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____0 = (function (){
var statearr_16935 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16935[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__);

(statearr_16935[(1)] = (1));

return statearr_16935;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____1 = (function (state_16909){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_16909);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e16936){if((e16936 instanceof Object)){
var ex__14556__auto__ = e16936;
var statearr_16937_16995 = state_16909;
(statearr_16937_16995[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16909);

return cljs.core.cst$kw$recur;
} else {
throw e16936;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__16996 = state_16909;
state_16909 = G__16996;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__ = function(state_16909){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____1.call(this,state_16909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14553__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto__,jobs,results,process,async))
})();
var state__14737__auto__ = (function (){var statearr_16938 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_16938[(6)] = c__14735__auto__);

return statearr_16938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto__,jobs,results,process,async))
);

return c__14735__auto__;
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
var G__16998 = arguments.length;
switch (G__16998) {
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
var G__17001 = arguments.length;
switch (G__17001) {
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
var G__17004 = arguments.length;
switch (G__17004) {
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
var c__14735__auto___17053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto___17053,tc,fc){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto___17053,tc,fc){
return (function (state_17030){
var state_val_17031 = (state_17030[(1)]);
if((state_val_17031 === (7))){
var inst_17026 = (state_17030[(2)]);
var state_17030__$1 = state_17030;
var statearr_17032_17054 = state_17030__$1;
(statearr_17032_17054[(2)] = inst_17026);

(statearr_17032_17054[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17031 === (1))){
var state_17030__$1 = state_17030;
var statearr_17033_17055 = state_17030__$1;
(statearr_17033_17055[(2)] = null);

(statearr_17033_17055[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17031 === (4))){
var inst_17007 = (state_17030[(7)]);
var inst_17007__$1 = (state_17030[(2)]);
var inst_17008 = (inst_17007__$1 == null);
var state_17030__$1 = (function (){var statearr_17034 = state_17030;
(statearr_17034[(7)] = inst_17007__$1);

return statearr_17034;
})();
if(cljs.core.truth_(inst_17008)){
var statearr_17035_17056 = state_17030__$1;
(statearr_17035_17056[(1)] = (5));

} else {
var statearr_17036_17057 = state_17030__$1;
(statearr_17036_17057[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17031 === (13))){
var state_17030__$1 = state_17030;
var statearr_17037_17058 = state_17030__$1;
(statearr_17037_17058[(2)] = null);

(statearr_17037_17058[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17031 === (6))){
var inst_17007 = (state_17030[(7)]);
var inst_17013 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17007) : p.call(null,inst_17007));
var state_17030__$1 = state_17030;
if(cljs.core.truth_(inst_17013)){
var statearr_17038_17059 = state_17030__$1;
(statearr_17038_17059[(1)] = (9));

} else {
var statearr_17039_17060 = state_17030__$1;
(statearr_17039_17060[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17031 === (3))){
var inst_17028 = (state_17030[(2)]);
var state_17030__$1 = state_17030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17030__$1,inst_17028);
} else {
if((state_val_17031 === (12))){
var state_17030__$1 = state_17030;
var statearr_17040_17061 = state_17030__$1;
(statearr_17040_17061[(2)] = null);

(statearr_17040_17061[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17031 === (2))){
var state_17030__$1 = state_17030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17030__$1,(4),ch);
} else {
if((state_val_17031 === (11))){
var inst_17007 = (state_17030[(7)]);
var inst_17017 = (state_17030[(2)]);
var state_17030__$1 = state_17030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17030__$1,(8),inst_17017,inst_17007);
} else {
if((state_val_17031 === (9))){
var state_17030__$1 = state_17030;
var statearr_17041_17062 = state_17030__$1;
(statearr_17041_17062[(2)] = tc);

(statearr_17041_17062[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17031 === (5))){
var inst_17010 = cljs.core.async.close_BANG_(tc);
var inst_17011 = cljs.core.async.close_BANG_(fc);
var state_17030__$1 = (function (){var statearr_17042 = state_17030;
(statearr_17042[(8)] = inst_17010);

return statearr_17042;
})();
var statearr_17043_17063 = state_17030__$1;
(statearr_17043_17063[(2)] = inst_17011);

(statearr_17043_17063[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17031 === (14))){
var inst_17024 = (state_17030[(2)]);
var state_17030__$1 = state_17030;
var statearr_17044_17064 = state_17030__$1;
(statearr_17044_17064[(2)] = inst_17024);

(statearr_17044_17064[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17031 === (10))){
var state_17030__$1 = state_17030;
var statearr_17045_17065 = state_17030__$1;
(statearr_17045_17065[(2)] = fc);

(statearr_17045_17065[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17031 === (8))){
var inst_17019 = (state_17030[(2)]);
var state_17030__$1 = state_17030;
if(cljs.core.truth_(inst_17019)){
var statearr_17046_17066 = state_17030__$1;
(statearr_17046_17066[(1)] = (12));

} else {
var statearr_17047_17067 = state_17030__$1;
(statearr_17047_17067[(1)] = (13));

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
});})(c__14735__auto___17053,tc,fc))
;
return ((function (switch__14552__auto__,c__14735__auto___17053,tc,fc){
return (function() {
var cljs$core$async$state_machine__14553__auto__ = null;
var cljs$core$async$state_machine__14553__auto____0 = (function (){
var statearr_17048 = [null,null,null,null,null,null,null,null,null];
(statearr_17048[(0)] = cljs$core$async$state_machine__14553__auto__);

(statearr_17048[(1)] = (1));

return statearr_17048;
});
var cljs$core$async$state_machine__14553__auto____1 = (function (state_17030){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_17030);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e17049){if((e17049 instanceof Object)){
var ex__14556__auto__ = e17049;
var statearr_17050_17068 = state_17030;
(statearr_17050_17068[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17030);

return cljs.core.cst$kw$recur;
} else {
throw e17049;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__17069 = state_17030;
state_17030 = G__17069;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
cljs$core$async$state_machine__14553__auto__ = function(state_17030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14553__auto____1.call(this,state_17030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14553__auto____0;
cljs$core$async$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14553__auto____1;
return cljs$core$async$state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto___17053,tc,fc))
})();
var state__14737__auto__ = (function (){var statearr_17051 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_17051[(6)] = c__14735__auto___17053);

return statearr_17051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto___17053,tc,fc))
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
var c__14735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto__){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto__){
return (function (state_17090){
var state_val_17091 = (state_17090[(1)]);
if((state_val_17091 === (7))){
var inst_17086 = (state_17090[(2)]);
var state_17090__$1 = state_17090;
var statearr_17092_17110 = state_17090__$1;
(statearr_17092_17110[(2)] = inst_17086);

(statearr_17092_17110[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17091 === (1))){
var inst_17070 = init;
var state_17090__$1 = (function (){var statearr_17093 = state_17090;
(statearr_17093[(7)] = inst_17070);

return statearr_17093;
})();
var statearr_17094_17111 = state_17090__$1;
(statearr_17094_17111[(2)] = null);

(statearr_17094_17111[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17091 === (4))){
var inst_17073 = (state_17090[(8)]);
var inst_17073__$1 = (state_17090[(2)]);
var inst_17074 = (inst_17073__$1 == null);
var state_17090__$1 = (function (){var statearr_17095 = state_17090;
(statearr_17095[(8)] = inst_17073__$1);

return statearr_17095;
})();
if(cljs.core.truth_(inst_17074)){
var statearr_17096_17112 = state_17090__$1;
(statearr_17096_17112[(1)] = (5));

} else {
var statearr_17097_17113 = state_17090__$1;
(statearr_17097_17113[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17091 === (6))){
var inst_17073 = (state_17090[(8)]);
var inst_17077 = (state_17090[(9)]);
var inst_17070 = (state_17090[(7)]);
var inst_17077__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17070,inst_17073) : f.call(null,inst_17070,inst_17073));
var inst_17078 = cljs.core.reduced_QMARK_(inst_17077__$1);
var state_17090__$1 = (function (){var statearr_17098 = state_17090;
(statearr_17098[(9)] = inst_17077__$1);

return statearr_17098;
})();
if(inst_17078){
var statearr_17099_17114 = state_17090__$1;
(statearr_17099_17114[(1)] = (8));

} else {
var statearr_17100_17115 = state_17090__$1;
(statearr_17100_17115[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17091 === (3))){
var inst_17088 = (state_17090[(2)]);
var state_17090__$1 = state_17090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17090__$1,inst_17088);
} else {
if((state_val_17091 === (2))){
var state_17090__$1 = state_17090;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17090__$1,(4),ch);
} else {
if((state_val_17091 === (9))){
var inst_17077 = (state_17090[(9)]);
var inst_17070 = inst_17077;
var state_17090__$1 = (function (){var statearr_17101 = state_17090;
(statearr_17101[(7)] = inst_17070);

return statearr_17101;
})();
var statearr_17102_17116 = state_17090__$1;
(statearr_17102_17116[(2)] = null);

(statearr_17102_17116[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17091 === (5))){
var inst_17070 = (state_17090[(7)]);
var state_17090__$1 = state_17090;
var statearr_17103_17117 = state_17090__$1;
(statearr_17103_17117[(2)] = inst_17070);

(statearr_17103_17117[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17091 === (10))){
var inst_17084 = (state_17090[(2)]);
var state_17090__$1 = state_17090;
var statearr_17104_17118 = state_17090__$1;
(statearr_17104_17118[(2)] = inst_17084);

(statearr_17104_17118[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17091 === (8))){
var inst_17077 = (state_17090[(9)]);
var inst_17080 = cljs.core.deref(inst_17077);
var state_17090__$1 = state_17090;
var statearr_17105_17119 = state_17090__$1;
(statearr_17105_17119[(2)] = inst_17080);

(statearr_17105_17119[(1)] = (10));


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
});})(c__14735__auto__))
;
return ((function (switch__14552__auto__,c__14735__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__14553__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14553__auto____0 = (function (){
var statearr_17106 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17106[(0)] = cljs$core$async$reduce_$_state_machine__14553__auto__);

(statearr_17106[(1)] = (1));

return statearr_17106;
});
var cljs$core$async$reduce_$_state_machine__14553__auto____1 = (function (state_17090){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_17090);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e17107){if((e17107 instanceof Object)){
var ex__14556__auto__ = e17107;
var statearr_17108_17120 = state_17090;
(statearr_17108_17120[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17090);

return cljs.core.cst$kw$recur;
} else {
throw e17107;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__17121 = state_17090;
state_17090 = G__17121;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14553__auto__ = function(state_17090){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14553__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14553__auto____1.call(this,state_17090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14553__auto____0;
cljs$core$async$reduce_$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14553__auto____1;
return cljs$core$async$reduce_$_state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto__))
})();
var state__14737__auto__ = (function (){var statearr_17109 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_17109[(6)] = c__14735__auto__);

return statearr_17109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto__))
);

return c__14735__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto__,f__$1){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto__,f__$1){
return (function (state_17127){
var state_val_17128 = (state_17127[(1)]);
if((state_val_17128 === (1))){
var inst_17122 = cljs.core.async.reduce(f__$1,init,ch);
var state_17127__$1 = state_17127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17127__$1,(2),inst_17122);
} else {
if((state_val_17128 === (2))){
var inst_17124 = (state_17127[(2)]);
var inst_17125 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17124) : f__$1.call(null,inst_17124));
var state_17127__$1 = state_17127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17127__$1,inst_17125);
} else {
return null;
}
}
});})(c__14735__auto__,f__$1))
;
return ((function (switch__14552__auto__,c__14735__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__14553__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14553__auto____0 = (function (){
var statearr_17129 = [null,null,null,null,null,null,null];
(statearr_17129[(0)] = cljs$core$async$transduce_$_state_machine__14553__auto__);

(statearr_17129[(1)] = (1));

return statearr_17129;
});
var cljs$core$async$transduce_$_state_machine__14553__auto____1 = (function (state_17127){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_17127);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e17130){if((e17130 instanceof Object)){
var ex__14556__auto__ = e17130;
var statearr_17131_17133 = state_17127;
(statearr_17131_17133[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17127);

return cljs.core.cst$kw$recur;
} else {
throw e17130;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__17134 = state_17127;
state_17127 = G__17134;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14553__auto__ = function(state_17127){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14553__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14553__auto____1.call(this,state_17127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14553__auto____0;
cljs$core$async$transduce_$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14553__auto____1;
return cljs$core$async$transduce_$_state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto__,f__$1))
})();
var state__14737__auto__ = (function (){var statearr_17132 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_17132[(6)] = c__14735__auto__);

return statearr_17132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto__,f__$1))
);

return c__14735__auto__;
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
var G__17136 = arguments.length;
switch (G__17136) {
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
var c__14735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto__){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto__){
return (function (state_17161){
var state_val_17162 = (state_17161[(1)]);
if((state_val_17162 === (7))){
var inst_17143 = (state_17161[(2)]);
var state_17161__$1 = state_17161;
var statearr_17163_17184 = state_17161__$1;
(statearr_17163_17184[(2)] = inst_17143);

(statearr_17163_17184[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17162 === (1))){
var inst_17137 = cljs.core.seq(coll);
var inst_17138 = inst_17137;
var state_17161__$1 = (function (){var statearr_17164 = state_17161;
(statearr_17164[(7)] = inst_17138);

return statearr_17164;
})();
var statearr_17165_17185 = state_17161__$1;
(statearr_17165_17185[(2)] = null);

(statearr_17165_17185[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17162 === (4))){
var inst_17138 = (state_17161[(7)]);
var inst_17141 = cljs.core.first(inst_17138);
var state_17161__$1 = state_17161;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17161__$1,(7),ch,inst_17141);
} else {
if((state_val_17162 === (13))){
var inst_17155 = (state_17161[(2)]);
var state_17161__$1 = state_17161;
var statearr_17166_17186 = state_17161__$1;
(statearr_17166_17186[(2)] = inst_17155);

(statearr_17166_17186[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17162 === (6))){
var inst_17146 = (state_17161[(2)]);
var state_17161__$1 = state_17161;
if(cljs.core.truth_(inst_17146)){
var statearr_17167_17187 = state_17161__$1;
(statearr_17167_17187[(1)] = (8));

} else {
var statearr_17168_17188 = state_17161__$1;
(statearr_17168_17188[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17162 === (3))){
var inst_17159 = (state_17161[(2)]);
var state_17161__$1 = state_17161;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17161__$1,inst_17159);
} else {
if((state_val_17162 === (12))){
var state_17161__$1 = state_17161;
var statearr_17169_17189 = state_17161__$1;
(statearr_17169_17189[(2)] = null);

(statearr_17169_17189[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17162 === (2))){
var inst_17138 = (state_17161[(7)]);
var state_17161__$1 = state_17161;
if(cljs.core.truth_(inst_17138)){
var statearr_17170_17190 = state_17161__$1;
(statearr_17170_17190[(1)] = (4));

} else {
var statearr_17171_17191 = state_17161__$1;
(statearr_17171_17191[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17162 === (11))){
var inst_17152 = cljs.core.async.close_BANG_(ch);
var state_17161__$1 = state_17161;
var statearr_17172_17192 = state_17161__$1;
(statearr_17172_17192[(2)] = inst_17152);

(statearr_17172_17192[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17162 === (9))){
var state_17161__$1 = state_17161;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17173_17193 = state_17161__$1;
(statearr_17173_17193[(1)] = (11));

} else {
var statearr_17174_17194 = state_17161__$1;
(statearr_17174_17194[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17162 === (5))){
var inst_17138 = (state_17161[(7)]);
var state_17161__$1 = state_17161;
var statearr_17175_17195 = state_17161__$1;
(statearr_17175_17195[(2)] = inst_17138);

(statearr_17175_17195[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17162 === (10))){
var inst_17157 = (state_17161[(2)]);
var state_17161__$1 = state_17161;
var statearr_17176_17196 = state_17161__$1;
(statearr_17176_17196[(2)] = inst_17157);

(statearr_17176_17196[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17162 === (8))){
var inst_17138 = (state_17161[(7)]);
var inst_17148 = cljs.core.next(inst_17138);
var inst_17138__$1 = inst_17148;
var state_17161__$1 = (function (){var statearr_17177 = state_17161;
(statearr_17177[(7)] = inst_17138__$1);

return statearr_17177;
})();
var statearr_17178_17197 = state_17161__$1;
(statearr_17178_17197[(2)] = null);

(statearr_17178_17197[(1)] = (2));


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
});})(c__14735__auto__))
;
return ((function (switch__14552__auto__,c__14735__auto__){
return (function() {
var cljs$core$async$state_machine__14553__auto__ = null;
var cljs$core$async$state_machine__14553__auto____0 = (function (){
var statearr_17179 = [null,null,null,null,null,null,null,null];
(statearr_17179[(0)] = cljs$core$async$state_machine__14553__auto__);

(statearr_17179[(1)] = (1));

return statearr_17179;
});
var cljs$core$async$state_machine__14553__auto____1 = (function (state_17161){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_17161);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e17180){if((e17180 instanceof Object)){
var ex__14556__auto__ = e17180;
var statearr_17181_17198 = state_17161;
(statearr_17181_17198[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17161);

return cljs.core.cst$kw$recur;
} else {
throw e17180;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__17199 = state_17161;
state_17161 = G__17199;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
cljs$core$async$state_machine__14553__auto__ = function(state_17161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14553__auto____1.call(this,state_17161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14553__auto____0;
cljs$core$async$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14553__auto____1;
return cljs$core$async$state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto__))
})();
var state__14737__auto__ = (function (){var statearr_17182 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_17182[(6)] = c__14735__auto__);

return statearr_17182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto__))
);

return c__14735__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17200 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17200 = (function (ch,cs,meta17201){
this.ch = ch;
this.cs = cs;
this.meta17201 = meta17201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17202,meta17201__$1){
var self__ = this;
var _17202__$1 = this;
return (new cljs.core.async.t_cljs$core$async17200(self__.ch,self__.cs,meta17201__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async17200.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17202){
var self__ = this;
var _17202__$1 = this;
return self__.meta17201;
});})(cs))
;

cljs.core.async.t_cljs$core$async17200.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17200.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async17200.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17200.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17200.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17200.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17200.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta17201], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async17200.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17200";

cljs.core.async.t_cljs$core$async17200.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17200");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17200.
 */
cljs.core.async.__GT_t_cljs$core$async17200 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async17200(ch__$1,cs__$1,meta17201){
return (new cljs.core.async.t_cljs$core$async17200(ch__$1,cs__$1,meta17201));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async17200(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__14735__auto___17422 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto___17422,cs,m,dchan,dctr,done){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto___17422,cs,m,dchan,dctr,done){
return (function (state_17337){
var state_val_17338 = (state_17337[(1)]);
if((state_val_17338 === (7))){
var inst_17333 = (state_17337[(2)]);
var state_17337__$1 = state_17337;
var statearr_17339_17423 = state_17337__$1;
(statearr_17339_17423[(2)] = inst_17333);

(statearr_17339_17423[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (20))){
var inst_17236 = (state_17337[(7)]);
var inst_17248 = cljs.core.first(inst_17236);
var inst_17249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17248,(0),null);
var inst_17250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17248,(1),null);
var state_17337__$1 = (function (){var statearr_17340 = state_17337;
(statearr_17340[(8)] = inst_17249);

return statearr_17340;
})();
if(cljs.core.truth_(inst_17250)){
var statearr_17341_17424 = state_17337__$1;
(statearr_17341_17424[(1)] = (22));

} else {
var statearr_17342_17425 = state_17337__$1;
(statearr_17342_17425[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (27))){
var inst_17285 = (state_17337[(9)]);
var inst_17280 = (state_17337[(10)]);
var inst_17278 = (state_17337[(11)]);
var inst_17205 = (state_17337[(12)]);
var inst_17285__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17278,inst_17280);
var inst_17286 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17285__$1,inst_17205,done);
var state_17337__$1 = (function (){var statearr_17343 = state_17337;
(statearr_17343[(9)] = inst_17285__$1);

return statearr_17343;
})();
if(cljs.core.truth_(inst_17286)){
var statearr_17344_17426 = state_17337__$1;
(statearr_17344_17426[(1)] = (30));

} else {
var statearr_17345_17427 = state_17337__$1;
(statearr_17345_17427[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (1))){
var state_17337__$1 = state_17337;
var statearr_17346_17428 = state_17337__$1;
(statearr_17346_17428[(2)] = null);

(statearr_17346_17428[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (24))){
var inst_17236 = (state_17337[(7)]);
var inst_17255 = (state_17337[(2)]);
var inst_17256 = cljs.core.next(inst_17236);
var inst_17214 = inst_17256;
var inst_17215 = null;
var inst_17216 = (0);
var inst_17217 = (0);
var state_17337__$1 = (function (){var statearr_17347 = state_17337;
(statearr_17347[(13)] = inst_17214);

(statearr_17347[(14)] = inst_17255);

(statearr_17347[(15)] = inst_17215);

(statearr_17347[(16)] = inst_17217);

(statearr_17347[(17)] = inst_17216);

return statearr_17347;
})();
var statearr_17348_17429 = state_17337__$1;
(statearr_17348_17429[(2)] = null);

(statearr_17348_17429[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (39))){
var state_17337__$1 = state_17337;
var statearr_17352_17430 = state_17337__$1;
(statearr_17352_17430[(2)] = null);

(statearr_17352_17430[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (4))){
var inst_17205 = (state_17337[(12)]);
var inst_17205__$1 = (state_17337[(2)]);
var inst_17206 = (inst_17205__$1 == null);
var state_17337__$1 = (function (){var statearr_17353 = state_17337;
(statearr_17353[(12)] = inst_17205__$1);

return statearr_17353;
})();
if(cljs.core.truth_(inst_17206)){
var statearr_17354_17431 = state_17337__$1;
(statearr_17354_17431[(1)] = (5));

} else {
var statearr_17355_17432 = state_17337__$1;
(statearr_17355_17432[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (15))){
var inst_17214 = (state_17337[(13)]);
var inst_17215 = (state_17337[(15)]);
var inst_17217 = (state_17337[(16)]);
var inst_17216 = (state_17337[(17)]);
var inst_17232 = (state_17337[(2)]);
var inst_17233 = (inst_17217 + (1));
var tmp17349 = inst_17214;
var tmp17350 = inst_17215;
var tmp17351 = inst_17216;
var inst_17214__$1 = tmp17349;
var inst_17215__$1 = tmp17350;
var inst_17216__$1 = tmp17351;
var inst_17217__$1 = inst_17233;
var state_17337__$1 = (function (){var statearr_17356 = state_17337;
(statearr_17356[(13)] = inst_17214__$1);

(statearr_17356[(15)] = inst_17215__$1);

(statearr_17356[(16)] = inst_17217__$1);

(statearr_17356[(18)] = inst_17232);

(statearr_17356[(17)] = inst_17216__$1);

return statearr_17356;
})();
var statearr_17357_17433 = state_17337__$1;
(statearr_17357_17433[(2)] = null);

(statearr_17357_17433[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (21))){
var inst_17259 = (state_17337[(2)]);
var state_17337__$1 = state_17337;
var statearr_17361_17434 = state_17337__$1;
(statearr_17361_17434[(2)] = inst_17259);

(statearr_17361_17434[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (31))){
var inst_17285 = (state_17337[(9)]);
var inst_17289 = done(null);
var inst_17290 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17285);
var state_17337__$1 = (function (){var statearr_17362 = state_17337;
(statearr_17362[(19)] = inst_17289);

return statearr_17362;
})();
var statearr_17363_17435 = state_17337__$1;
(statearr_17363_17435[(2)] = inst_17290);

(statearr_17363_17435[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (32))){
var inst_17277 = (state_17337[(20)]);
var inst_17279 = (state_17337[(21)]);
var inst_17280 = (state_17337[(10)]);
var inst_17278 = (state_17337[(11)]);
var inst_17292 = (state_17337[(2)]);
var inst_17293 = (inst_17280 + (1));
var tmp17358 = inst_17277;
var tmp17359 = inst_17279;
var tmp17360 = inst_17278;
var inst_17277__$1 = tmp17358;
var inst_17278__$1 = tmp17360;
var inst_17279__$1 = tmp17359;
var inst_17280__$1 = inst_17293;
var state_17337__$1 = (function (){var statearr_17364 = state_17337;
(statearr_17364[(20)] = inst_17277__$1);

(statearr_17364[(21)] = inst_17279__$1);

(statearr_17364[(10)] = inst_17280__$1);

(statearr_17364[(11)] = inst_17278__$1);

(statearr_17364[(22)] = inst_17292);

return statearr_17364;
})();
var statearr_17365_17436 = state_17337__$1;
(statearr_17365_17436[(2)] = null);

(statearr_17365_17436[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (40))){
var inst_17305 = (state_17337[(23)]);
var inst_17309 = done(null);
var inst_17310 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17305);
var state_17337__$1 = (function (){var statearr_17366 = state_17337;
(statearr_17366[(24)] = inst_17309);

return statearr_17366;
})();
var statearr_17367_17437 = state_17337__$1;
(statearr_17367_17437[(2)] = inst_17310);

(statearr_17367_17437[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (33))){
var inst_17296 = (state_17337[(25)]);
var inst_17298 = cljs.core.chunked_seq_QMARK_(inst_17296);
var state_17337__$1 = state_17337;
if(inst_17298){
var statearr_17368_17438 = state_17337__$1;
(statearr_17368_17438[(1)] = (36));

} else {
var statearr_17369_17439 = state_17337__$1;
(statearr_17369_17439[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (13))){
var inst_17226 = (state_17337[(26)]);
var inst_17229 = cljs.core.async.close_BANG_(inst_17226);
var state_17337__$1 = state_17337;
var statearr_17370_17440 = state_17337__$1;
(statearr_17370_17440[(2)] = inst_17229);

(statearr_17370_17440[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (22))){
var inst_17249 = (state_17337[(8)]);
var inst_17252 = cljs.core.async.close_BANG_(inst_17249);
var state_17337__$1 = state_17337;
var statearr_17371_17441 = state_17337__$1;
(statearr_17371_17441[(2)] = inst_17252);

(statearr_17371_17441[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (36))){
var inst_17296 = (state_17337[(25)]);
var inst_17300 = cljs.core.chunk_first(inst_17296);
var inst_17301 = cljs.core.chunk_rest(inst_17296);
var inst_17302 = cljs.core.count(inst_17300);
var inst_17277 = inst_17301;
var inst_17278 = inst_17300;
var inst_17279 = inst_17302;
var inst_17280 = (0);
var state_17337__$1 = (function (){var statearr_17372 = state_17337;
(statearr_17372[(20)] = inst_17277);

(statearr_17372[(21)] = inst_17279);

(statearr_17372[(10)] = inst_17280);

(statearr_17372[(11)] = inst_17278);

return statearr_17372;
})();
var statearr_17373_17442 = state_17337__$1;
(statearr_17373_17442[(2)] = null);

(statearr_17373_17442[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (41))){
var inst_17296 = (state_17337[(25)]);
var inst_17312 = (state_17337[(2)]);
var inst_17313 = cljs.core.next(inst_17296);
var inst_17277 = inst_17313;
var inst_17278 = null;
var inst_17279 = (0);
var inst_17280 = (0);
var state_17337__$1 = (function (){var statearr_17374 = state_17337;
(statearr_17374[(20)] = inst_17277);

(statearr_17374[(27)] = inst_17312);

(statearr_17374[(21)] = inst_17279);

(statearr_17374[(10)] = inst_17280);

(statearr_17374[(11)] = inst_17278);

return statearr_17374;
})();
var statearr_17375_17443 = state_17337__$1;
(statearr_17375_17443[(2)] = null);

(statearr_17375_17443[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (43))){
var state_17337__$1 = state_17337;
var statearr_17376_17444 = state_17337__$1;
(statearr_17376_17444[(2)] = null);

(statearr_17376_17444[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (29))){
var inst_17321 = (state_17337[(2)]);
var state_17337__$1 = state_17337;
var statearr_17377_17445 = state_17337__$1;
(statearr_17377_17445[(2)] = inst_17321);

(statearr_17377_17445[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (44))){
var inst_17330 = (state_17337[(2)]);
var state_17337__$1 = (function (){var statearr_17378 = state_17337;
(statearr_17378[(28)] = inst_17330);

return statearr_17378;
})();
var statearr_17379_17446 = state_17337__$1;
(statearr_17379_17446[(2)] = null);

(statearr_17379_17446[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (6))){
var inst_17269 = (state_17337[(29)]);
var inst_17268 = cljs.core.deref(cs);
var inst_17269__$1 = cljs.core.keys(inst_17268);
var inst_17270 = cljs.core.count(inst_17269__$1);
var inst_17271 = cljs.core.reset_BANG_(dctr,inst_17270);
var inst_17276 = cljs.core.seq(inst_17269__$1);
var inst_17277 = inst_17276;
var inst_17278 = null;
var inst_17279 = (0);
var inst_17280 = (0);
var state_17337__$1 = (function (){var statearr_17380 = state_17337;
(statearr_17380[(20)] = inst_17277);

(statearr_17380[(30)] = inst_17271);

(statearr_17380[(21)] = inst_17279);

(statearr_17380[(10)] = inst_17280);

(statearr_17380[(11)] = inst_17278);

(statearr_17380[(29)] = inst_17269__$1);

return statearr_17380;
})();
var statearr_17381_17447 = state_17337__$1;
(statearr_17381_17447[(2)] = null);

(statearr_17381_17447[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (28))){
var inst_17277 = (state_17337[(20)]);
var inst_17296 = (state_17337[(25)]);
var inst_17296__$1 = cljs.core.seq(inst_17277);
var state_17337__$1 = (function (){var statearr_17382 = state_17337;
(statearr_17382[(25)] = inst_17296__$1);

return statearr_17382;
})();
if(inst_17296__$1){
var statearr_17383_17448 = state_17337__$1;
(statearr_17383_17448[(1)] = (33));

} else {
var statearr_17384_17449 = state_17337__$1;
(statearr_17384_17449[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (25))){
var inst_17279 = (state_17337[(21)]);
var inst_17280 = (state_17337[(10)]);
var inst_17282 = (inst_17280 < inst_17279);
var inst_17283 = inst_17282;
var state_17337__$1 = state_17337;
if(cljs.core.truth_(inst_17283)){
var statearr_17385_17450 = state_17337__$1;
(statearr_17385_17450[(1)] = (27));

} else {
var statearr_17386_17451 = state_17337__$1;
(statearr_17386_17451[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (34))){
var state_17337__$1 = state_17337;
var statearr_17387_17452 = state_17337__$1;
(statearr_17387_17452[(2)] = null);

(statearr_17387_17452[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (17))){
var state_17337__$1 = state_17337;
var statearr_17388_17453 = state_17337__$1;
(statearr_17388_17453[(2)] = null);

(statearr_17388_17453[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (3))){
var inst_17335 = (state_17337[(2)]);
var state_17337__$1 = state_17337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17337__$1,inst_17335);
} else {
if((state_val_17338 === (12))){
var inst_17264 = (state_17337[(2)]);
var state_17337__$1 = state_17337;
var statearr_17389_17454 = state_17337__$1;
(statearr_17389_17454[(2)] = inst_17264);

(statearr_17389_17454[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (2))){
var state_17337__$1 = state_17337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17337__$1,(4),ch);
} else {
if((state_val_17338 === (23))){
var state_17337__$1 = state_17337;
var statearr_17390_17455 = state_17337__$1;
(statearr_17390_17455[(2)] = null);

(statearr_17390_17455[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (35))){
var inst_17319 = (state_17337[(2)]);
var state_17337__$1 = state_17337;
var statearr_17391_17456 = state_17337__$1;
(statearr_17391_17456[(2)] = inst_17319);

(statearr_17391_17456[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (19))){
var inst_17236 = (state_17337[(7)]);
var inst_17240 = cljs.core.chunk_first(inst_17236);
var inst_17241 = cljs.core.chunk_rest(inst_17236);
var inst_17242 = cljs.core.count(inst_17240);
var inst_17214 = inst_17241;
var inst_17215 = inst_17240;
var inst_17216 = inst_17242;
var inst_17217 = (0);
var state_17337__$1 = (function (){var statearr_17392 = state_17337;
(statearr_17392[(13)] = inst_17214);

(statearr_17392[(15)] = inst_17215);

(statearr_17392[(16)] = inst_17217);

(statearr_17392[(17)] = inst_17216);

return statearr_17392;
})();
var statearr_17393_17457 = state_17337__$1;
(statearr_17393_17457[(2)] = null);

(statearr_17393_17457[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (11))){
var inst_17214 = (state_17337[(13)]);
var inst_17236 = (state_17337[(7)]);
var inst_17236__$1 = cljs.core.seq(inst_17214);
var state_17337__$1 = (function (){var statearr_17394 = state_17337;
(statearr_17394[(7)] = inst_17236__$1);

return statearr_17394;
})();
if(inst_17236__$1){
var statearr_17395_17458 = state_17337__$1;
(statearr_17395_17458[(1)] = (16));

} else {
var statearr_17396_17459 = state_17337__$1;
(statearr_17396_17459[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (9))){
var inst_17266 = (state_17337[(2)]);
var state_17337__$1 = state_17337;
var statearr_17397_17460 = state_17337__$1;
(statearr_17397_17460[(2)] = inst_17266);

(statearr_17397_17460[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (5))){
var inst_17212 = cljs.core.deref(cs);
var inst_17213 = cljs.core.seq(inst_17212);
var inst_17214 = inst_17213;
var inst_17215 = null;
var inst_17216 = (0);
var inst_17217 = (0);
var state_17337__$1 = (function (){var statearr_17398 = state_17337;
(statearr_17398[(13)] = inst_17214);

(statearr_17398[(15)] = inst_17215);

(statearr_17398[(16)] = inst_17217);

(statearr_17398[(17)] = inst_17216);

return statearr_17398;
})();
var statearr_17399_17461 = state_17337__$1;
(statearr_17399_17461[(2)] = null);

(statearr_17399_17461[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (14))){
var state_17337__$1 = state_17337;
var statearr_17400_17462 = state_17337__$1;
(statearr_17400_17462[(2)] = null);

(statearr_17400_17462[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (45))){
var inst_17327 = (state_17337[(2)]);
var state_17337__$1 = state_17337;
var statearr_17401_17463 = state_17337__$1;
(statearr_17401_17463[(2)] = inst_17327);

(statearr_17401_17463[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (26))){
var inst_17269 = (state_17337[(29)]);
var inst_17323 = (state_17337[(2)]);
var inst_17324 = cljs.core.seq(inst_17269);
var state_17337__$1 = (function (){var statearr_17402 = state_17337;
(statearr_17402[(31)] = inst_17323);

return statearr_17402;
})();
if(inst_17324){
var statearr_17403_17464 = state_17337__$1;
(statearr_17403_17464[(1)] = (42));

} else {
var statearr_17404_17465 = state_17337__$1;
(statearr_17404_17465[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (16))){
var inst_17236 = (state_17337[(7)]);
var inst_17238 = cljs.core.chunked_seq_QMARK_(inst_17236);
var state_17337__$1 = state_17337;
if(inst_17238){
var statearr_17405_17466 = state_17337__$1;
(statearr_17405_17466[(1)] = (19));

} else {
var statearr_17406_17467 = state_17337__$1;
(statearr_17406_17467[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (38))){
var inst_17316 = (state_17337[(2)]);
var state_17337__$1 = state_17337;
var statearr_17407_17468 = state_17337__$1;
(statearr_17407_17468[(2)] = inst_17316);

(statearr_17407_17468[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (30))){
var state_17337__$1 = state_17337;
var statearr_17408_17469 = state_17337__$1;
(statearr_17408_17469[(2)] = null);

(statearr_17408_17469[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (10))){
var inst_17215 = (state_17337[(15)]);
var inst_17217 = (state_17337[(16)]);
var inst_17225 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17215,inst_17217);
var inst_17226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17225,(0),null);
var inst_17227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17225,(1),null);
var state_17337__$1 = (function (){var statearr_17409 = state_17337;
(statearr_17409[(26)] = inst_17226);

return statearr_17409;
})();
if(cljs.core.truth_(inst_17227)){
var statearr_17410_17470 = state_17337__$1;
(statearr_17410_17470[(1)] = (13));

} else {
var statearr_17411_17471 = state_17337__$1;
(statearr_17411_17471[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (18))){
var inst_17262 = (state_17337[(2)]);
var state_17337__$1 = state_17337;
var statearr_17412_17472 = state_17337__$1;
(statearr_17412_17472[(2)] = inst_17262);

(statearr_17412_17472[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (42))){
var state_17337__$1 = state_17337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17337__$1,(45),dchan);
} else {
if((state_val_17338 === (37))){
var inst_17305 = (state_17337[(23)]);
var inst_17296 = (state_17337[(25)]);
var inst_17205 = (state_17337[(12)]);
var inst_17305__$1 = cljs.core.first(inst_17296);
var inst_17306 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17305__$1,inst_17205,done);
var state_17337__$1 = (function (){var statearr_17413 = state_17337;
(statearr_17413[(23)] = inst_17305__$1);

return statearr_17413;
})();
if(cljs.core.truth_(inst_17306)){
var statearr_17414_17473 = state_17337__$1;
(statearr_17414_17473[(1)] = (39));

} else {
var statearr_17415_17474 = state_17337__$1;
(statearr_17415_17474[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17338 === (8))){
var inst_17217 = (state_17337[(16)]);
var inst_17216 = (state_17337[(17)]);
var inst_17219 = (inst_17217 < inst_17216);
var inst_17220 = inst_17219;
var state_17337__$1 = state_17337;
if(cljs.core.truth_(inst_17220)){
var statearr_17416_17475 = state_17337__$1;
(statearr_17416_17475[(1)] = (10));

} else {
var statearr_17417_17476 = state_17337__$1;
(statearr_17417_17476[(1)] = (11));

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
});})(c__14735__auto___17422,cs,m,dchan,dctr,done))
;
return ((function (switch__14552__auto__,c__14735__auto___17422,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__14553__auto__ = null;
var cljs$core$async$mult_$_state_machine__14553__auto____0 = (function (){
var statearr_17418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17418[(0)] = cljs$core$async$mult_$_state_machine__14553__auto__);

(statearr_17418[(1)] = (1));

return statearr_17418;
});
var cljs$core$async$mult_$_state_machine__14553__auto____1 = (function (state_17337){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_17337);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e17419){if((e17419 instanceof Object)){
var ex__14556__auto__ = e17419;
var statearr_17420_17477 = state_17337;
(statearr_17420_17477[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17337);

return cljs.core.cst$kw$recur;
} else {
throw e17419;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__17478 = state_17337;
state_17337 = G__17478;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14553__auto__ = function(state_17337){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14553__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14553__auto____1.call(this,state_17337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14553__auto____0;
cljs$core$async$mult_$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14553__auto____1;
return cljs$core$async$mult_$_state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto___17422,cs,m,dchan,dctr,done))
})();
var state__14737__auto__ = (function (){var statearr_17421 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_17421[(6)] = c__14735__auto___17422);

return statearr_17421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto___17422,cs,m,dchan,dctr,done))
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
var G__17480 = arguments.length;
switch (G__17480) {
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
var len__4531__auto___17492 = arguments.length;
var i__4532__auto___17493 = (0);
while(true){
if((i__4532__auto___17493 < len__4531__auto___17492)){
args__4534__auto__.push((arguments[i__4532__auto___17493]));

var G__17494 = (i__4532__auto___17493 + (1));
i__4532__auto___17493 = G__17494;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17486){
var map__17487 = p__17486;
var map__17487__$1 = ((((!((map__17487 == null)))?(((((map__17487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17487):map__17487);
var opts = map__17487__$1;
var statearr_17489_17495 = state;
(statearr_17489_17495[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__17487,map__17487__$1,opts){
return (function (val){
var statearr_17490_17496 = state;
(statearr_17490_17496[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__17487,map__17487__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_17491_17497 = state;
(statearr_17491_17497[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17482){
var G__17483 = cljs.core.first(seq17482);
var seq17482__$1 = cljs.core.next(seq17482);
var G__17484 = cljs.core.first(seq17482__$1);
var seq17482__$2 = cljs.core.next(seq17482__$1);
var G__17485 = cljs.core.first(seq17482__$2);
var seq17482__$3 = cljs.core.next(seq17482__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17483,G__17484,G__17485,seq17482__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17498 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17498 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta17499){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta17499 = meta17499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17500,meta17499__$1){
var self__ = this;
var _17500__$1 = this;
return (new cljs.core.async.t_cljs$core$async17498(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta17499__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17498.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17500){
var self__ = this;
var _17500__$1 = this;
return self__.meta17499;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17498.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17498.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17498.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17498.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17498.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17498.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17498.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17498.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async17498.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta17499], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17498.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17498.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17498";

cljs.core.async.t_cljs$core$async17498.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17498");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17498.
 */
cljs.core.async.__GT_t_cljs$core$async17498 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17498(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17499){
return (new cljs.core.async.t_cljs$core$async17498(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17499));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17498(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14735__auto___17662 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto___17662,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto___17662,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17602){
var state_val_17603 = (state_17602[(1)]);
if((state_val_17603 === (7))){
var inst_17517 = (state_17602[(2)]);
var state_17602__$1 = state_17602;
var statearr_17604_17663 = state_17602__$1;
(statearr_17604_17663[(2)] = inst_17517);

(statearr_17604_17663[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (20))){
var inst_17529 = (state_17602[(7)]);
var state_17602__$1 = state_17602;
var statearr_17605_17664 = state_17602__$1;
(statearr_17605_17664[(2)] = inst_17529);

(statearr_17605_17664[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (27))){
var state_17602__$1 = state_17602;
var statearr_17606_17665 = state_17602__$1;
(statearr_17606_17665[(2)] = null);

(statearr_17606_17665[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (1))){
var inst_17504 = (state_17602[(8)]);
var inst_17504__$1 = calc_state();
var inst_17506 = (inst_17504__$1 == null);
var inst_17507 = cljs.core.not(inst_17506);
var state_17602__$1 = (function (){var statearr_17607 = state_17602;
(statearr_17607[(8)] = inst_17504__$1);

return statearr_17607;
})();
if(inst_17507){
var statearr_17608_17666 = state_17602__$1;
(statearr_17608_17666[(1)] = (2));

} else {
var statearr_17609_17667 = state_17602__$1;
(statearr_17609_17667[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (24))){
var inst_17576 = (state_17602[(9)]);
var inst_17562 = (state_17602[(10)]);
var inst_17553 = (state_17602[(11)]);
var inst_17576__$1 = (inst_17553.cljs$core$IFn$_invoke$arity$1 ? inst_17553.cljs$core$IFn$_invoke$arity$1(inst_17562) : inst_17553.call(null,inst_17562));
var state_17602__$1 = (function (){var statearr_17610 = state_17602;
(statearr_17610[(9)] = inst_17576__$1);

return statearr_17610;
})();
if(cljs.core.truth_(inst_17576__$1)){
var statearr_17611_17668 = state_17602__$1;
(statearr_17611_17668[(1)] = (29));

} else {
var statearr_17612_17669 = state_17602__$1;
(statearr_17612_17669[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (4))){
var inst_17520 = (state_17602[(2)]);
var state_17602__$1 = state_17602;
if(cljs.core.truth_(inst_17520)){
var statearr_17613_17670 = state_17602__$1;
(statearr_17613_17670[(1)] = (8));

} else {
var statearr_17614_17671 = state_17602__$1;
(statearr_17614_17671[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (15))){
var inst_17547 = (state_17602[(2)]);
var state_17602__$1 = state_17602;
if(cljs.core.truth_(inst_17547)){
var statearr_17615_17672 = state_17602__$1;
(statearr_17615_17672[(1)] = (19));

} else {
var statearr_17616_17673 = state_17602__$1;
(statearr_17616_17673[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (21))){
var inst_17552 = (state_17602[(12)]);
var inst_17552__$1 = (state_17602[(2)]);
var inst_17553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17552__$1,cljs.core.cst$kw$solos);
var inst_17554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17552__$1,cljs.core.cst$kw$mutes);
var inst_17555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17552__$1,cljs.core.cst$kw$reads);
var state_17602__$1 = (function (){var statearr_17617 = state_17602;
(statearr_17617[(13)] = inst_17554);

(statearr_17617[(12)] = inst_17552__$1);

(statearr_17617[(11)] = inst_17553);

return statearr_17617;
})();
return cljs.core.async.ioc_alts_BANG_(state_17602__$1,(22),inst_17555);
} else {
if((state_val_17603 === (31))){
var inst_17584 = (state_17602[(2)]);
var state_17602__$1 = state_17602;
if(cljs.core.truth_(inst_17584)){
var statearr_17618_17674 = state_17602__$1;
(statearr_17618_17674[(1)] = (32));

} else {
var statearr_17619_17675 = state_17602__$1;
(statearr_17619_17675[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (32))){
var inst_17561 = (state_17602[(14)]);
var state_17602__$1 = state_17602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17602__$1,(35),out,inst_17561);
} else {
if((state_val_17603 === (33))){
var inst_17552 = (state_17602[(12)]);
var inst_17529 = inst_17552;
var state_17602__$1 = (function (){var statearr_17620 = state_17602;
(statearr_17620[(7)] = inst_17529);

return statearr_17620;
})();
var statearr_17621_17676 = state_17602__$1;
(statearr_17621_17676[(2)] = null);

(statearr_17621_17676[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (13))){
var inst_17529 = (state_17602[(7)]);
var inst_17536 = inst_17529.cljs$lang$protocol_mask$partition0$;
var inst_17537 = (inst_17536 & (64));
var inst_17538 = inst_17529.cljs$core$ISeq$;
var inst_17539 = (cljs.core.PROTOCOL_SENTINEL === inst_17538);
var inst_17540 = ((inst_17537) || (inst_17539));
var state_17602__$1 = state_17602;
if(cljs.core.truth_(inst_17540)){
var statearr_17622_17677 = state_17602__$1;
(statearr_17622_17677[(1)] = (16));

} else {
var statearr_17623_17678 = state_17602__$1;
(statearr_17623_17678[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (22))){
var inst_17562 = (state_17602[(10)]);
var inst_17561 = (state_17602[(14)]);
var inst_17560 = (state_17602[(2)]);
var inst_17561__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17560,(0),null);
var inst_17562__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17560,(1),null);
var inst_17563 = (inst_17561__$1 == null);
var inst_17564 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17562__$1,change);
var inst_17565 = ((inst_17563) || (inst_17564));
var state_17602__$1 = (function (){var statearr_17624 = state_17602;
(statearr_17624[(10)] = inst_17562__$1);

(statearr_17624[(14)] = inst_17561__$1);

return statearr_17624;
})();
if(cljs.core.truth_(inst_17565)){
var statearr_17625_17679 = state_17602__$1;
(statearr_17625_17679[(1)] = (23));

} else {
var statearr_17626_17680 = state_17602__$1;
(statearr_17626_17680[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (36))){
var inst_17552 = (state_17602[(12)]);
var inst_17529 = inst_17552;
var state_17602__$1 = (function (){var statearr_17627 = state_17602;
(statearr_17627[(7)] = inst_17529);

return statearr_17627;
})();
var statearr_17628_17681 = state_17602__$1;
(statearr_17628_17681[(2)] = null);

(statearr_17628_17681[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (29))){
var inst_17576 = (state_17602[(9)]);
var state_17602__$1 = state_17602;
var statearr_17629_17682 = state_17602__$1;
(statearr_17629_17682[(2)] = inst_17576);

(statearr_17629_17682[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (6))){
var state_17602__$1 = state_17602;
var statearr_17630_17683 = state_17602__$1;
(statearr_17630_17683[(2)] = false);

(statearr_17630_17683[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (28))){
var inst_17572 = (state_17602[(2)]);
var inst_17573 = calc_state();
var inst_17529 = inst_17573;
var state_17602__$1 = (function (){var statearr_17631 = state_17602;
(statearr_17631[(7)] = inst_17529);

(statearr_17631[(15)] = inst_17572);

return statearr_17631;
})();
var statearr_17632_17684 = state_17602__$1;
(statearr_17632_17684[(2)] = null);

(statearr_17632_17684[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (25))){
var inst_17598 = (state_17602[(2)]);
var state_17602__$1 = state_17602;
var statearr_17633_17685 = state_17602__$1;
(statearr_17633_17685[(2)] = inst_17598);

(statearr_17633_17685[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (34))){
var inst_17596 = (state_17602[(2)]);
var state_17602__$1 = state_17602;
var statearr_17634_17686 = state_17602__$1;
(statearr_17634_17686[(2)] = inst_17596);

(statearr_17634_17686[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (17))){
var state_17602__$1 = state_17602;
var statearr_17635_17687 = state_17602__$1;
(statearr_17635_17687[(2)] = false);

(statearr_17635_17687[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (3))){
var state_17602__$1 = state_17602;
var statearr_17636_17688 = state_17602__$1;
(statearr_17636_17688[(2)] = false);

(statearr_17636_17688[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (12))){
var inst_17600 = (state_17602[(2)]);
var state_17602__$1 = state_17602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17602__$1,inst_17600);
} else {
if((state_val_17603 === (2))){
var inst_17504 = (state_17602[(8)]);
var inst_17509 = inst_17504.cljs$lang$protocol_mask$partition0$;
var inst_17510 = (inst_17509 & (64));
var inst_17511 = inst_17504.cljs$core$ISeq$;
var inst_17512 = (cljs.core.PROTOCOL_SENTINEL === inst_17511);
var inst_17513 = ((inst_17510) || (inst_17512));
var state_17602__$1 = state_17602;
if(cljs.core.truth_(inst_17513)){
var statearr_17637_17689 = state_17602__$1;
(statearr_17637_17689[(1)] = (5));

} else {
var statearr_17638_17690 = state_17602__$1;
(statearr_17638_17690[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (23))){
var inst_17561 = (state_17602[(14)]);
var inst_17567 = (inst_17561 == null);
var state_17602__$1 = state_17602;
if(cljs.core.truth_(inst_17567)){
var statearr_17639_17691 = state_17602__$1;
(statearr_17639_17691[(1)] = (26));

} else {
var statearr_17640_17692 = state_17602__$1;
(statearr_17640_17692[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (35))){
var inst_17587 = (state_17602[(2)]);
var state_17602__$1 = state_17602;
if(cljs.core.truth_(inst_17587)){
var statearr_17641_17693 = state_17602__$1;
(statearr_17641_17693[(1)] = (36));

} else {
var statearr_17642_17694 = state_17602__$1;
(statearr_17642_17694[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (19))){
var inst_17529 = (state_17602[(7)]);
var inst_17549 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17529);
var state_17602__$1 = state_17602;
var statearr_17643_17695 = state_17602__$1;
(statearr_17643_17695[(2)] = inst_17549);

(statearr_17643_17695[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (11))){
var inst_17529 = (state_17602[(7)]);
var inst_17533 = (inst_17529 == null);
var inst_17534 = cljs.core.not(inst_17533);
var state_17602__$1 = state_17602;
if(inst_17534){
var statearr_17644_17696 = state_17602__$1;
(statearr_17644_17696[(1)] = (13));

} else {
var statearr_17645_17697 = state_17602__$1;
(statearr_17645_17697[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (9))){
var inst_17504 = (state_17602[(8)]);
var state_17602__$1 = state_17602;
var statearr_17646_17698 = state_17602__$1;
(statearr_17646_17698[(2)] = inst_17504);

(statearr_17646_17698[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (5))){
var state_17602__$1 = state_17602;
var statearr_17647_17699 = state_17602__$1;
(statearr_17647_17699[(2)] = true);

(statearr_17647_17699[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (14))){
var state_17602__$1 = state_17602;
var statearr_17648_17700 = state_17602__$1;
(statearr_17648_17700[(2)] = false);

(statearr_17648_17700[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (26))){
var inst_17562 = (state_17602[(10)]);
var inst_17569 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17562);
var state_17602__$1 = state_17602;
var statearr_17649_17701 = state_17602__$1;
(statearr_17649_17701[(2)] = inst_17569);

(statearr_17649_17701[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (16))){
var state_17602__$1 = state_17602;
var statearr_17650_17702 = state_17602__$1;
(statearr_17650_17702[(2)] = true);

(statearr_17650_17702[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (38))){
var inst_17592 = (state_17602[(2)]);
var state_17602__$1 = state_17602;
var statearr_17651_17703 = state_17602__$1;
(statearr_17651_17703[(2)] = inst_17592);

(statearr_17651_17703[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (30))){
var inst_17554 = (state_17602[(13)]);
var inst_17562 = (state_17602[(10)]);
var inst_17553 = (state_17602[(11)]);
var inst_17579 = cljs.core.empty_QMARK_(inst_17553);
var inst_17580 = (inst_17554.cljs$core$IFn$_invoke$arity$1 ? inst_17554.cljs$core$IFn$_invoke$arity$1(inst_17562) : inst_17554.call(null,inst_17562));
var inst_17581 = cljs.core.not(inst_17580);
var inst_17582 = ((inst_17579) && (inst_17581));
var state_17602__$1 = state_17602;
var statearr_17652_17704 = state_17602__$1;
(statearr_17652_17704[(2)] = inst_17582);

(statearr_17652_17704[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (10))){
var inst_17504 = (state_17602[(8)]);
var inst_17525 = (state_17602[(2)]);
var inst_17526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17525,cljs.core.cst$kw$solos);
var inst_17527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17525,cljs.core.cst$kw$mutes);
var inst_17528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17525,cljs.core.cst$kw$reads);
var inst_17529 = inst_17504;
var state_17602__$1 = (function (){var statearr_17653 = state_17602;
(statearr_17653[(7)] = inst_17529);

(statearr_17653[(16)] = inst_17527);

(statearr_17653[(17)] = inst_17528);

(statearr_17653[(18)] = inst_17526);

return statearr_17653;
})();
var statearr_17654_17705 = state_17602__$1;
(statearr_17654_17705[(2)] = null);

(statearr_17654_17705[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (18))){
var inst_17544 = (state_17602[(2)]);
var state_17602__$1 = state_17602;
var statearr_17655_17706 = state_17602__$1;
(statearr_17655_17706[(2)] = inst_17544);

(statearr_17655_17706[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (37))){
var state_17602__$1 = state_17602;
var statearr_17656_17707 = state_17602__$1;
(statearr_17656_17707[(2)] = null);

(statearr_17656_17707[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17603 === (8))){
var inst_17504 = (state_17602[(8)]);
var inst_17522 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17504);
var state_17602__$1 = state_17602;
var statearr_17657_17708 = state_17602__$1;
(statearr_17657_17708[(2)] = inst_17522);

(statearr_17657_17708[(1)] = (10));


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
});})(c__14735__auto___17662,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14552__auto__,c__14735__auto___17662,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__14553__auto__ = null;
var cljs$core$async$mix_$_state_machine__14553__auto____0 = (function (){
var statearr_17658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17658[(0)] = cljs$core$async$mix_$_state_machine__14553__auto__);

(statearr_17658[(1)] = (1));

return statearr_17658;
});
var cljs$core$async$mix_$_state_machine__14553__auto____1 = (function (state_17602){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_17602);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e17659){if((e17659 instanceof Object)){
var ex__14556__auto__ = e17659;
var statearr_17660_17709 = state_17602;
(statearr_17660_17709[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17602);

return cljs.core.cst$kw$recur;
} else {
throw e17659;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__17710 = state_17602;
state_17602 = G__17710;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14553__auto__ = function(state_17602){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14553__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14553__auto____1.call(this,state_17602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14553__auto____0;
cljs$core$async$mix_$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14553__auto____1;
return cljs$core$async$mix_$_state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto___17662,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14737__auto__ = (function (){var statearr_17661 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_17661[(6)] = c__14735__auto___17662);

return statearr_17661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto___17662,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__17712 = arguments.length;
switch (G__17712) {
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
var G__17716 = arguments.length;
switch (G__17716) {
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
return (function (p1__17714_SHARP_){
if(cljs.core.truth_((p1__17714_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17714_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17714_SHARP_.call(null,topic)))){
return p1__17714_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17714_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17717 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17717 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17718){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17718 = meta17718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17719,meta17718__$1){
var self__ = this;
var _17719__$1 = this;
return (new cljs.core.async.t_cljs$core$async17717(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17718__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17717.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17719){
var self__ = this;
var _17719__$1 = this;
return self__.meta17718;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17717.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17717.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17717.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17717.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17717.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async17717.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17717.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17717.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta17718], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17717.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17717";

cljs.core.async.t_cljs$core$async17717.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17717");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17717.
 */
cljs.core.async.__GT_t_cljs$core$async17717 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17717(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17718){
return (new cljs.core.async.t_cljs$core$async17717(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17718));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17717(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14735__auto___17837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto___17837,mults,ensure_mult,p){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto___17837,mults,ensure_mult,p){
return (function (state_17791){
var state_val_17792 = (state_17791[(1)]);
if((state_val_17792 === (7))){
var inst_17787 = (state_17791[(2)]);
var state_17791__$1 = state_17791;
var statearr_17793_17838 = state_17791__$1;
(statearr_17793_17838[(2)] = inst_17787);

(statearr_17793_17838[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17792 === (20))){
var state_17791__$1 = state_17791;
var statearr_17794_17839 = state_17791__$1;
(statearr_17794_17839[(2)] = null);

(statearr_17794_17839[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17792 === (1))){
var state_17791__$1 = state_17791;
var statearr_17795_17840 = state_17791__$1;
(statearr_17795_17840[(2)] = null);

(statearr_17795_17840[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17792 === (24))){
var inst_17770 = (state_17791[(7)]);
var inst_17779 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17770);
var state_17791__$1 = state_17791;
var statearr_17796_17841 = state_17791__$1;
(statearr_17796_17841[(2)] = inst_17779);

(statearr_17796_17841[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17792 === (4))){
var inst_17722 = (state_17791[(8)]);
var inst_17722__$1 = (state_17791[(2)]);
var inst_17723 = (inst_17722__$1 == null);
var state_17791__$1 = (function (){var statearr_17797 = state_17791;
(statearr_17797[(8)] = inst_17722__$1);

return statearr_17797;
})();
if(cljs.core.truth_(inst_17723)){
var statearr_17798_17842 = state_17791__$1;
(statearr_17798_17842[(1)] = (5));

} else {
var statearr_17799_17843 = state_17791__$1;
(statearr_17799_17843[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17792 === (15))){
var inst_17764 = (state_17791[(2)]);
var state_17791__$1 = state_17791;
var statearr_17800_17844 = state_17791__$1;
(statearr_17800_17844[(2)] = inst_17764);

(statearr_17800_17844[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17792 === (21))){
var inst_17784 = (state_17791[(2)]);
var state_17791__$1 = (function (){var statearr_17801 = state_17791;
(statearr_17801[(9)] = inst_17784);

return statearr_17801;
})();
var statearr_17802_17845 = state_17791__$1;
(statearr_17802_17845[(2)] = null);

(statearr_17802_17845[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17792 === (13))){
var inst_17746 = (state_17791[(10)]);
var inst_17748 = cljs.core.chunked_seq_QMARK_(inst_17746);
var state_17791__$1 = state_17791;
if(inst_17748){
var statearr_17803_17846 = state_17791__$1;
(statearr_17803_17846[(1)] = (16));

} else {
var statearr_17804_17847 = state_17791__$1;
(statearr_17804_17847[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17792 === (22))){
var inst_17776 = (state_17791[(2)]);
var state_17791__$1 = state_17791;
if(cljs.core.truth_(inst_17776)){
var statearr_17805_17848 = state_17791__$1;
(statearr_17805_17848[(1)] = (23));

} else {
var statearr_17806_17849 = state_17791__$1;
(statearr_17806_17849[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17792 === (6))){
var inst_17772 = (state_17791[(11)]);
var inst_17770 = (state_17791[(7)]);
var inst_17722 = (state_17791[(8)]);
var inst_17770__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17722) : topic_fn.call(null,inst_17722));
var inst_17771 = cljs.core.deref(mults);
var inst_17772__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17771,inst_17770__$1);
var state_17791__$1 = (function (){var statearr_17807 = state_17791;
(statearr_17807[(11)] = inst_17772__$1);

(statearr_17807[(7)] = inst_17770__$1);

return statearr_17807;
})();
if(cljs.core.truth_(inst_17772__$1)){
var statearr_17808_17850 = state_17791__$1;
(statearr_17808_17850[(1)] = (19));

} else {
var statearr_17809_17851 = state_17791__$1;
(statearr_17809_17851[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17792 === (25))){
var inst_17781 = (state_17791[(2)]);
var state_17791__$1 = state_17791;
var statearr_17810_17852 = state_17791__$1;
(statearr_17810_17852[(2)] = inst_17781);

(statearr_17810_17852[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17792 === (17))){
var inst_17746 = (state_17791[(10)]);
var inst_17755 = cljs.core.first(inst_17746);
var inst_17756 = cljs.core.async.muxch_STAR_(inst_17755);
var inst_17757 = cljs.core.async.close_BANG_(inst_17756);
var inst_17758 = cljs.core.next(inst_17746);
var inst_17732 = inst_17758;
var inst_17733 = null;
var inst_17734 = (0);
var inst_17735 = (0);
var state_17791__$1 = (function (){var statearr_17811 = state_17791;
(statearr_17811[(12)] = inst_17734);

(statearr_17811[(13)] = inst_17732);

(statearr_17811[(14)] = inst_17757);

(statearr_17811[(15)] = inst_17733);

(statearr_17811[(16)] = inst_17735);

return statearr_17811;
})();
var statearr_17812_17853 = state_17791__$1;
(statearr_17812_17853[(2)] = null);

(statearr_17812_17853[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17792 === (3))){
var inst_17789 = (state_17791[(2)]);
var state_17791__$1 = state_17791;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17791__$1,inst_17789);
} else {
if((state_val_17792 === (12))){
var inst_17766 = (state_17791[(2)]);
var state_17791__$1 = state_17791;
var statearr_17813_17854 = state_17791__$1;
(statearr_17813_17854[(2)] = inst_17766);

(statearr_17813_17854[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17792 === (2))){
var state_17791__$1 = state_17791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17791__$1,(4),ch);
} else {
if((state_val_17792 === (23))){
var state_17791__$1 = state_17791;
var statearr_17814_17855 = state_17791__$1;
(statearr_17814_17855[(2)] = null);

(statearr_17814_17855[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17792 === (19))){
var inst_17772 = (state_17791[(11)]);
var inst_17722 = (state_17791[(8)]);
var inst_17774 = cljs.core.async.muxch_STAR_(inst_17772);
var state_17791__$1 = state_17791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17791__$1,(22),inst_17774,inst_17722);
} else {
if((state_val_17792 === (11))){
var inst_17732 = (state_17791[(13)]);
var inst_17746 = (state_17791[(10)]);
var inst_17746__$1 = cljs.core.seq(inst_17732);
var state_17791__$1 = (function (){var statearr_17815 = state_17791;
(statearr_17815[(10)] = inst_17746__$1);

return statearr_17815;
})();
if(inst_17746__$1){
var statearr_17816_17856 = state_17791__$1;
(statearr_17816_17856[(1)] = (13));

} else {
var statearr_17817_17857 = state_17791__$1;
(statearr_17817_17857[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17792 === (9))){
var inst_17768 = (state_17791[(2)]);
var state_17791__$1 = state_17791;
var statearr_17818_17858 = state_17791__$1;
(statearr_17818_17858[(2)] = inst_17768);

(statearr_17818_17858[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17792 === (5))){
var inst_17729 = cljs.core.deref(mults);
var inst_17730 = cljs.core.vals(inst_17729);
var inst_17731 = cljs.core.seq(inst_17730);
var inst_17732 = inst_17731;
var inst_17733 = null;
var inst_17734 = (0);
var inst_17735 = (0);
var state_17791__$1 = (function (){var statearr_17819 = state_17791;
(statearr_17819[(12)] = inst_17734);

(statearr_17819[(13)] = inst_17732);

(statearr_17819[(15)] = inst_17733);

(statearr_17819[(16)] = inst_17735);

return statearr_17819;
})();
var statearr_17820_17859 = state_17791__$1;
(statearr_17820_17859[(2)] = null);

(statearr_17820_17859[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17792 === (14))){
var state_17791__$1 = state_17791;
var statearr_17824_17860 = state_17791__$1;
(statearr_17824_17860[(2)] = null);

(statearr_17824_17860[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17792 === (16))){
var inst_17746 = (state_17791[(10)]);
var inst_17750 = cljs.core.chunk_first(inst_17746);
var inst_17751 = cljs.core.chunk_rest(inst_17746);
var inst_17752 = cljs.core.count(inst_17750);
var inst_17732 = inst_17751;
var inst_17733 = inst_17750;
var inst_17734 = inst_17752;
var inst_17735 = (0);
var state_17791__$1 = (function (){var statearr_17825 = state_17791;
(statearr_17825[(12)] = inst_17734);

(statearr_17825[(13)] = inst_17732);

(statearr_17825[(15)] = inst_17733);

(statearr_17825[(16)] = inst_17735);

return statearr_17825;
})();
var statearr_17826_17861 = state_17791__$1;
(statearr_17826_17861[(2)] = null);

(statearr_17826_17861[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17792 === (10))){
var inst_17734 = (state_17791[(12)]);
var inst_17732 = (state_17791[(13)]);
var inst_17733 = (state_17791[(15)]);
var inst_17735 = (state_17791[(16)]);
var inst_17740 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17733,inst_17735);
var inst_17741 = cljs.core.async.muxch_STAR_(inst_17740);
var inst_17742 = cljs.core.async.close_BANG_(inst_17741);
var inst_17743 = (inst_17735 + (1));
var tmp17821 = inst_17734;
var tmp17822 = inst_17732;
var tmp17823 = inst_17733;
var inst_17732__$1 = tmp17822;
var inst_17733__$1 = tmp17823;
var inst_17734__$1 = tmp17821;
var inst_17735__$1 = inst_17743;
var state_17791__$1 = (function (){var statearr_17827 = state_17791;
(statearr_17827[(12)] = inst_17734__$1);

(statearr_17827[(13)] = inst_17732__$1);

(statearr_17827[(17)] = inst_17742);

(statearr_17827[(15)] = inst_17733__$1);

(statearr_17827[(16)] = inst_17735__$1);

return statearr_17827;
})();
var statearr_17828_17862 = state_17791__$1;
(statearr_17828_17862[(2)] = null);

(statearr_17828_17862[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17792 === (18))){
var inst_17761 = (state_17791[(2)]);
var state_17791__$1 = state_17791;
var statearr_17829_17863 = state_17791__$1;
(statearr_17829_17863[(2)] = inst_17761);

(statearr_17829_17863[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17792 === (8))){
var inst_17734 = (state_17791[(12)]);
var inst_17735 = (state_17791[(16)]);
var inst_17737 = (inst_17735 < inst_17734);
var inst_17738 = inst_17737;
var state_17791__$1 = state_17791;
if(cljs.core.truth_(inst_17738)){
var statearr_17830_17864 = state_17791__$1;
(statearr_17830_17864[(1)] = (10));

} else {
var statearr_17831_17865 = state_17791__$1;
(statearr_17831_17865[(1)] = (11));

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
});})(c__14735__auto___17837,mults,ensure_mult,p))
;
return ((function (switch__14552__auto__,c__14735__auto___17837,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__14553__auto__ = null;
var cljs$core$async$state_machine__14553__auto____0 = (function (){
var statearr_17832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17832[(0)] = cljs$core$async$state_machine__14553__auto__);

(statearr_17832[(1)] = (1));

return statearr_17832;
});
var cljs$core$async$state_machine__14553__auto____1 = (function (state_17791){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_17791);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e17833){if((e17833 instanceof Object)){
var ex__14556__auto__ = e17833;
var statearr_17834_17866 = state_17791;
(statearr_17834_17866[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17791);

return cljs.core.cst$kw$recur;
} else {
throw e17833;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__17867 = state_17791;
state_17791 = G__17867;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
cljs$core$async$state_machine__14553__auto__ = function(state_17791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14553__auto____1.call(this,state_17791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14553__auto____0;
cljs$core$async$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14553__auto____1;
return cljs$core$async$state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto___17837,mults,ensure_mult,p))
})();
var state__14737__auto__ = (function (){var statearr_17835 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_17835[(6)] = c__14735__auto___17837);

return statearr_17835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto___17837,mults,ensure_mult,p))
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
var G__17869 = arguments.length;
switch (G__17869) {
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
var G__17872 = arguments.length;
switch (G__17872) {
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
var G__17875 = arguments.length;
switch (G__17875) {
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
var c__14735__auto___17942 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto___17942,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto___17942,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17914){
var state_val_17915 = (state_17914[(1)]);
if((state_val_17915 === (7))){
var state_17914__$1 = state_17914;
var statearr_17916_17943 = state_17914__$1;
(statearr_17916_17943[(2)] = null);

(statearr_17916_17943[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17915 === (1))){
var state_17914__$1 = state_17914;
var statearr_17917_17944 = state_17914__$1;
(statearr_17917_17944[(2)] = null);

(statearr_17917_17944[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17915 === (4))){
var inst_17878 = (state_17914[(7)]);
var inst_17880 = (inst_17878 < cnt);
var state_17914__$1 = state_17914;
if(cljs.core.truth_(inst_17880)){
var statearr_17918_17945 = state_17914__$1;
(statearr_17918_17945[(1)] = (6));

} else {
var statearr_17919_17946 = state_17914__$1;
(statearr_17919_17946[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17915 === (15))){
var inst_17910 = (state_17914[(2)]);
var state_17914__$1 = state_17914;
var statearr_17920_17947 = state_17914__$1;
(statearr_17920_17947[(2)] = inst_17910);

(statearr_17920_17947[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17915 === (13))){
var inst_17903 = cljs.core.async.close_BANG_(out);
var state_17914__$1 = state_17914;
var statearr_17921_17948 = state_17914__$1;
(statearr_17921_17948[(2)] = inst_17903);

(statearr_17921_17948[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17915 === (6))){
var state_17914__$1 = state_17914;
var statearr_17922_17949 = state_17914__$1;
(statearr_17922_17949[(2)] = null);

(statearr_17922_17949[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17915 === (3))){
var inst_17912 = (state_17914[(2)]);
var state_17914__$1 = state_17914;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17914__$1,inst_17912);
} else {
if((state_val_17915 === (12))){
var inst_17900 = (state_17914[(8)]);
var inst_17900__$1 = (state_17914[(2)]);
var inst_17901 = cljs.core.some(cljs.core.nil_QMARK_,inst_17900__$1);
var state_17914__$1 = (function (){var statearr_17923 = state_17914;
(statearr_17923[(8)] = inst_17900__$1);

return statearr_17923;
})();
if(cljs.core.truth_(inst_17901)){
var statearr_17924_17950 = state_17914__$1;
(statearr_17924_17950[(1)] = (13));

} else {
var statearr_17925_17951 = state_17914__$1;
(statearr_17925_17951[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17915 === (2))){
var inst_17877 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17878 = (0);
var state_17914__$1 = (function (){var statearr_17926 = state_17914;
(statearr_17926[(9)] = inst_17877);

(statearr_17926[(7)] = inst_17878);

return statearr_17926;
})();
var statearr_17927_17952 = state_17914__$1;
(statearr_17927_17952[(2)] = null);

(statearr_17927_17952[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17915 === (11))){
var inst_17878 = (state_17914[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17914,(10),Object,null,(9));
var inst_17887 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17878) : chs__$1.call(null,inst_17878));
var inst_17888 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17878) : done.call(null,inst_17878));
var inst_17889 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17887,inst_17888);
var state_17914__$1 = state_17914;
var statearr_17928_17953 = state_17914__$1;
(statearr_17928_17953[(2)] = inst_17889);


cljs.core.async.impl.ioc_helpers.process_exception(state_17914__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17915 === (9))){
var inst_17878 = (state_17914[(7)]);
var inst_17891 = (state_17914[(2)]);
var inst_17892 = (inst_17878 + (1));
var inst_17878__$1 = inst_17892;
var state_17914__$1 = (function (){var statearr_17929 = state_17914;
(statearr_17929[(7)] = inst_17878__$1);

(statearr_17929[(10)] = inst_17891);

return statearr_17929;
})();
var statearr_17930_17954 = state_17914__$1;
(statearr_17930_17954[(2)] = null);

(statearr_17930_17954[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17915 === (5))){
var inst_17898 = (state_17914[(2)]);
var state_17914__$1 = (function (){var statearr_17931 = state_17914;
(statearr_17931[(11)] = inst_17898);

return statearr_17931;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17914__$1,(12),dchan);
} else {
if((state_val_17915 === (14))){
var inst_17900 = (state_17914[(8)]);
var inst_17905 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17900);
var state_17914__$1 = state_17914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17914__$1,(16),out,inst_17905);
} else {
if((state_val_17915 === (16))){
var inst_17907 = (state_17914[(2)]);
var state_17914__$1 = (function (){var statearr_17932 = state_17914;
(statearr_17932[(12)] = inst_17907);

return statearr_17932;
})();
var statearr_17933_17955 = state_17914__$1;
(statearr_17933_17955[(2)] = null);

(statearr_17933_17955[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17915 === (10))){
var inst_17882 = (state_17914[(2)]);
var inst_17883 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17914__$1 = (function (){var statearr_17934 = state_17914;
(statearr_17934[(13)] = inst_17882);

return statearr_17934;
})();
var statearr_17935_17956 = state_17914__$1;
(statearr_17935_17956[(2)] = inst_17883);


cljs.core.async.impl.ioc_helpers.process_exception(state_17914__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17915 === (8))){
var inst_17896 = (state_17914[(2)]);
var state_17914__$1 = state_17914;
var statearr_17936_17957 = state_17914__$1;
(statearr_17936_17957[(2)] = inst_17896);

(statearr_17936_17957[(1)] = (5));


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
});})(c__14735__auto___17942,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14552__auto__,c__14735__auto___17942,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__14553__auto__ = null;
var cljs$core$async$state_machine__14553__auto____0 = (function (){
var statearr_17937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17937[(0)] = cljs$core$async$state_machine__14553__auto__);

(statearr_17937[(1)] = (1));

return statearr_17937;
});
var cljs$core$async$state_machine__14553__auto____1 = (function (state_17914){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_17914);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e17938){if((e17938 instanceof Object)){
var ex__14556__auto__ = e17938;
var statearr_17939_17958 = state_17914;
(statearr_17939_17958[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17914);

return cljs.core.cst$kw$recur;
} else {
throw e17938;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__17959 = state_17914;
state_17914 = G__17959;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
cljs$core$async$state_machine__14553__auto__ = function(state_17914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14553__auto____1.call(this,state_17914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14553__auto____0;
cljs$core$async$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14553__auto____1;
return cljs$core$async$state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto___17942,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14737__auto__ = (function (){var statearr_17940 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_17940[(6)] = c__14735__auto___17942);

return statearr_17940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto___17942,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__17962 = arguments.length;
switch (G__17962) {
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
var c__14735__auto___18016 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto___18016,out){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto___18016,out){
return (function (state_17994){
var state_val_17995 = (state_17994[(1)]);
if((state_val_17995 === (7))){
var inst_17974 = (state_17994[(7)]);
var inst_17973 = (state_17994[(8)]);
var inst_17973__$1 = (state_17994[(2)]);
var inst_17974__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17973__$1,(0),null);
var inst_17975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17973__$1,(1),null);
var inst_17976 = (inst_17974__$1 == null);
var state_17994__$1 = (function (){var statearr_17996 = state_17994;
(statearr_17996[(7)] = inst_17974__$1);

(statearr_17996[(8)] = inst_17973__$1);

(statearr_17996[(9)] = inst_17975);

return statearr_17996;
})();
if(cljs.core.truth_(inst_17976)){
var statearr_17997_18017 = state_17994__$1;
(statearr_17997_18017[(1)] = (8));

} else {
var statearr_17998_18018 = state_17994__$1;
(statearr_17998_18018[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17995 === (1))){
var inst_17963 = cljs.core.vec(chs);
var inst_17964 = inst_17963;
var state_17994__$1 = (function (){var statearr_17999 = state_17994;
(statearr_17999[(10)] = inst_17964);

return statearr_17999;
})();
var statearr_18000_18019 = state_17994__$1;
(statearr_18000_18019[(2)] = null);

(statearr_18000_18019[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17995 === (4))){
var inst_17964 = (state_17994[(10)]);
var state_17994__$1 = state_17994;
return cljs.core.async.ioc_alts_BANG_(state_17994__$1,(7),inst_17964);
} else {
if((state_val_17995 === (6))){
var inst_17990 = (state_17994[(2)]);
var state_17994__$1 = state_17994;
var statearr_18001_18020 = state_17994__$1;
(statearr_18001_18020[(2)] = inst_17990);

(statearr_18001_18020[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17995 === (3))){
var inst_17992 = (state_17994[(2)]);
var state_17994__$1 = state_17994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17994__$1,inst_17992);
} else {
if((state_val_17995 === (2))){
var inst_17964 = (state_17994[(10)]);
var inst_17966 = cljs.core.count(inst_17964);
var inst_17967 = (inst_17966 > (0));
var state_17994__$1 = state_17994;
if(cljs.core.truth_(inst_17967)){
var statearr_18003_18021 = state_17994__$1;
(statearr_18003_18021[(1)] = (4));

} else {
var statearr_18004_18022 = state_17994__$1;
(statearr_18004_18022[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17995 === (11))){
var inst_17964 = (state_17994[(10)]);
var inst_17983 = (state_17994[(2)]);
var tmp18002 = inst_17964;
var inst_17964__$1 = tmp18002;
var state_17994__$1 = (function (){var statearr_18005 = state_17994;
(statearr_18005[(11)] = inst_17983);

(statearr_18005[(10)] = inst_17964__$1);

return statearr_18005;
})();
var statearr_18006_18023 = state_17994__$1;
(statearr_18006_18023[(2)] = null);

(statearr_18006_18023[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17995 === (9))){
var inst_17974 = (state_17994[(7)]);
var state_17994__$1 = state_17994;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17994__$1,(11),out,inst_17974);
} else {
if((state_val_17995 === (5))){
var inst_17988 = cljs.core.async.close_BANG_(out);
var state_17994__$1 = state_17994;
var statearr_18007_18024 = state_17994__$1;
(statearr_18007_18024[(2)] = inst_17988);

(statearr_18007_18024[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17995 === (10))){
var inst_17986 = (state_17994[(2)]);
var state_17994__$1 = state_17994;
var statearr_18008_18025 = state_17994__$1;
(statearr_18008_18025[(2)] = inst_17986);

(statearr_18008_18025[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17995 === (8))){
var inst_17974 = (state_17994[(7)]);
var inst_17973 = (state_17994[(8)]);
var inst_17964 = (state_17994[(10)]);
var inst_17975 = (state_17994[(9)]);
var inst_17978 = (function (){var cs = inst_17964;
var vec__17969 = inst_17973;
var v = inst_17974;
var c = inst_17975;
return ((function (cs,vec__17969,v,c,inst_17974,inst_17973,inst_17964,inst_17975,state_val_17995,c__14735__auto___18016,out){
return (function (p1__17960_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17960_SHARP_);
});
;})(cs,vec__17969,v,c,inst_17974,inst_17973,inst_17964,inst_17975,state_val_17995,c__14735__auto___18016,out))
})();
var inst_17979 = cljs.core.filterv(inst_17978,inst_17964);
var inst_17964__$1 = inst_17979;
var state_17994__$1 = (function (){var statearr_18009 = state_17994;
(statearr_18009[(10)] = inst_17964__$1);

return statearr_18009;
})();
var statearr_18010_18026 = state_17994__$1;
(statearr_18010_18026[(2)] = null);

(statearr_18010_18026[(1)] = (2));


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
});})(c__14735__auto___18016,out))
;
return ((function (switch__14552__auto__,c__14735__auto___18016,out){
return (function() {
var cljs$core$async$state_machine__14553__auto__ = null;
var cljs$core$async$state_machine__14553__auto____0 = (function (){
var statearr_18011 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18011[(0)] = cljs$core$async$state_machine__14553__auto__);

(statearr_18011[(1)] = (1));

return statearr_18011;
});
var cljs$core$async$state_machine__14553__auto____1 = (function (state_17994){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_17994);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e18012){if((e18012 instanceof Object)){
var ex__14556__auto__ = e18012;
var statearr_18013_18027 = state_17994;
(statearr_18013_18027[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17994);

return cljs.core.cst$kw$recur;
} else {
throw e18012;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__18028 = state_17994;
state_17994 = G__18028;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
cljs$core$async$state_machine__14553__auto__ = function(state_17994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14553__auto____1.call(this,state_17994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14553__auto____0;
cljs$core$async$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14553__auto____1;
return cljs$core$async$state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto___18016,out))
})();
var state__14737__auto__ = (function (){var statearr_18014 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_18014[(6)] = c__14735__auto___18016);

return statearr_18014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto___18016,out))
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
var G__18030 = arguments.length;
switch (G__18030) {
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
var c__14735__auto___18075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto___18075,out){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto___18075,out){
return (function (state_18054){
var state_val_18055 = (state_18054[(1)]);
if((state_val_18055 === (7))){
var inst_18036 = (state_18054[(7)]);
var inst_18036__$1 = (state_18054[(2)]);
var inst_18037 = (inst_18036__$1 == null);
var inst_18038 = cljs.core.not(inst_18037);
var state_18054__$1 = (function (){var statearr_18056 = state_18054;
(statearr_18056[(7)] = inst_18036__$1);

return statearr_18056;
})();
if(inst_18038){
var statearr_18057_18076 = state_18054__$1;
(statearr_18057_18076[(1)] = (8));

} else {
var statearr_18058_18077 = state_18054__$1;
(statearr_18058_18077[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18055 === (1))){
var inst_18031 = (0);
var state_18054__$1 = (function (){var statearr_18059 = state_18054;
(statearr_18059[(8)] = inst_18031);

return statearr_18059;
})();
var statearr_18060_18078 = state_18054__$1;
(statearr_18060_18078[(2)] = null);

(statearr_18060_18078[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18055 === (4))){
var state_18054__$1 = state_18054;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18054__$1,(7),ch);
} else {
if((state_val_18055 === (6))){
var inst_18049 = (state_18054[(2)]);
var state_18054__$1 = state_18054;
var statearr_18061_18079 = state_18054__$1;
(statearr_18061_18079[(2)] = inst_18049);

(statearr_18061_18079[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18055 === (3))){
var inst_18051 = (state_18054[(2)]);
var inst_18052 = cljs.core.async.close_BANG_(out);
var state_18054__$1 = (function (){var statearr_18062 = state_18054;
(statearr_18062[(9)] = inst_18051);

return statearr_18062;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18054__$1,inst_18052);
} else {
if((state_val_18055 === (2))){
var inst_18031 = (state_18054[(8)]);
var inst_18033 = (inst_18031 < n);
var state_18054__$1 = state_18054;
if(cljs.core.truth_(inst_18033)){
var statearr_18063_18080 = state_18054__$1;
(statearr_18063_18080[(1)] = (4));

} else {
var statearr_18064_18081 = state_18054__$1;
(statearr_18064_18081[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18055 === (11))){
var inst_18031 = (state_18054[(8)]);
var inst_18041 = (state_18054[(2)]);
var inst_18042 = (inst_18031 + (1));
var inst_18031__$1 = inst_18042;
var state_18054__$1 = (function (){var statearr_18065 = state_18054;
(statearr_18065[(8)] = inst_18031__$1);

(statearr_18065[(10)] = inst_18041);

return statearr_18065;
})();
var statearr_18066_18082 = state_18054__$1;
(statearr_18066_18082[(2)] = null);

(statearr_18066_18082[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18055 === (9))){
var state_18054__$1 = state_18054;
var statearr_18067_18083 = state_18054__$1;
(statearr_18067_18083[(2)] = null);

(statearr_18067_18083[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18055 === (5))){
var state_18054__$1 = state_18054;
var statearr_18068_18084 = state_18054__$1;
(statearr_18068_18084[(2)] = null);

(statearr_18068_18084[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18055 === (10))){
var inst_18046 = (state_18054[(2)]);
var state_18054__$1 = state_18054;
var statearr_18069_18085 = state_18054__$1;
(statearr_18069_18085[(2)] = inst_18046);

(statearr_18069_18085[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18055 === (8))){
var inst_18036 = (state_18054[(7)]);
var state_18054__$1 = state_18054;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18054__$1,(11),out,inst_18036);
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
});})(c__14735__auto___18075,out))
;
return ((function (switch__14552__auto__,c__14735__auto___18075,out){
return (function() {
var cljs$core$async$state_machine__14553__auto__ = null;
var cljs$core$async$state_machine__14553__auto____0 = (function (){
var statearr_18070 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18070[(0)] = cljs$core$async$state_machine__14553__auto__);

(statearr_18070[(1)] = (1));

return statearr_18070;
});
var cljs$core$async$state_machine__14553__auto____1 = (function (state_18054){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_18054);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e18071){if((e18071 instanceof Object)){
var ex__14556__auto__ = e18071;
var statearr_18072_18086 = state_18054;
(statearr_18072_18086[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18054);

return cljs.core.cst$kw$recur;
} else {
throw e18071;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__18087 = state_18054;
state_18054 = G__18087;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
cljs$core$async$state_machine__14553__auto__ = function(state_18054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14553__auto____1.call(this,state_18054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14553__auto____0;
cljs$core$async$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14553__auto____1;
return cljs$core$async$state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto___18075,out))
})();
var state__14737__auto__ = (function (){var statearr_18073 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_18073[(6)] = c__14735__auto___18075);

return statearr_18073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto___18075,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18089 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18089 = (function (f,ch,meta18090){
this.f = f;
this.ch = ch;
this.meta18090 = meta18090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18091,meta18090__$1){
var self__ = this;
var _18091__$1 = this;
return (new cljs.core.async.t_cljs$core$async18089(self__.f,self__.ch,meta18090__$1));
});

cljs.core.async.t_cljs$core$async18089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18091){
var self__ = this;
var _18091__$1 = this;
return self__.meta18090;
});

cljs.core.async.t_cljs$core$async18089.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18089.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18089.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18089.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18089.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18092 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18092 = (function (f,ch,meta18090,_,fn1,meta18093){
this.f = f;
this.ch = ch;
this.meta18090 = meta18090;
this._ = _;
this.fn1 = fn1;
this.meta18093 = meta18093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18094,meta18093__$1){
var self__ = this;
var _18094__$1 = this;
return (new cljs.core.async.t_cljs$core$async18092(self__.f,self__.ch,self__.meta18090,self__._,self__.fn1,meta18093__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async18092.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18094){
var self__ = this;
var _18094__$1 = this;
return self__.meta18093;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18092.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18092.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18092.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18092.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18088_SHARP_){
var G__18095 = (((p1__18088_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18088_SHARP_) : self__.f.call(null,p1__18088_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18095) : f1.call(null,G__18095));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async18092.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18090,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async18089], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta18093], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18092.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18092.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18092";

cljs.core.async.t_cljs$core$async18092.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18092");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18092.
 */
cljs.core.async.__GT_t_cljs$core$async18092 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18092(f__$1,ch__$1,meta18090__$1,___$2,fn1__$1,meta18093){
return (new cljs.core.async.t_cljs$core$async18092(f__$1,ch__$1,meta18090__$1,___$2,fn1__$1,meta18093));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async18092(self__.f,self__.ch,self__.meta18090,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18096 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18096) : self__.f.call(null,G__18096));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async18089.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18089.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async18089.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18090], null);
});

cljs.core.async.t_cljs$core$async18089.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18089.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18089";

cljs.core.async.t_cljs$core$async18089.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18089");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18089.
 */
cljs.core.async.__GT_t_cljs$core$async18089 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18089(f__$1,ch__$1,meta18090){
return (new cljs.core.async.t_cljs$core$async18089(f__$1,ch__$1,meta18090));
});

}

return (new cljs.core.async.t_cljs$core$async18089(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18097 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18097 = (function (f,ch,meta18098){
this.f = f;
this.ch = ch;
this.meta18098 = meta18098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18099,meta18098__$1){
var self__ = this;
var _18099__$1 = this;
return (new cljs.core.async.t_cljs$core$async18097(self__.f,self__.ch,meta18098__$1));
});

cljs.core.async.t_cljs$core$async18097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18099){
var self__ = this;
var _18099__$1 = this;
return self__.meta18098;
});

cljs.core.async.t_cljs$core$async18097.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18097.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18097.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18097.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18097.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18097.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async18097.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18098], null);
});

cljs.core.async.t_cljs$core$async18097.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18097.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18097";

cljs.core.async.t_cljs$core$async18097.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18097");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18097.
 */
cljs.core.async.__GT_t_cljs$core$async18097 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18097(f__$1,ch__$1,meta18098){
return (new cljs.core.async.t_cljs$core$async18097(f__$1,ch__$1,meta18098));
});

}

return (new cljs.core.async.t_cljs$core$async18097(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18100 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18100 = (function (p,ch,meta18101){
this.p = p;
this.ch = ch;
this.meta18101 = meta18101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18102,meta18101__$1){
var self__ = this;
var _18102__$1 = this;
return (new cljs.core.async.t_cljs$core$async18100(self__.p,self__.ch,meta18101__$1));
});

cljs.core.async.t_cljs$core$async18100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18102){
var self__ = this;
var _18102__$1 = this;
return self__.meta18101;
});

cljs.core.async.t_cljs$core$async18100.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18100.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18100.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18100.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18100.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18100.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18100.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async18100.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18101], null);
});

cljs.core.async.t_cljs$core$async18100.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18100";

cljs.core.async.t_cljs$core$async18100.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18100");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18100.
 */
cljs.core.async.__GT_t_cljs$core$async18100 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18100(p__$1,ch__$1,meta18101){
return (new cljs.core.async.t_cljs$core$async18100(p__$1,ch__$1,meta18101));
});

}

return (new cljs.core.async.t_cljs$core$async18100(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18104 = arguments.length;
switch (G__18104) {
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
var c__14735__auto___18144 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto___18144,out){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto___18144,out){
return (function (state_18125){
var state_val_18126 = (state_18125[(1)]);
if((state_val_18126 === (7))){
var inst_18121 = (state_18125[(2)]);
var state_18125__$1 = state_18125;
var statearr_18127_18145 = state_18125__$1;
(statearr_18127_18145[(2)] = inst_18121);

(statearr_18127_18145[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18126 === (1))){
var state_18125__$1 = state_18125;
var statearr_18128_18146 = state_18125__$1;
(statearr_18128_18146[(2)] = null);

(statearr_18128_18146[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18126 === (4))){
var inst_18107 = (state_18125[(7)]);
var inst_18107__$1 = (state_18125[(2)]);
var inst_18108 = (inst_18107__$1 == null);
var state_18125__$1 = (function (){var statearr_18129 = state_18125;
(statearr_18129[(7)] = inst_18107__$1);

return statearr_18129;
})();
if(cljs.core.truth_(inst_18108)){
var statearr_18130_18147 = state_18125__$1;
(statearr_18130_18147[(1)] = (5));

} else {
var statearr_18131_18148 = state_18125__$1;
(statearr_18131_18148[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18126 === (6))){
var inst_18107 = (state_18125[(7)]);
var inst_18112 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18107) : p.call(null,inst_18107));
var state_18125__$1 = state_18125;
if(cljs.core.truth_(inst_18112)){
var statearr_18132_18149 = state_18125__$1;
(statearr_18132_18149[(1)] = (8));

} else {
var statearr_18133_18150 = state_18125__$1;
(statearr_18133_18150[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18126 === (3))){
var inst_18123 = (state_18125[(2)]);
var state_18125__$1 = state_18125;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18125__$1,inst_18123);
} else {
if((state_val_18126 === (2))){
var state_18125__$1 = state_18125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18125__$1,(4),ch);
} else {
if((state_val_18126 === (11))){
var inst_18115 = (state_18125[(2)]);
var state_18125__$1 = state_18125;
var statearr_18134_18151 = state_18125__$1;
(statearr_18134_18151[(2)] = inst_18115);

(statearr_18134_18151[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18126 === (9))){
var state_18125__$1 = state_18125;
var statearr_18135_18152 = state_18125__$1;
(statearr_18135_18152[(2)] = null);

(statearr_18135_18152[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18126 === (5))){
var inst_18110 = cljs.core.async.close_BANG_(out);
var state_18125__$1 = state_18125;
var statearr_18136_18153 = state_18125__$1;
(statearr_18136_18153[(2)] = inst_18110);

(statearr_18136_18153[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18126 === (10))){
var inst_18118 = (state_18125[(2)]);
var state_18125__$1 = (function (){var statearr_18137 = state_18125;
(statearr_18137[(8)] = inst_18118);

return statearr_18137;
})();
var statearr_18138_18154 = state_18125__$1;
(statearr_18138_18154[(2)] = null);

(statearr_18138_18154[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18126 === (8))){
var inst_18107 = (state_18125[(7)]);
var state_18125__$1 = state_18125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18125__$1,(11),out,inst_18107);
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
});})(c__14735__auto___18144,out))
;
return ((function (switch__14552__auto__,c__14735__auto___18144,out){
return (function() {
var cljs$core$async$state_machine__14553__auto__ = null;
var cljs$core$async$state_machine__14553__auto____0 = (function (){
var statearr_18139 = [null,null,null,null,null,null,null,null,null];
(statearr_18139[(0)] = cljs$core$async$state_machine__14553__auto__);

(statearr_18139[(1)] = (1));

return statearr_18139;
});
var cljs$core$async$state_machine__14553__auto____1 = (function (state_18125){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_18125);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e18140){if((e18140 instanceof Object)){
var ex__14556__auto__ = e18140;
var statearr_18141_18155 = state_18125;
(statearr_18141_18155[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18125);

return cljs.core.cst$kw$recur;
} else {
throw e18140;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__18156 = state_18125;
state_18125 = G__18156;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
cljs$core$async$state_machine__14553__auto__ = function(state_18125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14553__auto____1.call(this,state_18125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14553__auto____0;
cljs$core$async$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14553__auto____1;
return cljs$core$async$state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto___18144,out))
})();
var state__14737__auto__ = (function (){var statearr_18142 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_18142[(6)] = c__14735__auto___18144);

return statearr_18142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto___18144,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18158 = arguments.length;
switch (G__18158) {
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
var c__14735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto__){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto__){
return (function (state_18221){
var state_val_18222 = (state_18221[(1)]);
if((state_val_18222 === (7))){
var inst_18217 = (state_18221[(2)]);
var state_18221__$1 = state_18221;
var statearr_18223_18261 = state_18221__$1;
(statearr_18223_18261[(2)] = inst_18217);

(statearr_18223_18261[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18222 === (20))){
var inst_18187 = (state_18221[(7)]);
var inst_18198 = (state_18221[(2)]);
var inst_18199 = cljs.core.next(inst_18187);
var inst_18173 = inst_18199;
var inst_18174 = null;
var inst_18175 = (0);
var inst_18176 = (0);
var state_18221__$1 = (function (){var statearr_18224 = state_18221;
(statearr_18224[(8)] = inst_18173);

(statearr_18224[(9)] = inst_18175);

(statearr_18224[(10)] = inst_18176);

(statearr_18224[(11)] = inst_18198);

(statearr_18224[(12)] = inst_18174);

return statearr_18224;
})();
var statearr_18225_18262 = state_18221__$1;
(statearr_18225_18262[(2)] = null);

(statearr_18225_18262[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18222 === (1))){
var state_18221__$1 = state_18221;
var statearr_18226_18263 = state_18221__$1;
(statearr_18226_18263[(2)] = null);

(statearr_18226_18263[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18222 === (4))){
var inst_18162 = (state_18221[(13)]);
var inst_18162__$1 = (state_18221[(2)]);
var inst_18163 = (inst_18162__$1 == null);
var state_18221__$1 = (function (){var statearr_18227 = state_18221;
(statearr_18227[(13)] = inst_18162__$1);

return statearr_18227;
})();
if(cljs.core.truth_(inst_18163)){
var statearr_18228_18264 = state_18221__$1;
(statearr_18228_18264[(1)] = (5));

} else {
var statearr_18229_18265 = state_18221__$1;
(statearr_18229_18265[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18222 === (15))){
var state_18221__$1 = state_18221;
var statearr_18233_18266 = state_18221__$1;
(statearr_18233_18266[(2)] = null);

(statearr_18233_18266[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18222 === (21))){
var state_18221__$1 = state_18221;
var statearr_18234_18267 = state_18221__$1;
(statearr_18234_18267[(2)] = null);

(statearr_18234_18267[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18222 === (13))){
var inst_18173 = (state_18221[(8)]);
var inst_18175 = (state_18221[(9)]);
var inst_18176 = (state_18221[(10)]);
var inst_18174 = (state_18221[(12)]);
var inst_18183 = (state_18221[(2)]);
var inst_18184 = (inst_18176 + (1));
var tmp18230 = inst_18173;
var tmp18231 = inst_18175;
var tmp18232 = inst_18174;
var inst_18173__$1 = tmp18230;
var inst_18174__$1 = tmp18232;
var inst_18175__$1 = tmp18231;
var inst_18176__$1 = inst_18184;
var state_18221__$1 = (function (){var statearr_18235 = state_18221;
(statearr_18235[(14)] = inst_18183);

(statearr_18235[(8)] = inst_18173__$1);

(statearr_18235[(9)] = inst_18175__$1);

(statearr_18235[(10)] = inst_18176__$1);

(statearr_18235[(12)] = inst_18174__$1);

return statearr_18235;
})();
var statearr_18236_18268 = state_18221__$1;
(statearr_18236_18268[(2)] = null);

(statearr_18236_18268[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18222 === (22))){
var state_18221__$1 = state_18221;
var statearr_18237_18269 = state_18221__$1;
(statearr_18237_18269[(2)] = null);

(statearr_18237_18269[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18222 === (6))){
var inst_18162 = (state_18221[(13)]);
var inst_18171 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18162) : f.call(null,inst_18162));
var inst_18172 = cljs.core.seq(inst_18171);
var inst_18173 = inst_18172;
var inst_18174 = null;
var inst_18175 = (0);
var inst_18176 = (0);
var state_18221__$1 = (function (){var statearr_18238 = state_18221;
(statearr_18238[(8)] = inst_18173);

(statearr_18238[(9)] = inst_18175);

(statearr_18238[(10)] = inst_18176);

(statearr_18238[(12)] = inst_18174);

return statearr_18238;
})();
var statearr_18239_18270 = state_18221__$1;
(statearr_18239_18270[(2)] = null);

(statearr_18239_18270[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18222 === (17))){
var inst_18187 = (state_18221[(7)]);
var inst_18191 = cljs.core.chunk_first(inst_18187);
var inst_18192 = cljs.core.chunk_rest(inst_18187);
var inst_18193 = cljs.core.count(inst_18191);
var inst_18173 = inst_18192;
var inst_18174 = inst_18191;
var inst_18175 = inst_18193;
var inst_18176 = (0);
var state_18221__$1 = (function (){var statearr_18240 = state_18221;
(statearr_18240[(8)] = inst_18173);

(statearr_18240[(9)] = inst_18175);

(statearr_18240[(10)] = inst_18176);

(statearr_18240[(12)] = inst_18174);

return statearr_18240;
})();
var statearr_18241_18271 = state_18221__$1;
(statearr_18241_18271[(2)] = null);

(statearr_18241_18271[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18222 === (3))){
var inst_18219 = (state_18221[(2)]);
var state_18221__$1 = state_18221;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18221__$1,inst_18219);
} else {
if((state_val_18222 === (12))){
var inst_18207 = (state_18221[(2)]);
var state_18221__$1 = state_18221;
var statearr_18242_18272 = state_18221__$1;
(statearr_18242_18272[(2)] = inst_18207);

(statearr_18242_18272[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18222 === (2))){
var state_18221__$1 = state_18221;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18221__$1,(4),in$);
} else {
if((state_val_18222 === (23))){
var inst_18215 = (state_18221[(2)]);
var state_18221__$1 = state_18221;
var statearr_18243_18273 = state_18221__$1;
(statearr_18243_18273[(2)] = inst_18215);

(statearr_18243_18273[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18222 === (19))){
var inst_18202 = (state_18221[(2)]);
var state_18221__$1 = state_18221;
var statearr_18244_18274 = state_18221__$1;
(statearr_18244_18274[(2)] = inst_18202);

(statearr_18244_18274[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18222 === (11))){
var inst_18187 = (state_18221[(7)]);
var inst_18173 = (state_18221[(8)]);
var inst_18187__$1 = cljs.core.seq(inst_18173);
var state_18221__$1 = (function (){var statearr_18245 = state_18221;
(statearr_18245[(7)] = inst_18187__$1);

return statearr_18245;
})();
if(inst_18187__$1){
var statearr_18246_18275 = state_18221__$1;
(statearr_18246_18275[(1)] = (14));

} else {
var statearr_18247_18276 = state_18221__$1;
(statearr_18247_18276[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18222 === (9))){
var inst_18209 = (state_18221[(2)]);
var inst_18210 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18221__$1 = (function (){var statearr_18248 = state_18221;
(statearr_18248[(15)] = inst_18209);

return statearr_18248;
})();
if(cljs.core.truth_(inst_18210)){
var statearr_18249_18277 = state_18221__$1;
(statearr_18249_18277[(1)] = (21));

} else {
var statearr_18250_18278 = state_18221__$1;
(statearr_18250_18278[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18222 === (5))){
var inst_18165 = cljs.core.async.close_BANG_(out);
var state_18221__$1 = state_18221;
var statearr_18251_18279 = state_18221__$1;
(statearr_18251_18279[(2)] = inst_18165);

(statearr_18251_18279[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18222 === (14))){
var inst_18187 = (state_18221[(7)]);
var inst_18189 = cljs.core.chunked_seq_QMARK_(inst_18187);
var state_18221__$1 = state_18221;
if(inst_18189){
var statearr_18252_18280 = state_18221__$1;
(statearr_18252_18280[(1)] = (17));

} else {
var statearr_18253_18281 = state_18221__$1;
(statearr_18253_18281[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18222 === (16))){
var inst_18205 = (state_18221[(2)]);
var state_18221__$1 = state_18221;
var statearr_18254_18282 = state_18221__$1;
(statearr_18254_18282[(2)] = inst_18205);

(statearr_18254_18282[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18222 === (10))){
var inst_18176 = (state_18221[(10)]);
var inst_18174 = (state_18221[(12)]);
var inst_18181 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18174,inst_18176);
var state_18221__$1 = state_18221;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18221__$1,(13),out,inst_18181);
} else {
if((state_val_18222 === (18))){
var inst_18187 = (state_18221[(7)]);
var inst_18196 = cljs.core.first(inst_18187);
var state_18221__$1 = state_18221;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18221__$1,(20),out,inst_18196);
} else {
if((state_val_18222 === (8))){
var inst_18175 = (state_18221[(9)]);
var inst_18176 = (state_18221[(10)]);
var inst_18178 = (inst_18176 < inst_18175);
var inst_18179 = inst_18178;
var state_18221__$1 = state_18221;
if(cljs.core.truth_(inst_18179)){
var statearr_18255_18283 = state_18221__$1;
(statearr_18255_18283[(1)] = (10));

} else {
var statearr_18256_18284 = state_18221__$1;
(statearr_18256_18284[(1)] = (11));

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
});})(c__14735__auto__))
;
return ((function (switch__14552__auto__,c__14735__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14553__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14553__auto____0 = (function (){
var statearr_18257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18257[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14553__auto__);

(statearr_18257[(1)] = (1));

return statearr_18257;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14553__auto____1 = (function (state_18221){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_18221);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e18258){if((e18258 instanceof Object)){
var ex__14556__auto__ = e18258;
var statearr_18259_18285 = state_18221;
(statearr_18259_18285[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18221);

return cljs.core.cst$kw$recur;
} else {
throw e18258;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__18286 = state_18221;
state_18221 = G__18286;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14553__auto__ = function(state_18221){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14553__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14553__auto____1.call(this,state_18221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14553__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14553__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto__))
})();
var state__14737__auto__ = (function (){var statearr_18260 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_18260[(6)] = c__14735__auto__);

return statearr_18260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto__))
);

return c__14735__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18288 = arguments.length;
switch (G__18288) {
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
var G__18291 = arguments.length;
switch (G__18291) {
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
var G__18294 = arguments.length;
switch (G__18294) {
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
var c__14735__auto___18341 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto___18341,out){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto___18341,out){
return (function (state_18318){
var state_val_18319 = (state_18318[(1)]);
if((state_val_18319 === (7))){
var inst_18313 = (state_18318[(2)]);
var state_18318__$1 = state_18318;
var statearr_18320_18342 = state_18318__$1;
(statearr_18320_18342[(2)] = inst_18313);

(statearr_18320_18342[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18319 === (1))){
var inst_18295 = null;
var state_18318__$1 = (function (){var statearr_18321 = state_18318;
(statearr_18321[(7)] = inst_18295);

return statearr_18321;
})();
var statearr_18322_18343 = state_18318__$1;
(statearr_18322_18343[(2)] = null);

(statearr_18322_18343[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18319 === (4))){
var inst_18298 = (state_18318[(8)]);
var inst_18298__$1 = (state_18318[(2)]);
var inst_18299 = (inst_18298__$1 == null);
var inst_18300 = cljs.core.not(inst_18299);
var state_18318__$1 = (function (){var statearr_18323 = state_18318;
(statearr_18323[(8)] = inst_18298__$1);

return statearr_18323;
})();
if(inst_18300){
var statearr_18324_18344 = state_18318__$1;
(statearr_18324_18344[(1)] = (5));

} else {
var statearr_18325_18345 = state_18318__$1;
(statearr_18325_18345[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18319 === (6))){
var state_18318__$1 = state_18318;
var statearr_18326_18346 = state_18318__$1;
(statearr_18326_18346[(2)] = null);

(statearr_18326_18346[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18319 === (3))){
var inst_18315 = (state_18318[(2)]);
var inst_18316 = cljs.core.async.close_BANG_(out);
var state_18318__$1 = (function (){var statearr_18327 = state_18318;
(statearr_18327[(9)] = inst_18315);

return statearr_18327;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18318__$1,inst_18316);
} else {
if((state_val_18319 === (2))){
var state_18318__$1 = state_18318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18318__$1,(4),ch);
} else {
if((state_val_18319 === (11))){
var inst_18298 = (state_18318[(8)]);
var inst_18307 = (state_18318[(2)]);
var inst_18295 = inst_18298;
var state_18318__$1 = (function (){var statearr_18328 = state_18318;
(statearr_18328[(7)] = inst_18295);

(statearr_18328[(10)] = inst_18307);

return statearr_18328;
})();
var statearr_18329_18347 = state_18318__$1;
(statearr_18329_18347[(2)] = null);

(statearr_18329_18347[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18319 === (9))){
var inst_18298 = (state_18318[(8)]);
var state_18318__$1 = state_18318;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18318__$1,(11),out,inst_18298);
} else {
if((state_val_18319 === (5))){
var inst_18298 = (state_18318[(8)]);
var inst_18295 = (state_18318[(7)]);
var inst_18302 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18298,inst_18295);
var state_18318__$1 = state_18318;
if(inst_18302){
var statearr_18331_18348 = state_18318__$1;
(statearr_18331_18348[(1)] = (8));

} else {
var statearr_18332_18349 = state_18318__$1;
(statearr_18332_18349[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18319 === (10))){
var inst_18310 = (state_18318[(2)]);
var state_18318__$1 = state_18318;
var statearr_18333_18350 = state_18318__$1;
(statearr_18333_18350[(2)] = inst_18310);

(statearr_18333_18350[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18319 === (8))){
var inst_18295 = (state_18318[(7)]);
var tmp18330 = inst_18295;
var inst_18295__$1 = tmp18330;
var state_18318__$1 = (function (){var statearr_18334 = state_18318;
(statearr_18334[(7)] = inst_18295__$1);

return statearr_18334;
})();
var statearr_18335_18351 = state_18318__$1;
(statearr_18335_18351[(2)] = null);

(statearr_18335_18351[(1)] = (2));


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
});})(c__14735__auto___18341,out))
;
return ((function (switch__14552__auto__,c__14735__auto___18341,out){
return (function() {
var cljs$core$async$state_machine__14553__auto__ = null;
var cljs$core$async$state_machine__14553__auto____0 = (function (){
var statearr_18336 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18336[(0)] = cljs$core$async$state_machine__14553__auto__);

(statearr_18336[(1)] = (1));

return statearr_18336;
});
var cljs$core$async$state_machine__14553__auto____1 = (function (state_18318){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_18318);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e18337){if((e18337 instanceof Object)){
var ex__14556__auto__ = e18337;
var statearr_18338_18352 = state_18318;
(statearr_18338_18352[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18318);

return cljs.core.cst$kw$recur;
} else {
throw e18337;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__18353 = state_18318;
state_18318 = G__18353;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
cljs$core$async$state_machine__14553__auto__ = function(state_18318){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14553__auto____1.call(this,state_18318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14553__auto____0;
cljs$core$async$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14553__auto____1;
return cljs$core$async$state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto___18341,out))
})();
var state__14737__auto__ = (function (){var statearr_18339 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_18339[(6)] = c__14735__auto___18341);

return statearr_18339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto___18341,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18355 = arguments.length;
switch (G__18355) {
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
var c__14735__auto___18421 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto___18421,out){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto___18421,out){
return (function (state_18393){
var state_val_18394 = (state_18393[(1)]);
if((state_val_18394 === (7))){
var inst_18389 = (state_18393[(2)]);
var state_18393__$1 = state_18393;
var statearr_18395_18422 = state_18393__$1;
(statearr_18395_18422[(2)] = inst_18389);

(statearr_18395_18422[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18394 === (1))){
var inst_18356 = (new Array(n));
var inst_18357 = inst_18356;
var inst_18358 = (0);
var state_18393__$1 = (function (){var statearr_18396 = state_18393;
(statearr_18396[(7)] = inst_18358);

(statearr_18396[(8)] = inst_18357);

return statearr_18396;
})();
var statearr_18397_18423 = state_18393__$1;
(statearr_18397_18423[(2)] = null);

(statearr_18397_18423[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18394 === (4))){
var inst_18361 = (state_18393[(9)]);
var inst_18361__$1 = (state_18393[(2)]);
var inst_18362 = (inst_18361__$1 == null);
var inst_18363 = cljs.core.not(inst_18362);
var state_18393__$1 = (function (){var statearr_18398 = state_18393;
(statearr_18398[(9)] = inst_18361__$1);

return statearr_18398;
})();
if(inst_18363){
var statearr_18399_18424 = state_18393__$1;
(statearr_18399_18424[(1)] = (5));

} else {
var statearr_18400_18425 = state_18393__$1;
(statearr_18400_18425[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18394 === (15))){
var inst_18383 = (state_18393[(2)]);
var state_18393__$1 = state_18393;
var statearr_18401_18426 = state_18393__$1;
(statearr_18401_18426[(2)] = inst_18383);

(statearr_18401_18426[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18394 === (13))){
var state_18393__$1 = state_18393;
var statearr_18402_18427 = state_18393__$1;
(statearr_18402_18427[(2)] = null);

(statearr_18402_18427[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18394 === (6))){
var inst_18358 = (state_18393[(7)]);
var inst_18379 = (inst_18358 > (0));
var state_18393__$1 = state_18393;
if(cljs.core.truth_(inst_18379)){
var statearr_18403_18428 = state_18393__$1;
(statearr_18403_18428[(1)] = (12));

} else {
var statearr_18404_18429 = state_18393__$1;
(statearr_18404_18429[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18394 === (3))){
var inst_18391 = (state_18393[(2)]);
var state_18393__$1 = state_18393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18393__$1,inst_18391);
} else {
if((state_val_18394 === (12))){
var inst_18357 = (state_18393[(8)]);
var inst_18381 = cljs.core.vec(inst_18357);
var state_18393__$1 = state_18393;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18393__$1,(15),out,inst_18381);
} else {
if((state_val_18394 === (2))){
var state_18393__$1 = state_18393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18393__$1,(4),ch);
} else {
if((state_val_18394 === (11))){
var inst_18373 = (state_18393[(2)]);
var inst_18374 = (new Array(n));
var inst_18357 = inst_18374;
var inst_18358 = (0);
var state_18393__$1 = (function (){var statearr_18405 = state_18393;
(statearr_18405[(7)] = inst_18358);

(statearr_18405[(10)] = inst_18373);

(statearr_18405[(8)] = inst_18357);

return statearr_18405;
})();
var statearr_18406_18430 = state_18393__$1;
(statearr_18406_18430[(2)] = null);

(statearr_18406_18430[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18394 === (9))){
var inst_18357 = (state_18393[(8)]);
var inst_18371 = cljs.core.vec(inst_18357);
var state_18393__$1 = state_18393;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18393__$1,(11),out,inst_18371);
} else {
if((state_val_18394 === (5))){
var inst_18361 = (state_18393[(9)]);
var inst_18358 = (state_18393[(7)]);
var inst_18366 = (state_18393[(11)]);
var inst_18357 = (state_18393[(8)]);
var inst_18365 = (inst_18357[inst_18358] = inst_18361);
var inst_18366__$1 = (inst_18358 + (1));
var inst_18367 = (inst_18366__$1 < n);
var state_18393__$1 = (function (){var statearr_18407 = state_18393;
(statearr_18407[(12)] = inst_18365);

(statearr_18407[(11)] = inst_18366__$1);

return statearr_18407;
})();
if(cljs.core.truth_(inst_18367)){
var statearr_18408_18431 = state_18393__$1;
(statearr_18408_18431[(1)] = (8));

} else {
var statearr_18409_18432 = state_18393__$1;
(statearr_18409_18432[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18394 === (14))){
var inst_18386 = (state_18393[(2)]);
var inst_18387 = cljs.core.async.close_BANG_(out);
var state_18393__$1 = (function (){var statearr_18411 = state_18393;
(statearr_18411[(13)] = inst_18386);

return statearr_18411;
})();
var statearr_18412_18433 = state_18393__$1;
(statearr_18412_18433[(2)] = inst_18387);

(statearr_18412_18433[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18394 === (10))){
var inst_18377 = (state_18393[(2)]);
var state_18393__$1 = state_18393;
var statearr_18413_18434 = state_18393__$1;
(statearr_18413_18434[(2)] = inst_18377);

(statearr_18413_18434[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18394 === (8))){
var inst_18366 = (state_18393[(11)]);
var inst_18357 = (state_18393[(8)]);
var tmp18410 = inst_18357;
var inst_18357__$1 = tmp18410;
var inst_18358 = inst_18366;
var state_18393__$1 = (function (){var statearr_18414 = state_18393;
(statearr_18414[(7)] = inst_18358);

(statearr_18414[(8)] = inst_18357__$1);

return statearr_18414;
})();
var statearr_18415_18435 = state_18393__$1;
(statearr_18415_18435[(2)] = null);

(statearr_18415_18435[(1)] = (2));


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
});})(c__14735__auto___18421,out))
;
return ((function (switch__14552__auto__,c__14735__auto___18421,out){
return (function() {
var cljs$core$async$state_machine__14553__auto__ = null;
var cljs$core$async$state_machine__14553__auto____0 = (function (){
var statearr_18416 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18416[(0)] = cljs$core$async$state_machine__14553__auto__);

(statearr_18416[(1)] = (1));

return statearr_18416;
});
var cljs$core$async$state_machine__14553__auto____1 = (function (state_18393){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_18393);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e18417){if((e18417 instanceof Object)){
var ex__14556__auto__ = e18417;
var statearr_18418_18436 = state_18393;
(statearr_18418_18436[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18393);

return cljs.core.cst$kw$recur;
} else {
throw e18417;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__18437 = state_18393;
state_18393 = G__18437;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
cljs$core$async$state_machine__14553__auto__ = function(state_18393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14553__auto____1.call(this,state_18393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14553__auto____0;
cljs$core$async$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14553__auto____1;
return cljs$core$async$state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto___18421,out))
})();
var state__14737__auto__ = (function (){var statearr_18419 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_18419[(6)] = c__14735__auto___18421);

return statearr_18419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto___18421,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18439 = arguments.length;
switch (G__18439) {
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
var c__14735__auto___18509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto___18509,out){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto___18509,out){
return (function (state_18481){
var state_val_18482 = (state_18481[(1)]);
if((state_val_18482 === (7))){
var inst_18477 = (state_18481[(2)]);
var state_18481__$1 = state_18481;
var statearr_18483_18510 = state_18481__$1;
(statearr_18483_18510[(2)] = inst_18477);

(statearr_18483_18510[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18482 === (1))){
var inst_18440 = [];
var inst_18441 = inst_18440;
var inst_18442 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_18481__$1 = (function (){var statearr_18484 = state_18481;
(statearr_18484[(7)] = inst_18441);

(statearr_18484[(8)] = inst_18442);

return statearr_18484;
})();
var statearr_18485_18511 = state_18481__$1;
(statearr_18485_18511[(2)] = null);

(statearr_18485_18511[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18482 === (4))){
var inst_18445 = (state_18481[(9)]);
var inst_18445__$1 = (state_18481[(2)]);
var inst_18446 = (inst_18445__$1 == null);
var inst_18447 = cljs.core.not(inst_18446);
var state_18481__$1 = (function (){var statearr_18486 = state_18481;
(statearr_18486[(9)] = inst_18445__$1);

return statearr_18486;
})();
if(inst_18447){
var statearr_18487_18512 = state_18481__$1;
(statearr_18487_18512[(1)] = (5));

} else {
var statearr_18488_18513 = state_18481__$1;
(statearr_18488_18513[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18482 === (15))){
var inst_18471 = (state_18481[(2)]);
var state_18481__$1 = state_18481;
var statearr_18489_18514 = state_18481__$1;
(statearr_18489_18514[(2)] = inst_18471);

(statearr_18489_18514[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18482 === (13))){
var state_18481__$1 = state_18481;
var statearr_18490_18515 = state_18481__$1;
(statearr_18490_18515[(2)] = null);

(statearr_18490_18515[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18482 === (6))){
var inst_18441 = (state_18481[(7)]);
var inst_18466 = inst_18441.length;
var inst_18467 = (inst_18466 > (0));
var state_18481__$1 = state_18481;
if(cljs.core.truth_(inst_18467)){
var statearr_18491_18516 = state_18481__$1;
(statearr_18491_18516[(1)] = (12));

} else {
var statearr_18492_18517 = state_18481__$1;
(statearr_18492_18517[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18482 === (3))){
var inst_18479 = (state_18481[(2)]);
var state_18481__$1 = state_18481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18481__$1,inst_18479);
} else {
if((state_val_18482 === (12))){
var inst_18441 = (state_18481[(7)]);
var inst_18469 = cljs.core.vec(inst_18441);
var state_18481__$1 = state_18481;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18481__$1,(15),out,inst_18469);
} else {
if((state_val_18482 === (2))){
var state_18481__$1 = state_18481;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18481__$1,(4),ch);
} else {
if((state_val_18482 === (11))){
var inst_18445 = (state_18481[(9)]);
var inst_18449 = (state_18481[(10)]);
var inst_18459 = (state_18481[(2)]);
var inst_18460 = [];
var inst_18461 = inst_18460.push(inst_18445);
var inst_18441 = inst_18460;
var inst_18442 = inst_18449;
var state_18481__$1 = (function (){var statearr_18493 = state_18481;
(statearr_18493[(11)] = inst_18461);

(statearr_18493[(7)] = inst_18441);

(statearr_18493[(8)] = inst_18442);

(statearr_18493[(12)] = inst_18459);

return statearr_18493;
})();
var statearr_18494_18518 = state_18481__$1;
(statearr_18494_18518[(2)] = null);

(statearr_18494_18518[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18482 === (9))){
var inst_18441 = (state_18481[(7)]);
var inst_18457 = cljs.core.vec(inst_18441);
var state_18481__$1 = state_18481;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18481__$1,(11),out,inst_18457);
} else {
if((state_val_18482 === (5))){
var inst_18445 = (state_18481[(9)]);
var inst_18449 = (state_18481[(10)]);
var inst_18442 = (state_18481[(8)]);
var inst_18449__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18445) : f.call(null,inst_18445));
var inst_18450 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18449__$1,inst_18442);
var inst_18451 = cljs.core.keyword_identical_QMARK_(inst_18442,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_18452 = ((inst_18450) || (inst_18451));
var state_18481__$1 = (function (){var statearr_18495 = state_18481;
(statearr_18495[(10)] = inst_18449__$1);

return statearr_18495;
})();
if(cljs.core.truth_(inst_18452)){
var statearr_18496_18519 = state_18481__$1;
(statearr_18496_18519[(1)] = (8));

} else {
var statearr_18497_18520 = state_18481__$1;
(statearr_18497_18520[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18482 === (14))){
var inst_18474 = (state_18481[(2)]);
var inst_18475 = cljs.core.async.close_BANG_(out);
var state_18481__$1 = (function (){var statearr_18499 = state_18481;
(statearr_18499[(13)] = inst_18474);

return statearr_18499;
})();
var statearr_18500_18521 = state_18481__$1;
(statearr_18500_18521[(2)] = inst_18475);

(statearr_18500_18521[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18482 === (10))){
var inst_18464 = (state_18481[(2)]);
var state_18481__$1 = state_18481;
var statearr_18501_18522 = state_18481__$1;
(statearr_18501_18522[(2)] = inst_18464);

(statearr_18501_18522[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18482 === (8))){
var inst_18445 = (state_18481[(9)]);
var inst_18449 = (state_18481[(10)]);
var inst_18441 = (state_18481[(7)]);
var inst_18454 = inst_18441.push(inst_18445);
var tmp18498 = inst_18441;
var inst_18441__$1 = tmp18498;
var inst_18442 = inst_18449;
var state_18481__$1 = (function (){var statearr_18502 = state_18481;
(statearr_18502[(7)] = inst_18441__$1);

(statearr_18502[(8)] = inst_18442);

(statearr_18502[(14)] = inst_18454);

return statearr_18502;
})();
var statearr_18503_18523 = state_18481__$1;
(statearr_18503_18523[(2)] = null);

(statearr_18503_18523[(1)] = (2));


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
});})(c__14735__auto___18509,out))
;
return ((function (switch__14552__auto__,c__14735__auto___18509,out){
return (function() {
var cljs$core$async$state_machine__14553__auto__ = null;
var cljs$core$async$state_machine__14553__auto____0 = (function (){
var statearr_18504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18504[(0)] = cljs$core$async$state_machine__14553__auto__);

(statearr_18504[(1)] = (1));

return statearr_18504;
});
var cljs$core$async$state_machine__14553__auto____1 = (function (state_18481){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_18481);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e18505){if((e18505 instanceof Object)){
var ex__14556__auto__ = e18505;
var statearr_18506_18524 = state_18481;
(statearr_18506_18524[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18481);

return cljs.core.cst$kw$recur;
} else {
throw e18505;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__18525 = state_18481;
state_18481 = G__18525;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
cljs$core$async$state_machine__14553__auto__ = function(state_18481){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14553__auto____1.call(this,state_18481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14553__auto____0;
cljs$core$async$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14553__auto____1;
return cljs$core$async$state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto___18509,out))
})();
var state__14737__auto__ = (function (){var statearr_18507 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_18507[(6)] = c__14735__auto___18509);

return statearr_18507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto___18509,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

