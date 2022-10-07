goog.provide('mecca.upload');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.core.async');
mecca.upload.first_file = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (e){
var target = e.currentTarget;
var file = (target.files[(0)]);
(target.value = "");

return file;
}));
mecca.upload.extract_result = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__27984_SHARP_){
return p1__27984_SHARP_.target.result;
}));
mecca.upload.upload_reqs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),mecca.upload.first_file);
mecca.upload.file_reads = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),mecca.upload.extract_result);
mecca.upload.put_upload = (function mecca$upload$put_upload(e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(mecca.upload.upload_reqs,e);
});
var c__25573__auto___28058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25574__auto__ = (function (){var switch__25528__auto__ = (function (state_28001){
var state_val_28002 = (state_28001[(1)]);
if((state_val_28002 === (1))){
var state_28001__$1 = state_28001;
var statearr_28005_28060 = state_28001__$1;
(statearr_28005_28060[(2)] = null);

(statearr_28005_28060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28002 === (2))){
var inst_27990 = (new FileReader());
var state_28001__$1 = (function (){var statearr_28006 = state_28001;
(statearr_28006[(7)] = inst_27990);

return statearr_28006;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28001__$1,(4),mecca.upload.upload_reqs);
} else {
if((state_val_28002 === (3))){
var inst_27999 = (state_28001[(2)]);
var state_28001__$1 = state_28001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28001__$1,inst_27999);
} else {
if((state_val_28002 === (4))){
var inst_27990 = (state_28001[(7)]);
var inst_27993 = (state_28001[(2)]);
var inst_27994 = (function (){var reader = inst_27990;
var file = inst_27993;
return (function (p1__27987_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(mecca.upload.file_reads,p1__27987_SHARP_);
});
})();
var inst_27995 = (inst_27990.onload = inst_27994);
var inst_27996 = inst_27990.readAsArrayBuffer(inst_27993);
var state_28001__$1 = (function (){var statearr_28008 = state_28001;
(statearr_28008[(8)] = inst_27996);

(statearr_28008[(9)] = inst_27995);

return statearr_28008;
})();
var statearr_28020_28067 = state_28001__$1;
(statearr_28020_28067[(2)] = null);

(statearr_28020_28067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var mecca$upload$state_machine__25529__auto__ = null;
var mecca$upload$state_machine__25529__auto____0 = (function (){
var statearr_28021 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28021[(0)] = mecca$upload$state_machine__25529__auto__);

(statearr_28021[(1)] = (1));

return statearr_28021;
});
var mecca$upload$state_machine__25529__auto____1 = (function (state_28001){
while(true){
var ret_value__25530__auto__ = (function (){try{while(true){
var result__25531__auto__ = switch__25528__auto__(state_28001);
if(cljs.core.keyword_identical_QMARK_(result__25531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25531__auto__;
}
break;
}
}catch (e28022){if((e28022 instanceof Object)){
var ex__25532__auto__ = e28022;
var statearr_28023_28070 = state_28001;
(statearr_28023_28070[(5)] = ex__25532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28022;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28074 = state_28001;
state_28001 = G__28074;
continue;
} else {
return ret_value__25530__auto__;
}
break;
}
});
mecca$upload$state_machine__25529__auto__ = function(state_28001){
switch(arguments.length){
case 0:
return mecca$upload$state_machine__25529__auto____0.call(this);
case 1:
return mecca$upload$state_machine__25529__auto____1.call(this,state_28001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$upload$state_machine__25529__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$upload$state_machine__25529__auto____0;
mecca$upload$state_machine__25529__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$upload$state_machine__25529__auto____1;
return mecca$upload$state_machine__25529__auto__;
})()
})();
var state__25575__auto__ = (function (){var statearr_28024 = (f__25574__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25574__auto__.cljs$core$IFn$_invoke$arity$0() : f__25574__auto__.call(null));
(statearr_28024[(6)] = c__25573__auto___28058);

return statearr_28024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25575__auto__);
}));

var c__25573__auto___28077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25574__auto__ = (function (){var switch__25528__auto__ = (function (state_28037){
var state_val_28038 = (state_28037[(1)]);
if((state_val_28038 === (1))){
var state_28037__$1 = state_28037;
var statearr_28039_28078 = state_28037__$1;
(statearr_28039_28078[(2)] = null);

(statearr_28039_28078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28038 === (2))){
var inst_28026 = cljs.core.PersistentVector.EMPTY_NODE;
var state_28037__$1 = (function (){var statearr_28040 = state_28037;
(statearr_28040[(7)] = inst_28026);

return statearr_28040;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28037__$1,(4),mecca.upload.file_reads);
} else {
if((state_val_28038 === (3))){
var inst_28035 = (state_28037[(2)]);
var state_28037__$1 = state_28037;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28037__$1,inst_28035);
} else {
if((state_val_28038 === (4))){
var inst_28026 = (state_28037[(7)]);
var inst_28028 = (state_28037[(2)]);
var inst_28029 = (new ArrayBuffer(inst_28028));
var inst_28030 = [new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),inst_28029];
var inst_28031 = (new cljs.core.PersistentVector(null,2,(5),inst_28026,inst_28030,null));
var inst_28032 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_28031) : re_frame.core.dispatch.call(null,inst_28031));
var state_28037__$1 = (function (){var statearr_28042 = state_28037;
(statearr_28042[(8)] = inst_28032);

return statearr_28042;
})();
var statearr_28043_28080 = state_28037__$1;
(statearr_28043_28080[(2)] = null);

(statearr_28043_28080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var mecca$upload$state_machine__25529__auto__ = null;
var mecca$upload$state_machine__25529__auto____0 = (function (){
var statearr_28044 = [null,null,null,null,null,null,null,null,null];
(statearr_28044[(0)] = mecca$upload$state_machine__25529__auto__);

(statearr_28044[(1)] = (1));

return statearr_28044;
});
var mecca$upload$state_machine__25529__auto____1 = (function (state_28037){
while(true){
var ret_value__25530__auto__ = (function (){try{while(true){
var result__25531__auto__ = switch__25528__auto__(state_28037);
if(cljs.core.keyword_identical_QMARK_(result__25531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25531__auto__;
}
break;
}
}catch (e28045){if((e28045 instanceof Object)){
var ex__25532__auto__ = e28045;
var statearr_28046_28083 = state_28037;
(statearr_28046_28083[(5)] = ex__25532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28045;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28084 = state_28037;
state_28037 = G__28084;
continue;
} else {
return ret_value__25530__auto__;
}
break;
}
});
mecca$upload$state_machine__25529__auto__ = function(state_28037){
switch(arguments.length){
case 0:
return mecca$upload$state_machine__25529__auto____0.call(this);
case 1:
return mecca$upload$state_machine__25529__auto____1.call(this,state_28037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$upload$state_machine__25529__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$upload$state_machine__25529__auto____0;
mecca$upload$state_machine__25529__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$upload$state_machine__25529__auto____1;
return mecca$upload$state_machine__25529__auto__;
})()
})();
var state__25575__auto__ = (function (){var statearr_28048 = (f__25574__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25574__auto__.cljs$core$IFn$_invoke$arity$0() : f__25574__auto__.call(null));
(statearr_28048[(6)] = c__25573__auto___28077);

return statearr_28048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25575__auto__);
}));


//# sourceMappingURL=mecca.upload.js.map
