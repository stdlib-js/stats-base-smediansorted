// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,o=Object.prototype,n=o.toString,a=o.__defineGetter__,l=o.__defineSetter__,u=o.__lookupGetter__,i=o.__lookupSetter__,f=r,c=function(t,e,r){var f,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(u.call(t,e)||i.call(t,e)?(f=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=f):t[e]=r.value),y="get"in r,p="set"in r,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(t,e,r.get),p&&l&&l.call(t,e,r.set),t},y=e()?f:c,p=function(t,e,r){y(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})},b="function"==typeof Math.fround?Math.fround:null,d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),_=Object.prototype.toString,s=_,m=function(t){return s.call(t)},v=Object.prototype.hasOwnProperty,g=function(t,e){return null!=t&&v.call(t,e)},h="function"==typeof Symbol?Symbol.toStringTag:"",j=g,w=h,S=_,A=m,F=function(t){var e,r,o;if(null==t)return S.call(t);r=t[w],e=j(t,w);try{t[w]=void 0}catch(e){return S.call(t)}return o=S.call(t),e?t[w]=r:delete t[w],o},O=d&&"symbol"==typeof Symbol.toStringTag?F:A,T="function"==typeof Float32Array,N=function(t){return T&&t instanceof Float32Array||"[object Float32Array]"===O(t)},P=Number.POSITIVE_INFINITY,E="function"==typeof Float32Array?Float32Array:null,I=N,x=P,M=E,V="function"==typeof Float32Array?Float32Array:void 0,k=function(){throw new Error("not implemented")},G=new(function(){var t,e;if("function"!=typeof M)return!1;try{e=new M([1,3.14,-3.14,5e40]),t=I(e)&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===x}catch(e){t=!1}return t}()?V:k)(1),C=b;"function"!=typeof C&&(C=function(t){return G[0]=t,G[0]});var Y=C,q=Math.floor;function z(t,e,r){var o,n,a;return t<=0?NaN:(o=r<0?(1-t)*r:0,(n=t/2)===(a=q(n))?Y(Y(e[o+a*r]+e[o+(a-1)*r])/2):e[o+a*r])}return p(z,"ndarray",(function(t,e,r,o){var n,a;return t<=0?NaN:(n=t/2)===(a=q(n))?Y(Y(e[o+a*r]+e[o+(a-1)*r])/2):e[o+a*r]})),z},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).smediansorted=e();
//# sourceMappingURL=index.js.map
