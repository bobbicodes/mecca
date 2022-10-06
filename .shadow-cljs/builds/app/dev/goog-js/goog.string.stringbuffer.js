["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/string/stringbuffer.js"],"~:js","goog.provide(\"goog.string.StringBuffer\");\n/**\n * @constructor\n * @param {*=} opt_a1\n * @param {...*} var_args\n */\ngoog.string.StringBuffer = function(opt_a1, var_args) {\n  if (opt_a1 != null) {\n    this.append.apply(this, arguments);\n  }\n};\n/** @private @type {string} */ goog.string.StringBuffer.prototype.buffer_ = \"\";\n/**\n * @param {*} s\n */\ngoog.string.StringBuffer.prototype.set = function(s) {\n  this.buffer_ = \"\" + s;\n};\n/**\n * @param {*} a1\n * @param {*=} opt_a2\n * @param {...?} var_args\n * @return {!goog.string.StringBuffer}\n * @suppress {duplicate}\n */\ngoog.string.StringBuffer.prototype.append = function(a1, opt_a2, var_args) {\n  this.buffer_ += String(a1);\n  if (opt_a2 != null) {\n    for (var i = 1; i < arguments.length; i++) {\n      this.buffer_ += arguments[i];\n    }\n  }\n  return this;\n};\ngoog.string.StringBuffer.prototype.clear = function() {\n  this.buffer_ = \"\";\n};\n/**\n * @return {number}\n */\ngoog.string.StringBuffer.prototype.getLength = function() {\n  return this.buffer_.length;\n};\n/**\n * @return {string}\n * @override\n */\ngoog.string.StringBuffer.prototype.toString = function() {\n  return this.buffer_;\n};\n","~:source","// Copyright 2006 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Utility for fast string concatenation.\n */\n\ngoog.provide('goog.string.StringBuffer');\n\n\n\n/**\n * Utility class to facilitate string concatenation.\n *\n * @param {*=} opt_a1 Optional first initial item to append.\n * @param {...*} var_args Other initial items to\n *     append, e.g., new goog.string.StringBuffer('foo', 'bar').\n * @constructor\n */\ngoog.string.StringBuffer = function(opt_a1, var_args) {\n  if (opt_a1 != null) {\n    this.append.apply(this, arguments);\n  }\n};\n\n\n/**\n * Internal buffer for the string to be concatenated.\n * @type {string}\n * @private\n */\ngoog.string.StringBuffer.prototype.buffer_ = '';\n\n\n/**\n * Sets the contents of the string buffer object, replacing what's currently\n * there.\n *\n * @param {*} s String to set.\n */\ngoog.string.StringBuffer.prototype.set = function(s) {\n  this.buffer_ = '' + s;\n};\n\n\n/**\n * Appends one or more items to the buffer.\n *\n * Calling this with null, undefined, or empty arguments is an error.\n *\n * @param {*} a1 Required first string.\n * @param {*=} opt_a2 Optional second string.\n * @param {...?} var_args Other items to append,\n *     e.g., sb.append('foo', 'bar', 'baz').\n * @return {!goog.string.StringBuffer} This same StringBuffer object.\n * @suppress {duplicate}\n */\ngoog.string.StringBuffer.prototype.append = function(a1, opt_a2, var_args) {\n  // Use a1 directly to avoid arguments instantiation for single-arg case.\n  this.buffer_ += String(a1);\n  if (opt_a2 != null) {  // second argument is undefined (null == undefined)\n    for (let i = 1; i < arguments.length; i++) {\n      this.buffer_ += arguments[i];\n    }\n  }\n  return this;\n};\n\n\n/**\n * Clears the internal buffer.\n */\ngoog.string.StringBuffer.prototype.clear = function() {\n  this.buffer_ = '';\n};\n\n\n/**\n * @return {number} the length of the current contents of the buffer.\n */\ngoog.string.StringBuffer.prototype.getLength = function() {\n  return this.buffer_.length;\n};\n\n\n/**\n * @return {string} The concatenated string.\n * @override\n */\ngoog.string.StringBuffer.prototype.toString = function() {\n  return this.buffer_;\n};\n","~:compiled-at",1665058780373,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.string.stringbuffer.js\",\n\"lineCount\":51,\n\"mappings\":\"AAkBAA,IAAAC,QAAA,CAAa,0BAAb,CAAA;AAYA;;;;;AAAAD,IAAAE,OAAAC,aAAA,GAA2BC,QAAQ,CAACC,MAAD,EAASC,QAAT,CAAmB;AACpD,MAAID,MAAJ,IAAc,IAAd;AACE,QAAAE,OAAAC,MAAA,CAAkB,IAAlB,EAAwBC,SAAxB,CAAA;AADF;AADoD,CAAtD;AAYA,+BAAAT,IAAAE,OAAAC,aAAAO,UAAAC,QAAA,GAA6C,EAA7C;AASA;;;AAAAX,IAAAE,OAAAC,aAAAO,UAAAE,IAAA,GAAyCC,QAAQ,CAACC,CAAD,CAAI;AACnD,MAAAH,QAAA,GAAe,EAAf,GAAoBG,CAApB;AADmD,CAArD;AAiBA;;;;;;;AAAAd,IAAAE,OAAAC,aAAAO,UAAAH,OAAA,GAA4CQ,QAAQ,CAACC,EAAD,EAAKC,MAAL,EAAaX,QAAb,CAAuB;AAEzE,MAAAK,QAAA,IAAgBO,MAAA,CAAOF,EAAP,CAAhB;AACA,MAAIC,MAAJ,IAAc,IAAd;AACE,SAAK,IAAIE,IAAI,CAAb,EAAgBA,CAAhB,GAAoBV,SAAAW,OAApB,EAAsCD,CAAA,EAAtC;AACE,UAAAR,QAAA,IAAgBF,SAAA,CAAUU,CAAV,CAAhB;AADF;AADF;AAKA,SAAO,IAAP;AARyE,CAA3E;AAeAnB,IAAAE,OAAAC,aAAAO,UAAAW,MAAA,GAA2CC,QAAQ,EAAG;AACpD,MAAAX,QAAA,GAAe,EAAf;AADoD,CAAtD;AAQA;;;AAAAX,IAAAE,OAAAC,aAAAO,UAAAa,UAAA,GAA+CC,QAAQ,EAAG;AACxD,SAAO,IAAAb,QAAAS,OAAP;AADwD,CAA1D;AASA;;;;AAAApB,IAAAE,OAAAC,aAAAO,UAAAe,SAAA,GAA8CC,QAAQ,EAAG;AACvD,SAAO,IAAAf,QAAP;AADuD,CAAzD;;\",\n\"sources\":[\"goog/string/stringbuffer.js\"],\n\"sourcesContent\":[\"// Copyright 2006 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Utility for fast string concatenation.\\n */\\n\\ngoog.provide('goog.string.StringBuffer');\\n\\n\\n\\n/**\\n * Utility class to facilitate string concatenation.\\n *\\n * @param {*=} opt_a1 Optional first initial item to append.\\n * @param {...*} var_args Other initial items to\\n *     append, e.g., new goog.string.StringBuffer('foo', 'bar').\\n * @constructor\\n */\\ngoog.string.StringBuffer = function(opt_a1, var_args) {\\n  if (opt_a1 != null) {\\n    this.append.apply(this, arguments);\\n  }\\n};\\n\\n\\n/**\\n * Internal buffer for the string to be concatenated.\\n * @type {string}\\n * @private\\n */\\ngoog.string.StringBuffer.prototype.buffer_ = '';\\n\\n\\n/**\\n * Sets the contents of the string buffer object, replacing what's currently\\n * there.\\n *\\n * @param {*} s String to set.\\n */\\ngoog.string.StringBuffer.prototype.set = function(s) {\\n  this.buffer_ = '' + s;\\n};\\n\\n\\n/**\\n * Appends one or more items to the buffer.\\n *\\n * Calling this with null, undefined, or empty arguments is an error.\\n *\\n * @param {*} a1 Required first string.\\n * @param {*=} opt_a2 Optional second string.\\n * @param {...?} var_args Other items to append,\\n *     e.g., sb.append('foo', 'bar', 'baz').\\n * @return {!goog.string.StringBuffer} This same StringBuffer object.\\n * @suppress {duplicate}\\n */\\ngoog.string.StringBuffer.prototype.append = function(a1, opt_a2, var_args) {\\n  // Use a1 directly to avoid arguments instantiation for single-arg case.\\n  this.buffer_ += String(a1);\\n  if (opt_a2 != null) {  // second argument is undefined (null == undefined)\\n    for (let i = 1; i < arguments.length; i++) {\\n      this.buffer_ += arguments[i];\\n    }\\n  }\\n  return this;\\n};\\n\\n\\n/**\\n * Clears the internal buffer.\\n */\\ngoog.string.StringBuffer.prototype.clear = function() {\\n  this.buffer_ = '';\\n};\\n\\n\\n/**\\n * @return {number} the length of the current contents of the buffer.\\n */\\ngoog.string.StringBuffer.prototype.getLength = function() {\\n  return this.buffer_.length;\\n};\\n\\n\\n/**\\n * @return {string} The concatenated string.\\n * @override\\n */\\ngoog.string.StringBuffer.prototype.toString = function() {\\n  return this.buffer_;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"string\",\"StringBuffer\",\"goog.string.StringBuffer\",\"opt_a1\",\"var_args\",\"append\",\"apply\",\"arguments\",\"prototype\",\"buffer_\",\"set\",\"goog.string.StringBuffer.prototype.set\",\"s\",\"goog.string.StringBuffer.prototype.append\",\"a1\",\"opt_a2\",\"String\",\"i\",\"length\",\"clear\",\"goog.string.StringBuffer.prototype.clear\",\"getLength\",\"goog.string.StringBuffer.prototype.getLength\",\"toString\",\"goog.string.StringBuffer.prototype.toString\"]\n}\n"]