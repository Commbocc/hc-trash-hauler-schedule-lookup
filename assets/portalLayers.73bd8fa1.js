import{ah as l,u as h}from"./index.2f57b5df.js";import{a as N}from"./lazyLayerLoader.e6682034.js";import{m as S,h as u,f as v,n as c}from"./layersLoader.ae874428.js";import"./jsonContext.b4f56bc5.js";var I=Object.defineProperty,w=Object.defineProperties,g=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?I(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,m=(e,r)=>{for(var t in r||(r={}))P.call(r,t)&&p(e,t,r[t]);if(y)for(var t of y(r))O.call(r,t)&&p(e,t,r[t]);return e},_=(e,r)=>w(e,g(r));function f(e,r){return!!e.typeKeywords&&e.typeKeywords.indexOf(r)>-1}function z(e){return!e.portalItem||e.portalItem instanceof l||(e=_(m({},e),{portalItem:new l(e.portalItem)})),T(e.portalItem).then(r=>{const t=m({portalItem:e.portalItem},r.properties),n=r.constructor;return Promise.resolve(new n(t))})}function T(e){return e.load().then(M).then(j)}function M(e){switch(e.type){case"Map Service":return b(e);case"Feature Service":return $(e);case"Feature Collection":return F(e);case"Scene Service":return C(e);case"Image Service":return K(e);case"Stream Service":return x();case"Vector Tile Service":return D();case"KML":return G();case"WFS":return W();case"WMTS":return A();case"WMS":return V();case"Feed":return B();default:return Promise.reject(new h("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function j(e){return(0,N[e.className])().then(r=>({constructor:r,properties:e.properties}))}function b(e){return E(e).then(r=>r?{className:"TileLayer"}:{className:"MapImageLayer"})}function $(e){return d(e).then(r=>{if(typeof r=="object"){const t={};return r.id!=null&&(t.layerId=r.id),{className:"FeatureLayer",properties:t}}return{className:"GroupLayer"}})}function C(e){return d(e).then(r=>{if(typeof r=="object"){const t={};let n;if(r.id!=null?(t.layerId=r.id,n=`${e.url}/layers/${r.id}`):n=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const o of Object.keys(a))if(e.typeKeywords.indexOf(o)!==-1)return{className:a[o]}}return c(n).then(a=>{let o="SceneLayer";const s={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return a&&a.layerType&&s[a.layerType]&&(o=s[a.layerType]),{className:o,properties:t}})}return r===!1?c(e.url).then(t=>(t==null?void 0:t.layerType)==="Voxel"?{className:"VoxelLayer"}:{className:"GroupLayer"}):{className:"GroupLayer"}})}async function F(e){if(await e.load(),f(e,"Map Notes"))return{className:"MapNotesLayer"};if(f(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return u(r)===1?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function K(e){var r,t,n;await e.load();const a=(r=(t=e.typeKeywords)==null?void 0:t.map(L=>L.toLowerCase()))!=null?r:[];if(a.indexOf("elevation 3d layer")>-1)return{className:"ElevationLayer"};if(a.indexOf("tiled imagery")>-1)return{className:"ImageryTileLayer"};const o=await e.fetchData(),s=o==null?void 0:o.layerType;return s==="ArcGISTiledImageServiceLayer"?{className:"ImageryTileLayer"}:s==="ArcGISImageServiceLayer"?{className:"ImageryLayer"}:((n=(await c(e.url)).cacheType)==null?void 0:n.toLowerCase())==="map"?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function x(){return{className:"StreamLayer"}}function D(){return{className:"VectorTileLayer"}}function G(){return{className:"KMLLayer"}}function W(){return{className:"WFSLayer"}}function V(){return{className:"WMSLayer"}}function A(){return{className:"WMTSLayer"}}function B(){return{className:"StreamLayer"}}function E(e){return c(e.url).then(r=>r.tileInfo)}function d(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then(()=>e.fetchData()).then(async r=>e.type==="Feature Service"?i(r=await S(r,e.url)):u(r)>0?i(r):c(e.url).then(i))}function i(e){return u(e)===1&&{id:v(e)}}export{z as fromItem,M as selectLayerClassPath};
