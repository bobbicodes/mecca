// Compiled by ClojureScript 1.10.339 {}
goog.provide('tubax.core');
goog.require('cljs.core');
goog.require('ext.saxjs');
tubax.core.new_document = (function tubax$core$new_document(){
return cljs.core.List.EMPTY;
});
tubax.core.add_node_document = (function tubax$core$add_node_document(node,document){
var keytag = cljs.core.keyword.call(null,node.name);
var att_map = cljs.core.js__GT_clj.call(null,node.attributes,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var node_value = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),keytag,new cljs.core.Keyword(null,"attributes","attributes",-74013604),att_map,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.conj.call(null,document,node_value);
});
tubax.core.close_node_document = (function tubax$core$close_node_document(node,document){
if(!(cljs.core.empty_QMARK_.call(null,cljs.core.rest.call(null,document)))){
var current_node = cljs.core.first.call(null,document);
var father_node = cljs.core.first.call(null,cljs.core.rest.call(null,document));
var father_children = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(father_node);
var new_father = cljs.core.assoc.call(null,father_node,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.conj.call(null,father_children,current_node));
return cljs.core.conj.call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,document)),new_father);
} else {
return document;
}
});
tubax.core.add_text = (function tubax$core$add_text(text,document){
if(!(cljs.core.empty_QMARK_.call(null,text))){
var current_node = cljs.core.first.call(null,document);
var node_children = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(current_node);
var new_node_value = cljs.core.assoc.call(null,current_node,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.conj.call(null,node_children,text));
return cljs.core.conj.call(null,cljs.core.rest.call(null,document),new_node_value);
} else {
return document;
}
});
tubax.core.format_document = (function tubax$core$format_document(document){
return cljs.core.first.call(null,document);
});
tubax.core.xml__GT_clj = (function tubax$core$xml__GT_clj(var_args){
var G__16245 = arguments.length;
switch (G__16245) {
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
return tubax.core.xml__GT_clj.call(null,source,cljs.core.PersistentArrayMap.EMPTY);
});

tubax.core.xml__GT_clj.cljs$core$IFn$_invoke$arity$2 = (function (source,p__16246){
var map__16247 = p__16246;
var map__16247__$1 = ((((!((map__16247 == null)))?(((((map__16247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16247):map__16247);
var strict = cljs.core.get.call(null,map__16247__$1,new cljs.core.Keyword(null,"strict","strict",-665564191),true);
var trim = cljs.core.get.call(null,map__16247__$1,new cljs.core.Keyword(null,"trim","trim",774319767),true);
var normalize = cljs.core.get.call(null,map__16247__$1,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),false);
var lowercase = cljs.core.get.call(null,map__16247__$1,new cljs.core.Keyword(null,"lowercase","lowercase",41029539),true);
var xmlns = cljs.core.get.call(null,map__16247__$1,new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571));
var position = cljs.core.get.call(null,map__16247__$1,new cljs.core.Keyword(null,"position","position",-2011731912),true);
var strict_entities = cljs.core.get.call(null,map__16247__$1,new cljs.core.Keyword(null,"strict-entities","strict-entities",-551773933),false);
var parser = sax.parser(strict,({"trim": trim, "normalize": normalize, "lowercase": lowercase, "xmlns": xmlns, "position": position, "strictEntities": strict_entities}));
var document = cljs.core.atom.call(null,tubax.core.new_document.call(null));
var result = cljs.core.atom.call(null,null);
parser.onopentag = ((function (parser,document,result,map__16247,map__16247__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities){
return (function (p1__16239_SHARP_){
return cljs.core.swap_BANG_.call(null,document,cljs.core.partial.call(null,tubax.core.add_node_document,p1__16239_SHARP_));
});})(parser,document,result,map__16247,map__16247__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities))
;

parser.onclosetag = ((function (parser,document,result,map__16247,map__16247__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities){
return (function (p1__16240_SHARP_){
return cljs.core.swap_BANG_.call(null,document,cljs.core.partial.call(null,tubax.core.close_node_document,p1__16240_SHARP_));
});})(parser,document,result,map__16247,map__16247__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities))
;

parser.ontext = ((function (parser,document,result,map__16247,map__16247__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities){
return (function (p1__16241_SHARP_){
return cljs.core.swap_BANG_.call(null,document,cljs.core.partial.call(null,tubax.core.add_text,p1__16241_SHARP_));
});})(parser,document,result,map__16247,map__16247__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities))
;

parser.oncdata = ((function (parser,document,result,map__16247,map__16247__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities){
return (function (p1__16242_SHARP_){
return cljs.core.swap_BANG_.call(null,document,cljs.core.partial.call(null,tubax.core.add_text,p1__16242_SHARP_));
});})(parser,document,result,map__16247,map__16247__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities))
;

parser.onend = ((function (parser,document,result,map__16247,map__16247__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities){
return (function (){
if((cljs.core.deref.call(null,result) == null)){
return cljs.core.reset_BANG_.call(null,result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"success","success",1890645906),tubax.core.format_document.call(null,cljs.core.deref.call(null,document))], null));
} else {
return null;
}
});})(parser,document,result,map__16247,map__16247__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities))
;

parser.onerror = ((function (parser,document,result,map__16247,map__16247__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities){
return (function (p1__16243_SHARP_){
return cljs.core.reset_BANG_.call(null,result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16243_SHARP_)].join('')], null));
});})(parser,document,result,map__16247,map__16247__$1,strict,trim,normalize,lowercase,xmlns,position,strict_entities))
;

parser.write(source);

parser.close();

var or__3949__auto__ = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,result));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,result)))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

tubax.core.xml__GT_clj.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=core.js.map
