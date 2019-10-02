// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('ajax.protocols');
goog.require('day8.re_frame.undo');
goog.require('mecca.mario');
goog.require('mecca.music');
goog.require('goog.events');
goog.require('goog.events.EventType');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),new cljs.core.Keyword(null,"instrument","instrument",-960698844),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"play-start","play-start",-898241782),new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628),new cljs.core.Keyword(null,"jumping?","jumping?",-2092574161),new cljs.core.Keyword(null,"time-signature","time-signature",-1730387952),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),new cljs.core.Keyword(null,"instruments","instruments",-69874543),new cljs.core.Keyword(null,"mario-y","mario-y",1718385780),new cljs.core.Keyword(null,"bassline","bassline",325787412),new cljs.core.Keyword(null,"lead","lead",1214038903),new cljs.core.Keyword(null,"next-note-time","next-note-time",-1117617128),new cljs.core.Keyword(null,"focused-note-pos","focused-note-pos",-1443473576),new cljs.core.Keyword(null,"tempo","tempo",-1555208453),new cljs.core.Keyword(null,"drums","drums",641393692),new cljs.core.Keyword(null,"mario-x","mario-x",1743249500),new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),new cljs.core.Keyword(null,"current-position","current-position",2031348254),new cljs.core.Keyword(null,"notes-in-queue","notes-in-queue",-193583681)],[(1),(1),false,"C",(0),(0),(0),(1),false,(4),false,cljs.core.PersistentVector.fromArray([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(1),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(62),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),2.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(66),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(4),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(69),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(7),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(61),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),8.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(65),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(10),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(68),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(13),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(60),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),14.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(64),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(16),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(67),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(19),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(59),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),20.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(63),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(22),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(66),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(1),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(12),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(62),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(5),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(12),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(59),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(6),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(12),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(62),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(7),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(12),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(61),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),7.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(12),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(60),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(8),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(12),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(61),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(13),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(12),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(62),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(17),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(12),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(59),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(18),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(12),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(62),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(19),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(12),new cljs.core.Keyword(null,"pitch","pitch",1495126700),61.5,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),19.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(12),new cljs.core.Keyword(null,"pitch","pitch",1495126700),60.5,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(20),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(12),new cljs.core.Keyword(null,"pitch","pitch",1495126700),61.5,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(25),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(62),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(25),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(62),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),26.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(59),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),26.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(62),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(27),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(62),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),27.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(62),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(28),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(62),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),29.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(62),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(30),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(62),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),30.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(62),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(31),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(61),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),32.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(61),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(33),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(61),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),33.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(61),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(34),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(61),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),35.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(61),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(36),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(61),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),36.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(61),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(37),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(60),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),38.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(60),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(39),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(60),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),39.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(60),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(40),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(60),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),41.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(60),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(42),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(60),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),42.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(60),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(43),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(64),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),44.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(64),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(45),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(64),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),45.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(64),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(46),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(64),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),47.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(64),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(48),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(64),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),48.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(64),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(49),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),62.5,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),50.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),62.5,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(51),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),62.5,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),51.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),62.5,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(29),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(62),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(30),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(62),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),30.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(63),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(31),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),64.5,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),31.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(65),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(32),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(66),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(35),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(66),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),35.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(66),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(36),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(67),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),36.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(68),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(37),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(69),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(41),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(69),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),41.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(69),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(42),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(68),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),42.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(67),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(43),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(68),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(44),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(67),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),44.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(66),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),47.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(66),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(49),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(65),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(50),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(66),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),50.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(67),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(52),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),62.5,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),53.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),62.5,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(54),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),62.5,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),54.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),62.5,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(55),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(62),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),56.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(62),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(57),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(62),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),57.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(62),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(58),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(62),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),59.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(62),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(60),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(62),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),60.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(62),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(61),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(63),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),62.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(63),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(63),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(63),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),63.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(63),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(64),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(63),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),65.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(63),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(66),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(63),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),66.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(63),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(67),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(66),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),68.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(61),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(69),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(61),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),69.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(61),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(70),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),60.5,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),70.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),60.5,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(71),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),60.5,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),71.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(60),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(72),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(60),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),72.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(60),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(53),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(66),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(54),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(65),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(55),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(64),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(56),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(65),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),56.5,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(6),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(66),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false], null)], true),(59),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,0.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),(120),cljs.core.PersistentVector.EMPTY,(54),null,(0),cljs.core.PersistentVector.EMPTY]);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-note","add-note",-926319985),day8.re_frame.undo.undoable.call(null,"add note"),(function (db,p__16914){
var vec__16915 = p__16914;
var _ = cljs.core.nth.call(null,vec__16915,(0),null);
var instrument = cljs.core.nth.call(null,vec__16915,(1),null);
var time = cljs.core.nth.call(null,vec__16915,(2),null);
var pitch = cljs.core.nth.call(null,vec__16915,(3),null);
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,mecca.music.audiocontext).state,"suspended")){
cljs.core.deref.call(null,mecca.music.audiocontext).resume();
} else {
}

mecca.music.play_sample.call(null,instrument,(cljs.core.truth_(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sharp?","sharp?",411396133)], null))))?(0.5 + pitch):pitch));

return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"instruments","instruments",-69874543),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"instrument","instrument",-960698844),instrument,new cljs.core.Keyword(null,"pitch","pitch",1495126700),(cljs.core.truth_(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sharp?","sharp?",411396133)], null))))?(0.5 + pitch):pitch),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sharp?","sharp?",411396133)], null)))], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-song","load-song",17308276),(function (db,p__16920){
var vec__16921 = p__16920;
var _ = cljs.core.nth.call(null,vec__16921,(0),null);
var notes = cljs.core.nth.call(null,vec__16921,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"instruments","instruments",-69874543),notes);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-note","remove-note",-1957283966),day8.re_frame.undo.undoable.call(null,"remove note"),(function (db,p__16928){
var vec__16929 = p__16928;
var _ = cljs.core.nth.call(null,vec__16929,(0),null);
var instrument = cljs.core.nth.call(null,vec__16929,(1),null);
var time = cljs.core.nth.call(null,vec__16929,(2),null);
var pitch = cljs.core.nth.call(null,vec__16929,(3),null);
return cljs.core.update.call(null,db,cljs.core.keyword.call(null,instrument),((function (vec__16929,_,instrument,time,pitch){
return (function (notes){
return cljs.core.remove.call(null,((function (vec__16929,_,instrument,time,pitch){
return (function (p1__16927_SHARP_){
return ((cljs.core._EQ_.call(null,time,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__16927_SHARP_))) && (cljs.core._EQ_.call(null,((77) - pitch),new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(p1__16927_SHARP_))));
});})(vec__16929,_,instrument,time,pitch))
,notes);
});})(vec__16929,_,instrument,time,pitch))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-time-signature","set-time-signature",-674659703),(function (db,p__16933){
var vec__16934 = p__16933;
var _ = cljs.core.nth.call(null,vec__16934,(0),null);
var beats_per_measure = cljs.core.nth.call(null,vec__16934,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"time-signature","time-signature",-1730387952),beats_per_measure);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,p__16937){
var vec__16938 = p__16937;
var _ = cljs.core.nth.call(null,vec__16938,(0),null);
var new_time = cljs.core.nth.call(null,vec__16938,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time","time",1385887882),new_time);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"play-on","play-on",-1655917734),(function (db,p__16941){
var vec__16942 = p__16941;
var _ = cljs.core.nth.call(null,vec__16942,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16942,(1),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"play-start","play-start",-898241782),cljs.core.deref.call(null,mecca.music.audiocontext).currentTime),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"sharp-on","sharp-on",-1157509082),(function (db,p__16945){
var vec__16946 = p__16945;
var _ = cljs.core.nth.call(null,vec__16946,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16946,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"sharp-toggle","sharp-toggle",1733862740),(function (db,p__16949){
var vec__16950 = p__16949;
var _ = cljs.core.nth.call(null,vec__16950,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16950,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),cljs.core.not);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"sharp-off","sharp-off",2041506931),(function (db,p__16953){
var vec__16954 = p__16953;
var _ = cljs.core.nth.call(null,vec__16954,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16954,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),(function (db,p__16957){
var vec__16958 = p__16957;
var _ = cljs.core.nth.call(null,vec__16958,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16958,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (db,p__16961){
var vec__16962 = p__16961;
var _ = cljs.core.nth.call(null,vec__16962,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16962,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-editor","reset-editor",1401688585)], null));

return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false),new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-focus-note","update-focus-note",-40352556),(function (db,p__16965){
var vec__16966 = p__16965;
var _ = cljs.core.nth.call(null,vec__16966,(0),null);
var pos = cljs.core.nth.call(null,vec__16966,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"focused-note-pos","focused-note-pos",-1443473576),pos);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"select-instrument","select-instrument",75005084),(function (db,p__16969){
var vec__16970 = p__16969;
var _ = cljs.core.nth.call(null,vec__16970,(0),null);
var instrument = cljs.core.nth.call(null,vec__16970,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"instrument","instrument",-960698844),instrument);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"play-off","play-off",2116693509),(function (db,p__16973){
var vec__16974 = p__16973;
var _ = cljs.core.nth.call(null,vec__16974,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16974,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"advance-position","advance-position",-23796893),(function (db,p__16979){
var vec__16980 = p__16979;
var _ = cljs.core.nth.call(null,vec__16980,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16980,(1),null);
var notes = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instruments","instruments",-69874543)], null)));
var beat = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null)));
var to_play = cljs.core.filter.call(null,((function (notes,beat,vec__16980,_,___$1){
return (function (p1__16977_SHARP_){
return cljs.core._EQ_.call(null,((1) + beat),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__16977_SHARP_));
});})(notes,beat,vec__16980,_,___$1))
,notes);
if(((4) < beat)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-editor","advance-editor",-224480492)], null));
} else {
}

cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (notes,beat,to_play,vec__16980,_,___$1){
return (function mecca$events$iter__16983(s__16984){
return (new cljs.core.LazySeq(null,((function (notes,beat,to_play,vec__16980,_,___$1){
return (function (){
var s__16984__$1 = s__16984;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16984__$1);
if(temp__5457__auto__){
var s__16984__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16984__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__16984__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__16986 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__16985 = (0);
while(true){
if((i__16985 < size__4323__auto__)){
var map__16991 = cljs.core._nth.call(null,c__4322__auto__,i__16985);
var map__16991__$1 = ((((!((map__16991 == null)))?(((((map__16991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16991):map__16991);
var instrument = cljs.core.get.call(null,map__16991__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.call(null,map__16991__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append.call(null,b__16986,mecca.music.play_sample.call(null,instrument,(cljs.core.truth_(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sharp?","sharp?",411396133)], null))))?(0.5 + pitch):pitch)));

var G__16995 = (i__16985 + (1));
i__16985 = G__16995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16986),mecca$events$iter__16983.call(null,cljs.core.chunk_rest.call(null,s__16984__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16986),null);
}
} else {
var map__16993 = cljs.core.first.call(null,s__16984__$2);
var map__16993__$1 = ((((!((map__16993 == null)))?(((((map__16993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16993):map__16993);
var instrument = cljs.core.get.call(null,map__16993__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.call(null,map__16993__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons.call(null,mecca.music.play_sample.call(null,instrument,(cljs.core.truth_(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sharp?","sharp?",411396133)], null))))?(0.5 + pitch):pitch)),mecca$events$iter__16983.call(null,cljs.core.rest.call(null,s__16984__$2)));
}
} else {
return null;
}
break;
}
});})(notes,beat,to_play,vec__16980,_,___$1))
,null,null));
});})(notes,beat,to_play,vec__16980,_,___$1))
;
return iter__4324__auto__.call(null,to_play);
})());

return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),((function (notes,beat,to_play,vec__16980,_,___$1){
return (function (p1__16978_SHARP_){
return (0.5 + p1__16978_SHARP_);
});})(notes,beat,to_play,vec__16980,_,___$1))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"advance-editor","advance-editor",-224480492),(function (db,p__16997){
var vec__16998 = p__16997;
var _ = cljs.core.nth.call(null,vec__16998,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16998,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),((function (vec__16998,_,___$1){
return (function (p1__16996_SHARP_){
return (0.5 + p1__16996_SHARP_);
});})(vec__16998,_,___$1))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"move-mario","move-mario",-317739908),(function (db,p__17001){
var vec__17002 = p__17001;
var _ = cljs.core.nth.call(null,vec__17002,(0),null);
var x = cljs.core.nth.call(null,vec__17002,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"mario-x","mario-x",1743249500),x);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"reset-editor","reset-editor",1401688585),(function (db,p__17005){
var vec__17006 = p__17005;
var _ = cljs.core.nth.call(null,vec__17006,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__17006,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),(1));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"retract-editor","retract-editor",777879449),(function (db,p__17010){
var vec__17011 = p__17010;
var _ = cljs.core.nth.call(null,vec__17011,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__17011,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),((function (vec__17011,_,___$1){
return (function (p1__17009_SHARP_){
return (p1__17009_SHARP_ - 0.5);
});})(vec__17011,_,___$1))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),(function (db,p__17014){
var vec__17015 = p__17014;
var _ = cljs.core.nth.call(null,vec__17015,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__17015,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(function (db,p__17018){
var vec__17019 = p__17018;
var _ = cljs.core.nth.call(null,vec__17019,(0),null);
var tempo = cljs.core.nth.call(null,vec__17019,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),tempo);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"inc-tempo","inc-tempo",-1684511808),(function (db,p__17023){
var vec__17024 = p__17023;
var _ = cljs.core.nth.call(null,vec__17024,(0),null);
var tempo = cljs.core.nth.call(null,vec__17024,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),((function (vec__17024,_,tempo){
return (function (p1__17022_SHARP_){
return ((8) + p1__17022_SHARP_);
});})(vec__17024,_,tempo))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"dec-tempo","dec-tempo",375495204),(function (db,p__17028){
var vec__17029 = p__17028;
var _ = cljs.core.nth.call(null,vec__17029,(0),null);
var tempo = cljs.core.nth.call(null,vec__17029,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),((function (vec__17029,_,tempo){
return (function (p1__17027_SHARP_){
return (p1__17027_SHARP_ - (8));
});})(vec__17029,_,tempo))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-key","set-key",-48186176),(function (db,p__17032){
var vec__17033 = p__17032;
var _ = cljs.core.nth.call(null,vec__17033,(0),null);
var key = cljs.core.nth.call(null,vec__17033,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"key","key",-1516042587),key);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"tick!","tick!",68058958),(function (db,p__17037){
var vec__17038 = p__17037;
var _ = cljs.core.nth.call(null,vec__17038,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__17038,(1),null);
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.update.call(null,db,new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628),((function (vec__17038,_,___$1){
return (function (p1__17036_SHARP_){
if(cljs.core._EQ_.call(null,p1__17036_SHARP_,(3))){
return (1);
} else {
return (p1__17036_SHARP_ + (1));
}
});})(vec__17038,_,___$1))
),new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),cljs.core.inc),new cljs.core.Keyword(null,"time","time",1385887882),mecca.music.current_time.call(null,cljs.core.deref.call(null,mecca.music.audiocontext)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"jump-reset","jump-reset",-1337123824),(function (db,p__17041){
var vec__17042 = p__17041;
var _ = cljs.core.nth.call(null,vec__17042,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__17042,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),(0));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"jump!","jump!",-1168155200),(function (db,p__17045){
var vec__17046 = p__17045;
var _ = cljs.core.nth.call(null,vec__17046,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__17046,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"mario-y","mario-y",1718385780),(30));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"down!","down!",872870035),(function (db,p__17049){
var vec__17050 = p__17049;
var _ = cljs.core.nth.call(null,vec__17050,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__17050,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"mario-y","mario-y",1718385780),(59));
}));

//# sourceMappingURL=events9123039.js.map
