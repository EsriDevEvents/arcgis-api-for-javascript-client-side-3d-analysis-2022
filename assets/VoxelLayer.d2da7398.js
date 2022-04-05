import{J as e,K as s,L as l,iO as p,hX as J,hY as m,oa as te,l as C,a9 as o,kw as f,aB as se,nH as ie,nI as oe,nJ as re,sT as ne,nK as le,sX as ae,a5 as pe,G as de,tS as ue,Z as ye,O as b,nM as he,aa as I,lr as N,cP as ce,cc as me,b4 as M,i4 as be,te as ve,nP as ge}from"./vendor.c28ea743.js";import{A as we}from"./SceneService.e71c9a33.js";import"./I3SIndexInfo.eb91ec00.js";let j=class extends p{constructor(){super(...arguments),this.enabled=!0,this.label="",this.normal=null,this.point=null}};e([s({type:Boolean,json:{default:!0,write:!0}})],j.prototype,"enabled",void 0),e([s({type:String,json:{write:!0}})],j.prototype,"label",void 0),e([s({type:[Number],json:{write:!0}})],j.prototype,"normal",void 0),e([s({type:[Number],json:{write:!0}})],j.prototype,"point",void 0),j=e([l("esri.layers.support.VoxelDynamicSection")],j);const F=j;let V=class extends p{constructor(){super(...arguments),this.enabled=!0,this.label="",this.normal=null,this.point=null}};e([s({type:Boolean,json:{write:!0}})],V.prototype,"enabled",void 0),e([s({type:String,json:{write:!0}})],V.prototype,"label",void 0),e([s({type:[Number],json:{write:!0}})],V.prototype,"normal",void 0),e([s({type:[Number],json:{write:!0}})],V.prototype,"point",void 0),V=e([l("esri.layers.support.VoxelSlice")],V);const D=V;let d=class extends p{constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null}readHref(t,i,n){return te(t,n)}};e([s({type:Boolean,json:{default:!0,write:!0}})],d.prototype,"enabled",void 0),e([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"href",void 0),e([J(["service","web-scene"],"href")],d.prototype,"readHref",null),e([s({type:m,json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"id",void 0),e([s({type:String,json:{write:!0}})],d.prototype,"label",void 0),e([s({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"normal",void 0),e([s({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"point",void 0),e([s({type:[m],json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"sizeInPixel",void 0),e([s({type:[D],json:{write:!0}})],d.prototype,"slices",void 0),e([s({type:m,json:{default:0,write:!0}})],d.prototype,"timeId",void 0),e([s({type:m,json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"variableId",void 0),d=e([l("esri.layers.support.VoxelSection")],d);const Z=d;let T=class extends p{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5}};e([s({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],T.prototype,"diffuseFactor",void 0),e([s({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],T.prototype,"specularFactor",void 0),T=e([l("esri.layers.support.VoxelSimpleShading")],T);const H=T;let x=class extends p{constructor(){super(...arguments),this.color=null,this.value=null,this.enabled=!0,this.label=null}};e([s({type:C,json:{type:[m],write:{enabled:!0,isRequired:!0}}})],x.prototype,"color",void 0),e([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],x.prototype,"value",void 0),e([s({type:Boolean,json:{default:!0,write:!0}})],x.prototype,"enabled",void 0),e([s({type:String,json:{write:!0}})],x.prototype,"label",void 0),x=e([l("esri.layers.support.VoxelIsosurface")],x);const U=x;let R=class extends p{constructor(){super(...arguments),this.alpha=0,this.position=0}};e([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],R.prototype,"alpha",void 0),e([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],R.prototype,"position",void 0),R=e([l("esri.layers.support.VoxelAlphaStop")],R);const K=R;let q=class extends p{constructor(){super(...arguments),this.color=null,this.position=0}};e([s({type:C,json:{type:[m],write:{enabled:!0,isRequired:!0}}})],q.prototype,"color",void 0),e([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],q.prototype,"position",void 0),q=e([l("esri.layers.support.VoxelColorStop")],q);const X=q;let L=class extends p{constructor(){super(...arguments),this.enabled=!1,this.range=null}};e([s({type:Boolean,json:{default:!1,write:!0}})],L.prototype,"enabled",void 0),e([s({type:[Number],json:{write:!0}})],L.prototype,"range",void 0),L=e([l("esri.layers.support.VoxelRangeFilter")],L);const Se=L;let w=class extends p{constructor(t){super(t),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this.colorStops=new o,this.alphaStops=new o}set colorStops(t){this._set("colorStops",f(t,this._get("colorStops"),o.ofType(X)))}set alphaStops(t){this._set("alphaStops",f(t,this._get("alphaStops"),o.ofType(K)))}};e([s({type:["linear","nearest"],json:{write:!0}})],w.prototype,"interpolation",void 0),e([s({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],w.prototype,"stretchRange",void 0),e([s({type:o.ofType(X),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],w.prototype,"colorStops",null),e([s({type:o.ofType(K),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.alphaStops&&this.alphaStops.length>0}}}}})],w.prototype,"alphaStops",null),e([s({type:Se,json:{write:!0}})],w.prototype,"rangeFilter",void 0),w=e([l("esri.layers.support.VoxelTransferFunctionStyle")],w);const fe=w;let _=class extends p{constructor(){super(...arguments),this.color=null,this.value=0,this.enabled=!0,this.label=null}};e([s({type:C,json:{type:[m],write:{enabled:!0,isRequired:!0}}})],_.prototype,"color",void 0),e([s({type:m,json:{write:{enabled:!0,isRequired:!0}}})],_.prototype,"value",void 0),e([s({type:Boolean,json:{default:!0,write:!0}})],_.prototype,"enabled",void 0),e([s({type:String,json:{write:!0}})],_.prototype,"label",void 0),_=e([l("esri.layers.support.VoxelUniqueValue")],_);const G=_;let S=class extends p{constructor(t){super(t),this.variableId=0,this.label=null,this.transferFunction=null,this.uniqueValues=new o,this.isosurfaces=new o}set uniqueValues(t){this._set("uniqueValues",f(t,this._get("uniqueValues"),o.ofType(G)))}set isosurfaces(t){this._set("isosurfaces",f(t,this._get("isosurfaces"),o.ofType(U)))}};e([s({type:m,json:{write:{enabled:!0,isRequired:!0}}})],S.prototype,"variableId",void 0),e([s({type:String,json:{write:!0}})],S.prototype,"label",void 0),e([s({type:fe,json:{write:{enabled:!0,overridePolicy(){return{enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],S.prototype,"transferFunction",void 0),e([s({type:o.ofType(G),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],S.prototype,"uniqueValues",null),e([s({type:o.ofType(U),json:{write:{enabled:!0,overridePolicy(){const t=!this.uniqueValues||this.uniqueValues.length<1,i=!!this.isosurfaces&&this.isosurfaces.length>0;return{enabled:t&&i}}}}})],S.prototype,"isosurfaces",null),S=e([l("esri.layers.support.VoxelVariableStyle")],S);const Y=S;let v=class extends p{constructor(t){super(t),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new o,this.dynamicSections=new o}set slices(t){this._set("slices",f(t,this._get("slices"),o.ofType(D)))}set dynamicSections(t){this._set("dynamicSections",f(t,this._get("dynamicSections"),o.ofType(F)))}};e([s({type:m,json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"volumeId",void 0),e([s({type:Number,json:{default:1,write:!0}})],v.prototype,"verticalExaggeration",void 0),e([s({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],v.prototype,"exaggerationMode",void 0),e([s({type:Number,json:{default:0,write:!0}})],v.prototype,"verticalOffset",void 0),e([s({type:o.ofType(D),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.slices&&this.slices.length>0}}}}})],v.prototype,"slices",null),e([s({type:o.ofType(F),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],v.prototype,"dynamicSections",null),v=e([l("esri.layers.support.VoxelVolumeStyle")],v);const Q=v;let y=class extends p{constructor(t){super(t),this.currentVariableId=0,this.renderMode="volume",this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new H,this.volumeStyles=new o,this.variableStyles=new o}set volumeStyles(t){this._set("volumeStyles",f(t,this._get("volumeStyles"),o.ofType(Q)))}set variableStyles(t){this._set("variableStyles",f(t,this._get("variableStyles"),o.ofType(Y)))}};e([s({type:o.ofType(Q),json:{write:!0}})],y.prototype,"volumeStyles",null),e([s({type:m,json:{write:{enabled:!0,isRequired:!0}}})],y.prototype,"currentVariableId",void 0),e([s({type:["volume","surfaces"],json:{write:!0}})],y.prototype,"renderMode",void 0),e([s({type:o.ofType(Y),json:{write:!0}})],y.prototype,"variableStyles",null),e([s({type:Boolean,json:{write:!0}})],y.prototype,"enableSlices",void 0),e([s({type:Boolean,json:{write:!0}})],y.prototype,"enableSections",void 0),e([s({type:Boolean,json:{write:!0}})],y.prototype,"enableDynamicSections",void 0),e([s({type:Boolean,json:{write:!0}})],y.prototype,"enableIsosurfaces",void 0),e([s({type:H,json:{write:!0}})],y.prototype,"shading",void 0),y=e([l("esri.layers.support.VoxelStyle")],y);const je=y;let g=class extends p{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null}};e([s({type:["discrete","continuous"],json:{write:!0}})],g.prototype,"continuity",void 0),e([s({type:Boolean,json:{write:!0}})],g.prototype,"hasNoData",void 0),e([s({type:Number,json:{write:!0}})],g.prototype,"noData",void 0),e([s({type:Number,json:{write:!0}})],g.prototype,"offset",void 0),e([s({type:Number,json:{write:!0}})],g.prototype,"scale",void 0),e([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"type",void 0),g=e([l("esri.layers.support.VoxelFormat")],g);const k=g;let c=class extends p{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null}};e([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"id",void 0),e([s({type:String,json:{write:!0}})],c.prototype,"description",void 0),e([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"name",void 0),e([s({type:k,json:{write:!0}})],c.prototype,"originalFormat",void 0),e([s({type:k,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"renderingFormat",void 0),e([s({type:String,json:{write:!0}})],c.prototype,"unit",void 0),e([s({type:Number,json:{write:!0}})],c.prototype,"volumeId",void 0),e([s({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],c.prototype,"type",void 0),c=e([l("esri.layers.support.VoxelVariable")],c);const Ve=c;let W=class extends p{constructor(){super(...arguments),this.values=null}};e([s({type:[Number],json:{write:!0}})],W.prototype,"values",void 0),W=e([l("esri.layers.support.VoxelIrregularSpacing")],W);const xe=W;let P=class extends p{constructor(){super(...arguments),this.scale=1,this.offset=0}};e([s({type:Number,json:{write:!0}})],P.prototype,"scale",void 0),e([s({type:Number,json:{write:!0}})],P.prototype,"offset",void 0),P=e([l("esri.layers.support.VoxelRegularSpacing")],P);const _e=P;let h=class extends p{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=null,this.isWrappedDateLine=null,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null}};e([s({type:xe,json:{write:!0}})],h.prototype,"irregularSpacing",void 0),e([s({type:Boolean,json:{write:!0}})],h.prototype,"isPositiveUp",void 0),e([s({type:Boolean,json:{write:!0}})],h.prototype,"isWrappedDateLine",void 0),e([s({type:String,json:{write:!0}})],h.prototype,"label",void 0),e([s({type:String,json:{write:!0}})],h.prototype,"name",void 0),e([s({type:String,json:{write:!0}})],h.prototype,"quantity",void 0),e([s({type:_e,json:{write:!0}})],h.prototype,"regularSpacing",void 0),e([s({type:Number,json:{write:!0}})],h.prototype,"size",void 0),e([s({type:String,json:{write:!0}})],h.prototype,"unit",void 0),h=e([l("esri.layers.support.VoxelDimension")],h);const $e=h;let z=class extends p{constructor(){super(...arguments),this.id=0,this.dimensions=null}getZDimension(){if(!this.dimensions||!Array.isArray(this.dimensions)||this.dimensions.length!==4)return-1;for(let t=2;t<4;++t)if(this.dimensions[t].size>0)return t;return-1}isVolumeValid(){return!!this.dimensions&&!!Array.isArray(this.dimensions)&&this.dimensions.length===4&&!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&this.getZDimension()!==-1}};e([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],z.prototype,"id",void 0),e([s({type:[$e],json:{write:{enabled:!0,isRequired:!0}}})],z.prototype,"dimensions",void 0),z=e([l("esri.layers.support.VoxelVolume")],z);const Ie=z;var B;let $=B=class extends p{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4]}isValid(){const t=new B;return t.apronWidth===this.apronWidth&&t.maxLodLevel===this.maxLodLevel&&!!this.brickSize&&!!this.nodeSize&&!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&this.brickSize.length===3&&this.nodeSize.length===3&&this.brickSize[0]===32&&this.brickSize[1]===32&&this.brickSize[2]===32&&this.nodeSize[0]===4&&this.nodeSize[1]===4&&this.nodeSize[2]===4}};e([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],$.prototype,"apronWidth",void 0),e([s({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],$.prototype,"brickSize",void 0),e([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],$.prototype,"maxLodLevel",void 0),e([s({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],$.prototype,"nodeSize",void 0),$=B=e([l("esri.layers.support.VoxelVolumeIndex")],$);const Ne=$,E=se.getLogger(" esri.layers.VoxelLayer");var u;(function(t){t[t.API=1]="API",t[t.VerboseAPI=2]="VerboseAPI",t[t.Error=3]="Error"})(u||(u={}));let a=class extends we(ie(oe(re(ne(le(ae(pe))))))){constructor(t){super(t),this.serviceRoot="",this.popupEnabled=!0,this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=new o,this.style=null,this.opacity=1,this.variables=new o,this.volumes=new o,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this._dbgFlags=new Set,this._handles=new de,this.version={major:Number.NaN,minor:Number.NaN,versionString:""}}set url(t){this._set("url",ue(t,E))}destroy(){this._handles=ye(this._handles)}_dbg(t,i){this._dbgFlags.has(t)&&(t===u.Error?E.error(i):E.warn(i))}load(t){const i=b(t)?t.signal:null,n=this.loadFromPortal({supportedTypes:["Scene Service"]},t).catch(he).then(()=>this._fetchService(i)).then(()=>this.serviceRoot=this.url);return this.addResolvingPromise(n),Promise.resolve(this)}getConfiguration(){this._handles.add([I(()=>this._getRenderMode(),i=>this._pushRenderModeToWasm(i)),I(()=>this._getCurrentVariableId(),i=>this._pushCurrentVariableIdToWasm(i)),I(()=>this._getDynamicSections(),i=>this._pushDynamicSectionsToWasm(i)),I(()=>this._getSlices(),i=>this._pushSlicesToWasm(i)),I(()=>this._getSections(),i=>this._pushSectionsToWasm(i))]);const t={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:this.index.toJSON(),sections:this.sections.toJSON(),style:this.style};return t.index&&this.index.isValid()?JSON.stringify(t):""}readVersion(t,i){return super.parseVersionString(t)}_getSections(){const t=[];for(const i of this.sections)t.push(new Z({enabled:i.enabled,href:i.href,id:i.id,label:i.label,normal:i.normal,point:i.point,sizeInPixel:i.sizeInPixel,slices:i.slices,timeId:i.timeId,variableId:i.variableId}));return t}_pushSectionsToWasm(t){this._dbg(u.VerboseAPI,"VoxelLayer._pushSectionsToWasm() called"),N.getInstance().setLayerStaticSections(this,t)||this._dbg(u.Error,"VoxelLayer._pushSectionsToWasm() failed!")}_isPlaneValid(t,i,n){if(!t.point||!Array.isArray(t.point)||t.point.length!==3||!t.normal||!Array.isArray(t.normal)||t.normal.length!==3)return!1;for(let A=0;A<3;++A){const O=t.point[A];if(O<0||O>=n[i[A]].size)return!1}const r=ce(t.normal[0],t.normal[1],t.normal[2]);me(r,r);const ee=1e-6;return!(Math.abs(r[0])+Math.abs(r[1])+Math.abs(r[2])<ee)&&(t.normal[0]=r[0],t.normal[1]=r[1],t.normal[2]=r[2],!0)}getVariableStyle(t){let i=-1;if(i=b(t)?t:this._getCurrentVariableId(),!(this==null?void 0:this.style.variableStyles)||i===-1)return null;const n=this.style.variableStyles.findIndex(r=>r.variableId===i);return n<0?null:this.style.variableStyles.getItemAt(n)}getVariable(t){let i=-1;if(i=b(t)?t:this._getCurrentVariableId(),!this.variables||i===-1)return null;const n=this.variables.findIndex(r=>r.id===i);return n<0?null:this.variables.getItemAt(n)}getVolume(t){const i=this.getVariable(t);return b(i)?this.volumes.find(({id:n})=>n===i.volumeId):null}validateLayer(t){if(t.layerType&&t.layerType!==this.operationalLayerType)throw new M("voxel-layer:layer-type-not-supported","VoxelLayer does not support this layer type",{layerType:t.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor)||this.version.major<3)throw new M("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"});if(this.version.major>3)throw new M("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"})}_getVolumeStyle(t){const i=this.getVariable(t);return b(i)?this.style.volumeStyles.find(({volumeId:n})=>n===i.volumeId):null}_getSlices(){const t=[],i=this.getVolume(null);if(!b(i)||!i.isVolumeValid())return t;const n=this._getVolumeStyle(null);if(!b(n))return t;for(const r of n.slices)this._isPlaneValid(r,[0,1,i.getZDimension()],i.dimensions)?t.push(new D({enabled:r.enabled,label:r.label,point:r.point,normal:r.normal})):t.push(new D({enabled:!1,label:"invalid",point:r.point,normal:r.normal}));return t}_pushSlicesToWasm(t){this._dbg(u.VerboseAPI,"VoxelLayer._pushSlicesToWasm() called!"),N.getInstance().setLayerSlices(this,t)||this._dbg(u.Error,"VoxelLayer._pushSlicesToWasm() failed!")}_getDynamicSections(){const t=[],i=this.getVolume(null);if(!b(i)||!i.isVolumeValid())return t;const n=this._getVolumeStyle(null);if(!b(n))return t;for(const r of n.dynamicSections)this._isPlaneValid(r,[0,1,i.getZDimension()],i.dimensions)?t.push(new F({enabled:r.enabled,label:r.label,point:r.point,normal:r.normal})):t.push(new F({enabled:!1,label:"invalid",point:r.point,normal:r.normal}));return t}_pushDynamicSectionsToWasm(t){this._dbg(u.VerboseAPI,"VoxelLayer._pushDynamicSectionsToWasm() called!"),N.getInstance().setLayerDynamicSections(this,t)||this._dbg(u.Error,"VoxelLayer._updateDynamicSections() failed!")}_getCurrentVariableId(){return this.style?this.style.currentVariableId:-1}_pushCurrentVariableIdToWasm(t){this._dbg(u.VerboseAPI,"VoxelLayer._pushCurrentVariableIdToWasm() called!"),N.getInstance().setLayerCurrentVariable(this,t)||this._dbg(u.Error,"VoxelLayer._pushCurrentVariableIdToWasm() failed!")}_getRenderMode(){return this.style?this.style.renderMode:"volume"}_pushRenderModeToWasm(t){this._dbg(u.VerboseAPI,"VoxelLayer._pushRenderModeToWasm() called!"),N.getInstance().setLayerRenderMode(this,t)||this._dbg(u.Error,"VoxelLayer.setLayerRenderMode() failed!")}};e([s(be)],a.prototype,"popupEnabled",void 0),e([s({type:["Voxel"]})],a.prototype,"operationalLayerType",void 0),e([s(ve)],a.prototype,"legendEnabled",void 0),e([s({json:{write:!0}})],a.prototype,"title",void 0),e([s(ge)],a.prototype,"url",null),e([s({type:o.ofType(Z),json:{write:!0,origins:{"web-scene":{name:"layerDefinition.sections",write:!0},service:{write:!1}}}})],a.prototype,"sections",void 0),e([s({type:je,json:{write:!0,origins:{"web-scene":{name:"layerDefinition.style",write:!0},service:{write:!1}}}})],a.prototype,"style",void 0),e([s({type:["show","hide"]})],a.prototype,"listMode",void 0),e([s({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],a.prototype,"opacity",void 0),e([s({type:o.ofType(Ve)})],a.prototype,"variables",void 0),e([s({type:o.ofType(Ie)})],a.prototype,"volumes",void 0),e([s({type:Ne})],a.prototype,"index",void 0),e([s({type:Number,json:{name:"layerDefinition.minScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],a.prototype,"minScale",void 0),e([s({type:Number,json:{name:"layerDefinition.maxScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],a.prototype,"maxScale",void 0),e([s({json:{read:!1},readOnly:!0})],a.prototype,"type",void 0),e([s({readOnly:!0,json:{name:"serviceVersion"}})],a.prototype,"version",void 0),e([J("service","version")],a.prototype,"readVersion",null),a=e([l("esri.layers.VoxelLayer")],a);const Le=a;export{Le as default};
