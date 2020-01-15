goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__36993 = arguments.length;
switch (G__36993) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36994 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36994 = (function (f,blockable,meta36995){
this.f = f;
this.blockable = blockable;
this.meta36995 = meta36995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36996,meta36995__$1){
var self__ = this;
var _36996__$1 = this;
return (new cljs.core.async.t_cljs$core$async36994(self__.f,self__.blockable,meta36995__$1));
}));

(cljs.core.async.t_cljs$core$async36994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36996){
var self__ = this;
var _36996__$1 = this;
return self__.meta36995;
}));

(cljs.core.async.t_cljs$core$async36994.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36994.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36994.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async36994.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async36994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36995","meta36995",1232858157,null)], null);
}));

(cljs.core.async.t_cljs$core$async36994.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36994");

(cljs.core.async.t_cljs$core$async36994.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36994");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36994.
 */
cljs.core.async.__GT_t_cljs$core$async36994 = (function cljs$core$async$__GT_t_cljs$core$async36994(f__$1,blockable__$1,meta36995){
return (new cljs.core.async.t_cljs$core$async36994(f__$1,blockable__$1,meta36995));
});

}

return (new cljs.core.async.t_cljs$core$async36994(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

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
if((!((buff == null)))){
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
var G__36999 = arguments.length;
switch (G__36999) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__37001 = arguments.length;
switch (G__37001) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

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
var G__37003 = arguments.length;
switch (G__37003) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_38433 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38433) : fn1.call(null,val_38433));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38433) : fn1.call(null,val_38433));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

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
var G__37005 = arguments.length;
switch (G__37005) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___38435 = n;
var x_38436 = (0);
while(true){
if((x_38436 < n__4666__auto___38435)){
(a[x_38436] = x_38436);

var G__38437 = (x_38436 + (1));
x_38436 = G__38437;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37006 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37006 = (function (flag,meta37007){
this.flag = flag;
this.meta37007 = meta37007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37008,meta37007__$1){
var self__ = this;
var _37008__$1 = this;
return (new cljs.core.async.t_cljs$core$async37006(self__.flag,meta37007__$1));
}));

(cljs.core.async.t_cljs$core$async37006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37008){
var self__ = this;
var _37008__$1 = this;
return self__.meta37007;
}));

(cljs.core.async.t_cljs$core$async37006.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37006.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37006.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37006.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async37006.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37007","meta37007",-587836783,null)], null);
}));

(cljs.core.async.t_cljs$core$async37006.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37006.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37006");

(cljs.core.async.t_cljs$core$async37006.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37006");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37006.
 */
cljs.core.async.__GT_t_cljs$core$async37006 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37006(flag__$1,meta37007){
return (new cljs.core.async.t_cljs$core$async37006(flag__$1,meta37007));
});

}

return (new cljs.core.async.t_cljs$core$async37006(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37009 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37009 = (function (flag,cb,meta37010){
this.flag = flag;
this.cb = cb;
this.meta37010 = meta37010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37011,meta37010__$1){
var self__ = this;
var _37011__$1 = this;
return (new cljs.core.async.t_cljs$core$async37009(self__.flag,self__.cb,meta37010__$1));
}));

(cljs.core.async.t_cljs$core$async37009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37011){
var self__ = this;
var _37011__$1 = this;
return self__.meta37010;
}));

(cljs.core.async.t_cljs$core$async37009.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37009.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37009.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37009.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async37009.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37010","meta37010",-607883610,null)], null);
}));

(cljs.core.async.t_cljs$core$async37009.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37009.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37009");

(cljs.core.async.t_cljs$core$async37009.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37009");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37009.
 */
cljs.core.async.__GT_t_cljs$core$async37009 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37009(flag__$1,cb__$1,meta37010){
return (new cljs.core.async.t_cljs$core$async37009(flag__$1,cb__$1,meta37010));
});

}

return (new cljs.core.async.t_cljs$core$async37009(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37012_SHARP_){
var G__37014 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37012_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37014) : fret.call(null,G__37014));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37013_SHARP_){
var G__37015 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37013_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37015) : fret.call(null,G__37015));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__38438 = (i + (1));
i = G__38438;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4795__auto__ = [];
var len__4789__auto___38439 = arguments.length;
var i__4790__auto___38440 = (0);
while(true){
if((i__4790__auto___38440 < len__4789__auto___38439)){
args__4795__auto__.push((arguments[i__4790__auto___38440]));

var G__38441 = (i__4790__auto___38440 + (1));
i__4790__auto___38440 = G__38441;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37018){
var map__37019 = p__37018;
var map__37019__$1 = (((((!((map__37019 == null))))?(((((map__37019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37019):map__37019);
var opts = map__37019__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37016){
var G__37017 = cljs.core.first(seq37016);
var seq37016__$1 = cljs.core.next(seq37016);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37017,seq37016__$1);
}));

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
var G__37022 = arguments.length;
switch (G__37022) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__36933__auto___38443 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36934__auto__ = (function (){var switch__36865__auto__ = (function (state_37046){
var state_val_37047 = (state_37046[(1)]);
if((state_val_37047 === (7))){
var inst_37042 = (state_37046[(2)]);
var state_37046__$1 = state_37046;
var statearr_37048_38444 = state_37046__$1;
(statearr_37048_38444[(2)] = inst_37042);

(statearr_37048_38444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37047 === (1))){
var state_37046__$1 = state_37046;
var statearr_37049_38445 = state_37046__$1;
(statearr_37049_38445[(2)] = null);

(statearr_37049_38445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37047 === (4))){
var inst_37025 = (state_37046[(7)]);
var inst_37025__$1 = (state_37046[(2)]);
var inst_37026 = (inst_37025__$1 == null);
var state_37046__$1 = (function (){var statearr_37050 = state_37046;
(statearr_37050[(7)] = inst_37025__$1);

return statearr_37050;
})();
if(cljs.core.truth_(inst_37026)){
var statearr_37051_38446 = state_37046__$1;
(statearr_37051_38446[(1)] = (5));

} else {
var statearr_37052_38447 = state_37046__$1;
(statearr_37052_38447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37047 === (13))){
var state_37046__$1 = state_37046;
var statearr_37053_38448 = state_37046__$1;
(statearr_37053_38448[(2)] = null);

(statearr_37053_38448[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37047 === (6))){
var inst_37025 = (state_37046[(7)]);
var state_37046__$1 = state_37046;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37046__$1,(11),to,inst_37025);
} else {
if((state_val_37047 === (3))){
var inst_37044 = (state_37046[(2)]);
var state_37046__$1 = state_37046;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37046__$1,inst_37044);
} else {
if((state_val_37047 === (12))){
var state_37046__$1 = state_37046;
var statearr_37054_38449 = state_37046__$1;
(statearr_37054_38449[(2)] = null);

(statearr_37054_38449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37047 === (2))){
var state_37046__$1 = state_37046;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37046__$1,(4),from);
} else {
if((state_val_37047 === (11))){
var inst_37035 = (state_37046[(2)]);
var state_37046__$1 = state_37046;
if(cljs.core.truth_(inst_37035)){
var statearr_37055_38450 = state_37046__$1;
(statearr_37055_38450[(1)] = (12));

} else {
var statearr_37056_38451 = state_37046__$1;
(statearr_37056_38451[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37047 === (9))){
var state_37046__$1 = state_37046;
var statearr_37057_38452 = state_37046__$1;
(statearr_37057_38452[(2)] = null);

(statearr_37057_38452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37047 === (5))){
var state_37046__$1 = state_37046;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37058_38453 = state_37046__$1;
(statearr_37058_38453[(1)] = (8));

} else {
var statearr_37059_38454 = state_37046__$1;
(statearr_37059_38454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37047 === (14))){
var inst_37040 = (state_37046[(2)]);
var state_37046__$1 = state_37046;
var statearr_37060_38455 = state_37046__$1;
(statearr_37060_38455[(2)] = inst_37040);

(statearr_37060_38455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37047 === (10))){
var inst_37032 = (state_37046[(2)]);
var state_37046__$1 = state_37046;
var statearr_37061_38456 = state_37046__$1;
(statearr_37061_38456[(2)] = inst_37032);

(statearr_37061_38456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37047 === (8))){
var inst_37029 = cljs.core.async.close_BANG_(to);
var state_37046__$1 = state_37046;
var statearr_37062_38457 = state_37046__$1;
(statearr_37062_38457[(2)] = inst_37029);

(statearr_37062_38457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__36866__auto__ = null;
var cljs$core$async$state_machine__36866__auto____0 = (function (){
var statearr_37063 = [null,null,null,null,null,null,null,null];
(statearr_37063[(0)] = cljs$core$async$state_machine__36866__auto__);

(statearr_37063[(1)] = (1));

return statearr_37063;
});
var cljs$core$async$state_machine__36866__auto____1 = (function (state_37046){
while(true){
var ret_value__36867__auto__ = (function (){try{while(true){
var result__36868__auto__ = switch__36865__auto__(state_37046);
if(cljs.core.keyword_identical_QMARK_(result__36868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36868__auto__;
}
break;
}
}catch (e37064){if((e37064 instanceof Object)){
var ex__36869__auto__ = e37064;
var statearr_37065_38458 = state_37046;
(statearr_37065_38458[(5)] = ex__36869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37064;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38459 = state_37046;
state_37046 = G__38459;
continue;
} else {
return ret_value__36867__auto__;
}
break;
}
});
cljs$core$async$state_machine__36866__auto__ = function(state_37046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36866__auto____1.call(this,state_37046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36866__auto____0;
cljs$core$async$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36866__auto____1;
return cljs$core$async$state_machine__36866__auto__;
})()
})();
var state__36935__auto__ = (function (){var statearr_37066 = (f__36934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36934__auto__.cljs$core$IFn$_invoke$arity$0() : f__36934__auto__.call(null));
(statearr_37066[(6)] = c__36933__auto___38443);

return statearr_37066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36935__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__37067){
var vec__37068 = p__37067;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37068,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37068,(1),null);
var job = vec__37068;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__36933__auto___38462 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36934__auto__ = (function (){var switch__36865__auto__ = (function (state_37075){
var state_val_37076 = (state_37075[(1)]);
if((state_val_37076 === (1))){
var state_37075__$1 = state_37075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37075__$1,(2),res,v);
} else {
if((state_val_37076 === (2))){
var inst_37072 = (state_37075[(2)]);
var inst_37073 = cljs.core.async.close_BANG_(res);
var state_37075__$1 = (function (){var statearr_37077 = state_37075;
(statearr_37077[(7)] = inst_37072);

return statearr_37077;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37075__$1,inst_37073);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____0 = (function (){
var statearr_37078 = [null,null,null,null,null,null,null,null];
(statearr_37078[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__);

(statearr_37078[(1)] = (1));

return statearr_37078;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____1 = (function (state_37075){
while(true){
var ret_value__36867__auto__ = (function (){try{while(true){
var result__36868__auto__ = switch__36865__auto__(state_37075);
if(cljs.core.keyword_identical_QMARK_(result__36868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36868__auto__;
}
break;
}
}catch (e37079){if((e37079 instanceof Object)){
var ex__36869__auto__ = e37079;
var statearr_37080_38466 = state_37075;
(statearr_37080_38466[(5)] = ex__36869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37079;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38467 = state_37075;
state_37075 = G__38467;
continue;
} else {
return ret_value__36867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__ = function(state_37075){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____1.call(this,state_37075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__;
})()
})();
var state__36935__auto__ = (function (){var statearr_37081 = (f__36934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36934__auto__.cljs$core$IFn$_invoke$arity$0() : f__36934__auto__.call(null));
(statearr_37081[(6)] = c__36933__auto___38462);

return statearr_37081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36935__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__37082){
var vec__37083 = p__37082;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37083,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37083,(1),null);
var job = vec__37083;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___38469 = n;
var __38470 = (0);
while(true){
if((__38470 < n__4666__auto___38469)){
var G__37086_38471 = type;
var G__37086_38472__$1 = (((G__37086_38471 instanceof cljs.core.Keyword))?G__37086_38471.fqn:null);
switch (G__37086_38472__$1) {
case "compute":
var c__36933__auto___38474 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38470,c__36933__auto___38474,G__37086_38471,G__37086_38472__$1,n__4666__auto___38469,jobs,results,process,async){
return (function (){
var f__36934__auto__ = (function (){var switch__36865__auto__ = ((function (__38470,c__36933__auto___38474,G__37086_38471,G__37086_38472__$1,n__4666__auto___38469,jobs,results,process,async){
return (function (state_37099){
var state_val_37100 = (state_37099[(1)]);
if((state_val_37100 === (1))){
var state_37099__$1 = state_37099;
var statearr_37101_38475 = state_37099__$1;
(statearr_37101_38475[(2)] = null);

(statearr_37101_38475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37100 === (2))){
var state_37099__$1 = state_37099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37099__$1,(4),jobs);
} else {
if((state_val_37100 === (3))){
var inst_37097 = (state_37099[(2)]);
var state_37099__$1 = state_37099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37099__$1,inst_37097);
} else {
if((state_val_37100 === (4))){
var inst_37089 = (state_37099[(2)]);
var inst_37090 = process(inst_37089);
var state_37099__$1 = state_37099;
if(cljs.core.truth_(inst_37090)){
var statearr_37102_38476 = state_37099__$1;
(statearr_37102_38476[(1)] = (5));

} else {
var statearr_37103_38477 = state_37099__$1;
(statearr_37103_38477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37100 === (5))){
var state_37099__$1 = state_37099;
var statearr_37104_38478 = state_37099__$1;
(statearr_37104_38478[(2)] = null);

(statearr_37104_38478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37100 === (6))){
var state_37099__$1 = state_37099;
var statearr_37105_38479 = state_37099__$1;
(statearr_37105_38479[(2)] = null);

(statearr_37105_38479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37100 === (7))){
var inst_37095 = (state_37099[(2)]);
var state_37099__$1 = state_37099;
var statearr_37106_38480 = state_37099__$1;
(statearr_37106_38480[(2)] = inst_37095);

(statearr_37106_38480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__38470,c__36933__auto___38474,G__37086_38471,G__37086_38472__$1,n__4666__auto___38469,jobs,results,process,async))
;
return ((function (__38470,switch__36865__auto__,c__36933__auto___38474,G__37086_38471,G__37086_38472__$1,n__4666__auto___38469,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____0 = (function (){
var statearr_37107 = [null,null,null,null,null,null,null];
(statearr_37107[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__);

(statearr_37107[(1)] = (1));

return statearr_37107;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____1 = (function (state_37099){
while(true){
var ret_value__36867__auto__ = (function (){try{while(true){
var result__36868__auto__ = switch__36865__auto__(state_37099);
if(cljs.core.keyword_identical_QMARK_(result__36868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36868__auto__;
}
break;
}
}catch (e37108){if((e37108 instanceof Object)){
var ex__36869__auto__ = e37108;
var statearr_37109_38482 = state_37099;
(statearr_37109_38482[(5)] = ex__36869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37108;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38486 = state_37099;
state_37099 = G__38486;
continue;
} else {
return ret_value__36867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__ = function(state_37099){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____1.call(this,state_37099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__;
})()
;})(__38470,switch__36865__auto__,c__36933__auto___38474,G__37086_38471,G__37086_38472__$1,n__4666__auto___38469,jobs,results,process,async))
})();
var state__36935__auto__ = (function (){var statearr_37110 = (f__36934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36934__auto__.cljs$core$IFn$_invoke$arity$0() : f__36934__auto__.call(null));
(statearr_37110[(6)] = c__36933__auto___38474);

return statearr_37110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36935__auto__);
});})(__38470,c__36933__auto___38474,G__37086_38471,G__37086_38472__$1,n__4666__auto___38469,jobs,results,process,async))
);


break;
case "async":
var c__36933__auto___38487 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38470,c__36933__auto___38487,G__37086_38471,G__37086_38472__$1,n__4666__auto___38469,jobs,results,process,async){
return (function (){
var f__36934__auto__ = (function (){var switch__36865__auto__ = ((function (__38470,c__36933__auto___38487,G__37086_38471,G__37086_38472__$1,n__4666__auto___38469,jobs,results,process,async){
return (function (state_37123){
var state_val_37124 = (state_37123[(1)]);
if((state_val_37124 === (1))){
var state_37123__$1 = state_37123;
var statearr_37125_38488 = state_37123__$1;
(statearr_37125_38488[(2)] = null);

(statearr_37125_38488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37124 === (2))){
var state_37123__$1 = state_37123;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37123__$1,(4),jobs);
} else {
if((state_val_37124 === (3))){
var inst_37121 = (state_37123[(2)]);
var state_37123__$1 = state_37123;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37123__$1,inst_37121);
} else {
if((state_val_37124 === (4))){
var inst_37113 = (state_37123[(2)]);
var inst_37114 = async(inst_37113);
var state_37123__$1 = state_37123;
if(cljs.core.truth_(inst_37114)){
var statearr_37126_38491 = state_37123__$1;
(statearr_37126_38491[(1)] = (5));

} else {
var statearr_37127_38492 = state_37123__$1;
(statearr_37127_38492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37124 === (5))){
var state_37123__$1 = state_37123;
var statearr_37128_38494 = state_37123__$1;
(statearr_37128_38494[(2)] = null);

(statearr_37128_38494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37124 === (6))){
var state_37123__$1 = state_37123;
var statearr_37129_38495 = state_37123__$1;
(statearr_37129_38495[(2)] = null);

(statearr_37129_38495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37124 === (7))){
var inst_37119 = (state_37123[(2)]);
var state_37123__$1 = state_37123;
var statearr_37130_38496 = state_37123__$1;
(statearr_37130_38496[(2)] = inst_37119);

(statearr_37130_38496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__38470,c__36933__auto___38487,G__37086_38471,G__37086_38472__$1,n__4666__auto___38469,jobs,results,process,async))
;
return ((function (__38470,switch__36865__auto__,c__36933__auto___38487,G__37086_38471,G__37086_38472__$1,n__4666__auto___38469,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____0 = (function (){
var statearr_37131 = [null,null,null,null,null,null,null];
(statearr_37131[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__);

(statearr_37131[(1)] = (1));

return statearr_37131;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____1 = (function (state_37123){
while(true){
var ret_value__36867__auto__ = (function (){try{while(true){
var result__36868__auto__ = switch__36865__auto__(state_37123);
if(cljs.core.keyword_identical_QMARK_(result__36868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36868__auto__;
}
break;
}
}catch (e37132){if((e37132 instanceof Object)){
var ex__36869__auto__ = e37132;
var statearr_37133_38499 = state_37123;
(statearr_37133_38499[(5)] = ex__36869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37132;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38500 = state_37123;
state_37123 = G__38500;
continue;
} else {
return ret_value__36867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__ = function(state_37123){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____1.call(this,state_37123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__;
})()
;})(__38470,switch__36865__auto__,c__36933__auto___38487,G__37086_38471,G__37086_38472__$1,n__4666__auto___38469,jobs,results,process,async))
})();
var state__36935__auto__ = (function (){var statearr_37134 = (f__36934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36934__auto__.cljs$core$IFn$_invoke$arity$0() : f__36934__auto__.call(null));
(statearr_37134[(6)] = c__36933__auto___38487);

return statearr_37134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36935__auto__);
});})(__38470,c__36933__auto___38487,G__37086_38471,G__37086_38472__$1,n__4666__auto___38469,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37086_38472__$1)].join('')));

}

var G__38501 = (__38470 + (1));
__38470 = G__38501;
continue;
} else {
}
break;
}

var c__36933__auto___38502 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36934__auto__ = (function (){var switch__36865__auto__ = (function (state_37156){
var state_val_37157 = (state_37156[(1)]);
if((state_val_37157 === (7))){
var inst_37152 = (state_37156[(2)]);
var state_37156__$1 = state_37156;
var statearr_37158_38503 = state_37156__$1;
(statearr_37158_38503[(2)] = inst_37152);

(statearr_37158_38503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37157 === (1))){
var state_37156__$1 = state_37156;
var statearr_37159_38504 = state_37156__$1;
(statearr_37159_38504[(2)] = null);

(statearr_37159_38504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37157 === (4))){
var inst_37137 = (state_37156[(7)]);
var inst_37137__$1 = (state_37156[(2)]);
var inst_37138 = (inst_37137__$1 == null);
var state_37156__$1 = (function (){var statearr_37160 = state_37156;
(statearr_37160[(7)] = inst_37137__$1);

return statearr_37160;
})();
if(cljs.core.truth_(inst_37138)){
var statearr_37161_38505 = state_37156__$1;
(statearr_37161_38505[(1)] = (5));

} else {
var statearr_37162_38506 = state_37156__$1;
(statearr_37162_38506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37157 === (6))){
var inst_37142 = (state_37156[(8)]);
var inst_37137 = (state_37156[(7)]);
var inst_37142__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_37143 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37144 = [inst_37137,inst_37142__$1];
var inst_37145 = (new cljs.core.PersistentVector(null,2,(5),inst_37143,inst_37144,null));
var state_37156__$1 = (function (){var statearr_37163 = state_37156;
(statearr_37163[(8)] = inst_37142__$1);

return statearr_37163;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37156__$1,(8),jobs,inst_37145);
} else {
if((state_val_37157 === (3))){
var inst_37154 = (state_37156[(2)]);
var state_37156__$1 = state_37156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37156__$1,inst_37154);
} else {
if((state_val_37157 === (2))){
var state_37156__$1 = state_37156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37156__$1,(4),from);
} else {
if((state_val_37157 === (9))){
var inst_37149 = (state_37156[(2)]);
var state_37156__$1 = (function (){var statearr_37164 = state_37156;
(statearr_37164[(9)] = inst_37149);

return statearr_37164;
})();
var statearr_37165_38507 = state_37156__$1;
(statearr_37165_38507[(2)] = null);

(statearr_37165_38507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37157 === (5))){
var inst_37140 = cljs.core.async.close_BANG_(jobs);
var state_37156__$1 = state_37156;
var statearr_37166_38508 = state_37156__$1;
(statearr_37166_38508[(2)] = inst_37140);

(statearr_37166_38508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37157 === (8))){
var inst_37142 = (state_37156[(8)]);
var inst_37147 = (state_37156[(2)]);
var state_37156__$1 = (function (){var statearr_37167 = state_37156;
(statearr_37167[(10)] = inst_37147);

return statearr_37167;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37156__$1,(9),results,inst_37142);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____0 = (function (){
var statearr_37168 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37168[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__);

(statearr_37168[(1)] = (1));

return statearr_37168;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____1 = (function (state_37156){
while(true){
var ret_value__36867__auto__ = (function (){try{while(true){
var result__36868__auto__ = switch__36865__auto__(state_37156);
if(cljs.core.keyword_identical_QMARK_(result__36868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36868__auto__;
}
break;
}
}catch (e37169){if((e37169 instanceof Object)){
var ex__36869__auto__ = e37169;
var statearr_37170_38509 = state_37156;
(statearr_37170_38509[(5)] = ex__36869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37169;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38510 = state_37156;
state_37156 = G__38510;
continue;
} else {
return ret_value__36867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__ = function(state_37156){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____1.call(this,state_37156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__;
})()
})();
var state__36935__auto__ = (function (){var statearr_37171 = (f__36934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36934__auto__.cljs$core$IFn$_invoke$arity$0() : f__36934__auto__.call(null));
(statearr_37171[(6)] = c__36933__auto___38502);

return statearr_37171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36935__auto__);
}));


var c__36933__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36934__auto__ = (function (){var switch__36865__auto__ = (function (state_37209){
var state_val_37210 = (state_37209[(1)]);
if((state_val_37210 === (7))){
var inst_37205 = (state_37209[(2)]);
var state_37209__$1 = state_37209;
var statearr_37211_38511 = state_37209__$1;
(statearr_37211_38511[(2)] = inst_37205);

(statearr_37211_38511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (20))){
var state_37209__$1 = state_37209;
var statearr_37212_38512 = state_37209__$1;
(statearr_37212_38512[(2)] = null);

(statearr_37212_38512[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (1))){
var state_37209__$1 = state_37209;
var statearr_37213_38513 = state_37209__$1;
(statearr_37213_38513[(2)] = null);

(statearr_37213_38513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (4))){
var inst_37174 = (state_37209[(7)]);
var inst_37174__$1 = (state_37209[(2)]);
var inst_37175 = (inst_37174__$1 == null);
var state_37209__$1 = (function (){var statearr_37214 = state_37209;
(statearr_37214[(7)] = inst_37174__$1);

return statearr_37214;
})();
if(cljs.core.truth_(inst_37175)){
var statearr_37215_38514 = state_37209__$1;
(statearr_37215_38514[(1)] = (5));

} else {
var statearr_37216_38515 = state_37209__$1;
(statearr_37216_38515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (15))){
var inst_37187 = (state_37209[(8)]);
var state_37209__$1 = state_37209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37209__$1,(18),to,inst_37187);
} else {
if((state_val_37210 === (21))){
var inst_37200 = (state_37209[(2)]);
var state_37209__$1 = state_37209;
var statearr_37217_38516 = state_37209__$1;
(statearr_37217_38516[(2)] = inst_37200);

(statearr_37217_38516[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (13))){
var inst_37202 = (state_37209[(2)]);
var state_37209__$1 = (function (){var statearr_37218 = state_37209;
(statearr_37218[(9)] = inst_37202);

return statearr_37218;
})();
var statearr_37219_38517 = state_37209__$1;
(statearr_37219_38517[(2)] = null);

(statearr_37219_38517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (6))){
var inst_37174 = (state_37209[(7)]);
var state_37209__$1 = state_37209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37209__$1,(11),inst_37174);
} else {
if((state_val_37210 === (17))){
var inst_37195 = (state_37209[(2)]);
var state_37209__$1 = state_37209;
if(cljs.core.truth_(inst_37195)){
var statearr_37220_38518 = state_37209__$1;
(statearr_37220_38518[(1)] = (19));

} else {
var statearr_37221_38519 = state_37209__$1;
(statearr_37221_38519[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (3))){
var inst_37207 = (state_37209[(2)]);
var state_37209__$1 = state_37209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37209__$1,inst_37207);
} else {
if((state_val_37210 === (12))){
var inst_37184 = (state_37209[(10)]);
var state_37209__$1 = state_37209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37209__$1,(14),inst_37184);
} else {
if((state_val_37210 === (2))){
var state_37209__$1 = state_37209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37209__$1,(4),results);
} else {
if((state_val_37210 === (19))){
var state_37209__$1 = state_37209;
var statearr_37222_38520 = state_37209__$1;
(statearr_37222_38520[(2)] = null);

(statearr_37222_38520[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (11))){
var inst_37184 = (state_37209[(2)]);
var state_37209__$1 = (function (){var statearr_37223 = state_37209;
(statearr_37223[(10)] = inst_37184);

return statearr_37223;
})();
var statearr_37224_38521 = state_37209__$1;
(statearr_37224_38521[(2)] = null);

(statearr_37224_38521[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (9))){
var state_37209__$1 = state_37209;
var statearr_37225_38522 = state_37209__$1;
(statearr_37225_38522[(2)] = null);

(statearr_37225_38522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (5))){
var state_37209__$1 = state_37209;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37226_38523 = state_37209__$1;
(statearr_37226_38523[(1)] = (8));

} else {
var statearr_37227_38524 = state_37209__$1;
(statearr_37227_38524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (14))){
var inst_37187 = (state_37209[(8)]);
var inst_37187__$1 = (state_37209[(2)]);
var inst_37188 = (inst_37187__$1 == null);
var inst_37189 = cljs.core.not(inst_37188);
var state_37209__$1 = (function (){var statearr_37228 = state_37209;
(statearr_37228[(8)] = inst_37187__$1);

return statearr_37228;
})();
if(inst_37189){
var statearr_37229_38525 = state_37209__$1;
(statearr_37229_38525[(1)] = (15));

} else {
var statearr_37230_38526 = state_37209__$1;
(statearr_37230_38526[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (16))){
var state_37209__$1 = state_37209;
var statearr_37231_38527 = state_37209__$1;
(statearr_37231_38527[(2)] = false);

(statearr_37231_38527[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (10))){
var inst_37181 = (state_37209[(2)]);
var state_37209__$1 = state_37209;
var statearr_37232_38528 = state_37209__$1;
(statearr_37232_38528[(2)] = inst_37181);

(statearr_37232_38528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (18))){
var inst_37192 = (state_37209[(2)]);
var state_37209__$1 = state_37209;
var statearr_37233_38529 = state_37209__$1;
(statearr_37233_38529[(2)] = inst_37192);

(statearr_37233_38529[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37210 === (8))){
var inst_37178 = cljs.core.async.close_BANG_(to);
var state_37209__$1 = state_37209;
var statearr_37234_38530 = state_37209__$1;
(statearr_37234_38530[(2)] = inst_37178);

(statearr_37234_38530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____0 = (function (){
var statearr_37235 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37235[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__);

(statearr_37235[(1)] = (1));

return statearr_37235;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____1 = (function (state_37209){
while(true){
var ret_value__36867__auto__ = (function (){try{while(true){
var result__36868__auto__ = switch__36865__auto__(state_37209);
if(cljs.core.keyword_identical_QMARK_(result__36868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36868__auto__;
}
break;
}
}catch (e37236){if((e37236 instanceof Object)){
var ex__36869__auto__ = e37236;
var statearr_37237_38531 = state_37209;
(statearr_37237_38531[(5)] = ex__36869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37236;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38532 = state_37209;
state_37209 = G__38532;
continue;
} else {
return ret_value__36867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__ = function(state_37209){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____1.call(this,state_37209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36866__auto__;
})()
})();
var state__36935__auto__ = (function (){var statearr_37238 = (f__36934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36934__auto__.cljs$core$IFn$_invoke$arity$0() : f__36934__auto__.call(null));
(statearr_37238[(6)] = c__36933__auto__);

return statearr_37238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36935__auto__);
}));

return c__36933__auto__;
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
var G__37240 = arguments.length;
switch (G__37240) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__37242 = arguments.length;
switch (G__37242) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__37244 = arguments.length;
switch (G__37244) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__36933__auto___38540 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36934__auto__ = (function (){var switch__36865__auto__ = (function (state_37270){
var state_val_37271 = (state_37270[(1)]);
if((state_val_37271 === (7))){
var inst_37266 = (state_37270[(2)]);
var state_37270__$1 = state_37270;
var statearr_37272_38541 = state_37270__$1;
(statearr_37272_38541[(2)] = inst_37266);

(statearr_37272_38541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37271 === (1))){
var state_37270__$1 = state_37270;
var statearr_37273_38542 = state_37270__$1;
(statearr_37273_38542[(2)] = null);

(statearr_37273_38542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37271 === (4))){
var inst_37247 = (state_37270[(7)]);
var inst_37247__$1 = (state_37270[(2)]);
var inst_37248 = (inst_37247__$1 == null);
var state_37270__$1 = (function (){var statearr_37274 = state_37270;
(statearr_37274[(7)] = inst_37247__$1);

return statearr_37274;
})();
if(cljs.core.truth_(inst_37248)){
var statearr_37275_38543 = state_37270__$1;
(statearr_37275_38543[(1)] = (5));

} else {
var statearr_37276_38544 = state_37270__$1;
(statearr_37276_38544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37271 === (13))){
var state_37270__$1 = state_37270;
var statearr_37277_38547 = state_37270__$1;
(statearr_37277_38547[(2)] = null);

(statearr_37277_38547[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37271 === (6))){
var inst_37247 = (state_37270[(7)]);
var inst_37253 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37247) : p.call(null,inst_37247));
var state_37270__$1 = state_37270;
if(cljs.core.truth_(inst_37253)){
var statearr_37278_38548 = state_37270__$1;
(statearr_37278_38548[(1)] = (9));

} else {
var statearr_37279_38549 = state_37270__$1;
(statearr_37279_38549[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37271 === (3))){
var inst_37268 = (state_37270[(2)]);
var state_37270__$1 = state_37270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37270__$1,inst_37268);
} else {
if((state_val_37271 === (12))){
var state_37270__$1 = state_37270;
var statearr_37280_38550 = state_37270__$1;
(statearr_37280_38550[(2)] = null);

(statearr_37280_38550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37271 === (2))){
var state_37270__$1 = state_37270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37270__$1,(4),ch);
} else {
if((state_val_37271 === (11))){
var inst_37247 = (state_37270[(7)]);
var inst_37257 = (state_37270[(2)]);
var state_37270__$1 = state_37270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37270__$1,(8),inst_37257,inst_37247);
} else {
if((state_val_37271 === (9))){
var state_37270__$1 = state_37270;
var statearr_37281_38551 = state_37270__$1;
(statearr_37281_38551[(2)] = tc);

(statearr_37281_38551[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37271 === (5))){
var inst_37250 = cljs.core.async.close_BANG_(tc);
var inst_37251 = cljs.core.async.close_BANG_(fc);
var state_37270__$1 = (function (){var statearr_37282 = state_37270;
(statearr_37282[(8)] = inst_37250);

return statearr_37282;
})();
var statearr_37283_38552 = state_37270__$1;
(statearr_37283_38552[(2)] = inst_37251);

(statearr_37283_38552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37271 === (14))){
var inst_37264 = (state_37270[(2)]);
var state_37270__$1 = state_37270;
var statearr_37284_38553 = state_37270__$1;
(statearr_37284_38553[(2)] = inst_37264);

(statearr_37284_38553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37271 === (10))){
var state_37270__$1 = state_37270;
var statearr_37285_38554 = state_37270__$1;
(statearr_37285_38554[(2)] = fc);

(statearr_37285_38554[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37271 === (8))){
var inst_37259 = (state_37270[(2)]);
var state_37270__$1 = state_37270;
if(cljs.core.truth_(inst_37259)){
var statearr_37286_38555 = state_37270__$1;
(statearr_37286_38555[(1)] = (12));

} else {
var statearr_37287_38556 = state_37270__$1;
(statearr_37287_38556[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__36866__auto__ = null;
var cljs$core$async$state_machine__36866__auto____0 = (function (){
var statearr_37288 = [null,null,null,null,null,null,null,null,null];
(statearr_37288[(0)] = cljs$core$async$state_machine__36866__auto__);

(statearr_37288[(1)] = (1));

return statearr_37288;
});
var cljs$core$async$state_machine__36866__auto____1 = (function (state_37270){
while(true){
var ret_value__36867__auto__ = (function (){try{while(true){
var result__36868__auto__ = switch__36865__auto__(state_37270);
if(cljs.core.keyword_identical_QMARK_(result__36868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36868__auto__;
}
break;
}
}catch (e37289){if((e37289 instanceof Object)){
var ex__36869__auto__ = e37289;
var statearr_37290_38557 = state_37270;
(statearr_37290_38557[(5)] = ex__36869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37289;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38558 = state_37270;
state_37270 = G__38558;
continue;
} else {
return ret_value__36867__auto__;
}
break;
}
});
cljs$core$async$state_machine__36866__auto__ = function(state_37270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36866__auto____1.call(this,state_37270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36866__auto____0;
cljs$core$async$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36866__auto____1;
return cljs$core$async$state_machine__36866__auto__;
})()
})();
var state__36935__auto__ = (function (){var statearr_37291 = (f__36934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36934__auto__.cljs$core$IFn$_invoke$arity$0() : f__36934__auto__.call(null));
(statearr_37291[(6)] = c__36933__auto___38540);

return statearr_37291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36935__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__36933__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36934__auto__ = (function (){var switch__36865__auto__ = (function (state_37312){
var state_val_37313 = (state_37312[(1)]);
if((state_val_37313 === (7))){
var inst_37308 = (state_37312[(2)]);
var state_37312__$1 = state_37312;
var statearr_37314_38559 = state_37312__$1;
(statearr_37314_38559[(2)] = inst_37308);

(statearr_37314_38559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (1))){
var inst_37292 = init;
var state_37312__$1 = (function (){var statearr_37315 = state_37312;
(statearr_37315[(7)] = inst_37292);

return statearr_37315;
})();
var statearr_37316_38560 = state_37312__$1;
(statearr_37316_38560[(2)] = null);

(statearr_37316_38560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (4))){
var inst_37295 = (state_37312[(8)]);
var inst_37295__$1 = (state_37312[(2)]);
var inst_37296 = (inst_37295__$1 == null);
var state_37312__$1 = (function (){var statearr_37317 = state_37312;
(statearr_37317[(8)] = inst_37295__$1);

return statearr_37317;
})();
if(cljs.core.truth_(inst_37296)){
var statearr_37318_38561 = state_37312__$1;
(statearr_37318_38561[(1)] = (5));

} else {
var statearr_37319_38562 = state_37312__$1;
(statearr_37319_38562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (6))){
var inst_37292 = (state_37312[(7)]);
var inst_37299 = (state_37312[(9)]);
var inst_37295 = (state_37312[(8)]);
var inst_37299__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37292,inst_37295) : f.call(null,inst_37292,inst_37295));
var inst_37300 = cljs.core.reduced_QMARK_(inst_37299__$1);
var state_37312__$1 = (function (){var statearr_37320 = state_37312;
(statearr_37320[(9)] = inst_37299__$1);

return statearr_37320;
})();
if(inst_37300){
var statearr_37321_38563 = state_37312__$1;
(statearr_37321_38563[(1)] = (8));

} else {
var statearr_37322_38564 = state_37312__$1;
(statearr_37322_38564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (3))){
var inst_37310 = (state_37312[(2)]);
var state_37312__$1 = state_37312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37312__$1,inst_37310);
} else {
if((state_val_37313 === (2))){
var state_37312__$1 = state_37312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37312__$1,(4),ch);
} else {
if((state_val_37313 === (9))){
var inst_37299 = (state_37312[(9)]);
var inst_37292 = inst_37299;
var state_37312__$1 = (function (){var statearr_37323 = state_37312;
(statearr_37323[(7)] = inst_37292);

return statearr_37323;
})();
var statearr_37324_38565 = state_37312__$1;
(statearr_37324_38565[(2)] = null);

(statearr_37324_38565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (5))){
var inst_37292 = (state_37312[(7)]);
var state_37312__$1 = state_37312;
var statearr_37325_38566 = state_37312__$1;
(statearr_37325_38566[(2)] = inst_37292);

(statearr_37325_38566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (10))){
var inst_37306 = (state_37312[(2)]);
var state_37312__$1 = state_37312;
var statearr_37326_38568 = state_37312__$1;
(statearr_37326_38568[(2)] = inst_37306);

(statearr_37326_38568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (8))){
var inst_37299 = (state_37312[(9)]);
var inst_37302 = cljs.core.deref(inst_37299);
var state_37312__$1 = state_37312;
var statearr_37327_38577 = state_37312__$1;
(statearr_37327_38577[(2)] = inst_37302);

(statearr_37327_38577[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__36866__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36866__auto____0 = (function (){
var statearr_37328 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37328[(0)] = cljs$core$async$reduce_$_state_machine__36866__auto__);

(statearr_37328[(1)] = (1));

return statearr_37328;
});
var cljs$core$async$reduce_$_state_machine__36866__auto____1 = (function (state_37312){
while(true){
var ret_value__36867__auto__ = (function (){try{while(true){
var result__36868__auto__ = switch__36865__auto__(state_37312);
if(cljs.core.keyword_identical_QMARK_(result__36868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36868__auto__;
}
break;
}
}catch (e37329){if((e37329 instanceof Object)){
var ex__36869__auto__ = e37329;
var statearr_37330_38578 = state_37312;
(statearr_37330_38578[(5)] = ex__36869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37329;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38579 = state_37312;
state_37312 = G__38579;
continue;
} else {
return ret_value__36867__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36866__auto__ = function(state_37312){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36866__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36866__auto____1.call(this,state_37312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36866__auto____0;
cljs$core$async$reduce_$_state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36866__auto____1;
return cljs$core$async$reduce_$_state_machine__36866__auto__;
})()
})();
var state__36935__auto__ = (function (){var statearr_37331 = (f__36934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36934__auto__.cljs$core$IFn$_invoke$arity$0() : f__36934__auto__.call(null));
(statearr_37331[(6)] = c__36933__auto__);

return statearr_37331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36935__auto__);
}));

return c__36933__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__36933__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36934__auto__ = (function (){var switch__36865__auto__ = (function (state_37337){
var state_val_37338 = (state_37337[(1)]);
if((state_val_37338 === (1))){
var inst_37332 = cljs.core.async.reduce(f__$1,init,ch);
var state_37337__$1 = state_37337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37337__$1,(2),inst_37332);
} else {
if((state_val_37338 === (2))){
var inst_37334 = (state_37337[(2)]);
var inst_37335 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_37334) : f__$1.call(null,inst_37334));
var state_37337__$1 = state_37337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37337__$1,inst_37335);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__36866__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36866__auto____0 = (function (){
var statearr_37339 = [null,null,null,null,null,null,null];
(statearr_37339[(0)] = cljs$core$async$transduce_$_state_machine__36866__auto__);

(statearr_37339[(1)] = (1));

return statearr_37339;
});
var cljs$core$async$transduce_$_state_machine__36866__auto____1 = (function (state_37337){
while(true){
var ret_value__36867__auto__ = (function (){try{while(true){
var result__36868__auto__ = switch__36865__auto__(state_37337);
if(cljs.core.keyword_identical_QMARK_(result__36868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36868__auto__;
}
break;
}
}catch (e37340){if((e37340 instanceof Object)){
var ex__36869__auto__ = e37340;
var statearr_37341_38580 = state_37337;
(statearr_37341_38580[(5)] = ex__36869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37340;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38581 = state_37337;
state_37337 = G__38581;
continue;
} else {
return ret_value__36867__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36866__auto__ = function(state_37337){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36866__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36866__auto____1.call(this,state_37337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36866__auto____0;
cljs$core$async$transduce_$_state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36866__auto____1;
return cljs$core$async$transduce_$_state_machine__36866__auto__;
})()
})();
var state__36935__auto__ = (function (){var statearr_37342 = (f__36934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36934__auto__.cljs$core$IFn$_invoke$arity$0() : f__36934__auto__.call(null));
(statearr_37342[(6)] = c__36933__auto__);

return statearr_37342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36935__auto__);
}));

return c__36933__auto__;
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
var G__37344 = arguments.length;
switch (G__37344) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__36933__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36934__auto__ = (function (){var switch__36865__auto__ = (function (state_37369){
var state_val_37370 = (state_37369[(1)]);
if((state_val_37370 === (7))){
var inst_37351 = (state_37369[(2)]);
var state_37369__$1 = state_37369;
var statearr_37371_38583 = state_37369__$1;
(statearr_37371_38583[(2)] = inst_37351);

(statearr_37371_38583[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37370 === (1))){
var inst_37345 = cljs.core.seq(coll);
var inst_37346 = inst_37345;
var state_37369__$1 = (function (){var statearr_37372 = state_37369;
(statearr_37372[(7)] = inst_37346);

return statearr_37372;
})();
var statearr_37373_38584 = state_37369__$1;
(statearr_37373_38584[(2)] = null);

(statearr_37373_38584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37370 === (4))){
var inst_37346 = (state_37369[(7)]);
var inst_37349 = cljs.core.first(inst_37346);
var state_37369__$1 = state_37369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37369__$1,(7),ch,inst_37349);
} else {
if((state_val_37370 === (13))){
var inst_37363 = (state_37369[(2)]);
var state_37369__$1 = state_37369;
var statearr_37374_38585 = state_37369__$1;
(statearr_37374_38585[(2)] = inst_37363);

(statearr_37374_38585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37370 === (6))){
var inst_37354 = (state_37369[(2)]);
var state_37369__$1 = state_37369;
if(cljs.core.truth_(inst_37354)){
var statearr_37375_38586 = state_37369__$1;
(statearr_37375_38586[(1)] = (8));

} else {
var statearr_37376_38587 = state_37369__$1;
(statearr_37376_38587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37370 === (3))){
var inst_37367 = (state_37369[(2)]);
var state_37369__$1 = state_37369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37369__$1,inst_37367);
} else {
if((state_val_37370 === (12))){
var state_37369__$1 = state_37369;
var statearr_37377_38588 = state_37369__$1;
(statearr_37377_38588[(2)] = null);

(statearr_37377_38588[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37370 === (2))){
var inst_37346 = (state_37369[(7)]);
var state_37369__$1 = state_37369;
if(cljs.core.truth_(inst_37346)){
var statearr_37378_38589 = state_37369__$1;
(statearr_37378_38589[(1)] = (4));

} else {
var statearr_37379_38590 = state_37369__$1;
(statearr_37379_38590[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37370 === (11))){
var inst_37360 = cljs.core.async.close_BANG_(ch);
var state_37369__$1 = state_37369;
var statearr_37380_38591 = state_37369__$1;
(statearr_37380_38591[(2)] = inst_37360);

(statearr_37380_38591[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37370 === (9))){
var state_37369__$1 = state_37369;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37381_38592 = state_37369__$1;
(statearr_37381_38592[(1)] = (11));

} else {
var statearr_37382_38593 = state_37369__$1;
(statearr_37382_38593[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37370 === (5))){
var inst_37346 = (state_37369[(7)]);
var state_37369__$1 = state_37369;
var statearr_37383_38594 = state_37369__$1;
(statearr_37383_38594[(2)] = inst_37346);

(statearr_37383_38594[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37370 === (10))){
var inst_37365 = (state_37369[(2)]);
var state_37369__$1 = state_37369;
var statearr_37384_38595 = state_37369__$1;
(statearr_37384_38595[(2)] = inst_37365);

(statearr_37384_38595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37370 === (8))){
var inst_37346 = (state_37369[(7)]);
var inst_37356 = cljs.core.next(inst_37346);
var inst_37346__$1 = inst_37356;
var state_37369__$1 = (function (){var statearr_37385 = state_37369;
(statearr_37385[(7)] = inst_37346__$1);

return statearr_37385;
})();
var statearr_37386_38596 = state_37369__$1;
(statearr_37386_38596[(2)] = null);

(statearr_37386_38596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__36866__auto__ = null;
var cljs$core$async$state_machine__36866__auto____0 = (function (){
var statearr_37387 = [null,null,null,null,null,null,null,null];
(statearr_37387[(0)] = cljs$core$async$state_machine__36866__auto__);

(statearr_37387[(1)] = (1));

return statearr_37387;
});
var cljs$core$async$state_machine__36866__auto____1 = (function (state_37369){
while(true){
var ret_value__36867__auto__ = (function (){try{while(true){
var result__36868__auto__ = switch__36865__auto__(state_37369);
if(cljs.core.keyword_identical_QMARK_(result__36868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36868__auto__;
}
break;
}
}catch (e37388){if((e37388 instanceof Object)){
var ex__36869__auto__ = e37388;
var statearr_37389_38597 = state_37369;
(statearr_37389_38597[(5)] = ex__36869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37388;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38598 = state_37369;
state_37369 = G__38598;
continue;
} else {
return ret_value__36867__auto__;
}
break;
}
});
cljs$core$async$state_machine__36866__auto__ = function(state_37369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36866__auto____1.call(this,state_37369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36866__auto____0;
cljs$core$async$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36866__auto____1;
return cljs$core$async$state_machine__36866__auto__;
})()
})();
var state__36935__auto__ = (function (){var statearr_37390 = (f__36934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36934__auto__.cljs$core$IFn$_invoke$arity$0() : f__36934__auto__.call(null));
(statearr_37390[(6)] = c__36933__auto__);

return statearr_37390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36935__auto__);
}));

return c__36933__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

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
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37391 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37391 = (function (ch,cs,meta37392){
this.ch = ch;
this.cs = cs;
this.meta37392 = meta37392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37393,meta37392__$1){
var self__ = this;
var _37393__$1 = this;
return (new cljs.core.async.t_cljs$core$async37391(self__.ch,self__.cs,meta37392__$1));
}));

(cljs.core.async.t_cljs$core$async37391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37393){
var self__ = this;
var _37393__$1 = this;
return self__.meta37392;
}));

(cljs.core.async.t_cljs$core$async37391.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37391.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37391.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37391.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async37391.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async37391.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async37391.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37392","meta37392",-156812351,null)], null);
}));

(cljs.core.async.t_cljs$core$async37391.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37391.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37391");

(cljs.core.async.t_cljs$core$async37391.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37391");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37391.
 */
cljs.core.async.__GT_t_cljs$core$async37391 = (function cljs$core$async$mult_$___GT_t_cljs$core$async37391(ch__$1,cs__$1,meta37392){
return (new cljs.core.async.t_cljs$core$async37391(ch__$1,cs__$1,meta37392));
});

}

return (new cljs.core.async.t_cljs$core$async37391(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__36933__auto___38599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36934__auto__ = (function (){var switch__36865__auto__ = (function (state_37528){
var state_val_37529 = (state_37528[(1)]);
if((state_val_37529 === (7))){
var inst_37524 = (state_37528[(2)]);
var state_37528__$1 = state_37528;
var statearr_37530_38600 = state_37528__$1;
(statearr_37530_38600[(2)] = inst_37524);

(statearr_37530_38600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (20))){
var inst_37427 = (state_37528[(7)]);
var inst_37439 = cljs.core.first(inst_37427);
var inst_37440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37439,(0),null);
var inst_37441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37439,(1),null);
var state_37528__$1 = (function (){var statearr_37531 = state_37528;
(statearr_37531[(8)] = inst_37440);

return statearr_37531;
})();
if(cljs.core.truth_(inst_37441)){
var statearr_37532_38601 = state_37528__$1;
(statearr_37532_38601[(1)] = (22));

} else {
var statearr_37533_38602 = state_37528__$1;
(statearr_37533_38602[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (27))){
var inst_37469 = (state_37528[(9)]);
var inst_37476 = (state_37528[(10)]);
var inst_37396 = (state_37528[(11)]);
var inst_37471 = (state_37528[(12)]);
var inst_37476__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37469,inst_37471);
var inst_37477 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37476__$1,inst_37396,done);
var state_37528__$1 = (function (){var statearr_37534 = state_37528;
(statearr_37534[(10)] = inst_37476__$1);

return statearr_37534;
})();
if(cljs.core.truth_(inst_37477)){
var statearr_37535_38603 = state_37528__$1;
(statearr_37535_38603[(1)] = (30));

} else {
var statearr_37536_38604 = state_37528__$1;
(statearr_37536_38604[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (1))){
var state_37528__$1 = state_37528;
var statearr_37537_38605 = state_37528__$1;
(statearr_37537_38605[(2)] = null);

(statearr_37537_38605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (24))){
var inst_37427 = (state_37528[(7)]);
var inst_37446 = (state_37528[(2)]);
var inst_37447 = cljs.core.next(inst_37427);
var inst_37405 = inst_37447;
var inst_37406 = null;
var inst_37407 = (0);
var inst_37408 = (0);
var state_37528__$1 = (function (){var statearr_37538 = state_37528;
(statearr_37538[(13)] = inst_37408);

(statearr_37538[(14)] = inst_37406);

(statearr_37538[(15)] = inst_37446);

(statearr_37538[(16)] = inst_37405);

(statearr_37538[(17)] = inst_37407);

return statearr_37538;
})();
var statearr_37539_38606 = state_37528__$1;
(statearr_37539_38606[(2)] = null);

(statearr_37539_38606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (39))){
var state_37528__$1 = state_37528;
var statearr_37543_38607 = state_37528__$1;
(statearr_37543_38607[(2)] = null);

(statearr_37543_38607[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (4))){
var inst_37396 = (state_37528[(11)]);
var inst_37396__$1 = (state_37528[(2)]);
var inst_37397 = (inst_37396__$1 == null);
var state_37528__$1 = (function (){var statearr_37544 = state_37528;
(statearr_37544[(11)] = inst_37396__$1);

return statearr_37544;
})();
if(cljs.core.truth_(inst_37397)){
var statearr_37545_38608 = state_37528__$1;
(statearr_37545_38608[(1)] = (5));

} else {
var statearr_37546_38609 = state_37528__$1;
(statearr_37546_38609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (15))){
var inst_37408 = (state_37528[(13)]);
var inst_37406 = (state_37528[(14)]);
var inst_37405 = (state_37528[(16)]);
var inst_37407 = (state_37528[(17)]);
var inst_37423 = (state_37528[(2)]);
var inst_37424 = (inst_37408 + (1));
var tmp37540 = inst_37406;
var tmp37541 = inst_37405;
var tmp37542 = inst_37407;
var inst_37405__$1 = tmp37541;
var inst_37406__$1 = tmp37540;
var inst_37407__$1 = tmp37542;
var inst_37408__$1 = inst_37424;
var state_37528__$1 = (function (){var statearr_37547 = state_37528;
(statearr_37547[(13)] = inst_37408__$1);

(statearr_37547[(14)] = inst_37406__$1);

(statearr_37547[(18)] = inst_37423);

(statearr_37547[(16)] = inst_37405__$1);

(statearr_37547[(17)] = inst_37407__$1);

return statearr_37547;
})();
var statearr_37548_38610 = state_37528__$1;
(statearr_37548_38610[(2)] = null);

(statearr_37548_38610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (21))){
var inst_37450 = (state_37528[(2)]);
var state_37528__$1 = state_37528;
var statearr_37552_38611 = state_37528__$1;
(statearr_37552_38611[(2)] = inst_37450);

(statearr_37552_38611[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (31))){
var inst_37476 = (state_37528[(10)]);
var inst_37480 = done(null);
var inst_37481 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37476);
var state_37528__$1 = (function (){var statearr_37553 = state_37528;
(statearr_37553[(19)] = inst_37480);

return statearr_37553;
})();
var statearr_37554_38612 = state_37528__$1;
(statearr_37554_38612[(2)] = inst_37481);

(statearr_37554_38612[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (32))){
var inst_37469 = (state_37528[(9)]);
var inst_37470 = (state_37528[(20)]);
var inst_37468 = (state_37528[(21)]);
var inst_37471 = (state_37528[(12)]);
var inst_37483 = (state_37528[(2)]);
var inst_37484 = (inst_37471 + (1));
var tmp37549 = inst_37469;
var tmp37550 = inst_37470;
var tmp37551 = inst_37468;
var inst_37468__$1 = tmp37551;
var inst_37469__$1 = tmp37549;
var inst_37470__$1 = tmp37550;
var inst_37471__$1 = inst_37484;
var state_37528__$1 = (function (){var statearr_37555 = state_37528;
(statearr_37555[(9)] = inst_37469__$1);

(statearr_37555[(20)] = inst_37470__$1);

(statearr_37555[(21)] = inst_37468__$1);

(statearr_37555[(12)] = inst_37471__$1);

(statearr_37555[(22)] = inst_37483);

return statearr_37555;
})();
var statearr_37556_38613 = state_37528__$1;
(statearr_37556_38613[(2)] = null);

(statearr_37556_38613[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (40))){
var inst_37496 = (state_37528[(23)]);
var inst_37500 = done(null);
var inst_37501 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37496);
var state_37528__$1 = (function (){var statearr_37557 = state_37528;
(statearr_37557[(24)] = inst_37500);

return statearr_37557;
})();
var statearr_37558_38614 = state_37528__$1;
(statearr_37558_38614[(2)] = inst_37501);

(statearr_37558_38614[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (33))){
var inst_37487 = (state_37528[(25)]);
var inst_37489 = cljs.core.chunked_seq_QMARK_(inst_37487);
var state_37528__$1 = state_37528;
if(inst_37489){
var statearr_37559_38615 = state_37528__$1;
(statearr_37559_38615[(1)] = (36));

} else {
var statearr_37560_38616 = state_37528__$1;
(statearr_37560_38616[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (13))){
var inst_37417 = (state_37528[(26)]);
var inst_37420 = cljs.core.async.close_BANG_(inst_37417);
var state_37528__$1 = state_37528;
var statearr_37561_38617 = state_37528__$1;
(statearr_37561_38617[(2)] = inst_37420);

(statearr_37561_38617[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (22))){
var inst_37440 = (state_37528[(8)]);
var inst_37443 = cljs.core.async.close_BANG_(inst_37440);
var state_37528__$1 = state_37528;
var statearr_37562_38618 = state_37528__$1;
(statearr_37562_38618[(2)] = inst_37443);

(statearr_37562_38618[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (36))){
var inst_37487 = (state_37528[(25)]);
var inst_37491 = cljs.core.chunk_first(inst_37487);
var inst_37492 = cljs.core.chunk_rest(inst_37487);
var inst_37493 = cljs.core.count(inst_37491);
var inst_37468 = inst_37492;
var inst_37469 = inst_37491;
var inst_37470 = inst_37493;
var inst_37471 = (0);
var state_37528__$1 = (function (){var statearr_37563 = state_37528;
(statearr_37563[(9)] = inst_37469);

(statearr_37563[(20)] = inst_37470);

(statearr_37563[(21)] = inst_37468);

(statearr_37563[(12)] = inst_37471);

return statearr_37563;
})();
var statearr_37564_38619 = state_37528__$1;
(statearr_37564_38619[(2)] = null);

(statearr_37564_38619[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (41))){
var inst_37487 = (state_37528[(25)]);
var inst_37503 = (state_37528[(2)]);
var inst_37504 = cljs.core.next(inst_37487);
var inst_37468 = inst_37504;
var inst_37469 = null;
var inst_37470 = (0);
var inst_37471 = (0);
var state_37528__$1 = (function (){var statearr_37565 = state_37528;
(statearr_37565[(9)] = inst_37469);

(statearr_37565[(27)] = inst_37503);

(statearr_37565[(20)] = inst_37470);

(statearr_37565[(21)] = inst_37468);

(statearr_37565[(12)] = inst_37471);

return statearr_37565;
})();
var statearr_37566_38620 = state_37528__$1;
(statearr_37566_38620[(2)] = null);

(statearr_37566_38620[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (43))){
var state_37528__$1 = state_37528;
var statearr_37567_38621 = state_37528__$1;
(statearr_37567_38621[(2)] = null);

(statearr_37567_38621[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (29))){
var inst_37512 = (state_37528[(2)]);
var state_37528__$1 = state_37528;
var statearr_37568_38622 = state_37528__$1;
(statearr_37568_38622[(2)] = inst_37512);

(statearr_37568_38622[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (44))){
var inst_37521 = (state_37528[(2)]);
var state_37528__$1 = (function (){var statearr_37569 = state_37528;
(statearr_37569[(28)] = inst_37521);

return statearr_37569;
})();
var statearr_37570_38623 = state_37528__$1;
(statearr_37570_38623[(2)] = null);

(statearr_37570_38623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (6))){
var inst_37460 = (state_37528[(29)]);
var inst_37459 = cljs.core.deref(cs);
var inst_37460__$1 = cljs.core.keys(inst_37459);
var inst_37461 = cljs.core.count(inst_37460__$1);
var inst_37462 = cljs.core.reset_BANG_(dctr,inst_37461);
var inst_37467 = cljs.core.seq(inst_37460__$1);
var inst_37468 = inst_37467;
var inst_37469 = null;
var inst_37470 = (0);
var inst_37471 = (0);
var state_37528__$1 = (function (){var statearr_37571 = state_37528;
(statearr_37571[(9)] = inst_37469);

(statearr_37571[(20)] = inst_37470);

(statearr_37571[(30)] = inst_37462);

(statearr_37571[(21)] = inst_37468);

(statearr_37571[(12)] = inst_37471);

(statearr_37571[(29)] = inst_37460__$1);

return statearr_37571;
})();
var statearr_37572_38624 = state_37528__$1;
(statearr_37572_38624[(2)] = null);

(statearr_37572_38624[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (28))){
var inst_37487 = (state_37528[(25)]);
var inst_37468 = (state_37528[(21)]);
var inst_37487__$1 = cljs.core.seq(inst_37468);
var state_37528__$1 = (function (){var statearr_37573 = state_37528;
(statearr_37573[(25)] = inst_37487__$1);

return statearr_37573;
})();
if(inst_37487__$1){
var statearr_37574_38625 = state_37528__$1;
(statearr_37574_38625[(1)] = (33));

} else {
var statearr_37575_38626 = state_37528__$1;
(statearr_37575_38626[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (25))){
var inst_37470 = (state_37528[(20)]);
var inst_37471 = (state_37528[(12)]);
var inst_37473 = (inst_37471 < inst_37470);
var inst_37474 = inst_37473;
var state_37528__$1 = state_37528;
if(cljs.core.truth_(inst_37474)){
var statearr_37576_38627 = state_37528__$1;
(statearr_37576_38627[(1)] = (27));

} else {
var statearr_37577_38630 = state_37528__$1;
(statearr_37577_38630[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (34))){
var state_37528__$1 = state_37528;
var statearr_37578_38631 = state_37528__$1;
(statearr_37578_38631[(2)] = null);

(statearr_37578_38631[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (17))){
var state_37528__$1 = state_37528;
var statearr_37579_38632 = state_37528__$1;
(statearr_37579_38632[(2)] = null);

(statearr_37579_38632[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (3))){
var inst_37526 = (state_37528[(2)]);
var state_37528__$1 = state_37528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37528__$1,inst_37526);
} else {
if((state_val_37529 === (12))){
var inst_37455 = (state_37528[(2)]);
var state_37528__$1 = state_37528;
var statearr_37580_38633 = state_37528__$1;
(statearr_37580_38633[(2)] = inst_37455);

(statearr_37580_38633[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (2))){
var state_37528__$1 = state_37528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37528__$1,(4),ch);
} else {
if((state_val_37529 === (23))){
var state_37528__$1 = state_37528;
var statearr_37581_38634 = state_37528__$1;
(statearr_37581_38634[(2)] = null);

(statearr_37581_38634[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (35))){
var inst_37510 = (state_37528[(2)]);
var state_37528__$1 = state_37528;
var statearr_37582_38635 = state_37528__$1;
(statearr_37582_38635[(2)] = inst_37510);

(statearr_37582_38635[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (19))){
var inst_37427 = (state_37528[(7)]);
var inst_37431 = cljs.core.chunk_first(inst_37427);
var inst_37432 = cljs.core.chunk_rest(inst_37427);
var inst_37433 = cljs.core.count(inst_37431);
var inst_37405 = inst_37432;
var inst_37406 = inst_37431;
var inst_37407 = inst_37433;
var inst_37408 = (0);
var state_37528__$1 = (function (){var statearr_37583 = state_37528;
(statearr_37583[(13)] = inst_37408);

(statearr_37583[(14)] = inst_37406);

(statearr_37583[(16)] = inst_37405);

(statearr_37583[(17)] = inst_37407);

return statearr_37583;
})();
var statearr_37584_38636 = state_37528__$1;
(statearr_37584_38636[(2)] = null);

(statearr_37584_38636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (11))){
var inst_37427 = (state_37528[(7)]);
var inst_37405 = (state_37528[(16)]);
var inst_37427__$1 = cljs.core.seq(inst_37405);
var state_37528__$1 = (function (){var statearr_37585 = state_37528;
(statearr_37585[(7)] = inst_37427__$1);

return statearr_37585;
})();
if(inst_37427__$1){
var statearr_37586_38637 = state_37528__$1;
(statearr_37586_38637[(1)] = (16));

} else {
var statearr_37587_38638 = state_37528__$1;
(statearr_37587_38638[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (9))){
var inst_37457 = (state_37528[(2)]);
var state_37528__$1 = state_37528;
var statearr_37588_38639 = state_37528__$1;
(statearr_37588_38639[(2)] = inst_37457);

(statearr_37588_38639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (5))){
var inst_37403 = cljs.core.deref(cs);
var inst_37404 = cljs.core.seq(inst_37403);
var inst_37405 = inst_37404;
var inst_37406 = null;
var inst_37407 = (0);
var inst_37408 = (0);
var state_37528__$1 = (function (){var statearr_37589 = state_37528;
(statearr_37589[(13)] = inst_37408);

(statearr_37589[(14)] = inst_37406);

(statearr_37589[(16)] = inst_37405);

(statearr_37589[(17)] = inst_37407);

return statearr_37589;
})();
var statearr_37590_38640 = state_37528__$1;
(statearr_37590_38640[(2)] = null);

(statearr_37590_38640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (14))){
var state_37528__$1 = state_37528;
var statearr_37591_38643 = state_37528__$1;
(statearr_37591_38643[(2)] = null);

(statearr_37591_38643[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (45))){
var inst_37518 = (state_37528[(2)]);
var state_37528__$1 = state_37528;
var statearr_37592_38644 = state_37528__$1;
(statearr_37592_38644[(2)] = inst_37518);

(statearr_37592_38644[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (26))){
var inst_37460 = (state_37528[(29)]);
var inst_37514 = (state_37528[(2)]);
var inst_37515 = cljs.core.seq(inst_37460);
var state_37528__$1 = (function (){var statearr_37593 = state_37528;
(statearr_37593[(31)] = inst_37514);

return statearr_37593;
})();
if(inst_37515){
var statearr_37594_38647 = state_37528__$1;
(statearr_37594_38647[(1)] = (42));

} else {
var statearr_37595_38648 = state_37528__$1;
(statearr_37595_38648[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (16))){
var inst_37427 = (state_37528[(7)]);
var inst_37429 = cljs.core.chunked_seq_QMARK_(inst_37427);
var state_37528__$1 = state_37528;
if(inst_37429){
var statearr_37596_38651 = state_37528__$1;
(statearr_37596_38651[(1)] = (19));

} else {
var statearr_37597_38652 = state_37528__$1;
(statearr_37597_38652[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (38))){
var inst_37507 = (state_37528[(2)]);
var state_37528__$1 = state_37528;
var statearr_37598_38653 = state_37528__$1;
(statearr_37598_38653[(2)] = inst_37507);

(statearr_37598_38653[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (30))){
var state_37528__$1 = state_37528;
var statearr_37599_38654 = state_37528__$1;
(statearr_37599_38654[(2)] = null);

(statearr_37599_38654[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (10))){
var inst_37408 = (state_37528[(13)]);
var inst_37406 = (state_37528[(14)]);
var inst_37416 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37406,inst_37408);
var inst_37417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37416,(0),null);
var inst_37418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37416,(1),null);
var state_37528__$1 = (function (){var statearr_37600 = state_37528;
(statearr_37600[(26)] = inst_37417);

return statearr_37600;
})();
if(cljs.core.truth_(inst_37418)){
var statearr_37601_38657 = state_37528__$1;
(statearr_37601_38657[(1)] = (13));

} else {
var statearr_37602_38658 = state_37528__$1;
(statearr_37602_38658[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (18))){
var inst_37453 = (state_37528[(2)]);
var state_37528__$1 = state_37528;
var statearr_37603_38659 = state_37528__$1;
(statearr_37603_38659[(2)] = inst_37453);

(statearr_37603_38659[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (42))){
var state_37528__$1 = state_37528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37528__$1,(45),dchan);
} else {
if((state_val_37529 === (37))){
var inst_37496 = (state_37528[(23)]);
var inst_37487 = (state_37528[(25)]);
var inst_37396 = (state_37528[(11)]);
var inst_37496__$1 = cljs.core.first(inst_37487);
var inst_37497 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37496__$1,inst_37396,done);
var state_37528__$1 = (function (){var statearr_37604 = state_37528;
(statearr_37604[(23)] = inst_37496__$1);

return statearr_37604;
})();
if(cljs.core.truth_(inst_37497)){
var statearr_37605_38660 = state_37528__$1;
(statearr_37605_38660[(1)] = (39));

} else {
var statearr_37606_38661 = state_37528__$1;
(statearr_37606_38661[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37529 === (8))){
var inst_37408 = (state_37528[(13)]);
var inst_37407 = (state_37528[(17)]);
var inst_37410 = (inst_37408 < inst_37407);
var inst_37411 = inst_37410;
var state_37528__$1 = state_37528;
if(cljs.core.truth_(inst_37411)){
var statearr_37607_38662 = state_37528__$1;
(statearr_37607_38662[(1)] = (10));

} else {
var statearr_37608_38663 = state_37528__$1;
(statearr_37608_38663[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$mult_$_state_machine__36866__auto__ = null;
var cljs$core$async$mult_$_state_machine__36866__auto____0 = (function (){
var statearr_37609 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37609[(0)] = cljs$core$async$mult_$_state_machine__36866__auto__);

(statearr_37609[(1)] = (1));

return statearr_37609;
});
var cljs$core$async$mult_$_state_machine__36866__auto____1 = (function (state_37528){
while(true){
var ret_value__36867__auto__ = (function (){try{while(true){
var result__36868__auto__ = switch__36865__auto__(state_37528);
if(cljs.core.keyword_identical_QMARK_(result__36868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36868__auto__;
}
break;
}
}catch (e37610){if((e37610 instanceof Object)){
var ex__36869__auto__ = e37610;
var statearr_37611_38666 = state_37528;
(statearr_37611_38666[(5)] = ex__36869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37610;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38667 = state_37528;
state_37528 = G__38667;
continue;
} else {
return ret_value__36867__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36866__auto__ = function(state_37528){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36866__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36866__auto____1.call(this,state_37528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36866__auto____0;
cljs$core$async$mult_$_state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36866__auto____1;
return cljs$core$async$mult_$_state_machine__36866__auto__;
})()
})();
var state__36935__auto__ = (function (){var statearr_37612 = (f__36934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36934__auto__.cljs$core$IFn$_invoke$arity$0() : f__36934__auto__.call(null));
(statearr_37612[(6)] = c__36933__auto___38599);

return statearr_37612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36935__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__37614 = arguments.length;
switch (G__37614) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38672 = arguments.length;
var i__4790__auto___38673 = (0);
while(true){
if((i__4790__auto___38673 < len__4789__auto___38672)){
args__4795__auto__.push((arguments[i__4790__auto___38673]));

var G__38674 = (i__4790__auto___38673 + (1));
i__4790__auto___38673 = G__38674;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37619){
var map__37620 = p__37619;
var map__37620__$1 = (((((!((map__37620 == null))))?(((((map__37620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37620):map__37620);
var opts = map__37620__$1;
var statearr_37622_38675 = state;
(statearr_37622_38675[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_37623_38676 = state;
(statearr_37623_38676[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_37624_38677 = state;
(statearr_37624_38677[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37615){
var G__37616 = cljs.core.first(seq37615);
var seq37615__$1 = cljs.core.next(seq37615);
var G__37617 = cljs.core.first(seq37615__$1);
var seq37615__$2 = cljs.core.next(seq37615__$1);
var G__37618 = cljs.core.first(seq37615__$2);
var seq37615__$3 = cljs.core.next(seq37615__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37616,G__37617,G__37618,seq37615__$3);
}));

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
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37625 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37625 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37626){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37626 = meta37626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37627,meta37626__$1){
var self__ = this;
var _37627__$1 = this;
return (new cljs.core.async.t_cljs$core$async37625(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37626__$1));
}));

(cljs.core.async.t_cljs$core$async37625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37627){
var self__ = this;
var _37627__$1 = this;
return self__.meta37626;
}));

(cljs.core.async.t_cljs$core$async37625.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37625.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async37625.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37625.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37625.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37625.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37625.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37625.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37625.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37626","meta37626",-946386260,null)], null);
}));

(cljs.core.async.t_cljs$core$async37625.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37625.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37625");

(cljs.core.async.t_cljs$core$async37625.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37625");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37625.
 */
cljs.core.async.__GT_t_cljs$core$async37625 = (function cljs$core$async$mix_$___GT_t_cljs$core$async37625(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37626){
return (new cljs.core.async.t_cljs$core$async37625(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37626));
});

}

return (new cljs.core.async.t_cljs$core$async37625(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36933__auto___38691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36934__auto__ = (function (){var switch__36865__auto__ = (function (state_37729){
var state_val_37730 = (state_37729[(1)]);
if((state_val_37730 === (7))){
var inst_37644 = (state_37729[(2)]);
var state_37729__$1 = state_37729;
var statearr_37731_38692 = state_37729__$1;
(statearr_37731_38692[(2)] = inst_37644);

(statearr_37731_38692[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (20))){
var inst_37656 = (state_37729[(7)]);
var state_37729__$1 = state_37729;
var statearr_37732_38693 = state_37729__$1;
(statearr_37732_38693[(2)] = inst_37656);

(statearr_37732_38693[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (27))){
var state_37729__$1 = state_37729;
var statearr_37733_38694 = state_37729__$1;
(statearr_37733_38694[(2)] = null);

(statearr_37733_38694[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (1))){
var inst_37631 = (state_37729[(8)]);
var inst_37631__$1 = calc_state();
var inst_37633 = (inst_37631__$1 == null);
var inst_37634 = cljs.core.not(inst_37633);
var state_37729__$1 = (function (){var statearr_37734 = state_37729;
(statearr_37734[(8)] = inst_37631__$1);

return statearr_37734;
})();
if(inst_37634){
var statearr_37735_38695 = state_37729__$1;
(statearr_37735_38695[(1)] = (2));

} else {
var statearr_37736_38696 = state_37729__$1;
(statearr_37736_38696[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (24))){
var inst_37680 = (state_37729[(9)]);
var inst_37703 = (state_37729[(10)]);
var inst_37689 = (state_37729[(11)]);
var inst_37703__$1 = (inst_37680.cljs$core$IFn$_invoke$arity$1 ? inst_37680.cljs$core$IFn$_invoke$arity$1(inst_37689) : inst_37680.call(null,inst_37689));
var state_37729__$1 = (function (){var statearr_37737 = state_37729;
(statearr_37737[(10)] = inst_37703__$1);

return statearr_37737;
})();
if(cljs.core.truth_(inst_37703__$1)){
var statearr_37738_38700 = state_37729__$1;
(statearr_37738_38700[(1)] = (29));

} else {
var statearr_37739_38701 = state_37729__$1;
(statearr_37739_38701[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (4))){
var inst_37647 = (state_37729[(2)]);
var state_37729__$1 = state_37729;
if(cljs.core.truth_(inst_37647)){
var statearr_37740_38702 = state_37729__$1;
(statearr_37740_38702[(1)] = (8));

} else {
var statearr_37741_38703 = state_37729__$1;
(statearr_37741_38703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (15))){
var inst_37674 = (state_37729[(2)]);
var state_37729__$1 = state_37729;
if(cljs.core.truth_(inst_37674)){
var statearr_37742_38704 = state_37729__$1;
(statearr_37742_38704[(1)] = (19));

} else {
var statearr_37743_38705 = state_37729__$1;
(statearr_37743_38705[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (21))){
var inst_37679 = (state_37729[(12)]);
var inst_37679__$1 = (state_37729[(2)]);
var inst_37680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37679__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37679__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37679__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37729__$1 = (function (){var statearr_37744 = state_37729;
(statearr_37744[(12)] = inst_37679__$1);

(statearr_37744[(9)] = inst_37680);

(statearr_37744[(13)] = inst_37681);

return statearr_37744;
})();
return cljs.core.async.ioc_alts_BANG_(state_37729__$1,(22),inst_37682);
} else {
if((state_val_37730 === (31))){
var inst_37711 = (state_37729[(2)]);
var state_37729__$1 = state_37729;
if(cljs.core.truth_(inst_37711)){
var statearr_37745_38706 = state_37729__$1;
(statearr_37745_38706[(1)] = (32));

} else {
var statearr_37746_38707 = state_37729__$1;
(statearr_37746_38707[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (32))){
var inst_37688 = (state_37729[(14)]);
var state_37729__$1 = state_37729;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37729__$1,(35),out,inst_37688);
} else {
if((state_val_37730 === (33))){
var inst_37679 = (state_37729[(12)]);
var inst_37656 = inst_37679;
var state_37729__$1 = (function (){var statearr_37747 = state_37729;
(statearr_37747[(7)] = inst_37656);

return statearr_37747;
})();
var statearr_37748_38708 = state_37729__$1;
(statearr_37748_38708[(2)] = null);

(statearr_37748_38708[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (13))){
var inst_37656 = (state_37729[(7)]);
var inst_37663 = inst_37656.cljs$lang$protocol_mask$partition0$;
var inst_37664 = (inst_37663 & (64));
var inst_37665 = inst_37656.cljs$core$ISeq$;
var inst_37666 = (cljs.core.PROTOCOL_SENTINEL === inst_37665);
var inst_37667 = ((inst_37664) || (inst_37666));
var state_37729__$1 = state_37729;
if(cljs.core.truth_(inst_37667)){
var statearr_37749_38711 = state_37729__$1;
(statearr_37749_38711[(1)] = (16));

} else {
var statearr_37750_38712 = state_37729__$1;
(statearr_37750_38712[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (22))){
var inst_37688 = (state_37729[(14)]);
var inst_37689 = (state_37729[(11)]);
var inst_37687 = (state_37729[(2)]);
var inst_37688__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37687,(0),null);
var inst_37689__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37687,(1),null);
var inst_37690 = (inst_37688__$1 == null);
var inst_37691 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37689__$1,change);
var inst_37692 = ((inst_37690) || (inst_37691));
var state_37729__$1 = (function (){var statearr_37751 = state_37729;
(statearr_37751[(14)] = inst_37688__$1);

(statearr_37751[(11)] = inst_37689__$1);

return statearr_37751;
})();
if(cljs.core.truth_(inst_37692)){
var statearr_37752_38713 = state_37729__$1;
(statearr_37752_38713[(1)] = (23));

} else {
var statearr_37753_38714 = state_37729__$1;
(statearr_37753_38714[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (36))){
var inst_37679 = (state_37729[(12)]);
var inst_37656 = inst_37679;
var state_37729__$1 = (function (){var statearr_37754 = state_37729;
(statearr_37754[(7)] = inst_37656);

return statearr_37754;
})();
var statearr_37755_38715 = state_37729__$1;
(statearr_37755_38715[(2)] = null);

(statearr_37755_38715[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (29))){
var inst_37703 = (state_37729[(10)]);
var state_37729__$1 = state_37729;
var statearr_37756_38716 = state_37729__$1;
(statearr_37756_38716[(2)] = inst_37703);

(statearr_37756_38716[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (6))){
var state_37729__$1 = state_37729;
var statearr_37757_38717 = state_37729__$1;
(statearr_37757_38717[(2)] = false);

(statearr_37757_38717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (28))){
var inst_37699 = (state_37729[(2)]);
var inst_37700 = calc_state();
var inst_37656 = inst_37700;
var state_37729__$1 = (function (){var statearr_37758 = state_37729;
(statearr_37758[(7)] = inst_37656);

(statearr_37758[(15)] = inst_37699);

return statearr_37758;
})();
var statearr_37759_38718 = state_37729__$1;
(statearr_37759_38718[(2)] = null);

(statearr_37759_38718[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (25))){
var inst_37725 = (state_37729[(2)]);
var state_37729__$1 = state_37729;
var statearr_37760_38719 = state_37729__$1;
(statearr_37760_38719[(2)] = inst_37725);

(statearr_37760_38719[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (34))){
var inst_37723 = (state_37729[(2)]);
var state_37729__$1 = state_37729;
var statearr_37761_38720 = state_37729__$1;
(statearr_37761_38720[(2)] = inst_37723);

(statearr_37761_38720[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (17))){
var state_37729__$1 = state_37729;
var statearr_37762_38721 = state_37729__$1;
(statearr_37762_38721[(2)] = false);

(statearr_37762_38721[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (3))){
var state_37729__$1 = state_37729;
var statearr_37763_38722 = state_37729__$1;
(statearr_37763_38722[(2)] = false);

(statearr_37763_38722[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (12))){
var inst_37727 = (state_37729[(2)]);
var state_37729__$1 = state_37729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37729__$1,inst_37727);
} else {
if((state_val_37730 === (2))){
var inst_37631 = (state_37729[(8)]);
var inst_37636 = inst_37631.cljs$lang$protocol_mask$partition0$;
var inst_37637 = (inst_37636 & (64));
var inst_37638 = inst_37631.cljs$core$ISeq$;
var inst_37639 = (cljs.core.PROTOCOL_SENTINEL === inst_37638);
var inst_37640 = ((inst_37637) || (inst_37639));
var state_37729__$1 = state_37729;
if(cljs.core.truth_(inst_37640)){
var statearr_37764_38723 = state_37729__$1;
(statearr_37764_38723[(1)] = (5));

} else {
var statearr_37765_38724 = state_37729__$1;
(statearr_37765_38724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (23))){
var inst_37688 = (state_37729[(14)]);
var inst_37694 = (inst_37688 == null);
var state_37729__$1 = state_37729;
if(cljs.core.truth_(inst_37694)){
var statearr_37766_38725 = state_37729__$1;
(statearr_37766_38725[(1)] = (26));

} else {
var statearr_37767_38726 = state_37729__$1;
(statearr_37767_38726[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (35))){
var inst_37714 = (state_37729[(2)]);
var state_37729__$1 = state_37729;
if(cljs.core.truth_(inst_37714)){
var statearr_37768_38727 = state_37729__$1;
(statearr_37768_38727[(1)] = (36));

} else {
var statearr_37769_38728 = state_37729__$1;
(statearr_37769_38728[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (19))){
var inst_37656 = (state_37729[(7)]);
var inst_37676 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37656);
var state_37729__$1 = state_37729;
var statearr_37770_38729 = state_37729__$1;
(statearr_37770_38729[(2)] = inst_37676);

(statearr_37770_38729[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (11))){
var inst_37656 = (state_37729[(7)]);
var inst_37660 = (inst_37656 == null);
var inst_37661 = cljs.core.not(inst_37660);
var state_37729__$1 = state_37729;
if(inst_37661){
var statearr_37771_38730 = state_37729__$1;
(statearr_37771_38730[(1)] = (13));

} else {
var statearr_37772_38731 = state_37729__$1;
(statearr_37772_38731[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (9))){
var inst_37631 = (state_37729[(8)]);
var state_37729__$1 = state_37729;
var statearr_37773_38732 = state_37729__$1;
(statearr_37773_38732[(2)] = inst_37631);

(statearr_37773_38732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (5))){
var state_37729__$1 = state_37729;
var statearr_37774_38733 = state_37729__$1;
(statearr_37774_38733[(2)] = true);

(statearr_37774_38733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (14))){
var state_37729__$1 = state_37729;
var statearr_37775_38734 = state_37729__$1;
(statearr_37775_38734[(2)] = false);

(statearr_37775_38734[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (26))){
var inst_37689 = (state_37729[(11)]);
var inst_37696 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37689);
var state_37729__$1 = state_37729;
var statearr_37776_38735 = state_37729__$1;
(statearr_37776_38735[(2)] = inst_37696);

(statearr_37776_38735[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (16))){
var state_37729__$1 = state_37729;
var statearr_37777_38736 = state_37729__$1;
(statearr_37777_38736[(2)] = true);

(statearr_37777_38736[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (38))){
var inst_37719 = (state_37729[(2)]);
var state_37729__$1 = state_37729;
var statearr_37778_38737 = state_37729__$1;
(statearr_37778_38737[(2)] = inst_37719);

(statearr_37778_38737[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (30))){
var inst_37680 = (state_37729[(9)]);
var inst_37681 = (state_37729[(13)]);
var inst_37689 = (state_37729[(11)]);
var inst_37706 = cljs.core.empty_QMARK_(inst_37680);
var inst_37707 = (inst_37681.cljs$core$IFn$_invoke$arity$1 ? inst_37681.cljs$core$IFn$_invoke$arity$1(inst_37689) : inst_37681.call(null,inst_37689));
var inst_37708 = cljs.core.not(inst_37707);
var inst_37709 = ((inst_37706) && (inst_37708));
var state_37729__$1 = state_37729;
var statearr_37779_38738 = state_37729__$1;
(statearr_37779_38738[(2)] = inst_37709);

(statearr_37779_38738[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (10))){
var inst_37631 = (state_37729[(8)]);
var inst_37652 = (state_37729[(2)]);
var inst_37653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37652,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37652,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37652,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37656 = inst_37631;
var state_37729__$1 = (function (){var statearr_37780 = state_37729;
(statearr_37780[(16)] = inst_37654);

(statearr_37780[(7)] = inst_37656);

(statearr_37780[(17)] = inst_37653);

(statearr_37780[(18)] = inst_37655);

return statearr_37780;
})();
var statearr_37781_38745 = state_37729__$1;
(statearr_37781_38745[(2)] = null);

(statearr_37781_38745[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (18))){
var inst_37671 = (state_37729[(2)]);
var state_37729__$1 = state_37729;
var statearr_37782_38746 = state_37729__$1;
(statearr_37782_38746[(2)] = inst_37671);

(statearr_37782_38746[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (37))){
var state_37729__$1 = state_37729;
var statearr_37783_38747 = state_37729__$1;
(statearr_37783_38747[(2)] = null);

(statearr_37783_38747[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37730 === (8))){
var inst_37631 = (state_37729[(8)]);
var inst_37649 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37631);
var state_37729__$1 = state_37729;
var statearr_37784_38748 = state_37729__$1;
(statearr_37784_38748[(2)] = inst_37649);

(statearr_37784_38748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$mix_$_state_machine__36866__auto__ = null;
var cljs$core$async$mix_$_state_machine__36866__auto____0 = (function (){
var statearr_37785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37785[(0)] = cljs$core$async$mix_$_state_machine__36866__auto__);

(statearr_37785[(1)] = (1));

return statearr_37785;
});
var cljs$core$async$mix_$_state_machine__36866__auto____1 = (function (state_37729){
while(true){
var ret_value__36867__auto__ = (function (){try{while(true){
var result__36868__auto__ = switch__36865__auto__(state_37729);
if(cljs.core.keyword_identical_QMARK_(result__36868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36868__auto__;
}
break;
}
}catch (e37786){if((e37786 instanceof Object)){
var ex__36869__auto__ = e37786;
var statearr_37787_38759 = state_37729;
(statearr_37787_38759[(5)] = ex__36869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37786;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38760 = state_37729;
state_37729 = G__38760;
continue;
} else {
return ret_value__36867__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36866__auto__ = function(state_37729){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36866__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36866__auto____1.call(this,state_37729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36866__auto____0;
cljs$core$async$mix_$_state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36866__auto____1;
return cljs$core$async$mix_$_state_machine__36866__auto__;
})()
})();
var state__36935__auto__ = (function (){var statearr_37788 = (f__36934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36934__auto__.cljs$core$IFn$_invoke$arity$0() : f__36934__auto__.call(null));
(statearr_37788[(6)] = c__36933__auto___38691);

return statearr_37788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36935__auto__);
}));


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
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__37790 = arguments.length;
switch (G__37790) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__37793 = arguments.length;
switch (G__37793) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__37791_SHARP_){
if(cljs.core.truth_((p1__37791_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37791_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37791_SHARP_.call(null,topic)))){
return p1__37791_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37791_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37794 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37794 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37795){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37795 = meta37795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37796,meta37795__$1){
var self__ = this;
var _37796__$1 = this;
return (new cljs.core.async.t_cljs$core$async37794(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37795__$1));
}));

(cljs.core.async.t_cljs$core$async37794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37796){
var self__ = this;
var _37796__$1 = this;
return self__.meta37795;
}));

(cljs.core.async.t_cljs$core$async37794.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37794.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37794.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37794.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async37794.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async37794.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async37794.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async37794.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37795","meta37795",-1400616067,null)], null);
}));

(cljs.core.async.t_cljs$core$async37794.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37794.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37794");

(cljs.core.async.t_cljs$core$async37794.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37794");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37794.
 */
cljs.core.async.__GT_t_cljs$core$async37794 = (function cljs$core$async$__GT_t_cljs$core$async37794(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37795){
return (new cljs.core.async.t_cljs$core$async37794(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37795));
});

}

return (new cljs.core.async.t_cljs$core$async37794(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36933__auto___38800 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36934__auto__ = (function (){var switch__36865__auto__ = (function (state_37868){
var state_val_37869 = (state_37868[(1)]);
if((state_val_37869 === (7))){
var inst_37864 = (state_37868[(2)]);
var state_37868__$1 = state_37868;
var statearr_37870_38801 = state_37868__$1;
(statearr_37870_38801[(2)] = inst_37864);

(statearr_37870_38801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37869 === (20))){
var state_37868__$1 = state_37868;
var statearr_37871_38802 = state_37868__$1;
(statearr_37871_38802[(2)] = null);

(statearr_37871_38802[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37869 === (1))){
var state_37868__$1 = state_37868;
var statearr_37872_38803 = state_37868__$1;
(statearr_37872_38803[(2)] = null);

(statearr_37872_38803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37869 === (24))){
var inst_37847 = (state_37868[(7)]);
var inst_37856 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_37847);
var state_37868__$1 = state_37868;
var statearr_37873_38804 = state_37868__$1;
(statearr_37873_38804[(2)] = inst_37856);

(statearr_37873_38804[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37869 === (4))){
var inst_37799 = (state_37868[(8)]);
var inst_37799__$1 = (state_37868[(2)]);
var inst_37800 = (inst_37799__$1 == null);
var state_37868__$1 = (function (){var statearr_37874 = state_37868;
(statearr_37874[(8)] = inst_37799__$1);

return statearr_37874;
})();
if(cljs.core.truth_(inst_37800)){
var statearr_37875_38805 = state_37868__$1;
(statearr_37875_38805[(1)] = (5));

} else {
var statearr_37876_38806 = state_37868__$1;
(statearr_37876_38806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37869 === (15))){
var inst_37841 = (state_37868[(2)]);
var state_37868__$1 = state_37868;
var statearr_37877_38807 = state_37868__$1;
(statearr_37877_38807[(2)] = inst_37841);

(statearr_37877_38807[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37869 === (21))){
var inst_37861 = (state_37868[(2)]);
var state_37868__$1 = (function (){var statearr_37878 = state_37868;
(statearr_37878[(9)] = inst_37861);

return statearr_37878;
})();
var statearr_37879_38808 = state_37868__$1;
(statearr_37879_38808[(2)] = null);

(statearr_37879_38808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37869 === (13))){
var inst_37823 = (state_37868[(10)]);
var inst_37825 = cljs.core.chunked_seq_QMARK_(inst_37823);
var state_37868__$1 = state_37868;
if(inst_37825){
var statearr_37880_38809 = state_37868__$1;
(statearr_37880_38809[(1)] = (16));

} else {
var statearr_37881_38810 = state_37868__$1;
(statearr_37881_38810[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37869 === (22))){
var inst_37853 = (state_37868[(2)]);
var state_37868__$1 = state_37868;
if(cljs.core.truth_(inst_37853)){
var statearr_37882_38811 = state_37868__$1;
(statearr_37882_38811[(1)] = (23));

} else {
var statearr_37883_38812 = state_37868__$1;
(statearr_37883_38812[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37869 === (6))){
var inst_37849 = (state_37868[(11)]);
var inst_37847 = (state_37868[(7)]);
var inst_37799 = (state_37868[(8)]);
var inst_37847__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37799) : topic_fn.call(null,inst_37799));
var inst_37848 = cljs.core.deref(mults);
var inst_37849__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37848,inst_37847__$1);
var state_37868__$1 = (function (){var statearr_37884 = state_37868;
(statearr_37884[(11)] = inst_37849__$1);

(statearr_37884[(7)] = inst_37847__$1);

return statearr_37884;
})();
if(cljs.core.truth_(inst_37849__$1)){
var statearr_37885_38813 = state_37868__$1;
(statearr_37885_38813[(1)] = (19));

} else {
var statearr_37886_38814 = state_37868__$1;
(statearr_37886_38814[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37869 === (25))){
var inst_37858 = (state_37868[(2)]);
var state_37868__$1 = state_37868;
var statearr_37887_38815 = state_37868__$1;
(statearr_37887_38815[(2)] = inst_37858);

(statearr_37887_38815[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37869 === (17))){
var inst_37823 = (state_37868[(10)]);
var inst_37832 = cljs.core.first(inst_37823);
var inst_37833 = cljs.core.async.muxch_STAR_(inst_37832);
var inst_37834 = cljs.core.async.close_BANG_(inst_37833);
var inst_37835 = cljs.core.next(inst_37823);
var inst_37809 = inst_37835;
var inst_37810 = null;
var inst_37811 = (0);
var inst_37812 = (0);
var state_37868__$1 = (function (){var statearr_37888 = state_37868;
(statearr_37888[(12)] = inst_37809);

(statearr_37888[(13)] = inst_37810);

(statearr_37888[(14)] = inst_37811);

(statearr_37888[(15)] = inst_37812);

(statearr_37888[(16)] = inst_37834);

return statearr_37888;
})();
var statearr_37889_38816 = state_37868__$1;
(statearr_37889_38816[(2)] = null);

(statearr_37889_38816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37869 === (3))){
var inst_37866 = (state_37868[(2)]);
var state_37868__$1 = state_37868;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37868__$1,inst_37866);
} else {
if((state_val_37869 === (12))){
var inst_37843 = (state_37868[(2)]);
var state_37868__$1 = state_37868;
var statearr_37890_38817 = state_37868__$1;
(statearr_37890_38817[(2)] = inst_37843);

(statearr_37890_38817[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37869 === (2))){
var state_37868__$1 = state_37868;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37868__$1,(4),ch);
} else {
if((state_val_37869 === (23))){
var state_37868__$1 = state_37868;
var statearr_37891_38818 = state_37868__$1;
(statearr_37891_38818[(2)] = null);

(statearr_37891_38818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37869 === (19))){
var inst_37849 = (state_37868[(11)]);
var inst_37799 = (state_37868[(8)]);
var inst_37851 = cljs.core.async.muxch_STAR_(inst_37849);
var state_37868__$1 = state_37868;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37868__$1,(22),inst_37851,inst_37799);
} else {
if((state_val_37869 === (11))){
var inst_37809 = (state_37868[(12)]);
var inst_37823 = (state_37868[(10)]);
var inst_37823__$1 = cljs.core.seq(inst_37809);
var state_37868__$1 = (function (){var statearr_37892 = state_37868;
(statearr_37892[(10)] = inst_37823__$1);

return statearr_37892;
})();
if(inst_37823__$1){
var statearr_37893_38819 = state_37868__$1;
(statearr_37893_38819[(1)] = (13));

} else {
var statearr_37894_38820 = state_37868__$1;
(statearr_37894_38820[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37869 === (9))){
var inst_37845 = (state_37868[(2)]);
var state_37868__$1 = state_37868;
var statearr_37895_38821 = state_37868__$1;
(statearr_37895_38821[(2)] = inst_37845);

(statearr_37895_38821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37869 === (5))){
var inst_37806 = cljs.core.deref(mults);
var inst_37807 = cljs.core.vals(inst_37806);
var inst_37808 = cljs.core.seq(inst_37807);
var inst_37809 = inst_37808;
var inst_37810 = null;
var inst_37811 = (0);
var inst_37812 = (0);
var state_37868__$1 = (function (){var statearr_37896 = state_37868;
(statearr_37896[(12)] = inst_37809);

(statearr_37896[(13)] = inst_37810);

(statearr_37896[(14)] = inst_37811);

(statearr_37896[(15)] = inst_37812);

return statearr_37896;
})();
var statearr_37897_38822 = state_37868__$1;
(statearr_37897_38822[(2)] = null);

(statearr_37897_38822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37869 === (14))){
var state_37868__$1 = state_37868;
var statearr_37901_38823 = state_37868__$1;
(statearr_37901_38823[(2)] = null);

(statearr_37901_38823[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37869 === (16))){
var inst_37823 = (state_37868[(10)]);
var inst_37827 = cljs.core.chunk_first(inst_37823);
var inst_37828 = cljs.core.chunk_rest(inst_37823);
var inst_37829 = cljs.core.count(inst_37827);
var inst_37809 = inst_37828;
var inst_37810 = inst_37827;
var inst_37811 = inst_37829;
var inst_37812 = (0);
var state_37868__$1 = (function (){var statearr_37902 = state_37868;
(statearr_37902[(12)] = inst_37809);

(statearr_37902[(13)] = inst_37810);

(statearr_37902[(14)] = inst_37811);

(statearr_37902[(15)] = inst_37812);

return statearr_37902;
})();
var statearr_37903_38824 = state_37868__$1;
(statearr_37903_38824[(2)] = null);

(statearr_37903_38824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37869 === (10))){
var inst_37809 = (state_37868[(12)]);
var inst_37810 = (state_37868[(13)]);
var inst_37811 = (state_37868[(14)]);
var inst_37812 = (state_37868[(15)]);
var inst_37817 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37810,inst_37812);
var inst_37818 = cljs.core.async.muxch_STAR_(inst_37817);
var inst_37819 = cljs.core.async.close_BANG_(inst_37818);
var inst_37820 = (inst_37812 + (1));
var tmp37898 = inst_37809;
var tmp37899 = inst_37810;
var tmp37900 = inst_37811;
var inst_37809__$1 = tmp37898;
var inst_37810__$1 = tmp37899;
var inst_37811__$1 = tmp37900;
var inst_37812__$1 = inst_37820;
var state_37868__$1 = (function (){var statearr_37904 = state_37868;
(statearr_37904[(12)] = inst_37809__$1);

(statearr_37904[(13)] = inst_37810__$1);

(statearr_37904[(17)] = inst_37819);

(statearr_37904[(14)] = inst_37811__$1);

(statearr_37904[(15)] = inst_37812__$1);

return statearr_37904;
})();
var statearr_37905_38825 = state_37868__$1;
(statearr_37905_38825[(2)] = null);

(statearr_37905_38825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37869 === (18))){
var inst_37838 = (state_37868[(2)]);
var state_37868__$1 = state_37868;
var statearr_37906_38826 = state_37868__$1;
(statearr_37906_38826[(2)] = inst_37838);

(statearr_37906_38826[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37869 === (8))){
var inst_37811 = (state_37868[(14)]);
var inst_37812 = (state_37868[(15)]);
var inst_37814 = (inst_37812 < inst_37811);
var inst_37815 = inst_37814;
var state_37868__$1 = state_37868;
if(cljs.core.truth_(inst_37815)){
var statearr_37907_38827 = state_37868__$1;
(statearr_37907_38827[(1)] = (10));

} else {
var statearr_37908_38828 = state_37868__$1;
(statearr_37908_38828[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__36866__auto__ = null;
var cljs$core$async$state_machine__36866__auto____0 = (function (){
var statearr_37909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37909[(0)] = cljs$core$async$state_machine__36866__auto__);

(statearr_37909[(1)] = (1));

return statearr_37909;
});
var cljs$core$async$state_machine__36866__auto____1 = (function (state_37868){
while(true){
var ret_value__36867__auto__ = (function (){try{while(true){
var result__36868__auto__ = switch__36865__auto__(state_37868);
if(cljs.core.keyword_identical_QMARK_(result__36868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36868__auto__;
}
break;
}
}catch (e37910){if((e37910 instanceof Object)){
var ex__36869__auto__ = e37910;
var statearr_37911_38829 = state_37868;
(statearr_37911_38829[(5)] = ex__36869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37910;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38830 = state_37868;
state_37868 = G__38830;
continue;
} else {
return ret_value__36867__auto__;
}
break;
}
});
cljs$core$async$state_machine__36866__auto__ = function(state_37868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36866__auto____1.call(this,state_37868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36866__auto____0;
cljs$core$async$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36866__auto____1;
return cljs$core$async$state_machine__36866__auto__;
})()
})();
var state__36935__auto__ = (function (){var statearr_37912 = (f__36934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36934__auto__.cljs$core$IFn$_invoke$arity$0() : f__36934__auto__.call(null));
(statearr_37912[(6)] = c__36933__auto___38800);

return statearr_37912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36935__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__37914 = arguments.length;
switch (G__37914) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

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
var G__37916 = arguments.length;
switch (G__37916) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__37918 = arguments.length;
switch (G__37918) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__36933__auto___38834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36934__auto__ = (function (){var switch__36865__auto__ = (function (state_37957){
var state_val_37958 = (state_37957[(1)]);
if((state_val_37958 === (7))){
var state_37957__$1 = state_37957;
var statearr_37959_38835 = state_37957__$1;
(statearr_37959_38835[(2)] = null);

(statearr_37959_38835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (1))){
var state_37957__$1 = state_37957;
var statearr_37960_38836 = state_37957__$1;
(statearr_37960_38836[(2)] = null);

(statearr_37960_38836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (4))){
var inst_37921 = (state_37957[(7)]);
var inst_37923 = (inst_37921 < cnt);
var state_37957__$1 = state_37957;
if(cljs.core.truth_(inst_37923)){
var statearr_37961_38837 = state_37957__$1;
(statearr_37961_38837[(1)] = (6));

} else {
var statearr_37962_38838 = state_37957__$1;
(statearr_37962_38838[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (15))){
var inst_37953 = (state_37957[(2)]);
var state_37957__$1 = state_37957;
var statearr_37963_38846 = state_37957__$1;
(statearr_37963_38846[(2)] = inst_37953);

(statearr_37963_38846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (13))){
var inst_37946 = cljs.core.async.close_BANG_(out);
var state_37957__$1 = state_37957;
var statearr_37964_38847 = state_37957__$1;
(statearr_37964_38847[(2)] = inst_37946);

(statearr_37964_38847[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (6))){
var state_37957__$1 = state_37957;
var statearr_37965_38848 = state_37957__$1;
(statearr_37965_38848[(2)] = null);

(statearr_37965_38848[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (3))){
var inst_37955 = (state_37957[(2)]);
var state_37957__$1 = state_37957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37957__$1,inst_37955);
} else {
if((state_val_37958 === (12))){
var inst_37943 = (state_37957[(8)]);
var inst_37943__$1 = (state_37957[(2)]);
var inst_37944 = cljs.core.some(cljs.core.nil_QMARK_,inst_37943__$1);
var state_37957__$1 = (function (){var statearr_37966 = state_37957;
(statearr_37966[(8)] = inst_37943__$1);

return statearr_37966;
})();
if(cljs.core.truth_(inst_37944)){
var statearr_37967_38849 = state_37957__$1;
(statearr_37967_38849[(1)] = (13));

} else {
var statearr_37968_38850 = state_37957__$1;
(statearr_37968_38850[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (2))){
var inst_37920 = cljs.core.reset_BANG_(dctr,cnt);
var inst_37921 = (0);
var state_37957__$1 = (function (){var statearr_37969 = state_37957;
(statearr_37969[(9)] = inst_37920);

(statearr_37969[(7)] = inst_37921);

return statearr_37969;
})();
var statearr_37970_38851 = state_37957__$1;
(statearr_37970_38851[(2)] = null);

(statearr_37970_38851[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (11))){
var inst_37921 = (state_37957[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_37957,(10),Object,null,(9));
var inst_37930 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_37921) : chs__$1.call(null,inst_37921));
var inst_37931 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_37921) : done.call(null,inst_37921));
var inst_37932 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_37930,inst_37931);
var state_37957__$1 = state_37957;
var statearr_37971_38854 = state_37957__$1;
(statearr_37971_38854[(2)] = inst_37932);


cljs.core.async.impl.ioc_helpers.process_exception(state_37957__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (9))){
var inst_37921 = (state_37957[(7)]);
var inst_37934 = (state_37957[(2)]);
var inst_37935 = (inst_37921 + (1));
var inst_37921__$1 = inst_37935;
var state_37957__$1 = (function (){var statearr_37972 = state_37957;
(statearr_37972[(10)] = inst_37934);

(statearr_37972[(7)] = inst_37921__$1);

return statearr_37972;
})();
var statearr_37973_38855 = state_37957__$1;
(statearr_37973_38855[(2)] = null);

(statearr_37973_38855[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (5))){
var inst_37941 = (state_37957[(2)]);
var state_37957__$1 = (function (){var statearr_37974 = state_37957;
(statearr_37974[(11)] = inst_37941);

return statearr_37974;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37957__$1,(12),dchan);
} else {
if((state_val_37958 === (14))){
var inst_37943 = (state_37957[(8)]);
var inst_37948 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_37943);
var state_37957__$1 = state_37957;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37957__$1,(16),out,inst_37948);
} else {
if((state_val_37958 === (16))){
var inst_37950 = (state_37957[(2)]);
var state_37957__$1 = (function (){var statearr_37975 = state_37957;
(statearr_37975[(12)] = inst_37950);

return statearr_37975;
})();
var statearr_37976_38862 = state_37957__$1;
(statearr_37976_38862[(2)] = null);

(statearr_37976_38862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (10))){
var inst_37925 = (state_37957[(2)]);
var inst_37926 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_37957__$1 = (function (){var statearr_37977 = state_37957;
(statearr_37977[(13)] = inst_37925);

return statearr_37977;
})();
var statearr_37978_38863 = state_37957__$1;
(statearr_37978_38863[(2)] = inst_37926);


cljs.core.async.impl.ioc_helpers.process_exception(state_37957__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37958 === (8))){
var inst_37939 = (state_37957[(2)]);
var state_37957__$1 = state_37957;
var statearr_37979_38864 = state_37957__$1;
(statearr_37979_38864[(2)] = inst_37939);

(statearr_37979_38864[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__36866__auto__ = null;
var cljs$core$async$state_machine__36866__auto____0 = (function (){
var statearr_37980 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37980[(0)] = cljs$core$async$state_machine__36866__auto__);

(statearr_37980[(1)] = (1));

return statearr_37980;
});
var cljs$core$async$state_machine__36866__auto____1 = (function (state_37957){
while(true){
var ret_value__36867__auto__ = (function (){try{while(true){
var result__36868__auto__ = switch__36865__auto__(state_37957);
if(cljs.core.keyword_identical_QMARK_(result__36868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36868__auto__;
}
break;
}
}catch (e37981){if((e37981 instanceof Object)){
var ex__36869__auto__ = e37981;
var statearr_37982_38870 = state_37957;
(statearr_37982_38870[(5)] = ex__36869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37981;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38875 = state_37957;
state_37957 = G__38875;
continue;
} else {
return ret_value__36867__auto__;
}
break;
}
});
cljs$core$async$state_machine__36866__auto__ = function(state_37957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36866__auto____1.call(this,state_37957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36866__auto____0;
cljs$core$async$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36866__auto____1;
return cljs$core$async$state_machine__36866__auto__;
})()
})();
var state__36935__auto__ = (function (){var statearr_37983 = (f__36934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36934__auto__.cljs$core$IFn$_invoke$arity$0() : f__36934__auto__.call(null));
(statearr_37983[(6)] = c__36933__auto___38834);

return statearr_37983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36935__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__37986 = arguments.length;
switch (G__37986) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36933__auto___38883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36934__auto__ = (function (){var switch__36865__auto__ = (function (state_38018){
var state_val_38019 = (state_38018[(1)]);
if((state_val_38019 === (7))){
var inst_37997 = (state_38018[(7)]);
var inst_37998 = (state_38018[(8)]);
var inst_37997__$1 = (state_38018[(2)]);
var inst_37998__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37997__$1,(0),null);
var inst_37999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37997__$1,(1),null);
var inst_38000 = (inst_37998__$1 == null);
var state_38018__$1 = (function (){var statearr_38020 = state_38018;
(statearr_38020[(7)] = inst_37997__$1);

(statearr_38020[(8)] = inst_37998__$1);

(statearr_38020[(9)] = inst_37999);

return statearr_38020;
})();
if(cljs.core.truth_(inst_38000)){
var statearr_38021_38884 = state_38018__$1;
(statearr_38021_38884[(1)] = (8));

} else {
var statearr_38022_38885 = state_38018__$1;
(statearr_38022_38885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38019 === (1))){
var inst_37987 = cljs.core.vec(chs);
var inst_37988 = inst_37987;
var state_38018__$1 = (function (){var statearr_38023 = state_38018;
(statearr_38023[(10)] = inst_37988);

return statearr_38023;
})();
var statearr_38024_38886 = state_38018__$1;
(statearr_38024_38886[(2)] = null);

(statearr_38024_38886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38019 === (4))){
var inst_37988 = (state_38018[(10)]);
var state_38018__$1 = state_38018;
return cljs.core.async.ioc_alts_BANG_(state_38018__$1,(7),inst_37988);
} else {
if((state_val_38019 === (6))){
var inst_38014 = (state_38018[(2)]);
var state_38018__$1 = state_38018;
var statearr_38025_38887 = state_38018__$1;
(statearr_38025_38887[(2)] = inst_38014);

(statearr_38025_38887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38019 === (3))){
var inst_38016 = (state_38018[(2)]);
var state_38018__$1 = state_38018;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38018__$1,inst_38016);
} else {
if((state_val_38019 === (2))){
var inst_37988 = (state_38018[(10)]);
var inst_37990 = cljs.core.count(inst_37988);
var inst_37991 = (inst_37990 > (0));
var state_38018__$1 = state_38018;
if(cljs.core.truth_(inst_37991)){
var statearr_38027_38888 = state_38018__$1;
(statearr_38027_38888[(1)] = (4));

} else {
var statearr_38028_38889 = state_38018__$1;
(statearr_38028_38889[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38019 === (11))){
var inst_37988 = (state_38018[(10)]);
var inst_38007 = (state_38018[(2)]);
var tmp38026 = inst_37988;
var inst_37988__$1 = tmp38026;
var state_38018__$1 = (function (){var statearr_38029 = state_38018;
(statearr_38029[(10)] = inst_37988__$1);

(statearr_38029[(11)] = inst_38007);

return statearr_38029;
})();
var statearr_38030_38890 = state_38018__$1;
(statearr_38030_38890[(2)] = null);

(statearr_38030_38890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38019 === (9))){
var inst_37998 = (state_38018[(8)]);
var state_38018__$1 = state_38018;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38018__$1,(11),out,inst_37998);
} else {
if((state_val_38019 === (5))){
var inst_38012 = cljs.core.async.close_BANG_(out);
var state_38018__$1 = state_38018;
var statearr_38031_38891 = state_38018__$1;
(statearr_38031_38891[(2)] = inst_38012);

(statearr_38031_38891[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38019 === (10))){
var inst_38010 = (state_38018[(2)]);
var state_38018__$1 = state_38018;
var statearr_38032_38892 = state_38018__$1;
(statearr_38032_38892[(2)] = inst_38010);

(statearr_38032_38892[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38019 === (8))){
var inst_37997 = (state_38018[(7)]);
var inst_37998 = (state_38018[(8)]);
var inst_37999 = (state_38018[(9)]);
var inst_37988 = (state_38018[(10)]);
var inst_38002 = (function (){var cs = inst_37988;
var vec__37993 = inst_37997;
var v = inst_37998;
var c = inst_37999;
return (function (p1__37984_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__37984_SHARP_);
});
})();
var inst_38003 = cljs.core.filterv(inst_38002,inst_37988);
var inst_37988__$1 = inst_38003;
var state_38018__$1 = (function (){var statearr_38033 = state_38018;
(statearr_38033[(10)] = inst_37988__$1);

return statearr_38033;
})();
var statearr_38034_38893 = state_38018__$1;
(statearr_38034_38893[(2)] = null);

(statearr_38034_38893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__36866__auto__ = null;
var cljs$core$async$state_machine__36866__auto____0 = (function (){
var statearr_38035 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38035[(0)] = cljs$core$async$state_machine__36866__auto__);

(statearr_38035[(1)] = (1));

return statearr_38035;
});
var cljs$core$async$state_machine__36866__auto____1 = (function (state_38018){
while(true){
var ret_value__36867__auto__ = (function (){try{while(true){
var result__36868__auto__ = switch__36865__auto__(state_38018);
if(cljs.core.keyword_identical_QMARK_(result__36868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36868__auto__;
}
break;
}
}catch (e38036){if((e38036 instanceof Object)){
var ex__36869__auto__ = e38036;
var statearr_38037_38894 = state_38018;
(statearr_38037_38894[(5)] = ex__36869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38036;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38895 = state_38018;
state_38018 = G__38895;
continue;
} else {
return ret_value__36867__auto__;
}
break;
}
});
cljs$core$async$state_machine__36866__auto__ = function(state_38018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36866__auto____1.call(this,state_38018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36866__auto____0;
cljs$core$async$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36866__auto____1;
return cljs$core$async$state_machine__36866__auto__;
})()
})();
var state__36935__auto__ = (function (){var statearr_38038 = (f__36934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36934__auto__.cljs$core$IFn$_invoke$arity$0() : f__36934__auto__.call(null));
(statearr_38038[(6)] = c__36933__auto___38883);

return statearr_38038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36935__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

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
var G__38040 = arguments.length;
switch (G__38040) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36933__auto___38897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36934__auto__ = (function (){var switch__36865__auto__ = (function (state_38064){
var state_val_38065 = (state_38064[(1)]);
if((state_val_38065 === (7))){
var inst_38046 = (state_38064[(7)]);
var inst_38046__$1 = (state_38064[(2)]);
var inst_38047 = (inst_38046__$1 == null);
var inst_38048 = cljs.core.not(inst_38047);
var state_38064__$1 = (function (){var statearr_38066 = state_38064;
(statearr_38066[(7)] = inst_38046__$1);

return statearr_38066;
})();
if(inst_38048){
var statearr_38067_38898 = state_38064__$1;
(statearr_38067_38898[(1)] = (8));

} else {
var statearr_38068_38899 = state_38064__$1;
(statearr_38068_38899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38065 === (1))){
var inst_38041 = (0);
var state_38064__$1 = (function (){var statearr_38069 = state_38064;
(statearr_38069[(8)] = inst_38041);

return statearr_38069;
})();
var statearr_38070_38900 = state_38064__$1;
(statearr_38070_38900[(2)] = null);

(statearr_38070_38900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38065 === (4))){
var state_38064__$1 = state_38064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38064__$1,(7),ch);
} else {
if((state_val_38065 === (6))){
var inst_38059 = (state_38064[(2)]);
var state_38064__$1 = state_38064;
var statearr_38071_38901 = state_38064__$1;
(statearr_38071_38901[(2)] = inst_38059);

(statearr_38071_38901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38065 === (3))){
var inst_38061 = (state_38064[(2)]);
var inst_38062 = cljs.core.async.close_BANG_(out);
var state_38064__$1 = (function (){var statearr_38072 = state_38064;
(statearr_38072[(9)] = inst_38061);

return statearr_38072;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38064__$1,inst_38062);
} else {
if((state_val_38065 === (2))){
var inst_38041 = (state_38064[(8)]);
var inst_38043 = (inst_38041 < n);
var state_38064__$1 = state_38064;
if(cljs.core.truth_(inst_38043)){
var statearr_38073_38908 = state_38064__$1;
(statearr_38073_38908[(1)] = (4));

} else {
var statearr_38074_38909 = state_38064__$1;
(statearr_38074_38909[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38065 === (11))){
var inst_38041 = (state_38064[(8)]);
var inst_38051 = (state_38064[(2)]);
var inst_38052 = (inst_38041 + (1));
var inst_38041__$1 = inst_38052;
var state_38064__$1 = (function (){var statearr_38075 = state_38064;
(statearr_38075[(8)] = inst_38041__$1);

(statearr_38075[(10)] = inst_38051);

return statearr_38075;
})();
var statearr_38076_38910 = state_38064__$1;
(statearr_38076_38910[(2)] = null);

(statearr_38076_38910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38065 === (9))){
var state_38064__$1 = state_38064;
var statearr_38077_38911 = state_38064__$1;
(statearr_38077_38911[(2)] = null);

(statearr_38077_38911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38065 === (5))){
var state_38064__$1 = state_38064;
var statearr_38078_38912 = state_38064__$1;
(statearr_38078_38912[(2)] = null);

(statearr_38078_38912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38065 === (10))){
var inst_38056 = (state_38064[(2)]);
var state_38064__$1 = state_38064;
var statearr_38079_38913 = state_38064__$1;
(statearr_38079_38913[(2)] = inst_38056);

(statearr_38079_38913[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38065 === (8))){
var inst_38046 = (state_38064[(7)]);
var state_38064__$1 = state_38064;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38064__$1,(11),out,inst_38046);
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
});
return (function() {
var cljs$core$async$state_machine__36866__auto__ = null;
var cljs$core$async$state_machine__36866__auto____0 = (function (){
var statearr_38080 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38080[(0)] = cljs$core$async$state_machine__36866__auto__);

(statearr_38080[(1)] = (1));

return statearr_38080;
});
var cljs$core$async$state_machine__36866__auto____1 = (function (state_38064){
while(true){
var ret_value__36867__auto__ = (function (){try{while(true){
var result__36868__auto__ = switch__36865__auto__(state_38064);
if(cljs.core.keyword_identical_QMARK_(result__36868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36868__auto__;
}
break;
}
}catch (e38081){if((e38081 instanceof Object)){
var ex__36869__auto__ = e38081;
var statearr_38082_38914 = state_38064;
(statearr_38082_38914[(5)] = ex__36869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38081;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38915 = state_38064;
state_38064 = G__38915;
continue;
} else {
return ret_value__36867__auto__;
}
break;
}
});
cljs$core$async$state_machine__36866__auto__ = function(state_38064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36866__auto____1.call(this,state_38064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36866__auto____0;
cljs$core$async$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36866__auto____1;
return cljs$core$async$state_machine__36866__auto__;
})()
})();
var state__36935__auto__ = (function (){var statearr_38083 = (f__36934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36934__auto__.cljs$core$IFn$_invoke$arity$0() : f__36934__auto__.call(null));
(statearr_38083[(6)] = c__36933__auto___38897);

return statearr_38083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36935__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38085 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38085 = (function (f,ch,meta38086){
this.f = f;
this.ch = ch;
this.meta38086 = meta38086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38087,meta38086__$1){
var self__ = this;
var _38087__$1 = this;
return (new cljs.core.async.t_cljs$core$async38085(self__.f,self__.ch,meta38086__$1));
}));

(cljs.core.async.t_cljs$core$async38085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38087){
var self__ = this;
var _38087__$1 = this;
return self__.meta38086;
}));

(cljs.core.async.t_cljs$core$async38085.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38085.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38085.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38085.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38085.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38088 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38088 = (function (f,ch,meta38086,_,fn1,meta38089){
this.f = f;
this.ch = ch;
this.meta38086 = meta38086;
this._ = _;
this.fn1 = fn1;
this.meta38089 = meta38089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38090,meta38089__$1){
var self__ = this;
var _38090__$1 = this;
return (new cljs.core.async.t_cljs$core$async38088(self__.f,self__.ch,self__.meta38086,self__._,self__.fn1,meta38089__$1));
}));

(cljs.core.async.t_cljs$core$async38088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38090){
var self__ = this;
var _38090__$1 = this;
return self__.meta38089;
}));

(cljs.core.async.t_cljs$core$async38088.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38088.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async38088.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38088.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__38084_SHARP_){
var G__38091 = (((p1__38084_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__38084_SHARP_) : self__.f.call(null,p1__38084_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__38091) : f1.call(null,G__38091));
});
}));

(cljs.core.async.t_cljs$core$async38088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38086","meta38086",755991020,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38085","cljs.core.async/t_cljs$core$async38085",-179837690,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38089","meta38089",-1437556760,null)], null);
}));

(cljs.core.async.t_cljs$core$async38088.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38088");

(cljs.core.async.t_cljs$core$async38088.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38088");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38088.
 */
cljs.core.async.__GT_t_cljs$core$async38088 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38088(f__$1,ch__$1,meta38086__$1,___$2,fn1__$1,meta38089){
return (new cljs.core.async.t_cljs$core$async38088(f__$1,ch__$1,meta38086__$1,___$2,fn1__$1,meta38089));
});

}

return (new cljs.core.async.t_cljs$core$async38088(self__.f,self__.ch,self__.meta38086,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__38092 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__38092) : self__.f.call(null,G__38092));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async38085.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38085.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async38085.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38086","meta38086",755991020,null)], null);
}));

(cljs.core.async.t_cljs$core$async38085.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38085.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38085");

(cljs.core.async.t_cljs$core$async38085.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38085");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38085.
 */
cljs.core.async.__GT_t_cljs$core$async38085 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38085(f__$1,ch__$1,meta38086){
return (new cljs.core.async.t_cljs$core$async38085(f__$1,ch__$1,meta38086));
});

}

return (new cljs.core.async.t_cljs$core$async38085(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38093 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38093 = (function (f,ch,meta38094){
this.f = f;
this.ch = ch;
this.meta38094 = meta38094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38095,meta38094__$1){
var self__ = this;
var _38095__$1 = this;
return (new cljs.core.async.t_cljs$core$async38093(self__.f,self__.ch,meta38094__$1));
}));

(cljs.core.async.t_cljs$core$async38093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38095){
var self__ = this;
var _38095__$1 = this;
return self__.meta38094;
}));

(cljs.core.async.t_cljs$core$async38093.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38093.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38093.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38093.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38093.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38093.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async38093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38094","meta38094",111637356,null)], null);
}));

(cljs.core.async.t_cljs$core$async38093.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38093");

(cljs.core.async.t_cljs$core$async38093.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38093");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38093.
 */
cljs.core.async.__GT_t_cljs$core$async38093 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38093(f__$1,ch__$1,meta38094){
return (new cljs.core.async.t_cljs$core$async38093(f__$1,ch__$1,meta38094));
});

}

return (new cljs.core.async.t_cljs$core$async38093(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38096 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38096 = (function (p,ch,meta38097){
this.p = p;
this.ch = ch;
this.meta38097 = meta38097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38098,meta38097__$1){
var self__ = this;
var _38098__$1 = this;
return (new cljs.core.async.t_cljs$core$async38096(self__.p,self__.ch,meta38097__$1));
}));

(cljs.core.async.t_cljs$core$async38096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38098){
var self__ = this;
var _38098__$1 = this;
return self__.meta38097;
}));

(cljs.core.async.t_cljs$core$async38096.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38096.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38096.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38096.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38096.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38096.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38096.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async38096.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38097","meta38097",736224986,null)], null);
}));

(cljs.core.async.t_cljs$core$async38096.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38096.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38096");

(cljs.core.async.t_cljs$core$async38096.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38096");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38096.
 */
cljs.core.async.__GT_t_cljs$core$async38096 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38096(p__$1,ch__$1,meta38097){
return (new cljs.core.async.t_cljs$core$async38096(p__$1,ch__$1,meta38097));
});

}

return (new cljs.core.async.t_cljs$core$async38096(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__38100 = arguments.length;
switch (G__38100) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36933__auto___38935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36934__auto__ = (function (){var switch__36865__auto__ = (function (state_38121){
var state_val_38122 = (state_38121[(1)]);
if((state_val_38122 === (7))){
var inst_38117 = (state_38121[(2)]);
var state_38121__$1 = state_38121;
var statearr_38123_38940 = state_38121__$1;
(statearr_38123_38940[(2)] = inst_38117);

(statearr_38123_38940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38122 === (1))){
var state_38121__$1 = state_38121;
var statearr_38124_38941 = state_38121__$1;
(statearr_38124_38941[(2)] = null);

(statearr_38124_38941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38122 === (4))){
var inst_38103 = (state_38121[(7)]);
var inst_38103__$1 = (state_38121[(2)]);
var inst_38104 = (inst_38103__$1 == null);
var state_38121__$1 = (function (){var statearr_38125 = state_38121;
(statearr_38125[(7)] = inst_38103__$1);

return statearr_38125;
})();
if(cljs.core.truth_(inst_38104)){
var statearr_38126_38942 = state_38121__$1;
(statearr_38126_38942[(1)] = (5));

} else {
var statearr_38127_38943 = state_38121__$1;
(statearr_38127_38943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38122 === (6))){
var inst_38103 = (state_38121[(7)]);
var inst_38108 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38103) : p.call(null,inst_38103));
var state_38121__$1 = state_38121;
if(cljs.core.truth_(inst_38108)){
var statearr_38128_38944 = state_38121__$1;
(statearr_38128_38944[(1)] = (8));

} else {
var statearr_38129_38945 = state_38121__$1;
(statearr_38129_38945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38122 === (3))){
var inst_38119 = (state_38121[(2)]);
var state_38121__$1 = state_38121;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38121__$1,inst_38119);
} else {
if((state_val_38122 === (2))){
var state_38121__$1 = state_38121;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38121__$1,(4),ch);
} else {
if((state_val_38122 === (11))){
var inst_38111 = (state_38121[(2)]);
var state_38121__$1 = state_38121;
var statearr_38130_38946 = state_38121__$1;
(statearr_38130_38946[(2)] = inst_38111);

(statearr_38130_38946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38122 === (9))){
var state_38121__$1 = state_38121;
var statearr_38131_38947 = state_38121__$1;
(statearr_38131_38947[(2)] = null);

(statearr_38131_38947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38122 === (5))){
var inst_38106 = cljs.core.async.close_BANG_(out);
var state_38121__$1 = state_38121;
var statearr_38132_38950 = state_38121__$1;
(statearr_38132_38950[(2)] = inst_38106);

(statearr_38132_38950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38122 === (10))){
var inst_38114 = (state_38121[(2)]);
var state_38121__$1 = (function (){var statearr_38133 = state_38121;
(statearr_38133[(8)] = inst_38114);

return statearr_38133;
})();
var statearr_38134_38951 = state_38121__$1;
(statearr_38134_38951[(2)] = null);

(statearr_38134_38951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38122 === (8))){
var inst_38103 = (state_38121[(7)]);
var state_38121__$1 = state_38121;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38121__$1,(11),out,inst_38103);
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
});
return (function() {
var cljs$core$async$state_machine__36866__auto__ = null;
var cljs$core$async$state_machine__36866__auto____0 = (function (){
var statearr_38135 = [null,null,null,null,null,null,null,null,null];
(statearr_38135[(0)] = cljs$core$async$state_machine__36866__auto__);

(statearr_38135[(1)] = (1));

return statearr_38135;
});
var cljs$core$async$state_machine__36866__auto____1 = (function (state_38121){
while(true){
var ret_value__36867__auto__ = (function (){try{while(true){
var result__36868__auto__ = switch__36865__auto__(state_38121);
if(cljs.core.keyword_identical_QMARK_(result__36868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36868__auto__;
}
break;
}
}catch (e38136){if((e38136 instanceof Object)){
var ex__36869__auto__ = e38136;
var statearr_38137_38952 = state_38121;
(statearr_38137_38952[(5)] = ex__36869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38136;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38953 = state_38121;
state_38121 = G__38953;
continue;
} else {
return ret_value__36867__auto__;
}
break;
}
});
cljs$core$async$state_machine__36866__auto__ = function(state_38121){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36866__auto____1.call(this,state_38121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36866__auto____0;
cljs$core$async$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36866__auto____1;
return cljs$core$async$state_machine__36866__auto__;
})()
})();
var state__36935__auto__ = (function (){var statearr_38138 = (f__36934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36934__auto__.cljs$core$IFn$_invoke$arity$0() : f__36934__auto__.call(null));
(statearr_38138[(6)] = c__36933__auto___38935);

return statearr_38138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36935__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__38140 = arguments.length;
switch (G__38140) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__36933__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36934__auto__ = (function (){var switch__36865__auto__ = (function (state_38202){
var state_val_38203 = (state_38202[(1)]);
if((state_val_38203 === (7))){
var inst_38198 = (state_38202[(2)]);
var state_38202__$1 = state_38202;
var statearr_38204_38955 = state_38202__$1;
(statearr_38204_38955[(2)] = inst_38198);

(statearr_38204_38955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (20))){
var inst_38168 = (state_38202[(7)]);
var inst_38179 = (state_38202[(2)]);
var inst_38180 = cljs.core.next(inst_38168);
var inst_38154 = inst_38180;
var inst_38155 = null;
var inst_38156 = (0);
var inst_38157 = (0);
var state_38202__$1 = (function (){var statearr_38205 = state_38202;
(statearr_38205[(8)] = inst_38179);

(statearr_38205[(9)] = inst_38154);

(statearr_38205[(10)] = inst_38157);

(statearr_38205[(11)] = inst_38156);

(statearr_38205[(12)] = inst_38155);

return statearr_38205;
})();
var statearr_38206_38957 = state_38202__$1;
(statearr_38206_38957[(2)] = null);

(statearr_38206_38957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (1))){
var state_38202__$1 = state_38202;
var statearr_38207_38958 = state_38202__$1;
(statearr_38207_38958[(2)] = null);

(statearr_38207_38958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (4))){
var inst_38143 = (state_38202[(13)]);
var inst_38143__$1 = (state_38202[(2)]);
var inst_38144 = (inst_38143__$1 == null);
var state_38202__$1 = (function (){var statearr_38208 = state_38202;
(statearr_38208[(13)] = inst_38143__$1);

return statearr_38208;
})();
if(cljs.core.truth_(inst_38144)){
var statearr_38209_38959 = state_38202__$1;
(statearr_38209_38959[(1)] = (5));

} else {
var statearr_38210_38960 = state_38202__$1;
(statearr_38210_38960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (15))){
var state_38202__$1 = state_38202;
var statearr_38214_38961 = state_38202__$1;
(statearr_38214_38961[(2)] = null);

(statearr_38214_38961[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (21))){
var state_38202__$1 = state_38202;
var statearr_38215_38962 = state_38202__$1;
(statearr_38215_38962[(2)] = null);

(statearr_38215_38962[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (13))){
var inst_38154 = (state_38202[(9)]);
var inst_38157 = (state_38202[(10)]);
var inst_38156 = (state_38202[(11)]);
var inst_38155 = (state_38202[(12)]);
var inst_38164 = (state_38202[(2)]);
var inst_38165 = (inst_38157 + (1));
var tmp38211 = inst_38154;
var tmp38212 = inst_38156;
var tmp38213 = inst_38155;
var inst_38154__$1 = tmp38211;
var inst_38155__$1 = tmp38213;
var inst_38156__$1 = tmp38212;
var inst_38157__$1 = inst_38165;
var state_38202__$1 = (function (){var statearr_38216 = state_38202;
(statearr_38216[(9)] = inst_38154__$1);

(statearr_38216[(10)] = inst_38157__$1);

(statearr_38216[(11)] = inst_38156__$1);

(statearr_38216[(14)] = inst_38164);

(statearr_38216[(12)] = inst_38155__$1);

return statearr_38216;
})();
var statearr_38217_38963 = state_38202__$1;
(statearr_38217_38963[(2)] = null);

(statearr_38217_38963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (22))){
var state_38202__$1 = state_38202;
var statearr_38218_38964 = state_38202__$1;
(statearr_38218_38964[(2)] = null);

(statearr_38218_38964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (6))){
var inst_38143 = (state_38202[(13)]);
var inst_38152 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38143) : f.call(null,inst_38143));
var inst_38153 = cljs.core.seq(inst_38152);
var inst_38154 = inst_38153;
var inst_38155 = null;
var inst_38156 = (0);
var inst_38157 = (0);
var state_38202__$1 = (function (){var statearr_38219 = state_38202;
(statearr_38219[(9)] = inst_38154);

(statearr_38219[(10)] = inst_38157);

(statearr_38219[(11)] = inst_38156);

(statearr_38219[(12)] = inst_38155);

return statearr_38219;
})();
var statearr_38220_38965 = state_38202__$1;
(statearr_38220_38965[(2)] = null);

(statearr_38220_38965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (17))){
var inst_38168 = (state_38202[(7)]);
var inst_38172 = cljs.core.chunk_first(inst_38168);
var inst_38173 = cljs.core.chunk_rest(inst_38168);
var inst_38174 = cljs.core.count(inst_38172);
var inst_38154 = inst_38173;
var inst_38155 = inst_38172;
var inst_38156 = inst_38174;
var inst_38157 = (0);
var state_38202__$1 = (function (){var statearr_38221 = state_38202;
(statearr_38221[(9)] = inst_38154);

(statearr_38221[(10)] = inst_38157);

(statearr_38221[(11)] = inst_38156);

(statearr_38221[(12)] = inst_38155);

return statearr_38221;
})();
var statearr_38222_38967 = state_38202__$1;
(statearr_38222_38967[(2)] = null);

(statearr_38222_38967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (3))){
var inst_38200 = (state_38202[(2)]);
var state_38202__$1 = state_38202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38202__$1,inst_38200);
} else {
if((state_val_38203 === (12))){
var inst_38188 = (state_38202[(2)]);
var state_38202__$1 = state_38202;
var statearr_38223_38968 = state_38202__$1;
(statearr_38223_38968[(2)] = inst_38188);

(statearr_38223_38968[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (2))){
var state_38202__$1 = state_38202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38202__$1,(4),in$);
} else {
if((state_val_38203 === (23))){
var inst_38196 = (state_38202[(2)]);
var state_38202__$1 = state_38202;
var statearr_38224_38969 = state_38202__$1;
(statearr_38224_38969[(2)] = inst_38196);

(statearr_38224_38969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (19))){
var inst_38183 = (state_38202[(2)]);
var state_38202__$1 = state_38202;
var statearr_38225_38970 = state_38202__$1;
(statearr_38225_38970[(2)] = inst_38183);

(statearr_38225_38970[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (11))){
var inst_38168 = (state_38202[(7)]);
var inst_38154 = (state_38202[(9)]);
var inst_38168__$1 = cljs.core.seq(inst_38154);
var state_38202__$1 = (function (){var statearr_38226 = state_38202;
(statearr_38226[(7)] = inst_38168__$1);

return statearr_38226;
})();
if(inst_38168__$1){
var statearr_38227_38971 = state_38202__$1;
(statearr_38227_38971[(1)] = (14));

} else {
var statearr_38228_38972 = state_38202__$1;
(statearr_38228_38972[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (9))){
var inst_38190 = (state_38202[(2)]);
var inst_38191 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_38202__$1 = (function (){var statearr_38229 = state_38202;
(statearr_38229[(15)] = inst_38190);

return statearr_38229;
})();
if(cljs.core.truth_(inst_38191)){
var statearr_38230_38973 = state_38202__$1;
(statearr_38230_38973[(1)] = (21));

} else {
var statearr_38231_38974 = state_38202__$1;
(statearr_38231_38974[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (5))){
var inst_38146 = cljs.core.async.close_BANG_(out);
var state_38202__$1 = state_38202;
var statearr_38232_38975 = state_38202__$1;
(statearr_38232_38975[(2)] = inst_38146);

(statearr_38232_38975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (14))){
var inst_38168 = (state_38202[(7)]);
var inst_38170 = cljs.core.chunked_seq_QMARK_(inst_38168);
var state_38202__$1 = state_38202;
if(inst_38170){
var statearr_38233_38976 = state_38202__$1;
(statearr_38233_38976[(1)] = (17));

} else {
var statearr_38234_38977 = state_38202__$1;
(statearr_38234_38977[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (16))){
var inst_38186 = (state_38202[(2)]);
var state_38202__$1 = state_38202;
var statearr_38235_38978 = state_38202__$1;
(statearr_38235_38978[(2)] = inst_38186);

(statearr_38235_38978[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38203 === (10))){
var inst_38157 = (state_38202[(10)]);
var inst_38155 = (state_38202[(12)]);
var inst_38162 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38155,inst_38157);
var state_38202__$1 = state_38202;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38202__$1,(13),out,inst_38162);
} else {
if((state_val_38203 === (18))){
var inst_38168 = (state_38202[(7)]);
var inst_38177 = cljs.core.first(inst_38168);
var state_38202__$1 = state_38202;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38202__$1,(20),out,inst_38177);
} else {
if((state_val_38203 === (8))){
var inst_38157 = (state_38202[(10)]);
var inst_38156 = (state_38202[(11)]);
var inst_38159 = (inst_38157 < inst_38156);
var inst_38160 = inst_38159;
var state_38202__$1 = state_38202;
if(cljs.core.truth_(inst_38160)){
var statearr_38236_38979 = state_38202__$1;
(statearr_38236_38979[(1)] = (10));

} else {
var statearr_38237_38980 = state_38202__$1;
(statearr_38237_38980[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__36866__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36866__auto____0 = (function (){
var statearr_38238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38238[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36866__auto__);

(statearr_38238[(1)] = (1));

return statearr_38238;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36866__auto____1 = (function (state_38202){
while(true){
var ret_value__36867__auto__ = (function (){try{while(true){
var result__36868__auto__ = switch__36865__auto__(state_38202);
if(cljs.core.keyword_identical_QMARK_(result__36868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36868__auto__;
}
break;
}
}catch (e38239){if((e38239 instanceof Object)){
var ex__36869__auto__ = e38239;
var statearr_38240_38982 = state_38202;
(statearr_38240_38982[(5)] = ex__36869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38239;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38983 = state_38202;
state_38202 = G__38983;
continue;
} else {
return ret_value__36867__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36866__auto__ = function(state_38202){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36866__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36866__auto____1.call(this,state_38202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36866__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36866__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36866__auto__;
})()
})();
var state__36935__auto__ = (function (){var statearr_38241 = (f__36934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36934__auto__.cljs$core$IFn$_invoke$arity$0() : f__36934__auto__.call(null));
(statearr_38241[(6)] = c__36933__auto__);

return statearr_38241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36935__auto__);
}));

return c__36933__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__38243 = arguments.length;
switch (G__38243) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__38245 = arguments.length;
switch (G__38245) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__38247 = arguments.length;
switch (G__38247) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36933__auto___38991 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36934__auto__ = (function (){var switch__36865__auto__ = (function (state_38271){
var state_val_38272 = (state_38271[(1)]);
if((state_val_38272 === (7))){
var inst_38266 = (state_38271[(2)]);
var state_38271__$1 = state_38271;
var statearr_38273_38992 = state_38271__$1;
(statearr_38273_38992[(2)] = inst_38266);

(statearr_38273_38992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (1))){
var inst_38248 = null;
var state_38271__$1 = (function (){var statearr_38274 = state_38271;
(statearr_38274[(7)] = inst_38248);

return statearr_38274;
})();
var statearr_38275_38993 = state_38271__$1;
(statearr_38275_38993[(2)] = null);

(statearr_38275_38993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (4))){
var inst_38251 = (state_38271[(8)]);
var inst_38251__$1 = (state_38271[(2)]);
var inst_38252 = (inst_38251__$1 == null);
var inst_38253 = cljs.core.not(inst_38252);
var state_38271__$1 = (function (){var statearr_38276 = state_38271;
(statearr_38276[(8)] = inst_38251__$1);

return statearr_38276;
})();
if(inst_38253){
var statearr_38277_38994 = state_38271__$1;
(statearr_38277_38994[(1)] = (5));

} else {
var statearr_38278_38995 = state_38271__$1;
(statearr_38278_38995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (6))){
var state_38271__$1 = state_38271;
var statearr_38279_38996 = state_38271__$1;
(statearr_38279_38996[(2)] = null);

(statearr_38279_38996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (3))){
var inst_38268 = (state_38271[(2)]);
var inst_38269 = cljs.core.async.close_BANG_(out);
var state_38271__$1 = (function (){var statearr_38280 = state_38271;
(statearr_38280[(9)] = inst_38268);

return statearr_38280;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38271__$1,inst_38269);
} else {
if((state_val_38272 === (2))){
var state_38271__$1 = state_38271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38271__$1,(4),ch);
} else {
if((state_val_38272 === (11))){
var inst_38251 = (state_38271[(8)]);
var inst_38260 = (state_38271[(2)]);
var inst_38248 = inst_38251;
var state_38271__$1 = (function (){var statearr_38281 = state_38271;
(statearr_38281[(10)] = inst_38260);

(statearr_38281[(7)] = inst_38248);

return statearr_38281;
})();
var statearr_38282_38997 = state_38271__$1;
(statearr_38282_38997[(2)] = null);

(statearr_38282_38997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (9))){
var inst_38251 = (state_38271[(8)]);
var state_38271__$1 = state_38271;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38271__$1,(11),out,inst_38251);
} else {
if((state_val_38272 === (5))){
var inst_38251 = (state_38271[(8)]);
var inst_38248 = (state_38271[(7)]);
var inst_38255 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38251,inst_38248);
var state_38271__$1 = state_38271;
if(inst_38255){
var statearr_38284_38998 = state_38271__$1;
(statearr_38284_38998[(1)] = (8));

} else {
var statearr_38285_38999 = state_38271__$1;
(statearr_38285_38999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (10))){
var inst_38263 = (state_38271[(2)]);
var state_38271__$1 = state_38271;
var statearr_38286_39000 = state_38271__$1;
(statearr_38286_39000[(2)] = inst_38263);

(statearr_38286_39000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38272 === (8))){
var inst_38248 = (state_38271[(7)]);
var tmp38283 = inst_38248;
var inst_38248__$1 = tmp38283;
var state_38271__$1 = (function (){var statearr_38287 = state_38271;
(statearr_38287[(7)] = inst_38248__$1);

return statearr_38287;
})();
var statearr_38288_39008 = state_38271__$1;
(statearr_38288_39008[(2)] = null);

(statearr_38288_39008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__36866__auto__ = null;
var cljs$core$async$state_machine__36866__auto____0 = (function (){
var statearr_38289 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38289[(0)] = cljs$core$async$state_machine__36866__auto__);

(statearr_38289[(1)] = (1));

return statearr_38289;
});
var cljs$core$async$state_machine__36866__auto____1 = (function (state_38271){
while(true){
var ret_value__36867__auto__ = (function (){try{while(true){
var result__36868__auto__ = switch__36865__auto__(state_38271);
if(cljs.core.keyword_identical_QMARK_(result__36868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36868__auto__;
}
break;
}
}catch (e38290){if((e38290 instanceof Object)){
var ex__36869__auto__ = e38290;
var statearr_38291_39012 = state_38271;
(statearr_38291_39012[(5)] = ex__36869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38290;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39013 = state_38271;
state_38271 = G__39013;
continue;
} else {
return ret_value__36867__auto__;
}
break;
}
});
cljs$core$async$state_machine__36866__auto__ = function(state_38271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36866__auto____1.call(this,state_38271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36866__auto____0;
cljs$core$async$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36866__auto____1;
return cljs$core$async$state_machine__36866__auto__;
})()
})();
var state__36935__auto__ = (function (){var statearr_38292 = (f__36934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36934__auto__.cljs$core$IFn$_invoke$arity$0() : f__36934__auto__.call(null));
(statearr_38292[(6)] = c__36933__auto___38991);

return statearr_38292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36935__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__38294 = arguments.length;
switch (G__38294) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36933__auto___39025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36934__auto__ = (function (){var switch__36865__auto__ = (function (state_38332){
var state_val_38333 = (state_38332[(1)]);
if((state_val_38333 === (7))){
var inst_38328 = (state_38332[(2)]);
var state_38332__$1 = state_38332;
var statearr_38334_39026 = state_38332__$1;
(statearr_38334_39026[(2)] = inst_38328);

(statearr_38334_39026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38333 === (1))){
var inst_38295 = (new Array(n));
var inst_38296 = inst_38295;
var inst_38297 = (0);
var state_38332__$1 = (function (){var statearr_38335 = state_38332;
(statearr_38335[(7)] = inst_38297);

(statearr_38335[(8)] = inst_38296);

return statearr_38335;
})();
var statearr_38336_39027 = state_38332__$1;
(statearr_38336_39027[(2)] = null);

(statearr_38336_39027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38333 === (4))){
var inst_38300 = (state_38332[(9)]);
var inst_38300__$1 = (state_38332[(2)]);
var inst_38301 = (inst_38300__$1 == null);
var inst_38302 = cljs.core.not(inst_38301);
var state_38332__$1 = (function (){var statearr_38337 = state_38332;
(statearr_38337[(9)] = inst_38300__$1);

return statearr_38337;
})();
if(inst_38302){
var statearr_38338_39028 = state_38332__$1;
(statearr_38338_39028[(1)] = (5));

} else {
var statearr_38339_39029 = state_38332__$1;
(statearr_38339_39029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38333 === (15))){
var inst_38322 = (state_38332[(2)]);
var state_38332__$1 = state_38332;
var statearr_38340_39030 = state_38332__$1;
(statearr_38340_39030[(2)] = inst_38322);

(statearr_38340_39030[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38333 === (13))){
var state_38332__$1 = state_38332;
var statearr_38341_39031 = state_38332__$1;
(statearr_38341_39031[(2)] = null);

(statearr_38341_39031[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38333 === (6))){
var inst_38297 = (state_38332[(7)]);
var inst_38318 = (inst_38297 > (0));
var state_38332__$1 = state_38332;
if(cljs.core.truth_(inst_38318)){
var statearr_38342_39034 = state_38332__$1;
(statearr_38342_39034[(1)] = (12));

} else {
var statearr_38343_39037 = state_38332__$1;
(statearr_38343_39037[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38333 === (3))){
var inst_38330 = (state_38332[(2)]);
var state_38332__$1 = state_38332;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38332__$1,inst_38330);
} else {
if((state_val_38333 === (12))){
var inst_38296 = (state_38332[(8)]);
var inst_38320 = cljs.core.vec(inst_38296);
var state_38332__$1 = state_38332;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38332__$1,(15),out,inst_38320);
} else {
if((state_val_38333 === (2))){
var state_38332__$1 = state_38332;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38332__$1,(4),ch);
} else {
if((state_val_38333 === (11))){
var inst_38312 = (state_38332[(2)]);
var inst_38313 = (new Array(n));
var inst_38296 = inst_38313;
var inst_38297 = (0);
var state_38332__$1 = (function (){var statearr_38344 = state_38332;
(statearr_38344[(7)] = inst_38297);

(statearr_38344[(8)] = inst_38296);

(statearr_38344[(10)] = inst_38312);

return statearr_38344;
})();
var statearr_38345_39040 = state_38332__$1;
(statearr_38345_39040[(2)] = null);

(statearr_38345_39040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38333 === (9))){
var inst_38296 = (state_38332[(8)]);
var inst_38310 = cljs.core.vec(inst_38296);
var state_38332__$1 = state_38332;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38332__$1,(11),out,inst_38310);
} else {
if((state_val_38333 === (5))){
var inst_38297 = (state_38332[(7)]);
var inst_38300 = (state_38332[(9)]);
var inst_38305 = (state_38332[(11)]);
var inst_38296 = (state_38332[(8)]);
var inst_38304 = (inst_38296[inst_38297] = inst_38300);
var inst_38305__$1 = (inst_38297 + (1));
var inst_38306 = (inst_38305__$1 < n);
var state_38332__$1 = (function (){var statearr_38346 = state_38332;
(statearr_38346[(12)] = inst_38304);

(statearr_38346[(11)] = inst_38305__$1);

return statearr_38346;
})();
if(cljs.core.truth_(inst_38306)){
var statearr_38347_39041 = state_38332__$1;
(statearr_38347_39041[(1)] = (8));

} else {
var statearr_38348_39042 = state_38332__$1;
(statearr_38348_39042[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38333 === (14))){
var inst_38325 = (state_38332[(2)]);
var inst_38326 = cljs.core.async.close_BANG_(out);
var state_38332__$1 = (function (){var statearr_38350 = state_38332;
(statearr_38350[(13)] = inst_38325);

return statearr_38350;
})();
var statearr_38351_39049 = state_38332__$1;
(statearr_38351_39049[(2)] = inst_38326);

(statearr_38351_39049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38333 === (10))){
var inst_38316 = (state_38332[(2)]);
var state_38332__$1 = state_38332;
var statearr_38352_39050 = state_38332__$1;
(statearr_38352_39050[(2)] = inst_38316);

(statearr_38352_39050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38333 === (8))){
var inst_38305 = (state_38332[(11)]);
var inst_38296 = (state_38332[(8)]);
var tmp38349 = inst_38296;
var inst_38296__$1 = tmp38349;
var inst_38297 = inst_38305;
var state_38332__$1 = (function (){var statearr_38353 = state_38332;
(statearr_38353[(7)] = inst_38297);

(statearr_38353[(8)] = inst_38296__$1);

return statearr_38353;
})();
var statearr_38354_39051 = state_38332__$1;
(statearr_38354_39051[(2)] = null);

(statearr_38354_39051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__36866__auto__ = null;
var cljs$core$async$state_machine__36866__auto____0 = (function (){
var statearr_38355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38355[(0)] = cljs$core$async$state_machine__36866__auto__);

(statearr_38355[(1)] = (1));

return statearr_38355;
});
var cljs$core$async$state_machine__36866__auto____1 = (function (state_38332){
while(true){
var ret_value__36867__auto__ = (function (){try{while(true){
var result__36868__auto__ = switch__36865__auto__(state_38332);
if(cljs.core.keyword_identical_QMARK_(result__36868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36868__auto__;
}
break;
}
}catch (e38356){if((e38356 instanceof Object)){
var ex__36869__auto__ = e38356;
var statearr_38357_39052 = state_38332;
(statearr_38357_39052[(5)] = ex__36869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38356;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39053 = state_38332;
state_38332 = G__39053;
continue;
} else {
return ret_value__36867__auto__;
}
break;
}
});
cljs$core$async$state_machine__36866__auto__ = function(state_38332){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36866__auto____1.call(this,state_38332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36866__auto____0;
cljs$core$async$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36866__auto____1;
return cljs$core$async$state_machine__36866__auto__;
})()
})();
var state__36935__auto__ = (function (){var statearr_38358 = (f__36934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36934__auto__.cljs$core$IFn$_invoke$arity$0() : f__36934__auto__.call(null));
(statearr_38358[(6)] = c__36933__auto___39025);

return statearr_38358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36935__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__38360 = arguments.length;
switch (G__38360) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36933__auto___39055 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36934__auto__ = (function (){var switch__36865__auto__ = (function (state_38402){
var state_val_38403 = (state_38402[(1)]);
if((state_val_38403 === (7))){
var inst_38398 = (state_38402[(2)]);
var state_38402__$1 = state_38402;
var statearr_38404_39056 = state_38402__$1;
(statearr_38404_39056[(2)] = inst_38398);

(statearr_38404_39056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38403 === (1))){
var inst_38361 = [];
var inst_38362 = inst_38361;
var inst_38363 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38402__$1 = (function (){var statearr_38405 = state_38402;
(statearr_38405[(7)] = inst_38363);

(statearr_38405[(8)] = inst_38362);

return statearr_38405;
})();
var statearr_38406_39057 = state_38402__$1;
(statearr_38406_39057[(2)] = null);

(statearr_38406_39057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38403 === (4))){
var inst_38366 = (state_38402[(9)]);
var inst_38366__$1 = (state_38402[(2)]);
var inst_38367 = (inst_38366__$1 == null);
var inst_38368 = cljs.core.not(inst_38367);
var state_38402__$1 = (function (){var statearr_38407 = state_38402;
(statearr_38407[(9)] = inst_38366__$1);

return statearr_38407;
})();
if(inst_38368){
var statearr_38408_39058 = state_38402__$1;
(statearr_38408_39058[(1)] = (5));

} else {
var statearr_38409_39059 = state_38402__$1;
(statearr_38409_39059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38403 === (15))){
var inst_38392 = (state_38402[(2)]);
var state_38402__$1 = state_38402;
var statearr_38410_39060 = state_38402__$1;
(statearr_38410_39060[(2)] = inst_38392);

(statearr_38410_39060[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38403 === (13))){
var state_38402__$1 = state_38402;
var statearr_38411_39061 = state_38402__$1;
(statearr_38411_39061[(2)] = null);

(statearr_38411_39061[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38403 === (6))){
var inst_38362 = (state_38402[(8)]);
var inst_38387 = inst_38362.length;
var inst_38388 = (inst_38387 > (0));
var state_38402__$1 = state_38402;
if(cljs.core.truth_(inst_38388)){
var statearr_38412_39062 = state_38402__$1;
(statearr_38412_39062[(1)] = (12));

} else {
var statearr_38413_39063 = state_38402__$1;
(statearr_38413_39063[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38403 === (3))){
var inst_38400 = (state_38402[(2)]);
var state_38402__$1 = state_38402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38402__$1,inst_38400);
} else {
if((state_val_38403 === (12))){
var inst_38362 = (state_38402[(8)]);
var inst_38390 = cljs.core.vec(inst_38362);
var state_38402__$1 = state_38402;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38402__$1,(15),out,inst_38390);
} else {
if((state_val_38403 === (2))){
var state_38402__$1 = state_38402;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38402__$1,(4),ch);
} else {
if((state_val_38403 === (11))){
var inst_38370 = (state_38402[(10)]);
var inst_38366 = (state_38402[(9)]);
var inst_38380 = (state_38402[(2)]);
var inst_38381 = [];
var inst_38382 = inst_38381.push(inst_38366);
var inst_38362 = inst_38381;
var inst_38363 = inst_38370;
var state_38402__$1 = (function (){var statearr_38414 = state_38402;
(statearr_38414[(7)] = inst_38363);

(statearr_38414[(8)] = inst_38362);

(statearr_38414[(11)] = inst_38380);

(statearr_38414[(12)] = inst_38382);

return statearr_38414;
})();
var statearr_38415_39064 = state_38402__$1;
(statearr_38415_39064[(2)] = null);

(statearr_38415_39064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38403 === (9))){
var inst_38362 = (state_38402[(8)]);
var inst_38378 = cljs.core.vec(inst_38362);
var state_38402__$1 = state_38402;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38402__$1,(11),out,inst_38378);
} else {
if((state_val_38403 === (5))){
var inst_38363 = (state_38402[(7)]);
var inst_38370 = (state_38402[(10)]);
var inst_38366 = (state_38402[(9)]);
var inst_38370__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38366) : f.call(null,inst_38366));
var inst_38371 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38370__$1,inst_38363);
var inst_38372 = cljs.core.keyword_identical_QMARK_(inst_38363,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38373 = ((inst_38371) || (inst_38372));
var state_38402__$1 = (function (){var statearr_38416 = state_38402;
(statearr_38416[(10)] = inst_38370__$1);

return statearr_38416;
})();
if(cljs.core.truth_(inst_38373)){
var statearr_38417_39065 = state_38402__$1;
(statearr_38417_39065[(1)] = (8));

} else {
var statearr_38418_39066 = state_38402__$1;
(statearr_38418_39066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38403 === (14))){
var inst_38395 = (state_38402[(2)]);
var inst_38396 = cljs.core.async.close_BANG_(out);
var state_38402__$1 = (function (){var statearr_38420 = state_38402;
(statearr_38420[(13)] = inst_38395);

return statearr_38420;
})();
var statearr_38421_39067 = state_38402__$1;
(statearr_38421_39067[(2)] = inst_38396);

(statearr_38421_39067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38403 === (10))){
var inst_38385 = (state_38402[(2)]);
var state_38402__$1 = state_38402;
var statearr_38422_39068 = state_38402__$1;
(statearr_38422_39068[(2)] = inst_38385);

(statearr_38422_39068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38403 === (8))){
var inst_38362 = (state_38402[(8)]);
var inst_38370 = (state_38402[(10)]);
var inst_38366 = (state_38402[(9)]);
var inst_38375 = inst_38362.push(inst_38366);
var tmp38419 = inst_38362;
var inst_38362__$1 = tmp38419;
var inst_38363 = inst_38370;
var state_38402__$1 = (function (){var statearr_38423 = state_38402;
(statearr_38423[(14)] = inst_38375);

(statearr_38423[(7)] = inst_38363);

(statearr_38423[(8)] = inst_38362__$1);

return statearr_38423;
})();
var statearr_38424_39069 = state_38402__$1;
(statearr_38424_39069[(2)] = null);

(statearr_38424_39069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__36866__auto__ = null;
var cljs$core$async$state_machine__36866__auto____0 = (function (){
var statearr_38425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38425[(0)] = cljs$core$async$state_machine__36866__auto__);

(statearr_38425[(1)] = (1));

return statearr_38425;
});
var cljs$core$async$state_machine__36866__auto____1 = (function (state_38402){
while(true){
var ret_value__36867__auto__ = (function (){try{while(true){
var result__36868__auto__ = switch__36865__auto__(state_38402);
if(cljs.core.keyword_identical_QMARK_(result__36868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36868__auto__;
}
break;
}
}catch (e38426){if((e38426 instanceof Object)){
var ex__36869__auto__ = e38426;
var statearr_38427_39070 = state_38402;
(statearr_38427_39070[(5)] = ex__36869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38426;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39071 = state_38402;
state_38402 = G__39071;
continue;
} else {
return ret_value__36867__auto__;
}
break;
}
});
cljs$core$async$state_machine__36866__auto__ = function(state_38402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36866__auto____1.call(this,state_38402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36866__auto____0;
cljs$core$async$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36866__auto____1;
return cljs$core$async$state_machine__36866__auto__;
})()
})();
var state__36935__auto__ = (function (){var statearr_38428 = (f__36934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36934__auto__.cljs$core$IFn$_invoke$arity$0() : f__36934__auto__.call(null));
(statearr_38428[(6)] = c__36933__auto___39055);

return statearr_38428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36935__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
