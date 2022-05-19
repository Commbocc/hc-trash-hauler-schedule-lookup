import{y as g,_ as x,u as m,ek as W,Z as $,el as k,h as _,t as N,M as X,b1 as Y,bS as S,ae as z,em as q,r as A}from"./index.2f57b5df.js";import{s as H,Y as J}from"./projection.9bc802ad.js";import{i as Q}from"./geojson.e07e18fd.js";import{n as v,o as C}from"./xmlUtils.5c7e57e0.js";var Z=Object.defineProperty,B=Object.defineProperties,K=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable,G=(r,e,t)=>e in r?Z(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,y=(r,e)=>{for(var t in e||(e={}))ee.call(e,t)&&G(r,t,e[t]);if(O)for(var t of O(e))te.call(e,t)&&G(r,t,e[t]);return r},F=(r,e)=>B(r,K(e));function re(r){const e=[];return function*(){yield*e;for(const t of r)e.push(t),yield t}}function E(r,e){for(const t of r)if(t!=null&&e(t))return t}function ne(r){var e;return(e=oe(r))!=null?e:ae(r)}function ae(r){const e=new Date(r).getTime();return Number.isNaN(e)?null:e}function oe(r){var e,t,a,n;const o=se.exec(r);if(!o)return null;const s=o.groups,i=+s.year,u=+s.month-1,l=+s.day,p=+((e=s.hours)!=null?e:"0"),c=+((t=s.minutes)!=null?t:"0"),f=+((a=s.seconds)!=null?a:"0");if(p>23||c>59||f>59)return null;const d=(n=s.ms)!=null?n:"0",w=d?+d.padEnd(3,"0").substring(0,3):0;let b;if(s.isUTC)b=Date.UTC(i,u,l,p,c,f,w);else if(s.offsetSign){const L=+s.offsetHours,V=+s.offsetMinutes;b=6e4*(s.offsetSign==="+"?-1:1)*(60*L+V)+Date.UTC(i,u,l,p,c,f,w)}else b=new Date(i,u,l,p,c,f,w).getTime();return Number.isNaN(b)?null:b}const se=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/,P="xlink:href",h="2.0.0",R="__esri_wfs_id__",ie="wfs-layer:getWFSLayerTypeInfo-error",ue="wfs-layer:empty-service",D="wfs-layer:feature-type-not-found",le="wfs-layer:geojson-not-supported",pe="wfs-layer:kvp-encoding-not-supported",ce="wfs-layer:malformed-json",U="wfs-layer:unknown-geometry-type",fe="wfs-layer:unknown-field-type",me="wfs-layer:unsupported-spatial-reference",ye="wfs-layer:unsupported-wfs-version";async function De(r,e){const t=de((await x(r,{responseType:"text",query:y({SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:h},e==null?void 0:e.customParameters),signal:e==null?void 0:e.signal})).data);return be(r,t),t}function de(r){const e=j(r);Ae(e),M(e);const t=e.firstElementChild,a=re(he(t));return{operations:we(t),get featureTypes(){return Array.from(a())},readFeatureTypes:a}}const ge=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function we(r){let e=!1;const t={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if(C(r,{OperationsMetadata:{Operation:a=>{switch(a.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:n=>{t.GetCapabilities.url=n.getAttribute(P)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:n=>{t.DescribeFeatureType.url=n.getAttribute(P)}}}};case"GetFeature":return{DCP:{HTTP:{Get:n=>{t.GetFeature.url=n.getAttribute(P)}}},Parameter:n=>{if(n.getAttribute("name")==="outputFormat")return{AllowedValues:{Value:o=>{const s=o.textContent;ge.has(s.toLowerCase())&&(t.GetFeature.outputFormat=s)}}}}}}},Constraint:a=>{switch(a.getAttribute("name")){case"KVPEncoding":return{DefaultValue:n=>{e=n.textContent.toLowerCase()==="true"}};case"ImplementsResultPaging":return{DefaultValue:n=>{t.GetFeature.supportsPagination=n.textContent.toLowerCase()==="true"}}}}}}),!e)throw new m(pe,"WFS service doesn't support key/value pair (KVP) encoding");if(N(t.GetFeature.outputFormat))throw new m(le,"WFS service doesn't support GeoJSON output format");return t}function be(r,e){W(r)&&($(r,e.operations.DescribeFeatureType.url,!0)&&(e.operations.DescribeFeatureType.url=k(e.operations.DescribeFeatureType.url)),$(r,e.operations.GetFeature.url,!0)&&(e.operations.GetFeature.url=k(e.operations.GetFeature.url)))}function he(r){return v(r,{FeatureTypeList:{FeatureType:e=>{const t={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},a=new Set([4326]),n=o=>{var s,i;const u=parseInt((s=o.textContent.match(/(?<wkid>\d+$)/i))==null||(i=s.groups)==null?void 0:i.wkid,10);Number.isNaN(u)||a.add(u)};return C(e,{Name:o=>{const{name:s,prefix:i}=T(o.textContent);t.typeName=`${i}:${s}`,t.name=s,t.namespacePrefix=i,t.namespaceUri=o.lookupNamespaceURI(i)},Abstract:o=>{t.description=o.textContent},Title:o=>{t.title=o.textContent},WGS84BoundingBox:o=>{t.extent=Te(o)},DefaultSRS:n,DefaultCRS:n,OtherSRS:n,OtherCRS:n}),t.title||(t.title=t.name),t.supportedSpatialReferences.push(...a),t}}})}function Te(r){let e,t,a,n;for(const o of r.children)switch(o.localName){case"LowerCorner":[e,t]=o.textContent.split(" ").map(s=>Number.parseFloat(s));break;case"UpperCorner":[a,n]=o.textContent.split(" ").map(s=>Number.parseFloat(s))}return{xmin:e,ymin:t,xmax:a,ymax:n,spatialReference:S}}function Se(r,e,t){return E(r,a=>t?a.name===e&&a.namespaceUri===t:a.typeName===e||a.name===e)}async function Ue(r,e,t,a={}){var n;const{featureType:o,extent:s}=await ve(r,e,t,a),{fields:i,geometryType:u,swapXY:l,objectIdField:p,geometryField:c}=await Fe(r,o.typeName,a);return{url:r.operations.GetCapabilities.url,name:o.name,namespaceUri:o.namespaceUri,fields:i,geometryField:c,geometryType:u,objectIdField:p,spatialReference:(n=a.spatialReference)!=null?n:_.WGS84,extent:s,swapXY:l,wfsCapabilities:r,customParameters:a.customParameters}}async function ve(r,e,t,a={}){const{spatialReference:n=_.WGS84}=a,o=r.readFeatureTypes(),s=e?Se(o,e,t):o.next().value;if(N(s))throw e?new m(D,`The type '${e}' could not be found in the service`):new m(ue,"The service is empty");let i=new X(F(y({},s.extent),{spatialReference:n}));if(!Y(n,S))try{await H(S,n,void 0,a),i=J(i,S)}catch{throw new m(me,"Projection not supported")}return{extent:i,spatialReference:n,featureType:s}}async function Fe(r,e,t={}){const[a,n]=await z([Pe(r.operations.DescribeFeatureType.url,e,t),Ce(r,e,t)]);if(a.error||n.error)throw new m(ie,`An error occurred while getting info about the feature type '${e}'`,{error:a.error||n.error});const{fields:o,errors:s}=a.value,i=a.value.geometryType||n.value.geometryType,u=n.value.swapXY;if(N(i))throw new m(U,`The geometry type could not be determined for type '${e}`,{typeName:e,geometryType:i,fields:o,errors:s});return F(y({},xe(o)),{geometryType:i,swapXY:u})}function xe(r){var e;const t=r.find(n=>n.type==="geometry");let a=r.find(n=>n.type==="oid");return r=r.filter(n=>n.type!=="geometry"),a||(a=new g({name:R,type:"oid",alias:R}),r.unshift(a)),{geometryField:(e=t==null?void 0:t.name)!=null?e:null,objectIdField:a.name,fields:r}}async function Ce(r,e,t={}){var a;let n,o=!1;const[s,i]=await Promise.all([ke(r.operations.GetFeature.url,e,r.operations.GetFeature.outputFormat,F(y({},t),{count:1})),x(r.operations.GetFeature.url,{responseType:"text",query:I(e,void 0,F(y({},t),{count:1})),signal:t==null?void 0:t.signal})]),u=s.type==="FeatureCollection"&&((a=s.features[0])==null?void 0:a.geometry);if(u){let l;switch(n=q.fromJSON(Q(u.type)),u.type){case"Point":l=u.coordinates;break;case"LineString":case"MultiPoint":l=u.coordinates[0];break;case"MultiLineString":case"Polygon":l=u.coordinates[0][0];break;case"MultiPolygon":l=u.coordinates[0][0][0]}const p=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(i.data);if(p){const c=l[0].toFixed(3),f=l[1].toFixed(3),d=parseFloat(p[1]).toFixed(3);c===parseFloat(p[2]).toFixed(3)&&f===d&&(o=!0)}}return{geometryType:n,swapXY:o}}async function Pe(r,e,t){return Ee(e,(await x(r,{responseType:"text",query:y({SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:h,TYPENAME:e},t==null?void 0:t.customParameters),signal:t==null?void 0:t.signal})).data)}function Ee(r,e){const{name:t}=T(r),a=j(e);M(a);const n=E(v(a.firstElementChild,{element:o=>({name:o.getAttribute("name"),typeName:T(o.getAttribute("type")).name})}),({name:o})=>o===t);if(A(n)){const o=E(v(a.firstElementChild,{complexType:s=>s}),s=>s.getAttribute("name")===n.typeName);if(A(o))return $e(o)}throw new m(D,`Type '${r}' not found in document`,{document:new XMLSerializer().serializeToString(a)})}const Ne=new Set(["objectid","fid"]);function $e(r){var e,t;const a=[],n=[];let o;const s=v(r,{complexContent:{extension:{sequence:{element:i=>i}}}});for(const i of s){const u=i.getAttribute("name");if(!u)continue;let l,p;if(i.hasAttribute("type")?l=T(i.getAttribute("type")).name:C(i,{simpleType:{restriction:d=>(l=T(d.getAttribute("base")).name,{maxLength:w=>{p=+w.getAttribute("value")}})}}),!l)continue;const c=i.getAttribute("nillable")==="true";let f=!1;switch(l.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":n.push(new g({name:u,alias:u,type:"integer",nullable:c}));break;case"float":case"double":case"decimal":n.push(new g({name:u,alias:u,type:"double",nullable:c}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":n.push(new g({name:u,alias:u,type:"string",nullable:c,length:(e=p)!=null?e:255}));break;case"datetime":case"date":n.push(new g({name:u,alias:u,type:"date",nullable:c,length:(t=p)!=null?t:36}));break;case"pointpropertytype":o="point",f=!0;break;case"multipointpropertytype":o="multipoint",f=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":o="polyline",f=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":o="polygon",f=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":f=!0,a.push(new m(U,`geometry type '${l}' is not supported`,{type:new XMLSerializer().serializeToString(r)}));break;default:a.push(new m(fe,`Unknown field type '${l}'`,{type:new XMLSerializer().serializeToString(r)}))}f&&n.push(new g({name:u,alias:u,type:"geometry",nullable:c}))}for(const i of n)if(i.type==="integer"&&!i.nullable&&Ne.has(i.name.toLowerCase())){i.type="oid";break}return{geometryType:o,fields:n,errors:a}}async function ke(r,e,t,a){let{data:n}=await x(r,{responseType:"text",query:I(e,t,a),signal:a==null?void 0:a.signal});n=n.replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{var o;if(a!=null&&(o=a.dateFields)!=null&&o.length){const s=new Set(a.dateFields);return JSON.parse(n,(i,u)=>s.has(i)?ne(u):u)}return JSON.parse(n)}catch(s){throw new m(ce,"Error while parsing the\xA0response",{response:n,error:s})}}function I(r,e,t){return y({SERVICE:"WFS",REQUEST:"GetFeature",VERSION:h,TYPENAMES:r,OUTPUTFORMAT:e,SRSNAME:"EPSG:4326",STARTINDEX:t==null?void 0:t.startIndex,COUNT:t==null?void 0:t.count},t==null?void 0:t.customParameters)}function j(r){return new DOMParser().parseFromString(r.trim(),"text/xml")}function T(r){const[e,t]=r.split(":");return{prefix:t?e:"",name:t!=null?t:e}}function Ae(r){const e=r.firstElementChild.getAttribute("version");if(e&&e!==h)throw new m(ye,`Unsupported WFS version ${e}. Supported version: ${h}`)}function M(r){let e,t;if(C(r.firstElementChild,{Exception:a=>(e=a.getAttribute("exceptionCode"),{ExceptionText:n=>{t=n.textContent}})}),e)throw new m(`wfs-layer:${e}`,t)}export{De as D,ke as K,Se as W,Ue as X,R as v,xe as z};
