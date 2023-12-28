import{a4 as $,an as b,ao as T,ap as O,aq as P,ar as I,r as p,o as L,as as x,U as y,X as E,_ as f,a9 as m,q as i,u as o,ai as D,e as j,at as V,au as k,x as A,av as C,aw as M,K as N,ax as U}from"./entry.a426b012.js";import{s as q}from"./ArcGISCachedService.0490fc0b.js";import"./TilemapCache.d56391a8.js";import"./TileInfo.f3323275.js";import"./byteSizeEstimations.4dc27031.js";import"./aaBoundingRect.6a4b2723.js";var z=Object.defineProperty,H=Object.defineProperties,J=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,_=(r,e,t)=>e in r?z(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,c=(r,e)=>{for(var t in e||(e={}))F.call(e,t)&&_(r,t,e[t]);if(v)for(var t of v(e))K.call(e,t)&&_(r,t,e[t]);return r},S=(r,e)=>H(r,J(e));const R=$.getLogger("esri.core.workers.WorkerHandle");class W{constructor(e,t,s,l={}){this._mainMethod=t,this._listeners=[],this._promise=M(e,S(c({},l),{schedule:s})).then(h=>{if(this._thread===void 0){this._thread=h,this._promise=null,l.hasInitialize&&this.broadcast({},"initialize");for(const u of this._listeners)this._connectListener(u)}else h.close()}),this._promise.catch(h=>R.error(`Failed to initialize ${e} worker: ${h}`))}on(e,t){const s={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(s),this._connectListener(s),N(()=>{s.removed=!0,U(this._listeners,s),this._thread&&p(s.threadHandle)&&s.threadHandle.remove()})}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,s){if(this._thread){const l=this.getTransferList(t,e);return this._thread.invoke(e,t,{transferList:l,signal:s})}return this._promise?this._promise.then(()=>(m(s),this.invokeMethod(e,t,s))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then(()=>{}):this._promise?this._promise.then(()=>this.broadcast(e,t)):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then(t=>{e.removed||(e.threadHandle=t)})}}class g extends W{constructor(e=null){super("LercWorker","_decode",e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,t,s){return e&&e.byteLength!==0?this.invoke({buffer:e,options:t},s):Promise.resolve(null)}getTransferList(e){return[e.buffer]}release(){--this.ref<=0&&(d.forEach((e,t)=>{e===this&&d.delete(t)}),this.destroy())}}const d=new Map;function G(r=null){let e=d.get(j(r));return e||(p(r)?(e=new g(t=>r.schedule(t)),d.set(r,e)):(e=new g,d.set(null,e))),++e.ref,e}const w=$.getLogger("esri.layers.ElevationLayer");let a=class extends q(b(T(O(P(C))))){constructor(...r){super(...r),this.copyright=null,this.heightModelInfo=null,this.path=null,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=G()}normalizeCtorArgs(r,e){return typeof r=="string"?c({url:r},e):r}destroy(){this._lercDecoder=I(this._lercDecoder)}set minScale(r){this.constructed&&w.warn(`${this.declaredClass}.minScale support has been removed (since 4.5)`)}get minScale(){}set maxScale(r){this.constructed&&w.warn(`${this.declaredClass}.maxScale support has been removed (since 4.5)`)}get maxScale(){}readVersion(r,e){let t=e.currentVersion;return t||(t=9.3),t}load(r){const e=p(r)?r.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:t=>{for(let s=0;s<t.typeKeywords.length;s++)if(t.typeKeywords[s].toLowerCase()==="elevation 3d layer")return!0;throw new L("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},r).catch(x).then(()=>this._fetchImageService(e))),Promise.resolve(this)}fetchTile(r,e,t,s){const l=p((s=s||{signal:null}).signal)?s.signal:s.signal=new AbortController().signal,h={responseType:"array-buffer",signal:l},u={noDataValue:s.noDataValue,returnFileInfo:!0};return this.load().then(()=>this._fetchTileAvailability(r,e,t,s)).then(()=>y(this.getTileUrl(r,e,t),h)).then(n=>this._lercDecoder.decode(n.data,u,l)).then(n=>({values:n.pixelData,width:n.width,height:n.height,maxZError:n.fileInfo.maxZError,noDataValue:n.noDataValue,minValue:n.minValue,maxValue:n.maxValue}))}getTileUrl(r,e,t){const s=!this.tilemapCache&&this.supportsBlankTile,l=E(S(c({},this.parsedUrl.query),{blankTile:!s&&null}));return`${this.parsedUrl.path}/tile/${r}/${e}/${t}${l?"?"+l:""}`}async queryElevation(r,e){const{ElevationQuery:t}=await f(()=>import("./ElevationQuery.46b335c5.js"),["./ElevationQuery.46b335c5.js","./entry.a426b012.js","./entry.5fbb926e.css","./projection.b5b0482a.js","./aaBoundingRect.6a4b2723.js"],import.meta.url);return m(e),new t().query(this,r,e)}async createElevationSampler(r,e){const{ElevationQuery:t}=await f(()=>import("./ElevationQuery.46b335c5.js"),["./ElevationQuery.46b335c5.js","./entry.a426b012.js","./entry.5fbb926e.css","./projection.b5b0482a.js","./aaBoundingRect.6a4b2723.js"],import.meta.url);return m(e),new t().createSampler(this,r,e)}_fetchTileAvailability(r,e,t,s){return this.tilemapCache?this.tilemapCache.fetchAvailability(r,e,t,s):Promise.resolve("unknown")}async _fetchImageService(r){if(this.sourceJSON)return this.sourceJSON;const e={query:c({f:"json"},this.parsedUrl.query),responseType:"json",signal:r},t=await y(this.parsedUrl.path,e);t.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};i([o({json:{read:{source:"copyrightText"}}})],a.prototype,"copyright",void 0),i([o({readOnly:!0,type:V})],a.prototype,"heightModelInfo",void 0),i([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),i([o({type:["show","hide"]})],a.prototype,"listMode",void 0),i([o({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],a.prototype,"minScale",null),i([o({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],a.prototype,"maxScale",null),i([o({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],a.prototype,"opacity",void 0),i([o({type:["ArcGISTiledElevationServiceLayer"]})],a.prototype,"operationalLayerType",void 0),i([o()],a.prototype,"sourceJSON",void 0),i([o({json:{read:!1},value:"elevation",readOnly:!0})],a.prototype,"type",void 0),i([o(k)],a.prototype,"url",void 0),i([o()],a.prototype,"version",void 0),i([D("version",["currentVersion"])],a.prototype,"readVersion",null),a=i([A("esri.layers.ElevationLayer")],a),a.prototype.fetchTile.__isDefault__=!0;const te=a;export{te as default};
