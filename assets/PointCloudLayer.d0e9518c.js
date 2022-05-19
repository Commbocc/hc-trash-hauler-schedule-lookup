import{C as r,E as i,G as y,a_ as S,av as v,q as B,aE as N,aF as A,aG as V,eE as L,aH as D,eG as G,aM as K,y as g,l as u,et as M,r as k,aJ as H,eQ as U,g3 as x,u as l,dH as z,_ as J,eY as Q,eT as W,ap as Y,f5 as X,ff as Z,ai as ee,T as te,f6 as re}from"./index.2f57b5df.js";import{A as oe,K as C}from"./SceneService.b9aa4f04.js";import{c as j,d as ie,b as se,a as ne}from"./PointCloudUniqueValueRenderer.6ab607b3.js";import"./originUtils.7c5d9b9d.js";import"./resourceUtils.c30be8fd.js";var ae=Object.defineProperty,le=Object.defineProperties,de=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable,T=(e,t,o)=>t in e?ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,w=(e,t)=>{for(var o in t||(t={}))pe.call(t,o)&&T(e,o,t[o]);if(_)for(var o of _(t))ue.call(t,o)&&T(e,o,t[o]);return e},q=(e,t)=>le(e,de(t));let c=class extends te{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};r([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"field",void 0),r([i({readOnly:!0,nonNullable:!0,json:{read:!1}})],c.prototype,"type",void 0),c=r([y("esri.layers.pointCloudFilters.PointCloudFilter")],c);const m=c;var b;let d=b=class extends m{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new b({field:this.field,requiredClearBits:u(this.requiredClearBits),requiredSetBits:u(this.requiredSetBits)})}};r([i({type:[S],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],d.prototype,"requiredClearBits",void 0),r([i({type:[S],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],d.prototype,"requiredSetBits",void 0),r([v({pointCloudBitfieldFilter:"bitfield"})],d.prototype,"type",void 0),d=b=r([y("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],d);const ye=d;var $;let f=$=class extends m{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new $({field:this.field,includedReturns:u(this.includedReturns)})}};r([i({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],f.prototype,"includedReturns",void 0),r([v({pointCloudReturnFilter:"return"})],f.prototype,"type",void 0),f=$=r([y("esri.layers.pointCloudFilters.PointCloudReturnFilter")],f);const ce=f;var I;let p=I=class extends m{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new I({field:this.field,mode:this.mode,values:u(this.values)})}};r([i({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"mode",void 0),r([v({pointCloudValueFilter:"value"})],p.prototype,"type",void 0),r([i({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"values",void 0),p=I=r([y("esri.layers.pointCloudFilters.PointCloudValueFilter")],p);const fe=p,he={key:"type",base:m,typeMap:{value:fe,bitfield:ye,return:ce}};var P;let h=P=class extends j{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new P(q(w({},this.cloneProperties()),{field:u(this.field)}))}};r([v({pointCloudRGBRenderer:"point-cloud-rgb"})],h.prototype,"type",void 0),r([i({type:String,json:{write:!0}})],h.prototype,"field",void 0),h=P=r([y("esri.renderers.PointCloudRGBRenderer")],h);const ve=h,F={key:"type",base:j,typeMap:{"point-cloud-class-breaks":ie,"point-cloud-rgb":ve,"point-cloud-stretch":se,"point-cloud-unique-value":ne},errorContext:"renderer"},R=B.getLogger("esri.layers.PointCloudLayer"),O=re();let s=class extends oe(N(A(V(L(D(G(K))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return typeof e=="string"?w({url:e},t):e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t&&t.domain?t.domain:null}readServiceFields(e,t,o){return Array.isArray(e)?e.map(n=>{const a=new g;return n.type==="FieldTypeInteger"&&((n=u(n)).type="esriFieldTypeInteger"),a.read(n,o),a}):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map(n=>new g({name:n.name,type:n.name==="ELEVATION"?"double":"integer"})):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,o,n){M("layerDefinition.drawingInfo.renderer",e.write({},n),t)}load(e){const t=k(e)?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(H).then(()=>this._fetchService(t));return this.addResolvingPromise(o),Promise.resolve(this)}createPopupTemplate(e){const t=U(this,e);return this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t),t}_formatPopupTemplateReturnsField(e){const t=this.fieldsIndex.get("RETURNS");if(!t)return;const o=e.fieldInfos.find(a=>a.fieldName===t.name);if(!o)return;const n=new x({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`
        var returnValue = $feature.${t.name};
        return (returnValue % 16) + " / " + Floor(returnValue / 16);
      `});e.expressionInfos=[...e.expressionInfos||[],n],o.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){const t=this.fieldsIndex.get("RGB");if(!t)return;const o=e.fieldInfos.find(a=>a.fieldName===t.name);if(!o)return;const n=new x({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`
        var rgb = $feature.${t.name};
        var red = Floor(rgb / 65536, 0);
        var green = Floor((rgb - (red * 65536)) / 256,0);
        var blue = rgb - (red * 65536) - (green * 256);

        return "rgb(" + red + "," + green + "," + blue + ")";
      `});e.expressionInfos=[...e.expressionInfos||[],n],o.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new l("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const o=this.fieldsIndex.get(e);if(!o)throw new l("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const n of this.attributeStorageInfo)if(n.name===o.name){const a=z(this.parsedUrl.path,`./statistics/${n.key}`);return J(a,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then(E=>E.data)}throw new l("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(C.SAVE_AS,q(w({},t),{getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"}),e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(C.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="PointCloud")throw new l("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new l("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new l("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return this.attributeStorageInfo!=null&&this.attributeStorageInfo.some(t=>t.name===e)}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;e&&(e.mode!=="absolute-height"&&R.warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&R.warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))}};r([i({type:["PointCloudLayer"]})],s.prototype,"operationalLayerType",void 0),r([i(Q)],s.prototype,"popupEnabled",void 0),r([i({type:W,json:{name:"popupInfo",write:!0}})],s.prototype,"popupTemplate",void 0),r([i({readOnly:!0,json:{read:!1}})],s.prototype,"defaultPopupTemplate",null),r([i({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],s.prototype,"opacity",void 0),r([i({type:["show","hide"]})],s.prototype,"listMode",void 0),r([i({types:[he],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],s.prototype,"filters",void 0),r([i({type:[g]})],s.prototype,"fields",void 0),r([i(O.fieldsIndex)],s.prototype,"fieldsIndex",void 0),r([Y("service","fields",["fields","attributeStorageInfo"])],s.prototype,"readServiceFields",null),r([i(O.outFields)],s.prototype,"outFields",void 0),r([i({readOnly:!0})],s.prototype,"attributeStorageInfo",void 0),r([i(X)],s.prototype,"elevationInfo",null),r([i({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],s.prototype,"path",void 0),r([i(Z)],s.prototype,"legendEnabled",void 0),r([i({types:F,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:F},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],s.prototype,"renderer",void 0),r([ee("renderer")],s.prototype,"writeRenderer",null),r([i({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),s=r([y("esri.layers.PointCloudLayer")],s);const Ie=s;export{Ie as default};
