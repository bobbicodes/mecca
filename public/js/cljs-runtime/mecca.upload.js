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
mecca.upload.extract_result = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__44566_SHARP_){
return p1__44566_SHARP_.target.result;
}));
mecca.upload.upload_reqs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),mecca.upload.first_file);
mecca.upload.file_reads = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),mecca.upload.extract_result);
mecca.upload.put_upload = (function mecca$upload$put_upload(e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(mecca.upload.upload_reqs,e);
});
var c__36933__auto___44615 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36934__auto__ = (function (){var switch__36865__auto__ = (function (state_44580){
var state_val_44581 = (state_44580[(1)]);
if((state_val_44581 === (1))){
var state_44580__$1 = state_44580;
var statearr_44582_44616 = state_44580__$1;
(statearr_44582_44616[(2)] = null);

(statearr_44582_44616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44581 === (2))){
var inst_44569 = (new FileReader());
var state_44580__$1 = (function (){var statearr_44583 = state_44580;
(statearr_44583[(7)] = inst_44569);

return statearr_44583;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44580__$1,(4),mecca.upload.upload_reqs);
} else {
if((state_val_44581 === (3))){
var inst_44578 = (state_44580[(2)]);
var state_44580__$1 = state_44580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44580__$1,inst_44578);
} else {
if((state_val_44581 === (4))){
var inst_44569 = (state_44580[(7)]);
var inst_44572 = (state_44580[(2)]);
var inst_44573 = (function (){var reader = inst_44569;
var file = inst_44572;
return (function (p1__44567_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(mecca.upload.file_reads,p1__44567_SHARP_);
});
})();
var inst_44574 = (inst_44569.onload = inst_44573);
var inst_44575 = inst_44569.readAsArrayBuffer(inst_44572);
var state_44580__$1 = (function (){var statearr_44584 = state_44580;
(statearr_44584[(8)] = inst_44575);

(statearr_44584[(9)] = inst_44574);

return statearr_44584;
})();
var statearr_44587_44619 = state_44580__$1;
(statearr_44587_44619[(2)] = null);

(statearr_44587_44619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var mecca$upload$state_machine__36866__auto__ = null;
var mecca$upload$state_machine__36866__auto____0 = (function (){
var statearr_44588 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44588[(0)] = mecca$upload$state_machine__36866__auto__);

(statearr_44588[(1)] = (1));

return statearr_44588;
});
var mecca$upload$state_machine__36866__auto____1 = (function (state_44580){
while(true){
var ret_value__36867__auto__ = (function (){try{while(true){
var result__36868__auto__ = switch__36865__auto__(state_44580);
if(cljs.core.keyword_identical_QMARK_(result__36868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36868__auto__;
}
break;
}
}catch (e44589){if((e44589 instanceof Object)){
var ex__36869__auto__ = e44589;
var statearr_44590_44626 = state_44580;
(statearr_44590_44626[(5)] = ex__36869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44589;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44627 = state_44580;
state_44580 = G__44627;
continue;
} else {
return ret_value__36867__auto__;
}
break;
}
});
mecca$upload$state_machine__36866__auto__ = function(state_44580){
switch(arguments.length){
case 0:
return mecca$upload$state_machine__36866__auto____0.call(this);
case 1:
return mecca$upload$state_machine__36866__auto____1.call(this,state_44580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$upload$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$upload$state_machine__36866__auto____0;
mecca$upload$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$upload$state_machine__36866__auto____1;
return mecca$upload$state_machine__36866__auto__;
})()
})();
var state__36935__auto__ = (function (){var statearr_44591 = (f__36934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36934__auto__.cljs$core$IFn$_invoke$arity$0() : f__36934__auto__.call(null));
(statearr_44591[(6)] = c__36933__auto___44615);

return statearr_44591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36935__auto__);
}));

var c__36933__auto___44628 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36934__auto__ = (function (){var switch__36865__auto__ = (function (state_44605){
var state_val_44606 = (state_44605[(1)]);
if((state_val_44606 === (1))){
var state_44605__$1 = state_44605;
var statearr_44607_44629 = state_44605__$1;
(statearr_44607_44629[(2)] = null);

(statearr_44607_44629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44606 === (2))){
var inst_44594 = cljs.core.PersistentVector.EMPTY_NODE;
var state_44605__$1 = (function (){var statearr_44608 = state_44605;
(statearr_44608[(7)] = inst_44594);

return statearr_44608;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44605__$1,(4),mecca.upload.file_reads);
} else {
if((state_val_44606 === (3))){
var inst_44603 = (state_44605[(2)]);
var state_44605__$1 = state_44605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44605__$1,inst_44603);
} else {
if((state_val_44606 === (4))){
var inst_44594 = (state_44605[(7)]);
var inst_44596 = (state_44605[(2)]);
var inst_44597 = (new ArrayBuffer(inst_44596));
var inst_44598 = [new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),inst_44597];
var inst_44599 = (new cljs.core.PersistentVector(null,2,(5),inst_44594,inst_44598,null));
var inst_44600 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_44599) : re_frame.core.dispatch.call(null,inst_44599));
var state_44605__$1 = (function (){var statearr_44609 = state_44605;
(statearr_44609[(8)] = inst_44600);

return statearr_44609;
})();
var statearr_44610_44630 = state_44605__$1;
(statearr_44610_44630[(2)] = null);

(statearr_44610_44630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var mecca$upload$state_machine__36866__auto__ = null;
var mecca$upload$state_machine__36866__auto____0 = (function (){
var statearr_44611 = [null,null,null,null,null,null,null,null,null];
(statearr_44611[(0)] = mecca$upload$state_machine__36866__auto__);

(statearr_44611[(1)] = (1));

return statearr_44611;
});
var mecca$upload$state_machine__36866__auto____1 = (function (state_44605){
while(true){
var ret_value__36867__auto__ = (function (){try{while(true){
var result__36868__auto__ = switch__36865__auto__(state_44605);
if(cljs.core.keyword_identical_QMARK_(result__36868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36868__auto__;
}
break;
}
}catch (e44612){if((e44612 instanceof Object)){
var ex__36869__auto__ = e44612;
var statearr_44613_44631 = state_44605;
(statearr_44613_44631[(5)] = ex__36869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44612;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44632 = state_44605;
state_44605 = G__44632;
continue;
} else {
return ret_value__36867__auto__;
}
break;
}
});
mecca$upload$state_machine__36866__auto__ = function(state_44605){
switch(arguments.length){
case 0:
return mecca$upload$state_machine__36866__auto____0.call(this);
case 1:
return mecca$upload$state_machine__36866__auto____1.call(this,state_44605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$upload$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$upload$state_machine__36866__auto____0;
mecca$upload$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$upload$state_machine__36866__auto____1;
return mecca$upload$state_machine__36866__auto__;
})()
})();
var state__36935__auto__ = (function (){var statearr_44614 = (f__36934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36934__auto__.cljs$core$IFn$_invoke$arity$0() : f__36934__auto__.call(null));
(statearr_44614[(6)] = c__36933__auto___44628);

return statearr_44614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36935__auto__);
}));


//# sourceMappingURL=mecca.upload.js.map
