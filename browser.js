// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).bifurcateOwn=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var l,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,r)||f.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),s="get"in e,p="set"in e,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(t,r,e.get),p&&i&&i.call(t,r,e.set),t};var l=r;function a(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return s&&"symbol"==typeof Symbol.toStringTag}var y=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;function v(t,r){return null!=t&&b.call(t,r)}var g="function"==typeof Symbol?Symbol.toStringTag:"";var h=p()?function(t){var r,e,n;if(null==t)return y.call(t);e=t[g],r=v(t,g);try{t[g]=void 0}catch(r){return y.call(t)}return n=y.call(t),r?t[g]=e:delete t[g],n}:function(t){return y.call(t)};var d=Array.isArray?Array.isArray:function(t){return"[object Array]"===h(t)};function j(t){return null!==t&&"object"==typeof t}a(j,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!d(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(j));var m=/./;function w(t){return"boolean"==typeof t}var _=Boolean.prototype.toString;var O=p();function E(t){return"object"==typeof t&&(t instanceof Boolean||(O?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===h(t)))}function S(t){return w(t)||E(t)}function T(){return new Function("return this;")()}a(S,"isPrimitive",w),a(S,"isObject",E);var A="object"==typeof self?self:null,P="object"==typeof window?window:null,I="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof I?I:null;var V=function(t){if(arguments.length){if(!w(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return T()}if(A)return A;if(P)return P;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),B=V.document&&V.document.childNodes,F=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var x=/^\s*function\s*([^(]*)/i;function C(t){var r,e,n,o;if(("Object"===(e=h(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=x.exec(n.toString()))return r[1]}return j(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(k,"REGEXP",x);var G="function"==typeof m||"object"==typeof F||"function"==typeof B?function(t){return C(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?C(t).toLowerCase():r};function L(t){return"function"===G(t)}function M(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}var R,U=Object.getPrototypeOf;R=L(Object.getPrototypeOf)?U:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===h(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var X=R;var Y=Object.prototype;function q(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!d(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),X(t))}(t),!r||!v(t,"constructor")&&v(r,"constructor")&&L(r.constructor)&&"[object Function]"===h(r.constructor)&&v(r,"isPrototypeOf")&&L(r.isPrototypeOf)&&(r===Y||function(t){var r;for(r in t)if(!v(t,r))return!1;return!0}(t)))}function z(t){return"number"==typeof t}var D=Number,H=D.prototype.toString;var J=p();function K(t){return"object"==typeof t&&(t instanceof D||(J?function(t){try{return H.call(t),!0}catch(t){return!1}}(t):"[object Number]"===h(t)))}function Q(t){return z(t)||K(t)}function W(t){return t!=t}function Z(t){return z(t)&&W(t)}function $(t){return K(t)&&W(t.valueOf())}function tt(t){return Z(t)||$(t)}a(Q,"isPrimitive",z),a(Q,"isObject",K),a(tt,"isPrimitive",Z),a(tt,"isObject",$);var rt=Math.floor;function et(t){return rt(t)===t}function nt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&et(t.length)&&t.length>=0&&t.length<=9007199254740991}function ot(t){return"string"==typeof t}var ut=String.prototype.valueOf;var it=p();function ct(t){return"object"==typeof t&&(t instanceof String||(it?function(t){try{return ut.call(t),!0}catch(t){return!1}}(t):"[object String]"===h(t)))}function ft(t){return ot(t)||ct(t)}a(ft,"isPrimitive",ot),a(ft,"isObject",ct);var lt=Number.POSITIVE_INFINITY,at=D.NEGATIVE_INFINITY;function st(t){return t<lt&&t>at&&et(t)}function pt(t){return z(t)&&st(t)}function yt(t){return K(t)&&st(t.valueOf())}function bt(t){return pt(t)||yt(t)}a(bt,"isPrimitive",pt),a(bt,"isObject",yt);var vt=["values","keys","*"];function gt(t,r){return q(r)?(v(r,"thisArg")&&(t.thisArg=r.thisArg),v(r,"returns")&&(t.returns=r.returns,-1===function(t,r,e){var n,o;if(!nt(t)&&!ot(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!pt(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(tt(r)){for(;o<n;o++)if(tt(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}(vt,t.returns))?new TypeError(M("0ip3t","returns",vt.join('", "'),t.returns)):null):new TypeError(M("0ip2h",r))}function ht(t,r,e){var n,o,u,i,c;for(u in n=r.thisArg,o=[[],[]],i=!0,t)v(t,u)&&(i=!1,c=t[u],e.call(n,c,u)?o[0].push(c):o[1].push(c));return i&&(o.length=0),o}function dt(t,r,e){var n,o,u,i;for(u in n=r.thisArg,o=[[],[]],i=!0,t)v(t,u)&&(i=!1,e.call(n,t[u],u)?o[0].push(u):o[1].push(u));return i&&(o.length=0),o}function jt(t,r,e){var n,o,u,i,c;for(u in n=r.thisArg,o=[[],[]],i=!0,t)v(t,u)&&(i=!1,c=t[u],e.call(n,c,u)?o[0].push([u,c]):o[1].push([u,c]));return i&&(o.length=0),o}return function(t,r,e){var n,o,u;if(!j(t))throw new TypeError(M("0ip3X",t));if(n={returns:"values"},2===arguments.length)u=r;else{if(o=gt(n,r))throw o;u=e}if(!L(u))throw new TypeError(M("0ip43",u));return"values"===n.returns?ht(t,n,u):"keys"===n.returns?dt(t,n,u):jt(t,n,u)}}));
//# sourceMappingURL=browser.js.map
