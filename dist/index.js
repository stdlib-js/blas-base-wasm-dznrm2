"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var l=u(function(G,p){
var b=require("path").resolve,R=require('@stdlib/fs-read-wasm/dist').sync,W=R(b(__dirname,"..","src","main.wasm"));p.exports=W
});var v=u(function(H,m){
var A=require('@stdlib/assert-is-wasm-memory/dist'),y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=require('@stdlib/utils-inherit/dist'),q=require('@stdlib/wasm-module-wrapper/dist'),S=require('@stdlib/error-tools-fmtprodmsg/dist'),g=l();function n(e){if(!(this instanceof n))return new n(e);if(!A(e))throw new TypeError(S('nullH0',e));return q.call(this,g,e,{env:{memory:e}}),this}O(n,q);y(n.prototype,"main",function(r,i,t){return this._instance.exports.c_dznrm2(r,i,t)});y(n.prototype,"ndarray",function(r,i,t,o){return this._instance.exports.c_dznrm2_ndarray(r,i,t,o)});m.exports=n
});var w=u(function(I,h){
var f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=require('@stdlib/utils-inherit/dist'),B=require('@stdlib/strided-base-stride2offset/dist'),E=require('@stdlib/wasm-memory/dist'),T=require('@stdlib/wasm-base-arrays2ptrs/dist'),V=require('@stdlib/wasm-base-strided2object/dist'),d=v();function a(){return this instanceof a?(d.call(this,new E({initial:0})),this):new a}j(a,d);f(a.prototype,"main",function(r,i,t){return this.ndarray(r,i,t,B(r,t))});f(a.prototype,"ndarray",function(r,i,t,o){var c,s;return c=T(this,[V(r,i,t,o)]),s=c[0],d.prototype.ndarray.call(this,r,s.ptr,s.stride,s.offset)});h.exports=a
});var x=u(function(J,z){
var k=w(),M=new k;M.initializeSync();z.exports=M
});var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=x(),D=v();C(_,"Module",D);module.exports=_;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
