// Compiled by ClojureScript 1.8.40 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args33808 = [];
var len__30408__auto___33814 = arguments.length;
var i__30409__auto___33815 = (0);
while(true){
if((i__30409__auto___33815 < len__30408__auto___33814)){
args33808.push((arguments[i__30409__auto___33815]));

var G__33816 = (i__30409__auto___33815 + (1));
i__30409__auto___33815 = G__33816;
continue;
} else {
}
break;
}

var G__33810 = args33808.length;
switch (G__33810) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33808.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async33811 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33811 = (function (f,blockable,meta33812){
this.f = f;
this.blockable = blockable;
this.meta33812 = meta33812;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33813,meta33812__$1){
var self__ = this;
var _33813__$1 = this;
return (new cljs.core.async.t_cljs$core$async33811(self__.f,self__.blockable,meta33812__$1));
});

cljs.core.async.t_cljs$core$async33811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33813){
var self__ = this;
var _33813__$1 = this;
return self__.meta33812;
});

cljs.core.async.t_cljs$core$async33811.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33811.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33811.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33811.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33811.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33812","meta33812",-445225579,null)], null);
});

cljs.core.async.t_cljs$core$async33811.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33811.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33811";

cljs.core.async.t_cljs$core$async33811.cljs$lang$ctorPrWriter = (function (this__29945__auto__,writer__29946__auto__,opt__29947__auto__){
return cljs.core._write.call(null,writer__29946__auto__,"cljs.core.async/t_cljs$core$async33811");
});

cljs.core.async.__GT_t_cljs$core$async33811 = (function cljs$core$async$__GT_t_cljs$core$async33811(f__$1,blockable__$1,meta33812){
return (new cljs.core.async.t_cljs$core$async33811(f__$1,blockable__$1,meta33812));
});

}

return (new cljs.core.async.t_cljs$core$async33811(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args33820 = [];
var len__30408__auto___33823 = arguments.length;
var i__30409__auto___33824 = (0);
while(true){
if((i__30409__auto___33824 < len__30408__auto___33823)){
args33820.push((arguments[i__30409__auto___33824]));

var G__33825 = (i__30409__auto___33824 + (1));
i__30409__auto___33824 = G__33825;
continue;
} else {
}
break;
}

var G__33822 = args33820.length;
switch (G__33822) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33820.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var args33827 = [];
var len__30408__auto___33830 = arguments.length;
var i__30409__auto___33831 = (0);
while(true){
if((i__30409__auto___33831 < len__30408__auto___33830)){
args33827.push((arguments[i__30409__auto___33831]));

var G__33832 = (i__30409__auto___33831 + (1));
i__30409__auto___33831 = G__33832;
continue;
} else {
}
break;
}

var G__33829 = args33827.length;
switch (G__33829) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33827.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args33834 = [];
var len__30408__auto___33837 = arguments.length;
var i__30409__auto___33838 = (0);
while(true){
if((i__30409__auto___33838 < len__30408__auto___33837)){
args33834.push((arguments[i__30409__auto___33838]));

var G__33839 = (i__30409__auto___33838 + (1));
i__30409__auto___33838 = G__33839;
continue;
} else {
}
break;
}

var G__33836 = args33834.length;
switch (G__33836) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33834.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33841 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33841);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33841,ret){
return (function (){
return fn1.call(null,val_33841);
});})(val_33841,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args33842 = [];
var len__30408__auto___33845 = arguments.length;
var i__30409__auto___33846 = (0);
while(true){
if((i__30409__auto___33846 < len__30408__auto___33845)){
args33842.push((arguments[i__30409__auto___33846]));

var G__33847 = (i__30409__auto___33846 + (1));
i__30409__auto___33846 = G__33847;
continue;
} else {
}
break;
}

var G__33844 = args33842.length;
switch (G__33844) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33842.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__30253__auto___33849 = n;
var x_33850 = (0);
while(true){
if((x_33850 < n__30253__auto___33849)){
(a[x_33850] = (0));

var G__33851 = (x_33850 + (1));
x_33850 = G__33851;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__33852 = (i + (1));
i = G__33852;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33856 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33856 = (function (alt_flag,flag,meta33857){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta33857 = meta33857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33858,meta33857__$1){
var self__ = this;
var _33858__$1 = this;
return (new cljs.core.async.t_cljs$core$async33856(self__.alt_flag,self__.flag,meta33857__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33856.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33858){
var self__ = this;
var _33858__$1 = this;
return self__.meta33857;
});})(flag))
;

cljs.core.async.t_cljs$core$async33856.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33856.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33856.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33856.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33856.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33857","meta33857",-1917501651,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33856.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33856.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33856";

cljs.core.async.t_cljs$core$async33856.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__29945__auto__,writer__29946__auto__,opt__29947__auto__){
return cljs.core._write.call(null,writer__29946__auto__,"cljs.core.async/t_cljs$core$async33856");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33856 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33856(alt_flag__$1,flag__$1,meta33857){
return (new cljs.core.async.t_cljs$core$async33856(alt_flag__$1,flag__$1,meta33857));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33856(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33862 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33862 = (function (alt_handler,flag,cb,meta33863){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta33863 = meta33863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33864,meta33863__$1){
var self__ = this;
var _33864__$1 = this;
return (new cljs.core.async.t_cljs$core$async33862(self__.alt_handler,self__.flag,self__.cb,meta33863__$1));
});

cljs.core.async.t_cljs$core$async33862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33864){
var self__ = this;
var _33864__$1 = this;
return self__.meta33863;
});

cljs.core.async.t_cljs$core$async33862.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33862.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33862.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33862.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33862.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33863","meta33863",-1777242211,null)], null);
});

cljs.core.async.t_cljs$core$async33862.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33862";

cljs.core.async.t_cljs$core$async33862.cljs$lang$ctorPrWriter = (function (this__29945__auto__,writer__29946__auto__,opt__29947__auto__){
return cljs.core._write.call(null,writer__29946__auto__,"cljs.core.async/t_cljs$core$async33862");
});

cljs.core.async.__GT_t_cljs$core$async33862 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33862(alt_handler__$1,flag__$1,cb__$1,meta33863){
return (new cljs.core.async.t_cljs$core$async33862(alt_handler__$1,flag__$1,cb__$1,meta33863));
});

}

return (new cljs.core.async.t_cljs$core$async33862(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33865_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33865_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33866_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33866_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__29339__auto__ = wport;
if(cljs.core.truth_(or__29339__auto__)){
return or__29339__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33867 = (i + (1));
i = G__33867;
continue;
}
} else {
return null;
}
break;
}
})();
var or__29339__auto__ = ret;
if(cljs.core.truth_(or__29339__auto__)){
return or__29339__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__29327__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__29327__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__29327__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__30415__auto__ = [];
var len__30408__auto___33873 = arguments.length;
var i__30409__auto___33874 = (0);
while(true){
if((i__30409__auto___33874 < len__30408__auto___33873)){
args__30415__auto__.push((arguments[i__30409__auto___33874]));

var G__33875 = (i__30409__auto___33874 + (1));
i__30409__auto___33874 = G__33875;
continue;
} else {
}
break;
}

var argseq__30416__auto__ = ((((1) < args__30415__auto__.length))?(new cljs.core.IndexedSeq(args__30415__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30416__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33870){
var map__33871 = p__33870;
var map__33871__$1 = ((((!((map__33871 == null)))?((((map__33871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33871):map__33871);
var opts = map__33871__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33868){
var G__33869 = cljs.core.first.call(null,seq33868);
var seq33868__$1 = cljs.core.next.call(null,seq33868);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33869,seq33868__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args33876 = [];
var len__30408__auto___33926 = arguments.length;
var i__30409__auto___33927 = (0);
while(true){
if((i__30409__auto___33927 < len__30408__auto___33926)){
args33876.push((arguments[i__30409__auto___33927]));

var G__33928 = (i__30409__auto___33927 + (1));
i__30409__auto___33927 = G__33928;
continue;
} else {
}
break;
}

var G__33878 = args33876.length;
switch (G__33878) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33876.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33763__auto___33930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33763__auto___33930){
return (function (){
var f__33764__auto__ = (function (){var switch__33651__auto__ = ((function (c__33763__auto___33930){
return (function (state_33902){
var state_val_33903 = (state_33902[(1)]);
if((state_val_33903 === (7))){
var inst_33898 = (state_33902[(2)]);
var state_33902__$1 = state_33902;
var statearr_33904_33931 = state_33902__$1;
(statearr_33904_33931[(2)] = inst_33898);

(statearr_33904_33931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (1))){
var state_33902__$1 = state_33902;
var statearr_33905_33932 = state_33902__$1;
(statearr_33905_33932[(2)] = null);

(statearr_33905_33932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (4))){
var inst_33881 = (state_33902[(7)]);
var inst_33881__$1 = (state_33902[(2)]);
var inst_33882 = (inst_33881__$1 == null);
var state_33902__$1 = (function (){var statearr_33906 = state_33902;
(statearr_33906[(7)] = inst_33881__$1);

return statearr_33906;
})();
if(cljs.core.truth_(inst_33882)){
var statearr_33907_33933 = state_33902__$1;
(statearr_33907_33933[(1)] = (5));

} else {
var statearr_33908_33934 = state_33902__$1;
(statearr_33908_33934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (13))){
var state_33902__$1 = state_33902;
var statearr_33909_33935 = state_33902__$1;
(statearr_33909_33935[(2)] = null);

(statearr_33909_33935[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (6))){
var inst_33881 = (state_33902[(7)]);
var state_33902__$1 = state_33902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33902__$1,(11),to,inst_33881);
} else {
if((state_val_33903 === (3))){
var inst_33900 = (state_33902[(2)]);
var state_33902__$1 = state_33902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33902__$1,inst_33900);
} else {
if((state_val_33903 === (12))){
var state_33902__$1 = state_33902;
var statearr_33910_33936 = state_33902__$1;
(statearr_33910_33936[(2)] = null);

(statearr_33910_33936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (2))){
var state_33902__$1 = state_33902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33902__$1,(4),from);
} else {
if((state_val_33903 === (11))){
var inst_33891 = (state_33902[(2)]);
var state_33902__$1 = state_33902;
if(cljs.core.truth_(inst_33891)){
var statearr_33911_33937 = state_33902__$1;
(statearr_33911_33937[(1)] = (12));

} else {
var statearr_33912_33938 = state_33902__$1;
(statearr_33912_33938[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (9))){
var state_33902__$1 = state_33902;
var statearr_33913_33939 = state_33902__$1;
(statearr_33913_33939[(2)] = null);

(statearr_33913_33939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (5))){
var state_33902__$1 = state_33902;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33914_33940 = state_33902__$1;
(statearr_33914_33940[(1)] = (8));

} else {
var statearr_33915_33941 = state_33902__$1;
(statearr_33915_33941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (14))){
var inst_33896 = (state_33902[(2)]);
var state_33902__$1 = state_33902;
var statearr_33916_33942 = state_33902__$1;
(statearr_33916_33942[(2)] = inst_33896);

(statearr_33916_33942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (10))){
var inst_33888 = (state_33902[(2)]);
var state_33902__$1 = state_33902;
var statearr_33917_33943 = state_33902__$1;
(statearr_33917_33943[(2)] = inst_33888);

(statearr_33917_33943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (8))){
var inst_33885 = cljs.core.async.close_BANG_.call(null,to);
var state_33902__$1 = state_33902;
var statearr_33918_33944 = state_33902__$1;
(statearr_33918_33944[(2)] = inst_33885);

(statearr_33918_33944[(1)] = (10));


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
});})(c__33763__auto___33930))
;
return ((function (switch__33651__auto__,c__33763__auto___33930){
return (function() {
var cljs$core$async$state_machine__33652__auto__ = null;
var cljs$core$async$state_machine__33652__auto____0 = (function (){
var statearr_33922 = [null,null,null,null,null,null,null,null];
(statearr_33922[(0)] = cljs$core$async$state_machine__33652__auto__);

(statearr_33922[(1)] = (1));

return statearr_33922;
});
var cljs$core$async$state_machine__33652__auto____1 = (function (state_33902){
while(true){
var ret_value__33653__auto__ = (function (){try{while(true){
var result__33654__auto__ = switch__33651__auto__.call(null,state_33902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33654__auto__;
}
break;
}
}catch (e33923){if((e33923 instanceof Object)){
var ex__33655__auto__ = e33923;
var statearr_33924_33945 = state_33902;
(statearr_33924_33945[(5)] = ex__33655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33946 = state_33902;
state_33902 = G__33946;
continue;
} else {
return ret_value__33653__auto__;
}
break;
}
});
cljs$core$async$state_machine__33652__auto__ = function(state_33902){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33652__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33652__auto____1.call(this,state_33902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33652__auto____0;
cljs$core$async$state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33652__auto____1;
return cljs$core$async$state_machine__33652__auto__;
})()
;})(switch__33651__auto__,c__33763__auto___33930))
})();
var state__33765__auto__ = (function (){var statearr_33925 = f__33764__auto__.call(null);
(statearr_33925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33763__auto___33930);

return statearr_33925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33765__auto__);
});})(c__33763__auto___33930))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__34130){
var vec__34131 = p__34130;
var v = cljs.core.nth.call(null,vec__34131,(0),null);
var p = cljs.core.nth.call(null,vec__34131,(1),null);
var job = vec__34131;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33763__auto___34313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33763__auto___34313,res,vec__34131,v,p,job,jobs,results){
return (function (){
var f__33764__auto__ = (function (){var switch__33651__auto__ = ((function (c__33763__auto___34313,res,vec__34131,v,p,job,jobs,results){
return (function (state_34136){
var state_val_34137 = (state_34136[(1)]);
if((state_val_34137 === (1))){
var state_34136__$1 = state_34136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34136__$1,(2),res,v);
} else {
if((state_val_34137 === (2))){
var inst_34133 = (state_34136[(2)]);
var inst_34134 = cljs.core.async.close_BANG_.call(null,res);
var state_34136__$1 = (function (){var statearr_34138 = state_34136;
(statearr_34138[(7)] = inst_34133);

return statearr_34138;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34136__$1,inst_34134);
} else {
return null;
}
}
});})(c__33763__auto___34313,res,vec__34131,v,p,job,jobs,results))
;
return ((function (switch__33651__auto__,c__33763__auto___34313,res,vec__34131,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____0 = (function (){
var statearr_34142 = [null,null,null,null,null,null,null,null];
(statearr_34142[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__);

(statearr_34142[(1)] = (1));

return statearr_34142;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____1 = (function (state_34136){
while(true){
var ret_value__33653__auto__ = (function (){try{while(true){
var result__33654__auto__ = switch__33651__auto__.call(null,state_34136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33654__auto__;
}
break;
}
}catch (e34143){if((e34143 instanceof Object)){
var ex__33655__auto__ = e34143;
var statearr_34144_34314 = state_34136;
(statearr_34144_34314[(5)] = ex__33655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34315 = state_34136;
state_34136 = G__34315;
continue;
} else {
return ret_value__33653__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__ = function(state_34136){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____1.call(this,state_34136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__;
})()
;})(switch__33651__auto__,c__33763__auto___34313,res,vec__34131,v,p,job,jobs,results))
})();
var state__33765__auto__ = (function (){var statearr_34145 = f__33764__auto__.call(null);
(statearr_34145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33763__auto___34313);

return statearr_34145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33765__auto__);
});})(c__33763__auto___34313,res,vec__34131,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34146){
var vec__34147 = p__34146;
var v = cljs.core.nth.call(null,vec__34147,(0),null);
var p = cljs.core.nth.call(null,vec__34147,(1),null);
var job = vec__34147;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__30253__auto___34316 = n;
var __34317 = (0);
while(true){
if((__34317 < n__30253__auto___34316)){
var G__34148_34318 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__34148_34318) {
case "compute":
var c__33763__auto___34320 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34317,c__33763__auto___34320,G__34148_34318,n__30253__auto___34316,jobs,results,process,async){
return (function (){
var f__33764__auto__ = (function (){var switch__33651__auto__ = ((function (__34317,c__33763__auto___34320,G__34148_34318,n__30253__auto___34316,jobs,results,process,async){
return (function (state_34161){
var state_val_34162 = (state_34161[(1)]);
if((state_val_34162 === (1))){
var state_34161__$1 = state_34161;
var statearr_34163_34321 = state_34161__$1;
(statearr_34163_34321[(2)] = null);

(statearr_34163_34321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34162 === (2))){
var state_34161__$1 = state_34161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34161__$1,(4),jobs);
} else {
if((state_val_34162 === (3))){
var inst_34159 = (state_34161[(2)]);
var state_34161__$1 = state_34161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34161__$1,inst_34159);
} else {
if((state_val_34162 === (4))){
var inst_34151 = (state_34161[(2)]);
var inst_34152 = process.call(null,inst_34151);
var state_34161__$1 = state_34161;
if(cljs.core.truth_(inst_34152)){
var statearr_34164_34322 = state_34161__$1;
(statearr_34164_34322[(1)] = (5));

} else {
var statearr_34165_34323 = state_34161__$1;
(statearr_34165_34323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34162 === (5))){
var state_34161__$1 = state_34161;
var statearr_34166_34324 = state_34161__$1;
(statearr_34166_34324[(2)] = null);

(statearr_34166_34324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34162 === (6))){
var state_34161__$1 = state_34161;
var statearr_34167_34325 = state_34161__$1;
(statearr_34167_34325[(2)] = null);

(statearr_34167_34325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34162 === (7))){
var inst_34157 = (state_34161[(2)]);
var state_34161__$1 = state_34161;
var statearr_34168_34326 = state_34161__$1;
(statearr_34168_34326[(2)] = inst_34157);

(statearr_34168_34326[(1)] = (3));


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
});})(__34317,c__33763__auto___34320,G__34148_34318,n__30253__auto___34316,jobs,results,process,async))
;
return ((function (__34317,switch__33651__auto__,c__33763__auto___34320,G__34148_34318,n__30253__auto___34316,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____0 = (function (){
var statearr_34172 = [null,null,null,null,null,null,null];
(statearr_34172[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__);

(statearr_34172[(1)] = (1));

return statearr_34172;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____1 = (function (state_34161){
while(true){
var ret_value__33653__auto__ = (function (){try{while(true){
var result__33654__auto__ = switch__33651__auto__.call(null,state_34161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33654__auto__;
}
break;
}
}catch (e34173){if((e34173 instanceof Object)){
var ex__33655__auto__ = e34173;
var statearr_34174_34327 = state_34161;
(statearr_34174_34327[(5)] = ex__33655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34328 = state_34161;
state_34161 = G__34328;
continue;
} else {
return ret_value__33653__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__ = function(state_34161){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____1.call(this,state_34161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__;
})()
;})(__34317,switch__33651__auto__,c__33763__auto___34320,G__34148_34318,n__30253__auto___34316,jobs,results,process,async))
})();
var state__33765__auto__ = (function (){var statearr_34175 = f__33764__auto__.call(null);
(statearr_34175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33763__auto___34320);

return statearr_34175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33765__auto__);
});})(__34317,c__33763__auto___34320,G__34148_34318,n__30253__auto___34316,jobs,results,process,async))
);


break;
case "async":
var c__33763__auto___34329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34317,c__33763__auto___34329,G__34148_34318,n__30253__auto___34316,jobs,results,process,async){
return (function (){
var f__33764__auto__ = (function (){var switch__33651__auto__ = ((function (__34317,c__33763__auto___34329,G__34148_34318,n__30253__auto___34316,jobs,results,process,async){
return (function (state_34188){
var state_val_34189 = (state_34188[(1)]);
if((state_val_34189 === (1))){
var state_34188__$1 = state_34188;
var statearr_34190_34330 = state_34188__$1;
(statearr_34190_34330[(2)] = null);

(statearr_34190_34330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34189 === (2))){
var state_34188__$1 = state_34188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34188__$1,(4),jobs);
} else {
if((state_val_34189 === (3))){
var inst_34186 = (state_34188[(2)]);
var state_34188__$1 = state_34188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34188__$1,inst_34186);
} else {
if((state_val_34189 === (4))){
var inst_34178 = (state_34188[(2)]);
var inst_34179 = async.call(null,inst_34178);
var state_34188__$1 = state_34188;
if(cljs.core.truth_(inst_34179)){
var statearr_34191_34331 = state_34188__$1;
(statearr_34191_34331[(1)] = (5));

} else {
var statearr_34192_34332 = state_34188__$1;
(statearr_34192_34332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34189 === (5))){
var state_34188__$1 = state_34188;
var statearr_34193_34333 = state_34188__$1;
(statearr_34193_34333[(2)] = null);

(statearr_34193_34333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34189 === (6))){
var state_34188__$1 = state_34188;
var statearr_34194_34334 = state_34188__$1;
(statearr_34194_34334[(2)] = null);

(statearr_34194_34334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34189 === (7))){
var inst_34184 = (state_34188[(2)]);
var state_34188__$1 = state_34188;
var statearr_34195_34335 = state_34188__$1;
(statearr_34195_34335[(2)] = inst_34184);

(statearr_34195_34335[(1)] = (3));


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
});})(__34317,c__33763__auto___34329,G__34148_34318,n__30253__auto___34316,jobs,results,process,async))
;
return ((function (__34317,switch__33651__auto__,c__33763__auto___34329,G__34148_34318,n__30253__auto___34316,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____0 = (function (){
var statearr_34199 = [null,null,null,null,null,null,null];
(statearr_34199[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__);

(statearr_34199[(1)] = (1));

return statearr_34199;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____1 = (function (state_34188){
while(true){
var ret_value__33653__auto__ = (function (){try{while(true){
var result__33654__auto__ = switch__33651__auto__.call(null,state_34188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33654__auto__;
}
break;
}
}catch (e34200){if((e34200 instanceof Object)){
var ex__33655__auto__ = e34200;
var statearr_34201_34336 = state_34188;
(statearr_34201_34336[(5)] = ex__33655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34337 = state_34188;
state_34188 = G__34337;
continue;
} else {
return ret_value__33653__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__ = function(state_34188){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____1.call(this,state_34188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__;
})()
;})(__34317,switch__33651__auto__,c__33763__auto___34329,G__34148_34318,n__30253__auto___34316,jobs,results,process,async))
})();
var state__33765__auto__ = (function (){var statearr_34202 = f__33764__auto__.call(null);
(statearr_34202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33763__auto___34329);

return statearr_34202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33765__auto__);
});})(__34317,c__33763__auto___34329,G__34148_34318,n__30253__auto___34316,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__34338 = (__34317 + (1));
__34317 = G__34338;
continue;
} else {
}
break;
}

var c__33763__auto___34339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33763__auto___34339,jobs,results,process,async){
return (function (){
var f__33764__auto__ = (function (){var switch__33651__auto__ = ((function (c__33763__auto___34339,jobs,results,process,async){
return (function (state_34224){
var state_val_34225 = (state_34224[(1)]);
if((state_val_34225 === (1))){
var state_34224__$1 = state_34224;
var statearr_34226_34340 = state_34224__$1;
(statearr_34226_34340[(2)] = null);

(statearr_34226_34340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34225 === (2))){
var state_34224__$1 = state_34224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34224__$1,(4),from);
} else {
if((state_val_34225 === (3))){
var inst_34222 = (state_34224[(2)]);
var state_34224__$1 = state_34224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34224__$1,inst_34222);
} else {
if((state_val_34225 === (4))){
var inst_34205 = (state_34224[(7)]);
var inst_34205__$1 = (state_34224[(2)]);
var inst_34206 = (inst_34205__$1 == null);
var state_34224__$1 = (function (){var statearr_34227 = state_34224;
(statearr_34227[(7)] = inst_34205__$1);

return statearr_34227;
})();
if(cljs.core.truth_(inst_34206)){
var statearr_34228_34341 = state_34224__$1;
(statearr_34228_34341[(1)] = (5));

} else {
var statearr_34229_34342 = state_34224__$1;
(statearr_34229_34342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34225 === (5))){
var inst_34208 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34224__$1 = state_34224;
var statearr_34230_34343 = state_34224__$1;
(statearr_34230_34343[(2)] = inst_34208);

(statearr_34230_34343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34225 === (6))){
var inst_34210 = (state_34224[(8)]);
var inst_34205 = (state_34224[(7)]);
var inst_34210__$1 = cljs.core.async.chan.call(null,(1));
var inst_34211 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34212 = [inst_34205,inst_34210__$1];
var inst_34213 = (new cljs.core.PersistentVector(null,2,(5),inst_34211,inst_34212,null));
var state_34224__$1 = (function (){var statearr_34231 = state_34224;
(statearr_34231[(8)] = inst_34210__$1);

return statearr_34231;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34224__$1,(8),jobs,inst_34213);
} else {
if((state_val_34225 === (7))){
var inst_34220 = (state_34224[(2)]);
var state_34224__$1 = state_34224;
var statearr_34232_34344 = state_34224__$1;
(statearr_34232_34344[(2)] = inst_34220);

(statearr_34232_34344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34225 === (8))){
var inst_34210 = (state_34224[(8)]);
var inst_34215 = (state_34224[(2)]);
var state_34224__$1 = (function (){var statearr_34233 = state_34224;
(statearr_34233[(9)] = inst_34215);

return statearr_34233;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34224__$1,(9),results,inst_34210);
} else {
if((state_val_34225 === (9))){
var inst_34217 = (state_34224[(2)]);
var state_34224__$1 = (function (){var statearr_34234 = state_34224;
(statearr_34234[(10)] = inst_34217);

return statearr_34234;
})();
var statearr_34235_34345 = state_34224__$1;
(statearr_34235_34345[(2)] = null);

(statearr_34235_34345[(1)] = (2));


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
});})(c__33763__auto___34339,jobs,results,process,async))
;
return ((function (switch__33651__auto__,c__33763__auto___34339,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____0 = (function (){
var statearr_34239 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34239[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__);

(statearr_34239[(1)] = (1));

return statearr_34239;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____1 = (function (state_34224){
while(true){
var ret_value__33653__auto__ = (function (){try{while(true){
var result__33654__auto__ = switch__33651__auto__.call(null,state_34224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33654__auto__;
}
break;
}
}catch (e34240){if((e34240 instanceof Object)){
var ex__33655__auto__ = e34240;
var statearr_34241_34346 = state_34224;
(statearr_34241_34346[(5)] = ex__33655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34347 = state_34224;
state_34224 = G__34347;
continue;
} else {
return ret_value__33653__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__ = function(state_34224){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____1.call(this,state_34224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__;
})()
;})(switch__33651__auto__,c__33763__auto___34339,jobs,results,process,async))
})();
var state__33765__auto__ = (function (){var statearr_34242 = f__33764__auto__.call(null);
(statearr_34242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33763__auto___34339);

return statearr_34242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33765__auto__);
});})(c__33763__auto___34339,jobs,results,process,async))
);


var c__33763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33763__auto__,jobs,results,process,async){
return (function (){
var f__33764__auto__ = (function (){var switch__33651__auto__ = ((function (c__33763__auto__,jobs,results,process,async){
return (function (state_34280){
var state_val_34281 = (state_34280[(1)]);
if((state_val_34281 === (7))){
var inst_34276 = (state_34280[(2)]);
var state_34280__$1 = state_34280;
var statearr_34282_34348 = state_34280__$1;
(statearr_34282_34348[(2)] = inst_34276);

(statearr_34282_34348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34281 === (20))){
var state_34280__$1 = state_34280;
var statearr_34283_34349 = state_34280__$1;
(statearr_34283_34349[(2)] = null);

(statearr_34283_34349[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34281 === (1))){
var state_34280__$1 = state_34280;
var statearr_34284_34350 = state_34280__$1;
(statearr_34284_34350[(2)] = null);

(statearr_34284_34350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34281 === (4))){
var inst_34245 = (state_34280[(7)]);
var inst_34245__$1 = (state_34280[(2)]);
var inst_34246 = (inst_34245__$1 == null);
var state_34280__$1 = (function (){var statearr_34285 = state_34280;
(statearr_34285[(7)] = inst_34245__$1);

return statearr_34285;
})();
if(cljs.core.truth_(inst_34246)){
var statearr_34286_34351 = state_34280__$1;
(statearr_34286_34351[(1)] = (5));

} else {
var statearr_34287_34352 = state_34280__$1;
(statearr_34287_34352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34281 === (15))){
var inst_34258 = (state_34280[(8)]);
var state_34280__$1 = state_34280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34280__$1,(18),to,inst_34258);
} else {
if((state_val_34281 === (21))){
var inst_34271 = (state_34280[(2)]);
var state_34280__$1 = state_34280;
var statearr_34288_34353 = state_34280__$1;
(statearr_34288_34353[(2)] = inst_34271);

(statearr_34288_34353[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34281 === (13))){
var inst_34273 = (state_34280[(2)]);
var state_34280__$1 = (function (){var statearr_34289 = state_34280;
(statearr_34289[(9)] = inst_34273);

return statearr_34289;
})();
var statearr_34290_34354 = state_34280__$1;
(statearr_34290_34354[(2)] = null);

(statearr_34290_34354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34281 === (6))){
var inst_34245 = (state_34280[(7)]);
var state_34280__$1 = state_34280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34280__$1,(11),inst_34245);
} else {
if((state_val_34281 === (17))){
var inst_34266 = (state_34280[(2)]);
var state_34280__$1 = state_34280;
if(cljs.core.truth_(inst_34266)){
var statearr_34291_34355 = state_34280__$1;
(statearr_34291_34355[(1)] = (19));

} else {
var statearr_34292_34356 = state_34280__$1;
(statearr_34292_34356[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34281 === (3))){
var inst_34278 = (state_34280[(2)]);
var state_34280__$1 = state_34280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34280__$1,inst_34278);
} else {
if((state_val_34281 === (12))){
var inst_34255 = (state_34280[(10)]);
var state_34280__$1 = state_34280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34280__$1,(14),inst_34255);
} else {
if((state_val_34281 === (2))){
var state_34280__$1 = state_34280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34280__$1,(4),results);
} else {
if((state_val_34281 === (19))){
var state_34280__$1 = state_34280;
var statearr_34293_34357 = state_34280__$1;
(statearr_34293_34357[(2)] = null);

(statearr_34293_34357[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34281 === (11))){
var inst_34255 = (state_34280[(2)]);
var state_34280__$1 = (function (){var statearr_34294 = state_34280;
(statearr_34294[(10)] = inst_34255);

return statearr_34294;
})();
var statearr_34295_34358 = state_34280__$1;
(statearr_34295_34358[(2)] = null);

(statearr_34295_34358[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34281 === (9))){
var state_34280__$1 = state_34280;
var statearr_34296_34359 = state_34280__$1;
(statearr_34296_34359[(2)] = null);

(statearr_34296_34359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34281 === (5))){
var state_34280__$1 = state_34280;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34297_34360 = state_34280__$1;
(statearr_34297_34360[(1)] = (8));

} else {
var statearr_34298_34361 = state_34280__$1;
(statearr_34298_34361[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34281 === (14))){
var inst_34260 = (state_34280[(11)]);
var inst_34258 = (state_34280[(8)]);
var inst_34258__$1 = (state_34280[(2)]);
var inst_34259 = (inst_34258__$1 == null);
var inst_34260__$1 = cljs.core.not.call(null,inst_34259);
var state_34280__$1 = (function (){var statearr_34299 = state_34280;
(statearr_34299[(11)] = inst_34260__$1);

(statearr_34299[(8)] = inst_34258__$1);

return statearr_34299;
})();
if(inst_34260__$1){
var statearr_34300_34362 = state_34280__$1;
(statearr_34300_34362[(1)] = (15));

} else {
var statearr_34301_34363 = state_34280__$1;
(statearr_34301_34363[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34281 === (16))){
var inst_34260 = (state_34280[(11)]);
var state_34280__$1 = state_34280;
var statearr_34302_34364 = state_34280__$1;
(statearr_34302_34364[(2)] = inst_34260);

(statearr_34302_34364[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34281 === (10))){
var inst_34252 = (state_34280[(2)]);
var state_34280__$1 = state_34280;
var statearr_34303_34365 = state_34280__$1;
(statearr_34303_34365[(2)] = inst_34252);

(statearr_34303_34365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34281 === (18))){
var inst_34263 = (state_34280[(2)]);
var state_34280__$1 = state_34280;
var statearr_34304_34366 = state_34280__$1;
(statearr_34304_34366[(2)] = inst_34263);

(statearr_34304_34366[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34281 === (8))){
var inst_34249 = cljs.core.async.close_BANG_.call(null,to);
var state_34280__$1 = state_34280;
var statearr_34305_34367 = state_34280__$1;
(statearr_34305_34367[(2)] = inst_34249);

(statearr_34305_34367[(1)] = (10));


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
});})(c__33763__auto__,jobs,results,process,async))
;
return ((function (switch__33651__auto__,c__33763__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____0 = (function (){
var statearr_34309 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34309[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__);

(statearr_34309[(1)] = (1));

return statearr_34309;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____1 = (function (state_34280){
while(true){
var ret_value__33653__auto__ = (function (){try{while(true){
var result__33654__auto__ = switch__33651__auto__.call(null,state_34280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33654__auto__;
}
break;
}
}catch (e34310){if((e34310 instanceof Object)){
var ex__33655__auto__ = e34310;
var statearr_34311_34368 = state_34280;
(statearr_34311_34368[(5)] = ex__33655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34369 = state_34280;
state_34280 = G__34369;
continue;
} else {
return ret_value__33653__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__ = function(state_34280){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____1.call(this,state_34280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33652__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33652__auto__;
})()
;})(switch__33651__auto__,c__33763__auto__,jobs,results,process,async))
})();
var state__33765__auto__ = (function (){var statearr_34312 = f__33764__auto__.call(null);
(statearr_34312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33763__auto__);

return statearr_34312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33765__auto__);
});})(c__33763__auto__,jobs,results,process,async))
);

return c__33763__auto__;
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
var args34370 = [];
var len__30408__auto___34373 = arguments.length;
var i__30409__auto___34374 = (0);
while(true){
if((i__30409__auto___34374 < len__30408__auto___34373)){
args34370.push((arguments[i__30409__auto___34374]));

var G__34375 = (i__30409__auto___34374 + (1));
i__30409__auto___34374 = G__34375;
continue;
} else {
}
break;
}

var G__34372 = args34370.length;
switch (G__34372) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34370.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var args34377 = [];
var len__30408__auto___34380 = arguments.length;
var i__30409__auto___34381 = (0);
while(true){
if((i__30409__auto___34381 < len__30408__auto___34380)){
args34377.push((arguments[i__30409__auto___34381]));

var G__34382 = (i__30409__auto___34381 + (1));
i__30409__auto___34381 = G__34382;
continue;
} else {
}
break;
}

var G__34379 = args34377.length;
switch (G__34379) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34377.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var args34384 = [];
var len__30408__auto___34437 = arguments.length;
var i__30409__auto___34438 = (0);
while(true){
if((i__30409__auto___34438 < len__30408__auto___34437)){
args34384.push((arguments[i__30409__auto___34438]));

var G__34439 = (i__30409__auto___34438 + (1));
i__30409__auto___34438 = G__34439;
continue;
} else {
}
break;
}

var G__34386 = args34384.length;
switch (G__34386) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34384.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33763__auto___34441 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33763__auto___34441,tc,fc){
return (function (){
var f__33764__auto__ = (function (){var switch__33651__auto__ = ((function (c__33763__auto___34441,tc,fc){
return (function (state_34412){
var state_val_34413 = (state_34412[(1)]);
if((state_val_34413 === (7))){
var inst_34408 = (state_34412[(2)]);
var state_34412__$1 = state_34412;
var statearr_34414_34442 = state_34412__$1;
(statearr_34414_34442[(2)] = inst_34408);

(statearr_34414_34442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34413 === (1))){
var state_34412__$1 = state_34412;
var statearr_34415_34443 = state_34412__$1;
(statearr_34415_34443[(2)] = null);

(statearr_34415_34443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34413 === (4))){
var inst_34389 = (state_34412[(7)]);
var inst_34389__$1 = (state_34412[(2)]);
var inst_34390 = (inst_34389__$1 == null);
var state_34412__$1 = (function (){var statearr_34416 = state_34412;
(statearr_34416[(7)] = inst_34389__$1);

return statearr_34416;
})();
if(cljs.core.truth_(inst_34390)){
var statearr_34417_34444 = state_34412__$1;
(statearr_34417_34444[(1)] = (5));

} else {
var statearr_34418_34445 = state_34412__$1;
(statearr_34418_34445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34413 === (13))){
var state_34412__$1 = state_34412;
var statearr_34419_34446 = state_34412__$1;
(statearr_34419_34446[(2)] = null);

(statearr_34419_34446[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34413 === (6))){
var inst_34389 = (state_34412[(7)]);
var inst_34395 = p.call(null,inst_34389);
var state_34412__$1 = state_34412;
if(cljs.core.truth_(inst_34395)){
var statearr_34420_34447 = state_34412__$1;
(statearr_34420_34447[(1)] = (9));

} else {
var statearr_34421_34448 = state_34412__$1;
(statearr_34421_34448[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34413 === (3))){
var inst_34410 = (state_34412[(2)]);
var state_34412__$1 = state_34412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34412__$1,inst_34410);
} else {
if((state_val_34413 === (12))){
var state_34412__$1 = state_34412;
var statearr_34422_34449 = state_34412__$1;
(statearr_34422_34449[(2)] = null);

(statearr_34422_34449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34413 === (2))){
var state_34412__$1 = state_34412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34412__$1,(4),ch);
} else {
if((state_val_34413 === (11))){
var inst_34389 = (state_34412[(7)]);
var inst_34399 = (state_34412[(2)]);
var state_34412__$1 = state_34412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34412__$1,(8),inst_34399,inst_34389);
} else {
if((state_val_34413 === (9))){
var state_34412__$1 = state_34412;
var statearr_34423_34450 = state_34412__$1;
(statearr_34423_34450[(2)] = tc);

(statearr_34423_34450[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34413 === (5))){
var inst_34392 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34393 = cljs.core.async.close_BANG_.call(null,fc);
var state_34412__$1 = (function (){var statearr_34424 = state_34412;
(statearr_34424[(8)] = inst_34392);

return statearr_34424;
})();
var statearr_34425_34451 = state_34412__$1;
(statearr_34425_34451[(2)] = inst_34393);

(statearr_34425_34451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34413 === (14))){
var inst_34406 = (state_34412[(2)]);
var state_34412__$1 = state_34412;
var statearr_34426_34452 = state_34412__$1;
(statearr_34426_34452[(2)] = inst_34406);

(statearr_34426_34452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34413 === (10))){
var state_34412__$1 = state_34412;
var statearr_34427_34453 = state_34412__$1;
(statearr_34427_34453[(2)] = fc);

(statearr_34427_34453[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34413 === (8))){
var inst_34401 = (state_34412[(2)]);
var state_34412__$1 = state_34412;
if(cljs.core.truth_(inst_34401)){
var statearr_34428_34454 = state_34412__$1;
(statearr_34428_34454[(1)] = (12));

} else {
var statearr_34429_34455 = state_34412__$1;
(statearr_34429_34455[(1)] = (13));

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
});})(c__33763__auto___34441,tc,fc))
;
return ((function (switch__33651__auto__,c__33763__auto___34441,tc,fc){
return (function() {
var cljs$core$async$state_machine__33652__auto__ = null;
var cljs$core$async$state_machine__33652__auto____0 = (function (){
var statearr_34433 = [null,null,null,null,null,null,null,null,null];
(statearr_34433[(0)] = cljs$core$async$state_machine__33652__auto__);

(statearr_34433[(1)] = (1));

return statearr_34433;
});
var cljs$core$async$state_machine__33652__auto____1 = (function (state_34412){
while(true){
var ret_value__33653__auto__ = (function (){try{while(true){
var result__33654__auto__ = switch__33651__auto__.call(null,state_34412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33654__auto__;
}
break;
}
}catch (e34434){if((e34434 instanceof Object)){
var ex__33655__auto__ = e34434;
var statearr_34435_34456 = state_34412;
(statearr_34435_34456[(5)] = ex__33655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34457 = state_34412;
state_34412 = G__34457;
continue;
} else {
return ret_value__33653__auto__;
}
break;
}
});
cljs$core$async$state_machine__33652__auto__ = function(state_34412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33652__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33652__auto____1.call(this,state_34412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33652__auto____0;
cljs$core$async$state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33652__auto____1;
return cljs$core$async$state_machine__33652__auto__;
})()
;})(switch__33651__auto__,c__33763__auto___34441,tc,fc))
})();
var state__33765__auto__ = (function (){var statearr_34436 = f__33764__auto__.call(null);
(statearr_34436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33763__auto___34441);

return statearr_34436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33765__auto__);
});})(c__33763__auto___34441,tc,fc))
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
var c__33763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33763__auto__){
return (function (){
var f__33764__auto__ = (function (){var switch__33651__auto__ = ((function (c__33763__auto__){
return (function (state_34521){
var state_val_34522 = (state_34521[(1)]);
if((state_val_34522 === (7))){
var inst_34517 = (state_34521[(2)]);
var state_34521__$1 = state_34521;
var statearr_34523_34544 = state_34521__$1;
(statearr_34523_34544[(2)] = inst_34517);

(statearr_34523_34544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34522 === (1))){
var inst_34501 = init;
var state_34521__$1 = (function (){var statearr_34524 = state_34521;
(statearr_34524[(7)] = inst_34501);

return statearr_34524;
})();
var statearr_34525_34545 = state_34521__$1;
(statearr_34525_34545[(2)] = null);

(statearr_34525_34545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34522 === (4))){
var inst_34504 = (state_34521[(8)]);
var inst_34504__$1 = (state_34521[(2)]);
var inst_34505 = (inst_34504__$1 == null);
var state_34521__$1 = (function (){var statearr_34526 = state_34521;
(statearr_34526[(8)] = inst_34504__$1);

return statearr_34526;
})();
if(cljs.core.truth_(inst_34505)){
var statearr_34527_34546 = state_34521__$1;
(statearr_34527_34546[(1)] = (5));

} else {
var statearr_34528_34547 = state_34521__$1;
(statearr_34528_34547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34522 === (6))){
var inst_34501 = (state_34521[(7)]);
var inst_34504 = (state_34521[(8)]);
var inst_34508 = (state_34521[(9)]);
var inst_34508__$1 = f.call(null,inst_34501,inst_34504);
var inst_34509 = cljs.core.reduced_QMARK_.call(null,inst_34508__$1);
var state_34521__$1 = (function (){var statearr_34529 = state_34521;
(statearr_34529[(9)] = inst_34508__$1);

return statearr_34529;
})();
if(inst_34509){
var statearr_34530_34548 = state_34521__$1;
(statearr_34530_34548[(1)] = (8));

} else {
var statearr_34531_34549 = state_34521__$1;
(statearr_34531_34549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34522 === (3))){
var inst_34519 = (state_34521[(2)]);
var state_34521__$1 = state_34521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34521__$1,inst_34519);
} else {
if((state_val_34522 === (2))){
var state_34521__$1 = state_34521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34521__$1,(4),ch);
} else {
if((state_val_34522 === (9))){
var inst_34508 = (state_34521[(9)]);
var inst_34501 = inst_34508;
var state_34521__$1 = (function (){var statearr_34532 = state_34521;
(statearr_34532[(7)] = inst_34501);

return statearr_34532;
})();
var statearr_34533_34550 = state_34521__$1;
(statearr_34533_34550[(2)] = null);

(statearr_34533_34550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34522 === (5))){
var inst_34501 = (state_34521[(7)]);
var state_34521__$1 = state_34521;
var statearr_34534_34551 = state_34521__$1;
(statearr_34534_34551[(2)] = inst_34501);

(statearr_34534_34551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34522 === (10))){
var inst_34515 = (state_34521[(2)]);
var state_34521__$1 = state_34521;
var statearr_34535_34552 = state_34521__$1;
(statearr_34535_34552[(2)] = inst_34515);

(statearr_34535_34552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34522 === (8))){
var inst_34508 = (state_34521[(9)]);
var inst_34511 = cljs.core.deref.call(null,inst_34508);
var state_34521__$1 = state_34521;
var statearr_34536_34553 = state_34521__$1;
(statearr_34536_34553[(2)] = inst_34511);

(statearr_34536_34553[(1)] = (10));


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
});})(c__33763__auto__))
;
return ((function (switch__33651__auto__,c__33763__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33652__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33652__auto____0 = (function (){
var statearr_34540 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34540[(0)] = cljs$core$async$reduce_$_state_machine__33652__auto__);

(statearr_34540[(1)] = (1));

return statearr_34540;
});
var cljs$core$async$reduce_$_state_machine__33652__auto____1 = (function (state_34521){
while(true){
var ret_value__33653__auto__ = (function (){try{while(true){
var result__33654__auto__ = switch__33651__auto__.call(null,state_34521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33654__auto__;
}
break;
}
}catch (e34541){if((e34541 instanceof Object)){
var ex__33655__auto__ = e34541;
var statearr_34542_34554 = state_34521;
(statearr_34542_34554[(5)] = ex__33655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34555 = state_34521;
state_34521 = G__34555;
continue;
} else {
return ret_value__33653__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33652__auto__ = function(state_34521){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33652__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33652__auto____1.call(this,state_34521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33652__auto____0;
cljs$core$async$reduce_$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33652__auto____1;
return cljs$core$async$reduce_$_state_machine__33652__auto__;
})()
;})(switch__33651__auto__,c__33763__auto__))
})();
var state__33765__auto__ = (function (){var statearr_34543 = f__33764__auto__.call(null);
(statearr_34543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33763__auto__);

return statearr_34543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33765__auto__);
});})(c__33763__auto__))
);

return c__33763__auto__;
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
var args34556 = [];
var len__30408__auto___34608 = arguments.length;
var i__30409__auto___34609 = (0);
while(true){
if((i__30409__auto___34609 < len__30408__auto___34608)){
args34556.push((arguments[i__30409__auto___34609]));

var G__34610 = (i__30409__auto___34609 + (1));
i__30409__auto___34609 = G__34610;
continue;
} else {
}
break;
}

var G__34558 = args34556.length;
switch (G__34558) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34556.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33763__auto__){
return (function (){
var f__33764__auto__ = (function (){var switch__33651__auto__ = ((function (c__33763__auto__){
return (function (state_34583){
var state_val_34584 = (state_34583[(1)]);
if((state_val_34584 === (7))){
var inst_34565 = (state_34583[(2)]);
var state_34583__$1 = state_34583;
var statearr_34585_34612 = state_34583__$1;
(statearr_34585_34612[(2)] = inst_34565);

(statearr_34585_34612[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34584 === (1))){
var inst_34559 = cljs.core.seq.call(null,coll);
var inst_34560 = inst_34559;
var state_34583__$1 = (function (){var statearr_34586 = state_34583;
(statearr_34586[(7)] = inst_34560);

return statearr_34586;
})();
var statearr_34587_34613 = state_34583__$1;
(statearr_34587_34613[(2)] = null);

(statearr_34587_34613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34584 === (4))){
var inst_34560 = (state_34583[(7)]);
var inst_34563 = cljs.core.first.call(null,inst_34560);
var state_34583__$1 = state_34583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34583__$1,(7),ch,inst_34563);
} else {
if((state_val_34584 === (13))){
var inst_34577 = (state_34583[(2)]);
var state_34583__$1 = state_34583;
var statearr_34588_34614 = state_34583__$1;
(statearr_34588_34614[(2)] = inst_34577);

(statearr_34588_34614[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34584 === (6))){
var inst_34568 = (state_34583[(2)]);
var state_34583__$1 = state_34583;
if(cljs.core.truth_(inst_34568)){
var statearr_34589_34615 = state_34583__$1;
(statearr_34589_34615[(1)] = (8));

} else {
var statearr_34590_34616 = state_34583__$1;
(statearr_34590_34616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34584 === (3))){
var inst_34581 = (state_34583[(2)]);
var state_34583__$1 = state_34583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34583__$1,inst_34581);
} else {
if((state_val_34584 === (12))){
var state_34583__$1 = state_34583;
var statearr_34591_34617 = state_34583__$1;
(statearr_34591_34617[(2)] = null);

(statearr_34591_34617[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34584 === (2))){
var inst_34560 = (state_34583[(7)]);
var state_34583__$1 = state_34583;
if(cljs.core.truth_(inst_34560)){
var statearr_34592_34618 = state_34583__$1;
(statearr_34592_34618[(1)] = (4));

} else {
var statearr_34593_34619 = state_34583__$1;
(statearr_34593_34619[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34584 === (11))){
var inst_34574 = cljs.core.async.close_BANG_.call(null,ch);
var state_34583__$1 = state_34583;
var statearr_34594_34620 = state_34583__$1;
(statearr_34594_34620[(2)] = inst_34574);

(statearr_34594_34620[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34584 === (9))){
var state_34583__$1 = state_34583;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34595_34621 = state_34583__$1;
(statearr_34595_34621[(1)] = (11));

} else {
var statearr_34596_34622 = state_34583__$1;
(statearr_34596_34622[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34584 === (5))){
var inst_34560 = (state_34583[(7)]);
var state_34583__$1 = state_34583;
var statearr_34597_34623 = state_34583__$1;
(statearr_34597_34623[(2)] = inst_34560);

(statearr_34597_34623[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34584 === (10))){
var inst_34579 = (state_34583[(2)]);
var state_34583__$1 = state_34583;
var statearr_34598_34624 = state_34583__$1;
(statearr_34598_34624[(2)] = inst_34579);

(statearr_34598_34624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34584 === (8))){
var inst_34560 = (state_34583[(7)]);
var inst_34570 = cljs.core.next.call(null,inst_34560);
var inst_34560__$1 = inst_34570;
var state_34583__$1 = (function (){var statearr_34599 = state_34583;
(statearr_34599[(7)] = inst_34560__$1);

return statearr_34599;
})();
var statearr_34600_34625 = state_34583__$1;
(statearr_34600_34625[(2)] = null);

(statearr_34600_34625[(1)] = (2));


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
});})(c__33763__auto__))
;
return ((function (switch__33651__auto__,c__33763__auto__){
return (function() {
var cljs$core$async$state_machine__33652__auto__ = null;
var cljs$core$async$state_machine__33652__auto____0 = (function (){
var statearr_34604 = [null,null,null,null,null,null,null,null];
(statearr_34604[(0)] = cljs$core$async$state_machine__33652__auto__);

(statearr_34604[(1)] = (1));

return statearr_34604;
});
var cljs$core$async$state_machine__33652__auto____1 = (function (state_34583){
while(true){
var ret_value__33653__auto__ = (function (){try{while(true){
var result__33654__auto__ = switch__33651__auto__.call(null,state_34583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33654__auto__;
}
break;
}
}catch (e34605){if((e34605 instanceof Object)){
var ex__33655__auto__ = e34605;
var statearr_34606_34626 = state_34583;
(statearr_34606_34626[(5)] = ex__33655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34627 = state_34583;
state_34583 = G__34627;
continue;
} else {
return ret_value__33653__auto__;
}
break;
}
});
cljs$core$async$state_machine__33652__auto__ = function(state_34583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33652__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33652__auto____1.call(this,state_34583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33652__auto____0;
cljs$core$async$state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33652__auto____1;
return cljs$core$async$state_machine__33652__auto__;
})()
;})(switch__33651__auto__,c__33763__auto__))
})();
var state__33765__auto__ = (function (){var statearr_34607 = f__33764__auto__.call(null);
(statearr_34607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33763__auto__);

return statearr_34607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33765__auto__);
});})(c__33763__auto__))
);

return c__33763__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__30002__auto__ = (((_ == null))?null:_);
var m__30003__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30002__auto__)]);
if(!((m__30003__auto__ == null))){
return m__30003__auto__.call(null,_);
} else {
var m__30003__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30003__auto____$1 == null))){
return m__30003__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__30002__auto__ = (((m == null))?null:m);
var m__30003__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30002__auto__)]);
if(!((m__30003__auto__ == null))){
return m__30003__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30003__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30003__auto____$1 == null))){
return m__30003__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__30002__auto__ = (((m == null))?null:m);
var m__30003__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30002__auto__)]);
if(!((m__30003__auto__ == null))){
return m__30003__auto__.call(null,m,ch);
} else {
var m__30003__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30003__auto____$1 == null))){
return m__30003__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__30002__auto__ = (((m == null))?null:m);
var m__30003__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30002__auto__)]);
if(!((m__30003__auto__ == null))){
return m__30003__auto__.call(null,m);
} else {
var m__30003__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30003__auto____$1 == null))){
return m__30003__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34849 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34849 = (function (mult,ch,cs,meta34850){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta34850 = meta34850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34851,meta34850__$1){
var self__ = this;
var _34851__$1 = this;
return (new cljs.core.async.t_cljs$core$async34849(self__.mult,self__.ch,self__.cs,meta34850__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34849.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34851){
var self__ = this;
var _34851__$1 = this;
return self__.meta34850;
});})(cs))
;

cljs.core.async.t_cljs$core$async34849.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34849.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34849.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async34849.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34849.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34849.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34849.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34850","meta34850",-1052531925,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34849.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34849";

cljs.core.async.t_cljs$core$async34849.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__29945__auto__,writer__29946__auto__,opt__29947__auto__){
return cljs.core._write.call(null,writer__29946__auto__,"cljs.core.async/t_cljs$core$async34849");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34849 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34849(mult__$1,ch__$1,cs__$1,meta34850){
return (new cljs.core.async.t_cljs$core$async34849(mult__$1,ch__$1,cs__$1,meta34850));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34849(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33763__auto___35070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33763__auto___35070,cs,m,dchan,dctr,done){
return (function (){
var f__33764__auto__ = (function (){var switch__33651__auto__ = ((function (c__33763__auto___35070,cs,m,dchan,dctr,done){
return (function (state_34982){
var state_val_34983 = (state_34982[(1)]);
if((state_val_34983 === (7))){
var inst_34978 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_34984_35071 = state_34982__$1;
(statearr_34984_35071[(2)] = inst_34978);

(statearr_34984_35071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (20))){
var inst_34883 = (state_34982[(7)]);
var inst_34893 = cljs.core.first.call(null,inst_34883);
var inst_34894 = cljs.core.nth.call(null,inst_34893,(0),null);
var inst_34895 = cljs.core.nth.call(null,inst_34893,(1),null);
var state_34982__$1 = (function (){var statearr_34985 = state_34982;
(statearr_34985[(8)] = inst_34894);

return statearr_34985;
})();
if(cljs.core.truth_(inst_34895)){
var statearr_34986_35072 = state_34982__$1;
(statearr_34986_35072[(1)] = (22));

} else {
var statearr_34987_35073 = state_34982__$1;
(statearr_34987_35073[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (27))){
var inst_34923 = (state_34982[(9)]);
var inst_34925 = (state_34982[(10)]);
var inst_34930 = (state_34982[(11)]);
var inst_34854 = (state_34982[(12)]);
var inst_34930__$1 = cljs.core._nth.call(null,inst_34923,inst_34925);
var inst_34931 = cljs.core.async.put_BANG_.call(null,inst_34930__$1,inst_34854,done);
var state_34982__$1 = (function (){var statearr_34988 = state_34982;
(statearr_34988[(11)] = inst_34930__$1);

return statearr_34988;
})();
if(cljs.core.truth_(inst_34931)){
var statearr_34989_35074 = state_34982__$1;
(statearr_34989_35074[(1)] = (30));

} else {
var statearr_34990_35075 = state_34982__$1;
(statearr_34990_35075[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (1))){
var state_34982__$1 = state_34982;
var statearr_34991_35076 = state_34982__$1;
(statearr_34991_35076[(2)] = null);

(statearr_34991_35076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (24))){
var inst_34883 = (state_34982[(7)]);
var inst_34900 = (state_34982[(2)]);
var inst_34901 = cljs.core.next.call(null,inst_34883);
var inst_34863 = inst_34901;
var inst_34864 = null;
var inst_34865 = (0);
var inst_34866 = (0);
var state_34982__$1 = (function (){var statearr_34992 = state_34982;
(statearr_34992[(13)] = inst_34863);

(statearr_34992[(14)] = inst_34866);

(statearr_34992[(15)] = inst_34865);

(statearr_34992[(16)] = inst_34900);

(statearr_34992[(17)] = inst_34864);

return statearr_34992;
})();
var statearr_34993_35077 = state_34982__$1;
(statearr_34993_35077[(2)] = null);

(statearr_34993_35077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (39))){
var state_34982__$1 = state_34982;
var statearr_34997_35078 = state_34982__$1;
(statearr_34997_35078[(2)] = null);

(statearr_34997_35078[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (4))){
var inst_34854 = (state_34982[(12)]);
var inst_34854__$1 = (state_34982[(2)]);
var inst_34855 = (inst_34854__$1 == null);
var state_34982__$1 = (function (){var statearr_34998 = state_34982;
(statearr_34998[(12)] = inst_34854__$1);

return statearr_34998;
})();
if(cljs.core.truth_(inst_34855)){
var statearr_34999_35079 = state_34982__$1;
(statearr_34999_35079[(1)] = (5));

} else {
var statearr_35000_35080 = state_34982__$1;
(statearr_35000_35080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (15))){
var inst_34863 = (state_34982[(13)]);
var inst_34866 = (state_34982[(14)]);
var inst_34865 = (state_34982[(15)]);
var inst_34864 = (state_34982[(17)]);
var inst_34879 = (state_34982[(2)]);
var inst_34880 = (inst_34866 + (1));
var tmp34994 = inst_34863;
var tmp34995 = inst_34865;
var tmp34996 = inst_34864;
var inst_34863__$1 = tmp34994;
var inst_34864__$1 = tmp34996;
var inst_34865__$1 = tmp34995;
var inst_34866__$1 = inst_34880;
var state_34982__$1 = (function (){var statearr_35001 = state_34982;
(statearr_35001[(13)] = inst_34863__$1);

(statearr_35001[(18)] = inst_34879);

(statearr_35001[(14)] = inst_34866__$1);

(statearr_35001[(15)] = inst_34865__$1);

(statearr_35001[(17)] = inst_34864__$1);

return statearr_35001;
})();
var statearr_35002_35081 = state_34982__$1;
(statearr_35002_35081[(2)] = null);

(statearr_35002_35081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (21))){
var inst_34904 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35006_35082 = state_34982__$1;
(statearr_35006_35082[(2)] = inst_34904);

(statearr_35006_35082[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (31))){
var inst_34930 = (state_34982[(11)]);
var inst_34934 = done.call(null,null);
var inst_34935 = cljs.core.async.untap_STAR_.call(null,m,inst_34930);
var state_34982__$1 = (function (){var statearr_35007 = state_34982;
(statearr_35007[(19)] = inst_34934);

return statearr_35007;
})();
var statearr_35008_35083 = state_34982__$1;
(statearr_35008_35083[(2)] = inst_34935);

(statearr_35008_35083[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (32))){
var inst_34923 = (state_34982[(9)]);
var inst_34925 = (state_34982[(10)]);
var inst_34924 = (state_34982[(20)]);
var inst_34922 = (state_34982[(21)]);
var inst_34937 = (state_34982[(2)]);
var inst_34938 = (inst_34925 + (1));
var tmp35003 = inst_34923;
var tmp35004 = inst_34924;
var tmp35005 = inst_34922;
var inst_34922__$1 = tmp35005;
var inst_34923__$1 = tmp35003;
var inst_34924__$1 = tmp35004;
var inst_34925__$1 = inst_34938;
var state_34982__$1 = (function (){var statearr_35009 = state_34982;
(statearr_35009[(9)] = inst_34923__$1);

(statearr_35009[(10)] = inst_34925__$1);

(statearr_35009[(20)] = inst_34924__$1);

(statearr_35009[(22)] = inst_34937);

(statearr_35009[(21)] = inst_34922__$1);

return statearr_35009;
})();
var statearr_35010_35084 = state_34982__$1;
(statearr_35010_35084[(2)] = null);

(statearr_35010_35084[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (40))){
var inst_34950 = (state_34982[(23)]);
var inst_34954 = done.call(null,null);
var inst_34955 = cljs.core.async.untap_STAR_.call(null,m,inst_34950);
var state_34982__$1 = (function (){var statearr_35011 = state_34982;
(statearr_35011[(24)] = inst_34954);

return statearr_35011;
})();
var statearr_35012_35085 = state_34982__$1;
(statearr_35012_35085[(2)] = inst_34955);

(statearr_35012_35085[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (33))){
var inst_34941 = (state_34982[(25)]);
var inst_34943 = cljs.core.chunked_seq_QMARK_.call(null,inst_34941);
var state_34982__$1 = state_34982;
if(inst_34943){
var statearr_35013_35086 = state_34982__$1;
(statearr_35013_35086[(1)] = (36));

} else {
var statearr_35014_35087 = state_34982__$1;
(statearr_35014_35087[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (13))){
var inst_34873 = (state_34982[(26)]);
var inst_34876 = cljs.core.async.close_BANG_.call(null,inst_34873);
var state_34982__$1 = state_34982;
var statearr_35015_35088 = state_34982__$1;
(statearr_35015_35088[(2)] = inst_34876);

(statearr_35015_35088[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (22))){
var inst_34894 = (state_34982[(8)]);
var inst_34897 = cljs.core.async.close_BANG_.call(null,inst_34894);
var state_34982__$1 = state_34982;
var statearr_35016_35089 = state_34982__$1;
(statearr_35016_35089[(2)] = inst_34897);

(statearr_35016_35089[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (36))){
var inst_34941 = (state_34982[(25)]);
var inst_34945 = cljs.core.chunk_first.call(null,inst_34941);
var inst_34946 = cljs.core.chunk_rest.call(null,inst_34941);
var inst_34947 = cljs.core.count.call(null,inst_34945);
var inst_34922 = inst_34946;
var inst_34923 = inst_34945;
var inst_34924 = inst_34947;
var inst_34925 = (0);
var state_34982__$1 = (function (){var statearr_35017 = state_34982;
(statearr_35017[(9)] = inst_34923);

(statearr_35017[(10)] = inst_34925);

(statearr_35017[(20)] = inst_34924);

(statearr_35017[(21)] = inst_34922);

return statearr_35017;
})();
var statearr_35018_35090 = state_34982__$1;
(statearr_35018_35090[(2)] = null);

(statearr_35018_35090[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (41))){
var inst_34941 = (state_34982[(25)]);
var inst_34957 = (state_34982[(2)]);
var inst_34958 = cljs.core.next.call(null,inst_34941);
var inst_34922 = inst_34958;
var inst_34923 = null;
var inst_34924 = (0);
var inst_34925 = (0);
var state_34982__$1 = (function (){var statearr_35019 = state_34982;
(statearr_35019[(9)] = inst_34923);

(statearr_35019[(10)] = inst_34925);

(statearr_35019[(20)] = inst_34924);

(statearr_35019[(27)] = inst_34957);

(statearr_35019[(21)] = inst_34922);

return statearr_35019;
})();
var statearr_35020_35091 = state_34982__$1;
(statearr_35020_35091[(2)] = null);

(statearr_35020_35091[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (43))){
var state_34982__$1 = state_34982;
var statearr_35021_35092 = state_34982__$1;
(statearr_35021_35092[(2)] = null);

(statearr_35021_35092[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (29))){
var inst_34966 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35022_35093 = state_34982__$1;
(statearr_35022_35093[(2)] = inst_34966);

(statearr_35022_35093[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (44))){
var inst_34975 = (state_34982[(2)]);
var state_34982__$1 = (function (){var statearr_35023 = state_34982;
(statearr_35023[(28)] = inst_34975);

return statearr_35023;
})();
var statearr_35024_35094 = state_34982__$1;
(statearr_35024_35094[(2)] = null);

(statearr_35024_35094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (6))){
var inst_34914 = (state_34982[(29)]);
var inst_34913 = cljs.core.deref.call(null,cs);
var inst_34914__$1 = cljs.core.keys.call(null,inst_34913);
var inst_34915 = cljs.core.count.call(null,inst_34914__$1);
var inst_34916 = cljs.core.reset_BANG_.call(null,dctr,inst_34915);
var inst_34921 = cljs.core.seq.call(null,inst_34914__$1);
var inst_34922 = inst_34921;
var inst_34923 = null;
var inst_34924 = (0);
var inst_34925 = (0);
var state_34982__$1 = (function (){var statearr_35025 = state_34982;
(statearr_35025[(9)] = inst_34923);

(statearr_35025[(10)] = inst_34925);

(statearr_35025[(29)] = inst_34914__$1);

(statearr_35025[(20)] = inst_34924);

(statearr_35025[(30)] = inst_34916);

(statearr_35025[(21)] = inst_34922);

return statearr_35025;
})();
var statearr_35026_35095 = state_34982__$1;
(statearr_35026_35095[(2)] = null);

(statearr_35026_35095[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (28))){
var inst_34941 = (state_34982[(25)]);
var inst_34922 = (state_34982[(21)]);
var inst_34941__$1 = cljs.core.seq.call(null,inst_34922);
var state_34982__$1 = (function (){var statearr_35027 = state_34982;
(statearr_35027[(25)] = inst_34941__$1);

return statearr_35027;
})();
if(inst_34941__$1){
var statearr_35028_35096 = state_34982__$1;
(statearr_35028_35096[(1)] = (33));

} else {
var statearr_35029_35097 = state_34982__$1;
(statearr_35029_35097[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (25))){
var inst_34925 = (state_34982[(10)]);
var inst_34924 = (state_34982[(20)]);
var inst_34927 = (inst_34925 < inst_34924);
var inst_34928 = inst_34927;
var state_34982__$1 = state_34982;
if(cljs.core.truth_(inst_34928)){
var statearr_35030_35098 = state_34982__$1;
(statearr_35030_35098[(1)] = (27));

} else {
var statearr_35031_35099 = state_34982__$1;
(statearr_35031_35099[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (34))){
var state_34982__$1 = state_34982;
var statearr_35032_35100 = state_34982__$1;
(statearr_35032_35100[(2)] = null);

(statearr_35032_35100[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (17))){
var state_34982__$1 = state_34982;
var statearr_35033_35101 = state_34982__$1;
(statearr_35033_35101[(2)] = null);

(statearr_35033_35101[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (3))){
var inst_34980 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34982__$1,inst_34980);
} else {
if((state_val_34983 === (12))){
var inst_34909 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35034_35102 = state_34982__$1;
(statearr_35034_35102[(2)] = inst_34909);

(statearr_35034_35102[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (2))){
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34982__$1,(4),ch);
} else {
if((state_val_34983 === (23))){
var state_34982__$1 = state_34982;
var statearr_35035_35103 = state_34982__$1;
(statearr_35035_35103[(2)] = null);

(statearr_35035_35103[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (35))){
var inst_34964 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35036_35104 = state_34982__$1;
(statearr_35036_35104[(2)] = inst_34964);

(statearr_35036_35104[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (19))){
var inst_34883 = (state_34982[(7)]);
var inst_34887 = cljs.core.chunk_first.call(null,inst_34883);
var inst_34888 = cljs.core.chunk_rest.call(null,inst_34883);
var inst_34889 = cljs.core.count.call(null,inst_34887);
var inst_34863 = inst_34888;
var inst_34864 = inst_34887;
var inst_34865 = inst_34889;
var inst_34866 = (0);
var state_34982__$1 = (function (){var statearr_35037 = state_34982;
(statearr_35037[(13)] = inst_34863);

(statearr_35037[(14)] = inst_34866);

(statearr_35037[(15)] = inst_34865);

(statearr_35037[(17)] = inst_34864);

return statearr_35037;
})();
var statearr_35038_35105 = state_34982__$1;
(statearr_35038_35105[(2)] = null);

(statearr_35038_35105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (11))){
var inst_34863 = (state_34982[(13)]);
var inst_34883 = (state_34982[(7)]);
var inst_34883__$1 = cljs.core.seq.call(null,inst_34863);
var state_34982__$1 = (function (){var statearr_35039 = state_34982;
(statearr_35039[(7)] = inst_34883__$1);

return statearr_35039;
})();
if(inst_34883__$1){
var statearr_35040_35106 = state_34982__$1;
(statearr_35040_35106[(1)] = (16));

} else {
var statearr_35041_35107 = state_34982__$1;
(statearr_35041_35107[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (9))){
var inst_34911 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35042_35108 = state_34982__$1;
(statearr_35042_35108[(2)] = inst_34911);

(statearr_35042_35108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (5))){
var inst_34861 = cljs.core.deref.call(null,cs);
var inst_34862 = cljs.core.seq.call(null,inst_34861);
var inst_34863 = inst_34862;
var inst_34864 = null;
var inst_34865 = (0);
var inst_34866 = (0);
var state_34982__$1 = (function (){var statearr_35043 = state_34982;
(statearr_35043[(13)] = inst_34863);

(statearr_35043[(14)] = inst_34866);

(statearr_35043[(15)] = inst_34865);

(statearr_35043[(17)] = inst_34864);

return statearr_35043;
})();
var statearr_35044_35109 = state_34982__$1;
(statearr_35044_35109[(2)] = null);

(statearr_35044_35109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (14))){
var state_34982__$1 = state_34982;
var statearr_35045_35110 = state_34982__$1;
(statearr_35045_35110[(2)] = null);

(statearr_35045_35110[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (45))){
var inst_34972 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35046_35111 = state_34982__$1;
(statearr_35046_35111[(2)] = inst_34972);

(statearr_35046_35111[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (26))){
var inst_34914 = (state_34982[(29)]);
var inst_34968 = (state_34982[(2)]);
var inst_34969 = cljs.core.seq.call(null,inst_34914);
var state_34982__$1 = (function (){var statearr_35047 = state_34982;
(statearr_35047[(31)] = inst_34968);

return statearr_35047;
})();
if(inst_34969){
var statearr_35048_35112 = state_34982__$1;
(statearr_35048_35112[(1)] = (42));

} else {
var statearr_35049_35113 = state_34982__$1;
(statearr_35049_35113[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (16))){
var inst_34883 = (state_34982[(7)]);
var inst_34885 = cljs.core.chunked_seq_QMARK_.call(null,inst_34883);
var state_34982__$1 = state_34982;
if(inst_34885){
var statearr_35050_35114 = state_34982__$1;
(statearr_35050_35114[(1)] = (19));

} else {
var statearr_35051_35115 = state_34982__$1;
(statearr_35051_35115[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (38))){
var inst_34961 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35052_35116 = state_34982__$1;
(statearr_35052_35116[(2)] = inst_34961);

(statearr_35052_35116[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (30))){
var state_34982__$1 = state_34982;
var statearr_35053_35117 = state_34982__$1;
(statearr_35053_35117[(2)] = null);

(statearr_35053_35117[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (10))){
var inst_34866 = (state_34982[(14)]);
var inst_34864 = (state_34982[(17)]);
var inst_34872 = cljs.core._nth.call(null,inst_34864,inst_34866);
var inst_34873 = cljs.core.nth.call(null,inst_34872,(0),null);
var inst_34874 = cljs.core.nth.call(null,inst_34872,(1),null);
var state_34982__$1 = (function (){var statearr_35054 = state_34982;
(statearr_35054[(26)] = inst_34873);

return statearr_35054;
})();
if(cljs.core.truth_(inst_34874)){
var statearr_35055_35118 = state_34982__$1;
(statearr_35055_35118[(1)] = (13));

} else {
var statearr_35056_35119 = state_34982__$1;
(statearr_35056_35119[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (18))){
var inst_34907 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35057_35120 = state_34982__$1;
(statearr_35057_35120[(2)] = inst_34907);

(statearr_35057_35120[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (42))){
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34982__$1,(45),dchan);
} else {
if((state_val_34983 === (37))){
var inst_34950 = (state_34982[(23)]);
var inst_34941 = (state_34982[(25)]);
var inst_34854 = (state_34982[(12)]);
var inst_34950__$1 = cljs.core.first.call(null,inst_34941);
var inst_34951 = cljs.core.async.put_BANG_.call(null,inst_34950__$1,inst_34854,done);
var state_34982__$1 = (function (){var statearr_35058 = state_34982;
(statearr_35058[(23)] = inst_34950__$1);

return statearr_35058;
})();
if(cljs.core.truth_(inst_34951)){
var statearr_35059_35121 = state_34982__$1;
(statearr_35059_35121[(1)] = (39));

} else {
var statearr_35060_35122 = state_34982__$1;
(statearr_35060_35122[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (8))){
var inst_34866 = (state_34982[(14)]);
var inst_34865 = (state_34982[(15)]);
var inst_34868 = (inst_34866 < inst_34865);
var inst_34869 = inst_34868;
var state_34982__$1 = state_34982;
if(cljs.core.truth_(inst_34869)){
var statearr_35061_35123 = state_34982__$1;
(statearr_35061_35123[(1)] = (10));

} else {
var statearr_35062_35124 = state_34982__$1;
(statearr_35062_35124[(1)] = (11));

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
});})(c__33763__auto___35070,cs,m,dchan,dctr,done))
;
return ((function (switch__33651__auto__,c__33763__auto___35070,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33652__auto__ = null;
var cljs$core$async$mult_$_state_machine__33652__auto____0 = (function (){
var statearr_35066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35066[(0)] = cljs$core$async$mult_$_state_machine__33652__auto__);

(statearr_35066[(1)] = (1));

return statearr_35066;
});
var cljs$core$async$mult_$_state_machine__33652__auto____1 = (function (state_34982){
while(true){
var ret_value__33653__auto__ = (function (){try{while(true){
var result__33654__auto__ = switch__33651__auto__.call(null,state_34982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33654__auto__;
}
break;
}
}catch (e35067){if((e35067 instanceof Object)){
var ex__33655__auto__ = e35067;
var statearr_35068_35125 = state_34982;
(statearr_35068_35125[(5)] = ex__33655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35126 = state_34982;
state_34982 = G__35126;
continue;
} else {
return ret_value__33653__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33652__auto__ = function(state_34982){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33652__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33652__auto____1.call(this,state_34982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33652__auto____0;
cljs$core$async$mult_$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33652__auto____1;
return cljs$core$async$mult_$_state_machine__33652__auto__;
})()
;})(switch__33651__auto__,c__33763__auto___35070,cs,m,dchan,dctr,done))
})();
var state__33765__auto__ = (function (){var statearr_35069 = f__33764__auto__.call(null);
(statearr_35069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33763__auto___35070);

return statearr_35069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33765__auto__);
});})(c__33763__auto___35070,cs,m,dchan,dctr,done))
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
var args35127 = [];
var len__30408__auto___35130 = arguments.length;
var i__30409__auto___35131 = (0);
while(true){
if((i__30409__auto___35131 < len__30408__auto___35130)){
args35127.push((arguments[i__30409__auto___35131]));

var G__35132 = (i__30409__auto___35131 + (1));
i__30409__auto___35131 = G__35132;
continue;
} else {
}
break;
}

var G__35129 = args35127.length;
switch (G__35129) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35127.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__30002__auto__ = (((m == null))?null:m);
var m__30003__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30002__auto__)]);
if(!((m__30003__auto__ == null))){
return m__30003__auto__.call(null,m,ch);
} else {
var m__30003__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30003__auto____$1 == null))){
return m__30003__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__30002__auto__ = (((m == null))?null:m);
var m__30003__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30002__auto__)]);
if(!((m__30003__auto__ == null))){
return m__30003__auto__.call(null,m,ch);
} else {
var m__30003__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30003__auto____$1 == null))){
return m__30003__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__30002__auto__ = (((m == null))?null:m);
var m__30003__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30002__auto__)]);
if(!((m__30003__auto__ == null))){
return m__30003__auto__.call(null,m);
} else {
var m__30003__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30003__auto____$1 == null))){
return m__30003__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__30002__auto__ = (((m == null))?null:m);
var m__30003__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30002__auto__)]);
if(!((m__30003__auto__ == null))){
return m__30003__auto__.call(null,m,state_map);
} else {
var m__30003__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30003__auto____$1 == null))){
return m__30003__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__30002__auto__ = (((m == null))?null:m);
var m__30003__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30002__auto__)]);
if(!((m__30003__auto__ == null))){
return m__30003__auto__.call(null,m,mode);
} else {
var m__30003__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30003__auto____$1 == null))){
return m__30003__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__30415__auto__ = [];
var len__30408__auto___35144 = arguments.length;
var i__30409__auto___35145 = (0);
while(true){
if((i__30409__auto___35145 < len__30408__auto___35144)){
args__30415__auto__.push((arguments[i__30409__auto___35145]));

var G__35146 = (i__30409__auto___35145 + (1));
i__30409__auto___35145 = G__35146;
continue;
} else {
}
break;
}

var argseq__30416__auto__ = ((((3) < args__30415__auto__.length))?(new cljs.core.IndexedSeq(args__30415__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30416__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35138){
var map__35139 = p__35138;
var map__35139__$1 = ((((!((map__35139 == null)))?((((map__35139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35139):map__35139);
var opts = map__35139__$1;
var statearr_35141_35147 = state;
(statearr_35141_35147[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__35139,map__35139__$1,opts){
return (function (val){
var statearr_35142_35148 = state;
(statearr_35142_35148[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35139,map__35139__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_35143_35149 = state;
(statearr_35143_35149[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35134){
var G__35135 = cljs.core.first.call(null,seq35134);
var seq35134__$1 = cljs.core.next.call(null,seq35134);
var G__35136 = cljs.core.first.call(null,seq35134__$1);
var seq35134__$2 = cljs.core.next.call(null,seq35134__$1);
var G__35137 = cljs.core.first.call(null,seq35134__$2);
var seq35134__$3 = cljs.core.next.call(null,seq35134__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35135,G__35136,G__35137,seq35134__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35313 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35313 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35314){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35314 = meta35314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35315,meta35314__$1){
var self__ = this;
var _35315__$1 = this;
return (new cljs.core.async.t_cljs$core$async35313(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35314__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35313.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35315){
var self__ = this;
var _35315__$1 = this;
return self__.meta35314;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35313.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35313.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35313.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async35313.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35313.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35313.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35313.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35313.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35313.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35314","meta35314",-1548088236,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35313.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35313";

cljs.core.async.t_cljs$core$async35313.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__29945__auto__,writer__29946__auto__,opt__29947__auto__){
return cljs.core._write.call(null,writer__29946__auto__,"cljs.core.async/t_cljs$core$async35313");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35313 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35313(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35314){
return (new cljs.core.async.t_cljs$core$async35313(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35314));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35313(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33763__auto___35476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33763__auto___35476,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33764__auto__ = (function (){var switch__33651__auto__ = ((function (c__33763__auto___35476,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35413){
var state_val_35414 = (state_35413[(1)]);
if((state_val_35414 === (7))){
var inst_35331 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
var statearr_35415_35477 = state_35413__$1;
(statearr_35415_35477[(2)] = inst_35331);

(statearr_35415_35477[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (20))){
var inst_35343 = (state_35413[(7)]);
var state_35413__$1 = state_35413;
var statearr_35416_35478 = state_35413__$1;
(statearr_35416_35478[(2)] = inst_35343);

(statearr_35416_35478[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (27))){
var state_35413__$1 = state_35413;
var statearr_35417_35479 = state_35413__$1;
(statearr_35417_35479[(2)] = null);

(statearr_35417_35479[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (1))){
var inst_35319 = (state_35413[(8)]);
var inst_35319__$1 = calc_state.call(null);
var inst_35321 = (inst_35319__$1 == null);
var inst_35322 = cljs.core.not.call(null,inst_35321);
var state_35413__$1 = (function (){var statearr_35418 = state_35413;
(statearr_35418[(8)] = inst_35319__$1);

return statearr_35418;
})();
if(inst_35322){
var statearr_35419_35480 = state_35413__$1;
(statearr_35419_35480[(1)] = (2));

} else {
var statearr_35420_35481 = state_35413__$1;
(statearr_35420_35481[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (24))){
var inst_35366 = (state_35413[(9)]);
var inst_35387 = (state_35413[(10)]);
var inst_35373 = (state_35413[(11)]);
var inst_35387__$1 = inst_35366.call(null,inst_35373);
var state_35413__$1 = (function (){var statearr_35421 = state_35413;
(statearr_35421[(10)] = inst_35387__$1);

return statearr_35421;
})();
if(cljs.core.truth_(inst_35387__$1)){
var statearr_35422_35482 = state_35413__$1;
(statearr_35422_35482[(1)] = (29));

} else {
var statearr_35423_35483 = state_35413__$1;
(statearr_35423_35483[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (4))){
var inst_35334 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
if(cljs.core.truth_(inst_35334)){
var statearr_35424_35484 = state_35413__$1;
(statearr_35424_35484[(1)] = (8));

} else {
var statearr_35425_35485 = state_35413__$1;
(statearr_35425_35485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (15))){
var inst_35360 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
if(cljs.core.truth_(inst_35360)){
var statearr_35426_35486 = state_35413__$1;
(statearr_35426_35486[(1)] = (19));

} else {
var statearr_35427_35487 = state_35413__$1;
(statearr_35427_35487[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (21))){
var inst_35365 = (state_35413[(12)]);
var inst_35365__$1 = (state_35413[(2)]);
var inst_35366 = cljs.core.get.call(null,inst_35365__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35367 = cljs.core.get.call(null,inst_35365__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35368 = cljs.core.get.call(null,inst_35365__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35413__$1 = (function (){var statearr_35428 = state_35413;
(statearr_35428[(9)] = inst_35366);

(statearr_35428[(12)] = inst_35365__$1);

(statearr_35428[(13)] = inst_35367);

return statearr_35428;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35413__$1,(22),inst_35368);
} else {
if((state_val_35414 === (31))){
var inst_35395 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
if(cljs.core.truth_(inst_35395)){
var statearr_35429_35488 = state_35413__$1;
(statearr_35429_35488[(1)] = (32));

} else {
var statearr_35430_35489 = state_35413__$1;
(statearr_35430_35489[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (32))){
var inst_35372 = (state_35413[(14)]);
var state_35413__$1 = state_35413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35413__$1,(35),out,inst_35372);
} else {
if((state_val_35414 === (33))){
var inst_35365 = (state_35413[(12)]);
var inst_35343 = inst_35365;
var state_35413__$1 = (function (){var statearr_35431 = state_35413;
(statearr_35431[(7)] = inst_35343);

return statearr_35431;
})();
var statearr_35432_35490 = state_35413__$1;
(statearr_35432_35490[(2)] = null);

(statearr_35432_35490[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (13))){
var inst_35343 = (state_35413[(7)]);
var inst_35350 = inst_35343.cljs$lang$protocol_mask$partition0$;
var inst_35351 = (inst_35350 & (64));
var inst_35352 = inst_35343.cljs$core$ISeq$;
var inst_35353 = (inst_35351) || (inst_35352);
var state_35413__$1 = state_35413;
if(cljs.core.truth_(inst_35353)){
var statearr_35433_35491 = state_35413__$1;
(statearr_35433_35491[(1)] = (16));

} else {
var statearr_35434_35492 = state_35413__$1;
(statearr_35434_35492[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (22))){
var inst_35373 = (state_35413[(11)]);
var inst_35372 = (state_35413[(14)]);
var inst_35371 = (state_35413[(2)]);
var inst_35372__$1 = cljs.core.nth.call(null,inst_35371,(0),null);
var inst_35373__$1 = cljs.core.nth.call(null,inst_35371,(1),null);
var inst_35374 = (inst_35372__$1 == null);
var inst_35375 = cljs.core._EQ_.call(null,inst_35373__$1,change);
var inst_35376 = (inst_35374) || (inst_35375);
var state_35413__$1 = (function (){var statearr_35435 = state_35413;
(statearr_35435[(11)] = inst_35373__$1);

(statearr_35435[(14)] = inst_35372__$1);

return statearr_35435;
})();
if(cljs.core.truth_(inst_35376)){
var statearr_35436_35493 = state_35413__$1;
(statearr_35436_35493[(1)] = (23));

} else {
var statearr_35437_35494 = state_35413__$1;
(statearr_35437_35494[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (36))){
var inst_35365 = (state_35413[(12)]);
var inst_35343 = inst_35365;
var state_35413__$1 = (function (){var statearr_35438 = state_35413;
(statearr_35438[(7)] = inst_35343);

return statearr_35438;
})();
var statearr_35439_35495 = state_35413__$1;
(statearr_35439_35495[(2)] = null);

(statearr_35439_35495[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (29))){
var inst_35387 = (state_35413[(10)]);
var state_35413__$1 = state_35413;
var statearr_35440_35496 = state_35413__$1;
(statearr_35440_35496[(2)] = inst_35387);

(statearr_35440_35496[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (6))){
var state_35413__$1 = state_35413;
var statearr_35441_35497 = state_35413__$1;
(statearr_35441_35497[(2)] = false);

(statearr_35441_35497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (28))){
var inst_35383 = (state_35413[(2)]);
var inst_35384 = calc_state.call(null);
var inst_35343 = inst_35384;
var state_35413__$1 = (function (){var statearr_35442 = state_35413;
(statearr_35442[(7)] = inst_35343);

(statearr_35442[(15)] = inst_35383);

return statearr_35442;
})();
var statearr_35443_35498 = state_35413__$1;
(statearr_35443_35498[(2)] = null);

(statearr_35443_35498[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (25))){
var inst_35409 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
var statearr_35444_35499 = state_35413__$1;
(statearr_35444_35499[(2)] = inst_35409);

(statearr_35444_35499[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (34))){
var inst_35407 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
var statearr_35445_35500 = state_35413__$1;
(statearr_35445_35500[(2)] = inst_35407);

(statearr_35445_35500[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (17))){
var state_35413__$1 = state_35413;
var statearr_35446_35501 = state_35413__$1;
(statearr_35446_35501[(2)] = false);

(statearr_35446_35501[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (3))){
var state_35413__$1 = state_35413;
var statearr_35447_35502 = state_35413__$1;
(statearr_35447_35502[(2)] = false);

(statearr_35447_35502[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (12))){
var inst_35411 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35413__$1,inst_35411);
} else {
if((state_val_35414 === (2))){
var inst_35319 = (state_35413[(8)]);
var inst_35324 = inst_35319.cljs$lang$protocol_mask$partition0$;
var inst_35325 = (inst_35324 & (64));
var inst_35326 = inst_35319.cljs$core$ISeq$;
var inst_35327 = (inst_35325) || (inst_35326);
var state_35413__$1 = state_35413;
if(cljs.core.truth_(inst_35327)){
var statearr_35448_35503 = state_35413__$1;
(statearr_35448_35503[(1)] = (5));

} else {
var statearr_35449_35504 = state_35413__$1;
(statearr_35449_35504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (23))){
var inst_35372 = (state_35413[(14)]);
var inst_35378 = (inst_35372 == null);
var state_35413__$1 = state_35413;
if(cljs.core.truth_(inst_35378)){
var statearr_35450_35505 = state_35413__$1;
(statearr_35450_35505[(1)] = (26));

} else {
var statearr_35451_35506 = state_35413__$1;
(statearr_35451_35506[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (35))){
var inst_35398 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
if(cljs.core.truth_(inst_35398)){
var statearr_35452_35507 = state_35413__$1;
(statearr_35452_35507[(1)] = (36));

} else {
var statearr_35453_35508 = state_35413__$1;
(statearr_35453_35508[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (19))){
var inst_35343 = (state_35413[(7)]);
var inst_35362 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35343);
var state_35413__$1 = state_35413;
var statearr_35454_35509 = state_35413__$1;
(statearr_35454_35509[(2)] = inst_35362);

(statearr_35454_35509[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (11))){
var inst_35343 = (state_35413[(7)]);
var inst_35347 = (inst_35343 == null);
var inst_35348 = cljs.core.not.call(null,inst_35347);
var state_35413__$1 = state_35413;
if(inst_35348){
var statearr_35455_35510 = state_35413__$1;
(statearr_35455_35510[(1)] = (13));

} else {
var statearr_35456_35511 = state_35413__$1;
(statearr_35456_35511[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (9))){
var inst_35319 = (state_35413[(8)]);
var state_35413__$1 = state_35413;
var statearr_35457_35512 = state_35413__$1;
(statearr_35457_35512[(2)] = inst_35319);

(statearr_35457_35512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (5))){
var state_35413__$1 = state_35413;
var statearr_35458_35513 = state_35413__$1;
(statearr_35458_35513[(2)] = true);

(statearr_35458_35513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (14))){
var state_35413__$1 = state_35413;
var statearr_35459_35514 = state_35413__$1;
(statearr_35459_35514[(2)] = false);

(statearr_35459_35514[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (26))){
var inst_35373 = (state_35413[(11)]);
var inst_35380 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35373);
var state_35413__$1 = state_35413;
var statearr_35460_35515 = state_35413__$1;
(statearr_35460_35515[(2)] = inst_35380);

(statearr_35460_35515[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (16))){
var state_35413__$1 = state_35413;
var statearr_35461_35516 = state_35413__$1;
(statearr_35461_35516[(2)] = true);

(statearr_35461_35516[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (38))){
var inst_35403 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
var statearr_35462_35517 = state_35413__$1;
(statearr_35462_35517[(2)] = inst_35403);

(statearr_35462_35517[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (30))){
var inst_35366 = (state_35413[(9)]);
var inst_35367 = (state_35413[(13)]);
var inst_35373 = (state_35413[(11)]);
var inst_35390 = cljs.core.empty_QMARK_.call(null,inst_35366);
var inst_35391 = inst_35367.call(null,inst_35373);
var inst_35392 = cljs.core.not.call(null,inst_35391);
var inst_35393 = (inst_35390) && (inst_35392);
var state_35413__$1 = state_35413;
var statearr_35463_35518 = state_35413__$1;
(statearr_35463_35518[(2)] = inst_35393);

(statearr_35463_35518[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (10))){
var inst_35319 = (state_35413[(8)]);
var inst_35339 = (state_35413[(2)]);
var inst_35340 = cljs.core.get.call(null,inst_35339,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35341 = cljs.core.get.call(null,inst_35339,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35342 = cljs.core.get.call(null,inst_35339,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35343 = inst_35319;
var state_35413__$1 = (function (){var statearr_35464 = state_35413;
(statearr_35464[(7)] = inst_35343);

(statearr_35464[(16)] = inst_35342);

(statearr_35464[(17)] = inst_35341);

(statearr_35464[(18)] = inst_35340);

return statearr_35464;
})();
var statearr_35465_35519 = state_35413__$1;
(statearr_35465_35519[(2)] = null);

(statearr_35465_35519[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (18))){
var inst_35357 = (state_35413[(2)]);
var state_35413__$1 = state_35413;
var statearr_35466_35520 = state_35413__$1;
(statearr_35466_35520[(2)] = inst_35357);

(statearr_35466_35520[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (37))){
var state_35413__$1 = state_35413;
var statearr_35467_35521 = state_35413__$1;
(statearr_35467_35521[(2)] = null);

(statearr_35467_35521[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35414 === (8))){
var inst_35319 = (state_35413[(8)]);
var inst_35336 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35319);
var state_35413__$1 = state_35413;
var statearr_35468_35522 = state_35413__$1;
(statearr_35468_35522[(2)] = inst_35336);

(statearr_35468_35522[(1)] = (10));


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
});})(c__33763__auto___35476,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33651__auto__,c__33763__auto___35476,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33652__auto__ = null;
var cljs$core$async$mix_$_state_machine__33652__auto____0 = (function (){
var statearr_35472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35472[(0)] = cljs$core$async$mix_$_state_machine__33652__auto__);

(statearr_35472[(1)] = (1));

return statearr_35472;
});
var cljs$core$async$mix_$_state_machine__33652__auto____1 = (function (state_35413){
while(true){
var ret_value__33653__auto__ = (function (){try{while(true){
var result__33654__auto__ = switch__33651__auto__.call(null,state_35413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33654__auto__;
}
break;
}
}catch (e35473){if((e35473 instanceof Object)){
var ex__33655__auto__ = e35473;
var statearr_35474_35523 = state_35413;
(statearr_35474_35523[(5)] = ex__33655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35524 = state_35413;
state_35413 = G__35524;
continue;
} else {
return ret_value__33653__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33652__auto__ = function(state_35413){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33652__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33652__auto____1.call(this,state_35413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33652__auto____0;
cljs$core$async$mix_$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33652__auto____1;
return cljs$core$async$mix_$_state_machine__33652__auto__;
})()
;})(switch__33651__auto__,c__33763__auto___35476,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33765__auto__ = (function (){var statearr_35475 = f__33764__auto__.call(null);
(statearr_35475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33763__auto___35476);

return statearr_35475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33765__auto__);
});})(c__33763__auto___35476,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__30002__auto__ = (((p == null))?null:p);
var m__30003__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30002__auto__)]);
if(!((m__30003__auto__ == null))){
return m__30003__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30003__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30003__auto____$1 == null))){
return m__30003__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__30002__auto__ = (((p == null))?null:p);
var m__30003__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30002__auto__)]);
if(!((m__30003__auto__ == null))){
return m__30003__auto__.call(null,p,v,ch);
} else {
var m__30003__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30003__auto____$1 == null))){
return m__30003__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args35525 = [];
var len__30408__auto___35528 = arguments.length;
var i__30409__auto___35529 = (0);
while(true){
if((i__30409__auto___35529 < len__30408__auto___35528)){
args35525.push((arguments[i__30409__auto___35529]));

var G__35530 = (i__30409__auto___35529 + (1));
i__30409__auto___35529 = G__35530;
continue;
} else {
}
break;
}

var G__35527 = args35525.length;
switch (G__35527) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35525.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30002__auto__ = (((p == null))?null:p);
var m__30003__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30002__auto__)]);
if(!((m__30003__auto__ == null))){
return m__30003__auto__.call(null,p);
} else {
var m__30003__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30003__auto____$1 == null))){
return m__30003__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__30002__auto__ = (((p == null))?null:p);
var m__30003__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30002__auto__)]);
if(!((m__30003__auto__ == null))){
return m__30003__auto__.call(null,p,v);
} else {
var m__30003__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30003__auto____$1 == null))){
return m__30003__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var args35533 = [];
var len__30408__auto___35658 = arguments.length;
var i__30409__auto___35659 = (0);
while(true){
if((i__30409__auto___35659 < len__30408__auto___35658)){
args35533.push((arguments[i__30409__auto___35659]));

var G__35660 = (i__30409__auto___35659 + (1));
i__30409__auto___35659 = G__35660;
continue;
} else {
}
break;
}

var G__35535 = args35533.length;
switch (G__35535) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35533.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__29339__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__29339__auto__)){
return or__29339__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__29339__auto__,mults){
return (function (p1__35532_SHARP_){
if(cljs.core.truth_(p1__35532_SHARP_.call(null,topic))){
return p1__35532_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35532_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__29339__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35536 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35536 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35537){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35537 = meta35537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35538,meta35537__$1){
var self__ = this;
var _35538__$1 = this;
return (new cljs.core.async.t_cljs$core$async35536(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35537__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35536.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35538){
var self__ = this;
var _35538__$1 = this;
return self__.meta35537;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35536.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35536.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35536.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async35536.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35536.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35536.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35536.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35536.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35537","meta35537",673485645,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35536.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35536";

cljs.core.async.t_cljs$core$async35536.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__29945__auto__,writer__29946__auto__,opt__29947__auto__){
return cljs.core._write.call(null,writer__29946__auto__,"cljs.core.async/t_cljs$core$async35536");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35536 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35536(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35537){
return (new cljs.core.async.t_cljs$core$async35536(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35537));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35536(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33763__auto___35662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33763__auto___35662,mults,ensure_mult,p){
return (function (){
var f__33764__auto__ = (function (){var switch__33651__auto__ = ((function (c__33763__auto___35662,mults,ensure_mult,p){
return (function (state_35610){
var state_val_35611 = (state_35610[(1)]);
if((state_val_35611 === (7))){
var inst_35606 = (state_35610[(2)]);
var state_35610__$1 = state_35610;
var statearr_35612_35663 = state_35610__$1;
(statearr_35612_35663[(2)] = inst_35606);

(statearr_35612_35663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (20))){
var state_35610__$1 = state_35610;
var statearr_35613_35664 = state_35610__$1;
(statearr_35613_35664[(2)] = null);

(statearr_35613_35664[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (1))){
var state_35610__$1 = state_35610;
var statearr_35614_35665 = state_35610__$1;
(statearr_35614_35665[(2)] = null);

(statearr_35614_35665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (24))){
var inst_35589 = (state_35610[(7)]);
var inst_35598 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35589);
var state_35610__$1 = state_35610;
var statearr_35615_35666 = state_35610__$1;
(statearr_35615_35666[(2)] = inst_35598);

(statearr_35615_35666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (4))){
var inst_35541 = (state_35610[(8)]);
var inst_35541__$1 = (state_35610[(2)]);
var inst_35542 = (inst_35541__$1 == null);
var state_35610__$1 = (function (){var statearr_35616 = state_35610;
(statearr_35616[(8)] = inst_35541__$1);

return statearr_35616;
})();
if(cljs.core.truth_(inst_35542)){
var statearr_35617_35667 = state_35610__$1;
(statearr_35617_35667[(1)] = (5));

} else {
var statearr_35618_35668 = state_35610__$1;
(statearr_35618_35668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (15))){
var inst_35583 = (state_35610[(2)]);
var state_35610__$1 = state_35610;
var statearr_35619_35669 = state_35610__$1;
(statearr_35619_35669[(2)] = inst_35583);

(statearr_35619_35669[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (21))){
var inst_35603 = (state_35610[(2)]);
var state_35610__$1 = (function (){var statearr_35620 = state_35610;
(statearr_35620[(9)] = inst_35603);

return statearr_35620;
})();
var statearr_35621_35670 = state_35610__$1;
(statearr_35621_35670[(2)] = null);

(statearr_35621_35670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (13))){
var inst_35565 = (state_35610[(10)]);
var inst_35567 = cljs.core.chunked_seq_QMARK_.call(null,inst_35565);
var state_35610__$1 = state_35610;
if(inst_35567){
var statearr_35622_35671 = state_35610__$1;
(statearr_35622_35671[(1)] = (16));

} else {
var statearr_35623_35672 = state_35610__$1;
(statearr_35623_35672[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (22))){
var inst_35595 = (state_35610[(2)]);
var state_35610__$1 = state_35610;
if(cljs.core.truth_(inst_35595)){
var statearr_35624_35673 = state_35610__$1;
(statearr_35624_35673[(1)] = (23));

} else {
var statearr_35625_35674 = state_35610__$1;
(statearr_35625_35674[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (6))){
var inst_35589 = (state_35610[(7)]);
var inst_35591 = (state_35610[(11)]);
var inst_35541 = (state_35610[(8)]);
var inst_35589__$1 = topic_fn.call(null,inst_35541);
var inst_35590 = cljs.core.deref.call(null,mults);
var inst_35591__$1 = cljs.core.get.call(null,inst_35590,inst_35589__$1);
var state_35610__$1 = (function (){var statearr_35626 = state_35610;
(statearr_35626[(7)] = inst_35589__$1);

(statearr_35626[(11)] = inst_35591__$1);

return statearr_35626;
})();
if(cljs.core.truth_(inst_35591__$1)){
var statearr_35627_35675 = state_35610__$1;
(statearr_35627_35675[(1)] = (19));

} else {
var statearr_35628_35676 = state_35610__$1;
(statearr_35628_35676[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (25))){
var inst_35600 = (state_35610[(2)]);
var state_35610__$1 = state_35610;
var statearr_35629_35677 = state_35610__$1;
(statearr_35629_35677[(2)] = inst_35600);

(statearr_35629_35677[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (17))){
var inst_35565 = (state_35610[(10)]);
var inst_35574 = cljs.core.first.call(null,inst_35565);
var inst_35575 = cljs.core.async.muxch_STAR_.call(null,inst_35574);
var inst_35576 = cljs.core.async.close_BANG_.call(null,inst_35575);
var inst_35577 = cljs.core.next.call(null,inst_35565);
var inst_35551 = inst_35577;
var inst_35552 = null;
var inst_35553 = (0);
var inst_35554 = (0);
var state_35610__$1 = (function (){var statearr_35630 = state_35610;
(statearr_35630[(12)] = inst_35552);

(statearr_35630[(13)] = inst_35576);

(statearr_35630[(14)] = inst_35554);

(statearr_35630[(15)] = inst_35553);

(statearr_35630[(16)] = inst_35551);

return statearr_35630;
})();
var statearr_35631_35678 = state_35610__$1;
(statearr_35631_35678[(2)] = null);

(statearr_35631_35678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (3))){
var inst_35608 = (state_35610[(2)]);
var state_35610__$1 = state_35610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35610__$1,inst_35608);
} else {
if((state_val_35611 === (12))){
var inst_35585 = (state_35610[(2)]);
var state_35610__$1 = state_35610;
var statearr_35632_35679 = state_35610__$1;
(statearr_35632_35679[(2)] = inst_35585);

(statearr_35632_35679[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (2))){
var state_35610__$1 = state_35610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35610__$1,(4),ch);
} else {
if((state_val_35611 === (23))){
var state_35610__$1 = state_35610;
var statearr_35633_35680 = state_35610__$1;
(statearr_35633_35680[(2)] = null);

(statearr_35633_35680[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (19))){
var inst_35591 = (state_35610[(11)]);
var inst_35541 = (state_35610[(8)]);
var inst_35593 = cljs.core.async.muxch_STAR_.call(null,inst_35591);
var state_35610__$1 = state_35610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35610__$1,(22),inst_35593,inst_35541);
} else {
if((state_val_35611 === (11))){
var inst_35565 = (state_35610[(10)]);
var inst_35551 = (state_35610[(16)]);
var inst_35565__$1 = cljs.core.seq.call(null,inst_35551);
var state_35610__$1 = (function (){var statearr_35634 = state_35610;
(statearr_35634[(10)] = inst_35565__$1);

return statearr_35634;
})();
if(inst_35565__$1){
var statearr_35635_35681 = state_35610__$1;
(statearr_35635_35681[(1)] = (13));

} else {
var statearr_35636_35682 = state_35610__$1;
(statearr_35636_35682[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (9))){
var inst_35587 = (state_35610[(2)]);
var state_35610__$1 = state_35610;
var statearr_35637_35683 = state_35610__$1;
(statearr_35637_35683[(2)] = inst_35587);

(statearr_35637_35683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (5))){
var inst_35548 = cljs.core.deref.call(null,mults);
var inst_35549 = cljs.core.vals.call(null,inst_35548);
var inst_35550 = cljs.core.seq.call(null,inst_35549);
var inst_35551 = inst_35550;
var inst_35552 = null;
var inst_35553 = (0);
var inst_35554 = (0);
var state_35610__$1 = (function (){var statearr_35638 = state_35610;
(statearr_35638[(12)] = inst_35552);

(statearr_35638[(14)] = inst_35554);

(statearr_35638[(15)] = inst_35553);

(statearr_35638[(16)] = inst_35551);

return statearr_35638;
})();
var statearr_35639_35684 = state_35610__$1;
(statearr_35639_35684[(2)] = null);

(statearr_35639_35684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (14))){
var state_35610__$1 = state_35610;
var statearr_35643_35685 = state_35610__$1;
(statearr_35643_35685[(2)] = null);

(statearr_35643_35685[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (16))){
var inst_35565 = (state_35610[(10)]);
var inst_35569 = cljs.core.chunk_first.call(null,inst_35565);
var inst_35570 = cljs.core.chunk_rest.call(null,inst_35565);
var inst_35571 = cljs.core.count.call(null,inst_35569);
var inst_35551 = inst_35570;
var inst_35552 = inst_35569;
var inst_35553 = inst_35571;
var inst_35554 = (0);
var state_35610__$1 = (function (){var statearr_35644 = state_35610;
(statearr_35644[(12)] = inst_35552);

(statearr_35644[(14)] = inst_35554);

(statearr_35644[(15)] = inst_35553);

(statearr_35644[(16)] = inst_35551);

return statearr_35644;
})();
var statearr_35645_35686 = state_35610__$1;
(statearr_35645_35686[(2)] = null);

(statearr_35645_35686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (10))){
var inst_35552 = (state_35610[(12)]);
var inst_35554 = (state_35610[(14)]);
var inst_35553 = (state_35610[(15)]);
var inst_35551 = (state_35610[(16)]);
var inst_35559 = cljs.core._nth.call(null,inst_35552,inst_35554);
var inst_35560 = cljs.core.async.muxch_STAR_.call(null,inst_35559);
var inst_35561 = cljs.core.async.close_BANG_.call(null,inst_35560);
var inst_35562 = (inst_35554 + (1));
var tmp35640 = inst_35552;
var tmp35641 = inst_35553;
var tmp35642 = inst_35551;
var inst_35551__$1 = tmp35642;
var inst_35552__$1 = tmp35640;
var inst_35553__$1 = tmp35641;
var inst_35554__$1 = inst_35562;
var state_35610__$1 = (function (){var statearr_35646 = state_35610;
(statearr_35646[(12)] = inst_35552__$1);

(statearr_35646[(14)] = inst_35554__$1);

(statearr_35646[(17)] = inst_35561);

(statearr_35646[(15)] = inst_35553__$1);

(statearr_35646[(16)] = inst_35551__$1);

return statearr_35646;
})();
var statearr_35647_35687 = state_35610__$1;
(statearr_35647_35687[(2)] = null);

(statearr_35647_35687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (18))){
var inst_35580 = (state_35610[(2)]);
var state_35610__$1 = state_35610;
var statearr_35648_35688 = state_35610__$1;
(statearr_35648_35688[(2)] = inst_35580);

(statearr_35648_35688[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (8))){
var inst_35554 = (state_35610[(14)]);
var inst_35553 = (state_35610[(15)]);
var inst_35556 = (inst_35554 < inst_35553);
var inst_35557 = inst_35556;
var state_35610__$1 = state_35610;
if(cljs.core.truth_(inst_35557)){
var statearr_35649_35689 = state_35610__$1;
(statearr_35649_35689[(1)] = (10));

} else {
var statearr_35650_35690 = state_35610__$1;
(statearr_35650_35690[(1)] = (11));

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
});})(c__33763__auto___35662,mults,ensure_mult,p))
;
return ((function (switch__33651__auto__,c__33763__auto___35662,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33652__auto__ = null;
var cljs$core$async$state_machine__33652__auto____0 = (function (){
var statearr_35654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35654[(0)] = cljs$core$async$state_machine__33652__auto__);

(statearr_35654[(1)] = (1));

return statearr_35654;
});
var cljs$core$async$state_machine__33652__auto____1 = (function (state_35610){
while(true){
var ret_value__33653__auto__ = (function (){try{while(true){
var result__33654__auto__ = switch__33651__auto__.call(null,state_35610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33654__auto__;
}
break;
}
}catch (e35655){if((e35655 instanceof Object)){
var ex__33655__auto__ = e35655;
var statearr_35656_35691 = state_35610;
(statearr_35656_35691[(5)] = ex__33655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35692 = state_35610;
state_35610 = G__35692;
continue;
} else {
return ret_value__33653__auto__;
}
break;
}
});
cljs$core$async$state_machine__33652__auto__ = function(state_35610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33652__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33652__auto____1.call(this,state_35610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33652__auto____0;
cljs$core$async$state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33652__auto____1;
return cljs$core$async$state_machine__33652__auto__;
})()
;})(switch__33651__auto__,c__33763__auto___35662,mults,ensure_mult,p))
})();
var state__33765__auto__ = (function (){var statearr_35657 = f__33764__auto__.call(null);
(statearr_35657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33763__auto___35662);

return statearr_35657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33765__auto__);
});})(c__33763__auto___35662,mults,ensure_mult,p))
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
var args35693 = [];
var len__30408__auto___35696 = arguments.length;
var i__30409__auto___35697 = (0);
while(true){
if((i__30409__auto___35697 < len__30408__auto___35696)){
args35693.push((arguments[i__30409__auto___35697]));

var G__35698 = (i__30409__auto___35697 + (1));
i__30409__auto___35697 = G__35698;
continue;
} else {
}
break;
}

var G__35695 = args35693.length;
switch (G__35695) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35693.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args35700 = [];
var len__30408__auto___35703 = arguments.length;
var i__30409__auto___35704 = (0);
while(true){
if((i__30409__auto___35704 < len__30408__auto___35703)){
args35700.push((arguments[i__30409__auto___35704]));

var G__35705 = (i__30409__auto___35704 + (1));
i__30409__auto___35704 = G__35705;
continue;
} else {
}
break;
}

var G__35702 = args35700.length;
switch (G__35702) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35700.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var args35707 = [];
var len__30408__auto___35778 = arguments.length;
var i__30409__auto___35779 = (0);
while(true){
if((i__30409__auto___35779 < len__30408__auto___35778)){
args35707.push((arguments[i__30409__auto___35779]));

var G__35780 = (i__30409__auto___35779 + (1));
i__30409__auto___35779 = G__35780;
continue;
} else {
}
break;
}

var G__35709 = args35707.length;
switch (G__35709) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35707.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__33763__auto___35782 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33763__auto___35782,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33764__auto__ = (function (){var switch__33651__auto__ = ((function (c__33763__auto___35782,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35748){
var state_val_35749 = (state_35748[(1)]);
if((state_val_35749 === (7))){
var state_35748__$1 = state_35748;
var statearr_35750_35783 = state_35748__$1;
(statearr_35750_35783[(2)] = null);

(statearr_35750_35783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35749 === (1))){
var state_35748__$1 = state_35748;
var statearr_35751_35784 = state_35748__$1;
(statearr_35751_35784[(2)] = null);

(statearr_35751_35784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35749 === (4))){
var inst_35712 = (state_35748[(7)]);
var inst_35714 = (inst_35712 < cnt);
var state_35748__$1 = state_35748;
if(cljs.core.truth_(inst_35714)){
var statearr_35752_35785 = state_35748__$1;
(statearr_35752_35785[(1)] = (6));

} else {
var statearr_35753_35786 = state_35748__$1;
(statearr_35753_35786[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35749 === (15))){
var inst_35744 = (state_35748[(2)]);
var state_35748__$1 = state_35748;
var statearr_35754_35787 = state_35748__$1;
(statearr_35754_35787[(2)] = inst_35744);

(statearr_35754_35787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35749 === (13))){
var inst_35737 = cljs.core.async.close_BANG_.call(null,out);
var state_35748__$1 = state_35748;
var statearr_35755_35788 = state_35748__$1;
(statearr_35755_35788[(2)] = inst_35737);

(statearr_35755_35788[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35749 === (6))){
var state_35748__$1 = state_35748;
var statearr_35756_35789 = state_35748__$1;
(statearr_35756_35789[(2)] = null);

(statearr_35756_35789[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35749 === (3))){
var inst_35746 = (state_35748[(2)]);
var state_35748__$1 = state_35748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35748__$1,inst_35746);
} else {
if((state_val_35749 === (12))){
var inst_35734 = (state_35748[(8)]);
var inst_35734__$1 = (state_35748[(2)]);
var inst_35735 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35734__$1);
var state_35748__$1 = (function (){var statearr_35757 = state_35748;
(statearr_35757[(8)] = inst_35734__$1);

return statearr_35757;
})();
if(cljs.core.truth_(inst_35735)){
var statearr_35758_35790 = state_35748__$1;
(statearr_35758_35790[(1)] = (13));

} else {
var statearr_35759_35791 = state_35748__$1;
(statearr_35759_35791[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35749 === (2))){
var inst_35711 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35712 = (0);
var state_35748__$1 = (function (){var statearr_35760 = state_35748;
(statearr_35760[(9)] = inst_35711);

(statearr_35760[(7)] = inst_35712);

return statearr_35760;
})();
var statearr_35761_35792 = state_35748__$1;
(statearr_35761_35792[(2)] = null);

(statearr_35761_35792[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35749 === (11))){
var inst_35712 = (state_35748[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35748,(10),Object,null,(9));
var inst_35721 = chs__$1.call(null,inst_35712);
var inst_35722 = done.call(null,inst_35712);
var inst_35723 = cljs.core.async.take_BANG_.call(null,inst_35721,inst_35722);
var state_35748__$1 = state_35748;
var statearr_35762_35793 = state_35748__$1;
(statearr_35762_35793[(2)] = inst_35723);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35748__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35749 === (9))){
var inst_35712 = (state_35748[(7)]);
var inst_35725 = (state_35748[(2)]);
var inst_35726 = (inst_35712 + (1));
var inst_35712__$1 = inst_35726;
var state_35748__$1 = (function (){var statearr_35763 = state_35748;
(statearr_35763[(10)] = inst_35725);

(statearr_35763[(7)] = inst_35712__$1);

return statearr_35763;
})();
var statearr_35764_35794 = state_35748__$1;
(statearr_35764_35794[(2)] = null);

(statearr_35764_35794[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35749 === (5))){
var inst_35732 = (state_35748[(2)]);
var state_35748__$1 = (function (){var statearr_35765 = state_35748;
(statearr_35765[(11)] = inst_35732);

return statearr_35765;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35748__$1,(12),dchan);
} else {
if((state_val_35749 === (14))){
var inst_35734 = (state_35748[(8)]);
var inst_35739 = cljs.core.apply.call(null,f,inst_35734);
var state_35748__$1 = state_35748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35748__$1,(16),out,inst_35739);
} else {
if((state_val_35749 === (16))){
var inst_35741 = (state_35748[(2)]);
var state_35748__$1 = (function (){var statearr_35766 = state_35748;
(statearr_35766[(12)] = inst_35741);

return statearr_35766;
})();
var statearr_35767_35795 = state_35748__$1;
(statearr_35767_35795[(2)] = null);

(statearr_35767_35795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35749 === (10))){
var inst_35716 = (state_35748[(2)]);
var inst_35717 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35748__$1 = (function (){var statearr_35768 = state_35748;
(statearr_35768[(13)] = inst_35716);

return statearr_35768;
})();
var statearr_35769_35796 = state_35748__$1;
(statearr_35769_35796[(2)] = inst_35717);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35748__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35749 === (8))){
var inst_35730 = (state_35748[(2)]);
var state_35748__$1 = state_35748;
var statearr_35770_35797 = state_35748__$1;
(statearr_35770_35797[(2)] = inst_35730);

(statearr_35770_35797[(1)] = (5));


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
});})(c__33763__auto___35782,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33651__auto__,c__33763__auto___35782,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33652__auto__ = null;
var cljs$core$async$state_machine__33652__auto____0 = (function (){
var statearr_35774 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35774[(0)] = cljs$core$async$state_machine__33652__auto__);

(statearr_35774[(1)] = (1));

return statearr_35774;
});
var cljs$core$async$state_machine__33652__auto____1 = (function (state_35748){
while(true){
var ret_value__33653__auto__ = (function (){try{while(true){
var result__33654__auto__ = switch__33651__auto__.call(null,state_35748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33654__auto__;
}
break;
}
}catch (e35775){if((e35775 instanceof Object)){
var ex__33655__auto__ = e35775;
var statearr_35776_35798 = state_35748;
(statearr_35776_35798[(5)] = ex__33655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35799 = state_35748;
state_35748 = G__35799;
continue;
} else {
return ret_value__33653__auto__;
}
break;
}
});
cljs$core$async$state_machine__33652__auto__ = function(state_35748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33652__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33652__auto____1.call(this,state_35748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33652__auto____0;
cljs$core$async$state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33652__auto____1;
return cljs$core$async$state_machine__33652__auto__;
})()
;})(switch__33651__auto__,c__33763__auto___35782,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33765__auto__ = (function (){var statearr_35777 = f__33764__auto__.call(null);
(statearr_35777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33763__auto___35782);

return statearr_35777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33765__auto__);
});})(c__33763__auto___35782,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args35801 = [];
var len__30408__auto___35857 = arguments.length;
var i__30409__auto___35858 = (0);
while(true){
if((i__30409__auto___35858 < len__30408__auto___35857)){
args35801.push((arguments[i__30409__auto___35858]));

var G__35859 = (i__30409__auto___35858 + (1));
i__30409__auto___35858 = G__35859;
continue;
} else {
}
break;
}

var G__35803 = args35801.length;
switch (G__35803) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35801.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33763__auto___35861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33763__auto___35861,out){
return (function (){
var f__33764__auto__ = (function (){var switch__33651__auto__ = ((function (c__33763__auto___35861,out){
return (function (state_35833){
var state_val_35834 = (state_35833[(1)]);
if((state_val_35834 === (7))){
var inst_35813 = (state_35833[(7)]);
var inst_35812 = (state_35833[(8)]);
var inst_35812__$1 = (state_35833[(2)]);
var inst_35813__$1 = cljs.core.nth.call(null,inst_35812__$1,(0),null);
var inst_35814 = cljs.core.nth.call(null,inst_35812__$1,(1),null);
var inst_35815 = (inst_35813__$1 == null);
var state_35833__$1 = (function (){var statearr_35835 = state_35833;
(statearr_35835[(7)] = inst_35813__$1);

(statearr_35835[(9)] = inst_35814);

(statearr_35835[(8)] = inst_35812__$1);

return statearr_35835;
})();
if(cljs.core.truth_(inst_35815)){
var statearr_35836_35862 = state_35833__$1;
(statearr_35836_35862[(1)] = (8));

} else {
var statearr_35837_35863 = state_35833__$1;
(statearr_35837_35863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35834 === (1))){
var inst_35804 = cljs.core.vec.call(null,chs);
var inst_35805 = inst_35804;
var state_35833__$1 = (function (){var statearr_35838 = state_35833;
(statearr_35838[(10)] = inst_35805);

return statearr_35838;
})();
var statearr_35839_35864 = state_35833__$1;
(statearr_35839_35864[(2)] = null);

(statearr_35839_35864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35834 === (4))){
var inst_35805 = (state_35833[(10)]);
var state_35833__$1 = state_35833;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35833__$1,(7),inst_35805);
} else {
if((state_val_35834 === (6))){
var inst_35829 = (state_35833[(2)]);
var state_35833__$1 = state_35833;
var statearr_35840_35865 = state_35833__$1;
(statearr_35840_35865[(2)] = inst_35829);

(statearr_35840_35865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35834 === (3))){
var inst_35831 = (state_35833[(2)]);
var state_35833__$1 = state_35833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35833__$1,inst_35831);
} else {
if((state_val_35834 === (2))){
var inst_35805 = (state_35833[(10)]);
var inst_35807 = cljs.core.count.call(null,inst_35805);
var inst_35808 = (inst_35807 > (0));
var state_35833__$1 = state_35833;
if(cljs.core.truth_(inst_35808)){
var statearr_35842_35866 = state_35833__$1;
(statearr_35842_35866[(1)] = (4));

} else {
var statearr_35843_35867 = state_35833__$1;
(statearr_35843_35867[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35834 === (11))){
var inst_35805 = (state_35833[(10)]);
var inst_35822 = (state_35833[(2)]);
var tmp35841 = inst_35805;
var inst_35805__$1 = tmp35841;
var state_35833__$1 = (function (){var statearr_35844 = state_35833;
(statearr_35844[(11)] = inst_35822);

(statearr_35844[(10)] = inst_35805__$1);

return statearr_35844;
})();
var statearr_35845_35868 = state_35833__$1;
(statearr_35845_35868[(2)] = null);

(statearr_35845_35868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35834 === (9))){
var inst_35813 = (state_35833[(7)]);
var state_35833__$1 = state_35833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35833__$1,(11),out,inst_35813);
} else {
if((state_val_35834 === (5))){
var inst_35827 = cljs.core.async.close_BANG_.call(null,out);
var state_35833__$1 = state_35833;
var statearr_35846_35869 = state_35833__$1;
(statearr_35846_35869[(2)] = inst_35827);

(statearr_35846_35869[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35834 === (10))){
var inst_35825 = (state_35833[(2)]);
var state_35833__$1 = state_35833;
var statearr_35847_35870 = state_35833__$1;
(statearr_35847_35870[(2)] = inst_35825);

(statearr_35847_35870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35834 === (8))){
var inst_35813 = (state_35833[(7)]);
var inst_35805 = (state_35833[(10)]);
var inst_35814 = (state_35833[(9)]);
var inst_35812 = (state_35833[(8)]);
var inst_35817 = (function (){var cs = inst_35805;
var vec__35810 = inst_35812;
var v = inst_35813;
var c = inst_35814;
return ((function (cs,vec__35810,v,c,inst_35813,inst_35805,inst_35814,inst_35812,state_val_35834,c__33763__auto___35861,out){
return (function (p1__35800_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35800_SHARP_);
});
;})(cs,vec__35810,v,c,inst_35813,inst_35805,inst_35814,inst_35812,state_val_35834,c__33763__auto___35861,out))
})();
var inst_35818 = cljs.core.filterv.call(null,inst_35817,inst_35805);
var inst_35805__$1 = inst_35818;
var state_35833__$1 = (function (){var statearr_35848 = state_35833;
(statearr_35848[(10)] = inst_35805__$1);

return statearr_35848;
})();
var statearr_35849_35871 = state_35833__$1;
(statearr_35849_35871[(2)] = null);

(statearr_35849_35871[(1)] = (2));


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
});})(c__33763__auto___35861,out))
;
return ((function (switch__33651__auto__,c__33763__auto___35861,out){
return (function() {
var cljs$core$async$state_machine__33652__auto__ = null;
var cljs$core$async$state_machine__33652__auto____0 = (function (){
var statearr_35853 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35853[(0)] = cljs$core$async$state_machine__33652__auto__);

(statearr_35853[(1)] = (1));

return statearr_35853;
});
var cljs$core$async$state_machine__33652__auto____1 = (function (state_35833){
while(true){
var ret_value__33653__auto__ = (function (){try{while(true){
var result__33654__auto__ = switch__33651__auto__.call(null,state_35833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33654__auto__;
}
break;
}
}catch (e35854){if((e35854 instanceof Object)){
var ex__33655__auto__ = e35854;
var statearr_35855_35872 = state_35833;
(statearr_35855_35872[(5)] = ex__33655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35873 = state_35833;
state_35833 = G__35873;
continue;
} else {
return ret_value__33653__auto__;
}
break;
}
});
cljs$core$async$state_machine__33652__auto__ = function(state_35833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33652__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33652__auto____1.call(this,state_35833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33652__auto____0;
cljs$core$async$state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33652__auto____1;
return cljs$core$async$state_machine__33652__auto__;
})()
;})(switch__33651__auto__,c__33763__auto___35861,out))
})();
var state__33765__auto__ = (function (){var statearr_35856 = f__33764__auto__.call(null);
(statearr_35856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33763__auto___35861);

return statearr_35856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33765__auto__);
});})(c__33763__auto___35861,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args35874 = [];
var len__30408__auto___35923 = arguments.length;
var i__30409__auto___35924 = (0);
while(true){
if((i__30409__auto___35924 < len__30408__auto___35923)){
args35874.push((arguments[i__30409__auto___35924]));

var G__35925 = (i__30409__auto___35924 + (1));
i__30409__auto___35924 = G__35925;
continue;
} else {
}
break;
}

var G__35876 = args35874.length;
switch (G__35876) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35874.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33763__auto___35927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33763__auto___35927,out){
return (function (){
var f__33764__auto__ = (function (){var switch__33651__auto__ = ((function (c__33763__auto___35927,out){
return (function (state_35900){
var state_val_35901 = (state_35900[(1)]);
if((state_val_35901 === (7))){
var inst_35882 = (state_35900[(7)]);
var inst_35882__$1 = (state_35900[(2)]);
var inst_35883 = (inst_35882__$1 == null);
var inst_35884 = cljs.core.not.call(null,inst_35883);
var state_35900__$1 = (function (){var statearr_35902 = state_35900;
(statearr_35902[(7)] = inst_35882__$1);

return statearr_35902;
})();
if(inst_35884){
var statearr_35903_35928 = state_35900__$1;
(statearr_35903_35928[(1)] = (8));

} else {
var statearr_35904_35929 = state_35900__$1;
(statearr_35904_35929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (1))){
var inst_35877 = (0);
var state_35900__$1 = (function (){var statearr_35905 = state_35900;
(statearr_35905[(8)] = inst_35877);

return statearr_35905;
})();
var statearr_35906_35930 = state_35900__$1;
(statearr_35906_35930[(2)] = null);

(statearr_35906_35930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (4))){
var state_35900__$1 = state_35900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35900__$1,(7),ch);
} else {
if((state_val_35901 === (6))){
var inst_35895 = (state_35900[(2)]);
var state_35900__$1 = state_35900;
var statearr_35907_35931 = state_35900__$1;
(statearr_35907_35931[(2)] = inst_35895);

(statearr_35907_35931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (3))){
var inst_35897 = (state_35900[(2)]);
var inst_35898 = cljs.core.async.close_BANG_.call(null,out);
var state_35900__$1 = (function (){var statearr_35908 = state_35900;
(statearr_35908[(9)] = inst_35897);

return statearr_35908;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35900__$1,inst_35898);
} else {
if((state_val_35901 === (2))){
var inst_35877 = (state_35900[(8)]);
var inst_35879 = (inst_35877 < n);
var state_35900__$1 = state_35900;
if(cljs.core.truth_(inst_35879)){
var statearr_35909_35932 = state_35900__$1;
(statearr_35909_35932[(1)] = (4));

} else {
var statearr_35910_35933 = state_35900__$1;
(statearr_35910_35933[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (11))){
var inst_35877 = (state_35900[(8)]);
var inst_35887 = (state_35900[(2)]);
var inst_35888 = (inst_35877 + (1));
var inst_35877__$1 = inst_35888;
var state_35900__$1 = (function (){var statearr_35911 = state_35900;
(statearr_35911[(10)] = inst_35887);

(statearr_35911[(8)] = inst_35877__$1);

return statearr_35911;
})();
var statearr_35912_35934 = state_35900__$1;
(statearr_35912_35934[(2)] = null);

(statearr_35912_35934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (9))){
var state_35900__$1 = state_35900;
var statearr_35913_35935 = state_35900__$1;
(statearr_35913_35935[(2)] = null);

(statearr_35913_35935[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (5))){
var state_35900__$1 = state_35900;
var statearr_35914_35936 = state_35900__$1;
(statearr_35914_35936[(2)] = null);

(statearr_35914_35936[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (10))){
var inst_35892 = (state_35900[(2)]);
var state_35900__$1 = state_35900;
var statearr_35915_35937 = state_35900__$1;
(statearr_35915_35937[(2)] = inst_35892);

(statearr_35915_35937[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35901 === (8))){
var inst_35882 = (state_35900[(7)]);
var state_35900__$1 = state_35900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35900__$1,(11),out,inst_35882);
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
});})(c__33763__auto___35927,out))
;
return ((function (switch__33651__auto__,c__33763__auto___35927,out){
return (function() {
var cljs$core$async$state_machine__33652__auto__ = null;
var cljs$core$async$state_machine__33652__auto____0 = (function (){
var statearr_35919 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35919[(0)] = cljs$core$async$state_machine__33652__auto__);

(statearr_35919[(1)] = (1));

return statearr_35919;
});
var cljs$core$async$state_machine__33652__auto____1 = (function (state_35900){
while(true){
var ret_value__33653__auto__ = (function (){try{while(true){
var result__33654__auto__ = switch__33651__auto__.call(null,state_35900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33654__auto__;
}
break;
}
}catch (e35920){if((e35920 instanceof Object)){
var ex__33655__auto__ = e35920;
var statearr_35921_35938 = state_35900;
(statearr_35921_35938[(5)] = ex__33655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35939 = state_35900;
state_35900 = G__35939;
continue;
} else {
return ret_value__33653__auto__;
}
break;
}
});
cljs$core$async$state_machine__33652__auto__ = function(state_35900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33652__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33652__auto____1.call(this,state_35900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33652__auto____0;
cljs$core$async$state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33652__auto____1;
return cljs$core$async$state_machine__33652__auto__;
})()
;})(switch__33651__auto__,c__33763__auto___35927,out))
})();
var state__33765__auto__ = (function (){var statearr_35922 = f__33764__auto__.call(null);
(statearr_35922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33763__auto___35927);

return statearr_35922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33765__auto__);
});})(c__33763__auto___35927,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35947 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35947 = (function (map_LT_,f,ch,meta35948){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35948 = meta35948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35949,meta35948__$1){
var self__ = this;
var _35949__$1 = this;
return (new cljs.core.async.t_cljs$core$async35947(self__.map_LT_,self__.f,self__.ch,meta35948__$1));
});

cljs.core.async.t_cljs$core$async35947.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35949){
var self__ = this;
var _35949__$1 = this;
return self__.meta35948;
});

cljs.core.async.t_cljs$core$async35947.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async35947.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35947.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35947.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async35947.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35950 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35950 = (function (map_LT_,f,ch,meta35948,_,fn1,meta35951){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35948 = meta35948;
this._ = _;
this.fn1 = fn1;
this.meta35951 = meta35951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35952,meta35951__$1){
var self__ = this;
var _35952__$1 = this;
return (new cljs.core.async.t_cljs$core$async35950(self__.map_LT_,self__.f,self__.ch,self__.meta35948,self__._,self__.fn1,meta35951__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35950.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35952){
var self__ = this;
var _35952__$1 = this;
return self__.meta35951;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35950.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35950.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35950.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35950.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35940_SHARP_){
return f1.call(null,(((p1__35940_SHARP_ == null))?null:self__.f.call(null,p1__35940_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35950.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35948","meta35948",-1066010703,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35947","cljs.core.async/t_cljs$core$async35947",1534537200,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35951","meta35951",906825567,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35950.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35950.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35950";

cljs.core.async.t_cljs$core$async35950.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__29945__auto__,writer__29946__auto__,opt__29947__auto__){
return cljs.core._write.call(null,writer__29946__auto__,"cljs.core.async/t_cljs$core$async35950");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35950 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35950(map_LT___$1,f__$1,ch__$1,meta35948__$1,___$2,fn1__$1,meta35951){
return (new cljs.core.async.t_cljs$core$async35950(map_LT___$1,f__$1,ch__$1,meta35948__$1,___$2,fn1__$1,meta35951));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35950(self__.map_LT_,self__.f,self__.ch,self__.meta35948,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__29327__auto__ = ret;
if(cljs.core.truth_(and__29327__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__29327__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35947.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async35947.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35947.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35948","meta35948",-1066010703,null)], null);
});

cljs.core.async.t_cljs$core$async35947.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35947.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35947";

cljs.core.async.t_cljs$core$async35947.cljs$lang$ctorPrWriter = (function (this__29945__auto__,writer__29946__auto__,opt__29947__auto__){
return cljs.core._write.call(null,writer__29946__auto__,"cljs.core.async/t_cljs$core$async35947");
});

cljs.core.async.__GT_t_cljs$core$async35947 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35947(map_LT___$1,f__$1,ch__$1,meta35948){
return (new cljs.core.async.t_cljs$core$async35947(map_LT___$1,f__$1,ch__$1,meta35948));
});

}

return (new cljs.core.async.t_cljs$core$async35947(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35956 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35956 = (function (map_GT_,f,ch,meta35957){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta35957 = meta35957;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35958,meta35957__$1){
var self__ = this;
var _35958__$1 = this;
return (new cljs.core.async.t_cljs$core$async35956(self__.map_GT_,self__.f,self__.ch,meta35957__$1));
});

cljs.core.async.t_cljs$core$async35956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35958){
var self__ = this;
var _35958__$1 = this;
return self__.meta35957;
});

cljs.core.async.t_cljs$core$async35956.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async35956.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35956.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async35956.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35956.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async35956.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35956.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35957","meta35957",841098300,null)], null);
});

cljs.core.async.t_cljs$core$async35956.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35956.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35956";

cljs.core.async.t_cljs$core$async35956.cljs$lang$ctorPrWriter = (function (this__29945__auto__,writer__29946__auto__,opt__29947__auto__){
return cljs.core._write.call(null,writer__29946__auto__,"cljs.core.async/t_cljs$core$async35956");
});

cljs.core.async.__GT_t_cljs$core$async35956 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35956(map_GT___$1,f__$1,ch__$1,meta35957){
return (new cljs.core.async.t_cljs$core$async35956(map_GT___$1,f__$1,ch__$1,meta35957));
});

}

return (new cljs.core.async.t_cljs$core$async35956(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35962 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35962 = (function (filter_GT_,p,ch,meta35963){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta35963 = meta35963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35964,meta35963__$1){
var self__ = this;
var _35964__$1 = this;
return (new cljs.core.async.t_cljs$core$async35962(self__.filter_GT_,self__.p,self__.ch,meta35963__$1));
});

cljs.core.async.t_cljs$core$async35962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35964){
var self__ = this;
var _35964__$1 = this;
return self__.meta35963;
});

cljs.core.async.t_cljs$core$async35962.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async35962.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35962.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35962.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async35962.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35962.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async35962.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35962.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35963","meta35963",646142717,null)], null);
});

cljs.core.async.t_cljs$core$async35962.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35962.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35962";

cljs.core.async.t_cljs$core$async35962.cljs$lang$ctorPrWriter = (function (this__29945__auto__,writer__29946__auto__,opt__29947__auto__){
return cljs.core._write.call(null,writer__29946__auto__,"cljs.core.async/t_cljs$core$async35962");
});

cljs.core.async.__GT_t_cljs$core$async35962 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35962(filter_GT___$1,p__$1,ch__$1,meta35963){
return (new cljs.core.async.t_cljs$core$async35962(filter_GT___$1,p__$1,ch__$1,meta35963));
});

}

return (new cljs.core.async.t_cljs$core$async35962(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args35965 = [];
var len__30408__auto___36009 = arguments.length;
var i__30409__auto___36010 = (0);
while(true){
if((i__30409__auto___36010 < len__30408__auto___36009)){
args35965.push((arguments[i__30409__auto___36010]));

var G__36011 = (i__30409__auto___36010 + (1));
i__30409__auto___36010 = G__36011;
continue;
} else {
}
break;
}

var G__35967 = args35965.length;
switch (G__35967) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35965.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33763__auto___36013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33763__auto___36013,out){
return (function (){
var f__33764__auto__ = (function (){var switch__33651__auto__ = ((function (c__33763__auto___36013,out){
return (function (state_35988){
var state_val_35989 = (state_35988[(1)]);
if((state_val_35989 === (7))){
var inst_35984 = (state_35988[(2)]);
var state_35988__$1 = state_35988;
var statearr_35990_36014 = state_35988__$1;
(statearr_35990_36014[(2)] = inst_35984);

(statearr_35990_36014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35989 === (1))){
var state_35988__$1 = state_35988;
var statearr_35991_36015 = state_35988__$1;
(statearr_35991_36015[(2)] = null);

(statearr_35991_36015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35989 === (4))){
var inst_35970 = (state_35988[(7)]);
var inst_35970__$1 = (state_35988[(2)]);
var inst_35971 = (inst_35970__$1 == null);
var state_35988__$1 = (function (){var statearr_35992 = state_35988;
(statearr_35992[(7)] = inst_35970__$1);

return statearr_35992;
})();
if(cljs.core.truth_(inst_35971)){
var statearr_35993_36016 = state_35988__$1;
(statearr_35993_36016[(1)] = (5));

} else {
var statearr_35994_36017 = state_35988__$1;
(statearr_35994_36017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35989 === (6))){
var inst_35970 = (state_35988[(7)]);
var inst_35975 = p.call(null,inst_35970);
var state_35988__$1 = state_35988;
if(cljs.core.truth_(inst_35975)){
var statearr_35995_36018 = state_35988__$1;
(statearr_35995_36018[(1)] = (8));

} else {
var statearr_35996_36019 = state_35988__$1;
(statearr_35996_36019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35989 === (3))){
var inst_35986 = (state_35988[(2)]);
var state_35988__$1 = state_35988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35988__$1,inst_35986);
} else {
if((state_val_35989 === (2))){
var state_35988__$1 = state_35988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35988__$1,(4),ch);
} else {
if((state_val_35989 === (11))){
var inst_35978 = (state_35988[(2)]);
var state_35988__$1 = state_35988;
var statearr_35997_36020 = state_35988__$1;
(statearr_35997_36020[(2)] = inst_35978);

(statearr_35997_36020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35989 === (9))){
var state_35988__$1 = state_35988;
var statearr_35998_36021 = state_35988__$1;
(statearr_35998_36021[(2)] = null);

(statearr_35998_36021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35989 === (5))){
var inst_35973 = cljs.core.async.close_BANG_.call(null,out);
var state_35988__$1 = state_35988;
var statearr_35999_36022 = state_35988__$1;
(statearr_35999_36022[(2)] = inst_35973);

(statearr_35999_36022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35989 === (10))){
var inst_35981 = (state_35988[(2)]);
var state_35988__$1 = (function (){var statearr_36000 = state_35988;
(statearr_36000[(8)] = inst_35981);

return statearr_36000;
})();
var statearr_36001_36023 = state_35988__$1;
(statearr_36001_36023[(2)] = null);

(statearr_36001_36023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35989 === (8))){
var inst_35970 = (state_35988[(7)]);
var state_35988__$1 = state_35988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35988__$1,(11),out,inst_35970);
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
});})(c__33763__auto___36013,out))
;
return ((function (switch__33651__auto__,c__33763__auto___36013,out){
return (function() {
var cljs$core$async$state_machine__33652__auto__ = null;
var cljs$core$async$state_machine__33652__auto____0 = (function (){
var statearr_36005 = [null,null,null,null,null,null,null,null,null];
(statearr_36005[(0)] = cljs$core$async$state_machine__33652__auto__);

(statearr_36005[(1)] = (1));

return statearr_36005;
});
var cljs$core$async$state_machine__33652__auto____1 = (function (state_35988){
while(true){
var ret_value__33653__auto__ = (function (){try{while(true){
var result__33654__auto__ = switch__33651__auto__.call(null,state_35988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33654__auto__;
}
break;
}
}catch (e36006){if((e36006 instanceof Object)){
var ex__33655__auto__ = e36006;
var statearr_36007_36024 = state_35988;
(statearr_36007_36024[(5)] = ex__33655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36025 = state_35988;
state_35988 = G__36025;
continue;
} else {
return ret_value__33653__auto__;
}
break;
}
});
cljs$core$async$state_machine__33652__auto__ = function(state_35988){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33652__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33652__auto____1.call(this,state_35988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33652__auto____0;
cljs$core$async$state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33652__auto____1;
return cljs$core$async$state_machine__33652__auto__;
})()
;})(switch__33651__auto__,c__33763__auto___36013,out))
})();
var state__33765__auto__ = (function (){var statearr_36008 = f__33764__auto__.call(null);
(statearr_36008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33763__auto___36013);

return statearr_36008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33765__auto__);
});})(c__33763__auto___36013,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args36026 = [];
var len__30408__auto___36029 = arguments.length;
var i__30409__auto___36030 = (0);
while(true){
if((i__30409__auto___36030 < len__30408__auto___36029)){
args36026.push((arguments[i__30409__auto___36030]));

var G__36031 = (i__30409__auto___36030 + (1));
i__30409__auto___36030 = G__36031;
continue;
} else {
}
break;
}

var G__36028 = args36026.length;
switch (G__36028) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36026.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33763__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33763__auto__){
return (function (){
var f__33764__auto__ = (function (){var switch__33651__auto__ = ((function (c__33763__auto__){
return (function (state_36198){
var state_val_36199 = (state_36198[(1)]);
if((state_val_36199 === (7))){
var inst_36194 = (state_36198[(2)]);
var state_36198__$1 = state_36198;
var statearr_36200_36241 = state_36198__$1;
(statearr_36200_36241[(2)] = inst_36194);

(statearr_36200_36241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36199 === (20))){
var inst_36164 = (state_36198[(7)]);
var inst_36175 = (state_36198[(2)]);
var inst_36176 = cljs.core.next.call(null,inst_36164);
var inst_36150 = inst_36176;
var inst_36151 = null;
var inst_36152 = (0);
var inst_36153 = (0);
var state_36198__$1 = (function (){var statearr_36201 = state_36198;
(statearr_36201[(8)] = inst_36175);

(statearr_36201[(9)] = inst_36152);

(statearr_36201[(10)] = inst_36150);

(statearr_36201[(11)] = inst_36153);

(statearr_36201[(12)] = inst_36151);

return statearr_36201;
})();
var statearr_36202_36242 = state_36198__$1;
(statearr_36202_36242[(2)] = null);

(statearr_36202_36242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36199 === (1))){
var state_36198__$1 = state_36198;
var statearr_36203_36243 = state_36198__$1;
(statearr_36203_36243[(2)] = null);

(statearr_36203_36243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36199 === (4))){
var inst_36139 = (state_36198[(13)]);
var inst_36139__$1 = (state_36198[(2)]);
var inst_36140 = (inst_36139__$1 == null);
var state_36198__$1 = (function (){var statearr_36204 = state_36198;
(statearr_36204[(13)] = inst_36139__$1);

return statearr_36204;
})();
if(cljs.core.truth_(inst_36140)){
var statearr_36205_36244 = state_36198__$1;
(statearr_36205_36244[(1)] = (5));

} else {
var statearr_36206_36245 = state_36198__$1;
(statearr_36206_36245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36199 === (15))){
var state_36198__$1 = state_36198;
var statearr_36210_36246 = state_36198__$1;
(statearr_36210_36246[(2)] = null);

(statearr_36210_36246[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36199 === (21))){
var state_36198__$1 = state_36198;
var statearr_36211_36247 = state_36198__$1;
(statearr_36211_36247[(2)] = null);

(statearr_36211_36247[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36199 === (13))){
var inst_36152 = (state_36198[(9)]);
var inst_36150 = (state_36198[(10)]);
var inst_36153 = (state_36198[(11)]);
var inst_36151 = (state_36198[(12)]);
var inst_36160 = (state_36198[(2)]);
var inst_36161 = (inst_36153 + (1));
var tmp36207 = inst_36152;
var tmp36208 = inst_36150;
var tmp36209 = inst_36151;
var inst_36150__$1 = tmp36208;
var inst_36151__$1 = tmp36209;
var inst_36152__$1 = tmp36207;
var inst_36153__$1 = inst_36161;
var state_36198__$1 = (function (){var statearr_36212 = state_36198;
(statearr_36212[(9)] = inst_36152__$1);

(statearr_36212[(10)] = inst_36150__$1);

(statearr_36212[(14)] = inst_36160);

(statearr_36212[(11)] = inst_36153__$1);

(statearr_36212[(12)] = inst_36151__$1);

return statearr_36212;
})();
var statearr_36213_36248 = state_36198__$1;
(statearr_36213_36248[(2)] = null);

(statearr_36213_36248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36199 === (22))){
var state_36198__$1 = state_36198;
var statearr_36214_36249 = state_36198__$1;
(statearr_36214_36249[(2)] = null);

(statearr_36214_36249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36199 === (6))){
var inst_36139 = (state_36198[(13)]);
var inst_36148 = f.call(null,inst_36139);
var inst_36149 = cljs.core.seq.call(null,inst_36148);
var inst_36150 = inst_36149;
var inst_36151 = null;
var inst_36152 = (0);
var inst_36153 = (0);
var state_36198__$1 = (function (){var statearr_36215 = state_36198;
(statearr_36215[(9)] = inst_36152);

(statearr_36215[(10)] = inst_36150);

(statearr_36215[(11)] = inst_36153);

(statearr_36215[(12)] = inst_36151);

return statearr_36215;
})();
var statearr_36216_36250 = state_36198__$1;
(statearr_36216_36250[(2)] = null);

(statearr_36216_36250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36199 === (17))){
var inst_36164 = (state_36198[(7)]);
var inst_36168 = cljs.core.chunk_first.call(null,inst_36164);
var inst_36169 = cljs.core.chunk_rest.call(null,inst_36164);
var inst_36170 = cljs.core.count.call(null,inst_36168);
var inst_36150 = inst_36169;
var inst_36151 = inst_36168;
var inst_36152 = inst_36170;
var inst_36153 = (0);
var state_36198__$1 = (function (){var statearr_36217 = state_36198;
(statearr_36217[(9)] = inst_36152);

(statearr_36217[(10)] = inst_36150);

(statearr_36217[(11)] = inst_36153);

(statearr_36217[(12)] = inst_36151);

return statearr_36217;
})();
var statearr_36218_36251 = state_36198__$1;
(statearr_36218_36251[(2)] = null);

(statearr_36218_36251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36199 === (3))){
var inst_36196 = (state_36198[(2)]);
var state_36198__$1 = state_36198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36198__$1,inst_36196);
} else {
if((state_val_36199 === (12))){
var inst_36184 = (state_36198[(2)]);
var state_36198__$1 = state_36198;
var statearr_36219_36252 = state_36198__$1;
(statearr_36219_36252[(2)] = inst_36184);

(statearr_36219_36252[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36199 === (2))){
var state_36198__$1 = state_36198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36198__$1,(4),in$);
} else {
if((state_val_36199 === (23))){
var inst_36192 = (state_36198[(2)]);
var state_36198__$1 = state_36198;
var statearr_36220_36253 = state_36198__$1;
(statearr_36220_36253[(2)] = inst_36192);

(statearr_36220_36253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36199 === (19))){
var inst_36179 = (state_36198[(2)]);
var state_36198__$1 = state_36198;
var statearr_36221_36254 = state_36198__$1;
(statearr_36221_36254[(2)] = inst_36179);

(statearr_36221_36254[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36199 === (11))){
var inst_36150 = (state_36198[(10)]);
var inst_36164 = (state_36198[(7)]);
var inst_36164__$1 = cljs.core.seq.call(null,inst_36150);
var state_36198__$1 = (function (){var statearr_36222 = state_36198;
(statearr_36222[(7)] = inst_36164__$1);

return statearr_36222;
})();
if(inst_36164__$1){
var statearr_36223_36255 = state_36198__$1;
(statearr_36223_36255[(1)] = (14));

} else {
var statearr_36224_36256 = state_36198__$1;
(statearr_36224_36256[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36199 === (9))){
var inst_36186 = (state_36198[(2)]);
var inst_36187 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36198__$1 = (function (){var statearr_36225 = state_36198;
(statearr_36225[(15)] = inst_36186);

return statearr_36225;
})();
if(cljs.core.truth_(inst_36187)){
var statearr_36226_36257 = state_36198__$1;
(statearr_36226_36257[(1)] = (21));

} else {
var statearr_36227_36258 = state_36198__$1;
(statearr_36227_36258[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36199 === (5))){
var inst_36142 = cljs.core.async.close_BANG_.call(null,out);
var state_36198__$1 = state_36198;
var statearr_36228_36259 = state_36198__$1;
(statearr_36228_36259[(2)] = inst_36142);

(statearr_36228_36259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36199 === (14))){
var inst_36164 = (state_36198[(7)]);
var inst_36166 = cljs.core.chunked_seq_QMARK_.call(null,inst_36164);
var state_36198__$1 = state_36198;
if(inst_36166){
var statearr_36229_36260 = state_36198__$1;
(statearr_36229_36260[(1)] = (17));

} else {
var statearr_36230_36261 = state_36198__$1;
(statearr_36230_36261[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36199 === (16))){
var inst_36182 = (state_36198[(2)]);
var state_36198__$1 = state_36198;
var statearr_36231_36262 = state_36198__$1;
(statearr_36231_36262[(2)] = inst_36182);

(statearr_36231_36262[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36199 === (10))){
var inst_36153 = (state_36198[(11)]);
var inst_36151 = (state_36198[(12)]);
var inst_36158 = cljs.core._nth.call(null,inst_36151,inst_36153);
var state_36198__$1 = state_36198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36198__$1,(13),out,inst_36158);
} else {
if((state_val_36199 === (18))){
var inst_36164 = (state_36198[(7)]);
var inst_36173 = cljs.core.first.call(null,inst_36164);
var state_36198__$1 = state_36198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36198__$1,(20),out,inst_36173);
} else {
if((state_val_36199 === (8))){
var inst_36152 = (state_36198[(9)]);
var inst_36153 = (state_36198[(11)]);
var inst_36155 = (inst_36153 < inst_36152);
var inst_36156 = inst_36155;
var state_36198__$1 = state_36198;
if(cljs.core.truth_(inst_36156)){
var statearr_36232_36263 = state_36198__$1;
(statearr_36232_36263[(1)] = (10));

} else {
var statearr_36233_36264 = state_36198__$1;
(statearr_36233_36264[(1)] = (11));

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
});})(c__33763__auto__))
;
return ((function (switch__33651__auto__,c__33763__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33652__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33652__auto____0 = (function (){
var statearr_36237 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36237[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33652__auto__);

(statearr_36237[(1)] = (1));

return statearr_36237;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33652__auto____1 = (function (state_36198){
while(true){
var ret_value__33653__auto__ = (function (){try{while(true){
var result__33654__auto__ = switch__33651__auto__.call(null,state_36198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33654__auto__;
}
break;
}
}catch (e36238){if((e36238 instanceof Object)){
var ex__33655__auto__ = e36238;
var statearr_36239_36265 = state_36198;
(statearr_36239_36265[(5)] = ex__33655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36266 = state_36198;
state_36198 = G__36266;
continue;
} else {
return ret_value__33653__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33652__auto__ = function(state_36198){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33652__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33652__auto____1.call(this,state_36198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33652__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33652__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33652__auto__;
})()
;})(switch__33651__auto__,c__33763__auto__))
})();
var state__33765__auto__ = (function (){var statearr_36240 = f__33764__auto__.call(null);
(statearr_36240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33763__auto__);

return statearr_36240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33765__auto__);
});})(c__33763__auto__))
);

return c__33763__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args36267 = [];
var len__30408__auto___36270 = arguments.length;
var i__30409__auto___36271 = (0);
while(true){
if((i__30409__auto___36271 < len__30408__auto___36270)){
args36267.push((arguments[i__30409__auto___36271]));

var G__36272 = (i__30409__auto___36271 + (1));
i__30409__auto___36271 = G__36272;
continue;
} else {
}
break;
}

var G__36269 = args36267.length;
switch (G__36269) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36267.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args36274 = [];
var len__30408__auto___36277 = arguments.length;
var i__30409__auto___36278 = (0);
while(true){
if((i__30409__auto___36278 < len__30408__auto___36277)){
args36274.push((arguments[i__30409__auto___36278]));

var G__36279 = (i__30409__auto___36278 + (1));
i__30409__auto___36278 = G__36279;
continue;
} else {
}
break;
}

var G__36276 = args36274.length;
switch (G__36276) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36274.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args36281 = [];
var len__30408__auto___36332 = arguments.length;
var i__30409__auto___36333 = (0);
while(true){
if((i__30409__auto___36333 < len__30408__auto___36332)){
args36281.push((arguments[i__30409__auto___36333]));

var G__36334 = (i__30409__auto___36333 + (1));
i__30409__auto___36333 = G__36334;
continue;
} else {
}
break;
}

var G__36283 = args36281.length;
switch (G__36283) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36281.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33763__auto___36336 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33763__auto___36336,out){
return (function (){
var f__33764__auto__ = (function (){var switch__33651__auto__ = ((function (c__33763__auto___36336,out){
return (function (state_36307){
var state_val_36308 = (state_36307[(1)]);
if((state_val_36308 === (7))){
var inst_36302 = (state_36307[(2)]);
var state_36307__$1 = state_36307;
var statearr_36309_36337 = state_36307__$1;
(statearr_36309_36337[(2)] = inst_36302);

(statearr_36309_36337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36308 === (1))){
var inst_36284 = null;
var state_36307__$1 = (function (){var statearr_36310 = state_36307;
(statearr_36310[(7)] = inst_36284);

return statearr_36310;
})();
var statearr_36311_36338 = state_36307__$1;
(statearr_36311_36338[(2)] = null);

(statearr_36311_36338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36308 === (4))){
var inst_36287 = (state_36307[(8)]);
var inst_36287__$1 = (state_36307[(2)]);
var inst_36288 = (inst_36287__$1 == null);
var inst_36289 = cljs.core.not.call(null,inst_36288);
var state_36307__$1 = (function (){var statearr_36312 = state_36307;
(statearr_36312[(8)] = inst_36287__$1);

return statearr_36312;
})();
if(inst_36289){
var statearr_36313_36339 = state_36307__$1;
(statearr_36313_36339[(1)] = (5));

} else {
var statearr_36314_36340 = state_36307__$1;
(statearr_36314_36340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36308 === (6))){
var state_36307__$1 = state_36307;
var statearr_36315_36341 = state_36307__$1;
(statearr_36315_36341[(2)] = null);

(statearr_36315_36341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36308 === (3))){
var inst_36304 = (state_36307[(2)]);
var inst_36305 = cljs.core.async.close_BANG_.call(null,out);
var state_36307__$1 = (function (){var statearr_36316 = state_36307;
(statearr_36316[(9)] = inst_36304);

return statearr_36316;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36307__$1,inst_36305);
} else {
if((state_val_36308 === (2))){
var state_36307__$1 = state_36307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36307__$1,(4),ch);
} else {
if((state_val_36308 === (11))){
var inst_36287 = (state_36307[(8)]);
var inst_36296 = (state_36307[(2)]);
var inst_36284 = inst_36287;
var state_36307__$1 = (function (){var statearr_36317 = state_36307;
(statearr_36317[(7)] = inst_36284);

(statearr_36317[(10)] = inst_36296);

return statearr_36317;
})();
var statearr_36318_36342 = state_36307__$1;
(statearr_36318_36342[(2)] = null);

(statearr_36318_36342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36308 === (9))){
var inst_36287 = (state_36307[(8)]);
var state_36307__$1 = state_36307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36307__$1,(11),out,inst_36287);
} else {
if((state_val_36308 === (5))){
var inst_36284 = (state_36307[(7)]);
var inst_36287 = (state_36307[(8)]);
var inst_36291 = cljs.core._EQ_.call(null,inst_36287,inst_36284);
var state_36307__$1 = state_36307;
if(inst_36291){
var statearr_36320_36343 = state_36307__$1;
(statearr_36320_36343[(1)] = (8));

} else {
var statearr_36321_36344 = state_36307__$1;
(statearr_36321_36344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36308 === (10))){
var inst_36299 = (state_36307[(2)]);
var state_36307__$1 = state_36307;
var statearr_36322_36345 = state_36307__$1;
(statearr_36322_36345[(2)] = inst_36299);

(statearr_36322_36345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36308 === (8))){
var inst_36284 = (state_36307[(7)]);
var tmp36319 = inst_36284;
var inst_36284__$1 = tmp36319;
var state_36307__$1 = (function (){var statearr_36323 = state_36307;
(statearr_36323[(7)] = inst_36284__$1);

return statearr_36323;
})();
var statearr_36324_36346 = state_36307__$1;
(statearr_36324_36346[(2)] = null);

(statearr_36324_36346[(1)] = (2));


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
});})(c__33763__auto___36336,out))
;
return ((function (switch__33651__auto__,c__33763__auto___36336,out){
return (function() {
var cljs$core$async$state_machine__33652__auto__ = null;
var cljs$core$async$state_machine__33652__auto____0 = (function (){
var statearr_36328 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36328[(0)] = cljs$core$async$state_machine__33652__auto__);

(statearr_36328[(1)] = (1));

return statearr_36328;
});
var cljs$core$async$state_machine__33652__auto____1 = (function (state_36307){
while(true){
var ret_value__33653__auto__ = (function (){try{while(true){
var result__33654__auto__ = switch__33651__auto__.call(null,state_36307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33654__auto__;
}
break;
}
}catch (e36329){if((e36329 instanceof Object)){
var ex__33655__auto__ = e36329;
var statearr_36330_36347 = state_36307;
(statearr_36330_36347[(5)] = ex__33655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36348 = state_36307;
state_36307 = G__36348;
continue;
} else {
return ret_value__33653__auto__;
}
break;
}
});
cljs$core$async$state_machine__33652__auto__ = function(state_36307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33652__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33652__auto____1.call(this,state_36307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33652__auto____0;
cljs$core$async$state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33652__auto____1;
return cljs$core$async$state_machine__33652__auto__;
})()
;})(switch__33651__auto__,c__33763__auto___36336,out))
})();
var state__33765__auto__ = (function (){var statearr_36331 = f__33764__auto__.call(null);
(statearr_36331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33763__auto___36336);

return statearr_36331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33765__auto__);
});})(c__33763__auto___36336,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args36349 = [];
var len__30408__auto___36419 = arguments.length;
var i__30409__auto___36420 = (0);
while(true){
if((i__30409__auto___36420 < len__30408__auto___36419)){
args36349.push((arguments[i__30409__auto___36420]));

var G__36421 = (i__30409__auto___36420 + (1));
i__30409__auto___36420 = G__36421;
continue;
} else {
}
break;
}

var G__36351 = args36349.length;
switch (G__36351) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36349.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33763__auto___36423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33763__auto___36423,out){
return (function (){
var f__33764__auto__ = (function (){var switch__33651__auto__ = ((function (c__33763__auto___36423,out){
return (function (state_36389){
var state_val_36390 = (state_36389[(1)]);
if((state_val_36390 === (7))){
var inst_36385 = (state_36389[(2)]);
var state_36389__$1 = state_36389;
var statearr_36391_36424 = state_36389__$1;
(statearr_36391_36424[(2)] = inst_36385);

(statearr_36391_36424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (1))){
var inst_36352 = (new Array(n));
var inst_36353 = inst_36352;
var inst_36354 = (0);
var state_36389__$1 = (function (){var statearr_36392 = state_36389;
(statearr_36392[(7)] = inst_36353);

(statearr_36392[(8)] = inst_36354);

return statearr_36392;
})();
var statearr_36393_36425 = state_36389__$1;
(statearr_36393_36425[(2)] = null);

(statearr_36393_36425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (4))){
var inst_36357 = (state_36389[(9)]);
var inst_36357__$1 = (state_36389[(2)]);
var inst_36358 = (inst_36357__$1 == null);
var inst_36359 = cljs.core.not.call(null,inst_36358);
var state_36389__$1 = (function (){var statearr_36394 = state_36389;
(statearr_36394[(9)] = inst_36357__$1);

return statearr_36394;
})();
if(inst_36359){
var statearr_36395_36426 = state_36389__$1;
(statearr_36395_36426[(1)] = (5));

} else {
var statearr_36396_36427 = state_36389__$1;
(statearr_36396_36427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (15))){
var inst_36379 = (state_36389[(2)]);
var state_36389__$1 = state_36389;
var statearr_36397_36428 = state_36389__$1;
(statearr_36397_36428[(2)] = inst_36379);

(statearr_36397_36428[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (13))){
var state_36389__$1 = state_36389;
var statearr_36398_36429 = state_36389__$1;
(statearr_36398_36429[(2)] = null);

(statearr_36398_36429[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (6))){
var inst_36354 = (state_36389[(8)]);
var inst_36375 = (inst_36354 > (0));
var state_36389__$1 = state_36389;
if(cljs.core.truth_(inst_36375)){
var statearr_36399_36430 = state_36389__$1;
(statearr_36399_36430[(1)] = (12));

} else {
var statearr_36400_36431 = state_36389__$1;
(statearr_36400_36431[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (3))){
var inst_36387 = (state_36389[(2)]);
var state_36389__$1 = state_36389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36389__$1,inst_36387);
} else {
if((state_val_36390 === (12))){
var inst_36353 = (state_36389[(7)]);
var inst_36377 = cljs.core.vec.call(null,inst_36353);
var state_36389__$1 = state_36389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36389__$1,(15),out,inst_36377);
} else {
if((state_val_36390 === (2))){
var state_36389__$1 = state_36389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36389__$1,(4),ch);
} else {
if((state_val_36390 === (11))){
var inst_36369 = (state_36389[(2)]);
var inst_36370 = (new Array(n));
var inst_36353 = inst_36370;
var inst_36354 = (0);
var state_36389__$1 = (function (){var statearr_36401 = state_36389;
(statearr_36401[(10)] = inst_36369);

(statearr_36401[(7)] = inst_36353);

(statearr_36401[(8)] = inst_36354);

return statearr_36401;
})();
var statearr_36402_36432 = state_36389__$1;
(statearr_36402_36432[(2)] = null);

(statearr_36402_36432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (9))){
var inst_36353 = (state_36389[(7)]);
var inst_36367 = cljs.core.vec.call(null,inst_36353);
var state_36389__$1 = state_36389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36389__$1,(11),out,inst_36367);
} else {
if((state_val_36390 === (5))){
var inst_36357 = (state_36389[(9)]);
var inst_36362 = (state_36389[(11)]);
var inst_36353 = (state_36389[(7)]);
var inst_36354 = (state_36389[(8)]);
var inst_36361 = (inst_36353[inst_36354] = inst_36357);
var inst_36362__$1 = (inst_36354 + (1));
var inst_36363 = (inst_36362__$1 < n);
var state_36389__$1 = (function (){var statearr_36403 = state_36389;
(statearr_36403[(11)] = inst_36362__$1);

(statearr_36403[(12)] = inst_36361);

return statearr_36403;
})();
if(cljs.core.truth_(inst_36363)){
var statearr_36404_36433 = state_36389__$1;
(statearr_36404_36433[(1)] = (8));

} else {
var statearr_36405_36434 = state_36389__$1;
(statearr_36405_36434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (14))){
var inst_36382 = (state_36389[(2)]);
var inst_36383 = cljs.core.async.close_BANG_.call(null,out);
var state_36389__$1 = (function (){var statearr_36407 = state_36389;
(statearr_36407[(13)] = inst_36382);

return statearr_36407;
})();
var statearr_36408_36435 = state_36389__$1;
(statearr_36408_36435[(2)] = inst_36383);

(statearr_36408_36435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (10))){
var inst_36373 = (state_36389[(2)]);
var state_36389__$1 = state_36389;
var statearr_36409_36436 = state_36389__$1;
(statearr_36409_36436[(2)] = inst_36373);

(statearr_36409_36436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36390 === (8))){
var inst_36362 = (state_36389[(11)]);
var inst_36353 = (state_36389[(7)]);
var tmp36406 = inst_36353;
var inst_36353__$1 = tmp36406;
var inst_36354 = inst_36362;
var state_36389__$1 = (function (){var statearr_36410 = state_36389;
(statearr_36410[(7)] = inst_36353__$1);

(statearr_36410[(8)] = inst_36354);

return statearr_36410;
})();
var statearr_36411_36437 = state_36389__$1;
(statearr_36411_36437[(2)] = null);

(statearr_36411_36437[(1)] = (2));


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
});})(c__33763__auto___36423,out))
;
return ((function (switch__33651__auto__,c__33763__auto___36423,out){
return (function() {
var cljs$core$async$state_machine__33652__auto__ = null;
var cljs$core$async$state_machine__33652__auto____0 = (function (){
var statearr_36415 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36415[(0)] = cljs$core$async$state_machine__33652__auto__);

(statearr_36415[(1)] = (1));

return statearr_36415;
});
var cljs$core$async$state_machine__33652__auto____1 = (function (state_36389){
while(true){
var ret_value__33653__auto__ = (function (){try{while(true){
var result__33654__auto__ = switch__33651__auto__.call(null,state_36389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33654__auto__;
}
break;
}
}catch (e36416){if((e36416 instanceof Object)){
var ex__33655__auto__ = e36416;
var statearr_36417_36438 = state_36389;
(statearr_36417_36438[(5)] = ex__33655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36439 = state_36389;
state_36389 = G__36439;
continue;
} else {
return ret_value__33653__auto__;
}
break;
}
});
cljs$core$async$state_machine__33652__auto__ = function(state_36389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33652__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33652__auto____1.call(this,state_36389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33652__auto____0;
cljs$core$async$state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33652__auto____1;
return cljs$core$async$state_machine__33652__auto__;
})()
;})(switch__33651__auto__,c__33763__auto___36423,out))
})();
var state__33765__auto__ = (function (){var statearr_36418 = f__33764__auto__.call(null);
(statearr_36418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33763__auto___36423);

return statearr_36418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33765__auto__);
});})(c__33763__auto___36423,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args36440 = [];
var len__30408__auto___36514 = arguments.length;
var i__30409__auto___36515 = (0);
while(true){
if((i__30409__auto___36515 < len__30408__auto___36514)){
args36440.push((arguments[i__30409__auto___36515]));

var G__36516 = (i__30409__auto___36515 + (1));
i__30409__auto___36515 = G__36516;
continue;
} else {
}
break;
}

var G__36442 = args36440.length;
switch (G__36442) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36440.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33763__auto___36518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33763__auto___36518,out){
return (function (){
var f__33764__auto__ = (function (){var switch__33651__auto__ = ((function (c__33763__auto___36518,out){
return (function (state_36484){
var state_val_36485 = (state_36484[(1)]);
if((state_val_36485 === (7))){
var inst_36480 = (state_36484[(2)]);
var state_36484__$1 = state_36484;
var statearr_36486_36519 = state_36484__$1;
(statearr_36486_36519[(2)] = inst_36480);

(statearr_36486_36519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (1))){
var inst_36443 = [];
var inst_36444 = inst_36443;
var inst_36445 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36484__$1 = (function (){var statearr_36487 = state_36484;
(statearr_36487[(7)] = inst_36445);

(statearr_36487[(8)] = inst_36444);

return statearr_36487;
})();
var statearr_36488_36520 = state_36484__$1;
(statearr_36488_36520[(2)] = null);

(statearr_36488_36520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (4))){
var inst_36448 = (state_36484[(9)]);
var inst_36448__$1 = (state_36484[(2)]);
var inst_36449 = (inst_36448__$1 == null);
var inst_36450 = cljs.core.not.call(null,inst_36449);
var state_36484__$1 = (function (){var statearr_36489 = state_36484;
(statearr_36489[(9)] = inst_36448__$1);

return statearr_36489;
})();
if(inst_36450){
var statearr_36490_36521 = state_36484__$1;
(statearr_36490_36521[(1)] = (5));

} else {
var statearr_36491_36522 = state_36484__$1;
(statearr_36491_36522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (15))){
var inst_36474 = (state_36484[(2)]);
var state_36484__$1 = state_36484;
var statearr_36492_36523 = state_36484__$1;
(statearr_36492_36523[(2)] = inst_36474);

(statearr_36492_36523[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (13))){
var state_36484__$1 = state_36484;
var statearr_36493_36524 = state_36484__$1;
(statearr_36493_36524[(2)] = null);

(statearr_36493_36524[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (6))){
var inst_36444 = (state_36484[(8)]);
var inst_36469 = inst_36444.length;
var inst_36470 = (inst_36469 > (0));
var state_36484__$1 = state_36484;
if(cljs.core.truth_(inst_36470)){
var statearr_36494_36525 = state_36484__$1;
(statearr_36494_36525[(1)] = (12));

} else {
var statearr_36495_36526 = state_36484__$1;
(statearr_36495_36526[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (3))){
var inst_36482 = (state_36484[(2)]);
var state_36484__$1 = state_36484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36484__$1,inst_36482);
} else {
if((state_val_36485 === (12))){
var inst_36444 = (state_36484[(8)]);
var inst_36472 = cljs.core.vec.call(null,inst_36444);
var state_36484__$1 = state_36484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36484__$1,(15),out,inst_36472);
} else {
if((state_val_36485 === (2))){
var state_36484__$1 = state_36484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36484__$1,(4),ch);
} else {
if((state_val_36485 === (11))){
var inst_36452 = (state_36484[(10)]);
var inst_36448 = (state_36484[(9)]);
var inst_36462 = (state_36484[(2)]);
var inst_36463 = [];
var inst_36464 = inst_36463.push(inst_36448);
var inst_36444 = inst_36463;
var inst_36445 = inst_36452;
var state_36484__$1 = (function (){var statearr_36496 = state_36484;
(statearr_36496[(7)] = inst_36445);

(statearr_36496[(8)] = inst_36444);

(statearr_36496[(11)] = inst_36462);

(statearr_36496[(12)] = inst_36464);

return statearr_36496;
})();
var statearr_36497_36527 = state_36484__$1;
(statearr_36497_36527[(2)] = null);

(statearr_36497_36527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (9))){
var inst_36444 = (state_36484[(8)]);
var inst_36460 = cljs.core.vec.call(null,inst_36444);
var state_36484__$1 = state_36484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36484__$1,(11),out,inst_36460);
} else {
if((state_val_36485 === (5))){
var inst_36445 = (state_36484[(7)]);
var inst_36452 = (state_36484[(10)]);
var inst_36448 = (state_36484[(9)]);
var inst_36452__$1 = f.call(null,inst_36448);
var inst_36453 = cljs.core._EQ_.call(null,inst_36452__$1,inst_36445);
var inst_36454 = cljs.core.keyword_identical_QMARK_.call(null,inst_36445,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36455 = (inst_36453) || (inst_36454);
var state_36484__$1 = (function (){var statearr_36498 = state_36484;
(statearr_36498[(10)] = inst_36452__$1);

return statearr_36498;
})();
if(cljs.core.truth_(inst_36455)){
var statearr_36499_36528 = state_36484__$1;
(statearr_36499_36528[(1)] = (8));

} else {
var statearr_36500_36529 = state_36484__$1;
(statearr_36500_36529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (14))){
var inst_36477 = (state_36484[(2)]);
var inst_36478 = cljs.core.async.close_BANG_.call(null,out);
var state_36484__$1 = (function (){var statearr_36502 = state_36484;
(statearr_36502[(13)] = inst_36477);

return statearr_36502;
})();
var statearr_36503_36530 = state_36484__$1;
(statearr_36503_36530[(2)] = inst_36478);

(statearr_36503_36530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (10))){
var inst_36467 = (state_36484[(2)]);
var state_36484__$1 = state_36484;
var statearr_36504_36531 = state_36484__$1;
(statearr_36504_36531[(2)] = inst_36467);

(statearr_36504_36531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36485 === (8))){
var inst_36444 = (state_36484[(8)]);
var inst_36452 = (state_36484[(10)]);
var inst_36448 = (state_36484[(9)]);
var inst_36457 = inst_36444.push(inst_36448);
var tmp36501 = inst_36444;
var inst_36444__$1 = tmp36501;
var inst_36445 = inst_36452;
var state_36484__$1 = (function (){var statearr_36505 = state_36484;
(statearr_36505[(7)] = inst_36445);

(statearr_36505[(8)] = inst_36444__$1);

(statearr_36505[(14)] = inst_36457);

return statearr_36505;
})();
var statearr_36506_36532 = state_36484__$1;
(statearr_36506_36532[(2)] = null);

(statearr_36506_36532[(1)] = (2));


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
});})(c__33763__auto___36518,out))
;
return ((function (switch__33651__auto__,c__33763__auto___36518,out){
return (function() {
var cljs$core$async$state_machine__33652__auto__ = null;
var cljs$core$async$state_machine__33652__auto____0 = (function (){
var statearr_36510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36510[(0)] = cljs$core$async$state_machine__33652__auto__);

(statearr_36510[(1)] = (1));

return statearr_36510;
});
var cljs$core$async$state_machine__33652__auto____1 = (function (state_36484){
while(true){
var ret_value__33653__auto__ = (function (){try{while(true){
var result__33654__auto__ = switch__33651__auto__.call(null,state_36484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33654__auto__;
}
break;
}
}catch (e36511){if((e36511 instanceof Object)){
var ex__33655__auto__ = e36511;
var statearr_36512_36533 = state_36484;
(statearr_36512_36533[(5)] = ex__33655__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36534 = state_36484;
state_36484 = G__36534;
continue;
} else {
return ret_value__33653__auto__;
}
break;
}
});
cljs$core$async$state_machine__33652__auto__ = function(state_36484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33652__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33652__auto____1.call(this,state_36484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33652__auto____0;
cljs$core$async$state_machine__33652__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33652__auto____1;
return cljs$core$async$state_machine__33652__auto__;
})()
;})(switch__33651__auto__,c__33763__auto___36518,out))
})();
var state__33765__auto__ = (function (){var statearr_36513 = f__33764__auto__.call(null);
(statearr_36513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33763__auto___36518);

return statearr_36513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33765__auto__);
});})(c__33763__auto___36518,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map