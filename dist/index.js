"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var y=u(function(G,p){
var _=require("path").resolve,b=require('@stdlib/fs-read-wasm/dist').sync,R=b(_(__dirname,"..","src","main.wasm"));p.exports=R
});var d=u(function(H,f){
var W=require('@stdlib/assert-is-wasm-memory/dist'),q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),A=require('@stdlib/utils-inherit/dist'),m=require('@stdlib/wasm-module-wrapper/dist'),O=require('@stdlib/error-tools-fmtprodmsg/dist'),S=y();function n(e){if(!(this instanceof n))return new n(e);if(!W(e))throw new TypeError(O('2NfH0',e));return m.call(this,S,e,{env:{memory:e}}),this}A(n,m);q(n.prototype,"main",function(r,i,t){return this._instance.exports.c_dznrm2(r,i,t)});q(n.prototype,"ndarray",function(r,i,t,o){return this._instance.exports.c_dznrm2_ndarray(r,i,t,o)});f.exports=n
});var M=u(function(I,w){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=require('@stdlib/utils-inherit/dist'),j=require('@stdlib/strided-base-stride2offset/dist'),B=require('@stdlib/wasm-memory/dist'),E=require('@stdlib/wasm-base-arrays2ptrs/dist'),T=require('@stdlib/wasm-base-strided2object/dist'),v=d();function a(){return this instanceof a?(v.call(this,new B({initial:0})),this):new a}g(a,v);h(a.prototype,"main",function(r,i,t){return this.ndarray(r,i,t,j(r,t))});h(a.prototype,"ndarray",function(r,i,t,o){var l,s;return l=E(this,[T(r,i,t,o)]),s=l[0],v.prototype.ndarray.call(this,r,s.ptr,s.stride,s.offset)});w.exports=a
});var x=u(function(J,z){
var V=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=M(),C=d(),c=new k;c.initializeSync();V(c,"Module",C.bind(null));z.exports=c
});var D=x();module.exports=D;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
