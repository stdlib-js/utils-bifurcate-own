// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object-like@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@v0.2.0-esm/index.mjs";var o=["values","keys","*"];function l(l,h,u){var d,p,m;if(!r(l))throw new TypeError(t("1Rx3L",l));if(d={returns:"values"},2===arguments.length)m=h;else{if(p=function(r,s){return e(s)?(n(s,"thisArg")&&(r.thisArg=s.thisArg),n(s,"returns")&&(r.returns=s.returns,-1===i(o,r.returns))?new TypeError(t("1Rx4S","returns",o.join('", "'),r.returns)):null):new TypeError(t("1Rx2V",s))}(d,h),p)throw p;m=u}if(!s(m))throw new TypeError(t("1Rx3q",m));return"values"===d.returns?function(r,s,t){var e,i,o,l,h;for(o in e=s.thisArg,i=[[],[]],l=!0,r)n(r,o)&&(l=!1,h=r[o],t.call(e,h,o)?i[0].push(h):i[1].push(h));return l&&(i.length=0),i}(l,d,m):"keys"===d.returns?function(r,s,t){var e,i,o,l;for(o in e=s.thisArg,i=[[],[]],l=!0,r)n(r,o)&&(l=!1,t.call(e,r[o],o)?i[0].push(o):i[1].push(o));return l&&(i.length=0),i}(l,d,m):function(r,s,t){var e,i,o,l,h;for(o in e=s.thisArg,i=[[],[]],l=!0,r)n(r,o)&&(l=!1,h=r[o],t.call(e,h,o)?i[0].push([o,h]):i[1].push([o,h]));return l&&(i.length=0),i}(l,d,m)}export{l as default};
//# sourceMappingURL=index.mjs.map
