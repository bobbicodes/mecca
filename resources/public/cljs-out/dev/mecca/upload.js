// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.upload');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('cljs.core.async');
mecca.upload.first_file = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (e){
var target = e.currentTarget;
var file = (target.files[(0)]);
target.value = "";

return file;
}));
mecca.upload.extract_result = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__20982_SHARP_){
return p1__20982_SHARP_.target.result;
}));
mecca.upload.upload_reqs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),mecca.upload.first_file);
mecca.upload.file_reads = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),mecca.upload.extract_result);
mecca.upload.put_upload = (function mecca$upload$put_upload(e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(mecca.upload.upload_reqs,e);
});
var c__14735__auto___21005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto___21005){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto___21005){
return (function (state_20995){
var state_val_20996 = (state_20995[(1)]);
if((state_val_20996 === (1))){
var state_20995__$1 = state_20995;
var statearr_20997_21006 = state_20995__$1;
(statearr_20997_21006[(2)] = null);

(statearr_20997_21006[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20996 === (2))){
var inst_20985 = (new FileReader());
var state_20995__$1 = (function (){var statearr_20998 = state_20995;
(statearr_20998[(7)] = inst_20985);

return statearr_20998;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20995__$1,(4),mecca.upload.upload_reqs);
} else {
if((state_val_20996 === (3))){
var inst_20993 = (state_20995[(2)]);
var state_20995__$1 = state_20995;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20995__$1,inst_20993);
} else {
if((state_val_20996 === (4))){
var inst_20985 = (state_20995[(7)]);
var inst_20987 = (state_20995[(2)]);
var inst_20988 = (function (){var reader = inst_20985;
var file = inst_20987;
return ((function (reader,file,inst_20985,inst_20987,state_val_20996,c__14735__auto___21005){
return (function (p1__20983_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(mecca.upload.file_reads,p1__20983_SHARP_);
});
;})(reader,file,inst_20985,inst_20987,state_val_20996,c__14735__auto___21005))
})();
var inst_20989 = inst_20985.onload = inst_20988;
var inst_20990 = inst_20985.readAsArrayBuffer(inst_20987);
var state_20995__$1 = (function (){var statearr_20999 = state_20995;
(statearr_20999[(8)] = inst_20989);

(statearr_20999[(9)] = inst_20990);

return statearr_20999;
})();
var statearr_21000_21007 = state_20995__$1;
(statearr_21000_21007[(2)] = null);

(statearr_21000_21007[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
});})(c__14735__auto___21005))
;
return ((function (switch__14552__auto__,c__14735__auto___21005){
return (function() {
var mecca$upload$state_machine__14553__auto__ = null;
var mecca$upload$state_machine__14553__auto____0 = (function (){
var statearr_21001 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21001[(0)] = mecca$upload$state_machine__14553__auto__);

(statearr_21001[(1)] = (1));

return statearr_21001;
});
var mecca$upload$state_machine__14553__auto____1 = (function (state_20995){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_20995);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e21002){if((e21002 instanceof Object)){
var ex__14556__auto__ = e21002;
var statearr_21003_21008 = state_20995;
(statearr_21003_21008[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20995);

return cljs.core.cst$kw$recur;
} else {
throw e21002;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__21009 = state_20995;
state_20995 = G__21009;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
mecca$upload$state_machine__14553__auto__ = function(state_20995){
switch(arguments.length){
case 0:
return mecca$upload$state_machine__14553__auto____0.call(this);
case 1:
return mecca$upload$state_machine__14553__auto____1.call(this,state_20995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$upload$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$upload$state_machine__14553__auto____0;
mecca$upload$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$upload$state_machine__14553__auto____1;
return mecca$upload$state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto___21005))
})();
var state__14737__auto__ = (function (){var statearr_21004 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_21004[(6)] = c__14735__auto___21005);

return statearr_21004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto___21005))
);

var c__14735__auto___21031 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto___21031){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto___21031){
return (function (state_21021){
var state_val_21022 = (state_21021[(1)]);
if((state_val_21022 === (1))){
var state_21021__$1 = state_21021;
var statearr_21023_21032 = state_21021__$1;
(statearr_21023_21032[(2)] = null);

(statearr_21023_21032[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21022 === (2))){
var inst_21011 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21012 = [cljs.core.cst$kw$file_DASH_upload];
var inst_21013 = (new cljs.core.PersistentVector(null,1,(5),inst_21011,inst_21012,null));
var state_21021__$1 = (function (){var statearr_21024 = state_21021;
(statearr_21024[(7)] = inst_21013);

return statearr_21024;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21021__$1,(4),mecca.upload.file_reads);
} else {
if((state_val_21022 === (3))){
var inst_21019 = (state_21021[(2)]);
var state_21021__$1 = state_21021;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21021__$1,inst_21019);
} else {
if((state_val_21022 === (4))){
var inst_21013 = (state_21021[(7)]);
var inst_21015 = (state_21021[(2)]);
var inst_21016 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$2(inst_21013,inst_21015) : re_frame.core.dispatch.call(null,inst_21013,inst_21015));
var state_21021__$1 = (function (){var statearr_21025 = state_21021;
(statearr_21025[(8)] = inst_21016);

return statearr_21025;
})();
var statearr_21026_21033 = state_21021__$1;
(statearr_21026_21033[(2)] = null);

(statearr_21026_21033[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
});})(c__14735__auto___21031))
;
return ((function (switch__14552__auto__,c__14735__auto___21031){
return (function() {
var mecca$upload$state_machine__14553__auto__ = null;
var mecca$upload$state_machine__14553__auto____0 = (function (){
var statearr_21027 = [null,null,null,null,null,null,null,null,null];
(statearr_21027[(0)] = mecca$upload$state_machine__14553__auto__);

(statearr_21027[(1)] = (1));

return statearr_21027;
});
var mecca$upload$state_machine__14553__auto____1 = (function (state_21021){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_21021);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e21028){if((e21028 instanceof Object)){
var ex__14556__auto__ = e21028;
var statearr_21029_21034 = state_21021;
(statearr_21029_21034[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21021);

return cljs.core.cst$kw$recur;
} else {
throw e21028;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__21035 = state_21021;
state_21021 = G__21035;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
mecca$upload$state_machine__14553__auto__ = function(state_21021){
switch(arguments.length){
case 0:
return mecca$upload$state_machine__14553__auto____0.call(this);
case 1:
return mecca$upload$state_machine__14553__auto____1.call(this,state_21021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$upload$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$upload$state_machine__14553__auto____0;
mecca$upload$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$upload$state_machine__14553__auto____1;
return mecca$upload$state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto___21031))
})();
var state__14737__auto__ = (function (){var statearr_21030 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_21030[(6)] = c__14735__auto___21031);

return statearr_21030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto___21031))
);

