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
var G__30086 = arguments.length;
switch (G__30086) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30090 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30090 = (function (f,blockable,meta30091){
this.f = f;
this.blockable = blockable;
this.meta30091 = meta30091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30092,meta30091__$1){
var self__ = this;
var _30092__$1 = this;
return (new cljs.core.async.t_cljs$core$async30090(self__.f,self__.blockable,meta30091__$1));
}));

(cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30092){
var self__ = this;
var _30092__$1 = this;
return self__.meta30091;
}));

(cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30090.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30091","meta30091",-1798148299,null)], null);
}));

(cljs.core.async.t_cljs$core$async30090.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30090.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30090");

(cljs.core.async.t_cljs$core$async30090.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30090");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30090.
 */
cljs.core.async.__GT_t_cljs$core$async30090 = (function cljs$core$async$__GT_t_cljs$core$async30090(f__$1,blockable__$1,meta30091){
return (new cljs.core.async.t_cljs$core$async30090(f__$1,blockable__$1,meta30091));
});

}

return (new cljs.core.async.t_cljs$core$async30090(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30128 = arguments.length;
switch (G__30128) {
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
var G__30146 = arguments.length;
switch (G__30146) {
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
var G__30162 = arguments.length;
switch (G__30162) {
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
var G__30184 = arguments.length;
switch (G__30184) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30227 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30227 = (function (flag,meta30228){
this.flag = flag;
this.meta30228 = meta30228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30229,meta30228__$1){
var self__ = this;
var _30229__$1 = this;
return (new cljs.core.async.t_cljs$core$async30227(self__.flag,meta30228__$1));
}));

(cljs.core.async.t_cljs$core$async30227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30229){
var self__ = this;
var _30229__$1 = this;
return self__.meta30228;
}));

(cljs.core.async.t_cljs$core$async30227.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30227.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30227.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30227.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30227.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30228","meta30228",1225255545,null)], null);
}));

(cljs.core.async.t_cljs$core$async30227.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30227.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30227");

(cljs.core.async.t_cljs$core$async30227.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30227");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30227.
 */
cljs.core.async.__GT_t_cljs$core$async30227 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30227(flag__$1,meta30228){
return (new cljs.core.async.t_cljs$core$async30227(flag__$1,meta30228));
});

}

return (new cljs.core.async.t_cljs$core$async30227(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30232 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30232 = (function (flag,cb,meta30233){
this.flag = flag;
this.cb = cb;
this.meta30233 = meta30233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30234,meta30233__$1){
var self__ = this;
var _30234__$1 = this;
return (new cljs.core.async.t_cljs$core$async30232(self__.flag,self__.cb,meta30233__$1));
}));

(cljs.core.async.t_cljs$core$async30232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30234){
var self__ = this;
var _30234__$1 = this;
return self__.meta30233;
}));

(cljs.core.async.t_cljs$core$async30232.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30232.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30232.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30232.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30233","meta30233",1597246133,null)], null);
}));

(cljs.core.async.t_cljs$core$async30232.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30232");

(cljs.core.async.t_cljs$core$async30232.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30232");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30232.
 */
cljs.core.async.__GT_t_cljs$core$async30232 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30232(flag__$1,cb__$1,meta30233){
return (new cljs.core.async.t_cljs$core$async30232(flag__$1,cb__$1,meta30233));
});

}

return (new cljs.core.async.t_cljs$core$async30232(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30247_SHARP_){
var G__30263 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30247_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30263) : fret.call(null,G__30263));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30248_SHARP_){
var G__30264 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30248_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30264) : fret.call(null,G__30264));
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
var G__32429 = (i + (1));
i = G__32429;
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

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30366){
var map__30367 = p__30366;
var map__30367__$1 = (((((!((map__30367 == null))))?(((((map__30367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30367):map__30367);
var opts = map__30367__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30364){
var G__30365 = cljs.core.first(seq30364);
var seq30364__$1 = cljs.core.next(seq30364);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30365,seq30364__$1);
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
var G__30390 = arguments.length;
switch (G__30390) {
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
var c__30026__auto___32449 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30027__auto__ = (function (){var switch__29676__auto__ = (function (state_30477){
var state_val_30479 = (state_30477[(1)]);
if((state_val_30479 === (7))){
var inst_30466 = (state_30477[(2)]);
var state_30477__$1 = state_30477;
var statearr_30484_32450 = state_30477__$1;
(statearr_30484_32450[(2)] = inst_30466);

(statearr_30484_32450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (1))){
var state_30477__$1 = state_30477;
var statearr_30491_32452 = state_30477__$1;
(statearr_30491_32452[(2)] = null);

(statearr_30491_32452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (4))){
var inst_30437 = (state_30477[(7)]);
var inst_30437__$1 = (state_30477[(2)]);
var inst_30438 = (inst_30437__$1 == null);
var state_30477__$1 = (function (){var statearr_30492 = state_30477;
(statearr_30492[(7)] = inst_30437__$1);

return statearr_30492;
})();
if(cljs.core.truth_(inst_30438)){
var statearr_30493_32456 = state_30477__$1;
(statearr_30493_32456[(1)] = (5));

} else {
var statearr_30494_32457 = state_30477__$1;
(statearr_30494_32457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (13))){
var state_30477__$1 = state_30477;
var statearr_30495_32458 = state_30477__$1;
(statearr_30495_32458[(2)] = null);

(statearr_30495_32458[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (6))){
var inst_30437 = (state_30477[(7)]);
var state_30477__$1 = state_30477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30477__$1,(11),to,inst_30437);
} else {
if((state_val_30479 === (3))){
var inst_30471 = (state_30477[(2)]);
var state_30477__$1 = state_30477;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30477__$1,inst_30471);
} else {
if((state_val_30479 === (12))){
var state_30477__$1 = state_30477;
var statearr_30506_32461 = state_30477__$1;
(statearr_30506_32461[(2)] = null);

(statearr_30506_32461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (2))){
var state_30477__$1 = state_30477;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30477__$1,(4),from);
} else {
if((state_val_30479 === (11))){
var inst_30456 = (state_30477[(2)]);
var state_30477__$1 = state_30477;
if(cljs.core.truth_(inst_30456)){
var statearr_30507_32463 = state_30477__$1;
(statearr_30507_32463[(1)] = (12));

} else {
var statearr_30508_32464 = state_30477__$1;
(statearr_30508_32464[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (9))){
var state_30477__$1 = state_30477;
var statearr_30509_32465 = state_30477__$1;
(statearr_30509_32465[(2)] = null);

(statearr_30509_32465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (5))){
var state_30477__$1 = state_30477;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30510_32466 = state_30477__$1;
(statearr_30510_32466[(1)] = (8));

} else {
var statearr_30511_32467 = state_30477__$1;
(statearr_30511_32467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (14))){
var inst_30464 = (state_30477[(2)]);
var state_30477__$1 = state_30477;
var statearr_30512_32470 = state_30477__$1;
(statearr_30512_32470[(2)] = inst_30464);

(statearr_30512_32470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (10))){
var inst_30453 = (state_30477[(2)]);
var state_30477__$1 = state_30477;
var statearr_30513_32473 = state_30477__$1;
(statearr_30513_32473[(2)] = inst_30453);

(statearr_30513_32473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (8))){
var inst_30450 = cljs.core.async.close_BANG_(to);
var state_30477__$1 = state_30477;
var statearr_30514_32474 = state_30477__$1;
(statearr_30514_32474[(2)] = inst_30450);

(statearr_30514_32474[(1)] = (10));


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
var cljs$core$async$state_machine__29677__auto__ = null;
var cljs$core$async$state_machine__29677__auto____0 = (function (){
var statearr_30518 = [null,null,null,null,null,null,null,null];
(statearr_30518[(0)] = cljs$core$async$state_machine__29677__auto__);

(statearr_30518[(1)] = (1));

return statearr_30518;
});
var cljs$core$async$state_machine__29677__auto____1 = (function (state_30477){
while(true){
var ret_value__29678__auto__ = (function (){try{while(true){
var result__29679__auto__ = switch__29676__auto__(state_30477);
if(cljs.core.keyword_identical_QMARK_(result__29679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29679__auto__;
}
break;
}
}catch (e30522){if((e30522 instanceof Object)){
var ex__29680__auto__ = e30522;
var statearr_30532_32480 = state_30477;
(statearr_30532_32480[(5)] = ex__29680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30522;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32481 = state_30477;
state_30477 = G__32481;
continue;
} else {
return ret_value__29678__auto__;
}
break;
}
});
cljs$core$async$state_machine__29677__auto__ = function(state_30477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29677__auto____1.call(this,state_30477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29677__auto____0;
cljs$core$async$state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29677__auto____1;
return cljs$core$async$state_machine__29677__auto__;
})()
})();
var state__30028__auto__ = (function (){var statearr_30539 = (f__30027__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30027__auto__.cljs$core$IFn$_invoke$arity$0() : f__30027__auto__.call(null));
(statearr_30539[(6)] = c__30026__auto___32449);

return statearr_30539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30028__auto__);
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
var process = (function (p__30540){
var vec__30544 = p__30540;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30544,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30544,(1),null);
var job = vec__30544;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30026__auto___32485 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30027__auto__ = (function (){var switch__29676__auto__ = (function (state_30557){
var state_val_30558 = (state_30557[(1)]);
if((state_val_30558 === (1))){
var state_30557__$1 = state_30557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30557__$1,(2),res,v);
} else {
if((state_val_30558 === (2))){
var inst_30554 = (state_30557[(2)]);
var inst_30555 = cljs.core.async.close_BANG_(res);
var state_30557__$1 = (function (){var statearr_30572 = state_30557;
(statearr_30572[(7)] = inst_30554);

return statearr_30572;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30557__$1,inst_30555);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____0 = (function (){
var statearr_30574 = [null,null,null,null,null,null,null,null];
(statearr_30574[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__);

(statearr_30574[(1)] = (1));

return statearr_30574;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____1 = (function (state_30557){
while(true){
var ret_value__29678__auto__ = (function (){try{while(true){
var result__29679__auto__ = switch__29676__auto__(state_30557);
if(cljs.core.keyword_identical_QMARK_(result__29679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29679__auto__;
}
break;
}
}catch (e30575){if((e30575 instanceof Object)){
var ex__29680__auto__ = e30575;
var statearr_30576_32491 = state_30557;
(statearr_30576_32491[(5)] = ex__29680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30575;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32493 = state_30557;
state_30557 = G__32493;
continue;
} else {
return ret_value__29678__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__ = function(state_30557){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____1.call(this,state_30557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__;
})()
})();
var state__30028__auto__ = (function (){var statearr_30577 = (f__30027__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30027__auto__.cljs$core$IFn$_invoke$arity$0() : f__30027__auto__.call(null));
(statearr_30577[(6)] = c__30026__auto___32485);

return statearr_30577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30028__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30578){
var vec__30579 = p__30578;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30579,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30579,(1),null);
var job = vec__30579;
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
var n__4666__auto___32497 = n;
var __32499 = (0);
while(true){
if((__32499 < n__4666__auto___32497)){
var G__30582_32500 = type;
var G__30582_32501__$1 = (((G__30582_32500 instanceof cljs.core.Keyword))?G__30582_32500.fqn:null);
switch (G__30582_32501__$1) {
case "compute":
var c__30026__auto___32503 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32499,c__30026__auto___32503,G__30582_32500,G__30582_32501__$1,n__4666__auto___32497,jobs,results,process,async){
return (function (){
var f__30027__auto__ = (function (){var switch__29676__auto__ = ((function (__32499,c__30026__auto___32503,G__30582_32500,G__30582_32501__$1,n__4666__auto___32497,jobs,results,process,async){
return (function (state_30595){
var state_val_30596 = (state_30595[(1)]);
if((state_val_30596 === (1))){
var state_30595__$1 = state_30595;
var statearr_30597_32504 = state_30595__$1;
(statearr_30597_32504[(2)] = null);

(statearr_30597_32504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30596 === (2))){
var state_30595__$1 = state_30595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30595__$1,(4),jobs);
} else {
if((state_val_30596 === (3))){
var inst_30593 = (state_30595[(2)]);
var state_30595__$1 = state_30595;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30595__$1,inst_30593);
} else {
if((state_val_30596 === (4))){
var inst_30585 = (state_30595[(2)]);
var inst_30586 = process(inst_30585);
var state_30595__$1 = state_30595;
if(cljs.core.truth_(inst_30586)){
var statearr_30598_32505 = state_30595__$1;
(statearr_30598_32505[(1)] = (5));

} else {
var statearr_30599_32506 = state_30595__$1;
(statearr_30599_32506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30596 === (5))){
var state_30595__$1 = state_30595;
var statearr_30600_32507 = state_30595__$1;
(statearr_30600_32507[(2)] = null);

(statearr_30600_32507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30596 === (6))){
var state_30595__$1 = state_30595;
var statearr_30601_32510 = state_30595__$1;
(statearr_30601_32510[(2)] = null);

(statearr_30601_32510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30596 === (7))){
var inst_30591 = (state_30595[(2)]);
var state_30595__$1 = state_30595;
var statearr_30602_32512 = state_30595__$1;
(statearr_30602_32512[(2)] = inst_30591);

(statearr_30602_32512[(1)] = (3));


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
});})(__32499,c__30026__auto___32503,G__30582_32500,G__30582_32501__$1,n__4666__auto___32497,jobs,results,process,async))
;
return ((function (__32499,switch__29676__auto__,c__30026__auto___32503,G__30582_32500,G__30582_32501__$1,n__4666__auto___32497,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____0 = (function (){
var statearr_30603 = [null,null,null,null,null,null,null];
(statearr_30603[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__);

(statearr_30603[(1)] = (1));

return statearr_30603;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____1 = (function (state_30595){
while(true){
var ret_value__29678__auto__ = (function (){try{while(true){
var result__29679__auto__ = switch__29676__auto__(state_30595);
if(cljs.core.keyword_identical_QMARK_(result__29679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29679__auto__;
}
break;
}
}catch (e30604){if((e30604 instanceof Object)){
var ex__29680__auto__ = e30604;
var statearr_30605_32516 = state_30595;
(statearr_30605_32516[(5)] = ex__29680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30604;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32517 = state_30595;
state_30595 = G__32517;
continue;
} else {
return ret_value__29678__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__ = function(state_30595){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____1.call(this,state_30595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__;
})()
;})(__32499,switch__29676__auto__,c__30026__auto___32503,G__30582_32500,G__30582_32501__$1,n__4666__auto___32497,jobs,results,process,async))
})();
var state__30028__auto__ = (function (){var statearr_30606 = (f__30027__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30027__auto__.cljs$core$IFn$_invoke$arity$0() : f__30027__auto__.call(null));
(statearr_30606[(6)] = c__30026__auto___32503);

return statearr_30606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30028__auto__);
});})(__32499,c__30026__auto___32503,G__30582_32500,G__30582_32501__$1,n__4666__auto___32497,jobs,results,process,async))
);


break;
case "async":
var c__30026__auto___32520 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32499,c__30026__auto___32520,G__30582_32500,G__30582_32501__$1,n__4666__auto___32497,jobs,results,process,async){
return (function (){
var f__30027__auto__ = (function (){var switch__29676__auto__ = ((function (__32499,c__30026__auto___32520,G__30582_32500,G__30582_32501__$1,n__4666__auto___32497,jobs,results,process,async){
return (function (state_30619){
var state_val_30620 = (state_30619[(1)]);
if((state_val_30620 === (1))){
var state_30619__$1 = state_30619;
var statearr_30621_32521 = state_30619__$1;
(statearr_30621_32521[(2)] = null);

(statearr_30621_32521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30620 === (2))){
var state_30619__$1 = state_30619;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30619__$1,(4),jobs);
} else {
if((state_val_30620 === (3))){
var inst_30617 = (state_30619[(2)]);
var state_30619__$1 = state_30619;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30619__$1,inst_30617);
} else {
if((state_val_30620 === (4))){
var inst_30609 = (state_30619[(2)]);
var inst_30610 = async(inst_30609);
var state_30619__$1 = state_30619;
if(cljs.core.truth_(inst_30610)){
var statearr_30622_32523 = state_30619__$1;
(statearr_30622_32523[(1)] = (5));

} else {
var statearr_30623_32524 = state_30619__$1;
(statearr_30623_32524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30620 === (5))){
var state_30619__$1 = state_30619;
var statearr_30624_32527 = state_30619__$1;
(statearr_30624_32527[(2)] = null);

(statearr_30624_32527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30620 === (6))){
var state_30619__$1 = state_30619;
var statearr_30625_32528 = state_30619__$1;
(statearr_30625_32528[(2)] = null);

(statearr_30625_32528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30620 === (7))){
var inst_30615 = (state_30619[(2)]);
var state_30619__$1 = state_30619;
var statearr_30626_32530 = state_30619__$1;
(statearr_30626_32530[(2)] = inst_30615);

(statearr_30626_32530[(1)] = (3));


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
});})(__32499,c__30026__auto___32520,G__30582_32500,G__30582_32501__$1,n__4666__auto___32497,jobs,results,process,async))
;
return ((function (__32499,switch__29676__auto__,c__30026__auto___32520,G__30582_32500,G__30582_32501__$1,n__4666__auto___32497,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____0 = (function (){
var statearr_30627 = [null,null,null,null,null,null,null];
(statearr_30627[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__);

(statearr_30627[(1)] = (1));

return statearr_30627;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____1 = (function (state_30619){
while(true){
var ret_value__29678__auto__ = (function (){try{while(true){
var result__29679__auto__ = switch__29676__auto__(state_30619);
if(cljs.core.keyword_identical_QMARK_(result__29679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29679__auto__;
}
break;
}
}catch (e30630){if((e30630 instanceof Object)){
var ex__29680__auto__ = e30630;
var statearr_30632_32531 = state_30619;
(statearr_30632_32531[(5)] = ex__29680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30630;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32534 = state_30619;
state_30619 = G__32534;
continue;
} else {
return ret_value__29678__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__ = function(state_30619){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____1.call(this,state_30619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__;
})()
;})(__32499,switch__29676__auto__,c__30026__auto___32520,G__30582_32500,G__30582_32501__$1,n__4666__auto___32497,jobs,results,process,async))
})();
var state__30028__auto__ = (function (){var statearr_30633 = (f__30027__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30027__auto__.cljs$core$IFn$_invoke$arity$0() : f__30027__auto__.call(null));
(statearr_30633[(6)] = c__30026__auto___32520);

return statearr_30633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30028__auto__);
});})(__32499,c__30026__auto___32520,G__30582_32500,G__30582_32501__$1,n__4666__auto___32497,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30582_32501__$1)].join('')));

}

var G__32536 = (__32499 + (1));
__32499 = G__32536;
continue;
} else {
}
break;
}

var c__30026__auto___32537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30027__auto__ = (function (){var switch__29676__auto__ = (function (state_30656){
var state_val_30657 = (state_30656[(1)]);
if((state_val_30657 === (7))){
var inst_30652 = (state_30656[(2)]);
var state_30656__$1 = state_30656;
var statearr_30658_32548 = state_30656__$1;
(statearr_30658_32548[(2)] = inst_30652);

(statearr_30658_32548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30657 === (1))){
var state_30656__$1 = state_30656;
var statearr_30659_32550 = state_30656__$1;
(statearr_30659_32550[(2)] = null);

(statearr_30659_32550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30657 === (4))){
var inst_30636 = (state_30656[(7)]);
var inst_30636__$1 = (state_30656[(2)]);
var inst_30637 = (inst_30636__$1 == null);
var state_30656__$1 = (function (){var statearr_30660 = state_30656;
(statearr_30660[(7)] = inst_30636__$1);

return statearr_30660;
})();
if(cljs.core.truth_(inst_30637)){
var statearr_30661_32553 = state_30656__$1;
(statearr_30661_32553[(1)] = (5));

} else {
var statearr_30662_32554 = state_30656__$1;
(statearr_30662_32554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30657 === (6))){
var inst_30636 = (state_30656[(7)]);
var inst_30641 = (state_30656[(8)]);
var inst_30641__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30643 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30644 = [inst_30636,inst_30641__$1];
var inst_30645 = (new cljs.core.PersistentVector(null,2,(5),inst_30643,inst_30644,null));
var state_30656__$1 = (function (){var statearr_30664 = state_30656;
(statearr_30664[(8)] = inst_30641__$1);

return statearr_30664;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30656__$1,(8),jobs,inst_30645);
} else {
if((state_val_30657 === (3))){
var inst_30654 = (state_30656[(2)]);
var state_30656__$1 = state_30656;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30656__$1,inst_30654);
} else {
if((state_val_30657 === (2))){
var state_30656__$1 = state_30656;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30656__$1,(4),from);
} else {
if((state_val_30657 === (9))){
var inst_30649 = (state_30656[(2)]);
var state_30656__$1 = (function (){var statearr_30667 = state_30656;
(statearr_30667[(9)] = inst_30649);

return statearr_30667;
})();
var statearr_30668_32557 = state_30656__$1;
(statearr_30668_32557[(2)] = null);

(statearr_30668_32557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30657 === (5))){
var inst_30639 = cljs.core.async.close_BANG_(jobs);
var state_30656__$1 = state_30656;
var statearr_30669_32558 = state_30656__$1;
(statearr_30669_32558[(2)] = inst_30639);

(statearr_30669_32558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30657 === (8))){
var inst_30641 = (state_30656[(8)]);
var inst_30647 = (state_30656[(2)]);
var state_30656__$1 = (function (){var statearr_30670 = state_30656;
(statearr_30670[(10)] = inst_30647);

return statearr_30670;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30656__$1,(9),results,inst_30641);
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
var cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____0 = (function (){
var statearr_30671 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30671[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__);

(statearr_30671[(1)] = (1));

return statearr_30671;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____1 = (function (state_30656){
while(true){
var ret_value__29678__auto__ = (function (){try{while(true){
var result__29679__auto__ = switch__29676__auto__(state_30656);
if(cljs.core.keyword_identical_QMARK_(result__29679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29679__auto__;
}
break;
}
}catch (e30672){if((e30672 instanceof Object)){
var ex__29680__auto__ = e30672;
var statearr_30680_32559 = state_30656;
(statearr_30680_32559[(5)] = ex__29680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30672;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32560 = state_30656;
state_30656 = G__32560;
continue;
} else {
return ret_value__29678__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__ = function(state_30656){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____1.call(this,state_30656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__;
})()
})();
var state__30028__auto__ = (function (){var statearr_30682 = (f__30027__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30027__auto__.cljs$core$IFn$_invoke$arity$0() : f__30027__auto__.call(null));
(statearr_30682[(6)] = c__30026__auto___32537);

return statearr_30682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30028__auto__);
}));


var c__30026__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30027__auto__ = (function (){var switch__29676__auto__ = (function (state_30722){
var state_val_30723 = (state_30722[(1)]);
if((state_val_30723 === (7))){
var inst_30717 = (state_30722[(2)]);
var state_30722__$1 = state_30722;
var statearr_30725_32561 = state_30722__$1;
(statearr_30725_32561[(2)] = inst_30717);

(statearr_30725_32561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30723 === (20))){
var state_30722__$1 = state_30722;
var statearr_30726_32568 = state_30722__$1;
(statearr_30726_32568[(2)] = null);

(statearr_30726_32568[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30723 === (1))){
var state_30722__$1 = state_30722;
var statearr_30727_32569 = state_30722__$1;
(statearr_30727_32569[(2)] = null);

(statearr_30727_32569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30723 === (4))){
var inst_30685 = (state_30722[(7)]);
var inst_30685__$1 = (state_30722[(2)]);
var inst_30686 = (inst_30685__$1 == null);
var state_30722__$1 = (function (){var statearr_30732 = state_30722;
(statearr_30732[(7)] = inst_30685__$1);

return statearr_30732;
})();
if(cljs.core.truth_(inst_30686)){
var statearr_30733_32571 = state_30722__$1;
(statearr_30733_32571[(1)] = (5));

} else {
var statearr_30737_32572 = state_30722__$1;
(statearr_30737_32572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30723 === (15))){
var inst_30699 = (state_30722[(8)]);
var state_30722__$1 = state_30722;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30722__$1,(18),to,inst_30699);
} else {
if((state_val_30723 === (21))){
var inst_30712 = (state_30722[(2)]);
var state_30722__$1 = state_30722;
var statearr_30745_32574 = state_30722__$1;
(statearr_30745_32574[(2)] = inst_30712);

(statearr_30745_32574[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30723 === (13))){
var inst_30714 = (state_30722[(2)]);
var state_30722__$1 = (function (){var statearr_30746 = state_30722;
(statearr_30746[(9)] = inst_30714);

return statearr_30746;
})();
var statearr_30747_32576 = state_30722__$1;
(statearr_30747_32576[(2)] = null);

(statearr_30747_32576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30723 === (6))){
var inst_30685 = (state_30722[(7)]);
var state_30722__$1 = state_30722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30722__$1,(11),inst_30685);
} else {
if((state_val_30723 === (17))){
var inst_30707 = (state_30722[(2)]);
var state_30722__$1 = state_30722;
if(cljs.core.truth_(inst_30707)){
var statearr_30748_32577 = state_30722__$1;
(statearr_30748_32577[(1)] = (19));

} else {
var statearr_30749_32578 = state_30722__$1;
(statearr_30749_32578[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30723 === (3))){
var inst_30719 = (state_30722[(2)]);
var state_30722__$1 = state_30722;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30722__$1,inst_30719);
} else {
if((state_val_30723 === (12))){
var inst_30696 = (state_30722[(10)]);
var state_30722__$1 = state_30722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30722__$1,(14),inst_30696);
} else {
if((state_val_30723 === (2))){
var state_30722__$1 = state_30722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30722__$1,(4),results);
} else {
if((state_val_30723 === (19))){
var state_30722__$1 = state_30722;
var statearr_30756_32579 = state_30722__$1;
(statearr_30756_32579[(2)] = null);

(statearr_30756_32579[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30723 === (11))){
var inst_30696 = (state_30722[(2)]);
var state_30722__$1 = (function (){var statearr_30757 = state_30722;
(statearr_30757[(10)] = inst_30696);

return statearr_30757;
})();
var statearr_30758_32580 = state_30722__$1;
(statearr_30758_32580[(2)] = null);

(statearr_30758_32580[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30723 === (9))){
var state_30722__$1 = state_30722;
var statearr_30759_32584 = state_30722__$1;
(statearr_30759_32584[(2)] = null);

(statearr_30759_32584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30723 === (5))){
var state_30722__$1 = state_30722;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30760_32586 = state_30722__$1;
(statearr_30760_32586[(1)] = (8));

} else {
var statearr_30764_32587 = state_30722__$1;
(statearr_30764_32587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30723 === (14))){
var inst_30699 = (state_30722[(8)]);
var inst_30699__$1 = (state_30722[(2)]);
var inst_30700 = (inst_30699__$1 == null);
var inst_30701 = cljs.core.not(inst_30700);
var state_30722__$1 = (function (){var statearr_30768 = state_30722;
(statearr_30768[(8)] = inst_30699__$1);

return statearr_30768;
})();
if(inst_30701){
var statearr_30769_32588 = state_30722__$1;
(statearr_30769_32588[(1)] = (15));

} else {
var statearr_30770_32589 = state_30722__$1;
(statearr_30770_32589[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30723 === (16))){
var state_30722__$1 = state_30722;
var statearr_30771_32590 = state_30722__$1;
(statearr_30771_32590[(2)] = false);

(statearr_30771_32590[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30723 === (10))){
var inst_30692 = (state_30722[(2)]);
var state_30722__$1 = state_30722;
var statearr_30772_32592 = state_30722__$1;
(statearr_30772_32592[(2)] = inst_30692);

(statearr_30772_32592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30723 === (18))){
var inst_30704 = (state_30722[(2)]);
var state_30722__$1 = state_30722;
var statearr_30773_32594 = state_30722__$1;
(statearr_30773_32594[(2)] = inst_30704);

(statearr_30773_32594[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30723 === (8))){
var inst_30689 = cljs.core.async.close_BANG_(to);
var state_30722__$1 = state_30722;
var statearr_30785_32595 = state_30722__$1;
(statearr_30785_32595[(2)] = inst_30689);

(statearr_30785_32595[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____0 = (function (){
var statearr_30790 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30790[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__);

(statearr_30790[(1)] = (1));

return statearr_30790;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____1 = (function (state_30722){
while(true){
var ret_value__29678__auto__ = (function (){try{while(true){
var result__29679__auto__ = switch__29676__auto__(state_30722);
if(cljs.core.keyword_identical_QMARK_(result__29679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29679__auto__;
}
break;
}
}catch (e30794){if((e30794 instanceof Object)){
var ex__29680__auto__ = e30794;
var statearr_30795_32599 = state_30722;
(statearr_30795_32599[(5)] = ex__29680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30794;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32601 = state_30722;
state_30722 = G__32601;
continue;
} else {
return ret_value__29678__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__ = function(state_30722){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____1.call(this,state_30722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29677__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29677__auto__;
})()
})();
var state__30028__auto__ = (function (){var statearr_30810 = (f__30027__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30027__auto__.cljs$core$IFn$_invoke$arity$0() : f__30027__auto__.call(null));
(statearr_30810[(6)] = c__30026__auto__);

return statearr_30810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30028__auto__);
}));

return c__30026__auto__;
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
var G__30835 = arguments.length;
switch (G__30835) {
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
var G__30848 = arguments.length;
switch (G__30848) {
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
var G__30850 = arguments.length;
switch (G__30850) {
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
var c__30026__auto___32611 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30027__auto__ = (function (){var switch__29676__auto__ = (function (state_30878){
var state_val_30879 = (state_30878[(1)]);
if((state_val_30879 === (7))){
var inst_30874 = (state_30878[(2)]);
var state_30878__$1 = state_30878;
var statearr_30883_32612 = state_30878__$1;
(statearr_30883_32612[(2)] = inst_30874);

(statearr_30883_32612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (1))){
var state_30878__$1 = state_30878;
var statearr_30887_32613 = state_30878__$1;
(statearr_30887_32613[(2)] = null);

(statearr_30887_32613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (4))){
var inst_30855 = (state_30878[(7)]);
var inst_30855__$1 = (state_30878[(2)]);
var inst_30856 = (inst_30855__$1 == null);
var state_30878__$1 = (function (){var statearr_30888 = state_30878;
(statearr_30888[(7)] = inst_30855__$1);

return statearr_30888;
})();
if(cljs.core.truth_(inst_30856)){
var statearr_30890_32614 = state_30878__$1;
(statearr_30890_32614[(1)] = (5));

} else {
var statearr_30891_32615 = state_30878__$1;
(statearr_30891_32615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (13))){
var state_30878__$1 = state_30878;
var statearr_30892_32616 = state_30878__$1;
(statearr_30892_32616[(2)] = null);

(statearr_30892_32616[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (6))){
var inst_30855 = (state_30878[(7)]);
var inst_30861 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30855) : p.call(null,inst_30855));
var state_30878__$1 = state_30878;
if(cljs.core.truth_(inst_30861)){
var statearr_30894_32617 = state_30878__$1;
(statearr_30894_32617[(1)] = (9));

} else {
var statearr_30895_32618 = state_30878__$1;
(statearr_30895_32618[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (3))){
var inst_30876 = (state_30878[(2)]);
var state_30878__$1 = state_30878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30878__$1,inst_30876);
} else {
if((state_val_30879 === (12))){
var state_30878__$1 = state_30878;
var statearr_30896_32619 = state_30878__$1;
(statearr_30896_32619[(2)] = null);

(statearr_30896_32619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (2))){
var state_30878__$1 = state_30878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30878__$1,(4),ch);
} else {
if((state_val_30879 === (11))){
var inst_30855 = (state_30878[(7)]);
var inst_30865 = (state_30878[(2)]);
var state_30878__$1 = state_30878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30878__$1,(8),inst_30865,inst_30855);
} else {
if((state_val_30879 === (9))){
var state_30878__$1 = state_30878;
var statearr_30897_32620 = state_30878__$1;
(statearr_30897_32620[(2)] = tc);

(statearr_30897_32620[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (5))){
var inst_30858 = cljs.core.async.close_BANG_(tc);
var inst_30859 = cljs.core.async.close_BANG_(fc);
var state_30878__$1 = (function (){var statearr_30898 = state_30878;
(statearr_30898[(8)] = inst_30858);

return statearr_30898;
})();
var statearr_30899_32621 = state_30878__$1;
(statearr_30899_32621[(2)] = inst_30859);

(statearr_30899_32621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (14))){
var inst_30872 = (state_30878[(2)]);
var state_30878__$1 = state_30878;
var statearr_30901_32622 = state_30878__$1;
(statearr_30901_32622[(2)] = inst_30872);

(statearr_30901_32622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (10))){
var state_30878__$1 = state_30878;
var statearr_30904_32623 = state_30878__$1;
(statearr_30904_32623[(2)] = fc);

(statearr_30904_32623[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (8))){
var inst_30867 = (state_30878[(2)]);
var state_30878__$1 = state_30878;
if(cljs.core.truth_(inst_30867)){
var statearr_30905_32624 = state_30878__$1;
(statearr_30905_32624[(1)] = (12));

} else {
var statearr_30906_32625 = state_30878__$1;
(statearr_30906_32625[(1)] = (13));

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
var cljs$core$async$state_machine__29677__auto__ = null;
var cljs$core$async$state_machine__29677__auto____0 = (function (){
var statearr_30908 = [null,null,null,null,null,null,null,null,null];
(statearr_30908[(0)] = cljs$core$async$state_machine__29677__auto__);

(statearr_30908[(1)] = (1));

return statearr_30908;
});
var cljs$core$async$state_machine__29677__auto____1 = (function (state_30878){
while(true){
var ret_value__29678__auto__ = (function (){try{while(true){
var result__29679__auto__ = switch__29676__auto__(state_30878);
if(cljs.core.keyword_identical_QMARK_(result__29679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29679__auto__;
}
break;
}
}catch (e30909){if((e30909 instanceof Object)){
var ex__29680__auto__ = e30909;
var statearr_30910_32626 = state_30878;
(statearr_30910_32626[(5)] = ex__29680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30909;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32627 = state_30878;
state_30878 = G__32627;
continue;
} else {
return ret_value__29678__auto__;
}
break;
}
});
cljs$core$async$state_machine__29677__auto__ = function(state_30878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29677__auto____1.call(this,state_30878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29677__auto____0;
cljs$core$async$state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29677__auto____1;
return cljs$core$async$state_machine__29677__auto__;
})()
})();
var state__30028__auto__ = (function (){var statearr_30918 = (f__30027__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30027__auto__.cljs$core$IFn$_invoke$arity$0() : f__30027__auto__.call(null));
(statearr_30918[(6)] = c__30026__auto___32611);

return statearr_30918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30028__auto__);
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
var c__30026__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30027__auto__ = (function (){var switch__29676__auto__ = (function (state_30970){
var state_val_30971 = (state_30970[(1)]);
if((state_val_30971 === (7))){
var inst_30966 = (state_30970[(2)]);
var state_30970__$1 = state_30970;
var statearr_30973_32628 = state_30970__$1;
(statearr_30973_32628[(2)] = inst_30966);

(statearr_30973_32628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (1))){
var inst_30925 = init;
var state_30970__$1 = (function (){var statearr_30974 = state_30970;
(statearr_30974[(7)] = inst_30925);

return statearr_30974;
})();
var statearr_30975_32629 = state_30970__$1;
(statearr_30975_32629[(2)] = null);

(statearr_30975_32629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (4))){
var inst_30928 = (state_30970[(8)]);
var inst_30928__$1 = (state_30970[(2)]);
var inst_30930 = (inst_30928__$1 == null);
var state_30970__$1 = (function (){var statearr_30976 = state_30970;
(statearr_30976[(8)] = inst_30928__$1);

return statearr_30976;
})();
if(cljs.core.truth_(inst_30930)){
var statearr_30977_32630 = state_30970__$1;
(statearr_30977_32630[(1)] = (5));

} else {
var statearr_30978_32631 = state_30970__$1;
(statearr_30978_32631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (6))){
var inst_30925 = (state_30970[(7)]);
var inst_30936 = (state_30970[(9)]);
var inst_30928 = (state_30970[(8)]);
var inst_30936__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30925,inst_30928) : f.call(null,inst_30925,inst_30928));
var inst_30937 = cljs.core.reduced_QMARK_(inst_30936__$1);
var state_30970__$1 = (function (){var statearr_30979 = state_30970;
(statearr_30979[(9)] = inst_30936__$1);

return statearr_30979;
})();
if(inst_30937){
var statearr_30985_32632 = state_30970__$1;
(statearr_30985_32632[(1)] = (8));

} else {
var statearr_30986_32633 = state_30970__$1;
(statearr_30986_32633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (3))){
var inst_30968 = (state_30970[(2)]);
var state_30970__$1 = state_30970;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30970__$1,inst_30968);
} else {
if((state_val_30971 === (2))){
var state_30970__$1 = state_30970;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30970__$1,(4),ch);
} else {
if((state_val_30971 === (9))){
var inst_30936 = (state_30970[(9)]);
var inst_30925 = inst_30936;
var state_30970__$1 = (function (){var statearr_30987 = state_30970;
(statearr_30987[(7)] = inst_30925);

return statearr_30987;
})();
var statearr_30989_32634 = state_30970__$1;
(statearr_30989_32634[(2)] = null);

(statearr_30989_32634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (5))){
var inst_30925 = (state_30970[(7)]);
var state_30970__$1 = state_30970;
var statearr_30990_32635 = state_30970__$1;
(statearr_30990_32635[(2)] = inst_30925);

(statearr_30990_32635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (10))){
var inst_30963 = (state_30970[(2)]);
var state_30970__$1 = state_30970;
var statearr_30991_32636 = state_30970__$1;
(statearr_30991_32636[(2)] = inst_30963);

(statearr_30991_32636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (8))){
var inst_30936 = (state_30970[(9)]);
var inst_30959 = cljs.core.deref(inst_30936);
var state_30970__$1 = state_30970;
var statearr_30993_32637 = state_30970__$1;
(statearr_30993_32637[(2)] = inst_30959);

(statearr_30993_32637[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__29677__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29677__auto____0 = (function (){
var statearr_30994 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30994[(0)] = cljs$core$async$reduce_$_state_machine__29677__auto__);

(statearr_30994[(1)] = (1));

return statearr_30994;
});
var cljs$core$async$reduce_$_state_machine__29677__auto____1 = (function (state_30970){
while(true){
var ret_value__29678__auto__ = (function (){try{while(true){
var result__29679__auto__ = switch__29676__auto__(state_30970);
if(cljs.core.keyword_identical_QMARK_(result__29679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29679__auto__;
}
break;
}
}catch (e30995){if((e30995 instanceof Object)){
var ex__29680__auto__ = e30995;
var statearr_30996_32638 = state_30970;
(statearr_30996_32638[(5)] = ex__29680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30995;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32640 = state_30970;
state_30970 = G__32640;
continue;
} else {
return ret_value__29678__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29677__auto__ = function(state_30970){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29677__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29677__auto____1.call(this,state_30970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29677__auto____0;
cljs$core$async$reduce_$_state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29677__auto____1;
return cljs$core$async$reduce_$_state_machine__29677__auto__;
})()
})();
var state__30028__auto__ = (function (){var statearr_30997 = (f__30027__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30027__auto__.cljs$core$IFn$_invoke$arity$0() : f__30027__auto__.call(null));
(statearr_30997[(6)] = c__30026__auto__);

return statearr_30997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30028__auto__);
}));

return c__30026__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30026__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30027__auto__ = (function (){var switch__29676__auto__ = (function (state_31004){
var state_val_31005 = (state_31004[(1)]);
if((state_val_31005 === (1))){
var inst_30999 = cljs.core.async.reduce(f__$1,init,ch);
var state_31004__$1 = state_31004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31004__$1,(2),inst_30999);
} else {
if((state_val_31005 === (2))){
var inst_31001 = (state_31004[(2)]);
var inst_31002 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31001) : f__$1.call(null,inst_31001));
var state_31004__$1 = state_31004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31004__$1,inst_31002);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29677__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29677__auto____0 = (function (){
var statearr_31007 = [null,null,null,null,null,null,null];
(statearr_31007[(0)] = cljs$core$async$transduce_$_state_machine__29677__auto__);

(statearr_31007[(1)] = (1));

return statearr_31007;
});
var cljs$core$async$transduce_$_state_machine__29677__auto____1 = (function (state_31004){
while(true){
var ret_value__29678__auto__ = (function (){try{while(true){
var result__29679__auto__ = switch__29676__auto__(state_31004);
if(cljs.core.keyword_identical_QMARK_(result__29679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29679__auto__;
}
break;
}
}catch (e31008){if((e31008 instanceof Object)){
var ex__29680__auto__ = e31008;
var statearr_31009_32648 = state_31004;
(statearr_31009_32648[(5)] = ex__29680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31008;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32649 = state_31004;
state_31004 = G__32649;
continue;
} else {
return ret_value__29678__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29677__auto__ = function(state_31004){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29677__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29677__auto____1.call(this,state_31004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29677__auto____0;
cljs$core$async$transduce_$_state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29677__auto____1;
return cljs$core$async$transduce_$_state_machine__29677__auto__;
})()
})();
var state__30028__auto__ = (function (){var statearr_31010 = (f__30027__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30027__auto__.cljs$core$IFn$_invoke$arity$0() : f__30027__auto__.call(null));
(statearr_31010[(6)] = c__30026__auto__);

return statearr_31010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30028__auto__);
}));

return c__30026__auto__;
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
var G__31012 = arguments.length;
switch (G__31012) {
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
var c__30026__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30027__auto__ = (function (){var switch__29676__auto__ = (function (state_31040){
var state_val_31041 = (state_31040[(1)]);
if((state_val_31041 === (7))){
var inst_31022 = (state_31040[(2)]);
var state_31040__$1 = state_31040;
var statearr_31042_32657 = state_31040__$1;
(statearr_31042_32657[(2)] = inst_31022);

(statearr_31042_32657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (1))){
var inst_31016 = cljs.core.seq(coll);
var inst_31017 = inst_31016;
var state_31040__$1 = (function (){var statearr_31045 = state_31040;
(statearr_31045[(7)] = inst_31017);

return statearr_31045;
})();
var statearr_31046_32658 = state_31040__$1;
(statearr_31046_32658[(2)] = null);

(statearr_31046_32658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (4))){
var inst_31017 = (state_31040[(7)]);
var inst_31020 = cljs.core.first(inst_31017);
var state_31040__$1 = state_31040;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31040__$1,(7),ch,inst_31020);
} else {
if((state_val_31041 === (13))){
var inst_31034 = (state_31040[(2)]);
var state_31040__$1 = state_31040;
var statearr_31047_32660 = state_31040__$1;
(statearr_31047_32660[(2)] = inst_31034);

(statearr_31047_32660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (6))){
var inst_31025 = (state_31040[(2)]);
var state_31040__$1 = state_31040;
if(cljs.core.truth_(inst_31025)){
var statearr_31048_32661 = state_31040__$1;
(statearr_31048_32661[(1)] = (8));

} else {
var statearr_31049_32662 = state_31040__$1;
(statearr_31049_32662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (3))){
var inst_31038 = (state_31040[(2)]);
var state_31040__$1 = state_31040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31040__$1,inst_31038);
} else {
if((state_val_31041 === (12))){
var state_31040__$1 = state_31040;
var statearr_31053_32663 = state_31040__$1;
(statearr_31053_32663[(2)] = null);

(statearr_31053_32663[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (2))){
var inst_31017 = (state_31040[(7)]);
var state_31040__$1 = state_31040;
if(cljs.core.truth_(inst_31017)){
var statearr_31054_32664 = state_31040__$1;
(statearr_31054_32664[(1)] = (4));

} else {
var statearr_31055_32665 = state_31040__$1;
(statearr_31055_32665[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (11))){
var inst_31031 = cljs.core.async.close_BANG_(ch);
var state_31040__$1 = state_31040;
var statearr_31056_32666 = state_31040__$1;
(statearr_31056_32666[(2)] = inst_31031);

(statearr_31056_32666[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (9))){
var state_31040__$1 = state_31040;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31058_32667 = state_31040__$1;
(statearr_31058_32667[(1)] = (11));

} else {
var statearr_31059_32668 = state_31040__$1;
(statearr_31059_32668[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (5))){
var inst_31017 = (state_31040[(7)]);
var state_31040__$1 = state_31040;
var statearr_31062_32669 = state_31040__$1;
(statearr_31062_32669[(2)] = inst_31017);

(statearr_31062_32669[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (10))){
var inst_31036 = (state_31040[(2)]);
var state_31040__$1 = state_31040;
var statearr_31063_32670 = state_31040__$1;
(statearr_31063_32670[(2)] = inst_31036);

(statearr_31063_32670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (8))){
var inst_31017 = (state_31040[(7)]);
var inst_31027 = cljs.core.next(inst_31017);
var inst_31017__$1 = inst_31027;
var state_31040__$1 = (function (){var statearr_31064 = state_31040;
(statearr_31064[(7)] = inst_31017__$1);

return statearr_31064;
})();
var statearr_31065_32675 = state_31040__$1;
(statearr_31065_32675[(2)] = null);

(statearr_31065_32675[(1)] = (2));


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
var cljs$core$async$state_machine__29677__auto__ = null;
var cljs$core$async$state_machine__29677__auto____0 = (function (){
var statearr_31069 = [null,null,null,null,null,null,null,null];
(statearr_31069[(0)] = cljs$core$async$state_machine__29677__auto__);

(statearr_31069[(1)] = (1));

return statearr_31069;
});
var cljs$core$async$state_machine__29677__auto____1 = (function (state_31040){
while(true){
var ret_value__29678__auto__ = (function (){try{while(true){
var result__29679__auto__ = switch__29676__auto__(state_31040);
if(cljs.core.keyword_identical_QMARK_(result__29679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29679__auto__;
}
break;
}
}catch (e31070){if((e31070 instanceof Object)){
var ex__29680__auto__ = e31070;
var statearr_31071_32679 = state_31040;
(statearr_31071_32679[(5)] = ex__29680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31070;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32680 = state_31040;
state_31040 = G__32680;
continue;
} else {
return ret_value__29678__auto__;
}
break;
}
});
cljs$core$async$state_machine__29677__auto__ = function(state_31040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29677__auto____1.call(this,state_31040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29677__auto____0;
cljs$core$async$state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29677__auto____1;
return cljs$core$async$state_machine__29677__auto__;
})()
})();
var state__30028__auto__ = (function (){var statearr_31072 = (f__30027__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30027__auto__.cljs$core$IFn$_invoke$arity$0() : f__30027__auto__.call(null));
(statearr_31072[(6)] = c__30026__auto__);

return statearr_31072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30028__auto__);
}));

return c__30026__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31081 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31081 = (function (ch,cs,meta31082){
this.ch = ch;
this.cs = cs;
this.meta31082 = meta31082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31083,meta31082__$1){
var self__ = this;
var _31083__$1 = this;
return (new cljs.core.async.t_cljs$core$async31081(self__.ch,self__.cs,meta31082__$1));
}));

(cljs.core.async.t_cljs$core$async31081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31083){
var self__ = this;
var _31083__$1 = this;
return self__.meta31082;
}));

(cljs.core.async.t_cljs$core$async31081.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31081.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31081.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31081.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31081.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31081.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31081.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31082","meta31082",1379241033,null)], null);
}));

(cljs.core.async.t_cljs$core$async31081.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31081.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31081");

(cljs.core.async.t_cljs$core$async31081.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31081");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31081.
 */
cljs.core.async.__GT_t_cljs$core$async31081 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31081(ch__$1,cs__$1,meta31082){
return (new cljs.core.async.t_cljs$core$async31081(ch__$1,cs__$1,meta31082));
});

}

return (new cljs.core.async.t_cljs$core$async31081(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30026__auto___32705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30027__auto__ = (function (){var switch__29676__auto__ = (function (state_31231){
var state_val_31232 = (state_31231[(1)]);
if((state_val_31232 === (7))){
var inst_31227 = (state_31231[(2)]);
var state_31231__$1 = state_31231;
var statearr_31233_32709 = state_31231__$1;
(statearr_31233_32709[(2)] = inst_31227);

(statearr_31233_32709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (20))){
var inst_31117 = (state_31231[(7)]);
var inst_31133 = cljs.core.first(inst_31117);
var inst_31134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31133,(0),null);
var inst_31135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31133,(1),null);
var state_31231__$1 = (function (){var statearr_31234 = state_31231;
(statearr_31234[(8)] = inst_31134);

return statearr_31234;
})();
if(cljs.core.truth_(inst_31135)){
var statearr_31235_32713 = state_31231__$1;
(statearr_31235_32713[(1)] = (22));

} else {
var statearr_31236_32714 = state_31231__$1;
(statearr_31236_32714[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (27))){
var inst_31086 = (state_31231[(9)]);
var inst_31168 = (state_31231[(10)]);
var inst_31170 = (state_31231[(11)]);
var inst_31175 = (state_31231[(12)]);
var inst_31175__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31168,inst_31170);
var inst_31176 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31175__$1,inst_31086,done);
var state_31231__$1 = (function (){var statearr_31237 = state_31231;
(statearr_31237[(12)] = inst_31175__$1);

return statearr_31237;
})();
if(cljs.core.truth_(inst_31176)){
var statearr_31238_32718 = state_31231__$1;
(statearr_31238_32718[(1)] = (30));

} else {
var statearr_31239_32719 = state_31231__$1;
(statearr_31239_32719[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (1))){
var state_31231__$1 = state_31231;
var statearr_31240_32720 = state_31231__$1;
(statearr_31240_32720[(2)] = null);

(statearr_31240_32720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (24))){
var inst_31117 = (state_31231[(7)]);
var inst_31140 = (state_31231[(2)]);
var inst_31141 = cljs.core.next(inst_31117);
var inst_31095 = inst_31141;
var inst_31096 = null;
var inst_31097 = (0);
var inst_31098 = (0);
var state_31231__$1 = (function (){var statearr_31241 = state_31231;
(statearr_31241[(13)] = inst_31140);

(statearr_31241[(14)] = inst_31097);

(statearr_31241[(15)] = inst_31096);

(statearr_31241[(16)] = inst_31098);

(statearr_31241[(17)] = inst_31095);

return statearr_31241;
})();
var statearr_31242_32721 = state_31231__$1;
(statearr_31242_32721[(2)] = null);

(statearr_31242_32721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (39))){
var state_31231__$1 = state_31231;
var statearr_31246_32726 = state_31231__$1;
(statearr_31246_32726[(2)] = null);

(statearr_31246_32726[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (4))){
var inst_31086 = (state_31231[(9)]);
var inst_31086__$1 = (state_31231[(2)]);
var inst_31087 = (inst_31086__$1 == null);
var state_31231__$1 = (function (){var statearr_31247 = state_31231;
(statearr_31247[(9)] = inst_31086__$1);

return statearr_31247;
})();
if(cljs.core.truth_(inst_31087)){
var statearr_31248_32733 = state_31231__$1;
(statearr_31248_32733[(1)] = (5));

} else {
var statearr_31249_32734 = state_31231__$1;
(statearr_31249_32734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (15))){
var inst_31097 = (state_31231[(14)]);
var inst_31096 = (state_31231[(15)]);
var inst_31098 = (state_31231[(16)]);
var inst_31095 = (state_31231[(17)]);
var inst_31113 = (state_31231[(2)]);
var inst_31114 = (inst_31098 + (1));
var tmp31243 = inst_31097;
var tmp31244 = inst_31096;
var tmp31245 = inst_31095;
var inst_31095__$1 = tmp31245;
var inst_31096__$1 = tmp31244;
var inst_31097__$1 = tmp31243;
var inst_31098__$1 = inst_31114;
var state_31231__$1 = (function (){var statearr_31250 = state_31231;
(statearr_31250[(14)] = inst_31097__$1);

(statearr_31250[(15)] = inst_31096__$1);

(statearr_31250[(16)] = inst_31098__$1);

(statearr_31250[(17)] = inst_31095__$1);

(statearr_31250[(18)] = inst_31113);

return statearr_31250;
})();
var statearr_31251_32738 = state_31231__$1;
(statearr_31251_32738[(2)] = null);

(statearr_31251_32738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (21))){
var inst_31144 = (state_31231[(2)]);
var state_31231__$1 = state_31231;
var statearr_31255_32742 = state_31231__$1;
(statearr_31255_32742[(2)] = inst_31144);

(statearr_31255_32742[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (31))){
var inst_31175 = (state_31231[(12)]);
var inst_31179 = done(null);
var inst_31180 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31175);
var state_31231__$1 = (function (){var statearr_31256 = state_31231;
(statearr_31256[(19)] = inst_31179);

return statearr_31256;
})();
var statearr_31257_32743 = state_31231__$1;
(statearr_31257_32743[(2)] = inst_31180);

(statearr_31257_32743[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (32))){
var inst_31169 = (state_31231[(20)]);
var inst_31167 = (state_31231[(21)]);
var inst_31168 = (state_31231[(10)]);
var inst_31170 = (state_31231[(11)]);
var inst_31182 = (state_31231[(2)]);
var inst_31183 = (inst_31170 + (1));
var tmp31252 = inst_31169;
var tmp31253 = inst_31167;
var tmp31254 = inst_31168;
var inst_31167__$1 = tmp31253;
var inst_31168__$1 = tmp31254;
var inst_31169__$1 = tmp31252;
var inst_31170__$1 = inst_31183;
var state_31231__$1 = (function (){var statearr_31258 = state_31231;
(statearr_31258[(20)] = inst_31169__$1);

(statearr_31258[(21)] = inst_31167__$1);

(statearr_31258[(22)] = inst_31182);

(statearr_31258[(10)] = inst_31168__$1);

(statearr_31258[(11)] = inst_31170__$1);

return statearr_31258;
})();
var statearr_31259_32750 = state_31231__$1;
(statearr_31259_32750[(2)] = null);

(statearr_31259_32750[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (40))){
var inst_31199 = (state_31231[(23)]);
var inst_31203 = done(null);
var inst_31204 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31199);
var state_31231__$1 = (function (){var statearr_31260 = state_31231;
(statearr_31260[(24)] = inst_31203);

return statearr_31260;
})();
var statearr_31261_32757 = state_31231__$1;
(statearr_31261_32757[(2)] = inst_31204);

(statearr_31261_32757[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (33))){
var inst_31186 = (state_31231[(25)]);
var inst_31188 = cljs.core.chunked_seq_QMARK_(inst_31186);
var state_31231__$1 = state_31231;
if(inst_31188){
var statearr_31262_32758 = state_31231__$1;
(statearr_31262_32758[(1)] = (36));

} else {
var statearr_31263_32759 = state_31231__$1;
(statearr_31263_32759[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (13))){
var inst_31107 = (state_31231[(26)]);
var inst_31110 = cljs.core.async.close_BANG_(inst_31107);
var state_31231__$1 = state_31231;
var statearr_31264_32760 = state_31231__$1;
(statearr_31264_32760[(2)] = inst_31110);

(statearr_31264_32760[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (22))){
var inst_31134 = (state_31231[(8)]);
var inst_31137 = cljs.core.async.close_BANG_(inst_31134);
var state_31231__$1 = state_31231;
var statearr_31265_32761 = state_31231__$1;
(statearr_31265_32761[(2)] = inst_31137);

(statearr_31265_32761[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (36))){
var inst_31186 = (state_31231[(25)]);
var inst_31190 = cljs.core.chunk_first(inst_31186);
var inst_31191 = cljs.core.chunk_rest(inst_31186);
var inst_31192 = cljs.core.count(inst_31190);
var inst_31167 = inst_31191;
var inst_31168 = inst_31190;
var inst_31169 = inst_31192;
var inst_31170 = (0);
var state_31231__$1 = (function (){var statearr_31266 = state_31231;
(statearr_31266[(20)] = inst_31169);

(statearr_31266[(21)] = inst_31167);

(statearr_31266[(10)] = inst_31168);

(statearr_31266[(11)] = inst_31170);

return statearr_31266;
})();
var statearr_31267_32763 = state_31231__$1;
(statearr_31267_32763[(2)] = null);

(statearr_31267_32763[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (41))){
var inst_31186 = (state_31231[(25)]);
var inst_31206 = (state_31231[(2)]);
var inst_31207 = cljs.core.next(inst_31186);
var inst_31167 = inst_31207;
var inst_31168 = null;
var inst_31169 = (0);
var inst_31170 = (0);
var state_31231__$1 = (function (){var statearr_31268 = state_31231;
(statearr_31268[(20)] = inst_31169);

(statearr_31268[(21)] = inst_31167);

(statearr_31268[(27)] = inst_31206);

(statearr_31268[(10)] = inst_31168);

(statearr_31268[(11)] = inst_31170);

return statearr_31268;
})();
var statearr_31269_32764 = state_31231__$1;
(statearr_31269_32764[(2)] = null);

(statearr_31269_32764[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (43))){
var state_31231__$1 = state_31231;
var statearr_31271_32765 = state_31231__$1;
(statearr_31271_32765[(2)] = null);

(statearr_31271_32765[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (29))){
var inst_31215 = (state_31231[(2)]);
var state_31231__$1 = state_31231;
var statearr_31275_32766 = state_31231__$1;
(statearr_31275_32766[(2)] = inst_31215);

(statearr_31275_32766[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (44))){
var inst_31224 = (state_31231[(2)]);
var state_31231__$1 = (function (){var statearr_31276 = state_31231;
(statearr_31276[(28)] = inst_31224);

return statearr_31276;
})();
var statearr_31277_32767 = state_31231__$1;
(statearr_31277_32767[(2)] = null);

(statearr_31277_32767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (6))){
var inst_31154 = (state_31231[(29)]);
var inst_31153 = cljs.core.deref(cs);
var inst_31154__$1 = cljs.core.keys(inst_31153);
var inst_31160 = cljs.core.count(inst_31154__$1);
var inst_31161 = cljs.core.reset_BANG_(dctr,inst_31160);
var inst_31166 = cljs.core.seq(inst_31154__$1);
var inst_31167 = inst_31166;
var inst_31168 = null;
var inst_31169 = (0);
var inst_31170 = (0);
var state_31231__$1 = (function (){var statearr_31282 = state_31231;
(statearr_31282[(20)] = inst_31169);

(statearr_31282[(21)] = inst_31167);

(statearr_31282[(10)] = inst_31168);

(statearr_31282[(11)] = inst_31170);

(statearr_31282[(29)] = inst_31154__$1);

(statearr_31282[(30)] = inst_31161);

return statearr_31282;
})();
var statearr_31283_32768 = state_31231__$1;
(statearr_31283_32768[(2)] = null);

(statearr_31283_32768[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (28))){
var inst_31167 = (state_31231[(21)]);
var inst_31186 = (state_31231[(25)]);
var inst_31186__$1 = cljs.core.seq(inst_31167);
var state_31231__$1 = (function (){var statearr_31287 = state_31231;
(statearr_31287[(25)] = inst_31186__$1);

return statearr_31287;
})();
if(inst_31186__$1){
var statearr_31288_32769 = state_31231__$1;
(statearr_31288_32769[(1)] = (33));

} else {
var statearr_31289_32770 = state_31231__$1;
(statearr_31289_32770[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (25))){
var inst_31169 = (state_31231[(20)]);
var inst_31170 = (state_31231[(11)]);
var inst_31172 = (inst_31170 < inst_31169);
var inst_31173 = inst_31172;
var state_31231__$1 = state_31231;
if(cljs.core.truth_(inst_31173)){
var statearr_31290_32771 = state_31231__$1;
(statearr_31290_32771[(1)] = (27));

} else {
var statearr_31291_32772 = state_31231__$1;
(statearr_31291_32772[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (34))){
var state_31231__$1 = state_31231;
var statearr_31292_32773 = state_31231__$1;
(statearr_31292_32773[(2)] = null);

(statearr_31292_32773[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (17))){
var state_31231__$1 = state_31231;
var statearr_31294_32776 = state_31231__$1;
(statearr_31294_32776[(2)] = null);

(statearr_31294_32776[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (3))){
var inst_31229 = (state_31231[(2)]);
var state_31231__$1 = state_31231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31231__$1,inst_31229);
} else {
if((state_val_31232 === (12))){
var inst_31149 = (state_31231[(2)]);
var state_31231__$1 = state_31231;
var statearr_31295_32777 = state_31231__$1;
(statearr_31295_32777[(2)] = inst_31149);

(statearr_31295_32777[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (2))){
var state_31231__$1 = state_31231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31231__$1,(4),ch);
} else {
if((state_val_31232 === (23))){
var state_31231__$1 = state_31231;
var statearr_31296_32778 = state_31231__$1;
(statearr_31296_32778[(2)] = null);

(statearr_31296_32778[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (35))){
var inst_31213 = (state_31231[(2)]);
var state_31231__$1 = state_31231;
var statearr_31297_32779 = state_31231__$1;
(statearr_31297_32779[(2)] = inst_31213);

(statearr_31297_32779[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (19))){
var inst_31117 = (state_31231[(7)]);
var inst_31125 = cljs.core.chunk_first(inst_31117);
var inst_31126 = cljs.core.chunk_rest(inst_31117);
var inst_31127 = cljs.core.count(inst_31125);
var inst_31095 = inst_31126;
var inst_31096 = inst_31125;
var inst_31097 = inst_31127;
var inst_31098 = (0);
var state_31231__$1 = (function (){var statearr_31298 = state_31231;
(statearr_31298[(14)] = inst_31097);

(statearr_31298[(15)] = inst_31096);

(statearr_31298[(16)] = inst_31098);

(statearr_31298[(17)] = inst_31095);

return statearr_31298;
})();
var statearr_31299_32780 = state_31231__$1;
(statearr_31299_32780[(2)] = null);

(statearr_31299_32780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (11))){
var inst_31095 = (state_31231[(17)]);
var inst_31117 = (state_31231[(7)]);
var inst_31117__$1 = cljs.core.seq(inst_31095);
var state_31231__$1 = (function (){var statearr_31302 = state_31231;
(statearr_31302[(7)] = inst_31117__$1);

return statearr_31302;
})();
if(inst_31117__$1){
var statearr_31306_32781 = state_31231__$1;
(statearr_31306_32781[(1)] = (16));

} else {
var statearr_31307_32782 = state_31231__$1;
(statearr_31307_32782[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (9))){
var inst_31151 = (state_31231[(2)]);
var state_31231__$1 = state_31231;
var statearr_31309_32783 = state_31231__$1;
(statearr_31309_32783[(2)] = inst_31151);

(statearr_31309_32783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (5))){
var inst_31093 = cljs.core.deref(cs);
var inst_31094 = cljs.core.seq(inst_31093);
var inst_31095 = inst_31094;
var inst_31096 = null;
var inst_31097 = (0);
var inst_31098 = (0);
var state_31231__$1 = (function (){var statearr_31310 = state_31231;
(statearr_31310[(14)] = inst_31097);

(statearr_31310[(15)] = inst_31096);

(statearr_31310[(16)] = inst_31098);

(statearr_31310[(17)] = inst_31095);

return statearr_31310;
})();
var statearr_31311_32784 = state_31231__$1;
(statearr_31311_32784[(2)] = null);

(statearr_31311_32784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (14))){
var state_31231__$1 = state_31231;
var statearr_31312_32785 = state_31231__$1;
(statearr_31312_32785[(2)] = null);

(statearr_31312_32785[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (45))){
var inst_31221 = (state_31231[(2)]);
var state_31231__$1 = state_31231;
var statearr_31315_32786 = state_31231__$1;
(statearr_31315_32786[(2)] = inst_31221);

(statearr_31315_32786[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (26))){
var inst_31154 = (state_31231[(29)]);
var inst_31217 = (state_31231[(2)]);
var inst_31218 = cljs.core.seq(inst_31154);
var state_31231__$1 = (function (){var statearr_31316 = state_31231;
(statearr_31316[(31)] = inst_31217);

return statearr_31316;
})();
if(inst_31218){
var statearr_31317_32790 = state_31231__$1;
(statearr_31317_32790[(1)] = (42));

} else {
var statearr_31318_32794 = state_31231__$1;
(statearr_31318_32794[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (16))){
var inst_31117 = (state_31231[(7)]);
var inst_31119 = cljs.core.chunked_seq_QMARK_(inst_31117);
var state_31231__$1 = state_31231;
if(inst_31119){
var statearr_31319_32795 = state_31231__$1;
(statearr_31319_32795[(1)] = (19));

} else {
var statearr_31320_32796 = state_31231__$1;
(statearr_31320_32796[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (38))){
var inst_31210 = (state_31231[(2)]);
var state_31231__$1 = state_31231;
var statearr_31322_32797 = state_31231__$1;
(statearr_31322_32797[(2)] = inst_31210);

(statearr_31322_32797[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (30))){
var state_31231__$1 = state_31231;
var statearr_31327_32799 = state_31231__$1;
(statearr_31327_32799[(2)] = null);

(statearr_31327_32799[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (10))){
var inst_31096 = (state_31231[(15)]);
var inst_31098 = (state_31231[(16)]);
var inst_31106 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31096,inst_31098);
var inst_31107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31106,(0),null);
var inst_31108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31106,(1),null);
var state_31231__$1 = (function (){var statearr_31333 = state_31231;
(statearr_31333[(26)] = inst_31107);

return statearr_31333;
})();
if(cljs.core.truth_(inst_31108)){
var statearr_31338_32800 = state_31231__$1;
(statearr_31338_32800[(1)] = (13));

} else {
var statearr_31339_32801 = state_31231__$1;
(statearr_31339_32801[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (18))){
var inst_31147 = (state_31231[(2)]);
var state_31231__$1 = state_31231;
var statearr_31340_32803 = state_31231__$1;
(statearr_31340_32803[(2)] = inst_31147);

(statearr_31340_32803[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (42))){
var state_31231__$1 = state_31231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31231__$1,(45),dchan);
} else {
if((state_val_31232 === (37))){
var inst_31086 = (state_31231[(9)]);
var inst_31186 = (state_31231[(25)]);
var inst_31199 = (state_31231[(23)]);
var inst_31199__$1 = cljs.core.first(inst_31186);
var inst_31200 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31199__$1,inst_31086,done);
var state_31231__$1 = (function (){var statearr_31350 = state_31231;
(statearr_31350[(23)] = inst_31199__$1);

return statearr_31350;
})();
if(cljs.core.truth_(inst_31200)){
var statearr_31351_32805 = state_31231__$1;
(statearr_31351_32805[(1)] = (39));

} else {
var statearr_31353_32806 = state_31231__$1;
(statearr_31353_32806[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (8))){
var inst_31097 = (state_31231[(14)]);
var inst_31098 = (state_31231[(16)]);
var inst_31100 = (inst_31098 < inst_31097);
var inst_31101 = inst_31100;
var state_31231__$1 = state_31231;
if(cljs.core.truth_(inst_31101)){
var statearr_31358_32807 = state_31231__$1;
(statearr_31358_32807[(1)] = (10));

} else {
var statearr_31359_32808 = state_31231__$1;
(statearr_31359_32808[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__29677__auto__ = null;
var cljs$core$async$mult_$_state_machine__29677__auto____0 = (function (){
var statearr_31360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31360[(0)] = cljs$core$async$mult_$_state_machine__29677__auto__);

(statearr_31360[(1)] = (1));

return statearr_31360;
});
var cljs$core$async$mult_$_state_machine__29677__auto____1 = (function (state_31231){
while(true){
var ret_value__29678__auto__ = (function (){try{while(true){
var result__29679__auto__ = switch__29676__auto__(state_31231);
if(cljs.core.keyword_identical_QMARK_(result__29679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29679__auto__;
}
break;
}
}catch (e31361){if((e31361 instanceof Object)){
var ex__29680__auto__ = e31361;
var statearr_31362_32809 = state_31231;
(statearr_31362_32809[(5)] = ex__29680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31361;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32810 = state_31231;
state_31231 = G__32810;
continue;
} else {
return ret_value__29678__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29677__auto__ = function(state_31231){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29677__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29677__auto____1.call(this,state_31231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29677__auto____0;
cljs$core$async$mult_$_state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29677__auto____1;
return cljs$core$async$mult_$_state_machine__29677__auto__;
})()
})();
var state__30028__auto__ = (function (){var statearr_31363 = (f__30027__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30027__auto__.cljs$core$IFn$_invoke$arity$0() : f__30027__auto__.call(null));
(statearr_31363[(6)] = c__30026__auto___32705);

return statearr_31363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30028__auto__);
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
var G__31368 = arguments.length;
switch (G__31368) {
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
var len__4789__auto___32833 = arguments.length;
var i__4790__auto___32834 = (0);
while(true){
if((i__4790__auto___32834 < len__4789__auto___32833)){
args__4795__auto__.push((arguments[i__4790__auto___32834]));

var G__32835 = (i__4790__auto___32834 + (1));
i__4790__auto___32834 = G__32835;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31375){
var map__31376 = p__31375;
var map__31376__$1 = (((((!((map__31376 == null))))?(((((map__31376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31376):map__31376);
var opts = map__31376__$1;
var statearr_31378_32842 = state;
(statearr_31378_32842[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31379_32843 = state;
(statearr_31379_32843[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31380_32844 = state;
(statearr_31380_32844[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31371){
var G__31372 = cljs.core.first(seq31371);
var seq31371__$1 = cljs.core.next(seq31371);
var G__31373 = cljs.core.first(seq31371__$1);
var seq31371__$2 = cljs.core.next(seq31371__$1);
var G__31374 = cljs.core.first(seq31371__$2);
var seq31371__$3 = cljs.core.next(seq31371__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31372,G__31373,G__31374,seq31371__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31381 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31381 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31382){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31382 = meta31382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31383,meta31382__$1){
var self__ = this;
var _31383__$1 = this;
return (new cljs.core.async.t_cljs$core$async31381(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31382__$1));
}));

(cljs.core.async.t_cljs$core$async31381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31383){
var self__ = this;
var _31383__$1 = this;
return self__.meta31382;
}));

(cljs.core.async.t_cljs$core$async31381.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31381.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31381.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31381.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31381.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31381.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31381.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31381.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31382","meta31382",1197502953,null)], null);
}));

(cljs.core.async.t_cljs$core$async31381.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31381");

(cljs.core.async.t_cljs$core$async31381.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31381");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31381.
 */
cljs.core.async.__GT_t_cljs$core$async31381 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31381(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31382){
return (new cljs.core.async.t_cljs$core$async31381(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31382));
});

}

return (new cljs.core.async.t_cljs$core$async31381(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30026__auto___32857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30027__auto__ = (function (){var switch__29676__auto__ = (function (state_31503){
var state_val_31504 = (state_31503[(1)]);
if((state_val_31504 === (7))){
var inst_31402 = (state_31503[(2)]);
var state_31503__$1 = state_31503;
var statearr_31508_32858 = state_31503__$1;
(statearr_31508_32858[(2)] = inst_31402);

(statearr_31508_32858[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (20))){
var inst_31414 = (state_31503[(7)]);
var state_31503__$1 = state_31503;
var statearr_31509_32859 = state_31503__$1;
(statearr_31509_32859[(2)] = inst_31414);

(statearr_31509_32859[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (27))){
var state_31503__$1 = state_31503;
var statearr_31510_32860 = state_31503__$1;
(statearr_31510_32860[(2)] = null);

(statearr_31510_32860[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (1))){
var inst_31389 = (state_31503[(8)]);
var inst_31389__$1 = calc_state();
var inst_31391 = (inst_31389__$1 == null);
var inst_31392 = cljs.core.not(inst_31391);
var state_31503__$1 = (function (){var statearr_31511 = state_31503;
(statearr_31511[(8)] = inst_31389__$1);

return statearr_31511;
})();
if(inst_31392){
var statearr_31512_32861 = state_31503__$1;
(statearr_31512_32861[(1)] = (2));

} else {
var statearr_31513_32862 = state_31503__$1;
(statearr_31513_32862[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (24))){
var inst_31469 = (state_31503[(9)]);
var inst_31438 = (state_31503[(10)]);
var inst_31451 = (state_31503[(11)]);
var inst_31469__$1 = (inst_31438.cljs$core$IFn$_invoke$arity$1 ? inst_31438.cljs$core$IFn$_invoke$arity$1(inst_31451) : inst_31438.call(null,inst_31451));
var state_31503__$1 = (function (){var statearr_31518 = state_31503;
(statearr_31518[(9)] = inst_31469__$1);

return statearr_31518;
})();
if(cljs.core.truth_(inst_31469__$1)){
var statearr_31519_32863 = state_31503__$1;
(statearr_31519_32863[(1)] = (29));

} else {
var statearr_31520_32864 = state_31503__$1;
(statearr_31520_32864[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (4))){
var inst_31405 = (state_31503[(2)]);
var state_31503__$1 = state_31503;
if(cljs.core.truth_(inst_31405)){
var statearr_31523_32865 = state_31503__$1;
(statearr_31523_32865[(1)] = (8));

} else {
var statearr_31524_32866 = state_31503__$1;
(statearr_31524_32866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (15))){
var inst_31432 = (state_31503[(2)]);
var state_31503__$1 = state_31503;
if(cljs.core.truth_(inst_31432)){
var statearr_31525_32867 = state_31503__$1;
(statearr_31525_32867[(1)] = (19));

} else {
var statearr_31530_32868 = state_31503__$1;
(statearr_31530_32868[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (21))){
var inst_31437 = (state_31503[(12)]);
var inst_31437__$1 = (state_31503[(2)]);
var inst_31438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31437__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31437__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31437__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31503__$1 = (function (){var statearr_31531 = state_31503;
(statearr_31531[(12)] = inst_31437__$1);

(statearr_31531[(13)] = inst_31439);

(statearr_31531[(10)] = inst_31438);

return statearr_31531;
})();
return cljs.core.async.ioc_alts_BANG_(state_31503__$1,(22),inst_31440);
} else {
if((state_val_31504 === (31))){
var inst_31477 = (state_31503[(2)]);
var state_31503__$1 = state_31503;
if(cljs.core.truth_(inst_31477)){
var statearr_31532_32869 = state_31503__$1;
(statearr_31532_32869[(1)] = (32));

} else {
var statearr_31533_32870 = state_31503__$1;
(statearr_31533_32870[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (32))){
var inst_31450 = (state_31503[(14)]);
var state_31503__$1 = state_31503;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31503__$1,(35),out,inst_31450);
} else {
if((state_val_31504 === (33))){
var inst_31437 = (state_31503[(12)]);
var inst_31414 = inst_31437;
var state_31503__$1 = (function (){var statearr_31536 = state_31503;
(statearr_31536[(7)] = inst_31414);

return statearr_31536;
})();
var statearr_31538_32871 = state_31503__$1;
(statearr_31538_32871[(2)] = null);

(statearr_31538_32871[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (13))){
var inst_31414 = (state_31503[(7)]);
var inst_31421 = inst_31414.cljs$lang$protocol_mask$partition0$;
var inst_31422 = (inst_31421 & (64));
var inst_31423 = inst_31414.cljs$core$ISeq$;
var inst_31424 = (cljs.core.PROTOCOL_SENTINEL === inst_31423);
var inst_31425 = ((inst_31422) || (inst_31424));
var state_31503__$1 = state_31503;
if(cljs.core.truth_(inst_31425)){
var statearr_31541_32872 = state_31503__$1;
(statearr_31541_32872[(1)] = (16));

} else {
var statearr_31542_32873 = state_31503__$1;
(statearr_31542_32873[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (22))){
var inst_31450 = (state_31503[(14)]);
var inst_31451 = (state_31503[(11)]);
var inst_31449 = (state_31503[(2)]);
var inst_31450__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31449,(0),null);
var inst_31451__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31449,(1),null);
var inst_31454 = (inst_31450__$1 == null);
var inst_31455 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31451__$1,change);
var inst_31456 = ((inst_31454) || (inst_31455));
var state_31503__$1 = (function (){var statearr_31543 = state_31503;
(statearr_31543[(14)] = inst_31450__$1);

(statearr_31543[(11)] = inst_31451__$1);

return statearr_31543;
})();
if(cljs.core.truth_(inst_31456)){
var statearr_31544_32874 = state_31503__$1;
(statearr_31544_32874[(1)] = (23));

} else {
var statearr_31549_32875 = state_31503__$1;
(statearr_31549_32875[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (36))){
var inst_31437 = (state_31503[(12)]);
var inst_31414 = inst_31437;
var state_31503__$1 = (function (){var statearr_31550 = state_31503;
(statearr_31550[(7)] = inst_31414);

return statearr_31550;
})();
var statearr_31551_32877 = state_31503__$1;
(statearr_31551_32877[(2)] = null);

(statearr_31551_32877[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (29))){
var inst_31469 = (state_31503[(9)]);
var state_31503__$1 = state_31503;
var statearr_31552_32878 = state_31503__$1;
(statearr_31552_32878[(2)] = inst_31469);

(statearr_31552_32878[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (6))){
var state_31503__$1 = state_31503;
var statearr_31553_32879 = state_31503__$1;
(statearr_31553_32879[(2)] = false);

(statearr_31553_32879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (28))){
var inst_31463 = (state_31503[(2)]);
var inst_31464 = calc_state();
var inst_31414 = inst_31464;
var state_31503__$1 = (function (){var statearr_31554 = state_31503;
(statearr_31554[(7)] = inst_31414);

(statearr_31554[(15)] = inst_31463);

return statearr_31554;
})();
var statearr_31556_32881 = state_31503__$1;
(statearr_31556_32881[(2)] = null);

(statearr_31556_32881[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (25))){
var inst_31495 = (state_31503[(2)]);
var state_31503__$1 = state_31503;
var statearr_31559_32886 = state_31503__$1;
(statearr_31559_32886[(2)] = inst_31495);

(statearr_31559_32886[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (34))){
var inst_31493 = (state_31503[(2)]);
var state_31503__$1 = state_31503;
var statearr_31560_32887 = state_31503__$1;
(statearr_31560_32887[(2)] = inst_31493);

(statearr_31560_32887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (17))){
var state_31503__$1 = state_31503;
var statearr_31561_32888 = state_31503__$1;
(statearr_31561_32888[(2)] = false);

(statearr_31561_32888[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (3))){
var state_31503__$1 = state_31503;
var statearr_31562_32889 = state_31503__$1;
(statearr_31562_32889[(2)] = false);

(statearr_31562_32889[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (12))){
var inst_31497 = (state_31503[(2)]);
var state_31503__$1 = state_31503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31503__$1,inst_31497);
} else {
if((state_val_31504 === (2))){
var inst_31389 = (state_31503[(8)]);
var inst_31394 = inst_31389.cljs$lang$protocol_mask$partition0$;
var inst_31395 = (inst_31394 & (64));
var inst_31396 = inst_31389.cljs$core$ISeq$;
var inst_31397 = (cljs.core.PROTOCOL_SENTINEL === inst_31396);
var inst_31398 = ((inst_31395) || (inst_31397));
var state_31503__$1 = state_31503;
if(cljs.core.truth_(inst_31398)){
var statearr_31563_32890 = state_31503__$1;
(statearr_31563_32890[(1)] = (5));

} else {
var statearr_31564_32891 = state_31503__$1;
(statearr_31564_32891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (23))){
var inst_31450 = (state_31503[(14)]);
var inst_31458 = (inst_31450 == null);
var state_31503__$1 = state_31503;
if(cljs.core.truth_(inst_31458)){
var statearr_31565_32892 = state_31503__$1;
(statearr_31565_32892[(1)] = (26));

} else {
var statearr_31566_32893 = state_31503__$1;
(statearr_31566_32893[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (35))){
var inst_31480 = (state_31503[(2)]);
var state_31503__$1 = state_31503;
if(cljs.core.truth_(inst_31480)){
var statearr_31567_32894 = state_31503__$1;
(statearr_31567_32894[(1)] = (36));

} else {
var statearr_31568_32895 = state_31503__$1;
(statearr_31568_32895[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (19))){
var inst_31414 = (state_31503[(7)]);
var inst_31434 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31414);
var state_31503__$1 = state_31503;
var statearr_31569_32896 = state_31503__$1;
(statearr_31569_32896[(2)] = inst_31434);

(statearr_31569_32896[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (11))){
var inst_31414 = (state_31503[(7)]);
var inst_31418 = (inst_31414 == null);
var inst_31419 = cljs.core.not(inst_31418);
var state_31503__$1 = state_31503;
if(inst_31419){
var statearr_31570_32897 = state_31503__$1;
(statearr_31570_32897[(1)] = (13));

} else {
var statearr_31571_32900 = state_31503__$1;
(statearr_31571_32900[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (9))){
var inst_31389 = (state_31503[(8)]);
var state_31503__$1 = state_31503;
var statearr_31572_32901 = state_31503__$1;
(statearr_31572_32901[(2)] = inst_31389);

(statearr_31572_32901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (5))){
var state_31503__$1 = state_31503;
var statearr_31577_32902 = state_31503__$1;
(statearr_31577_32902[(2)] = true);

(statearr_31577_32902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (14))){
var state_31503__$1 = state_31503;
var statearr_31579_32904 = state_31503__$1;
(statearr_31579_32904[(2)] = false);

(statearr_31579_32904[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (26))){
var inst_31451 = (state_31503[(11)]);
var inst_31460 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31451);
var state_31503__$1 = state_31503;
var statearr_31581_32905 = state_31503__$1;
(statearr_31581_32905[(2)] = inst_31460);

(statearr_31581_32905[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (16))){
var state_31503__$1 = state_31503;
var statearr_31584_32907 = state_31503__$1;
(statearr_31584_32907[(2)] = true);

(statearr_31584_32907[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (38))){
var inst_31489 = (state_31503[(2)]);
var state_31503__$1 = state_31503;
var statearr_31585_32908 = state_31503__$1;
(statearr_31585_32908[(2)] = inst_31489);

(statearr_31585_32908[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (30))){
var inst_31439 = (state_31503[(13)]);
var inst_31438 = (state_31503[(10)]);
var inst_31451 = (state_31503[(11)]);
var inst_31472 = cljs.core.empty_QMARK_(inst_31438);
var inst_31473 = (inst_31439.cljs$core$IFn$_invoke$arity$1 ? inst_31439.cljs$core$IFn$_invoke$arity$1(inst_31451) : inst_31439.call(null,inst_31451));
var inst_31474 = cljs.core.not(inst_31473);
var inst_31475 = ((inst_31472) && (inst_31474));
var state_31503__$1 = state_31503;
var statearr_31586_32909 = state_31503__$1;
(statearr_31586_32909[(2)] = inst_31475);

(statearr_31586_32909[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (10))){
var inst_31389 = (state_31503[(8)]);
var inst_31410 = (state_31503[(2)]);
var inst_31411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31410,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31410,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31410,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31414 = inst_31389;
var state_31503__$1 = (function (){var statearr_31587 = state_31503;
(statearr_31587[(7)] = inst_31414);

(statearr_31587[(16)] = inst_31413);

(statearr_31587[(17)] = inst_31412);

(statearr_31587[(18)] = inst_31411);

return statearr_31587;
})();
var statearr_31588_32910 = state_31503__$1;
(statearr_31588_32910[(2)] = null);

(statearr_31588_32910[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (18))){
var inst_31429 = (state_31503[(2)]);
var state_31503__$1 = state_31503;
var statearr_31590_32912 = state_31503__$1;
(statearr_31590_32912[(2)] = inst_31429);

(statearr_31590_32912[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (37))){
var state_31503__$1 = state_31503;
var statearr_31592_32914 = state_31503__$1;
(statearr_31592_32914[(2)] = null);

(statearr_31592_32914[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31504 === (8))){
var inst_31389 = (state_31503[(8)]);
var inst_31407 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31389);
var state_31503__$1 = state_31503;
var statearr_31594_32915 = state_31503__$1;
(statearr_31594_32915[(2)] = inst_31407);

(statearr_31594_32915[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__29677__auto__ = null;
var cljs$core$async$mix_$_state_machine__29677__auto____0 = (function (){
var statearr_31601 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31601[(0)] = cljs$core$async$mix_$_state_machine__29677__auto__);

(statearr_31601[(1)] = (1));

return statearr_31601;
});
var cljs$core$async$mix_$_state_machine__29677__auto____1 = (function (state_31503){
while(true){
var ret_value__29678__auto__ = (function (){try{while(true){
var result__29679__auto__ = switch__29676__auto__(state_31503);
if(cljs.core.keyword_identical_QMARK_(result__29679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29679__auto__;
}
break;
}
}catch (e31606){if((e31606 instanceof Object)){
var ex__29680__auto__ = e31606;
var statearr_31607_32916 = state_31503;
(statearr_31607_32916[(5)] = ex__29680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31606;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32917 = state_31503;
state_31503 = G__32917;
continue;
} else {
return ret_value__29678__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29677__auto__ = function(state_31503){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29677__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29677__auto____1.call(this,state_31503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29677__auto____0;
cljs$core$async$mix_$_state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29677__auto____1;
return cljs$core$async$mix_$_state_machine__29677__auto__;
})()
})();
var state__30028__auto__ = (function (){var statearr_31612 = (f__30027__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30027__auto__.cljs$core$IFn$_invoke$arity$0() : f__30027__auto__.call(null));
(statearr_31612[(6)] = c__30026__auto___32857);

return statearr_31612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30028__auto__);
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
var G__31634 = arguments.length;
switch (G__31634) {
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
var G__31654 = arguments.length;
switch (G__31654) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31647_SHARP_){
if(cljs.core.truth_((p1__31647_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31647_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31647_SHARP_.call(null,topic)))){
return p1__31647_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31647_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31665 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31665 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31666){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31666 = meta31666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31667,meta31666__$1){
var self__ = this;
var _31667__$1 = this;
return (new cljs.core.async.t_cljs$core$async31665(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31666__$1));
}));

(cljs.core.async.t_cljs$core$async31665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31667){
var self__ = this;
var _31667__$1 = this;
return self__.meta31666;
}));

(cljs.core.async.t_cljs$core$async31665.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31665.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31665.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31665.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31665.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async31665.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31665.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31666","meta31666",763748110,null)], null);
}));

(cljs.core.async.t_cljs$core$async31665.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31665");

(cljs.core.async.t_cljs$core$async31665.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31665");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31665.
 */
cljs.core.async.__GT_t_cljs$core$async31665 = (function cljs$core$async$__GT_t_cljs$core$async31665(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31666){
return (new cljs.core.async.t_cljs$core$async31665(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31666));
});

}

return (new cljs.core.async.t_cljs$core$async31665(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30026__auto___32922 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30027__auto__ = (function (){var switch__29676__auto__ = (function (state_31777){
var state_val_31778 = (state_31777[(1)]);
if((state_val_31778 === (7))){
var inst_31769 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
var statearr_31781_32924 = state_31777__$1;
(statearr_31781_32924[(2)] = inst_31769);

(statearr_31781_32924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (20))){
var state_31777__$1 = state_31777;
var statearr_31786_32925 = state_31777__$1;
(statearr_31786_32925[(2)] = null);

(statearr_31786_32925[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (1))){
var state_31777__$1 = state_31777;
var statearr_31788_32926 = state_31777__$1;
(statearr_31788_32926[(2)] = null);

(statearr_31788_32926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (24))){
var inst_31750 = (state_31777[(7)]);
var inst_31761 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31750);
var state_31777__$1 = state_31777;
var statearr_31790_32927 = state_31777__$1;
(statearr_31790_32927[(2)] = inst_31761);

(statearr_31790_32927[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (4))){
var inst_31692 = (state_31777[(8)]);
var inst_31692__$1 = (state_31777[(2)]);
var inst_31694 = (inst_31692__$1 == null);
var state_31777__$1 = (function (){var statearr_31793 = state_31777;
(statearr_31793[(8)] = inst_31692__$1);

return statearr_31793;
})();
if(cljs.core.truth_(inst_31694)){
var statearr_31796_32932 = state_31777__$1;
(statearr_31796_32932[(1)] = (5));

} else {
var statearr_31797_32933 = state_31777__$1;
(statearr_31797_32933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (15))){
var inst_31744 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
var statearr_31800_32934 = state_31777__$1;
(statearr_31800_32934[(2)] = inst_31744);

(statearr_31800_32934[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (21))){
var inst_31766 = (state_31777[(2)]);
var state_31777__$1 = (function (){var statearr_31802 = state_31777;
(statearr_31802[(9)] = inst_31766);

return statearr_31802;
})();
var statearr_31803_32935 = state_31777__$1;
(statearr_31803_32935[(2)] = null);

(statearr_31803_32935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (13))){
var inst_31722 = (state_31777[(10)]);
var inst_31724 = cljs.core.chunked_seq_QMARK_(inst_31722);
var state_31777__$1 = state_31777;
if(inst_31724){
var statearr_31807_32936 = state_31777__$1;
(statearr_31807_32936[(1)] = (16));

} else {
var statearr_31808_32937 = state_31777__$1;
(statearr_31808_32937[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (22))){
var inst_31758 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
if(cljs.core.truth_(inst_31758)){
var statearr_31813_32938 = state_31777__$1;
(statearr_31813_32938[(1)] = (23));

} else {
var statearr_31814_32939 = state_31777__$1;
(statearr_31814_32939[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (6))){
var inst_31752 = (state_31777[(11)]);
var inst_31750 = (state_31777[(7)]);
var inst_31692 = (state_31777[(8)]);
var inst_31750__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31692) : topic_fn.call(null,inst_31692));
var inst_31751 = cljs.core.deref(mults);
var inst_31752__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31751,inst_31750__$1);
var state_31777__$1 = (function (){var statearr_31821 = state_31777;
(statearr_31821[(11)] = inst_31752__$1);

(statearr_31821[(7)] = inst_31750__$1);

return statearr_31821;
})();
if(cljs.core.truth_(inst_31752__$1)){
var statearr_31822_32940 = state_31777__$1;
(statearr_31822_32940[(1)] = (19));

} else {
var statearr_31823_32941 = state_31777__$1;
(statearr_31823_32941[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (25))){
var inst_31763 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
var statearr_31824_32942 = state_31777__$1;
(statearr_31824_32942[(2)] = inst_31763);

(statearr_31824_32942[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (17))){
var inst_31722 = (state_31777[(10)]);
var inst_31731 = cljs.core.first(inst_31722);
var inst_31732 = cljs.core.async.muxch_STAR_(inst_31731);
var inst_31733 = cljs.core.async.close_BANG_(inst_31732);
var inst_31734 = cljs.core.next(inst_31722);
var inst_31704 = inst_31734;
var inst_31705 = null;
var inst_31706 = (0);
var inst_31707 = (0);
var state_31777__$1 = (function (){var statearr_31827 = state_31777;
(statearr_31827[(12)] = inst_31733);

(statearr_31827[(13)] = inst_31707);

(statearr_31827[(14)] = inst_31704);

(statearr_31827[(15)] = inst_31705);

(statearr_31827[(16)] = inst_31706);

return statearr_31827;
})();
var statearr_31832_32943 = state_31777__$1;
(statearr_31832_32943[(2)] = null);

(statearr_31832_32943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (3))){
var inst_31771 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31777__$1,inst_31771);
} else {
if((state_val_31778 === (12))){
var inst_31746 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
var statearr_31834_32948 = state_31777__$1;
(statearr_31834_32948[(2)] = inst_31746);

(statearr_31834_32948[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (2))){
var state_31777__$1 = state_31777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31777__$1,(4),ch);
} else {
if((state_val_31778 === (23))){
var state_31777__$1 = state_31777;
var statearr_31839_32952 = state_31777__$1;
(statearr_31839_32952[(2)] = null);

(statearr_31839_32952[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (19))){
var inst_31752 = (state_31777[(11)]);
var inst_31692 = (state_31777[(8)]);
var inst_31756 = cljs.core.async.muxch_STAR_(inst_31752);
var state_31777__$1 = state_31777;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31777__$1,(22),inst_31756,inst_31692);
} else {
if((state_val_31778 === (11))){
var inst_31722 = (state_31777[(10)]);
var inst_31704 = (state_31777[(14)]);
var inst_31722__$1 = cljs.core.seq(inst_31704);
var state_31777__$1 = (function (){var statearr_31844 = state_31777;
(statearr_31844[(10)] = inst_31722__$1);

return statearr_31844;
})();
if(inst_31722__$1){
var statearr_31845_32956 = state_31777__$1;
(statearr_31845_32956[(1)] = (13));

} else {
var statearr_31846_32957 = state_31777__$1;
(statearr_31846_32957[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (9))){
var inst_31748 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
var statearr_31849_32961 = state_31777__$1;
(statearr_31849_32961[(2)] = inst_31748);

(statearr_31849_32961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (5))){
var inst_31701 = cljs.core.deref(mults);
var inst_31702 = cljs.core.vals(inst_31701);
var inst_31703 = cljs.core.seq(inst_31702);
var inst_31704 = inst_31703;
var inst_31705 = null;
var inst_31706 = (0);
var inst_31707 = (0);
var state_31777__$1 = (function (){var statearr_31850 = state_31777;
(statearr_31850[(13)] = inst_31707);

(statearr_31850[(14)] = inst_31704);

(statearr_31850[(15)] = inst_31705);

(statearr_31850[(16)] = inst_31706);

return statearr_31850;
})();
var statearr_31851_32965 = state_31777__$1;
(statearr_31851_32965[(2)] = null);

(statearr_31851_32965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (14))){
var state_31777__$1 = state_31777;
var statearr_31855_32966 = state_31777__$1;
(statearr_31855_32966[(2)] = null);

(statearr_31855_32966[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (16))){
var inst_31722 = (state_31777[(10)]);
var inst_31726 = cljs.core.chunk_first(inst_31722);
var inst_31727 = cljs.core.chunk_rest(inst_31722);
var inst_31728 = cljs.core.count(inst_31726);
var inst_31704 = inst_31727;
var inst_31705 = inst_31726;
var inst_31706 = inst_31728;
var inst_31707 = (0);
var state_31777__$1 = (function (){var statearr_31856 = state_31777;
(statearr_31856[(13)] = inst_31707);

(statearr_31856[(14)] = inst_31704);

(statearr_31856[(15)] = inst_31705);

(statearr_31856[(16)] = inst_31706);

return statearr_31856;
})();
var statearr_31858_32971 = state_31777__$1;
(statearr_31858_32971[(2)] = null);

(statearr_31858_32971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (10))){
var inst_31707 = (state_31777[(13)]);
var inst_31704 = (state_31777[(14)]);
var inst_31705 = (state_31777[(15)]);
var inst_31706 = (state_31777[(16)]);
var inst_31714 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31705,inst_31707);
var inst_31715 = cljs.core.async.muxch_STAR_(inst_31714);
var inst_31716 = cljs.core.async.close_BANG_(inst_31715);
var inst_31718 = (inst_31707 + (1));
var tmp31852 = inst_31704;
var tmp31853 = inst_31705;
var tmp31854 = inst_31706;
var inst_31704__$1 = tmp31852;
var inst_31705__$1 = tmp31853;
var inst_31706__$1 = tmp31854;
var inst_31707__$1 = inst_31718;
var state_31777__$1 = (function (){var statearr_31861 = state_31777;
(statearr_31861[(13)] = inst_31707__$1);

(statearr_31861[(14)] = inst_31704__$1);

(statearr_31861[(15)] = inst_31705__$1);

(statearr_31861[(17)] = inst_31716);

(statearr_31861[(16)] = inst_31706__$1);

return statearr_31861;
})();
var statearr_31866_32972 = state_31777__$1;
(statearr_31866_32972[(2)] = null);

(statearr_31866_32972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (18))){
var inst_31741 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
var statearr_31869_32973 = state_31777__$1;
(statearr_31869_32973[(2)] = inst_31741);

(statearr_31869_32973[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (8))){
var inst_31707 = (state_31777[(13)]);
var inst_31706 = (state_31777[(16)]);
var inst_31710 = (inst_31707 < inst_31706);
var inst_31711 = inst_31710;
var state_31777__$1 = state_31777;
if(cljs.core.truth_(inst_31711)){
var statearr_31870_32974 = state_31777__$1;
(statearr_31870_32974[(1)] = (10));

} else {
var statearr_31871_32975 = state_31777__$1;
(statearr_31871_32975[(1)] = (11));

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
var cljs$core$async$state_machine__29677__auto__ = null;
var cljs$core$async$state_machine__29677__auto____0 = (function (){
var statearr_31874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31874[(0)] = cljs$core$async$state_machine__29677__auto__);

(statearr_31874[(1)] = (1));

return statearr_31874;
});
var cljs$core$async$state_machine__29677__auto____1 = (function (state_31777){
while(true){
var ret_value__29678__auto__ = (function (){try{while(true){
var result__29679__auto__ = switch__29676__auto__(state_31777);
if(cljs.core.keyword_identical_QMARK_(result__29679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29679__auto__;
}
break;
}
}catch (e31875){if((e31875 instanceof Object)){
var ex__29680__auto__ = e31875;
var statearr_31876_32976 = state_31777;
(statearr_31876_32976[(5)] = ex__29680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31875;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32977 = state_31777;
state_31777 = G__32977;
continue;
} else {
return ret_value__29678__auto__;
}
break;
}
});
cljs$core$async$state_machine__29677__auto__ = function(state_31777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29677__auto____1.call(this,state_31777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29677__auto____0;
cljs$core$async$state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29677__auto____1;
return cljs$core$async$state_machine__29677__auto__;
})()
})();
var state__30028__auto__ = (function (){var statearr_31878 = (f__30027__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30027__auto__.cljs$core$IFn$_invoke$arity$0() : f__30027__auto__.call(null));
(statearr_31878[(6)] = c__30026__auto___32922);

return statearr_31878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30028__auto__);
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
var G__31880 = arguments.length;
switch (G__31880) {
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
var G__31882 = arguments.length;
switch (G__31882) {
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
var G__31884 = arguments.length;
switch (G__31884) {
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
var c__30026__auto___32990 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30027__auto__ = (function (){var switch__29676__auto__ = (function (state_31929){
var state_val_31930 = (state_31929[(1)]);
if((state_val_31930 === (7))){
var state_31929__$1 = state_31929;
var statearr_31939_32992 = state_31929__$1;
(statearr_31939_32992[(2)] = null);

(statearr_31939_32992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (1))){
var state_31929__$1 = state_31929;
var statearr_31940_32993 = state_31929__$1;
(statearr_31940_32993[(2)] = null);

(statearr_31940_32993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (4))){
var inst_31888 = (state_31929[(7)]);
var inst_31890 = (inst_31888 < cnt);
var state_31929__$1 = state_31929;
if(cljs.core.truth_(inst_31890)){
var statearr_31941_32994 = state_31929__$1;
(statearr_31941_32994[(1)] = (6));

} else {
var statearr_31942_32995 = state_31929__$1;
(statearr_31942_32995[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (15))){
var inst_31921 = (state_31929[(2)]);
var state_31929__$1 = state_31929;
var statearr_31943_32998 = state_31929__$1;
(statearr_31943_32998[(2)] = inst_31921);

(statearr_31943_32998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (13))){
var inst_31914 = cljs.core.async.close_BANG_(out);
var state_31929__$1 = state_31929;
var statearr_31944_32999 = state_31929__$1;
(statearr_31944_32999[(2)] = inst_31914);

(statearr_31944_32999[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (6))){
var state_31929__$1 = state_31929;
var statearr_31945_33000 = state_31929__$1;
(statearr_31945_33000[(2)] = null);

(statearr_31945_33000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (3))){
var inst_31923 = (state_31929[(2)]);
var state_31929__$1 = state_31929;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31929__$1,inst_31923);
} else {
if((state_val_31930 === (12))){
var inst_31911 = (state_31929[(8)]);
var inst_31911__$1 = (state_31929[(2)]);
var inst_31912 = cljs.core.some(cljs.core.nil_QMARK_,inst_31911__$1);
var state_31929__$1 = (function (){var statearr_31946 = state_31929;
(statearr_31946[(8)] = inst_31911__$1);

return statearr_31946;
})();
if(cljs.core.truth_(inst_31912)){
var statearr_31947_33001 = state_31929__$1;
(statearr_31947_33001[(1)] = (13));

} else {
var statearr_31948_33002 = state_31929__$1;
(statearr_31948_33002[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (2))){
var inst_31887 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31888 = (0);
var state_31929__$1 = (function (){var statearr_31949 = state_31929;
(statearr_31949[(7)] = inst_31888);

(statearr_31949[(9)] = inst_31887);

return statearr_31949;
})();
var statearr_31950_33003 = state_31929__$1;
(statearr_31950_33003[(2)] = null);

(statearr_31950_33003[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (11))){
var inst_31888 = (state_31929[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_31929,(10),Object,null,(9));
var inst_31898 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31888) : chs__$1.call(null,inst_31888));
var inst_31899 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31888) : done.call(null,inst_31888));
var inst_31900 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31898,inst_31899);
var state_31929__$1 = state_31929;
var statearr_31951_33004 = state_31929__$1;
(statearr_31951_33004[(2)] = inst_31900);


cljs.core.async.impl.ioc_helpers.process_exception(state_31929__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (9))){
var inst_31888 = (state_31929[(7)]);
var inst_31902 = (state_31929[(2)]);
var inst_31903 = (inst_31888 + (1));
var inst_31888__$1 = inst_31903;
var state_31929__$1 = (function (){var statearr_31952 = state_31929;
(statearr_31952[(7)] = inst_31888__$1);

(statearr_31952[(10)] = inst_31902);

return statearr_31952;
})();
var statearr_31953_33005 = state_31929__$1;
(statearr_31953_33005[(2)] = null);

(statearr_31953_33005[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (5))){
var inst_31909 = (state_31929[(2)]);
var state_31929__$1 = (function (){var statearr_31954 = state_31929;
(statearr_31954[(11)] = inst_31909);

return statearr_31954;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31929__$1,(12),dchan);
} else {
if((state_val_31930 === (14))){
var inst_31911 = (state_31929[(8)]);
var inst_31916 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31911);
var state_31929__$1 = state_31929;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31929__$1,(16),out,inst_31916);
} else {
if((state_val_31930 === (16))){
var inst_31918 = (state_31929[(2)]);
var state_31929__$1 = (function (){var statearr_31955 = state_31929;
(statearr_31955[(12)] = inst_31918);

return statearr_31955;
})();
var statearr_31956_33006 = state_31929__$1;
(statearr_31956_33006[(2)] = null);

(statearr_31956_33006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (10))){
var inst_31893 = (state_31929[(2)]);
var inst_31894 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31929__$1 = (function (){var statearr_31957 = state_31929;
(statearr_31957[(13)] = inst_31893);

return statearr_31957;
})();
var statearr_31958_33007 = state_31929__$1;
(statearr_31958_33007[(2)] = inst_31894);


cljs.core.async.impl.ioc_helpers.process_exception(state_31929__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31930 === (8))){
var inst_31907 = (state_31929[(2)]);
var state_31929__$1 = state_31929;
var statearr_31959_33008 = state_31929__$1;
(statearr_31959_33008[(2)] = inst_31907);

(statearr_31959_33008[(1)] = (5));


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
var cljs$core$async$state_machine__29677__auto__ = null;
var cljs$core$async$state_machine__29677__auto____0 = (function (){
var statearr_31960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31960[(0)] = cljs$core$async$state_machine__29677__auto__);

(statearr_31960[(1)] = (1));

return statearr_31960;
});
var cljs$core$async$state_machine__29677__auto____1 = (function (state_31929){
while(true){
var ret_value__29678__auto__ = (function (){try{while(true){
var result__29679__auto__ = switch__29676__auto__(state_31929);
if(cljs.core.keyword_identical_QMARK_(result__29679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29679__auto__;
}
break;
}
}catch (e31961){if((e31961 instanceof Object)){
var ex__29680__auto__ = e31961;
var statearr_31962_33013 = state_31929;
(statearr_31962_33013[(5)] = ex__29680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31961;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33014 = state_31929;
state_31929 = G__33014;
continue;
} else {
return ret_value__29678__auto__;
}
break;
}
});
cljs$core$async$state_machine__29677__auto__ = function(state_31929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29677__auto____1.call(this,state_31929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29677__auto____0;
cljs$core$async$state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29677__auto____1;
return cljs$core$async$state_machine__29677__auto__;
})()
})();
var state__30028__auto__ = (function (){var statearr_31963 = (f__30027__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30027__auto__.cljs$core$IFn$_invoke$arity$0() : f__30027__auto__.call(null));
(statearr_31963[(6)] = c__30026__auto___32990);

return statearr_31963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30028__auto__);
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
var G__31966 = arguments.length;
switch (G__31966) {
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
var c__30026__auto___33020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30027__auto__ = (function (){var switch__29676__auto__ = (function (state_31998){
var state_val_31999 = (state_31998[(1)]);
if((state_val_31999 === (7))){
var inst_31977 = (state_31998[(7)]);
var inst_31978 = (state_31998[(8)]);
var inst_31977__$1 = (state_31998[(2)]);
var inst_31978__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31977__$1,(0),null);
var inst_31979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31977__$1,(1),null);
var inst_31980 = (inst_31978__$1 == null);
var state_31998__$1 = (function (){var statearr_32000 = state_31998;
(statearr_32000[(7)] = inst_31977__$1);

(statearr_32000[(9)] = inst_31979);

(statearr_32000[(8)] = inst_31978__$1);

return statearr_32000;
})();
if(cljs.core.truth_(inst_31980)){
var statearr_32001_33022 = state_31998__$1;
(statearr_32001_33022[(1)] = (8));

} else {
var statearr_32002_33023 = state_31998__$1;
(statearr_32002_33023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (1))){
var inst_31967 = cljs.core.vec(chs);
var inst_31968 = inst_31967;
var state_31998__$1 = (function (){var statearr_32003 = state_31998;
(statearr_32003[(10)] = inst_31968);

return statearr_32003;
})();
var statearr_32004_33024 = state_31998__$1;
(statearr_32004_33024[(2)] = null);

(statearr_32004_33024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (4))){
var inst_31968 = (state_31998[(10)]);
var state_31998__$1 = state_31998;
return cljs.core.async.ioc_alts_BANG_(state_31998__$1,(7),inst_31968);
} else {
if((state_val_31999 === (6))){
var inst_31994 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
var statearr_32005_33026 = state_31998__$1;
(statearr_32005_33026[(2)] = inst_31994);

(statearr_32005_33026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (3))){
var inst_31996 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31998__$1,inst_31996);
} else {
if((state_val_31999 === (2))){
var inst_31968 = (state_31998[(10)]);
var inst_31970 = cljs.core.count(inst_31968);
var inst_31971 = (inst_31970 > (0));
var state_31998__$1 = state_31998;
if(cljs.core.truth_(inst_31971)){
var statearr_32007_33028 = state_31998__$1;
(statearr_32007_33028[(1)] = (4));

} else {
var statearr_32008_33029 = state_31998__$1;
(statearr_32008_33029[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (11))){
var inst_31968 = (state_31998[(10)]);
var inst_31987 = (state_31998[(2)]);
var tmp32006 = inst_31968;
var inst_31968__$1 = tmp32006;
var state_31998__$1 = (function (){var statearr_32009 = state_31998;
(statearr_32009[(11)] = inst_31987);

(statearr_32009[(10)] = inst_31968__$1);

return statearr_32009;
})();
var statearr_32010_33033 = state_31998__$1;
(statearr_32010_33033[(2)] = null);

(statearr_32010_33033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (9))){
var inst_31978 = (state_31998[(8)]);
var state_31998__$1 = state_31998;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31998__$1,(11),out,inst_31978);
} else {
if((state_val_31999 === (5))){
var inst_31992 = cljs.core.async.close_BANG_(out);
var state_31998__$1 = state_31998;
var statearr_32011_33034 = state_31998__$1;
(statearr_32011_33034[(2)] = inst_31992);

(statearr_32011_33034[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (10))){
var inst_31990 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
var statearr_32012_33035 = state_31998__$1;
(statearr_32012_33035[(2)] = inst_31990);

(statearr_32012_33035[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (8))){
var inst_31977 = (state_31998[(7)]);
var inst_31979 = (state_31998[(9)]);
var inst_31968 = (state_31998[(10)]);
var inst_31978 = (state_31998[(8)]);
var inst_31982 = (function (){var cs = inst_31968;
var vec__31973 = inst_31977;
var v = inst_31978;
var c = inst_31979;
return (function (p1__31964_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31964_SHARP_);
});
})();
var inst_31983 = cljs.core.filterv(inst_31982,inst_31968);
var inst_31968__$1 = inst_31983;
var state_31998__$1 = (function (){var statearr_32013 = state_31998;
(statearr_32013[(10)] = inst_31968__$1);

return statearr_32013;
})();
var statearr_32014_33036 = state_31998__$1;
(statearr_32014_33036[(2)] = null);

(statearr_32014_33036[(1)] = (2));


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
var cljs$core$async$state_machine__29677__auto__ = null;
var cljs$core$async$state_machine__29677__auto____0 = (function (){
var statearr_32015 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32015[(0)] = cljs$core$async$state_machine__29677__auto__);

(statearr_32015[(1)] = (1));

return statearr_32015;
});
var cljs$core$async$state_machine__29677__auto____1 = (function (state_31998){
while(true){
var ret_value__29678__auto__ = (function (){try{while(true){
var result__29679__auto__ = switch__29676__auto__(state_31998);
if(cljs.core.keyword_identical_QMARK_(result__29679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29679__auto__;
}
break;
}
}catch (e32016){if((e32016 instanceof Object)){
var ex__29680__auto__ = e32016;
var statearr_32017_33037 = state_31998;
(statearr_32017_33037[(5)] = ex__29680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32016;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33038 = state_31998;
state_31998 = G__33038;
continue;
} else {
return ret_value__29678__auto__;
}
break;
}
});
cljs$core$async$state_machine__29677__auto__ = function(state_31998){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29677__auto____1.call(this,state_31998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29677__auto____0;
cljs$core$async$state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29677__auto____1;
return cljs$core$async$state_machine__29677__auto__;
})()
})();
var state__30028__auto__ = (function (){var statearr_32018 = (f__30027__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30027__auto__.cljs$core$IFn$_invoke$arity$0() : f__30027__auto__.call(null));
(statearr_32018[(6)] = c__30026__auto___33020);

return statearr_32018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30028__auto__);
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
var G__32020 = arguments.length;
switch (G__32020) {
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
var c__30026__auto___33041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30027__auto__ = (function (){var switch__29676__auto__ = (function (state_32044){
var state_val_32045 = (state_32044[(1)]);
if((state_val_32045 === (7))){
var inst_32026 = (state_32044[(7)]);
var inst_32026__$1 = (state_32044[(2)]);
var inst_32027 = (inst_32026__$1 == null);
var inst_32028 = cljs.core.not(inst_32027);
var state_32044__$1 = (function (){var statearr_32046 = state_32044;
(statearr_32046[(7)] = inst_32026__$1);

return statearr_32046;
})();
if(inst_32028){
var statearr_32047_33042 = state_32044__$1;
(statearr_32047_33042[(1)] = (8));

} else {
var statearr_32048_33043 = state_32044__$1;
(statearr_32048_33043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (1))){
var inst_32021 = (0);
var state_32044__$1 = (function (){var statearr_32049 = state_32044;
(statearr_32049[(8)] = inst_32021);

return statearr_32049;
})();
var statearr_32050_33044 = state_32044__$1;
(statearr_32050_33044[(2)] = null);

(statearr_32050_33044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (4))){
var state_32044__$1 = state_32044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32044__$1,(7),ch);
} else {
if((state_val_32045 === (6))){
var inst_32039 = (state_32044[(2)]);
var state_32044__$1 = state_32044;
var statearr_32051_33048 = state_32044__$1;
(statearr_32051_33048[(2)] = inst_32039);

(statearr_32051_33048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (3))){
var inst_32041 = (state_32044[(2)]);
var inst_32042 = cljs.core.async.close_BANG_(out);
var state_32044__$1 = (function (){var statearr_32052 = state_32044;
(statearr_32052[(9)] = inst_32041);

return statearr_32052;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32044__$1,inst_32042);
} else {
if((state_val_32045 === (2))){
var inst_32021 = (state_32044[(8)]);
var inst_32023 = (inst_32021 < n);
var state_32044__$1 = state_32044;
if(cljs.core.truth_(inst_32023)){
var statearr_32053_33053 = state_32044__$1;
(statearr_32053_33053[(1)] = (4));

} else {
var statearr_32054_33054 = state_32044__$1;
(statearr_32054_33054[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (11))){
var inst_32021 = (state_32044[(8)]);
var inst_32031 = (state_32044[(2)]);
var inst_32032 = (inst_32021 + (1));
var inst_32021__$1 = inst_32032;
var state_32044__$1 = (function (){var statearr_32055 = state_32044;
(statearr_32055[(8)] = inst_32021__$1);

(statearr_32055[(10)] = inst_32031);

return statearr_32055;
})();
var statearr_32056_33055 = state_32044__$1;
(statearr_32056_33055[(2)] = null);

(statearr_32056_33055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (9))){
var state_32044__$1 = state_32044;
var statearr_32057_33056 = state_32044__$1;
(statearr_32057_33056[(2)] = null);

(statearr_32057_33056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (5))){
var state_32044__$1 = state_32044;
var statearr_32058_33057 = state_32044__$1;
(statearr_32058_33057[(2)] = null);

(statearr_32058_33057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (10))){
var inst_32036 = (state_32044[(2)]);
var state_32044__$1 = state_32044;
var statearr_32059_33058 = state_32044__$1;
(statearr_32059_33058[(2)] = inst_32036);

(statearr_32059_33058[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (8))){
var inst_32026 = (state_32044[(7)]);
var state_32044__$1 = state_32044;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32044__$1,(11),out,inst_32026);
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
var cljs$core$async$state_machine__29677__auto__ = null;
var cljs$core$async$state_machine__29677__auto____0 = (function (){
var statearr_32060 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32060[(0)] = cljs$core$async$state_machine__29677__auto__);

(statearr_32060[(1)] = (1));

return statearr_32060;
});
var cljs$core$async$state_machine__29677__auto____1 = (function (state_32044){
while(true){
var ret_value__29678__auto__ = (function (){try{while(true){
var result__29679__auto__ = switch__29676__auto__(state_32044);
if(cljs.core.keyword_identical_QMARK_(result__29679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29679__auto__;
}
break;
}
}catch (e32061){if((e32061 instanceof Object)){
var ex__29680__auto__ = e32061;
var statearr_32062_33060 = state_32044;
(statearr_32062_33060[(5)] = ex__29680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32061;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33061 = state_32044;
state_32044 = G__33061;
continue;
} else {
return ret_value__29678__auto__;
}
break;
}
});
cljs$core$async$state_machine__29677__auto__ = function(state_32044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29677__auto____1.call(this,state_32044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29677__auto____0;
cljs$core$async$state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29677__auto____1;
return cljs$core$async$state_machine__29677__auto__;
})()
})();
var state__30028__auto__ = (function (){var statearr_32063 = (f__30027__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30027__auto__.cljs$core$IFn$_invoke$arity$0() : f__30027__auto__.call(null));
(statearr_32063[(6)] = c__30026__auto___33041);

return statearr_32063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30028__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32065 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32065 = (function (f,ch,meta32066){
this.f = f;
this.ch = ch;
this.meta32066 = meta32066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32067,meta32066__$1){
var self__ = this;
var _32067__$1 = this;
return (new cljs.core.async.t_cljs$core$async32065(self__.f,self__.ch,meta32066__$1));
}));

(cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32067){
var self__ = this;
var _32067__$1 = this;
return self__.meta32066;
}));

(cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32068 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32068 = (function (f,ch,meta32066,_,fn1,meta32069){
this.f = f;
this.ch = ch;
this.meta32066 = meta32066;
this._ = _;
this.fn1 = fn1;
this.meta32069 = meta32069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32070,meta32069__$1){
var self__ = this;
var _32070__$1 = this;
return (new cljs.core.async.t_cljs$core$async32068(self__.f,self__.ch,self__.meta32066,self__._,self__.fn1,meta32069__$1));
}));

(cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32070){
var self__ = this;
var _32070__$1 = this;
return self__.meta32069;
}));

(cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32064_SHARP_){
var G__32071 = (((p1__32064_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32064_SHARP_) : self__.f.call(null,p1__32064_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32071) : f1.call(null,G__32071));
});
}));

(cljs.core.async.t_cljs$core$async32068.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32066","meta32066",-1003302684,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32065","cljs.core.async/t_cljs$core$async32065",-1628997228,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32069","meta32069",763657709,null)], null);
}));

(cljs.core.async.t_cljs$core$async32068.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32068.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32068");

(cljs.core.async.t_cljs$core$async32068.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32068");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32068.
 */
cljs.core.async.__GT_t_cljs$core$async32068 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32068(f__$1,ch__$1,meta32066__$1,___$2,fn1__$1,meta32069){
return (new cljs.core.async.t_cljs$core$async32068(f__$1,ch__$1,meta32066__$1,___$2,fn1__$1,meta32069));
});

}

return (new cljs.core.async.t_cljs$core$async32068(self__.f,self__.ch,self__.meta32066,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32072 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32072) : self__.f.call(null,G__32072));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32065.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32066","meta32066",-1003302684,null)], null);
}));

(cljs.core.async.t_cljs$core$async32065.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32065");

(cljs.core.async.t_cljs$core$async32065.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32065");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32065.
 */
cljs.core.async.__GT_t_cljs$core$async32065 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32065(f__$1,ch__$1,meta32066){
return (new cljs.core.async.t_cljs$core$async32065(f__$1,ch__$1,meta32066));
});

}

return (new cljs.core.async.t_cljs$core$async32065(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32073 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32073 = (function (f,ch,meta32074){
this.f = f;
this.ch = ch;
this.meta32074 = meta32074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32075,meta32074__$1){
var self__ = this;
var _32075__$1 = this;
return (new cljs.core.async.t_cljs$core$async32073(self__.f,self__.ch,meta32074__$1));
}));

(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32075){
var self__ = this;
var _32075__$1 = this;
return self__.meta32074;
}));

(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32074","meta32074",1175675589,null)], null);
}));

(cljs.core.async.t_cljs$core$async32073.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32073");

(cljs.core.async.t_cljs$core$async32073.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32073");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32073.
 */
cljs.core.async.__GT_t_cljs$core$async32073 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32073(f__$1,ch__$1,meta32074){
return (new cljs.core.async.t_cljs$core$async32073(f__$1,ch__$1,meta32074));
});

}

return (new cljs.core.async.t_cljs$core$async32073(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32076 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32076 = (function (p,ch,meta32077){
this.p = p;
this.ch = ch;
this.meta32077 = meta32077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32078,meta32077__$1){
var self__ = this;
var _32078__$1 = this;
return (new cljs.core.async.t_cljs$core$async32076(self__.p,self__.ch,meta32077__$1));
}));

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32078){
var self__ = this;
var _32078__$1 = this;
return self__.meta32077;
}));

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32077","meta32077",-1464118207,null)], null);
}));

(cljs.core.async.t_cljs$core$async32076.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32076");

(cljs.core.async.t_cljs$core$async32076.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32076");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32076.
 */
cljs.core.async.__GT_t_cljs$core$async32076 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32076(p__$1,ch__$1,meta32077){
return (new cljs.core.async.t_cljs$core$async32076(p__$1,ch__$1,meta32077));
});

}

return (new cljs.core.async.t_cljs$core$async32076(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32080 = arguments.length;
switch (G__32080) {
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
var c__30026__auto___33077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30027__auto__ = (function (){var switch__29676__auto__ = (function (state_32101){
var state_val_32102 = (state_32101[(1)]);
if((state_val_32102 === (7))){
var inst_32097 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32103_33078 = state_32101__$1;
(statearr_32103_33078[(2)] = inst_32097);

(statearr_32103_33078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (1))){
var state_32101__$1 = state_32101;
var statearr_32104_33079 = state_32101__$1;
(statearr_32104_33079[(2)] = null);

(statearr_32104_33079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (4))){
var inst_32083 = (state_32101[(7)]);
var inst_32083__$1 = (state_32101[(2)]);
var inst_32084 = (inst_32083__$1 == null);
var state_32101__$1 = (function (){var statearr_32105 = state_32101;
(statearr_32105[(7)] = inst_32083__$1);

return statearr_32105;
})();
if(cljs.core.truth_(inst_32084)){
var statearr_32106_33085 = state_32101__$1;
(statearr_32106_33085[(1)] = (5));

} else {
var statearr_32107_33088 = state_32101__$1;
(statearr_32107_33088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (6))){
var inst_32083 = (state_32101[(7)]);
var inst_32088 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32083) : p.call(null,inst_32083));
var state_32101__$1 = state_32101;
if(cljs.core.truth_(inst_32088)){
var statearr_32108_33089 = state_32101__$1;
(statearr_32108_33089[(1)] = (8));

} else {
var statearr_32109_33090 = state_32101__$1;
(statearr_32109_33090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (3))){
var inst_32099 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32101__$1,inst_32099);
} else {
if((state_val_32102 === (2))){
var state_32101__$1 = state_32101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32101__$1,(4),ch);
} else {
if((state_val_32102 === (11))){
var inst_32091 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32110_33091 = state_32101__$1;
(statearr_32110_33091[(2)] = inst_32091);

(statearr_32110_33091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (9))){
var state_32101__$1 = state_32101;
var statearr_32111_33092 = state_32101__$1;
(statearr_32111_33092[(2)] = null);

(statearr_32111_33092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (5))){
var inst_32086 = cljs.core.async.close_BANG_(out);
var state_32101__$1 = state_32101;
var statearr_32112_33093 = state_32101__$1;
(statearr_32112_33093[(2)] = inst_32086);

(statearr_32112_33093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (10))){
var inst_32094 = (state_32101[(2)]);
var state_32101__$1 = (function (){var statearr_32113 = state_32101;
(statearr_32113[(8)] = inst_32094);

return statearr_32113;
})();
var statearr_32114_33094 = state_32101__$1;
(statearr_32114_33094[(2)] = null);

(statearr_32114_33094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (8))){
var inst_32083 = (state_32101[(7)]);
var state_32101__$1 = state_32101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32101__$1,(11),out,inst_32083);
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
var cljs$core$async$state_machine__29677__auto__ = null;
var cljs$core$async$state_machine__29677__auto____0 = (function (){
var statearr_32115 = [null,null,null,null,null,null,null,null,null];
(statearr_32115[(0)] = cljs$core$async$state_machine__29677__auto__);

(statearr_32115[(1)] = (1));

return statearr_32115;
});
var cljs$core$async$state_machine__29677__auto____1 = (function (state_32101){
while(true){
var ret_value__29678__auto__ = (function (){try{while(true){
var result__29679__auto__ = switch__29676__auto__(state_32101);
if(cljs.core.keyword_identical_QMARK_(result__29679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29679__auto__;
}
break;
}
}catch (e32116){if((e32116 instanceof Object)){
var ex__29680__auto__ = e32116;
var statearr_32117_33095 = state_32101;
(statearr_32117_33095[(5)] = ex__29680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32116;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33097 = state_32101;
state_32101 = G__33097;
continue;
} else {
return ret_value__29678__auto__;
}
break;
}
});
cljs$core$async$state_machine__29677__auto__ = function(state_32101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29677__auto____1.call(this,state_32101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29677__auto____0;
cljs$core$async$state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29677__auto____1;
return cljs$core$async$state_machine__29677__auto__;
})()
})();
var state__30028__auto__ = (function (){var statearr_32118 = (f__30027__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30027__auto__.cljs$core$IFn$_invoke$arity$0() : f__30027__auto__.call(null));
(statearr_32118[(6)] = c__30026__auto___33077);

return statearr_32118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30028__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32120 = arguments.length;
switch (G__32120) {
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
var c__30026__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30027__auto__ = (function (){var switch__29676__auto__ = (function (state_32182){
var state_val_32183 = (state_32182[(1)]);
if((state_val_32183 === (7))){
var inst_32178 = (state_32182[(2)]);
var state_32182__$1 = state_32182;
var statearr_32184_33100 = state_32182__$1;
(statearr_32184_33100[(2)] = inst_32178);

(statearr_32184_33100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (20))){
var inst_32148 = (state_32182[(7)]);
var inst_32159 = (state_32182[(2)]);
var inst_32160 = cljs.core.next(inst_32148);
var inst_32134 = inst_32160;
var inst_32135 = null;
var inst_32136 = (0);
var inst_32137 = (0);
var state_32182__$1 = (function (){var statearr_32185 = state_32182;
(statearr_32185[(8)] = inst_32134);

(statearr_32185[(9)] = inst_32137);

(statearr_32185[(10)] = inst_32135);

(statearr_32185[(11)] = inst_32136);

(statearr_32185[(12)] = inst_32159);

return statearr_32185;
})();
var statearr_32186_33101 = state_32182__$1;
(statearr_32186_33101[(2)] = null);

(statearr_32186_33101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (1))){
var state_32182__$1 = state_32182;
var statearr_32187_33102 = state_32182__$1;
(statearr_32187_33102[(2)] = null);

(statearr_32187_33102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (4))){
var inst_32123 = (state_32182[(13)]);
var inst_32123__$1 = (state_32182[(2)]);
var inst_32124 = (inst_32123__$1 == null);
var state_32182__$1 = (function (){var statearr_32188 = state_32182;
(statearr_32188[(13)] = inst_32123__$1);

return statearr_32188;
})();
if(cljs.core.truth_(inst_32124)){
var statearr_32189_33103 = state_32182__$1;
(statearr_32189_33103[(1)] = (5));

} else {
var statearr_32190_33104 = state_32182__$1;
(statearr_32190_33104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (15))){
var state_32182__$1 = state_32182;
var statearr_32194_33105 = state_32182__$1;
(statearr_32194_33105[(2)] = null);

(statearr_32194_33105[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (21))){
var state_32182__$1 = state_32182;
var statearr_32195_33106 = state_32182__$1;
(statearr_32195_33106[(2)] = null);

(statearr_32195_33106[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (13))){
var inst_32134 = (state_32182[(8)]);
var inst_32137 = (state_32182[(9)]);
var inst_32135 = (state_32182[(10)]);
var inst_32136 = (state_32182[(11)]);
var inst_32144 = (state_32182[(2)]);
var inst_32145 = (inst_32137 + (1));
var tmp32191 = inst_32134;
var tmp32192 = inst_32135;
var tmp32193 = inst_32136;
var inst_32134__$1 = tmp32191;
var inst_32135__$1 = tmp32192;
var inst_32136__$1 = tmp32193;
var inst_32137__$1 = inst_32145;
var state_32182__$1 = (function (){var statearr_32196 = state_32182;
(statearr_32196[(8)] = inst_32134__$1);

(statearr_32196[(14)] = inst_32144);

(statearr_32196[(9)] = inst_32137__$1);

(statearr_32196[(10)] = inst_32135__$1);

(statearr_32196[(11)] = inst_32136__$1);

return statearr_32196;
})();
var statearr_32197_33107 = state_32182__$1;
(statearr_32197_33107[(2)] = null);

(statearr_32197_33107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (22))){
var state_32182__$1 = state_32182;
var statearr_32198_33108 = state_32182__$1;
(statearr_32198_33108[(2)] = null);

(statearr_32198_33108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (6))){
var inst_32123 = (state_32182[(13)]);
var inst_32132 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32123) : f.call(null,inst_32123));
var inst_32133 = cljs.core.seq(inst_32132);
var inst_32134 = inst_32133;
var inst_32135 = null;
var inst_32136 = (0);
var inst_32137 = (0);
var state_32182__$1 = (function (){var statearr_32199 = state_32182;
(statearr_32199[(8)] = inst_32134);

(statearr_32199[(9)] = inst_32137);

(statearr_32199[(10)] = inst_32135);

(statearr_32199[(11)] = inst_32136);

return statearr_32199;
})();
var statearr_32200_33109 = state_32182__$1;
(statearr_32200_33109[(2)] = null);

(statearr_32200_33109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (17))){
var inst_32148 = (state_32182[(7)]);
var inst_32152 = cljs.core.chunk_first(inst_32148);
var inst_32153 = cljs.core.chunk_rest(inst_32148);
var inst_32154 = cljs.core.count(inst_32152);
var inst_32134 = inst_32153;
var inst_32135 = inst_32152;
var inst_32136 = inst_32154;
var inst_32137 = (0);
var state_32182__$1 = (function (){var statearr_32201 = state_32182;
(statearr_32201[(8)] = inst_32134);

(statearr_32201[(9)] = inst_32137);

(statearr_32201[(10)] = inst_32135);

(statearr_32201[(11)] = inst_32136);

return statearr_32201;
})();
var statearr_32202_33110 = state_32182__$1;
(statearr_32202_33110[(2)] = null);

(statearr_32202_33110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (3))){
var inst_32180 = (state_32182[(2)]);
var state_32182__$1 = state_32182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32182__$1,inst_32180);
} else {
if((state_val_32183 === (12))){
var inst_32168 = (state_32182[(2)]);
var state_32182__$1 = state_32182;
var statearr_32203_33112 = state_32182__$1;
(statearr_32203_33112[(2)] = inst_32168);

(statearr_32203_33112[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (2))){
var state_32182__$1 = state_32182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32182__$1,(4),in$);
} else {
if((state_val_32183 === (23))){
var inst_32176 = (state_32182[(2)]);
var state_32182__$1 = state_32182;
var statearr_32204_33116 = state_32182__$1;
(statearr_32204_33116[(2)] = inst_32176);

(statearr_32204_33116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (19))){
var inst_32163 = (state_32182[(2)]);
var state_32182__$1 = state_32182;
var statearr_32205_33117 = state_32182__$1;
(statearr_32205_33117[(2)] = inst_32163);

(statearr_32205_33117[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (11))){
var inst_32134 = (state_32182[(8)]);
var inst_32148 = (state_32182[(7)]);
var inst_32148__$1 = cljs.core.seq(inst_32134);
var state_32182__$1 = (function (){var statearr_32206 = state_32182;
(statearr_32206[(7)] = inst_32148__$1);

return statearr_32206;
})();
if(inst_32148__$1){
var statearr_32207_33122 = state_32182__$1;
(statearr_32207_33122[(1)] = (14));

} else {
var statearr_32208_33123 = state_32182__$1;
(statearr_32208_33123[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (9))){
var inst_32170 = (state_32182[(2)]);
var inst_32171 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32182__$1 = (function (){var statearr_32209 = state_32182;
(statearr_32209[(15)] = inst_32170);

return statearr_32209;
})();
if(cljs.core.truth_(inst_32171)){
var statearr_32210_33124 = state_32182__$1;
(statearr_32210_33124[(1)] = (21));

} else {
var statearr_32211_33126 = state_32182__$1;
(statearr_32211_33126[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (5))){
var inst_32126 = cljs.core.async.close_BANG_(out);
var state_32182__$1 = state_32182;
var statearr_32212_33128 = state_32182__$1;
(statearr_32212_33128[(2)] = inst_32126);

(statearr_32212_33128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (14))){
var inst_32148 = (state_32182[(7)]);
var inst_32150 = cljs.core.chunked_seq_QMARK_(inst_32148);
var state_32182__$1 = state_32182;
if(inst_32150){
var statearr_32213_33129 = state_32182__$1;
(statearr_32213_33129[(1)] = (17));

} else {
var statearr_32214_33130 = state_32182__$1;
(statearr_32214_33130[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (16))){
var inst_32166 = (state_32182[(2)]);
var state_32182__$1 = state_32182;
var statearr_32215_33131 = state_32182__$1;
(statearr_32215_33131[(2)] = inst_32166);

(statearr_32215_33131[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (10))){
var inst_32137 = (state_32182[(9)]);
var inst_32135 = (state_32182[(10)]);
var inst_32142 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32135,inst_32137);
var state_32182__$1 = state_32182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32182__$1,(13),out,inst_32142);
} else {
if((state_val_32183 === (18))){
var inst_32148 = (state_32182[(7)]);
var inst_32157 = cljs.core.first(inst_32148);
var state_32182__$1 = state_32182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32182__$1,(20),out,inst_32157);
} else {
if((state_val_32183 === (8))){
var inst_32137 = (state_32182[(9)]);
var inst_32136 = (state_32182[(11)]);
var inst_32139 = (inst_32137 < inst_32136);
var inst_32140 = inst_32139;
var state_32182__$1 = state_32182;
if(cljs.core.truth_(inst_32140)){
var statearr_32216_33132 = state_32182__$1;
(statearr_32216_33132[(1)] = (10));

} else {
var statearr_32217_33133 = state_32182__$1;
(statearr_32217_33133[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__29677__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29677__auto____0 = (function (){
var statearr_32218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32218[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29677__auto__);

(statearr_32218[(1)] = (1));

return statearr_32218;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29677__auto____1 = (function (state_32182){
while(true){
var ret_value__29678__auto__ = (function (){try{while(true){
var result__29679__auto__ = switch__29676__auto__(state_32182);
if(cljs.core.keyword_identical_QMARK_(result__29679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29679__auto__;
}
break;
}
}catch (e32219){if((e32219 instanceof Object)){
var ex__29680__auto__ = e32219;
var statearr_32220_33134 = state_32182;
(statearr_32220_33134[(5)] = ex__29680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32219;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33135 = state_32182;
state_32182 = G__33135;
continue;
} else {
return ret_value__29678__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29677__auto__ = function(state_32182){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29677__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29677__auto____1.call(this,state_32182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29677__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29677__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29677__auto__;
})()
})();
var state__30028__auto__ = (function (){var statearr_32221 = (f__30027__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30027__auto__.cljs$core$IFn$_invoke$arity$0() : f__30027__auto__.call(null));
(statearr_32221[(6)] = c__30026__auto__);

return statearr_32221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30028__auto__);
}));

return c__30026__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32223 = arguments.length;
switch (G__32223) {
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
var G__32225 = arguments.length;
switch (G__32225) {
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
var G__32227 = arguments.length;
switch (G__32227) {
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
var c__30026__auto___33143 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30027__auto__ = (function (){var switch__29676__auto__ = (function (state_32251){
var state_val_32252 = (state_32251[(1)]);
if((state_val_32252 === (7))){
var inst_32246 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
var statearr_32253_33144 = state_32251__$1;
(statearr_32253_33144[(2)] = inst_32246);

(statearr_32253_33144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (1))){
var inst_32228 = null;
var state_32251__$1 = (function (){var statearr_32254 = state_32251;
(statearr_32254[(7)] = inst_32228);

return statearr_32254;
})();
var statearr_32255_33145 = state_32251__$1;
(statearr_32255_33145[(2)] = null);

(statearr_32255_33145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (4))){
var inst_32231 = (state_32251[(8)]);
var inst_32231__$1 = (state_32251[(2)]);
var inst_32232 = (inst_32231__$1 == null);
var inst_32233 = cljs.core.not(inst_32232);
var state_32251__$1 = (function (){var statearr_32256 = state_32251;
(statearr_32256[(8)] = inst_32231__$1);

return statearr_32256;
})();
if(inst_32233){
var statearr_32257_33147 = state_32251__$1;
(statearr_32257_33147[(1)] = (5));

} else {
var statearr_32258_33148 = state_32251__$1;
(statearr_32258_33148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (6))){
var state_32251__$1 = state_32251;
var statearr_32259_33149 = state_32251__$1;
(statearr_32259_33149[(2)] = null);

(statearr_32259_33149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (3))){
var inst_32248 = (state_32251[(2)]);
var inst_32249 = cljs.core.async.close_BANG_(out);
var state_32251__$1 = (function (){var statearr_32260 = state_32251;
(statearr_32260[(9)] = inst_32248);

return statearr_32260;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32251__$1,inst_32249);
} else {
if((state_val_32252 === (2))){
var state_32251__$1 = state_32251;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32251__$1,(4),ch);
} else {
if((state_val_32252 === (11))){
var inst_32231 = (state_32251[(8)]);
var inst_32240 = (state_32251[(2)]);
var inst_32228 = inst_32231;
var state_32251__$1 = (function (){var statearr_32261 = state_32251;
(statearr_32261[(7)] = inst_32228);

(statearr_32261[(10)] = inst_32240);

return statearr_32261;
})();
var statearr_32262_33150 = state_32251__$1;
(statearr_32262_33150[(2)] = null);

(statearr_32262_33150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (9))){
var inst_32231 = (state_32251[(8)]);
var state_32251__$1 = state_32251;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32251__$1,(11),out,inst_32231);
} else {
if((state_val_32252 === (5))){
var inst_32228 = (state_32251[(7)]);
var inst_32231 = (state_32251[(8)]);
var inst_32235 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32231,inst_32228);
var state_32251__$1 = state_32251;
if(inst_32235){
var statearr_32264_33151 = state_32251__$1;
(statearr_32264_33151[(1)] = (8));

} else {
var statearr_32265_33152 = state_32251__$1;
(statearr_32265_33152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (10))){
var inst_32243 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
var statearr_32266_33154 = state_32251__$1;
(statearr_32266_33154[(2)] = inst_32243);

(statearr_32266_33154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (8))){
var inst_32228 = (state_32251[(7)]);
var tmp32263 = inst_32228;
var inst_32228__$1 = tmp32263;
var state_32251__$1 = (function (){var statearr_32267 = state_32251;
(statearr_32267[(7)] = inst_32228__$1);

return statearr_32267;
})();
var statearr_32268_33156 = state_32251__$1;
(statearr_32268_33156[(2)] = null);

(statearr_32268_33156[(1)] = (2));


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
var cljs$core$async$state_machine__29677__auto__ = null;
var cljs$core$async$state_machine__29677__auto____0 = (function (){
var statearr_32269 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32269[(0)] = cljs$core$async$state_machine__29677__auto__);

(statearr_32269[(1)] = (1));

return statearr_32269;
});
var cljs$core$async$state_machine__29677__auto____1 = (function (state_32251){
while(true){
var ret_value__29678__auto__ = (function (){try{while(true){
var result__29679__auto__ = switch__29676__auto__(state_32251);
if(cljs.core.keyword_identical_QMARK_(result__29679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29679__auto__;
}
break;
}
}catch (e32270){if((e32270 instanceof Object)){
var ex__29680__auto__ = e32270;
var statearr_32271_33160 = state_32251;
(statearr_32271_33160[(5)] = ex__29680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32270;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33161 = state_32251;
state_32251 = G__33161;
continue;
} else {
return ret_value__29678__auto__;
}
break;
}
});
cljs$core$async$state_machine__29677__auto__ = function(state_32251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29677__auto____1.call(this,state_32251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29677__auto____0;
cljs$core$async$state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29677__auto____1;
return cljs$core$async$state_machine__29677__auto__;
})()
})();
var state__30028__auto__ = (function (){var statearr_32272 = (f__30027__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30027__auto__.cljs$core$IFn$_invoke$arity$0() : f__30027__auto__.call(null));
(statearr_32272[(6)] = c__30026__auto___33143);

return statearr_32272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30028__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32274 = arguments.length;
switch (G__32274) {
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
var c__30026__auto___33170 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30027__auto__ = (function (){var switch__29676__auto__ = (function (state_32312){
var state_val_32313 = (state_32312[(1)]);
if((state_val_32313 === (7))){
var inst_32308 = (state_32312[(2)]);
var state_32312__$1 = state_32312;
var statearr_32314_33174 = state_32312__$1;
(statearr_32314_33174[(2)] = inst_32308);

(statearr_32314_33174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (1))){
var inst_32275 = (new Array(n));
var inst_32276 = inst_32275;
var inst_32277 = (0);
var state_32312__$1 = (function (){var statearr_32315 = state_32312;
(statearr_32315[(7)] = inst_32277);

(statearr_32315[(8)] = inst_32276);

return statearr_32315;
})();
var statearr_32316_33175 = state_32312__$1;
(statearr_32316_33175[(2)] = null);

(statearr_32316_33175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (4))){
var inst_32280 = (state_32312[(9)]);
var inst_32280__$1 = (state_32312[(2)]);
var inst_32281 = (inst_32280__$1 == null);
var inst_32282 = cljs.core.not(inst_32281);
var state_32312__$1 = (function (){var statearr_32317 = state_32312;
(statearr_32317[(9)] = inst_32280__$1);

return statearr_32317;
})();
if(inst_32282){
var statearr_32318_33179 = state_32312__$1;
(statearr_32318_33179[(1)] = (5));

} else {
var statearr_32319_33180 = state_32312__$1;
(statearr_32319_33180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (15))){
var inst_32302 = (state_32312[(2)]);
var state_32312__$1 = state_32312;
var statearr_32320_33181 = state_32312__$1;
(statearr_32320_33181[(2)] = inst_32302);

(statearr_32320_33181[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (13))){
var state_32312__$1 = state_32312;
var statearr_32321_33182 = state_32312__$1;
(statearr_32321_33182[(2)] = null);

(statearr_32321_33182[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (6))){
var inst_32277 = (state_32312[(7)]);
var inst_32298 = (inst_32277 > (0));
var state_32312__$1 = state_32312;
if(cljs.core.truth_(inst_32298)){
var statearr_32322_33186 = state_32312__$1;
(statearr_32322_33186[(1)] = (12));

} else {
var statearr_32323_33187 = state_32312__$1;
(statearr_32323_33187[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (3))){
var inst_32310 = (state_32312[(2)]);
var state_32312__$1 = state_32312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32312__$1,inst_32310);
} else {
if((state_val_32313 === (12))){
var inst_32276 = (state_32312[(8)]);
var inst_32300 = cljs.core.vec(inst_32276);
var state_32312__$1 = state_32312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32312__$1,(15),out,inst_32300);
} else {
if((state_val_32313 === (2))){
var state_32312__$1 = state_32312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32312__$1,(4),ch);
} else {
if((state_val_32313 === (11))){
var inst_32292 = (state_32312[(2)]);
var inst_32293 = (new Array(n));
var inst_32276 = inst_32293;
var inst_32277 = (0);
var state_32312__$1 = (function (){var statearr_32324 = state_32312;
(statearr_32324[(7)] = inst_32277);

(statearr_32324[(8)] = inst_32276);

(statearr_32324[(10)] = inst_32292);

return statearr_32324;
})();
var statearr_32325_33189 = state_32312__$1;
(statearr_32325_33189[(2)] = null);

(statearr_32325_33189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (9))){
var inst_32276 = (state_32312[(8)]);
var inst_32290 = cljs.core.vec(inst_32276);
var state_32312__$1 = state_32312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32312__$1,(11),out,inst_32290);
} else {
if((state_val_32313 === (5))){
var inst_32277 = (state_32312[(7)]);
var inst_32280 = (state_32312[(9)]);
var inst_32276 = (state_32312[(8)]);
var inst_32285 = (state_32312[(11)]);
var inst_32284 = (inst_32276[inst_32277] = inst_32280);
var inst_32285__$1 = (inst_32277 + (1));
var inst_32286 = (inst_32285__$1 < n);
var state_32312__$1 = (function (){var statearr_32326 = state_32312;
(statearr_32326[(12)] = inst_32284);

(statearr_32326[(11)] = inst_32285__$1);

return statearr_32326;
})();
if(cljs.core.truth_(inst_32286)){
var statearr_32327_33190 = state_32312__$1;
(statearr_32327_33190[(1)] = (8));

} else {
var statearr_32328_33191 = state_32312__$1;
(statearr_32328_33191[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (14))){
var inst_32305 = (state_32312[(2)]);
var inst_32306 = cljs.core.async.close_BANG_(out);
var state_32312__$1 = (function (){var statearr_32330 = state_32312;
(statearr_32330[(13)] = inst_32305);

return statearr_32330;
})();
var statearr_32331_33195 = state_32312__$1;
(statearr_32331_33195[(2)] = inst_32306);

(statearr_32331_33195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (10))){
var inst_32296 = (state_32312[(2)]);
var state_32312__$1 = state_32312;
var statearr_32332_33196 = state_32312__$1;
(statearr_32332_33196[(2)] = inst_32296);

(statearr_32332_33196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (8))){
var inst_32276 = (state_32312[(8)]);
var inst_32285 = (state_32312[(11)]);
var tmp32329 = inst_32276;
var inst_32276__$1 = tmp32329;
var inst_32277 = inst_32285;
var state_32312__$1 = (function (){var statearr_32333 = state_32312;
(statearr_32333[(7)] = inst_32277);

(statearr_32333[(8)] = inst_32276__$1);

return statearr_32333;
})();
var statearr_32334_33203 = state_32312__$1;
(statearr_32334_33203[(2)] = null);

(statearr_32334_33203[(1)] = (2));


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
var cljs$core$async$state_machine__29677__auto__ = null;
var cljs$core$async$state_machine__29677__auto____0 = (function (){
var statearr_32335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32335[(0)] = cljs$core$async$state_machine__29677__auto__);

(statearr_32335[(1)] = (1));

return statearr_32335;
});
var cljs$core$async$state_machine__29677__auto____1 = (function (state_32312){
while(true){
var ret_value__29678__auto__ = (function (){try{while(true){
var result__29679__auto__ = switch__29676__auto__(state_32312);
if(cljs.core.keyword_identical_QMARK_(result__29679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29679__auto__;
}
break;
}
}catch (e32336){if((e32336 instanceof Object)){
var ex__29680__auto__ = e32336;
var statearr_32337_33210 = state_32312;
(statearr_32337_33210[(5)] = ex__29680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32336;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33211 = state_32312;
state_32312 = G__33211;
continue;
} else {
return ret_value__29678__auto__;
}
break;
}
});
cljs$core$async$state_machine__29677__auto__ = function(state_32312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29677__auto____1.call(this,state_32312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29677__auto____0;
cljs$core$async$state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29677__auto____1;
return cljs$core$async$state_machine__29677__auto__;
})()
})();
var state__30028__auto__ = (function (){var statearr_32338 = (f__30027__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30027__auto__.cljs$core$IFn$_invoke$arity$0() : f__30027__auto__.call(null));
(statearr_32338[(6)] = c__30026__auto___33170);

return statearr_32338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30028__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32340 = arguments.length;
switch (G__32340) {
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
var c__30026__auto___33213 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30027__auto__ = (function (){var switch__29676__auto__ = (function (state_32382){
var state_val_32383 = (state_32382[(1)]);
if((state_val_32383 === (7))){
var inst_32378 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
var statearr_32384_33214 = state_32382__$1;
(statearr_32384_33214[(2)] = inst_32378);

(statearr_32384_33214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (1))){
var inst_32341 = [];
var inst_32342 = inst_32341;
var inst_32343 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32382__$1 = (function (){var statearr_32385 = state_32382;
(statearr_32385[(7)] = inst_32343);

(statearr_32385[(8)] = inst_32342);

return statearr_32385;
})();
var statearr_32386_33215 = state_32382__$1;
(statearr_32386_33215[(2)] = null);

(statearr_32386_33215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (4))){
var inst_32346 = (state_32382[(9)]);
var inst_32346__$1 = (state_32382[(2)]);
var inst_32347 = (inst_32346__$1 == null);
var inst_32348 = cljs.core.not(inst_32347);
var state_32382__$1 = (function (){var statearr_32387 = state_32382;
(statearr_32387[(9)] = inst_32346__$1);

return statearr_32387;
})();
if(inst_32348){
var statearr_32388_33222 = state_32382__$1;
(statearr_32388_33222[(1)] = (5));

} else {
var statearr_32389_33223 = state_32382__$1;
(statearr_32389_33223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (15))){
var inst_32372 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
var statearr_32390_33224 = state_32382__$1;
(statearr_32390_33224[(2)] = inst_32372);

(statearr_32390_33224[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (13))){
var state_32382__$1 = state_32382;
var statearr_32391_33225 = state_32382__$1;
(statearr_32391_33225[(2)] = null);

(statearr_32391_33225[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (6))){
var inst_32342 = (state_32382[(8)]);
var inst_32367 = inst_32342.length;
var inst_32368 = (inst_32367 > (0));
var state_32382__$1 = state_32382;
if(cljs.core.truth_(inst_32368)){
var statearr_32392_33226 = state_32382__$1;
(statearr_32392_33226[(1)] = (12));

} else {
var statearr_32393_33227 = state_32382__$1;
(statearr_32393_33227[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (3))){
var inst_32380 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32382__$1,inst_32380);
} else {
if((state_val_32383 === (12))){
var inst_32342 = (state_32382[(8)]);
var inst_32370 = cljs.core.vec(inst_32342);
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32382__$1,(15),out,inst_32370);
} else {
if((state_val_32383 === (2))){
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32382__$1,(4),ch);
} else {
if((state_val_32383 === (11))){
var inst_32350 = (state_32382[(10)]);
var inst_32346 = (state_32382[(9)]);
var inst_32360 = (state_32382[(2)]);
var inst_32361 = [];
var inst_32362 = inst_32361.push(inst_32346);
var inst_32342 = inst_32361;
var inst_32343 = inst_32350;
var state_32382__$1 = (function (){var statearr_32394 = state_32382;
(statearr_32394[(7)] = inst_32343);

(statearr_32394[(11)] = inst_32360);

(statearr_32394[(12)] = inst_32362);

(statearr_32394[(8)] = inst_32342);

return statearr_32394;
})();
var statearr_32395_33234 = state_32382__$1;
(statearr_32395_33234[(2)] = null);

(statearr_32395_33234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (9))){
var inst_32342 = (state_32382[(8)]);
var inst_32358 = cljs.core.vec(inst_32342);
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32382__$1,(11),out,inst_32358);
} else {
if((state_val_32383 === (5))){
var inst_32350 = (state_32382[(10)]);
var inst_32343 = (state_32382[(7)]);
var inst_32346 = (state_32382[(9)]);
var inst_32350__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32346) : f.call(null,inst_32346));
var inst_32351 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32350__$1,inst_32343);
var inst_32352 = cljs.core.keyword_identical_QMARK_(inst_32343,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32353 = ((inst_32351) || (inst_32352));
var state_32382__$1 = (function (){var statearr_32396 = state_32382;
(statearr_32396[(10)] = inst_32350__$1);

return statearr_32396;
})();
if(cljs.core.truth_(inst_32353)){
var statearr_32397_33235 = state_32382__$1;
(statearr_32397_33235[(1)] = (8));

} else {
var statearr_32398_33236 = state_32382__$1;
(statearr_32398_33236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (14))){
var inst_32375 = (state_32382[(2)]);
var inst_32376 = cljs.core.async.close_BANG_(out);
var state_32382__$1 = (function (){var statearr_32400 = state_32382;
(statearr_32400[(13)] = inst_32375);

return statearr_32400;
})();
var statearr_32401_33237 = state_32382__$1;
(statearr_32401_33237[(2)] = inst_32376);

(statearr_32401_33237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (10))){
var inst_32365 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
var statearr_32402_33238 = state_32382__$1;
(statearr_32402_33238[(2)] = inst_32365);

(statearr_32402_33238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (8))){
var inst_32350 = (state_32382[(10)]);
var inst_32346 = (state_32382[(9)]);
var inst_32342 = (state_32382[(8)]);
var inst_32355 = inst_32342.push(inst_32346);
var tmp32399 = inst_32342;
var inst_32342__$1 = tmp32399;
var inst_32343 = inst_32350;
var state_32382__$1 = (function (){var statearr_32403 = state_32382;
(statearr_32403[(14)] = inst_32355);

(statearr_32403[(7)] = inst_32343);

(statearr_32403[(8)] = inst_32342__$1);

return statearr_32403;
})();
var statearr_32404_33239 = state_32382__$1;
(statearr_32404_33239[(2)] = null);

(statearr_32404_33239[(1)] = (2));


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
var cljs$core$async$state_machine__29677__auto__ = null;
var cljs$core$async$state_machine__29677__auto____0 = (function (){
var statearr_32405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32405[(0)] = cljs$core$async$state_machine__29677__auto__);

(statearr_32405[(1)] = (1));

return statearr_32405;
});
var cljs$core$async$state_machine__29677__auto____1 = (function (state_32382){
while(true){
var ret_value__29678__auto__ = (function (){try{while(true){
var result__29679__auto__ = switch__29676__auto__(state_32382);
if(cljs.core.keyword_identical_QMARK_(result__29679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29679__auto__;
}
break;
}
}catch (e32406){if((e32406 instanceof Object)){
var ex__29680__auto__ = e32406;
var statearr_32407_33246 = state_32382;
(statearr_32407_33246[(5)] = ex__29680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32406;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33247 = state_32382;
state_32382 = G__33247;
continue;
} else {
return ret_value__29678__auto__;
}
break;
}
});
cljs$core$async$state_machine__29677__auto__ = function(state_32382){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29677__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29677__auto____1.call(this,state_32382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29677__auto____0;
cljs$core$async$state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29677__auto____1;
return cljs$core$async$state_machine__29677__auto__;
})()
})();
var state__30028__auto__ = (function (){var statearr_32408 = (f__30027__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30027__auto__.cljs$core$IFn$_invoke$arity$0() : f__30027__auto__.call(null));
(statearr_32408[(6)] = c__30026__auto___33213);

return statearr_32408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30028__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
