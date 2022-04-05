var U=Object.defineProperty,K=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var A=(l,s,e)=>s in l?U(l,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[s]=e,c=(l,s)=>{for(var e in s||(s={}))P.call(s,e)&&A(l,e,s[e]);if(_)for(var e of _(s))$.call(s,e)&&A(l,e,s[e]);return l},R=(l,s)=>K(l,L(s));import{aB as V,J as n,K as d,t0 as q,k as g,hX as y,aP as w,nO as M,nP as C,jd as k,L as z,hb as J,t1 as F,f_ as B,O as D,t2 as Z,t3 as G,t4 as H,bW as N,b4 as u,bU as x,bT as W,bV as O,t5 as E,t6 as T}from"./vendor.c28ea743.js";import{n as X}from"./I3SIndexInfo.eb91ec00.js";const h=V.getLogger("esri.layers.mixins.SceneService"),re=l=>{let s=class extends l{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=J(async(e,t,i)=>{switch(e){case S.SAVE:return this._save(t);case S.SAVE_AS:return this._saveAs(i,t)}})}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(e.spatialReference!=null)return g.fromJSON(e.spatialReference);{const t=e.store,i=t.indexCRS||t.geographicCRS,r=i&&parseInt(i.substring(i.lastIndexOf("/")+1,i.length),10);return r!=null?new g(r):null}}readFullExtent(e,t,i){if(e!=null&&typeof e=="object"){const o=e.spatialReference==null?R(c({},e),{spatialReference:this._readSpatialReference(t)}):e;return w.fromJSON(o,i)}const r=t.store,a=this._readSpatialReference(t);return a==null||r==null||r.extent==null||!Array.isArray(r.extent)||r.extent.some(o=>o<I)?null:new w({xmin:r.extent[0],ymin:r.extent[1],xmax:r.extent[2],ymax:r.extent[3],spatialReference:a})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},i=e.split(".");return i.length>=2&&(t.major=parseInt(i[0],10),t.minor=parseInt(i[1],10)),t}readVersion(e,t){const i=t.store,r=i.version!=null?i.version.toString():"";return this.parseVersionString(r)}readTitlePortalItem(e){return this.sublayerTitleMode!=="item-title"?void 0:e}readTitleService(e,t){const i=this.portalItem&&this.portalItem.title;if(this.sublayerTitleMode==="item-title")return F(this.url,t.name);let r=t.name;if(!r&&this.url){const a=B(this.url);D(a)&&(r=a.title)}return this.sublayerTitleMode==="item-title-and-service-name"&&i&&(r=i+" - "+r),Z(r)}set url(e){const t=G({layer:this,url:e,nonStandardUrlAllowed:!1,logger:h});this._set("url",t.url),t.layerId!=null&&this._set("layerId",t.layerId)}writeUrl(e,t,i,r){H(this,e,"layers",t,r)}get parsedUrl(){const e=this._get("url");if(!e)return null;const t=N(e);return this.layerId!=null&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=X(this.parsedUrl.path,this.rootNode,e,this.apiKey,h,t),this.fullExtent==null||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if((e==null?void 0:e.type)==="page"){var t,i;const a=e.rootIndex%e.pageSize,o=(t=e.rootPage)==null||(i=t.nodes)==null?void 0:i[a];if(o==null||o.obb==null||o.obb.center==null||o.obb.halfSize==null)throw new u("sceneservice:invalid-node-page","Invalid node page.");if(o.obb.center[0]<I||this.fullExtent==null||this.fullExtent.hasZ)return;const p=o.obb.halfSize,v=o.obb.center[2],b=Math.sqrt(p[0]*p[0]+p[1]*p[1]+p[2]*p[2]);this.fullExtent.zmin=v-b,this.fullExtent.zmax=v+b}else if((e==null?void 0:e.type)==="node"){var r;const a=(r=e.rootNode)==null?void 0:r.mbs;if(!Array.isArray(a)||a.length!==4||a[0]<I)return;const o=a[2],p=a[3];this.fullExtent.zmin=o-p,this.fullExtent.zmax=o+p}}async _fetchService(e){if(this.url==null)throw new u("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(this.layerId==null&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);t!=null&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await x(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await x(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let i=!1;if(t.data.layerType&&t.data.layerType==="Voxel"&&(i=!0),i)return this._fetchVoxelServiceLayer();const r=t.data;this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r)}async _fetchVoxelServiceLayer(e){const t=(await x(this.parsedUrl.path+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl}),this.validateLayer(t)}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&typeof this.beforeSave=="function"&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,i){e.typeKeywords||(e.typeKeywords=[]);const r=t.getTypeKeywords();for(const a of r)e.typeKeywords.push(a);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((a,o,p)=>p.indexOf(a)===o),i===m.newItem&&(e.typeKeywords=e.typeKeywords.filter(a=>a!=="Hosted Service")))}async _saveAs(e,t){const i=c(c({},j),t);let r=W.from(e);r||(h.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new u("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),r.id&&(r=r.clone(),r.id=null);const a=r.portal||O.getDefault();await this._ensureLoadBeforeSave(),r.type=f,r.portal=a;const o={origin:"portal-item",url:null,messages:[],portal:a,portalItem:r,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},p={layers:[this.write({},o)]};return await Promise.all(o.resources.pendingOperations),await this._validateAgainstJSONSchema(p,o,i),r.url=this.url,r.title||(r.title=this.title),this._updateTypeKeywords(r,i,m.newItem),await a._signIn(),await a.user.addItem({item:r,folder:i&&i.folder,data:p}),await E(this.resourceReferences,o,null),this.portalItem=r,T(o),o.portalItem=r,r}async _save(e){const t=c(c({},j),e);this.portalItem||(h.error("_save(): requires the .portalItem property to be set"),await Promise.reject(new u("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),this.portalItem.type!==f&&(h.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+f),await Promise.reject(new u("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${f}"`))),await this._ensureLoadBeforeSave();const i={origin:"portal-item",url:this.portalItem.itemUrl&&N(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||O.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},r={layers:[this.write({},i)]};return await Promise.all(i.resources.pendingOperations),await this._validateAgainstJSONSchema(r,i,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,m.existingItem),await this.portalItem.update({data:r}),await E(this.resourceReferences,i,null),T(i),this.portalItem}async _validateAgainstJSONSchema(e,t,i){let r=t.messages.filter(a=>a.type==="error").map(a=>new u(a.name,a.message,a.details));if(i&&i.validationOptions.ignoreUnsupported&&(r=r.filter(a=>a.name!=="layer:unsupported"&&a.name!=="symbol:unsupported"&&a.name!=="symbol-layer:unsupported"&&a.name!=="property:unsupported"&&a.name!=="url:unsupported"&&a.name!=="scenemodification:unsupported")),i.validationOptions.enabled||Q){const a=(await import("./schemaValidator.4f2b8147.js")).validate(e,i.portalItemLayerType);if(a.length>0){const o=`Layer item did not validate:
${a.join(`
`)}`;if(h.error(`_validateAgainstJSONSchema(): ${o}`),i.validationOptions.failPolicy==="throw"){const p=a.map(v=>new u("sceneservice:schema-validation",v)).concat(r);throw new u("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:p})}}}if(r.length>0)throw new u("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:r})}};return n([d(q)],s.prototype,"id",void 0),n([d({type:g})],s.prototype,"spatialReference",void 0),n([y("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],s.prototype,"readSpatialReference",null),n([d({type:w})],s.prototype,"fullExtent",void 0),n([y("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],s.prototype,"readFullExtent",null),n([d({readOnly:!0,type:M})],s.prototype,"heightModelInfo",void 0),n([d({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],s.prototype,"minScale",void 0),n([d({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],s.prototype,"maxScale",void 0),n([d({readOnly:!0})],s.prototype,"version",void 0),n([y("version",["store.version"])],s.prototype,"readVersion",null),n([d({type:String,json:{read:{source:"copyrightText"}}})],s.prototype,"copyright",void 0),n([d({type:String,json:{read:!1}})],s.prototype,"sublayerTitleMode",void 0),n([d({type:String})],s.prototype,"title",void 0),n([y("portal-item","title")],s.prototype,"readTitlePortalItem",null),n([y("service","title",["name"])],s.prototype,"readTitleService",null),n([d({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],s.prototype,"layerId",void 0),n([d(C)],s.prototype,"url",null),n([k("url")],s.prototype,"writeUrl",null),n([d()],s.prototype,"parsedUrl",null),n([d({readOnly:!0})],s.prototype,"store",void 0),n([d({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],s.prototype,"rootNode",void 0),s=n([z("esri.layers.mixins.SceneService")],s),s},I=-1e38,Q=!1;var m;(function(l){l[l.existingItem=0]="existingItem",l[l.newItem=1]="newItem"})(m||(m={}));const f="Scene Service",j={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var S;(function(l){l[l.SAVE=0]="SAVE",l[l.SAVE_AS=1]="SAVE_AS"})(S||(S={}));export{re as A,S as K};
