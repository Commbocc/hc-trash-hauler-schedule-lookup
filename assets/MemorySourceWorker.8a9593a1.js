import{u as I,dK as $,bP as Q,bT as M,t as Z,aB as _,w as D,r as F,bS as P}from"./index.2f57b5df.js";import{W as q,e as A,Q as C}from"./featureConversionUtils.da22f310.js";import{t as k,n as G}from"./objectIdUtils.c8b9462e.js";import{m as W}from"./FeatureStore.66579b3d.js";import{V as z,f as E,g as j}from"./QueryEngine.ae88950c.js";import{a as B,n as L,l as V}from"./clientSideDefaults.90fb55d8.js";import{y as U,u as g,d as T,c as x,h as R}from"./sourceUtils.1d933f75.js";import"./PooledRBush.5082c8d9.js";import"./quickselect.b4c2f48f.js";import"./normalizeUtils.5ceaf9c6.js";import"./WhereClause.cca3c984.js";import"./projection.9bc802ad.js";import"./ClassBreaksDefinition.d43a31dc.js";import"./OptimizedGeometry.02e7bd71.js";import"./OptimizedFeatureSet.2574e09f.js";import"./aaBoundingRect.c608ddf7.js";import"./ItemCache.52f1e8cb.js";import"./json.67c3770f.js";import"./QueryEngineCapabilities.9e441dc1.js";import"./utils.beed9f06.js";var H=Object.defineProperty,K=Object.defineProperties,N=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,v=(f,e,t)=>e in f?H(f,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):f[e]=t,Y=(f,e)=>{for(var t in e||(e={}))J.call(e,t)&&v(f,t,e[t]);if(w)for(var t of w(e))X.call(e,t)&&v(f,t,e[t]);return f},ee=(f,e)=>K(f,N(e));const te=P,ie={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:P},re={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function se(f){return D(f)?f.z!=null:!!f.hasZ}function ne(f){return D(f)?f.m!=null:!!f.hasM}class Oe{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:n}=e,i=this._inferLayerProperties(n,e.fields),o=e.fields||[],p=e.hasM!=null?e.hasM:i.hasM,c=e.hasZ!=null?e.hasZ:i.hasZ,y=!e.spatialReference&&!i.spatialReference,u=y?te:e.spatialReference||i.spatialReference,a=y?ie:null,r=e.geometryType||i.geometryType,m=!r;let d=e.objectIdField||i.objectIdField,l=e.timeInfo;if(!m&&(y&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!r))throw new I("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!d)throw new I("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(i.objectIdField&&d!==i.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${d}" doesn't match the field name "${i.objectIdField}", found in the provided fields`}),d=i.objectIdField),d&&!i.objectIdField){let s=null;o.some(h=>h.name===d&&(s=h,!0))?(s.type="esriFieldTypeOID",s.editable=!1,s.nullable=!1):o.unshift({alias:d,name:d,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const s of o){if(s.name==null&&(s.name=s.alias),s.alias==null&&(s.alias=s.name),!s.name)throw new I("feature-layer:invalid-field-name","field name is missing",{field:s});if(s.name===d&&(s.type="esriFieldTypeOID"),$.jsonValues.indexOf(s.type)===-1)throw new I("feature-layer:invalid-field-type",`invalid type for field "${s.name}"`,{field:s})}const b={};for(const s of o)if(s.type!=="esriFieldTypeOID"&&s.type!=="esriFieldTypeGlobalID"){const h=Q(s);h!==void 0&&(b[s.name]=h)}if(this._fieldsIndex=new M(o),this._createDefaultAttributes=B(b,d),l){if(l.startTimeField){const s=this._fieldsIndex.get(l.startTimeField);s?(l.startTimeField=s.name,s.type="esriFieldTypeDate"):l.startTimeField=null}if(l.endTimeField){const s=this._fieldsIndex.get(l.endTimeField);s?(l.endTimeField=s.name,s.type="esriFieldTypeDate"):l.endTimeField=null}if(l.trackIdField){const s=this._fieldsIndex.get(l.trackIdField);s?l.trackIdField=s.name:(l.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:l}}))}l.startTimeField||l.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:l}}),l=null)}const O={warnings:t,featureErrors:[],layerDefinition:ee(Y({},re),{drawingInfo:L(r),templates:V(b),extent:a,geometryType:r,objectIdField:d,fields:o,hasZ:!!c,hasM:!!p,timeInfo:l}),assignedObjectIds:{}};if(this._queryEngine=new z({fields:o,geometryType:r,hasM:p,hasZ:c,objectIdField:d,spatialReference:u,featureStore:new W({geometryType:r,hasM:p,hasZ:c}),timeInfo:l,cacheSpatialQueries:!0}),!n||!n.length)return this._nextObjectId=k,O;const S=G(d,n);return this._nextObjectId=S+1,await E(n,u),this._loadInitialFeatures(O,n)}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([U(t,n),E(e.adds,t),E(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let n,i,o=null,p=null,c=null;for(const y of e){const u=y.geometry;if(!Z(u)&&(o||(o=_(u)),p||(p=u.spatialReference),n==null&&(n=se(u)),i==null&&(i=ne(u)),o&&p&&n!=null&&i!=null))break}if(t&&t.length){let y=null;t.some(u=>{const a=u.type==="esriFieldTypeOID",r=!u.type&&u.name&&u.name.toLowerCase()==="objectid";return y=u,a||r})&&(c=y.name)}return{geometryType:o,spatialReference:p,objectIdField:c,hasM:i,hasZ:n}}_loadInitialFeatures(e,t){const{geometryType:n,hasM:i,hasZ:o,objectIdField:p,spatialReference:c,featureStore:y}=this._queryEngine,u=[];for(const a of t){if(a.uid!=null&&(e.assignedObjectIds[a.uid]=-1),a.geometry&&n!==_(a.geometry)){e.featureErrors.push(g("Incorrect geometry type."));continue}const r=this._createDefaultAttributes(),m=T(this._fieldsIndex,r,a.attributes,!0,e.warnings);m?e.featureErrors.push(m):(this._assignObjectId(r,a.attributes,!0),a.attributes=r,a.uid!=null&&(e.assignedObjectIds[a.uid]=a.attributes[p]),F(a.geometry)&&(a.geometry=j(a.geometry,a.geometry.spatialReference,c)),u.push(a))}if(y.addMany(q([],u,n,o,i,p)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:a,end:r}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[a,r]}return e}_applyEdits(e){const{adds:t,updates:n,deletes:i}=e,o={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(o,t),n&&n.length&&this._applyUpdateEdits(o,n),i&&i.length){for(const p of i)o.deleteResults.push(x(p));this._queryEngine.featureStore.removeManyById(i)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:o}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:i,hasM:o,hasZ:p,objectIdField:c,spatialReference:y,featureStore:u}=this._queryEngine,a=[];for(const r of t){if(r.geometry&&i!==_(r.geometry)){n.push(g("Incorrect geometry type."));continue}const m=this._createDefaultAttributes(),d=T(this._fieldsIndex,m,r.attributes);if(d)n.push(d);else{if(this._assignObjectId(m,r.attributes),r.attributes=m,r.uid!=null){const l=r.attributes[c];e.uidToObjectId[r.uid]=l}F(r.geometry)&&(r.geometry=j(R(r.geometry,y),r.geometry.spatialReference,y)),a.push(r),n.push(x(r.attributes[c]))}}u.addMany(q([],a,i,p,o,c))}_applyUpdateEdits({updateResults:e},t){const{geometryType:n,hasM:i,hasZ:o,objectIdField:p,spatialReference:c,featureStore:y}=this._queryEngine;for(const u of t){const{attributes:a,geometry:r}=u,m=a&&a[p];if(m==null){e.push(g(`Identifier field ${p} missing`));continue}if(!y.has(m)){e.push(g(`Feature with object id ${m} missing`));continue}const d=A(y.getFeature(m),n,o,i);if(F(r)){if(n!==_(r)){e.push(g("Incorrect geometry type."));continue}d.geometry=j(R(r,c),r.spatialReference,c)}if(a){const l=T(this._fieldsIndex,d.attributes,a);if(l){e.push(l);continue}}y.add(C(d,n,o,i,p)),e.push(x(m))}}_assignObjectId(e,t,n=!1){const i=this._queryEngine.objectIdField;n&&t&&isFinite(t[i])?e[i]=t[i]:e[i]=this._nextObjectId++}}export{Oe as default};
