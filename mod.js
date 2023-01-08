// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var l,a,s,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(r,t)||f.call(r,t)?(l=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=l):r[t]=e.value),s="get"in e,p="set"in e,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(r,t,e.get),p&&i&&i.call(r,t,e.set),r};var l=t;function a(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return s&&"symbol"==typeof Symbol.toStringTag}var y=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;function v(r,t){return null!=r&&b.call(r,t)}var g="function"==typeof Symbol?Symbol.toStringTag:"";var h=p()?function(r){var t,e,n;if(null==r)return y.call(r);e=r[g],t=v(r,g);try{r[g]=void 0}catch(t){return y.call(r)}return n=y.call(r),t?r[g]=e:delete r[g],n}:function(r){return y.call(r)};var j=Array.isArray?Array.isArray:function(r){return"[object Array]"===h(r)};function d(r){return null!==r&&"object"==typeof r}a(d,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!j(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(d));var m=/./;function w(r){return"boolean"==typeof r}var _=Boolean.prototype.toString;var O=p();function E(r){return"object"==typeof r&&(r instanceof Boolean||(O?function(r){try{return _.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===h(r)))}function S(r){return w(r)||E(r)}function A(){return new Function("return this;")()}a(S,"isPrimitive",w),a(S,"isObject",E);var P="object"==typeof self?self:null,T="object"==typeof window?window:null,I="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof I?I:null;var V=function(r){if(arguments.length){if(!w(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return A()}if(P)return P;if(T)return T;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),B=V.document&&V.document.childNodes,F=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var x=/^\s*function\s*([^(]*)/i;function C(r){var t,e,n,o;if(("Object"===(e=h(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=x.exec(n.toString()))return t[1]}return d(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(k,"REGEXP",x);var G="function"==typeof m||"object"==typeof F||"function"==typeof B?function(r){return C(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?C(r).toLowerCase():t};function L(r){return"function"===G(r)}function M(){var r,t=arguments,e=t[0],n="https://stdlib.io/e/"+e+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}var R,U=Object.getPrototypeOf;R=L(Object.getPrototypeOf)?U:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===h(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var X=R;var Y=Object.prototype;function q(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!j(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),X(r))}(r),!t||!v(r,"constructor")&&v(t,"constructor")&&L(t.constructor)&&"[object Function]"===h(t.constructor)&&v(t,"isPrototypeOf")&&L(t.isPrototypeOf)&&(t===Y||function(r){var t;for(t in r)if(!v(r,t))return!1;return!0}(r)))}function z(r){return"number"==typeof r}var D=Number,H=D.prototype.toString;var J=p();function K(r){return"object"==typeof r&&(r instanceof D||(J?function(r){try{return H.call(r),!0}catch(r){return!1}}(r):"[object Number]"===h(r)))}function Q(r){return z(r)||K(r)}function W(r){return r!=r}function Z(r){return z(r)&&W(r)}function $(r){return K(r)&&W(r.valueOf())}function rr(r){return Z(r)||$(r)}a(Q,"isPrimitive",z),a(Q,"isObject",K),a(rr,"isPrimitive",Z),a(rr,"isObject",$);var tr=Math.floor;function er(r){return tr(r)===r}function nr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&er(r.length)&&r.length>=0&&r.length<=9007199254740991}function or(r){return"string"==typeof r}var ur=String.prototype.valueOf;var ir=p();function cr(r){return"object"==typeof r&&(r instanceof String||(ir?function(r){try{return ur.call(r),!0}catch(r){return!1}}(r):"[object String]"===h(r)))}function fr(r){return or(r)||cr(r)}a(fr,"isPrimitive",or),a(fr,"isObject",cr);var lr=Number.POSITIVE_INFINITY,ar=D.NEGATIVE_INFINITY;function sr(r){return r<lr&&r>ar&&er(r)}function pr(r){return z(r)&&sr(r)}function yr(r){return K(r)&&sr(r.valueOf())}function br(r){return pr(r)||yr(r)}a(br,"isPrimitive",pr),a(br,"isObject",yr);var vr=["values","keys","*"];function gr(r,t){return q(t)?(v(t,"thisArg")&&(r.thisArg=t.thisArg),v(t,"returns")&&(r.returns=t.returns,-1===function(r,t,e){var n,o;if(!nr(r)&&!or(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!pr(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(rr(t)){for(;o<n;o++)if(rr(r[o]))return o}else for(;o<n;o++)if(r[o]===t)return o;return-1}(vr,r.returns))?new TypeError(M("0ip3t","returns",vr.join('", "'),r.returns)):null):new TypeError(M("0ip2h",t))}function hr(r,t,e){var n,o,u,i,c;for(u in n=t.thisArg,o=[[],[]],i=!0,r)v(r,u)&&(i=!1,c=r[u],e.call(n,c,u)?o[0].push(c):o[1].push(c));return i&&(o.length=0),o}function jr(r,t,e){var n,o,u,i;for(u in n=t.thisArg,o=[[],[]],i=!0,r)v(r,u)&&(i=!1,e.call(n,r[u],u)?o[0].push(u):o[1].push(u));return i&&(o.length=0),o}function dr(r,t,e){var n,o,u,i,c;for(u in n=t.thisArg,o=[[],[]],i=!0,r)v(r,u)&&(i=!1,c=r[u],e.call(n,c,u)?o[0].push([u,c]):o[1].push([u,c]));return i&&(o.length=0),o}function mr(r,t,e){var n,o,u;if(!d(r))throw new TypeError(M("0ip3X",r));if(n={returns:"values"},2===arguments.length)u=t;else{if(o=gr(n,t))throw o;u=e}if(!L(u))throw new TypeError(M("0ip43",u));return"values"===n.returns?hr(r,n,u):"keys"===n.returns?jr(r,n,u):dr(r,n,u)}export{mr as default};
//# sourceMappingURL=mod.js.map
