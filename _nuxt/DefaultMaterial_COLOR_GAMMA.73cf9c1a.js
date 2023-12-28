import{e as fe,h as ge,i as Se,k as le}from"./vec33.63845cde.js";import{c as Ee,u as Ie,r as Oe,e as Ae}from"./types.373a6e47.js";import{a4 as Ne,h5 as Ue,gz as de,a9 as Ce,h6 as pe,t as he,U as Re,d5 as Me,as as $e,o as W,r as K,h7 as me,h8 as Be,dW as ee,bt as g,gM as ve,gG as Le,aW as Pe,gx as Fe,dS as De,dO as Ge,dN as Ve,d_ as je,a2 as ke,bW as ye,by as R,br as U,gt as V,bE as te,gE as Ye,bD as He}from"./entry.a426b012.js";import{L as k,D as Y,C as d,E as v}from"./enums.ad15c731.js";import{r as we}from"./Version.dfd224ec.js";import{t as qe,c as ze,P as Je,e as Xe}from"./quat.18905577.js";import{B as We,g as Ke,d as Qe,i as z,c as re,u as Te,x as Ze,L as et,O as tt,E as rt,F as nt,w as st,q as ot,A as at,V as it}from"./BufferView.1315c973.js";import{o as ut}from"./byteSizeEstimations.4dc27031.js";function er(){return[0,0,0,0]}function tr(n,e,t,s){return[n,e,t,s]}function ct(n,e){return new Float64Array(n,e,4)}var ft=Object.defineProperty,lt=Object.defineProperties,dt=Object.getOwnPropertyDescriptors,ne=Object.getOwnPropertySymbols,pt=Object.prototype.hasOwnProperty,ht=Object.prototype.propertyIsEnumerable,se=(n,e,t)=>e in n?ft(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,h=(n,e)=>{for(var t in e||(e={}))pt.call(e,t)&&se(n,t,e[t]);if(ne)for(var t of ne(e))ht.call(e,t)&&se(n,t,e[t]);return n},mt=(n,e)=>lt(n,dt(e));function rr(n,e,t){if(n.count!==e.count)return void ge.error("source and destination buffers need to have the same number of elements");const s=n.count,r=t[0],o=t[1],a=t[2],c=t[3],u=t[4],i=t[5],f=t[6],l=t[7],m=t[8],T=n.typedBuffer,$=n.typedBufferStride,y=e.typedBuffer,B=e.typedBufferStride;for(let E=0;E<s;E++){const I=E*$,S=E*B,O=y[S],A=y[S+1],N=y[S+2],q=y[S+3];T[I]=r*O+c*A+f*N,T[I+1]=o*O+u*A+l*N,T[I+2]=a*O+i*A+m*N,T[I+3]=q}}function nr(n,e,t){const s=Math.min(n.count,e.count),r=n.typedBuffer,o=n.typedBufferStride,a=e.typedBuffer,c=e.typedBufferStride;for(let u=0;u<s;u++){const i=u*o,f=u*c;r[i]=t*a[f],r[i+1]=t*a[f+1],r[i+2]=t*a[f+2],r[i+3]=t*a[f+3]}}function sr(n,e,t){const s=Math.min(n.count,e.count),r=n.typedBuffer,o=n.typedBufferStride,a=e.typedBuffer,c=e.typedBufferStride;for(let u=0;u<s;u++){const i=u*o,f=u*c;r[i]=a[f]>>t,r[i+1]=a[f+1]>>t,r[i+2]=a[f+2]>>t,r[i+3]=a[f+3]>>t}}function J(n,e){const t=n.count;e||(e=new n.TypedArrayConstructor(t));for(let s=0;s<t;s++)e[s]=n.get(s);return e}function yt(n,e,t){const s=n.typedBuffer,r=n.typedBufferStride,o=e.typedBuffer,a=e.typedBufferStride,c=t?t.count:e.count;let u=(t&&t.dstIndex?t.dstIndex:0)*r,i=(t&&t.srcIndex?t.srcIndex:0)*a;for(let f=0;f<c;++f)s[u]=o[i],s[u+1]=o[i+1],u+=r,i+=a}function or(n,e,t){const s=n.typedBuffer,r=n.typedBufferStride,o=e.typedBuffer,a=e.typedBufferStride,c=t?t.count:e.count;let u=(t&&t.dstIndex?t.dstIndex:0)*r,i=(t&&t.srcIndex?t.srcIndex:0)*a;if(Ee(e.elementType)){const f=Ie(e.elementType);if(Oe(e.elementType))for(let l=0;l<c;++l)s[u]=Math.max(o[i]/f,-1),s[u+1]=Math.max(o[i+1]/f,-1),u+=r,i+=a;else for(let l=0;l<c;++l)s[u]=o[i]/f,s[u+1]=o[i+1]/f,u+=r,i+=a}else yt(n,e,t);return n}function ar(n,e,t,s){var r,o;const a=n.typedBuffer,c=n.typedBufferStride,u=(r=s==null?void 0:s.count)!=null?r:n.count;let i=((o=s==null?void 0:s.dstIndex)!=null?o:0)*c;for(let f=0;f<u;++f)a[i]=e,a[i+1]=t,i+=c}function ir(n,e,t){const s=n.typedBuffer,r=n.typedBufferStride,o=e.typedBuffer,a=e.typedBufferStride,c=t?t.count:e.count;let u=(t&&t.dstIndex?t.dstIndex:0)*r,i=(t&&t.srcIndex?t.srcIndex:0)*a;for(let f=0;f<c;++f)s[u]=o[i],s[u+1]=o[i+1],s[u+2]=o[i+2],s[u+3]=o[i+3],u+=r,i+=a}function ur(n,e,t,s,r,o){var a,c;const u=n.typedBuffer,i=n.typedBufferStride,f=(a=o==null?void 0:o.count)!=null?a:n.count;let l=((c=o==null?void 0:o.dstIndex)!=null?c:0)*i;for(let m=0;m<f;++m)u[l]=e,u[l+1]=t,u[l+2]=s,u[l+3]=r,l+=i}function cr(n,e){return new n(new ArrayBuffer(e*n.ElementCount*Ae(n.ElementType)))}class fr{constructor(e){this.streamDataRequester=e}async loadJSON(e,t){return this._load("json",e,t)}async loadBinary(e,t){return de(e)?(Ce(t),pe(e)):this._load("binary",e,t)}async loadImage(e,t){return this._load("image",e,t)}async _load(e,t,s){if(he(this.streamDataRequester))return(await Re(t,{responseType:wt[e]})).data;const r=await Me(this.streamDataRequester.request(t,e,s));if(r.ok===!0)return r.value;throw $e(r.error),new W("",`Request for resource failed: ${r.error}`)}}const wt={image:"image",binary:"array-buffer",json:"json"},Tt=Ne.getLogger("esri.views.3d.glTF");class bt{error(e){throw new W("gltf-loader-error",e)}errorUnsupported(e){throw new W("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){Tt.warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}}function _t(n={}){return h({color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply"},n)}function xt(n,e={}){return{data:n,parameters:h({wrap:h({s:Y.REPEAT,t:Y.REPEAT},e.wrap),noUnpackFlip:!0,mipmap:!1},e)}}class oe{constructor(e){this.data=e,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const e=this.offset4;return this.offset4+=1,this.dataUint32[e]}readUint8Array(e){const t=4*this.offset4;return this.offset4+=e/4,new Uint8Array(this.data,t,e)}remainingBytes(){return this.data.byteLength-4*this.offset4}}var M,ae;(function(n){n.SCALAR="SCALAR",n.VEC2="VEC2",n.VEC3="VEC3",n.VEC4="VEC4",n.MAT2="MAT2",n.MAT3="MAT3",n.MAT4="MAT4"})(M||(M={})),function(n){n[n.ARRAY_BUFFER=34962]="ARRAY_BUFFER",n[n.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(ae||(ae={}));const be={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},gt={pbrMetallicRoughness:be,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},St={ESRI_externalColorMixMode:"tint"},ie=(n={})=>{const e=h(h({},be),n.pbrMetallicRoughness),t=Et(h(h({},St),n.extras));return mt(h(h({},gt),n),{pbrMetallicRoughness:e,extras:t})};function Et(n){switch(n.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:ye(n.ESRI_externalColorMixMode),n.ESRI_externalColorMixMode="tint"}return n}const It={magFilter:k.LINEAR,minFilter:k.LINEAR_MIPMAP_LINEAR,wrapS:Y.REPEAT,wrapT:Y.REPEAT},Ot=n=>h(h({},It),n);function At(n){let e,t;return n.replace(/^(.*\/)?([^/]*)$/,(s,r,o)=>(e=r||"",t=o||"","")),{dirPart:e,filePart:t}}const L={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class b{constructor(e,t,s,r,o){this.context=e,this.errorContext=t,this.uri=s,this.json=r,this.glbBuffer=o,this.bufferLoaders=new Map,this.textureLoaders=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=At(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),t.errorUnsupportedIf(r.scenes==null,"Scenes must be defined."),t.errorUnsupportedIf(r.meshes==null,"Meshes must be defined"),t.errorUnsupportedIf(r.nodes==null,"Nodes must be defined."),this._computeNodeParents()}static async load(e,t,s,r){if(de(s)){const c=Pe(s);if(c.mediaType!=="model/gltf-binary")try{const i=JSON.parse(c.isBase64?atob(c.data):c.data);return new b(e,t,s,i)}catch{}const u=pe(s);if(b._isGLBData(u))return this._fromGLBData(e,t,s,u)}if(s.endsWith(".gltf")){const c=await e.loadJSON(s,r);return new b(e,t,s,c)}const o=await e.loadBinary(s,r);if(b._isGLBData(o))return this._fromGLBData(e,t,s,o);const a=await e.loadJSON(s,r);return new b(e,t,s,a)}static _isGLBData(e){const t=new oe(e);return t.remainingBytes()>=4&&t.readUint32()===L.MAGIC}static async _fromGLBData(e,t,s,r){const o=await b._parseGLBData(t,r);return new b(e,t,s,o.json,o.binaryData)}static async _parseGLBData(e,t){const s=new oe(t);e.assert(s.remainingBytes()>=12,"GLB binary data is insufficiently large.");const r=s.readUint32(),o=s.readUint32(),a=s.readUint32();e.assert(r===L.MAGIC,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=a,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(o!==2,"An unsupported GLB container version was detected. Only version 2 is supported.");let c,u,i=0;for(;s.remainingBytes()>=8;){const f=s.readUint32(),l=s.readUint32();i===0?(e.assert(l===L.CHUNK_TYPE_JSON,"First GLB chunk must be JSON."),e.assert(f>=0,"No JSON data found."),c=await $t(s.readUint8Array(f))):i===1?(e.errorUnsupportedIf(l!==L.CHUNK_TYPE_BIN,"Second GLB chunk expected to be BIN."),u=s.readUint8Array(f)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),i+=1}return c||e.error("No GLB JSON chunk detected."),{json:c,binaryData:u}}async getBuffer(e,t){const s=this.json.buffers[e],r=this.errorContext;if(s.uri==null)return r.assert(this.glbBuffer!=null,"GLB buffer not present"),this.glbBuffer;const o=await this._getBufferLoader(e,t);return r.assert(o.byteLength===s.byteLength,"Buffer byte lengths should match."),o}async _getBufferLoader(e,t){const s=this.bufferLoaders.get(e);if(s)return s;const r=this.json.buffers[e],o=this.context.loadBinary(this._resolveUri(r.uri),t).then(a=>new Uint8Array(a));return this.bufferLoaders.set(e,o),o}async getAccessor(e,t){const s=this.errorContext;s.errorUnsupportedIf(!this.json.accessors,"Accessors missing.");const r=this.json.accessors[e];s.errorUnsupportedIf((r==null?void 0:r.bufferView)==null,"Some accessor does not specify a bufferView."),s.errorUnsupportedIf(r.type in[M.MAT2,M.MAT3,M.MAT4],`AttributeType ${r.type} is not supported`);const o=this.json.bufferViews[r.bufferView],a=await this.getBuffer(o.buffer,t),c=Ct[r.type],u=Rt[r.componentType],i=c*u,f=o.byteStride||i;return{raw:a.buffer,byteStride:f,byteOffset:a.byteOffset+(o.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:f===i,componentCount:c,componentByteSize:u,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(e.indices==null)return null;const s=await this.getAccessor(e.indices,t);if(s.isDenselyPacked)switch(s.componentType){case d.UNSIGNED_BYTE:return new Uint8Array(s.raw,s.byteOffset,s.entryCount);case d.UNSIGNED_SHORT:return new Uint16Array(s.raw,s.byteOffset,s.entryCount);case d.UNSIGNED_INT:return new Uint32Array(s.raw,s.byteOffset,s.entryCount)}else switch(s.componentType){case d.UNSIGNED_BYTE:return J(this._wrapAccessor(Qe,s));case d.UNSIGNED_SHORT:return J(this._wrapAccessor(Ke,s));case d.UNSIGNED_INT:return J(this._wrapAccessor(We,s))}}async getPositionData(e,t){const s=this.errorContext;s.errorUnsupportedIf(e.attributes.POSITION==null,"No POSITION vertex data found.");const r=await this.getAccessor(e.attributes.POSITION,t);return s.errorUnsupportedIf(r.componentType!==d.FLOAT,"Expected type FLOAT for POSITION vertex attribute, but found "+F[r.componentType]),s.errorUnsupportedIf(r.componentCount!==3,"POSITION vertex attribute must have 3 components, but found "+r.componentCount.toFixed()),this._wrapAccessor(z,r)}async getNormalData(e,t){const s=this.errorContext;s.assert(e.attributes.NORMAL!=null,"No NORMAL vertex data found.");const r=await this.getAccessor(e.attributes.NORMAL,t);return s.errorUnsupportedIf(r.componentType!==d.FLOAT,"Expected type FLOAT for NORMAL vertex attribute, but found "+F[r.componentType]),s.errorUnsupportedIf(r.componentCount!==3,"NORMAL vertex attribute must have 3 components, but found "+r.componentCount.toFixed()),this._wrapAccessor(z,r)}async getTangentData(e,t){const s=this.errorContext;s.assert(e.attributes.TANGENT!=null,"No TANGENT vertex data found.");const r=await this.getAccessor(e.attributes.TANGENT,t);return s.errorUnsupportedIf(r.componentType!==d.FLOAT,"Expected type FLOAT for TANGENT vertex attribute, but found "+F[r.componentType]),s.errorUnsupportedIf(r.componentCount!==4,"TANGENT vertex attribute must have 4 components, but found "+r.componentCount.toFixed()),new re(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*r.entryCount)}async getTextureCoordinates(e,t){const s=this.errorContext;s.assert(e.attributes.TEXCOORD_0!=null,"No TEXCOORD_0 vertex data found.");const r=await this.getAccessor(e.attributes.TEXCOORD_0,t);return s.errorUnsupportedIf(r.componentCount!==2,"TEXCOORD_0 vertex attribute must have 2 components, but found "+r.componentCount.toFixed()),r.componentType===d.FLOAT?this._wrapAccessor(Te,r):(s.errorUnsupportedIf(!r.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),Mt(r))}async getVertexColors(e,t){const s=this.errorContext;s.assert(e.attributes.COLOR_0!=null,"No COLOR_0 vertex data found.");const r=await this.getAccessor(e.attributes.COLOR_0,t);if(s.errorUnsupportedIf(r.componentCount!==4&&r.componentCount!==3,"COLOR_0 attribute must have 3 or 4 components, but found "+r.componentCount.toFixed()),r.componentCount===4){if(r.componentType===d.FLOAT)return this._wrapAccessor(re,r);if(r.componentType===d.UNSIGNED_BYTE)return this._wrapAccessor(Ze,r);if(r.componentType===d.UNSIGNED_SHORT)return this._wrapAccessor(et,r)}else if(r.componentCount===3){if(r.componentType===d.FLOAT)return this._wrapAccessor(z,r);if(r.componentType===d.UNSIGNED_BYTE)return this._wrapAccessor(tt,r);if(r.componentType===d.UNSIGNED_SHORT)return this._wrapAccessor(rt,r)}s.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+F[r.componentType])}hasPositions(e){return e.attributes.POSITION!==void 0}hasNormals(e){return e.attributes.NORMAL!==void 0}hasVertexColors(e){return e.attributes.COLOR_0!==void 0}hasTextureCoordinates(e){return e.attributes.TEXCOORD_0!==void 0}hasTangents(e){return e.attributes.TANGENT!==void 0}async getMaterial(e,t,s){let r=this.materialCache.get(e.material);if(!r){const o=e.material!=null?ie(this.json.materials[e.material]):ie(),a=o.pbrMetallicRoughness,c=this.hasVertexColors(e),u=this.getTexture(a.baseColorTexture,t),i=this.getTexture(o.normalTexture,t),f=s?this.getTexture(o.occlusionTexture,t):null,l=s?this.getTexture(o.emissiveTexture,t):null,m=s?this.getTexture(a.metallicRoughnessTexture,t):null,T=e.material!=null?e.material:-1;r={alphaMode:o.alphaMode,alphaCutoff:o.alphaCutoff,color:a.baseColorFactor,doubleSided:!!o.doubleSided,colorTexture:await u,normalTexture:await i,name:o.name,id:T,occlusionTexture:await f,emissiveTexture:await l,emissiveFactor:o.emissiveFactor,metallicFactor:a.metallicFactor,roughnessFactor:a.roughnessFactor,metallicRoughnessTexture:await m,vertexColors:c,ESRI_externalColorMixMode:o.extras.ESRI_externalColorMixMode}}return r}async getTexture(e,t){if(!e)return null;this.errorContext.errorUnsupportedIf((e.texCoord||0)!==0,"Only TEXCOORD with index 0 is supported.");const s=e.index,r=this.errorContext,o=this.json.textures[s],a=Ot(o.sampler!=null?this.json.samplers[o.sampler]:{});r.errorUnsupportedIf(o.source==null,"Source is expected to be defined for a texture.");const c=this.json.images[o.source],u=await this._loadTextureImageData(s,o,t);return Fe(this.textureCache,s,()=>{const i=l=>l===33071||l===33648||l===10497,f=l=>(r.error(`Unexpected TextureSampler WrapMode: ${l}. Using default REPEAT(10497).`),10497);return{data:u,wrapS:i(a.wrapS)?a.wrapS:f(a.wrapS),wrapT:i(a.wrapT)?a.wrapT:f(a.wrapT),minFilter:a.minFilter,name:c.name,id:s}})}getNodeTransform(e){if(e===void 0)return Ut;let t=this.nodeTransformCache.get(e);if(!t){const s=this.getNodeTransform(this._getNodeParent(e)),r=this.json.nodes[e];r.matrix?t=De(fe(),s,r.matrix):r.translation||r.rotation||r.scale?(t=le(s),r.translation&&Ge(t,t,r.translation),r.rotation&&(P[3]=Je(P,r.rotation),Ve(t,t,P[3],P)),r.scale&&je(t,t,r.scale)):t=s,this.nodeTransformCache.set(e,t)}return t}_wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}_resolveUri(e){return ke(e,this.baseUri)}_getNodeParent(e){return this.nodeParentMap.get(e)}_checkVersionSupported(){const e=we.parse(this.json.asset.version,"glTF");Nt.validate(e)}_checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&e.extensionsRequired.length!==0&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach((e,t)=>{e.children&&e.children.forEach(s=>{this.nodeParentMap.set(s,t)})})}async _loadTextureImageData(e,t,s){const r=this.textureLoaders.get(e);if(r)return r;const o=this._createTextureLoader(t,s);return this.textureLoaders.set(e,o),o}async _createTextureLoader(e,t){const s=this.json.images[e.source];if(s.uri)return this.context.loadImage(this._resolveUri(s.uri),t);const r=this.errorContext;r.errorUnsupportedIf(s.bufferView==null,"Image bufferView must be defined."),r.errorUnsupportedIf(s.mimeType==null,"Image mimeType must be defined.");const o=this.json.bufferViews[s.bufferView],a=await this.getBuffer(o.buffer,t);return r.errorUnsupportedIf(o.byteStride!=null,"byteStride not supported for image buffer"),Bt(new Uint8Array(a.buffer,a.byteOffset+(o.byteOffset||0),o.byteLength),s.mimeType)}}const Nt=new we(2,0,"glTF"),Ut=Ue(fe(),Math.PI/2),P=Xe(),Ct={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},Rt={[d.BYTE]:1,[d.UNSIGNED_BYTE]:1,[d.SHORT]:2,[d.UNSIGNED_SHORT]:2,[d.FLOAT]:4,[d.UNSIGNED_INT]:4};function Mt(n){switch(n.componentType){case d.BYTE:return new it(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case d.UNSIGNED_BYTE:return new at(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case d.SHORT:return new ot(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case d.UNSIGNED_SHORT:return new st(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case d.UNSIGNED_INT:return new nt(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case d.FLOAT:return new Te(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);default:return void ye(n.componentType)}}async function $t(n){return new Promise((e,t)=>{const s=new Blob([n]),r=new FileReader;r.onload=()=>{const o=r.result;e(JSON.parse(o))},r.onerror=o=>{t(o)},r.readAsText(s)})}async function Bt(n,e){return new Promise((t,s)=>{const r=new Blob([n],{type:e}),o=URL.createObjectURL(r),a=new Image;a.addEventListener("load",()=>{URL.revokeObjectURL(o),"decode"in a?a.decode().then(()=>t(a),()=>t(a)):t(a)}),a.addEventListener("error",c=>{URL.revokeObjectURL(o),s(c)}),a.src=o})}const F={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let vt=0;async function lr(n,e,t={},s=!0){const r=await b.load(n,j,e,t),o="gltf_"+vt++,a={lods:[],materials:new Map,textures:new Map,meta:Lt(r)},c=!(!r.json.asset.extras||r.json.asset.extras.ESRI_type!=="symbolResource"),u=new Map;await Pt(r,async(i,f,l,m)=>{var T;const $=(T=u.get(l))!=null?T:0;u.set(l,$+1);const y=i.mode!==void 0?i.mode:v.TRIANGLES,B=y===v.TRIANGLES||y===v.TRIANGLE_STRIP||y===v.TRIANGLE_FAN?y:null;if(he(B))return void j.warnUnsupported("Unsupported primitive mode ("+Vt[y]+"). Skipping primitive.");if(!r.hasPositions(i))return void j.warn("Skipping primitive without POSITION vertex attribute.");const E=r.getPositionData(i,t),I=r.getMaterial(i,t,s),S=r.hasNormals(i)?r.getNormalData(i,t):null,O=r.hasTangents(i)?r.getTangentData(i,t):null,A=r.hasTextureCoordinates(i)?r.getTextureCoordinates(i,t):null,N=r.hasVertexColors(i)?r.getVertexColors(i,t):null,q=r.getIndexData(i,t),xe={transform:le(f),attributes:{position:await E,normal:S?await S:null,texCoord0:A?await A:null,color:N?await N:null,tangent:O?await O:null},indices:await q,primitiveType:B,material:Dt(a,await I,o)};let Z=null;K(a.meta)&&K(a.meta.ESRI_lod)&&a.meta.ESRI_lod.metric==="screenSpaceRadius"&&(Z=a.meta.ESRI_lod.thresholds[l]),a.lods[l]=a.lods[l]||{parts:[],name:m,lodThreshold:Z},a.lods[l].parts[$]=xe});for(const i of a.lods)i.parts=i.parts.filter(f=>!!f);return{model:a,meta:{isEsriSymbolResource:c,uri:r.uri},customMeta:{}}}function Lt(n){const e=n.json;let t=null;return e.nodes.forEach(s=>{const r=s.extras;K(r)&&(r.ESRI_proxyEllipsoid||r.ESRI_lod)&&(t=r)}),t}async function Pt(n,e){const t=n.json,s=t.scenes[t.scene||0].nodes,r=s.length>1,o=[];for(const c of s){const u=t.nodes[c];o.push(a(c,0)),Ft(u)&&!r&&u.extensions.MSFT_lod.ids.forEach((i,f)=>a(i,f+1))}async function a(c,u){const i=t.nodes[c],f=n.getNodeTransform(c);if(j.warnUnsupportedIf(i.weights!=null,"Morph targets are not supported."),i.mesh!=null){const l=t.meshes[i.mesh];for(const m of l.primitives)o.push(e(m,f,u,l.name))}for(const l of i.children||[])o.push(a(l,u))}await Promise.all(o)}function Ft(n){return n.extensions&&n.extensions.MSFT_lod&&Array.isArray(n.extensions.MSFT_lod.ids)}function Dt(n,e,t){const s=o=>{const a=`${t}_tex_${o&&o.id}${o&&o.name?"_"+o.name:""}`;if(o&&!n.textures.has(a)){const c=xt(o.data,{wrap:{s:o.wrapS,t:o.wrapT},mipmap:Gt.some(u=>u===o.minFilter),noUnpackFlip:!0});n.textures.set(a,c)}return a},r=`${t}_mat_${e.id}_${e.name}`;if(!n.materials.has(r)){const o=_t({color:[e.color[0],e.color[1],e.color[2]],opacity:e.color[3],alphaMode:e.alphaMode,alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,colorMixMode:e.ESRI_externalColorMixMode,textureColor:e.colorTexture?s(e.colorTexture):void 0,textureNormal:e.normalTexture?s(e.normalTexture):void 0,textureOcclusion:e.occlusionTexture?s(e.occlusionTexture):void 0,textureEmissive:e.emissiveTexture?s(e.emissiveTexture):void 0,textureMetallicRoughness:e.metallicRoughnessTexture?s(e.metallicRoughnessTexture):void 0,emissiveFactor:[e.emissiveFactor[0],e.emissiveFactor[1],e.emissiveFactor[2]],metallicFactor:e.metallicFactor,roughnessFactor:e.roughnessFactor});n.materials.set(r,o)}return r}const j=new bt,Gt=[k.LINEAR_MIPMAP_LINEAR,k.LINEAR_MIPMAP_NEAREST],Vt=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"];class Q{constructor(e){this.allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return this._itemsPtr===0&&me(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*ue);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,ue));e++)this._items.push(this.allocator())}}const ue=1024;function jt(n,e){return new Float64Array(n,e,2)}class p{constructor(e,t,s){this.itemByteSize=e,this.itemCreate=t,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(s/this.itemByteSize)}get(){this._itemsPtr===0&&me(()=>this._reset());const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const t=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let s=0;s<this._itemsPerBuffer;++s)this._items.push(this.itemCreate(t,s*this.itemByteSize));this._buffers.push(t)}return this._items[this._itemsPtr++]}_reset(){const e=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>e;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(e=C){return new p(16,jt,e)}static createVec3f64(e=C){return new p(24,Be,e)}static createVec4f64(e=C){return new p(32,ct,e)}static createMat3f64(e=C){return new p(72,qe,e)}static createMat4f64(e=C){return new p(128,Se,e)}static createQuatf64(e=C){return new p(32,ze,e)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const C=4*ut.KILOBYTES;p.createVec2f64();p.createVec3f64();p.createVec4f64();p.createMat3f64();p.createMat4f64();p.createQuatf64();function kt(n){return n?{origin:ee(n.origin),vector:ee(n.vector)}:{origin:g(),vector:g()}}new Q(()=>({origin:null,vector:null}));function Yt(n,e,t){return te(X,e,n),te(ce,t,n),Ye(He(X,X,ce))/2}new Q(kt);new Q(()=>({p0:null,p1:null,p2:null}));const X=g(),ce=g();let x=(()=>{const n=new Uint32Array(131072);for(let e=0;e<n.length;++e)n[e]=e;return n})();const _e=new Uint16Array([0]),H=(()=>{const n=new Uint16Array(65536);for(let e=0;e<n.length;++e)n[e]=e;return n})();function Ht(n){if(n===1)return _e;if(n<H.length)return new Uint16Array(H.buffer,0,n);if(n>x.length){const e=Math.max(2*x.length,n);x=new Uint32Array(e);for(let t=0;t<x.length;t++)x[t]=t}return new Uint32Array(x.buffer,0,n)}function dr(n){if(n===1)return new Uint16Array(_e);if(n<H.length)return new Uint16Array(H.slice(0,n));if(n>x.length){const e=new Uint32Array(n);for(let t=0;t<e.length;t++)e[t]=t;return e}return new Uint32Array(x.slice(0,n))}function pr(n,e,t){if(!n)return!1;const{size:s,data:r}=n;R(t,0,0,0),R(_,0,0,0);let o=0,a=0;for(let c=0;c<e.length-2;c+=3){const u=e[c+0]*s,i=e[c+1]*s,f=e[c+2]*s;R(w,r[u+0],r[u+1],r[u+2]),R(D,r[i+0],r[i+1],r[i+2]),R(G,r[f+0],r[f+1],r[f+2]);const l=Yt(w,D,G);l?(U(w,w,D),U(w,w,G),V(w,w,1/3*l),U(t,t,w),o+=l):(U(_,_,w),U(_,_,D),U(_,_,G),a+=3)}return(a!==0||o!==0)&&(o!==0?(V(t,t,1/o),!0):a!==0&&(V(t,_,1/a),!0))}function hr(n,e,t){if(!n||!e)return!1;const{size:s,data:r}=n;R(t,0,0,0);let o=-1,a=0;for(let c=0;c<e.length;c++){const u=e[c]*s;o!==u&&(t[0]+=r[u+0],t[1]+=r[u+1],t[2]+=r[u+2],a++),o=u}return a>1&&V(t,t,1/a),a>0}const w=g(),D=g(),G=g(),_=g();function mr(n,e=Ht){return typeof n=="number"?e(n):ve(n)||Le(n)?new Uint32Array(n):n}function yr(n){const e=typeof n=="number"?n:n.length;if(e<3)return new Uint16Array(0);const t=e-2,s=t<=65536?new Uint16Array(3*t):new Uint32Array(3*t);if(typeof n=="number"){let r=0;for(let o=0;o<t;o+=1)o%2==0?(s[r++]=o,s[r++]=o+1,s[r++]=o+2):(s[r++]=o+1,s[r++]=o,s[r++]=o+2)}else{let r=0;for(let o=0;o<t;o+=1)if(o%2==0){const a=n[o],c=n[o+1],u=n[o+2];s[r++]=a,s[r++]=c,s[r++]=u}else{const a=n[o+1],c=n[o],u=n[o+2];s[r++]=a,s[r++]=c,s[r++]=u}}return s}function wr(n){const e=typeof n=="number"?n:n.length;if(e<3)return new Uint16Array(0);const t=e-2,s=t<=65536?new Uint16Array(3*t):new Uint32Array(3*t);if(typeof n=="number"){let r=0;for(let o=0;o<t;++o)s[r++]=0,s[r++]=o+1,s[r++]=o+2;return s}{const r=n[0];let o=n[1],a=0;for(let c=0;c<t;++c){const u=n[c+2];s[a++]=r,s[a++]=o,s[a++]=u,o=u}return s}}const Tr=2.1;export{rr as a,or as b,lr as c,ar as d,ir as e,nr as f,yr as g,mr as h,wr as i,tr as j,dr as k,Tr as l,Ht as m,fr as n,sr as o,hr as p,er as q,cr as r,Q as s,ur as t,pr as u};