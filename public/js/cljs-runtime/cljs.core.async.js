goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__47409 = arguments.length;
switch (G__47409) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47410 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47410 = (function (f,blockable,meta47411){
this.f = f;
this.blockable = blockable;
this.meta47411 = meta47411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47412,meta47411__$1){
var self__ = this;
var _47412__$1 = this;
return (new cljs.core.async.t_cljs$core$async47410(self__.f,self__.blockable,meta47411__$1));
}));

(cljs.core.async.t_cljs$core$async47410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47412){
var self__ = this;
var _47412__$1 = this;
return self__.meta47411;
}));

(cljs.core.async.t_cljs$core$async47410.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47410.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47410.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async47410.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async47410.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47411","meta47411",-11012542,null)], null);
}));

(cljs.core.async.t_cljs$core$async47410.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47410");

(cljs.core.async.t_cljs$core$async47410.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async47410");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47410.
 */
cljs.core.async.__GT_t_cljs$core$async47410 = (function cljs$core$async$__GT_t_cljs$core$async47410(f__$1,blockable__$1,meta47411){
return (new cljs.core.async.t_cljs$core$async47410(f__$1,blockable__$1,meta47411));
});

}

return (new cljs.core.async.t_cljs$core$async47410(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47422 = arguments.length;
switch (G__47422) {
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
var G__47426 = arguments.length;
switch (G__47426) {
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
var G__47428 = arguments.length;
switch (G__47428) {
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
var val_49732 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49732) : fn1.call(null,val_49732));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49732) : fn1.call(null,val_49732));
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
var G__47430 = arguments.length;
switch (G__47430) {
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
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
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
var n__4706__auto___49734 = n;
var x_49735 = (0);
while(true){
if((x_49735 < n__4706__auto___49734)){
(a[x_49735] = x_49735);

var G__49736 = (x_49735 + (1));
x_49735 = G__49736;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47437 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47437 = (function (flag,meta47438){
this.flag = flag;
this.meta47438 = meta47438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47439,meta47438__$1){
var self__ = this;
var _47439__$1 = this;
return (new cljs.core.async.t_cljs$core$async47437(self__.flag,meta47438__$1));
}));

(cljs.core.async.t_cljs$core$async47437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47439){
var self__ = this;
var _47439__$1 = this;
return self__.meta47438;
}));

(cljs.core.async.t_cljs$core$async47437.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47437.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47437.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47437.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async47437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47438","meta47438",-737243572,null)], null);
}));

(cljs.core.async.t_cljs$core$async47437.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47437.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47437");

(cljs.core.async.t_cljs$core$async47437.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async47437");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47437.
 */
cljs.core.async.__GT_t_cljs$core$async47437 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47437(flag__$1,meta47438){
return (new cljs.core.async.t_cljs$core$async47437(flag__$1,meta47438));
});

}

return (new cljs.core.async.t_cljs$core$async47437(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47441 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47441 = (function (flag,cb,meta47442){
this.flag = flag;
this.cb = cb;
this.meta47442 = meta47442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47443,meta47442__$1){
var self__ = this;
var _47443__$1 = this;
return (new cljs.core.async.t_cljs$core$async47441(self__.flag,self__.cb,meta47442__$1));
}));

(cljs.core.async.t_cljs$core$async47441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47443){
var self__ = this;
var _47443__$1 = this;
return self__.meta47442;
}));

(cljs.core.async.t_cljs$core$async47441.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47441.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47441.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47441.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async47441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47442","meta47442",751760709,null)], null);
}));

(cljs.core.async.t_cljs$core$async47441.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47441");

(cljs.core.async.t_cljs$core$async47441.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async47441");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47441.
 */
cljs.core.async.__GT_t_cljs$core$async47441 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47441(flag__$1,cb__$1,meta47442){
return (new cljs.core.async.t_cljs$core$async47441(flag__$1,cb__$1,meta47442));
});

}

return (new cljs.core.async.t_cljs$core$async47441(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__47447_SHARP_){
var G__47449 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47447_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47449) : fret.call(null,G__47449));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47448_SHARP_){
var G__47450 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47448_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47450) : fret.call(null,G__47450));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__49737 = (i + (1));
i = G__49737;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
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
var args__4835__auto__ = [];
var len__4829__auto___49738 = arguments.length;
var i__4830__auto___49739 = (0);
while(true){
if((i__4830__auto___49739 < len__4829__auto___49738)){
args__4835__auto__.push((arguments[i__4830__auto___49739]));

var G__49740 = (i__4830__auto___49739 + (1));
i__4830__auto___49739 = G__49740;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47453){
var map__47454 = p__47453;
var map__47454__$1 = cljs.core.__destructure_map(map__47454);
var opts = map__47454__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47451){
var G__47452 = cljs.core.first(seq47451);
var seq47451__$1 = cljs.core.next(seq47451);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47452,seq47451__$1);
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
var G__47456 = arguments.length;
switch (G__47456) {
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
var c__47337__auto___49745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47338__auto__ = (function (){var switch__47246__auto__ = (function (state_47480){
var state_val_47481 = (state_47480[(1)]);
if((state_val_47481 === (7))){
var inst_47476 = (state_47480[(2)]);
var state_47480__$1 = state_47480;
var statearr_47482_49746 = state_47480__$1;
(statearr_47482_49746[(2)] = inst_47476);

(statearr_47482_49746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (1))){
var state_47480__$1 = state_47480;
var statearr_47483_49747 = state_47480__$1;
(statearr_47483_49747[(2)] = null);

(statearr_47483_49747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (4))){
var inst_47459 = (state_47480[(7)]);
var inst_47459__$1 = (state_47480[(2)]);
var inst_47460 = (inst_47459__$1 == null);
var state_47480__$1 = (function (){var statearr_47484 = state_47480;
(statearr_47484[(7)] = inst_47459__$1);

return statearr_47484;
})();
if(cljs.core.truth_(inst_47460)){
var statearr_47485_49748 = state_47480__$1;
(statearr_47485_49748[(1)] = (5));

} else {
var statearr_47486_49749 = state_47480__$1;
(statearr_47486_49749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (13))){
var state_47480__$1 = state_47480;
var statearr_47487_49750 = state_47480__$1;
(statearr_47487_49750[(2)] = null);

(statearr_47487_49750[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (6))){
var inst_47459 = (state_47480[(7)]);
var state_47480__$1 = state_47480;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47480__$1,(11),to,inst_47459);
} else {
if((state_val_47481 === (3))){
var inst_47478 = (state_47480[(2)]);
var state_47480__$1 = state_47480;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47480__$1,inst_47478);
} else {
if((state_val_47481 === (12))){
var state_47480__$1 = state_47480;
var statearr_47488_49751 = state_47480__$1;
(statearr_47488_49751[(2)] = null);

(statearr_47488_49751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (2))){
var state_47480__$1 = state_47480;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47480__$1,(4),from);
} else {
if((state_val_47481 === (11))){
var inst_47469 = (state_47480[(2)]);
var state_47480__$1 = state_47480;
if(cljs.core.truth_(inst_47469)){
var statearr_47494_49752 = state_47480__$1;
(statearr_47494_49752[(1)] = (12));

} else {
var statearr_47496_49753 = state_47480__$1;
(statearr_47496_49753[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (9))){
var state_47480__$1 = state_47480;
var statearr_47497_49754 = state_47480__$1;
(statearr_47497_49754[(2)] = null);

(statearr_47497_49754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (5))){
var state_47480__$1 = state_47480;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47498_49755 = state_47480__$1;
(statearr_47498_49755[(1)] = (8));

} else {
var statearr_47499_49756 = state_47480__$1;
(statearr_47499_49756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (14))){
var inst_47474 = (state_47480[(2)]);
var state_47480__$1 = state_47480;
var statearr_47500_49757 = state_47480__$1;
(statearr_47500_49757[(2)] = inst_47474);

(statearr_47500_49757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (10))){
var inst_47466 = (state_47480[(2)]);
var state_47480__$1 = state_47480;
var statearr_47502_49758 = state_47480__$1;
(statearr_47502_49758[(2)] = inst_47466);

(statearr_47502_49758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (8))){
var inst_47463 = cljs.core.async.close_BANG_(to);
var state_47480__$1 = state_47480;
var statearr_47505_49759 = state_47480__$1;
(statearr_47505_49759[(2)] = inst_47463);

(statearr_47505_49759[(1)] = (10));


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
var cljs$core$async$state_machine__47247__auto__ = null;
var cljs$core$async$state_machine__47247__auto____0 = (function (){
var statearr_47507 = [null,null,null,null,null,null,null,null];
(statearr_47507[(0)] = cljs$core$async$state_machine__47247__auto__);

(statearr_47507[(1)] = (1));

return statearr_47507;
});
var cljs$core$async$state_machine__47247__auto____1 = (function (state_47480){
while(true){
var ret_value__47248__auto__ = (function (){try{while(true){
var result__47249__auto__ = switch__47246__auto__(state_47480);
if(cljs.core.keyword_identical_QMARK_(result__47249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47249__auto__;
}
break;
}
}catch (e47508){var ex__47250__auto__ = e47508;
var statearr_47510_49760 = state_47480;
(statearr_47510_49760[(2)] = ex__47250__auto__);


if(cljs.core.seq((state_47480[(4)]))){
var statearr_47511_49761 = state_47480;
(statearr_47511_49761[(1)] = cljs.core.first((state_47480[(4)])));

} else {
throw ex__47250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49762 = state_47480;
state_47480 = G__49762;
continue;
} else {
return ret_value__47248__auto__;
}
break;
}
});
cljs$core$async$state_machine__47247__auto__ = function(state_47480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47247__auto____1.call(this,state_47480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47247__auto____0;
cljs$core$async$state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47247__auto____1;
return cljs$core$async$state_machine__47247__auto__;
})()
})();
var state__47339__auto__ = (function (){var statearr_47518 = f__47338__auto__();
(statearr_47518[(6)] = c__47337__auto___49745);

return statearr_47518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47339__auto__);
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
var process = (function (p__47535){
var vec__47536 = p__47535;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47536,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47536,(1),null);
var job = vec__47536;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__47337__auto___49763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47338__auto__ = (function (){var switch__47246__auto__ = (function (state_47557){
var state_val_47558 = (state_47557[(1)]);
if((state_val_47558 === (1))){
var state_47557__$1 = state_47557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47557__$1,(2),res,v);
} else {
if((state_val_47558 === (2))){
var inst_47554 = (state_47557[(2)]);
var inst_47555 = cljs.core.async.close_BANG_(res);
var state_47557__$1 = (function (){var statearr_47565 = state_47557;
(statearr_47565[(7)] = inst_47554);

return statearr_47565;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47557__$1,inst_47555);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____0 = (function (){
var statearr_47570 = [null,null,null,null,null,null,null,null];
(statearr_47570[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__);

(statearr_47570[(1)] = (1));

return statearr_47570;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____1 = (function (state_47557){
while(true){
var ret_value__47248__auto__ = (function (){try{while(true){
var result__47249__auto__ = switch__47246__auto__(state_47557);
if(cljs.core.keyword_identical_QMARK_(result__47249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47249__auto__;
}
break;
}
}catch (e47576){var ex__47250__auto__ = e47576;
var statearr_47577_49770 = state_47557;
(statearr_47577_49770[(2)] = ex__47250__auto__);


if(cljs.core.seq((state_47557[(4)]))){
var statearr_47578_49771 = state_47557;
(statearr_47578_49771[(1)] = cljs.core.first((state_47557[(4)])));

} else {
throw ex__47250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49772 = state_47557;
state_47557 = G__49772;
continue;
} else {
return ret_value__47248__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__ = function(state_47557){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____1.call(this,state_47557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__;
})()
})();
var state__47339__auto__ = (function (){var statearr_47580 = f__47338__auto__();
(statearr_47580[(6)] = c__47337__auto___49763);

return statearr_47580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47339__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__47581){
var vec__47585 = p__47581;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47585,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47585,(1),null);
var job = vec__47585;
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
var n__4706__auto___49773 = n;
var __49774 = (0);
while(true){
if((__49774 < n__4706__auto___49773)){
var G__47594_49775 = type;
var G__47594_49776__$1 = (((G__47594_49775 instanceof cljs.core.Keyword))?G__47594_49775.fqn:null);
switch (G__47594_49776__$1) {
case "compute":
var c__47337__auto___49779 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49774,c__47337__auto___49779,G__47594_49775,G__47594_49776__$1,n__4706__auto___49773,jobs,results,process,async){
return (function (){
var f__47338__auto__ = (function (){var switch__47246__auto__ = ((function (__49774,c__47337__auto___49779,G__47594_49775,G__47594_49776__$1,n__4706__auto___49773,jobs,results,process,async){
return (function (state_47611){
var state_val_47612 = (state_47611[(1)]);
if((state_val_47612 === (1))){
var state_47611__$1 = state_47611;
var statearr_47616_49780 = state_47611__$1;
(statearr_47616_49780[(2)] = null);

(statearr_47616_49780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47612 === (2))){
var state_47611__$1 = state_47611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47611__$1,(4),jobs);
} else {
if((state_val_47612 === (3))){
var inst_47609 = (state_47611[(2)]);
var state_47611__$1 = state_47611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47611__$1,inst_47609);
} else {
if((state_val_47612 === (4))){
var inst_47601 = (state_47611[(2)]);
var inst_47602 = process(inst_47601);
var state_47611__$1 = state_47611;
if(cljs.core.truth_(inst_47602)){
var statearr_47619_49781 = state_47611__$1;
(statearr_47619_49781[(1)] = (5));

} else {
var statearr_47621_49782 = state_47611__$1;
(statearr_47621_49782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47612 === (5))){
var state_47611__$1 = state_47611;
var statearr_47623_49783 = state_47611__$1;
(statearr_47623_49783[(2)] = null);

(statearr_47623_49783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47612 === (6))){
var state_47611__$1 = state_47611;
var statearr_47627_49784 = state_47611__$1;
(statearr_47627_49784[(2)] = null);

(statearr_47627_49784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47612 === (7))){
var inst_47607 = (state_47611[(2)]);
var state_47611__$1 = state_47611;
var statearr_47629_49785 = state_47611__$1;
(statearr_47629_49785[(2)] = inst_47607);

(statearr_47629_49785[(1)] = (3));


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
});})(__49774,c__47337__auto___49779,G__47594_49775,G__47594_49776__$1,n__4706__auto___49773,jobs,results,process,async))
;
return ((function (__49774,switch__47246__auto__,c__47337__auto___49779,G__47594_49775,G__47594_49776__$1,n__4706__auto___49773,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____0 = (function (){
var statearr_47637 = [null,null,null,null,null,null,null];
(statearr_47637[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__);

(statearr_47637[(1)] = (1));

return statearr_47637;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____1 = (function (state_47611){
while(true){
var ret_value__47248__auto__ = (function (){try{while(true){
var result__47249__auto__ = switch__47246__auto__(state_47611);
if(cljs.core.keyword_identical_QMARK_(result__47249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47249__auto__;
}
break;
}
}catch (e47639){var ex__47250__auto__ = e47639;
var statearr_47641_49786 = state_47611;
(statearr_47641_49786[(2)] = ex__47250__auto__);


if(cljs.core.seq((state_47611[(4)]))){
var statearr_47644_49787 = state_47611;
(statearr_47644_49787[(1)] = cljs.core.first((state_47611[(4)])));

} else {
throw ex__47250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49788 = state_47611;
state_47611 = G__49788;
continue;
} else {
return ret_value__47248__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__ = function(state_47611){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____1.call(this,state_47611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__;
})()
;})(__49774,switch__47246__auto__,c__47337__auto___49779,G__47594_49775,G__47594_49776__$1,n__4706__auto___49773,jobs,results,process,async))
})();
var state__47339__auto__ = (function (){var statearr_47652 = f__47338__auto__();
(statearr_47652[(6)] = c__47337__auto___49779);

return statearr_47652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47339__auto__);
});})(__49774,c__47337__auto___49779,G__47594_49775,G__47594_49776__$1,n__4706__auto___49773,jobs,results,process,async))
);


break;
case "async":
var c__47337__auto___49789 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49774,c__47337__auto___49789,G__47594_49775,G__47594_49776__$1,n__4706__auto___49773,jobs,results,process,async){
return (function (){
var f__47338__auto__ = (function (){var switch__47246__auto__ = ((function (__49774,c__47337__auto___49789,G__47594_49775,G__47594_49776__$1,n__4706__auto___49773,jobs,results,process,async){
return (function (state_47666){
var state_val_47667 = (state_47666[(1)]);
if((state_val_47667 === (1))){
var state_47666__$1 = state_47666;
var statearr_47669_49790 = state_47666__$1;
(statearr_47669_49790[(2)] = null);

(statearr_47669_49790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47667 === (2))){
var state_47666__$1 = state_47666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47666__$1,(4),jobs);
} else {
if((state_val_47667 === (3))){
var inst_47664 = (state_47666[(2)]);
var state_47666__$1 = state_47666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47666__$1,inst_47664);
} else {
if((state_val_47667 === (4))){
var inst_47656 = (state_47666[(2)]);
var inst_47657 = async(inst_47656);
var state_47666__$1 = state_47666;
if(cljs.core.truth_(inst_47657)){
var statearr_47676_49792 = state_47666__$1;
(statearr_47676_49792[(1)] = (5));

} else {
var statearr_47677_49793 = state_47666__$1;
(statearr_47677_49793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47667 === (5))){
var state_47666__$1 = state_47666;
var statearr_47679_49794 = state_47666__$1;
(statearr_47679_49794[(2)] = null);

(statearr_47679_49794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47667 === (6))){
var state_47666__$1 = state_47666;
var statearr_47680_49795 = state_47666__$1;
(statearr_47680_49795[(2)] = null);

(statearr_47680_49795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47667 === (7))){
var inst_47662 = (state_47666[(2)]);
var state_47666__$1 = state_47666;
var statearr_47683_49797 = state_47666__$1;
(statearr_47683_49797[(2)] = inst_47662);

(statearr_47683_49797[(1)] = (3));


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
});})(__49774,c__47337__auto___49789,G__47594_49775,G__47594_49776__$1,n__4706__auto___49773,jobs,results,process,async))
;
return ((function (__49774,switch__47246__auto__,c__47337__auto___49789,G__47594_49775,G__47594_49776__$1,n__4706__auto___49773,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____0 = (function (){
var statearr_47697 = [null,null,null,null,null,null,null];
(statearr_47697[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__);

(statearr_47697[(1)] = (1));

return statearr_47697;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____1 = (function (state_47666){
while(true){
var ret_value__47248__auto__ = (function (){try{while(true){
var result__47249__auto__ = switch__47246__auto__(state_47666);
if(cljs.core.keyword_identical_QMARK_(result__47249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47249__auto__;
}
break;
}
}catch (e47698){var ex__47250__auto__ = e47698;
var statearr_47699_49799 = state_47666;
(statearr_47699_49799[(2)] = ex__47250__auto__);


if(cljs.core.seq((state_47666[(4)]))){
var statearr_47700_49800 = state_47666;
(statearr_47700_49800[(1)] = cljs.core.first((state_47666[(4)])));

} else {
throw ex__47250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49801 = state_47666;
state_47666 = G__49801;
continue;
} else {
return ret_value__47248__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__ = function(state_47666){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____1.call(this,state_47666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__;
})()
;})(__49774,switch__47246__auto__,c__47337__auto___49789,G__47594_49775,G__47594_49776__$1,n__4706__auto___49773,jobs,results,process,async))
})();
var state__47339__auto__ = (function (){var statearr_47702 = f__47338__auto__();
(statearr_47702[(6)] = c__47337__auto___49789);

return statearr_47702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47339__auto__);
});})(__49774,c__47337__auto___49789,G__47594_49775,G__47594_49776__$1,n__4706__auto___49773,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47594_49776__$1)].join('')));

}

var G__49802 = (__49774 + (1));
__49774 = G__49802;
continue;
} else {
}
break;
}

var c__47337__auto___49803 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47338__auto__ = (function (){var switch__47246__auto__ = (function (state_47731){
var state_val_47732 = (state_47731[(1)]);
if((state_val_47732 === (7))){
var inst_47727 = (state_47731[(2)]);
var state_47731__$1 = state_47731;
var statearr_47737_49804 = state_47731__$1;
(statearr_47737_49804[(2)] = inst_47727);

(statearr_47737_49804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47732 === (1))){
var state_47731__$1 = state_47731;
var statearr_47740_49805 = state_47731__$1;
(statearr_47740_49805[(2)] = null);

(statearr_47740_49805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47732 === (4))){
var inst_47706 = (state_47731[(7)]);
var inst_47706__$1 = (state_47731[(2)]);
var inst_47707 = (inst_47706__$1 == null);
var state_47731__$1 = (function (){var statearr_47741 = state_47731;
(statearr_47741[(7)] = inst_47706__$1);

return statearr_47741;
})();
if(cljs.core.truth_(inst_47707)){
var statearr_47742_49806 = state_47731__$1;
(statearr_47742_49806[(1)] = (5));

} else {
var statearr_47743_49807 = state_47731__$1;
(statearr_47743_49807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47732 === (6))){
var inst_47706 = (state_47731[(7)]);
var inst_47712 = (state_47731[(8)]);
var inst_47712__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_47716 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47719 = [inst_47706,inst_47712__$1];
var inst_47720 = (new cljs.core.PersistentVector(null,2,(5),inst_47716,inst_47719,null));
var state_47731__$1 = (function (){var statearr_47744 = state_47731;
(statearr_47744[(8)] = inst_47712__$1);

return statearr_47744;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47731__$1,(8),jobs,inst_47720);
} else {
if((state_val_47732 === (3))){
var inst_47729 = (state_47731[(2)]);
var state_47731__$1 = state_47731;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47731__$1,inst_47729);
} else {
if((state_val_47732 === (2))){
var state_47731__$1 = state_47731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47731__$1,(4),from);
} else {
if((state_val_47732 === (9))){
var inst_47724 = (state_47731[(2)]);
var state_47731__$1 = (function (){var statearr_47746 = state_47731;
(statearr_47746[(9)] = inst_47724);

return statearr_47746;
})();
var statearr_47747_49810 = state_47731__$1;
(statearr_47747_49810[(2)] = null);

(statearr_47747_49810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47732 === (5))){
var inst_47710 = cljs.core.async.close_BANG_(jobs);
var state_47731__$1 = state_47731;
var statearr_47748_49814 = state_47731__$1;
(statearr_47748_49814[(2)] = inst_47710);

(statearr_47748_49814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47732 === (8))){
var inst_47712 = (state_47731[(8)]);
var inst_47722 = (state_47731[(2)]);
var state_47731__$1 = (function (){var statearr_47751 = state_47731;
(statearr_47751[(10)] = inst_47722);

return statearr_47751;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47731__$1,(9),results,inst_47712);
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
var cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____0 = (function (){
var statearr_47753 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47753[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__);

(statearr_47753[(1)] = (1));

return statearr_47753;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____1 = (function (state_47731){
while(true){
var ret_value__47248__auto__ = (function (){try{while(true){
var result__47249__auto__ = switch__47246__auto__(state_47731);
if(cljs.core.keyword_identical_QMARK_(result__47249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47249__auto__;
}
break;
}
}catch (e47754){var ex__47250__auto__ = e47754;
var statearr_47755_49815 = state_47731;
(statearr_47755_49815[(2)] = ex__47250__auto__);


if(cljs.core.seq((state_47731[(4)]))){
var statearr_47756_49816 = state_47731;
(statearr_47756_49816[(1)] = cljs.core.first((state_47731[(4)])));

} else {
throw ex__47250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49817 = state_47731;
state_47731 = G__49817;
continue;
} else {
return ret_value__47248__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__ = function(state_47731){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____1.call(this,state_47731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__;
})()
})();
var state__47339__auto__ = (function (){var statearr_47757 = f__47338__auto__();
(statearr_47757[(6)] = c__47337__auto___49803);

return statearr_47757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47339__auto__);
}));


var c__47337__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47338__auto__ = (function (){var switch__47246__auto__ = (function (state_47797){
var state_val_47798 = (state_47797[(1)]);
if((state_val_47798 === (7))){
var inst_47793 = (state_47797[(2)]);
var state_47797__$1 = state_47797;
var statearr_47803_49818 = state_47797__$1;
(statearr_47803_49818[(2)] = inst_47793);

(statearr_47803_49818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (20))){
var state_47797__$1 = state_47797;
var statearr_47804_49820 = state_47797__$1;
(statearr_47804_49820[(2)] = null);

(statearr_47804_49820[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (1))){
var state_47797__$1 = state_47797;
var statearr_47805_49821 = state_47797__$1;
(statearr_47805_49821[(2)] = null);

(statearr_47805_49821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (4))){
var inst_47760 = (state_47797[(7)]);
var inst_47760__$1 = (state_47797[(2)]);
var inst_47761 = (inst_47760__$1 == null);
var state_47797__$1 = (function (){var statearr_47808 = state_47797;
(statearr_47808[(7)] = inst_47760__$1);

return statearr_47808;
})();
if(cljs.core.truth_(inst_47761)){
var statearr_47809_49822 = state_47797__$1;
(statearr_47809_49822[(1)] = (5));

} else {
var statearr_47811_49823 = state_47797__$1;
(statearr_47811_49823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (15))){
var inst_47775 = (state_47797[(8)]);
var state_47797__$1 = state_47797;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47797__$1,(18),to,inst_47775);
} else {
if((state_val_47798 === (21))){
var inst_47788 = (state_47797[(2)]);
var state_47797__$1 = state_47797;
var statearr_47815_49828 = state_47797__$1;
(statearr_47815_49828[(2)] = inst_47788);

(statearr_47815_49828[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (13))){
var inst_47790 = (state_47797[(2)]);
var state_47797__$1 = (function (){var statearr_47816 = state_47797;
(statearr_47816[(9)] = inst_47790);

return statearr_47816;
})();
var statearr_47817_49829 = state_47797__$1;
(statearr_47817_49829[(2)] = null);

(statearr_47817_49829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (6))){
var inst_47760 = (state_47797[(7)]);
var state_47797__$1 = state_47797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47797__$1,(11),inst_47760);
} else {
if((state_val_47798 === (17))){
var inst_47783 = (state_47797[(2)]);
var state_47797__$1 = state_47797;
if(cljs.core.truth_(inst_47783)){
var statearr_47818_49831 = state_47797__$1;
(statearr_47818_49831[(1)] = (19));

} else {
var statearr_47819_49832 = state_47797__$1;
(statearr_47819_49832[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (3))){
var inst_47795 = (state_47797[(2)]);
var state_47797__$1 = state_47797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47797__$1,inst_47795);
} else {
if((state_val_47798 === (12))){
var inst_47771 = (state_47797[(10)]);
var state_47797__$1 = state_47797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47797__$1,(14),inst_47771);
} else {
if((state_val_47798 === (2))){
var state_47797__$1 = state_47797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47797__$1,(4),results);
} else {
if((state_val_47798 === (19))){
var state_47797__$1 = state_47797;
var statearr_47820_49833 = state_47797__$1;
(statearr_47820_49833[(2)] = null);

(statearr_47820_49833[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (11))){
var inst_47771 = (state_47797[(2)]);
var state_47797__$1 = (function (){var statearr_47821 = state_47797;
(statearr_47821[(10)] = inst_47771);

return statearr_47821;
})();
var statearr_47822_49834 = state_47797__$1;
(statearr_47822_49834[(2)] = null);

(statearr_47822_49834[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (9))){
var state_47797__$1 = state_47797;
var statearr_47823_49835 = state_47797__$1;
(statearr_47823_49835[(2)] = null);

(statearr_47823_49835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (5))){
var state_47797__$1 = state_47797;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47825_49836 = state_47797__$1;
(statearr_47825_49836[(1)] = (8));

} else {
var statearr_47826_49837 = state_47797__$1;
(statearr_47826_49837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (14))){
var inst_47777 = (state_47797[(11)]);
var inst_47775 = (state_47797[(8)]);
var inst_47775__$1 = (state_47797[(2)]);
var inst_47776 = (inst_47775__$1 == null);
var inst_47777__$1 = cljs.core.not(inst_47776);
var state_47797__$1 = (function (){var statearr_47827 = state_47797;
(statearr_47827[(11)] = inst_47777__$1);

(statearr_47827[(8)] = inst_47775__$1);

return statearr_47827;
})();
if(inst_47777__$1){
var statearr_47828_49838 = state_47797__$1;
(statearr_47828_49838[(1)] = (15));

} else {
var statearr_47829_49839 = state_47797__$1;
(statearr_47829_49839[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (16))){
var inst_47777 = (state_47797[(11)]);
var state_47797__$1 = state_47797;
var statearr_47838_49840 = state_47797__$1;
(statearr_47838_49840[(2)] = inst_47777);

(statearr_47838_49840[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (10))){
var inst_47767 = (state_47797[(2)]);
var state_47797__$1 = state_47797;
var statearr_47839_49841 = state_47797__$1;
(statearr_47839_49841[(2)] = inst_47767);

(statearr_47839_49841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (18))){
var inst_47780 = (state_47797[(2)]);
var state_47797__$1 = state_47797;
var statearr_47840_49844 = state_47797__$1;
(statearr_47840_49844[(2)] = inst_47780);

(statearr_47840_49844[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47798 === (8))){
var inst_47764 = cljs.core.async.close_BANG_(to);
var state_47797__$1 = state_47797;
var statearr_47841_49846 = state_47797__$1;
(statearr_47841_49846[(2)] = inst_47764);

(statearr_47841_49846[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____0 = (function (){
var statearr_47843 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47843[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__);

(statearr_47843[(1)] = (1));

return statearr_47843;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____1 = (function (state_47797){
while(true){
var ret_value__47248__auto__ = (function (){try{while(true){
var result__47249__auto__ = switch__47246__auto__(state_47797);
if(cljs.core.keyword_identical_QMARK_(result__47249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47249__auto__;
}
break;
}
}catch (e47847){var ex__47250__auto__ = e47847;
var statearr_47848_49847 = state_47797;
(statearr_47848_49847[(2)] = ex__47250__auto__);


if(cljs.core.seq((state_47797[(4)]))){
var statearr_47849_49849 = state_47797;
(statearr_47849_49849[(1)] = cljs.core.first((state_47797[(4)])));

} else {
throw ex__47250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49850 = state_47797;
state_47797 = G__49850;
continue;
} else {
return ret_value__47248__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__ = function(state_47797){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____1.call(this,state_47797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47247__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47247__auto__;
})()
})();
var state__47339__auto__ = (function (){var statearr_47853 = f__47338__auto__();
(statearr_47853[(6)] = c__47337__auto__);

return statearr_47853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47339__auto__);
}));

return c__47337__auto__;
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
var G__47856 = arguments.length;
switch (G__47856) {
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
var G__47864 = arguments.length;
switch (G__47864) {
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
var G__47866 = arguments.length;
switch (G__47866) {
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
var c__47337__auto___49863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47338__auto__ = (function (){var switch__47246__auto__ = (function (state_47924){
var state_val_47925 = (state_47924[(1)]);
if((state_val_47925 === (7))){
var inst_47920 = (state_47924[(2)]);
var state_47924__$1 = state_47924;
var statearr_47926_49878 = state_47924__$1;
(statearr_47926_49878[(2)] = inst_47920);

(statearr_47926_49878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47925 === (1))){
var state_47924__$1 = state_47924;
var statearr_47927_49884 = state_47924__$1;
(statearr_47927_49884[(2)] = null);

(statearr_47927_49884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47925 === (4))){
var inst_47877 = (state_47924[(7)]);
var inst_47877__$1 = (state_47924[(2)]);
var inst_47878 = (inst_47877__$1 == null);
var state_47924__$1 = (function (){var statearr_47929 = state_47924;
(statearr_47929[(7)] = inst_47877__$1);

return statearr_47929;
})();
if(cljs.core.truth_(inst_47878)){
var statearr_47930_49893 = state_47924__$1;
(statearr_47930_49893[(1)] = (5));

} else {
var statearr_47931_49895 = state_47924__$1;
(statearr_47931_49895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47925 === (13))){
var state_47924__$1 = state_47924;
var statearr_47932_49900 = state_47924__$1;
(statearr_47932_49900[(2)] = null);

(statearr_47932_49900[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47925 === (6))){
var inst_47877 = (state_47924[(7)]);
var inst_47907 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47877) : p.call(null,inst_47877));
var state_47924__$1 = state_47924;
if(cljs.core.truth_(inst_47907)){
var statearr_47936_49908 = state_47924__$1;
(statearr_47936_49908[(1)] = (9));

} else {
var statearr_47939_49910 = state_47924__$1;
(statearr_47939_49910[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47925 === (3))){
var inst_47922 = (state_47924[(2)]);
var state_47924__$1 = state_47924;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47924__$1,inst_47922);
} else {
if((state_val_47925 === (12))){
var state_47924__$1 = state_47924;
var statearr_47940_49915 = state_47924__$1;
(statearr_47940_49915[(2)] = null);

(statearr_47940_49915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47925 === (2))){
var state_47924__$1 = state_47924;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47924__$1,(4),ch);
} else {
if((state_val_47925 === (11))){
var inst_47877 = (state_47924[(7)]);
var inst_47911 = (state_47924[(2)]);
var state_47924__$1 = state_47924;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47924__$1,(8),inst_47911,inst_47877);
} else {
if((state_val_47925 === (9))){
var state_47924__$1 = state_47924;
var statearr_47944_49917 = state_47924__$1;
(statearr_47944_49917[(2)] = tc);

(statearr_47944_49917[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47925 === (5))){
var inst_47892 = cljs.core.async.close_BANG_(tc);
var inst_47898 = cljs.core.async.close_BANG_(fc);
var state_47924__$1 = (function (){var statearr_47945 = state_47924;
(statearr_47945[(8)] = inst_47892);

return statearr_47945;
})();
var statearr_47946_49918 = state_47924__$1;
(statearr_47946_49918[(2)] = inst_47898);

(statearr_47946_49918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47925 === (14))){
var inst_47918 = (state_47924[(2)]);
var state_47924__$1 = state_47924;
var statearr_47947_49919 = state_47924__$1;
(statearr_47947_49919[(2)] = inst_47918);

(statearr_47947_49919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47925 === (10))){
var state_47924__$1 = state_47924;
var statearr_47948_49920 = state_47924__$1;
(statearr_47948_49920[(2)] = fc);

(statearr_47948_49920[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47925 === (8))){
var inst_47913 = (state_47924[(2)]);
var state_47924__$1 = state_47924;
if(cljs.core.truth_(inst_47913)){
var statearr_47949_49925 = state_47924__$1;
(statearr_47949_49925[(1)] = (12));

} else {
var statearr_47950_49926 = state_47924__$1;
(statearr_47950_49926[(1)] = (13));

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
var cljs$core$async$state_machine__47247__auto__ = null;
var cljs$core$async$state_machine__47247__auto____0 = (function (){
var statearr_47951 = [null,null,null,null,null,null,null,null,null];
(statearr_47951[(0)] = cljs$core$async$state_machine__47247__auto__);

(statearr_47951[(1)] = (1));

return statearr_47951;
});
var cljs$core$async$state_machine__47247__auto____1 = (function (state_47924){
while(true){
var ret_value__47248__auto__ = (function (){try{while(true){
var result__47249__auto__ = switch__47246__auto__(state_47924);
if(cljs.core.keyword_identical_QMARK_(result__47249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47249__auto__;
}
break;
}
}catch (e47952){var ex__47250__auto__ = e47952;
var statearr_47953_49928 = state_47924;
(statearr_47953_49928[(2)] = ex__47250__auto__);


if(cljs.core.seq((state_47924[(4)]))){
var statearr_47954_49929 = state_47924;
(statearr_47954_49929[(1)] = cljs.core.first((state_47924[(4)])));

} else {
throw ex__47250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49930 = state_47924;
state_47924 = G__49930;
continue;
} else {
return ret_value__47248__auto__;
}
break;
}
});
cljs$core$async$state_machine__47247__auto__ = function(state_47924){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47247__auto____1.call(this,state_47924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47247__auto____0;
cljs$core$async$state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47247__auto____1;
return cljs$core$async$state_machine__47247__auto__;
})()
})();
var state__47339__auto__ = (function (){var statearr_47955 = f__47338__auto__();
(statearr_47955[(6)] = c__47337__auto___49863);

return statearr_47955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47339__auto__);
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
var c__47337__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47338__auto__ = (function (){var switch__47246__auto__ = (function (state_47977){
var state_val_47978 = (state_47977[(1)]);
if((state_val_47978 === (7))){
var inst_47973 = (state_47977[(2)]);
var state_47977__$1 = state_47977;
var statearr_47979_49931 = state_47977__$1;
(statearr_47979_49931[(2)] = inst_47973);

(statearr_47979_49931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (1))){
var inst_47956 = init;
var inst_47957 = inst_47956;
var state_47977__$1 = (function (){var statearr_47980 = state_47977;
(statearr_47980[(7)] = inst_47957);

return statearr_47980;
})();
var statearr_47981_49932 = state_47977__$1;
(statearr_47981_49932[(2)] = null);

(statearr_47981_49932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (4))){
var inst_47960 = (state_47977[(8)]);
var inst_47960__$1 = (state_47977[(2)]);
var inst_47961 = (inst_47960__$1 == null);
var state_47977__$1 = (function (){var statearr_47982 = state_47977;
(statearr_47982[(8)] = inst_47960__$1);

return statearr_47982;
})();
if(cljs.core.truth_(inst_47961)){
var statearr_47983_49933 = state_47977__$1;
(statearr_47983_49933[(1)] = (5));

} else {
var statearr_47984_49935 = state_47977__$1;
(statearr_47984_49935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (6))){
var inst_47964 = (state_47977[(9)]);
var inst_47960 = (state_47977[(8)]);
var inst_47957 = (state_47977[(7)]);
var inst_47964__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_47957,inst_47960) : f.call(null,inst_47957,inst_47960));
var inst_47965 = cljs.core.reduced_QMARK_(inst_47964__$1);
var state_47977__$1 = (function (){var statearr_47985 = state_47977;
(statearr_47985[(9)] = inst_47964__$1);

return statearr_47985;
})();
if(inst_47965){
var statearr_47986_49937 = state_47977__$1;
(statearr_47986_49937[(1)] = (8));

} else {
var statearr_47987_49939 = state_47977__$1;
(statearr_47987_49939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (3))){
var inst_47975 = (state_47977[(2)]);
var state_47977__$1 = state_47977;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47977__$1,inst_47975);
} else {
if((state_val_47978 === (2))){
var state_47977__$1 = state_47977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47977__$1,(4),ch);
} else {
if((state_val_47978 === (9))){
var inst_47964 = (state_47977[(9)]);
var inst_47957 = inst_47964;
var state_47977__$1 = (function (){var statearr_47988 = state_47977;
(statearr_47988[(7)] = inst_47957);

return statearr_47988;
})();
var statearr_47989_49944 = state_47977__$1;
(statearr_47989_49944[(2)] = null);

(statearr_47989_49944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (5))){
var inst_47957 = (state_47977[(7)]);
var state_47977__$1 = state_47977;
var statearr_47990_49945 = state_47977__$1;
(statearr_47990_49945[(2)] = inst_47957);

(statearr_47990_49945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (10))){
var inst_47971 = (state_47977[(2)]);
var state_47977__$1 = state_47977;
var statearr_47991_49947 = state_47977__$1;
(statearr_47991_49947[(2)] = inst_47971);

(statearr_47991_49947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (8))){
var inst_47964 = (state_47977[(9)]);
var inst_47967 = cljs.core.deref(inst_47964);
var state_47977__$1 = state_47977;
var statearr_47992_49948 = state_47977__$1;
(statearr_47992_49948[(2)] = inst_47967);

(statearr_47992_49948[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__47247__auto__ = null;
var cljs$core$async$reduce_$_state_machine__47247__auto____0 = (function (){
var statearr_47993 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47993[(0)] = cljs$core$async$reduce_$_state_machine__47247__auto__);

(statearr_47993[(1)] = (1));

return statearr_47993;
});
var cljs$core$async$reduce_$_state_machine__47247__auto____1 = (function (state_47977){
while(true){
var ret_value__47248__auto__ = (function (){try{while(true){
var result__47249__auto__ = switch__47246__auto__(state_47977);
if(cljs.core.keyword_identical_QMARK_(result__47249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47249__auto__;
}
break;
}
}catch (e47994){var ex__47250__auto__ = e47994;
var statearr_47995_49949 = state_47977;
(statearr_47995_49949[(2)] = ex__47250__auto__);


if(cljs.core.seq((state_47977[(4)]))){
var statearr_47997_49951 = state_47977;
(statearr_47997_49951[(1)] = cljs.core.first((state_47977[(4)])));

} else {
throw ex__47250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49952 = state_47977;
state_47977 = G__49952;
continue;
} else {
return ret_value__47248__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__47247__auto__ = function(state_47977){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__47247__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__47247__auto____1.call(this,state_47977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__47247__auto____0;
cljs$core$async$reduce_$_state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__47247__auto____1;
return cljs$core$async$reduce_$_state_machine__47247__auto__;
})()
})();
var state__47339__auto__ = (function (){var statearr_47999 = f__47338__auto__();
(statearr_47999[(6)] = c__47337__auto__);

return statearr_47999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47339__auto__);
}));

return c__47337__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__47337__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47338__auto__ = (function (){var switch__47246__auto__ = (function (state_48007){
var state_val_48008 = (state_48007[(1)]);
if((state_val_48008 === (1))){
var inst_48002 = cljs.core.async.reduce(f__$1,init,ch);
var state_48007__$1 = state_48007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48007__$1,(2),inst_48002);
} else {
if((state_val_48008 === (2))){
var inst_48004 = (state_48007[(2)]);
var inst_48005 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_48004) : f__$1.call(null,inst_48004));
var state_48007__$1 = state_48007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48007__$1,inst_48005);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__47247__auto__ = null;
var cljs$core$async$transduce_$_state_machine__47247__auto____0 = (function (){
var statearr_48013 = [null,null,null,null,null,null,null];
(statearr_48013[(0)] = cljs$core$async$transduce_$_state_machine__47247__auto__);

(statearr_48013[(1)] = (1));

return statearr_48013;
});
var cljs$core$async$transduce_$_state_machine__47247__auto____1 = (function (state_48007){
while(true){
var ret_value__47248__auto__ = (function (){try{while(true){
var result__47249__auto__ = switch__47246__auto__(state_48007);
if(cljs.core.keyword_identical_QMARK_(result__47249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47249__auto__;
}
break;
}
}catch (e48014){var ex__47250__auto__ = e48014;
var statearr_48015_49953 = state_48007;
(statearr_48015_49953[(2)] = ex__47250__auto__);


if(cljs.core.seq((state_48007[(4)]))){
var statearr_48016_49954 = state_48007;
(statearr_48016_49954[(1)] = cljs.core.first((state_48007[(4)])));

} else {
throw ex__47250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49955 = state_48007;
state_48007 = G__49955;
continue;
} else {
return ret_value__47248__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__47247__auto__ = function(state_48007){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__47247__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__47247__auto____1.call(this,state_48007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__47247__auto____0;
cljs$core$async$transduce_$_state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__47247__auto____1;
return cljs$core$async$transduce_$_state_machine__47247__auto__;
})()
})();
var state__47339__auto__ = (function (){var statearr_48017 = f__47338__auto__();
(statearr_48017[(6)] = c__47337__auto__);

return statearr_48017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47339__auto__);
}));

return c__47337__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__48020 = arguments.length;
switch (G__48020) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__47337__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47338__auto__ = (function (){var switch__47246__auto__ = (function (state_48049){
var state_val_48050 = (state_48049[(1)]);
if((state_val_48050 === (7))){
var inst_48031 = (state_48049[(2)]);
var state_48049__$1 = state_48049;
var statearr_48051_49960 = state_48049__$1;
(statearr_48051_49960[(2)] = inst_48031);

(statearr_48051_49960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (1))){
var inst_48025 = cljs.core.seq(coll);
var inst_48026 = inst_48025;
var state_48049__$1 = (function (){var statearr_48052 = state_48049;
(statearr_48052[(7)] = inst_48026);

return statearr_48052;
})();
var statearr_48053_49962 = state_48049__$1;
(statearr_48053_49962[(2)] = null);

(statearr_48053_49962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (4))){
var inst_48026 = (state_48049[(7)]);
var inst_48029 = cljs.core.first(inst_48026);
var state_48049__$1 = state_48049;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48049__$1,(7),ch,inst_48029);
} else {
if((state_val_48050 === (13))){
var inst_48043 = (state_48049[(2)]);
var state_48049__$1 = state_48049;
var statearr_48054_49963 = state_48049__$1;
(statearr_48054_49963[(2)] = inst_48043);

(statearr_48054_49963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (6))){
var inst_48034 = (state_48049[(2)]);
var state_48049__$1 = state_48049;
if(cljs.core.truth_(inst_48034)){
var statearr_48055_49964 = state_48049__$1;
(statearr_48055_49964[(1)] = (8));

} else {
var statearr_48056_49965 = state_48049__$1;
(statearr_48056_49965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (3))){
var inst_48047 = (state_48049[(2)]);
var state_48049__$1 = state_48049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48049__$1,inst_48047);
} else {
if((state_val_48050 === (12))){
var state_48049__$1 = state_48049;
var statearr_48061_49966 = state_48049__$1;
(statearr_48061_49966[(2)] = null);

(statearr_48061_49966[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (2))){
var inst_48026 = (state_48049[(7)]);
var state_48049__$1 = state_48049;
if(cljs.core.truth_(inst_48026)){
var statearr_48062_49973 = state_48049__$1;
(statearr_48062_49973[(1)] = (4));

} else {
var statearr_48063_49974 = state_48049__$1;
(statearr_48063_49974[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (11))){
var inst_48040 = cljs.core.async.close_BANG_(ch);
var state_48049__$1 = state_48049;
var statearr_48064_49975 = state_48049__$1;
(statearr_48064_49975[(2)] = inst_48040);

(statearr_48064_49975[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (9))){
var state_48049__$1 = state_48049;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48068_49977 = state_48049__$1;
(statearr_48068_49977[(1)] = (11));

} else {
var statearr_48069_49978 = state_48049__$1;
(statearr_48069_49978[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (5))){
var inst_48026 = (state_48049[(7)]);
var state_48049__$1 = state_48049;
var statearr_48070_49979 = state_48049__$1;
(statearr_48070_49979[(2)] = inst_48026);

(statearr_48070_49979[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (10))){
var inst_48045 = (state_48049[(2)]);
var state_48049__$1 = state_48049;
var statearr_48072_49981 = state_48049__$1;
(statearr_48072_49981[(2)] = inst_48045);

(statearr_48072_49981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48050 === (8))){
var inst_48026 = (state_48049[(7)]);
var inst_48036 = cljs.core.next(inst_48026);
var inst_48026__$1 = inst_48036;
var state_48049__$1 = (function (){var statearr_48073 = state_48049;
(statearr_48073[(7)] = inst_48026__$1);

return statearr_48073;
})();
var statearr_48074_49982 = state_48049__$1;
(statearr_48074_49982[(2)] = null);

(statearr_48074_49982[(1)] = (2));


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
var cljs$core$async$state_machine__47247__auto__ = null;
var cljs$core$async$state_machine__47247__auto____0 = (function (){
var statearr_48075 = [null,null,null,null,null,null,null,null];
(statearr_48075[(0)] = cljs$core$async$state_machine__47247__auto__);

(statearr_48075[(1)] = (1));

return statearr_48075;
});
var cljs$core$async$state_machine__47247__auto____1 = (function (state_48049){
while(true){
var ret_value__47248__auto__ = (function (){try{while(true){
var result__47249__auto__ = switch__47246__auto__(state_48049);
if(cljs.core.keyword_identical_QMARK_(result__47249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47249__auto__;
}
break;
}
}catch (e48078){var ex__47250__auto__ = e48078;
var statearr_48079_49984 = state_48049;
(statearr_48079_49984[(2)] = ex__47250__auto__);


if(cljs.core.seq((state_48049[(4)]))){
var statearr_48083_49985 = state_48049;
(statearr_48083_49985[(1)] = cljs.core.first((state_48049[(4)])));

} else {
throw ex__47250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49986 = state_48049;
state_48049 = G__49986;
continue;
} else {
return ret_value__47248__auto__;
}
break;
}
});
cljs$core$async$state_machine__47247__auto__ = function(state_48049){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47247__auto____1.call(this,state_48049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47247__auto____0;
cljs$core$async$state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47247__auto____1;
return cljs$core$async$state_machine__47247__auto__;
})()
})();
var state__47339__auto__ = (function (){var statearr_48084 = f__47338__auto__();
(statearr_48084[(6)] = c__47337__auto__);

return statearr_48084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47339__auto__);
}));

return c__47337__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__48088 = arguments.length;
switch (G__48088) {
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
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_49988 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_49988(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_49989 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_49989(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_49990 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_49990(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_49991 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_49991(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48110 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48110 = (function (ch,cs,meta48111){
this.ch = ch;
this.cs = cs;
this.meta48111 = meta48111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48112,meta48111__$1){
var self__ = this;
var _48112__$1 = this;
return (new cljs.core.async.t_cljs$core$async48110(self__.ch,self__.cs,meta48111__$1));
}));

(cljs.core.async.t_cljs$core$async48110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48112){
var self__ = this;
var _48112__$1 = this;
return self__.meta48111;
}));

(cljs.core.async.t_cljs$core$async48110.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48110.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48110.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48110.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async48110.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async48110.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async48110.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48111","meta48111",-1782008795,null)], null);
}));

(cljs.core.async.t_cljs$core$async48110.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48110");

(cljs.core.async.t_cljs$core$async48110.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async48110");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48110.
 */
cljs.core.async.__GT_t_cljs$core$async48110 = (function cljs$core$async$mult_$___GT_t_cljs$core$async48110(ch__$1,cs__$1,meta48111){
return (new cljs.core.async.t_cljs$core$async48110(ch__$1,cs__$1,meta48111));
});

}

return (new cljs.core.async.t_cljs$core$async48110(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__47337__auto___49993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47338__auto__ = (function (){var switch__47246__auto__ = (function (state_48253){
var state_val_48254 = (state_48253[(1)]);
if((state_val_48254 === (7))){
var inst_48249 = (state_48253[(2)]);
var state_48253__$1 = state_48253;
var statearr_48255_49995 = state_48253__$1;
(statearr_48255_49995[(2)] = inst_48249);

(statearr_48255_49995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (20))){
var inst_48150 = (state_48253[(7)]);
var inst_48163 = cljs.core.first(inst_48150);
var inst_48164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48163,(0),null);
var inst_48165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48163,(1),null);
var state_48253__$1 = (function (){var statearr_48256 = state_48253;
(statearr_48256[(8)] = inst_48164);

return statearr_48256;
})();
if(cljs.core.truth_(inst_48165)){
var statearr_48257_50001 = state_48253__$1;
(statearr_48257_50001[(1)] = (22));

} else {
var statearr_48258_50002 = state_48253__$1;
(statearr_48258_50002[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (27))){
var inst_48203 = (state_48253[(9)]);
var inst_48196 = (state_48253[(10)]);
var inst_48198 = (state_48253[(11)]);
var inst_48119 = (state_48253[(12)]);
var inst_48203__$1 = cljs.core._nth(inst_48196,inst_48198);
var inst_48204 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48203__$1,inst_48119,done);
var state_48253__$1 = (function (){var statearr_48261 = state_48253;
(statearr_48261[(9)] = inst_48203__$1);

return statearr_48261;
})();
if(cljs.core.truth_(inst_48204)){
var statearr_48263_50003 = state_48253__$1;
(statearr_48263_50003[(1)] = (30));

} else {
var statearr_48265_50004 = state_48253__$1;
(statearr_48265_50004[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (1))){
var state_48253__$1 = state_48253;
var statearr_48266_50005 = state_48253__$1;
(statearr_48266_50005[(2)] = null);

(statearr_48266_50005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (24))){
var inst_48150 = (state_48253[(7)]);
var inst_48173 = (state_48253[(2)]);
var inst_48174 = cljs.core.next(inst_48150);
var inst_48128 = inst_48174;
var inst_48129 = null;
var inst_48130 = (0);
var inst_48131 = (0);
var state_48253__$1 = (function (){var statearr_48267 = state_48253;
(statearr_48267[(13)] = inst_48173);

(statearr_48267[(14)] = inst_48128);

(statearr_48267[(15)] = inst_48131);

(statearr_48267[(16)] = inst_48129);

(statearr_48267[(17)] = inst_48130);

return statearr_48267;
})();
var statearr_48268_50006 = state_48253__$1;
(statearr_48268_50006[(2)] = null);

(statearr_48268_50006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (39))){
var state_48253__$1 = state_48253;
var statearr_48272_50007 = state_48253__$1;
(statearr_48272_50007[(2)] = null);

(statearr_48272_50007[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (4))){
var inst_48119 = (state_48253[(12)]);
var inst_48119__$1 = (state_48253[(2)]);
var inst_48120 = (inst_48119__$1 == null);
var state_48253__$1 = (function (){var statearr_48273 = state_48253;
(statearr_48273[(12)] = inst_48119__$1);

return statearr_48273;
})();
if(cljs.core.truth_(inst_48120)){
var statearr_48274_50008 = state_48253__$1;
(statearr_48274_50008[(1)] = (5));

} else {
var statearr_48275_50009 = state_48253__$1;
(statearr_48275_50009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (15))){
var inst_48128 = (state_48253[(14)]);
var inst_48131 = (state_48253[(15)]);
var inst_48129 = (state_48253[(16)]);
var inst_48130 = (state_48253[(17)]);
var inst_48146 = (state_48253[(2)]);
var inst_48147 = (inst_48131 + (1));
var tmp48269 = inst_48128;
var tmp48270 = inst_48129;
var tmp48271 = inst_48130;
var inst_48128__$1 = tmp48269;
var inst_48129__$1 = tmp48270;
var inst_48130__$1 = tmp48271;
var inst_48131__$1 = inst_48147;
var state_48253__$1 = (function (){var statearr_48276 = state_48253;
(statearr_48276[(14)] = inst_48128__$1);

(statearr_48276[(15)] = inst_48131__$1);

(statearr_48276[(16)] = inst_48129__$1);

(statearr_48276[(17)] = inst_48130__$1);

(statearr_48276[(18)] = inst_48146);

return statearr_48276;
})();
var statearr_48277_50011 = state_48253__$1;
(statearr_48277_50011[(2)] = null);

(statearr_48277_50011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (21))){
var inst_48177 = (state_48253[(2)]);
var state_48253__$1 = state_48253;
var statearr_48281_50012 = state_48253__$1;
(statearr_48281_50012[(2)] = inst_48177);

(statearr_48281_50012[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (31))){
var inst_48203 = (state_48253[(9)]);
var inst_48207 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48203);
var state_48253__$1 = state_48253;
var statearr_48282_50014 = state_48253__$1;
(statearr_48282_50014[(2)] = inst_48207);

(statearr_48282_50014[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (32))){
var inst_48197 = (state_48253[(19)]);
var inst_48196 = (state_48253[(10)]);
var inst_48198 = (state_48253[(11)]);
var inst_48195 = (state_48253[(20)]);
var inst_48209 = (state_48253[(2)]);
var inst_48210 = (inst_48198 + (1));
var tmp48278 = inst_48197;
var tmp48279 = inst_48196;
var tmp48280 = inst_48195;
var inst_48195__$1 = tmp48280;
var inst_48196__$1 = tmp48279;
var inst_48197__$1 = tmp48278;
var inst_48198__$1 = inst_48210;
var state_48253__$1 = (function (){var statearr_48284 = state_48253;
(statearr_48284[(19)] = inst_48197__$1);

(statearr_48284[(10)] = inst_48196__$1);

(statearr_48284[(21)] = inst_48209);

(statearr_48284[(11)] = inst_48198__$1);

(statearr_48284[(20)] = inst_48195__$1);

return statearr_48284;
})();
var statearr_48285_50016 = state_48253__$1;
(statearr_48285_50016[(2)] = null);

(statearr_48285_50016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (40))){
var inst_48222 = (state_48253[(22)]);
var inst_48226 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48222);
var state_48253__$1 = state_48253;
var statearr_48286_50017 = state_48253__$1;
(statearr_48286_50017[(2)] = inst_48226);

(statearr_48286_50017[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (33))){
var inst_48213 = (state_48253[(23)]);
var inst_48215 = cljs.core.chunked_seq_QMARK_(inst_48213);
var state_48253__$1 = state_48253;
if(inst_48215){
var statearr_48287_50018 = state_48253__$1;
(statearr_48287_50018[(1)] = (36));

} else {
var statearr_48288_50019 = state_48253__$1;
(statearr_48288_50019[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (13))){
var inst_48140 = (state_48253[(24)]);
var inst_48143 = cljs.core.async.close_BANG_(inst_48140);
var state_48253__$1 = state_48253;
var statearr_48291_50021 = state_48253__$1;
(statearr_48291_50021[(2)] = inst_48143);

(statearr_48291_50021[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (22))){
var inst_48164 = (state_48253[(8)]);
var inst_48170 = cljs.core.async.close_BANG_(inst_48164);
var state_48253__$1 = state_48253;
var statearr_48292_50022 = state_48253__$1;
(statearr_48292_50022[(2)] = inst_48170);

(statearr_48292_50022[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (36))){
var inst_48213 = (state_48253[(23)]);
var inst_48217 = cljs.core.chunk_first(inst_48213);
var inst_48218 = cljs.core.chunk_rest(inst_48213);
var inst_48219 = cljs.core.count(inst_48217);
var inst_48195 = inst_48218;
var inst_48196 = inst_48217;
var inst_48197 = inst_48219;
var inst_48198 = (0);
var state_48253__$1 = (function (){var statearr_48293 = state_48253;
(statearr_48293[(19)] = inst_48197);

(statearr_48293[(10)] = inst_48196);

(statearr_48293[(11)] = inst_48198);

(statearr_48293[(20)] = inst_48195);

return statearr_48293;
})();
var statearr_48294_50023 = state_48253__$1;
(statearr_48294_50023[(2)] = null);

(statearr_48294_50023[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (41))){
var inst_48213 = (state_48253[(23)]);
var inst_48228 = (state_48253[(2)]);
var inst_48229 = cljs.core.next(inst_48213);
var inst_48195 = inst_48229;
var inst_48196 = null;
var inst_48197 = (0);
var inst_48198 = (0);
var state_48253__$1 = (function (){var statearr_48295 = state_48253;
(statearr_48295[(19)] = inst_48197);

(statearr_48295[(25)] = inst_48228);

(statearr_48295[(10)] = inst_48196);

(statearr_48295[(11)] = inst_48198);

(statearr_48295[(20)] = inst_48195);

return statearr_48295;
})();
var statearr_48296_50025 = state_48253__$1;
(statearr_48296_50025[(2)] = null);

(statearr_48296_50025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (43))){
var state_48253__$1 = state_48253;
var statearr_48300_50026 = state_48253__$1;
(statearr_48300_50026[(2)] = null);

(statearr_48300_50026[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (29))){
var inst_48237 = (state_48253[(2)]);
var state_48253__$1 = state_48253;
var statearr_48302_50028 = state_48253__$1;
(statearr_48302_50028[(2)] = inst_48237);

(statearr_48302_50028[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (44))){
var inst_48246 = (state_48253[(2)]);
var state_48253__$1 = (function (){var statearr_48303 = state_48253;
(statearr_48303[(26)] = inst_48246);

return statearr_48303;
})();
var statearr_48305_50029 = state_48253__$1;
(statearr_48305_50029[(2)] = null);

(statearr_48305_50029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (6))){
var inst_48187 = (state_48253[(27)]);
var inst_48186 = cljs.core.deref(cs);
var inst_48187__$1 = cljs.core.keys(inst_48186);
var inst_48188 = cljs.core.count(inst_48187__$1);
var inst_48189 = cljs.core.reset_BANG_(dctr,inst_48188);
var inst_48194 = cljs.core.seq(inst_48187__$1);
var inst_48195 = inst_48194;
var inst_48196 = null;
var inst_48197 = (0);
var inst_48198 = (0);
var state_48253__$1 = (function (){var statearr_48308 = state_48253;
(statearr_48308[(19)] = inst_48197);

(statearr_48308[(10)] = inst_48196);

(statearr_48308[(11)] = inst_48198);

(statearr_48308[(28)] = inst_48189);

(statearr_48308[(27)] = inst_48187__$1);

(statearr_48308[(20)] = inst_48195);

return statearr_48308;
})();
var statearr_48309_50031 = state_48253__$1;
(statearr_48309_50031[(2)] = null);

(statearr_48309_50031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (28))){
var inst_48213 = (state_48253[(23)]);
var inst_48195 = (state_48253[(20)]);
var inst_48213__$1 = cljs.core.seq(inst_48195);
var state_48253__$1 = (function (){var statearr_48310 = state_48253;
(statearr_48310[(23)] = inst_48213__$1);

return statearr_48310;
})();
if(inst_48213__$1){
var statearr_48311_50032 = state_48253__$1;
(statearr_48311_50032[(1)] = (33));

} else {
var statearr_48312_50033 = state_48253__$1;
(statearr_48312_50033[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (25))){
var inst_48197 = (state_48253[(19)]);
var inst_48198 = (state_48253[(11)]);
var inst_48200 = (inst_48198 < inst_48197);
var inst_48201 = inst_48200;
var state_48253__$1 = state_48253;
if(cljs.core.truth_(inst_48201)){
var statearr_48313_50035 = state_48253__$1;
(statearr_48313_50035[(1)] = (27));

} else {
var statearr_48314_50036 = state_48253__$1;
(statearr_48314_50036[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (34))){
var state_48253__$1 = state_48253;
var statearr_48319_50040 = state_48253__$1;
(statearr_48319_50040[(2)] = null);

(statearr_48319_50040[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (17))){
var state_48253__$1 = state_48253;
var statearr_48320_50048 = state_48253__$1;
(statearr_48320_50048[(2)] = null);

(statearr_48320_50048[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (3))){
var inst_48251 = (state_48253[(2)]);
var state_48253__$1 = state_48253;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48253__$1,inst_48251);
} else {
if((state_val_48254 === (12))){
var inst_48182 = (state_48253[(2)]);
var state_48253__$1 = state_48253;
var statearr_48322_50058 = state_48253__$1;
(statearr_48322_50058[(2)] = inst_48182);

(statearr_48322_50058[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (2))){
var state_48253__$1 = state_48253;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48253__$1,(4),ch);
} else {
if((state_val_48254 === (23))){
var state_48253__$1 = state_48253;
var statearr_48323_50059 = state_48253__$1;
(statearr_48323_50059[(2)] = null);

(statearr_48323_50059[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (35))){
var inst_48235 = (state_48253[(2)]);
var state_48253__$1 = state_48253;
var statearr_48324_50066 = state_48253__$1;
(statearr_48324_50066[(2)] = inst_48235);

(statearr_48324_50066[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (19))){
var inst_48150 = (state_48253[(7)]);
var inst_48155 = cljs.core.chunk_first(inst_48150);
var inst_48156 = cljs.core.chunk_rest(inst_48150);
var inst_48157 = cljs.core.count(inst_48155);
var inst_48128 = inst_48156;
var inst_48129 = inst_48155;
var inst_48130 = inst_48157;
var inst_48131 = (0);
var state_48253__$1 = (function (){var statearr_48326 = state_48253;
(statearr_48326[(14)] = inst_48128);

(statearr_48326[(15)] = inst_48131);

(statearr_48326[(16)] = inst_48129);

(statearr_48326[(17)] = inst_48130);

return statearr_48326;
})();
var statearr_48327_50077 = state_48253__$1;
(statearr_48327_50077[(2)] = null);

(statearr_48327_50077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (11))){
var inst_48150 = (state_48253[(7)]);
var inst_48128 = (state_48253[(14)]);
var inst_48150__$1 = cljs.core.seq(inst_48128);
var state_48253__$1 = (function (){var statearr_48329 = state_48253;
(statearr_48329[(7)] = inst_48150__$1);

return statearr_48329;
})();
if(inst_48150__$1){
var statearr_48334_50078 = state_48253__$1;
(statearr_48334_50078[(1)] = (16));

} else {
var statearr_48335_50079 = state_48253__$1;
(statearr_48335_50079[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (9))){
var inst_48184 = (state_48253[(2)]);
var state_48253__$1 = state_48253;
var statearr_48336_50080 = state_48253__$1;
(statearr_48336_50080[(2)] = inst_48184);

(statearr_48336_50080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (5))){
var inst_48126 = cljs.core.deref(cs);
var inst_48127 = cljs.core.seq(inst_48126);
var inst_48128 = inst_48127;
var inst_48129 = null;
var inst_48130 = (0);
var inst_48131 = (0);
var state_48253__$1 = (function (){var statearr_48337 = state_48253;
(statearr_48337[(14)] = inst_48128);

(statearr_48337[(15)] = inst_48131);

(statearr_48337[(16)] = inst_48129);

(statearr_48337[(17)] = inst_48130);

return statearr_48337;
})();
var statearr_48338_50087 = state_48253__$1;
(statearr_48338_50087[(2)] = null);

(statearr_48338_50087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (14))){
var state_48253__$1 = state_48253;
var statearr_48342_50091 = state_48253__$1;
(statearr_48342_50091[(2)] = null);

(statearr_48342_50091[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (45))){
var inst_48243 = (state_48253[(2)]);
var state_48253__$1 = state_48253;
var statearr_48345_50092 = state_48253__$1;
(statearr_48345_50092[(2)] = inst_48243);

(statearr_48345_50092[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (26))){
var inst_48187 = (state_48253[(27)]);
var inst_48239 = (state_48253[(2)]);
var inst_48240 = cljs.core.seq(inst_48187);
var state_48253__$1 = (function (){var statearr_48346 = state_48253;
(statearr_48346[(29)] = inst_48239);

return statearr_48346;
})();
if(inst_48240){
var statearr_48347_50093 = state_48253__$1;
(statearr_48347_50093[(1)] = (42));

} else {
var statearr_48348_50094 = state_48253__$1;
(statearr_48348_50094[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (16))){
var inst_48150 = (state_48253[(7)]);
var inst_48153 = cljs.core.chunked_seq_QMARK_(inst_48150);
var state_48253__$1 = state_48253;
if(inst_48153){
var statearr_48349_50095 = state_48253__$1;
(statearr_48349_50095[(1)] = (19));

} else {
var statearr_48350_50096 = state_48253__$1;
(statearr_48350_50096[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (38))){
var inst_48232 = (state_48253[(2)]);
var state_48253__$1 = state_48253;
var statearr_48353_50097 = state_48253__$1;
(statearr_48353_50097[(2)] = inst_48232);

(statearr_48353_50097[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (30))){
var state_48253__$1 = state_48253;
var statearr_48354_50098 = state_48253__$1;
(statearr_48354_50098[(2)] = null);

(statearr_48354_50098[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (10))){
var inst_48131 = (state_48253[(15)]);
var inst_48129 = (state_48253[(16)]);
var inst_48139 = cljs.core._nth(inst_48129,inst_48131);
var inst_48140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48139,(0),null);
var inst_48141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48139,(1),null);
var state_48253__$1 = (function (){var statearr_48355 = state_48253;
(statearr_48355[(24)] = inst_48140);

return statearr_48355;
})();
if(cljs.core.truth_(inst_48141)){
var statearr_48356_50099 = state_48253__$1;
(statearr_48356_50099[(1)] = (13));

} else {
var statearr_48357_50100 = state_48253__$1;
(statearr_48357_50100[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (18))){
var inst_48180 = (state_48253[(2)]);
var state_48253__$1 = state_48253;
var statearr_48358_50101 = state_48253__$1;
(statearr_48358_50101[(2)] = inst_48180);

(statearr_48358_50101[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (42))){
var state_48253__$1 = state_48253;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48253__$1,(45),dchan);
} else {
if((state_val_48254 === (37))){
var inst_48213 = (state_48253[(23)]);
var inst_48222 = (state_48253[(22)]);
var inst_48119 = (state_48253[(12)]);
var inst_48222__$1 = cljs.core.first(inst_48213);
var inst_48223 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48222__$1,inst_48119,done);
var state_48253__$1 = (function (){var statearr_48361 = state_48253;
(statearr_48361[(22)] = inst_48222__$1);

return statearr_48361;
})();
if(cljs.core.truth_(inst_48223)){
var statearr_48365_50102 = state_48253__$1;
(statearr_48365_50102[(1)] = (39));

} else {
var statearr_48366_50103 = state_48253__$1;
(statearr_48366_50103[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48254 === (8))){
var inst_48131 = (state_48253[(15)]);
var inst_48130 = (state_48253[(17)]);
var inst_48133 = (inst_48131 < inst_48130);
var inst_48134 = inst_48133;
var state_48253__$1 = state_48253;
if(cljs.core.truth_(inst_48134)){
var statearr_48367_50104 = state_48253__$1;
(statearr_48367_50104[(1)] = (10));

} else {
var statearr_48368_50105 = state_48253__$1;
(statearr_48368_50105[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__47247__auto__ = null;
var cljs$core$async$mult_$_state_machine__47247__auto____0 = (function (){
var statearr_48370 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48370[(0)] = cljs$core$async$mult_$_state_machine__47247__auto__);

(statearr_48370[(1)] = (1));

return statearr_48370;
});
var cljs$core$async$mult_$_state_machine__47247__auto____1 = (function (state_48253){
while(true){
var ret_value__47248__auto__ = (function (){try{while(true){
var result__47249__auto__ = switch__47246__auto__(state_48253);
if(cljs.core.keyword_identical_QMARK_(result__47249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47249__auto__;
}
break;
}
}catch (e48372){var ex__47250__auto__ = e48372;
var statearr_48373_50106 = state_48253;
(statearr_48373_50106[(2)] = ex__47250__auto__);


if(cljs.core.seq((state_48253[(4)]))){
var statearr_48375_50107 = state_48253;
(statearr_48375_50107[(1)] = cljs.core.first((state_48253[(4)])));

} else {
throw ex__47250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50108 = state_48253;
state_48253 = G__50108;
continue;
} else {
return ret_value__47248__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__47247__auto__ = function(state_48253){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__47247__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__47247__auto____1.call(this,state_48253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__47247__auto____0;
cljs$core$async$mult_$_state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__47247__auto____1;
return cljs$core$async$mult_$_state_machine__47247__auto__;
})()
})();
var state__47339__auto__ = (function (){var statearr_48380 = f__47338__auto__();
(statearr_48380[(6)] = c__47337__auto___49993);

return statearr_48380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47339__auto__);
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
var G__48386 = arguments.length;
switch (G__48386) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_50110 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_50110(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_50111 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_50111(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_50112 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_50112(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_50113 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_50113(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_50114 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_50114(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___50118 = arguments.length;
var i__4830__auto___50119 = (0);
while(true){
if((i__4830__auto___50119 < len__4829__auto___50118)){
args__4835__auto__.push((arguments[i__4830__auto___50119]));

var G__50120 = (i__4830__auto___50119 + (1));
i__4830__auto___50119 = G__50120;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48431){
var map__48432 = p__48431;
var map__48432__$1 = cljs.core.__destructure_map(map__48432);
var opts = map__48432__$1;
var statearr_48433_50121 = state;
(statearr_48433_50121[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_48434_50122 = state;
(statearr_48434_50122[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_48435_50123 = state;
(statearr_48435_50123[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48427){
var G__48428 = cljs.core.first(seq48427);
var seq48427__$1 = cljs.core.next(seq48427);
var G__48429 = cljs.core.first(seq48427__$1);
var seq48427__$2 = cljs.core.next(seq48427__$1);
var G__48430 = cljs.core.first(seq48427__$2);
var seq48427__$3 = cljs.core.next(seq48427__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48428,G__48429,G__48430,seq48427__$3);
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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48462 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48462 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48463){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta48463 = meta48463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48464,meta48463__$1){
var self__ = this;
var _48464__$1 = this;
return (new cljs.core.async.t_cljs$core$async48462(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta48463__$1));
}));

(cljs.core.async.t_cljs$core$async48462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48464){
var self__ = this;
var _48464__$1 = this;
return self__.meta48463;
}));

(cljs.core.async.t_cljs$core$async48462.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48462.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async48462.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48462.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48462.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48462.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48462.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48462.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48462.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta48463","meta48463",816442253,null)], null);
}));

(cljs.core.async.t_cljs$core$async48462.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48462.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48462");

(cljs.core.async.t_cljs$core$async48462.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async48462");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48462.
 */
cljs.core.async.__GT_t_cljs$core$async48462 = (function cljs$core$async$mix_$___GT_t_cljs$core$async48462(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48463){
return (new cljs.core.async.t_cljs$core$async48462(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48463));
});

}

return (new cljs.core.async.t_cljs$core$async48462(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47337__auto___50124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47338__auto__ = (function (){var switch__47246__auto__ = (function (state_48540){
var state_val_48541 = (state_48540[(1)]);
if((state_val_48541 === (7))){
var inst_48500 = (state_48540[(2)]);
var state_48540__$1 = state_48540;
if(cljs.core.truth_(inst_48500)){
var statearr_48542_50125 = state_48540__$1;
(statearr_48542_50125[(1)] = (8));

} else {
var statearr_48543_50126 = state_48540__$1;
(statearr_48543_50126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (20))){
var inst_48493 = (state_48540[(7)]);
var state_48540__$1 = state_48540;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48540__$1,(23),out,inst_48493);
} else {
if((state_val_48541 === (1))){
var inst_48476 = calc_state();
var inst_48477 = cljs.core.__destructure_map(inst_48476);
var inst_48478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48477,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48477,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48477,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48481 = inst_48476;
var state_48540__$1 = (function (){var statearr_48546 = state_48540;
(statearr_48546[(8)] = inst_48478);

(statearr_48546[(9)] = inst_48480);

(statearr_48546[(10)] = inst_48481);

(statearr_48546[(11)] = inst_48479);

return statearr_48546;
})();
var statearr_48549_50127 = state_48540__$1;
(statearr_48549_50127[(2)] = null);

(statearr_48549_50127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (24))){
var inst_48484 = (state_48540[(12)]);
var inst_48481 = inst_48484;
var state_48540__$1 = (function (){var statearr_48556 = state_48540;
(statearr_48556[(10)] = inst_48481);

return statearr_48556;
})();
var statearr_48557_50128 = state_48540__$1;
(statearr_48557_50128[(2)] = null);

(statearr_48557_50128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (4))){
var inst_48495 = (state_48540[(13)]);
var inst_48493 = (state_48540[(7)]);
var inst_48492 = (state_48540[(2)]);
var inst_48493__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48492,(0),null);
var inst_48494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48492,(1),null);
var inst_48495__$1 = (inst_48493__$1 == null);
var state_48540__$1 = (function (){var statearr_48560 = state_48540;
(statearr_48560[(13)] = inst_48495__$1);

(statearr_48560[(14)] = inst_48494);

(statearr_48560[(7)] = inst_48493__$1);

return statearr_48560;
})();
if(cljs.core.truth_(inst_48495__$1)){
var statearr_48561_50129 = state_48540__$1;
(statearr_48561_50129[(1)] = (5));

} else {
var statearr_48562_50130 = state_48540__$1;
(statearr_48562_50130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (15))){
var inst_48485 = (state_48540[(15)]);
var inst_48514 = (state_48540[(16)]);
var inst_48514__$1 = cljs.core.empty_QMARK_(inst_48485);
var state_48540__$1 = (function (){var statearr_48566 = state_48540;
(statearr_48566[(16)] = inst_48514__$1);

return statearr_48566;
})();
if(inst_48514__$1){
var statearr_48567_50131 = state_48540__$1;
(statearr_48567_50131[(1)] = (17));

} else {
var statearr_48568_50132 = state_48540__$1;
(statearr_48568_50132[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (21))){
var inst_48484 = (state_48540[(12)]);
var inst_48481 = inst_48484;
var state_48540__$1 = (function (){var statearr_48569 = state_48540;
(statearr_48569[(10)] = inst_48481);

return statearr_48569;
})();
var statearr_48570_50133 = state_48540__$1;
(statearr_48570_50133[(2)] = null);

(statearr_48570_50133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (13))){
var inst_48507 = (state_48540[(2)]);
var inst_48508 = calc_state();
var inst_48481 = inst_48508;
var state_48540__$1 = (function (){var statearr_48571 = state_48540;
(statearr_48571[(17)] = inst_48507);

(statearr_48571[(10)] = inst_48481);

return statearr_48571;
})();
var statearr_48572_50134 = state_48540__$1;
(statearr_48572_50134[(2)] = null);

(statearr_48572_50134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (22))){
var inst_48534 = (state_48540[(2)]);
var state_48540__$1 = state_48540;
var statearr_48573_50135 = state_48540__$1;
(statearr_48573_50135[(2)] = inst_48534);

(statearr_48573_50135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (6))){
var inst_48494 = (state_48540[(14)]);
var inst_48498 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48494,change);
var state_48540__$1 = state_48540;
var statearr_48574_50136 = state_48540__$1;
(statearr_48574_50136[(2)] = inst_48498);

(statearr_48574_50136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (25))){
var state_48540__$1 = state_48540;
var statearr_48575_50137 = state_48540__$1;
(statearr_48575_50137[(2)] = null);

(statearr_48575_50137[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (17))){
var inst_48486 = (state_48540[(18)]);
var inst_48494 = (state_48540[(14)]);
var inst_48516 = (inst_48486.cljs$core$IFn$_invoke$arity$1 ? inst_48486.cljs$core$IFn$_invoke$arity$1(inst_48494) : inst_48486.call(null,inst_48494));
var inst_48517 = cljs.core.not(inst_48516);
var state_48540__$1 = state_48540;
var statearr_48576_50138 = state_48540__$1;
(statearr_48576_50138[(2)] = inst_48517);

(statearr_48576_50138[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (3))){
var inst_48538 = (state_48540[(2)]);
var state_48540__$1 = state_48540;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48540__$1,inst_48538);
} else {
if((state_val_48541 === (12))){
var state_48540__$1 = state_48540;
var statearr_48583_50139 = state_48540__$1;
(statearr_48583_50139[(2)] = null);

(statearr_48583_50139[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (2))){
var inst_48481 = (state_48540[(10)]);
var inst_48484 = (state_48540[(12)]);
var inst_48484__$1 = cljs.core.__destructure_map(inst_48481);
var inst_48485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48484__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48484__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48484__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48540__$1 = (function (){var statearr_48584 = state_48540;
(statearr_48584[(18)] = inst_48486);

(statearr_48584[(15)] = inst_48485);

(statearr_48584[(12)] = inst_48484__$1);

return statearr_48584;
})();
return cljs.core.async.ioc_alts_BANG_(state_48540__$1,(4),inst_48487);
} else {
if((state_val_48541 === (23))){
var inst_48525 = (state_48540[(2)]);
var state_48540__$1 = state_48540;
if(cljs.core.truth_(inst_48525)){
var statearr_48585_50140 = state_48540__$1;
(statearr_48585_50140[(1)] = (24));

} else {
var statearr_48586_50141 = state_48540__$1;
(statearr_48586_50141[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (19))){
var inst_48520 = (state_48540[(2)]);
var state_48540__$1 = state_48540;
var statearr_48587_50142 = state_48540__$1;
(statearr_48587_50142[(2)] = inst_48520);

(statearr_48587_50142[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (11))){
var inst_48494 = (state_48540[(14)]);
var inst_48504 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_48494);
var state_48540__$1 = state_48540;
var statearr_48588_50143 = state_48540__$1;
(statearr_48588_50143[(2)] = inst_48504);

(statearr_48588_50143[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (9))){
var inst_48485 = (state_48540[(15)]);
var inst_48494 = (state_48540[(14)]);
var inst_48511 = (state_48540[(19)]);
var inst_48511__$1 = (inst_48485.cljs$core$IFn$_invoke$arity$1 ? inst_48485.cljs$core$IFn$_invoke$arity$1(inst_48494) : inst_48485.call(null,inst_48494));
var state_48540__$1 = (function (){var statearr_48593 = state_48540;
(statearr_48593[(19)] = inst_48511__$1);

return statearr_48593;
})();
if(cljs.core.truth_(inst_48511__$1)){
var statearr_48594_50144 = state_48540__$1;
(statearr_48594_50144[(1)] = (14));

} else {
var statearr_48595_50145 = state_48540__$1;
(statearr_48595_50145[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (5))){
var inst_48495 = (state_48540[(13)]);
var state_48540__$1 = state_48540;
var statearr_48596_50146 = state_48540__$1;
(statearr_48596_50146[(2)] = inst_48495);

(statearr_48596_50146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (14))){
var inst_48511 = (state_48540[(19)]);
var state_48540__$1 = state_48540;
var statearr_48597_50147 = state_48540__$1;
(statearr_48597_50147[(2)] = inst_48511);

(statearr_48597_50147[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (26))){
var inst_48530 = (state_48540[(2)]);
var state_48540__$1 = state_48540;
var statearr_48598_50148 = state_48540__$1;
(statearr_48598_50148[(2)] = inst_48530);

(statearr_48598_50148[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (16))){
var inst_48522 = (state_48540[(2)]);
var state_48540__$1 = state_48540;
if(cljs.core.truth_(inst_48522)){
var statearr_48602_50149 = state_48540__$1;
(statearr_48602_50149[(1)] = (20));

} else {
var statearr_48603_50150 = state_48540__$1;
(statearr_48603_50150[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (10))){
var inst_48536 = (state_48540[(2)]);
var state_48540__$1 = state_48540;
var statearr_48604_50151 = state_48540__$1;
(statearr_48604_50151[(2)] = inst_48536);

(statearr_48604_50151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (18))){
var inst_48514 = (state_48540[(16)]);
var state_48540__$1 = state_48540;
var statearr_48605_50152 = state_48540__$1;
(statearr_48605_50152[(2)] = inst_48514);

(statearr_48605_50152[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48541 === (8))){
var inst_48493 = (state_48540[(7)]);
var inst_48502 = (inst_48493 == null);
var state_48540__$1 = state_48540;
if(cljs.core.truth_(inst_48502)){
var statearr_48607_50153 = state_48540__$1;
(statearr_48607_50153[(1)] = (11));

} else {
var statearr_48608_50154 = state_48540__$1;
(statearr_48608_50154[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__47247__auto__ = null;
var cljs$core$async$mix_$_state_machine__47247__auto____0 = (function (){
var statearr_48609 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48609[(0)] = cljs$core$async$mix_$_state_machine__47247__auto__);

(statearr_48609[(1)] = (1));

return statearr_48609;
});
var cljs$core$async$mix_$_state_machine__47247__auto____1 = (function (state_48540){
while(true){
var ret_value__47248__auto__ = (function (){try{while(true){
var result__47249__auto__ = switch__47246__auto__(state_48540);
if(cljs.core.keyword_identical_QMARK_(result__47249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47249__auto__;
}
break;
}
}catch (e48610){var ex__47250__auto__ = e48610;
var statearr_48611_50155 = state_48540;
(statearr_48611_50155[(2)] = ex__47250__auto__);


if(cljs.core.seq((state_48540[(4)]))){
var statearr_48612_50156 = state_48540;
(statearr_48612_50156[(1)] = cljs.core.first((state_48540[(4)])));

} else {
throw ex__47250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50157 = state_48540;
state_48540 = G__50157;
continue;
} else {
return ret_value__47248__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__47247__auto__ = function(state_48540){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__47247__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__47247__auto____1.call(this,state_48540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__47247__auto____0;
cljs$core$async$mix_$_state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__47247__auto____1;
return cljs$core$async$mix_$_state_machine__47247__auto__;
})()
})();
var state__47339__auto__ = (function (){var statearr_48613 = f__47338__auto__();
(statearr_48613[(6)] = c__47337__auto___50124);

return statearr_48613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47339__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_50158 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_50158(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_50159 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_50159(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_50160 = (function() {
var G__50161 = null;
var G__50161__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__50161__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__50161 = function(p,v){
switch(arguments.length){
case 1:
return G__50161__1.call(this,p);
case 2:
return G__50161__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50161.cljs$core$IFn$_invoke$arity$1 = G__50161__1;
G__50161.cljs$core$IFn$_invoke$arity$2 = G__50161__2;
return G__50161;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__48615 = arguments.length;
switch (G__48615) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50160(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50160(p,v);
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
var G__48621 = arguments.length;
switch (G__48621) {
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
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__48619_SHARP_){
if(cljs.core.truth_((p1__48619_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__48619_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__48619_SHARP_.call(null,topic)))){
return p1__48619_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48619_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48622 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48622 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48623){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48623 = meta48623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48624,meta48623__$1){
var self__ = this;
var _48624__$1 = this;
return (new cljs.core.async.t_cljs$core$async48622(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48623__$1));
}));

(cljs.core.async.t_cljs$core$async48622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48624){
var self__ = this;
var _48624__$1 = this;
return self__.meta48623;
}));

(cljs.core.async.t_cljs$core$async48622.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48622.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48622.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48622.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async48622.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async48622.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async48622.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async48622.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48623","meta48623",1830954650,null)], null);
}));

(cljs.core.async.t_cljs$core$async48622.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48622.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48622");

(cljs.core.async.t_cljs$core$async48622.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async48622");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48622.
 */
cljs.core.async.__GT_t_cljs$core$async48622 = (function cljs$core$async$__GT_t_cljs$core$async48622(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48623){
return (new cljs.core.async.t_cljs$core$async48622(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48623));
});

}

return (new cljs.core.async.t_cljs$core$async48622(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47337__auto___50164 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47338__auto__ = (function (){var switch__47246__auto__ = (function (state_48697){
var state_val_48698 = (state_48697[(1)]);
if((state_val_48698 === (7))){
var inst_48693 = (state_48697[(2)]);
var state_48697__$1 = state_48697;
var statearr_48699_50165 = state_48697__$1;
(statearr_48699_50165[(2)] = inst_48693);

(statearr_48699_50165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48698 === (20))){
var state_48697__$1 = state_48697;
var statearr_48700_50166 = state_48697__$1;
(statearr_48700_50166[(2)] = null);

(statearr_48700_50166[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48698 === (1))){
var state_48697__$1 = state_48697;
var statearr_48701_50167 = state_48697__$1;
(statearr_48701_50167[(2)] = null);

(statearr_48701_50167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48698 === (24))){
var inst_48676 = (state_48697[(7)]);
var inst_48685 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_48676);
var state_48697__$1 = state_48697;
var statearr_48702_50168 = state_48697__$1;
(statearr_48702_50168[(2)] = inst_48685);

(statearr_48702_50168[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48698 === (4))){
var inst_48628 = (state_48697[(8)]);
var inst_48628__$1 = (state_48697[(2)]);
var inst_48629 = (inst_48628__$1 == null);
var state_48697__$1 = (function (){var statearr_48703 = state_48697;
(statearr_48703[(8)] = inst_48628__$1);

return statearr_48703;
})();
if(cljs.core.truth_(inst_48629)){
var statearr_48704_50169 = state_48697__$1;
(statearr_48704_50169[(1)] = (5));

} else {
var statearr_48705_50170 = state_48697__$1;
(statearr_48705_50170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48698 === (15))){
var inst_48670 = (state_48697[(2)]);
var state_48697__$1 = state_48697;
var statearr_48706_50172 = state_48697__$1;
(statearr_48706_50172[(2)] = inst_48670);

(statearr_48706_50172[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48698 === (21))){
var inst_48690 = (state_48697[(2)]);
var state_48697__$1 = (function (){var statearr_48707 = state_48697;
(statearr_48707[(9)] = inst_48690);

return statearr_48707;
})();
var statearr_48708_50173 = state_48697__$1;
(statearr_48708_50173[(2)] = null);

(statearr_48708_50173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48698 === (13))){
var inst_48652 = (state_48697[(10)]);
var inst_48654 = cljs.core.chunked_seq_QMARK_(inst_48652);
var state_48697__$1 = state_48697;
if(inst_48654){
var statearr_48710_50174 = state_48697__$1;
(statearr_48710_50174[(1)] = (16));

} else {
var statearr_48711_50175 = state_48697__$1;
(statearr_48711_50175[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48698 === (22))){
var inst_48682 = (state_48697[(2)]);
var state_48697__$1 = state_48697;
if(cljs.core.truth_(inst_48682)){
var statearr_48713_50176 = state_48697__$1;
(statearr_48713_50176[(1)] = (23));

} else {
var statearr_48714_50177 = state_48697__$1;
(statearr_48714_50177[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48698 === (6))){
var inst_48628 = (state_48697[(8)]);
var inst_48678 = (state_48697[(11)]);
var inst_48676 = (state_48697[(7)]);
var inst_48676__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_48628) : topic_fn.call(null,inst_48628));
var inst_48677 = cljs.core.deref(mults);
var inst_48678__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48677,inst_48676__$1);
var state_48697__$1 = (function (){var statearr_48715 = state_48697;
(statearr_48715[(11)] = inst_48678__$1);

(statearr_48715[(7)] = inst_48676__$1);

return statearr_48715;
})();
if(cljs.core.truth_(inst_48678__$1)){
var statearr_48716_50178 = state_48697__$1;
(statearr_48716_50178[(1)] = (19));

} else {
var statearr_48717_50179 = state_48697__$1;
(statearr_48717_50179[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48698 === (25))){
var inst_48687 = (state_48697[(2)]);
var state_48697__$1 = state_48697;
var statearr_48718_50180 = state_48697__$1;
(statearr_48718_50180[(2)] = inst_48687);

(statearr_48718_50180[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48698 === (17))){
var inst_48652 = (state_48697[(10)]);
var inst_48661 = cljs.core.first(inst_48652);
var inst_48662 = cljs.core.async.muxch_STAR_(inst_48661);
var inst_48663 = cljs.core.async.close_BANG_(inst_48662);
var inst_48664 = cljs.core.next(inst_48652);
var inst_48638 = inst_48664;
var inst_48639 = null;
var inst_48640 = (0);
var inst_48641 = (0);
var state_48697__$1 = (function (){var statearr_48719 = state_48697;
(statearr_48719[(12)] = inst_48638);

(statearr_48719[(13)] = inst_48663);

(statearr_48719[(14)] = inst_48640);

(statearr_48719[(15)] = inst_48641);

(statearr_48719[(16)] = inst_48639);

return statearr_48719;
})();
var statearr_48720_50181 = state_48697__$1;
(statearr_48720_50181[(2)] = null);

(statearr_48720_50181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48698 === (3))){
var inst_48695 = (state_48697[(2)]);
var state_48697__$1 = state_48697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48697__$1,inst_48695);
} else {
if((state_val_48698 === (12))){
var inst_48672 = (state_48697[(2)]);
var state_48697__$1 = state_48697;
var statearr_48721_50182 = state_48697__$1;
(statearr_48721_50182[(2)] = inst_48672);

(statearr_48721_50182[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48698 === (2))){
var state_48697__$1 = state_48697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48697__$1,(4),ch);
} else {
if((state_val_48698 === (23))){
var state_48697__$1 = state_48697;
var statearr_48722_50183 = state_48697__$1;
(statearr_48722_50183[(2)] = null);

(statearr_48722_50183[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48698 === (19))){
var inst_48628 = (state_48697[(8)]);
var inst_48678 = (state_48697[(11)]);
var inst_48680 = cljs.core.async.muxch_STAR_(inst_48678);
var state_48697__$1 = state_48697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48697__$1,(22),inst_48680,inst_48628);
} else {
if((state_val_48698 === (11))){
var inst_48638 = (state_48697[(12)]);
var inst_48652 = (state_48697[(10)]);
var inst_48652__$1 = cljs.core.seq(inst_48638);
var state_48697__$1 = (function (){var statearr_48724 = state_48697;
(statearr_48724[(10)] = inst_48652__$1);

return statearr_48724;
})();
if(inst_48652__$1){
var statearr_48727_50185 = state_48697__$1;
(statearr_48727_50185[(1)] = (13));

} else {
var statearr_48728_50186 = state_48697__$1;
(statearr_48728_50186[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48698 === (9))){
var inst_48674 = (state_48697[(2)]);
var state_48697__$1 = state_48697;
var statearr_48729_50187 = state_48697__$1;
(statearr_48729_50187[(2)] = inst_48674);

(statearr_48729_50187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48698 === (5))){
var inst_48635 = cljs.core.deref(mults);
var inst_48636 = cljs.core.vals(inst_48635);
var inst_48637 = cljs.core.seq(inst_48636);
var inst_48638 = inst_48637;
var inst_48639 = null;
var inst_48640 = (0);
var inst_48641 = (0);
var state_48697__$1 = (function (){var statearr_48732 = state_48697;
(statearr_48732[(12)] = inst_48638);

(statearr_48732[(14)] = inst_48640);

(statearr_48732[(15)] = inst_48641);

(statearr_48732[(16)] = inst_48639);

return statearr_48732;
})();
var statearr_48733_50188 = state_48697__$1;
(statearr_48733_50188[(2)] = null);

(statearr_48733_50188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48698 === (14))){
var state_48697__$1 = state_48697;
var statearr_48737_50189 = state_48697__$1;
(statearr_48737_50189[(2)] = null);

(statearr_48737_50189[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48698 === (16))){
var inst_48652 = (state_48697[(10)]);
var inst_48656 = cljs.core.chunk_first(inst_48652);
var inst_48657 = cljs.core.chunk_rest(inst_48652);
var inst_48658 = cljs.core.count(inst_48656);
var inst_48638 = inst_48657;
var inst_48639 = inst_48656;
var inst_48640 = inst_48658;
var inst_48641 = (0);
var state_48697__$1 = (function (){var statearr_48739 = state_48697;
(statearr_48739[(12)] = inst_48638);

(statearr_48739[(14)] = inst_48640);

(statearr_48739[(15)] = inst_48641);

(statearr_48739[(16)] = inst_48639);

return statearr_48739;
})();
var statearr_48740_50190 = state_48697__$1;
(statearr_48740_50190[(2)] = null);

(statearr_48740_50190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48698 === (10))){
var inst_48638 = (state_48697[(12)]);
var inst_48640 = (state_48697[(14)]);
var inst_48641 = (state_48697[(15)]);
var inst_48639 = (state_48697[(16)]);
var inst_48646 = cljs.core._nth(inst_48639,inst_48641);
var inst_48647 = cljs.core.async.muxch_STAR_(inst_48646);
var inst_48648 = cljs.core.async.close_BANG_(inst_48647);
var inst_48649 = (inst_48641 + (1));
var tmp48734 = inst_48638;
var tmp48735 = inst_48640;
var tmp48736 = inst_48639;
var inst_48638__$1 = tmp48734;
var inst_48639__$1 = tmp48736;
var inst_48640__$1 = tmp48735;
var inst_48641__$1 = inst_48649;
var state_48697__$1 = (function (){var statearr_48743 = state_48697;
(statearr_48743[(12)] = inst_48638__$1);

(statearr_48743[(14)] = inst_48640__$1);

(statearr_48743[(15)] = inst_48641__$1);

(statearr_48743[(17)] = inst_48648);

(statearr_48743[(16)] = inst_48639__$1);

return statearr_48743;
})();
var statearr_48744_50193 = state_48697__$1;
(statearr_48744_50193[(2)] = null);

(statearr_48744_50193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48698 === (18))){
var inst_48667 = (state_48697[(2)]);
var state_48697__$1 = state_48697;
var statearr_48745_50194 = state_48697__$1;
(statearr_48745_50194[(2)] = inst_48667);

(statearr_48745_50194[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48698 === (8))){
var inst_48640 = (state_48697[(14)]);
var inst_48641 = (state_48697[(15)]);
var inst_48643 = (inst_48641 < inst_48640);
var inst_48644 = inst_48643;
var state_48697__$1 = state_48697;
if(cljs.core.truth_(inst_48644)){
var statearr_48746_50195 = state_48697__$1;
(statearr_48746_50195[(1)] = (10));

} else {
var statearr_48747_50197 = state_48697__$1;
(statearr_48747_50197[(1)] = (11));

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
var cljs$core$async$state_machine__47247__auto__ = null;
var cljs$core$async$state_machine__47247__auto____0 = (function (){
var statearr_48748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48748[(0)] = cljs$core$async$state_machine__47247__auto__);

(statearr_48748[(1)] = (1));

return statearr_48748;
});
var cljs$core$async$state_machine__47247__auto____1 = (function (state_48697){
while(true){
var ret_value__47248__auto__ = (function (){try{while(true){
var result__47249__auto__ = switch__47246__auto__(state_48697);
if(cljs.core.keyword_identical_QMARK_(result__47249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47249__auto__;
}
break;
}
}catch (e48749){var ex__47250__auto__ = e48749;
var statearr_48750_50201 = state_48697;
(statearr_48750_50201[(2)] = ex__47250__auto__);


if(cljs.core.seq((state_48697[(4)]))){
var statearr_48751_50202 = state_48697;
(statearr_48751_50202[(1)] = cljs.core.first((state_48697[(4)])));

} else {
throw ex__47250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50203 = state_48697;
state_48697 = G__50203;
continue;
} else {
return ret_value__47248__auto__;
}
break;
}
});
cljs$core$async$state_machine__47247__auto__ = function(state_48697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47247__auto____1.call(this,state_48697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47247__auto____0;
cljs$core$async$state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47247__auto____1;
return cljs$core$async$state_machine__47247__auto__;
})()
})();
var state__47339__auto__ = (function (){var statearr_48752 = f__47338__auto__();
(statearr_48752[(6)] = c__47337__auto___50164);

return statearr_48752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47339__auto__);
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
var G__48766 = arguments.length;
switch (G__48766) {
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
var G__48768 = arguments.length;
switch (G__48768) {
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
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
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
var G__48772 = arguments.length;
switch (G__48772) {
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
var c__47337__auto___50218 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47338__auto__ = (function (){var switch__47246__auto__ = (function (state_48824){
var state_val_48825 = (state_48824[(1)]);
if((state_val_48825 === (7))){
var state_48824__$1 = state_48824;
var statearr_48826_50224 = state_48824__$1;
(statearr_48826_50224[(2)] = null);

(statearr_48826_50224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48825 === (1))){
var state_48824__$1 = state_48824;
var statearr_48827_50225 = state_48824__$1;
(statearr_48827_50225[(2)] = null);

(statearr_48827_50225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48825 === (4))){
var inst_48779 = (state_48824[(7)]);
var inst_48778 = (state_48824[(8)]);
var inst_48783 = (inst_48779 < inst_48778);
var state_48824__$1 = state_48824;
if(cljs.core.truth_(inst_48783)){
var statearr_48828_50226 = state_48824__$1;
(statearr_48828_50226[(1)] = (6));

} else {
var statearr_48829_50227 = state_48824__$1;
(statearr_48829_50227[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48825 === (15))){
var inst_48808 = (state_48824[(9)]);
var inst_48813 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_48808);
var state_48824__$1 = state_48824;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48824__$1,(17),out,inst_48813);
} else {
if((state_val_48825 === (13))){
var inst_48808 = (state_48824[(9)]);
var inst_48808__$1 = (state_48824[(2)]);
var inst_48809 = cljs.core.some(cljs.core.nil_QMARK_,inst_48808__$1);
var state_48824__$1 = (function (){var statearr_48831 = state_48824;
(statearr_48831[(9)] = inst_48808__$1);

return statearr_48831;
})();
if(cljs.core.truth_(inst_48809)){
var statearr_48832_50228 = state_48824__$1;
(statearr_48832_50228[(1)] = (14));

} else {
var statearr_48833_50229 = state_48824__$1;
(statearr_48833_50229[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48825 === (6))){
var state_48824__$1 = state_48824;
var statearr_48834_50230 = state_48824__$1;
(statearr_48834_50230[(2)] = null);

(statearr_48834_50230[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48825 === (17))){
var inst_48815 = (state_48824[(2)]);
var state_48824__$1 = (function (){var statearr_48836 = state_48824;
(statearr_48836[(10)] = inst_48815);

return statearr_48836;
})();
var statearr_48837_50231 = state_48824__$1;
(statearr_48837_50231[(2)] = null);

(statearr_48837_50231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48825 === (3))){
var inst_48820 = (state_48824[(2)]);
var state_48824__$1 = state_48824;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48824__$1,inst_48820);
} else {
if((state_val_48825 === (12))){
var _ = (function (){var statearr_48838 = state_48824;
(statearr_48838[(4)] = cljs.core.rest((state_48824[(4)])));

return statearr_48838;
})();
var state_48824__$1 = state_48824;
var ex48835 = (state_48824__$1[(2)]);
var statearr_48843_50232 = state_48824__$1;
(statearr_48843_50232[(5)] = ex48835);


if((ex48835 instanceof Object)){
var statearr_48844_50233 = state_48824__$1;
(statearr_48844_50233[(1)] = (11));

(statearr_48844_50233[(5)] = null);

} else {
throw ex48835;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48825 === (2))){
var inst_48777 = cljs.core.reset_BANG_(dctr,cnt);
var inst_48778 = cnt;
var inst_48779 = (0);
var state_48824__$1 = (function (){var statearr_48845 = state_48824;
(statearr_48845[(7)] = inst_48779);

(statearr_48845[(8)] = inst_48778);

(statearr_48845[(11)] = inst_48777);

return statearr_48845;
})();
var statearr_48846_50234 = state_48824__$1;
(statearr_48846_50234[(2)] = null);

(statearr_48846_50234[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48825 === (11))){
var inst_48787 = (state_48824[(2)]);
var inst_48788 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_48824__$1 = (function (){var statearr_48847 = state_48824;
(statearr_48847[(12)] = inst_48787);

return statearr_48847;
})();
var statearr_48848_50235 = state_48824__$1;
(statearr_48848_50235[(2)] = inst_48788);

(statearr_48848_50235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48825 === (9))){
var inst_48779 = (state_48824[(7)]);
var _ = (function (){var statearr_48849 = state_48824;
(statearr_48849[(4)] = cljs.core.cons((12),(state_48824[(4)])));

return statearr_48849;
})();
var inst_48794 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_48779) : chs__$1.call(null,inst_48779));
var inst_48795 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_48779) : done.call(null,inst_48779));
var inst_48796 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_48794,inst_48795);
var ___$1 = (function (){var statearr_48850 = state_48824;
(statearr_48850[(4)] = cljs.core.rest((state_48824[(4)])));

return statearr_48850;
})();
var state_48824__$1 = state_48824;
var statearr_48851_50236 = state_48824__$1;
(statearr_48851_50236[(2)] = inst_48796);

(statearr_48851_50236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48825 === (5))){
var inst_48806 = (state_48824[(2)]);
var state_48824__$1 = (function (){var statearr_48852 = state_48824;
(statearr_48852[(13)] = inst_48806);

return statearr_48852;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48824__$1,(13),dchan);
} else {
if((state_val_48825 === (14))){
var inst_48811 = cljs.core.async.close_BANG_(out);
var state_48824__$1 = state_48824;
var statearr_48853_50239 = state_48824__$1;
(statearr_48853_50239[(2)] = inst_48811);

(statearr_48853_50239[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48825 === (16))){
var inst_48818 = (state_48824[(2)]);
var state_48824__$1 = state_48824;
var statearr_48856_50241 = state_48824__$1;
(statearr_48856_50241[(2)] = inst_48818);

(statearr_48856_50241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48825 === (10))){
var inst_48779 = (state_48824[(7)]);
var inst_48799 = (state_48824[(2)]);
var inst_48800 = (inst_48779 + (1));
var inst_48779__$1 = inst_48800;
var state_48824__$1 = (function (){var statearr_48858 = state_48824;
(statearr_48858[(7)] = inst_48779__$1);

(statearr_48858[(14)] = inst_48799);

return statearr_48858;
})();
var statearr_48859_50242 = state_48824__$1;
(statearr_48859_50242[(2)] = null);

(statearr_48859_50242[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48825 === (8))){
var inst_48804 = (state_48824[(2)]);
var state_48824__$1 = state_48824;
var statearr_48860_50243 = state_48824__$1;
(statearr_48860_50243[(2)] = inst_48804);

(statearr_48860_50243[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__47247__auto__ = null;
var cljs$core$async$state_machine__47247__auto____0 = (function (){
var statearr_48861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48861[(0)] = cljs$core$async$state_machine__47247__auto__);

(statearr_48861[(1)] = (1));

return statearr_48861;
});
var cljs$core$async$state_machine__47247__auto____1 = (function (state_48824){
while(true){
var ret_value__47248__auto__ = (function (){try{while(true){
var result__47249__auto__ = switch__47246__auto__(state_48824);
if(cljs.core.keyword_identical_QMARK_(result__47249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47249__auto__;
}
break;
}
}catch (e48862){var ex__47250__auto__ = e48862;
var statearr_48863_50244 = state_48824;
(statearr_48863_50244[(2)] = ex__47250__auto__);


if(cljs.core.seq((state_48824[(4)]))){
var statearr_48864_50245 = state_48824;
(statearr_48864_50245[(1)] = cljs.core.first((state_48824[(4)])));

} else {
throw ex__47250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50246 = state_48824;
state_48824 = G__50246;
continue;
} else {
return ret_value__47248__auto__;
}
break;
}
});
cljs$core$async$state_machine__47247__auto__ = function(state_48824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47247__auto____1.call(this,state_48824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47247__auto____0;
cljs$core$async$state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47247__auto____1;
return cljs$core$async$state_machine__47247__auto__;
})()
})();
var state__47339__auto__ = (function (){var statearr_48865 = f__47338__auto__();
(statearr_48865[(6)] = c__47337__auto___50218);

return statearr_48865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47339__auto__);
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
var G__48872 = arguments.length;
switch (G__48872) {
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
var c__47337__auto___50249 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47338__auto__ = (function (){var switch__47246__auto__ = (function (state_48904){
var state_val_48905 = (state_48904[(1)]);
if((state_val_48905 === (7))){
var inst_48884 = (state_48904[(7)]);
var inst_48883 = (state_48904[(8)]);
var inst_48883__$1 = (state_48904[(2)]);
var inst_48884__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48883__$1,(0),null);
var inst_48885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48883__$1,(1),null);
var inst_48886 = (inst_48884__$1 == null);
var state_48904__$1 = (function (){var statearr_48907 = state_48904;
(statearr_48907[(7)] = inst_48884__$1);

(statearr_48907[(8)] = inst_48883__$1);

(statearr_48907[(9)] = inst_48885);

return statearr_48907;
})();
if(cljs.core.truth_(inst_48886)){
var statearr_48908_50250 = state_48904__$1;
(statearr_48908_50250[(1)] = (8));

} else {
var statearr_48909_50251 = state_48904__$1;
(statearr_48909_50251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48905 === (1))){
var inst_48873 = cljs.core.vec(chs);
var inst_48874 = inst_48873;
var state_48904__$1 = (function (){var statearr_48910 = state_48904;
(statearr_48910[(10)] = inst_48874);

return statearr_48910;
})();
var statearr_48911_50252 = state_48904__$1;
(statearr_48911_50252[(2)] = null);

(statearr_48911_50252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48905 === (4))){
var inst_48874 = (state_48904[(10)]);
var state_48904__$1 = state_48904;
return cljs.core.async.ioc_alts_BANG_(state_48904__$1,(7),inst_48874);
} else {
if((state_val_48905 === (6))){
var inst_48900 = (state_48904[(2)]);
var state_48904__$1 = state_48904;
var statearr_48912_50253 = state_48904__$1;
(statearr_48912_50253[(2)] = inst_48900);

(statearr_48912_50253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48905 === (3))){
var inst_48902 = (state_48904[(2)]);
var state_48904__$1 = state_48904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48904__$1,inst_48902);
} else {
if((state_val_48905 === (2))){
var inst_48874 = (state_48904[(10)]);
var inst_48876 = cljs.core.count(inst_48874);
var inst_48877 = (inst_48876 > (0));
var state_48904__$1 = state_48904;
if(cljs.core.truth_(inst_48877)){
var statearr_48914_50254 = state_48904__$1;
(statearr_48914_50254[(1)] = (4));

} else {
var statearr_48915_50255 = state_48904__$1;
(statearr_48915_50255[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48905 === (11))){
var inst_48874 = (state_48904[(10)]);
var inst_48893 = (state_48904[(2)]);
var tmp48913 = inst_48874;
var inst_48874__$1 = tmp48913;
var state_48904__$1 = (function (){var statearr_48930 = state_48904;
(statearr_48930[(10)] = inst_48874__$1);

(statearr_48930[(11)] = inst_48893);

return statearr_48930;
})();
var statearr_48931_50256 = state_48904__$1;
(statearr_48931_50256[(2)] = null);

(statearr_48931_50256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48905 === (9))){
var inst_48884 = (state_48904[(7)]);
var state_48904__$1 = state_48904;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48904__$1,(11),out,inst_48884);
} else {
if((state_val_48905 === (5))){
var inst_48898 = cljs.core.async.close_BANG_(out);
var state_48904__$1 = state_48904;
var statearr_48932_50257 = state_48904__$1;
(statearr_48932_50257[(2)] = inst_48898);

(statearr_48932_50257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48905 === (10))){
var inst_48896 = (state_48904[(2)]);
var state_48904__$1 = state_48904;
var statearr_48933_50258 = state_48904__$1;
(statearr_48933_50258[(2)] = inst_48896);

(statearr_48933_50258[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48905 === (8))){
var inst_48884 = (state_48904[(7)]);
var inst_48883 = (state_48904[(8)]);
var inst_48874 = (state_48904[(10)]);
var inst_48885 = (state_48904[(9)]);
var inst_48888 = (function (){var cs = inst_48874;
var vec__48879 = inst_48883;
var v = inst_48884;
var c = inst_48885;
return (function (p1__48870_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__48870_SHARP_);
});
})();
var inst_48889 = cljs.core.filterv(inst_48888,inst_48874);
var inst_48874__$1 = inst_48889;
var state_48904__$1 = (function (){var statearr_48934 = state_48904;
(statearr_48934[(10)] = inst_48874__$1);

return statearr_48934;
})();
var statearr_48935_50259 = state_48904__$1;
(statearr_48935_50259[(2)] = null);

(statearr_48935_50259[(1)] = (2));


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
var cljs$core$async$state_machine__47247__auto__ = null;
var cljs$core$async$state_machine__47247__auto____0 = (function (){
var statearr_48938 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48938[(0)] = cljs$core$async$state_machine__47247__auto__);

(statearr_48938[(1)] = (1));

return statearr_48938;
});
var cljs$core$async$state_machine__47247__auto____1 = (function (state_48904){
while(true){
var ret_value__47248__auto__ = (function (){try{while(true){
var result__47249__auto__ = switch__47246__auto__(state_48904);
if(cljs.core.keyword_identical_QMARK_(result__47249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47249__auto__;
}
break;
}
}catch (e48940){var ex__47250__auto__ = e48940;
var statearr_48941_50260 = state_48904;
(statearr_48941_50260[(2)] = ex__47250__auto__);


if(cljs.core.seq((state_48904[(4)]))){
var statearr_48942_50261 = state_48904;
(statearr_48942_50261[(1)] = cljs.core.first((state_48904[(4)])));

} else {
throw ex__47250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50262 = state_48904;
state_48904 = G__50262;
continue;
} else {
return ret_value__47248__auto__;
}
break;
}
});
cljs$core$async$state_machine__47247__auto__ = function(state_48904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47247__auto____1.call(this,state_48904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47247__auto____0;
cljs$core$async$state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47247__auto____1;
return cljs$core$async$state_machine__47247__auto__;
})()
})();
var state__47339__auto__ = (function (){var statearr_48945 = f__47338__auto__();
(statearr_48945[(6)] = c__47337__auto___50249);

return statearr_48945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47339__auto__);
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
var G__48955 = arguments.length;
switch (G__48955) {
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
var c__47337__auto___50264 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47338__auto__ = (function (){var switch__47246__auto__ = (function (state_48988){
var state_val_48989 = (state_48988[(1)]);
if((state_val_48989 === (7))){
var inst_48967 = (state_48988[(7)]);
var inst_48967__$1 = (state_48988[(2)]);
var inst_48969 = (inst_48967__$1 == null);
var inst_48970 = cljs.core.not(inst_48969);
var state_48988__$1 = (function (){var statearr_48996 = state_48988;
(statearr_48996[(7)] = inst_48967__$1);

return statearr_48996;
})();
if(inst_48970){
var statearr_48997_50265 = state_48988__$1;
(statearr_48997_50265[(1)] = (8));

} else {
var statearr_48998_50266 = state_48988__$1;
(statearr_48998_50266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48989 === (1))){
var inst_48962 = (0);
var state_48988__$1 = (function (){var statearr_49002 = state_48988;
(statearr_49002[(8)] = inst_48962);

return statearr_49002;
})();
var statearr_49003_50267 = state_48988__$1;
(statearr_49003_50267[(2)] = null);

(statearr_49003_50267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48989 === (4))){
var state_48988__$1 = state_48988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48988__$1,(7),ch);
} else {
if((state_val_48989 === (6))){
var inst_48983 = (state_48988[(2)]);
var state_48988__$1 = state_48988;
var statearr_49006_50270 = state_48988__$1;
(statearr_49006_50270[(2)] = inst_48983);

(statearr_49006_50270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48989 === (3))){
var inst_48985 = (state_48988[(2)]);
var inst_48986 = cljs.core.async.close_BANG_(out);
var state_48988__$1 = (function (){var statearr_49008 = state_48988;
(statearr_49008[(9)] = inst_48985);

return statearr_49008;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48988__$1,inst_48986);
} else {
if((state_val_48989 === (2))){
var inst_48962 = (state_48988[(8)]);
var inst_48964 = (inst_48962 < n);
var state_48988__$1 = state_48988;
if(cljs.core.truth_(inst_48964)){
var statearr_49010_50271 = state_48988__$1;
(statearr_49010_50271[(1)] = (4));

} else {
var statearr_49011_50272 = state_48988__$1;
(statearr_49011_50272[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48989 === (11))){
var inst_48962 = (state_48988[(8)]);
var inst_48974 = (state_48988[(2)]);
var inst_48976 = (inst_48962 + (1));
var inst_48962__$1 = inst_48976;
var state_48988__$1 = (function (){var statearr_49012 = state_48988;
(statearr_49012[(8)] = inst_48962__$1);

(statearr_49012[(10)] = inst_48974);

return statearr_49012;
})();
var statearr_49013_50275 = state_48988__$1;
(statearr_49013_50275[(2)] = null);

(statearr_49013_50275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48989 === (9))){
var state_48988__$1 = state_48988;
var statearr_49014_50276 = state_48988__$1;
(statearr_49014_50276[(2)] = null);

(statearr_49014_50276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48989 === (5))){
var state_48988__$1 = state_48988;
var statearr_49015_50278 = state_48988__$1;
(statearr_49015_50278[(2)] = null);

(statearr_49015_50278[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48989 === (10))){
var inst_48980 = (state_48988[(2)]);
var state_48988__$1 = state_48988;
var statearr_49016_50279 = state_48988__$1;
(statearr_49016_50279[(2)] = inst_48980);

(statearr_49016_50279[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48989 === (8))){
var inst_48967 = (state_48988[(7)]);
var state_48988__$1 = state_48988;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48988__$1,(11),out,inst_48967);
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
var cljs$core$async$state_machine__47247__auto__ = null;
var cljs$core$async$state_machine__47247__auto____0 = (function (){
var statearr_49017 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49017[(0)] = cljs$core$async$state_machine__47247__auto__);

(statearr_49017[(1)] = (1));

return statearr_49017;
});
var cljs$core$async$state_machine__47247__auto____1 = (function (state_48988){
while(true){
var ret_value__47248__auto__ = (function (){try{while(true){
var result__47249__auto__ = switch__47246__auto__(state_48988);
if(cljs.core.keyword_identical_QMARK_(result__47249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47249__auto__;
}
break;
}
}catch (e49018){var ex__47250__auto__ = e49018;
var statearr_49019_50281 = state_48988;
(statearr_49019_50281[(2)] = ex__47250__auto__);


if(cljs.core.seq((state_48988[(4)]))){
var statearr_49020_50282 = state_48988;
(statearr_49020_50282[(1)] = cljs.core.first((state_48988[(4)])));

} else {
throw ex__47250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50283 = state_48988;
state_48988 = G__50283;
continue;
} else {
return ret_value__47248__auto__;
}
break;
}
});
cljs$core$async$state_machine__47247__auto__ = function(state_48988){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47247__auto____1.call(this,state_48988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47247__auto____0;
cljs$core$async$state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47247__auto____1;
return cljs$core$async$state_machine__47247__auto__;
})()
})();
var state__47339__auto__ = (function (){var statearr_49021 = f__47338__auto__();
(statearr_49021[(6)] = c__47337__auto___50264);

return statearr_49021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47339__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49024 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49024 = (function (f,ch,meta49025){
this.f = f;
this.ch = ch;
this.meta49025 = meta49025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49026,meta49025__$1){
var self__ = this;
var _49026__$1 = this;
return (new cljs.core.async.t_cljs$core$async49024(self__.f,self__.ch,meta49025__$1));
}));

(cljs.core.async.t_cljs$core$async49024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49026){
var self__ = this;
var _49026__$1 = this;
return self__.meta49025;
}));

(cljs.core.async.t_cljs$core$async49024.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49024.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49024.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49024.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49024.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49031 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49031 = (function (f,ch,meta49025,_,fn1,meta49032){
this.f = f;
this.ch = ch;
this.meta49025 = meta49025;
this._ = _;
this.fn1 = fn1;
this.meta49032 = meta49032;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49033,meta49032__$1){
var self__ = this;
var _49033__$1 = this;
return (new cljs.core.async.t_cljs$core$async49031(self__.f,self__.ch,self__.meta49025,self__._,self__.fn1,meta49032__$1));
}));

(cljs.core.async.t_cljs$core$async49031.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49033){
var self__ = this;
var _49033__$1 = this;
return self__.meta49032;
}));

(cljs.core.async.t_cljs$core$async49031.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49031.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async49031.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49031.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__49022_SHARP_){
var G__49044 = (((p1__49022_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__49022_SHARP_) : self__.f.call(null,p1__49022_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__49044) : f1.call(null,G__49044));
});
}));

(cljs.core.async.t_cljs$core$async49031.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49025","meta49025",394550304,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49024","cljs.core.async/t_cljs$core$async49024",242245310,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta49032","meta49032",-1789625713,null)], null);
}));

(cljs.core.async.t_cljs$core$async49031.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49031.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49031");

(cljs.core.async.t_cljs$core$async49031.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49031");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49031.
 */
cljs.core.async.__GT_t_cljs$core$async49031 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49031(f__$1,ch__$1,meta49025__$1,___$2,fn1__$1,meta49032){
return (new cljs.core.async.t_cljs$core$async49031(f__$1,ch__$1,meta49025__$1,___$2,fn1__$1,meta49032));
});

}

return (new cljs.core.async.t_cljs$core$async49031(self__.f,self__.ch,self__.meta49025,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__49054 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__49054) : self__.f.call(null,G__49054));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async49024.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49024.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async49024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49025","meta49025",394550304,null)], null);
}));

(cljs.core.async.t_cljs$core$async49024.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49024");

(cljs.core.async.t_cljs$core$async49024.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49024");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49024.
 */
cljs.core.async.__GT_t_cljs$core$async49024 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49024(f__$1,ch__$1,meta49025){
return (new cljs.core.async.t_cljs$core$async49024(f__$1,ch__$1,meta49025));
});

}

return (new cljs.core.async.t_cljs$core$async49024(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49071 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49071 = (function (f,ch,meta49072){
this.f = f;
this.ch = ch;
this.meta49072 = meta49072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49073,meta49072__$1){
var self__ = this;
var _49073__$1 = this;
return (new cljs.core.async.t_cljs$core$async49071(self__.f,self__.ch,meta49072__$1));
}));

(cljs.core.async.t_cljs$core$async49071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49073){
var self__ = this;
var _49073__$1 = this;
return self__.meta49072;
}));

(cljs.core.async.t_cljs$core$async49071.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49071.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49071.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49071.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49071.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49071.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async49071.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49072","meta49072",282904416,null)], null);
}));

(cljs.core.async.t_cljs$core$async49071.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49071");

(cljs.core.async.t_cljs$core$async49071.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49071");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49071.
 */
cljs.core.async.__GT_t_cljs$core$async49071 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async49071(f__$1,ch__$1,meta49072){
return (new cljs.core.async.t_cljs$core$async49071(f__$1,ch__$1,meta49072));
});

}

return (new cljs.core.async.t_cljs$core$async49071(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49103 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49103 = (function (p,ch,meta49104){
this.p = p;
this.ch = ch;
this.meta49104 = meta49104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49105,meta49104__$1){
var self__ = this;
var _49105__$1 = this;
return (new cljs.core.async.t_cljs$core$async49103(self__.p,self__.ch,meta49104__$1));
}));

(cljs.core.async.t_cljs$core$async49103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49105){
var self__ = this;
var _49105__$1 = this;
return self__.meta49104;
}));

(cljs.core.async.t_cljs$core$async49103.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49103.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49103.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49103.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49103.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49103.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49103.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async49103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49104","meta49104",-595189245,null)], null);
}));

(cljs.core.async.t_cljs$core$async49103.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49103");

(cljs.core.async.t_cljs$core$async49103.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49103");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49103.
 */
cljs.core.async.__GT_t_cljs$core$async49103 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async49103(p__$1,ch__$1,meta49104){
return (new cljs.core.async.t_cljs$core$async49103(p__$1,ch__$1,meta49104));
});

}

return (new cljs.core.async.t_cljs$core$async49103(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__49128 = arguments.length;
switch (G__49128) {
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
var c__47337__auto___50289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47338__auto__ = (function (){var switch__47246__auto__ = (function (state_49160){
var state_val_49161 = (state_49160[(1)]);
if((state_val_49161 === (7))){
var inst_49156 = (state_49160[(2)]);
var state_49160__$1 = state_49160;
var statearr_49165_50290 = state_49160__$1;
(statearr_49165_50290[(2)] = inst_49156);

(statearr_49165_50290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49161 === (1))){
var state_49160__$1 = state_49160;
var statearr_49167_50291 = state_49160__$1;
(statearr_49167_50291[(2)] = null);

(statearr_49167_50291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49161 === (4))){
var inst_49139 = (state_49160[(7)]);
var inst_49139__$1 = (state_49160[(2)]);
var inst_49140 = (inst_49139__$1 == null);
var state_49160__$1 = (function (){var statearr_49168 = state_49160;
(statearr_49168[(7)] = inst_49139__$1);

return statearr_49168;
})();
if(cljs.core.truth_(inst_49140)){
var statearr_49169_50292 = state_49160__$1;
(statearr_49169_50292[(1)] = (5));

} else {
var statearr_49170_50293 = state_49160__$1;
(statearr_49170_50293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49161 === (6))){
var inst_49139 = (state_49160[(7)]);
var inst_49146 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49139) : p.call(null,inst_49139));
var state_49160__$1 = state_49160;
if(cljs.core.truth_(inst_49146)){
var statearr_49171_50294 = state_49160__$1;
(statearr_49171_50294[(1)] = (8));

} else {
var statearr_49172_50295 = state_49160__$1;
(statearr_49172_50295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49161 === (3))){
var inst_49158 = (state_49160[(2)]);
var state_49160__$1 = state_49160;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49160__$1,inst_49158);
} else {
if((state_val_49161 === (2))){
var state_49160__$1 = state_49160;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49160__$1,(4),ch);
} else {
if((state_val_49161 === (11))){
var inst_49149 = (state_49160[(2)]);
var state_49160__$1 = state_49160;
var statearr_49175_50296 = state_49160__$1;
(statearr_49175_50296[(2)] = inst_49149);

(statearr_49175_50296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49161 === (9))){
var state_49160__$1 = state_49160;
var statearr_49176_50297 = state_49160__$1;
(statearr_49176_50297[(2)] = null);

(statearr_49176_50297[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49161 === (5))){
var inst_49143 = cljs.core.async.close_BANG_(out);
var state_49160__$1 = state_49160;
var statearr_49179_50298 = state_49160__$1;
(statearr_49179_50298[(2)] = inst_49143);

(statearr_49179_50298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49161 === (10))){
var inst_49153 = (state_49160[(2)]);
var state_49160__$1 = (function (){var statearr_49180 = state_49160;
(statearr_49180[(8)] = inst_49153);

return statearr_49180;
})();
var statearr_49181_50299 = state_49160__$1;
(statearr_49181_50299[(2)] = null);

(statearr_49181_50299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49161 === (8))){
var inst_49139 = (state_49160[(7)]);
var state_49160__$1 = state_49160;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49160__$1,(11),out,inst_49139);
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
var cljs$core$async$state_machine__47247__auto__ = null;
var cljs$core$async$state_machine__47247__auto____0 = (function (){
var statearr_49184 = [null,null,null,null,null,null,null,null,null];
(statearr_49184[(0)] = cljs$core$async$state_machine__47247__auto__);

(statearr_49184[(1)] = (1));

return statearr_49184;
});
var cljs$core$async$state_machine__47247__auto____1 = (function (state_49160){
while(true){
var ret_value__47248__auto__ = (function (){try{while(true){
var result__47249__auto__ = switch__47246__auto__(state_49160);
if(cljs.core.keyword_identical_QMARK_(result__47249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47249__auto__;
}
break;
}
}catch (e49188){var ex__47250__auto__ = e49188;
var statearr_49189_50300 = state_49160;
(statearr_49189_50300[(2)] = ex__47250__auto__);


if(cljs.core.seq((state_49160[(4)]))){
var statearr_49191_50301 = state_49160;
(statearr_49191_50301[(1)] = cljs.core.first((state_49160[(4)])));

} else {
throw ex__47250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50302 = state_49160;
state_49160 = G__50302;
continue;
} else {
return ret_value__47248__auto__;
}
break;
}
});
cljs$core$async$state_machine__47247__auto__ = function(state_49160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47247__auto____1.call(this,state_49160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47247__auto____0;
cljs$core$async$state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47247__auto____1;
return cljs$core$async$state_machine__47247__auto__;
})()
})();
var state__47339__auto__ = (function (){var statearr_49195 = f__47338__auto__();
(statearr_49195[(6)] = c__47337__auto___50289);

return statearr_49195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47339__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__49201 = arguments.length;
switch (G__49201) {
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
var c__47337__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47338__auto__ = (function (){var switch__47246__auto__ = (function (state_49284){
var state_val_49285 = (state_49284[(1)]);
if((state_val_49285 === (7))){
var inst_49280 = (state_49284[(2)]);
var state_49284__$1 = state_49284;
var statearr_49287_50304 = state_49284__$1;
(statearr_49287_50304[(2)] = inst_49280);

(statearr_49287_50304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49285 === (20))){
var inst_49249 = (state_49284[(7)]);
var inst_49261 = (state_49284[(2)]);
var inst_49262 = cljs.core.next(inst_49249);
var inst_49234 = inst_49262;
var inst_49235 = null;
var inst_49236 = (0);
var inst_49237 = (0);
var state_49284__$1 = (function (){var statearr_49288 = state_49284;
(statearr_49288[(8)] = inst_49234);

(statearr_49288[(9)] = inst_49236);

(statearr_49288[(10)] = inst_49237);

(statearr_49288[(11)] = inst_49235);

(statearr_49288[(12)] = inst_49261);

return statearr_49288;
})();
var statearr_49289_50305 = state_49284__$1;
(statearr_49289_50305[(2)] = null);

(statearr_49289_50305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49285 === (1))){
var state_49284__$1 = state_49284;
var statearr_49290_50308 = state_49284__$1;
(statearr_49290_50308[(2)] = null);

(statearr_49290_50308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49285 === (4))){
var inst_49222 = (state_49284[(13)]);
var inst_49222__$1 = (state_49284[(2)]);
var inst_49223 = (inst_49222__$1 == null);
var state_49284__$1 = (function (){var statearr_49291 = state_49284;
(statearr_49291[(13)] = inst_49222__$1);

return statearr_49291;
})();
if(cljs.core.truth_(inst_49223)){
var statearr_49292_50309 = state_49284__$1;
(statearr_49292_50309[(1)] = (5));

} else {
var statearr_49293_50310 = state_49284__$1;
(statearr_49293_50310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49285 === (15))){
var state_49284__$1 = state_49284;
var statearr_49297_50311 = state_49284__$1;
(statearr_49297_50311[(2)] = null);

(statearr_49297_50311[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49285 === (21))){
var state_49284__$1 = state_49284;
var statearr_49298_50312 = state_49284__$1;
(statearr_49298_50312[(2)] = null);

(statearr_49298_50312[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49285 === (13))){
var inst_49234 = (state_49284[(8)]);
var inst_49236 = (state_49284[(9)]);
var inst_49237 = (state_49284[(10)]);
var inst_49235 = (state_49284[(11)]);
var inst_49245 = (state_49284[(2)]);
var inst_49246 = (inst_49237 + (1));
var tmp49294 = inst_49234;
var tmp49295 = inst_49236;
var tmp49296 = inst_49235;
var inst_49234__$1 = tmp49294;
var inst_49235__$1 = tmp49296;
var inst_49236__$1 = tmp49295;
var inst_49237__$1 = inst_49246;
var state_49284__$1 = (function (){var statearr_49299 = state_49284;
(statearr_49299[(8)] = inst_49234__$1);

(statearr_49299[(9)] = inst_49236__$1);

(statearr_49299[(10)] = inst_49237__$1);

(statearr_49299[(14)] = inst_49245);

(statearr_49299[(11)] = inst_49235__$1);

return statearr_49299;
})();
var statearr_49300_50314 = state_49284__$1;
(statearr_49300_50314[(2)] = null);

(statearr_49300_50314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49285 === (22))){
var state_49284__$1 = state_49284;
var statearr_49301_50315 = state_49284__$1;
(statearr_49301_50315[(2)] = null);

(statearr_49301_50315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49285 === (6))){
var inst_49222 = (state_49284[(13)]);
var inst_49231 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49222) : f.call(null,inst_49222));
var inst_49232 = cljs.core.seq(inst_49231);
var inst_49234 = inst_49232;
var inst_49235 = null;
var inst_49236 = (0);
var inst_49237 = (0);
var state_49284__$1 = (function (){var statearr_49303 = state_49284;
(statearr_49303[(8)] = inst_49234);

(statearr_49303[(9)] = inst_49236);

(statearr_49303[(10)] = inst_49237);

(statearr_49303[(11)] = inst_49235);

return statearr_49303;
})();
var statearr_49304_50318 = state_49284__$1;
(statearr_49304_50318[(2)] = null);

(statearr_49304_50318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49285 === (17))){
var inst_49249 = (state_49284[(7)]);
var inst_49253 = cljs.core.chunk_first(inst_49249);
var inst_49255 = cljs.core.chunk_rest(inst_49249);
var inst_49256 = cljs.core.count(inst_49253);
var inst_49234 = inst_49255;
var inst_49235 = inst_49253;
var inst_49236 = inst_49256;
var inst_49237 = (0);
var state_49284__$1 = (function (){var statearr_49305 = state_49284;
(statearr_49305[(8)] = inst_49234);

(statearr_49305[(9)] = inst_49236);

(statearr_49305[(10)] = inst_49237);

(statearr_49305[(11)] = inst_49235);

return statearr_49305;
})();
var statearr_49306_50319 = state_49284__$1;
(statearr_49306_50319[(2)] = null);

(statearr_49306_50319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49285 === (3))){
var inst_49282 = (state_49284[(2)]);
var state_49284__$1 = state_49284;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49284__$1,inst_49282);
} else {
if((state_val_49285 === (12))){
var inst_49270 = (state_49284[(2)]);
var state_49284__$1 = state_49284;
var statearr_49307_50320 = state_49284__$1;
(statearr_49307_50320[(2)] = inst_49270);

(statearr_49307_50320[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49285 === (2))){
var state_49284__$1 = state_49284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49284__$1,(4),in$);
} else {
if((state_val_49285 === (23))){
var inst_49278 = (state_49284[(2)]);
var state_49284__$1 = state_49284;
var statearr_49314_50321 = state_49284__$1;
(statearr_49314_50321[(2)] = inst_49278);

(statearr_49314_50321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49285 === (19))){
var inst_49265 = (state_49284[(2)]);
var state_49284__$1 = state_49284;
var statearr_49315_50322 = state_49284__$1;
(statearr_49315_50322[(2)] = inst_49265);

(statearr_49315_50322[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49285 === (11))){
var inst_49234 = (state_49284[(8)]);
var inst_49249 = (state_49284[(7)]);
var inst_49249__$1 = cljs.core.seq(inst_49234);
var state_49284__$1 = (function (){var statearr_49316 = state_49284;
(statearr_49316[(7)] = inst_49249__$1);

return statearr_49316;
})();
if(inst_49249__$1){
var statearr_49317_50323 = state_49284__$1;
(statearr_49317_50323[(1)] = (14));

} else {
var statearr_49318_50324 = state_49284__$1;
(statearr_49318_50324[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49285 === (9))){
var inst_49272 = (state_49284[(2)]);
var inst_49273 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_49284__$1 = (function (){var statearr_49319 = state_49284;
(statearr_49319[(15)] = inst_49272);

return statearr_49319;
})();
if(cljs.core.truth_(inst_49273)){
var statearr_49320_50325 = state_49284__$1;
(statearr_49320_50325[(1)] = (21));

} else {
var statearr_49321_50326 = state_49284__$1;
(statearr_49321_50326[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49285 === (5))){
var inst_49225 = cljs.core.async.close_BANG_(out);
var state_49284__$1 = state_49284;
var statearr_49322_50327 = state_49284__$1;
(statearr_49322_50327[(2)] = inst_49225);

(statearr_49322_50327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49285 === (14))){
var inst_49249 = (state_49284[(7)]);
var inst_49251 = cljs.core.chunked_seq_QMARK_(inst_49249);
var state_49284__$1 = state_49284;
if(inst_49251){
var statearr_49323_50328 = state_49284__$1;
(statearr_49323_50328[(1)] = (17));

} else {
var statearr_49324_50329 = state_49284__$1;
(statearr_49324_50329[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49285 === (16))){
var inst_49268 = (state_49284[(2)]);
var state_49284__$1 = state_49284;
var statearr_49335_50330 = state_49284__$1;
(statearr_49335_50330[(2)] = inst_49268);

(statearr_49335_50330[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49285 === (10))){
var inst_49237 = (state_49284[(10)]);
var inst_49235 = (state_49284[(11)]);
var inst_49243 = cljs.core._nth(inst_49235,inst_49237);
var state_49284__$1 = state_49284;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49284__$1,(13),out,inst_49243);
} else {
if((state_val_49285 === (18))){
var inst_49249 = (state_49284[(7)]);
var inst_49259 = cljs.core.first(inst_49249);
var state_49284__$1 = state_49284;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49284__$1,(20),out,inst_49259);
} else {
if((state_val_49285 === (8))){
var inst_49236 = (state_49284[(9)]);
var inst_49237 = (state_49284[(10)]);
var inst_49240 = (inst_49237 < inst_49236);
var inst_49241 = inst_49240;
var state_49284__$1 = state_49284;
if(cljs.core.truth_(inst_49241)){
var statearr_49336_50331 = state_49284__$1;
(statearr_49336_50331[(1)] = (10));

} else {
var statearr_49337_50332 = state_49284__$1;
(statearr_49337_50332[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__47247__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__47247__auto____0 = (function (){
var statearr_49338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49338[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__47247__auto__);

(statearr_49338[(1)] = (1));

return statearr_49338;
});
var cljs$core$async$mapcat_STAR__$_state_machine__47247__auto____1 = (function (state_49284){
while(true){
var ret_value__47248__auto__ = (function (){try{while(true){
var result__47249__auto__ = switch__47246__auto__(state_49284);
if(cljs.core.keyword_identical_QMARK_(result__47249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47249__auto__;
}
break;
}
}catch (e49341){var ex__47250__auto__ = e49341;
var statearr_49342_50333 = state_49284;
(statearr_49342_50333[(2)] = ex__47250__auto__);


if(cljs.core.seq((state_49284[(4)]))){
var statearr_49343_50334 = state_49284;
(statearr_49343_50334[(1)] = cljs.core.first((state_49284[(4)])));

} else {
throw ex__47250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50335 = state_49284;
state_49284 = G__50335;
continue;
} else {
return ret_value__47248__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__47247__auto__ = function(state_49284){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__47247__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__47247__auto____1.call(this,state_49284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__47247__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__47247__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__47247__auto__;
})()
})();
var state__47339__auto__ = (function (){var statearr_49344 = f__47338__auto__();
(statearr_49344[(6)] = c__47337__auto__);

return statearr_49344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47339__auto__);
}));

return c__47337__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__49347 = arguments.length;
switch (G__49347) {
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
var G__49357 = arguments.length;
switch (G__49357) {
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
var G__49362 = arguments.length;
switch (G__49362) {
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
var c__47337__auto___50339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47338__auto__ = (function (){var switch__47246__auto__ = (function (state_49390){
var state_val_49391 = (state_49390[(1)]);
if((state_val_49391 === (7))){
var inst_49385 = (state_49390[(2)]);
var state_49390__$1 = state_49390;
var statearr_49397_50340 = state_49390__$1;
(statearr_49397_50340[(2)] = inst_49385);

(statearr_49397_50340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49391 === (1))){
var inst_49366 = null;
var state_49390__$1 = (function (){var statearr_49401 = state_49390;
(statearr_49401[(7)] = inst_49366);

return statearr_49401;
})();
var statearr_49402_50341 = state_49390__$1;
(statearr_49402_50341[(2)] = null);

(statearr_49402_50341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49391 === (4))){
var inst_49370 = (state_49390[(8)]);
var inst_49370__$1 = (state_49390[(2)]);
var inst_49371 = (inst_49370__$1 == null);
var inst_49372 = cljs.core.not(inst_49371);
var state_49390__$1 = (function (){var statearr_49403 = state_49390;
(statearr_49403[(8)] = inst_49370__$1);

return statearr_49403;
})();
if(inst_49372){
var statearr_49404_50344 = state_49390__$1;
(statearr_49404_50344[(1)] = (5));

} else {
var statearr_49405_50345 = state_49390__$1;
(statearr_49405_50345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49391 === (6))){
var state_49390__$1 = state_49390;
var statearr_49406_50346 = state_49390__$1;
(statearr_49406_50346[(2)] = null);

(statearr_49406_50346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49391 === (3))){
var inst_49387 = (state_49390[(2)]);
var inst_49388 = cljs.core.async.close_BANG_(out);
var state_49390__$1 = (function (){var statearr_49408 = state_49390;
(statearr_49408[(9)] = inst_49387);

return statearr_49408;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49390__$1,inst_49388);
} else {
if((state_val_49391 === (2))){
var state_49390__$1 = state_49390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49390__$1,(4),ch);
} else {
if((state_val_49391 === (11))){
var inst_49370 = (state_49390[(8)]);
var inst_49379 = (state_49390[(2)]);
var inst_49366 = inst_49370;
var state_49390__$1 = (function (){var statearr_49410 = state_49390;
(statearr_49410[(10)] = inst_49379);

(statearr_49410[(7)] = inst_49366);

return statearr_49410;
})();
var statearr_49411_50349 = state_49390__$1;
(statearr_49411_50349[(2)] = null);

(statearr_49411_50349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49391 === (9))){
var inst_49370 = (state_49390[(8)]);
var state_49390__$1 = state_49390;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49390__$1,(11),out,inst_49370);
} else {
if((state_val_49391 === (5))){
var inst_49370 = (state_49390[(8)]);
var inst_49366 = (state_49390[(7)]);
var inst_49374 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49370,inst_49366);
var state_49390__$1 = state_49390;
if(inst_49374){
var statearr_49413_50350 = state_49390__$1;
(statearr_49413_50350[(1)] = (8));

} else {
var statearr_49414_50351 = state_49390__$1;
(statearr_49414_50351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49391 === (10))){
var inst_49382 = (state_49390[(2)]);
var state_49390__$1 = state_49390;
var statearr_49415_50352 = state_49390__$1;
(statearr_49415_50352[(2)] = inst_49382);

(statearr_49415_50352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49391 === (8))){
var inst_49366 = (state_49390[(7)]);
var tmp49412 = inst_49366;
var inst_49366__$1 = tmp49412;
var state_49390__$1 = (function (){var statearr_49416 = state_49390;
(statearr_49416[(7)] = inst_49366__$1);

return statearr_49416;
})();
var statearr_49417_50353 = state_49390__$1;
(statearr_49417_50353[(2)] = null);

(statearr_49417_50353[(1)] = (2));


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
var cljs$core$async$state_machine__47247__auto__ = null;
var cljs$core$async$state_machine__47247__auto____0 = (function (){
var statearr_49418 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49418[(0)] = cljs$core$async$state_machine__47247__auto__);

(statearr_49418[(1)] = (1));

return statearr_49418;
});
var cljs$core$async$state_machine__47247__auto____1 = (function (state_49390){
while(true){
var ret_value__47248__auto__ = (function (){try{while(true){
var result__47249__auto__ = switch__47246__auto__(state_49390);
if(cljs.core.keyword_identical_QMARK_(result__47249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47249__auto__;
}
break;
}
}catch (e49420){var ex__47250__auto__ = e49420;
var statearr_49421_50354 = state_49390;
(statearr_49421_50354[(2)] = ex__47250__auto__);


if(cljs.core.seq((state_49390[(4)]))){
var statearr_49422_50355 = state_49390;
(statearr_49422_50355[(1)] = cljs.core.first((state_49390[(4)])));

} else {
throw ex__47250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50356 = state_49390;
state_49390 = G__50356;
continue;
} else {
return ret_value__47248__auto__;
}
break;
}
});
cljs$core$async$state_machine__47247__auto__ = function(state_49390){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47247__auto____1.call(this,state_49390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47247__auto____0;
cljs$core$async$state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47247__auto____1;
return cljs$core$async$state_machine__47247__auto__;
})()
})();
var state__47339__auto__ = (function (){var statearr_49429 = f__47338__auto__();
(statearr_49429[(6)] = c__47337__auto___50339);

return statearr_49429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47339__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__49436 = arguments.length;
switch (G__49436) {
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
var c__47337__auto___50358 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47338__auto__ = (function (){var switch__47246__auto__ = (function (state_49486){
var state_val_49487 = (state_49486[(1)]);
if((state_val_49487 === (7))){
var inst_49481 = (state_49486[(2)]);
var state_49486__$1 = state_49486;
var statearr_49492_50359 = state_49486__$1;
(statearr_49492_50359[(2)] = inst_49481);

(statearr_49492_50359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49487 === (1))){
var inst_49443 = (new Array(n));
var inst_49444 = inst_49443;
var inst_49445 = (0);
var state_49486__$1 = (function (){var statearr_49495 = state_49486;
(statearr_49495[(7)] = inst_49445);

(statearr_49495[(8)] = inst_49444);

return statearr_49495;
})();
var statearr_49498_50360 = state_49486__$1;
(statearr_49498_50360[(2)] = null);

(statearr_49498_50360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49487 === (4))){
var inst_49448 = (state_49486[(9)]);
var inst_49448__$1 = (state_49486[(2)]);
var inst_49449 = (inst_49448__$1 == null);
var inst_49450 = cljs.core.not(inst_49449);
var state_49486__$1 = (function (){var statearr_49500 = state_49486;
(statearr_49500[(9)] = inst_49448__$1);

return statearr_49500;
})();
if(inst_49450){
var statearr_49501_50361 = state_49486__$1;
(statearr_49501_50361[(1)] = (5));

} else {
var statearr_49502_50362 = state_49486__$1;
(statearr_49502_50362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49487 === (15))){
var inst_49475 = (state_49486[(2)]);
var state_49486__$1 = state_49486;
var statearr_49504_50363 = state_49486__$1;
(statearr_49504_50363[(2)] = inst_49475);

(statearr_49504_50363[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49487 === (13))){
var state_49486__$1 = state_49486;
var statearr_49507_50364 = state_49486__$1;
(statearr_49507_50364[(2)] = null);

(statearr_49507_50364[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49487 === (6))){
var inst_49445 = (state_49486[(7)]);
var inst_49469 = (inst_49445 > (0));
var state_49486__$1 = state_49486;
if(cljs.core.truth_(inst_49469)){
var statearr_49508_50365 = state_49486__$1;
(statearr_49508_50365[(1)] = (12));

} else {
var statearr_49511_50366 = state_49486__$1;
(statearr_49511_50366[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49487 === (3))){
var inst_49483 = (state_49486[(2)]);
var state_49486__$1 = state_49486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49486__$1,inst_49483);
} else {
if((state_val_49487 === (12))){
var inst_49444 = (state_49486[(8)]);
var inst_49473 = cljs.core.vec(inst_49444);
var state_49486__$1 = state_49486;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49486__$1,(15),out,inst_49473);
} else {
if((state_val_49487 === (2))){
var state_49486__$1 = state_49486;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49486__$1,(4),ch);
} else {
if((state_val_49487 === (11))){
var inst_49462 = (state_49486[(2)]);
var inst_49464 = (new Array(n));
var inst_49444 = inst_49464;
var inst_49445 = (0);
var state_49486__$1 = (function (){var statearr_49516 = state_49486;
(statearr_49516[(7)] = inst_49445);

(statearr_49516[(8)] = inst_49444);

(statearr_49516[(10)] = inst_49462);

return statearr_49516;
})();
var statearr_49517_50367 = state_49486__$1;
(statearr_49517_50367[(2)] = null);

(statearr_49517_50367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49487 === (9))){
var inst_49444 = (state_49486[(8)]);
var inst_49460 = cljs.core.vec(inst_49444);
var state_49486__$1 = state_49486;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49486__$1,(11),out,inst_49460);
} else {
if((state_val_49487 === (5))){
var inst_49448 = (state_49486[(9)]);
var inst_49454 = (state_49486[(11)]);
var inst_49445 = (state_49486[(7)]);
var inst_49444 = (state_49486[(8)]);
var inst_49453 = (inst_49444[inst_49445] = inst_49448);
var inst_49454__$1 = (inst_49445 + (1));
var inst_49455 = (inst_49454__$1 < n);
var state_49486__$1 = (function (){var statearr_49519 = state_49486;
(statearr_49519[(11)] = inst_49454__$1);

(statearr_49519[(12)] = inst_49453);

return statearr_49519;
})();
if(cljs.core.truth_(inst_49455)){
var statearr_49520_50368 = state_49486__$1;
(statearr_49520_50368[(1)] = (8));

} else {
var statearr_49524_50369 = state_49486__$1;
(statearr_49524_50369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49487 === (14))){
var inst_49478 = (state_49486[(2)]);
var inst_49479 = cljs.core.async.close_BANG_(out);
var state_49486__$1 = (function (){var statearr_49526 = state_49486;
(statearr_49526[(13)] = inst_49478);

return statearr_49526;
})();
var statearr_49527_50370 = state_49486__$1;
(statearr_49527_50370[(2)] = inst_49479);

(statearr_49527_50370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49487 === (10))){
var inst_49467 = (state_49486[(2)]);
var state_49486__$1 = state_49486;
var statearr_49528_50371 = state_49486__$1;
(statearr_49528_50371[(2)] = inst_49467);

(statearr_49528_50371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49487 === (8))){
var inst_49454 = (state_49486[(11)]);
var inst_49444 = (state_49486[(8)]);
var tmp49525 = inst_49444;
var inst_49444__$1 = tmp49525;
var inst_49445 = inst_49454;
var state_49486__$1 = (function (){var statearr_49529 = state_49486;
(statearr_49529[(7)] = inst_49445);

(statearr_49529[(8)] = inst_49444__$1);

return statearr_49529;
})();
var statearr_49530_50372 = state_49486__$1;
(statearr_49530_50372[(2)] = null);

(statearr_49530_50372[(1)] = (2));


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
var cljs$core$async$state_machine__47247__auto__ = null;
var cljs$core$async$state_machine__47247__auto____0 = (function (){
var statearr_49534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49534[(0)] = cljs$core$async$state_machine__47247__auto__);

(statearr_49534[(1)] = (1));

return statearr_49534;
});
var cljs$core$async$state_machine__47247__auto____1 = (function (state_49486){
while(true){
var ret_value__47248__auto__ = (function (){try{while(true){
var result__47249__auto__ = switch__47246__auto__(state_49486);
if(cljs.core.keyword_identical_QMARK_(result__47249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47249__auto__;
}
break;
}
}catch (e49535){var ex__47250__auto__ = e49535;
var statearr_49536_50373 = state_49486;
(statearr_49536_50373[(2)] = ex__47250__auto__);


if(cljs.core.seq((state_49486[(4)]))){
var statearr_49537_50374 = state_49486;
(statearr_49537_50374[(1)] = cljs.core.first((state_49486[(4)])));

} else {
throw ex__47250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50375 = state_49486;
state_49486 = G__50375;
continue;
} else {
return ret_value__47248__auto__;
}
break;
}
});
cljs$core$async$state_machine__47247__auto__ = function(state_49486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47247__auto____1.call(this,state_49486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47247__auto____0;
cljs$core$async$state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47247__auto____1;
return cljs$core$async$state_machine__47247__auto__;
})()
})();
var state__47339__auto__ = (function (){var statearr_49559 = f__47338__auto__();
(statearr_49559[(6)] = c__47337__auto___50358);

return statearr_49559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47339__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__49578 = arguments.length;
switch (G__49578) {
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
var c__47337__auto___50377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47338__auto__ = (function (){var switch__47246__auto__ = (function (state_49639){
var state_val_49640 = (state_49639[(1)]);
if((state_val_49640 === (7))){
var inst_49635 = (state_49639[(2)]);
var state_49639__$1 = state_49639;
var statearr_49641_50378 = state_49639__$1;
(statearr_49641_50378[(2)] = inst_49635);

(statearr_49641_50378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49640 === (1))){
var inst_49594 = [];
var inst_49595 = inst_49594;
var inst_49596 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49639__$1 = (function (){var statearr_49642 = state_49639;
(statearr_49642[(7)] = inst_49596);

(statearr_49642[(8)] = inst_49595);

return statearr_49642;
})();
var statearr_49643_50379 = state_49639__$1;
(statearr_49643_50379[(2)] = null);

(statearr_49643_50379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49640 === (4))){
var inst_49599 = (state_49639[(9)]);
var inst_49599__$1 = (state_49639[(2)]);
var inst_49600 = (inst_49599__$1 == null);
var inst_49601 = cljs.core.not(inst_49600);
var state_49639__$1 = (function (){var statearr_49644 = state_49639;
(statearr_49644[(9)] = inst_49599__$1);

return statearr_49644;
})();
if(inst_49601){
var statearr_49645_50380 = state_49639__$1;
(statearr_49645_50380[(1)] = (5));

} else {
var statearr_49646_50381 = state_49639__$1;
(statearr_49646_50381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49640 === (15))){
var inst_49595 = (state_49639[(8)]);
var inst_49627 = cljs.core.vec(inst_49595);
var state_49639__$1 = state_49639;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49639__$1,(18),out,inst_49627);
} else {
if((state_val_49640 === (13))){
var inst_49622 = (state_49639[(2)]);
var state_49639__$1 = state_49639;
var statearr_49647_50382 = state_49639__$1;
(statearr_49647_50382[(2)] = inst_49622);

(statearr_49647_50382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49640 === (6))){
var inst_49595 = (state_49639[(8)]);
var inst_49624 = inst_49595.length;
var inst_49625 = (inst_49624 > (0));
var state_49639__$1 = state_49639;
if(cljs.core.truth_(inst_49625)){
var statearr_49657_50383 = state_49639__$1;
(statearr_49657_50383[(1)] = (15));

} else {
var statearr_49661_50384 = state_49639__$1;
(statearr_49661_50384[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49640 === (17))){
var inst_49632 = (state_49639[(2)]);
var inst_49633 = cljs.core.async.close_BANG_(out);
var state_49639__$1 = (function (){var statearr_49662 = state_49639;
(statearr_49662[(10)] = inst_49632);

return statearr_49662;
})();
var statearr_49663_50385 = state_49639__$1;
(statearr_49663_50385[(2)] = inst_49633);

(statearr_49663_50385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49640 === (3))){
var inst_49637 = (state_49639[(2)]);
var state_49639__$1 = state_49639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49639__$1,inst_49637);
} else {
if((state_val_49640 === (12))){
var inst_49595 = (state_49639[(8)]);
var inst_49615 = cljs.core.vec(inst_49595);
var state_49639__$1 = state_49639;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49639__$1,(14),out,inst_49615);
} else {
if((state_val_49640 === (2))){
var state_49639__$1 = state_49639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49639__$1,(4),ch);
} else {
if((state_val_49640 === (11))){
var inst_49599 = (state_49639[(9)]);
var inst_49595 = (state_49639[(8)]);
var inst_49603 = (state_49639[(11)]);
var inst_49612 = inst_49595.push(inst_49599);
var tmp49665 = inst_49595;
var inst_49595__$1 = tmp49665;
var inst_49596 = inst_49603;
var state_49639__$1 = (function (){var statearr_49669 = state_49639;
(statearr_49669[(7)] = inst_49596);

(statearr_49669[(8)] = inst_49595__$1);

(statearr_49669[(12)] = inst_49612);

return statearr_49669;
})();
var statearr_49670_50386 = state_49639__$1;
(statearr_49670_50386[(2)] = null);

(statearr_49670_50386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49640 === (9))){
var inst_49596 = (state_49639[(7)]);
var inst_49608 = cljs.core.keyword_identical_QMARK_(inst_49596,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_49639__$1 = state_49639;
var statearr_49674_50387 = state_49639__$1;
(statearr_49674_50387[(2)] = inst_49608);

(statearr_49674_50387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49640 === (5))){
var inst_49599 = (state_49639[(9)]);
var inst_49596 = (state_49639[(7)]);
var inst_49605 = (state_49639[(13)]);
var inst_49603 = (state_49639[(11)]);
var inst_49603__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49599) : f.call(null,inst_49599));
var inst_49605__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49603__$1,inst_49596);
var state_49639__$1 = (function (){var statearr_49678 = state_49639;
(statearr_49678[(13)] = inst_49605__$1);

(statearr_49678[(11)] = inst_49603__$1);

return statearr_49678;
})();
if(inst_49605__$1){
var statearr_49679_50388 = state_49639__$1;
(statearr_49679_50388[(1)] = (8));

} else {
var statearr_49680_50389 = state_49639__$1;
(statearr_49680_50389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49640 === (14))){
var inst_49599 = (state_49639[(9)]);
var inst_49603 = (state_49639[(11)]);
var inst_49617 = (state_49639[(2)]);
var inst_49618 = [];
var inst_49619 = inst_49618.push(inst_49599);
var inst_49595 = inst_49618;
var inst_49596 = inst_49603;
var state_49639__$1 = (function (){var statearr_49684 = state_49639;
(statearr_49684[(14)] = inst_49619);

(statearr_49684[(7)] = inst_49596);

(statearr_49684[(15)] = inst_49617);

(statearr_49684[(8)] = inst_49595);

return statearr_49684;
})();
var statearr_49685_50390 = state_49639__$1;
(statearr_49685_50390[(2)] = null);

(statearr_49685_50390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49640 === (16))){
var state_49639__$1 = state_49639;
var statearr_49686_50391 = state_49639__$1;
(statearr_49686_50391[(2)] = null);

(statearr_49686_50391[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49640 === (10))){
var inst_49610 = (state_49639[(2)]);
var state_49639__$1 = state_49639;
if(cljs.core.truth_(inst_49610)){
var statearr_49691_50392 = state_49639__$1;
(statearr_49691_50392[(1)] = (11));

} else {
var statearr_49692_50393 = state_49639__$1;
(statearr_49692_50393[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49640 === (18))){
var inst_49629 = (state_49639[(2)]);
var state_49639__$1 = state_49639;
var statearr_49694_50394 = state_49639__$1;
(statearr_49694_50394[(2)] = inst_49629);

(statearr_49694_50394[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49640 === (8))){
var inst_49605 = (state_49639[(13)]);
var state_49639__$1 = state_49639;
var statearr_49695_50395 = state_49639__$1;
(statearr_49695_50395[(2)] = inst_49605);

(statearr_49695_50395[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__47247__auto__ = null;
var cljs$core$async$state_machine__47247__auto____0 = (function (){
var statearr_49699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49699[(0)] = cljs$core$async$state_machine__47247__auto__);

(statearr_49699[(1)] = (1));

return statearr_49699;
});
var cljs$core$async$state_machine__47247__auto____1 = (function (state_49639){
while(true){
var ret_value__47248__auto__ = (function (){try{while(true){
var result__47249__auto__ = switch__47246__auto__(state_49639);
if(cljs.core.keyword_identical_QMARK_(result__47249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47249__auto__;
}
break;
}
}catch (e49702){var ex__47250__auto__ = e49702;
var statearr_49704_50396 = state_49639;
(statearr_49704_50396[(2)] = ex__47250__auto__);


if(cljs.core.seq((state_49639[(4)]))){
var statearr_49705_50397 = state_49639;
(statearr_49705_50397[(1)] = cljs.core.first((state_49639[(4)])));

} else {
throw ex__47250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50398 = state_49639;
state_49639 = G__50398;
continue;
} else {
return ret_value__47248__auto__;
}
break;
}
});
cljs$core$async$state_machine__47247__auto__ = function(state_49639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47247__auto____1.call(this,state_49639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47247__auto____0;
cljs$core$async$state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47247__auto____1;
return cljs$core$async$state_machine__47247__auto__;
})()
})();
var state__47339__auto__ = (function (){var statearr_49709 = f__47338__auto__();
(statearr_49709[(6)] = c__47337__auto___50377);

return statearr_49709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47339__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
