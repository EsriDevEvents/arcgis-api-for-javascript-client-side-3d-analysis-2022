import{gk as F,gU as l,gh as g,g3 as A,gn as m,gb as s,gm as f,ht as h,ga as v,g_ as b}from"./vendor.c28ea743.js";import{m as d}from"./arcadeUtils.0d53eca8.js";function i(t,e,a,n,u,r){if(n.length===1){if(g(n[0]))return s(d(t,n[0],f(n[1],-1)));if(m(n[0]))return s(d(t,n[0].toArray(),f(n[1],-1)))}else if(n.length===2){if(g(n[0]))return s(d(t,n[0],f(n[1],-1)));if(m(n[0]))return s(d(t,n[0].toArray(),f(n[1],-1)));if(l(n[0]))return n[0].load().then(c=>y(h.create(n[1],c.getFieldsIndex()),r,u).then(o=>n[0].calculateStatistic(t,o,f(n[2],1e3),e.abortSignal)))}else if(n.length===3&&l(n[0]))return n[0].load().then(c=>y(h.create(n[1],c.getFieldsIndex()),r,u).then(o=>n[0].calculateStatistic(t,o,f(n[2],1e3),e.abortSignal)));return s(d(t,n,-1))}function y(t,e,a){try{const n=t.getVariables();if(n.length>0){const u=[];for(let r=0;r<n.length;r++){const c={name:n[r]};u.push(e.evaluateIdentifier(a,c))}return v(u).then(r=>{const c={};for(let o=0;o<n.length;o++)c[n[o]]=r[o];return t.parameters=c,t})}return s(t)}catch(n){return b(n)}}function S(t){t.mode==="async"&&(t.functions.stdev=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){return i("stdev",n,u,r,e,t)})},t.functions.variance=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){return i("variance",n,u,r,e,t)})},t.functions.average=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){return i("mean",n,u,r,e,t)})},t.functions.mean=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){return i("mean",n,u,r,e,t)})},t.functions.sum=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){return i("sum",n,u,r,e,t)})},t.functions.min=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){return i("min",n,u,r,e,t)})},t.functions.max=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){return i("max",n,u,r,e,t)})},t.functions.count=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){if(F(r,1,1),l(r[0]))return r[0].count(n.abortSignal);if(g(r[0])||A(r[0]))return r[0].length;if(m(r[0]))return r[0].length();throw new Error("Invalid Parameters for Count")})})}export{S as registerFunctions};
