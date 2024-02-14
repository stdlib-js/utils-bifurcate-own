// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object-like@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@v0.1.0-esm/index.mjs";var o=["values","keys","*"];function u(t,r){return e(r)?(n(r,"thisArg")&&(t.thisArg=r.thisArg),n(r,"returns")&&(t.returns=r.returns,-1===i(o,t.returns))?new TypeError(s('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",o.join('", "'),t.returns)):null):new TypeError(s("invalid argument. Options argument must be an object. Value: `%s`.",r))}function l(t,r,s){var e,i,o,u,l;for(o in e=r.thisArg,i=[[],[]],u=!0,t)n(t,o)&&(u=!1,l=t[o],s.call(e,l,o)?i[0].push(l):i[1].push(l));return u&&(i.length=0),i}function a(t,r,s){var e,i,o,u;for(o in e=r.thisArg,i=[[],[]],u=!0,t)n(t,o)&&(u=!1,s.call(e,t[o],o)?i[0].push(o):i[1].push(o));return u&&(i.length=0),i}function m(t,r,s){var e,i,o,u,l;for(o in e=r.thisArg,i=[[],[]],u=!0,t)n(t,o)&&(u=!1,l=t[o],s.call(e,l,o)?i[0].push([o,l]):i[1].push([o,l]));return u&&(i.length=0),i}function h(e,n,i){var o,h,d;if(!t(e))throw new TypeError(s("invalid argument. First argument must be an object. Value: `%s`.",e));if(o={returns:"values"},2===arguments.length)d=n;else{if(h=u(o,n))throw h;d=i}if(!r(d))throw new TypeError(s("invalid argument. Last argument must be a function. Value: `%s`.",d));return"values"===o.returns?l(e,o,d):"keys"===o.returns?a(e,o,d):m(e,o,d)}export{h as default};
//# sourceMappingURL=index.mjs.map
