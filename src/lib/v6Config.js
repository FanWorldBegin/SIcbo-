!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=398)}({11:function(t,e,n){"use strict";function r(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,s,u=r(t),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var f in n)i.call(n,f)&&(u[f]=n[f]);if(o){s=o(n);for(var l=0;l<s.length;l++)a.call(n,s[l])&&(u[s[l]]=n[s[l]])}}return u}},14:function(t,e,n){"use strict";"undefined"===typeof Promise&&(n(15).enable(),window.Promise=n(17)),n(18),Object.assign=n(11)},15:function(t,e,n){"use strict";function r(){c=!1,s._47=null,s._71=null}function o(t){function e(e){(t.allRejections||a(l[e].error,t.whitelist||u))&&(l[e].displayId=f++,t.onUnhandled?(l[e].logged=!0,t.onUnhandled(l[e].displayId,l[e].error)):(l[e].logged=!0,i(l[e].displayId,l[e].error)))}function n(e){l[e].logged&&(t.onHandled?t.onHandled(l[e].displayId,l[e].error):l[e].onUnhandled)}t=t||{},c&&r(),c=!0;var o=0,f=0,l={};s._47=function(t){2===t._83&&l[t._56]&&(l[t._56].logged?n(t._56):clearTimeout(l[t._56].timeout),delete l[t._56])},s._71=function(t,n){0===t._75&&(t._56=o++,l[t._56]={displayId:null,error:n,timeout:setTimeout(e.bind(null,t._56),a(n,u)?100:2e3),logged:!1})}}function i(t,e){((e&&(e.stack||e))+"").split("\n").forEach(function(t){})}function a(t,e){return e.some(function(e){return t instanceof e})}var s=n(7),u=[ReferenceError,TypeError,RangeError],c=!1;e.disable=r,e.enable=o},16:function(t,e,n){"use strict";(function(e){function n(t){a.length||(i(),s=!0),a[a.length]=t}function r(){for(;u<a.length;){var t=u;if(u+=1,a[t].call(),u>c){for(var e=0,n=a.length-u;e<n;e++)a[e]=a[e+u];a.length-=u,u=0}}a.length=0,u=0,s=!1}function o(t){return function(){function e(){clearTimeout(n),clearInterval(r),t()}var n=setTimeout(e,0),r=setInterval(e,50)}}t.exports=n;var i,a=[],s=!1,u=0,c=1024,f="undefined"!==typeof e?e:self,l=f.MutationObserver||f.WebKitMutationObserver;i="function"===typeof l?function(t){var e=1,n=new l(t),r=document.createTextNode("");return n.observe(r,{characterData:!0}),function(){e=-e,r.data=e}}(r):o(r),n.requestFlush=i,n.makeRequestCallFromTimer=o}).call(e,n(8))},17:function(t,e,n){"use strict";function r(t){var e=new o(o._44);return e._83=1,e._18=t,e}var o=n(7);t.exports=o;var i=r(!0),a=r(!1),s=r(null),u=r(void 0),c=r(0),f=r("");o.resolve=function(t){if(t instanceof o)return t;if(null===t)return s;if(void 0===t)return u;if(!0===t)return i;if(!1===t)return a;if(0===t)return c;if(""===t)return f;if("object"===typeof t||"function"===typeof t)try{var e=t.then;if("function"===typeof e)return new o(e.bind(t))}catch(t){return new o(function(e,n){n(t)})}return r(t)},o.all=function(t){var e=Array.prototype.slice.call(t);return new o(function(t,n){function r(a,s){if(s&&("object"===typeof s||"function"===typeof s)){if(s instanceof o&&s.then===o.prototype.then){for(;3===s._83;)s=s._18;return 1===s._83?r(a,s._18):(2===s._83&&n(s._18),void s.then(function(t){r(a,t)},n))}var u=s.then;if("function"===typeof u){return void new o(u.bind(s)).then(function(t){r(a,t)},n)}}e[a]=s,0===--i&&t(e)}if(0===e.length)return t([]);for(var i=e.length,a=0;a<e.length;a++)r(a,e[a])})},o.reject=function(t){return new o(function(e,n){n(t)})},o.race=function(t){return new o(function(e,n){t.forEach(function(t){o.resolve(t).then(e,n)})})},o.prototype.catch=function(t){return this.then(null,t)}},18:function(t,e){!function(t){"use strict";function e(t){if("string"!==typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function n(t){return"string"!==typeof t&&(t=String(t)),t}function r(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return m.iterable&&(e[Symbol.iterator]=function(){return e}),e}function o(t){this.map={},t instanceof o?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function i(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function a(t){return new Promise(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function s(t){var e=new FileReader,n=a(e);return e.readAsArrayBuffer(t),n}function u(t){var e=new FileReader,n=a(e);return e.readAsText(t),n}function c(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}function f(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function l(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"===typeof t)this._bodyText=t;else if(m.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(m.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(m.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(m.arrayBuffer&&m.blob&&v(t))this._bodyArrayBuffer=f(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!m.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!g(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=f(t)}else this._bodyText="";this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):m.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},m.blob&&(this.blob=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(c(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},m.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function d(t){var e=t.toUpperCase();return w.indexOf(e)>-1?e:t}function h(t,e){e=e||{};var n=e.body;if(t instanceof h){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new o(t.headers)),this.method=t.method,this.mode=t.mode,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new o(e.headers)),this.method=d(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function p(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}}),e}function y(t){var e=new o;return t.split(/\r?\n/).forEach(function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();e.append(r,o)}}),e}function _(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new o(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var m={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(m.arrayBuffer)var b=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],v=function(t){return t&&DataView.prototype.isPrototypeOf(t)},g=ArrayBuffer.isView||function(t){return t&&b.indexOf(Object.prototype.toString.call(t))>-1};o.prototype.append=function(t,r){t=e(t),r=n(r);var o=this.map[t];this.map[t]=o?o+","+r:r},o.prototype.delete=function(t){delete this.map[e(t)]},o.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},o.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},o.prototype.set=function(t,r){this.map[e(t)]=n(r)},o.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},o.prototype.keys=function(){var t=[];return this.forEach(function(e,n){t.push(n)}),r(t)},o.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),r(t)},o.prototype.entries=function(){var t=[];return this.forEach(function(e,n){t.push([n,e])}),r(t)},m.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];h.prototype.clone=function(){return new h(this,{body:this._bodyInit})},l.call(h.prototype),l.call(_.prototype),_.prototype.clone=function(){return new _(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},_.error=function(){var t=new _(null,{status:0,statusText:""});return t.type="error",t};var A=[301,302,303,307,308];_.redirect=function(t,e){if(-1===A.indexOf(e))throw new RangeError("Invalid status code");return new _(null,{status:e,headers:{location:t}})},t.Headers=o,t.Request=h,t.Response=_,t.fetch=function(t,e){return new Promise(function(n,r){var o=new h(t,e),i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:y(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var e="response"in i?i.response:i.responseText;n(new _(e,t))},i.onerror=function(){r(new TypeError("Network request failed"))},i.ontimeout=function(){r(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&m.blob&&(i.responseType="blob"),o.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send("undefined"===typeof o._bodyInit?null:o._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!==typeof self?self:this)},20:function(t,e,n){"use strict";n(22)},22:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:B,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=+t||0,o=n?r.toFixed(6):r.toString(),i=o.split("."),a=F(i,2),s=a[0],u=a[1];return u&&(u=u.substr(0,e),r=s+"."+u),n?r:+r}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:B,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:L;if("number"!==typeof(t=+t))return t||"";var r=/-/.test(t),i=+t/n||0,a=o(1*i,e,!0).toString().split("."),s=F(a,2),u=s[0],c=s[1];u=Math.abs(u)+"";var f=u.split(""),l=[];f.reverse().forEach(function(t,e){e%3===0&&0!==e&&(t+=","),l.push(t)});var d=l.reverse().join("");return c&&(d+="."+c),r?"-"+d:d}function a(){return e.FLOAT_LEN=B=4==B?0:4,4==B}function s(t,e){var n=e>=10?o(.1*e,1):e,r=t>=10?o(.1*t,1):t;if(+r>=n)return n;var i=r.toString().split("."),a=F(i,2),s=a[0],u=a[1],c=/\./.test(r);return(s?s[0]:"")+(c?".":"")+(u?u[0]:"")}function u(t){return t.replace(/<script.*?>.*?<\/script>/gi,"")}function c(t){return new RegExp(/(http(s)?:)?\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/).test(t)}function f(t){return"function"===typeof t}function l(t){return f(t)?t:function(){}}function d(){return(Date.now()+""+Math.floor(1e4*Math.random()+1)).split("").reverse().slice(0,9).join("")}function h(t){var e=+(t/10).toFixed(1)||0;return e<0&&(e=0),e+"%"}function p(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1800,n=+t/1e3*2e3+e;return n<0&&(n=0),n}function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1800,n=(t-e)/2;return n<0&&(n=0),n}function _(t){var e=F(t,2),n=e[0],r=e[1];return Math.floor(Math.random()*(r+1))+n}function m(t){return!!t}function b(t,e){return!(!t||!e)&&t.indexOf(e)>-1}function v(t,e){var n=[].concat(t),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}function g(t){return"undefined"!==typeof t&&null!==t&&""!==t}function w(t){return!!t&&"object"===("undefined"===typeof t?"undefined":P(t))&&!Array.isArray(t)}function A(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yuan",n={yuan:1,jiao:10,fen:100,li:1e3};return window.G_F_ToFixed(t/n[e])}function S(t){if(!t)return t;var e=t+"+0000",n=new Date(e);return"Invalid Date"==n&&(n=new Date(e.replace(/-/g,"/"))),n}function E(t){var e=[];return Object.keys(t).forEach(function(n){return e.push({value:n,text:t[n]})}),e}function T(t){return/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(t)}function O(t){return/^1[3|4|5|7|8][0-9]{9}$/.test(t)}function I(){Object.assign(window,{FLOAT_LEN:B,BASIC_UNIT:L,G_F_IsPhoneNumber:O,G_F_IsEmail:T,G_F_ToFixed:o,G_F_UnitFormat:A,G_F_ToggleBasicFloatLen:a,G_F_MoneyFormat:i,G_F_ChangeRetRate:s,G_F_StripScript:u,G_F_IsUrl:c,G_F_IsFunc:f,G_F_CallFunc:l,G_F_GenerteID:d,G_F_GetDisplayRate:h,G_F_GetDisplayRateNumber:p,G_F_RateNumberToRate:y,G_F_Random:_,G_F_BoolFilter:m,G_F_InArr:b,G_F_RemoveArrayItem:v,G_F_HasValue:g,G_F_IsObj:w,G_F_DateParseHook:S,G_F_WrapMapperToTextValue:E,G_F_GetDefaultDateInfo:M.getDefaultDateInfo,G_F_NumTransformToCN:D.default,G_F_TimeFormat:M.timeFormat,G_F_DateFormat:M.dateFormat,G_C_Debounce:U,G_O_EventEmitter:new j})}Object.defineProperty(e,"__esModule",{value:!0}),e.EventEmitter=e.DebounceClass=e.BASIC_UNIT=e.FLOAT_LEN=void 0;var R=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),P="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.toFixed=o,e.moneyFormat=i,e.toggleBasicFloatLen=a,e.changeRetRate=s,e.stripScript=u,e.isUrl=c,e.isFunc=f,e.callFunc=l,e.generteID=d,e.getDisplayRate=h,e.getDisplayRateNumber=p,e.rateNumberToRate=y,e.random=_,e.boolFilter=m,e.inArr=b,e.removeArrayItem=v,e.hasValue=g,e.isObj=w,e.unitFormat=A,e.dateParseHook=S,e.wrapMapperToTextValue=E,e.setAsGlobalFunc=I;var G=n(23),D=function(t){return t&&t.__esModule?t:{default:t}}(G),M=n(24),B=e.FLOAT_LEN=window.FLOAT_LEN||4,L=e.BASIC_UNIT=window.BASIC_UNIT||1e4,U=e.DebounceClass=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;r(this,t),window.G_F_IsFunc(e)&&(this.callback=e,this.delay=n)}return R(t,[{key:"exec",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=this.timer;f(t)&&(this.callback=t,this.delay=e),clearTimeout(n),this._exec()}},{key:"_exec",value:function(){var t=this.callback,e=this.delay;this.timer=setTimeout(t,e)}}]),t}(),j=e.EventEmitter=function(){function t(){r(this,t),this.subscriptList={}}return R(t,[{key:"checkFuncIsExist",value:function(t,e){return this.subscriptList[t].indexOf(e)}},{key:"subscript",value:function(t,e){this.subscriptList[t]||(this.subscriptList[t]=[]),this.subscriptList[t].push(e)}},{key:"deSubscript",value:function(t,e){this.subscriptList[t]&&-1!=this.checkFuncIsExist(t,e)&&(this.subscriptList[t]=v(this.subscriptList[t],e))}},{key:"emit",value:function(t,e){for(var n=this.subscriptList[t]||[],r=0;r<n.length;r++)l(n[r])(e)}}]),t}();String.prototype.Mosaics=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,e=this;t=e.length-t;var n="";return e.split("").map(function(e,r){n+=r<t?"*":e}).join(""),n},Array.prototype.deduplication=function(){for(var t=this,e={},n=0;n<t.length;n++){var r=t[n];e.hasOwnProperty(r)||(e[r]=null)}return Object.keys(e)},window.localStorage&&(window.Storage.getItem=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t+"_TIMER",o=+localStorage.getItem(r),i=Date.now(),a=null;return n&&r&&(i-o)/1e3>n?localStorage.removeItem(t):a=localStorage.getItem(t),l(e)(null,a),a},window.Storage.setItem=function(t,e){var n=t+"_TIMER",r="string"===typeof e?e:JSON.stringify(e);localStorage.setItem(t,r),localStorage.setItem(n,Date.now().toString())},window.Storage.removeItem=function(t){localStorage.removeItem(t)}),I()},23:function(t,e,n){"use strict";function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,n="\u4e0d\u7b26\u5408\u89c4\u5219";if(/\d/.test(t)){var r=e.split(""),s="\u5143\u5341\u767e\u5343\u4e07___\u4ebf____".split(""),u=s.length,c=t.toString().split("."),f=i(c,2),l=f[0],d=f[1],h=l.toString().split(""),p=(d&&d.toString().split(""),h.length,4),y=[],_="";h.reverse().forEach(function(t,e){if("0"!==t){var n=r[t],o=s[e]||"",i="",a=n+o;e>p&&(o=s[p],i=s[e%p]||"",a=n+i+o,e===u-p-1&&(p+=p)),y.push(a)}}),_=y.reverse().join("").replace(" ",""),n=o(_,"\u4e07")}return n}function o(t,e){var n=t.split(e),r=n[n.length-2];return n[n.length-2]=r+e,n.join("")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.default=r,e.removeRepeatItem=o;var a="\u96f6\u58f9\u8cb3\u53c1\u8086\u4f0d\u9678\u67d2\u634c\u7396"},24:function(t,e,n){"use strict";function r(t){function e(t){return t<10&&(t="0"+t),t.toString()}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD",r=!/Y+M+D+/.test(n),o=new Date(t);if(!o||"Invalid Date"==o)return t;var i=(new Date,o.getFullYear(t).toString()),a=e(o.getMonth(t)+1),s=e(o.getDate(t)),u=e(o.getHours(t)),c=e(o.getMinutes(t)),f=e(o.getSeconds(t)),l={YYYY:i,MM:a,DD:s,hh:u,mm:c,ss:f},d=[];return Object.keys(l).forEach(function(t,e){n.replace(t,function(e,o){var i=r?n.charAt(o-1):"";d.push(i+l[t].toString())})}),d.join("")}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t<0&&(t=0);var e=t%60,n=Math.floor(t/60),r=Math.floor(n/60);return n-=60*r,{hour:i(r),min:i(n),sec:i(e)}}function i(t){var e=t;return t<10&&(e="0"+t),e}function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"YYYY-MM-DD",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[" 00:00:00"," 23:59:59"],i=Date.parse(new Date),a=i-24*t*60*60*1e3,c=i+24*e*60*60*1e3;return[r(a,n)+(o[0]||""),r(c,n)+(o[1]||"")]}Object.defineProperty(e,"__esModule",{value:!0}),e.dateFormat=r,e.timeFormat=o,e.getDefaultDateInfo=a;var s=10,u=0},25:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o,i=(o={backBtn:"038",closeBtn:"071",minBtn:"072",maxBtn:"073",reductionBtn:"074",menuOn:"045",menuOff:"045",star:"012",starLight:"011",file:"023",date:"023",home:"081",check:"101",logout:"070",lock:"038",mail:"114",mailbox:"015",tour:"045",phone:"106"},r(o,"lock","075"),r(o,"security","033"),r(o,"pin","066"),r(o,"money","003"),r(o,"download","004"),r(o,"face","035"),r(o,"flight","020"),r(o,"setting","021"),r(o,"eyeOn","028"),r(o,"eyeOff","027"),r(o,"soundOn","037"),r(o,"soundOff","036"),r(o,"fire","039"),r(o,"newAdd","040"),r(o,"day","088"),r(o,"night","089"),r(o,"plus","041"),r(o,"allLot","048"),r(o,"more","107"),r(o,"award","083"),r(o,"hangup","083"),r(o,"warn","010"),r(o,"error","112"),r(o,"circleCheck","046"),r(o,"loginPwd","013"),r(o,"secQuestion","016"),r(o,"write","112"),r(o,"fundPwd","014"),r(o,"greeting","027"),r(o,"online","024"),r(o,"uper","023"),r(o,"AGGame","118"),r(o,"game","001"),r(o,"account","002"),r(o,"helpers","007"),r(o,"activity","006"),r(o,"recharge","003"),r(o,"gifts","006"),r(o,"systemMsg","005"),r(o,"report","004"),r(o,"userManager","004"),r(o,"userCenter","004"),r(o,"createUser","108"),r(o,"daili","019"),r(o,"wanjia","020"),r(o,"customer","009"),r(o,"gateSelector","008"),r(o,"android","029"),r(o,"iOS","030"),r(o,"windows","031"),r(o,"iMac","032"),r(o,"spec","103"),r(o,"normal","090"),r(o,"pokerGames","122"),r(o,"slotGames","124"),r(o,"tableGames","120"),r(o,"allGames","119"),r(o,"agIcon","118"),r(o,"orderDirectBtn","068"),r(o,"pickOrder","041"),r(o,"sureOrderBtn","068"),r(o,"apBtn","083"),o);Object.keys(i).forEach(function(t){var e=i[t];i[t]="fa fa-"+e}),e.a=i},398:function(t,e,n){n(14),t.exports=n(40)},40:function(t,e,n){"use strict";function r(){var t=function(){var t=window,e=t.ORIGINAL_GATE_URL,n=void 0===e?[]:e;return n[window.G_F_Random([0,n.length-1])]}();return window.G_F_IsUrl(t)||(t=r()),t}function o(t){var e=t||window.localStorage.getItem("FASTEST_GATE")||r();window.GATE_URL=e+"/x",window.POLL_URL=e+"/poll",window.G_F_CallFunc(window.SetReqUrl)(window.GATE_URL)}function i(){function t(t){var e=t.fastestIdx;o(t.gun[e].originUrl)}G_F_Velocimetry(t).end=t}Object.defineProperty(e,"__esModule",{value:!0});var a=n(20),s=(n.n(a),n(41)),u=n(42),c=n(43),f=n(25);!function(){o(),setTimeout(function(){i()},100)}();var l={wait:"\u672a\u5f00\u5956",none:"\u672a\u4e2d\u5956",win:"\u5df2\u4e2d\u5956"},d={"":"\u65f6\u95f4",profit:"\u76c8\u4e8f"},h={yuan:"\u5143",jiao:"\u89d2",fen:"\u5206",li:"\u5398"},p={direct_subclass:"\u76f4\u5c5e\u4e0b\u7ea7",all_subclass:"\u6240\u6709\u4e0b\u7ea7",self:"\u81ea\u5df1"},y={PROCESSING:"\u5904\u7406\u4e2d",APPLY:"\u7533\u8bf7\u4e2d",SUCCESS:"\u6210\u529f",LOCK:"\u5904\u7406\u4e2d",FAIL:"\u5931\u8d25"},_={SALARY:"\u65e5\u5de5\u8d44",COMMISSION:"\u4f63\u91d1",BONUS:"\u5206\u7ea2"},m=Object.assign({},l,h,_,y,p),b={transfer_to_subclass_balance:"\u4ee3\u5145",transfer_to_subclass_bonus:"\u5206\u7ea2",transfer_to_subclass_salary:"\u5de5\u8d44\u8f6c\u8d26"},v={USER2USER_CASH:1,USER2USER_CREDIT:2,USER2USER_SALARY:3,CLAIM2USER_NORMAL:4,CLAIM2USER_DEPOSIT:5,CLAIM2USER_SALARY:6,DEBIT4USER_FBAL:7,DEBIT4USER_ABAL:8,DEBIT4USER_SALARY:9,DEBIT4USER_CREDIT:10,DEBIT4USER_SCORE:11,DEBIT4USER_COUPON:12},g={lg:1e3,normal:900,sm:500,mini:350},w={lockScreenTimer:30,faceId:0,gameLayoutMode:"normal",themeMode:"day",showHotCowndown:!0,desktopConfig:["CQSSC","KRSSC90S","PTSSC20S","PTSSC60S","BJPK10","DJSSC90S","PTK320S"],customerLotLikeList:["CQSSC","PTSSC60S","BJPK10"],themeActiveIdx:2,isPrevThemeMode:!0},A=window.location.host,S={UsePaging:1,AllCount:-1,PageIndex:0,PageSize:10};Object.assign(window,{BASE_MUL:1,SECTION_SIZES:g,DEFAULT_PAGIN_INFO:S,CONFIG_LV:60,ICON_MAPPER:f.a,LOT_OPEN_REF_PREF:"LOT_OPEN_",LOT_AWARD_REF_PREF:"LOT_AWARD_",TEAM_ORDER_REF_PREF:"TEAM_ORDER_",SYS_DEF_SETTING:w,CS_CHAT_ID:"CS_CHAT_ID",POLL_FREQ:2,HOST:A,AUTO_LOGIN_TOKEN_TIMEOUT:86400,CHANGE_LAYOUTABLE:!0,UNIT_MAPPER:h,RANGE_MAPPER:p,SORTING_MAPPER:d,ORDER_STATUS_MAPPER:l,TX_STATUS_MAPPER:y,TRANS_TYPE:v,TRANSFORM_TYPES_MAPPER:b,KEY_MAPPERS:Object.assign({},window.KEY_MAPPERS,m,u.a),ManagersConfig:s.a,GetDesktopConfig:c.a,SetGateUrl:o})},41:function(t,e,n){"use strict";n.d(e,"a",function(){return b});var r=n(25),o=[{code:"GRXX"},{code:"BANK"},{code:"AQZX"},{title:"\u6d3b\u52a8\u5217\u8868",code:"ActivityThumb"},{code:"AwardTable"},{title:"\u7559\u8a00\u53cd\u9988",code:"Mailbox"},{code:"ZNX"}],i=[{code:"CJXJ"},{code:"YHCX"},{code:"TGZC"}],a=[{code:"RECHARGE"},{code:"WITHDRAWAL"},{code:"Wallet"},{code:"YXZZJL"},{code:"CZJL"},{code:"TXJL"}],s=[{code:"GRBB"},{code:"ZHMX"},{code:"QTYX"},{code:"YXJL"},{code:"ZHJL"},{code:"HDJL"}],u=[{code:"TDBB"},{code:"TDJS"},{code:"DLSY"},{code:"XJMX"},{code:"TDCZ"},{code:"TDTK"},{code:"TDTZ"},{code:"TDZH"}],c={title:"AG\u6e38\u620f",sectionId:"AGGame",type:"POP_MANAGER",props:{hideMenu:!0},component:"AGGame"},f={title:"\u6d3b\u52a8",sectionId:"ActivityThumb",type:"POP_MANAGER",component:"ActivityThumb"},l={title:"\u8d26\u6237\u4e2d\u5fc3",sectionId:"AccountDetailManager",type:"POP_MANAGER",component:"ManagerIndex",routers:o},d={title:"\u5f00\u6237\u4e2d\u5fc3",sectionId:"CreateUserManager",type:"POP_MANAGER",component:"ManagerIndex",routers:i},h={title:"\u4e2a\u4eba\u62a5\u8868",sectionId:"AccountManager",type:"POP_MANAGER",component:"ManagerIndex",routers:s},p={title:"\u5145\u503c\u63d0\u73b0",sectionId:"RechargeManager",type:"POP_MANAGER",component:"ManagerIndex",routers:a},y={title:"\u56e2\u961f\u62a5\u8868",sectionId:"SubClassesManager",type:"POP_MANAGER",component:"ManagerIndex",routers:u},_={title:"\u7cfb\u7edf\u516c\u544a",sectionId:"XTGG",type:"TOP_LV_MODAL",size:"MINI",width:"1000px",component:"XTGG"},m={title:"\u7ebf\u8def\u5207\u6362",sectionId:"GateSelector",type:"TOP_LV_MODAL",component:"GateSelector"},b={AGGame:c,recharge:p,account:l,createUser:d,report:h,userManager:y,activity:f,systemMsg:_,gateSelector:m};!function(){Object.keys(b).forEach(function(t){b[t].icon=r.a[t]})}()},42:function(t,e,n){"use strict";var r={action:"\u64cd\u4f5c",username:"\u7528\u6237\u540d",oldPassword:"\u65e7\u8d44\u91d1\u5bc6\u7801",newPassword:"\u65b0\u767b\u5f55\u5bc6\u7801",changeType:"\u8d26\u53d8\u7c7b\u578b",citySelector:"\u5f00\u6237\u94f6\u884c\u57ce\u5e02",newSecPassword:"\u65b0\u8d44\u91d1\u5bc6\u7801",displayBal:"\u73b0\u91d1\u4f59\u989d",UserBankCardId:"\u9009\u62e9\u94f6\u884c",_subtypes:"\u8d26\u53d8\u7c7b\u578b",BALANCE:"\u73b0\u91d1",BONUS:"\u5206\u7ea2",TeamMemberNumber:"\u56e2\u961f\u603b\u4eba\u6570",ParentNames:"\u4ee3\u7406\u5c42\u7ea7",AGTDBB:"AG\u56e2\u961f\u62a5\u8868",AGGRBB:"AG\u4e2a\u4eba\u62a5\u8868",orderDirectBtn:"\u76f4\u63a5\u6295\u6ce8",pickOrder:"\u9009\u53f7",randomBtn:"\u968f\u673a\u4e00\u6ce8",showhand:"\u4e00\u952e\u68ad\u54c8",clearBtn:"\u6e05\u7a7a\u9009\u53f7\u533a",sureOrderBtn:"\u786e\u8ba4\u6295\u6ce8",apBtn:"\u8ffd\u53f7"};e.a=r},43:function(t,e,n){"use strict";function r(t){return o(t.playGame)}function o(){var t=(!(arguments.length>0&&void 0!==arguments[0])||arguments[0],{});return["CQSSC","PTSSC20S"].forEach(function(e,n){return t[n]=e}),t}e.a=r},7:function(t,e,n){"use strict";function r(){}function o(t){try{return t.then}catch(t){return m=t,b}}function i(t,e){try{return t(e)}catch(t){return m=t,b}}function a(t,e,n){try{t(e,n)}catch(t){return m=t,b}}function s(t){if("object"!==typeof this)throw new TypeError("Promises must be constructed via new");if("function"!==typeof t)throw new TypeError("Promise constructor's argument is not a function");this._75=0,this._83=0,this._18=null,this._38=null,t!==r&&y(t,this)}function u(t,e,n){return new t.constructor(function(o,i){var a=new s(r);a.then(o,i),c(t,new p(e,n,a))})}function c(t,e){for(;3===t._83;)t=t._18;if(s._47&&s._47(t),0===t._83)return 0===t._75?(t._75=1,void(t._38=e)):1===t._75?(t._75=2,void(t._38=[t._38,e])):void t._38.push(e);f(t,e)}function f(t,e){_(function(){var n=1===t._83?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._83?l(e.promise,t._18):d(e.promise,t._18));var r=i(n,t._18);r===b?d(e.promise,m):l(e.promise,r)})}function l(t,e){if(e===t)return d(t,new TypeError("A promise cannot be resolved with itself."));if(e&&("object"===typeof e||"function"===typeof e)){var n=o(e);if(n===b)return d(t,m);if(n===t.then&&e instanceof s)return t._83=3,t._18=e,void h(t);if("function"===typeof n)return void y(n.bind(e),t)}t._83=1,t._18=e,h(t)}function d(t,e){t._83=2,t._18=e,s._71&&s._71(t,e),h(t)}function h(t){if(1===t._75&&(c(t,t._38),t._38=null),2===t._75){for(var e=0;e<t._38.length;e++)c(t,t._38[e]);t._38=null}}function p(t,e,n){this.onFulfilled="function"===typeof t?t:null,this.onRejected="function"===typeof e?e:null,this.promise=n}function y(t,e){var n=!1,r=a(t,function(t){n||(n=!0,l(e,t))},function(t){n||(n=!0,d(e,t))});n||r!==b||(n=!0,d(e,m))}var _=n(16),m=null,b={};t.exports=s,s._47=null,s._71=null,s._44=r,s.prototype.then=function(t,e){if(this.constructor!==s)return u(this,t,e);var n=new s(r);return c(this,new p(t,e,n)),n}},8:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"===typeof window&&(n=window)}t.exports=n}});
