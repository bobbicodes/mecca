// Compiled by ClojureScript 1.10.339 {}
goog.provide('rewrite_clj.zip.editz');
goog.require('cljs.core');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.move');
goog.require('rewrite_clj.zip.removez');
goog.require('rewrite_clj.zip.utils');
goog.require('rewrite_clj.zip.whitespace');
goog.require('rewrite_clj.node');
goog.require('clojure.zip');
/**
 * Replace the node at the given location with one representing
 * the given value. (The value will be coerced to a node if
 * possible.)
 */
rewrite_clj.zip.editz.replace = (function rewrite_clj$zip$editz$replace(zloc,value){
return clojure.zip.replace.call(null,zloc,rewrite_clj.node.coerce.call(null,value));
});
/**
 * Create s-expression from node, apply the function and create
 * node from the result.
 */
rewrite_clj.zip.editz.edit_node = (function rewrite_clj$zip$editz$edit_node(node,f){
return rewrite_clj.node.coerce.call(null,f.call(null,rewrite_clj.node.sexpr.call(null,node)));
});
/**
 * Apply the given function to the s-expression at the given
 * location, using its result to replace the node there. (The
 * result will be coerced to a node if possible.)
 */
rewrite_clj.zip.editz.edit = (function rewrite_clj$zip$editz$edit(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11062 = arguments.length;
var i__4532__auto___11063 = (0);
while(true){
if((i__4532__auto___11063 < len__4531__auto___11062)){
args__4534__auto__.push((arguments[i__4532__auto___11063]));

var G__11064 = (i__4532__auto___11063 + (1));
i__4532__auto___11063 = G__11064;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return rewrite_clj.zip.editz.edit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

rewrite_clj.zip.editz.edit.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,f,args){
return clojure.zip.edit.call(null,zloc,rewrite_clj.zip.editz.edit_node,(function (p1__11058_SHARP_){
return cljs.core.apply.call(null,f,p1__11058_SHARP_,args);
}));
});

rewrite_clj.zip.editz.edit.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rewrite_clj.zip.editz.edit.cljs$lang$applyTo = (function (seq11059){
var G__11060 = cljs.core.first.call(null,seq11059);
var seq11059__$1 = cljs.core.next.call(null,seq11059);
var G__11061 = cljs.core.first.call(null,seq11059__$1);
var seq11059__$2 = cljs.core.next.call(null,seq11059__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11060,G__11061,seq11059__$2);
});

/**
 * Splice the given node, i.e. merge its children into the current one
 * (akin to Clojure's `unquote-splicing` macro: `~@...`).
 * - if the node is not one that can have children, no modification will
 *   be performed.
 * - if the node has no or only whitespace children, it will be removed.
 * - otherwise, splicing will be performed, moving the zipper to the first
 *   non-whitespace child afterwards.
 * 
 */
rewrite_clj.zip.editz.splice = (function rewrite_clj$zip$editz$splice(zloc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,zloc))){
var temp__5455__auto__ = cljs.core.seq.call(null,cljs.core.drop_while.call(null,rewrite_clj.node.whitespace_QMARK_,cljs.core.reverse.call(null,cljs.core.drop_while.call(null,rewrite_clj.node.whitespace_QMARK_,clojure.zip.children.call(null,zloc)))));
if(temp__5455__auto__){
var children = temp__5455__auto__;
var loc = rewrite_clj.zip.utils.remove_and_move_right.call(null,cljs.core.reduce.call(null,clojure.zip.insert_right,zloc,children));
var or__3949__auto__ = rewrite_clj.zip.whitespace.skip_whitespace.call(null,loc);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return loc;
}
} else {
return rewrite_clj.zip.removez.remove.call(null,zloc);
}
} else {
return zloc;
}
});
rewrite_clj.zip.editz.edit_token = (function rewrite_clj$zip$editz$edit_token(zloc,str_fn){
var e = rewrite_clj.zip.base.sexpr.call(null,zloc);
var e_SINGLEQUOTE_ = ((typeof e === 'string')?str_fn.call(null,e):(((e instanceof cljs.core.Keyword))?cljs.core.keyword.call(null,cljs.core.namespace.call(null,e),str_fn.call(null,cljs.core.name.call(null,e))):(((e instanceof cljs.core.Symbol))?cljs.core.symbol.call(null,cljs.core.namespace.call(null,e),str_fn.call(null,cljs.core.name.call(null,e))):null)));
return clojure.zip.replace.call(null,zloc,rewrite_clj.node.token_node.call(null,e_SINGLEQUOTE_));
});
rewrite_clj.zip.editz.edit_multi_line = (function rewrite_clj$zip$editz$edit_multi_line(zloc,line_fn){
var n = cljs.core.update_in.call(null,clojure.zip.node.call(null,zloc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781)], null),cljs.core.comp.call(null,line_fn,cljs.core.vec));
return clojure.zip.replace.call(null,zloc,n);
});
rewrite_clj.zip.editz.prefix = (function rewrite_clj$zip$editz$prefix(zloc,s){
var G__11067 = rewrite_clj.zip.base.tag.call(null,zloc);
var G__11067__$1 = (((G__11067 instanceof cljs.core.Keyword))?G__11067.fqn:null);
switch (G__11067__$1) {
case "token":
return rewrite_clj.zip.editz.edit_token.call(null,zloc,((function (G__11067,G__11067__$1){
return (function (p1__11065_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11065_SHARP_)].join('');
});})(G__11067,G__11067__$1))
);

break;
case "multi-line":
return rewrite_clj.zip.editz.edit_multi_line.call(null,zloc,((function (G__11067,G__11067__$1){
return (function (lines){
if(cljs.core.empty_QMARK_.call(null,lines)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
} else {
return cljs.core.update_in.call(null,lines,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),((function (G__11067,G__11067__$1){
return (function (p1__11066_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11066_SHARP_)].join('');
});})(G__11067,G__11067__$1))
);
}
});})(G__11067,G__11067__$1))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11067__$1)].join('')));

}
});
rewrite_clj.zip.editz.suffix = (function rewrite_clj$zip$editz$suffix(zloc,s){
var G__11070 = rewrite_clj.zip.base.tag.call(null,zloc);
var G__11070__$1 = (((G__11070 instanceof cljs.core.Keyword))?G__11070.fqn:null);
switch (G__11070__$1) {
case "token":
return rewrite_clj.zip.editz.edit_token.call(null,zloc,((function (G__11070,G__11070__$1){
return (function (p1__11069_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11069_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
});})(G__11070,G__11070__$1))
);

break;
case "multi-line":
return rewrite_clj.zip.editz.edit_multi_line.call(null,zloc,((function (G__11070,G__11070__$1){
return (function (lines){
if(cljs.core.empty_QMARK_.call(null,lines)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
} else {
return cljs.core.concat.call(null,cljs.core.butlast.call(null,lines),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,lines)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
}
});})(G__11070,G__11070__$1))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11070__$1)].join('')));

}
});

//# sourceMappingURL=editz.js.map
