import{J as s,K as o,L as P,h$ as Q,iM as k,O as I,k as g,V as A,u2 as N,b4 as $,sX as z,ti as U,tj as V,sS as Z,th as K,tk as W,sT as H,nI as X,nJ as Y,sU as ee,nK as te,a5 as se,tl as R,i2 as re,a8 as D,tm as ie,s$ as oe,tn as ne,jJ as ae,aP as pe,ko as T,tp as le,tq as ue,to as de,te as ce,i4 as ye,i5 as he,ts as fe,i3 as me,tt as ge,tv as ve,nP as Se,i8 as xe}from"./vendor.c28ea743.js";import{N as we,v as j,x as Ie,k as be,T as Fe,S as Oe,I as $e,F as C,j as Re}from"./ogcFeatureUtils.6fabc88c.js";import"./geojson.13543b07.js";import"./clientSideDefaults.21e4ad53.js";import"./QueryEngineCapabilities.650d7541.js";let f=class extends Q{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getFeatureDefinition(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:n,supportedCrs:r},layer:{apiKey:a,capabilities:l,customParameters:p}}=this;return{capabilities:l,collection:e,layerDefinition:t,queryParameters:{apiKey:a,customParameters:p},spatialReference:n,supportedCrs:r}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then(n=>k.fromJSON(n))}queryFeaturesJSON(e,t={}){const n=this.getFeatureDefinition();return this.load(t).then(()=>we(n,e,t))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){var n;const r=new RegExp(`^${t}$`,"i");return(n=e.conformsTo.some(a=>r.test(a)))!=null&&n}_getCapabilities(e,t){var n,r,a,l,p,u,c;const d=I(t)?(n=t.components)==null?void 0:n.parameters:null;return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:(r=(a=d==null||(l=d.limit)==null||(p=l.schema)==null?void 0:p.maximum)!=null?a:d==null||(u=d.limitFeatures)==null||(c=u.schema)==null?void 0:c.maximum)!=null?r:5e3,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getExtent(e){var t;const n=(t=e.extent)==null?void 0:t.spatial;if(!n)return null;const r=n.bbox[0],a=r.length===4,l=r[0],p=r[1],u=a?void 0:r[2];return{xmin:l,ymin:p,xmax:a?r[2]:r[3],ymax:a?r[3]:r[4],zmin:u,zmax:a?void 0:r[5],spatialReference:g.WGS84.toJSON()}}_getStorageSpatialReference(e){var t;const n=(t=e.storageCrs)!=null?t:C,r=j(n);return A(r)?g.WGS84:new g({wkid:r})}_getSupportedSpatialReferences(e,t){var n;const r="#/crs",a=(n=e.crs)!=null?n:[C],l=a.includes(r)?a.filter(u=>u!==r).concat(t.crs):a,p=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return l.filter(u=>!p.test(u))}async _loadOGCServices(e,t){const n=I(t)?t.signal:null,{apiKey:r,collectionId:a,customParameters:l,fields:p,geometryType:u,hasZ:c,objectIdField:d,timeInfo:b,url:E}=e,_={fields:p==null?void 0:p.map(h=>h.toJSON()),geometryType:N.toJSON(u),hasZ:c,objectIdField:d,timeInfo:b==null?void 0:b.toJSON()},m={apiKey:r,customParameters:l,signal:n},v=await Ie(E,m),[F,O]=await Promise.all([be(v,m),Fe(v,m)]);if(!this._conformsToType(F,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new $("ogc-feature-layer:no-geojson-support","Server does not support geojson");const y=O.collections.find(h=>h.id===a);if(!y)throw new $("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const q=this._conformsToType(F,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await Oe(v,m):null,S=await $e(y,_,m),G=this._getCapabilities(S.hasZ,q),B=this._getExtent(y),J=this._getStorageSpatialReference(y).toJSON(),L=this._getSupportedSpatialReferences(y,O),M=new RegExp(`^${Re}`,"i"),x={};for(const h of L){const w=j(h);I(w)&&(x[w]||(x[w]=h.replace(M,"")))}S.extent=B,this.featureDefinition={capabilities:G,collection:y,layerDefinition:S,queryParameters:{},spatialReference:J,supportedCrs:x}}};s([o()],f.prototype,"featureDefinition",void 0),s([o({constructOnly:!0})],f.prototype,"layer",void 0),s([o()],f.prototype,"type",void 0),f=s([P("esri.layers.graphics.sources.OGCFeatureSource")],f);const De=f,Te=xe();let i=class extends z(U(V(Z(K(W(H(X(Y(ee(te(se))))))))))){constructor(e){super(e),this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new De({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){R(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return re(this,e)}createQuery(){return new D}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var n;let r,a=!1;const l=t==null||(n=t.feature)==null?void 0:n.attributes,p=this.typeIdField&&(l==null?void 0:l[this.typeIdField]);return p!=null&&this.types&&(a=this.types.some(u=>{var c,d;return u.id==p&&(r=(c=u.domains)==null?void 0:c[e],((d=r)==null?void 0:d.type)==="inherited"&&(r=this._getLayerDomain(e)),!0)})),a||r||(r=this._getLayerDomain(e)),r}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(D.from(e)||this.createQuery(),t)).then(n=>{var r;return n==null||(r=n.features)==null||r.forEach(a=>{a.layer=a.sourceLayer=this}),n})}serviceSupportsSpatialReference(e){var t,n;return(t=(n=this.source)==null?void 0:n.serviceSupportsSpatialReference(e))!=null&&t}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),R(this.renderer,this.fieldsIndex),ie(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};s([o({readOnly:!0,json:{origins:{service:{read:!0}}}})],i.prototype,"capabilities",void 0),s([o({type:String,json:{write:!0}})],i.prototype,"collectionId",void 0),s([o({type:String})],i.prototype,"copyright",void 0),s([o({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),s([o({type:String})],i.prototype,"definitionExpression",void 0),s([o({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],i.prototype,"description",void 0),s([o({type:String})],i.prototype,"displayField",void 0),s([o(oe)],i.prototype,"elevationInfo",void 0),s([o(ne)],i.prototype,"featureReduction",void 0),s([o({type:[ae],json:{origins:{service:{name:"layerDefinition.fields"}}}})],i.prototype,"fields",void 0),s([o(Te.fieldsIndex)],i.prototype,"fieldsIndex",void 0),s([o({readOnly:!0,type:pe,json:{origins:{service:{name:"layerDefinition.extent"}}}})],i.prototype,"fullExtent",void 0),s([o({type:T.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:T.read}}}}})],i.prototype,"geometryType",void 0),s([o({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],i.prototype,"hasZ",void 0),s([o({type:Boolean,readOnly:!0})],i.prototype,"isTable",null),s([o({type:[le],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ue},write:!0}}}})],i.prototype,"labelingInfo",void 0),s([o(de)],i.prototype,"labelsVisible",void 0),s([o(ce)],i.prototype,"legendEnabled",void 0),s([o({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],i.prototype,"objectIdField",void 0),s([o({type:["OGCFeatureLayer"]})],i.prototype,"operationalLayerType",void 0),s([o(ye)],i.prototype,"popupEnabled",void 0),s([o({type:he,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),s([o({types:fe,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:me,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],i.prototype,"renderer",null),s([o(ge)],i.prototype,"screenSizePerspectiveEnabled",void 0),s([o({readOnly:!0})],i.prototype,"source",void 0),s([o({readOnly:!0,type:g,json:{origins:{service:{read:!0}}}})],i.prototype,"spatialReference",void 0),s([o({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],i.prototype,"title",void 0),s([o({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),s([o({type:String,readOnly:!0})],i.prototype,"typeIdField",void 0),s([o({type:[ve]})],i.prototype,"types",void 0),s([o(Se)],i.prototype,"url",void 0),i=s([P("esri.layers.OGCFeatureLayer")],i);const qe=i;export{qe as default};