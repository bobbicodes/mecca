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
var G__29899 = arguments.length;
switch (G__29899) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29903 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29903 = (function (f,blockable,meta29904){
this.f = f;
this.blockable = blockable;
this.meta29904 = meta29904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29905,meta29904__$1){
var self__ = this;
var _29905__$1 = this;
return (new cljs.core.async.t_cljs$core$async29903(self__.f,self__.blockable,meta29904__$1));
}));

(cljs.core.async.t_cljs$core$async29903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29905){
var self__ = this;
var _29905__$1 = this;
return self__.meta29904;
}));

(cljs.core.async.t_cljs$core$async29903.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29903.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29903.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29903.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29904","meta29904",-1082751738,null)], null);
}));

(cljs.core.async.t_cljs$core$async29903.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29903");

(cljs.core.async.t_cljs$core$async29903.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29903");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29903.
 */
cljs.core.async.__GT_t_cljs$core$async29903 = (function cljs$core$async$__GT_t_cljs$core$async29903(f__$1,blockable__$1,meta29904){
return (new cljs.core.async.t_cljs$core$async29903(f__$1,blockable__$1,meta29904));
});

}

return (new cljs.core.async.t_cljs$core$async29903(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29938 = arguments.length;
switch (G__29938) {
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
var G__29961 = arguments.length;
switch (G__29961) {
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
var G__29969 = arguments.length;
switch (G__29969) {
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
var val_32466 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32466) : fn1.call(null,val_32466));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32466) : fn1.call(null,val_32466));
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
var G__29980 = arguments.length;
switch (G__29980) {
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
var n__4666__auto___32474 = n;
var x_32475 = (0);
while(true){
if((x_32475 < n__4666__auto___32474)){
(a[x_32475] = x_32475);

var G__32476 = (x_32475 + (1));
x_32475 = G__32476;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30018 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30018 = (function (flag,meta30019){
this.flag = flag;
this.meta30019 = meta30019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30020,meta30019__$1){
var self__ = this;
var _30020__$1 = this;
return (new cljs.core.async.t_cljs$core$async30018(self__.flag,meta30019__$1));
}));

(cljs.core.async.t_cljs$core$async30018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30020){
var self__ = this;
var _30020__$1 = this;
return self__.meta30019;
}));

(cljs.core.async.t_cljs$core$async30018.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30018.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30018.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30018.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30018.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30019","meta30019",1564126459,null)], null);
}));

(cljs.core.async.t_cljs$core$async30018.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30018");

(cljs.core.async.t_cljs$core$async30018.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30018");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30018.
 */
cljs.core.async.__GT_t_cljs$core$async30018 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30018(flag__$1,meta30019){
return (new cljs.core.async.t_cljs$core$async30018(flag__$1,meta30019));
});

}

return (new cljs.core.async.t_cljs$core$async30018(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30023 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30023 = (function (flag,cb,meta30024){
this.flag = flag;
this.cb = cb;
this.meta30024 = meta30024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30025,meta30024__$1){
var self__ = this;
var _30025__$1 = this;
return (new cljs.core.async.t_cljs$core$async30023(self__.flag,self__.cb,meta30024__$1));
}));

(cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30025){
var self__ = this;
var _30025__$1 = this;
return self__.meta30024;
}));

(cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30024","meta30024",-144604471,null)], null);
}));

(cljs.core.async.t_cljs$core$async30023.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30023");

(cljs.core.async.t_cljs$core$async30023.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30023");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30023.
 */
cljs.core.async.__GT_t_cljs$core$async30023 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30023(flag__$1,cb__$1,meta30024){
return (new cljs.core.async.t_cljs$core$async30023(flag__$1,cb__$1,meta30024));
});

}

return (new cljs.core.async.t_cljs$core$async30023(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30045_SHARP_){
var G__30048 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30045_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30048) : fret.call(null,G__30048));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30046_SHARP_){
var G__30050 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30046_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30050) : fret.call(null,G__30050));
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
var G__32492 = (i + (1));
i = G__32492;
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
var len__4789__auto___32495 = arguments.length;
var i__4790__auto___32496 = (0);
while(true){
if((i__4790__auto___32496 < len__4789__auto___32495)){
args__4795__auto__.push((arguments[i__4790__auto___32496]));

var G__32497 = (i__4790__auto___32496 + (1));
i__4790__auto___32496 = G__32497;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30057){
var map__30065 = p__30057;
var map__30065__$1 = (((((!((map__30065 == null))))?(((((map__30065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30065):map__30065);
var opts = map__30065__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30053){
var G__30054 = cljs.core.first(seq30053);
var seq30053__$1 = cljs.core.next(seq30053);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30054,seq30053__$1);
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
var G__30072 = arguments.length;
switch (G__30072) {
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
var c__29789__auto___32502 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29790__auto__ = (function (){var switch__29585__auto__ = (function (state_30133){
var state_val_30134 = (state_30133[(1)]);
if((state_val_30134 === (7))){
var inst_30127 = (state_30133[(2)]);
var state_30133__$1 = state_30133;
var statearr_30141_32506 = state_30133__$1;
(statearr_30141_32506[(2)] = inst_30127);

(statearr_30141_32506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (1))){
var state_30133__$1 = state_30133;
var statearr_30143_32508 = state_30133__$1;
(statearr_30143_32508[(2)] = null);

(statearr_30143_32508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (4))){
var inst_30102 = (state_30133[(7)]);
var inst_30102__$1 = (state_30133[(2)]);
var inst_30103 = (inst_30102__$1 == null);
var state_30133__$1 = (function (){var statearr_30149 = state_30133;
(statearr_30149[(7)] = inst_30102__$1);

return statearr_30149;
})();
if(cljs.core.truth_(inst_30103)){
var statearr_30150_32510 = state_30133__$1;
(statearr_30150_32510[(1)] = (5));

} else {
var statearr_30152_32511 = state_30133__$1;
(statearr_30152_32511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (13))){
var state_30133__$1 = state_30133;
var statearr_30153_32512 = state_30133__$1;
(statearr_30153_32512[(2)] = null);

(statearr_30153_32512[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (6))){
var inst_30102 = (state_30133[(7)]);
var state_30133__$1 = state_30133;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30133__$1,(11),to,inst_30102);
} else {
if((state_val_30134 === (3))){
var inst_30131 = (state_30133[(2)]);
var state_30133__$1 = state_30133;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30133__$1,inst_30131);
} else {
if((state_val_30134 === (12))){
var state_30133__$1 = state_30133;
var statearr_30154_32513 = state_30133__$1;
(statearr_30154_32513[(2)] = null);

(statearr_30154_32513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (2))){
var state_30133__$1 = state_30133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30133__$1,(4),from);
} else {
if((state_val_30134 === (11))){
var inst_30117 = (state_30133[(2)]);
var state_30133__$1 = state_30133;
if(cljs.core.truth_(inst_30117)){
var statearr_30158_32515 = state_30133__$1;
(statearr_30158_32515[(1)] = (12));

} else {
var statearr_30162_32516 = state_30133__$1;
(statearr_30162_32516[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (9))){
var state_30133__$1 = state_30133;
var statearr_30166_32518 = state_30133__$1;
(statearr_30166_32518[(2)] = null);

(statearr_30166_32518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (5))){
var state_30133__$1 = state_30133;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30236_32520 = state_30133__$1;
(statearr_30236_32520[(1)] = (8));

} else {
var statearr_30237_32522 = state_30133__$1;
(statearr_30237_32522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (14))){
var inst_30125 = (state_30133[(2)]);
var state_30133__$1 = state_30133;
var statearr_30238_32523 = state_30133__$1;
(statearr_30238_32523[(2)] = inst_30125);

(statearr_30238_32523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (10))){
var inst_30113 = (state_30133[(2)]);
var state_30133__$1 = state_30133;
var statearr_30242_32524 = state_30133__$1;
(statearr_30242_32524[(2)] = inst_30113);

(statearr_30242_32524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (8))){
var inst_30107 = cljs.core.async.close_BANG_(to);
var state_30133__$1 = state_30133;
var statearr_30244_32527 = state_30133__$1;
(statearr_30244_32527[(2)] = inst_30107);

(statearr_30244_32527[(1)] = (10));


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
var cljs$core$async$state_machine__29586__auto__ = null;
var cljs$core$async$state_machine__29586__auto____0 = (function (){
var statearr_30246 = [null,null,null,null,null,null,null,null];
(statearr_30246[(0)] = cljs$core$async$state_machine__29586__auto__);

(statearr_30246[(1)] = (1));

return statearr_30246;
});
var cljs$core$async$state_machine__29586__auto____1 = (function (state_30133){
while(true){
var ret_value__29587__auto__ = (function (){try{while(true){
var result__29588__auto__ = switch__29585__auto__(state_30133);
if(cljs.core.keyword_identical_QMARK_(result__29588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29588__auto__;
}
break;
}
}catch (e30248){if((e30248 instanceof Object)){
var ex__29589__auto__ = e30248;
var statearr_30249_32535 = state_30133;
(statearr_30249_32535[(5)] = ex__29589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30248;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32537 = state_30133;
state_30133 = G__32537;
continue;
} else {
return ret_value__29587__auto__;
}
break;
}
});
cljs$core$async$state_machine__29586__auto__ = function(state_30133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29586__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29586__auto____1.call(this,state_30133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29586__auto____0;
cljs$core$async$state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29586__auto____1;
return cljs$core$async$state_machine__29586__auto__;
})()
})();
var state__29791__auto__ = (function (){var statearr_30250 = (f__29790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29790__auto__.cljs$core$IFn$_invoke$arity$0() : f__29790__auto__.call(null));
(statearr_30250[(6)] = c__29789__auto___32502);

return statearr_30250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29791__auto__);
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
var process = (function (p__30266){
var vec__30268 = p__30266;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30268,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30268,(1),null);
var job = vec__30268;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29789__auto___32546 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29790__auto__ = (function (){var switch__29585__auto__ = (function (state_30277){
var state_val_30279 = (state_30277[(1)]);
if((state_val_30279 === (1))){
var state_30277__$1 = state_30277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30277__$1,(2),res,v);
} else {
if((state_val_30279 === (2))){
var inst_30274 = (state_30277[(2)]);
var inst_30275 = cljs.core.async.close_BANG_(res);
var state_30277__$1 = (function (){var statearr_30294 = state_30277;
(statearr_30294[(7)] = inst_30274);

return statearr_30294;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30277__$1,inst_30275);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____0 = (function (){
var statearr_30298 = [null,null,null,null,null,null,null,null];
(statearr_30298[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__);

(statearr_30298[(1)] = (1));

return statearr_30298;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____1 = (function (state_30277){
while(true){
var ret_value__29587__auto__ = (function (){try{while(true){
var result__29588__auto__ = switch__29585__auto__(state_30277);
if(cljs.core.keyword_identical_QMARK_(result__29588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29588__auto__;
}
break;
}
}catch (e30302){if((e30302 instanceof Object)){
var ex__29589__auto__ = e30302;
var statearr_30303_32547 = state_30277;
(statearr_30303_32547[(5)] = ex__29589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30302;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32548 = state_30277;
state_30277 = G__32548;
continue;
} else {
return ret_value__29587__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__ = function(state_30277){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____1.call(this,state_30277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__;
})()
})();
var state__29791__auto__ = (function (){var statearr_30304 = (f__29790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29790__auto__.cljs$core$IFn$_invoke$arity$0() : f__29790__auto__.call(null));
(statearr_30304[(6)] = c__29789__auto___32546);

return statearr_30304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29791__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30309){
var vec__30311 = p__30309;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30311,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30311,(1),null);
var job = vec__30311;
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
var n__4666__auto___32555 = n;
var __32557 = (0);
while(true){
if((__32557 < n__4666__auto___32555)){
var G__30314_32558 = type;
var G__30314_32559__$1 = (((G__30314_32558 instanceof cljs.core.Keyword))?G__30314_32558.fqn:null);
switch (G__30314_32559__$1) {
case "compute":
var c__29789__auto___32561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32557,c__29789__auto___32561,G__30314_32558,G__30314_32559__$1,n__4666__auto___32555,jobs,results,process,async){
return (function (){
var f__29790__auto__ = (function (){var switch__29585__auto__ = ((function (__32557,c__29789__auto___32561,G__30314_32558,G__30314_32559__$1,n__4666__auto___32555,jobs,results,process,async){
return (function (state_30327){
var state_val_30328 = (state_30327[(1)]);
if((state_val_30328 === (1))){
var state_30327__$1 = state_30327;
var statearr_30330_32562 = state_30327__$1;
(statearr_30330_32562[(2)] = null);

(statearr_30330_32562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (2))){
var state_30327__$1 = state_30327;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30327__$1,(4),jobs);
} else {
if((state_val_30328 === (3))){
var inst_30325 = (state_30327[(2)]);
var state_30327__$1 = state_30327;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30327__$1,inst_30325);
} else {
if((state_val_30328 === (4))){
var inst_30317 = (state_30327[(2)]);
var inst_30318 = process(inst_30317);
var state_30327__$1 = state_30327;
if(cljs.core.truth_(inst_30318)){
var statearr_30331_32563 = state_30327__$1;
(statearr_30331_32563[(1)] = (5));

} else {
var statearr_30332_32564 = state_30327__$1;
(statearr_30332_32564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (5))){
var state_30327__$1 = state_30327;
var statearr_30333_32565 = state_30327__$1;
(statearr_30333_32565[(2)] = null);

(statearr_30333_32565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (6))){
var state_30327__$1 = state_30327;
var statearr_30335_32567 = state_30327__$1;
(statearr_30335_32567[(2)] = null);

(statearr_30335_32567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30328 === (7))){
var inst_30323 = (state_30327[(2)]);
var state_30327__$1 = state_30327;
var statearr_30337_32570 = state_30327__$1;
(statearr_30337_32570[(2)] = inst_30323);

(statearr_30337_32570[(1)] = (3));


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
});})(__32557,c__29789__auto___32561,G__30314_32558,G__30314_32559__$1,n__4666__auto___32555,jobs,results,process,async))
;
return ((function (__32557,switch__29585__auto__,c__29789__auto___32561,G__30314_32558,G__30314_32559__$1,n__4666__auto___32555,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____0 = (function (){
var statearr_30341 = [null,null,null,null,null,null,null];
(statearr_30341[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__);

(statearr_30341[(1)] = (1));

return statearr_30341;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____1 = (function (state_30327){
while(true){
var ret_value__29587__auto__ = (function (){try{while(true){
var result__29588__auto__ = switch__29585__auto__(state_30327);
if(cljs.core.keyword_identical_QMARK_(result__29588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29588__auto__;
}
break;
}
}catch (e30343){if((e30343 instanceof Object)){
var ex__29589__auto__ = e30343;
var statearr_30344_32571 = state_30327;
(statearr_30344_32571[(5)] = ex__29589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30343;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32573 = state_30327;
state_30327 = G__32573;
continue;
} else {
return ret_value__29587__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__ = function(state_30327){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____1.call(this,state_30327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__;
})()
;})(__32557,switch__29585__auto__,c__29789__auto___32561,G__30314_32558,G__30314_32559__$1,n__4666__auto___32555,jobs,results,process,async))
})();
var state__29791__auto__ = (function (){var statearr_30345 = (f__29790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29790__auto__.cljs$core$IFn$_invoke$arity$0() : f__29790__auto__.call(null));
(statearr_30345[(6)] = c__29789__auto___32561);

return statearr_30345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29791__auto__);
});})(__32557,c__29789__auto___32561,G__30314_32558,G__30314_32559__$1,n__4666__auto___32555,jobs,results,process,async))
);


break;
case "async":
var c__29789__auto___32575 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32557,c__29789__auto___32575,G__30314_32558,G__30314_32559__$1,n__4666__auto___32555,jobs,results,process,async){
return (function (){
var f__29790__auto__ = (function (){var switch__29585__auto__ = ((function (__32557,c__29789__auto___32575,G__30314_32558,G__30314_32559__$1,n__4666__auto___32555,jobs,results,process,async){
return (function (state_30360){
var state_val_30361 = (state_30360[(1)]);
if((state_val_30361 === (1))){
var state_30360__$1 = state_30360;
var statearr_30365_32576 = state_30360__$1;
(statearr_30365_32576[(2)] = null);

(statearr_30365_32576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (2))){
var state_30360__$1 = state_30360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30360__$1,(4),jobs);
} else {
if((state_val_30361 === (3))){
var inst_30358 = (state_30360[(2)]);
var state_30360__$1 = state_30360;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30360__$1,inst_30358);
} else {
if((state_val_30361 === (4))){
var inst_30350 = (state_30360[(2)]);
var inst_30351 = async(inst_30350);
var state_30360__$1 = state_30360;
if(cljs.core.truth_(inst_30351)){
var statearr_30367_32577 = state_30360__$1;
(statearr_30367_32577[(1)] = (5));

} else {
var statearr_30368_32578 = state_30360__$1;
(statearr_30368_32578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (5))){
var state_30360__$1 = state_30360;
var statearr_30369_32579 = state_30360__$1;
(statearr_30369_32579[(2)] = null);

(statearr_30369_32579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (6))){
var state_30360__$1 = state_30360;
var statearr_30370_32580 = state_30360__$1;
(statearr_30370_32580[(2)] = null);

(statearr_30370_32580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (7))){
var inst_30356 = (state_30360[(2)]);
var state_30360__$1 = state_30360;
var statearr_30372_32581 = state_30360__$1;
(statearr_30372_32581[(2)] = inst_30356);

(statearr_30372_32581[(1)] = (3));


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
});})(__32557,c__29789__auto___32575,G__30314_32558,G__30314_32559__$1,n__4666__auto___32555,jobs,results,process,async))
;
return ((function (__32557,switch__29585__auto__,c__29789__auto___32575,G__30314_32558,G__30314_32559__$1,n__4666__auto___32555,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____0 = (function (){
var statearr_30375 = [null,null,null,null,null,null,null];
(statearr_30375[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__);

(statearr_30375[(1)] = (1));

return statearr_30375;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____1 = (function (state_30360){
while(true){
var ret_value__29587__auto__ = (function (){try{while(true){
var result__29588__auto__ = switch__29585__auto__(state_30360);
if(cljs.core.keyword_identical_QMARK_(result__29588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29588__auto__;
}
break;
}
}catch (e30378){if((e30378 instanceof Object)){
var ex__29589__auto__ = e30378;
var statearr_30379_32584 = state_30360;
(statearr_30379_32584[(5)] = ex__29589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30378;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32585 = state_30360;
state_30360 = G__32585;
continue;
} else {
return ret_value__29587__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__ = function(state_30360){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____1.call(this,state_30360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__;
})()
;})(__32557,switch__29585__auto__,c__29789__auto___32575,G__30314_32558,G__30314_32559__$1,n__4666__auto___32555,jobs,results,process,async))
})();
var state__29791__auto__ = (function (){var statearr_30381 = (f__29790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29790__auto__.cljs$core$IFn$_invoke$arity$0() : f__29790__auto__.call(null));
(statearr_30381[(6)] = c__29789__auto___32575);

return statearr_30381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29791__auto__);
});})(__32557,c__29789__auto___32575,G__30314_32558,G__30314_32559__$1,n__4666__auto___32555,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30314_32559__$1)].join('')));

}

var G__32586 = (__32557 + (1));
__32557 = G__32586;
continue;
} else {
}
break;
}

var c__29789__auto___32588 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29790__auto__ = (function (){var switch__29585__auto__ = (function (state_30405){
var state_val_30406 = (state_30405[(1)]);
if((state_val_30406 === (7))){
var inst_30401 = (state_30405[(2)]);
var state_30405__$1 = state_30405;
var statearr_30410_32590 = state_30405__$1;
(statearr_30410_32590[(2)] = inst_30401);

(statearr_30410_32590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (1))){
var state_30405__$1 = state_30405;
var statearr_30412_32591 = state_30405__$1;
(statearr_30412_32591[(2)] = null);

(statearr_30412_32591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (4))){
var inst_30384 = (state_30405[(7)]);
var inst_30384__$1 = (state_30405[(2)]);
var inst_30385 = (inst_30384__$1 == null);
var state_30405__$1 = (function (){var statearr_30413 = state_30405;
(statearr_30413[(7)] = inst_30384__$1);

return statearr_30413;
})();
if(cljs.core.truth_(inst_30385)){
var statearr_30414_32594 = state_30405__$1;
(statearr_30414_32594[(1)] = (5));

} else {
var statearr_30415_32596 = state_30405__$1;
(statearr_30415_32596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (6))){
var inst_30390 = (state_30405[(8)]);
var inst_30384 = (state_30405[(7)]);
var inst_30390__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30392 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30393 = [inst_30384,inst_30390__$1];
var inst_30394 = (new cljs.core.PersistentVector(null,2,(5),inst_30392,inst_30393,null));
var state_30405__$1 = (function (){var statearr_30421 = state_30405;
(statearr_30421[(8)] = inst_30390__$1);

return statearr_30421;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30405__$1,(8),jobs,inst_30394);
} else {
if((state_val_30406 === (3))){
var inst_30403 = (state_30405[(2)]);
var state_30405__$1 = state_30405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30405__$1,inst_30403);
} else {
if((state_val_30406 === (2))){
var state_30405__$1 = state_30405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30405__$1,(4),from);
} else {
if((state_val_30406 === (9))){
var inst_30398 = (state_30405[(2)]);
var state_30405__$1 = (function (){var statearr_30427 = state_30405;
(statearr_30427[(9)] = inst_30398);

return statearr_30427;
})();
var statearr_30428_32600 = state_30405__$1;
(statearr_30428_32600[(2)] = null);

(statearr_30428_32600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (5))){
var inst_30388 = cljs.core.async.close_BANG_(jobs);
var state_30405__$1 = state_30405;
var statearr_30429_32603 = state_30405__$1;
(statearr_30429_32603[(2)] = inst_30388);

(statearr_30429_32603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (8))){
var inst_30390 = (state_30405[(8)]);
var inst_30396 = (state_30405[(2)]);
var state_30405__$1 = (function (){var statearr_30430 = state_30405;
(statearr_30430[(10)] = inst_30396);

return statearr_30430;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30405__$1,(9),results,inst_30390);
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
var cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____0 = (function (){
var statearr_30431 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30431[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__);

(statearr_30431[(1)] = (1));

return statearr_30431;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____1 = (function (state_30405){
while(true){
var ret_value__29587__auto__ = (function (){try{while(true){
var result__29588__auto__ = switch__29585__auto__(state_30405);
if(cljs.core.keyword_identical_QMARK_(result__29588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29588__auto__;
}
break;
}
}catch (e30432){if((e30432 instanceof Object)){
var ex__29589__auto__ = e30432;
var statearr_30433_32619 = state_30405;
(statearr_30433_32619[(5)] = ex__29589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30432;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32620 = state_30405;
state_30405 = G__32620;
continue;
} else {
return ret_value__29587__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__ = function(state_30405){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____1.call(this,state_30405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__;
})()
})();
var state__29791__auto__ = (function (){var statearr_30462 = (f__29790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29790__auto__.cljs$core$IFn$_invoke$arity$0() : f__29790__auto__.call(null));
(statearr_30462[(6)] = c__29789__auto___32588);

return statearr_30462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29791__auto__);
}));


var c__29789__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29790__auto__ = (function (){var switch__29585__auto__ = (function (state_30501){
var state_val_30502 = (state_30501[(1)]);
if((state_val_30502 === (7))){
var inst_30497 = (state_30501[(2)]);
var state_30501__$1 = state_30501;
var statearr_30503_32621 = state_30501__$1;
(statearr_30503_32621[(2)] = inst_30497);

(statearr_30503_32621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (20))){
var state_30501__$1 = state_30501;
var statearr_30504_32622 = state_30501__$1;
(statearr_30504_32622[(2)] = null);

(statearr_30504_32622[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (1))){
var state_30501__$1 = state_30501;
var statearr_30505_32623 = state_30501__$1;
(statearr_30505_32623[(2)] = null);

(statearr_30505_32623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (4))){
var inst_30465 = (state_30501[(7)]);
var inst_30465__$1 = (state_30501[(2)]);
var inst_30466 = (inst_30465__$1 == null);
var state_30501__$1 = (function (){var statearr_30506 = state_30501;
(statearr_30506[(7)] = inst_30465__$1);

return statearr_30506;
})();
if(cljs.core.truth_(inst_30466)){
var statearr_30508_32624 = state_30501__$1;
(statearr_30508_32624[(1)] = (5));

} else {
var statearr_30509_32625 = state_30501__$1;
(statearr_30509_32625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (15))){
var inst_30479 = (state_30501[(8)]);
var state_30501__$1 = state_30501;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30501__$1,(18),to,inst_30479);
} else {
if((state_val_30502 === (21))){
var inst_30492 = (state_30501[(2)]);
var state_30501__$1 = state_30501;
var statearr_30514_32645 = state_30501__$1;
(statearr_30514_32645[(2)] = inst_30492);

(statearr_30514_32645[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (13))){
var inst_30494 = (state_30501[(2)]);
var state_30501__$1 = (function (){var statearr_30515 = state_30501;
(statearr_30515[(9)] = inst_30494);

return statearr_30515;
})();
var statearr_30517_32646 = state_30501__$1;
(statearr_30517_32646[(2)] = null);

(statearr_30517_32646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (6))){
var inst_30465 = (state_30501[(7)]);
var state_30501__$1 = state_30501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30501__$1,(11),inst_30465);
} else {
if((state_val_30502 === (17))){
var inst_30487 = (state_30501[(2)]);
var state_30501__$1 = state_30501;
if(cljs.core.truth_(inst_30487)){
var statearr_30520_32647 = state_30501__$1;
(statearr_30520_32647[(1)] = (19));

} else {
var statearr_30521_32651 = state_30501__$1;
(statearr_30521_32651[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (3))){
var inst_30499 = (state_30501[(2)]);
var state_30501__$1 = state_30501;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30501__$1,inst_30499);
} else {
if((state_val_30502 === (12))){
var inst_30476 = (state_30501[(10)]);
var state_30501__$1 = state_30501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30501__$1,(14),inst_30476);
} else {
if((state_val_30502 === (2))){
var state_30501__$1 = state_30501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30501__$1,(4),results);
} else {
if((state_val_30502 === (19))){
var state_30501__$1 = state_30501;
var statearr_30522_32652 = state_30501__$1;
(statearr_30522_32652[(2)] = null);

(statearr_30522_32652[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (11))){
var inst_30476 = (state_30501[(2)]);
var state_30501__$1 = (function (){var statearr_30523 = state_30501;
(statearr_30523[(10)] = inst_30476);

return statearr_30523;
})();
var statearr_30524_32656 = state_30501__$1;
(statearr_30524_32656[(2)] = null);

(statearr_30524_32656[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (9))){
var state_30501__$1 = state_30501;
var statearr_30525_32657 = state_30501__$1;
(statearr_30525_32657[(2)] = null);

(statearr_30525_32657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (5))){
var state_30501__$1 = state_30501;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30526_32662 = state_30501__$1;
(statearr_30526_32662[(1)] = (8));

} else {
var statearr_30527_32666 = state_30501__$1;
(statearr_30527_32666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (14))){
var inst_30479 = (state_30501[(8)]);
var inst_30479__$1 = (state_30501[(2)]);
var inst_30480 = (inst_30479__$1 == null);
var inst_30481 = cljs.core.not(inst_30480);
var state_30501__$1 = (function (){var statearr_30528 = state_30501;
(statearr_30528[(8)] = inst_30479__$1);

return statearr_30528;
})();
if(inst_30481){
var statearr_30529_32667 = state_30501__$1;
(statearr_30529_32667[(1)] = (15));

} else {
var statearr_30530_32668 = state_30501__$1;
(statearr_30530_32668[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (16))){
var state_30501__$1 = state_30501;
var statearr_30531_32669 = state_30501__$1;
(statearr_30531_32669[(2)] = false);

(statearr_30531_32669[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (10))){
var inst_30473 = (state_30501[(2)]);
var state_30501__$1 = state_30501;
var statearr_30532_32673 = state_30501__$1;
(statearr_30532_32673[(2)] = inst_30473);

(statearr_30532_32673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (18))){
var inst_30484 = (state_30501[(2)]);
var state_30501__$1 = state_30501;
var statearr_30533_32677 = state_30501__$1;
(statearr_30533_32677[(2)] = inst_30484);

(statearr_30533_32677[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (8))){
var inst_30469 = cljs.core.async.close_BANG_(to);
var state_30501__$1 = state_30501;
var statearr_30534_32678 = state_30501__$1;
(statearr_30534_32678[(2)] = inst_30469);

(statearr_30534_32678[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____0 = (function (){
var statearr_30535 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30535[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__);

(statearr_30535[(1)] = (1));

return statearr_30535;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____1 = (function (state_30501){
while(true){
var ret_value__29587__auto__ = (function (){try{while(true){
var result__29588__auto__ = switch__29585__auto__(state_30501);
if(cljs.core.keyword_identical_QMARK_(result__29588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29588__auto__;
}
break;
}
}catch (e30536){if((e30536 instanceof Object)){
var ex__29589__auto__ = e30536;
var statearr_30537_32682 = state_30501;
(statearr_30537_32682[(5)] = ex__29589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30536;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32683 = state_30501;
state_30501 = G__32683;
continue;
} else {
return ret_value__29587__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__ = function(state_30501){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____1.call(this,state_30501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29586__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29586__auto__;
})()
})();
var state__29791__auto__ = (function (){var statearr_30538 = (f__29790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29790__auto__.cljs$core$IFn$_invoke$arity$0() : f__29790__auto__.call(null));
(statearr_30538[(6)] = c__29789__auto__);

return statearr_30538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29791__auto__);
}));

return c__29789__auto__;
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
var G__30540 = arguments.length;
switch (G__30540) {
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
var G__30545 = arguments.length;
switch (G__30545) {
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
var G__30571 = arguments.length;
switch (G__30571) {
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
var c__29789__auto___32703 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29790__auto__ = (function (){var switch__29585__auto__ = (function (state_30613){
var state_val_30614 = (state_30613[(1)]);
if((state_val_30614 === (7))){
var inst_30609 = (state_30613[(2)]);
var state_30613__$1 = state_30613;
var statearr_30618_32704 = state_30613__$1;
(statearr_30618_32704[(2)] = inst_30609);

(statearr_30618_32704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (1))){
var state_30613__$1 = state_30613;
var statearr_30622_32705 = state_30613__$1;
(statearr_30622_32705[(2)] = null);

(statearr_30622_32705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (4))){
var inst_30586 = (state_30613[(7)]);
var inst_30586__$1 = (state_30613[(2)]);
var inst_30591 = (inst_30586__$1 == null);
var state_30613__$1 = (function (){var statearr_30623 = state_30613;
(statearr_30623[(7)] = inst_30586__$1);

return statearr_30623;
})();
if(cljs.core.truth_(inst_30591)){
var statearr_30624_32706 = state_30613__$1;
(statearr_30624_32706[(1)] = (5));

} else {
var statearr_30625_32707 = state_30613__$1;
(statearr_30625_32707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (13))){
var state_30613__$1 = state_30613;
var statearr_30629_32708 = state_30613__$1;
(statearr_30629_32708[(2)] = null);

(statearr_30629_32708[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (6))){
var inst_30586 = (state_30613[(7)]);
var inst_30596 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30586) : p.call(null,inst_30586));
var state_30613__$1 = state_30613;
if(cljs.core.truth_(inst_30596)){
var statearr_30634_32709 = state_30613__$1;
(statearr_30634_32709[(1)] = (9));

} else {
var statearr_30635_32710 = state_30613__$1;
(statearr_30635_32710[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (3))){
var inst_30611 = (state_30613[(2)]);
var state_30613__$1 = state_30613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30613__$1,inst_30611);
} else {
if((state_val_30614 === (12))){
var state_30613__$1 = state_30613;
var statearr_30636_32711 = state_30613__$1;
(statearr_30636_32711[(2)] = null);

(statearr_30636_32711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (2))){
var state_30613__$1 = state_30613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30613__$1,(4),ch);
} else {
if((state_val_30614 === (11))){
var inst_30586 = (state_30613[(7)]);
var inst_30600 = (state_30613[(2)]);
var state_30613__$1 = state_30613;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30613__$1,(8),inst_30600,inst_30586);
} else {
if((state_val_30614 === (9))){
var state_30613__$1 = state_30613;
var statearr_30639_32712 = state_30613__$1;
(statearr_30639_32712[(2)] = tc);

(statearr_30639_32712[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (5))){
var inst_30593 = cljs.core.async.close_BANG_(tc);
var inst_30594 = cljs.core.async.close_BANG_(fc);
var state_30613__$1 = (function (){var statearr_30641 = state_30613;
(statearr_30641[(8)] = inst_30593);

return statearr_30641;
})();
var statearr_30642_32713 = state_30613__$1;
(statearr_30642_32713[(2)] = inst_30594);

(statearr_30642_32713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (14))){
var inst_30607 = (state_30613[(2)]);
var state_30613__$1 = state_30613;
var statearr_30643_32714 = state_30613__$1;
(statearr_30643_32714[(2)] = inst_30607);

(statearr_30643_32714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (10))){
var state_30613__$1 = state_30613;
var statearr_30647_32715 = state_30613__$1;
(statearr_30647_32715[(2)] = fc);

(statearr_30647_32715[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (8))){
var inst_30602 = (state_30613[(2)]);
var state_30613__$1 = state_30613;
if(cljs.core.truth_(inst_30602)){
var statearr_30648_32716 = state_30613__$1;
(statearr_30648_32716[(1)] = (12));

} else {
var statearr_30649_32717 = state_30613__$1;
(statearr_30649_32717[(1)] = (13));

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
var cljs$core$async$state_machine__29586__auto__ = null;
var cljs$core$async$state_machine__29586__auto____0 = (function (){
var statearr_30653 = [null,null,null,null,null,null,null,null,null];
(statearr_30653[(0)] = cljs$core$async$state_machine__29586__auto__);

(statearr_30653[(1)] = (1));

return statearr_30653;
});
var cljs$core$async$state_machine__29586__auto____1 = (function (state_30613){
while(true){
var ret_value__29587__auto__ = (function (){try{while(true){
var result__29588__auto__ = switch__29585__auto__(state_30613);
if(cljs.core.keyword_identical_QMARK_(result__29588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29588__auto__;
}
break;
}
}catch (e30654){if((e30654 instanceof Object)){
var ex__29589__auto__ = e30654;
var statearr_30655_32718 = state_30613;
(statearr_30655_32718[(5)] = ex__29589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30654;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32719 = state_30613;
state_30613 = G__32719;
continue;
} else {
return ret_value__29587__auto__;
}
break;
}
});
cljs$core$async$state_machine__29586__auto__ = function(state_30613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29586__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29586__auto____1.call(this,state_30613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29586__auto____0;
cljs$core$async$state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29586__auto____1;
return cljs$core$async$state_machine__29586__auto__;
})()
})();
var state__29791__auto__ = (function (){var statearr_30656 = (f__29790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29790__auto__.cljs$core$IFn$_invoke$arity$0() : f__29790__auto__.call(null));
(statearr_30656[(6)] = c__29789__auto___32703);

return statearr_30656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29791__auto__);
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
var c__29789__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29790__auto__ = (function (){var switch__29585__auto__ = (function (state_30685){
var state_val_30686 = (state_30685[(1)]);
if((state_val_30686 === (7))){
var inst_30681 = (state_30685[(2)]);
var state_30685__$1 = state_30685;
var statearr_30700_32720 = state_30685__$1;
(statearr_30700_32720[(2)] = inst_30681);

(statearr_30700_32720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (1))){
var inst_30661 = init;
var state_30685__$1 = (function (){var statearr_30704 = state_30685;
(statearr_30704[(7)] = inst_30661);

return statearr_30704;
})();
var statearr_30705_32727 = state_30685__$1;
(statearr_30705_32727[(2)] = null);

(statearr_30705_32727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (4))){
var inst_30664 = (state_30685[(8)]);
var inst_30664__$1 = (state_30685[(2)]);
var inst_30665 = (inst_30664__$1 == null);
var state_30685__$1 = (function (){var statearr_30709 = state_30685;
(statearr_30709[(8)] = inst_30664__$1);

return statearr_30709;
})();
if(cljs.core.truth_(inst_30665)){
var statearr_30710_32731 = state_30685__$1;
(statearr_30710_32731[(1)] = (5));

} else {
var statearr_30711_32732 = state_30685__$1;
(statearr_30711_32732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (6))){
var inst_30661 = (state_30685[(7)]);
var inst_30671 = (state_30685[(9)]);
var inst_30664 = (state_30685[(8)]);
var inst_30671__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30661,inst_30664) : f.call(null,inst_30661,inst_30664));
var inst_30673 = cljs.core.reduced_QMARK_(inst_30671__$1);
var state_30685__$1 = (function (){var statearr_30726 = state_30685;
(statearr_30726[(9)] = inst_30671__$1);

return statearr_30726;
})();
if(inst_30673){
var statearr_30728_32736 = state_30685__$1;
(statearr_30728_32736[(1)] = (8));

} else {
var statearr_30729_32737 = state_30685__$1;
(statearr_30729_32737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (3))){
var inst_30683 = (state_30685[(2)]);
var state_30685__$1 = state_30685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30685__$1,inst_30683);
} else {
if((state_val_30686 === (2))){
var state_30685__$1 = state_30685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30685__$1,(4),ch);
} else {
if((state_val_30686 === (9))){
var inst_30671 = (state_30685[(9)]);
var inst_30661 = inst_30671;
var state_30685__$1 = (function (){var statearr_30742 = state_30685;
(statearr_30742[(7)] = inst_30661);

return statearr_30742;
})();
var statearr_30743_32738 = state_30685__$1;
(statearr_30743_32738[(2)] = null);

(statearr_30743_32738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (5))){
var inst_30661 = (state_30685[(7)]);
var state_30685__$1 = state_30685;
var statearr_30747_32739 = state_30685__$1;
(statearr_30747_32739[(2)] = inst_30661);

(statearr_30747_32739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (10))){
var inst_30679 = (state_30685[(2)]);
var state_30685__$1 = state_30685;
var statearr_30760_32741 = state_30685__$1;
(statearr_30760_32741[(2)] = inst_30679);

(statearr_30760_32741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (8))){
var inst_30671 = (state_30685[(9)]);
var inst_30675 = cljs.core.deref(inst_30671);
var state_30685__$1 = state_30685;
var statearr_30764_32742 = state_30685__$1;
(statearr_30764_32742[(2)] = inst_30675);

(statearr_30764_32742[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__29586__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29586__auto____0 = (function (){
var statearr_30769 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30769[(0)] = cljs$core$async$reduce_$_state_machine__29586__auto__);

(statearr_30769[(1)] = (1));

return statearr_30769;
});
var cljs$core$async$reduce_$_state_machine__29586__auto____1 = (function (state_30685){
while(true){
var ret_value__29587__auto__ = (function (){try{while(true){
var result__29588__auto__ = switch__29585__auto__(state_30685);
if(cljs.core.keyword_identical_QMARK_(result__29588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29588__auto__;
}
break;
}
}catch (e30772){if((e30772 instanceof Object)){
var ex__29589__auto__ = e30772;
var statearr_30773_32743 = state_30685;
(statearr_30773_32743[(5)] = ex__29589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30772;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32744 = state_30685;
state_30685 = G__32744;
continue;
} else {
return ret_value__29587__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29586__auto__ = function(state_30685){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29586__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29586__auto____1.call(this,state_30685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29586__auto____0;
cljs$core$async$reduce_$_state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29586__auto____1;
return cljs$core$async$reduce_$_state_machine__29586__auto__;
})()
})();
var state__29791__auto__ = (function (){var statearr_30774 = (f__29790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29790__auto__.cljs$core$IFn$_invoke$arity$0() : f__29790__auto__.call(null));
(statearr_30774[(6)] = c__29789__auto__);

return statearr_30774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29791__auto__);
}));

return c__29789__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29789__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29790__auto__ = (function (){var switch__29585__auto__ = (function (state_30786){
var state_val_30787 = (state_30786[(1)]);
if((state_val_30787 === (1))){
var inst_30781 = cljs.core.async.reduce(f__$1,init,ch);
var state_30786__$1 = state_30786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30786__$1,(2),inst_30781);
} else {
if((state_val_30787 === (2))){
var inst_30783 = (state_30786[(2)]);
var inst_30784 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30783) : f__$1.call(null,inst_30783));
var state_30786__$1 = state_30786;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30786__$1,inst_30784);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29586__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29586__auto____0 = (function (){
var statearr_30809 = [null,null,null,null,null,null,null];
(statearr_30809[(0)] = cljs$core$async$transduce_$_state_machine__29586__auto__);

(statearr_30809[(1)] = (1));

return statearr_30809;
});
var cljs$core$async$transduce_$_state_machine__29586__auto____1 = (function (state_30786){
while(true){
var ret_value__29587__auto__ = (function (){try{while(true){
var result__29588__auto__ = switch__29585__auto__(state_30786);
if(cljs.core.keyword_identical_QMARK_(result__29588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29588__auto__;
}
break;
}
}catch (e30810){if((e30810 instanceof Object)){
var ex__29589__auto__ = e30810;
var statearr_30811_32745 = state_30786;
(statearr_30811_32745[(5)] = ex__29589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30810;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32746 = state_30786;
state_30786 = G__32746;
continue;
} else {
return ret_value__29587__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29586__auto__ = function(state_30786){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29586__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29586__auto____1.call(this,state_30786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29586__auto____0;
cljs$core$async$transduce_$_state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29586__auto____1;
return cljs$core$async$transduce_$_state_machine__29586__auto__;
})()
})();
var state__29791__auto__ = (function (){var statearr_30819 = (f__29790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29790__auto__.cljs$core$IFn$_invoke$arity$0() : f__29790__auto__.call(null));
(statearr_30819[(6)] = c__29789__auto__);

return statearr_30819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29791__auto__);
}));

return c__29789__auto__;
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
var G__30831 = arguments.length;
switch (G__30831) {
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
var c__29789__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29790__auto__ = (function (){var switch__29585__auto__ = (function (state_30869){
var state_val_30870 = (state_30869[(1)]);
if((state_val_30870 === (7))){
var inst_30851 = (state_30869[(2)]);
var state_30869__$1 = state_30869;
var statearr_30877_32750 = state_30869__$1;
(statearr_30877_32750[(2)] = inst_30851);

(statearr_30877_32750[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30870 === (1))){
var inst_30832 = cljs.core.seq(coll);
var inst_30833 = inst_30832;
var state_30869__$1 = (function (){var statearr_30878 = state_30869;
(statearr_30878[(7)] = inst_30833);

return statearr_30878;
})();
var statearr_30879_32751 = state_30869__$1;
(statearr_30879_32751[(2)] = null);

(statearr_30879_32751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30870 === (4))){
var inst_30833 = (state_30869[(7)]);
var inst_30849 = cljs.core.first(inst_30833);
var state_30869__$1 = state_30869;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30869__$1,(7),ch,inst_30849);
} else {
if((state_val_30870 === (13))){
var inst_30863 = (state_30869[(2)]);
var state_30869__$1 = state_30869;
var statearr_30901_32752 = state_30869__$1;
(statearr_30901_32752[(2)] = inst_30863);

(statearr_30901_32752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30870 === (6))){
var inst_30854 = (state_30869[(2)]);
var state_30869__$1 = state_30869;
if(cljs.core.truth_(inst_30854)){
var statearr_30902_32753 = state_30869__$1;
(statearr_30902_32753[(1)] = (8));

} else {
var statearr_30906_32754 = state_30869__$1;
(statearr_30906_32754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30870 === (3))){
var inst_30867 = (state_30869[(2)]);
var state_30869__$1 = state_30869;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30869__$1,inst_30867);
} else {
if((state_val_30870 === (12))){
var state_30869__$1 = state_30869;
var statearr_30910_32755 = state_30869__$1;
(statearr_30910_32755[(2)] = null);

(statearr_30910_32755[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30870 === (2))){
var inst_30833 = (state_30869[(7)]);
var state_30869__$1 = state_30869;
if(cljs.core.truth_(inst_30833)){
var statearr_30911_32756 = state_30869__$1;
(statearr_30911_32756[(1)] = (4));

} else {
var statearr_30912_32757 = state_30869__$1;
(statearr_30912_32757[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30870 === (11))){
var inst_30860 = cljs.core.async.close_BANG_(ch);
var state_30869__$1 = state_30869;
var statearr_30913_32758 = state_30869__$1;
(statearr_30913_32758[(2)] = inst_30860);

(statearr_30913_32758[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30870 === (9))){
var state_30869__$1 = state_30869;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30914_32759 = state_30869__$1;
(statearr_30914_32759[(1)] = (11));

} else {
var statearr_30915_32760 = state_30869__$1;
(statearr_30915_32760[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30870 === (5))){
var inst_30833 = (state_30869[(7)]);
var state_30869__$1 = state_30869;
var statearr_30916_32761 = state_30869__$1;
(statearr_30916_32761[(2)] = inst_30833);

(statearr_30916_32761[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30870 === (10))){
var inst_30865 = (state_30869[(2)]);
var state_30869__$1 = state_30869;
var statearr_30917_32762 = state_30869__$1;
(statearr_30917_32762[(2)] = inst_30865);

(statearr_30917_32762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30870 === (8))){
var inst_30833 = (state_30869[(7)]);
var inst_30856 = cljs.core.next(inst_30833);
var inst_30833__$1 = inst_30856;
var state_30869__$1 = (function (){var statearr_30919 = state_30869;
(statearr_30919[(7)] = inst_30833__$1);

return statearr_30919;
})();
var statearr_30920_32765 = state_30869__$1;
(statearr_30920_32765[(2)] = null);

(statearr_30920_32765[(1)] = (2));


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
var cljs$core$async$state_machine__29586__auto__ = null;
var cljs$core$async$state_machine__29586__auto____0 = (function (){
var statearr_30921 = [null,null,null,null,null,null,null,null];
(statearr_30921[(0)] = cljs$core$async$state_machine__29586__auto__);

(statearr_30921[(1)] = (1));

return statearr_30921;
});
var cljs$core$async$state_machine__29586__auto____1 = (function (state_30869){
while(true){
var ret_value__29587__auto__ = (function (){try{while(true){
var result__29588__auto__ = switch__29585__auto__(state_30869);
if(cljs.core.keyword_identical_QMARK_(result__29588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29588__auto__;
}
break;
}
}catch (e30922){if((e30922 instanceof Object)){
var ex__29589__auto__ = e30922;
var statearr_30923_32767 = state_30869;
(statearr_30923_32767[(5)] = ex__29589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30922;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32807 = state_30869;
state_30869 = G__32807;
continue;
} else {
return ret_value__29587__auto__;
}
break;
}
});
cljs$core$async$state_machine__29586__auto__ = function(state_30869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29586__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29586__auto____1.call(this,state_30869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29586__auto____0;
cljs$core$async$state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29586__auto____1;
return cljs$core$async$state_machine__29586__auto__;
})()
})();
var state__29791__auto__ = (function (){var statearr_30927 = (f__29790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29790__auto__.cljs$core$IFn$_invoke$arity$0() : f__29790__auto__.call(null));
(statearr_30927[(6)] = c__29789__auto__);

return statearr_30927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29791__auto__);
}));

return c__29789__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31014 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31014 = (function (ch,cs,meta31015){
this.ch = ch;
this.cs = cs;
this.meta31015 = meta31015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31016,meta31015__$1){
var self__ = this;
var _31016__$1 = this;
return (new cljs.core.async.t_cljs$core$async31014(self__.ch,self__.cs,meta31015__$1));
}));

(cljs.core.async.t_cljs$core$async31014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31016){
var self__ = this;
var _31016__$1 = this;
return self__.meta31015;
}));

(cljs.core.async.t_cljs$core$async31014.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31014.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31014.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31014.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31014.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31014.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31015","meta31015",-1670462585,null)], null);
}));

(cljs.core.async.t_cljs$core$async31014.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31014");

(cljs.core.async.t_cljs$core$async31014.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31014");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31014.
 */
cljs.core.async.__GT_t_cljs$core$async31014 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31014(ch__$1,cs__$1,meta31015){
return (new cljs.core.async.t_cljs$core$async31014(ch__$1,cs__$1,meta31015));
});

}

return (new cljs.core.async.t_cljs$core$async31014(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29789__auto___32814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29790__auto__ = (function (){var switch__29585__auto__ = (function (state_31172){
var state_val_31173 = (state_31172[(1)]);
if((state_val_31173 === (7))){
var inst_31164 = (state_31172[(2)]);
var state_31172__$1 = state_31172;
var statearr_31178_32815 = state_31172__$1;
(statearr_31178_32815[(2)] = inst_31164);

(statearr_31178_32815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (20))){
var inst_31054 = (state_31172[(7)]);
var inst_31070 = cljs.core.first(inst_31054);
var inst_31071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31070,(0),null);
var inst_31072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31070,(1),null);
var state_31172__$1 = (function (){var statearr_31179 = state_31172;
(statearr_31179[(8)] = inst_31071);

return statearr_31179;
})();
if(cljs.core.truth_(inst_31072)){
var statearr_31180_32816 = state_31172__$1;
(statearr_31180_32816[(1)] = (22));

} else {
var statearr_31181_32817 = state_31172__$1;
(statearr_31181_32817[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (27))){
var inst_31103 = (state_31172[(9)]);
var inst_31101 = (state_31172[(10)]);
var inst_31108 = (state_31172[(11)]);
var inst_31019 = (state_31172[(12)]);
var inst_31108__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31101,inst_31103);
var inst_31109 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31108__$1,inst_31019,done);
var state_31172__$1 = (function (){var statearr_31182 = state_31172;
(statearr_31182[(11)] = inst_31108__$1);

return statearr_31182;
})();
if(cljs.core.truth_(inst_31109)){
var statearr_31183_32818 = state_31172__$1;
(statearr_31183_32818[(1)] = (30));

} else {
var statearr_31184_32819 = state_31172__$1;
(statearr_31184_32819[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (1))){
var state_31172__$1 = state_31172;
var statearr_31185_32821 = state_31172__$1;
(statearr_31185_32821[(2)] = null);

(statearr_31185_32821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (24))){
var inst_31054 = (state_31172[(7)]);
var inst_31077 = (state_31172[(2)]);
var inst_31078 = cljs.core.next(inst_31054);
var inst_31028 = inst_31078;
var inst_31029 = null;
var inst_31030 = (0);
var inst_31031 = (0);
var state_31172__$1 = (function (){var statearr_31186 = state_31172;
(statearr_31186[(13)] = inst_31030);

(statearr_31186[(14)] = inst_31077);

(statearr_31186[(15)] = inst_31031);

(statearr_31186[(16)] = inst_31028);

(statearr_31186[(17)] = inst_31029);

return statearr_31186;
})();
var statearr_31187_32823 = state_31172__$1;
(statearr_31187_32823[(2)] = null);

(statearr_31187_32823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (39))){
var state_31172__$1 = state_31172;
var statearr_31191_32824 = state_31172__$1;
(statearr_31191_32824[(2)] = null);

(statearr_31191_32824[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (4))){
var inst_31019 = (state_31172[(12)]);
var inst_31019__$1 = (state_31172[(2)]);
var inst_31020 = (inst_31019__$1 == null);
var state_31172__$1 = (function (){var statearr_31194 = state_31172;
(statearr_31194[(12)] = inst_31019__$1);

return statearr_31194;
})();
if(cljs.core.truth_(inst_31020)){
var statearr_31195_32829 = state_31172__$1;
(statearr_31195_32829[(1)] = (5));

} else {
var statearr_31196_32830 = state_31172__$1;
(statearr_31196_32830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (15))){
var inst_31030 = (state_31172[(13)]);
var inst_31031 = (state_31172[(15)]);
var inst_31028 = (state_31172[(16)]);
var inst_31029 = (state_31172[(17)]);
var inst_31050 = (state_31172[(2)]);
var inst_31051 = (inst_31031 + (1));
var tmp31188 = inst_31030;
var tmp31189 = inst_31028;
var tmp31190 = inst_31029;
var inst_31028__$1 = tmp31189;
var inst_31029__$1 = tmp31190;
var inst_31030__$1 = tmp31188;
var inst_31031__$1 = inst_31051;
var state_31172__$1 = (function (){var statearr_31197 = state_31172;
(statearr_31197[(18)] = inst_31050);

(statearr_31197[(13)] = inst_31030__$1);

(statearr_31197[(15)] = inst_31031__$1);

(statearr_31197[(16)] = inst_31028__$1);

(statearr_31197[(17)] = inst_31029__$1);

return statearr_31197;
})();
var statearr_31198_32831 = state_31172__$1;
(statearr_31198_32831[(2)] = null);

(statearr_31198_32831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (21))){
var inst_31081 = (state_31172[(2)]);
var state_31172__$1 = state_31172;
var statearr_31202_32832 = state_31172__$1;
(statearr_31202_32832[(2)] = inst_31081);

(statearr_31202_32832[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (31))){
var inst_31108 = (state_31172[(11)]);
var inst_31112 = done(null);
var inst_31113 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31108);
var state_31172__$1 = (function (){var statearr_31203 = state_31172;
(statearr_31203[(19)] = inst_31112);

return statearr_31203;
})();
var statearr_31204_32833 = state_31172__$1;
(statearr_31204_32833[(2)] = inst_31113);

(statearr_31204_32833[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (32))){
var inst_31103 = (state_31172[(9)]);
var inst_31102 = (state_31172[(20)]);
var inst_31101 = (state_31172[(10)]);
var inst_31100 = (state_31172[(21)]);
var inst_31115 = (state_31172[(2)]);
var inst_31116 = (inst_31103 + (1));
var tmp31199 = inst_31102;
var tmp31200 = inst_31101;
var tmp31201 = inst_31100;
var inst_31100__$1 = tmp31201;
var inst_31101__$1 = tmp31200;
var inst_31102__$1 = tmp31199;
var inst_31103__$1 = inst_31116;
var state_31172__$1 = (function (){var statearr_31205 = state_31172;
(statearr_31205[(22)] = inst_31115);

(statearr_31205[(9)] = inst_31103__$1);

(statearr_31205[(20)] = inst_31102__$1);

(statearr_31205[(10)] = inst_31101__$1);

(statearr_31205[(21)] = inst_31100__$1);

return statearr_31205;
})();
var statearr_31206_32834 = state_31172__$1;
(statearr_31206_32834[(2)] = null);

(statearr_31206_32834[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (40))){
var inst_31133 = (state_31172[(23)]);
var inst_31137 = done(null);
var inst_31138 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31133);
var state_31172__$1 = (function (){var statearr_31207 = state_31172;
(statearr_31207[(24)] = inst_31137);

return statearr_31207;
})();
var statearr_31208_32835 = state_31172__$1;
(statearr_31208_32835[(2)] = inst_31138);

(statearr_31208_32835[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (33))){
var inst_31121 = (state_31172[(25)]);
var inst_31126 = cljs.core.chunked_seq_QMARK_(inst_31121);
var state_31172__$1 = state_31172;
if(inst_31126){
var statearr_31209_32836 = state_31172__$1;
(statearr_31209_32836[(1)] = (36));

} else {
var statearr_31210_32837 = state_31172__$1;
(statearr_31210_32837[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (13))){
var inst_31044 = (state_31172[(26)]);
var inst_31047 = cljs.core.async.close_BANG_(inst_31044);
var state_31172__$1 = state_31172;
var statearr_31211_32838 = state_31172__$1;
(statearr_31211_32838[(2)] = inst_31047);

(statearr_31211_32838[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (22))){
var inst_31071 = (state_31172[(8)]);
var inst_31074 = cljs.core.async.close_BANG_(inst_31071);
var state_31172__$1 = state_31172;
var statearr_31212_32839 = state_31172__$1;
(statearr_31212_32839[(2)] = inst_31074);

(statearr_31212_32839[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (36))){
var inst_31121 = (state_31172[(25)]);
var inst_31128 = cljs.core.chunk_first(inst_31121);
var inst_31129 = cljs.core.chunk_rest(inst_31121);
var inst_31130 = cljs.core.count(inst_31128);
var inst_31100 = inst_31129;
var inst_31101 = inst_31128;
var inst_31102 = inst_31130;
var inst_31103 = (0);
var state_31172__$1 = (function (){var statearr_31213 = state_31172;
(statearr_31213[(9)] = inst_31103);

(statearr_31213[(20)] = inst_31102);

(statearr_31213[(10)] = inst_31101);

(statearr_31213[(21)] = inst_31100);

return statearr_31213;
})();
var statearr_31214_32840 = state_31172__$1;
(statearr_31214_32840[(2)] = null);

(statearr_31214_32840[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (41))){
var inst_31121 = (state_31172[(25)]);
var inst_31140 = (state_31172[(2)]);
var inst_31141 = cljs.core.next(inst_31121);
var inst_31100 = inst_31141;
var inst_31101 = null;
var inst_31102 = (0);
var inst_31103 = (0);
var state_31172__$1 = (function (){var statearr_31215 = state_31172;
(statearr_31215[(27)] = inst_31140);

(statearr_31215[(9)] = inst_31103);

(statearr_31215[(20)] = inst_31102);

(statearr_31215[(10)] = inst_31101);

(statearr_31215[(21)] = inst_31100);

return statearr_31215;
})();
var statearr_31216_32841 = state_31172__$1;
(statearr_31216_32841[(2)] = null);

(statearr_31216_32841[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (43))){
var state_31172__$1 = state_31172;
var statearr_31217_32842 = state_31172__$1;
(statearr_31217_32842[(2)] = null);

(statearr_31217_32842[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (29))){
var inst_31149 = (state_31172[(2)]);
var state_31172__$1 = state_31172;
var statearr_31218_32843 = state_31172__$1;
(statearr_31218_32843[(2)] = inst_31149);

(statearr_31218_32843[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (44))){
var inst_31161 = (state_31172[(2)]);
var state_31172__$1 = (function (){var statearr_31219 = state_31172;
(statearr_31219[(28)] = inst_31161);

return statearr_31219;
})();
var statearr_31220_32844 = state_31172__$1;
(statearr_31220_32844[(2)] = null);

(statearr_31220_32844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (6))){
var inst_31092 = (state_31172[(29)]);
var inst_31091 = cljs.core.deref(cs);
var inst_31092__$1 = cljs.core.keys(inst_31091);
var inst_31093 = cljs.core.count(inst_31092__$1);
var inst_31094 = cljs.core.reset_BANG_(dctr,inst_31093);
var inst_31099 = cljs.core.seq(inst_31092__$1);
var inst_31100 = inst_31099;
var inst_31101 = null;
var inst_31102 = (0);
var inst_31103 = (0);
var state_31172__$1 = (function (){var statearr_31260 = state_31172;
(statearr_31260[(29)] = inst_31092__$1);

(statearr_31260[(9)] = inst_31103);

(statearr_31260[(20)] = inst_31102);

(statearr_31260[(10)] = inst_31101);

(statearr_31260[(30)] = inst_31094);

(statearr_31260[(21)] = inst_31100);

return statearr_31260;
})();
var statearr_31261_32845 = state_31172__$1;
(statearr_31261_32845[(2)] = null);

(statearr_31261_32845[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (28))){
var inst_31121 = (state_31172[(25)]);
var inst_31100 = (state_31172[(21)]);
var inst_31121__$1 = cljs.core.seq(inst_31100);
var state_31172__$1 = (function (){var statearr_31262 = state_31172;
(statearr_31262[(25)] = inst_31121__$1);

return statearr_31262;
})();
if(inst_31121__$1){
var statearr_31264_32846 = state_31172__$1;
(statearr_31264_32846[(1)] = (33));

} else {
var statearr_31265_32847 = state_31172__$1;
(statearr_31265_32847[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (25))){
var inst_31103 = (state_31172[(9)]);
var inst_31102 = (state_31172[(20)]);
var inst_31105 = (inst_31103 < inst_31102);
var inst_31106 = inst_31105;
var state_31172__$1 = state_31172;
if(cljs.core.truth_(inst_31106)){
var statearr_31266_32848 = state_31172__$1;
(statearr_31266_32848[(1)] = (27));

} else {
var statearr_31267_32849 = state_31172__$1;
(statearr_31267_32849[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (34))){
var state_31172__$1 = state_31172;
var statearr_31268_32850 = state_31172__$1;
(statearr_31268_32850[(2)] = null);

(statearr_31268_32850[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (17))){
var state_31172__$1 = state_31172;
var statearr_31269_32851 = state_31172__$1;
(statearr_31269_32851[(2)] = null);

(statearr_31269_32851[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (3))){
var inst_31166 = (state_31172[(2)]);
var state_31172__$1 = state_31172;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31172__$1,inst_31166);
} else {
if((state_val_31173 === (12))){
var inst_31086 = (state_31172[(2)]);
var state_31172__$1 = state_31172;
var statearr_31270_32852 = state_31172__$1;
(statearr_31270_32852[(2)] = inst_31086);

(statearr_31270_32852[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (2))){
var state_31172__$1 = state_31172;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31172__$1,(4),ch);
} else {
if((state_val_31173 === (23))){
var state_31172__$1 = state_31172;
var statearr_31272_32853 = state_31172__$1;
(statearr_31272_32853[(2)] = null);

(statearr_31272_32853[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (35))){
var inst_31147 = (state_31172[(2)]);
var state_31172__$1 = state_31172;
var statearr_31273_32854 = state_31172__$1;
(statearr_31273_32854[(2)] = inst_31147);

(statearr_31273_32854[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (19))){
var inst_31054 = (state_31172[(7)]);
var inst_31062 = cljs.core.chunk_first(inst_31054);
var inst_31063 = cljs.core.chunk_rest(inst_31054);
var inst_31064 = cljs.core.count(inst_31062);
var inst_31028 = inst_31063;
var inst_31029 = inst_31062;
var inst_31030 = inst_31064;
var inst_31031 = (0);
var state_31172__$1 = (function (){var statearr_31277 = state_31172;
(statearr_31277[(13)] = inst_31030);

(statearr_31277[(15)] = inst_31031);

(statearr_31277[(16)] = inst_31028);

(statearr_31277[(17)] = inst_31029);

return statearr_31277;
})();
var statearr_31278_32857 = state_31172__$1;
(statearr_31278_32857[(2)] = null);

(statearr_31278_32857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (11))){
var inst_31028 = (state_31172[(16)]);
var inst_31054 = (state_31172[(7)]);
var inst_31054__$1 = cljs.core.seq(inst_31028);
var state_31172__$1 = (function (){var statearr_31279 = state_31172;
(statearr_31279[(7)] = inst_31054__$1);

return statearr_31279;
})();
if(inst_31054__$1){
var statearr_31280_32858 = state_31172__$1;
(statearr_31280_32858[(1)] = (16));

} else {
var statearr_31283_32859 = state_31172__$1;
(statearr_31283_32859[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (9))){
var inst_31088 = (state_31172[(2)]);
var state_31172__$1 = state_31172;
var statearr_31284_32860 = state_31172__$1;
(statearr_31284_32860[(2)] = inst_31088);

(statearr_31284_32860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (5))){
var inst_31026 = cljs.core.deref(cs);
var inst_31027 = cljs.core.seq(inst_31026);
var inst_31028 = inst_31027;
var inst_31029 = null;
var inst_31030 = (0);
var inst_31031 = (0);
var state_31172__$1 = (function (){var statearr_31285 = state_31172;
(statearr_31285[(13)] = inst_31030);

(statearr_31285[(15)] = inst_31031);

(statearr_31285[(16)] = inst_31028);

(statearr_31285[(17)] = inst_31029);

return statearr_31285;
})();
var statearr_31289_32862 = state_31172__$1;
(statearr_31289_32862[(2)] = null);

(statearr_31289_32862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (14))){
var state_31172__$1 = state_31172;
var statearr_31290_32864 = state_31172__$1;
(statearr_31290_32864[(2)] = null);

(statearr_31290_32864[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (45))){
var inst_31158 = (state_31172[(2)]);
var state_31172__$1 = state_31172;
var statearr_31292_32865 = state_31172__$1;
(statearr_31292_32865[(2)] = inst_31158);

(statearr_31292_32865[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (26))){
var inst_31092 = (state_31172[(29)]);
var inst_31151 = (state_31172[(2)]);
var inst_31155 = cljs.core.seq(inst_31092);
var state_31172__$1 = (function (){var statearr_31293 = state_31172;
(statearr_31293[(31)] = inst_31151);

return statearr_31293;
})();
if(inst_31155){
var statearr_31296_32866 = state_31172__$1;
(statearr_31296_32866[(1)] = (42));

} else {
var statearr_31297_32867 = state_31172__$1;
(statearr_31297_32867[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (16))){
var inst_31054 = (state_31172[(7)]);
var inst_31060 = cljs.core.chunked_seq_QMARK_(inst_31054);
var state_31172__$1 = state_31172;
if(inst_31060){
var statearr_31298_32868 = state_31172__$1;
(statearr_31298_32868[(1)] = (19));

} else {
var statearr_31299_32869 = state_31172__$1;
(statearr_31299_32869[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (38))){
var inst_31144 = (state_31172[(2)]);
var state_31172__$1 = state_31172;
var statearr_31300_32870 = state_31172__$1;
(statearr_31300_32870[(2)] = inst_31144);

(statearr_31300_32870[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (30))){
var state_31172__$1 = state_31172;
var statearr_31301_32871 = state_31172__$1;
(statearr_31301_32871[(2)] = null);

(statearr_31301_32871[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (10))){
var inst_31031 = (state_31172[(15)]);
var inst_31029 = (state_31172[(17)]);
var inst_31043 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31029,inst_31031);
var inst_31044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31043,(0),null);
var inst_31045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31043,(1),null);
var state_31172__$1 = (function (){var statearr_31304 = state_31172;
(statearr_31304[(26)] = inst_31044);

return statearr_31304;
})();
if(cljs.core.truth_(inst_31045)){
var statearr_31305_32872 = state_31172__$1;
(statearr_31305_32872[(1)] = (13));

} else {
var statearr_31306_32873 = state_31172__$1;
(statearr_31306_32873[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (18))){
var inst_31084 = (state_31172[(2)]);
var state_31172__$1 = state_31172;
var statearr_31310_32874 = state_31172__$1;
(statearr_31310_32874[(2)] = inst_31084);

(statearr_31310_32874[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (42))){
var state_31172__$1 = state_31172;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31172__$1,(45),dchan);
} else {
if((state_val_31173 === (37))){
var inst_31133 = (state_31172[(23)]);
var inst_31121 = (state_31172[(25)]);
var inst_31019 = (state_31172[(12)]);
var inst_31133__$1 = cljs.core.first(inst_31121);
var inst_31134 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31133__$1,inst_31019,done);
var state_31172__$1 = (function (){var statearr_31315 = state_31172;
(statearr_31315[(23)] = inst_31133__$1);

return statearr_31315;
})();
if(cljs.core.truth_(inst_31134)){
var statearr_31316_32875 = state_31172__$1;
(statearr_31316_32875[(1)] = (39));

} else {
var statearr_31317_32876 = state_31172__$1;
(statearr_31317_32876[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (8))){
var inst_31030 = (state_31172[(13)]);
var inst_31031 = (state_31172[(15)]);
var inst_31033 = (inst_31031 < inst_31030);
var inst_31034 = inst_31033;
var state_31172__$1 = state_31172;
if(cljs.core.truth_(inst_31034)){
var statearr_31318_32877 = state_31172__$1;
(statearr_31318_32877[(1)] = (10));

} else {
var statearr_31319_32878 = state_31172__$1;
(statearr_31319_32878[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__29586__auto__ = null;
var cljs$core$async$mult_$_state_machine__29586__auto____0 = (function (){
var statearr_31320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31320[(0)] = cljs$core$async$mult_$_state_machine__29586__auto__);

(statearr_31320[(1)] = (1));

return statearr_31320;
});
var cljs$core$async$mult_$_state_machine__29586__auto____1 = (function (state_31172){
while(true){
var ret_value__29587__auto__ = (function (){try{while(true){
var result__29588__auto__ = switch__29585__auto__(state_31172);
if(cljs.core.keyword_identical_QMARK_(result__29588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29588__auto__;
}
break;
}
}catch (e31321){if((e31321 instanceof Object)){
var ex__29589__auto__ = e31321;
var statearr_31322_32879 = state_31172;
(statearr_31322_32879[(5)] = ex__29589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31321;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32880 = state_31172;
state_31172 = G__32880;
continue;
} else {
return ret_value__29587__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29586__auto__ = function(state_31172){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29586__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29586__auto____1.call(this,state_31172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29586__auto____0;
cljs$core$async$mult_$_state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29586__auto____1;
return cljs$core$async$mult_$_state_machine__29586__auto__;
})()
})();
var state__29791__auto__ = (function (){var statearr_31325 = (f__29790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29790__auto__.cljs$core$IFn$_invoke$arity$0() : f__29790__auto__.call(null));
(statearr_31325[(6)] = c__29789__auto___32814);

return statearr_31325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29791__auto__);
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
var G__31327 = arguments.length;
switch (G__31327) {
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
var len__4789__auto___32886 = arguments.length;
var i__4790__auto___32887 = (0);
while(true){
if((i__4790__auto___32887 < len__4789__auto___32886)){
args__4795__auto__.push((arguments[i__4790__auto___32887]));

var G__32888 = (i__4790__auto___32887 + (1));
i__4790__auto___32887 = G__32888;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31395){
var map__31396 = p__31395;
var map__31396__$1 = (((((!((map__31396 == null))))?(((((map__31396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31396):map__31396);
var opts = map__31396__$1;
var statearr_31398_32889 = state;
(statearr_31398_32889[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31399_32890 = state;
(statearr_31399_32890[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31400_32891 = state;
(statearr_31400_32891[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31367){
var G__31368 = cljs.core.first(seq31367);
var seq31367__$1 = cljs.core.next(seq31367);
var G__31369 = cljs.core.first(seq31367__$1);
var seq31367__$2 = cljs.core.next(seq31367__$1);
var G__31370 = cljs.core.first(seq31367__$2);
var seq31367__$3 = cljs.core.next(seq31367__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31368,G__31369,G__31370,seq31367__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31401 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31401 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31402){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31402 = meta31402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31403,meta31402__$1){
var self__ = this;
var _31403__$1 = this;
return (new cljs.core.async.t_cljs$core$async31401(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31402__$1));
}));

(cljs.core.async.t_cljs$core$async31401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31403){
var self__ = this;
var _31403__$1 = this;
return self__.meta31402;
}));

(cljs.core.async.t_cljs$core$async31401.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31401.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31401.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31401.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31401.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31401.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31401.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31401.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31402","meta31402",970065418,null)], null);
}));

(cljs.core.async.t_cljs$core$async31401.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31401");

(cljs.core.async.t_cljs$core$async31401.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31401");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31401.
 */
cljs.core.async.__GT_t_cljs$core$async31401 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31401(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31402){
return (new cljs.core.async.t_cljs$core$async31401(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31402));
});

}

return (new cljs.core.async.t_cljs$core$async31401(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29789__auto___32919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29790__auto__ = (function (){var switch__29585__auto__ = (function (state_31506){
var state_val_31507 = (state_31506[(1)]);
if((state_val_31507 === (7))){
var inst_31420 = (state_31506[(2)]);
var state_31506__$1 = state_31506;
var statearr_31508_32921 = state_31506__$1;
(statearr_31508_32921[(2)] = inst_31420);

(statearr_31508_32921[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (20))){
var inst_31433 = (state_31506[(7)]);
var state_31506__$1 = state_31506;
var statearr_31509_32923 = state_31506__$1;
(statearr_31509_32923[(2)] = inst_31433);

(statearr_31509_32923[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (27))){
var state_31506__$1 = state_31506;
var statearr_31510_32924 = state_31506__$1;
(statearr_31510_32924[(2)] = null);

(statearr_31510_32924[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (1))){
var inst_31407 = (state_31506[(8)]);
var inst_31407__$1 = calc_state();
var inst_31409 = (inst_31407__$1 == null);
var inst_31410 = cljs.core.not(inst_31409);
var state_31506__$1 = (function (){var statearr_31511 = state_31506;
(statearr_31511[(8)] = inst_31407__$1);

return statearr_31511;
})();
if(inst_31410){
var statearr_31512_32925 = state_31506__$1;
(statearr_31512_32925[(1)] = (2));

} else {
var statearr_31513_32926 = state_31506__$1;
(statearr_31513_32926[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (24))){
var inst_31466 = (state_31506[(9)]);
var inst_31480 = (state_31506[(10)]);
var inst_31457 = (state_31506[(11)]);
var inst_31480__$1 = (inst_31457.cljs$core$IFn$_invoke$arity$1 ? inst_31457.cljs$core$IFn$_invoke$arity$1(inst_31466) : inst_31457.call(null,inst_31466));
var state_31506__$1 = (function (){var statearr_31514 = state_31506;
(statearr_31514[(10)] = inst_31480__$1);

return statearr_31514;
})();
if(cljs.core.truth_(inst_31480__$1)){
var statearr_31515_32927 = state_31506__$1;
(statearr_31515_32927[(1)] = (29));

} else {
var statearr_31516_32928 = state_31506__$1;
(statearr_31516_32928[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (4))){
var inst_31424 = (state_31506[(2)]);
var state_31506__$1 = state_31506;
if(cljs.core.truth_(inst_31424)){
var statearr_31517_32929 = state_31506__$1;
(statearr_31517_32929[(1)] = (8));

} else {
var statearr_31518_32930 = state_31506__$1;
(statearr_31518_32930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (15))){
var inst_31451 = (state_31506[(2)]);
var state_31506__$1 = state_31506;
if(cljs.core.truth_(inst_31451)){
var statearr_31519_32931 = state_31506__$1;
(statearr_31519_32931[(1)] = (19));

} else {
var statearr_31520_32932 = state_31506__$1;
(statearr_31520_32932[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (21))){
var inst_31456 = (state_31506[(12)]);
var inst_31456__$1 = (state_31506[(2)]);
var inst_31457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31456__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31456__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31456__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31506__$1 = (function (){var statearr_31521 = state_31506;
(statearr_31521[(12)] = inst_31456__$1);

(statearr_31521[(13)] = inst_31458);

(statearr_31521[(11)] = inst_31457);

return statearr_31521;
})();
return cljs.core.async.ioc_alts_BANG_(state_31506__$1,(22),inst_31459);
} else {
if((state_val_31507 === (31))){
var inst_31488 = (state_31506[(2)]);
var state_31506__$1 = state_31506;
if(cljs.core.truth_(inst_31488)){
var statearr_31522_32933 = state_31506__$1;
(statearr_31522_32933[(1)] = (32));

} else {
var statearr_31523_32934 = state_31506__$1;
(statearr_31523_32934[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (32))){
var inst_31465 = (state_31506[(14)]);
var state_31506__$1 = state_31506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31506__$1,(35),out,inst_31465);
} else {
if((state_val_31507 === (33))){
var inst_31456 = (state_31506[(12)]);
var inst_31433 = inst_31456;
var state_31506__$1 = (function (){var statearr_31524 = state_31506;
(statearr_31524[(7)] = inst_31433);

return statearr_31524;
})();
var statearr_31525_32935 = state_31506__$1;
(statearr_31525_32935[(2)] = null);

(statearr_31525_32935[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (13))){
var inst_31433 = (state_31506[(7)]);
var inst_31440 = inst_31433.cljs$lang$protocol_mask$partition0$;
var inst_31441 = (inst_31440 & (64));
var inst_31442 = inst_31433.cljs$core$ISeq$;
var inst_31443 = (cljs.core.PROTOCOL_SENTINEL === inst_31442);
var inst_31444 = ((inst_31441) || (inst_31443));
var state_31506__$1 = state_31506;
if(cljs.core.truth_(inst_31444)){
var statearr_31526_32936 = state_31506__$1;
(statearr_31526_32936[(1)] = (16));

} else {
var statearr_31527_32937 = state_31506__$1;
(statearr_31527_32937[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (22))){
var inst_31466 = (state_31506[(9)]);
var inst_31465 = (state_31506[(14)]);
var inst_31464 = (state_31506[(2)]);
var inst_31465__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31464,(0),null);
var inst_31466__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31464,(1),null);
var inst_31467 = (inst_31465__$1 == null);
var inst_31468 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31466__$1,change);
var inst_31469 = ((inst_31467) || (inst_31468));
var state_31506__$1 = (function (){var statearr_31528 = state_31506;
(statearr_31528[(9)] = inst_31466__$1);

(statearr_31528[(14)] = inst_31465__$1);

return statearr_31528;
})();
if(cljs.core.truth_(inst_31469)){
var statearr_31529_32938 = state_31506__$1;
(statearr_31529_32938[(1)] = (23));

} else {
var statearr_31530_32939 = state_31506__$1;
(statearr_31530_32939[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (36))){
var inst_31456 = (state_31506[(12)]);
var inst_31433 = inst_31456;
var state_31506__$1 = (function (){var statearr_31531 = state_31506;
(statearr_31531[(7)] = inst_31433);

return statearr_31531;
})();
var statearr_31532_32940 = state_31506__$1;
(statearr_31532_32940[(2)] = null);

(statearr_31532_32940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (29))){
var inst_31480 = (state_31506[(10)]);
var state_31506__$1 = state_31506;
var statearr_31533_32941 = state_31506__$1;
(statearr_31533_32941[(2)] = inst_31480);

(statearr_31533_32941[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (6))){
var state_31506__$1 = state_31506;
var statearr_31534_32942 = state_31506__$1;
(statearr_31534_32942[(2)] = false);

(statearr_31534_32942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (28))){
var inst_31476 = (state_31506[(2)]);
var inst_31477 = calc_state();
var inst_31433 = inst_31477;
var state_31506__$1 = (function (){var statearr_31535 = state_31506;
(statearr_31535[(15)] = inst_31476);

(statearr_31535[(7)] = inst_31433);

return statearr_31535;
})();
var statearr_31536_32943 = state_31506__$1;
(statearr_31536_32943[(2)] = null);

(statearr_31536_32943[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (25))){
var inst_31502 = (state_31506[(2)]);
var state_31506__$1 = state_31506;
var statearr_31537_32944 = state_31506__$1;
(statearr_31537_32944[(2)] = inst_31502);

(statearr_31537_32944[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (34))){
var inst_31500 = (state_31506[(2)]);
var state_31506__$1 = state_31506;
var statearr_31538_32945 = state_31506__$1;
(statearr_31538_32945[(2)] = inst_31500);

(statearr_31538_32945[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (17))){
var state_31506__$1 = state_31506;
var statearr_31539_32946 = state_31506__$1;
(statearr_31539_32946[(2)] = false);

(statearr_31539_32946[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (3))){
var state_31506__$1 = state_31506;
var statearr_31540_32947 = state_31506__$1;
(statearr_31540_32947[(2)] = false);

(statearr_31540_32947[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (12))){
var inst_31504 = (state_31506[(2)]);
var state_31506__$1 = state_31506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31506__$1,inst_31504);
} else {
if((state_val_31507 === (2))){
var inst_31407 = (state_31506[(8)]);
var inst_31412 = inst_31407.cljs$lang$protocol_mask$partition0$;
var inst_31413 = (inst_31412 & (64));
var inst_31414 = inst_31407.cljs$core$ISeq$;
var inst_31415 = (cljs.core.PROTOCOL_SENTINEL === inst_31414);
var inst_31416 = ((inst_31413) || (inst_31415));
var state_31506__$1 = state_31506;
if(cljs.core.truth_(inst_31416)){
var statearr_31541_32948 = state_31506__$1;
(statearr_31541_32948[(1)] = (5));

} else {
var statearr_31543_32949 = state_31506__$1;
(statearr_31543_32949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (23))){
var inst_31465 = (state_31506[(14)]);
var inst_31471 = (inst_31465 == null);
var state_31506__$1 = state_31506;
if(cljs.core.truth_(inst_31471)){
var statearr_31545_32950 = state_31506__$1;
(statearr_31545_32950[(1)] = (26));

} else {
var statearr_31546_32951 = state_31506__$1;
(statearr_31546_32951[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (35))){
var inst_31491 = (state_31506[(2)]);
var state_31506__$1 = state_31506;
if(cljs.core.truth_(inst_31491)){
var statearr_31547_32952 = state_31506__$1;
(statearr_31547_32952[(1)] = (36));

} else {
var statearr_31548_32953 = state_31506__$1;
(statearr_31548_32953[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (19))){
var inst_31433 = (state_31506[(7)]);
var inst_31453 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31433);
var state_31506__$1 = state_31506;
var statearr_31549_32954 = state_31506__$1;
(statearr_31549_32954[(2)] = inst_31453);

(statearr_31549_32954[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (11))){
var inst_31433 = (state_31506[(7)]);
var inst_31437 = (inst_31433 == null);
var inst_31438 = cljs.core.not(inst_31437);
var state_31506__$1 = state_31506;
if(inst_31438){
var statearr_31550_32955 = state_31506__$1;
(statearr_31550_32955[(1)] = (13));

} else {
var statearr_31551_32956 = state_31506__$1;
(statearr_31551_32956[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (9))){
var inst_31407 = (state_31506[(8)]);
var state_31506__$1 = state_31506;
var statearr_31552_32957 = state_31506__$1;
(statearr_31552_32957[(2)] = inst_31407);

(statearr_31552_32957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (5))){
var state_31506__$1 = state_31506;
var statearr_31553_32958 = state_31506__$1;
(statearr_31553_32958[(2)] = true);

(statearr_31553_32958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (14))){
var state_31506__$1 = state_31506;
var statearr_31554_32959 = state_31506__$1;
(statearr_31554_32959[(2)] = false);

(statearr_31554_32959[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (26))){
var inst_31466 = (state_31506[(9)]);
var inst_31473 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31466);
var state_31506__$1 = state_31506;
var statearr_31555_32962 = state_31506__$1;
(statearr_31555_32962[(2)] = inst_31473);

(statearr_31555_32962[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (16))){
var state_31506__$1 = state_31506;
var statearr_31556_32963 = state_31506__$1;
(statearr_31556_32963[(2)] = true);

(statearr_31556_32963[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (38))){
var inst_31496 = (state_31506[(2)]);
var state_31506__$1 = state_31506;
var statearr_31557_32964 = state_31506__$1;
(statearr_31557_32964[(2)] = inst_31496);

(statearr_31557_32964[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (30))){
var inst_31466 = (state_31506[(9)]);
var inst_31458 = (state_31506[(13)]);
var inst_31457 = (state_31506[(11)]);
var inst_31483 = cljs.core.empty_QMARK_(inst_31457);
var inst_31484 = (inst_31458.cljs$core$IFn$_invoke$arity$1 ? inst_31458.cljs$core$IFn$_invoke$arity$1(inst_31466) : inst_31458.call(null,inst_31466));
var inst_31485 = cljs.core.not(inst_31484);
var inst_31486 = ((inst_31483) && (inst_31485));
var state_31506__$1 = state_31506;
var statearr_31558_32968 = state_31506__$1;
(statearr_31558_32968[(2)] = inst_31486);

(statearr_31558_32968[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (10))){
var inst_31407 = (state_31506[(8)]);
var inst_31429 = (state_31506[(2)]);
var inst_31430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31429,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31429,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31429,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31433 = inst_31407;
var state_31506__$1 = (function (){var statearr_31559 = state_31506;
(statearr_31559[(7)] = inst_31433);

(statearr_31559[(16)] = inst_31431);

(statearr_31559[(17)] = inst_31432);

(statearr_31559[(18)] = inst_31430);

return statearr_31559;
})();
var statearr_31560_32969 = state_31506__$1;
(statearr_31560_32969[(2)] = null);

(statearr_31560_32969[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (18))){
var inst_31448 = (state_31506[(2)]);
var state_31506__$1 = state_31506;
var statearr_31561_32971 = state_31506__$1;
(statearr_31561_32971[(2)] = inst_31448);

(statearr_31561_32971[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (37))){
var state_31506__$1 = state_31506;
var statearr_31562_32972 = state_31506__$1;
(statearr_31562_32972[(2)] = null);

(statearr_31562_32972[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31507 === (8))){
var inst_31407 = (state_31506[(8)]);
var inst_31426 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31407);
var state_31506__$1 = state_31506;
var statearr_31563_32973 = state_31506__$1;
(statearr_31563_32973[(2)] = inst_31426);

(statearr_31563_32973[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__29586__auto__ = null;
var cljs$core$async$mix_$_state_machine__29586__auto____0 = (function (){
var statearr_31564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31564[(0)] = cljs$core$async$mix_$_state_machine__29586__auto__);

(statearr_31564[(1)] = (1));

return statearr_31564;
});
var cljs$core$async$mix_$_state_machine__29586__auto____1 = (function (state_31506){
while(true){
var ret_value__29587__auto__ = (function (){try{while(true){
var result__29588__auto__ = switch__29585__auto__(state_31506);
if(cljs.core.keyword_identical_QMARK_(result__29588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29588__auto__;
}
break;
}
}catch (e31565){if((e31565 instanceof Object)){
var ex__29589__auto__ = e31565;
var statearr_31566_32976 = state_31506;
(statearr_31566_32976[(5)] = ex__29589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31565;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32977 = state_31506;
state_31506 = G__32977;
continue;
} else {
return ret_value__29587__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29586__auto__ = function(state_31506){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29586__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29586__auto____1.call(this,state_31506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29586__auto____0;
cljs$core$async$mix_$_state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29586__auto____1;
return cljs$core$async$mix_$_state_machine__29586__auto__;
})()
})();
var state__29791__auto__ = (function (){var statearr_31583 = (f__29790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29790__auto__.cljs$core$IFn$_invoke$arity$0() : f__29790__auto__.call(null));
(statearr_31583[(6)] = c__29789__auto___32919);

return statearr_31583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29791__auto__);
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
var G__31607 = arguments.length;
switch (G__31607) {
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
var G__31613 = arguments.length;
switch (G__31613) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31611_SHARP_){
if(cljs.core.truth_((p1__31611_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31611_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31611_SHARP_.call(null,topic)))){
return p1__31611_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31611_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31620 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31620 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31621){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31621 = meta31621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31622,meta31621__$1){
var self__ = this;
var _31622__$1 = this;
return (new cljs.core.async.t_cljs$core$async31620(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31621__$1));
}));

(cljs.core.async.t_cljs$core$async31620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31622){
var self__ = this;
var _31622__$1 = this;
return self__.meta31621;
}));

(cljs.core.async.t_cljs$core$async31620.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31620.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31620.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31620.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31620.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async31620.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31620.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31620.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31621","meta31621",1152520918,null)], null);
}));

(cljs.core.async.t_cljs$core$async31620.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31620");

(cljs.core.async.t_cljs$core$async31620.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31620");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31620.
 */
cljs.core.async.__GT_t_cljs$core$async31620 = (function cljs$core$async$__GT_t_cljs$core$async31620(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31621){
return (new cljs.core.async.t_cljs$core$async31620(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31621));
});

}

return (new cljs.core.async.t_cljs$core$async31620(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29789__auto___32994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29790__auto__ = (function (){var switch__29585__auto__ = (function (state_31730){
var state_val_31731 = (state_31730[(1)]);
if((state_val_31731 === (7))){
var inst_31725 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
var statearr_31735_32995 = state_31730__$1;
(statearr_31735_32995[(2)] = inst_31725);

(statearr_31735_32995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (20))){
var state_31730__$1 = state_31730;
var statearr_31736_32997 = state_31730__$1;
(statearr_31736_32997[(2)] = null);

(statearr_31736_32997[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (1))){
var state_31730__$1 = state_31730;
var statearr_31737_32998 = state_31730__$1;
(statearr_31737_32998[(2)] = null);

(statearr_31737_32998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (24))){
var inst_31707 = (state_31730[(7)]);
var inst_31717 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31707);
var state_31730__$1 = state_31730;
var statearr_31742_32999 = state_31730__$1;
(statearr_31742_32999[(2)] = inst_31717);

(statearr_31742_32999[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (4))){
var inst_31653 = (state_31730[(8)]);
var inst_31653__$1 = (state_31730[(2)]);
var inst_31654 = (inst_31653__$1 == null);
var state_31730__$1 = (function (){var statearr_31745 = state_31730;
(statearr_31745[(8)] = inst_31653__$1);

return statearr_31745;
})();
if(cljs.core.truth_(inst_31654)){
var statearr_31747_33000 = state_31730__$1;
(statearr_31747_33000[(1)] = (5));

} else {
var statearr_31749_33001 = state_31730__$1;
(statearr_31749_33001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (15))){
var inst_31701 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
var statearr_31751_33002 = state_31730__$1;
(statearr_31751_33002[(2)] = inst_31701);

(statearr_31751_33002[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (21))){
var inst_31722 = (state_31730[(2)]);
var state_31730__$1 = (function (){var statearr_31753 = state_31730;
(statearr_31753[(9)] = inst_31722);

return statearr_31753;
})();
var statearr_31756_33003 = state_31730__$1;
(statearr_31756_33003[(2)] = null);

(statearr_31756_33003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (13))){
var inst_31677 = (state_31730[(10)]);
var inst_31679 = cljs.core.chunked_seq_QMARK_(inst_31677);
var state_31730__$1 = state_31730;
if(inst_31679){
var statearr_31760_33009 = state_31730__$1;
(statearr_31760_33009[(1)] = (16));

} else {
var statearr_31761_33010 = state_31730__$1;
(statearr_31761_33010[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (22))){
var inst_31714 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
if(cljs.core.truth_(inst_31714)){
var statearr_31763_33013 = state_31730__$1;
(statearr_31763_33013[(1)] = (23));

} else {
var statearr_31765_33014 = state_31730__$1;
(statearr_31765_33014[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (6))){
var inst_31707 = (state_31730[(7)]);
var inst_31709 = (state_31730[(11)]);
var inst_31653 = (state_31730[(8)]);
var inst_31707__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31653) : topic_fn.call(null,inst_31653));
var inst_31708 = cljs.core.deref(mults);
var inst_31709__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31708,inst_31707__$1);
var state_31730__$1 = (function (){var statearr_31771 = state_31730;
(statearr_31771[(7)] = inst_31707__$1);

(statearr_31771[(11)] = inst_31709__$1);

return statearr_31771;
})();
if(cljs.core.truth_(inst_31709__$1)){
var statearr_31772_33015 = state_31730__$1;
(statearr_31772_33015[(1)] = (19));

} else {
var statearr_31773_33016 = state_31730__$1;
(statearr_31773_33016[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (25))){
var inst_31719 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
var statearr_31775_33017 = state_31730__$1;
(statearr_31775_33017[(2)] = inst_31719);

(statearr_31775_33017[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (17))){
var inst_31677 = (state_31730[(10)]);
var inst_31690 = cljs.core.first(inst_31677);
var inst_31692 = cljs.core.async.muxch_STAR_(inst_31690);
var inst_31693 = cljs.core.async.close_BANG_(inst_31692);
var inst_31694 = cljs.core.next(inst_31677);
var inst_31663 = inst_31694;
var inst_31664 = null;
var inst_31665 = (0);
var inst_31666 = (0);
var state_31730__$1 = (function (){var statearr_31776 = state_31730;
(statearr_31776[(12)] = inst_31664);

(statearr_31776[(13)] = inst_31665);

(statearr_31776[(14)] = inst_31663);

(statearr_31776[(15)] = inst_31666);

(statearr_31776[(16)] = inst_31693);

return statearr_31776;
})();
var statearr_31777_33018 = state_31730__$1;
(statearr_31777_33018[(2)] = null);

(statearr_31777_33018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (3))){
var inst_31727 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31730__$1,inst_31727);
} else {
if((state_val_31731 === (12))){
var inst_31703 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
var statearr_31778_33019 = state_31730__$1;
(statearr_31778_33019[(2)] = inst_31703);

(statearr_31778_33019[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (2))){
var state_31730__$1 = state_31730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31730__$1,(4),ch);
} else {
if((state_val_31731 === (23))){
var state_31730__$1 = state_31730;
var statearr_31779_33020 = state_31730__$1;
(statearr_31779_33020[(2)] = null);

(statearr_31779_33020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (19))){
var inst_31709 = (state_31730[(11)]);
var inst_31653 = (state_31730[(8)]);
var inst_31711 = cljs.core.async.muxch_STAR_(inst_31709);
var state_31730__$1 = state_31730;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31730__$1,(22),inst_31711,inst_31653);
} else {
if((state_val_31731 === (11))){
var inst_31663 = (state_31730[(14)]);
var inst_31677 = (state_31730[(10)]);
var inst_31677__$1 = cljs.core.seq(inst_31663);
var state_31730__$1 = (function (){var statearr_31780 = state_31730;
(statearr_31780[(10)] = inst_31677__$1);

return statearr_31780;
})();
if(inst_31677__$1){
var statearr_31781_33022 = state_31730__$1;
(statearr_31781_33022[(1)] = (13));

} else {
var statearr_31782_33023 = state_31730__$1;
(statearr_31782_33023[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (9))){
var inst_31705 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
var statearr_31783_33024 = state_31730__$1;
(statearr_31783_33024[(2)] = inst_31705);

(statearr_31783_33024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (5))){
var inst_31660 = cljs.core.deref(mults);
var inst_31661 = cljs.core.vals(inst_31660);
var inst_31662 = cljs.core.seq(inst_31661);
var inst_31663 = inst_31662;
var inst_31664 = null;
var inst_31665 = (0);
var inst_31666 = (0);
var state_31730__$1 = (function (){var statearr_31784 = state_31730;
(statearr_31784[(12)] = inst_31664);

(statearr_31784[(13)] = inst_31665);

(statearr_31784[(14)] = inst_31663);

(statearr_31784[(15)] = inst_31666);

return statearr_31784;
})();
var statearr_31785_33026 = state_31730__$1;
(statearr_31785_33026[(2)] = null);

(statearr_31785_33026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (14))){
var state_31730__$1 = state_31730;
var statearr_31789_33027 = state_31730__$1;
(statearr_31789_33027[(2)] = null);

(statearr_31789_33027[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (16))){
var inst_31677 = (state_31730[(10)]);
var inst_31684 = cljs.core.chunk_first(inst_31677);
var inst_31686 = cljs.core.chunk_rest(inst_31677);
var inst_31687 = cljs.core.count(inst_31684);
var inst_31663 = inst_31686;
var inst_31664 = inst_31684;
var inst_31665 = inst_31687;
var inst_31666 = (0);
var state_31730__$1 = (function (){var statearr_31790 = state_31730;
(statearr_31790[(12)] = inst_31664);

(statearr_31790[(13)] = inst_31665);

(statearr_31790[(14)] = inst_31663);

(statearr_31790[(15)] = inst_31666);

return statearr_31790;
})();
var statearr_31791_33029 = state_31730__$1;
(statearr_31791_33029[(2)] = null);

(statearr_31791_33029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (10))){
var inst_31664 = (state_31730[(12)]);
var inst_31665 = (state_31730[(13)]);
var inst_31663 = (state_31730[(14)]);
var inst_31666 = (state_31730[(15)]);
var inst_31671 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31664,inst_31666);
var inst_31672 = cljs.core.async.muxch_STAR_(inst_31671);
var inst_31673 = cljs.core.async.close_BANG_(inst_31672);
var inst_31674 = (inst_31666 + (1));
var tmp31786 = inst_31664;
var tmp31787 = inst_31665;
var tmp31788 = inst_31663;
var inst_31663__$1 = tmp31788;
var inst_31664__$1 = tmp31786;
var inst_31665__$1 = tmp31787;
var inst_31666__$1 = inst_31674;
var state_31730__$1 = (function (){var statearr_31794 = state_31730;
(statearr_31794[(12)] = inst_31664__$1);

(statearr_31794[(13)] = inst_31665__$1);

(statearr_31794[(14)] = inst_31663__$1);

(statearr_31794[(15)] = inst_31666__$1);

(statearr_31794[(17)] = inst_31673);

return statearr_31794;
})();
var statearr_31795_33035 = state_31730__$1;
(statearr_31795_33035[(2)] = null);

(statearr_31795_33035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (18))){
var inst_31698 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
var statearr_31796_33037 = state_31730__$1;
(statearr_31796_33037[(2)] = inst_31698);

(statearr_31796_33037[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (8))){
var inst_31665 = (state_31730[(13)]);
var inst_31666 = (state_31730[(15)]);
var inst_31668 = (inst_31666 < inst_31665);
var inst_31669 = inst_31668;
var state_31730__$1 = state_31730;
if(cljs.core.truth_(inst_31669)){
var statearr_31798_33038 = state_31730__$1;
(statearr_31798_33038[(1)] = (10));

} else {
var statearr_31799_33039 = state_31730__$1;
(statearr_31799_33039[(1)] = (11));

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
var cljs$core$async$state_machine__29586__auto__ = null;
var cljs$core$async$state_machine__29586__auto____0 = (function (){
var statearr_31804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31804[(0)] = cljs$core$async$state_machine__29586__auto__);

(statearr_31804[(1)] = (1));

return statearr_31804;
});
var cljs$core$async$state_machine__29586__auto____1 = (function (state_31730){
while(true){
var ret_value__29587__auto__ = (function (){try{while(true){
var result__29588__auto__ = switch__29585__auto__(state_31730);
if(cljs.core.keyword_identical_QMARK_(result__29588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29588__auto__;
}
break;
}
}catch (e31807){if((e31807 instanceof Object)){
var ex__29589__auto__ = e31807;
var statearr_31809_33041 = state_31730;
(statearr_31809_33041[(5)] = ex__29589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31807;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33042 = state_31730;
state_31730 = G__33042;
continue;
} else {
return ret_value__29587__auto__;
}
break;
}
});
cljs$core$async$state_machine__29586__auto__ = function(state_31730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29586__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29586__auto____1.call(this,state_31730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29586__auto____0;
cljs$core$async$state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29586__auto____1;
return cljs$core$async$state_machine__29586__auto__;
})()
})();
var state__29791__auto__ = (function (){var statearr_31811 = (f__29790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29790__auto__.cljs$core$IFn$_invoke$arity$0() : f__29790__auto__.call(null));
(statearr_31811[(6)] = c__29789__auto___32994);

return statearr_31811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29791__auto__);
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
var G__31818 = arguments.length;
switch (G__31818) {
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
var G__31828 = arguments.length;
switch (G__31828) {
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
var G__31838 = arguments.length;
switch (G__31838) {
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
var c__29789__auto___33051 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29790__auto__ = (function (){var switch__29585__auto__ = (function (state_31909){
var state_val_31910 = (state_31909[(1)]);
if((state_val_31910 === (7))){
var state_31909__$1 = state_31909;
var statearr_31917_33052 = state_31909__$1;
(statearr_31917_33052[(2)] = null);

(statearr_31917_33052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (1))){
var state_31909__$1 = state_31909;
var statearr_31918_33053 = state_31909__$1;
(statearr_31918_33053[(2)] = null);

(statearr_31918_33053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (4))){
var inst_31859 = (state_31909[(7)]);
var inst_31862 = (inst_31859 < cnt);
var state_31909__$1 = state_31909;
if(cljs.core.truth_(inst_31862)){
var statearr_31921_33054 = state_31909__$1;
(statearr_31921_33054[(1)] = (6));

} else {
var statearr_31922_33055 = state_31909__$1;
(statearr_31922_33055[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (15))){
var inst_31901 = (state_31909[(2)]);
var state_31909__$1 = state_31909;
var statearr_31923_33056 = state_31909__$1;
(statearr_31923_33056[(2)] = inst_31901);

(statearr_31923_33056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (13))){
var inst_31893 = cljs.core.async.close_BANG_(out);
var state_31909__$1 = state_31909;
var statearr_31928_33057 = state_31909__$1;
(statearr_31928_33057[(2)] = inst_31893);

(statearr_31928_33057[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (6))){
var state_31909__$1 = state_31909;
var statearr_31930_33058 = state_31909__$1;
(statearr_31930_33058[(2)] = null);

(statearr_31930_33058[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (3))){
var inst_31903 = (state_31909[(2)]);
var state_31909__$1 = state_31909;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31909__$1,inst_31903);
} else {
if((state_val_31910 === (12))){
var inst_31889 = (state_31909[(8)]);
var inst_31889__$1 = (state_31909[(2)]);
var inst_31890 = cljs.core.some(cljs.core.nil_QMARK_,inst_31889__$1);
var state_31909__$1 = (function (){var statearr_31941 = state_31909;
(statearr_31941[(8)] = inst_31889__$1);

return statearr_31941;
})();
if(cljs.core.truth_(inst_31890)){
var statearr_31943_33066 = state_31909__$1;
(statearr_31943_33066[(1)] = (13));

} else {
var statearr_31945_33067 = state_31909__$1;
(statearr_31945_33067[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (2))){
var inst_31857 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31859 = (0);
var state_31909__$1 = (function (){var statearr_31947 = state_31909;
(statearr_31947[(9)] = inst_31857);

(statearr_31947[(7)] = inst_31859);

return statearr_31947;
})();
var statearr_31952_33068 = state_31909__$1;
(statearr_31952_33068[(2)] = null);

(statearr_31952_33068[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (11))){
var inst_31859 = (state_31909[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_31909,(10),Object,null,(9));
var inst_31875 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31859) : chs__$1.call(null,inst_31859));
var inst_31876 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31859) : done.call(null,inst_31859));
var inst_31877 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31875,inst_31876);
var state_31909__$1 = state_31909;
var statearr_31957_33069 = state_31909__$1;
(statearr_31957_33069[(2)] = inst_31877);


cljs.core.async.impl.ioc_helpers.process_exception(state_31909__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (9))){
var inst_31859 = (state_31909[(7)]);
var inst_31879 = (state_31909[(2)]);
var inst_31880 = (inst_31859 + (1));
var inst_31859__$1 = inst_31880;
var state_31909__$1 = (function (){var statearr_31959 = state_31909;
(statearr_31959[(10)] = inst_31879);

(statearr_31959[(7)] = inst_31859__$1);

return statearr_31959;
})();
var statearr_31960_33070 = state_31909__$1;
(statearr_31960_33070[(2)] = null);

(statearr_31960_33070[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (5))){
var inst_31886 = (state_31909[(2)]);
var state_31909__$1 = (function (){var statearr_31961 = state_31909;
(statearr_31961[(11)] = inst_31886);

return statearr_31961;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31909__$1,(12),dchan);
} else {
if((state_val_31910 === (14))){
var inst_31889 = (state_31909[(8)]);
var inst_31896 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31889);
var state_31909__$1 = state_31909;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31909__$1,(16),out,inst_31896);
} else {
if((state_val_31910 === (16))){
var inst_31898 = (state_31909[(2)]);
var state_31909__$1 = (function (){var statearr_31962 = state_31909;
(statearr_31962[(12)] = inst_31898);

return statearr_31962;
})();
var statearr_31963_33072 = state_31909__$1;
(statearr_31963_33072[(2)] = null);

(statearr_31963_33072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (10))){
var inst_31868 = (state_31909[(2)]);
var inst_31870 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31909__$1 = (function (){var statearr_31964 = state_31909;
(statearr_31964[(13)] = inst_31868);

return statearr_31964;
})();
var statearr_31965_33073 = state_31909__$1;
(statearr_31965_33073[(2)] = inst_31870);


cljs.core.async.impl.ioc_helpers.process_exception(state_31909__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (8))){
var inst_31884 = (state_31909[(2)]);
var state_31909__$1 = state_31909;
var statearr_31966_33074 = state_31909__$1;
(statearr_31966_33074[(2)] = inst_31884);

(statearr_31966_33074[(1)] = (5));


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
var cljs$core$async$state_machine__29586__auto__ = null;
var cljs$core$async$state_machine__29586__auto____0 = (function (){
var statearr_31967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31967[(0)] = cljs$core$async$state_machine__29586__auto__);

(statearr_31967[(1)] = (1));

return statearr_31967;
});
var cljs$core$async$state_machine__29586__auto____1 = (function (state_31909){
while(true){
var ret_value__29587__auto__ = (function (){try{while(true){
var result__29588__auto__ = switch__29585__auto__(state_31909);
if(cljs.core.keyword_identical_QMARK_(result__29588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29588__auto__;
}
break;
}
}catch (e31968){if((e31968 instanceof Object)){
var ex__29589__auto__ = e31968;
var statearr_31969_33075 = state_31909;
(statearr_31969_33075[(5)] = ex__29589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31968;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33077 = state_31909;
state_31909 = G__33077;
continue;
} else {
return ret_value__29587__auto__;
}
break;
}
});
cljs$core$async$state_machine__29586__auto__ = function(state_31909){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29586__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29586__auto____1.call(this,state_31909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29586__auto____0;
cljs$core$async$state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29586__auto____1;
return cljs$core$async$state_machine__29586__auto__;
})()
})();
var state__29791__auto__ = (function (){var statearr_31970 = (f__29790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29790__auto__.cljs$core$IFn$_invoke$arity$0() : f__29790__auto__.call(null));
(statearr_31970[(6)] = c__29789__auto___33051);

return statearr_31970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29791__auto__);
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
var G__31974 = arguments.length;
switch (G__31974) {
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
var c__29789__auto___33079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29790__auto__ = (function (){var switch__29585__auto__ = (function (state_32007){
var state_val_32008 = (state_32007[(1)]);
if((state_val_32008 === (7))){
var inst_31986 = (state_32007[(7)]);
var inst_31987 = (state_32007[(8)]);
var inst_31986__$1 = (state_32007[(2)]);
var inst_31987__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31986__$1,(0),null);
var inst_31988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31986__$1,(1),null);
var inst_31989 = (inst_31987__$1 == null);
var state_32007__$1 = (function (){var statearr_32009 = state_32007;
(statearr_32009[(7)] = inst_31986__$1);

(statearr_32009[(9)] = inst_31988);

(statearr_32009[(8)] = inst_31987__$1);

return statearr_32009;
})();
if(cljs.core.truth_(inst_31989)){
var statearr_32010_33080 = state_32007__$1;
(statearr_32010_33080[(1)] = (8));

} else {
var statearr_32011_33081 = state_32007__$1;
(statearr_32011_33081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (1))){
var inst_31975 = cljs.core.vec(chs);
var inst_31976 = inst_31975;
var state_32007__$1 = (function (){var statearr_32012 = state_32007;
(statearr_32012[(10)] = inst_31976);

return statearr_32012;
})();
var statearr_32013_33082 = state_32007__$1;
(statearr_32013_33082[(2)] = null);

(statearr_32013_33082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (4))){
var inst_31976 = (state_32007[(10)]);
var state_32007__$1 = state_32007;
return cljs.core.async.ioc_alts_BANG_(state_32007__$1,(7),inst_31976);
} else {
if((state_val_32008 === (6))){
var inst_32003 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
var statearr_32026_33083 = state_32007__$1;
(statearr_32026_33083[(2)] = inst_32003);

(statearr_32026_33083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (3))){
var inst_32005 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32007__$1,inst_32005);
} else {
if((state_val_32008 === (2))){
var inst_31976 = (state_32007[(10)]);
var inst_31979 = cljs.core.count(inst_31976);
var inst_31980 = (inst_31979 > (0));
var state_32007__$1 = state_32007;
if(cljs.core.truth_(inst_31980)){
var statearr_32028_33084 = state_32007__$1;
(statearr_32028_33084[(1)] = (4));

} else {
var statearr_32029_33085 = state_32007__$1;
(statearr_32029_33085[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (11))){
var inst_31976 = (state_32007[(10)]);
var inst_31996 = (state_32007[(2)]);
var tmp32027 = inst_31976;
var inst_31976__$1 = tmp32027;
var state_32007__$1 = (function (){var statearr_32030 = state_32007;
(statearr_32030[(11)] = inst_31996);

(statearr_32030[(10)] = inst_31976__$1);

return statearr_32030;
})();
var statearr_32031_33086 = state_32007__$1;
(statearr_32031_33086[(2)] = null);

(statearr_32031_33086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (9))){
var inst_31987 = (state_32007[(8)]);
var state_32007__$1 = state_32007;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32007__$1,(11),out,inst_31987);
} else {
if((state_val_32008 === (5))){
var inst_32001 = cljs.core.async.close_BANG_(out);
var state_32007__$1 = state_32007;
var statearr_32032_33087 = state_32007__$1;
(statearr_32032_33087[(2)] = inst_32001);

(statearr_32032_33087[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (10))){
var inst_31999 = (state_32007[(2)]);
var state_32007__$1 = state_32007;
var statearr_32033_33092 = state_32007__$1;
(statearr_32033_33092[(2)] = inst_31999);

(statearr_32033_33092[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32008 === (8))){
var inst_31986 = (state_32007[(7)]);
var inst_31976 = (state_32007[(10)]);
var inst_31988 = (state_32007[(9)]);
var inst_31987 = (state_32007[(8)]);
var inst_31991 = (function (){var cs = inst_31976;
var vec__31982 = inst_31986;
var v = inst_31987;
var c = inst_31988;
return (function (p1__31972_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31972_SHARP_);
});
})();
var inst_31992 = cljs.core.filterv(inst_31991,inst_31976);
var inst_31976__$1 = inst_31992;
var state_32007__$1 = (function (){var statearr_32034 = state_32007;
(statearr_32034[(10)] = inst_31976__$1);

return statearr_32034;
})();
var statearr_32035_33097 = state_32007__$1;
(statearr_32035_33097[(2)] = null);

(statearr_32035_33097[(1)] = (2));


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
var cljs$core$async$state_machine__29586__auto__ = null;
var cljs$core$async$state_machine__29586__auto____0 = (function (){
var statearr_32036 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32036[(0)] = cljs$core$async$state_machine__29586__auto__);

(statearr_32036[(1)] = (1));

return statearr_32036;
});
var cljs$core$async$state_machine__29586__auto____1 = (function (state_32007){
while(true){
var ret_value__29587__auto__ = (function (){try{while(true){
var result__29588__auto__ = switch__29585__auto__(state_32007);
if(cljs.core.keyword_identical_QMARK_(result__29588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29588__auto__;
}
break;
}
}catch (e32037){if((e32037 instanceof Object)){
var ex__29589__auto__ = e32037;
var statearr_32038_33099 = state_32007;
(statearr_32038_33099[(5)] = ex__29589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32037;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33101 = state_32007;
state_32007 = G__33101;
continue;
} else {
return ret_value__29587__auto__;
}
break;
}
});
cljs$core$async$state_machine__29586__auto__ = function(state_32007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29586__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29586__auto____1.call(this,state_32007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29586__auto____0;
cljs$core$async$state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29586__auto____1;
return cljs$core$async$state_machine__29586__auto__;
})()
})();
var state__29791__auto__ = (function (){var statearr_32039 = (f__29790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29790__auto__.cljs$core$IFn$_invoke$arity$0() : f__29790__auto__.call(null));
(statearr_32039[(6)] = c__29789__auto___33079);

return statearr_32039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29791__auto__);
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
var G__32041 = arguments.length;
switch (G__32041) {
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
var c__29789__auto___33103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29790__auto__ = (function (){var switch__29585__auto__ = (function (state_32065){
var state_val_32066 = (state_32065[(1)]);
if((state_val_32066 === (7))){
var inst_32047 = (state_32065[(7)]);
var inst_32047__$1 = (state_32065[(2)]);
var inst_32048 = (inst_32047__$1 == null);
var inst_32049 = cljs.core.not(inst_32048);
var state_32065__$1 = (function (){var statearr_32067 = state_32065;
(statearr_32067[(7)] = inst_32047__$1);

return statearr_32067;
})();
if(inst_32049){
var statearr_32068_33104 = state_32065__$1;
(statearr_32068_33104[(1)] = (8));

} else {
var statearr_32069_33105 = state_32065__$1;
(statearr_32069_33105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (1))){
var inst_32042 = (0);
var state_32065__$1 = (function (){var statearr_32070 = state_32065;
(statearr_32070[(8)] = inst_32042);

return statearr_32070;
})();
var statearr_32071_33106 = state_32065__$1;
(statearr_32071_33106[(2)] = null);

(statearr_32071_33106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (4))){
var state_32065__$1 = state_32065;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32065__$1,(7),ch);
} else {
if((state_val_32066 === (6))){
var inst_32060 = (state_32065[(2)]);
var state_32065__$1 = state_32065;
var statearr_32072_33107 = state_32065__$1;
(statearr_32072_33107[(2)] = inst_32060);

(statearr_32072_33107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (3))){
var inst_32062 = (state_32065[(2)]);
var inst_32063 = cljs.core.async.close_BANG_(out);
var state_32065__$1 = (function (){var statearr_32073 = state_32065;
(statearr_32073[(9)] = inst_32062);

return statearr_32073;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32065__$1,inst_32063);
} else {
if((state_val_32066 === (2))){
var inst_32042 = (state_32065[(8)]);
var inst_32044 = (inst_32042 < n);
var state_32065__$1 = state_32065;
if(cljs.core.truth_(inst_32044)){
var statearr_32074_33110 = state_32065__$1;
(statearr_32074_33110[(1)] = (4));

} else {
var statearr_32075_33111 = state_32065__$1;
(statearr_32075_33111[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (11))){
var inst_32042 = (state_32065[(8)]);
var inst_32052 = (state_32065[(2)]);
var inst_32053 = (inst_32042 + (1));
var inst_32042__$1 = inst_32053;
var state_32065__$1 = (function (){var statearr_32076 = state_32065;
(statearr_32076[(10)] = inst_32052);

(statearr_32076[(8)] = inst_32042__$1);

return statearr_32076;
})();
var statearr_32077_33112 = state_32065__$1;
(statearr_32077_33112[(2)] = null);

(statearr_32077_33112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (9))){
var state_32065__$1 = state_32065;
var statearr_32078_33114 = state_32065__$1;
(statearr_32078_33114[(2)] = null);

(statearr_32078_33114[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (5))){
var state_32065__$1 = state_32065;
var statearr_32079_33116 = state_32065__$1;
(statearr_32079_33116[(2)] = null);

(statearr_32079_33116[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (10))){
var inst_32057 = (state_32065[(2)]);
var state_32065__$1 = state_32065;
var statearr_32080_33117 = state_32065__$1;
(statearr_32080_33117[(2)] = inst_32057);

(statearr_32080_33117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (8))){
var inst_32047 = (state_32065[(7)]);
var state_32065__$1 = state_32065;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32065__$1,(11),out,inst_32047);
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
var cljs$core$async$state_machine__29586__auto__ = null;
var cljs$core$async$state_machine__29586__auto____0 = (function (){
var statearr_32081 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32081[(0)] = cljs$core$async$state_machine__29586__auto__);

(statearr_32081[(1)] = (1));

return statearr_32081;
});
var cljs$core$async$state_machine__29586__auto____1 = (function (state_32065){
while(true){
var ret_value__29587__auto__ = (function (){try{while(true){
var result__29588__auto__ = switch__29585__auto__(state_32065);
if(cljs.core.keyword_identical_QMARK_(result__29588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29588__auto__;
}
break;
}
}catch (e32082){if((e32082 instanceof Object)){
var ex__29589__auto__ = e32082;
var statearr_32083_33118 = state_32065;
(statearr_32083_33118[(5)] = ex__29589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32082;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33119 = state_32065;
state_32065 = G__33119;
continue;
} else {
return ret_value__29587__auto__;
}
break;
}
});
cljs$core$async$state_machine__29586__auto__ = function(state_32065){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29586__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29586__auto____1.call(this,state_32065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29586__auto____0;
cljs$core$async$state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29586__auto____1;
return cljs$core$async$state_machine__29586__auto__;
})()
})();
var state__29791__auto__ = (function (){var statearr_32084 = (f__29790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29790__auto__.cljs$core$IFn$_invoke$arity$0() : f__29790__auto__.call(null));
(statearr_32084[(6)] = c__29789__auto___33103);

return statearr_32084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29791__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32086 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32086 = (function (f,ch,meta32087){
this.f = f;
this.ch = ch;
this.meta32087 = meta32087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32088,meta32087__$1){
var self__ = this;
var _32088__$1 = this;
return (new cljs.core.async.t_cljs$core$async32086(self__.f,self__.ch,meta32087__$1));
}));

(cljs.core.async.t_cljs$core$async32086.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32088){
var self__ = this;
var _32088__$1 = this;
return self__.meta32087;
}));

(cljs.core.async.t_cljs$core$async32086.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32086.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32086.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32086.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32086.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32089 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32089 = (function (f,ch,meta32087,_,fn1,meta32090){
this.f = f;
this.ch = ch;
this.meta32087 = meta32087;
this._ = _;
this.fn1 = fn1;
this.meta32090 = meta32090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32091,meta32090__$1){
var self__ = this;
var _32091__$1 = this;
return (new cljs.core.async.t_cljs$core$async32089(self__.f,self__.ch,self__.meta32087,self__._,self__.fn1,meta32090__$1));
}));

(cljs.core.async.t_cljs$core$async32089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32091){
var self__ = this;
var _32091__$1 = this;
return self__.meta32090;
}));

(cljs.core.async.t_cljs$core$async32089.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32089.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32089.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32089.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32085_SHARP_){
var G__32092 = (((p1__32085_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32085_SHARP_) : self__.f.call(null,p1__32085_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32092) : f1.call(null,G__32092));
});
}));

(cljs.core.async.t_cljs$core$async32089.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32087","meta32087",-1491119333,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32086","cljs.core.async/t_cljs$core$async32086",167941451,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32090","meta32090",-2036955512,null)], null);
}));

(cljs.core.async.t_cljs$core$async32089.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32089.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32089");

(cljs.core.async.t_cljs$core$async32089.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32089");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32089.
 */
cljs.core.async.__GT_t_cljs$core$async32089 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32089(f__$1,ch__$1,meta32087__$1,___$2,fn1__$1,meta32090){
return (new cljs.core.async.t_cljs$core$async32089(f__$1,ch__$1,meta32087__$1,___$2,fn1__$1,meta32090));
});

}

return (new cljs.core.async.t_cljs$core$async32089(self__.f,self__.ch,self__.meta32087,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32093 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32093) : self__.f.call(null,G__32093));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32086.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32086.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32086.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32087","meta32087",-1491119333,null)], null);
}));

(cljs.core.async.t_cljs$core$async32086.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32086.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32086");

(cljs.core.async.t_cljs$core$async32086.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32086");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32086.
 */
cljs.core.async.__GT_t_cljs$core$async32086 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32086(f__$1,ch__$1,meta32087){
return (new cljs.core.async.t_cljs$core$async32086(f__$1,ch__$1,meta32087));
});

}

return (new cljs.core.async.t_cljs$core$async32086(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32094 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32094 = (function (f,ch,meta32095){
this.f = f;
this.ch = ch;
this.meta32095 = meta32095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32096,meta32095__$1){
var self__ = this;
var _32096__$1 = this;
return (new cljs.core.async.t_cljs$core$async32094(self__.f,self__.ch,meta32095__$1));
}));

(cljs.core.async.t_cljs$core$async32094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32096){
var self__ = this;
var _32096__$1 = this;
return self__.meta32095;
}));

(cljs.core.async.t_cljs$core$async32094.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32094.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32094.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32094.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32094.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32094.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32095","meta32095",-757880879,null)], null);
}));

(cljs.core.async.t_cljs$core$async32094.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32094.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32094");

(cljs.core.async.t_cljs$core$async32094.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32094");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32094.
 */
cljs.core.async.__GT_t_cljs$core$async32094 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32094(f__$1,ch__$1,meta32095){
return (new cljs.core.async.t_cljs$core$async32094(f__$1,ch__$1,meta32095));
});

}

return (new cljs.core.async.t_cljs$core$async32094(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32097 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32097 = (function (p,ch,meta32098){
this.p = p;
this.ch = ch;
this.meta32098 = meta32098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32099,meta32098__$1){
var self__ = this;
var _32099__$1 = this;
return (new cljs.core.async.t_cljs$core$async32097(self__.p,self__.ch,meta32098__$1));
}));

(cljs.core.async.t_cljs$core$async32097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32099){
var self__ = this;
var _32099__$1 = this;
return self__.meta32098;
}));

(cljs.core.async.t_cljs$core$async32097.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32097.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32097.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32097.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32097.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32097.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32097.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32097.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32098","meta32098",-2023072736,null)], null);
}));

(cljs.core.async.t_cljs$core$async32097.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32097.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32097");

(cljs.core.async.t_cljs$core$async32097.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32097");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32097.
 */
cljs.core.async.__GT_t_cljs$core$async32097 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32097(p__$1,ch__$1,meta32098){
return (new cljs.core.async.t_cljs$core$async32097(p__$1,ch__$1,meta32098));
});

}

return (new cljs.core.async.t_cljs$core$async32097(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32101 = arguments.length;
switch (G__32101) {
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
var c__29789__auto___33143 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29790__auto__ = (function (){var switch__29585__auto__ = (function (state_32122){
var state_val_32123 = (state_32122[(1)]);
if((state_val_32123 === (7))){
var inst_32118 = (state_32122[(2)]);
var state_32122__$1 = state_32122;
var statearr_32124_33144 = state_32122__$1;
(statearr_32124_33144[(2)] = inst_32118);

(statearr_32124_33144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (1))){
var state_32122__$1 = state_32122;
var statearr_32125_33145 = state_32122__$1;
(statearr_32125_33145[(2)] = null);

(statearr_32125_33145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (4))){
var inst_32104 = (state_32122[(7)]);
var inst_32104__$1 = (state_32122[(2)]);
var inst_32105 = (inst_32104__$1 == null);
var state_32122__$1 = (function (){var statearr_32126 = state_32122;
(statearr_32126[(7)] = inst_32104__$1);

return statearr_32126;
})();
if(cljs.core.truth_(inst_32105)){
var statearr_32127_33147 = state_32122__$1;
(statearr_32127_33147[(1)] = (5));

} else {
var statearr_32128_33148 = state_32122__$1;
(statearr_32128_33148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (6))){
var inst_32104 = (state_32122[(7)]);
var inst_32109 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32104) : p.call(null,inst_32104));
var state_32122__$1 = state_32122;
if(cljs.core.truth_(inst_32109)){
var statearr_32129_33149 = state_32122__$1;
(statearr_32129_33149[(1)] = (8));

} else {
var statearr_32130_33150 = state_32122__$1;
(statearr_32130_33150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (3))){
var inst_32120 = (state_32122[(2)]);
var state_32122__$1 = state_32122;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32122__$1,inst_32120);
} else {
if((state_val_32123 === (2))){
var state_32122__$1 = state_32122;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32122__$1,(4),ch);
} else {
if((state_val_32123 === (11))){
var inst_32112 = (state_32122[(2)]);
var state_32122__$1 = state_32122;
var statearr_32131_33154 = state_32122__$1;
(statearr_32131_33154[(2)] = inst_32112);

(statearr_32131_33154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (9))){
var state_32122__$1 = state_32122;
var statearr_32132_33155 = state_32122__$1;
(statearr_32132_33155[(2)] = null);

(statearr_32132_33155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (5))){
var inst_32107 = cljs.core.async.close_BANG_(out);
var state_32122__$1 = state_32122;
var statearr_32133_33162 = state_32122__$1;
(statearr_32133_33162[(2)] = inst_32107);

(statearr_32133_33162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (10))){
var inst_32115 = (state_32122[(2)]);
var state_32122__$1 = (function (){var statearr_32134 = state_32122;
(statearr_32134[(8)] = inst_32115);

return statearr_32134;
})();
var statearr_32135_33163 = state_32122__$1;
(statearr_32135_33163[(2)] = null);

(statearr_32135_33163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (8))){
var inst_32104 = (state_32122[(7)]);
var state_32122__$1 = state_32122;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32122__$1,(11),out,inst_32104);
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
var cljs$core$async$state_machine__29586__auto__ = null;
var cljs$core$async$state_machine__29586__auto____0 = (function (){
var statearr_32136 = [null,null,null,null,null,null,null,null,null];
(statearr_32136[(0)] = cljs$core$async$state_machine__29586__auto__);

(statearr_32136[(1)] = (1));

return statearr_32136;
});
var cljs$core$async$state_machine__29586__auto____1 = (function (state_32122){
while(true){
var ret_value__29587__auto__ = (function (){try{while(true){
var result__29588__auto__ = switch__29585__auto__(state_32122);
if(cljs.core.keyword_identical_QMARK_(result__29588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29588__auto__;
}
break;
}
}catch (e32137){if((e32137 instanceof Object)){
var ex__29589__auto__ = e32137;
var statearr_32138_33170 = state_32122;
(statearr_32138_33170[(5)] = ex__29589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32137;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33171 = state_32122;
state_32122 = G__33171;
continue;
} else {
return ret_value__29587__auto__;
}
break;
}
});
cljs$core$async$state_machine__29586__auto__ = function(state_32122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29586__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29586__auto____1.call(this,state_32122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29586__auto____0;
cljs$core$async$state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29586__auto____1;
return cljs$core$async$state_machine__29586__auto__;
})()
})();
var state__29791__auto__ = (function (){var statearr_32139 = (f__29790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29790__auto__.cljs$core$IFn$_invoke$arity$0() : f__29790__auto__.call(null));
(statearr_32139[(6)] = c__29789__auto___33143);

return statearr_32139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29791__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32141 = arguments.length;
switch (G__32141) {
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
var c__29789__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29790__auto__ = (function (){var switch__29585__auto__ = (function (state_32203){
var state_val_32204 = (state_32203[(1)]);
if((state_val_32204 === (7))){
var inst_32199 = (state_32203[(2)]);
var state_32203__$1 = state_32203;
var statearr_32205_33173 = state_32203__$1;
(statearr_32205_33173[(2)] = inst_32199);

(statearr_32205_33173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (20))){
var inst_32169 = (state_32203[(7)]);
var inst_32180 = (state_32203[(2)]);
var inst_32181 = cljs.core.next(inst_32169);
var inst_32155 = inst_32181;
var inst_32156 = null;
var inst_32157 = (0);
var inst_32158 = (0);
var state_32203__$1 = (function (){var statearr_32206 = state_32203;
(statearr_32206[(8)] = inst_32157);

(statearr_32206[(9)] = inst_32156);

(statearr_32206[(10)] = inst_32155);

(statearr_32206[(11)] = inst_32158);

(statearr_32206[(12)] = inst_32180);

return statearr_32206;
})();
var statearr_32207_33174 = state_32203__$1;
(statearr_32207_33174[(2)] = null);

(statearr_32207_33174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (1))){
var state_32203__$1 = state_32203;
var statearr_32208_33175 = state_32203__$1;
(statearr_32208_33175[(2)] = null);

(statearr_32208_33175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (4))){
var inst_32144 = (state_32203[(13)]);
var inst_32144__$1 = (state_32203[(2)]);
var inst_32145 = (inst_32144__$1 == null);
var state_32203__$1 = (function (){var statearr_32209 = state_32203;
(statearr_32209[(13)] = inst_32144__$1);

return statearr_32209;
})();
if(cljs.core.truth_(inst_32145)){
var statearr_32210_33182 = state_32203__$1;
(statearr_32210_33182[(1)] = (5));

} else {
var statearr_32211_33183 = state_32203__$1;
(statearr_32211_33183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (15))){
var state_32203__$1 = state_32203;
var statearr_32215_33184 = state_32203__$1;
(statearr_32215_33184[(2)] = null);

(statearr_32215_33184[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (21))){
var state_32203__$1 = state_32203;
var statearr_32216_33185 = state_32203__$1;
(statearr_32216_33185[(2)] = null);

(statearr_32216_33185[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (13))){
var inst_32157 = (state_32203[(8)]);
var inst_32156 = (state_32203[(9)]);
var inst_32155 = (state_32203[(10)]);
var inst_32158 = (state_32203[(11)]);
var inst_32165 = (state_32203[(2)]);
var inst_32166 = (inst_32158 + (1));
var tmp32212 = inst_32157;
var tmp32213 = inst_32156;
var tmp32214 = inst_32155;
var inst_32155__$1 = tmp32214;
var inst_32156__$1 = tmp32213;
var inst_32157__$1 = tmp32212;
var inst_32158__$1 = inst_32166;
var state_32203__$1 = (function (){var statearr_32217 = state_32203;
(statearr_32217[(8)] = inst_32157__$1);

(statearr_32217[(9)] = inst_32156__$1);

(statearr_32217[(10)] = inst_32155__$1);

(statearr_32217[(11)] = inst_32158__$1);

(statearr_32217[(14)] = inst_32165);

return statearr_32217;
})();
var statearr_32218_33186 = state_32203__$1;
(statearr_32218_33186[(2)] = null);

(statearr_32218_33186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (22))){
var state_32203__$1 = state_32203;
var statearr_32219_33187 = state_32203__$1;
(statearr_32219_33187[(2)] = null);

(statearr_32219_33187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (6))){
var inst_32144 = (state_32203[(13)]);
var inst_32153 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32144) : f.call(null,inst_32144));
var inst_32154 = cljs.core.seq(inst_32153);
var inst_32155 = inst_32154;
var inst_32156 = null;
var inst_32157 = (0);
var inst_32158 = (0);
var state_32203__$1 = (function (){var statearr_32220 = state_32203;
(statearr_32220[(8)] = inst_32157);

(statearr_32220[(9)] = inst_32156);

(statearr_32220[(10)] = inst_32155);

(statearr_32220[(11)] = inst_32158);

return statearr_32220;
})();
var statearr_32221_33188 = state_32203__$1;
(statearr_32221_33188[(2)] = null);

(statearr_32221_33188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (17))){
var inst_32169 = (state_32203[(7)]);
var inst_32173 = cljs.core.chunk_first(inst_32169);
var inst_32174 = cljs.core.chunk_rest(inst_32169);
var inst_32175 = cljs.core.count(inst_32173);
var inst_32155 = inst_32174;
var inst_32156 = inst_32173;
var inst_32157 = inst_32175;
var inst_32158 = (0);
var state_32203__$1 = (function (){var statearr_32222 = state_32203;
(statearr_32222[(8)] = inst_32157);

(statearr_32222[(9)] = inst_32156);

(statearr_32222[(10)] = inst_32155);

(statearr_32222[(11)] = inst_32158);

return statearr_32222;
})();
var statearr_32223_33189 = state_32203__$1;
(statearr_32223_33189[(2)] = null);

(statearr_32223_33189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (3))){
var inst_32201 = (state_32203[(2)]);
var state_32203__$1 = state_32203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32203__$1,inst_32201);
} else {
if((state_val_32204 === (12))){
var inst_32189 = (state_32203[(2)]);
var state_32203__$1 = state_32203;
var statearr_32224_33196 = state_32203__$1;
(statearr_32224_33196[(2)] = inst_32189);

(statearr_32224_33196[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (2))){
var state_32203__$1 = state_32203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32203__$1,(4),in$);
} else {
if((state_val_32204 === (23))){
var inst_32197 = (state_32203[(2)]);
var state_32203__$1 = state_32203;
var statearr_32225_33197 = state_32203__$1;
(statearr_32225_33197[(2)] = inst_32197);

(statearr_32225_33197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (19))){
var inst_32184 = (state_32203[(2)]);
var state_32203__$1 = state_32203;
var statearr_32226_33198 = state_32203__$1;
(statearr_32226_33198[(2)] = inst_32184);

(statearr_32226_33198[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (11))){
var inst_32155 = (state_32203[(10)]);
var inst_32169 = (state_32203[(7)]);
var inst_32169__$1 = cljs.core.seq(inst_32155);
var state_32203__$1 = (function (){var statearr_32227 = state_32203;
(statearr_32227[(7)] = inst_32169__$1);

return statearr_32227;
})();
if(inst_32169__$1){
var statearr_32228_33199 = state_32203__$1;
(statearr_32228_33199[(1)] = (14));

} else {
var statearr_32229_33200 = state_32203__$1;
(statearr_32229_33200[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (9))){
var inst_32191 = (state_32203[(2)]);
var inst_32192 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32203__$1 = (function (){var statearr_32230 = state_32203;
(statearr_32230[(15)] = inst_32191);

return statearr_32230;
})();
if(cljs.core.truth_(inst_32192)){
var statearr_32231_33201 = state_32203__$1;
(statearr_32231_33201[(1)] = (21));

} else {
var statearr_32232_33202 = state_32203__$1;
(statearr_32232_33202[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (5))){
var inst_32147 = cljs.core.async.close_BANG_(out);
var state_32203__$1 = state_32203;
var statearr_32233_33203 = state_32203__$1;
(statearr_32233_33203[(2)] = inst_32147);

(statearr_32233_33203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (14))){
var inst_32169 = (state_32203[(7)]);
var inst_32171 = cljs.core.chunked_seq_QMARK_(inst_32169);
var state_32203__$1 = state_32203;
if(inst_32171){
var statearr_32234_33204 = state_32203__$1;
(statearr_32234_33204[(1)] = (17));

} else {
var statearr_32235_33205 = state_32203__$1;
(statearr_32235_33205[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (16))){
var inst_32187 = (state_32203[(2)]);
var state_32203__$1 = state_32203;
var statearr_32236_33206 = state_32203__$1;
(statearr_32236_33206[(2)] = inst_32187);

(statearr_32236_33206[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32204 === (10))){
var inst_32156 = (state_32203[(9)]);
var inst_32158 = (state_32203[(11)]);
var inst_32163 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32156,inst_32158);
var state_32203__$1 = state_32203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32203__$1,(13),out,inst_32163);
} else {
if((state_val_32204 === (18))){
var inst_32169 = (state_32203[(7)]);
var inst_32178 = cljs.core.first(inst_32169);
var state_32203__$1 = state_32203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32203__$1,(20),out,inst_32178);
} else {
if((state_val_32204 === (8))){
var inst_32157 = (state_32203[(8)]);
var inst_32158 = (state_32203[(11)]);
var inst_32160 = (inst_32158 < inst_32157);
var inst_32161 = inst_32160;
var state_32203__$1 = state_32203;
if(cljs.core.truth_(inst_32161)){
var statearr_32237_33213 = state_32203__$1;
(statearr_32237_33213[(1)] = (10));

} else {
var statearr_32238_33214 = state_32203__$1;
(statearr_32238_33214[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__29586__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29586__auto____0 = (function (){
var statearr_32239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32239[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29586__auto__);

(statearr_32239[(1)] = (1));

return statearr_32239;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29586__auto____1 = (function (state_32203){
while(true){
var ret_value__29587__auto__ = (function (){try{while(true){
var result__29588__auto__ = switch__29585__auto__(state_32203);
if(cljs.core.keyword_identical_QMARK_(result__29588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29588__auto__;
}
break;
}
}catch (e32240){if((e32240 instanceof Object)){
var ex__29589__auto__ = e32240;
var statearr_32241_33215 = state_32203;
(statearr_32241_33215[(5)] = ex__29589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32240;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33216 = state_32203;
state_32203 = G__33216;
continue;
} else {
return ret_value__29587__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29586__auto__ = function(state_32203){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29586__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29586__auto____1.call(this,state_32203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29586__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29586__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29586__auto__;
})()
})();
var state__29791__auto__ = (function (){var statearr_32242 = (f__29790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29790__auto__.cljs$core$IFn$_invoke$arity$0() : f__29790__auto__.call(null));
(statearr_32242[(6)] = c__29789__auto__);

return statearr_32242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29791__auto__);
}));

return c__29789__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32244 = arguments.length;
switch (G__32244) {
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
var G__32246 = arguments.length;
switch (G__32246) {
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
var G__32248 = arguments.length;
switch (G__32248) {
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
var c__29789__auto___33223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29790__auto__ = (function (){var switch__29585__auto__ = (function (state_32272){
var state_val_32273 = (state_32272[(1)]);
if((state_val_32273 === (7))){
var inst_32267 = (state_32272[(2)]);
var state_32272__$1 = state_32272;
var statearr_32274_33224 = state_32272__$1;
(statearr_32274_33224[(2)] = inst_32267);

(statearr_32274_33224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (1))){
var inst_32249 = null;
var state_32272__$1 = (function (){var statearr_32275 = state_32272;
(statearr_32275[(7)] = inst_32249);

return statearr_32275;
})();
var statearr_32276_33228 = state_32272__$1;
(statearr_32276_33228[(2)] = null);

(statearr_32276_33228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (4))){
var inst_32252 = (state_32272[(8)]);
var inst_32252__$1 = (state_32272[(2)]);
var inst_32253 = (inst_32252__$1 == null);
var inst_32254 = cljs.core.not(inst_32253);
var state_32272__$1 = (function (){var statearr_32277 = state_32272;
(statearr_32277[(8)] = inst_32252__$1);

return statearr_32277;
})();
if(inst_32254){
var statearr_32278_33231 = state_32272__$1;
(statearr_32278_33231[(1)] = (5));

} else {
var statearr_32279_33232 = state_32272__$1;
(statearr_32279_33232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (6))){
var state_32272__$1 = state_32272;
var statearr_32280_33233 = state_32272__$1;
(statearr_32280_33233[(2)] = null);

(statearr_32280_33233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (3))){
var inst_32269 = (state_32272[(2)]);
var inst_32270 = cljs.core.async.close_BANG_(out);
var state_32272__$1 = (function (){var statearr_32281 = state_32272;
(statearr_32281[(9)] = inst_32269);

return statearr_32281;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32272__$1,inst_32270);
} else {
if((state_val_32273 === (2))){
var state_32272__$1 = state_32272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32272__$1,(4),ch);
} else {
if((state_val_32273 === (11))){
var inst_32252 = (state_32272[(8)]);
var inst_32261 = (state_32272[(2)]);
var inst_32249 = inst_32252;
var state_32272__$1 = (function (){var statearr_32282 = state_32272;
(statearr_32282[(7)] = inst_32249);

(statearr_32282[(10)] = inst_32261);

return statearr_32282;
})();
var statearr_32283_33234 = state_32272__$1;
(statearr_32283_33234[(2)] = null);

(statearr_32283_33234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (9))){
var inst_32252 = (state_32272[(8)]);
var state_32272__$1 = state_32272;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32272__$1,(11),out,inst_32252);
} else {
if((state_val_32273 === (5))){
var inst_32252 = (state_32272[(8)]);
var inst_32249 = (state_32272[(7)]);
var inst_32256 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32252,inst_32249);
var state_32272__$1 = state_32272;
if(inst_32256){
var statearr_32285_33235 = state_32272__$1;
(statearr_32285_33235[(1)] = (8));

} else {
var statearr_32286_33236 = state_32272__$1;
(statearr_32286_33236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (10))){
var inst_32264 = (state_32272[(2)]);
var state_32272__$1 = state_32272;
var statearr_32287_33237 = state_32272__$1;
(statearr_32287_33237[(2)] = inst_32264);

(statearr_32287_33237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (8))){
var inst_32249 = (state_32272[(7)]);
var tmp32284 = inst_32249;
var inst_32249__$1 = tmp32284;
var state_32272__$1 = (function (){var statearr_32288 = state_32272;
(statearr_32288[(7)] = inst_32249__$1);

return statearr_32288;
})();
var statearr_32289_33238 = state_32272__$1;
(statearr_32289_33238[(2)] = null);

(statearr_32289_33238[(1)] = (2));


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
var cljs$core$async$state_machine__29586__auto__ = null;
var cljs$core$async$state_machine__29586__auto____0 = (function (){
var statearr_32290 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32290[(0)] = cljs$core$async$state_machine__29586__auto__);

(statearr_32290[(1)] = (1));

return statearr_32290;
});
var cljs$core$async$state_machine__29586__auto____1 = (function (state_32272){
while(true){
var ret_value__29587__auto__ = (function (){try{while(true){
var result__29588__auto__ = switch__29585__auto__(state_32272);
if(cljs.core.keyword_identical_QMARK_(result__29588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29588__auto__;
}
break;
}
}catch (e32291){if((e32291 instanceof Object)){
var ex__29589__auto__ = e32291;
var statearr_32292_33241 = state_32272;
(statearr_32292_33241[(5)] = ex__29589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32291;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33242 = state_32272;
state_32272 = G__33242;
continue;
} else {
return ret_value__29587__auto__;
}
break;
}
});
cljs$core$async$state_machine__29586__auto__ = function(state_32272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29586__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29586__auto____1.call(this,state_32272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29586__auto____0;
cljs$core$async$state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29586__auto____1;
return cljs$core$async$state_machine__29586__auto__;
})()
})();
var state__29791__auto__ = (function (){var statearr_32293 = (f__29790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29790__auto__.cljs$core$IFn$_invoke$arity$0() : f__29790__auto__.call(null));
(statearr_32293[(6)] = c__29789__auto___33223);

return statearr_32293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29791__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32295 = arguments.length;
switch (G__32295) {
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
var c__29789__auto___33244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29790__auto__ = (function (){var switch__29585__auto__ = (function (state_32333){
var state_val_32334 = (state_32333[(1)]);
if((state_val_32334 === (7))){
var inst_32329 = (state_32333[(2)]);
var state_32333__$1 = state_32333;
var statearr_32335_33248 = state_32333__$1;
(statearr_32335_33248[(2)] = inst_32329);

(statearr_32335_33248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32334 === (1))){
var inst_32296 = (new Array(n));
var inst_32297 = inst_32296;
var inst_32298 = (0);
var state_32333__$1 = (function (){var statearr_32336 = state_32333;
(statearr_32336[(7)] = inst_32297);

(statearr_32336[(8)] = inst_32298);

return statearr_32336;
})();
var statearr_32337_33255 = state_32333__$1;
(statearr_32337_33255[(2)] = null);

(statearr_32337_33255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32334 === (4))){
var inst_32301 = (state_32333[(9)]);
var inst_32301__$1 = (state_32333[(2)]);
var inst_32302 = (inst_32301__$1 == null);
var inst_32303 = cljs.core.not(inst_32302);
var state_32333__$1 = (function (){var statearr_32338 = state_32333;
(statearr_32338[(9)] = inst_32301__$1);

return statearr_32338;
})();
if(inst_32303){
var statearr_32339_33256 = state_32333__$1;
(statearr_32339_33256[(1)] = (5));

} else {
var statearr_32340_33257 = state_32333__$1;
(statearr_32340_33257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32334 === (15))){
var inst_32323 = (state_32333[(2)]);
var state_32333__$1 = state_32333;
var statearr_32341_33258 = state_32333__$1;
(statearr_32341_33258[(2)] = inst_32323);

(statearr_32341_33258[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32334 === (13))){
var state_32333__$1 = state_32333;
var statearr_32342_33260 = state_32333__$1;
(statearr_32342_33260[(2)] = null);

(statearr_32342_33260[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32334 === (6))){
var inst_32298 = (state_32333[(8)]);
var inst_32319 = (inst_32298 > (0));
var state_32333__$1 = state_32333;
if(cljs.core.truth_(inst_32319)){
var statearr_32343_33261 = state_32333__$1;
(statearr_32343_33261[(1)] = (12));

} else {
var statearr_32344_33263 = state_32333__$1;
(statearr_32344_33263[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32334 === (3))){
var inst_32331 = (state_32333[(2)]);
var state_32333__$1 = state_32333;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32333__$1,inst_32331);
} else {
if((state_val_32334 === (12))){
var inst_32297 = (state_32333[(7)]);
var inst_32321 = cljs.core.vec(inst_32297);
var state_32333__$1 = state_32333;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32333__$1,(15),out,inst_32321);
} else {
if((state_val_32334 === (2))){
var state_32333__$1 = state_32333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32333__$1,(4),ch);
} else {
if((state_val_32334 === (11))){
var inst_32313 = (state_32333[(2)]);
var inst_32314 = (new Array(n));
var inst_32297 = inst_32314;
var inst_32298 = (0);
var state_32333__$1 = (function (){var statearr_32345 = state_32333;
(statearr_32345[(7)] = inst_32297);

(statearr_32345[(8)] = inst_32298);

(statearr_32345[(10)] = inst_32313);

return statearr_32345;
})();
var statearr_32346_33266 = state_32333__$1;
(statearr_32346_33266[(2)] = null);

(statearr_32346_33266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32334 === (9))){
var inst_32297 = (state_32333[(7)]);
var inst_32311 = cljs.core.vec(inst_32297);
var state_32333__$1 = state_32333;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32333__$1,(11),out,inst_32311);
} else {
if((state_val_32334 === (5))){
var inst_32297 = (state_32333[(7)]);
var inst_32298 = (state_32333[(8)]);
var inst_32306 = (state_32333[(11)]);
var inst_32301 = (state_32333[(9)]);
var inst_32305 = (inst_32297[inst_32298] = inst_32301);
var inst_32306__$1 = (inst_32298 + (1));
var inst_32307 = (inst_32306__$1 < n);
var state_32333__$1 = (function (){var statearr_32347 = state_32333;
(statearr_32347[(11)] = inst_32306__$1);

(statearr_32347[(12)] = inst_32305);

return statearr_32347;
})();
if(cljs.core.truth_(inst_32307)){
var statearr_32348_33268 = state_32333__$1;
(statearr_32348_33268[(1)] = (8));

} else {
var statearr_32349_33269 = state_32333__$1;
(statearr_32349_33269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32334 === (14))){
var inst_32326 = (state_32333[(2)]);
var inst_32327 = cljs.core.async.close_BANG_(out);
var state_32333__$1 = (function (){var statearr_32351 = state_32333;
(statearr_32351[(13)] = inst_32326);

return statearr_32351;
})();
var statearr_32352_33270 = state_32333__$1;
(statearr_32352_33270[(2)] = inst_32327);

(statearr_32352_33270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32334 === (10))){
var inst_32317 = (state_32333[(2)]);
var state_32333__$1 = state_32333;
var statearr_32353_33271 = state_32333__$1;
(statearr_32353_33271[(2)] = inst_32317);

(statearr_32353_33271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32334 === (8))){
var inst_32297 = (state_32333[(7)]);
var inst_32306 = (state_32333[(11)]);
var tmp32350 = inst_32297;
var inst_32297__$1 = tmp32350;
var inst_32298 = inst_32306;
var state_32333__$1 = (function (){var statearr_32354 = state_32333;
(statearr_32354[(7)] = inst_32297__$1);

(statearr_32354[(8)] = inst_32298);

return statearr_32354;
})();
var statearr_32355_33272 = state_32333__$1;
(statearr_32355_33272[(2)] = null);

(statearr_32355_33272[(1)] = (2));


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
var cljs$core$async$state_machine__29586__auto__ = null;
var cljs$core$async$state_machine__29586__auto____0 = (function (){
var statearr_32356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32356[(0)] = cljs$core$async$state_machine__29586__auto__);

(statearr_32356[(1)] = (1));

return statearr_32356;
});
var cljs$core$async$state_machine__29586__auto____1 = (function (state_32333){
while(true){
var ret_value__29587__auto__ = (function (){try{while(true){
var result__29588__auto__ = switch__29585__auto__(state_32333);
if(cljs.core.keyword_identical_QMARK_(result__29588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29588__auto__;
}
break;
}
}catch (e32357){if((e32357 instanceof Object)){
var ex__29589__auto__ = e32357;
var statearr_32358_33273 = state_32333;
(statearr_32358_33273[(5)] = ex__29589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32357;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33274 = state_32333;
state_32333 = G__33274;
continue;
} else {
return ret_value__29587__auto__;
}
break;
}
});
cljs$core$async$state_machine__29586__auto__ = function(state_32333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29586__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29586__auto____1.call(this,state_32333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29586__auto____0;
cljs$core$async$state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29586__auto____1;
return cljs$core$async$state_machine__29586__auto__;
})()
})();
var state__29791__auto__ = (function (){var statearr_32359 = (f__29790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29790__auto__.cljs$core$IFn$_invoke$arity$0() : f__29790__auto__.call(null));
(statearr_32359[(6)] = c__29789__auto___33244);

return statearr_32359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29791__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32361 = arguments.length;
switch (G__32361) {
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
var c__29789__auto___33276 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29790__auto__ = (function (){var switch__29585__auto__ = (function (state_32403){
var state_val_32404 = (state_32403[(1)]);
if((state_val_32404 === (7))){
var inst_32399 = (state_32403[(2)]);
var state_32403__$1 = state_32403;
var statearr_32405_33278 = state_32403__$1;
(statearr_32405_33278[(2)] = inst_32399);

(statearr_32405_33278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (1))){
var inst_32362 = [];
var inst_32363 = inst_32362;
var inst_32364 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32403__$1 = (function (){var statearr_32406 = state_32403;
(statearr_32406[(7)] = inst_32363);

(statearr_32406[(8)] = inst_32364);

return statearr_32406;
})();
var statearr_32407_33279 = state_32403__$1;
(statearr_32407_33279[(2)] = null);

(statearr_32407_33279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (4))){
var inst_32367 = (state_32403[(9)]);
var inst_32367__$1 = (state_32403[(2)]);
var inst_32368 = (inst_32367__$1 == null);
var inst_32369 = cljs.core.not(inst_32368);
var state_32403__$1 = (function (){var statearr_32408 = state_32403;
(statearr_32408[(9)] = inst_32367__$1);

return statearr_32408;
})();
if(inst_32369){
var statearr_32409_33283 = state_32403__$1;
(statearr_32409_33283[(1)] = (5));

} else {
var statearr_32410_33284 = state_32403__$1;
(statearr_32410_33284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (15))){
var inst_32393 = (state_32403[(2)]);
var state_32403__$1 = state_32403;
var statearr_32411_33285 = state_32403__$1;
(statearr_32411_33285[(2)] = inst_32393);

(statearr_32411_33285[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (13))){
var state_32403__$1 = state_32403;
var statearr_32412_33287 = state_32403__$1;
(statearr_32412_33287[(2)] = null);

(statearr_32412_33287[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (6))){
var inst_32363 = (state_32403[(7)]);
var inst_32388 = inst_32363.length;
var inst_32389 = (inst_32388 > (0));
var state_32403__$1 = state_32403;
if(cljs.core.truth_(inst_32389)){
var statearr_32413_33288 = state_32403__$1;
(statearr_32413_33288[(1)] = (12));

} else {
var statearr_32414_33289 = state_32403__$1;
(statearr_32414_33289[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (3))){
var inst_32401 = (state_32403[(2)]);
var state_32403__$1 = state_32403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32403__$1,inst_32401);
} else {
if((state_val_32404 === (12))){
var inst_32363 = (state_32403[(7)]);
var inst_32391 = cljs.core.vec(inst_32363);
var state_32403__$1 = state_32403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32403__$1,(15),out,inst_32391);
} else {
if((state_val_32404 === (2))){
var state_32403__$1 = state_32403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32403__$1,(4),ch);
} else {
if((state_val_32404 === (11))){
var inst_32367 = (state_32403[(9)]);
var inst_32371 = (state_32403[(10)]);
var inst_32381 = (state_32403[(2)]);
var inst_32382 = [];
var inst_32383 = inst_32382.push(inst_32367);
var inst_32363 = inst_32382;
var inst_32364 = inst_32371;
var state_32403__$1 = (function (){var statearr_32415 = state_32403;
(statearr_32415[(11)] = inst_32383);

(statearr_32415[(7)] = inst_32363);

(statearr_32415[(12)] = inst_32381);

(statearr_32415[(8)] = inst_32364);

return statearr_32415;
})();
var statearr_32416_33299 = state_32403__$1;
(statearr_32416_33299[(2)] = null);

(statearr_32416_33299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (9))){
var inst_32363 = (state_32403[(7)]);
var inst_32379 = cljs.core.vec(inst_32363);
var state_32403__$1 = state_32403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32403__$1,(11),out,inst_32379);
} else {
if((state_val_32404 === (5))){
var inst_32367 = (state_32403[(9)]);
var inst_32364 = (state_32403[(8)]);
var inst_32371 = (state_32403[(10)]);
var inst_32371__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32367) : f.call(null,inst_32367));
var inst_32372 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32371__$1,inst_32364);
var inst_32373 = cljs.core.keyword_identical_QMARK_(inst_32364,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32374 = ((inst_32372) || (inst_32373));
var state_32403__$1 = (function (){var statearr_32417 = state_32403;
(statearr_32417[(10)] = inst_32371__$1);

return statearr_32417;
})();
if(cljs.core.truth_(inst_32374)){
var statearr_32418_33313 = state_32403__$1;
(statearr_32418_33313[(1)] = (8));

} else {
var statearr_32419_33314 = state_32403__$1;
(statearr_32419_33314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (14))){
var inst_32396 = (state_32403[(2)]);
var inst_32397 = cljs.core.async.close_BANG_(out);
var state_32403__$1 = (function (){var statearr_32421 = state_32403;
(statearr_32421[(13)] = inst_32396);

return statearr_32421;
})();
var statearr_32422_33315 = state_32403__$1;
(statearr_32422_33315[(2)] = inst_32397);

(statearr_32422_33315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (10))){
var inst_32386 = (state_32403[(2)]);
var state_32403__$1 = state_32403;
var statearr_32423_33316 = state_32403__$1;
(statearr_32423_33316[(2)] = inst_32386);

(statearr_32423_33316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (8))){
var inst_32363 = (state_32403[(7)]);
var inst_32367 = (state_32403[(9)]);
var inst_32371 = (state_32403[(10)]);
var inst_32376 = inst_32363.push(inst_32367);
var tmp32420 = inst_32363;
var inst_32363__$1 = tmp32420;
var inst_32364 = inst_32371;
var state_32403__$1 = (function (){var statearr_32424 = state_32403;
(statearr_32424[(7)] = inst_32363__$1);

(statearr_32424[(8)] = inst_32364);

(statearr_32424[(14)] = inst_32376);

return statearr_32424;
})();
var statearr_32425_33317 = state_32403__$1;
(statearr_32425_33317[(2)] = null);

(statearr_32425_33317[(1)] = (2));


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
var cljs$core$async$state_machine__29586__auto__ = null;
var cljs$core$async$state_machine__29586__auto____0 = (function (){
var statearr_32426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32426[(0)] = cljs$core$async$state_machine__29586__auto__);

(statearr_32426[(1)] = (1));

return statearr_32426;
});
var cljs$core$async$state_machine__29586__auto____1 = (function (state_32403){
while(true){
var ret_value__29587__auto__ = (function (){try{while(true){
var result__29588__auto__ = switch__29585__auto__(state_32403);
if(cljs.core.keyword_identical_QMARK_(result__29588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29588__auto__;
}
break;
}
}catch (e32427){if((e32427 instanceof Object)){
var ex__29589__auto__ = e32427;
var statearr_32428_33322 = state_32403;
(statearr_32428_33322[(5)] = ex__29589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32427;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33327 = state_32403;
state_32403 = G__33327;
continue;
} else {
return ret_value__29587__auto__;
}
break;
}
});
cljs$core$async$state_machine__29586__auto__ = function(state_32403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29586__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29586__auto____1.call(this,state_32403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29586__auto____0;
cljs$core$async$state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29586__auto____1;
return cljs$core$async$state_machine__29586__auto__;
})()
})();
var state__29791__auto__ = (function (){var statearr_32429 = (f__29790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29790__auto__.cljs$core$IFn$_invoke$arity$0() : f__29790__auto__.call(null));
(statearr_32429[(6)] = c__29789__auto___33276);

return statearr_32429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29791__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
