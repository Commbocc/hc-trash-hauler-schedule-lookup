import{ae as m,bJ as v,ah as G,aa as M}from"./index.2f57b5df.js";import{a as o}from"./lazyLayerLoader.e6682034.js";import{selectLayerClassPath as A}from"./portalLayers.73bd8fa1.js";import"./layersLoader.ae874428.js";import"./jsonContext.b4f56bc5.js";var w=Object.defineProperty,b=Object.defineProperties,O=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,I=(e,r,a)=>r in e?w(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,_=(e,r)=>{for(var a in r||(r={}))W.call(r,a)&&I(e,a,r[a]);if(d)for(var a of d(r))F.call(r,a)&&I(e,a,r[a]);return e},C=(e,r)=>b(e,O(r));function V(e){return f(e,"notes")}function P(e){return f(e,"route")}function f(e,r){return!(!e.layerType||e.layerType!=="ArcGISFeatureLayer")&&e.featureCollectionType===r}async function B(e,r,a){if(!r)return;const t=[];for(const y of r){const i=R(y,a);y.layerType==="GroupLayer"?t.push(K(i,y,a)):t.push(i)}const n=await m(t);for(const y of n)!y.value||a.filter&&!a.filter(y.value)||e.add(y.value)}const h={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer"},D={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},U={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},x={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",OGCFeatureLayer:"OGCFeatureLayer",SubtypeGroupLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},E={ArcGISFeatureLayer:"FeatureLayer"},N={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function R(e,r){return j(await J(e,r),e,r)}async function j(e,r,a){const t=new e;return t.read(r,a.context),t.type==="group"&&T(r)&&await H(t,r,a.context),await v(t,a.context),t}async function J(e,r){const a=r.context,t=k(a);let n=e.layerType||e.type;!n&&r&&r.defaultLayerType&&(n=r.defaultLayerType);const y=t[n];let i=y?o[y]:o.UnknownLayer;if(g(e)){const s=a==null?void 0:a.portal;if(e.itemId){const L=new G({id:e.itemId,portal:s});await L.load();const l=(await A(L)).className||"UnknownLayer";i=o[l]}}else n==="ArcGISFeatureLayer"?V(e)?i=o.MapNotesLayer:P(e)?i=o.RouteLayer:T(e)&&(i=o.GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?i=o.WMTSLayer:n==="WFS"&&e.wfsInfo.version!=="2.0.0"&&(i=o.UnsupportedLayer);return i()}function T(e){var r,a,t;return e.layerType!=="ArcGISFeatureLayer"||g(e)?!1:((r=(a=e.featureCollection)==null||(t=a.layers)==null?void 0:t.length)!=null?r:0)>1}function g(e){return e.type==="Feature Collection"}function k(e){let r;if(e.origin==="web-scene")switch(e.layerContainerType){case"basemap":r=U;break;case"ground":r=D;break;default:r=h}else switch(e.layerContainerType){case"basemap":r=N;break;case"tables":r=E;break;default:r=x}return r}async function K(e,r,a){const t=new M,n=B(t,Array.isArray(r.layers)?r.layers:[],a),y=await e;if(await n,y.type==="group")return y.layers.addMany(t),y}async function H(e,r,a){const t=o.FeatureLayer,n=await t(),y=r.featureCollection,i=y.showLegend,s=y.layers.map((L,l)=>{var p,u;const c=new n;c.read(L,a);const S=C(_({},a),{ignoreDefaults:!0});return c.read({id:`${e.id}-sublayer-${l}`,visibility:(p=(u=r.visibleLayers)==null?void 0:u.includes(l))==null||p},S),i!=null&&c.read({showLegend:i},S),c});e.layers.addMany(s)}export{B as populateOperationalLayers};
