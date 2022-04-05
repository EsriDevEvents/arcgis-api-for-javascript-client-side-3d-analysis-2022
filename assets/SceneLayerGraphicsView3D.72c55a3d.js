import{id as z,aB as W,fG as Z,Y as K,P,b0 as Y,he as V,a0 as J,lv as X,b2 as ee,Z as y,a6 as te,V as $,O as u,lw as re,bC as M,hP as ie,bg as se,cP as ae,bh as oe,g as G,cC as R,br as ne,k0 as de,hF as le,bD as ue,a8 as j,J as n,K as d,p as he,hx as ce,L as pe,aM as ge,bz as me}from"./vendor.c28ea743.js";import{s as _e,f as ye,Z as fe}from"./I3SAttributeOverrides.7a268ed0.js";import{A as be,p as ve}from"./Graphics3DFeatureProcessor.fa885ec3.js";import{o as xe,c as Ee,i as Ie,a as we,b as De}from"./SceneLayerView.45f243fc.js";import{T as Oe,X as Se,l as Ce,y as Ae}from"./I3SUtil.eac611a8.js";import{p as Fe}from"./DefinitionExpressionSceneLayerView.c6067e90.js";import{c as Ne}from"./PopupSceneLayerView.9596c4de.js";import"./I3SNode.5c89a4c1.js";import"./I3SBinaryReader.fb2eadf5.js";import"./Graphics3DScaleVisibility.f6a6f047.js";import"./rendererConversion.c9355bb9.js";import"./optimizedFeatureQueryEngineAdapter.fb87930e.js";import"./PooledRBush.8877f027.js";import"./quickselect.02d2bace.js";import"./Graphics3DObjectStates.ae727fbc.js";import"./QueryEngine.127c8abc.js";import"./QueryEngineCapabilities.650d7541.js";import"./attributeUtils.987422a2.js";import"./popupUtils.13760ec1.js";class H extends z{constructor(t){super("SceneLayerWorker","dracoDecompressPointCloudData",t,{hasInitialize:!0})}getTransferList(t){return[t.geometryBuffer]}}const F=W.getLogger("esri.views.3d.layers.SceneLayerGraphicsView3D"),L=De();let o=class extends Fe(Ne(Z(xe))){constructor(){super(...arguments),this.type="scene-layer-graphics-3d",this._nodesAddedToStage=new Map,this.drapeSourceType=K.Features,this._queryEngine=null,this._memCache=null,this._interactiveEditingSessions=new Map,this.loadedGraphics=new _e,this.holeFilling="always",this.progressiveLoadFactor=1,this.supportsHeightUnitConversion=!0,this._coordinatesOutsideExtentErrors=0,this._maxCoordinatesOutsideExtentErrors=20}initialize(){var e,t;const i=this.layer;this.addResolvingPromise(i.indexInfo),this._attributeOverrides=new ye(this.layer,(e=this.view.resourceController)==null?void 0:e.memoryController),Oe(i,this.view.spatialReference,this.view.viewingMode),this.fieldsHelper=new Ee({layerView:this}),this.updatingHandles.add(()=>i.rangeInfos,r=>this._rangeInfosChanged(r),P),this.updatingHandles.add(()=>i.renderer,(r,s)=>this._rendererChange(r,s)),this.updatingHandles.add(()=>[this.parsedDefinitionExpression,this.excludeObjectIdsSorted],()=>this._filterChange()),this.updatingHandles.add(()=>this.view.floors,()=>this.processor.filterVisibility.filterChanged()),this.handles.add(Y(V,"I3S_TREE_SHOW_TILES",r=>{if(r&&!this._treeDebugger){const s=this._controller.crsIndex;import("./I3STreeDebugger.e86ac043.js").then(({I3STreeDebugger:a})=>{!this._treeDebugger&&V.I3S_TREE_SHOW_TILES&&(this._treeDebugger=new a({lv:this,view:this.view,nodeSR:s}))})}else r||!this._treeDebugger||V.I3S_TREE_SHOW_TILES||(this._treeDebugger.destroy(),this._treeDebugger=null)})),this._set("processor",new be({owner:this,preferredUpdatePolicy:J.ASYNC,scaleVisibilityEnabled:!0,filterVisibilityEnabled:!0,timeExtentVisibilityEnabled:!1,frustumVisibilityEnabled:!1,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!1,dataExtent:i.fullExtent,updateClippingExtent:r=>this._updateClippingExtent(r)})),(t=this.processor.elevationAlignment)==null||t.events.on("invalidate-elevation",r=>this._invalidateElevation(r)),this.supportsHeightUnitConversion&&(this._verticalScale=X("point",i.spatialReference,this.view.spatialReference)),this.addResolvingPromise(this.processor.setup()),this._memCache=this.view.resourceController.memoryController.newCache(i.uid),this._controller=new fe({layerView:this,scaleVisibilityEnabled:!1}),Se(this.layer.geometryDefinitions)&&(this._worker=new H(r=>this.view.resourceController.schedule(r))),this.handles.add(this.layer.on("apply-edits",r=>this.updatingHandles.addPromise(r.result))),this.handles.add(this.layer.on("edits",r=>this._handleEdits(r))),this.when(()=>{this._queryEngine=new ve({layerView:this,priority:ee.FEATURE_QUERY_ENGINE}),this.updatingHandles.add(()=>this.maximumNumberOfFeatures,r=>this._controller.featureTarget=r,P),this.updatingHandles.add(()=>this.suspended,r=>{r&&this._removeAllNodeData()})})}destroy(){this._treeDebugger=y(this._treeDebugger),this._attributeOverrides=y(this._attributeOverrides),this._set("processor",y(this.processor)),this._controller=y(this._controller),this._queryEngine=y(this._queryEngine),this._worker=y(this._worker),this._memCache=y(this._memCache),this._nodesAddedToStage.clear(),this.fieldsHelper=y(this.fieldsHelper)}get requiredFields(){var e,t;return(e=(t=this.fieldsHelper)==null?void 0:t.requiredFields)!=null?e:[]}get maximumNumberOfFeatures(){var e,t,i;const r=(e=this.processor)==null||(t=e.graphicsCore)==null?void 0:t.displayFeatureLimit;return(i=r==null?void 0:r.maximumNumberOfFeatures)!=null?i:0}set maximumNumberOfFeatures(e){e!=null?(this._override("maximumNumberOfFeatures",e),this._controller.fixedFeatureTarget=!0):(this._clearOverride("maximumNumberOfFeatures"),this._controller.fixedFeatureTarget=!1)}get maximumNumberOfFeaturesExceeded(){var e;return!this.suspended&&!((e=this._controller)==null||!e.useMaximumNumberOfFeatures||this._controller.leavesReached)}get excludeObjectIdsSorted(){const e=this.layer.excludeObjectIds;return e.length?e.toArray().sort((t,i)=>t-i):null}get hasM(){return!1}get hasZ(){return!0}async whenGraphicAttributes(e,t){return Ce(this.layer,e,this._getObjectIdField(),t,()=>[...this._nodesAddedToStage.values()])}getGraphicFromGraphicUid(e){if(!this.loadedGraphics)return null;const t=te(this.loadedGraphics.find(r=>r.uid===e),this.layer),i=this._getObjectIdField();return t&&t.attributes&&t.attributes[i]?(t.layer=this.layer,t.sourceLayer=this.layer,t):null}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){return this.processor.computeAttachmentOrigin(e,t)}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}isUpdating(){var e,t,i;return!!((e=this._controller)!=null&&e.updating||(t=this.processor)!=null&&t.updating||(i=this.fieldsHelper)!=null&&i.updating)}highlight(e){return this.processor.highlight(e,this.layer.objectIdField)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}createInteractiveEditSession(e){return Ie(this.attributeEditingContext,e)}async _extractBinaryPointData(e,t){const i={geometryBuffer:e.geometryBuffer};return $(this._worker)&&(this._worker=new H(r=>this.view.resourceController.schedule(r))),this._worker.invoke(i,t).then(r=>{if(u(r))return{positionData:r.positions,featureIds:r.featureIds};throw new Error("Failed to decompress Draco point data")})}_checkExtent(e,t){e&&!re(e,t)&&(this._coordinatesOutsideExtentErrors<this._maxCoordinatesOutsideExtentErrors&&F.error("Service Error: Coordinates outside of layer extent"),this._coordinatesOutsideExtentErrors+1===this._maxCoordinatesOutsideExtentErrors&&F.error("Maximum number of errors reached. Further errors are ignored."),this._coordinatesOutsideExtentErrors++)}async addNode(e,t,i){if(!U(t)&&!q(t))return Promise.reject();if(this._nodesAddedToStage.has(e.index))return void F.error("I3S node "+e.id+" already added");const r=u(this.layer.fullExtent)?Te(this.layer.fullExtent.clone(),.5):null,s=this._controller.crsVertex,a=[],l={graphics:null,featureIds:null,attributeInfo:t.attributeDataInfo,node:e};if(U(t)?await this._addNodeBinaryPointData(e,l,t,r,a,i):q(t)&&this._addNodeLegacyPointData(e,l,t,r,a),await this._attributeOverrides.apply(l.featureIds,t.attributeDataInfo,i),e.numFeatures=l.graphics.length,this._updateNodeMemory(e),Q(l),a.length>0&&(this._computeObb(e,a,s),this._controller.updateVisibility(e.index)),!this._controller.isGeometryVisible(e))return this._cacheNodeData(l),Promise.resolve();if(u(this._verticalScale))for(const h of l.graphics)this._verticalScale(h.geometry);return this._nodesAddedToStage.set(e.index,l),this.loadedGraphics.addMany(l.graphics),this._filterNode(l),this._treeDebugger&&this._treeDebugger.update(),Promise.resolve()}_computeObb(e,t,i){const r=this._controller.crsIndex,s=r.isGeographic?this.view.renderSpatialReference:r;M(t,i,0,t,s,0,t.length/3);const a={data:t,size:3};e.serviceObb=ie(a),r.isGeographic&&se(e.serviceObb.center,s,e.serviceObb.center,r)}isNodeLoaded(e){return this._nodesAddedToStage.has(e)}isNodeReloading(){return!1}updateNodeState(){}async _addNodeBinaryPointData(e,t,i,r,s,a){const l=await this._extractBinaryPointData(i,a);if(l==null)return Promise.reject();const h=this._getObjectIdField(),b=this._controller.crsVertex,O=this.view.spatialReference,S=this.processor.graphicsCore,{positionData:g,featureIds:w}=l,v=3,C=g.length/v,m=new Array;for(let x=0;x<C;x++){const N=u(e.serviceObb)?e.serviceObb.center:[0,0,0],E=x*v,c=ae(g[E+0],g[E+1],g[E+2]);oe(c,c,N),e.serviceObb||s.push(c[0],c[1],c[2]),u(r)&&this._checkExtent(r,c);const I=w[x],T={};I!=null&&(T[h]=I);const A=I==null?G.generateUID():I;M(c,b,0,f,O,0,1);const _=R(f[0],f[1],f[2],O),D=this.loadedGraphics.get(A);if(u(D))D.level<e.level&&(p.property="geometry",p.graphic=D,p.oldValue=ne(D.geometry),p.newValue=_,D.geometry=_,S.graphicUpdateHandler(p)),m.push(D);else{const k=G.generateUID();m.push({objectId:A,uid:k,geometry:_,attributes:T,visible:!0,level:e.level})}}t.graphics=m,t.featureIds=Array.from(w)}_addNodeLegacyPointData(e,t,i,r,s){const a=this._getObjectIdField(),l=this._controller.crsVertex,h=this.view.spatialReference,b=[0,0,0],O=new Array,S=new Array;for(const g of i.pointData){const w=g.featureDataPosition,v=w.length,C=g.geometries&&g.geometries[0]||$e[v],m=g.featureIds[0];if(C.params.type!=="points")continue;u(r)&&this._checkExtent(r,w);const x={};m!=null&&(x[a]=m);const N=m==null?G.generateUID():m;let E;C.type==="Embedded"&&(E=C.params.vertexAttributes.position);for(let c=0;c<E.length;c+=v){for(let _=0;_<v;_++)b[_]=w[_]+E[c+_];const I=v===3;e.serviceObb||s.push(b[0],b[1],I?b[2]:0),M(b,l,0,f,h,0,1);const T=R(f[0],f[1],I?f[2]:void 0,h),A=this.loadedGraphics.get(N);u(A)?S.push(A):S.push({objectId:N,uid:G.generateUID(),geometry:T,attributes:x,visible:!0})}O.push(m)}t.graphics=S,t.featureIds=O}_updateNodeMemory(e){e.memory=4096+(u(e.numFeatures)?e.numFeatures*this.processor.graphicsCore.usedMemoryPerGraphic:0)}_cacheNodeData(e){const t=e.graphics.reduce((i,r)=>de(r)+i,512+8*e.featureIds.length+1024);this._memCache.put(this._getMemCacheKey(e.node),e,t)}_getMemCacheKey(e){return`${e.index}`}_removeAllNodeData(){this._nodesAddedToStage.forEach(e=>{if(e){const t=e.node;this._updateNodeMemory(t),this._cacheNodeData(e)}}),this._nodesAddedToStage.clear(),this._treeDebugger&&this._treeDebugger.update(),this.loadedGraphics.clear()}removeNode(e){const t=this._removeNodeStageData(e);t&&(this._updateNodeMemory(t.node),this._cacheNodeData(t))}_removeNodeStageData(e){const t=this._nodesAddedToStage.get(e);return t?(this.loadedGraphics.removeMany(t.graphics),this._nodesAddedToStage.delete(e),this._treeDebugger&&this._treeDebugger.update(),t):null}async loadCachedNodeData(e){return this._memCache.pop(this._getMemCacheKey(e))}async addCachedNodeData(e,t,i,r){if(!this._nodesAddedToStage.has(e.index))return this.loadedGraphics.addMany(t.graphics),this._nodesAddedToStage.set(e.index,t),this._updateNodeMemory(e),await this.updateAttributes(e.index,i,r),this._filterNode(t),this._treeDebugger&&this._treeDebugger.update(),Promise.resolve();F.error("I3S node "+e.id+" already added")}getLoadedNodeIds(){const e=[];return this._nodesAddedToStage.forEach(t=>e.push(t.node.id)),e.sort()}getVisibleNodes(){const e=new Array;return this._nodesAddedToStage.forEach(t=>e.push(t.node)),e}getLoadedNodeIndices(e){this._nodesAddedToStage.forEach((t,i)=>e.push(i))}getLoadedAttributes(e){const t=this._nodesAddedToStage.get(e);if(t&&u(t.attributeInfo))return t.attributeInfo.loadedAttributes}getAttributeData(e){const t=this._nodesAddedToStage.get(e);if(t&&u(t.attributeInfo))return t.attributeInfo.attributeData}_setAttributeData(e,t){const i=this._nodesAddedToStage.get(e);i&&!$(i.attributeInfo)&&(i.attributeInfo.attributeData=t,this._attributeValuesChanged(i))}async updateAttributes(e,t,i){const r=this._nodesAddedToStage.get(e);r&&(await this._attributeOverrides.apply(r.featureIds,t,i),r.attributeInfo=t,this._attributeValuesChanged(r))}_attributeValuesChanged(e){if(Q(e),this._filterNode(e),this.processor.graphicsCore.labelsEnabled){const t=e.graphics.map(i=>i.uid);this.processor.graphicsCore.updateLabelingInfo(t)}}_updateClippingExtent(e){return this._controller&&this._controller.updateClippingArea(e),!1}_getObjectIdField(){return this.layer.objectIdField||"OBJECTID"}async _rendererChange(e,t){const{layer:{fieldsIndex:i}}=this,r=new Set;let s,a;e?(await e.collectRequiredFields(r,i),s=Array.from(r).sort()):s=[],r.clear(),t?(await t.collectRequiredFields(r,i),a=Array.from(r).sort()):a=[],s.length===a.length&&s.every((l,h)=>s[h]===a[h])||this._reloadAllNodes()}_rangeInfosChanged(e){e!=null&&e.length>0&&F.warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}_filterChange(){this._nodesAddedToStage.forEach(e=>this._filterNode(e))}_reloadAllNodes(){this._removeAllNodeData(),this._controller&&this._controller.restartNodeLoading()}_filterNode(e){const t=this.parsedDefinitionExpression,i=this.excludeObjectIdsSorted,r=this._getObjectIdField();for(const s of e.graphics){const a=s.visible,l=!t||this._evaluateClause(t,s),h=$(i)||le(i,s.attributes[r])<0;s.visible=l&&h,a!==s.visible&&(p.graphic=s,p.property="visible",p.oldValue=a,p.newValue=s.visible,this.processor.graphicsCore.graphicUpdateHandler(p))}}_invalidateElevation(e){const t=this._controller.crsIndex;ue(e.extent,e.spatialReference,B,t),this._controller.updateElevationChanged(B,t)}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return u(this.filter)?this.filter.createQuery(e):new j(e)}queryFeatures(e,t){return this._queryEngine.executeQuery(this._ensureQuery(e),t==null?void 0:t.signal)}queryObjectIds(e,t){return this._queryEngine.executeQueryForIds(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatureCount(e,t){return this._queryEngine.executeQueryForCount(this._ensureQuery(e),t==null?void 0:t.signal)}queryExtent(e,t){return this._queryEngine.executeQueryForExtent(this._ensureQuery(e),t==null?void 0:t.signal)}_ensureQuery(e){return this._addDefinitionExpressionToQuery($(e)?this.createQuery():j.from(e))}getUsedMemory(){var e,t,i;return(e=(t=this.processor)==null||(i=t.graphicsCore)==null?void 0:i.usedMemory)!=null?e:0}getUnloadedMemory(){var e,t,i,r,s;return .8*(((e=(t=this._controller)==null?void 0:t.unloadedMemoryEstimate)!=null?e:0)+((i=(r=this.processor)==null||(s=r.graphicsCore)==null?void 0:s.unprocessedMemoryEstimate)!=null?i:0))}ignoresMemoryFactor(){return this._controller&&this._controller.fixedFeatureTarget}_handleEdits(e){we(this.attributeEditingContext,e)}get attributeEditingContext(){const e=this._getObjectIdField();return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:e,forEachNode:t=>this._nodesAddedToStage.forEach(i=>t(i.node,i.featureIds)),attributeStorageInfo:this.i3slayer.attributeStorageInfo,attributeOverrides:this._attributeOverrides,getAttributeData:t=>this.getAttributeData(t),setAttributeData:(t,i,r)=>{this._setAttributeData(t,i);const s=this._nodesAddedToStage.get(t);if(u(r)){const a=this.loadedGraphics.get(r.attributes[e]);u(a)&&this.processor.graphicsCore.recreateGraphics([a])}else u(s)&&this.processor.graphicsCore.recreateGraphics(s.graphics)},clearMemCache:()=>{}}}get performanceInfo(){const e={displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:this.maximumNumberOfFeatures,totalNumberOfFeatures:-1,nodes:this._nodesAddedToStage.size,core:this.processor.graphicsCore.performanceInfo};return this._controller&&this._controller.updateStats(e),e}get test(){return{controller:this._controller,numNodes:this._nodesAddedToStage.size,numFeatures:this.loadedGraphics.length}}};n([d()],o.prototype,"processor",void 0),n([d({type:he})],o.prototype,"filter",void 0),n([d()],o.prototype,"loadedGraphics",void 0),n([d({aliasOf:"layer"})],o.prototype,"i3slayer",void 0),n([d()],o.prototype,"_controller",void 0),n([d()],o.prototype,"updating",void 0),n([d()],o.prototype,"suspended",void 0),n([d()],o.prototype,"holeFilling",void 0),n([d(ce)],o.prototype,"updatingProgress",void 0),n([d({aliasOf:"_controller.updatingProgress"})],o.prototype,"updatingProgressValue",void 0),n([d(L.requiredFields)],o.prototype,"requiredFields",null),n([d(L.availableFields)],o.prototype,"availableFields",void 0),n([d()],o.prototype,"fieldsHelper",void 0),n([d({type:Number})],o.prototype,"maximumNumberOfFeatures",null),n([d({readOnly:!0})],o.prototype,"maximumNumberOfFeaturesExceeded",null),n([d()],o.prototype,"excludeObjectIdsSorted",null),n([d({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.point.lodFactor"})],o.prototype,"lodFactor",void 0),n([d({readOnly:!0})],o.prototype,"hasM",null),n([d({readOnly:!0})],o.prototype,"hasZ",null),o=n([pe("esri.views.3d.layers.SceneLayerGraphicsView3D")],o);const Xe=o;function q(e){return"pointData"in e}function U(e){return"geometryBuffer"in e&&e.geometryBuffer!==null}function Q(e){const t=e.attributeInfo;for(let i=0;i<e.graphics.length;i++){const r=e.graphics[i];if(r.attributes||(r.attributes={}),u(t)&&u(t.loadedAttributes))for(const{name:s}of t.loadedAttributes)t.attributeData[s]&&(r.attributes[s]=Ae(t.attributeData[s],i))}}function Te(e,t){return e.xmin-=t,e.ymin-=t,e.xmax+=t,e.ymax+=t,e.hasZ&&(e.zmin-=t,e.zmax+=t),e.hasM&&(e.mmin-=t,e.mmax+=t),e}const $e={2:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0]}}},3:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0,0]}}}},f=ge(),p={graphic:null,property:null,oldValue:null,newValue:null},B=me();export{Xe as default};
