// Compiled by ClojureScript 1.10.339 {}
goog.provide('zprint.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('zprint.zprint');
goog.require('zprint.finish');
goog.require('zprint.config');
goog.require('zprint.zutil');
goog.require('zprint.sutil');
goog.require('zprint.focus');
goog.require('rewrite_clj.parser');
/**
 * There is an internal options-map containing default values which is 
 *   configured from ~/.zprintrc when zprint is first used.  set-options! 
 *   is used to alter the internal options-map by specifying individual
 *   options-map values that will be merged into the internal options-map.
 */
zprint.core.set_options_BANG_ = (function zprint$core$set_options_BANG_(var_args){
var G__11992 = arguments.length;
switch (G__11992) {
case 2:
return zprint.core.set_options_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.core.set_options_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.core.set_options_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (new_options,doc_str){
zprint.config.config_set_options_BANG_.call(null,new_options,doc_str);

return null;
});

zprint.core.set_options_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (new_options){
zprint.config.config_set_options_BANG_.call(null,new_options);

return null;
});

zprint.core.set_options_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Do external configuration regardless of whether or not it already
 *   been done, replacing any existing configuration.  Returns nil if successful,
 *   a vector of errors if not.
 */
zprint.core.configure_all_BANG_ = (function zprint$core$configure_all_BANG_(){
return zprint.config.config_configure_all_BANG_.call(null);
});
/**
 * Is this a rewrite-clj zipper node? A surprisingly hard thing to 
 *   determine, actually.
 */
zprint.core.rewrite_clj_zipper_QMARK_ = (function zprint$core$rewrite_clj_zipper_QMARK_(z){
if((function (){var and__3938__auto__ = cljs.core.coll_QMARK_.call(null,z);
if(and__3938__auto__){
var type_str = cljs.core.pr_str.call(null,cljs.core.type.call(null,cljs.core.first.call(null,z)));
return (((cljs.core.count.call(null,type_str) > (16))) && (cljs.core._EQ_.call(null,"rewrite_clj.node",cljs.core.subs.call(null,type_str,(0),(16)))));
} else {
return and__3938__auto__;
}
})()){
return z;
} else {
return null;
}
});
/**
 * Is this a zipper?
 */
zprint.core.zipper_QMARK_ = (function zprint$core$zipper_QMARK_(z){
if(cljs.core.coll_QMARK_.call(null,z)){
var or__3949__auto__ = zprint.core.rewrite_clj_zipper_QMARK_.call(null,z);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,z));
}
} else {
return null;
}
});
/**
 * If it is a zipper or a string, return a zipper, else return nil.
 */
zprint.core.get_zipper = (function zprint$core$get_zipper(options,x){
if(typeof x === 'string'){
var x__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"expand?","expand?",-1744295862).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",-559583621).cljs$core$IFn$_invoke$arity$1(options)))?zprint.zprint.expand_tabs.call(null,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",-559583621).cljs$core$IFn$_invoke$arity$1(options)),x):x);
var n = rewrite_clj.parser.parse_string.call(null,clojure.string.trim.call(null,x__$1));
if(cljs.core.truth_(n)){
return zprint.zutil.edn_STAR_.call(null,n);
} else {
return null;
}
} else {
if(cljs.core.truth_(zprint.core.zipper_QMARK_.call(null,x))){
return x;
} else {
return null;
}
}
});
/**
 * Do a basic zprint and output the style vector and the options used for
 *   further processing: [<style-vec> options]
 */
zprint.core.fzprint_style = (function zprint$core$fzprint_style(coll,options){
var vec__11994 = (cljs.core.truth_(new cljs.core.Keyword(null,"zipper?","zipper?",-1061271842).cljs$core$IFn$_invoke$arity$1(options))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll,options], null):(cljs.core.truth_(new cljs.core.Keyword(null,"parse-string?","parse-string?",2006674325).cljs$core$IFn$_invoke$arity$1(options))?((typeof coll === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.core.get_zipper.call(null,options,coll),options], null):(function(){throw (new Error(["Collection is not a string yet"," :parse-string? specified!"].join('')))})()):(cljs.core.truth_(new cljs.core.Keyword(null,"zloc?","zloc?",-1457193855).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(options))))?(function (){var vec__11997 = zprint.zutil.find_root_and_path_nw.call(null,coll);
var root = cljs.core.nth.call(null,vec__11997,(0),null);
var path = cljs.core.nth.call(null,vec__11997,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,cljs.core.assoc_in.call(null,options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"path","path",-188191168)], null),path)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,options], null)
)));
var input = cljs.core.nth.call(null,vec__11994,(0),null);
var options__$1 = cljs.core.nth.call(null,vec__11994,(1),null);
var z_type = (cljs.core.truth_(input)?new cljs.core.Keyword(null,"zipper","zipper",1500694438):new cljs.core.Keyword(null,"sexpr","sexpr",-783344087));
var input__$1 = (function (){var or__3949__auto__ = input;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return coll;
}
})();
if((input__$1 == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nil",zprint.zprint.zcolor_map.call(null,options__$1,new cljs.core.Keyword(null,"nil","nil",99600501)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),options__$1], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"drop?","drop?",-2009514790).cljs$core$IFn$_invoke$arity$1(options__$1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"none","none",1333468478)], null)], null),options__$1], null);
} else {
var options__$2 = cljs.core.assoc.call(null,options__$1,new cljs.core.Keyword(null,"ztype","ztype",-562179020),z_type);
var fzprint_fn = cljs.core.partial.call(null,zprint.zprint.fzprint,options__$2,(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"file?","file?",1755223728).cljs$core$IFn$_invoke$arity$1(options__$2);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left-space","left-space",457574289).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parse","parse",-1162164619).cljs$core$IFn$_invoke$arity$1(options__$2)),new cljs.core.Keyword(null,"keep","keep",-2133338530));
} else {
return and__3938__auto__;
}
})())?(function (){var or__3949__auto__ = new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(options__$2);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})():(0)),input__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,z_type,new cljs.core.Keyword(null,"zipper","zipper",1500694438)))?zprint.zutil.zredef_call.call(null,fzprint_fn):zprint.sutil.sredef_call.call(null,fzprint_fn)),options__$2], null);

}
}
});
/**
 * Take some internal-options and the & rest of a zprint/czprint
 *   call and figure out the options and width and all of that, but
 *   stop short of integrating these values into the existing options
 *   that show up with (get-options). Note that internal-options MUST
 *   NOT be a full options-map.  It needs to be just the options that
 *   have been requested for this invocation.  Does auto-width if that
 *   is requested, and determines if there are 'special-options', which
 *   may short circuit the other options processing. 
 *   Returns [special-option rest-options]
 */
zprint.core.process_rest_options = (function zprint$core$process_rest_options(internal_options,p__12000){
var vec__12001 = p__12000;
var width_or_options = cljs.core.nth.call(null,vec__12001,(0),null);
var options = cljs.core.nth.call(null,vec__12001,(1),null);
if(cljs.core._EQ_.call(null,width_or_options,new cljs.core.Keyword(null,"default","default",-1987822328))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),zprint.config.get_default_options.call(null)], null);
} else {
var vec__12004 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"explain","explain",484226146),null,new cljs.core.Keyword(null,"support","support",1392531368),null,new cljs.core.Keyword(null,"explain-justified","explain-justified",371413450),null,new cljs.core.Keyword(null,"help","help",-439233446),null], null), null).call(null,width_or_options))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,width_or_options], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width_or_options,null], null));
var width_or_options__$1 = cljs.core.nth.call(null,vec__12004,(0),null);
var special_option = cljs.core.nth.call(null,vec__12004,(1),null);
var configure_errors = (cljs.core.truth_(new cljs.core.Keyword(null,"configured?","configured?",642178633).cljs$core$IFn$_invoke$arity$1(zprint.config.get_options.call(null)))?null:zprint.core.configure_all_BANG_.call(null));
var width = ((typeof width_or_options__$1 === 'number')?width_or_options__$1:null);
var rest_options = (cljs.core.truth_((function (){var and__3938__auto__ = width;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.map_QMARK_.call(null,options);
} else {
return and__3938__auto__;
}
})())?options:((cljs.core.map_QMARK_.call(null,width_or_options__$1))?width_or_options__$1:null));
var width_map = (cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null):cljs.core.PersistentArrayMap.EMPTY);
var new_options = zprint.config.merge_deep.call(null,internal_options,rest_options,width_map);
var auto_width = (cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.not.call(null,width);
if(and__3938__auto__){
return new cljs.core.Keyword(null,"auto-width?","auto-width?",93515862).cljs$core$IFn$_invoke$arity$2(new_options,new cljs.core.Keyword(null,"auto-width?","auto-width?",93515862).cljs$core$IFn$_invoke$arity$1(zprint.config.get_options.call(null)));
} else {
return and__3938__auto__;
}
})())?(function (){var terminal_width_fn = null;
var actual_width = (cljs.core.truth_(terminal_width_fn)?terminal_width_fn.call(null):null);
if(typeof actual_width === 'number'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),actual_width], null);
} else {
return null;
}
})():null);
var new_options__$1 = (cljs.core.truth_(auto_width)?zprint.config.merge_deep.call(null,new_options,auto_width):new_options);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_option,new_options__$1], null);

}
});
/**
 * Take some internal-options and the & rest of a zprint/czprint
 *   call and figure out the options and width and all of that. Note
 *   that internal-options MUST NOT be a full options-map.  It needs
 *   to be just the options that have been requested for this invocation.
 *   Does auto-width if that is requested, and determines if there are
 *   'special-options', which may short circuit the other options
 *   processing. Returns [special-option actual-options]
 */
zprint.core.determine_options = (function zprint$core$determine_options(rest_options){
var configure_errors = (cljs.core.truth_(new cljs.core.Keyword(null,"configured?","configured?",642178633).cljs$core$IFn$_invoke$arity$1(zprint.config.get_options.call(null)))?null:zprint.core.configure_all_BANG_.call(null));
var errors = zprint.config.validate_options.call(null,rest_options);
var combined_errors = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(configure_errors)?["Global configuration errors: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(configure_errors)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(errors)?["Option errors in this call: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(errors)].join(''):null))].join('');
if(!(cljs.core.empty_QMARK_.call(null,combined_errors))){
throw (new Error(combined_errors));
} else {
var vec__12007 = zprint.config.perform_remove.call(null,null,null,zprint.config.get_options.call(null),rest_options);
var internal_map = cljs.core.nth.call(null,vec__12007,(0),null);
var rest_options__$1 = cljs.core.nth.call(null,vec__12007,(1),null);
var _ = cljs.core.nth.call(null,vec__12007,(2),null);
var vec__12010 = zprint.config.apply_style.call(null,null,null,internal_map,rest_options__$1);
var updated_map = cljs.core.nth.call(null,vec__12010,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__12010,(1),null);
var style_errors = cljs.core.nth.call(null,vec__12010,(2),null);
var style_errors__$1 = (cljs.core.truth_(style_errors)?["Option errors in this call: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_errors)].join(''):null);
var actual_options = ((!(cljs.core.empty_QMARK_.call(null,style_errors__$1)))?(function(){throw (new Error(style_errors__$1))})():zprint.config.add_calculated_options.call(null,zprint.config.merge_deep.call(null,updated_map,rest_options__$1)));
return actual_options;
}
});
/**
 * Basic setup for fzprint call, used by all top level fns. Third
 *   argument can be either a number or a map, and if the third is a
 *   number, the fourth (if any) must be a map.  The internal-options
 *   is either an empty map or {:parse-string? true} for the -fn
 *   functions, and cannot be overridden by an options argument. Returns
 *   a vector with the style-vec and the options used: [<style-vec> options]
 */
zprint.core.zprint_STAR_ = (function zprint$core$zprint_STAR_(coll,special_option,actual_options){
if(cljs.core.truth_(special_option)){
var G__12013 = special_option;
var G__12013__$1 = (((G__12013 instanceof cljs.core.Keyword))?G__12013.fqn:null);
switch (G__12013__$1) {
case "explain":
return zprint.core.fzprint_style.call(null,zprint.config.get_explained_options.call(null),zprint.config.merge_deep.call(null,zprint.config.get_default_options.call(null),actual_options));

break;
case "explain-justified":
return zprint.core.fzprint_style.call(null,zprint.config.get_explained_options.call(null),zprint.config.merge_deep.call(null,zprint.config.get_default_options.call(null),actual_options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify?","justify?",294994148),true], null)], null)));

break;
case "support":
return zprint.core.fzprint_style.call(null,zprint.config.get_explained_all_options.call(null),zprint.config.merge_deep.call(null,zprint.config.get_default_options.call(null),actual_options));

break;
case "help":
return cljs.core.println.call(null,zprint.config.help_str);

break;
default:
return cljs.core.println.call(null,["Unknown keyword option: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(special_option)].join(''));

}
} else {
return zprint.core.fzprint_style.call(null,coll,(function (){var temp__5455__auto__ = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(actual_options);
if(cljs.core.truth_(temp__5455__auto__)){
var fn_name = temp__5455__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"docstring?","docstring?",-1820749410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(actual_options)))){
return actual_options;
} else {
return actual_options;
}
} else {
return actual_options;
}
})());
}
});
/**
 * Handle options for :parse-string-all?, by removing
 *   :parse-string-all? and changing the default for 
 *   :parse {:interpose } to be true instead of nil.
 */
zprint.core.parse_string_all_options = (function zprint$core$parse_string_all_options(options){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,(((new cljs.core.Keyword(null,"interpose","interpose",576140629).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parse","parse",-1162164619).cljs$core$IFn$_invoke$arity$1(options)) == null))?cljs.core.assoc_in.call(null,options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"interpose","interpose",576140629)], null),true):options),new cljs.core.Keyword(null,"parse-string-all?","parse-string-all?",-744455473)),new cljs.core.Keyword(null,"trim-comments?","trim-comments?",-1532658667),true);
});
/**
 * Select the elements from start to end from a vector.
 */
zprint.core.range_vec = (function zprint$core$range_vec(v,p__12015){
var vec__12016 = p__12015;
var start = cljs.core.nth.call(null,vec__12016,(0),null);
var end = cljs.core.nth.call(null,vec__12016,(1),null);
return cljs.core.take.call(null,(end - start),cljs.core.drop.call(null,start,v));
});
/**
 * Take a zipper or string and pretty print with fzprint, 
 *   output a str.  Key :color? is true by default, and should
 *   be set to false in internal-options to make this non-colored.
 *   Special processing for :parse-string-all?, with
 *   not only a different code path, but a different default for 
 *   :parse {:interpose nil} to {:interpose true}
 */
zprint.core.czprint_str_internal = (function zprint$core$czprint_str_internal(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12028 = arguments.length;
var i__4532__auto___12029 = (0);
while(true){
if((i__4532__auto___12029 < len__4531__auto___12028)){
args__4534__auto__.push((arguments[i__4532__auto___12029]));

var G__12030 = (i__4532__auto___12029 + (1));
i__4532__auto___12029 = G__12030;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return zprint.core.czprint_str_internal.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

zprint.core.czprint_str_internal.cljs$core$IFn$_invoke$arity$variadic = (function (internal_options,coll,rest){
var vec__12022 = zprint.core.process_rest_options.call(null,internal_options,rest);
var special_option = cljs.core.nth.call(null,vec__12022,(0),null);
var rest_options = cljs.core.nth.call(null,vec__12022,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"parse-string-all?","parse-string-all?",-744455473).cljs$core$IFn$_invoke$arity$1(rest_options))){
if(typeof coll === 'string'){
return zprint.core.process_multiple_forms.call(null,zprint.core.parse_string_all_options.call(null,rest_options),zprint.core.czprint_str_internal,":parse-string-all? call",zprint.zutil.edn_STAR_.call(null,rewrite_clj.parser.parse_string_all.call(null,coll)));
} else {
throw (new Error([":parse-string-all? requires a string!"].join('')));
}
} else {
var actual_options = zprint.core.determine_options.call(null,rest_options);
var vec__12025 = zprint.core.zprint_STAR_.call(null,coll,special_option,actual_options);
var cvec = cljs.core.nth.call(null,vec__12025,(0),null);
var options = cljs.core.nth.call(null,vec__12025,(1),null);
var cvec_wo_empty = cvec;
var focus_vec = (function (){var temp__5455__auto__ = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(options)));
if(cljs.core.truth_(temp__5455__auto__)){
var path = temp__5455__auto__;
return zprint.focus.range_ssv.call(null,cvec_wo_empty,path);
} else {
return null;
}
})();
var accept_vec = zprint.finish.handle_lines.call(null,options,cvec_wo_empty,focus_vec);
var inline_style_vec = (cljs.core.truth_(new cljs.core.Keyword(null,"inline?","inline?",-1674483791).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options)))?zprint.zprint.fzprint_inline_comments.call(null,options,cvec_wo_empty):cvec_wo_empty);
var str_style_vec = zprint.finish.cvec_to_style_vec.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style-map","style-map",1488693527),zprint.finish.no_style_map,new cljs.core.Keyword(null,"elide","elide",-1239101386),new cljs.core.Keyword(null,"elide","elide",-1239101386).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(options))], null),inline_style_vec,focus_vec,accept_vec);
var wrapped_style_vec = (cljs.core.truth_(new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options)))?zprint.zprint.fzprint_wrap_comments.call(null,options,str_style_vec):str_style_vec);
var comp_style = zprint.finish.compress_style.call(null,wrapped_style_vec);
var color_style = (cljs.core.truth_((function (){var or__3949__auto__ = accept_vec;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = focus_vec;
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return new cljs.core.Keyword(null,"color?","color?",-1891974356).cljs$core$IFn$_invoke$arity$1(options);
}
}
})())?zprint.finish.color_comp_vec.call(null,comp_style):cljs.core.apply.call(null,cljs.core.str,cljs.core.mapv.call(null,cljs.core.first,comp_style)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"return-cvec?","return-cvec?",1372433982).cljs$core$IFn$_invoke$arity$1(options))){
return cvec;
} else {
return color_style;
}
}
});

zprint.core.czprint_str_internal.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
zprint.core.czprint_str_internal.cljs$lang$applyTo = (function (seq12019){
var G__12020 = cljs.core.first.call(null,seq12019);
var seq12019__$1 = cljs.core.next.call(null,seq12019);
var G__12021 = cljs.core.first.call(null,seq12019__$1);
var seq12019__$2 = cljs.core.next.call(null,seq12019__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12020,G__12021,seq12019__$2);
});

/**
 * Call source-fn, and if it isn't there throw an exception.
 */
zprint.core.get_fn_source = (function zprint$core$get_fn_source(fn_name){
var or__3949__auto__ = (function (){try{return null;
}catch (e12032){var e = e12032;
return null;
}})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
throw (new Error(["No definition found for a function named: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)].join('')));
}
});
/**
 * Take coll, a Clojure data structure or a string containing Clojure code or
 *   data, format it readably, and output a str. Additional optional arguments: 
 * 
 *    (zprint-str coll <numeric-width>)
 *    (zprint-str coll <numeric-width> <options-map>)
 *    (zprint-str coll <options-map>)
 * 
 *   If coll is a string containing Clojure source:
 * 
 *      (zprint-str coll {:parse-string? true})
 * 
 *    (zprint nil :help)    ; for more information
 *    (zprint nil :explain) ; to see the current options-map
 */
zprint.core.zprint_str = (function zprint$core$zprint_str(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12035 = arguments.length;
var i__4532__auto___12036 = (0);
while(true){
if((i__4532__auto___12036 < len__4531__auto___12035)){
args__4534__auto__.push((arguments[i__4532__auto___12036]));

var G__12037 = (i__4532__auto___12036 + (1));
i__4532__auto___12036 = G__12037;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return zprint.core.zprint_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

zprint.core.zprint_str.cljs$core$IFn$_invoke$arity$variadic = (function (coll,rest){
return cljs.core.apply.call(null,zprint.core.czprint_str_internal,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color?","color?",-1891974356),false], null),coll,rest);
});

zprint.core.zprint_str.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
zprint.core.zprint_str.cljs$lang$applyTo = (function (seq12033){
var G__12034 = cljs.core.first.call(null,seq12033);
var seq12033__$1 = cljs.core.next.call(null,seq12033);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12034,seq12033__$1);
});

/**
 * Take coll, a Clojure data structure or a string containing Clojure code or
 *   data, format it readably, and output a str containing ANSI escapes to 
 *   syntax color the output. Additional optional arguments: 
 * 
 *    (czprint-str coll <numeric-width>)
 *    (czprint-str coll <numeric-width> <options-map>)
 *    (czprint-str coll <options-map>)
 * 
 *   If coll is a string containing Clojure source:
 * 
 *      (czprint-str coll {:parse-string? true})
 * 
 *    (czprint nil :help)    ; for more information
 *    (czprint nil :explain) ; to see the current options-map
 */
zprint.core.czprint_str = (function zprint$core$czprint_str(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12040 = arguments.length;
var i__4532__auto___12041 = (0);
while(true){
if((i__4532__auto___12041 < len__4531__auto___12040)){
args__4534__auto__.push((arguments[i__4532__auto___12041]));

var G__12042 = (i__4532__auto___12041 + (1));
i__4532__auto___12041 = G__12042;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return zprint.core.czprint_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

zprint.core.czprint_str.cljs$core$IFn$_invoke$arity$variadic = (function (coll,rest){
return cljs.core.apply.call(null,zprint.core.czprint_str_internal,cljs.core.PersistentArrayMap.EMPTY,coll,rest);
});

zprint.core.czprint_str.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
zprint.core.czprint_str.cljs$lang$applyTo = (function (seq12038){
var G__12039 = cljs.core.first.call(null,seq12038);
var seq12038__$1 = cljs.core.next.call(null,seq12038);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12039,seq12038__$1);
});

/**
 * Take coll, a Clojure data structure or a string containing Clojure code or
 *   data, format it readably, and output to stdout. Additional optional 
 *   arguments: 
 * 
 *    (zprint coll <numeric-width>)
 *    (zprint coll <numeric-width> <options-map>)
 *    (zprint coll <options-map>)
 * 
 *   If coll is a string containing Clojure source::
 * 
 *      (zprint coll {:parse-string? true})
 * 
 *    (zprint nil :help)    ; for more information
 *    (zprint nil :explain) ; to see the current options-map
 */
zprint.core.zprint = (function zprint$core$zprint(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12045 = arguments.length;
var i__4532__auto___12046 = (0);
while(true){
if((i__4532__auto___12046 < len__4531__auto___12045)){
args__4534__auto__.push((arguments[i__4532__auto___12046]));

var G__12047 = (i__4532__auto___12046 + (1));
i__4532__auto___12046 = G__12047;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return zprint.core.zprint.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

zprint.core.zprint.cljs$core$IFn$_invoke$arity$variadic = (function (coll,rest){
return cljs.core.println.call(null,cljs.core.apply.call(null,zprint.core.czprint_str_internal,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color?","color?",-1891974356),false], null),coll,rest));
});

zprint.core.zprint.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
zprint.core.zprint.cljs$lang$applyTo = (function (seq12043){
var G__12044 = cljs.core.first.call(null,seq12043);
var seq12043__$1 = cljs.core.next.call(null,seq12043);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12044,seq12043__$1);
});

/**
 * Take coll, a Clojure data structure or a string containing Clojure code or
 *   data, format it readably, and produce output to stdout containing ANSI 
 *   escapes to syntax color the output. Optional arguments: 
 * 
 *    (czprint coll <numeric-width>)
 *    (czprint coll <numeric-width> <options-map>)
 *    (czprint coll <options-map>)
 * 
 *   If coll is a string containing Clojure source:
 * 
 *      (czprint coll {:parse-string? true})
 * 
 *    (czprint nil :help)    ; for more information
 *    (czprint nil :explain) ; to see the current options-map
 */
zprint.core.czprint = (function zprint$core$czprint(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12050 = arguments.length;
var i__4532__auto___12051 = (0);
while(true){
if((i__4532__auto___12051 < len__4531__auto___12050)){
args__4534__auto__.push((arguments[i__4532__auto___12051]));

var G__12052 = (i__4532__auto___12051 + (1));
i__4532__auto___12051 = G__12052;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return zprint.core.czprint.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

zprint.core.czprint.cljs$core$IFn$_invoke$arity$variadic = (function (coll,rest){
return cljs.core.println.call(null,cljs.core.apply.call(null,zprint.core.czprint_str_internal,cljs.core.PersistentArrayMap.EMPTY,coll,rest));
});

zprint.core.czprint.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
zprint.core.czprint.cljs$lang$applyTo = (function (seq12048){
var G__12049 = cljs.core.first.call(null,seq12048);
var seq12048__$1 = cljs.core.next.call(null,seq12048);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12049,seq12048__$1);
});

/**
 * s is string containing a comment.  See if it starts out ;!zprint
 *   (with any number of ';' allowed), and if it does, attempt to parse
 *   it as an options-map.  Return [options error-str] with only one
 *   of the two populated if it started with ;!zprint, and nil otherwise.
 */
zprint.core.get_options_from_comment = (function zprint$core$get_options_from_comment(zprint_num,s){
var s_onesemi = clojure.string.replace.call(null,s,/^;+/,";");
var comment_split = clojure.string.split.call(null,s_onesemi,/^;!zprint /);
var temp__5457__auto__ = cljs.core.second.call(null,comment_split);
if(cljs.core.truth_(temp__5457__auto__)){
var possible_options = temp__5457__auto__;
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.call(null,possible_options),null], null);
}catch (e12053){var e = e12053;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,["Unable to create zprint options-map from: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(possible_options),"' found in !zprint directive number: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint_num)," because: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], null);
}} else {
return null;
}
});
/**
 * If a string is all spaces and has at least one space, 
 *   returns the count of the spaces, otherwise nil.
 */
zprint.core.spaces_QMARK_ = (function zprint$core$spaces_QMARK_(s){
var len = cljs.core.count.call(null,s);
if((len === (0))){
return null;
} else {
if(cljs.core.empty_QMARK_.call(null,clojure.string.replace.call(null,s," ",""))){
return len;
} else {
return null;
}
}
});
/**
 * Take one form from a file and process it.  The primary goal is
 *   of course to produce a string to put into the output file.  In
 *   addition, see if that string starts with ;!zprint and if it does,
 *   pass along that information back to the caller.  The input is a 
 *   [[next-options <previous-string>] form], where next-options accumulates
 *   the information to be applied to the next non-comment/non-whitespace
 *   element in the file.  The output is [next-options output-str zprint-num], 
 *   since reductions is used to call this function.  See process-multiple-forms
 *   for what is actually done with the various :format values.
 */
zprint.core.process_form = (function zprint$core$process_form(rest_options,zprint_fn,zprint_specifier,p__12054,form){
var vec__12055 = p__12054;
var next_options = cljs.core.nth.call(null,vec__12055,(0),null);
var _ = cljs.core.nth.call(null,vec__12055,(1),null);
var indent = cljs.core.nth.call(null,vec__12055,(2),null);
var zprint_num = cljs.core.nth.call(null,vec__12055,(3),null);
var comment_QMARK_ = zprint.zutil.zcomment_QMARK_.call(null,form);
var whitespace_form_QMARK_ = zprint.zutil.whitespace_QMARK_.call(null,form);
var vec__12058 = (cljs.core.truth_((function (){var and__3938__auto__ = comment_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = (indent === (0));
if(and__3938__auto____$1){
return new cljs.core.Keyword(null,"process-bang-zprint?","process-bang-zprint?",-1250782024).cljs$core$IFn$_invoke$arity$1(rest_options);
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())?zprint.core.get_options_from_comment.call(null,(zprint_num + (1)),zprint.zutil.string.call(null,form)):null);
var new_options = cljs.core.nth.call(null,vec__12058,(0),null);
var error_str = cljs.core.nth.call(null,vec__12058,(1),null);
var next_options__$1 = (((indent === (0)))?next_options:cljs.core.assoc.call(null,next_options,new cljs.core.Keyword(null,"indent","indent",-148200125),indent));
var internal_options = (cljs.core.truth_((function (){var or__3949__auto__ = comment_QMARK_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.empty_QMARK_.call(null,next_options__$1);
}
})())?rest_options:zprint.config.merge_deep.call(null,rest_options,next_options__$1));
var decision_options = zprint.config.merge_deep.call(null,zprint.config.get_options.call(null),internal_options);
var space_count = (cljs.core.truth_(whitespace_form_QMARK_)?(cljs.core.truth_(new cljs.core.Keyword(null,"interpose","interpose",576140629).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parse","parse",-1162164619).cljs$core$IFn$_invoke$arity$1(decision_options)))?(0):zprint.core.spaces_QMARK_.call(null,zprint.zutil.string.call(null,form))):null);
var drop_QMARK_ = !(cljs.core.not.call(null,(function (){var and__3938__auto__ = space_count;
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = !(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"skip","skip",602715391),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(next_options__$1)));
if(and__3938__auto____$1){
var or__3949__auto__ = new cljs.core.Keyword(null,"interpose","interpose",576140629).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parse","parse",-1162164619).cljs$core$IFn$_invoke$arity$1(decision_options));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left-space","left-space",457574289).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parse","parse",-1162164619).cljs$core$IFn$_invoke$arity$1(decision_options)),new cljs.core.Keyword(null,"drop","drop",364481611));
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})()));
var local_options = (cljs.core.truth_(new_options)?new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054),false], null),new cljs.core.Keyword(null,"zipper?","zipper?",-1061271842),true,new cljs.core.Keyword(null,"file?","file?",1755223728),true,new cljs.core.Keyword(null,"drop?","drop?",-2009514790),drop_QMARK_], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"zipper?","zipper?",-1061271842),true,new cljs.core.Keyword(null,"file?","file?",1755223728),true,new cljs.core.Keyword(null,"drop?","drop?",-2009514790),drop_QMARK_], null));
var internal_options__$1 = zprint.config.merge_deep.call(null,internal_options,local_options);
var output_str = ((((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"off","off",606440789),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(decision_options))) || (((cljs.core.not.call(null,(function (){var or__3949__auto__ = comment_QMARK_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return whitespace_form_QMARK_;
}
})())) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"skip","skip",602715391),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(internal_options__$1)))))))?zprint.zutil.string.call(null,form):zprint_fn.call(null,internal_options__$1,form));
var local_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"skip","skip",602715391),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new_options))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new_options))));
if(cljs.core.truth_((function (){var and__3938__auto__ = new_options;
if(cljs.core.truth_(and__3938__auto__)){
return !(local_QMARK_);
} else {
return and__3938__auto__;
}
})())){
zprint.core.set_options_BANG_.call(null,new_options,[";!zprint number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((zprint_num + (1)))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint_specifier)].join(''));
} else {
}

if(cljs.core.truth_(error_str)){
cljs.core.println.call(null,"Warning: ",error_str);
} else {
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [((local_QMARK_)?zprint.config.merge_deep.call(null,next_options__$1,new_options):(cljs.core.truth_((function (){var or__3949__auto__ = comment_QMARK_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return whitespace_form_QMARK_;
}
})())?next_options__$1:cljs.core.PersistentArrayMap.EMPTY
)),output_str,(function (){var or__3949__auto__ = space_count;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})(),(cljs.core.truth_(new_options)?(zprint_num + (1)):zprint_num)], null);
});
/**
 * Take a sequence of forms (which are zippers of the elements of
 *   a file or a string containing multiple forms somewhere), and not 
 *   only format them for output but also handle comments containing 
 *   ;!zprint that affect the options-map throughout the processing.
 */
zprint.core.process_multiple_forms = (function zprint$core$process_multiple_forms(rest_options,zprint_fn,zprint_specifier,forms){
var interpose_option = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"interpose","interpose",576140629).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parse","parse",-1162164619).cljs$core$IFn$_invoke$arity$1(rest_options));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"interpose","interpose",576140629).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parse","parse",-1162164619).cljs$core$IFn$_invoke$arity$1(zprint.config.get_options.call(null)));
}
})();
var interpose_str = (((((interpose_option == null)) || (interpose_option === false)))?null:((typeof interpose_option === 'string')?interpose_option:((interpose_option === true)?"\n":(function(){throw (new Error(["Unsupported {:parse {:interpose value}}: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(interpose_option)].join('')))})()
)));
var seq_of_zprint_fn = cljs.core.reductions.call(null,cljs.core.partial.call(null,zprint.core.process_form,rest_options,zprint_fn,zprint_specifier),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,"",(0),(0)], null),zprint.zutil.zmap_all.call(null,cljs.core.identity,forms));
var seq_of_strings = cljs.core.map.call(null,cljs.core.second,seq_of_zprint_fn);
if(cljs.core.truth_(interpose_str)){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,interpose_str,cljs.core.remove.call(null,cljs.core.empty_QMARK_,seq_of_strings)));
} else {
return cljs.core.apply.call(null,cljs.core.str,seq_of_strings);
}
});
/**
 * Take a string, which typically holds the contents of an entire
 *   file, but doesn't have to, and format the entire string, outputing
 *   a formatted string.  It respects white space at the top level,
 *   while completely ignoring it within all top level forms (typically
 *   defs and function definitions).  It allows comments at the top
 *   level, as well as in function definitions, and also supports
 *   ;!zprint directives at the top level. See File Comment API for
 *   information on ;!zprint directives. zprint-specifier is the thing
 *   that will be used in messages if errors are detected in ;!zprint
 *   directives, so it should identify the file (or other element) to
 *   allow the user to find the problem. new-options is an options-map 
 *   containing options to be used when doing the formatting (and will 
 *   be overriddden by any options in ;!zprint directives).  doc-str is 
 *   an optional string to be used when setting the new-options into the 
 *   configuration.
 */
zprint.core.zprint_file_str = (function zprint$core$zprint_file_str(var_args){
var G__12062 = arguments.length;
switch (G__12062) {
case 4:
return zprint.core.zprint_file_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return zprint.core.zprint_file_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return zprint.core.zprint_file_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.core.zprint_file_str.cljs$core$IFn$_invoke$arity$4 = (function (file_str,zprint_specifier,new_options,doc_str){
var original_options = zprint.config.get_options.call(null);
var original_doc_map = zprint.config.get_explained_all_options.call(null);
if(cljs.core.truth_(new_options)){
zprint.core.set_options_BANG_.call(null,new_options,doc_str);
} else {
}

try{var lines = clojure.string.split.call(null,file_str,/\n/);
var lines__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"expand?","expand?",-1744295862).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",-559583621).cljs$core$IFn$_invoke$arity$1(zprint.config.get_options.call(null))))?cljs.core.map.call(null,cljs.core.partial.call(null,zprint.zprint.expand_tabs,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tab","tab",-559583621).cljs$core$IFn$_invoke$arity$1(zprint.config.get_options.call(null)))),lines):lines);
var filestring = clojure.string.join.call(null,"\n",lines__$1);
var ends_with_nl_QMARK_ = clojure.string.ends_with_QMARK_.call(null,file_str,"\n");
var filestring__$1 = ((ends_with_nl_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(filestring),"\n"].join(''):filestring);
var forms = zprint.zutil.edn_STAR_.call(null,rewrite_clj.parser.parse_string_all.call(null,filestring__$1));
var pmf_options = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"process-bang-zprint?","process-bang-zprint?",-1250782024),true,new cljs.core.Keyword(null,"color?","color?",-1891974356),false], null);
var pmf_options__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"interpose","interpose",576140629).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parse","parse",-1162164619).cljs$core$IFn$_invoke$arity$1(zprint.config.get_options.call(null))))?cljs.core.assoc.call(null,pmf_options,new cljs.core.Keyword(null,"trim-comments?","trim-comments?",-1532658667),true):pmf_options);
var out_str = zprint.core.process_multiple_forms.call(null,pmf_options__$1,zprint.core.czprint_str_internal,zprint_specifier,forms);
if(((ends_with_nl_QMARK_) && (!(clojure.string.ends_with_QMARK_.call(null,out_str,"\n"))))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(out_str),"\n"].join('');
} else {
return out_str;
}
}finally {zprint.config.reset_options_BANG_.call(null,original_options,original_doc_map);
}});

zprint.core.zprint_file_str.cljs$core$IFn$_invoke$arity$3 = (function (file_str,zprint_specifier,new_options){
return zprint.core.zprint_file_str.call(null,file_str,zprint_specifier,new_options,"zprint-file-str input");
});

zprint.core.zprint_file_str.cljs$core$IFn$_invoke$arity$2 = (function (file_str,zprint_specifier){
return zprint.core.zprint_file_str.call(null,file_str,zprint_specifier,null,null);
});

zprint.core.zprint_file_str.cljs$lang$maxFixedArity = 4;

/**
 * Take a spec and a key, and format the output as a string. Width is
 *   because the width isn't really (:width options).
 */
zprint.core.format_spec = (function zprint$core$format_spec(options,describe_fn,fn_spec,indent,key){
var temp__5457__auto__ = cljs.core.get.call(null,fn_spec,key);
if(cljs.core.truth_(temp__5457__auto__)){
var key_spec = temp__5457__auto__;
var key_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key)),": "].join('');
var total_indent = (cljs.core.count.call(null,key_str) + indent);
var width = ((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(options) - total_indent) - (1));
var key_spec_data = describe_fn.call(null,key_spec);
var spec_str = zprint.core.zprint_str.call(null,key_spec_data,width,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"spec","spec",347520401)], null));
var spec_no_nl = clojure.string.split.call(null,spec_str,/\n/);
var spec_shift_right = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,total_indent))].join(''),spec_no_nl));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.blanks.call(null,indent)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_shift_right)].join('');
} else {
return null;
}
});

//# sourceMappingURL=core.js.map
