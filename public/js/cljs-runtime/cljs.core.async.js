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
var G__33336 = arguments.length;
switch (G__33336) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33342 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33342 = (function (f,blockable,meta33343){
this.f = f;
this.blockable = blockable;
this.meta33343 = meta33343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33344,meta33343__$1){
var self__ = this;
var _33344__$1 = this;
return (new cljs.core.async.t_cljs$core$async33342(self__.f,self__.blockable,meta33343__$1));
}));

(cljs.core.async.t_cljs$core$async33342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33344){
var self__ = this;
var _33344__$1 = this;
return self__.meta33343;
}));

(cljs.core.async.t_cljs$core$async33342.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33342.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33342.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33342.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33343","meta33343",263228819,null)], null);
}));

(cljs.core.async.t_cljs$core$async33342.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33342");

(cljs.core.async.t_cljs$core$async33342.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33342");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33342.
 */
cljs.core.async.__GT_t_cljs$core$async33342 = (function cljs$core$async$__GT_t_cljs$core$async33342(f__$1,blockable__$1,meta33343){
return (new cljs.core.async.t_cljs$core$async33342(f__$1,blockable__$1,meta33343));
});

}

return (new cljs.core.async.t_cljs$core$async33342(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33369 = arguments.length;
switch (G__33369) {
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
var G__33372 = arguments.length;
switch (G__33372) {
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
var G__33380 = arguments.length;
switch (G__33380) {
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
var val_35639 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35639) : fn1.call(null,val_35639));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35639) : fn1.call(null,val_35639));
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
var G__33389 = arguments.length;
switch (G__33389) {
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
var n__4666__auto___35646 = n;
var x_35647 = (0);
while(true){
if((x_35647 < n__4666__auto___35646)){
(a[x_35647] = x_35647);

var G__35648 = (x_35647 + (1));
x_35647 = G__35648;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33400 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33400 = (function (flag,meta33401){
this.flag = flag;
this.meta33401 = meta33401;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33402,meta33401__$1){
var self__ = this;
var _33402__$1 = this;
return (new cljs.core.async.t_cljs$core$async33400(self__.flag,meta33401__$1));
}));

(cljs.core.async.t_cljs$core$async33400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33402){
var self__ = this;
var _33402__$1 = this;
return self__.meta33401;
}));

(cljs.core.async.t_cljs$core$async33400.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33400.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33400.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33400.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33400.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33401","meta33401",-278554432,null)], null);
}));

(cljs.core.async.t_cljs$core$async33400.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33400.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33400");

(cljs.core.async.t_cljs$core$async33400.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33400");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33400.
 */
cljs.core.async.__GT_t_cljs$core$async33400 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33400(flag__$1,meta33401){
return (new cljs.core.async.t_cljs$core$async33400(flag__$1,meta33401));
});

}

return (new cljs.core.async.t_cljs$core$async33400(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33418 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33418 = (function (flag,cb,meta33419){
this.flag = flag;
this.cb = cb;
this.meta33419 = meta33419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33420,meta33419__$1){
var self__ = this;
var _33420__$1 = this;
return (new cljs.core.async.t_cljs$core$async33418(self__.flag,self__.cb,meta33419__$1));
}));

(cljs.core.async.t_cljs$core$async33418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33420){
var self__ = this;
var _33420__$1 = this;
return self__.meta33419;
}));

(cljs.core.async.t_cljs$core$async33418.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33418.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33418.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33418.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33418.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33419","meta33419",-1161500097,null)], null);
}));

(cljs.core.async.t_cljs$core$async33418.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33418");

(cljs.core.async.t_cljs$core$async33418.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33418");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33418.
 */
cljs.core.async.__GT_t_cljs$core$async33418 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33418(flag__$1,cb__$1,meta33419){
return (new cljs.core.async.t_cljs$core$async33418(flag__$1,cb__$1,meta33419));
});

}

return (new cljs.core.async.t_cljs$core$async33418(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33435_SHARP_){
var G__33461 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33435_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33461) : fret.call(null,G__33461));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33436_SHARP_){
var G__33462 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33436_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33462) : fret.call(null,G__33462));
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
var G__35653 = (i + (1));
i = G__35653;
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
var len__4789__auto___35661 = arguments.length;
var i__4790__auto___35662 = (0);
while(true){
if((i__4790__auto___35662 < len__4789__auto___35661)){
args__4795__auto__.push((arguments[i__4790__auto___35662]));

var G__35663 = (i__4790__auto___35662 + (1));
i__4790__auto___35662 = G__35663;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33467){
var map__33468 = p__33467;
var map__33468__$1 = (((((!((map__33468 == null))))?(((((map__33468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33468):map__33468);
var opts = map__33468__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33463){
var G__33464 = cljs.core.first(seq33463);
var seq33463__$1 = cljs.core.next(seq33463);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33464,seq33463__$1);
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
var G__33476 = arguments.length;
switch (G__33476) {
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
var c__33209__auto___35680 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33210__auto__ = (function (){var switch__32821__auto__ = (function (state_33512){
var state_val_33513 = (state_33512[(1)]);
if((state_val_33513 === (7))){
var inst_33507 = (state_33512[(2)]);
var state_33512__$1 = state_33512;
var statearr_33515_35682 = state_33512__$1;
(statearr_33515_35682[(2)] = inst_33507);

(statearr_33515_35682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33513 === (1))){
var state_33512__$1 = state_33512;
var statearr_33516_35683 = state_33512__$1;
(statearr_33516_35683[(2)] = null);

(statearr_33516_35683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33513 === (4))){
var inst_33488 = (state_33512[(7)]);
var inst_33488__$1 = (state_33512[(2)]);
var inst_33489 = (inst_33488__$1 == null);
var state_33512__$1 = (function (){var statearr_33517 = state_33512;
(statearr_33517[(7)] = inst_33488__$1);

return statearr_33517;
})();
if(cljs.core.truth_(inst_33489)){
var statearr_33518_35694 = state_33512__$1;
(statearr_33518_35694[(1)] = (5));

} else {
var statearr_33536_35695 = state_33512__$1;
(statearr_33536_35695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33513 === (13))){
var state_33512__$1 = state_33512;
var statearr_33540_35696 = state_33512__$1;
(statearr_33540_35696[(2)] = null);

(statearr_33540_35696[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33513 === (6))){
var inst_33488 = (state_33512[(7)]);
var state_33512__$1 = state_33512;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33512__$1,(11),to,inst_33488);
} else {
if((state_val_33513 === (3))){
var inst_33509 = (state_33512[(2)]);
var state_33512__$1 = state_33512;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33512__$1,inst_33509);
} else {
if((state_val_33513 === (12))){
var state_33512__$1 = state_33512;
var statearr_33544_35703 = state_33512__$1;
(statearr_33544_35703[(2)] = null);

(statearr_33544_35703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33513 === (2))){
var state_33512__$1 = state_33512;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33512__$1,(4),from);
} else {
if((state_val_33513 === (11))){
var inst_33500 = (state_33512[(2)]);
var state_33512__$1 = state_33512;
if(cljs.core.truth_(inst_33500)){
var statearr_33545_35707 = state_33512__$1;
(statearr_33545_35707[(1)] = (12));

} else {
var statearr_33546_35708 = state_33512__$1;
(statearr_33546_35708[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33513 === (9))){
var state_33512__$1 = state_33512;
var statearr_33548_35709 = state_33512__$1;
(statearr_33548_35709[(2)] = null);

(statearr_33548_35709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33513 === (5))){
var state_33512__$1 = state_33512;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33549_35711 = state_33512__$1;
(statearr_33549_35711[(1)] = (8));

} else {
var statearr_33552_35712 = state_33512__$1;
(statearr_33552_35712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33513 === (14))){
var inst_33505 = (state_33512[(2)]);
var state_33512__$1 = state_33512;
var statearr_33561_35714 = state_33512__$1;
(statearr_33561_35714[(2)] = inst_33505);

(statearr_33561_35714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33513 === (10))){
var inst_33497 = (state_33512[(2)]);
var state_33512__$1 = state_33512;
var statearr_33562_35715 = state_33512__$1;
(statearr_33562_35715[(2)] = inst_33497);

(statearr_33562_35715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33513 === (8))){
var inst_33494 = cljs.core.async.close_BANG_(to);
var state_33512__$1 = state_33512;
var statearr_33563_35716 = state_33512__$1;
(statearr_33563_35716[(2)] = inst_33494);

(statearr_33563_35716[(1)] = (10));


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
var cljs$core$async$state_machine__32822__auto__ = null;
var cljs$core$async$state_machine__32822__auto____0 = (function (){
var statearr_33564 = [null,null,null,null,null,null,null,null];
(statearr_33564[(0)] = cljs$core$async$state_machine__32822__auto__);

(statearr_33564[(1)] = (1));

return statearr_33564;
});
var cljs$core$async$state_machine__32822__auto____1 = (function (state_33512){
while(true){
var ret_value__32823__auto__ = (function (){try{while(true){
var result__32824__auto__ = switch__32821__auto__(state_33512);
if(cljs.core.keyword_identical_QMARK_(result__32824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32824__auto__;
}
break;
}
}catch (e33565){if((e33565 instanceof Object)){
var ex__32825__auto__ = e33565;
var statearr_33566_35717 = state_33512;
(statearr_33566_35717[(5)] = ex__32825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33565;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35718 = state_33512;
state_33512 = G__35718;
continue;
} else {
return ret_value__32823__auto__;
}
break;
}
});
cljs$core$async$state_machine__32822__auto__ = function(state_33512){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32822__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32822__auto____1.call(this,state_33512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32822__auto____0;
cljs$core$async$state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32822__auto____1;
return cljs$core$async$state_machine__32822__auto__;
})()
})();
var state__33211__auto__ = (function (){var statearr_33570 = (f__33210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33210__auto__.cljs$core$IFn$_invoke$arity$0() : f__33210__auto__.call(null));
(statearr_33570[(6)] = c__33209__auto___35680);

return statearr_33570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33211__auto__);
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
var process = (function (p__33594){
var vec__33595 = p__33594;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33595,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33595,(1),null);
var job = vec__33595;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33209__auto___35719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33210__auto__ = (function (){var switch__32821__auto__ = (function (state_33605){
var state_val_33606 = (state_33605[(1)]);
if((state_val_33606 === (1))){
var state_33605__$1 = state_33605;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33605__$1,(2),res,v);
} else {
if((state_val_33606 === (2))){
var inst_33602 = (state_33605[(2)]);
var inst_33603 = cljs.core.async.close_BANG_(res);
var state_33605__$1 = (function (){var statearr_33610 = state_33605;
(statearr_33610[(7)] = inst_33602);

return statearr_33610;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33605__$1,inst_33603);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____0 = (function (){
var statearr_33613 = [null,null,null,null,null,null,null,null];
(statearr_33613[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__);

(statearr_33613[(1)] = (1));

return statearr_33613;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____1 = (function (state_33605){
while(true){
var ret_value__32823__auto__ = (function (){try{while(true){
var result__32824__auto__ = switch__32821__auto__(state_33605);
if(cljs.core.keyword_identical_QMARK_(result__32824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32824__auto__;
}
break;
}
}catch (e33632){if((e33632 instanceof Object)){
var ex__32825__auto__ = e33632;
var statearr_33633_35723 = state_33605;
(statearr_33633_35723[(5)] = ex__32825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33632;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35724 = state_33605;
state_33605 = G__35724;
continue;
} else {
return ret_value__32823__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__ = function(state_33605){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____1.call(this,state_33605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__;
})()
})();
var state__33211__auto__ = (function (){var statearr_33638 = (f__33210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33210__auto__.cljs$core$IFn$_invoke$arity$0() : f__33210__auto__.call(null));
(statearr_33638[(6)] = c__33209__auto___35719);

return statearr_33638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33211__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33643){
var vec__33644 = p__33643;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33644,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33644,(1),null);
var job = vec__33644;
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
var n__4666__auto___35738 = n;
var __35739 = (0);
while(true){
if((__35739 < n__4666__auto___35738)){
var G__33659_35740 = type;
var G__33659_35741__$1 = (((G__33659_35740 instanceof cljs.core.Keyword))?G__33659_35740.fqn:null);
switch (G__33659_35741__$1) {
case "compute":
var c__33209__auto___35743 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35739,c__33209__auto___35743,G__33659_35740,G__33659_35741__$1,n__4666__auto___35738,jobs,results,process,async){
return (function (){
var f__33210__auto__ = (function (){var switch__32821__auto__ = ((function (__35739,c__33209__auto___35743,G__33659_35740,G__33659_35741__$1,n__4666__auto___35738,jobs,results,process,async){
return (function (state_33682){
var state_val_33683 = (state_33682[(1)]);
if((state_val_33683 === (1))){
var state_33682__$1 = state_33682;
var statearr_33687_35744 = state_33682__$1;
(statearr_33687_35744[(2)] = null);

(statearr_33687_35744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (2))){
var state_33682__$1 = state_33682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33682__$1,(4),jobs);
} else {
if((state_val_33683 === (3))){
var inst_33680 = (state_33682[(2)]);
var state_33682__$1 = state_33682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33682__$1,inst_33680);
} else {
if((state_val_33683 === (4))){
var inst_33670 = (state_33682[(2)]);
var inst_33672 = process(inst_33670);
var state_33682__$1 = state_33682;
if(cljs.core.truth_(inst_33672)){
var statearr_33697_35745 = state_33682__$1;
(statearr_33697_35745[(1)] = (5));

} else {
var statearr_33699_35746 = state_33682__$1;
(statearr_33699_35746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (5))){
var state_33682__$1 = state_33682;
var statearr_33702_35747 = state_33682__$1;
(statearr_33702_35747[(2)] = null);

(statearr_33702_35747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (6))){
var state_33682__$1 = state_33682;
var statearr_33704_35748 = state_33682__$1;
(statearr_33704_35748[(2)] = null);

(statearr_33704_35748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (7))){
var inst_33678 = (state_33682[(2)]);
var state_33682__$1 = state_33682;
var statearr_33706_35755 = state_33682__$1;
(statearr_33706_35755[(2)] = inst_33678);

(statearr_33706_35755[(1)] = (3));


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
});})(__35739,c__33209__auto___35743,G__33659_35740,G__33659_35741__$1,n__4666__auto___35738,jobs,results,process,async))
;
return ((function (__35739,switch__32821__auto__,c__33209__auto___35743,G__33659_35740,G__33659_35741__$1,n__4666__auto___35738,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____0 = (function (){
var statearr_33719 = [null,null,null,null,null,null,null];
(statearr_33719[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__);

(statearr_33719[(1)] = (1));

return statearr_33719;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____1 = (function (state_33682){
while(true){
var ret_value__32823__auto__ = (function (){try{while(true){
var result__32824__auto__ = switch__32821__auto__(state_33682);
if(cljs.core.keyword_identical_QMARK_(result__32824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32824__auto__;
}
break;
}
}catch (e33728){if((e33728 instanceof Object)){
var ex__32825__auto__ = e33728;
var statearr_33729_35756 = state_33682;
(statearr_33729_35756[(5)] = ex__32825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33728;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35757 = state_33682;
state_33682 = G__35757;
continue;
} else {
return ret_value__32823__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__ = function(state_33682){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____1.call(this,state_33682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__;
})()
;})(__35739,switch__32821__auto__,c__33209__auto___35743,G__33659_35740,G__33659_35741__$1,n__4666__auto___35738,jobs,results,process,async))
})();
var state__33211__auto__ = (function (){var statearr_33730 = (f__33210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33210__auto__.cljs$core$IFn$_invoke$arity$0() : f__33210__auto__.call(null));
(statearr_33730[(6)] = c__33209__auto___35743);

return statearr_33730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33211__auto__);
});})(__35739,c__33209__auto___35743,G__33659_35740,G__33659_35741__$1,n__4666__auto___35738,jobs,results,process,async))
);


break;
case "async":
var c__33209__auto___35786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35739,c__33209__auto___35786,G__33659_35740,G__33659_35741__$1,n__4666__auto___35738,jobs,results,process,async){
return (function (){
var f__33210__auto__ = (function (){var switch__32821__auto__ = ((function (__35739,c__33209__auto___35786,G__33659_35740,G__33659_35741__$1,n__4666__auto___35738,jobs,results,process,async){
return (function (state_33749){
var state_val_33750 = (state_33749[(1)]);
if((state_val_33750 === (1))){
var state_33749__$1 = state_33749;
var statearr_33751_35787 = state_33749__$1;
(statearr_33751_35787[(2)] = null);

(statearr_33751_35787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33750 === (2))){
var state_33749__$1 = state_33749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33749__$1,(4),jobs);
} else {
if((state_val_33750 === (3))){
var inst_33745 = (state_33749[(2)]);
var state_33749__$1 = state_33749;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33749__$1,inst_33745);
} else {
if((state_val_33750 === (4))){
var inst_33737 = (state_33749[(2)]);
var inst_33738 = async(inst_33737);
var state_33749__$1 = state_33749;
if(cljs.core.truth_(inst_33738)){
var statearr_33770_35788 = state_33749__$1;
(statearr_33770_35788[(1)] = (5));

} else {
var statearr_33771_35789 = state_33749__$1;
(statearr_33771_35789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33750 === (5))){
var state_33749__$1 = state_33749;
var statearr_33772_35790 = state_33749__$1;
(statearr_33772_35790[(2)] = null);

(statearr_33772_35790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33750 === (6))){
var state_33749__$1 = state_33749;
var statearr_33773_35791 = state_33749__$1;
(statearr_33773_35791[(2)] = null);

(statearr_33773_35791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33750 === (7))){
var inst_33743 = (state_33749[(2)]);
var state_33749__$1 = state_33749;
var statearr_33775_35793 = state_33749__$1;
(statearr_33775_35793[(2)] = inst_33743);

(statearr_33775_35793[(1)] = (3));


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
});})(__35739,c__33209__auto___35786,G__33659_35740,G__33659_35741__$1,n__4666__auto___35738,jobs,results,process,async))
;
return ((function (__35739,switch__32821__auto__,c__33209__auto___35786,G__33659_35740,G__33659_35741__$1,n__4666__auto___35738,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____0 = (function (){
var statearr_33778 = [null,null,null,null,null,null,null];
(statearr_33778[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__);

(statearr_33778[(1)] = (1));

return statearr_33778;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____1 = (function (state_33749){
while(true){
var ret_value__32823__auto__ = (function (){try{while(true){
var result__32824__auto__ = switch__32821__auto__(state_33749);
if(cljs.core.keyword_identical_QMARK_(result__32824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32824__auto__;
}
break;
}
}catch (e33779){if((e33779 instanceof Object)){
var ex__32825__auto__ = e33779;
var statearr_33780_35794 = state_33749;
(statearr_33780_35794[(5)] = ex__32825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33779;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35795 = state_33749;
state_33749 = G__35795;
continue;
} else {
return ret_value__32823__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__ = function(state_33749){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____1.call(this,state_33749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__;
})()
;})(__35739,switch__32821__auto__,c__33209__auto___35786,G__33659_35740,G__33659_35741__$1,n__4666__auto___35738,jobs,results,process,async))
})();
var state__33211__auto__ = (function (){var statearr_33781 = (f__33210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33210__auto__.cljs$core$IFn$_invoke$arity$0() : f__33210__auto__.call(null));
(statearr_33781[(6)] = c__33209__auto___35786);

return statearr_33781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33211__auto__);
});})(__35739,c__33209__auto___35786,G__33659_35740,G__33659_35741__$1,n__4666__auto___35738,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33659_35741__$1)].join('')));

}

var G__35796 = (__35739 + (1));
__35739 = G__35796;
continue;
} else {
}
break;
}

var c__33209__auto___35797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33210__auto__ = (function (){var switch__32821__auto__ = (function (state_33821){
var state_val_33822 = (state_33821[(1)]);
if((state_val_33822 === (7))){
var inst_33817 = (state_33821[(2)]);
var state_33821__$1 = state_33821;
var statearr_33826_35798 = state_33821__$1;
(statearr_33826_35798[(2)] = inst_33817);

(statearr_33826_35798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (1))){
var state_33821__$1 = state_33821;
var statearr_33897_35799 = state_33821__$1;
(statearr_33897_35799[(2)] = null);

(statearr_33897_35799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (4))){
var inst_33802 = (state_33821[(7)]);
var inst_33802__$1 = (state_33821[(2)]);
var inst_33803 = (inst_33802__$1 == null);
var state_33821__$1 = (function (){var statearr_33899 = state_33821;
(statearr_33899[(7)] = inst_33802__$1);

return statearr_33899;
})();
if(cljs.core.truth_(inst_33803)){
var statearr_33900_35800 = state_33821__$1;
(statearr_33900_35800[(1)] = (5));

} else {
var statearr_33901_35801 = state_33821__$1;
(statearr_33901_35801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (6))){
var inst_33807 = (state_33821[(8)]);
var inst_33802 = (state_33821[(7)]);
var inst_33807__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33808 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33809 = [inst_33802,inst_33807__$1];
var inst_33810 = (new cljs.core.PersistentVector(null,2,(5),inst_33808,inst_33809,null));
var state_33821__$1 = (function (){var statearr_33903 = state_33821;
(statearr_33903[(8)] = inst_33807__$1);

return statearr_33903;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33821__$1,(8),jobs,inst_33810);
} else {
if((state_val_33822 === (3))){
var inst_33819 = (state_33821[(2)]);
var state_33821__$1 = state_33821;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33821__$1,inst_33819);
} else {
if((state_val_33822 === (2))){
var state_33821__$1 = state_33821;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33821__$1,(4),from);
} else {
if((state_val_33822 === (9))){
var inst_33814 = (state_33821[(2)]);
var state_33821__$1 = (function (){var statearr_33914 = state_33821;
(statearr_33914[(9)] = inst_33814);

return statearr_33914;
})();
var statearr_33915_35802 = state_33821__$1;
(statearr_33915_35802[(2)] = null);

(statearr_33915_35802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (5))){
var inst_33805 = cljs.core.async.close_BANG_(jobs);
var state_33821__$1 = state_33821;
var statearr_33916_35803 = state_33821__$1;
(statearr_33916_35803[(2)] = inst_33805);

(statearr_33916_35803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (8))){
var inst_33807 = (state_33821[(8)]);
var inst_33812 = (state_33821[(2)]);
var state_33821__$1 = (function (){var statearr_33917 = state_33821;
(statearr_33917[(10)] = inst_33812);

return statearr_33917;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33821__$1,(9),results,inst_33807);
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
var cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____0 = (function (){
var statearr_33937 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33937[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__);

(statearr_33937[(1)] = (1));

return statearr_33937;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____1 = (function (state_33821){
while(true){
var ret_value__32823__auto__ = (function (){try{while(true){
var result__32824__auto__ = switch__32821__auto__(state_33821);
if(cljs.core.keyword_identical_QMARK_(result__32824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32824__auto__;
}
break;
}
}catch (e33939){if((e33939 instanceof Object)){
var ex__32825__auto__ = e33939;
var statearr_33940_35804 = state_33821;
(statearr_33940_35804[(5)] = ex__32825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33939;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35807 = state_33821;
state_33821 = G__35807;
continue;
} else {
return ret_value__32823__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__ = function(state_33821){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____1.call(this,state_33821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__;
})()
})();
var state__33211__auto__ = (function (){var statearr_33941 = (f__33210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33210__auto__.cljs$core$IFn$_invoke$arity$0() : f__33210__auto__.call(null));
(statearr_33941[(6)] = c__33209__auto___35797);

return statearr_33941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33211__auto__);
}));


var c__33209__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33210__auto__ = (function (){var switch__32821__auto__ = (function (state_33979){
var state_val_33980 = (state_33979[(1)]);
if((state_val_33980 === (7))){
var inst_33975 = (state_33979[(2)]);
var state_33979__$1 = state_33979;
var statearr_33981_35808 = state_33979__$1;
(statearr_33981_35808[(2)] = inst_33975);

(statearr_33981_35808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33980 === (20))){
var state_33979__$1 = state_33979;
var statearr_33987_35809 = state_33979__$1;
(statearr_33987_35809[(2)] = null);

(statearr_33987_35809[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33980 === (1))){
var state_33979__$1 = state_33979;
var statearr_33988_35810 = state_33979__$1;
(statearr_33988_35810[(2)] = null);

(statearr_33988_35810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33980 === (4))){
var inst_33944 = (state_33979[(7)]);
var inst_33944__$1 = (state_33979[(2)]);
var inst_33945 = (inst_33944__$1 == null);
var state_33979__$1 = (function (){var statearr_33989 = state_33979;
(statearr_33989[(7)] = inst_33944__$1);

return statearr_33989;
})();
if(cljs.core.truth_(inst_33945)){
var statearr_33990_35811 = state_33979__$1;
(statearr_33990_35811[(1)] = (5));

} else {
var statearr_33991_35812 = state_33979__$1;
(statearr_33991_35812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33980 === (15))){
var inst_33957 = (state_33979[(8)]);
var state_33979__$1 = state_33979;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33979__$1,(18),to,inst_33957);
} else {
if((state_val_33980 === (21))){
var inst_33970 = (state_33979[(2)]);
var state_33979__$1 = state_33979;
var statearr_33992_35813 = state_33979__$1;
(statearr_33992_35813[(2)] = inst_33970);

(statearr_33992_35813[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33980 === (13))){
var inst_33972 = (state_33979[(2)]);
var state_33979__$1 = (function (){var statearr_33997 = state_33979;
(statearr_33997[(9)] = inst_33972);

return statearr_33997;
})();
var statearr_33998_35814 = state_33979__$1;
(statearr_33998_35814[(2)] = null);

(statearr_33998_35814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33980 === (6))){
var inst_33944 = (state_33979[(7)]);
var state_33979__$1 = state_33979;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33979__$1,(11),inst_33944);
} else {
if((state_val_33980 === (17))){
var inst_33965 = (state_33979[(2)]);
var state_33979__$1 = state_33979;
if(cljs.core.truth_(inst_33965)){
var statearr_33999_35821 = state_33979__$1;
(statearr_33999_35821[(1)] = (19));

} else {
var statearr_34000_35822 = state_33979__$1;
(statearr_34000_35822[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33980 === (3))){
var inst_33977 = (state_33979[(2)]);
var state_33979__$1 = state_33979;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33979__$1,inst_33977);
} else {
if((state_val_33980 === (12))){
var inst_33954 = (state_33979[(10)]);
var state_33979__$1 = state_33979;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33979__$1,(14),inst_33954);
} else {
if((state_val_33980 === (2))){
var state_33979__$1 = state_33979;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33979__$1,(4),results);
} else {
if((state_val_33980 === (19))){
var state_33979__$1 = state_33979;
var statearr_34001_35823 = state_33979__$1;
(statearr_34001_35823[(2)] = null);

(statearr_34001_35823[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33980 === (11))){
var inst_33954 = (state_33979[(2)]);
var state_33979__$1 = (function (){var statearr_34002 = state_33979;
(statearr_34002[(10)] = inst_33954);

return statearr_34002;
})();
var statearr_34003_35824 = state_33979__$1;
(statearr_34003_35824[(2)] = null);

(statearr_34003_35824[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33980 === (9))){
var state_33979__$1 = state_33979;
var statearr_34004_35825 = state_33979__$1;
(statearr_34004_35825[(2)] = null);

(statearr_34004_35825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33980 === (5))){
var state_33979__$1 = state_33979;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34005_35826 = state_33979__$1;
(statearr_34005_35826[(1)] = (8));

} else {
var statearr_34006_35827 = state_33979__$1;
(statearr_34006_35827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33980 === (14))){
var inst_33957 = (state_33979[(8)]);
var inst_33957__$1 = (state_33979[(2)]);
var inst_33958 = (inst_33957__$1 == null);
var inst_33959 = cljs.core.not(inst_33958);
var state_33979__$1 = (function (){var statearr_34007 = state_33979;
(statearr_34007[(8)] = inst_33957__$1);

return statearr_34007;
})();
if(inst_33959){
var statearr_34008_35831 = state_33979__$1;
(statearr_34008_35831[(1)] = (15));

} else {
var statearr_34009_35832 = state_33979__$1;
(statearr_34009_35832[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33980 === (16))){
var state_33979__$1 = state_33979;
var statearr_34010_35833 = state_33979__$1;
(statearr_34010_35833[(2)] = false);

(statearr_34010_35833[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33980 === (10))){
var inst_33951 = (state_33979[(2)]);
var state_33979__$1 = state_33979;
var statearr_34011_35834 = state_33979__$1;
(statearr_34011_35834[(2)] = inst_33951);

(statearr_34011_35834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33980 === (18))){
var inst_33962 = (state_33979[(2)]);
var state_33979__$1 = state_33979;
var statearr_34012_35835 = state_33979__$1;
(statearr_34012_35835[(2)] = inst_33962);

(statearr_34012_35835[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33980 === (8))){
var inst_33948 = cljs.core.async.close_BANG_(to);
var state_33979__$1 = state_33979;
var statearr_34013_35836 = state_33979__$1;
(statearr_34013_35836[(2)] = inst_33948);

(statearr_34013_35836[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____0 = (function (){
var statearr_34014 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34014[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__);

(statearr_34014[(1)] = (1));

return statearr_34014;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____1 = (function (state_33979){
while(true){
var ret_value__32823__auto__ = (function (){try{while(true){
var result__32824__auto__ = switch__32821__auto__(state_33979);
if(cljs.core.keyword_identical_QMARK_(result__32824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32824__auto__;
}
break;
}
}catch (e34016){if((e34016 instanceof Object)){
var ex__32825__auto__ = e34016;
var statearr_34017_35837 = state_33979;
(statearr_34017_35837[(5)] = ex__32825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34016;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35838 = state_33979;
state_33979 = G__35838;
continue;
} else {
return ret_value__32823__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__ = function(state_33979){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____1.call(this,state_33979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32822__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32822__auto__;
})()
})();
var state__33211__auto__ = (function (){var statearr_34020 = (f__33210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33210__auto__.cljs$core$IFn$_invoke$arity$0() : f__33210__auto__.call(null));
(statearr_34020[(6)] = c__33209__auto__);

return statearr_34020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33211__auto__);
}));

return c__33209__auto__;
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
var G__34023 = arguments.length;
switch (G__34023) {
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
var G__34028 = arguments.length;
switch (G__34028) {
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
var G__34030 = arguments.length;
switch (G__34030) {
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
var c__33209__auto___35850 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33210__auto__ = (function (){var switch__32821__auto__ = (function (state_34057){
var state_val_34058 = (state_34057[(1)]);
if((state_val_34058 === (7))){
var inst_34053 = (state_34057[(2)]);
var state_34057__$1 = state_34057;
var statearr_34065_35851 = state_34057__$1;
(statearr_34065_35851[(2)] = inst_34053);

(statearr_34065_35851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34058 === (1))){
var state_34057__$1 = state_34057;
var statearr_34066_35852 = state_34057__$1;
(statearr_34066_35852[(2)] = null);

(statearr_34066_35852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34058 === (4))){
var inst_34034 = (state_34057[(7)]);
var inst_34034__$1 = (state_34057[(2)]);
var inst_34035 = (inst_34034__$1 == null);
var state_34057__$1 = (function (){var statearr_34067 = state_34057;
(statearr_34067[(7)] = inst_34034__$1);

return statearr_34067;
})();
if(cljs.core.truth_(inst_34035)){
var statearr_34068_35866 = state_34057__$1;
(statearr_34068_35866[(1)] = (5));

} else {
var statearr_34069_35867 = state_34057__$1;
(statearr_34069_35867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34058 === (13))){
var state_34057__$1 = state_34057;
var statearr_34070_35868 = state_34057__$1;
(statearr_34070_35868[(2)] = null);

(statearr_34070_35868[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34058 === (6))){
var inst_34034 = (state_34057[(7)]);
var inst_34040 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34034) : p.call(null,inst_34034));
var state_34057__$1 = state_34057;
if(cljs.core.truth_(inst_34040)){
var statearr_34071_35869 = state_34057__$1;
(statearr_34071_35869[(1)] = (9));

} else {
var statearr_34072_35870 = state_34057__$1;
(statearr_34072_35870[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34058 === (3))){
var inst_34055 = (state_34057[(2)]);
var state_34057__$1 = state_34057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34057__$1,inst_34055);
} else {
if((state_val_34058 === (12))){
var state_34057__$1 = state_34057;
var statearr_34073_35871 = state_34057__$1;
(statearr_34073_35871[(2)] = null);

(statearr_34073_35871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34058 === (2))){
var state_34057__$1 = state_34057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34057__$1,(4),ch);
} else {
if((state_val_34058 === (11))){
var inst_34034 = (state_34057[(7)]);
var inst_34044 = (state_34057[(2)]);
var state_34057__$1 = state_34057;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34057__$1,(8),inst_34044,inst_34034);
} else {
if((state_val_34058 === (9))){
var state_34057__$1 = state_34057;
var statearr_34074_35872 = state_34057__$1;
(statearr_34074_35872[(2)] = tc);

(statearr_34074_35872[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34058 === (5))){
var inst_34037 = cljs.core.async.close_BANG_(tc);
var inst_34038 = cljs.core.async.close_BANG_(fc);
var state_34057__$1 = (function (){var statearr_34075 = state_34057;
(statearr_34075[(8)] = inst_34037);

return statearr_34075;
})();
var statearr_34076_35873 = state_34057__$1;
(statearr_34076_35873[(2)] = inst_34038);

(statearr_34076_35873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34058 === (14))){
var inst_34051 = (state_34057[(2)]);
var state_34057__$1 = state_34057;
var statearr_34077_35874 = state_34057__$1;
(statearr_34077_35874[(2)] = inst_34051);

(statearr_34077_35874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34058 === (10))){
var state_34057__$1 = state_34057;
var statearr_34078_35875 = state_34057__$1;
(statearr_34078_35875[(2)] = fc);

(statearr_34078_35875[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34058 === (8))){
var inst_34046 = (state_34057[(2)]);
var state_34057__$1 = state_34057;
if(cljs.core.truth_(inst_34046)){
var statearr_34079_35876 = state_34057__$1;
(statearr_34079_35876[(1)] = (12));

} else {
var statearr_34080_35877 = state_34057__$1;
(statearr_34080_35877[(1)] = (13));

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
var cljs$core$async$state_machine__32822__auto__ = null;
var cljs$core$async$state_machine__32822__auto____0 = (function (){
var statearr_34081 = [null,null,null,null,null,null,null,null,null];
(statearr_34081[(0)] = cljs$core$async$state_machine__32822__auto__);

(statearr_34081[(1)] = (1));

return statearr_34081;
});
var cljs$core$async$state_machine__32822__auto____1 = (function (state_34057){
while(true){
var ret_value__32823__auto__ = (function (){try{while(true){
var result__32824__auto__ = switch__32821__auto__(state_34057);
if(cljs.core.keyword_identical_QMARK_(result__32824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32824__auto__;
}
break;
}
}catch (e34082){if((e34082 instanceof Object)){
var ex__32825__auto__ = e34082;
var statearr_34083_35878 = state_34057;
(statearr_34083_35878[(5)] = ex__32825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34082;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35885 = state_34057;
state_34057 = G__35885;
continue;
} else {
return ret_value__32823__auto__;
}
break;
}
});
cljs$core$async$state_machine__32822__auto__ = function(state_34057){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32822__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32822__auto____1.call(this,state_34057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32822__auto____0;
cljs$core$async$state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32822__auto____1;
return cljs$core$async$state_machine__32822__auto__;
})()
})();
var state__33211__auto__ = (function (){var statearr_34085 = (f__33210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33210__auto__.cljs$core$IFn$_invoke$arity$0() : f__33210__auto__.call(null));
(statearr_34085[(6)] = c__33209__auto___35850);

return statearr_34085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33211__auto__);
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
var c__33209__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33210__auto__ = (function (){var switch__32821__auto__ = (function (state_34106){
var state_val_34107 = (state_34106[(1)]);
if((state_val_34107 === (7))){
var inst_34102 = (state_34106[(2)]);
var state_34106__$1 = state_34106;
var statearr_34108_35886 = state_34106__$1;
(statearr_34108_35886[(2)] = inst_34102);

(statearr_34108_35886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34107 === (1))){
var inst_34086 = init;
var state_34106__$1 = (function (){var statearr_34109 = state_34106;
(statearr_34109[(7)] = inst_34086);

return statearr_34109;
})();
var statearr_34110_35887 = state_34106__$1;
(statearr_34110_35887[(2)] = null);

(statearr_34110_35887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34107 === (4))){
var inst_34089 = (state_34106[(8)]);
var inst_34089__$1 = (state_34106[(2)]);
var inst_34090 = (inst_34089__$1 == null);
var state_34106__$1 = (function (){var statearr_34111 = state_34106;
(statearr_34111[(8)] = inst_34089__$1);

return statearr_34111;
})();
if(cljs.core.truth_(inst_34090)){
var statearr_34112_35888 = state_34106__$1;
(statearr_34112_35888[(1)] = (5));

} else {
var statearr_34113_35889 = state_34106__$1;
(statearr_34113_35889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34107 === (6))){
var inst_34089 = (state_34106[(8)]);
var inst_34086 = (state_34106[(7)]);
var inst_34093 = (state_34106[(9)]);
var inst_34093__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34086,inst_34089) : f.call(null,inst_34086,inst_34089));
var inst_34094 = cljs.core.reduced_QMARK_(inst_34093__$1);
var state_34106__$1 = (function (){var statearr_34114 = state_34106;
(statearr_34114[(9)] = inst_34093__$1);

return statearr_34114;
})();
if(inst_34094){
var statearr_34115_35890 = state_34106__$1;
(statearr_34115_35890[(1)] = (8));

} else {
var statearr_34116_35891 = state_34106__$1;
(statearr_34116_35891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34107 === (3))){
var inst_34104 = (state_34106[(2)]);
var state_34106__$1 = state_34106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34106__$1,inst_34104);
} else {
if((state_val_34107 === (2))){
var state_34106__$1 = state_34106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34106__$1,(4),ch);
} else {
if((state_val_34107 === (9))){
var inst_34093 = (state_34106[(9)]);
var inst_34086 = inst_34093;
var state_34106__$1 = (function (){var statearr_34117 = state_34106;
(statearr_34117[(7)] = inst_34086);

return statearr_34117;
})();
var statearr_34118_35898 = state_34106__$1;
(statearr_34118_35898[(2)] = null);

(statearr_34118_35898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34107 === (5))){
var inst_34086 = (state_34106[(7)]);
var state_34106__$1 = state_34106;
var statearr_34119_35899 = state_34106__$1;
(statearr_34119_35899[(2)] = inst_34086);

(statearr_34119_35899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34107 === (10))){
var inst_34100 = (state_34106[(2)]);
var state_34106__$1 = state_34106;
var statearr_34120_35900 = state_34106__$1;
(statearr_34120_35900[(2)] = inst_34100);

(statearr_34120_35900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34107 === (8))){
var inst_34093 = (state_34106[(9)]);
var inst_34096 = cljs.core.deref(inst_34093);
var state_34106__$1 = state_34106;
var statearr_34121_35901 = state_34106__$1;
(statearr_34121_35901[(2)] = inst_34096);

(statearr_34121_35901[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__32822__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32822__auto____0 = (function (){
var statearr_34122 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34122[(0)] = cljs$core$async$reduce_$_state_machine__32822__auto__);

(statearr_34122[(1)] = (1));

return statearr_34122;
});
var cljs$core$async$reduce_$_state_machine__32822__auto____1 = (function (state_34106){
while(true){
var ret_value__32823__auto__ = (function (){try{while(true){
var result__32824__auto__ = switch__32821__auto__(state_34106);
if(cljs.core.keyword_identical_QMARK_(result__32824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32824__auto__;
}
break;
}
}catch (e34123){if((e34123 instanceof Object)){
var ex__32825__auto__ = e34123;
var statearr_34124_35908 = state_34106;
(statearr_34124_35908[(5)] = ex__32825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34123;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35909 = state_34106;
state_34106 = G__35909;
continue;
} else {
return ret_value__32823__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32822__auto__ = function(state_34106){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32822__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32822__auto____1.call(this,state_34106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32822__auto____0;
cljs$core$async$reduce_$_state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32822__auto____1;
return cljs$core$async$reduce_$_state_machine__32822__auto__;
})()
})();
var state__33211__auto__ = (function (){var statearr_34125 = (f__33210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33210__auto__.cljs$core$IFn$_invoke$arity$0() : f__33210__auto__.call(null));
(statearr_34125[(6)] = c__33209__auto__);

return statearr_34125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33211__auto__);
}));

return c__33209__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33209__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33210__auto__ = (function (){var switch__32821__auto__ = (function (state_34131){
var state_val_34132 = (state_34131[(1)]);
if((state_val_34132 === (1))){
var inst_34126 = cljs.core.async.reduce(f__$1,init,ch);
var state_34131__$1 = state_34131;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34131__$1,(2),inst_34126);
} else {
if((state_val_34132 === (2))){
var inst_34128 = (state_34131[(2)]);
var inst_34129 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34128) : f__$1.call(null,inst_34128));
var state_34131__$1 = state_34131;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34131__$1,inst_34129);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32822__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32822__auto____0 = (function (){
var statearr_34133 = [null,null,null,null,null,null,null];
(statearr_34133[(0)] = cljs$core$async$transduce_$_state_machine__32822__auto__);

(statearr_34133[(1)] = (1));

return statearr_34133;
});
var cljs$core$async$transduce_$_state_machine__32822__auto____1 = (function (state_34131){
while(true){
var ret_value__32823__auto__ = (function (){try{while(true){
var result__32824__auto__ = switch__32821__auto__(state_34131);
if(cljs.core.keyword_identical_QMARK_(result__32824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32824__auto__;
}
break;
}
}catch (e34134){if((e34134 instanceof Object)){
var ex__32825__auto__ = e34134;
var statearr_34135_35910 = state_34131;
(statearr_34135_35910[(5)] = ex__32825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34134;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35911 = state_34131;
state_34131 = G__35911;
continue;
} else {
return ret_value__32823__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32822__auto__ = function(state_34131){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32822__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32822__auto____1.call(this,state_34131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32822__auto____0;
cljs$core$async$transduce_$_state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32822__auto____1;
return cljs$core$async$transduce_$_state_machine__32822__auto__;
})()
})();
var state__33211__auto__ = (function (){var statearr_34136 = (f__33210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33210__auto__.cljs$core$IFn$_invoke$arity$0() : f__33210__auto__.call(null));
(statearr_34136[(6)] = c__33209__auto__);

return statearr_34136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33211__auto__);
}));

return c__33209__auto__;
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
var G__34147 = arguments.length;
switch (G__34147) {
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
var c__33209__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33210__auto__ = (function (){var switch__32821__auto__ = (function (state_34172){
var state_val_34173 = (state_34172[(1)]);
if((state_val_34173 === (7))){
var inst_34154 = (state_34172[(2)]);
var state_34172__$1 = state_34172;
var statearr_34174_35913 = state_34172__$1;
(statearr_34174_35913[(2)] = inst_34154);

(statearr_34174_35913[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34173 === (1))){
var inst_34148 = cljs.core.seq(coll);
var inst_34149 = inst_34148;
var state_34172__$1 = (function (){var statearr_34193 = state_34172;
(statearr_34193[(7)] = inst_34149);

return statearr_34193;
})();
var statearr_34194_35914 = state_34172__$1;
(statearr_34194_35914[(2)] = null);

(statearr_34194_35914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34173 === (4))){
var inst_34149 = (state_34172[(7)]);
var inst_34152 = cljs.core.first(inst_34149);
var state_34172__$1 = state_34172;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34172__$1,(7),ch,inst_34152);
} else {
if((state_val_34173 === (13))){
var inst_34166 = (state_34172[(2)]);
var state_34172__$1 = state_34172;
var statearr_34196_35915 = state_34172__$1;
(statearr_34196_35915[(2)] = inst_34166);

(statearr_34196_35915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34173 === (6))){
var inst_34157 = (state_34172[(2)]);
var state_34172__$1 = state_34172;
if(cljs.core.truth_(inst_34157)){
var statearr_34197_35916 = state_34172__$1;
(statearr_34197_35916[(1)] = (8));

} else {
var statearr_34198_35917 = state_34172__$1;
(statearr_34198_35917[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34173 === (3))){
var inst_34170 = (state_34172[(2)]);
var state_34172__$1 = state_34172;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34172__$1,inst_34170);
} else {
if((state_val_34173 === (12))){
var state_34172__$1 = state_34172;
var statearr_34199_35918 = state_34172__$1;
(statearr_34199_35918[(2)] = null);

(statearr_34199_35918[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34173 === (2))){
var inst_34149 = (state_34172[(7)]);
var state_34172__$1 = state_34172;
if(cljs.core.truth_(inst_34149)){
var statearr_34202_35919 = state_34172__$1;
(statearr_34202_35919[(1)] = (4));

} else {
var statearr_34203_35920 = state_34172__$1;
(statearr_34203_35920[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34173 === (11))){
var inst_34163 = cljs.core.async.close_BANG_(ch);
var state_34172__$1 = state_34172;
var statearr_34204_35921 = state_34172__$1;
(statearr_34204_35921[(2)] = inst_34163);

(statearr_34204_35921[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34173 === (9))){
var state_34172__$1 = state_34172;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34205_35922 = state_34172__$1;
(statearr_34205_35922[(1)] = (11));

} else {
var statearr_34206_35923 = state_34172__$1;
(statearr_34206_35923[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34173 === (5))){
var inst_34149 = (state_34172[(7)]);
var state_34172__$1 = state_34172;
var statearr_34208_35924 = state_34172__$1;
(statearr_34208_35924[(2)] = inst_34149);

(statearr_34208_35924[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34173 === (10))){
var inst_34168 = (state_34172[(2)]);
var state_34172__$1 = state_34172;
var statearr_34209_35925 = state_34172__$1;
(statearr_34209_35925[(2)] = inst_34168);

(statearr_34209_35925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34173 === (8))){
var inst_34149 = (state_34172[(7)]);
var inst_34159 = cljs.core.next(inst_34149);
var inst_34149__$1 = inst_34159;
var state_34172__$1 = (function (){var statearr_34212 = state_34172;
(statearr_34212[(7)] = inst_34149__$1);

return statearr_34212;
})();
var statearr_34213_35926 = state_34172__$1;
(statearr_34213_35926[(2)] = null);

(statearr_34213_35926[(1)] = (2));


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
var cljs$core$async$state_machine__32822__auto__ = null;
var cljs$core$async$state_machine__32822__auto____0 = (function (){
var statearr_34214 = [null,null,null,null,null,null,null,null];
(statearr_34214[(0)] = cljs$core$async$state_machine__32822__auto__);

(statearr_34214[(1)] = (1));

return statearr_34214;
});
var cljs$core$async$state_machine__32822__auto____1 = (function (state_34172){
while(true){
var ret_value__32823__auto__ = (function (){try{while(true){
var result__32824__auto__ = switch__32821__auto__(state_34172);
if(cljs.core.keyword_identical_QMARK_(result__32824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32824__auto__;
}
break;
}
}catch (e34215){if((e34215 instanceof Object)){
var ex__32825__auto__ = e34215;
var statearr_34216_35927 = state_34172;
(statearr_34216_35927[(5)] = ex__32825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34215;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35928 = state_34172;
state_34172 = G__35928;
continue;
} else {
return ret_value__32823__auto__;
}
break;
}
});
cljs$core$async$state_machine__32822__auto__ = function(state_34172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32822__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32822__auto____1.call(this,state_34172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32822__auto____0;
cljs$core$async$state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32822__auto____1;
return cljs$core$async$state_machine__32822__auto__;
})()
})();
var state__33211__auto__ = (function (){var statearr_34217 = (f__33210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33210__auto__.cljs$core$IFn$_invoke$arity$0() : f__33210__auto__.call(null));
(statearr_34217[(6)] = c__33209__auto__);

return statearr_34217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33211__auto__);
}));

return c__33209__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34233 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34233 = (function (ch,cs,meta34234){
this.ch = ch;
this.cs = cs;
this.meta34234 = meta34234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34235,meta34234__$1){
var self__ = this;
var _34235__$1 = this;
return (new cljs.core.async.t_cljs$core$async34233(self__.ch,self__.cs,meta34234__$1));
}));

(cljs.core.async.t_cljs$core$async34233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34235){
var self__ = this;
var _34235__$1 = this;
return self__.meta34234;
}));

(cljs.core.async.t_cljs$core$async34233.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34233.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34233.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34233.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34233.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34233.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34233.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34234","meta34234",1689865081,null)], null);
}));

(cljs.core.async.t_cljs$core$async34233.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34233");

(cljs.core.async.t_cljs$core$async34233.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34233");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34233.
 */
cljs.core.async.__GT_t_cljs$core$async34233 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34233(ch__$1,cs__$1,meta34234){
return (new cljs.core.async.t_cljs$core$async34233(ch__$1,cs__$1,meta34234));
});

}

return (new cljs.core.async.t_cljs$core$async34233(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33209__auto___35931 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33210__auto__ = (function (){var switch__32821__auto__ = (function (state_34446){
var state_val_34447 = (state_34446[(1)]);
if((state_val_34447 === (7))){
var inst_34442 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
var statearr_34448_35932 = state_34446__$1;
(statearr_34448_35932[(2)] = inst_34442);

(statearr_34448_35932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (20))){
var inst_34284 = (state_34446[(7)]);
var inst_34296 = cljs.core.first(inst_34284);
var inst_34297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34296,(0),null);
var inst_34326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34296,(1),null);
var state_34446__$1 = (function (){var statearr_34449 = state_34446;
(statearr_34449[(8)] = inst_34297);

return statearr_34449;
})();
if(cljs.core.truth_(inst_34326)){
var statearr_34450_35937 = state_34446__$1;
(statearr_34450_35937[(1)] = (22));

} else {
var statearr_34451_35938 = state_34446__$1;
(statearr_34451_35938[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (27))){
var inst_34356 = (state_34446[(9)]);
var inst_34354 = (state_34446[(10)]);
var inst_34365 = (state_34446[(11)]);
var inst_34243 = (state_34446[(12)]);
var inst_34365__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34354,inst_34356);
var inst_34366 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34365__$1,inst_34243,done);
var state_34446__$1 = (function (){var statearr_34452 = state_34446;
(statearr_34452[(11)] = inst_34365__$1);

return statearr_34452;
})();
if(cljs.core.truth_(inst_34366)){
var statearr_34453_35939 = state_34446__$1;
(statearr_34453_35939[(1)] = (30));

} else {
var statearr_34454_35940 = state_34446__$1;
(statearr_34454_35940[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (1))){
var state_34446__$1 = state_34446;
var statearr_34455_35941 = state_34446__$1;
(statearr_34455_35941[(2)] = null);

(statearr_34455_35941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (24))){
var inst_34284 = (state_34446[(7)]);
var inst_34331 = (state_34446[(2)]);
var inst_34332 = cljs.core.next(inst_34284);
var inst_34252 = inst_34332;
var inst_34253 = null;
var inst_34254 = (0);
var inst_34255 = (0);
var state_34446__$1 = (function (){var statearr_34456 = state_34446;
(statearr_34456[(13)] = inst_34254);

(statearr_34456[(14)] = inst_34253);

(statearr_34456[(15)] = inst_34331);

(statearr_34456[(16)] = inst_34252);

(statearr_34456[(17)] = inst_34255);

return statearr_34456;
})();
var statearr_34457_35942 = state_34446__$1;
(statearr_34457_35942[(2)] = null);

(statearr_34457_35942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (39))){
var state_34446__$1 = state_34446;
var statearr_34461_35943 = state_34446__$1;
(statearr_34461_35943[(2)] = null);

(statearr_34461_35943[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (4))){
var inst_34243 = (state_34446[(12)]);
var inst_34243__$1 = (state_34446[(2)]);
var inst_34244 = (inst_34243__$1 == null);
var state_34446__$1 = (function (){var statearr_34462 = state_34446;
(statearr_34462[(12)] = inst_34243__$1);

return statearr_34462;
})();
if(cljs.core.truth_(inst_34244)){
var statearr_34463_35944 = state_34446__$1;
(statearr_34463_35944[(1)] = (5));

} else {
var statearr_34464_35945 = state_34446__$1;
(statearr_34464_35945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (15))){
var inst_34254 = (state_34446[(13)]);
var inst_34253 = (state_34446[(14)]);
var inst_34252 = (state_34446[(16)]);
var inst_34255 = (state_34446[(17)]);
var inst_34280 = (state_34446[(2)]);
var inst_34281 = (inst_34255 + (1));
var tmp34458 = inst_34254;
var tmp34459 = inst_34253;
var tmp34460 = inst_34252;
var inst_34252__$1 = tmp34460;
var inst_34253__$1 = tmp34459;
var inst_34254__$1 = tmp34458;
var inst_34255__$1 = inst_34281;
var state_34446__$1 = (function (){var statearr_34465 = state_34446;
(statearr_34465[(13)] = inst_34254__$1);

(statearr_34465[(14)] = inst_34253__$1);

(statearr_34465[(18)] = inst_34280);

(statearr_34465[(16)] = inst_34252__$1);

(statearr_34465[(17)] = inst_34255__$1);

return statearr_34465;
})();
var statearr_34466_35950 = state_34446__$1;
(statearr_34466_35950[(2)] = null);

(statearr_34466_35950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (21))){
var inst_34335 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
var statearr_34470_35951 = state_34446__$1;
(statearr_34470_35951[(2)] = inst_34335);

(statearr_34470_35951[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (31))){
var inst_34365 = (state_34446[(11)]);
var inst_34369 = done(null);
var inst_34370 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34365);
var state_34446__$1 = (function (){var statearr_34471 = state_34446;
(statearr_34471[(19)] = inst_34369);

return statearr_34471;
})();
var statearr_34472_35952 = state_34446__$1;
(statearr_34472_35952[(2)] = inst_34370);

(statearr_34472_35952[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (32))){
var inst_34356 = (state_34446[(9)]);
var inst_34353 = (state_34446[(20)]);
var inst_34354 = (state_34446[(10)]);
var inst_34355 = (state_34446[(21)]);
var inst_34372 = (state_34446[(2)]);
var inst_34373 = (inst_34356 + (1));
var tmp34467 = inst_34353;
var tmp34468 = inst_34354;
var tmp34469 = inst_34355;
var inst_34353__$1 = tmp34467;
var inst_34354__$1 = tmp34468;
var inst_34355__$1 = tmp34469;
var inst_34356__$1 = inst_34373;
var state_34446__$1 = (function (){var statearr_34473 = state_34446;
(statearr_34473[(22)] = inst_34372);

(statearr_34473[(9)] = inst_34356__$1);

(statearr_34473[(20)] = inst_34353__$1);

(statearr_34473[(10)] = inst_34354__$1);

(statearr_34473[(21)] = inst_34355__$1);

return statearr_34473;
})();
var statearr_34474_35953 = state_34446__$1;
(statearr_34474_35953[(2)] = null);

(statearr_34474_35953[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (40))){
var inst_34385 = (state_34446[(23)]);
var inst_34389 = done(null);
var inst_34390 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34385);
var state_34446__$1 = (function (){var statearr_34480 = state_34446;
(statearr_34480[(24)] = inst_34389);

return statearr_34480;
})();
var statearr_34481_35956 = state_34446__$1;
(statearr_34481_35956[(2)] = inst_34390);

(statearr_34481_35956[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (33))){
var inst_34376 = (state_34446[(25)]);
var inst_34378 = cljs.core.chunked_seq_QMARK_(inst_34376);
var state_34446__$1 = state_34446;
if(inst_34378){
var statearr_34482_35957 = state_34446__$1;
(statearr_34482_35957[(1)] = (36));

} else {
var statearr_34483_35958 = state_34446__$1;
(statearr_34483_35958[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (13))){
var inst_34274 = (state_34446[(26)]);
var inst_34277 = cljs.core.async.close_BANG_(inst_34274);
var state_34446__$1 = state_34446;
var statearr_34484_35959 = state_34446__$1;
(statearr_34484_35959[(2)] = inst_34277);

(statearr_34484_35959[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (22))){
var inst_34297 = (state_34446[(8)]);
var inst_34328 = cljs.core.async.close_BANG_(inst_34297);
var state_34446__$1 = state_34446;
var statearr_34485_35960 = state_34446__$1;
(statearr_34485_35960[(2)] = inst_34328);

(statearr_34485_35960[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (36))){
var inst_34376 = (state_34446[(25)]);
var inst_34380 = cljs.core.chunk_first(inst_34376);
var inst_34381 = cljs.core.chunk_rest(inst_34376);
var inst_34382 = cljs.core.count(inst_34380);
var inst_34353 = inst_34381;
var inst_34354 = inst_34380;
var inst_34355 = inst_34382;
var inst_34356 = (0);
var state_34446__$1 = (function (){var statearr_34486 = state_34446;
(statearr_34486[(9)] = inst_34356);

(statearr_34486[(20)] = inst_34353);

(statearr_34486[(10)] = inst_34354);

(statearr_34486[(21)] = inst_34355);

return statearr_34486;
})();
var statearr_34487_35961 = state_34446__$1;
(statearr_34487_35961[(2)] = null);

(statearr_34487_35961[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (41))){
var inst_34376 = (state_34446[(25)]);
var inst_34392 = (state_34446[(2)]);
var inst_34422 = cljs.core.next(inst_34376);
var inst_34353 = inst_34422;
var inst_34354 = null;
var inst_34355 = (0);
var inst_34356 = (0);
var state_34446__$1 = (function (){var statearr_34488 = state_34446;
(statearr_34488[(9)] = inst_34356);

(statearr_34488[(20)] = inst_34353);

(statearr_34488[(10)] = inst_34354);

(statearr_34488[(27)] = inst_34392);

(statearr_34488[(21)] = inst_34355);

return statearr_34488;
})();
var statearr_34489_35962 = state_34446__$1;
(statearr_34489_35962[(2)] = null);

(statearr_34489_35962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (43))){
var state_34446__$1 = state_34446;
var statearr_34490_35963 = state_34446__$1;
(statearr_34490_35963[(2)] = null);

(statearr_34490_35963[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (29))){
var inst_34430 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
var statearr_34491_35964 = state_34446__$1;
(statearr_34491_35964[(2)] = inst_34430);

(statearr_34491_35964[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (44))){
var inst_34439 = (state_34446[(2)]);
var state_34446__$1 = (function (){var statearr_34492 = state_34446;
(statearr_34492[(28)] = inst_34439);

return statearr_34492;
})();
var statearr_34493_35965 = state_34446__$1;
(statearr_34493_35965[(2)] = null);

(statearr_34493_35965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (6))){
var inst_34345 = (state_34446[(29)]);
var inst_34344 = cljs.core.deref(cs);
var inst_34345__$1 = cljs.core.keys(inst_34344);
var inst_34346 = cljs.core.count(inst_34345__$1);
var inst_34347 = cljs.core.reset_BANG_(dctr,inst_34346);
var inst_34352 = cljs.core.seq(inst_34345__$1);
var inst_34353 = inst_34352;
var inst_34354 = null;
var inst_34355 = (0);
var inst_34356 = (0);
var state_34446__$1 = (function (){var statearr_34494 = state_34446;
(statearr_34494[(29)] = inst_34345__$1);

(statearr_34494[(9)] = inst_34356);

(statearr_34494[(20)] = inst_34353);

(statearr_34494[(30)] = inst_34347);

(statearr_34494[(10)] = inst_34354);

(statearr_34494[(21)] = inst_34355);

return statearr_34494;
})();
var statearr_34495_35966 = state_34446__$1;
(statearr_34495_35966[(2)] = null);

(statearr_34495_35966[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (28))){
var inst_34376 = (state_34446[(25)]);
var inst_34353 = (state_34446[(20)]);
var inst_34376__$1 = cljs.core.seq(inst_34353);
var state_34446__$1 = (function (){var statearr_34496 = state_34446;
(statearr_34496[(25)] = inst_34376__$1);

return statearr_34496;
})();
if(inst_34376__$1){
var statearr_34497_35967 = state_34446__$1;
(statearr_34497_35967[(1)] = (33));

} else {
var statearr_34498_35968 = state_34446__$1;
(statearr_34498_35968[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (25))){
var inst_34356 = (state_34446[(9)]);
var inst_34355 = (state_34446[(21)]);
var inst_34362 = (inst_34356 < inst_34355);
var inst_34363 = inst_34362;
var state_34446__$1 = state_34446;
if(cljs.core.truth_(inst_34363)){
var statearr_34499_35969 = state_34446__$1;
(statearr_34499_35969[(1)] = (27));

} else {
var statearr_34500_35970 = state_34446__$1;
(statearr_34500_35970[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (34))){
var state_34446__$1 = state_34446;
var statearr_34501_35971 = state_34446__$1;
(statearr_34501_35971[(2)] = null);

(statearr_34501_35971[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (17))){
var state_34446__$1 = state_34446;
var statearr_34502_35972 = state_34446__$1;
(statearr_34502_35972[(2)] = null);

(statearr_34502_35972[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (3))){
var inst_34444 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34446__$1,inst_34444);
} else {
if((state_val_34447 === (12))){
var inst_34340 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
var statearr_34503_35973 = state_34446__$1;
(statearr_34503_35973[(2)] = inst_34340);

(statearr_34503_35973[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (2))){
var state_34446__$1 = state_34446;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34446__$1,(4),ch);
} else {
if((state_val_34447 === (23))){
var state_34446__$1 = state_34446;
var statearr_34504_35976 = state_34446__$1;
(statearr_34504_35976[(2)] = null);

(statearr_34504_35976[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (35))){
var inst_34428 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
var statearr_34518_35977 = state_34446__$1;
(statearr_34518_35977[(2)] = inst_34428);

(statearr_34518_35977[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (19))){
var inst_34284 = (state_34446[(7)]);
var inst_34288 = cljs.core.chunk_first(inst_34284);
var inst_34289 = cljs.core.chunk_rest(inst_34284);
var inst_34290 = cljs.core.count(inst_34288);
var inst_34252 = inst_34289;
var inst_34253 = inst_34288;
var inst_34254 = inst_34290;
var inst_34255 = (0);
var state_34446__$1 = (function (){var statearr_34519 = state_34446;
(statearr_34519[(13)] = inst_34254);

(statearr_34519[(14)] = inst_34253);

(statearr_34519[(16)] = inst_34252);

(statearr_34519[(17)] = inst_34255);

return statearr_34519;
})();
var statearr_34520_35978 = state_34446__$1;
(statearr_34520_35978[(2)] = null);

(statearr_34520_35978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (11))){
var inst_34284 = (state_34446[(7)]);
var inst_34252 = (state_34446[(16)]);
var inst_34284__$1 = cljs.core.seq(inst_34252);
var state_34446__$1 = (function (){var statearr_34521 = state_34446;
(statearr_34521[(7)] = inst_34284__$1);

return statearr_34521;
})();
if(inst_34284__$1){
var statearr_34522_35979 = state_34446__$1;
(statearr_34522_35979[(1)] = (16));

} else {
var statearr_34523_35980 = state_34446__$1;
(statearr_34523_35980[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (9))){
var inst_34342 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
var statearr_34524_35981 = state_34446__$1;
(statearr_34524_35981[(2)] = inst_34342);

(statearr_34524_35981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (5))){
var inst_34250 = cljs.core.deref(cs);
var inst_34251 = cljs.core.seq(inst_34250);
var inst_34252 = inst_34251;
var inst_34253 = null;
var inst_34254 = (0);
var inst_34255 = (0);
var state_34446__$1 = (function (){var statearr_34525 = state_34446;
(statearr_34525[(13)] = inst_34254);

(statearr_34525[(14)] = inst_34253);

(statearr_34525[(16)] = inst_34252);

(statearr_34525[(17)] = inst_34255);

return statearr_34525;
})();
var statearr_34526_35982 = state_34446__$1;
(statearr_34526_35982[(2)] = null);

(statearr_34526_35982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (14))){
var state_34446__$1 = state_34446;
var statearr_34527_35983 = state_34446__$1;
(statearr_34527_35983[(2)] = null);

(statearr_34527_35983[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (45))){
var inst_34436 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
var statearr_34528_35984 = state_34446__$1;
(statearr_34528_35984[(2)] = inst_34436);

(statearr_34528_35984[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (26))){
var inst_34345 = (state_34446[(29)]);
var inst_34432 = (state_34446[(2)]);
var inst_34433 = cljs.core.seq(inst_34345);
var state_34446__$1 = (function (){var statearr_34529 = state_34446;
(statearr_34529[(31)] = inst_34432);

return statearr_34529;
})();
if(inst_34433){
var statearr_34530_35985 = state_34446__$1;
(statearr_34530_35985[(1)] = (42));

} else {
var statearr_34531_35986 = state_34446__$1;
(statearr_34531_35986[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (16))){
var inst_34284 = (state_34446[(7)]);
var inst_34286 = cljs.core.chunked_seq_QMARK_(inst_34284);
var state_34446__$1 = state_34446;
if(inst_34286){
var statearr_34532_35987 = state_34446__$1;
(statearr_34532_35987[(1)] = (19));

} else {
var statearr_34533_35988 = state_34446__$1;
(statearr_34533_35988[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (38))){
var inst_34425 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
var statearr_34534_35989 = state_34446__$1;
(statearr_34534_35989[(2)] = inst_34425);

(statearr_34534_35989[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (30))){
var state_34446__$1 = state_34446;
var statearr_34535_35990 = state_34446__$1;
(statearr_34535_35990[(2)] = null);

(statearr_34535_35990[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (10))){
var inst_34253 = (state_34446[(14)]);
var inst_34255 = (state_34446[(17)]);
var inst_34263 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34253,inst_34255);
var inst_34274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34263,(0),null);
var inst_34275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34263,(1),null);
var state_34446__$1 = (function (){var statearr_34547 = state_34446;
(statearr_34547[(26)] = inst_34274);

return statearr_34547;
})();
if(cljs.core.truth_(inst_34275)){
var statearr_34548_35991 = state_34446__$1;
(statearr_34548_35991[(1)] = (13));

} else {
var statearr_34549_35992 = state_34446__$1;
(statearr_34549_35992[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (18))){
var inst_34338 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
var statearr_34550_35993 = state_34446__$1;
(statearr_34550_35993[(2)] = inst_34338);

(statearr_34550_35993[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (42))){
var state_34446__$1 = state_34446;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34446__$1,(45),dchan);
} else {
if((state_val_34447 === (37))){
var inst_34376 = (state_34446[(25)]);
var inst_34385 = (state_34446[(23)]);
var inst_34243 = (state_34446[(12)]);
var inst_34385__$1 = cljs.core.first(inst_34376);
var inst_34386 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34385__$1,inst_34243,done);
var state_34446__$1 = (function (){var statearr_34551 = state_34446;
(statearr_34551[(23)] = inst_34385__$1);

return statearr_34551;
})();
if(cljs.core.truth_(inst_34386)){
var statearr_34552_35994 = state_34446__$1;
(statearr_34552_35994[(1)] = (39));

} else {
var statearr_34553_35995 = state_34446__$1;
(statearr_34553_35995[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (8))){
var inst_34254 = (state_34446[(13)]);
var inst_34255 = (state_34446[(17)]);
var inst_34257 = (inst_34255 < inst_34254);
var inst_34258 = inst_34257;
var state_34446__$1 = state_34446;
if(cljs.core.truth_(inst_34258)){
var statearr_34554_35996 = state_34446__$1;
(statearr_34554_35996[(1)] = (10));

} else {
var statearr_34555_35997 = state_34446__$1;
(statearr_34555_35997[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__32822__auto__ = null;
var cljs$core$async$mult_$_state_machine__32822__auto____0 = (function (){
var statearr_34556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34556[(0)] = cljs$core$async$mult_$_state_machine__32822__auto__);

(statearr_34556[(1)] = (1));

return statearr_34556;
});
var cljs$core$async$mult_$_state_machine__32822__auto____1 = (function (state_34446){
while(true){
var ret_value__32823__auto__ = (function (){try{while(true){
var result__32824__auto__ = switch__32821__auto__(state_34446);
if(cljs.core.keyword_identical_QMARK_(result__32824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32824__auto__;
}
break;
}
}catch (e34557){if((e34557 instanceof Object)){
var ex__32825__auto__ = e34557;
var statearr_34558_35998 = state_34446;
(statearr_34558_35998[(5)] = ex__32825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34557;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35999 = state_34446;
state_34446 = G__35999;
continue;
} else {
return ret_value__32823__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32822__auto__ = function(state_34446){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32822__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32822__auto____1.call(this,state_34446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32822__auto____0;
cljs$core$async$mult_$_state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32822__auto____1;
return cljs$core$async$mult_$_state_machine__32822__auto__;
})()
})();
var state__33211__auto__ = (function (){var statearr_34559 = (f__33210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33210__auto__.cljs$core$IFn$_invoke$arity$0() : f__33210__auto__.call(null));
(statearr_34559[(6)] = c__33209__auto___35931);

return statearr_34559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33211__auto__);
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
var G__34561 = arguments.length;
switch (G__34561) {
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
var len__4789__auto___36023 = arguments.length;
var i__4790__auto___36039 = (0);
while(true){
if((i__4790__auto___36039 < len__4789__auto___36023)){
args__4795__auto__.push((arguments[i__4790__auto___36039]));

var G__36041 = (i__4790__auto___36039 + (1));
i__4790__auto___36039 = G__36041;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34567){
var map__34568 = p__34567;
var map__34568__$1 = (((((!((map__34568 == null))))?(((((map__34568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34568):map__34568);
var opts = map__34568__$1;
var statearr_34570_36059 = state;
(statearr_34570_36059[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34571_36060 = state;
(statearr_34571_36060[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_34581_36061 = state;
(statearr_34581_36061[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34563){
var G__34564 = cljs.core.first(seq34563);
var seq34563__$1 = cljs.core.next(seq34563);
var G__34565 = cljs.core.first(seq34563__$1);
var seq34563__$2 = cljs.core.next(seq34563__$1);
var G__34566 = cljs.core.first(seq34563__$2);
var seq34563__$3 = cljs.core.next(seq34563__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34564,G__34565,G__34566,seq34563__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34586 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34586 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34587){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34587 = meta34587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34588,meta34587__$1){
var self__ = this;
var _34588__$1 = this;
return (new cljs.core.async.t_cljs$core$async34586(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34587__$1));
}));

(cljs.core.async.t_cljs$core$async34586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34588){
var self__ = this;
var _34588__$1 = this;
return self__.meta34587;
}));

(cljs.core.async.t_cljs$core$async34586.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34586.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34586.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34586.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34586.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34586.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34586.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34586.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34586.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34587","meta34587",-1259226904,null)], null);
}));

(cljs.core.async.t_cljs$core$async34586.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34586.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34586");

(cljs.core.async.t_cljs$core$async34586.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34586");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34586.
 */
cljs.core.async.__GT_t_cljs$core$async34586 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34586(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34587){
return (new cljs.core.async.t_cljs$core$async34586(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34587));
});

}

return (new cljs.core.async.t_cljs$core$async34586(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33209__auto___36079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33210__auto__ = (function (){var switch__32821__auto__ = (function (state_34690){
var state_val_34691 = (state_34690[(1)]);
if((state_val_34691 === (7))){
var inst_34605 = (state_34690[(2)]);
var state_34690__$1 = state_34690;
var statearr_34692_36080 = state_34690__$1;
(statearr_34692_36080[(2)] = inst_34605);

(statearr_34692_36080[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (20))){
var inst_34617 = (state_34690[(7)]);
var state_34690__$1 = state_34690;
var statearr_34693_36083 = state_34690__$1;
(statearr_34693_36083[(2)] = inst_34617);

(statearr_34693_36083[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (27))){
var state_34690__$1 = state_34690;
var statearr_34694_36084 = state_34690__$1;
(statearr_34694_36084[(2)] = null);

(statearr_34694_36084[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (1))){
var inst_34592 = (state_34690[(8)]);
var inst_34592__$1 = calc_state();
var inst_34594 = (inst_34592__$1 == null);
var inst_34595 = cljs.core.not(inst_34594);
var state_34690__$1 = (function (){var statearr_34695 = state_34690;
(statearr_34695[(8)] = inst_34592__$1);

return statearr_34695;
})();
if(inst_34595){
var statearr_34696_36088 = state_34690__$1;
(statearr_34696_36088[(1)] = (2));

} else {
var statearr_34697_36089 = state_34690__$1;
(statearr_34697_36089[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (24))){
var inst_34664 = (state_34690[(9)]);
var inst_34650 = (state_34690[(10)]);
var inst_34641 = (state_34690[(11)]);
var inst_34664__$1 = (inst_34641.cljs$core$IFn$_invoke$arity$1 ? inst_34641.cljs$core$IFn$_invoke$arity$1(inst_34650) : inst_34641.call(null,inst_34650));
var state_34690__$1 = (function (){var statearr_34698 = state_34690;
(statearr_34698[(9)] = inst_34664__$1);

return statearr_34698;
})();
if(cljs.core.truth_(inst_34664__$1)){
var statearr_34702_36091 = state_34690__$1;
(statearr_34702_36091[(1)] = (29));

} else {
var statearr_34703_36092 = state_34690__$1;
(statearr_34703_36092[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (4))){
var inst_34608 = (state_34690[(2)]);
var state_34690__$1 = state_34690;
if(cljs.core.truth_(inst_34608)){
var statearr_34704_36093 = state_34690__$1;
(statearr_34704_36093[(1)] = (8));

} else {
var statearr_34705_36094 = state_34690__$1;
(statearr_34705_36094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (15))){
var inst_34635 = (state_34690[(2)]);
var state_34690__$1 = state_34690;
if(cljs.core.truth_(inst_34635)){
var statearr_34713_36097 = state_34690__$1;
(statearr_34713_36097[(1)] = (19));

} else {
var statearr_34714_36098 = state_34690__$1;
(statearr_34714_36098[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (21))){
var inst_34640 = (state_34690[(12)]);
var inst_34640__$1 = (state_34690[(2)]);
var inst_34641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34640__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34640__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34640__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34690__$1 = (function (){var statearr_34715 = state_34690;
(statearr_34715[(13)] = inst_34642);

(statearr_34715[(11)] = inst_34641);

(statearr_34715[(12)] = inst_34640__$1);

return statearr_34715;
})();
return cljs.core.async.ioc_alts_BANG_(state_34690__$1,(22),inst_34643);
} else {
if((state_val_34691 === (31))){
var inst_34672 = (state_34690[(2)]);
var state_34690__$1 = state_34690;
if(cljs.core.truth_(inst_34672)){
var statearr_34716_36099 = state_34690__$1;
(statearr_34716_36099[(1)] = (32));

} else {
var statearr_34717_36100 = state_34690__$1;
(statearr_34717_36100[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (32))){
var inst_34649 = (state_34690[(14)]);
var state_34690__$1 = state_34690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34690__$1,(35),out,inst_34649);
} else {
if((state_val_34691 === (33))){
var inst_34640 = (state_34690[(12)]);
var inst_34617 = inst_34640;
var state_34690__$1 = (function (){var statearr_34718 = state_34690;
(statearr_34718[(7)] = inst_34617);

return statearr_34718;
})();
var statearr_34719_36101 = state_34690__$1;
(statearr_34719_36101[(2)] = null);

(statearr_34719_36101[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (13))){
var inst_34617 = (state_34690[(7)]);
var inst_34624 = inst_34617.cljs$lang$protocol_mask$partition0$;
var inst_34625 = (inst_34624 & (64));
var inst_34626 = inst_34617.cljs$core$ISeq$;
var inst_34627 = (cljs.core.PROTOCOL_SENTINEL === inst_34626);
var inst_34628 = ((inst_34625) || (inst_34627));
var state_34690__$1 = state_34690;
if(cljs.core.truth_(inst_34628)){
var statearr_34720_36102 = state_34690__$1;
(statearr_34720_36102[(1)] = (16));

} else {
var statearr_34721_36103 = state_34690__$1;
(statearr_34721_36103[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (22))){
var inst_34650 = (state_34690[(10)]);
var inst_34649 = (state_34690[(14)]);
var inst_34648 = (state_34690[(2)]);
var inst_34649__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34648,(0),null);
var inst_34650__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34648,(1),null);
var inst_34651 = (inst_34649__$1 == null);
var inst_34652 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34650__$1,change);
var inst_34653 = ((inst_34651) || (inst_34652));
var state_34690__$1 = (function (){var statearr_34722 = state_34690;
(statearr_34722[(10)] = inst_34650__$1);

(statearr_34722[(14)] = inst_34649__$1);

return statearr_34722;
})();
if(cljs.core.truth_(inst_34653)){
var statearr_34723_36104 = state_34690__$1;
(statearr_34723_36104[(1)] = (23));

} else {
var statearr_34724_36105 = state_34690__$1;
(statearr_34724_36105[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (36))){
var inst_34640 = (state_34690[(12)]);
var inst_34617 = inst_34640;
var state_34690__$1 = (function (){var statearr_34725 = state_34690;
(statearr_34725[(7)] = inst_34617);

return statearr_34725;
})();
var statearr_34726_36106 = state_34690__$1;
(statearr_34726_36106[(2)] = null);

(statearr_34726_36106[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (29))){
var inst_34664 = (state_34690[(9)]);
var state_34690__$1 = state_34690;
var statearr_34727_36107 = state_34690__$1;
(statearr_34727_36107[(2)] = inst_34664);

(statearr_34727_36107[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (6))){
var state_34690__$1 = state_34690;
var statearr_34728_36108 = state_34690__$1;
(statearr_34728_36108[(2)] = false);

(statearr_34728_36108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (28))){
var inst_34660 = (state_34690[(2)]);
var inst_34661 = calc_state();
var inst_34617 = inst_34661;
var state_34690__$1 = (function (){var statearr_34729 = state_34690;
(statearr_34729[(7)] = inst_34617);

(statearr_34729[(15)] = inst_34660);

return statearr_34729;
})();
var statearr_34730_36109 = state_34690__$1;
(statearr_34730_36109[(2)] = null);

(statearr_34730_36109[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (25))){
var inst_34686 = (state_34690[(2)]);
var state_34690__$1 = state_34690;
var statearr_34731_36110 = state_34690__$1;
(statearr_34731_36110[(2)] = inst_34686);

(statearr_34731_36110[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (34))){
var inst_34684 = (state_34690[(2)]);
var state_34690__$1 = state_34690;
var statearr_34732_36111 = state_34690__$1;
(statearr_34732_36111[(2)] = inst_34684);

(statearr_34732_36111[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (17))){
var state_34690__$1 = state_34690;
var statearr_34733_36112 = state_34690__$1;
(statearr_34733_36112[(2)] = false);

(statearr_34733_36112[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (3))){
var state_34690__$1 = state_34690;
var statearr_34734_36113 = state_34690__$1;
(statearr_34734_36113[(2)] = false);

(statearr_34734_36113[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (12))){
var inst_34688 = (state_34690[(2)]);
var state_34690__$1 = state_34690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34690__$1,inst_34688);
} else {
if((state_val_34691 === (2))){
var inst_34592 = (state_34690[(8)]);
var inst_34597 = inst_34592.cljs$lang$protocol_mask$partition0$;
var inst_34598 = (inst_34597 & (64));
var inst_34599 = inst_34592.cljs$core$ISeq$;
var inst_34600 = (cljs.core.PROTOCOL_SENTINEL === inst_34599);
var inst_34601 = ((inst_34598) || (inst_34600));
var state_34690__$1 = state_34690;
if(cljs.core.truth_(inst_34601)){
var statearr_34735_36115 = state_34690__$1;
(statearr_34735_36115[(1)] = (5));

} else {
var statearr_34736_36116 = state_34690__$1;
(statearr_34736_36116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (23))){
var inst_34649 = (state_34690[(14)]);
var inst_34655 = (inst_34649 == null);
var state_34690__$1 = state_34690;
if(cljs.core.truth_(inst_34655)){
var statearr_34737_36119 = state_34690__$1;
(statearr_34737_36119[(1)] = (26));

} else {
var statearr_34738_36120 = state_34690__$1;
(statearr_34738_36120[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (35))){
var inst_34675 = (state_34690[(2)]);
var state_34690__$1 = state_34690;
if(cljs.core.truth_(inst_34675)){
var statearr_34739_36122 = state_34690__$1;
(statearr_34739_36122[(1)] = (36));

} else {
var statearr_34740_36123 = state_34690__$1;
(statearr_34740_36123[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (19))){
var inst_34617 = (state_34690[(7)]);
var inst_34637 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34617);
var state_34690__$1 = state_34690;
var statearr_34741_36124 = state_34690__$1;
(statearr_34741_36124[(2)] = inst_34637);

(statearr_34741_36124[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (11))){
var inst_34617 = (state_34690[(7)]);
var inst_34621 = (inst_34617 == null);
var inst_34622 = cljs.core.not(inst_34621);
var state_34690__$1 = state_34690;
if(inst_34622){
var statearr_34742_36125 = state_34690__$1;
(statearr_34742_36125[(1)] = (13));

} else {
var statearr_34743_36126 = state_34690__$1;
(statearr_34743_36126[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (9))){
var inst_34592 = (state_34690[(8)]);
var state_34690__$1 = state_34690;
var statearr_34744_36127 = state_34690__$1;
(statearr_34744_36127[(2)] = inst_34592);

(statearr_34744_36127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (5))){
var state_34690__$1 = state_34690;
var statearr_34745_36128 = state_34690__$1;
(statearr_34745_36128[(2)] = true);

(statearr_34745_36128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (14))){
var state_34690__$1 = state_34690;
var statearr_34746_36129 = state_34690__$1;
(statearr_34746_36129[(2)] = false);

(statearr_34746_36129[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (26))){
var inst_34650 = (state_34690[(10)]);
var inst_34657 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34650);
var state_34690__$1 = state_34690;
var statearr_34747_36133 = state_34690__$1;
(statearr_34747_36133[(2)] = inst_34657);

(statearr_34747_36133[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (16))){
var state_34690__$1 = state_34690;
var statearr_34748_36135 = state_34690__$1;
(statearr_34748_36135[(2)] = true);

(statearr_34748_36135[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (38))){
var inst_34680 = (state_34690[(2)]);
var state_34690__$1 = state_34690;
var statearr_34749_36138 = state_34690__$1;
(statearr_34749_36138[(2)] = inst_34680);

(statearr_34749_36138[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (30))){
var inst_34650 = (state_34690[(10)]);
var inst_34642 = (state_34690[(13)]);
var inst_34641 = (state_34690[(11)]);
var inst_34667 = cljs.core.empty_QMARK_(inst_34641);
var inst_34668 = (inst_34642.cljs$core$IFn$_invoke$arity$1 ? inst_34642.cljs$core$IFn$_invoke$arity$1(inst_34650) : inst_34642.call(null,inst_34650));
var inst_34669 = cljs.core.not(inst_34668);
var inst_34670 = ((inst_34667) && (inst_34669));
var state_34690__$1 = state_34690;
var statearr_34750_36139 = state_34690__$1;
(statearr_34750_36139[(2)] = inst_34670);

(statearr_34750_36139[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (10))){
var inst_34592 = (state_34690[(8)]);
var inst_34613 = (state_34690[(2)]);
var inst_34614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34613,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34613,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34613,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34617 = inst_34592;
var state_34690__$1 = (function (){var statearr_34751 = state_34690;
(statearr_34751[(16)] = inst_34616);

(statearr_34751[(7)] = inst_34617);

(statearr_34751[(17)] = inst_34614);

(statearr_34751[(18)] = inst_34615);

return statearr_34751;
})();
var statearr_34752_36141 = state_34690__$1;
(statearr_34752_36141[(2)] = null);

(statearr_34752_36141[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (18))){
var inst_34632 = (state_34690[(2)]);
var state_34690__$1 = state_34690;
var statearr_34753_36144 = state_34690__$1;
(statearr_34753_36144[(2)] = inst_34632);

(statearr_34753_36144[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (37))){
var state_34690__$1 = state_34690;
var statearr_34754_36145 = state_34690__$1;
(statearr_34754_36145[(2)] = null);

(statearr_34754_36145[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (8))){
var inst_34592 = (state_34690[(8)]);
var inst_34610 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34592);
var state_34690__$1 = state_34690;
var statearr_34755_36146 = state_34690__$1;
(statearr_34755_36146[(2)] = inst_34610);

(statearr_34755_36146[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__32822__auto__ = null;
var cljs$core$async$mix_$_state_machine__32822__auto____0 = (function (){
var statearr_34756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34756[(0)] = cljs$core$async$mix_$_state_machine__32822__auto__);

(statearr_34756[(1)] = (1));

return statearr_34756;
});
var cljs$core$async$mix_$_state_machine__32822__auto____1 = (function (state_34690){
while(true){
var ret_value__32823__auto__ = (function (){try{while(true){
var result__32824__auto__ = switch__32821__auto__(state_34690);
if(cljs.core.keyword_identical_QMARK_(result__32824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32824__auto__;
}
break;
}
}catch (e34757){if((e34757 instanceof Object)){
var ex__32825__auto__ = e34757;
var statearr_34758_36147 = state_34690;
(statearr_34758_36147[(5)] = ex__32825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34757;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36148 = state_34690;
state_34690 = G__36148;
continue;
} else {
return ret_value__32823__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32822__auto__ = function(state_34690){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32822__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32822__auto____1.call(this,state_34690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32822__auto____0;
cljs$core$async$mix_$_state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32822__auto____1;
return cljs$core$async$mix_$_state_machine__32822__auto__;
})()
})();
var state__33211__auto__ = (function (){var statearr_34759 = (f__33210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33210__auto__.cljs$core$IFn$_invoke$arity$0() : f__33210__auto__.call(null));
(statearr_34759[(6)] = c__33209__auto___36079);

return statearr_34759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33211__auto__);
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
var G__34762 = arguments.length;
switch (G__34762) {
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
var G__34765 = arguments.length;
switch (G__34765) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34763_SHARP_){
if(cljs.core.truth_((p1__34763_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34763_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34763_SHARP_.call(null,topic)))){
return p1__34763_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34763_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34766 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34766 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34767){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34767 = meta34767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34768,meta34767__$1){
var self__ = this;
var _34768__$1 = this;
return (new cljs.core.async.t_cljs$core$async34766(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34767__$1));
}));

(cljs.core.async.t_cljs$core$async34766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34768){
var self__ = this;
var _34768__$1 = this;
return self__.meta34767;
}));

(cljs.core.async.t_cljs$core$async34766.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34766.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34766.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34766.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34766.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async34766.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34766.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34766.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34767","meta34767",789326499,null)], null);
}));

(cljs.core.async.t_cljs$core$async34766.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34766.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34766");

(cljs.core.async.t_cljs$core$async34766.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34766");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34766.
 */
cljs.core.async.__GT_t_cljs$core$async34766 = (function cljs$core$async$__GT_t_cljs$core$async34766(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34767){
return (new cljs.core.async.t_cljs$core$async34766(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34767));
});

}

return (new cljs.core.async.t_cljs$core$async34766(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33209__auto___36156 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33210__auto__ = (function (){var switch__32821__auto__ = (function (state_34858){
var state_val_34859 = (state_34858[(1)]);
if((state_val_34859 === (7))){
var inst_34838 = (state_34858[(2)]);
var state_34858__$1 = state_34858;
var statearr_34860_36157 = state_34858__$1;
(statearr_34860_36157[(2)] = inst_34838);

(statearr_34860_36157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (20))){
var state_34858__$1 = state_34858;
var statearr_34861_36158 = state_34858__$1;
(statearr_34861_36158[(2)] = null);

(statearr_34861_36158[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (1))){
var state_34858__$1 = state_34858;
var statearr_34862_36159 = state_34858__$1;
(statearr_34862_36159[(2)] = null);

(statearr_34862_36159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (24))){
var inst_34821 = (state_34858[(7)]);
var inst_34830 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34821);
var state_34858__$1 = state_34858;
var statearr_34864_36160 = state_34858__$1;
(statearr_34864_36160[(2)] = inst_34830);

(statearr_34864_36160[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (4))){
var inst_34773 = (state_34858[(8)]);
var inst_34773__$1 = (state_34858[(2)]);
var inst_34774 = (inst_34773__$1 == null);
var state_34858__$1 = (function (){var statearr_34867 = state_34858;
(statearr_34867[(8)] = inst_34773__$1);

return statearr_34867;
})();
if(cljs.core.truth_(inst_34774)){
var statearr_34868_36161 = state_34858__$1;
(statearr_34868_36161[(1)] = (5));

} else {
var statearr_34869_36162 = state_34858__$1;
(statearr_34869_36162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (15))){
var inst_34815 = (state_34858[(2)]);
var state_34858__$1 = state_34858;
var statearr_34870_36163 = state_34858__$1;
(statearr_34870_36163[(2)] = inst_34815);

(statearr_34870_36163[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (21))){
var inst_34835 = (state_34858[(2)]);
var state_34858__$1 = (function (){var statearr_34871 = state_34858;
(statearr_34871[(9)] = inst_34835);

return statearr_34871;
})();
var statearr_34872_36164 = state_34858__$1;
(statearr_34872_36164[(2)] = null);

(statearr_34872_36164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (13))){
var inst_34797 = (state_34858[(10)]);
var inst_34799 = cljs.core.chunked_seq_QMARK_(inst_34797);
var state_34858__$1 = state_34858;
if(inst_34799){
var statearr_34879_36165 = state_34858__$1;
(statearr_34879_36165[(1)] = (16));

} else {
var statearr_34880_36166 = state_34858__$1;
(statearr_34880_36166[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (22))){
var inst_34827 = (state_34858[(2)]);
var state_34858__$1 = state_34858;
if(cljs.core.truth_(inst_34827)){
var statearr_34881_36167 = state_34858__$1;
(statearr_34881_36167[(1)] = (23));

} else {
var statearr_34882_36168 = state_34858__$1;
(statearr_34882_36168[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (6))){
var inst_34773 = (state_34858[(8)]);
var inst_34823 = (state_34858[(11)]);
var inst_34821 = (state_34858[(7)]);
var inst_34821__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34773) : topic_fn.call(null,inst_34773));
var inst_34822 = cljs.core.deref(mults);
var inst_34823__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34822,inst_34821__$1);
var state_34858__$1 = (function (){var statearr_34883 = state_34858;
(statearr_34883[(11)] = inst_34823__$1);

(statearr_34883[(7)] = inst_34821__$1);

return statearr_34883;
})();
if(cljs.core.truth_(inst_34823__$1)){
var statearr_34884_36169 = state_34858__$1;
(statearr_34884_36169[(1)] = (19));

} else {
var statearr_34885_36170 = state_34858__$1;
(statearr_34885_36170[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (25))){
var inst_34832 = (state_34858[(2)]);
var state_34858__$1 = state_34858;
var statearr_34886_36171 = state_34858__$1;
(statearr_34886_36171[(2)] = inst_34832);

(statearr_34886_36171[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (17))){
var inst_34797 = (state_34858[(10)]);
var inst_34806 = cljs.core.first(inst_34797);
var inst_34807 = cljs.core.async.muxch_STAR_(inst_34806);
var inst_34808 = cljs.core.async.close_BANG_(inst_34807);
var inst_34809 = cljs.core.next(inst_34797);
var inst_34783 = inst_34809;
var inst_34784 = null;
var inst_34785 = (0);
var inst_34786 = (0);
var state_34858__$1 = (function (){var statearr_34887 = state_34858;
(statearr_34887[(12)] = inst_34784);

(statearr_34887[(13)] = inst_34808);

(statearr_34887[(14)] = inst_34786);

(statearr_34887[(15)] = inst_34785);

(statearr_34887[(16)] = inst_34783);

return statearr_34887;
})();
var statearr_34888_36172 = state_34858__$1;
(statearr_34888_36172[(2)] = null);

(statearr_34888_36172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (3))){
var inst_34840 = (state_34858[(2)]);
var state_34858__$1 = state_34858;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34858__$1,inst_34840);
} else {
if((state_val_34859 === (12))){
var inst_34817 = (state_34858[(2)]);
var state_34858__$1 = state_34858;
var statearr_34889_36173 = state_34858__$1;
(statearr_34889_36173[(2)] = inst_34817);

(statearr_34889_36173[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (2))){
var state_34858__$1 = state_34858;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34858__$1,(4),ch);
} else {
if((state_val_34859 === (23))){
var state_34858__$1 = state_34858;
var statearr_34890_36174 = state_34858__$1;
(statearr_34890_36174[(2)] = null);

(statearr_34890_36174[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (19))){
var inst_34773 = (state_34858[(8)]);
var inst_34823 = (state_34858[(11)]);
var inst_34825 = cljs.core.async.muxch_STAR_(inst_34823);
var state_34858__$1 = state_34858;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34858__$1,(22),inst_34825,inst_34773);
} else {
if((state_val_34859 === (11))){
var inst_34797 = (state_34858[(10)]);
var inst_34783 = (state_34858[(16)]);
var inst_34797__$1 = cljs.core.seq(inst_34783);
var state_34858__$1 = (function (){var statearr_34904 = state_34858;
(statearr_34904[(10)] = inst_34797__$1);

return statearr_34904;
})();
if(inst_34797__$1){
var statearr_34912_36175 = state_34858__$1;
(statearr_34912_36175[(1)] = (13));

} else {
var statearr_34913_36176 = state_34858__$1;
(statearr_34913_36176[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (9))){
var inst_34819 = (state_34858[(2)]);
var state_34858__$1 = state_34858;
var statearr_34916_36177 = state_34858__$1;
(statearr_34916_36177[(2)] = inst_34819);

(statearr_34916_36177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (5))){
var inst_34780 = cljs.core.deref(mults);
var inst_34781 = cljs.core.vals(inst_34780);
var inst_34782 = cljs.core.seq(inst_34781);
var inst_34783 = inst_34782;
var inst_34784 = null;
var inst_34785 = (0);
var inst_34786 = (0);
var state_34858__$1 = (function (){var statearr_34921 = state_34858;
(statearr_34921[(12)] = inst_34784);

(statearr_34921[(14)] = inst_34786);

(statearr_34921[(15)] = inst_34785);

(statearr_34921[(16)] = inst_34783);

return statearr_34921;
})();
var statearr_34922_36178 = state_34858__$1;
(statearr_34922_36178[(2)] = null);

(statearr_34922_36178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (14))){
var state_34858__$1 = state_34858;
var statearr_34928_36179 = state_34858__$1;
(statearr_34928_36179[(2)] = null);

(statearr_34928_36179[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (16))){
var inst_34797 = (state_34858[(10)]);
var inst_34801 = cljs.core.chunk_first(inst_34797);
var inst_34802 = cljs.core.chunk_rest(inst_34797);
var inst_34803 = cljs.core.count(inst_34801);
var inst_34783 = inst_34802;
var inst_34784 = inst_34801;
var inst_34785 = inst_34803;
var inst_34786 = (0);
var state_34858__$1 = (function (){var statearr_34934 = state_34858;
(statearr_34934[(12)] = inst_34784);

(statearr_34934[(14)] = inst_34786);

(statearr_34934[(15)] = inst_34785);

(statearr_34934[(16)] = inst_34783);

return statearr_34934;
})();
var statearr_34935_36180 = state_34858__$1;
(statearr_34935_36180[(2)] = null);

(statearr_34935_36180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (10))){
var inst_34784 = (state_34858[(12)]);
var inst_34786 = (state_34858[(14)]);
var inst_34785 = (state_34858[(15)]);
var inst_34783 = (state_34858[(16)]);
var inst_34791 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34784,inst_34786);
var inst_34792 = cljs.core.async.muxch_STAR_(inst_34791);
var inst_34793 = cljs.core.async.close_BANG_(inst_34792);
var inst_34794 = (inst_34786 + (1));
var tmp34924 = inst_34784;
var tmp34925 = inst_34785;
var tmp34926 = inst_34783;
var inst_34783__$1 = tmp34926;
var inst_34784__$1 = tmp34924;
var inst_34785__$1 = tmp34925;
var inst_34786__$1 = inst_34794;
var state_34858__$1 = (function (){var statearr_34944 = state_34858;
(statearr_34944[(17)] = inst_34793);

(statearr_34944[(12)] = inst_34784__$1);

(statearr_34944[(14)] = inst_34786__$1);

(statearr_34944[(15)] = inst_34785__$1);

(statearr_34944[(16)] = inst_34783__$1);

return statearr_34944;
})();
var statearr_34946_36181 = state_34858__$1;
(statearr_34946_36181[(2)] = null);

(statearr_34946_36181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (18))){
var inst_34812 = (state_34858[(2)]);
var state_34858__$1 = state_34858;
var statearr_34954_36182 = state_34858__$1;
(statearr_34954_36182[(2)] = inst_34812);

(statearr_34954_36182[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34859 === (8))){
var inst_34786 = (state_34858[(14)]);
var inst_34785 = (state_34858[(15)]);
var inst_34788 = (inst_34786 < inst_34785);
var inst_34789 = inst_34788;
var state_34858__$1 = state_34858;
if(cljs.core.truth_(inst_34789)){
var statearr_34957_36183 = state_34858__$1;
(statearr_34957_36183[(1)] = (10));

} else {
var statearr_34959_36184 = state_34858__$1;
(statearr_34959_36184[(1)] = (11));

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
var cljs$core$async$state_machine__32822__auto__ = null;
var cljs$core$async$state_machine__32822__auto____0 = (function (){
var statearr_34968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34968[(0)] = cljs$core$async$state_machine__32822__auto__);

(statearr_34968[(1)] = (1));

return statearr_34968;
});
var cljs$core$async$state_machine__32822__auto____1 = (function (state_34858){
while(true){
var ret_value__32823__auto__ = (function (){try{while(true){
var result__32824__auto__ = switch__32821__auto__(state_34858);
if(cljs.core.keyword_identical_QMARK_(result__32824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32824__auto__;
}
break;
}
}catch (e34970){if((e34970 instanceof Object)){
var ex__32825__auto__ = e34970;
var statearr_34971_36185 = state_34858;
(statearr_34971_36185[(5)] = ex__32825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34970;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36186 = state_34858;
state_34858 = G__36186;
continue;
} else {
return ret_value__32823__auto__;
}
break;
}
});
cljs$core$async$state_machine__32822__auto__ = function(state_34858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32822__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32822__auto____1.call(this,state_34858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32822__auto____0;
cljs$core$async$state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32822__auto____1;
return cljs$core$async$state_machine__32822__auto__;
})()
})();
var state__33211__auto__ = (function (){var statearr_34972 = (f__33210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33210__auto__.cljs$core$IFn$_invoke$arity$0() : f__33210__auto__.call(null));
(statearr_34972[(6)] = c__33209__auto___36156);

return statearr_34972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33211__auto__);
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
var G__34986 = arguments.length;
switch (G__34986) {
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
var G__35009 = arguments.length;
switch (G__35009) {
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
var G__35017 = arguments.length;
switch (G__35017) {
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
var c__33209__auto___36196 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33210__auto__ = (function (){var switch__32821__auto__ = (function (state_35084){
var state_val_35085 = (state_35084[(1)]);
if((state_val_35085 === (7))){
var state_35084__$1 = state_35084;
var statearr_35086_36197 = state_35084__$1;
(statearr_35086_36197[(2)] = null);

(statearr_35086_36197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35085 === (1))){
var state_35084__$1 = state_35084;
var statearr_35087_36198 = state_35084__$1;
(statearr_35087_36198[(2)] = null);

(statearr_35087_36198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35085 === (4))){
var inst_35027 = (state_35084[(7)]);
var inst_35030 = (inst_35027 < cnt);
var state_35084__$1 = state_35084;
if(cljs.core.truth_(inst_35030)){
var statearr_35102_36199 = state_35084__$1;
(statearr_35102_36199[(1)] = (6));

} else {
var statearr_35109_36200 = state_35084__$1;
(statearr_35109_36200[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35085 === (15))){
var inst_35079 = (state_35084[(2)]);
var state_35084__$1 = state_35084;
var statearr_35110_36201 = state_35084__$1;
(statearr_35110_36201[(2)] = inst_35079);

(statearr_35110_36201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35085 === (13))){
var inst_35071 = cljs.core.async.close_BANG_(out);
var state_35084__$1 = state_35084;
var statearr_35111_36202 = state_35084__$1;
(statearr_35111_36202[(2)] = inst_35071);

(statearr_35111_36202[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35085 === (6))){
var state_35084__$1 = state_35084;
var statearr_35112_36203 = state_35084__$1;
(statearr_35112_36203[(2)] = null);

(statearr_35112_36203[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35085 === (3))){
var inst_35082 = (state_35084[(2)]);
var state_35084__$1 = state_35084;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35084__$1,inst_35082);
} else {
if((state_val_35085 === (12))){
var inst_35068 = (state_35084[(8)]);
var inst_35068__$1 = (state_35084[(2)]);
var inst_35069 = cljs.core.some(cljs.core.nil_QMARK_,inst_35068__$1);
var state_35084__$1 = (function (){var statearr_35113 = state_35084;
(statearr_35113[(8)] = inst_35068__$1);

return statearr_35113;
})();
if(cljs.core.truth_(inst_35069)){
var statearr_35114_36204 = state_35084__$1;
(statearr_35114_36204[(1)] = (13));

} else {
var statearr_35115_36205 = state_35084__$1;
(statearr_35115_36205[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35085 === (2))){
var inst_35025 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35027 = (0);
var state_35084__$1 = (function (){var statearr_35128 = state_35084;
(statearr_35128[(7)] = inst_35027);

(statearr_35128[(9)] = inst_35025);

return statearr_35128;
})();
var statearr_35129_36206 = state_35084__$1;
(statearr_35129_36206[(2)] = null);

(statearr_35129_36206[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35085 === (11))){
var inst_35027 = (state_35084[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_35084,(10),Object,null,(9));
var inst_35041 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35027) : chs__$1.call(null,inst_35027));
var inst_35042 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35027) : done.call(null,inst_35027));
var inst_35043 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35041,inst_35042);
var state_35084__$1 = state_35084;
var statearr_35130_36207 = state_35084__$1;
(statearr_35130_36207[(2)] = inst_35043);


cljs.core.async.impl.ioc_helpers.process_exception(state_35084__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35085 === (9))){
var inst_35027 = (state_35084[(7)]);
var inst_35045 = (state_35084[(2)]);
var inst_35047 = (inst_35027 + (1));
var inst_35027__$1 = inst_35047;
var state_35084__$1 = (function (){var statearr_35142 = state_35084;
(statearr_35142[(7)] = inst_35027__$1);

(statearr_35142[(10)] = inst_35045);

return statearr_35142;
})();
var statearr_35143_36208 = state_35084__$1;
(statearr_35143_36208[(2)] = null);

(statearr_35143_36208[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35085 === (5))){
var inst_35066 = (state_35084[(2)]);
var state_35084__$1 = (function (){var statearr_35144 = state_35084;
(statearr_35144[(11)] = inst_35066);

return statearr_35144;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35084__$1,(12),dchan);
} else {
if((state_val_35085 === (14))){
var inst_35068 = (state_35084[(8)]);
var inst_35073 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35068);
var state_35084__$1 = state_35084;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35084__$1,(16),out,inst_35073);
} else {
if((state_val_35085 === (16))){
var inst_35075 = (state_35084[(2)]);
var state_35084__$1 = (function (){var statearr_35145 = state_35084;
(statearr_35145[(12)] = inst_35075);

return statearr_35145;
})();
var statearr_35146_36214 = state_35084__$1;
(statearr_35146_36214[(2)] = null);

(statearr_35146_36214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35085 === (10))){
var inst_35034 = (state_35084[(2)]);
var inst_35036 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35084__$1 = (function (){var statearr_35154 = state_35084;
(statearr_35154[(13)] = inst_35034);

return statearr_35154;
})();
var statearr_35155_36215 = state_35084__$1;
(statearr_35155_36215[(2)] = inst_35036);


cljs.core.async.impl.ioc_helpers.process_exception(state_35084__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35085 === (8))){
var inst_35064 = (state_35084[(2)]);
var state_35084__$1 = state_35084;
var statearr_35156_36216 = state_35084__$1;
(statearr_35156_36216[(2)] = inst_35064);

(statearr_35156_36216[(1)] = (5));


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
var cljs$core$async$state_machine__32822__auto__ = null;
var cljs$core$async$state_machine__32822__auto____0 = (function (){
var statearr_35159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35159[(0)] = cljs$core$async$state_machine__32822__auto__);

(statearr_35159[(1)] = (1));

return statearr_35159;
});
var cljs$core$async$state_machine__32822__auto____1 = (function (state_35084){
while(true){
var ret_value__32823__auto__ = (function (){try{while(true){
var result__32824__auto__ = switch__32821__auto__(state_35084);
if(cljs.core.keyword_identical_QMARK_(result__32824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32824__auto__;
}
break;
}
}catch (e35160){if((e35160 instanceof Object)){
var ex__32825__auto__ = e35160;
var statearr_35161_36217 = state_35084;
(statearr_35161_36217[(5)] = ex__32825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35160;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36218 = state_35084;
state_35084 = G__36218;
continue;
} else {
return ret_value__32823__auto__;
}
break;
}
});
cljs$core$async$state_machine__32822__auto__ = function(state_35084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32822__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32822__auto____1.call(this,state_35084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32822__auto____0;
cljs$core$async$state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32822__auto____1;
return cljs$core$async$state_machine__32822__auto__;
})()
})();
var state__33211__auto__ = (function (){var statearr_35162 = (f__33210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33210__auto__.cljs$core$IFn$_invoke$arity$0() : f__33210__auto__.call(null));
(statearr_35162[(6)] = c__33209__auto___36196);

return statearr_35162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33211__auto__);
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
var G__35165 = arguments.length;
switch (G__35165) {
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
var c__33209__auto___36220 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33210__auto__ = (function (){var switch__32821__auto__ = (function (state_35200){
var state_val_35201 = (state_35200[(1)]);
if((state_val_35201 === (7))){
var inst_35180 = (state_35200[(7)]);
var inst_35179 = (state_35200[(8)]);
var inst_35179__$1 = (state_35200[(2)]);
var inst_35180__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35179__$1,(0),null);
var inst_35181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35179__$1,(1),null);
var inst_35182 = (inst_35180__$1 == null);
var state_35200__$1 = (function (){var statearr_35202 = state_35200;
(statearr_35202[(7)] = inst_35180__$1);

(statearr_35202[(8)] = inst_35179__$1);

(statearr_35202[(9)] = inst_35181);

return statearr_35202;
})();
if(cljs.core.truth_(inst_35182)){
var statearr_35203_36221 = state_35200__$1;
(statearr_35203_36221[(1)] = (8));

} else {
var statearr_35204_36222 = state_35200__$1;
(statearr_35204_36222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35201 === (1))){
var inst_35169 = cljs.core.vec(chs);
var inst_35170 = inst_35169;
var state_35200__$1 = (function (){var statearr_35205 = state_35200;
(statearr_35205[(10)] = inst_35170);

return statearr_35205;
})();
var statearr_35206_36223 = state_35200__$1;
(statearr_35206_36223[(2)] = null);

(statearr_35206_36223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35201 === (4))){
var inst_35170 = (state_35200[(10)]);
var state_35200__$1 = state_35200;
return cljs.core.async.ioc_alts_BANG_(state_35200__$1,(7),inst_35170);
} else {
if((state_val_35201 === (6))){
var inst_35196 = (state_35200[(2)]);
var state_35200__$1 = state_35200;
var statearr_35207_36225 = state_35200__$1;
(statearr_35207_36225[(2)] = inst_35196);

(statearr_35207_36225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35201 === (3))){
var inst_35198 = (state_35200[(2)]);
var state_35200__$1 = state_35200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35200__$1,inst_35198);
} else {
if((state_val_35201 === (2))){
var inst_35170 = (state_35200[(10)]);
var inst_35172 = cljs.core.count(inst_35170);
var inst_35173 = (inst_35172 > (0));
var state_35200__$1 = state_35200;
if(cljs.core.truth_(inst_35173)){
var statearr_35209_36226 = state_35200__$1;
(statearr_35209_36226[(1)] = (4));

} else {
var statearr_35210_36227 = state_35200__$1;
(statearr_35210_36227[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35201 === (11))){
var inst_35170 = (state_35200[(10)]);
var inst_35189 = (state_35200[(2)]);
var tmp35208 = inst_35170;
var inst_35170__$1 = tmp35208;
var state_35200__$1 = (function (){var statearr_35211 = state_35200;
(statearr_35211[(11)] = inst_35189);

(statearr_35211[(10)] = inst_35170__$1);

return statearr_35211;
})();
var statearr_35212_36228 = state_35200__$1;
(statearr_35212_36228[(2)] = null);

(statearr_35212_36228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35201 === (9))){
var inst_35180 = (state_35200[(7)]);
var state_35200__$1 = state_35200;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35200__$1,(11),out,inst_35180);
} else {
if((state_val_35201 === (5))){
var inst_35194 = cljs.core.async.close_BANG_(out);
var state_35200__$1 = state_35200;
var statearr_35213_36229 = state_35200__$1;
(statearr_35213_36229[(2)] = inst_35194);

(statearr_35213_36229[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35201 === (10))){
var inst_35192 = (state_35200[(2)]);
var state_35200__$1 = state_35200;
var statearr_35214_36230 = state_35200__$1;
(statearr_35214_36230[(2)] = inst_35192);

(statearr_35214_36230[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35201 === (8))){
var inst_35180 = (state_35200[(7)]);
var inst_35179 = (state_35200[(8)]);
var inst_35170 = (state_35200[(10)]);
var inst_35181 = (state_35200[(9)]);
var inst_35184 = (function (){var cs = inst_35170;
var vec__35175 = inst_35179;
var v = inst_35180;
var c = inst_35181;
return (function (p1__35163_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35163_SHARP_);
});
})();
var inst_35185 = cljs.core.filterv(inst_35184,inst_35170);
var inst_35170__$1 = inst_35185;
var state_35200__$1 = (function (){var statearr_35215 = state_35200;
(statearr_35215[(10)] = inst_35170__$1);

return statearr_35215;
})();
var statearr_35216_36231 = state_35200__$1;
(statearr_35216_36231[(2)] = null);

(statearr_35216_36231[(1)] = (2));


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
var cljs$core$async$state_machine__32822__auto__ = null;
var cljs$core$async$state_machine__32822__auto____0 = (function (){
var statearr_35217 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35217[(0)] = cljs$core$async$state_machine__32822__auto__);

(statearr_35217[(1)] = (1));

return statearr_35217;
});
var cljs$core$async$state_machine__32822__auto____1 = (function (state_35200){
while(true){
var ret_value__32823__auto__ = (function (){try{while(true){
var result__32824__auto__ = switch__32821__auto__(state_35200);
if(cljs.core.keyword_identical_QMARK_(result__32824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32824__auto__;
}
break;
}
}catch (e35218){if((e35218 instanceof Object)){
var ex__32825__auto__ = e35218;
var statearr_35219_36232 = state_35200;
(statearr_35219_36232[(5)] = ex__32825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35218;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36233 = state_35200;
state_35200 = G__36233;
continue;
} else {
return ret_value__32823__auto__;
}
break;
}
});
cljs$core$async$state_machine__32822__auto__ = function(state_35200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32822__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32822__auto____1.call(this,state_35200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32822__auto____0;
cljs$core$async$state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32822__auto____1;
return cljs$core$async$state_machine__32822__auto__;
})()
})();
var state__33211__auto__ = (function (){var statearr_35220 = (f__33210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33210__auto__.cljs$core$IFn$_invoke$arity$0() : f__33210__auto__.call(null));
(statearr_35220[(6)] = c__33209__auto___36220);

return statearr_35220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33211__auto__);
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
var G__35222 = arguments.length;
switch (G__35222) {
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
var c__33209__auto___36245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33210__auto__ = (function (){var switch__32821__auto__ = (function (state_35246){
var state_val_35247 = (state_35246[(1)]);
if((state_val_35247 === (7))){
var inst_35228 = (state_35246[(7)]);
var inst_35228__$1 = (state_35246[(2)]);
var inst_35229 = (inst_35228__$1 == null);
var inst_35230 = cljs.core.not(inst_35229);
var state_35246__$1 = (function (){var statearr_35248 = state_35246;
(statearr_35248[(7)] = inst_35228__$1);

return statearr_35248;
})();
if(inst_35230){
var statearr_35249_36246 = state_35246__$1;
(statearr_35249_36246[(1)] = (8));

} else {
var statearr_35250_36247 = state_35246__$1;
(statearr_35250_36247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (1))){
var inst_35223 = (0);
var state_35246__$1 = (function (){var statearr_35251 = state_35246;
(statearr_35251[(8)] = inst_35223);

return statearr_35251;
})();
var statearr_35252_36248 = state_35246__$1;
(statearr_35252_36248[(2)] = null);

(statearr_35252_36248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (4))){
var state_35246__$1 = state_35246;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35246__$1,(7),ch);
} else {
if((state_val_35247 === (6))){
var inst_35241 = (state_35246[(2)]);
var state_35246__$1 = state_35246;
var statearr_35253_36249 = state_35246__$1;
(statearr_35253_36249[(2)] = inst_35241);

(statearr_35253_36249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (3))){
var inst_35243 = (state_35246[(2)]);
var inst_35244 = cljs.core.async.close_BANG_(out);
var state_35246__$1 = (function (){var statearr_35254 = state_35246;
(statearr_35254[(9)] = inst_35243);

return statearr_35254;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35246__$1,inst_35244);
} else {
if((state_val_35247 === (2))){
var inst_35223 = (state_35246[(8)]);
var inst_35225 = (inst_35223 < n);
var state_35246__$1 = state_35246;
if(cljs.core.truth_(inst_35225)){
var statearr_35255_36250 = state_35246__$1;
(statearr_35255_36250[(1)] = (4));

} else {
var statearr_35256_36251 = state_35246__$1;
(statearr_35256_36251[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (11))){
var inst_35223 = (state_35246[(8)]);
var inst_35233 = (state_35246[(2)]);
var inst_35234 = (inst_35223 + (1));
var inst_35223__$1 = inst_35234;
var state_35246__$1 = (function (){var statearr_35257 = state_35246;
(statearr_35257[(10)] = inst_35233);

(statearr_35257[(8)] = inst_35223__$1);

return statearr_35257;
})();
var statearr_35258_36252 = state_35246__$1;
(statearr_35258_36252[(2)] = null);

(statearr_35258_36252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (9))){
var state_35246__$1 = state_35246;
var statearr_35259_36253 = state_35246__$1;
(statearr_35259_36253[(2)] = null);

(statearr_35259_36253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (5))){
var state_35246__$1 = state_35246;
var statearr_35260_36254 = state_35246__$1;
(statearr_35260_36254[(2)] = null);

(statearr_35260_36254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (10))){
var inst_35238 = (state_35246[(2)]);
var state_35246__$1 = state_35246;
var statearr_35261_36255 = state_35246__$1;
(statearr_35261_36255[(2)] = inst_35238);

(statearr_35261_36255[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35247 === (8))){
var inst_35228 = (state_35246[(7)]);
var state_35246__$1 = state_35246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35246__$1,(11),out,inst_35228);
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
var cljs$core$async$state_machine__32822__auto__ = null;
var cljs$core$async$state_machine__32822__auto____0 = (function (){
var statearr_35262 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35262[(0)] = cljs$core$async$state_machine__32822__auto__);

(statearr_35262[(1)] = (1));

return statearr_35262;
});
var cljs$core$async$state_machine__32822__auto____1 = (function (state_35246){
while(true){
var ret_value__32823__auto__ = (function (){try{while(true){
var result__32824__auto__ = switch__32821__auto__(state_35246);
if(cljs.core.keyword_identical_QMARK_(result__32824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32824__auto__;
}
break;
}
}catch (e35263){if((e35263 instanceof Object)){
var ex__32825__auto__ = e35263;
var statearr_35264_36256 = state_35246;
(statearr_35264_36256[(5)] = ex__32825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35263;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36258 = state_35246;
state_35246 = G__36258;
continue;
} else {
return ret_value__32823__auto__;
}
break;
}
});
cljs$core$async$state_machine__32822__auto__ = function(state_35246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32822__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32822__auto____1.call(this,state_35246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32822__auto____0;
cljs$core$async$state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32822__auto____1;
return cljs$core$async$state_machine__32822__auto__;
})()
})();
var state__33211__auto__ = (function (){var statearr_35265 = (f__33210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33210__auto__.cljs$core$IFn$_invoke$arity$0() : f__33210__auto__.call(null));
(statearr_35265[(6)] = c__33209__auto___36245);

return statearr_35265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33211__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35267 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35267 = (function (f,ch,meta35268){
this.f = f;
this.ch = ch;
this.meta35268 = meta35268;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35269,meta35268__$1){
var self__ = this;
var _35269__$1 = this;
return (new cljs.core.async.t_cljs$core$async35267(self__.f,self__.ch,meta35268__$1));
}));

(cljs.core.async.t_cljs$core$async35267.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35269){
var self__ = this;
var _35269__$1 = this;
return self__.meta35268;
}));

(cljs.core.async.t_cljs$core$async35267.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35267.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35267.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35267.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35267.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35270 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35270 = (function (f,ch,meta35268,_,fn1,meta35271){
this.f = f;
this.ch = ch;
this.meta35268 = meta35268;
this._ = _;
this.fn1 = fn1;
this.meta35271 = meta35271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35272,meta35271__$1){
var self__ = this;
var _35272__$1 = this;
return (new cljs.core.async.t_cljs$core$async35270(self__.f,self__.ch,self__.meta35268,self__._,self__.fn1,meta35271__$1));
}));

(cljs.core.async.t_cljs$core$async35270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35272){
var self__ = this;
var _35272__$1 = this;
return self__.meta35271;
}));

(cljs.core.async.t_cljs$core$async35270.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35270.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35270.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35270.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__35266_SHARP_){
var G__35273 = (((p1__35266_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35266_SHARP_) : self__.f.call(null,p1__35266_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35273) : f1.call(null,G__35273));
});
}));

(cljs.core.async.t_cljs$core$async35270.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35268","meta35268",-1492302514,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35267","cljs.core.async/t_cljs$core$async35267",696313319,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35271","meta35271",-450494154,null)], null);
}));

(cljs.core.async.t_cljs$core$async35270.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35270.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35270");

(cljs.core.async.t_cljs$core$async35270.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35270");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35270.
 */
cljs.core.async.__GT_t_cljs$core$async35270 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35270(f__$1,ch__$1,meta35268__$1,___$2,fn1__$1,meta35271){
return (new cljs.core.async.t_cljs$core$async35270(f__$1,ch__$1,meta35268__$1,___$2,fn1__$1,meta35271));
});

}

return (new cljs.core.async.t_cljs$core$async35270(self__.f,self__.ch,self__.meta35268,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35274 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35274) : self__.f.call(null,G__35274));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35267.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35267.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35267.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35268","meta35268",-1492302514,null)], null);
}));

(cljs.core.async.t_cljs$core$async35267.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35267.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35267");

(cljs.core.async.t_cljs$core$async35267.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35267");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35267.
 */
cljs.core.async.__GT_t_cljs$core$async35267 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35267(f__$1,ch__$1,meta35268){
return (new cljs.core.async.t_cljs$core$async35267(f__$1,ch__$1,meta35268));
});

}

return (new cljs.core.async.t_cljs$core$async35267(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35275 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35275 = (function (f,ch,meta35276){
this.f = f;
this.ch = ch;
this.meta35276 = meta35276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35277,meta35276__$1){
var self__ = this;
var _35277__$1 = this;
return (new cljs.core.async.t_cljs$core$async35275(self__.f,self__.ch,meta35276__$1));
}));

(cljs.core.async.t_cljs$core$async35275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35277){
var self__ = this;
var _35277__$1 = this;
return self__.meta35276;
}));

(cljs.core.async.t_cljs$core$async35275.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35275.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35275.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35275.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35275.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35275.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async35275.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35276","meta35276",1259757268,null)], null);
}));

(cljs.core.async.t_cljs$core$async35275.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35275");

(cljs.core.async.t_cljs$core$async35275.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35275");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35275.
 */
cljs.core.async.__GT_t_cljs$core$async35275 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35275(f__$1,ch__$1,meta35276){
return (new cljs.core.async.t_cljs$core$async35275(f__$1,ch__$1,meta35276));
});

}

return (new cljs.core.async.t_cljs$core$async35275(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35279 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35279 = (function (p,ch,meta35280){
this.p = p;
this.ch = ch;
this.meta35280 = meta35280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35281,meta35280__$1){
var self__ = this;
var _35281__$1 = this;
return (new cljs.core.async.t_cljs$core$async35279(self__.p,self__.ch,meta35280__$1));
}));

(cljs.core.async.t_cljs$core$async35279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35281){
var self__ = this;
var _35281__$1 = this;
return self__.meta35280;
}));

(cljs.core.async.t_cljs$core$async35279.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35279.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35279.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35279.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35279.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35279.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35279.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35279.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35280","meta35280",1416656450,null)], null);
}));

(cljs.core.async.t_cljs$core$async35279.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35279.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35279");

(cljs.core.async.t_cljs$core$async35279.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35279");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35279.
 */
cljs.core.async.__GT_t_cljs$core$async35279 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35279(p__$1,ch__$1,meta35280){
return (new cljs.core.async.t_cljs$core$async35279(p__$1,ch__$1,meta35280));
});

}

return (new cljs.core.async.t_cljs$core$async35279(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35284 = arguments.length;
switch (G__35284) {
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
var c__33209__auto___36333 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33210__auto__ = (function (){var switch__32821__auto__ = (function (state_35313){
var state_val_35314 = (state_35313[(1)]);
if((state_val_35314 === (7))){
var inst_35309 = (state_35313[(2)]);
var state_35313__$1 = state_35313;
var statearr_35315_36336 = state_35313__$1;
(statearr_35315_36336[(2)] = inst_35309);

(statearr_35315_36336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35314 === (1))){
var state_35313__$1 = state_35313;
var statearr_35316_36337 = state_35313__$1;
(statearr_35316_36337[(2)] = null);

(statearr_35316_36337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35314 === (4))){
var inst_35295 = (state_35313[(7)]);
var inst_35295__$1 = (state_35313[(2)]);
var inst_35296 = (inst_35295__$1 == null);
var state_35313__$1 = (function (){var statearr_35317 = state_35313;
(statearr_35317[(7)] = inst_35295__$1);

return statearr_35317;
})();
if(cljs.core.truth_(inst_35296)){
var statearr_35318_36338 = state_35313__$1;
(statearr_35318_36338[(1)] = (5));

} else {
var statearr_35319_36339 = state_35313__$1;
(statearr_35319_36339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35314 === (6))){
var inst_35295 = (state_35313[(7)]);
var inst_35300 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35295) : p.call(null,inst_35295));
var state_35313__$1 = state_35313;
if(cljs.core.truth_(inst_35300)){
var statearr_35324_36340 = state_35313__$1;
(statearr_35324_36340[(1)] = (8));

} else {
var statearr_35325_36387 = state_35313__$1;
(statearr_35325_36387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35314 === (3))){
var inst_35311 = (state_35313[(2)]);
var state_35313__$1 = state_35313;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35313__$1,inst_35311);
} else {
if((state_val_35314 === (2))){
var state_35313__$1 = state_35313;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35313__$1,(4),ch);
} else {
if((state_val_35314 === (11))){
var inst_35303 = (state_35313[(2)]);
var state_35313__$1 = state_35313;
var statearr_35326_36388 = state_35313__$1;
(statearr_35326_36388[(2)] = inst_35303);

(statearr_35326_36388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35314 === (9))){
var state_35313__$1 = state_35313;
var statearr_35327_36389 = state_35313__$1;
(statearr_35327_36389[(2)] = null);

(statearr_35327_36389[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35314 === (5))){
var inst_35298 = cljs.core.async.close_BANG_(out);
var state_35313__$1 = state_35313;
var statearr_35328_36390 = state_35313__$1;
(statearr_35328_36390[(2)] = inst_35298);

(statearr_35328_36390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35314 === (10))){
var inst_35306 = (state_35313[(2)]);
var state_35313__$1 = (function (){var statearr_35329 = state_35313;
(statearr_35329[(8)] = inst_35306);

return statearr_35329;
})();
var statearr_35330_36391 = state_35313__$1;
(statearr_35330_36391[(2)] = null);

(statearr_35330_36391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35314 === (8))){
var inst_35295 = (state_35313[(7)]);
var state_35313__$1 = state_35313;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35313__$1,(11),out,inst_35295);
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
var cljs$core$async$state_machine__32822__auto__ = null;
var cljs$core$async$state_machine__32822__auto____0 = (function (){
var statearr_35331 = [null,null,null,null,null,null,null,null,null];
(statearr_35331[(0)] = cljs$core$async$state_machine__32822__auto__);

(statearr_35331[(1)] = (1));

return statearr_35331;
});
var cljs$core$async$state_machine__32822__auto____1 = (function (state_35313){
while(true){
var ret_value__32823__auto__ = (function (){try{while(true){
var result__32824__auto__ = switch__32821__auto__(state_35313);
if(cljs.core.keyword_identical_QMARK_(result__32824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32824__auto__;
}
break;
}
}catch (e35332){if((e35332 instanceof Object)){
var ex__32825__auto__ = e35332;
var statearr_35333_36392 = state_35313;
(statearr_35333_36392[(5)] = ex__32825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35332;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36393 = state_35313;
state_35313 = G__36393;
continue;
} else {
return ret_value__32823__auto__;
}
break;
}
});
cljs$core$async$state_machine__32822__auto__ = function(state_35313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32822__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32822__auto____1.call(this,state_35313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32822__auto____0;
cljs$core$async$state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32822__auto____1;
return cljs$core$async$state_machine__32822__auto__;
})()
})();
var state__33211__auto__ = (function (){var statearr_35334 = (f__33210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33210__auto__.cljs$core$IFn$_invoke$arity$0() : f__33210__auto__.call(null));
(statearr_35334[(6)] = c__33209__auto___36333);

return statearr_35334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33211__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35336 = arguments.length;
switch (G__35336) {
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
var c__33209__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33210__auto__ = (function (){var switch__32821__auto__ = (function (state_35398){
var state_val_35399 = (state_35398[(1)]);
if((state_val_35399 === (7))){
var inst_35394 = (state_35398[(2)]);
var state_35398__$1 = state_35398;
var statearr_35400_36405 = state_35398__$1;
(statearr_35400_36405[(2)] = inst_35394);

(statearr_35400_36405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35399 === (20))){
var inst_35364 = (state_35398[(7)]);
var inst_35375 = (state_35398[(2)]);
var inst_35376 = cljs.core.next(inst_35364);
var inst_35350 = inst_35376;
var inst_35351 = null;
var inst_35352 = (0);
var inst_35353 = (0);
var state_35398__$1 = (function (){var statearr_35401 = state_35398;
(statearr_35401[(8)] = inst_35352);

(statearr_35401[(9)] = inst_35375);

(statearr_35401[(10)] = inst_35353);

(statearr_35401[(11)] = inst_35350);

(statearr_35401[(12)] = inst_35351);

return statearr_35401;
})();
var statearr_35402_36406 = state_35398__$1;
(statearr_35402_36406[(2)] = null);

(statearr_35402_36406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35399 === (1))){
var state_35398__$1 = state_35398;
var statearr_35403_36407 = state_35398__$1;
(statearr_35403_36407[(2)] = null);

(statearr_35403_36407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35399 === (4))){
var inst_35339 = (state_35398[(13)]);
var inst_35339__$1 = (state_35398[(2)]);
var inst_35340 = (inst_35339__$1 == null);
var state_35398__$1 = (function (){var statearr_35404 = state_35398;
(statearr_35404[(13)] = inst_35339__$1);

return statearr_35404;
})();
if(cljs.core.truth_(inst_35340)){
var statearr_35405_36408 = state_35398__$1;
(statearr_35405_36408[(1)] = (5));

} else {
var statearr_35406_36409 = state_35398__$1;
(statearr_35406_36409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35399 === (15))){
var state_35398__$1 = state_35398;
var statearr_35410_36410 = state_35398__$1;
(statearr_35410_36410[(2)] = null);

(statearr_35410_36410[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35399 === (21))){
var state_35398__$1 = state_35398;
var statearr_35411_36411 = state_35398__$1;
(statearr_35411_36411[(2)] = null);

(statearr_35411_36411[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35399 === (13))){
var inst_35352 = (state_35398[(8)]);
var inst_35353 = (state_35398[(10)]);
var inst_35350 = (state_35398[(11)]);
var inst_35351 = (state_35398[(12)]);
var inst_35360 = (state_35398[(2)]);
var inst_35361 = (inst_35353 + (1));
var tmp35407 = inst_35352;
var tmp35408 = inst_35350;
var tmp35409 = inst_35351;
var inst_35350__$1 = tmp35408;
var inst_35351__$1 = tmp35409;
var inst_35352__$1 = tmp35407;
var inst_35353__$1 = inst_35361;
var state_35398__$1 = (function (){var statearr_35412 = state_35398;
(statearr_35412[(8)] = inst_35352__$1);

(statearr_35412[(10)] = inst_35353__$1);

(statearr_35412[(11)] = inst_35350__$1);

(statearr_35412[(14)] = inst_35360);

(statearr_35412[(12)] = inst_35351__$1);

return statearr_35412;
})();
var statearr_35413_36421 = state_35398__$1;
(statearr_35413_36421[(2)] = null);

(statearr_35413_36421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35399 === (22))){
var state_35398__$1 = state_35398;
var statearr_35414_36422 = state_35398__$1;
(statearr_35414_36422[(2)] = null);

(statearr_35414_36422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35399 === (6))){
var inst_35339 = (state_35398[(13)]);
var inst_35348 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35339) : f.call(null,inst_35339));
var inst_35349 = cljs.core.seq(inst_35348);
var inst_35350 = inst_35349;
var inst_35351 = null;
var inst_35352 = (0);
var inst_35353 = (0);
var state_35398__$1 = (function (){var statearr_35415 = state_35398;
(statearr_35415[(8)] = inst_35352);

(statearr_35415[(10)] = inst_35353);

(statearr_35415[(11)] = inst_35350);

(statearr_35415[(12)] = inst_35351);

return statearr_35415;
})();
var statearr_35416_36423 = state_35398__$1;
(statearr_35416_36423[(2)] = null);

(statearr_35416_36423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35399 === (17))){
var inst_35364 = (state_35398[(7)]);
var inst_35368 = cljs.core.chunk_first(inst_35364);
var inst_35369 = cljs.core.chunk_rest(inst_35364);
var inst_35370 = cljs.core.count(inst_35368);
var inst_35350 = inst_35369;
var inst_35351 = inst_35368;
var inst_35352 = inst_35370;
var inst_35353 = (0);
var state_35398__$1 = (function (){var statearr_35417 = state_35398;
(statearr_35417[(8)] = inst_35352);

(statearr_35417[(10)] = inst_35353);

(statearr_35417[(11)] = inst_35350);

(statearr_35417[(12)] = inst_35351);

return statearr_35417;
})();
var statearr_35418_36424 = state_35398__$1;
(statearr_35418_36424[(2)] = null);

(statearr_35418_36424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35399 === (3))){
var inst_35396 = (state_35398[(2)]);
var state_35398__$1 = state_35398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35398__$1,inst_35396);
} else {
if((state_val_35399 === (12))){
var inst_35384 = (state_35398[(2)]);
var state_35398__$1 = state_35398;
var statearr_35419_36425 = state_35398__$1;
(statearr_35419_36425[(2)] = inst_35384);

(statearr_35419_36425[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35399 === (2))){
var state_35398__$1 = state_35398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35398__$1,(4),in$);
} else {
if((state_val_35399 === (23))){
var inst_35392 = (state_35398[(2)]);
var state_35398__$1 = state_35398;
var statearr_35420_36426 = state_35398__$1;
(statearr_35420_36426[(2)] = inst_35392);

(statearr_35420_36426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35399 === (19))){
var inst_35379 = (state_35398[(2)]);
var state_35398__$1 = state_35398;
var statearr_35421_36427 = state_35398__$1;
(statearr_35421_36427[(2)] = inst_35379);

(statearr_35421_36427[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35399 === (11))){
var inst_35350 = (state_35398[(11)]);
var inst_35364 = (state_35398[(7)]);
var inst_35364__$1 = cljs.core.seq(inst_35350);
var state_35398__$1 = (function (){var statearr_35422 = state_35398;
(statearr_35422[(7)] = inst_35364__$1);

return statearr_35422;
})();
if(inst_35364__$1){
var statearr_35423_36428 = state_35398__$1;
(statearr_35423_36428[(1)] = (14));

} else {
var statearr_35424_36429 = state_35398__$1;
(statearr_35424_36429[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35399 === (9))){
var inst_35386 = (state_35398[(2)]);
var inst_35387 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35398__$1 = (function (){var statearr_35425 = state_35398;
(statearr_35425[(15)] = inst_35386);

return statearr_35425;
})();
if(cljs.core.truth_(inst_35387)){
var statearr_35426_36430 = state_35398__$1;
(statearr_35426_36430[(1)] = (21));

} else {
var statearr_35427_36431 = state_35398__$1;
(statearr_35427_36431[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35399 === (5))){
var inst_35342 = cljs.core.async.close_BANG_(out);
var state_35398__$1 = state_35398;
var statearr_35428_36432 = state_35398__$1;
(statearr_35428_36432[(2)] = inst_35342);

(statearr_35428_36432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35399 === (14))){
var inst_35364 = (state_35398[(7)]);
var inst_35366 = cljs.core.chunked_seq_QMARK_(inst_35364);
var state_35398__$1 = state_35398;
if(inst_35366){
var statearr_35429_36433 = state_35398__$1;
(statearr_35429_36433[(1)] = (17));

} else {
var statearr_35430_36434 = state_35398__$1;
(statearr_35430_36434[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35399 === (16))){
var inst_35382 = (state_35398[(2)]);
var state_35398__$1 = state_35398;
var statearr_35431_36435 = state_35398__$1;
(statearr_35431_36435[(2)] = inst_35382);

(statearr_35431_36435[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35399 === (10))){
var inst_35353 = (state_35398[(10)]);
var inst_35351 = (state_35398[(12)]);
var inst_35358 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35351,inst_35353);
var state_35398__$1 = state_35398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35398__$1,(13),out,inst_35358);
} else {
if((state_val_35399 === (18))){
var inst_35364 = (state_35398[(7)]);
var inst_35373 = cljs.core.first(inst_35364);
var state_35398__$1 = state_35398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35398__$1,(20),out,inst_35373);
} else {
if((state_val_35399 === (8))){
var inst_35352 = (state_35398[(8)]);
var inst_35353 = (state_35398[(10)]);
var inst_35355 = (inst_35353 < inst_35352);
var inst_35356 = inst_35355;
var state_35398__$1 = state_35398;
if(cljs.core.truth_(inst_35356)){
var statearr_35432_36436 = state_35398__$1;
(statearr_35432_36436[(1)] = (10));

} else {
var statearr_35433_36437 = state_35398__$1;
(statearr_35433_36437[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__32822__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32822__auto____0 = (function (){
var statearr_35434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35434[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32822__auto__);

(statearr_35434[(1)] = (1));

return statearr_35434;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32822__auto____1 = (function (state_35398){
while(true){
var ret_value__32823__auto__ = (function (){try{while(true){
var result__32824__auto__ = switch__32821__auto__(state_35398);
if(cljs.core.keyword_identical_QMARK_(result__32824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32824__auto__;
}
break;
}
}catch (e35435){if((e35435 instanceof Object)){
var ex__32825__auto__ = e35435;
var statearr_35436_36438 = state_35398;
(statearr_35436_36438[(5)] = ex__32825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35435;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36439 = state_35398;
state_35398 = G__36439;
continue;
} else {
return ret_value__32823__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32822__auto__ = function(state_35398){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32822__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32822__auto____1.call(this,state_35398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32822__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32822__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32822__auto__;
})()
})();
var state__33211__auto__ = (function (){var statearr_35437 = (f__33210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33210__auto__.cljs$core$IFn$_invoke$arity$0() : f__33210__auto__.call(null));
(statearr_35437[(6)] = c__33209__auto__);

return statearr_35437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33211__auto__);
}));

return c__33209__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35439 = arguments.length;
switch (G__35439) {
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
var G__35441 = arguments.length;
switch (G__35441) {
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
var G__35443 = arguments.length;
switch (G__35443) {
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
var c__33209__auto___36464 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33210__auto__ = (function (){var switch__32821__auto__ = (function (state_35467){
var state_val_35468 = (state_35467[(1)]);
if((state_val_35468 === (7))){
var inst_35462 = (state_35467[(2)]);
var state_35467__$1 = state_35467;
var statearr_35469_36465 = state_35467__$1;
(statearr_35469_36465[(2)] = inst_35462);

(statearr_35469_36465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35468 === (1))){
var inst_35444 = null;
var state_35467__$1 = (function (){var statearr_35470 = state_35467;
(statearr_35470[(7)] = inst_35444);

return statearr_35470;
})();
var statearr_35471_36466 = state_35467__$1;
(statearr_35471_36466[(2)] = null);

(statearr_35471_36466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35468 === (4))){
var inst_35447 = (state_35467[(8)]);
var inst_35447__$1 = (state_35467[(2)]);
var inst_35448 = (inst_35447__$1 == null);
var inst_35449 = cljs.core.not(inst_35448);
var state_35467__$1 = (function (){var statearr_35472 = state_35467;
(statearr_35472[(8)] = inst_35447__$1);

return statearr_35472;
})();
if(inst_35449){
var statearr_35473_36467 = state_35467__$1;
(statearr_35473_36467[(1)] = (5));

} else {
var statearr_35474_36468 = state_35467__$1;
(statearr_35474_36468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35468 === (6))){
var state_35467__$1 = state_35467;
var statearr_35475_36469 = state_35467__$1;
(statearr_35475_36469[(2)] = null);

(statearr_35475_36469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35468 === (3))){
var inst_35464 = (state_35467[(2)]);
var inst_35465 = cljs.core.async.close_BANG_(out);
var state_35467__$1 = (function (){var statearr_35476 = state_35467;
(statearr_35476[(9)] = inst_35464);

return statearr_35476;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35467__$1,inst_35465);
} else {
if((state_val_35468 === (2))){
var state_35467__$1 = state_35467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35467__$1,(4),ch);
} else {
if((state_val_35468 === (11))){
var inst_35447 = (state_35467[(8)]);
var inst_35456 = (state_35467[(2)]);
var inst_35444 = inst_35447;
var state_35467__$1 = (function (){var statearr_35477 = state_35467;
(statearr_35477[(10)] = inst_35456);

(statearr_35477[(7)] = inst_35444);

return statearr_35477;
})();
var statearr_35478_36470 = state_35467__$1;
(statearr_35478_36470[(2)] = null);

(statearr_35478_36470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35468 === (9))){
var inst_35447 = (state_35467[(8)]);
var state_35467__$1 = state_35467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35467__$1,(11),out,inst_35447);
} else {
if((state_val_35468 === (5))){
var inst_35444 = (state_35467[(7)]);
var inst_35447 = (state_35467[(8)]);
var inst_35451 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35447,inst_35444);
var state_35467__$1 = state_35467;
if(inst_35451){
var statearr_35480_36471 = state_35467__$1;
(statearr_35480_36471[(1)] = (8));

} else {
var statearr_35481_36496 = state_35467__$1;
(statearr_35481_36496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35468 === (10))){
var inst_35459 = (state_35467[(2)]);
var state_35467__$1 = state_35467;
var statearr_35482_36497 = state_35467__$1;
(statearr_35482_36497[(2)] = inst_35459);

(statearr_35482_36497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35468 === (8))){
var inst_35444 = (state_35467[(7)]);
var tmp35479 = inst_35444;
var inst_35444__$1 = tmp35479;
var state_35467__$1 = (function (){var statearr_35483 = state_35467;
(statearr_35483[(7)] = inst_35444__$1);

return statearr_35483;
})();
var statearr_35484_36498 = state_35467__$1;
(statearr_35484_36498[(2)] = null);

(statearr_35484_36498[(1)] = (2));


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
var cljs$core$async$state_machine__32822__auto__ = null;
var cljs$core$async$state_machine__32822__auto____0 = (function (){
var statearr_35485 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35485[(0)] = cljs$core$async$state_machine__32822__auto__);

(statearr_35485[(1)] = (1));

return statearr_35485;
});
var cljs$core$async$state_machine__32822__auto____1 = (function (state_35467){
while(true){
var ret_value__32823__auto__ = (function (){try{while(true){
var result__32824__auto__ = switch__32821__auto__(state_35467);
if(cljs.core.keyword_identical_QMARK_(result__32824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32824__auto__;
}
break;
}
}catch (e35486){if((e35486 instanceof Object)){
var ex__32825__auto__ = e35486;
var statearr_35487_36499 = state_35467;
(statearr_35487_36499[(5)] = ex__32825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35486;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36500 = state_35467;
state_35467 = G__36500;
continue;
} else {
return ret_value__32823__auto__;
}
break;
}
});
cljs$core$async$state_machine__32822__auto__ = function(state_35467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32822__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32822__auto____1.call(this,state_35467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32822__auto____0;
cljs$core$async$state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32822__auto____1;
return cljs$core$async$state_machine__32822__auto__;
})()
})();
var state__33211__auto__ = (function (){var statearr_35488 = (f__33210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33210__auto__.cljs$core$IFn$_invoke$arity$0() : f__33210__auto__.call(null));
(statearr_35488[(6)] = c__33209__auto___36464);

return statearr_35488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33211__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35490 = arguments.length;
switch (G__35490) {
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
var c__33209__auto___36523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33210__auto__ = (function (){var switch__32821__auto__ = (function (state_35528){
var state_val_35529 = (state_35528[(1)]);
if((state_val_35529 === (7))){
var inst_35524 = (state_35528[(2)]);
var state_35528__$1 = state_35528;
var statearr_35530_36524 = state_35528__$1;
(statearr_35530_36524[(2)] = inst_35524);

(statearr_35530_36524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (1))){
var inst_35491 = (new Array(n));
var inst_35492 = inst_35491;
var inst_35493 = (0);
var state_35528__$1 = (function (){var statearr_35531 = state_35528;
(statearr_35531[(7)] = inst_35492);

(statearr_35531[(8)] = inst_35493);

return statearr_35531;
})();
var statearr_35532_36525 = state_35528__$1;
(statearr_35532_36525[(2)] = null);

(statearr_35532_36525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (4))){
var inst_35496 = (state_35528[(9)]);
var inst_35496__$1 = (state_35528[(2)]);
var inst_35497 = (inst_35496__$1 == null);
var inst_35498 = cljs.core.not(inst_35497);
var state_35528__$1 = (function (){var statearr_35533 = state_35528;
(statearr_35533[(9)] = inst_35496__$1);

return statearr_35533;
})();
if(inst_35498){
var statearr_35534_36526 = state_35528__$1;
(statearr_35534_36526[(1)] = (5));

} else {
var statearr_35535_36527 = state_35528__$1;
(statearr_35535_36527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (15))){
var inst_35518 = (state_35528[(2)]);
var state_35528__$1 = state_35528;
var statearr_35536_36528 = state_35528__$1;
(statearr_35536_36528[(2)] = inst_35518);

(statearr_35536_36528[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (13))){
var state_35528__$1 = state_35528;
var statearr_35537_36529 = state_35528__$1;
(statearr_35537_36529[(2)] = null);

(statearr_35537_36529[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (6))){
var inst_35493 = (state_35528[(8)]);
var inst_35514 = (inst_35493 > (0));
var state_35528__$1 = state_35528;
if(cljs.core.truth_(inst_35514)){
var statearr_35538_36535 = state_35528__$1;
(statearr_35538_36535[(1)] = (12));

} else {
var statearr_35539_36538 = state_35528__$1;
(statearr_35539_36538[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (3))){
var inst_35526 = (state_35528[(2)]);
var state_35528__$1 = state_35528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35528__$1,inst_35526);
} else {
if((state_val_35529 === (12))){
var inst_35492 = (state_35528[(7)]);
var inst_35516 = cljs.core.vec(inst_35492);
var state_35528__$1 = state_35528;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35528__$1,(15),out,inst_35516);
} else {
if((state_val_35529 === (2))){
var state_35528__$1 = state_35528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35528__$1,(4),ch);
} else {
if((state_val_35529 === (11))){
var inst_35508 = (state_35528[(2)]);
var inst_35509 = (new Array(n));
var inst_35492 = inst_35509;
var inst_35493 = (0);
var state_35528__$1 = (function (){var statearr_35540 = state_35528;
(statearr_35540[(10)] = inst_35508);

(statearr_35540[(7)] = inst_35492);

(statearr_35540[(8)] = inst_35493);

return statearr_35540;
})();
var statearr_35541_36539 = state_35528__$1;
(statearr_35541_36539[(2)] = null);

(statearr_35541_36539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (9))){
var inst_35492 = (state_35528[(7)]);
var inst_35506 = cljs.core.vec(inst_35492);
var state_35528__$1 = state_35528;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35528__$1,(11),out,inst_35506);
} else {
if((state_val_35529 === (5))){
var inst_35492 = (state_35528[(7)]);
var inst_35493 = (state_35528[(8)]);
var inst_35501 = (state_35528[(11)]);
var inst_35496 = (state_35528[(9)]);
var inst_35500 = (inst_35492[inst_35493] = inst_35496);
var inst_35501__$1 = (inst_35493 + (1));
var inst_35502 = (inst_35501__$1 < n);
var state_35528__$1 = (function (){var statearr_35542 = state_35528;
(statearr_35542[(12)] = inst_35500);

(statearr_35542[(11)] = inst_35501__$1);

return statearr_35542;
})();
if(cljs.core.truth_(inst_35502)){
var statearr_35543_36541 = state_35528__$1;
(statearr_35543_36541[(1)] = (8));

} else {
var statearr_35544_36542 = state_35528__$1;
(statearr_35544_36542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (14))){
var inst_35521 = (state_35528[(2)]);
var inst_35522 = cljs.core.async.close_BANG_(out);
var state_35528__$1 = (function (){var statearr_35546 = state_35528;
(statearr_35546[(13)] = inst_35521);

return statearr_35546;
})();
var statearr_35547_36543 = state_35528__$1;
(statearr_35547_36543[(2)] = inst_35522);

(statearr_35547_36543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (10))){
var inst_35512 = (state_35528[(2)]);
var state_35528__$1 = state_35528;
var statearr_35548_36544 = state_35528__$1;
(statearr_35548_36544[(2)] = inst_35512);

(statearr_35548_36544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (8))){
var inst_35492 = (state_35528[(7)]);
var inst_35501 = (state_35528[(11)]);
var tmp35545 = inst_35492;
var inst_35492__$1 = tmp35545;
var inst_35493 = inst_35501;
var state_35528__$1 = (function (){var statearr_35549 = state_35528;
(statearr_35549[(7)] = inst_35492__$1);

(statearr_35549[(8)] = inst_35493);

return statearr_35549;
})();
var statearr_35550_36548 = state_35528__$1;
(statearr_35550_36548[(2)] = null);

(statearr_35550_36548[(1)] = (2));


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
var cljs$core$async$state_machine__32822__auto__ = null;
var cljs$core$async$state_machine__32822__auto____0 = (function (){
var statearr_35551 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35551[(0)] = cljs$core$async$state_machine__32822__auto__);

(statearr_35551[(1)] = (1));

return statearr_35551;
});
var cljs$core$async$state_machine__32822__auto____1 = (function (state_35528){
while(true){
var ret_value__32823__auto__ = (function (){try{while(true){
var result__32824__auto__ = switch__32821__auto__(state_35528);
if(cljs.core.keyword_identical_QMARK_(result__32824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32824__auto__;
}
break;
}
}catch (e35552){if((e35552 instanceof Object)){
var ex__32825__auto__ = e35552;
var statearr_35553_36555 = state_35528;
(statearr_35553_36555[(5)] = ex__32825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35552;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36556 = state_35528;
state_35528 = G__36556;
continue;
} else {
return ret_value__32823__auto__;
}
break;
}
});
cljs$core$async$state_machine__32822__auto__ = function(state_35528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32822__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32822__auto____1.call(this,state_35528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32822__auto____0;
cljs$core$async$state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32822__auto____1;
return cljs$core$async$state_machine__32822__auto__;
})()
})();
var state__33211__auto__ = (function (){var statearr_35554 = (f__33210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33210__auto__.cljs$core$IFn$_invoke$arity$0() : f__33210__auto__.call(null));
(statearr_35554[(6)] = c__33209__auto___36523);

return statearr_35554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33211__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35556 = arguments.length;
switch (G__35556) {
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
var c__33209__auto___36565 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33210__auto__ = (function (){var switch__32821__auto__ = (function (state_35598){
var state_val_35599 = (state_35598[(1)]);
if((state_val_35599 === (7))){
var inst_35594 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
var statearr_35600_36566 = state_35598__$1;
(statearr_35600_36566[(2)] = inst_35594);

(statearr_35600_36566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (1))){
var inst_35557 = [];
var inst_35558 = inst_35557;
var inst_35559 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35598__$1 = (function (){var statearr_35601 = state_35598;
(statearr_35601[(7)] = inst_35559);

(statearr_35601[(8)] = inst_35558);

return statearr_35601;
})();
var statearr_35602_36567 = state_35598__$1;
(statearr_35602_36567[(2)] = null);

(statearr_35602_36567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (4))){
var inst_35562 = (state_35598[(9)]);
var inst_35562__$1 = (state_35598[(2)]);
var inst_35563 = (inst_35562__$1 == null);
var inst_35564 = cljs.core.not(inst_35563);
var state_35598__$1 = (function (){var statearr_35603 = state_35598;
(statearr_35603[(9)] = inst_35562__$1);

return statearr_35603;
})();
if(inst_35564){
var statearr_35604_36568 = state_35598__$1;
(statearr_35604_36568[(1)] = (5));

} else {
var statearr_35605_36569 = state_35598__$1;
(statearr_35605_36569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (15))){
var inst_35588 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
var statearr_35606_36570 = state_35598__$1;
(statearr_35606_36570[(2)] = inst_35588);

(statearr_35606_36570[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (13))){
var state_35598__$1 = state_35598;
var statearr_35607_36571 = state_35598__$1;
(statearr_35607_36571[(2)] = null);

(statearr_35607_36571[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (6))){
var inst_35558 = (state_35598[(8)]);
var inst_35583 = inst_35558.length;
var inst_35584 = (inst_35583 > (0));
var state_35598__$1 = state_35598;
if(cljs.core.truth_(inst_35584)){
var statearr_35608_36572 = state_35598__$1;
(statearr_35608_36572[(1)] = (12));

} else {
var statearr_35609_36573 = state_35598__$1;
(statearr_35609_36573[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (3))){
var inst_35596 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35598__$1,inst_35596);
} else {
if((state_val_35599 === (12))){
var inst_35558 = (state_35598[(8)]);
var inst_35586 = cljs.core.vec(inst_35558);
var state_35598__$1 = state_35598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35598__$1,(15),out,inst_35586);
} else {
if((state_val_35599 === (2))){
var state_35598__$1 = state_35598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35598__$1,(4),ch);
} else {
if((state_val_35599 === (11))){
var inst_35562 = (state_35598[(9)]);
var inst_35566 = (state_35598[(10)]);
var inst_35576 = (state_35598[(2)]);
var inst_35577 = [];
var inst_35578 = inst_35577.push(inst_35562);
var inst_35558 = inst_35577;
var inst_35559 = inst_35566;
var state_35598__$1 = (function (){var statearr_35610 = state_35598;
(statearr_35610[(7)] = inst_35559);

(statearr_35610[(11)] = inst_35578);

(statearr_35610[(12)] = inst_35576);

(statearr_35610[(8)] = inst_35558);

return statearr_35610;
})();
var statearr_35611_36574 = state_35598__$1;
(statearr_35611_36574[(2)] = null);

(statearr_35611_36574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (9))){
var inst_35558 = (state_35598[(8)]);
var inst_35574 = cljs.core.vec(inst_35558);
var state_35598__$1 = state_35598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35598__$1,(11),out,inst_35574);
} else {
if((state_val_35599 === (5))){
var inst_35559 = (state_35598[(7)]);
var inst_35562 = (state_35598[(9)]);
var inst_35566 = (state_35598[(10)]);
var inst_35566__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35562) : f.call(null,inst_35562));
var inst_35567 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35566__$1,inst_35559);
var inst_35568 = cljs.core.keyword_identical_QMARK_(inst_35559,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35569 = ((inst_35567) || (inst_35568));
var state_35598__$1 = (function (){var statearr_35612 = state_35598;
(statearr_35612[(10)] = inst_35566__$1);

return statearr_35612;
})();
if(cljs.core.truth_(inst_35569)){
var statearr_35613_36575 = state_35598__$1;
(statearr_35613_36575[(1)] = (8));

} else {
var statearr_35614_36576 = state_35598__$1;
(statearr_35614_36576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (14))){
var inst_35591 = (state_35598[(2)]);
var inst_35592 = cljs.core.async.close_BANG_(out);
var state_35598__$1 = (function (){var statearr_35616 = state_35598;
(statearr_35616[(13)] = inst_35591);

return statearr_35616;
})();
var statearr_35617_36592 = state_35598__$1;
(statearr_35617_36592[(2)] = inst_35592);

(statearr_35617_36592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (10))){
var inst_35581 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
var statearr_35618_36593 = state_35598__$1;
(statearr_35618_36593[(2)] = inst_35581);

(statearr_35618_36593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (8))){
var inst_35562 = (state_35598[(9)]);
var inst_35558 = (state_35598[(8)]);
var inst_35566 = (state_35598[(10)]);
var inst_35571 = inst_35558.push(inst_35562);
var tmp35615 = inst_35558;
var inst_35558__$1 = tmp35615;
var inst_35559 = inst_35566;
var state_35598__$1 = (function (){var statearr_35619 = state_35598;
(statearr_35619[(7)] = inst_35559);

(statearr_35619[(14)] = inst_35571);

(statearr_35619[(8)] = inst_35558__$1);

return statearr_35619;
})();
var statearr_35620_36594 = state_35598__$1;
(statearr_35620_36594[(2)] = null);

(statearr_35620_36594[(1)] = (2));


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
var cljs$core$async$state_machine__32822__auto__ = null;
var cljs$core$async$state_machine__32822__auto____0 = (function (){
var statearr_35621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35621[(0)] = cljs$core$async$state_machine__32822__auto__);

(statearr_35621[(1)] = (1));

return statearr_35621;
});
var cljs$core$async$state_machine__32822__auto____1 = (function (state_35598){
while(true){
var ret_value__32823__auto__ = (function (){try{while(true){
var result__32824__auto__ = switch__32821__auto__(state_35598);
if(cljs.core.keyword_identical_QMARK_(result__32824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32824__auto__;
}
break;
}
}catch (e35622){if((e35622 instanceof Object)){
var ex__32825__auto__ = e35622;
var statearr_35623_36595 = state_35598;
(statearr_35623_36595[(5)] = ex__32825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35622;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36602 = state_35598;
state_35598 = G__36602;
continue;
} else {
return ret_value__32823__auto__;
}
break;
}
});
cljs$core$async$state_machine__32822__auto__ = function(state_35598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32822__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32822__auto____1.call(this,state_35598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32822__auto____0;
cljs$core$async$state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32822__auto____1;
return cljs$core$async$state_machine__32822__auto__;
})()
})();
var state__33211__auto__ = (function (){var statearr_35624 = (f__33210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33210__auto__.cljs$core$IFn$_invoke$arity$0() : f__33210__auto__.call(null));
(statearr_35624[(6)] = c__33209__auto___36565);

return statearr_35624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33211__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
