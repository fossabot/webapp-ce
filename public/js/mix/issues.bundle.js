webpackJsonp([8],{11:function(t,e,n){t.exports=n("GDr9")},"21It":function(t,e,n){"use strict";var r=n("FtD3");t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},"5VQ+":function(t,e,n){"use strict";var r=n("cGG2");t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},"7GwW":function(t,e,n){"use strict";var r=n("cGG2"),o=n("21It"),s=n("DQCr"),i=n("oJlt"),a=n("GHBc"),u=n("FtD3"),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n("thJu");t.exports=function(t){return new Promise(function(e,f){var l=t.data,d=t.headers;r.isFormData(l)&&delete d["Content-Type"];var p=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||a(t.url)||(p=new window.XDomainRequest,h="onload",m=!0,p.onprogress=function(){},p.ontimeout=function(){}),t.auth){var v=t.auth.username||"",y=t.auth.password||"";d.Authorization="Basic "+c(v+":"+y)}if(p.open(t.method.toUpperCase(),s(t.url,t.params,t.paramsSerializer),!0),p.timeout=t.timeout,p[h]=function(){if(p&&(4===p.readyState||m)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?i(p.getAllResponseHeaders()):null,r={data:t.responseType&&"text"!==t.responseType?p.response:p.responseText,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:t,request:p};o(e,f,r),p=null}},p.onerror=function(){f(u("Network Error",t,null,p)),p=null},p.ontimeout=function(){f(u("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var w=n("p1b6"),g=(t.withCredentials||a(t.url))&&t.xsrfCookieName?w.read(t.xsrfCookieName):void 0;g&&(d[t.xsrfHeaderName]=g)}if("setRequestHeader"in p&&r.forEach(d,function(t,e){void 0===l&&"content-type"===e.toLowerCase()?delete d[e]:p.setRequestHeader(e,t)}),t.withCredentials&&(p.withCredentials=!0),t.responseType)try{p.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&p.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){p&&(p.abort(),f(t),p=null)}),void 0===l&&(l=null),p.send(l)})}},"84Y4":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn btn-outline-warning",on:{click:function(e){e.preventDefault(),t.closeItem(e)}}},[t._v("Close Issue")])},staticRenderFns:[]}},"9OR6":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["modelName"],mounted:function(){console.log("MarkdownEd!")},created:function(){}}},DQCr:function(t,e,n){"use strict";var r=n("cGG2");function o(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var s;if(n)s=n(e);else if(r.isURLSearchParams(e))s=e.toString();else{var i=[];r.forEach(e,function(t,e){null!==t&&void 0!==t&&(r.isArray(t)&&(e+="[]"),r.isArray(t)||(t=[t]),r.forEach(t,function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),i.push(o(e)+"="+o(t))}))}),s=i.join("&")}return s&&(t+=(-1===t.indexOf("?")?"?":"&")+s),t}},FtD3:function(t,e,n){"use strict";var r=n("t8qj");t.exports=function(t,e,n,o,s){var i=new Error(t);return r(i,e,n,o,s)}},GDr9:function(t,e,n){window.Vue=n("I3G/"),Vue.component("close-button",n("lR9s")),Vue.component("reopen-button",n("UcoP")),Vue.component("markdown-ed",n("kNlL"));new Vue({el:"#app",data:function(){return{loading:!1}},created:function(){this.$on("pageLoader",function(t){this.loading=t})}})},GHBc:function(t,e,n){"use strict";var r=n("cGG2");t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){var n=r.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},"JP+z":function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},KCLY:function(t,e,n){"use strict";(function(e){var r=n("cGG2"),o=n("5VQ+"),s={"Content-Type":"application/x-www-form-urlencoded"};function i(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var a,u={adapter:("undefined"!=typeof XMLHttpRequest?a=n("7GwW"):void 0!==e&&(a=n("7GwW")),a),transformRequest:[function(t,e){return o(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(i(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(i(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(t){u.headers[t]={}}),r.forEach(["post","put","patch"],function(t){u.headers[t]=r.merge(s)}),t.exports=u}).call(e,n("W2nU"))},Nucq:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"card markdown-ed"},[this._m(0),this._v(" "),e("div",{staticClass:"card-body px-0 py-0"},[e("textarea",{staticClass:"form-control",staticStyle:{border:"none","border-radius":"0"},attrs:{id:this.modelName,name:this.modelName,rows:"6",placeholder:"Content.."}})])]),this._v(" "),this._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header bg-light d-flex"},[e("div",[e("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"}},[e("i",{staticClass:"far fa-h1"})]),this._v(" "),e("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"}},[e("i",{staticClass:"far fa-h2"})]),this._v(" "),e("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"}},[e("i",{staticClass:"far fa-link"})]),this._v(" "),e("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"}},[e("i",{staticClass:"far fa-image"})])]),this._v(" "),e("div",{staticClass:"ml-auto"},[e("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"}},[this._v("Preview "),e("i",{staticClass:"far fa-eye"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("small",[this._v("MarkdownEd! "),e("span",{staticClass:"badge badge-danger"},[this._v("beta")])])}]}},Re3r:function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}t.exports=function(t){return null!=t&&(n(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}(t)||!!t._isBuffer)}},TNV1:function(t,e,n){"use strict";var r=n("cGG2");t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},"Tf+0":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("mtWM"),o=n.n(r);e.default={mounted:function(){console.log("Component Reopen mounted.")},props:["issueId","redirect"],data:function(){return{done:!1,groups:{data:[]},errors:[]}},methods:{closeItem:function(){var t=this;console.log(this.url),o.a.put("/issues/reopen",{id:this.issueId}).then(function(e){window.location.href=t.redirect}).catch(function(e){t.errors.push(e)})}}}},UcoP:function(t,e,n){var r=n("VU/8")(n("Tf+0"),n("lJDs"),!1,null,null,null);t.exports=r.exports},"VU/8":function(t,e){t.exports=function(t,e,n,r,o,s){var i,a=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(i=t,a=t.default);var c,f="function"==typeof a?a.options:a;if(e&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0),n&&(f.functional=!0),o&&(f._scopeId=o),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},f._ssrRegister=c):r&&(c=r),c){var l=f.functional,d=l?f.render:f.beforeCreate;l?(f._injectStyles=c,f.render=function(t,e){return c.call(e),d(t,e)}):f.beforeCreate=d?[].concat(d,c):[c]}return{esModule:i,exports:a,options:f}}},XmWM:function(t,e,n){"use strict";var r=n("KCLY"),o=n("cGG2"),s=n("fuGk"),i=n("xLtR");function a(t){this.defaults=t,this.interceptors={request:new s,response:new s}}a.prototype.request=function(t){"string"==typeof t&&(t=o.merge({url:arguments[0]},arguments[1])),(t=o.merge(r,this.defaults,{method:"get"},t)).method=t.method.toLowerCase();var e=[i,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},o.forEach(["delete","get","head","options"],function(t){a.prototype[t]=function(e,n){return this.request(o.merge(n||{},{method:t,url:e}))}}),o.forEach(["post","put","patch"],function(t){a.prototype[t]=function(e,n,r){return this.request(o.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=a},YwBS:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("mtWM"),o=n.n(r);e.default={mounted:function(){console.log("Component GroupsTable mounted.")},props:["issueId","redirect"],data:function(){return{done:!1,groups:{data:[]},errors:[]}},methods:{closeItem:function(){var t=this;console.log(this.url),o.a.put("/issues/close",{id:this.issueId}).then(function(e){window.location.href=t.redirect}).catch(function(e){t.errors.push(e)})}}}},cGG2:function(t,e,n){"use strict";var r=n("JP+z"),o=n("Re3r"),s=Object.prototype.toString;function i(t){return"[object Array]"===s.call(t)}function a(t){return null!==t&&"object"==typeof t}function u(t){return"[object Function]"===s.call(t)}function c(t,e){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),i(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}t.exports={isArray:i,isArrayBuffer:function(t){return"[object ArrayBuffer]"===s.call(t)},isBuffer:o,isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:a,isUndefined:function(t){return void 0===t},isDate:function(t){return"[object Date]"===s.call(t)},isFile:function(t){return"[object File]"===s.call(t)},isBlob:function(t){return"[object Blob]"===s.call(t)},isFunction:u,isStream:function(t){return a(t)&&u(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function t(){var e={};function n(n,r){"object"==typeof e[r]&&"object"==typeof n?e[r]=t(e[r],n):e[r]=n}for(var r=0,o=arguments.length;r<o;r++)c(arguments[r],n);return e},extend:function(t,e,n){return c(e,function(e,o){t[o]=n&&"function"==typeof e?r(e,n):e}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},cWxy:function(t,e,n){"use strict";var r=n("dVOP");function o(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new r(t),e(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o(function(e){t=e}),cancel:t}},t.exports=o},dIwP:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},dVOP:function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},fuGk:function(t,e,n){"use strict";var r=n("cGG2");function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=o},kNlL:function(t,e,n){var r=n("VU/8")(n("9OR6"),n("Nucq"),!1,null,null,null);t.exports=r.exports},lJDs:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn btn-outline-success",on:{click:function(e){e.preventDefault(),t.closeItem(e)}}},[t._v("Reopen Issue")])},staticRenderFns:[]}},lR9s:function(t,e,n){var r=n("VU/8")(n("YwBS"),n("84Y4"),!1,null,null,null);t.exports=r.exports},mtWM:function(t,e,n){t.exports=n("tIFN")},oJlt:function(t,e,n){"use strict";var r=n("cGG2"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,s,i={};return t?(r.forEach(t.split("\n"),function(t){if(s=t.indexOf(":"),e=r.trim(t.substr(0,s)).toLowerCase(),n=r.trim(t.substr(s+1)),e){if(i[e]&&o.indexOf(e)>=0)return;i[e]="set-cookie"===e?(i[e]?i[e]:[]).concat([n]):i[e]?i[e]+", "+n:n}}),i):i}},p1b6:function(t,e,n){"use strict";var r=n("cGG2");t.exports=r.isStandardBrowserEnv()?{write:function(t,e,n,o,s,i){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},pBtG:function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},pxG4:function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},qRfI:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},t8qj:function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t}},tIFN:function(t,e,n){"use strict";var r=n("cGG2"),o=n("JP+z"),s=n("XmWM"),i=n("KCLY");function a(t){var e=new s(t),n=o(s.prototype.request,e);return r.extend(n,s.prototype,e),r.extend(n,e),n}var u=a(i);u.Axios=s,u.create=function(t){return a(r.merge(i,t))},u.Cancel=n("dVOP"),u.CancelToken=n("cWxy"),u.isCancel=n("pBtG"),u.all=function(t){return Promise.all(t)},u.spread=n("pxG4"),t.exports=u,t.exports.default=u},thJu:function(t,e,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(){this.message="String contains an invalid character"}o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",t.exports=function(t){for(var e,n,s=String(t),i="",a=0,u=r;s.charAt(0|a)||(u="=",a%1);i+=u.charAt(63&e>>8-a%1*8)){if((n=s.charCodeAt(a+=.75))>255)throw new o;e=e<<8|n}return i}},xLtR:function(t,e,n){"use strict";var r=n("cGG2"),o=n("TNV1"),s=n("pBtG"),i=n("KCLY"),a=n("dIwP"),u=n("qRfI");function c(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return c(t),t.baseURL&&!a(t.url)&&(t.url=u(t.baseURL,t.url)),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||i.adapter)(t).then(function(e){return c(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return s(e)||(c(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}}},[11]);
//# sourceMappingURL=issues.bundle.js.map