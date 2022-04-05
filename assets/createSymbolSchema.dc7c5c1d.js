var x=Object.defineProperty,O=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var K=(e,r,t)=>r in e?x(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,i=(e,r)=>{for(var t in r||(r={}))z.call(r,t)&&K(e,t,r[t]);if(d)for(var t of d(r))F.call(r,t)&&K(e,t,r[t]);return e},m=(e,r)=>O(e,b(r));import{E as h}from"./Utils.7d3ce770.js";import{L as p}from"./MaterialKey.f0f9ee39.js";import"./vendor.c28ea743.js";import"./enums.c01b5663.js";import"./number.dc47462b.js";import"./CIMSymbolHelper.f8096b75.js";import"./BidiEngine.eb17884f.js";function y(e){if(e.type==="line-marker"){var r;return{type:"line-marker",color:(r=e.color)==null?void 0:r.toJSON(),placement:e.placement,style:e.style}}return e.constructor.fromJSON(e.toJSON()).toJSON()}function f(e){return hydrateKey(e)}function T(e,r,t){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return E(e,r,t);case"simple-marker":case"picture-marker":return L(e,r,t);case"simple-line":return g(e,r,t);case"text":return N(e,r,t);case"label":return v(e,r,t);case"cim":return{type:"cim",rendererKey:r.vvFlags,data:e.data,maxVVSize:r.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:r.vvFlags,data:e,maxVVSize:r.maxVVSize};case"web-style":return m(i({},y(e)),{type:"web-style",hash:e.hash(),rendererKey:r.vvFlags,maxVVSize:r.maxVVSize});default:throw new Error(`symbol not supported ${e.type}`)}}function v(e,r,t){const a=e.toJSON(),s=p(h.LABEL,m(i({},r),{placement:a.labelPlacement}));return m(i({materialKey:t?f(s):s,hash:e.hash()},a),{labelPlacement:a.labelPlacement})}function E(e,r,t){const a=r.supportsOutlineFills,s=p(h.FILL,m(i({},r),{isOutlinedFill:a})),l=t?f(s):s,n=e.clone(),u=n.outline;r.supportsOutlineFills||(n.outline=null);const V=i({materialKey:l,hash:n.hash(),isOutlinedFill:!!r.supportsOutlineFills},y(n));if(r.supportsOutlineFills)return V;const o=[];if(o.push(V),u){const c=p(h.LINE,m(i({},r),{isOutline:!0})),S=i({materialKey:t?f(c):c,hash:u.hash()},y(u));o.push(S)}return{type:"composite-symbol",layers:o,hash:o.reduce((c,S)=>S.hash+c,"")}}function g(e,r,t){const a=p(h.LINE,r),s=t?f(a):a,l=e.clone(),n=l.marker;l.marker=null;const u=[];if(u.push(i({materialKey:s,hash:l.hash()},y(l))),n){var V;const o=p(h.MARKER,r),c=t?f(o):o;n.color=(V=n.color)!=null?V:l.color,u.push(i({materialKey:c,hash:n.hash(),lineWidth:l.width},y(n)))}return{type:"composite-symbol",layers:u,hash:u.reduce((o,c)=>c.hash+o,"")}}function L(e,r,t){const a=p(h.MARKER,r),s=t?f(a):a,l=y(e);return m(i({materialKey:s,hash:e.hash()},l),{angle:e.angle,maxVVSize:r.maxVVSize})}function N(e,r,t){const a=p(h.TEXT,r),s=t?f(a):a,l=y(e);return m(i({materialKey:s,hash:e.hash()},l),{angle:e.angle,maxVVSize:r.maxVVSize})}export{T as createSymbolSchema};
