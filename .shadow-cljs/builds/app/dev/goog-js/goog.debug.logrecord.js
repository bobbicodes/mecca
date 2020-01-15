["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/debug/logrecord.js"],"~:js","goog.provide(\"goog.debug.LogRecord\");\n/**\n * @constructor\n * @param {goog.debug.Logger.Level} level\n * @param {string} msg\n * @param {string} loggerName\n * @param {number=} opt_time\n * @param {number=} opt_sequenceNumber\n */\ngoog.debug.LogRecord = function(level, msg, loggerName, opt_time, opt_sequenceNumber) {\n  this.reset(level, msg, loggerName, opt_time, opt_sequenceNumber);\n};\n/** @private @type {number} */ goog.debug.LogRecord.prototype.time_;\n/** @private @type {goog.debug.Logger.Level} */ goog.debug.LogRecord.prototype.level_;\n/** @private @type {string} */ goog.debug.LogRecord.prototype.msg_;\n/** @private @type {string} */ goog.debug.LogRecord.prototype.loggerName_;\n/** @private @type {number} */ goog.debug.LogRecord.prototype.sequenceNumber_ = 0;\n/** @private @type {?Object} */ goog.debug.LogRecord.prototype.exception_ = null;\n/** @define {boolean} */ goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS = goog.define(\"goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS\", true);\n/** @private @type {number} */ goog.debug.LogRecord.nextSequenceNumber_ = 0;\n/**\n * @param {goog.debug.Logger.Level} level\n * @param {string} msg\n * @param {string} loggerName\n * @param {number=} opt_time\n * @param {number=} opt_sequenceNumber\n */\ngoog.debug.LogRecord.prototype.reset = function(level, msg, loggerName, opt_time, opt_sequenceNumber) {\n  if (goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS) {\n    this.sequenceNumber_ = typeof opt_sequenceNumber == \"number\" ? opt_sequenceNumber : goog.debug.LogRecord.nextSequenceNumber_++;\n  }\n  this.time_ = opt_time || goog.now();\n  this.level_ = level;\n  this.msg_ = msg;\n  this.loggerName_ = loggerName;\n  delete this.exception_;\n};\n/**\n * @return {string}\n */\ngoog.debug.LogRecord.prototype.getLoggerName = function() {\n  return this.loggerName_;\n};\n/**\n * @return {Object}\n */\ngoog.debug.LogRecord.prototype.getException = function() {\n  return this.exception_;\n};\n/**\n * @param {Object} exception\n */\ngoog.debug.LogRecord.prototype.setException = function(exception) {\n  this.exception_ = exception;\n};\n/**\n * @param {string} loggerName\n */\ngoog.debug.LogRecord.prototype.setLoggerName = function(loggerName) {\n  this.loggerName_ = loggerName;\n};\n/**\n * @return {goog.debug.Logger.Level}\n */\ngoog.debug.LogRecord.prototype.getLevel = function() {\n  return this.level_;\n};\n/**\n * @param {goog.debug.Logger.Level} level\n */\ngoog.debug.LogRecord.prototype.setLevel = function(level) {\n  this.level_ = level;\n};\n/**\n * @return {string}\n */\ngoog.debug.LogRecord.prototype.getMessage = function() {\n  return this.msg_;\n};\n/**\n * @param {string} msg\n */\ngoog.debug.LogRecord.prototype.setMessage = function(msg) {\n  this.msg_ = msg;\n};\n/**\n * @return {number}\n */\ngoog.debug.LogRecord.prototype.getMillis = function() {\n  return this.time_;\n};\n/**\n * @param {number} time\n */\ngoog.debug.LogRecord.prototype.setMillis = function(time) {\n  this.time_ = time;\n};\n/**\n * @return {number}\n */\ngoog.debug.LogRecord.prototype.getSequenceNumber = function() {\n  return this.sequenceNumber_;\n};\n","~:source","// Copyright 2006 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Definition of the LogRecord class. Please minimize\n * dependencies this file has on other closure classes as any dependency it\n * takes won't be able to use the logging infrastructure.\n *\n */\n\ngoog.provide('goog.debug.LogRecord');\n\n\n\n/**\n * LogRecord objects are used to pass logging requests between\n * the logging framework and individual log Handlers.\n * @constructor\n * @param {goog.debug.Logger.Level} level One of the level identifiers.\n * @param {string} msg The string message.\n * @param {string} loggerName The name of the source logger.\n * @param {number=} opt_time Time this log record was created if other than now.\n *     If 0, we use #goog.now.\n * @param {number=} opt_sequenceNumber Sequence number of this log record. This\n *     should only be passed in when restoring a log record from persistence.\n */\ngoog.debug.LogRecord = function(\n    level, msg, loggerName, opt_time, opt_sequenceNumber) {\n  this.reset(level, msg, loggerName, opt_time, opt_sequenceNumber);\n};\n\n\n/**\n * Time the LogRecord was created.\n * @type {number}\n * @private\n */\ngoog.debug.LogRecord.prototype.time_;\n\n\n/**\n * Level of the LogRecord\n * @type {goog.debug.Logger.Level}\n * @private\n */\ngoog.debug.LogRecord.prototype.level_;\n\n\n/**\n * Message associated with the record\n * @type {string}\n * @private\n */\ngoog.debug.LogRecord.prototype.msg_;\n\n\n/**\n * Name of the logger that created the record.\n * @type {string}\n * @private\n */\ngoog.debug.LogRecord.prototype.loggerName_;\n\n\n/**\n * Sequence number for the LogRecord. Each record has a unique sequence number\n * that is greater than all log records created before it.\n * @type {number}\n * @private\n */\ngoog.debug.LogRecord.prototype.sequenceNumber_ = 0;\n\n\n/**\n * Exception associated with the record\n * @type {?Object}\n * @private\n */\ngoog.debug.LogRecord.prototype.exception_ = null;\n\n\n/**\n * @define {boolean} Whether to enable log sequence numbers.\n */\ngoog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS =\n    goog.define('goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS', true);\n\n\n/**\n * A sequence counter for assigning increasing sequence numbers to LogRecord\n * objects.\n * @type {number}\n * @private\n */\ngoog.debug.LogRecord.nextSequenceNumber_ = 0;\n\n\n/**\n * Sets all fields of the log record.\n * @param {goog.debug.Logger.Level} level One of the level identifiers.\n * @param {string} msg The string message.\n * @param {string} loggerName The name of the source logger.\n * @param {number=} opt_time Time this log record was created if other than now.\n *     If 0, we use #goog.now.\n * @param {number=} opt_sequenceNumber Sequence number of this log record. This\n *     should only be passed in when restoring a log record from persistence.\n */\ngoog.debug.LogRecord.prototype.reset = function(\n    level, msg, loggerName, opt_time, opt_sequenceNumber) {\n  if (goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS) {\n    this.sequenceNumber_ = typeof opt_sequenceNumber == 'number' ?\n        opt_sequenceNumber :\n        goog.debug.LogRecord.nextSequenceNumber_++;\n  }\n\n  this.time_ = opt_time || goog.now();\n  this.level_ = level;\n  this.msg_ = msg;\n  this.loggerName_ = loggerName;\n  delete this.exception_;\n};\n\n\n/**\n * Get the source Logger's name.\n *\n * @return {string} source logger name (may be null).\n */\ngoog.debug.LogRecord.prototype.getLoggerName = function() {\n  return this.loggerName_;\n};\n\n\n/**\n * Get the exception that is part of the log record.\n *\n * @return {Object} the exception.\n */\ngoog.debug.LogRecord.prototype.getException = function() {\n  return this.exception_;\n};\n\n\n/**\n * Set the exception that is part of the log record.\n *\n * @param {Object} exception the exception.\n */\ngoog.debug.LogRecord.prototype.setException = function(exception) {\n  this.exception_ = exception;\n};\n\n\n/**\n * Get the source Logger's name.\n *\n * @param {string} loggerName source logger name (may be null).\n */\ngoog.debug.LogRecord.prototype.setLoggerName = function(loggerName) {\n  this.loggerName_ = loggerName;\n};\n\n\n/**\n * Get the logging message level, for example Level.SEVERE.\n * @return {goog.debug.Logger.Level} the logging message level.\n */\ngoog.debug.LogRecord.prototype.getLevel = function() {\n  return this.level_;\n};\n\n\n/**\n * Set the logging message level, for example Level.SEVERE.\n * @param {goog.debug.Logger.Level} level the logging message level.\n */\ngoog.debug.LogRecord.prototype.setLevel = function(level) {\n  this.level_ = level;\n};\n\n\n/**\n * Get the \"raw\" log message, before localization or formatting.\n *\n * @return {string} the raw message string.\n */\ngoog.debug.LogRecord.prototype.getMessage = function() {\n  return this.msg_;\n};\n\n\n/**\n * Set the \"raw\" log message, before localization or formatting.\n *\n * @param {string} msg the raw message string.\n */\ngoog.debug.LogRecord.prototype.setMessage = function(msg) {\n  this.msg_ = msg;\n};\n\n\n/**\n * Get event time in milliseconds since 1970.\n *\n * @return {number} event time in millis since 1970.\n */\ngoog.debug.LogRecord.prototype.getMillis = function() {\n  return this.time_;\n};\n\n\n/**\n * Set event time in milliseconds since 1970.\n *\n * @param {number} time event time in millis since 1970.\n */\ngoog.debug.LogRecord.prototype.setMillis = function(time) {\n  this.time_ = time;\n};\n\n\n/**\n * Get the sequence number.\n * <p>\n * Sequence numbers are normally assigned in the LogRecord\n * constructor, which assigns unique sequence numbers to\n * each new LogRecord in increasing order.\n * @return {number} the sequence number.\n */\ngoog.debug.LogRecord.prototype.getSequenceNumber = function() {\n  return this.sequenceNumber_;\n};\n","~:compiled-at",1579073929050,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.debug.logrecord.js\",\n\"lineCount\":104,\n\"mappings\":\"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\",\n\"sources\":[\"goog/debug/logrecord.js\"],\n\"sourcesContent\":[\"// Copyright 2006 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Definition of the LogRecord class. Please minimize\\n * dependencies this file has on other closure classes as any dependency it\\n * takes won't be able to use the logging infrastructure.\\n *\\n */\\n\\ngoog.provide('goog.debug.LogRecord');\\n\\n\\n\\n/**\\n * LogRecord objects are used to pass logging requests between\\n * the logging framework and individual log Handlers.\\n * @constructor\\n * @param {goog.debug.Logger.Level} level One of the level identifiers.\\n * @param {string} msg The string message.\\n * @param {string} loggerName The name of the source logger.\\n * @param {number=} opt_time Time this log record was created if other than now.\\n *     If 0, we use #goog.now.\\n * @param {number=} opt_sequenceNumber Sequence number of this log record. This\\n *     should only be passed in when restoring a log record from persistence.\\n */\\ngoog.debug.LogRecord = function(\\n    level, msg, loggerName, opt_time, opt_sequenceNumber) {\\n  this.reset(level, msg, loggerName, opt_time, opt_sequenceNumber);\\n};\\n\\n\\n/**\\n * Time the LogRecord was created.\\n * @type {number}\\n * @private\\n */\\ngoog.debug.LogRecord.prototype.time_;\\n\\n\\n/**\\n * Level of the LogRecord\\n * @type {goog.debug.Logger.Level}\\n * @private\\n */\\ngoog.debug.LogRecord.prototype.level_;\\n\\n\\n/**\\n * Message associated with the record\\n * @type {string}\\n * @private\\n */\\ngoog.debug.LogRecord.prototype.msg_;\\n\\n\\n/**\\n * Name of the logger that created the record.\\n * @type {string}\\n * @private\\n */\\ngoog.debug.LogRecord.prototype.loggerName_;\\n\\n\\n/**\\n * Sequence number for the LogRecord. Each record has a unique sequence number\\n * that is greater than all log records created before it.\\n * @type {number}\\n * @private\\n */\\ngoog.debug.LogRecord.prototype.sequenceNumber_ = 0;\\n\\n\\n/**\\n * Exception associated with the record\\n * @type {?Object}\\n * @private\\n */\\ngoog.debug.LogRecord.prototype.exception_ = null;\\n\\n\\n/**\\n * @define {boolean} Whether to enable log sequence numbers.\\n */\\ngoog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS =\\n    goog.define('goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS', true);\\n\\n\\n/**\\n * A sequence counter for assigning increasing sequence numbers to LogRecord\\n * objects.\\n * @type {number}\\n * @private\\n */\\ngoog.debug.LogRecord.nextSequenceNumber_ = 0;\\n\\n\\n/**\\n * Sets all fields of the log record.\\n * @param {goog.debug.Logger.Level} level One of the level identifiers.\\n * @param {string} msg The string message.\\n * @param {string} loggerName The name of the source logger.\\n * @param {number=} opt_time Time this log record was created if other than now.\\n *     If 0, we use #goog.now.\\n * @param {number=} opt_sequenceNumber Sequence number of this log record. This\\n *     should only be passed in when restoring a log record from persistence.\\n */\\ngoog.debug.LogRecord.prototype.reset = function(\\n    level, msg, loggerName, opt_time, opt_sequenceNumber) {\\n  if (goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS) {\\n    this.sequenceNumber_ = typeof opt_sequenceNumber == 'number' ?\\n        opt_sequenceNumber :\\n        goog.debug.LogRecord.nextSequenceNumber_++;\\n  }\\n\\n  this.time_ = opt_time || goog.now();\\n  this.level_ = level;\\n  this.msg_ = msg;\\n  this.loggerName_ = loggerName;\\n  delete this.exception_;\\n};\\n\\n\\n/**\\n * Get the source Logger's name.\\n *\\n * @return {string} source logger name (may be null).\\n */\\ngoog.debug.LogRecord.prototype.getLoggerName = function() {\\n  return this.loggerName_;\\n};\\n\\n\\n/**\\n * Get the exception that is part of the log record.\\n *\\n * @return {Object} the exception.\\n */\\ngoog.debug.LogRecord.prototype.getException = function() {\\n  return this.exception_;\\n};\\n\\n\\n/**\\n * Set the exception that is part of the log record.\\n *\\n * @param {Object} exception the exception.\\n */\\ngoog.debug.LogRecord.prototype.setException = function(exception) {\\n  this.exception_ = exception;\\n};\\n\\n\\n/**\\n * Get the source Logger's name.\\n *\\n * @param {string} loggerName source logger name (may be null).\\n */\\ngoog.debug.LogRecord.prototype.setLoggerName = function(loggerName) {\\n  this.loggerName_ = loggerName;\\n};\\n\\n\\n/**\\n * Get the logging message level, for example Level.SEVERE.\\n * @return {goog.debug.Logger.Level} the logging message level.\\n */\\ngoog.debug.LogRecord.prototype.getLevel = function() {\\n  return this.level_;\\n};\\n\\n\\n/**\\n * Set the logging message level, for example Level.SEVERE.\\n * @param {goog.debug.Logger.Level} level the logging message level.\\n */\\ngoog.debug.LogRecord.prototype.setLevel = function(level) {\\n  this.level_ = level;\\n};\\n\\n\\n/**\\n * Get the \\\"raw\\\" log message, before localization or formatting.\\n *\\n * @return {string} the raw message string.\\n */\\ngoog.debug.LogRecord.prototype.getMessage = function() {\\n  return this.msg_;\\n};\\n\\n\\n/**\\n * Set the \\\"raw\\\" log message, before localization or formatting.\\n *\\n * @param {string} msg the raw message string.\\n */\\ngoog.debug.LogRecord.prototype.setMessage = function(msg) {\\n  this.msg_ = msg;\\n};\\n\\n\\n/**\\n * Get event time in milliseconds since 1970.\\n *\\n * @return {number} event time in millis since 1970.\\n */\\ngoog.debug.LogRecord.prototype.getMillis = function() {\\n  return this.time_;\\n};\\n\\n\\n/**\\n * Set event time in milliseconds since 1970.\\n *\\n * @param {number} time event time in millis since 1970.\\n */\\ngoog.debug.LogRecord.prototype.setMillis = function(time) {\\n  this.time_ = time;\\n};\\n\\n\\n/**\\n * Get the sequence number.\\n * <p>\\n * Sequence numbers are normally assigned in the LogRecord\\n * constructor, which assigns unique sequence numbers to\\n * each new LogRecord in increasing order.\\n * @return {number} the sequence number.\\n */\\ngoog.debug.LogRecord.prototype.getSequenceNumber = function() {\\n  return this.sequenceNumber_;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"debug\",\"LogRecord\",\"goog.debug.LogRecord\",\"level\",\"msg\",\"loggerName\",\"opt_time\",\"opt_sequenceNumber\",\"reset\",\"prototype\",\"time_\",\"level_\",\"msg_\",\"loggerName_\",\"sequenceNumber_\",\"exception_\",\"ENABLE_SEQUENCE_NUMBERS\",\"define\",\"nextSequenceNumber_\",\"goog.debug.LogRecord.prototype.reset\",\"now\",\"getLoggerName\",\"goog.debug.LogRecord.prototype.getLoggerName\",\"getException\",\"goog.debug.LogRecord.prototype.getException\",\"setException\",\"goog.debug.LogRecord.prototype.setException\",\"exception\",\"setLoggerName\",\"goog.debug.LogRecord.prototype.setLoggerName\",\"getLevel\",\"goog.debug.LogRecord.prototype.getLevel\",\"setLevel\",\"goog.debug.LogRecord.prototype.setLevel\",\"getMessage\",\"goog.debug.LogRecord.prototype.getMessage\",\"setMessage\",\"goog.debug.LogRecord.prototype.setMessage\",\"getMillis\",\"goog.debug.LogRecord.prototype.getMillis\",\"setMillis\",\"goog.debug.LogRecord.prototype.setMillis\",\"time\",\"getSequenceNumber\",\"goog.debug.LogRecord.prototype.getSequenceNumber\"]\n}\n"]