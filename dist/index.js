"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=n(function(g,v){
var o=require('@stdlib/number-float64-base-to-float32/dist'),l=require('@stdlib/math-base-special-floor/dist');function p(e,r,a,i){var u,t;return e<=0?NaN:(u=e/2,t=l(u),u===t?o(o(r[i+t*a]+r[i+(t-1)*a])/2):r[i+t*a])}v.exports=p
});var q=n(function(h,d){
var y=require('@stdlib/strided-base-stride2offset/dist'),x=s();function F(e,r,a){return x(e,r,a,y(e,a))}d.exports=F
});var f=n(function(j,m){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=q(),R=s();O(c,"ndarray",R);m.exports=c
});var T=f();module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
