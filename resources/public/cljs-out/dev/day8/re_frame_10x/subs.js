// Compiled by ClojureScript 1.10.339 {}
goog.provide('day8.re_frame_10x.subs');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core');
goog.require('day8.re_frame_10x.metamorphic');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('zprint.core');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("settings","root","settings/root",-1329120290),(function (db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword(null,"settings","settings",1556144875));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null),(function (settings,_){
return cljs.core.get.call(null,settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("settings","panel-width%-rounded","settings/panel-width%-rounded",1475049191),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808)], null),(function (panel_width_PERCENT_,p__12690){
var vec__12691 = p__12690;
var _ = cljs.core.nth.call(null,vec__12691,(0),null);
var n = cljs.core.nth.call(null,vec__12691,(1),null);
return ((Math.ceil(((panel_width_PERCENT_ * (100)) / n)) * n) / 100.0);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("settings","window-width","settings/window-width",640332180),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null),(function (settings,_){
return cljs.core.get.call(null,settings,new cljs.core.Keyword(null,"window-width","window-width",2057825599));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width","settings/window-width",640332180)], null),(function (width,p__12694){
var vec__12695 = p__12694;
var _ = cljs.core.nth.call(null,vec__12695,(0),null);
var n = cljs.core.nth.call(null,vec__12695,(1),null);
return (Math.ceil((width / n)) * n);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null),(function (settings,_){
return cljs.core.get.call(null,settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null),(function (settings,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878).cljs$core$IFn$_invoke$arity$1(settings))){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return cljs.core.get.call(null,settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null),(function (settings){
return new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252).cljs$core$IFn$_invoke$arity$1(settings);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null),(function (settings){
return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals.call(null,new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589).cljs$core$IFn$_invoke$arity$1(settings)));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null),(function (settings){
return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals.call(null,new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599).cljs$core$IFn$_invoke$arity$1(settings)));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null),(function (settings){
return new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092).cljs$core$IFn$_invoke$arity$1(settings);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null),(function (settings){
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(settings);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null),(function (settings){
return new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462).cljs$core$IFn$_invoke$arity$1(settings);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("app-db","root","app-db/root",-1721368731),(function (db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("app-db","current-epoch-app-db-after","app-db/current-epoch-app-db-after",-1412128095),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null),(function (trace,_){
return cljs.core.get_in.call(null,trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("app-db","current-epoch-app-db-before","app-db/current-epoch-app-db-before",-615465288),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null),(function (trace,_){
return cljs.core.get_in.call(null,trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null),(function (app_db_settings,_){
return cljs.core.map.call(null,(function (p1__12698_SHARP_){
return cljs.core.assoc.call(null,cljs.core.val.call(null,p1__12698_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key.call(null,p1__12698_SHARP_));
}),cljs.core.get.call(null,app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588)));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null),(function (app_db_settings,_){
return cljs.core.get.call(null,app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null),(function (app_db_settings,_){
return cljs.core.get.call(null,app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null),(function (expansions,p__12699){
var vec__12700 = p__12699;
var _ = cljs.core.nth.call(null,vec__12700,(0),null);
var path = cljs.core.nth.call(null,vec__12700,(1),null);
return cljs.core.contains_QMARK_.call(null,expansions,path);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null),(function (root,_){
return new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415).cljs$core$IFn$_invoke$arity$1(root);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946),(function (db,_){
return new cljs.core.Keyword(null,"traces","traces",-1301138004).cljs$core$IFn$_invoke$arity$1(db);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647),(function (db,_){
return new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665).cljs$core$IFn$_invoke$arity$1(db);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347),(function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191),(function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("traces","categories","traces/categories",-821318016),(function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946)], null),(function (traces,_){
return new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641).cljs$core$IFn$_invoke$arity$1(traces);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null),(function (traces,_){
return cljs.core.count.call(null,traces);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null),(function (p__12703,_){
var vec__12704 = p__12703;
var traces = cljs.core.nth.call(null,vec__12704,(0),null);
var beginning = cljs.core.nth.call(null,vec__12704,(1),null);
var ending = cljs.core.nth.call(null,vec__12704,(2),null);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.utils.utils.id_between_xf.call(null,beginning,ending),traces);
}));
day8.re_frame_10x.subs.filter_ignored_views = (function day8$re_frame_10x$subs$filter_ignored_views(p__12707,_){
var vec__12708 = p__12707;
var traces = cljs.core.nth.call(null,vec__12708,(0),null);
var filtered_views = cljs.core.nth.call(null,vec__12708,(1),null);
var munged_ns = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),filtered_views));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,((function (munged_ns,vec__12708,traces,filtered_views){
return (function (trace){
var and__3938__auto__ = day8.re_frame_10x.metamorphic.render_QMARK_.call(null,trace);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.contains_QMARK_.call(null,munged_ns,cljs.core.subs.call(null,new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.call(null,new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")));
} else {
return and__3938__auto__;
}
});})(munged_ns,vec__12708,traces,filtered_views))
),traces);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null),day8.re_frame_10x.subs.filter_ignored_views);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null),day8.re_frame_10x.subs.filter_ignored_views);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647)], null),(function (trace_root){
return new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323).cljs$core$IFn$_invoke$arity$1(trace_root);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001),(function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517),(function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null),(function (snapshot,_){
return cljs.core.contains_QMARK_.call(null,snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597),(function (db,_){
return new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null),(function (p__12711,_){
var vec__12712 = p__12711;
var epochs = cljs.core.nth.call(null,vec__12712,(0),null);
var match_ids = cljs.core.nth.call(null,vec__12712,(1),null);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
var match = (((current_id == null))?cljs.core.last.call(null,new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id < cljs.core.first.call(null,match_ids)))?cljs.core.first.call(null,new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id > cljs.core.last.call(null,match_ids)))?cljs.core.last.call(null,new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):cljs.core.get.call(null,new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs),current_id)
)));
return match;
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null),(function (match_state,_){
return new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_state);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null),(function (match,_){
return day8.re_frame_10x.metamorphic.matched_event.call(null,match);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null),(function (trace,_){
return cljs.core.get_in.call(null,trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null),(function (epochs,_){
return cljs.core.count.call(null,cljs.core.get.call(null,epochs,new cljs.core.Keyword(null,"matches","matches",635497998)));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("epochs","current-event-index","epochs/current-event-index",-2026503803),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null),(function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null),(function (epochs,_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,epochs));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null),(function (epochs){
return new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(epochs);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null),(function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,match));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null),(function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,match));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null),(function (p__12715){
var vec__12716 = p__12715;
var current = cljs.core.nth.call(null,vec__12716,(0),null);
var ids = cljs.core.nth.call(null,vec__12716,(1),null);
return ((((1) < cljs.core.count.call(null,ids))) && ((((current == null)) || ((current > cljs.core.nth.call(null,ids,(0)))))));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null),(function (p__12719){
var vec__12720 = p__12719;
var current = cljs.core.nth.call(null,vec__12720,(0),null);
var ids = cljs.core.nth.call(null,vec__12720,(1),null);
return ((((1) < cljs.core.count.call(null,ids))) && (!((current == null))) && ((current < day8.re_frame_10x.utils.utils.last_in_vec.call(null,ids))));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null),(function (traces){
var start_of_epoch = cljs.core.nth.call(null,traces,(0));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec.call(null,traces);
return day8.re_frame_10x.metamorphic.elapsed_time.call(null,start_of_epoch,end_of_epoch);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null),(function (traces){
return cljs.core.filter.call(null,(function (p1__12723_SHARP_){
var or__3949__auto__ = day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_.call(null,p1__12723_SHARP_);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return day8.re_frame_10x.metamorphic.request_animation_frame_end_QMARK_.call(null,p1__12723_SHARP_);
}
}),traces);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null),(function (frame_traces){
return cljs.core.count.call(null,cljs.core.filter.call(null,day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,frame_traces));
}));
/**
 * Returns the sum of nums. (+) returns nil (not 0 like in cljs.core).
 */
day8.re_frame_10x.subs._PLUS_nil = (function day8$re_frame_10x$subs$_PLUS_nil(var_args){
var G__12728 = arguments.length;
switch (G__12728) {
case 0:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___12730 = arguments.length;
var i__4532__auto___12731 = (0);
while(true){
if((i__4532__auto___12731 < len__4531__auto___12730)){
args_arr__4546__auto__.push((arguments[i__4532__auto___12731]));

var G__12732 = (i__4532__auto___12731 + (1));
i__4532__auto___12731 = G__12732;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((2)),(0),null));
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4547__auto__);

}
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (x + y);
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.call(null,cljs.core._PLUS_,(x + y),more);
});

/** @this {Function} */
day8.re_frame_10x.subs._PLUS_nil.cljs$lang$applyTo = (function (seq12725){
var G__12726 = cljs.core.first.call(null,seq12725);
var seq12725__$1 = cljs.core.next.call(null,seq12725);
var G__12727 = cljs.core.first.call(null,seq12725__$1);
var seq12725__$2 = cljs.core.next.call(null,seq12725__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12726,G__12727,seq12725__$2);
});

day8.re_frame_10x.subs._PLUS_nil.cljs$lang$maxFixedArity = (2);

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null),(function (p__12733,p__12734){
var vec__12735 = p__12733;
var af_start_end = cljs.core.nth.call(null,vec__12735,(0),null);
var epoch_traces = cljs.core.nth.call(null,vec__12735,(1),null);
var vec__12738 = p__12734;
var _ = cljs.core.nth.call(null,vec__12738,(0),null);
var frame_number = cljs.core.nth.call(null,vec__12738,(1),null);
var frame_pairs = cljs.core.partition.call(null,(2),af_start_end);
var vec__12741 = cljs.core.nth.call(null,frame_pairs,(frame_number - (1)));
var start = cljs.core.nth.call(null,vec__12741,(0),null);
var end = cljs.core.nth.call(null,vec__12741,(1),null);
var af_traces = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.metamorphic.id_between_xf.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(end)),epoch_traces);
var total_time = day8.re_frame_10x.metamorphic.elapsed_time.call(null,start,end);
var subs_time = cljs.core.transduce.call(null,cljs.core.comp.call(null,cljs.core.filter.call(null,day8.re_frame_10x.metamorphic.subscription_QMARK_),cljs.core.map.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
var render_time = cljs.core.transduce.call(null,cljs.core.comp.call(null,cljs.core.filter.call(null,day8.re_frame_10x.metamorphic.render_QMARK_),cljs.core.map.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693),total_time,new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226),subs_time,new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151),render_time,new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573),((total_time - subs_time) - render_time)], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null),(function (match){
var map__12744 = cljs.core.get.call(null,match,new cljs.core.Keyword(null,"timing","timing",-1849225195));
var map__12744__$1 = ((((!((map__12744 == null)))?(((((map__12744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12744):map__12744);
var event_time = cljs.core.get.call(null,map__12744__$1,new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188));
var event_handler_time = cljs.core.get.call(null,map__12744__$1,new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644));
var event_dofx_time = cljs.core.get.call(null,map__12744__$1,new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716));
var event_run_time = cljs.core.get.call(null,map__12744__$1,new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897));
var remaining_interceptors = ((event_time - event_handler_time) - event_dofx_time);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("timing","event-total","timing/event-total",127009054),event_run_time,new cljs.core.Keyword("timing","event-handler","timing/event-handler",383979787),event_handler_time,new cljs.core.Keyword("timing","event-effects","timing/event-effects",-1312815404),event_dofx_time,new cljs.core.Keyword("timing","event-interceptors","timing/event-interceptors",-113832767),remaining_interceptors,new cljs.core.Keyword("timing","event-misc","timing/event-misc",1534165210),((event_run_time - event_handler_time) - event_dofx_time)], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("timing","render-time","timing/render-time",-2042272059),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null),(function (traces){
var start_of_render = cljs.core.first.call(null,cljs.core.filter.call(null,day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,traces));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec.call(null,traces);
return day8.re_frame_10x.metamorphic.elapsed_time.call(null,start_of_render,end_of_epoch);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null),(function (traces){
return !(cljs.core.empty_QMARK_.call(null,traces));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","root","subs/root",-432796018),(function (db,_){
return new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(db);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","all-sub-traces","subs/all-sub-traces",1860573308),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null),(function (traces){
return cljs.core.filter.call(null,day8.re_frame_10x.metamorphic.subscription_QMARK_,traces);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null),(function (epoch){
return new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092).cljs$core$IFn$_invoke$arity$1(epoch);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","sub-state","subs/sub-state",-2134091240),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null),(function (epochs){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(epochs);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null),(function (match_state){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(match_state);
}));
day8.re_frame_10x.subs.string_BANG_ = cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__12746_SHARP_){
return !(cljs.core.empty_QMARK_.call(null,p1__12746_SHARP_));
})], null),null);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("sub","order","sub/order",-1254825160),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))),cljs.spec.alpha.nilable_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__12747){
return cljs.core.coll_QMARK_.call(null,G__12747);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))], null),null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl.call(null,new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("sub","path","sub/path",-188044288),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__12748){
return cljs.core.map_QMARK_.call(null,G__12748);
}),(function (G__12748){
return cljs.core.contains_QMARK_.call(null,G__12748,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__12748){
return cljs.core.contains_QMARK_.call(null,G__12748,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
}),(function (G__12748){
return cljs.core.contains_QMARK_.call(null,G__12748,new cljs.core.Keyword(null,"order","order",-1254677256));
}),(function (G__12748){
return cljs.core.contains_QMARK_.call(null,G__12748,new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),(function (G__12748){
return cljs.core.contains_QMARK_.call(null,G__12748,new cljs.core.Keyword(null,"path-data","path-data",1441254047));
}),(function (G__12748){
return cljs.core.contains_QMARK_.call(null,G__12748,new cljs.core.Keyword(null,"path","path",-188191168));
})], null),(function (G__12748){
return ((cljs.core.map_QMARK_.call(null,G__12748)) && (cljs.core.contains_QMARK_.call(null,G__12748,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_.call(null,G__12748,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))) && (cljs.core.contains_QMARK_.call(null,G__12748,new cljs.core.Keyword(null,"order","order",-1254677256))) && (cljs.core.contains_QMARK_.call(null,G__12748,new cljs.core.Keyword(null,"layer","layer",-1601820589))) && (cljs.core.contains_QMARK_.call(null,G__12748,new cljs.core.Keyword(null,"path-data","path-data",1441254047))) && (cljs.core.contains_QMARK_.call(null,G__12748,new cljs.core.Keyword(null,"path","path",-188191168))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"path-data","path-data",1441254047),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"order","order",-1254677256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layer","layer",-1601820589))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path-data","path-data",1441254047))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("subs","view-subs","subs/view-subs",253084832),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__12749){
return cljs.core.coll_QMARK_.call(null,G__12749);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057))], null),null));
day8.re_frame_10x.subs.sub_type_value = (function day8$re_frame_10x$subs$sub_type_value(sub_type){
var G__12750 = sub_type;
var G__12750__$1 = (((G__12750 instanceof cljs.core.Keyword))?G__12750.fqn:null);
switch (G__12750__$1) {
case "sub/create":
return (5);

break;
case "sub/run":
return (4);

break;
case "sub/dispose":
return (3);

break;
case "sub/not-run":
return (2);

break;
default:
return (1);

}
});
/**
 * Calculate a sorting value for a series of subscription trace types.
 */
day8.re_frame_10x.subs.accumulate_sub_value = (function day8$re_frame_10x$subs$accumulate_sub_value(order){
var exp = (3);
var total = (0);
var order__$1 = order;
while(true){
var temp__5455__auto__ = cljs.core.first.call(null,order__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var sub_type = temp__5455__auto__;
var G__12752 = (exp - (1));
var G__12753 = (total + (day8.re_frame_10x.subs.sub_type_value.call(null,sub_type) * Math.pow((10),exp)));
var G__12754 = cljs.core.rest.call(null,order__$1);
exp = G__12752;
total = G__12753;
order__$1 = G__12754;
continue;
} else {
return total;
}
break;
}
});
day8.re_frame_10x.subs.accumulate_sub_value_memoized = cljs.core.memoize.call(null,day8.re_frame_10x.subs.accumulate_sub_value);
day8.re_frame_10x.subs.sub_sort_val = (function day8$re_frame_10x$subs$sub_sort_val(order_x,order_y){
return cljs.core.compare.call(null,day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_y),day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_x));
});
day8.re_frame_10x.subs.sub_op_type__GT_type = (function day8$re_frame_10x$subs$sub_op_type__GT_type(t){
var G__12755 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(t);
var G__12755__$1 = (((G__12755 instanceof cljs.core.Keyword))?G__12755.fqn:null);
switch (G__12755__$1) {
case "sub/create":
return new cljs.core.Keyword(null,"created","created",-704993748);

break;
case "sub/run":
return new cljs.core.Keyword(null,"re-run","re-run",-1300247905);

break;
case "sub/dispose":
return new cljs.core.Keyword(null,"destroyed","destroyed",-427566535);

break;
default:
return new cljs.core.Keyword(null,"not-run","not-run",-848069371);

}
});
/**
 * Returns sub info prepared for rendering in pods
 */
day8.re_frame_10x.subs.prepare_pod_info = (function day8$re_frame_10x$subs$prepare_pod_info(p__12757,p__12758){
var vec__12759 = p__12757;
var sub_info = cljs.core.nth.call(null,vec__12759,(0),null);
var sub_state = cljs.core.nth.call(null,vec__12759,(1),null);
var vec__12762 = p__12758;
var subscription = cljs.core.nth.call(null,vec__12762,(0),null);
var remove_fn = ((cljs.core._EQ_.call(null,subscription,new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944)))?((function (vec__12759,sub_info,sub_state,vec__12762,subscription){
return (function (me){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,me)) == null);
});})(vec__12759,sub_info,sub_state,vec__12762,subscription))
:cljs.core.constantly.call(null,false));
var subx = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame_10x.subs.sub_sort_val,cljs.core.map.call(null,((function (remove_fn,vec__12759,sub_info,sub_state,vec__12762,subscription){
return (function (me){
var state = cljs.core.val.call(null,me);
var subscription__$1 = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(state);
var sub = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key.call(null,me),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),cljs.core.key.call(null,me),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.get_in.call(null,sub_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,subscription__$1),new cljs.core.Keyword(null,"layer","layer",-1601820589)], null)),new cljs.core.Keyword(null,"path-data","path-data",1441254047),subscription__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.pr_str.call(null,subscription__$1),new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__3949__auto__ = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451)], null);
}
})(),new cljs.core.Keyword("sub","traits","sub/traits",1778340671),new cljs.core.Keyword("sub","traits","sub/traits",1778340671).cljs$core$IFn$_invoke$arity$1(state)], null);
var sub__$1 = ((cljs.core.contains_QMARK_.call(null,state,new cljs.core.Keyword(null,"value","value",305978217)))?cljs.core.assoc.call(null,sub,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(state)):sub);
var sub__$2 = ((cljs.core.contains_QMARK_.call(null,state,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)))?cljs.core.assoc.call(null,sub__$1,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677).cljs$core$IFn$_invoke$arity$1(state)):sub__$1);
return sub__$2;
});})(remove_fn,vec__12759,sub_info,sub_state,vec__12762,subscription))
,cljs.core.remove.call(null,remove_fn,sub_state)));
return subx;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null),(function (sub_state){
return new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164).cljs$core$IFn$_invoke$arity$1(sub_state);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null),(function (sub_state){
return new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(sub_state);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033)], null),day8.re_frame_10x.subs.prepare_pod_info);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938)], null),day8.re_frame_10x.subs.prepare_pod_info);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null),(function (root,_){
return new cljs.core.Keyword(null,"filter-str","filter-str",1974484789).cljs$core$IFn$_invoke$arity$1(root);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647)], null),(function (p__12765){
var vec__12766 = p__12765;
var all_subs = cljs.core.nth.call(null,vec__12766,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.call(null,vec__12766,(1),null);
var filter_str = cljs.core.nth.call(null,vec__12766,(2),null);
var pins = cljs.core.nth.call(null,vec__12766,(3),null);
var compare_fn = ((function (vec__12766,all_subs,ignore_unchanged_l2_QMARK_,filter_str,pins){
return (function (s1,s2){
var p1 = cljs.core.boolean$.call(null,cljs.core.get_in.call(null,pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
var p2 = cljs.core.boolean$.call(null,cljs.core.get_in.call(null,pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s2),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
if(cljs.core._EQ_.call(null,p1,p2)){
return cljs.core.compare.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s2));
} else {
return p1;
}
});})(vec__12766,all_subs,ignore_unchanged_l2_QMARK_,filter_str,pins))
;
var G__12769 = cljs.core.sort.call(null,compare_fn,all_subs);
var G__12769__$1 = (cljs.core.truth_(ignore_unchanged_l2_QMARK_)?cljs.core.remove.call(null,day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,G__12769):G__12769);
if(cljs.core.truth_(cljs.core.not_empty.call(null,filter_str))){
return cljs.core.filter.call(null,((function (G__12769,G__12769__$1,compare_fn,vec__12766,all_subs,ignore_unchanged_l2_QMARK_,filter_str,pins){
return (function (p__12770){
var map__12771 = p__12770;
var map__12771__$1 = ((((!((map__12771 == null)))?(((((map__12771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12771):map__12771);
var path = cljs.core.get.call(null,map__12771__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var id = cljs.core.get.call(null,map__12771__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var or__3949__auto__ = clojure.string.includes_QMARK_.call(null,path,filter_str);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return cljs.core.get_in.call(null,pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null));
}
});})(G__12769,G__12769__$1,compare_fn,vec__12766,all_subs,ignore_unchanged_l2_QMARK_,filter_str,pins))
,G__12769__$1);
} else {
return G__12769__$1;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862)], null),(function (subs,_){
return cljs.core.frequencies.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"order","order",-1254677256),subs));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","created-count","subs/created-count",-1738545579),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null),(function (counts){
return cljs.core.get.call(null,counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","re-run-count","subs/re-run-count",603750522),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null),(function (counts){
return cljs.core.get.call(null,counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","destroyed-count","subs/destroyed-count",-218890338),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null),(function (counts){
return cljs.core.get.call(null,counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","not-run-count","subs/not-run-count",-133338676),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null),(function (counts){
return cljs.core.get.call(null,counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","unchanged-l2-subs-count","subs/unchanged-l2-subs-count",-1997261328),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null),(function (subs){
return cljs.core.count.call(null,cljs.core.filter.call(null,day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,subs));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null),(function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","sub-expansions","subs/sub-expansions",-547974030),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null),(function (subs,_){
return new cljs.core.Keyword(null,"expansions","expansions",533713877).cljs$core$IFn$_invoke$arity$1(subs);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null),(function (subs,_){
return new cljs.core.Keyword(null,"pinned","pinned",-1216085339).cljs$core$IFn$_invoke$arity$1(subs);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("code","root","code/root",-432838104),(function (db,_){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(db);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("code","current-code","code/current-code",17389180),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null),(function (traces,_){
return cljs.core.keep_indexed.call(null,(function (i,trace){
var temp__5461__auto__ = cljs.core.get_in.call(null,trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null));
if((temp__5461__auto__ == null)){
return null;
} else {
var code = temp__5461__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"trace-id","trace-id",681947249),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.vec.call(null,cljs.core.map_indexed.call(null,((function (code,temp__5461__auto__){
return (function (i__$1,code__$1){
return cljs.core.assoc.call(null,code__$1,new cljs.core.Keyword(null,"id","id",-1388402092),i__$1);
});})(code,temp__5461__auto__))
,code)),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.get_in.call(null,trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
}
}),traces);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("code","current-form","code/current-form",1888662531),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-code","code/current-code",17389180)], null),(function (code,_){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,code));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("code","current-zprint-form","code/current-zprint-form",-1297458353),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-form","code/current-form",1888662531)], null),(function (form,_){
return zprint.core.zprint_str.call(null,form);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null),(function (code,_){
return new cljs.core.Keyword(null,"code-open?","code-open?",1228336744).cljs$core$IFn$_invoke$arity$1(code);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null),(function (code,_){
return new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753).cljs$core$IFn$_invoke$arity$1(code);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("code","show-all-code?","code/show-all-code?",162236201),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null),(function (code,_){
return new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286).cljs$core$IFn$_invoke$arity$1(code);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null),(function (code,_){
return new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040).cljs$core$IFn$_invoke$arity$1(code);
}));
day8.re_frame_10x.subs.canvas = document.createElement("canvas");
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647),(function (_,___$1){
var context = day8.re_frame_10x.subs.canvas.getContext("2d");
context.font = "monospace 1em";

return context.measureText("T").width;
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("code","max-column-width","code/max-column-width",1552872919),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629),(100)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647)], null),(function (p__12773,_){
var vec__12774 = p__12773;
var window_width = cljs.core.nth.call(null,vec__12774,(0),null);
var char_width = cljs.core.nth.call(null,vec__12774,(1),null);
return Math.ceil((window_width / char_width));
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("component","root","component/root",-1714299688),(function (db,_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(db);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("component","direction","component/direction",785553634),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","root","component/root",-1714299688)], null),(function (component,_){
return new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(component);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("errors","root","errors/root",-1902924890),(function (db,_){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(db);
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("errors","popup-failed?","errors/popup-failed?",-600155433),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","root","errors/root",-1902924890)], null),(function (errors,_){
return new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682).cljs$core$IFn$_invoke$arity$1(errors);
}));

//# sourceMappingURL=subs.js.map
