import{a9 as p,bl as c,bo as o,r as g,bp as _,e as f,o as u,bi as d,bj as w,a4 as E}from"./entry.a426b012.js";import{t as q,n as F}from"./featureConversionUtils.6d559b11.js";import{m as S}from"./FeatureStore.dd05c6e8.js";import{g as b,V as x,f as T}from"./QueryEngine.a997303e.js";import{O as $,L as j}from"./geojson.36f4ed9e.js";import{d as I}from"./sourceUtils.24a0899f.js";import{K as C}from"./wfsUtils.fa56227d.js";import"./PooledRBush.9cdcc5f8.js";import"./quickselect.322ec8e1.js";import"./normalizeUtils.f1406d05.js";import"./WhereClause.5a06219b.js";import"./projection.b5b0482a.js";import"./ClassBreaksDefinition.95e31cb6.js";import"./OptimizedGeometry.3220611a.js";import"./OptimizedFeatureSet.1d1ac4b9.js";import"./aaBoundingRect.6a4b2723.js";import"./ItemCache.cf96c9c3.js";import"./json.48e3ea08.js";import"./QueryEngineCapabilities.5c978644.js";import"./utils.1b981ed6.js";import"./xmlUtils.9250d79f.js";class Y{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,s=await C(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map(r=>r.name),signal:e});await $(s),p(e);const a=j(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!c(this._queryEngine.spatialReference,o))for(const r of a)g(r.geometry)&&(r.geometry=q(b(F(r.geometry,this._queryEngine.geometryType,!1,!1),o,this._queryEngine.spatialReference)));let n=1;for(const r of a){const i={};I(this._fieldsIndex,i,r.attributes,!0),r.attributes=i,r.attributes[t]==null&&(r.objectId=r.attributes[t]=n++)}return a}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:s,getFeatureOutputFormat:a,spatialReference:n,fields:r,geometryType:i,featureType:h,objectIdField:y,customParameters:l}=e;this._featureType=h,this._customParameters=l,this._getFeatureUrl=s,this._getFeatureOutputFormat=a,this._fieldsIndex=new _(r),await this._checkProjection(n),p(t),this._queryEngine=new x({fields:r,geometryType:i,hasM:!1,hasZ:!1,objectIdField:y,spatialReference:n,timeInfo:null,featureStore:new S({geometryType:i,hasM:!1,hasZ:!1})});const m=await this._snapshotFeatures(f(t.signal));return this._queryEngine.featureStore.addMany(m),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new u("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=d(this._snapshotFeatures),this._snapshotTask.promise.then(s=>{this._queryEngine.featureStore.clear(),s&&this._queryEngine.featureStore.addMany(s)},s=>{this._queryEngine.featureStore.clear(),w(s)||E.getLogger("esri.layers.WFSLayer").error(new u("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:s}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await T(o,e)}catch{throw new u("unsupported-projection","Projection not supported",{spatialReference:e})}}}export{Y as default};
