// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";function s(e,s,n){var a,d,i;return e<=0?NaN:(a=n<0?(1-e)*n:0,(d=e/2)===(i=r(d))?t(t(s[a+i*n]+s[a+(i-1)*n])/2):s[a+i*n])}function n(e,s,n,a){var d,i;return e<=0?NaN:(d=e/2)===(i=r(d))?t(t(s[a+i*n]+s[a+(i-1)*n])/2):s[a+i*n]}e(s,"ndarray",n);export{s as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
