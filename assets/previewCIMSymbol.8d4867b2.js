import{qe as C,qI as I,qJ as S,b$ as v}from"./vendor.c28ea743.js";import{CIMSymbolRasterizer as x}from"./CIMSymbolRasterizer.5526c41e.js";import{l as D}from"./renderUtils.5dca719b.js";import"./cimAnalyzer.961c4eac.js";import"./CIMSymbolHelper.f8096b75.js";import"./BidiEngine.eb17884f.js";import"./enums.c01b5663.js";import"./number.dc47462b.js";import"./colorUtils.7c4b6dc5.js";const q=new x(null,!0),V=C.maxSize;async function L(e,t={}){const{size:r,maxSize:u,node:y,opacity:f}=t,g=t.cimOptions||t,{feature:w,fieldMap:b,geometryType:M,style:z}=g,h=I(e),d=typeof r=="number"?r:null,i=Math.min(d!=null?d:h,u!=null?u:v(V));i!==h&&(e=e.clone(),S(e,i,{preserveOutlineWidth:!0}));let s=3;e&&e.data&&e.data.symbol&&e.data.symbol.type!=="CIMPointSymbol"&&(s=1);const c=await q.rasterizeCIMSymbolAsync(e,w,b,M,{scaleFactor:s,style:z}),l=document.createElement("canvas");l.width=c.imageData.width,l.height=c.imageData.height,l.getContext("2d").putImageData(c.imageData,0,0);let o=l.width/s,n=l.height/s;if(r!=null&&((t==null?void 0:t.scale)==null||(t==null?void 0:t.scale))){const a=o/n;o=a<=1?Math.ceil(i*a):i,n=a<=1?i:Math.ceil(i/a)}const m=new Image(o,n);m.src=l.toDataURL(),f!=null&&(m.style.opacity=`${f}`);let p=m;if(t.effectView!=null){const a={shape:{type:"image",x:0,y:0,width:o,height:n,src:m.src},fill:null,stroke:null,offset:[0,0]};p=D([[a]],[o,n],{effectView:t.effectView})}return y&&y.appendChild(p),p}export{L as previewCIMSymbol};
