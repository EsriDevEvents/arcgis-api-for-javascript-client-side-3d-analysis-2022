var S=Object.defineProperty,$=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var I=(a,e,t)=>e in a?S(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,E=(a,e)=>{for(var t in e||(e={}))D.call(e,t)&&I(a,t,e[t]);if(b)for(var t of b(e))G.call(e,t)&&I(a,t,e[t]);return a},F=(a,e)=>$(a,z(e));import{J as o,K as p,jO as L,L as A,b4 as Q,O as u,kz as T,b6 as _,bv as j}from"./vendor.c28ea743.js";import{q}from"./DynamicLayerView3D.2ce8aa15.js";import{c as H}from"./ExportImageParameters.683d4f1c.js";import{s as N,a as R}from"./drapedUtils.afb6a99b.js";import{t as k,d as J}from"./popupUtils.13760ec1.js";import"./projectExtentUtils.016f801d.js";import"./RefreshableLayerView.17a86100.js";import"./sublayerUtils.0c3cf1a5.js";const K=a=>{let e=class extends a{initialize(){this.exportImageParameters=new H({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var t;return(t=this.exportImageParameters)==null||t.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(t,n){const{layer:d}=this;if(!t)return Promise.reject(new Q("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:d}));const y=this.get("view.scale"),h=[],f=async r=>{const i=r.minScale===0||y<=r.minScale,s=r.maxScale===0||y>=r.maxScale;if(r.visible&&i&&s){if(r.sublayers)r.sublayers.forEach(f);else if(r.popupEnabled){const l=J(r,F(E({},n),{defaultPopupTemplateEnabled:!1}));u(l)&&h.unshift({sublayer:r,popupTemplate:l})}}},O=d.sublayers.toArray().reverse().map(f);await Promise.all(O);const V=h.map(async({sublayer:r,popupTemplate:i})=>{await r.load().catch(()=>{});const s=r.createQuery(),l=u(n)?n.event:null,g=N({renderer:r.renderer,event:l}),v=this.createFetchPopupFeaturesQueryGeometry(t,g);if(s.geometry=v,s.outFields=await k(r,i),this.layer.type==="map-image"&&"floors"in this.view){var w,x;const M=(w=this.view)==null||(x=w.floors)==null?void 0:x.clone(),m=T(M,r);u(m)&&(s.where=s.where?`(${s.where}) AND (${m})`:m)}const P=await this._loadArcadeModules(i);return P&&P.arcadeUtils.hasGeometryOperations(i)||(s.maxAllowableOffset=v.width/g),(await r.queryFeatures(s)).features});return(await _(V)).reduce((r,i)=>i.value?[...r,...i.value]:r,[]).filter(r=>r!=null)}canResume(){var t;return!!super.canResume()&&((t=this.timeExtent)==null||!t.isEmpty)}_loadArcadeModules(t){if(t.get("expressionInfos.length")||Array.isArray(t.content)&&t.content.some(n=>n.type==="expression"))return j()}};return o([p()],e.prototype,"exportImageParameters",void 0),o([p({readOnly:!0})],e.prototype,"exportImageVersion",null),o([p()],e.prototype,"layer",void 0),o([p()],e.prototype,"suspended",void 0),o([p(L)],e.prototype,"timeExtent",void 0),e=o([A("esri.views.layers.MapImageLayerView")],e),e};let c=class extends K(q){constructor(){super(...arguments),this.type="map-image-3d"}initialize(){this.updatingHandles.add(()=>this.exportImageVersion,()=>this.updatingHandles.addPromise(this.refreshDebounced()))}createFetchPopupFeaturesQueryGeometry(a,e){return R(a,e,this.view)}getFetchOptions(){return{timeExtent:this.timeExtent}}};c=o([A("esri.views.3d.layers.MapImageLayerView3D")],c);const re=c;export{re as default};
