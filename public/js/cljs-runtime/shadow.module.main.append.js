
shadow.cljs.devtools.client.env.module_loaded('main');

try { mecca.core.init(); } catch (e) { console.error("An error occurred when calling (mecca.core/init)"); throw(e); }