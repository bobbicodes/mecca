// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('tubax.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
tubax.core.new_document = (function tubax$core$new_document(){
return cljs.core.List.EMPTY;
});
tubax.core.add_node_document = (function tubax$core$add_node_document(node,document){
var keytag = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(node.name);
var att_map = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(node.attributes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
var node_value = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,keytag,cljs.core.cst$kw$attributes,att_map,cljs.core.cst$kw$content,cljs.core.PersistentVector.EMPTY], null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(document,node_value);
});
tubax.core.close_node_document = (function tubax$core$close_node_document(node,document){
if(!(cljs.core.empty_QMARK_(cljs.core.rest(document)))){
var current_node = cljs.core.first(document);
var father_node = cljs.core.first(cljs.core.rest(document));
var father_children = cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(father_node);
var new_father = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(father_node,cljs.core.cst$kw$content,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(father_children,current_node));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(cljs.core.rest(document)),new_father);
} else {
return document;
}
});
tubax.core.add_text = (function tubax$core$add_text(text,document){
if(!(cljs.core.empty_QMARK_(text))){
var current_node = cljs.core.first(document);
var node_children = cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(current_node);
var new_node_value = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(current_node,cljs.core.cst$kw$content,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node_children,text));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(document),new_node_value);
} else {
return document;
}
});
tubax.core.format_document = (function tubax$core$format_document(document){
return cljs.core.first(document);
});
tubax.core.xml__GT_clj = (function tubax$core$xml__GT_clj(var_args){
var G__20329 = arguments.length;
switch (G__20329) {
case 1:
return tubax.core.xml__GT_clj.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tubax.core.xml__GT_clj.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tubax.core.xml__GT_clj.cljs$core$IFn$_invoke$arity$1 = (function (source){
return tubax.core.xml__GT_clj.cljs$core$IFn$_invoke$arity$2(source,cljs.core.PersistentArrayMap.EMPTY);
});

tubax.core.xml__GT_clj.cljs$core$IFn$_invoke$arity$2 = (function (source,p__20330){
var map__20331 = p__20330;
var map__20331__$1 = ((((!((map__20331 == null)))?(((((map__20331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20331):map__20331);
var strict = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20331__$1,cljs.core.cst$kw$strict,true);
var trim = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20331__$1,cljs.core.cst$kw$trim,true);
var normalize = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20331__$1,cljs.core.cst$kw$normalize,false);
var lowercase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20331__$1,cljs.core.cst$kw$lowercase,true);
var xmlns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20331__$1,cljs.core.cst$kw$xmlns);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20331__$1,cljs.core.cst$kw$position,true);
var strict_entities = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20331__$1,cljs.core.cst$kw$strict_DASH_entities,false);
var parser = sax.parser(strict,({"trim": trim, "normalize": normalize, "lowercase": lowercase, "xmlns": xmlns, "position": position, "strictEntities": strict_entities}));
var document = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(tubax.core.new_document());
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
parser.onopentag = ((function (parser,document,result,map__20331,map__20331__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities){
return (function (p1__20323_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(document,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(tubax.core.add_node_document,p1__20323_SHARP_));
});})(parser,document,result,map__20331,map__20331__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities))
;

parser.onclosetag = ((function (parser,document,result,map__20331,map__20331__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities){
return (function (p1__20324_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(document,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(tubax.core.close_node_document,p1__20324_SHARP_));
});})(parser,document,result,map__20331,map__20331__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities))
;

parser.ontext = ((function (parser,document,result,map__20331,map__20331__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities){
return (function (p1__20325_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(document,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(tubax.core.add_text,p1__20325_SHARP_));
});})(parser,document,result,map__20331,map__20331__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities))
;

parser.oncdata = ((function (parser,document,result,map__20331,map__20331__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities){
return (function (p1__20326_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(document,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(tubax.core.add_text,p1__20326_SHARP_));
});})(parser,document,result,map__20331,map__20331__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities))
;

parser.onend = ((function (parser,document,result,map__20331,map__20331__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities){
return (function (){
if((cljs.core.deref(result) == null)){
return cljs.core.reset_BANG_(result,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$success,tubax.core.format_document(cljs.core.deref(document))], null));
} else {
return null;
}
});})(parser,document,result,map__20331,map__20331__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities))
;

parser.onerror = ((function (parser,document,result,map__20331,map__20331__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities){
return (function (p1__20327_SHARP_){
return cljs.core.reset_BANG_(result,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20327_SHARP_)].join('')], null));
});})(parser,document,result,map__20331,map__20331__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities))
;

parser.write(source);

parser.close();

var or__3949__auto__ = cljs.core.cst$kw$success.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(result));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(result)))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

tubax.core.xml__GT_clj.cljs$lang$maxFixedArity = 2;

