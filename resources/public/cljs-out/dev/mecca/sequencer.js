// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.sequencer');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('mecca.music');
goog.require('mecca.wavetable');
mecca.sequencer.tracks = (function mecca$sequencer$tracks(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_tracks,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$track_DASH_one,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Sweep"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$controls,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"attack"], null),"Att"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_attack,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,"attack",cljs.core.cst$kw$type,"range",cljs.core.cst$kw$min,(0),cljs.core.cst$kw$max,(1),cljs.core.cst$kw$value,0.2,cljs.core.cst$kw$step,0.1], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"release"], null),"Rel"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_release,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,"release",cljs.core.cst$kw$type,"range",cljs.core.cst$kw$min,(0),cljs.core.cst$kw$max,(1),cljs.core.cst$kw$value,0.5,cljs.core.cst$kw$step,0.1], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$pads,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$role,"switch",cljs.core.cst$kw$aria_DASH_checked,false], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Voice 1, Note 1"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$role,"switch",cljs.core.cst$kw$aria_DASH_checked,false], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Voice 1, Note 2"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$role,"switch",cljs.core.cst$kw$aria_DASH_checked,false], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Voice 1, Note 3"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$role,"switch",cljs.core.cst$kw$aria_DASH_checked,false], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Voice 1, Note 4"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$track_DASH_two,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Pulse"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$controls,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"hz"], null),"Hz"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_hz,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,"hz",cljs.core.cst$kw$type,"range",cljs.core.cst$kw$min,(660),cljs.core.cst$kw$max,(1320),cljs.core.cst$kw$value,(880),cljs.core.cst$kw$step,(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"lfo"], null),"LFO"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_lfo,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,"lfo",cljs.core.cst$kw$type,"range",cljs.core.cst$kw$min,(20),cljs.core.cst$kw$max,(40),cljs.core.cst$kw$value,(30),cljs.core.cst$kw$step,(1)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$pads,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$role,"switch",cljs.core.cst$kw$aria_DASH_checked,false], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Voice 2, Note 1"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$role,"switch",cljs.core.cst$kw$aria_DASH_checked,false], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Voice 2, Note 2"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$role,"switch",cljs.core.cst$kw$aria_DASH_checked,false], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Voice 2, Note 3"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$role,"switch",cljs.core.cst$kw$aria_DASH_checked,false], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Voice 2, Note 4"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$track_DASH_three,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Noise"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$controls,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"duration"], null),"Dur"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_duration,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,"duration",cljs.core.cst$kw$type,"range",cljs.core.cst$kw$min,(0),cljs.core.cst$kw$max,(2),cljs.core.cst$kw$value,(1),cljs.core.cst$kw$step,0.1], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"band"], null),"Band"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_band,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,"band",cljs.core.cst$kw$type,"range",cljs.core.cst$kw$min,(400),cljs.core.cst$kw$max,(1200),cljs.core.cst$kw$value,(1000),cljs.core.cst$kw$step,(5)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$pads,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$role,"switch",cljs.core.cst$kw$aria_DASH_checked,false], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Voice 3, Note 1"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$role,"switch",cljs.core.cst$kw$aria_DASH_checked,false], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Voice 3, Note 2"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$role,"switch",cljs.core.cst$kw$aria_DASH_checked,false], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Voice 3, Note 3"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$role,"switch",cljs.core.cst$kw$aria_DASH_checked,false], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Voice 3, Note 4"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$track_DASH_four,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"DTMF"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$controls,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"rate"], null),"Rate"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_rate,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,"rate",cljs.core.cst$kw$type,"range",cljs.core.cst$kw$min,0.1,cljs.core.cst$kw$max,(2),cljs.core.cst$kw$value,(1),cljs.core.cst$kw$step,0.1], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$pads,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$role,"switch",cljs.core.cst$kw$aria_DASH_checked,false], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Voice 4, Note 1"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$role,"switch",cljs.core.cst$kw$aria_DASH_checked,false], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Voice 4, Note 2"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$role,"switch",cljs.core.cst$kw$aria_DASH_checked,false], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Voice 4, Note 3"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$role,"switch",cljs.core.cst$kw$aria_DASH_checked,false], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Voice 4, Note 4"], null)], null)], null)], null)], null);
});
mecca.sequencer.sequencer = (function mecca$sequencer$sequencer(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_sequencer,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$controls_DASH_main,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"ModemDN"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"bpm"], null),"BPM"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_bpm,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,"bpm",cljs.core.cst$kw$type,"range",cljs.core.cst$kw$min,(60),cljs.core.cst$kw$max,(180),cljs.core.cst$kw$value,(120),cljs.core.cst$kw$step,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span_SHARP_bpmval,(120)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data_DASH_playing,false], null),"Play"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.sequencer.tracks], null)], null);
});
mecca.sequencer.pads = document.querySelectorAll(".pads");
mecca.sequencer.allPadButtons = document.querySelectorAll("#tracks button");
mecca.sequencer.allPadButtons.forEach((function (el){
return el.addEventListener("click",(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el.getAttribute("aria-checked"),"false")){
return el.setAttribute("aria-checked","true");
} else {
return el.setAttribute("aria-checked","false");
}
}),false);
}));
mecca.sequencer.wave = cljs.core.deref(mecca.music.audiocontext).createPeriodicWave(mecca.wavetable.wavetable.real,mecca.wavetable.wavetable.imag);
mecca.sequencer.attackTime = 0.2;
mecca.sequencer.attackControl = document.querySelector("#attack");
mecca.sequencer.attackControl.addEventListener("input",(function (ev){
return mecca.sequencer.attackTime = Number(ev.target.value);
}),false);
mecca.sequencer.releaseTime = 0.5;
mecca.sequencer.releaseControl = document.querySelector("#release");
mecca.sequencer.releaseControl.addEventListener("input",(function (ev){
return mecca.sequencer.releaseTime = Number(ev.target.value);
}),false);
mecca.sequencer.sweepLength = (2);
mecca.sequencer.playSweep = (function mecca$sequencer$playSweep(){
var osc = cljs.core.deref(mecca.music.audiocontext).createOscillator();
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
osc.setPeriodicWave(mecca.sequencer.wave);

osc.frequency.value = (380);

mecca.sequencer.sweepEnv = cljs.core.deref(mecca.music.audiocontext).createGain();

mecca.sequencer.sweepEnv.gain.cancelScheduledValues(cljs.core.deref(now));

mecca.sequencer.sweepEnv.gain.setValueAtTime((0),cljs.core.deref(now));

mecca.sequencer.sweepEnv.gain.linearRampToValueAtTime((1),(cljs.core.deref(now) + mecca.sequencer.attackTime));

mecca.sequencer.sweepEnv.gain.linearRampToValueAtTime((0),((cljs.core.deref(now) + mecca.sequencer.sweepLength) - mecca.sequencer.releaseTime));

osc.connect(mecca.sequencer.sweepEnv).connect(cljs.core.deref(mecca.music.audiocontext).destination);

osc.start();

return osc.stop((cljs.core.deref(now) + mecca.sequencer.sweepLength));
});
mecca.sequencer.pulseHz = (880);
mecca.sequencer.hzControl = document.querySelector("#hz");
mecca.sequencer.hzControl.addEventListener("input",(function (ev){
return mecca.sequencer.pulseHz = Number(ev.target.value);
}),false);
mecca.sequencer.lfoHz = (30);
mecca.sequencer.lfoControl = document.querySelector("#lfo");
mecca.sequencer.lfoControl.addEventListener("input",(function (ev){
return mecca.sequencer.lfoHz = Number(ev.target.value);
}),false);
mecca.sequencer.pulseTime = (1);
mecca.sequencer.playPulse = (function mecca$sequencer$playPulse(){
var osc = cljs.core.deref(mecca.music.audiocontext).createOscillator();
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
osc.type = "sine";

osc.frequency.setValueAtTime(mecca.sequencer.pulseHz,cljs.core.deref(now));

mecca.sequencer.amp = cljs.core.deref(mecca.music.audiocontext).createGain();

mecca.sequencer.amp.gain.setValueAtTime((1),cljs.core.deref(now));

mecca.sequencer.lfo = cljs.core.deref(mecca.music.audiocontext).createOscillator();

mecca.sequencer.lfo.type = "square";

mecca.sequencer.lfo.frequency.setValueAtTime(mecca.sequencer.lfoHz,cljs.core.deref(now));

mecca.sequencer.lfo.connect(mecca.sequencer.amp.gain);

osc.connect(mecca.sequencer.amp).connect(cljs.core.deref(mecca.music.audiocontext).destination);

mecca.sequencer.lfo.start();

osc.start();

return osc.stop((cljs.core.deref(now) + mecca.sequencer.pulseTime));
});
mecca.sequencer.noiseDuration = (1);
mecca.sequencer.durControl = document.querySelector("#duration");
mecca.sequencer.durControl.addEventListener("input",(function (ev){
return mecca.sequencer.noiseDuration = Number(ev.target.value);
}),false);
mecca.sequencer.bandHz = (1000);
mecca.sequencer.bandControl = document.querySelector("#band");
mecca.sequencer.bandControl.addEventListener("input",(function (ev){
return mecca.sequencer.bandHz = Number(ev.target.value);
}),false);
