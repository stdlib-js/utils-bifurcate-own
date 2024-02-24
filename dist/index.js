"use strict";var f=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}};var g=f(function(N,c){
var b=require('@stdlib/assert-is-plain-object/dist'),l=require('@stdlib/assert-has-own-property/dist'),k=require('@stdlib/utils-index-of/dist'),h=require('@stdlib/error-tools-fmtprodmsg/dist'),o=["values","keys","*"];function P(e,t){return b(t)?(l(t,"thisArg")&&(e.thisArg=t.thisArg),l(t,"returns")&&(e.returns=t.returns,k(o,e.returns)===-1)?new TypeError(h('1Rx4S',"returns",o.join('", "'),e.returns)):null):new TypeError(h('1Rx2V',t));}c.exports=P
});var w=f(function(Q,p){
var E=require('@stdlib/assert-has-own-property/dist');function T(e,t,v){var i,a,r,u,n,s;i=t.thisArg,r=[[],[]],n=!0;for(u in e)E(e,u)&&(n=!1,s=e[u],a=v.call(i,s,u),a?r[0].push(s):r[1].push(s));return n&&(r.length=0),r}p.exports=T
});var m=f(function(R,q){
var V=require('@stdlib/assert-has-own-property/dist');function F(e,t,v){var i,a,r,u,n;i=t.thisArg,r=[[],[]],n=!0;for(u in e)V(e,u)&&(n=!1,a=v.call(i,e[u],u),a?r[0].push(u):r[1].push(u));return n&&(r.length=0),r}q.exports=F
});var y=f(function(S,O){
var L=require('@stdlib/assert-has-own-property/dist');function K(e,t,v){var i,a,r,u,n,s;i=t.thisArg,r=[[],[]],n=!0;for(u in e)L(e,u)&&(n=!1,s=e[u],a=v.call(i,s,u),a?r[0].push([u,s]):r[1].push([u,s]));return n&&(r.length=0),r}O.exports=K
});var x=f(function(U,d){
var z=require('@stdlib/assert-is-object-like/dist'),B=require('@stdlib/assert-is-function/dist'),A=require('@stdlib/error-tools-fmtprodmsg/dist'),C=g(),D=w(),G=m(),H=y();function I(e,t,v){var i,a,r;if(!z(e))throw new TypeError(A('1Rx3L',e));if(i={returns:"values"},arguments.length===2)r=t;else{if(a=C(i,t),a)throw a;r=v}if(!B(r))throw new TypeError(A('1Rx3q',r));return i.returns==="values"?D(e,i,r):i.returns==="keys"?G(e,i,r):H(e,i,r)}d.exports=I
});var J=x();module.exports=J;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
