"use strict";var o=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var v=o(function(g,s){
var i=require('@stdlib/number-float64-base-to-float32/dist'),d=require('@stdlib/math-base-special-floor/dist');function y(u,r,a){var t,n,e;return u<=0?NaN:(a<0?t=(1-u)*a:t=0,n=u/2,e=d(n),n===e?i(i(r[t+e*a]+r[t+(e-1)*a])/2):r[t+e*a])}s.exports=y
});var q=o(function(h,l){
var f=require('@stdlib/number-float64-base-to-float32/dist'),F=require('@stdlib/math-base-special-floor/dist');function T(u,r,a,t){var n,e;return u<=0?NaN:(n=u/2,e=F(n),n===e?f(f(r[t+e*a]+r[t+(e-1)*a])/2):r[t+e*a])}l.exports=T
});var p=o(function(j,m){
var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=v(),O=q();N(c,"ndarray",O);m.exports=c
});var R=p();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
