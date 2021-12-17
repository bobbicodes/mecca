["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/dom/nodetype.js"],"~:js","goog.provide(\"goog.dom.NodeType\");\n/** @enum {number} */ goog.dom.NodeType = {ELEMENT:1, ATTRIBUTE:2, TEXT:3, CDATA_SECTION:4, ENTITY_REFERENCE:5, ENTITY:6, PROCESSING_INSTRUCTION:7, COMMENT:8, DOCUMENT:9, DOCUMENT_TYPE:10, DOCUMENT_FRAGMENT:11, NOTATION:12};\n","~:source","// Copyright 2006 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Definition of goog.dom.NodeType.\n */\n\ngoog.provide('goog.dom.NodeType');\n\n\n/**\n * Constants for the nodeType attribute in the Node interface.\n *\n * These constants match those specified in the Node interface. These are\n * usually present on the Node object in recent browsers, but not in older\n * browsers (specifically, early IEs) and thus are given here.\n *\n * In some browsers (early IEs), these are not defined on the Node object,\n * so they are provided here.\n *\n * See http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1950641247\n * @enum {number}\n */\ngoog.dom.NodeType = {\n  ELEMENT: 1,\n  ATTRIBUTE: 2,\n  TEXT: 3,\n  CDATA_SECTION: 4,\n  ENTITY_REFERENCE: 5,\n  ENTITY: 6,\n  PROCESSING_INSTRUCTION: 7,\n  COMMENT: 8,\n  DOCUMENT: 9,\n  DOCUMENT_TYPE: 10,\n  DOCUMENT_FRAGMENT: 11,\n  NOTATION: 12\n};\n","~:compiled-at",1638066766831,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.dom.nodetype.js\",\n\"lineCount\":3,\n\"mappings\":\"AAkBAA,IAAAC,QAAA,CAAa,mBAAb,CAAA;AAgBA,sBAAAD,IAAAE,IAAAC,SAAA,GAAoB,CAClBC,QAAS,CADS,EAElBC,UAAW,CAFO,EAGlBC,KAAM,CAHY,EAIlBC,cAAe,CAJG,EAKlBC,iBAAkB,CALA,EAMlBC,OAAQ,CANU,EAOlBC,uBAAwB,CAPN,EAQlBC,QAAS,CARS,EASlBC,SAAU,CATQ,EAUlBC,cAAe,EAVG,EAWlBC,kBAAmB,EAXD,EAYlBC,SAAU,EAZQ,CAApB;;\",\n\"sources\":[\"goog/dom/nodetype.js\"],\n\"sourcesContent\":[\"// Copyright 2006 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Definition of goog.dom.NodeType.\\n */\\n\\ngoog.provide('goog.dom.NodeType');\\n\\n\\n/**\\n * Constants for the nodeType attribute in the Node interface.\\n *\\n * These constants match those specified in the Node interface. These are\\n * usually present on the Node object in recent browsers, but not in older\\n * browsers (specifically, early IEs) and thus are given here.\\n *\\n * In some browsers (early IEs), these are not defined on the Node object,\\n * so they are provided here.\\n *\\n * See http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1950641247\\n * @enum {number}\\n */\\ngoog.dom.NodeType = {\\n  ELEMENT: 1,\\n  ATTRIBUTE: 2,\\n  TEXT: 3,\\n  CDATA_SECTION: 4,\\n  ENTITY_REFERENCE: 5,\\n  ENTITY: 6,\\n  PROCESSING_INSTRUCTION: 7,\\n  COMMENT: 8,\\n  DOCUMENT: 9,\\n  DOCUMENT_TYPE: 10,\\n  DOCUMENT_FRAGMENT: 11,\\n  NOTATION: 12\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"dom\",\"NodeType\",\"ELEMENT\",\"ATTRIBUTE\",\"TEXT\",\"CDATA_SECTION\",\"ENTITY_REFERENCE\",\"ENTITY\",\"PROCESSING_INSTRUCTION\",\"COMMENT\",\"DOCUMENT\",\"DOCUMENT_TYPE\",\"DOCUMENT_FRAGMENT\",\"NOTATION\"]\n}\n"]