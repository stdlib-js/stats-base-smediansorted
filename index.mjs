// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";var s=e,n=t;var a=e,i=t;var o=function(r,e,t){var a,i,o;return r<=0?NaN:(a=t<0?(1-r)*t:0,(i=r/2)===(o=n(i))?s(s(e[a+o*t]+e[a+(o-1)*t])/2):e[a+o*t])};r(o,"ndarray",(function(r,e,t,s){var n,o;return r<=0?NaN:(n=r/2)===(o=i(n))?a(a(e[s+o*t]+e[s+(o-1)*t])/2):e[s+o*t]}));var d=o;export{d as default};
//# sourceMappingURL=index.mjs.map
