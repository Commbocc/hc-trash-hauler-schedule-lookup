import{I as W,a9 as z,ak as H,dY as F,r as w,fX as V,h as k,M as I,bh as G,aa as x,_ as A,C as l,E as a,aW as U,fY as q,ap as P,G as N,eC as D,eF as Y,eE as B,aF as Q,aG as X,aH as Z,aM as ee,bI as te,aJ as re,ai as se,aL as le,l as v,J as L,a8 as oe,a3 as ie,cf as M,cr as E,fZ as g,cs as S}from"./index.2f57b5df.js";import{p as ae}from"./CollectionFlattener.bdeed31d.js";var ne=Object.defineProperty,j=Object.getOwnPropertySymbols,ue=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable,C=(e,r,t)=>r in e?ne(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,pe=(e,r)=>{for(var t in r||(r={}))ue.call(r,t)&&C(e,t,r[t]);if(j)for(var t of j(r))ye.call(r,t)&&C(e,t,r[t]);return e};const fe={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function R(e){const r=e.folders||[],t=r.slice(),s=new Map,i=new Map,p=new Map,b=new Map,m=new Map,f={esriGeometryPoint:i,esriGeometryPolyline:p,esriGeometryPolygon:b};(e.featureCollection&&e.featureCollection.layers||[]).forEach(o=>{const d=v(o);d.featureSet.features=[];const y=o.featureSet.geometryType;s.set(y,d);const $=o.layerDefinition.objectIdField;y==="esriGeometryPoint"?_(i,$,o.featureSet.features):y==="esriGeometryPolyline"?_(p,$,o.featureSet.features):y==="esriGeometryPolygon"&&_(b,$,o.featureSet.features)}),e.groundOverlays&&e.groundOverlays.forEach(o=>{m.set(o.id,o)}),r.forEach(o=>{o.networkLinkIds.forEach(d=>{const y=de(d,o.id,e.networkLinks);y&&t.push(y)})}),t.forEach(o=>{if(o.featureInfos){o.points=v(s.get("esriGeometryPoint")),o.polylines=v(s.get("esriGeometryPolyline")),o.polygons=v(s.get("esriGeometryPolygon")),o.mapImages=[];for(const d of o.featureInfos)switch(d.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const y=f[d.type].get(d.id);y&&o[fe[d.type]].featureSet.features.push(y);break}case"GroundOverlay":{const y=m.get(d.id);y&&o.mapImages.push(y);break}}o.fullExtent=O([o])}});const h=O(t);return{folders:r,sublayers:t,extent:h}}function T(e,r,t,s){const i=L&&L.findCredential(e);e=oe(e,{token:i&&i.token});const p=ie.kmlServiceUrl;return A(p,{query:{url:e,model:"simple",folders:"",refresh:t!==0||void 0,outSR:JSON.stringify(r)},responseType:"json",signal:s})}function J(e,r,t=null,s=[]){const i=[],p={},b=r.sublayers,m=r.folders.map(f=>f.id);return b.forEach(f=>{const h=new e;if(t?h.read(f,t):h.read(f),s.length&&m.indexOf(h.id)>-1&&(h.visible=s.indexOf(h.id)!==-1),p[f.id]=h,f.parentFolderId!=null&&f.parentFolderId!==-1){const o=p[f.parentFolderId];o.sublayers||(o.sublayers=[]),o.sublayers.unshift(h)}else i.unshift(h)}),i}function _(e,r,t){t.forEach(s=>{e.set(s.attributes[r],s)})}function he(e,r){let t;return r.some(s=>s.id===e&&(t=s,!0)),t}function de(e,r,t){const s=he(e,t);return s&&(s.parentFolderId=r,s.networkLink=s),s}function O(e){const r=M(E),t=M(E);for(const s of e){if(s.polygons&&s.polygons.featureSet&&s.polygons.featureSet.features)for(const i of s.polygons.featureSet.features)g(r,i.geometry),S(t,r);if(s.polylines&&s.polylines.featureSet&&s.polylines.featureSet.features)for(const i of s.polylines.featureSet.features)g(r,i.geometry),S(t,r);if(s.points&&s.points.featureSet&&s.points.featureSet.features)for(const i of s.points.featureSet.features)g(r,i.geometry),S(t,r);if(s.mapImages)for(const i of s.mapImages)g(r,i.extent),S(t,r)}return V(t,E)?null:{xmin:t[0],ymin:t[1],zmin:t[2],xmax:t[3],ymax:t[4],zmax:t[5],spatialReference:k.WGS84}}var c;let u=c=class extends W.EventedMixin(z(H)){constructor(){super(...arguments),this._sublayersHandles=null,this.description=null,this.id=null,this.networkLink=null,this.title=null,this.sourceJSON=null,this.fullExtent=null}initialize(){F(()=>this.networkLink).then(()=>F(()=>this.visible===!0)).then(()=>this.load())}load(e){if(!this.networkLink||this.networkLink.viewFormat)return;const r=w(e)?e.signal:null,t=this._fetchService(this._get("networkLink").href,r).then(s=>{const i=O(s.sublayers);this.fullExtent=I.fromJSON(i),this.sourceJSON=s;const p=G(x.ofType(c),J(c,s));this.sublayers?this.sublayers.addMany(p):this.sublayers=p,this.layer.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(t),Promise.resolve(this)}set sublayers(e){const r=this._get("sublayers");r&&(r.forEach(t=>{t.parent=null,t.layer=null}),this._sublayersHandles.forEach(t=>t.remove()),this._sublayersHandles=null),e&&(e.forEach(t=>{t.parent=this,t.layer=this.layer}),this._sublayersHandles=[e.on("after-add",({item:t})=>{t.parent=this,t.layer=this.layer}),e.on("after-remove",({item:t})=>{t.parent=null,t.layer=null})]),this._set("sublayers",e)}castSublayers(e){return G(x.ofType(c),e)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,r){return!!r.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(r=>r.layer=e)}_fetchService(e,r){return T(e,this.layer.outSpatialReference,this.layer.refreshInterval,r).then(t=>R(t.data))}};l([a()],u.prototype,"description",void 0),l([a()],u.prototype,"id",void 0),l([a({readOnly:!0,value:null})],u.prototype,"networkLink",void 0),l([a({json:{write:{allowNull:!0}}})],u.prototype,"parent",void 0),l([a({value:null,json:{write:{allowNull:!0}}})],u.prototype,"sublayers",null),l([U("sublayers")],u.prototype,"castSublayers",null),l([a({value:null,json:{read:{source:"name",reader:e=>q(e)}}})],u.prototype,"title",void 0),l([a({value:!0})],u.prototype,"visible",null),l([P("visible",["visibility"])],u.prototype,"readVisible",null),l([a()],u.prototype,"sourceJSON",void 0),l([a({value:null})],u.prototype,"layer",null),l([a({type:I})],u.prototype,"fullExtent",void 0),u=c=l([N("esri.layers.support.KMLSublayer")],u);const K=u,ce=["kml","xml"];let n=class extends D(Y(B(Q(X(Z(ee)))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new ae({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.sublayers}),this.outSpatialReference=k.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.watch("sublayers",(e,r)=>{r&&r.forEach(t=>{t.parent=null,t.layer=null}),e&&e.forEach(t=>{t.parent=this,t.layer=this})},!0),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))}normalizeCtorArgs(e,r){return typeof e=="string"?pe({url:e},r):e}readSublayersFromItemOrWebMap(e,r){this._visibleFolders=r.visibleFolders}readSublayers(e,r,t){return J(K,r,t,this._visibleFolders)}writeSublayers(e,r){const t=[],s=e.toArray();for(;s.length;){const i=s[0];i.networkLink||(i.visible&&t.push(i.id),i.sublayers&&s.push(...i.sublayers.toArray())),s.shift()}r.visibleFolders=t}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?te(this.url,ce)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,r=[],t=s=>{s.visible&&(r.push(s),s.sublayers&&s.sublayers.forEach(t))};return e&&e.forEach(t),r}get fullExtent(){return this._recomputeFullExtent()}load(e){const r=w(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).catch(re).then(()=>this._fetchService(r))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const r=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:T(this.url,this.outSpatialReference,this.refreshInterval,e)),t=R(r.data);t&&this.read(t,{origin:"service"})}_recomputeFullExtent(){let e=null;w(this.extent)&&(e=this.extent.clone());const r=t=>{if(t.sublayers)for(const s of t.sublayers.items)r(s),s.visible&&s.fullExtent&&(w(e)?e.union(s.fullExtent):e=s.fullExtent.clone())};return r(this),e}};l([a({readOnly:!0})],n.prototype,"allSublayers",void 0),l([a({type:k})],n.prototype,"outSpatialReference",void 0),l([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],n.prototype,"path",void 0),l([a({readOnly:!0,json:{read:!1,write:!1}})],n.prototype,"legendEnabled",void 0),l([a({type:["show","hide","hide-children"]})],n.prototype,"listMode",void 0),l([a({type:["KML"]})],n.prototype,"operationalLayerType",void 0),l([a({})],n.prototype,"resourceInfo",void 0),l([a({type:x.ofType(K),json:{write:{ignoreOrigin:!0}}})],n.prototype,"sublayers",void 0),l([P(["web-map","portal-item"],"sublayers",["visibleFolders"])],n.prototype,"readSublayersFromItemOrWebMap",null),l([P("service","sublayers",["sublayers"])],n.prototype,"readSublayers",null),l([se("sublayers")],n.prototype,"writeSublayers",null),l([a({readOnly:!0,json:{read:!1}})],n.prototype,"type",void 0),l([a({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],n.prototype,"title",null),l([a(le)],n.prototype,"url",void 0),l([a({readOnly:!0})],n.prototype,"visibleSublayers",null),l([a({type:I})],n.prototype,"extent",void 0),l([a()],n.prototype,"fullExtent",null),n=l([N("esri.layers.KMLLayer")],n);const ve=n;export{ve as default};
