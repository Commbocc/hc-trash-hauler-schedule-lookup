import{C as u,E as d,fe as xe,ai as $e,ap as Ae,G as et,eg as ae,q as W,T as xt,l as R,aW as U,aP as be,ak as Me,f1 as Fe,p as Oe,t as it,aR as De,r as f,M as Ot,j as E,v as Te,u as Dt,dA as Lt,d8 as At,c5 as M,fQ as Zt,eW as Tt,b as Re,gA as Ce,by as Ee,eb as Ie,Y as Pe,ad as Le,cO as jt,d3 as _t,dj as gt,cP as je,cT as ie,cZ as mt,gB as le,gC as _e,dd as Se,gD as ce,ar as Ne,aq as Ue}from"./index.2f57b5df.js";import{a as lt,k as ht,q as Rt,L as dt,r as $t,M as ze,x as We,b as St,j as Nt,c as Ut,O as zt,h as Wt,d as kt,e as ke,l as Ct,f as He}from"./georeference.ad786b3d.js";import{x as Be}from"./earcut.330b1716.js";import{n as Ge}from"./deduplicate.8bfaad9c.js";import{N,U as ue}from"./projection.9bc802ad.js";import{d as pe,a as he}from"./vec33.90c1b4a7.js";import{a as Ht}from"./quat.f5e17adc.js";import"./BufferView.ff66147d.js";import"./vec2.da65d461.js";var Ve=Object.defineProperty,Ze=Object.defineProperties,qe=Object.getOwnPropertyDescriptors,qt=Object.getOwnPropertySymbols,Ye=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable,Yt=(t,e,n)=>e in t?Ve(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Bt=(t,e)=>{for(var n in e||(e={}))Ye.call(e,n)&&Yt(t,n,e[n]);if(qt)for(var n of qt(e))Je.call(e,n)&&Yt(t,n,e[n]);return t},Gt=(t,e)=>Ze(t,qe(e));function Xe(t,e,n,r){if(!e||!n)throw new Error("Cannot construct image data without dimensions");if(Jt)try{return new ImageData(t,e,n)}catch{Jt=!1}const o=Qe(e,n,r);return o.data.set(t,0),o}function Qe(t,e,n){return n||(n=Ke()),n.getContext("2d").createImageData(t,e)}let nt=null,Jt=!0;function Ke(){return nt||(nt=document.createElement("canvas"),nt.width=1,nt.height=1),nt}var q;const bt=new WeakMap;let tn=0,C=q=class extends xt{constructor(t){super(t),this.wrap="repeat"}get url(){return this._get("url")||null}set url(t){this._set("url",t),t&&this._set("data",null)}get data(){return this._get("data")||null}set data(t){this._set("data",t),t&&this._set("url",null)}writeData(t,e,n,r){if(t instanceof HTMLImageElement){const o={type:"image-element",src:Zt(t.src,r),crossOrigin:t.crossOrigin};e[n]=o}else if(t instanceof HTMLCanvasElement){const o=t.getContext("2d").getImageData(0,0,t.width,t.height),s={type:"canvas-element",imageData:this._encodeImageData(o)};e[n]=s}else if(t instanceof HTMLVideoElement){const o={type:"video-element",src:Zt(t.src,r),autoplay:t.autoplay,loop:t.loop,muted:t.muted,crossOrigin:t.crossOrigin,preload:t.preload};e[n]=o}else{const o={type:"image-data",imageData:this._encodeImageData(t)};e[n]=o}}readData(t){switch(t.type){case"image-element":{const e=new Image;return e.src=t.src,e.crossOrigin=t.crossOrigin,e}case"canvas-element":{const e=this._decodeImageData(t.imageData),n=document.createElement("canvas");return n.width=e.width,n.height=e.height,n.getContext("2d").putImageData(e,0,0),n}case"image-data":return this._decodeImageData(t.imageData);case"video-element":{const e=document.createElement("video");return e.src=t.src,e.crossOrigin=t.crossOrigin,e.autoplay=t.autoplay,e.loop=t.loop,e.muted=t.muted,e.preload=t.preload,e}default:return}}get transparent(){const t=this.data,e=this.url;if(t instanceof HTMLCanvasElement)return this._imageDataContainsTransparent(t.getContext("2d").getImageData(0,0,t.width,t.height));if(t instanceof ImageData)return this._imageDataContainsTransparent(t);if(e){const n=e.substr(e.length-4,4).toLowerCase(),r=e.substr(0,15).toLocaleLowerCase();if(n===".png"||r==="data:image/png;")return!0}return!1}set transparent(t){t!=null?this._override("transparent",t):this._clearOverride("transparent")}get contentHash(){const t=typeof this.wrap=="string"?this.wrap:typeof this.wrap=="object"?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",e=(n="")=>`d:${n},t:${this.transparent},w:${t}`;return this.url!=null?e(this.url):this.data!=null?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?e(this.data.src):(bt.has(this.data)||bt.set(this.data,++tn),e(bt.get(this.data))):e()}clone(){const t={url:this.url,data:this.data,wrap:this._cloneWrap()};return new q(t)}cloneWithDeduplication(t){const e=t.get(this);if(e)return e;const n=this.clone();return t.set(this,n),n}_cloneWrap(){return typeof this.wrap=="string"?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}_encodeImageData(t){let e="";for(let n=0;n<t.data.length;n++)e+=String.fromCharCode(t.data[n]);return{data:btoa(e),width:t.width,height:t.height}}_decodeImageData(t){const e=atob(t.data),n=new Uint8ClampedArray(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return Xe(n,t.width,t.height)}_imageDataContainsTransparent(t){for(let e=3;e<t.data.length;e+=4)if(t.data[e]!==255)return!0;return!1}static from(t){return typeof t=="string"?new q({url:t}):t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof ImageData||t instanceof HTMLVideoElement?new q({data:t}):Tt(q,t)}};u([d({type:String,json:{write:xe}})],C.prototype,"url",null),u([d({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),d()],C.prototype,"data",null),u([$e("data")],C.prototype,"writeData",null),u([Ae("data")],C.prototype,"readData",null),u([d({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],C.prototype,"transparent",null),u([d({json:{write:!0}})],C.prototype,"wrap",void 0),u([d({readOnly:!0})],C.prototype,"contentHash",null),C=q=u([et("esri.geometry.support.MeshTexture")],C);const at=C;var Et;let I=Et=class extends xt{constructor(t){super(t),this.color=null,this.colorTexture=null,this.normalTexture=null,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(t,e){const n=f(t)?t.get(this):null;if(n)return n;const r=new Et(this.clonePropertiesWithDeduplication(e));return f(t)&&t.set(this,r),r}clonePropertiesWithDeduplication(t){return{color:f(this.color)?this.color.clone():null,colorTexture:f(this.colorTexture)?this.colorTexture.cloneWithDeduplication(t):null,normalTexture:f(this.normalTexture)?this.normalTexture.cloneWithDeduplication(t):null,alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided}}};u([d({type:ae,json:{write:!0}})],I.prototype,"color",void 0),u([d({type:at,json:{write:!0}})],I.prototype,"colorTexture",void 0),u([d({type:at,json:{write:!0}})],I.prototype,"normalTexture",void 0),u([d({nonNullable:!0,json:{write:!0}})],I.prototype,"alphaMode",void 0),u([d({nonNullable:!0,json:{write:!0}})],I.prototype,"alphaCutoff",void 0),u([d({nonNullable:!0,json:{write:!0}})],I.prototype,"doubleSided",void 0),I=Et=u([et("esri.geometry.support.MeshMaterial")],I);const Vt=I;var It;let P=It=class extends Vt{constructor(t){super(t),this.emissiveColor=null,this.emissiveTexture=null,this.occlusionTexture=null,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(t,e){const n=f(t)?t.get(this):null;if(n)return n;const r=new It(this.clonePropertiesWithDeduplication(e));return f(t)&&t.set(this,r),r}clonePropertiesWithDeduplication(t){return Gt(Bt({},super.clonePropertiesWithDeduplication(t)),{emissiveColor:f(this.emissiveColor)?this.emissiveColor.clone():null,emissiveTexture:f(this.emissiveTexture)?this.emissiveTexture.cloneWithDeduplication(t):null,occlusionTexture:f(this.occlusionTexture)?this.occlusionTexture.cloneWithDeduplication(t):null,metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:f(this.metallicRoughnessTexture)?this.metallicRoughnessTexture.cloneWithDeduplication(t):null})}};u([d({type:ae,json:{write:!0}})],P.prototype,"emissiveColor",void 0),u([d({type:at,json:{write:!0}})],P.prototype,"emissiveTexture",void 0),u([d({type:at,json:{write:!0}})],P.prototype,"occlusionTexture",void 0),u([d({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],P.prototype,"metallic",void 0),u([d({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],P.prototype,"roughness",void 0),u([d({type:at,json:{write:!0}})],P.prototype,"metallicRoughnessTexture",void 0),P=It=u([et("esri.geometry.support.MeshMaterialMetallicRoughness")],P);const en=P;var ft;const H=W.getLogger("esri.geometry.support.MeshVertexAttributes");let b=ft=class extends xt{constructor(t){super(t),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null}castColor(t){return Y(t,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},H)}castPosition(t){return t&&t instanceof Float32Array&&H.warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array"),Y(t,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},H)}castUv(t){return Y(t,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},H)}castNormal(t){return Y(t,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},H)}castTangent(t){return Y(t,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},H)}clone(){const t={position:R(this.position),uv:R(this.uv),normal:R(this.normal),tangent:R(this.tangent),color:R(this.color)};return new ft(t)}clonePositional(){const t={position:R(this.position),normal:R(this.normal),tangent:R(this.tangent),uv:this.uv,color:this.color};return new ft(t)}};function Mt(t,e,n,r){const{loggerTag:o,stride:s}=e;return t.length%s!=0?(r.error(o,`Invalid array length, expected a multiple of ${s}`),new n([])):t}function Y(t,e,n,r,o){if(!t)return t;if(t instanceof e)return Mt(t,r,e,o);for(const s of n)if(t instanceof s)return Mt(new e(t),r,e,o);if(Array.isArray(t))return Mt(new e(t),r,e,o);{const s=n.map(a=>`'${a.name}'`);return o.error(`Failed to set property, expected one of ${s}, but got ${t.constructor.name}`),new e([])}}function rt(t,e,n){e[n]=nn(t)}function nn(t){const e=new Array(t.length);for(let n=0;n<t.length;n++)e[n]=t[n];return e}u([d({json:{write:rt}})],b.prototype,"color",void 0),u([U("color")],b.prototype,"castColor",null),u([d({nonNullable:!0,json:{write:rt}})],b.prototype,"position",void 0),u([U("position")],b.prototype,"castPosition",null),u([d({json:{write:rt}})],b.prototype,"uv",void 0),u([U("uv")],b.prototype,"castUv",null),u([d({json:{write:rt}})],b.prototype,"normal",void 0),u([U("normal")],b.prototype,"castNormal",null),u([d({json:{write:rt}})],b.prototype,"tangent",void 0),u([U("tangent")],b.prototype,"castTangent",null),b=ft=u([et("esri.geometry.support.MeshVertexAttributes")],b);var st;const rn=W.getLogger("esri.geometry.support.MeshComponent");let L=st=class extends xt{constructor(t){super(t),this.faces=null,this.material=null,this.shading="source",this.trustSourceNormals=!1}static from(t){return Tt(st,t)}castFaces(t){return Y(t,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},rn)}castMaterial(t){return Tt(t&&typeof t=="object"&&("metallic"in t||"roughness"in t||"metallicRoughnessTexture"in t)?en:Vt,t)}clone(){return new st({faces:R(this.faces),shading:this.shading,material:R(this.material),trustSourceNormals:this.trustSourceNormals})}cloneWithDeduplication(t,e){const n={faces:R(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(t,e):null,trustSourceNormals:this.trustSourceNormals};return new st(n)}};u([d({json:{write:!0}})],L.prototype,"faces",void 0),u([U("faces")],L.prototype,"castFaces",null),u([d({type:Vt,json:{write:!0}})],L.prototype,"material",void 0),u([U("material")],L.prototype,"castMaterial",null),u([d({type:String,json:{write:!0}})],L.prototype,"shading",void 0),u([d({type:Boolean})],L.prototype,"trustSourceNormals",void 0),L=st=u([et("esri.geometry.support.MeshComponent")],L);const K=L;function on(t){const e=an(t.rings,t.hasZ,yt.CCW_IS_HOLE),n=[];let r=0,o=0;for(const i of e.polygons){const c=i.count,l=i.index,g=new Float64Array(e.position.buffer,3*l*e.position.BYTES_PER_ELEMENT,3*c),m=i.holeIndices.map(h=>h-l),p=new Uint32Array(Be(g,m,3));n.push({position:g,faces:p}),r+=g.length,o+=p.length}const s=sn(n,r,o),a=Ge(s.position.buffer,6,{originalIndices:s.faces});return s.position=new Float64Array(a.buffer),s.faces=a.indices,s}function sn(t,e,n){if(t.length===1)return t[0];const r=new Float64Array(e),o=new Uint32Array(n);let s=0,a=0,i=0;for(const c of t){for(let l=0;l<c.position.length;l++)r[s++]=c.position[l];for(let l=0;l<c.faces.length;l++)o[a++]=c.faces[l]+i;i=s/3}return{position:r,faces:o}}function an(t,e,n){const r=t.length,o=new Array(r),s=new Array(r),a=new Array(r);let i=0,c=0,l=0,g=0;for(let h=0;h<r;++h)g+=t[h].length;const m=new Float64Array(3*g);let p=0;for(let h=r-1;h>=0;h--){const y=t[h],O=n===yt.CCW_IS_HOLE&&ln(y);if(O&&r!==1)o[i++]=y;else{let x=y.length;for(let w=0;w<i;++w)x+=o[w].length;const $={index:p,pathLengths:new Array(i+1),count:x,holeIndices:new Array(i)};$.pathLengths[0]=y.length,y.length>0&&(a[l++]={index:p,count:y.length}),p=O?ct(y,y.length-1,-1,m,p,y.length,e):ct(y,0,1,m,p,y.length,e);for(let w=0;w<i;++w){const A=o[w];$.holeIndices[w]=p,$.pathLengths[w+1]=A.length,A.length>0&&(a[l++]={index:p,count:A.length}),p=ct(A,0,1,m,p,A.length,e)}i=0,$.count>0&&(s[c++]=$)}}for(let h=0;h<i;++h){const y=o[h];y.length>0&&(a[l++]={index:p,count:y.length}),p=ct(y,0,1,m,p,y.length,e)}return c<r&&(s.length=c),l<r&&(a.length=l),{position:m,polygons:s,outlines:a}}function ct(t,e,n,r,o,s,a){o*=3;for(let i=0;i<s;++i){const c=t[e];r[o++]=c[0],r[o++]=c[1],r[o++]=a?c[2]:0,e+=n}return o/3}function ln(t){return!Re(t,!1,!1)}var yt;(function(t){t[t.NONE=0]="NONE",t[t.CCW_IS_HOLE=1]="CCW_IS_HOLE"})(yt||(yt={}));const Pt=W.getLogger("esri.geometry.support.meshUtils.centerAt");function cn(t,e,n){var r;if(!t.vertexAttributes||!t.vertexAttributes.position)return;const o=(r=n==null?void 0:n.origin)!=null?r:t.origin;f(t.transform)?((n==null?void 0:n.geographic)!=null&&n.geographic!==t.transform.geographic&&Pt.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`),un(t.transform,e,o)):$t(t.spatialReference,n)?pn(t,e,o):hn(t,e,o)}function un(t,e,n){const r=e.x-n.x,o=e.y-n.y,s=e.hasZ&&n.hasZ?e.z-n.z:0,a=t.origin;t.origin=[a[0]+r,a[1]+o,a[2]+s]}function pn(t,e,n){const r=ze(t.vertexAttributes,n,{geographic:!0}),{position:o,normal:s,tangent:a}=We(r,e,{geographic:!0});t.vertexAttributes.position=o,t.vertexAttributes.normal=s,t.vertexAttributes.tangent=a,t.vertexAttributesChanged()}function hn(t,e,n){const r=mn,o=gn;if(N(e,o,t.spatialReference)){if(!N(n,r,t.spatialReference)){const s=t.origin;r[0]=s.x,r[1]=s.y,r[2]=s.z,Pt.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}fn(t.vertexAttributes.position,o,r),t.vertexAttributesChanged()}else Pt.error(`Failed to project centerAt location (wkid:${e.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid})`)}function fn(t,e,n){if(t)for(let r=0;r<t.length;r+=3)for(let o=0;o<3;o++)t[r+o]+=e[o]-n[o]}const gn=M(),mn=M();async function dn(t,e,n){const{loadGLTFMesh:r}=await Lt(import("./loadGLTFMesh.2dc3074c.js"),n),o=await fe(e,n),s=r(new E({x:0,y:0,z:0,spatialReference:t.spatialReference}),o.url,{resolveFile:yn(o),useTransform:!0,signal:f(n)?n.signal:null});s.then(()=>o.dispose(),()=>o.dispose());const{vertexAttributes:a,components:i}=await s;t.vertexAttributes=a,t.components=i}function yn(t){const e=Ee(t.url);return n=>{var r;const o=Ce(n,e,e),s=o?o.replace(/^ *\.\//,""):null;return(r=t.files.get(s))!=null?r:n}}async function fe(t,e){return t instanceof Blob?tt.fromBlob(t):typeof t=="string"?new tt(t):Array.isArray(t)?wn(t,e):vn(t,e)}async function wn(t,e){const n=new Map;let r=null;const o=await Ie(t.map(async a=>({name:a.name,source:await fe(a instanceof Blob?a:a.source,e)}))),s=[];for(const a of o)a&&(Pe(e)?a.source.dispose():s.push(a));Le(e);for(const{name:a,source:i}of s)(it(r)||/\.(gltf|glb)/i.test(a))&&(r=i.url),n.set(a,i.url),i.files&&i.files.forEach((c,l)=>n.set(l,c));if(it(r))throw new Dt("mesh-load-external:missing-files","Missing files to load external mesh source");return new tt(r,()=>s.forEach(({source:a})=>a.dispose()),n)}async function vn(t,e){const{default:n}=await Lt(import("./index.2f57b5df.js").then(function(o){return o.h6}).then(function(o){return o.hk}),e),r=typeof t.multipart[0]=="string"?await Promise.all(t.multipart.map(async o=>(await n(o,{responseType:"array-buffer"})).data)):t.multipart;return tt.fromBlob(new Blob(r))}class tt{constructor(e,n=()=>{},r=new Map){this.url=e,this.dispose=n,this.files=r}static fromBlob(e){const n=URL.createObjectURL(e);return new tt(n,()=>URL.revokeObjectURL(n))}}const xn=W.getLogger("esri.geometry.support.meshUtils.offset");function $n(t,e,n){t.vertexAttributes&&t.vertexAttributes.position&&(f(t.transform)?((n==null?void 0:n.geographic)!=null&&n.geographic!==t.transform.geographic&&xn.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`),An(t.transform,e)):$t(t.spatialReference,n)?bn(t,e):Mn(t,e))}function An(t,e){const n=t.origin;t.origin=jt(M(),n,e)}function bn(t,e){const n=t.spatialReference,r=t.vertexAttributes.position,o=t.vertexAttributes.normal,s=t.vertexAttributes.tangent,a=new Float64Array(r.length),i=f(o)?new Float32Array(o.length):null,c=f(s)?new Float32Array(s.length):null,l=t.extent.center,g=Fn;ue(n,[l.x,l.y,l.z],Xt,_t(n)),pe(Qt,Xt),gt(g,e,Qt),St(r,n,a),f(o)&&Nt(o,r,a,n,i),f(s)&&Ut(s,r,a,n,c),ge(a,g),zt(a,r,n),f(o)&&Wt(i,r,a,n,o),f(s)&&kt(c,r,a,n,s),t.vertexAttributesChanged()}function Mn(t,e){ge(t.vertexAttributes.position,e),t.vertexAttributesChanged()}function ge(t,e){if(t)for(let n=0;n<t.length;n+=3)for(let r=0;r<3;r++)t[n+r]+=e[r]}const Fn=M(),Xt=he(),Qt=Ht();function On(){const{faceDescriptions:t,faceVertexOffsets:e,uvScales:n}=Ln,r=4*t.length,o=new Float64Array(3*r),s=new Float32Array(3*r),a=new Float32Array(2*r),i=new Uint32Array(2*t.length*3);let c=0,l=0,g=0,m=0;for(let p=0;p<t.length;p++){const h=t[p],y=c/3;for(const x of e)i[m++]=y+x;const O=h.corners;for(let x=0;x<4;x++){const $=O[x];let w=0;a[g++]=.25*n[x][0]+h.uvOrigin[0],a[g++]=h.uvOrigin[1]-.25*n[x][1];for(let A=0;A<3;A++)h.axis[A]!==0?(o[c++]=.5*h.axis[A],s[l++]=h.axis[A]):(o[c++]=.5*$[w++],s[l++]=0)}}return{position:o,normal:s,uv:a,faces:i}}function Dn(t,e){const n=t.components[0],r=n.faces,o=jn[e],s=6*o,a=new Uint32Array(6),i=new Uint32Array(r.length-6);let c=0,l=0;for(let g=0;g<r.length;g++)g>=s&&g<s+6?a[c++]=r[g]:i[l++]=r[g];if(f(t.vertexAttributes.uv)){const g=new Float32Array(t.vertexAttributes.uv),m=4*o*2,p=[0,1,1,1,1,0,0,0];for(let h=0;h<p.length;h++)g[m+h]=p[h];t.vertexAttributes.uv=g}return t.components=[new K({faces:a,material:n.material}),new K({faces:i})],t}function Tn(t=0){const e=Math.round(8*2**t),n=2*e,r=(e-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),a=new Float32Array(2*r),i=new Uint32Array(3*((e-1)*n*2));let c=0,l=0,g=0,m=0;for(let p=0;p<=e;p++){const h=p/e*Math.PI+.5*Math.PI,y=Math.cos(h),O=Math.sin(h);v[2]=O;const x=p===0||p===e,$=x?n-1:n;for(let w=0;w<=$;w++){const A=w/$*2*Math.PI;v[0]=-Math.sin(A)*y,v[1]=Math.cos(A)*y;for(let j=0;j<3;j++)o[c]=.5*v[j],s[c]=v[j],++c;a[l++]=(w+(x?.5:0))/n,a[l++]=p/e,p!==0&&w!==n&&(p!==e&&(i[g++]=m,i[g++]=m+1,i[g++]=m-n),p!==1&&(i[g++]=m,i[g++]=m-n,i[g++]=m-n-1)),m++}}return{position:o,normal:s,uv:a,faces:i}}function Rn(t=0){const n=Math.round(16*2**t),r=(5-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),a=new Float32Array(2*r),i=new Uint32Array(3*(4*n));let c=0,l=0,g=0,m=0,p=0;for(let h=0;h<=5;h++){const y=h===0||h===5,O=h<=1||h>=5-1,x=h===2||h===4,$=y?n-1:n;for(let w=0;w<=$;w++){const A=w/$*2*Math.PI,j=y?0:.5;v[0]=j*Math.sin(A),v[1]=j*-Math.cos(A),v[2]=h<=2?.5:-.5;for(let k=0;k<3;k++)o[c++]=v[k],s[l++]=O?k===2?h<=1?1:-1:0:k===2?0:v[k]/j;a[g++]=(w+(y?.5:0))/n,a[g++]=h<=1?1*h/3:h<=3?1*(h-2)/3+1/3:1*(h-4)/3+2/3,x||h===0||w===n||(h!==5&&(i[m++]=p,i[m++]=p+1,i[m++]=p-n),h!==1&&(i[m++]=p,i[m++]=p-n,i[m++]=p-n-1)),p++}}return{position:o,normal:s,uv:a,faces:i}}function Cn(t,e){const n=typeof e=="number"?e:e!=null?e.width:1,r=typeof e=="number"?e:e!=null?e.height:1;switch(t){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}function En(t){const e=ot.facingAxisOrderSwap[t],n=ot.position,r=ot.normal,o=new Float64Array(n.length),s=new Float32Array(r.length);let a=0;for(let i=0;i<4;i++){const c=a;for(let l=0;l<3;l++){const g=e[l],m=Math.abs(g)-1,p=g>=0?1:-1;o[a]=n[c+m]*p,s[a]=r[c+m]*p,a++}}return{position:o,normal:s,uv:new Float32Array(ot.uv),faces:new Uint32Array(ot.faces)}}const B=1,G=2,V=3,ot={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[V,B,G],west:[-V,-B,G],north:[-B,V,G],south:[B,-V,G],up:[B,G,V],down:[B,-G,-V]}};function ut(t,e,n){In(t),Pn(t,n&&n.size);const{vertexAttributes:r,transform:o}=ke(t,e,n);return{vertexAttributes:new b(Gt(Bt({},r),{uv:t.uv})),transform:o,components:[new K({faces:t.faces,material:n&&n.material||null})],spatialReference:e.spatialReference}}function In(t){for(let e=0;e<t.position.length;e+=3)t.position[e+2]+=.5}function Pn(t,e){if(e==null)return;const n=typeof e=="number"?[e,e,e]:[e.width!=null?e.width:1,e.depth!=null?e.depth:1,e.height!=null?e.height:1];_[0]=n[0],_[4]=n[1],_[8]=n[2];for(let r=0;r<t.position.length;r+=3){for(let o=0;o<3;o++)v[o]=t.position[r+o];gt(v,v,_);for(let o=0;o<3;o++)t.position[r+o]=v[o]}if(n[0]!==n[1]||n[1]!==n[2]){_[0]=1/n[0],_[4]=1/n[1],_[8]=1/n[2];for(let r=0;r<t.normal.length;r+=3){for(let o=0;o<3;o++)v[o]=t.normal[r+o];gt(v,v,_),je(v,v);for(let o=0;o<3;o++)t.normal[r+o]=v[o]}}}const Ln={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},jn={south:0,east:1,north:2,west:3,up:4,down:5},v=M(),_=Ht(),me=W.getLogger("esri.geometry.support.meshUtils.rotate");function _n(t,e,n){if(!t.vertexAttributes||!t.vertexAttributes.position||e[3]===0)return;const r=t.spatialReference;if(f(t.transform)){var o;(n==null?void 0:n.geographic)!=null&&n.geographic!==t.transform.geographic&&me.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`);const a=(o=n==null?void 0:n.origin)!=null?o:t.transform.getOriginPoint(r);Sn(t.transform,e,a)}else{var s;const a=(s=n==null?void 0:n.origin)!=null?s:t.origin;$t(t.spatialReference,n)?Nn(t,e,a):Un(t,e,a)}}function Sn(t,e,n){const r=ie(J,n.x,n.y,n.z),o=mt(J,r,t.origin);t.applyLocalInverse(o,Kt),t.rotation=Rt(t.rotation,e,lt()),t.applyLocalInverse(o,o),mt(o,o,Kt),t.translation=jt(M(),t.translation,o)}function Nn(t,e,n){const r=t.spatialReference,o=_t(r),s=de;N(n,s,o)||N(t.origin,s,o);const a=t.vertexAttributes.position,i=t.vertexAttributes.normal,c=t.vertexAttributes.tangent,l=new Float64Array(a.length),g=f(i)?new Float32Array(i.length):null,m=f(c)?new Float32Array(c.length):null;ue(o,s,wt,o),pe(ee,wt);const p=te;gt(Ct(te),Ct(e),ee),p[3]=e[3],St(a,r,l),f(i)&&Nt(i,a,l,r,g),f(c)&&Ut(c,a,l,r,m),Q(l,p,3,s),zt(l,a,r),f(i)&&(Q(g,p,3),Wt(g,a,l,r,i)),f(c)&&(Q(m,p,4),kt(m,a,l,r,c)),t.vertexAttributesChanged()}function Un(t,e,n){const r=de;if(!N(n,r,t.spatialReference)){const o=t.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,me.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}Q(t.vertexAttributes.position,e,3,r),Q(t.vertexAttributes.normal,e,3),Q(t.vertexAttributes.tangent,e,4),t.vertexAttributesChanged()}function Q(t,e,n,r=le){if(!it(t)){_e(wt,He(e),Ct(e));for(let o=0;o<t.length;o+=n){for(let s=0;s<3;s++)J[s]=t[o+s]-r[s];Se(J,J,wt);for(let s=0;s<3;s++)t[o+s]=J[s]+r[s]}}}const J=M(),Kt=M(),te=lt(),wt=he(),ee=Ht(),de=M(),ye=W.getLogger("esri.geometry.support.meshUtils.scale");function zn(t,e,n){if(!t.vertexAttributes||!t.vertexAttributes.position)return;const r=t.spatialReference;if(f(t.transform)){var o;(n==null?void 0:n.geographic)!=null&&n.geographic!==t.transform.geographic&&ye.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`);const s=(o=n==null?void 0:n.origin)!=null?o:t.transform.getOriginPoint(r);Wn(t.transform,e,s)}else{const s=$t(t.spatialReference,n),a=n&&n.origin||t.origin;s?kn(t,e,a):Hn(t,e,a)}}function Wn(t,e,n){const r=ie(X,n.x,n.y,n.z),o=mt(X,r,t.origin);t.applyLocalInverse(o,ne);const s=ce(M(),t.scale,e);t.scale=s,t.applyLocalInverse(o,o),mt(o,o,ne),t.translation=jt(M(),t.translation,o)}function kn(t,e,n){const r=t.spatialReference,o=_t(r),s=ve;N(n,s,o)||N(t.origin,s,o);const a=t.vertexAttributes.position,i=t.vertexAttributes.normal,c=t.vertexAttributes.tangent,l=new Float64Array(a.length),g=f(i)?new Float32Array(i.length):null,m=f(c)?new Float32Array(c.length):null;St(a,r,l),f(i)&&Nt(i,a,l,r,g),f(c)&&Ut(c,a,l,r,m),we(l,e,s),zt(l,a,r),f(i)&&Wt(g,a,l,r,i),f(c)&&kt(m,a,l,r,c),t.vertexAttributesChanged()}function Hn(t,e,n){const r=ve;if(!N(n,r,t.spatialReference)){const o=t.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,ye.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}we(t.vertexAttributes.position,e,r),t.vertexAttributesChanged()}function we(t,e,n=le){if(t)for(let r=0;r<t.length;r+=3){for(let o=0;o<3;o++)X[o]=t[r+o]-n[o];ce(X,X,e);for(let o=0;o<3;o++)t[r+o]=X[o]+n[o]}}const X=M(),ne=M(),ve=M();var T;const D=W.getLogger("esri.geometry.Mesh");let F=T=class extends be(Me.LoadableMixin(Fe(Oe))){constructor(t){super(t),this.components=null,this.transform=null,this.external=null,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new b,this.type="mesh"}initialize(){(it(this.external)||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.handles.add(De(()=>{var t;return{vertexAttributes:this.vertexAttributes,components:(t=this.components)==null?void 0:t.map(e=>e.clone()),transform:f(this.transform)?this.transform.clone():null}},()=>this._set("external",null),{once:!0,sync:!0}))})}get hasExtent(){return!this.loaded&&f(this.external)&&f(this.external.extent)||this.loaded&&this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0)}get boundingInfo(){const t=this.vertexAttributes.position,e=this.spatialReference;if(t.length===0||this.components&&this.components.length===0)return{extent:new Ot({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:e}),center:new E({x:0,y:0,z:0,spatialReference:e})};const n=f(this.transform)?this.transform.project(t,e):t;let r=1/0,o=1/0,s=1/0,a=-1/0,i=-1/0,c=-1/0,l=0,g=0,m=0;const p=n.length,h=1/(p/3);let y=0;for(;y<p;){const O=n[y++],x=n[y++],$=n[y++];r=Math.min(r,O),o=Math.min(o,x),s=Math.min(s,$),a=Math.max(a,O),i=Math.max(i,x),c=Math.max(c,$),l+=h*O,g+=h*x,m+=h*$}return{extent:new Ot({xmin:r,ymin:o,zmin:s,xmax:a,ymax:i,zmax:c,spatialReference:e}),center:new E({x:l,y:g,z:m,spatialReference:e})}}get anchor(){if(f(this.transform))return this.transform.getOriginPoint(this.spatialReference);const t=this.boundingInfo;return new E({x:t.center.x,y:t.center.y,z:t.extent.zmin,spatialReference:this.spatialReference})}get origin(){return f(this.transform)?this.transform.getOriginPoint(this.spatialReference):this.boundingInfo.center}get extent(){return!this.loaded&&f(this.external)&&f(this.external.extent)?this.external.extent.clone():this.boundingInfo.extent}addComponent(t){this.loaded?(this.components||(this.components=[]),this.components.push(K.from(t)),this.notifyChange("components")):D.error("addComponent()","Mesh must be loaded before applying operations")}removeComponent(t){if(this.loaded){if(this.components){const e=this.components.indexOf(t);if(e!==-1)return this.components.splice(e,1),void this.notifyChange("components")}D.error("removeComponent()","Provided component is not part of the list of components")}else D.error("removeComponent()","Mesh must be loaded before applying operations")}rotate(t,e,n,r){return ht(Ft.x,t,Z),ht(Ft.y,e,re),ht(Ft.z,n,oe),Rt(Z,re,Z),Rt(Z,oe,Z),_n(this,Z,r),this}offset(t,e,n,r){return this.loaded?(pt[0]=t,pt[1]=e,pt[2]=n,$n(this,pt,r),this):(D.error("offset()","Mesh must be loaded before applying operations"),this)}scale(t,e){return this.loaded?(zn(this,t,e),this):(D.error("scale()","Mesh must be loaded before applying operations"),this)}centerAt(t,e){return this.loaded?(cn(this,t,e),this):(D.error("centerAt()","Mesh must be loaded before applying operations"),this)}load(t){return f(this.external)&&this.addResolvingPromise(dn(this,this.external.source,t)),Promise.resolve(this)}clone(){const t=this.components?new Map:null,e=this.components?new Map:null,n={components:this.components?this.components.map(r=>r.cloneWithDeduplication(t,e)):null,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),transform:f(this.transform)?this.transform.clone():null,external:f(this.external)?{source:this.external.source,extent:f(this.external.extent)?this.external.extent.clone():null}:null};return new T(n)}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(t){const{toBinaryGLTF:e}=await import("./gltfexport.3ac5cf83.js");return e(this,t)}static createBox(t,e){if(!(t instanceof E))return D.error(".createBox()","expected location to be a Point instance"),null;const n=new T(ut(On(),t,e));return e&&e.imageFace&&e.imageFace!=="all"?Dn(n,e.imageFace):n}static createSphere(t,e){return t instanceof E?new T(ut(Tn(e&&e.densificationFactor||0),t,e)):(D.error(".createSphere()","expected location to be a Point instance"),null)}static createCylinder(t,e){return t instanceof E?new T(ut(Rn(e&&e.densificationFactor||0),t,e)):(D.error(".createCylinder()","expected location to be a Point instance"),null)}static createPlane(t,e){var n;if(!(t instanceof E))return D.error(".createPlane()","expected location to be a Point instance"),null;const r=(n=e==null?void 0:e.facing)!=null?n:"up",o=Cn(r,e==null?void 0:e.size);return new T(ut(En(r),t,Gt(Bt({},e),{size:o})))}static createFromPolygon(t,e){if(!(t instanceof Te))return D.error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;const n=on(t);return new T({vertexAttributes:new b({position:n.position}),components:[new K({faces:n.faces,shading:"flat",material:e&&e.material||null})],spatialReference:t.spatialReference})}static async createFromGLTF(t,e,n){if(!(t instanceof E))throw D.error(".createfromGLTF()","expected location to be a Point instance"),new Dt("invalid-input","Expected location to be a Point instance");const{loadGLTFMesh:r}=await Lt(import("./loadGLTFMesh.2dc3074c.js"),n);return new T(await r(t,e,n))}static createWithExternalSource(t,e,n){var r,o,s;const a=(r=n==null?void 0:n.extent)!=null?r:null,i=(o=n==null?void 0:n.transform.clone())!=null?o:new dt;i.origin=[t.x,t.y,(s=t.z)!=null?s:0];const c=t.spatialReference;return new T({external:{source:e,extent:a},transform:i,spatialReference:c})}static createIncomplete(t,e){var n,r;const o=(n=e==null?void 0:e.transform.clone())!=null?n:new dt;o.origin=[t.x,t.y,(r=t.z)!=null?r:0];const s=t.spatialReference,a=new T({transform:o,spatialReference:s});return a.addResolvingPromise(Promise.reject(new Dt("mesh-incomplete","Mesh resources are not complete"))),a}};u([d({type:[K],json:{write:!0}})],F.prototype,"components",void 0),u([d({type:dt,json:{write:!0}})],F.prototype,"transform",void 0),u([d({constructOnly:!0})],F.prototype,"external",void 0),u([d({readOnly:!0})],F.prototype,"hasExtent",null),u([d({readOnly:!0})],F.prototype,"boundingInfo",null),u([d({readOnly:!0})],F.prototype,"anchor",null),u([d({readOnly:!0})],F.prototype,"origin",null),u([d({readOnly:!0,json:{read:!1}})],F.prototype,"extent",null),u([d({readOnly:!0,json:{read:!1,write:!0,default:!0}})],F.prototype,"hasZ",void 0),u([d({readOnly:!0,json:{read:!1,write:!0,default:!1}})],F.prototype,"hasM",void 0),u([d({type:b,nonNullable:!0,json:{write:!0}})],F.prototype,"vertexAttributes",void 0),F=T=u([et("esri.geometry.Mesh")],F);const Ft={x:At(1,0,0),y:At(0,1,0),z:At(0,0,1)},Z=lt(),re=lt(),oe=lt(),pt=M(),se=F;var z,vt;(function(t){t.featureGUID="featureGUID",t.assetName="assetName",t.hash="hash",t.type="type",t.conversionStatus="conversionStatus",t.flags="flags",t.complexity="complexity",t.size="size",t.seqNo="seqNo",t.sourceHash="sourceHash",t.assetURL="assetURL"})(z||(z={})),function(t){t.SUBMITTED="SUBMITTED",t.INPROGRESS="INPROGRESS",t.FAILED="FAILED",t.COMPLETED="COMPLETED"}(vt||(vt={}));function Bn(t,e,n){const r=n.features;n.features=[],delete n.geometryType;const o=Ne.fromJSON(n);o.geometryType="mesh";const s=o.spatialReference,a=it(t.outFields)||!t.outFields.length?()=>({}):Gn(t.outFields.includes("*")?null:new Set(t.outFields));for(const i of r){const c=Vn(i,s,e);f(c)&&o.features.push(new Ue({geometry:c,attributes:a(i)}))}return o}function Gn(t){return({attributes:e})=>{if(!e)return{};if(!t)return e;for(const n in e)t.has(n)||delete e[n];return e}}function Vn(t,e,n){const{status:r,source:o}=Yn(t);if(r===S.FAILED)return null;const s=Zn(t,e,n),a=Ot.fromJSON(t.geometry);a.spatialReference=e;const i=qn(t,n);return r===S.PENDING?se.createIncomplete(s,{extent:a,transform:i}):se.createWithExternalSource(s,o,{extent:a,transform:i})}function Zn({attributes:t},e,{transformFieldRoles:n}){return new E({x:t[n.originX],y:t[n.originY],z:t[n.originZ],spatialReference:e})}function qn({attributes:t,assetMappings:e},{transformFieldRoles:n}){var r;return new dt({translation:[t[n.translationX],t[n.translationY],t[n.translationZ]],rotation:ht([t[n.rotationX],t[n.rotationY],t[n.rotationZ]],t[n.rotationDeg]),scale:[t[n.scaleX],t[n.scaleY],t[n.scaleZ]],geographic:!((r=e[z.flags])!=null&&r.includes("PROJECT_VERTICES"))})}function Yn(t){if(!t.assetMappings)return{status:S.FAILED};const e=[],n=new Map;for(const r of t.assetMappings){const o=r[z.seqNo],s=r[z.assetName],a=r[z.assetURL],i=r[z.conversionStatus];if(i===vt.FAILED)return{status:S.FAILED};if(i!==vt.COMPLETED)return{status:S.PENDING};if(o==null)e.push({name:s,source:a});else{const c=n.get(s);let l;c?l=c.multipart:(l=[],e.push({name:s,source:{multipart:l}}),n.set(s,{multipart:l})),l[o]=a}}return{status:S.COMPLETED,source:e}}var S;(function(t){t[t.FAILED=0]="FAILED",t[t.PENDING=1]="PENDING",t[t.COMPLETED=2]="COMPLETED"})(S||(S={}));var sr=Object.freeze(Object.defineProperty({__proto__:null,meshFeatureSetFromJSON:Bn},Symbol.toStringTag,{value:"Module"}));export{sr as a,en as c,K as f,at as m,b as p};
