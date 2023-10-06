// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,h=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,d=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,h,"e-0$1"),r.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,b,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,O=isNaN,S=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,o,a,f,s,l,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(c(n=r[l]))f+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,O(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),f+=n.arg||"",s+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,i;for(t=[],i=0,n=k.exec(r);n;)(e=r.slice(i,k.lastIndex-n[0].length)).length&&t.push(e),t.push(A(n)),i=k.lastIndex,n=k.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function V(r){return"string"==typeof r}function P(r){var e,t,n;if(!V(r))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=I(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return x.apply(null,t)}var F,R=Object.prototype,N=R.toString,C=R.__defineGetter__,$=R.__defineSetter__,G=R.__lookupGetter__,B=R.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(r,e)||B.call(r,e)?(n=r.__proto__,r.__proto__=R,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(r,e,t.get),a&&$&&$.call(r,e,t.set),r};var L=F;function Z(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return M&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;function D(r,e){return null!=r&&X.call(r,e)}var J="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof J?J.toStringTag:"";var q=U()?function(r){var e,t,n;if(null==r)return W.call(r);t=r[Y],e=D(r,Y);try{r[Y]=void 0}catch(e){return W.call(r)}return n=W.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return W.call(r)};var z=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};function H(r){return null!==r&&"object"==typeof r}Z(H,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!z(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(H));var K=/./;function Q(r){return"boolean"==typeof r}var rr=Boolean,er=Boolean.prototype.toString;var tr=U();function nr(r){return"object"==typeof r&&(r instanceof rr||(tr?function(r){try{return er.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function ir(r){return Q(r)||nr(r)}function or(){return new Function("return this;")()}Z(ir,"isPrimitive",Q),Z(ir,"isObject",nr);var ar="object"==typeof self?self:null,ur="object"==typeof window?window:null,cr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},fr="object"==typeof cr?cr:null,sr="object"==typeof globalThis?globalThis:null;var lr=function(r){if(arguments.length){if(!Q(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return or()}if(sr)return sr;if(ar)return ar;if(ur)return ur;if(fr)return fr;throw new Error("unexpected error. Unable to resolve global object.")}(),pr=lr.document&&lr.document.childNodes,gr=Int8Array;function hr(){return/^\s*function\s*([^(]*)/i}var yr=/^\s*function\s*([^(]*)/i;function br(r){var e,t,n,i;if(("Object"===(t=q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=yr.exec(n.toString()))return e[1]}return H(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Z(hr,"REGEXP",yr);var dr="function"==typeof K||"object"==typeof gr||"function"==typeof pr?function(r){return br(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?br(r).toLowerCase():e};function vr(r){return"function"===dr(r)}function wr(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}var mr,jr=Object,_r=Object.getPrototypeOf;mr=vr(Object.getPrototypeOf)?_r:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Er=mr;var Or=Object.prototype;function Sr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!z(r)}(r)&&(e=function(r){return null==r?null:(r=jr(r),Er(r))}(r),!e||!D(r,"constructor")&&D(e,"constructor")&&vr(e.constructor)&&"[object Function]"===q(e.constructor)&&D(e,"isPrototypeOf")&&vr(e.isPrototypeOf)&&(e===Or||function(r){var e;for(e in r)if(!D(r,e))return!1;return!0}(r)))}function Tr(r){return"number"==typeof r}var xr=Number,kr=xr.prototype.toString;var Ar=U();function Ir(r){return"object"==typeof r&&(r instanceof xr||(Ar?function(r){try{return kr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function Vr(r){return Tr(r)||Ir(r)}function Pr(r){return r!=r}function Fr(r){return Tr(r)&&Pr(r)}function Rr(r){return Ir(r)&&Pr(r.valueOf())}function Nr(r){return Fr(r)||Rr(r)}Z(Vr,"isPrimitive",Tr),Z(Vr,"isObject",Ir),Z(Nr,"isPrimitive",Fr),Z(Nr,"isObject",Rr);var Cr=Math.floor;function $r(r){return Cr(r)===r}function Gr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&$r(r.length)&&r.length>=0&&r.length<=9007199254740991}function Br(r){return"string"==typeof r}var Lr=String.prototype.valueOf;var Zr=U();function Mr(r){return"object"==typeof r&&(r instanceof String||(Zr?function(r){try{return Lr.call(r),!0}catch(r){return!1}}(r):"[object String]"===q(r)))}function Ur(r){return Br(r)||Mr(r)}Z(Ur,"isPrimitive",Br),Z(Ur,"isObject",Mr);var Wr=Number.POSITIVE_INFINITY,Xr=xr.NEGATIVE_INFINITY;function Dr(r){return r<Wr&&r>Xr&&$r(r)}function Jr(r){return Tr(r)&&Dr(r)}function Yr(r){return Ir(r)&&Dr(r.valueOf())}function qr(r){return Jr(r)||Yr(r)}Z(qr,"isPrimitive",Jr),Z(qr,"isObject",Yr);var zr=["values","keys","*"];function Hr(r,e){return Sr(e)?(D(e,"thisArg")&&(r.thisArg=e.thisArg),D(e,"returns")&&(r.returns=e.returns,-1===function(r,e,t){var n,i;if(!Gr(r)&&!Br(r))throw new TypeError(P("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Jr(t))throw new TypeError(P("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Nr(e)){for(;i<n;i++)if(Nr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}(zr,r.returns))?new TypeError(wr("1Rx2X,3g,4S,GD,Gg,Jm","returns",zr.join('", "'),r.returns)):null):new TypeError(wr("1Rx2V,FD",e))}function Kr(r,e,t){var n,i,o,a,u;for(o in n=e.thisArg,i=[[],[]],a=!0,r)D(r,o)&&(a=!1,u=r[o],t.call(n,u,o)?i[0].push(u):i[1].push(u));return a&&(i.length=0),i}function Qr(r,e,t){var n,i,o,a;for(o in n=e.thisArg,i=[[],[]],a=!0,r)D(r,o)&&(a=!1,t.call(n,r[o],o)?i[0].push(o):i[1].push(o));return a&&(i.length=0),i}function re(r,e,t){var n,i,o,a,u;for(o in n=e.thisArg,i=[[],[]],a=!0,r)D(r,o)&&(a=!1,u=r[o],t.call(n,u,o)?i[0].push([o,u]):i[1].push([o,u]));return a&&(i.length=0),i}function ee(r,e,t){var n,i,o;if(!H(r))throw new TypeError(wr("1Rx3L,Gc",r));if(n={returns:"values"},2===arguments.length)o=e;else{if(i=Hr(n,e))throw i;o=t}if(!vr(o))throw new TypeError(wr("1Rx3q,JV",o));return"values"===n.returns?Kr(r,n,o):"keys"===n.returns?Qr(r,n,o):re(r,n,o)}export{ee as default};
//# sourceMappingURL=mod.js.map
