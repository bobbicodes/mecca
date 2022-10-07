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
var G__30057 = arguments.length;
switch (G__30057) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30061 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30061 = (function (f,blockable,meta30062){
this.f = f;
this.blockable = blockable;
this.meta30062 = meta30062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30063,meta30062__$1){
var self__ = this;
var _30063__$1 = this;
return (new cljs.core.async.t_cljs$core$async30061(self__.f,self__.blockable,meta30062__$1));
}));

(cljs.core.async.t_cljs$core$async30061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30063){
var self__ = this;
var _30063__$1 = this;
return self__.meta30062;
}));

(cljs.core.async.t_cljs$core$async30061.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30061.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30062","meta30062",-767821577,null)], null);
}));

(cljs.core.async.t_cljs$core$async30061.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30061");

(cljs.core.async.t_cljs$core$async30061.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30061");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30061.
 */
cljs.core.async.__GT_t_cljs$core$async30061 = (function cljs$core$async$__GT_t_cljs$core$async30061(f__$1,blockable__$1,meta30062){
return (new cljs.core.async.t_cljs$core$async30061(f__$1,blockable__$1,meta30062));
});

}

return (new cljs.core.async.t_cljs$core$async30061(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30071 = arguments.length;
switch (G__30071) {
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
var G__30080 = arguments.length;
switch (G__30080) {
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
var G__30088 = arguments.length;
switch (G__30088) {
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
var val_32430 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32430) : fn1.call(null,val_32430));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32430) : fn1.call(null,val_32430));
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
var G__30097 = arguments.length;
switch (G__30097) {
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
var n__4666__auto___32432 = n;
var x_32433 = (0);
while(true){
if((x_32433 < n__4666__auto___32432)){
(a[x_32433] = x_32433);

var G__32434 = (x_32433 + (1));
x_32433 = G__32434;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30110 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30110 = (function (flag,meta30111){
this.flag = flag;
this.meta30111 = meta30111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30112,meta30111__$1){
var self__ = this;
var _30112__$1 = this;
return (new cljs.core.async.t_cljs$core$async30110(self__.flag,meta30111__$1));
}));

(cljs.core.async.t_cljs$core$async30110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30112){
var self__ = this;
var _30112__$1 = this;
return self__.meta30111;
}));

(cljs.core.async.t_cljs$core$async30110.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30110.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30110.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30110.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30110.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30111","meta30111",-1265160145,null)], null);
}));

(cljs.core.async.t_cljs$core$async30110.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30110");

(cljs.core.async.t_cljs$core$async30110.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30110");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30110.
 */
cljs.core.async.__GT_t_cljs$core$async30110 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30110(flag__$1,meta30111){
return (new cljs.core.async.t_cljs$core$async30110(flag__$1,meta30111));
});

}

return (new cljs.core.async.t_cljs$core$async30110(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30124 = (function (flag,cb,meta30125){
this.flag = flag;
this.cb = cb;
this.meta30125 = meta30125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30126,meta30125__$1){
var self__ = this;
var _30126__$1 = this;
return (new cljs.core.async.t_cljs$core$async30124(self__.flag,self__.cb,meta30125__$1));
}));

(cljs.core.async.t_cljs$core$async30124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30126){
var self__ = this;
var _30126__$1 = this;
return self__.meta30125;
}));

(cljs.core.async.t_cljs$core$async30124.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30124.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30125","meta30125",1716462200,null)], null);
}));

(cljs.core.async.t_cljs$core$async30124.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30124");

(cljs.core.async.t_cljs$core$async30124.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30124");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30124.
 */
cljs.core.async.__GT_t_cljs$core$async30124 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30124(flag__$1,cb__$1,meta30125){
return (new cljs.core.async.t_cljs$core$async30124(flag__$1,cb__$1,meta30125));
});

}

return (new cljs.core.async.t_cljs$core$async30124(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30146_SHARP_){
var G__30153 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30146_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30153) : fret.call(null,G__30153));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30147_SHARP_){
var G__30154 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30147_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30154) : fret.call(null,G__30154));
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
var G__32435 = (i + (1));
i = G__32435;
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
var len__4789__auto___32436 = arguments.length;
var i__4790__auto___32437 = (0);
while(true){
if((i__4790__auto___32437 < len__4789__auto___32436)){
args__4795__auto__.push((arguments[i__4790__auto___32437]));

var G__32438 = (i__4790__auto___32437 + (1));
i__4790__auto___32437 = G__32438;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30173){
var map__30174 = p__30173;
var map__30174__$1 = (((((!((map__30174 == null))))?(((((map__30174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30174):map__30174);
var opts = map__30174__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30167){
var G__30168 = cljs.core.first(seq30167);
var seq30167__$1 = cljs.core.next(seq30167);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30168,seq30167__$1);
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
var G__30190 = arguments.length;
switch (G__30190) {
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
var c__29967__auto___32440 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29968__auto__ = (function (){var switch__29657__auto__ = (function (state_30266){
var state_val_30270 = (state_30266[(1)]);
if((state_val_30270 === (7))){
var inst_30255 = (state_30266[(2)]);
var state_30266__$1 = state_30266;
var statearr_30292_32441 = state_30266__$1;
(statearr_30292_32441[(2)] = inst_30255);

(statearr_30292_32441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (1))){
var state_30266__$1 = state_30266;
var statearr_30296_32442 = state_30266__$1;
(statearr_30296_32442[(2)] = null);

(statearr_30296_32442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (4))){
var inst_30217 = (state_30266[(7)]);
var inst_30217__$1 = (state_30266[(2)]);
var inst_30231 = (inst_30217__$1 == null);
var state_30266__$1 = (function (){var statearr_30301 = state_30266;
(statearr_30301[(7)] = inst_30217__$1);

return statearr_30301;
})();
if(cljs.core.truth_(inst_30231)){
var statearr_30303_32443 = state_30266__$1;
(statearr_30303_32443[(1)] = (5));

} else {
var statearr_30304_32444 = state_30266__$1;
(statearr_30304_32444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (13))){
var state_30266__$1 = state_30266;
var statearr_30309_32445 = state_30266__$1;
(statearr_30309_32445[(2)] = null);

(statearr_30309_32445[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (6))){
var inst_30217 = (state_30266[(7)]);
var state_30266__$1 = state_30266;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30266__$1,(11),to,inst_30217);
} else {
if((state_val_30270 === (3))){
var inst_30257 = (state_30266[(2)]);
var state_30266__$1 = state_30266;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30266__$1,inst_30257);
} else {
if((state_val_30270 === (12))){
var state_30266__$1 = state_30266;
var statearr_30317_32446 = state_30266__$1;
(statearr_30317_32446[(2)] = null);

(statearr_30317_32446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (2))){
var state_30266__$1 = state_30266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30266__$1,(4),from);
} else {
if((state_val_30270 === (11))){
var inst_30244 = (state_30266[(2)]);
var state_30266__$1 = state_30266;
if(cljs.core.truth_(inst_30244)){
var statearr_30325_32447 = state_30266__$1;
(statearr_30325_32447[(1)] = (12));

} else {
var statearr_30327_32448 = state_30266__$1;
(statearr_30327_32448[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (9))){
var state_30266__$1 = state_30266;
var statearr_30328_32450 = state_30266__$1;
(statearr_30328_32450[(2)] = null);

(statearr_30328_32450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (5))){
var state_30266__$1 = state_30266;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30331_32452 = state_30266__$1;
(statearr_30331_32452[(1)] = (8));

} else {
var statearr_30333_32453 = state_30266__$1;
(statearr_30333_32453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (14))){
var inst_30253 = (state_30266[(2)]);
var state_30266__$1 = state_30266;
var statearr_30334_32454 = state_30266__$1;
(statearr_30334_32454[(2)] = inst_30253);

(statearr_30334_32454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (10))){
var inst_30241 = (state_30266[(2)]);
var state_30266__$1 = state_30266;
var statearr_30335_32455 = state_30266__$1;
(statearr_30335_32455[(2)] = inst_30241);

(statearr_30335_32455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (8))){
var inst_30238 = cljs.core.async.close_BANG_(to);
var state_30266__$1 = state_30266;
var statearr_30339_32457 = state_30266__$1;
(statearr_30339_32457[(2)] = inst_30238);

(statearr_30339_32457[(1)] = (10));


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
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_30342 = [null,null,null,null,null,null,null,null];
(statearr_30342[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_30342[(1)] = (1));

return statearr_30342;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_30266){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__(state_30266);
if(cljs.core.keyword_identical_QMARK_(result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e30348){if((e30348 instanceof Object)){
var ex__29661__auto__ = e30348;
var statearr_30350_32461 = state_30266;
(statearr_30350_32461[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30348;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32462 = state_30266;
state_30266 = G__32462;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_30266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_30266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
})();
var state__29969__auto__ = (function (){var statearr_30351 = (f__29968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29968__auto__.cljs$core$IFn$_invoke$arity$0() : f__29968__auto__.call(null));
(statearr_30351[(6)] = c__29967__auto___32440);

return statearr_30351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29969__auto__);
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
var process = (function (p__30366){
var vec__30367 = p__30366;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30367,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30367,(1),null);
var job = vec__30367;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29967__auto___32464 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29968__auto__ = (function (){var switch__29657__auto__ = (function (state_30376){
var state_val_30377 = (state_30376[(1)]);
if((state_val_30377 === (1))){
var state_30376__$1 = state_30376;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30376__$1,(2),res,v);
} else {
if((state_val_30377 === (2))){
var inst_30373 = (state_30376[(2)]);
var inst_30374 = cljs.core.async.close_BANG_(res);
var state_30376__$1 = (function (){var statearr_30379 = state_30376;
(statearr_30379[(7)] = inst_30373);

return statearr_30379;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30376__$1,inst_30374);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0 = (function (){
var statearr_30383 = [null,null,null,null,null,null,null,null];
(statearr_30383[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__);

(statearr_30383[(1)] = (1));

return statearr_30383;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1 = (function (state_30376){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__(state_30376);
if(cljs.core.keyword_identical_QMARK_(result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e30388){if((e30388 instanceof Object)){
var ex__29661__auto__ = e30388;
var statearr_30393_32468 = state_30376;
(statearr_30393_32468[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30388;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32469 = state_30376;
state_30376 = G__32469;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = function(state_30376){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1.call(this,state_30376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__;
})()
})();
var state__29969__auto__ = (function (){var statearr_30398 = (f__29968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29968__auto__.cljs$core$IFn$_invoke$arity$0() : f__29968__auto__.call(null));
(statearr_30398[(6)] = c__29967__auto___32464);

return statearr_30398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29969__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30399){
var vec__30401 = p__30399;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30401,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30401,(1),null);
var job = vec__30401;
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
var n__4666__auto___32473 = n;
var __32474 = (0);
while(true){
if((__32474 < n__4666__auto___32473)){
var G__30412_32475 = type;
var G__30412_32476__$1 = (((G__30412_32475 instanceof cljs.core.Keyword))?G__30412_32475.fqn:null);
switch (G__30412_32476__$1) {
case "compute":
var c__29967__auto___32478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32474,c__29967__auto___32478,G__30412_32475,G__30412_32476__$1,n__4666__auto___32473,jobs,results,process,async){
return (function (){
var f__29968__auto__ = (function (){var switch__29657__auto__ = ((function (__32474,c__29967__auto___32478,G__30412_32475,G__30412_32476__$1,n__4666__auto___32473,jobs,results,process,async){
return (function (state_30430){
var state_val_30431 = (state_30430[(1)]);
if((state_val_30431 === (1))){
var state_30430__$1 = state_30430;
var statearr_30432_32481 = state_30430__$1;
(statearr_30432_32481[(2)] = null);

(statearr_30432_32481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (2))){
var state_30430__$1 = state_30430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30430__$1,(4),jobs);
} else {
if((state_val_30431 === (3))){
var inst_30424 = (state_30430[(2)]);
var state_30430__$1 = state_30430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30430__$1,inst_30424);
} else {
if((state_val_30431 === (4))){
var inst_30415 = (state_30430[(2)]);
var inst_30416 = process(inst_30415);
var state_30430__$1 = state_30430;
if(cljs.core.truth_(inst_30416)){
var statearr_30434_32484 = state_30430__$1;
(statearr_30434_32484[(1)] = (5));

} else {
var statearr_30435_32485 = state_30430__$1;
(statearr_30435_32485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (5))){
var state_30430__$1 = state_30430;
var statearr_30436_32486 = state_30430__$1;
(statearr_30436_32486[(2)] = null);

(statearr_30436_32486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (6))){
var state_30430__$1 = state_30430;
var statearr_30437_32489 = state_30430__$1;
(statearr_30437_32489[(2)] = null);

(statearr_30437_32489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30431 === (7))){
var inst_30422 = (state_30430[(2)]);
var state_30430__$1 = state_30430;
var statearr_30438_32490 = state_30430__$1;
(statearr_30438_32490[(2)] = inst_30422);

(statearr_30438_32490[(1)] = (3));


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
});})(__32474,c__29967__auto___32478,G__30412_32475,G__30412_32476__$1,n__4666__auto___32473,jobs,results,process,async))
;
return ((function (__32474,switch__29657__auto__,c__29967__auto___32478,G__30412_32475,G__30412_32476__$1,n__4666__auto___32473,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0 = (function (){
var statearr_30439 = [null,null,null,null,null,null,null];
(statearr_30439[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__);

(statearr_30439[(1)] = (1));

return statearr_30439;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1 = (function (state_30430){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__(state_30430);
if(cljs.core.keyword_identical_QMARK_(result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e30440){if((e30440 instanceof Object)){
var ex__29661__auto__ = e30440;
var statearr_30441_32491 = state_30430;
(statearr_30441_32491[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30440;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32492 = state_30430;
state_30430 = G__32492;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = function(state_30430){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1.call(this,state_30430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__;
})()
;})(__32474,switch__29657__auto__,c__29967__auto___32478,G__30412_32475,G__30412_32476__$1,n__4666__auto___32473,jobs,results,process,async))
})();
var state__29969__auto__ = (function (){var statearr_30443 = (f__29968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29968__auto__.cljs$core$IFn$_invoke$arity$0() : f__29968__auto__.call(null));
(statearr_30443[(6)] = c__29967__auto___32478);

return statearr_30443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29969__auto__);
});})(__32474,c__29967__auto___32478,G__30412_32475,G__30412_32476__$1,n__4666__auto___32473,jobs,results,process,async))
);


break;
case "async":
var c__29967__auto___32493 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32474,c__29967__auto___32493,G__30412_32475,G__30412_32476__$1,n__4666__auto___32473,jobs,results,process,async){
return (function (){
var f__29968__auto__ = (function (){var switch__29657__auto__ = ((function (__32474,c__29967__auto___32493,G__30412_32475,G__30412_32476__$1,n__4666__auto___32473,jobs,results,process,async){
return (function (state_30456){
var state_val_30457 = (state_30456[(1)]);
if((state_val_30457 === (1))){
var state_30456__$1 = state_30456;
var statearr_30458_32494 = state_30456__$1;
(statearr_30458_32494[(2)] = null);

(statearr_30458_32494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (2))){
var state_30456__$1 = state_30456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30456__$1,(4),jobs);
} else {
if((state_val_30457 === (3))){
var inst_30454 = (state_30456[(2)]);
var state_30456__$1 = state_30456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30456__$1,inst_30454);
} else {
if((state_val_30457 === (4))){
var inst_30446 = (state_30456[(2)]);
var inst_30447 = async(inst_30446);
var state_30456__$1 = state_30456;
if(cljs.core.truth_(inst_30447)){
var statearr_30459_32495 = state_30456__$1;
(statearr_30459_32495[(1)] = (5));

} else {
var statearr_30460_32496 = state_30456__$1;
(statearr_30460_32496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (5))){
var state_30456__$1 = state_30456;
var statearr_30461_32497 = state_30456__$1;
(statearr_30461_32497[(2)] = null);

(statearr_30461_32497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (6))){
var state_30456__$1 = state_30456;
var statearr_30462_32498 = state_30456__$1;
(statearr_30462_32498[(2)] = null);

(statearr_30462_32498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (7))){
var inst_30452 = (state_30456[(2)]);
var state_30456__$1 = state_30456;
var statearr_30463_32499 = state_30456__$1;
(statearr_30463_32499[(2)] = inst_30452);

(statearr_30463_32499[(1)] = (3));


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
});})(__32474,c__29967__auto___32493,G__30412_32475,G__30412_32476__$1,n__4666__auto___32473,jobs,results,process,async))
;
return ((function (__32474,switch__29657__auto__,c__29967__auto___32493,G__30412_32475,G__30412_32476__$1,n__4666__auto___32473,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0 = (function (){
var statearr_30464 = [null,null,null,null,null,null,null];
(statearr_30464[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__);

(statearr_30464[(1)] = (1));

return statearr_30464;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1 = (function (state_30456){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__(state_30456);
if(cljs.core.keyword_identical_QMARK_(result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e30465){if((e30465 instanceof Object)){
var ex__29661__auto__ = e30465;
var statearr_30466_32500 = state_30456;
(statearr_30466_32500[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30465;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32501 = state_30456;
state_30456 = G__32501;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = function(state_30456){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1.call(this,state_30456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__;
})()
;})(__32474,switch__29657__auto__,c__29967__auto___32493,G__30412_32475,G__30412_32476__$1,n__4666__auto___32473,jobs,results,process,async))
})();
var state__29969__auto__ = (function (){var statearr_30467 = (f__29968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29968__auto__.cljs$core$IFn$_invoke$arity$0() : f__29968__auto__.call(null));
(statearr_30467[(6)] = c__29967__auto___32493);

return statearr_30467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29969__auto__);
});})(__32474,c__29967__auto___32493,G__30412_32475,G__30412_32476__$1,n__4666__auto___32473,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30412_32476__$1)].join('')));

}

var G__32502 = (__32474 + (1));
__32474 = G__32502;
continue;
} else {
}
break;
}

var c__29967__auto___32503 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29968__auto__ = (function (){var switch__29657__auto__ = (function (state_30489){
var state_val_30490 = (state_30489[(1)]);
if((state_val_30490 === (7))){
var inst_30485 = (state_30489[(2)]);
var state_30489__$1 = state_30489;
var statearr_30491_32504 = state_30489__$1;
(statearr_30491_32504[(2)] = inst_30485);

(statearr_30491_32504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (1))){
var state_30489__$1 = state_30489;
var statearr_30492_32507 = state_30489__$1;
(statearr_30492_32507[(2)] = null);

(statearr_30492_32507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (4))){
var inst_30470 = (state_30489[(7)]);
var inst_30470__$1 = (state_30489[(2)]);
var inst_30471 = (inst_30470__$1 == null);
var state_30489__$1 = (function (){var statearr_30493 = state_30489;
(statearr_30493[(7)] = inst_30470__$1);

return statearr_30493;
})();
if(cljs.core.truth_(inst_30471)){
var statearr_30494_32508 = state_30489__$1;
(statearr_30494_32508[(1)] = (5));

} else {
var statearr_30495_32509 = state_30489__$1;
(statearr_30495_32509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (6))){
var inst_30475 = (state_30489[(8)]);
var inst_30470 = (state_30489[(7)]);
var inst_30475__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30476 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30477 = [inst_30470,inst_30475__$1];
var inst_30478 = (new cljs.core.PersistentVector(null,2,(5),inst_30476,inst_30477,null));
var state_30489__$1 = (function (){var statearr_30497 = state_30489;
(statearr_30497[(8)] = inst_30475__$1);

return statearr_30497;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30489__$1,(8),jobs,inst_30478);
} else {
if((state_val_30490 === (3))){
var inst_30487 = (state_30489[(2)]);
var state_30489__$1 = state_30489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30489__$1,inst_30487);
} else {
if((state_val_30490 === (2))){
var state_30489__$1 = state_30489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30489__$1,(4),from);
} else {
if((state_val_30490 === (9))){
var inst_30482 = (state_30489[(2)]);
var state_30489__$1 = (function (){var statearr_30502 = state_30489;
(statearr_30502[(9)] = inst_30482);

return statearr_30502;
})();
var statearr_30503_32510 = state_30489__$1;
(statearr_30503_32510[(2)] = null);

(statearr_30503_32510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (5))){
var inst_30473 = cljs.core.async.close_BANG_(jobs);
var state_30489__$1 = state_30489;
var statearr_30507_32511 = state_30489__$1;
(statearr_30507_32511[(2)] = inst_30473);

(statearr_30507_32511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (8))){
var inst_30475 = (state_30489[(8)]);
var inst_30480 = (state_30489[(2)]);
var state_30489__$1 = (function (){var statearr_30508 = state_30489;
(statearr_30508[(10)] = inst_30480);

return statearr_30508;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30489__$1,(9),results,inst_30475);
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
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0 = (function (){
var statearr_30509 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30509[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__);

(statearr_30509[(1)] = (1));

return statearr_30509;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1 = (function (state_30489){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__(state_30489);
if(cljs.core.keyword_identical_QMARK_(result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e30510){if((e30510 instanceof Object)){
var ex__29661__auto__ = e30510;
var statearr_30511_32512 = state_30489;
(statearr_30511_32512[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30510;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32513 = state_30489;
state_30489 = G__32513;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = function(state_30489){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1.call(this,state_30489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__;
})()
})();
var state__29969__auto__ = (function (){var statearr_30512 = (f__29968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29968__auto__.cljs$core$IFn$_invoke$arity$0() : f__29968__auto__.call(null));
(statearr_30512[(6)] = c__29967__auto___32503);

return statearr_30512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29969__auto__);
}));


var c__29967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29968__auto__ = (function (){var switch__29657__auto__ = (function (state_30559){
var state_val_30560 = (state_30559[(1)]);
if((state_val_30560 === (7))){
var inst_30551 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
var statearr_30567_32514 = state_30559__$1;
(statearr_30567_32514[(2)] = inst_30551);

(statearr_30567_32514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (20))){
var state_30559__$1 = state_30559;
var statearr_30569_32515 = state_30559__$1;
(statearr_30569_32515[(2)] = null);

(statearr_30569_32515[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (1))){
var state_30559__$1 = state_30559;
var statearr_30574_32516 = state_30559__$1;
(statearr_30574_32516[(2)] = null);

(statearr_30574_32516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (4))){
var inst_30517 = (state_30559[(7)]);
var inst_30517__$1 = (state_30559[(2)]);
var inst_30518 = (inst_30517__$1 == null);
var state_30559__$1 = (function (){var statearr_30575 = state_30559;
(statearr_30575[(7)] = inst_30517__$1);

return statearr_30575;
})();
if(cljs.core.truth_(inst_30518)){
var statearr_30576_32518 = state_30559__$1;
(statearr_30576_32518[(1)] = (5));

} else {
var statearr_30577_32519 = state_30559__$1;
(statearr_30577_32519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (15))){
var inst_30531 = (state_30559[(8)]);
var state_30559__$1 = state_30559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30559__$1,(18),to,inst_30531);
} else {
if((state_val_30560 === (21))){
var inst_30546 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
var statearr_30578_32520 = state_30559__$1;
(statearr_30578_32520[(2)] = inst_30546);

(statearr_30578_32520[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (13))){
var inst_30548 = (state_30559[(2)]);
var state_30559__$1 = (function (){var statearr_30579 = state_30559;
(statearr_30579[(9)] = inst_30548);

return statearr_30579;
})();
var statearr_30580_32521 = state_30559__$1;
(statearr_30580_32521[(2)] = null);

(statearr_30580_32521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (6))){
var inst_30517 = (state_30559[(7)]);
var state_30559__$1 = state_30559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30559__$1,(11),inst_30517);
} else {
if((state_val_30560 === (17))){
var inst_30541 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
if(cljs.core.truth_(inst_30541)){
var statearr_30581_32524 = state_30559__$1;
(statearr_30581_32524[(1)] = (19));

} else {
var statearr_30582_32525 = state_30559__$1;
(statearr_30582_32525[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (3))){
var inst_30553 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30559__$1,inst_30553);
} else {
if((state_val_30560 === (12))){
var inst_30527 = (state_30559[(10)]);
var state_30559__$1 = state_30559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30559__$1,(14),inst_30527);
} else {
if((state_val_30560 === (2))){
var state_30559__$1 = state_30559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30559__$1,(4),results);
} else {
if((state_val_30560 === (19))){
var state_30559__$1 = state_30559;
var statearr_30586_32529 = state_30559__$1;
(statearr_30586_32529[(2)] = null);

(statearr_30586_32529[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (11))){
var inst_30527 = (state_30559[(2)]);
var state_30559__$1 = (function (){var statearr_30587 = state_30559;
(statearr_30587[(10)] = inst_30527);

return statearr_30587;
})();
var statearr_30588_32532 = state_30559__$1;
(statearr_30588_32532[(2)] = null);

(statearr_30588_32532[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (9))){
var state_30559__$1 = state_30559;
var statearr_30589_32533 = state_30559__$1;
(statearr_30589_32533[(2)] = null);

(statearr_30589_32533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (5))){
var state_30559__$1 = state_30559;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30591_32535 = state_30559__$1;
(statearr_30591_32535[(1)] = (8));

} else {
var statearr_30592_32536 = state_30559__$1;
(statearr_30592_32536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (14))){
var inst_30531 = (state_30559[(8)]);
var inst_30531__$1 = (state_30559[(2)]);
var inst_30534 = (inst_30531__$1 == null);
var inst_30535 = cljs.core.not(inst_30534);
var state_30559__$1 = (function (){var statearr_30593 = state_30559;
(statearr_30593[(8)] = inst_30531__$1);

return statearr_30593;
})();
if(inst_30535){
var statearr_30595_32537 = state_30559__$1;
(statearr_30595_32537[(1)] = (15));

} else {
var statearr_30596_32538 = state_30559__$1;
(statearr_30596_32538[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (16))){
var state_30559__$1 = state_30559;
var statearr_30597_32540 = state_30559__$1;
(statearr_30597_32540[(2)] = false);

(statearr_30597_32540[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (10))){
var inst_30524 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
var statearr_30598_32542 = state_30559__$1;
(statearr_30598_32542[(2)] = inst_30524);

(statearr_30598_32542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (18))){
var inst_30538 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
var statearr_30599_32543 = state_30559__$1;
(statearr_30599_32543[(2)] = inst_30538);

(statearr_30599_32543[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (8))){
var inst_30521 = cljs.core.async.close_BANG_(to);
var state_30559__$1 = state_30559;
var statearr_30600_32545 = state_30559__$1;
(statearr_30600_32545[(2)] = inst_30521);

(statearr_30600_32545[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0 = (function (){
var statearr_30601 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30601[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__);

(statearr_30601[(1)] = (1));

return statearr_30601;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1 = (function (state_30559){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__(state_30559);
if(cljs.core.keyword_identical_QMARK_(result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e30602){if((e30602 instanceof Object)){
var ex__29661__auto__ = e30602;
var statearr_30603_32550 = state_30559;
(statearr_30603_32550[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30602;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32552 = state_30559;
state_30559 = G__32552;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = function(state_30559){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1.call(this,state_30559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__;
})()
})();
var state__29969__auto__ = (function (){var statearr_30604 = (f__29968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29968__auto__.cljs$core$IFn$_invoke$arity$0() : f__29968__auto__.call(null));
(statearr_30604[(6)] = c__29967__auto__);

return statearr_30604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29969__auto__);
}));

return c__29967__auto__;
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
var G__30606 = arguments.length;
switch (G__30606) {
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
var G__30611 = arguments.length;
switch (G__30611) {
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
var G__30619 = arguments.length;
switch (G__30619) {
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
var c__29967__auto___32587 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29968__auto__ = (function (){var switch__29657__auto__ = (function (state_30650){
var state_val_30651 = (state_30650[(1)]);
if((state_val_30651 === (7))){
var inst_30646 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30653_32590 = state_30650__$1;
(statearr_30653_32590[(2)] = inst_30646);

(statearr_30653_32590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (1))){
var state_30650__$1 = state_30650;
var statearr_30654_32591 = state_30650__$1;
(statearr_30654_32591[(2)] = null);

(statearr_30654_32591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (4))){
var inst_30626 = (state_30650[(7)]);
var inst_30626__$1 = (state_30650[(2)]);
var inst_30627 = (inst_30626__$1 == null);
var state_30650__$1 = (function (){var statearr_30655 = state_30650;
(statearr_30655[(7)] = inst_30626__$1);

return statearr_30655;
})();
if(cljs.core.truth_(inst_30627)){
var statearr_30657_32594 = state_30650__$1;
(statearr_30657_32594[(1)] = (5));

} else {
var statearr_30658_32595 = state_30650__$1;
(statearr_30658_32595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (13))){
var state_30650__$1 = state_30650;
var statearr_30663_32598 = state_30650__$1;
(statearr_30663_32598[(2)] = null);

(statearr_30663_32598[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (6))){
var inst_30626 = (state_30650[(7)]);
var inst_30632 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30626) : p.call(null,inst_30626));
var state_30650__$1 = state_30650;
if(cljs.core.truth_(inst_30632)){
var statearr_30666_32601 = state_30650__$1;
(statearr_30666_32601[(1)] = (9));

} else {
var statearr_30667_32602 = state_30650__$1;
(statearr_30667_32602[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (3))){
var inst_30648 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30650__$1,inst_30648);
} else {
if((state_val_30651 === (12))){
var state_30650__$1 = state_30650;
var statearr_30668_32604 = state_30650__$1;
(statearr_30668_32604[(2)] = null);

(statearr_30668_32604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (2))){
var state_30650__$1 = state_30650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30650__$1,(4),ch);
} else {
if((state_val_30651 === (11))){
var inst_30626 = (state_30650[(7)]);
var inst_30636 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30650__$1,(8),inst_30636,inst_30626);
} else {
if((state_val_30651 === (9))){
var state_30650__$1 = state_30650;
var statearr_30670_32609 = state_30650__$1;
(statearr_30670_32609[(2)] = tc);

(statearr_30670_32609[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (5))){
var inst_30629 = cljs.core.async.close_BANG_(tc);
var inst_30630 = cljs.core.async.close_BANG_(fc);
var state_30650__$1 = (function (){var statearr_30671 = state_30650;
(statearr_30671[(8)] = inst_30629);

return statearr_30671;
})();
var statearr_30672_32612 = state_30650__$1;
(statearr_30672_32612[(2)] = inst_30630);

(statearr_30672_32612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (14))){
var inst_30644 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30673_32614 = state_30650__$1;
(statearr_30673_32614[(2)] = inst_30644);

(statearr_30673_32614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (10))){
var state_30650__$1 = state_30650;
var statearr_30674_32615 = state_30650__$1;
(statearr_30674_32615[(2)] = fc);

(statearr_30674_32615[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (8))){
var inst_30638 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
if(cljs.core.truth_(inst_30638)){
var statearr_30675_32616 = state_30650__$1;
(statearr_30675_32616[(1)] = (12));

} else {
var statearr_30676_32617 = state_30650__$1;
(statearr_30676_32617[(1)] = (13));

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
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_30677 = [null,null,null,null,null,null,null,null,null];
(statearr_30677[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_30677[(1)] = (1));

return statearr_30677;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_30650){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__(state_30650);
if(cljs.core.keyword_identical_QMARK_(result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e30678){if((e30678 instanceof Object)){
var ex__29661__auto__ = e30678;
var statearr_30679_32624 = state_30650;
(statearr_30679_32624[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30678;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32625 = state_30650;
state_30650 = G__32625;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_30650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_30650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
})();
var state__29969__auto__ = (function (){var statearr_30681 = (f__29968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29968__auto__.cljs$core$IFn$_invoke$arity$0() : f__29968__auto__.call(null));
(statearr_30681[(6)] = c__29967__auto___32587);

return statearr_30681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29969__auto__);
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
var c__29967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29968__auto__ = (function (){var switch__29657__auto__ = (function (state_30705){
var state_val_30706 = (state_30705[(1)]);
if((state_val_30706 === (7))){
var inst_30699 = (state_30705[(2)]);
var state_30705__$1 = state_30705;
var statearr_30712_32630 = state_30705__$1;
(statearr_30712_32630[(2)] = inst_30699);

(statearr_30712_32630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (1))){
var inst_30683 = init;
var state_30705__$1 = (function (){var statearr_30716 = state_30705;
(statearr_30716[(7)] = inst_30683);

return statearr_30716;
})();
var statearr_30722_32632 = state_30705__$1;
(statearr_30722_32632[(2)] = null);

(statearr_30722_32632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (4))){
var inst_30686 = (state_30705[(8)]);
var inst_30686__$1 = (state_30705[(2)]);
var inst_30687 = (inst_30686__$1 == null);
var state_30705__$1 = (function (){var statearr_30733 = state_30705;
(statearr_30733[(8)] = inst_30686__$1);

return statearr_30733;
})();
if(cljs.core.truth_(inst_30687)){
var statearr_30735_32633 = state_30705__$1;
(statearr_30735_32633[(1)] = (5));

} else {
var statearr_30736_32634 = state_30705__$1;
(statearr_30736_32634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (6))){
var inst_30683 = (state_30705[(7)]);
var inst_30690 = (state_30705[(9)]);
var inst_30686 = (state_30705[(8)]);
var inst_30690__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30683,inst_30686) : f.call(null,inst_30683,inst_30686));
var inst_30691 = cljs.core.reduced_QMARK_(inst_30690__$1);
var state_30705__$1 = (function (){var statearr_30741 = state_30705;
(statearr_30741[(9)] = inst_30690__$1);

return statearr_30741;
})();
if(inst_30691){
var statearr_30744_32637 = state_30705__$1;
(statearr_30744_32637[(1)] = (8));

} else {
var statearr_30746_32638 = state_30705__$1;
(statearr_30746_32638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (3))){
var inst_30701 = (state_30705[(2)]);
var state_30705__$1 = state_30705;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30705__$1,inst_30701);
} else {
if((state_val_30706 === (2))){
var state_30705__$1 = state_30705;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30705__$1,(4),ch);
} else {
if((state_val_30706 === (9))){
var inst_30690 = (state_30705[(9)]);
var inst_30683 = inst_30690;
var state_30705__$1 = (function (){var statearr_30750 = state_30705;
(statearr_30750[(7)] = inst_30683);

return statearr_30750;
})();
var statearr_30751_32641 = state_30705__$1;
(statearr_30751_32641[(2)] = null);

(statearr_30751_32641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (5))){
var inst_30683 = (state_30705[(7)]);
var state_30705__$1 = state_30705;
var statearr_30756_32642 = state_30705__$1;
(statearr_30756_32642[(2)] = inst_30683);

(statearr_30756_32642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (10))){
var inst_30697 = (state_30705[(2)]);
var state_30705__$1 = state_30705;
var statearr_30769_32643 = state_30705__$1;
(statearr_30769_32643[(2)] = inst_30697);

(statearr_30769_32643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30706 === (8))){
var inst_30690 = (state_30705[(9)]);
var inst_30693 = cljs.core.deref(inst_30690);
var state_30705__$1 = state_30705;
var statearr_30781_32644 = state_30705__$1;
(statearr_30781_32644[(2)] = inst_30693);

(statearr_30781_32644[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__29658__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29658__auto____0 = (function (){
var statearr_30794 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30794[(0)] = cljs$core$async$reduce_$_state_machine__29658__auto__);

(statearr_30794[(1)] = (1));

return statearr_30794;
});
var cljs$core$async$reduce_$_state_machine__29658__auto____1 = (function (state_30705){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__(state_30705);
if(cljs.core.keyword_identical_QMARK_(result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e30804){if((e30804 instanceof Object)){
var ex__29661__auto__ = e30804;
var statearr_30805_32649 = state_30705;
(statearr_30805_32649[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30804;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32651 = state_30705;
state_30705 = G__32651;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29658__auto__ = function(state_30705){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29658__auto____1.call(this,state_30705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29658__auto____0;
cljs$core$async$reduce_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29658__auto____1;
return cljs$core$async$reduce_$_state_machine__29658__auto__;
})()
})();
var state__29969__auto__ = (function (){var statearr_30819 = (f__29968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29968__auto__.cljs$core$IFn$_invoke$arity$0() : f__29968__auto__.call(null));
(statearr_30819[(6)] = c__29967__auto__);

return statearr_30819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29969__auto__);
}));

return c__29967__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29968__auto__ = (function (){var switch__29657__auto__ = (function (state_30834){
var state_val_30835 = (state_30834[(1)]);
if((state_val_30835 === (1))){
var inst_30829 = cljs.core.async.reduce(f__$1,init,ch);
var state_30834__$1 = state_30834;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30834__$1,(2),inst_30829);
} else {
if((state_val_30835 === (2))){
var inst_30831 = (state_30834[(2)]);
var inst_30832 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30831) : f__$1.call(null,inst_30831));
var state_30834__$1 = state_30834;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30834__$1,inst_30832);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29658__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29658__auto____0 = (function (){
var statearr_30852 = [null,null,null,null,null,null,null];
(statearr_30852[(0)] = cljs$core$async$transduce_$_state_machine__29658__auto__);

(statearr_30852[(1)] = (1));

return statearr_30852;
});
var cljs$core$async$transduce_$_state_machine__29658__auto____1 = (function (state_30834){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__(state_30834);
if(cljs.core.keyword_identical_QMARK_(result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e30853){if((e30853 instanceof Object)){
var ex__29661__auto__ = e30853;
var statearr_30857_32659 = state_30834;
(statearr_30857_32659[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30853;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32660 = state_30834;
state_30834 = G__32660;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29658__auto__ = function(state_30834){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29658__auto____1.call(this,state_30834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29658__auto____0;
cljs$core$async$transduce_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29658__auto____1;
return cljs$core$async$transduce_$_state_machine__29658__auto__;
})()
})();
var state__29969__auto__ = (function (){var statearr_30866 = (f__29968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29968__auto__.cljs$core$IFn$_invoke$arity$0() : f__29968__auto__.call(null));
(statearr_30866[(6)] = c__29967__auto__);

return statearr_30866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29969__auto__);
}));

return c__29967__auto__;
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
var G__30873 = arguments.length;
switch (G__30873) {
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
var c__29967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29968__auto__ = (function (){var switch__29657__auto__ = (function (state_30909){
var state_val_30911 = (state_30909[(1)]);
if((state_val_30911 === (7))){
var inst_30890 = (state_30909[(2)]);
var state_30909__$1 = state_30909;
var statearr_30917_32668 = state_30909__$1;
(statearr_30917_32668[(2)] = inst_30890);

(statearr_30917_32668[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30911 === (1))){
var inst_30883 = cljs.core.seq(coll);
var inst_30884 = inst_30883;
var state_30909__$1 = (function (){var statearr_30919 = state_30909;
(statearr_30919[(7)] = inst_30884);

return statearr_30919;
})();
var statearr_30920_32669 = state_30909__$1;
(statearr_30920_32669[(2)] = null);

(statearr_30920_32669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30911 === (4))){
var inst_30884 = (state_30909[(7)]);
var inst_30888 = cljs.core.first(inst_30884);
var state_30909__$1 = state_30909;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30909__$1,(7),ch,inst_30888);
} else {
if((state_val_30911 === (13))){
var inst_30902 = (state_30909[(2)]);
var state_30909__$1 = state_30909;
var statearr_30928_32672 = state_30909__$1;
(statearr_30928_32672[(2)] = inst_30902);

(statearr_30928_32672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30911 === (6))){
var inst_30893 = (state_30909[(2)]);
var state_30909__$1 = state_30909;
if(cljs.core.truth_(inst_30893)){
var statearr_30932_32673 = state_30909__$1;
(statearr_30932_32673[(1)] = (8));

} else {
var statearr_30933_32674 = state_30909__$1;
(statearr_30933_32674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30911 === (3))){
var inst_30906 = (state_30909[(2)]);
var state_30909__$1 = state_30909;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30909__$1,inst_30906);
} else {
if((state_val_30911 === (12))){
var state_30909__$1 = state_30909;
var statearr_30934_32683 = state_30909__$1;
(statearr_30934_32683[(2)] = null);

(statearr_30934_32683[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30911 === (2))){
var inst_30884 = (state_30909[(7)]);
var state_30909__$1 = state_30909;
if(cljs.core.truth_(inst_30884)){
var statearr_30937_32685 = state_30909__$1;
(statearr_30937_32685[(1)] = (4));

} else {
var statearr_30938_32686 = state_30909__$1;
(statearr_30938_32686[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30911 === (11))){
var inst_30899 = cljs.core.async.close_BANG_(ch);
var state_30909__$1 = state_30909;
var statearr_30940_32687 = state_30909__$1;
(statearr_30940_32687[(2)] = inst_30899);

(statearr_30940_32687[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30911 === (9))){
var state_30909__$1 = state_30909;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30943_32691 = state_30909__$1;
(statearr_30943_32691[(1)] = (11));

} else {
var statearr_30944_32692 = state_30909__$1;
(statearr_30944_32692[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30911 === (5))){
var inst_30884 = (state_30909[(7)]);
var state_30909__$1 = state_30909;
var statearr_30945_32693 = state_30909__$1;
(statearr_30945_32693[(2)] = inst_30884);

(statearr_30945_32693[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30911 === (10))){
var inst_30904 = (state_30909[(2)]);
var state_30909__$1 = state_30909;
var statearr_30946_32694 = state_30909__$1;
(statearr_30946_32694[(2)] = inst_30904);

(statearr_30946_32694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30911 === (8))){
var inst_30884 = (state_30909[(7)]);
var inst_30895 = cljs.core.next(inst_30884);
var inst_30884__$1 = inst_30895;
var state_30909__$1 = (function (){var statearr_30947 = state_30909;
(statearr_30947[(7)] = inst_30884__$1);

return statearr_30947;
})();
var statearr_30948_32698 = state_30909__$1;
(statearr_30948_32698[(2)] = null);

(statearr_30948_32698[(1)] = (2));


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
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_30949 = [null,null,null,null,null,null,null,null];
(statearr_30949[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_30949[(1)] = (1));

return statearr_30949;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_30909){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__(state_30909);
if(cljs.core.keyword_identical_QMARK_(result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e30950){if((e30950 instanceof Object)){
var ex__29661__auto__ = e30950;
var statearr_30952_32706 = state_30909;
(statearr_30952_32706[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30950;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32707 = state_30909;
state_30909 = G__32707;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_30909){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_30909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
})();
var state__29969__auto__ = (function (){var statearr_30953 = (f__29968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29968__auto__.cljs$core$IFn$_invoke$arity$0() : f__29968__auto__.call(null));
(statearr_30953[(6)] = c__29967__auto__);

return statearr_30953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29969__auto__);
}));

return c__29967__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31001 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31001 = (function (ch,cs,meta31002){
this.ch = ch;
this.cs = cs;
this.meta31002 = meta31002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31003,meta31002__$1){
var self__ = this;
var _31003__$1 = this;
return (new cljs.core.async.t_cljs$core$async31001(self__.ch,self__.cs,meta31002__$1));
}));

(cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31003){
var self__ = this;
var _31003__$1 = this;
return self__.meta31002;
}));

(cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31001.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31002","meta31002",2011600893,null)], null);
}));

(cljs.core.async.t_cljs$core$async31001.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31001.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31001");

(cljs.core.async.t_cljs$core$async31001.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31001");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31001.
 */
cljs.core.async.__GT_t_cljs$core$async31001 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31001(ch__$1,cs__$1,meta31002){
return (new cljs.core.async.t_cljs$core$async31001(ch__$1,cs__$1,meta31002));
});

}

return (new cljs.core.async.t_cljs$core$async31001(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29967__auto___32752 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29968__auto__ = (function (){var switch__29657__auto__ = (function (state_31140){
var state_val_31141 = (state_31140[(1)]);
if((state_val_31141 === (7))){
var inst_31136 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
var statearr_31142_32753 = state_31140__$1;
(statearr_31142_32753[(2)] = inst_31136);

(statearr_31142_32753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (20))){
var inst_31039 = (state_31140[(7)]);
var inst_31051 = cljs.core.first(inst_31039);
var inst_31052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31051,(0),null);
var inst_31053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31051,(1),null);
var state_31140__$1 = (function (){var statearr_31143 = state_31140;
(statearr_31143[(8)] = inst_31052);

return statearr_31143;
})();
if(cljs.core.truth_(inst_31053)){
var statearr_31144_32754 = state_31140__$1;
(statearr_31144_32754[(1)] = (22));

} else {
var statearr_31145_32755 = state_31140__$1;
(statearr_31145_32755[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (27))){
var inst_31081 = (state_31140[(9)]);
var inst_31083 = (state_31140[(10)]);
var inst_31088 = (state_31140[(11)]);
var inst_31008 = (state_31140[(12)]);
var inst_31088__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31081,inst_31083);
var inst_31089 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31088__$1,inst_31008,done);
var state_31140__$1 = (function (){var statearr_31147 = state_31140;
(statearr_31147[(11)] = inst_31088__$1);

return statearr_31147;
})();
if(cljs.core.truth_(inst_31089)){
var statearr_31148_32760 = state_31140__$1;
(statearr_31148_32760[(1)] = (30));

} else {
var statearr_31149_32761 = state_31140__$1;
(statearr_31149_32761[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (1))){
var state_31140__$1 = state_31140;
var statearr_31150_32762 = state_31140__$1;
(statearr_31150_32762[(2)] = null);

(statearr_31150_32762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (24))){
var inst_31039 = (state_31140[(7)]);
var inst_31058 = (state_31140[(2)]);
var inst_31059 = cljs.core.next(inst_31039);
var inst_31017 = inst_31059;
var inst_31018 = null;
var inst_31019 = (0);
var inst_31020 = (0);
var state_31140__$1 = (function (){var statearr_31151 = state_31140;
(statearr_31151[(13)] = inst_31058);

(statearr_31151[(14)] = inst_31017);

(statearr_31151[(15)] = inst_31018);

(statearr_31151[(16)] = inst_31020);

(statearr_31151[(17)] = inst_31019);

return statearr_31151;
})();
var statearr_31152_32765 = state_31140__$1;
(statearr_31152_32765[(2)] = null);

(statearr_31152_32765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (39))){
var state_31140__$1 = state_31140;
var statearr_31156_32768 = state_31140__$1;
(statearr_31156_32768[(2)] = null);

(statearr_31156_32768[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (4))){
var inst_31008 = (state_31140[(12)]);
var inst_31008__$1 = (state_31140[(2)]);
var inst_31009 = (inst_31008__$1 == null);
var state_31140__$1 = (function (){var statearr_31157 = state_31140;
(statearr_31157[(12)] = inst_31008__$1);

return statearr_31157;
})();
if(cljs.core.truth_(inst_31009)){
var statearr_31158_32769 = state_31140__$1;
(statearr_31158_32769[(1)] = (5));

} else {
var statearr_31159_32770 = state_31140__$1;
(statearr_31159_32770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (15))){
var inst_31017 = (state_31140[(14)]);
var inst_31018 = (state_31140[(15)]);
var inst_31020 = (state_31140[(16)]);
var inst_31019 = (state_31140[(17)]);
var inst_31035 = (state_31140[(2)]);
var inst_31036 = (inst_31020 + (1));
var tmp31153 = inst_31017;
var tmp31154 = inst_31018;
var tmp31155 = inst_31019;
var inst_31017__$1 = tmp31153;
var inst_31018__$1 = tmp31154;
var inst_31019__$1 = tmp31155;
var inst_31020__$1 = inst_31036;
var state_31140__$1 = (function (){var statearr_31160 = state_31140;
(statearr_31160[(14)] = inst_31017__$1);

(statearr_31160[(15)] = inst_31018__$1);

(statearr_31160[(18)] = inst_31035);

(statearr_31160[(16)] = inst_31020__$1);

(statearr_31160[(17)] = inst_31019__$1);

return statearr_31160;
})();
var statearr_31161_32771 = state_31140__$1;
(statearr_31161_32771[(2)] = null);

(statearr_31161_32771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (21))){
var inst_31062 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
var statearr_31166_32772 = state_31140__$1;
(statearr_31166_32772[(2)] = inst_31062);

(statearr_31166_32772[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (31))){
var inst_31088 = (state_31140[(11)]);
var inst_31092 = done(null);
var inst_31093 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31088);
var state_31140__$1 = (function (){var statearr_31167 = state_31140;
(statearr_31167[(19)] = inst_31092);

return statearr_31167;
})();
var statearr_31168_32775 = state_31140__$1;
(statearr_31168_32775[(2)] = inst_31093);

(statearr_31168_32775[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (32))){
var inst_31081 = (state_31140[(9)]);
var inst_31083 = (state_31140[(10)]);
var inst_31082 = (state_31140[(20)]);
var inst_31080 = (state_31140[(21)]);
var inst_31095 = (state_31140[(2)]);
var inst_31096 = (inst_31083 + (1));
var tmp31163 = inst_31081;
var tmp31164 = inst_31082;
var tmp31165 = inst_31080;
var inst_31080__$1 = tmp31165;
var inst_31081__$1 = tmp31163;
var inst_31082__$1 = tmp31164;
var inst_31083__$1 = inst_31096;
var state_31140__$1 = (function (){var statearr_31169 = state_31140;
(statearr_31169[(9)] = inst_31081__$1);

(statearr_31169[(10)] = inst_31083__$1);

(statearr_31169[(22)] = inst_31095);

(statearr_31169[(20)] = inst_31082__$1);

(statearr_31169[(21)] = inst_31080__$1);

return statearr_31169;
})();
var statearr_31170_32776 = state_31140__$1;
(statearr_31170_32776[(2)] = null);

(statearr_31170_32776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (40))){
var inst_31108 = (state_31140[(23)]);
var inst_31112 = done(null);
var inst_31113 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31108);
var state_31140__$1 = (function (){var statearr_31171 = state_31140;
(statearr_31171[(24)] = inst_31112);

return statearr_31171;
})();
var statearr_31172_32777 = state_31140__$1;
(statearr_31172_32777[(2)] = inst_31113);

(statearr_31172_32777[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (33))){
var inst_31099 = (state_31140[(25)]);
var inst_31101 = cljs.core.chunked_seq_QMARK_(inst_31099);
var state_31140__$1 = state_31140;
if(inst_31101){
var statearr_31173_32778 = state_31140__$1;
(statearr_31173_32778[(1)] = (36));

} else {
var statearr_31174_32779 = state_31140__$1;
(statearr_31174_32779[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (13))){
var inst_31029 = (state_31140[(26)]);
var inst_31032 = cljs.core.async.close_BANG_(inst_31029);
var state_31140__$1 = state_31140;
var statearr_31175_32780 = state_31140__$1;
(statearr_31175_32780[(2)] = inst_31032);

(statearr_31175_32780[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (22))){
var inst_31052 = (state_31140[(8)]);
var inst_31055 = cljs.core.async.close_BANG_(inst_31052);
var state_31140__$1 = state_31140;
var statearr_31176_32781 = state_31140__$1;
(statearr_31176_32781[(2)] = inst_31055);

(statearr_31176_32781[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (36))){
var inst_31099 = (state_31140[(25)]);
var inst_31103 = cljs.core.chunk_first(inst_31099);
var inst_31104 = cljs.core.chunk_rest(inst_31099);
var inst_31105 = cljs.core.count(inst_31103);
var inst_31080 = inst_31104;
var inst_31081 = inst_31103;
var inst_31082 = inst_31105;
var inst_31083 = (0);
var state_31140__$1 = (function (){var statearr_31177 = state_31140;
(statearr_31177[(9)] = inst_31081);

(statearr_31177[(10)] = inst_31083);

(statearr_31177[(20)] = inst_31082);

(statearr_31177[(21)] = inst_31080);

return statearr_31177;
})();
var statearr_31178_32782 = state_31140__$1;
(statearr_31178_32782[(2)] = null);

(statearr_31178_32782[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (41))){
var inst_31099 = (state_31140[(25)]);
var inst_31115 = (state_31140[(2)]);
var inst_31116 = cljs.core.next(inst_31099);
var inst_31080 = inst_31116;
var inst_31081 = null;
var inst_31082 = (0);
var inst_31083 = (0);
var state_31140__$1 = (function (){var statearr_31179 = state_31140;
(statearr_31179[(27)] = inst_31115);

(statearr_31179[(9)] = inst_31081);

(statearr_31179[(10)] = inst_31083);

(statearr_31179[(20)] = inst_31082);

(statearr_31179[(21)] = inst_31080);

return statearr_31179;
})();
var statearr_31180_32783 = state_31140__$1;
(statearr_31180_32783[(2)] = null);

(statearr_31180_32783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (43))){
var state_31140__$1 = state_31140;
var statearr_31181_32784 = state_31140__$1;
(statearr_31181_32784[(2)] = null);

(statearr_31181_32784[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (29))){
var inst_31124 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
var statearr_31182_32785 = state_31140__$1;
(statearr_31182_32785[(2)] = inst_31124);

(statearr_31182_32785[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (44))){
var inst_31133 = (state_31140[(2)]);
var state_31140__$1 = (function (){var statearr_31183 = state_31140;
(statearr_31183[(28)] = inst_31133);

return statearr_31183;
})();
var statearr_31184_32788 = state_31140__$1;
(statearr_31184_32788[(2)] = null);

(statearr_31184_32788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (6))){
var inst_31072 = (state_31140[(29)]);
var inst_31071 = cljs.core.deref(cs);
var inst_31072__$1 = cljs.core.keys(inst_31071);
var inst_31073 = cljs.core.count(inst_31072__$1);
var inst_31074 = cljs.core.reset_BANG_(dctr,inst_31073);
var inst_31079 = cljs.core.seq(inst_31072__$1);
var inst_31080 = inst_31079;
var inst_31081 = null;
var inst_31082 = (0);
var inst_31083 = (0);
var state_31140__$1 = (function (){var statearr_31185 = state_31140;
(statearr_31185[(9)] = inst_31081);

(statearr_31185[(29)] = inst_31072__$1);

(statearr_31185[(10)] = inst_31083);

(statearr_31185[(30)] = inst_31074);

(statearr_31185[(20)] = inst_31082);

(statearr_31185[(21)] = inst_31080);

return statearr_31185;
})();
var statearr_31186_32793 = state_31140__$1;
(statearr_31186_32793[(2)] = null);

(statearr_31186_32793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (28))){
var inst_31099 = (state_31140[(25)]);
var inst_31080 = (state_31140[(21)]);
var inst_31099__$1 = cljs.core.seq(inst_31080);
var state_31140__$1 = (function (){var statearr_31187 = state_31140;
(statearr_31187[(25)] = inst_31099__$1);

return statearr_31187;
})();
if(inst_31099__$1){
var statearr_31188_32795 = state_31140__$1;
(statearr_31188_32795[(1)] = (33));

} else {
var statearr_31189_32796 = state_31140__$1;
(statearr_31189_32796[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (25))){
var inst_31083 = (state_31140[(10)]);
var inst_31082 = (state_31140[(20)]);
var inst_31085 = (inst_31083 < inst_31082);
var inst_31086 = inst_31085;
var state_31140__$1 = state_31140;
if(cljs.core.truth_(inst_31086)){
var statearr_31190_32797 = state_31140__$1;
(statearr_31190_32797[(1)] = (27));

} else {
var statearr_31191_32798 = state_31140__$1;
(statearr_31191_32798[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (34))){
var state_31140__$1 = state_31140;
var statearr_31192_32799 = state_31140__$1;
(statearr_31192_32799[(2)] = null);

(statearr_31192_32799[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (17))){
var state_31140__$1 = state_31140;
var statearr_31193_32801 = state_31140__$1;
(statearr_31193_32801[(2)] = null);

(statearr_31193_32801[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (3))){
var inst_31138 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31140__$1,inst_31138);
} else {
if((state_val_31141 === (12))){
var inst_31067 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
var statearr_31194_32803 = state_31140__$1;
(statearr_31194_32803[(2)] = inst_31067);

(statearr_31194_32803[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (2))){
var state_31140__$1 = state_31140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31140__$1,(4),ch);
} else {
if((state_val_31141 === (23))){
var state_31140__$1 = state_31140;
var statearr_31195_32804 = state_31140__$1;
(statearr_31195_32804[(2)] = null);

(statearr_31195_32804[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (35))){
var inst_31122 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
var statearr_31196_32805 = state_31140__$1;
(statearr_31196_32805[(2)] = inst_31122);

(statearr_31196_32805[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (19))){
var inst_31039 = (state_31140[(7)]);
var inst_31043 = cljs.core.chunk_first(inst_31039);
var inst_31044 = cljs.core.chunk_rest(inst_31039);
var inst_31045 = cljs.core.count(inst_31043);
var inst_31017 = inst_31044;
var inst_31018 = inst_31043;
var inst_31019 = inst_31045;
var inst_31020 = (0);
var state_31140__$1 = (function (){var statearr_31197 = state_31140;
(statearr_31197[(14)] = inst_31017);

(statearr_31197[(15)] = inst_31018);

(statearr_31197[(16)] = inst_31020);

(statearr_31197[(17)] = inst_31019);

return statearr_31197;
})();
var statearr_31198_32806 = state_31140__$1;
(statearr_31198_32806[(2)] = null);

(statearr_31198_32806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (11))){
var inst_31017 = (state_31140[(14)]);
var inst_31039 = (state_31140[(7)]);
var inst_31039__$1 = cljs.core.seq(inst_31017);
var state_31140__$1 = (function (){var statearr_31199 = state_31140;
(statearr_31199[(7)] = inst_31039__$1);

return statearr_31199;
})();
if(inst_31039__$1){
var statearr_31200_32807 = state_31140__$1;
(statearr_31200_32807[(1)] = (16));

} else {
var statearr_31201_32808 = state_31140__$1;
(statearr_31201_32808[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (9))){
var inst_31069 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
var statearr_31202_32809 = state_31140__$1;
(statearr_31202_32809[(2)] = inst_31069);

(statearr_31202_32809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (5))){
var inst_31015 = cljs.core.deref(cs);
var inst_31016 = cljs.core.seq(inst_31015);
var inst_31017 = inst_31016;
var inst_31018 = null;
var inst_31019 = (0);
var inst_31020 = (0);
var state_31140__$1 = (function (){var statearr_31203 = state_31140;
(statearr_31203[(14)] = inst_31017);

(statearr_31203[(15)] = inst_31018);

(statearr_31203[(16)] = inst_31020);

(statearr_31203[(17)] = inst_31019);

return statearr_31203;
})();
var statearr_31204_32810 = state_31140__$1;
(statearr_31204_32810[(2)] = null);

(statearr_31204_32810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (14))){
var state_31140__$1 = state_31140;
var statearr_31205_32811 = state_31140__$1;
(statearr_31205_32811[(2)] = null);

(statearr_31205_32811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (45))){
var inst_31130 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
var statearr_31206_32816 = state_31140__$1;
(statearr_31206_32816[(2)] = inst_31130);

(statearr_31206_32816[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (26))){
var inst_31072 = (state_31140[(29)]);
var inst_31126 = (state_31140[(2)]);
var inst_31127 = cljs.core.seq(inst_31072);
var state_31140__$1 = (function (){var statearr_31207 = state_31140;
(statearr_31207[(31)] = inst_31126);

return statearr_31207;
})();
if(inst_31127){
var statearr_31208_32817 = state_31140__$1;
(statearr_31208_32817[(1)] = (42));

} else {
var statearr_31209_32818 = state_31140__$1;
(statearr_31209_32818[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (16))){
var inst_31039 = (state_31140[(7)]);
var inst_31041 = cljs.core.chunked_seq_QMARK_(inst_31039);
var state_31140__$1 = state_31140;
if(inst_31041){
var statearr_31210_32821 = state_31140__$1;
(statearr_31210_32821[(1)] = (19));

} else {
var statearr_31211_32822 = state_31140__$1;
(statearr_31211_32822[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (38))){
var inst_31119 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
var statearr_31218_32825 = state_31140__$1;
(statearr_31218_32825[(2)] = inst_31119);

(statearr_31218_32825[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (30))){
var state_31140__$1 = state_31140;
var statearr_31219_32826 = state_31140__$1;
(statearr_31219_32826[(2)] = null);

(statearr_31219_32826[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (10))){
var inst_31018 = (state_31140[(15)]);
var inst_31020 = (state_31140[(16)]);
var inst_31028 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31018,inst_31020);
var inst_31029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31028,(0),null);
var inst_31030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31028,(1),null);
var state_31140__$1 = (function (){var statearr_31220 = state_31140;
(statearr_31220[(26)] = inst_31029);

return statearr_31220;
})();
if(cljs.core.truth_(inst_31030)){
var statearr_31221_32827 = state_31140__$1;
(statearr_31221_32827[(1)] = (13));

} else {
var statearr_31222_32831 = state_31140__$1;
(statearr_31222_32831[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (18))){
var inst_31065 = (state_31140[(2)]);
var state_31140__$1 = state_31140;
var statearr_31223_32836 = state_31140__$1;
(statearr_31223_32836[(2)] = inst_31065);

(statearr_31223_32836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (42))){
var state_31140__$1 = state_31140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31140__$1,(45),dchan);
} else {
if((state_val_31141 === (37))){
var inst_31099 = (state_31140[(25)]);
var inst_31108 = (state_31140[(23)]);
var inst_31008 = (state_31140[(12)]);
var inst_31108__$1 = cljs.core.first(inst_31099);
var inst_31109 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31108__$1,inst_31008,done);
var state_31140__$1 = (function (){var statearr_31224 = state_31140;
(statearr_31224[(23)] = inst_31108__$1);

return statearr_31224;
})();
if(cljs.core.truth_(inst_31109)){
var statearr_31225_32843 = state_31140__$1;
(statearr_31225_32843[(1)] = (39));

} else {
var statearr_31226_32844 = state_31140__$1;
(statearr_31226_32844[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31141 === (8))){
var inst_31020 = (state_31140[(16)]);
var inst_31019 = (state_31140[(17)]);
var inst_31022 = (inst_31020 < inst_31019);
var inst_31023 = inst_31022;
var state_31140__$1 = state_31140;
if(cljs.core.truth_(inst_31023)){
var statearr_31227_32845 = state_31140__$1;
(statearr_31227_32845[(1)] = (10));

} else {
var statearr_31228_32846 = state_31140__$1;
(statearr_31228_32846[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__29658__auto__ = null;
var cljs$core$async$mult_$_state_machine__29658__auto____0 = (function (){
var statearr_31229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31229[(0)] = cljs$core$async$mult_$_state_machine__29658__auto__);

(statearr_31229[(1)] = (1));

return statearr_31229;
});
var cljs$core$async$mult_$_state_machine__29658__auto____1 = (function (state_31140){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__(state_31140);
if(cljs.core.keyword_identical_QMARK_(result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e31230){if((e31230 instanceof Object)){
var ex__29661__auto__ = e31230;
var statearr_31231_32847 = state_31140;
(statearr_31231_32847[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31230;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32848 = state_31140;
state_31140 = G__32848;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29658__auto__ = function(state_31140){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29658__auto____1.call(this,state_31140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29658__auto____0;
cljs$core$async$mult_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29658__auto____1;
return cljs$core$async$mult_$_state_machine__29658__auto__;
})()
})();
var state__29969__auto__ = (function (){var statearr_31232 = (f__29968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29968__auto__.cljs$core$IFn$_invoke$arity$0() : f__29968__auto__.call(null));
(statearr_31232[(6)] = c__29967__auto___32752);

return statearr_31232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29969__auto__);
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
var G__31238 = arguments.length;
switch (G__31238) {
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
var len__4789__auto___32868 = arguments.length;
var i__4790__auto___32869 = (0);
while(true){
if((i__4790__auto___32869 < len__4789__auto___32868)){
args__4795__auto__.push((arguments[i__4790__auto___32869]));

var G__32870 = (i__4790__auto___32869 + (1));
i__4790__auto___32869 = G__32870;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31266){
var map__31267 = p__31266;
var map__31267__$1 = (((((!((map__31267 == null))))?(((((map__31267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31267):map__31267);
var opts = map__31267__$1;
var statearr_31269_32871 = state;
(statearr_31269_32871[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31270_32872 = state;
(statearr_31270_32872[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31271_32873 = state;
(statearr_31271_32873[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31261){
var G__31262 = cljs.core.first(seq31261);
var seq31261__$1 = cljs.core.next(seq31261);
var G__31263 = cljs.core.first(seq31261__$1);
var seq31261__$2 = cljs.core.next(seq31261__$1);
var G__31264 = cljs.core.first(seq31261__$2);
var seq31261__$3 = cljs.core.next(seq31261__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31262,G__31263,G__31264,seq31261__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31274 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31274 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31275){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31275 = meta31275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31276,meta31275__$1){
var self__ = this;
var _31276__$1 = this;
return (new cljs.core.async.t_cljs$core$async31274(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31275__$1));
}));

(cljs.core.async.t_cljs$core$async31274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31276){
var self__ = this;
var _31276__$1 = this;
return self__.meta31275;
}));

(cljs.core.async.t_cljs$core$async31274.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31274.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31274.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31274.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31274.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31274.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31274.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31274.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31274.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31275","meta31275",-353248295,null)], null);
}));

(cljs.core.async.t_cljs$core$async31274.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31274.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31274");

(cljs.core.async.t_cljs$core$async31274.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31274");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31274.
 */
cljs.core.async.__GT_t_cljs$core$async31274 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31274(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31275){
return (new cljs.core.async.t_cljs$core$async31274(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31275));
});

}

return (new cljs.core.async.t_cljs$core$async31274(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29967__auto___32888 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29968__auto__ = (function (){var switch__29657__auto__ = (function (state_31452){
var state_val_31453 = (state_31452[(1)]);
if((state_val_31453 === (7))){
var inst_31348 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
var statearr_31457_32889 = state_31452__$1;
(statearr_31457_32889[(2)] = inst_31348);

(statearr_31457_32889[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (20))){
var inst_31365 = (state_31452[(7)]);
var state_31452__$1 = state_31452;
var statearr_31459_32891 = state_31452__$1;
(statearr_31459_32891[(2)] = inst_31365);

(statearr_31459_32891[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (27))){
var state_31452__$1 = state_31452;
var statearr_31460_32892 = state_31452__$1;
(statearr_31460_32892[(2)] = null);

(statearr_31460_32892[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (1))){
var inst_31311 = (state_31452[(8)]);
var inst_31311__$1 = calc_state();
var inst_31313 = (inst_31311__$1 == null);
var inst_31314 = cljs.core.not(inst_31313);
var state_31452__$1 = (function (){var statearr_31461 = state_31452;
(statearr_31461[(8)] = inst_31311__$1);

return statearr_31461;
})();
if(inst_31314){
var statearr_31462_32897 = state_31452__$1;
(statearr_31462_32897[(1)] = (2));

} else {
var statearr_31463_32898 = state_31452__$1;
(statearr_31463_32898[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (24))){
var inst_31398 = (state_31452[(9)]);
var inst_31421 = (state_31452[(10)]);
var inst_31407 = (state_31452[(11)]);
var inst_31421__$1 = (inst_31398.cljs$core$IFn$_invoke$arity$1 ? inst_31398.cljs$core$IFn$_invoke$arity$1(inst_31407) : inst_31398.call(null,inst_31407));
var state_31452__$1 = (function (){var statearr_31464 = state_31452;
(statearr_31464[(10)] = inst_31421__$1);

return statearr_31464;
})();
if(cljs.core.truth_(inst_31421__$1)){
var statearr_31465_32899 = state_31452__$1;
(statearr_31465_32899[(1)] = (29));

} else {
var statearr_31466_32900 = state_31452__$1;
(statearr_31466_32900[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (4))){
var inst_31356 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
if(cljs.core.truth_(inst_31356)){
var statearr_31468_32901 = state_31452__$1;
(statearr_31468_32901[(1)] = (8));

} else {
var statearr_31469_32902 = state_31452__$1;
(statearr_31469_32902[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (15))){
var inst_31392 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
if(cljs.core.truth_(inst_31392)){
var statearr_31470_32907 = state_31452__$1;
(statearr_31470_32907[(1)] = (19));

} else {
var statearr_31471_32908 = state_31452__$1;
(statearr_31471_32908[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (21))){
var inst_31397 = (state_31452[(12)]);
var inst_31397__$1 = (state_31452[(2)]);
var inst_31398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31397__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31397__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31397__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31452__$1 = (function (){var statearr_31472 = state_31452;
(statearr_31472[(13)] = inst_31399);

(statearr_31472[(12)] = inst_31397__$1);

(statearr_31472[(9)] = inst_31398);

return statearr_31472;
})();
return cljs.core.async.ioc_alts_BANG_(state_31452__$1,(22),inst_31400);
} else {
if((state_val_31453 === (31))){
var inst_31434 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
if(cljs.core.truth_(inst_31434)){
var statearr_31473_32912 = state_31452__$1;
(statearr_31473_32912[(1)] = (32));

} else {
var statearr_31474_32913 = state_31452__$1;
(statearr_31474_32913[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (32))){
var inst_31406 = (state_31452[(14)]);
var state_31452__$1 = state_31452;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31452__$1,(35),out,inst_31406);
} else {
if((state_val_31453 === (33))){
var inst_31397 = (state_31452[(12)]);
var inst_31365 = inst_31397;
var state_31452__$1 = (function (){var statearr_31475 = state_31452;
(statearr_31475[(7)] = inst_31365);

return statearr_31475;
})();
var statearr_31476_32914 = state_31452__$1;
(statearr_31476_32914[(2)] = null);

(statearr_31476_32914[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (13))){
var inst_31365 = (state_31452[(7)]);
var inst_31381 = inst_31365.cljs$lang$protocol_mask$partition0$;
var inst_31382 = (inst_31381 & (64));
var inst_31383 = inst_31365.cljs$core$ISeq$;
var inst_31384 = (cljs.core.PROTOCOL_SENTINEL === inst_31383);
var inst_31385 = ((inst_31382) || (inst_31384));
var state_31452__$1 = state_31452;
if(cljs.core.truth_(inst_31385)){
var statearr_31477_32918 = state_31452__$1;
(statearr_31477_32918[(1)] = (16));

} else {
var statearr_31478_32919 = state_31452__$1;
(statearr_31478_32919[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (22))){
var inst_31406 = (state_31452[(14)]);
var inst_31407 = (state_31452[(11)]);
var inst_31405 = (state_31452[(2)]);
var inst_31406__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31405,(0),null);
var inst_31407__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31405,(1),null);
var inst_31408 = (inst_31406__$1 == null);
var inst_31409 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31407__$1,change);
var inst_31410 = ((inst_31408) || (inst_31409));
var state_31452__$1 = (function (){var statearr_31479 = state_31452;
(statearr_31479[(14)] = inst_31406__$1);

(statearr_31479[(11)] = inst_31407__$1);

return statearr_31479;
})();
if(cljs.core.truth_(inst_31410)){
var statearr_31480_32923 = state_31452__$1;
(statearr_31480_32923[(1)] = (23));

} else {
var statearr_31481_32924 = state_31452__$1;
(statearr_31481_32924[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (36))){
var inst_31397 = (state_31452[(12)]);
var inst_31365 = inst_31397;
var state_31452__$1 = (function (){var statearr_31482 = state_31452;
(statearr_31482[(7)] = inst_31365);

return statearr_31482;
})();
var statearr_31483_32928 = state_31452__$1;
(statearr_31483_32928[(2)] = null);

(statearr_31483_32928[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (29))){
var inst_31421 = (state_31452[(10)]);
var state_31452__$1 = state_31452;
var statearr_31484_32930 = state_31452__$1;
(statearr_31484_32930[(2)] = inst_31421);

(statearr_31484_32930[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (6))){
var state_31452__$1 = state_31452;
var statearr_31485_32934 = state_31452__$1;
(statearr_31485_32934[(2)] = false);

(statearr_31485_32934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (28))){
var inst_31417 = (state_31452[(2)]);
var inst_31418 = calc_state();
var inst_31365 = inst_31418;
var state_31452__$1 = (function (){var statearr_31486 = state_31452;
(statearr_31486[(7)] = inst_31365);

(statearr_31486[(15)] = inst_31417);

return statearr_31486;
})();
var statearr_31487_32935 = state_31452__$1;
(statearr_31487_32935[(2)] = null);

(statearr_31487_32935[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (25))){
var inst_31448 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
var statearr_31491_32936 = state_31452__$1;
(statearr_31491_32936[(2)] = inst_31448);

(statearr_31491_32936[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (34))){
var inst_31446 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
var statearr_31492_32937 = state_31452__$1;
(statearr_31492_32937[(2)] = inst_31446);

(statearr_31492_32937[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (17))){
var state_31452__$1 = state_31452;
var statearr_31493_32938 = state_31452__$1;
(statearr_31493_32938[(2)] = false);

(statearr_31493_32938[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (3))){
var state_31452__$1 = state_31452;
var statearr_31494_32939 = state_31452__$1;
(statearr_31494_32939[(2)] = false);

(statearr_31494_32939[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (12))){
var inst_31450 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31452__$1,inst_31450);
} else {
if((state_val_31453 === (2))){
var inst_31311 = (state_31452[(8)]);
var inst_31321 = inst_31311.cljs$lang$protocol_mask$partition0$;
var inst_31322 = (inst_31321 & (64));
var inst_31323 = inst_31311.cljs$core$ISeq$;
var inst_31324 = (cljs.core.PROTOCOL_SENTINEL === inst_31323);
var inst_31325 = ((inst_31322) || (inst_31324));
var state_31452__$1 = state_31452;
if(cljs.core.truth_(inst_31325)){
var statearr_31495_32940 = state_31452__$1;
(statearr_31495_32940[(1)] = (5));

} else {
var statearr_31496_32941 = state_31452__$1;
(statearr_31496_32941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (23))){
var inst_31406 = (state_31452[(14)]);
var inst_31412 = (inst_31406 == null);
var state_31452__$1 = state_31452;
if(cljs.core.truth_(inst_31412)){
var statearr_31499_32942 = state_31452__$1;
(statearr_31499_32942[(1)] = (26));

} else {
var statearr_31500_32943 = state_31452__$1;
(statearr_31500_32943[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (35))){
var inst_31437 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
if(cljs.core.truth_(inst_31437)){
var statearr_31501_32946 = state_31452__$1;
(statearr_31501_32946[(1)] = (36));

} else {
var statearr_31502_32947 = state_31452__$1;
(statearr_31502_32947[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (19))){
var inst_31365 = (state_31452[(7)]);
var inst_31394 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31365);
var state_31452__$1 = state_31452;
var statearr_31503_32948 = state_31452__$1;
(statearr_31503_32948[(2)] = inst_31394);

(statearr_31503_32948[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (11))){
var inst_31365 = (state_31452[(7)]);
var inst_31373 = (inst_31365 == null);
var inst_31374 = cljs.core.not(inst_31373);
var state_31452__$1 = state_31452;
if(inst_31374){
var statearr_31504_32950 = state_31452__$1;
(statearr_31504_32950[(1)] = (13));

} else {
var statearr_31505_32951 = state_31452__$1;
(statearr_31505_32951[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (9))){
var inst_31311 = (state_31452[(8)]);
var state_31452__$1 = state_31452;
var statearr_31509_32953 = state_31452__$1;
(statearr_31509_32953[(2)] = inst_31311);

(statearr_31509_32953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (5))){
var state_31452__$1 = state_31452;
var statearr_31510_32954 = state_31452__$1;
(statearr_31510_32954[(2)] = true);

(statearr_31510_32954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (14))){
var state_31452__$1 = state_31452;
var statearr_31511_32955 = state_31452__$1;
(statearr_31511_32955[(2)] = false);

(statearr_31511_32955[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (26))){
var inst_31407 = (state_31452[(11)]);
var inst_31414 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31407);
var state_31452__$1 = state_31452;
var statearr_31512_32956 = state_31452__$1;
(statearr_31512_32956[(2)] = inst_31414);

(statearr_31512_32956[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (16))){
var state_31452__$1 = state_31452;
var statearr_31515_32957 = state_31452__$1;
(statearr_31515_32957[(2)] = true);

(statearr_31515_32957[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (38))){
var inst_31442 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
var statearr_31516_32958 = state_31452__$1;
(statearr_31516_32958[(2)] = inst_31442);

(statearr_31516_32958[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (30))){
var inst_31399 = (state_31452[(13)]);
var inst_31398 = (state_31452[(9)]);
var inst_31407 = (state_31452[(11)]);
var inst_31424 = cljs.core.empty_QMARK_(inst_31398);
var inst_31425 = (inst_31399.cljs$core$IFn$_invoke$arity$1 ? inst_31399.cljs$core$IFn$_invoke$arity$1(inst_31407) : inst_31399.call(null,inst_31407));
var inst_31427 = cljs.core.not(inst_31425);
var inst_31431 = ((inst_31424) && (inst_31427));
var state_31452__$1 = state_31452;
var statearr_31520_32964 = state_31452__$1;
(statearr_31520_32964[(2)] = inst_31431);

(statearr_31520_32964[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (10))){
var inst_31311 = (state_31452[(8)]);
var inst_31361 = (state_31452[(2)]);
var inst_31362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31361,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31361,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31361,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31365 = inst_31311;
var state_31452__$1 = (function (){var statearr_31521 = state_31452;
(statearr_31521[(7)] = inst_31365);

(statearr_31521[(16)] = inst_31364);

(statearr_31521[(17)] = inst_31362);

(statearr_31521[(18)] = inst_31363);

return statearr_31521;
})();
var statearr_31522_32965 = state_31452__$1;
(statearr_31522_32965[(2)] = null);

(statearr_31522_32965[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (18))){
var inst_31389 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
var statearr_31523_32966 = state_31452__$1;
(statearr_31523_32966[(2)] = inst_31389);

(statearr_31523_32966[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (37))){
var state_31452__$1 = state_31452;
var statearr_31524_32967 = state_31452__$1;
(statearr_31524_32967[(2)] = null);

(statearr_31524_32967[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (8))){
var inst_31311 = (state_31452[(8)]);
var inst_31358 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31311);
var state_31452__$1 = state_31452;
var statearr_31525_32968 = state_31452__$1;
(statearr_31525_32968[(2)] = inst_31358);

(statearr_31525_32968[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__29658__auto__ = null;
var cljs$core$async$mix_$_state_machine__29658__auto____0 = (function (){
var statearr_31526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31526[(0)] = cljs$core$async$mix_$_state_machine__29658__auto__);

(statearr_31526[(1)] = (1));

return statearr_31526;
});
var cljs$core$async$mix_$_state_machine__29658__auto____1 = (function (state_31452){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__(state_31452);
if(cljs.core.keyword_identical_QMARK_(result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e31527){if((e31527 instanceof Object)){
var ex__29661__auto__ = e31527;
var statearr_31528_32970 = state_31452;
(statearr_31528_32970[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31527;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32973 = state_31452;
state_31452 = G__32973;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29658__auto__ = function(state_31452){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29658__auto____1.call(this,state_31452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29658__auto____0;
cljs$core$async$mix_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29658__auto____1;
return cljs$core$async$mix_$_state_machine__29658__auto__;
})()
})();
var state__29969__auto__ = (function (){var statearr_31533 = (f__29968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29968__auto__.cljs$core$IFn$_invoke$arity$0() : f__29968__auto__.call(null));
(statearr_31533[(6)] = c__29967__auto___32888);

return statearr_31533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29969__auto__);
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
var G__31539 = arguments.length;
switch (G__31539) {
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
var G__31542 = arguments.length;
switch (G__31542) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31540_SHARP_){
if(cljs.core.truth_((p1__31540_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31540_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31540_SHARP_.call(null,topic)))){
return p1__31540_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31540_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31543 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31543 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31544){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31544 = meta31544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31545,meta31544__$1){
var self__ = this;
var _31545__$1 = this;
return (new cljs.core.async.t_cljs$core$async31543(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31544__$1));
}));

(cljs.core.async.t_cljs$core$async31543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31545){
var self__ = this;
var _31545__$1 = this;
return self__.meta31544;
}));

(cljs.core.async.t_cljs$core$async31543.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31543.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31543.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31543.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31543.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async31543.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31543.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31543.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31544","meta31544",75493774,null)], null);
}));

(cljs.core.async.t_cljs$core$async31543.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31543.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31543");

(cljs.core.async.t_cljs$core$async31543.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31543");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31543.
 */
cljs.core.async.__GT_t_cljs$core$async31543 = (function cljs$core$async$__GT_t_cljs$core$async31543(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31544){
return (new cljs.core.async.t_cljs$core$async31543(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31544));
});

}

return (new cljs.core.async.t_cljs$core$async31543(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29967__auto___32998 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29968__auto__ = (function (){var switch__29657__auto__ = (function (state_31630){
var state_val_31631 = (state_31630[(1)]);
if((state_val_31631 === (7))){
var inst_31626 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31632_32999 = state_31630__$1;
(statearr_31632_32999[(2)] = inst_31626);

(statearr_31632_32999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (20))){
var state_31630__$1 = state_31630;
var statearr_31633_33000 = state_31630__$1;
(statearr_31633_33000[(2)] = null);

(statearr_31633_33000[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (1))){
var state_31630__$1 = state_31630;
var statearr_31634_33001 = state_31630__$1;
(statearr_31634_33001[(2)] = null);

(statearr_31634_33001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (24))){
var inst_31609 = (state_31630[(7)]);
var inst_31618 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31609);
var state_31630__$1 = state_31630;
var statearr_31635_33002 = state_31630__$1;
(statearr_31635_33002[(2)] = inst_31618);

(statearr_31635_33002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (4))){
var inst_31561 = (state_31630[(8)]);
var inst_31561__$1 = (state_31630[(2)]);
var inst_31562 = (inst_31561__$1 == null);
var state_31630__$1 = (function (){var statearr_31636 = state_31630;
(statearr_31636[(8)] = inst_31561__$1);

return statearr_31636;
})();
if(cljs.core.truth_(inst_31562)){
var statearr_31637_33004 = state_31630__$1;
(statearr_31637_33004[(1)] = (5));

} else {
var statearr_31638_33005 = state_31630__$1;
(statearr_31638_33005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (15))){
var inst_31603 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31639_33006 = state_31630__$1;
(statearr_31639_33006[(2)] = inst_31603);

(statearr_31639_33006[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (21))){
var inst_31623 = (state_31630[(2)]);
var state_31630__$1 = (function (){var statearr_31640 = state_31630;
(statearr_31640[(9)] = inst_31623);

return statearr_31640;
})();
var statearr_31641_33007 = state_31630__$1;
(statearr_31641_33007[(2)] = null);

(statearr_31641_33007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (13))){
var inst_31585 = (state_31630[(10)]);
var inst_31587 = cljs.core.chunked_seq_QMARK_(inst_31585);
var state_31630__$1 = state_31630;
if(inst_31587){
var statearr_31642_33009 = state_31630__$1;
(statearr_31642_33009[(1)] = (16));

} else {
var statearr_31643_33010 = state_31630__$1;
(statearr_31643_33010[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (22))){
var inst_31615 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
if(cljs.core.truth_(inst_31615)){
var statearr_31644_33011 = state_31630__$1;
(statearr_31644_33011[(1)] = (23));

} else {
var statearr_31645_33012 = state_31630__$1;
(statearr_31645_33012[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (6))){
var inst_31561 = (state_31630[(8)]);
var inst_31611 = (state_31630[(11)]);
var inst_31609 = (state_31630[(7)]);
var inst_31609__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31561) : topic_fn.call(null,inst_31561));
var inst_31610 = cljs.core.deref(mults);
var inst_31611__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31610,inst_31609__$1);
var state_31630__$1 = (function (){var statearr_31646 = state_31630;
(statearr_31646[(11)] = inst_31611__$1);

(statearr_31646[(7)] = inst_31609__$1);

return statearr_31646;
})();
if(cljs.core.truth_(inst_31611__$1)){
var statearr_31647_33014 = state_31630__$1;
(statearr_31647_33014[(1)] = (19));

} else {
var statearr_31648_33016 = state_31630__$1;
(statearr_31648_33016[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (25))){
var inst_31620 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31649_33017 = state_31630__$1;
(statearr_31649_33017[(2)] = inst_31620);

(statearr_31649_33017[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (17))){
var inst_31585 = (state_31630[(10)]);
var inst_31594 = cljs.core.first(inst_31585);
var inst_31595 = cljs.core.async.muxch_STAR_(inst_31594);
var inst_31596 = cljs.core.async.close_BANG_(inst_31595);
var inst_31597 = cljs.core.next(inst_31585);
var inst_31571 = inst_31597;
var inst_31572 = null;
var inst_31573 = (0);
var inst_31574 = (0);
var state_31630__$1 = (function (){var statearr_31650 = state_31630;
(statearr_31650[(12)] = inst_31572);

(statearr_31650[(13)] = inst_31596);

(statearr_31650[(14)] = inst_31573);

(statearr_31650[(15)] = inst_31571);

(statearr_31650[(16)] = inst_31574);

return statearr_31650;
})();
var statearr_31651_33023 = state_31630__$1;
(statearr_31651_33023[(2)] = null);

(statearr_31651_33023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (3))){
var inst_31628 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31630__$1,inst_31628);
} else {
if((state_val_31631 === (12))){
var inst_31605 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31652_33024 = state_31630__$1;
(statearr_31652_33024[(2)] = inst_31605);

(statearr_31652_33024[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (2))){
var state_31630__$1 = state_31630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31630__$1,(4),ch);
} else {
if((state_val_31631 === (23))){
var state_31630__$1 = state_31630;
var statearr_31653_33025 = state_31630__$1;
(statearr_31653_33025[(2)] = null);

(statearr_31653_33025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (19))){
var inst_31561 = (state_31630[(8)]);
var inst_31611 = (state_31630[(11)]);
var inst_31613 = cljs.core.async.muxch_STAR_(inst_31611);
var state_31630__$1 = state_31630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31630__$1,(22),inst_31613,inst_31561);
} else {
if((state_val_31631 === (11))){
var inst_31585 = (state_31630[(10)]);
var inst_31571 = (state_31630[(15)]);
var inst_31585__$1 = cljs.core.seq(inst_31571);
var state_31630__$1 = (function (){var statearr_31654 = state_31630;
(statearr_31654[(10)] = inst_31585__$1);

return statearr_31654;
})();
if(inst_31585__$1){
var statearr_31655_33027 = state_31630__$1;
(statearr_31655_33027[(1)] = (13));

} else {
var statearr_31656_33028 = state_31630__$1;
(statearr_31656_33028[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (9))){
var inst_31607 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31657_33029 = state_31630__$1;
(statearr_31657_33029[(2)] = inst_31607);

(statearr_31657_33029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (5))){
var inst_31568 = cljs.core.deref(mults);
var inst_31569 = cljs.core.vals(inst_31568);
var inst_31570 = cljs.core.seq(inst_31569);
var inst_31571 = inst_31570;
var inst_31572 = null;
var inst_31573 = (0);
var inst_31574 = (0);
var state_31630__$1 = (function (){var statearr_31658 = state_31630;
(statearr_31658[(12)] = inst_31572);

(statearr_31658[(14)] = inst_31573);

(statearr_31658[(15)] = inst_31571);

(statearr_31658[(16)] = inst_31574);

return statearr_31658;
})();
var statearr_31659_33034 = state_31630__$1;
(statearr_31659_33034[(2)] = null);

(statearr_31659_33034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (14))){
var state_31630__$1 = state_31630;
var statearr_31663_33035 = state_31630__$1;
(statearr_31663_33035[(2)] = null);

(statearr_31663_33035[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (16))){
var inst_31585 = (state_31630[(10)]);
var inst_31589 = cljs.core.chunk_first(inst_31585);
var inst_31590 = cljs.core.chunk_rest(inst_31585);
var inst_31591 = cljs.core.count(inst_31589);
var inst_31571 = inst_31590;
var inst_31572 = inst_31589;
var inst_31573 = inst_31591;
var inst_31574 = (0);
var state_31630__$1 = (function (){var statearr_31666 = state_31630;
(statearr_31666[(12)] = inst_31572);

(statearr_31666[(14)] = inst_31573);

(statearr_31666[(15)] = inst_31571);

(statearr_31666[(16)] = inst_31574);

return statearr_31666;
})();
var statearr_31668_33036 = state_31630__$1;
(statearr_31668_33036[(2)] = null);

(statearr_31668_33036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (10))){
var inst_31572 = (state_31630[(12)]);
var inst_31573 = (state_31630[(14)]);
var inst_31571 = (state_31630[(15)]);
var inst_31574 = (state_31630[(16)]);
var inst_31579 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31572,inst_31574);
var inst_31580 = cljs.core.async.muxch_STAR_(inst_31579);
var inst_31581 = cljs.core.async.close_BANG_(inst_31580);
var inst_31582 = (inst_31574 + (1));
var tmp31660 = inst_31572;
var tmp31661 = inst_31573;
var tmp31662 = inst_31571;
var inst_31571__$1 = tmp31662;
var inst_31572__$1 = tmp31660;
var inst_31573__$1 = tmp31661;
var inst_31574__$1 = inst_31582;
var state_31630__$1 = (function (){var statearr_31670 = state_31630;
(statearr_31670[(12)] = inst_31572__$1);

(statearr_31670[(17)] = inst_31581);

(statearr_31670[(14)] = inst_31573__$1);

(statearr_31670[(15)] = inst_31571__$1);

(statearr_31670[(16)] = inst_31574__$1);

return statearr_31670;
})();
var statearr_31673_33037 = state_31630__$1;
(statearr_31673_33037[(2)] = null);

(statearr_31673_33037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (18))){
var inst_31600 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31675_33038 = state_31630__$1;
(statearr_31675_33038[(2)] = inst_31600);

(statearr_31675_33038[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (8))){
var inst_31573 = (state_31630[(14)]);
var inst_31574 = (state_31630[(16)]);
var inst_31576 = (inst_31574 < inst_31573);
var inst_31577 = inst_31576;
var state_31630__$1 = state_31630;
if(cljs.core.truth_(inst_31577)){
var statearr_31677_33039 = state_31630__$1;
(statearr_31677_33039[(1)] = (10));

} else {
var statearr_31678_33040 = state_31630__$1;
(statearr_31678_33040[(1)] = (11));

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
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_31681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31681[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_31681[(1)] = (1));

return statearr_31681;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_31630){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__(state_31630);
if(cljs.core.keyword_identical_QMARK_(result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e31682){if((e31682 instanceof Object)){
var ex__29661__auto__ = e31682;
var statearr_31683_33042 = state_31630;
(statearr_31683_33042[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31682;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33043 = state_31630;
state_31630 = G__33043;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_31630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_31630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
})();
var state__29969__auto__ = (function (){var statearr_31684 = (f__29968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29968__auto__.cljs$core$IFn$_invoke$arity$0() : f__29968__auto__.call(null));
(statearr_31684[(6)] = c__29967__auto___32998);

return statearr_31684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29969__auto__);
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
var G__31686 = arguments.length;
switch (G__31686) {
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
var G__31688 = arguments.length;
switch (G__31688) {
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
var G__31690 = arguments.length;
switch (G__31690) {
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
var c__29967__auto___33054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29968__auto__ = (function (){var switch__29657__auto__ = (function (state_31729){
var state_val_31730 = (state_31729[(1)]);
if((state_val_31730 === (7))){
var state_31729__$1 = state_31729;
var statearr_31731_33055 = state_31729__$1;
(statearr_31731_33055[(2)] = null);

(statearr_31731_33055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (1))){
var state_31729__$1 = state_31729;
var statearr_31732_33056 = state_31729__$1;
(statearr_31732_33056[(2)] = null);

(statearr_31732_33056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (4))){
var inst_31693 = (state_31729[(7)]);
var inst_31695 = (inst_31693 < cnt);
var state_31729__$1 = state_31729;
if(cljs.core.truth_(inst_31695)){
var statearr_31733_33058 = state_31729__$1;
(statearr_31733_33058[(1)] = (6));

} else {
var statearr_31734_33059 = state_31729__$1;
(statearr_31734_33059[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (15))){
var inst_31725 = (state_31729[(2)]);
var state_31729__$1 = state_31729;
var statearr_31735_33060 = state_31729__$1;
(statearr_31735_33060[(2)] = inst_31725);

(statearr_31735_33060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (13))){
var inst_31718 = cljs.core.async.close_BANG_(out);
var state_31729__$1 = state_31729;
var statearr_31736_33061 = state_31729__$1;
(statearr_31736_33061[(2)] = inst_31718);

(statearr_31736_33061[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (6))){
var state_31729__$1 = state_31729;
var statearr_31737_33062 = state_31729__$1;
(statearr_31737_33062[(2)] = null);

(statearr_31737_33062[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (3))){
var inst_31727 = (state_31729[(2)]);
var state_31729__$1 = state_31729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31729__$1,inst_31727);
} else {
if((state_val_31730 === (12))){
var inst_31715 = (state_31729[(8)]);
var inst_31715__$1 = (state_31729[(2)]);
var inst_31716 = cljs.core.some(cljs.core.nil_QMARK_,inst_31715__$1);
var state_31729__$1 = (function (){var statearr_31738 = state_31729;
(statearr_31738[(8)] = inst_31715__$1);

return statearr_31738;
})();
if(cljs.core.truth_(inst_31716)){
var statearr_31739_33063 = state_31729__$1;
(statearr_31739_33063[(1)] = (13));

} else {
var statearr_31740_33065 = state_31729__$1;
(statearr_31740_33065[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (2))){
var inst_31692 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31693 = (0);
var state_31729__$1 = (function (){var statearr_31741 = state_31729;
(statearr_31741[(9)] = inst_31692);

(statearr_31741[(7)] = inst_31693);

return statearr_31741;
})();
var statearr_31742_33066 = state_31729__$1;
(statearr_31742_33066[(2)] = null);

(statearr_31742_33066[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (11))){
var inst_31693 = (state_31729[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_31729,(10),Object,null,(9));
var inst_31702 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31693) : chs__$1.call(null,inst_31693));
var inst_31703 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31693) : done.call(null,inst_31693));
var inst_31704 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31702,inst_31703);
var state_31729__$1 = state_31729;
var statearr_31743_33067 = state_31729__$1;
(statearr_31743_33067[(2)] = inst_31704);


cljs.core.async.impl.ioc_helpers.process_exception(state_31729__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (9))){
var inst_31693 = (state_31729[(7)]);
var inst_31706 = (state_31729[(2)]);
var inst_31707 = (inst_31693 + (1));
var inst_31693__$1 = inst_31707;
var state_31729__$1 = (function (){var statearr_31744 = state_31729;
(statearr_31744[(7)] = inst_31693__$1);

(statearr_31744[(10)] = inst_31706);

return statearr_31744;
})();
var statearr_31745_33068 = state_31729__$1;
(statearr_31745_33068[(2)] = null);

(statearr_31745_33068[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (5))){
var inst_31713 = (state_31729[(2)]);
var state_31729__$1 = (function (){var statearr_31746 = state_31729;
(statearr_31746[(11)] = inst_31713);

return statearr_31746;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31729__$1,(12),dchan);
} else {
if((state_val_31730 === (14))){
var inst_31715 = (state_31729[(8)]);
var inst_31720 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31715);
var state_31729__$1 = state_31729;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31729__$1,(16),out,inst_31720);
} else {
if((state_val_31730 === (16))){
var inst_31722 = (state_31729[(2)]);
var state_31729__$1 = (function (){var statearr_31747 = state_31729;
(statearr_31747[(12)] = inst_31722);

return statearr_31747;
})();
var statearr_31748_33069 = state_31729__$1;
(statearr_31748_33069[(2)] = null);

(statearr_31748_33069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (10))){
var inst_31697 = (state_31729[(2)]);
var inst_31698 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31729__$1 = (function (){var statearr_31749 = state_31729;
(statearr_31749[(13)] = inst_31697);

return statearr_31749;
})();
var statearr_31750_33070 = state_31729__$1;
(statearr_31750_33070[(2)] = inst_31698);


cljs.core.async.impl.ioc_helpers.process_exception(state_31729__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (8))){
var inst_31711 = (state_31729[(2)]);
var state_31729__$1 = state_31729;
var statearr_31751_33071 = state_31729__$1;
(statearr_31751_33071[(2)] = inst_31711);

(statearr_31751_33071[(1)] = (5));


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
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_31752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31752[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_31752[(1)] = (1));

return statearr_31752;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_31729){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__(state_31729);
if(cljs.core.keyword_identical_QMARK_(result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e31753){if((e31753 instanceof Object)){
var ex__29661__auto__ = e31753;
var statearr_31754_33082 = state_31729;
(statearr_31754_33082[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31753;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33083 = state_31729;
state_31729 = G__33083;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_31729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_31729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
})();
var state__29969__auto__ = (function (){var statearr_31755 = (f__29968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29968__auto__.cljs$core$IFn$_invoke$arity$0() : f__29968__auto__.call(null));
(statearr_31755[(6)] = c__29967__auto___33054);

return statearr_31755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29969__auto__);
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
var G__31758 = arguments.length;
switch (G__31758) {
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
var c__29967__auto___33085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29968__auto__ = (function (){var switch__29657__auto__ = (function (state_31791){
var state_val_31792 = (state_31791[(1)]);
if((state_val_31792 === (7))){
var inst_31770 = (state_31791[(7)]);
var inst_31771 = (state_31791[(8)]);
var inst_31770__$1 = (state_31791[(2)]);
var inst_31771__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31770__$1,(0),null);
var inst_31772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31770__$1,(1),null);
var inst_31773 = (inst_31771__$1 == null);
var state_31791__$1 = (function (){var statearr_31793 = state_31791;
(statearr_31793[(7)] = inst_31770__$1);

(statearr_31793[(8)] = inst_31771__$1);

(statearr_31793[(9)] = inst_31772);

return statearr_31793;
})();
if(cljs.core.truth_(inst_31773)){
var statearr_31794_33088 = state_31791__$1;
(statearr_31794_33088[(1)] = (8));

} else {
var statearr_31795_33089 = state_31791__$1;
(statearr_31795_33089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (1))){
var inst_31760 = cljs.core.vec(chs);
var inst_31761 = inst_31760;
var state_31791__$1 = (function (){var statearr_31796 = state_31791;
(statearr_31796[(10)] = inst_31761);

return statearr_31796;
})();
var statearr_31797_33092 = state_31791__$1;
(statearr_31797_33092[(2)] = null);

(statearr_31797_33092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (4))){
var inst_31761 = (state_31791[(10)]);
var state_31791__$1 = state_31791;
return cljs.core.async.ioc_alts_BANG_(state_31791__$1,(7),inst_31761);
} else {
if((state_val_31792 === (6))){
var inst_31787 = (state_31791[(2)]);
var state_31791__$1 = state_31791;
var statearr_31798_33093 = state_31791__$1;
(statearr_31798_33093[(2)] = inst_31787);

(statearr_31798_33093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (3))){
var inst_31789 = (state_31791[(2)]);
var state_31791__$1 = state_31791;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31791__$1,inst_31789);
} else {
if((state_val_31792 === (2))){
var inst_31761 = (state_31791[(10)]);
var inst_31763 = cljs.core.count(inst_31761);
var inst_31764 = (inst_31763 > (0));
var state_31791__$1 = state_31791;
if(cljs.core.truth_(inst_31764)){
var statearr_31800_33094 = state_31791__$1;
(statearr_31800_33094[(1)] = (4));

} else {
var statearr_31801_33095 = state_31791__$1;
(statearr_31801_33095[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (11))){
var inst_31761 = (state_31791[(10)]);
var inst_31780 = (state_31791[(2)]);
var tmp31799 = inst_31761;
var inst_31761__$1 = tmp31799;
var state_31791__$1 = (function (){var statearr_31802 = state_31791;
(statearr_31802[(10)] = inst_31761__$1);

(statearr_31802[(11)] = inst_31780);

return statearr_31802;
})();
var statearr_31803_33096 = state_31791__$1;
(statearr_31803_33096[(2)] = null);

(statearr_31803_33096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (9))){
var inst_31771 = (state_31791[(8)]);
var state_31791__$1 = state_31791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31791__$1,(11),out,inst_31771);
} else {
if((state_val_31792 === (5))){
var inst_31785 = cljs.core.async.close_BANG_(out);
var state_31791__$1 = state_31791;
var statearr_31804_33097 = state_31791__$1;
(statearr_31804_33097[(2)] = inst_31785);

(statearr_31804_33097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (10))){
var inst_31783 = (state_31791[(2)]);
var state_31791__$1 = state_31791;
var statearr_31805_33098 = state_31791__$1;
(statearr_31805_33098[(2)] = inst_31783);

(statearr_31805_33098[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (8))){
var inst_31770 = (state_31791[(7)]);
var inst_31761 = (state_31791[(10)]);
var inst_31771 = (state_31791[(8)]);
var inst_31772 = (state_31791[(9)]);
var inst_31775 = (function (){var cs = inst_31761;
var vec__31766 = inst_31770;
var v = inst_31771;
var c = inst_31772;
return (function (p1__31756_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31756_SHARP_);
});
})();
var inst_31776 = cljs.core.filterv(inst_31775,inst_31761);
var inst_31761__$1 = inst_31776;
var state_31791__$1 = (function (){var statearr_31806 = state_31791;
(statearr_31806[(10)] = inst_31761__$1);

return statearr_31806;
})();
var statearr_31807_33100 = state_31791__$1;
(statearr_31807_33100[(2)] = null);

(statearr_31807_33100[(1)] = (2));


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
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_31808 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31808[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_31808[(1)] = (1));

return statearr_31808;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_31791){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__(state_31791);
if(cljs.core.keyword_identical_QMARK_(result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e31809){if((e31809 instanceof Object)){
var ex__29661__auto__ = e31809;
var statearr_31810_33101 = state_31791;
(statearr_31810_33101[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31809;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33102 = state_31791;
state_31791 = G__33102;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_31791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_31791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
})();
var state__29969__auto__ = (function (){var statearr_31811 = (f__29968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29968__auto__.cljs$core$IFn$_invoke$arity$0() : f__29968__auto__.call(null));
(statearr_31811[(6)] = c__29967__auto___33085);

return statearr_31811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29969__auto__);
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
var G__31813 = arguments.length;
switch (G__31813) {
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
var c__29967__auto___33105 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29968__auto__ = (function (){var switch__29657__auto__ = (function (state_31839){
var state_val_31840 = (state_31839[(1)]);
if((state_val_31840 === (7))){
var inst_31820 = (state_31839[(7)]);
var inst_31820__$1 = (state_31839[(2)]);
var inst_31821 = (inst_31820__$1 == null);
var inst_31822 = cljs.core.not(inst_31821);
var state_31839__$1 = (function (){var statearr_31841 = state_31839;
(statearr_31841[(7)] = inst_31820__$1);

return statearr_31841;
})();
if(inst_31822){
var statearr_31842_33107 = state_31839__$1;
(statearr_31842_33107[(1)] = (8));

} else {
var statearr_31843_33108 = state_31839__$1;
(statearr_31843_33108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (1))){
var inst_31814 = (0);
var state_31839__$1 = (function (){var statearr_31844 = state_31839;
(statearr_31844[(8)] = inst_31814);

return statearr_31844;
})();
var statearr_31845_33109 = state_31839__$1;
(statearr_31845_33109[(2)] = null);

(statearr_31845_33109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (4))){
var state_31839__$1 = state_31839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31839__$1,(7),ch);
} else {
if((state_val_31840 === (6))){
var inst_31834 = (state_31839[(2)]);
var state_31839__$1 = state_31839;
var statearr_31846_33113 = state_31839__$1;
(statearr_31846_33113[(2)] = inst_31834);

(statearr_31846_33113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (3))){
var inst_31836 = (state_31839[(2)]);
var inst_31837 = cljs.core.async.close_BANG_(out);
var state_31839__$1 = (function (){var statearr_31847 = state_31839;
(statearr_31847[(9)] = inst_31836);

return statearr_31847;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31839__$1,inst_31837);
} else {
if((state_val_31840 === (2))){
var inst_31814 = (state_31839[(8)]);
var inst_31817 = (inst_31814 < n);
var state_31839__$1 = state_31839;
if(cljs.core.truth_(inst_31817)){
var statearr_31848_33118 = state_31839__$1;
(statearr_31848_33118[(1)] = (4));

} else {
var statearr_31849_33122 = state_31839__$1;
(statearr_31849_33122[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (11))){
var inst_31814 = (state_31839[(8)]);
var inst_31825 = (state_31839[(2)]);
var inst_31827 = (inst_31814 + (1));
var inst_31814__$1 = inst_31827;
var state_31839__$1 = (function (){var statearr_31850 = state_31839;
(statearr_31850[(10)] = inst_31825);

(statearr_31850[(8)] = inst_31814__$1);

return statearr_31850;
})();
var statearr_31855_33123 = state_31839__$1;
(statearr_31855_33123[(2)] = null);

(statearr_31855_33123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (9))){
var state_31839__$1 = state_31839;
var statearr_31856_33124 = state_31839__$1;
(statearr_31856_33124[(2)] = null);

(statearr_31856_33124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (5))){
var state_31839__$1 = state_31839;
var statearr_31859_33128 = state_31839__$1;
(statearr_31859_33128[(2)] = null);

(statearr_31859_33128[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (10))){
var inst_31831 = (state_31839[(2)]);
var state_31839__$1 = state_31839;
var statearr_31862_33129 = state_31839__$1;
(statearr_31862_33129[(2)] = inst_31831);

(statearr_31862_33129[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (8))){
var inst_31820 = (state_31839[(7)]);
var state_31839__$1 = state_31839;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31839__$1,(11),out,inst_31820);
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
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_31867 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31867[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_31867[(1)] = (1));

return statearr_31867;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_31839){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__(state_31839);
if(cljs.core.keyword_identical_QMARK_(result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e31870){if((e31870 instanceof Object)){
var ex__29661__auto__ = e31870;
var statearr_31871_33133 = state_31839;
(statearr_31871_33133[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31870;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33134 = state_31839;
state_31839 = G__33134;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_31839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_31839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
})();
var state__29969__auto__ = (function (){var statearr_31874 = (f__29968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29968__auto__.cljs$core$IFn$_invoke$arity$0() : f__29968__auto__.call(null));
(statearr_31874[(6)] = c__29967__auto___33105);

return statearr_31874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29969__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31879 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31879 = (function (f,ch,meta31880){
this.f = f;
this.ch = ch;
this.meta31880 = meta31880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31881,meta31880__$1){
var self__ = this;
var _31881__$1 = this;
return (new cljs.core.async.t_cljs$core$async31879(self__.f,self__.ch,meta31880__$1));
}));

(cljs.core.async.t_cljs$core$async31879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31881){
var self__ = this;
var _31881__$1 = this;
return self__.meta31880;
}));

(cljs.core.async.t_cljs$core$async31879.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31879.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31879.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31879.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31879.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31894 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31894 = (function (f,ch,meta31880,_,fn1,meta31895){
this.f = f;
this.ch = ch;
this.meta31880 = meta31880;
this._ = _;
this.fn1 = fn1;
this.meta31895 = meta31895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31896,meta31895__$1){
var self__ = this;
var _31896__$1 = this;
return (new cljs.core.async.t_cljs$core$async31894(self__.f,self__.ch,self__.meta31880,self__._,self__.fn1,meta31895__$1));
}));

(cljs.core.async.t_cljs$core$async31894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31896){
var self__ = this;
var _31896__$1 = this;
return self__.meta31895;
}));

(cljs.core.async.t_cljs$core$async31894.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31894.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31894.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31894.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31878_SHARP_){
var G__31904 = (((p1__31878_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31878_SHARP_) : self__.f.call(null,p1__31878_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31904) : f1.call(null,G__31904));
});
}));

(cljs.core.async.t_cljs$core$async31894.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31880","meta31880",-1831454650,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31879","cljs.core.async/t_cljs$core$async31879",1247855694,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31895","meta31895",-422554960,null)], null);
}));

(cljs.core.async.t_cljs$core$async31894.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31894");

(cljs.core.async.t_cljs$core$async31894.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31894");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31894.
 */
cljs.core.async.__GT_t_cljs$core$async31894 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31894(f__$1,ch__$1,meta31880__$1,___$2,fn1__$1,meta31895){
return (new cljs.core.async.t_cljs$core$async31894(f__$1,ch__$1,meta31880__$1,___$2,fn1__$1,meta31895));
});

}

return (new cljs.core.async.t_cljs$core$async31894(self__.f,self__.ch,self__.meta31880,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31908 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31908) : self__.f.call(null,G__31908));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31879.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31879.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31880","meta31880",-1831454650,null)], null);
}));

(cljs.core.async.t_cljs$core$async31879.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31879.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31879");

(cljs.core.async.t_cljs$core$async31879.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31879");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31879.
 */
cljs.core.async.__GT_t_cljs$core$async31879 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31879(f__$1,ch__$1,meta31880){
return (new cljs.core.async.t_cljs$core$async31879(f__$1,ch__$1,meta31880));
});

}

return (new cljs.core.async.t_cljs$core$async31879(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31909 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31909 = (function (f,ch,meta31910){
this.f = f;
this.ch = ch;
this.meta31910 = meta31910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31911,meta31910__$1){
var self__ = this;
var _31911__$1 = this;
return (new cljs.core.async.t_cljs$core$async31909(self__.f,self__.ch,meta31910__$1));
}));

(cljs.core.async.t_cljs$core$async31909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31911){
var self__ = this;
var _31911__$1 = this;
return self__.meta31910;
}));

(cljs.core.async.t_cljs$core$async31909.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31909.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31909.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31909.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31909.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31909.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31910","meta31910",1480177616,null)], null);
}));

(cljs.core.async.t_cljs$core$async31909.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31909.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31909");

(cljs.core.async.t_cljs$core$async31909.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31909");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31909.
 */
cljs.core.async.__GT_t_cljs$core$async31909 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31909(f__$1,ch__$1,meta31910){
return (new cljs.core.async.t_cljs$core$async31909(f__$1,ch__$1,meta31910));
});

}

return (new cljs.core.async.t_cljs$core$async31909(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31942 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31942 = (function (p,ch,meta31943){
this.p = p;
this.ch = ch;
this.meta31943 = meta31943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31944,meta31943__$1){
var self__ = this;
var _31944__$1 = this;
return (new cljs.core.async.t_cljs$core$async31942(self__.p,self__.ch,meta31943__$1));
}));

(cljs.core.async.t_cljs$core$async31942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31944){
var self__ = this;
var _31944__$1 = this;
return self__.meta31943;
}));

(cljs.core.async.t_cljs$core$async31942.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31942.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31942.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31942.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31942.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31942.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31942.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31942.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31943","meta31943",1296551436,null)], null);
}));

(cljs.core.async.t_cljs$core$async31942.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31942.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31942");

(cljs.core.async.t_cljs$core$async31942.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31942");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31942.
 */
cljs.core.async.__GT_t_cljs$core$async31942 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31942(p__$1,ch__$1,meta31943){
return (new cljs.core.async.t_cljs$core$async31942(p__$1,ch__$1,meta31943));
});

}

return (new cljs.core.async.t_cljs$core$async31942(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31965 = arguments.length;
switch (G__31965) {
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
var c__29967__auto___33167 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29968__auto__ = (function (){var switch__29657__auto__ = (function (state_31999){
var state_val_32000 = (state_31999[(1)]);
if((state_val_32000 === (7))){
var inst_31994 = (state_31999[(2)]);
var state_31999__$1 = state_31999;
var statearr_32006_33168 = state_31999__$1;
(statearr_32006_33168[(2)] = inst_31994);

(statearr_32006_33168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (1))){
var state_31999__$1 = state_31999;
var statearr_32009_33169 = state_31999__$1;
(statearr_32009_33169[(2)] = null);

(statearr_32009_33169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (4))){
var inst_31976 = (state_31999[(7)]);
var inst_31976__$1 = (state_31999[(2)]);
var inst_31980 = (inst_31976__$1 == null);
var state_31999__$1 = (function (){var statearr_32011 = state_31999;
(statearr_32011[(7)] = inst_31976__$1);

return statearr_32011;
})();
if(cljs.core.truth_(inst_31980)){
var statearr_32013_33170 = state_31999__$1;
(statearr_32013_33170[(1)] = (5));

} else {
var statearr_32014_33171 = state_31999__$1;
(statearr_32014_33171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (6))){
var inst_31976 = (state_31999[(7)]);
var inst_31985 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31976) : p.call(null,inst_31976));
var state_31999__$1 = state_31999;
if(cljs.core.truth_(inst_31985)){
var statearr_32018_33172 = state_31999__$1;
(statearr_32018_33172[(1)] = (8));

} else {
var statearr_32019_33173 = state_31999__$1;
(statearr_32019_33173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (3))){
var inst_31996 = (state_31999[(2)]);
var state_31999__$1 = state_31999;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31999__$1,inst_31996);
} else {
if((state_val_32000 === (2))){
var state_31999__$1 = state_31999;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31999__$1,(4),ch);
} else {
if((state_val_32000 === (11))){
var inst_31988 = (state_31999[(2)]);
var state_31999__$1 = state_31999;
var statearr_32024_33180 = state_31999__$1;
(statearr_32024_33180[(2)] = inst_31988);

(statearr_32024_33180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (9))){
var state_31999__$1 = state_31999;
var statearr_32027_33181 = state_31999__$1;
(statearr_32027_33181[(2)] = null);

(statearr_32027_33181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (5))){
var inst_31982 = cljs.core.async.close_BANG_(out);
var state_31999__$1 = state_31999;
var statearr_32029_33182 = state_31999__$1;
(statearr_32029_33182[(2)] = inst_31982);

(statearr_32029_33182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (10))){
var inst_31991 = (state_31999[(2)]);
var state_31999__$1 = (function (){var statearr_32030 = state_31999;
(statearr_32030[(8)] = inst_31991);

return statearr_32030;
})();
var statearr_32032_33183 = state_31999__$1;
(statearr_32032_33183[(2)] = null);

(statearr_32032_33183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (8))){
var inst_31976 = (state_31999[(7)]);
var state_31999__$1 = state_31999;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31999__$1,(11),out,inst_31976);
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
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_32035 = [null,null,null,null,null,null,null,null,null];
(statearr_32035[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_32035[(1)] = (1));

return statearr_32035;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_31999){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__(state_31999);
if(cljs.core.keyword_identical_QMARK_(result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e32036){if((e32036 instanceof Object)){
var ex__29661__auto__ = e32036;
var statearr_32037_33184 = state_31999;
(statearr_32037_33184[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32036;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33185 = state_31999;
state_31999 = G__33185;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_31999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_31999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
})();
var state__29969__auto__ = (function (){var statearr_32042 = (f__29968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29968__auto__.cljs$core$IFn$_invoke$arity$0() : f__29968__auto__.call(null));
(statearr_32042[(6)] = c__29967__auto___33167);

return statearr_32042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29969__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32049 = arguments.length;
switch (G__32049) {
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
var c__29967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29968__auto__ = (function (){var switch__29657__auto__ = (function (state_32171){
var state_val_32174 = (state_32171[(1)]);
if((state_val_32174 === (7))){
var inst_32167 = (state_32171[(2)]);
var state_32171__$1 = state_32171;
var statearr_32175_33190 = state_32171__$1;
(statearr_32175_33190[(2)] = inst_32167);

(statearr_32175_33190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (20))){
var inst_32133 = (state_32171[(7)]);
var inst_32148 = (state_32171[(2)]);
var inst_32149 = cljs.core.next(inst_32133);
var inst_32086 = inst_32149;
var inst_32087 = null;
var inst_32088 = (0);
var inst_32089 = (0);
var state_32171__$1 = (function (){var statearr_32176 = state_32171;
(statearr_32176[(8)] = inst_32086);

(statearr_32176[(9)] = inst_32089);

(statearr_32176[(10)] = inst_32088);

(statearr_32176[(11)] = inst_32087);

(statearr_32176[(12)] = inst_32148);

return statearr_32176;
})();
var statearr_32178_33194 = state_32171__$1;
(statearr_32178_33194[(2)] = null);

(statearr_32178_33194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (1))){
var state_32171__$1 = state_32171;
var statearr_32181_33195 = state_32171__$1;
(statearr_32181_33195[(2)] = null);

(statearr_32181_33195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (4))){
var inst_32071 = (state_32171[(13)]);
var inst_32071__$1 = (state_32171[(2)]);
var inst_32072 = (inst_32071__$1 == null);
var state_32171__$1 = (function (){var statearr_32186 = state_32171;
(statearr_32186[(13)] = inst_32071__$1);

return statearr_32186;
})();
if(cljs.core.truth_(inst_32072)){
var statearr_32187_33198 = state_32171__$1;
(statearr_32187_33198[(1)] = (5));

} else {
var statearr_32188_33199 = state_32171__$1;
(statearr_32188_33199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (15))){
var state_32171__$1 = state_32171;
var statearr_32194_33200 = state_32171__$1;
(statearr_32194_33200[(2)] = null);

(statearr_32194_33200[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (21))){
var state_32171__$1 = state_32171;
var statearr_32197_33201 = state_32171__$1;
(statearr_32197_33201[(2)] = null);

(statearr_32197_33201[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (13))){
var inst_32086 = (state_32171[(8)]);
var inst_32089 = (state_32171[(9)]);
var inst_32088 = (state_32171[(10)]);
var inst_32087 = (state_32171[(11)]);
var inst_32102 = (state_32171[(2)]);
var inst_32127 = (inst_32089 + (1));
var tmp32191 = inst_32086;
var tmp32192 = inst_32088;
var tmp32193 = inst_32087;
var inst_32086__$1 = tmp32191;
var inst_32087__$1 = tmp32193;
var inst_32088__$1 = tmp32192;
var inst_32089__$1 = inst_32127;
var state_32171__$1 = (function (){var statearr_32198 = state_32171;
(statearr_32198[(8)] = inst_32086__$1);

(statearr_32198[(9)] = inst_32089__$1);

(statearr_32198[(10)] = inst_32088__$1);

(statearr_32198[(11)] = inst_32087__$1);

(statearr_32198[(14)] = inst_32102);

return statearr_32198;
})();
var statearr_32199_33202 = state_32171__$1;
(statearr_32199_33202[(2)] = null);

(statearr_32199_33202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (22))){
var state_32171__$1 = state_32171;
var statearr_32200_33203 = state_32171__$1;
(statearr_32200_33203[(2)] = null);

(statearr_32200_33203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (6))){
var inst_32071 = (state_32171[(13)]);
var inst_32080 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32071) : f.call(null,inst_32071));
var inst_32081 = cljs.core.seq(inst_32080);
var inst_32086 = inst_32081;
var inst_32087 = null;
var inst_32088 = (0);
var inst_32089 = (0);
var state_32171__$1 = (function (){var statearr_32202 = state_32171;
(statearr_32202[(8)] = inst_32086);

(statearr_32202[(9)] = inst_32089);

(statearr_32202[(10)] = inst_32088);

(statearr_32202[(11)] = inst_32087);

return statearr_32202;
})();
var statearr_32203_33206 = state_32171__$1;
(statearr_32203_33206[(2)] = null);

(statearr_32203_33206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (17))){
var inst_32133 = (state_32171[(7)]);
var inst_32141 = cljs.core.chunk_first(inst_32133);
var inst_32142 = cljs.core.chunk_rest(inst_32133);
var inst_32143 = cljs.core.count(inst_32141);
var inst_32086 = inst_32142;
var inst_32087 = inst_32141;
var inst_32088 = inst_32143;
var inst_32089 = (0);
var state_32171__$1 = (function (){var statearr_32204 = state_32171;
(statearr_32204[(8)] = inst_32086);

(statearr_32204[(9)] = inst_32089);

(statearr_32204[(10)] = inst_32088);

(statearr_32204[(11)] = inst_32087);

return statearr_32204;
})();
var statearr_32205_33207 = state_32171__$1;
(statearr_32205_33207[(2)] = null);

(statearr_32205_33207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (3))){
var inst_32169 = (state_32171[(2)]);
var state_32171__$1 = state_32171;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32171__$1,inst_32169);
} else {
if((state_val_32174 === (12))){
var inst_32157 = (state_32171[(2)]);
var state_32171__$1 = state_32171;
var statearr_32206_33208 = state_32171__$1;
(statearr_32206_33208[(2)] = inst_32157);

(statearr_32206_33208[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (2))){
var state_32171__$1 = state_32171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32171__$1,(4),in$);
} else {
if((state_val_32174 === (23))){
var inst_32165 = (state_32171[(2)]);
var state_32171__$1 = state_32171;
var statearr_32207_33209 = state_32171__$1;
(statearr_32207_33209[(2)] = inst_32165);

(statearr_32207_33209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (19))){
var inst_32152 = (state_32171[(2)]);
var state_32171__$1 = state_32171;
var statearr_32208_33210 = state_32171__$1;
(statearr_32208_33210[(2)] = inst_32152);

(statearr_32208_33210[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (11))){
var inst_32086 = (state_32171[(8)]);
var inst_32133 = (state_32171[(7)]);
var inst_32133__$1 = cljs.core.seq(inst_32086);
var state_32171__$1 = (function (){var statearr_32209 = state_32171;
(statearr_32209[(7)] = inst_32133__$1);

return statearr_32209;
})();
if(inst_32133__$1){
var statearr_32210_33214 = state_32171__$1;
(statearr_32210_33214[(1)] = (14));

} else {
var statearr_32211_33215 = state_32171__$1;
(statearr_32211_33215[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (9))){
var inst_32159 = (state_32171[(2)]);
var inst_32160 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32171__$1 = (function (){var statearr_32212 = state_32171;
(statearr_32212[(15)] = inst_32159);

return statearr_32212;
})();
if(cljs.core.truth_(inst_32160)){
var statearr_32213_33222 = state_32171__$1;
(statearr_32213_33222[(1)] = (21));

} else {
var statearr_32214_33223 = state_32171__$1;
(statearr_32214_33223[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (5))){
var inst_32074 = cljs.core.async.close_BANG_(out);
var state_32171__$1 = state_32171;
var statearr_32215_33224 = state_32171__$1;
(statearr_32215_33224[(2)] = inst_32074);

(statearr_32215_33224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (14))){
var inst_32133 = (state_32171[(7)]);
var inst_32139 = cljs.core.chunked_seq_QMARK_(inst_32133);
var state_32171__$1 = state_32171;
if(inst_32139){
var statearr_32216_33225 = state_32171__$1;
(statearr_32216_33225[(1)] = (17));

} else {
var statearr_32217_33226 = state_32171__$1;
(statearr_32217_33226[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (16))){
var inst_32155 = (state_32171[(2)]);
var state_32171__$1 = state_32171;
var statearr_32218_33227 = state_32171__$1;
(statearr_32218_33227[(2)] = inst_32155);

(statearr_32218_33227[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (10))){
var inst_32089 = (state_32171[(9)]);
var inst_32087 = (state_32171[(11)]);
var inst_32096 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32087,inst_32089);
var state_32171__$1 = state_32171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32171__$1,(13),out,inst_32096);
} else {
if((state_val_32174 === (18))){
var inst_32133 = (state_32171[(7)]);
var inst_32146 = cljs.core.first(inst_32133);
var state_32171__$1 = state_32171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32171__$1,(20),out,inst_32146);
} else {
if((state_val_32174 === (8))){
var inst_32089 = (state_32171[(9)]);
var inst_32088 = (state_32171[(10)]);
var inst_32091 = (inst_32089 < inst_32088);
var inst_32092 = inst_32091;
var state_32171__$1 = state_32171;
if(cljs.core.truth_(inst_32092)){
var statearr_32219_33231 = state_32171__$1;
(statearr_32219_33231[(1)] = (10));

} else {
var statearr_32220_33232 = state_32171__$1;
(statearr_32220_33232[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__29658__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29658__auto____0 = (function (){
var statearr_32221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32221[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29658__auto__);

(statearr_32221[(1)] = (1));

return statearr_32221;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29658__auto____1 = (function (state_32171){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__(state_32171);
if(cljs.core.keyword_identical_QMARK_(result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e32222){if((e32222 instanceof Object)){
var ex__29661__auto__ = e32222;
var statearr_32223_33235 = state_32171;
(statearr_32223_33235[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32222;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33236 = state_32171;
state_32171 = G__33236;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29658__auto__ = function(state_32171){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29658__auto____1.call(this,state_32171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29658__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29658__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29658__auto__;
})()
})();
var state__29969__auto__ = (function (){var statearr_32224 = (f__29968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29968__auto__.cljs$core$IFn$_invoke$arity$0() : f__29968__auto__.call(null));
(statearr_32224[(6)] = c__29967__auto__);

return statearr_32224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29969__auto__);
}));

return c__29967__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32226 = arguments.length;
switch (G__32226) {
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
var G__32228 = arguments.length;
switch (G__32228) {
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
var G__32230 = arguments.length;
switch (G__32230) {
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
var c__29967__auto___33240 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29968__auto__ = (function (){var switch__29657__auto__ = (function (state_32255){
var state_val_32256 = (state_32255[(1)]);
if((state_val_32256 === (7))){
var inst_32250 = (state_32255[(2)]);
var state_32255__$1 = state_32255;
var statearr_32257_33241 = state_32255__$1;
(statearr_32257_33241[(2)] = inst_32250);

(statearr_32257_33241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (1))){
var inst_32232 = null;
var state_32255__$1 = (function (){var statearr_32259 = state_32255;
(statearr_32259[(7)] = inst_32232);

return statearr_32259;
})();
var statearr_32260_33242 = state_32255__$1;
(statearr_32260_33242[(2)] = null);

(statearr_32260_33242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (4))){
var inst_32235 = (state_32255[(8)]);
var inst_32235__$1 = (state_32255[(2)]);
var inst_32236 = (inst_32235__$1 == null);
var inst_32237 = cljs.core.not(inst_32236);
var state_32255__$1 = (function (){var statearr_32261 = state_32255;
(statearr_32261[(8)] = inst_32235__$1);

return statearr_32261;
})();
if(inst_32237){
var statearr_32262_33243 = state_32255__$1;
(statearr_32262_33243[(1)] = (5));

} else {
var statearr_32263_33244 = state_32255__$1;
(statearr_32263_33244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (6))){
var state_32255__$1 = state_32255;
var statearr_32264_33245 = state_32255__$1;
(statearr_32264_33245[(2)] = null);

(statearr_32264_33245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (3))){
var inst_32252 = (state_32255[(2)]);
var inst_32253 = cljs.core.async.close_BANG_(out);
var state_32255__$1 = (function (){var statearr_32265 = state_32255;
(statearr_32265[(9)] = inst_32252);

return statearr_32265;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32255__$1,inst_32253);
} else {
if((state_val_32256 === (2))){
var state_32255__$1 = state_32255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32255__$1,(4),ch);
} else {
if((state_val_32256 === (11))){
var inst_32235 = (state_32255[(8)]);
var inst_32244 = (state_32255[(2)]);
var inst_32232 = inst_32235;
var state_32255__$1 = (function (){var statearr_32266 = state_32255;
(statearr_32266[(10)] = inst_32244);

(statearr_32266[(7)] = inst_32232);

return statearr_32266;
})();
var statearr_32267_33247 = state_32255__$1;
(statearr_32267_33247[(2)] = null);

(statearr_32267_33247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (9))){
var inst_32235 = (state_32255[(8)]);
var state_32255__$1 = state_32255;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32255__$1,(11),out,inst_32235);
} else {
if((state_val_32256 === (5))){
var inst_32232 = (state_32255[(7)]);
var inst_32235 = (state_32255[(8)]);
var inst_32239 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32235,inst_32232);
var state_32255__$1 = state_32255;
if(inst_32239){
var statearr_32269_33249 = state_32255__$1;
(statearr_32269_33249[(1)] = (8));

} else {
var statearr_32270_33250 = state_32255__$1;
(statearr_32270_33250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (10))){
var inst_32247 = (state_32255[(2)]);
var state_32255__$1 = state_32255;
var statearr_32271_33251 = state_32255__$1;
(statearr_32271_33251[(2)] = inst_32247);

(statearr_32271_33251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (8))){
var inst_32232 = (state_32255[(7)]);
var tmp32268 = inst_32232;
var inst_32232__$1 = tmp32268;
var state_32255__$1 = (function (){var statearr_32272 = state_32255;
(statearr_32272[(7)] = inst_32232__$1);

return statearr_32272;
})();
var statearr_32273_33253 = state_32255__$1;
(statearr_32273_33253[(2)] = null);

(statearr_32273_33253[(1)] = (2));


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
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_32282 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32282[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_32282[(1)] = (1));

return statearr_32282;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_32255){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__(state_32255);
if(cljs.core.keyword_identical_QMARK_(result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e32287){if((e32287 instanceof Object)){
var ex__29661__auto__ = e32287;
var statearr_32288_33255 = state_32255;
(statearr_32288_33255[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32287;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33257 = state_32255;
state_32255 = G__33257;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_32255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_32255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
})();
var state__29969__auto__ = (function (){var statearr_32289 = (f__29968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29968__auto__.cljs$core$IFn$_invoke$arity$0() : f__29968__auto__.call(null));
(statearr_32289[(6)] = c__29967__auto___33240);

return statearr_32289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29969__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32291 = arguments.length;
switch (G__32291) {
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
var c__29967__auto___33260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29968__auto__ = (function (){var switch__29657__auto__ = (function (state_32329){
var state_val_32330 = (state_32329[(1)]);
if((state_val_32330 === (7))){
var inst_32325 = (state_32329[(2)]);
var state_32329__$1 = state_32329;
var statearr_32331_33261 = state_32329__$1;
(statearr_32331_33261[(2)] = inst_32325);

(statearr_32331_33261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (1))){
var inst_32292 = (new Array(n));
var inst_32293 = inst_32292;
var inst_32294 = (0);
var state_32329__$1 = (function (){var statearr_32332 = state_32329;
(statearr_32332[(7)] = inst_32294);

(statearr_32332[(8)] = inst_32293);

return statearr_32332;
})();
var statearr_32333_33262 = state_32329__$1;
(statearr_32333_33262[(2)] = null);

(statearr_32333_33262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (4))){
var inst_32297 = (state_32329[(9)]);
var inst_32297__$1 = (state_32329[(2)]);
var inst_32298 = (inst_32297__$1 == null);
var inst_32299 = cljs.core.not(inst_32298);
var state_32329__$1 = (function (){var statearr_32334 = state_32329;
(statearr_32334[(9)] = inst_32297__$1);

return statearr_32334;
})();
if(inst_32299){
var statearr_32335_33271 = state_32329__$1;
(statearr_32335_33271[(1)] = (5));

} else {
var statearr_32336_33272 = state_32329__$1;
(statearr_32336_33272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (15))){
var inst_32319 = (state_32329[(2)]);
var state_32329__$1 = state_32329;
var statearr_32337_33273 = state_32329__$1;
(statearr_32337_33273[(2)] = inst_32319);

(statearr_32337_33273[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (13))){
var state_32329__$1 = state_32329;
var statearr_32338_33278 = state_32329__$1;
(statearr_32338_33278[(2)] = null);

(statearr_32338_33278[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (6))){
var inst_32294 = (state_32329[(7)]);
var inst_32315 = (inst_32294 > (0));
var state_32329__$1 = state_32329;
if(cljs.core.truth_(inst_32315)){
var statearr_32339_33283 = state_32329__$1;
(statearr_32339_33283[(1)] = (12));

} else {
var statearr_32340_33284 = state_32329__$1;
(statearr_32340_33284[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (3))){
var inst_32327 = (state_32329[(2)]);
var state_32329__$1 = state_32329;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32329__$1,inst_32327);
} else {
if((state_val_32330 === (12))){
var inst_32293 = (state_32329[(8)]);
var inst_32317 = cljs.core.vec(inst_32293);
var state_32329__$1 = state_32329;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32329__$1,(15),out,inst_32317);
} else {
if((state_val_32330 === (2))){
var state_32329__$1 = state_32329;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32329__$1,(4),ch);
} else {
if((state_val_32330 === (11))){
var inst_32309 = (state_32329[(2)]);
var inst_32310 = (new Array(n));
var inst_32293 = inst_32310;
var inst_32294 = (0);
var state_32329__$1 = (function (){var statearr_32341 = state_32329;
(statearr_32341[(10)] = inst_32309);

(statearr_32341[(7)] = inst_32294);

(statearr_32341[(8)] = inst_32293);

return statearr_32341;
})();
var statearr_32342_33290 = state_32329__$1;
(statearr_32342_33290[(2)] = null);

(statearr_32342_33290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (9))){
var inst_32293 = (state_32329[(8)]);
var inst_32307 = cljs.core.vec(inst_32293);
var state_32329__$1 = state_32329;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32329__$1,(11),out,inst_32307);
} else {
if((state_val_32330 === (5))){
var inst_32297 = (state_32329[(9)]);
var inst_32294 = (state_32329[(7)]);
var inst_32293 = (state_32329[(8)]);
var inst_32302 = (state_32329[(11)]);
var inst_32301 = (inst_32293[inst_32294] = inst_32297);
var inst_32302__$1 = (inst_32294 + (1));
var inst_32303 = (inst_32302__$1 < n);
var state_32329__$1 = (function (){var statearr_32343 = state_32329;
(statearr_32343[(12)] = inst_32301);

(statearr_32343[(11)] = inst_32302__$1);

return statearr_32343;
})();
if(cljs.core.truth_(inst_32303)){
var statearr_32344_33291 = state_32329__$1;
(statearr_32344_33291[(1)] = (8));

} else {
var statearr_32345_33292 = state_32329__$1;
(statearr_32345_33292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (14))){
var inst_32322 = (state_32329[(2)]);
var inst_32323 = cljs.core.async.close_BANG_(out);
var state_32329__$1 = (function (){var statearr_32347 = state_32329;
(statearr_32347[(13)] = inst_32322);

return statearr_32347;
})();
var statearr_32348_33297 = state_32329__$1;
(statearr_32348_33297[(2)] = inst_32323);

(statearr_32348_33297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (10))){
var inst_32313 = (state_32329[(2)]);
var state_32329__$1 = state_32329;
var statearr_32349_33302 = state_32329__$1;
(statearr_32349_33302[(2)] = inst_32313);

(statearr_32349_33302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (8))){
var inst_32293 = (state_32329[(8)]);
var inst_32302 = (state_32329[(11)]);
var tmp32346 = inst_32293;
var inst_32293__$1 = tmp32346;
var inst_32294 = inst_32302;
var state_32329__$1 = (function (){var statearr_32350 = state_32329;
(statearr_32350[(7)] = inst_32294);

(statearr_32350[(8)] = inst_32293__$1);

return statearr_32350;
})();
var statearr_32351_33307 = state_32329__$1;
(statearr_32351_33307[(2)] = null);

(statearr_32351_33307[(1)] = (2));


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
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_32352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32352[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_32352[(1)] = (1));

return statearr_32352;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_32329){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__(state_32329);
if(cljs.core.keyword_identical_QMARK_(result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e32353){if((e32353 instanceof Object)){
var ex__29661__auto__ = e32353;
var statearr_32354_33315 = state_32329;
(statearr_32354_33315[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32353;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33316 = state_32329;
state_32329 = G__33316;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_32329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_32329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
})();
var state__29969__auto__ = (function (){var statearr_32355 = (f__29968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29968__auto__.cljs$core$IFn$_invoke$arity$0() : f__29968__auto__.call(null));
(statearr_32355[(6)] = c__29967__auto___33260);

return statearr_32355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29969__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32357 = arguments.length;
switch (G__32357) {
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
var c__29967__auto___33332 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29968__auto__ = (function (){var switch__29657__auto__ = (function (state_32399){
var state_val_32400 = (state_32399[(1)]);
if((state_val_32400 === (7))){
var inst_32395 = (state_32399[(2)]);
var state_32399__$1 = state_32399;
var statearr_32401_33333 = state_32399__$1;
(statearr_32401_33333[(2)] = inst_32395);

(statearr_32401_33333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32400 === (1))){
var inst_32358 = [];
var inst_32359 = inst_32358;
var inst_32360 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32399__$1 = (function (){var statearr_32402 = state_32399;
(statearr_32402[(7)] = inst_32360);

(statearr_32402[(8)] = inst_32359);

return statearr_32402;
})();
var statearr_32403_33335 = state_32399__$1;
(statearr_32403_33335[(2)] = null);

(statearr_32403_33335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32400 === (4))){
var inst_32363 = (state_32399[(9)]);
var inst_32363__$1 = (state_32399[(2)]);
var inst_32364 = (inst_32363__$1 == null);
var inst_32365 = cljs.core.not(inst_32364);
var state_32399__$1 = (function (){var statearr_32404 = state_32399;
(statearr_32404[(9)] = inst_32363__$1);

return statearr_32404;
})();
if(inst_32365){
var statearr_32405_33336 = state_32399__$1;
(statearr_32405_33336[(1)] = (5));

} else {
var statearr_32406_33337 = state_32399__$1;
(statearr_32406_33337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32400 === (15))){
var inst_32389 = (state_32399[(2)]);
var state_32399__$1 = state_32399;
var statearr_32407_33338 = state_32399__$1;
(statearr_32407_33338[(2)] = inst_32389);

(statearr_32407_33338[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32400 === (13))){
var state_32399__$1 = state_32399;
var statearr_32408_33339 = state_32399__$1;
(statearr_32408_33339[(2)] = null);

(statearr_32408_33339[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32400 === (6))){
var inst_32359 = (state_32399[(8)]);
var inst_32384 = inst_32359.length;
var inst_32385 = (inst_32384 > (0));
var state_32399__$1 = state_32399;
if(cljs.core.truth_(inst_32385)){
var statearr_32409_33340 = state_32399__$1;
(statearr_32409_33340[(1)] = (12));

} else {
var statearr_32410_33341 = state_32399__$1;
(statearr_32410_33341[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32400 === (3))){
var inst_32397 = (state_32399[(2)]);
var state_32399__$1 = state_32399;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32399__$1,inst_32397);
} else {
if((state_val_32400 === (12))){
var inst_32359 = (state_32399[(8)]);
var inst_32387 = cljs.core.vec(inst_32359);
var state_32399__$1 = state_32399;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32399__$1,(15),out,inst_32387);
} else {
if((state_val_32400 === (2))){
var state_32399__$1 = state_32399;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32399__$1,(4),ch);
} else {
if((state_val_32400 === (11))){
var inst_32363 = (state_32399[(9)]);
var inst_32367 = (state_32399[(10)]);
var inst_32377 = (state_32399[(2)]);
var inst_32378 = [];
var inst_32379 = inst_32378.push(inst_32363);
var inst_32359 = inst_32378;
var inst_32360 = inst_32367;
var state_32399__$1 = (function (){var statearr_32411 = state_32399;
(statearr_32411[(11)] = inst_32377);

(statearr_32411[(12)] = inst_32379);

(statearr_32411[(7)] = inst_32360);

(statearr_32411[(8)] = inst_32359);

return statearr_32411;
})();
var statearr_32412_33342 = state_32399__$1;
(statearr_32412_33342[(2)] = null);

(statearr_32412_33342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32400 === (9))){
var inst_32359 = (state_32399[(8)]);
var inst_32375 = cljs.core.vec(inst_32359);
var state_32399__$1 = state_32399;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32399__$1,(11),out,inst_32375);
} else {
if((state_val_32400 === (5))){
var inst_32363 = (state_32399[(9)]);
var inst_32367 = (state_32399[(10)]);
var inst_32360 = (state_32399[(7)]);
var inst_32367__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32363) : f.call(null,inst_32363));
var inst_32368 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32367__$1,inst_32360);
var inst_32369 = cljs.core.keyword_identical_QMARK_(inst_32360,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32370 = ((inst_32368) || (inst_32369));
var state_32399__$1 = (function (){var statearr_32413 = state_32399;
(statearr_32413[(10)] = inst_32367__$1);

return statearr_32413;
})();
if(cljs.core.truth_(inst_32370)){
var statearr_32414_33344 = state_32399__$1;
(statearr_32414_33344[(1)] = (8));

} else {
var statearr_32415_33345 = state_32399__$1;
(statearr_32415_33345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32400 === (14))){
var inst_32392 = (state_32399[(2)]);
var inst_32393 = cljs.core.async.close_BANG_(out);
var state_32399__$1 = (function (){var statearr_32417 = state_32399;
(statearr_32417[(13)] = inst_32392);

return statearr_32417;
})();
var statearr_32418_33346 = state_32399__$1;
(statearr_32418_33346[(2)] = inst_32393);

(statearr_32418_33346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32400 === (10))){
var inst_32382 = (state_32399[(2)]);
var state_32399__$1 = state_32399;
var statearr_32419_33347 = state_32399__$1;
(statearr_32419_33347[(2)] = inst_32382);

(statearr_32419_33347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32400 === (8))){
var inst_32363 = (state_32399[(9)]);
var inst_32367 = (state_32399[(10)]);
var inst_32359 = (state_32399[(8)]);
var inst_32372 = inst_32359.push(inst_32363);
var tmp32416 = inst_32359;
var inst_32359__$1 = tmp32416;
var inst_32360 = inst_32367;
var state_32399__$1 = (function (){var statearr_32420 = state_32399;
(statearr_32420[(7)] = inst_32360);

(statearr_32420[(8)] = inst_32359__$1);

(statearr_32420[(14)] = inst_32372);

return statearr_32420;
})();
var statearr_32421_33348 = state_32399__$1;
(statearr_32421_33348[(2)] = null);

(statearr_32421_33348[(1)] = (2));


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
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_32422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32422[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_32422[(1)] = (1));

return statearr_32422;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_32399){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__(state_32399);
if(cljs.core.keyword_identical_QMARK_(result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e32423){if((e32423 instanceof Object)){
var ex__29661__auto__ = e32423;
var statearr_32424_33354 = state_32399;
(statearr_32424_33354[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32423;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33360 = state_32399;
state_32399 = G__33360;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_32399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_32399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
})();
var state__29969__auto__ = (function (){var statearr_32425 = (f__29968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29968__auto__.cljs$core$IFn$_invoke$arity$0() : f__29968__auto__.call(null));
(statearr_32425[(6)] = c__29967__auto___33332);

return statearr_32425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29969__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
