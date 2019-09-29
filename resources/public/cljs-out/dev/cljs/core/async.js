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
var G__17510 = arguments.length;
switch (G__17510) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17511 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17511 = (function (f,blockable,meta17512){
this.f = f;
this.blockable = blockable;
this.meta17512 = meta17512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17513,meta17512__$1){
var self__ = this;
var _17513__$1 = this;
return (new cljs.core.async.t_cljs$core$async17511(self__.f,self__.blockable,meta17512__$1));
});

cljs.core.async.t_cljs$core$async17511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17513){
var self__ = this;
var _17513__$1 = this;
return self__.meta17512;
});

cljs.core.async.t_cljs$core$async17511.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17511.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17511.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17511.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta17512], null);
});

cljs.core.async.t_cljs$core$async17511.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17511";

cljs.core.async.t_cljs$core$async17511.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17511");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17511.
 */
cljs.core.async.__GT_t_cljs$core$async17511 = (function cljs$core$async$__GT_t_cljs$core$async17511(f__$1,blockable__$1,meta17512){
return (new cljs.core.async.t_cljs$core$async17511(f__$1,blockable__$1,meta17512));
});

}

return (new cljs.core.async.t_cljs$core$async17511(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17517 = arguments.length;
switch (G__17517) {
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
var G__17520 = arguments.length;
switch (G__17520) {
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
var G__17523 = arguments.length;
switch (G__17523) {
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
var val_17525 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17525) : fn1.call(null,val_17525));
} else {
cljs.core.async.impl.dispatch.run(((function (val_17525,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17525) : fn1.call(null,val_17525));
});})(val_17525,ret))
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
var G__17527 = arguments.length;
switch (G__17527) {
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
var n__4408__auto___17529 = n;
var x_17530 = (0);
while(true){
if((x_17530 < n__4408__auto___17529)){
(a[x_17530] = x_17530);

var G__17531 = (x_17530 + (1));
x_17530 = G__17531;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17532 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17532 = (function (flag,meta17533){
this.flag = flag;
this.meta17533 = meta17533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17534,meta17533__$1){
var self__ = this;
var _17534__$1 = this;
return (new cljs.core.async.t_cljs$core$async17532(self__.flag,meta17533__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17532.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17534){
var self__ = this;
var _17534__$1 = this;
return self__.meta17533;
});})(flag))
;

cljs.core.async.t_cljs$core$async17532.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17532.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17532.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17532.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17532.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta17533], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17532.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17532";

cljs.core.async.t_cljs$core$async17532.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17532");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17532.
 */
cljs.core.async.__GT_t_cljs$core$async17532 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17532(flag__$1,meta17533){
return (new cljs.core.async.t_cljs$core$async17532(flag__$1,meta17533));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17532(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17535 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17535 = (function (flag,cb,meta17536){
this.flag = flag;
this.cb = cb;
this.meta17536 = meta17536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17537,meta17536__$1){
var self__ = this;
var _17537__$1 = this;
return (new cljs.core.async.t_cljs$core$async17535(self__.flag,self__.cb,meta17536__$1));
});

cljs.core.async.t_cljs$core$async17535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17537){
var self__ = this;
var _17537__$1 = this;
return self__.meta17536;
});

cljs.core.async.t_cljs$core$async17535.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17535.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async17535.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17535.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17535.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta17536], null);
});

cljs.core.async.t_cljs$core$async17535.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17535";

cljs.core.async.t_cljs$core$async17535.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17535");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17535.
 */
cljs.core.async.__GT_t_cljs$core$async17535 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17535(flag__$1,cb__$1,meta17536){
return (new cljs.core.async.t_cljs$core$async17535(flag__$1,cb__$1,meta17536));
});

}

return (new cljs.core.async.t_cljs$core$async17535(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17538_SHARP_){
var G__17540 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17538_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17540) : fret.call(null,G__17540));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17539_SHARP_){
var G__17541 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17539_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17541) : fret.call(null,G__17541));
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
var G__17542 = (i + (1));
i = G__17542;
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
var len__4531__auto___17548 = arguments.length;
var i__4532__auto___17549 = (0);
while(true){
if((i__4532__auto___17549 < len__4531__auto___17548)){
args__4534__auto__.push((arguments[i__4532__auto___17549]));

var G__17550 = (i__4532__auto___17549 + (1));
i__4532__auto___17549 = G__17550;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17545){
var map__17546 = p__17545;
var map__17546__$1 = ((((!((map__17546 == null)))?(((((map__17546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17546):map__17546);
var opts = map__17546__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17543){
var G__17544 = cljs.core.first(seq17543);
var seq17543__$1 = cljs.core.next(seq17543);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17544,seq17543__$1);
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
var G__17552 = arguments.length;
switch (G__17552) {
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
var c__15583__auto___17598 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15583__auto___17598){
return (function (){
var f__15584__auto__ = (function (){var switch__15400__auto__ = ((function (c__15583__auto___17598){
return (function (state_17576){
var state_val_17577 = (state_17576[(1)]);
if((state_val_17577 === (7))){
var inst_17572 = (state_17576[(2)]);
var state_17576__$1 = state_17576;
var statearr_17578_17599 = state_17576__$1;
(statearr_17578_17599[(2)] = inst_17572);

(statearr_17578_17599[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17577 === (1))){
var state_17576__$1 = state_17576;
var statearr_17579_17600 = state_17576__$1;
(statearr_17579_17600[(2)] = null);

(statearr_17579_17600[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17577 === (4))){
var inst_17555 = (state_17576[(7)]);
var inst_17555__$1 = (state_17576[(2)]);
var inst_17556 = (inst_17555__$1 == null);
var state_17576__$1 = (function (){var statearr_17580 = state_17576;
(statearr_17580[(7)] = inst_17555__$1);

return statearr_17580;
})();
if(cljs.core.truth_(inst_17556)){
var statearr_17581_17601 = state_17576__$1;
(statearr_17581_17601[(1)] = (5));

} else {
var statearr_17582_17602 = state_17576__$1;
(statearr_17582_17602[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17577 === (13))){
var state_17576__$1 = state_17576;
var statearr_17583_17603 = state_17576__$1;
(statearr_17583_17603[(2)] = null);

(statearr_17583_17603[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17577 === (6))){
var inst_17555 = (state_17576[(7)]);
var state_17576__$1 = state_17576;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17576__$1,(11),to,inst_17555);
} else {
if((state_val_17577 === (3))){
var inst_17574 = (state_17576[(2)]);
var state_17576__$1 = state_17576;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17576__$1,inst_17574);
} else {
if((state_val_17577 === (12))){
var state_17576__$1 = state_17576;
var statearr_17584_17604 = state_17576__$1;
(statearr_17584_17604[(2)] = null);

(statearr_17584_17604[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17577 === (2))){
var state_17576__$1 = state_17576;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17576__$1,(4),from);
} else {
if((state_val_17577 === (11))){
var inst_17565 = (state_17576[(2)]);
var state_17576__$1 = state_17576;
if(cljs.core.truth_(inst_17565)){
var statearr_17585_17605 = state_17576__$1;
(statearr_17585_17605[(1)] = (12));

} else {
var statearr_17586_17606 = state_17576__$1;
(statearr_17586_17606[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17577 === (9))){
var state_17576__$1 = state_17576;
var statearr_17587_17607 = state_17576__$1;
(statearr_17587_17607[(2)] = null);

(statearr_17587_17607[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17577 === (5))){
var state_17576__$1 = state_17576;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17588_17608 = state_17576__$1;
(statearr_17588_17608[(1)] = (8));

} else {
var statearr_17589_17609 = state_17576__$1;
(statearr_17589_17609[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17577 === (14))){
var inst_17570 = (state_17576[(2)]);
var state_17576__$1 = state_17576;
var statearr_17590_17610 = state_17576__$1;
(statearr_17590_17610[(2)] = inst_17570);

(statearr_17590_17610[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17577 === (10))){
var inst_17562 = (state_17576[(2)]);
var state_17576__$1 = state_17576;
var statearr_17591_17611 = state_17576__$1;
(statearr_17591_17611[(2)] = inst_17562);

(statearr_17591_17611[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17577 === (8))){
var inst_17559 = cljs.core.async.close_BANG_(to);
var state_17576__$1 = state_17576;
var statearr_17592_17612 = state_17576__$1;
(statearr_17592_17612[(2)] = inst_17559);

(statearr_17592_17612[(1)] = (10));


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
});})(c__15583__auto___17598))
;
return ((function (switch__15400__auto__,c__15583__auto___17598){
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_17593 = [null,null,null,null,null,null,null,null];
(statearr_17593[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_17593[(1)] = (1));

return statearr_17593;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_17576){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_17576);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e17594){if((e17594 instanceof Object)){
var ex__15404__auto__ = e17594;
var statearr_17595_17613 = state_17576;
(statearr_17595_17613[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17576);

return cljs.core.cst$kw$recur;
} else {
throw e17594;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__17614 = state_17576;
state_17576 = G__17614;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_17576){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_17576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto___17598))
})();
var state__15585__auto__ = (function (){var statearr_17596 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_17596[(6)] = c__15583__auto___17598);

return statearr_17596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15585__auto__);
});})(c__15583__auto___17598))
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
return (function (p__17615){
var vec__17616 = p__17615;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17616,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17616,(1),null);
var job = vec__17616;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15583__auto___17787 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15583__auto___17787,res,vec__17616,v,p,job,jobs,results){
return (function (){
var f__15584__auto__ = (function (){var switch__15400__auto__ = ((function (c__15583__auto___17787,res,vec__17616,v,p,job,jobs,results){
return (function (state_17623){
var state_val_17624 = (state_17623[(1)]);
if((state_val_17624 === (1))){
var state_17623__$1 = state_17623;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17623__$1,(2),res,v);
} else {
if((state_val_17624 === (2))){
var inst_17620 = (state_17623[(2)]);
var inst_17621 = cljs.core.async.close_BANG_(res);
var state_17623__$1 = (function (){var statearr_17625 = state_17623;
(statearr_17625[(7)] = inst_17620);

return statearr_17625;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17623__$1,inst_17621);
} else {
return null;
}
}
});})(c__15583__auto___17787,res,vec__17616,v,p,job,jobs,results))
;
return ((function (switch__15400__auto__,c__15583__auto___17787,res,vec__17616,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0 = (function (){
var statearr_17626 = [null,null,null,null,null,null,null,null];
(statearr_17626[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__);

(statearr_17626[(1)] = (1));

return statearr_17626;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1 = (function (state_17623){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_17623);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e17627){if((e17627 instanceof Object)){
var ex__15404__auto__ = e17627;
var statearr_17628_17788 = state_17623;
(statearr_17628_17788[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17623);

return cljs.core.cst$kw$recur;
} else {
throw e17627;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__17789 = state_17623;
state_17623 = G__17789;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = function(state_17623){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1.call(this,state_17623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto___17787,res,vec__17616,v,p,job,jobs,results))
})();
var state__15585__auto__ = (function (){var statearr_17629 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_17629[(6)] = c__15583__auto___17787);

return statearr_17629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15585__auto__);
});})(c__15583__auto___17787,res,vec__17616,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17630){
var vec__17631 = p__17630;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17631,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17631,(1),null);
var job = vec__17631;
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
var n__4408__auto___17790 = n;
var __17791 = (0);
while(true){
if((__17791 < n__4408__auto___17790)){
var G__17634_17792 = type;
var G__17634_17793__$1 = (((G__17634_17792 instanceof cljs.core.Keyword))?G__17634_17792.fqn:null);
switch (G__17634_17793__$1) {
case "compute":
var c__15583__auto___17795 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17791,c__15583__auto___17795,G__17634_17792,G__17634_17793__$1,n__4408__auto___17790,jobs,results,process,async){
return (function (){
var f__15584__auto__ = (function (){var switch__15400__auto__ = ((function (__17791,c__15583__auto___17795,G__17634_17792,G__17634_17793__$1,n__4408__auto___17790,jobs,results,process,async){
return (function (state_17647){
var state_val_17648 = (state_17647[(1)]);
if((state_val_17648 === (1))){
var state_17647__$1 = state_17647;
var statearr_17649_17796 = state_17647__$1;
(statearr_17649_17796[(2)] = null);

(statearr_17649_17796[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17648 === (2))){
var state_17647__$1 = state_17647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17647__$1,(4),jobs);
} else {
if((state_val_17648 === (3))){
var inst_17645 = (state_17647[(2)]);
var state_17647__$1 = state_17647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17647__$1,inst_17645);
} else {
if((state_val_17648 === (4))){
var inst_17637 = (state_17647[(2)]);
var inst_17638 = process(inst_17637);
var state_17647__$1 = state_17647;
if(cljs.core.truth_(inst_17638)){
var statearr_17650_17797 = state_17647__$1;
(statearr_17650_17797[(1)] = (5));

} else {
var statearr_17651_17798 = state_17647__$1;
(statearr_17651_17798[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17648 === (5))){
var state_17647__$1 = state_17647;
var statearr_17652_17799 = state_17647__$1;
(statearr_17652_17799[(2)] = null);

(statearr_17652_17799[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17648 === (6))){
var state_17647__$1 = state_17647;
var statearr_17653_17800 = state_17647__$1;
(statearr_17653_17800[(2)] = null);

(statearr_17653_17800[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17648 === (7))){
var inst_17643 = (state_17647[(2)]);
var state_17647__$1 = state_17647;
var statearr_17654_17801 = state_17647__$1;
(statearr_17654_17801[(2)] = inst_17643);

(statearr_17654_17801[(1)] = (3));


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
});})(__17791,c__15583__auto___17795,G__17634_17792,G__17634_17793__$1,n__4408__auto___17790,jobs,results,process,async))
;
return ((function (__17791,switch__15400__auto__,c__15583__auto___17795,G__17634_17792,G__17634_17793__$1,n__4408__auto___17790,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0 = (function (){
var statearr_17655 = [null,null,null,null,null,null,null];
(statearr_17655[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__);

(statearr_17655[(1)] = (1));

return statearr_17655;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1 = (function (state_17647){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_17647);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e17656){if((e17656 instanceof Object)){
var ex__15404__auto__ = e17656;
var statearr_17657_17802 = state_17647;
(statearr_17657_17802[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17647);

return cljs.core.cst$kw$recur;
} else {
throw e17656;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__17803 = state_17647;
state_17647 = G__17803;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = function(state_17647){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1.call(this,state_17647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__;
})()
;})(__17791,switch__15400__auto__,c__15583__auto___17795,G__17634_17792,G__17634_17793__$1,n__4408__auto___17790,jobs,results,process,async))
})();
var state__15585__auto__ = (function (){var statearr_17658 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_17658[(6)] = c__15583__auto___17795);

return statearr_17658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15585__auto__);
});})(__17791,c__15583__auto___17795,G__17634_17792,G__17634_17793__$1,n__4408__auto___17790,jobs,results,process,async))
);


break;
case "async":
var c__15583__auto___17804 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17791,c__15583__auto___17804,G__17634_17792,G__17634_17793__$1,n__4408__auto___17790,jobs,results,process,async){
return (function (){
var f__15584__auto__ = (function (){var switch__15400__auto__ = ((function (__17791,c__15583__auto___17804,G__17634_17792,G__17634_17793__$1,n__4408__auto___17790,jobs,results,process,async){
return (function (state_17671){
var state_val_17672 = (state_17671[(1)]);
if((state_val_17672 === (1))){
var state_17671__$1 = state_17671;
var statearr_17673_17805 = state_17671__$1;
(statearr_17673_17805[(2)] = null);

(statearr_17673_17805[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17672 === (2))){
var state_17671__$1 = state_17671;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17671__$1,(4),jobs);
} else {
if((state_val_17672 === (3))){
var inst_17669 = (state_17671[(2)]);
var state_17671__$1 = state_17671;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17671__$1,inst_17669);
} else {
if((state_val_17672 === (4))){
var inst_17661 = (state_17671[(2)]);
var inst_17662 = async(inst_17661);
var state_17671__$1 = state_17671;
if(cljs.core.truth_(inst_17662)){
var statearr_17674_17806 = state_17671__$1;
(statearr_17674_17806[(1)] = (5));

} else {
var statearr_17675_17807 = state_17671__$1;
(statearr_17675_17807[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17672 === (5))){
var state_17671__$1 = state_17671;
var statearr_17676_17808 = state_17671__$1;
(statearr_17676_17808[(2)] = null);

(statearr_17676_17808[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17672 === (6))){
var state_17671__$1 = state_17671;
var statearr_17677_17809 = state_17671__$1;
(statearr_17677_17809[(2)] = null);

(statearr_17677_17809[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17672 === (7))){
var inst_17667 = (state_17671[(2)]);
var state_17671__$1 = state_17671;
var statearr_17678_17810 = state_17671__$1;
(statearr_17678_17810[(2)] = inst_17667);

(statearr_17678_17810[(1)] = (3));


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
});})(__17791,c__15583__auto___17804,G__17634_17792,G__17634_17793__$1,n__4408__auto___17790,jobs,results,process,async))
;
return ((function (__17791,switch__15400__auto__,c__15583__auto___17804,G__17634_17792,G__17634_17793__$1,n__4408__auto___17790,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0 = (function (){
var statearr_17679 = [null,null,null,null,null,null,null];
(statearr_17679[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__);

(statearr_17679[(1)] = (1));

return statearr_17679;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1 = (function (state_17671){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_17671);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e17680){if((e17680 instanceof Object)){
var ex__15404__auto__ = e17680;
var statearr_17681_17811 = state_17671;
(statearr_17681_17811[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17671);

return cljs.core.cst$kw$recur;
} else {
throw e17680;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__17812 = state_17671;
state_17671 = G__17812;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = function(state_17671){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1.call(this,state_17671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__;
})()
;})(__17791,switch__15400__auto__,c__15583__auto___17804,G__17634_17792,G__17634_17793__$1,n__4408__auto___17790,jobs,results,process,async))
})();
var state__15585__auto__ = (function (){var statearr_17682 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_17682[(6)] = c__15583__auto___17804);

return statearr_17682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15585__auto__);
});})(__17791,c__15583__auto___17804,G__17634_17792,G__17634_17793__$1,n__4408__auto___17790,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17634_17793__$1)].join('')));

}

var G__17813 = (__17791 + (1));
__17791 = G__17813;
continue;
} else {
}
break;
}

var c__15583__auto___17814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15583__auto___17814,jobs,results,process,async){
return (function (){
var f__15584__auto__ = (function (){var switch__15400__auto__ = ((function (c__15583__auto___17814,jobs,results,process,async){
return (function (state_17704){
var state_val_17705 = (state_17704[(1)]);
if((state_val_17705 === (1))){
var state_17704__$1 = state_17704;
var statearr_17706_17815 = state_17704__$1;
(statearr_17706_17815[(2)] = null);

(statearr_17706_17815[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17705 === (2))){
var state_17704__$1 = state_17704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17704__$1,(4),from);
} else {
if((state_val_17705 === (3))){
var inst_17702 = (state_17704[(2)]);
var state_17704__$1 = state_17704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17704__$1,inst_17702);
} else {
if((state_val_17705 === (4))){
var inst_17685 = (state_17704[(7)]);
var inst_17685__$1 = (state_17704[(2)]);
var inst_17686 = (inst_17685__$1 == null);
var state_17704__$1 = (function (){var statearr_17707 = state_17704;
(statearr_17707[(7)] = inst_17685__$1);

return statearr_17707;
})();
if(cljs.core.truth_(inst_17686)){
var statearr_17708_17816 = state_17704__$1;
(statearr_17708_17816[(1)] = (5));

} else {
var statearr_17709_17817 = state_17704__$1;
(statearr_17709_17817[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17705 === (5))){
var inst_17688 = cljs.core.async.close_BANG_(jobs);
var state_17704__$1 = state_17704;
var statearr_17710_17818 = state_17704__$1;
(statearr_17710_17818[(2)] = inst_17688);

(statearr_17710_17818[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17705 === (6))){
var inst_17690 = (state_17704[(8)]);
var inst_17685 = (state_17704[(7)]);
var inst_17690__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17691 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17692 = [inst_17685,inst_17690__$1];
var inst_17693 = (new cljs.core.PersistentVector(null,2,(5),inst_17691,inst_17692,null));
var state_17704__$1 = (function (){var statearr_17711 = state_17704;
(statearr_17711[(8)] = inst_17690__$1);

return statearr_17711;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17704__$1,(8),jobs,inst_17693);
} else {
if((state_val_17705 === (7))){
var inst_17700 = (state_17704[(2)]);
var state_17704__$1 = state_17704;
var statearr_17712_17819 = state_17704__$1;
(statearr_17712_17819[(2)] = inst_17700);

(statearr_17712_17819[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17705 === (8))){
var inst_17690 = (state_17704[(8)]);
var inst_17695 = (state_17704[(2)]);
var state_17704__$1 = (function (){var statearr_17713 = state_17704;
(statearr_17713[(9)] = inst_17695);

return statearr_17713;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17704__$1,(9),results,inst_17690);
} else {
if((state_val_17705 === (9))){
var inst_17697 = (state_17704[(2)]);
var state_17704__$1 = (function (){var statearr_17714 = state_17704;
(statearr_17714[(10)] = inst_17697);

return statearr_17714;
})();
var statearr_17715_17820 = state_17704__$1;
(statearr_17715_17820[(2)] = null);

(statearr_17715_17820[(1)] = (2));


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
});})(c__15583__auto___17814,jobs,results,process,async))
;
return ((function (switch__15400__auto__,c__15583__auto___17814,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0 = (function (){
var statearr_17716 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17716[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__);

(statearr_17716[(1)] = (1));

return statearr_17716;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1 = (function (state_17704){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_17704);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e17717){if((e17717 instanceof Object)){
var ex__15404__auto__ = e17717;
var statearr_17718_17821 = state_17704;
(statearr_17718_17821[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17704);

return cljs.core.cst$kw$recur;
} else {
throw e17717;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__17822 = state_17704;
state_17704 = G__17822;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = function(state_17704){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1.call(this,state_17704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto___17814,jobs,results,process,async))
})();
var state__15585__auto__ = (function (){var statearr_17719 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_17719[(6)] = c__15583__auto___17814);

return statearr_17719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15585__auto__);
});})(c__15583__auto___17814,jobs,results,process,async))
);


var c__15583__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15583__auto__,jobs,results,process,async){
return (function (){
var f__15584__auto__ = (function (){var switch__15400__auto__ = ((function (c__15583__auto__,jobs,results,process,async){
return (function (state_17757){
var state_val_17758 = (state_17757[(1)]);
if((state_val_17758 === (7))){
var inst_17753 = (state_17757[(2)]);
var state_17757__$1 = state_17757;
var statearr_17759_17823 = state_17757__$1;
(statearr_17759_17823[(2)] = inst_17753);

(statearr_17759_17823[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17758 === (20))){
var state_17757__$1 = state_17757;
var statearr_17760_17824 = state_17757__$1;
(statearr_17760_17824[(2)] = null);

(statearr_17760_17824[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17758 === (1))){
var state_17757__$1 = state_17757;
var statearr_17761_17825 = state_17757__$1;
(statearr_17761_17825[(2)] = null);

(statearr_17761_17825[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17758 === (4))){
var inst_17722 = (state_17757[(7)]);
var inst_17722__$1 = (state_17757[(2)]);
var inst_17723 = (inst_17722__$1 == null);
var state_17757__$1 = (function (){var statearr_17762 = state_17757;
(statearr_17762[(7)] = inst_17722__$1);

return statearr_17762;
})();
if(cljs.core.truth_(inst_17723)){
var statearr_17763_17826 = state_17757__$1;
(statearr_17763_17826[(1)] = (5));

} else {
var statearr_17764_17827 = state_17757__$1;
(statearr_17764_17827[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17758 === (15))){
var inst_17735 = (state_17757[(8)]);
var state_17757__$1 = state_17757;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17757__$1,(18),to,inst_17735);
} else {
if((state_val_17758 === (21))){
var inst_17748 = (state_17757[(2)]);
var state_17757__$1 = state_17757;
var statearr_17765_17828 = state_17757__$1;
(statearr_17765_17828[(2)] = inst_17748);

(statearr_17765_17828[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17758 === (13))){
var inst_17750 = (state_17757[(2)]);
var state_17757__$1 = (function (){var statearr_17766 = state_17757;
(statearr_17766[(9)] = inst_17750);

return statearr_17766;
})();
var statearr_17767_17829 = state_17757__$1;
(statearr_17767_17829[(2)] = null);

(statearr_17767_17829[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17758 === (6))){
var inst_17722 = (state_17757[(7)]);
var state_17757__$1 = state_17757;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17757__$1,(11),inst_17722);
} else {
if((state_val_17758 === (17))){
var inst_17743 = (state_17757[(2)]);
var state_17757__$1 = state_17757;
if(cljs.core.truth_(inst_17743)){
var statearr_17768_17830 = state_17757__$1;
(statearr_17768_17830[(1)] = (19));

} else {
var statearr_17769_17831 = state_17757__$1;
(statearr_17769_17831[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17758 === (3))){
var inst_17755 = (state_17757[(2)]);
var state_17757__$1 = state_17757;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17757__$1,inst_17755);
} else {
if((state_val_17758 === (12))){
var inst_17732 = (state_17757[(10)]);
var state_17757__$1 = state_17757;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17757__$1,(14),inst_17732);
} else {
if((state_val_17758 === (2))){
var state_17757__$1 = state_17757;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17757__$1,(4),results);
} else {
if((state_val_17758 === (19))){
var state_17757__$1 = state_17757;
var statearr_17770_17832 = state_17757__$1;
(statearr_17770_17832[(2)] = null);

(statearr_17770_17832[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17758 === (11))){
var inst_17732 = (state_17757[(2)]);
var state_17757__$1 = (function (){var statearr_17771 = state_17757;
(statearr_17771[(10)] = inst_17732);

return statearr_17771;
})();
var statearr_17772_17833 = state_17757__$1;
(statearr_17772_17833[(2)] = null);

(statearr_17772_17833[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17758 === (9))){
var state_17757__$1 = state_17757;
var statearr_17773_17834 = state_17757__$1;
(statearr_17773_17834[(2)] = null);

(statearr_17773_17834[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17758 === (5))){
var state_17757__$1 = state_17757;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17774_17835 = state_17757__$1;
(statearr_17774_17835[(1)] = (8));

} else {
var statearr_17775_17836 = state_17757__$1;
(statearr_17775_17836[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17758 === (14))){
var inst_17737 = (state_17757[(11)]);
var inst_17735 = (state_17757[(8)]);
var inst_17735__$1 = (state_17757[(2)]);
var inst_17736 = (inst_17735__$1 == null);
var inst_17737__$1 = cljs.core.not(inst_17736);
var state_17757__$1 = (function (){var statearr_17776 = state_17757;
(statearr_17776[(11)] = inst_17737__$1);

(statearr_17776[(8)] = inst_17735__$1);

return statearr_17776;
})();
if(inst_17737__$1){
var statearr_17777_17837 = state_17757__$1;
(statearr_17777_17837[(1)] = (15));

} else {
var statearr_17778_17838 = state_17757__$1;
(statearr_17778_17838[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17758 === (16))){
var inst_17737 = (state_17757[(11)]);
var state_17757__$1 = state_17757;
var statearr_17779_17839 = state_17757__$1;
(statearr_17779_17839[(2)] = inst_17737);

(statearr_17779_17839[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17758 === (10))){
var inst_17729 = (state_17757[(2)]);
var state_17757__$1 = state_17757;
var statearr_17780_17840 = state_17757__$1;
(statearr_17780_17840[(2)] = inst_17729);

(statearr_17780_17840[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17758 === (18))){
var inst_17740 = (state_17757[(2)]);
var state_17757__$1 = state_17757;
var statearr_17781_17841 = state_17757__$1;
(statearr_17781_17841[(2)] = inst_17740);

(statearr_17781_17841[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17758 === (8))){
var inst_17726 = cljs.core.async.close_BANG_(to);
var state_17757__$1 = state_17757;
var statearr_17782_17842 = state_17757__$1;
(statearr_17782_17842[(2)] = inst_17726);

(statearr_17782_17842[(1)] = (10));


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
});})(c__15583__auto__,jobs,results,process,async))
;
return ((function (switch__15400__auto__,c__15583__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0 = (function (){
var statearr_17783 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17783[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__);

(statearr_17783[(1)] = (1));

return statearr_17783;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1 = (function (state_17757){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_17757);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e17784){if((e17784 instanceof Object)){
var ex__15404__auto__ = e17784;
var statearr_17785_17843 = state_17757;
(statearr_17785_17843[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17757);

return cljs.core.cst$kw$recur;
} else {
throw e17784;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__17844 = state_17757;
state_17757 = G__17844;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__ = function(state_17757){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1.call(this,state_17757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15401__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto__,jobs,results,process,async))
})();
var state__15585__auto__ = (function (){var statearr_17786 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_17786[(6)] = c__15583__auto__);

return statearr_17786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15585__auto__);
});})(c__15583__auto__,jobs,results,process,async))
);

return c__15583__auto__;
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
var G__17846 = arguments.length;
switch (G__17846) {
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
var G__17849 = arguments.length;
switch (G__17849) {
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
var G__17852 = arguments.length;
switch (G__17852) {
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
var c__15583__auto___17901 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15583__auto___17901,tc,fc){
return (function (){
var f__15584__auto__ = (function (){var switch__15400__auto__ = ((function (c__15583__auto___17901,tc,fc){
return (function (state_17878){
var state_val_17879 = (state_17878[(1)]);
if((state_val_17879 === (7))){
var inst_17874 = (state_17878[(2)]);
var state_17878__$1 = state_17878;
var statearr_17880_17902 = state_17878__$1;
(statearr_17880_17902[(2)] = inst_17874);

(statearr_17880_17902[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17879 === (1))){
var state_17878__$1 = state_17878;
var statearr_17881_17903 = state_17878__$1;
(statearr_17881_17903[(2)] = null);

(statearr_17881_17903[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17879 === (4))){
var inst_17855 = (state_17878[(7)]);
var inst_17855__$1 = (state_17878[(2)]);
var inst_17856 = (inst_17855__$1 == null);
var state_17878__$1 = (function (){var statearr_17882 = state_17878;
(statearr_17882[(7)] = inst_17855__$1);

return statearr_17882;
})();
if(cljs.core.truth_(inst_17856)){
var statearr_17883_17904 = state_17878__$1;
(statearr_17883_17904[(1)] = (5));

} else {
var statearr_17884_17905 = state_17878__$1;
(statearr_17884_17905[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17879 === (13))){
var state_17878__$1 = state_17878;
var statearr_17885_17906 = state_17878__$1;
(statearr_17885_17906[(2)] = null);

(statearr_17885_17906[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17879 === (6))){
var inst_17855 = (state_17878[(7)]);
var inst_17861 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17855) : p.call(null,inst_17855));
var state_17878__$1 = state_17878;
if(cljs.core.truth_(inst_17861)){
var statearr_17886_17907 = state_17878__$1;
(statearr_17886_17907[(1)] = (9));

} else {
var statearr_17887_17908 = state_17878__$1;
(statearr_17887_17908[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17879 === (3))){
var inst_17876 = (state_17878[(2)]);
var state_17878__$1 = state_17878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17878__$1,inst_17876);
} else {
if((state_val_17879 === (12))){
var state_17878__$1 = state_17878;
var statearr_17888_17909 = state_17878__$1;
(statearr_17888_17909[(2)] = null);

(statearr_17888_17909[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17879 === (2))){
var state_17878__$1 = state_17878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17878__$1,(4),ch);
} else {
if((state_val_17879 === (11))){
var inst_17855 = (state_17878[(7)]);
var inst_17865 = (state_17878[(2)]);
var state_17878__$1 = state_17878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17878__$1,(8),inst_17865,inst_17855);
} else {
if((state_val_17879 === (9))){
var state_17878__$1 = state_17878;
var statearr_17889_17910 = state_17878__$1;
(statearr_17889_17910[(2)] = tc);

(statearr_17889_17910[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17879 === (5))){
var inst_17858 = cljs.core.async.close_BANG_(tc);
var inst_17859 = cljs.core.async.close_BANG_(fc);
var state_17878__$1 = (function (){var statearr_17890 = state_17878;
(statearr_17890[(8)] = inst_17858);

return statearr_17890;
})();
var statearr_17891_17911 = state_17878__$1;
(statearr_17891_17911[(2)] = inst_17859);

(statearr_17891_17911[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17879 === (14))){
var inst_17872 = (state_17878[(2)]);
var state_17878__$1 = state_17878;
var statearr_17892_17912 = state_17878__$1;
(statearr_17892_17912[(2)] = inst_17872);

(statearr_17892_17912[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17879 === (10))){
var state_17878__$1 = state_17878;
var statearr_17893_17913 = state_17878__$1;
(statearr_17893_17913[(2)] = fc);

(statearr_17893_17913[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17879 === (8))){
var inst_17867 = (state_17878[(2)]);
var state_17878__$1 = state_17878;
if(cljs.core.truth_(inst_17867)){
var statearr_17894_17914 = state_17878__$1;
(statearr_17894_17914[(1)] = (12));

} else {
var statearr_17895_17915 = state_17878__$1;
(statearr_17895_17915[(1)] = (13));

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
});})(c__15583__auto___17901,tc,fc))
;
return ((function (switch__15400__auto__,c__15583__auto___17901,tc,fc){
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_17896 = [null,null,null,null,null,null,null,null,null];
(statearr_17896[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_17896[(1)] = (1));

return statearr_17896;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_17878){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_17878);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e17897){if((e17897 instanceof Object)){
var ex__15404__auto__ = e17897;
var statearr_17898_17916 = state_17878;
(statearr_17898_17916[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17878);

return cljs.core.cst$kw$recur;
} else {
throw e17897;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__17917 = state_17878;
state_17878 = G__17917;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_17878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_17878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto___17901,tc,fc))
})();
var state__15585__auto__ = (function (){var statearr_17899 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_17899[(6)] = c__15583__auto___17901);

return statearr_17899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15585__auto__);
});})(c__15583__auto___17901,tc,fc))
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
var c__15583__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15583__auto__){
return (function (){
var f__15584__auto__ = (function (){var switch__15400__auto__ = ((function (c__15583__auto__){
return (function (state_17938){
var state_val_17939 = (state_17938[(1)]);
if((state_val_17939 === (7))){
var inst_17934 = (state_17938[(2)]);
var state_17938__$1 = state_17938;
var statearr_17940_17958 = state_17938__$1;
(statearr_17940_17958[(2)] = inst_17934);

(statearr_17940_17958[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17939 === (1))){
var inst_17918 = init;
var state_17938__$1 = (function (){var statearr_17941 = state_17938;
(statearr_17941[(7)] = inst_17918);

return statearr_17941;
})();
var statearr_17942_17959 = state_17938__$1;
(statearr_17942_17959[(2)] = null);

(statearr_17942_17959[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17939 === (4))){
var inst_17921 = (state_17938[(8)]);
var inst_17921__$1 = (state_17938[(2)]);
var inst_17922 = (inst_17921__$1 == null);
var state_17938__$1 = (function (){var statearr_17943 = state_17938;
(statearr_17943[(8)] = inst_17921__$1);

return statearr_17943;
})();
if(cljs.core.truth_(inst_17922)){
var statearr_17944_17960 = state_17938__$1;
(statearr_17944_17960[(1)] = (5));

} else {
var statearr_17945_17961 = state_17938__$1;
(statearr_17945_17961[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17939 === (6))){
var inst_17921 = (state_17938[(8)]);
var inst_17925 = (state_17938[(9)]);
var inst_17918 = (state_17938[(7)]);
var inst_17925__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17918,inst_17921) : f.call(null,inst_17918,inst_17921));
var inst_17926 = cljs.core.reduced_QMARK_(inst_17925__$1);
var state_17938__$1 = (function (){var statearr_17946 = state_17938;
(statearr_17946[(9)] = inst_17925__$1);

return statearr_17946;
})();
if(inst_17926){
var statearr_17947_17962 = state_17938__$1;
(statearr_17947_17962[(1)] = (8));

} else {
var statearr_17948_17963 = state_17938__$1;
(statearr_17948_17963[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17939 === (3))){
var inst_17936 = (state_17938[(2)]);
var state_17938__$1 = state_17938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17938__$1,inst_17936);
} else {
if((state_val_17939 === (2))){
var state_17938__$1 = state_17938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17938__$1,(4),ch);
} else {
if((state_val_17939 === (9))){
var inst_17925 = (state_17938[(9)]);
var inst_17918 = inst_17925;
var state_17938__$1 = (function (){var statearr_17949 = state_17938;
(statearr_17949[(7)] = inst_17918);

return statearr_17949;
})();
var statearr_17950_17964 = state_17938__$1;
(statearr_17950_17964[(2)] = null);

(statearr_17950_17964[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17939 === (5))){
var inst_17918 = (state_17938[(7)]);
var state_17938__$1 = state_17938;
var statearr_17951_17965 = state_17938__$1;
(statearr_17951_17965[(2)] = inst_17918);

(statearr_17951_17965[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17939 === (10))){
var inst_17932 = (state_17938[(2)]);
var state_17938__$1 = state_17938;
var statearr_17952_17966 = state_17938__$1;
(statearr_17952_17966[(2)] = inst_17932);

(statearr_17952_17966[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17939 === (8))){
var inst_17925 = (state_17938[(9)]);
var inst_17928 = cljs.core.deref(inst_17925);
var state_17938__$1 = state_17938;
var statearr_17953_17967 = state_17938__$1;
(statearr_17953_17967[(2)] = inst_17928);

(statearr_17953_17967[(1)] = (10));


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
});})(c__15583__auto__))
;
return ((function (switch__15400__auto__,c__15583__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15401__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15401__auto____0 = (function (){
var statearr_17954 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17954[(0)] = cljs$core$async$reduce_$_state_machine__15401__auto__);

(statearr_17954[(1)] = (1));

return statearr_17954;
});
var cljs$core$async$reduce_$_state_machine__15401__auto____1 = (function (state_17938){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_17938);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e17955){if((e17955 instanceof Object)){
var ex__15404__auto__ = e17955;
var statearr_17956_17968 = state_17938;
(statearr_17956_17968[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17938);

return cljs.core.cst$kw$recur;
} else {
throw e17955;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__17969 = state_17938;
state_17938 = G__17969;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15401__auto__ = function(state_17938){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15401__auto____1.call(this,state_17938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15401__auto____0;
cljs$core$async$reduce_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15401__auto____1;
return cljs$core$async$reduce_$_state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto__))
})();
var state__15585__auto__ = (function (){var statearr_17957 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_17957[(6)] = c__15583__auto__);

return statearr_17957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15585__auto__);
});})(c__15583__auto__))
);

return c__15583__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15583__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15583__auto__,f__$1){
return (function (){
var f__15584__auto__ = (function (){var switch__15400__auto__ = ((function (c__15583__auto__,f__$1){
return (function (state_17975){
var state_val_17976 = (state_17975[(1)]);
if((state_val_17976 === (1))){
var inst_17970 = cljs.core.async.reduce(f__$1,init,ch);
var state_17975__$1 = state_17975;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17975__$1,(2),inst_17970);
} else {
if((state_val_17976 === (2))){
var inst_17972 = (state_17975[(2)]);
var inst_17973 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17972) : f__$1.call(null,inst_17972));
var state_17975__$1 = state_17975;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17975__$1,inst_17973);
} else {
return null;
}
}
});})(c__15583__auto__,f__$1))
;
return ((function (switch__15400__auto__,c__15583__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15401__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15401__auto____0 = (function (){
var statearr_17977 = [null,null,null,null,null,null,null];
(statearr_17977[(0)] = cljs$core$async$transduce_$_state_machine__15401__auto__);

(statearr_17977[(1)] = (1));

return statearr_17977;
});
var cljs$core$async$transduce_$_state_machine__15401__auto____1 = (function (state_17975){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_17975);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e17978){if((e17978 instanceof Object)){
var ex__15404__auto__ = e17978;
var statearr_17979_17981 = state_17975;
(statearr_17979_17981[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17975);

return cljs.core.cst$kw$recur;
} else {
throw e17978;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__17982 = state_17975;
state_17975 = G__17982;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15401__auto__ = function(state_17975){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15401__auto____1.call(this,state_17975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15401__auto____0;
cljs$core$async$transduce_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15401__auto____1;
return cljs$core$async$transduce_$_state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto__,f__$1))
})();
var state__15585__auto__ = (function (){var statearr_17980 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_17980[(6)] = c__15583__auto__);

return statearr_17980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15585__auto__);
});})(c__15583__auto__,f__$1))
);

return c__15583__auto__;
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
var G__17984 = arguments.length;
switch (G__17984) {
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
var c__15583__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15583__auto__){
return (function (){
var f__15584__auto__ = (function (){var switch__15400__auto__ = ((function (c__15583__auto__){
return (function (state_18009){
var state_val_18010 = (state_18009[(1)]);
if((state_val_18010 === (7))){
var inst_17991 = (state_18009[(2)]);
var state_18009__$1 = state_18009;
var statearr_18011_18032 = state_18009__$1;
(statearr_18011_18032[(2)] = inst_17991);

(statearr_18011_18032[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18010 === (1))){
var inst_17985 = cljs.core.seq(coll);
var inst_17986 = inst_17985;
var state_18009__$1 = (function (){var statearr_18012 = state_18009;
(statearr_18012[(7)] = inst_17986);

return statearr_18012;
})();
var statearr_18013_18033 = state_18009__$1;
(statearr_18013_18033[(2)] = null);

(statearr_18013_18033[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18010 === (4))){
var inst_17986 = (state_18009[(7)]);
var inst_17989 = cljs.core.first(inst_17986);
var state_18009__$1 = state_18009;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18009__$1,(7),ch,inst_17989);
} else {
if((state_val_18010 === (13))){
var inst_18003 = (state_18009[(2)]);
var state_18009__$1 = state_18009;
var statearr_18014_18034 = state_18009__$1;
(statearr_18014_18034[(2)] = inst_18003);

(statearr_18014_18034[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18010 === (6))){
var inst_17994 = (state_18009[(2)]);
var state_18009__$1 = state_18009;
if(cljs.core.truth_(inst_17994)){
var statearr_18015_18035 = state_18009__$1;
(statearr_18015_18035[(1)] = (8));

} else {
var statearr_18016_18036 = state_18009__$1;
(statearr_18016_18036[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18010 === (3))){
var inst_18007 = (state_18009[(2)]);
var state_18009__$1 = state_18009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18009__$1,inst_18007);
} else {
if((state_val_18010 === (12))){
var state_18009__$1 = state_18009;
var statearr_18017_18037 = state_18009__$1;
(statearr_18017_18037[(2)] = null);

(statearr_18017_18037[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18010 === (2))){
var inst_17986 = (state_18009[(7)]);
var state_18009__$1 = state_18009;
if(cljs.core.truth_(inst_17986)){
var statearr_18018_18038 = state_18009__$1;
(statearr_18018_18038[(1)] = (4));

} else {
var statearr_18019_18039 = state_18009__$1;
(statearr_18019_18039[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18010 === (11))){
var inst_18000 = cljs.core.async.close_BANG_(ch);
var state_18009__$1 = state_18009;
var statearr_18020_18040 = state_18009__$1;
(statearr_18020_18040[(2)] = inst_18000);

(statearr_18020_18040[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18010 === (9))){
var state_18009__$1 = state_18009;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18021_18041 = state_18009__$1;
(statearr_18021_18041[(1)] = (11));

} else {
var statearr_18022_18042 = state_18009__$1;
(statearr_18022_18042[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18010 === (5))){
var inst_17986 = (state_18009[(7)]);
var state_18009__$1 = state_18009;
var statearr_18023_18043 = state_18009__$1;
(statearr_18023_18043[(2)] = inst_17986);

(statearr_18023_18043[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18010 === (10))){
var inst_18005 = (state_18009[(2)]);
var state_18009__$1 = state_18009;
var statearr_18024_18044 = state_18009__$1;
(statearr_18024_18044[(2)] = inst_18005);

(statearr_18024_18044[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18010 === (8))){
var inst_17986 = (state_18009[(7)]);
var inst_17996 = cljs.core.next(inst_17986);
var inst_17986__$1 = inst_17996;
var state_18009__$1 = (function (){var statearr_18025 = state_18009;
(statearr_18025[(7)] = inst_17986__$1);

return statearr_18025;
})();
var statearr_18026_18045 = state_18009__$1;
(statearr_18026_18045[(2)] = null);

(statearr_18026_18045[(1)] = (2));


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
});})(c__15583__auto__))
;
return ((function (switch__15400__auto__,c__15583__auto__){
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_18027 = [null,null,null,null,null,null,null,null];
(statearr_18027[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_18027[(1)] = (1));

return statearr_18027;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_18009){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_18009);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e18028){if((e18028 instanceof Object)){
var ex__15404__auto__ = e18028;
var statearr_18029_18046 = state_18009;
(statearr_18029_18046[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18009);

return cljs.core.cst$kw$recur;
} else {
throw e18028;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__18047 = state_18009;
state_18009 = G__18047;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_18009){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_18009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto__))
})();
var state__15585__auto__ = (function (){var statearr_18030 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_18030[(6)] = c__15583__auto__);

return statearr_18030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15585__auto__);
});})(c__15583__auto__))
);

return c__15583__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18048 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18048 = (function (ch,cs,meta18049){
this.ch = ch;
this.cs = cs;
this.meta18049 = meta18049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18050,meta18049__$1){
var self__ = this;
var _18050__$1 = this;
return (new cljs.core.async.t_cljs$core$async18048(self__.ch,self__.cs,meta18049__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18048.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18050){
var self__ = this;
var _18050__$1 = this;
return self__.meta18049;
});})(cs))
;

cljs.core.async.t_cljs$core$async18048.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18048.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18048.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18048.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18048.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18048.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18048.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta18049], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18048.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18048";

cljs.core.async.t_cljs$core$async18048.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18048");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18048.
 */
cljs.core.async.__GT_t_cljs$core$async18048 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18048(ch__$1,cs__$1,meta18049){
return (new cljs.core.async.t_cljs$core$async18048(ch__$1,cs__$1,meta18049));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18048(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15583__auto___18270 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15583__auto___18270,cs,m,dchan,dctr,done){
return (function (){
var f__15584__auto__ = (function (){var switch__15400__auto__ = ((function (c__15583__auto___18270,cs,m,dchan,dctr,done){
return (function (state_18185){
var state_val_18186 = (state_18185[(1)]);
if((state_val_18186 === (7))){
var inst_18181 = (state_18185[(2)]);
var state_18185__$1 = state_18185;
var statearr_18187_18271 = state_18185__$1;
(statearr_18187_18271[(2)] = inst_18181);

(statearr_18187_18271[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (20))){
var inst_18084 = (state_18185[(7)]);
var inst_18096 = cljs.core.first(inst_18084);
var inst_18097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18096,(0),null);
var inst_18098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18096,(1),null);
var state_18185__$1 = (function (){var statearr_18188 = state_18185;
(statearr_18188[(8)] = inst_18097);

return statearr_18188;
})();
if(cljs.core.truth_(inst_18098)){
var statearr_18189_18272 = state_18185__$1;
(statearr_18189_18272[(1)] = (22));

} else {
var statearr_18190_18273 = state_18185__$1;
(statearr_18190_18273[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (27))){
var inst_18128 = (state_18185[(9)]);
var inst_18053 = (state_18185[(10)]);
var inst_18133 = (state_18185[(11)]);
var inst_18126 = (state_18185[(12)]);
var inst_18133__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18126,inst_18128);
var inst_18134 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18133__$1,inst_18053,done);
var state_18185__$1 = (function (){var statearr_18191 = state_18185;
(statearr_18191[(11)] = inst_18133__$1);

return statearr_18191;
})();
if(cljs.core.truth_(inst_18134)){
var statearr_18192_18274 = state_18185__$1;
(statearr_18192_18274[(1)] = (30));

} else {
var statearr_18193_18275 = state_18185__$1;
(statearr_18193_18275[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (1))){
var state_18185__$1 = state_18185;
var statearr_18194_18276 = state_18185__$1;
(statearr_18194_18276[(2)] = null);

(statearr_18194_18276[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (24))){
var inst_18084 = (state_18185[(7)]);
var inst_18103 = (state_18185[(2)]);
var inst_18104 = cljs.core.next(inst_18084);
var inst_18062 = inst_18104;
var inst_18063 = null;
var inst_18064 = (0);
var inst_18065 = (0);
var state_18185__$1 = (function (){var statearr_18195 = state_18185;
(statearr_18195[(13)] = inst_18063);

(statearr_18195[(14)] = inst_18065);

(statearr_18195[(15)] = inst_18062);

(statearr_18195[(16)] = inst_18064);

(statearr_18195[(17)] = inst_18103);

return statearr_18195;
})();
var statearr_18196_18277 = state_18185__$1;
(statearr_18196_18277[(2)] = null);

(statearr_18196_18277[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (39))){
var state_18185__$1 = state_18185;
var statearr_18200_18278 = state_18185__$1;
(statearr_18200_18278[(2)] = null);

(statearr_18200_18278[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (4))){
var inst_18053 = (state_18185[(10)]);
var inst_18053__$1 = (state_18185[(2)]);
var inst_18054 = (inst_18053__$1 == null);
var state_18185__$1 = (function (){var statearr_18201 = state_18185;
(statearr_18201[(10)] = inst_18053__$1);

return statearr_18201;
})();
if(cljs.core.truth_(inst_18054)){
var statearr_18202_18279 = state_18185__$1;
(statearr_18202_18279[(1)] = (5));

} else {
var statearr_18203_18280 = state_18185__$1;
(statearr_18203_18280[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (15))){
var inst_18063 = (state_18185[(13)]);
var inst_18065 = (state_18185[(14)]);
var inst_18062 = (state_18185[(15)]);
var inst_18064 = (state_18185[(16)]);
var inst_18080 = (state_18185[(2)]);
var inst_18081 = (inst_18065 + (1));
var tmp18197 = inst_18063;
var tmp18198 = inst_18062;
var tmp18199 = inst_18064;
var inst_18062__$1 = tmp18198;
var inst_18063__$1 = tmp18197;
var inst_18064__$1 = tmp18199;
var inst_18065__$1 = inst_18081;
var state_18185__$1 = (function (){var statearr_18204 = state_18185;
(statearr_18204[(13)] = inst_18063__$1);

(statearr_18204[(14)] = inst_18065__$1);

(statearr_18204[(18)] = inst_18080);

(statearr_18204[(15)] = inst_18062__$1);

(statearr_18204[(16)] = inst_18064__$1);

return statearr_18204;
})();
var statearr_18205_18281 = state_18185__$1;
(statearr_18205_18281[(2)] = null);

(statearr_18205_18281[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (21))){
var inst_18107 = (state_18185[(2)]);
var state_18185__$1 = state_18185;
var statearr_18209_18282 = state_18185__$1;
(statearr_18209_18282[(2)] = inst_18107);

(statearr_18209_18282[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (31))){
var inst_18133 = (state_18185[(11)]);
var inst_18137 = done(null);
var inst_18138 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18133);
var state_18185__$1 = (function (){var statearr_18210 = state_18185;
(statearr_18210[(19)] = inst_18137);

return statearr_18210;
})();
var statearr_18211_18283 = state_18185__$1;
(statearr_18211_18283[(2)] = inst_18138);

(statearr_18211_18283[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (32))){
var inst_18128 = (state_18185[(9)]);
var inst_18126 = (state_18185[(12)]);
var inst_18125 = (state_18185[(20)]);
var inst_18127 = (state_18185[(21)]);
var inst_18140 = (state_18185[(2)]);
var inst_18141 = (inst_18128 + (1));
var tmp18206 = inst_18126;
var tmp18207 = inst_18125;
var tmp18208 = inst_18127;
var inst_18125__$1 = tmp18207;
var inst_18126__$1 = tmp18206;
var inst_18127__$1 = tmp18208;
var inst_18128__$1 = inst_18141;
var state_18185__$1 = (function (){var statearr_18212 = state_18185;
(statearr_18212[(9)] = inst_18128__$1);

(statearr_18212[(12)] = inst_18126__$1);

(statearr_18212[(20)] = inst_18125__$1);

(statearr_18212[(22)] = inst_18140);

(statearr_18212[(21)] = inst_18127__$1);

return statearr_18212;
})();
var statearr_18213_18284 = state_18185__$1;
(statearr_18213_18284[(2)] = null);

(statearr_18213_18284[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (40))){
var inst_18153 = (state_18185[(23)]);
var inst_18157 = done(null);
var inst_18158 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18153);
var state_18185__$1 = (function (){var statearr_18214 = state_18185;
(statearr_18214[(24)] = inst_18157);

return statearr_18214;
})();
var statearr_18215_18285 = state_18185__$1;
(statearr_18215_18285[(2)] = inst_18158);

(statearr_18215_18285[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (33))){
var inst_18144 = (state_18185[(25)]);
var inst_18146 = cljs.core.chunked_seq_QMARK_(inst_18144);
var state_18185__$1 = state_18185;
if(inst_18146){
var statearr_18216_18286 = state_18185__$1;
(statearr_18216_18286[(1)] = (36));

} else {
var statearr_18217_18287 = state_18185__$1;
(statearr_18217_18287[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (13))){
var inst_18074 = (state_18185[(26)]);
var inst_18077 = cljs.core.async.close_BANG_(inst_18074);
var state_18185__$1 = state_18185;
var statearr_18218_18288 = state_18185__$1;
(statearr_18218_18288[(2)] = inst_18077);

(statearr_18218_18288[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (22))){
var inst_18097 = (state_18185[(8)]);
var inst_18100 = cljs.core.async.close_BANG_(inst_18097);
var state_18185__$1 = state_18185;
var statearr_18219_18289 = state_18185__$1;
(statearr_18219_18289[(2)] = inst_18100);

(statearr_18219_18289[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (36))){
var inst_18144 = (state_18185[(25)]);
var inst_18148 = cljs.core.chunk_first(inst_18144);
var inst_18149 = cljs.core.chunk_rest(inst_18144);
var inst_18150 = cljs.core.count(inst_18148);
var inst_18125 = inst_18149;
var inst_18126 = inst_18148;
var inst_18127 = inst_18150;
var inst_18128 = (0);
var state_18185__$1 = (function (){var statearr_18220 = state_18185;
(statearr_18220[(9)] = inst_18128);

(statearr_18220[(12)] = inst_18126);

(statearr_18220[(20)] = inst_18125);

(statearr_18220[(21)] = inst_18127);

return statearr_18220;
})();
var statearr_18221_18290 = state_18185__$1;
(statearr_18221_18290[(2)] = null);

(statearr_18221_18290[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (41))){
var inst_18144 = (state_18185[(25)]);
var inst_18160 = (state_18185[(2)]);
var inst_18161 = cljs.core.next(inst_18144);
var inst_18125 = inst_18161;
var inst_18126 = null;
var inst_18127 = (0);
var inst_18128 = (0);
var state_18185__$1 = (function (){var statearr_18222 = state_18185;
(statearr_18222[(9)] = inst_18128);

(statearr_18222[(12)] = inst_18126);

(statearr_18222[(20)] = inst_18125);

(statearr_18222[(27)] = inst_18160);

(statearr_18222[(21)] = inst_18127);

return statearr_18222;
})();
var statearr_18223_18291 = state_18185__$1;
(statearr_18223_18291[(2)] = null);

(statearr_18223_18291[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (43))){
var state_18185__$1 = state_18185;
var statearr_18224_18292 = state_18185__$1;
(statearr_18224_18292[(2)] = null);

(statearr_18224_18292[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (29))){
var inst_18169 = (state_18185[(2)]);
var state_18185__$1 = state_18185;
var statearr_18225_18293 = state_18185__$1;
(statearr_18225_18293[(2)] = inst_18169);

(statearr_18225_18293[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (44))){
var inst_18178 = (state_18185[(2)]);
var state_18185__$1 = (function (){var statearr_18226 = state_18185;
(statearr_18226[(28)] = inst_18178);

return statearr_18226;
})();
var statearr_18227_18294 = state_18185__$1;
(statearr_18227_18294[(2)] = null);

(statearr_18227_18294[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (6))){
var inst_18117 = (state_18185[(29)]);
var inst_18116 = cljs.core.deref(cs);
var inst_18117__$1 = cljs.core.keys(inst_18116);
var inst_18118 = cljs.core.count(inst_18117__$1);
var inst_18119 = cljs.core.reset_BANG_(dctr,inst_18118);
var inst_18124 = cljs.core.seq(inst_18117__$1);
var inst_18125 = inst_18124;
var inst_18126 = null;
var inst_18127 = (0);
var inst_18128 = (0);
var state_18185__$1 = (function (){var statearr_18228 = state_18185;
(statearr_18228[(9)] = inst_18128);

(statearr_18228[(30)] = inst_18119);

(statearr_18228[(12)] = inst_18126);

(statearr_18228[(20)] = inst_18125);

(statearr_18228[(29)] = inst_18117__$1);

(statearr_18228[(21)] = inst_18127);

return statearr_18228;
})();
var statearr_18229_18295 = state_18185__$1;
(statearr_18229_18295[(2)] = null);

(statearr_18229_18295[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (28))){
var inst_18144 = (state_18185[(25)]);
var inst_18125 = (state_18185[(20)]);
var inst_18144__$1 = cljs.core.seq(inst_18125);
var state_18185__$1 = (function (){var statearr_18230 = state_18185;
(statearr_18230[(25)] = inst_18144__$1);

return statearr_18230;
})();
if(inst_18144__$1){
var statearr_18231_18296 = state_18185__$1;
(statearr_18231_18296[(1)] = (33));

} else {
var statearr_18232_18297 = state_18185__$1;
(statearr_18232_18297[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (25))){
var inst_18128 = (state_18185[(9)]);
var inst_18127 = (state_18185[(21)]);
var inst_18130 = (inst_18128 < inst_18127);
var inst_18131 = inst_18130;
var state_18185__$1 = state_18185;
if(cljs.core.truth_(inst_18131)){
var statearr_18233_18298 = state_18185__$1;
(statearr_18233_18298[(1)] = (27));

} else {
var statearr_18234_18299 = state_18185__$1;
(statearr_18234_18299[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (34))){
var state_18185__$1 = state_18185;
var statearr_18235_18300 = state_18185__$1;
(statearr_18235_18300[(2)] = null);

(statearr_18235_18300[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (17))){
var state_18185__$1 = state_18185;
var statearr_18236_18301 = state_18185__$1;
(statearr_18236_18301[(2)] = null);

(statearr_18236_18301[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (3))){
var inst_18183 = (state_18185[(2)]);
var state_18185__$1 = state_18185;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18185__$1,inst_18183);
} else {
if((state_val_18186 === (12))){
var inst_18112 = (state_18185[(2)]);
var state_18185__$1 = state_18185;
var statearr_18237_18302 = state_18185__$1;
(statearr_18237_18302[(2)] = inst_18112);

(statearr_18237_18302[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (2))){
var state_18185__$1 = state_18185;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18185__$1,(4),ch);
} else {
if((state_val_18186 === (23))){
var state_18185__$1 = state_18185;
var statearr_18238_18303 = state_18185__$1;
(statearr_18238_18303[(2)] = null);

(statearr_18238_18303[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (35))){
var inst_18167 = (state_18185[(2)]);
var state_18185__$1 = state_18185;
var statearr_18239_18304 = state_18185__$1;
(statearr_18239_18304[(2)] = inst_18167);

(statearr_18239_18304[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (19))){
var inst_18084 = (state_18185[(7)]);
var inst_18088 = cljs.core.chunk_first(inst_18084);
var inst_18089 = cljs.core.chunk_rest(inst_18084);
var inst_18090 = cljs.core.count(inst_18088);
var inst_18062 = inst_18089;
var inst_18063 = inst_18088;
var inst_18064 = inst_18090;
var inst_18065 = (0);
var state_18185__$1 = (function (){var statearr_18240 = state_18185;
(statearr_18240[(13)] = inst_18063);

(statearr_18240[(14)] = inst_18065);

(statearr_18240[(15)] = inst_18062);

(statearr_18240[(16)] = inst_18064);

return statearr_18240;
})();
var statearr_18241_18305 = state_18185__$1;
(statearr_18241_18305[(2)] = null);

(statearr_18241_18305[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (11))){
var inst_18084 = (state_18185[(7)]);
var inst_18062 = (state_18185[(15)]);
var inst_18084__$1 = cljs.core.seq(inst_18062);
var state_18185__$1 = (function (){var statearr_18242 = state_18185;
(statearr_18242[(7)] = inst_18084__$1);

return statearr_18242;
})();
if(inst_18084__$1){
var statearr_18243_18306 = state_18185__$1;
(statearr_18243_18306[(1)] = (16));

} else {
var statearr_18244_18307 = state_18185__$1;
(statearr_18244_18307[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (9))){
var inst_18114 = (state_18185[(2)]);
var state_18185__$1 = state_18185;
var statearr_18245_18308 = state_18185__$1;
(statearr_18245_18308[(2)] = inst_18114);

(statearr_18245_18308[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (5))){
var inst_18060 = cljs.core.deref(cs);
var inst_18061 = cljs.core.seq(inst_18060);
var inst_18062 = inst_18061;
var inst_18063 = null;
var inst_18064 = (0);
var inst_18065 = (0);
var state_18185__$1 = (function (){var statearr_18246 = state_18185;
(statearr_18246[(13)] = inst_18063);

(statearr_18246[(14)] = inst_18065);

(statearr_18246[(15)] = inst_18062);

(statearr_18246[(16)] = inst_18064);

return statearr_18246;
})();
var statearr_18247_18309 = state_18185__$1;
(statearr_18247_18309[(2)] = null);

(statearr_18247_18309[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (14))){
var state_18185__$1 = state_18185;
var statearr_18248_18310 = state_18185__$1;
(statearr_18248_18310[(2)] = null);

(statearr_18248_18310[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (45))){
var inst_18175 = (state_18185[(2)]);
var state_18185__$1 = state_18185;
var statearr_18249_18311 = state_18185__$1;
(statearr_18249_18311[(2)] = inst_18175);

(statearr_18249_18311[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (26))){
var inst_18117 = (state_18185[(29)]);
var inst_18171 = (state_18185[(2)]);
var inst_18172 = cljs.core.seq(inst_18117);
var state_18185__$1 = (function (){var statearr_18250 = state_18185;
(statearr_18250[(31)] = inst_18171);

return statearr_18250;
})();
if(inst_18172){
var statearr_18251_18312 = state_18185__$1;
(statearr_18251_18312[(1)] = (42));

} else {
var statearr_18252_18313 = state_18185__$1;
(statearr_18252_18313[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (16))){
var inst_18084 = (state_18185[(7)]);
var inst_18086 = cljs.core.chunked_seq_QMARK_(inst_18084);
var state_18185__$1 = state_18185;
if(inst_18086){
var statearr_18253_18314 = state_18185__$1;
(statearr_18253_18314[(1)] = (19));

} else {
var statearr_18254_18315 = state_18185__$1;
(statearr_18254_18315[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (38))){
var inst_18164 = (state_18185[(2)]);
var state_18185__$1 = state_18185;
var statearr_18255_18316 = state_18185__$1;
(statearr_18255_18316[(2)] = inst_18164);

(statearr_18255_18316[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (30))){
var state_18185__$1 = state_18185;
var statearr_18256_18317 = state_18185__$1;
(statearr_18256_18317[(2)] = null);

(statearr_18256_18317[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (10))){
var inst_18063 = (state_18185[(13)]);
var inst_18065 = (state_18185[(14)]);
var inst_18073 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18063,inst_18065);
var inst_18074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18073,(0),null);
var inst_18075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18073,(1),null);
var state_18185__$1 = (function (){var statearr_18257 = state_18185;
(statearr_18257[(26)] = inst_18074);

return statearr_18257;
})();
if(cljs.core.truth_(inst_18075)){
var statearr_18258_18318 = state_18185__$1;
(statearr_18258_18318[(1)] = (13));

} else {
var statearr_18259_18319 = state_18185__$1;
(statearr_18259_18319[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (18))){
var inst_18110 = (state_18185[(2)]);
var state_18185__$1 = state_18185;
var statearr_18260_18320 = state_18185__$1;
(statearr_18260_18320[(2)] = inst_18110);

(statearr_18260_18320[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (42))){
var state_18185__$1 = state_18185;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18185__$1,(45),dchan);
} else {
if((state_val_18186 === (37))){
var inst_18053 = (state_18185[(10)]);
var inst_18144 = (state_18185[(25)]);
var inst_18153 = (state_18185[(23)]);
var inst_18153__$1 = cljs.core.first(inst_18144);
var inst_18154 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18153__$1,inst_18053,done);
var state_18185__$1 = (function (){var statearr_18261 = state_18185;
(statearr_18261[(23)] = inst_18153__$1);

return statearr_18261;
})();
if(cljs.core.truth_(inst_18154)){
var statearr_18262_18321 = state_18185__$1;
(statearr_18262_18321[(1)] = (39));

} else {
var statearr_18263_18322 = state_18185__$1;
(statearr_18263_18322[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (8))){
var inst_18065 = (state_18185[(14)]);
var inst_18064 = (state_18185[(16)]);
var inst_18067 = (inst_18065 < inst_18064);
var inst_18068 = inst_18067;
var state_18185__$1 = state_18185;
if(cljs.core.truth_(inst_18068)){
var statearr_18264_18323 = state_18185__$1;
(statearr_18264_18323[(1)] = (10));

} else {
var statearr_18265_18324 = state_18185__$1;
(statearr_18265_18324[(1)] = (11));

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
});})(c__15583__auto___18270,cs,m,dchan,dctr,done))
;
return ((function (switch__15400__auto__,c__15583__auto___18270,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15401__auto__ = null;
var cljs$core$async$mult_$_state_machine__15401__auto____0 = (function (){
var statearr_18266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18266[(0)] = cljs$core$async$mult_$_state_machine__15401__auto__);

(statearr_18266[(1)] = (1));

return statearr_18266;
});
var cljs$core$async$mult_$_state_machine__15401__auto____1 = (function (state_18185){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_18185);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e18267){if((e18267 instanceof Object)){
var ex__15404__auto__ = e18267;
var statearr_18268_18325 = state_18185;
(statearr_18268_18325[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18185);

return cljs.core.cst$kw$recur;
} else {
throw e18267;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__18326 = state_18185;
state_18185 = G__18326;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15401__auto__ = function(state_18185){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15401__auto____1.call(this,state_18185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15401__auto____0;
cljs$core$async$mult_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15401__auto____1;
return cljs$core$async$mult_$_state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto___18270,cs,m,dchan,dctr,done))
})();
var state__15585__auto__ = (function (){var statearr_18269 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_18269[(6)] = c__15583__auto___18270);

return statearr_18269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15585__auto__);
});})(c__15583__auto___18270,cs,m,dchan,dctr,done))
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
var G__18328 = arguments.length;
switch (G__18328) {
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
var len__4531__auto___18340 = arguments.length;
var i__4532__auto___18341 = (0);
while(true){
if((i__4532__auto___18341 < len__4531__auto___18340)){
args__4534__auto__.push((arguments[i__4532__auto___18341]));

var G__18342 = (i__4532__auto___18341 + (1));
i__4532__auto___18341 = G__18342;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18334){
var map__18335 = p__18334;
var map__18335__$1 = ((((!((map__18335 == null)))?(((((map__18335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18335):map__18335);
var opts = map__18335__$1;
var statearr_18337_18343 = state;
(statearr_18337_18343[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__18335,map__18335__$1,opts){
return (function (val){
var statearr_18338_18344 = state;
(statearr_18338_18344[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__18335,map__18335__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_18339_18345 = state;
(statearr_18339_18345[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18330){
var G__18331 = cljs.core.first(seq18330);
var seq18330__$1 = cljs.core.next(seq18330);
var G__18332 = cljs.core.first(seq18330__$1);
var seq18330__$2 = cljs.core.next(seq18330__$1);
var G__18333 = cljs.core.first(seq18330__$2);
var seq18330__$3 = cljs.core.next(seq18330__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18331,G__18332,G__18333,seq18330__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18346 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18346 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta18347){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta18347 = meta18347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18348,meta18347__$1){
var self__ = this;
var _18348__$1 = this;
return (new cljs.core.async.t_cljs$core$async18346(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta18347__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18346.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18348){
var self__ = this;
var _18348__$1 = this;
return self__.meta18347;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18346.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18346.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18346.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18346.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18346.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18346.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18346.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18346.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18346.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta18347], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18346.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18346";

cljs.core.async.t_cljs$core$async18346.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18346");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18346.
 */
cljs.core.async.__GT_t_cljs$core$async18346 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18346(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18347){
return (new cljs.core.async.t_cljs$core$async18346(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18347));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18346(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15583__auto___18510 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15583__auto___18510,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15584__auto__ = (function (){var switch__15400__auto__ = ((function (c__15583__auto___18510,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18450){
var state_val_18451 = (state_18450[(1)]);
if((state_val_18451 === (7))){
var inst_18365 = (state_18450[(2)]);
var state_18450__$1 = state_18450;
var statearr_18452_18511 = state_18450__$1;
(statearr_18452_18511[(2)] = inst_18365);

(statearr_18452_18511[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (20))){
var inst_18377 = (state_18450[(7)]);
var state_18450__$1 = state_18450;
var statearr_18453_18512 = state_18450__$1;
(statearr_18453_18512[(2)] = inst_18377);

(statearr_18453_18512[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (27))){
var state_18450__$1 = state_18450;
var statearr_18454_18513 = state_18450__$1;
(statearr_18454_18513[(2)] = null);

(statearr_18454_18513[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (1))){
var inst_18352 = (state_18450[(8)]);
var inst_18352__$1 = calc_state();
var inst_18354 = (inst_18352__$1 == null);
var inst_18355 = cljs.core.not(inst_18354);
var state_18450__$1 = (function (){var statearr_18455 = state_18450;
(statearr_18455[(8)] = inst_18352__$1);

return statearr_18455;
})();
if(inst_18355){
var statearr_18456_18514 = state_18450__$1;
(statearr_18456_18514[(1)] = (2));

} else {
var statearr_18457_18515 = state_18450__$1;
(statearr_18457_18515[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (24))){
var inst_18401 = (state_18450[(9)]);
var inst_18410 = (state_18450[(10)]);
var inst_18424 = (state_18450[(11)]);
var inst_18424__$1 = (inst_18401.cljs$core$IFn$_invoke$arity$1 ? inst_18401.cljs$core$IFn$_invoke$arity$1(inst_18410) : inst_18401.call(null,inst_18410));
var state_18450__$1 = (function (){var statearr_18458 = state_18450;
(statearr_18458[(11)] = inst_18424__$1);

return statearr_18458;
})();
if(cljs.core.truth_(inst_18424__$1)){
var statearr_18459_18516 = state_18450__$1;
(statearr_18459_18516[(1)] = (29));

} else {
var statearr_18460_18517 = state_18450__$1;
(statearr_18460_18517[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (4))){
var inst_18368 = (state_18450[(2)]);
var state_18450__$1 = state_18450;
if(cljs.core.truth_(inst_18368)){
var statearr_18461_18518 = state_18450__$1;
(statearr_18461_18518[(1)] = (8));

} else {
var statearr_18462_18519 = state_18450__$1;
(statearr_18462_18519[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (15))){
var inst_18395 = (state_18450[(2)]);
var state_18450__$1 = state_18450;
if(cljs.core.truth_(inst_18395)){
var statearr_18463_18520 = state_18450__$1;
(statearr_18463_18520[(1)] = (19));

} else {
var statearr_18464_18521 = state_18450__$1;
(statearr_18464_18521[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (21))){
var inst_18400 = (state_18450[(12)]);
var inst_18400__$1 = (state_18450[(2)]);
var inst_18401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18400__$1,cljs.core.cst$kw$solos);
var inst_18402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18400__$1,cljs.core.cst$kw$mutes);
var inst_18403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18400__$1,cljs.core.cst$kw$reads);
var state_18450__$1 = (function (){var statearr_18465 = state_18450;
(statearr_18465[(13)] = inst_18402);

(statearr_18465[(9)] = inst_18401);

(statearr_18465[(12)] = inst_18400__$1);

return statearr_18465;
})();
return cljs.core.async.ioc_alts_BANG_(state_18450__$1,(22),inst_18403);
} else {
if((state_val_18451 === (31))){
var inst_18432 = (state_18450[(2)]);
var state_18450__$1 = state_18450;
if(cljs.core.truth_(inst_18432)){
var statearr_18466_18522 = state_18450__$1;
(statearr_18466_18522[(1)] = (32));

} else {
var statearr_18467_18523 = state_18450__$1;
(statearr_18467_18523[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (32))){
var inst_18409 = (state_18450[(14)]);
var state_18450__$1 = state_18450;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18450__$1,(35),out,inst_18409);
} else {
if((state_val_18451 === (33))){
var inst_18400 = (state_18450[(12)]);
var inst_18377 = inst_18400;
var state_18450__$1 = (function (){var statearr_18468 = state_18450;
(statearr_18468[(7)] = inst_18377);

return statearr_18468;
})();
var statearr_18469_18524 = state_18450__$1;
(statearr_18469_18524[(2)] = null);

(statearr_18469_18524[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (13))){
var inst_18377 = (state_18450[(7)]);
var inst_18384 = inst_18377.cljs$lang$protocol_mask$partition0$;
var inst_18385 = (inst_18384 & (64));
var inst_18386 = inst_18377.cljs$core$ISeq$;
var inst_18387 = (cljs.core.PROTOCOL_SENTINEL === inst_18386);
var inst_18388 = ((inst_18385) || (inst_18387));
var state_18450__$1 = state_18450;
if(cljs.core.truth_(inst_18388)){
var statearr_18470_18525 = state_18450__$1;
(statearr_18470_18525[(1)] = (16));

} else {
var statearr_18471_18526 = state_18450__$1;
(statearr_18471_18526[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (22))){
var inst_18410 = (state_18450[(10)]);
var inst_18409 = (state_18450[(14)]);
var inst_18408 = (state_18450[(2)]);
var inst_18409__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18408,(0),null);
var inst_18410__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18408,(1),null);
var inst_18411 = (inst_18409__$1 == null);
var inst_18412 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18410__$1,change);
var inst_18413 = ((inst_18411) || (inst_18412));
var state_18450__$1 = (function (){var statearr_18472 = state_18450;
(statearr_18472[(10)] = inst_18410__$1);

(statearr_18472[(14)] = inst_18409__$1);

return statearr_18472;
})();
if(cljs.core.truth_(inst_18413)){
var statearr_18473_18527 = state_18450__$1;
(statearr_18473_18527[(1)] = (23));

} else {
var statearr_18474_18528 = state_18450__$1;
(statearr_18474_18528[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (36))){
var inst_18400 = (state_18450[(12)]);
var inst_18377 = inst_18400;
var state_18450__$1 = (function (){var statearr_18475 = state_18450;
(statearr_18475[(7)] = inst_18377);

return statearr_18475;
})();
var statearr_18476_18529 = state_18450__$1;
(statearr_18476_18529[(2)] = null);

(statearr_18476_18529[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (29))){
var inst_18424 = (state_18450[(11)]);
var state_18450__$1 = state_18450;
var statearr_18477_18530 = state_18450__$1;
(statearr_18477_18530[(2)] = inst_18424);

(statearr_18477_18530[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (6))){
var state_18450__$1 = state_18450;
var statearr_18478_18531 = state_18450__$1;
(statearr_18478_18531[(2)] = false);

(statearr_18478_18531[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (28))){
var inst_18420 = (state_18450[(2)]);
var inst_18421 = calc_state();
var inst_18377 = inst_18421;
var state_18450__$1 = (function (){var statearr_18479 = state_18450;
(statearr_18479[(7)] = inst_18377);

(statearr_18479[(15)] = inst_18420);

return statearr_18479;
})();
var statearr_18480_18532 = state_18450__$1;
(statearr_18480_18532[(2)] = null);

(statearr_18480_18532[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (25))){
var inst_18446 = (state_18450[(2)]);
var state_18450__$1 = state_18450;
var statearr_18481_18533 = state_18450__$1;
(statearr_18481_18533[(2)] = inst_18446);

(statearr_18481_18533[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (34))){
var inst_18444 = (state_18450[(2)]);
var state_18450__$1 = state_18450;
var statearr_18482_18534 = state_18450__$1;
(statearr_18482_18534[(2)] = inst_18444);

(statearr_18482_18534[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (17))){
var state_18450__$1 = state_18450;
var statearr_18483_18535 = state_18450__$1;
(statearr_18483_18535[(2)] = false);

(statearr_18483_18535[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (3))){
var state_18450__$1 = state_18450;
var statearr_18484_18536 = state_18450__$1;
(statearr_18484_18536[(2)] = false);

(statearr_18484_18536[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (12))){
var inst_18448 = (state_18450[(2)]);
var state_18450__$1 = state_18450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18450__$1,inst_18448);
} else {
if((state_val_18451 === (2))){
var inst_18352 = (state_18450[(8)]);
var inst_18357 = inst_18352.cljs$lang$protocol_mask$partition0$;
var inst_18358 = (inst_18357 & (64));
var inst_18359 = inst_18352.cljs$core$ISeq$;
var inst_18360 = (cljs.core.PROTOCOL_SENTINEL === inst_18359);
var inst_18361 = ((inst_18358) || (inst_18360));
var state_18450__$1 = state_18450;
if(cljs.core.truth_(inst_18361)){
var statearr_18485_18537 = state_18450__$1;
(statearr_18485_18537[(1)] = (5));

} else {
var statearr_18486_18538 = state_18450__$1;
(statearr_18486_18538[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (23))){
var inst_18409 = (state_18450[(14)]);
var inst_18415 = (inst_18409 == null);
var state_18450__$1 = state_18450;
if(cljs.core.truth_(inst_18415)){
var statearr_18487_18539 = state_18450__$1;
(statearr_18487_18539[(1)] = (26));

} else {
var statearr_18488_18540 = state_18450__$1;
(statearr_18488_18540[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (35))){
var inst_18435 = (state_18450[(2)]);
var state_18450__$1 = state_18450;
if(cljs.core.truth_(inst_18435)){
var statearr_18489_18541 = state_18450__$1;
(statearr_18489_18541[(1)] = (36));

} else {
var statearr_18490_18542 = state_18450__$1;
(statearr_18490_18542[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (19))){
var inst_18377 = (state_18450[(7)]);
var inst_18397 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18377);
var state_18450__$1 = state_18450;
var statearr_18491_18543 = state_18450__$1;
(statearr_18491_18543[(2)] = inst_18397);

(statearr_18491_18543[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (11))){
var inst_18377 = (state_18450[(7)]);
var inst_18381 = (inst_18377 == null);
var inst_18382 = cljs.core.not(inst_18381);
var state_18450__$1 = state_18450;
if(inst_18382){
var statearr_18492_18544 = state_18450__$1;
(statearr_18492_18544[(1)] = (13));

} else {
var statearr_18493_18545 = state_18450__$1;
(statearr_18493_18545[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (9))){
var inst_18352 = (state_18450[(8)]);
var state_18450__$1 = state_18450;
var statearr_18494_18546 = state_18450__$1;
(statearr_18494_18546[(2)] = inst_18352);

(statearr_18494_18546[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (5))){
var state_18450__$1 = state_18450;
var statearr_18495_18547 = state_18450__$1;
(statearr_18495_18547[(2)] = true);

(statearr_18495_18547[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (14))){
var state_18450__$1 = state_18450;
var statearr_18496_18548 = state_18450__$1;
(statearr_18496_18548[(2)] = false);

(statearr_18496_18548[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (26))){
var inst_18410 = (state_18450[(10)]);
var inst_18417 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18410);
var state_18450__$1 = state_18450;
var statearr_18497_18549 = state_18450__$1;
(statearr_18497_18549[(2)] = inst_18417);

(statearr_18497_18549[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (16))){
var state_18450__$1 = state_18450;
var statearr_18498_18550 = state_18450__$1;
(statearr_18498_18550[(2)] = true);

(statearr_18498_18550[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (38))){
var inst_18440 = (state_18450[(2)]);
var state_18450__$1 = state_18450;
var statearr_18499_18551 = state_18450__$1;
(statearr_18499_18551[(2)] = inst_18440);

(statearr_18499_18551[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (30))){
var inst_18402 = (state_18450[(13)]);
var inst_18401 = (state_18450[(9)]);
var inst_18410 = (state_18450[(10)]);
var inst_18427 = cljs.core.empty_QMARK_(inst_18401);
var inst_18428 = (inst_18402.cljs$core$IFn$_invoke$arity$1 ? inst_18402.cljs$core$IFn$_invoke$arity$1(inst_18410) : inst_18402.call(null,inst_18410));
var inst_18429 = cljs.core.not(inst_18428);
var inst_18430 = ((inst_18427) && (inst_18429));
var state_18450__$1 = state_18450;
var statearr_18500_18552 = state_18450__$1;
(statearr_18500_18552[(2)] = inst_18430);

(statearr_18500_18552[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (10))){
var inst_18352 = (state_18450[(8)]);
var inst_18373 = (state_18450[(2)]);
var inst_18374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18373,cljs.core.cst$kw$solos);
var inst_18375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18373,cljs.core.cst$kw$mutes);
var inst_18376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18373,cljs.core.cst$kw$reads);
var inst_18377 = inst_18352;
var state_18450__$1 = (function (){var statearr_18501 = state_18450;
(statearr_18501[(7)] = inst_18377);

(statearr_18501[(16)] = inst_18376);

(statearr_18501[(17)] = inst_18375);

(statearr_18501[(18)] = inst_18374);

return statearr_18501;
})();
var statearr_18502_18553 = state_18450__$1;
(statearr_18502_18553[(2)] = null);

(statearr_18502_18553[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (18))){
var inst_18392 = (state_18450[(2)]);
var state_18450__$1 = state_18450;
var statearr_18503_18554 = state_18450__$1;
(statearr_18503_18554[(2)] = inst_18392);

(statearr_18503_18554[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (37))){
var state_18450__$1 = state_18450;
var statearr_18504_18555 = state_18450__$1;
(statearr_18504_18555[(2)] = null);

(statearr_18504_18555[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18451 === (8))){
var inst_18352 = (state_18450[(8)]);
var inst_18370 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18352);
var state_18450__$1 = state_18450;
var statearr_18505_18556 = state_18450__$1;
(statearr_18505_18556[(2)] = inst_18370);

(statearr_18505_18556[(1)] = (10));


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
});})(c__15583__auto___18510,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15400__auto__,c__15583__auto___18510,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15401__auto__ = null;
var cljs$core$async$mix_$_state_machine__15401__auto____0 = (function (){
var statearr_18506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18506[(0)] = cljs$core$async$mix_$_state_machine__15401__auto__);

(statearr_18506[(1)] = (1));

return statearr_18506;
});
var cljs$core$async$mix_$_state_machine__15401__auto____1 = (function (state_18450){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_18450);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e18507){if((e18507 instanceof Object)){
var ex__15404__auto__ = e18507;
var statearr_18508_18557 = state_18450;
(statearr_18508_18557[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18450);

return cljs.core.cst$kw$recur;
} else {
throw e18507;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__18558 = state_18450;
state_18450 = G__18558;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15401__auto__ = function(state_18450){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15401__auto____1.call(this,state_18450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15401__auto____0;
cljs$core$async$mix_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15401__auto____1;
return cljs$core$async$mix_$_state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto___18510,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15585__auto__ = (function (){var statearr_18509 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_18509[(6)] = c__15583__auto___18510);

return statearr_18509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15585__auto__);
});})(c__15583__auto___18510,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__18560 = arguments.length;
switch (G__18560) {
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
var G__18564 = arguments.length;
switch (G__18564) {
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
return (function (p1__18562_SHARP_){
if(cljs.core.truth_((p1__18562_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18562_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18562_SHARP_.call(null,topic)))){
return p1__18562_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18562_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18565 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18565 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18566){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18566 = meta18566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18567,meta18566__$1){
var self__ = this;
var _18567__$1 = this;
return (new cljs.core.async.t_cljs$core$async18565(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18566__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18565.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18567){
var self__ = this;
var _18567__$1 = this;
return self__.meta18566;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18565.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18565.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18565.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18565.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18565.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async18565.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18565.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18565.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta18566], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18565.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18565.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18565";

cljs.core.async.t_cljs$core$async18565.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18565");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18565.
 */
cljs.core.async.__GT_t_cljs$core$async18565 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18565(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18566){
return (new cljs.core.async.t_cljs$core$async18565(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18566));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18565(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15583__auto___18685 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15583__auto___18685,mults,ensure_mult,p){
return (function (){
var f__15584__auto__ = (function (){var switch__15400__auto__ = ((function (c__15583__auto___18685,mults,ensure_mult,p){
return (function (state_18639){
var state_val_18640 = (state_18639[(1)]);
if((state_val_18640 === (7))){
var inst_18635 = (state_18639[(2)]);
var state_18639__$1 = state_18639;
var statearr_18641_18686 = state_18639__$1;
(statearr_18641_18686[(2)] = inst_18635);

(statearr_18641_18686[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18640 === (20))){
var state_18639__$1 = state_18639;
var statearr_18642_18687 = state_18639__$1;
(statearr_18642_18687[(2)] = null);

(statearr_18642_18687[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18640 === (1))){
var state_18639__$1 = state_18639;
var statearr_18643_18688 = state_18639__$1;
(statearr_18643_18688[(2)] = null);

(statearr_18643_18688[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18640 === (24))){
var inst_18618 = (state_18639[(7)]);
var inst_18627 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18618);
var state_18639__$1 = state_18639;
var statearr_18644_18689 = state_18639__$1;
(statearr_18644_18689[(2)] = inst_18627);

(statearr_18644_18689[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18640 === (4))){
var inst_18570 = (state_18639[(8)]);
var inst_18570__$1 = (state_18639[(2)]);
var inst_18571 = (inst_18570__$1 == null);
var state_18639__$1 = (function (){var statearr_18645 = state_18639;
(statearr_18645[(8)] = inst_18570__$1);

return statearr_18645;
})();
if(cljs.core.truth_(inst_18571)){
var statearr_18646_18690 = state_18639__$1;
(statearr_18646_18690[(1)] = (5));

} else {
var statearr_18647_18691 = state_18639__$1;
(statearr_18647_18691[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18640 === (15))){
var inst_18612 = (state_18639[(2)]);
var state_18639__$1 = state_18639;
var statearr_18648_18692 = state_18639__$1;
(statearr_18648_18692[(2)] = inst_18612);

(statearr_18648_18692[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18640 === (21))){
var inst_18632 = (state_18639[(2)]);
var state_18639__$1 = (function (){var statearr_18649 = state_18639;
(statearr_18649[(9)] = inst_18632);

return statearr_18649;
})();
var statearr_18650_18693 = state_18639__$1;
(statearr_18650_18693[(2)] = null);

(statearr_18650_18693[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18640 === (13))){
var inst_18594 = (state_18639[(10)]);
var inst_18596 = cljs.core.chunked_seq_QMARK_(inst_18594);
var state_18639__$1 = state_18639;
if(inst_18596){
var statearr_18651_18694 = state_18639__$1;
(statearr_18651_18694[(1)] = (16));

} else {
var statearr_18652_18695 = state_18639__$1;
(statearr_18652_18695[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18640 === (22))){
var inst_18624 = (state_18639[(2)]);
var state_18639__$1 = state_18639;
if(cljs.core.truth_(inst_18624)){
var statearr_18653_18696 = state_18639__$1;
(statearr_18653_18696[(1)] = (23));

} else {
var statearr_18654_18697 = state_18639__$1;
(statearr_18654_18697[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18640 === (6))){
var inst_18618 = (state_18639[(7)]);
var inst_18570 = (state_18639[(8)]);
var inst_18620 = (state_18639[(11)]);
var inst_18618__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18570) : topic_fn.call(null,inst_18570));
var inst_18619 = cljs.core.deref(mults);
var inst_18620__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18619,inst_18618__$1);
var state_18639__$1 = (function (){var statearr_18655 = state_18639;
(statearr_18655[(7)] = inst_18618__$1);

(statearr_18655[(11)] = inst_18620__$1);

return statearr_18655;
})();
if(cljs.core.truth_(inst_18620__$1)){
var statearr_18656_18698 = state_18639__$1;
(statearr_18656_18698[(1)] = (19));

} else {
var statearr_18657_18699 = state_18639__$1;
(statearr_18657_18699[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18640 === (25))){
var inst_18629 = (state_18639[(2)]);
var state_18639__$1 = state_18639;
var statearr_18658_18700 = state_18639__$1;
(statearr_18658_18700[(2)] = inst_18629);

(statearr_18658_18700[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18640 === (17))){
var inst_18594 = (state_18639[(10)]);
var inst_18603 = cljs.core.first(inst_18594);
var inst_18604 = cljs.core.async.muxch_STAR_(inst_18603);
var inst_18605 = cljs.core.async.close_BANG_(inst_18604);
var inst_18606 = cljs.core.next(inst_18594);
var inst_18580 = inst_18606;
var inst_18581 = null;
var inst_18582 = (0);
var inst_18583 = (0);
var state_18639__$1 = (function (){var statearr_18659 = state_18639;
(statearr_18659[(12)] = inst_18580);

(statearr_18659[(13)] = inst_18581);

(statearr_18659[(14)] = inst_18582);

(statearr_18659[(15)] = inst_18583);

(statearr_18659[(16)] = inst_18605);

return statearr_18659;
})();
var statearr_18660_18701 = state_18639__$1;
(statearr_18660_18701[(2)] = null);

(statearr_18660_18701[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18640 === (3))){
var inst_18637 = (state_18639[(2)]);
var state_18639__$1 = state_18639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18639__$1,inst_18637);
} else {
if((state_val_18640 === (12))){
var inst_18614 = (state_18639[(2)]);
var state_18639__$1 = state_18639;
var statearr_18661_18702 = state_18639__$1;
(statearr_18661_18702[(2)] = inst_18614);

(statearr_18661_18702[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18640 === (2))){
var state_18639__$1 = state_18639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18639__$1,(4),ch);
} else {
if((state_val_18640 === (23))){
var state_18639__$1 = state_18639;
var statearr_18662_18703 = state_18639__$1;
(statearr_18662_18703[(2)] = null);

(statearr_18662_18703[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18640 === (19))){
var inst_18570 = (state_18639[(8)]);
var inst_18620 = (state_18639[(11)]);
var inst_18622 = cljs.core.async.muxch_STAR_(inst_18620);
var state_18639__$1 = state_18639;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18639__$1,(22),inst_18622,inst_18570);
} else {
if((state_val_18640 === (11))){
var inst_18580 = (state_18639[(12)]);
var inst_18594 = (state_18639[(10)]);
var inst_18594__$1 = cljs.core.seq(inst_18580);
var state_18639__$1 = (function (){var statearr_18663 = state_18639;
(statearr_18663[(10)] = inst_18594__$1);

return statearr_18663;
})();
if(inst_18594__$1){
var statearr_18664_18704 = state_18639__$1;
(statearr_18664_18704[(1)] = (13));

} else {
var statearr_18665_18705 = state_18639__$1;
(statearr_18665_18705[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18640 === (9))){
var inst_18616 = (state_18639[(2)]);
var state_18639__$1 = state_18639;
var statearr_18666_18706 = state_18639__$1;
(statearr_18666_18706[(2)] = inst_18616);

(statearr_18666_18706[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18640 === (5))){
var inst_18577 = cljs.core.deref(mults);
var inst_18578 = cljs.core.vals(inst_18577);
var inst_18579 = cljs.core.seq(inst_18578);
var inst_18580 = inst_18579;
var inst_18581 = null;
var inst_18582 = (0);
var inst_18583 = (0);
var state_18639__$1 = (function (){var statearr_18667 = state_18639;
(statearr_18667[(12)] = inst_18580);

(statearr_18667[(13)] = inst_18581);

(statearr_18667[(14)] = inst_18582);

(statearr_18667[(15)] = inst_18583);

return statearr_18667;
})();
var statearr_18668_18707 = state_18639__$1;
(statearr_18668_18707[(2)] = null);

(statearr_18668_18707[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18640 === (14))){
var state_18639__$1 = state_18639;
var statearr_18672_18708 = state_18639__$1;
(statearr_18672_18708[(2)] = null);

(statearr_18672_18708[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18640 === (16))){
var inst_18594 = (state_18639[(10)]);
var inst_18598 = cljs.core.chunk_first(inst_18594);
var inst_18599 = cljs.core.chunk_rest(inst_18594);
var inst_18600 = cljs.core.count(inst_18598);
var inst_18580 = inst_18599;
var inst_18581 = inst_18598;
var inst_18582 = inst_18600;
var inst_18583 = (0);
var state_18639__$1 = (function (){var statearr_18673 = state_18639;
(statearr_18673[(12)] = inst_18580);

(statearr_18673[(13)] = inst_18581);

(statearr_18673[(14)] = inst_18582);

(statearr_18673[(15)] = inst_18583);

return statearr_18673;
})();
var statearr_18674_18709 = state_18639__$1;
(statearr_18674_18709[(2)] = null);

(statearr_18674_18709[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18640 === (10))){
var inst_18580 = (state_18639[(12)]);
var inst_18581 = (state_18639[(13)]);
var inst_18582 = (state_18639[(14)]);
var inst_18583 = (state_18639[(15)]);
var inst_18588 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18581,inst_18583);
var inst_18589 = cljs.core.async.muxch_STAR_(inst_18588);
var inst_18590 = cljs.core.async.close_BANG_(inst_18589);
var inst_18591 = (inst_18583 + (1));
var tmp18669 = inst_18580;
var tmp18670 = inst_18581;
var tmp18671 = inst_18582;
var inst_18580__$1 = tmp18669;
var inst_18581__$1 = tmp18670;
var inst_18582__$1 = tmp18671;
var inst_18583__$1 = inst_18591;
var state_18639__$1 = (function (){var statearr_18675 = state_18639;
(statearr_18675[(12)] = inst_18580__$1);

(statearr_18675[(13)] = inst_18581__$1);

(statearr_18675[(14)] = inst_18582__$1);

(statearr_18675[(15)] = inst_18583__$1);

(statearr_18675[(17)] = inst_18590);

return statearr_18675;
})();
var statearr_18676_18710 = state_18639__$1;
(statearr_18676_18710[(2)] = null);

(statearr_18676_18710[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18640 === (18))){
var inst_18609 = (state_18639[(2)]);
var state_18639__$1 = state_18639;
var statearr_18677_18711 = state_18639__$1;
(statearr_18677_18711[(2)] = inst_18609);

(statearr_18677_18711[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18640 === (8))){
var inst_18582 = (state_18639[(14)]);
var inst_18583 = (state_18639[(15)]);
var inst_18585 = (inst_18583 < inst_18582);
var inst_18586 = inst_18585;
var state_18639__$1 = state_18639;
if(cljs.core.truth_(inst_18586)){
var statearr_18678_18712 = state_18639__$1;
(statearr_18678_18712[(1)] = (10));

} else {
var statearr_18679_18713 = state_18639__$1;
(statearr_18679_18713[(1)] = (11));

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
});})(c__15583__auto___18685,mults,ensure_mult,p))
;
return ((function (switch__15400__auto__,c__15583__auto___18685,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_18680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18680[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_18680[(1)] = (1));

return statearr_18680;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_18639){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_18639);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e18681){if((e18681 instanceof Object)){
var ex__15404__auto__ = e18681;
var statearr_18682_18714 = state_18639;
(statearr_18682_18714[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18639);

return cljs.core.cst$kw$recur;
} else {
throw e18681;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__18715 = state_18639;
state_18639 = G__18715;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_18639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_18639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto___18685,mults,ensure_mult,p))
})();
var state__15585__auto__ = (function (){var statearr_18683 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_18683[(6)] = c__15583__auto___18685);

return statearr_18683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15585__auto__);
});})(c__15583__auto___18685,mults,ensure_mult,p))
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
var G__18717 = arguments.length;
switch (G__18717) {
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
var G__18720 = arguments.length;
switch (G__18720) {
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
var G__18723 = arguments.length;
switch (G__18723) {
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
var c__15583__auto___18790 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15583__auto___18790,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15584__auto__ = (function (){var switch__15400__auto__ = ((function (c__15583__auto___18790,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18762){
var state_val_18763 = (state_18762[(1)]);
if((state_val_18763 === (7))){
var state_18762__$1 = state_18762;
var statearr_18764_18791 = state_18762__$1;
(statearr_18764_18791[(2)] = null);

(statearr_18764_18791[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18763 === (1))){
var state_18762__$1 = state_18762;
var statearr_18765_18792 = state_18762__$1;
(statearr_18765_18792[(2)] = null);

(statearr_18765_18792[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18763 === (4))){
var inst_18726 = (state_18762[(7)]);
var inst_18728 = (inst_18726 < cnt);
var state_18762__$1 = state_18762;
if(cljs.core.truth_(inst_18728)){
var statearr_18766_18793 = state_18762__$1;
(statearr_18766_18793[(1)] = (6));

} else {
var statearr_18767_18794 = state_18762__$1;
(statearr_18767_18794[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18763 === (15))){
var inst_18758 = (state_18762[(2)]);
var state_18762__$1 = state_18762;
var statearr_18768_18795 = state_18762__$1;
(statearr_18768_18795[(2)] = inst_18758);

(statearr_18768_18795[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18763 === (13))){
var inst_18751 = cljs.core.async.close_BANG_(out);
var state_18762__$1 = state_18762;
var statearr_18769_18796 = state_18762__$1;
(statearr_18769_18796[(2)] = inst_18751);

(statearr_18769_18796[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18763 === (6))){
var state_18762__$1 = state_18762;
var statearr_18770_18797 = state_18762__$1;
(statearr_18770_18797[(2)] = null);

(statearr_18770_18797[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18763 === (3))){
var inst_18760 = (state_18762[(2)]);
var state_18762__$1 = state_18762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18762__$1,inst_18760);
} else {
if((state_val_18763 === (12))){
var inst_18748 = (state_18762[(8)]);
var inst_18748__$1 = (state_18762[(2)]);
var inst_18749 = cljs.core.some(cljs.core.nil_QMARK_,inst_18748__$1);
var state_18762__$1 = (function (){var statearr_18771 = state_18762;
(statearr_18771[(8)] = inst_18748__$1);

return statearr_18771;
})();
if(cljs.core.truth_(inst_18749)){
var statearr_18772_18798 = state_18762__$1;
(statearr_18772_18798[(1)] = (13));

} else {
var statearr_18773_18799 = state_18762__$1;
(statearr_18773_18799[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18763 === (2))){
var inst_18725 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18726 = (0);
var state_18762__$1 = (function (){var statearr_18774 = state_18762;
(statearr_18774[(7)] = inst_18726);

(statearr_18774[(9)] = inst_18725);

return statearr_18774;
})();
var statearr_18775_18800 = state_18762__$1;
(statearr_18775_18800[(2)] = null);

(statearr_18775_18800[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18763 === (11))){
var inst_18726 = (state_18762[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_18762,(10),Object,null,(9));
var inst_18735 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18726) : chs__$1.call(null,inst_18726));
var inst_18736 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18726) : done.call(null,inst_18726));
var inst_18737 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18735,inst_18736);
var state_18762__$1 = state_18762;
var statearr_18776_18801 = state_18762__$1;
(statearr_18776_18801[(2)] = inst_18737);


cljs.core.async.impl.ioc_helpers.process_exception(state_18762__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_18763 === (9))){
var inst_18726 = (state_18762[(7)]);
var inst_18739 = (state_18762[(2)]);
var inst_18740 = (inst_18726 + (1));
var inst_18726__$1 = inst_18740;
var state_18762__$1 = (function (){var statearr_18777 = state_18762;
(statearr_18777[(10)] = inst_18739);

(statearr_18777[(7)] = inst_18726__$1);

return statearr_18777;
})();
var statearr_18778_18802 = state_18762__$1;
(statearr_18778_18802[(2)] = null);

(statearr_18778_18802[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18763 === (5))){
var inst_18746 = (state_18762[(2)]);
var state_18762__$1 = (function (){var statearr_18779 = state_18762;
(statearr_18779[(11)] = inst_18746);

return statearr_18779;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18762__$1,(12),dchan);
} else {
if((state_val_18763 === (14))){
var inst_18748 = (state_18762[(8)]);
var inst_18753 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18748);
var state_18762__$1 = state_18762;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18762__$1,(16),out,inst_18753);
} else {
if((state_val_18763 === (16))){
var inst_18755 = (state_18762[(2)]);
var state_18762__$1 = (function (){var statearr_18780 = state_18762;
(statearr_18780[(12)] = inst_18755);

return statearr_18780;
})();
var statearr_18781_18803 = state_18762__$1;
(statearr_18781_18803[(2)] = null);

(statearr_18781_18803[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18763 === (10))){
var inst_18730 = (state_18762[(2)]);
var inst_18731 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18762__$1 = (function (){var statearr_18782 = state_18762;
(statearr_18782[(13)] = inst_18730);

return statearr_18782;
})();
var statearr_18783_18804 = state_18762__$1;
(statearr_18783_18804[(2)] = inst_18731);


cljs.core.async.impl.ioc_helpers.process_exception(state_18762__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_18763 === (8))){
var inst_18744 = (state_18762[(2)]);
var state_18762__$1 = state_18762;
var statearr_18784_18805 = state_18762__$1;
(statearr_18784_18805[(2)] = inst_18744);

(statearr_18784_18805[(1)] = (5));


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
});})(c__15583__auto___18790,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15400__auto__,c__15583__auto___18790,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_18785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18785[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_18785[(1)] = (1));

return statearr_18785;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_18762){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_18762);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e18786){if((e18786 instanceof Object)){
var ex__15404__auto__ = e18786;
var statearr_18787_18806 = state_18762;
(statearr_18787_18806[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18762);

return cljs.core.cst$kw$recur;
} else {
throw e18786;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__18807 = state_18762;
state_18762 = G__18807;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_18762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_18762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto___18790,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15585__auto__ = (function (){var statearr_18788 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_18788[(6)] = c__15583__auto___18790);

return statearr_18788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15585__auto__);
});})(c__15583__auto___18790,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__18810 = arguments.length;
switch (G__18810) {
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
var c__15583__auto___18864 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15583__auto___18864,out){
return (function (){
var f__15584__auto__ = (function (){var switch__15400__auto__ = ((function (c__15583__auto___18864,out){
return (function (state_18842){
var state_val_18843 = (state_18842[(1)]);
if((state_val_18843 === (7))){
var inst_18822 = (state_18842[(7)]);
var inst_18821 = (state_18842[(8)]);
var inst_18821__$1 = (state_18842[(2)]);
var inst_18822__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18821__$1,(0),null);
var inst_18823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18821__$1,(1),null);
var inst_18824 = (inst_18822__$1 == null);
var state_18842__$1 = (function (){var statearr_18844 = state_18842;
(statearr_18844[(9)] = inst_18823);

(statearr_18844[(7)] = inst_18822__$1);

(statearr_18844[(8)] = inst_18821__$1);

return statearr_18844;
})();
if(cljs.core.truth_(inst_18824)){
var statearr_18845_18865 = state_18842__$1;
(statearr_18845_18865[(1)] = (8));

} else {
var statearr_18846_18866 = state_18842__$1;
(statearr_18846_18866[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18843 === (1))){
var inst_18811 = cljs.core.vec(chs);
var inst_18812 = inst_18811;
var state_18842__$1 = (function (){var statearr_18847 = state_18842;
(statearr_18847[(10)] = inst_18812);

return statearr_18847;
})();
var statearr_18848_18867 = state_18842__$1;
(statearr_18848_18867[(2)] = null);

(statearr_18848_18867[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18843 === (4))){
var inst_18812 = (state_18842[(10)]);
var state_18842__$1 = state_18842;
return cljs.core.async.ioc_alts_BANG_(state_18842__$1,(7),inst_18812);
} else {
if((state_val_18843 === (6))){
var inst_18838 = (state_18842[(2)]);
var state_18842__$1 = state_18842;
var statearr_18849_18868 = state_18842__$1;
(statearr_18849_18868[(2)] = inst_18838);

(statearr_18849_18868[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18843 === (3))){
var inst_18840 = (state_18842[(2)]);
var state_18842__$1 = state_18842;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18842__$1,inst_18840);
} else {
if((state_val_18843 === (2))){
var inst_18812 = (state_18842[(10)]);
var inst_18814 = cljs.core.count(inst_18812);
var inst_18815 = (inst_18814 > (0));
var state_18842__$1 = state_18842;
if(cljs.core.truth_(inst_18815)){
var statearr_18851_18869 = state_18842__$1;
(statearr_18851_18869[(1)] = (4));

} else {
var statearr_18852_18870 = state_18842__$1;
(statearr_18852_18870[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18843 === (11))){
var inst_18812 = (state_18842[(10)]);
var inst_18831 = (state_18842[(2)]);
var tmp18850 = inst_18812;
var inst_18812__$1 = tmp18850;
var state_18842__$1 = (function (){var statearr_18853 = state_18842;
(statearr_18853[(10)] = inst_18812__$1);

(statearr_18853[(11)] = inst_18831);

return statearr_18853;
})();
var statearr_18854_18871 = state_18842__$1;
(statearr_18854_18871[(2)] = null);

(statearr_18854_18871[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18843 === (9))){
var inst_18822 = (state_18842[(7)]);
var state_18842__$1 = state_18842;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18842__$1,(11),out,inst_18822);
} else {
if((state_val_18843 === (5))){
var inst_18836 = cljs.core.async.close_BANG_(out);
var state_18842__$1 = state_18842;
var statearr_18855_18872 = state_18842__$1;
(statearr_18855_18872[(2)] = inst_18836);

(statearr_18855_18872[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18843 === (10))){
var inst_18834 = (state_18842[(2)]);
var state_18842__$1 = state_18842;
var statearr_18856_18873 = state_18842__$1;
(statearr_18856_18873[(2)] = inst_18834);

(statearr_18856_18873[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18843 === (8))){
var inst_18823 = (state_18842[(9)]);
var inst_18822 = (state_18842[(7)]);
var inst_18821 = (state_18842[(8)]);
var inst_18812 = (state_18842[(10)]);
var inst_18826 = (function (){var cs = inst_18812;
var vec__18817 = inst_18821;
var v = inst_18822;
var c = inst_18823;
return ((function (cs,vec__18817,v,c,inst_18823,inst_18822,inst_18821,inst_18812,state_val_18843,c__15583__auto___18864,out){
return (function (p1__18808_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18808_SHARP_);
});
;})(cs,vec__18817,v,c,inst_18823,inst_18822,inst_18821,inst_18812,state_val_18843,c__15583__auto___18864,out))
})();
var inst_18827 = cljs.core.filterv(inst_18826,inst_18812);
var inst_18812__$1 = inst_18827;
var state_18842__$1 = (function (){var statearr_18857 = state_18842;
(statearr_18857[(10)] = inst_18812__$1);

return statearr_18857;
})();
var statearr_18858_18874 = state_18842__$1;
(statearr_18858_18874[(2)] = null);

(statearr_18858_18874[(1)] = (2));


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
});})(c__15583__auto___18864,out))
;
return ((function (switch__15400__auto__,c__15583__auto___18864,out){
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_18859 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18859[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_18859[(1)] = (1));

return statearr_18859;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_18842){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_18842);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e18860){if((e18860 instanceof Object)){
var ex__15404__auto__ = e18860;
var statearr_18861_18875 = state_18842;
(statearr_18861_18875[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18842);

return cljs.core.cst$kw$recur;
} else {
throw e18860;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__18876 = state_18842;
state_18842 = G__18876;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_18842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_18842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto___18864,out))
})();
var state__15585__auto__ = (function (){var statearr_18862 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_18862[(6)] = c__15583__auto___18864);

return statearr_18862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15585__auto__);
});})(c__15583__auto___18864,out))
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
var G__18878 = arguments.length;
switch (G__18878) {
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
var c__15583__auto___18923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15583__auto___18923,out){
return (function (){
var f__15584__auto__ = (function (){var switch__15400__auto__ = ((function (c__15583__auto___18923,out){
return (function (state_18902){
var state_val_18903 = (state_18902[(1)]);
if((state_val_18903 === (7))){
var inst_18884 = (state_18902[(7)]);
var inst_18884__$1 = (state_18902[(2)]);
var inst_18885 = (inst_18884__$1 == null);
var inst_18886 = cljs.core.not(inst_18885);
var state_18902__$1 = (function (){var statearr_18904 = state_18902;
(statearr_18904[(7)] = inst_18884__$1);

return statearr_18904;
})();
if(inst_18886){
var statearr_18905_18924 = state_18902__$1;
(statearr_18905_18924[(1)] = (8));

} else {
var statearr_18906_18925 = state_18902__$1;
(statearr_18906_18925[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18903 === (1))){
var inst_18879 = (0);
var state_18902__$1 = (function (){var statearr_18907 = state_18902;
(statearr_18907[(8)] = inst_18879);

return statearr_18907;
})();
var statearr_18908_18926 = state_18902__$1;
(statearr_18908_18926[(2)] = null);

(statearr_18908_18926[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18903 === (4))){
var state_18902__$1 = state_18902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18902__$1,(7),ch);
} else {
if((state_val_18903 === (6))){
var inst_18897 = (state_18902[(2)]);
var state_18902__$1 = state_18902;
var statearr_18909_18927 = state_18902__$1;
(statearr_18909_18927[(2)] = inst_18897);

(statearr_18909_18927[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18903 === (3))){
var inst_18899 = (state_18902[(2)]);
var inst_18900 = cljs.core.async.close_BANG_(out);
var state_18902__$1 = (function (){var statearr_18910 = state_18902;
(statearr_18910[(9)] = inst_18899);

return statearr_18910;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18902__$1,inst_18900);
} else {
if((state_val_18903 === (2))){
var inst_18879 = (state_18902[(8)]);
var inst_18881 = (inst_18879 < n);
var state_18902__$1 = state_18902;
if(cljs.core.truth_(inst_18881)){
var statearr_18911_18928 = state_18902__$1;
(statearr_18911_18928[(1)] = (4));

} else {
var statearr_18912_18929 = state_18902__$1;
(statearr_18912_18929[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18903 === (11))){
var inst_18879 = (state_18902[(8)]);
var inst_18889 = (state_18902[(2)]);
var inst_18890 = (inst_18879 + (1));
var inst_18879__$1 = inst_18890;
var state_18902__$1 = (function (){var statearr_18913 = state_18902;
(statearr_18913[(8)] = inst_18879__$1);

(statearr_18913[(10)] = inst_18889);

return statearr_18913;
})();
var statearr_18914_18930 = state_18902__$1;
(statearr_18914_18930[(2)] = null);

(statearr_18914_18930[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18903 === (9))){
var state_18902__$1 = state_18902;
var statearr_18915_18931 = state_18902__$1;
(statearr_18915_18931[(2)] = null);

(statearr_18915_18931[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18903 === (5))){
var state_18902__$1 = state_18902;
var statearr_18916_18932 = state_18902__$1;
(statearr_18916_18932[(2)] = null);

(statearr_18916_18932[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18903 === (10))){
var inst_18894 = (state_18902[(2)]);
var state_18902__$1 = state_18902;
var statearr_18917_18933 = state_18902__$1;
(statearr_18917_18933[(2)] = inst_18894);

(statearr_18917_18933[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18903 === (8))){
var inst_18884 = (state_18902[(7)]);
var state_18902__$1 = state_18902;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18902__$1,(11),out,inst_18884);
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
});})(c__15583__auto___18923,out))
;
return ((function (switch__15400__auto__,c__15583__auto___18923,out){
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_18918 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18918[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_18918[(1)] = (1));

return statearr_18918;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_18902){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_18902);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e18919){if((e18919 instanceof Object)){
var ex__15404__auto__ = e18919;
var statearr_18920_18934 = state_18902;
(statearr_18920_18934[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18902);

return cljs.core.cst$kw$recur;
} else {
throw e18919;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__18935 = state_18902;
state_18902 = G__18935;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_18902){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_18902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto___18923,out))
})();
var state__15585__auto__ = (function (){var statearr_18921 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_18921[(6)] = c__15583__auto___18923);

return statearr_18921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15585__auto__);
});})(c__15583__auto___18923,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18937 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18937 = (function (f,ch,meta18938){
this.f = f;
this.ch = ch;
this.meta18938 = meta18938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18939,meta18938__$1){
var self__ = this;
var _18939__$1 = this;
return (new cljs.core.async.t_cljs$core$async18937(self__.f,self__.ch,meta18938__$1));
});

cljs.core.async.t_cljs$core$async18937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18939){
var self__ = this;
var _18939__$1 = this;
return self__.meta18938;
});

cljs.core.async.t_cljs$core$async18937.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18937.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18937.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18937.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18937.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18940 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18940 = (function (f,ch,meta18938,_,fn1,meta18941){
this.f = f;
this.ch = ch;
this.meta18938 = meta18938;
this._ = _;
this.fn1 = fn1;
this.meta18941 = meta18941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18942,meta18941__$1){
var self__ = this;
var _18942__$1 = this;
return (new cljs.core.async.t_cljs$core$async18940(self__.f,self__.ch,self__.meta18938,self__._,self__.fn1,meta18941__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async18940.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18942){
var self__ = this;
var _18942__$1 = this;
return self__.meta18941;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18940.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18940.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18940.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18940.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18936_SHARP_){
var G__18943 = (((p1__18936_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18936_SHARP_) : self__.f.call(null,p1__18936_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18943) : f1.call(null,G__18943));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async18940.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18938,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async18937], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta18941], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18940.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18940.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18940";

cljs.core.async.t_cljs$core$async18940.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18940");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18940.
 */
cljs.core.async.__GT_t_cljs$core$async18940 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18940(f__$1,ch__$1,meta18938__$1,___$2,fn1__$1,meta18941){
return (new cljs.core.async.t_cljs$core$async18940(f__$1,ch__$1,meta18938__$1,___$2,fn1__$1,meta18941));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async18940(self__.f,self__.ch,self__.meta18938,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18944 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18944) : self__.f.call(null,G__18944));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async18937.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18937.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async18937.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18938], null);
});

cljs.core.async.t_cljs$core$async18937.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18937.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18937";

cljs.core.async.t_cljs$core$async18937.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18937");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18937.
 */
cljs.core.async.__GT_t_cljs$core$async18937 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18937(f__$1,ch__$1,meta18938){
return (new cljs.core.async.t_cljs$core$async18937(f__$1,ch__$1,meta18938));
});

}

return (new cljs.core.async.t_cljs$core$async18937(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18945 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18945 = (function (f,ch,meta18946){
this.f = f;
this.ch = ch;
this.meta18946 = meta18946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18947,meta18946__$1){
var self__ = this;
var _18947__$1 = this;
return (new cljs.core.async.t_cljs$core$async18945(self__.f,self__.ch,meta18946__$1));
});

cljs.core.async.t_cljs$core$async18945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18947){
var self__ = this;
var _18947__$1 = this;
return self__.meta18946;
});

cljs.core.async.t_cljs$core$async18945.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18945.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18945.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18945.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18945.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18945.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async18945.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18946], null);
});

cljs.core.async.t_cljs$core$async18945.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18945.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18945";

cljs.core.async.t_cljs$core$async18945.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18945");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18945.
 */
cljs.core.async.__GT_t_cljs$core$async18945 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18945(f__$1,ch__$1,meta18946){
return (new cljs.core.async.t_cljs$core$async18945(f__$1,ch__$1,meta18946));
});

}

return (new cljs.core.async.t_cljs$core$async18945(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18948 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18948 = (function (p,ch,meta18949){
this.p = p;
this.ch = ch;
this.meta18949 = meta18949;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18950,meta18949__$1){
var self__ = this;
var _18950__$1 = this;
return (new cljs.core.async.t_cljs$core$async18948(self__.p,self__.ch,meta18949__$1));
});

cljs.core.async.t_cljs$core$async18948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18950){
var self__ = this;
var _18950__$1 = this;
return self__.meta18949;
});

cljs.core.async.t_cljs$core$async18948.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18948.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18948.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18948.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18948.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18948.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18948.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async18948.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18949], null);
});

cljs.core.async.t_cljs$core$async18948.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18948.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18948";

cljs.core.async.t_cljs$core$async18948.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18948");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18948.
 */
cljs.core.async.__GT_t_cljs$core$async18948 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18948(p__$1,ch__$1,meta18949){
return (new cljs.core.async.t_cljs$core$async18948(p__$1,ch__$1,meta18949));
});

}

return (new cljs.core.async.t_cljs$core$async18948(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18952 = arguments.length;
switch (G__18952) {
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
var c__15583__auto___18992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15583__auto___18992,out){
return (function (){
var f__15584__auto__ = (function (){var switch__15400__auto__ = ((function (c__15583__auto___18992,out){
return (function (state_18973){
var state_val_18974 = (state_18973[(1)]);
if((state_val_18974 === (7))){
var inst_18969 = (state_18973[(2)]);
var state_18973__$1 = state_18973;
var statearr_18975_18993 = state_18973__$1;
(statearr_18975_18993[(2)] = inst_18969);

(statearr_18975_18993[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18974 === (1))){
var state_18973__$1 = state_18973;
var statearr_18976_18994 = state_18973__$1;
(statearr_18976_18994[(2)] = null);

(statearr_18976_18994[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18974 === (4))){
var inst_18955 = (state_18973[(7)]);
var inst_18955__$1 = (state_18973[(2)]);
var inst_18956 = (inst_18955__$1 == null);
var state_18973__$1 = (function (){var statearr_18977 = state_18973;
(statearr_18977[(7)] = inst_18955__$1);

return statearr_18977;
})();
if(cljs.core.truth_(inst_18956)){
var statearr_18978_18995 = state_18973__$1;
(statearr_18978_18995[(1)] = (5));

} else {
var statearr_18979_18996 = state_18973__$1;
(statearr_18979_18996[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18974 === (6))){
var inst_18955 = (state_18973[(7)]);
var inst_18960 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18955) : p.call(null,inst_18955));
var state_18973__$1 = state_18973;
if(cljs.core.truth_(inst_18960)){
var statearr_18980_18997 = state_18973__$1;
(statearr_18980_18997[(1)] = (8));

} else {
var statearr_18981_18998 = state_18973__$1;
(statearr_18981_18998[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18974 === (3))){
var inst_18971 = (state_18973[(2)]);
var state_18973__$1 = state_18973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18973__$1,inst_18971);
} else {
if((state_val_18974 === (2))){
var state_18973__$1 = state_18973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18973__$1,(4),ch);
} else {
if((state_val_18974 === (11))){
var inst_18963 = (state_18973[(2)]);
var state_18973__$1 = state_18973;
var statearr_18982_18999 = state_18973__$1;
(statearr_18982_18999[(2)] = inst_18963);

(statearr_18982_18999[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18974 === (9))){
var state_18973__$1 = state_18973;
var statearr_18983_19000 = state_18973__$1;
(statearr_18983_19000[(2)] = null);

(statearr_18983_19000[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18974 === (5))){
var inst_18958 = cljs.core.async.close_BANG_(out);
var state_18973__$1 = state_18973;
var statearr_18984_19001 = state_18973__$1;
(statearr_18984_19001[(2)] = inst_18958);

(statearr_18984_19001[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18974 === (10))){
var inst_18966 = (state_18973[(2)]);
var state_18973__$1 = (function (){var statearr_18985 = state_18973;
(statearr_18985[(8)] = inst_18966);

return statearr_18985;
})();
var statearr_18986_19002 = state_18973__$1;
(statearr_18986_19002[(2)] = null);

(statearr_18986_19002[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18974 === (8))){
var inst_18955 = (state_18973[(7)]);
var state_18973__$1 = state_18973;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18973__$1,(11),out,inst_18955);
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
});})(c__15583__auto___18992,out))
;
return ((function (switch__15400__auto__,c__15583__auto___18992,out){
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_18987 = [null,null,null,null,null,null,null,null,null];
(statearr_18987[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_18987[(1)] = (1));

return statearr_18987;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_18973){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_18973);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e18988){if((e18988 instanceof Object)){
var ex__15404__auto__ = e18988;
var statearr_18989_19003 = state_18973;
(statearr_18989_19003[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18973);

return cljs.core.cst$kw$recur;
} else {
throw e18988;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__19004 = state_18973;
state_18973 = G__19004;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_18973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_18973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto___18992,out))
})();
var state__15585__auto__ = (function (){var statearr_18990 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_18990[(6)] = c__15583__auto___18992);

return statearr_18990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15585__auto__);
});})(c__15583__auto___18992,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19006 = arguments.length;
switch (G__19006) {
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
var c__15583__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15583__auto__){
return (function (){
var f__15584__auto__ = (function (){var switch__15400__auto__ = ((function (c__15583__auto__){
return (function (state_19069){
var state_val_19070 = (state_19069[(1)]);
if((state_val_19070 === (7))){
var inst_19065 = (state_19069[(2)]);
var state_19069__$1 = state_19069;
var statearr_19071_19109 = state_19069__$1;
(statearr_19071_19109[(2)] = inst_19065);

(statearr_19071_19109[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19070 === (20))){
var inst_19035 = (state_19069[(7)]);
var inst_19046 = (state_19069[(2)]);
var inst_19047 = cljs.core.next(inst_19035);
var inst_19021 = inst_19047;
var inst_19022 = null;
var inst_19023 = (0);
var inst_19024 = (0);
var state_19069__$1 = (function (){var statearr_19072 = state_19069;
(statearr_19072[(8)] = inst_19021);

(statearr_19072[(9)] = inst_19046);

(statearr_19072[(10)] = inst_19022);

(statearr_19072[(11)] = inst_19023);

(statearr_19072[(12)] = inst_19024);

return statearr_19072;
})();
var statearr_19073_19110 = state_19069__$1;
(statearr_19073_19110[(2)] = null);

(statearr_19073_19110[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19070 === (1))){
var state_19069__$1 = state_19069;
var statearr_19074_19111 = state_19069__$1;
(statearr_19074_19111[(2)] = null);

(statearr_19074_19111[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19070 === (4))){
var inst_19010 = (state_19069[(13)]);
var inst_19010__$1 = (state_19069[(2)]);
var inst_19011 = (inst_19010__$1 == null);
var state_19069__$1 = (function (){var statearr_19075 = state_19069;
(statearr_19075[(13)] = inst_19010__$1);

return statearr_19075;
})();
if(cljs.core.truth_(inst_19011)){
var statearr_19076_19112 = state_19069__$1;
(statearr_19076_19112[(1)] = (5));

} else {
var statearr_19077_19113 = state_19069__$1;
(statearr_19077_19113[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19070 === (15))){
var state_19069__$1 = state_19069;
var statearr_19081_19114 = state_19069__$1;
(statearr_19081_19114[(2)] = null);

(statearr_19081_19114[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19070 === (21))){
var state_19069__$1 = state_19069;
var statearr_19082_19115 = state_19069__$1;
(statearr_19082_19115[(2)] = null);

(statearr_19082_19115[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19070 === (13))){
var inst_19021 = (state_19069[(8)]);
var inst_19022 = (state_19069[(10)]);
var inst_19023 = (state_19069[(11)]);
var inst_19024 = (state_19069[(12)]);
var inst_19031 = (state_19069[(2)]);
var inst_19032 = (inst_19024 + (1));
var tmp19078 = inst_19021;
var tmp19079 = inst_19022;
var tmp19080 = inst_19023;
var inst_19021__$1 = tmp19078;
var inst_19022__$1 = tmp19079;
var inst_19023__$1 = tmp19080;
var inst_19024__$1 = inst_19032;
var state_19069__$1 = (function (){var statearr_19083 = state_19069;
(statearr_19083[(8)] = inst_19021__$1);

(statearr_19083[(14)] = inst_19031);

(statearr_19083[(10)] = inst_19022__$1);

(statearr_19083[(11)] = inst_19023__$1);

(statearr_19083[(12)] = inst_19024__$1);

return statearr_19083;
})();
var statearr_19084_19116 = state_19069__$1;
(statearr_19084_19116[(2)] = null);

(statearr_19084_19116[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19070 === (22))){
var state_19069__$1 = state_19069;
var statearr_19085_19117 = state_19069__$1;
(statearr_19085_19117[(2)] = null);

(statearr_19085_19117[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19070 === (6))){
var inst_19010 = (state_19069[(13)]);
var inst_19019 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19010) : f.call(null,inst_19010));
var inst_19020 = cljs.core.seq(inst_19019);
var inst_19021 = inst_19020;
var inst_19022 = null;
var inst_19023 = (0);
var inst_19024 = (0);
var state_19069__$1 = (function (){var statearr_19086 = state_19069;
(statearr_19086[(8)] = inst_19021);

(statearr_19086[(10)] = inst_19022);

(statearr_19086[(11)] = inst_19023);

(statearr_19086[(12)] = inst_19024);

return statearr_19086;
})();
var statearr_19087_19118 = state_19069__$1;
(statearr_19087_19118[(2)] = null);

(statearr_19087_19118[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19070 === (17))){
var inst_19035 = (state_19069[(7)]);
var inst_19039 = cljs.core.chunk_first(inst_19035);
var inst_19040 = cljs.core.chunk_rest(inst_19035);
var inst_19041 = cljs.core.count(inst_19039);
var inst_19021 = inst_19040;
var inst_19022 = inst_19039;
var inst_19023 = inst_19041;
var inst_19024 = (0);
var state_19069__$1 = (function (){var statearr_19088 = state_19069;
(statearr_19088[(8)] = inst_19021);

(statearr_19088[(10)] = inst_19022);

(statearr_19088[(11)] = inst_19023);

(statearr_19088[(12)] = inst_19024);

return statearr_19088;
})();
var statearr_19089_19119 = state_19069__$1;
(statearr_19089_19119[(2)] = null);

(statearr_19089_19119[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19070 === (3))){
var inst_19067 = (state_19069[(2)]);
var state_19069__$1 = state_19069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19069__$1,inst_19067);
} else {
if((state_val_19070 === (12))){
var inst_19055 = (state_19069[(2)]);
var state_19069__$1 = state_19069;
var statearr_19090_19120 = state_19069__$1;
(statearr_19090_19120[(2)] = inst_19055);

(statearr_19090_19120[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19070 === (2))){
var state_19069__$1 = state_19069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19069__$1,(4),in$);
} else {
if((state_val_19070 === (23))){
var inst_19063 = (state_19069[(2)]);
var state_19069__$1 = state_19069;
var statearr_19091_19121 = state_19069__$1;
(statearr_19091_19121[(2)] = inst_19063);

(statearr_19091_19121[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19070 === (19))){
var inst_19050 = (state_19069[(2)]);
var state_19069__$1 = state_19069;
var statearr_19092_19122 = state_19069__$1;
(statearr_19092_19122[(2)] = inst_19050);

(statearr_19092_19122[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19070 === (11))){
var inst_19021 = (state_19069[(8)]);
var inst_19035 = (state_19069[(7)]);
var inst_19035__$1 = cljs.core.seq(inst_19021);
var state_19069__$1 = (function (){var statearr_19093 = state_19069;
(statearr_19093[(7)] = inst_19035__$1);

return statearr_19093;
})();
if(inst_19035__$1){
var statearr_19094_19123 = state_19069__$1;
(statearr_19094_19123[(1)] = (14));

} else {
var statearr_19095_19124 = state_19069__$1;
(statearr_19095_19124[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19070 === (9))){
var inst_19057 = (state_19069[(2)]);
var inst_19058 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19069__$1 = (function (){var statearr_19096 = state_19069;
(statearr_19096[(15)] = inst_19057);

return statearr_19096;
})();
if(cljs.core.truth_(inst_19058)){
var statearr_19097_19125 = state_19069__$1;
(statearr_19097_19125[(1)] = (21));

} else {
var statearr_19098_19126 = state_19069__$1;
(statearr_19098_19126[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19070 === (5))){
var inst_19013 = cljs.core.async.close_BANG_(out);
var state_19069__$1 = state_19069;
var statearr_19099_19127 = state_19069__$1;
(statearr_19099_19127[(2)] = inst_19013);

(statearr_19099_19127[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19070 === (14))){
var inst_19035 = (state_19069[(7)]);
var inst_19037 = cljs.core.chunked_seq_QMARK_(inst_19035);
var state_19069__$1 = state_19069;
if(inst_19037){
var statearr_19100_19128 = state_19069__$1;
(statearr_19100_19128[(1)] = (17));

} else {
var statearr_19101_19129 = state_19069__$1;
(statearr_19101_19129[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19070 === (16))){
var inst_19053 = (state_19069[(2)]);
var state_19069__$1 = state_19069;
var statearr_19102_19130 = state_19069__$1;
(statearr_19102_19130[(2)] = inst_19053);

(statearr_19102_19130[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19070 === (10))){
var inst_19022 = (state_19069[(10)]);
var inst_19024 = (state_19069[(12)]);
var inst_19029 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19022,inst_19024);
var state_19069__$1 = state_19069;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19069__$1,(13),out,inst_19029);
} else {
if((state_val_19070 === (18))){
var inst_19035 = (state_19069[(7)]);
var inst_19044 = cljs.core.first(inst_19035);
var state_19069__$1 = state_19069;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19069__$1,(20),out,inst_19044);
} else {
if((state_val_19070 === (8))){
var inst_19023 = (state_19069[(11)]);
var inst_19024 = (state_19069[(12)]);
var inst_19026 = (inst_19024 < inst_19023);
var inst_19027 = inst_19026;
var state_19069__$1 = state_19069;
if(cljs.core.truth_(inst_19027)){
var statearr_19103_19131 = state_19069__$1;
(statearr_19103_19131[(1)] = (10));

} else {
var statearr_19104_19132 = state_19069__$1;
(statearr_19104_19132[(1)] = (11));

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
});})(c__15583__auto__))
;
return ((function (switch__15400__auto__,c__15583__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15401__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15401__auto____0 = (function (){
var statearr_19105 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19105[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15401__auto__);

(statearr_19105[(1)] = (1));

return statearr_19105;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15401__auto____1 = (function (state_19069){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_19069);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e19106){if((e19106 instanceof Object)){
var ex__15404__auto__ = e19106;
var statearr_19107_19133 = state_19069;
(statearr_19107_19133[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19069);

return cljs.core.cst$kw$recur;
} else {
throw e19106;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__19134 = state_19069;
state_19069 = G__19134;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15401__auto__ = function(state_19069){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15401__auto____1.call(this,state_19069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15401__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15401__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto__))
})();
var state__15585__auto__ = (function (){var statearr_19108 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_19108[(6)] = c__15583__auto__);

return statearr_19108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15585__auto__);
});})(c__15583__auto__))
);

return c__15583__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19136 = arguments.length;
switch (G__19136) {
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
var G__19139 = arguments.length;
switch (G__19139) {
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
var G__19142 = arguments.length;
switch (G__19142) {
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
var c__15583__auto___19189 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15583__auto___19189,out){
return (function (){
var f__15584__auto__ = (function (){var switch__15400__auto__ = ((function (c__15583__auto___19189,out){
return (function (state_19166){
var state_val_19167 = (state_19166[(1)]);
if((state_val_19167 === (7))){
var inst_19161 = (state_19166[(2)]);
var state_19166__$1 = state_19166;
var statearr_19168_19190 = state_19166__$1;
(statearr_19168_19190[(2)] = inst_19161);

(statearr_19168_19190[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19167 === (1))){
var inst_19143 = null;
var state_19166__$1 = (function (){var statearr_19169 = state_19166;
(statearr_19169[(7)] = inst_19143);

return statearr_19169;
})();
var statearr_19170_19191 = state_19166__$1;
(statearr_19170_19191[(2)] = null);

(statearr_19170_19191[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19167 === (4))){
var inst_19146 = (state_19166[(8)]);
var inst_19146__$1 = (state_19166[(2)]);
var inst_19147 = (inst_19146__$1 == null);
var inst_19148 = cljs.core.not(inst_19147);
var state_19166__$1 = (function (){var statearr_19171 = state_19166;
(statearr_19171[(8)] = inst_19146__$1);

return statearr_19171;
})();
if(inst_19148){
var statearr_19172_19192 = state_19166__$1;
(statearr_19172_19192[(1)] = (5));

} else {
var statearr_19173_19193 = state_19166__$1;
(statearr_19173_19193[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19167 === (6))){
var state_19166__$1 = state_19166;
var statearr_19174_19194 = state_19166__$1;
(statearr_19174_19194[(2)] = null);

(statearr_19174_19194[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19167 === (3))){
var inst_19163 = (state_19166[(2)]);
var inst_19164 = cljs.core.async.close_BANG_(out);
var state_19166__$1 = (function (){var statearr_19175 = state_19166;
(statearr_19175[(9)] = inst_19163);

return statearr_19175;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19166__$1,inst_19164);
} else {
if((state_val_19167 === (2))){
var state_19166__$1 = state_19166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19166__$1,(4),ch);
} else {
if((state_val_19167 === (11))){
var inst_19146 = (state_19166[(8)]);
var inst_19155 = (state_19166[(2)]);
var inst_19143 = inst_19146;
var state_19166__$1 = (function (){var statearr_19176 = state_19166;
(statearr_19176[(7)] = inst_19143);

(statearr_19176[(10)] = inst_19155);

return statearr_19176;
})();
var statearr_19177_19195 = state_19166__$1;
(statearr_19177_19195[(2)] = null);

(statearr_19177_19195[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19167 === (9))){
var inst_19146 = (state_19166[(8)]);
var state_19166__$1 = state_19166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19166__$1,(11),out,inst_19146);
} else {
if((state_val_19167 === (5))){
var inst_19143 = (state_19166[(7)]);
var inst_19146 = (state_19166[(8)]);
var inst_19150 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19146,inst_19143);
var state_19166__$1 = state_19166;
if(inst_19150){
var statearr_19179_19196 = state_19166__$1;
(statearr_19179_19196[(1)] = (8));

} else {
var statearr_19180_19197 = state_19166__$1;
(statearr_19180_19197[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19167 === (10))){
var inst_19158 = (state_19166[(2)]);
var state_19166__$1 = state_19166;
var statearr_19181_19198 = state_19166__$1;
(statearr_19181_19198[(2)] = inst_19158);

(statearr_19181_19198[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19167 === (8))){
var inst_19143 = (state_19166[(7)]);
var tmp19178 = inst_19143;
var inst_19143__$1 = tmp19178;
var state_19166__$1 = (function (){var statearr_19182 = state_19166;
(statearr_19182[(7)] = inst_19143__$1);

return statearr_19182;
})();
var statearr_19183_19199 = state_19166__$1;
(statearr_19183_19199[(2)] = null);

(statearr_19183_19199[(1)] = (2));


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
});})(c__15583__auto___19189,out))
;
return ((function (switch__15400__auto__,c__15583__auto___19189,out){
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_19184 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19184[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_19184[(1)] = (1));

return statearr_19184;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_19166){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_19166);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e19185){if((e19185 instanceof Object)){
var ex__15404__auto__ = e19185;
var statearr_19186_19200 = state_19166;
(statearr_19186_19200[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19166);

return cljs.core.cst$kw$recur;
} else {
throw e19185;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__19201 = state_19166;
state_19166 = G__19201;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_19166){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_19166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto___19189,out))
})();
var state__15585__auto__ = (function (){var statearr_19187 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_19187[(6)] = c__15583__auto___19189);

return statearr_19187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15585__auto__);
});})(c__15583__auto___19189,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19203 = arguments.length;
switch (G__19203) {
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
var c__15583__auto___19269 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15583__auto___19269,out){
return (function (){
var f__15584__auto__ = (function (){var switch__15400__auto__ = ((function (c__15583__auto___19269,out){
return (function (state_19241){
var state_val_19242 = (state_19241[(1)]);
if((state_val_19242 === (7))){
var inst_19237 = (state_19241[(2)]);
var state_19241__$1 = state_19241;
var statearr_19243_19270 = state_19241__$1;
(statearr_19243_19270[(2)] = inst_19237);

(statearr_19243_19270[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19242 === (1))){
var inst_19204 = (new Array(n));
var inst_19205 = inst_19204;
var inst_19206 = (0);
var state_19241__$1 = (function (){var statearr_19244 = state_19241;
(statearr_19244[(7)] = inst_19205);

(statearr_19244[(8)] = inst_19206);

return statearr_19244;
})();
var statearr_19245_19271 = state_19241__$1;
(statearr_19245_19271[(2)] = null);

(statearr_19245_19271[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19242 === (4))){
var inst_19209 = (state_19241[(9)]);
var inst_19209__$1 = (state_19241[(2)]);
var inst_19210 = (inst_19209__$1 == null);
var inst_19211 = cljs.core.not(inst_19210);
var state_19241__$1 = (function (){var statearr_19246 = state_19241;
(statearr_19246[(9)] = inst_19209__$1);

return statearr_19246;
})();
if(inst_19211){
var statearr_19247_19272 = state_19241__$1;
(statearr_19247_19272[(1)] = (5));

} else {
var statearr_19248_19273 = state_19241__$1;
(statearr_19248_19273[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19242 === (15))){
var inst_19231 = (state_19241[(2)]);
var state_19241__$1 = state_19241;
var statearr_19249_19274 = state_19241__$1;
(statearr_19249_19274[(2)] = inst_19231);

(statearr_19249_19274[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19242 === (13))){
var state_19241__$1 = state_19241;
var statearr_19250_19275 = state_19241__$1;
(statearr_19250_19275[(2)] = null);

(statearr_19250_19275[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19242 === (6))){
var inst_19206 = (state_19241[(8)]);
var inst_19227 = (inst_19206 > (0));
var state_19241__$1 = state_19241;
if(cljs.core.truth_(inst_19227)){
var statearr_19251_19276 = state_19241__$1;
(statearr_19251_19276[(1)] = (12));

} else {
var statearr_19252_19277 = state_19241__$1;
(statearr_19252_19277[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19242 === (3))){
var inst_19239 = (state_19241[(2)]);
var state_19241__$1 = state_19241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19241__$1,inst_19239);
} else {
if((state_val_19242 === (12))){
var inst_19205 = (state_19241[(7)]);
var inst_19229 = cljs.core.vec(inst_19205);
var state_19241__$1 = state_19241;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19241__$1,(15),out,inst_19229);
} else {
if((state_val_19242 === (2))){
var state_19241__$1 = state_19241;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19241__$1,(4),ch);
} else {
if((state_val_19242 === (11))){
var inst_19221 = (state_19241[(2)]);
var inst_19222 = (new Array(n));
var inst_19205 = inst_19222;
var inst_19206 = (0);
var state_19241__$1 = (function (){var statearr_19253 = state_19241;
(statearr_19253[(10)] = inst_19221);

(statearr_19253[(7)] = inst_19205);

(statearr_19253[(8)] = inst_19206);

return statearr_19253;
})();
var statearr_19254_19278 = state_19241__$1;
(statearr_19254_19278[(2)] = null);

(statearr_19254_19278[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19242 === (9))){
var inst_19205 = (state_19241[(7)]);
var inst_19219 = cljs.core.vec(inst_19205);
var state_19241__$1 = state_19241;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19241__$1,(11),out,inst_19219);
} else {
if((state_val_19242 === (5))){
var inst_19214 = (state_19241[(11)]);
var inst_19205 = (state_19241[(7)]);
var inst_19206 = (state_19241[(8)]);
var inst_19209 = (state_19241[(9)]);
var inst_19213 = (inst_19205[inst_19206] = inst_19209);
var inst_19214__$1 = (inst_19206 + (1));
var inst_19215 = (inst_19214__$1 < n);
var state_19241__$1 = (function (){var statearr_19255 = state_19241;
(statearr_19255[(11)] = inst_19214__$1);

(statearr_19255[(12)] = inst_19213);

return statearr_19255;
})();
if(cljs.core.truth_(inst_19215)){
var statearr_19256_19279 = state_19241__$1;
(statearr_19256_19279[(1)] = (8));

} else {
var statearr_19257_19280 = state_19241__$1;
(statearr_19257_19280[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19242 === (14))){
var inst_19234 = (state_19241[(2)]);
var inst_19235 = cljs.core.async.close_BANG_(out);
var state_19241__$1 = (function (){var statearr_19259 = state_19241;
(statearr_19259[(13)] = inst_19234);

return statearr_19259;
})();
var statearr_19260_19281 = state_19241__$1;
(statearr_19260_19281[(2)] = inst_19235);

(statearr_19260_19281[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19242 === (10))){
var inst_19225 = (state_19241[(2)]);
var state_19241__$1 = state_19241;
var statearr_19261_19282 = state_19241__$1;
(statearr_19261_19282[(2)] = inst_19225);

(statearr_19261_19282[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19242 === (8))){
var inst_19214 = (state_19241[(11)]);
var inst_19205 = (state_19241[(7)]);
var tmp19258 = inst_19205;
var inst_19205__$1 = tmp19258;
var inst_19206 = inst_19214;
var state_19241__$1 = (function (){var statearr_19262 = state_19241;
(statearr_19262[(7)] = inst_19205__$1);

(statearr_19262[(8)] = inst_19206);

return statearr_19262;
})();
var statearr_19263_19283 = state_19241__$1;
(statearr_19263_19283[(2)] = null);

(statearr_19263_19283[(1)] = (2));


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
});})(c__15583__auto___19269,out))
;
return ((function (switch__15400__auto__,c__15583__auto___19269,out){
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_19264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19264[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_19264[(1)] = (1));

return statearr_19264;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_19241){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_19241);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e19265){if((e19265 instanceof Object)){
var ex__15404__auto__ = e19265;
var statearr_19266_19284 = state_19241;
(statearr_19266_19284[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19241);

return cljs.core.cst$kw$recur;
} else {
throw e19265;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__19285 = state_19241;
state_19241 = G__19285;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_19241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_19241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto___19269,out))
})();
var state__15585__auto__ = (function (){var statearr_19267 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_19267[(6)] = c__15583__auto___19269);

return statearr_19267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15585__auto__);
});})(c__15583__auto___19269,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19287 = arguments.length;
switch (G__19287) {
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
var c__15583__auto___19357 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15583__auto___19357,out){
return (function (){
var f__15584__auto__ = (function (){var switch__15400__auto__ = ((function (c__15583__auto___19357,out){
return (function (state_19329){
var state_val_19330 = (state_19329[(1)]);
if((state_val_19330 === (7))){
var inst_19325 = (state_19329[(2)]);
var state_19329__$1 = state_19329;
var statearr_19331_19358 = state_19329__$1;
(statearr_19331_19358[(2)] = inst_19325);

(statearr_19331_19358[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (1))){
var inst_19288 = [];
var inst_19289 = inst_19288;
var inst_19290 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_19329__$1 = (function (){var statearr_19332 = state_19329;
(statearr_19332[(7)] = inst_19289);

(statearr_19332[(8)] = inst_19290);

return statearr_19332;
})();
var statearr_19333_19359 = state_19329__$1;
(statearr_19333_19359[(2)] = null);

(statearr_19333_19359[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (4))){
var inst_19293 = (state_19329[(9)]);
var inst_19293__$1 = (state_19329[(2)]);
var inst_19294 = (inst_19293__$1 == null);
var inst_19295 = cljs.core.not(inst_19294);
var state_19329__$1 = (function (){var statearr_19334 = state_19329;
(statearr_19334[(9)] = inst_19293__$1);

return statearr_19334;
})();
if(inst_19295){
var statearr_19335_19360 = state_19329__$1;
(statearr_19335_19360[(1)] = (5));

} else {
var statearr_19336_19361 = state_19329__$1;
(statearr_19336_19361[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (15))){
var inst_19319 = (state_19329[(2)]);
var state_19329__$1 = state_19329;
var statearr_19337_19362 = state_19329__$1;
(statearr_19337_19362[(2)] = inst_19319);

(statearr_19337_19362[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (13))){
var state_19329__$1 = state_19329;
var statearr_19338_19363 = state_19329__$1;
(statearr_19338_19363[(2)] = null);

(statearr_19338_19363[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (6))){
var inst_19289 = (state_19329[(7)]);
var inst_19314 = inst_19289.length;
var inst_19315 = (inst_19314 > (0));
var state_19329__$1 = state_19329;
if(cljs.core.truth_(inst_19315)){
var statearr_19339_19364 = state_19329__$1;
(statearr_19339_19364[(1)] = (12));

} else {
var statearr_19340_19365 = state_19329__$1;
(statearr_19340_19365[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (3))){
var inst_19327 = (state_19329[(2)]);
var state_19329__$1 = state_19329;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19329__$1,inst_19327);
} else {
if((state_val_19330 === (12))){
var inst_19289 = (state_19329[(7)]);
var inst_19317 = cljs.core.vec(inst_19289);
var state_19329__$1 = state_19329;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19329__$1,(15),out,inst_19317);
} else {
if((state_val_19330 === (2))){
var state_19329__$1 = state_19329;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19329__$1,(4),ch);
} else {
if((state_val_19330 === (11))){
var inst_19293 = (state_19329[(9)]);
var inst_19297 = (state_19329[(10)]);
var inst_19307 = (state_19329[(2)]);
var inst_19308 = [];
var inst_19309 = inst_19308.push(inst_19293);
var inst_19289 = inst_19308;
var inst_19290 = inst_19297;
var state_19329__$1 = (function (){var statearr_19341 = state_19329;
(statearr_19341[(7)] = inst_19289);

(statearr_19341[(11)] = inst_19307);

(statearr_19341[(8)] = inst_19290);

(statearr_19341[(12)] = inst_19309);

return statearr_19341;
})();
var statearr_19342_19366 = state_19329__$1;
(statearr_19342_19366[(2)] = null);

(statearr_19342_19366[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (9))){
var inst_19289 = (state_19329[(7)]);
var inst_19305 = cljs.core.vec(inst_19289);
var state_19329__$1 = state_19329;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19329__$1,(11),out,inst_19305);
} else {
if((state_val_19330 === (5))){
var inst_19290 = (state_19329[(8)]);
var inst_19293 = (state_19329[(9)]);
var inst_19297 = (state_19329[(10)]);
var inst_19297__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19293) : f.call(null,inst_19293));
var inst_19298 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19297__$1,inst_19290);
var inst_19299 = cljs.core.keyword_identical_QMARK_(inst_19290,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_19300 = ((inst_19298) || (inst_19299));
var state_19329__$1 = (function (){var statearr_19343 = state_19329;
(statearr_19343[(10)] = inst_19297__$1);

return statearr_19343;
})();
if(cljs.core.truth_(inst_19300)){
var statearr_19344_19367 = state_19329__$1;
(statearr_19344_19367[(1)] = (8));

} else {
var statearr_19345_19368 = state_19329__$1;
(statearr_19345_19368[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (14))){
var inst_19322 = (state_19329[(2)]);
var inst_19323 = cljs.core.async.close_BANG_(out);
var state_19329__$1 = (function (){var statearr_19347 = state_19329;
(statearr_19347[(13)] = inst_19322);

return statearr_19347;
})();
var statearr_19348_19369 = state_19329__$1;
(statearr_19348_19369[(2)] = inst_19323);

(statearr_19348_19369[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (10))){
var inst_19312 = (state_19329[(2)]);
var state_19329__$1 = state_19329;
var statearr_19349_19370 = state_19329__$1;
(statearr_19349_19370[(2)] = inst_19312);

(statearr_19349_19370[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (8))){
var inst_19289 = (state_19329[(7)]);
var inst_19293 = (state_19329[(9)]);
var inst_19297 = (state_19329[(10)]);
var inst_19302 = inst_19289.push(inst_19293);
var tmp19346 = inst_19289;
var inst_19289__$1 = tmp19346;
var inst_19290 = inst_19297;
var state_19329__$1 = (function (){var statearr_19350 = state_19329;
(statearr_19350[(7)] = inst_19289__$1);

(statearr_19350[(14)] = inst_19302);

(statearr_19350[(8)] = inst_19290);

return statearr_19350;
})();
var statearr_19351_19371 = state_19329__$1;
(statearr_19351_19371[(2)] = null);

(statearr_19351_19371[(1)] = (2));


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
});})(c__15583__auto___19357,out))
;
return ((function (switch__15400__auto__,c__15583__auto___19357,out){
return (function() {
var cljs$core$async$state_machine__15401__auto__ = null;
var cljs$core$async$state_machine__15401__auto____0 = (function (){
var statearr_19352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19352[(0)] = cljs$core$async$state_machine__15401__auto__);

(statearr_19352[(1)] = (1));

return statearr_19352;
});
var cljs$core$async$state_machine__15401__auto____1 = (function (state_19329){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_19329);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e19353){if((e19353 instanceof Object)){
var ex__15404__auto__ = e19353;
var statearr_19354_19372 = state_19329;
(statearr_19354_19372[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19329);

return cljs.core.cst$kw$recur;
} else {
throw e19353;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__19373 = state_19329;
state_19329 = G__19373;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
cljs$core$async$state_machine__15401__auto__ = function(state_19329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15401__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15401__auto____1.call(this,state_19329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15401__auto____0;
cljs$core$async$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15401__auto____1;
return cljs$core$async$state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto___19357,out))
})();
var state__15585__auto__ = (function (){var statearr_19355 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_19355[(6)] = c__15583__auto___19357);

return statearr_19355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15585__auto__);
});})(c__15583__auto___19357,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

