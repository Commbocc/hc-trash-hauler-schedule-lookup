import{bo as _,o as I,bR as D,bk as C,bp as k,bi as Q,bj as G,a4 as Z,bl as A,r as E,U as M,aB as x}from"./entry.a426b012.js";import{t as N,n as z,W as B,e as V,Q as W}from"./featureConversionUtils.6d559b11.js";import{m as J}from"./FeatureStore.dd05c6e8.js";import{V as L,f as F,g as w}from"./QueryEngine.a997303e.js";import{T as U,L as H,O as Y}from"./geojson.36f4ed9e.js";import{l as K,a as X,n as ee}from"./clientSideDefaults.e3a40a4b.js";import{y as te,d as j,c as T,u as b,h as O}from"./sourceUtils.24a0899f.js";import"./PooledRBush.9cdcc5f8.js";import"./quickselect.322ec8e1.js";import"./normalizeUtils.f1406d05.js";import"./WhereClause.5a06219b.js";import"./projection.b5b0482a.js";import"./ClassBreaksDefinition.95e31cb6.js";import"./OptimizedGeometry.3220611a.js";import"./OptimizedFeatureSet.1d1ac4b9.js";import"./aaBoundingRect.6a4b2723.js";import"./ItemCache.cf96c9c3.js";import"./json.48e3ea08.js";import"./QueryEngineCapabilities.5c978644.js";import"./utils.1b981ed6.js";var se=Object.defineProperty,ie=Object.defineProperties,re=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,$=(p,e,t)=>e in p?se(p,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):p[e]=t,P=(p,e)=>{for(var t in e||(e={}))ne.call(e,t)&&$(p,t,e[t]);if(S)for(var t of S(e))ae.call(e,t)&&$(p,t,e[t]);return p},oe=(p,e)=>ie(p,re(e));const le={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class Se{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e,t={}){this.loadOptions={url:e.url,customParameters:e.customParameters};const i=[];await this._checkProjection(e.spatialReference);let r=null;e.url&&(r=await this._fetch(t==null?void 0:t.signal));const a=U(r,{geometryType:e.geometryType}),o=e.fields||a.fields||[],u=e.hasZ!=null?e.hasZ:a.hasZ,d=a.geometryType,c=e.objectIdField||a.objectIdFieldName||"__OBJECTID",h=e.spatialReference||_;let s=e.timeInfo;o===a.fields&&a.unknownFields.length>0&&i.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:a.unknownFields}});let l=o.find(n=>n.name===c);l?(l.type!=="esriFieldTypeString"&&(l.type="esriFieldTypeOID"),l.editable=!1,l.nullable=!1):(l={alias:c,name:c,type:a.objectIdFieldType==="string"?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(l));const y={};for(const n of o){if(n.name==null&&(n.name=n.alias),n.alias==null&&(n.alias=n.name),!n.name)throw new I("geojson-layer:invalid-field-name","field name is missing",{field:n});if(!D.jsonValues.includes(n.type))throw new I("geojson-layer:invalid-field-type",`invalid type for field "${n.name}"`,{field:n});if(n.name!==l.name){const g=C(n);g!==void 0&&(y[n.name]=g)}}this._fieldsIndex=new k(o);const f=this._fieldsIndex.requiredFields.indexOf(l);if(f>-1&&this._fieldsIndex.requiredFields.splice(f,1),s){if(s.startTimeField){const n=this._fieldsIndex.get(s.startTimeField);n?(s.startTimeField=n.name,n.type="esriFieldTypeDate"):s.startTimeField=null}if(s.endTimeField){const n=this._fieldsIndex.get(s.endTimeField);n?(s.endTimeField=n.name,n.type="esriFieldTypeDate"):s.endTimeField=null}if(s.trackIdField){const n=this._fieldsIndex.get(s.trackIdField);n?s.trackIdField=n.name:(s.trackIdField=null,i.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:s}}))}s.startTimeField||s.endTimeField||(i.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:s}}),s=null)}const R=d?ee(d):null,m={warnings:i,featureErrors:[],layerDefinition:oe(P({},le),{drawingInfo:R,templates:K(y),extent:null,geometryType:d,objectIdField:c,fields:o,hasZ:!!u,timeInfo:s})};this._queryEngine=new L({fields:o,geometryType:d,hasM:!1,hasZ:u,objectIdField:c,spatialReference:h,timeInfo:s,featureStore:new J({geometryType:d,hasM:!1,hasZ:u}),cacheSpatialQueries:!0}),this._createDefaultAttributes=X(y,c);const q=await this._createFeatures(r);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,q);const v=this._normalizeFeatures(q,m.warnings,m.featureErrors);if(this._queryEngine.featureStore.addMany(v),m.layerDefinition.extent=this._queryEngine.fullExtent,m.layerDefinition.timeInfo){const{start:n,end:g}=this._queryEngine.timeExtent;m.layerDefinition.timeInfo.timeExtent=[n,g]}return m}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([te(t,i),F(e.adds,t),F(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this.loadOptions.customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=Q(this._snapshotFeatures),this._snapshotTask.promise.then(i=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,i);const r=this._normalizeFeatures(i);r&&this._queryEngine.featureStore.addMany(r)},i=>{this._queryEngine.featureStore.clear(),G(i)||Z.getLogger("esri.layers.GeoJSONLayer").error(new I("geojson-layer:refresh","An error occurred during refresh",{error:i}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _createFeatures(e){const{geometryType:t,hasZ:i,objectIdField:r}=this._queryEngine,a=H(e,{geometryType:t,hasZ:i,objectIdField:r});if(!A(this._queryEngine.spatialReference,_))for(const o of a)E(o.geometry)&&(o.geometry=N(w(z(o.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),_,this._queryEngine.spatialReference)));return a}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:i}=this.loadOptions,r=(await M(t,{responseType:"json",query:P({},i),signal:e})).data;return await Y(r),r}_normalizeFeatures(e,t,i){const{objectIdField:r}=this._queryEngine,a=[];for(const o of e){const u=this._createDefaultAttributes(),d=j(this._fieldsIndex,u,o.attributes,!0,t);d?i==null||i.push(d):(this._assignObjectId(u,o.attributes,!0),o.attributes=u,o.objectId=u[r],a.push(o))}return a}_applyEdits(e){const{adds:t,updates:i,deletes:r}=e,a={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(a,t),i&&i.length&&this._applyUpdateEdits(a,i),r&&r.length){for(const o of r)a.deleteResults.push(T(o));this._queryEngine.featureStore.removeManyById(r)}return{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:a}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:r,hasM:a,hasZ:o,objectIdField:u,spatialReference:d,featureStore:c}=this._queryEngine,h=[];for(const s of t){if(s.geometry&&r!==x(s.geometry)){i.push(b("Incorrect geometry type."));continue}const l=this._createDefaultAttributes(),y=j(this._fieldsIndex,l,s.attributes);if(y)i.push(y);else{if(this._assignObjectId(l,s.attributes),s.attributes=l,s.uid!=null){const f=s.attributes[u];e.uidToObjectId[s.uid]=f}E(s.geometry)&&(s.geometry=w(O(s.geometry,d),s.geometry.spatialReference,d)),h.push(s),i.push(T(s.attributes[u]))}}c.addMany(B([],h,r,o,a,u))}_applyUpdateEdits({updateResults:e},t){const{geometryType:i,hasM:r,hasZ:a,objectIdField:o,spatialReference:u,featureStore:d}=this._queryEngine;for(const c of t){const{attributes:h,geometry:s}=c,l=h&&h[o];if(l==null){e.push(b(`Identifier field ${o} missing`));continue}if(!d.has(l)){e.push(b(`Feature with object id ${l} missing`));continue}const y=V(d.getFeature(l),i,a,r);if(E(s)){if(i!==x(s)){e.push(b("Incorrect geometry type."));continue}y.geometry=w(O(s,u),s.spatialReference,u)}if(h){const f=j(this._fieldsIndex,y.attributes,h);if(f){e.push(f);continue}}d.add(W(y,i,a,r,o)),e.push(T(l))}}_createObjectIdGenerator(e,t){const i=e.fieldsIndex.get(e.objectIdField);if(i.type==="esriFieldTypeString")return()=>i.name+"-"+Date.now().toString(16);let r=Number.NEGATIVE_INFINITY;for(const a of t)a.objectId&&(r=Math.max(r,a.objectId));return r=Math.max(0,r)+1,()=>r++}_assignObjectId(e,t,i=!1){const r=this._queryEngine.objectIdField;e[r]=i&&r in t?t[r]:this._objectIdGenerator()}async _checkProjection(e){try{await F(_,e)}catch{throw new I("geojson-layer","Projection not supported")}}}export{Se as default};