// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object-like@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@esm/index.mjs";var o=e,u=n,a=i,l=s,m=["values","keys","*"];var h=n;var d=n;var p=n;var f=r,g=t,j=s,v=function(r,t){return o(t)?(u(t,"thisArg")&&(r.thisArg=t.thisArg),u(t,"returns")&&(r.returns=t.returns,-1===a(m,r.returns))?new TypeError(l('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",m.join('", "'),r.returns)):null):new TypeError(l("invalid argument. Options argument must be an object. Value: `%s`.",t))},c=function(r,t,s){var e,n,i,o,u;for(i in e=t.thisArg,n=[[],[]],o=!0,r)h(r,i)&&(o=!1,u=r[i],s.call(e,u,i)?n[0].push(u):n[1].push(u));return o&&(n.length=0),n},b=function(r,t,s){var e,n,i,o;for(i in e=t.thisArg,n=[[],[]],o=!0,r)d(r,i)&&(o=!1,s.call(e,r[i],i)?n[0].push(i):n[1].push(i));return o&&(n.length=0),n},w=function(r,t,s){var e,n,i,o,u;for(i in e=t.thisArg,n=[[],[]],o=!0,r)p(r,i)&&(o=!1,u=r[i],s.call(e,u,i)?n[0].push([i,u]):n[1].push([i,u]));return o&&(n.length=0),n};var x=function(r,t,s){var e,n,i;if(!f(r))throw new TypeError(j("invalid argument. First argument must be an object. Value: `%s`.",r));if(e={returns:"values"},2===arguments.length)i=t;else{if(n=v(e,t))throw n;i=s}if(!g(i))throw new TypeError(j("invalid argument. Last argument must be a function. Value: `%s`.",i));return"values"===e.returns?c(r,e,i):"keys"===e.returns?b(r,e,i):w(r,e,i)};export{x as default};
//# sourceMappingURL=index.mjs.map
