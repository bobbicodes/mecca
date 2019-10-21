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
var G__19729 = arguments.length;
switch (G__19729) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19730 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19730 = (function (f,blockable,meta19731){
this.f = f;
this.blockable = blockable;
this.meta19731 = meta19731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19732,meta19731__$1){
var self__ = this;
var _19732__$1 = this;
return (new cljs.core.async.t_cljs$core$async19730(self__.f,self__.blockable,meta19731__$1));
});

cljs.core.async.t_cljs$core$async19730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19732){
var self__ = this;
var _19732__$1 = this;
return self__.meta19731;
});

cljs.core.async.t_cljs$core$async19730.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19730.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19730.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19730.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19730.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta19731], null);
});

cljs.core.async.t_cljs$core$async19730.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19730.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19730";

cljs.core.async.t_cljs$core$async19730.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19730");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19730.
 */
cljs.core.async.__GT_t_cljs$core$async19730 = (function cljs$core$async$__GT_t_cljs$core$async19730(f__$1,blockable__$1,meta19731){
return (new cljs.core.async.t_cljs$core$async19730(f__$1,blockable__$1,meta19731));
});

}

return (new cljs.core.async.t_cljs$core$async19730(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19736 = arguments.length;
switch (G__19736) {
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
var G__19739 = arguments.length;
switch (G__19739) {
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
var G__19742 = arguments.length;
switch (G__19742) {
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
var val_19744 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19744) : fn1.call(null,val_19744));
} else {
cljs.core.async.impl.dispatch.run(((function (val_19744,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19744) : fn1.call(null,val_19744));
});})(val_19744,ret))
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
var G__19746 = arguments.length;
switch (G__19746) {
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
var n__4408__auto___19748 = n;
var x_19749 = (0);
while(true){
if((x_19749 < n__4408__auto___19748)){
(a[x_19749] = x_19749);

var G__19750 = (x_19749 + (1));
x_19749 = G__19750;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19751 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19751 = (function (flag,meta19752){
this.flag = flag;
this.meta19752 = meta19752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19753,meta19752__$1){
var self__ = this;
var _19753__$1 = this;
return (new cljs.core.async.t_cljs$core$async19751(self__.flag,meta19752__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19751.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19753){
var self__ = this;
var _19753__$1 = this;
return self__.meta19752;
});})(flag))
;

cljs.core.async.t_cljs$core$async19751.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19751.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19751.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19751.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19751.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta19752], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19751.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19751";

cljs.core.async.t_cljs$core$async19751.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19751");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19751.
 */
cljs.core.async.__GT_t_cljs$core$async19751 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19751(flag__$1,meta19752){
return (new cljs.core.async.t_cljs$core$async19751(flag__$1,meta19752));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19751(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19754 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19754 = (function (flag,cb,meta19755){
this.flag = flag;
this.cb = cb;
this.meta19755 = meta19755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19756,meta19755__$1){
var self__ = this;
var _19756__$1 = this;
return (new cljs.core.async.t_cljs$core$async19754(self__.flag,self__.cb,meta19755__$1));
});

cljs.core.async.t_cljs$core$async19754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19756){
var self__ = this;
var _19756__$1 = this;
return self__.meta19755;
});

cljs.core.async.t_cljs$core$async19754.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19754.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async19754.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19754.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta19755], null);
});

cljs.core.async.t_cljs$core$async19754.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19754.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19754";

cljs.core.async.t_cljs$core$async19754.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19754");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19754.
 */
cljs.core.async.__GT_t_cljs$core$async19754 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19754(flag__$1,cb__$1,meta19755){
return (new cljs.core.async.t_cljs$core$async19754(flag__$1,cb__$1,meta19755));
});

}

return (new cljs.core.async.t_cljs$core$async19754(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__19757_SHARP_){
var G__19759 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19757_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__19759) : fret.call(null,G__19759));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19758_SHARP_){
var G__19760 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19758_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__19760) : fret.call(null,G__19760));
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
var G__19761 = (i + (1));
i = G__19761;
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
var len__4531__auto___19767 = arguments.length;
var i__4532__auto___19768 = (0);
while(true){
if((i__4532__auto___19768 < len__4531__auto___19767)){
args__4534__auto__.push((arguments[i__4532__auto___19768]));

var G__19769 = (i__4532__auto___19768 + (1));
i__4532__auto___19768 = G__19769;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19764){
var map__19765 = p__19764;
var map__19765__$1 = ((((!((map__19765 == null)))?(((((map__19765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19765):map__19765);
var opts = map__19765__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19762){
var G__19763 = cljs.core.first(seq19762);
var seq19762__$1 = cljs.core.next(seq19762);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19763,seq19762__$1);
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
var G__19771 = arguments.length;
switch (G__19771) {
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
var c__17802__auto___19817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17802__auto___19817){
return (function (){
var f__17803__auto__ = (function (){var switch__17619__auto__ = ((function (c__17802__auto___19817){
return (function (state_19795){
var state_val_19796 = (state_19795[(1)]);
if((state_val_19796 === (7))){
var inst_19791 = (state_19795[(2)]);
var state_19795__$1 = state_19795;
var statearr_19797_19818 = state_19795__$1;
(statearr_19797_19818[(2)] = inst_19791);

(statearr_19797_19818[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19796 === (1))){
var state_19795__$1 = state_19795;
var statearr_19798_19819 = state_19795__$1;
(statearr_19798_19819[(2)] = null);

(statearr_19798_19819[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19796 === (4))){
var inst_19774 = (state_19795[(7)]);
var inst_19774__$1 = (state_19795[(2)]);
var inst_19775 = (inst_19774__$1 == null);
var state_19795__$1 = (function (){var statearr_19799 = state_19795;
(statearr_19799[(7)] = inst_19774__$1);

return statearr_19799;
})();
if(cljs.core.truth_(inst_19775)){
var statearr_19800_19820 = state_19795__$1;
(statearr_19800_19820[(1)] = (5));

} else {
var statearr_19801_19821 = state_19795__$1;
(statearr_19801_19821[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19796 === (13))){
var state_19795__$1 = state_19795;
var statearr_19802_19822 = state_19795__$1;
(statearr_19802_19822[(2)] = null);

(statearr_19802_19822[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19796 === (6))){
var inst_19774 = (state_19795[(7)]);
var state_19795__$1 = state_19795;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19795__$1,(11),to,inst_19774);
} else {
if((state_val_19796 === (3))){
var inst_19793 = (state_19795[(2)]);
var state_19795__$1 = state_19795;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19795__$1,inst_19793);
} else {
if((state_val_19796 === (12))){
var state_19795__$1 = state_19795;
var statearr_19803_19823 = state_19795__$1;
(statearr_19803_19823[(2)] = null);

(statearr_19803_19823[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19796 === (2))){
var state_19795__$1 = state_19795;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19795__$1,(4),from);
} else {
if((state_val_19796 === (11))){
var inst_19784 = (state_19795[(2)]);
var state_19795__$1 = state_19795;
if(cljs.core.truth_(inst_19784)){
var statearr_19804_19824 = state_19795__$1;
(statearr_19804_19824[(1)] = (12));

} else {
var statearr_19805_19825 = state_19795__$1;
(statearr_19805_19825[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19796 === (9))){
var state_19795__$1 = state_19795;
var statearr_19806_19826 = state_19795__$1;
(statearr_19806_19826[(2)] = null);

(statearr_19806_19826[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19796 === (5))){
var state_19795__$1 = state_19795;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19807_19827 = state_19795__$1;
(statearr_19807_19827[(1)] = (8));

} else {
var statearr_19808_19828 = state_19795__$1;
(statearr_19808_19828[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19796 === (14))){
var inst_19789 = (state_19795[(2)]);
var state_19795__$1 = state_19795;
var statearr_19809_19829 = state_19795__$1;
(statearr_19809_19829[(2)] = inst_19789);

(statearr_19809_19829[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19796 === (10))){
var inst_19781 = (state_19795[(2)]);
var state_19795__$1 = state_19795;
var statearr_19810_19830 = state_19795__$1;
(statearr_19810_19830[(2)] = inst_19781);

(statearr_19810_19830[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19796 === (8))){
var inst_19778 = cljs.core.async.close_BANG_(to);
var state_19795__$1 = state_19795;
var statearr_19811_19831 = state_19795__$1;
(statearr_19811_19831[(2)] = inst_19778);

(statearr_19811_19831[(1)] = (10));


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
});})(c__17802__auto___19817))
;
return ((function (switch__17619__auto__,c__17802__auto___19817){
return (function() {
var cljs$core$async$state_machine__17620__auto__ = null;
var cljs$core$async$state_machine__17620__auto____0 = (function (){
var statearr_19812 = [null,null,null,null,null,null,null,null];
(statearr_19812[(0)] = cljs$core$async$state_machine__17620__auto__);

(statearr_19812[(1)] = (1));

return statearr_19812;
});
var cljs$core$async$state_machine__17620__auto____1 = (function (state_19795){
while(true){
var ret_value__17621__auto__ = (function (){try{while(true){
var result__17622__auto__ = switch__17619__auto__(state_19795);
if(cljs.core.keyword_identical_QMARK_(result__17622__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17622__auto__;
}
break;
}
}catch (e19813){if((e19813 instanceof Object)){
var ex__17623__auto__ = e19813;
var statearr_19814_19832 = state_19795;
(statearr_19814_19832[(5)] = ex__17623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19795);

return cljs.core.cst$kw$recur;
} else {
throw e19813;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17621__auto__,cljs.core.cst$kw$recur)){
var G__19833 = state_19795;
state_19795 = G__19833;
continue;
} else {
return ret_value__17621__auto__;
}
break;
}
});
cljs$core$async$state_machine__17620__auto__ = function(state_19795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17620__auto____1.call(this,state_19795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17620__auto____0;
cljs$core$async$state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17620__auto____1;
return cljs$core$async$state_machine__17620__auto__;
})()
;})(switch__17619__auto__,c__17802__auto___19817))
})();
var state__17804__auto__ = (function (){var statearr_19815 = (f__17803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17803__auto__.cljs$core$IFn$_invoke$arity$0() : f__17803__auto__.call(null));
(statearr_19815[(6)] = c__17802__auto___19817);

return statearr_19815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17804__auto__);
});})(c__17802__auto___19817))
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
return (function (p__19834){
var vec__19835 = p__19834;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19835,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19835,(1),null);
var job = vec__19835;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17802__auto___20006 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17802__auto___20006,res,vec__19835,v,p,job,jobs,results){
return (function (){
var f__17803__auto__ = (function (){var switch__17619__auto__ = ((function (c__17802__auto___20006,res,vec__19835,v,p,job,jobs,results){
return (function (state_19842){
var state_val_19843 = (state_19842[(1)]);
if((state_val_19843 === (1))){
var state_19842__$1 = state_19842;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19842__$1,(2),res,v);
} else {
if((state_val_19843 === (2))){
var inst_19839 = (state_19842[(2)]);
var inst_19840 = cljs.core.async.close_BANG_(res);
var state_19842__$1 = (function (){var statearr_19844 = state_19842;
(statearr_19844[(7)] = inst_19839);

return statearr_19844;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19842__$1,inst_19840);
} else {
return null;
}
}
});})(c__17802__auto___20006,res,vec__19835,v,p,job,jobs,results))
;
return ((function (switch__17619__auto__,c__17802__auto___20006,res,vec__19835,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____0 = (function (){
var statearr_19845 = [null,null,null,null,null,null,null,null];
(statearr_19845[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__);

(statearr_19845[(1)] = (1));

return statearr_19845;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____1 = (function (state_19842){
while(true){
var ret_value__17621__auto__ = (function (){try{while(true){
var result__17622__auto__ = switch__17619__auto__(state_19842);
if(cljs.core.keyword_identical_QMARK_(result__17622__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17622__auto__;
}
break;
}
}catch (e19846){if((e19846 instanceof Object)){
var ex__17623__auto__ = e19846;
var statearr_19847_20007 = state_19842;
(statearr_19847_20007[(5)] = ex__17623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19842);

return cljs.core.cst$kw$recur;
} else {
throw e19846;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17621__auto__,cljs.core.cst$kw$recur)){
var G__20008 = state_19842;
state_19842 = G__20008;
continue;
} else {
return ret_value__17621__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__ = function(state_19842){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____1.call(this,state_19842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__;
})()
;})(switch__17619__auto__,c__17802__auto___20006,res,vec__19835,v,p,job,jobs,results))
})();
var state__17804__auto__ = (function (){var statearr_19848 = (f__17803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17803__auto__.cljs$core$IFn$_invoke$arity$0() : f__17803__auto__.call(null));
(statearr_19848[(6)] = c__17802__auto___20006);

return statearr_19848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17804__auto__);
});})(c__17802__auto___20006,res,vec__19835,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19849){
var vec__19850 = p__19849;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19850,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19850,(1),null);
var job = vec__19850;
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
var n__4408__auto___20009 = n;
var __20010 = (0);
while(true){
if((__20010 < n__4408__auto___20009)){
var G__19853_20011 = type;
var G__19853_20012__$1 = (((G__19853_20011 instanceof cljs.core.Keyword))?G__19853_20011.fqn:null);
switch (G__19853_20012__$1) {
case "compute":
var c__17802__auto___20014 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20010,c__17802__auto___20014,G__19853_20011,G__19853_20012__$1,n__4408__auto___20009,jobs,results,process,async){
return (function (){
var f__17803__auto__ = (function (){var switch__17619__auto__ = ((function (__20010,c__17802__auto___20014,G__19853_20011,G__19853_20012__$1,n__4408__auto___20009,jobs,results,process,async){
return (function (state_19866){
var state_val_19867 = (state_19866[(1)]);
if((state_val_19867 === (1))){
var state_19866__$1 = state_19866;
var statearr_19868_20015 = state_19866__$1;
(statearr_19868_20015[(2)] = null);

(statearr_19868_20015[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19867 === (2))){
var state_19866__$1 = state_19866;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19866__$1,(4),jobs);
} else {
if((state_val_19867 === (3))){
var inst_19864 = (state_19866[(2)]);
var state_19866__$1 = state_19866;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19866__$1,inst_19864);
} else {
if((state_val_19867 === (4))){
var inst_19856 = (state_19866[(2)]);
var inst_19857 = process(inst_19856);
var state_19866__$1 = state_19866;
if(cljs.core.truth_(inst_19857)){
var statearr_19869_20016 = state_19866__$1;
(statearr_19869_20016[(1)] = (5));

} else {
var statearr_19870_20017 = state_19866__$1;
(statearr_19870_20017[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19867 === (5))){
var state_19866__$1 = state_19866;
var statearr_19871_20018 = state_19866__$1;
(statearr_19871_20018[(2)] = null);

(statearr_19871_20018[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19867 === (6))){
var state_19866__$1 = state_19866;
var statearr_19872_20019 = state_19866__$1;
(statearr_19872_20019[(2)] = null);

(statearr_19872_20019[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19867 === (7))){
var inst_19862 = (state_19866[(2)]);
var state_19866__$1 = state_19866;
var statearr_19873_20020 = state_19866__$1;
(statearr_19873_20020[(2)] = inst_19862);

(statearr_19873_20020[(1)] = (3));


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
});})(__20010,c__17802__auto___20014,G__19853_20011,G__19853_20012__$1,n__4408__auto___20009,jobs,results,process,async))
;
return ((function (__20010,switch__17619__auto__,c__17802__auto___20014,G__19853_20011,G__19853_20012__$1,n__4408__auto___20009,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____0 = (function (){
var statearr_19874 = [null,null,null,null,null,null,null];
(statearr_19874[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__);

(statearr_19874[(1)] = (1));

return statearr_19874;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____1 = (function (state_19866){
while(true){
var ret_value__17621__auto__ = (function (){try{while(true){
var result__17622__auto__ = switch__17619__auto__(state_19866);
if(cljs.core.keyword_identical_QMARK_(result__17622__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17622__auto__;
}
break;
}
}catch (e19875){if((e19875 instanceof Object)){
var ex__17623__auto__ = e19875;
var statearr_19876_20021 = state_19866;
(statearr_19876_20021[(5)] = ex__17623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19866);

return cljs.core.cst$kw$recur;
} else {
throw e19875;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17621__auto__,cljs.core.cst$kw$recur)){
var G__20022 = state_19866;
state_19866 = G__20022;
continue;
} else {
return ret_value__17621__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__ = function(state_19866){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____1.call(this,state_19866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__;
})()
;})(__20010,switch__17619__auto__,c__17802__auto___20014,G__19853_20011,G__19853_20012__$1,n__4408__auto___20009,jobs,results,process,async))
})();
var state__17804__auto__ = (function (){var statearr_19877 = (f__17803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17803__auto__.cljs$core$IFn$_invoke$arity$0() : f__17803__auto__.call(null));
(statearr_19877[(6)] = c__17802__auto___20014);

return statearr_19877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17804__auto__);
});})(__20010,c__17802__auto___20014,G__19853_20011,G__19853_20012__$1,n__4408__auto___20009,jobs,results,process,async))
);


break;
case "async":
var c__17802__auto___20023 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20010,c__17802__auto___20023,G__19853_20011,G__19853_20012__$1,n__4408__auto___20009,jobs,results,process,async){
return (function (){
var f__17803__auto__ = (function (){var switch__17619__auto__ = ((function (__20010,c__17802__auto___20023,G__19853_20011,G__19853_20012__$1,n__4408__auto___20009,jobs,results,process,async){
return (function (state_19890){
var state_val_19891 = (state_19890[(1)]);
if((state_val_19891 === (1))){
var state_19890__$1 = state_19890;
var statearr_19892_20024 = state_19890__$1;
(statearr_19892_20024[(2)] = null);

(statearr_19892_20024[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19891 === (2))){
var state_19890__$1 = state_19890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19890__$1,(4),jobs);
} else {
if((state_val_19891 === (3))){
var inst_19888 = (state_19890[(2)]);
var state_19890__$1 = state_19890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19890__$1,inst_19888);
} else {
if((state_val_19891 === (4))){
var inst_19880 = (state_19890[(2)]);
var inst_19881 = async(inst_19880);
var state_19890__$1 = state_19890;
if(cljs.core.truth_(inst_19881)){
var statearr_19893_20025 = state_19890__$1;
(statearr_19893_20025[(1)] = (5));

} else {
var statearr_19894_20026 = state_19890__$1;
(statearr_19894_20026[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19891 === (5))){
var state_19890__$1 = state_19890;
var statearr_19895_20027 = state_19890__$1;
(statearr_19895_20027[(2)] = null);

(statearr_19895_20027[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19891 === (6))){
var state_19890__$1 = state_19890;
var statearr_19896_20028 = state_19890__$1;
(statearr_19896_20028[(2)] = null);

(statearr_19896_20028[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19891 === (7))){
var inst_19886 = (state_19890[(2)]);
var state_19890__$1 = state_19890;
var statearr_19897_20029 = state_19890__$1;
(statearr_19897_20029[(2)] = inst_19886);

(statearr_19897_20029[(1)] = (3));


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
});})(__20010,c__17802__auto___20023,G__19853_20011,G__19853_20012__$1,n__4408__auto___20009,jobs,results,process,async))
;
return ((function (__20010,switch__17619__auto__,c__17802__auto___20023,G__19853_20011,G__19853_20012__$1,n__4408__auto___20009,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____0 = (function (){
var statearr_19898 = [null,null,null,null,null,null,null];
(statearr_19898[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__);

(statearr_19898[(1)] = (1));

return statearr_19898;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____1 = (function (state_19890){
while(true){
var ret_value__17621__auto__ = (function (){try{while(true){
var result__17622__auto__ = switch__17619__auto__(state_19890);
if(cljs.core.keyword_identical_QMARK_(result__17622__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17622__auto__;
}
break;
}
}catch (e19899){if((e19899 instanceof Object)){
var ex__17623__auto__ = e19899;
var statearr_19900_20030 = state_19890;
(statearr_19900_20030[(5)] = ex__17623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19890);

return cljs.core.cst$kw$recur;
} else {
throw e19899;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17621__auto__,cljs.core.cst$kw$recur)){
var G__20031 = state_19890;
state_19890 = G__20031;
continue;
} else {
return ret_value__17621__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__ = function(state_19890){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____1.call(this,state_19890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__;
})()
;})(__20010,switch__17619__auto__,c__17802__auto___20023,G__19853_20011,G__19853_20012__$1,n__4408__auto___20009,jobs,results,process,async))
})();
var state__17804__auto__ = (function (){var statearr_19901 = (f__17803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17803__auto__.cljs$core$IFn$_invoke$arity$0() : f__17803__auto__.call(null));
(statearr_19901[(6)] = c__17802__auto___20023);

return statearr_19901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17804__auto__);
});})(__20010,c__17802__auto___20023,G__19853_20011,G__19853_20012__$1,n__4408__auto___20009,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19853_20012__$1)].join('')));

}

var G__20032 = (__20010 + (1));
__20010 = G__20032;
continue;
} else {
}
break;
}

var c__17802__auto___20033 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17802__auto___20033,jobs,results,process,async){
return (function (){
var f__17803__auto__ = (function (){var switch__17619__auto__ = ((function (c__17802__auto___20033,jobs,results,process,async){
return (function (state_19923){
var state_val_19924 = (state_19923[(1)]);
if((state_val_19924 === (1))){
var state_19923__$1 = state_19923;
var statearr_19925_20034 = state_19923__$1;
(statearr_19925_20034[(2)] = null);

(statearr_19925_20034[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19924 === (2))){
var state_19923__$1 = state_19923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19923__$1,(4),from);
} else {
if((state_val_19924 === (3))){
var inst_19921 = (state_19923[(2)]);
var state_19923__$1 = state_19923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19923__$1,inst_19921);
} else {
if((state_val_19924 === (4))){
var inst_19904 = (state_19923[(7)]);
var inst_19904__$1 = (state_19923[(2)]);
var inst_19905 = (inst_19904__$1 == null);
var state_19923__$1 = (function (){var statearr_19926 = state_19923;
(statearr_19926[(7)] = inst_19904__$1);

return statearr_19926;
})();
if(cljs.core.truth_(inst_19905)){
var statearr_19927_20035 = state_19923__$1;
(statearr_19927_20035[(1)] = (5));

} else {
var statearr_19928_20036 = state_19923__$1;
(statearr_19928_20036[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19924 === (5))){
var inst_19907 = cljs.core.async.close_BANG_(jobs);
var state_19923__$1 = state_19923;
var statearr_19929_20037 = state_19923__$1;
(statearr_19929_20037[(2)] = inst_19907);

(statearr_19929_20037[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19924 === (6))){
var inst_19909 = (state_19923[(8)]);
var inst_19904 = (state_19923[(7)]);
var inst_19909__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_19910 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19911 = [inst_19904,inst_19909__$1];
var inst_19912 = (new cljs.core.PersistentVector(null,2,(5),inst_19910,inst_19911,null));
var state_19923__$1 = (function (){var statearr_19930 = state_19923;
(statearr_19930[(8)] = inst_19909__$1);

return statearr_19930;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19923__$1,(8),jobs,inst_19912);
} else {
if((state_val_19924 === (7))){
var inst_19919 = (state_19923[(2)]);
var state_19923__$1 = state_19923;
var statearr_19931_20038 = state_19923__$1;
(statearr_19931_20038[(2)] = inst_19919);

(statearr_19931_20038[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19924 === (8))){
var inst_19909 = (state_19923[(8)]);
var inst_19914 = (state_19923[(2)]);
var state_19923__$1 = (function (){var statearr_19932 = state_19923;
(statearr_19932[(9)] = inst_19914);

return statearr_19932;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19923__$1,(9),results,inst_19909);
} else {
if((state_val_19924 === (9))){
var inst_19916 = (state_19923[(2)]);
var state_19923__$1 = (function (){var statearr_19933 = state_19923;
(statearr_19933[(10)] = inst_19916);

return statearr_19933;
})();
var statearr_19934_20039 = state_19923__$1;
(statearr_19934_20039[(2)] = null);

(statearr_19934_20039[(1)] = (2));


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
});})(c__17802__auto___20033,jobs,results,process,async))
;
return ((function (switch__17619__auto__,c__17802__auto___20033,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____0 = (function (){
var statearr_19935 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19935[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__);

(statearr_19935[(1)] = (1));

return statearr_19935;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____1 = (function (state_19923){
while(true){
var ret_value__17621__auto__ = (function (){try{while(true){
var result__17622__auto__ = switch__17619__auto__(state_19923);
if(cljs.core.keyword_identical_QMARK_(result__17622__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17622__auto__;
}
break;
}
}catch (e19936){if((e19936 instanceof Object)){
var ex__17623__auto__ = e19936;
var statearr_19937_20040 = state_19923;
(statearr_19937_20040[(5)] = ex__17623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19923);

return cljs.core.cst$kw$recur;
} else {
throw e19936;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17621__auto__,cljs.core.cst$kw$recur)){
var G__20041 = state_19923;
state_19923 = G__20041;
continue;
} else {
return ret_value__17621__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__ = function(state_19923){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____1.call(this,state_19923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__;
})()
;})(switch__17619__auto__,c__17802__auto___20033,jobs,results,process,async))
})();
var state__17804__auto__ = (function (){var statearr_19938 = (f__17803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17803__auto__.cljs$core$IFn$_invoke$arity$0() : f__17803__auto__.call(null));
(statearr_19938[(6)] = c__17802__auto___20033);

return statearr_19938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17804__auto__);
});})(c__17802__auto___20033,jobs,results,process,async))
);


var c__17802__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17802__auto__,jobs,results,process,async){
return (function (){
var f__17803__auto__ = (function (){var switch__17619__auto__ = ((function (c__17802__auto__,jobs,results,process,async){
return (function (state_19976){
var state_val_19977 = (state_19976[(1)]);
if((state_val_19977 === (7))){
var inst_19972 = (state_19976[(2)]);
var state_19976__$1 = state_19976;
var statearr_19978_20042 = state_19976__$1;
(statearr_19978_20042[(2)] = inst_19972);

(statearr_19978_20042[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19977 === (20))){
var state_19976__$1 = state_19976;
var statearr_19979_20043 = state_19976__$1;
(statearr_19979_20043[(2)] = null);

(statearr_19979_20043[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19977 === (1))){
var state_19976__$1 = state_19976;
var statearr_19980_20044 = state_19976__$1;
(statearr_19980_20044[(2)] = null);

(statearr_19980_20044[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19977 === (4))){
var inst_19941 = (state_19976[(7)]);
var inst_19941__$1 = (state_19976[(2)]);
var inst_19942 = (inst_19941__$1 == null);
var state_19976__$1 = (function (){var statearr_19981 = state_19976;
(statearr_19981[(7)] = inst_19941__$1);

return statearr_19981;
})();
if(cljs.core.truth_(inst_19942)){
var statearr_19982_20045 = state_19976__$1;
(statearr_19982_20045[(1)] = (5));

} else {
var statearr_19983_20046 = state_19976__$1;
(statearr_19983_20046[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19977 === (15))){
var inst_19954 = (state_19976[(8)]);
var state_19976__$1 = state_19976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19976__$1,(18),to,inst_19954);
} else {
if((state_val_19977 === (21))){
var inst_19967 = (state_19976[(2)]);
var state_19976__$1 = state_19976;
var statearr_19984_20047 = state_19976__$1;
(statearr_19984_20047[(2)] = inst_19967);

(statearr_19984_20047[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19977 === (13))){
var inst_19969 = (state_19976[(2)]);
var state_19976__$1 = (function (){var statearr_19985 = state_19976;
(statearr_19985[(9)] = inst_19969);

return statearr_19985;
})();
var statearr_19986_20048 = state_19976__$1;
(statearr_19986_20048[(2)] = null);

(statearr_19986_20048[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19977 === (6))){
var inst_19941 = (state_19976[(7)]);
var state_19976__$1 = state_19976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19976__$1,(11),inst_19941);
} else {
if((state_val_19977 === (17))){
var inst_19962 = (state_19976[(2)]);
var state_19976__$1 = state_19976;
if(cljs.core.truth_(inst_19962)){
var statearr_19987_20049 = state_19976__$1;
(statearr_19987_20049[(1)] = (19));

} else {
var statearr_19988_20050 = state_19976__$1;
(statearr_19988_20050[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19977 === (3))){
var inst_19974 = (state_19976[(2)]);
var state_19976__$1 = state_19976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19976__$1,inst_19974);
} else {
if((state_val_19977 === (12))){
var inst_19951 = (state_19976[(10)]);
var state_19976__$1 = state_19976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19976__$1,(14),inst_19951);
} else {
if((state_val_19977 === (2))){
var state_19976__$1 = state_19976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19976__$1,(4),results);
} else {
if((state_val_19977 === (19))){
var state_19976__$1 = state_19976;
var statearr_19989_20051 = state_19976__$1;
(statearr_19989_20051[(2)] = null);

(statearr_19989_20051[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19977 === (11))){
var inst_19951 = (state_19976[(2)]);
var state_19976__$1 = (function (){var statearr_19990 = state_19976;
(statearr_19990[(10)] = inst_19951);

return statearr_19990;
})();
var statearr_19991_20052 = state_19976__$1;
(statearr_19991_20052[(2)] = null);

(statearr_19991_20052[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19977 === (9))){
var state_19976__$1 = state_19976;
var statearr_19992_20053 = state_19976__$1;
(statearr_19992_20053[(2)] = null);

(statearr_19992_20053[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19977 === (5))){
var state_19976__$1 = state_19976;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19993_20054 = state_19976__$1;
(statearr_19993_20054[(1)] = (8));

} else {
var statearr_19994_20055 = state_19976__$1;
(statearr_19994_20055[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19977 === (14))){
var inst_19954 = (state_19976[(8)]);
var inst_19956 = (state_19976[(11)]);
var inst_19954__$1 = (state_19976[(2)]);
var inst_19955 = (inst_19954__$1 == null);
var inst_19956__$1 = cljs.core.not(inst_19955);
var state_19976__$1 = (function (){var statearr_19995 = state_19976;
(statearr_19995[(8)] = inst_19954__$1);

(statearr_19995[(11)] = inst_19956__$1);

return statearr_19995;
})();
if(inst_19956__$1){
var statearr_19996_20056 = state_19976__$1;
(statearr_19996_20056[(1)] = (15));

} else {
var statearr_19997_20057 = state_19976__$1;
(statearr_19997_20057[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19977 === (16))){
var inst_19956 = (state_19976[(11)]);
var state_19976__$1 = state_19976;
var statearr_19998_20058 = state_19976__$1;
(statearr_19998_20058[(2)] = inst_19956);

(statearr_19998_20058[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19977 === (10))){
var inst_19948 = (state_19976[(2)]);
var state_19976__$1 = state_19976;
var statearr_19999_20059 = state_19976__$1;
(statearr_19999_20059[(2)] = inst_19948);

(statearr_19999_20059[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19977 === (18))){
var inst_19959 = (state_19976[(2)]);
var state_19976__$1 = state_19976;
var statearr_20000_20060 = state_19976__$1;
(statearr_20000_20060[(2)] = inst_19959);

(statearr_20000_20060[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19977 === (8))){
var inst_19945 = cljs.core.async.close_BANG_(to);
var state_19976__$1 = state_19976;
var statearr_20001_20061 = state_19976__$1;
(statearr_20001_20061[(2)] = inst_19945);

(statearr_20001_20061[(1)] = (10));


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
});})(c__17802__auto__,jobs,results,process,async))
;
return ((function (switch__17619__auto__,c__17802__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____0 = (function (){
var statearr_20002 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20002[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__);

(statearr_20002[(1)] = (1));

return statearr_20002;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____1 = (function (state_19976){
while(true){
var ret_value__17621__auto__ = (function (){try{while(true){
var result__17622__auto__ = switch__17619__auto__(state_19976);
if(cljs.core.keyword_identical_QMARK_(result__17622__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17622__auto__;
}
break;
}
}catch (e20003){if((e20003 instanceof Object)){
var ex__17623__auto__ = e20003;
var statearr_20004_20062 = state_19976;
(statearr_20004_20062[(5)] = ex__17623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19976);

return cljs.core.cst$kw$recur;
} else {
throw e20003;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17621__auto__,cljs.core.cst$kw$recur)){
var G__20063 = state_19976;
state_19976 = G__20063;
continue;
} else {
return ret_value__17621__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__ = function(state_19976){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____1.call(this,state_19976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17620__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17620__auto__;
})()
;})(switch__17619__auto__,c__17802__auto__,jobs,results,process,async))
})();
var state__17804__auto__ = (function (){var statearr_20005 = (f__17803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17803__auto__.cljs$core$IFn$_invoke$arity$0() : f__17803__auto__.call(null));
(statearr_20005[(6)] = c__17802__auto__);

return statearr_20005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17804__auto__);
});})(c__17802__auto__,jobs,results,process,async))
);

return c__17802__auto__;
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
var G__20065 = arguments.length;
switch (G__20065) {
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
var G__20068 = arguments.length;
switch (G__20068) {
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
var G__20071 = arguments.length;
switch (G__20071) {
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
var c__17802__auto___20120 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17802__auto___20120,tc,fc){
return (function (){
var f__17803__auto__ = (function (){var switch__17619__auto__ = ((function (c__17802__auto___20120,tc,fc){
return (function (state_20097){
var state_val_20098 = (state_20097[(1)]);
if((state_val_20098 === (7))){
var inst_20093 = (state_20097[(2)]);
var state_20097__$1 = state_20097;
var statearr_20099_20121 = state_20097__$1;
(statearr_20099_20121[(2)] = inst_20093);

(statearr_20099_20121[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20098 === (1))){
var state_20097__$1 = state_20097;
var statearr_20100_20122 = state_20097__$1;
(statearr_20100_20122[(2)] = null);

(statearr_20100_20122[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20098 === (4))){
var inst_20074 = (state_20097[(7)]);
var inst_20074__$1 = (state_20097[(2)]);
var inst_20075 = (inst_20074__$1 == null);
var state_20097__$1 = (function (){var statearr_20101 = state_20097;
(statearr_20101[(7)] = inst_20074__$1);

return statearr_20101;
})();
if(cljs.core.truth_(inst_20075)){
var statearr_20102_20123 = state_20097__$1;
(statearr_20102_20123[(1)] = (5));

} else {
var statearr_20103_20124 = state_20097__$1;
(statearr_20103_20124[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20098 === (13))){
var state_20097__$1 = state_20097;
var statearr_20104_20125 = state_20097__$1;
(statearr_20104_20125[(2)] = null);

(statearr_20104_20125[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20098 === (6))){
var inst_20074 = (state_20097[(7)]);
var inst_20080 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20074) : p.call(null,inst_20074));
var state_20097__$1 = state_20097;
if(cljs.core.truth_(inst_20080)){
var statearr_20105_20126 = state_20097__$1;
(statearr_20105_20126[(1)] = (9));

} else {
var statearr_20106_20127 = state_20097__$1;
(statearr_20106_20127[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20098 === (3))){
var inst_20095 = (state_20097[(2)]);
var state_20097__$1 = state_20097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20097__$1,inst_20095);
} else {
if((state_val_20098 === (12))){
var state_20097__$1 = state_20097;
var statearr_20107_20128 = state_20097__$1;
(statearr_20107_20128[(2)] = null);

(statearr_20107_20128[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20098 === (2))){
var state_20097__$1 = state_20097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20097__$1,(4),ch);
} else {
if((state_val_20098 === (11))){
var inst_20074 = (state_20097[(7)]);
var inst_20084 = (state_20097[(2)]);
var state_20097__$1 = state_20097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20097__$1,(8),inst_20084,inst_20074);
} else {
if((state_val_20098 === (9))){
var state_20097__$1 = state_20097;
var statearr_20108_20129 = state_20097__$1;
(statearr_20108_20129[(2)] = tc);

(statearr_20108_20129[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20098 === (5))){
var inst_20077 = cljs.core.async.close_BANG_(tc);
var inst_20078 = cljs.core.async.close_BANG_(fc);
var state_20097__$1 = (function (){var statearr_20109 = state_20097;
(statearr_20109[(8)] = inst_20077);

return statearr_20109;
})();
var statearr_20110_20130 = state_20097__$1;
(statearr_20110_20130[(2)] = inst_20078);

(statearr_20110_20130[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20098 === (14))){
var inst_20091 = (state_20097[(2)]);
var state_20097__$1 = state_20097;
var statearr_20111_20131 = state_20097__$1;
(statearr_20111_20131[(2)] = inst_20091);

(statearr_20111_20131[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20098 === (10))){
var state_20097__$1 = state_20097;
var statearr_20112_20132 = state_20097__$1;
(statearr_20112_20132[(2)] = fc);

(statearr_20112_20132[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20098 === (8))){
var inst_20086 = (state_20097[(2)]);
var state_20097__$1 = state_20097;
if(cljs.core.truth_(inst_20086)){
var statearr_20113_20133 = state_20097__$1;
(statearr_20113_20133[(1)] = (12));

} else {
var statearr_20114_20134 = state_20097__$1;
(statearr_20114_20134[(1)] = (13));

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
});})(c__17802__auto___20120,tc,fc))
;
return ((function (switch__17619__auto__,c__17802__auto___20120,tc,fc){
return (function() {
var cljs$core$async$state_machine__17620__auto__ = null;
var cljs$core$async$state_machine__17620__auto____0 = (function (){
var statearr_20115 = [null,null,null,null,null,null,null,null,null];
(statearr_20115[(0)] = cljs$core$async$state_machine__17620__auto__);

(statearr_20115[(1)] = (1));

return statearr_20115;
});
var cljs$core$async$state_machine__17620__auto____1 = (function (state_20097){
while(true){
var ret_value__17621__auto__ = (function (){try{while(true){
var result__17622__auto__ = switch__17619__auto__(state_20097);
if(cljs.core.keyword_identical_QMARK_(result__17622__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17622__auto__;
}
break;
}
}catch (e20116){if((e20116 instanceof Object)){
var ex__17623__auto__ = e20116;
var statearr_20117_20135 = state_20097;
(statearr_20117_20135[(5)] = ex__17623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20097);

return cljs.core.cst$kw$recur;
} else {
throw e20116;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17621__auto__,cljs.core.cst$kw$recur)){
var G__20136 = state_20097;
state_20097 = G__20136;
continue;
} else {
return ret_value__17621__auto__;
}
break;
}
});
cljs$core$async$state_machine__17620__auto__ = function(state_20097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17620__auto____1.call(this,state_20097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17620__auto____0;
cljs$core$async$state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17620__auto____1;
return cljs$core$async$state_machine__17620__auto__;
})()
;})(switch__17619__auto__,c__17802__auto___20120,tc,fc))
})();
var state__17804__auto__ = (function (){var statearr_20118 = (f__17803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17803__auto__.cljs$core$IFn$_invoke$arity$0() : f__17803__auto__.call(null));
(statearr_20118[(6)] = c__17802__auto___20120);

return statearr_20118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17804__auto__);
});})(c__17802__auto___20120,tc,fc))
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
var c__17802__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17802__auto__){
return (function (){
var f__17803__auto__ = (function (){var switch__17619__auto__ = ((function (c__17802__auto__){
return (function (state_20157){
var state_val_20158 = (state_20157[(1)]);
if((state_val_20158 === (7))){
var inst_20153 = (state_20157[(2)]);
var state_20157__$1 = state_20157;
var statearr_20159_20177 = state_20157__$1;
(statearr_20159_20177[(2)] = inst_20153);

(statearr_20159_20177[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20158 === (1))){
var inst_20137 = init;
var state_20157__$1 = (function (){var statearr_20160 = state_20157;
(statearr_20160[(7)] = inst_20137);

return statearr_20160;
})();
var statearr_20161_20178 = state_20157__$1;
(statearr_20161_20178[(2)] = null);

(statearr_20161_20178[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20158 === (4))){
var inst_20140 = (state_20157[(8)]);
var inst_20140__$1 = (state_20157[(2)]);
var inst_20141 = (inst_20140__$1 == null);
var state_20157__$1 = (function (){var statearr_20162 = state_20157;
(statearr_20162[(8)] = inst_20140__$1);

return statearr_20162;
})();
if(cljs.core.truth_(inst_20141)){
var statearr_20163_20179 = state_20157__$1;
(statearr_20163_20179[(1)] = (5));

} else {
var statearr_20164_20180 = state_20157__$1;
(statearr_20164_20180[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20158 === (6))){
var inst_20140 = (state_20157[(8)]);
var inst_20137 = (state_20157[(7)]);
var inst_20144 = (state_20157[(9)]);
var inst_20144__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_20137,inst_20140) : f.call(null,inst_20137,inst_20140));
var inst_20145 = cljs.core.reduced_QMARK_(inst_20144__$1);
var state_20157__$1 = (function (){var statearr_20165 = state_20157;
(statearr_20165[(9)] = inst_20144__$1);

return statearr_20165;
})();
if(inst_20145){
var statearr_20166_20181 = state_20157__$1;
(statearr_20166_20181[(1)] = (8));

} else {
var statearr_20167_20182 = state_20157__$1;
(statearr_20167_20182[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20158 === (3))){
var inst_20155 = (state_20157[(2)]);
var state_20157__$1 = state_20157;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20157__$1,inst_20155);
} else {
if((state_val_20158 === (2))){
var state_20157__$1 = state_20157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20157__$1,(4),ch);
} else {
if((state_val_20158 === (9))){
var inst_20144 = (state_20157[(9)]);
var inst_20137 = inst_20144;
var state_20157__$1 = (function (){var statearr_20168 = state_20157;
(statearr_20168[(7)] = inst_20137);

return statearr_20168;
})();
var statearr_20169_20183 = state_20157__$1;
(statearr_20169_20183[(2)] = null);

(statearr_20169_20183[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20158 === (5))){
var inst_20137 = (state_20157[(7)]);
var state_20157__$1 = state_20157;
var statearr_20170_20184 = state_20157__$1;
(statearr_20170_20184[(2)] = inst_20137);

(statearr_20170_20184[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20158 === (10))){
var inst_20151 = (state_20157[(2)]);
var state_20157__$1 = state_20157;
var statearr_20171_20185 = state_20157__$1;
(statearr_20171_20185[(2)] = inst_20151);

(statearr_20171_20185[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20158 === (8))){
var inst_20144 = (state_20157[(9)]);
var inst_20147 = cljs.core.deref(inst_20144);
var state_20157__$1 = state_20157;
var statearr_20172_20186 = state_20157__$1;
(statearr_20172_20186[(2)] = inst_20147);

(statearr_20172_20186[(1)] = (10));


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
});})(c__17802__auto__))
;
return ((function (switch__17619__auto__,c__17802__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__17620__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17620__auto____0 = (function (){
var statearr_20173 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20173[(0)] = cljs$core$async$reduce_$_state_machine__17620__auto__);

(statearr_20173[(1)] = (1));

return statearr_20173;
});
var cljs$core$async$reduce_$_state_machine__17620__auto____1 = (function (state_20157){
while(true){
var ret_value__17621__auto__ = (function (){try{while(true){
var result__17622__auto__ = switch__17619__auto__(state_20157);
if(cljs.core.keyword_identical_QMARK_(result__17622__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17622__auto__;
}
break;
}
}catch (e20174){if((e20174 instanceof Object)){
var ex__17623__auto__ = e20174;
var statearr_20175_20187 = state_20157;
(statearr_20175_20187[(5)] = ex__17623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20157);

return cljs.core.cst$kw$recur;
} else {
throw e20174;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17621__auto__,cljs.core.cst$kw$recur)){
var G__20188 = state_20157;
state_20157 = G__20188;
continue;
} else {
return ret_value__17621__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17620__auto__ = function(state_20157){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17620__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17620__auto____1.call(this,state_20157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17620__auto____0;
cljs$core$async$reduce_$_state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17620__auto____1;
return cljs$core$async$reduce_$_state_machine__17620__auto__;
})()
;})(switch__17619__auto__,c__17802__auto__))
})();
var state__17804__auto__ = (function (){var statearr_20176 = (f__17803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17803__auto__.cljs$core$IFn$_invoke$arity$0() : f__17803__auto__.call(null));
(statearr_20176[(6)] = c__17802__auto__);

return statearr_20176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17804__auto__);
});})(c__17802__auto__))
);

return c__17802__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17802__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17802__auto__,f__$1){
return (function (){
var f__17803__auto__ = (function (){var switch__17619__auto__ = ((function (c__17802__auto__,f__$1){
return (function (state_20194){
var state_val_20195 = (state_20194[(1)]);
if((state_val_20195 === (1))){
var inst_20189 = cljs.core.async.reduce(f__$1,init,ch);
var state_20194__$1 = state_20194;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20194__$1,(2),inst_20189);
} else {
if((state_val_20195 === (2))){
var inst_20191 = (state_20194[(2)]);
var inst_20192 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_20191) : f__$1.call(null,inst_20191));
var state_20194__$1 = state_20194;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20194__$1,inst_20192);
} else {
return null;
}
}
});})(c__17802__auto__,f__$1))
;
return ((function (switch__17619__auto__,c__17802__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__17620__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17620__auto____0 = (function (){
var statearr_20196 = [null,null,null,null,null,null,null];
(statearr_20196[(0)] = cljs$core$async$transduce_$_state_machine__17620__auto__);

(statearr_20196[(1)] = (1));

return statearr_20196;
});
var cljs$core$async$transduce_$_state_machine__17620__auto____1 = (function (state_20194){
while(true){
var ret_value__17621__auto__ = (function (){try{while(true){
var result__17622__auto__ = switch__17619__auto__(state_20194);
if(cljs.core.keyword_identical_QMARK_(result__17622__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17622__auto__;
}
break;
}
}catch (e20197){if((e20197 instanceof Object)){
var ex__17623__auto__ = e20197;
var statearr_20198_20200 = state_20194;
(statearr_20198_20200[(5)] = ex__17623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20194);

return cljs.core.cst$kw$recur;
} else {
throw e20197;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17621__auto__,cljs.core.cst$kw$recur)){
var G__20201 = state_20194;
state_20194 = G__20201;
continue;
} else {
return ret_value__17621__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17620__auto__ = function(state_20194){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17620__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17620__auto____1.call(this,state_20194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17620__auto____0;
cljs$core$async$transduce_$_state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17620__auto____1;
return cljs$core$async$transduce_$_state_machine__17620__auto__;
})()
;})(switch__17619__auto__,c__17802__auto__,f__$1))
})();
var state__17804__auto__ = (function (){var statearr_20199 = (f__17803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17803__auto__.cljs$core$IFn$_invoke$arity$0() : f__17803__auto__.call(null));
(statearr_20199[(6)] = c__17802__auto__);

return statearr_20199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17804__auto__);
});})(c__17802__auto__,f__$1))
);

return c__17802__auto__;
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
var G__20203 = arguments.length;
switch (G__20203) {
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
var c__17802__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17802__auto__){
return (function (){
var f__17803__auto__ = (function (){var switch__17619__auto__ = ((function (c__17802__auto__){
return (function (state_20228){
var state_val_20229 = (state_20228[(1)]);
if((state_val_20229 === (7))){
var inst_20210 = (state_20228[(2)]);
var state_20228__$1 = state_20228;
var statearr_20230_20251 = state_20228__$1;
(statearr_20230_20251[(2)] = inst_20210);

(statearr_20230_20251[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20229 === (1))){
var inst_20204 = cljs.core.seq(coll);
var inst_20205 = inst_20204;
var state_20228__$1 = (function (){var statearr_20231 = state_20228;
(statearr_20231[(7)] = inst_20205);

return statearr_20231;
})();
var statearr_20232_20252 = state_20228__$1;
(statearr_20232_20252[(2)] = null);

(statearr_20232_20252[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20229 === (4))){
var inst_20205 = (state_20228[(7)]);
var inst_20208 = cljs.core.first(inst_20205);
var state_20228__$1 = state_20228;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20228__$1,(7),ch,inst_20208);
} else {
if((state_val_20229 === (13))){
var inst_20222 = (state_20228[(2)]);
var state_20228__$1 = state_20228;
var statearr_20233_20253 = state_20228__$1;
(statearr_20233_20253[(2)] = inst_20222);

(statearr_20233_20253[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20229 === (6))){
var inst_20213 = (state_20228[(2)]);
var state_20228__$1 = state_20228;
if(cljs.core.truth_(inst_20213)){
var statearr_20234_20254 = state_20228__$1;
(statearr_20234_20254[(1)] = (8));

} else {
var statearr_20235_20255 = state_20228__$1;
(statearr_20235_20255[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20229 === (3))){
var inst_20226 = (state_20228[(2)]);
var state_20228__$1 = state_20228;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20228__$1,inst_20226);
} else {
if((state_val_20229 === (12))){
var state_20228__$1 = state_20228;
var statearr_20236_20256 = state_20228__$1;
(statearr_20236_20256[(2)] = null);

(statearr_20236_20256[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20229 === (2))){
var inst_20205 = (state_20228[(7)]);
var state_20228__$1 = state_20228;
if(cljs.core.truth_(inst_20205)){
var statearr_20237_20257 = state_20228__$1;
(statearr_20237_20257[(1)] = (4));

} else {
var statearr_20238_20258 = state_20228__$1;
(statearr_20238_20258[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20229 === (11))){
var inst_20219 = cljs.core.async.close_BANG_(ch);
var state_20228__$1 = state_20228;
var statearr_20239_20259 = state_20228__$1;
(statearr_20239_20259[(2)] = inst_20219);

(statearr_20239_20259[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20229 === (9))){
var state_20228__$1 = state_20228;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20240_20260 = state_20228__$1;
(statearr_20240_20260[(1)] = (11));

} else {
var statearr_20241_20261 = state_20228__$1;
(statearr_20241_20261[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20229 === (5))){
var inst_20205 = (state_20228[(7)]);
var state_20228__$1 = state_20228;
var statearr_20242_20262 = state_20228__$1;
(statearr_20242_20262[(2)] = inst_20205);

(statearr_20242_20262[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20229 === (10))){
var inst_20224 = (state_20228[(2)]);
var state_20228__$1 = state_20228;
var statearr_20243_20263 = state_20228__$1;
(statearr_20243_20263[(2)] = inst_20224);

(statearr_20243_20263[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20229 === (8))){
var inst_20205 = (state_20228[(7)]);
var inst_20215 = cljs.core.next(inst_20205);
var inst_20205__$1 = inst_20215;
var state_20228__$1 = (function (){var statearr_20244 = state_20228;
(statearr_20244[(7)] = inst_20205__$1);

return statearr_20244;
})();
var statearr_20245_20264 = state_20228__$1;
(statearr_20245_20264[(2)] = null);

(statearr_20245_20264[(1)] = (2));


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
});})(c__17802__auto__))
;
return ((function (switch__17619__auto__,c__17802__auto__){
return (function() {
var cljs$core$async$state_machine__17620__auto__ = null;
var cljs$core$async$state_machine__17620__auto____0 = (function (){
var statearr_20246 = [null,null,null,null,null,null,null,null];
(statearr_20246[(0)] = cljs$core$async$state_machine__17620__auto__);

(statearr_20246[(1)] = (1));

return statearr_20246;
});
var cljs$core$async$state_machine__17620__auto____1 = (function (state_20228){
while(true){
var ret_value__17621__auto__ = (function (){try{while(true){
var result__17622__auto__ = switch__17619__auto__(state_20228);
if(cljs.core.keyword_identical_QMARK_(result__17622__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17622__auto__;
}
break;
}
}catch (e20247){if((e20247 instanceof Object)){
var ex__17623__auto__ = e20247;
var statearr_20248_20265 = state_20228;
(statearr_20248_20265[(5)] = ex__17623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20228);

return cljs.core.cst$kw$recur;
} else {
throw e20247;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17621__auto__,cljs.core.cst$kw$recur)){
var G__20266 = state_20228;
state_20228 = G__20266;
continue;
} else {
return ret_value__17621__auto__;
}
break;
}
});
cljs$core$async$state_machine__17620__auto__ = function(state_20228){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17620__auto____1.call(this,state_20228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17620__auto____0;
cljs$core$async$state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17620__auto____1;
return cljs$core$async$state_machine__17620__auto__;
})()
;})(switch__17619__auto__,c__17802__auto__))
})();
var state__17804__auto__ = (function (){var statearr_20249 = (f__17803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17803__auto__.cljs$core$IFn$_invoke$arity$0() : f__17803__auto__.call(null));
(statearr_20249[(6)] = c__17802__auto__);

return statearr_20249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17804__auto__);
});})(c__17802__auto__))
);

return c__17802__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20267 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20267 = (function (ch,cs,meta20268){
this.ch = ch;
this.cs = cs;
this.meta20268 = meta20268;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20269,meta20268__$1){
var self__ = this;
var _20269__$1 = this;
return (new cljs.core.async.t_cljs$core$async20267(self__.ch,self__.cs,meta20268__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20267.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20269){
var self__ = this;
var _20269__$1 = this;
return self__.meta20268;
});})(cs))
;

cljs.core.async.t_cljs$core$async20267.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20267.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20267.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20267.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20267.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20267.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20267.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta20268], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20267.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20267.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20267";

cljs.core.async.t_cljs$core$async20267.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async20267");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20267.
 */
cljs.core.async.__GT_t_cljs$core$async20267 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20267(ch__$1,cs__$1,meta20268){
return (new cljs.core.async.t_cljs$core$async20267(ch__$1,cs__$1,meta20268));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20267(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__17802__auto___20489 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17802__auto___20489,cs,m,dchan,dctr,done){
return (function (){
var f__17803__auto__ = (function (){var switch__17619__auto__ = ((function (c__17802__auto___20489,cs,m,dchan,dctr,done){
return (function (state_20404){
var state_val_20405 = (state_20404[(1)]);
if((state_val_20405 === (7))){
var inst_20400 = (state_20404[(2)]);
var state_20404__$1 = state_20404;
var statearr_20406_20490 = state_20404__$1;
(statearr_20406_20490[(2)] = inst_20400);

(statearr_20406_20490[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (20))){
var inst_20303 = (state_20404[(7)]);
var inst_20315 = cljs.core.first(inst_20303);
var inst_20316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20315,(0),null);
var inst_20317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20315,(1),null);
var state_20404__$1 = (function (){var statearr_20407 = state_20404;
(statearr_20407[(8)] = inst_20316);

return statearr_20407;
})();
if(cljs.core.truth_(inst_20317)){
var statearr_20408_20491 = state_20404__$1;
(statearr_20408_20491[(1)] = (22));

} else {
var statearr_20409_20492 = state_20404__$1;
(statearr_20409_20492[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (27))){
var inst_20345 = (state_20404[(9)]);
var inst_20272 = (state_20404[(10)]);
var inst_20352 = (state_20404[(11)]);
var inst_20347 = (state_20404[(12)]);
var inst_20352__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20345,inst_20347);
var inst_20353 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_20352__$1,inst_20272,done);
var state_20404__$1 = (function (){var statearr_20410 = state_20404;
(statearr_20410[(11)] = inst_20352__$1);

return statearr_20410;
})();
if(cljs.core.truth_(inst_20353)){
var statearr_20411_20493 = state_20404__$1;
(statearr_20411_20493[(1)] = (30));

} else {
var statearr_20412_20494 = state_20404__$1;
(statearr_20412_20494[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (1))){
var state_20404__$1 = state_20404;
var statearr_20413_20495 = state_20404__$1;
(statearr_20413_20495[(2)] = null);

(statearr_20413_20495[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (24))){
var inst_20303 = (state_20404[(7)]);
var inst_20322 = (state_20404[(2)]);
var inst_20323 = cljs.core.next(inst_20303);
var inst_20281 = inst_20323;
var inst_20282 = null;
var inst_20283 = (0);
var inst_20284 = (0);
var state_20404__$1 = (function (){var statearr_20414 = state_20404;
(statearr_20414[(13)] = inst_20284);

(statearr_20414[(14)] = inst_20322);

(statearr_20414[(15)] = inst_20283);

(statearr_20414[(16)] = inst_20282);

(statearr_20414[(17)] = inst_20281);

return statearr_20414;
})();
var statearr_20415_20496 = state_20404__$1;
(statearr_20415_20496[(2)] = null);

(statearr_20415_20496[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (39))){
var state_20404__$1 = state_20404;
var statearr_20419_20497 = state_20404__$1;
(statearr_20419_20497[(2)] = null);

(statearr_20419_20497[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (4))){
var inst_20272 = (state_20404[(10)]);
var inst_20272__$1 = (state_20404[(2)]);
var inst_20273 = (inst_20272__$1 == null);
var state_20404__$1 = (function (){var statearr_20420 = state_20404;
(statearr_20420[(10)] = inst_20272__$1);

return statearr_20420;
})();
if(cljs.core.truth_(inst_20273)){
var statearr_20421_20498 = state_20404__$1;
(statearr_20421_20498[(1)] = (5));

} else {
var statearr_20422_20499 = state_20404__$1;
(statearr_20422_20499[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (15))){
var inst_20284 = (state_20404[(13)]);
var inst_20283 = (state_20404[(15)]);
var inst_20282 = (state_20404[(16)]);
var inst_20281 = (state_20404[(17)]);
var inst_20299 = (state_20404[(2)]);
var inst_20300 = (inst_20284 + (1));
var tmp20416 = inst_20283;
var tmp20417 = inst_20282;
var tmp20418 = inst_20281;
var inst_20281__$1 = tmp20418;
var inst_20282__$1 = tmp20417;
var inst_20283__$1 = tmp20416;
var inst_20284__$1 = inst_20300;
var state_20404__$1 = (function (){var statearr_20423 = state_20404;
(statearr_20423[(13)] = inst_20284__$1);

(statearr_20423[(18)] = inst_20299);

(statearr_20423[(15)] = inst_20283__$1);

(statearr_20423[(16)] = inst_20282__$1);

(statearr_20423[(17)] = inst_20281__$1);

return statearr_20423;
})();
var statearr_20424_20500 = state_20404__$1;
(statearr_20424_20500[(2)] = null);

(statearr_20424_20500[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (21))){
var inst_20326 = (state_20404[(2)]);
var state_20404__$1 = state_20404;
var statearr_20428_20501 = state_20404__$1;
(statearr_20428_20501[(2)] = inst_20326);

(statearr_20428_20501[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (31))){
var inst_20352 = (state_20404[(11)]);
var inst_20356 = done(null);
var inst_20357 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_20352);
var state_20404__$1 = (function (){var statearr_20429 = state_20404;
(statearr_20429[(19)] = inst_20356);

return statearr_20429;
})();
var statearr_20430_20502 = state_20404__$1;
(statearr_20430_20502[(2)] = inst_20357);

(statearr_20430_20502[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (32))){
var inst_20345 = (state_20404[(9)]);
var inst_20346 = (state_20404[(20)]);
var inst_20344 = (state_20404[(21)]);
var inst_20347 = (state_20404[(12)]);
var inst_20359 = (state_20404[(2)]);
var inst_20360 = (inst_20347 + (1));
var tmp20425 = inst_20345;
var tmp20426 = inst_20346;
var tmp20427 = inst_20344;
var inst_20344__$1 = tmp20427;
var inst_20345__$1 = tmp20425;
var inst_20346__$1 = tmp20426;
var inst_20347__$1 = inst_20360;
var state_20404__$1 = (function (){var statearr_20431 = state_20404;
(statearr_20431[(9)] = inst_20345__$1);

(statearr_20431[(22)] = inst_20359);

(statearr_20431[(20)] = inst_20346__$1);

(statearr_20431[(21)] = inst_20344__$1);

(statearr_20431[(12)] = inst_20347__$1);

return statearr_20431;
})();
var statearr_20432_20503 = state_20404__$1;
(statearr_20432_20503[(2)] = null);

(statearr_20432_20503[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (40))){
var inst_20372 = (state_20404[(23)]);
var inst_20376 = done(null);
var inst_20377 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_20372);
var state_20404__$1 = (function (){var statearr_20433 = state_20404;
(statearr_20433[(24)] = inst_20376);

return statearr_20433;
})();
var statearr_20434_20504 = state_20404__$1;
(statearr_20434_20504[(2)] = inst_20377);

(statearr_20434_20504[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (33))){
var inst_20363 = (state_20404[(25)]);
var inst_20365 = cljs.core.chunked_seq_QMARK_(inst_20363);
var state_20404__$1 = state_20404;
if(inst_20365){
var statearr_20435_20505 = state_20404__$1;
(statearr_20435_20505[(1)] = (36));

} else {
var statearr_20436_20506 = state_20404__$1;
(statearr_20436_20506[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (13))){
var inst_20293 = (state_20404[(26)]);
var inst_20296 = cljs.core.async.close_BANG_(inst_20293);
var state_20404__$1 = state_20404;
var statearr_20437_20507 = state_20404__$1;
(statearr_20437_20507[(2)] = inst_20296);

(statearr_20437_20507[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (22))){
var inst_20316 = (state_20404[(8)]);
var inst_20319 = cljs.core.async.close_BANG_(inst_20316);
var state_20404__$1 = state_20404;
var statearr_20438_20508 = state_20404__$1;
(statearr_20438_20508[(2)] = inst_20319);

(statearr_20438_20508[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (36))){
var inst_20363 = (state_20404[(25)]);
var inst_20367 = cljs.core.chunk_first(inst_20363);
var inst_20368 = cljs.core.chunk_rest(inst_20363);
var inst_20369 = cljs.core.count(inst_20367);
var inst_20344 = inst_20368;
var inst_20345 = inst_20367;
var inst_20346 = inst_20369;
var inst_20347 = (0);
var state_20404__$1 = (function (){var statearr_20439 = state_20404;
(statearr_20439[(9)] = inst_20345);

(statearr_20439[(20)] = inst_20346);

(statearr_20439[(21)] = inst_20344);

(statearr_20439[(12)] = inst_20347);

return statearr_20439;
})();
var statearr_20440_20509 = state_20404__$1;
(statearr_20440_20509[(2)] = null);

(statearr_20440_20509[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (41))){
var inst_20363 = (state_20404[(25)]);
var inst_20379 = (state_20404[(2)]);
var inst_20380 = cljs.core.next(inst_20363);
var inst_20344 = inst_20380;
var inst_20345 = null;
var inst_20346 = (0);
var inst_20347 = (0);
var state_20404__$1 = (function (){var statearr_20441 = state_20404;
(statearr_20441[(9)] = inst_20345);

(statearr_20441[(27)] = inst_20379);

(statearr_20441[(20)] = inst_20346);

(statearr_20441[(21)] = inst_20344);

(statearr_20441[(12)] = inst_20347);

return statearr_20441;
})();
var statearr_20442_20510 = state_20404__$1;
(statearr_20442_20510[(2)] = null);

(statearr_20442_20510[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (43))){
var state_20404__$1 = state_20404;
var statearr_20443_20511 = state_20404__$1;
(statearr_20443_20511[(2)] = null);

(statearr_20443_20511[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (29))){
var inst_20388 = (state_20404[(2)]);
var state_20404__$1 = state_20404;
var statearr_20444_20512 = state_20404__$1;
(statearr_20444_20512[(2)] = inst_20388);

(statearr_20444_20512[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (44))){
var inst_20397 = (state_20404[(2)]);
var state_20404__$1 = (function (){var statearr_20445 = state_20404;
(statearr_20445[(28)] = inst_20397);

return statearr_20445;
})();
var statearr_20446_20513 = state_20404__$1;
(statearr_20446_20513[(2)] = null);

(statearr_20446_20513[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (6))){
var inst_20336 = (state_20404[(29)]);
var inst_20335 = cljs.core.deref(cs);
var inst_20336__$1 = cljs.core.keys(inst_20335);
var inst_20337 = cljs.core.count(inst_20336__$1);
var inst_20338 = cljs.core.reset_BANG_(dctr,inst_20337);
var inst_20343 = cljs.core.seq(inst_20336__$1);
var inst_20344 = inst_20343;
var inst_20345 = null;
var inst_20346 = (0);
var inst_20347 = (0);
var state_20404__$1 = (function (){var statearr_20447 = state_20404;
(statearr_20447[(9)] = inst_20345);

(statearr_20447[(29)] = inst_20336__$1);

(statearr_20447[(30)] = inst_20338);

(statearr_20447[(20)] = inst_20346);

(statearr_20447[(21)] = inst_20344);

(statearr_20447[(12)] = inst_20347);

return statearr_20447;
})();
var statearr_20448_20514 = state_20404__$1;
(statearr_20448_20514[(2)] = null);

(statearr_20448_20514[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (28))){
var inst_20363 = (state_20404[(25)]);
var inst_20344 = (state_20404[(21)]);
var inst_20363__$1 = cljs.core.seq(inst_20344);
var state_20404__$1 = (function (){var statearr_20449 = state_20404;
(statearr_20449[(25)] = inst_20363__$1);

return statearr_20449;
})();
if(inst_20363__$1){
var statearr_20450_20515 = state_20404__$1;
(statearr_20450_20515[(1)] = (33));

} else {
var statearr_20451_20516 = state_20404__$1;
(statearr_20451_20516[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (25))){
var inst_20346 = (state_20404[(20)]);
var inst_20347 = (state_20404[(12)]);
var inst_20349 = (inst_20347 < inst_20346);
var inst_20350 = inst_20349;
var state_20404__$1 = state_20404;
if(cljs.core.truth_(inst_20350)){
var statearr_20452_20517 = state_20404__$1;
(statearr_20452_20517[(1)] = (27));

} else {
var statearr_20453_20518 = state_20404__$1;
(statearr_20453_20518[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (34))){
var state_20404__$1 = state_20404;
var statearr_20454_20519 = state_20404__$1;
(statearr_20454_20519[(2)] = null);

(statearr_20454_20519[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (17))){
var state_20404__$1 = state_20404;
var statearr_20455_20520 = state_20404__$1;
(statearr_20455_20520[(2)] = null);

(statearr_20455_20520[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (3))){
var inst_20402 = (state_20404[(2)]);
var state_20404__$1 = state_20404;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20404__$1,inst_20402);
} else {
if((state_val_20405 === (12))){
var inst_20331 = (state_20404[(2)]);
var state_20404__$1 = state_20404;
var statearr_20456_20521 = state_20404__$1;
(statearr_20456_20521[(2)] = inst_20331);

(statearr_20456_20521[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (2))){
var state_20404__$1 = state_20404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20404__$1,(4),ch);
} else {
if((state_val_20405 === (23))){
var state_20404__$1 = state_20404;
var statearr_20457_20522 = state_20404__$1;
(statearr_20457_20522[(2)] = null);

(statearr_20457_20522[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (35))){
var inst_20386 = (state_20404[(2)]);
var state_20404__$1 = state_20404;
var statearr_20458_20523 = state_20404__$1;
(statearr_20458_20523[(2)] = inst_20386);

(statearr_20458_20523[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (19))){
var inst_20303 = (state_20404[(7)]);
var inst_20307 = cljs.core.chunk_first(inst_20303);
var inst_20308 = cljs.core.chunk_rest(inst_20303);
var inst_20309 = cljs.core.count(inst_20307);
var inst_20281 = inst_20308;
var inst_20282 = inst_20307;
var inst_20283 = inst_20309;
var inst_20284 = (0);
var state_20404__$1 = (function (){var statearr_20459 = state_20404;
(statearr_20459[(13)] = inst_20284);

(statearr_20459[(15)] = inst_20283);

(statearr_20459[(16)] = inst_20282);

(statearr_20459[(17)] = inst_20281);

return statearr_20459;
})();
var statearr_20460_20524 = state_20404__$1;
(statearr_20460_20524[(2)] = null);

(statearr_20460_20524[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (11))){
var inst_20303 = (state_20404[(7)]);
var inst_20281 = (state_20404[(17)]);
var inst_20303__$1 = cljs.core.seq(inst_20281);
var state_20404__$1 = (function (){var statearr_20461 = state_20404;
(statearr_20461[(7)] = inst_20303__$1);

return statearr_20461;
})();
if(inst_20303__$1){
var statearr_20462_20525 = state_20404__$1;
(statearr_20462_20525[(1)] = (16));

} else {
var statearr_20463_20526 = state_20404__$1;
(statearr_20463_20526[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (9))){
var inst_20333 = (state_20404[(2)]);
var state_20404__$1 = state_20404;
var statearr_20464_20527 = state_20404__$1;
(statearr_20464_20527[(2)] = inst_20333);

(statearr_20464_20527[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (5))){
var inst_20279 = cljs.core.deref(cs);
var inst_20280 = cljs.core.seq(inst_20279);
var inst_20281 = inst_20280;
var inst_20282 = null;
var inst_20283 = (0);
var inst_20284 = (0);
var state_20404__$1 = (function (){var statearr_20465 = state_20404;
(statearr_20465[(13)] = inst_20284);

(statearr_20465[(15)] = inst_20283);

(statearr_20465[(16)] = inst_20282);

(statearr_20465[(17)] = inst_20281);

return statearr_20465;
})();
var statearr_20466_20528 = state_20404__$1;
(statearr_20466_20528[(2)] = null);

(statearr_20466_20528[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (14))){
var state_20404__$1 = state_20404;
var statearr_20467_20529 = state_20404__$1;
(statearr_20467_20529[(2)] = null);

(statearr_20467_20529[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (45))){
var inst_20394 = (state_20404[(2)]);
var state_20404__$1 = state_20404;
var statearr_20468_20530 = state_20404__$1;
(statearr_20468_20530[(2)] = inst_20394);

(statearr_20468_20530[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (26))){
var inst_20336 = (state_20404[(29)]);
var inst_20390 = (state_20404[(2)]);
var inst_20391 = cljs.core.seq(inst_20336);
var state_20404__$1 = (function (){var statearr_20469 = state_20404;
(statearr_20469[(31)] = inst_20390);

return statearr_20469;
})();
if(inst_20391){
var statearr_20470_20531 = state_20404__$1;
(statearr_20470_20531[(1)] = (42));

} else {
var statearr_20471_20532 = state_20404__$1;
(statearr_20471_20532[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (16))){
var inst_20303 = (state_20404[(7)]);
var inst_20305 = cljs.core.chunked_seq_QMARK_(inst_20303);
var state_20404__$1 = state_20404;
if(inst_20305){
var statearr_20472_20533 = state_20404__$1;
(statearr_20472_20533[(1)] = (19));

} else {
var statearr_20473_20534 = state_20404__$1;
(statearr_20473_20534[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (38))){
var inst_20383 = (state_20404[(2)]);
var state_20404__$1 = state_20404;
var statearr_20474_20535 = state_20404__$1;
(statearr_20474_20535[(2)] = inst_20383);

(statearr_20474_20535[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (30))){
var state_20404__$1 = state_20404;
var statearr_20475_20536 = state_20404__$1;
(statearr_20475_20536[(2)] = null);

(statearr_20475_20536[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (10))){
var inst_20284 = (state_20404[(13)]);
var inst_20282 = (state_20404[(16)]);
var inst_20292 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20282,inst_20284);
var inst_20293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20292,(0),null);
var inst_20294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20292,(1),null);
var state_20404__$1 = (function (){var statearr_20476 = state_20404;
(statearr_20476[(26)] = inst_20293);

return statearr_20476;
})();
if(cljs.core.truth_(inst_20294)){
var statearr_20477_20537 = state_20404__$1;
(statearr_20477_20537[(1)] = (13));

} else {
var statearr_20478_20538 = state_20404__$1;
(statearr_20478_20538[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (18))){
var inst_20329 = (state_20404[(2)]);
var state_20404__$1 = state_20404;
var statearr_20479_20539 = state_20404__$1;
(statearr_20479_20539[(2)] = inst_20329);

(statearr_20479_20539[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (42))){
var state_20404__$1 = state_20404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20404__$1,(45),dchan);
} else {
if((state_val_20405 === (37))){
var inst_20363 = (state_20404[(25)]);
var inst_20272 = (state_20404[(10)]);
var inst_20372 = (state_20404[(23)]);
var inst_20372__$1 = cljs.core.first(inst_20363);
var inst_20373 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_20372__$1,inst_20272,done);
var state_20404__$1 = (function (){var statearr_20480 = state_20404;
(statearr_20480[(23)] = inst_20372__$1);

return statearr_20480;
})();
if(cljs.core.truth_(inst_20373)){
var statearr_20481_20540 = state_20404__$1;
(statearr_20481_20540[(1)] = (39));

} else {
var statearr_20482_20541 = state_20404__$1;
(statearr_20482_20541[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20405 === (8))){
var inst_20284 = (state_20404[(13)]);
var inst_20283 = (state_20404[(15)]);
var inst_20286 = (inst_20284 < inst_20283);
var inst_20287 = inst_20286;
var state_20404__$1 = state_20404;
if(cljs.core.truth_(inst_20287)){
var statearr_20483_20542 = state_20404__$1;
(statearr_20483_20542[(1)] = (10));

} else {
var statearr_20484_20543 = state_20404__$1;
(statearr_20484_20543[(1)] = (11));

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
});})(c__17802__auto___20489,cs,m,dchan,dctr,done))
;
return ((function (switch__17619__auto__,c__17802__auto___20489,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__17620__auto__ = null;
var cljs$core$async$mult_$_state_machine__17620__auto____0 = (function (){
var statearr_20485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20485[(0)] = cljs$core$async$mult_$_state_machine__17620__auto__);

(statearr_20485[(1)] = (1));

return statearr_20485;
});
var cljs$core$async$mult_$_state_machine__17620__auto____1 = (function (state_20404){
while(true){
var ret_value__17621__auto__ = (function (){try{while(true){
var result__17622__auto__ = switch__17619__auto__(state_20404);
if(cljs.core.keyword_identical_QMARK_(result__17622__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17622__auto__;
}
break;
}
}catch (e20486){if((e20486 instanceof Object)){
var ex__17623__auto__ = e20486;
var statearr_20487_20544 = state_20404;
(statearr_20487_20544[(5)] = ex__17623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20404);

return cljs.core.cst$kw$recur;
} else {
throw e20486;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17621__auto__,cljs.core.cst$kw$recur)){
var G__20545 = state_20404;
state_20404 = G__20545;
continue;
} else {
return ret_value__17621__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17620__auto__ = function(state_20404){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17620__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17620__auto____1.call(this,state_20404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17620__auto____0;
cljs$core$async$mult_$_state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17620__auto____1;
return cljs$core$async$mult_$_state_machine__17620__auto__;
})()
;})(switch__17619__auto__,c__17802__auto___20489,cs,m,dchan,dctr,done))
})();
var state__17804__auto__ = (function (){var statearr_20488 = (f__17803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17803__auto__.cljs$core$IFn$_invoke$arity$0() : f__17803__auto__.call(null));
(statearr_20488[(6)] = c__17802__auto___20489);

return statearr_20488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17804__auto__);
});})(c__17802__auto___20489,cs,m,dchan,dctr,done))
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
var G__20547 = arguments.length;
switch (G__20547) {
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
var len__4531__auto___20559 = arguments.length;
var i__4532__auto___20560 = (0);
while(true){
if((i__4532__auto___20560 < len__4531__auto___20559)){
args__4534__auto__.push((arguments[i__4532__auto___20560]));

var G__20561 = (i__4532__auto___20560 + (1));
i__4532__auto___20560 = G__20561;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20553){
var map__20554 = p__20553;
var map__20554__$1 = ((((!((map__20554 == null)))?(((((map__20554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20554):map__20554);
var opts = map__20554__$1;
var statearr_20556_20562 = state;
(statearr_20556_20562[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__20554,map__20554__$1,opts){
return (function (val){
var statearr_20557_20563 = state;
(statearr_20557_20563[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__20554,map__20554__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_20558_20564 = state;
(statearr_20558_20564[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20549){
var G__20550 = cljs.core.first(seq20549);
var seq20549__$1 = cljs.core.next(seq20549);
var G__20551 = cljs.core.first(seq20549__$1);
var seq20549__$2 = cljs.core.next(seq20549__$1);
var G__20552 = cljs.core.first(seq20549__$2);
var seq20549__$3 = cljs.core.next(seq20549__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20550,G__20551,G__20552,seq20549__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20565 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20565 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta20566){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta20566 = meta20566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20567,meta20566__$1){
var self__ = this;
var _20567__$1 = this;
return (new cljs.core.async.t_cljs$core$async20565(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta20566__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20565.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20567){
var self__ = this;
var _20567__$1 = this;
return self__.meta20566;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20565.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20565.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20565.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20565.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20565.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20565.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20565.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20565.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async20565.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta20566], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20565.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20565.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20565";

cljs.core.async.t_cljs$core$async20565.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async20565");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20565.
 */
cljs.core.async.__GT_t_cljs$core$async20565 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async20565(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta20566){
return (new cljs.core.async.t_cljs$core$async20565(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta20566));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async20565(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17802__auto___20729 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17802__auto___20729,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17803__auto__ = (function (){var switch__17619__auto__ = ((function (c__17802__auto___20729,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20669){
var state_val_20670 = (state_20669[(1)]);
if((state_val_20670 === (7))){
var inst_20584 = (state_20669[(2)]);
var state_20669__$1 = state_20669;
var statearr_20671_20730 = state_20669__$1;
(statearr_20671_20730[(2)] = inst_20584);

(statearr_20671_20730[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (20))){
var inst_20596 = (state_20669[(7)]);
var state_20669__$1 = state_20669;
var statearr_20672_20731 = state_20669__$1;
(statearr_20672_20731[(2)] = inst_20596);

(statearr_20672_20731[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (27))){
var state_20669__$1 = state_20669;
var statearr_20673_20732 = state_20669__$1;
(statearr_20673_20732[(2)] = null);

(statearr_20673_20732[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (1))){
var inst_20571 = (state_20669[(8)]);
var inst_20571__$1 = calc_state();
var inst_20573 = (inst_20571__$1 == null);
var inst_20574 = cljs.core.not(inst_20573);
var state_20669__$1 = (function (){var statearr_20674 = state_20669;
(statearr_20674[(8)] = inst_20571__$1);

return statearr_20674;
})();
if(inst_20574){
var statearr_20675_20733 = state_20669__$1;
(statearr_20675_20733[(1)] = (2));

} else {
var statearr_20676_20734 = state_20669__$1;
(statearr_20676_20734[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (24))){
var inst_20629 = (state_20669[(9)]);
var inst_20643 = (state_20669[(10)]);
var inst_20620 = (state_20669[(11)]);
var inst_20643__$1 = (inst_20620.cljs$core$IFn$_invoke$arity$1 ? inst_20620.cljs$core$IFn$_invoke$arity$1(inst_20629) : inst_20620.call(null,inst_20629));
var state_20669__$1 = (function (){var statearr_20677 = state_20669;
(statearr_20677[(10)] = inst_20643__$1);

return statearr_20677;
})();
if(cljs.core.truth_(inst_20643__$1)){
var statearr_20678_20735 = state_20669__$1;
(statearr_20678_20735[(1)] = (29));

} else {
var statearr_20679_20736 = state_20669__$1;
(statearr_20679_20736[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (4))){
var inst_20587 = (state_20669[(2)]);
var state_20669__$1 = state_20669;
if(cljs.core.truth_(inst_20587)){
var statearr_20680_20737 = state_20669__$1;
(statearr_20680_20737[(1)] = (8));

} else {
var statearr_20681_20738 = state_20669__$1;
(statearr_20681_20738[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (15))){
var inst_20614 = (state_20669[(2)]);
var state_20669__$1 = state_20669;
if(cljs.core.truth_(inst_20614)){
var statearr_20682_20739 = state_20669__$1;
(statearr_20682_20739[(1)] = (19));

} else {
var statearr_20683_20740 = state_20669__$1;
(statearr_20683_20740[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (21))){
var inst_20619 = (state_20669[(12)]);
var inst_20619__$1 = (state_20669[(2)]);
var inst_20620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20619__$1,cljs.core.cst$kw$solos);
var inst_20621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20619__$1,cljs.core.cst$kw$mutes);
var inst_20622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20619__$1,cljs.core.cst$kw$reads);
var state_20669__$1 = (function (){var statearr_20684 = state_20669;
(statearr_20684[(12)] = inst_20619__$1);

(statearr_20684[(13)] = inst_20621);

(statearr_20684[(11)] = inst_20620);

return statearr_20684;
})();
return cljs.core.async.ioc_alts_BANG_(state_20669__$1,(22),inst_20622);
} else {
if((state_val_20670 === (31))){
var inst_20651 = (state_20669[(2)]);
var state_20669__$1 = state_20669;
if(cljs.core.truth_(inst_20651)){
var statearr_20685_20741 = state_20669__$1;
(statearr_20685_20741[(1)] = (32));

} else {
var statearr_20686_20742 = state_20669__$1;
(statearr_20686_20742[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (32))){
var inst_20628 = (state_20669[(14)]);
var state_20669__$1 = state_20669;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20669__$1,(35),out,inst_20628);
} else {
if((state_val_20670 === (33))){
var inst_20619 = (state_20669[(12)]);
var inst_20596 = inst_20619;
var state_20669__$1 = (function (){var statearr_20687 = state_20669;
(statearr_20687[(7)] = inst_20596);

return statearr_20687;
})();
var statearr_20688_20743 = state_20669__$1;
(statearr_20688_20743[(2)] = null);

(statearr_20688_20743[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (13))){
var inst_20596 = (state_20669[(7)]);
var inst_20603 = inst_20596.cljs$lang$protocol_mask$partition0$;
var inst_20604 = (inst_20603 & (64));
var inst_20605 = inst_20596.cljs$core$ISeq$;
var inst_20606 = (cljs.core.PROTOCOL_SENTINEL === inst_20605);
var inst_20607 = ((inst_20604) || (inst_20606));
var state_20669__$1 = state_20669;
if(cljs.core.truth_(inst_20607)){
var statearr_20689_20744 = state_20669__$1;
(statearr_20689_20744[(1)] = (16));

} else {
var statearr_20690_20745 = state_20669__$1;
(statearr_20690_20745[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (22))){
var inst_20628 = (state_20669[(14)]);
var inst_20629 = (state_20669[(9)]);
var inst_20627 = (state_20669[(2)]);
var inst_20628__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20627,(0),null);
var inst_20629__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20627,(1),null);
var inst_20630 = (inst_20628__$1 == null);
var inst_20631 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20629__$1,change);
var inst_20632 = ((inst_20630) || (inst_20631));
var state_20669__$1 = (function (){var statearr_20691 = state_20669;
(statearr_20691[(14)] = inst_20628__$1);

(statearr_20691[(9)] = inst_20629__$1);

return statearr_20691;
})();
if(cljs.core.truth_(inst_20632)){
var statearr_20692_20746 = state_20669__$1;
(statearr_20692_20746[(1)] = (23));

} else {
var statearr_20693_20747 = state_20669__$1;
(statearr_20693_20747[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (36))){
var inst_20619 = (state_20669[(12)]);
var inst_20596 = inst_20619;
var state_20669__$1 = (function (){var statearr_20694 = state_20669;
(statearr_20694[(7)] = inst_20596);

return statearr_20694;
})();
var statearr_20695_20748 = state_20669__$1;
(statearr_20695_20748[(2)] = null);

(statearr_20695_20748[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (29))){
var inst_20643 = (state_20669[(10)]);
var state_20669__$1 = state_20669;
var statearr_20696_20749 = state_20669__$1;
(statearr_20696_20749[(2)] = inst_20643);

(statearr_20696_20749[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (6))){
var state_20669__$1 = state_20669;
var statearr_20697_20750 = state_20669__$1;
(statearr_20697_20750[(2)] = false);

(statearr_20697_20750[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (28))){
var inst_20639 = (state_20669[(2)]);
var inst_20640 = calc_state();
var inst_20596 = inst_20640;
var state_20669__$1 = (function (){var statearr_20698 = state_20669;
(statearr_20698[(7)] = inst_20596);

(statearr_20698[(15)] = inst_20639);

return statearr_20698;
})();
var statearr_20699_20751 = state_20669__$1;
(statearr_20699_20751[(2)] = null);

(statearr_20699_20751[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (25))){
var inst_20665 = (state_20669[(2)]);
var state_20669__$1 = state_20669;
var statearr_20700_20752 = state_20669__$1;
(statearr_20700_20752[(2)] = inst_20665);

(statearr_20700_20752[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (34))){
var inst_20663 = (state_20669[(2)]);
var state_20669__$1 = state_20669;
var statearr_20701_20753 = state_20669__$1;
(statearr_20701_20753[(2)] = inst_20663);

(statearr_20701_20753[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (17))){
var state_20669__$1 = state_20669;
var statearr_20702_20754 = state_20669__$1;
(statearr_20702_20754[(2)] = false);

(statearr_20702_20754[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (3))){
var state_20669__$1 = state_20669;
var statearr_20703_20755 = state_20669__$1;
(statearr_20703_20755[(2)] = false);

(statearr_20703_20755[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (12))){
var inst_20667 = (state_20669[(2)]);
var state_20669__$1 = state_20669;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20669__$1,inst_20667);
} else {
if((state_val_20670 === (2))){
var inst_20571 = (state_20669[(8)]);
var inst_20576 = inst_20571.cljs$lang$protocol_mask$partition0$;
var inst_20577 = (inst_20576 & (64));
var inst_20578 = inst_20571.cljs$core$ISeq$;
var inst_20579 = (cljs.core.PROTOCOL_SENTINEL === inst_20578);
var inst_20580 = ((inst_20577) || (inst_20579));
var state_20669__$1 = state_20669;
if(cljs.core.truth_(inst_20580)){
var statearr_20704_20756 = state_20669__$1;
(statearr_20704_20756[(1)] = (5));

} else {
var statearr_20705_20757 = state_20669__$1;
(statearr_20705_20757[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (23))){
var inst_20628 = (state_20669[(14)]);
var inst_20634 = (inst_20628 == null);
var state_20669__$1 = state_20669;
if(cljs.core.truth_(inst_20634)){
var statearr_20706_20758 = state_20669__$1;
(statearr_20706_20758[(1)] = (26));

} else {
var statearr_20707_20759 = state_20669__$1;
(statearr_20707_20759[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (35))){
var inst_20654 = (state_20669[(2)]);
var state_20669__$1 = state_20669;
if(cljs.core.truth_(inst_20654)){
var statearr_20708_20760 = state_20669__$1;
(statearr_20708_20760[(1)] = (36));

} else {
var statearr_20709_20761 = state_20669__$1;
(statearr_20709_20761[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (19))){
var inst_20596 = (state_20669[(7)]);
var inst_20616 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_20596);
var state_20669__$1 = state_20669;
var statearr_20710_20762 = state_20669__$1;
(statearr_20710_20762[(2)] = inst_20616);

(statearr_20710_20762[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (11))){
var inst_20596 = (state_20669[(7)]);
var inst_20600 = (inst_20596 == null);
var inst_20601 = cljs.core.not(inst_20600);
var state_20669__$1 = state_20669;
if(inst_20601){
var statearr_20711_20763 = state_20669__$1;
(statearr_20711_20763[(1)] = (13));

} else {
var statearr_20712_20764 = state_20669__$1;
(statearr_20712_20764[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (9))){
var inst_20571 = (state_20669[(8)]);
var state_20669__$1 = state_20669;
var statearr_20713_20765 = state_20669__$1;
(statearr_20713_20765[(2)] = inst_20571);

(statearr_20713_20765[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (5))){
var state_20669__$1 = state_20669;
var statearr_20714_20766 = state_20669__$1;
(statearr_20714_20766[(2)] = true);

(statearr_20714_20766[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (14))){
var state_20669__$1 = state_20669;
var statearr_20715_20767 = state_20669__$1;
(statearr_20715_20767[(2)] = false);

(statearr_20715_20767[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (26))){
var inst_20629 = (state_20669[(9)]);
var inst_20636 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_20629);
var state_20669__$1 = state_20669;
var statearr_20716_20768 = state_20669__$1;
(statearr_20716_20768[(2)] = inst_20636);

(statearr_20716_20768[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (16))){
var state_20669__$1 = state_20669;
var statearr_20717_20769 = state_20669__$1;
(statearr_20717_20769[(2)] = true);

(statearr_20717_20769[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (38))){
var inst_20659 = (state_20669[(2)]);
var state_20669__$1 = state_20669;
var statearr_20718_20770 = state_20669__$1;
(statearr_20718_20770[(2)] = inst_20659);

(statearr_20718_20770[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (30))){
var inst_20629 = (state_20669[(9)]);
var inst_20621 = (state_20669[(13)]);
var inst_20620 = (state_20669[(11)]);
var inst_20646 = cljs.core.empty_QMARK_(inst_20620);
var inst_20647 = (inst_20621.cljs$core$IFn$_invoke$arity$1 ? inst_20621.cljs$core$IFn$_invoke$arity$1(inst_20629) : inst_20621.call(null,inst_20629));
var inst_20648 = cljs.core.not(inst_20647);
var inst_20649 = ((inst_20646) && (inst_20648));
var state_20669__$1 = state_20669;
var statearr_20719_20771 = state_20669__$1;
(statearr_20719_20771[(2)] = inst_20649);

(statearr_20719_20771[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (10))){
var inst_20571 = (state_20669[(8)]);
var inst_20592 = (state_20669[(2)]);
var inst_20593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20592,cljs.core.cst$kw$solos);
var inst_20594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20592,cljs.core.cst$kw$mutes);
var inst_20595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20592,cljs.core.cst$kw$reads);
var inst_20596 = inst_20571;
var state_20669__$1 = (function (){var statearr_20720 = state_20669;
(statearr_20720[(16)] = inst_20593);

(statearr_20720[(17)] = inst_20595);

(statearr_20720[(7)] = inst_20596);

(statearr_20720[(18)] = inst_20594);

return statearr_20720;
})();
var statearr_20721_20772 = state_20669__$1;
(statearr_20721_20772[(2)] = null);

(statearr_20721_20772[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (18))){
var inst_20611 = (state_20669[(2)]);
var state_20669__$1 = state_20669;
var statearr_20722_20773 = state_20669__$1;
(statearr_20722_20773[(2)] = inst_20611);

(statearr_20722_20773[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (37))){
var state_20669__$1 = state_20669;
var statearr_20723_20774 = state_20669__$1;
(statearr_20723_20774[(2)] = null);

(statearr_20723_20774[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20670 === (8))){
var inst_20571 = (state_20669[(8)]);
var inst_20589 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_20571);
var state_20669__$1 = state_20669;
var statearr_20724_20775 = state_20669__$1;
(statearr_20724_20775[(2)] = inst_20589);

(statearr_20724_20775[(1)] = (10));


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
});})(c__17802__auto___20729,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__17619__auto__,c__17802__auto___20729,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__17620__auto__ = null;
var cljs$core$async$mix_$_state_machine__17620__auto____0 = (function (){
var statearr_20725 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20725[(0)] = cljs$core$async$mix_$_state_machine__17620__auto__);

(statearr_20725[(1)] = (1));

return statearr_20725;
});
var cljs$core$async$mix_$_state_machine__17620__auto____1 = (function (state_20669){
while(true){
var ret_value__17621__auto__ = (function (){try{while(true){
var result__17622__auto__ = switch__17619__auto__(state_20669);
if(cljs.core.keyword_identical_QMARK_(result__17622__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17622__auto__;
}
break;
}
}catch (e20726){if((e20726 instanceof Object)){
var ex__17623__auto__ = e20726;
var statearr_20727_20776 = state_20669;
(statearr_20727_20776[(5)] = ex__17623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20669);

return cljs.core.cst$kw$recur;
} else {
throw e20726;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17621__auto__,cljs.core.cst$kw$recur)){
var G__20777 = state_20669;
state_20669 = G__20777;
continue;
} else {
return ret_value__17621__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17620__auto__ = function(state_20669){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17620__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17620__auto____1.call(this,state_20669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17620__auto____0;
cljs$core$async$mix_$_state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17620__auto____1;
return cljs$core$async$mix_$_state_machine__17620__auto__;
})()
;})(switch__17619__auto__,c__17802__auto___20729,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17804__auto__ = (function (){var statearr_20728 = (f__17803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17803__auto__.cljs$core$IFn$_invoke$arity$0() : f__17803__auto__.call(null));
(statearr_20728[(6)] = c__17802__auto___20729);

return statearr_20728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17804__auto__);
});})(c__17802__auto___20729,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__20779 = arguments.length;
switch (G__20779) {
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
var G__20783 = arguments.length;
switch (G__20783) {
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
return (function (p1__20781_SHARP_){
if(cljs.core.truth_((p1__20781_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__20781_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__20781_SHARP_.call(null,topic)))){
return p1__20781_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20781_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20784 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20784 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20785){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20785 = meta20785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20786,meta20785__$1){
var self__ = this;
var _20786__$1 = this;
return (new cljs.core.async.t_cljs$core$async20784(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20785__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20784.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20786){
var self__ = this;
var _20786__$1 = this;
return self__.meta20785;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20784.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20784.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20784.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20784.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20784.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async20784.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20784.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20784.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta20785], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20784.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20784.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20784";

cljs.core.async.t_cljs$core$async20784.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async20784");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20784.
 */
cljs.core.async.__GT_t_cljs$core$async20784 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async20784(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20785){
return (new cljs.core.async.t_cljs$core$async20784(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20785));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async20784(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17802__auto___20904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17802__auto___20904,mults,ensure_mult,p){
return (function (){
var f__17803__auto__ = (function (){var switch__17619__auto__ = ((function (c__17802__auto___20904,mults,ensure_mult,p){
return (function (state_20858){
var state_val_20859 = (state_20858[(1)]);
if((state_val_20859 === (7))){
var inst_20854 = (state_20858[(2)]);
var state_20858__$1 = state_20858;
var statearr_20860_20905 = state_20858__$1;
(statearr_20860_20905[(2)] = inst_20854);

(statearr_20860_20905[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (20))){
var state_20858__$1 = state_20858;
var statearr_20861_20906 = state_20858__$1;
(statearr_20861_20906[(2)] = null);

(statearr_20861_20906[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (1))){
var state_20858__$1 = state_20858;
var statearr_20862_20907 = state_20858__$1;
(statearr_20862_20907[(2)] = null);

(statearr_20862_20907[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (24))){
var inst_20837 = (state_20858[(7)]);
var inst_20846 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_20837);
var state_20858__$1 = state_20858;
var statearr_20863_20908 = state_20858__$1;
(statearr_20863_20908[(2)] = inst_20846);

(statearr_20863_20908[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (4))){
var inst_20789 = (state_20858[(8)]);
var inst_20789__$1 = (state_20858[(2)]);
var inst_20790 = (inst_20789__$1 == null);
var state_20858__$1 = (function (){var statearr_20864 = state_20858;
(statearr_20864[(8)] = inst_20789__$1);

return statearr_20864;
})();
if(cljs.core.truth_(inst_20790)){
var statearr_20865_20909 = state_20858__$1;
(statearr_20865_20909[(1)] = (5));

} else {
var statearr_20866_20910 = state_20858__$1;
(statearr_20866_20910[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (15))){
var inst_20831 = (state_20858[(2)]);
var state_20858__$1 = state_20858;
var statearr_20867_20911 = state_20858__$1;
(statearr_20867_20911[(2)] = inst_20831);

(statearr_20867_20911[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (21))){
var inst_20851 = (state_20858[(2)]);
var state_20858__$1 = (function (){var statearr_20868 = state_20858;
(statearr_20868[(9)] = inst_20851);

return statearr_20868;
})();
var statearr_20869_20912 = state_20858__$1;
(statearr_20869_20912[(2)] = null);

(statearr_20869_20912[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (13))){
var inst_20813 = (state_20858[(10)]);
var inst_20815 = cljs.core.chunked_seq_QMARK_(inst_20813);
var state_20858__$1 = state_20858;
if(inst_20815){
var statearr_20870_20913 = state_20858__$1;
(statearr_20870_20913[(1)] = (16));

} else {
var statearr_20871_20914 = state_20858__$1;
(statearr_20871_20914[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (22))){
var inst_20843 = (state_20858[(2)]);
var state_20858__$1 = state_20858;
if(cljs.core.truth_(inst_20843)){
var statearr_20872_20915 = state_20858__$1;
(statearr_20872_20915[(1)] = (23));

} else {
var statearr_20873_20916 = state_20858__$1;
(statearr_20873_20916[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (6))){
var inst_20839 = (state_20858[(11)]);
var inst_20837 = (state_20858[(7)]);
var inst_20789 = (state_20858[(8)]);
var inst_20837__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_20789) : topic_fn.call(null,inst_20789));
var inst_20838 = cljs.core.deref(mults);
var inst_20839__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20838,inst_20837__$1);
var state_20858__$1 = (function (){var statearr_20874 = state_20858;
(statearr_20874[(11)] = inst_20839__$1);

(statearr_20874[(7)] = inst_20837__$1);

return statearr_20874;
})();
if(cljs.core.truth_(inst_20839__$1)){
var statearr_20875_20917 = state_20858__$1;
(statearr_20875_20917[(1)] = (19));

} else {
var statearr_20876_20918 = state_20858__$1;
(statearr_20876_20918[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (25))){
var inst_20848 = (state_20858[(2)]);
var state_20858__$1 = state_20858;
var statearr_20877_20919 = state_20858__$1;
(statearr_20877_20919[(2)] = inst_20848);

(statearr_20877_20919[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (17))){
var inst_20813 = (state_20858[(10)]);
var inst_20822 = cljs.core.first(inst_20813);
var inst_20823 = cljs.core.async.muxch_STAR_(inst_20822);
var inst_20824 = cljs.core.async.close_BANG_(inst_20823);
var inst_20825 = cljs.core.next(inst_20813);
var inst_20799 = inst_20825;
var inst_20800 = null;
var inst_20801 = (0);
var inst_20802 = (0);
var state_20858__$1 = (function (){var statearr_20878 = state_20858;
(statearr_20878[(12)] = inst_20802);

(statearr_20878[(13)] = inst_20801);

(statearr_20878[(14)] = inst_20800);

(statearr_20878[(15)] = inst_20824);

(statearr_20878[(16)] = inst_20799);

return statearr_20878;
})();
var statearr_20879_20920 = state_20858__$1;
(statearr_20879_20920[(2)] = null);

(statearr_20879_20920[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (3))){
var inst_20856 = (state_20858[(2)]);
var state_20858__$1 = state_20858;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20858__$1,inst_20856);
} else {
if((state_val_20859 === (12))){
var inst_20833 = (state_20858[(2)]);
var state_20858__$1 = state_20858;
var statearr_20880_20921 = state_20858__$1;
(statearr_20880_20921[(2)] = inst_20833);

(statearr_20880_20921[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (2))){
var state_20858__$1 = state_20858;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20858__$1,(4),ch);
} else {
if((state_val_20859 === (23))){
var state_20858__$1 = state_20858;
var statearr_20881_20922 = state_20858__$1;
(statearr_20881_20922[(2)] = null);

(statearr_20881_20922[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (19))){
var inst_20839 = (state_20858[(11)]);
var inst_20789 = (state_20858[(8)]);
var inst_20841 = cljs.core.async.muxch_STAR_(inst_20839);
var state_20858__$1 = state_20858;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20858__$1,(22),inst_20841,inst_20789);
} else {
if((state_val_20859 === (11))){
var inst_20813 = (state_20858[(10)]);
var inst_20799 = (state_20858[(16)]);
var inst_20813__$1 = cljs.core.seq(inst_20799);
var state_20858__$1 = (function (){var statearr_20882 = state_20858;
(statearr_20882[(10)] = inst_20813__$1);

return statearr_20882;
})();
if(inst_20813__$1){
var statearr_20883_20923 = state_20858__$1;
(statearr_20883_20923[(1)] = (13));

} else {
var statearr_20884_20924 = state_20858__$1;
(statearr_20884_20924[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (9))){
var inst_20835 = (state_20858[(2)]);
var state_20858__$1 = state_20858;
var statearr_20885_20925 = state_20858__$1;
(statearr_20885_20925[(2)] = inst_20835);

(statearr_20885_20925[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (5))){
var inst_20796 = cljs.core.deref(mults);
var inst_20797 = cljs.core.vals(inst_20796);
var inst_20798 = cljs.core.seq(inst_20797);
var inst_20799 = inst_20798;
var inst_20800 = null;
var inst_20801 = (0);
var inst_20802 = (0);
var state_20858__$1 = (function (){var statearr_20886 = state_20858;
(statearr_20886[(12)] = inst_20802);

(statearr_20886[(13)] = inst_20801);

(statearr_20886[(14)] = inst_20800);

(statearr_20886[(16)] = inst_20799);

return statearr_20886;
})();
var statearr_20887_20926 = state_20858__$1;
(statearr_20887_20926[(2)] = null);

(statearr_20887_20926[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (14))){
var state_20858__$1 = state_20858;
var statearr_20891_20927 = state_20858__$1;
(statearr_20891_20927[(2)] = null);

(statearr_20891_20927[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (16))){
var inst_20813 = (state_20858[(10)]);
var inst_20817 = cljs.core.chunk_first(inst_20813);
var inst_20818 = cljs.core.chunk_rest(inst_20813);
var inst_20819 = cljs.core.count(inst_20817);
var inst_20799 = inst_20818;
var inst_20800 = inst_20817;
var inst_20801 = inst_20819;
var inst_20802 = (0);
var state_20858__$1 = (function (){var statearr_20892 = state_20858;
(statearr_20892[(12)] = inst_20802);

(statearr_20892[(13)] = inst_20801);

(statearr_20892[(14)] = inst_20800);

(statearr_20892[(16)] = inst_20799);

return statearr_20892;
})();
var statearr_20893_20928 = state_20858__$1;
(statearr_20893_20928[(2)] = null);

(statearr_20893_20928[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (10))){
var inst_20802 = (state_20858[(12)]);
var inst_20801 = (state_20858[(13)]);
var inst_20800 = (state_20858[(14)]);
var inst_20799 = (state_20858[(16)]);
var inst_20807 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20800,inst_20802);
var inst_20808 = cljs.core.async.muxch_STAR_(inst_20807);
var inst_20809 = cljs.core.async.close_BANG_(inst_20808);
var inst_20810 = (inst_20802 + (1));
var tmp20888 = inst_20801;
var tmp20889 = inst_20800;
var tmp20890 = inst_20799;
var inst_20799__$1 = tmp20890;
var inst_20800__$1 = tmp20889;
var inst_20801__$1 = tmp20888;
var inst_20802__$1 = inst_20810;
var state_20858__$1 = (function (){var statearr_20894 = state_20858;
(statearr_20894[(12)] = inst_20802__$1);

(statearr_20894[(13)] = inst_20801__$1);

(statearr_20894[(14)] = inst_20800__$1);

(statearr_20894[(16)] = inst_20799__$1);

(statearr_20894[(17)] = inst_20809);

return statearr_20894;
})();
var statearr_20895_20929 = state_20858__$1;
(statearr_20895_20929[(2)] = null);

(statearr_20895_20929[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (18))){
var inst_20828 = (state_20858[(2)]);
var state_20858__$1 = state_20858;
var statearr_20896_20930 = state_20858__$1;
(statearr_20896_20930[(2)] = inst_20828);

(statearr_20896_20930[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (8))){
var inst_20802 = (state_20858[(12)]);
var inst_20801 = (state_20858[(13)]);
var inst_20804 = (inst_20802 < inst_20801);
var inst_20805 = inst_20804;
var state_20858__$1 = state_20858;
if(cljs.core.truth_(inst_20805)){
var statearr_20897_20931 = state_20858__$1;
(statearr_20897_20931[(1)] = (10));

} else {
var statearr_20898_20932 = state_20858__$1;
(statearr_20898_20932[(1)] = (11));

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
});})(c__17802__auto___20904,mults,ensure_mult,p))
;
return ((function (switch__17619__auto__,c__17802__auto___20904,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__17620__auto__ = null;
var cljs$core$async$state_machine__17620__auto____0 = (function (){
var statearr_20899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20899[(0)] = cljs$core$async$state_machine__17620__auto__);

(statearr_20899[(1)] = (1));

return statearr_20899;
});
var cljs$core$async$state_machine__17620__auto____1 = (function (state_20858){
while(true){
var ret_value__17621__auto__ = (function (){try{while(true){
var result__17622__auto__ = switch__17619__auto__(state_20858);
if(cljs.core.keyword_identical_QMARK_(result__17622__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17622__auto__;
}
break;
}
}catch (e20900){if((e20900 instanceof Object)){
var ex__17623__auto__ = e20900;
var statearr_20901_20933 = state_20858;
(statearr_20901_20933[(5)] = ex__17623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20858);

return cljs.core.cst$kw$recur;
} else {
throw e20900;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17621__auto__,cljs.core.cst$kw$recur)){
var G__20934 = state_20858;
state_20858 = G__20934;
continue;
} else {
return ret_value__17621__auto__;
}
break;
}
});
cljs$core$async$state_machine__17620__auto__ = function(state_20858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17620__auto____1.call(this,state_20858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17620__auto____0;
cljs$core$async$state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17620__auto____1;
return cljs$core$async$state_machine__17620__auto__;
})()
;})(switch__17619__auto__,c__17802__auto___20904,mults,ensure_mult,p))
})();
var state__17804__auto__ = (function (){var statearr_20902 = (f__17803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17803__auto__.cljs$core$IFn$_invoke$arity$0() : f__17803__auto__.call(null));
(statearr_20902[(6)] = c__17802__auto___20904);

return statearr_20902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17804__auto__);
});})(c__17802__auto___20904,mults,ensure_mult,p))
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
var G__20936 = arguments.length;
switch (G__20936) {
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
var G__20939 = arguments.length;
switch (G__20939) {
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
var G__20942 = arguments.length;
switch (G__20942) {
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
var c__17802__auto___21009 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17802__auto___21009,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17803__auto__ = (function (){var switch__17619__auto__ = ((function (c__17802__auto___21009,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20981){
var state_val_20982 = (state_20981[(1)]);
if((state_val_20982 === (7))){
var state_20981__$1 = state_20981;
var statearr_20983_21010 = state_20981__$1;
(statearr_20983_21010[(2)] = null);

(statearr_20983_21010[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20982 === (1))){
var state_20981__$1 = state_20981;
var statearr_20984_21011 = state_20981__$1;
(statearr_20984_21011[(2)] = null);

(statearr_20984_21011[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20982 === (4))){
var inst_20945 = (state_20981[(7)]);
var inst_20947 = (inst_20945 < cnt);
var state_20981__$1 = state_20981;
if(cljs.core.truth_(inst_20947)){
var statearr_20985_21012 = state_20981__$1;
(statearr_20985_21012[(1)] = (6));

} else {
var statearr_20986_21013 = state_20981__$1;
(statearr_20986_21013[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20982 === (15))){
var inst_20977 = (state_20981[(2)]);
var state_20981__$1 = state_20981;
var statearr_20987_21014 = state_20981__$1;
(statearr_20987_21014[(2)] = inst_20977);

(statearr_20987_21014[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20982 === (13))){
var inst_20970 = cljs.core.async.close_BANG_(out);
var state_20981__$1 = state_20981;
var statearr_20988_21015 = state_20981__$1;
(statearr_20988_21015[(2)] = inst_20970);

(statearr_20988_21015[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20982 === (6))){
var state_20981__$1 = state_20981;
var statearr_20989_21016 = state_20981__$1;
(statearr_20989_21016[(2)] = null);

(statearr_20989_21016[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20982 === (3))){
var inst_20979 = (state_20981[(2)]);
var state_20981__$1 = state_20981;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20981__$1,inst_20979);
} else {
if((state_val_20982 === (12))){
var inst_20967 = (state_20981[(8)]);
var inst_20967__$1 = (state_20981[(2)]);
var inst_20968 = cljs.core.some(cljs.core.nil_QMARK_,inst_20967__$1);
var state_20981__$1 = (function (){var statearr_20990 = state_20981;
(statearr_20990[(8)] = inst_20967__$1);

return statearr_20990;
})();
if(cljs.core.truth_(inst_20968)){
var statearr_20991_21017 = state_20981__$1;
(statearr_20991_21017[(1)] = (13));

} else {
var statearr_20992_21018 = state_20981__$1;
(statearr_20992_21018[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20982 === (2))){
var inst_20944 = cljs.core.reset_BANG_(dctr,cnt);
var inst_20945 = (0);
var state_20981__$1 = (function (){var statearr_20993 = state_20981;
(statearr_20993[(7)] = inst_20945);

(statearr_20993[(9)] = inst_20944);

return statearr_20993;
})();
var statearr_20994_21019 = state_20981__$1;
(statearr_20994_21019[(2)] = null);

(statearr_20994_21019[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20982 === (11))){
var inst_20945 = (state_20981[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_20981,(10),Object,null,(9));
var inst_20954 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_20945) : chs__$1.call(null,inst_20945));
var inst_20955 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_20945) : done.call(null,inst_20945));
var inst_20956 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_20954,inst_20955);
var state_20981__$1 = state_20981;
var statearr_20995_21020 = state_20981__$1;
(statearr_20995_21020[(2)] = inst_20956);


cljs.core.async.impl.ioc_helpers.process_exception(state_20981__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_20982 === (9))){
var inst_20945 = (state_20981[(7)]);
var inst_20958 = (state_20981[(2)]);
var inst_20959 = (inst_20945 + (1));
var inst_20945__$1 = inst_20959;
var state_20981__$1 = (function (){var statearr_20996 = state_20981;
(statearr_20996[(7)] = inst_20945__$1);

(statearr_20996[(10)] = inst_20958);

return statearr_20996;
})();
var statearr_20997_21021 = state_20981__$1;
(statearr_20997_21021[(2)] = null);

(statearr_20997_21021[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20982 === (5))){
var inst_20965 = (state_20981[(2)]);
var state_20981__$1 = (function (){var statearr_20998 = state_20981;
(statearr_20998[(11)] = inst_20965);

return statearr_20998;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20981__$1,(12),dchan);
} else {
if((state_val_20982 === (14))){
var inst_20967 = (state_20981[(8)]);
var inst_20972 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_20967);
var state_20981__$1 = state_20981;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20981__$1,(16),out,inst_20972);
} else {
if((state_val_20982 === (16))){
var inst_20974 = (state_20981[(2)]);
var state_20981__$1 = (function (){var statearr_20999 = state_20981;
(statearr_20999[(12)] = inst_20974);

return statearr_20999;
})();
var statearr_21000_21022 = state_20981__$1;
(statearr_21000_21022[(2)] = null);

(statearr_21000_21022[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20982 === (10))){
var inst_20949 = (state_20981[(2)]);
var inst_20950 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_20981__$1 = (function (){var statearr_21001 = state_20981;
(statearr_21001[(13)] = inst_20949);

return statearr_21001;
})();
var statearr_21002_21023 = state_20981__$1;
(statearr_21002_21023[(2)] = inst_20950);


cljs.core.async.impl.ioc_helpers.process_exception(state_20981__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_20982 === (8))){
var inst_20963 = (state_20981[(2)]);
var state_20981__$1 = state_20981;
var statearr_21003_21024 = state_20981__$1;
(statearr_21003_21024[(2)] = inst_20963);

(statearr_21003_21024[(1)] = (5));


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
});})(c__17802__auto___21009,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__17619__auto__,c__17802__auto___21009,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__17620__auto__ = null;
var cljs$core$async$state_machine__17620__auto____0 = (function (){
var statearr_21004 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21004[(0)] = cljs$core$async$state_machine__17620__auto__);

(statearr_21004[(1)] = (1));

return statearr_21004;
});
var cljs$core$async$state_machine__17620__auto____1 = (function (state_20981){
while(true){
var ret_value__17621__auto__ = (function (){try{while(true){
var result__17622__auto__ = switch__17619__auto__(state_20981);
if(cljs.core.keyword_identical_QMARK_(result__17622__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17622__auto__;
}
break;
}
}catch (e21005){if((e21005 instanceof Object)){
var ex__17623__auto__ = e21005;
var statearr_21006_21025 = state_20981;
(statearr_21006_21025[(5)] = ex__17623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20981);

return cljs.core.cst$kw$recur;
} else {
throw e21005;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17621__auto__,cljs.core.cst$kw$recur)){
var G__21026 = state_20981;
state_20981 = G__21026;
continue;
} else {
return ret_value__17621__auto__;
}
break;
}
});
cljs$core$async$state_machine__17620__auto__ = function(state_20981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17620__auto____1.call(this,state_20981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17620__auto____0;
cljs$core$async$state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17620__auto____1;
return cljs$core$async$state_machine__17620__auto__;
})()
;})(switch__17619__auto__,c__17802__auto___21009,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17804__auto__ = (function (){var statearr_21007 = (f__17803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17803__auto__.cljs$core$IFn$_invoke$arity$0() : f__17803__auto__.call(null));
(statearr_21007[(6)] = c__17802__auto___21009);

return statearr_21007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17804__auto__);
});})(c__17802__auto___21009,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__21029 = arguments.length;
switch (G__21029) {
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
var c__17802__auto___21083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17802__auto___21083,out){
return (function (){
var f__17803__auto__ = (function (){var switch__17619__auto__ = ((function (c__17802__auto___21083,out){
return (function (state_21061){
var state_val_21062 = (state_21061[(1)]);
if((state_val_21062 === (7))){
var inst_21040 = (state_21061[(7)]);
var inst_21041 = (state_21061[(8)]);
var inst_21040__$1 = (state_21061[(2)]);
var inst_21041__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21040__$1,(0),null);
var inst_21042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21040__$1,(1),null);
var inst_21043 = (inst_21041__$1 == null);
var state_21061__$1 = (function (){var statearr_21063 = state_21061;
(statearr_21063[(7)] = inst_21040__$1);

(statearr_21063[(8)] = inst_21041__$1);

(statearr_21063[(9)] = inst_21042);

return statearr_21063;
})();
if(cljs.core.truth_(inst_21043)){
var statearr_21064_21084 = state_21061__$1;
(statearr_21064_21084[(1)] = (8));

} else {
var statearr_21065_21085 = state_21061__$1;
(statearr_21065_21085[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21062 === (1))){
var inst_21030 = cljs.core.vec(chs);
var inst_21031 = inst_21030;
var state_21061__$1 = (function (){var statearr_21066 = state_21061;
(statearr_21066[(10)] = inst_21031);

return statearr_21066;
})();
var statearr_21067_21086 = state_21061__$1;
(statearr_21067_21086[(2)] = null);

(statearr_21067_21086[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21062 === (4))){
var inst_21031 = (state_21061[(10)]);
var state_21061__$1 = state_21061;
return cljs.core.async.ioc_alts_BANG_(state_21061__$1,(7),inst_21031);
} else {
if((state_val_21062 === (6))){
var inst_21057 = (state_21061[(2)]);
var state_21061__$1 = state_21061;
var statearr_21068_21087 = state_21061__$1;
(statearr_21068_21087[(2)] = inst_21057);

(statearr_21068_21087[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21062 === (3))){
var inst_21059 = (state_21061[(2)]);
var state_21061__$1 = state_21061;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21061__$1,inst_21059);
} else {
if((state_val_21062 === (2))){
var inst_21031 = (state_21061[(10)]);
var inst_21033 = cljs.core.count(inst_21031);
var inst_21034 = (inst_21033 > (0));
var state_21061__$1 = state_21061;
if(cljs.core.truth_(inst_21034)){
var statearr_21070_21088 = state_21061__$1;
(statearr_21070_21088[(1)] = (4));

} else {
var statearr_21071_21089 = state_21061__$1;
(statearr_21071_21089[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21062 === (11))){
var inst_21031 = (state_21061[(10)]);
var inst_21050 = (state_21061[(2)]);
var tmp21069 = inst_21031;
var inst_21031__$1 = tmp21069;
var state_21061__$1 = (function (){var statearr_21072 = state_21061;
(statearr_21072[(10)] = inst_21031__$1);

(statearr_21072[(11)] = inst_21050);

return statearr_21072;
})();
var statearr_21073_21090 = state_21061__$1;
(statearr_21073_21090[(2)] = null);

(statearr_21073_21090[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21062 === (9))){
var inst_21041 = (state_21061[(8)]);
var state_21061__$1 = state_21061;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21061__$1,(11),out,inst_21041);
} else {
if((state_val_21062 === (5))){
var inst_21055 = cljs.core.async.close_BANG_(out);
var state_21061__$1 = state_21061;
var statearr_21074_21091 = state_21061__$1;
(statearr_21074_21091[(2)] = inst_21055);

(statearr_21074_21091[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21062 === (10))){
var inst_21053 = (state_21061[(2)]);
var state_21061__$1 = state_21061;
var statearr_21075_21092 = state_21061__$1;
(statearr_21075_21092[(2)] = inst_21053);

(statearr_21075_21092[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21062 === (8))){
var inst_21040 = (state_21061[(7)]);
var inst_21031 = (state_21061[(10)]);
var inst_21041 = (state_21061[(8)]);
var inst_21042 = (state_21061[(9)]);
var inst_21045 = (function (){var cs = inst_21031;
var vec__21036 = inst_21040;
var v = inst_21041;
var c = inst_21042;
return ((function (cs,vec__21036,v,c,inst_21040,inst_21031,inst_21041,inst_21042,state_val_21062,c__17802__auto___21083,out){
return (function (p1__21027_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__21027_SHARP_);
});
;})(cs,vec__21036,v,c,inst_21040,inst_21031,inst_21041,inst_21042,state_val_21062,c__17802__auto___21083,out))
})();
var inst_21046 = cljs.core.filterv(inst_21045,inst_21031);
var inst_21031__$1 = inst_21046;
var state_21061__$1 = (function (){var statearr_21076 = state_21061;
(statearr_21076[(10)] = inst_21031__$1);

return statearr_21076;
})();
var statearr_21077_21093 = state_21061__$1;
(statearr_21077_21093[(2)] = null);

(statearr_21077_21093[(1)] = (2));


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
});})(c__17802__auto___21083,out))
;
return ((function (switch__17619__auto__,c__17802__auto___21083,out){
return (function() {
var cljs$core$async$state_machine__17620__auto__ = null;
var cljs$core$async$state_machine__17620__auto____0 = (function (){
var statearr_21078 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21078[(0)] = cljs$core$async$state_machine__17620__auto__);

(statearr_21078[(1)] = (1));

return statearr_21078;
});
var cljs$core$async$state_machine__17620__auto____1 = (function (state_21061){
while(true){
var ret_value__17621__auto__ = (function (){try{while(true){
var result__17622__auto__ = switch__17619__auto__(state_21061);
if(cljs.core.keyword_identical_QMARK_(result__17622__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17622__auto__;
}
break;
}
}catch (e21079){if((e21079 instanceof Object)){
var ex__17623__auto__ = e21079;
var statearr_21080_21094 = state_21061;
(statearr_21080_21094[(5)] = ex__17623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21061);

return cljs.core.cst$kw$recur;
} else {
throw e21079;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17621__auto__,cljs.core.cst$kw$recur)){
var G__21095 = state_21061;
state_21061 = G__21095;
continue;
} else {
return ret_value__17621__auto__;
}
break;
}
});
cljs$core$async$state_machine__17620__auto__ = function(state_21061){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17620__auto____1.call(this,state_21061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17620__auto____0;
cljs$core$async$state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17620__auto____1;
return cljs$core$async$state_machine__17620__auto__;
})()
;})(switch__17619__auto__,c__17802__auto___21083,out))
})();
var state__17804__auto__ = (function (){var statearr_21081 = (f__17803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17803__auto__.cljs$core$IFn$_invoke$arity$0() : f__17803__auto__.call(null));
(statearr_21081[(6)] = c__17802__auto___21083);

return statearr_21081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17804__auto__);
});})(c__17802__auto___21083,out))
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
var G__21097 = arguments.length;
switch (G__21097) {
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
var c__17802__auto___21142 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17802__auto___21142,out){
return (function (){
var f__17803__auto__ = (function (){var switch__17619__auto__ = ((function (c__17802__auto___21142,out){
return (function (state_21121){
var state_val_21122 = (state_21121[(1)]);
if((state_val_21122 === (7))){
var inst_21103 = (state_21121[(7)]);
var inst_21103__$1 = (state_21121[(2)]);
var inst_21104 = (inst_21103__$1 == null);
var inst_21105 = cljs.core.not(inst_21104);
var state_21121__$1 = (function (){var statearr_21123 = state_21121;
(statearr_21123[(7)] = inst_21103__$1);

return statearr_21123;
})();
if(inst_21105){
var statearr_21124_21143 = state_21121__$1;
(statearr_21124_21143[(1)] = (8));

} else {
var statearr_21125_21144 = state_21121__$1;
(statearr_21125_21144[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21122 === (1))){
var inst_21098 = (0);
var state_21121__$1 = (function (){var statearr_21126 = state_21121;
(statearr_21126[(8)] = inst_21098);

return statearr_21126;
})();
var statearr_21127_21145 = state_21121__$1;
(statearr_21127_21145[(2)] = null);

(statearr_21127_21145[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21122 === (4))){
var state_21121__$1 = state_21121;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21121__$1,(7),ch);
} else {
if((state_val_21122 === (6))){
var inst_21116 = (state_21121[(2)]);
var state_21121__$1 = state_21121;
var statearr_21128_21146 = state_21121__$1;
(statearr_21128_21146[(2)] = inst_21116);

(statearr_21128_21146[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21122 === (3))){
var inst_21118 = (state_21121[(2)]);
var inst_21119 = cljs.core.async.close_BANG_(out);
var state_21121__$1 = (function (){var statearr_21129 = state_21121;
(statearr_21129[(9)] = inst_21118);

return statearr_21129;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21121__$1,inst_21119);
} else {
if((state_val_21122 === (2))){
var inst_21098 = (state_21121[(8)]);
var inst_21100 = (inst_21098 < n);
var state_21121__$1 = state_21121;
if(cljs.core.truth_(inst_21100)){
var statearr_21130_21147 = state_21121__$1;
(statearr_21130_21147[(1)] = (4));

} else {
var statearr_21131_21148 = state_21121__$1;
(statearr_21131_21148[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21122 === (11))){
var inst_21098 = (state_21121[(8)]);
var inst_21108 = (state_21121[(2)]);
var inst_21109 = (inst_21098 + (1));
var inst_21098__$1 = inst_21109;
var state_21121__$1 = (function (){var statearr_21132 = state_21121;
(statearr_21132[(10)] = inst_21108);

(statearr_21132[(8)] = inst_21098__$1);

return statearr_21132;
})();
var statearr_21133_21149 = state_21121__$1;
(statearr_21133_21149[(2)] = null);

(statearr_21133_21149[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21122 === (9))){
var state_21121__$1 = state_21121;
var statearr_21134_21150 = state_21121__$1;
(statearr_21134_21150[(2)] = null);

(statearr_21134_21150[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21122 === (5))){
var state_21121__$1 = state_21121;
var statearr_21135_21151 = state_21121__$1;
(statearr_21135_21151[(2)] = null);

(statearr_21135_21151[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21122 === (10))){
var inst_21113 = (state_21121[(2)]);
var state_21121__$1 = state_21121;
var statearr_21136_21152 = state_21121__$1;
(statearr_21136_21152[(2)] = inst_21113);

(statearr_21136_21152[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21122 === (8))){
var inst_21103 = (state_21121[(7)]);
var state_21121__$1 = state_21121;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21121__$1,(11),out,inst_21103);
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
});})(c__17802__auto___21142,out))
;
return ((function (switch__17619__auto__,c__17802__auto___21142,out){
return (function() {
var cljs$core$async$state_machine__17620__auto__ = null;
var cljs$core$async$state_machine__17620__auto____0 = (function (){
var statearr_21137 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21137[(0)] = cljs$core$async$state_machine__17620__auto__);

(statearr_21137[(1)] = (1));

return statearr_21137;
});
var cljs$core$async$state_machine__17620__auto____1 = (function (state_21121){
while(true){
var ret_value__17621__auto__ = (function (){try{while(true){
var result__17622__auto__ = switch__17619__auto__(state_21121);
if(cljs.core.keyword_identical_QMARK_(result__17622__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17622__auto__;
}
break;
}
}catch (e21138){if((e21138 instanceof Object)){
var ex__17623__auto__ = e21138;
var statearr_21139_21153 = state_21121;
(statearr_21139_21153[(5)] = ex__17623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21121);

return cljs.core.cst$kw$recur;
} else {
throw e21138;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17621__auto__,cljs.core.cst$kw$recur)){
var G__21154 = state_21121;
state_21121 = G__21154;
continue;
} else {
return ret_value__17621__auto__;
}
break;
}
});
cljs$core$async$state_machine__17620__auto__ = function(state_21121){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17620__auto____1.call(this,state_21121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17620__auto____0;
cljs$core$async$state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17620__auto____1;
return cljs$core$async$state_machine__17620__auto__;
})()
;})(switch__17619__auto__,c__17802__auto___21142,out))
})();
var state__17804__auto__ = (function (){var statearr_21140 = (f__17803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17803__auto__.cljs$core$IFn$_invoke$arity$0() : f__17803__auto__.call(null));
(statearr_21140[(6)] = c__17802__auto___21142);

return statearr_21140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17804__auto__);
});})(c__17802__auto___21142,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21156 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21156 = (function (f,ch,meta21157){
this.f = f;
this.ch = ch;
this.meta21157 = meta21157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21158,meta21157__$1){
var self__ = this;
var _21158__$1 = this;
return (new cljs.core.async.t_cljs$core$async21156(self__.f,self__.ch,meta21157__$1));
});

cljs.core.async.t_cljs$core$async21156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21158){
var self__ = this;
var _21158__$1 = this;
return self__.meta21157;
});

cljs.core.async.t_cljs$core$async21156.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21156.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async21156.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async21156.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21156.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21159 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21159 = (function (f,ch,meta21157,_,fn1,meta21160){
this.f = f;
this.ch = ch;
this.meta21157 = meta21157;
this._ = _;
this.fn1 = fn1;
this.meta21160 = meta21160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21161,meta21160__$1){
var self__ = this;
var _21161__$1 = this;
return (new cljs.core.async.t_cljs$core$async21159(self__.f,self__.ch,self__.meta21157,self__._,self__.fn1,meta21160__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21159.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21161){
var self__ = this;
var _21161__$1 = this;
return self__.meta21160;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21159.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21159.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21159.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21159.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21155_SHARP_){
var G__21162 = (((p1__21155_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__21155_SHARP_) : self__.f.call(null,p1__21155_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__21162) : f1.call(null,G__21162));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21159.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta21157,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async21156], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta21160], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21159.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21159";

cljs.core.async.t_cljs$core$async21159.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async21159");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21159.
 */
cljs.core.async.__GT_t_cljs$core$async21159 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21159(f__$1,ch__$1,meta21157__$1,___$2,fn1__$1,meta21160){
return (new cljs.core.async.t_cljs$core$async21159(f__$1,ch__$1,meta21157__$1,___$2,fn1__$1,meta21160));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21159(self__.f,self__.ch,self__.meta21157,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__21163 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__21163) : self__.f.call(null,G__21163));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21156.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21156.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21156.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta21157], null);
});

cljs.core.async.t_cljs$core$async21156.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21156.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21156";

cljs.core.async.t_cljs$core$async21156.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async21156");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21156.
 */
cljs.core.async.__GT_t_cljs$core$async21156 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21156(f__$1,ch__$1,meta21157){
return (new cljs.core.async.t_cljs$core$async21156(f__$1,ch__$1,meta21157));
});

}

return (new cljs.core.async.t_cljs$core$async21156(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21164 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21164 = (function (f,ch,meta21165){
this.f = f;
this.ch = ch;
this.meta21165 = meta21165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21166,meta21165__$1){
var self__ = this;
var _21166__$1 = this;
return (new cljs.core.async.t_cljs$core$async21164(self__.f,self__.ch,meta21165__$1));
});

cljs.core.async.t_cljs$core$async21164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21166){
var self__ = this;
var _21166__$1 = this;
return self__.meta21165;
});

cljs.core.async.t_cljs$core$async21164.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21164.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async21164.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21164.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21164.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21164.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async21164.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta21165], null);
});

cljs.core.async.t_cljs$core$async21164.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21164";

cljs.core.async.t_cljs$core$async21164.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async21164");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21164.
 */
cljs.core.async.__GT_t_cljs$core$async21164 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21164(f__$1,ch__$1,meta21165){
return (new cljs.core.async.t_cljs$core$async21164(f__$1,ch__$1,meta21165));
});

}

return (new cljs.core.async.t_cljs$core$async21164(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21167 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21167 = (function (p,ch,meta21168){
this.p = p;
this.ch = ch;
this.meta21168 = meta21168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21169,meta21168__$1){
var self__ = this;
var _21169__$1 = this;
return (new cljs.core.async.t_cljs$core$async21167(self__.p,self__.ch,meta21168__$1));
});

cljs.core.async.t_cljs$core$async21167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21169){
var self__ = this;
var _21169__$1 = this;
return self__.meta21168;
});

cljs.core.async.t_cljs$core$async21167.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21167.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async21167.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async21167.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21167.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21167.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21167.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta21168], null);
});

cljs.core.async.t_cljs$core$async21167.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21167";

cljs.core.async.t_cljs$core$async21167.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async21167");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21167.
 */
cljs.core.async.__GT_t_cljs$core$async21167 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21167(p__$1,ch__$1,meta21168){
return (new cljs.core.async.t_cljs$core$async21167(p__$1,ch__$1,meta21168));
});

}

return (new cljs.core.async.t_cljs$core$async21167(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__21171 = arguments.length;
switch (G__21171) {
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
var c__17802__auto___21211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17802__auto___21211,out){
return (function (){
var f__17803__auto__ = (function (){var switch__17619__auto__ = ((function (c__17802__auto___21211,out){
return (function (state_21192){
var state_val_21193 = (state_21192[(1)]);
if((state_val_21193 === (7))){
var inst_21188 = (state_21192[(2)]);
var state_21192__$1 = state_21192;
var statearr_21194_21212 = state_21192__$1;
(statearr_21194_21212[(2)] = inst_21188);

(statearr_21194_21212[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21193 === (1))){
var state_21192__$1 = state_21192;
var statearr_21195_21213 = state_21192__$1;
(statearr_21195_21213[(2)] = null);

(statearr_21195_21213[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21193 === (4))){
var inst_21174 = (state_21192[(7)]);
var inst_21174__$1 = (state_21192[(2)]);
var inst_21175 = (inst_21174__$1 == null);
var state_21192__$1 = (function (){var statearr_21196 = state_21192;
(statearr_21196[(7)] = inst_21174__$1);

return statearr_21196;
})();
if(cljs.core.truth_(inst_21175)){
var statearr_21197_21214 = state_21192__$1;
(statearr_21197_21214[(1)] = (5));

} else {
var statearr_21198_21215 = state_21192__$1;
(statearr_21198_21215[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21193 === (6))){
var inst_21174 = (state_21192[(7)]);
var inst_21179 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_21174) : p.call(null,inst_21174));
var state_21192__$1 = state_21192;
if(cljs.core.truth_(inst_21179)){
var statearr_21199_21216 = state_21192__$1;
(statearr_21199_21216[(1)] = (8));

} else {
var statearr_21200_21217 = state_21192__$1;
(statearr_21200_21217[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21193 === (3))){
var inst_21190 = (state_21192[(2)]);
var state_21192__$1 = state_21192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21192__$1,inst_21190);
} else {
if((state_val_21193 === (2))){
var state_21192__$1 = state_21192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21192__$1,(4),ch);
} else {
if((state_val_21193 === (11))){
var inst_21182 = (state_21192[(2)]);
var state_21192__$1 = state_21192;
var statearr_21201_21218 = state_21192__$1;
(statearr_21201_21218[(2)] = inst_21182);

(statearr_21201_21218[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21193 === (9))){
var state_21192__$1 = state_21192;
var statearr_21202_21219 = state_21192__$1;
(statearr_21202_21219[(2)] = null);

(statearr_21202_21219[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21193 === (5))){
var inst_21177 = cljs.core.async.close_BANG_(out);
var state_21192__$1 = state_21192;
var statearr_21203_21220 = state_21192__$1;
(statearr_21203_21220[(2)] = inst_21177);

(statearr_21203_21220[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21193 === (10))){
var inst_21185 = (state_21192[(2)]);
var state_21192__$1 = (function (){var statearr_21204 = state_21192;
(statearr_21204[(8)] = inst_21185);

return statearr_21204;
})();
var statearr_21205_21221 = state_21192__$1;
(statearr_21205_21221[(2)] = null);

(statearr_21205_21221[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21193 === (8))){
var inst_21174 = (state_21192[(7)]);
var state_21192__$1 = state_21192;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21192__$1,(11),out,inst_21174);
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
});})(c__17802__auto___21211,out))
;
return ((function (switch__17619__auto__,c__17802__auto___21211,out){
return (function() {
var cljs$core$async$state_machine__17620__auto__ = null;
var cljs$core$async$state_machine__17620__auto____0 = (function (){
var statearr_21206 = [null,null,null,null,null,null,null,null,null];
(statearr_21206[(0)] = cljs$core$async$state_machine__17620__auto__);

(statearr_21206[(1)] = (1));

return statearr_21206;
});
var cljs$core$async$state_machine__17620__auto____1 = (function (state_21192){
while(true){
var ret_value__17621__auto__ = (function (){try{while(true){
var result__17622__auto__ = switch__17619__auto__(state_21192);
if(cljs.core.keyword_identical_QMARK_(result__17622__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17622__auto__;
}
break;
}
}catch (e21207){if((e21207 instanceof Object)){
var ex__17623__auto__ = e21207;
var statearr_21208_21222 = state_21192;
(statearr_21208_21222[(5)] = ex__17623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21192);

return cljs.core.cst$kw$recur;
} else {
throw e21207;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17621__auto__,cljs.core.cst$kw$recur)){
var G__21223 = state_21192;
state_21192 = G__21223;
continue;
} else {
return ret_value__17621__auto__;
}
break;
}
});
cljs$core$async$state_machine__17620__auto__ = function(state_21192){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17620__auto____1.call(this,state_21192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17620__auto____0;
cljs$core$async$state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17620__auto____1;
return cljs$core$async$state_machine__17620__auto__;
})()
;})(switch__17619__auto__,c__17802__auto___21211,out))
})();
var state__17804__auto__ = (function (){var statearr_21209 = (f__17803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17803__auto__.cljs$core$IFn$_invoke$arity$0() : f__17803__auto__.call(null));
(statearr_21209[(6)] = c__17802__auto___21211);

return statearr_21209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17804__auto__);
});})(c__17802__auto___21211,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__21225 = arguments.length;
switch (G__21225) {
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
var c__17802__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17802__auto__){
return (function (){
var f__17803__auto__ = (function (){var switch__17619__auto__ = ((function (c__17802__auto__){
return (function (state_21288){
var state_val_21289 = (state_21288[(1)]);
if((state_val_21289 === (7))){
var inst_21284 = (state_21288[(2)]);
var state_21288__$1 = state_21288;
var statearr_21290_21328 = state_21288__$1;
(statearr_21290_21328[(2)] = inst_21284);

(statearr_21290_21328[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21289 === (20))){
var inst_21254 = (state_21288[(7)]);
var inst_21265 = (state_21288[(2)]);
var inst_21266 = cljs.core.next(inst_21254);
var inst_21240 = inst_21266;
var inst_21241 = null;
var inst_21242 = (0);
var inst_21243 = (0);
var state_21288__$1 = (function (){var statearr_21291 = state_21288;
(statearr_21291[(8)] = inst_21265);

(statearr_21291[(9)] = inst_21241);

(statearr_21291[(10)] = inst_21243);

(statearr_21291[(11)] = inst_21240);

(statearr_21291[(12)] = inst_21242);

return statearr_21291;
})();
var statearr_21292_21329 = state_21288__$1;
(statearr_21292_21329[(2)] = null);

(statearr_21292_21329[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21289 === (1))){
var state_21288__$1 = state_21288;
var statearr_21293_21330 = state_21288__$1;
(statearr_21293_21330[(2)] = null);

(statearr_21293_21330[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21289 === (4))){
var inst_21229 = (state_21288[(13)]);
var inst_21229__$1 = (state_21288[(2)]);
var inst_21230 = (inst_21229__$1 == null);
var state_21288__$1 = (function (){var statearr_21294 = state_21288;
(statearr_21294[(13)] = inst_21229__$1);

return statearr_21294;
})();
if(cljs.core.truth_(inst_21230)){
var statearr_21295_21331 = state_21288__$1;
(statearr_21295_21331[(1)] = (5));

} else {
var statearr_21296_21332 = state_21288__$1;
(statearr_21296_21332[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21289 === (15))){
var state_21288__$1 = state_21288;
var statearr_21300_21333 = state_21288__$1;
(statearr_21300_21333[(2)] = null);

(statearr_21300_21333[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21289 === (21))){
var state_21288__$1 = state_21288;
var statearr_21301_21334 = state_21288__$1;
(statearr_21301_21334[(2)] = null);

(statearr_21301_21334[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21289 === (13))){
var inst_21241 = (state_21288[(9)]);
var inst_21243 = (state_21288[(10)]);
var inst_21240 = (state_21288[(11)]);
var inst_21242 = (state_21288[(12)]);
var inst_21250 = (state_21288[(2)]);
var inst_21251 = (inst_21243 + (1));
var tmp21297 = inst_21241;
var tmp21298 = inst_21240;
var tmp21299 = inst_21242;
var inst_21240__$1 = tmp21298;
var inst_21241__$1 = tmp21297;
var inst_21242__$1 = tmp21299;
var inst_21243__$1 = inst_21251;
var state_21288__$1 = (function (){var statearr_21302 = state_21288;
(statearr_21302[(9)] = inst_21241__$1);

(statearr_21302[(14)] = inst_21250);

(statearr_21302[(10)] = inst_21243__$1);

(statearr_21302[(11)] = inst_21240__$1);

(statearr_21302[(12)] = inst_21242__$1);

return statearr_21302;
})();
var statearr_21303_21335 = state_21288__$1;
(statearr_21303_21335[(2)] = null);

(statearr_21303_21335[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21289 === (22))){
var state_21288__$1 = state_21288;
var statearr_21304_21336 = state_21288__$1;
(statearr_21304_21336[(2)] = null);

(statearr_21304_21336[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21289 === (6))){
var inst_21229 = (state_21288[(13)]);
var inst_21238 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_21229) : f.call(null,inst_21229));
var inst_21239 = cljs.core.seq(inst_21238);
var inst_21240 = inst_21239;
var inst_21241 = null;
var inst_21242 = (0);
var inst_21243 = (0);
var state_21288__$1 = (function (){var statearr_21305 = state_21288;
(statearr_21305[(9)] = inst_21241);

(statearr_21305[(10)] = inst_21243);

(statearr_21305[(11)] = inst_21240);

(statearr_21305[(12)] = inst_21242);

return statearr_21305;
})();
var statearr_21306_21337 = state_21288__$1;
(statearr_21306_21337[(2)] = null);

(statearr_21306_21337[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21289 === (17))){
var inst_21254 = (state_21288[(7)]);
var inst_21258 = cljs.core.chunk_first(inst_21254);
var inst_21259 = cljs.core.chunk_rest(inst_21254);
var inst_21260 = cljs.core.count(inst_21258);
var inst_21240 = inst_21259;
var inst_21241 = inst_21258;
var inst_21242 = inst_21260;
var inst_21243 = (0);
var state_21288__$1 = (function (){var statearr_21307 = state_21288;
(statearr_21307[(9)] = inst_21241);

(statearr_21307[(10)] = inst_21243);

(statearr_21307[(11)] = inst_21240);

(statearr_21307[(12)] = inst_21242);

return statearr_21307;
})();
var statearr_21308_21338 = state_21288__$1;
(statearr_21308_21338[(2)] = null);

(statearr_21308_21338[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21289 === (3))){
var inst_21286 = (state_21288[(2)]);
var state_21288__$1 = state_21288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21288__$1,inst_21286);
} else {
if((state_val_21289 === (12))){
var inst_21274 = (state_21288[(2)]);
var state_21288__$1 = state_21288;
var statearr_21309_21339 = state_21288__$1;
(statearr_21309_21339[(2)] = inst_21274);

(statearr_21309_21339[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21289 === (2))){
var state_21288__$1 = state_21288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21288__$1,(4),in$);
} else {
if((state_val_21289 === (23))){
var inst_21282 = (state_21288[(2)]);
var state_21288__$1 = state_21288;
var statearr_21310_21340 = state_21288__$1;
(statearr_21310_21340[(2)] = inst_21282);

(statearr_21310_21340[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21289 === (19))){
var inst_21269 = (state_21288[(2)]);
var state_21288__$1 = state_21288;
var statearr_21311_21341 = state_21288__$1;
(statearr_21311_21341[(2)] = inst_21269);

(statearr_21311_21341[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21289 === (11))){
var inst_21240 = (state_21288[(11)]);
var inst_21254 = (state_21288[(7)]);
var inst_21254__$1 = cljs.core.seq(inst_21240);
var state_21288__$1 = (function (){var statearr_21312 = state_21288;
(statearr_21312[(7)] = inst_21254__$1);

return statearr_21312;
})();
if(inst_21254__$1){
var statearr_21313_21342 = state_21288__$1;
(statearr_21313_21342[(1)] = (14));

} else {
var statearr_21314_21343 = state_21288__$1;
(statearr_21314_21343[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21289 === (9))){
var inst_21276 = (state_21288[(2)]);
var inst_21277 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_21288__$1 = (function (){var statearr_21315 = state_21288;
(statearr_21315[(15)] = inst_21276);

return statearr_21315;
})();
if(cljs.core.truth_(inst_21277)){
var statearr_21316_21344 = state_21288__$1;
(statearr_21316_21344[(1)] = (21));

} else {
var statearr_21317_21345 = state_21288__$1;
(statearr_21317_21345[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21289 === (5))){
var inst_21232 = cljs.core.async.close_BANG_(out);
var state_21288__$1 = state_21288;
var statearr_21318_21346 = state_21288__$1;
(statearr_21318_21346[(2)] = inst_21232);

(statearr_21318_21346[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21289 === (14))){
var inst_21254 = (state_21288[(7)]);
var inst_21256 = cljs.core.chunked_seq_QMARK_(inst_21254);
var state_21288__$1 = state_21288;
if(inst_21256){
var statearr_21319_21347 = state_21288__$1;
(statearr_21319_21347[(1)] = (17));

} else {
var statearr_21320_21348 = state_21288__$1;
(statearr_21320_21348[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21289 === (16))){
var inst_21272 = (state_21288[(2)]);
var state_21288__$1 = state_21288;
var statearr_21321_21349 = state_21288__$1;
(statearr_21321_21349[(2)] = inst_21272);

(statearr_21321_21349[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21289 === (10))){
var inst_21241 = (state_21288[(9)]);
var inst_21243 = (state_21288[(10)]);
var inst_21248 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21241,inst_21243);
var state_21288__$1 = state_21288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21288__$1,(13),out,inst_21248);
} else {
if((state_val_21289 === (18))){
var inst_21254 = (state_21288[(7)]);
var inst_21263 = cljs.core.first(inst_21254);
var state_21288__$1 = state_21288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21288__$1,(20),out,inst_21263);
} else {
if((state_val_21289 === (8))){
var inst_21243 = (state_21288[(10)]);
var inst_21242 = (state_21288[(12)]);
var inst_21245 = (inst_21243 < inst_21242);
var inst_21246 = inst_21245;
var state_21288__$1 = state_21288;
if(cljs.core.truth_(inst_21246)){
var statearr_21322_21350 = state_21288__$1;
(statearr_21322_21350[(1)] = (10));

} else {
var statearr_21323_21351 = state_21288__$1;
(statearr_21323_21351[(1)] = (11));

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
});})(c__17802__auto__))
;
return ((function (switch__17619__auto__,c__17802__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17620__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17620__auto____0 = (function (){
var statearr_21324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21324[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17620__auto__);

(statearr_21324[(1)] = (1));

return statearr_21324;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17620__auto____1 = (function (state_21288){
while(true){
var ret_value__17621__auto__ = (function (){try{while(true){
var result__17622__auto__ = switch__17619__auto__(state_21288);
if(cljs.core.keyword_identical_QMARK_(result__17622__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17622__auto__;
}
break;
}
}catch (e21325){if((e21325 instanceof Object)){
var ex__17623__auto__ = e21325;
var statearr_21326_21352 = state_21288;
(statearr_21326_21352[(5)] = ex__17623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21288);

return cljs.core.cst$kw$recur;
} else {
throw e21325;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17621__auto__,cljs.core.cst$kw$recur)){
var G__21353 = state_21288;
state_21288 = G__21353;
continue;
} else {
return ret_value__17621__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17620__auto__ = function(state_21288){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17620__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17620__auto____1.call(this,state_21288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17620__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17620__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17620__auto__;
})()
;})(switch__17619__auto__,c__17802__auto__))
})();
var state__17804__auto__ = (function (){var statearr_21327 = (f__17803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17803__auto__.cljs$core$IFn$_invoke$arity$0() : f__17803__auto__.call(null));
(statearr_21327[(6)] = c__17802__auto__);

return statearr_21327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17804__auto__);
});})(c__17802__auto__))
);

return c__17802__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__21355 = arguments.length;
switch (G__21355) {
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
var G__21358 = arguments.length;
switch (G__21358) {
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
var G__21361 = arguments.length;
switch (G__21361) {
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
var c__17802__auto___21408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17802__auto___21408,out){
return (function (){
var f__17803__auto__ = (function (){var switch__17619__auto__ = ((function (c__17802__auto___21408,out){
return (function (state_21385){
var state_val_21386 = (state_21385[(1)]);
if((state_val_21386 === (7))){
var inst_21380 = (state_21385[(2)]);
var state_21385__$1 = state_21385;
var statearr_21387_21409 = state_21385__$1;
(statearr_21387_21409[(2)] = inst_21380);

(statearr_21387_21409[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21386 === (1))){
var inst_21362 = null;
var state_21385__$1 = (function (){var statearr_21388 = state_21385;
(statearr_21388[(7)] = inst_21362);

return statearr_21388;
})();
var statearr_21389_21410 = state_21385__$1;
(statearr_21389_21410[(2)] = null);

(statearr_21389_21410[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21386 === (4))){
var inst_21365 = (state_21385[(8)]);
var inst_21365__$1 = (state_21385[(2)]);
var inst_21366 = (inst_21365__$1 == null);
var inst_21367 = cljs.core.not(inst_21366);
var state_21385__$1 = (function (){var statearr_21390 = state_21385;
(statearr_21390[(8)] = inst_21365__$1);

return statearr_21390;
})();
if(inst_21367){
var statearr_21391_21411 = state_21385__$1;
(statearr_21391_21411[(1)] = (5));

} else {
var statearr_21392_21412 = state_21385__$1;
(statearr_21392_21412[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21386 === (6))){
var state_21385__$1 = state_21385;
var statearr_21393_21413 = state_21385__$1;
(statearr_21393_21413[(2)] = null);

(statearr_21393_21413[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21386 === (3))){
var inst_21382 = (state_21385[(2)]);
var inst_21383 = cljs.core.async.close_BANG_(out);
var state_21385__$1 = (function (){var statearr_21394 = state_21385;
(statearr_21394[(9)] = inst_21382);

return statearr_21394;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21385__$1,inst_21383);
} else {
if((state_val_21386 === (2))){
var state_21385__$1 = state_21385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21385__$1,(4),ch);
} else {
if((state_val_21386 === (11))){
var inst_21365 = (state_21385[(8)]);
var inst_21374 = (state_21385[(2)]);
var inst_21362 = inst_21365;
var state_21385__$1 = (function (){var statearr_21395 = state_21385;
(statearr_21395[(10)] = inst_21374);

(statearr_21395[(7)] = inst_21362);

return statearr_21395;
})();
var statearr_21396_21414 = state_21385__$1;
(statearr_21396_21414[(2)] = null);

(statearr_21396_21414[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21386 === (9))){
var inst_21365 = (state_21385[(8)]);
var state_21385__$1 = state_21385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21385__$1,(11),out,inst_21365);
} else {
if((state_val_21386 === (5))){
var inst_21365 = (state_21385[(8)]);
var inst_21362 = (state_21385[(7)]);
var inst_21369 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21365,inst_21362);
var state_21385__$1 = state_21385;
if(inst_21369){
var statearr_21398_21415 = state_21385__$1;
(statearr_21398_21415[(1)] = (8));

} else {
var statearr_21399_21416 = state_21385__$1;
(statearr_21399_21416[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21386 === (10))){
var inst_21377 = (state_21385[(2)]);
var state_21385__$1 = state_21385;
var statearr_21400_21417 = state_21385__$1;
(statearr_21400_21417[(2)] = inst_21377);

(statearr_21400_21417[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21386 === (8))){
var inst_21362 = (state_21385[(7)]);
var tmp21397 = inst_21362;
var inst_21362__$1 = tmp21397;
var state_21385__$1 = (function (){var statearr_21401 = state_21385;
(statearr_21401[(7)] = inst_21362__$1);

return statearr_21401;
})();
var statearr_21402_21418 = state_21385__$1;
(statearr_21402_21418[(2)] = null);

(statearr_21402_21418[(1)] = (2));


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
});})(c__17802__auto___21408,out))
;
return ((function (switch__17619__auto__,c__17802__auto___21408,out){
return (function() {
var cljs$core$async$state_machine__17620__auto__ = null;
var cljs$core$async$state_machine__17620__auto____0 = (function (){
var statearr_21403 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21403[(0)] = cljs$core$async$state_machine__17620__auto__);

(statearr_21403[(1)] = (1));

return statearr_21403;
});
var cljs$core$async$state_machine__17620__auto____1 = (function (state_21385){
while(true){
var ret_value__17621__auto__ = (function (){try{while(true){
var result__17622__auto__ = switch__17619__auto__(state_21385);
if(cljs.core.keyword_identical_QMARK_(result__17622__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17622__auto__;
}
break;
}
}catch (e21404){if((e21404 instanceof Object)){
var ex__17623__auto__ = e21404;
var statearr_21405_21419 = state_21385;
(statearr_21405_21419[(5)] = ex__17623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21385);

return cljs.core.cst$kw$recur;
} else {
throw e21404;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17621__auto__,cljs.core.cst$kw$recur)){
var G__21420 = state_21385;
state_21385 = G__21420;
continue;
} else {
return ret_value__17621__auto__;
}
break;
}
});
cljs$core$async$state_machine__17620__auto__ = function(state_21385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17620__auto____1.call(this,state_21385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17620__auto____0;
cljs$core$async$state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17620__auto____1;
return cljs$core$async$state_machine__17620__auto__;
})()
;})(switch__17619__auto__,c__17802__auto___21408,out))
})();
var state__17804__auto__ = (function (){var statearr_21406 = (f__17803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17803__auto__.cljs$core$IFn$_invoke$arity$0() : f__17803__auto__.call(null));
(statearr_21406[(6)] = c__17802__auto___21408);

return statearr_21406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17804__auto__);
});})(c__17802__auto___21408,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__21422 = arguments.length;
switch (G__21422) {
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
var c__17802__auto___21488 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17802__auto___21488,out){
return (function (){
var f__17803__auto__ = (function (){var switch__17619__auto__ = ((function (c__17802__auto___21488,out){
return (function (state_21460){
var state_val_21461 = (state_21460[(1)]);
if((state_val_21461 === (7))){
var inst_21456 = (state_21460[(2)]);
var state_21460__$1 = state_21460;
var statearr_21462_21489 = state_21460__$1;
(statearr_21462_21489[(2)] = inst_21456);

(statearr_21462_21489[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21461 === (1))){
var inst_21423 = (new Array(n));
var inst_21424 = inst_21423;
var inst_21425 = (0);
var state_21460__$1 = (function (){var statearr_21463 = state_21460;
(statearr_21463[(7)] = inst_21425);

(statearr_21463[(8)] = inst_21424);

return statearr_21463;
})();
var statearr_21464_21490 = state_21460__$1;
(statearr_21464_21490[(2)] = null);

(statearr_21464_21490[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21461 === (4))){
var inst_21428 = (state_21460[(9)]);
var inst_21428__$1 = (state_21460[(2)]);
var inst_21429 = (inst_21428__$1 == null);
var inst_21430 = cljs.core.not(inst_21429);
var state_21460__$1 = (function (){var statearr_21465 = state_21460;
(statearr_21465[(9)] = inst_21428__$1);

return statearr_21465;
})();
if(inst_21430){
var statearr_21466_21491 = state_21460__$1;
(statearr_21466_21491[(1)] = (5));

} else {
var statearr_21467_21492 = state_21460__$1;
(statearr_21467_21492[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21461 === (15))){
var inst_21450 = (state_21460[(2)]);
var state_21460__$1 = state_21460;
var statearr_21468_21493 = state_21460__$1;
(statearr_21468_21493[(2)] = inst_21450);

(statearr_21468_21493[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21461 === (13))){
var state_21460__$1 = state_21460;
var statearr_21469_21494 = state_21460__$1;
(statearr_21469_21494[(2)] = null);

(statearr_21469_21494[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21461 === (6))){
var inst_21425 = (state_21460[(7)]);
var inst_21446 = (inst_21425 > (0));
var state_21460__$1 = state_21460;
if(cljs.core.truth_(inst_21446)){
var statearr_21470_21495 = state_21460__$1;
(statearr_21470_21495[(1)] = (12));

} else {
var statearr_21471_21496 = state_21460__$1;
(statearr_21471_21496[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21461 === (3))){
var inst_21458 = (state_21460[(2)]);
var state_21460__$1 = state_21460;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21460__$1,inst_21458);
} else {
if((state_val_21461 === (12))){
var inst_21424 = (state_21460[(8)]);
var inst_21448 = cljs.core.vec(inst_21424);
var state_21460__$1 = state_21460;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21460__$1,(15),out,inst_21448);
} else {
if((state_val_21461 === (2))){
var state_21460__$1 = state_21460;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21460__$1,(4),ch);
} else {
if((state_val_21461 === (11))){
var inst_21440 = (state_21460[(2)]);
var inst_21441 = (new Array(n));
var inst_21424 = inst_21441;
var inst_21425 = (0);
var state_21460__$1 = (function (){var statearr_21472 = state_21460;
(statearr_21472[(10)] = inst_21440);

(statearr_21472[(7)] = inst_21425);

(statearr_21472[(8)] = inst_21424);

return statearr_21472;
})();
var statearr_21473_21497 = state_21460__$1;
(statearr_21473_21497[(2)] = null);

(statearr_21473_21497[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21461 === (9))){
var inst_21424 = (state_21460[(8)]);
var inst_21438 = cljs.core.vec(inst_21424);
var state_21460__$1 = state_21460;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21460__$1,(11),out,inst_21438);
} else {
if((state_val_21461 === (5))){
var inst_21433 = (state_21460[(11)]);
var inst_21425 = (state_21460[(7)]);
var inst_21424 = (state_21460[(8)]);
var inst_21428 = (state_21460[(9)]);
var inst_21432 = (inst_21424[inst_21425] = inst_21428);
var inst_21433__$1 = (inst_21425 + (1));
var inst_21434 = (inst_21433__$1 < n);
var state_21460__$1 = (function (){var statearr_21474 = state_21460;
(statearr_21474[(11)] = inst_21433__$1);

(statearr_21474[(12)] = inst_21432);

return statearr_21474;
})();
if(cljs.core.truth_(inst_21434)){
var statearr_21475_21498 = state_21460__$1;
(statearr_21475_21498[(1)] = (8));

} else {
var statearr_21476_21499 = state_21460__$1;
(statearr_21476_21499[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21461 === (14))){
var inst_21453 = (state_21460[(2)]);
var inst_21454 = cljs.core.async.close_BANG_(out);
var state_21460__$1 = (function (){var statearr_21478 = state_21460;
(statearr_21478[(13)] = inst_21453);

return statearr_21478;
})();
var statearr_21479_21500 = state_21460__$1;
(statearr_21479_21500[(2)] = inst_21454);

(statearr_21479_21500[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21461 === (10))){
var inst_21444 = (state_21460[(2)]);
var state_21460__$1 = state_21460;
var statearr_21480_21501 = state_21460__$1;
(statearr_21480_21501[(2)] = inst_21444);

(statearr_21480_21501[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21461 === (8))){
var inst_21433 = (state_21460[(11)]);
var inst_21424 = (state_21460[(8)]);
var tmp21477 = inst_21424;
var inst_21424__$1 = tmp21477;
var inst_21425 = inst_21433;
var state_21460__$1 = (function (){var statearr_21481 = state_21460;
(statearr_21481[(7)] = inst_21425);

(statearr_21481[(8)] = inst_21424__$1);

return statearr_21481;
})();
var statearr_21482_21502 = state_21460__$1;
(statearr_21482_21502[(2)] = null);

(statearr_21482_21502[(1)] = (2));


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
});})(c__17802__auto___21488,out))
;
return ((function (switch__17619__auto__,c__17802__auto___21488,out){
return (function() {
var cljs$core$async$state_machine__17620__auto__ = null;
var cljs$core$async$state_machine__17620__auto____0 = (function (){
var statearr_21483 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21483[(0)] = cljs$core$async$state_machine__17620__auto__);

(statearr_21483[(1)] = (1));

return statearr_21483;
});
var cljs$core$async$state_machine__17620__auto____1 = (function (state_21460){
while(true){
var ret_value__17621__auto__ = (function (){try{while(true){
var result__17622__auto__ = switch__17619__auto__(state_21460);
if(cljs.core.keyword_identical_QMARK_(result__17622__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17622__auto__;
}
break;
}
}catch (e21484){if((e21484 instanceof Object)){
var ex__17623__auto__ = e21484;
var statearr_21485_21503 = state_21460;
(statearr_21485_21503[(5)] = ex__17623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21460);

return cljs.core.cst$kw$recur;
} else {
throw e21484;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17621__auto__,cljs.core.cst$kw$recur)){
var G__21504 = state_21460;
state_21460 = G__21504;
continue;
} else {
return ret_value__17621__auto__;
}
break;
}
});
cljs$core$async$state_machine__17620__auto__ = function(state_21460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17620__auto____1.call(this,state_21460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17620__auto____0;
cljs$core$async$state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17620__auto____1;
return cljs$core$async$state_machine__17620__auto__;
})()
;})(switch__17619__auto__,c__17802__auto___21488,out))
})();
var state__17804__auto__ = (function (){var statearr_21486 = (f__17803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17803__auto__.cljs$core$IFn$_invoke$arity$0() : f__17803__auto__.call(null));
(statearr_21486[(6)] = c__17802__auto___21488);

return statearr_21486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17804__auto__);
});})(c__17802__auto___21488,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__21506 = arguments.length;
switch (G__21506) {
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
var c__17802__auto___21576 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17802__auto___21576,out){
return (function (){
var f__17803__auto__ = (function (){var switch__17619__auto__ = ((function (c__17802__auto___21576,out){
return (function (state_21548){
var state_val_21549 = (state_21548[(1)]);
if((state_val_21549 === (7))){
var inst_21544 = (state_21548[(2)]);
var state_21548__$1 = state_21548;
var statearr_21550_21577 = state_21548__$1;
(statearr_21550_21577[(2)] = inst_21544);

(statearr_21550_21577[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21549 === (1))){
var inst_21507 = [];
var inst_21508 = inst_21507;
var inst_21509 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_21548__$1 = (function (){var statearr_21551 = state_21548;
(statearr_21551[(7)] = inst_21508);

(statearr_21551[(8)] = inst_21509);

return statearr_21551;
})();
var statearr_21552_21578 = state_21548__$1;
(statearr_21552_21578[(2)] = null);

(statearr_21552_21578[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21549 === (4))){
var inst_21512 = (state_21548[(9)]);
var inst_21512__$1 = (state_21548[(2)]);
var inst_21513 = (inst_21512__$1 == null);
var inst_21514 = cljs.core.not(inst_21513);
var state_21548__$1 = (function (){var statearr_21553 = state_21548;
(statearr_21553[(9)] = inst_21512__$1);

return statearr_21553;
})();
if(inst_21514){
var statearr_21554_21579 = state_21548__$1;
(statearr_21554_21579[(1)] = (5));

} else {
var statearr_21555_21580 = state_21548__$1;
(statearr_21555_21580[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21549 === (15))){
var inst_21538 = (state_21548[(2)]);
var state_21548__$1 = state_21548;
var statearr_21556_21581 = state_21548__$1;
(statearr_21556_21581[(2)] = inst_21538);

(statearr_21556_21581[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21549 === (13))){
var state_21548__$1 = state_21548;
var statearr_21557_21582 = state_21548__$1;
(statearr_21557_21582[(2)] = null);

(statearr_21557_21582[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21549 === (6))){
var inst_21508 = (state_21548[(7)]);
var inst_21533 = inst_21508.length;
var inst_21534 = (inst_21533 > (0));
var state_21548__$1 = state_21548;
if(cljs.core.truth_(inst_21534)){
var statearr_21558_21583 = state_21548__$1;
(statearr_21558_21583[(1)] = (12));

} else {
var statearr_21559_21584 = state_21548__$1;
(statearr_21559_21584[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21549 === (3))){
var inst_21546 = (state_21548[(2)]);
var state_21548__$1 = state_21548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21548__$1,inst_21546);
} else {
if((state_val_21549 === (12))){
var inst_21508 = (state_21548[(7)]);
var inst_21536 = cljs.core.vec(inst_21508);
var state_21548__$1 = state_21548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21548__$1,(15),out,inst_21536);
} else {
if((state_val_21549 === (2))){
var state_21548__$1 = state_21548;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21548__$1,(4),ch);
} else {
if((state_val_21549 === (11))){
var inst_21516 = (state_21548[(10)]);
var inst_21512 = (state_21548[(9)]);
var inst_21526 = (state_21548[(2)]);
var inst_21527 = [];
var inst_21528 = inst_21527.push(inst_21512);
var inst_21508 = inst_21527;
var inst_21509 = inst_21516;
var state_21548__$1 = (function (){var statearr_21560 = state_21548;
(statearr_21560[(7)] = inst_21508);

(statearr_21560[(8)] = inst_21509);

(statearr_21560[(11)] = inst_21528);

(statearr_21560[(12)] = inst_21526);

return statearr_21560;
})();
var statearr_21561_21585 = state_21548__$1;
(statearr_21561_21585[(2)] = null);

(statearr_21561_21585[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21549 === (9))){
var inst_21508 = (state_21548[(7)]);
var inst_21524 = cljs.core.vec(inst_21508);
var state_21548__$1 = state_21548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21548__$1,(11),out,inst_21524);
} else {
if((state_val_21549 === (5))){
var inst_21516 = (state_21548[(10)]);
var inst_21509 = (state_21548[(8)]);
var inst_21512 = (state_21548[(9)]);
var inst_21516__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_21512) : f.call(null,inst_21512));
var inst_21517 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21516__$1,inst_21509);
var inst_21518 = cljs.core.keyword_identical_QMARK_(inst_21509,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_21519 = ((inst_21517) || (inst_21518));
var state_21548__$1 = (function (){var statearr_21562 = state_21548;
(statearr_21562[(10)] = inst_21516__$1);

return statearr_21562;
})();
if(cljs.core.truth_(inst_21519)){
var statearr_21563_21586 = state_21548__$1;
(statearr_21563_21586[(1)] = (8));

} else {
var statearr_21564_21587 = state_21548__$1;
(statearr_21564_21587[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21549 === (14))){
var inst_21541 = (state_21548[(2)]);
var inst_21542 = cljs.core.async.close_BANG_(out);
var state_21548__$1 = (function (){var statearr_21566 = state_21548;
(statearr_21566[(13)] = inst_21541);

return statearr_21566;
})();
var statearr_21567_21588 = state_21548__$1;
(statearr_21567_21588[(2)] = inst_21542);

(statearr_21567_21588[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21549 === (10))){
var inst_21531 = (state_21548[(2)]);
var state_21548__$1 = state_21548;
var statearr_21568_21589 = state_21548__$1;
(statearr_21568_21589[(2)] = inst_21531);

(statearr_21568_21589[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21549 === (8))){
var inst_21508 = (state_21548[(7)]);
var inst_21516 = (state_21548[(10)]);
var inst_21512 = (state_21548[(9)]);
var inst_21521 = inst_21508.push(inst_21512);
var tmp21565 = inst_21508;
var inst_21508__$1 = tmp21565;
var inst_21509 = inst_21516;
var state_21548__$1 = (function (){var statearr_21569 = state_21548;
(statearr_21569[(7)] = inst_21508__$1);

(statearr_21569[(8)] = inst_21509);

(statearr_21569[(14)] = inst_21521);

return statearr_21569;
})();
var statearr_21570_21590 = state_21548__$1;
(statearr_21570_21590[(2)] = null);

(statearr_21570_21590[(1)] = (2));


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
});})(c__17802__auto___21576,out))
;
return ((function (switch__17619__auto__,c__17802__auto___21576,out){
return (function() {
var cljs$core$async$state_machine__17620__auto__ = null;
var cljs$core$async$state_machine__17620__auto____0 = (function (){
var statearr_21571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21571[(0)] = cljs$core$async$state_machine__17620__auto__);

(statearr_21571[(1)] = (1));

return statearr_21571;
});
var cljs$core$async$state_machine__17620__auto____1 = (function (state_21548){
while(true){
var ret_value__17621__auto__ = (function (){try{while(true){
var result__17622__auto__ = switch__17619__auto__(state_21548);
if(cljs.core.keyword_identical_QMARK_(result__17622__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17622__auto__;
}
break;
}
}catch (e21572){if((e21572 instanceof Object)){
var ex__17623__auto__ = e21572;
var statearr_21573_21591 = state_21548;
(statearr_21573_21591[(5)] = ex__17623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21548);

return cljs.core.cst$kw$recur;
} else {
throw e21572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17621__auto__,cljs.core.cst$kw$recur)){
var G__21592 = state_21548;
state_21548 = G__21592;
continue;
} else {
return ret_value__17621__auto__;
}
break;
}
});
cljs$core$async$state_machine__17620__auto__ = function(state_21548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17620__auto____1.call(this,state_21548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17620__auto____0;
cljs$core$async$state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17620__auto____1;
return cljs$core$async$state_machine__17620__auto__;
})()
;})(switch__17619__auto__,c__17802__auto___21576,out))
})();
var state__17804__auto__ = (function (){var statearr_21574 = (f__17803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17803__auto__.cljs$core$IFn$_invoke$arity$0() : f__17803__auto__.call(null));
(statearr_21574[(6)] = c__17802__auto___21576);

return statearr_21574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17804__auto__);
});})(c__17802__auto___21576,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

