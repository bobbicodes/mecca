["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/debug/logbuffer.js"],"~:js","goog.provide(\"goog.debug.LogBuffer\");\ngoog.require(\"goog.asserts\");\ngoog.require(\"goog.debug.LogRecord\");\n/** @final @constructor */ goog.debug.LogBuffer = function() {\n  goog.asserts.assert(goog.debug.LogBuffer.isBufferingEnabled(), \"Cannot use goog.debug.LogBuffer without defining \" + \"goog.debug.LogBuffer.CAPACITY.\");\n  this.clear();\n};\n/**\n * @return {!goog.debug.LogBuffer}\n */\ngoog.debug.LogBuffer.getInstance = function() {\n  if (!goog.debug.LogBuffer.instance_) {\n    goog.debug.LogBuffer.instance_ = new goog.debug.LogBuffer;\n  }\n  return goog.debug.LogBuffer.instance_;\n};\n/** @define {number} */ goog.debug.LogBuffer.CAPACITY = goog.define(\"goog.debug.LogBuffer.CAPACITY\", 0);\n/** @private @type {!Array<(!goog.debug.LogRecord|undefined)>} */ goog.debug.LogBuffer.prototype.buffer_;\n/** @private @type {number} */ goog.debug.LogBuffer.prototype.curIndex_;\n/** @private @type {boolean} */ goog.debug.LogBuffer.prototype.isFull_;\n/**\n * @param {goog.debug.Logger.Level} level\n * @param {string} msg\n * @param {string} loggerName\n * @return {!goog.debug.LogRecord}\n */\ngoog.debug.LogBuffer.prototype.addRecord = function(level, msg, loggerName) {\n  var curIndex = (this.curIndex_ + 1) % goog.debug.LogBuffer.CAPACITY;\n  this.curIndex_ = curIndex;\n  if (this.isFull_) {\n    var ret = this.buffer_[curIndex];\n    ret.reset(level, msg, loggerName);\n    return ret;\n  }\n  this.isFull_ = curIndex == goog.debug.LogBuffer.CAPACITY - 1;\n  return this.buffer_[curIndex] = new goog.debug.LogRecord(level, msg, loggerName);\n};\n/**\n * @return {boolean}\n */\ngoog.debug.LogBuffer.isBufferingEnabled = function() {\n  return goog.debug.LogBuffer.CAPACITY > 0;\n};\ngoog.debug.LogBuffer.prototype.clear = function() {\n  this.buffer_ = new Array(goog.debug.LogBuffer.CAPACITY);\n  this.curIndex_ = -1;\n  this.isFull_ = false;\n};\n/**\n * @param {function(!goog.debug.LogRecord)} func\n */\ngoog.debug.LogBuffer.prototype.forEachRecord = function(func) {\n  var buffer = this.buffer_;\n  if (!buffer[0]) {\n    return;\n  }\n  var curIndex = this.curIndex_;\n  var i = this.isFull_ ? curIndex : -1;\n  do {\n    i = (i + 1) % goog.debug.LogBuffer.CAPACITY;\n    func(/** @type {!goog.debug.LogRecord} */ (buffer[i]));\n  } while (i != curIndex);\n};\n","~:source","// Copyright 2010 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview A buffer for log records. The purpose of this is to improve\n * logging performance by re-using old objects when the buffer becomes full and\n * to eliminate the need for each app to implement their own log buffer. The\n * disadvantage to doing this is that log handlers cannot maintain references to\n * log records and expect that they are not overwriten at a later point.\n *\n * @author agrieve@google.com (Andrew Grieve)\n */\n\ngoog.provide('goog.debug.LogBuffer');\n\ngoog.require('goog.asserts');\ngoog.require('goog.debug.LogRecord');\n\n\n\n/**\n * Creates the log buffer.\n * @constructor\n * @final\n */\ngoog.debug.LogBuffer = function() {\n  goog.asserts.assert(\n      goog.debug.LogBuffer.isBufferingEnabled(),\n      'Cannot use goog.debug.LogBuffer without defining ' +\n          'goog.debug.LogBuffer.CAPACITY.');\n  this.clear();\n};\n\n\n/**\n * A static method that always returns the same instance of LogBuffer.\n * @return {!goog.debug.LogBuffer} The LogBuffer singleton instance.\n */\ngoog.debug.LogBuffer.getInstance = function() {\n  if (!goog.debug.LogBuffer.instance_) {\n    // This function is written with the return statement after the assignment\n    // to avoid the jscompiler StripCode bug described in http://b/2608064.\n    // After that bug is fixed this can be refactored.\n    goog.debug.LogBuffer.instance_ = new goog.debug.LogBuffer();\n  }\n  return goog.debug.LogBuffer.instance_;\n};\n\n\n/**\n * @define {number} The number of log records to buffer. 0 means disable\n * buffering.\n */\ngoog.debug.LogBuffer.CAPACITY = goog.define('goog.debug.LogBuffer.CAPACITY', 0);\n\n\n/**\n * The array to store the records.\n * @type {!Array<!goog.debug.LogRecord|undefined>}\n * @private\n */\ngoog.debug.LogBuffer.prototype.buffer_;\n\n\n/**\n * The index of the most recently added record or -1 if there are no records.\n * @type {number}\n * @private\n */\ngoog.debug.LogBuffer.prototype.curIndex_;\n\n\n/**\n * Whether the buffer is at capacity.\n * @type {boolean}\n * @private\n */\ngoog.debug.LogBuffer.prototype.isFull_;\n\n\n/**\n * Adds a log record to the buffer, possibly overwriting the oldest record.\n * @param {goog.debug.Logger.Level} level One of the level identifiers.\n * @param {string} msg The string message.\n * @param {string} loggerName The name of the source logger.\n * @return {!goog.debug.LogRecord} The log record.\n */\ngoog.debug.LogBuffer.prototype.addRecord = function(level, msg, loggerName) {\n  var curIndex = (this.curIndex_ + 1) % goog.debug.LogBuffer.CAPACITY;\n  this.curIndex_ = curIndex;\n  if (this.isFull_) {\n    var ret = this.buffer_[curIndex];\n    ret.reset(level, msg, loggerName);\n    return ret;\n  }\n  this.isFull_ = curIndex == goog.debug.LogBuffer.CAPACITY - 1;\n  return this.buffer_[curIndex] =\n             new goog.debug.LogRecord(level, msg, loggerName);\n};\n\n\n/**\n * @return {boolean} Whether the log buffer is enabled.\n */\ngoog.debug.LogBuffer.isBufferingEnabled = function() {\n  return goog.debug.LogBuffer.CAPACITY > 0;\n};\n\n\n/**\n * Removes all buffered log records.\n */\ngoog.debug.LogBuffer.prototype.clear = function() {\n  this.buffer_ = new Array(goog.debug.LogBuffer.CAPACITY);\n  this.curIndex_ = -1;\n  this.isFull_ = false;\n};\n\n\n/**\n * Calls the given function for each buffered log record, starting with the\n * oldest one.\n * @param {function(!goog.debug.LogRecord)} func The function to call.\n */\ngoog.debug.LogBuffer.prototype.forEachRecord = function(func) {\n  var buffer = this.buffer_;\n  // Corner case: no records.\n  if (!buffer[0]) {\n    return;\n  }\n  var curIndex = this.curIndex_;\n  var i = this.isFull_ ? curIndex : -1;\n  do {\n    i = (i + 1) % goog.debug.LogBuffer.CAPACITY;\n    func(/** @type {!goog.debug.LogRecord} */ (buffer[i]));\n  } while (i != curIndex);\n};\n","~:compiled-at",1665166606969,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.debug.logbuffer.js\",\n\"lineCount\":64,\n\"mappings\":\"AAwBAA,IAAAC,QAAA,CAAa,sBAAb,CAAA;AAEAD,IAAAE,QAAA,CAAa,cAAb,CAAA;AACAF,IAAAE,QAAA,CAAa,sBAAb,CAAA;AASA,2BAAAF,IAAAG,MAAAC,UAAA,GAAuBC,QAAQ,EAAG;AAChCL,MAAAM,QAAAC,OAAA,CACIP,IAAAG,MAAAC,UAAAI,mBAAA,EADJ,EAEI,mDAFJ,GAGQ,gCAHR,CAAA;AAIA,MAAAC,MAAA,EAAA;AALgC,CAAlC;AAaA;;;AAAAT,IAAAG,MAAAC,UAAAM,YAAA,GAAmCC,QAAQ,EAAG;AAC5C,MAAI,CAACX,IAAAG,MAAAC,UAAAQ,UAAL;AAIEZ,QAAAG,MAAAC,UAAAQ,UAAA,GAAiC,IAAIZ,IAAAG,MAAAC,UAArC;AAJF;AAMA,SAAOJ,IAAAG,MAAAC,UAAAQ,UAAP;AAP4C,CAA9C;AAeA,wBAAAZ,IAAAG,MAAAC,UAAAS,SAAA,GAAgCb,IAAAc,OAAA,CAAY,+BAAZ,EAA6C,CAA7C,CAAhC;AAQA,kEAAAd,IAAAG,MAAAC,UAAAW,UAAAC,QAAA;AAQA,+BAAAhB,IAAAG,MAAAC,UAAAW,UAAAE,UAAA;AAQA,gCAAAjB,IAAAG,MAAAC,UAAAW,UAAAG,QAAA;AAUA;;;;;;AAAAlB,IAAAG,MAAAC,UAAAW,UAAAI,UAAA,GAA2CC,QAAQ,CAACC,KAAD,EAAQC,GAAR,EAAaC,UAAb,CAAyB;AAC1E,MAAIC,YAAY,IAAAP,UAAZO,GAA6B,CAA7BA,IAAkCxB,IAAAG,MAAAC,UAAAS,SAAtC;AACA,MAAAI,UAAA,GAAiBO,QAAjB;AACA,MAAI,IAAAN,QAAJ,CAAkB;AAChB,QAAIO,MAAM,IAAAT,QAAA,CAAaQ,QAAb,CAAV;AACAC,OAAAC,MAAA,CAAUL,KAAV,EAAiBC,GAAjB,EAAsBC,UAAtB,CAAA;AACA,WAAOE,GAAP;AAHgB;AAKlB,MAAAP,QAAA,GAAeM,QAAf,IAA2BxB,IAAAG,MAAAC,UAAAS,SAA3B,GAA2D,CAA3D;AACA,SAAO,IAAAG,QAAA,CAAaQ,QAAb,CAAP,GACW,IAAIxB,IAAAG,MAAAwB,UAAJ,CAAyBN,KAAzB,EAAgCC,GAAhC,EAAqCC,UAArC,CADX;AAT0E,CAA5E;AAiBA;;;AAAAvB,IAAAG,MAAAC,UAAAI,mBAAA,GAA0CoB,QAAQ,EAAG;AACnD,SAAO5B,IAAAG,MAAAC,UAAAS,SAAP,GAAuC,CAAvC;AADmD,CAArD;AAQAb,IAAAG,MAAAC,UAAAW,UAAAN,MAAA,GAAuCoB,QAAQ,EAAG;AAChD,MAAAb,QAAA,GAAe,IAAIc,KAAJ,CAAU9B,IAAAG,MAAAC,UAAAS,SAAV,CAAf;AACA,MAAAI,UAAA,GAAkB,EAAlB;AACA,MAAAC,QAAA,GAAe,KAAf;AAHgD,CAAlD;AAYA;;;AAAAlB,IAAAG,MAAAC,UAAAW,UAAAgB,cAAA,GAA+CC,QAAQ,CAACC,IAAD,CAAO;AAC5D,MAAIC,SAAS,IAAAlB,QAAb;AAEA,MAAI,CAACkB,MAAA,CAAO,CAAP,CAAL;AACE;AADF;AAGA,MAAIV,WAAW,IAAAP,UAAf;AACA,MAAIkB,IAAI,IAAAjB,QAAA,GAAeM,QAAf,GAA2B,EAAnC;AACA,IAAG;AACDW,KAAA,IAAKA,CAAL,GAAS,CAAT,IAAcnC,IAAAG,MAAAC,UAAAS,SAAd;AACAoB,QAAA,sCAA0C,CAACC,MAAA,CAAOC,CAAP,CAAD,CAA1C,CAAA;AAFC,GAAH,QAGSA,CAHT,IAGcX,QAHd;AAR4D,CAA9D;;\",\n\"sources\":[\"goog/debug/logbuffer.js\"],\n\"sourcesContent\":[\"// Copyright 2010 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview A buffer for log records. The purpose of this is to improve\\n * logging performance by re-using old objects when the buffer becomes full and\\n * to eliminate the need for each app to implement their own log buffer. The\\n * disadvantage to doing this is that log handlers cannot maintain references to\\n * log records and expect that they are not overwriten at a later point.\\n *\\n * @author agrieve@google.com (Andrew Grieve)\\n */\\n\\ngoog.provide('goog.debug.LogBuffer');\\n\\ngoog.require('goog.asserts');\\ngoog.require('goog.debug.LogRecord');\\n\\n\\n\\n/**\\n * Creates the log buffer.\\n * @constructor\\n * @final\\n */\\ngoog.debug.LogBuffer = function() {\\n  goog.asserts.assert(\\n      goog.debug.LogBuffer.isBufferingEnabled(),\\n      'Cannot use goog.debug.LogBuffer without defining ' +\\n          'goog.debug.LogBuffer.CAPACITY.');\\n  this.clear();\\n};\\n\\n\\n/**\\n * A static method that always returns the same instance of LogBuffer.\\n * @return {!goog.debug.LogBuffer} The LogBuffer singleton instance.\\n */\\ngoog.debug.LogBuffer.getInstance = function() {\\n  if (!goog.debug.LogBuffer.instance_) {\\n    // This function is written with the return statement after the assignment\\n    // to avoid the jscompiler StripCode bug described in http://b/2608064.\\n    // After that bug is fixed this can be refactored.\\n    goog.debug.LogBuffer.instance_ = new goog.debug.LogBuffer();\\n  }\\n  return goog.debug.LogBuffer.instance_;\\n};\\n\\n\\n/**\\n * @define {number} The number of log records to buffer. 0 means disable\\n * buffering.\\n */\\ngoog.debug.LogBuffer.CAPACITY = goog.define('goog.debug.LogBuffer.CAPACITY', 0);\\n\\n\\n/**\\n * The array to store the records.\\n * @type {!Array<!goog.debug.LogRecord|undefined>}\\n * @private\\n */\\ngoog.debug.LogBuffer.prototype.buffer_;\\n\\n\\n/**\\n * The index of the most recently added record or -1 if there are no records.\\n * @type {number}\\n * @private\\n */\\ngoog.debug.LogBuffer.prototype.curIndex_;\\n\\n\\n/**\\n * Whether the buffer is at capacity.\\n * @type {boolean}\\n * @private\\n */\\ngoog.debug.LogBuffer.prototype.isFull_;\\n\\n\\n/**\\n * Adds a log record to the buffer, possibly overwriting the oldest record.\\n * @param {goog.debug.Logger.Level} level One of the level identifiers.\\n * @param {string} msg The string message.\\n * @param {string} loggerName The name of the source logger.\\n * @return {!goog.debug.LogRecord} The log record.\\n */\\ngoog.debug.LogBuffer.prototype.addRecord = function(level, msg, loggerName) {\\n  var curIndex = (this.curIndex_ + 1) % goog.debug.LogBuffer.CAPACITY;\\n  this.curIndex_ = curIndex;\\n  if (this.isFull_) {\\n    var ret = this.buffer_[curIndex];\\n    ret.reset(level, msg, loggerName);\\n    return ret;\\n  }\\n  this.isFull_ = curIndex == goog.debug.LogBuffer.CAPACITY - 1;\\n  return this.buffer_[curIndex] =\\n             new goog.debug.LogRecord(level, msg, loggerName);\\n};\\n\\n\\n/**\\n * @return {boolean} Whether the log buffer is enabled.\\n */\\ngoog.debug.LogBuffer.isBufferingEnabled = function() {\\n  return goog.debug.LogBuffer.CAPACITY > 0;\\n};\\n\\n\\n/**\\n * Removes all buffered log records.\\n */\\ngoog.debug.LogBuffer.prototype.clear = function() {\\n  this.buffer_ = new Array(goog.debug.LogBuffer.CAPACITY);\\n  this.curIndex_ = -1;\\n  this.isFull_ = false;\\n};\\n\\n\\n/**\\n * Calls the given function for each buffered log record, starting with the\\n * oldest one.\\n * @param {function(!goog.debug.LogRecord)} func The function to call.\\n */\\ngoog.debug.LogBuffer.prototype.forEachRecord = function(func) {\\n  var buffer = this.buffer_;\\n  // Corner case: no records.\\n  if (!buffer[0]) {\\n    return;\\n  }\\n  var curIndex = this.curIndex_;\\n  var i = this.isFull_ ? curIndex : -1;\\n  do {\\n    i = (i + 1) % goog.debug.LogBuffer.CAPACITY;\\n    func(/** @type {!goog.debug.LogRecord} */ (buffer[i]));\\n  } while (i != curIndex);\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"debug\",\"LogBuffer\",\"goog.debug.LogBuffer\",\"asserts\",\"assert\",\"isBufferingEnabled\",\"clear\",\"getInstance\",\"goog.debug.LogBuffer.getInstance\",\"instance_\",\"CAPACITY\",\"define\",\"prototype\",\"buffer_\",\"curIndex_\",\"isFull_\",\"addRecord\",\"goog.debug.LogBuffer.prototype.addRecord\",\"level\",\"msg\",\"loggerName\",\"curIndex\",\"ret\",\"reset\",\"LogRecord\",\"goog.debug.LogBuffer.isBufferingEnabled\",\"goog.debug.LogBuffer.prototype.clear\",\"Array\",\"forEachRecord\",\"goog.debug.LogBuffer.prototype.forEachRecord\",\"func\",\"buffer\",\"i\"]\n}\n"]