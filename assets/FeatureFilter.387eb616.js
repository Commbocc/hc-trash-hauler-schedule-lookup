import{q as m,dC as u,cv as c,u as p,r as _}from"./index.2f57b5df.js";import{u as y}from"./aaBoundingRect.c608ddf7.js";import{Z as f,a as w,n as I}from"./QueryEngine.ae88950c.js";import{u as b}from"./Pipeline.c0c6a40a.js";import"./normalizeUtils.5ceaf9c6.js";import"./WhereClause.cca3c984.js";import"./projection.9bc802ad.js";import"./featureConversionUtils.da22f310.js";import"./ClassBreaksDefinition.d43a31dc.js";import"./TileInfo.4d8a0a2e.js";import"./quickselect.b4c2f48f.js";import"./ogcFeatureUtils.540718fd.js";import"./pbf.05283f84.js";import"./enums2.51e7cb08.js";import"./enums.0a9daf41.js";import"./Texture.2ca23e75.js";import"./context-util.9512d829.js";import"./TileKey.4866daff.js";import"./ItemCache.52f1e8cb.js";import"./json.67c3770f.js";import"./QueryEngineCapabilities.9e441dc1.js";import"./utils.beed9f06.js";import"./OptimizedGeometry.02e7bd71.js";import"./query.60810d22.js";import"./pbfQueryUtils.a635c86e.js";import"./OptimizedFeatureSet.2574e09f.js";import"./geojson.e07e18fd.js";import"./clientSideDefaults.90fb55d8.js";const d=m.getLogger("esri.views.2d.layers.features.support.whereUtils"),g={getAttribute:(r,t)=>r.field(t)};async function T(r,t){const e=await import("./WhereClause.cca3c984.js");try{const i=e.WhereClause.create(r,t);if(!i.isStandardized){const s=new p("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",i);d.error(s)}return s=>{const n=s.readArcadeFeature();return i.testFeature(n,g)}}catch{return d.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",r),s=>!0}}const v=m.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter"),a=1,x=2;class Y{constructor(t){this._geometryBounds=y(),this._idToVisibility=new Map,this._serviceInfo=t}get hash(){return this._hash}check(t){return this._applyFilter(t)}clear(){const t=this._resetAllHiddenIds();return this.update(),{show:t,hide:[]}}invalidate(){this._idToVisibility.forEach((t,e)=>{this._idToVisibility.set(e,0)})}setKnownIds(t){for(const e of t)this._idToVisibility.set(e,a)}setTrue(t){const e=[],i=[],s=new Set(t);return this._idToVisibility.forEach((n,o)=>{const l=!!(this._idToVisibility.get(o)&a),h=s.has(o);!l&&h?e.push(o):l&&!h&&i.push(o),this._idToVisibility.set(o,h?a|x:0)}),{show:e,hide:i}}createQuery(){const{geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:n}=this;return u.fromJSON({geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:n})}async update(t,e){this._hash=JSON.stringify(t);const i=await f(t,null,e);await Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)])}async _setAttributeFilter(t){if(!t||!t.where)return this._clause=null,void(this.where=null);this._clause=await T(t.where,this._serviceInfo.fieldsIndex),this.where=t.where}_setIdFilter(t){this._idsToShow=t&&t.objectIds&&new Set(t.objectIds),this._idsToHide=t&&t.hiddenIds&&new Set(t.hiddenIds),this.objectIds=t&&t.objectIds}async _setGeometryFilter(t){if(!t||!t.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const e=t.geometry,i=t.spatialRel||"esriSpatialRelIntersects",s=await w(i,e,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);c(this._geometryBounds,e),this._spatialQueryOperator=s,this.geometry=e,this.spatialRel=i}_setTimeFilter(t){if(this.timeExtent=this._timeOperator=null,t&&t.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=t.timeExtent,this._timeOperator=I(this._serviceInfo.timeInfo,t.timeExtent,b);else{const e=new p("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",t.timeExtent);v.error(e)}}_applyFilter(t){return this._filterByGeometry(t)&&this._filterById(t)&&this._filterByTime(t)&&this._filterByExpression(t)}_filterByExpression(t){return!this.where||this._clause(t)}_filterById(t){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(t.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(t.getObjectId()))}_filterByGeometry(t){if(!this.geometry)return!0;const e=t.readHydratedGeometry();return!!e&&this._spatialQueryOperator(e)}_filterByTime(t){return!_(this._timeOperator)||this._timeOperator(t)}_resetAllHiddenIds(){const t=[];return this._idToVisibility.forEach((e,i)=>{e&a||(this._idToVisibility.set(i,a),t.push(i))}),t}}export{Y as default};
