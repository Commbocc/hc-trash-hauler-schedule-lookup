import{a4 as se,Y as V,es as ie,eu as le,an as oe,ao as ae,ap as ne,ex as ue,ew as pe,aq as ce,as as M,U as _,O as P,a3 as b,a8 as z,bi as he,h as U,o as J,$ as K,q as c,u as h,M as X,g as ye,ad as de,ai as fe,x as me,X as ge,g7 as Ae,fJ as H,e5 as j,d9 as Y,a9 as Z,b6 as Se,g8 as ee,t as N,av as ve,r as xe,bj as _e}from"./entry.a426b012.js";import{s as we}from"./ArcGISCachedService.0490fc0b.js";import{S as C}from"./TileInfo.f3323275.js";import{n as Ie,z as be}from"./TilemapCache.d56391a8.js";import{e as te}from"./TileKey.41e5db14.js";import{o as Ue}from"./jsonContext.3812ec14.js";import{l as $e}from"./StyleRepository.f596ebac.js";import{o as $,l as G}from"./context-util.460ae5d0.js";import"./byteSizeEstimations.4dc27031.js";import"./enums2.2149e694.js";import"./enums.ad15c731.js";import"./Geometry.daada628.js";import"./aaBoundingRect.6a4b2723.js";import"./VertexElementDescriptor.b51b5c8c.js";import"./colorUtils.0c057879.js";var Pe=Object.defineProperty,Te=Object.defineProperties,Re=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,Ee=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable,F=(e,t,r)=>t in e?Pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))Ee.call(t,r)&&F(e,r,t[r]);if(k)for(var r of k(t))Oe.call(t,r)&&F(e,r,t[r]);return e},v=(e,t)=>Te(e,Re(t));let E=null;function Le(e){if(E)return E;const t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return E=new Promise(r=>{const s=new Image;s.onload=()=>{s.onload=s.onerror=null,r(s.width>0&&s.height>0)},s.onerror=()=>{s.onload=s.onerror=null,r(!1)},s.src="data:image/webp;base64,"+t[e]}),E}const Me=se.getLogger("esri.layers.support.SpriteSource"),Be=1.15;class W{constructor(t,r,s,i){this.baseURL=t,this.devicePixelRatio=r,this.maxTextureSize=s,this._spriteImageFormat=i,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}get spriteNames(){const t=[];for(const r in this._spritesData)t.push(r);return t.sort(),t}getSpriteInfo(t){return this._spritesData[t]}async load(t){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(t),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}_loadSprites(t){this._isRetina=this.devicePixelRatio>Be;const r=P(this.baseURL),s=r.query?"?"+ge(r.query):"",i=this._isRetina?"@2x":"",l=`${r.path}${i}.${this._spriteImageFormat}${s}`,o=`${r.path}${i}.json${s}`;return Promise.all([_(o,t),_(l,y({responseType:"image"},t))]).then(([a,n])=>{const u=Object.keys(a.data);if(!u||u.length===0||u.length===1&&u[0]==="_ssl"||!n||!n.data)return this._spritesData=this.image=null,this.width=this.height=0,Promise.resolve(null);this._spritesData=a.data;const d=n.data,S=Math.max(this.maxTextureSize,4096);if(d.width>S||d.height>S){const A=`Sprite resource for style ${r.path} is bigger than the maximum allowed of ${S} pixels}`;throw Me.error(A),new J("SpriteSource",A)}this.width=d.width,this.height=d.height;const f=document.createElement("canvas"),m=f.getContext("2d");f.width=d.width,f.height=d.height,m.drawImage(d,0,0,d.width,d.height);const T=m.getImageData(0,0,d.width,d.height),g=new Uint8Array(T.data);let R;for(let A=0;A<g.length;A+=4)R=g[A+3]/255,g[A]=g[A]*R,g[A+1]=g[A+1]*R,g[A+2]=g[A+2]*R;this.image=g})}}class De{constructor(t){this.url=t}async fetchTileIndex(){return this._tileIndexPromise||(this._tileIndexPromise=_(this.url).then(t=>t.data.index)),this._tileIndexPromise}async dataKey(t,r){const s=await this.fetchTileIndex();return Z(r),this._getIndexedDataKey(s,t)}_getIndexedDataKey(t,r){const s=[r];if(r.level<0||r.row<0||r.col<0||r.row>>r.level>0||r.col>>r.level>0)return null;let i=r;for(;i.level!==0;)i=new te(i.level-1,i.row>>1,i.col>>1,i.world),s.push(i);let l,o,a=t,n=s.pop();if(a===1)return n;for(;s.length;)if(l=s.pop(),o=(1&l.col)+((1&l.row)<<1),a){if(a[o]===0){n=null;break}if(a[o]===1){n=l;break}n=l,a=a[o]}return n}}class je{constructor(t,r){this._tilemap=t,this._tileIndexUrl=r}async fetchTileIndex(t){return this._tileIndexPromise||(this._tileIndexPromise=_(this._tileIndexUrl,{query:y({},t==null?void 0:t.query)}).then(r=>r.data.index)),this._tileIndexPromise}dataKey(t,r){const{level:s,row:i,col:l}=t,o=new te(t);return this._tilemap.fetchAvailabilityUpsample(s,i,l,o,r).then(()=>(o.world=t.world,o)).catch(a=>{if(_e(a))throw a;return null})}}const O=new Map;function Ne(e,t,r,s,i){return Ce(e.replace(/\{z\}/gi,t.toString()).replace(/\{y\}/gi,r.toString()).replace(/\{x\}/gi,s.toString()),i)}function Ce(e,t){const r=O.get(e);if(r)return r.then(i=>U(i));const s=_(e,y({responseType:"array-buffer"},t)).then(({data:i})=>(O.delete(e),i)).catch(i=>{throw O.delete(e),i});return O.set(e,s),s}class Ve{constructor(t,r,s){this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.name=t,this.sourceUrl=r;const i=P(this.sourceUrl),l=U(s),o=l.tiles;if(i)for(let f=0;f<o.length;f++){const m=P(o[f]);m&&(H(m.path)||(m.path=j(i.path,m.path)),o[f]=b(m.path,y(y({},i.query),m.query)))}this.tileServers=o;const a=s.capabilities&&s.capabilities.split(",").map(f=>f.toLowerCase().trim()),n=(s==null?void 0:s.exportTilesAllowed)===!0,u=(a==null?void 0:a.includes("tilemap"))===!0,d=n&&s.hasOwnProperty("maxExportTilesCount")?s.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:n,supportsTileMap:u},exportTiles:n?{maxExportTilesCount:+d}:null},this.tileInfo=Ie(l.tileInfo,l,null,{ignoreMinMaxLOD:!0});const S=s.tileMap?b(j(i.path,s.tileMap),i.query):null;u?(this.type="vector-tile",this.tilemap=new je(new be({layer:{parsedUrl:i,tileInfo:this.tileInfo,type:"vector-tile",tileServers:this.tileServers}}),S)):S&&(this.tilemap=new De(S)),this.fullExtent=X.fromJSON(s.fullExtent)}destroy(){}async getRefKey(t,r){var s,i;return(s=(i=this.tilemap)==null?void 0:i.dataKey(t,r))!=null?s:t}requestTile(t,r,s,i){const l=this.tileServers[r%this.tileServers.length];return Ne(l,t,r,s,i)}isCompatibleWith(t){const r=this.tileInfo,s=t.tileInfo;if(!r.spatialReference.equals(s.spatialReference)||!r.origin.equals(s.origin)||Math.round(r.dpi)!==Math.round(s.dpi))return!1;const i=r.lods,l=s.lods,o=Math.min(i.length,l.length);for(let a=0;a<o;a++){const n=i[a],u=l[a];if(n.level!==u.level||Math.round(n.scale)!==Math.round(u.scale))return!1}return!0}}const B=V.defaults&&V.defaults.io.corsEnabledServers;async function Ge(e,t){const r={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[s,i]=typeof e=="string"?[e,null]:[null,e.jsonUrl];await x(r,"esri",e,i,t);const l={layerDefinition:r.validatedSource,url:s,serviceUrl:r.sourceUrl,style:r.style,styleUrl:r.styleUrl,spriteUrl:r.style.sprite&&I(r.styleBase,r.style.sprite),spriteFormat:r.spriteFormat,glyphsUrl:r.style.glyphs&&I(r.styleBase,r.style.glyphs),sourceNameToSource:r.sourceNameToSource,primarySourceName:r.primarySourceName};return w(l.spriteUrl),w(l.glyphsUrl),l}function w(e){if(!e)return;const t=Ae(e);B&&!B.includes(t)&&B.push(t)}function I(...e){let t;for(let r=0;r<e.length;++r)z(e[r])?t&&(t=t.split("://")[0]+":"+e[r].trim()):t=H(e[r])?e[r]:j(t,e[r]);return Y(t)}async function x(e,t,r,s,i){let l,o,a;if(Z(i),typeof r=="string"){const u=K(r);w(u),a=await _(u,v(y({},i),{responseType:"json",query:y({f:"json"},i==null?void 0:i.query)})),a.ssl&&(l&&(l=l.replace(/^http:/i,"https:")),o&&(o=o.replace(/^http:/i,"https:"))),l=u,o=u}else a={data:r},l=r.jsonUrl||null,o=s;const n=a.data;return re(n)?(e.styleUrl=l||null,Fe(e,n,o,i)):ke(n)?e.sourceUrl?q(e,n,o,!1,t,i):(e.sourceUrl=l||null,q(e,n,o,!0,t,i)):Promise.reject("You must specify the URL or the JSON for a service or for a style.")}function re(e){return!!e.sources}function ke(e){return!re(e)}async function Fe(e,t,r,s){const i=r?Se(r):ee();e.styleBase=i,e.style=t,e.styleUrl&&w(e.styleUrl),t["sprite-format"]&&t["sprite-format"].toLowerCase()==="webp"&&(e.spriteFormat="webp");const l=[];if(t.sources&&t.sources.esri){const o=t.sources.esri;o.url?await x(e,"esri",I(i,o.url),void 0,s):l.push(x(e,"esri",o,i,s))}for(const o of Object.keys(t.sources))o!=="esri"&&t.sources[o].type==="vector"&&(t.sources[o].url?l.push(x(e,o,I(i,t.sources[o].url),void 0,s)):t.sources[o].tiles&&l.push(x(e,o,t.sources[o],i,s)));await Promise.all(l)}async function q(e,t,r,s,i,l){const o=r?Y(r)+"/":ee(),a=We(t,o),n=new Ve(i,b(o,l==null?void 0:l.query),a);if(!s&&e.primarySourceName in e.sourceNameToSource){const u=e.sourceNameToSource[e.primarySourceName];if(!u.isCompatibleWith(n))return Promise.resolve();n.fullExtent!=null&&(u.fullExtent!=null?u.fullExtent.union(n.fullExtent):u.fullExtent=n.fullExtent.clone()),u.tileInfo.lods.length<n.tileInfo.lods.length&&(u.tileInfo=n.tileInfo)}if(s?(e.sourceBase=o,e.source=t,e.validatedSource=a,e.primarySourceName=i,e.sourceUrl&&w(e.sourceUrl)):w(o),e.sourceNameToSource[i]=n,!e.style)return t.defaultStyles==null?Promise.reject():typeof t.defaultStyles=="string"?x(e,"",I(o,t.defaultStyles,"root.json"),void 0,l):x(e,"",t.defaultStyles,I(o,"root.json"),l)}function We(e,t){if(e.hasOwnProperty("tileInfo"))return e;const r={xmin:-20037507067161843e-9,ymin:-20037507067161843e-9,xmax:20037507067161843e-9,ymax:20037507067161843e-9,spatialReference:{wkid:102100}},s=512;let i=78271.51696400007,l=2958287637957775e-7;const o=[],a=e.hasOwnProperty("minzoom")?+e.minzoom:0,n=e.hasOwnProperty("maxzoom")?+e.maxzoom:22;for(let u=0;u<=n;u++)u>=a&&o.push({level:u,scale:l,resolution:i}),i/=2,l/=2;for(const u of e.tiles)w(I(t,u));return{capabilities:"TilesOnly",initialExtent:r,fullExtent:r,minScale:0,maxScale:0,tiles:e.tiles,tileInfo:{rows:s,cols:s,dpi:96,format:"pbf",origin:{x:-20037508342787e-6,y:20037508342787e-6},lods:o,spatialReference:{wkid:102100}}}}const L=1e-6;function qe(e,t){if(e===t)return!0;if(!e&&t!=null||e!=null&&!t||!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;const r=e.origin,s=t.origin;if(Math.abs(r.x-s.x)>=L||Math.abs(r.y-s.y)>=L)return!1;let i,l;e.lods[0].scale>t.lods[0].scale?(i=e,l=t):(l=e,i=t);for(let o=i.lods[0].scale;o>=l.lods[l.lods.length-1].scale-L;o/=2)if(Math.abs(o-l.lods[0].scale)<L)return!0;return!1}function Qe(e,t){if(e===t)return e;if(!e&&t!=null)return t;if(e!=null&&!t)return e;const r=e.size[0],s=e.format,i=e.dpi,l={x:e.origin.x,y:e.origin.y},o=e.spatialReference.toJSON(),a=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],n=e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1],u=a.scale,d=a.resolution,S=n.scale,f=[];let m=u,T=d,g=0;for(;m>S;)f.push({level:g,resolution:T,scale:m}),g++,m/=2,T/=2;return new C({size:[r,r],dpi:i,format:s||"pbf",origin:l,lods:f,spatialReference:o})}let D;function Q(){return D||(D=Xe()),D}class ze{constructor(){this.available=!1,this.majorPerformanceCaveat=!1,this.maxTextureSize=0,this.supportsVertexShaderSamplers=!1,this.supportsHighPrecisionFragment=!1}}class Je extends ze{constructor(){super(...arguments),this.type=$.WEBGL1,this.supportsElementIndexUint=!1,this.supportsStandardDerivatives=!1,this.supportsInstancedArrays=!1,this.supportsTextureFloat=!1}}function Ke(e,t){if(e===$.WEBGL1&&typeof WebGLRenderingContext===void 0||e===$.WEBGL2&&typeof WebGL2RenderingContext===void 0)return null;const r=document.createElement("canvas");if(!r)return null;let s=G(r,e,{failIfMajorPerformanceCaveat:!0});if(N(s)&&(s=G(r,e),xe(s)&&(t.majorPerformanceCaveat=!0)),N(s))return s;if(e===$.WEBGL1){const l=s.getParameter(s.VERSION),o=l==null?void 0:l.match(/^WebGL\s+([\d.]*)/);if(o){const a=parseFloat(o[1]);t.available=a>=.94}}else t.available=!0;t.maxTextureSize=s.getParameter(s.MAX_TEXTURE_SIZE),t.supportsVertexShaderSamplers=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0;const i=s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT);return i&&(t.supportsHighPrecisionFragment=i.precision>0),s}function Xe(){const e=new Je,t=Ke($.WEBGL1,e);return N(t)||(e.supportsElementIndexUint=t.getExtension("OES_element_index_uint")!==null,e.supportsStandardDerivatives=t.getExtension("OES_standard_derivatives")!==null,e.supportsInstancedArrays=t.getExtension("ANGLE_instanced_arrays")!==null,e.supportsTextureFloat=t.getExtension("OES_texture_float")!==null),e}let p=class extends ie(le(we(oe(ae(ne(ue(pe(ce(ve))))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.type="vector-tile",this.url=null,this.symbolCollisionBoxesVisible=!1,this.path=null}normalizeCtorArgs(e,t){return typeof e=="string"?y({url:e},t):e}destroy(){if(this.sourceNameToSource)for(const e of Object.values(this.sourceNameToSource))e==null||e.destroy();this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(globalThis.devicePixelRatio||1,e)}load(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch(M).then(async()=>{if(!this.portalItem||!this.portalItem.id)return;const r=`${this.portalItem.itemUrl}/resources/styles/root.json`;(await _(r,v(y({},e),{query:v(y({f:"json"},this.customParameters),{token:this.apiKey})}))).data&&this.read({url:r},Ue(this.portalItem))}).catch(M).then(()=>this._loadStyle(e));return this.addResolvingPromise(t),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e&&e.serviceUrl&&P(e.serviceUrl);if(!t)return null;const r=this._getDefaultAttribution(t.path);return r?b(r,v(y({},this.customParameters),{token:this.apiKey})):null}get capabilities(){const e=this.primarySource;return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){var e;return((e=this.primarySource)==null?void 0:e.fullExtent)||null}get parsedUrl(){return this.serviceUrl?P(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){return this.tileInfo&&this.tileInfo.spatialReference||null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(e,t){e&&z(e)&&(e=`https:${e}`),t.styleUrl=e}get tileInfo(){var e;const t=[];for(const s in this.sourceNameToSource)t.push(this.sourceNameToSource[s]);let r=((e=this.primarySource)==null?void 0:e.tileInfo)||new C;if(t.length>1)for(let s=0;s<t.length;s++)qe(r,t[s].tileInfo)&&(r=Qe(r,t[s].tileInfo));return r}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}async loadSpriteSource(e=1,t){if(!this._spriteSourceMap.has(e)){var r;const s=Q().maxTextureSize,i=(r=this.currentStyleInfo)!=null&&r.spriteUrl?b(this.currentStyleInfo.spriteUrl,v(y({},this.customParameters),{token:this.apiKey})):null,l=new W(i,e,s,this.currentStyleInfo.spriteFormat);await l.load(t),this._spriteSourceMap.set(e,l)}return Promise.resolve(this._spriteSourceMap.get(e))}async setSpriteSource(e,t="png",r=1,s){const i=Q().maxTextureSize,l=e?b(e,v(y({},this.customParameters),{token:this.apiKey})):null;if(!l)return null;const o=new W(l,r,i,t);try{return await o.load(s),this._spriteSourceMap.clear(),this._spriteSourceMap.set(r,o),this.currentStyleInfo.spriteUrl=l,this.emit("spriteSource-change",{spriteSource:o}),o}catch(a){M(a)}return null}async loadStyle(e,t){var r;const s=e||this.style||this.url;return this._loadingTask&&typeof s=="string"&&this.url===s||((r=this._loadingTask)==null||r.abort(),this._loadingTask=he(i=>(this._spriteSourceMap.clear(),this._getSourceAndStyle(s,{signal:i})),t)),this._loadingTask.promise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return U(this.styleRepository.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const s=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||s})}getStyleLayer(e){return U(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}getLayoutProperties(e){return U(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}write(e,t){return t!=null&&t.origin&&!this.styleUrl?(t.messages&&t.messages.push(new J("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}getTileUrl(e,t,r){return null}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await Ge(e,v(y({},t),{query:v(y({},this.customParameters),{token:this.apiKey})}));r.spriteFormat==="webp"&&(await Le("lossy")||(r.spriteFormat="png")),this._set("currentStyleInfo",y({},r)),typeof e=="string"?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySource",r.sourceNameToSource[r.primarySourceName]),this._set("styleRepository",new $e(r.style)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style")}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const s=t[2]&&t[2].toLowerCase();if(!s)return;const i=t[1]||"";for(const l of r)if(l.toLowerCase().includes(s))return K(`//static.arcgis.com/attribution/Vector${i}/${l}`)}async _loadStyle(e){var t,r;return(t=(r=this._loadingTask)==null?void 0:r.promise)!=null?t:this.loadStyle(null,e)}};c([h({readOnly:!0})],p.prototype,"attributionDataUrl",null),c([h({type:["show","hide"]})],p.prototype,"listMode",void 0),c([h({readOnly:!0,json:{read:!1}})],p.prototype,"capabilities",null),c([h({readOnly:!0})],p.prototype,"currentStyleInfo",void 0),c([h({json:{read:!1},readOnly:!0,type:X})],p.prototype,"fullExtent",null),c([h()],p.prototype,"style",void 0),c([h({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],p.prototype,"isReference",void 0),c([h({type:["VectorTileLayer"]})],p.prototype,"operationalLayerType",void 0),c([h({readOnly:!0})],p.prototype,"parsedUrl",null),c([h({readOnly:!0})],p.prototype,"serviceUrl",null),c([h({type:ye,readOnly:!0})],p.prototype,"spatialReference",null),c([h({readOnly:!0})],p.prototype,"styleRepository",void 0),c([h({readOnly:!0})],p.prototype,"sourceNameToSource",void 0),c([h({readOnly:!0})],p.prototype,"primarySource",void 0),c([h({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],p.prototype,"styleUrl",null),c([de(["portal-item","web-document"],"styleUrl")],p.prototype,"writeStyleUrl",null),c([h({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:C})],p.prototype,"tileInfo",null),c([h({json:{read:!1},readOnly:!0,value:"vector-tile"})],p.prototype,"type",void 0),c([h({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],p.prototype,"url",void 0),c([h({readOnly:!0})],p.prototype,"version",void 0),c([fe("version",["version","currentVersion"])],p.prototype,"readVersion",null),c([h({type:Boolean})],p.prototype,"symbolCollisionBoxesVisible",void 0),c([h({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],p.prototype,"path",void 0),p=c([me("esri.layers.VectorTileLayer")],p);const ht=p;export{ht as default};