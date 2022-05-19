import{C as r,E as o,G as f,ap as S,fd as _,fe as b,ak as I,er as F,r as m,ar as q,M as N,aN as P,i as j,ez as $,h as C,V as J,dC as l,u as x}from"./index.2f57b5df.js";import{c as D}from"./clientSideDefaults.90fb55d8.js";import"./QueryEngineCapabilities.9e441dc1.js";var V=Object.defineProperty,k=Object.defineProperties,L=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,h=(t,e,i)=>e in t?V(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,u=(t,e)=>{for(var i in e||(e={}))E.call(e,i)&&h(t,i,e[i]);if(y)for(var i of y(e))T.call(e,i)&&h(t,i,e[i]);return t},R=(t,e)=>k(t,L(e));let n=class extends I{constructor(t){super(t),this.type="csv",this.refresh=F(async e=>{await this.load();const{extent:i,timeExtent:a}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=i,a&&(this.sourceJSON.timeInfo.timeExtent=[a.start,a.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(t){const e=m(t)?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){var t;(t=this._connection)==null||t.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(t,e={}){await this.load(e);const i=await this._connection.invoke("queryFeatures",t?t.toJSON():null,e);return q.fromJSON(i)}async queryFeaturesJSON(t,e={}){return await this.load(e),this._connection.invoke("queryFeatures",t?t.toJSON():null,e)}async queryFeatureCount(t,e={}){return await this.load(e),this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e)}async queryObjectIds(t,e={}){return await this.load(e),this._connection.invoke("queryObjectIds",t?t.toJSON():null,e)}async queryExtent(t,e={}){await this.load(e);const i=await this._connection.invoke("queryExtent",t?t.toJSON():null,e);return{count:i.count,extent:N.fromJSON(i.extent)}}async querySnapping(t,e={}){return await this.load(e),this._connection.invoke("querySnapping",t,e)}async _startWorker(t){this._connection=await P("CSVSourceWorker",{strategy:j("feature-layers-workers")?"dedicated":"local",signal:t});const{url:e,delimiter:i,fields:a,latitudeField:v,longitudeField:w,spatialReference:c,timeInfo:p}=this.loadOptions,d=await this._connection.invoke("load",{url:e,customParameters:this.customParameters,parsingOptions:{delimiter:i,fields:a==null?void 0:a.map(O=>O.toJSON()),latitudeField:v,longitudeField:w,spatialReference:c==null?void 0:c.toJSON(),timeInfo:p==null?void 0:p.toJSON()}},{signal:t});this.locationInfo=d.locationInfo,this.sourceJSON=d.layerDefinition,this.delimiter=d.delimiter}};r([o()],n.prototype,"type",void 0),r([o()],n.prototype,"loadOptions",void 0),r([o()],n.prototype,"customParameters",void 0),r([o()],n.prototype,"locationInfo",void 0),r([o()],n.prototype,"sourceJSON",void 0),r([o()],n.prototype,"delimiter",void 0),n=r([f("esri.layers.graphics.sources.CSVSource")],n);const g=n,W="CSVLayer";let s=class extends ${constructor(...t){super(...t),this.capabilities=D(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.portalItem=null,this.spatialReference=C.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(t,e){return typeof t=="string"?u({url:t},e):t}get isTable(){return this.loaded&&this.geometryType==null}readWebMapLabelsVisible(t,e){return e.showLabels!=null?e.showLabels:!!(e.layerDefinition&&e.layerDefinition.drawingInfo&&e.layerDefinition.drawingInfo.labelingInfo)}set url(t){if(!t)return void this._set("url",t);const e=J(t);this._set("url",e.path),e.query&&(this.customParameters=u(u({},this.customParameters),e.query))}async createGraphicsSource(t){const e=new g({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url},customParameters:this.customParameters});return this._set("source",e),await e.load({signal:t}),this.read({locationInfo:e.locationInfo,columnDelimiter:e.delimiter},{origin:"service",url:this.parsedUrl}),e}queryFeatures(t,e){return this.load().then(()=>this.source.queryFeatures(l.from(t)||this.createQuery())).then(i=>{if(i!=null&&i.features)for(const a of i.features)a.layer=a.sourceLayer=this;return i})}queryObjectIds(t,e){return this.load().then(()=>this.source.queryObjectIds(l.from(t)||this.createQuery()))}queryFeatureCount(t,e){return this.load().then(()=>this.source.queryFeatureCount(l.from(t)||this.createQuery()))}queryExtent(t,e){return this.load().then(()=>this.source.queryExtent(l.from(t)||this.createQuery()))}write(t,e){return super.write(t,R(u({},e),{writeLayerSchema:!0}))}clone(){throw new x(W,`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)}async hasDataChanged(){try{const{dataChanged:t,updates:e}=await this.source.refresh(this.customParameters);return m(e)&&this.read(e,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),t}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};r([o({readOnly:!0,json:{read:!1,write:!1}})],s.prototype,"capabilities",void 0),r([o({type:[","," ",";","|","	"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],s.prototype,"delimiter",void 0),r([o({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],s.prototype,"editingEnabled",void 0),r([o({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],s.prototype,"fields",void 0),r([o({type:Boolean,readOnly:!0})],s.prototype,"isTable",null),r([S("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],s.prototype,"readWebMapLabelsVisible",null),r([o({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],s.prototype,"latitudeField",void 0),r([o({type:["show","hide"]})],s.prototype,"listMode",void 0),r([o({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"locationType",void 0),r([o({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],s.prototype,"longitudeField",void 0),r([o({type:["CSV"]})],s.prototype,"operationalLayerType",void 0),r([o()],s.prototype,"outFields",void 0),r([o({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],s.prototype,"path",void 0),r([o({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],s.prototype,"portalItem",void 0),r([o({json:{read:!1},cast:null,type:g,readOnly:!0})],s.prototype,"source",void 0),r([o({json:{read:!1},value:"csv",readOnly:!0})],s.prototype,"type",void 0),r([o({json:{read:_,write:{isRequired:!0,ignoreOrigin:!0,writer:b}}})],s.prototype,"url",null),s=r([f("esri.layers.CSVLayer")],s);const G=s;export{G as default};
