import{ad as p,b1 as c,bS as o,r as g,bT as _,e as f,u,bO as d,aT as w,q as E}from"./index.2f57b5df.js";import{t as q,n as F}from"./featureConversionUtils.da22f310.js";import{m as S}from"./FeatureStore.66579b3d.js";import{g as T,V as b,f as x}from"./QueryEngine.ae88950c.js";import{O as $,L as I}from"./geojson.e07e18fd.js";import{d as j}from"./sourceUtils.1d933f75.js";import{K as C}from"./wfsUtils.7c6a73ff.js";import"./PooledRBush.5082c8d9.js";import"./quickselect.b4c2f48f.js";import"./normalizeUtils.5ceaf9c6.js";import"./WhereClause.cca3c984.js";import"./projection.9bc802ad.js";import"./ClassBreaksDefinition.d43a31dc.js";import"./OptimizedGeometry.02e7bd71.js";import"./OptimizedFeatureSet.2574e09f.js";import"./aaBoundingRect.c608ddf7.js";import"./ItemCache.52f1e8cb.js";import"./json.67c3770f.js";import"./QueryEngineCapabilities.9e441dc1.js";import"./utils.beed9f06.js";import"./xmlUtils.5c7e57e0.js";class Y{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,s=await C(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map(r=>r.name),signal:e});await $(s),p(e);const a=I(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!c(this._queryEngine.spatialReference,o))for(const r of a)g(r.geometry)&&(r.geometry=q(T(F(r.geometry,this._queryEngine.geometryType,!1,!1),o,this._queryEngine.spatialReference)));let n=1;for(const r of a){const i={};j(this._fieldsIndex,i,r.attributes,!0),r.attributes=i,r.attributes[t]==null&&(r.objectId=r.attributes[t]=n++)}return a}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:s,getFeatureOutputFormat:a,spatialReference:n,fields:r,geometryType:i,featureType:h,objectIdField:y,customParameters:l}=e;this._featureType=h,this._customParameters=l,this._getFeatureUrl=s,this._getFeatureOutputFormat=a,this._fieldsIndex=new _(r),await this._checkProjection(n),p(t),this._queryEngine=new b({fields:r,geometryType:i,hasM:!1,hasZ:!1,objectIdField:y,spatialReference:n,timeInfo:null,featureStore:new S({geometryType:i,hasM:!1,hasZ:!1})});const m=await this._snapshotFeatures(f(t.signal));return this._queryEngine.featureStore.addMany(m),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new u("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=d(this._snapshotFeatures),this._snapshotTask.promise.then(s=>{this._queryEngine.featureStore.clear(),s&&this._queryEngine.featureStore.addMany(s)},s=>{this._queryEngine.featureStore.clear(),w(s)||E.getLogger("esri.layers.WFSLayer").error(new u("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:s}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await x(o,e)}catch{throw new u("unsupported-projection","Projection not supported",{spatialReference:e})}}}export{Y as default};
