// Compiled by ClojureScript 1.10.339 {}
goog.provide('rewrite_clj.reader');
goog.require('cljs.core');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tools.reader.impl.commons');
goog.require('goog.string');
goog.require('rewrite_clj.node.protocols');
rewrite_clj.reader.read_char = cljs.tools.reader.reader_types.read_char;
rewrite_clj.reader.get_column_number = cljs.tools.reader.reader_types.get_column_number;
rewrite_clj.reader.get_line_number = cljs.tools.reader.reader_types.get_line_number;
rewrite_clj.reader.peek_char = cljs.tools.reader.reader_types.peek_char;
rewrite_clj.reader.indexing_push_back_reader = cljs.tools.reader.reader_types.indexing_push_back_reader;
rewrite_clj.reader.unread = cljs.tools.reader.reader_types.unread;
rewrite_clj.reader.read_string = cljs.tools.reader.read_string;
/**
 * Throw reader exception, including line/column.
 */
rewrite_clj.reader.throw_reader = (function rewrite_clj$reader$throw_reader(var_args){
var args__4534__auto__ = [];
var len__4531__auto___10232 = arguments.length;
var i__4532__auto___10233 = (0);
while(true){
if((i__4532__auto___10233 < len__4531__auto___10232)){
args__4534__auto__.push((arguments[i__4532__auto___10233]));

var G__10234 = (i__4532__auto___10233 + (1));
i__4532__auto___10233 = G__10234;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return rewrite_clj.reader.throw_reader.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

rewrite_clj.reader.throw_reader.cljs$core$IFn$_invoke$arity$variadic = (function (reader,fmt,data){
var c = rewrite_clj.reader.get_column_number.call(null,reader);
var l = rewrite_clj.reader.get_line_number.call(null,reader);
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(data),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)," [at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),"]"].join('')));
});

rewrite_clj.reader.throw_reader.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rewrite_clj.reader.throw_reader.cljs$lang$applyTo = (function (seq10229){
var G__10230 = cljs.core.first.call(null,seq10229);
var seq10229__$1 = cljs.core.next.call(null,seq10229);
var G__10231 = cljs.core.first.call(null,seq10229__$1);
var seq10229__$2 = cljs.core.next.call(null,seq10229__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10230,G__10231,seq10229__$2);
});

/**
 * Check whether a given char is a token boundary.
 */
rewrite_clj.reader.boundary_QMARK_ = (function rewrite_clj$reader$boundary_QMARK_(c){
return ((-1) < ["\"",":",";","'","@","^","`","~","(",")","[","]","{","}","\\",null].indexOf(c));
});
/**
 * Checks whether a given character is whitespace
 */
rewrite_clj.reader.whitespace_QMARK_ = (function rewrite_clj$reader$whitespace_QMARK_(ch){
return ((-1) < ["\r","\n","\t"," ",","].indexOf(ch));
});
/**
 * Checks whether the character is a newline
 */
rewrite_clj.reader.linebreak_QMARK_ = (function rewrite_clj$reader$linebreak_QMARK_(c){
return ((-1) < ["\r","\n"].indexOf(c));
});
/**
 * Checks whether the character is a space
 */
rewrite_clj.reader.space_QMARK_ = (function rewrite_clj$reader$space_QMARK_(c){
return ((-1) < ["\t"," ",","].indexOf(c));
});
rewrite_clj.reader.whitespace_or_boundary_QMARK_ = (function rewrite_clj$reader$whitespace_or_boundary_QMARK_(c){
var or__3949__auto__ = rewrite_clj.reader.whitespace_QMARK_.call(null,c);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return rewrite_clj.reader.boundary_QMARK_.call(null,c);
}
});
rewrite_clj.reader.buf = (new goog.string.StringBuffer(""));
/**
 * Read while the chars fulfill the given condition. Ignores
 *   the unmatching char.
 */
rewrite_clj.reader.read_while = (function rewrite_clj$reader$read_while(var_args){
var G__10236 = arguments.length;
switch (G__10236) {
case 2:
return rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$2 = (function (reader,p_QMARK_){
return rewrite_clj.reader.read_while.call(null,reader,p_QMARK_,cljs.core.not.call(null,p_QMARK_.call(null,null)));
});

rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$3 = (function (reader,p_QMARK_,eof_QMARK_){
rewrite_clj.reader.buf.clear();

while(true){
var temp__5455__auto__ = rewrite_clj.reader.read_char.call(null,reader);
if(cljs.core.truth_(temp__5455__auto__)){
var c = temp__5455__auto__;
if(cljs.core.truth_(p_QMARK_.call(null,c))){
rewrite_clj.reader.buf.append(c);

continue;
} else {
rewrite_clj.reader.unread.call(null,reader,c);

return rewrite_clj.reader.buf.toString();
}
} else {
if(cljs.core.truth_(eof_QMARK_)){
return rewrite_clj.reader.buf.toString();
} else {
return rewrite_clj.reader.throw_reader.call(null,reader,"Unexpected EOF.");
}
}
break;
}
});

rewrite_clj.reader.read_while.cljs$lang$maxFixedArity = 3;

/**
 * Read until a char fulfills the given condition. Ignores the
 * matching char.
 */
rewrite_clj.reader.read_until = (function rewrite_clj$reader$read_until(reader,p_QMARK_){
return rewrite_clj.reader.read_while.call(null,reader,cljs.core.complement.call(null,p_QMARK_),p_QMARK_.call(null,null));
});
/**
 * Read until linebreak and include it.
 */
rewrite_clj.reader.read_include_linebreak = (function rewrite_clj$reader$read_include_linebreak(reader){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.reader.read_until.call(null,reader,(function (p1__10238_SHARP_){
return (((p1__10238_SHARP_ == null)) || (rewrite_clj.reader.linebreak_QMARK_.call(null,p1__10238_SHARP_)));
}))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.reader.read_char.call(null,reader))].join('');
});
/**
 * Convert string to EDN value.
 */
rewrite_clj.reader.string__GT_edn = (function rewrite_clj$reader$string__GT_edn(s){
return rewrite_clj.reader.read_string.call(null,s);
});
/**
 * Ignore the next character.
 */
rewrite_clj.reader.ignore = (function rewrite_clj$reader$ignore(reader){
rewrite_clj.reader.read_char.call(null,reader);

return null;
});
/**
 * Read next char.
 */
rewrite_clj.reader.next = (function rewrite_clj$reader$next(reader){
return rewrite_clj.reader.read_char.call(null,reader);
});
/**
 * Peek next char.
 */
rewrite_clj.reader.peek = (function rewrite_clj$reader$peek(reader){
return rewrite_clj.reader.peek_char.call(null,reader);
});
/**
 * Use the given function to read value, then attach row/col metadata.
 */
rewrite_clj.reader.read_with_meta = (function rewrite_clj$reader$read_with_meta(reader,read_fn){
var row = rewrite_clj.reader.get_line_number.call(null,reader);
var col = rewrite_clj.reader.get_column_number.call(null,reader);
var entry = read_fn.call(null,reader);
if(cljs.core.truth_(entry)){
var end_row = rewrite_clj.reader.get_line_number.call(null,reader);
var end_col = rewrite_clj.reader.get_column_number.call(null,reader);
var end_col__$1 = ((cljs.core._EQ_.call(null,(0),end_col))?(col + rewrite_clj.node.protocols.string.call(null,entry).length):end_col);
if(cljs.core._EQ_.call(null,(0),col)){
return entry;
} else {
return cljs.core._with_meta.call(null,entry,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"end-row","end-row",-545103581),end_row,new cljs.core.Keyword(null,"end-col","end-col",-724155879),end_col__$1], null));
}
} else {
return null;
}
});
/**
 * Call the given function on the given reader until it returns
 * a non-truthy value.
 */
rewrite_clj.reader.read_repeatedly = (function rewrite_clj$reader$read_repeatedly(reader,read_fn){
return cljs.core.doall.call(null,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,(function (){
return read_fn.call(null,reader);
}))));
});
/**
 * Call the given function on the given reader until `n` values matching `p?` have been
 * collected.
 */
rewrite_clj.reader.read_n = (function rewrite_clj$reader$read_n(reader,node_tag,read_fn,p_QMARK_,n){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var c = (0);
var vs = cljs.core.PersistentVector.EMPTY;
while(true){
if((c < n)){
var temp__5455__auto__ = read_fn.call(null,reader);
if(cljs.core.truth_(temp__5455__auto__)){
var v = temp__5455__auto__;
var G__10239 = (cljs.core.truth_(p_QMARK_.call(null,v))?(c + (1)):c);
var G__10240 = cljs.core.conj.call(null,vs,v);
c = G__10239;
vs = G__10240;
continue;
} else {
return rewrite_clj.reader.throw_reader.call(null,reader,"%s node expects %d value%s.",node_tag,n,((cljs.core._EQ_.call(null,n,(1)))?"":"s"));
}
} else {
return vs;
}
break;
}
});
rewrite_clj.reader.re_matches_STAR_ = (function rewrite_clj$reader$re_matches_STAR_(re,s){
var matches = re.exec(s);
if(((!((matches == null))) && (((matches[(0)]) === s)))){
if((matches.length === (1))){
return (matches[(0)]);
} else {
return matches;
}
} else {
return null;
}
});
rewrite_clj.reader.read_keyword = (function rewrite_clj$reader$read_keyword(reader,initch){
var tok = cljs.tools.reader.read_token.call(null,reader,new cljs.core.Keyword(null,"keyword","keyword",811389747),rewrite_clj.reader.read_char.call(null,reader));
var a = rewrite_clj.reader.re_matches_STAR_.call(null,cljs.core.re_pattern.call(null,"^[:]?([^0-9/].*/)?([^0-9/][^/]*)$"),tok);
var token = (a[(0)]);
var ns = (a[(1)]);
var name = (a[(2)]);
if(((((!((void 0 === ns))) && ((ns.substring((ns.length - (2)),ns.length) === ":/")))) || (((name[(name.length - (1))]) === ":")) || (!((token.indexOf("::",(1)) === (-1)))))){
return cljs.tools.reader.impl.errors.reader_error.call(null,reader,"Invalid token: ",token);
} else {
if(((!((ns == null))) && ((ns.length > (0))))){
return cljs.core.keyword.call(null,ns.substring((0),ns.indexOf("/")),name);
} else {
return cljs.core.keyword.call(null,token.substring((1)));
}
}
});

//# sourceMappingURL=reader.js.map
