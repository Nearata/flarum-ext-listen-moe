module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t){e.exports=flarum.core.compat["forum/app"]},,function(e,t,n){e.exports=n(8)},function(e,t){e.exports=flarum.core.compat["common/extend"]},function(e,t){e.exports=flarum.core.compat["common/components/FieldSet"]},function(e,t){e.exports=flarum.core.compat["common/components/Select"]},function(e,t){e.exports=flarum.core.compat["forum/ForumApplication"]},function(e,t){e.exports=flarum.core.compat["forum/components/SettingsPage"]},function(e,t,n){var r=function(e){"use strict";var t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function a(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{a({},"")}catch(e){a=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),s=new x(r||[]);return i._invoke=function(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return L()}for(n.method=o,n.arg=i;;){var s=n.delegate;if(s){var a=b(s,n);if(a){if(a===l)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,s),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var l={};function f(){}function h(){}function p(){}var d={};d[o]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(O([])));m&&m!==t&&n.call(m,o)&&(d=m);var _=p.prototype=f.prototype=Object.create(d);function v(e){["next","throw","return"].forEach((function(t){a(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){var r;this._invoke=function(o,i){function s(){return new t((function(r,s){!function r(o,i,s,a){var c=u(e[o],e,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,s,a)}),(function(e){r("throw",e,s,a)})):t.resolve(f).then((function(e){l.value=e,s(l)}),(function(e){return r("throw",e,s,a)}))}a(c.arg)}(o,i,r,s)}))}return r=r?r.then(s,s):s()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,l;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function O(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=_.constructor=p,p.constructor=h,h.displayName=a(p,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,a(e,s,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},v(g.prototype),g.prototype[i]=function(){return this},e.AsyncIterator=g,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var s=new g(c(t,n,r,o),i);return e.isGeneratorFunction(n)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},v(_),a(_,s,"Generator"),_[o]=function(){return this},_.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return s.type="throw",s.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=e,s.arg=t,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},e}(e.exports);try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}},function(e,t,n){"use strict";function r(e,t,n,r,o,i,s){try{var a=e[i](s),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,o)}n.r(t);var o=n(2),i=n.n(o),s=n(3),a=n(0),c=n.n(a),u=n(4),l=n.n(u),f=n(5),h=n.n(f),p=n(6),d=n.n(p),y=n(7),_=n.n(y),v=function(){function e(e){return function(t){return new Promise((function(n,r){var o=document.createElement(e),i="body",s="src";switch(o.onload=function(){n(t)},o.onerror=function(){r(t)},e){case"script":o.async=!0;break;case"link":o.type="text/css",o.rel="stylesheet",s="href",i="head"}o[s]=t,document[i].appendChild(o)}))}}return{css:e("link"),js:e("script"),img:e("img")}}(),g=function(e,t){return(g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function b(e,t){function n(){this.constructor=e}g(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function w(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s}function E(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(w(arguments[t]));return e}var x=function(e,t){this.target=t,this.type=e},O=function(e){function t(t,n){var r=e.call(this,"error",n)||this;return r.message=t.message,r.error=t,r}return b(t,e),t}(x),L=function(e){function t(t,n,r){void 0===t&&(t=1e3),void 0===n&&(n="");var o=e.call(this,"close",r)||this;return o.wasClean=!0,o.code=t,o.reason=n,o}return b(t,e),t}(x),T=function(){if("undefined"!=typeof WebSocket)return WebSocket},j={maxReconnectionDelay:1e4,minReconnectionDelay:1e3+4e3*Math.random(),minUptime:5e3,reconnectionDelayGrowFactor:1.3,connectionTimeout:4e3,maxRetries:1/0,maxEnqueuedMessages:1/0,startClosed:!1,debug:!1},P=function(){function e(e,t,n){var r=this;void 0===n&&(n={}),this._listeners={error:[],message:[],open:[],close:[]},this._retryCount=-1,this._shouldReconnect=!0,this._connectLock=!1,this._binaryType="blob",this._closeCalled=!1,this._messageQueue=[],this.onclose=null,this.onerror=null,this.onmessage=null,this.onopen=null,this._handleOpen=function(e){r._debug("open event");var t=r._options.minUptime,n=void 0===t?j.minUptime:t;clearTimeout(r._connectTimeout),r._uptimeTimeout=setTimeout((function(){return r._acceptOpen()}),n),r._ws.binaryType=r._binaryType,r._messageQueue.forEach((function(e){return r._ws.send(e)})),r._messageQueue=[],r.onopen&&r.onopen(e),r._listeners.open.forEach((function(t){return r._callEventListener(e,t)}))},this._handleMessage=function(e){r._debug("message event"),r.onmessage&&r.onmessage(e),r._listeners.message.forEach((function(t){return r._callEventListener(e,t)}))},this._handleError=function(e){r._debug("error event",e.message),r._disconnect(void 0,"TIMEOUT"===e.message?"timeout":void 0),r.onerror&&r.onerror(e),r._debug("exec error listeners"),r._listeners.error.forEach((function(t){return r._callEventListener(e,t)})),r._connect()},this._handleClose=function(e){r._debug("close event"),r._clearTimeouts(),r._shouldReconnect&&r._connect(),r.onclose&&r.onclose(e),r._listeners.close.forEach((function(t){return r._callEventListener(e,t)}))},this._url=e,this._protocols=t,this._options=n,this._options.startClosed&&(this._shouldReconnect=!1),this._connect()}return Object.defineProperty(e,"CONNECTING",{get:function(){return 0},enumerable:!0,configurable:!0}),Object.defineProperty(e,"OPEN",{get:function(){return 1},enumerable:!0,configurable:!0}),Object.defineProperty(e,"CLOSING",{get:function(){return 2},enumerable:!0,configurable:!0}),Object.defineProperty(e,"CLOSED",{get:function(){return 3},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"CONNECTING",{get:function(){return e.CONNECTING},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"OPEN",{get:function(){return e.OPEN},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"CLOSING",{get:function(){return e.CLOSING},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"CLOSED",{get:function(){return e.CLOSED},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"binaryType",{get:function(){return this._ws?this._ws.binaryType:this._binaryType},set:function(e){this._binaryType=e,this._ws&&(this._ws.binaryType=e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"retryCount",{get:function(){return Math.max(this._retryCount,0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bufferedAmount",{get:function(){return this._messageQueue.reduce((function(e,t){return"string"==typeof t?e+=t.length:t instanceof Blob?e+=t.size:e+=t.byteLength,e}),0)+(this._ws?this._ws.bufferedAmount:0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"extensions",{get:function(){return this._ws?this._ws.extensions:""},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"protocol",{get:function(){return this._ws?this._ws.protocol:""},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"readyState",{get:function(){return this._ws?this._ws.readyState:this._options.startClosed?e.CLOSED:e.CONNECTING},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"url",{get:function(){return this._ws?this._ws.url:""},enumerable:!0,configurable:!0}),e.prototype.close=function(e,t){void 0===e&&(e=1e3),this._closeCalled=!0,this._shouldReconnect=!1,this._clearTimeouts(),this._ws?this._ws.readyState!==this.CLOSED?this._ws.close(e,t):this._debug("close: already closed"):this._debug("close enqueued: no ws instance")},e.prototype.reconnect=function(e,t){this._shouldReconnect=!0,this._closeCalled=!1,this._retryCount=-1,this._ws&&this._ws.readyState!==this.CLOSED?(this._disconnect(e,t),this._connect()):this._connect()},e.prototype.send=function(e){if(this._ws&&this._ws.readyState===this.OPEN)this._debug("send",e),this._ws.send(e);else{var t=this._options.maxEnqueuedMessages,n=void 0===t?j.maxEnqueuedMessages:t;this._messageQueue.length<n&&(this._debug("enqueue",e),this._messageQueue.push(e))}},e.prototype.addEventListener=function(e,t){this._listeners[e]&&this._listeners[e].push(t)},e.prototype.dispatchEvent=function(e){var t,n,r=this._listeners[e.type];if(r)try{for(var o=function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}}(r),i=o.next();!i.done;i=o.next()){var s=i.value;this._callEventListener(e,s)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return!0},e.prototype.removeEventListener=function(e,t){this._listeners[e]&&(this._listeners[e]=this._listeners[e].filter((function(e){return e!==t})))},e.prototype._debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._options.debug&&console.log.apply(console,E(["RWS>"],e))},e.prototype._getNextDelay=function(){var e=this._options,t=e.reconnectionDelayGrowFactor,n=void 0===t?j.reconnectionDelayGrowFactor:t,r=e.minReconnectionDelay,o=void 0===r?j.minReconnectionDelay:r,i=e.maxReconnectionDelay,s=void 0===i?j.maxReconnectionDelay:i,a=0;return this._retryCount>0&&(a=o*Math.pow(n,this._retryCount-1))>s&&(a=s),this._debug("next delay",a),a},e.prototype._wait=function(){var e=this;return new Promise((function(t){setTimeout(t,e._getNextDelay())}))},e.prototype._getNextUrl=function(e){if("string"==typeof e)return Promise.resolve(e);if("function"==typeof e){var t=e();if("string"==typeof t)return Promise.resolve(t);if(t.then)return t}throw Error("Invalid URL")},e.prototype._connect=function(){var e=this;if(!this._connectLock&&this._shouldReconnect){this._connectLock=!0;var t=this._options,n=t.maxRetries,r=void 0===n?j.maxRetries:n,o=t.connectionTimeout,i=void 0===o?j.connectionTimeout:o,s=t.WebSocket,a=void 0===s?T():s;if(this._retryCount>=r)this._debug("max retries reached",this._retryCount,">=",r);else{if(this._retryCount++,this._debug("connect",this._retryCount),this._removeListeners(),void 0===(c=a)||!c||2!==c.CLOSING)throw Error("No valid WebSocket class provided");var c;this._wait().then((function(){return e._getNextUrl(e._url)})).then((function(t){e._closeCalled||(e._debug("connect",{url:t,protocols:e._protocols}),e._ws=e._protocols?new a(t,e._protocols):new a(t),e._ws.binaryType=e._binaryType,e._connectLock=!1,e._addListeners(),e._connectTimeout=setTimeout((function(){return e._handleTimeout()}),i))}))}}},e.prototype._handleTimeout=function(){this._debug("timeout event"),this._handleError(new O(Error("TIMEOUT"),this))},e.prototype._disconnect=function(e,t){if(void 0===e&&(e=1e3),this._clearTimeouts(),this._ws){this._removeListeners();try{this._ws.close(e,t),this._handleClose(new L(e,t,this))}catch(e){}}},e.prototype._acceptOpen=function(){this._debug("accept open"),this._retryCount=0},e.prototype._callEventListener=function(e,t){"handleEvent"in t?t.handleEvent(e):t(e)},e.prototype._removeListeners=function(){this._ws&&(this._debug("removeListeners"),this._ws.removeEventListener("open",this._handleOpen),this._ws.removeEventListener("close",this._handleClose),this._ws.removeEventListener("message",this._handleMessage),this._ws.removeEventListener("error",this._handleError))},e.prototype._addListeners=function(){this._ws&&(this._debug("addListeners"),this._ws.addEventListener("open",this._handleOpen),this._ws.addEventListener("close",this._handleClose),this._ws.addEventListener("message",this._handleMessage),this._ws.addEventListener("error",this._handleError))},e.prototype._clearTimeouts=function(){clearTimeout(this._connectTimeout),clearTimeout(this._uptimeTimeout)},e}(),S=!1,C=function(){var e,t=(e=i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,v.css("https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.css");case 4:return e.next=6,v.js("https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.js");case 6:S=!0;case 7:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(o,i){var s=e.apply(t,n);function a(e){r(s,o,i,a,c,"next",e)}function c(e){r(s,o,i,a,c,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}(),N={jpop:{audioUrl:"https://listen.moe/stream",wsUrl:"wss://listen.moe/gateway_v2"},kpop:{audioUrl:"https://listen.moe/kpop/stream",wsUrl:"wss://listen.moe/kpop/gateway_v2"}},k=function(e,t){var n;c.a.listenMoe.websocket=new P(t,[],{connectionTimeout:5e3}),c.a.listenMoe.websocket.onopen=function(){clearInterval(n),n=null},c.a.listenMoe.websocket.onmessage=function(t){if(t.data.length){var r,o;try{r=JSON.parse(t.data)}catch(e){return}if(0===r.op&&(c.a.listenMoe.websocket.send(JSON.stringify({op:9})),o=r.d.heartbeat,n=setInterval((function(){c.a.listenMoe.websocket.send(JSON.stringify({op:9}))}),o)),1===r.op){if(-1===["TRACK_UPDATE","TRACK_UPDATE_REQUEST","QUEUE_UPDATE","NOTIFICATION"].indexOf(r.t))return;var i=r.d,s=i.song.artists.map((function(e){return e.name})).join(", "),a=i.song.albums,u=a.length>0&&null!==a[0].image?"https://cdn.listen.moe/covers/"+a[0].image:c.a.forum.attribute("blankUrl"),l=i.song.sources.map((function(e){return e.nameRomaji})).join(", "),f=i.song.title,h=l?s+" ["+l+"]":s;document.body.querySelector(".aplayer-title").setAttribute("title",f+" "+h);var p=function(){c.a.listenMoe.player.list.add({name:f,artist:h,url:e,cover:u}),c.a.listenMoe.player.list.switch(1),c.a.listenMoe.player.list.remove(0)};p(),c.a.listenMoe.player.on("pause",(function(){p()}))}}},c.a.listenMoe.websocket.onclose=function(){clearInterval(n),n=null}};c.a.initializers.add("nearata-listen-moe",(function(){c.a.listenMoe={},Object(s.extend)(d.a.prototype,"mount",(function(){var e=c.a.forum.attribute("listenMoeRadioGuests"),t=c.a.session.user;if(t||e){var n=t?t.preferences().listenMoeRadioType:c.a.forum.attribute("listenMoeRadioType"),r=N[n].audioUrl,o=N[n].wsUrl;C().then((function(){var e=document.createElement("div");e.id="nearata-listen-moe",document.body.prepend(e),c.a.listenMoe.player=new APlayer({container:e,fixed:!0,theme:"#FF015B",loop:"none",preload:"metadata",volume:.5,audio:{name:"&nbsp;",artist:"&nbsp;",url:r}}),k(r,o)}))}})),Object(s.extend)(_.a.prototype,"settingsItems",(function(e){var t=c.a.session.user,n=t.preferences().listenMoeRadioType;e.add("listenMoeRadioType",m(l.a,{label:c.a.translator.trans("nearata-listen-moe.forum.settings.radio_label"),class:"Settings-theme"},[m(h.a,{class:"Settings-theme--input",value:n,options:{jpop:c.a.translator.trans("nearata-listen-moe.forum.settings.radio_options.jpop"),kpop:c.a.translator.trans("nearata-listen-moe.forum.settings.radio_options.kpop")},onchange:function(e){t.savePreferences({listenMoeRadioType:e}).then((function(){return location.reload()}))}})]))}))}))}]);
//# sourceMappingURL=forum.js.map