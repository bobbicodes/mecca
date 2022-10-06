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
var G__29827 = arguments.length;
switch (G__29827) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29828 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29828 = (function (f,blockable,meta29829){
this.f = f;
this.blockable = blockable;
this.meta29829 = meta29829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29830,meta29829__$1){
var self__ = this;
var _29830__$1 = this;
return (new cljs.core.async.t_cljs$core$async29828(self__.f,self__.blockable,meta29829__$1));
}));

(cljs.core.async.t_cljs$core$async29828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29830){
var self__ = this;
var _29830__$1 = this;
return self__.meta29829;
}));

(cljs.core.async.t_cljs$core$async29828.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29828.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29828.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29828.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29828.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29829","meta29829",924907357,null)], null);
}));

(cljs.core.async.t_cljs$core$async29828.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29828.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29828");

(cljs.core.async.t_cljs$core$async29828.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29828");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29828.
 */
cljs.core.async.__GT_t_cljs$core$async29828 = (function cljs$core$async$__GT_t_cljs$core$async29828(f__$1,blockable__$1,meta29829){
return (new cljs.core.async.t_cljs$core$async29828(f__$1,blockable__$1,meta29829));
});

}

return (new cljs.core.async.t_cljs$core$async29828(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29845 = arguments.length;
switch (G__29845) {
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
var G__29866 = arguments.length;
switch (G__29866) {
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
var G__29877 = arguments.length;
switch (G__29877) {
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
var val_32413 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32413) : fn1.call(null,val_32413));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32413) : fn1.call(null,val_32413));
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
var G__29886 = arguments.length;
switch (G__29886) {
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
var n__4666__auto___32415 = n;
var x_32416 = (0);
while(true){
if((x_32416 < n__4666__auto___32415)){
(a[x_32416] = x_32416);

var G__32417 = (x_32416 + (1));
x_32416 = G__32417;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29895 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29895 = (function (flag,meta29896){
this.flag = flag;
this.meta29896 = meta29896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29897,meta29896__$1){
var self__ = this;
var _29897__$1 = this;
return (new cljs.core.async.t_cljs$core$async29895(self__.flag,meta29896__$1));
}));

(cljs.core.async.t_cljs$core$async29895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29897){
var self__ = this;
var _29897__$1 = this;
return self__.meta29896;
}));

(cljs.core.async.t_cljs$core$async29895.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29895.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29895.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29895.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29895.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29896","meta29896",-1262846510,null)], null);
}));

(cljs.core.async.t_cljs$core$async29895.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29895.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29895");

(cljs.core.async.t_cljs$core$async29895.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29895");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29895.
 */
cljs.core.async.__GT_t_cljs$core$async29895 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29895(flag__$1,meta29896){
return (new cljs.core.async.t_cljs$core$async29895(flag__$1,meta29896));
});

}

return (new cljs.core.async.t_cljs$core$async29895(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29904 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29904 = (function (flag,cb,meta29905){
this.flag = flag;
this.cb = cb;
this.meta29905 = meta29905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29906,meta29905__$1){
var self__ = this;
var _29906__$1 = this;
return (new cljs.core.async.t_cljs$core$async29904(self__.flag,self__.cb,meta29905__$1));
}));

(cljs.core.async.t_cljs$core$async29904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29906){
var self__ = this;
var _29906__$1 = this;
return self__.meta29905;
}));

(cljs.core.async.t_cljs$core$async29904.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29904.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29904.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29904.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29904.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29905","meta29905",-819083600,null)], null);
}));

(cljs.core.async.t_cljs$core$async29904.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29904.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29904");

(cljs.core.async.t_cljs$core$async29904.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29904");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29904.
 */
cljs.core.async.__GT_t_cljs$core$async29904 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29904(flag__$1,cb__$1,meta29905){
return (new cljs.core.async.t_cljs$core$async29904(flag__$1,cb__$1,meta29905));
});

}

return (new cljs.core.async.t_cljs$core$async29904(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29921_SHARP_){
var G__29928 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29921_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29928) : fret.call(null,G__29928));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29922_SHARP_){
var G__29929 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29922_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29929) : fret.call(null,G__29929));
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
var G__32418 = (i + (1));
i = G__32418;
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
var len__4789__auto___32421 = arguments.length;
var i__4790__auto___32422 = (0);
while(true){
if((i__4790__auto___32422 < len__4789__auto___32421)){
args__4795__auto__.push((arguments[i__4790__auto___32422]));

var G__32423 = (i__4790__auto___32422 + (1));
i__4790__auto___32422 = G__32423;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29940){
var map__29941 = p__29940;
var map__29941__$1 = (((((!((map__29941 == null))))?(((((map__29941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29941):map__29941);
var opts = map__29941__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29937){
var G__29938 = cljs.core.first(seq29937);
var seq29937__$1 = cljs.core.next(seq29937);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29938,seq29937__$1);
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
var G__29969 = arguments.length;
switch (G__29969) {
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
var c__29726__auto___32429 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29727__auto__ = (function (){var switch__29479__auto__ = (function (state_30016){
var state_val_30017 = (state_30016[(1)]);
if((state_val_30017 === (7))){
var inst_30010 = (state_30016[(2)]);
var state_30016__$1 = state_30016;
var statearr_30021_32430 = state_30016__$1;
(statearr_30021_32430[(2)] = inst_30010);

(statearr_30021_32430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (1))){
var state_30016__$1 = state_30016;
var statearr_30022_32431 = state_30016__$1;
(statearr_30022_32431[(2)] = null);

(statearr_30022_32431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (4))){
var inst_29984 = (state_30016[(7)]);
var inst_29984__$1 = (state_30016[(2)]);
var inst_29990 = (inst_29984__$1 == null);
var state_30016__$1 = (function (){var statearr_30026 = state_30016;
(statearr_30026[(7)] = inst_29984__$1);

return statearr_30026;
})();
if(cljs.core.truth_(inst_29990)){
var statearr_30027_32435 = state_30016__$1;
(statearr_30027_32435[(1)] = (5));

} else {
var statearr_30032_32437 = state_30016__$1;
(statearr_30032_32437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (13))){
var state_30016__$1 = state_30016;
var statearr_30033_32438 = state_30016__$1;
(statearr_30033_32438[(2)] = null);

(statearr_30033_32438[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (6))){
var inst_29984 = (state_30016[(7)]);
var state_30016__$1 = state_30016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30016__$1,(11),to,inst_29984);
} else {
if((state_val_30017 === (3))){
var inst_30012 = (state_30016[(2)]);
var state_30016__$1 = state_30016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30016__$1,inst_30012);
} else {
if((state_val_30017 === (12))){
var state_30016__$1 = state_30016;
var statearr_30034_32440 = state_30016__$1;
(statearr_30034_32440[(2)] = null);

(statearr_30034_32440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (2))){
var state_30016__$1 = state_30016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30016__$1,(4),from);
} else {
if((state_val_30017 === (11))){
var inst_30001 = (state_30016[(2)]);
var state_30016__$1 = state_30016;
if(cljs.core.truth_(inst_30001)){
var statearr_30035_32445 = state_30016__$1;
(statearr_30035_32445[(1)] = (12));

} else {
var statearr_30036_32447 = state_30016__$1;
(statearr_30036_32447[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (9))){
var state_30016__$1 = state_30016;
var statearr_30037_32449 = state_30016__$1;
(statearr_30037_32449[(2)] = null);

(statearr_30037_32449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (5))){
var state_30016__$1 = state_30016;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30038_32450 = state_30016__$1;
(statearr_30038_32450[(1)] = (8));

} else {
var statearr_30039_32452 = state_30016__$1;
(statearr_30039_32452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (14))){
var inst_30008 = (state_30016[(2)]);
var state_30016__$1 = state_30016;
var statearr_30044_32453 = state_30016__$1;
(statearr_30044_32453[(2)] = inst_30008);

(statearr_30044_32453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (10))){
var inst_29998 = (state_30016[(2)]);
var state_30016__$1 = state_30016;
var statearr_30048_32455 = state_30016__$1;
(statearr_30048_32455[(2)] = inst_29998);

(statearr_30048_32455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (8))){
var inst_29995 = cljs.core.async.close_BANG_(to);
var state_30016__$1 = state_30016;
var statearr_30050_32456 = state_30016__$1;
(statearr_30050_32456[(2)] = inst_29995);

(statearr_30050_32456[(1)] = (10));


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
var cljs$core$async$state_machine__29480__auto__ = null;
var cljs$core$async$state_machine__29480__auto____0 = (function (){
var statearr_30054 = [null,null,null,null,null,null,null,null];
(statearr_30054[(0)] = cljs$core$async$state_machine__29480__auto__);

(statearr_30054[(1)] = (1));

return statearr_30054;
});
var cljs$core$async$state_machine__29480__auto____1 = (function (state_30016){
while(true){
var ret_value__29481__auto__ = (function (){try{while(true){
var result__29482__auto__ = switch__29479__auto__(state_30016);
if(cljs.core.keyword_identical_QMARK_(result__29482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29482__auto__;
}
break;
}
}catch (e30056){if((e30056 instanceof Object)){
var ex__29483__auto__ = e30056;
var statearr_30060_32458 = state_30016;
(statearr_30060_32458[(5)] = ex__29483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30056;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32459 = state_30016;
state_30016 = G__32459;
continue;
} else {
return ret_value__29481__auto__;
}
break;
}
});
cljs$core$async$state_machine__29480__auto__ = function(state_30016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29480__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29480__auto____1.call(this,state_30016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29480__auto____0;
cljs$core$async$state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29480__auto____1;
return cljs$core$async$state_machine__29480__auto__;
})()
})();
var state__29728__auto__ = (function (){var statearr_30066 = (f__29727__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29727__auto__.cljs$core$IFn$_invoke$arity$0() : f__29727__auto__.call(null));
(statearr_30066[(6)] = c__29726__auto___32429);

return statearr_30066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29728__auto__);
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
var process = (function (p__30067){
var vec__30068 = p__30067;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30068,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30068,(1),null);
var job = vec__30068;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29726__auto___32460 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29727__auto__ = (function (){var switch__29479__auto__ = (function (state_30075){
var state_val_30076 = (state_30075[(1)]);
if((state_val_30076 === (1))){
var state_30075__$1 = state_30075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30075__$1,(2),res,v);
} else {
if((state_val_30076 === (2))){
var inst_30072 = (state_30075[(2)]);
var inst_30073 = cljs.core.async.close_BANG_(res);
var state_30075__$1 = (function (){var statearr_30077 = state_30075;
(statearr_30077[(7)] = inst_30072);

return statearr_30077;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30075__$1,inst_30073);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____0 = (function (){
var statearr_30081 = [null,null,null,null,null,null,null,null];
(statearr_30081[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__);

(statearr_30081[(1)] = (1));

return statearr_30081;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____1 = (function (state_30075){
while(true){
var ret_value__29481__auto__ = (function (){try{while(true){
var result__29482__auto__ = switch__29479__auto__(state_30075);
if(cljs.core.keyword_identical_QMARK_(result__29482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29482__auto__;
}
break;
}
}catch (e30082){if((e30082 instanceof Object)){
var ex__29483__auto__ = e30082;
var statearr_30083_32469 = state_30075;
(statearr_30083_32469[(5)] = ex__29483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30082;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32472 = state_30075;
state_30075 = G__32472;
continue;
} else {
return ret_value__29481__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__ = function(state_30075){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____1.call(this,state_30075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__;
})()
})();
var state__29728__auto__ = (function (){var statearr_30084 = (f__29727__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29727__auto__.cljs$core$IFn$_invoke$arity$0() : f__29727__auto__.call(null));
(statearr_30084[(6)] = c__29726__auto___32460);

return statearr_30084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29728__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30085){
var vec__30086 = p__30085;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30086,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30086,(1),null);
var job = vec__30086;
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
var n__4666__auto___32476 = n;
var __32477 = (0);
while(true){
if((__32477 < n__4666__auto___32476)){
var G__30089_32478 = type;
var G__30089_32479__$1 = (((G__30089_32478 instanceof cljs.core.Keyword))?G__30089_32478.fqn:null);
switch (G__30089_32479__$1) {
case "compute":
var c__29726__auto___32481 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32477,c__29726__auto___32481,G__30089_32478,G__30089_32479__$1,n__4666__auto___32476,jobs,results,process,async){
return (function (){
var f__29727__auto__ = (function (){var switch__29479__auto__ = ((function (__32477,c__29726__auto___32481,G__30089_32478,G__30089_32479__$1,n__4666__auto___32476,jobs,results,process,async){
return (function (state_30103){
var state_val_30104 = (state_30103[(1)]);
if((state_val_30104 === (1))){
var state_30103__$1 = state_30103;
var statearr_30105_32482 = state_30103__$1;
(statearr_30105_32482[(2)] = null);

(statearr_30105_32482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (2))){
var state_30103__$1 = state_30103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30103__$1,(4),jobs);
} else {
if((state_val_30104 === (3))){
var inst_30101 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30103__$1,inst_30101);
} else {
if((state_val_30104 === (4))){
var inst_30093 = (state_30103[(2)]);
var inst_30094 = process(inst_30093);
var state_30103__$1 = state_30103;
if(cljs.core.truth_(inst_30094)){
var statearr_30106_32487 = state_30103__$1;
(statearr_30106_32487[(1)] = (5));

} else {
var statearr_30107_32488 = state_30103__$1;
(statearr_30107_32488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (5))){
var state_30103__$1 = state_30103;
var statearr_30108_32490 = state_30103__$1;
(statearr_30108_32490[(2)] = null);

(statearr_30108_32490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (6))){
var state_30103__$1 = state_30103;
var statearr_30109_32491 = state_30103__$1;
(statearr_30109_32491[(2)] = null);

(statearr_30109_32491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (7))){
var inst_30099 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30110_32492 = state_30103__$1;
(statearr_30110_32492[(2)] = inst_30099);

(statearr_30110_32492[(1)] = (3));


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
});})(__32477,c__29726__auto___32481,G__30089_32478,G__30089_32479__$1,n__4666__auto___32476,jobs,results,process,async))
;
return ((function (__32477,switch__29479__auto__,c__29726__auto___32481,G__30089_32478,G__30089_32479__$1,n__4666__auto___32476,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____0 = (function (){
var statearr_30111 = [null,null,null,null,null,null,null];
(statearr_30111[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__);

(statearr_30111[(1)] = (1));

return statearr_30111;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____1 = (function (state_30103){
while(true){
var ret_value__29481__auto__ = (function (){try{while(true){
var result__29482__auto__ = switch__29479__auto__(state_30103);
if(cljs.core.keyword_identical_QMARK_(result__29482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29482__auto__;
}
break;
}
}catch (e30112){if((e30112 instanceof Object)){
var ex__29483__auto__ = e30112;
var statearr_30113_32498 = state_30103;
(statearr_30113_32498[(5)] = ex__29483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30112;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32499 = state_30103;
state_30103 = G__32499;
continue;
} else {
return ret_value__29481__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__ = function(state_30103){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____1.call(this,state_30103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__;
})()
;})(__32477,switch__29479__auto__,c__29726__auto___32481,G__30089_32478,G__30089_32479__$1,n__4666__auto___32476,jobs,results,process,async))
})();
var state__29728__auto__ = (function (){var statearr_30122 = (f__29727__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29727__auto__.cljs$core$IFn$_invoke$arity$0() : f__29727__auto__.call(null));
(statearr_30122[(6)] = c__29726__auto___32481);

return statearr_30122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29728__auto__);
});})(__32477,c__29726__auto___32481,G__30089_32478,G__30089_32479__$1,n__4666__auto___32476,jobs,results,process,async))
);


break;
case "async":
var c__29726__auto___32500 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32477,c__29726__auto___32500,G__30089_32478,G__30089_32479__$1,n__4666__auto___32476,jobs,results,process,async){
return (function (){
var f__29727__auto__ = (function (){var switch__29479__auto__ = ((function (__32477,c__29726__auto___32500,G__30089_32478,G__30089_32479__$1,n__4666__auto___32476,jobs,results,process,async){
return (function (state_30139){
var state_val_30140 = (state_30139[(1)]);
if((state_val_30140 === (1))){
var state_30139__$1 = state_30139;
var statearr_30141_32503 = state_30139__$1;
(statearr_30141_32503[(2)] = null);

(statearr_30141_32503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30140 === (2))){
var state_30139__$1 = state_30139;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30139__$1,(4),jobs);
} else {
if((state_val_30140 === (3))){
var inst_30137 = (state_30139[(2)]);
var state_30139__$1 = state_30139;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30139__$1,inst_30137);
} else {
if((state_val_30140 === (4))){
var inst_30129 = (state_30139[(2)]);
var inst_30130 = async(inst_30129);
var state_30139__$1 = state_30139;
if(cljs.core.truth_(inst_30130)){
var statearr_30148_32509 = state_30139__$1;
(statearr_30148_32509[(1)] = (5));

} else {
var statearr_30149_32510 = state_30139__$1;
(statearr_30149_32510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30140 === (5))){
var state_30139__$1 = state_30139;
var statearr_30150_32512 = state_30139__$1;
(statearr_30150_32512[(2)] = null);

(statearr_30150_32512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30140 === (6))){
var state_30139__$1 = state_30139;
var statearr_30151_32514 = state_30139__$1;
(statearr_30151_32514[(2)] = null);

(statearr_30151_32514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30140 === (7))){
var inst_30135 = (state_30139[(2)]);
var state_30139__$1 = state_30139;
var statearr_30152_32516 = state_30139__$1;
(statearr_30152_32516[(2)] = inst_30135);

(statearr_30152_32516[(1)] = (3));


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
});})(__32477,c__29726__auto___32500,G__30089_32478,G__30089_32479__$1,n__4666__auto___32476,jobs,results,process,async))
;
return ((function (__32477,switch__29479__auto__,c__29726__auto___32500,G__30089_32478,G__30089_32479__$1,n__4666__auto___32476,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____0 = (function (){
var statearr_30153 = [null,null,null,null,null,null,null];
(statearr_30153[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__);

(statearr_30153[(1)] = (1));

return statearr_30153;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____1 = (function (state_30139){
while(true){
var ret_value__29481__auto__ = (function (){try{while(true){
var result__29482__auto__ = switch__29479__auto__(state_30139);
if(cljs.core.keyword_identical_QMARK_(result__29482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29482__auto__;
}
break;
}
}catch (e30154){if((e30154 instanceof Object)){
var ex__29483__auto__ = e30154;
var statearr_30155_32519 = state_30139;
(statearr_30155_32519[(5)] = ex__29483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30154;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32520 = state_30139;
state_30139 = G__32520;
continue;
} else {
return ret_value__29481__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__ = function(state_30139){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____1.call(this,state_30139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__;
})()
;})(__32477,switch__29479__auto__,c__29726__auto___32500,G__30089_32478,G__30089_32479__$1,n__4666__auto___32476,jobs,results,process,async))
})();
var state__29728__auto__ = (function (){var statearr_30156 = (f__29727__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29727__auto__.cljs$core$IFn$_invoke$arity$0() : f__29727__auto__.call(null));
(statearr_30156[(6)] = c__29726__auto___32500);

return statearr_30156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29728__auto__);
});})(__32477,c__29726__auto___32500,G__30089_32478,G__30089_32479__$1,n__4666__auto___32476,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30089_32479__$1)].join('')));

}

var G__32523 = (__32477 + (1));
__32477 = G__32523;
continue;
} else {
}
break;
}

var c__29726__auto___32524 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29727__auto__ = (function (){var switch__29479__auto__ = (function (state_30185){
var state_val_30186 = (state_30185[(1)]);
if((state_val_30186 === (7))){
var inst_30181 = (state_30185[(2)]);
var state_30185__$1 = state_30185;
var statearr_30187_32529 = state_30185__$1;
(statearr_30187_32529[(2)] = inst_30181);

(statearr_30187_32529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30186 === (1))){
var state_30185__$1 = state_30185;
var statearr_30188_32530 = state_30185__$1;
(statearr_30188_32530[(2)] = null);

(statearr_30188_32530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30186 === (4))){
var inst_30161 = (state_30185[(7)]);
var inst_30161__$1 = (state_30185[(2)]);
var inst_30162 = (inst_30161__$1 == null);
var state_30185__$1 = (function (){var statearr_30190 = state_30185;
(statearr_30190[(7)] = inst_30161__$1);

return statearr_30190;
})();
if(cljs.core.truth_(inst_30162)){
var statearr_30191_32533 = state_30185__$1;
(statearr_30191_32533[(1)] = (5));

} else {
var statearr_30192_32534 = state_30185__$1;
(statearr_30192_32534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30186 === (6))){
var inst_30166 = (state_30185[(8)]);
var inst_30161 = (state_30185[(7)]);
var inst_30166__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30170 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30172 = [inst_30161,inst_30166__$1];
var inst_30173 = (new cljs.core.PersistentVector(null,2,(5),inst_30170,inst_30172,null));
var state_30185__$1 = (function (){var statearr_30193 = state_30185;
(statearr_30193[(8)] = inst_30166__$1);

return statearr_30193;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30185__$1,(8),jobs,inst_30173);
} else {
if((state_val_30186 === (3))){
var inst_30183 = (state_30185[(2)]);
var state_30185__$1 = state_30185;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30185__$1,inst_30183);
} else {
if((state_val_30186 === (2))){
var state_30185__$1 = state_30185;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30185__$1,(4),from);
} else {
if((state_val_30186 === (9))){
var inst_30178 = (state_30185[(2)]);
var state_30185__$1 = (function (){var statearr_30194 = state_30185;
(statearr_30194[(9)] = inst_30178);

return statearr_30194;
})();
var statearr_30195_32536 = state_30185__$1;
(statearr_30195_32536[(2)] = null);

(statearr_30195_32536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30186 === (5))){
var inst_30164 = cljs.core.async.close_BANG_(jobs);
var state_30185__$1 = state_30185;
var statearr_30196_32537 = state_30185__$1;
(statearr_30196_32537[(2)] = inst_30164);

(statearr_30196_32537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30186 === (8))){
var inst_30166 = (state_30185[(8)]);
var inst_30175 = (state_30185[(2)]);
var state_30185__$1 = (function (){var statearr_30197 = state_30185;
(statearr_30197[(10)] = inst_30175);

return statearr_30197;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30185__$1,(9),results,inst_30166);
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
var cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____0 = (function (){
var statearr_30199 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30199[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__);

(statearr_30199[(1)] = (1));

return statearr_30199;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____1 = (function (state_30185){
while(true){
var ret_value__29481__auto__ = (function (){try{while(true){
var result__29482__auto__ = switch__29479__auto__(state_30185);
if(cljs.core.keyword_identical_QMARK_(result__29482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29482__auto__;
}
break;
}
}catch (e30200){if((e30200 instanceof Object)){
var ex__29483__auto__ = e30200;
var statearr_30201_32541 = state_30185;
(statearr_30201_32541[(5)] = ex__29483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30200;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32542 = state_30185;
state_30185 = G__32542;
continue;
} else {
return ret_value__29481__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__ = function(state_30185){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____1.call(this,state_30185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__;
})()
})();
var state__29728__auto__ = (function (){var statearr_30203 = (f__29727__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29727__auto__.cljs$core$IFn$_invoke$arity$0() : f__29727__auto__.call(null));
(statearr_30203[(6)] = c__29726__auto___32524);

return statearr_30203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29728__auto__);
}));


var c__29726__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29727__auto__ = (function (){var switch__29479__auto__ = (function (state_30267){
var state_val_30268 = (state_30267[(1)]);
if((state_val_30268 === (7))){
var inst_30237 = (state_30267[(2)]);
var state_30267__$1 = state_30267;
var statearr_30273_32554 = state_30267__$1;
(statearr_30273_32554[(2)] = inst_30237);

(statearr_30273_32554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30268 === (20))){
var state_30267__$1 = state_30267;
var statearr_30274_32556 = state_30267__$1;
(statearr_30274_32556[(2)] = null);

(statearr_30274_32556[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30268 === (1))){
var state_30267__$1 = state_30267;
var statearr_30275_32557 = state_30267__$1;
(statearr_30275_32557[(2)] = null);

(statearr_30275_32557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30268 === (4))){
var inst_30206 = (state_30267[(7)]);
var inst_30206__$1 = (state_30267[(2)]);
var inst_30207 = (inst_30206__$1 == null);
var state_30267__$1 = (function (){var statearr_30276 = state_30267;
(statearr_30276[(7)] = inst_30206__$1);

return statearr_30276;
})();
if(cljs.core.truth_(inst_30207)){
var statearr_30280_32560 = state_30267__$1;
(statearr_30280_32560[(1)] = (5));

} else {
var statearr_30281_32561 = state_30267__$1;
(statearr_30281_32561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30268 === (15))){
var inst_30219 = (state_30267[(8)]);
var state_30267__$1 = state_30267;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30267__$1,(18),to,inst_30219);
} else {
if((state_val_30268 === (21))){
var inst_30232 = (state_30267[(2)]);
var state_30267__$1 = state_30267;
var statearr_30282_32563 = state_30267__$1;
(statearr_30282_32563[(2)] = inst_30232);

(statearr_30282_32563[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30268 === (13))){
var inst_30234 = (state_30267[(2)]);
var state_30267__$1 = (function (){var statearr_30283 = state_30267;
(statearr_30283[(9)] = inst_30234);

return statearr_30283;
})();
var statearr_30284_32565 = state_30267__$1;
(statearr_30284_32565[(2)] = null);

(statearr_30284_32565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30268 === (6))){
var inst_30206 = (state_30267[(7)]);
var state_30267__$1 = state_30267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30267__$1,(11),inst_30206);
} else {
if((state_val_30268 === (17))){
var inst_30227 = (state_30267[(2)]);
var state_30267__$1 = state_30267;
if(cljs.core.truth_(inst_30227)){
var statearr_30285_32568 = state_30267__$1;
(statearr_30285_32568[(1)] = (19));

} else {
var statearr_30286_32569 = state_30267__$1;
(statearr_30286_32569[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30268 === (3))){
var inst_30239 = (state_30267[(2)]);
var state_30267__$1 = state_30267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30267__$1,inst_30239);
} else {
if((state_val_30268 === (12))){
var inst_30216 = (state_30267[(10)]);
var state_30267__$1 = state_30267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30267__$1,(14),inst_30216);
} else {
if((state_val_30268 === (2))){
var state_30267__$1 = state_30267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30267__$1,(4),results);
} else {
if((state_val_30268 === (19))){
var state_30267__$1 = state_30267;
var statearr_30287_32570 = state_30267__$1;
(statearr_30287_32570[(2)] = null);

(statearr_30287_32570[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30268 === (11))){
var inst_30216 = (state_30267[(2)]);
var state_30267__$1 = (function (){var statearr_30288 = state_30267;
(statearr_30288[(10)] = inst_30216);

return statearr_30288;
})();
var statearr_30289_32571 = state_30267__$1;
(statearr_30289_32571[(2)] = null);

(statearr_30289_32571[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30268 === (9))){
var state_30267__$1 = state_30267;
var statearr_30290_32572 = state_30267__$1;
(statearr_30290_32572[(2)] = null);

(statearr_30290_32572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30268 === (5))){
var state_30267__$1 = state_30267;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30291_32573 = state_30267__$1;
(statearr_30291_32573[(1)] = (8));

} else {
var statearr_30292_32574 = state_30267__$1;
(statearr_30292_32574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30268 === (14))){
var inst_30219 = (state_30267[(8)]);
var inst_30219__$1 = (state_30267[(2)]);
var inst_30220 = (inst_30219__$1 == null);
var inst_30221 = cljs.core.not(inst_30220);
var state_30267__$1 = (function (){var statearr_30293 = state_30267;
(statearr_30293[(8)] = inst_30219__$1);

return statearr_30293;
})();
if(inst_30221){
var statearr_30294_32575 = state_30267__$1;
(statearr_30294_32575[(1)] = (15));

} else {
var statearr_30295_32576 = state_30267__$1;
(statearr_30295_32576[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30268 === (16))){
var state_30267__$1 = state_30267;
var statearr_30296_32577 = state_30267__$1;
(statearr_30296_32577[(2)] = false);

(statearr_30296_32577[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30268 === (10))){
var inst_30213 = (state_30267[(2)]);
var state_30267__$1 = state_30267;
var statearr_30302_32578 = state_30267__$1;
(statearr_30302_32578[(2)] = inst_30213);

(statearr_30302_32578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30268 === (18))){
var inst_30224 = (state_30267[(2)]);
var state_30267__$1 = state_30267;
var statearr_30304_32579 = state_30267__$1;
(statearr_30304_32579[(2)] = inst_30224);

(statearr_30304_32579[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30268 === (8))){
var inst_30210 = cljs.core.async.close_BANG_(to);
var state_30267__$1 = state_30267;
var statearr_30306_32580 = state_30267__$1;
(statearr_30306_32580[(2)] = inst_30210);

(statearr_30306_32580[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____0 = (function (){
var statearr_30310 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30310[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__);

(statearr_30310[(1)] = (1));

return statearr_30310;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____1 = (function (state_30267){
while(true){
var ret_value__29481__auto__ = (function (){try{while(true){
var result__29482__auto__ = switch__29479__auto__(state_30267);
if(cljs.core.keyword_identical_QMARK_(result__29482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29482__auto__;
}
break;
}
}catch (e30311){if((e30311 instanceof Object)){
var ex__29483__auto__ = e30311;
var statearr_30312_32587 = state_30267;
(statearr_30312_32587[(5)] = ex__29483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30311;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32588 = state_30267;
state_30267 = G__32588;
continue;
} else {
return ret_value__29481__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__ = function(state_30267){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____1.call(this,state_30267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29480__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29480__auto__;
})()
})();
var state__29728__auto__ = (function (){var statearr_30313 = (f__29727__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29727__auto__.cljs$core$IFn$_invoke$arity$0() : f__29727__auto__.call(null));
(statearr_30313[(6)] = c__29726__auto__);

return statearr_30313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29728__auto__);
}));

return c__29726__auto__;
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
var G__30316 = arguments.length;
switch (G__30316) {
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
var G__30318 = arguments.length;
switch (G__30318) {
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
var G__30320 = arguments.length;
switch (G__30320) {
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
var c__29726__auto___32603 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29727__auto__ = (function (){var switch__29479__auto__ = (function (state_30346){
var state_val_30347 = (state_30346[(1)]);
if((state_val_30347 === (7))){
var inst_30342 = (state_30346[(2)]);
var state_30346__$1 = state_30346;
var statearr_30354_32604 = state_30346__$1;
(statearr_30354_32604[(2)] = inst_30342);

(statearr_30354_32604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (1))){
var state_30346__$1 = state_30346;
var statearr_30355_32605 = state_30346__$1;
(statearr_30355_32605[(2)] = null);

(statearr_30355_32605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (4))){
var inst_30323 = (state_30346[(7)]);
var inst_30323__$1 = (state_30346[(2)]);
var inst_30324 = (inst_30323__$1 == null);
var state_30346__$1 = (function (){var statearr_30359 = state_30346;
(statearr_30359[(7)] = inst_30323__$1);

return statearr_30359;
})();
if(cljs.core.truth_(inst_30324)){
var statearr_30360_32606 = state_30346__$1;
(statearr_30360_32606[(1)] = (5));

} else {
var statearr_30361_32607 = state_30346__$1;
(statearr_30361_32607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (13))){
var state_30346__$1 = state_30346;
var statearr_30365_32608 = state_30346__$1;
(statearr_30365_32608[(2)] = null);

(statearr_30365_32608[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (6))){
var inst_30323 = (state_30346[(7)]);
var inst_30329 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30323) : p.call(null,inst_30323));
var state_30346__$1 = state_30346;
if(cljs.core.truth_(inst_30329)){
var statearr_30369_32609 = state_30346__$1;
(statearr_30369_32609[(1)] = (9));

} else {
var statearr_30370_32610 = state_30346__$1;
(statearr_30370_32610[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (3))){
var inst_30344 = (state_30346[(2)]);
var state_30346__$1 = state_30346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30346__$1,inst_30344);
} else {
if((state_val_30347 === (12))){
var state_30346__$1 = state_30346;
var statearr_30380_32611 = state_30346__$1;
(statearr_30380_32611[(2)] = null);

(statearr_30380_32611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (2))){
var state_30346__$1 = state_30346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30346__$1,(4),ch);
} else {
if((state_val_30347 === (11))){
var inst_30323 = (state_30346[(7)]);
var inst_30333 = (state_30346[(2)]);
var state_30346__$1 = state_30346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30346__$1,(8),inst_30333,inst_30323);
} else {
if((state_val_30347 === (9))){
var state_30346__$1 = state_30346;
var statearr_30386_32612 = state_30346__$1;
(statearr_30386_32612[(2)] = tc);

(statearr_30386_32612[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (5))){
var inst_30326 = cljs.core.async.close_BANG_(tc);
var inst_30327 = cljs.core.async.close_BANG_(fc);
var state_30346__$1 = (function (){var statearr_30390 = state_30346;
(statearr_30390[(8)] = inst_30326);

return statearr_30390;
})();
var statearr_30392_32613 = state_30346__$1;
(statearr_30392_32613[(2)] = inst_30327);

(statearr_30392_32613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (14))){
var inst_30340 = (state_30346[(2)]);
var state_30346__$1 = state_30346;
var statearr_30393_32614 = state_30346__$1;
(statearr_30393_32614[(2)] = inst_30340);

(statearr_30393_32614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (10))){
var state_30346__$1 = state_30346;
var statearr_30398_32615 = state_30346__$1;
(statearr_30398_32615[(2)] = fc);

(statearr_30398_32615[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30347 === (8))){
var inst_30335 = (state_30346[(2)]);
var state_30346__$1 = state_30346;
if(cljs.core.truth_(inst_30335)){
var statearr_30399_32616 = state_30346__$1;
(statearr_30399_32616[(1)] = (12));

} else {
var statearr_30403_32617 = state_30346__$1;
(statearr_30403_32617[(1)] = (13));

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
var cljs$core$async$state_machine__29480__auto__ = null;
var cljs$core$async$state_machine__29480__auto____0 = (function (){
var statearr_30405 = [null,null,null,null,null,null,null,null,null];
(statearr_30405[(0)] = cljs$core$async$state_machine__29480__auto__);

(statearr_30405[(1)] = (1));

return statearr_30405;
});
var cljs$core$async$state_machine__29480__auto____1 = (function (state_30346){
while(true){
var ret_value__29481__auto__ = (function (){try{while(true){
var result__29482__auto__ = switch__29479__auto__(state_30346);
if(cljs.core.keyword_identical_QMARK_(result__29482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29482__auto__;
}
break;
}
}catch (e30408){if((e30408 instanceof Object)){
var ex__29483__auto__ = e30408;
var statearr_30412_32618 = state_30346;
(statearr_30412_32618[(5)] = ex__29483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30408;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32619 = state_30346;
state_30346 = G__32619;
continue;
} else {
return ret_value__29481__auto__;
}
break;
}
});
cljs$core$async$state_machine__29480__auto__ = function(state_30346){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29480__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29480__auto____1.call(this,state_30346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29480__auto____0;
cljs$core$async$state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29480__auto____1;
return cljs$core$async$state_machine__29480__auto__;
})()
})();
var state__29728__auto__ = (function (){var statearr_30419 = (f__29727__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29727__auto__.cljs$core$IFn$_invoke$arity$0() : f__29727__auto__.call(null));
(statearr_30419[(6)] = c__29726__auto___32603);

return statearr_30419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29728__auto__);
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
var c__29726__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29727__auto__ = (function (){var switch__29479__auto__ = (function (state_30454){
var state_val_30455 = (state_30454[(1)]);
if((state_val_30455 === (7))){
var inst_30450 = (state_30454[(2)]);
var state_30454__$1 = state_30454;
var statearr_30464_32620 = state_30454__$1;
(statearr_30464_32620[(2)] = inst_30450);

(statearr_30464_32620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (1))){
var inst_30428 = init;
var state_30454__$1 = (function (){var statearr_30468 = state_30454;
(statearr_30468[(7)] = inst_30428);

return statearr_30468;
})();
var statearr_30469_32621 = state_30454__$1;
(statearr_30469_32621[(2)] = null);

(statearr_30469_32621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (4))){
var inst_30434 = (state_30454[(8)]);
var inst_30434__$1 = (state_30454[(2)]);
var inst_30435 = (inst_30434__$1 == null);
var state_30454__$1 = (function (){var statearr_30482 = state_30454;
(statearr_30482[(8)] = inst_30434__$1);

return statearr_30482;
})();
if(cljs.core.truth_(inst_30435)){
var statearr_30483_32622 = state_30454__$1;
(statearr_30483_32622[(1)] = (5));

} else {
var statearr_30484_32623 = state_30454__$1;
(statearr_30484_32623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (6))){
var inst_30428 = (state_30454[(7)]);
var inst_30434 = (state_30454[(8)]);
var inst_30438 = (state_30454[(9)]);
var inst_30438__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30428,inst_30434) : f.call(null,inst_30428,inst_30434));
var inst_30439 = cljs.core.reduced_QMARK_(inst_30438__$1);
var state_30454__$1 = (function (){var statearr_30485 = state_30454;
(statearr_30485[(9)] = inst_30438__$1);

return statearr_30485;
})();
if(inst_30439){
var statearr_30486_32624 = state_30454__$1;
(statearr_30486_32624[(1)] = (8));

} else {
var statearr_30487_32625 = state_30454__$1;
(statearr_30487_32625[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (3))){
var inst_30452 = (state_30454[(2)]);
var state_30454__$1 = state_30454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30454__$1,inst_30452);
} else {
if((state_val_30455 === (2))){
var state_30454__$1 = state_30454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30454__$1,(4),ch);
} else {
if((state_val_30455 === (9))){
var inst_30438 = (state_30454[(9)]);
var inst_30428 = inst_30438;
var state_30454__$1 = (function (){var statearr_30489 = state_30454;
(statearr_30489[(7)] = inst_30428);

return statearr_30489;
})();
var statearr_30490_32626 = state_30454__$1;
(statearr_30490_32626[(2)] = null);

(statearr_30490_32626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (5))){
var inst_30428 = (state_30454[(7)]);
var state_30454__$1 = state_30454;
var statearr_30491_32627 = state_30454__$1;
(statearr_30491_32627[(2)] = inst_30428);

(statearr_30491_32627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (10))){
var inst_30448 = (state_30454[(2)]);
var state_30454__$1 = state_30454;
var statearr_30492_32628 = state_30454__$1;
(statearr_30492_32628[(2)] = inst_30448);

(statearr_30492_32628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30455 === (8))){
var inst_30438 = (state_30454[(9)]);
var inst_30444 = cljs.core.deref(inst_30438);
var state_30454__$1 = state_30454;
var statearr_30493_32629 = state_30454__$1;
(statearr_30493_32629[(2)] = inst_30444);

(statearr_30493_32629[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__29480__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29480__auto____0 = (function (){
var statearr_30494 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30494[(0)] = cljs$core$async$reduce_$_state_machine__29480__auto__);

(statearr_30494[(1)] = (1));

return statearr_30494;
});
var cljs$core$async$reduce_$_state_machine__29480__auto____1 = (function (state_30454){
while(true){
var ret_value__29481__auto__ = (function (){try{while(true){
var result__29482__auto__ = switch__29479__auto__(state_30454);
if(cljs.core.keyword_identical_QMARK_(result__29482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29482__auto__;
}
break;
}
}catch (e30496){if((e30496 instanceof Object)){
var ex__29483__auto__ = e30496;
var statearr_30497_32630 = state_30454;
(statearr_30497_32630[(5)] = ex__29483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30496;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32631 = state_30454;
state_30454 = G__32631;
continue;
} else {
return ret_value__29481__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29480__auto__ = function(state_30454){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29480__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29480__auto____1.call(this,state_30454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29480__auto____0;
cljs$core$async$reduce_$_state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29480__auto____1;
return cljs$core$async$reduce_$_state_machine__29480__auto__;
})()
})();
var state__29728__auto__ = (function (){var statearr_30499 = (f__29727__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29727__auto__.cljs$core$IFn$_invoke$arity$0() : f__29727__auto__.call(null));
(statearr_30499[(6)] = c__29726__auto__);

return statearr_30499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29728__auto__);
}));

return c__29726__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29726__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29727__auto__ = (function (){var switch__29479__auto__ = (function (state_30511){
var state_val_30512 = (state_30511[(1)]);
if((state_val_30512 === (1))){
var inst_30506 = cljs.core.async.reduce(f__$1,init,ch);
var state_30511__$1 = state_30511;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30511__$1,(2),inst_30506);
} else {
if((state_val_30512 === (2))){
var inst_30508 = (state_30511[(2)]);
var inst_30509 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30508) : f__$1.call(null,inst_30508));
var state_30511__$1 = state_30511;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30511__$1,inst_30509);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29480__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29480__auto____0 = (function (){
var statearr_30537 = [null,null,null,null,null,null,null];
(statearr_30537[(0)] = cljs$core$async$transduce_$_state_machine__29480__auto__);

(statearr_30537[(1)] = (1));

return statearr_30537;
});
var cljs$core$async$transduce_$_state_machine__29480__auto____1 = (function (state_30511){
while(true){
var ret_value__29481__auto__ = (function (){try{while(true){
var result__29482__auto__ = switch__29479__auto__(state_30511);
if(cljs.core.keyword_identical_QMARK_(result__29482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29482__auto__;
}
break;
}
}catch (e30541){if((e30541 instanceof Object)){
var ex__29483__auto__ = e30541;
var statearr_30542_32634 = state_30511;
(statearr_30542_32634[(5)] = ex__29483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30541;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32635 = state_30511;
state_30511 = G__32635;
continue;
} else {
return ret_value__29481__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29480__auto__ = function(state_30511){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29480__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29480__auto____1.call(this,state_30511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29480__auto____0;
cljs$core$async$transduce_$_state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29480__auto____1;
return cljs$core$async$transduce_$_state_machine__29480__auto__;
})()
})();
var state__29728__auto__ = (function (){var statearr_30543 = (f__29727__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29727__auto__.cljs$core$IFn$_invoke$arity$0() : f__29727__auto__.call(null));
(statearr_30543[(6)] = c__29726__auto__);

return statearr_30543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29728__auto__);
}));

return c__29726__auto__;
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
var G__30548 = arguments.length;
switch (G__30548) {
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
var c__29726__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29727__auto__ = (function (){var switch__29479__auto__ = (function (state_30593){
var state_val_30594 = (state_30593[(1)]);
if((state_val_30594 === (7))){
var inst_30574 = (state_30593[(2)]);
var state_30593__$1 = state_30593;
var statearr_30599_32638 = state_30593__$1;
(statearr_30599_32638[(2)] = inst_30574);

(statearr_30599_32638[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (1))){
var inst_30564 = cljs.core.seq(coll);
var inst_30565 = inst_30564;
var state_30593__$1 = (function (){var statearr_30600 = state_30593;
(statearr_30600[(7)] = inst_30565);

return statearr_30600;
})();
var statearr_30601_32640 = state_30593__$1;
(statearr_30601_32640[(2)] = null);

(statearr_30601_32640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (4))){
var inst_30565 = (state_30593[(7)]);
var inst_30572 = cljs.core.first(inst_30565);
var state_30593__$1 = state_30593;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30593__$1,(7),ch,inst_30572);
} else {
if((state_val_30594 === (13))){
var inst_30587 = (state_30593[(2)]);
var state_30593__$1 = state_30593;
var statearr_30602_32641 = state_30593__$1;
(statearr_30602_32641[(2)] = inst_30587);

(statearr_30602_32641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (6))){
var inst_30577 = (state_30593[(2)]);
var state_30593__$1 = state_30593;
if(cljs.core.truth_(inst_30577)){
var statearr_30603_32642 = state_30593__$1;
(statearr_30603_32642[(1)] = (8));

} else {
var statearr_30604_32643 = state_30593__$1;
(statearr_30604_32643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (3))){
var inst_30591 = (state_30593[(2)]);
var state_30593__$1 = state_30593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30593__$1,inst_30591);
} else {
if((state_val_30594 === (12))){
var state_30593__$1 = state_30593;
var statearr_30605_32644 = state_30593__$1;
(statearr_30605_32644[(2)] = null);

(statearr_30605_32644[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (2))){
var inst_30565 = (state_30593[(7)]);
var state_30593__$1 = state_30593;
if(cljs.core.truth_(inst_30565)){
var statearr_30606_32647 = state_30593__$1;
(statearr_30606_32647[(1)] = (4));

} else {
var statearr_30607_32648 = state_30593__$1;
(statearr_30607_32648[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (11))){
var inst_30584 = cljs.core.async.close_BANG_(ch);
var state_30593__$1 = state_30593;
var statearr_30608_32649 = state_30593__$1;
(statearr_30608_32649[(2)] = inst_30584);

(statearr_30608_32649[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (9))){
var state_30593__$1 = state_30593;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30609_32650 = state_30593__$1;
(statearr_30609_32650[(1)] = (11));

} else {
var statearr_30610_32651 = state_30593__$1;
(statearr_30610_32651[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (5))){
var inst_30565 = (state_30593[(7)]);
var state_30593__$1 = state_30593;
var statearr_30611_32652 = state_30593__$1;
(statearr_30611_32652[(2)] = inst_30565);

(statearr_30611_32652[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (10))){
var inst_30589 = (state_30593[(2)]);
var state_30593__$1 = state_30593;
var statearr_30612_32653 = state_30593__$1;
(statearr_30612_32653[(2)] = inst_30589);

(statearr_30612_32653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30594 === (8))){
var inst_30565 = (state_30593[(7)]);
var inst_30579 = cljs.core.next(inst_30565);
var inst_30565__$1 = inst_30579;
var state_30593__$1 = (function (){var statearr_30613 = state_30593;
(statearr_30613[(7)] = inst_30565__$1);

return statearr_30613;
})();
var statearr_30614_32655 = state_30593__$1;
(statearr_30614_32655[(2)] = null);

(statearr_30614_32655[(1)] = (2));


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
var cljs$core$async$state_machine__29480__auto__ = null;
var cljs$core$async$state_machine__29480__auto____0 = (function (){
var statearr_30615 = [null,null,null,null,null,null,null,null];
(statearr_30615[(0)] = cljs$core$async$state_machine__29480__auto__);

(statearr_30615[(1)] = (1));

return statearr_30615;
});
var cljs$core$async$state_machine__29480__auto____1 = (function (state_30593){
while(true){
var ret_value__29481__auto__ = (function (){try{while(true){
var result__29482__auto__ = switch__29479__auto__(state_30593);
if(cljs.core.keyword_identical_QMARK_(result__29482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29482__auto__;
}
break;
}
}catch (e30616){if((e30616 instanceof Object)){
var ex__29483__auto__ = e30616;
var statearr_30617_32657 = state_30593;
(statearr_30617_32657[(5)] = ex__29483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30616;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32658 = state_30593;
state_30593 = G__32658;
continue;
} else {
return ret_value__29481__auto__;
}
break;
}
});
cljs$core$async$state_machine__29480__auto__ = function(state_30593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29480__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29480__auto____1.call(this,state_30593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29480__auto____0;
cljs$core$async$state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29480__auto____1;
return cljs$core$async$state_machine__29480__auto__;
})()
})();
var state__29728__auto__ = (function (){var statearr_30618 = (f__29727__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29727__auto__.cljs$core$IFn$_invoke$arity$0() : f__29727__auto__.call(null));
(statearr_30618[(6)] = c__29726__auto__);

return statearr_30618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29728__auto__);
}));

return c__29726__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30624 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30624 = (function (ch,cs,meta30625){
this.ch = ch;
this.cs = cs;
this.meta30625 = meta30625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30626,meta30625__$1){
var self__ = this;
var _30626__$1 = this;
return (new cljs.core.async.t_cljs$core$async30624(self__.ch,self__.cs,meta30625__$1));
}));

(cljs.core.async.t_cljs$core$async30624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30626){
var self__ = this;
var _30626__$1 = this;
return self__.meta30625;
}));

(cljs.core.async.t_cljs$core$async30624.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30624.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30624.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30624.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30624.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30624.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30624.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30625","meta30625",141858721,null)], null);
}));

(cljs.core.async.t_cljs$core$async30624.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30624.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30624");

(cljs.core.async.t_cljs$core$async30624.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30624");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30624.
 */
cljs.core.async.__GT_t_cljs$core$async30624 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30624(ch__$1,cs__$1,meta30625){
return (new cljs.core.async.t_cljs$core$async30624(ch__$1,cs__$1,meta30625));
});

}

return (new cljs.core.async.t_cljs$core$async30624(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29726__auto___32673 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29727__auto__ = (function (){var switch__29479__auto__ = (function (state_30790){
var state_val_30791 = (state_30790[(1)]);
if((state_val_30791 === (7))){
var inst_30786 = (state_30790[(2)]);
var state_30790__$1 = state_30790;
var statearr_30792_32674 = state_30790__$1;
(statearr_30792_32674[(2)] = inst_30786);

(statearr_30792_32674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (20))){
var inst_30689 = (state_30790[(7)]);
var inst_30701 = cljs.core.first(inst_30689);
var inst_30702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30701,(0),null);
var inst_30703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30701,(1),null);
var state_30790__$1 = (function (){var statearr_30793 = state_30790;
(statearr_30793[(8)] = inst_30702);

return statearr_30793;
})();
if(cljs.core.truth_(inst_30703)){
var statearr_30797_32675 = state_30790__$1;
(statearr_30797_32675[(1)] = (22));

} else {
var statearr_30798_32676 = state_30790__$1;
(statearr_30798_32676[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (27))){
var inst_30733 = (state_30790[(9)]);
var inst_30658 = (state_30790[(10)]);
var inst_30731 = (state_30790[(11)]);
var inst_30738 = (state_30790[(12)]);
var inst_30738__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30731,inst_30733);
var inst_30739 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30738__$1,inst_30658,done);
var state_30790__$1 = (function (){var statearr_30802 = state_30790;
(statearr_30802[(12)] = inst_30738__$1);

return statearr_30802;
})();
if(cljs.core.truth_(inst_30739)){
var statearr_30803_32678 = state_30790__$1;
(statearr_30803_32678[(1)] = (30));

} else {
var statearr_30805_32679 = state_30790__$1;
(statearr_30805_32679[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (1))){
var state_30790__$1 = state_30790;
var statearr_30810_32680 = state_30790__$1;
(statearr_30810_32680[(2)] = null);

(statearr_30810_32680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (24))){
var inst_30689 = (state_30790[(7)]);
var inst_30708 = (state_30790[(2)]);
var inst_30709 = cljs.core.next(inst_30689);
var inst_30667 = inst_30709;
var inst_30668 = null;
var inst_30669 = (0);
var inst_30670 = (0);
var state_30790__$1 = (function (){var statearr_30813 = state_30790;
(statearr_30813[(13)] = inst_30668);

(statearr_30813[(14)] = inst_30669);

(statearr_30813[(15)] = inst_30667);

(statearr_30813[(16)] = inst_30670);

(statearr_30813[(17)] = inst_30708);

return statearr_30813;
})();
var statearr_30815_32681 = state_30790__$1;
(statearr_30815_32681[(2)] = null);

(statearr_30815_32681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (39))){
var state_30790__$1 = state_30790;
var statearr_30819_32682 = state_30790__$1;
(statearr_30819_32682[(2)] = null);

(statearr_30819_32682[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (4))){
var inst_30658 = (state_30790[(10)]);
var inst_30658__$1 = (state_30790[(2)]);
var inst_30659 = (inst_30658__$1 == null);
var state_30790__$1 = (function (){var statearr_30820 = state_30790;
(statearr_30820[(10)] = inst_30658__$1);

return statearr_30820;
})();
if(cljs.core.truth_(inst_30659)){
var statearr_30821_32683 = state_30790__$1;
(statearr_30821_32683[(1)] = (5));

} else {
var statearr_30822_32684 = state_30790__$1;
(statearr_30822_32684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (15))){
var inst_30668 = (state_30790[(13)]);
var inst_30669 = (state_30790[(14)]);
var inst_30667 = (state_30790[(15)]);
var inst_30670 = (state_30790[(16)]);
var inst_30685 = (state_30790[(2)]);
var inst_30686 = (inst_30670 + (1));
var tmp30816 = inst_30668;
var tmp30817 = inst_30669;
var tmp30818 = inst_30667;
var inst_30667__$1 = tmp30818;
var inst_30668__$1 = tmp30816;
var inst_30669__$1 = tmp30817;
var inst_30670__$1 = inst_30686;
var state_30790__$1 = (function (){var statearr_30825 = state_30790;
(statearr_30825[(13)] = inst_30668__$1);

(statearr_30825[(18)] = inst_30685);

(statearr_30825[(14)] = inst_30669__$1);

(statearr_30825[(15)] = inst_30667__$1);

(statearr_30825[(16)] = inst_30670__$1);

return statearr_30825;
})();
var statearr_30826_32689 = state_30790__$1;
(statearr_30826_32689[(2)] = null);

(statearr_30826_32689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (21))){
var inst_30712 = (state_30790[(2)]);
var state_30790__$1 = state_30790;
var statearr_30830_32699 = state_30790__$1;
(statearr_30830_32699[(2)] = inst_30712);

(statearr_30830_32699[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (31))){
var inst_30738 = (state_30790[(12)]);
var inst_30742 = done(null);
var inst_30743 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30738);
var state_30790__$1 = (function (){var statearr_30831 = state_30790;
(statearr_30831[(19)] = inst_30742);

return statearr_30831;
})();
var statearr_30832_32700 = state_30790__$1;
(statearr_30832_32700[(2)] = inst_30743);

(statearr_30832_32700[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (32))){
var inst_30730 = (state_30790[(20)]);
var inst_30733 = (state_30790[(9)]);
var inst_30732 = (state_30790[(21)]);
var inst_30731 = (state_30790[(11)]);
var inst_30745 = (state_30790[(2)]);
var inst_30746 = (inst_30733 + (1));
var tmp30827 = inst_30730;
var tmp30828 = inst_30732;
var tmp30829 = inst_30731;
var inst_30730__$1 = tmp30827;
var inst_30731__$1 = tmp30829;
var inst_30732__$1 = tmp30828;
var inst_30733__$1 = inst_30746;
var state_30790__$1 = (function (){var statearr_30833 = state_30790;
(statearr_30833[(22)] = inst_30745);

(statearr_30833[(20)] = inst_30730__$1);

(statearr_30833[(9)] = inst_30733__$1);

(statearr_30833[(21)] = inst_30732__$1);

(statearr_30833[(11)] = inst_30731__$1);

return statearr_30833;
})();
var statearr_30846_32704 = state_30790__$1;
(statearr_30846_32704[(2)] = null);

(statearr_30846_32704[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (40))){
var inst_30758 = (state_30790[(23)]);
var inst_30762 = done(null);
var inst_30763 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30758);
var state_30790__$1 = (function (){var statearr_30847 = state_30790;
(statearr_30847[(24)] = inst_30762);

return statearr_30847;
})();
var statearr_30848_32706 = state_30790__$1;
(statearr_30848_32706[(2)] = inst_30763);

(statearr_30848_32706[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (33))){
var inst_30749 = (state_30790[(25)]);
var inst_30751 = cljs.core.chunked_seq_QMARK_(inst_30749);
var state_30790__$1 = state_30790;
if(inst_30751){
var statearr_30852_32708 = state_30790__$1;
(statearr_30852_32708[(1)] = (36));

} else {
var statearr_30853_32709 = state_30790__$1;
(statearr_30853_32709[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (13))){
var inst_30679 = (state_30790[(26)]);
var inst_30682 = cljs.core.async.close_BANG_(inst_30679);
var state_30790__$1 = state_30790;
var statearr_30854_32710 = state_30790__$1;
(statearr_30854_32710[(2)] = inst_30682);

(statearr_30854_32710[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (22))){
var inst_30702 = (state_30790[(8)]);
var inst_30705 = cljs.core.async.close_BANG_(inst_30702);
var state_30790__$1 = state_30790;
var statearr_30855_32711 = state_30790__$1;
(statearr_30855_32711[(2)] = inst_30705);

(statearr_30855_32711[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (36))){
var inst_30749 = (state_30790[(25)]);
var inst_30753 = cljs.core.chunk_first(inst_30749);
var inst_30754 = cljs.core.chunk_rest(inst_30749);
var inst_30755 = cljs.core.count(inst_30753);
var inst_30730 = inst_30754;
var inst_30731 = inst_30753;
var inst_30732 = inst_30755;
var inst_30733 = (0);
var state_30790__$1 = (function (){var statearr_30857 = state_30790;
(statearr_30857[(20)] = inst_30730);

(statearr_30857[(9)] = inst_30733);

(statearr_30857[(21)] = inst_30732);

(statearr_30857[(11)] = inst_30731);

return statearr_30857;
})();
var statearr_30858_32712 = state_30790__$1;
(statearr_30858_32712[(2)] = null);

(statearr_30858_32712[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (41))){
var inst_30749 = (state_30790[(25)]);
var inst_30765 = (state_30790[(2)]);
var inst_30766 = cljs.core.next(inst_30749);
var inst_30730 = inst_30766;
var inst_30731 = null;
var inst_30732 = (0);
var inst_30733 = (0);
var state_30790__$1 = (function (){var statearr_30859 = state_30790;
(statearr_30859[(20)] = inst_30730);

(statearr_30859[(9)] = inst_30733);

(statearr_30859[(21)] = inst_30732);

(statearr_30859[(11)] = inst_30731);

(statearr_30859[(27)] = inst_30765);

return statearr_30859;
})();
var statearr_30860_32719 = state_30790__$1;
(statearr_30860_32719[(2)] = null);

(statearr_30860_32719[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (43))){
var state_30790__$1 = state_30790;
var statearr_30861_32724 = state_30790__$1;
(statearr_30861_32724[(2)] = null);

(statearr_30861_32724[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (29))){
var inst_30774 = (state_30790[(2)]);
var state_30790__$1 = state_30790;
var statearr_30862_32728 = state_30790__$1;
(statearr_30862_32728[(2)] = inst_30774);

(statearr_30862_32728[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (44))){
var inst_30783 = (state_30790[(2)]);
var state_30790__$1 = (function (){var statearr_30867 = state_30790;
(statearr_30867[(28)] = inst_30783);

return statearr_30867;
})();
var statearr_30870_32729 = state_30790__$1;
(statearr_30870_32729[(2)] = null);

(statearr_30870_32729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (6))){
var inst_30722 = (state_30790[(29)]);
var inst_30721 = cljs.core.deref(cs);
var inst_30722__$1 = cljs.core.keys(inst_30721);
var inst_30723 = cljs.core.count(inst_30722__$1);
var inst_30724 = cljs.core.reset_BANG_(dctr,inst_30723);
var inst_30729 = cljs.core.seq(inst_30722__$1);
var inst_30730 = inst_30729;
var inst_30731 = null;
var inst_30732 = (0);
var inst_30733 = (0);
var state_30790__$1 = (function (){var statearr_30877 = state_30790;
(statearr_30877[(20)] = inst_30730);

(statearr_30877[(29)] = inst_30722__$1);

(statearr_30877[(9)] = inst_30733);

(statearr_30877[(30)] = inst_30724);

(statearr_30877[(21)] = inst_30732);

(statearr_30877[(11)] = inst_30731);

return statearr_30877;
})();
var statearr_30905_32733 = state_30790__$1;
(statearr_30905_32733[(2)] = null);

(statearr_30905_32733[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (28))){
var inst_30730 = (state_30790[(20)]);
var inst_30749 = (state_30790[(25)]);
var inst_30749__$1 = cljs.core.seq(inst_30730);
var state_30790__$1 = (function (){var statearr_30906 = state_30790;
(statearr_30906[(25)] = inst_30749__$1);

return statearr_30906;
})();
if(inst_30749__$1){
var statearr_30907_32737 = state_30790__$1;
(statearr_30907_32737[(1)] = (33));

} else {
var statearr_30908_32738 = state_30790__$1;
(statearr_30908_32738[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (25))){
var inst_30733 = (state_30790[(9)]);
var inst_30732 = (state_30790[(21)]);
var inst_30735 = (inst_30733 < inst_30732);
var inst_30736 = inst_30735;
var state_30790__$1 = state_30790;
if(cljs.core.truth_(inst_30736)){
var statearr_30909_32742 = state_30790__$1;
(statearr_30909_32742[(1)] = (27));

} else {
var statearr_30910_32743 = state_30790__$1;
(statearr_30910_32743[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (34))){
var state_30790__$1 = state_30790;
var statearr_30911_32744 = state_30790__$1;
(statearr_30911_32744[(2)] = null);

(statearr_30911_32744[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (17))){
var state_30790__$1 = state_30790;
var statearr_30912_32745 = state_30790__$1;
(statearr_30912_32745[(2)] = null);

(statearr_30912_32745[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (3))){
var inst_30788 = (state_30790[(2)]);
var state_30790__$1 = state_30790;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30790__$1,inst_30788);
} else {
if((state_val_30791 === (12))){
var inst_30717 = (state_30790[(2)]);
var state_30790__$1 = state_30790;
var statearr_30922_32750 = state_30790__$1;
(statearr_30922_32750[(2)] = inst_30717);

(statearr_30922_32750[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (2))){
var state_30790__$1 = state_30790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30790__$1,(4),ch);
} else {
if((state_val_30791 === (23))){
var state_30790__$1 = state_30790;
var statearr_30927_32757 = state_30790__$1;
(statearr_30927_32757[(2)] = null);

(statearr_30927_32757[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (35))){
var inst_30772 = (state_30790[(2)]);
var state_30790__$1 = state_30790;
var statearr_30931_32758 = state_30790__$1;
(statearr_30931_32758[(2)] = inst_30772);

(statearr_30931_32758[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (19))){
var inst_30689 = (state_30790[(7)]);
var inst_30693 = cljs.core.chunk_first(inst_30689);
var inst_30694 = cljs.core.chunk_rest(inst_30689);
var inst_30695 = cljs.core.count(inst_30693);
var inst_30667 = inst_30694;
var inst_30668 = inst_30693;
var inst_30669 = inst_30695;
var inst_30670 = (0);
var state_30790__$1 = (function (){var statearr_30932 = state_30790;
(statearr_30932[(13)] = inst_30668);

(statearr_30932[(14)] = inst_30669);

(statearr_30932[(15)] = inst_30667);

(statearr_30932[(16)] = inst_30670);

return statearr_30932;
})();
var statearr_30935_32771 = state_30790__$1;
(statearr_30935_32771[(2)] = null);

(statearr_30935_32771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (11))){
var inst_30689 = (state_30790[(7)]);
var inst_30667 = (state_30790[(15)]);
var inst_30689__$1 = cljs.core.seq(inst_30667);
var state_30790__$1 = (function (){var statearr_30937 = state_30790;
(statearr_30937[(7)] = inst_30689__$1);

return statearr_30937;
})();
if(inst_30689__$1){
var statearr_30938_32772 = state_30790__$1;
(statearr_30938_32772[(1)] = (16));

} else {
var statearr_30939_32773 = state_30790__$1;
(statearr_30939_32773[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (9))){
var inst_30719 = (state_30790[(2)]);
var state_30790__$1 = state_30790;
var statearr_30941_32777 = state_30790__$1;
(statearr_30941_32777[(2)] = inst_30719);

(statearr_30941_32777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (5))){
var inst_30665 = cljs.core.deref(cs);
var inst_30666 = cljs.core.seq(inst_30665);
var inst_30667 = inst_30666;
var inst_30668 = null;
var inst_30669 = (0);
var inst_30670 = (0);
var state_30790__$1 = (function (){var statearr_30942 = state_30790;
(statearr_30942[(13)] = inst_30668);

(statearr_30942[(14)] = inst_30669);

(statearr_30942[(15)] = inst_30667);

(statearr_30942[(16)] = inst_30670);

return statearr_30942;
})();
var statearr_30943_32781 = state_30790__$1;
(statearr_30943_32781[(2)] = null);

(statearr_30943_32781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (14))){
var state_30790__$1 = state_30790;
var statearr_30944_32782 = state_30790__$1;
(statearr_30944_32782[(2)] = null);

(statearr_30944_32782[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (45))){
var inst_30780 = (state_30790[(2)]);
var state_30790__$1 = state_30790;
var statearr_30947_32784 = state_30790__$1;
(statearr_30947_32784[(2)] = inst_30780);

(statearr_30947_32784[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (26))){
var inst_30722 = (state_30790[(29)]);
var inst_30776 = (state_30790[(2)]);
var inst_30777 = cljs.core.seq(inst_30722);
var state_30790__$1 = (function (){var statearr_30948 = state_30790;
(statearr_30948[(31)] = inst_30776);

return statearr_30948;
})();
if(inst_30777){
var statearr_30949_32785 = state_30790__$1;
(statearr_30949_32785[(1)] = (42));

} else {
var statearr_30950_32786 = state_30790__$1;
(statearr_30950_32786[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (16))){
var inst_30689 = (state_30790[(7)]);
var inst_30691 = cljs.core.chunked_seq_QMARK_(inst_30689);
var state_30790__$1 = state_30790;
if(inst_30691){
var statearr_30953_32787 = state_30790__$1;
(statearr_30953_32787[(1)] = (19));

} else {
var statearr_30954_32788 = state_30790__$1;
(statearr_30954_32788[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (38))){
var inst_30769 = (state_30790[(2)]);
var state_30790__$1 = state_30790;
var statearr_30955_32789 = state_30790__$1;
(statearr_30955_32789[(2)] = inst_30769);

(statearr_30955_32789[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (30))){
var state_30790__$1 = state_30790;
var statearr_30956_32790 = state_30790__$1;
(statearr_30956_32790[(2)] = null);

(statearr_30956_32790[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (10))){
var inst_30668 = (state_30790[(13)]);
var inst_30670 = (state_30790[(16)]);
var inst_30678 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30668,inst_30670);
var inst_30679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30678,(0),null);
var inst_30680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30678,(1),null);
var state_30790__$1 = (function (){var statearr_30959 = state_30790;
(statearr_30959[(26)] = inst_30679);

return statearr_30959;
})();
if(cljs.core.truth_(inst_30680)){
var statearr_30960_32791 = state_30790__$1;
(statearr_30960_32791[(1)] = (13));

} else {
var statearr_30961_32792 = state_30790__$1;
(statearr_30961_32792[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (18))){
var inst_30715 = (state_30790[(2)]);
var state_30790__$1 = state_30790;
var statearr_30965_32793 = state_30790__$1;
(statearr_30965_32793[(2)] = inst_30715);

(statearr_30965_32793[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (42))){
var state_30790__$1 = state_30790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30790__$1,(45),dchan);
} else {
if((state_val_30791 === (37))){
var inst_30758 = (state_30790[(23)]);
var inst_30658 = (state_30790[(10)]);
var inst_30749 = (state_30790[(25)]);
var inst_30758__$1 = cljs.core.first(inst_30749);
var inst_30759 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30758__$1,inst_30658,done);
var state_30790__$1 = (function (){var statearr_30969 = state_30790;
(statearr_30969[(23)] = inst_30758__$1);

return statearr_30969;
})();
if(cljs.core.truth_(inst_30759)){
var statearr_30971_32794 = state_30790__$1;
(statearr_30971_32794[(1)] = (39));

} else {
var statearr_30972_32795 = state_30790__$1;
(statearr_30972_32795[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (8))){
var inst_30669 = (state_30790[(14)]);
var inst_30670 = (state_30790[(16)]);
var inst_30672 = (inst_30670 < inst_30669);
var inst_30673 = inst_30672;
var state_30790__$1 = state_30790;
if(cljs.core.truth_(inst_30673)){
var statearr_30973_32796 = state_30790__$1;
(statearr_30973_32796[(1)] = (10));

} else {
var statearr_30974_32799 = state_30790__$1;
(statearr_30974_32799[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__29480__auto__ = null;
var cljs$core$async$mult_$_state_machine__29480__auto____0 = (function (){
var statearr_30979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30979[(0)] = cljs$core$async$mult_$_state_machine__29480__auto__);

(statearr_30979[(1)] = (1));

return statearr_30979;
});
var cljs$core$async$mult_$_state_machine__29480__auto____1 = (function (state_30790){
while(true){
var ret_value__29481__auto__ = (function (){try{while(true){
var result__29482__auto__ = switch__29479__auto__(state_30790);
if(cljs.core.keyword_identical_QMARK_(result__29482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29482__auto__;
}
break;
}
}catch (e30980){if((e30980 instanceof Object)){
var ex__29483__auto__ = e30980;
var statearr_30981_32800 = state_30790;
(statearr_30981_32800[(5)] = ex__29483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30980;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32801 = state_30790;
state_30790 = G__32801;
continue;
} else {
return ret_value__29481__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29480__auto__ = function(state_30790){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29480__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29480__auto____1.call(this,state_30790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29480__auto____0;
cljs$core$async$mult_$_state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29480__auto____1;
return cljs$core$async$mult_$_state_machine__29480__auto__;
})()
})();
var state__29728__auto__ = (function (){var statearr_30982 = (f__29727__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29727__auto__.cljs$core$IFn$_invoke$arity$0() : f__29727__auto__.call(null));
(statearr_30982[(6)] = c__29726__auto___32673);

return statearr_30982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29728__auto__);
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
var G__30984 = arguments.length;
switch (G__30984) {
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
var len__4789__auto___32813 = arguments.length;
var i__4790__auto___32814 = (0);
while(true){
if((i__4790__auto___32814 < len__4789__auto___32813)){
args__4795__auto__.push((arguments[i__4790__auto___32814]));

var G__32818 = (i__4790__auto___32814 + (1));
i__4790__auto___32814 = G__32818;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31027){
var map__31028 = p__31027;
var map__31028__$1 = (((((!((map__31028 == null))))?(((((map__31028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31028):map__31028);
var opts = map__31028__$1;
var statearr_31032_32821 = state;
(statearr_31032_32821[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31033_32824 = state;
(statearr_31033_32824[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31034_32825 = state;
(statearr_31034_32825[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31021){
var G__31022 = cljs.core.first(seq31021);
var seq31021__$1 = cljs.core.next(seq31021);
var G__31023 = cljs.core.first(seq31021__$1);
var seq31021__$2 = cljs.core.next(seq31021__$1);
var G__31024 = cljs.core.first(seq31021__$2);
var seq31021__$3 = cljs.core.next(seq31021__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31022,G__31023,G__31024,seq31021__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31037 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31037 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31038){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31038 = meta31038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31039,meta31038__$1){
var self__ = this;
var _31039__$1 = this;
return (new cljs.core.async.t_cljs$core$async31037(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31038__$1));
}));

(cljs.core.async.t_cljs$core$async31037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31039){
var self__ = this;
var _31039__$1 = this;
return self__.meta31038;
}));

(cljs.core.async.t_cljs$core$async31037.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31037.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31037.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31037.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31037.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31037.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31037.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31037.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31038","meta31038",366470508,null)], null);
}));

(cljs.core.async.t_cljs$core$async31037.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31037");

(cljs.core.async.t_cljs$core$async31037.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31037");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31037.
 */
cljs.core.async.__GT_t_cljs$core$async31037 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31037(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31038){
return (new cljs.core.async.t_cljs$core$async31037(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31038));
});

}

return (new cljs.core.async.t_cljs$core$async31037(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29726__auto___32845 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29727__auto__ = (function (){var switch__29479__auto__ = (function (state_31150){
var state_val_31151 = (state_31150[(1)]);
if((state_val_31151 === (7))){
var inst_31062 = (state_31150[(2)]);
var state_31150__$1 = state_31150;
var statearr_31152_32846 = state_31150__$1;
(statearr_31152_32846[(2)] = inst_31062);

(statearr_31152_32846[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (20))){
var inst_31074 = (state_31150[(7)]);
var state_31150__$1 = state_31150;
var statearr_31153_32847 = state_31150__$1;
(statearr_31153_32847[(2)] = inst_31074);

(statearr_31153_32847[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (27))){
var state_31150__$1 = state_31150;
var statearr_31154_32848 = state_31150__$1;
(statearr_31154_32848[(2)] = null);

(statearr_31154_32848[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (1))){
var inst_31048 = (state_31150[(8)]);
var inst_31048__$1 = calc_state();
var inst_31051 = (inst_31048__$1 == null);
var inst_31052 = cljs.core.not(inst_31051);
var state_31150__$1 = (function (){var statearr_31155 = state_31150;
(statearr_31155[(8)] = inst_31048__$1);

return statearr_31155;
})();
if(inst_31052){
var statearr_31156_32849 = state_31150__$1;
(statearr_31156_32849[(1)] = (2));

} else {
var statearr_31157_32850 = state_31150__$1;
(statearr_31157_32850[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (24))){
var inst_31124 = (state_31150[(9)]);
var inst_31110 = (state_31150[(10)]);
var inst_31100 = (state_31150[(11)]);
var inst_31124__$1 = (inst_31100.cljs$core$IFn$_invoke$arity$1 ? inst_31100.cljs$core$IFn$_invoke$arity$1(inst_31110) : inst_31100.call(null,inst_31110));
var state_31150__$1 = (function (){var statearr_31158 = state_31150;
(statearr_31158[(9)] = inst_31124__$1);

return statearr_31158;
})();
if(cljs.core.truth_(inst_31124__$1)){
var statearr_31159_32851 = state_31150__$1;
(statearr_31159_32851[(1)] = (29));

} else {
var statearr_31160_32852 = state_31150__$1;
(statearr_31160_32852[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (4))){
var inst_31065 = (state_31150[(2)]);
var state_31150__$1 = state_31150;
if(cljs.core.truth_(inst_31065)){
var statearr_31162_32853 = state_31150__$1;
(statearr_31162_32853[(1)] = (8));

} else {
var statearr_31163_32854 = state_31150__$1;
(statearr_31163_32854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (15))){
var inst_31094 = (state_31150[(2)]);
var state_31150__$1 = state_31150;
if(cljs.core.truth_(inst_31094)){
var statearr_31169_32855 = state_31150__$1;
(statearr_31169_32855[(1)] = (19));

} else {
var statearr_31170_32856 = state_31150__$1;
(statearr_31170_32856[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (21))){
var inst_31099 = (state_31150[(12)]);
var inst_31099__$1 = (state_31150[(2)]);
var inst_31100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31099__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31099__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31099__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31150__$1 = (function (){var statearr_31171 = state_31150;
(statearr_31171[(13)] = inst_31101);

(statearr_31171[(12)] = inst_31099__$1);

(statearr_31171[(11)] = inst_31100);

return statearr_31171;
})();
return cljs.core.async.ioc_alts_BANG_(state_31150__$1,(22),inst_31102);
} else {
if((state_val_31151 === (31))){
var inst_31132 = (state_31150[(2)]);
var state_31150__$1 = state_31150;
if(cljs.core.truth_(inst_31132)){
var statearr_31172_32857 = state_31150__$1;
(statearr_31172_32857[(1)] = (32));

} else {
var statearr_31173_32858 = state_31150__$1;
(statearr_31173_32858[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (32))){
var inst_31109 = (state_31150[(14)]);
var state_31150__$1 = state_31150;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31150__$1,(35),out,inst_31109);
} else {
if((state_val_31151 === (33))){
var inst_31099 = (state_31150[(12)]);
var inst_31074 = inst_31099;
var state_31150__$1 = (function (){var statearr_31182 = state_31150;
(statearr_31182[(7)] = inst_31074);

return statearr_31182;
})();
var statearr_31203_32859 = state_31150__$1;
(statearr_31203_32859[(2)] = null);

(statearr_31203_32859[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (13))){
var inst_31074 = (state_31150[(7)]);
var inst_31082 = inst_31074.cljs$lang$protocol_mask$partition0$;
var inst_31084 = (inst_31082 & (64));
var inst_31085 = inst_31074.cljs$core$ISeq$;
var inst_31086 = (cljs.core.PROTOCOL_SENTINEL === inst_31085);
var inst_31087 = ((inst_31084) || (inst_31086));
var state_31150__$1 = state_31150;
if(cljs.core.truth_(inst_31087)){
var statearr_31205_32860 = state_31150__$1;
(statearr_31205_32860[(1)] = (16));

} else {
var statearr_31208_32861 = state_31150__$1;
(statearr_31208_32861[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (22))){
var inst_31109 = (state_31150[(14)]);
var inst_31110 = (state_31150[(10)]);
var inst_31108 = (state_31150[(2)]);
var inst_31109__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31108,(0),null);
var inst_31110__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31108,(1),null);
var inst_31111 = (inst_31109__$1 == null);
var inst_31112 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31110__$1,change);
var inst_31113 = ((inst_31111) || (inst_31112));
var state_31150__$1 = (function (){var statearr_31212 = state_31150;
(statearr_31212[(14)] = inst_31109__$1);

(statearr_31212[(10)] = inst_31110__$1);

return statearr_31212;
})();
if(cljs.core.truth_(inst_31113)){
var statearr_31213_32862 = state_31150__$1;
(statearr_31213_32862[(1)] = (23));

} else {
var statearr_31215_32863 = state_31150__$1;
(statearr_31215_32863[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (36))){
var inst_31099 = (state_31150[(12)]);
var inst_31074 = inst_31099;
var state_31150__$1 = (function (){var statearr_31217 = state_31150;
(statearr_31217[(7)] = inst_31074);

return statearr_31217;
})();
var statearr_31218_32864 = state_31150__$1;
(statearr_31218_32864[(2)] = null);

(statearr_31218_32864[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (29))){
var inst_31124 = (state_31150[(9)]);
var state_31150__$1 = state_31150;
var statearr_31226_32865 = state_31150__$1;
(statearr_31226_32865[(2)] = inst_31124);

(statearr_31226_32865[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (6))){
var state_31150__$1 = state_31150;
var statearr_31228_32866 = state_31150__$1;
(statearr_31228_32866[(2)] = false);

(statearr_31228_32866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (28))){
var inst_31120 = (state_31150[(2)]);
var inst_31121 = calc_state();
var inst_31074 = inst_31121;
var state_31150__$1 = (function (){var statearr_31229 = state_31150;
(statearr_31229[(7)] = inst_31074);

(statearr_31229[(15)] = inst_31120);

return statearr_31229;
})();
var statearr_31230_32873 = state_31150__$1;
(statearr_31230_32873[(2)] = null);

(statearr_31230_32873[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (25))){
var inst_31146 = (state_31150[(2)]);
var state_31150__$1 = state_31150;
var statearr_31232_32874 = state_31150__$1;
(statearr_31232_32874[(2)] = inst_31146);

(statearr_31232_32874[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (34))){
var inst_31144 = (state_31150[(2)]);
var state_31150__$1 = state_31150;
var statearr_31233_32875 = state_31150__$1;
(statearr_31233_32875[(2)] = inst_31144);

(statearr_31233_32875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (17))){
var state_31150__$1 = state_31150;
var statearr_31234_32876 = state_31150__$1;
(statearr_31234_32876[(2)] = false);

(statearr_31234_32876[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (3))){
var state_31150__$1 = state_31150;
var statearr_31235_32877 = state_31150__$1;
(statearr_31235_32877[(2)] = false);

(statearr_31235_32877[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (12))){
var inst_31148 = (state_31150[(2)]);
var state_31150__$1 = state_31150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31150__$1,inst_31148);
} else {
if((state_val_31151 === (2))){
var inst_31048 = (state_31150[(8)]);
var inst_31054 = inst_31048.cljs$lang$protocol_mask$partition0$;
var inst_31055 = (inst_31054 & (64));
var inst_31056 = inst_31048.cljs$core$ISeq$;
var inst_31057 = (cljs.core.PROTOCOL_SENTINEL === inst_31056);
var inst_31058 = ((inst_31055) || (inst_31057));
var state_31150__$1 = state_31150;
if(cljs.core.truth_(inst_31058)){
var statearr_31237_32878 = state_31150__$1;
(statearr_31237_32878[(1)] = (5));

} else {
var statearr_31239_32879 = state_31150__$1;
(statearr_31239_32879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (23))){
var inst_31109 = (state_31150[(14)]);
var inst_31115 = (inst_31109 == null);
var state_31150__$1 = state_31150;
if(cljs.core.truth_(inst_31115)){
var statearr_31243_32886 = state_31150__$1;
(statearr_31243_32886[(1)] = (26));

} else {
var statearr_31245_32887 = state_31150__$1;
(statearr_31245_32887[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (35))){
var inst_31135 = (state_31150[(2)]);
var state_31150__$1 = state_31150;
if(cljs.core.truth_(inst_31135)){
var statearr_31246_32888 = state_31150__$1;
(statearr_31246_32888[(1)] = (36));

} else {
var statearr_31247_32889 = state_31150__$1;
(statearr_31247_32889[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (19))){
var inst_31074 = (state_31150[(7)]);
var inst_31096 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31074);
var state_31150__$1 = state_31150;
var statearr_31248_32890 = state_31150__$1;
(statearr_31248_32890[(2)] = inst_31096);

(statearr_31248_32890[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (11))){
var inst_31074 = (state_31150[(7)]);
var inst_31078 = (inst_31074 == null);
var inst_31079 = cljs.core.not(inst_31078);
var state_31150__$1 = state_31150;
if(inst_31079){
var statearr_31250_32891 = state_31150__$1;
(statearr_31250_32891[(1)] = (13));

} else {
var statearr_31251_32892 = state_31150__$1;
(statearr_31251_32892[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (9))){
var inst_31048 = (state_31150[(8)]);
var state_31150__$1 = state_31150;
var statearr_31254_32893 = state_31150__$1;
(statearr_31254_32893[(2)] = inst_31048);

(statearr_31254_32893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (5))){
var state_31150__$1 = state_31150;
var statearr_31257_32894 = state_31150__$1;
(statearr_31257_32894[(2)] = true);

(statearr_31257_32894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (14))){
var state_31150__$1 = state_31150;
var statearr_31258_32895 = state_31150__$1;
(statearr_31258_32895[(2)] = false);

(statearr_31258_32895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (26))){
var inst_31110 = (state_31150[(10)]);
var inst_31117 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31110);
var state_31150__$1 = state_31150;
var statearr_31260_32896 = state_31150__$1;
(statearr_31260_32896[(2)] = inst_31117);

(statearr_31260_32896[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (16))){
var state_31150__$1 = state_31150;
var statearr_31261_32897 = state_31150__$1;
(statearr_31261_32897[(2)] = true);

(statearr_31261_32897[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (38))){
var inst_31140 = (state_31150[(2)]);
var state_31150__$1 = state_31150;
var statearr_31262_32898 = state_31150__$1;
(statearr_31262_32898[(2)] = inst_31140);

(statearr_31262_32898[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (30))){
var inst_31101 = (state_31150[(13)]);
var inst_31110 = (state_31150[(10)]);
var inst_31100 = (state_31150[(11)]);
var inst_31127 = cljs.core.empty_QMARK_(inst_31100);
var inst_31128 = (inst_31101.cljs$core$IFn$_invoke$arity$1 ? inst_31101.cljs$core$IFn$_invoke$arity$1(inst_31110) : inst_31101.call(null,inst_31110));
var inst_31129 = cljs.core.not(inst_31128);
var inst_31130 = ((inst_31127) && (inst_31129));
var state_31150__$1 = state_31150;
var statearr_31263_32899 = state_31150__$1;
(statearr_31263_32899[(2)] = inst_31130);

(statearr_31263_32899[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (10))){
var inst_31048 = (state_31150[(8)]);
var inst_31070 = (state_31150[(2)]);
var inst_31071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31070,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31070,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31070,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31074 = inst_31048;
var state_31150__$1 = (function (){var statearr_31264 = state_31150;
(statearr_31264[(16)] = inst_31072);

(statearr_31264[(17)] = inst_31071);

(statearr_31264[(7)] = inst_31074);

(statearr_31264[(18)] = inst_31073);

return statearr_31264;
})();
var statearr_31265_32900 = state_31150__$1;
(statearr_31265_32900[(2)] = null);

(statearr_31265_32900[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (18))){
var inst_31091 = (state_31150[(2)]);
var state_31150__$1 = state_31150;
var statearr_31267_32901 = state_31150__$1;
(statearr_31267_32901[(2)] = inst_31091);

(statearr_31267_32901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (37))){
var state_31150__$1 = state_31150;
var statearr_31268_32902 = state_31150__$1;
(statearr_31268_32902[(2)] = null);

(statearr_31268_32902[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (8))){
var inst_31048 = (state_31150[(8)]);
var inst_31067 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31048);
var state_31150__$1 = state_31150;
var statearr_31270_32903 = state_31150__$1;
(statearr_31270_32903[(2)] = inst_31067);

(statearr_31270_32903[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__29480__auto__ = null;
var cljs$core$async$mix_$_state_machine__29480__auto____0 = (function (){
var statearr_31272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31272[(0)] = cljs$core$async$mix_$_state_machine__29480__auto__);

(statearr_31272[(1)] = (1));

return statearr_31272;
});
var cljs$core$async$mix_$_state_machine__29480__auto____1 = (function (state_31150){
while(true){
var ret_value__29481__auto__ = (function (){try{while(true){
var result__29482__auto__ = switch__29479__auto__(state_31150);
if(cljs.core.keyword_identical_QMARK_(result__29482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29482__auto__;
}
break;
}
}catch (e31275){if((e31275 instanceof Object)){
var ex__29483__auto__ = e31275;
var statearr_31276_32904 = state_31150;
(statearr_31276_32904[(5)] = ex__29483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31275;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32905 = state_31150;
state_31150 = G__32905;
continue;
} else {
return ret_value__29481__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29480__auto__ = function(state_31150){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29480__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29480__auto____1.call(this,state_31150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29480__auto____0;
cljs$core$async$mix_$_state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29480__auto____1;
return cljs$core$async$mix_$_state_machine__29480__auto__;
})()
})();
var state__29728__auto__ = (function (){var statearr_31277 = (f__29727__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29727__auto__.cljs$core$IFn$_invoke$arity$0() : f__29727__auto__.call(null));
(statearr_31277[(6)] = c__29726__auto___32845);

return statearr_31277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29728__auto__);
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
var G__31302 = arguments.length;
switch (G__31302) {
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
var G__31336 = arguments.length;
switch (G__31336) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31327_SHARP_){
if(cljs.core.truth_((p1__31327_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31327_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31327_SHARP_.call(null,topic)))){
return p1__31327_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31327_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31338 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31338 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31339){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31339 = meta31339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31340,meta31339__$1){
var self__ = this;
var _31340__$1 = this;
return (new cljs.core.async.t_cljs$core$async31338(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31339__$1));
}));

(cljs.core.async.t_cljs$core$async31338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31340){
var self__ = this;
var _31340__$1 = this;
return self__.meta31339;
}));

(cljs.core.async.t_cljs$core$async31338.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31338.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31338.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31338.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31338.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async31338.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31338.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31339","meta31339",918033179,null)], null);
}));

(cljs.core.async.t_cljs$core$async31338.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31338");

(cljs.core.async.t_cljs$core$async31338.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31338");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31338.
 */
cljs.core.async.__GT_t_cljs$core$async31338 = (function cljs$core$async$__GT_t_cljs$core$async31338(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31339){
return (new cljs.core.async.t_cljs$core$async31338(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31339));
});

}

return (new cljs.core.async.t_cljs$core$async31338(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29726__auto___32931 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29727__auto__ = (function (){var switch__29479__auto__ = (function (state_31440){
var state_val_31442 = (state_31440[(1)]);
if((state_val_31442 === (7))){
var inst_31435 = (state_31440[(2)]);
var state_31440__$1 = state_31440;
var statearr_31444_32932 = state_31440__$1;
(statearr_31444_32932[(2)] = inst_31435);

(statearr_31444_32932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (20))){
var state_31440__$1 = state_31440;
var statearr_31450_32939 = state_31440__$1;
(statearr_31450_32939[(2)] = null);

(statearr_31450_32939[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (1))){
var state_31440__$1 = state_31440;
var statearr_31453_32940 = state_31440__$1;
(statearr_31453_32940[(2)] = null);

(statearr_31453_32940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (24))){
var inst_31416 = (state_31440[(7)]);
var inst_31427 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31416);
var state_31440__$1 = state_31440;
var statearr_31459_32944 = state_31440__$1;
(statearr_31459_32944[(2)] = inst_31427);

(statearr_31459_32944[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (4))){
var inst_31362 = (state_31440[(8)]);
var inst_31362__$1 = (state_31440[(2)]);
var inst_31363 = (inst_31362__$1 == null);
var state_31440__$1 = (function (){var statearr_31460 = state_31440;
(statearr_31460[(8)] = inst_31362__$1);

return statearr_31460;
})();
if(cljs.core.truth_(inst_31363)){
var statearr_31463_32945 = state_31440__$1;
(statearr_31463_32945[(1)] = (5));

} else {
var statearr_31465_32946 = state_31440__$1;
(statearr_31465_32946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (15))){
var inst_31409 = (state_31440[(2)]);
var state_31440__$1 = state_31440;
var statearr_31466_32950 = state_31440__$1;
(statearr_31466_32950[(2)] = inst_31409);

(statearr_31466_32950[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (21))){
var inst_31432 = (state_31440[(2)]);
var state_31440__$1 = (function (){var statearr_31467 = state_31440;
(statearr_31467[(9)] = inst_31432);

return statearr_31467;
})();
var statearr_31468_32955 = state_31440__$1;
(statearr_31468_32955[(2)] = null);

(statearr_31468_32955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (13))){
var inst_31389 = (state_31440[(10)]);
var inst_31392 = cljs.core.chunked_seq_QMARK_(inst_31389);
var state_31440__$1 = state_31440;
if(inst_31392){
var statearr_31469_32956 = state_31440__$1;
(statearr_31469_32956[(1)] = (16));

} else {
var statearr_31474_32957 = state_31440__$1;
(statearr_31474_32957[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (22))){
var inst_31424 = (state_31440[(2)]);
var state_31440__$1 = state_31440;
if(cljs.core.truth_(inst_31424)){
var statearr_31475_32958 = state_31440__$1;
(statearr_31475_32958[(1)] = (23));

} else {
var statearr_31476_32959 = state_31440__$1;
(statearr_31476_32959[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (6))){
var inst_31419 = (state_31440[(11)]);
var inst_31362 = (state_31440[(8)]);
var inst_31416 = (state_31440[(7)]);
var inst_31416__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31362) : topic_fn.call(null,inst_31362));
var inst_31418 = cljs.core.deref(mults);
var inst_31419__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31418,inst_31416__$1);
var state_31440__$1 = (function (){var statearr_31477 = state_31440;
(statearr_31477[(11)] = inst_31419__$1);

(statearr_31477[(7)] = inst_31416__$1);

return statearr_31477;
})();
if(cljs.core.truth_(inst_31419__$1)){
var statearr_31481_32963 = state_31440__$1;
(statearr_31481_32963[(1)] = (19));

} else {
var statearr_31485_32964 = state_31440__$1;
(statearr_31485_32964[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (25))){
var inst_31429 = (state_31440[(2)]);
var state_31440__$1 = state_31440;
var statearr_31486_32966 = state_31440__$1;
(statearr_31486_32966[(2)] = inst_31429);

(statearr_31486_32966[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (17))){
var inst_31389 = (state_31440[(10)]);
var inst_31400 = cljs.core.first(inst_31389);
var inst_31401 = cljs.core.async.muxch_STAR_(inst_31400);
var inst_31402 = cljs.core.async.close_BANG_(inst_31401);
var inst_31403 = cljs.core.next(inst_31389);
var inst_31375 = inst_31403;
var inst_31376 = null;
var inst_31377 = (0);
var inst_31378 = (0);
var state_31440__$1 = (function (){var statearr_31490 = state_31440;
(statearr_31490[(12)] = inst_31375);

(statearr_31490[(13)] = inst_31402);

(statearr_31490[(14)] = inst_31378);

(statearr_31490[(15)] = inst_31376);

(statearr_31490[(16)] = inst_31377);

return statearr_31490;
})();
var statearr_31491_32969 = state_31440__$1;
(statearr_31491_32969[(2)] = null);

(statearr_31491_32969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (3))){
var inst_31437 = (state_31440[(2)]);
var state_31440__$1 = state_31440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31440__$1,inst_31437);
} else {
if((state_val_31442 === (12))){
var inst_31411 = (state_31440[(2)]);
var state_31440__$1 = state_31440;
var statearr_31492_32973 = state_31440__$1;
(statearr_31492_32973[(2)] = inst_31411);

(statearr_31492_32973[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (2))){
var state_31440__$1 = state_31440;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31440__$1,(4),ch);
} else {
if((state_val_31442 === (23))){
var state_31440__$1 = state_31440;
var statearr_31493_32974 = state_31440__$1;
(statearr_31493_32974[(2)] = null);

(statearr_31493_32974[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (19))){
var inst_31419 = (state_31440[(11)]);
var inst_31362 = (state_31440[(8)]);
var inst_31422 = cljs.core.async.muxch_STAR_(inst_31419);
var state_31440__$1 = state_31440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31440__$1,(22),inst_31422,inst_31362);
} else {
if((state_val_31442 === (11))){
var inst_31375 = (state_31440[(12)]);
var inst_31389 = (state_31440[(10)]);
var inst_31389__$1 = cljs.core.seq(inst_31375);
var state_31440__$1 = (function (){var statearr_31494 = state_31440;
(statearr_31494[(10)] = inst_31389__$1);

return statearr_31494;
})();
if(inst_31389__$1){
var statearr_31495_32976 = state_31440__$1;
(statearr_31495_32976[(1)] = (13));

} else {
var statearr_31496_32977 = state_31440__$1;
(statearr_31496_32977[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (9))){
var inst_31413 = (state_31440[(2)]);
var state_31440__$1 = state_31440;
var statearr_31497_32978 = state_31440__$1;
(statearr_31497_32978[(2)] = inst_31413);

(statearr_31497_32978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (5))){
var inst_31371 = cljs.core.deref(mults);
var inst_31372 = cljs.core.vals(inst_31371);
var inst_31373 = cljs.core.seq(inst_31372);
var inst_31375 = inst_31373;
var inst_31376 = null;
var inst_31377 = (0);
var inst_31378 = (0);
var state_31440__$1 = (function (){var statearr_31498 = state_31440;
(statearr_31498[(12)] = inst_31375);

(statearr_31498[(14)] = inst_31378);

(statearr_31498[(15)] = inst_31376);

(statearr_31498[(16)] = inst_31377);

return statearr_31498;
})();
var statearr_31499_32981 = state_31440__$1;
(statearr_31499_32981[(2)] = null);

(statearr_31499_32981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (14))){
var state_31440__$1 = state_31440;
var statearr_31503_32982 = state_31440__$1;
(statearr_31503_32982[(2)] = null);

(statearr_31503_32982[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (16))){
var inst_31389 = (state_31440[(10)]);
var inst_31394 = cljs.core.chunk_first(inst_31389);
var inst_31395 = cljs.core.chunk_rest(inst_31389);
var inst_31396 = cljs.core.count(inst_31394);
var inst_31375 = inst_31395;
var inst_31376 = inst_31394;
var inst_31377 = inst_31396;
var inst_31378 = (0);
var state_31440__$1 = (function (){var statearr_31504 = state_31440;
(statearr_31504[(12)] = inst_31375);

(statearr_31504[(14)] = inst_31378);

(statearr_31504[(15)] = inst_31376);

(statearr_31504[(16)] = inst_31377);

return statearr_31504;
})();
var statearr_31505_32983 = state_31440__$1;
(statearr_31505_32983[(2)] = null);

(statearr_31505_32983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (10))){
var inst_31375 = (state_31440[(12)]);
var inst_31378 = (state_31440[(14)]);
var inst_31376 = (state_31440[(15)]);
var inst_31377 = (state_31440[(16)]);
var inst_31383 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31376,inst_31378);
var inst_31384 = cljs.core.async.muxch_STAR_(inst_31383);
var inst_31385 = cljs.core.async.close_BANG_(inst_31384);
var inst_31386 = (inst_31378 + (1));
var tmp31500 = inst_31375;
var tmp31501 = inst_31376;
var tmp31502 = inst_31377;
var inst_31375__$1 = tmp31500;
var inst_31376__$1 = tmp31501;
var inst_31377__$1 = tmp31502;
var inst_31378__$1 = inst_31386;
var state_31440__$1 = (function (){var statearr_31506 = state_31440;
(statearr_31506[(12)] = inst_31375__$1);

(statearr_31506[(14)] = inst_31378__$1);

(statearr_31506[(15)] = inst_31376__$1);

(statearr_31506[(16)] = inst_31377__$1);

(statearr_31506[(17)] = inst_31385);

return statearr_31506;
})();
var statearr_31507_32984 = state_31440__$1;
(statearr_31507_32984[(2)] = null);

(statearr_31507_32984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (18))){
var inst_31406 = (state_31440[(2)]);
var state_31440__$1 = state_31440;
var statearr_31508_32985 = state_31440__$1;
(statearr_31508_32985[(2)] = inst_31406);

(statearr_31508_32985[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (8))){
var inst_31378 = (state_31440[(14)]);
var inst_31377 = (state_31440[(16)]);
var inst_31380 = (inst_31378 < inst_31377);
var inst_31381 = inst_31380;
var state_31440__$1 = state_31440;
if(cljs.core.truth_(inst_31381)){
var statearr_31509_32986 = state_31440__$1;
(statearr_31509_32986[(1)] = (10));

} else {
var statearr_31510_32987 = state_31440__$1;
(statearr_31510_32987[(1)] = (11));

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
var cljs$core$async$state_machine__29480__auto__ = null;
var cljs$core$async$state_machine__29480__auto____0 = (function (){
var statearr_31511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31511[(0)] = cljs$core$async$state_machine__29480__auto__);

(statearr_31511[(1)] = (1));

return statearr_31511;
});
var cljs$core$async$state_machine__29480__auto____1 = (function (state_31440){
while(true){
var ret_value__29481__auto__ = (function (){try{while(true){
var result__29482__auto__ = switch__29479__auto__(state_31440);
if(cljs.core.keyword_identical_QMARK_(result__29482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29482__auto__;
}
break;
}
}catch (e31512){if((e31512 instanceof Object)){
var ex__29483__auto__ = e31512;
var statearr_31513_32992 = state_31440;
(statearr_31513_32992[(5)] = ex__29483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31512;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32993 = state_31440;
state_31440 = G__32993;
continue;
} else {
return ret_value__29481__auto__;
}
break;
}
});
cljs$core$async$state_machine__29480__auto__ = function(state_31440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29480__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29480__auto____1.call(this,state_31440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29480__auto____0;
cljs$core$async$state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29480__auto____1;
return cljs$core$async$state_machine__29480__auto__;
})()
})();
var state__29728__auto__ = (function (){var statearr_31514 = (f__29727__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29727__auto__.cljs$core$IFn$_invoke$arity$0() : f__29727__auto__.call(null));
(statearr_31514[(6)] = c__29726__auto___32931);

return statearr_31514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29728__auto__);
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
var G__31516 = arguments.length;
switch (G__31516) {
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
var G__31525 = arguments.length;
switch (G__31525) {
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
var G__31530 = arguments.length;
switch (G__31530) {
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
var c__29726__auto___33003 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29727__auto__ = (function (){var switch__29479__auto__ = (function (state_31569){
var state_val_31570 = (state_31569[(1)]);
if((state_val_31570 === (7))){
var state_31569__$1 = state_31569;
var statearr_31571_33004 = state_31569__$1;
(statearr_31571_33004[(2)] = null);

(statearr_31571_33004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (1))){
var state_31569__$1 = state_31569;
var statearr_31572_33009 = state_31569__$1;
(statearr_31572_33009[(2)] = null);

(statearr_31572_33009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (4))){
var inst_31533 = (state_31569[(7)]);
var inst_31535 = (inst_31533 < cnt);
var state_31569__$1 = state_31569;
if(cljs.core.truth_(inst_31535)){
var statearr_31573_33010 = state_31569__$1;
(statearr_31573_33010[(1)] = (6));

} else {
var statearr_31574_33011 = state_31569__$1;
(statearr_31574_33011[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (15))){
var inst_31565 = (state_31569[(2)]);
var state_31569__$1 = state_31569;
var statearr_31575_33012 = state_31569__$1;
(statearr_31575_33012[(2)] = inst_31565);

(statearr_31575_33012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (13))){
var inst_31558 = cljs.core.async.close_BANG_(out);
var state_31569__$1 = state_31569;
var statearr_31579_33013 = state_31569__$1;
(statearr_31579_33013[(2)] = inst_31558);

(statearr_31579_33013[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (6))){
var state_31569__$1 = state_31569;
var statearr_31580_33014 = state_31569__$1;
(statearr_31580_33014[(2)] = null);

(statearr_31580_33014[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (3))){
var inst_31567 = (state_31569[(2)]);
var state_31569__$1 = state_31569;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31569__$1,inst_31567);
} else {
if((state_val_31570 === (12))){
var inst_31555 = (state_31569[(8)]);
var inst_31555__$1 = (state_31569[(2)]);
var inst_31556 = cljs.core.some(cljs.core.nil_QMARK_,inst_31555__$1);
var state_31569__$1 = (function (){var statearr_31582 = state_31569;
(statearr_31582[(8)] = inst_31555__$1);

return statearr_31582;
})();
if(cljs.core.truth_(inst_31556)){
var statearr_31583_33015 = state_31569__$1;
(statearr_31583_33015[(1)] = (13));

} else {
var statearr_31584_33016 = state_31569__$1;
(statearr_31584_33016[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (2))){
var inst_31532 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31533 = (0);
var state_31569__$1 = (function (){var statearr_31585 = state_31569;
(statearr_31585[(7)] = inst_31533);

(statearr_31585[(9)] = inst_31532);

return statearr_31585;
})();
var statearr_31586_33017 = state_31569__$1;
(statearr_31586_33017[(2)] = null);

(statearr_31586_33017[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (11))){
var inst_31533 = (state_31569[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_31569,(10),Object,null,(9));
var inst_31542 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31533) : chs__$1.call(null,inst_31533));
var inst_31543 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31533) : done.call(null,inst_31533));
var inst_31544 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31542,inst_31543);
var state_31569__$1 = state_31569;
var statearr_31587_33018 = state_31569__$1;
(statearr_31587_33018[(2)] = inst_31544);


cljs.core.async.impl.ioc_helpers.process_exception(state_31569__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (9))){
var inst_31533 = (state_31569[(7)]);
var inst_31546 = (state_31569[(2)]);
var inst_31547 = (inst_31533 + (1));
var inst_31533__$1 = inst_31547;
var state_31569__$1 = (function (){var statearr_31588 = state_31569;
(statearr_31588[(7)] = inst_31533__$1);

(statearr_31588[(10)] = inst_31546);

return statearr_31588;
})();
var statearr_31589_33020 = state_31569__$1;
(statearr_31589_33020[(2)] = null);

(statearr_31589_33020[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (5))){
var inst_31553 = (state_31569[(2)]);
var state_31569__$1 = (function (){var statearr_31590 = state_31569;
(statearr_31590[(11)] = inst_31553);

return statearr_31590;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31569__$1,(12),dchan);
} else {
if((state_val_31570 === (14))){
var inst_31555 = (state_31569[(8)]);
var inst_31560 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31555);
var state_31569__$1 = state_31569;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31569__$1,(16),out,inst_31560);
} else {
if((state_val_31570 === (16))){
var inst_31562 = (state_31569[(2)]);
var state_31569__$1 = (function (){var statearr_31591 = state_31569;
(statearr_31591[(12)] = inst_31562);

return statearr_31591;
})();
var statearr_31592_33021 = state_31569__$1;
(statearr_31592_33021[(2)] = null);

(statearr_31592_33021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (10))){
var inst_31537 = (state_31569[(2)]);
var inst_31538 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31569__$1 = (function (){var statearr_31593 = state_31569;
(statearr_31593[(13)] = inst_31537);

return statearr_31593;
})();
var statearr_31594_33022 = state_31569__$1;
(statearr_31594_33022[(2)] = inst_31538);


cljs.core.async.impl.ioc_helpers.process_exception(state_31569__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31570 === (8))){
var inst_31551 = (state_31569[(2)]);
var state_31569__$1 = state_31569;
var statearr_31595_33023 = state_31569__$1;
(statearr_31595_33023[(2)] = inst_31551);

(statearr_31595_33023[(1)] = (5));


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
var cljs$core$async$state_machine__29480__auto__ = null;
var cljs$core$async$state_machine__29480__auto____0 = (function (){
var statearr_31596 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31596[(0)] = cljs$core$async$state_machine__29480__auto__);

(statearr_31596[(1)] = (1));

return statearr_31596;
});
var cljs$core$async$state_machine__29480__auto____1 = (function (state_31569){
while(true){
var ret_value__29481__auto__ = (function (){try{while(true){
var result__29482__auto__ = switch__29479__auto__(state_31569);
if(cljs.core.keyword_identical_QMARK_(result__29482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29482__auto__;
}
break;
}
}catch (e31597){if((e31597 instanceof Object)){
var ex__29483__auto__ = e31597;
var statearr_31598_33024 = state_31569;
(statearr_31598_33024[(5)] = ex__29483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31597;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33030 = state_31569;
state_31569 = G__33030;
continue;
} else {
return ret_value__29481__auto__;
}
break;
}
});
cljs$core$async$state_machine__29480__auto__ = function(state_31569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29480__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29480__auto____1.call(this,state_31569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29480__auto____0;
cljs$core$async$state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29480__auto____1;
return cljs$core$async$state_machine__29480__auto__;
})()
})();
var state__29728__auto__ = (function (){var statearr_31599 = (f__29727__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29727__auto__.cljs$core$IFn$_invoke$arity$0() : f__29727__auto__.call(null));
(statearr_31599[(6)] = c__29726__auto___33003);

return statearr_31599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29728__auto__);
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
var G__31603 = arguments.length;
switch (G__31603) {
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
var c__29726__auto___33034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29727__auto__ = (function (){var switch__29479__auto__ = (function (state_31637){
var state_val_31638 = (state_31637[(1)]);
if((state_val_31638 === (7))){
var inst_31616 = (state_31637[(7)]);
var inst_31617 = (state_31637[(8)]);
var inst_31616__$1 = (state_31637[(2)]);
var inst_31617__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31616__$1,(0),null);
var inst_31618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31616__$1,(1),null);
var inst_31619 = (inst_31617__$1 == null);
var state_31637__$1 = (function (){var statearr_31640 = state_31637;
(statearr_31640[(9)] = inst_31618);

(statearr_31640[(7)] = inst_31616__$1);

(statearr_31640[(8)] = inst_31617__$1);

return statearr_31640;
})();
if(cljs.core.truth_(inst_31619)){
var statearr_31641_33035 = state_31637__$1;
(statearr_31641_33035[(1)] = (8));

} else {
var statearr_31642_33036 = state_31637__$1;
(statearr_31642_33036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (1))){
var inst_31606 = cljs.core.vec(chs);
var inst_31607 = inst_31606;
var state_31637__$1 = (function (){var statearr_31644 = state_31637;
(statearr_31644[(10)] = inst_31607);

return statearr_31644;
})();
var statearr_31645_33037 = state_31637__$1;
(statearr_31645_33037[(2)] = null);

(statearr_31645_33037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (4))){
var inst_31607 = (state_31637[(10)]);
var state_31637__$1 = state_31637;
return cljs.core.async.ioc_alts_BANG_(state_31637__$1,(7),inst_31607);
} else {
if((state_val_31638 === (6))){
var inst_31633 = (state_31637[(2)]);
var state_31637__$1 = state_31637;
var statearr_31646_33038 = state_31637__$1;
(statearr_31646_33038[(2)] = inst_31633);

(statearr_31646_33038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (3))){
var inst_31635 = (state_31637[(2)]);
var state_31637__$1 = state_31637;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31637__$1,inst_31635);
} else {
if((state_val_31638 === (2))){
var inst_31607 = (state_31637[(10)]);
var inst_31609 = cljs.core.count(inst_31607);
var inst_31610 = (inst_31609 > (0));
var state_31637__$1 = state_31637;
if(cljs.core.truth_(inst_31610)){
var statearr_31649_33039 = state_31637__$1;
(statearr_31649_33039[(1)] = (4));

} else {
var statearr_31650_33040 = state_31637__$1;
(statearr_31650_33040[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (11))){
var inst_31607 = (state_31637[(10)]);
var inst_31626 = (state_31637[(2)]);
var tmp31648 = inst_31607;
var inst_31607__$1 = tmp31648;
var state_31637__$1 = (function (){var statearr_31652 = state_31637;
(statearr_31652[(10)] = inst_31607__$1);

(statearr_31652[(11)] = inst_31626);

return statearr_31652;
})();
var statearr_31654_33041 = state_31637__$1;
(statearr_31654_33041[(2)] = null);

(statearr_31654_33041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (9))){
var inst_31617 = (state_31637[(8)]);
var state_31637__$1 = state_31637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31637__$1,(11),out,inst_31617);
} else {
if((state_val_31638 === (5))){
var inst_31631 = cljs.core.async.close_BANG_(out);
var state_31637__$1 = state_31637;
var statearr_31656_33042 = state_31637__$1;
(statearr_31656_33042[(2)] = inst_31631);

(statearr_31656_33042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (10))){
var inst_31629 = (state_31637[(2)]);
var state_31637__$1 = state_31637;
var statearr_31660_33044 = state_31637__$1;
(statearr_31660_33044[(2)] = inst_31629);

(statearr_31660_33044[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (8))){
var inst_31607 = (state_31637[(10)]);
var inst_31618 = (state_31637[(9)]);
var inst_31616 = (state_31637[(7)]);
var inst_31617 = (state_31637[(8)]);
var inst_31621 = (function (){var cs = inst_31607;
var vec__31612 = inst_31616;
var v = inst_31617;
var c = inst_31618;
return (function (p1__31600_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31600_SHARP_);
});
})();
var inst_31622 = cljs.core.filterv(inst_31621,inst_31607);
var inst_31607__$1 = inst_31622;
var state_31637__$1 = (function (){var statearr_31661 = state_31637;
(statearr_31661[(10)] = inst_31607__$1);

return statearr_31661;
})();
var statearr_31662_33045 = state_31637__$1;
(statearr_31662_33045[(2)] = null);

(statearr_31662_33045[(1)] = (2));


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
var cljs$core$async$state_machine__29480__auto__ = null;
var cljs$core$async$state_machine__29480__auto____0 = (function (){
var statearr_31666 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31666[(0)] = cljs$core$async$state_machine__29480__auto__);

(statearr_31666[(1)] = (1));

return statearr_31666;
});
var cljs$core$async$state_machine__29480__auto____1 = (function (state_31637){
while(true){
var ret_value__29481__auto__ = (function (){try{while(true){
var result__29482__auto__ = switch__29479__auto__(state_31637);
if(cljs.core.keyword_identical_QMARK_(result__29482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29482__auto__;
}
break;
}
}catch (e31667){if((e31667 instanceof Object)){
var ex__29483__auto__ = e31667;
var statearr_31668_33047 = state_31637;
(statearr_31668_33047[(5)] = ex__29483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31667;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33048 = state_31637;
state_31637 = G__33048;
continue;
} else {
return ret_value__29481__auto__;
}
break;
}
});
cljs$core$async$state_machine__29480__auto__ = function(state_31637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29480__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29480__auto____1.call(this,state_31637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29480__auto____0;
cljs$core$async$state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29480__auto____1;
return cljs$core$async$state_machine__29480__auto__;
})()
})();
var state__29728__auto__ = (function (){var statearr_31669 = (f__29727__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29727__auto__.cljs$core$IFn$_invoke$arity$0() : f__29727__auto__.call(null));
(statearr_31669[(6)] = c__29726__auto___33034);

return statearr_31669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29728__auto__);
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
var G__31672 = arguments.length;
switch (G__31672) {
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
var c__29726__auto___33056 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29727__auto__ = (function (){var switch__29479__auto__ = (function (state_31699){
var state_val_31700 = (state_31699[(1)]);
if((state_val_31700 === (7))){
var inst_31681 = (state_31699[(7)]);
var inst_31681__$1 = (state_31699[(2)]);
var inst_31682 = (inst_31681__$1 == null);
var inst_31683 = cljs.core.not(inst_31682);
var state_31699__$1 = (function (){var statearr_31732 = state_31699;
(statearr_31732[(7)] = inst_31681__$1);

return statearr_31732;
})();
if(inst_31683){
var statearr_31737_33058 = state_31699__$1;
(statearr_31737_33058[(1)] = (8));

} else {
var statearr_31738_33059 = state_31699__$1;
(statearr_31738_33059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31700 === (1))){
var inst_31676 = (0);
var state_31699__$1 = (function (){var statearr_31744 = state_31699;
(statearr_31744[(8)] = inst_31676);

return statearr_31744;
})();
var statearr_31746_33060 = state_31699__$1;
(statearr_31746_33060[(2)] = null);

(statearr_31746_33060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31700 === (4))){
var state_31699__$1 = state_31699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31699__$1,(7),ch);
} else {
if((state_val_31700 === (6))){
var inst_31694 = (state_31699[(2)]);
var state_31699__$1 = state_31699;
var statearr_31758_33061 = state_31699__$1;
(statearr_31758_33061[(2)] = inst_31694);

(statearr_31758_33061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31700 === (3))){
var inst_31696 = (state_31699[(2)]);
var inst_31697 = cljs.core.async.close_BANG_(out);
var state_31699__$1 = (function (){var statearr_31761 = state_31699;
(statearr_31761[(9)] = inst_31696);

return statearr_31761;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31699__$1,inst_31697);
} else {
if((state_val_31700 === (2))){
var inst_31676 = (state_31699[(8)]);
var inst_31678 = (inst_31676 < n);
var state_31699__$1 = state_31699;
if(cljs.core.truth_(inst_31678)){
var statearr_31762_33063 = state_31699__$1;
(statearr_31762_33063[(1)] = (4));

} else {
var statearr_31763_33064 = state_31699__$1;
(statearr_31763_33064[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31700 === (11))){
var inst_31676 = (state_31699[(8)]);
var inst_31686 = (state_31699[(2)]);
var inst_31687 = (inst_31676 + (1));
var inst_31676__$1 = inst_31687;
var state_31699__$1 = (function (){var statearr_31764 = state_31699;
(statearr_31764[(8)] = inst_31676__$1);

(statearr_31764[(10)] = inst_31686);

return statearr_31764;
})();
var statearr_31765_33065 = state_31699__$1;
(statearr_31765_33065[(2)] = null);

(statearr_31765_33065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31700 === (9))){
var state_31699__$1 = state_31699;
var statearr_31766_33067 = state_31699__$1;
(statearr_31766_33067[(2)] = null);

(statearr_31766_33067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31700 === (5))){
var state_31699__$1 = state_31699;
var statearr_31767_33071 = state_31699__$1;
(statearr_31767_33071[(2)] = null);

(statearr_31767_33071[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31700 === (10))){
var inst_31691 = (state_31699[(2)]);
var state_31699__$1 = state_31699;
var statearr_31770_33072 = state_31699__$1;
(statearr_31770_33072[(2)] = inst_31691);

(statearr_31770_33072[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31700 === (8))){
var inst_31681 = (state_31699[(7)]);
var state_31699__$1 = state_31699;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31699__$1,(11),out,inst_31681);
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
var cljs$core$async$state_machine__29480__auto__ = null;
var cljs$core$async$state_machine__29480__auto____0 = (function (){
var statearr_31773 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31773[(0)] = cljs$core$async$state_machine__29480__auto__);

(statearr_31773[(1)] = (1));

return statearr_31773;
});
var cljs$core$async$state_machine__29480__auto____1 = (function (state_31699){
while(true){
var ret_value__29481__auto__ = (function (){try{while(true){
var result__29482__auto__ = switch__29479__auto__(state_31699);
if(cljs.core.keyword_identical_QMARK_(result__29482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29482__auto__;
}
break;
}
}catch (e31774){if((e31774 instanceof Object)){
var ex__29483__auto__ = e31774;
var statearr_31775_33073 = state_31699;
(statearr_31775_33073[(5)] = ex__29483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31774;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33074 = state_31699;
state_31699 = G__33074;
continue;
} else {
return ret_value__29481__auto__;
}
break;
}
});
cljs$core$async$state_machine__29480__auto__ = function(state_31699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29480__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29480__auto____1.call(this,state_31699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29480__auto____0;
cljs$core$async$state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29480__auto____1;
return cljs$core$async$state_machine__29480__auto__;
})()
})();
var state__29728__auto__ = (function (){var statearr_31776 = (f__29727__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29727__auto__.cljs$core$IFn$_invoke$arity$0() : f__29727__auto__.call(null));
(statearr_31776[(6)] = c__29726__auto___33056);

return statearr_31776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29728__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31794 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31794 = (function (f,ch,meta31795){
this.f = f;
this.ch = ch;
this.meta31795 = meta31795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31796,meta31795__$1){
var self__ = this;
var _31796__$1 = this;
return (new cljs.core.async.t_cljs$core$async31794(self__.f,self__.ch,meta31795__$1));
}));

(cljs.core.async.t_cljs$core$async31794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31796){
var self__ = this;
var _31796__$1 = this;
return self__.meta31795;
}));

(cljs.core.async.t_cljs$core$async31794.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31794.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31794.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31794.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31794.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31818 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31818 = (function (f,ch,meta31795,_,fn1,meta31819){
this.f = f;
this.ch = ch;
this.meta31795 = meta31795;
this._ = _;
this.fn1 = fn1;
this.meta31819 = meta31819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31820,meta31819__$1){
var self__ = this;
var _31820__$1 = this;
return (new cljs.core.async.t_cljs$core$async31818(self__.f,self__.ch,self__.meta31795,self__._,self__.fn1,meta31819__$1));
}));

(cljs.core.async.t_cljs$core$async31818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31820){
var self__ = this;
var _31820__$1 = this;
return self__.meta31819;
}));

(cljs.core.async.t_cljs$core$async31818.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31818.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31818.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31818.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31785_SHARP_){
var G__31827 = (((p1__31785_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31785_SHARP_) : self__.f.call(null,p1__31785_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31827) : f1.call(null,G__31827));
});
}));

(cljs.core.async.t_cljs$core$async31818.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31795","meta31795",-870618226,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31794","cljs.core.async/t_cljs$core$async31794",-1160806471,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31819","meta31819",1636520486,null)], null);
}));

(cljs.core.async.t_cljs$core$async31818.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31818");

(cljs.core.async.t_cljs$core$async31818.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31818");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31818.
 */
cljs.core.async.__GT_t_cljs$core$async31818 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31818(f__$1,ch__$1,meta31795__$1,___$2,fn1__$1,meta31819){
return (new cljs.core.async.t_cljs$core$async31818(f__$1,ch__$1,meta31795__$1,___$2,fn1__$1,meta31819));
});

}

return (new cljs.core.async.t_cljs$core$async31818(self__.f,self__.ch,self__.meta31795,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31835 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31835) : self__.f.call(null,G__31835));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31794.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31794.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31794.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31795","meta31795",-870618226,null)], null);
}));

(cljs.core.async.t_cljs$core$async31794.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31794.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31794");

(cljs.core.async.t_cljs$core$async31794.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31794");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31794.
 */
cljs.core.async.__GT_t_cljs$core$async31794 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31794(f__$1,ch__$1,meta31795){
return (new cljs.core.async.t_cljs$core$async31794(f__$1,ch__$1,meta31795));
});

}

return (new cljs.core.async.t_cljs$core$async31794(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31843 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31843 = (function (f,ch,meta31844){
this.f = f;
this.ch = ch;
this.meta31844 = meta31844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31845,meta31844__$1){
var self__ = this;
var _31845__$1 = this;
return (new cljs.core.async.t_cljs$core$async31843(self__.f,self__.ch,meta31844__$1));
}));

(cljs.core.async.t_cljs$core$async31843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31845){
var self__ = this;
var _31845__$1 = this;
return self__.meta31844;
}));

(cljs.core.async.t_cljs$core$async31843.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31843.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31843.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31843.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31843.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31843.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31843.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31844","meta31844",-35092530,null)], null);
}));

(cljs.core.async.t_cljs$core$async31843.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31843");

(cljs.core.async.t_cljs$core$async31843.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31843");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31843.
 */
cljs.core.async.__GT_t_cljs$core$async31843 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31843(f__$1,ch__$1,meta31844){
return (new cljs.core.async.t_cljs$core$async31843(f__$1,ch__$1,meta31844));
});

}

return (new cljs.core.async.t_cljs$core$async31843(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
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
cljs.core.async.t_cljs$core$async31879 = (function (p,ch,meta31880){
this.p = p;
this.ch = ch;
this.meta31880 = meta31880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31881,meta31880__$1){
var self__ = this;
var _31881__$1 = this;
return (new cljs.core.async.t_cljs$core$async31879(self__.p,self__.ch,meta31880__$1));
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
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31879.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31879.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31880","meta31880",-1831454650,null)], null);
}));

(cljs.core.async.t_cljs$core$async31879.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31879.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31879");

(cljs.core.async.t_cljs$core$async31879.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31879");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31879.
 */
cljs.core.async.__GT_t_cljs$core$async31879 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31879(p__$1,ch__$1,meta31880){
return (new cljs.core.async.t_cljs$core$async31879(p__$1,ch__$1,meta31880));
});

}

return (new cljs.core.async.t_cljs$core$async31879(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31901 = arguments.length;
switch (G__31901) {
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
var c__29726__auto___33086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29727__auto__ = (function (){var switch__29479__auto__ = (function (state_31934){
var state_val_31935 = (state_31934[(1)]);
if((state_val_31935 === (7))){
var inst_31929 = (state_31934[(2)]);
var state_31934__$1 = state_31934;
var statearr_31940_33087 = state_31934__$1;
(statearr_31940_33087[(2)] = inst_31929);

(statearr_31940_33087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31935 === (1))){
var state_31934__$1 = state_31934;
var statearr_31943_33088 = state_31934__$1;
(statearr_31943_33088[(2)] = null);

(statearr_31943_33088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31935 === (4))){
var inst_31913 = (state_31934[(7)]);
var inst_31913__$1 = (state_31934[(2)]);
var inst_31914 = (inst_31913__$1 == null);
var state_31934__$1 = (function (){var statearr_31946 = state_31934;
(statearr_31946[(7)] = inst_31913__$1);

return statearr_31946;
})();
if(cljs.core.truth_(inst_31914)){
var statearr_31949_33089 = state_31934__$1;
(statearr_31949_33089[(1)] = (5));

} else {
var statearr_31950_33090 = state_31934__$1;
(statearr_31950_33090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31935 === (6))){
var inst_31913 = (state_31934[(7)]);
var inst_31919 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31913) : p.call(null,inst_31913));
var state_31934__$1 = state_31934;
if(cljs.core.truth_(inst_31919)){
var statearr_31951_33091 = state_31934__$1;
(statearr_31951_33091[(1)] = (8));

} else {
var statearr_31953_33092 = state_31934__$1;
(statearr_31953_33092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31935 === (3))){
var inst_31931 = (state_31934[(2)]);
var state_31934__$1 = state_31934;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31934__$1,inst_31931);
} else {
if((state_val_31935 === (2))){
var state_31934__$1 = state_31934;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31934__$1,(4),ch);
} else {
if((state_val_31935 === (11))){
var inst_31922 = (state_31934[(2)]);
var state_31934__$1 = state_31934;
var statearr_31957_33093 = state_31934__$1;
(statearr_31957_33093[(2)] = inst_31922);

(statearr_31957_33093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31935 === (9))){
var state_31934__$1 = state_31934;
var statearr_31959_33094 = state_31934__$1;
(statearr_31959_33094[(2)] = null);

(statearr_31959_33094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31935 === (5))){
var inst_31917 = cljs.core.async.close_BANG_(out);
var state_31934__$1 = state_31934;
var statearr_31963_33095 = state_31934__$1;
(statearr_31963_33095[(2)] = inst_31917);

(statearr_31963_33095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31935 === (10))){
var inst_31926 = (state_31934[(2)]);
var state_31934__$1 = (function (){var statearr_31965 = state_31934;
(statearr_31965[(8)] = inst_31926);

return statearr_31965;
})();
var statearr_31966_33096 = state_31934__$1;
(statearr_31966_33096[(2)] = null);

(statearr_31966_33096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31935 === (8))){
var inst_31913 = (state_31934[(7)]);
var state_31934__$1 = state_31934;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31934__$1,(11),out,inst_31913);
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
var cljs$core$async$state_machine__29480__auto__ = null;
var cljs$core$async$state_machine__29480__auto____0 = (function (){
var statearr_31970 = [null,null,null,null,null,null,null,null,null];
(statearr_31970[(0)] = cljs$core$async$state_machine__29480__auto__);

(statearr_31970[(1)] = (1));

return statearr_31970;
});
var cljs$core$async$state_machine__29480__auto____1 = (function (state_31934){
while(true){
var ret_value__29481__auto__ = (function (){try{while(true){
var result__29482__auto__ = switch__29479__auto__(state_31934);
if(cljs.core.keyword_identical_QMARK_(result__29482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29482__auto__;
}
break;
}
}catch (e31973){if((e31973 instanceof Object)){
var ex__29483__auto__ = e31973;
var statearr_31974_33097 = state_31934;
(statearr_31974_33097[(5)] = ex__29483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31973;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33099 = state_31934;
state_31934 = G__33099;
continue;
} else {
return ret_value__29481__auto__;
}
break;
}
});
cljs$core$async$state_machine__29480__auto__ = function(state_31934){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29480__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29480__auto____1.call(this,state_31934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29480__auto____0;
cljs$core$async$state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29480__auto____1;
return cljs$core$async$state_machine__29480__auto__;
})()
})();
var state__29728__auto__ = (function (){var statearr_31977 = (f__29727__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29727__auto__.cljs$core$IFn$_invoke$arity$0() : f__29727__auto__.call(null));
(statearr_31977[(6)] = c__29726__auto___33086);

return statearr_31977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29728__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31980 = arguments.length;
switch (G__31980) {
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
var c__29726__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29727__auto__ = (function (){var switch__29479__auto__ = (function (state_32071){
var state_val_32072 = (state_32071[(1)]);
if((state_val_32072 === (7))){
var inst_32065 = (state_32071[(2)]);
var state_32071__$1 = state_32071;
var statearr_32079_33108 = state_32071__$1;
(statearr_32079_33108[(2)] = inst_32065);

(statearr_32079_33108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (20))){
var inst_32025 = (state_32071[(7)]);
var inst_32046 = (state_32071[(2)]);
var inst_32047 = cljs.core.next(inst_32025);
var inst_32009 = inst_32047;
var inst_32010 = null;
var inst_32011 = (0);
var inst_32012 = (0);
var state_32071__$1 = (function (){var statearr_32084 = state_32071;
(statearr_32084[(8)] = inst_32009);

(statearr_32084[(9)] = inst_32011);

(statearr_32084[(10)] = inst_32046);

(statearr_32084[(11)] = inst_32012);

(statearr_32084[(12)] = inst_32010);

return statearr_32084;
})();
var statearr_32085_33111 = state_32071__$1;
(statearr_32085_33111[(2)] = null);

(statearr_32085_33111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (1))){
var state_32071__$1 = state_32071;
var statearr_32088_33112 = state_32071__$1;
(statearr_32088_33112[(2)] = null);

(statearr_32088_33112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (4))){
var inst_31997 = (state_32071[(13)]);
var inst_31997__$1 = (state_32071[(2)]);
var inst_31999 = (inst_31997__$1 == null);
var state_32071__$1 = (function (){var statearr_32090 = state_32071;
(statearr_32090[(13)] = inst_31997__$1);

return statearr_32090;
})();
if(cljs.core.truth_(inst_31999)){
var statearr_32091_33113 = state_32071__$1;
(statearr_32091_33113[(1)] = (5));

} else {
var statearr_32092_33114 = state_32071__$1;
(statearr_32092_33114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (15))){
var state_32071__$1 = state_32071;
var statearr_32099_33115 = state_32071__$1;
(statearr_32099_33115[(2)] = null);

(statearr_32099_33115[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (21))){
var state_32071__$1 = state_32071;
var statearr_32104_33116 = state_32071__$1;
(statearr_32104_33116[(2)] = null);

(statearr_32104_33116[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (13))){
var inst_32009 = (state_32071[(8)]);
var inst_32011 = (state_32071[(9)]);
var inst_32012 = (state_32071[(11)]);
var inst_32010 = (state_32071[(12)]);
var inst_32021 = (state_32071[(2)]);
var inst_32022 = (inst_32012 + (1));
var tmp32094 = inst_32009;
var tmp32095 = inst_32011;
var tmp32096 = inst_32010;
var inst_32009__$1 = tmp32094;
var inst_32010__$1 = tmp32096;
var inst_32011__$1 = tmp32095;
var inst_32012__$1 = inst_32022;
var state_32071__$1 = (function (){var statearr_32107 = state_32071;
(statearr_32107[(8)] = inst_32009__$1);

(statearr_32107[(9)] = inst_32011__$1);

(statearr_32107[(14)] = inst_32021);

(statearr_32107[(11)] = inst_32012__$1);

(statearr_32107[(12)] = inst_32010__$1);

return statearr_32107;
})();
var statearr_32108_33117 = state_32071__$1;
(statearr_32108_33117[(2)] = null);

(statearr_32108_33117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (22))){
var state_32071__$1 = state_32071;
var statearr_32113_33118 = state_32071__$1;
(statearr_32113_33118[(2)] = null);

(statearr_32113_33118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (6))){
var inst_31997 = (state_32071[(13)]);
var inst_32007 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31997) : f.call(null,inst_31997));
var inst_32008 = cljs.core.seq(inst_32007);
var inst_32009 = inst_32008;
var inst_32010 = null;
var inst_32011 = (0);
var inst_32012 = (0);
var state_32071__$1 = (function (){var statearr_32116 = state_32071;
(statearr_32116[(8)] = inst_32009);

(statearr_32116[(9)] = inst_32011);

(statearr_32116[(11)] = inst_32012);

(statearr_32116[(12)] = inst_32010);

return statearr_32116;
})();
var statearr_32117_33119 = state_32071__$1;
(statearr_32117_33119[(2)] = null);

(statearr_32117_33119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (17))){
var inst_32025 = (state_32071[(7)]);
var inst_32039 = cljs.core.chunk_first(inst_32025);
var inst_32040 = cljs.core.chunk_rest(inst_32025);
var inst_32041 = cljs.core.count(inst_32039);
var inst_32009 = inst_32040;
var inst_32010 = inst_32039;
var inst_32011 = inst_32041;
var inst_32012 = (0);
var state_32071__$1 = (function (){var statearr_32127 = state_32071;
(statearr_32127[(8)] = inst_32009);

(statearr_32127[(9)] = inst_32011);

(statearr_32127[(11)] = inst_32012);

(statearr_32127[(12)] = inst_32010);

return statearr_32127;
})();
var statearr_32128_33120 = state_32071__$1;
(statearr_32128_33120[(2)] = null);

(statearr_32128_33120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (3))){
var inst_32067 = (state_32071[(2)]);
var state_32071__$1 = state_32071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32071__$1,inst_32067);
} else {
if((state_val_32072 === (12))){
var inst_32055 = (state_32071[(2)]);
var state_32071__$1 = state_32071;
var statearr_32133_33123 = state_32071__$1;
(statearr_32133_33123[(2)] = inst_32055);

(statearr_32133_33123[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (2))){
var state_32071__$1 = state_32071;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32071__$1,(4),in$);
} else {
if((state_val_32072 === (23))){
var inst_32063 = (state_32071[(2)]);
var state_32071__$1 = state_32071;
var statearr_32136_33124 = state_32071__$1;
(statearr_32136_33124[(2)] = inst_32063);

(statearr_32136_33124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (19))){
var inst_32050 = (state_32071[(2)]);
var state_32071__$1 = state_32071;
var statearr_32137_33127 = state_32071__$1;
(statearr_32137_33127[(2)] = inst_32050);

(statearr_32137_33127[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (11))){
var inst_32009 = (state_32071[(8)]);
var inst_32025 = (state_32071[(7)]);
var inst_32025__$1 = cljs.core.seq(inst_32009);
var state_32071__$1 = (function (){var statearr_32138 = state_32071;
(statearr_32138[(7)] = inst_32025__$1);

return statearr_32138;
})();
if(inst_32025__$1){
var statearr_32139_33128 = state_32071__$1;
(statearr_32139_33128[(1)] = (14));

} else {
var statearr_32140_33129 = state_32071__$1;
(statearr_32140_33129[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (9))){
var inst_32057 = (state_32071[(2)]);
var inst_32058 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32071__$1 = (function (){var statearr_32141 = state_32071;
(statearr_32141[(15)] = inst_32057);

return statearr_32141;
})();
if(cljs.core.truth_(inst_32058)){
var statearr_32143_33130 = state_32071__$1;
(statearr_32143_33130[(1)] = (21));

} else {
var statearr_32144_33131 = state_32071__$1;
(statearr_32144_33131[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (5))){
var inst_32001 = cljs.core.async.close_BANG_(out);
var state_32071__$1 = state_32071;
var statearr_32147_33132 = state_32071__$1;
(statearr_32147_33132[(2)] = inst_32001);

(statearr_32147_33132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (14))){
var inst_32025 = (state_32071[(7)]);
var inst_32033 = cljs.core.chunked_seq_QMARK_(inst_32025);
var state_32071__$1 = state_32071;
if(inst_32033){
var statearr_32152_33133 = state_32071__$1;
(statearr_32152_33133[(1)] = (17));

} else {
var statearr_32153_33134 = state_32071__$1;
(statearr_32153_33134[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (16))){
var inst_32053 = (state_32071[(2)]);
var state_32071__$1 = state_32071;
var statearr_32156_33135 = state_32071__$1;
(statearr_32156_33135[(2)] = inst_32053);

(statearr_32156_33135[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32072 === (10))){
var inst_32012 = (state_32071[(11)]);
var inst_32010 = (state_32071[(12)]);
var inst_32019 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32010,inst_32012);
var state_32071__$1 = state_32071;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32071__$1,(13),out,inst_32019);
} else {
if((state_val_32072 === (18))){
var inst_32025 = (state_32071[(7)]);
var inst_32044 = cljs.core.first(inst_32025);
var state_32071__$1 = state_32071;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32071__$1,(20),out,inst_32044);
} else {
if((state_val_32072 === (8))){
var inst_32011 = (state_32071[(9)]);
var inst_32012 = (state_32071[(11)]);
var inst_32014 = (inst_32012 < inst_32011);
var inst_32015 = inst_32014;
var state_32071__$1 = state_32071;
if(cljs.core.truth_(inst_32015)){
var statearr_32159_33137 = state_32071__$1;
(statearr_32159_33137[(1)] = (10));

} else {
var statearr_32160_33138 = state_32071__$1;
(statearr_32160_33138[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__29480__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29480__auto____0 = (function (){
var statearr_32162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32162[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29480__auto__);

(statearr_32162[(1)] = (1));

return statearr_32162;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29480__auto____1 = (function (state_32071){
while(true){
var ret_value__29481__auto__ = (function (){try{while(true){
var result__29482__auto__ = switch__29479__auto__(state_32071);
if(cljs.core.keyword_identical_QMARK_(result__29482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29482__auto__;
}
break;
}
}catch (e32163){if((e32163 instanceof Object)){
var ex__29483__auto__ = e32163;
var statearr_32164_33139 = state_32071;
(statearr_32164_33139[(5)] = ex__29483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32163;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33140 = state_32071;
state_32071 = G__33140;
continue;
} else {
return ret_value__29481__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29480__auto__ = function(state_32071){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29480__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29480__auto____1.call(this,state_32071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29480__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29480__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29480__auto__;
})()
})();
var state__29728__auto__ = (function (){var statearr_32165 = (f__29727__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29727__auto__.cljs$core$IFn$_invoke$arity$0() : f__29727__auto__.call(null));
(statearr_32165[(6)] = c__29726__auto__);

return statearr_32165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29728__auto__);
}));

return c__29726__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32167 = arguments.length;
switch (G__32167) {
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
var G__32169 = arguments.length;
switch (G__32169) {
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
var G__32172 = arguments.length;
switch (G__32172) {
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
var c__29726__auto___33153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29727__auto__ = (function (){var switch__29479__auto__ = (function (state_32201){
var state_val_32206 = (state_32201[(1)]);
if((state_val_32206 === (7))){
var inst_32196 = (state_32201[(2)]);
var state_32201__$1 = state_32201;
var statearr_32211_33154 = state_32201__$1;
(statearr_32211_33154[(2)] = inst_32196);

(statearr_32211_33154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32206 === (1))){
var inst_32174 = null;
var state_32201__$1 = (function (){var statearr_32212 = state_32201;
(statearr_32212[(7)] = inst_32174);

return statearr_32212;
})();
var statearr_32213_33155 = state_32201__$1;
(statearr_32213_33155[(2)] = null);

(statearr_32213_33155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32206 === (4))){
var inst_32177 = (state_32201[(8)]);
var inst_32177__$1 = (state_32201[(2)]);
var inst_32178 = (inst_32177__$1 == null);
var inst_32179 = cljs.core.not(inst_32178);
var state_32201__$1 = (function (){var statearr_32214 = state_32201;
(statearr_32214[(8)] = inst_32177__$1);

return statearr_32214;
})();
if(inst_32179){
var statearr_32215_33156 = state_32201__$1;
(statearr_32215_33156[(1)] = (5));

} else {
var statearr_32216_33160 = state_32201__$1;
(statearr_32216_33160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32206 === (6))){
var state_32201__$1 = state_32201;
var statearr_32217_33161 = state_32201__$1;
(statearr_32217_33161[(2)] = null);

(statearr_32217_33161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32206 === (3))){
var inst_32198 = (state_32201[(2)]);
var inst_32199 = cljs.core.async.close_BANG_(out);
var state_32201__$1 = (function (){var statearr_32218 = state_32201;
(statearr_32218[(9)] = inst_32198);

return statearr_32218;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32201__$1,inst_32199);
} else {
if((state_val_32206 === (2))){
var state_32201__$1 = state_32201;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32201__$1,(4),ch);
} else {
if((state_val_32206 === (11))){
var inst_32177 = (state_32201[(8)]);
var inst_32186 = (state_32201[(2)]);
var inst_32174 = inst_32177;
var state_32201__$1 = (function (){var statearr_32219 = state_32201;
(statearr_32219[(10)] = inst_32186);

(statearr_32219[(7)] = inst_32174);

return statearr_32219;
})();
var statearr_32220_33162 = state_32201__$1;
(statearr_32220_33162[(2)] = null);

(statearr_32220_33162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32206 === (9))){
var inst_32177 = (state_32201[(8)]);
var state_32201__$1 = state_32201;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32201__$1,(11),out,inst_32177);
} else {
if((state_val_32206 === (5))){
var inst_32177 = (state_32201[(8)]);
var inst_32174 = (state_32201[(7)]);
var inst_32181 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32177,inst_32174);
var state_32201__$1 = state_32201;
if(inst_32181){
var statearr_32222_33166 = state_32201__$1;
(statearr_32222_33166[(1)] = (8));

} else {
var statearr_32223_33167 = state_32201__$1;
(statearr_32223_33167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32206 === (10))){
var inst_32193 = (state_32201[(2)]);
var state_32201__$1 = state_32201;
var statearr_32224_33171 = state_32201__$1;
(statearr_32224_33171[(2)] = inst_32193);

(statearr_32224_33171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32206 === (8))){
var inst_32174 = (state_32201[(7)]);
var tmp32221 = inst_32174;
var inst_32174__$1 = tmp32221;
var state_32201__$1 = (function (){var statearr_32225 = state_32201;
(statearr_32225[(7)] = inst_32174__$1);

return statearr_32225;
})();
var statearr_32226_33172 = state_32201__$1;
(statearr_32226_33172[(2)] = null);

(statearr_32226_33172[(1)] = (2));


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
var cljs$core$async$state_machine__29480__auto__ = null;
var cljs$core$async$state_machine__29480__auto____0 = (function (){
var statearr_32227 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32227[(0)] = cljs$core$async$state_machine__29480__auto__);

(statearr_32227[(1)] = (1));

return statearr_32227;
});
var cljs$core$async$state_machine__29480__auto____1 = (function (state_32201){
while(true){
var ret_value__29481__auto__ = (function (){try{while(true){
var result__29482__auto__ = switch__29479__auto__(state_32201);
if(cljs.core.keyword_identical_QMARK_(result__29482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29482__auto__;
}
break;
}
}catch (e32228){if((e32228 instanceof Object)){
var ex__29483__auto__ = e32228;
var statearr_32229_33176 = state_32201;
(statearr_32229_33176[(5)] = ex__29483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32228;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33177 = state_32201;
state_32201 = G__33177;
continue;
} else {
return ret_value__29481__auto__;
}
break;
}
});
cljs$core$async$state_machine__29480__auto__ = function(state_32201){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29480__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29480__auto____1.call(this,state_32201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29480__auto____0;
cljs$core$async$state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29480__auto____1;
return cljs$core$async$state_machine__29480__auto__;
})()
})();
var state__29728__auto__ = (function (){var statearr_32230 = (f__29727__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29727__auto__.cljs$core$IFn$_invoke$arity$0() : f__29727__auto__.call(null));
(statearr_32230[(6)] = c__29726__auto___33153);

return statearr_32230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29728__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32232 = arguments.length;
switch (G__32232) {
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
var c__29726__auto___33180 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29727__auto__ = (function (){var switch__29479__auto__ = (function (state_32270){
var state_val_32271 = (state_32270[(1)]);
if((state_val_32271 === (7))){
var inst_32266 = (state_32270[(2)]);
var state_32270__$1 = state_32270;
var statearr_32272_33181 = state_32270__$1;
(statearr_32272_33181[(2)] = inst_32266);

(statearr_32272_33181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (1))){
var inst_32233 = (new Array(n));
var inst_32234 = inst_32233;
var inst_32235 = (0);
var state_32270__$1 = (function (){var statearr_32273 = state_32270;
(statearr_32273[(7)] = inst_32234);

(statearr_32273[(8)] = inst_32235);

return statearr_32273;
})();
var statearr_32274_33182 = state_32270__$1;
(statearr_32274_33182[(2)] = null);

(statearr_32274_33182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (4))){
var inst_32238 = (state_32270[(9)]);
var inst_32238__$1 = (state_32270[(2)]);
var inst_32239 = (inst_32238__$1 == null);
var inst_32240 = cljs.core.not(inst_32239);
var state_32270__$1 = (function (){var statearr_32275 = state_32270;
(statearr_32275[(9)] = inst_32238__$1);

return statearr_32275;
})();
if(inst_32240){
var statearr_32277_33192 = state_32270__$1;
(statearr_32277_33192[(1)] = (5));

} else {
var statearr_32278_33193 = state_32270__$1;
(statearr_32278_33193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (15))){
var inst_32260 = (state_32270[(2)]);
var state_32270__$1 = state_32270;
var statearr_32279_33200 = state_32270__$1;
(statearr_32279_33200[(2)] = inst_32260);

(statearr_32279_33200[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (13))){
var state_32270__$1 = state_32270;
var statearr_32280_33201 = state_32270__$1;
(statearr_32280_33201[(2)] = null);

(statearr_32280_33201[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (6))){
var inst_32235 = (state_32270[(8)]);
var inst_32256 = (inst_32235 > (0));
var state_32270__$1 = state_32270;
if(cljs.core.truth_(inst_32256)){
var statearr_32281_33202 = state_32270__$1;
(statearr_32281_33202[(1)] = (12));

} else {
var statearr_32282_33203 = state_32270__$1;
(statearr_32282_33203[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (3))){
var inst_32268 = (state_32270[(2)]);
var state_32270__$1 = state_32270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32270__$1,inst_32268);
} else {
if((state_val_32271 === (12))){
var inst_32234 = (state_32270[(7)]);
var inst_32258 = cljs.core.vec(inst_32234);
var state_32270__$1 = state_32270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32270__$1,(15),out,inst_32258);
} else {
if((state_val_32271 === (2))){
var state_32270__$1 = state_32270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32270__$1,(4),ch);
} else {
if((state_val_32271 === (11))){
var inst_32250 = (state_32270[(2)]);
var inst_32251 = (new Array(n));
var inst_32234 = inst_32251;
var inst_32235 = (0);
var state_32270__$1 = (function (){var statearr_32283 = state_32270;
(statearr_32283[(7)] = inst_32234);

(statearr_32283[(8)] = inst_32235);

(statearr_32283[(10)] = inst_32250);

return statearr_32283;
})();
var statearr_32284_33204 = state_32270__$1;
(statearr_32284_33204[(2)] = null);

(statearr_32284_33204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (9))){
var inst_32234 = (state_32270[(7)]);
var inst_32248 = cljs.core.vec(inst_32234);
var state_32270__$1 = state_32270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32270__$1,(11),out,inst_32248);
} else {
if((state_val_32271 === (5))){
var inst_32234 = (state_32270[(7)]);
var inst_32238 = (state_32270[(9)]);
var inst_32243 = (state_32270[(11)]);
var inst_32235 = (state_32270[(8)]);
var inst_32242 = (inst_32234[inst_32235] = inst_32238);
var inst_32243__$1 = (inst_32235 + (1));
var inst_32244 = (inst_32243__$1 < n);
var state_32270__$1 = (function (){var statearr_32285 = state_32270;
(statearr_32285[(12)] = inst_32242);

(statearr_32285[(11)] = inst_32243__$1);

return statearr_32285;
})();
if(cljs.core.truth_(inst_32244)){
var statearr_32286_33211 = state_32270__$1;
(statearr_32286_33211[(1)] = (8));

} else {
var statearr_32287_33212 = state_32270__$1;
(statearr_32287_33212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (14))){
var inst_32263 = (state_32270[(2)]);
var inst_32264 = cljs.core.async.close_BANG_(out);
var state_32270__$1 = (function (){var statearr_32290 = state_32270;
(statearr_32290[(13)] = inst_32263);

return statearr_32290;
})();
var statearr_32291_33213 = state_32270__$1;
(statearr_32291_33213[(2)] = inst_32264);

(statearr_32291_33213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (10))){
var inst_32254 = (state_32270[(2)]);
var state_32270__$1 = state_32270;
var statearr_32292_33214 = state_32270__$1;
(statearr_32292_33214[(2)] = inst_32254);

(statearr_32292_33214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (8))){
var inst_32234 = (state_32270[(7)]);
var inst_32243 = (state_32270[(11)]);
var tmp32288 = inst_32234;
var inst_32234__$1 = tmp32288;
var inst_32235 = inst_32243;
var state_32270__$1 = (function (){var statearr_32293 = state_32270;
(statearr_32293[(7)] = inst_32234__$1);

(statearr_32293[(8)] = inst_32235);

return statearr_32293;
})();
var statearr_32294_33215 = state_32270__$1;
(statearr_32294_33215[(2)] = null);

(statearr_32294_33215[(1)] = (2));


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
var cljs$core$async$state_machine__29480__auto__ = null;
var cljs$core$async$state_machine__29480__auto____0 = (function (){
var statearr_32295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32295[(0)] = cljs$core$async$state_machine__29480__auto__);

(statearr_32295[(1)] = (1));

return statearr_32295;
});
var cljs$core$async$state_machine__29480__auto____1 = (function (state_32270){
while(true){
var ret_value__29481__auto__ = (function (){try{while(true){
var result__29482__auto__ = switch__29479__auto__(state_32270);
if(cljs.core.keyword_identical_QMARK_(result__29482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29482__auto__;
}
break;
}
}catch (e32296){if((e32296 instanceof Object)){
var ex__29483__auto__ = e32296;
var statearr_32297_33216 = state_32270;
(statearr_32297_33216[(5)] = ex__29483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32296;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33223 = state_32270;
state_32270 = G__33223;
continue;
} else {
return ret_value__29481__auto__;
}
break;
}
});
cljs$core$async$state_machine__29480__auto__ = function(state_32270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29480__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29480__auto____1.call(this,state_32270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29480__auto____0;
cljs$core$async$state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29480__auto____1;
return cljs$core$async$state_machine__29480__auto__;
})()
})();
var state__29728__auto__ = (function (){var statearr_32300 = (f__29727__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29727__auto__.cljs$core$IFn$_invoke$arity$0() : f__29727__auto__.call(null));
(statearr_32300[(6)] = c__29726__auto___33180);

return statearr_32300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29728__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32306 = arguments.length;
switch (G__32306) {
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
var c__29726__auto___33225 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29727__auto__ = (function (){var switch__29479__auto__ = (function (state_32369){
var state_val_32374 = (state_32369[(1)]);
if((state_val_32374 === (7))){
var inst_32361 = (state_32369[(2)]);
var state_32369__$1 = state_32369;
var statearr_32380_33226 = state_32369__$1;
(statearr_32380_33226[(2)] = inst_32361);

(statearr_32380_33226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (1))){
var inst_32309 = [];
var inst_32310 = inst_32309;
var inst_32311 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32369__$1 = (function (){var statearr_32381 = state_32369;
(statearr_32381[(7)] = inst_32311);

(statearr_32381[(8)] = inst_32310);

return statearr_32381;
})();
var statearr_32382_33233 = state_32369__$1;
(statearr_32382_33233[(2)] = null);

(statearr_32382_33233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (4))){
var inst_32314 = (state_32369[(9)]);
var inst_32314__$1 = (state_32369[(2)]);
var inst_32315 = (inst_32314__$1 == null);
var inst_32316 = cljs.core.not(inst_32315);
var state_32369__$1 = (function (){var statearr_32383 = state_32369;
(statearr_32383[(9)] = inst_32314__$1);

return statearr_32383;
})();
if(inst_32316){
var statearr_32384_33234 = state_32369__$1;
(statearr_32384_33234[(1)] = (5));

} else {
var statearr_32385_33235 = state_32369__$1;
(statearr_32385_33235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (15))){
var inst_32354 = (state_32369[(2)]);
var state_32369__$1 = state_32369;
var statearr_32386_33236 = state_32369__$1;
(statearr_32386_33236[(2)] = inst_32354);

(statearr_32386_33236[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (13))){
var state_32369__$1 = state_32369;
var statearr_32387_33237 = state_32369__$1;
(statearr_32387_33237[(2)] = null);

(statearr_32387_33237[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (6))){
var inst_32310 = (state_32369[(8)]);
var inst_32349 = inst_32310.length;
var inst_32350 = (inst_32349 > (0));
var state_32369__$1 = state_32369;
if(cljs.core.truth_(inst_32350)){
var statearr_32388_33238 = state_32369__$1;
(statearr_32388_33238[(1)] = (12));

} else {
var statearr_32389_33239 = state_32369__$1;
(statearr_32389_33239[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (3))){
var inst_32363 = (state_32369[(2)]);
var state_32369__$1 = state_32369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32369__$1,inst_32363);
} else {
if((state_val_32374 === (12))){
var inst_32310 = (state_32369[(8)]);
var inst_32352 = cljs.core.vec(inst_32310);
var state_32369__$1 = state_32369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32369__$1,(15),out,inst_32352);
} else {
if((state_val_32374 === (2))){
var state_32369__$1 = state_32369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32369__$1,(4),ch);
} else {
if((state_val_32374 === (11))){
var inst_32318 = (state_32369[(10)]);
var inst_32314 = (state_32369[(9)]);
var inst_32333 = (state_32369[(2)]);
var inst_32343 = [];
var inst_32344 = inst_32343.push(inst_32314);
var inst_32310 = inst_32343;
var inst_32311 = inst_32318;
var state_32369__$1 = (function (){var statearr_32390 = state_32369;
(statearr_32390[(7)] = inst_32311);

(statearr_32390[(11)] = inst_32344);

(statearr_32390[(8)] = inst_32310);

(statearr_32390[(12)] = inst_32333);

return statearr_32390;
})();
var statearr_32391_33243 = state_32369__$1;
(statearr_32391_33243[(2)] = null);

(statearr_32391_33243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (9))){
var inst_32310 = (state_32369[(8)]);
var inst_32331 = cljs.core.vec(inst_32310);
var state_32369__$1 = state_32369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32369__$1,(11),out,inst_32331);
} else {
if((state_val_32374 === (5))){
var inst_32311 = (state_32369[(7)]);
var inst_32318 = (state_32369[(10)]);
var inst_32314 = (state_32369[(9)]);
var inst_32318__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32314) : f.call(null,inst_32314));
var inst_32324 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32318__$1,inst_32311);
var inst_32325 = cljs.core.keyword_identical_QMARK_(inst_32311,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32326 = ((inst_32324) || (inst_32325));
var state_32369__$1 = (function (){var statearr_32395 = state_32369;
(statearr_32395[(10)] = inst_32318__$1);

return statearr_32395;
})();
if(cljs.core.truth_(inst_32326)){
var statearr_32396_33244 = state_32369__$1;
(statearr_32396_33244[(1)] = (8));

} else {
var statearr_32397_33248 = state_32369__$1;
(statearr_32397_33248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (14))){
var inst_32357 = (state_32369[(2)]);
var inst_32359 = cljs.core.async.close_BANG_(out);
var state_32369__$1 = (function (){var statearr_32399 = state_32369;
(statearr_32399[(13)] = inst_32357);

return statearr_32399;
})();
var statearr_32400_33249 = state_32369__$1;
(statearr_32400_33249[(2)] = inst_32359);

(statearr_32400_33249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (10))){
var inst_32347 = (state_32369[(2)]);
var state_32369__$1 = state_32369;
var statearr_32401_33250 = state_32369__$1;
(statearr_32401_33250[(2)] = inst_32347);

(statearr_32401_33250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (8))){
var inst_32310 = (state_32369[(8)]);
var inst_32318 = (state_32369[(10)]);
var inst_32314 = (state_32369[(9)]);
var inst_32328 = inst_32310.push(inst_32314);
var tmp32398 = inst_32310;
var inst_32310__$1 = tmp32398;
var inst_32311 = inst_32318;
var state_32369__$1 = (function (){var statearr_32402 = state_32369;
(statearr_32402[(7)] = inst_32311);

(statearr_32402[(8)] = inst_32310__$1);

(statearr_32402[(14)] = inst_32328);

return statearr_32402;
})();
var statearr_32403_33253 = state_32369__$1;
(statearr_32403_33253[(2)] = null);

(statearr_32403_33253[(1)] = (2));


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
var cljs$core$async$state_machine__29480__auto__ = null;
var cljs$core$async$state_machine__29480__auto____0 = (function (){
var statearr_32405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32405[(0)] = cljs$core$async$state_machine__29480__auto__);

(statearr_32405[(1)] = (1));

return statearr_32405;
});
var cljs$core$async$state_machine__29480__auto____1 = (function (state_32369){
while(true){
var ret_value__29481__auto__ = (function (){try{while(true){
var result__29482__auto__ = switch__29479__auto__(state_32369);
if(cljs.core.keyword_identical_QMARK_(result__29482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29482__auto__;
}
break;
}
}catch (e32406){if((e32406 instanceof Object)){
var ex__29483__auto__ = e32406;
var statearr_32407_33254 = state_32369;
(statearr_32407_33254[(5)] = ex__29483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32406;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33255 = state_32369;
state_32369 = G__33255;
continue;
} else {
return ret_value__29481__auto__;
}
break;
}
});
cljs$core$async$state_machine__29480__auto__ = function(state_32369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29480__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29480__auto____1.call(this,state_32369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29480__auto____0;
cljs$core$async$state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29480__auto____1;
return cljs$core$async$state_machine__29480__auto__;
})()
})();
var state__29728__auto__ = (function (){var statearr_32408 = (f__29727__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29727__auto__.cljs$core$IFn$_invoke$arity$0() : f__29727__auto__.call(null));
(statearr_32408[(6)] = c__29726__auto___33225);

return statearr_32408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29728__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
