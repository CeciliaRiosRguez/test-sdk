(self.webpackChunk_idscan_idvc2=self.webpackChunk_idscan_idvc2||[]).push([[373],{4550:(e,n,t)=>{function r(e,n,t,r,o,i,c){try{var u=e[i](c),a=u.value}catch(e){return void t(e)}u.done?n(a):Promise.resolve(a).then(r,o)}function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,{o:()=>u});var i="application/javascript",c=function(e){var n=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({skipSameOrigin:!0,useBlob:!0},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{});return!e.includes("://")||e.includes(window.location.origin)?Promise.resolve(e):new Promise((function(t,r){return fetch(e).then((function(e){return e.text()})).then((function(r){var o=new URL(e).href.split("/");o.pop();var c="const _importScripts = importScripts;\nconst _fixImports = (url) => new URL(url, '".concat("".concat(o.join("/"),"/"),"').href;\nimportScripts = (...urls) => _importScripts(...urls.map(_fixImports));"),u="data:".concat(i,",").concat(encodeURIComponent(c+r));n.useBlob&&(u=URL.createObjectURL(new Blob(['importScripts("'.concat(u,'")')],{type:i}))),t(u)})).catch(r)}))},u=function(){var e=function(e){return function(){var n=this,t=arguments;return new Promise((function(o,i){var c=e.apply(n,t);function u(e){r(c,o,i,u,a,"next",e)}function a(e){r(c,o,i,u,a,"throw",e)}u(void 0)}))}}((function(e){var n;return function(e,n){var t,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(t)throw TypeError("Generator is already executing.");for(;c;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(e,c)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,(function(t){switch(t.label){case 0:return[4,c(e)];case 1:return n=t.sent(),[2,new Worker(n)]}}))}));return function(n){return e.apply(this,arguments)}}()},4942:(e,n,t)=>{t.r(n),t.d(n,{default:()=>l});var r=t(1026);function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){"use strict";function e(n){(function(e,n){if(!(e instanceof n))throw TypeError("Cannot call a class as a function")})(this,e),function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(this,"worker",void 0),this.worker=n}return function(e,n,t){n&&o(e.prototype,n)}(e,[{key:"process",value:function(e){var n=this;return new Promise((function(t){n.worker.postMessage(e),n.worker.onmessage=function(e){t(e.data.segments)}}))}}]),e}(),c=t(4550),u=t(4328);function a(e,n,t,r,o,i,c){try{var u=e[i](c),a=u.value}catch(e){return void t(e)}u.done?n(a):Promise.resolve(a).then(r,o)}let l=function(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function c(e){a(i,r,o,c,u,"next",e)}function u(e){a(i,r,o,c,u,"throw",e)}c(void 0)}))}}((function(){var e,n;return function(e,n){var t,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(t)throw TypeError("Generator is already executing.");for(;c;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(e,c)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,(function(t){switch(t.label){case 0:return[4,(0,c.o)("".concat(u.Z.chunkPublicPath,"bubbleWorker.js"))];case 1:return e=t.sent(),n=new i(e),r.Z.setModule("module","bubble",n),[2]}}))}))}}]);