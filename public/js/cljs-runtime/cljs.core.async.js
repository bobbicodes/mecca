goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__49168 = arguments.length;
switch (G__49168) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49169 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49169 = (function (f,blockable,meta49170){
this.f = f;
this.blockable = blockable;
this.meta49170 = meta49170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49171,meta49170__$1){
var self__ = this;
var _49171__$1 = this;
return (new cljs.core.async.t_cljs$core$async49169(self__.f,self__.blockable,meta49170__$1));
}));

(cljs.core.async.t_cljs$core$async49169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49171){
var self__ = this;
var _49171__$1 = this;
return self__.meta49170;
}));

(cljs.core.async.t_cljs$core$async49169.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49169.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49169.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async49169.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async49169.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta49170","meta49170",526902006,null)], null);
}));

(cljs.core.async.t_cljs$core$async49169.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49169.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49169");

(cljs.core.async.t_cljs$core$async49169.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49169");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49169.
 */
cljs.core.async.__GT_t_cljs$core$async49169 = (function cljs$core$async$__GT_t_cljs$core$async49169(f__$1,blockable__$1,meta49170){
return (new cljs.core.async.t_cljs$core$async49169(f__$1,blockable__$1,meta49170));
});

}

return (new cljs.core.async.t_cljs$core$async49169(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__49178 = arguments.length;
switch (G__49178) {
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
var G__49196 = arguments.length;
switch (G__49196) {
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
var G__49204 = arguments.length;
switch (G__49204) {
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
var val_51576 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_51576) : fn1.call(null,val_51576));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_51576) : fn1.call(null,val_51576));
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
var G__49206 = arguments.length;
switch (G__49206) {
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
var n__4706__auto___51592 = n;
var x_51593 = (0);
while(true){
if((x_51593 < n__4706__auto___51592)){
(a[x_51593] = x_51593);

var G__51594 = (x_51593 + (1));
x_51593 = G__51594;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49207 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49207 = (function (flag,meta49208){
this.flag = flag;
this.meta49208 = meta49208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49209,meta49208__$1){
var self__ = this;
var _49209__$1 = this;
return (new cljs.core.async.t_cljs$core$async49207(self__.flag,meta49208__$1));
}));

(cljs.core.async.t_cljs$core$async49207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49209){
var self__ = this;
var _49209__$1 = this;
return self__.meta49208;
}));

(cljs.core.async.t_cljs$core$async49207.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49207.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async49207.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49207.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async49207.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta49208","meta49208",783540913,null)], null);
}));

(cljs.core.async.t_cljs$core$async49207.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49207.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49207");

(cljs.core.async.t_cljs$core$async49207.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49207");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49207.
 */
cljs.core.async.__GT_t_cljs$core$async49207 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async49207(flag__$1,meta49208){
return (new cljs.core.async.t_cljs$core$async49207(flag__$1,meta49208));
});

}

return (new cljs.core.async.t_cljs$core$async49207(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49210 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49210 = (function (flag,cb,meta49211){
this.flag = flag;
this.cb = cb;
this.meta49211 = meta49211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49212,meta49211__$1){
var self__ = this;
var _49212__$1 = this;
return (new cljs.core.async.t_cljs$core$async49210(self__.flag,self__.cb,meta49211__$1));
}));

(cljs.core.async.t_cljs$core$async49210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49212){
var self__ = this;
var _49212__$1 = this;
return self__.meta49211;
}));

(cljs.core.async.t_cljs$core$async49210.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49210.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async49210.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49210.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async49210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta49211","meta49211",199958506,null)], null);
}));

(cljs.core.async.t_cljs$core$async49210.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49210.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49210");

(cljs.core.async.t_cljs$core$async49210.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49210");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49210.
 */
cljs.core.async.__GT_t_cljs$core$async49210 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async49210(flag__$1,cb__$1,meta49211){
return (new cljs.core.async.t_cljs$core$async49210(flag__$1,cb__$1,meta49211));
});

}

return (new cljs.core.async.t_cljs$core$async49210(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__49213_SHARP_){
var G__49215 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49213_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__49215) : fret.call(null,G__49215));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__49214_SHARP_){
var G__49216 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49214_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__49216) : fret.call(null,G__49216));
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
var G__51614 = (i + (1));
i = G__51614;
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
var len__4829__auto___51616 = arguments.length;
var i__4830__auto___51617 = (0);
while(true){
if((i__4830__auto___51617 < len__4829__auto___51616)){
args__4835__auto__.push((arguments[i__4830__auto___51617]));

var G__51618 = (i__4830__auto___51617 + (1));
i__4830__auto___51617 = G__51618;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__49219){
var map__49220 = p__49219;
var map__49220__$1 = cljs.core.__destructure_map(map__49220);
var opts = map__49220__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq49217){
var G__49218 = cljs.core.first(seq49217);
var seq49217__$1 = cljs.core.next(seq49217);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49218,seq49217__$1);
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
var G__49226 = arguments.length;
switch (G__49226) {
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
var c__49039__auto___51646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49040__auto__ = (function (){var switch__48931__auto__ = (function (state_49300){
var state_val_49301 = (state_49300[(1)]);
if((state_val_49301 === (7))){
var inst_49254 = (state_49300[(2)]);
var state_49300__$1 = state_49300;
var statearr_49302_51647 = state_49300__$1;
(statearr_49302_51647[(2)] = inst_49254);

(statearr_49302_51647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49301 === (1))){
var state_49300__$1 = state_49300;
var statearr_49303_51651 = state_49300__$1;
(statearr_49303_51651[(2)] = null);

(statearr_49303_51651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49301 === (4))){
var inst_49231 = (state_49300[(7)]);
var inst_49231__$1 = (state_49300[(2)]);
var inst_49232 = (inst_49231__$1 == null);
var state_49300__$1 = (function (){var statearr_49304 = state_49300;
(statearr_49304[(7)] = inst_49231__$1);

return statearr_49304;
})();
if(cljs.core.truth_(inst_49232)){
var statearr_49305_51652 = state_49300__$1;
(statearr_49305_51652[(1)] = (5));

} else {
var statearr_49306_51653 = state_49300__$1;
(statearr_49306_51653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49301 === (13))){
var state_49300__$1 = state_49300;
var statearr_49308_51654 = state_49300__$1;
(statearr_49308_51654[(2)] = null);

(statearr_49308_51654[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49301 === (6))){
var inst_49231 = (state_49300[(7)]);
var state_49300__$1 = state_49300;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49300__$1,(11),to,inst_49231);
} else {
if((state_val_49301 === (3))){
var inst_49257 = (state_49300[(2)]);
var state_49300__$1 = state_49300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49300__$1,inst_49257);
} else {
if((state_val_49301 === (12))){
var state_49300__$1 = state_49300;
var statearr_49332_51655 = state_49300__$1;
(statearr_49332_51655[(2)] = null);

(statearr_49332_51655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49301 === (2))){
var state_49300__$1 = state_49300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49300__$1,(4),from);
} else {
if((state_val_49301 === (11))){
var inst_49247 = (state_49300[(2)]);
var state_49300__$1 = state_49300;
if(cljs.core.truth_(inst_49247)){
var statearr_49333_51656 = state_49300__$1;
(statearr_49333_51656[(1)] = (12));

} else {
var statearr_49334_51657 = state_49300__$1;
(statearr_49334_51657[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49301 === (9))){
var state_49300__$1 = state_49300;
var statearr_49336_51658 = state_49300__$1;
(statearr_49336_51658[(2)] = null);

(statearr_49336_51658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49301 === (5))){
var state_49300__$1 = state_49300;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49339_51664 = state_49300__$1;
(statearr_49339_51664[(1)] = (8));

} else {
var statearr_49340_51665 = state_49300__$1;
(statearr_49340_51665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49301 === (14))){
var inst_49252 = (state_49300[(2)]);
var state_49300__$1 = state_49300;
var statearr_49341_51669 = state_49300__$1;
(statearr_49341_51669[(2)] = inst_49252);

(statearr_49341_51669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49301 === (10))){
var inst_49238 = (state_49300[(2)]);
var state_49300__$1 = state_49300;
var statearr_49342_51670 = state_49300__$1;
(statearr_49342_51670[(2)] = inst_49238);

(statearr_49342_51670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49301 === (8))){
var inst_49235 = cljs.core.async.close_BANG_(to);
var state_49300__$1 = state_49300;
var statearr_49343_51671 = state_49300__$1;
(statearr_49343_51671[(2)] = inst_49235);

(statearr_49343_51671[(1)] = (10));


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
var cljs$core$async$state_machine__48932__auto__ = null;
var cljs$core$async$state_machine__48932__auto____0 = (function (){
var statearr_49344 = [null,null,null,null,null,null,null,null];
(statearr_49344[(0)] = cljs$core$async$state_machine__48932__auto__);

(statearr_49344[(1)] = (1));

return statearr_49344;
});
var cljs$core$async$state_machine__48932__auto____1 = (function (state_49300){
while(true){
var ret_value__48933__auto__ = (function (){try{while(true){
var result__48934__auto__ = switch__48931__auto__(state_49300);
if(cljs.core.keyword_identical_QMARK_(result__48934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48934__auto__;
}
break;
}
}catch (e49345){var ex__48935__auto__ = e49345;
var statearr_49346_51676 = state_49300;
(statearr_49346_51676[(2)] = ex__48935__auto__);


if(cljs.core.seq((state_49300[(4)]))){
var statearr_49347_51677 = state_49300;
(statearr_49347_51677[(1)] = cljs.core.first((state_49300[(4)])));

} else {
throw ex__48935__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51678 = state_49300;
state_49300 = G__51678;
continue;
} else {
return ret_value__48933__auto__;
}
break;
}
});
cljs$core$async$state_machine__48932__auto__ = function(state_49300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48932__auto____1.call(this,state_49300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48932__auto____0;
cljs$core$async$state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48932__auto____1;
return cljs$core$async$state_machine__48932__auto__;
})()
})();
var state__49041__auto__ = (function (){var statearr_49396 = f__49040__auto__();
(statearr_49396[(6)] = c__49039__auto___51646);

return statearr_49396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49041__auto__);
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
var process = (function (p__49414){
var vec__49415 = p__49414;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49415,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49415,(1),null);
var job = vec__49415;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__49039__auto___51683 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49040__auto__ = (function (){var switch__48931__auto__ = (function (state_49435){
var state_val_49436 = (state_49435[(1)]);
if((state_val_49436 === (1))){
var state_49435__$1 = state_49435;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49435__$1,(2),res,v);
} else {
if((state_val_49436 === (2))){
var inst_49432 = (state_49435[(2)]);
var inst_49433 = cljs.core.async.close_BANG_(res);
var state_49435__$1 = (function (){var statearr_49457 = state_49435;
(statearr_49457[(7)] = inst_49432);

return statearr_49457;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49435__$1,inst_49433);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____0 = (function (){
var statearr_49458 = [null,null,null,null,null,null,null,null];
(statearr_49458[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__);

(statearr_49458[(1)] = (1));

return statearr_49458;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____1 = (function (state_49435){
while(true){
var ret_value__48933__auto__ = (function (){try{while(true){
var result__48934__auto__ = switch__48931__auto__(state_49435);
if(cljs.core.keyword_identical_QMARK_(result__48934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48934__auto__;
}
break;
}
}catch (e49459){var ex__48935__auto__ = e49459;
var statearr_49460_51684 = state_49435;
(statearr_49460_51684[(2)] = ex__48935__auto__);


if(cljs.core.seq((state_49435[(4)]))){
var statearr_49461_51685 = state_49435;
(statearr_49461_51685[(1)] = cljs.core.first((state_49435[(4)])));

} else {
throw ex__48935__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51686 = state_49435;
state_49435 = G__51686;
continue;
} else {
return ret_value__48933__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__ = function(state_49435){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____1.call(this,state_49435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__;
})()
})();
var state__49041__auto__ = (function (){var statearr_49467 = f__49040__auto__();
(statearr_49467[(6)] = c__49039__auto___51683);

return statearr_49467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49041__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__49468){
var vec__49471 = p__49468;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49471,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49471,(1),null);
var job = vec__49471;
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
var n__4706__auto___51687 = n;
var __51688 = (0);
while(true){
if((__51688 < n__4706__auto___51687)){
var G__49476_51689 = type;
var G__49476_51690__$1 = (((G__49476_51689 instanceof cljs.core.Keyword))?G__49476_51689.fqn:null);
switch (G__49476_51690__$1) {
case "compute":
var c__49039__auto___51692 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__51688,c__49039__auto___51692,G__49476_51689,G__49476_51690__$1,n__4706__auto___51687,jobs,results,process,async){
return (function (){
var f__49040__auto__ = (function (){var switch__48931__auto__ = ((function (__51688,c__49039__auto___51692,G__49476_51689,G__49476_51690__$1,n__4706__auto___51687,jobs,results,process,async){
return (function (state_49489){
var state_val_49490 = (state_49489[(1)]);
if((state_val_49490 === (1))){
var state_49489__$1 = state_49489;
var statearr_49495_51693 = state_49489__$1;
(statearr_49495_51693[(2)] = null);

(statearr_49495_51693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49490 === (2))){
var state_49489__$1 = state_49489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49489__$1,(4),jobs);
} else {
if((state_val_49490 === (3))){
var inst_49487 = (state_49489[(2)]);
var state_49489__$1 = state_49489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49489__$1,inst_49487);
} else {
if((state_val_49490 === (4))){
var inst_49479 = (state_49489[(2)]);
var inst_49480 = process(inst_49479);
var state_49489__$1 = state_49489;
if(cljs.core.truth_(inst_49480)){
var statearr_49496_51694 = state_49489__$1;
(statearr_49496_51694[(1)] = (5));

} else {
var statearr_49497_51695 = state_49489__$1;
(statearr_49497_51695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49490 === (5))){
var state_49489__$1 = state_49489;
var statearr_49498_51696 = state_49489__$1;
(statearr_49498_51696[(2)] = null);

(statearr_49498_51696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49490 === (6))){
var state_49489__$1 = state_49489;
var statearr_49499_51697 = state_49489__$1;
(statearr_49499_51697[(2)] = null);

(statearr_49499_51697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49490 === (7))){
var inst_49485 = (state_49489[(2)]);
var state_49489__$1 = state_49489;
var statearr_49502_51698 = state_49489__$1;
(statearr_49502_51698[(2)] = inst_49485);

(statearr_49502_51698[(1)] = (3));


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
});})(__51688,c__49039__auto___51692,G__49476_51689,G__49476_51690__$1,n__4706__auto___51687,jobs,results,process,async))
;
return ((function (__51688,switch__48931__auto__,c__49039__auto___51692,G__49476_51689,G__49476_51690__$1,n__4706__auto___51687,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____0 = (function (){
var statearr_49508 = [null,null,null,null,null,null,null];
(statearr_49508[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__);

(statearr_49508[(1)] = (1));

return statearr_49508;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____1 = (function (state_49489){
while(true){
var ret_value__48933__auto__ = (function (){try{while(true){
var result__48934__auto__ = switch__48931__auto__(state_49489);
if(cljs.core.keyword_identical_QMARK_(result__48934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48934__auto__;
}
break;
}
}catch (e49509){var ex__48935__auto__ = e49509;
var statearr_49510_51699 = state_49489;
(statearr_49510_51699[(2)] = ex__48935__auto__);


if(cljs.core.seq((state_49489[(4)]))){
var statearr_49511_51700 = state_49489;
(statearr_49511_51700[(1)] = cljs.core.first((state_49489[(4)])));

} else {
throw ex__48935__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51701 = state_49489;
state_49489 = G__51701;
continue;
} else {
return ret_value__48933__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__ = function(state_49489){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____1.call(this,state_49489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__;
})()
;})(__51688,switch__48931__auto__,c__49039__auto___51692,G__49476_51689,G__49476_51690__$1,n__4706__auto___51687,jobs,results,process,async))
})();
var state__49041__auto__ = (function (){var statearr_49513 = f__49040__auto__();
(statearr_49513[(6)] = c__49039__auto___51692);

return statearr_49513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49041__auto__);
});})(__51688,c__49039__auto___51692,G__49476_51689,G__49476_51690__$1,n__4706__auto___51687,jobs,results,process,async))
);


break;
case "async":
var c__49039__auto___51702 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__51688,c__49039__auto___51702,G__49476_51689,G__49476_51690__$1,n__4706__auto___51687,jobs,results,process,async){
return (function (){
var f__49040__auto__ = (function (){var switch__48931__auto__ = ((function (__51688,c__49039__auto___51702,G__49476_51689,G__49476_51690__$1,n__4706__auto___51687,jobs,results,process,async){
return (function (state_49568){
var state_val_49569 = (state_49568[(1)]);
if((state_val_49569 === (1))){
var state_49568__$1 = state_49568;
var statearr_49570_51703 = state_49568__$1;
(statearr_49570_51703[(2)] = null);

(statearr_49570_51703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49569 === (2))){
var state_49568__$1 = state_49568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49568__$1,(4),jobs);
} else {
if((state_val_49569 === (3))){
var inst_49546 = (state_49568[(2)]);
var state_49568__$1 = state_49568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49568__$1,inst_49546);
} else {
if((state_val_49569 === (4))){
var inst_49538 = (state_49568[(2)]);
var inst_49539 = async(inst_49538);
var state_49568__$1 = state_49568;
if(cljs.core.truth_(inst_49539)){
var statearr_49571_51704 = state_49568__$1;
(statearr_49571_51704[(1)] = (5));

} else {
var statearr_49572_51705 = state_49568__$1;
(statearr_49572_51705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49569 === (5))){
var state_49568__$1 = state_49568;
var statearr_49573_51706 = state_49568__$1;
(statearr_49573_51706[(2)] = null);

(statearr_49573_51706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49569 === (6))){
var state_49568__$1 = state_49568;
var statearr_49574_51707 = state_49568__$1;
(statearr_49574_51707[(2)] = null);

(statearr_49574_51707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49569 === (7))){
var inst_49544 = (state_49568[(2)]);
var state_49568__$1 = state_49568;
var statearr_49575_51708 = state_49568__$1;
(statearr_49575_51708[(2)] = inst_49544);

(statearr_49575_51708[(1)] = (3));


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
});})(__51688,c__49039__auto___51702,G__49476_51689,G__49476_51690__$1,n__4706__auto___51687,jobs,results,process,async))
;
return ((function (__51688,switch__48931__auto__,c__49039__auto___51702,G__49476_51689,G__49476_51690__$1,n__4706__auto___51687,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____0 = (function (){
var statearr_49576 = [null,null,null,null,null,null,null];
(statearr_49576[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__);

(statearr_49576[(1)] = (1));

return statearr_49576;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____1 = (function (state_49568){
while(true){
var ret_value__48933__auto__ = (function (){try{while(true){
var result__48934__auto__ = switch__48931__auto__(state_49568);
if(cljs.core.keyword_identical_QMARK_(result__48934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48934__auto__;
}
break;
}
}catch (e49577){var ex__48935__auto__ = e49577;
var statearr_49578_51709 = state_49568;
(statearr_49578_51709[(2)] = ex__48935__auto__);


if(cljs.core.seq((state_49568[(4)]))){
var statearr_49579_51710 = state_49568;
(statearr_49579_51710[(1)] = cljs.core.first((state_49568[(4)])));

} else {
throw ex__48935__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51711 = state_49568;
state_49568 = G__51711;
continue;
} else {
return ret_value__48933__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__ = function(state_49568){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____1.call(this,state_49568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__;
})()
;})(__51688,switch__48931__auto__,c__49039__auto___51702,G__49476_51689,G__49476_51690__$1,n__4706__auto___51687,jobs,results,process,async))
})();
var state__49041__auto__ = (function (){var statearr_49615 = f__49040__auto__();
(statearr_49615[(6)] = c__49039__auto___51702);

return statearr_49615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49041__auto__);
});})(__51688,c__49039__auto___51702,G__49476_51689,G__49476_51690__$1,n__4706__auto___51687,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49476_51690__$1)].join('')));

}

var G__51712 = (__51688 + (1));
__51688 = G__51712;
continue;
} else {
}
break;
}

var c__49039__auto___51713 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49040__auto__ = (function (){var switch__48931__auto__ = (function (state_49637){
var state_val_49638 = (state_49637[(1)]);
if((state_val_49638 === (7))){
var inst_49633 = (state_49637[(2)]);
var state_49637__$1 = state_49637;
var statearr_49639_51714 = state_49637__$1;
(statearr_49639_51714[(2)] = inst_49633);

(statearr_49639_51714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49638 === (1))){
var state_49637__$1 = state_49637;
var statearr_49640_51715 = state_49637__$1;
(statearr_49640_51715[(2)] = null);

(statearr_49640_51715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49638 === (4))){
var inst_49618 = (state_49637[(7)]);
var inst_49618__$1 = (state_49637[(2)]);
var inst_49619 = (inst_49618__$1 == null);
var state_49637__$1 = (function (){var statearr_49641 = state_49637;
(statearr_49641[(7)] = inst_49618__$1);

return statearr_49641;
})();
if(cljs.core.truth_(inst_49619)){
var statearr_49642_51716 = state_49637__$1;
(statearr_49642_51716[(1)] = (5));

} else {
var statearr_49643_51717 = state_49637__$1;
(statearr_49643_51717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49638 === (6))){
var inst_49623 = (state_49637[(8)]);
var inst_49618 = (state_49637[(7)]);
var inst_49623__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_49624 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49625 = [inst_49618,inst_49623__$1];
var inst_49626 = (new cljs.core.PersistentVector(null,2,(5),inst_49624,inst_49625,null));
var state_49637__$1 = (function (){var statearr_49644 = state_49637;
(statearr_49644[(8)] = inst_49623__$1);

return statearr_49644;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49637__$1,(8),jobs,inst_49626);
} else {
if((state_val_49638 === (3))){
var inst_49635 = (state_49637[(2)]);
var state_49637__$1 = state_49637;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49637__$1,inst_49635);
} else {
if((state_val_49638 === (2))){
var state_49637__$1 = state_49637;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49637__$1,(4),from);
} else {
if((state_val_49638 === (9))){
var inst_49630 = (state_49637[(2)]);
var state_49637__$1 = (function (){var statearr_49645 = state_49637;
(statearr_49645[(9)] = inst_49630);

return statearr_49645;
})();
var statearr_49646_51718 = state_49637__$1;
(statearr_49646_51718[(2)] = null);

(statearr_49646_51718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49638 === (5))){
var inst_49621 = cljs.core.async.close_BANG_(jobs);
var state_49637__$1 = state_49637;
var statearr_49647_51719 = state_49637__$1;
(statearr_49647_51719[(2)] = inst_49621);

(statearr_49647_51719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49638 === (8))){
var inst_49623 = (state_49637[(8)]);
var inst_49628 = (state_49637[(2)]);
var state_49637__$1 = (function (){var statearr_49648 = state_49637;
(statearr_49648[(10)] = inst_49628);

return statearr_49648;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49637__$1,(9),results,inst_49623);
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
var cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____0 = (function (){
var statearr_49649 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49649[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__);

(statearr_49649[(1)] = (1));

return statearr_49649;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____1 = (function (state_49637){
while(true){
var ret_value__48933__auto__ = (function (){try{while(true){
var result__48934__auto__ = switch__48931__auto__(state_49637);
if(cljs.core.keyword_identical_QMARK_(result__48934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48934__auto__;
}
break;
}
}catch (e49650){var ex__48935__auto__ = e49650;
var statearr_49651_51722 = state_49637;
(statearr_49651_51722[(2)] = ex__48935__auto__);


if(cljs.core.seq((state_49637[(4)]))){
var statearr_49652_51723 = state_49637;
(statearr_49652_51723[(1)] = cljs.core.first((state_49637[(4)])));

} else {
throw ex__48935__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51724 = state_49637;
state_49637 = G__51724;
continue;
} else {
return ret_value__48933__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__ = function(state_49637){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____1.call(this,state_49637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__;
})()
})();
var state__49041__auto__ = (function (){var statearr_49655 = f__49040__auto__();
(statearr_49655[(6)] = c__49039__auto___51713);

return statearr_49655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49041__auto__);
}));


var c__49039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49040__auto__ = (function (){var switch__48931__auto__ = (function (state_49696){
var state_val_49697 = (state_49696[(1)]);
if((state_val_49697 === (7))){
var inst_49692 = (state_49696[(2)]);
var state_49696__$1 = state_49696;
var statearr_49699_51726 = state_49696__$1;
(statearr_49699_51726[(2)] = inst_49692);

(statearr_49699_51726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49697 === (20))){
var state_49696__$1 = state_49696;
var statearr_49700_51727 = state_49696__$1;
(statearr_49700_51727[(2)] = null);

(statearr_49700_51727[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49697 === (1))){
var state_49696__$1 = state_49696;
var statearr_49701_51728 = state_49696__$1;
(statearr_49701_51728[(2)] = null);

(statearr_49701_51728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49697 === (4))){
var inst_49658 = (state_49696[(7)]);
var inst_49658__$1 = (state_49696[(2)]);
var inst_49659 = (inst_49658__$1 == null);
var state_49696__$1 = (function (){var statearr_49702 = state_49696;
(statearr_49702[(7)] = inst_49658__$1);

return statearr_49702;
})();
if(cljs.core.truth_(inst_49659)){
var statearr_49704_51729 = state_49696__$1;
(statearr_49704_51729[(1)] = (5));

} else {
var statearr_49705_51730 = state_49696__$1;
(statearr_49705_51730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49697 === (15))){
var inst_49673 = (state_49696[(8)]);
var state_49696__$1 = state_49696;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49696__$1,(18),to,inst_49673);
} else {
if((state_val_49697 === (21))){
var inst_49687 = (state_49696[(2)]);
var state_49696__$1 = state_49696;
var statearr_49706_51731 = state_49696__$1;
(statearr_49706_51731[(2)] = inst_49687);

(statearr_49706_51731[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49697 === (13))){
var inst_49689 = (state_49696[(2)]);
var state_49696__$1 = (function (){var statearr_49707 = state_49696;
(statearr_49707[(9)] = inst_49689);

return statearr_49707;
})();
var statearr_49708_51732 = state_49696__$1;
(statearr_49708_51732[(2)] = null);

(statearr_49708_51732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49697 === (6))){
var inst_49658 = (state_49696[(7)]);
var state_49696__$1 = state_49696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49696__$1,(11),inst_49658);
} else {
if((state_val_49697 === (17))){
var inst_49681 = (state_49696[(2)]);
var state_49696__$1 = state_49696;
if(cljs.core.truth_(inst_49681)){
var statearr_49709_51733 = state_49696__$1;
(statearr_49709_51733[(1)] = (19));

} else {
var statearr_49710_51734 = state_49696__$1;
(statearr_49710_51734[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49697 === (3))){
var inst_49694 = (state_49696[(2)]);
var state_49696__$1 = state_49696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49696__$1,inst_49694);
} else {
if((state_val_49697 === (12))){
var inst_49668 = (state_49696[(10)]);
var state_49696__$1 = state_49696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49696__$1,(14),inst_49668);
} else {
if((state_val_49697 === (2))){
var state_49696__$1 = state_49696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49696__$1,(4),results);
} else {
if((state_val_49697 === (19))){
var state_49696__$1 = state_49696;
var statearr_49711_51735 = state_49696__$1;
(statearr_49711_51735[(2)] = null);

(statearr_49711_51735[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49697 === (11))){
var inst_49668 = (state_49696[(2)]);
var state_49696__$1 = (function (){var statearr_49713 = state_49696;
(statearr_49713[(10)] = inst_49668);

return statearr_49713;
})();
var statearr_49714_51736 = state_49696__$1;
(statearr_49714_51736[(2)] = null);

(statearr_49714_51736[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49697 === (9))){
var state_49696__$1 = state_49696;
var statearr_49715_51737 = state_49696__$1;
(statearr_49715_51737[(2)] = null);

(statearr_49715_51737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49697 === (5))){
var state_49696__$1 = state_49696;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49716_51738 = state_49696__$1;
(statearr_49716_51738[(1)] = (8));

} else {
var statearr_49717_51739 = state_49696__$1;
(statearr_49717_51739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49697 === (14))){
var inst_49673 = (state_49696[(8)]);
var inst_49675 = (state_49696[(11)]);
var inst_49673__$1 = (state_49696[(2)]);
var inst_49674 = (inst_49673__$1 == null);
var inst_49675__$1 = cljs.core.not(inst_49674);
var state_49696__$1 = (function (){var statearr_49718 = state_49696;
(statearr_49718[(8)] = inst_49673__$1);

(statearr_49718[(11)] = inst_49675__$1);

return statearr_49718;
})();
if(inst_49675__$1){
var statearr_49719_51740 = state_49696__$1;
(statearr_49719_51740[(1)] = (15));

} else {
var statearr_49720_51741 = state_49696__$1;
(statearr_49720_51741[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49697 === (16))){
var inst_49675 = (state_49696[(11)]);
var state_49696__$1 = state_49696;
var statearr_49721_51742 = state_49696__$1;
(statearr_49721_51742[(2)] = inst_49675);

(statearr_49721_51742[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49697 === (10))){
var inst_49665 = (state_49696[(2)]);
var state_49696__$1 = state_49696;
var statearr_49722_51743 = state_49696__$1;
(statearr_49722_51743[(2)] = inst_49665);

(statearr_49722_51743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49697 === (18))){
var inst_49678 = (state_49696[(2)]);
var state_49696__$1 = state_49696;
var statearr_49723_51744 = state_49696__$1;
(statearr_49723_51744[(2)] = inst_49678);

(statearr_49723_51744[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49697 === (8))){
var inst_49662 = cljs.core.async.close_BANG_(to);
var state_49696__$1 = state_49696;
var statearr_49724_51745 = state_49696__$1;
(statearr_49724_51745[(2)] = inst_49662);

(statearr_49724_51745[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____0 = (function (){
var statearr_49725 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49725[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__);

(statearr_49725[(1)] = (1));

return statearr_49725;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____1 = (function (state_49696){
while(true){
var ret_value__48933__auto__ = (function (){try{while(true){
var result__48934__auto__ = switch__48931__auto__(state_49696);
if(cljs.core.keyword_identical_QMARK_(result__48934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48934__auto__;
}
break;
}
}catch (e49726){var ex__48935__auto__ = e49726;
var statearr_49728_51746 = state_49696;
(statearr_49728_51746[(2)] = ex__48935__auto__);


if(cljs.core.seq((state_49696[(4)]))){
var statearr_49729_51747 = state_49696;
(statearr_49729_51747[(1)] = cljs.core.first((state_49696[(4)])));

} else {
throw ex__48935__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51748 = state_49696;
state_49696 = G__51748;
continue;
} else {
return ret_value__48933__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__ = function(state_49696){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____1.call(this,state_49696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48932__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48932__auto__;
})()
})();
var state__49041__auto__ = (function (){var statearr_49730 = f__49040__auto__();
(statearr_49730[(6)] = c__49039__auto__);

return statearr_49730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49041__auto__);
}));

return c__49039__auto__;
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
var G__49732 = arguments.length;
switch (G__49732) {
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
var G__49734 = arguments.length;
switch (G__49734) {
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
var G__49738 = arguments.length;
switch (G__49738) {
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
var c__49039__auto___51767 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49040__auto__ = (function (){var switch__48931__auto__ = (function (state_49766){
var state_val_49767 = (state_49766[(1)]);
if((state_val_49767 === (7))){
var inst_49762 = (state_49766[(2)]);
var state_49766__$1 = state_49766;
var statearr_49768_51768 = state_49766__$1;
(statearr_49768_51768[(2)] = inst_49762);

(statearr_49768_51768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (1))){
var state_49766__$1 = state_49766;
var statearr_49769_51769 = state_49766__$1;
(statearr_49769_51769[(2)] = null);

(statearr_49769_51769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (4))){
var inst_49743 = (state_49766[(7)]);
var inst_49743__$1 = (state_49766[(2)]);
var inst_49744 = (inst_49743__$1 == null);
var state_49766__$1 = (function (){var statearr_49771 = state_49766;
(statearr_49771[(7)] = inst_49743__$1);

return statearr_49771;
})();
if(cljs.core.truth_(inst_49744)){
var statearr_49772_51770 = state_49766__$1;
(statearr_49772_51770[(1)] = (5));

} else {
var statearr_49773_51771 = state_49766__$1;
(statearr_49773_51771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (13))){
var state_49766__$1 = state_49766;
var statearr_49775_51773 = state_49766__$1;
(statearr_49775_51773[(2)] = null);

(statearr_49775_51773[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (6))){
var inst_49743 = (state_49766[(7)]);
var inst_49749 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49743) : p.call(null,inst_49743));
var state_49766__$1 = state_49766;
if(cljs.core.truth_(inst_49749)){
var statearr_49776_51775 = state_49766__$1;
(statearr_49776_51775[(1)] = (9));

} else {
var statearr_49777_51776 = state_49766__$1;
(statearr_49777_51776[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (3))){
var inst_49764 = (state_49766[(2)]);
var state_49766__$1 = state_49766;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49766__$1,inst_49764);
} else {
if((state_val_49767 === (12))){
var state_49766__$1 = state_49766;
var statearr_49778_51778 = state_49766__$1;
(statearr_49778_51778[(2)] = null);

(statearr_49778_51778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (2))){
var state_49766__$1 = state_49766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49766__$1,(4),ch);
} else {
if((state_val_49767 === (11))){
var inst_49743 = (state_49766[(7)]);
var inst_49753 = (state_49766[(2)]);
var state_49766__$1 = state_49766;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49766__$1,(8),inst_49753,inst_49743);
} else {
if((state_val_49767 === (9))){
var state_49766__$1 = state_49766;
var statearr_49783_51779 = state_49766__$1;
(statearr_49783_51779[(2)] = tc);

(statearr_49783_51779[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (5))){
var inst_49746 = cljs.core.async.close_BANG_(tc);
var inst_49747 = cljs.core.async.close_BANG_(fc);
var state_49766__$1 = (function (){var statearr_49784 = state_49766;
(statearr_49784[(8)] = inst_49746);

return statearr_49784;
})();
var statearr_49786_51780 = state_49766__$1;
(statearr_49786_51780[(2)] = inst_49747);

(statearr_49786_51780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (14))){
var inst_49760 = (state_49766[(2)]);
var state_49766__$1 = state_49766;
var statearr_49787_51781 = state_49766__$1;
(statearr_49787_51781[(2)] = inst_49760);

(statearr_49787_51781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (10))){
var state_49766__$1 = state_49766;
var statearr_49788_51782 = state_49766__$1;
(statearr_49788_51782[(2)] = fc);

(statearr_49788_51782[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49767 === (8))){
var inst_49755 = (state_49766[(2)]);
var state_49766__$1 = state_49766;
if(cljs.core.truth_(inst_49755)){
var statearr_49789_51783 = state_49766__$1;
(statearr_49789_51783[(1)] = (12));

} else {
var statearr_49790_51784 = state_49766__$1;
(statearr_49790_51784[(1)] = (13));

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
var cljs$core$async$state_machine__48932__auto__ = null;
var cljs$core$async$state_machine__48932__auto____0 = (function (){
var statearr_49791 = [null,null,null,null,null,null,null,null,null];
(statearr_49791[(0)] = cljs$core$async$state_machine__48932__auto__);

(statearr_49791[(1)] = (1));

return statearr_49791;
});
var cljs$core$async$state_machine__48932__auto____1 = (function (state_49766){
while(true){
var ret_value__48933__auto__ = (function (){try{while(true){
var result__48934__auto__ = switch__48931__auto__(state_49766);
if(cljs.core.keyword_identical_QMARK_(result__48934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48934__auto__;
}
break;
}
}catch (e49795){var ex__48935__auto__ = e49795;
var statearr_49796_51785 = state_49766;
(statearr_49796_51785[(2)] = ex__48935__auto__);


if(cljs.core.seq((state_49766[(4)]))){
var statearr_49797_51786 = state_49766;
(statearr_49797_51786[(1)] = cljs.core.first((state_49766[(4)])));

} else {
throw ex__48935__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51787 = state_49766;
state_49766 = G__51787;
continue;
} else {
return ret_value__48933__auto__;
}
break;
}
});
cljs$core$async$state_machine__48932__auto__ = function(state_49766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48932__auto____1.call(this,state_49766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48932__auto____0;
cljs$core$async$state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48932__auto____1;
return cljs$core$async$state_machine__48932__auto__;
})()
})();
var state__49041__auto__ = (function (){var statearr_49799 = f__49040__auto__();
(statearr_49799[(6)] = c__49039__auto___51767);

return statearr_49799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49041__auto__);
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
var c__49039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49040__auto__ = (function (){var switch__48931__auto__ = (function (state_49821){
var state_val_49822 = (state_49821[(1)]);
if((state_val_49822 === (7))){
var inst_49817 = (state_49821[(2)]);
var state_49821__$1 = state_49821;
var statearr_49823_51788 = state_49821__$1;
(statearr_49823_51788[(2)] = inst_49817);

(statearr_49823_51788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49822 === (1))){
var inst_49800 = init;
var inst_49801 = inst_49800;
var state_49821__$1 = (function (){var statearr_49824 = state_49821;
(statearr_49824[(7)] = inst_49801);

return statearr_49824;
})();
var statearr_49825_51789 = state_49821__$1;
(statearr_49825_51789[(2)] = null);

(statearr_49825_51789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49822 === (4))){
var inst_49804 = (state_49821[(8)]);
var inst_49804__$1 = (state_49821[(2)]);
var inst_49805 = (inst_49804__$1 == null);
var state_49821__$1 = (function (){var statearr_49826 = state_49821;
(statearr_49826[(8)] = inst_49804__$1);

return statearr_49826;
})();
if(cljs.core.truth_(inst_49805)){
var statearr_49827_51790 = state_49821__$1;
(statearr_49827_51790[(1)] = (5));

} else {
var statearr_49828_51791 = state_49821__$1;
(statearr_49828_51791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49822 === (6))){
var inst_49804 = (state_49821[(8)]);
var inst_49808 = (state_49821[(9)]);
var inst_49801 = (state_49821[(7)]);
var inst_49808__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_49801,inst_49804) : f.call(null,inst_49801,inst_49804));
var inst_49809 = cljs.core.reduced_QMARK_(inst_49808__$1);
var state_49821__$1 = (function (){var statearr_49830 = state_49821;
(statearr_49830[(9)] = inst_49808__$1);

return statearr_49830;
})();
if(inst_49809){
var statearr_49831_51792 = state_49821__$1;
(statearr_49831_51792[(1)] = (8));

} else {
var statearr_49832_51793 = state_49821__$1;
(statearr_49832_51793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49822 === (3))){
var inst_49819 = (state_49821[(2)]);
var state_49821__$1 = state_49821;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49821__$1,inst_49819);
} else {
if((state_val_49822 === (2))){
var state_49821__$1 = state_49821;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49821__$1,(4),ch);
} else {
if((state_val_49822 === (9))){
var inst_49808 = (state_49821[(9)]);
var inst_49801 = inst_49808;
var state_49821__$1 = (function (){var statearr_49834 = state_49821;
(statearr_49834[(7)] = inst_49801);

return statearr_49834;
})();
var statearr_49835_51794 = state_49821__$1;
(statearr_49835_51794[(2)] = null);

(statearr_49835_51794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49822 === (5))){
var inst_49801 = (state_49821[(7)]);
var state_49821__$1 = state_49821;
var statearr_49836_51795 = state_49821__$1;
(statearr_49836_51795[(2)] = inst_49801);

(statearr_49836_51795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49822 === (10))){
var inst_49815 = (state_49821[(2)]);
var state_49821__$1 = state_49821;
var statearr_49837_51796 = state_49821__$1;
(statearr_49837_51796[(2)] = inst_49815);

(statearr_49837_51796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49822 === (8))){
var inst_49808 = (state_49821[(9)]);
var inst_49811 = cljs.core.deref(inst_49808);
var state_49821__$1 = state_49821;
var statearr_49838_51797 = state_49821__$1;
(statearr_49838_51797[(2)] = inst_49811);

(statearr_49838_51797[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__48932__auto__ = null;
var cljs$core$async$reduce_$_state_machine__48932__auto____0 = (function (){
var statearr_49839 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49839[(0)] = cljs$core$async$reduce_$_state_machine__48932__auto__);

(statearr_49839[(1)] = (1));

return statearr_49839;
});
var cljs$core$async$reduce_$_state_machine__48932__auto____1 = (function (state_49821){
while(true){
var ret_value__48933__auto__ = (function (){try{while(true){
var result__48934__auto__ = switch__48931__auto__(state_49821);
if(cljs.core.keyword_identical_QMARK_(result__48934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48934__auto__;
}
break;
}
}catch (e49841){var ex__48935__auto__ = e49841;
var statearr_49842_51818 = state_49821;
(statearr_49842_51818[(2)] = ex__48935__auto__);


if(cljs.core.seq((state_49821[(4)]))){
var statearr_49843_51819 = state_49821;
(statearr_49843_51819[(1)] = cljs.core.first((state_49821[(4)])));

} else {
throw ex__48935__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51820 = state_49821;
state_49821 = G__51820;
continue;
} else {
return ret_value__48933__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__48932__auto__ = function(state_49821){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__48932__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__48932__auto____1.call(this,state_49821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__48932__auto____0;
cljs$core$async$reduce_$_state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__48932__auto____1;
return cljs$core$async$reduce_$_state_machine__48932__auto__;
})()
})();
var state__49041__auto__ = (function (){var statearr_49844 = f__49040__auto__();
(statearr_49844[(6)] = c__49039__auto__);

return statearr_49844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49041__auto__);
}));

return c__49039__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__49039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49040__auto__ = (function (){var switch__48931__auto__ = (function (state_49851){
var state_val_49852 = (state_49851[(1)]);
if((state_val_49852 === (1))){
var inst_49846 = cljs.core.async.reduce(f__$1,init,ch);
var state_49851__$1 = state_49851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49851__$1,(2),inst_49846);
} else {
if((state_val_49852 === (2))){
var inst_49848 = (state_49851[(2)]);
var inst_49849 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_49848) : f__$1.call(null,inst_49848));
var state_49851__$1 = state_49851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49851__$1,inst_49849);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__48932__auto__ = null;
var cljs$core$async$transduce_$_state_machine__48932__auto____0 = (function (){
var statearr_49853 = [null,null,null,null,null,null,null];
(statearr_49853[(0)] = cljs$core$async$transduce_$_state_machine__48932__auto__);

(statearr_49853[(1)] = (1));

return statearr_49853;
});
var cljs$core$async$transduce_$_state_machine__48932__auto____1 = (function (state_49851){
while(true){
var ret_value__48933__auto__ = (function (){try{while(true){
var result__48934__auto__ = switch__48931__auto__(state_49851);
if(cljs.core.keyword_identical_QMARK_(result__48934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48934__auto__;
}
break;
}
}catch (e49855){var ex__48935__auto__ = e49855;
var statearr_49856_51824 = state_49851;
(statearr_49856_51824[(2)] = ex__48935__auto__);


if(cljs.core.seq((state_49851[(4)]))){
var statearr_49857_51825 = state_49851;
(statearr_49857_51825[(1)] = cljs.core.first((state_49851[(4)])));

} else {
throw ex__48935__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51826 = state_49851;
state_49851 = G__51826;
continue;
} else {
return ret_value__48933__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__48932__auto__ = function(state_49851){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__48932__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__48932__auto____1.call(this,state_49851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__48932__auto____0;
cljs$core$async$transduce_$_state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__48932__auto____1;
return cljs$core$async$transduce_$_state_machine__48932__auto__;
})()
})();
var state__49041__auto__ = (function (){var statearr_49858 = f__49040__auto__();
(statearr_49858[(6)] = c__49039__auto__);

return statearr_49858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49041__auto__);
}));

return c__49039__auto__;
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
var G__49860 = arguments.length;
switch (G__49860) {
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
var c__49039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49040__auto__ = (function (){var switch__48931__auto__ = (function (state_49891){
var state_val_49892 = (state_49891[(1)]);
if((state_val_49892 === (7))){
var inst_49871 = (state_49891[(2)]);
var state_49891__$1 = state_49891;
var statearr_49893_51828 = state_49891__$1;
(statearr_49893_51828[(2)] = inst_49871);

(statearr_49893_51828[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49892 === (1))){
var inst_49864 = cljs.core.seq(coll);
var inst_49865 = inst_49864;
var state_49891__$1 = (function (){var statearr_49894 = state_49891;
(statearr_49894[(7)] = inst_49865);

return statearr_49894;
})();
var statearr_49895_51829 = state_49891__$1;
(statearr_49895_51829[(2)] = null);

(statearr_49895_51829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49892 === (4))){
var inst_49865 = (state_49891[(7)]);
var inst_49869 = cljs.core.first(inst_49865);
var state_49891__$1 = state_49891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49891__$1,(7),ch,inst_49869);
} else {
if((state_val_49892 === (13))){
var inst_49885 = (state_49891[(2)]);
var state_49891__$1 = state_49891;
var statearr_49897_51830 = state_49891__$1;
(statearr_49897_51830[(2)] = inst_49885);

(statearr_49897_51830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49892 === (6))){
var inst_49874 = (state_49891[(2)]);
var state_49891__$1 = state_49891;
if(cljs.core.truth_(inst_49874)){
var statearr_49898_51831 = state_49891__$1;
(statearr_49898_51831[(1)] = (8));

} else {
var statearr_49899_51832 = state_49891__$1;
(statearr_49899_51832[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49892 === (3))){
var inst_49889 = (state_49891[(2)]);
var state_49891__$1 = state_49891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49891__$1,inst_49889);
} else {
if((state_val_49892 === (12))){
var state_49891__$1 = state_49891;
var statearr_49901_51833 = state_49891__$1;
(statearr_49901_51833[(2)] = null);

(statearr_49901_51833[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49892 === (2))){
var inst_49865 = (state_49891[(7)]);
var state_49891__$1 = state_49891;
if(cljs.core.truth_(inst_49865)){
var statearr_49902_51834 = state_49891__$1;
(statearr_49902_51834[(1)] = (4));

} else {
var statearr_49903_51835 = state_49891__$1;
(statearr_49903_51835[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49892 === (11))){
var inst_49882 = cljs.core.async.close_BANG_(ch);
var state_49891__$1 = state_49891;
var statearr_49904_51836 = state_49891__$1;
(statearr_49904_51836[(2)] = inst_49882);

(statearr_49904_51836[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49892 === (9))){
var state_49891__$1 = state_49891;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49906_51837 = state_49891__$1;
(statearr_49906_51837[(1)] = (11));

} else {
var statearr_49907_51838 = state_49891__$1;
(statearr_49907_51838[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49892 === (5))){
var inst_49865 = (state_49891[(7)]);
var state_49891__$1 = state_49891;
var statearr_49908_51839 = state_49891__$1;
(statearr_49908_51839[(2)] = inst_49865);

(statearr_49908_51839[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49892 === (10))){
var inst_49887 = (state_49891[(2)]);
var state_49891__$1 = state_49891;
var statearr_49909_51840 = state_49891__$1;
(statearr_49909_51840[(2)] = inst_49887);

(statearr_49909_51840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49892 === (8))){
var inst_49865 = (state_49891[(7)]);
var inst_49876 = cljs.core.next(inst_49865);
var inst_49865__$1 = inst_49876;
var state_49891__$1 = (function (){var statearr_49910 = state_49891;
(statearr_49910[(7)] = inst_49865__$1);

return statearr_49910;
})();
var statearr_49911_51841 = state_49891__$1;
(statearr_49911_51841[(2)] = null);

(statearr_49911_51841[(1)] = (2));


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
var cljs$core$async$state_machine__48932__auto__ = null;
var cljs$core$async$state_machine__48932__auto____0 = (function (){
var statearr_49912 = [null,null,null,null,null,null,null,null];
(statearr_49912[(0)] = cljs$core$async$state_machine__48932__auto__);

(statearr_49912[(1)] = (1));

return statearr_49912;
});
var cljs$core$async$state_machine__48932__auto____1 = (function (state_49891){
while(true){
var ret_value__48933__auto__ = (function (){try{while(true){
var result__48934__auto__ = switch__48931__auto__(state_49891);
if(cljs.core.keyword_identical_QMARK_(result__48934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48934__auto__;
}
break;
}
}catch (e49913){var ex__48935__auto__ = e49913;
var statearr_49914_51845 = state_49891;
(statearr_49914_51845[(2)] = ex__48935__auto__);


if(cljs.core.seq((state_49891[(4)]))){
var statearr_49915_51846 = state_49891;
(statearr_49915_51846[(1)] = cljs.core.first((state_49891[(4)])));

} else {
throw ex__48935__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51847 = state_49891;
state_49891 = G__51847;
continue;
} else {
return ret_value__48933__auto__;
}
break;
}
});
cljs$core$async$state_machine__48932__auto__ = function(state_49891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48932__auto____1.call(this,state_49891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48932__auto____0;
cljs$core$async$state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48932__auto____1;
return cljs$core$async$state_machine__48932__auto__;
})()
})();
var state__49041__auto__ = (function (){var statearr_49916 = f__49040__auto__();
(statearr_49916[(6)] = c__49039__auto__);

return statearr_49916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49041__auto__);
}));

return c__49039__auto__;
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
var G__49918 = arguments.length;
switch (G__49918) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_51858 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_51858(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_51859 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_51859(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_51863 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_51863(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_51867 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_51867(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49934 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49934 = (function (ch,cs,meta49935){
this.ch = ch;
this.cs = cs;
this.meta49935 = meta49935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49936,meta49935__$1){
var self__ = this;
var _49936__$1 = this;
return (new cljs.core.async.t_cljs$core$async49934(self__.ch,self__.cs,meta49935__$1));
}));

(cljs.core.async.t_cljs$core$async49934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49936){
var self__ = this;
var _49936__$1 = this;
return self__.meta49935;
}));

(cljs.core.async.t_cljs$core$async49934.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49934.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async49934.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49934.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async49934.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async49934.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async49934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta49935","meta49935",1564268890,null)], null);
}));

(cljs.core.async.t_cljs$core$async49934.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49934");

(cljs.core.async.t_cljs$core$async49934.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49934");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49934.
 */
cljs.core.async.__GT_t_cljs$core$async49934 = (function cljs$core$async$mult_$___GT_t_cljs$core$async49934(ch__$1,cs__$1,meta49935){
return (new cljs.core.async.t_cljs$core$async49934(ch__$1,cs__$1,meta49935));
});

}

return (new cljs.core.async.t_cljs$core$async49934(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__49039__auto___51871 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49040__auto__ = (function (){var switch__48931__auto__ = (function (state_50245){
var state_val_50246 = (state_50245[(1)]);
if((state_val_50246 === (7))){
var inst_50241 = (state_50245[(2)]);
var state_50245__$1 = state_50245;
var statearr_50247_51872 = state_50245__$1;
(statearr_50247_51872[(2)] = inst_50241);

(statearr_50247_51872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (20))){
var inst_49979 = (state_50245[(7)]);
var inst_50158 = cljs.core.first(inst_49979);
var inst_50159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50158,(0),null);
var inst_50160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50158,(1),null);
var state_50245__$1 = (function (){var statearr_50248 = state_50245;
(statearr_50248[(8)] = inst_50159);

return statearr_50248;
})();
if(cljs.core.truth_(inst_50160)){
var statearr_50249_51873 = state_50245__$1;
(statearr_50249_51873[(1)] = (22));

} else {
var statearr_50250_51874 = state_50245__$1;
(statearr_50250_51874[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (27))){
var inst_50190 = (state_50245[(9)]);
var inst_49939 = (state_50245[(10)]);
var inst_50188 = (state_50245[(11)]);
var inst_50195 = (state_50245[(12)]);
var inst_50195__$1 = cljs.core._nth(inst_50188,inst_50190);
var inst_50196 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50195__$1,inst_49939,done);
var state_50245__$1 = (function (){var statearr_50251 = state_50245;
(statearr_50251[(12)] = inst_50195__$1);

return statearr_50251;
})();
if(cljs.core.truth_(inst_50196)){
var statearr_50252_51876 = state_50245__$1;
(statearr_50252_51876[(1)] = (30));

} else {
var statearr_50253_51877 = state_50245__$1;
(statearr_50253_51877[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (1))){
var state_50245__$1 = state_50245;
var statearr_50254_51878 = state_50245__$1;
(statearr_50254_51878[(2)] = null);

(statearr_50254_51878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (24))){
var inst_49979 = (state_50245[(7)]);
var inst_50165 = (state_50245[(2)]);
var inst_50166 = cljs.core.next(inst_49979);
var inst_49948 = inst_50166;
var inst_49949 = null;
var inst_49950 = (0);
var inst_49951 = (0);
var state_50245__$1 = (function (){var statearr_50255 = state_50245;
(statearr_50255[(13)] = inst_50165);

(statearr_50255[(14)] = inst_49950);

(statearr_50255[(15)] = inst_49949);

(statearr_50255[(16)] = inst_49948);

(statearr_50255[(17)] = inst_49951);

return statearr_50255;
})();
var statearr_50256_51879 = state_50245__$1;
(statearr_50256_51879[(2)] = null);

(statearr_50256_51879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (39))){
var state_50245__$1 = state_50245;
var statearr_50260_51880 = state_50245__$1;
(statearr_50260_51880[(2)] = null);

(statearr_50260_51880[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (4))){
var inst_49939 = (state_50245[(10)]);
var inst_49939__$1 = (state_50245[(2)]);
var inst_49940 = (inst_49939__$1 == null);
var state_50245__$1 = (function (){var statearr_50261 = state_50245;
(statearr_50261[(10)] = inst_49939__$1);

return statearr_50261;
})();
if(cljs.core.truth_(inst_49940)){
var statearr_50262_51881 = state_50245__$1;
(statearr_50262_51881[(1)] = (5));

} else {
var statearr_50263_51882 = state_50245__$1;
(statearr_50263_51882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (15))){
var inst_49950 = (state_50245[(14)]);
var inst_49949 = (state_50245[(15)]);
var inst_49948 = (state_50245[(16)]);
var inst_49951 = (state_50245[(17)]);
var inst_49975 = (state_50245[(2)]);
var inst_49976 = (inst_49951 + (1));
var tmp50257 = inst_49950;
var tmp50258 = inst_49949;
var tmp50259 = inst_49948;
var inst_49948__$1 = tmp50259;
var inst_49949__$1 = tmp50258;
var inst_49950__$1 = tmp50257;
var inst_49951__$1 = inst_49976;
var state_50245__$1 = (function (){var statearr_50264 = state_50245;
(statearr_50264[(14)] = inst_49950__$1);

(statearr_50264[(15)] = inst_49949__$1);

(statearr_50264[(16)] = inst_49948__$1);

(statearr_50264[(18)] = inst_49975);

(statearr_50264[(17)] = inst_49951__$1);

return statearr_50264;
})();
var statearr_50265_51883 = state_50245__$1;
(statearr_50265_51883[(2)] = null);

(statearr_50265_51883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (21))){
var inst_50169 = (state_50245[(2)]);
var state_50245__$1 = state_50245;
var statearr_50269_51884 = state_50245__$1;
(statearr_50269_51884[(2)] = inst_50169);

(statearr_50269_51884[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (31))){
var inst_50195 = (state_50245[(12)]);
var inst_50199 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50195);
var state_50245__$1 = state_50245;
var statearr_50270_51885 = state_50245__$1;
(statearr_50270_51885[(2)] = inst_50199);

(statearr_50270_51885[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (32))){
var inst_50187 = (state_50245[(19)]);
var inst_50190 = (state_50245[(9)]);
var inst_50188 = (state_50245[(11)]);
var inst_50189 = (state_50245[(20)]);
var inst_50201 = (state_50245[(2)]);
var inst_50202 = (inst_50190 + (1));
var tmp50266 = inst_50187;
var tmp50267 = inst_50188;
var tmp50268 = inst_50189;
var inst_50187__$1 = tmp50266;
var inst_50188__$1 = tmp50267;
var inst_50189__$1 = tmp50268;
var inst_50190__$1 = inst_50202;
var state_50245__$1 = (function (){var statearr_50271 = state_50245;
(statearr_50271[(19)] = inst_50187__$1);

(statearr_50271[(9)] = inst_50190__$1);

(statearr_50271[(11)] = inst_50188__$1);

(statearr_50271[(20)] = inst_50189__$1);

(statearr_50271[(21)] = inst_50201);

return statearr_50271;
})();
var statearr_50272_51886 = state_50245__$1;
(statearr_50272_51886[(2)] = null);

(statearr_50272_51886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (40))){
var inst_50214 = (state_50245[(22)]);
var inst_50218 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50214);
var state_50245__$1 = state_50245;
var statearr_50273_51887 = state_50245__$1;
(statearr_50273_51887[(2)] = inst_50218);

(statearr_50273_51887[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (33))){
var inst_50205 = (state_50245[(23)]);
var inst_50207 = cljs.core.chunked_seq_QMARK_(inst_50205);
var state_50245__$1 = state_50245;
if(inst_50207){
var statearr_50274_51888 = state_50245__$1;
(statearr_50274_51888[(1)] = (36));

} else {
var statearr_50275_51889 = state_50245__$1;
(statearr_50275_51889[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (13))){
var inst_49966 = (state_50245[(24)]);
var inst_49972 = cljs.core.async.close_BANG_(inst_49966);
var state_50245__$1 = state_50245;
var statearr_50276_51890 = state_50245__$1;
(statearr_50276_51890[(2)] = inst_49972);

(statearr_50276_51890[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (22))){
var inst_50159 = (state_50245[(8)]);
var inst_50162 = cljs.core.async.close_BANG_(inst_50159);
var state_50245__$1 = state_50245;
var statearr_50277_51891 = state_50245__$1;
(statearr_50277_51891[(2)] = inst_50162);

(statearr_50277_51891[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (36))){
var inst_50205 = (state_50245[(23)]);
var inst_50209 = cljs.core.chunk_first(inst_50205);
var inst_50210 = cljs.core.chunk_rest(inst_50205);
var inst_50211 = cljs.core.count(inst_50209);
var inst_50187 = inst_50210;
var inst_50188 = inst_50209;
var inst_50189 = inst_50211;
var inst_50190 = (0);
var state_50245__$1 = (function (){var statearr_50278 = state_50245;
(statearr_50278[(19)] = inst_50187);

(statearr_50278[(9)] = inst_50190);

(statearr_50278[(11)] = inst_50188);

(statearr_50278[(20)] = inst_50189);

return statearr_50278;
})();
var statearr_50279_51892 = state_50245__$1;
(statearr_50279_51892[(2)] = null);

(statearr_50279_51892[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (41))){
var inst_50205 = (state_50245[(23)]);
var inst_50220 = (state_50245[(2)]);
var inst_50221 = cljs.core.next(inst_50205);
var inst_50187 = inst_50221;
var inst_50188 = null;
var inst_50189 = (0);
var inst_50190 = (0);
var state_50245__$1 = (function (){var statearr_50280 = state_50245;
(statearr_50280[(19)] = inst_50187);

(statearr_50280[(9)] = inst_50190);

(statearr_50280[(25)] = inst_50220);

(statearr_50280[(11)] = inst_50188);

(statearr_50280[(20)] = inst_50189);

return statearr_50280;
})();
var statearr_50281_51893 = state_50245__$1;
(statearr_50281_51893[(2)] = null);

(statearr_50281_51893[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (43))){
var state_50245__$1 = state_50245;
var statearr_50282_51894 = state_50245__$1;
(statearr_50282_51894[(2)] = null);

(statearr_50282_51894[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (29))){
var inst_50229 = (state_50245[(2)]);
var state_50245__$1 = state_50245;
var statearr_50283_51895 = state_50245__$1;
(statearr_50283_51895[(2)] = inst_50229);

(statearr_50283_51895[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (44))){
var inst_50238 = (state_50245[(2)]);
var state_50245__$1 = (function (){var statearr_50284 = state_50245;
(statearr_50284[(26)] = inst_50238);

return statearr_50284;
})();
var statearr_50285_51896 = state_50245__$1;
(statearr_50285_51896[(2)] = null);

(statearr_50285_51896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (6))){
var inst_50179 = (state_50245[(27)]);
var inst_50178 = cljs.core.deref(cs);
var inst_50179__$1 = cljs.core.keys(inst_50178);
var inst_50180 = cljs.core.count(inst_50179__$1);
var inst_50181 = cljs.core.reset_BANG_(dctr,inst_50180);
var inst_50186 = cljs.core.seq(inst_50179__$1);
var inst_50187 = inst_50186;
var inst_50188 = null;
var inst_50189 = (0);
var inst_50190 = (0);
var state_50245__$1 = (function (){var statearr_50286 = state_50245;
(statearr_50286[(19)] = inst_50187);

(statearr_50286[(9)] = inst_50190);

(statearr_50286[(27)] = inst_50179__$1);

(statearr_50286[(28)] = inst_50181);

(statearr_50286[(11)] = inst_50188);

(statearr_50286[(20)] = inst_50189);

return statearr_50286;
})();
var statearr_50287_51897 = state_50245__$1;
(statearr_50287_51897[(2)] = null);

(statearr_50287_51897[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (28))){
var inst_50187 = (state_50245[(19)]);
var inst_50205 = (state_50245[(23)]);
var inst_50205__$1 = cljs.core.seq(inst_50187);
var state_50245__$1 = (function (){var statearr_50288 = state_50245;
(statearr_50288[(23)] = inst_50205__$1);

return statearr_50288;
})();
if(inst_50205__$1){
var statearr_50289_51898 = state_50245__$1;
(statearr_50289_51898[(1)] = (33));

} else {
var statearr_50290_51899 = state_50245__$1;
(statearr_50290_51899[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (25))){
var inst_50190 = (state_50245[(9)]);
var inst_50189 = (state_50245[(20)]);
var inst_50192 = (inst_50190 < inst_50189);
var inst_50193 = inst_50192;
var state_50245__$1 = state_50245;
if(cljs.core.truth_(inst_50193)){
var statearr_50291_51900 = state_50245__$1;
(statearr_50291_51900[(1)] = (27));

} else {
var statearr_50292_51901 = state_50245__$1;
(statearr_50292_51901[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (34))){
var state_50245__$1 = state_50245;
var statearr_50293_51902 = state_50245__$1;
(statearr_50293_51902[(2)] = null);

(statearr_50293_51902[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (17))){
var state_50245__$1 = state_50245;
var statearr_50294_51903 = state_50245__$1;
(statearr_50294_51903[(2)] = null);

(statearr_50294_51903[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (3))){
var inst_50243 = (state_50245[(2)]);
var state_50245__$1 = state_50245;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50245__$1,inst_50243);
} else {
if((state_val_50246 === (12))){
var inst_50174 = (state_50245[(2)]);
var state_50245__$1 = state_50245;
var statearr_50295_51904 = state_50245__$1;
(statearr_50295_51904[(2)] = inst_50174);

(statearr_50295_51904[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (2))){
var state_50245__$1 = state_50245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50245__$1,(4),ch);
} else {
if((state_val_50246 === (23))){
var state_50245__$1 = state_50245;
var statearr_50296_51905 = state_50245__$1;
(statearr_50296_51905[(2)] = null);

(statearr_50296_51905[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (35))){
var inst_50227 = (state_50245[(2)]);
var state_50245__$1 = state_50245;
var statearr_50297_51906 = state_50245__$1;
(statearr_50297_51906[(2)] = inst_50227);

(statearr_50297_51906[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (19))){
var inst_49979 = (state_50245[(7)]);
var inst_50150 = cljs.core.chunk_first(inst_49979);
var inst_50151 = cljs.core.chunk_rest(inst_49979);
var inst_50152 = cljs.core.count(inst_50150);
var inst_49948 = inst_50151;
var inst_49949 = inst_50150;
var inst_49950 = inst_50152;
var inst_49951 = (0);
var state_50245__$1 = (function (){var statearr_50298 = state_50245;
(statearr_50298[(14)] = inst_49950);

(statearr_50298[(15)] = inst_49949);

(statearr_50298[(16)] = inst_49948);

(statearr_50298[(17)] = inst_49951);

return statearr_50298;
})();
var statearr_50299_51907 = state_50245__$1;
(statearr_50299_51907[(2)] = null);

(statearr_50299_51907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (11))){
var inst_49948 = (state_50245[(16)]);
var inst_49979 = (state_50245[(7)]);
var inst_49979__$1 = cljs.core.seq(inst_49948);
var state_50245__$1 = (function (){var statearr_50300 = state_50245;
(statearr_50300[(7)] = inst_49979__$1);

return statearr_50300;
})();
if(inst_49979__$1){
var statearr_50301_51908 = state_50245__$1;
(statearr_50301_51908[(1)] = (16));

} else {
var statearr_50302_51909 = state_50245__$1;
(statearr_50302_51909[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (9))){
var inst_50176 = (state_50245[(2)]);
var state_50245__$1 = state_50245;
var statearr_50303_51910 = state_50245__$1;
(statearr_50303_51910[(2)] = inst_50176);

(statearr_50303_51910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (5))){
var inst_49946 = cljs.core.deref(cs);
var inst_49947 = cljs.core.seq(inst_49946);
var inst_49948 = inst_49947;
var inst_49949 = null;
var inst_49950 = (0);
var inst_49951 = (0);
var state_50245__$1 = (function (){var statearr_50304 = state_50245;
(statearr_50304[(14)] = inst_49950);

(statearr_50304[(15)] = inst_49949);

(statearr_50304[(16)] = inst_49948);

(statearr_50304[(17)] = inst_49951);

return statearr_50304;
})();
var statearr_50305_51911 = state_50245__$1;
(statearr_50305_51911[(2)] = null);

(statearr_50305_51911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (14))){
var state_50245__$1 = state_50245;
var statearr_50306_51912 = state_50245__$1;
(statearr_50306_51912[(2)] = null);

(statearr_50306_51912[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (45))){
var inst_50235 = (state_50245[(2)]);
var state_50245__$1 = state_50245;
var statearr_50307_51913 = state_50245__$1;
(statearr_50307_51913[(2)] = inst_50235);

(statearr_50307_51913[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (26))){
var inst_50179 = (state_50245[(27)]);
var inst_50231 = (state_50245[(2)]);
var inst_50232 = cljs.core.seq(inst_50179);
var state_50245__$1 = (function (){var statearr_50308 = state_50245;
(statearr_50308[(29)] = inst_50231);

return statearr_50308;
})();
if(inst_50232){
var statearr_50309_51914 = state_50245__$1;
(statearr_50309_51914[(1)] = (42));

} else {
var statearr_50310_51915 = state_50245__$1;
(statearr_50310_51915[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (16))){
var inst_49979 = (state_50245[(7)]);
var inst_50148 = cljs.core.chunked_seq_QMARK_(inst_49979);
var state_50245__$1 = state_50245;
if(inst_50148){
var statearr_50311_51916 = state_50245__$1;
(statearr_50311_51916[(1)] = (19));

} else {
var statearr_50312_51917 = state_50245__$1;
(statearr_50312_51917[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (38))){
var inst_50224 = (state_50245[(2)]);
var state_50245__$1 = state_50245;
var statearr_50313_51918 = state_50245__$1;
(statearr_50313_51918[(2)] = inst_50224);

(statearr_50313_51918[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (30))){
var state_50245__$1 = state_50245;
var statearr_50314_51919 = state_50245__$1;
(statearr_50314_51919[(2)] = null);

(statearr_50314_51919[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (10))){
var inst_49949 = (state_50245[(15)]);
var inst_49951 = (state_50245[(17)]);
var inst_49962 = cljs.core._nth(inst_49949,inst_49951);
var inst_49966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49962,(0),null);
var inst_49970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49962,(1),null);
var state_50245__$1 = (function (){var statearr_50315 = state_50245;
(statearr_50315[(24)] = inst_49966);

return statearr_50315;
})();
if(cljs.core.truth_(inst_49970)){
var statearr_50316_51920 = state_50245__$1;
(statearr_50316_51920[(1)] = (13));

} else {
var statearr_50317_51921 = state_50245__$1;
(statearr_50317_51921[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (18))){
var inst_50172 = (state_50245[(2)]);
var state_50245__$1 = state_50245;
var statearr_50318_51922 = state_50245__$1;
(statearr_50318_51922[(2)] = inst_50172);

(statearr_50318_51922[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (42))){
var state_50245__$1 = state_50245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50245__$1,(45),dchan);
} else {
if((state_val_50246 === (37))){
var inst_49939 = (state_50245[(10)]);
var inst_50214 = (state_50245[(22)]);
var inst_50205 = (state_50245[(23)]);
var inst_50214__$1 = cljs.core.first(inst_50205);
var inst_50215 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50214__$1,inst_49939,done);
var state_50245__$1 = (function (){var statearr_50319 = state_50245;
(statearr_50319[(22)] = inst_50214__$1);

return statearr_50319;
})();
if(cljs.core.truth_(inst_50215)){
var statearr_50320_51923 = state_50245__$1;
(statearr_50320_51923[(1)] = (39));

} else {
var statearr_50321_51924 = state_50245__$1;
(statearr_50321_51924[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50246 === (8))){
var inst_49950 = (state_50245[(14)]);
var inst_49951 = (state_50245[(17)]);
var inst_49953 = (inst_49951 < inst_49950);
var inst_49954 = inst_49953;
var state_50245__$1 = state_50245;
if(cljs.core.truth_(inst_49954)){
var statearr_50322_51925 = state_50245__$1;
(statearr_50322_51925[(1)] = (10));

} else {
var statearr_50323_51926 = state_50245__$1;
(statearr_50323_51926[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__48932__auto__ = null;
var cljs$core$async$mult_$_state_machine__48932__auto____0 = (function (){
var statearr_50324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50324[(0)] = cljs$core$async$mult_$_state_machine__48932__auto__);

(statearr_50324[(1)] = (1));

return statearr_50324;
});
var cljs$core$async$mult_$_state_machine__48932__auto____1 = (function (state_50245){
while(true){
var ret_value__48933__auto__ = (function (){try{while(true){
var result__48934__auto__ = switch__48931__auto__(state_50245);
if(cljs.core.keyword_identical_QMARK_(result__48934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48934__auto__;
}
break;
}
}catch (e50325){var ex__48935__auto__ = e50325;
var statearr_50326_51927 = state_50245;
(statearr_50326_51927[(2)] = ex__48935__auto__);


if(cljs.core.seq((state_50245[(4)]))){
var statearr_50327_51928 = state_50245;
(statearr_50327_51928[(1)] = cljs.core.first((state_50245[(4)])));

} else {
throw ex__48935__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51929 = state_50245;
state_50245 = G__51929;
continue;
} else {
return ret_value__48933__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__48932__auto__ = function(state_50245){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__48932__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__48932__auto____1.call(this,state_50245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__48932__auto____0;
cljs$core$async$mult_$_state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__48932__auto____1;
return cljs$core$async$mult_$_state_machine__48932__auto__;
})()
})();
var state__49041__auto__ = (function (){var statearr_50328 = f__49040__auto__();
(statearr_50328[(6)] = c__49039__auto___51871);

return statearr_50328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49041__auto__);
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
var G__50330 = arguments.length;
switch (G__50330) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_51933 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_51933(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_51934 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_51934(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_51936 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_51936(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_51947 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_51947(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_51948 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_51948(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___51949 = arguments.length;
var i__4830__auto___51950 = (0);
while(true){
if((i__4830__auto___51950 < len__4829__auto___51949)){
args__4835__auto__.push((arguments[i__4830__auto___51950]));

var G__51952 = (i__4830__auto___51950 + (1));
i__4830__auto___51950 = G__51952;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__50344){
var map__50345 = p__50344;
var map__50345__$1 = cljs.core.__destructure_map(map__50345);
var opts = map__50345__$1;
var statearr_50346_51958 = state;
(statearr_50346_51958[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_50349_51962 = state;
(statearr_50349_51962[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_50350_51965 = state;
(statearr_50350_51965[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq50340){
var G__50341 = cljs.core.first(seq50340);
var seq50340__$1 = cljs.core.next(seq50340);
var G__50342 = cljs.core.first(seq50340__$1);
var seq50340__$2 = cljs.core.next(seq50340__$1);
var G__50343 = cljs.core.first(seq50340__$2);
var seq50340__$3 = cljs.core.next(seq50340__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50341,G__50342,G__50343,seq50340__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50351 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50351 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta50352){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta50352 = meta50352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50353,meta50352__$1){
var self__ = this;
var _50353__$1 = this;
return (new cljs.core.async.t_cljs$core$async50351(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta50352__$1));
}));

(cljs.core.async.t_cljs$core$async50351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50353){
var self__ = this;
var _50353__$1 = this;
return self__.meta50352;
}));

(cljs.core.async.t_cljs$core$async50351.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50351.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async50351.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50351.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50351.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50351.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50351.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50351.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50351.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta50352","meta50352",361724221,null)], null);
}));

(cljs.core.async.t_cljs$core$async50351.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50351");

(cljs.core.async.t_cljs$core$async50351.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async50351");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50351.
 */
cljs.core.async.__GT_t_cljs$core$async50351 = (function cljs$core$async$mix_$___GT_t_cljs$core$async50351(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50352){
return (new cljs.core.async.t_cljs$core$async50351(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50352));
});

}

return (new cljs.core.async.t_cljs$core$async50351(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49039__auto___51981 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49040__auto__ = (function (){var switch__48931__auto__ = (function (state_50453){
var state_val_50458 = (state_50453[(1)]);
if((state_val_50458 === (7))){
var inst_50412 = (state_50453[(2)]);
var state_50453__$1 = state_50453;
if(cljs.core.truth_(inst_50412)){
var statearr_50463_51995 = state_50453__$1;
(statearr_50463_51995[(1)] = (8));

} else {
var statearr_50464_52000 = state_50453__$1;
(statearr_50464_52000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50458 === (20))){
var inst_50405 = (state_50453[(7)]);
var state_50453__$1 = state_50453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50453__$1,(23),out,inst_50405);
} else {
if((state_val_50458 === (1))){
var inst_50387 = calc_state();
var inst_50388 = cljs.core.__destructure_map(inst_50387);
var inst_50389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50388,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_50391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50388,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_50392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50388,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_50393 = inst_50387;
var state_50453__$1 = (function (){var statearr_50469 = state_50453;
(statearr_50469[(8)] = inst_50391);

(statearr_50469[(9)] = inst_50389);

(statearr_50469[(10)] = inst_50392);

(statearr_50469[(11)] = inst_50393);

return statearr_50469;
})();
var statearr_50470_52012 = state_50453__$1;
(statearr_50470_52012[(2)] = null);

(statearr_50470_52012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50458 === (24))){
var inst_50396 = (state_50453[(12)]);
var inst_50393 = inst_50396;
var state_50453__$1 = (function (){var statearr_50471 = state_50453;
(statearr_50471[(11)] = inst_50393);

return statearr_50471;
})();
var statearr_50472_52013 = state_50453__$1;
(statearr_50472_52013[(2)] = null);

(statearr_50472_52013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50458 === (4))){
var inst_50407 = (state_50453[(13)]);
var inst_50405 = (state_50453[(7)]);
var inst_50404 = (state_50453[(2)]);
var inst_50405__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50404,(0),null);
var inst_50406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50404,(1),null);
var inst_50407__$1 = (inst_50405__$1 == null);
var state_50453__$1 = (function (){var statearr_50473 = state_50453;
(statearr_50473[(13)] = inst_50407__$1);

(statearr_50473[(7)] = inst_50405__$1);

(statearr_50473[(14)] = inst_50406);

return statearr_50473;
})();
if(cljs.core.truth_(inst_50407__$1)){
var statearr_50474_52022 = state_50453__$1;
(statearr_50474_52022[(1)] = (5));

} else {
var statearr_50475_52024 = state_50453__$1;
(statearr_50475_52024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50458 === (15))){
var inst_50397 = (state_50453[(15)]);
var inst_50427 = (state_50453[(16)]);
var inst_50427__$1 = cljs.core.empty_QMARK_(inst_50397);
var state_50453__$1 = (function (){var statearr_50476 = state_50453;
(statearr_50476[(16)] = inst_50427__$1);

return statearr_50476;
})();
if(inst_50427__$1){
var statearr_50477_52034 = state_50453__$1;
(statearr_50477_52034[(1)] = (17));

} else {
var statearr_50478_52035 = state_50453__$1;
(statearr_50478_52035[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50458 === (21))){
var inst_50396 = (state_50453[(12)]);
var inst_50393 = inst_50396;
var state_50453__$1 = (function (){var statearr_50479 = state_50453;
(statearr_50479[(11)] = inst_50393);

return statearr_50479;
})();
var statearr_50480_52040 = state_50453__$1;
(statearr_50480_52040[(2)] = null);

(statearr_50480_52040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50458 === (13))){
var inst_50420 = (state_50453[(2)]);
var inst_50421 = calc_state();
var inst_50393 = inst_50421;
var state_50453__$1 = (function (){var statearr_50481 = state_50453;
(statearr_50481[(17)] = inst_50420);

(statearr_50481[(11)] = inst_50393);

return statearr_50481;
})();
var statearr_50482_52056 = state_50453__$1;
(statearr_50482_52056[(2)] = null);

(statearr_50482_52056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50458 === (22))){
var inst_50447 = (state_50453[(2)]);
var state_50453__$1 = state_50453;
var statearr_50483_52066 = state_50453__$1;
(statearr_50483_52066[(2)] = inst_50447);

(statearr_50483_52066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50458 === (6))){
var inst_50406 = (state_50453[(14)]);
var inst_50410 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50406,change);
var state_50453__$1 = state_50453;
var statearr_50500_52067 = state_50453__$1;
(statearr_50500_52067[(2)] = inst_50410);

(statearr_50500_52067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50458 === (25))){
var state_50453__$1 = state_50453;
var statearr_50502_52072 = state_50453__$1;
(statearr_50502_52072[(2)] = null);

(statearr_50502_52072[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50458 === (17))){
var inst_50406 = (state_50453[(14)]);
var inst_50398 = (state_50453[(18)]);
var inst_50429 = (inst_50398.cljs$core$IFn$_invoke$arity$1 ? inst_50398.cljs$core$IFn$_invoke$arity$1(inst_50406) : inst_50398.call(null,inst_50406));
var inst_50430 = cljs.core.not(inst_50429);
var state_50453__$1 = state_50453;
var statearr_50503_52080 = state_50453__$1;
(statearr_50503_52080[(2)] = inst_50430);

(statearr_50503_52080[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50458 === (3))){
var inst_50451 = (state_50453[(2)]);
var state_50453__$1 = state_50453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50453__$1,inst_50451);
} else {
if((state_val_50458 === (12))){
var state_50453__$1 = state_50453;
var statearr_50508_52081 = state_50453__$1;
(statearr_50508_52081[(2)] = null);

(statearr_50508_52081[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50458 === (2))){
var inst_50396 = (state_50453[(12)]);
var inst_50393 = (state_50453[(11)]);
var inst_50396__$1 = cljs.core.__destructure_map(inst_50393);
var inst_50397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50396__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_50398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50396__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_50399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50396__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_50453__$1 = (function (){var statearr_50513 = state_50453;
(statearr_50513[(15)] = inst_50397);

(statearr_50513[(18)] = inst_50398);

(statearr_50513[(12)] = inst_50396__$1);

return statearr_50513;
})();
return cljs.core.async.ioc_alts_BANG_(state_50453__$1,(4),inst_50399);
} else {
if((state_val_50458 === (23))){
var inst_50438 = (state_50453[(2)]);
var state_50453__$1 = state_50453;
if(cljs.core.truth_(inst_50438)){
var statearr_50518_52118 = state_50453__$1;
(statearr_50518_52118[(1)] = (24));

} else {
var statearr_50519_52119 = state_50453__$1;
(statearr_50519_52119[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50458 === (19))){
var inst_50433 = (state_50453[(2)]);
var state_50453__$1 = state_50453;
var statearr_50521_52120 = state_50453__$1;
(statearr_50521_52120[(2)] = inst_50433);

(statearr_50521_52120[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50458 === (11))){
var inst_50406 = (state_50453[(14)]);
var inst_50417 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_50406);
var state_50453__$1 = state_50453;
var statearr_50523_52121 = state_50453__$1;
(statearr_50523_52121[(2)] = inst_50417);

(statearr_50523_52121[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50458 === (9))){
var inst_50397 = (state_50453[(15)]);
var inst_50406 = (state_50453[(14)]);
var inst_50424 = (state_50453[(19)]);
var inst_50424__$1 = (inst_50397.cljs$core$IFn$_invoke$arity$1 ? inst_50397.cljs$core$IFn$_invoke$arity$1(inst_50406) : inst_50397.call(null,inst_50406));
var state_50453__$1 = (function (){var statearr_50527 = state_50453;
(statearr_50527[(19)] = inst_50424__$1);

return statearr_50527;
})();
if(cljs.core.truth_(inst_50424__$1)){
var statearr_50528_52122 = state_50453__$1;
(statearr_50528_52122[(1)] = (14));

} else {
var statearr_50529_52123 = state_50453__$1;
(statearr_50529_52123[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50458 === (5))){
var inst_50407 = (state_50453[(13)]);
var state_50453__$1 = state_50453;
var statearr_50530_52124 = state_50453__$1;
(statearr_50530_52124[(2)] = inst_50407);

(statearr_50530_52124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50458 === (14))){
var inst_50424 = (state_50453[(19)]);
var state_50453__$1 = state_50453;
var statearr_50534_52125 = state_50453__$1;
(statearr_50534_52125[(2)] = inst_50424);

(statearr_50534_52125[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50458 === (26))){
var inst_50443 = (state_50453[(2)]);
var state_50453__$1 = state_50453;
var statearr_50535_52127 = state_50453__$1;
(statearr_50535_52127[(2)] = inst_50443);

(statearr_50535_52127[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50458 === (16))){
var inst_50435 = (state_50453[(2)]);
var state_50453__$1 = state_50453;
if(cljs.core.truth_(inst_50435)){
var statearr_50537_52128 = state_50453__$1;
(statearr_50537_52128[(1)] = (20));

} else {
var statearr_50538_52129 = state_50453__$1;
(statearr_50538_52129[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50458 === (10))){
var inst_50449 = (state_50453[(2)]);
var state_50453__$1 = state_50453;
var statearr_50539_52130 = state_50453__$1;
(statearr_50539_52130[(2)] = inst_50449);

(statearr_50539_52130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50458 === (18))){
var inst_50427 = (state_50453[(16)]);
var state_50453__$1 = state_50453;
var statearr_50540_52131 = state_50453__$1;
(statearr_50540_52131[(2)] = inst_50427);

(statearr_50540_52131[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50458 === (8))){
var inst_50405 = (state_50453[(7)]);
var inst_50415 = (inst_50405 == null);
var state_50453__$1 = state_50453;
if(cljs.core.truth_(inst_50415)){
var statearr_50553_52132 = state_50453__$1;
(statearr_50553_52132[(1)] = (11));

} else {
var statearr_50554_52133 = state_50453__$1;
(statearr_50554_52133[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__48932__auto__ = null;
var cljs$core$async$mix_$_state_machine__48932__auto____0 = (function (){
var statearr_50555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50555[(0)] = cljs$core$async$mix_$_state_machine__48932__auto__);

(statearr_50555[(1)] = (1));

return statearr_50555;
});
var cljs$core$async$mix_$_state_machine__48932__auto____1 = (function (state_50453){
while(true){
var ret_value__48933__auto__ = (function (){try{while(true){
var result__48934__auto__ = switch__48931__auto__(state_50453);
if(cljs.core.keyword_identical_QMARK_(result__48934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48934__auto__;
}
break;
}
}catch (e50556){var ex__48935__auto__ = e50556;
var statearr_50557_52135 = state_50453;
(statearr_50557_52135[(2)] = ex__48935__auto__);


if(cljs.core.seq((state_50453[(4)]))){
var statearr_50558_52136 = state_50453;
(statearr_50558_52136[(1)] = cljs.core.first((state_50453[(4)])));

} else {
throw ex__48935__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52137 = state_50453;
state_50453 = G__52137;
continue;
} else {
return ret_value__48933__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__48932__auto__ = function(state_50453){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__48932__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__48932__auto____1.call(this,state_50453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__48932__auto____0;
cljs$core$async$mix_$_state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__48932__auto____1;
return cljs$core$async$mix_$_state_machine__48932__auto__;
})()
})();
var state__49041__auto__ = (function (){var statearr_50563 = f__49040__auto__();
(statearr_50563[(6)] = c__49039__auto___51981);

return statearr_50563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49041__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_52192 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_52192(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_52195 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_52195(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_52196 = (function() {
var G__52197 = null;
var G__52197__1 = (function (p){
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
var G__52197__2 = (function (p,v){
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
G__52197 = function(p,v){
switch(arguments.length){
case 1:
return G__52197__1.call(this,p);
case 2:
return G__52197__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52197.cljs$core$IFn$_invoke$arity$1 = G__52197__1;
G__52197.cljs$core$IFn$_invoke$arity$2 = G__52197__2;
return G__52197;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__50568 = arguments.length;
switch (G__50568) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52196(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52196(p,v);
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
var G__50575 = arguments.length;
switch (G__50575) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__50573_SHARP_){
if(cljs.core.truth_((p1__50573_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__50573_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__50573_SHARP_.call(null,topic)))){
return p1__50573_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50573_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50578 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50578 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta50579){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta50579 = meta50579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50580,meta50579__$1){
var self__ = this;
var _50580__$1 = this;
return (new cljs.core.async.t_cljs$core$async50578(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta50579__$1));
}));

(cljs.core.async.t_cljs$core$async50578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50580){
var self__ = this;
var _50580__$1 = this;
return self__.meta50579;
}));

(cljs.core.async.t_cljs$core$async50578.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50578.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async50578.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50578.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async50578.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async50578.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async50578.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async50578.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta50579","meta50579",-1179859122,null)], null);
}));

(cljs.core.async.t_cljs$core$async50578.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50578.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50578");

(cljs.core.async.t_cljs$core$async50578.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async50578");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50578.
 */
cljs.core.async.__GT_t_cljs$core$async50578 = (function cljs$core$async$__GT_t_cljs$core$async50578(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta50579){
return (new cljs.core.async.t_cljs$core$async50578(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta50579));
});

}

return (new cljs.core.async.t_cljs$core$async50578(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49039__auto___52242 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49040__auto__ = (function (){var switch__48931__auto__ = (function (state_50652){
var state_val_50653 = (state_50652[(1)]);
if((state_val_50653 === (7))){
var inst_50648 = (state_50652[(2)]);
var state_50652__$1 = state_50652;
var statearr_50654_52244 = state_50652__$1;
(statearr_50654_52244[(2)] = inst_50648);

(statearr_50654_52244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (20))){
var state_50652__$1 = state_50652;
var statearr_50655_52245 = state_50652__$1;
(statearr_50655_52245[(2)] = null);

(statearr_50655_52245[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (1))){
var state_50652__$1 = state_50652;
var statearr_50656_52246 = state_50652__$1;
(statearr_50656_52246[(2)] = null);

(statearr_50656_52246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (24))){
var inst_50631 = (state_50652[(7)]);
var inst_50640 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_50631);
var state_50652__$1 = state_50652;
var statearr_50657_52247 = state_50652__$1;
(statearr_50657_52247[(2)] = inst_50640);

(statearr_50657_52247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (4))){
var inst_50583 = (state_50652[(8)]);
var inst_50583__$1 = (state_50652[(2)]);
var inst_50584 = (inst_50583__$1 == null);
var state_50652__$1 = (function (){var statearr_50658 = state_50652;
(statearr_50658[(8)] = inst_50583__$1);

return statearr_50658;
})();
if(cljs.core.truth_(inst_50584)){
var statearr_50659_52248 = state_50652__$1;
(statearr_50659_52248[(1)] = (5));

} else {
var statearr_50660_52249 = state_50652__$1;
(statearr_50660_52249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (15))){
var inst_50625 = (state_50652[(2)]);
var state_50652__$1 = state_50652;
var statearr_50661_52250 = state_50652__$1;
(statearr_50661_52250[(2)] = inst_50625);

(statearr_50661_52250[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (21))){
var inst_50645 = (state_50652[(2)]);
var state_50652__$1 = (function (){var statearr_50662 = state_50652;
(statearr_50662[(9)] = inst_50645);

return statearr_50662;
})();
var statearr_50663_52251 = state_50652__$1;
(statearr_50663_52251[(2)] = null);

(statearr_50663_52251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (13))){
var inst_50607 = (state_50652[(10)]);
var inst_50609 = cljs.core.chunked_seq_QMARK_(inst_50607);
var state_50652__$1 = state_50652;
if(inst_50609){
var statearr_50664_52252 = state_50652__$1;
(statearr_50664_52252[(1)] = (16));

} else {
var statearr_50665_52253 = state_50652__$1;
(statearr_50665_52253[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (22))){
var inst_50637 = (state_50652[(2)]);
var state_50652__$1 = state_50652;
if(cljs.core.truth_(inst_50637)){
var statearr_50666_52254 = state_50652__$1;
(statearr_50666_52254[(1)] = (23));

} else {
var statearr_50667_52255 = state_50652__$1;
(statearr_50667_52255[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (6))){
var inst_50631 = (state_50652[(7)]);
var inst_50633 = (state_50652[(11)]);
var inst_50583 = (state_50652[(8)]);
var inst_50631__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_50583) : topic_fn.call(null,inst_50583));
var inst_50632 = cljs.core.deref(mults);
var inst_50633__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50632,inst_50631__$1);
var state_50652__$1 = (function (){var statearr_50668 = state_50652;
(statearr_50668[(7)] = inst_50631__$1);

(statearr_50668[(11)] = inst_50633__$1);

return statearr_50668;
})();
if(cljs.core.truth_(inst_50633__$1)){
var statearr_50669_52256 = state_50652__$1;
(statearr_50669_52256[(1)] = (19));

} else {
var statearr_50670_52257 = state_50652__$1;
(statearr_50670_52257[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (25))){
var inst_50642 = (state_50652[(2)]);
var state_50652__$1 = state_50652;
var statearr_50671_52258 = state_50652__$1;
(statearr_50671_52258[(2)] = inst_50642);

(statearr_50671_52258[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (17))){
var inst_50607 = (state_50652[(10)]);
var inst_50616 = cljs.core.first(inst_50607);
var inst_50617 = cljs.core.async.muxch_STAR_(inst_50616);
var inst_50618 = cljs.core.async.close_BANG_(inst_50617);
var inst_50619 = cljs.core.next(inst_50607);
var inst_50593 = inst_50619;
var inst_50594 = null;
var inst_50595 = (0);
var inst_50596 = (0);
var state_50652__$1 = (function (){var statearr_50672 = state_50652;
(statearr_50672[(12)] = inst_50618);

(statearr_50672[(13)] = inst_50593);

(statearr_50672[(14)] = inst_50594);

(statearr_50672[(15)] = inst_50595);

(statearr_50672[(16)] = inst_50596);

return statearr_50672;
})();
var statearr_50673_52259 = state_50652__$1;
(statearr_50673_52259[(2)] = null);

(statearr_50673_52259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (3))){
var inst_50650 = (state_50652[(2)]);
var state_50652__$1 = state_50652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50652__$1,inst_50650);
} else {
if((state_val_50653 === (12))){
var inst_50627 = (state_50652[(2)]);
var state_50652__$1 = state_50652;
var statearr_50674_52260 = state_50652__$1;
(statearr_50674_52260[(2)] = inst_50627);

(statearr_50674_52260[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (2))){
var state_50652__$1 = state_50652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50652__$1,(4),ch);
} else {
if((state_val_50653 === (23))){
var state_50652__$1 = state_50652;
var statearr_50682_52261 = state_50652__$1;
(statearr_50682_52261[(2)] = null);

(statearr_50682_52261[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (19))){
var inst_50633 = (state_50652[(11)]);
var inst_50583 = (state_50652[(8)]);
var inst_50635 = cljs.core.async.muxch_STAR_(inst_50633);
var state_50652__$1 = state_50652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50652__$1,(22),inst_50635,inst_50583);
} else {
if((state_val_50653 === (11))){
var inst_50607 = (state_50652[(10)]);
var inst_50593 = (state_50652[(13)]);
var inst_50607__$1 = cljs.core.seq(inst_50593);
var state_50652__$1 = (function (){var statearr_50684 = state_50652;
(statearr_50684[(10)] = inst_50607__$1);

return statearr_50684;
})();
if(inst_50607__$1){
var statearr_50686_52262 = state_50652__$1;
(statearr_50686_52262[(1)] = (13));

} else {
var statearr_50687_52263 = state_50652__$1;
(statearr_50687_52263[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (9))){
var inst_50629 = (state_50652[(2)]);
var state_50652__$1 = state_50652;
var statearr_50688_52264 = state_50652__$1;
(statearr_50688_52264[(2)] = inst_50629);

(statearr_50688_52264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (5))){
var inst_50590 = cljs.core.deref(mults);
var inst_50591 = cljs.core.vals(inst_50590);
var inst_50592 = cljs.core.seq(inst_50591);
var inst_50593 = inst_50592;
var inst_50594 = null;
var inst_50595 = (0);
var inst_50596 = (0);
var state_50652__$1 = (function (){var statearr_50691 = state_50652;
(statearr_50691[(13)] = inst_50593);

(statearr_50691[(14)] = inst_50594);

(statearr_50691[(15)] = inst_50595);

(statearr_50691[(16)] = inst_50596);

return statearr_50691;
})();
var statearr_50692_52265 = state_50652__$1;
(statearr_50692_52265[(2)] = null);

(statearr_50692_52265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (14))){
var state_50652__$1 = state_50652;
var statearr_50696_52266 = state_50652__$1;
(statearr_50696_52266[(2)] = null);

(statearr_50696_52266[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (16))){
var inst_50607 = (state_50652[(10)]);
var inst_50611 = cljs.core.chunk_first(inst_50607);
var inst_50612 = cljs.core.chunk_rest(inst_50607);
var inst_50613 = cljs.core.count(inst_50611);
var inst_50593 = inst_50612;
var inst_50594 = inst_50611;
var inst_50595 = inst_50613;
var inst_50596 = (0);
var state_50652__$1 = (function (){var statearr_50700 = state_50652;
(statearr_50700[(13)] = inst_50593);

(statearr_50700[(14)] = inst_50594);

(statearr_50700[(15)] = inst_50595);

(statearr_50700[(16)] = inst_50596);

return statearr_50700;
})();
var statearr_50701_52267 = state_50652__$1;
(statearr_50701_52267[(2)] = null);

(statearr_50701_52267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (10))){
var inst_50593 = (state_50652[(13)]);
var inst_50594 = (state_50652[(14)]);
var inst_50595 = (state_50652[(15)]);
var inst_50596 = (state_50652[(16)]);
var inst_50601 = cljs.core._nth(inst_50594,inst_50596);
var inst_50602 = cljs.core.async.muxch_STAR_(inst_50601);
var inst_50603 = cljs.core.async.close_BANG_(inst_50602);
var inst_50604 = (inst_50596 + (1));
var tmp50693 = inst_50593;
var tmp50694 = inst_50594;
var tmp50695 = inst_50595;
var inst_50593__$1 = tmp50693;
var inst_50594__$1 = tmp50694;
var inst_50595__$1 = tmp50695;
var inst_50596__$1 = inst_50604;
var state_50652__$1 = (function (){var statearr_50702 = state_50652;
(statearr_50702[(17)] = inst_50603);

(statearr_50702[(13)] = inst_50593__$1);

(statearr_50702[(14)] = inst_50594__$1);

(statearr_50702[(15)] = inst_50595__$1);

(statearr_50702[(16)] = inst_50596__$1);

return statearr_50702;
})();
var statearr_50703_52268 = state_50652__$1;
(statearr_50703_52268[(2)] = null);

(statearr_50703_52268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (18))){
var inst_50622 = (state_50652[(2)]);
var state_50652__$1 = state_50652;
var statearr_50704_52269 = state_50652__$1;
(statearr_50704_52269[(2)] = inst_50622);

(statearr_50704_52269[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (8))){
var inst_50595 = (state_50652[(15)]);
var inst_50596 = (state_50652[(16)]);
var inst_50598 = (inst_50596 < inst_50595);
var inst_50599 = inst_50598;
var state_50652__$1 = state_50652;
if(cljs.core.truth_(inst_50599)){
var statearr_50705_52270 = state_50652__$1;
(statearr_50705_52270[(1)] = (10));

} else {
var statearr_50706_52271 = state_50652__$1;
(statearr_50706_52271[(1)] = (11));

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
var cljs$core$async$state_machine__48932__auto__ = null;
var cljs$core$async$state_machine__48932__auto____0 = (function (){
var statearr_50710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50710[(0)] = cljs$core$async$state_machine__48932__auto__);

(statearr_50710[(1)] = (1));

return statearr_50710;
});
var cljs$core$async$state_machine__48932__auto____1 = (function (state_50652){
while(true){
var ret_value__48933__auto__ = (function (){try{while(true){
var result__48934__auto__ = switch__48931__auto__(state_50652);
if(cljs.core.keyword_identical_QMARK_(result__48934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48934__auto__;
}
break;
}
}catch (e50721){var ex__48935__auto__ = e50721;
var statearr_50722_52272 = state_50652;
(statearr_50722_52272[(2)] = ex__48935__auto__);


if(cljs.core.seq((state_50652[(4)]))){
var statearr_50723_52273 = state_50652;
(statearr_50723_52273[(1)] = cljs.core.first((state_50652[(4)])));

} else {
throw ex__48935__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52274 = state_50652;
state_50652 = G__52274;
continue;
} else {
return ret_value__48933__auto__;
}
break;
}
});
cljs$core$async$state_machine__48932__auto__ = function(state_50652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48932__auto____1.call(this,state_50652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48932__auto____0;
cljs$core$async$state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48932__auto____1;
return cljs$core$async$state_machine__48932__auto__;
})()
})();
var state__49041__auto__ = (function (){var statearr_50730 = f__49040__auto__();
(statearr_50730[(6)] = c__49039__auto___52242);

return statearr_50730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49041__auto__);
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
var G__50745 = arguments.length;
switch (G__50745) {
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
var G__50751 = arguments.length;
switch (G__50751) {
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
var G__50757 = arguments.length;
switch (G__50757) {
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
var c__49039__auto___52355 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49040__auto__ = (function (){var switch__48931__auto__ = (function (state_50804){
var state_val_50805 = (state_50804[(1)]);
if((state_val_50805 === (7))){
var state_50804__$1 = state_50804;
var statearr_50807_52356 = state_50804__$1;
(statearr_50807_52356[(2)] = null);

(statearr_50807_52356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50805 === (1))){
var state_50804__$1 = state_50804;
var statearr_50808_52357 = state_50804__$1;
(statearr_50808_52357[(2)] = null);

(statearr_50808_52357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50805 === (4))){
var inst_50765 = (state_50804[(7)]);
var inst_50764 = (state_50804[(8)]);
var inst_50767 = (inst_50765 < inst_50764);
var state_50804__$1 = state_50804;
if(cljs.core.truth_(inst_50767)){
var statearr_50810_52358 = state_50804__$1;
(statearr_50810_52358[(1)] = (6));

} else {
var statearr_50811_52359 = state_50804__$1;
(statearr_50811_52359[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50805 === (15))){
var inst_50790 = (state_50804[(9)]);
var inst_50795 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_50790);
var state_50804__$1 = state_50804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50804__$1,(17),out,inst_50795);
} else {
if((state_val_50805 === (13))){
var inst_50790 = (state_50804[(9)]);
var inst_50790__$1 = (state_50804[(2)]);
var inst_50791 = cljs.core.some(cljs.core.nil_QMARK_,inst_50790__$1);
var state_50804__$1 = (function (){var statearr_50812 = state_50804;
(statearr_50812[(9)] = inst_50790__$1);

return statearr_50812;
})();
if(cljs.core.truth_(inst_50791)){
var statearr_50813_52360 = state_50804__$1;
(statearr_50813_52360[(1)] = (14));

} else {
var statearr_50814_52361 = state_50804__$1;
(statearr_50814_52361[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50805 === (6))){
var state_50804__$1 = state_50804;
var statearr_50820_52362 = state_50804__$1;
(statearr_50820_52362[(2)] = null);

(statearr_50820_52362[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50805 === (17))){
var inst_50797 = (state_50804[(2)]);
var state_50804__$1 = (function (){var statearr_50822 = state_50804;
(statearr_50822[(10)] = inst_50797);

return statearr_50822;
})();
var statearr_50823_52363 = state_50804__$1;
(statearr_50823_52363[(2)] = null);

(statearr_50823_52363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50805 === (3))){
var inst_50802 = (state_50804[(2)]);
var state_50804__$1 = state_50804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50804__$1,inst_50802);
} else {
if((state_val_50805 === (12))){
var _ = (function (){var statearr_50824 = state_50804;
(statearr_50824[(4)] = cljs.core.rest((state_50804[(4)])));

return statearr_50824;
})();
var state_50804__$1 = state_50804;
var ex50821 = (state_50804__$1[(2)]);
var statearr_50825_52365 = state_50804__$1;
(statearr_50825_52365[(5)] = ex50821);


if((ex50821 instanceof Object)){
var statearr_50830_52366 = state_50804__$1;
(statearr_50830_52366[(1)] = (11));

(statearr_50830_52366[(5)] = null);

} else {
throw ex50821;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50805 === (2))){
var inst_50763 = cljs.core.reset_BANG_(dctr,cnt);
var inst_50764 = cnt;
var inst_50765 = (0);
var state_50804__$1 = (function (){var statearr_50834 = state_50804;
(statearr_50834[(7)] = inst_50765);

(statearr_50834[(8)] = inst_50764);

(statearr_50834[(11)] = inst_50763);

return statearr_50834;
})();
var statearr_50835_52367 = state_50804__$1;
(statearr_50835_52367[(2)] = null);

(statearr_50835_52367[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50805 === (11))){
var inst_50769 = (state_50804[(2)]);
var inst_50770 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_50804__$1 = (function (){var statearr_50836 = state_50804;
(statearr_50836[(12)] = inst_50769);

return statearr_50836;
})();
var statearr_50837_52368 = state_50804__$1;
(statearr_50837_52368[(2)] = inst_50770);

(statearr_50837_52368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50805 === (9))){
var inst_50765 = (state_50804[(7)]);
var _ = (function (){var statearr_50838 = state_50804;
(statearr_50838[(4)] = cljs.core.cons((12),(state_50804[(4)])));

return statearr_50838;
})();
var inst_50776 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_50765) : chs__$1.call(null,inst_50765));
var inst_50777 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_50765) : done.call(null,inst_50765));
var inst_50778 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_50776,inst_50777);
var ___$1 = (function (){var statearr_50841 = state_50804;
(statearr_50841[(4)] = cljs.core.rest((state_50804[(4)])));

return statearr_50841;
})();
var state_50804__$1 = state_50804;
var statearr_50843_52369 = state_50804__$1;
(statearr_50843_52369[(2)] = inst_50778);

(statearr_50843_52369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50805 === (5))){
var inst_50788 = (state_50804[(2)]);
var state_50804__$1 = (function (){var statearr_50846 = state_50804;
(statearr_50846[(13)] = inst_50788);

return statearr_50846;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50804__$1,(13),dchan);
} else {
if((state_val_50805 === (14))){
var inst_50793 = cljs.core.async.close_BANG_(out);
var state_50804__$1 = state_50804;
var statearr_50847_52371 = state_50804__$1;
(statearr_50847_52371[(2)] = inst_50793);

(statearr_50847_52371[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50805 === (16))){
var inst_50800 = (state_50804[(2)]);
var state_50804__$1 = state_50804;
var statearr_50848_52376 = state_50804__$1;
(statearr_50848_52376[(2)] = inst_50800);

(statearr_50848_52376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50805 === (10))){
var inst_50765 = (state_50804[(7)]);
var inst_50781 = (state_50804[(2)]);
var inst_50782 = (inst_50765 + (1));
var inst_50765__$1 = inst_50782;
var state_50804__$1 = (function (){var statearr_50849 = state_50804;
(statearr_50849[(7)] = inst_50765__$1);

(statearr_50849[(14)] = inst_50781);

return statearr_50849;
})();
var statearr_50850_52377 = state_50804__$1;
(statearr_50850_52377[(2)] = null);

(statearr_50850_52377[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50805 === (8))){
var inst_50786 = (state_50804[(2)]);
var state_50804__$1 = state_50804;
var statearr_50851_52378 = state_50804__$1;
(statearr_50851_52378[(2)] = inst_50786);

(statearr_50851_52378[(1)] = (5));


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
var cljs$core$async$state_machine__48932__auto__ = null;
var cljs$core$async$state_machine__48932__auto____0 = (function (){
var statearr_50852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50852[(0)] = cljs$core$async$state_machine__48932__auto__);

(statearr_50852[(1)] = (1));

return statearr_50852;
});
var cljs$core$async$state_machine__48932__auto____1 = (function (state_50804){
while(true){
var ret_value__48933__auto__ = (function (){try{while(true){
var result__48934__auto__ = switch__48931__auto__(state_50804);
if(cljs.core.keyword_identical_QMARK_(result__48934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48934__auto__;
}
break;
}
}catch (e50853){var ex__48935__auto__ = e50853;
var statearr_50854_52438 = state_50804;
(statearr_50854_52438[(2)] = ex__48935__auto__);


if(cljs.core.seq((state_50804[(4)]))){
var statearr_50855_52439 = state_50804;
(statearr_50855_52439[(1)] = cljs.core.first((state_50804[(4)])));

} else {
throw ex__48935__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52440 = state_50804;
state_50804 = G__52440;
continue;
} else {
return ret_value__48933__auto__;
}
break;
}
});
cljs$core$async$state_machine__48932__auto__ = function(state_50804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48932__auto____1.call(this,state_50804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48932__auto____0;
cljs$core$async$state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48932__auto____1;
return cljs$core$async$state_machine__48932__auto__;
})()
})();
var state__49041__auto__ = (function (){var statearr_50856 = f__49040__auto__();
(statearr_50856[(6)] = c__49039__auto___52355);

return statearr_50856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49041__auto__);
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
var G__50859 = arguments.length;
switch (G__50859) {
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
var c__49039__auto___52442 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49040__auto__ = (function (){var switch__48931__auto__ = (function (state_50899){
var state_val_50900 = (state_50899[(1)]);
if((state_val_50900 === (7))){
var inst_50875 = (state_50899[(7)]);
var inst_50874 = (state_50899[(8)]);
var inst_50874__$1 = (state_50899[(2)]);
var inst_50875__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50874__$1,(0),null);
var inst_50876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50874__$1,(1),null);
var inst_50877 = (inst_50875__$1 == null);
var state_50899__$1 = (function (){var statearr_50901 = state_50899;
(statearr_50901[(9)] = inst_50876);

(statearr_50901[(7)] = inst_50875__$1);

(statearr_50901[(8)] = inst_50874__$1);

return statearr_50901;
})();
if(cljs.core.truth_(inst_50877)){
var statearr_50902_52443 = state_50899__$1;
(statearr_50902_52443[(1)] = (8));

} else {
var statearr_50903_52444 = state_50899__$1;
(statearr_50903_52444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50900 === (1))){
var inst_50861 = cljs.core.vec(chs);
var inst_50865 = inst_50861;
var state_50899__$1 = (function (){var statearr_50904 = state_50899;
(statearr_50904[(10)] = inst_50865);

return statearr_50904;
})();
var statearr_50906_52445 = state_50899__$1;
(statearr_50906_52445[(2)] = null);

(statearr_50906_52445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50900 === (4))){
var inst_50865 = (state_50899[(10)]);
var state_50899__$1 = state_50899;
return cljs.core.async.ioc_alts_BANG_(state_50899__$1,(7),inst_50865);
} else {
if((state_val_50900 === (6))){
var inst_50895 = (state_50899[(2)]);
var state_50899__$1 = state_50899;
var statearr_50908_52446 = state_50899__$1;
(statearr_50908_52446[(2)] = inst_50895);

(statearr_50908_52446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50900 === (3))){
var inst_50897 = (state_50899[(2)]);
var state_50899__$1 = state_50899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50899__$1,inst_50897);
} else {
if((state_val_50900 === (2))){
var inst_50865 = (state_50899[(10)]);
var inst_50867 = cljs.core.count(inst_50865);
var inst_50868 = (inst_50867 > (0));
var state_50899__$1 = state_50899;
if(cljs.core.truth_(inst_50868)){
var statearr_50910_52447 = state_50899__$1;
(statearr_50910_52447[(1)] = (4));

} else {
var statearr_50911_52448 = state_50899__$1;
(statearr_50911_52448[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50900 === (11))){
var inst_50865 = (state_50899[(10)]);
var inst_50888 = (state_50899[(2)]);
var tmp50909 = inst_50865;
var inst_50865__$1 = tmp50909;
var state_50899__$1 = (function (){var statearr_50912 = state_50899;
(statearr_50912[(10)] = inst_50865__$1);

(statearr_50912[(11)] = inst_50888);

return statearr_50912;
})();
var statearr_50913_52449 = state_50899__$1;
(statearr_50913_52449[(2)] = null);

(statearr_50913_52449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50900 === (9))){
var inst_50875 = (state_50899[(7)]);
var state_50899__$1 = state_50899;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50899__$1,(11),out,inst_50875);
} else {
if((state_val_50900 === (5))){
var inst_50893 = cljs.core.async.close_BANG_(out);
var state_50899__$1 = state_50899;
var statearr_50917_52450 = state_50899__$1;
(statearr_50917_52450[(2)] = inst_50893);

(statearr_50917_52450[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50900 === (10))){
var inst_50891 = (state_50899[(2)]);
var state_50899__$1 = state_50899;
var statearr_50918_52451 = state_50899__$1;
(statearr_50918_52451[(2)] = inst_50891);

(statearr_50918_52451[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50900 === (8))){
var inst_50876 = (state_50899[(9)]);
var inst_50865 = (state_50899[(10)]);
var inst_50875 = (state_50899[(7)]);
var inst_50874 = (state_50899[(8)]);
var inst_50883 = (function (){var cs = inst_50865;
var vec__50870 = inst_50874;
var v = inst_50875;
var c = inst_50876;
return (function (p1__50857_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__50857_SHARP_);
});
})();
var inst_50884 = cljs.core.filterv(inst_50883,inst_50865);
var inst_50865__$1 = inst_50884;
var state_50899__$1 = (function (){var statearr_50919 = state_50899;
(statearr_50919[(10)] = inst_50865__$1);

return statearr_50919;
})();
var statearr_50920_52452 = state_50899__$1;
(statearr_50920_52452[(2)] = null);

(statearr_50920_52452[(1)] = (2));


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
var cljs$core$async$state_machine__48932__auto__ = null;
var cljs$core$async$state_machine__48932__auto____0 = (function (){
var statearr_50921 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50921[(0)] = cljs$core$async$state_machine__48932__auto__);

(statearr_50921[(1)] = (1));

return statearr_50921;
});
var cljs$core$async$state_machine__48932__auto____1 = (function (state_50899){
while(true){
var ret_value__48933__auto__ = (function (){try{while(true){
var result__48934__auto__ = switch__48931__auto__(state_50899);
if(cljs.core.keyword_identical_QMARK_(result__48934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48934__auto__;
}
break;
}
}catch (e50922){var ex__48935__auto__ = e50922;
var statearr_50923_52453 = state_50899;
(statearr_50923_52453[(2)] = ex__48935__auto__);


if(cljs.core.seq((state_50899[(4)]))){
var statearr_50924_52454 = state_50899;
(statearr_50924_52454[(1)] = cljs.core.first((state_50899[(4)])));

} else {
throw ex__48935__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52455 = state_50899;
state_50899 = G__52455;
continue;
} else {
return ret_value__48933__auto__;
}
break;
}
});
cljs$core$async$state_machine__48932__auto__ = function(state_50899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48932__auto____1.call(this,state_50899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48932__auto____0;
cljs$core$async$state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48932__auto____1;
return cljs$core$async$state_machine__48932__auto__;
})()
})();
var state__49041__auto__ = (function (){var statearr_50925 = f__49040__auto__();
(statearr_50925[(6)] = c__49039__auto___52442);

return statearr_50925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49041__auto__);
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
var G__50927 = arguments.length;
switch (G__50927) {
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
var c__49039__auto___52457 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49040__auto__ = (function (){var switch__48931__auto__ = (function (state_50951){
var state_val_50952 = (state_50951[(1)]);
if((state_val_50952 === (7))){
var inst_50933 = (state_50951[(7)]);
var inst_50933__$1 = (state_50951[(2)]);
var inst_50934 = (inst_50933__$1 == null);
var inst_50935 = cljs.core.not(inst_50934);
var state_50951__$1 = (function (){var statearr_50953 = state_50951;
(statearr_50953[(7)] = inst_50933__$1);

return statearr_50953;
})();
if(inst_50935){
var statearr_50954_52458 = state_50951__$1;
(statearr_50954_52458[(1)] = (8));

} else {
var statearr_50955_52459 = state_50951__$1;
(statearr_50955_52459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (1))){
var inst_50928 = (0);
var state_50951__$1 = (function (){var statearr_50956 = state_50951;
(statearr_50956[(8)] = inst_50928);

return statearr_50956;
})();
var statearr_50957_52460 = state_50951__$1;
(statearr_50957_52460[(2)] = null);

(statearr_50957_52460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (4))){
var state_50951__$1 = state_50951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50951__$1,(7),ch);
} else {
if((state_val_50952 === (6))){
var inst_50946 = (state_50951[(2)]);
var state_50951__$1 = state_50951;
var statearr_50958_52461 = state_50951__$1;
(statearr_50958_52461[(2)] = inst_50946);

(statearr_50958_52461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (3))){
var inst_50948 = (state_50951[(2)]);
var inst_50949 = cljs.core.async.close_BANG_(out);
var state_50951__$1 = (function (){var statearr_50959 = state_50951;
(statearr_50959[(9)] = inst_50948);

return statearr_50959;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50951__$1,inst_50949);
} else {
if((state_val_50952 === (2))){
var inst_50928 = (state_50951[(8)]);
var inst_50930 = (inst_50928 < n);
var state_50951__$1 = state_50951;
if(cljs.core.truth_(inst_50930)){
var statearr_50960_52462 = state_50951__$1;
(statearr_50960_52462[(1)] = (4));

} else {
var statearr_50961_52463 = state_50951__$1;
(statearr_50961_52463[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (11))){
var inst_50928 = (state_50951[(8)]);
var inst_50938 = (state_50951[(2)]);
var inst_50939 = (inst_50928 + (1));
var inst_50928__$1 = inst_50939;
var state_50951__$1 = (function (){var statearr_50962 = state_50951;
(statearr_50962[(8)] = inst_50928__$1);

(statearr_50962[(10)] = inst_50938);

return statearr_50962;
})();
var statearr_50963_52464 = state_50951__$1;
(statearr_50963_52464[(2)] = null);

(statearr_50963_52464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (9))){
var state_50951__$1 = state_50951;
var statearr_50964_52465 = state_50951__$1;
(statearr_50964_52465[(2)] = null);

(statearr_50964_52465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (5))){
var state_50951__$1 = state_50951;
var statearr_50965_52466 = state_50951__$1;
(statearr_50965_52466[(2)] = null);

(statearr_50965_52466[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (10))){
var inst_50943 = (state_50951[(2)]);
var state_50951__$1 = state_50951;
var statearr_50970_52467 = state_50951__$1;
(statearr_50970_52467[(2)] = inst_50943);

(statearr_50970_52467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (8))){
var inst_50933 = (state_50951[(7)]);
var state_50951__$1 = state_50951;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50951__$1,(11),out,inst_50933);
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
var cljs$core$async$state_machine__48932__auto__ = null;
var cljs$core$async$state_machine__48932__auto____0 = (function (){
var statearr_50971 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50971[(0)] = cljs$core$async$state_machine__48932__auto__);

(statearr_50971[(1)] = (1));

return statearr_50971;
});
var cljs$core$async$state_machine__48932__auto____1 = (function (state_50951){
while(true){
var ret_value__48933__auto__ = (function (){try{while(true){
var result__48934__auto__ = switch__48931__auto__(state_50951);
if(cljs.core.keyword_identical_QMARK_(result__48934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48934__auto__;
}
break;
}
}catch (e50972){var ex__48935__auto__ = e50972;
var statearr_50973_52468 = state_50951;
(statearr_50973_52468[(2)] = ex__48935__auto__);


if(cljs.core.seq((state_50951[(4)]))){
var statearr_50974_52469 = state_50951;
(statearr_50974_52469[(1)] = cljs.core.first((state_50951[(4)])));

} else {
throw ex__48935__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52470 = state_50951;
state_50951 = G__52470;
continue;
} else {
return ret_value__48933__auto__;
}
break;
}
});
cljs$core$async$state_machine__48932__auto__ = function(state_50951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48932__auto____1.call(this,state_50951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48932__auto____0;
cljs$core$async$state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48932__auto____1;
return cljs$core$async$state_machine__48932__auto__;
})()
})();
var state__49041__auto__ = (function (){var statearr_50975 = f__49040__auto__();
(statearr_50975[(6)] = c__49039__auto___52457);

return statearr_50975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49041__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50981 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50981 = (function (f,ch,meta50982){
this.f = f;
this.ch = ch;
this.meta50982 = meta50982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50983,meta50982__$1){
var self__ = this;
var _50983__$1 = this;
return (new cljs.core.async.t_cljs$core$async50981(self__.f,self__.ch,meta50982__$1));
}));

(cljs.core.async.t_cljs$core$async50981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50983){
var self__ = this;
var _50983__$1 = this;
return self__.meta50982;
}));

(cljs.core.async.t_cljs$core$async50981.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50981.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async50981.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async50981.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50981.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50984 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50984 = (function (f,ch,meta50982,_,fn1,meta50985){
this.f = f;
this.ch = ch;
this.meta50982 = meta50982;
this._ = _;
this.fn1 = fn1;
this.meta50985 = meta50985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50986,meta50985__$1){
var self__ = this;
var _50986__$1 = this;
return (new cljs.core.async.t_cljs$core$async50984(self__.f,self__.ch,self__.meta50982,self__._,self__.fn1,meta50985__$1));
}));

(cljs.core.async.t_cljs$core$async50984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50986){
var self__ = this;
var _50986__$1 = this;
return self__.meta50985;
}));

(cljs.core.async.t_cljs$core$async50984.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50984.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async50984.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50984.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__50980_SHARP_){
var G__50987 = (((p1__50980_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__50980_SHARP_) : self__.f.call(null,p1__50980_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__50987) : f1.call(null,G__50987));
});
}));

(cljs.core.async.t_cljs$core$async50984.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50982","meta50982",-404686085,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async50981","cljs.core.async/t_cljs$core$async50981",490001687,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta50985","meta50985",1512545606,null)], null);
}));

(cljs.core.async.t_cljs$core$async50984.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50984.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50984");

(cljs.core.async.t_cljs$core$async50984.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async50984");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50984.
 */
cljs.core.async.__GT_t_cljs$core$async50984 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async50984(f__$1,ch__$1,meta50982__$1,___$2,fn1__$1,meta50985){
return (new cljs.core.async.t_cljs$core$async50984(f__$1,ch__$1,meta50982__$1,___$2,fn1__$1,meta50985));
});

}

return (new cljs.core.async.t_cljs$core$async50984(self__.f,self__.ch,self__.meta50982,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__51008 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__51008) : self__.f.call(null,G__51008));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async50981.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50981.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async50981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50982","meta50982",-404686085,null)], null);
}));

(cljs.core.async.t_cljs$core$async50981.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50981");

(cljs.core.async.t_cljs$core$async50981.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async50981");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50981.
 */
cljs.core.async.__GT_t_cljs$core$async50981 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async50981(f__$1,ch__$1,meta50982){
return (new cljs.core.async.t_cljs$core$async50981(f__$1,ch__$1,meta50982));
});

}

return (new cljs.core.async.t_cljs$core$async50981(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51029 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51029 = (function (f,ch,meta51030){
this.f = f;
this.ch = ch;
this.meta51030 = meta51030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51031,meta51030__$1){
var self__ = this;
var _51031__$1 = this;
return (new cljs.core.async.t_cljs$core$async51029(self__.f,self__.ch,meta51030__$1));
}));

(cljs.core.async.t_cljs$core$async51029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51031){
var self__ = this;
var _51031__$1 = this;
return self__.meta51030;
}));

(cljs.core.async.t_cljs$core$async51029.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51029.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51029.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51029.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51029.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51029.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async51029.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51030","meta51030",504117226,null)], null);
}));

(cljs.core.async.t_cljs$core$async51029.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51029.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51029");

(cljs.core.async.t_cljs$core$async51029.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async51029");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51029.
 */
cljs.core.async.__GT_t_cljs$core$async51029 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async51029(f__$1,ch__$1,meta51030){
return (new cljs.core.async.t_cljs$core$async51029(f__$1,ch__$1,meta51030));
});

}

return (new cljs.core.async.t_cljs$core$async51029(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51035 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51035 = (function (p,ch,meta51036){
this.p = p;
this.ch = ch;
this.meta51036 = meta51036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51037,meta51036__$1){
var self__ = this;
var _51037__$1 = this;
return (new cljs.core.async.t_cljs$core$async51035(self__.p,self__.ch,meta51036__$1));
}));

(cljs.core.async.t_cljs$core$async51035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51037){
var self__ = this;
var _51037__$1 = this;
return self__.meta51036;
}));

(cljs.core.async.t_cljs$core$async51035.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51035.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51035.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51035.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51035.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51035.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51035.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async51035.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51036","meta51036",607802645,null)], null);
}));

(cljs.core.async.t_cljs$core$async51035.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51035.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51035");

(cljs.core.async.t_cljs$core$async51035.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async51035");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51035.
 */
cljs.core.async.__GT_t_cljs$core$async51035 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async51035(p__$1,ch__$1,meta51036){
return (new cljs.core.async.t_cljs$core$async51035(p__$1,ch__$1,meta51036));
});

}

return (new cljs.core.async.t_cljs$core$async51035(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__51042 = arguments.length;
switch (G__51042) {
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
var c__49039__auto___52472 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49040__auto__ = (function (){var switch__48931__auto__ = (function (state_51063){
var state_val_51064 = (state_51063[(1)]);
if((state_val_51064 === (7))){
var inst_51059 = (state_51063[(2)]);
var state_51063__$1 = state_51063;
var statearr_51065_52473 = state_51063__$1;
(statearr_51065_52473[(2)] = inst_51059);

(statearr_51065_52473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51064 === (1))){
var state_51063__$1 = state_51063;
var statearr_51066_52474 = state_51063__$1;
(statearr_51066_52474[(2)] = null);

(statearr_51066_52474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51064 === (4))){
var inst_51045 = (state_51063[(7)]);
var inst_51045__$1 = (state_51063[(2)]);
var inst_51046 = (inst_51045__$1 == null);
var state_51063__$1 = (function (){var statearr_51067 = state_51063;
(statearr_51067[(7)] = inst_51045__$1);

return statearr_51067;
})();
if(cljs.core.truth_(inst_51046)){
var statearr_51068_52475 = state_51063__$1;
(statearr_51068_52475[(1)] = (5));

} else {
var statearr_51069_52476 = state_51063__$1;
(statearr_51069_52476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51064 === (6))){
var inst_51045 = (state_51063[(7)]);
var inst_51050 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51045) : p.call(null,inst_51045));
var state_51063__$1 = state_51063;
if(cljs.core.truth_(inst_51050)){
var statearr_51070_52477 = state_51063__$1;
(statearr_51070_52477[(1)] = (8));

} else {
var statearr_51071_52478 = state_51063__$1;
(statearr_51071_52478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51064 === (3))){
var inst_51061 = (state_51063[(2)]);
var state_51063__$1 = state_51063;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51063__$1,inst_51061);
} else {
if((state_val_51064 === (2))){
var state_51063__$1 = state_51063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51063__$1,(4),ch);
} else {
if((state_val_51064 === (11))){
var inst_51053 = (state_51063[(2)]);
var state_51063__$1 = state_51063;
var statearr_51072_52479 = state_51063__$1;
(statearr_51072_52479[(2)] = inst_51053);

(statearr_51072_52479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51064 === (9))){
var state_51063__$1 = state_51063;
var statearr_51073_52481 = state_51063__$1;
(statearr_51073_52481[(2)] = null);

(statearr_51073_52481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51064 === (5))){
var inst_51048 = cljs.core.async.close_BANG_(out);
var state_51063__$1 = state_51063;
var statearr_51074_52482 = state_51063__$1;
(statearr_51074_52482[(2)] = inst_51048);

(statearr_51074_52482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51064 === (10))){
var inst_51056 = (state_51063[(2)]);
var state_51063__$1 = (function (){var statearr_51075 = state_51063;
(statearr_51075[(8)] = inst_51056);

return statearr_51075;
})();
var statearr_51076_52483 = state_51063__$1;
(statearr_51076_52483[(2)] = null);

(statearr_51076_52483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51064 === (8))){
var inst_51045 = (state_51063[(7)]);
var state_51063__$1 = state_51063;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51063__$1,(11),out,inst_51045);
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
var cljs$core$async$state_machine__48932__auto__ = null;
var cljs$core$async$state_machine__48932__auto____0 = (function (){
var statearr_51077 = [null,null,null,null,null,null,null,null,null];
(statearr_51077[(0)] = cljs$core$async$state_machine__48932__auto__);

(statearr_51077[(1)] = (1));

return statearr_51077;
});
var cljs$core$async$state_machine__48932__auto____1 = (function (state_51063){
while(true){
var ret_value__48933__auto__ = (function (){try{while(true){
var result__48934__auto__ = switch__48931__auto__(state_51063);
if(cljs.core.keyword_identical_QMARK_(result__48934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48934__auto__;
}
break;
}
}catch (e51078){var ex__48935__auto__ = e51078;
var statearr_51079_52484 = state_51063;
(statearr_51079_52484[(2)] = ex__48935__auto__);


if(cljs.core.seq((state_51063[(4)]))){
var statearr_51080_52485 = state_51063;
(statearr_51080_52485[(1)] = cljs.core.first((state_51063[(4)])));

} else {
throw ex__48935__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52486 = state_51063;
state_51063 = G__52486;
continue;
} else {
return ret_value__48933__auto__;
}
break;
}
});
cljs$core$async$state_machine__48932__auto__ = function(state_51063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48932__auto____1.call(this,state_51063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48932__auto____0;
cljs$core$async$state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48932__auto____1;
return cljs$core$async$state_machine__48932__auto__;
})()
})();
var state__49041__auto__ = (function (){var statearr_51081 = f__49040__auto__();
(statearr_51081[(6)] = c__49039__auto___52472);

return statearr_51081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49041__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__51094 = arguments.length;
switch (G__51094) {
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
var c__49039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49040__auto__ = (function (){var switch__48931__auto__ = (function (state_51156){
var state_val_51157 = (state_51156[(1)]);
if((state_val_51157 === (7))){
var inst_51152 = (state_51156[(2)]);
var state_51156__$1 = state_51156;
var statearr_51158_52488 = state_51156__$1;
(statearr_51158_52488[(2)] = inst_51152);

(statearr_51158_52488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (20))){
var inst_51122 = (state_51156[(7)]);
var inst_51133 = (state_51156[(2)]);
var inst_51134 = cljs.core.next(inst_51122);
var inst_51108 = inst_51134;
var inst_51109 = null;
var inst_51110 = (0);
var inst_51111 = (0);
var state_51156__$1 = (function (){var statearr_51159 = state_51156;
(statearr_51159[(8)] = inst_51133);

(statearr_51159[(9)] = inst_51108);

(statearr_51159[(10)] = inst_51109);

(statearr_51159[(11)] = inst_51110);

(statearr_51159[(12)] = inst_51111);

return statearr_51159;
})();
var statearr_51160_52489 = state_51156__$1;
(statearr_51160_52489[(2)] = null);

(statearr_51160_52489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (1))){
var state_51156__$1 = state_51156;
var statearr_51161_52490 = state_51156__$1;
(statearr_51161_52490[(2)] = null);

(statearr_51161_52490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (4))){
var inst_51097 = (state_51156[(13)]);
var inst_51097__$1 = (state_51156[(2)]);
var inst_51098 = (inst_51097__$1 == null);
var state_51156__$1 = (function (){var statearr_51162 = state_51156;
(statearr_51162[(13)] = inst_51097__$1);

return statearr_51162;
})();
if(cljs.core.truth_(inst_51098)){
var statearr_51163_52491 = state_51156__$1;
(statearr_51163_52491[(1)] = (5));

} else {
var statearr_51164_52492 = state_51156__$1;
(statearr_51164_52492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (15))){
var state_51156__$1 = state_51156;
var statearr_51168_52493 = state_51156__$1;
(statearr_51168_52493[(2)] = null);

(statearr_51168_52493[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (21))){
var state_51156__$1 = state_51156;
var statearr_51169_52494 = state_51156__$1;
(statearr_51169_52494[(2)] = null);

(statearr_51169_52494[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (13))){
var inst_51108 = (state_51156[(9)]);
var inst_51109 = (state_51156[(10)]);
var inst_51110 = (state_51156[(11)]);
var inst_51111 = (state_51156[(12)]);
var inst_51118 = (state_51156[(2)]);
var inst_51119 = (inst_51111 + (1));
var tmp51165 = inst_51108;
var tmp51166 = inst_51109;
var tmp51167 = inst_51110;
var inst_51108__$1 = tmp51165;
var inst_51109__$1 = tmp51166;
var inst_51110__$1 = tmp51167;
var inst_51111__$1 = inst_51119;
var state_51156__$1 = (function (){var statearr_51171 = state_51156;
(statearr_51171[(9)] = inst_51108__$1);

(statearr_51171[(10)] = inst_51109__$1);

(statearr_51171[(11)] = inst_51110__$1);

(statearr_51171[(14)] = inst_51118);

(statearr_51171[(12)] = inst_51111__$1);

return statearr_51171;
})();
var statearr_51173_52495 = state_51156__$1;
(statearr_51173_52495[(2)] = null);

(statearr_51173_52495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (22))){
var state_51156__$1 = state_51156;
var statearr_51174_52496 = state_51156__$1;
(statearr_51174_52496[(2)] = null);

(statearr_51174_52496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (6))){
var inst_51097 = (state_51156[(13)]);
var inst_51106 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51097) : f.call(null,inst_51097));
var inst_51107 = cljs.core.seq(inst_51106);
var inst_51108 = inst_51107;
var inst_51109 = null;
var inst_51110 = (0);
var inst_51111 = (0);
var state_51156__$1 = (function (){var statearr_51179 = state_51156;
(statearr_51179[(9)] = inst_51108);

(statearr_51179[(10)] = inst_51109);

(statearr_51179[(11)] = inst_51110);

(statearr_51179[(12)] = inst_51111);

return statearr_51179;
})();
var statearr_51180_52497 = state_51156__$1;
(statearr_51180_52497[(2)] = null);

(statearr_51180_52497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (17))){
var inst_51122 = (state_51156[(7)]);
var inst_51126 = cljs.core.chunk_first(inst_51122);
var inst_51127 = cljs.core.chunk_rest(inst_51122);
var inst_51128 = cljs.core.count(inst_51126);
var inst_51108 = inst_51127;
var inst_51109 = inst_51126;
var inst_51110 = inst_51128;
var inst_51111 = (0);
var state_51156__$1 = (function (){var statearr_51183 = state_51156;
(statearr_51183[(9)] = inst_51108);

(statearr_51183[(10)] = inst_51109);

(statearr_51183[(11)] = inst_51110);

(statearr_51183[(12)] = inst_51111);

return statearr_51183;
})();
var statearr_51184_52498 = state_51156__$1;
(statearr_51184_52498[(2)] = null);

(statearr_51184_52498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (3))){
var inst_51154 = (state_51156[(2)]);
var state_51156__$1 = state_51156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51156__$1,inst_51154);
} else {
if((state_val_51157 === (12))){
var inst_51142 = (state_51156[(2)]);
var state_51156__$1 = state_51156;
var statearr_51185_52564 = state_51156__$1;
(statearr_51185_52564[(2)] = inst_51142);

(statearr_51185_52564[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (2))){
var state_51156__$1 = state_51156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51156__$1,(4),in$);
} else {
if((state_val_51157 === (23))){
var inst_51150 = (state_51156[(2)]);
var state_51156__$1 = state_51156;
var statearr_51186_52566 = state_51156__$1;
(statearr_51186_52566[(2)] = inst_51150);

(statearr_51186_52566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (19))){
var inst_51137 = (state_51156[(2)]);
var state_51156__$1 = state_51156;
var statearr_51187_52568 = state_51156__$1;
(statearr_51187_52568[(2)] = inst_51137);

(statearr_51187_52568[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (11))){
var inst_51108 = (state_51156[(9)]);
var inst_51122 = (state_51156[(7)]);
var inst_51122__$1 = cljs.core.seq(inst_51108);
var state_51156__$1 = (function (){var statearr_51188 = state_51156;
(statearr_51188[(7)] = inst_51122__$1);

return statearr_51188;
})();
if(inst_51122__$1){
var statearr_51189_52569 = state_51156__$1;
(statearr_51189_52569[(1)] = (14));

} else {
var statearr_51190_52570 = state_51156__$1;
(statearr_51190_52570[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (9))){
var inst_51144 = (state_51156[(2)]);
var inst_51145 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_51156__$1 = (function (){var statearr_51191 = state_51156;
(statearr_51191[(15)] = inst_51144);

return statearr_51191;
})();
if(cljs.core.truth_(inst_51145)){
var statearr_51192_52575 = state_51156__$1;
(statearr_51192_52575[(1)] = (21));

} else {
var statearr_51193_52576 = state_51156__$1;
(statearr_51193_52576[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (5))){
var inst_51100 = cljs.core.async.close_BANG_(out);
var state_51156__$1 = state_51156;
var statearr_51194_52577 = state_51156__$1;
(statearr_51194_52577[(2)] = inst_51100);

(statearr_51194_52577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (14))){
var inst_51122 = (state_51156[(7)]);
var inst_51124 = cljs.core.chunked_seq_QMARK_(inst_51122);
var state_51156__$1 = state_51156;
if(inst_51124){
var statearr_51195_52579 = state_51156__$1;
(statearr_51195_52579[(1)] = (17));

} else {
var statearr_51196_52580 = state_51156__$1;
(statearr_51196_52580[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (16))){
var inst_51140 = (state_51156[(2)]);
var state_51156__$1 = state_51156;
var statearr_51197_52585 = state_51156__$1;
(statearr_51197_52585[(2)] = inst_51140);

(statearr_51197_52585[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (10))){
var inst_51109 = (state_51156[(10)]);
var inst_51111 = (state_51156[(12)]);
var inst_51116 = cljs.core._nth(inst_51109,inst_51111);
var state_51156__$1 = state_51156;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51156__$1,(13),out,inst_51116);
} else {
if((state_val_51157 === (18))){
var inst_51122 = (state_51156[(7)]);
var inst_51131 = cljs.core.first(inst_51122);
var state_51156__$1 = state_51156;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51156__$1,(20),out,inst_51131);
} else {
if((state_val_51157 === (8))){
var inst_51110 = (state_51156[(11)]);
var inst_51111 = (state_51156[(12)]);
var inst_51113 = (inst_51111 < inst_51110);
var inst_51114 = inst_51113;
var state_51156__$1 = state_51156;
if(cljs.core.truth_(inst_51114)){
var statearr_51198_52588 = state_51156__$1;
(statearr_51198_52588[(1)] = (10));

} else {
var statearr_51199_52589 = state_51156__$1;
(statearr_51199_52589[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__48932__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__48932__auto____0 = (function (){
var statearr_51200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51200[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__48932__auto__);

(statearr_51200[(1)] = (1));

return statearr_51200;
});
var cljs$core$async$mapcat_STAR__$_state_machine__48932__auto____1 = (function (state_51156){
while(true){
var ret_value__48933__auto__ = (function (){try{while(true){
var result__48934__auto__ = switch__48931__auto__(state_51156);
if(cljs.core.keyword_identical_QMARK_(result__48934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48934__auto__;
}
break;
}
}catch (e51201){var ex__48935__auto__ = e51201;
var statearr_51202_52590 = state_51156;
(statearr_51202_52590[(2)] = ex__48935__auto__);


if(cljs.core.seq((state_51156[(4)]))){
var statearr_51203_52591 = state_51156;
(statearr_51203_52591[(1)] = cljs.core.first((state_51156[(4)])));

} else {
throw ex__48935__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52592 = state_51156;
state_51156 = G__52592;
continue;
} else {
return ret_value__48933__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__48932__auto__ = function(state_51156){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__48932__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__48932__auto____1.call(this,state_51156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__48932__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__48932__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__48932__auto__;
})()
})();
var state__49041__auto__ = (function (){var statearr_51204 = f__49040__auto__();
(statearr_51204[(6)] = c__49039__auto__);

return statearr_51204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49041__auto__);
}));

return c__49039__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__51206 = arguments.length;
switch (G__51206) {
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
var G__51208 = arguments.length;
switch (G__51208) {
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
var G__51210 = arguments.length;
switch (G__51210) {
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
var c__49039__auto___52599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49040__auto__ = (function (){var switch__48931__auto__ = (function (state_51237){
var state_val_51238 = (state_51237[(1)]);
if((state_val_51238 === (7))){
var inst_51232 = (state_51237[(2)]);
var state_51237__$1 = state_51237;
var statearr_51272_52600 = state_51237__$1;
(statearr_51272_52600[(2)] = inst_51232);

(statearr_51272_52600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51238 === (1))){
var inst_51214 = null;
var state_51237__$1 = (function (){var statearr_51276 = state_51237;
(statearr_51276[(7)] = inst_51214);

return statearr_51276;
})();
var statearr_51277_52601 = state_51237__$1;
(statearr_51277_52601[(2)] = null);

(statearr_51277_52601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51238 === (4))){
var inst_51217 = (state_51237[(8)]);
var inst_51217__$1 = (state_51237[(2)]);
var inst_51218 = (inst_51217__$1 == null);
var inst_51219 = cljs.core.not(inst_51218);
var state_51237__$1 = (function (){var statearr_51278 = state_51237;
(statearr_51278[(8)] = inst_51217__$1);

return statearr_51278;
})();
if(inst_51219){
var statearr_51279_52602 = state_51237__$1;
(statearr_51279_52602[(1)] = (5));

} else {
var statearr_51280_52603 = state_51237__$1;
(statearr_51280_52603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51238 === (6))){
var state_51237__$1 = state_51237;
var statearr_51287_52604 = state_51237__$1;
(statearr_51287_52604[(2)] = null);

(statearr_51287_52604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51238 === (3))){
var inst_51234 = (state_51237[(2)]);
var inst_51235 = cljs.core.async.close_BANG_(out);
var state_51237__$1 = (function (){var statearr_51288 = state_51237;
(statearr_51288[(9)] = inst_51234);

return statearr_51288;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51237__$1,inst_51235);
} else {
if((state_val_51238 === (2))){
var state_51237__$1 = state_51237;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51237__$1,(4),ch);
} else {
if((state_val_51238 === (11))){
var inst_51217 = (state_51237[(8)]);
var inst_51226 = (state_51237[(2)]);
var inst_51214 = inst_51217;
var state_51237__$1 = (function (){var statearr_51289 = state_51237;
(statearr_51289[(7)] = inst_51214);

(statearr_51289[(10)] = inst_51226);

return statearr_51289;
})();
var statearr_51290_52605 = state_51237__$1;
(statearr_51290_52605[(2)] = null);

(statearr_51290_52605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51238 === (9))){
var inst_51217 = (state_51237[(8)]);
var state_51237__$1 = state_51237;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51237__$1,(11),out,inst_51217);
} else {
if((state_val_51238 === (5))){
var inst_51214 = (state_51237[(7)]);
var inst_51217 = (state_51237[(8)]);
var inst_51221 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51217,inst_51214);
var state_51237__$1 = state_51237;
if(inst_51221){
var statearr_51292_52606 = state_51237__$1;
(statearr_51292_52606[(1)] = (8));

} else {
var statearr_51293_52607 = state_51237__$1;
(statearr_51293_52607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51238 === (10))){
var inst_51229 = (state_51237[(2)]);
var state_51237__$1 = state_51237;
var statearr_51294_52608 = state_51237__$1;
(statearr_51294_52608[(2)] = inst_51229);

(statearr_51294_52608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51238 === (8))){
var inst_51214 = (state_51237[(7)]);
var tmp51291 = inst_51214;
var inst_51214__$1 = tmp51291;
var state_51237__$1 = (function (){var statearr_51295 = state_51237;
(statearr_51295[(7)] = inst_51214__$1);

return statearr_51295;
})();
var statearr_51296_52609 = state_51237__$1;
(statearr_51296_52609[(2)] = null);

(statearr_51296_52609[(1)] = (2));


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
var cljs$core$async$state_machine__48932__auto__ = null;
var cljs$core$async$state_machine__48932__auto____0 = (function (){
var statearr_51297 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51297[(0)] = cljs$core$async$state_machine__48932__auto__);

(statearr_51297[(1)] = (1));

return statearr_51297;
});
var cljs$core$async$state_machine__48932__auto____1 = (function (state_51237){
while(true){
var ret_value__48933__auto__ = (function (){try{while(true){
var result__48934__auto__ = switch__48931__auto__(state_51237);
if(cljs.core.keyword_identical_QMARK_(result__48934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48934__auto__;
}
break;
}
}catch (e51298){var ex__48935__auto__ = e51298;
var statearr_51299_52610 = state_51237;
(statearr_51299_52610[(2)] = ex__48935__auto__);


if(cljs.core.seq((state_51237[(4)]))){
var statearr_51300_52611 = state_51237;
(statearr_51300_52611[(1)] = cljs.core.first((state_51237[(4)])));

} else {
throw ex__48935__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52612 = state_51237;
state_51237 = G__52612;
continue;
} else {
return ret_value__48933__auto__;
}
break;
}
});
cljs$core$async$state_machine__48932__auto__ = function(state_51237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48932__auto____1.call(this,state_51237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48932__auto____0;
cljs$core$async$state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48932__auto____1;
return cljs$core$async$state_machine__48932__auto__;
})()
})();
var state__49041__auto__ = (function (){var statearr_51301 = f__49040__auto__();
(statearr_51301[(6)] = c__49039__auto___52599);

return statearr_51301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49041__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__51305 = arguments.length;
switch (G__51305) {
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
var c__49039__auto___52614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49040__auto__ = (function (){var switch__48931__auto__ = (function (state_51356){
var state_val_51357 = (state_51356[(1)]);
if((state_val_51357 === (7))){
var inst_51352 = (state_51356[(2)]);
var state_51356__$1 = state_51356;
var statearr_51358_52615 = state_51356__$1;
(statearr_51358_52615[(2)] = inst_51352);

(statearr_51358_52615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51357 === (1))){
var inst_51317 = (new Array(n));
var inst_51318 = inst_51317;
var inst_51319 = (0);
var state_51356__$1 = (function (){var statearr_51359 = state_51356;
(statearr_51359[(7)] = inst_51318);

(statearr_51359[(8)] = inst_51319);

return statearr_51359;
})();
var statearr_51360_52616 = state_51356__$1;
(statearr_51360_52616[(2)] = null);

(statearr_51360_52616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51357 === (4))){
var inst_51323 = (state_51356[(9)]);
var inst_51323__$1 = (state_51356[(2)]);
var inst_51325 = (inst_51323__$1 == null);
var inst_51326 = cljs.core.not(inst_51325);
var state_51356__$1 = (function (){var statearr_51361 = state_51356;
(statearr_51361[(9)] = inst_51323__$1);

return statearr_51361;
})();
if(inst_51326){
var statearr_51362_52617 = state_51356__$1;
(statearr_51362_52617[(1)] = (5));

} else {
var statearr_51363_52618 = state_51356__$1;
(statearr_51363_52618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51357 === (15))){
var inst_51346 = (state_51356[(2)]);
var state_51356__$1 = state_51356;
var statearr_51364_52619 = state_51356__$1;
(statearr_51364_52619[(2)] = inst_51346);

(statearr_51364_52619[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51357 === (13))){
var state_51356__$1 = state_51356;
var statearr_51365_52620 = state_51356__$1;
(statearr_51365_52620[(2)] = null);

(statearr_51365_52620[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51357 === (6))){
var inst_51319 = (state_51356[(8)]);
var inst_51342 = (inst_51319 > (0));
var state_51356__$1 = state_51356;
if(cljs.core.truth_(inst_51342)){
var statearr_51366_52621 = state_51356__$1;
(statearr_51366_52621[(1)] = (12));

} else {
var statearr_51367_52622 = state_51356__$1;
(statearr_51367_52622[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51357 === (3))){
var inst_51354 = (state_51356[(2)]);
var state_51356__$1 = state_51356;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51356__$1,inst_51354);
} else {
if((state_val_51357 === (12))){
var inst_51318 = (state_51356[(7)]);
var inst_51344 = cljs.core.vec(inst_51318);
var state_51356__$1 = state_51356;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51356__$1,(15),out,inst_51344);
} else {
if((state_val_51357 === (2))){
var state_51356__$1 = state_51356;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51356__$1,(4),ch);
} else {
if((state_val_51357 === (11))){
var inst_51336 = (state_51356[(2)]);
var inst_51337 = (new Array(n));
var inst_51318 = inst_51337;
var inst_51319 = (0);
var state_51356__$1 = (function (){var statearr_51368 = state_51356;
(statearr_51368[(10)] = inst_51336);

(statearr_51368[(7)] = inst_51318);

(statearr_51368[(8)] = inst_51319);

return statearr_51368;
})();
var statearr_51369_52624 = state_51356__$1;
(statearr_51369_52624[(2)] = null);

(statearr_51369_52624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51357 === (9))){
var inst_51318 = (state_51356[(7)]);
var inst_51334 = cljs.core.vec(inst_51318);
var state_51356__$1 = state_51356;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51356__$1,(11),out,inst_51334);
} else {
if((state_val_51357 === (5))){
var inst_51329 = (state_51356[(11)]);
var inst_51318 = (state_51356[(7)]);
var inst_51323 = (state_51356[(9)]);
var inst_51319 = (state_51356[(8)]);
var inst_51328 = (inst_51318[inst_51319] = inst_51323);
var inst_51329__$1 = (inst_51319 + (1));
var inst_51330 = (inst_51329__$1 < n);
var state_51356__$1 = (function (){var statearr_51372 = state_51356;
(statearr_51372[(11)] = inst_51329__$1);

(statearr_51372[(12)] = inst_51328);

return statearr_51372;
})();
if(cljs.core.truth_(inst_51330)){
var statearr_51373_52625 = state_51356__$1;
(statearr_51373_52625[(1)] = (8));

} else {
var statearr_51374_52626 = state_51356__$1;
(statearr_51374_52626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51357 === (14))){
var inst_51349 = (state_51356[(2)]);
var inst_51350 = cljs.core.async.close_BANG_(out);
var state_51356__$1 = (function (){var statearr_51376 = state_51356;
(statearr_51376[(13)] = inst_51349);

return statearr_51376;
})();
var statearr_51377_52627 = state_51356__$1;
(statearr_51377_52627[(2)] = inst_51350);

(statearr_51377_52627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51357 === (10))){
var inst_51340 = (state_51356[(2)]);
var state_51356__$1 = state_51356;
var statearr_51379_52628 = state_51356__$1;
(statearr_51379_52628[(2)] = inst_51340);

(statearr_51379_52628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51357 === (8))){
var inst_51329 = (state_51356[(11)]);
var inst_51318 = (state_51356[(7)]);
var tmp51375 = inst_51318;
var inst_51318__$1 = tmp51375;
var inst_51319 = inst_51329;
var state_51356__$1 = (function (){var statearr_51380 = state_51356;
(statearr_51380[(7)] = inst_51318__$1);

(statearr_51380[(8)] = inst_51319);

return statearr_51380;
})();
var statearr_51381_52629 = state_51356__$1;
(statearr_51381_52629[(2)] = null);

(statearr_51381_52629[(1)] = (2));


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
var cljs$core$async$state_machine__48932__auto__ = null;
var cljs$core$async$state_machine__48932__auto____0 = (function (){
var statearr_51382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51382[(0)] = cljs$core$async$state_machine__48932__auto__);

(statearr_51382[(1)] = (1));

return statearr_51382;
});
var cljs$core$async$state_machine__48932__auto____1 = (function (state_51356){
while(true){
var ret_value__48933__auto__ = (function (){try{while(true){
var result__48934__auto__ = switch__48931__auto__(state_51356);
if(cljs.core.keyword_identical_QMARK_(result__48934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48934__auto__;
}
break;
}
}catch (e51383){var ex__48935__auto__ = e51383;
var statearr_51384_52630 = state_51356;
(statearr_51384_52630[(2)] = ex__48935__auto__);


if(cljs.core.seq((state_51356[(4)]))){
var statearr_51385_52631 = state_51356;
(statearr_51385_52631[(1)] = cljs.core.first((state_51356[(4)])));

} else {
throw ex__48935__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52632 = state_51356;
state_51356 = G__52632;
continue;
} else {
return ret_value__48933__auto__;
}
break;
}
});
cljs$core$async$state_machine__48932__auto__ = function(state_51356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48932__auto____1.call(this,state_51356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48932__auto____0;
cljs$core$async$state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48932__auto____1;
return cljs$core$async$state_machine__48932__auto__;
})()
})();
var state__49041__auto__ = (function (){var statearr_51386 = f__49040__auto__();
(statearr_51386[(6)] = c__49039__auto___52614);

return statearr_51386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49041__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__51398 = arguments.length;
switch (G__51398) {
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
var c__49039__auto___52634 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49040__auto__ = (function (){var switch__48931__auto__ = (function (state_51443){
var state_val_51444 = (state_51443[(1)]);
if((state_val_51444 === (7))){
var inst_51439 = (state_51443[(2)]);
var state_51443__$1 = state_51443;
var statearr_51445_52635 = state_51443__$1;
(statearr_51445_52635[(2)] = inst_51439);

(statearr_51445_52635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (1))){
var inst_51399 = [];
var inst_51400 = inst_51399;
var inst_51401 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_51443__$1 = (function (){var statearr_51448 = state_51443;
(statearr_51448[(7)] = inst_51400);

(statearr_51448[(8)] = inst_51401);

return statearr_51448;
})();
var statearr_51449_52636 = state_51443__$1;
(statearr_51449_52636[(2)] = null);

(statearr_51449_52636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (4))){
var inst_51404 = (state_51443[(9)]);
var inst_51404__$1 = (state_51443[(2)]);
var inst_51405 = (inst_51404__$1 == null);
var inst_51406 = cljs.core.not(inst_51405);
var state_51443__$1 = (function (){var statearr_51459 = state_51443;
(statearr_51459[(9)] = inst_51404__$1);

return statearr_51459;
})();
if(inst_51406){
var statearr_51460_52637 = state_51443__$1;
(statearr_51460_52637[(1)] = (5));

} else {
var statearr_51461_52638 = state_51443__$1;
(statearr_51461_52638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (15))){
var inst_51400 = (state_51443[(7)]);
var inst_51431 = cljs.core.vec(inst_51400);
var state_51443__$1 = state_51443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51443__$1,(18),out,inst_51431);
} else {
if((state_val_51444 === (13))){
var inst_51426 = (state_51443[(2)]);
var state_51443__$1 = state_51443;
var statearr_51472_52643 = state_51443__$1;
(statearr_51472_52643[(2)] = inst_51426);

(statearr_51472_52643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (6))){
var inst_51400 = (state_51443[(7)]);
var inst_51428 = inst_51400.length;
var inst_51429 = (inst_51428 > (0));
var state_51443__$1 = state_51443;
if(cljs.core.truth_(inst_51429)){
var statearr_51477_52644 = state_51443__$1;
(statearr_51477_52644[(1)] = (15));

} else {
var statearr_51478_52645 = state_51443__$1;
(statearr_51478_52645[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (17))){
var inst_51436 = (state_51443[(2)]);
var inst_51437 = cljs.core.async.close_BANG_(out);
var state_51443__$1 = (function (){var statearr_51486 = state_51443;
(statearr_51486[(10)] = inst_51436);

return statearr_51486;
})();
var statearr_51487_52646 = state_51443__$1;
(statearr_51487_52646[(2)] = inst_51437);

(statearr_51487_52646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (3))){
var inst_51441 = (state_51443[(2)]);
var state_51443__$1 = state_51443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51443__$1,inst_51441);
} else {
if((state_val_51444 === (12))){
var inst_51400 = (state_51443[(7)]);
var inst_51419 = cljs.core.vec(inst_51400);
var state_51443__$1 = state_51443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51443__$1,(14),out,inst_51419);
} else {
if((state_val_51444 === (2))){
var state_51443__$1 = state_51443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51443__$1,(4),ch);
} else {
if((state_val_51444 === (11))){
var inst_51400 = (state_51443[(7)]);
var inst_51404 = (state_51443[(9)]);
var inst_51408 = (state_51443[(11)]);
var inst_51416 = inst_51400.push(inst_51404);
var tmp51489 = inst_51400;
var inst_51400__$1 = tmp51489;
var inst_51401 = inst_51408;
var state_51443__$1 = (function (){var statearr_51490 = state_51443;
(statearr_51490[(7)] = inst_51400__$1);

(statearr_51490[(12)] = inst_51416);

(statearr_51490[(8)] = inst_51401);

return statearr_51490;
})();
var statearr_51491_52649 = state_51443__$1;
(statearr_51491_52649[(2)] = null);

(statearr_51491_52649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (9))){
var inst_51401 = (state_51443[(8)]);
var inst_51412 = cljs.core.keyword_identical_QMARK_(inst_51401,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_51443__$1 = state_51443;
var statearr_51492_52650 = state_51443__$1;
(statearr_51492_52650[(2)] = inst_51412);

(statearr_51492_52650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (5))){
var inst_51409 = (state_51443[(13)]);
var inst_51404 = (state_51443[(9)]);
var inst_51401 = (state_51443[(8)]);
var inst_51408 = (state_51443[(11)]);
var inst_51408__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51404) : f.call(null,inst_51404));
var inst_51409__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51408__$1,inst_51401);
var state_51443__$1 = (function (){var statearr_51493 = state_51443;
(statearr_51493[(13)] = inst_51409__$1);

(statearr_51493[(11)] = inst_51408__$1);

return statearr_51493;
})();
if(inst_51409__$1){
var statearr_51494_52656 = state_51443__$1;
(statearr_51494_52656[(1)] = (8));

} else {
var statearr_51495_52657 = state_51443__$1;
(statearr_51495_52657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (14))){
var inst_51404 = (state_51443[(9)]);
var inst_51408 = (state_51443[(11)]);
var inst_51421 = (state_51443[(2)]);
var inst_51422 = [];
var inst_51423 = inst_51422.push(inst_51404);
var inst_51400 = inst_51422;
var inst_51401 = inst_51408;
var state_51443__$1 = (function (){var statearr_51496 = state_51443;
(statearr_51496[(7)] = inst_51400);

(statearr_51496[(14)] = inst_51421);

(statearr_51496[(15)] = inst_51423);

(statearr_51496[(8)] = inst_51401);

return statearr_51496;
})();
var statearr_51497_52658 = state_51443__$1;
(statearr_51497_52658[(2)] = null);

(statearr_51497_52658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (16))){
var state_51443__$1 = state_51443;
var statearr_51498_52660 = state_51443__$1;
(statearr_51498_52660[(2)] = null);

(statearr_51498_52660[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (10))){
var inst_51414 = (state_51443[(2)]);
var state_51443__$1 = state_51443;
if(cljs.core.truth_(inst_51414)){
var statearr_51499_52661 = state_51443__$1;
(statearr_51499_52661[(1)] = (11));

} else {
var statearr_51500_52662 = state_51443__$1;
(statearr_51500_52662[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (18))){
var inst_51433 = (state_51443[(2)]);
var state_51443__$1 = state_51443;
var statearr_51503_52663 = state_51443__$1;
(statearr_51503_52663[(2)] = inst_51433);

(statearr_51503_52663[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (8))){
var inst_51409 = (state_51443[(13)]);
var state_51443__$1 = state_51443;
var statearr_51509_52664 = state_51443__$1;
(statearr_51509_52664[(2)] = inst_51409);

(statearr_51509_52664[(1)] = (10));


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
var cljs$core$async$state_machine__48932__auto__ = null;
var cljs$core$async$state_machine__48932__auto____0 = (function (){
var statearr_51511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51511[(0)] = cljs$core$async$state_machine__48932__auto__);

(statearr_51511[(1)] = (1));

return statearr_51511;
});
var cljs$core$async$state_machine__48932__auto____1 = (function (state_51443){
while(true){
var ret_value__48933__auto__ = (function (){try{while(true){
var result__48934__auto__ = switch__48931__auto__(state_51443);
if(cljs.core.keyword_identical_QMARK_(result__48934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48934__auto__;
}
break;
}
}catch (e51515){var ex__48935__auto__ = e51515;
var statearr_51517_52665 = state_51443;
(statearr_51517_52665[(2)] = ex__48935__auto__);


if(cljs.core.seq((state_51443[(4)]))){
var statearr_51518_52666 = state_51443;
(statearr_51518_52666[(1)] = cljs.core.first((state_51443[(4)])));

} else {
throw ex__48935__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52667 = state_51443;
state_51443 = G__52667;
continue;
} else {
return ret_value__48933__auto__;
}
break;
}
});
cljs$core$async$state_machine__48932__auto__ = function(state_51443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48932__auto____1.call(this,state_51443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48932__auto____0;
cljs$core$async$state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48932__auto____1;
return cljs$core$async$state_machine__48932__auto__;
})()
})();
var state__49041__auto__ = (function (){var statearr_51519 = f__49040__auto__();
(statearr_51519[(6)] = c__49039__auto___52634);

return statearr_51519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49041__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
