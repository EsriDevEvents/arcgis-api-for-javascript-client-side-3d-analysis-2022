import{J as r,K as i,L as a,b4 as p}from"./vendor.c28ea743.js";import{w as l}from"./FeatureLayerViewBase3D.c50f0edb.js";import"./FeatureLikeLayerView3D.f24632db.js";import"./Graphics3DFeatureProcessor.fa885ec3.js";import"./Graphics3DScaleVisibility.f6a6f047.js";import"./rendererConversion.c9355bb9.js";import"./optimizedFeatureQueryEngineAdapter.fb87930e.js";import"./PooledRBush.8877f027.js";import"./quickselect.02d2bace.js";import"./Graphics3DObjectStates.ae727fbc.js";import"./QueryEngine.127c8abc.js";import"./QueryEngineCapabilities.650d7541.js";import"./attributeUtils.987422a2.js";import"./FeatureStore.c47b839a.js";import"./projectExtentUtils.016f801d.js";import"./EventedSet.fe8e0173.js";import"./popupUtils.13760ec1.js";import"./RefreshableLayerView.17a86100.js";const m=s=>{let e=class extends s{get availableFields(){return this.layer.fieldsIndex.fields.map(o=>o.name)}};return r([i()],e.prototype,"layer",void 0),r([i({readOnly:!0})],e.prototype,"availableFields",null),e=r([a("esri.views.layers.OGCFeatureLayerView")],e),e};let t=class extends m(l){constructor(){super(...arguments),this.type="ogc-feature-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new p("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:this.layer})))}};r([i()],t.prototype,"layer",void 0),t=r([a("esri.views.3d.layers.OGCFeatureLayerView3D")],t);const P=t;export{P as default};
