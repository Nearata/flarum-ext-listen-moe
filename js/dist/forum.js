module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=9)}([function(t,e,r){t.exports=r(7)},function(t,e){t.exports=flarum.core.compat["common/extend"]},,function(t,e){t.exports=flarum.core.compat["common/components/FieldSet"]},function(t,e){t.exports=flarum.core.compat["common/components/Select"]},function(t,e){t.exports=flarum.core.compat["forum/ForumApplication"]},function(t,e){t.exports=flarum.core.compat["forum/components/SettingsPage"]},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return L()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=b(a,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l={};function f(){}function p(){}function h(){}var d={};d[o]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(_([])));y&&y!==e&&r.call(y,o)&&(d=y);var v=h.prototype=f.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function _(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=v.constructor=h,h.constructor=p,p.displayName=c(h,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,a,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},g(w.prototype),w.prototype[i]=function(){return this},t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(v),c(v,a,"Generator"),v[o]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},,function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}r.r(e);var o=r(0),i=r.n(o),a=r(1),c=r(3),u=r.n(c),s=r(4),l=r.n(s),f=r(5),p=r.n(f),h=r(6),d=r.n(h),y=function(){function t(t){return function(e){return new Promise((function(r,n){var o=document.createElement(t),i="body",a="src";switch(o.onload=function(){r(e)},o.onerror=function(){n(e)},t){case"script":o.async=!0;break;case"link":o.type="text/css",o.rel="stylesheet",a="href",i="head"}o[a]=e,document[i].appendChild(o)}))}}return{css:t("link"),js:t("script"),img:t("img")}}(),v=!1,g=function(){var t,e=(t=i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!v){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,y.css("https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.css");case 4:return t.next=6,y.js("https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.js");case 6:v=!0;case 7:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))});return function(){return e.apply(this,arguments)}}();app.initializers.add("nearata-listen-moe",(function(t){var e={jpop:{audioUrl:"https://listen.moe/stream",wsUrl:"wss://listen.moe/gateway_v2"},kpop:{audioUrl:"https://listen.moe/kpop/stream",wsUrl:"wss://listen.moe/kpop/gateway_v2"}},r=function(t,e){return new Promise((function(r){var n,o;(o=new WebSocket(e)).onopen=function(){clearInterval(n),n=null},o.onmessage=function(e){if(e.data.length){var r,i;try{r=JSON.parse(e.data)}catch(t){return}switch(r.op){case 0:o.send(JSON.stringify({op:9})),i=r.d.heartbeat,n=setInterval((function(){o.send(JSON.stringify({op:9}))}),i);break;case 1:if("TRACK_UPDATE"!==r.t&&"TRACK_UPDATE_REQUEST"!==r.t&&"QUEUE_UPDATE"!==r.t&&"NOTIFICATION"!==r.t)break;var a=r.d,c=a.song.artists.map((function(t){return t.name})).join(", "),u=a.song.albums,s=u.length>0&&null!==u[0].image?"https://cdn.listen.moe/covers/"+u[0].image:"https://listen.moe/_nuxt/img/blank-dark.cd1c044.png",l=a.song.sources.map((function(t){return t.nameRomaji})).join(", "),f=a.song.title,p=l?c+" ["+l+"]":c;document.body.querySelector(".aplayer-title").setAttribute("title",f+" "+p);var h=function(){window.listenMoe.list.add({name:f,artist:p,url:t,cover:s}),window.listenMoe.list.switch(1),window.listenMoe.list.remove(0)};h(),window.listenMoe.on("pause",(function(){h()}))}}},o.onclose=function(){clearInterval(n),n=null,o&&(o.close(),o=null),setTimeout((function(){return connect()}),5e3)},r()}))};Object(a.extend)(p.a.prototype,"mount",(function(){var n=t.forum.attribute("listenMoeRadioGuests"),o=t.session.user;if(o||n){var i=o?o.preferences().listenMoeRadioType:t.forum.attribute("listenMoeRadioType"),a=e[i].audioUrl,c=e[i].wsUrl;g().then((function(){var t=document.createElement("div");t.id="nearata-listen-moe",document.body.prepend(t),r(a,c).then((function(){window.listenMoe=new APlayer({container:t,fixed:!0,theme:"#FF015B",loop:"none",preload:"metadata",volume:.5,audio:{name:"&nbsp;",artist:"&nbsp;",url:a}})}))}))}})),Object(a.extend)(d.a.prototype,"settingsItems",(function(e){var r=t.session.user,n=r.preferences().listenMoeRadioType;e.add("listenMoeRadioType",m(u.a,{label:t.translator.trans("nearata-listen-moe.forum.settings.radio_label"),class:"Settings-theme"},[m(l.a,{class:"Settings-theme--input",value:n,options:{jpop:t.translator.trans("nearata-listen-moe.forum.settings.radio_options.jpop"),kpop:t.translator.trans("nearata-listen-moe.forum.settings.radio_options.kpop")},onchange:function(t){r.savePreferences({listenMoeRadioType:t}).then((function(){return location.reload()}))}})]))}))}))}]);
//# sourceMappingURL=forum.js.map