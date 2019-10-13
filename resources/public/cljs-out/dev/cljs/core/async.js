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
var G__17757 = arguments.length;
switch (G__17757) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17758 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17758 = (function (f,blockable,meta17759){
this.f = f;
this.blockable = blockable;
this.meta17759 = meta17759;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17760,meta17759__$1){
var self__ = this;
var _17760__$1 = this;
return (new cljs.core.async.t_cljs$core$async17758(self__.f,self__.blockable,meta17759__$1));
});

cljs.core.async.t_cljs$core$async17758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17760){
var self__ = this;
var _17760__$1 = this;
return self__.meta17759;
});

cljs.core.async.t_cljs$core$async17758.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17758.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17758.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17758.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17758.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta17759], null);
});

cljs.core.async.t_cljs$core$async17758.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17758.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17758";

cljs.core.async.t_cljs$core$async17758.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17758");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17758.
 */
cljs.core.async.__GT_t_cljs$core$async17758 = (function cljs$core$async$__GT_t_cljs$core$async17758(f__$1,blockable__$1,meta17759){
return (new cljs.core.async.t_cljs$core$async17758(f__$1,blockable__$1,meta17759));
});

}

return (new cljs.core.async.t_cljs$core$async17758(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17764 = arguments.length;
switch (G__17764) {
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
var G__17767 = arguments.length;
switch (G__17767) {
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
var G__17770 = arguments.length;
switch (G__17770) {
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
var val_17772 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17772) : fn1.call(null,val_17772));
} else {
cljs.core.async.impl.dispatch.run(((function (val_17772,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17772) : fn1.call(null,val_17772));
});})(val_17772,ret))
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
var G__17774 = arguments.length;
switch (G__17774) {
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
var n__4408__auto___17776 = n;
var x_17777 = (0);
while(true){
if((x_17777 < n__4408__auto___17776)){
(a[x_17777] = x_17777);

var G__17778 = (x_17777 + (1));
x_17777 = G__17778;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17779 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17779 = (function (flag,meta17780){
this.flag = flag;
this.meta17780 = meta17780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17781,meta17780__$1){
var self__ = this;
var _17781__$1 = this;
return (new cljs.core.async.t_cljs$core$async17779(self__.flag,meta17780__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17779.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17781){
var self__ = this;
var _17781__$1 = this;
return self__.meta17780;
});})(flag))
;

cljs.core.async.t_cljs$core$async17779.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17779.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17779.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17779.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17779.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta17780], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17779.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17779";

cljs.core.async.t_cljs$core$async17779.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17779");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17779.
 */
cljs.core.async.__GT_t_cljs$core$async17779 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17779(flag__$1,meta17780){
return (new cljs.core.async.t_cljs$core$async17779(flag__$1,meta17780));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17779(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17782 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17782 = (function (flag,cb,meta17783){
this.flag = flag;
this.cb = cb;
this.meta17783 = meta17783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17784,meta17783__$1){
var self__ = this;
var _17784__$1 = this;
return (new cljs.core.async.t_cljs$core$async17782(self__.flag,self__.cb,meta17783__$1));
});

cljs.core.async.t_cljs$core$async17782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17784){
var self__ = this;
var _17784__$1 = this;
return self__.meta17783;
});

cljs.core.async.t_cljs$core$async17782.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17782.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async17782.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17782.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta17783], null);
});

cljs.core.async.t_cljs$core$async17782.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17782";

cljs.core.async.t_cljs$core$async17782.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17782");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17782.
 */
cljs.core.async.__GT_t_cljs$core$async17782 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17782(flag__$1,cb__$1,meta17783){
return (new cljs.core.async.t_cljs$core$async17782(flag__$1,cb__$1,meta17783));
});

}

return (new cljs.core.async.t_cljs$core$async17782(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17785_SHARP_){
var G__17787 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17785_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17787) : fret.call(null,G__17787));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17786_SHARP_){
var G__17788 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17786_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17788) : fret.call(null,G__17788));
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
var G__17789 = (i + (1));
i = G__17789;
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
var len__4531__auto___17795 = arguments.length;
var i__4532__auto___17796 = (0);
while(true){
if((i__4532__auto___17796 < len__4531__auto___17795)){
args__4534__auto__.push((arguments[i__4532__auto___17796]));

var G__17797 = (i__4532__auto___17796 + (1));
i__4532__auto___17796 = G__17797;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17792){
var map__17793 = p__17792;
var map__17793__$1 = ((((!((map__17793 == null)))?(((((map__17793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17793):map__17793);
var opts = map__17793__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17790){
var G__17791 = cljs.core.first(seq17790);
var seq17790__$1 = cljs.core.next(seq17790);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17791,seq17790__$1);
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
var G__17799 = arguments.length;
switch (G__17799) {
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
var c__15830__auto___17845 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15830__auto___17845){
return (function (){
var f__15831__auto__ = (function (){var switch__15647__auto__ = ((function (c__15830__auto___17845){
return (function (state_17823){
var state_val_17824 = (state_17823[(1)]);
if((state_val_17824 === (7))){
var inst_17819 = (state_17823[(2)]);
var state_17823__$1 = state_17823;
var statearr_17825_17846 = state_17823__$1;
(statearr_17825_17846[(2)] = inst_17819);

(statearr_17825_17846[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17824 === (1))){
var state_17823__$1 = state_17823;
var statearr_17826_17847 = state_17823__$1;
(statearr_17826_17847[(2)] = null);

(statearr_17826_17847[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17824 === (4))){
var inst_17802 = (state_17823[(7)]);
var inst_17802__$1 = (state_17823[(2)]);
var inst_17803 = (inst_17802__$1 == null);
var state_17823__$1 = (function (){var statearr_17827 = state_17823;
(statearr_17827[(7)] = inst_17802__$1);

return statearr_17827;
})();
if(cljs.core.truth_(inst_17803)){
var statearr_17828_17848 = state_17823__$1;
(statearr_17828_17848[(1)] = (5));

} else {
var statearr_17829_17849 = state_17823__$1;
(statearr_17829_17849[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17824 === (13))){
var state_17823__$1 = state_17823;
var statearr_17830_17850 = state_17823__$1;
(statearr_17830_17850[(2)] = null);

(statearr_17830_17850[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17824 === (6))){
var inst_17802 = (state_17823[(7)]);
var state_17823__$1 = state_17823;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17823__$1,(11),to,inst_17802);
} else {
if((state_val_17824 === (3))){
var inst_17821 = (state_17823[(2)]);
var state_17823__$1 = state_17823;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17823__$1,inst_17821);
} else {
if((state_val_17824 === (12))){
var state_17823__$1 = state_17823;
var statearr_17831_17851 = state_17823__$1;
(statearr_17831_17851[(2)] = null);

(statearr_17831_17851[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17824 === (2))){
var state_17823__$1 = state_17823;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17823__$1,(4),from);
} else {
if((state_val_17824 === (11))){
var inst_17812 = (state_17823[(2)]);
var state_17823__$1 = state_17823;
if(cljs.core.truth_(inst_17812)){
var statearr_17832_17852 = state_17823__$1;
(statearr_17832_17852[(1)] = (12));

} else {
var statearr_17833_17853 = state_17823__$1;
(statearr_17833_17853[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17824 === (9))){
var state_17823__$1 = state_17823;
var statearr_17834_17854 = state_17823__$1;
(statearr_17834_17854[(2)] = null);

(statearr_17834_17854[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17824 === (5))){
var state_17823__$1 = state_17823;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17835_17855 = state_17823__$1;
(statearr_17835_17855[(1)] = (8));

} else {
var statearr_17836_17856 = state_17823__$1;
(statearr_17836_17856[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17824 === (14))){
var inst_17817 = (state_17823[(2)]);
var state_17823__$1 = state_17823;
var statearr_17837_17857 = state_17823__$1;
(statearr_17837_17857[(2)] = inst_17817);

(statearr_17837_17857[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17824 === (10))){
var inst_17809 = (state_17823[(2)]);
var state_17823__$1 = state_17823;
var statearr_17838_17858 = state_17823__$1;
(statearr_17838_17858[(2)] = inst_17809);

(statearr_17838_17858[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17824 === (8))){
var inst_17806 = cljs.core.async.close_BANG_(to);
var state_17823__$1 = state_17823;
var statearr_17839_17859 = state_17823__$1;
(statearr_17839_17859[(2)] = inst_17806);

(statearr_17839_17859[(1)] = (10));


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
});})(c__15830__auto___17845))
;
return ((function (switch__15647__auto__,c__15830__auto___17845){
return (function() {
var cljs$core$async$state_machine__15648__auto__ = null;
var cljs$core$async$state_machine__15648__auto____0 = (function (){
var statearr_17840 = [null,null,null,null,null,null,null,null];
(statearr_17840[(0)] = cljs$core$async$state_machine__15648__auto__);

(statearr_17840[(1)] = (1));

return statearr_17840;
});
var cljs$core$async$state_machine__15648__auto____1 = (function (state_17823){
while(true){
var ret_value__15649__auto__ = (function (){try{while(true){
var result__15650__auto__ = switch__15647__auto__(state_17823);
if(cljs.core.keyword_identical_QMARK_(result__15650__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15650__auto__;
}
break;
}
}catch (e17841){if((e17841 instanceof Object)){
var ex__15651__auto__ = e17841;
var statearr_17842_17860 = state_17823;
(statearr_17842_17860[(5)] = ex__15651__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17823);

return cljs.core.cst$kw$recur;
} else {
throw e17841;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15649__auto__,cljs.core.cst$kw$recur)){
var G__17861 = state_17823;
state_17823 = G__17861;
continue;
} else {
return ret_value__15649__auto__;
}
break;
}
});
cljs$core$async$state_machine__15648__auto__ = function(state_17823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15648__auto____1.call(this,state_17823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15648__auto____0;
cljs$core$async$state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15648__auto____1;
return cljs$core$async$state_machine__15648__auto__;
})()
;})(switch__15647__auto__,c__15830__auto___17845))
})();
var state__15832__auto__ = (function (){var statearr_17843 = (f__15831__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15831__auto__.cljs$core$IFn$_invoke$arity$0() : f__15831__auto__.call(null));
(statearr_17843[(6)] = c__15830__auto___17845);

return statearr_17843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15832__auto__);
});})(c__15830__auto___17845))
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
return (function (p__17862){
var vec__17863 = p__17862;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17863,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17863,(1),null);
var job = vec__17863;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15830__auto___18034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15830__auto___18034,res,vec__17863,v,p,job,jobs,results){
return (function (){
var f__15831__auto__ = (function (){var switch__15647__auto__ = ((function (c__15830__auto___18034,res,vec__17863,v,p,job,jobs,results){
return (function (state_17870){
var state_val_17871 = (state_17870[(1)]);
if((state_val_17871 === (1))){
var state_17870__$1 = state_17870;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17870__$1,(2),res,v);
} else {
if((state_val_17871 === (2))){
var inst_17867 = (state_17870[(2)]);
var inst_17868 = cljs.core.async.close_BANG_(res);
var state_17870__$1 = (function (){var statearr_17872 = state_17870;
(statearr_17872[(7)] = inst_17867);

return statearr_17872;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17870__$1,inst_17868);
} else {
return null;
}
}
});})(c__15830__auto___18034,res,vec__17863,v,p,job,jobs,results))
;
return ((function (switch__15647__auto__,c__15830__auto___18034,res,vec__17863,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____0 = (function (){
var statearr_17873 = [null,null,null,null,null,null,null,null];
(statearr_17873[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__);

(statearr_17873[(1)] = (1));

return statearr_17873;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____1 = (function (state_17870){
while(true){
var ret_value__15649__auto__ = (function (){try{while(true){
var result__15650__auto__ = switch__15647__auto__(state_17870);
if(cljs.core.keyword_identical_QMARK_(result__15650__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15650__auto__;
}
break;
}
}catch (e17874){if((e17874 instanceof Object)){
var ex__15651__auto__ = e17874;
var statearr_17875_18035 = state_17870;
(statearr_17875_18035[(5)] = ex__15651__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17870);

return cljs.core.cst$kw$recur;
} else {
throw e17874;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15649__auto__,cljs.core.cst$kw$recur)){
var G__18036 = state_17870;
state_17870 = G__18036;
continue;
} else {
return ret_value__15649__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__ = function(state_17870){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____1.call(this,state_17870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__;
})()
;})(switch__15647__auto__,c__15830__auto___18034,res,vec__17863,v,p,job,jobs,results))
})();
var state__15832__auto__ = (function (){var statearr_17876 = (f__15831__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15831__auto__.cljs$core$IFn$_invoke$arity$0() : f__15831__auto__.call(null));
(statearr_17876[(6)] = c__15830__auto___18034);

return statearr_17876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15832__auto__);
});})(c__15830__auto___18034,res,vec__17863,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17877){
var vec__17878 = p__17877;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17878,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17878,(1),null);
var job = vec__17878;
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
var n__4408__auto___18037 = n;
var __18038 = (0);
while(true){
if((__18038 < n__4408__auto___18037)){
var G__17881_18039 = type;
var G__17881_18040__$1 = (((G__17881_18039 instanceof cljs.core.Keyword))?G__17881_18039.fqn:null);
switch (G__17881_18040__$1) {
case "compute":
var c__15830__auto___18042 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18038,c__15830__auto___18042,G__17881_18039,G__17881_18040__$1,n__4408__auto___18037,jobs,results,process,async){
return (function (){
var f__15831__auto__ = (function (){var switch__15647__auto__ = ((function (__18038,c__15830__auto___18042,G__17881_18039,G__17881_18040__$1,n__4408__auto___18037,jobs,results,process,async){
return (function (state_17894){
var state_val_17895 = (state_17894[(1)]);
if((state_val_17895 === (1))){
var state_17894__$1 = state_17894;
var statearr_17896_18043 = state_17894__$1;
(statearr_17896_18043[(2)] = null);

(statearr_17896_18043[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17895 === (2))){
var state_17894__$1 = state_17894;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17894__$1,(4),jobs);
} else {
if((state_val_17895 === (3))){
var inst_17892 = (state_17894[(2)]);
var state_17894__$1 = state_17894;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17894__$1,inst_17892);
} else {
if((state_val_17895 === (4))){
var inst_17884 = (state_17894[(2)]);
var inst_17885 = process(inst_17884);
var state_17894__$1 = state_17894;
if(cljs.core.truth_(inst_17885)){
var statearr_17897_18044 = state_17894__$1;
(statearr_17897_18044[(1)] = (5));

} else {
var statearr_17898_18045 = state_17894__$1;
(statearr_17898_18045[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17895 === (5))){
var state_17894__$1 = state_17894;
var statearr_17899_18046 = state_17894__$1;
(statearr_17899_18046[(2)] = null);

(statearr_17899_18046[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17895 === (6))){
var state_17894__$1 = state_17894;
var statearr_17900_18047 = state_17894__$1;
(statearr_17900_18047[(2)] = null);

(statearr_17900_18047[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17895 === (7))){
var inst_17890 = (state_17894[(2)]);
var state_17894__$1 = state_17894;
var statearr_17901_18048 = state_17894__$1;
(statearr_17901_18048[(2)] = inst_17890);

(statearr_17901_18048[(1)] = (3));


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
});})(__18038,c__15830__auto___18042,G__17881_18039,G__17881_18040__$1,n__4408__auto___18037,jobs,results,process,async))
;
return ((function (__18038,switch__15647__auto__,c__15830__auto___18042,G__17881_18039,G__17881_18040__$1,n__4408__auto___18037,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____0 = (function (){
var statearr_17902 = [null,null,null,null,null,null,null];
(statearr_17902[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__);

(statearr_17902[(1)] = (1));

return statearr_17902;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____1 = (function (state_17894){
while(true){
var ret_value__15649__auto__ = (function (){try{while(true){
var result__15650__auto__ = switch__15647__auto__(state_17894);
if(cljs.core.keyword_identical_QMARK_(result__15650__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15650__auto__;
}
break;
}
}catch (e17903){if((e17903 instanceof Object)){
var ex__15651__auto__ = e17903;
var statearr_17904_18049 = state_17894;
(statearr_17904_18049[(5)] = ex__15651__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17894);

return cljs.core.cst$kw$recur;
} else {
throw e17903;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15649__auto__,cljs.core.cst$kw$recur)){
var G__18050 = state_17894;
state_17894 = G__18050;
continue;
} else {
return ret_value__15649__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__ = function(state_17894){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____1.call(this,state_17894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__;
})()
;})(__18038,switch__15647__auto__,c__15830__auto___18042,G__17881_18039,G__17881_18040__$1,n__4408__auto___18037,jobs,results,process,async))
})();
var state__15832__auto__ = (function (){var statearr_17905 = (f__15831__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15831__auto__.cljs$core$IFn$_invoke$arity$0() : f__15831__auto__.call(null));
(statearr_17905[(6)] = c__15830__auto___18042);

return statearr_17905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15832__auto__);
});})(__18038,c__15830__auto___18042,G__17881_18039,G__17881_18040__$1,n__4408__auto___18037,jobs,results,process,async))
);


break;
case "async":
var c__15830__auto___18051 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18038,c__15830__auto___18051,G__17881_18039,G__17881_18040__$1,n__4408__auto___18037,jobs,results,process,async){
return (function (){
var f__15831__auto__ = (function (){var switch__15647__auto__ = ((function (__18038,c__15830__auto___18051,G__17881_18039,G__17881_18040__$1,n__4408__auto___18037,jobs,results,process,async){
return (function (state_17918){
var state_val_17919 = (state_17918[(1)]);
if((state_val_17919 === (1))){
var state_17918__$1 = state_17918;
var statearr_17920_18052 = state_17918__$1;
(statearr_17920_18052[(2)] = null);

(statearr_17920_18052[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17919 === (2))){
var state_17918__$1 = state_17918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17918__$1,(4),jobs);
} else {
if((state_val_17919 === (3))){
var inst_17916 = (state_17918[(2)]);
var state_17918__$1 = state_17918;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17918__$1,inst_17916);
} else {
if((state_val_17919 === (4))){
var inst_17908 = (state_17918[(2)]);
var inst_17909 = async(inst_17908);
var state_17918__$1 = state_17918;
if(cljs.core.truth_(inst_17909)){
var statearr_17921_18053 = state_17918__$1;
(statearr_17921_18053[(1)] = (5));

} else {
var statearr_17922_18054 = state_17918__$1;
(statearr_17922_18054[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17919 === (5))){
var state_17918__$1 = state_17918;
var statearr_17923_18055 = state_17918__$1;
(statearr_17923_18055[(2)] = null);

(statearr_17923_18055[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17919 === (6))){
var state_17918__$1 = state_17918;
var statearr_17924_18056 = state_17918__$1;
(statearr_17924_18056[(2)] = null);

(statearr_17924_18056[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17919 === (7))){
var inst_17914 = (state_17918[(2)]);
var state_17918__$1 = state_17918;
var statearr_17925_18057 = state_17918__$1;
(statearr_17925_18057[(2)] = inst_17914);

(statearr_17925_18057[(1)] = (3));


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
});})(__18038,c__15830__auto___18051,G__17881_18039,G__17881_18040__$1,n__4408__auto___18037,jobs,results,process,async))
;
return ((function (__18038,switch__15647__auto__,c__15830__auto___18051,G__17881_18039,G__17881_18040__$1,n__4408__auto___18037,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____0 = (function (){
var statearr_17926 = [null,null,null,null,null,null,null];
(statearr_17926[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__);

(statearr_17926[(1)] = (1));

return statearr_17926;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____1 = (function (state_17918){
while(true){
var ret_value__15649__auto__ = (function (){try{while(true){
var result__15650__auto__ = switch__15647__auto__(state_17918);
if(cljs.core.keyword_identical_QMARK_(result__15650__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15650__auto__;
}
break;
}
}catch (e17927){if((e17927 instanceof Object)){
var ex__15651__auto__ = e17927;
var statearr_17928_18058 = state_17918;
(statearr_17928_18058[(5)] = ex__15651__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17918);

return cljs.core.cst$kw$recur;
} else {
throw e17927;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15649__auto__,cljs.core.cst$kw$recur)){
var G__18059 = state_17918;
state_17918 = G__18059;
continue;
} else {
return ret_value__15649__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__ = function(state_17918){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____1.call(this,state_17918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__;
})()
;})(__18038,switch__15647__auto__,c__15830__auto___18051,G__17881_18039,G__17881_18040__$1,n__4408__auto___18037,jobs,results,process,async))
})();
var state__15832__auto__ = (function (){var statearr_17929 = (f__15831__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15831__auto__.cljs$core$IFn$_invoke$arity$0() : f__15831__auto__.call(null));
(statearr_17929[(6)] = c__15830__auto___18051);

return statearr_17929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15832__auto__);
});})(__18038,c__15830__auto___18051,G__17881_18039,G__17881_18040__$1,n__4408__auto___18037,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17881_18040__$1)].join('')));

}

var G__18060 = (__18038 + (1));
__18038 = G__18060;
continue;
} else {
}
break;
}

var c__15830__auto___18061 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15830__auto___18061,jobs,results,process,async){
return (function (){
var f__15831__auto__ = (function (){var switch__15647__auto__ = ((function (c__15830__auto___18061,jobs,results,process,async){
return (function (state_17951){
var state_val_17952 = (state_17951[(1)]);
if((state_val_17952 === (1))){
var state_17951__$1 = state_17951;
var statearr_17953_18062 = state_17951__$1;
(statearr_17953_18062[(2)] = null);

(statearr_17953_18062[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17952 === (2))){
var state_17951__$1 = state_17951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17951__$1,(4),from);
} else {
if((state_val_17952 === (3))){
var inst_17949 = (state_17951[(2)]);
var state_17951__$1 = state_17951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17951__$1,inst_17949);
} else {
if((state_val_17952 === (4))){
var inst_17932 = (state_17951[(7)]);
var inst_17932__$1 = (state_17951[(2)]);
var inst_17933 = (inst_17932__$1 == null);
var state_17951__$1 = (function (){var statearr_17954 = state_17951;
(statearr_17954[(7)] = inst_17932__$1);

return statearr_17954;
})();
if(cljs.core.truth_(inst_17933)){
var statearr_17955_18063 = state_17951__$1;
(statearr_17955_18063[(1)] = (5));

} else {
var statearr_17956_18064 = state_17951__$1;
(statearr_17956_18064[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17952 === (5))){
var inst_17935 = cljs.core.async.close_BANG_(jobs);
var state_17951__$1 = state_17951;
var statearr_17957_18065 = state_17951__$1;
(statearr_17957_18065[(2)] = inst_17935);

(statearr_17957_18065[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17952 === (6))){
var inst_17932 = (state_17951[(7)]);
var inst_17937 = (state_17951[(8)]);
var inst_17937__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17938 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17939 = [inst_17932,inst_17937__$1];
var inst_17940 = (new cljs.core.PersistentVector(null,2,(5),inst_17938,inst_17939,null));
var state_17951__$1 = (function (){var statearr_17958 = state_17951;
(statearr_17958[(8)] = inst_17937__$1);

return statearr_17958;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17951__$1,(8),jobs,inst_17940);
} else {
if((state_val_17952 === (7))){
var inst_17947 = (state_17951[(2)]);
var state_17951__$1 = state_17951;
var statearr_17959_18066 = state_17951__$1;
(statearr_17959_18066[(2)] = inst_17947);

(statearr_17959_18066[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17952 === (8))){
var inst_17937 = (state_17951[(8)]);
var inst_17942 = (state_17951[(2)]);
var state_17951__$1 = (function (){var statearr_17960 = state_17951;
(statearr_17960[(9)] = inst_17942);

return statearr_17960;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17951__$1,(9),results,inst_17937);
} else {
if((state_val_17952 === (9))){
var inst_17944 = (state_17951[(2)]);
var state_17951__$1 = (function (){var statearr_17961 = state_17951;
(statearr_17961[(10)] = inst_17944);

return statearr_17961;
})();
var statearr_17962_18067 = state_17951__$1;
(statearr_17962_18067[(2)] = null);

(statearr_17962_18067[(1)] = (2));


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
});})(c__15830__auto___18061,jobs,results,process,async))
;
return ((function (switch__15647__auto__,c__15830__auto___18061,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____0 = (function (){
var statearr_17963 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17963[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__);

(statearr_17963[(1)] = (1));

return statearr_17963;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____1 = (function (state_17951){
while(true){
var ret_value__15649__auto__ = (function (){try{while(true){
var result__15650__auto__ = switch__15647__auto__(state_17951);
if(cljs.core.keyword_identical_QMARK_(result__15650__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15650__auto__;
}
break;
}
}catch (e17964){if((e17964 instanceof Object)){
var ex__15651__auto__ = e17964;
var statearr_17965_18068 = state_17951;
(statearr_17965_18068[(5)] = ex__15651__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17951);

return cljs.core.cst$kw$recur;
} else {
throw e17964;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15649__auto__,cljs.core.cst$kw$recur)){
var G__18069 = state_17951;
state_17951 = G__18069;
continue;
} else {
return ret_value__15649__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__ = function(state_17951){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____1.call(this,state_17951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__;
})()
;})(switch__15647__auto__,c__15830__auto___18061,jobs,results,process,async))
})();
var state__15832__auto__ = (function (){var statearr_17966 = (f__15831__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15831__auto__.cljs$core$IFn$_invoke$arity$0() : f__15831__auto__.call(null));
(statearr_17966[(6)] = c__15830__auto___18061);

return statearr_17966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15832__auto__);
});})(c__15830__auto___18061,jobs,results,process,async))
);


var c__15830__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15830__auto__,jobs,results,process,async){
return (function (){
var f__15831__auto__ = (function (){var switch__15647__auto__ = ((function (c__15830__auto__,jobs,results,process,async){
return (function (state_18004){
var state_val_18005 = (state_18004[(1)]);
if((state_val_18005 === (7))){
var inst_18000 = (state_18004[(2)]);
var state_18004__$1 = state_18004;
var statearr_18006_18070 = state_18004__$1;
(statearr_18006_18070[(2)] = inst_18000);

(statearr_18006_18070[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18005 === (20))){
var state_18004__$1 = state_18004;
var statearr_18007_18071 = state_18004__$1;
(statearr_18007_18071[(2)] = null);

(statearr_18007_18071[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18005 === (1))){
var state_18004__$1 = state_18004;
var statearr_18008_18072 = state_18004__$1;
(statearr_18008_18072[(2)] = null);

(statearr_18008_18072[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18005 === (4))){
var inst_17969 = (state_18004[(7)]);
var inst_17969__$1 = (state_18004[(2)]);
var inst_17970 = (inst_17969__$1 == null);
var state_18004__$1 = (function (){var statearr_18009 = state_18004;
(statearr_18009[(7)] = inst_17969__$1);

return statearr_18009;
})();
if(cljs.core.truth_(inst_17970)){
var statearr_18010_18073 = state_18004__$1;
(statearr_18010_18073[(1)] = (5));

} else {
var statearr_18011_18074 = state_18004__$1;
(statearr_18011_18074[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18005 === (15))){
var inst_17982 = (state_18004[(8)]);
var state_18004__$1 = state_18004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18004__$1,(18),to,inst_17982);
} else {
if((state_val_18005 === (21))){
var inst_17995 = (state_18004[(2)]);
var state_18004__$1 = state_18004;
var statearr_18012_18075 = state_18004__$1;
(statearr_18012_18075[(2)] = inst_17995);

(statearr_18012_18075[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18005 === (13))){
var inst_17997 = (state_18004[(2)]);
var state_18004__$1 = (function (){var statearr_18013 = state_18004;
(statearr_18013[(9)] = inst_17997);

return statearr_18013;
})();
var statearr_18014_18076 = state_18004__$1;
(statearr_18014_18076[(2)] = null);

(statearr_18014_18076[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18005 === (6))){
var inst_17969 = (state_18004[(7)]);
var state_18004__$1 = state_18004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18004__$1,(11),inst_17969);
} else {
if((state_val_18005 === (17))){
var inst_17990 = (state_18004[(2)]);
var state_18004__$1 = state_18004;
if(cljs.core.truth_(inst_17990)){
var statearr_18015_18077 = state_18004__$1;
(statearr_18015_18077[(1)] = (19));

} else {
var statearr_18016_18078 = state_18004__$1;
(statearr_18016_18078[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18005 === (3))){
var inst_18002 = (state_18004[(2)]);
var state_18004__$1 = state_18004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18004__$1,inst_18002);
} else {
if((state_val_18005 === (12))){
var inst_17979 = (state_18004[(10)]);
var state_18004__$1 = state_18004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18004__$1,(14),inst_17979);
} else {
if((state_val_18005 === (2))){
var state_18004__$1 = state_18004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18004__$1,(4),results);
} else {
if((state_val_18005 === (19))){
var state_18004__$1 = state_18004;
var statearr_18017_18079 = state_18004__$1;
(statearr_18017_18079[(2)] = null);

(statearr_18017_18079[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18005 === (11))){
var inst_17979 = (state_18004[(2)]);
var state_18004__$1 = (function (){var statearr_18018 = state_18004;
(statearr_18018[(10)] = inst_17979);

return statearr_18018;
})();
var statearr_18019_18080 = state_18004__$1;
(statearr_18019_18080[(2)] = null);

(statearr_18019_18080[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18005 === (9))){
var state_18004__$1 = state_18004;
var statearr_18020_18081 = state_18004__$1;
(statearr_18020_18081[(2)] = null);

(statearr_18020_18081[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18005 === (5))){
var state_18004__$1 = state_18004;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18021_18082 = state_18004__$1;
(statearr_18021_18082[(1)] = (8));

} else {
var statearr_18022_18083 = state_18004__$1;
(statearr_18022_18083[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18005 === (14))){
var inst_17984 = (state_18004[(11)]);
var inst_17982 = (state_18004[(8)]);
var inst_17982__$1 = (state_18004[(2)]);
var inst_17983 = (inst_17982__$1 == null);
var inst_17984__$1 = cljs.core.not(inst_17983);
var state_18004__$1 = (function (){var statearr_18023 = state_18004;
(statearr_18023[(11)] = inst_17984__$1);

(statearr_18023[(8)] = inst_17982__$1);

return statearr_18023;
})();
if(inst_17984__$1){
var statearr_18024_18084 = state_18004__$1;
(statearr_18024_18084[(1)] = (15));

} else {
var statearr_18025_18085 = state_18004__$1;
(statearr_18025_18085[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18005 === (16))){
var inst_17984 = (state_18004[(11)]);
var state_18004__$1 = state_18004;
var statearr_18026_18086 = state_18004__$1;
(statearr_18026_18086[(2)] = inst_17984);

(statearr_18026_18086[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18005 === (10))){
var inst_17976 = (state_18004[(2)]);
var state_18004__$1 = state_18004;
var statearr_18027_18087 = state_18004__$1;
(statearr_18027_18087[(2)] = inst_17976);

(statearr_18027_18087[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18005 === (18))){
var inst_17987 = (state_18004[(2)]);
var state_18004__$1 = state_18004;
var statearr_18028_18088 = state_18004__$1;
(statearr_18028_18088[(2)] = inst_17987);

(statearr_18028_18088[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18005 === (8))){
var inst_17973 = cljs.core.async.close_BANG_(to);
var state_18004__$1 = state_18004;
var statearr_18029_18089 = state_18004__$1;
(statearr_18029_18089[(2)] = inst_17973);

(statearr_18029_18089[(1)] = (10));


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
});})(c__15830__auto__,jobs,results,process,async))
;
return ((function (switch__15647__auto__,c__15830__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____0 = (function (){
var statearr_18030 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18030[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__);

(statearr_18030[(1)] = (1));

return statearr_18030;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____1 = (function (state_18004){
while(true){
var ret_value__15649__auto__ = (function (){try{while(true){
var result__15650__auto__ = switch__15647__auto__(state_18004);
if(cljs.core.keyword_identical_QMARK_(result__15650__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15650__auto__;
}
break;
}
}catch (e18031){if((e18031 instanceof Object)){
var ex__15651__auto__ = e18031;
var statearr_18032_18090 = state_18004;
(statearr_18032_18090[(5)] = ex__15651__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18004);

return cljs.core.cst$kw$recur;
} else {
throw e18031;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15649__auto__,cljs.core.cst$kw$recur)){
var G__18091 = state_18004;
state_18004 = G__18091;
continue;
} else {
return ret_value__15649__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__ = function(state_18004){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____1.call(this,state_18004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15648__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15648__auto__;
})()
;})(switch__15647__auto__,c__15830__auto__,jobs,results,process,async))
})();
var state__15832__auto__ = (function (){var statearr_18033 = (f__15831__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15831__auto__.cljs$core$IFn$_invoke$arity$0() : f__15831__auto__.call(null));
(statearr_18033[(6)] = c__15830__auto__);

return statearr_18033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15832__auto__);
});})(c__15830__auto__,jobs,results,process,async))
);

return c__15830__auto__;
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
var G__18093 = arguments.length;
switch (G__18093) {
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
var G__18096 = arguments.length;
switch (G__18096) {
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
var G__18099 = arguments.length;
switch (G__18099) {
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
var c__15830__auto___18148 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15830__auto___18148,tc,fc){
return (function (){
var f__15831__auto__ = (function (){var switch__15647__auto__ = ((function (c__15830__auto___18148,tc,fc){
return (function (state_18125){
var state_val_18126 = (state_18125[(1)]);
if((state_val_18126 === (7))){
var inst_18121 = (state_18125[(2)]);
var state_18125__$1 = state_18125;
var statearr_18127_18149 = state_18125__$1;
(statearr_18127_18149[(2)] = inst_18121);

(statearr_18127_18149[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18126 === (1))){
var state_18125__$1 = state_18125;
var statearr_18128_18150 = state_18125__$1;
(statearr_18128_18150[(2)] = null);

(statearr_18128_18150[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18126 === (4))){
var inst_18102 = (state_18125[(7)]);
var inst_18102__$1 = (state_18125[(2)]);
var inst_18103 = (inst_18102__$1 == null);
var state_18125__$1 = (function (){var statearr_18129 = state_18125;
(statearr_18129[(7)] = inst_18102__$1);

return statearr_18129;
})();
if(cljs.core.truth_(inst_18103)){
var statearr_18130_18151 = state_18125__$1;
(statearr_18130_18151[(1)] = (5));

} else {
var statearr_18131_18152 = state_18125__$1;
(statearr_18131_18152[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18126 === (13))){
var state_18125__$1 = state_18125;
var statearr_18132_18153 = state_18125__$1;
(statearr_18132_18153[(2)] = null);

(statearr_18132_18153[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18126 === (6))){
var inst_18102 = (state_18125[(7)]);
var inst_18108 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18102) : p.call(null,inst_18102));
var state_18125__$1 = state_18125;
if(cljs.core.truth_(inst_18108)){
var statearr_18133_18154 = state_18125__$1;
(statearr_18133_18154[(1)] = (9));

} else {
var statearr_18134_18155 = state_18125__$1;
(statearr_18134_18155[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18126 === (3))){
var inst_18123 = (state_18125[(2)]);
var state_18125__$1 = state_18125;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18125__$1,inst_18123);
} else {
if((state_val_18126 === (12))){
var state_18125__$1 = state_18125;
var statearr_18135_18156 = state_18125__$1;
(statearr_18135_18156[(2)] = null);

(statearr_18135_18156[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18126 === (2))){
var state_18125__$1 = state_18125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18125__$1,(4),ch);
} else {
if((state_val_18126 === (11))){
var inst_18102 = (state_18125[(7)]);
var inst_18112 = (state_18125[(2)]);
var state_18125__$1 = state_18125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18125__$1,(8),inst_18112,inst_18102);
} else {
if((state_val_18126 === (9))){
var state_18125__$1 = state_18125;
var statearr_18136_18157 = state_18125__$1;
(statearr_18136_18157[(2)] = tc);

(statearr_18136_18157[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18126 === (5))){
var inst_18105 = cljs.core.async.close_BANG_(tc);
var inst_18106 = cljs.core.async.close_BANG_(fc);
var state_18125__$1 = (function (){var statearr_18137 = state_18125;
(statearr_18137[(8)] = inst_18105);

return statearr_18137;
})();
var statearr_18138_18158 = state_18125__$1;
(statearr_18138_18158[(2)] = inst_18106);

(statearr_18138_18158[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18126 === (14))){
var inst_18119 = (state_18125[(2)]);
var state_18125__$1 = state_18125;
var statearr_18139_18159 = state_18125__$1;
(statearr_18139_18159[(2)] = inst_18119);

(statearr_18139_18159[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18126 === (10))){
var state_18125__$1 = state_18125;
var statearr_18140_18160 = state_18125__$1;
(statearr_18140_18160[(2)] = fc);

(statearr_18140_18160[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18126 === (8))){
var inst_18114 = (state_18125[(2)]);
var state_18125__$1 = state_18125;
if(cljs.core.truth_(inst_18114)){
var statearr_18141_18161 = state_18125__$1;
(statearr_18141_18161[(1)] = (12));

} else {
var statearr_18142_18162 = state_18125__$1;
(statearr_18142_18162[(1)] = (13));

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
});})(c__15830__auto___18148,tc,fc))
;
return ((function (switch__15647__auto__,c__15830__auto___18148,tc,fc){
return (function() {
var cljs$core$async$state_machine__15648__auto__ = null;
var cljs$core$async$state_machine__15648__auto____0 = (function (){
var statearr_18143 = [null,null,null,null,null,null,null,null,null];
(statearr_18143[(0)] = cljs$core$async$state_machine__15648__auto__);

(statearr_18143[(1)] = (1));

return statearr_18143;
});
var cljs$core$async$state_machine__15648__auto____1 = (function (state_18125){
while(true){
var ret_value__15649__auto__ = (function (){try{while(true){
var result__15650__auto__ = switch__15647__auto__(state_18125);
if(cljs.core.keyword_identical_QMARK_(result__15650__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15650__auto__;
}
break;
}
}catch (e18144){if((e18144 instanceof Object)){
var ex__15651__auto__ = e18144;
var statearr_18145_18163 = state_18125;
(statearr_18145_18163[(5)] = ex__15651__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18125);

return cljs.core.cst$kw$recur;
} else {
throw e18144;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15649__auto__,cljs.core.cst$kw$recur)){
var G__18164 = state_18125;
state_18125 = G__18164;
continue;
} else {
return ret_value__15649__auto__;
}
break;
}
});
cljs$core$async$state_machine__15648__auto__ = function(state_18125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15648__auto____1.call(this,state_18125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15648__auto____0;
cljs$core$async$state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15648__auto____1;
return cljs$core$async$state_machine__15648__auto__;
})()
;})(switch__15647__auto__,c__15830__auto___18148,tc,fc))
})();
var state__15832__auto__ = (function (){var statearr_18146 = (f__15831__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15831__auto__.cljs$core$IFn$_invoke$arity$0() : f__15831__auto__.call(null));
(statearr_18146[(6)] = c__15830__auto___18148);

return statearr_18146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15832__auto__);
});})(c__15830__auto___18148,tc,fc))
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
var c__15830__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15830__auto__){
return (function (){
var f__15831__auto__ = (function (){var switch__15647__auto__ = ((function (c__15830__auto__){
return (function (state_18185){
var state_val_18186 = (state_18185[(1)]);
if((state_val_18186 === (7))){
var inst_18181 = (state_18185[(2)]);
var state_18185__$1 = state_18185;
var statearr_18187_18205 = state_18185__$1;
(statearr_18187_18205[(2)] = inst_18181);

(statearr_18187_18205[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (1))){
var inst_18165 = init;
var state_18185__$1 = (function (){var statearr_18188 = state_18185;
(statearr_18188[(7)] = inst_18165);

return statearr_18188;
})();
var statearr_18189_18206 = state_18185__$1;
(statearr_18189_18206[(2)] = null);

(statearr_18189_18206[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (4))){
var inst_18168 = (state_18185[(8)]);
var inst_18168__$1 = (state_18185[(2)]);
var inst_18169 = (inst_18168__$1 == null);
var state_18185__$1 = (function (){var statearr_18190 = state_18185;
(statearr_18190[(8)] = inst_18168__$1);

return statearr_18190;
})();
if(cljs.core.truth_(inst_18169)){
var statearr_18191_18207 = state_18185__$1;
(statearr_18191_18207[(1)] = (5));

} else {
var statearr_18192_18208 = state_18185__$1;
(statearr_18192_18208[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (6))){
var inst_18165 = (state_18185[(7)]);
var inst_18168 = (state_18185[(8)]);
var inst_18172 = (state_18185[(9)]);
var inst_18172__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18165,inst_18168) : f.call(null,inst_18165,inst_18168));
var inst_18173 = cljs.core.reduced_QMARK_(inst_18172__$1);
var state_18185__$1 = (function (){var statearr_18193 = state_18185;
(statearr_18193[(9)] = inst_18172__$1);

return statearr_18193;
})();
if(inst_18173){
var statearr_18194_18209 = state_18185__$1;
(statearr_18194_18209[(1)] = (8));

} else {
var statearr_18195_18210 = state_18185__$1;
(statearr_18195_18210[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (3))){
var inst_18183 = (state_18185[(2)]);
var state_18185__$1 = state_18185;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18185__$1,inst_18183);
} else {
if((state_val_18186 === (2))){
var state_18185__$1 = state_18185;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18185__$1,(4),ch);
} else {
if((state_val_18186 === (9))){
var inst_18172 = (state_18185[(9)]);
var inst_18165 = inst_18172;
var state_18185__$1 = (function (){var statearr_18196 = state_18185;
(statearr_18196[(7)] = inst_18165);

return statearr_18196;
})();
var statearr_18197_18211 = state_18185__$1;
(statearr_18197_18211[(2)] = null);

(statearr_18197_18211[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (5))){
var inst_18165 = (state_18185[(7)]);
var state_18185__$1 = state_18185;
var statearr_18198_18212 = state_18185__$1;
(statearr_18198_18212[(2)] = inst_18165);

(statearr_18198_18212[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (10))){
var inst_18179 = (state_18185[(2)]);
var state_18185__$1 = state_18185;
var statearr_18199_18213 = state_18185__$1;
(statearr_18199_18213[(2)] = inst_18179);

(statearr_18199_18213[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18186 === (8))){
var inst_18172 = (state_18185[(9)]);
var inst_18175 = cljs.core.deref(inst_18172);
var state_18185__$1 = state_18185;
var statearr_18200_18214 = state_18185__$1;
(statearr_18200_18214[(2)] = inst_18175);

(statearr_18200_18214[(1)] = (10));


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
});})(c__15830__auto__))
;
return ((function (switch__15647__auto__,c__15830__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15648__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15648__auto____0 = (function (){
var statearr_18201 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18201[(0)] = cljs$core$async$reduce_$_state_machine__15648__auto__);

(statearr_18201[(1)] = (1));

return statearr_18201;
});
var cljs$core$async$reduce_$_state_machine__15648__auto____1 = (function (state_18185){
while(true){
var ret_value__15649__auto__ = (function (){try{while(true){
var result__15650__auto__ = switch__15647__auto__(state_18185);
if(cljs.core.keyword_identical_QMARK_(result__15650__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15650__auto__;
}
break;
}
}catch (e18202){if((e18202 instanceof Object)){
var ex__15651__auto__ = e18202;
var statearr_18203_18215 = state_18185;
(statearr_18203_18215[(5)] = ex__15651__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18185);

return cljs.core.cst$kw$recur;
} else {
throw e18202;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15649__auto__,cljs.core.cst$kw$recur)){
var G__18216 = state_18185;
state_18185 = G__18216;
continue;
} else {
return ret_value__15649__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15648__auto__ = function(state_18185){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15648__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15648__auto____1.call(this,state_18185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15648__auto____0;
cljs$core$async$reduce_$_state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15648__auto____1;
return cljs$core$async$reduce_$_state_machine__15648__auto__;
})()
;})(switch__15647__auto__,c__15830__auto__))
})();
var state__15832__auto__ = (function (){var statearr_18204 = (f__15831__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15831__auto__.cljs$core$IFn$_invoke$arity$0() : f__15831__auto__.call(null));
(statearr_18204[(6)] = c__15830__auto__);

return statearr_18204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15832__auto__);
});})(c__15830__auto__))
);

return c__15830__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15830__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15830__auto__,f__$1){
return (function (){
var f__15831__auto__ = (function (){var switch__15647__auto__ = ((function (c__15830__auto__,f__$1){
return (function (state_18222){
var state_val_18223 = (state_18222[(1)]);
if((state_val_18223 === (1))){
var inst_18217 = cljs.core.async.reduce(f__$1,init,ch);
var state_18222__$1 = state_18222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18222__$1,(2),inst_18217);
} else {
if((state_val_18223 === (2))){
var inst_18219 = (state_18222[(2)]);
var inst_18220 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18219) : f__$1.call(null,inst_18219));
var state_18222__$1 = state_18222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18222__$1,inst_18220);
} else {
return null;
}
}
});})(c__15830__auto__,f__$1))
;
return ((function (switch__15647__auto__,c__15830__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15648__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15648__auto____0 = (function (){
var statearr_18224 = [null,null,null,null,null,null,null];
(statearr_18224[(0)] = cljs$core$async$transduce_$_state_machine__15648__auto__);

(statearr_18224[(1)] = (1));

return statearr_18224;
});
var cljs$core$async$transduce_$_state_machine__15648__auto____1 = (function (state_18222){
while(true){
var ret_value__15649__auto__ = (function (){try{while(true){
var result__15650__auto__ = switch__15647__auto__(state_18222);
if(cljs.core.keyword_identical_QMARK_(result__15650__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15650__auto__;
}
break;
}
}catch (e18225){if((e18225 instanceof Object)){
var ex__15651__auto__ = e18225;
var statearr_18226_18228 = state_18222;
(statearr_18226_18228[(5)] = ex__15651__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18222);

return cljs.core.cst$kw$recur;
} else {
throw e18225;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15649__auto__,cljs.core.cst$kw$recur)){
var G__18229 = state_18222;
state_18222 = G__18229;
continue;
} else {
return ret_value__15649__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15648__auto__ = function(state_18222){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15648__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15648__auto____1.call(this,state_18222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15648__auto____0;
cljs$core$async$transduce_$_state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15648__auto____1;
return cljs$core$async$transduce_$_state_machine__15648__auto__;
})()
;})(switch__15647__auto__,c__15830__auto__,f__$1))
})();
var state__15832__auto__ = (function (){var statearr_18227 = (f__15831__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15831__auto__.cljs$core$IFn$_invoke$arity$0() : f__15831__auto__.call(null));
(statearr_18227[(6)] = c__15830__auto__);

return statearr_18227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15832__auto__);
});})(c__15830__auto__,f__$1))
);

return c__15830__auto__;
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
var G__18231 = arguments.length;
switch (G__18231) {
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
var c__15830__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15830__auto__){
return (function (){
var f__15831__auto__ = (function (){var switch__15647__auto__ = ((function (c__15830__auto__){
return (function (state_18256){
var state_val_18257 = (state_18256[(1)]);
if((state_val_18257 === (7))){
var inst_18238 = (state_18256[(2)]);
var state_18256__$1 = state_18256;
var statearr_18258_18279 = state_18256__$1;
(statearr_18258_18279[(2)] = inst_18238);

(statearr_18258_18279[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18257 === (1))){
var inst_18232 = cljs.core.seq(coll);
var inst_18233 = inst_18232;
var state_18256__$1 = (function (){var statearr_18259 = state_18256;
(statearr_18259[(7)] = inst_18233);

return statearr_18259;
})();
var statearr_18260_18280 = state_18256__$1;
(statearr_18260_18280[(2)] = null);

(statearr_18260_18280[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18257 === (4))){
var inst_18233 = (state_18256[(7)]);
var inst_18236 = cljs.core.first(inst_18233);
var state_18256__$1 = state_18256;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18256__$1,(7),ch,inst_18236);
} else {
if((state_val_18257 === (13))){
var inst_18250 = (state_18256[(2)]);
var state_18256__$1 = state_18256;
var statearr_18261_18281 = state_18256__$1;
(statearr_18261_18281[(2)] = inst_18250);

(statearr_18261_18281[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18257 === (6))){
var inst_18241 = (state_18256[(2)]);
var state_18256__$1 = state_18256;
if(cljs.core.truth_(inst_18241)){
var statearr_18262_18282 = state_18256__$1;
(statearr_18262_18282[(1)] = (8));

} else {
var statearr_18263_18283 = state_18256__$1;
(statearr_18263_18283[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18257 === (3))){
var inst_18254 = (state_18256[(2)]);
var state_18256__$1 = state_18256;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18256__$1,inst_18254);
} else {
if((state_val_18257 === (12))){
var state_18256__$1 = state_18256;
var statearr_18264_18284 = state_18256__$1;
(statearr_18264_18284[(2)] = null);

(statearr_18264_18284[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18257 === (2))){
var inst_18233 = (state_18256[(7)]);
var state_18256__$1 = state_18256;
if(cljs.core.truth_(inst_18233)){
var statearr_18265_18285 = state_18256__$1;
(statearr_18265_18285[(1)] = (4));

} else {
var statearr_18266_18286 = state_18256__$1;
(statearr_18266_18286[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18257 === (11))){
var inst_18247 = cljs.core.async.close_BANG_(ch);
var state_18256__$1 = state_18256;
var statearr_18267_18287 = state_18256__$1;
(statearr_18267_18287[(2)] = inst_18247);

(statearr_18267_18287[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18257 === (9))){
var state_18256__$1 = state_18256;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18268_18288 = state_18256__$1;
(statearr_18268_18288[(1)] = (11));

} else {
var statearr_18269_18289 = state_18256__$1;
(statearr_18269_18289[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18257 === (5))){
var inst_18233 = (state_18256[(7)]);
var state_18256__$1 = state_18256;
var statearr_18270_18290 = state_18256__$1;
(statearr_18270_18290[(2)] = inst_18233);

(statearr_18270_18290[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18257 === (10))){
var inst_18252 = (state_18256[(2)]);
var state_18256__$1 = state_18256;
var statearr_18271_18291 = state_18256__$1;
(statearr_18271_18291[(2)] = inst_18252);

(statearr_18271_18291[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18257 === (8))){
var inst_18233 = (state_18256[(7)]);
var inst_18243 = cljs.core.next(inst_18233);
var inst_18233__$1 = inst_18243;
var state_18256__$1 = (function (){var statearr_18272 = state_18256;
(statearr_18272[(7)] = inst_18233__$1);

return statearr_18272;
})();
var statearr_18273_18292 = state_18256__$1;
(statearr_18273_18292[(2)] = null);

(statearr_18273_18292[(1)] = (2));


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
});})(c__15830__auto__))
;
return ((function (switch__15647__auto__,c__15830__auto__){
return (function() {
var cljs$core$async$state_machine__15648__auto__ = null;
var cljs$core$async$state_machine__15648__auto____0 = (function (){
var statearr_18274 = [null,null,null,null,null,null,null,null];
(statearr_18274[(0)] = cljs$core$async$state_machine__15648__auto__);

(statearr_18274[(1)] = (1));

return statearr_18274;
});
var cljs$core$async$state_machine__15648__auto____1 = (function (state_18256){
while(true){
var ret_value__15649__auto__ = (function (){try{while(true){
var result__15650__auto__ = switch__15647__auto__(state_18256);
if(cljs.core.keyword_identical_QMARK_(result__15650__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15650__auto__;
}
break;
}
}catch (e18275){if((e18275 instanceof Object)){
var ex__15651__auto__ = e18275;
var statearr_18276_18293 = state_18256;
(statearr_18276_18293[(5)] = ex__15651__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18256);

return cljs.core.cst$kw$recur;
} else {
throw e18275;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15649__auto__,cljs.core.cst$kw$recur)){
var G__18294 = state_18256;
state_18256 = G__18294;
continue;
} else {
return ret_value__15649__auto__;
}
break;
}
});
cljs$core$async$state_machine__15648__auto__ = function(state_18256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15648__auto____1.call(this,state_18256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15648__auto____0;
cljs$core$async$state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15648__auto____1;
return cljs$core$async$state_machine__15648__auto__;
})()
;})(switch__15647__auto__,c__15830__auto__))
})();
var state__15832__auto__ = (function (){var statearr_18277 = (f__15831__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15831__auto__.cljs$core$IFn$_invoke$arity$0() : f__15831__auto__.call(null));
(statearr_18277[(6)] = c__15830__auto__);

return statearr_18277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15832__auto__);
});})(c__15830__auto__))
);

return c__15830__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18295 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18295 = (function (ch,cs,meta18296){
this.ch = ch;
this.cs = cs;
this.meta18296 = meta18296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18297,meta18296__$1){
var self__ = this;
var _18297__$1 = this;
return (new cljs.core.async.t_cljs$core$async18295(self__.ch,self__.cs,meta18296__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18295.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18297){
var self__ = this;
var _18297__$1 = this;
return self__.meta18296;
});})(cs))
;

cljs.core.async.t_cljs$core$async18295.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18295.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18295.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18295.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18295.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18295.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18295.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta18296], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18295.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18295.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18295";

cljs.core.async.t_cljs$core$async18295.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18295");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18295.
 */
cljs.core.async.__GT_t_cljs$core$async18295 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18295(ch__$1,cs__$1,meta18296){
return (new cljs.core.async.t_cljs$core$async18295(ch__$1,cs__$1,meta18296));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18295(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15830__auto___18517 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15830__auto___18517,cs,m,dchan,dctr,done){
return (function (){
var f__15831__auto__ = (function (){var switch__15647__auto__ = ((function (c__15830__auto___18517,cs,m,dchan,dctr,done){
return (function (state_18432){
var state_val_18433 = (state_18432[(1)]);
if((state_val_18433 === (7))){
var inst_18428 = (state_18432[(2)]);
var state_18432__$1 = state_18432;
var statearr_18434_18518 = state_18432__$1;
(statearr_18434_18518[(2)] = inst_18428);

(statearr_18434_18518[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (20))){
var inst_18331 = (state_18432[(7)]);
var inst_18343 = cljs.core.first(inst_18331);
var inst_18344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18343,(0),null);
var inst_18345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18343,(1),null);
var state_18432__$1 = (function (){var statearr_18435 = state_18432;
(statearr_18435[(8)] = inst_18344);

return statearr_18435;
})();
if(cljs.core.truth_(inst_18345)){
var statearr_18436_18519 = state_18432__$1;
(statearr_18436_18519[(1)] = (22));

} else {
var statearr_18437_18520 = state_18432__$1;
(statearr_18437_18520[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (27))){
var inst_18380 = (state_18432[(9)]);
var inst_18373 = (state_18432[(10)]);
var inst_18375 = (state_18432[(11)]);
var inst_18300 = (state_18432[(12)]);
var inst_18380__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18373,inst_18375);
var inst_18381 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18380__$1,inst_18300,done);
var state_18432__$1 = (function (){var statearr_18438 = state_18432;
(statearr_18438[(9)] = inst_18380__$1);

return statearr_18438;
})();
if(cljs.core.truth_(inst_18381)){
var statearr_18439_18521 = state_18432__$1;
(statearr_18439_18521[(1)] = (30));

} else {
var statearr_18440_18522 = state_18432__$1;
(statearr_18440_18522[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (1))){
var state_18432__$1 = state_18432;
var statearr_18441_18523 = state_18432__$1;
(statearr_18441_18523[(2)] = null);

(statearr_18441_18523[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (24))){
var inst_18331 = (state_18432[(7)]);
var inst_18350 = (state_18432[(2)]);
var inst_18351 = cljs.core.next(inst_18331);
var inst_18309 = inst_18351;
var inst_18310 = null;
var inst_18311 = (0);
var inst_18312 = (0);
var state_18432__$1 = (function (){var statearr_18442 = state_18432;
(statearr_18442[(13)] = inst_18309);

(statearr_18442[(14)] = inst_18310);

(statearr_18442[(15)] = inst_18312);

(statearr_18442[(16)] = inst_18350);

(statearr_18442[(17)] = inst_18311);

return statearr_18442;
})();
var statearr_18443_18524 = state_18432__$1;
(statearr_18443_18524[(2)] = null);

(statearr_18443_18524[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (39))){
var state_18432__$1 = state_18432;
var statearr_18447_18525 = state_18432__$1;
(statearr_18447_18525[(2)] = null);

(statearr_18447_18525[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (4))){
var inst_18300 = (state_18432[(12)]);
var inst_18300__$1 = (state_18432[(2)]);
var inst_18301 = (inst_18300__$1 == null);
var state_18432__$1 = (function (){var statearr_18448 = state_18432;
(statearr_18448[(12)] = inst_18300__$1);

return statearr_18448;
})();
if(cljs.core.truth_(inst_18301)){
var statearr_18449_18526 = state_18432__$1;
(statearr_18449_18526[(1)] = (5));

} else {
var statearr_18450_18527 = state_18432__$1;
(statearr_18450_18527[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (15))){
var inst_18309 = (state_18432[(13)]);
var inst_18310 = (state_18432[(14)]);
var inst_18312 = (state_18432[(15)]);
var inst_18311 = (state_18432[(17)]);
var inst_18327 = (state_18432[(2)]);
var inst_18328 = (inst_18312 + (1));
var tmp18444 = inst_18309;
var tmp18445 = inst_18310;
var tmp18446 = inst_18311;
var inst_18309__$1 = tmp18444;
var inst_18310__$1 = tmp18445;
var inst_18311__$1 = tmp18446;
var inst_18312__$1 = inst_18328;
var state_18432__$1 = (function (){var statearr_18451 = state_18432;
(statearr_18451[(18)] = inst_18327);

(statearr_18451[(13)] = inst_18309__$1);

(statearr_18451[(14)] = inst_18310__$1);

(statearr_18451[(15)] = inst_18312__$1);

(statearr_18451[(17)] = inst_18311__$1);

return statearr_18451;
})();
var statearr_18452_18528 = state_18432__$1;
(statearr_18452_18528[(2)] = null);

(statearr_18452_18528[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (21))){
var inst_18354 = (state_18432[(2)]);
var state_18432__$1 = state_18432;
var statearr_18456_18529 = state_18432__$1;
(statearr_18456_18529[(2)] = inst_18354);

(statearr_18456_18529[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (31))){
var inst_18380 = (state_18432[(9)]);
var inst_18384 = done(null);
var inst_18385 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18380);
var state_18432__$1 = (function (){var statearr_18457 = state_18432;
(statearr_18457[(19)] = inst_18384);

return statearr_18457;
})();
var statearr_18458_18530 = state_18432__$1;
(statearr_18458_18530[(2)] = inst_18385);

(statearr_18458_18530[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (32))){
var inst_18373 = (state_18432[(10)]);
var inst_18375 = (state_18432[(11)]);
var inst_18372 = (state_18432[(20)]);
var inst_18374 = (state_18432[(21)]);
var inst_18387 = (state_18432[(2)]);
var inst_18388 = (inst_18375 + (1));
var tmp18453 = inst_18373;
var tmp18454 = inst_18372;
var tmp18455 = inst_18374;
var inst_18372__$1 = tmp18454;
var inst_18373__$1 = tmp18453;
var inst_18374__$1 = tmp18455;
var inst_18375__$1 = inst_18388;
var state_18432__$1 = (function (){var statearr_18459 = state_18432;
(statearr_18459[(22)] = inst_18387);

(statearr_18459[(10)] = inst_18373__$1);

(statearr_18459[(11)] = inst_18375__$1);

(statearr_18459[(20)] = inst_18372__$1);

(statearr_18459[(21)] = inst_18374__$1);

return statearr_18459;
})();
var statearr_18460_18531 = state_18432__$1;
(statearr_18460_18531[(2)] = null);

(statearr_18460_18531[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (40))){
var inst_18400 = (state_18432[(23)]);
var inst_18404 = done(null);
var inst_18405 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18400);
var state_18432__$1 = (function (){var statearr_18461 = state_18432;
(statearr_18461[(24)] = inst_18404);

return statearr_18461;
})();
var statearr_18462_18532 = state_18432__$1;
(statearr_18462_18532[(2)] = inst_18405);

(statearr_18462_18532[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (33))){
var inst_18391 = (state_18432[(25)]);
var inst_18393 = cljs.core.chunked_seq_QMARK_(inst_18391);
var state_18432__$1 = state_18432;
if(inst_18393){
var statearr_18463_18533 = state_18432__$1;
(statearr_18463_18533[(1)] = (36));

} else {
var statearr_18464_18534 = state_18432__$1;
(statearr_18464_18534[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (13))){
var inst_18321 = (state_18432[(26)]);
var inst_18324 = cljs.core.async.close_BANG_(inst_18321);
var state_18432__$1 = state_18432;
var statearr_18465_18535 = state_18432__$1;
(statearr_18465_18535[(2)] = inst_18324);

(statearr_18465_18535[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (22))){
var inst_18344 = (state_18432[(8)]);
var inst_18347 = cljs.core.async.close_BANG_(inst_18344);
var state_18432__$1 = state_18432;
var statearr_18466_18536 = state_18432__$1;
(statearr_18466_18536[(2)] = inst_18347);

(statearr_18466_18536[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (36))){
var inst_18391 = (state_18432[(25)]);
var inst_18395 = cljs.core.chunk_first(inst_18391);
var inst_18396 = cljs.core.chunk_rest(inst_18391);
var inst_18397 = cljs.core.count(inst_18395);
var inst_18372 = inst_18396;
var inst_18373 = inst_18395;
var inst_18374 = inst_18397;
var inst_18375 = (0);
var state_18432__$1 = (function (){var statearr_18467 = state_18432;
(statearr_18467[(10)] = inst_18373);

(statearr_18467[(11)] = inst_18375);

(statearr_18467[(20)] = inst_18372);

(statearr_18467[(21)] = inst_18374);

return statearr_18467;
})();
var statearr_18468_18537 = state_18432__$1;
(statearr_18468_18537[(2)] = null);

(statearr_18468_18537[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (41))){
var inst_18391 = (state_18432[(25)]);
var inst_18407 = (state_18432[(2)]);
var inst_18408 = cljs.core.next(inst_18391);
var inst_18372 = inst_18408;
var inst_18373 = null;
var inst_18374 = (0);
var inst_18375 = (0);
var state_18432__$1 = (function (){var statearr_18469 = state_18432;
(statearr_18469[(10)] = inst_18373);

(statearr_18469[(11)] = inst_18375);

(statearr_18469[(20)] = inst_18372);

(statearr_18469[(21)] = inst_18374);

(statearr_18469[(27)] = inst_18407);

return statearr_18469;
})();
var statearr_18470_18538 = state_18432__$1;
(statearr_18470_18538[(2)] = null);

(statearr_18470_18538[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (43))){
var state_18432__$1 = state_18432;
var statearr_18471_18539 = state_18432__$1;
(statearr_18471_18539[(2)] = null);

(statearr_18471_18539[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (29))){
var inst_18416 = (state_18432[(2)]);
var state_18432__$1 = state_18432;
var statearr_18472_18540 = state_18432__$1;
(statearr_18472_18540[(2)] = inst_18416);

(statearr_18472_18540[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (44))){
var inst_18425 = (state_18432[(2)]);
var state_18432__$1 = (function (){var statearr_18473 = state_18432;
(statearr_18473[(28)] = inst_18425);

return statearr_18473;
})();
var statearr_18474_18541 = state_18432__$1;
(statearr_18474_18541[(2)] = null);

(statearr_18474_18541[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (6))){
var inst_18364 = (state_18432[(29)]);
var inst_18363 = cljs.core.deref(cs);
var inst_18364__$1 = cljs.core.keys(inst_18363);
var inst_18365 = cljs.core.count(inst_18364__$1);
var inst_18366 = cljs.core.reset_BANG_(dctr,inst_18365);
var inst_18371 = cljs.core.seq(inst_18364__$1);
var inst_18372 = inst_18371;
var inst_18373 = null;
var inst_18374 = (0);
var inst_18375 = (0);
var state_18432__$1 = (function (){var statearr_18475 = state_18432;
(statearr_18475[(29)] = inst_18364__$1);

(statearr_18475[(10)] = inst_18373);

(statearr_18475[(11)] = inst_18375);

(statearr_18475[(20)] = inst_18372);

(statearr_18475[(21)] = inst_18374);

(statearr_18475[(30)] = inst_18366);

return statearr_18475;
})();
var statearr_18476_18542 = state_18432__$1;
(statearr_18476_18542[(2)] = null);

(statearr_18476_18542[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (28))){
var inst_18391 = (state_18432[(25)]);
var inst_18372 = (state_18432[(20)]);
var inst_18391__$1 = cljs.core.seq(inst_18372);
var state_18432__$1 = (function (){var statearr_18477 = state_18432;
(statearr_18477[(25)] = inst_18391__$1);

return statearr_18477;
})();
if(inst_18391__$1){
var statearr_18478_18543 = state_18432__$1;
(statearr_18478_18543[(1)] = (33));

} else {
var statearr_18479_18544 = state_18432__$1;
(statearr_18479_18544[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (25))){
var inst_18375 = (state_18432[(11)]);
var inst_18374 = (state_18432[(21)]);
var inst_18377 = (inst_18375 < inst_18374);
var inst_18378 = inst_18377;
var state_18432__$1 = state_18432;
if(cljs.core.truth_(inst_18378)){
var statearr_18480_18545 = state_18432__$1;
(statearr_18480_18545[(1)] = (27));

} else {
var statearr_18481_18546 = state_18432__$1;
(statearr_18481_18546[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (34))){
var state_18432__$1 = state_18432;
var statearr_18482_18547 = state_18432__$1;
(statearr_18482_18547[(2)] = null);

(statearr_18482_18547[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (17))){
var state_18432__$1 = state_18432;
var statearr_18483_18548 = state_18432__$1;
(statearr_18483_18548[(2)] = null);

(statearr_18483_18548[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (3))){
var inst_18430 = (state_18432[(2)]);
var state_18432__$1 = state_18432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18432__$1,inst_18430);
} else {
if((state_val_18433 === (12))){
var inst_18359 = (state_18432[(2)]);
var state_18432__$1 = state_18432;
var statearr_18484_18549 = state_18432__$1;
(statearr_18484_18549[(2)] = inst_18359);

(statearr_18484_18549[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (2))){
var state_18432__$1 = state_18432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18432__$1,(4),ch);
} else {
if((state_val_18433 === (23))){
var state_18432__$1 = state_18432;
var statearr_18485_18550 = state_18432__$1;
(statearr_18485_18550[(2)] = null);

(statearr_18485_18550[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (35))){
var inst_18414 = (state_18432[(2)]);
var state_18432__$1 = state_18432;
var statearr_18486_18551 = state_18432__$1;
(statearr_18486_18551[(2)] = inst_18414);

(statearr_18486_18551[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (19))){
var inst_18331 = (state_18432[(7)]);
var inst_18335 = cljs.core.chunk_first(inst_18331);
var inst_18336 = cljs.core.chunk_rest(inst_18331);
var inst_18337 = cljs.core.count(inst_18335);
var inst_18309 = inst_18336;
var inst_18310 = inst_18335;
var inst_18311 = inst_18337;
var inst_18312 = (0);
var state_18432__$1 = (function (){var statearr_18487 = state_18432;
(statearr_18487[(13)] = inst_18309);

(statearr_18487[(14)] = inst_18310);

(statearr_18487[(15)] = inst_18312);

(statearr_18487[(17)] = inst_18311);

return statearr_18487;
})();
var statearr_18488_18552 = state_18432__$1;
(statearr_18488_18552[(2)] = null);

(statearr_18488_18552[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (11))){
var inst_18309 = (state_18432[(13)]);
var inst_18331 = (state_18432[(7)]);
var inst_18331__$1 = cljs.core.seq(inst_18309);
var state_18432__$1 = (function (){var statearr_18489 = state_18432;
(statearr_18489[(7)] = inst_18331__$1);

return statearr_18489;
})();
if(inst_18331__$1){
var statearr_18490_18553 = state_18432__$1;
(statearr_18490_18553[(1)] = (16));

} else {
var statearr_18491_18554 = state_18432__$1;
(statearr_18491_18554[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (9))){
var inst_18361 = (state_18432[(2)]);
var state_18432__$1 = state_18432;
var statearr_18492_18555 = state_18432__$1;
(statearr_18492_18555[(2)] = inst_18361);

(statearr_18492_18555[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (5))){
var inst_18307 = cljs.core.deref(cs);
var inst_18308 = cljs.core.seq(inst_18307);
var inst_18309 = inst_18308;
var inst_18310 = null;
var inst_18311 = (0);
var inst_18312 = (0);
var state_18432__$1 = (function (){var statearr_18493 = state_18432;
(statearr_18493[(13)] = inst_18309);

(statearr_18493[(14)] = inst_18310);

(statearr_18493[(15)] = inst_18312);

(statearr_18493[(17)] = inst_18311);

return statearr_18493;
})();
var statearr_18494_18556 = state_18432__$1;
(statearr_18494_18556[(2)] = null);

(statearr_18494_18556[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (14))){
var state_18432__$1 = state_18432;
var statearr_18495_18557 = state_18432__$1;
(statearr_18495_18557[(2)] = null);

(statearr_18495_18557[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (45))){
var inst_18422 = (state_18432[(2)]);
var state_18432__$1 = state_18432;
var statearr_18496_18558 = state_18432__$1;
(statearr_18496_18558[(2)] = inst_18422);

(statearr_18496_18558[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (26))){
var inst_18364 = (state_18432[(29)]);
var inst_18418 = (state_18432[(2)]);
var inst_18419 = cljs.core.seq(inst_18364);
var state_18432__$1 = (function (){var statearr_18497 = state_18432;
(statearr_18497[(31)] = inst_18418);

return statearr_18497;
})();
if(inst_18419){
var statearr_18498_18559 = state_18432__$1;
(statearr_18498_18559[(1)] = (42));

} else {
var statearr_18499_18560 = state_18432__$1;
(statearr_18499_18560[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (16))){
var inst_18331 = (state_18432[(7)]);
var inst_18333 = cljs.core.chunked_seq_QMARK_(inst_18331);
var state_18432__$1 = state_18432;
if(inst_18333){
var statearr_18500_18561 = state_18432__$1;
(statearr_18500_18561[(1)] = (19));

} else {
var statearr_18501_18562 = state_18432__$1;
(statearr_18501_18562[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (38))){
var inst_18411 = (state_18432[(2)]);
var state_18432__$1 = state_18432;
var statearr_18502_18563 = state_18432__$1;
(statearr_18502_18563[(2)] = inst_18411);

(statearr_18502_18563[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (30))){
var state_18432__$1 = state_18432;
var statearr_18503_18564 = state_18432__$1;
(statearr_18503_18564[(2)] = null);

(statearr_18503_18564[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (10))){
var inst_18310 = (state_18432[(14)]);
var inst_18312 = (state_18432[(15)]);
var inst_18320 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18310,inst_18312);
var inst_18321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18320,(0),null);
var inst_18322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18320,(1),null);
var state_18432__$1 = (function (){var statearr_18504 = state_18432;
(statearr_18504[(26)] = inst_18321);

return statearr_18504;
})();
if(cljs.core.truth_(inst_18322)){
var statearr_18505_18565 = state_18432__$1;
(statearr_18505_18565[(1)] = (13));

} else {
var statearr_18506_18566 = state_18432__$1;
(statearr_18506_18566[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (18))){
var inst_18357 = (state_18432[(2)]);
var state_18432__$1 = state_18432;
var statearr_18507_18567 = state_18432__$1;
(statearr_18507_18567[(2)] = inst_18357);

(statearr_18507_18567[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (42))){
var state_18432__$1 = state_18432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18432__$1,(45),dchan);
} else {
if((state_val_18433 === (37))){
var inst_18391 = (state_18432[(25)]);
var inst_18400 = (state_18432[(23)]);
var inst_18300 = (state_18432[(12)]);
var inst_18400__$1 = cljs.core.first(inst_18391);
var inst_18401 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18400__$1,inst_18300,done);
var state_18432__$1 = (function (){var statearr_18508 = state_18432;
(statearr_18508[(23)] = inst_18400__$1);

return statearr_18508;
})();
if(cljs.core.truth_(inst_18401)){
var statearr_18509_18568 = state_18432__$1;
(statearr_18509_18568[(1)] = (39));

} else {
var statearr_18510_18569 = state_18432__$1;
(statearr_18510_18569[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18433 === (8))){
var inst_18312 = (state_18432[(15)]);
var inst_18311 = (state_18432[(17)]);
var inst_18314 = (inst_18312 < inst_18311);
var inst_18315 = inst_18314;
var state_18432__$1 = state_18432;
if(cljs.core.truth_(inst_18315)){
var statearr_18511_18570 = state_18432__$1;
(statearr_18511_18570[(1)] = (10));

} else {
var statearr_18512_18571 = state_18432__$1;
(statearr_18512_18571[(1)] = (11));

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
});})(c__15830__auto___18517,cs,m,dchan,dctr,done))
;
return ((function (switch__15647__auto__,c__15830__auto___18517,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15648__auto__ = null;
var cljs$core$async$mult_$_state_machine__15648__auto____0 = (function (){
var statearr_18513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18513[(0)] = cljs$core$async$mult_$_state_machine__15648__auto__);

(statearr_18513[(1)] = (1));

return statearr_18513;
});
var cljs$core$async$mult_$_state_machine__15648__auto____1 = (function (state_18432){
while(true){
var ret_value__15649__auto__ = (function (){try{while(true){
var result__15650__auto__ = switch__15647__auto__(state_18432);
if(cljs.core.keyword_identical_QMARK_(result__15650__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15650__auto__;
}
break;
}
}catch (e18514){if((e18514 instanceof Object)){
var ex__15651__auto__ = e18514;
var statearr_18515_18572 = state_18432;
(statearr_18515_18572[(5)] = ex__15651__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18432);

return cljs.core.cst$kw$recur;
} else {
throw e18514;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15649__auto__,cljs.core.cst$kw$recur)){
var G__18573 = state_18432;
state_18432 = G__18573;
continue;
} else {
return ret_value__15649__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15648__auto__ = function(state_18432){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15648__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15648__auto____1.call(this,state_18432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15648__auto____0;
cljs$core$async$mult_$_state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15648__auto____1;
return cljs$core$async$mult_$_state_machine__15648__auto__;
})()
;})(switch__15647__auto__,c__15830__auto___18517,cs,m,dchan,dctr,done))
})();
var state__15832__auto__ = (function (){var statearr_18516 = (f__15831__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15831__auto__.cljs$core$IFn$_invoke$arity$0() : f__15831__auto__.call(null));
(statearr_18516[(6)] = c__15830__auto___18517);

return statearr_18516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15832__auto__);
});})(c__15830__auto___18517,cs,m,dchan,dctr,done))
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
var G__18575 = arguments.length;
switch (G__18575) {
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
var len__4531__auto___18587 = arguments.length;
var i__4532__auto___18588 = (0);
while(true){
if((i__4532__auto___18588 < len__4531__auto___18587)){
args__4534__auto__.push((arguments[i__4532__auto___18588]));

var G__18589 = (i__4532__auto___18588 + (1));
i__4532__auto___18588 = G__18589;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18581){
var map__18582 = p__18581;
var map__18582__$1 = ((((!((map__18582 == null)))?(((((map__18582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18582):map__18582);
var opts = map__18582__$1;
var statearr_18584_18590 = state;
(statearr_18584_18590[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__18582,map__18582__$1,opts){
return (function (val){
var statearr_18585_18591 = state;
(statearr_18585_18591[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__18582,map__18582__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_18586_18592 = state;
(statearr_18586_18592[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18577){
var G__18578 = cljs.core.first(seq18577);
var seq18577__$1 = cljs.core.next(seq18577);
var G__18579 = cljs.core.first(seq18577__$1);
var seq18577__$2 = cljs.core.next(seq18577__$1);
var G__18580 = cljs.core.first(seq18577__$2);
var seq18577__$3 = cljs.core.next(seq18577__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18578,G__18579,G__18580,seq18577__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18593 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18593 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta18594){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta18594 = meta18594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18595,meta18594__$1){
var self__ = this;
var _18595__$1 = this;
return (new cljs.core.async.t_cljs$core$async18593(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta18594__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18593.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18595){
var self__ = this;
var _18595__$1 = this;
return self__.meta18594;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18593.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18593.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18593.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18593.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18593.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18593.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18593.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18593.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18593.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta18594], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18593.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18593.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18593";

cljs.core.async.t_cljs$core$async18593.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18593");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18593.
 */
cljs.core.async.__GT_t_cljs$core$async18593 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18593(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18594){
return (new cljs.core.async.t_cljs$core$async18593(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18594));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18593(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15830__auto___18757 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15830__auto___18757,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15831__auto__ = (function (){var switch__15647__auto__ = ((function (c__15830__auto___18757,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18697){
var state_val_18698 = (state_18697[(1)]);
if((state_val_18698 === (7))){
var inst_18612 = (state_18697[(2)]);
var state_18697__$1 = state_18697;
var statearr_18699_18758 = state_18697__$1;
(statearr_18699_18758[(2)] = inst_18612);

(statearr_18699_18758[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (20))){
var inst_18624 = (state_18697[(7)]);
var state_18697__$1 = state_18697;
var statearr_18700_18759 = state_18697__$1;
(statearr_18700_18759[(2)] = inst_18624);

(statearr_18700_18759[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (27))){
var state_18697__$1 = state_18697;
var statearr_18701_18760 = state_18697__$1;
(statearr_18701_18760[(2)] = null);

(statearr_18701_18760[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (1))){
var inst_18599 = (state_18697[(8)]);
var inst_18599__$1 = calc_state();
var inst_18601 = (inst_18599__$1 == null);
var inst_18602 = cljs.core.not(inst_18601);
var state_18697__$1 = (function (){var statearr_18702 = state_18697;
(statearr_18702[(8)] = inst_18599__$1);

return statearr_18702;
})();
if(inst_18602){
var statearr_18703_18761 = state_18697__$1;
(statearr_18703_18761[(1)] = (2));

} else {
var statearr_18704_18762 = state_18697__$1;
(statearr_18704_18762[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (24))){
var inst_18671 = (state_18697[(9)]);
var inst_18657 = (state_18697[(10)]);
var inst_18648 = (state_18697[(11)]);
var inst_18671__$1 = (inst_18648.cljs$core$IFn$_invoke$arity$1 ? inst_18648.cljs$core$IFn$_invoke$arity$1(inst_18657) : inst_18648.call(null,inst_18657));
var state_18697__$1 = (function (){var statearr_18705 = state_18697;
(statearr_18705[(9)] = inst_18671__$1);

return statearr_18705;
})();
if(cljs.core.truth_(inst_18671__$1)){
var statearr_18706_18763 = state_18697__$1;
(statearr_18706_18763[(1)] = (29));

} else {
var statearr_18707_18764 = state_18697__$1;
(statearr_18707_18764[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (4))){
var inst_18615 = (state_18697[(2)]);
var state_18697__$1 = state_18697;
if(cljs.core.truth_(inst_18615)){
var statearr_18708_18765 = state_18697__$1;
(statearr_18708_18765[(1)] = (8));

} else {
var statearr_18709_18766 = state_18697__$1;
(statearr_18709_18766[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (15))){
var inst_18642 = (state_18697[(2)]);
var state_18697__$1 = state_18697;
if(cljs.core.truth_(inst_18642)){
var statearr_18710_18767 = state_18697__$1;
(statearr_18710_18767[(1)] = (19));

} else {
var statearr_18711_18768 = state_18697__$1;
(statearr_18711_18768[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (21))){
var inst_18647 = (state_18697[(12)]);
var inst_18647__$1 = (state_18697[(2)]);
var inst_18648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18647__$1,cljs.core.cst$kw$solos);
var inst_18649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18647__$1,cljs.core.cst$kw$mutes);
var inst_18650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18647__$1,cljs.core.cst$kw$reads);
var state_18697__$1 = (function (){var statearr_18712 = state_18697;
(statearr_18712[(13)] = inst_18649);

(statearr_18712[(11)] = inst_18648);

(statearr_18712[(12)] = inst_18647__$1);

return statearr_18712;
})();
return cljs.core.async.ioc_alts_BANG_(state_18697__$1,(22),inst_18650);
} else {
if((state_val_18698 === (31))){
var inst_18679 = (state_18697[(2)]);
var state_18697__$1 = state_18697;
if(cljs.core.truth_(inst_18679)){
var statearr_18713_18769 = state_18697__$1;
(statearr_18713_18769[(1)] = (32));

} else {
var statearr_18714_18770 = state_18697__$1;
(statearr_18714_18770[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (32))){
var inst_18656 = (state_18697[(14)]);
var state_18697__$1 = state_18697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18697__$1,(35),out,inst_18656);
} else {
if((state_val_18698 === (33))){
var inst_18647 = (state_18697[(12)]);
var inst_18624 = inst_18647;
var state_18697__$1 = (function (){var statearr_18715 = state_18697;
(statearr_18715[(7)] = inst_18624);

return statearr_18715;
})();
var statearr_18716_18771 = state_18697__$1;
(statearr_18716_18771[(2)] = null);

(statearr_18716_18771[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (13))){
var inst_18624 = (state_18697[(7)]);
var inst_18631 = inst_18624.cljs$lang$protocol_mask$partition0$;
var inst_18632 = (inst_18631 & (64));
var inst_18633 = inst_18624.cljs$core$ISeq$;
var inst_18634 = (cljs.core.PROTOCOL_SENTINEL === inst_18633);
var inst_18635 = ((inst_18632) || (inst_18634));
var state_18697__$1 = state_18697;
if(cljs.core.truth_(inst_18635)){
var statearr_18717_18772 = state_18697__$1;
(statearr_18717_18772[(1)] = (16));

} else {
var statearr_18718_18773 = state_18697__$1;
(statearr_18718_18773[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (22))){
var inst_18657 = (state_18697[(10)]);
var inst_18656 = (state_18697[(14)]);
var inst_18655 = (state_18697[(2)]);
var inst_18656__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18655,(0),null);
var inst_18657__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18655,(1),null);
var inst_18658 = (inst_18656__$1 == null);
var inst_18659 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18657__$1,change);
var inst_18660 = ((inst_18658) || (inst_18659));
var state_18697__$1 = (function (){var statearr_18719 = state_18697;
(statearr_18719[(10)] = inst_18657__$1);

(statearr_18719[(14)] = inst_18656__$1);

return statearr_18719;
})();
if(cljs.core.truth_(inst_18660)){
var statearr_18720_18774 = state_18697__$1;
(statearr_18720_18774[(1)] = (23));

} else {
var statearr_18721_18775 = state_18697__$1;
(statearr_18721_18775[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (36))){
var inst_18647 = (state_18697[(12)]);
var inst_18624 = inst_18647;
var state_18697__$1 = (function (){var statearr_18722 = state_18697;
(statearr_18722[(7)] = inst_18624);

return statearr_18722;
})();
var statearr_18723_18776 = state_18697__$1;
(statearr_18723_18776[(2)] = null);

(statearr_18723_18776[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (29))){
var inst_18671 = (state_18697[(9)]);
var state_18697__$1 = state_18697;
var statearr_18724_18777 = state_18697__$1;
(statearr_18724_18777[(2)] = inst_18671);

(statearr_18724_18777[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (6))){
var state_18697__$1 = state_18697;
var statearr_18725_18778 = state_18697__$1;
(statearr_18725_18778[(2)] = false);

(statearr_18725_18778[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (28))){
var inst_18667 = (state_18697[(2)]);
var inst_18668 = calc_state();
var inst_18624 = inst_18668;
var state_18697__$1 = (function (){var statearr_18726 = state_18697;
(statearr_18726[(15)] = inst_18667);

(statearr_18726[(7)] = inst_18624);

return statearr_18726;
})();
var statearr_18727_18779 = state_18697__$1;
(statearr_18727_18779[(2)] = null);

(statearr_18727_18779[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (25))){
var inst_18693 = (state_18697[(2)]);
var state_18697__$1 = state_18697;
var statearr_18728_18780 = state_18697__$1;
(statearr_18728_18780[(2)] = inst_18693);

(statearr_18728_18780[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (34))){
var inst_18691 = (state_18697[(2)]);
var state_18697__$1 = state_18697;
var statearr_18729_18781 = state_18697__$1;
(statearr_18729_18781[(2)] = inst_18691);

(statearr_18729_18781[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (17))){
var state_18697__$1 = state_18697;
var statearr_18730_18782 = state_18697__$1;
(statearr_18730_18782[(2)] = false);

(statearr_18730_18782[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (3))){
var state_18697__$1 = state_18697;
var statearr_18731_18783 = state_18697__$1;
(statearr_18731_18783[(2)] = false);

(statearr_18731_18783[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (12))){
var inst_18695 = (state_18697[(2)]);
var state_18697__$1 = state_18697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18697__$1,inst_18695);
} else {
if((state_val_18698 === (2))){
var inst_18599 = (state_18697[(8)]);
var inst_18604 = inst_18599.cljs$lang$protocol_mask$partition0$;
var inst_18605 = (inst_18604 & (64));
var inst_18606 = inst_18599.cljs$core$ISeq$;
var inst_18607 = (cljs.core.PROTOCOL_SENTINEL === inst_18606);
var inst_18608 = ((inst_18605) || (inst_18607));
var state_18697__$1 = state_18697;
if(cljs.core.truth_(inst_18608)){
var statearr_18732_18784 = state_18697__$1;
(statearr_18732_18784[(1)] = (5));

} else {
var statearr_18733_18785 = state_18697__$1;
(statearr_18733_18785[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (23))){
var inst_18656 = (state_18697[(14)]);
var inst_18662 = (inst_18656 == null);
var state_18697__$1 = state_18697;
if(cljs.core.truth_(inst_18662)){
var statearr_18734_18786 = state_18697__$1;
(statearr_18734_18786[(1)] = (26));

} else {
var statearr_18735_18787 = state_18697__$1;
(statearr_18735_18787[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (35))){
var inst_18682 = (state_18697[(2)]);
var state_18697__$1 = state_18697;
if(cljs.core.truth_(inst_18682)){
var statearr_18736_18788 = state_18697__$1;
(statearr_18736_18788[(1)] = (36));

} else {
var statearr_18737_18789 = state_18697__$1;
(statearr_18737_18789[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (19))){
var inst_18624 = (state_18697[(7)]);
var inst_18644 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18624);
var state_18697__$1 = state_18697;
var statearr_18738_18790 = state_18697__$1;
(statearr_18738_18790[(2)] = inst_18644);

(statearr_18738_18790[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (11))){
var inst_18624 = (state_18697[(7)]);
var inst_18628 = (inst_18624 == null);
var inst_18629 = cljs.core.not(inst_18628);
var state_18697__$1 = state_18697;
if(inst_18629){
var statearr_18739_18791 = state_18697__$1;
(statearr_18739_18791[(1)] = (13));

} else {
var statearr_18740_18792 = state_18697__$1;
(statearr_18740_18792[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (9))){
var inst_18599 = (state_18697[(8)]);
var state_18697__$1 = state_18697;
var statearr_18741_18793 = state_18697__$1;
(statearr_18741_18793[(2)] = inst_18599);

(statearr_18741_18793[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (5))){
var state_18697__$1 = state_18697;
var statearr_18742_18794 = state_18697__$1;
(statearr_18742_18794[(2)] = true);

(statearr_18742_18794[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (14))){
var state_18697__$1 = state_18697;
var statearr_18743_18795 = state_18697__$1;
(statearr_18743_18795[(2)] = false);

(statearr_18743_18795[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (26))){
var inst_18657 = (state_18697[(10)]);
var inst_18664 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18657);
var state_18697__$1 = state_18697;
var statearr_18744_18796 = state_18697__$1;
(statearr_18744_18796[(2)] = inst_18664);

(statearr_18744_18796[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (16))){
var state_18697__$1 = state_18697;
var statearr_18745_18797 = state_18697__$1;
(statearr_18745_18797[(2)] = true);

(statearr_18745_18797[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (38))){
var inst_18687 = (state_18697[(2)]);
var state_18697__$1 = state_18697;
var statearr_18746_18798 = state_18697__$1;
(statearr_18746_18798[(2)] = inst_18687);

(statearr_18746_18798[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (30))){
var inst_18649 = (state_18697[(13)]);
var inst_18657 = (state_18697[(10)]);
var inst_18648 = (state_18697[(11)]);
var inst_18674 = cljs.core.empty_QMARK_(inst_18648);
var inst_18675 = (inst_18649.cljs$core$IFn$_invoke$arity$1 ? inst_18649.cljs$core$IFn$_invoke$arity$1(inst_18657) : inst_18649.call(null,inst_18657));
var inst_18676 = cljs.core.not(inst_18675);
var inst_18677 = ((inst_18674) && (inst_18676));
var state_18697__$1 = state_18697;
var statearr_18747_18799 = state_18697__$1;
(statearr_18747_18799[(2)] = inst_18677);

(statearr_18747_18799[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (10))){
var inst_18599 = (state_18697[(8)]);
var inst_18620 = (state_18697[(2)]);
var inst_18621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18620,cljs.core.cst$kw$solos);
var inst_18622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18620,cljs.core.cst$kw$mutes);
var inst_18623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18620,cljs.core.cst$kw$reads);
var inst_18624 = inst_18599;
var state_18697__$1 = (function (){var statearr_18748 = state_18697;
(statearr_18748[(16)] = inst_18621);

(statearr_18748[(17)] = inst_18623);

(statearr_18748[(18)] = inst_18622);

(statearr_18748[(7)] = inst_18624);

return statearr_18748;
})();
var statearr_18749_18800 = state_18697__$1;
(statearr_18749_18800[(2)] = null);

(statearr_18749_18800[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (18))){
var inst_18639 = (state_18697[(2)]);
var state_18697__$1 = state_18697;
var statearr_18750_18801 = state_18697__$1;
(statearr_18750_18801[(2)] = inst_18639);

(statearr_18750_18801[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (37))){
var state_18697__$1 = state_18697;
var statearr_18751_18802 = state_18697__$1;
(statearr_18751_18802[(2)] = null);

(statearr_18751_18802[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (8))){
var inst_18599 = (state_18697[(8)]);
var inst_18617 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18599);
var state_18697__$1 = state_18697;
var statearr_18752_18803 = state_18697__$1;
(statearr_18752_18803[(2)] = inst_18617);

(statearr_18752_18803[(1)] = (10));


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
});})(c__15830__auto___18757,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15647__auto__,c__15830__auto___18757,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15648__auto__ = null;
var cljs$core$async$mix_$_state_machine__15648__auto____0 = (function (){
var statearr_18753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18753[(0)] = cljs$core$async$mix_$_state_machine__15648__auto__);

(statearr_18753[(1)] = (1));

return statearr_18753;
});
var cljs$core$async$mix_$_state_machine__15648__auto____1 = (function (state_18697){
while(true){
var ret_value__15649__auto__ = (function (){try{while(true){
var result__15650__auto__ = switch__15647__auto__(state_18697);
if(cljs.core.keyword_identical_QMARK_(result__15650__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15650__auto__;
}
break;
}
}catch (e18754){if((e18754 instanceof Object)){
var ex__15651__auto__ = e18754;
var statearr_18755_18804 = state_18697;
(statearr_18755_18804[(5)] = ex__15651__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18697);

return cljs.core.cst$kw$recur;
} else {
throw e18754;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15649__auto__,cljs.core.cst$kw$recur)){
var G__18805 = state_18697;
state_18697 = G__18805;
continue;
} else {
return ret_value__15649__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15648__auto__ = function(state_18697){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15648__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15648__auto____1.call(this,state_18697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15648__auto____0;
cljs$core$async$mix_$_state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15648__auto____1;
return cljs$core$async$mix_$_state_machine__15648__auto__;
})()
;})(switch__15647__auto__,c__15830__auto___18757,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15832__auto__ = (function (){var statearr_18756 = (f__15831__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15831__auto__.cljs$core$IFn$_invoke$arity$0() : f__15831__auto__.call(null));
(statearr_18756[(6)] = c__15830__auto___18757);

return statearr_18756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15832__auto__);
});})(c__15830__auto___18757,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__18807 = arguments.length;
switch (G__18807) {
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
var G__18811 = arguments.length;
switch (G__18811) {
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
return (function (p1__18809_SHARP_){
if(cljs.core.truth_((p1__18809_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18809_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18809_SHARP_.call(null,topic)))){
return p1__18809_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18809_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18812 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18812 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18813){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18813 = meta18813;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18814,meta18813__$1){
var self__ = this;
var _18814__$1 = this;
return (new cljs.core.async.t_cljs$core$async18812(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18813__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18812.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18814){
var self__ = this;
var _18814__$1 = this;
return self__.meta18813;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18812.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18812.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18812.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18812.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18812.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async18812.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18812.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18812.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta18813], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18812.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18812.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18812";

cljs.core.async.t_cljs$core$async18812.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18812");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18812.
 */
cljs.core.async.__GT_t_cljs$core$async18812 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18812(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18813){
return (new cljs.core.async.t_cljs$core$async18812(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18813));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18812(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15830__auto___18932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15830__auto___18932,mults,ensure_mult,p){
return (function (){
var f__15831__auto__ = (function (){var switch__15647__auto__ = ((function (c__15830__auto___18932,mults,ensure_mult,p){
return (function (state_18886){
var state_val_18887 = (state_18886[(1)]);
if((state_val_18887 === (7))){
var inst_18882 = (state_18886[(2)]);
var state_18886__$1 = state_18886;
var statearr_18888_18933 = state_18886__$1;
(statearr_18888_18933[(2)] = inst_18882);

(statearr_18888_18933[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18887 === (20))){
var state_18886__$1 = state_18886;
var statearr_18889_18934 = state_18886__$1;
(statearr_18889_18934[(2)] = null);

(statearr_18889_18934[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18887 === (1))){
var state_18886__$1 = state_18886;
var statearr_18890_18935 = state_18886__$1;
(statearr_18890_18935[(2)] = null);

(statearr_18890_18935[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18887 === (24))){
var inst_18865 = (state_18886[(7)]);
var inst_18874 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18865);
var state_18886__$1 = state_18886;
var statearr_18891_18936 = state_18886__$1;
(statearr_18891_18936[(2)] = inst_18874);

(statearr_18891_18936[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18887 === (4))){
var inst_18817 = (state_18886[(8)]);
var inst_18817__$1 = (state_18886[(2)]);
var inst_18818 = (inst_18817__$1 == null);
var state_18886__$1 = (function (){var statearr_18892 = state_18886;
(statearr_18892[(8)] = inst_18817__$1);

return statearr_18892;
})();
if(cljs.core.truth_(inst_18818)){
var statearr_18893_18937 = state_18886__$1;
(statearr_18893_18937[(1)] = (5));

} else {
var statearr_18894_18938 = state_18886__$1;
(statearr_18894_18938[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18887 === (15))){
var inst_18859 = (state_18886[(2)]);
var state_18886__$1 = state_18886;
var statearr_18895_18939 = state_18886__$1;
(statearr_18895_18939[(2)] = inst_18859);

(statearr_18895_18939[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18887 === (21))){
var inst_18879 = (state_18886[(2)]);
var state_18886__$1 = (function (){var statearr_18896 = state_18886;
(statearr_18896[(9)] = inst_18879);

return statearr_18896;
})();
var statearr_18897_18940 = state_18886__$1;
(statearr_18897_18940[(2)] = null);

(statearr_18897_18940[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18887 === (13))){
var inst_18841 = (state_18886[(10)]);
var inst_18843 = cljs.core.chunked_seq_QMARK_(inst_18841);
var state_18886__$1 = state_18886;
if(inst_18843){
var statearr_18898_18941 = state_18886__$1;
(statearr_18898_18941[(1)] = (16));

} else {
var statearr_18899_18942 = state_18886__$1;
(statearr_18899_18942[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18887 === (22))){
var inst_18871 = (state_18886[(2)]);
var state_18886__$1 = state_18886;
if(cljs.core.truth_(inst_18871)){
var statearr_18900_18943 = state_18886__$1;
(statearr_18900_18943[(1)] = (23));

} else {
var statearr_18901_18944 = state_18886__$1;
(statearr_18901_18944[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18887 === (6))){
var inst_18865 = (state_18886[(7)]);
var inst_18817 = (state_18886[(8)]);
var inst_18867 = (state_18886[(11)]);
var inst_18865__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18817) : topic_fn.call(null,inst_18817));
var inst_18866 = cljs.core.deref(mults);
var inst_18867__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18866,inst_18865__$1);
var state_18886__$1 = (function (){var statearr_18902 = state_18886;
(statearr_18902[(7)] = inst_18865__$1);

(statearr_18902[(11)] = inst_18867__$1);

return statearr_18902;
})();
if(cljs.core.truth_(inst_18867__$1)){
var statearr_18903_18945 = state_18886__$1;
(statearr_18903_18945[(1)] = (19));

} else {
var statearr_18904_18946 = state_18886__$1;
(statearr_18904_18946[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18887 === (25))){
var inst_18876 = (state_18886[(2)]);
var state_18886__$1 = state_18886;
var statearr_18905_18947 = state_18886__$1;
(statearr_18905_18947[(2)] = inst_18876);

(statearr_18905_18947[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18887 === (17))){
var inst_18841 = (state_18886[(10)]);
var inst_18850 = cljs.core.first(inst_18841);
var inst_18851 = cljs.core.async.muxch_STAR_(inst_18850);
var inst_18852 = cljs.core.async.close_BANG_(inst_18851);
var inst_18853 = cljs.core.next(inst_18841);
var inst_18827 = inst_18853;
var inst_18828 = null;
var inst_18829 = (0);
var inst_18830 = (0);
var state_18886__$1 = (function (){var statearr_18906 = state_18886;
(statearr_18906[(12)] = inst_18829);

(statearr_18906[(13)] = inst_18852);

(statearr_18906[(14)] = inst_18830);

(statearr_18906[(15)] = inst_18828);

(statearr_18906[(16)] = inst_18827);

return statearr_18906;
})();
var statearr_18907_18948 = state_18886__$1;
(statearr_18907_18948[(2)] = null);

(statearr_18907_18948[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18887 === (3))){
var inst_18884 = (state_18886[(2)]);
var state_18886__$1 = state_18886;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18886__$1,inst_18884);
} else {
if((state_val_18887 === (12))){
var inst_18861 = (state_18886[(2)]);
var state_18886__$1 = state_18886;
var statearr_18908_18949 = state_18886__$1;
(statearr_18908_18949[(2)] = inst_18861);

(statearr_18908_18949[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18887 === (2))){
var state_18886__$1 = state_18886;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18886__$1,(4),ch);
} else {
if((state_val_18887 === (23))){
var state_18886__$1 = state_18886;
var statearr_18909_18950 = state_18886__$1;
(statearr_18909_18950[(2)] = null);

(statearr_18909_18950[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18887 === (19))){
var inst_18817 = (state_18886[(8)]);
var inst_18867 = (state_18886[(11)]);
var inst_18869 = cljs.core.async.muxch_STAR_(inst_18867);
var state_18886__$1 = state_18886;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18886__$1,(22),inst_18869,inst_18817);
} else {
if((state_val_18887 === (11))){
var inst_18841 = (state_18886[(10)]);
var inst_18827 = (state_18886[(16)]);
var inst_18841__$1 = cljs.core.seq(inst_18827);
var state_18886__$1 = (function (){var statearr_18910 = state_18886;
(statearr_18910[(10)] = inst_18841__$1);

return statearr_18910;
})();
if(inst_18841__$1){
var statearr_18911_18951 = state_18886__$1;
(statearr_18911_18951[(1)] = (13));

} else {
var statearr_18912_18952 = state_18886__$1;
(statearr_18912_18952[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18887 === (9))){
var inst_18863 = (state_18886[(2)]);
var state_18886__$1 = state_18886;
var statearr_18913_18953 = state_18886__$1;
(statearr_18913_18953[(2)] = inst_18863);

(statearr_18913_18953[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18887 === (5))){
var inst_18824 = cljs.core.deref(mults);
var inst_18825 = cljs.core.vals(inst_18824);
var inst_18826 = cljs.core.seq(inst_18825);
var inst_18827 = inst_18826;
var inst_18828 = null;
var inst_18829 = (0);
var inst_18830 = (0);
var state_18886__$1 = (function (){var statearr_18914 = state_18886;
(statearr_18914[(12)] = inst_18829);

(statearr_18914[(14)] = inst_18830);

(statearr_18914[(15)] = inst_18828);

(statearr_18914[(16)] = inst_18827);

return statearr_18914;
})();
var statearr_18915_18954 = state_18886__$1;
(statearr_18915_18954[(2)] = null);

(statearr_18915_18954[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18887 === (14))){
var state_18886__$1 = state_18886;
var statearr_18919_18955 = state_18886__$1;
(statearr_18919_18955[(2)] = null);

(statearr_18919_18955[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18887 === (16))){
var inst_18841 = (state_18886[(10)]);
var inst_18845 = cljs.core.chunk_first(inst_18841);
var inst_18846 = cljs.core.chunk_rest(inst_18841);
var inst_18847 = cljs.core.count(inst_18845);
var inst_18827 = inst_18846;
var inst_18828 = inst_18845;
var inst_18829 = inst_18847;
var inst_18830 = (0);
var state_18886__$1 = (function (){var statearr_18920 = state_18886;
(statearr_18920[(12)] = inst_18829);

(statearr_18920[(14)] = inst_18830);

(statearr_18920[(15)] = inst_18828);

(statearr_18920[(16)] = inst_18827);

return statearr_18920;
})();
var statearr_18921_18956 = state_18886__$1;
(statearr_18921_18956[(2)] = null);

(statearr_18921_18956[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18887 === (10))){
var inst_18829 = (state_18886[(12)]);
var inst_18830 = (state_18886[(14)]);
var inst_18828 = (state_18886[(15)]);
var inst_18827 = (state_18886[(16)]);
var inst_18835 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18828,inst_18830);
var inst_18836 = cljs.core.async.muxch_STAR_(inst_18835);
var inst_18837 = cljs.core.async.close_BANG_(inst_18836);
var inst_18838 = (inst_18830 + (1));
var tmp18916 = inst_18829;
var tmp18917 = inst_18828;
var tmp18918 = inst_18827;
var inst_18827__$1 = tmp18918;
var inst_18828__$1 = tmp18917;
var inst_18829__$1 = tmp18916;
var inst_18830__$1 = inst_18838;
var state_18886__$1 = (function (){var statearr_18922 = state_18886;
(statearr_18922[(12)] = inst_18829__$1);

(statearr_18922[(17)] = inst_18837);

(statearr_18922[(14)] = inst_18830__$1);

(statearr_18922[(15)] = inst_18828__$1);

(statearr_18922[(16)] = inst_18827__$1);

return statearr_18922;
})();
var statearr_18923_18957 = state_18886__$1;
(statearr_18923_18957[(2)] = null);

(statearr_18923_18957[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18887 === (18))){
var inst_18856 = (state_18886[(2)]);
var state_18886__$1 = state_18886;
var statearr_18924_18958 = state_18886__$1;
(statearr_18924_18958[(2)] = inst_18856);

(statearr_18924_18958[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18887 === (8))){
var inst_18829 = (state_18886[(12)]);
var inst_18830 = (state_18886[(14)]);
var inst_18832 = (inst_18830 < inst_18829);
var inst_18833 = inst_18832;
var state_18886__$1 = state_18886;
if(cljs.core.truth_(inst_18833)){
var statearr_18925_18959 = state_18886__$1;
(statearr_18925_18959[(1)] = (10));

} else {
var statearr_18926_18960 = state_18886__$1;
(statearr_18926_18960[(1)] = (11));

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
});})(c__15830__auto___18932,mults,ensure_mult,p))
;
return ((function (switch__15647__auto__,c__15830__auto___18932,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15648__auto__ = null;
var cljs$core$async$state_machine__15648__auto____0 = (function (){
var statearr_18927 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18927[(0)] = cljs$core$async$state_machine__15648__auto__);

(statearr_18927[(1)] = (1));

return statearr_18927;
});
var cljs$core$async$state_machine__15648__auto____1 = (function (state_18886){
while(true){
var ret_value__15649__auto__ = (function (){try{while(true){
var result__15650__auto__ = switch__15647__auto__(state_18886);
if(cljs.core.keyword_identical_QMARK_(result__15650__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15650__auto__;
}
break;
}
}catch (e18928){if((e18928 instanceof Object)){
var ex__15651__auto__ = e18928;
var statearr_18929_18961 = state_18886;
(statearr_18929_18961[(5)] = ex__15651__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18886);

return cljs.core.cst$kw$recur;
} else {
throw e18928;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15649__auto__,cljs.core.cst$kw$recur)){
var G__18962 = state_18886;
state_18886 = G__18962;
continue;
} else {
return ret_value__15649__auto__;
}
break;
}
});
cljs$core$async$state_machine__15648__auto__ = function(state_18886){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15648__auto____1.call(this,state_18886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15648__auto____0;
cljs$core$async$state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15648__auto____1;
return cljs$core$async$state_machine__15648__auto__;
})()
;})(switch__15647__auto__,c__15830__auto___18932,mults,ensure_mult,p))
})();
var state__15832__auto__ = (function (){var statearr_18930 = (f__15831__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15831__auto__.cljs$core$IFn$_invoke$arity$0() : f__15831__auto__.call(null));
(statearr_18930[(6)] = c__15830__auto___18932);

return statearr_18930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15832__auto__);
});})(c__15830__auto___18932,mults,ensure_mult,p))
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
var G__18964 = arguments.length;
switch (G__18964) {
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
var G__18967 = arguments.length;
switch (G__18967) {
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
var G__18970 = arguments.length;
switch (G__18970) {
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
var c__15830__auto___19037 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15830__auto___19037,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15831__auto__ = (function (){var switch__15647__auto__ = ((function (c__15830__auto___19037,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19009){
var state_val_19010 = (state_19009[(1)]);
if((state_val_19010 === (7))){
var state_19009__$1 = state_19009;
var statearr_19011_19038 = state_19009__$1;
(statearr_19011_19038[(2)] = null);

(statearr_19011_19038[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19010 === (1))){
var state_19009__$1 = state_19009;
var statearr_19012_19039 = state_19009__$1;
(statearr_19012_19039[(2)] = null);

(statearr_19012_19039[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19010 === (4))){
var inst_18973 = (state_19009[(7)]);
var inst_18975 = (inst_18973 < cnt);
var state_19009__$1 = state_19009;
if(cljs.core.truth_(inst_18975)){
var statearr_19013_19040 = state_19009__$1;
(statearr_19013_19040[(1)] = (6));

} else {
var statearr_19014_19041 = state_19009__$1;
(statearr_19014_19041[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19010 === (15))){
var inst_19005 = (state_19009[(2)]);
var state_19009__$1 = state_19009;
var statearr_19015_19042 = state_19009__$1;
(statearr_19015_19042[(2)] = inst_19005);

(statearr_19015_19042[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19010 === (13))){
var inst_18998 = cljs.core.async.close_BANG_(out);
var state_19009__$1 = state_19009;
var statearr_19016_19043 = state_19009__$1;
(statearr_19016_19043[(2)] = inst_18998);

(statearr_19016_19043[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19010 === (6))){
var state_19009__$1 = state_19009;
var statearr_19017_19044 = state_19009__$1;
(statearr_19017_19044[(2)] = null);

(statearr_19017_19044[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19010 === (3))){
var inst_19007 = (state_19009[(2)]);
var state_19009__$1 = state_19009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19009__$1,inst_19007);
} else {
if((state_val_19010 === (12))){
var inst_18995 = (state_19009[(8)]);
var inst_18995__$1 = (state_19009[(2)]);
var inst_18996 = cljs.core.some(cljs.core.nil_QMARK_,inst_18995__$1);
var state_19009__$1 = (function (){var statearr_19018 = state_19009;
(statearr_19018[(8)] = inst_18995__$1);

return statearr_19018;
})();
if(cljs.core.truth_(inst_18996)){
var statearr_19019_19045 = state_19009__$1;
(statearr_19019_19045[(1)] = (13));

} else {
var statearr_19020_19046 = state_19009__$1;
(statearr_19020_19046[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19010 === (2))){
var inst_18972 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18973 = (0);
var state_19009__$1 = (function (){var statearr_19021 = state_19009;
(statearr_19021[(9)] = inst_18972);

(statearr_19021[(7)] = inst_18973);

return statearr_19021;
})();
var statearr_19022_19047 = state_19009__$1;
(statearr_19022_19047[(2)] = null);

(statearr_19022_19047[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19010 === (11))){
var inst_18973 = (state_19009[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19009,(10),Object,null,(9));
var inst_18982 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18973) : chs__$1.call(null,inst_18973));
var inst_18983 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18973) : done.call(null,inst_18973));
var inst_18984 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18982,inst_18983);
var state_19009__$1 = state_19009;
var statearr_19023_19048 = state_19009__$1;
(statearr_19023_19048[(2)] = inst_18984);


cljs.core.async.impl.ioc_helpers.process_exception(state_19009__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19010 === (9))){
var inst_18973 = (state_19009[(7)]);
var inst_18986 = (state_19009[(2)]);
var inst_18987 = (inst_18973 + (1));
var inst_18973__$1 = inst_18987;
var state_19009__$1 = (function (){var statearr_19024 = state_19009;
(statearr_19024[(10)] = inst_18986);

(statearr_19024[(7)] = inst_18973__$1);

return statearr_19024;
})();
var statearr_19025_19049 = state_19009__$1;
(statearr_19025_19049[(2)] = null);

(statearr_19025_19049[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19010 === (5))){
var inst_18993 = (state_19009[(2)]);
var state_19009__$1 = (function (){var statearr_19026 = state_19009;
(statearr_19026[(11)] = inst_18993);

return statearr_19026;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19009__$1,(12),dchan);
} else {
if((state_val_19010 === (14))){
var inst_18995 = (state_19009[(8)]);
var inst_19000 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18995);
var state_19009__$1 = state_19009;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19009__$1,(16),out,inst_19000);
} else {
if((state_val_19010 === (16))){
var inst_19002 = (state_19009[(2)]);
var state_19009__$1 = (function (){var statearr_19027 = state_19009;
(statearr_19027[(12)] = inst_19002);

return statearr_19027;
})();
var statearr_19028_19050 = state_19009__$1;
(statearr_19028_19050[(2)] = null);

(statearr_19028_19050[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19010 === (10))){
var inst_18977 = (state_19009[(2)]);
var inst_18978 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19009__$1 = (function (){var statearr_19029 = state_19009;
(statearr_19029[(13)] = inst_18977);

return statearr_19029;
})();
var statearr_19030_19051 = state_19009__$1;
(statearr_19030_19051[(2)] = inst_18978);


cljs.core.async.impl.ioc_helpers.process_exception(state_19009__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19010 === (8))){
var inst_18991 = (state_19009[(2)]);
var state_19009__$1 = state_19009;
var statearr_19031_19052 = state_19009__$1;
(statearr_19031_19052[(2)] = inst_18991);

(statearr_19031_19052[(1)] = (5));


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
});})(c__15830__auto___19037,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15647__auto__,c__15830__auto___19037,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15648__auto__ = null;
var cljs$core$async$state_machine__15648__auto____0 = (function (){
var statearr_19032 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19032[(0)] = cljs$core$async$state_machine__15648__auto__);

(statearr_19032[(1)] = (1));

return statearr_19032;
});
var cljs$core$async$state_machine__15648__auto____1 = (function (state_19009){
while(true){
var ret_value__15649__auto__ = (function (){try{while(true){
var result__15650__auto__ = switch__15647__auto__(state_19009);
if(cljs.core.keyword_identical_QMARK_(result__15650__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15650__auto__;
}
break;
}
}catch (e19033){if((e19033 instanceof Object)){
var ex__15651__auto__ = e19033;
var statearr_19034_19053 = state_19009;
(statearr_19034_19053[(5)] = ex__15651__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19009);

return cljs.core.cst$kw$recur;
} else {
throw e19033;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15649__auto__,cljs.core.cst$kw$recur)){
var G__19054 = state_19009;
state_19009 = G__19054;
continue;
} else {
return ret_value__15649__auto__;
}
break;
}
});
cljs$core$async$state_machine__15648__auto__ = function(state_19009){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15648__auto____1.call(this,state_19009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15648__auto____0;
cljs$core$async$state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15648__auto____1;
return cljs$core$async$state_machine__15648__auto__;
})()
;})(switch__15647__auto__,c__15830__auto___19037,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15832__auto__ = (function (){var statearr_19035 = (f__15831__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15831__auto__.cljs$core$IFn$_invoke$arity$0() : f__15831__auto__.call(null));
(statearr_19035[(6)] = c__15830__auto___19037);

return statearr_19035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15832__auto__);
});})(c__15830__auto___19037,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__19057 = arguments.length;
switch (G__19057) {
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
var c__15830__auto___19111 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15830__auto___19111,out){
return (function (){
var f__15831__auto__ = (function (){var switch__15647__auto__ = ((function (c__15830__auto___19111,out){
return (function (state_19089){
var state_val_19090 = (state_19089[(1)]);
if((state_val_19090 === (7))){
var inst_19069 = (state_19089[(7)]);
var inst_19068 = (state_19089[(8)]);
var inst_19068__$1 = (state_19089[(2)]);
var inst_19069__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19068__$1,(0),null);
var inst_19070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19068__$1,(1),null);
var inst_19071 = (inst_19069__$1 == null);
var state_19089__$1 = (function (){var statearr_19091 = state_19089;
(statearr_19091[(7)] = inst_19069__$1);

(statearr_19091[(9)] = inst_19070);

(statearr_19091[(8)] = inst_19068__$1);

return statearr_19091;
})();
if(cljs.core.truth_(inst_19071)){
var statearr_19092_19112 = state_19089__$1;
(statearr_19092_19112[(1)] = (8));

} else {
var statearr_19093_19113 = state_19089__$1;
(statearr_19093_19113[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19090 === (1))){
var inst_19058 = cljs.core.vec(chs);
var inst_19059 = inst_19058;
var state_19089__$1 = (function (){var statearr_19094 = state_19089;
(statearr_19094[(10)] = inst_19059);

return statearr_19094;
})();
var statearr_19095_19114 = state_19089__$1;
(statearr_19095_19114[(2)] = null);

(statearr_19095_19114[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19090 === (4))){
var inst_19059 = (state_19089[(10)]);
var state_19089__$1 = state_19089;
return cljs.core.async.ioc_alts_BANG_(state_19089__$1,(7),inst_19059);
} else {
if((state_val_19090 === (6))){
var inst_19085 = (state_19089[(2)]);
var state_19089__$1 = state_19089;
var statearr_19096_19115 = state_19089__$1;
(statearr_19096_19115[(2)] = inst_19085);

(statearr_19096_19115[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19090 === (3))){
var inst_19087 = (state_19089[(2)]);
var state_19089__$1 = state_19089;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19089__$1,inst_19087);
} else {
if((state_val_19090 === (2))){
var inst_19059 = (state_19089[(10)]);
var inst_19061 = cljs.core.count(inst_19059);
var inst_19062 = (inst_19061 > (0));
var state_19089__$1 = state_19089;
if(cljs.core.truth_(inst_19062)){
var statearr_19098_19116 = state_19089__$1;
(statearr_19098_19116[(1)] = (4));

} else {
var statearr_19099_19117 = state_19089__$1;
(statearr_19099_19117[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19090 === (11))){
var inst_19059 = (state_19089[(10)]);
var inst_19078 = (state_19089[(2)]);
var tmp19097 = inst_19059;
var inst_19059__$1 = tmp19097;
var state_19089__$1 = (function (){var statearr_19100 = state_19089;
(statearr_19100[(11)] = inst_19078);

(statearr_19100[(10)] = inst_19059__$1);

return statearr_19100;
})();
var statearr_19101_19118 = state_19089__$1;
(statearr_19101_19118[(2)] = null);

(statearr_19101_19118[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19090 === (9))){
var inst_19069 = (state_19089[(7)]);
var state_19089__$1 = state_19089;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19089__$1,(11),out,inst_19069);
} else {
if((state_val_19090 === (5))){
var inst_19083 = cljs.core.async.close_BANG_(out);
var state_19089__$1 = state_19089;
var statearr_19102_19119 = state_19089__$1;
(statearr_19102_19119[(2)] = inst_19083);

(statearr_19102_19119[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19090 === (10))){
var inst_19081 = (state_19089[(2)]);
var state_19089__$1 = state_19089;
var statearr_19103_19120 = state_19089__$1;
(statearr_19103_19120[(2)] = inst_19081);

(statearr_19103_19120[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19090 === (8))){
var inst_19069 = (state_19089[(7)]);
var inst_19070 = (state_19089[(9)]);
var inst_19059 = (state_19089[(10)]);
var inst_19068 = (state_19089[(8)]);
var inst_19073 = (function (){var cs = inst_19059;
var vec__19064 = inst_19068;
var v = inst_19069;
var c = inst_19070;
return ((function (cs,vec__19064,v,c,inst_19069,inst_19070,inst_19059,inst_19068,state_val_19090,c__15830__auto___19111,out){
return (function (p1__19055_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19055_SHARP_);
});
;})(cs,vec__19064,v,c,inst_19069,inst_19070,inst_19059,inst_19068,state_val_19090,c__15830__auto___19111,out))
})();
var inst_19074 = cljs.core.filterv(inst_19073,inst_19059);
var inst_19059__$1 = inst_19074;
var state_19089__$1 = (function (){var statearr_19104 = state_19089;
(statearr_19104[(10)] = inst_19059__$1);

return statearr_19104;
})();
var statearr_19105_19121 = state_19089__$1;
(statearr_19105_19121[(2)] = null);

(statearr_19105_19121[(1)] = (2));


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
});})(c__15830__auto___19111,out))
;
return ((function (switch__15647__auto__,c__15830__auto___19111,out){
return (function() {
var cljs$core$async$state_machine__15648__auto__ = null;
var cljs$core$async$state_machine__15648__auto____0 = (function (){
var statearr_19106 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19106[(0)] = cljs$core$async$state_machine__15648__auto__);

(statearr_19106[(1)] = (1));

return statearr_19106;
});
var cljs$core$async$state_machine__15648__auto____1 = (function (state_19089){
while(true){
var ret_value__15649__auto__ = (function (){try{while(true){
var result__15650__auto__ = switch__15647__auto__(state_19089);
if(cljs.core.keyword_identical_QMARK_(result__15650__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15650__auto__;
}
break;
}
}catch (e19107){if((e19107 instanceof Object)){
var ex__15651__auto__ = e19107;
var statearr_19108_19122 = state_19089;
(statearr_19108_19122[(5)] = ex__15651__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19089);

return cljs.core.cst$kw$recur;
} else {
throw e19107;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15649__auto__,cljs.core.cst$kw$recur)){
var G__19123 = state_19089;
state_19089 = G__19123;
continue;
} else {
return ret_value__15649__auto__;
}
break;
}
});
cljs$core$async$state_machine__15648__auto__ = function(state_19089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15648__auto____1.call(this,state_19089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15648__auto____0;
cljs$core$async$state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15648__auto____1;
return cljs$core$async$state_machine__15648__auto__;
})()
;})(switch__15647__auto__,c__15830__auto___19111,out))
})();
var state__15832__auto__ = (function (){var statearr_19109 = (f__15831__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15831__auto__.cljs$core$IFn$_invoke$arity$0() : f__15831__auto__.call(null));
(statearr_19109[(6)] = c__15830__auto___19111);

return statearr_19109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15832__auto__);
});})(c__15830__auto___19111,out))
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
var G__19125 = arguments.length;
switch (G__19125) {
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
var c__15830__auto___19170 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15830__auto___19170,out){
return (function (){
var f__15831__auto__ = (function (){var switch__15647__auto__ = ((function (c__15830__auto___19170,out){
return (function (state_19149){
var state_val_19150 = (state_19149[(1)]);
if((state_val_19150 === (7))){
var inst_19131 = (state_19149[(7)]);
var inst_19131__$1 = (state_19149[(2)]);
var inst_19132 = (inst_19131__$1 == null);
var inst_19133 = cljs.core.not(inst_19132);
var state_19149__$1 = (function (){var statearr_19151 = state_19149;
(statearr_19151[(7)] = inst_19131__$1);

return statearr_19151;
})();
if(inst_19133){
var statearr_19152_19171 = state_19149__$1;
(statearr_19152_19171[(1)] = (8));

} else {
var statearr_19153_19172 = state_19149__$1;
(statearr_19153_19172[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19150 === (1))){
var inst_19126 = (0);
var state_19149__$1 = (function (){var statearr_19154 = state_19149;
(statearr_19154[(8)] = inst_19126);

return statearr_19154;
})();
var statearr_19155_19173 = state_19149__$1;
(statearr_19155_19173[(2)] = null);

(statearr_19155_19173[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19150 === (4))){
var state_19149__$1 = state_19149;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19149__$1,(7),ch);
} else {
if((state_val_19150 === (6))){
var inst_19144 = (state_19149[(2)]);
var state_19149__$1 = state_19149;
var statearr_19156_19174 = state_19149__$1;
(statearr_19156_19174[(2)] = inst_19144);

(statearr_19156_19174[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19150 === (3))){
var inst_19146 = (state_19149[(2)]);
var inst_19147 = cljs.core.async.close_BANG_(out);
var state_19149__$1 = (function (){var statearr_19157 = state_19149;
(statearr_19157[(9)] = inst_19146);

return statearr_19157;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19149__$1,inst_19147);
} else {
if((state_val_19150 === (2))){
var inst_19126 = (state_19149[(8)]);
var inst_19128 = (inst_19126 < n);
var state_19149__$1 = state_19149;
if(cljs.core.truth_(inst_19128)){
var statearr_19158_19175 = state_19149__$1;
(statearr_19158_19175[(1)] = (4));

} else {
var statearr_19159_19176 = state_19149__$1;
(statearr_19159_19176[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19150 === (11))){
var inst_19126 = (state_19149[(8)]);
var inst_19136 = (state_19149[(2)]);
var inst_19137 = (inst_19126 + (1));
var inst_19126__$1 = inst_19137;
var state_19149__$1 = (function (){var statearr_19160 = state_19149;
(statearr_19160[(8)] = inst_19126__$1);

(statearr_19160[(10)] = inst_19136);

return statearr_19160;
})();
var statearr_19161_19177 = state_19149__$1;
(statearr_19161_19177[(2)] = null);

(statearr_19161_19177[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19150 === (9))){
var state_19149__$1 = state_19149;
var statearr_19162_19178 = state_19149__$1;
(statearr_19162_19178[(2)] = null);

(statearr_19162_19178[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19150 === (5))){
var state_19149__$1 = state_19149;
var statearr_19163_19179 = state_19149__$1;
(statearr_19163_19179[(2)] = null);

(statearr_19163_19179[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19150 === (10))){
var inst_19141 = (state_19149[(2)]);
var state_19149__$1 = state_19149;
var statearr_19164_19180 = state_19149__$1;
(statearr_19164_19180[(2)] = inst_19141);

(statearr_19164_19180[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19150 === (8))){
var inst_19131 = (state_19149[(7)]);
var state_19149__$1 = state_19149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19149__$1,(11),out,inst_19131);
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
});})(c__15830__auto___19170,out))
;
return ((function (switch__15647__auto__,c__15830__auto___19170,out){
return (function() {
var cljs$core$async$state_machine__15648__auto__ = null;
var cljs$core$async$state_machine__15648__auto____0 = (function (){
var statearr_19165 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19165[(0)] = cljs$core$async$state_machine__15648__auto__);

(statearr_19165[(1)] = (1));

return statearr_19165;
});
var cljs$core$async$state_machine__15648__auto____1 = (function (state_19149){
while(true){
var ret_value__15649__auto__ = (function (){try{while(true){
var result__15650__auto__ = switch__15647__auto__(state_19149);
if(cljs.core.keyword_identical_QMARK_(result__15650__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15650__auto__;
}
break;
}
}catch (e19166){if((e19166 instanceof Object)){
var ex__15651__auto__ = e19166;
var statearr_19167_19181 = state_19149;
(statearr_19167_19181[(5)] = ex__15651__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19149);

return cljs.core.cst$kw$recur;
} else {
throw e19166;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15649__auto__,cljs.core.cst$kw$recur)){
var G__19182 = state_19149;
state_19149 = G__19182;
continue;
} else {
return ret_value__15649__auto__;
}
break;
}
});
cljs$core$async$state_machine__15648__auto__ = function(state_19149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15648__auto____1.call(this,state_19149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15648__auto____0;
cljs$core$async$state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15648__auto____1;
return cljs$core$async$state_machine__15648__auto__;
})()
;})(switch__15647__auto__,c__15830__auto___19170,out))
})();
var state__15832__auto__ = (function (){var statearr_19168 = (f__15831__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15831__auto__.cljs$core$IFn$_invoke$arity$0() : f__15831__auto__.call(null));
(statearr_19168[(6)] = c__15830__auto___19170);

return statearr_19168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15832__auto__);
});})(c__15830__auto___19170,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19184 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19184 = (function (f,ch,meta19185){
this.f = f;
this.ch = ch;
this.meta19185 = meta19185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19186,meta19185__$1){
var self__ = this;
var _19186__$1 = this;
return (new cljs.core.async.t_cljs$core$async19184(self__.f,self__.ch,meta19185__$1));
});

cljs.core.async.t_cljs$core$async19184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19186){
var self__ = this;
var _19186__$1 = this;
return self__.meta19185;
});

cljs.core.async.t_cljs$core$async19184.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19184.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19184.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19184.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19184.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19187 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19187 = (function (f,ch,meta19185,_,fn1,meta19188){
this.f = f;
this.ch = ch;
this.meta19185 = meta19185;
this._ = _;
this.fn1 = fn1;
this.meta19188 = meta19188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19189,meta19188__$1){
var self__ = this;
var _19189__$1 = this;
return (new cljs.core.async.t_cljs$core$async19187(self__.f,self__.ch,self__.meta19185,self__._,self__.fn1,meta19188__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19187.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19189){
var self__ = this;
var _19189__$1 = this;
return self__.meta19188;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19187.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19187.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19187.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19187.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19183_SHARP_){
var G__19190 = (((p1__19183_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19183_SHARP_) : self__.f.call(null,p1__19183_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19190) : f1.call(null,G__19190));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19187.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19185,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async19184], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta19188], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19187.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19187";

cljs.core.async.t_cljs$core$async19187.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19187");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19187.
 */
cljs.core.async.__GT_t_cljs$core$async19187 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19187(f__$1,ch__$1,meta19185__$1,___$2,fn1__$1,meta19188){
return (new cljs.core.async.t_cljs$core$async19187(f__$1,ch__$1,meta19185__$1,___$2,fn1__$1,meta19188));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19187(self__.f,self__.ch,self__.meta19185,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19191 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19191) : self__.f.call(null,G__19191));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async19184.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19184.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19185], null);
});

cljs.core.async.t_cljs$core$async19184.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19184";

cljs.core.async.t_cljs$core$async19184.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19184");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19184.
 */
cljs.core.async.__GT_t_cljs$core$async19184 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19184(f__$1,ch__$1,meta19185){
return (new cljs.core.async.t_cljs$core$async19184(f__$1,ch__$1,meta19185));
});

}

return (new cljs.core.async.t_cljs$core$async19184(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19192 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19192 = (function (f,ch,meta19193){
this.f = f;
this.ch = ch;
this.meta19193 = meta19193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19194,meta19193__$1){
var self__ = this;
var _19194__$1 = this;
return (new cljs.core.async.t_cljs$core$async19192(self__.f,self__.ch,meta19193__$1));
});

cljs.core.async.t_cljs$core$async19192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19194){
var self__ = this;
var _19194__$1 = this;
return self__.meta19193;
});

cljs.core.async.t_cljs$core$async19192.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19192.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19192.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19192.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19192.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19192.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async19192.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19193], null);
});

cljs.core.async.t_cljs$core$async19192.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19192.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19192";

cljs.core.async.t_cljs$core$async19192.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19192");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19192.
 */
cljs.core.async.__GT_t_cljs$core$async19192 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19192(f__$1,ch__$1,meta19193){
return (new cljs.core.async.t_cljs$core$async19192(f__$1,ch__$1,meta19193));
});

}

return (new cljs.core.async.t_cljs$core$async19192(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19195 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19195 = (function (p,ch,meta19196){
this.p = p;
this.ch = ch;
this.meta19196 = meta19196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19197,meta19196__$1){
var self__ = this;
var _19197__$1 = this;
return (new cljs.core.async.t_cljs$core$async19195(self__.p,self__.ch,meta19196__$1));
});

cljs.core.async.t_cljs$core$async19195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19197){
var self__ = this;
var _19197__$1 = this;
return self__.meta19196;
});

cljs.core.async.t_cljs$core$async19195.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19195.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19195.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19195.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19195.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19195.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19195.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19196], null);
});

cljs.core.async.t_cljs$core$async19195.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19195";

cljs.core.async.t_cljs$core$async19195.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19195");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19195.
 */
cljs.core.async.__GT_t_cljs$core$async19195 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19195(p__$1,ch__$1,meta19196){
return (new cljs.core.async.t_cljs$core$async19195(p__$1,ch__$1,meta19196));
});

}

return (new cljs.core.async.t_cljs$core$async19195(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19199 = arguments.length;
switch (G__19199) {
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
var c__15830__auto___19239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15830__auto___19239,out){
return (function (){
var f__15831__auto__ = (function (){var switch__15647__auto__ = ((function (c__15830__auto___19239,out){
return (function (state_19220){
var state_val_19221 = (state_19220[(1)]);
if((state_val_19221 === (7))){
var inst_19216 = (state_19220[(2)]);
var state_19220__$1 = state_19220;
var statearr_19222_19240 = state_19220__$1;
(statearr_19222_19240[(2)] = inst_19216);

(statearr_19222_19240[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19221 === (1))){
var state_19220__$1 = state_19220;
var statearr_19223_19241 = state_19220__$1;
(statearr_19223_19241[(2)] = null);

(statearr_19223_19241[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19221 === (4))){
var inst_19202 = (state_19220[(7)]);
var inst_19202__$1 = (state_19220[(2)]);
var inst_19203 = (inst_19202__$1 == null);
var state_19220__$1 = (function (){var statearr_19224 = state_19220;
(statearr_19224[(7)] = inst_19202__$1);

return statearr_19224;
})();
if(cljs.core.truth_(inst_19203)){
var statearr_19225_19242 = state_19220__$1;
(statearr_19225_19242[(1)] = (5));

} else {
var statearr_19226_19243 = state_19220__$1;
(statearr_19226_19243[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19221 === (6))){
var inst_19202 = (state_19220[(7)]);
var inst_19207 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19202) : p.call(null,inst_19202));
var state_19220__$1 = state_19220;
if(cljs.core.truth_(inst_19207)){
var statearr_19227_19244 = state_19220__$1;
(statearr_19227_19244[(1)] = (8));

} else {
var statearr_19228_19245 = state_19220__$1;
(statearr_19228_19245[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19221 === (3))){
var inst_19218 = (state_19220[(2)]);
var state_19220__$1 = state_19220;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19220__$1,inst_19218);
} else {
if((state_val_19221 === (2))){
var state_19220__$1 = state_19220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19220__$1,(4),ch);
} else {
if((state_val_19221 === (11))){
var inst_19210 = (state_19220[(2)]);
var state_19220__$1 = state_19220;
var statearr_19229_19246 = state_19220__$1;
(statearr_19229_19246[(2)] = inst_19210);

(statearr_19229_19246[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19221 === (9))){
var state_19220__$1 = state_19220;
var statearr_19230_19247 = state_19220__$1;
(statearr_19230_19247[(2)] = null);

(statearr_19230_19247[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19221 === (5))){
var inst_19205 = cljs.core.async.close_BANG_(out);
var state_19220__$1 = state_19220;
var statearr_19231_19248 = state_19220__$1;
(statearr_19231_19248[(2)] = inst_19205);

(statearr_19231_19248[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19221 === (10))){
var inst_19213 = (state_19220[(2)]);
var state_19220__$1 = (function (){var statearr_19232 = state_19220;
(statearr_19232[(8)] = inst_19213);

return statearr_19232;
})();
var statearr_19233_19249 = state_19220__$1;
(statearr_19233_19249[(2)] = null);

(statearr_19233_19249[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19221 === (8))){
var inst_19202 = (state_19220[(7)]);
var state_19220__$1 = state_19220;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19220__$1,(11),out,inst_19202);
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
});})(c__15830__auto___19239,out))
;
return ((function (switch__15647__auto__,c__15830__auto___19239,out){
return (function() {
var cljs$core$async$state_machine__15648__auto__ = null;
var cljs$core$async$state_machine__15648__auto____0 = (function (){
var statearr_19234 = [null,null,null,null,null,null,null,null,null];
(statearr_19234[(0)] = cljs$core$async$state_machine__15648__auto__);

(statearr_19234[(1)] = (1));

return statearr_19234;
});
var cljs$core$async$state_machine__15648__auto____1 = (function (state_19220){
while(true){
var ret_value__15649__auto__ = (function (){try{while(true){
var result__15650__auto__ = switch__15647__auto__(state_19220);
if(cljs.core.keyword_identical_QMARK_(result__15650__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15650__auto__;
}
break;
}
}catch (e19235){if((e19235 instanceof Object)){
var ex__15651__auto__ = e19235;
var statearr_19236_19250 = state_19220;
(statearr_19236_19250[(5)] = ex__15651__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19220);

return cljs.core.cst$kw$recur;
} else {
throw e19235;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15649__auto__,cljs.core.cst$kw$recur)){
var G__19251 = state_19220;
state_19220 = G__19251;
continue;
} else {
return ret_value__15649__auto__;
}
break;
}
});
cljs$core$async$state_machine__15648__auto__ = function(state_19220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15648__auto____1.call(this,state_19220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15648__auto____0;
cljs$core$async$state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15648__auto____1;
return cljs$core$async$state_machine__15648__auto__;
})()
;})(switch__15647__auto__,c__15830__auto___19239,out))
})();
var state__15832__auto__ = (function (){var statearr_19237 = (f__15831__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15831__auto__.cljs$core$IFn$_invoke$arity$0() : f__15831__auto__.call(null));
(statearr_19237[(6)] = c__15830__auto___19239);

return statearr_19237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15832__auto__);
});})(c__15830__auto___19239,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19253 = arguments.length;
switch (G__19253) {
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
var c__15830__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15830__auto__){
return (function (){
var f__15831__auto__ = (function (){var switch__15647__auto__ = ((function (c__15830__auto__){
return (function (state_19316){
var state_val_19317 = (state_19316[(1)]);
if((state_val_19317 === (7))){
var inst_19312 = (state_19316[(2)]);
var state_19316__$1 = state_19316;
var statearr_19318_19356 = state_19316__$1;
(statearr_19318_19356[(2)] = inst_19312);

(statearr_19318_19356[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19317 === (20))){
var inst_19282 = (state_19316[(7)]);
var inst_19293 = (state_19316[(2)]);
var inst_19294 = cljs.core.next(inst_19282);
var inst_19268 = inst_19294;
var inst_19269 = null;
var inst_19270 = (0);
var inst_19271 = (0);
var state_19316__$1 = (function (){var statearr_19319 = state_19316;
(statearr_19319[(8)] = inst_19268);

(statearr_19319[(9)] = inst_19293);

(statearr_19319[(10)] = inst_19269);

(statearr_19319[(11)] = inst_19271);

(statearr_19319[(12)] = inst_19270);

return statearr_19319;
})();
var statearr_19320_19357 = state_19316__$1;
(statearr_19320_19357[(2)] = null);

(statearr_19320_19357[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19317 === (1))){
var state_19316__$1 = state_19316;
var statearr_19321_19358 = state_19316__$1;
(statearr_19321_19358[(2)] = null);

(statearr_19321_19358[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19317 === (4))){
var inst_19257 = (state_19316[(13)]);
var inst_19257__$1 = (state_19316[(2)]);
var inst_19258 = (inst_19257__$1 == null);
var state_19316__$1 = (function (){var statearr_19322 = state_19316;
(statearr_19322[(13)] = inst_19257__$1);

return statearr_19322;
})();
if(cljs.core.truth_(inst_19258)){
var statearr_19323_19359 = state_19316__$1;
(statearr_19323_19359[(1)] = (5));

} else {
var statearr_19324_19360 = state_19316__$1;
(statearr_19324_19360[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19317 === (15))){
var state_19316__$1 = state_19316;
var statearr_19328_19361 = state_19316__$1;
(statearr_19328_19361[(2)] = null);

(statearr_19328_19361[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19317 === (21))){
var state_19316__$1 = state_19316;
var statearr_19329_19362 = state_19316__$1;
(statearr_19329_19362[(2)] = null);

(statearr_19329_19362[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19317 === (13))){
var inst_19268 = (state_19316[(8)]);
var inst_19269 = (state_19316[(10)]);
var inst_19271 = (state_19316[(11)]);
var inst_19270 = (state_19316[(12)]);
var inst_19278 = (state_19316[(2)]);
var inst_19279 = (inst_19271 + (1));
var tmp19325 = inst_19268;
var tmp19326 = inst_19269;
var tmp19327 = inst_19270;
var inst_19268__$1 = tmp19325;
var inst_19269__$1 = tmp19326;
var inst_19270__$1 = tmp19327;
var inst_19271__$1 = inst_19279;
var state_19316__$1 = (function (){var statearr_19330 = state_19316;
(statearr_19330[(8)] = inst_19268__$1);

(statearr_19330[(10)] = inst_19269__$1);

(statearr_19330[(14)] = inst_19278);

(statearr_19330[(11)] = inst_19271__$1);

(statearr_19330[(12)] = inst_19270__$1);

return statearr_19330;
})();
var statearr_19331_19363 = state_19316__$1;
(statearr_19331_19363[(2)] = null);

(statearr_19331_19363[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19317 === (22))){
var state_19316__$1 = state_19316;
var statearr_19332_19364 = state_19316__$1;
(statearr_19332_19364[(2)] = null);

(statearr_19332_19364[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19317 === (6))){
var inst_19257 = (state_19316[(13)]);
var inst_19266 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19257) : f.call(null,inst_19257));
var inst_19267 = cljs.core.seq(inst_19266);
var inst_19268 = inst_19267;
var inst_19269 = null;
var inst_19270 = (0);
var inst_19271 = (0);
var state_19316__$1 = (function (){var statearr_19333 = state_19316;
(statearr_19333[(8)] = inst_19268);

(statearr_19333[(10)] = inst_19269);

(statearr_19333[(11)] = inst_19271);

(statearr_19333[(12)] = inst_19270);

return statearr_19333;
})();
var statearr_19334_19365 = state_19316__$1;
(statearr_19334_19365[(2)] = null);

(statearr_19334_19365[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19317 === (17))){
var inst_19282 = (state_19316[(7)]);
var inst_19286 = cljs.core.chunk_first(inst_19282);
var inst_19287 = cljs.core.chunk_rest(inst_19282);
var inst_19288 = cljs.core.count(inst_19286);
var inst_19268 = inst_19287;
var inst_19269 = inst_19286;
var inst_19270 = inst_19288;
var inst_19271 = (0);
var state_19316__$1 = (function (){var statearr_19335 = state_19316;
(statearr_19335[(8)] = inst_19268);

(statearr_19335[(10)] = inst_19269);

(statearr_19335[(11)] = inst_19271);

(statearr_19335[(12)] = inst_19270);

return statearr_19335;
})();
var statearr_19336_19366 = state_19316__$1;
(statearr_19336_19366[(2)] = null);

(statearr_19336_19366[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19317 === (3))){
var inst_19314 = (state_19316[(2)]);
var state_19316__$1 = state_19316;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19316__$1,inst_19314);
} else {
if((state_val_19317 === (12))){
var inst_19302 = (state_19316[(2)]);
var state_19316__$1 = state_19316;
var statearr_19337_19367 = state_19316__$1;
(statearr_19337_19367[(2)] = inst_19302);

(statearr_19337_19367[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19317 === (2))){
var state_19316__$1 = state_19316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19316__$1,(4),in$);
} else {
if((state_val_19317 === (23))){
var inst_19310 = (state_19316[(2)]);
var state_19316__$1 = state_19316;
var statearr_19338_19368 = state_19316__$1;
(statearr_19338_19368[(2)] = inst_19310);

(statearr_19338_19368[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19317 === (19))){
var inst_19297 = (state_19316[(2)]);
var state_19316__$1 = state_19316;
var statearr_19339_19369 = state_19316__$1;
(statearr_19339_19369[(2)] = inst_19297);

(statearr_19339_19369[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19317 === (11))){
var inst_19282 = (state_19316[(7)]);
var inst_19268 = (state_19316[(8)]);
var inst_19282__$1 = cljs.core.seq(inst_19268);
var state_19316__$1 = (function (){var statearr_19340 = state_19316;
(statearr_19340[(7)] = inst_19282__$1);

return statearr_19340;
})();
if(inst_19282__$1){
var statearr_19341_19370 = state_19316__$1;
(statearr_19341_19370[(1)] = (14));

} else {
var statearr_19342_19371 = state_19316__$1;
(statearr_19342_19371[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19317 === (9))){
var inst_19304 = (state_19316[(2)]);
var inst_19305 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19316__$1 = (function (){var statearr_19343 = state_19316;
(statearr_19343[(15)] = inst_19304);

return statearr_19343;
})();
if(cljs.core.truth_(inst_19305)){
var statearr_19344_19372 = state_19316__$1;
(statearr_19344_19372[(1)] = (21));

} else {
var statearr_19345_19373 = state_19316__$1;
(statearr_19345_19373[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19317 === (5))){
var inst_19260 = cljs.core.async.close_BANG_(out);
var state_19316__$1 = state_19316;
var statearr_19346_19374 = state_19316__$1;
(statearr_19346_19374[(2)] = inst_19260);

(statearr_19346_19374[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19317 === (14))){
var inst_19282 = (state_19316[(7)]);
var inst_19284 = cljs.core.chunked_seq_QMARK_(inst_19282);
var state_19316__$1 = state_19316;
if(inst_19284){
var statearr_19347_19375 = state_19316__$1;
(statearr_19347_19375[(1)] = (17));

} else {
var statearr_19348_19376 = state_19316__$1;
(statearr_19348_19376[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19317 === (16))){
var inst_19300 = (state_19316[(2)]);
var state_19316__$1 = state_19316;
var statearr_19349_19377 = state_19316__$1;
(statearr_19349_19377[(2)] = inst_19300);

(statearr_19349_19377[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19317 === (10))){
var inst_19269 = (state_19316[(10)]);
var inst_19271 = (state_19316[(11)]);
var inst_19276 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19269,inst_19271);
var state_19316__$1 = state_19316;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19316__$1,(13),out,inst_19276);
} else {
if((state_val_19317 === (18))){
var inst_19282 = (state_19316[(7)]);
var inst_19291 = cljs.core.first(inst_19282);
var state_19316__$1 = state_19316;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19316__$1,(20),out,inst_19291);
} else {
if((state_val_19317 === (8))){
var inst_19271 = (state_19316[(11)]);
var inst_19270 = (state_19316[(12)]);
var inst_19273 = (inst_19271 < inst_19270);
var inst_19274 = inst_19273;
var state_19316__$1 = state_19316;
if(cljs.core.truth_(inst_19274)){
var statearr_19350_19378 = state_19316__$1;
(statearr_19350_19378[(1)] = (10));

} else {
var statearr_19351_19379 = state_19316__$1;
(statearr_19351_19379[(1)] = (11));

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
});})(c__15830__auto__))
;
return ((function (switch__15647__auto__,c__15830__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15648__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15648__auto____0 = (function (){
var statearr_19352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19352[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15648__auto__);

(statearr_19352[(1)] = (1));

return statearr_19352;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15648__auto____1 = (function (state_19316){
while(true){
var ret_value__15649__auto__ = (function (){try{while(true){
var result__15650__auto__ = switch__15647__auto__(state_19316);
if(cljs.core.keyword_identical_QMARK_(result__15650__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15650__auto__;
}
break;
}
}catch (e19353){if((e19353 instanceof Object)){
var ex__15651__auto__ = e19353;
var statearr_19354_19380 = state_19316;
(statearr_19354_19380[(5)] = ex__15651__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19316);

return cljs.core.cst$kw$recur;
} else {
throw e19353;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15649__auto__,cljs.core.cst$kw$recur)){
var G__19381 = state_19316;
state_19316 = G__19381;
continue;
} else {
return ret_value__15649__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15648__auto__ = function(state_19316){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15648__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15648__auto____1.call(this,state_19316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15648__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15648__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15648__auto__;
})()
;})(switch__15647__auto__,c__15830__auto__))
})();
var state__15832__auto__ = (function (){var statearr_19355 = (f__15831__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15831__auto__.cljs$core$IFn$_invoke$arity$0() : f__15831__auto__.call(null));
(statearr_19355[(6)] = c__15830__auto__);

return statearr_19355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15832__auto__);
});})(c__15830__auto__))
);

return c__15830__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19383 = arguments.length;
switch (G__19383) {
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
var G__19386 = arguments.length;
switch (G__19386) {
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
var G__19389 = arguments.length;
switch (G__19389) {
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
var c__15830__auto___19436 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15830__auto___19436,out){
return (function (){
var f__15831__auto__ = (function (){var switch__15647__auto__ = ((function (c__15830__auto___19436,out){
return (function (state_19413){
var state_val_19414 = (state_19413[(1)]);
if((state_val_19414 === (7))){
var inst_19408 = (state_19413[(2)]);
var state_19413__$1 = state_19413;
var statearr_19415_19437 = state_19413__$1;
(statearr_19415_19437[(2)] = inst_19408);

(statearr_19415_19437[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19414 === (1))){
var inst_19390 = null;
var state_19413__$1 = (function (){var statearr_19416 = state_19413;
(statearr_19416[(7)] = inst_19390);

return statearr_19416;
})();
var statearr_19417_19438 = state_19413__$1;
(statearr_19417_19438[(2)] = null);

(statearr_19417_19438[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19414 === (4))){
var inst_19393 = (state_19413[(8)]);
var inst_19393__$1 = (state_19413[(2)]);
var inst_19394 = (inst_19393__$1 == null);
var inst_19395 = cljs.core.not(inst_19394);
var state_19413__$1 = (function (){var statearr_19418 = state_19413;
(statearr_19418[(8)] = inst_19393__$1);

return statearr_19418;
})();
if(inst_19395){
var statearr_19419_19439 = state_19413__$1;
(statearr_19419_19439[(1)] = (5));

} else {
var statearr_19420_19440 = state_19413__$1;
(statearr_19420_19440[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19414 === (6))){
var state_19413__$1 = state_19413;
var statearr_19421_19441 = state_19413__$1;
(statearr_19421_19441[(2)] = null);

(statearr_19421_19441[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19414 === (3))){
var inst_19410 = (state_19413[(2)]);
var inst_19411 = cljs.core.async.close_BANG_(out);
var state_19413__$1 = (function (){var statearr_19422 = state_19413;
(statearr_19422[(9)] = inst_19410);

return statearr_19422;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19413__$1,inst_19411);
} else {
if((state_val_19414 === (2))){
var state_19413__$1 = state_19413;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19413__$1,(4),ch);
} else {
if((state_val_19414 === (11))){
var inst_19393 = (state_19413[(8)]);
var inst_19402 = (state_19413[(2)]);
var inst_19390 = inst_19393;
var state_19413__$1 = (function (){var statearr_19423 = state_19413;
(statearr_19423[(10)] = inst_19402);

(statearr_19423[(7)] = inst_19390);

return statearr_19423;
})();
var statearr_19424_19442 = state_19413__$1;
(statearr_19424_19442[(2)] = null);

(statearr_19424_19442[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19414 === (9))){
var inst_19393 = (state_19413[(8)]);
var state_19413__$1 = state_19413;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19413__$1,(11),out,inst_19393);
} else {
if((state_val_19414 === (5))){
var inst_19390 = (state_19413[(7)]);
var inst_19393 = (state_19413[(8)]);
var inst_19397 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19393,inst_19390);
var state_19413__$1 = state_19413;
if(inst_19397){
var statearr_19426_19443 = state_19413__$1;
(statearr_19426_19443[(1)] = (8));

} else {
var statearr_19427_19444 = state_19413__$1;
(statearr_19427_19444[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19414 === (10))){
var inst_19405 = (state_19413[(2)]);
var state_19413__$1 = state_19413;
var statearr_19428_19445 = state_19413__$1;
(statearr_19428_19445[(2)] = inst_19405);

(statearr_19428_19445[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19414 === (8))){
var inst_19390 = (state_19413[(7)]);
var tmp19425 = inst_19390;
var inst_19390__$1 = tmp19425;
var state_19413__$1 = (function (){var statearr_19429 = state_19413;
(statearr_19429[(7)] = inst_19390__$1);

return statearr_19429;
})();
var statearr_19430_19446 = state_19413__$1;
(statearr_19430_19446[(2)] = null);

(statearr_19430_19446[(1)] = (2));


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
});})(c__15830__auto___19436,out))
;
return ((function (switch__15647__auto__,c__15830__auto___19436,out){
return (function() {
var cljs$core$async$state_machine__15648__auto__ = null;
var cljs$core$async$state_machine__15648__auto____0 = (function (){
var statearr_19431 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19431[(0)] = cljs$core$async$state_machine__15648__auto__);

(statearr_19431[(1)] = (1));

return statearr_19431;
});
var cljs$core$async$state_machine__15648__auto____1 = (function (state_19413){
while(true){
var ret_value__15649__auto__ = (function (){try{while(true){
var result__15650__auto__ = switch__15647__auto__(state_19413);
if(cljs.core.keyword_identical_QMARK_(result__15650__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15650__auto__;
}
break;
}
}catch (e19432){if((e19432 instanceof Object)){
var ex__15651__auto__ = e19432;
var statearr_19433_19447 = state_19413;
(statearr_19433_19447[(5)] = ex__15651__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19413);

return cljs.core.cst$kw$recur;
} else {
throw e19432;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15649__auto__,cljs.core.cst$kw$recur)){
var G__19448 = state_19413;
state_19413 = G__19448;
continue;
} else {
return ret_value__15649__auto__;
}
break;
}
});
cljs$core$async$state_machine__15648__auto__ = function(state_19413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15648__auto____1.call(this,state_19413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15648__auto____0;
cljs$core$async$state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15648__auto____1;
return cljs$core$async$state_machine__15648__auto__;
})()
;})(switch__15647__auto__,c__15830__auto___19436,out))
})();
var state__15832__auto__ = (function (){var statearr_19434 = (f__15831__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15831__auto__.cljs$core$IFn$_invoke$arity$0() : f__15831__auto__.call(null));
(statearr_19434[(6)] = c__15830__auto___19436);

return statearr_19434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15832__auto__);
});})(c__15830__auto___19436,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19450 = arguments.length;
switch (G__19450) {
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
var c__15830__auto___19516 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15830__auto___19516,out){
return (function (){
var f__15831__auto__ = (function (){var switch__15647__auto__ = ((function (c__15830__auto___19516,out){
return (function (state_19488){
var state_val_19489 = (state_19488[(1)]);
if((state_val_19489 === (7))){
var inst_19484 = (state_19488[(2)]);
var state_19488__$1 = state_19488;
var statearr_19490_19517 = state_19488__$1;
(statearr_19490_19517[(2)] = inst_19484);

(statearr_19490_19517[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19489 === (1))){
var inst_19451 = (new Array(n));
var inst_19452 = inst_19451;
var inst_19453 = (0);
var state_19488__$1 = (function (){var statearr_19491 = state_19488;
(statearr_19491[(7)] = inst_19452);

(statearr_19491[(8)] = inst_19453);

return statearr_19491;
})();
var statearr_19492_19518 = state_19488__$1;
(statearr_19492_19518[(2)] = null);

(statearr_19492_19518[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19489 === (4))){
var inst_19456 = (state_19488[(9)]);
var inst_19456__$1 = (state_19488[(2)]);
var inst_19457 = (inst_19456__$1 == null);
var inst_19458 = cljs.core.not(inst_19457);
var state_19488__$1 = (function (){var statearr_19493 = state_19488;
(statearr_19493[(9)] = inst_19456__$1);

return statearr_19493;
})();
if(inst_19458){
var statearr_19494_19519 = state_19488__$1;
(statearr_19494_19519[(1)] = (5));

} else {
var statearr_19495_19520 = state_19488__$1;
(statearr_19495_19520[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19489 === (15))){
var inst_19478 = (state_19488[(2)]);
var state_19488__$1 = state_19488;
var statearr_19496_19521 = state_19488__$1;
(statearr_19496_19521[(2)] = inst_19478);

(statearr_19496_19521[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19489 === (13))){
var state_19488__$1 = state_19488;
var statearr_19497_19522 = state_19488__$1;
(statearr_19497_19522[(2)] = null);

(statearr_19497_19522[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19489 === (6))){
var inst_19453 = (state_19488[(8)]);
var inst_19474 = (inst_19453 > (0));
var state_19488__$1 = state_19488;
if(cljs.core.truth_(inst_19474)){
var statearr_19498_19523 = state_19488__$1;
(statearr_19498_19523[(1)] = (12));

} else {
var statearr_19499_19524 = state_19488__$1;
(statearr_19499_19524[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19489 === (3))){
var inst_19486 = (state_19488[(2)]);
var state_19488__$1 = state_19488;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19488__$1,inst_19486);
} else {
if((state_val_19489 === (12))){
var inst_19452 = (state_19488[(7)]);
var inst_19476 = cljs.core.vec(inst_19452);
var state_19488__$1 = state_19488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19488__$1,(15),out,inst_19476);
} else {
if((state_val_19489 === (2))){
var state_19488__$1 = state_19488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19488__$1,(4),ch);
} else {
if((state_val_19489 === (11))){
var inst_19468 = (state_19488[(2)]);
var inst_19469 = (new Array(n));
var inst_19452 = inst_19469;
var inst_19453 = (0);
var state_19488__$1 = (function (){var statearr_19500 = state_19488;
(statearr_19500[(7)] = inst_19452);

(statearr_19500[(8)] = inst_19453);

(statearr_19500[(10)] = inst_19468);

return statearr_19500;
})();
var statearr_19501_19525 = state_19488__$1;
(statearr_19501_19525[(2)] = null);

(statearr_19501_19525[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19489 === (9))){
var inst_19452 = (state_19488[(7)]);
var inst_19466 = cljs.core.vec(inst_19452);
var state_19488__$1 = state_19488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19488__$1,(11),out,inst_19466);
} else {
if((state_val_19489 === (5))){
var inst_19452 = (state_19488[(7)]);
var inst_19453 = (state_19488[(8)]);
var inst_19456 = (state_19488[(9)]);
var inst_19461 = (state_19488[(11)]);
var inst_19460 = (inst_19452[inst_19453] = inst_19456);
var inst_19461__$1 = (inst_19453 + (1));
var inst_19462 = (inst_19461__$1 < n);
var state_19488__$1 = (function (){var statearr_19502 = state_19488;
(statearr_19502[(11)] = inst_19461__$1);

(statearr_19502[(12)] = inst_19460);

return statearr_19502;
})();
if(cljs.core.truth_(inst_19462)){
var statearr_19503_19526 = state_19488__$1;
(statearr_19503_19526[(1)] = (8));

} else {
var statearr_19504_19527 = state_19488__$1;
(statearr_19504_19527[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19489 === (14))){
var inst_19481 = (state_19488[(2)]);
var inst_19482 = cljs.core.async.close_BANG_(out);
var state_19488__$1 = (function (){var statearr_19506 = state_19488;
(statearr_19506[(13)] = inst_19481);

return statearr_19506;
})();
var statearr_19507_19528 = state_19488__$1;
(statearr_19507_19528[(2)] = inst_19482);

(statearr_19507_19528[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19489 === (10))){
var inst_19472 = (state_19488[(2)]);
var state_19488__$1 = state_19488;
var statearr_19508_19529 = state_19488__$1;
(statearr_19508_19529[(2)] = inst_19472);

(statearr_19508_19529[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19489 === (8))){
var inst_19452 = (state_19488[(7)]);
var inst_19461 = (state_19488[(11)]);
var tmp19505 = inst_19452;
var inst_19452__$1 = tmp19505;
var inst_19453 = inst_19461;
var state_19488__$1 = (function (){var statearr_19509 = state_19488;
(statearr_19509[(7)] = inst_19452__$1);

(statearr_19509[(8)] = inst_19453);

return statearr_19509;
})();
var statearr_19510_19530 = state_19488__$1;
(statearr_19510_19530[(2)] = null);

(statearr_19510_19530[(1)] = (2));


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
});})(c__15830__auto___19516,out))
;
return ((function (switch__15647__auto__,c__15830__auto___19516,out){
return (function() {
var cljs$core$async$state_machine__15648__auto__ = null;
var cljs$core$async$state_machine__15648__auto____0 = (function (){
var statearr_19511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19511[(0)] = cljs$core$async$state_machine__15648__auto__);

(statearr_19511[(1)] = (1));

return statearr_19511;
});
var cljs$core$async$state_machine__15648__auto____1 = (function (state_19488){
while(true){
var ret_value__15649__auto__ = (function (){try{while(true){
var result__15650__auto__ = switch__15647__auto__(state_19488);
if(cljs.core.keyword_identical_QMARK_(result__15650__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15650__auto__;
}
break;
}
}catch (e19512){if((e19512 instanceof Object)){
var ex__15651__auto__ = e19512;
var statearr_19513_19531 = state_19488;
(statearr_19513_19531[(5)] = ex__15651__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19488);

return cljs.core.cst$kw$recur;
} else {
throw e19512;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15649__auto__,cljs.core.cst$kw$recur)){
var G__19532 = state_19488;
state_19488 = G__19532;
continue;
} else {
return ret_value__15649__auto__;
}
break;
}
});
cljs$core$async$state_machine__15648__auto__ = function(state_19488){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15648__auto____1.call(this,state_19488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15648__auto____0;
cljs$core$async$state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15648__auto____1;
return cljs$core$async$state_machine__15648__auto__;
})()
;})(switch__15647__auto__,c__15830__auto___19516,out))
})();
var state__15832__auto__ = (function (){var statearr_19514 = (f__15831__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15831__auto__.cljs$core$IFn$_invoke$arity$0() : f__15831__auto__.call(null));
(statearr_19514[(6)] = c__15830__auto___19516);

return statearr_19514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15832__auto__);
});})(c__15830__auto___19516,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19534 = arguments.length;
switch (G__19534) {
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
var c__15830__auto___19604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15830__auto___19604,out){
return (function (){
var f__15831__auto__ = (function (){var switch__15647__auto__ = ((function (c__15830__auto___19604,out){
return (function (state_19576){
var state_val_19577 = (state_19576[(1)]);
if((state_val_19577 === (7))){
var inst_19572 = (state_19576[(2)]);
var state_19576__$1 = state_19576;
var statearr_19578_19605 = state_19576__$1;
(statearr_19578_19605[(2)] = inst_19572);

(statearr_19578_19605[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19577 === (1))){
var inst_19535 = [];
var inst_19536 = inst_19535;
var inst_19537 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_19576__$1 = (function (){var statearr_19579 = state_19576;
(statearr_19579[(7)] = inst_19537);

(statearr_19579[(8)] = inst_19536);

return statearr_19579;
})();
var statearr_19580_19606 = state_19576__$1;
(statearr_19580_19606[(2)] = null);

(statearr_19580_19606[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19577 === (4))){
var inst_19540 = (state_19576[(9)]);
var inst_19540__$1 = (state_19576[(2)]);
var inst_19541 = (inst_19540__$1 == null);
var inst_19542 = cljs.core.not(inst_19541);
var state_19576__$1 = (function (){var statearr_19581 = state_19576;
(statearr_19581[(9)] = inst_19540__$1);

return statearr_19581;
})();
if(inst_19542){
var statearr_19582_19607 = state_19576__$1;
(statearr_19582_19607[(1)] = (5));

} else {
var statearr_19583_19608 = state_19576__$1;
(statearr_19583_19608[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19577 === (15))){
var inst_19566 = (state_19576[(2)]);
var state_19576__$1 = state_19576;
var statearr_19584_19609 = state_19576__$1;
(statearr_19584_19609[(2)] = inst_19566);

(statearr_19584_19609[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19577 === (13))){
var state_19576__$1 = state_19576;
var statearr_19585_19610 = state_19576__$1;
(statearr_19585_19610[(2)] = null);

(statearr_19585_19610[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19577 === (6))){
var inst_19536 = (state_19576[(8)]);
var inst_19561 = inst_19536.length;
var inst_19562 = (inst_19561 > (0));
var state_19576__$1 = state_19576;
if(cljs.core.truth_(inst_19562)){
var statearr_19586_19611 = state_19576__$1;
(statearr_19586_19611[(1)] = (12));

} else {
var statearr_19587_19612 = state_19576__$1;
(statearr_19587_19612[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19577 === (3))){
var inst_19574 = (state_19576[(2)]);
var state_19576__$1 = state_19576;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19576__$1,inst_19574);
} else {
if((state_val_19577 === (12))){
var inst_19536 = (state_19576[(8)]);
var inst_19564 = cljs.core.vec(inst_19536);
var state_19576__$1 = state_19576;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19576__$1,(15),out,inst_19564);
} else {
if((state_val_19577 === (2))){
var state_19576__$1 = state_19576;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19576__$1,(4),ch);
} else {
if((state_val_19577 === (11))){
var inst_19544 = (state_19576[(10)]);
var inst_19540 = (state_19576[(9)]);
var inst_19554 = (state_19576[(2)]);
var inst_19555 = [];
var inst_19556 = inst_19555.push(inst_19540);
var inst_19536 = inst_19555;
var inst_19537 = inst_19544;
var state_19576__$1 = (function (){var statearr_19588 = state_19576;
(statearr_19588[(11)] = inst_19556);

(statearr_19588[(7)] = inst_19537);

(statearr_19588[(12)] = inst_19554);

(statearr_19588[(8)] = inst_19536);

return statearr_19588;
})();
var statearr_19589_19613 = state_19576__$1;
(statearr_19589_19613[(2)] = null);

(statearr_19589_19613[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19577 === (9))){
var inst_19536 = (state_19576[(8)]);
var inst_19552 = cljs.core.vec(inst_19536);
var state_19576__$1 = state_19576;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19576__$1,(11),out,inst_19552);
} else {
if((state_val_19577 === (5))){
var inst_19544 = (state_19576[(10)]);
var inst_19537 = (state_19576[(7)]);
var inst_19540 = (state_19576[(9)]);
var inst_19544__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19540) : f.call(null,inst_19540));
var inst_19545 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19544__$1,inst_19537);
var inst_19546 = cljs.core.keyword_identical_QMARK_(inst_19537,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_19547 = ((inst_19545) || (inst_19546));
var state_19576__$1 = (function (){var statearr_19590 = state_19576;
(statearr_19590[(10)] = inst_19544__$1);

return statearr_19590;
})();
if(cljs.core.truth_(inst_19547)){
var statearr_19591_19614 = state_19576__$1;
(statearr_19591_19614[(1)] = (8));

} else {
var statearr_19592_19615 = state_19576__$1;
(statearr_19592_19615[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19577 === (14))){
var inst_19569 = (state_19576[(2)]);
var inst_19570 = cljs.core.async.close_BANG_(out);
var state_19576__$1 = (function (){var statearr_19594 = state_19576;
(statearr_19594[(13)] = inst_19569);

return statearr_19594;
})();
var statearr_19595_19616 = state_19576__$1;
(statearr_19595_19616[(2)] = inst_19570);

(statearr_19595_19616[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19577 === (10))){
var inst_19559 = (state_19576[(2)]);
var state_19576__$1 = state_19576;
var statearr_19596_19617 = state_19576__$1;
(statearr_19596_19617[(2)] = inst_19559);

(statearr_19596_19617[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19577 === (8))){
var inst_19544 = (state_19576[(10)]);
var inst_19540 = (state_19576[(9)]);
var inst_19536 = (state_19576[(8)]);
var inst_19549 = inst_19536.push(inst_19540);
var tmp19593 = inst_19536;
var inst_19536__$1 = tmp19593;
var inst_19537 = inst_19544;
var state_19576__$1 = (function (){var statearr_19597 = state_19576;
(statearr_19597[(7)] = inst_19537);

(statearr_19597[(14)] = inst_19549);

(statearr_19597[(8)] = inst_19536__$1);

return statearr_19597;
})();
var statearr_19598_19618 = state_19576__$1;
(statearr_19598_19618[(2)] = null);

(statearr_19598_19618[(1)] = (2));


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
});})(c__15830__auto___19604,out))
;
return ((function (switch__15647__auto__,c__15830__auto___19604,out){
return (function() {
var cljs$core$async$state_machine__15648__auto__ = null;
var cljs$core$async$state_machine__15648__auto____0 = (function (){
var statearr_19599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19599[(0)] = cljs$core$async$state_machine__15648__auto__);

(statearr_19599[(1)] = (1));

return statearr_19599;
});
var cljs$core$async$state_machine__15648__auto____1 = (function (state_19576){
while(true){
var ret_value__15649__auto__ = (function (){try{while(true){
var result__15650__auto__ = switch__15647__auto__(state_19576);
if(cljs.core.keyword_identical_QMARK_(result__15650__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15650__auto__;
}
break;
}
}catch (e19600){if((e19600 instanceof Object)){
var ex__15651__auto__ = e19600;
var statearr_19601_19619 = state_19576;
(statearr_19601_19619[(5)] = ex__15651__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19576);

return cljs.core.cst$kw$recur;
} else {
throw e19600;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15649__auto__,cljs.core.cst$kw$recur)){
var G__19620 = state_19576;
state_19576 = G__19620;
continue;
} else {
return ret_value__15649__auto__;
}
break;
}
});
cljs$core$async$state_machine__15648__auto__ = function(state_19576){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15648__auto____1.call(this,state_19576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15648__auto____0;
cljs$core$async$state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15648__auto____1;
return cljs$core$async$state_machine__15648__auto__;
})()
;})(switch__15647__auto__,c__15830__auto___19604,out))
})();
var state__15832__auto__ = (function (){var statearr_19602 = (f__15831__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15831__auto__.cljs$core$IFn$_invoke$arity$0() : f__15831__auto__.call(null));
(statearr_19602[(6)] = c__15830__auto___19604);

return statearr_19602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15832__auto__);
});})(c__15830__auto___19604,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

