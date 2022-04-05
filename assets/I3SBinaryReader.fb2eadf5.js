var $=Object.defineProperty,V=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var T=(e,t,r)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,I=(e,t)=>{for(var r in t||(t={}))X.call(t,r)&&T(e,r,t[r]);if(x)for(var r of x(t))Z.call(t,r)&&T(e,r,t[r]);return e},A=(e,t)=>V(e,R(t));import{b4 as f,aB as H,dp as U,cm as j}from"./vendor.c28ea743.js";const d=!0,m={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function F(e,t,r){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,r+m.identifierOffset,m.identifierLength)),version:t.getUint16(r+m.versionOffset,d),checksum:t.getUint32(r+m.checksumOffset,d)}}const g={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function N(e,t){return{sizeLo:e.getUint32(t+g.sizeLo,d),sizeHi:e.getUint32(t+g.sizeHi,d),minX:e.getFloat64(t+g.minX,d),minY:e.getFloat64(t+g.minY,d),minZ:e.getFloat64(t+g.minZ,d),maxX:e.getFloat64(t+g.maxX,d),maxY:e.getFloat64(t+g.maxY,d),maxZ:e.getFloat64(t+g.maxZ,d),errorX:e.getFloat64(t+g.errorX,d),errorY:e.getFloat64(t+g.errorY,d),errorZ:e.getFloat64(t+g.errorZ,d),count:e.getUint32(t+g.count,d),reserved:e.getUint32(t+g.reserved,d)}}function ae(e){const t=new DataView(e,0);let r=0;const{identifier:c,version:o}=F(e,t,r);if(r+=m.byteCount,c!=="LEPCC     ")throw new f("lepcc-decode-error","Bad identifier");if(o>1)throw new f("lepcc-decode-error","Unknown version");const n=N(t,r);if(r+=g.byteCount,n.sizeHi*2**32+n.sizeLo!==e.byteLength)throw new f("lepcc-decode-error","Bad size");const a=new Float64Array(3*n.count),u=[],i=[],s=[],l=[];if(r=L(e,r,u),r=L(e,r,i),r=L(e,r,s),r=L(e,r,l),r!==e.byteLength)throw new f("lepcc-decode-error","Bad length");let y=0,b=0;for(let w=0;w<u.length;w++){b+=u[w];let v=0;for(let C=0;C<i[w];C++){v+=s[y];const Y=l[y];a[3*y]=Math.min(n.maxX,n.minX+2*n.errorX*v),a[3*y+1]=Math.min(n.maxY,n.minY+2*n.errorY*b),a[3*y+2]=Math.min(n.maxZ,n.minZ+2*n.errorZ*Y),y++}}return{errorX:n.errorX,errorY:n.errorY,errorZ:n.errorZ,result:a}}function L(e,t,r){const c=[];t=M(e,t,c);const o=[];for(let n=0;n<c.length;n++){o.length=0,t=M(e,t,o);for(let a=0;a<o.length;a++)r.push(o[a]+c[n])}return t}function M(e,t,r){const c=new DataView(e,t),o=c.getUint8(0),n=31&o,a=!!(32&o),u=(192&o)>>6;let i=0;if(u===0)i=c.getUint32(1,d),t+=5;else if(u===1)i=c.getUint16(1,d),t+=3;else{if(u!==2)throw new f("lepcc-decode-error","Bad count type");i=c.getUint8(1),t+=2}if(a)throw new f("lepcc-decode-error","LUT not implemented");const s=Math.ceil(i*n/8),l=new Uint8Array(e,t,s);let y=0,b=0,w=0;const v=-1>>>32-n;for(let C=0;C<i;C++){for(;b<n;)y|=l[w]<<b,b+=8,w+=1;r[C]=y&v,y>>>=n,b-=n,b+n>32&&(y|=l[w-1]>>8-b)}return t+w}const h={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function _(e,t){return{sizeLo:e.getUint32(t+h.sizeLo,d),sizeHi:e.getUint32(t+h.sizeHi,d),count:e.getUint32(t+h.count,d),colorMapCount:e.getUint16(t+h.colorMapCount,d),lookupMethod:e.getUint8(t+h.lookupMethod),compressionMethod:e.getUint8(t+h.compressionMethod)}}function G(e){const t=new DataView(e,0);let r=0;const{identifier:c,version:o}=F(e,t,r);if(r+=m.byteCount,c!=="ClusterRGB")throw new f("lepcc-decode-error","Bad identifier");if(o>1)throw new f("lepcc-decode-error","Unknown version");const n=_(t,r);if(r+=h.byteCount,n.sizeHi*2**32+n.sizeLo!==e.byteLength)throw new f("lepcc-decode-error","Bad size");if((n.lookupMethod===2||n.lookupMethod===1)&&n.compressionMethod===0){if(3*n.colorMapCount+n.count+r!==e.byteLength||n.colorMapCount>256)throw new f("lepcc-decode-error","Bad count");const a=new Uint8Array(e,r,3*n.colorMapCount),u=new Uint8Array(e,r+3*n.colorMapCount,n.count),i=new Uint8Array(3*n.count);for(let s=0;s<n.count;s++){const l=u[s];i[3*s]=a[3*l],i[3*s+1]=a[3*l+1],i[3*s+2]=a[3*l+2]}return i}if(n.lookupMethod===0&&n.compressionMethod===0){if(3*n.count+r!==e.byteLength||n.colorMapCount!==0)throw new f("lepcc-decode-error","Bad count");return new Uint8Array(e,r).slice()}if(n.lookupMethod<=2&&n.compressionMethod===1){if(r+3!==e.byteLength||n.colorMapCount!==1)throw new f("lepcc-decode-error","Bad count");const a=t.getUint8(r),u=t.getUint8(r+1),i=t.getUint8(r+2),s=new Uint8Array(3*n.count);for(let l=0;l<n.count;l++)s[3*l]=a,s[3*l+1]=u,s[3*l+2]=i;return s}throw new f("lepcc-decode-error","Bad method "+n.lookupMethod+","+n.compressionMethod)}const p={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function W(e,t){return{sizeLo:e.getUint32(t+p.sizeLo,d),sizeHi:e.getUint32(t+p.sizeHi,d),count:e.getUint32(t+p.count,d),scaleFactor:e.getUint16(t+p.scaleFactor,d),bitsPerPoint:e.getUint8(t+p.bitsPerPoint),reserved:e.getUint8(t+p.reserved)}}function q(e){const t=new DataView(e,0);let r=0;const{identifier:c,version:o}=F(e,t,r);if(r+=m.byteCount,c!=="Intensity ")throw new f("lepcc-decode-error","Bad identifier");if(o>1)throw new f("lepcc-decode-error","Unknown version");const n=W(t,r);if(r+=p.byteCount,n.sizeHi*2**32+n.sizeLo!==e.byteLength)throw new f("lepcc-decode-error","Bad size");const a=new Uint16Array(n.count);if(n.bitsPerPoint===8){if(n.count+r!==e.byteLength)throw new f("lepcc-decode-error","Bad size");const u=new Uint8Array(e,r,n.count);for(let i=0;i<n.count;i++)a[i]=u[i]*n.scaleFactor}else if(n.bitsPerPoint===16){if(2*n.count+r!==e.byteLength)throw new f("lepcc-decode-error","Bad size");const u=new Uint16Array(e,r,n.count);for(let i=0;i<n.count;i++)a[i]=u[i]*n.scaleFactor}else{const u=[];if(M(e,r,u)!==e.byteLength)throw new f("lepcc-decode-error","Bad size");for(let i=0;i<n.count;i++)a[i]=u[i]*n.scaleFactor}return a}const B=H.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function J(e,t,r){let c="",o=0;for(;o<r;){const n=e[t+o];if(n<128)c+=String.fromCharCode(n),o++;else if(n>=192&&n<224){if(o+1>=r)throw new f("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const a=(31&n)<<6|63&e[t+o+1];c+=String.fromCharCode(a),o+=2}else if(n>=224&&n<240){if(o+2>=r)throw new f("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(15&n)<<12|(63&e[t+o+1])<<6|63&e[t+o+2];c+=String.fromCharCode(a),o+=3}else{if(!(n>=240&&n<248))throw new f("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(o+3>=r)throw new f("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(7&n)<<18|(63&e[t+o+1])<<12|(63&e[t+o+2])<<6|63&e[t+o+3];if(a>=65536){const u=55296+(a-65536>>10),i=56320+(1023&a);c+=String.fromCharCode(u,i)}else c+=String.fromCharCode(a);o+=4}}}return c}function D(e,t){const r={byteOffset:0,byteCount:0,fields:Object.create(null)};let c=0;for(let o=0;o<t.length;o++){const n=t[o],a=n.valueType||n.type,u=oe[a];r.fields[n.property]=u(e,c),c+=z[a].BYTES_PER_ELEMENT}return r.byteCount=c,r}function K(e,t,r){const c=[];let o,n,a=0;for(n=0;n<e;n+=1){if(o=t[n],o>0){if(c.push(J(r,a,o-1)),r[a+o-1]!==0)throw new f("string-array-error","Invalid string array: missing null termination.")}else c.push(null);a+=o}return c}function k(e,t){return new z[t.valueType](e,t.byteOffset,t.count*t.valuesPerElement)}function Q(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}function ee(e,t,r){const c=t.header!=null?D(e,t.header):{byteOffset:0,byteCount:0,fields:{count:r}},o={header:c,byteOffset:c.byteCount,byteCount:0,entries:Object.create(null)};let n=c.byteCount;for(let a=0;a<t.ordering.length;a++){const u=t.ordering[a],i=j(t[u]);if(i.count=c.fields.count,i.valueType==="String"){if(i.byteOffset=n,i.byteCount=c.fields[u+"ByteCount"],i.encoding!=="UTF-8")throw new f("unsupported-encoding","Unsupported String encoding.",{encoding:i.encoding})}else{if(!S(i.valueType))throw new f("unsupported-value-type","Unsupported binary valueType",{valueType:i.valueType});{const s=O(i.valueType);n+=n%s!=0?s-n%s:0,i.byteOffset=n,i.byteCount=s*i.valuesPerElement*i.count}}n+=i.byteCount,o.entries[u]=i}return o.byteCount=n-o.byteOffset,o}function E(e,t,r){if(t!==e&&B.error(`Invalid ${r} buffer size
 expected: ${e}, actual: ${t})`),t<e)throw new f("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function te(e){return{isDraco:!1,isLegacy:!1,color:e.color!=null,normal:e.normal!=null,uv0:e.uv0!=null,uvRegion:e.uvRegion!=null,featureIndex:e.faceRange!=null&&e.featureId!=null}}function se(e,t){const r=D(e,t&&t.header);let c=r.byteCount;const o={isDraco:!1,header:r,byteOffset:r.byteCount,byteCount:0,vertexAttributes:{}},n=r.fields,a=n.vertexCount!=null?n.vertexCount:n.count;for(const s of t.ordering){if(!t.vertexAttributes[s])continue;const l=A(I({},t.vertexAttributes[s]),{byteOffset:c,count:a}),y=P[s]?P[s]:"_"+s;o.vertexAttributes[y]=l,c+=O(l.valueType)*l.valuesPerElement*a}const u=n.faceCount;if(t.faces&&u){o.faces={};for(const s of t.ordering){if(!t.faces[s])continue;const l=A(I({},t.faces[s]),{byteOffset:c,count:u});o.faces[s]=l,c+=O(l.valueType)*l.valuesPerElement*u}}const i=n.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&i){o.featureAttributes={};for(const s of t.featureAttributeOrder){if(!t.featureAttributes[s])continue;const l=A(I({},t.featureAttributes[s]),{byteOffset:c,count:i});o.featureAttributes[s]=l,c+=(l.valueType==="UInt64"?8:O(l.valueType))*l.valuesPerElement*i}}return E(c,e.byteLength,"geometry"),o.byteCount=c-o.byteOffset,o}function ue(e,t){return!e||!e.compressedAttributes||e.compressedAttributes.encoding!=="draco"?e?te(e):ne(t):re(e.compressedAttributes.attributes)}function ne(e){const t={isDraco:!1,isLegacy:!0,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const r of e.ordering)if(e.vertexAttributes[r])switch(r){case"position":break;case"normal":t.normal=!0;break;case"color":t.color=!0;break;case"uv0":t.uv0=!0;break;case"region":t.uvRegion=!0}return e.featureAttributes&&e.featureAttributeOrder&&(t.featureIndex=!0),t}function re(e){const t={isDraco:!0,isLegacy:!1,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const r of e)switch(r){case"position":break;case"normal":t.normal=!0;break;case"uv0":t.uv0=!0;break;case"color":t.color=!0;break;case"uv-region":t.uvRegion=!0;break;case"feature-index":t.featureIndex=!0}return t}const P={position:U.POSITION,normal:U.NORMAL,color:U.COLOR,uv0:U.UV0,region:U.UVREGION};function fe(e,t,r){if(e.encoding==="lepcc-rgb")return G(t);if(e.encoding==="lepcc-intensity")return q(t);if(e.encoding!=null&&e.encoding!=="")throw new f("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(B.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),e.ordering[0]==="ObjectIds"&&e.hasOwnProperty("objectIds")&&(B.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const c=ee(t,e,r);E(c.byteOffset+c.byteCount,t.byteLength,"attribute");const o=c.entries.attributeValues||c.entries.objectIds;if(o){if(o.valueType==="String"){const n=c.entries.attributeByteCounts,a=k(t,n),u=Q(t,o);return K(n.count,a,u)}return k(t,o)}throw new f("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const z={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},oe={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function S(e){return z.hasOwnProperty(e)}function O(e){return S(e)?z[e].BYTES_PER_ELEMENT:0}export{fe as I,ae as c,k as f,se as g,ue as w};
