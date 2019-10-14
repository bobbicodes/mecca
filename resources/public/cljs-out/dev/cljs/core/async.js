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
var G__17997 = arguments.length;
switch (G__17997) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17998 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17998 = (function (f,blockable,meta17999){
this.f = f;
this.blockable = blockable;
this.meta17999 = meta17999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18000,meta17999__$1){
var self__ = this;
var _18000__$1 = this;
return (new cljs.core.async.t_cljs$core$async17998(self__.f,self__.blockable,meta17999__$1));
});

cljs.core.async.t_cljs$core$async17998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18000){
var self__ = this;
var _18000__$1 = this;
return self__.meta17999;
});

cljs.core.async.t_cljs$core$async17998.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17998.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17998.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17998.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17998.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta17999], null);
});

cljs.core.async.t_cljs$core$async17998.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17998.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17998";

cljs.core.async.t_cljs$core$async17998.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17998");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17998.
 */
cljs.core.async.__GT_t_cljs$core$async17998 = (function cljs$core$async$__GT_t_cljs$core$async17998(f__$1,blockable__$1,meta17999){
return (new cljs.core.async.t_cljs$core$async17998(f__$1,blockable__$1,meta17999));
});

}

return (new cljs.core.async.t_cljs$core$async17998(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18004 = arguments.length;
switch (G__18004) {
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
var G__18007 = arguments.length;
switch (G__18007) {
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
var G__18010 = arguments.length;
switch (G__18010) {
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
var val_18012 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18012) : fn1.call(null,val_18012));
} else {
cljs.core.async.impl.dispatch.run(((function (val_18012,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18012) : fn1.call(null,val_18012));
});})(val_18012,ret))
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
var G__18014 = arguments.length;
switch (G__18014) {
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
var n__4408__auto___18016 = n;
var x_18017 = (0);
while(true){
if((x_18017 < n__4408__auto___18016)){
(a[x_18017] = x_18017);

var G__18018 = (x_18017 + (1));
x_18017 = G__18018;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18019 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18019 = (function (flag,meta18020){
this.flag = flag;
this.meta18020 = meta18020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18021,meta18020__$1){
var self__ = this;
var _18021__$1 = this;
return (new cljs.core.async.t_cljs$core$async18019(self__.flag,meta18020__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async18019.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18021){
var self__ = this;
var _18021__$1 = this;
return self__.meta18020;
});})(flag))
;

cljs.core.async.t_cljs$core$async18019.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18019.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async18019.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18019.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18019.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta18020], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async18019.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18019";

cljs.core.async.t_cljs$core$async18019.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18019");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18019.
 */
cljs.core.async.__GT_t_cljs$core$async18019 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18019(flag__$1,meta18020){
return (new cljs.core.async.t_cljs$core$async18019(flag__$1,meta18020));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async18019(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18022 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18022 = (function (flag,cb,meta18023){
this.flag = flag;
this.cb = cb;
this.meta18023 = meta18023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18024,meta18023__$1){
var self__ = this;
var _18024__$1 = this;
return (new cljs.core.async.t_cljs$core$async18022(self__.flag,self__.cb,meta18023__$1));
});

cljs.core.async.t_cljs$core$async18022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18024){
var self__ = this;
var _18024__$1 = this;
return self__.meta18023;
});

cljs.core.async.t_cljs$core$async18022.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18022.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async18022.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18022.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async18022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta18023], null);
});

cljs.core.async.t_cljs$core$async18022.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18022";

cljs.core.async.t_cljs$core$async18022.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18022");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18022.
 */
cljs.core.async.__GT_t_cljs$core$async18022 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18022(flag__$1,cb__$1,meta18023){
return (new cljs.core.async.t_cljs$core$async18022(flag__$1,cb__$1,meta18023));
});

}

return (new cljs.core.async.t_cljs$core$async18022(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__18025_SHARP_){
var G__18027 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18025_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18027) : fret.call(null,G__18027));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18026_SHARP_){
var G__18028 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18026_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18028) : fret.call(null,G__18028));
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
var G__18029 = (i + (1));
i = G__18029;
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
var len__4531__auto___18035 = arguments.length;
var i__4532__auto___18036 = (0);
while(true){
if((i__4532__auto___18036 < len__4531__auto___18035)){
args__4534__auto__.push((arguments[i__4532__auto___18036]));

var G__18037 = (i__4532__auto___18036 + (1));
i__4532__auto___18036 = G__18037;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18032){
var map__18033 = p__18032;
var map__18033__$1 = ((((!((map__18033 == null)))?(((((map__18033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18033):map__18033);
var opts = map__18033__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18030){
var G__18031 = cljs.core.first(seq18030);
var seq18030__$1 = cljs.core.next(seq18030);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18031,seq18030__$1);
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
var G__18039 = arguments.length;
switch (G__18039) {
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
var c__16070__auto___18085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16070__auto___18085){
return (function (){
var f__16071__auto__ = (function (){var switch__15887__auto__ = ((function (c__16070__auto___18085){
return (function (state_18063){
var state_val_18064 = (state_18063[(1)]);
if((state_val_18064 === (7))){
var inst_18059 = (state_18063[(2)]);
var state_18063__$1 = state_18063;
var statearr_18065_18086 = state_18063__$1;
(statearr_18065_18086[(2)] = inst_18059);

(statearr_18065_18086[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18064 === (1))){
var state_18063__$1 = state_18063;
var statearr_18066_18087 = state_18063__$1;
(statearr_18066_18087[(2)] = null);

(statearr_18066_18087[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18064 === (4))){
var inst_18042 = (state_18063[(7)]);
var inst_18042__$1 = (state_18063[(2)]);
var inst_18043 = (inst_18042__$1 == null);
var state_18063__$1 = (function (){var statearr_18067 = state_18063;
(statearr_18067[(7)] = inst_18042__$1);

return statearr_18067;
})();
if(cljs.core.truth_(inst_18043)){
var statearr_18068_18088 = state_18063__$1;
(statearr_18068_18088[(1)] = (5));

} else {
var statearr_18069_18089 = state_18063__$1;
(statearr_18069_18089[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18064 === (13))){
var state_18063__$1 = state_18063;
var statearr_18070_18090 = state_18063__$1;
(statearr_18070_18090[(2)] = null);

(statearr_18070_18090[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18064 === (6))){
var inst_18042 = (state_18063[(7)]);
var state_18063__$1 = state_18063;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18063__$1,(11),to,inst_18042);
} else {
if((state_val_18064 === (3))){
var inst_18061 = (state_18063[(2)]);
var state_18063__$1 = state_18063;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18063__$1,inst_18061);
} else {
if((state_val_18064 === (12))){
var state_18063__$1 = state_18063;
var statearr_18071_18091 = state_18063__$1;
(statearr_18071_18091[(2)] = null);

(statearr_18071_18091[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18064 === (2))){
var state_18063__$1 = state_18063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18063__$1,(4),from);
} else {
if((state_val_18064 === (11))){
var inst_18052 = (state_18063[(2)]);
var state_18063__$1 = state_18063;
if(cljs.core.truth_(inst_18052)){
var statearr_18072_18092 = state_18063__$1;
(statearr_18072_18092[(1)] = (12));

} else {
var statearr_18073_18093 = state_18063__$1;
(statearr_18073_18093[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18064 === (9))){
var state_18063__$1 = state_18063;
var statearr_18074_18094 = state_18063__$1;
(statearr_18074_18094[(2)] = null);

(statearr_18074_18094[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18064 === (5))){
var state_18063__$1 = state_18063;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18075_18095 = state_18063__$1;
(statearr_18075_18095[(1)] = (8));

} else {
var statearr_18076_18096 = state_18063__$1;
(statearr_18076_18096[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18064 === (14))){
var inst_18057 = (state_18063[(2)]);
var state_18063__$1 = state_18063;
var statearr_18077_18097 = state_18063__$1;
(statearr_18077_18097[(2)] = inst_18057);

(statearr_18077_18097[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18064 === (10))){
var inst_18049 = (state_18063[(2)]);
var state_18063__$1 = state_18063;
var statearr_18078_18098 = state_18063__$1;
(statearr_18078_18098[(2)] = inst_18049);

(statearr_18078_18098[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18064 === (8))){
var inst_18046 = cljs.core.async.close_BANG_(to);
var state_18063__$1 = state_18063;
var statearr_18079_18099 = state_18063__$1;
(statearr_18079_18099[(2)] = inst_18046);

(statearr_18079_18099[(1)] = (10));


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
});})(c__16070__auto___18085))
;
return ((function (switch__15887__auto__,c__16070__auto___18085){
return (function() {
var cljs$core$async$state_machine__15888__auto__ = null;
var cljs$core$async$state_machine__15888__auto____0 = (function (){
var statearr_18080 = [null,null,null,null,null,null,null,null];
(statearr_18080[(0)] = cljs$core$async$state_machine__15888__auto__);

(statearr_18080[(1)] = (1));

return statearr_18080;
});
var cljs$core$async$state_machine__15888__auto____1 = (function (state_18063){
while(true){
var ret_value__15889__auto__ = (function (){try{while(true){
var result__15890__auto__ = switch__15887__auto__(state_18063);
if(cljs.core.keyword_identical_QMARK_(result__15890__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15890__auto__;
}
break;
}
}catch (e18081){if((e18081 instanceof Object)){
var ex__15891__auto__ = e18081;
var statearr_18082_18100 = state_18063;
(statearr_18082_18100[(5)] = ex__15891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18063);

return cljs.core.cst$kw$recur;
} else {
throw e18081;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15889__auto__,cljs.core.cst$kw$recur)){
var G__18101 = state_18063;
state_18063 = G__18101;
continue;
} else {
return ret_value__15889__auto__;
}
break;
}
});
cljs$core$async$state_machine__15888__auto__ = function(state_18063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15888__auto____1.call(this,state_18063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15888__auto____0;
cljs$core$async$state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15888__auto____1;
return cljs$core$async$state_machine__15888__auto__;
})()
;})(switch__15887__auto__,c__16070__auto___18085))
})();
var state__16072__auto__ = (function (){var statearr_18083 = (f__16071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16071__auto__.cljs$core$IFn$_invoke$arity$0() : f__16071__auto__.call(null));
(statearr_18083[(6)] = c__16070__auto___18085);

return statearr_18083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16072__auto__);
});})(c__16070__auto___18085))
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
return (function (p__18102){
var vec__18103 = p__18102;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18103,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18103,(1),null);
var job = vec__18103;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16070__auto___18274 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16070__auto___18274,res,vec__18103,v,p,job,jobs,results){
return (function (){
var f__16071__auto__ = (function (){var switch__15887__auto__ = ((function (c__16070__auto___18274,res,vec__18103,v,p,job,jobs,results){
return (function (state_18110){
var state_val_18111 = (state_18110[(1)]);
if((state_val_18111 === (1))){
var state_18110__$1 = state_18110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18110__$1,(2),res,v);
} else {
if((state_val_18111 === (2))){
var inst_18107 = (state_18110[(2)]);
var inst_18108 = cljs.core.async.close_BANG_(res);
var state_18110__$1 = (function (){var statearr_18112 = state_18110;
(statearr_18112[(7)] = inst_18107);

return statearr_18112;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18110__$1,inst_18108);
} else {
return null;
}
}
});})(c__16070__auto___18274,res,vec__18103,v,p,job,jobs,results))
;
return ((function (switch__15887__auto__,c__16070__auto___18274,res,vec__18103,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____0 = (function (){
var statearr_18113 = [null,null,null,null,null,null,null,null];
(statearr_18113[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__);

(statearr_18113[(1)] = (1));

return statearr_18113;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____1 = (function (state_18110){
while(true){
var ret_value__15889__auto__ = (function (){try{while(true){
var result__15890__auto__ = switch__15887__auto__(state_18110);
if(cljs.core.keyword_identical_QMARK_(result__15890__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15890__auto__;
}
break;
}
}catch (e18114){if((e18114 instanceof Object)){
var ex__15891__auto__ = e18114;
var statearr_18115_18275 = state_18110;
(statearr_18115_18275[(5)] = ex__15891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18110);

return cljs.core.cst$kw$recur;
} else {
throw e18114;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15889__auto__,cljs.core.cst$kw$recur)){
var G__18276 = state_18110;
state_18110 = G__18276;
continue;
} else {
return ret_value__15889__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__ = function(state_18110){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____1.call(this,state_18110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__;
})()
;})(switch__15887__auto__,c__16070__auto___18274,res,vec__18103,v,p,job,jobs,results))
})();
var state__16072__auto__ = (function (){var statearr_18116 = (f__16071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16071__auto__.cljs$core$IFn$_invoke$arity$0() : f__16071__auto__.call(null));
(statearr_18116[(6)] = c__16070__auto___18274);

return statearr_18116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16072__auto__);
});})(c__16070__auto___18274,res,vec__18103,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18117){
var vec__18118 = p__18117;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18118,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18118,(1),null);
var job = vec__18118;
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
var n__4408__auto___18277 = n;
var __18278 = (0);
while(true){
if((__18278 < n__4408__auto___18277)){
var G__18121_18279 = type;
var G__18121_18280__$1 = (((G__18121_18279 instanceof cljs.core.Keyword))?G__18121_18279.fqn:null);
switch (G__18121_18280__$1) {
case "compute":
var c__16070__auto___18282 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18278,c__16070__auto___18282,G__18121_18279,G__18121_18280__$1,n__4408__auto___18277,jobs,results,process,async){
return (function (){
var f__16071__auto__ = (function (){var switch__15887__auto__ = ((function (__18278,c__16070__auto___18282,G__18121_18279,G__18121_18280__$1,n__4408__auto___18277,jobs,results,process,async){
return (function (state_18134){
var state_val_18135 = (state_18134[(1)]);
if((state_val_18135 === (1))){
var state_18134__$1 = state_18134;
var statearr_18136_18283 = state_18134__$1;
(statearr_18136_18283[(2)] = null);

(statearr_18136_18283[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18135 === (2))){
var state_18134__$1 = state_18134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18134__$1,(4),jobs);
} else {
if((state_val_18135 === (3))){
var inst_18132 = (state_18134[(2)]);
var state_18134__$1 = state_18134;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18134__$1,inst_18132);
} else {
if((state_val_18135 === (4))){
var inst_18124 = (state_18134[(2)]);
var inst_18125 = process(inst_18124);
var state_18134__$1 = state_18134;
if(cljs.core.truth_(inst_18125)){
var statearr_18137_18284 = state_18134__$1;
(statearr_18137_18284[(1)] = (5));

} else {
var statearr_18138_18285 = state_18134__$1;
(statearr_18138_18285[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18135 === (5))){
var state_18134__$1 = state_18134;
var statearr_18139_18286 = state_18134__$1;
(statearr_18139_18286[(2)] = null);

(statearr_18139_18286[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18135 === (6))){
var state_18134__$1 = state_18134;
var statearr_18140_18287 = state_18134__$1;
(statearr_18140_18287[(2)] = null);

(statearr_18140_18287[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18135 === (7))){
var inst_18130 = (state_18134[(2)]);
var state_18134__$1 = state_18134;
var statearr_18141_18288 = state_18134__$1;
(statearr_18141_18288[(2)] = inst_18130);

(statearr_18141_18288[(1)] = (3));


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
});})(__18278,c__16070__auto___18282,G__18121_18279,G__18121_18280__$1,n__4408__auto___18277,jobs,results,process,async))
;
return ((function (__18278,switch__15887__auto__,c__16070__auto___18282,G__18121_18279,G__18121_18280__$1,n__4408__auto___18277,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____0 = (function (){
var statearr_18142 = [null,null,null,null,null,null,null];
(statearr_18142[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__);

(statearr_18142[(1)] = (1));

return statearr_18142;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____1 = (function (state_18134){
while(true){
var ret_value__15889__auto__ = (function (){try{while(true){
var result__15890__auto__ = switch__15887__auto__(state_18134);
if(cljs.core.keyword_identical_QMARK_(result__15890__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15890__auto__;
}
break;
}
}catch (e18143){if((e18143 instanceof Object)){
var ex__15891__auto__ = e18143;
var statearr_18144_18289 = state_18134;
(statearr_18144_18289[(5)] = ex__15891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18134);

return cljs.core.cst$kw$recur;
} else {
throw e18143;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15889__auto__,cljs.core.cst$kw$recur)){
var G__18290 = state_18134;
state_18134 = G__18290;
continue;
} else {
return ret_value__15889__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__ = function(state_18134){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____1.call(this,state_18134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__;
})()
;})(__18278,switch__15887__auto__,c__16070__auto___18282,G__18121_18279,G__18121_18280__$1,n__4408__auto___18277,jobs,results,process,async))
})();
var state__16072__auto__ = (function (){var statearr_18145 = (f__16071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16071__auto__.cljs$core$IFn$_invoke$arity$0() : f__16071__auto__.call(null));
(statearr_18145[(6)] = c__16070__auto___18282);

return statearr_18145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16072__auto__);
});})(__18278,c__16070__auto___18282,G__18121_18279,G__18121_18280__$1,n__4408__auto___18277,jobs,results,process,async))
);


break;
case "async":
var c__16070__auto___18291 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18278,c__16070__auto___18291,G__18121_18279,G__18121_18280__$1,n__4408__auto___18277,jobs,results,process,async){
return (function (){
var f__16071__auto__ = (function (){var switch__15887__auto__ = ((function (__18278,c__16070__auto___18291,G__18121_18279,G__18121_18280__$1,n__4408__auto___18277,jobs,results,process,async){
return (function (state_18158){
var state_val_18159 = (state_18158[(1)]);
if((state_val_18159 === (1))){
var state_18158__$1 = state_18158;
var statearr_18160_18292 = state_18158__$1;
(statearr_18160_18292[(2)] = null);

(statearr_18160_18292[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18159 === (2))){
var state_18158__$1 = state_18158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18158__$1,(4),jobs);
} else {
if((state_val_18159 === (3))){
var inst_18156 = (state_18158[(2)]);
var state_18158__$1 = state_18158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18158__$1,inst_18156);
} else {
if((state_val_18159 === (4))){
var inst_18148 = (state_18158[(2)]);
var inst_18149 = async(inst_18148);
var state_18158__$1 = state_18158;
if(cljs.core.truth_(inst_18149)){
var statearr_18161_18293 = state_18158__$1;
(statearr_18161_18293[(1)] = (5));

} else {
var statearr_18162_18294 = state_18158__$1;
(statearr_18162_18294[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18159 === (5))){
var state_18158__$1 = state_18158;
var statearr_18163_18295 = state_18158__$1;
(statearr_18163_18295[(2)] = null);

(statearr_18163_18295[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18159 === (6))){
var state_18158__$1 = state_18158;
var statearr_18164_18296 = state_18158__$1;
(statearr_18164_18296[(2)] = null);

(statearr_18164_18296[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18159 === (7))){
var inst_18154 = (state_18158[(2)]);
var state_18158__$1 = state_18158;
var statearr_18165_18297 = state_18158__$1;
(statearr_18165_18297[(2)] = inst_18154);

(statearr_18165_18297[(1)] = (3));


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
});})(__18278,c__16070__auto___18291,G__18121_18279,G__18121_18280__$1,n__4408__auto___18277,jobs,results,process,async))
;
return ((function (__18278,switch__15887__auto__,c__16070__auto___18291,G__18121_18279,G__18121_18280__$1,n__4408__auto___18277,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____0 = (function (){
var statearr_18166 = [null,null,null,null,null,null,null];
(statearr_18166[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__);

(statearr_18166[(1)] = (1));

return statearr_18166;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____1 = (function (state_18158){
while(true){
var ret_value__15889__auto__ = (function (){try{while(true){
var result__15890__auto__ = switch__15887__auto__(state_18158);
if(cljs.core.keyword_identical_QMARK_(result__15890__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15890__auto__;
}
break;
}
}catch (e18167){if((e18167 instanceof Object)){
var ex__15891__auto__ = e18167;
var statearr_18168_18298 = state_18158;
(statearr_18168_18298[(5)] = ex__15891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18158);

return cljs.core.cst$kw$recur;
} else {
throw e18167;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15889__auto__,cljs.core.cst$kw$recur)){
var G__18299 = state_18158;
state_18158 = G__18299;
continue;
} else {
return ret_value__15889__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__ = function(state_18158){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____1.call(this,state_18158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__;
})()
;})(__18278,switch__15887__auto__,c__16070__auto___18291,G__18121_18279,G__18121_18280__$1,n__4408__auto___18277,jobs,results,process,async))
})();
var state__16072__auto__ = (function (){var statearr_18169 = (f__16071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16071__auto__.cljs$core$IFn$_invoke$arity$0() : f__16071__auto__.call(null));
(statearr_18169[(6)] = c__16070__auto___18291);

return statearr_18169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16072__auto__);
});})(__18278,c__16070__auto___18291,G__18121_18279,G__18121_18280__$1,n__4408__auto___18277,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18121_18280__$1)].join('')));

}

var G__18300 = (__18278 + (1));
__18278 = G__18300;
continue;
} else {
}
break;
}

var c__16070__auto___18301 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16070__auto___18301,jobs,results,process,async){
return (function (){
var f__16071__auto__ = (function (){var switch__15887__auto__ = ((function (c__16070__auto___18301,jobs,results,process,async){
return (function (state_18191){
var state_val_18192 = (state_18191[(1)]);
if((state_val_18192 === (1))){
var state_18191__$1 = state_18191;
var statearr_18193_18302 = state_18191__$1;
(statearr_18193_18302[(2)] = null);

(statearr_18193_18302[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18192 === (2))){
var state_18191__$1 = state_18191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18191__$1,(4),from);
} else {
if((state_val_18192 === (3))){
var inst_18189 = (state_18191[(2)]);
var state_18191__$1 = state_18191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18191__$1,inst_18189);
} else {
if((state_val_18192 === (4))){
var inst_18172 = (state_18191[(7)]);
var inst_18172__$1 = (state_18191[(2)]);
var inst_18173 = (inst_18172__$1 == null);
var state_18191__$1 = (function (){var statearr_18194 = state_18191;
(statearr_18194[(7)] = inst_18172__$1);

return statearr_18194;
})();
if(cljs.core.truth_(inst_18173)){
var statearr_18195_18303 = state_18191__$1;
(statearr_18195_18303[(1)] = (5));

} else {
var statearr_18196_18304 = state_18191__$1;
(statearr_18196_18304[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18192 === (5))){
var inst_18175 = cljs.core.async.close_BANG_(jobs);
var state_18191__$1 = state_18191;
var statearr_18197_18305 = state_18191__$1;
(statearr_18197_18305[(2)] = inst_18175);

(statearr_18197_18305[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18192 === (6))){
var inst_18177 = (state_18191[(8)]);
var inst_18172 = (state_18191[(7)]);
var inst_18177__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18178 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18179 = [inst_18172,inst_18177__$1];
var inst_18180 = (new cljs.core.PersistentVector(null,2,(5),inst_18178,inst_18179,null));
var state_18191__$1 = (function (){var statearr_18198 = state_18191;
(statearr_18198[(8)] = inst_18177__$1);

return statearr_18198;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18191__$1,(8),jobs,inst_18180);
} else {
if((state_val_18192 === (7))){
var inst_18187 = (state_18191[(2)]);
var state_18191__$1 = state_18191;
var statearr_18199_18306 = state_18191__$1;
(statearr_18199_18306[(2)] = inst_18187);

(statearr_18199_18306[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18192 === (8))){
var inst_18177 = (state_18191[(8)]);
var inst_18182 = (state_18191[(2)]);
var state_18191__$1 = (function (){var statearr_18200 = state_18191;
(statearr_18200[(9)] = inst_18182);

return statearr_18200;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18191__$1,(9),results,inst_18177);
} else {
if((state_val_18192 === (9))){
var inst_18184 = (state_18191[(2)]);
var state_18191__$1 = (function (){var statearr_18201 = state_18191;
(statearr_18201[(10)] = inst_18184);

return statearr_18201;
})();
var statearr_18202_18307 = state_18191__$1;
(statearr_18202_18307[(2)] = null);

(statearr_18202_18307[(1)] = (2));


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
});})(c__16070__auto___18301,jobs,results,process,async))
;
return ((function (switch__15887__auto__,c__16070__auto___18301,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____0 = (function (){
var statearr_18203 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18203[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__);

(statearr_18203[(1)] = (1));

return statearr_18203;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____1 = (function (state_18191){
while(true){
var ret_value__15889__auto__ = (function (){try{while(true){
var result__15890__auto__ = switch__15887__auto__(state_18191);
if(cljs.core.keyword_identical_QMARK_(result__15890__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15890__auto__;
}
break;
}
}catch (e18204){if((e18204 instanceof Object)){
var ex__15891__auto__ = e18204;
var statearr_18205_18308 = state_18191;
(statearr_18205_18308[(5)] = ex__15891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18191);

return cljs.core.cst$kw$recur;
} else {
throw e18204;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15889__auto__,cljs.core.cst$kw$recur)){
var G__18309 = state_18191;
state_18191 = G__18309;
continue;
} else {
return ret_value__15889__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__ = function(state_18191){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____1.call(this,state_18191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__;
})()
;})(switch__15887__auto__,c__16070__auto___18301,jobs,results,process,async))
})();
var state__16072__auto__ = (function (){var statearr_18206 = (f__16071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16071__auto__.cljs$core$IFn$_invoke$arity$0() : f__16071__auto__.call(null));
(statearr_18206[(6)] = c__16070__auto___18301);

return statearr_18206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16072__auto__);
});})(c__16070__auto___18301,jobs,results,process,async))
);


var c__16070__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16070__auto__,jobs,results,process,async){
return (function (){
var f__16071__auto__ = (function (){var switch__15887__auto__ = ((function (c__16070__auto__,jobs,results,process,async){
return (function (state_18244){
var state_val_18245 = (state_18244[(1)]);
if((state_val_18245 === (7))){
var inst_18240 = (state_18244[(2)]);
var state_18244__$1 = state_18244;
var statearr_18246_18310 = state_18244__$1;
(statearr_18246_18310[(2)] = inst_18240);

(statearr_18246_18310[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18245 === (20))){
var state_18244__$1 = state_18244;
var statearr_18247_18311 = state_18244__$1;
(statearr_18247_18311[(2)] = null);

(statearr_18247_18311[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18245 === (1))){
var state_18244__$1 = state_18244;
var statearr_18248_18312 = state_18244__$1;
(statearr_18248_18312[(2)] = null);

(statearr_18248_18312[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18245 === (4))){
var inst_18209 = (state_18244[(7)]);
var inst_18209__$1 = (state_18244[(2)]);
var inst_18210 = (inst_18209__$1 == null);
var state_18244__$1 = (function (){var statearr_18249 = state_18244;
(statearr_18249[(7)] = inst_18209__$1);

return statearr_18249;
})();
if(cljs.core.truth_(inst_18210)){
var statearr_18250_18313 = state_18244__$1;
(statearr_18250_18313[(1)] = (5));

} else {
var statearr_18251_18314 = state_18244__$1;
(statearr_18251_18314[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18245 === (15))){
var inst_18222 = (state_18244[(8)]);
var state_18244__$1 = state_18244;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18244__$1,(18),to,inst_18222);
} else {
if((state_val_18245 === (21))){
var inst_18235 = (state_18244[(2)]);
var state_18244__$1 = state_18244;
var statearr_18252_18315 = state_18244__$1;
(statearr_18252_18315[(2)] = inst_18235);

(statearr_18252_18315[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18245 === (13))){
var inst_18237 = (state_18244[(2)]);
var state_18244__$1 = (function (){var statearr_18253 = state_18244;
(statearr_18253[(9)] = inst_18237);

return statearr_18253;
})();
var statearr_18254_18316 = state_18244__$1;
(statearr_18254_18316[(2)] = null);

(statearr_18254_18316[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18245 === (6))){
var inst_18209 = (state_18244[(7)]);
var state_18244__$1 = state_18244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18244__$1,(11),inst_18209);
} else {
if((state_val_18245 === (17))){
var inst_18230 = (state_18244[(2)]);
var state_18244__$1 = state_18244;
if(cljs.core.truth_(inst_18230)){
var statearr_18255_18317 = state_18244__$1;
(statearr_18255_18317[(1)] = (19));

} else {
var statearr_18256_18318 = state_18244__$1;
(statearr_18256_18318[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18245 === (3))){
var inst_18242 = (state_18244[(2)]);
var state_18244__$1 = state_18244;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18244__$1,inst_18242);
} else {
if((state_val_18245 === (12))){
var inst_18219 = (state_18244[(10)]);
var state_18244__$1 = state_18244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18244__$1,(14),inst_18219);
} else {
if((state_val_18245 === (2))){
var state_18244__$1 = state_18244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18244__$1,(4),results);
} else {
if((state_val_18245 === (19))){
var state_18244__$1 = state_18244;
var statearr_18257_18319 = state_18244__$1;
(statearr_18257_18319[(2)] = null);

(statearr_18257_18319[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18245 === (11))){
var inst_18219 = (state_18244[(2)]);
var state_18244__$1 = (function (){var statearr_18258 = state_18244;
(statearr_18258[(10)] = inst_18219);

return statearr_18258;
})();
var statearr_18259_18320 = state_18244__$1;
(statearr_18259_18320[(2)] = null);

(statearr_18259_18320[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18245 === (9))){
var state_18244__$1 = state_18244;
var statearr_18260_18321 = state_18244__$1;
(statearr_18260_18321[(2)] = null);

(statearr_18260_18321[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18245 === (5))){
var state_18244__$1 = state_18244;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18261_18322 = state_18244__$1;
(statearr_18261_18322[(1)] = (8));

} else {
var statearr_18262_18323 = state_18244__$1;
(statearr_18262_18323[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18245 === (14))){
var inst_18224 = (state_18244[(11)]);
var inst_18222 = (state_18244[(8)]);
var inst_18222__$1 = (state_18244[(2)]);
var inst_18223 = (inst_18222__$1 == null);
var inst_18224__$1 = cljs.core.not(inst_18223);
var state_18244__$1 = (function (){var statearr_18263 = state_18244;
(statearr_18263[(11)] = inst_18224__$1);

(statearr_18263[(8)] = inst_18222__$1);

return statearr_18263;
})();
if(inst_18224__$1){
var statearr_18264_18324 = state_18244__$1;
(statearr_18264_18324[(1)] = (15));

} else {
var statearr_18265_18325 = state_18244__$1;
(statearr_18265_18325[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18245 === (16))){
var inst_18224 = (state_18244[(11)]);
var state_18244__$1 = state_18244;
var statearr_18266_18326 = state_18244__$1;
(statearr_18266_18326[(2)] = inst_18224);

(statearr_18266_18326[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18245 === (10))){
var inst_18216 = (state_18244[(2)]);
var state_18244__$1 = state_18244;
var statearr_18267_18327 = state_18244__$1;
(statearr_18267_18327[(2)] = inst_18216);

(statearr_18267_18327[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18245 === (18))){
var inst_18227 = (state_18244[(2)]);
var state_18244__$1 = state_18244;
var statearr_18268_18328 = state_18244__$1;
(statearr_18268_18328[(2)] = inst_18227);

(statearr_18268_18328[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18245 === (8))){
var inst_18213 = cljs.core.async.close_BANG_(to);
var state_18244__$1 = state_18244;
var statearr_18269_18329 = state_18244__$1;
(statearr_18269_18329[(2)] = inst_18213);

(statearr_18269_18329[(1)] = (10));


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
});})(c__16070__auto__,jobs,results,process,async))
;
return ((function (switch__15887__auto__,c__16070__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____0 = (function (){
var statearr_18270 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18270[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__);

(statearr_18270[(1)] = (1));

return statearr_18270;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____1 = (function (state_18244){
while(true){
var ret_value__15889__auto__ = (function (){try{while(true){
var result__15890__auto__ = switch__15887__auto__(state_18244);
if(cljs.core.keyword_identical_QMARK_(result__15890__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15890__auto__;
}
break;
}
}catch (e18271){if((e18271 instanceof Object)){
var ex__15891__auto__ = e18271;
var statearr_18272_18330 = state_18244;
(statearr_18272_18330[(5)] = ex__15891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18244);

return cljs.core.cst$kw$recur;
} else {
throw e18271;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15889__auto__,cljs.core.cst$kw$recur)){
var G__18331 = state_18244;
state_18244 = G__18331;
continue;
} else {
return ret_value__15889__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__ = function(state_18244){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____1.call(this,state_18244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15888__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15888__auto__;
})()
;})(switch__15887__auto__,c__16070__auto__,jobs,results,process,async))
})();
var state__16072__auto__ = (function (){var statearr_18273 = (f__16071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16071__auto__.cljs$core$IFn$_invoke$arity$0() : f__16071__auto__.call(null));
(statearr_18273[(6)] = c__16070__auto__);

return statearr_18273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16072__auto__);
});})(c__16070__auto__,jobs,results,process,async))
);

return c__16070__auto__;
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
var G__18333 = arguments.length;
switch (G__18333) {
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
var G__18336 = arguments.length;
switch (G__18336) {
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
var G__18339 = arguments.length;
switch (G__18339) {
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
var c__16070__auto___18388 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16070__auto___18388,tc,fc){
return (function (){
var f__16071__auto__ = (function (){var switch__15887__auto__ = ((function (c__16070__auto___18388,tc,fc){
return (function (state_18365){
var state_val_18366 = (state_18365[(1)]);
if((state_val_18366 === (7))){
var inst_18361 = (state_18365[(2)]);
var state_18365__$1 = state_18365;
var statearr_18367_18389 = state_18365__$1;
(statearr_18367_18389[(2)] = inst_18361);

(statearr_18367_18389[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (1))){
var state_18365__$1 = state_18365;
var statearr_18368_18390 = state_18365__$1;
(statearr_18368_18390[(2)] = null);

(statearr_18368_18390[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (4))){
var inst_18342 = (state_18365[(7)]);
var inst_18342__$1 = (state_18365[(2)]);
var inst_18343 = (inst_18342__$1 == null);
var state_18365__$1 = (function (){var statearr_18369 = state_18365;
(statearr_18369[(7)] = inst_18342__$1);

return statearr_18369;
})();
if(cljs.core.truth_(inst_18343)){
var statearr_18370_18391 = state_18365__$1;
(statearr_18370_18391[(1)] = (5));

} else {
var statearr_18371_18392 = state_18365__$1;
(statearr_18371_18392[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (13))){
var state_18365__$1 = state_18365;
var statearr_18372_18393 = state_18365__$1;
(statearr_18372_18393[(2)] = null);

(statearr_18372_18393[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (6))){
var inst_18342 = (state_18365[(7)]);
var inst_18348 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18342) : p.call(null,inst_18342));
var state_18365__$1 = state_18365;
if(cljs.core.truth_(inst_18348)){
var statearr_18373_18394 = state_18365__$1;
(statearr_18373_18394[(1)] = (9));

} else {
var statearr_18374_18395 = state_18365__$1;
(statearr_18374_18395[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (3))){
var inst_18363 = (state_18365[(2)]);
var state_18365__$1 = state_18365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18365__$1,inst_18363);
} else {
if((state_val_18366 === (12))){
var state_18365__$1 = state_18365;
var statearr_18375_18396 = state_18365__$1;
(statearr_18375_18396[(2)] = null);

(statearr_18375_18396[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (2))){
var state_18365__$1 = state_18365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18365__$1,(4),ch);
} else {
if((state_val_18366 === (11))){
var inst_18342 = (state_18365[(7)]);
var inst_18352 = (state_18365[(2)]);
var state_18365__$1 = state_18365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18365__$1,(8),inst_18352,inst_18342);
} else {
if((state_val_18366 === (9))){
var state_18365__$1 = state_18365;
var statearr_18376_18397 = state_18365__$1;
(statearr_18376_18397[(2)] = tc);

(statearr_18376_18397[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (5))){
var inst_18345 = cljs.core.async.close_BANG_(tc);
var inst_18346 = cljs.core.async.close_BANG_(fc);
var state_18365__$1 = (function (){var statearr_18377 = state_18365;
(statearr_18377[(8)] = inst_18345);

return statearr_18377;
})();
var statearr_18378_18398 = state_18365__$1;
(statearr_18378_18398[(2)] = inst_18346);

(statearr_18378_18398[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (14))){
var inst_18359 = (state_18365[(2)]);
var state_18365__$1 = state_18365;
var statearr_18379_18399 = state_18365__$1;
(statearr_18379_18399[(2)] = inst_18359);

(statearr_18379_18399[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (10))){
var state_18365__$1 = state_18365;
var statearr_18380_18400 = state_18365__$1;
(statearr_18380_18400[(2)] = fc);

(statearr_18380_18400[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18366 === (8))){
var inst_18354 = (state_18365[(2)]);
var state_18365__$1 = state_18365;
if(cljs.core.truth_(inst_18354)){
var statearr_18381_18401 = state_18365__$1;
(statearr_18381_18401[(1)] = (12));

} else {
var statearr_18382_18402 = state_18365__$1;
(statearr_18382_18402[(1)] = (13));

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
});})(c__16070__auto___18388,tc,fc))
;
return ((function (switch__15887__auto__,c__16070__auto___18388,tc,fc){
return (function() {
var cljs$core$async$state_machine__15888__auto__ = null;
var cljs$core$async$state_machine__15888__auto____0 = (function (){
var statearr_18383 = [null,null,null,null,null,null,null,null,null];
(statearr_18383[(0)] = cljs$core$async$state_machine__15888__auto__);

(statearr_18383[(1)] = (1));

return statearr_18383;
});
var cljs$core$async$state_machine__15888__auto____1 = (function (state_18365){
while(true){
var ret_value__15889__auto__ = (function (){try{while(true){
var result__15890__auto__ = switch__15887__auto__(state_18365);
if(cljs.core.keyword_identical_QMARK_(result__15890__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15890__auto__;
}
break;
}
}catch (e18384){if((e18384 instanceof Object)){
var ex__15891__auto__ = e18384;
var statearr_18385_18403 = state_18365;
(statearr_18385_18403[(5)] = ex__15891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18365);

return cljs.core.cst$kw$recur;
} else {
throw e18384;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15889__auto__,cljs.core.cst$kw$recur)){
var G__18404 = state_18365;
state_18365 = G__18404;
continue;
} else {
return ret_value__15889__auto__;
}
break;
}
});
cljs$core$async$state_machine__15888__auto__ = function(state_18365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15888__auto____1.call(this,state_18365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15888__auto____0;
cljs$core$async$state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15888__auto____1;
return cljs$core$async$state_machine__15888__auto__;
})()
;})(switch__15887__auto__,c__16070__auto___18388,tc,fc))
})();
var state__16072__auto__ = (function (){var statearr_18386 = (f__16071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16071__auto__.cljs$core$IFn$_invoke$arity$0() : f__16071__auto__.call(null));
(statearr_18386[(6)] = c__16070__auto___18388);

return statearr_18386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16072__auto__);
});})(c__16070__auto___18388,tc,fc))
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
var c__16070__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16070__auto__){
return (function (){
var f__16071__auto__ = (function (){var switch__15887__auto__ = ((function (c__16070__auto__){
return (function (state_18425){
var state_val_18426 = (state_18425[(1)]);
if((state_val_18426 === (7))){
var inst_18421 = (state_18425[(2)]);
var state_18425__$1 = state_18425;
var statearr_18427_18445 = state_18425__$1;
(statearr_18427_18445[(2)] = inst_18421);

(statearr_18427_18445[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18426 === (1))){
var inst_18405 = init;
var state_18425__$1 = (function (){var statearr_18428 = state_18425;
(statearr_18428[(7)] = inst_18405);

return statearr_18428;
})();
var statearr_18429_18446 = state_18425__$1;
(statearr_18429_18446[(2)] = null);

(statearr_18429_18446[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18426 === (4))){
var inst_18408 = (state_18425[(8)]);
var inst_18408__$1 = (state_18425[(2)]);
var inst_18409 = (inst_18408__$1 == null);
var state_18425__$1 = (function (){var statearr_18430 = state_18425;
(statearr_18430[(8)] = inst_18408__$1);

return statearr_18430;
})();
if(cljs.core.truth_(inst_18409)){
var statearr_18431_18447 = state_18425__$1;
(statearr_18431_18447[(1)] = (5));

} else {
var statearr_18432_18448 = state_18425__$1;
(statearr_18432_18448[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18426 === (6))){
var inst_18408 = (state_18425[(8)]);
var inst_18412 = (state_18425[(9)]);
var inst_18405 = (state_18425[(7)]);
var inst_18412__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18405,inst_18408) : f.call(null,inst_18405,inst_18408));
var inst_18413 = cljs.core.reduced_QMARK_(inst_18412__$1);
var state_18425__$1 = (function (){var statearr_18433 = state_18425;
(statearr_18433[(9)] = inst_18412__$1);

return statearr_18433;
})();
if(inst_18413){
var statearr_18434_18449 = state_18425__$1;
(statearr_18434_18449[(1)] = (8));

} else {
var statearr_18435_18450 = state_18425__$1;
(statearr_18435_18450[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18426 === (3))){
var inst_18423 = (state_18425[(2)]);
var state_18425__$1 = state_18425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18425__$1,inst_18423);
} else {
if((state_val_18426 === (2))){
var state_18425__$1 = state_18425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18425__$1,(4),ch);
} else {
if((state_val_18426 === (9))){
var inst_18412 = (state_18425[(9)]);
var inst_18405 = inst_18412;
var state_18425__$1 = (function (){var statearr_18436 = state_18425;
(statearr_18436[(7)] = inst_18405);

return statearr_18436;
})();
var statearr_18437_18451 = state_18425__$1;
(statearr_18437_18451[(2)] = null);

(statearr_18437_18451[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18426 === (5))){
var inst_18405 = (state_18425[(7)]);
var state_18425__$1 = state_18425;
var statearr_18438_18452 = state_18425__$1;
(statearr_18438_18452[(2)] = inst_18405);

(statearr_18438_18452[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18426 === (10))){
var inst_18419 = (state_18425[(2)]);
var state_18425__$1 = state_18425;
var statearr_18439_18453 = state_18425__$1;
(statearr_18439_18453[(2)] = inst_18419);

(statearr_18439_18453[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18426 === (8))){
var inst_18412 = (state_18425[(9)]);
var inst_18415 = cljs.core.deref(inst_18412);
var state_18425__$1 = state_18425;
var statearr_18440_18454 = state_18425__$1;
(statearr_18440_18454[(2)] = inst_18415);

(statearr_18440_18454[(1)] = (10));


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
});})(c__16070__auto__))
;
return ((function (switch__15887__auto__,c__16070__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15888__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15888__auto____0 = (function (){
var statearr_18441 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18441[(0)] = cljs$core$async$reduce_$_state_machine__15888__auto__);

(statearr_18441[(1)] = (1));

return statearr_18441;
});
var cljs$core$async$reduce_$_state_machine__15888__auto____1 = (function (state_18425){
while(true){
var ret_value__15889__auto__ = (function (){try{while(true){
var result__15890__auto__ = switch__15887__auto__(state_18425);
if(cljs.core.keyword_identical_QMARK_(result__15890__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15890__auto__;
}
break;
}
}catch (e18442){if((e18442 instanceof Object)){
var ex__15891__auto__ = e18442;
var statearr_18443_18455 = state_18425;
(statearr_18443_18455[(5)] = ex__15891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18425);

return cljs.core.cst$kw$recur;
} else {
throw e18442;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15889__auto__,cljs.core.cst$kw$recur)){
var G__18456 = state_18425;
state_18425 = G__18456;
continue;
} else {
return ret_value__15889__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15888__auto__ = function(state_18425){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15888__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15888__auto____1.call(this,state_18425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15888__auto____0;
cljs$core$async$reduce_$_state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15888__auto____1;
return cljs$core$async$reduce_$_state_machine__15888__auto__;
})()
;})(switch__15887__auto__,c__16070__auto__))
})();
var state__16072__auto__ = (function (){var statearr_18444 = (f__16071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16071__auto__.cljs$core$IFn$_invoke$arity$0() : f__16071__auto__.call(null));
(statearr_18444[(6)] = c__16070__auto__);

return statearr_18444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16072__auto__);
});})(c__16070__auto__))
);

return c__16070__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__16070__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16070__auto__,f__$1){
return (function (){
var f__16071__auto__ = (function (){var switch__15887__auto__ = ((function (c__16070__auto__,f__$1){
return (function (state_18462){
var state_val_18463 = (state_18462[(1)]);
if((state_val_18463 === (1))){
var inst_18457 = cljs.core.async.reduce(f__$1,init,ch);
var state_18462__$1 = state_18462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18462__$1,(2),inst_18457);
} else {
if((state_val_18463 === (2))){
var inst_18459 = (state_18462[(2)]);
var inst_18460 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18459) : f__$1.call(null,inst_18459));
var state_18462__$1 = state_18462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18462__$1,inst_18460);
} else {
return null;
}
}
});})(c__16070__auto__,f__$1))
;
return ((function (switch__15887__auto__,c__16070__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15888__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15888__auto____0 = (function (){
var statearr_18464 = [null,null,null,null,null,null,null];
(statearr_18464[(0)] = cljs$core$async$transduce_$_state_machine__15888__auto__);

(statearr_18464[(1)] = (1));

return statearr_18464;
});
var cljs$core$async$transduce_$_state_machine__15888__auto____1 = (function (state_18462){
while(true){
var ret_value__15889__auto__ = (function (){try{while(true){
var result__15890__auto__ = switch__15887__auto__(state_18462);
if(cljs.core.keyword_identical_QMARK_(result__15890__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15890__auto__;
}
break;
}
}catch (e18465){if((e18465 instanceof Object)){
var ex__15891__auto__ = e18465;
var statearr_18466_18468 = state_18462;
(statearr_18466_18468[(5)] = ex__15891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18462);

return cljs.core.cst$kw$recur;
} else {
throw e18465;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15889__auto__,cljs.core.cst$kw$recur)){
var G__18469 = state_18462;
state_18462 = G__18469;
continue;
} else {
return ret_value__15889__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15888__auto__ = function(state_18462){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15888__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15888__auto____1.call(this,state_18462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15888__auto____0;
cljs$core$async$transduce_$_state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15888__auto____1;
return cljs$core$async$transduce_$_state_machine__15888__auto__;
})()
;})(switch__15887__auto__,c__16070__auto__,f__$1))
})();
var state__16072__auto__ = (function (){var statearr_18467 = (f__16071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16071__auto__.cljs$core$IFn$_invoke$arity$0() : f__16071__auto__.call(null));
(statearr_18467[(6)] = c__16070__auto__);

return statearr_18467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16072__auto__);
});})(c__16070__auto__,f__$1))
);

return c__16070__auto__;
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
var G__18471 = arguments.length;
switch (G__18471) {
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
var c__16070__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16070__auto__){
return (function (){
var f__16071__auto__ = (function (){var switch__15887__auto__ = ((function (c__16070__auto__){
return (function (state_18496){
var state_val_18497 = (state_18496[(1)]);
if((state_val_18497 === (7))){
var inst_18478 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
var statearr_18498_18519 = state_18496__$1;
(statearr_18498_18519[(2)] = inst_18478);

(statearr_18498_18519[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18497 === (1))){
var inst_18472 = cljs.core.seq(coll);
var inst_18473 = inst_18472;
var state_18496__$1 = (function (){var statearr_18499 = state_18496;
(statearr_18499[(7)] = inst_18473);

return statearr_18499;
})();
var statearr_18500_18520 = state_18496__$1;
(statearr_18500_18520[(2)] = null);

(statearr_18500_18520[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18497 === (4))){
var inst_18473 = (state_18496[(7)]);
var inst_18476 = cljs.core.first(inst_18473);
var state_18496__$1 = state_18496;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18496__$1,(7),ch,inst_18476);
} else {
if((state_val_18497 === (13))){
var inst_18490 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
var statearr_18501_18521 = state_18496__$1;
(statearr_18501_18521[(2)] = inst_18490);

(statearr_18501_18521[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18497 === (6))){
var inst_18481 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
if(cljs.core.truth_(inst_18481)){
var statearr_18502_18522 = state_18496__$1;
(statearr_18502_18522[(1)] = (8));

} else {
var statearr_18503_18523 = state_18496__$1;
(statearr_18503_18523[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18497 === (3))){
var inst_18494 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18496__$1,inst_18494);
} else {
if((state_val_18497 === (12))){
var state_18496__$1 = state_18496;
var statearr_18504_18524 = state_18496__$1;
(statearr_18504_18524[(2)] = null);

(statearr_18504_18524[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18497 === (2))){
var inst_18473 = (state_18496[(7)]);
var state_18496__$1 = state_18496;
if(cljs.core.truth_(inst_18473)){
var statearr_18505_18525 = state_18496__$1;
(statearr_18505_18525[(1)] = (4));

} else {
var statearr_18506_18526 = state_18496__$1;
(statearr_18506_18526[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18497 === (11))){
var inst_18487 = cljs.core.async.close_BANG_(ch);
var state_18496__$1 = state_18496;
var statearr_18507_18527 = state_18496__$1;
(statearr_18507_18527[(2)] = inst_18487);

(statearr_18507_18527[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18497 === (9))){
var state_18496__$1 = state_18496;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18508_18528 = state_18496__$1;
(statearr_18508_18528[(1)] = (11));

} else {
var statearr_18509_18529 = state_18496__$1;
(statearr_18509_18529[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18497 === (5))){
var inst_18473 = (state_18496[(7)]);
var state_18496__$1 = state_18496;
var statearr_18510_18530 = state_18496__$1;
(statearr_18510_18530[(2)] = inst_18473);

(statearr_18510_18530[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18497 === (10))){
var inst_18492 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
var statearr_18511_18531 = state_18496__$1;
(statearr_18511_18531[(2)] = inst_18492);

(statearr_18511_18531[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18497 === (8))){
var inst_18473 = (state_18496[(7)]);
var inst_18483 = cljs.core.next(inst_18473);
var inst_18473__$1 = inst_18483;
var state_18496__$1 = (function (){var statearr_18512 = state_18496;
(statearr_18512[(7)] = inst_18473__$1);

return statearr_18512;
})();
var statearr_18513_18532 = state_18496__$1;
(statearr_18513_18532[(2)] = null);

(statearr_18513_18532[(1)] = (2));


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
});})(c__16070__auto__))
;
return ((function (switch__15887__auto__,c__16070__auto__){
return (function() {
var cljs$core$async$state_machine__15888__auto__ = null;
var cljs$core$async$state_machine__15888__auto____0 = (function (){
var statearr_18514 = [null,null,null,null,null,null,null,null];
(statearr_18514[(0)] = cljs$core$async$state_machine__15888__auto__);

(statearr_18514[(1)] = (1));

return statearr_18514;
});
var cljs$core$async$state_machine__15888__auto____1 = (function (state_18496){
while(true){
var ret_value__15889__auto__ = (function (){try{while(true){
var result__15890__auto__ = switch__15887__auto__(state_18496);
if(cljs.core.keyword_identical_QMARK_(result__15890__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15890__auto__;
}
break;
}
}catch (e18515){if((e18515 instanceof Object)){
var ex__15891__auto__ = e18515;
var statearr_18516_18533 = state_18496;
(statearr_18516_18533[(5)] = ex__15891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18496);

return cljs.core.cst$kw$recur;
} else {
throw e18515;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15889__auto__,cljs.core.cst$kw$recur)){
var G__18534 = state_18496;
state_18496 = G__18534;
continue;
} else {
return ret_value__15889__auto__;
}
break;
}
});
cljs$core$async$state_machine__15888__auto__ = function(state_18496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15888__auto____1.call(this,state_18496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15888__auto____0;
cljs$core$async$state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15888__auto____1;
return cljs$core$async$state_machine__15888__auto__;
})()
;})(switch__15887__auto__,c__16070__auto__))
})();
var state__16072__auto__ = (function (){var statearr_18517 = (f__16071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16071__auto__.cljs$core$IFn$_invoke$arity$0() : f__16071__auto__.call(null));
(statearr_18517[(6)] = c__16070__auto__);

return statearr_18517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16072__auto__);
});})(c__16070__auto__))
);

return c__16070__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18535 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18535 = (function (ch,cs,meta18536){
this.ch = ch;
this.cs = cs;
this.meta18536 = meta18536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18537,meta18536__$1){
var self__ = this;
var _18537__$1 = this;
return (new cljs.core.async.t_cljs$core$async18535(self__.ch,self__.cs,meta18536__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18535.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18537){
var self__ = this;
var _18537__$1 = this;
return self__.meta18536;
});})(cs))
;

cljs.core.async.t_cljs$core$async18535.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18535.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18535.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18535.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18535.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18535.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18535.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta18536], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18535.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18535";

cljs.core.async.t_cljs$core$async18535.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18535");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18535.
 */
cljs.core.async.__GT_t_cljs$core$async18535 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18535(ch__$1,cs__$1,meta18536){
return (new cljs.core.async.t_cljs$core$async18535(ch__$1,cs__$1,meta18536));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18535(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__16070__auto___18757 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16070__auto___18757,cs,m,dchan,dctr,done){
return (function (){
var f__16071__auto__ = (function (){var switch__15887__auto__ = ((function (c__16070__auto___18757,cs,m,dchan,dctr,done){
return (function (state_18672){
var state_val_18673 = (state_18672[(1)]);
if((state_val_18673 === (7))){
var inst_18668 = (state_18672[(2)]);
var state_18672__$1 = state_18672;
var statearr_18674_18758 = state_18672__$1;
(statearr_18674_18758[(2)] = inst_18668);

(statearr_18674_18758[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (20))){
var inst_18571 = (state_18672[(7)]);
var inst_18583 = cljs.core.first(inst_18571);
var inst_18584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18583,(0),null);
var inst_18585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18583,(1),null);
var state_18672__$1 = (function (){var statearr_18675 = state_18672;
(statearr_18675[(8)] = inst_18584);

return statearr_18675;
})();
if(cljs.core.truth_(inst_18585)){
var statearr_18676_18759 = state_18672__$1;
(statearr_18676_18759[(1)] = (22));

} else {
var statearr_18677_18760 = state_18672__$1;
(statearr_18677_18760[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (27))){
var inst_18540 = (state_18672[(9)]);
var inst_18615 = (state_18672[(10)]);
var inst_18613 = (state_18672[(11)]);
var inst_18620 = (state_18672[(12)]);
var inst_18620__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18613,inst_18615);
var inst_18621 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18620__$1,inst_18540,done);
var state_18672__$1 = (function (){var statearr_18678 = state_18672;
(statearr_18678[(12)] = inst_18620__$1);

return statearr_18678;
})();
if(cljs.core.truth_(inst_18621)){
var statearr_18679_18761 = state_18672__$1;
(statearr_18679_18761[(1)] = (30));

} else {
var statearr_18680_18762 = state_18672__$1;
(statearr_18680_18762[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (1))){
var state_18672__$1 = state_18672;
var statearr_18681_18763 = state_18672__$1;
(statearr_18681_18763[(2)] = null);

(statearr_18681_18763[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (24))){
var inst_18571 = (state_18672[(7)]);
var inst_18590 = (state_18672[(2)]);
var inst_18591 = cljs.core.next(inst_18571);
var inst_18549 = inst_18591;
var inst_18550 = null;
var inst_18551 = (0);
var inst_18552 = (0);
var state_18672__$1 = (function (){var statearr_18682 = state_18672;
(statearr_18682[(13)] = inst_18549);

(statearr_18682[(14)] = inst_18551);

(statearr_18682[(15)] = inst_18550);

(statearr_18682[(16)] = inst_18552);

(statearr_18682[(17)] = inst_18590);

return statearr_18682;
})();
var statearr_18683_18764 = state_18672__$1;
(statearr_18683_18764[(2)] = null);

(statearr_18683_18764[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (39))){
var state_18672__$1 = state_18672;
var statearr_18687_18765 = state_18672__$1;
(statearr_18687_18765[(2)] = null);

(statearr_18687_18765[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (4))){
var inst_18540 = (state_18672[(9)]);
var inst_18540__$1 = (state_18672[(2)]);
var inst_18541 = (inst_18540__$1 == null);
var state_18672__$1 = (function (){var statearr_18688 = state_18672;
(statearr_18688[(9)] = inst_18540__$1);

return statearr_18688;
})();
if(cljs.core.truth_(inst_18541)){
var statearr_18689_18766 = state_18672__$1;
(statearr_18689_18766[(1)] = (5));

} else {
var statearr_18690_18767 = state_18672__$1;
(statearr_18690_18767[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (15))){
var inst_18549 = (state_18672[(13)]);
var inst_18551 = (state_18672[(14)]);
var inst_18550 = (state_18672[(15)]);
var inst_18552 = (state_18672[(16)]);
var inst_18567 = (state_18672[(2)]);
var inst_18568 = (inst_18552 + (1));
var tmp18684 = inst_18549;
var tmp18685 = inst_18551;
var tmp18686 = inst_18550;
var inst_18549__$1 = tmp18684;
var inst_18550__$1 = tmp18686;
var inst_18551__$1 = tmp18685;
var inst_18552__$1 = inst_18568;
var state_18672__$1 = (function (){var statearr_18691 = state_18672;
(statearr_18691[(18)] = inst_18567);

(statearr_18691[(13)] = inst_18549__$1);

(statearr_18691[(14)] = inst_18551__$1);

(statearr_18691[(15)] = inst_18550__$1);

(statearr_18691[(16)] = inst_18552__$1);

return statearr_18691;
})();
var statearr_18692_18768 = state_18672__$1;
(statearr_18692_18768[(2)] = null);

(statearr_18692_18768[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (21))){
var inst_18594 = (state_18672[(2)]);
var state_18672__$1 = state_18672;
var statearr_18696_18769 = state_18672__$1;
(statearr_18696_18769[(2)] = inst_18594);

(statearr_18696_18769[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (31))){
var inst_18620 = (state_18672[(12)]);
var inst_18624 = done(null);
var inst_18625 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18620);
var state_18672__$1 = (function (){var statearr_18697 = state_18672;
(statearr_18697[(19)] = inst_18624);

return statearr_18697;
})();
var statearr_18698_18770 = state_18672__$1;
(statearr_18698_18770[(2)] = inst_18625);

(statearr_18698_18770[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (32))){
var inst_18612 = (state_18672[(20)]);
var inst_18615 = (state_18672[(10)]);
var inst_18613 = (state_18672[(11)]);
var inst_18614 = (state_18672[(21)]);
var inst_18627 = (state_18672[(2)]);
var inst_18628 = (inst_18615 + (1));
var tmp18693 = inst_18612;
var tmp18694 = inst_18613;
var tmp18695 = inst_18614;
var inst_18612__$1 = tmp18693;
var inst_18613__$1 = tmp18694;
var inst_18614__$1 = tmp18695;
var inst_18615__$1 = inst_18628;
var state_18672__$1 = (function (){var statearr_18699 = state_18672;
(statearr_18699[(20)] = inst_18612__$1);

(statearr_18699[(10)] = inst_18615__$1);

(statearr_18699[(11)] = inst_18613__$1);

(statearr_18699[(22)] = inst_18627);

(statearr_18699[(21)] = inst_18614__$1);

return statearr_18699;
})();
var statearr_18700_18771 = state_18672__$1;
(statearr_18700_18771[(2)] = null);

(statearr_18700_18771[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (40))){
var inst_18640 = (state_18672[(23)]);
var inst_18644 = done(null);
var inst_18645 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18640);
var state_18672__$1 = (function (){var statearr_18701 = state_18672;
(statearr_18701[(24)] = inst_18644);

return statearr_18701;
})();
var statearr_18702_18772 = state_18672__$1;
(statearr_18702_18772[(2)] = inst_18645);

(statearr_18702_18772[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (33))){
var inst_18631 = (state_18672[(25)]);
var inst_18633 = cljs.core.chunked_seq_QMARK_(inst_18631);
var state_18672__$1 = state_18672;
if(inst_18633){
var statearr_18703_18773 = state_18672__$1;
(statearr_18703_18773[(1)] = (36));

} else {
var statearr_18704_18774 = state_18672__$1;
(statearr_18704_18774[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (13))){
var inst_18561 = (state_18672[(26)]);
var inst_18564 = cljs.core.async.close_BANG_(inst_18561);
var state_18672__$1 = state_18672;
var statearr_18705_18775 = state_18672__$1;
(statearr_18705_18775[(2)] = inst_18564);

(statearr_18705_18775[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (22))){
var inst_18584 = (state_18672[(8)]);
var inst_18587 = cljs.core.async.close_BANG_(inst_18584);
var state_18672__$1 = state_18672;
var statearr_18706_18776 = state_18672__$1;
(statearr_18706_18776[(2)] = inst_18587);

(statearr_18706_18776[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (36))){
var inst_18631 = (state_18672[(25)]);
var inst_18635 = cljs.core.chunk_first(inst_18631);
var inst_18636 = cljs.core.chunk_rest(inst_18631);
var inst_18637 = cljs.core.count(inst_18635);
var inst_18612 = inst_18636;
var inst_18613 = inst_18635;
var inst_18614 = inst_18637;
var inst_18615 = (0);
var state_18672__$1 = (function (){var statearr_18707 = state_18672;
(statearr_18707[(20)] = inst_18612);

(statearr_18707[(10)] = inst_18615);

(statearr_18707[(11)] = inst_18613);

(statearr_18707[(21)] = inst_18614);

return statearr_18707;
})();
var statearr_18708_18777 = state_18672__$1;
(statearr_18708_18777[(2)] = null);

(statearr_18708_18777[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (41))){
var inst_18631 = (state_18672[(25)]);
var inst_18647 = (state_18672[(2)]);
var inst_18648 = cljs.core.next(inst_18631);
var inst_18612 = inst_18648;
var inst_18613 = null;
var inst_18614 = (0);
var inst_18615 = (0);
var state_18672__$1 = (function (){var statearr_18709 = state_18672;
(statearr_18709[(20)] = inst_18612);

(statearr_18709[(10)] = inst_18615);

(statearr_18709[(11)] = inst_18613);

(statearr_18709[(27)] = inst_18647);

(statearr_18709[(21)] = inst_18614);

return statearr_18709;
})();
var statearr_18710_18778 = state_18672__$1;
(statearr_18710_18778[(2)] = null);

(statearr_18710_18778[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (43))){
var state_18672__$1 = state_18672;
var statearr_18711_18779 = state_18672__$1;
(statearr_18711_18779[(2)] = null);

(statearr_18711_18779[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (29))){
var inst_18656 = (state_18672[(2)]);
var state_18672__$1 = state_18672;
var statearr_18712_18780 = state_18672__$1;
(statearr_18712_18780[(2)] = inst_18656);

(statearr_18712_18780[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (44))){
var inst_18665 = (state_18672[(2)]);
var state_18672__$1 = (function (){var statearr_18713 = state_18672;
(statearr_18713[(28)] = inst_18665);

return statearr_18713;
})();
var statearr_18714_18781 = state_18672__$1;
(statearr_18714_18781[(2)] = null);

(statearr_18714_18781[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (6))){
var inst_18604 = (state_18672[(29)]);
var inst_18603 = cljs.core.deref(cs);
var inst_18604__$1 = cljs.core.keys(inst_18603);
var inst_18605 = cljs.core.count(inst_18604__$1);
var inst_18606 = cljs.core.reset_BANG_(dctr,inst_18605);
var inst_18611 = cljs.core.seq(inst_18604__$1);
var inst_18612 = inst_18611;
var inst_18613 = null;
var inst_18614 = (0);
var inst_18615 = (0);
var state_18672__$1 = (function (){var statearr_18715 = state_18672;
(statearr_18715[(30)] = inst_18606);

(statearr_18715[(20)] = inst_18612);

(statearr_18715[(10)] = inst_18615);

(statearr_18715[(11)] = inst_18613);

(statearr_18715[(29)] = inst_18604__$1);

(statearr_18715[(21)] = inst_18614);

return statearr_18715;
})();
var statearr_18716_18782 = state_18672__$1;
(statearr_18716_18782[(2)] = null);

(statearr_18716_18782[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (28))){
var inst_18612 = (state_18672[(20)]);
var inst_18631 = (state_18672[(25)]);
var inst_18631__$1 = cljs.core.seq(inst_18612);
var state_18672__$1 = (function (){var statearr_18717 = state_18672;
(statearr_18717[(25)] = inst_18631__$1);

return statearr_18717;
})();
if(inst_18631__$1){
var statearr_18718_18783 = state_18672__$1;
(statearr_18718_18783[(1)] = (33));

} else {
var statearr_18719_18784 = state_18672__$1;
(statearr_18719_18784[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (25))){
var inst_18615 = (state_18672[(10)]);
var inst_18614 = (state_18672[(21)]);
var inst_18617 = (inst_18615 < inst_18614);
var inst_18618 = inst_18617;
var state_18672__$1 = state_18672;
if(cljs.core.truth_(inst_18618)){
var statearr_18720_18785 = state_18672__$1;
(statearr_18720_18785[(1)] = (27));

} else {
var statearr_18721_18786 = state_18672__$1;
(statearr_18721_18786[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (34))){
var state_18672__$1 = state_18672;
var statearr_18722_18787 = state_18672__$1;
(statearr_18722_18787[(2)] = null);

(statearr_18722_18787[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (17))){
var state_18672__$1 = state_18672;
var statearr_18723_18788 = state_18672__$1;
(statearr_18723_18788[(2)] = null);

(statearr_18723_18788[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (3))){
var inst_18670 = (state_18672[(2)]);
var state_18672__$1 = state_18672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18672__$1,inst_18670);
} else {
if((state_val_18673 === (12))){
var inst_18599 = (state_18672[(2)]);
var state_18672__$1 = state_18672;
var statearr_18724_18789 = state_18672__$1;
(statearr_18724_18789[(2)] = inst_18599);

(statearr_18724_18789[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (2))){
var state_18672__$1 = state_18672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18672__$1,(4),ch);
} else {
if((state_val_18673 === (23))){
var state_18672__$1 = state_18672;
var statearr_18725_18790 = state_18672__$1;
(statearr_18725_18790[(2)] = null);

(statearr_18725_18790[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (35))){
var inst_18654 = (state_18672[(2)]);
var state_18672__$1 = state_18672;
var statearr_18726_18791 = state_18672__$1;
(statearr_18726_18791[(2)] = inst_18654);

(statearr_18726_18791[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (19))){
var inst_18571 = (state_18672[(7)]);
var inst_18575 = cljs.core.chunk_first(inst_18571);
var inst_18576 = cljs.core.chunk_rest(inst_18571);
var inst_18577 = cljs.core.count(inst_18575);
var inst_18549 = inst_18576;
var inst_18550 = inst_18575;
var inst_18551 = inst_18577;
var inst_18552 = (0);
var state_18672__$1 = (function (){var statearr_18727 = state_18672;
(statearr_18727[(13)] = inst_18549);

(statearr_18727[(14)] = inst_18551);

(statearr_18727[(15)] = inst_18550);

(statearr_18727[(16)] = inst_18552);

return statearr_18727;
})();
var statearr_18728_18792 = state_18672__$1;
(statearr_18728_18792[(2)] = null);

(statearr_18728_18792[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (11))){
var inst_18571 = (state_18672[(7)]);
var inst_18549 = (state_18672[(13)]);
var inst_18571__$1 = cljs.core.seq(inst_18549);
var state_18672__$1 = (function (){var statearr_18729 = state_18672;
(statearr_18729[(7)] = inst_18571__$1);

return statearr_18729;
})();
if(inst_18571__$1){
var statearr_18730_18793 = state_18672__$1;
(statearr_18730_18793[(1)] = (16));

} else {
var statearr_18731_18794 = state_18672__$1;
(statearr_18731_18794[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (9))){
var inst_18601 = (state_18672[(2)]);
var state_18672__$1 = state_18672;
var statearr_18732_18795 = state_18672__$1;
(statearr_18732_18795[(2)] = inst_18601);

(statearr_18732_18795[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (5))){
var inst_18547 = cljs.core.deref(cs);
var inst_18548 = cljs.core.seq(inst_18547);
var inst_18549 = inst_18548;
var inst_18550 = null;
var inst_18551 = (0);
var inst_18552 = (0);
var state_18672__$1 = (function (){var statearr_18733 = state_18672;
(statearr_18733[(13)] = inst_18549);

(statearr_18733[(14)] = inst_18551);

(statearr_18733[(15)] = inst_18550);

(statearr_18733[(16)] = inst_18552);

return statearr_18733;
})();
var statearr_18734_18796 = state_18672__$1;
(statearr_18734_18796[(2)] = null);

(statearr_18734_18796[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (14))){
var state_18672__$1 = state_18672;
var statearr_18735_18797 = state_18672__$1;
(statearr_18735_18797[(2)] = null);

(statearr_18735_18797[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (45))){
var inst_18662 = (state_18672[(2)]);
var state_18672__$1 = state_18672;
var statearr_18736_18798 = state_18672__$1;
(statearr_18736_18798[(2)] = inst_18662);

(statearr_18736_18798[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (26))){
var inst_18604 = (state_18672[(29)]);
var inst_18658 = (state_18672[(2)]);
var inst_18659 = cljs.core.seq(inst_18604);
var state_18672__$1 = (function (){var statearr_18737 = state_18672;
(statearr_18737[(31)] = inst_18658);

return statearr_18737;
})();
if(inst_18659){
var statearr_18738_18799 = state_18672__$1;
(statearr_18738_18799[(1)] = (42));

} else {
var statearr_18739_18800 = state_18672__$1;
(statearr_18739_18800[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (16))){
var inst_18571 = (state_18672[(7)]);
var inst_18573 = cljs.core.chunked_seq_QMARK_(inst_18571);
var state_18672__$1 = state_18672;
if(inst_18573){
var statearr_18740_18801 = state_18672__$1;
(statearr_18740_18801[(1)] = (19));

} else {
var statearr_18741_18802 = state_18672__$1;
(statearr_18741_18802[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (38))){
var inst_18651 = (state_18672[(2)]);
var state_18672__$1 = state_18672;
var statearr_18742_18803 = state_18672__$1;
(statearr_18742_18803[(2)] = inst_18651);

(statearr_18742_18803[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (30))){
var state_18672__$1 = state_18672;
var statearr_18743_18804 = state_18672__$1;
(statearr_18743_18804[(2)] = null);

(statearr_18743_18804[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (10))){
var inst_18550 = (state_18672[(15)]);
var inst_18552 = (state_18672[(16)]);
var inst_18560 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18550,inst_18552);
var inst_18561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18560,(0),null);
var inst_18562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18560,(1),null);
var state_18672__$1 = (function (){var statearr_18744 = state_18672;
(statearr_18744[(26)] = inst_18561);

return statearr_18744;
})();
if(cljs.core.truth_(inst_18562)){
var statearr_18745_18805 = state_18672__$1;
(statearr_18745_18805[(1)] = (13));

} else {
var statearr_18746_18806 = state_18672__$1;
(statearr_18746_18806[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (18))){
var inst_18597 = (state_18672[(2)]);
var state_18672__$1 = state_18672;
var statearr_18747_18807 = state_18672__$1;
(statearr_18747_18807[(2)] = inst_18597);

(statearr_18747_18807[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (42))){
var state_18672__$1 = state_18672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18672__$1,(45),dchan);
} else {
if((state_val_18673 === (37))){
var inst_18540 = (state_18672[(9)]);
var inst_18640 = (state_18672[(23)]);
var inst_18631 = (state_18672[(25)]);
var inst_18640__$1 = cljs.core.first(inst_18631);
var inst_18641 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18640__$1,inst_18540,done);
var state_18672__$1 = (function (){var statearr_18748 = state_18672;
(statearr_18748[(23)] = inst_18640__$1);

return statearr_18748;
})();
if(cljs.core.truth_(inst_18641)){
var statearr_18749_18808 = state_18672__$1;
(statearr_18749_18808[(1)] = (39));

} else {
var statearr_18750_18809 = state_18672__$1;
(statearr_18750_18809[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18673 === (8))){
var inst_18551 = (state_18672[(14)]);
var inst_18552 = (state_18672[(16)]);
var inst_18554 = (inst_18552 < inst_18551);
var inst_18555 = inst_18554;
var state_18672__$1 = state_18672;
if(cljs.core.truth_(inst_18555)){
var statearr_18751_18810 = state_18672__$1;
(statearr_18751_18810[(1)] = (10));

} else {
var statearr_18752_18811 = state_18672__$1;
(statearr_18752_18811[(1)] = (11));

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
});})(c__16070__auto___18757,cs,m,dchan,dctr,done))
;
return ((function (switch__15887__auto__,c__16070__auto___18757,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15888__auto__ = null;
var cljs$core$async$mult_$_state_machine__15888__auto____0 = (function (){
var statearr_18753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18753[(0)] = cljs$core$async$mult_$_state_machine__15888__auto__);

(statearr_18753[(1)] = (1));

return statearr_18753;
});
var cljs$core$async$mult_$_state_machine__15888__auto____1 = (function (state_18672){
while(true){
var ret_value__15889__auto__ = (function (){try{while(true){
var result__15890__auto__ = switch__15887__auto__(state_18672);
if(cljs.core.keyword_identical_QMARK_(result__15890__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15890__auto__;
}
break;
}
}catch (e18754){if((e18754 instanceof Object)){
var ex__15891__auto__ = e18754;
var statearr_18755_18812 = state_18672;
(statearr_18755_18812[(5)] = ex__15891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18672);

return cljs.core.cst$kw$recur;
} else {
throw e18754;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15889__auto__,cljs.core.cst$kw$recur)){
var G__18813 = state_18672;
state_18672 = G__18813;
continue;
} else {
return ret_value__15889__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15888__auto__ = function(state_18672){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15888__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15888__auto____1.call(this,state_18672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15888__auto____0;
cljs$core$async$mult_$_state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15888__auto____1;
return cljs$core$async$mult_$_state_machine__15888__auto__;
})()
;})(switch__15887__auto__,c__16070__auto___18757,cs,m,dchan,dctr,done))
})();
var state__16072__auto__ = (function (){var statearr_18756 = (f__16071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16071__auto__.cljs$core$IFn$_invoke$arity$0() : f__16071__auto__.call(null));
(statearr_18756[(6)] = c__16070__auto___18757);

return statearr_18756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16072__auto__);
});})(c__16070__auto___18757,cs,m,dchan,dctr,done))
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
var G__18815 = arguments.length;
switch (G__18815) {
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
var len__4531__auto___18827 = arguments.length;
var i__4532__auto___18828 = (0);
while(true){
if((i__4532__auto___18828 < len__4531__auto___18827)){
args__4534__auto__.push((arguments[i__4532__auto___18828]));

var G__18829 = (i__4532__auto___18828 + (1));
i__4532__auto___18828 = G__18829;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18821){
var map__18822 = p__18821;
var map__18822__$1 = ((((!((map__18822 == null)))?(((((map__18822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18822):map__18822);
var opts = map__18822__$1;
var statearr_18824_18830 = state;
(statearr_18824_18830[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__18822,map__18822__$1,opts){
return (function (val){
var statearr_18825_18831 = state;
(statearr_18825_18831[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__18822,map__18822__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_18826_18832 = state;
(statearr_18826_18832[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18817){
var G__18818 = cljs.core.first(seq18817);
var seq18817__$1 = cljs.core.next(seq18817);
var G__18819 = cljs.core.first(seq18817__$1);
var seq18817__$2 = cljs.core.next(seq18817__$1);
var G__18820 = cljs.core.first(seq18817__$2);
var seq18817__$3 = cljs.core.next(seq18817__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18818,G__18819,G__18820,seq18817__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18833 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18833 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta18834){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta18834 = meta18834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18835,meta18834__$1){
var self__ = this;
var _18835__$1 = this;
return (new cljs.core.async.t_cljs$core$async18833(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta18834__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18833.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18835){
var self__ = this;
var _18835__$1 = this;
return self__.meta18834;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18833.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18833.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18833.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18833.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18833.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18833.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18833.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18833.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18833.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta18834], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18833.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18833";

cljs.core.async.t_cljs$core$async18833.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18833");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18833.
 */
cljs.core.async.__GT_t_cljs$core$async18833 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18833(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18834){
return (new cljs.core.async.t_cljs$core$async18833(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18834));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18833(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16070__auto___18997 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16070__auto___18997,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16071__auto__ = (function (){var switch__15887__auto__ = ((function (c__16070__auto___18997,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18937){
var state_val_18938 = (state_18937[(1)]);
if((state_val_18938 === (7))){
var inst_18852 = (state_18937[(2)]);
var state_18937__$1 = state_18937;
var statearr_18939_18998 = state_18937__$1;
(statearr_18939_18998[(2)] = inst_18852);

(statearr_18939_18998[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (20))){
var inst_18864 = (state_18937[(7)]);
var state_18937__$1 = state_18937;
var statearr_18940_18999 = state_18937__$1;
(statearr_18940_18999[(2)] = inst_18864);

(statearr_18940_18999[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (27))){
var state_18937__$1 = state_18937;
var statearr_18941_19000 = state_18937__$1;
(statearr_18941_19000[(2)] = null);

(statearr_18941_19000[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (1))){
var inst_18839 = (state_18937[(8)]);
var inst_18839__$1 = calc_state();
var inst_18841 = (inst_18839__$1 == null);
var inst_18842 = cljs.core.not(inst_18841);
var state_18937__$1 = (function (){var statearr_18942 = state_18937;
(statearr_18942[(8)] = inst_18839__$1);

return statearr_18942;
})();
if(inst_18842){
var statearr_18943_19001 = state_18937__$1;
(statearr_18943_19001[(1)] = (2));

} else {
var statearr_18944_19002 = state_18937__$1;
(statearr_18944_19002[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (24))){
var inst_18888 = (state_18937[(9)]);
var inst_18897 = (state_18937[(10)]);
var inst_18911 = (state_18937[(11)]);
var inst_18911__$1 = (inst_18888.cljs$core$IFn$_invoke$arity$1 ? inst_18888.cljs$core$IFn$_invoke$arity$1(inst_18897) : inst_18888.call(null,inst_18897));
var state_18937__$1 = (function (){var statearr_18945 = state_18937;
(statearr_18945[(11)] = inst_18911__$1);

return statearr_18945;
})();
if(cljs.core.truth_(inst_18911__$1)){
var statearr_18946_19003 = state_18937__$1;
(statearr_18946_19003[(1)] = (29));

} else {
var statearr_18947_19004 = state_18937__$1;
(statearr_18947_19004[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (4))){
var inst_18855 = (state_18937[(2)]);
var state_18937__$1 = state_18937;
if(cljs.core.truth_(inst_18855)){
var statearr_18948_19005 = state_18937__$1;
(statearr_18948_19005[(1)] = (8));

} else {
var statearr_18949_19006 = state_18937__$1;
(statearr_18949_19006[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (15))){
var inst_18882 = (state_18937[(2)]);
var state_18937__$1 = state_18937;
if(cljs.core.truth_(inst_18882)){
var statearr_18950_19007 = state_18937__$1;
(statearr_18950_19007[(1)] = (19));

} else {
var statearr_18951_19008 = state_18937__$1;
(statearr_18951_19008[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (21))){
var inst_18887 = (state_18937[(12)]);
var inst_18887__$1 = (state_18937[(2)]);
var inst_18888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18887__$1,cljs.core.cst$kw$solos);
var inst_18889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18887__$1,cljs.core.cst$kw$mutes);
var inst_18890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18887__$1,cljs.core.cst$kw$reads);
var state_18937__$1 = (function (){var statearr_18952 = state_18937;
(statearr_18952[(9)] = inst_18888);

(statearr_18952[(13)] = inst_18889);

(statearr_18952[(12)] = inst_18887__$1);

return statearr_18952;
})();
return cljs.core.async.ioc_alts_BANG_(state_18937__$1,(22),inst_18890);
} else {
if((state_val_18938 === (31))){
var inst_18919 = (state_18937[(2)]);
var state_18937__$1 = state_18937;
if(cljs.core.truth_(inst_18919)){
var statearr_18953_19009 = state_18937__$1;
(statearr_18953_19009[(1)] = (32));

} else {
var statearr_18954_19010 = state_18937__$1;
(statearr_18954_19010[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (32))){
var inst_18896 = (state_18937[(14)]);
var state_18937__$1 = state_18937;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18937__$1,(35),out,inst_18896);
} else {
if((state_val_18938 === (33))){
var inst_18887 = (state_18937[(12)]);
var inst_18864 = inst_18887;
var state_18937__$1 = (function (){var statearr_18955 = state_18937;
(statearr_18955[(7)] = inst_18864);

return statearr_18955;
})();
var statearr_18956_19011 = state_18937__$1;
(statearr_18956_19011[(2)] = null);

(statearr_18956_19011[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (13))){
var inst_18864 = (state_18937[(7)]);
var inst_18871 = inst_18864.cljs$lang$protocol_mask$partition0$;
var inst_18872 = (inst_18871 & (64));
var inst_18873 = inst_18864.cljs$core$ISeq$;
var inst_18874 = (cljs.core.PROTOCOL_SENTINEL === inst_18873);
var inst_18875 = ((inst_18872) || (inst_18874));
var state_18937__$1 = state_18937;
if(cljs.core.truth_(inst_18875)){
var statearr_18957_19012 = state_18937__$1;
(statearr_18957_19012[(1)] = (16));

} else {
var statearr_18958_19013 = state_18937__$1;
(statearr_18958_19013[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (22))){
var inst_18896 = (state_18937[(14)]);
var inst_18897 = (state_18937[(10)]);
var inst_18895 = (state_18937[(2)]);
var inst_18896__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18895,(0),null);
var inst_18897__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18895,(1),null);
var inst_18898 = (inst_18896__$1 == null);
var inst_18899 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18897__$1,change);
var inst_18900 = ((inst_18898) || (inst_18899));
var state_18937__$1 = (function (){var statearr_18959 = state_18937;
(statearr_18959[(14)] = inst_18896__$1);

(statearr_18959[(10)] = inst_18897__$1);

return statearr_18959;
})();
if(cljs.core.truth_(inst_18900)){
var statearr_18960_19014 = state_18937__$1;
(statearr_18960_19014[(1)] = (23));

} else {
var statearr_18961_19015 = state_18937__$1;
(statearr_18961_19015[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (36))){
var inst_18887 = (state_18937[(12)]);
var inst_18864 = inst_18887;
var state_18937__$1 = (function (){var statearr_18962 = state_18937;
(statearr_18962[(7)] = inst_18864);

return statearr_18962;
})();
var statearr_18963_19016 = state_18937__$1;
(statearr_18963_19016[(2)] = null);

(statearr_18963_19016[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (29))){
var inst_18911 = (state_18937[(11)]);
var state_18937__$1 = state_18937;
var statearr_18964_19017 = state_18937__$1;
(statearr_18964_19017[(2)] = inst_18911);

(statearr_18964_19017[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (6))){
var state_18937__$1 = state_18937;
var statearr_18965_19018 = state_18937__$1;
(statearr_18965_19018[(2)] = false);

(statearr_18965_19018[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (28))){
var inst_18907 = (state_18937[(2)]);
var inst_18908 = calc_state();
var inst_18864 = inst_18908;
var state_18937__$1 = (function (){var statearr_18966 = state_18937;
(statearr_18966[(7)] = inst_18864);

(statearr_18966[(15)] = inst_18907);

return statearr_18966;
})();
var statearr_18967_19019 = state_18937__$1;
(statearr_18967_19019[(2)] = null);

(statearr_18967_19019[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (25))){
var inst_18933 = (state_18937[(2)]);
var state_18937__$1 = state_18937;
var statearr_18968_19020 = state_18937__$1;
(statearr_18968_19020[(2)] = inst_18933);

(statearr_18968_19020[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (34))){
var inst_18931 = (state_18937[(2)]);
var state_18937__$1 = state_18937;
var statearr_18969_19021 = state_18937__$1;
(statearr_18969_19021[(2)] = inst_18931);

(statearr_18969_19021[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (17))){
var state_18937__$1 = state_18937;
var statearr_18970_19022 = state_18937__$1;
(statearr_18970_19022[(2)] = false);

(statearr_18970_19022[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (3))){
var state_18937__$1 = state_18937;
var statearr_18971_19023 = state_18937__$1;
(statearr_18971_19023[(2)] = false);

(statearr_18971_19023[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (12))){
var inst_18935 = (state_18937[(2)]);
var state_18937__$1 = state_18937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18937__$1,inst_18935);
} else {
if((state_val_18938 === (2))){
var inst_18839 = (state_18937[(8)]);
var inst_18844 = inst_18839.cljs$lang$protocol_mask$partition0$;
var inst_18845 = (inst_18844 & (64));
var inst_18846 = inst_18839.cljs$core$ISeq$;
var inst_18847 = (cljs.core.PROTOCOL_SENTINEL === inst_18846);
var inst_18848 = ((inst_18845) || (inst_18847));
var state_18937__$1 = state_18937;
if(cljs.core.truth_(inst_18848)){
var statearr_18972_19024 = state_18937__$1;
(statearr_18972_19024[(1)] = (5));

} else {
var statearr_18973_19025 = state_18937__$1;
(statearr_18973_19025[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (23))){
var inst_18896 = (state_18937[(14)]);
var inst_18902 = (inst_18896 == null);
var state_18937__$1 = state_18937;
if(cljs.core.truth_(inst_18902)){
var statearr_18974_19026 = state_18937__$1;
(statearr_18974_19026[(1)] = (26));

} else {
var statearr_18975_19027 = state_18937__$1;
(statearr_18975_19027[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (35))){
var inst_18922 = (state_18937[(2)]);
var state_18937__$1 = state_18937;
if(cljs.core.truth_(inst_18922)){
var statearr_18976_19028 = state_18937__$1;
(statearr_18976_19028[(1)] = (36));

} else {
var statearr_18977_19029 = state_18937__$1;
(statearr_18977_19029[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (19))){
var inst_18864 = (state_18937[(7)]);
var inst_18884 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18864);
var state_18937__$1 = state_18937;
var statearr_18978_19030 = state_18937__$1;
(statearr_18978_19030[(2)] = inst_18884);

(statearr_18978_19030[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (11))){
var inst_18864 = (state_18937[(7)]);
var inst_18868 = (inst_18864 == null);
var inst_18869 = cljs.core.not(inst_18868);
var state_18937__$1 = state_18937;
if(inst_18869){
var statearr_18979_19031 = state_18937__$1;
(statearr_18979_19031[(1)] = (13));

} else {
var statearr_18980_19032 = state_18937__$1;
(statearr_18980_19032[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (9))){
var inst_18839 = (state_18937[(8)]);
var state_18937__$1 = state_18937;
var statearr_18981_19033 = state_18937__$1;
(statearr_18981_19033[(2)] = inst_18839);

(statearr_18981_19033[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (5))){
var state_18937__$1 = state_18937;
var statearr_18982_19034 = state_18937__$1;
(statearr_18982_19034[(2)] = true);

(statearr_18982_19034[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (14))){
var state_18937__$1 = state_18937;
var statearr_18983_19035 = state_18937__$1;
(statearr_18983_19035[(2)] = false);

(statearr_18983_19035[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (26))){
var inst_18897 = (state_18937[(10)]);
var inst_18904 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18897);
var state_18937__$1 = state_18937;
var statearr_18984_19036 = state_18937__$1;
(statearr_18984_19036[(2)] = inst_18904);

(statearr_18984_19036[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (16))){
var state_18937__$1 = state_18937;
var statearr_18985_19037 = state_18937__$1;
(statearr_18985_19037[(2)] = true);

(statearr_18985_19037[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (38))){
var inst_18927 = (state_18937[(2)]);
var state_18937__$1 = state_18937;
var statearr_18986_19038 = state_18937__$1;
(statearr_18986_19038[(2)] = inst_18927);

(statearr_18986_19038[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (30))){
var inst_18888 = (state_18937[(9)]);
var inst_18897 = (state_18937[(10)]);
var inst_18889 = (state_18937[(13)]);
var inst_18914 = cljs.core.empty_QMARK_(inst_18888);
var inst_18915 = (inst_18889.cljs$core$IFn$_invoke$arity$1 ? inst_18889.cljs$core$IFn$_invoke$arity$1(inst_18897) : inst_18889.call(null,inst_18897));
var inst_18916 = cljs.core.not(inst_18915);
var inst_18917 = ((inst_18914) && (inst_18916));
var state_18937__$1 = state_18937;
var statearr_18987_19039 = state_18937__$1;
(statearr_18987_19039[(2)] = inst_18917);

(statearr_18987_19039[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (10))){
var inst_18839 = (state_18937[(8)]);
var inst_18860 = (state_18937[(2)]);
var inst_18861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18860,cljs.core.cst$kw$solos);
var inst_18862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18860,cljs.core.cst$kw$mutes);
var inst_18863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18860,cljs.core.cst$kw$reads);
var inst_18864 = inst_18839;
var state_18937__$1 = (function (){var statearr_18988 = state_18937;
(statearr_18988[(7)] = inst_18864);

(statearr_18988[(16)] = inst_18861);

(statearr_18988[(17)] = inst_18863);

(statearr_18988[(18)] = inst_18862);

return statearr_18988;
})();
var statearr_18989_19040 = state_18937__$1;
(statearr_18989_19040[(2)] = null);

(statearr_18989_19040[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (18))){
var inst_18879 = (state_18937[(2)]);
var state_18937__$1 = state_18937;
var statearr_18990_19041 = state_18937__$1;
(statearr_18990_19041[(2)] = inst_18879);

(statearr_18990_19041[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (37))){
var state_18937__$1 = state_18937;
var statearr_18991_19042 = state_18937__$1;
(statearr_18991_19042[(2)] = null);

(statearr_18991_19042[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18938 === (8))){
var inst_18839 = (state_18937[(8)]);
var inst_18857 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18839);
var state_18937__$1 = state_18937;
var statearr_18992_19043 = state_18937__$1;
(statearr_18992_19043[(2)] = inst_18857);

(statearr_18992_19043[(1)] = (10));


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
});})(c__16070__auto___18997,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15887__auto__,c__16070__auto___18997,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15888__auto__ = null;
var cljs$core$async$mix_$_state_machine__15888__auto____0 = (function (){
var statearr_18993 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18993[(0)] = cljs$core$async$mix_$_state_machine__15888__auto__);

(statearr_18993[(1)] = (1));

return statearr_18993;
});
var cljs$core$async$mix_$_state_machine__15888__auto____1 = (function (state_18937){
while(true){
var ret_value__15889__auto__ = (function (){try{while(true){
var result__15890__auto__ = switch__15887__auto__(state_18937);
if(cljs.core.keyword_identical_QMARK_(result__15890__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15890__auto__;
}
break;
}
}catch (e18994){if((e18994 instanceof Object)){
var ex__15891__auto__ = e18994;
var statearr_18995_19044 = state_18937;
(statearr_18995_19044[(5)] = ex__15891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18937);

return cljs.core.cst$kw$recur;
} else {
throw e18994;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15889__auto__,cljs.core.cst$kw$recur)){
var G__19045 = state_18937;
state_18937 = G__19045;
continue;
} else {
return ret_value__15889__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15888__auto__ = function(state_18937){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15888__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15888__auto____1.call(this,state_18937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15888__auto____0;
cljs$core$async$mix_$_state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15888__auto____1;
return cljs$core$async$mix_$_state_machine__15888__auto__;
})()
;})(switch__15887__auto__,c__16070__auto___18997,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16072__auto__ = (function (){var statearr_18996 = (f__16071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16071__auto__.cljs$core$IFn$_invoke$arity$0() : f__16071__auto__.call(null));
(statearr_18996[(6)] = c__16070__auto___18997);

return statearr_18996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16072__auto__);
});})(c__16070__auto___18997,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__19047 = arguments.length;
switch (G__19047) {
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
var G__19051 = arguments.length;
switch (G__19051) {
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
return (function (p1__19049_SHARP_){
if(cljs.core.truth_((p1__19049_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19049_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19049_SHARP_.call(null,topic)))){
return p1__19049_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19049_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19052 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19052 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19053){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19053 = meta19053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19054,meta19053__$1){
var self__ = this;
var _19054__$1 = this;
return (new cljs.core.async.t_cljs$core$async19052(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19053__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19052.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19054){
var self__ = this;
var _19054__$1 = this;
return self__.meta19053;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19052.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19052.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19052.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19052.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19052.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19052.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19052.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19052.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta19053], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19052.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19052.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19052";

cljs.core.async.t_cljs$core$async19052.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19052");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19052.
 */
cljs.core.async.__GT_t_cljs$core$async19052 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19052(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19053){
return (new cljs.core.async.t_cljs$core$async19052(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19053));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19052(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16070__auto___19172 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16070__auto___19172,mults,ensure_mult,p){
return (function (){
var f__16071__auto__ = (function (){var switch__15887__auto__ = ((function (c__16070__auto___19172,mults,ensure_mult,p){
return (function (state_19126){
var state_val_19127 = (state_19126[(1)]);
if((state_val_19127 === (7))){
var inst_19122 = (state_19126[(2)]);
var state_19126__$1 = state_19126;
var statearr_19128_19173 = state_19126__$1;
(statearr_19128_19173[(2)] = inst_19122);

(statearr_19128_19173[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19127 === (20))){
var state_19126__$1 = state_19126;
var statearr_19129_19174 = state_19126__$1;
(statearr_19129_19174[(2)] = null);

(statearr_19129_19174[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19127 === (1))){
var state_19126__$1 = state_19126;
var statearr_19130_19175 = state_19126__$1;
(statearr_19130_19175[(2)] = null);

(statearr_19130_19175[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19127 === (24))){
var inst_19105 = (state_19126[(7)]);
var inst_19114 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19105);
var state_19126__$1 = state_19126;
var statearr_19131_19176 = state_19126__$1;
(statearr_19131_19176[(2)] = inst_19114);

(statearr_19131_19176[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19127 === (4))){
var inst_19057 = (state_19126[(8)]);
var inst_19057__$1 = (state_19126[(2)]);
var inst_19058 = (inst_19057__$1 == null);
var state_19126__$1 = (function (){var statearr_19132 = state_19126;
(statearr_19132[(8)] = inst_19057__$1);

return statearr_19132;
})();
if(cljs.core.truth_(inst_19058)){
var statearr_19133_19177 = state_19126__$1;
(statearr_19133_19177[(1)] = (5));

} else {
var statearr_19134_19178 = state_19126__$1;
(statearr_19134_19178[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19127 === (15))){
var inst_19099 = (state_19126[(2)]);
var state_19126__$1 = state_19126;
var statearr_19135_19179 = state_19126__$1;
(statearr_19135_19179[(2)] = inst_19099);

(statearr_19135_19179[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19127 === (21))){
var inst_19119 = (state_19126[(2)]);
var state_19126__$1 = (function (){var statearr_19136 = state_19126;
(statearr_19136[(9)] = inst_19119);

return statearr_19136;
})();
var statearr_19137_19180 = state_19126__$1;
(statearr_19137_19180[(2)] = null);

(statearr_19137_19180[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19127 === (13))){
var inst_19081 = (state_19126[(10)]);
var inst_19083 = cljs.core.chunked_seq_QMARK_(inst_19081);
var state_19126__$1 = state_19126;
if(inst_19083){
var statearr_19138_19181 = state_19126__$1;
(statearr_19138_19181[(1)] = (16));

} else {
var statearr_19139_19182 = state_19126__$1;
(statearr_19139_19182[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19127 === (22))){
var inst_19111 = (state_19126[(2)]);
var state_19126__$1 = state_19126;
if(cljs.core.truth_(inst_19111)){
var statearr_19140_19183 = state_19126__$1;
(statearr_19140_19183[(1)] = (23));

} else {
var statearr_19141_19184 = state_19126__$1;
(statearr_19141_19184[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19127 === (6))){
var inst_19057 = (state_19126[(8)]);
var inst_19107 = (state_19126[(11)]);
var inst_19105 = (state_19126[(7)]);
var inst_19105__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19057) : topic_fn.call(null,inst_19057));
var inst_19106 = cljs.core.deref(mults);
var inst_19107__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19106,inst_19105__$1);
var state_19126__$1 = (function (){var statearr_19142 = state_19126;
(statearr_19142[(11)] = inst_19107__$1);

(statearr_19142[(7)] = inst_19105__$1);

return statearr_19142;
})();
if(cljs.core.truth_(inst_19107__$1)){
var statearr_19143_19185 = state_19126__$1;
(statearr_19143_19185[(1)] = (19));

} else {
var statearr_19144_19186 = state_19126__$1;
(statearr_19144_19186[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19127 === (25))){
var inst_19116 = (state_19126[(2)]);
var state_19126__$1 = state_19126;
var statearr_19145_19187 = state_19126__$1;
(statearr_19145_19187[(2)] = inst_19116);

(statearr_19145_19187[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19127 === (17))){
var inst_19081 = (state_19126[(10)]);
var inst_19090 = cljs.core.first(inst_19081);
var inst_19091 = cljs.core.async.muxch_STAR_(inst_19090);
var inst_19092 = cljs.core.async.close_BANG_(inst_19091);
var inst_19093 = cljs.core.next(inst_19081);
var inst_19067 = inst_19093;
var inst_19068 = null;
var inst_19069 = (0);
var inst_19070 = (0);
var state_19126__$1 = (function (){var statearr_19146 = state_19126;
(statearr_19146[(12)] = inst_19092);

(statearr_19146[(13)] = inst_19069);

(statearr_19146[(14)] = inst_19070);

(statearr_19146[(15)] = inst_19067);

(statearr_19146[(16)] = inst_19068);

return statearr_19146;
})();
var statearr_19147_19188 = state_19126__$1;
(statearr_19147_19188[(2)] = null);

(statearr_19147_19188[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19127 === (3))){
var inst_19124 = (state_19126[(2)]);
var state_19126__$1 = state_19126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19126__$1,inst_19124);
} else {
if((state_val_19127 === (12))){
var inst_19101 = (state_19126[(2)]);
var state_19126__$1 = state_19126;
var statearr_19148_19189 = state_19126__$1;
(statearr_19148_19189[(2)] = inst_19101);

(statearr_19148_19189[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19127 === (2))){
var state_19126__$1 = state_19126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19126__$1,(4),ch);
} else {
if((state_val_19127 === (23))){
var state_19126__$1 = state_19126;
var statearr_19149_19190 = state_19126__$1;
(statearr_19149_19190[(2)] = null);

(statearr_19149_19190[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19127 === (19))){
var inst_19057 = (state_19126[(8)]);
var inst_19107 = (state_19126[(11)]);
var inst_19109 = cljs.core.async.muxch_STAR_(inst_19107);
var state_19126__$1 = state_19126;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19126__$1,(22),inst_19109,inst_19057);
} else {
if((state_val_19127 === (11))){
var inst_19081 = (state_19126[(10)]);
var inst_19067 = (state_19126[(15)]);
var inst_19081__$1 = cljs.core.seq(inst_19067);
var state_19126__$1 = (function (){var statearr_19150 = state_19126;
(statearr_19150[(10)] = inst_19081__$1);

return statearr_19150;
})();
if(inst_19081__$1){
var statearr_19151_19191 = state_19126__$1;
(statearr_19151_19191[(1)] = (13));

} else {
var statearr_19152_19192 = state_19126__$1;
(statearr_19152_19192[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19127 === (9))){
var inst_19103 = (state_19126[(2)]);
var state_19126__$1 = state_19126;
var statearr_19153_19193 = state_19126__$1;
(statearr_19153_19193[(2)] = inst_19103);

(statearr_19153_19193[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19127 === (5))){
var inst_19064 = cljs.core.deref(mults);
var inst_19065 = cljs.core.vals(inst_19064);
var inst_19066 = cljs.core.seq(inst_19065);
var inst_19067 = inst_19066;
var inst_19068 = null;
var inst_19069 = (0);
var inst_19070 = (0);
var state_19126__$1 = (function (){var statearr_19154 = state_19126;
(statearr_19154[(13)] = inst_19069);

(statearr_19154[(14)] = inst_19070);

(statearr_19154[(15)] = inst_19067);

(statearr_19154[(16)] = inst_19068);

return statearr_19154;
})();
var statearr_19155_19194 = state_19126__$1;
(statearr_19155_19194[(2)] = null);

(statearr_19155_19194[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19127 === (14))){
var state_19126__$1 = state_19126;
var statearr_19159_19195 = state_19126__$1;
(statearr_19159_19195[(2)] = null);

(statearr_19159_19195[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19127 === (16))){
var inst_19081 = (state_19126[(10)]);
var inst_19085 = cljs.core.chunk_first(inst_19081);
var inst_19086 = cljs.core.chunk_rest(inst_19081);
var inst_19087 = cljs.core.count(inst_19085);
var inst_19067 = inst_19086;
var inst_19068 = inst_19085;
var inst_19069 = inst_19087;
var inst_19070 = (0);
var state_19126__$1 = (function (){var statearr_19160 = state_19126;
(statearr_19160[(13)] = inst_19069);

(statearr_19160[(14)] = inst_19070);

(statearr_19160[(15)] = inst_19067);

(statearr_19160[(16)] = inst_19068);

return statearr_19160;
})();
var statearr_19161_19196 = state_19126__$1;
(statearr_19161_19196[(2)] = null);

(statearr_19161_19196[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19127 === (10))){
var inst_19069 = (state_19126[(13)]);
var inst_19070 = (state_19126[(14)]);
var inst_19067 = (state_19126[(15)]);
var inst_19068 = (state_19126[(16)]);
var inst_19075 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19068,inst_19070);
var inst_19076 = cljs.core.async.muxch_STAR_(inst_19075);
var inst_19077 = cljs.core.async.close_BANG_(inst_19076);
var inst_19078 = (inst_19070 + (1));
var tmp19156 = inst_19069;
var tmp19157 = inst_19067;
var tmp19158 = inst_19068;
var inst_19067__$1 = tmp19157;
var inst_19068__$1 = tmp19158;
var inst_19069__$1 = tmp19156;
var inst_19070__$1 = inst_19078;
var state_19126__$1 = (function (){var statearr_19162 = state_19126;
(statearr_19162[(17)] = inst_19077);

(statearr_19162[(13)] = inst_19069__$1);

(statearr_19162[(14)] = inst_19070__$1);

(statearr_19162[(15)] = inst_19067__$1);

(statearr_19162[(16)] = inst_19068__$1);

return statearr_19162;
})();
var statearr_19163_19197 = state_19126__$1;
(statearr_19163_19197[(2)] = null);

(statearr_19163_19197[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19127 === (18))){
var inst_19096 = (state_19126[(2)]);
var state_19126__$1 = state_19126;
var statearr_19164_19198 = state_19126__$1;
(statearr_19164_19198[(2)] = inst_19096);

(statearr_19164_19198[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19127 === (8))){
var inst_19069 = (state_19126[(13)]);
var inst_19070 = (state_19126[(14)]);
var inst_19072 = (inst_19070 < inst_19069);
var inst_19073 = inst_19072;
var state_19126__$1 = state_19126;
if(cljs.core.truth_(inst_19073)){
var statearr_19165_19199 = state_19126__$1;
(statearr_19165_19199[(1)] = (10));

} else {
var statearr_19166_19200 = state_19126__$1;
(statearr_19166_19200[(1)] = (11));

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
});})(c__16070__auto___19172,mults,ensure_mult,p))
;
return ((function (switch__15887__auto__,c__16070__auto___19172,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15888__auto__ = null;
var cljs$core$async$state_machine__15888__auto____0 = (function (){
var statearr_19167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19167[(0)] = cljs$core$async$state_machine__15888__auto__);

(statearr_19167[(1)] = (1));

return statearr_19167;
});
var cljs$core$async$state_machine__15888__auto____1 = (function (state_19126){
while(true){
var ret_value__15889__auto__ = (function (){try{while(true){
var result__15890__auto__ = switch__15887__auto__(state_19126);
if(cljs.core.keyword_identical_QMARK_(result__15890__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15890__auto__;
}
break;
}
}catch (e19168){if((e19168 instanceof Object)){
var ex__15891__auto__ = e19168;
var statearr_19169_19201 = state_19126;
(statearr_19169_19201[(5)] = ex__15891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19126);

return cljs.core.cst$kw$recur;
} else {
throw e19168;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15889__auto__,cljs.core.cst$kw$recur)){
var G__19202 = state_19126;
state_19126 = G__19202;
continue;
} else {
return ret_value__15889__auto__;
}
break;
}
});
cljs$core$async$state_machine__15888__auto__ = function(state_19126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15888__auto____1.call(this,state_19126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15888__auto____0;
cljs$core$async$state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15888__auto____1;
return cljs$core$async$state_machine__15888__auto__;
})()
;})(switch__15887__auto__,c__16070__auto___19172,mults,ensure_mult,p))
})();
var state__16072__auto__ = (function (){var statearr_19170 = (f__16071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16071__auto__.cljs$core$IFn$_invoke$arity$0() : f__16071__auto__.call(null));
(statearr_19170[(6)] = c__16070__auto___19172);

return statearr_19170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16072__auto__);
});})(c__16070__auto___19172,mults,ensure_mult,p))
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
var G__19204 = arguments.length;
switch (G__19204) {
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
var G__19207 = arguments.length;
switch (G__19207) {
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
var G__19210 = arguments.length;
switch (G__19210) {
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
var c__16070__auto___19277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16070__auto___19277,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16071__auto__ = (function (){var switch__15887__auto__ = ((function (c__16070__auto___19277,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19249){
var state_val_19250 = (state_19249[(1)]);
if((state_val_19250 === (7))){
var state_19249__$1 = state_19249;
var statearr_19251_19278 = state_19249__$1;
(statearr_19251_19278[(2)] = null);

(statearr_19251_19278[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19250 === (1))){
var state_19249__$1 = state_19249;
var statearr_19252_19279 = state_19249__$1;
(statearr_19252_19279[(2)] = null);

(statearr_19252_19279[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19250 === (4))){
var inst_19213 = (state_19249[(7)]);
var inst_19215 = (inst_19213 < cnt);
var state_19249__$1 = state_19249;
if(cljs.core.truth_(inst_19215)){
var statearr_19253_19280 = state_19249__$1;
(statearr_19253_19280[(1)] = (6));

} else {
var statearr_19254_19281 = state_19249__$1;
(statearr_19254_19281[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19250 === (15))){
var inst_19245 = (state_19249[(2)]);
var state_19249__$1 = state_19249;
var statearr_19255_19282 = state_19249__$1;
(statearr_19255_19282[(2)] = inst_19245);

(statearr_19255_19282[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19250 === (13))){
var inst_19238 = cljs.core.async.close_BANG_(out);
var state_19249__$1 = state_19249;
var statearr_19256_19283 = state_19249__$1;
(statearr_19256_19283[(2)] = inst_19238);

(statearr_19256_19283[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19250 === (6))){
var state_19249__$1 = state_19249;
var statearr_19257_19284 = state_19249__$1;
(statearr_19257_19284[(2)] = null);

(statearr_19257_19284[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19250 === (3))){
var inst_19247 = (state_19249[(2)]);
var state_19249__$1 = state_19249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19249__$1,inst_19247);
} else {
if((state_val_19250 === (12))){
var inst_19235 = (state_19249[(8)]);
var inst_19235__$1 = (state_19249[(2)]);
var inst_19236 = cljs.core.some(cljs.core.nil_QMARK_,inst_19235__$1);
var state_19249__$1 = (function (){var statearr_19258 = state_19249;
(statearr_19258[(8)] = inst_19235__$1);

return statearr_19258;
})();
if(cljs.core.truth_(inst_19236)){
var statearr_19259_19285 = state_19249__$1;
(statearr_19259_19285[(1)] = (13));

} else {
var statearr_19260_19286 = state_19249__$1;
(statearr_19260_19286[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19250 === (2))){
var inst_19212 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19213 = (0);
var state_19249__$1 = (function (){var statearr_19261 = state_19249;
(statearr_19261[(7)] = inst_19213);

(statearr_19261[(9)] = inst_19212);

return statearr_19261;
})();
var statearr_19262_19287 = state_19249__$1;
(statearr_19262_19287[(2)] = null);

(statearr_19262_19287[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19250 === (11))){
var inst_19213 = (state_19249[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19249,(10),Object,null,(9));
var inst_19222 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19213) : chs__$1.call(null,inst_19213));
var inst_19223 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19213) : done.call(null,inst_19213));
var inst_19224 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19222,inst_19223);
var state_19249__$1 = state_19249;
var statearr_19263_19288 = state_19249__$1;
(statearr_19263_19288[(2)] = inst_19224);


cljs.core.async.impl.ioc_helpers.process_exception(state_19249__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19250 === (9))){
var inst_19213 = (state_19249[(7)]);
var inst_19226 = (state_19249[(2)]);
var inst_19227 = (inst_19213 + (1));
var inst_19213__$1 = inst_19227;
var state_19249__$1 = (function (){var statearr_19264 = state_19249;
(statearr_19264[(10)] = inst_19226);

(statearr_19264[(7)] = inst_19213__$1);

return statearr_19264;
})();
var statearr_19265_19289 = state_19249__$1;
(statearr_19265_19289[(2)] = null);

(statearr_19265_19289[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19250 === (5))){
var inst_19233 = (state_19249[(2)]);
var state_19249__$1 = (function (){var statearr_19266 = state_19249;
(statearr_19266[(11)] = inst_19233);

return statearr_19266;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19249__$1,(12),dchan);
} else {
if((state_val_19250 === (14))){
var inst_19235 = (state_19249[(8)]);
var inst_19240 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19235);
var state_19249__$1 = state_19249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19249__$1,(16),out,inst_19240);
} else {
if((state_val_19250 === (16))){
var inst_19242 = (state_19249[(2)]);
var state_19249__$1 = (function (){var statearr_19267 = state_19249;
(statearr_19267[(12)] = inst_19242);

return statearr_19267;
})();
var statearr_19268_19290 = state_19249__$1;
(statearr_19268_19290[(2)] = null);

(statearr_19268_19290[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19250 === (10))){
var inst_19217 = (state_19249[(2)]);
var inst_19218 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19249__$1 = (function (){var statearr_19269 = state_19249;
(statearr_19269[(13)] = inst_19217);

return statearr_19269;
})();
var statearr_19270_19291 = state_19249__$1;
(statearr_19270_19291[(2)] = inst_19218);


cljs.core.async.impl.ioc_helpers.process_exception(state_19249__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19250 === (8))){
var inst_19231 = (state_19249[(2)]);
var state_19249__$1 = state_19249;
var statearr_19271_19292 = state_19249__$1;
(statearr_19271_19292[(2)] = inst_19231);

(statearr_19271_19292[(1)] = (5));


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
});})(c__16070__auto___19277,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15887__auto__,c__16070__auto___19277,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15888__auto__ = null;
var cljs$core$async$state_machine__15888__auto____0 = (function (){
var statearr_19272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19272[(0)] = cljs$core$async$state_machine__15888__auto__);

(statearr_19272[(1)] = (1));

return statearr_19272;
});
var cljs$core$async$state_machine__15888__auto____1 = (function (state_19249){
while(true){
var ret_value__15889__auto__ = (function (){try{while(true){
var result__15890__auto__ = switch__15887__auto__(state_19249);
if(cljs.core.keyword_identical_QMARK_(result__15890__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15890__auto__;
}
break;
}
}catch (e19273){if((e19273 instanceof Object)){
var ex__15891__auto__ = e19273;
var statearr_19274_19293 = state_19249;
(statearr_19274_19293[(5)] = ex__15891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19249);

return cljs.core.cst$kw$recur;
} else {
throw e19273;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15889__auto__,cljs.core.cst$kw$recur)){
var G__19294 = state_19249;
state_19249 = G__19294;
continue;
} else {
return ret_value__15889__auto__;
}
break;
}
});
cljs$core$async$state_machine__15888__auto__ = function(state_19249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15888__auto____1.call(this,state_19249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15888__auto____0;
cljs$core$async$state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15888__auto____1;
return cljs$core$async$state_machine__15888__auto__;
})()
;})(switch__15887__auto__,c__16070__auto___19277,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16072__auto__ = (function (){var statearr_19275 = (f__16071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16071__auto__.cljs$core$IFn$_invoke$arity$0() : f__16071__auto__.call(null));
(statearr_19275[(6)] = c__16070__auto___19277);

return statearr_19275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16072__auto__);
});})(c__16070__auto___19277,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__19297 = arguments.length;
switch (G__19297) {
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
var c__16070__auto___19351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16070__auto___19351,out){
return (function (){
var f__16071__auto__ = (function (){var switch__15887__auto__ = ((function (c__16070__auto___19351,out){
return (function (state_19329){
var state_val_19330 = (state_19329[(1)]);
if((state_val_19330 === (7))){
var inst_19308 = (state_19329[(7)]);
var inst_19309 = (state_19329[(8)]);
var inst_19308__$1 = (state_19329[(2)]);
var inst_19309__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19308__$1,(0),null);
var inst_19310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19308__$1,(1),null);
var inst_19311 = (inst_19309__$1 == null);
var state_19329__$1 = (function (){var statearr_19331 = state_19329;
(statearr_19331[(9)] = inst_19310);

(statearr_19331[(7)] = inst_19308__$1);

(statearr_19331[(8)] = inst_19309__$1);

return statearr_19331;
})();
if(cljs.core.truth_(inst_19311)){
var statearr_19332_19352 = state_19329__$1;
(statearr_19332_19352[(1)] = (8));

} else {
var statearr_19333_19353 = state_19329__$1;
(statearr_19333_19353[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (1))){
var inst_19298 = cljs.core.vec(chs);
var inst_19299 = inst_19298;
var state_19329__$1 = (function (){var statearr_19334 = state_19329;
(statearr_19334[(10)] = inst_19299);

return statearr_19334;
})();
var statearr_19335_19354 = state_19329__$1;
(statearr_19335_19354[(2)] = null);

(statearr_19335_19354[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (4))){
var inst_19299 = (state_19329[(10)]);
var state_19329__$1 = state_19329;
return cljs.core.async.ioc_alts_BANG_(state_19329__$1,(7),inst_19299);
} else {
if((state_val_19330 === (6))){
var inst_19325 = (state_19329[(2)]);
var state_19329__$1 = state_19329;
var statearr_19336_19355 = state_19329__$1;
(statearr_19336_19355[(2)] = inst_19325);

(statearr_19336_19355[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (3))){
var inst_19327 = (state_19329[(2)]);
var state_19329__$1 = state_19329;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19329__$1,inst_19327);
} else {
if((state_val_19330 === (2))){
var inst_19299 = (state_19329[(10)]);
var inst_19301 = cljs.core.count(inst_19299);
var inst_19302 = (inst_19301 > (0));
var state_19329__$1 = state_19329;
if(cljs.core.truth_(inst_19302)){
var statearr_19338_19356 = state_19329__$1;
(statearr_19338_19356[(1)] = (4));

} else {
var statearr_19339_19357 = state_19329__$1;
(statearr_19339_19357[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (11))){
var inst_19299 = (state_19329[(10)]);
var inst_19318 = (state_19329[(2)]);
var tmp19337 = inst_19299;
var inst_19299__$1 = tmp19337;
var state_19329__$1 = (function (){var statearr_19340 = state_19329;
(statearr_19340[(10)] = inst_19299__$1);

(statearr_19340[(11)] = inst_19318);

return statearr_19340;
})();
var statearr_19341_19358 = state_19329__$1;
(statearr_19341_19358[(2)] = null);

(statearr_19341_19358[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (9))){
var inst_19309 = (state_19329[(8)]);
var state_19329__$1 = state_19329;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19329__$1,(11),out,inst_19309);
} else {
if((state_val_19330 === (5))){
var inst_19323 = cljs.core.async.close_BANG_(out);
var state_19329__$1 = state_19329;
var statearr_19342_19359 = state_19329__$1;
(statearr_19342_19359[(2)] = inst_19323);

(statearr_19342_19359[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (10))){
var inst_19321 = (state_19329[(2)]);
var state_19329__$1 = state_19329;
var statearr_19343_19360 = state_19329__$1;
(statearr_19343_19360[(2)] = inst_19321);

(statearr_19343_19360[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (8))){
var inst_19299 = (state_19329[(10)]);
var inst_19310 = (state_19329[(9)]);
var inst_19308 = (state_19329[(7)]);
var inst_19309 = (state_19329[(8)]);
var inst_19313 = (function (){var cs = inst_19299;
var vec__19304 = inst_19308;
var v = inst_19309;
var c = inst_19310;
return ((function (cs,vec__19304,v,c,inst_19299,inst_19310,inst_19308,inst_19309,state_val_19330,c__16070__auto___19351,out){
return (function (p1__19295_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19295_SHARP_);
});
;})(cs,vec__19304,v,c,inst_19299,inst_19310,inst_19308,inst_19309,state_val_19330,c__16070__auto___19351,out))
})();
var inst_19314 = cljs.core.filterv(inst_19313,inst_19299);
var inst_19299__$1 = inst_19314;
var state_19329__$1 = (function (){var statearr_19344 = state_19329;
(statearr_19344[(10)] = inst_19299__$1);

return statearr_19344;
})();
var statearr_19345_19361 = state_19329__$1;
(statearr_19345_19361[(2)] = null);

(statearr_19345_19361[(1)] = (2));


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
});})(c__16070__auto___19351,out))
;
return ((function (switch__15887__auto__,c__16070__auto___19351,out){
return (function() {
var cljs$core$async$state_machine__15888__auto__ = null;
var cljs$core$async$state_machine__15888__auto____0 = (function (){
var statearr_19346 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19346[(0)] = cljs$core$async$state_machine__15888__auto__);

(statearr_19346[(1)] = (1));

return statearr_19346;
});
var cljs$core$async$state_machine__15888__auto____1 = (function (state_19329){
while(true){
var ret_value__15889__auto__ = (function (){try{while(true){
var result__15890__auto__ = switch__15887__auto__(state_19329);
if(cljs.core.keyword_identical_QMARK_(result__15890__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15890__auto__;
}
break;
}
}catch (e19347){if((e19347 instanceof Object)){
var ex__15891__auto__ = e19347;
var statearr_19348_19362 = state_19329;
(statearr_19348_19362[(5)] = ex__15891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19329);

return cljs.core.cst$kw$recur;
} else {
throw e19347;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15889__auto__,cljs.core.cst$kw$recur)){
var G__19363 = state_19329;
state_19329 = G__19363;
continue;
} else {
return ret_value__15889__auto__;
}
break;
}
});
cljs$core$async$state_machine__15888__auto__ = function(state_19329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15888__auto____1.call(this,state_19329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15888__auto____0;
cljs$core$async$state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15888__auto____1;
return cljs$core$async$state_machine__15888__auto__;
})()
;})(switch__15887__auto__,c__16070__auto___19351,out))
})();
var state__16072__auto__ = (function (){var statearr_19349 = (f__16071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16071__auto__.cljs$core$IFn$_invoke$arity$0() : f__16071__auto__.call(null));
(statearr_19349[(6)] = c__16070__auto___19351);

return statearr_19349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16072__auto__);
});})(c__16070__auto___19351,out))
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
var G__19365 = arguments.length;
switch (G__19365) {
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
var c__16070__auto___19410 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16070__auto___19410,out){
return (function (){
var f__16071__auto__ = (function (){var switch__15887__auto__ = ((function (c__16070__auto___19410,out){
return (function (state_19389){
var state_val_19390 = (state_19389[(1)]);
if((state_val_19390 === (7))){
var inst_19371 = (state_19389[(7)]);
var inst_19371__$1 = (state_19389[(2)]);
var inst_19372 = (inst_19371__$1 == null);
var inst_19373 = cljs.core.not(inst_19372);
var state_19389__$1 = (function (){var statearr_19391 = state_19389;
(statearr_19391[(7)] = inst_19371__$1);

return statearr_19391;
})();
if(inst_19373){
var statearr_19392_19411 = state_19389__$1;
(statearr_19392_19411[(1)] = (8));

} else {
var statearr_19393_19412 = state_19389__$1;
(statearr_19393_19412[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19390 === (1))){
var inst_19366 = (0);
var state_19389__$1 = (function (){var statearr_19394 = state_19389;
(statearr_19394[(8)] = inst_19366);

return statearr_19394;
})();
var statearr_19395_19413 = state_19389__$1;
(statearr_19395_19413[(2)] = null);

(statearr_19395_19413[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19390 === (4))){
var state_19389__$1 = state_19389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19389__$1,(7),ch);
} else {
if((state_val_19390 === (6))){
var inst_19384 = (state_19389[(2)]);
var state_19389__$1 = state_19389;
var statearr_19396_19414 = state_19389__$1;
(statearr_19396_19414[(2)] = inst_19384);

(statearr_19396_19414[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19390 === (3))){
var inst_19386 = (state_19389[(2)]);
var inst_19387 = cljs.core.async.close_BANG_(out);
var state_19389__$1 = (function (){var statearr_19397 = state_19389;
(statearr_19397[(9)] = inst_19386);

return statearr_19397;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19389__$1,inst_19387);
} else {
if((state_val_19390 === (2))){
var inst_19366 = (state_19389[(8)]);
var inst_19368 = (inst_19366 < n);
var state_19389__$1 = state_19389;
if(cljs.core.truth_(inst_19368)){
var statearr_19398_19415 = state_19389__$1;
(statearr_19398_19415[(1)] = (4));

} else {
var statearr_19399_19416 = state_19389__$1;
(statearr_19399_19416[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19390 === (11))){
var inst_19366 = (state_19389[(8)]);
var inst_19376 = (state_19389[(2)]);
var inst_19377 = (inst_19366 + (1));
var inst_19366__$1 = inst_19377;
var state_19389__$1 = (function (){var statearr_19400 = state_19389;
(statearr_19400[(10)] = inst_19376);

(statearr_19400[(8)] = inst_19366__$1);

return statearr_19400;
})();
var statearr_19401_19417 = state_19389__$1;
(statearr_19401_19417[(2)] = null);

(statearr_19401_19417[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19390 === (9))){
var state_19389__$1 = state_19389;
var statearr_19402_19418 = state_19389__$1;
(statearr_19402_19418[(2)] = null);

(statearr_19402_19418[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19390 === (5))){
var state_19389__$1 = state_19389;
var statearr_19403_19419 = state_19389__$1;
(statearr_19403_19419[(2)] = null);

(statearr_19403_19419[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19390 === (10))){
var inst_19381 = (state_19389[(2)]);
var state_19389__$1 = state_19389;
var statearr_19404_19420 = state_19389__$1;
(statearr_19404_19420[(2)] = inst_19381);

(statearr_19404_19420[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19390 === (8))){
var inst_19371 = (state_19389[(7)]);
var state_19389__$1 = state_19389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19389__$1,(11),out,inst_19371);
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
});})(c__16070__auto___19410,out))
;
return ((function (switch__15887__auto__,c__16070__auto___19410,out){
return (function() {
var cljs$core$async$state_machine__15888__auto__ = null;
var cljs$core$async$state_machine__15888__auto____0 = (function (){
var statearr_19405 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19405[(0)] = cljs$core$async$state_machine__15888__auto__);

(statearr_19405[(1)] = (1));

return statearr_19405;
});
var cljs$core$async$state_machine__15888__auto____1 = (function (state_19389){
while(true){
var ret_value__15889__auto__ = (function (){try{while(true){
var result__15890__auto__ = switch__15887__auto__(state_19389);
if(cljs.core.keyword_identical_QMARK_(result__15890__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15890__auto__;
}
break;
}
}catch (e19406){if((e19406 instanceof Object)){
var ex__15891__auto__ = e19406;
var statearr_19407_19421 = state_19389;
(statearr_19407_19421[(5)] = ex__15891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19389);

return cljs.core.cst$kw$recur;
} else {
throw e19406;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15889__auto__,cljs.core.cst$kw$recur)){
var G__19422 = state_19389;
state_19389 = G__19422;
continue;
} else {
return ret_value__15889__auto__;
}
break;
}
});
cljs$core$async$state_machine__15888__auto__ = function(state_19389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15888__auto____1.call(this,state_19389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15888__auto____0;
cljs$core$async$state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15888__auto____1;
return cljs$core$async$state_machine__15888__auto__;
})()
;})(switch__15887__auto__,c__16070__auto___19410,out))
})();
var state__16072__auto__ = (function (){var statearr_19408 = (f__16071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16071__auto__.cljs$core$IFn$_invoke$arity$0() : f__16071__auto__.call(null));
(statearr_19408[(6)] = c__16070__auto___19410);

return statearr_19408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16072__auto__);
});})(c__16070__auto___19410,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19424 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19424 = (function (f,ch,meta19425){
this.f = f;
this.ch = ch;
this.meta19425 = meta19425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19426,meta19425__$1){
var self__ = this;
var _19426__$1 = this;
return (new cljs.core.async.t_cljs$core$async19424(self__.f,self__.ch,meta19425__$1));
});

cljs.core.async.t_cljs$core$async19424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19426){
var self__ = this;
var _19426__$1 = this;
return self__.meta19425;
});

cljs.core.async.t_cljs$core$async19424.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19424.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19424.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19424.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19424.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19427 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19427 = (function (f,ch,meta19425,_,fn1,meta19428){
this.f = f;
this.ch = ch;
this.meta19425 = meta19425;
this._ = _;
this.fn1 = fn1;
this.meta19428 = meta19428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19429,meta19428__$1){
var self__ = this;
var _19429__$1 = this;
return (new cljs.core.async.t_cljs$core$async19427(self__.f,self__.ch,self__.meta19425,self__._,self__.fn1,meta19428__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19427.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19429){
var self__ = this;
var _19429__$1 = this;
return self__.meta19428;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19427.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19427.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19427.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19427.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19423_SHARP_){
var G__19430 = (((p1__19423_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19423_SHARP_) : self__.f.call(null,p1__19423_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19430) : f1.call(null,G__19430));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19427.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19425,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async19424], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta19428], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19427.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19427.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19427";

cljs.core.async.t_cljs$core$async19427.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19427");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19427.
 */
cljs.core.async.__GT_t_cljs$core$async19427 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19427(f__$1,ch__$1,meta19425__$1,___$2,fn1__$1,meta19428){
return (new cljs.core.async.t_cljs$core$async19427(f__$1,ch__$1,meta19425__$1,___$2,fn1__$1,meta19428));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19427(self__.f,self__.ch,self__.meta19425,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19431 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19431) : self__.f.call(null,G__19431));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async19424.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19424.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19424.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19425], null);
});

cljs.core.async.t_cljs$core$async19424.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19424.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19424";

cljs.core.async.t_cljs$core$async19424.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19424");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19424.
 */
cljs.core.async.__GT_t_cljs$core$async19424 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19424(f__$1,ch__$1,meta19425){
return (new cljs.core.async.t_cljs$core$async19424(f__$1,ch__$1,meta19425));
});

}

return (new cljs.core.async.t_cljs$core$async19424(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19432 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19432 = (function (f,ch,meta19433){
this.f = f;
this.ch = ch;
this.meta19433 = meta19433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19434,meta19433__$1){
var self__ = this;
var _19434__$1 = this;
return (new cljs.core.async.t_cljs$core$async19432(self__.f,self__.ch,meta19433__$1));
});

cljs.core.async.t_cljs$core$async19432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19434){
var self__ = this;
var _19434__$1 = this;
return self__.meta19433;
});

cljs.core.async.t_cljs$core$async19432.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19432.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19432.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19432.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19432.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19432.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async19432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19433], null);
});

cljs.core.async.t_cljs$core$async19432.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19432";

cljs.core.async.t_cljs$core$async19432.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19432");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19432.
 */
cljs.core.async.__GT_t_cljs$core$async19432 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19432(f__$1,ch__$1,meta19433){
return (new cljs.core.async.t_cljs$core$async19432(f__$1,ch__$1,meta19433));
});

}

return (new cljs.core.async.t_cljs$core$async19432(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19435 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19435 = (function (p,ch,meta19436){
this.p = p;
this.ch = ch;
this.meta19436 = meta19436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19437,meta19436__$1){
var self__ = this;
var _19437__$1 = this;
return (new cljs.core.async.t_cljs$core$async19435(self__.p,self__.ch,meta19436__$1));
});

cljs.core.async.t_cljs$core$async19435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19437){
var self__ = this;
var _19437__$1 = this;
return self__.meta19436;
});

cljs.core.async.t_cljs$core$async19435.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19435.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19435.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19435.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19435.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19435.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19435.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19436], null);
});

cljs.core.async.t_cljs$core$async19435.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19435";

cljs.core.async.t_cljs$core$async19435.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19435");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19435.
 */
cljs.core.async.__GT_t_cljs$core$async19435 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19435(p__$1,ch__$1,meta19436){
return (new cljs.core.async.t_cljs$core$async19435(p__$1,ch__$1,meta19436));
});

}

return (new cljs.core.async.t_cljs$core$async19435(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19439 = arguments.length;
switch (G__19439) {
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
var c__16070__auto___19479 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16070__auto___19479,out){
return (function (){
var f__16071__auto__ = (function (){var switch__15887__auto__ = ((function (c__16070__auto___19479,out){
return (function (state_19460){
var state_val_19461 = (state_19460[(1)]);
if((state_val_19461 === (7))){
var inst_19456 = (state_19460[(2)]);
var state_19460__$1 = state_19460;
var statearr_19462_19480 = state_19460__$1;
(statearr_19462_19480[(2)] = inst_19456);

(statearr_19462_19480[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19461 === (1))){
var state_19460__$1 = state_19460;
var statearr_19463_19481 = state_19460__$1;
(statearr_19463_19481[(2)] = null);

(statearr_19463_19481[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19461 === (4))){
var inst_19442 = (state_19460[(7)]);
var inst_19442__$1 = (state_19460[(2)]);
var inst_19443 = (inst_19442__$1 == null);
var state_19460__$1 = (function (){var statearr_19464 = state_19460;
(statearr_19464[(7)] = inst_19442__$1);

return statearr_19464;
})();
if(cljs.core.truth_(inst_19443)){
var statearr_19465_19482 = state_19460__$1;
(statearr_19465_19482[(1)] = (5));

} else {
var statearr_19466_19483 = state_19460__$1;
(statearr_19466_19483[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19461 === (6))){
var inst_19442 = (state_19460[(7)]);
var inst_19447 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19442) : p.call(null,inst_19442));
var state_19460__$1 = state_19460;
if(cljs.core.truth_(inst_19447)){
var statearr_19467_19484 = state_19460__$1;
(statearr_19467_19484[(1)] = (8));

} else {
var statearr_19468_19485 = state_19460__$1;
(statearr_19468_19485[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19461 === (3))){
var inst_19458 = (state_19460[(2)]);
var state_19460__$1 = state_19460;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19460__$1,inst_19458);
} else {
if((state_val_19461 === (2))){
var state_19460__$1 = state_19460;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19460__$1,(4),ch);
} else {
if((state_val_19461 === (11))){
var inst_19450 = (state_19460[(2)]);
var state_19460__$1 = state_19460;
var statearr_19469_19486 = state_19460__$1;
(statearr_19469_19486[(2)] = inst_19450);

(statearr_19469_19486[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19461 === (9))){
var state_19460__$1 = state_19460;
var statearr_19470_19487 = state_19460__$1;
(statearr_19470_19487[(2)] = null);

(statearr_19470_19487[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19461 === (5))){
var inst_19445 = cljs.core.async.close_BANG_(out);
var state_19460__$1 = state_19460;
var statearr_19471_19488 = state_19460__$1;
(statearr_19471_19488[(2)] = inst_19445);

(statearr_19471_19488[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19461 === (10))){
var inst_19453 = (state_19460[(2)]);
var state_19460__$1 = (function (){var statearr_19472 = state_19460;
(statearr_19472[(8)] = inst_19453);

return statearr_19472;
})();
var statearr_19473_19489 = state_19460__$1;
(statearr_19473_19489[(2)] = null);

(statearr_19473_19489[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19461 === (8))){
var inst_19442 = (state_19460[(7)]);
var state_19460__$1 = state_19460;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19460__$1,(11),out,inst_19442);
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
});})(c__16070__auto___19479,out))
;
return ((function (switch__15887__auto__,c__16070__auto___19479,out){
return (function() {
var cljs$core$async$state_machine__15888__auto__ = null;
var cljs$core$async$state_machine__15888__auto____0 = (function (){
var statearr_19474 = [null,null,null,null,null,null,null,null,null];
(statearr_19474[(0)] = cljs$core$async$state_machine__15888__auto__);

(statearr_19474[(1)] = (1));

return statearr_19474;
});
var cljs$core$async$state_machine__15888__auto____1 = (function (state_19460){
while(true){
var ret_value__15889__auto__ = (function (){try{while(true){
var result__15890__auto__ = switch__15887__auto__(state_19460);
if(cljs.core.keyword_identical_QMARK_(result__15890__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15890__auto__;
}
break;
}
}catch (e19475){if((e19475 instanceof Object)){
var ex__15891__auto__ = e19475;
var statearr_19476_19490 = state_19460;
(statearr_19476_19490[(5)] = ex__15891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19460);

return cljs.core.cst$kw$recur;
} else {
throw e19475;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15889__auto__,cljs.core.cst$kw$recur)){
var G__19491 = state_19460;
state_19460 = G__19491;
continue;
} else {
return ret_value__15889__auto__;
}
break;
}
});
cljs$core$async$state_machine__15888__auto__ = function(state_19460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15888__auto____1.call(this,state_19460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15888__auto____0;
cljs$core$async$state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15888__auto____1;
return cljs$core$async$state_machine__15888__auto__;
})()
;})(switch__15887__auto__,c__16070__auto___19479,out))
})();
var state__16072__auto__ = (function (){var statearr_19477 = (f__16071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16071__auto__.cljs$core$IFn$_invoke$arity$0() : f__16071__auto__.call(null));
(statearr_19477[(6)] = c__16070__auto___19479);

return statearr_19477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16072__auto__);
});})(c__16070__auto___19479,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19493 = arguments.length;
switch (G__19493) {
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
var c__16070__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16070__auto__){
return (function (){
var f__16071__auto__ = (function (){var switch__15887__auto__ = ((function (c__16070__auto__){
return (function (state_19556){
var state_val_19557 = (state_19556[(1)]);
if((state_val_19557 === (7))){
var inst_19552 = (state_19556[(2)]);
var state_19556__$1 = state_19556;
var statearr_19558_19596 = state_19556__$1;
(statearr_19558_19596[(2)] = inst_19552);

(statearr_19558_19596[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19557 === (20))){
var inst_19522 = (state_19556[(7)]);
var inst_19533 = (state_19556[(2)]);
var inst_19534 = cljs.core.next(inst_19522);
var inst_19508 = inst_19534;
var inst_19509 = null;
var inst_19510 = (0);
var inst_19511 = (0);
var state_19556__$1 = (function (){var statearr_19559 = state_19556;
(statearr_19559[(8)] = inst_19510);

(statearr_19559[(9)] = inst_19533);

(statearr_19559[(10)] = inst_19508);

(statearr_19559[(11)] = inst_19509);

(statearr_19559[(12)] = inst_19511);

return statearr_19559;
})();
var statearr_19560_19597 = state_19556__$1;
(statearr_19560_19597[(2)] = null);

(statearr_19560_19597[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19557 === (1))){
var state_19556__$1 = state_19556;
var statearr_19561_19598 = state_19556__$1;
(statearr_19561_19598[(2)] = null);

(statearr_19561_19598[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19557 === (4))){
var inst_19497 = (state_19556[(13)]);
var inst_19497__$1 = (state_19556[(2)]);
var inst_19498 = (inst_19497__$1 == null);
var state_19556__$1 = (function (){var statearr_19562 = state_19556;
(statearr_19562[(13)] = inst_19497__$1);

return statearr_19562;
})();
if(cljs.core.truth_(inst_19498)){
var statearr_19563_19599 = state_19556__$1;
(statearr_19563_19599[(1)] = (5));

} else {
var statearr_19564_19600 = state_19556__$1;
(statearr_19564_19600[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19557 === (15))){
var state_19556__$1 = state_19556;
var statearr_19568_19601 = state_19556__$1;
(statearr_19568_19601[(2)] = null);

(statearr_19568_19601[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19557 === (21))){
var state_19556__$1 = state_19556;
var statearr_19569_19602 = state_19556__$1;
(statearr_19569_19602[(2)] = null);

(statearr_19569_19602[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19557 === (13))){
var inst_19510 = (state_19556[(8)]);
var inst_19508 = (state_19556[(10)]);
var inst_19509 = (state_19556[(11)]);
var inst_19511 = (state_19556[(12)]);
var inst_19518 = (state_19556[(2)]);
var inst_19519 = (inst_19511 + (1));
var tmp19565 = inst_19510;
var tmp19566 = inst_19508;
var tmp19567 = inst_19509;
var inst_19508__$1 = tmp19566;
var inst_19509__$1 = tmp19567;
var inst_19510__$1 = tmp19565;
var inst_19511__$1 = inst_19519;
var state_19556__$1 = (function (){var statearr_19570 = state_19556;
(statearr_19570[(8)] = inst_19510__$1);

(statearr_19570[(10)] = inst_19508__$1);

(statearr_19570[(11)] = inst_19509__$1);

(statearr_19570[(14)] = inst_19518);

(statearr_19570[(12)] = inst_19511__$1);

return statearr_19570;
})();
var statearr_19571_19603 = state_19556__$1;
(statearr_19571_19603[(2)] = null);

(statearr_19571_19603[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19557 === (22))){
var state_19556__$1 = state_19556;
var statearr_19572_19604 = state_19556__$1;
(statearr_19572_19604[(2)] = null);

(statearr_19572_19604[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19557 === (6))){
var inst_19497 = (state_19556[(13)]);
var inst_19506 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19497) : f.call(null,inst_19497));
var inst_19507 = cljs.core.seq(inst_19506);
var inst_19508 = inst_19507;
var inst_19509 = null;
var inst_19510 = (0);
var inst_19511 = (0);
var state_19556__$1 = (function (){var statearr_19573 = state_19556;
(statearr_19573[(8)] = inst_19510);

(statearr_19573[(10)] = inst_19508);

(statearr_19573[(11)] = inst_19509);

(statearr_19573[(12)] = inst_19511);

return statearr_19573;
})();
var statearr_19574_19605 = state_19556__$1;
(statearr_19574_19605[(2)] = null);

(statearr_19574_19605[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19557 === (17))){
var inst_19522 = (state_19556[(7)]);
var inst_19526 = cljs.core.chunk_first(inst_19522);
var inst_19527 = cljs.core.chunk_rest(inst_19522);
var inst_19528 = cljs.core.count(inst_19526);
var inst_19508 = inst_19527;
var inst_19509 = inst_19526;
var inst_19510 = inst_19528;
var inst_19511 = (0);
var state_19556__$1 = (function (){var statearr_19575 = state_19556;
(statearr_19575[(8)] = inst_19510);

(statearr_19575[(10)] = inst_19508);

(statearr_19575[(11)] = inst_19509);

(statearr_19575[(12)] = inst_19511);

return statearr_19575;
})();
var statearr_19576_19606 = state_19556__$1;
(statearr_19576_19606[(2)] = null);

(statearr_19576_19606[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19557 === (3))){
var inst_19554 = (state_19556[(2)]);
var state_19556__$1 = state_19556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19556__$1,inst_19554);
} else {
if((state_val_19557 === (12))){
var inst_19542 = (state_19556[(2)]);
var state_19556__$1 = state_19556;
var statearr_19577_19607 = state_19556__$1;
(statearr_19577_19607[(2)] = inst_19542);

(statearr_19577_19607[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19557 === (2))){
var state_19556__$1 = state_19556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19556__$1,(4),in$);
} else {
if((state_val_19557 === (23))){
var inst_19550 = (state_19556[(2)]);
var state_19556__$1 = state_19556;
var statearr_19578_19608 = state_19556__$1;
(statearr_19578_19608[(2)] = inst_19550);

(statearr_19578_19608[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19557 === (19))){
var inst_19537 = (state_19556[(2)]);
var state_19556__$1 = state_19556;
var statearr_19579_19609 = state_19556__$1;
(statearr_19579_19609[(2)] = inst_19537);

(statearr_19579_19609[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19557 === (11))){
var inst_19508 = (state_19556[(10)]);
var inst_19522 = (state_19556[(7)]);
var inst_19522__$1 = cljs.core.seq(inst_19508);
var state_19556__$1 = (function (){var statearr_19580 = state_19556;
(statearr_19580[(7)] = inst_19522__$1);

return statearr_19580;
})();
if(inst_19522__$1){
var statearr_19581_19610 = state_19556__$1;
(statearr_19581_19610[(1)] = (14));

} else {
var statearr_19582_19611 = state_19556__$1;
(statearr_19582_19611[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19557 === (9))){
var inst_19544 = (state_19556[(2)]);
var inst_19545 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19556__$1 = (function (){var statearr_19583 = state_19556;
(statearr_19583[(15)] = inst_19544);

return statearr_19583;
})();
if(cljs.core.truth_(inst_19545)){
var statearr_19584_19612 = state_19556__$1;
(statearr_19584_19612[(1)] = (21));

} else {
var statearr_19585_19613 = state_19556__$1;
(statearr_19585_19613[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19557 === (5))){
var inst_19500 = cljs.core.async.close_BANG_(out);
var state_19556__$1 = state_19556;
var statearr_19586_19614 = state_19556__$1;
(statearr_19586_19614[(2)] = inst_19500);

(statearr_19586_19614[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19557 === (14))){
var inst_19522 = (state_19556[(7)]);
var inst_19524 = cljs.core.chunked_seq_QMARK_(inst_19522);
var state_19556__$1 = state_19556;
if(inst_19524){
var statearr_19587_19615 = state_19556__$1;
(statearr_19587_19615[(1)] = (17));

} else {
var statearr_19588_19616 = state_19556__$1;
(statearr_19588_19616[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19557 === (16))){
var inst_19540 = (state_19556[(2)]);
var state_19556__$1 = state_19556;
var statearr_19589_19617 = state_19556__$1;
(statearr_19589_19617[(2)] = inst_19540);

(statearr_19589_19617[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19557 === (10))){
var inst_19509 = (state_19556[(11)]);
var inst_19511 = (state_19556[(12)]);
var inst_19516 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19509,inst_19511);
var state_19556__$1 = state_19556;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19556__$1,(13),out,inst_19516);
} else {
if((state_val_19557 === (18))){
var inst_19522 = (state_19556[(7)]);
var inst_19531 = cljs.core.first(inst_19522);
var state_19556__$1 = state_19556;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19556__$1,(20),out,inst_19531);
} else {
if((state_val_19557 === (8))){
var inst_19510 = (state_19556[(8)]);
var inst_19511 = (state_19556[(12)]);
var inst_19513 = (inst_19511 < inst_19510);
var inst_19514 = inst_19513;
var state_19556__$1 = state_19556;
if(cljs.core.truth_(inst_19514)){
var statearr_19590_19618 = state_19556__$1;
(statearr_19590_19618[(1)] = (10));

} else {
var statearr_19591_19619 = state_19556__$1;
(statearr_19591_19619[(1)] = (11));

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
});})(c__16070__auto__))
;
return ((function (switch__15887__auto__,c__16070__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15888__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15888__auto____0 = (function (){
var statearr_19592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19592[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15888__auto__);

(statearr_19592[(1)] = (1));

return statearr_19592;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15888__auto____1 = (function (state_19556){
while(true){
var ret_value__15889__auto__ = (function (){try{while(true){
var result__15890__auto__ = switch__15887__auto__(state_19556);
if(cljs.core.keyword_identical_QMARK_(result__15890__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15890__auto__;
}
break;
}
}catch (e19593){if((e19593 instanceof Object)){
var ex__15891__auto__ = e19593;
var statearr_19594_19620 = state_19556;
(statearr_19594_19620[(5)] = ex__15891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19556);

return cljs.core.cst$kw$recur;
} else {
throw e19593;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15889__auto__,cljs.core.cst$kw$recur)){
var G__19621 = state_19556;
state_19556 = G__19621;
continue;
} else {
return ret_value__15889__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15888__auto__ = function(state_19556){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15888__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15888__auto____1.call(this,state_19556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15888__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15888__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15888__auto__;
})()
;})(switch__15887__auto__,c__16070__auto__))
})();
var state__16072__auto__ = (function (){var statearr_19595 = (f__16071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16071__auto__.cljs$core$IFn$_invoke$arity$0() : f__16071__auto__.call(null));
(statearr_19595[(6)] = c__16070__auto__);

return statearr_19595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16072__auto__);
});})(c__16070__auto__))
);

return c__16070__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19623 = arguments.length;
switch (G__19623) {
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
var G__19626 = arguments.length;
switch (G__19626) {
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
var G__19629 = arguments.length;
switch (G__19629) {
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
var c__16070__auto___19676 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16070__auto___19676,out){
return (function (){
var f__16071__auto__ = (function (){var switch__15887__auto__ = ((function (c__16070__auto___19676,out){
return (function (state_19653){
var state_val_19654 = (state_19653[(1)]);
if((state_val_19654 === (7))){
var inst_19648 = (state_19653[(2)]);
var state_19653__$1 = state_19653;
var statearr_19655_19677 = state_19653__$1;
(statearr_19655_19677[(2)] = inst_19648);

(statearr_19655_19677[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19654 === (1))){
var inst_19630 = null;
var state_19653__$1 = (function (){var statearr_19656 = state_19653;
(statearr_19656[(7)] = inst_19630);

return statearr_19656;
})();
var statearr_19657_19678 = state_19653__$1;
(statearr_19657_19678[(2)] = null);

(statearr_19657_19678[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19654 === (4))){
var inst_19633 = (state_19653[(8)]);
var inst_19633__$1 = (state_19653[(2)]);
var inst_19634 = (inst_19633__$1 == null);
var inst_19635 = cljs.core.not(inst_19634);
var state_19653__$1 = (function (){var statearr_19658 = state_19653;
(statearr_19658[(8)] = inst_19633__$1);

return statearr_19658;
})();
if(inst_19635){
var statearr_19659_19679 = state_19653__$1;
(statearr_19659_19679[(1)] = (5));

} else {
var statearr_19660_19680 = state_19653__$1;
(statearr_19660_19680[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19654 === (6))){
var state_19653__$1 = state_19653;
var statearr_19661_19681 = state_19653__$1;
(statearr_19661_19681[(2)] = null);

(statearr_19661_19681[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19654 === (3))){
var inst_19650 = (state_19653[(2)]);
var inst_19651 = cljs.core.async.close_BANG_(out);
var state_19653__$1 = (function (){var statearr_19662 = state_19653;
(statearr_19662[(9)] = inst_19650);

return statearr_19662;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19653__$1,inst_19651);
} else {
if((state_val_19654 === (2))){
var state_19653__$1 = state_19653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19653__$1,(4),ch);
} else {
if((state_val_19654 === (11))){
var inst_19633 = (state_19653[(8)]);
var inst_19642 = (state_19653[(2)]);
var inst_19630 = inst_19633;
var state_19653__$1 = (function (){var statearr_19663 = state_19653;
(statearr_19663[(7)] = inst_19630);

(statearr_19663[(10)] = inst_19642);

return statearr_19663;
})();
var statearr_19664_19682 = state_19653__$1;
(statearr_19664_19682[(2)] = null);

(statearr_19664_19682[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19654 === (9))){
var inst_19633 = (state_19653[(8)]);
var state_19653__$1 = state_19653;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19653__$1,(11),out,inst_19633);
} else {
if((state_val_19654 === (5))){
var inst_19630 = (state_19653[(7)]);
var inst_19633 = (state_19653[(8)]);
var inst_19637 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19633,inst_19630);
var state_19653__$1 = state_19653;
if(inst_19637){
var statearr_19666_19683 = state_19653__$1;
(statearr_19666_19683[(1)] = (8));

} else {
var statearr_19667_19684 = state_19653__$1;
(statearr_19667_19684[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19654 === (10))){
var inst_19645 = (state_19653[(2)]);
var state_19653__$1 = state_19653;
var statearr_19668_19685 = state_19653__$1;
(statearr_19668_19685[(2)] = inst_19645);

(statearr_19668_19685[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19654 === (8))){
var inst_19630 = (state_19653[(7)]);
var tmp19665 = inst_19630;
var inst_19630__$1 = tmp19665;
var state_19653__$1 = (function (){var statearr_19669 = state_19653;
(statearr_19669[(7)] = inst_19630__$1);

return statearr_19669;
})();
var statearr_19670_19686 = state_19653__$1;
(statearr_19670_19686[(2)] = null);

(statearr_19670_19686[(1)] = (2));


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
});})(c__16070__auto___19676,out))
;
return ((function (switch__15887__auto__,c__16070__auto___19676,out){
return (function() {
var cljs$core$async$state_machine__15888__auto__ = null;
var cljs$core$async$state_machine__15888__auto____0 = (function (){
var statearr_19671 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19671[(0)] = cljs$core$async$state_machine__15888__auto__);

(statearr_19671[(1)] = (1));

return statearr_19671;
});
var cljs$core$async$state_machine__15888__auto____1 = (function (state_19653){
while(true){
var ret_value__15889__auto__ = (function (){try{while(true){
var result__15890__auto__ = switch__15887__auto__(state_19653);
if(cljs.core.keyword_identical_QMARK_(result__15890__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15890__auto__;
}
break;
}
}catch (e19672){if((e19672 instanceof Object)){
var ex__15891__auto__ = e19672;
var statearr_19673_19687 = state_19653;
(statearr_19673_19687[(5)] = ex__15891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19653);

return cljs.core.cst$kw$recur;
} else {
throw e19672;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15889__auto__,cljs.core.cst$kw$recur)){
var G__19688 = state_19653;
state_19653 = G__19688;
continue;
} else {
return ret_value__15889__auto__;
}
break;
}
});
cljs$core$async$state_machine__15888__auto__ = function(state_19653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15888__auto____1.call(this,state_19653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15888__auto____0;
cljs$core$async$state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15888__auto____1;
return cljs$core$async$state_machine__15888__auto__;
})()
;})(switch__15887__auto__,c__16070__auto___19676,out))
})();
var state__16072__auto__ = (function (){var statearr_19674 = (f__16071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16071__auto__.cljs$core$IFn$_invoke$arity$0() : f__16071__auto__.call(null));
(statearr_19674[(6)] = c__16070__auto___19676);

return statearr_19674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16072__auto__);
});})(c__16070__auto___19676,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19690 = arguments.length;
switch (G__19690) {
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
var c__16070__auto___19756 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16070__auto___19756,out){
return (function (){
var f__16071__auto__ = (function (){var switch__15887__auto__ = ((function (c__16070__auto___19756,out){
return (function (state_19728){
var state_val_19729 = (state_19728[(1)]);
if((state_val_19729 === (7))){
var inst_19724 = (state_19728[(2)]);
var state_19728__$1 = state_19728;
var statearr_19730_19757 = state_19728__$1;
(statearr_19730_19757[(2)] = inst_19724);

(statearr_19730_19757[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19729 === (1))){
var inst_19691 = (new Array(n));
var inst_19692 = inst_19691;
var inst_19693 = (0);
var state_19728__$1 = (function (){var statearr_19731 = state_19728;
(statearr_19731[(7)] = inst_19692);

(statearr_19731[(8)] = inst_19693);

return statearr_19731;
})();
var statearr_19732_19758 = state_19728__$1;
(statearr_19732_19758[(2)] = null);

(statearr_19732_19758[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19729 === (4))){
var inst_19696 = (state_19728[(9)]);
var inst_19696__$1 = (state_19728[(2)]);
var inst_19697 = (inst_19696__$1 == null);
var inst_19698 = cljs.core.not(inst_19697);
var state_19728__$1 = (function (){var statearr_19733 = state_19728;
(statearr_19733[(9)] = inst_19696__$1);

return statearr_19733;
})();
if(inst_19698){
var statearr_19734_19759 = state_19728__$1;
(statearr_19734_19759[(1)] = (5));

} else {
var statearr_19735_19760 = state_19728__$1;
(statearr_19735_19760[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19729 === (15))){
var inst_19718 = (state_19728[(2)]);
var state_19728__$1 = state_19728;
var statearr_19736_19761 = state_19728__$1;
(statearr_19736_19761[(2)] = inst_19718);

(statearr_19736_19761[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19729 === (13))){
var state_19728__$1 = state_19728;
var statearr_19737_19762 = state_19728__$1;
(statearr_19737_19762[(2)] = null);

(statearr_19737_19762[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19729 === (6))){
var inst_19693 = (state_19728[(8)]);
var inst_19714 = (inst_19693 > (0));
var state_19728__$1 = state_19728;
if(cljs.core.truth_(inst_19714)){
var statearr_19738_19763 = state_19728__$1;
(statearr_19738_19763[(1)] = (12));

} else {
var statearr_19739_19764 = state_19728__$1;
(statearr_19739_19764[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19729 === (3))){
var inst_19726 = (state_19728[(2)]);
var state_19728__$1 = state_19728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19728__$1,inst_19726);
} else {
if((state_val_19729 === (12))){
var inst_19692 = (state_19728[(7)]);
var inst_19716 = cljs.core.vec(inst_19692);
var state_19728__$1 = state_19728;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19728__$1,(15),out,inst_19716);
} else {
if((state_val_19729 === (2))){
var state_19728__$1 = state_19728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19728__$1,(4),ch);
} else {
if((state_val_19729 === (11))){
var inst_19708 = (state_19728[(2)]);
var inst_19709 = (new Array(n));
var inst_19692 = inst_19709;
var inst_19693 = (0);
var state_19728__$1 = (function (){var statearr_19740 = state_19728;
(statearr_19740[(7)] = inst_19692);

(statearr_19740[(8)] = inst_19693);

(statearr_19740[(10)] = inst_19708);

return statearr_19740;
})();
var statearr_19741_19765 = state_19728__$1;
(statearr_19741_19765[(2)] = null);

(statearr_19741_19765[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19729 === (9))){
var inst_19692 = (state_19728[(7)]);
var inst_19706 = cljs.core.vec(inst_19692);
var state_19728__$1 = state_19728;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19728__$1,(11),out,inst_19706);
} else {
if((state_val_19729 === (5))){
var inst_19692 = (state_19728[(7)]);
var inst_19701 = (state_19728[(11)]);
var inst_19693 = (state_19728[(8)]);
var inst_19696 = (state_19728[(9)]);
var inst_19700 = (inst_19692[inst_19693] = inst_19696);
var inst_19701__$1 = (inst_19693 + (1));
var inst_19702 = (inst_19701__$1 < n);
var state_19728__$1 = (function (){var statearr_19742 = state_19728;
(statearr_19742[(11)] = inst_19701__$1);

(statearr_19742[(12)] = inst_19700);

return statearr_19742;
})();
if(cljs.core.truth_(inst_19702)){
var statearr_19743_19766 = state_19728__$1;
(statearr_19743_19766[(1)] = (8));

} else {
var statearr_19744_19767 = state_19728__$1;
(statearr_19744_19767[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19729 === (14))){
var inst_19721 = (state_19728[(2)]);
var inst_19722 = cljs.core.async.close_BANG_(out);
var state_19728__$1 = (function (){var statearr_19746 = state_19728;
(statearr_19746[(13)] = inst_19721);

return statearr_19746;
})();
var statearr_19747_19768 = state_19728__$1;
(statearr_19747_19768[(2)] = inst_19722);

(statearr_19747_19768[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19729 === (10))){
var inst_19712 = (state_19728[(2)]);
var state_19728__$1 = state_19728;
var statearr_19748_19769 = state_19728__$1;
(statearr_19748_19769[(2)] = inst_19712);

(statearr_19748_19769[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19729 === (8))){
var inst_19692 = (state_19728[(7)]);
var inst_19701 = (state_19728[(11)]);
var tmp19745 = inst_19692;
var inst_19692__$1 = tmp19745;
var inst_19693 = inst_19701;
var state_19728__$1 = (function (){var statearr_19749 = state_19728;
(statearr_19749[(7)] = inst_19692__$1);

(statearr_19749[(8)] = inst_19693);

return statearr_19749;
})();
var statearr_19750_19770 = state_19728__$1;
(statearr_19750_19770[(2)] = null);

(statearr_19750_19770[(1)] = (2));


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
});})(c__16070__auto___19756,out))
;
return ((function (switch__15887__auto__,c__16070__auto___19756,out){
return (function() {
var cljs$core$async$state_machine__15888__auto__ = null;
var cljs$core$async$state_machine__15888__auto____0 = (function (){
var statearr_19751 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19751[(0)] = cljs$core$async$state_machine__15888__auto__);

(statearr_19751[(1)] = (1));

return statearr_19751;
});
var cljs$core$async$state_machine__15888__auto____1 = (function (state_19728){
while(true){
var ret_value__15889__auto__ = (function (){try{while(true){
var result__15890__auto__ = switch__15887__auto__(state_19728);
if(cljs.core.keyword_identical_QMARK_(result__15890__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15890__auto__;
}
break;
}
}catch (e19752){if((e19752 instanceof Object)){
var ex__15891__auto__ = e19752;
var statearr_19753_19771 = state_19728;
(statearr_19753_19771[(5)] = ex__15891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19728);

return cljs.core.cst$kw$recur;
} else {
throw e19752;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15889__auto__,cljs.core.cst$kw$recur)){
var G__19772 = state_19728;
state_19728 = G__19772;
continue;
} else {
return ret_value__15889__auto__;
}
break;
}
});
cljs$core$async$state_machine__15888__auto__ = function(state_19728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15888__auto____1.call(this,state_19728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15888__auto____0;
cljs$core$async$state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15888__auto____1;
return cljs$core$async$state_machine__15888__auto__;
})()
;})(switch__15887__auto__,c__16070__auto___19756,out))
})();
var state__16072__auto__ = (function (){var statearr_19754 = (f__16071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16071__auto__.cljs$core$IFn$_invoke$arity$0() : f__16071__auto__.call(null));
(statearr_19754[(6)] = c__16070__auto___19756);

return statearr_19754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16072__auto__);
});})(c__16070__auto___19756,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19774 = arguments.length;
switch (G__19774) {
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
var c__16070__auto___19844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16070__auto___19844,out){
return (function (){
var f__16071__auto__ = (function (){var switch__15887__auto__ = ((function (c__16070__auto___19844,out){
return (function (state_19816){
var state_val_19817 = (state_19816[(1)]);
if((state_val_19817 === (7))){
var inst_19812 = (state_19816[(2)]);
var state_19816__$1 = state_19816;
var statearr_19818_19845 = state_19816__$1;
(statearr_19818_19845[(2)] = inst_19812);

(statearr_19818_19845[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19817 === (1))){
var inst_19775 = [];
var inst_19776 = inst_19775;
var inst_19777 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_19816__$1 = (function (){var statearr_19819 = state_19816;
(statearr_19819[(7)] = inst_19776);

(statearr_19819[(8)] = inst_19777);

return statearr_19819;
})();
var statearr_19820_19846 = state_19816__$1;
(statearr_19820_19846[(2)] = null);

(statearr_19820_19846[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19817 === (4))){
var inst_19780 = (state_19816[(9)]);
var inst_19780__$1 = (state_19816[(2)]);
var inst_19781 = (inst_19780__$1 == null);
var inst_19782 = cljs.core.not(inst_19781);
var state_19816__$1 = (function (){var statearr_19821 = state_19816;
(statearr_19821[(9)] = inst_19780__$1);

return statearr_19821;
})();
if(inst_19782){
var statearr_19822_19847 = state_19816__$1;
(statearr_19822_19847[(1)] = (5));

} else {
var statearr_19823_19848 = state_19816__$1;
(statearr_19823_19848[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19817 === (15))){
var inst_19806 = (state_19816[(2)]);
var state_19816__$1 = state_19816;
var statearr_19824_19849 = state_19816__$1;
(statearr_19824_19849[(2)] = inst_19806);

(statearr_19824_19849[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19817 === (13))){
var state_19816__$1 = state_19816;
var statearr_19825_19850 = state_19816__$1;
(statearr_19825_19850[(2)] = null);

(statearr_19825_19850[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19817 === (6))){
var inst_19776 = (state_19816[(7)]);
var inst_19801 = inst_19776.length;
var inst_19802 = (inst_19801 > (0));
var state_19816__$1 = state_19816;
if(cljs.core.truth_(inst_19802)){
var statearr_19826_19851 = state_19816__$1;
(statearr_19826_19851[(1)] = (12));

} else {
var statearr_19827_19852 = state_19816__$1;
(statearr_19827_19852[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19817 === (3))){
var inst_19814 = (state_19816[(2)]);
var state_19816__$1 = state_19816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19816__$1,inst_19814);
} else {
if((state_val_19817 === (12))){
var inst_19776 = (state_19816[(7)]);
var inst_19804 = cljs.core.vec(inst_19776);
var state_19816__$1 = state_19816;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19816__$1,(15),out,inst_19804);
} else {
if((state_val_19817 === (2))){
var state_19816__$1 = state_19816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19816__$1,(4),ch);
} else {
if((state_val_19817 === (11))){
var inst_19780 = (state_19816[(9)]);
var inst_19784 = (state_19816[(10)]);
var inst_19794 = (state_19816[(2)]);
var inst_19795 = [];
var inst_19796 = inst_19795.push(inst_19780);
var inst_19776 = inst_19795;
var inst_19777 = inst_19784;
var state_19816__$1 = (function (){var statearr_19828 = state_19816;
(statearr_19828[(11)] = inst_19796);

(statearr_19828[(12)] = inst_19794);

(statearr_19828[(7)] = inst_19776);

(statearr_19828[(8)] = inst_19777);

return statearr_19828;
})();
var statearr_19829_19853 = state_19816__$1;
(statearr_19829_19853[(2)] = null);

(statearr_19829_19853[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19817 === (9))){
var inst_19776 = (state_19816[(7)]);
var inst_19792 = cljs.core.vec(inst_19776);
var state_19816__$1 = state_19816;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19816__$1,(11),out,inst_19792);
} else {
if((state_val_19817 === (5))){
var inst_19780 = (state_19816[(9)]);
var inst_19784 = (state_19816[(10)]);
var inst_19777 = (state_19816[(8)]);
var inst_19784__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19780) : f.call(null,inst_19780));
var inst_19785 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19784__$1,inst_19777);
var inst_19786 = cljs.core.keyword_identical_QMARK_(inst_19777,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_19787 = ((inst_19785) || (inst_19786));
var state_19816__$1 = (function (){var statearr_19830 = state_19816;
(statearr_19830[(10)] = inst_19784__$1);

return statearr_19830;
})();
if(cljs.core.truth_(inst_19787)){
var statearr_19831_19854 = state_19816__$1;
(statearr_19831_19854[(1)] = (8));

} else {
var statearr_19832_19855 = state_19816__$1;
(statearr_19832_19855[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19817 === (14))){
var inst_19809 = (state_19816[(2)]);
var inst_19810 = cljs.core.async.close_BANG_(out);
var state_19816__$1 = (function (){var statearr_19834 = state_19816;
(statearr_19834[(13)] = inst_19809);

return statearr_19834;
})();
var statearr_19835_19856 = state_19816__$1;
(statearr_19835_19856[(2)] = inst_19810);

(statearr_19835_19856[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19817 === (10))){
var inst_19799 = (state_19816[(2)]);
var state_19816__$1 = state_19816;
var statearr_19836_19857 = state_19816__$1;
(statearr_19836_19857[(2)] = inst_19799);

(statearr_19836_19857[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19817 === (8))){
var inst_19776 = (state_19816[(7)]);
var inst_19780 = (state_19816[(9)]);
var inst_19784 = (state_19816[(10)]);
var inst_19789 = inst_19776.push(inst_19780);
var tmp19833 = inst_19776;
var inst_19776__$1 = tmp19833;
var inst_19777 = inst_19784;
var state_19816__$1 = (function (){var statearr_19837 = state_19816;
(statearr_19837[(7)] = inst_19776__$1);

(statearr_19837[(14)] = inst_19789);

(statearr_19837[(8)] = inst_19777);

return statearr_19837;
})();
var statearr_19838_19858 = state_19816__$1;
(statearr_19838_19858[(2)] = null);

(statearr_19838_19858[(1)] = (2));


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
});})(c__16070__auto___19844,out))
;
return ((function (switch__15887__auto__,c__16070__auto___19844,out){
return (function() {
var cljs$core$async$state_machine__15888__auto__ = null;
var cljs$core$async$state_machine__15888__auto____0 = (function (){
var statearr_19839 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19839[(0)] = cljs$core$async$state_machine__15888__auto__);

(statearr_19839[(1)] = (1));

return statearr_19839;
});
var cljs$core$async$state_machine__15888__auto____1 = (function (state_19816){
while(true){
var ret_value__15889__auto__ = (function (){try{while(true){
var result__15890__auto__ = switch__15887__auto__(state_19816);
if(cljs.core.keyword_identical_QMARK_(result__15890__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15890__auto__;
}
break;
}
}catch (e19840){if((e19840 instanceof Object)){
var ex__15891__auto__ = e19840;
var statearr_19841_19859 = state_19816;
(statearr_19841_19859[(5)] = ex__15891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19816);

return cljs.core.cst$kw$recur;
} else {
throw e19840;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15889__auto__,cljs.core.cst$kw$recur)){
var G__19860 = state_19816;
state_19816 = G__19860;
continue;
} else {
return ret_value__15889__auto__;
}
break;
}
});
cljs$core$async$state_machine__15888__auto__ = function(state_19816){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15888__auto____1.call(this,state_19816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15888__auto____0;
cljs$core$async$state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15888__auto____1;
return cljs$core$async$state_machine__15888__auto__;
})()
;})(switch__15887__auto__,c__16070__auto___19844,out))
})();
var state__16072__auto__ = (function (){var statearr_19842 = (f__16071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16071__auto__.cljs$core$IFn$_invoke$arity$0() : f__16071__auto__.call(null));
(statearr_19842[(6)] = c__16070__auto___19844);

return statearr_19842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16072__auto__);
});})(c__16070__auto___19844,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

