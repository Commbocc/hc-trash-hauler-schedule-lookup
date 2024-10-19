import{cy as ti,a4 as Be,bU as da,gA as ua,q as P,bW as ri,c2 as ha,r as g,gB as ii,gC as Nt,t as Y,dP as ma,dQ as ft,bE as Ye,gD as gr,gE as ai,bs as ar,gF as Qt,A as fa,fL as xr,gz as pa,cp as lt,gG as ct,a9 as _r,gH as va,Q as ga,aR as xa,e6 as Dt,dJ as br,by as Ft,bz as wt,gt as Tr,bA as _a,dX as ba,bt as q,dL as or,d5 as oi,U as ni,e as Ta,as as si,o as li,gI as Ar,dW as Aa,gJ as Ea,bX as Ca,ar as Ve,D as Sa,gK as Ra,gL as ya,bD as Ma,cn as Oa,_ as nr,gM as Er,gN as Cr,gO as Zt,cH as wa,gP as ci,dO as di,br as Sr,gs as kt,l as Pa,gQ as Na,gR as Da,ag as Fa}from"./entry.167ec5aa.js";import{a as La}from"./devEnvironmentUtils.592c8a7b.js";import{a as Ia,j as Rr,f as Ba,r as yr,c as $a,e as ui}from"./vec33.c5142060.js";import{a as hi}from"./quat.3a54dc9b.js";import{i as et,c as Jt,u as mi,x as bt,L as za,O as Mr,E as Ua}from"./BufferView.3a8fcdfb.js";import{s as Ga,c as Ha,n as Va,l as Je,r as Xe,a as ka,b as Wa,f as Or,e as qa,t as Xa,i as ja,g as Ya,h as Ka,m as wr,u as Qa,p as Za,j as fi,q as Ja}from"./DefaultMaterial_COLOR_GAMMA.f168e622.js";import{r as pi}from"./Version.97c44476.js";import{O as p}from"./VertexAttribute.90c6b2b6.js";import{C as J,N as vi,S as gi,R as Fe,I as _e,O as se,T as er,E as pt,D as Le,M as ae,P as k,G as Tt,L as Re,Y as mt,V as j,t as V,F as Lt,f as Ie,u as xe,o as Pr,B as ie,n as ke,A as Z,U as b}from"./enums.ad15c731.js";import{c as xi,u as ee,n as eo,a as tr,s as St}from"./Texture.e9e45777.js";import{t as fe}from"./VertexElementDescriptor.b51b5c8c.js";import{o as Pe}from"./context-util.1337370e.js";import{T as _i}from"./InterleavedLayout.a3a82e65.js";import{A as Wt,E as Rt}from"./RenderSlot.e194991a.js";import{t as to}from"./vec3f32.a99d9267.js";import"./vec2.b5add486.js";import"./types.9f7dd3d7.js";import"./byteSizeEstimations.4dc27031.js";var ro=Object.defineProperty,io=Object.defineProperties,ao=Object.getOwnPropertyDescriptors,Nr=Object.getOwnPropertySymbols,oo=Object.prototype.hasOwnProperty,no=Object.prototype.propertyIsEnumerable,Dr=(t,e,r)=>e in t?ro(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,X=(t,e)=>{for(var r in e||(e={}))oo.call(e,r)&&Dr(t,r,e[r]);if(Nr)for(var r of Nr(e))no.call(e,r)&&Dr(t,r,e[r]);return t},It=(t,e)=>io(t,ao(e));async function bi(t,e){const{data:r}=await ni(t,X({responseType:"image"},e));return r}var de,Ze,Fr,le,Lr,At,be,Ir,Br,tt,vt,$r,W,zr;(function(t){t[t.None=0]="None",t[t.Front=1]="Front",t[t.Back=2]="Back",t[t.COUNT=3]="COUNT"})(de||(de={})),function(t){t[t.Less=0]="Less",t[t.Lequal=1]="Lequal",t[t.COUNT=2]="COUNT"}(Ze||(Ze={})),function(t){t[t.NONE=0]="NONE",t[t.SMAA=1]="SMAA"}(Fr||(Fr={})),function(t){t[t.Color=0]="Color",t[t.Alpha=1]="Alpha",t[t.FrontFace=2]="FrontFace",t[t.NONE=3]="NONE",t[t.COUNT=4]="COUNT"}(le||(le={})),function(t){t[t.BACKGROUND=0]="BACKGROUND",t[t.UPDATE=1]="UPDATE"}(Lr||(Lr={})),function(t){t[t.NOT_LOADED=0]="NOT_LOADED",t[t.LOADING=1]="LOADING",t[t.LOADED=2]="LOADED"}(At||(At={})),function(t){t[t.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",t[t.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(be||(be={})),function(t){t[t.ASYNC=0]="ASYNC",t[t.SYNC=1]="SYNC"}(Ir||(Ir={})),function(t){t[t.Highlight=0]="Highlight",t[t.MaskOccludee=1]="MaskOccludee",t[t.COUNT=2]="COUNT"}(Br||(Br={})),function(t){t[t.Triangle=0]="Triangle",t[t.Point=1]="Point",t[t.Line=2]="Line"}(tt||(tt={})),function(t){t[t.STRETCH=1]="STRETCH",t[t.PAD=2]="PAD"}(vt||(vt={})),function(t){t[t.CHANGED=0]="CHANGED",t[t.UNCHANGED=1]="UNCHANGED"}($r||($r={})),function(t){t[t.Blend=0]="Blend",t[t.Opaque=1]="Opaque",t[t.Mask=2]="Mask",t[t.MaskBlend=3]="MaskBlend",t[t.COUNT=4]="COUNT"}(W||(W={})),function(t){t[t.OFF=0]="OFF",t[t.ON=1]="ON"}(zr||(zr={}));class so{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function oe(t,e){if(!t)throw e=e||"assert",console.log(new Error(e).stack),new so(e)}class sr{constructor(e,r,i,a){this.primitiveIndices=e,this._numIndexPerPrimitive=r,this.indices=i,this.position=a,this.center=q(),oe(e.length>=1),oe(i.length%this._numIndexPerPrimitive==0),oe(i.length>=e.length*this._numIndexPerPrimitive),oe(a.size===3||a.size===4);const{data:n,size:o}=a,s=e.length;let c=o*i[this._numIndexPerPrimitive*e[0]];We.clear(),We.push(c),this.bbMin=or(n[c],n[c+1],n[c+2]),this.bbMax=Aa(this.bbMin);for(let u=0;u<s;++u){const f=this._numIndexPerPrimitive*e[u];for(let m=0;m<this._numIndexPerPrimitive;++m){c=o*i[f+m],We.push(c);let x=n[c];this.bbMin[0]=Math.min(x,this.bbMin[0]),this.bbMax[0]=Math.max(x,this.bbMax[0]),x=n[c+1],this.bbMin[1]=Math.min(x,this.bbMin[1]),this.bbMax[1]=Math.max(x,this.bbMax[1]),x=n[c+2],this.bbMin[2]=Math.min(x,this.bbMin[2]),this.bbMax[2]=Math.max(x,this.bbMax[2])}}Qt(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let l=this.radius*this.radius;for(let u=0;u<We.length;++u){c=We.getItemAt(u);const f=n[c]-this.center[0],m=n[c+1]-this.center[1],x=n[c+2]-this.center[2],h=f*f+m*m+x*x;if(h<=l)continue;const T=Math.sqrt(h),E=.5*(T-this.radius);this.radius=this.radius+E,l=this.radius*this.radius;const A=E/T;this.center[0]+=f*A,this.center[1]+=m*A,this.center[2]+=x*A}We.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(Ea(this.bbMin,this.bbMax)>1){const e=Qt(q(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,i=new Uint8Array(r),a=new Array(8);for(let l=0;l<8;++l)a[l]=0;const{data:n,size:o}=this.position;for(let l=0;l<r;++l){let u=0;const f=this._numIndexPerPrimitive*this.primitiveIndices[l];let m=o*this.indices[f],x=n[m],h=n[m+1],T=n[m+2];for(let E=1;E<this._numIndexPerPrimitive;++E){m=o*this.indices[f+E];const A=n[m],G=n[m+1],M=n[m+2];A<x&&(x=A),G<h&&(h=G),M<T&&(T=M)}x<e[0]&&(u|=1),h<e[1]&&(u|=2),T<e[2]&&(u|=4),i[l]=u,++a[u]}let s=0;for(let l=0;l<8;++l)a[l]>0&&++s;if(s<2)return;const c=new Array(8);for(let l=0;l<8;++l)c[l]=a[l]>0?new Uint32Array(a[l]):void 0;for(let l=0;l<8;++l)a[l]=0;for(let l=0;l<r;++l){const u=i[l];c[u][a[u]++]=this.primitiveIndices[l]}this._children=new Array(8);for(let l=0;l<8;++l)c[l]!==void 0&&(this._children[l]=new sr(c[l],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){We.prune()}}const We=new ti({deallocator:null});class lr{constructor(){this.id=Ca()}unload(){}}var Et;(function(t){t[t.Layer=0]="Layer",t[t.Object=1]="Object",t[t.Geometry=2]="Geometry",t[t.Material=3]="Material",t[t.Texture=4]="Texture",t[t.COUNT=5]="COUNT"})(Et||(Et={}));class Ut extends lr{constructor(e,r=[],i=tt.Triangle,a=-1){super(),this._primitiveType=i,this.edgeIndicesLength=a,this.type=Et.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[n,o]of e)o&&this._vertexAttributes.set(n,X({},o));if(r==null||r.length===0){const n=lo(this._vertexAttributes),o=wr(n);this.edgeIndicesLength=this.edgeIndicesLength<0?n:this.edgeIndicesLength;for(const s of this._vertexAttributes.keys())this._indices.set(s,o)}else for(const[n,o]of r)o&&(this._indices.set(n,co(o)),n===p.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(n).length:this.edgeIndicesLength))}cloneShallow(){const e=new Ut([],void 0,this._primitiveType,void 0),{_vertexAttributes:r,_indices:i}=e;return this._vertexAttributes.forEach((a,n)=>{r.set(n,a)}),this._indices.forEach((a,n)=>{i.set(n,a)}),e.screenToWorldRatio=this.screenToWorldRatio,e._boundingInfo=this._boundingInfo,e}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const r=this._vertexAttributes.get(e);return r&&!r.exclusive&&(r.data=Array.from(r.data),r.exclusive=!0),r}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return Y(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return this.primitiveType===tt.Triangle?this._computeAttachmentOriginTriangles(e):this._computeAttachmentOriginPoints(e)}_computeAttachmentOriginTriangles(e){const r=this.indices.get(p.POSITION),i=this.vertexAttributes.get(p.POSITION);return Qa(i,r,e)}_computeAttachmentOriginPoints(e){const r=this.indices.get(p.POSITION),i=this.vertexAttributes.get(p.POSITION);return Za(i,r,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(p.POSITION);if(e.length===0)return null;const r=this.primitiveType===tt.Triangle?3:1;oe(e.length%r==0,"Indexing error: "+e.length+" not divisible by "+r);const i=wr(e.length/r),a=this.vertexAttributes.get(p.POSITION);return new sr(i,r,e,a)}}function lo(t){const e=t.values().next().value;return e==null?0:e.data.length/e.size}function co(t){if(t.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return t;for(const e of t)if(e>=65536)return t;return new Uint16Array(t)}function uo(){if(Y(qt)){const t=e=>Fa(`esri/libs/basisu/${e}`);qt=nr(()=>import("./basis_transcoder.f4e46612.js"),["./basis_transcoder.f4e46612.js","./_commonjsHelpers.a430e9ea.js"],import.meta.url).then(e=>e.b).then(({default:e})=>e({locateFile:t}).then(r=>(r.initializeBasis(),delete r.then,r)))}return qt}let qt;var je;(function(t){t[t.ETC1_RGB=0]="ETC1_RGB",t[t.ETC2_RGBA=1]="ETC2_RGBA",t[t.BC1_RGB=2]="BC1_RGB",t[t.BC3_RGBA=3]="BC3_RGBA",t[t.BC4_R=4]="BC4_R",t[t.BC5_RG=5]="BC5_RG",t[t.BC7_M6_RGB=6]="BC7_M6_RGB",t[t.BC7_M5_RGBA=7]="BC7_M5_RGBA",t[t.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",t[t.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",t[t.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",t[t.ATC_RGB=11]="ATC_RGB",t[t.ATC_RGBA=12]="ATC_RGBA",t[t.FXT1_RGB=17]="FXT1_RGB",t[t.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",t[t.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",t[t.ETC2_EAC_R11=20]="ETC2_EAC_R11",t[t.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",t[t.RGBA32=13]="RGBA32",t[t.RGB565=14]="RGB565",t[t.BGR565=15]="BGR565",t[t.RGBA4444=16]="RGBA4444"})(je||(je={}));function ho(t,e){return t.vertexBuffers[e].size/mo(t.layout[e])}function mo(t){return t[0].stride}function fo(t,e,r,i,a=0){const n=t.gl,o=t.capabilities.instancing;t.bindBuffer(r);for(const s of i){const c=e.get(s.name);c===void 0&&console.error(`There is no location for vertex attribute '${s.name}' defined.`);const l=a*s.stride;if(s.count<=4)n.vertexAttribPointer(c,s.count,s.type,s.normalized,s.stride,s.offset+l),n.enableVertexAttribArray(c),s.divisor>0&&o&&o.vertexAttribDivisor(c,s.divisor);else if(s.count===9)for(let u=0;u<3;u++)n.vertexAttribPointer(c+u,3,s.type,s.normalized,s.stride,s.offset+12*u+l),n.enableVertexAttribArray(c+u),s.divisor>0&&o&&o.vertexAttribDivisor(c+u,s.divisor);else if(s.count===16)for(let u=0;u<4;u++)n.vertexAttribPointer(c+u,4,s.type,s.normalized,s.stride,s.offset+16*u+l),n.enableVertexAttribArray(c+u),s.divisor>0&&o&&o.vertexAttribDivisor(c+u,s.divisor);else console.error("Unsupported vertex attribute element count: "+s.count)}}function po(t,e,r,i){const a=t.gl,n=t.capabilities.instancing;t.bindBuffer(r);for(const o of i){const s=e.get(o.name);if(o.count<=4)a.disableVertexAttribArray(s),o.divisor&&o.divisor>0&&n&&n.vertexAttribDivisor(s,0);else if(o.count===9)for(let c=0;c<3;c++)a.disableVertexAttribArray(s+c),o.divisor&&o.divisor>0&&n&&n.vertexAttribDivisor(s+c,0);else if(o.count===16)for(let c=0;c<4;c++)a.disableVertexAttribArray(s+c),o.divisor&&o.divisor>0&&n&&n.vertexAttribDivisor(s+c,0);else console.error("Unsupported vertex attribute element count: "+o.count)}t.unbindBuffer(Z.ARRAY_BUFFER)}function Ti(t){switch(t){case k.ALPHA:case k.LUMINANCE:case k.RED:case k.RED_INTEGER:case b.R8:case b.R8I:case b.R8UI:case b.R8_SNORM:case ie.STENCIL_INDEX8:return 1;case k.LUMINANCE_ALPHA:case k.RG:case k.RG_INTEGER:case b.RGBA4:case b.R16F:case b.R16I:case b.R16UI:case b.RG8:case b.RG8I:case b.RG8UI:case b.RG8_SNORM:case b.RGB565:case b.RGB5_A1:case ie.DEPTH_COMPONENT16:return 2;case k.DEPTH_COMPONENT:case k.RGB:case k.RGB_INTEGER:case b.RGB8:case b.RGB8I:case b.RGB8UI:case b.RGB8_SNORM:case b.SRGB8:case ie.DEPTH_COMPONENT24:return 3;case k.DEPTH_STENCIL:case k.RGBA:case k.RGBA_INTEGER:case b.RGBA8:case b.R32F:case b.R11F_G11F_B10F:case b.RG16F:case b.R32I:case b.R32UI:case b.RG16I:case b.RG16UI:case b.RGBA8I:case b.RGBA8UI:case b.RGBA8_SNORM:case b.SRGB8_ALPHA8:case b.RGB9_E5:case b.RGB10_A2UI:case b.RGB10_A2:case ie.DEPTH_STENCIL:case ie.DEPTH_COMPONENT32F:case ie.DEPTH24_STENCIL8:return 4;case ie.DEPTH32F_STENCIL8:return 5;case b.RGB16F:case b.RGB16I:case b.RGB16UI:return 6;case b.RG32F:case b.RG32I:case b.RG32UI:case b.RGBA16F:case b.RGBA16I:case b.RGBA16UI:return 8;case b.RGB32F:case b.RGB32I:case b.RGB32UI:return 12;case b.RGBA32F:case b.RGBA32I:case b.RGBA32UI:return 16;case V.COMPRESSED_RGB_S3TC_DXT1_EXT:case V.COMPRESSED_RGBA_S3TC_DXT1_EXT:return .5;case V.COMPRESSED_RGBA_S3TC_DXT3_EXT:case V.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case V.COMPRESSED_R11_EAC:case V.COMPRESSED_SIGNED_R11_EAC:case V.COMPRESSED_RGB8_ETC2:case V.COMPRESSED_SRGB8_ETC2:case V.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case V.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return .5;case V.COMPRESSED_RG11_EAC:case V.COMPRESSED_SIGNED_RG11_EAC:case V.COMPRESSED_RGBA8_ETC2_EAC:case V.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}function rr(t){if(Y(t))return 0;if("descriptor"in t)return t.glName?rr(t.descriptor):0;const e=t.internalFormat||"pixelFormat"in t&&t.pixelFormat;if(!e)return 0;const r="hasMipmap"in t&&t.hasMipmap?1.3:1,i=t.width*t.height;return Ti(e)*i*r}let pe=null,yt=null;async function Ai(){return Y(yt)&&(yt=uo(),pe=await yt),yt}function vo(t,e){if(Y(pe))return t.byteLength;const r=new pe.BasisFile(new Uint8Array(t)),i=Ci(r)?Ei(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),e):0;return r.close(),r.delete(),i}function go(t,e){if(Y(pe))return t.byteLength;const r=new pe.KTX2File(new Uint8Array(t)),i=Si(r)?Ei(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),e):0;return r.close(),r.delete(),i}function Ei(t,e,r,i,a){const n=Ti(e?V.COMPRESSED_RGBA8_ETC2_EAC:V.COMPRESSED_RGB8_ETC2),o=a&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(r*i*n*o)}function Ci(t){return t.getNumImages()>=1&&!t.isUASTC()}function Si(t){return t.getFaces()>=1&&t.isETC1S()}async function xo(t,e,r){Y(pe)&&(pe=await Ai());const i=new pe.BasisFile(new Uint8Array(r));if(!Ci(i))return null;i.startTranscoding();const a=Ri(t,e,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),(n,o)=>i.getImageTranscodedSizeInBytes(0,n,o),(n,o,s)=>i.transcodeImage(s,0,n,o,0,0));return i.close(),i.delete(),a}async function _o(t,e,r){Y(pe)&&(pe=await Ai());const i=new pe.KTX2File(new Uint8Array(r));if(!Si(i))return null;i.startTranscoding();const a=Ri(t,e,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),(n,o)=>i.getImageTranscodedSizeInBytes(n,0,0,o),(n,o,s)=>i.transcodeImage(s,n,0,0,o,0,-1,-1));return i.close(),i.delete(),a}function Ri(t,e,r,i,a,n,o,s){const{compressedTextureETC:c,compressedTextureS3TC:l}=t.capabilities,[u,f]=c?i?[je.ETC2_RGBA,V.COMPRESSED_RGBA8_ETC2_EAC]:[je.ETC1_RGB,V.COMPRESSED_RGB8_ETC2]:l?i?[je.BC3_RGBA,V.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[je.BC1_RGB,V.COMPRESSED_RGB_S3TC_DXT1_EXT]:[je.RGBA32,k.RGBA],m=e.hasMipmap?r:Math.min(1,r),x=[];for(let A=0;A<m;A++)x.push(new Uint8Array(o(A,u))),s(A,u,x[A]);const h=x.length>1,T=h?Re.LINEAR_MIPMAP_LINEAR:Re.LINEAR,E=It(X({},e),{samplingMode:T,hasMipmap:h,internalFormat:f,width:a,height:n});return new ee(t,E,{type:"compressed",levels:x})}const dt=Be.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),bo=542327876,To=131072,Ao=4;function cr(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function Eo(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const Co=cr("DXT1"),So=cr("DXT3"),Ro=cr("DXT5"),yo=31,Mo=0,Oo=1,wo=2,Po=3,No=4,Do=7,Fo=20,Lo=21;function Io(t,e,r){const{textureData:i,internalFormat:a,width:n,height:o}=Bo(r,e.hasMipmap);return e.samplingMode=i.levels.length>1?Re.LINEAR_MIPMAP_LINEAR:Re.LINEAR,e.hasMipmap=i.levels.length>1,e.internalFormat=a,e.width=n,e.height=o,new ee(t,e,i)}function Bo(t,e){const r=new Int32Array(t,0,yo);if(r[Mo]!==bo)return dt.error("Invalid magic number in DDS header"),null;if(!(r[Fo]&Ao))return dt.error("Unsupported format, must contain a FourCC code"),null;const i=r[Lo];let a,n;switch(i){case Co:a=8,n=V.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case So:a=16,n=V.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Ro:a=16,n=V.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return dt.error("Unsupported FourCC code:",Eo(i)),null}let o=1,s=r[No],c=r[Po];!(3&s)&&!(3&c)||(dt.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,c=c+3&-4);const l=s,u=c;let f,m;r[wo]&To&&e!==!1&&(o=Math.max(1,r[Do])),o===1||Dt(s)&&Dt(c)||(dt.warn("Ignoring mipmaps of non power of two sized compressed texture."),o=1);let x=r[Oo]+4;const h=[];for(let T=0;T<o;++T)m=(s+3>>2)*(c+3>>2)*a,f=new Uint8Array(t,x,m),h.push(f),x+=m,s=Math.max(1,s>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:h},internalFormat:n,width:l,height:u}}const Gt=new Map([[p.POSITION,0],[p.NORMAL,1],[p.UV0,2],[p.COLOR,3],[p.SIZE,4],[p.TANGENT,4],[p.AUXPOS1,5],[p.SYMBOLCOLOR,5],[p.AUXPOS2,6],[p.FEATUREATTRIBUTE,6],[p.INSTANCEFEATUREATTRIBUTE,6],[p.INSTANCECOLOR,7],[p.MODEL,8],[p.MODELNORMAL,12],[p.MODELORIGINHI,11],[p.MODELORIGINLO,15]]);new fe(p.POSITION,3,J.FLOAT,0,12);new fe(p.POSITION,3,J.FLOAT,0,20),new fe(p.UV0,2,J.FLOAT,12,20);new fe(p.POSITION,3,J.FLOAT,0,32),new fe(p.NORMAL,3,J.FLOAT,12,32),new fe(p.UV0,2,J.FLOAT,24,32);new fe(p.POSITION,3,J.FLOAT,0,16),new fe(p.COLOR,4,J.UNSIGNED_BYTE,12,16);const $o=[new fe(p.POSITION,2,J.FLOAT,0,8)],zo=[new fe(p.POSITION,2,J.FLOAT,0,16),new fe(p.UV0,2,J.FLOAT,8,16)],re=Be.getLogger("esri.views.webgl.BufferObject");function Uo(t){return Na(t)}class Ne{constructor(e,r,i,a){this._context=e,this.bufferType=r,this.usage=i,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment(Ie.Buffer,this),this._glName=this._context.gl.createBuffer(),St(this._context.gl),a&&this.setData(a)}static createIndex(e,r,i){return new Ne(e,Z.ELEMENT_ARRAY_BUFFER,r,i)}static createVertex(e,r,i){return new Ne(e,Z.ARRAY_BUFFER,r,i)}static createUniform(e,r,i){if(e.type!==Pe.WEBGL2)throw new Error("Uniform buffers are supported in WebGL2 only!");return new Ne(e,Z.UNIFORM_BUFFER,r,i)}static createPixelPack(e,r=Lt.STREAM_READ,i){if(e.type!==Pe.WEBGL2)throw new Error("Pixel pack buffers are supported in WebGL2 only!");const a=new Ne(e,Z.PIXEL_PACK_BUFFER,r);return i&&a.setSize(i),a}static createPixelUnpack(e,r=Lt.STREAM_DRAW,i){if(e.type!==Pe.WEBGL2)throw new Error("Pixel unpack buffers are supported in WebGL2 only!");return new Ne(e,Z.PIXEL_UNPACK_BUFFER,r,i)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteSize(){return this.bufferType===Z.ELEMENT_ARRAY_BUFFER?this._indexType===J.UNSIGNED_INT?4*this._size:2*this._size:this._size}get _isVAOAware(){return this.bufferType===Z.ELEMENT_ARRAY_BUFFER||this.bufferType===Z.ARRAY_BUFFER}dispose(){var e;(e=this._context)!=null&&e.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(Ie.Buffer,this),this._context=null):this._glName&&re.warn("Leaked WebGL buffer object")}setSize(e,r=null){if(e<=0&&re.error("Buffer size needs to be positive!"),this.bufferType===Z.ELEMENT_ARRAY_BUFFER&&g(r))switch(this._indexType=r,r){case J.UNSIGNED_SHORT:e*=2;break;case J.UNSIGNED_INT:e*=4}this._setBufferData(e)}setData(e){if(!e)return;let r=e.byteLength;this.bufferType===Z.ELEMENT_ARRAY_BUFFER&&(Er(e)&&(r/=2,this._indexType=J.UNSIGNED_SHORT),Cr(e)&&(r/=4,this._indexType=J.UNSIGNED_INT)),this._setBufferData(r,e)}_setBufferData(e,r=null){this._size=e;const i=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const a=this._context.gl;g(r)?a.bufferData(this.bufferType,r,this.usage):a.bufferData(this.bufferType,e,this.usage),St(a),this._isVAOAware&&this._context.bindVAO(i)}setSubData(e,r=0,i=0,a=e.byteLength){if(!e)return;(r<0||r>=this._size)&&re.error("offset is out of range!");let n=r,o=i,s=a,c=e.byteLength;this.bufferType===Z.ELEMENT_ARRAY_BUFFER&&(Er(e)?(c/=2,n*=2,o*=2,s*=2):Cr(e)&&(c/=4,n*=4,o*=4,s*=4)),a===void 0&&(a=c-1),i>=a&&re.error("end must be bigger than start!"),r+i-a>this._size&&re.error("An attempt to write beyond the end of the buffer!");const l=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const u=this._context.gl,f=ArrayBuffer.isView(e)?e.buffer:e,m=o===0&&s===e.byteLength?f:f.slice(o,s);u.bufferSubData(this.bufferType,n,m),St(u),this._isVAOAware&&this._context.bindVAO(l)}setSubDataFromView(e,r,i,a){if(!e)return;(r<0||r>=this._size)&&re.error("offset is out of range!"),i>=a&&re.error("end must be bigger than start!"),r+i-a>this._size&&re.error("An attempt to write beyond the end of the buffer!");const n=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const o=this._context.gl;if(this._context.type===Pe.WEBGL2)o.bufferSubData(this.bufferType,r*e.BYTES_PER_ELEMENT,e,i,a-i);else{const s=i===0&&a===e.length?e:e.subarray(i,a);o.bufferSubData(this.bufferType,r*e.BYTES_PER_ELEMENT,s)}St(o),this._isVAOAware&&this._context.bindVAO(n)}getSubData(e,r=0,i,a){if(this._context.type!==Pe.WEBGL2)return void re.error("Get buffer subdata is supported in WebGL2 only!");if(i<0||a<0)return void re.error("Problem getting subdata: offset and length were less than zero!");const n=Uo(e)?e.BYTES_PER_ELEMENT:1;if(n*((i??0)+(a??0))>e.byteLength)return void re.error("Problem getting subdata: offset and length exceeded destination size!");r+n*(a??0)>this.byteSize&&re.warn("Potential problem getting subdata: requested data exceeds buffer size!");const o=this._context.gl;this._context.bindBuffer(this,Z.COPY_READ_BUFFER),o.getBufferSubData(Z.COPY_READ_BUFFER,r,e,i,a),this._context.unbindBuffer(Z.COPY_READ_BUFFER)}async getSubDataAsync(e,r=0,i,a){this._context.type===Pe.WEBGL2?(await this._context.clientWaitAsync(),this.getSubData(e,r,i,a)):re.error("Get buffer subdata is supported in WebGL2 only!")}}const qe=Be.getLogger("esri.views.webgl.VertexArrayObject");class Go{constructor(e,r,i,a,n=null){this._context=e,this._locations=r,this._layout=i,this._buffers=a,this._indexBuffer=n,this._glName=null,this._initialized=!1,e.instanceCounter.increment(Ie.VAO,this)}get glName(){return this._glName}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get size(){return Object.keys(this._buffers).reduce((e,r)=>e+this._buffers[r].size,g(this._indexBuffer)?this._indexBuffer.size:0)}get layout(){return this._layout}get locations(){return this._locations}dispose(e=!0){if(!this._context)return void((this._glName||e&&Object.getOwnPropertyNames(this._buffers).length>0)&&qe.warn("Leaked WebGL VAO"));if(this._glName){var r,i;const a=(r=this._context)==null||(i=r.capabilities)==null?void 0:i.vao;a?(a.deleteVertexArray(this._glName),this._glName=null):qe.warn("Leaked WebGL VAO")}if(this._context.getBoundVAO()===this&&this._context.bindVAO(null),e){for(const a in this._buffers)this._buffers[a].dispose(),delete this._buffers[a];this._indexBuffer=Zt(this._indexBuffer)}this._context.instanceCounter.decrement(Ie.VAO,this),this._context=null}initialize(){if(this._initialized)return;const e=this._context.capabilities.vao;if(e){const r=e.createVertexArray();e.bindVertexArray(r),this._bindLayout(),e.bindVertexArray(null),this._glName=r}this._initialized=!0}bind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}_bindLayout(){const{_buffers:e,_layout:r,_indexBuffer:i}=this;e||qe.error("Vertex buffer dictionary is empty!");const a=this._context.gl;for(const n in e){const o=e[n];o||qe.error("Vertex buffer is uninitialized!");const s=r[n];s||qe.error("Vertex element descriptor is empty!"),fo(this._context,this._locations,o,s)}g(i)&&(this._context.capabilities.vao?a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,i.glName):this._context.bindBuffer(i))}unbind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(null):this._unbindLayout()}_unbindLayout(){const{_buffers:e,_layout:r}=this;e||qe.error("Vertex buffer dictionary is empty!");for(const i in e){const a=e[i];a||qe.error("Vertex buffer is uninitialized!");const n=r[i];po(this._context,this._locations,a,n)}g(this._indexBuffer)&&this._context.unbindBuffer(this._indexBuffer.bufferType)}}function Ho(t,e=$o,r=Gt,i=-1,a=1){let n=null;return e===zo?n=new Float32Array([i,i,0,0,a,i,1,0,i,a,0,1,a,a,1,1]):n=new Float32Array([i,i,a,i,i,a,a,a]),new Go(t,r,{geometry:e},{geometry:Ne.createVertex(t,Lt.STATIC_DRAW,n)})}class ut{constructor(e,r){this._context=e,this._desc=r,this.type="renderbuffer",this._context.instanceCounter.increment(Ie.Renderbuffer,this);const i=this._context.gl;this.glName=i.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:a,height:n,internalFormat:o,multisampled:s}=r;if(s){if(this._context.type!==Pe.WEBGL2)throw new Error("Multisampled renderbuffers are not supported in WebGL1!");i.renderbufferStorageMultisample(i.RENDERBUFFER,this.samples,o,a,n)}else i.renderbufferStorage(i.RENDERBUFFER,o,a,n)}get descriptor(){return this._desc}get samples(){const e=this._desc.samples,r=this._context.parameters.maxSamples;return e?Math.min(e,r):r}resize(e,r){const i=this._desc;if(i.width===e&&i.height===r)return;i.width=e,i.height=r;const a=this._context.gl;this._context.bindRenderbuffer(this),i.multisampled?a.renderbufferStorageMultisample(a.RENDERBUFFER,this.samples,i.internalFormat,i.width,i.height):a.renderbufferStorage(a.RENDERBUFFER,i.internalFormat,i.width,i.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(Ie.Renderbuffer,this),this._context=null)}}const Vo=Be.getLogger("esri.views.webgl.FrameBufferObject");class De{constructor(e,r,i=null,a=null){if(this._context=e,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachments=new Map,this._initialized=!1,this._desc=X({},r),e.instanceCounter.increment(Ie.Framebuffer,this),g(i)){Array.isArray(i)||(i=[i]);for(let o=0;o<i.length;++o){const s=i[o],c=xe.COLOR_ATTACHMENT0+o;let l;Gr(s)?(Ce(s)?(l=s.descriptor,this._colorAttachments.set(c,s)):(l=s,this._colorAttachments.set(c,new ee(this._context,l))),Mt(l,this._desc)):(Ur(s)?(l=s.descriptor,this._colorAttachments.set(c,s)):(l=s,this._colorAttachments.set(c,new ut(this._context,l))),Xt(l,this._desc)),this._validateColorAttachmentPoint(c)}}if(g(a)){let o,s;if(Gr(a))this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),Ce(a)?(s=a.descriptor,this._depthStencilTexture=a):(s=a,this._depthStencilTexture=new ee(this._context,s)),Mt(s,this._desc);else{var n;Ur(a)?(s=a.descriptor,o=a):(s=a,o=new ut(this._context,s));const c=(n=this._desc.depthStencilTarget)!=null?n:j.DEPTH_STENCIL_RENDER_BUFFER;c===j.STENCIL_RENDER_BUFFER?this._stencilAttachment=o:c===j.DEPTH_RENDER_BUFFER||c===j.DEPTH_STENCIL_RENDER_BUFFER?this._depthAttachment=o:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),Xt(s,this._desc)}}}dispose(){if(!this._desc)return;const e=this._context.getBoundFramebufferObject();this._disposeColorAttachments(),this._disposeDepthStencilAttachments(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(e),this._context.instanceCounter.decrement(Ie.Framebuffer,this),this._desc=null}get glName(){return this._glName}get descriptor(){return this._desc}get colorTexture(){const e=this._colorAttachments.get(xe.COLOR_ATTACHMENT0);return e&&Ce(e)?e:null}get colorAttachment(){return this._colorAttachments.get(xe.COLOR_ATTACHMENT0)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._desc.width}get height(){return this._desc.height}get gpuMemoryUsage(){return[...this._colorAttachments].reduce((e,[r,i])=>e+rr(i),0)+rr(this.depthStencilAttachment)}getColorTexture(e){const r=this._colorAttachments.get(e);return r&&Ce(r)?r:null}attachColorTexture(e,r=xe.COLOR_ATTACHMENT0){e&&(this._validateColorAttachmentPoint(r),Mt(e.descriptor,this._desc),this._disposeColorAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,r)),this._colorAttachments.set(r,e))}detachColorTexture(e=xe.COLOR_ATTACHMENT0){const r=this._colorAttachments.get(e);if(Ce(r)){const i=r;return this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e)),this._colorAttachments.delete(e),i}}setColorTextureTarget(e,r=xe.COLOR_ATTACHMENT0){const i=this._colorAttachments.get(r);Ce(i)&&this._framebufferTexture2D(i.glName,r,e)}attachDepthStencilTexture(e){if(Y(e))return;const r=e.descriptor;r.pixelFormat!==k.DEPTH_STENCIL&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),r.dataType!==Tt.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),Mt(r,this._desc),this._desc.depthStencilTarget&&this._desc.depthStencilTarget!==j.DEPTH_STENCIL_TEXTURE&&(this._desc.depthStencilTarget=j.DEPTH_STENCIL_TEXTURE),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,Pr)),this._depthStencilTexture=e}detachDepthStencilTexture(){const e=this._depthStencilTexture;return e&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,Pr)),this._depthStencilTexture=null,e}attachDepthStencilBuffer(e){if(Y(e))return;const r=e.descriptor;if(r.internalFormat!==ie.DEPTH_STENCIL&&r.internalFormat!==ie.DEPTH_COMPONENT16&&console.error("Depth/Stencil buffer must have correct internalFormat"),Xt(r,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=r.internalFormat===ie.DEPTH_STENCIL?j.DEPTH_STENCIL_RENDER_BUFFER:j.DEPTH_RENDER_BUFFER,this._initialized){this._context.bindFramebuffer(this);const i=this._context.gl,a=this._desc.depthStencilTarget===j.DEPTH_RENDER_BUFFER?i.DEPTH_ATTACHMENT:i.DEPTH_STENCIL_ATTACHMENT;i.framebufferRenderbuffer(ke.FRAMEBUFFER,a,i.RENDERBUFFER,e.glName)}this._depthAttachment=e}detachDepthStencilBuffer(){const e=this._context.gl,r=this._depthAttachment;if(r&&this._initialized){this._context.bindFramebuffer(this);const i=this._desc.depthStencilTarget===j.DEPTH_RENDER_BUFFER?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(ke.FRAMEBUFFER,i,e.RENDERBUFFER,null)}return this._depthAttachment=null,r}detachAll(){this._colorAttachments.forEach((e,r)=>this._detachColorAttachment(r)),this.detachDepthStencilBuffer(),this.detachDepthStencilTexture()}copyToTexture(e,r,i,a,n,o,s){(e<0||r<0||n<0||o<0)&&console.error("Offsets cannot be negative!"),(i<=0||a<=0)&&console.error("Copy width and height must be greater than zero!");const c=this._desc,l=s.descriptor;s.descriptor.target!==ae.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(e+i>c.width||r+a>c.height||n+i>l.width||o+a>l.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const u=this._context,f=u.bindTexture(s,ee.TEXTURE_UNIT_FOR_UPDATES);u.setActiveTexture(ee.TEXTURE_UNIT_FOR_UPDATES),u.bindFramebuffer(this),u.gl.copyTexSubImage2D(ae.TEXTURE_2D,0,n,o,e,r,i,a),u.bindTexture(f,ee.TEXTURE_UNIT_FOR_UPDATES)}readPixels(e,r,i,a,n,o,s){(i<=0||a<=0)&&console.error("Copy width and height must be greater than zero!"),s||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(e,r,i,a,n,o,s)}async readPixelsAsync(e,r,i,a,n,o,s){if(this._context.type!==Pe.WEBGL2)return tr()&&console.warn("Attempting to read pixels using pixel buffer object without WebGL2"),void this.readPixels(e,r,i,a,n,o,s);const c=this._context.gl,l=Ne.createPixelPack(this._context,Lt.STREAM_READ,s.byteLength);this._context.bindBuffer(l),this._context.bindFramebuffer(this),c.readPixels(e,r,i,a,n,o,0),this._context.unbindBuffer(Z.PIXEL_PACK_BUFFER),await l.getSubDataAsync(s),l.dispose()}resize(e,r){const i=this._desc;if(i.width!==e||i.height!==r){if(!this._initialized)return i.width=e,i.height=r,this._colorAttachments.forEach(a=>{a&&a.resize(e,r)}),void(this._depthStencilTexture&&this._depthStencilTexture.resize(e,r));i.width=e,i.height=r,this._colorAttachments.forEach(a=>{a&&a.resize(e,r)}),this._depthStencilTexture!=null?this._depthStencilTexture.resize(e,r):(this._depthAttachment||this._stencilAttachment)&&(this._depthAttachment&&this._depthAttachment.resize(e,r),this._stencilAttachment&&this._stencilAttachment.resize(e,r)),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1}}initializeAndBind(e=ke.FRAMEBUFFER){var r,i,a,n;const o=this._context.gl;if(this._initialized)return void o.bindFramebuffer(e,this.glName);this._glName&&o.deleteFramebuffer(this._glName);const s=this._context,c=o.createFramebuffer(),l=this._desc,u=(r=l.colorTarget)!=null?r:mt.RENDER_BUFFER,f=(i=l.width)!=null?i:1,m=(a=l.height)!=null?a:1;if(o.bindFramebuffer(e,c),this._colorAttachments.size===0)if(u===mt.TEXTURE||u===mt.CUBEMAP)this._colorAttachments.set(xe.COLOR_ATTACHMENT0,ko(s,l,this.descriptor.colorTarget===mt.CUBEMAP?ae.TEXTURE_CUBE_MAP:ae.TEXTURE_2D));else{const h=new ut(s,{internalFormat:b.RGBA4,width:f,height:m});this._colorAttachments.set(xe.COLOR_ATTACHMENT0,h)}this._colorAttachments.forEach((h,T)=>{h&&(Ce(h)?this._framebufferTexture2D(h.glName,T,Hr(h),e):o.framebufferRenderbuffer(e,T,o.RENDERBUFFER,h.glName))});const x=(n=l.depthStencilTarget)!=null?n:j.NONE;switch(x){case j.DEPTH_RENDER_BUFFER:case j.DEPTH_STENCIL_RENDER_BUFFER:{this._depthAttachment||(this._depthAttachment=new ut(s,{internalFormat:l.depthStencilTarget===j.DEPTH_RENDER_BUFFER?ie.DEPTH_COMPONENT16:ie.DEPTH_STENCIL,width:f,height:m}));const h=x===j.DEPTH_RENDER_BUFFER?o.DEPTH_ATTACHMENT:o.DEPTH_STENCIL_ATTACHMENT;o.framebufferRenderbuffer(e,h,o.RENDERBUFFER,this._depthAttachment.glName);break}case j.STENCIL_RENDER_BUFFER:this._stencilAttachment||(this._stencilAttachment=new ut(s,{internalFormat:ie.STENCIL_INDEX8,width:f,height:m})),o.framebufferRenderbuffer(e,o.STENCIL_ATTACHMENT,o.RENDERBUFFER,this._stencilAttachment.glName);break;case j.DEPTH_STENCIL_TEXTURE:if(!this._depthStencilTexture){s.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");const h={target:ae.TEXTURE_2D,pixelFormat:k.DEPTH_STENCIL,dataType:Tt.UNSIGNED_INT_24_8,samplingMode:Re.NEAREST,wrapMode:Le.CLAMP_TO_EDGE,width:f,height:m};this._depthStencilTexture=new ee(s,h)}this._framebufferTexture2D(this._depthStencilTexture.glName,o.DEPTH_STENCIL_ATTACHMENT,Hr(this._depthStencilTexture),e)}xi()&&o.checkFramebufferStatus(e)!==o.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=c,this._initialized=!0}_framebufferTexture2D(e,r=xe.COLOR_ATTACHMENT0,i=ae.TEXTURE_2D,a=ke.FRAMEBUFFER,n=0){this._context.gl.framebufferTexture2D(a,r,i,e,n)}_detachColorAttachment(e){tr()&&console.warn("Detaching an FBO attachment can be a slow due to invalidating framebuffer completeness!");const r=this._context.gl,i=this._colorAttachments.get(e);return Ce(i)?this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e)):this._initialized&&(this._context.bindFramebuffer(this),r.framebufferRenderbuffer(ke.FRAMEBUFFER,e,r.RENDERBUFFER,null)),this._colorAttachments.delete(e),i}_disposeColorAttachments(){this._colorAttachments.forEach((e,r)=>{this._detachColorAttachment(r),e.dispose()}),this._colorAttachments.clear()}_disposeDepthStencilAttachments(){const e=this._context.gl;if(this._depthAttachment){if(this._initialized){this._context.bindFramebuffer(this);const r=this._desc.depthStencilTarget===j.DEPTH_RENDER_BUFFER?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(ke.FRAMEBUFFER,r,e.RENDERBUFFER,null)}this._depthAttachment.dispose(),this._depthAttachment=null}this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),e.framebufferRenderbuffer(ke.FRAMEBUFFER,e.STENCIL_ATTACHMENT,e.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)}_validateColorAttachmentPoint(e){if(De._MAX_COLOR_ATTACHMENTS===-1){const i=this._context.capabilities.drawBuffers;if(i){const a=this._context.gl;De._MAX_COLOR_ATTACHMENTS=a.getParameter(i.MAX_COLOR_ATTACHMENTS)}else De._MAX_COLOR_ATTACHMENTS=1}const r=e-xe.COLOR_ATTACHMENT0;r+1>De._MAX_COLOR_ATTACHMENTS&&Vo.error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${r+1}. Implementation supports up to ${De._MAX_COLOR_ATTACHMENTS} color attachments`)}}function Ce(t){return"type"in t&&t.type==="texture"}function Ur(t){return"type"in t&&t.type==="renderbuffer"}function Gr(t){return Ce(t)||"pixelFormat"in t}function ko(t,e,r){return new ee(t,{target:r,pixelFormat:k.RGBA,dataType:Tt.UNSIGNED_BYTE,samplingMode:Re.NEAREST,wrapMode:Le.CLAMP_TO_EDGE,width:e.width,height:e.height})}function Mt(t,e){t.target!==ae.TEXTURE_2D&&t.target!==ae.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),e.width!==void 0&&e.width>=0&&e.height!==void 0&&e.height>=0?e.width===t.width&&e.height===t.height||console.error("Color attachment texture must match the framebuffer's!"):(e.width=t.width,e.height=t.height)}function Xt(t,e){e.width!==void 0&&e.width>=0&&e.height!==void 0&&e.height>=0?e.width===t.width&&e.height===t.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(e.width=t.width,e.height=t.height)}function Hr(t){return t.descriptor.target===ae.TEXTURE_CUBE_MAP?ae.TEXTURE_CUBE_MAP_POSITIVE_X:ae.TEXTURE_2D}De._MAX_COLOR_ATTACHMENTS=-1;class K extends lr{constructor(e,r){super(),this.data=e,this.type=Et.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new fa,this.params=r||{},this.params.mipmap=this.params.mipmap!==!1,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:Le.REPEAT,t:Le.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||vt.STRETCH,this.estimatedTexMemRequired=K._estimateTexMemRequired(this.data,this.params),this._startPreload()}_startPreload(){const e=this.data;Y(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){xr(e.src)||e.preload==="auto"&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}_startPreloadImageElement(e){pa(e.src)||xr(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,r){if(Y(e))return 0;if(lt(e)||ct(e))return r.encoding===K.KTX2_ENCODING?go(e,r.mipmap):r.encoding===K.BASIS_ENCODING?vo(e,r.mipmap):e.byteLength;const{width:i,height:a}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?K._getDataDimensions(e):r;return(r.mipmap?4/3:1)*i*a*(r.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){var r;return{target:ae.TEXTURE_2D,pixelFormat:k.RGBA,dataType:Tt.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?Re.LINEAR_MIPMAP_LINEAR:Re.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:(r=this.params.maxAnisotropy)!=null?r:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(e,r){if(g(this._glTexture))return this._glTexture;if(g(this._loadingPromise))return this._loadingPromise;const i=this.data;return Y(i)?(this._glTexture=new ee(e,this._createDescriptor(e),null),this._glTexture):typeof i=="string"?this._loadFromURL(e,r,i):i instanceof Image?this._loadFromImageElement(e,r,i):i instanceof HTMLVideoElement?this._loadFromVideoElement(e,r,i):i instanceof ImageData||i instanceof HTMLCanvasElement?this._loadFromImage(e,i,r):(lt(i)||ct(i))&&this.params.encoding===K.DDS_ENCODING?(this.data=void 0,this._loadFromDDSData(e,i)):(lt(i)||ct(i))&&this.params.encoding===K.KTX2_ENCODING?(this.data=void 0,this._loadFromKTX2(e,i)):(lt(i)||ct(i))&&this.params.encoding===K.BASIS_ENCODING?(this.data=void 0,this._loadFromBasis(e,i)):ct(i)?this._loadFromPixelData(e,i):lt(i)?this._loadFromPixelData(e,new Uint8Array(i)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,r,i){if(!(this.data instanceof HTMLVideoElement)||Y(this._glTexture)||this.data.readyState<gt.HAVE_CURRENT_DATA||i===this.data.currentTime)return i;if(g(this._powerOfTwoStretchInfo)){const{framebuffer:a,vao:n,sourceTexture:o}=this._powerOfTwoStretchInfo;o.setData(this.data),this._drawStretchedTexture(e,r,a,n,o,this._glTexture)}else{const{width:a,height:n}=this.data,{width:o,height:s}=this._glTexture.descriptor;a!==o||n!==s?this._glTexture.updateData(0,0,0,Math.min(a,o),Math.min(n,s),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.data.currentTime}_loadFromDDSData(e,r){return this._glTexture=Io(e,this._createDescriptor(e),r),this._glTexture}_loadFromKTX2(e,r){return this._loadAsync(()=>_o(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromBasis(e,r){return this._loadAsync(()=>xo(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromPixelData(e,r){oe(this.params.width>0&&this.params.height>0);const i=this._createDescriptor(e);return i.pixelFormat=this.params.components===1?k.LUMINANCE:this.params.components===3?k.RGB:k.RGBA,i.width=this.params.width,i.height=this.params.height,this._glTexture=new ee(e,i,r),this._glTexture}_loadFromURL(e,r,i){return this._loadAsync(async a=>{const n=await bi(i,{signal:a});return _r(a),this._loadFromImage(e,n,r)})}_loadFromImageElement(e,r,i){return i.complete?this._loadFromImage(e,i,r):this._loadAsync(async a=>{const n=await va(i,i.src,!1,a);return _r(a),this._loadFromImage(e,n,r)})}_loadFromVideoElement(e,r,i){return i.readyState>=gt.HAVE_CURRENT_DATA?this._loadFromImage(e,i,r):this._loadFromVideoElementAsync(e,r,i)}_loadFromVideoElementAsync(e,r,i){return this._loadAsync(a=>new Promise((n,o)=>{const s=()=>{i.removeEventListener("loadeddata",c),i.removeEventListener("error",l),wa(u)},c=()=>{i.readyState>=gt.HAVE_CURRENT_DATA&&(s(),n(this._loadFromImage(e,i,r)))},l=f=>{s(),o(f||new li("Failed to load video"))};i.addEventListener("loadeddata",c),i.addEventListener("error",l);const u=ga(a,()=>l(xa()))}))}_loadFromImage(e,r,i){const a=K._getDataDimensions(r);this.params.width=a.width,this.params.height=a.height;const n=this._createDescriptor(e);return n.pixelFormat=this.params.components===3?k.RGB:k.RGBA,!this._requiresPowerOfTwo(e,n)||Dt(a.width)&&Dt(a.height)?(n.width=a.width,n.height=a.height,this._glTexture=new ee(e,n,r),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,r,a,n,i),this._glTexture)}_loadAsync(e){const r=new AbortController;this._loadingController=r;const i=e(r.signal);this._loadingPromise=i;const a=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===i&&(this._loadingPromise=null)};return i.then(a,a),i}_requiresPowerOfTwo(e,r){const i=Le.CLAMP_TO_EDGE,a=typeof r.wrapMode=="number"?r.wrapMode===i:r.wrapMode.s===i&&r.wrapMode.t===i;return!eo(e.gl)&&(r.hasMipmap||!a)}_makePowerOfTwoTexture(e,r,i,a,n){const{width:o,height:s}=i,c=br(o),l=br(s);let u;switch(a.width=c,a.height=l,this.params.powerOfTwoResizeMode){case vt.PAD:a.textureCoordinateScaleFactor=[o/c,s/l],u=new ee(e,a),u.updateData(0,0,0,o,s,r);break;case vt.STRETCH:case null:case void 0:u=this._stretchToPowerOfTwo(e,r,a,n());break;default:ri(this.params.powerOfTwoResizeMode)}return a.hasMipmap&&u.generateMipmap(),u}_stretchToPowerOfTwo(e,r,i,a){const n=new ee(e,i),o=new De(e,{colorTarget:mt.TEXTURE,depthStencilTarget:j.NONE},n),s=new ee(e,{target:ae.TEXTURE_2D,pixelFormat:i.pixelFormat,dataType:Tt.UNSIGNED_BYTE,wrapMode:Le.CLAMP_TO_EDGE,samplingMode:Re.LINEAR,flipped:!!i.flipped,maxAnisotropy:8,preMultiplyAlpha:i.preMultiplyAlpha},r),c=Ho(e),l=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,a,o,c,s,n),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:c,sourceTexture:s,framebuffer:o}:(c.dispose(!0),s.dispose(),o.detachColorTexture(),o.dispose()),e.bindFramebuffer(l),n}_drawStretchedTexture(e,r,i,a,n,o){e.bindFramebuffer(i);const s=e.getViewport();e.setViewport(0,0,o.descriptor.width,o.descriptor.height);const c=e.useTechnique(r);c.setUniform4f("uColor",1,1,1,1),c.bindTexture(n,"tex"),e.bindVAO(a),e.drawArrays(pt.TRIANGLE_STRIP,0,ho(a,"geometry")),e.bindFramebuffer(null),e.setViewport(s.x,s.y,s.width,s.height)}unload(){if(g(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:r,sourceTexture:i}=this._powerOfTwoStretchInfo;r.dispose(!0),i.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if(g(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),g(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}var gt;K.DDS_ENCODING="image/vnd-ms.dds",K.KTX2_ENCODING="image/ktx2",K.BASIS_ENCODING="image/x.basis",function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(gt||(gt={}));var ve;(function(t){t[t.Global=1]="Global",t[t.Local=2]="Local"})(ve||(ve={}));var _;(function(t){t[t.Color=0]="Color",t[t.Depth=1]="Depth",t[t.Normal=2]="Normal",t[t.Shadow=3]="Shadow",t[t.Highlight=4]="Highlight",t[t.Draped=5]="Draped",t[t.Occlusion=6]="Occlusion",t[t.Alpha=7]="Alpha",t[t.COUNT=8]="COUNT"})(_||(_={}));function d(t,...e){let r="";for(let i=0;i<e.length;i++)r+=t[i]+e[i];return r+=t[t.length-1],r}(function(t){function e(i){return Math.round(i).toString()}function r(i){return i.toPrecision(8)}t.int=e,t.float=r})(d||(d={}));function Wo(t,e){const r=t.fragment;switch(r.code.add(d`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case te.None:r.code.add(d`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case te.View:r.code.add(d`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case te.WindingOrder:r.code.add(d`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:ri(e.doubleSidedMode);case te.COUNT:}}var te;(function(t){t[t.None=0]="None",t[t.View=1]="View",t[t.WindingOrder=2]="WindingOrder",t[t.COUNT=3]="COUNT"})(te||(te={}));const qo=.1,dr=.001;function Ke(t,e){const r=t.fragment;switch(e.alphaDiscardMode){case W.Blend:r.code.add(d`
        #define discardOrAdjustAlpha(color) { if (color.a < ${d.float(dr)}) { discard; } }
      `);break;case W.Opaque:r.code.add(d`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case W.Mask:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(d`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case W.MaskBlend:t.fragment.uniforms.add("textureAlphaCutoff","float"),t.fragment.code.add(d`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}class Xo{constructor(e){this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRep.release(this._technique)}get technique(){return this._technique}ensureTechnique(e,r,i=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(e,this._material.getTechniqueConfig(i,r),this._technique),this._technique}ensureResources(e){return At.LOADED}}class jo extends Xo{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,r=>this._texture=r),this._acquire(e.normalTextureId,r=>this._textureNormal=r),this._acquire(e.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(e.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(e.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){this._texture=Ve(this._texture),this._textureNormal=Ve(this._textureNormal),this._textureEmissive=Ve(this._textureEmissive),this._textureOcclusion=Ve(this._textureOcclusion),this._textureMetallicRoughness=Ve(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?At.LOADED:At.LOADING}updateTexture(e){(Y(this._texture)||e!==this._texture.id)&&(this._texture=Ve(this._texture),this._textureId=e,this._acquire(this._textureId,r=>this._texture=r))}bindTextures(e){g(this._texture)&&e.bindTexture(this._texture.glTexture,"tex"),g(this._textureNormal)&&e.bindTexture(this._textureNormal.glTexture,"normalTexture"),g(this._textureEmissive)&&e.bindTexture(this._textureEmissive.glTexture,"texEmission"),g(this._textureOcclusion)&&e.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),g(this._textureMetallicRoughness)&&e.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(e){const r=g(this._texture)?this._texture.glTexture:null;g(r)&&r.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",r.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(e,r){if(Y(e))return void r(null);const i=this._textureRepository.acquire(e);if(Sa(i))return++this._numLoading,void i.then(a=>{if(this._disposed)return Ve(a),void r(null);r(a)}).finally(()=>--this._numLoading);r(i)}}function Yo(t){return Math.abs(t*t*t)}function Ko(t,e,r){const i=r.parameters,a=r.paddingPixelsOverride;return ht.scale=Math.min(i.divisor/(e-i.offset),1),ht.factor=Yo(t),ht.minPixelSize=i.minPixelSize,ht.paddingPixels=a,ht}function Qo(t,e){return t===0?e.minPixelSize:e.minPixelSize*(1+2*e.paddingPixels/t)}function Zo(t,e){return Math.max(Da(t*e.scale,t,e.factor),Qo(t,e))}function Jo(t,e,r,i){return Zo(t,Ko(e,r,i))}const ht={scale:0,factor:0,minPixelSize:0,paddingPixels:0};function en(t,e,r){for(let i=0;i<r;++i)e[2*i]=t[i],e[2*i+1]=t[i]-e[2*i]}function tn(t,e,r,i){for(let a=0;a<i;++a)Vr[0]=t[a],en(Vr,jt,1),e[a]=jt[0],r[a]=jt[1]}const Vr=new Float64Array(1),jt=new Float32Array(2);function rn(t){return!!g(t)&&!t.visible}const Ot=da();function an(t,e,r,i,a,n,o){if(!rn(e))if(t.boundingInfo){oe(t.primitiveType===tt.Triangle);const s=r.tolerance;yi(t.boundingInfo,i,a,s,n,o)}else{const s=t.indices.get(p.POSITION),c=t.vertexAttributes.get(p.POSITION);Oi(i,a,0,s.length/3,s,c,void 0,n,o)}}const on=q();function yi(t,e,r,i,a,n){if(Y(t))return;const o=sn(e,r,on);if(Ra(Ot,t.getBBMin()),ya(Ot,t.getBBMax()),g(a)&&a.applyToAabb(Ot),ln(Ot,e,o,i)){const{primitiveIndices:s,indices:c,position:l}=t,u=s?s.length:c.length/3;if(u>fn){const f=t.getChildren();if(f!==void 0){for(let m=0;m<8;++m)f[m]!==void 0&&yi(f[m],e,r,i,a,n);return}}Oi(e,r,0,u,c,l,s,a,n)}}const Mi=q();function Oi(t,e,r,i,a,n,o,s,c){if(o)return nn(t,e,r,i,a,n,o,s,c);const l=n.data,u=n.stride||n.size,f=t[0],m=t[1],x=t[2],h=e[0]-f,T=e[1]-m,E=e[2]-x;for(let A=r,G=3*r;A<i;++A){let M=u*a[G++],y=l[M++],F=l[M++],C=l[M];M=u*a[G++];let S=l[M++],w=l[M++],v=l[M];M=u*a[G++];let R=l[M++],I=l[M++],B=l[M];g(s)&&([y,F,C]=s.applyToVertex(y,F,C,A),[S,w,v]=s.applyToVertex(S,w,v,A),[R,I,B]=s.applyToVertex(R,I,B,A));const D=S-y,z=w-F,$=v-C,U=R-y,ue=I-F,Te=B-C,$e=T*Te-ue*E,at=E*U-Te*h,ot=h*ue-U*T,he=D*$e+z*at+$*ot;if(Math.abs(he)<=Number.EPSILON)continue;const ne=f-y,ze=m-F,Ue=x-C,ge=ne*$e+ze*at+Ue*ot;if(he>0){if(ge<0||ge>he)continue}else if(ge>0||ge<he)continue;const Ae=ze*$-z*Ue,nt=Ue*D-$*ne,st=ne*z-D*ze,Ge=h*Ae+T*nt+E*st;if(he>0){if(Ge<0||ge+Ge>he)continue}else if(Ge>0||ge+Ge<he)continue;const He=(U*Ae+ue*nt+Te*st)/he;He>=0&&c(He,wi(D,z,$,U,ue,Te,Mi),A,!1)}}function nn(t,e,r,i,a,n,o,s,c){const l=n.data,u=n.stride||n.size,f=t[0],m=t[1],x=t[2],h=e[0]-f,T=e[1]-m,E=e[2]-x;for(let A=r;A<i;++A){const G=o[A];let M=3*G,y=u*a[M++],F=l[y++],C=l[y++],S=l[y];y=u*a[M++];let w=l[y++],v=l[y++],R=l[y];y=u*a[M];let I=l[y++],B=l[y++],D=l[y];g(s)&&([F,C,S]=s.applyToVertex(F,C,S,A),[w,v,R]=s.applyToVertex(w,v,R,A),[I,B,D]=s.applyToVertex(I,B,D,A));const z=w-F,$=v-C,U=R-S,ue=I-F,Te=B-C,$e=D-S,at=T*$e-Te*E,ot=E*ue-$e*h,he=h*Te-ue*T,ne=z*at+$*ot+U*he;if(Math.abs(ne)<=Number.EPSILON)continue;const ze=f-F,Ue=m-C,ge=x-S,Ae=ze*at+Ue*ot+ge*he;if(ne>0){if(Ae<0||Ae>ne)continue}else if(Ae>0||Ae<ne)continue;const nt=Ue*U-$*ge,st=ge*z-U*ze,Ge=ze*$-z*Ue,He=h*nt+T*st+E*Ge;if(ne>0){if(He<0||Ae+He>ne)continue}else if(He>0||Ae+He<ne)continue;const vr=(ue*nt+Te*st+$e*Ge)/ne;vr>=0&&c(vr,wi(z,$,U,ue,Te,$e,Mi),G,!1)}}const kr=q(),Wr=q();function wi(t,e,r,i,a,n,o){return Ft(kr,t,e,r),Ft(Wr,i,a,n),Ma(o,kr,Wr),ar(o,o),o}function sn(t,e,r){return Ft(r,1/(e[0]-t[0]),1/(e[1]-t[1]),1/(e[2]-t[2]))}function ln(t,e,r,i){return cn(t,e,r,i,1/0)}function cn(t,e,r,i,a){const n=(t[0]-i-e[0])*r[0],o=(t[3]+i-e[0])*r[0];let s=Math.min(n,o),c=Math.max(n,o);const l=(t[1]-i-e[1])*r[1],u=(t[4]+i-e[1])*r[1];if(c=Math.min(c,Math.max(l,u)),c<0||(s=Math.max(s,Math.min(l,u)),s>c))return!1;const f=(t[2]-i-e[2])*r[2],m=(t[5]+i-e[2])*r[2];return c=Math.min(c,Math.max(f,m)),!(c<0)&&(s=Math.max(s,Math.min(f,m)),!(s>c)&&s<a)}function dn(t,e,r,i,a){let n=(r.screenLength||0)*t.pixelRatio;a&&(n=Jo(n,i,e,a));const o=n*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return Oa(o*e,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function un(t,e,r){if(!t)return;const i=t.parameters,a=t.paddingPixelsOverride;e.setUniform4f(r,i.divisor,i.offset,i.minPixelSize,a)}function Pi(t,e){const r=e?Pi(e):{};for(const i in t){let a=t[i];a&&a.forEach&&(a=mn(a)),a==null&&i in r||(r[i]=a)}return r}function hn(t,e){let r=!1;for(const i in e){const a=e[i];a!==void 0&&(r=!0,Array.isArray(a)?t[i]=a.slice():t[i]=a)}return r}function mn(t){const e=[];return t.forEach(r=>e.push(r)),e}const qr={multiply:1,ignore:2,replace:3,tint:4},fn=1e3;class pn extends lr{constructor(e,r){super(),this.type=Et.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=Gt,this._parameters=Pi(e,r),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e){hn(this._parameters,e)&&(this.validateParameters(this._parameters),this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleInPass(e.pass)&&(this.renderOccluded&e.renderOccludedMask)!=0}isVisibleInPass(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){g(this.repository)&&this.repository.materialChanged(this)}}var ir;(function(t){t[t.Occlude=1]="Occlude",t[t.Transparent=2]="Transparent",t[t.OccludeAndTransparent=4]="OccludeAndTransparent",t[t.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",t[t.Opaque=16]="Opaque"})(ir||(ir={}));const vn={renderOccluded:ir.Occlude};function Ni(t,e,r=er.ADD,i=[0,0,0,0]){return{srcRgb:t,srcAlpha:t,dstRgb:e,dstAlpha:e,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function gn(t,e,r,i,a=er.ADD,n=er.ADD,o=[0,0,0,0]){return{srcRgb:t,srcAlpha:e,dstRgb:r,dstAlpha:i,opRgb:a,opAlpha:n,color:{r:o[0],g:o[1],b:o[2],a:o[3]}}}const xn={face:vi.BACK,mode:gi.CCW},_n={face:vi.FRONT,mode:gi.CCW},bn=t=>t===de.Back?xn:t===de.Front?_n:null,Tn={zNear:0,zFar:1},An={r:!0,g:!0,b:!0,a:!0};function En(t){return Nn.intern(t)}function Cn(t){return Dn.intern(t)}function Sn(t){return Fn.intern(t)}function Rn(t){return Ln.intern(t)}function yn(t){return In.intern(t)}function Mn(t){return Bn.intern(t)}function On(t){return $n.intern(t)}function wn(t){return zn.intern(t)}function Pn(t){return Un.intern(t)}class ye{constructor(e,r){this.makeKey=e,this.makeRef=r,this.interns=new Map}intern(e){if(!e)return null;const r=this.makeKey(e),i=this.interns;return i.has(r)||i.set(r,this.makeRef(e)),i.get(r)}}function Me(t){return"["+t.join(",")+"]"}const Nn=new ye(Di,t=>X({__tag:"Blending"},t));function Di(t){return t?Me([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}const Dn=new ye(Fi,t=>X({__tag:"Culling"},t));function Fi(t){return t?Me([t.face,t.mode]):null}const Fn=new ye(Li,t=>X({__tag:"PolygonOffset"},t));function Li(t){return t?Me([t.factor,t.units]):null}const Ln=new ye(Ii,t=>X({__tag:"DepthTest"},t));function Ii(t){return t?Me([t.func]):null}const In=new ye(Bi,t=>X({__tag:"StencilTest"},t));function Bi(t){return t?Me([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}const Bn=new ye($i,t=>X({__tag:"DepthWrite"},t));function $i(t){return t?Me([t.zNear,t.zFar]):null}const $n=new ye(zi,t=>X({__tag:"ColorWrite"},t));function zi(t){return t?Me([t.r,t.g,t.b,t.a]):null}const zn=new ye(Ui,t=>X({__tag:"StencilWrite"},t));function Ui(t){return t?Me([t.mask]):null}const Un=new ye(Gn,t=>({blending:En(t.blending),culling:Cn(t.culling),polygonOffset:Sn(t.polygonOffset),depthTest:Rn(t.depthTest),stencilTest:yn(t.stencilTest),depthWrite:Mn(t.depthWrite),colorWrite:On(t.colorWrite),stencilWrite:wn(t.stencilWrite)}));function Gn(t){return t?Me([Di(t.blending),Fi(t.culling),Li(t.polygonOffset),Ii(t.depthTest),Bi(t.stencilTest),$i(t.depthWrite),zi(t.colorWrite),Ui(t.stencilWrite)]):null}const Hn=gn(Fe.SRC_ALPHA,Fe.ONE,Fe.ONE_MINUS_SRC_ALPHA,Fe.ONE_MINUS_SRC_ALPHA),Vn=Ni(Fe.ONE,Fe.ONE),kn=Ni(Fe.ZERO,Fe.ONE_MINUS_SRC_ALPHA);function Wn(t){return t===le.FrontFace?null:t===le.Alpha?kn:Vn}const qn=5e5,Xn={factor:-1,units:-2};function jn(t){return t?Xn:null}function Yn(t,e=_e.LESS){return t===le.NONE||t===le.FrontFace?e:_e.LEQUAL}var Xr;(function(t){t[t.X=0]="X",t[t.Y=1]="Y",t[t.Z=2]="Z"})(Xr||(Xr={}));function Kn(){return{origin:null,direction:null}}new Ga(Kn);Be.getLogger("esri.geometry.support.sphere");function Qn(){return Ja()}class Zn{constructor(e=0){this.offset=e,this.sphere=Qn(),this.tmpVertex=q()}applyToVertex(e,r,i){const a=this.objectTransform.transform;let n=a[0]*e+a[4]*r+a[8]*i+a[12],o=a[1]*e+a[5]*r+a[9]*i+a[13],s=a[2]*e+a[6]*r+a[10]*i+a[14];const c=this.offset/Math.sqrt(n*n+o*o+s*s);n+=n*c,o+=o*c,s+=s*c;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*n+l[4]*o+l[8]*s+l[12],this.tmpVertex[1]=l[1]*n+l[5]*o+l[9]*s+l[13],this.tmpVertex[2]=l[2]*n+l[6]*o+l[10]*s+l[14],this.tmpVertex}applyToMinMax(e,r){const i=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*i,e[1]+=e[1]*i,e[2]+=e[2]*i;const a=this.offset/Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);r[0]+=r[0]*a,r[1]+=r[1]*a,r[2]+=r[2]*a}applyToAabb(e){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*i,e[4]+=e[4]*i,e[5]+=e[5]*i,e}applyToBoundingSphere(e){const r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this.offset/r;return this.sphere[0]=e[0]+e[0]*i,this.sphere[1]=e[1]+e[1]*i,this.sphere[2]=e[2]+e[2]*i,this.sphere[3]=e[3]+e[3]*this.offset/r,this.sphere}}const jr=new Zn;function Jn(t){return g(t)?(jr.offset=t,jr):null}function es(t,e,r,i){const a=r.typedBuffer,n=r.typedBufferStride,o=t.length;i*=n;for(let s=0;s<o;++s){const c=2*t[s];a[i]=e[c],a[i+1]=e[c+1],i+=n}}function Gi(t,e,r,i,a){const n=r.typedBuffer,o=r.typedBufferStride,s=t.length;if(i*=o,a==null||a===1)for(let c=0;c<s;++c){const l=3*t[c];n[i]=e[l],n[i+1]=e[l+1],n[i+2]=e[l+2],i+=o}else for(let c=0;c<s;++c){const l=3*t[c];for(let u=0;u<a;++u)n[i]=e[l],n[i+1]=e[l+1],n[i+2]=e[l+2],i+=o}}function ts(t,e,r,i,a=1){const n=r.typedBuffer,o=r.typedBufferStride,s=t.length;if(i*=o,a===1)for(let c=0;c<s;++c){const l=4*t[c];n[i]=e[l],n[i+1]=e[l+1],n[i+2]=e[l+2],n[i+3]=e[l+3],i+=o}else for(let c=0;c<s;++c){const l=4*t[c];for(let u=0;u<a;++u)n[i]=e[l],n[i+1]=e[l+1],n[i+2]=e[l+2],n[i+3]=e[l+3],i+=o}}function rs(t,e,r,i,a,n=1){if(!r)return void Gi(t,e,i,a,n);const o=i.typedBuffer,s=i.typedBufferStride,c=t.length,l=r[0],u=r[1],f=r[2],m=r[4],x=r[5],h=r[6],T=r[8],E=r[9],A=r[10],G=r[12],M=r[13],y=r[14];if(a*=s,n===1)for(let F=0;F<c;++F){const C=3*t[F],S=e[C],w=e[C+1],v=e[C+2];o[a]=l*S+m*w+T*v+G,o[a+1]=u*S+x*w+E*v+M,o[a+2]=f*S+h*w+A*v+y,a+=s}else for(let F=0;F<c;++F){const C=3*t[F],S=e[C],w=e[C+1],v=e[C+2],R=l*S+m*w+T*v+G,I=u*S+x*w+E*v+M,B=f*S+h*w+A*v+y;for(let D=0;D<n;++D)o[a]=R,o[a+1]=I,o[a+2]=B,a+=s}}function is(t,e,r,i,a,n=1){if(!r)return void Gi(t,e,i,a,n);const o=r,s=i.typedBuffer,c=i.typedBufferStride,l=t.length,u=o[0],f=o[1],m=o[2],x=o[4],h=o[5],T=o[6],E=o[8],A=o[9],G=o[10],M=!ci(o),y=1e-6,F=1-y;if(a*=c,n===1)for(let C=0;C<l;++C){const S=3*t[C],w=e[S],v=e[S+1],R=e[S+2];let I=u*w+x*v+E*R,B=f*w+h*v+A*R,D=m*w+T*v+G*R;if(M){const z=I*I+B*B+D*D;if(z<F&&z>y){const $=1/Math.sqrt(z);I*=$,B*=$,D*=$}}s[a+0]=I,s[a+1]=B,s[a+2]=D,a+=c}else for(let C=0;C<l;++C){const S=3*t[C],w=e[S],v=e[S+1],R=e[S+2];let I=u*w+x*v+E*R,B=f*w+h*v+A*R,D=m*w+T*v+G*R;if(M){const z=I*I+B*B+D*D;if(z<F&&z>y){const $=1/Math.sqrt(z);I*=$,B*=$,D*=$}}for(let z=0;z<n;++z)s[a+0]=I,s[a+1]=B,s[a+2]=D,a+=c}}function as(t,e,r,i,a,n=1){if(!r)return void ts(t,e,i,a,n);const o=r,s=i.typedBuffer,c=i.typedBufferStride,l=t.length,u=o[0],f=o[1],m=o[2],x=o[4],h=o[5],T=o[6],E=o[8],A=o[9],G=o[10],M=!ci(o),y=1e-6,F=1-y;if(a*=c,n===1)for(let C=0;C<l;++C){const S=4*t[C],w=e[S],v=e[S+1],R=e[S+2],I=e[S+3];let B=u*w+x*v+E*R,D=f*w+h*v+A*R,z=m*w+T*v+G*R;if(M){const $=B*B+D*D+z*z;if($<F&&$>y){const U=1/Math.sqrt($);B*=U,D*=U,z*=U}}s[a+0]=B,s[a+1]=D,s[a+2]=z,s[a+3]=I,a+=c}else for(let C=0;C<l;++C){const S=4*t[C],w=e[S],v=e[S+1],R=e[S+2],I=e[S+3];let B=u*w+x*v+E*R,D=f*w+h*v+A*R,z=m*w+T*v+G*R;if(M){const $=B*B+D*D+z*z;if($<F&&$>y){const U=1/Math.sqrt($);B*=U,D*=U,z*=U}}for(let $=0;$<n;++$)s[a+0]=B,s[a+1]=D,s[a+2]=z,s[a+3]=I,a+=c}}function Yr(t,e,r,i,a,n=1){const o=i.typedBuffer,s=i.typedBufferStride,c=t.length;if(a*=s,n===1){if(r===4)for(let l=0;l<c;++l){const u=4*t[l];o[a]=e[u],o[a+1]=e[u+1],o[a+2]=e[u+2],o[a+3]=e[u+3],a+=s}else if(r===3)for(let l=0;l<c;++l){const u=3*t[l];o[a]=e[u],o[a+1]=e[u+1],o[a+2]=e[u+2],o[a+3]=255,a+=s}}else if(r===4)for(let l=0;l<c;++l){const u=4*t[l];for(let f=0;f<n;++f)o[a]=e[u],o[a+1]=e[u+1],o[a+2]=e[u+2],o[a+3]=e[u+3],a+=s}else if(r===3)for(let l=0;l<c;++l){const u=3*t[l];for(let f=0;f<n;++f)o[a]=e[u],o[a+1]=e[u+1],o[a+2]=e[u+2],o[a+3]=255,a+=s}}function os(t,e,r,i,a,n){for(const o of e.fieldNames){const s=t.vertexAttributes.get(o),c=t.indices.get(o);if(s&&c)switch(o){case p.POSITION:{oe(s.size===3);const l=a.getField(o,et);l&&rs(c,s.data,r,l,n);break}case p.NORMAL:{oe(s.size===3);const l=a.getField(o,et);l&&is(c,s.data,i,l,n);break}case p.UV0:{oe(s.size===2);const l=a.getField(o,mi);l&&es(c,s.data,l,n);break}case p.COLOR:{oe(s.size===3||s.size===4);const l=a.getField(o,bt);l&&Yr(c,s.data,s.size,l,n);break}case p.SYMBOLCOLOR:{oe(s.size===3||s.size===4);const l=a.getField(o,bt);l&&Yr(c,s.data,s.size,l,n);break}case p.TANGENT:{oe(s.size===4);const l=a.getField(o,Jt);l&&as(c,s.data,i,l,n);break}}}}function Qe(t,e){if(e.slicePlaneEnabled){t.extensions.add("GL_OES_standard_derivatives"),e.sliceEnabledForVertexPrograms&&(t.vertex.uniforms.add("slicePlaneOrigin","vec3"),t.vertex.uniforms.add("slicePlaneBasis1","vec3"),t.vertex.uniforms.add("slicePlaneBasis2","vec3")),t.fragment.uniforms.add("slicePlaneOrigin","vec3"),t.fragment.uniforms.add("slicePlaneBasis1","vec3"),t.fragment.uniforms.add("slicePlaneBasis2","vec3");const r=d`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=d`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,a=e.sliceHighlightDisabled?d`#define highlightSlice(_color_, _pos_) (_color_)`:d`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;e.sliceEnabledForVertexPrograms&&t.vertex.code.add(r),t.fragment.code.add(r),t.fragment.code.add(a)}else{const r=d`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;e.sliceEnabledForVertexPrograms&&t.vertex.code.add(r),t.fragment.code.add(r)}}function ns(t,e,r,i){if(e.slicePlaneEnabled)if(g(r)){if(wt(Ee,r.origin),wt(Oe,r.basis1),wt(we,r.basis2),g(i)&&g(i.origin)&&Ye(Ee,r.origin,i.origin),g(i)&&g(i.view)){const a=g(i.origin)?di(ss,i.view,i.origin):i.view;Sr(Oe,Oe,Ee),Sr(we,we,Ee),ft(Ee,Ee,a),ft(Oe,Oe,a),ft(we,we,a),Ye(Oe,Oe,Ee),Ye(we,we,Ee)}t.setUniform3fv("slicePlaneOrigin",Ee),t.setUniform3fv("slicePlaneBasis1",Oe),t.setUniform3fv("slicePlaneBasis2",we)}else t.setUniform3fv("slicePlaneBasis1",kt),t.setUniform3fv("slicePlaneBasis2",kt),t.setUniform3fv("slicePlaneOrigin",kt)}const Ee=q(),Oe=q(),we=q(),ss=ui();function Hi({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(d`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):t.add(d`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function Vi(t){return!!Pa("force-double-precision-obfuscation")||t.driverTest.doublePrecisionRequiresObfuscation}function ki(t,e){e.instanced&&e.instancedDoublePrecision&&(t.attributes.add(p.MODELORIGINHI,"vec3"),t.attributes.add(p.MODELORIGINLO,"vec3"),t.attributes.add(p.MODEL,"mat3"),t.attributes.add(p.MODELNORMAL,"mat3")),e.instancedDoublePrecision&&(t.vertex.include(Hi,e),t.vertex.uniforms.add("viewOriginHi","vec3"),t.vertex.uniforms.add("viewOriginLo","vec3"));const r=[d`
    vec3 calculateVPos() {
      ${e.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,d`
    vec3 subtractOrigin(vec3 _pos) {
      ${e.instancedDoublePrecision?d`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,d`
    vec3 dpNormal(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,d`
    vec3 dpNormalView(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,e.vertexTangents?d`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${e.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:d``];t.vertex.code.add(r[0]),t.vertex.code.add(r[1]),t.vertex.code.add(r[2]),e.output===_.Normal&&t.vertex.code.add(r[3]),t.vertex.code.add(r[4])}function ls(t,e){tn(e,Kr,Qr,3),t.setUniform3fv("viewOriginHi",Kr),t.setUniform3fv("viewOriginLo",Qr)}const Kr=q(),Qr=q();function cs(t){const e=d`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;t.fragment.code.add(e),t.vertex.code.add(e)}function Ht(t,e){e.normalType===Q.Attribute&&(t.attributes.add(p.NORMAL,"vec3"),t.vertex.code.add(d`vec3 normalModel() {
return normal;
}`)),e.normalType===Q.CompressedAttribute&&(t.include(cs),t.attributes.add(p.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(d`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),e.normalType===Q.ScreenDerivative&&(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(d`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}var Q;(function(t){t[t.Attribute=0]="Attribute",t[t.CompressedAttribute=1]="CompressedAttribute",t[t.Ground=2]="Ground",t[t.ScreenDerivative=3]="ScreenDerivative",t[t.COUNT=4]="COUNT"})(Q||(Q={}));function rt(t,e){e.attributeTextureCoordinates===ce.Default&&(t.attributes.add(p.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.vertex.code.add(d`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),e.attributeTextureCoordinates===ce.Atlas&&(t.attributes.add(p.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(p.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),t.vertex.code.add(d`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),e.attributeTextureCoordinates===ce.None&&t.vertex.code.add(d`void forwardTextureCoordinates() {}`)}var ce;(function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Atlas=2]="Atlas",t[t.COUNT=3]="COUNT"})(ce||(ce={}));function ds(t){t.vertex.code.add(d`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),t.vertex.code.add(d`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(d`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),t.vertex.code.add(d`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),t.vertex.code.add(d`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(d`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),t.vertex.code.add(d`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function Wi(t,e){const r=t.vertex.code;e.verticalOffsetEnabled?(t.vertex.uniforms.add("verticalOffset","vec4"),e.screenSizePerspectiveEnabled&&(t.include(ds),t.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),r.add(d`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${e.viewingMode===ve.Global?d`vec3 worldNormal = normalize(worldPos + localOrigin);`:d`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${e.screenSizePerspectiveEnabled?d`
          float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:d`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):r.add(d`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function us(t,e,r){if(!e.verticalOffset)return;const i=hs(e.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),a=r.camera.pixelRatio||1;t.setUniform4f("verticalOffset",i.screenLength*a,i.perDistance,i.minWorldLength,i.maxWorldLength)}function hs(t,e,r,i=ms){return i.screenLength=t.screenLength,i.perDistance=Math.tan(.5*e)/(.5*r),i.minWorldLength=t.minWorldLength,i.maxWorldLength=t.maxWorldLength,i}const ms={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0},fs=fi(1,1,0,1),ps=fi(1,0,1,1);function vs(t){t.fragment.uniforms.add("depthTex","sampler2D"),t.fragment.uniforms.add("highlightViewportPixelSz","vec4"),t.fragment.constants.add("occludedHighlightFlag","vec4",fs).add("unoccludedHighlightFlag","vec4",ps),t.fragment.code.add(d`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function gs(t,e){t.bindTexture(e.highlightDepthTexture,"depthTex"),t.setUniform4f("highlightViewportPixelSz",0,0,e.inverseViewport[0],e.inverseViewport[1])}function Bt(t,e){t.fragment.uniforms.add("terrainDepthTexture","sampler2D"),t.fragment.uniforms.add("nearFar","vec2"),t.fragment.uniforms.add("inverseViewport","vec2"),t.fragment.code.add(d`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${e.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function xs(t,e){e.multipassTerrainEnabled&&e.terrainLinearDepthTexture&&t.bindTexture(e.terrainLinearDepthTexture,"terrainDepthTexture")}function _s(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(d`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function qi(t,e){t.include(rt,e),t.fragment.code.add(d`
  struct TextureLookupParameter {
    vec2 uv;
    ${e.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),e.attributeTextureCoordinates===ce.Default&&t.fragment.code.add(d`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),e.attributeTextureCoordinates===ce.Atlas&&(t.include(_s),t.fragment.code.add(d`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}to(0,.6,.2);var L;function Xi(t,e){const r=t.fragment,i=e.hasMetalnessAndRoughnessTexture||e.hasEmissionTexture||e.hasOcclusionTexture;e.pbrMode===L.Normal&&i&&t.include(qi,e),e.pbrMode!==L.Schematic?(e.pbrMode===L.Disabled&&r.code.add(d`float getBakedOcclusion() { return 1.0; }`),e.pbrMode===L.Normal&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(d`vec3 mrr;
vec3 emission;
float occlusion;`),e.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),e.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(d`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),e.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),e.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(d`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),e.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),e.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(d`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(d`float getBakedOcclusion() { return 1.0; }`),r.code.add(d`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?"vtc.uv = vuv0;":""}
      ${e.hasMetalnessAndRoughnessTexture?e.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${e.hasEmissionTexture?e.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${e.hasOcclusionTexture?e.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(d`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function bs(t,e,r=!1){r||(t.setUniform3fv("mrrFactors",e.mrrFactors),t.setUniform3fv("emissionFactor",e.emissiveFactor))}(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.COUNT=5]="COUNT"})(L||(L={}));function ur(t){t.code.add(d`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function hr(t){t.fragment.include(ur),t.fragment.uniforms.add("shadowMapTex","sampler2D"),t.fragment.uniforms.add("numCascades","int"),t.fragment.uniforms.add("cascadeDistances","vec4"),t.fragment.uniforms.add("shadowMapMatrix","mat4",4),t.fragment.uniforms.add("depthHalfPixelSz","float"),t.fragment.code.add(d`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = cascadeDistances;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, depthHalfPixelSz, shadowMapTex);
}`)}function Ts(t,e,r){e.shadowMappingEnabled&&e.shadowMap.bindView(t,r)}function xt(t,e){e.vvInstancingEnabled&&(e.vvSize||e.vvColor)&&t.attributes.add(p.INSTANCEFEATUREATTRIBUTE,"vec4"),e.vvSize?(t.vertex.uniforms.add("vvSizeMinSize","vec3"),t.vertex.uniforms.add("vvSizeMaxSize","vec3"),t.vertex.uniforms.add("vvSizeOffset","vec3"),t.vertex.uniforms.add("vvSizeFactor","vec3"),t.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),t.vertex.uniforms.add("vvSymbolAnchor","vec3"),t.vertex.code.add(d`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),t.vertex.code.add(d`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.vvInstancingEnabled?d`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):t.vertex.code.add(d`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(t.vertex.constants.add("vvColorNumber","int",8),t.vertex.code.add(d`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${e.vvInstancingEnabled?d`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):t.vertex.code.add(d`vec4 vvColor() { return vec4(1.0); }`)}function As(t,e){e.vvSizeEnabled&&(t.setUniform3fv("vvSizeMinSize",e.vvSizeMinSize),t.setUniform3fv("vvSizeMaxSize",e.vvSizeMaxSize),t.setUniform3fv("vvSizeOffset",e.vvSizeOffset),t.setUniform3fv("vvSizeFactor",e.vvSizeFactor)),e.vvColorEnabled&&(t.setUniform1fv("vvColorValues",e.vvColorValues),t.setUniform4fv("vvColorColors",e.vvColorColors))}function Es(t,e){As(t,e),e.vvSizeEnabled&&(t.setUniform3fv("vvSymbolAnchor",e.vvSymbolAnchor),t.setUniformMatrix3fv("vvSymbolRotationMatrix",e.vvSymbolRotationMatrix))}function Cs(t,e,r){t.setUniform3f("cameraPosition",r[3]-e[0],r[7]-e[1],r[11]-e[2])}function Ss(t,e){t.setUniformMatrix4fv("proj",e)}function Rs(t,e,r){di(Zr,r,e),t.setUniform3fv("localOrigin",e),t.setUniformMatrix4fv("view",Zr)}const Zr=ua();class ji{constructor(e,r){this._module=e,this._loadModule=r}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}class ys{constructor(e,r,i){this.release=i,r&&(this._config=r.snapshot()),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}destroy(){this._program=Zt(this._program),this._pipeline=this._config=null}reload(e){Zt(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}get program(){return this._program}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,r){}bindMaterial(e,r){}bindDraw(e){}bindPipelineState(e,r=null,i){e.setPipelineState(this.getPipelineState(r,i))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return pt.TRIANGLES}getPipelineState(e,r){return this._pipeline}}class Ms{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,r={key:this.key};for(const i of e)r[i]=this[i];return r}}function N(t={}){return(e,r)=>{var i,a;e._parameterNames=(i=e._parameterNames)!=null?i:[],e._parameterNames.push(r);const n=e._parameterNames.length-1,o=t.count||2,s=Math.ceil(Math.log2(o)),c=(a=e._parameterBits)!=null?a:[0];let l=0;for(;c[l]+s>16;)l++,l>=c.length&&c.push(0);e._parameterBits=c;const u=c[l],f=(1<<s)-1<<u;c[l]+=s,Object.defineProperty(e,r,{get(){return this[n]},set(m){if(this[n]!==m&&(this[n]=m,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~f|+m<<u&f,typeof m!="number"&&typeof m!="boolean"))throw"Configuration value for "+r+" must be boolean or number, got "+typeof m}})}}class Yi{constructor(e,r,i){this._context=e,this._locations=i,this._textures=new Map,this._freeTextureUnits=new ti({deallocator:null}),this._glProgram=e.programCache.acquire(r.generateSource("vertex"),r.generateSource("fragment"),i),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this._fragmentUniforms=tr()?r.fragmentUniforms.entries:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(e,r){this._glProgram.setUniform1i(e,r?1:0)}setUniform1i(e,r){this._glProgram.setUniform1i(e,r)}setUniform1f(e,r){this._glProgram.setUniform1f(e,r)}setUniform1fv(e,r){this._glProgram.setUniform1fv(e,r)}setUniform1iv(e,r){this._glProgram.setUniform1iv(e,r)}setUniform2f(e,r,i){this._glProgram.setUniform2f(e,r,i)}setUniform2fv(e,r){this._glProgram.setUniform2fv(e,r)}setUniform2iv(e,r){this._glProgram.setUniform2iv(e,r)}setUniform3f(e,r,i,a){this._glProgram.setUniform3f(e,r,i,a)}setUniform3fv(e,r){this._glProgram.setUniform3fv(e,r)}setUniform3iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform4f(e,r,i,a,n){this._glProgram.setUniform4f(e,r,i,a,n)}setUniform4fv(e,r){this._glProgram.setUniform4fv(e,r)}setUniform4iv(e,r){this._glProgram.setUniform4iv(e,r)}setUniformMatrix3fv(e,r){this._glProgram.setUniformMatrix3fv(e,r)}setUniformMatrix4fv(e,r){this._glProgram.setUniformMatrix4fv(e,r)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,r){if(Y(e)||e.glName==null){const a=this._textures.get(r);return a&&(this._context.bindTexture(null,a.unit),this._freeTextureUnit(a),this._textures.delete(r)),null}let i=this._textures.get(r);return i==null?(i=this._allocTextureUnit(e),this._textures.set(r,i)):i.texture=e,this._context.useProgram(this),this.setUniform1i(r,i.unit),this._context.bindTexture(e,i.unit),i.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,r)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(r,e.unit)}),g(this._fragmentUniforms)&&this._fragmentUniforms.forEach(e=>{if((e.type==="sampler2D"||e.type==="samplerCube")&&!this._textures.has(e.name))throw new Error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}_e.LESS;_e.ALWAYS;const Os={mask:255},ws={function:{func:_e.ALWAYS,ref:be.OutlineVisualElementMask,mask:be.OutlineVisualElementMask},operation:{fail:se.KEEP,zFail:se.KEEP,zPass:se.ZERO}},Ps={function:{func:_e.ALWAYS,ref:be.OutlineVisualElementMask,mask:be.OutlineVisualElementMask},operation:{fail:se.KEEP,zFail:se.KEEP,zPass:se.REPLACE}};_e.EQUAL,be.OutlineVisualElementMask,be.OutlineVisualElementMask,se.KEEP,se.KEEP,se.KEEP;_e.NOTEQUAL,be.OutlineVisualElementMask,be.OutlineVisualElementMask,se.KEEP,se.KEEP,se.KEEP;function Ki(t,e){e.output===_.Color&&e.receiveShadows?(t.varyings.add("linearDepth","float"),t.vertex.code.add(d`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):e.output===_.Depth||e.output===_.Shadow?(t.varyings.add("linearDepth","float"),t.vertex.uniforms.add("nearFar","vec2"),t.vertex.code.add(d`void forwardLinearDepth() {
linearDepth = (-position_view().z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)):t.vertex.code.add(d`void forwardLinearDepth() {}`)}function Qi(t){t.vertex.code.add(d`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function _t(t,e){const r=X({hasModelTransformation:!1},e);if(r.hasModelTransformation)return r.linearDepth?void t.vertex.code.add(d`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):void t.vertex.code.add(d`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);r.linearDepth?t.vertex.code.add(d`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):t.vertex.code.add(d`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}function mr(t){t.attributes.add(p.POSITION,"vec3"),t.vertex.code.add(d`vec3 positionModel() { return position; }`)}var me;(function(t){t[t.Multiply=1]="Multiply",t[t.Ignore=2]="Ignore",t[t.Replace=3]="Replace",t[t.Tint=4]="Tint"})(me||(me={}));function Ns(t){t.vertex.code.add(d`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${d.int(me.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${d.int(me.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${d.int(me.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${d.int(me.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function Zi(t,e){e.symbolColor?(t.include(Ns),t.attributes.add(p.SYMBOLCOLOR,"vec4"),t.varyings.add("colorMixMode","mediump float")):t.fragment.uniforms.add("colorMixMode","int"),e.symbolColor?t.vertex.code.add(d`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):t.vertex.code.add(d`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}function Ji(t,e){e.attributeColor?(t.attributes.add(p.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(d`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(d`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(d`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function Ds(t,e){t.include(mr),t.vertex.include(Hi,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),t.vertex.uniforms.add("transformWorldFromModelRS","mat3"),t.vertex.uniforms.add("transformWorldFromModelTH","vec3"),t.vertex.uniforms.add("transformWorldFromModelTL","vec3"),t.vertex.uniforms.add("transformWorldFromViewTH","vec3"),t.vertex.uniforms.add("transformWorldFromViewTL","vec3"),t.vertex.uniforms.add("transformViewFromCameraRelativeRS","mat3"),t.vertex.uniforms.add("transformProjFromView","mat4"),t.vertex.code.add(d`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return transformViewFromCameraRelativeRS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),t.fragment.uniforms.add("transformWorldFromViewTL","vec3"),t.fragment.code.add(d`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}function ea(t,e){e.normalType===Q.Attribute||e.normalType===Q.CompressedAttribute?(t.include(Ht,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add("transformNormalGlobalFromModel","mat3"),t.vertex.uniforms.add("transformNormalViewFromGlobal","mat3"),t.vertex.code.add(d`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):e.normalType===Q.Ground?(t.include(Ds,e),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(d`
    void forwardNormal() {
      vNormalWorld = ${e.viewingMode===ve.Global?d`normalize(vPositionWorldCameraRelative);`:d`vec3(0.0, 0.0, 1.0);`}
    }
    `)):t.vertex.code.add(d`void forwardNormal() {}`)}function Fs(t,e){t.fragment.include(ur),e.output===_.Shadow?(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(d`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):e.output===_.Depth&&t.fragment.code.add(d`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}function ta(t,e){const r=t.vertex.code,i=t.fragment.code,a=e.hasModelTransformation;e.output!==_.Depth&&e.output!==_.Shadow||(t.include(_t,{linearDepth:!0,hasModelTransformation:a}),t.include(rt,e),t.include(xt,e),t.include(Fs,e),t.include(Qe,e),t.vertex.uniforms.add("nearFar","vec2"),t.varyings.add("depth","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),r.add(d`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${a?"model,":""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),t.include(Ke,e),i.add(d`
      void main(void) {
        discardBySlice(vpos);
        ${e.hasColorTexture?d`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),e.output===_.Normal&&(t.include(_t,{linearDepth:!1,hasModelTransformation:a}),t.include(Ht,e),t.include(ea,e),t.include(rt,e),t.include(xt,e),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.vertex.uniforms.add("viewNormal","mat4"),t.varyings.add("vPositionView","vec3"),r.add(d`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${e.normalType===Q.Attribute?d`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${a?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),t.include(Qe,e),t.include(Ke,e),i.add(d`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?d`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${e.normalType===Q.ScreenDerivative?d`
            vec3 normal = screenDerivativeNormal(vPositionView);`:d`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),e.output===_.Highlight&&(t.include(_t,{linearDepth:!1,hasModelTransformation:a}),t.include(rt,e),t.include(xt,e),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),r.add(d`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${a?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),t.include(Qe,e),t.include(Ke,e),t.include(vs),i.add(d`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?d`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}function $t(t){t.include(ur),t.code.add(d`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}function Ls(t,e){const r=t.fragment;e.vertexTangents?(t.attributes.add(p.TANGENT,"vec4"),t.varyings.add("vTangent","vec4"),e.doubleSidedMode===te.WindingOrder?r.code.add(d`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(d`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(t.extensions.add("GL_OES_standard_derivatives"),r.code.add(d`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),e.attributeTextureCoordinates!==ce.None&&(t.include(qi,e),r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),r.code.add(d`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${e.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}function fr(t,e){const r=t.fragment;e.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(d`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):r.code.add(d`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}function Is(t,e){const r=t.fragment,i=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;i===0?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(d`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===1?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(d`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===2&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(d`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==L.Normal&&e.pbrMode!==L.Schematic||r.code.add(d`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}function Bs(t){const e=t.fragment;e.uniforms.add("lightingMainDirection","vec3"),e.uniforms.add("lightingMainIntensity","vec3"),e.uniforms.add("lightingFixedFactor","float"),e.uniforms.add("lightingSpecularStrength","float"),e.uniforms.add("lightingEnvironmentStrength","float"),e.code.add(d`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}function $s(t){const e=t.fragment.code;e.add(d`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(d`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(d`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function ra(t){t.vertex.code.add(d`const float PI = 3.141592653589793;`),t.fragment.code.add(d`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function pr(t,e){const r=t.fragment.code;t.include(ra),e.pbrMode===L.Water||e.pbrMode===L.WaterOnIntegratedMesh?(r.add(d`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(d`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(d`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(d`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(d`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):e.pbrMode!==L.Normal&&e.pbrMode!==L.Schematic||(t.include($s),r.add(d`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(d`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(d`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(d`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(d`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(d`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function ia(t,e){const r=t.fragment;t.include(Bs),t.include(fr,e),e.pbrMode!==L.Disabled&&t.include(pr,e),t.include(Is,e),e.receiveShadows&&t.include(hr,e),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),r.uniforms.add("hasFillLights","bool"),t.include(ra),r.code.add(d`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===L.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),r.code.add(d`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.viewingMode===ve.Global?d`normalize(vPosWorld)`:d`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),r.code.add(d`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),e.pbrMode===L.Disabled||e.pbrMode===L.WaterOnIntegratedMesh?r.code.add(d`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):e.pbrMode!==L.Normal&&e.pbrMode!==L.Schematic||(r.code.add(d`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(d`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),r.code.add(d`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.code.add(d`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(d`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode===L.Schematic?d`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:d`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}function zs(t,e){const r=d`
  /*
  *  ${e.name}
  *  ${e.output===_.Color?"RenderOutput: Color":e.output===_.Depth?"RenderOutput: Depth":e.output===_.Shadow?"RenderOutput: Shadow":e.output===_.Normal?"RenderOutput: Normal":e.output===_.Highlight?"RenderOutput: Highlight":""}
  */
  `;xi()&&(t.fragment.code.add(r),t.vertex.code.add(r))}function Us(t){t.code.add(d`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function zt(t){t.include(Us),t.code.add(d`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${d.int(me.Multiply)}) {
        return allMixed;
      }
      else if (mode == ${d.int(me.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${d.int(me.Replace)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${d.int(me.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${d.int(me.Replace)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}const Gs=Be.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class aa{constructor(){this.includedModules=new Map}include(e,r){this.includedModules.has(e)?this.includedModules.get(e)!==r&&Gs.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,r),e(this.builder,r))}}class oa extends aa{constructor(){super(...arguments),this.vertex=new Jr,this.fragment=new Jr,this.attributes=new ks,this.varyings=new Ws,this.extensions=new it,this.constants=new H}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const r=this.extensions.generateSource(e),i=this.attributes.generateSource(e),a=this.varyings.generateSource(),n=e==="vertex"?this.vertex:this.fragment,o=n.uniforms.generateSource(),s=n.code.generateSource(),c=e==="vertex"?Xs:qs,l=this.constants.generateSource().concat(n.constants.generateSource());return`
${r.join(`
`)}

${c}

${l.join(`
`)}

${o.join(`
`)}

${i.join(`
`)}

${a.join(`
`)}

${s.join(`
`)}`}}class Hs{constructor(){this._entries=new Map}add(e,r,i){const a=`${e}_${r}_${i}`;return this._entries.set(a,{name:e,type:r,arraySize:i}),this}generateSource(){const e=r=>r?`[${r}]`:"";return Array.from(this._entries.values()).map(r=>`uniform ${r.type} ${r.name}${e(r.arraySize)};`)}get entries(){return Array.from(this._entries.values())}}class Vs{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class Jr extends aa{constructor(){super(...arguments),this.uniforms=new Hs,this.code=new Vs,this.constants=new H}get builder(){return this}}class ks{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`attribute ${r[1]} ${r[0]};`)}}class Ws{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(){return this._entries.map(e=>`varying ${e[1]} ${e[0]};`)}}class it{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?it.ALLOWLIST_VERTEX:it.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(i=>r.includes(i)).map(i=>`#extension ${i} : enable`)}}it.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],it.ALLOWLIST_VERTEX=[];class H{constructor(){this._entries=[]}add(e,r,i){let a="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":a=H._numberToFloatStr(i);break;case"int":a=H._numberToIntStr(i);break;case"bool":a=i.toString();break;case"vec2":a=`vec2(${H._numberToFloatStr(i[0])},                            ${H._numberToFloatStr(i[1])})`;break;case"vec3":a=`vec3(${H._numberToFloatStr(i[0])},                            ${H._numberToFloatStr(i[1])},                            ${H._numberToFloatStr(i[2])})`;break;case"vec4":a=`vec4(${H._numberToFloatStr(i[0])},                            ${H._numberToFloatStr(i[1])},                            ${H._numberToFloatStr(i[2])},                            ${H._numberToFloatStr(i[3])})`;break;case"ivec2":a=`ivec2(${H._numberToIntStr(i[0])},                             ${H._numberToIntStr(i[1])})`;break;case"ivec3":a=`ivec3(${H._numberToIntStr(i[0])},                             ${H._numberToIntStr(i[1])},                             ${H._numberToIntStr(i[2])})`;break;case"ivec4":a=`ivec4(${H._numberToIntStr(i[0])},                             ${H._numberToIntStr(i[1])},                             ${H._numberToIntStr(i[2])},                             ${H._numberToIntStr(i[3])})`;break;case"mat2":case"mat3":case"mat4":a=`${r}(${Array.prototype.map.call(i,n=>H._numberToFloatStr(n)).join(", ")})`}return this._entries.push(`const ${r} ${e} = ${a};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const qs=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,Xs=`precision highp float;
precision highp sampler2D;`;function js(t){const e=new oa,r=e.vertex.code,i=e.fragment.code;e.include(zs,{name:"Default Material Shader",output:t.output}),e.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3");const a=t.hasModelTransformation;return a&&e.vertex.uniforms.add("model","mat4"),e.include(mr),e.varyings.add("vpos","vec3"),e.include(xt,t),e.include(ki,t),e.include(Wi,t),t.output!==_.Color&&t.output!==_.Alpha||(e.include(Ht,t),e.include(_t,{linearDepth:!1,hasModelTransformation:a}),t.normalType===Q.Attribute&&t.offsetBackfaces&&e.include(Qi),e.include(Ls,t),e.include(ea,t),t.instancedColor&&e.attributes.add(p.INSTANCECOLOR,"vec4"),e.varyings.add("localvpos","vec3"),e.include(rt,t),e.include(Ki,t),e.include(Zi,t),e.include(Ji,t),e.vertex.uniforms.add("externalColor","vec4"),e.varyings.add("vcolorExt","vec4"),t.multipassTerrainEnabled&&e.varyings.add("depth","float"),r.add(d`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${t.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${d.float(dr)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${t.normalType===Q.Attribute?d`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${t.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${a?"model,":""} vpos);
          ${t.normalType===Q.Attribute&&t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${t.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),t.output===_.Alpha&&(e.include(Qe,t),e.include(Ke,t),t.multipassTerrainEnabled&&(e.fragment.include($t),e.include(Bt,t)),e.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.fragment.include(zt),i.add(d`
      void main() {
        discardBySlice(vpos);
        ${t.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?d`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:d`vec4 texColor = vec4(1.0);`}
        ${t.attributeColor?d`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:d`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),t.output===_.Color&&(e.include(Qe,t),e.include(ia,t),e.include(fr,t),e.include(Ke,t),t.receiveShadows&&e.include(hr,t),t.multipassTerrainEnabled&&(e.fragment.include($t),e.include(Bt,t)),e.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.include(Xi,t),e.include(pr,t),e.fragment.include(zt),e.include(Wo,t),i.add(d`
      void main() {
        discardBySlice(vpos);
        ${t.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?d`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:d`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${t.normalType===Q.ScreenDerivative?d`
        vec3 normal = screenDerivativeNormal(localvpos);`:d`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${t.pbrMode===L.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.viewingMode===ve.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.attributeColor?d`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:d`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${t.hasNormalTexture?d`
              mat3 tangentSpace = ${t.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${t.pbrMode===L.Normal||t.pbrMode===L.Schematic?t.viewingMode===ve.Global?d`vec3 normalGround = normalize(vpos + localOrigin);`:d`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:d``}
        ${t.pbrMode===L.Normal||t.pbrMode===L.Schematic?d`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),e.include(ta,t),e}const Ys=Object.freeze({__proto__:null,build:js}),Ks=Be.getLogger("esri.views.3d.webgl-engine.shaders.DefaultTechnique");class Ct extends ys{initializeProgram(e){const r=Ct.shader.get(),i=this.configuration,a=r.build({oitEnabled:i.transparencyPassType===le.Color,output:i.output,viewingMode:e.viewingMode,receiveShadows:i.receiveShadows,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:i.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:i.symbolColors,vvSize:i.vvSize,vvColor:i.vvColor,vvInstancingEnabled:!0,instanced:i.instanced,instancedColor:i.instancedColor,instancedDoublePrecision:i.instancedDoublePrecision,pbrMode:i.usePBR?i.isSchematic?L.Schematic:L.Normal:L.Disabled,hasMetalnessAndRoughnessTexture:i.hasMetalnessAndRoughnessTexture,hasEmissionTexture:i.hasEmissionTexture,hasOcclusionTexture:i.hasOcclusionTexture,hasNormalTexture:i.hasNormalTexture,hasColorTexture:i.hasColorTexture,hasModelTransformation:i.hasModelTransformation,receiveAmbientOcclusion:i.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:i.normalsTypeDerivate?Q.ScreenDerivative:Q.Attribute,doubleSidedMode:i.doubleSidedMode,vertexTangents:i.vertexTangents,attributeTextureCoordinates:i.hasMetalnessAndRoughnessTexture||i.hasEmissionTexture||i.hasOcclusionTexture||i.hasNormalTexture||i.hasColorTexture?ce.Default:ce.None,textureAlphaPremultiplied:i.textureAlphaPremultiplied,attributeColor:i.vertexColors,screenSizePerspectiveEnabled:i.screenSizePerspective,verticalOffsetEnabled:i.verticalOffset,offsetBackfaces:i.offsetBackfaces,doublePrecisionRequiresObfuscation:Vi(e.rctx),alphaDiscardMode:i.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:i.multipassTerrainEnabled,cullAboveGround:i.cullAboveGround});return new Yi(e.rctx,a,Gt)}bindPass(e,r){var i,a;Ss(this.program,r.camera.projectionMatrix);const n=this.configuration.output;this.configuration.hasModelTransformation&&(g(e.modelTransformation)?this.program.setUniformMatrix4fv("model",e.modelTransformation):Ks.warnOnce("hasModelTransformation true, but no modelTransformation found.")),(this.configuration.output===_.Depth||r.multipassTerrainEnabled||n===_.Shadow)&&this.program.setUniform2fv("nearFar",r.camera.nearFar),r.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",r.inverseViewport),xs(this.program,r)),n===_.Alpha&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",qr[e.colorMixMode])),n===_.Color?(r.lighting.setUniforms(this.program,!1,r.hasFillLights),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",qr[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&bs(this.program,e,this.configuration.isSchematic)):n===_.Highlight&&gs(this.program,r),Es(this.program,e),us(this.program,e,r),un(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),e.textureAlphaMode!==W.Mask&&e.textureAlphaMode!==W.MaskBlend||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),(i=r.shadowMap)==null||i.bind(this.program),(a=r.ssaoHelper)==null||a.bind(this.program,r.camera)}bindDraw(e){const r=this.configuration.instancedDoublePrecision?or(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;Rs(this.program,r,e.camera.viewMatrix),this.program.rebindTextures(),(this.configuration.output===_.Color||this.configuration.output===_.Alpha||this.configuration.output===_.Depth&&this.configuration.screenSizePerspective||this.configuration.output===_.Normal&&this.configuration.screenSizePerspective||this.configuration.output===_.Highlight&&this.configuration.screenSizePerspective)&&Cs(this.program,r,e.camera.viewInverseTransposeMatrix),this.configuration.output===_.Normal&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&ls(this.program,r),ns(this.program,this.configuration,e.slicePlane,{origin:r}),this.configuration.output===_.Color&&Ts(this.program,e,r)}_convertDepthTestFunction(e){return e===Ze.Lequal?_e.LEQUAL:_e.LESS}_setPipeline(e,r){const i=this.configuration,a=e===le.NONE,n=e===le.FrontFace;return Pn({blending:i.output!==_.Color&&i.output!==_.Alpha||!i.transparent?null:a?Hn:Wn(e),culling:Qs(i)&&bn(i.cullFace),depthTest:{func:Yn(e,this._convertDepthTestFunction(i.customDepthTest))},depthWrite:a||n?i.writeDepth&&Tn:null,colorWrite:An,stencilWrite:i.sceneHasOcludees?Os:null,stencilTest:i.sceneHasOcludees?r?Ps:ws:null,polygonOffset:a||n?null:jn(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipeline(this.configuration.transparencyPassType,!0),this._setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,r){return r?this._occludeePipelineState:super.getPipelineState(e,r)}}function Qs(t){return t.cullFace?t.cullFace!==de.None:!t.slicePlaneEnabled&&!t.transparent&&!t.doubleSidedMode}Ct.shader=new ji(Ys,()=>nr(()=>import("./DefaultMaterial.glsl.46f27739.js"),["./DefaultMaterial.glsl.46f27739.js","./entry.167ec5aa.js","./entry.37ecb94f.css","./vec33.c5142060.js","./VertexAttribute.90c6b2b6.js","./Texture.e9e45777.js","./context-util.1337370e.js","./enums.ad15c731.js","./BufferView.3a8fcdfb.js","./vec2.b5add486.js","./DefaultMaterial_COLOR_GAMMA.f168e622.js","./types.9f7dd3d7.js","./Version.97c44476.js","./quat.3a54dc9b.js","./byteSizeEstimations.4dc27031.js","./RenderSlot.e194991a.js","./vec3f32.a99d9267.js","./devEnvironmentUtils.592c8a7b.js","./VertexElementDescriptor.b51b5c8c.js","./InterleavedLayout.a3a82e65.js"],import.meta.url));class O extends Ms{constructor(){super(...arguments),this.output=_.Color,this.alphaDiscardMode=W.Opaque,this.doubleSidedMode=te.None,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=de.None,this.transparencyPassType=le.NONE,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1,this.hasModelTransformation=!1,this.customDepthTest=Ze.Less}}P([N({count:_.COUNT})],O.prototype,"output",void 0),P([N({count:W.COUNT})],O.prototype,"alphaDiscardMode",void 0),P([N({count:te.COUNT})],O.prototype,"doubleSidedMode",void 0),P([N()],O.prototype,"isSchematic",void 0),P([N()],O.prototype,"vertexColors",void 0),P([N()],O.prototype,"offsetBackfaces",void 0),P([N()],O.prototype,"symbolColors",void 0),P([N()],O.prototype,"vvSize",void 0),P([N()],O.prototype,"vvColor",void 0),P([N()],O.prototype,"verticalOffset",void 0),P([N()],O.prototype,"receiveShadows",void 0),P([N()],O.prototype,"slicePlaneEnabled",void 0),P([N()],O.prototype,"sliceHighlightDisabled",void 0),P([N()],O.prototype,"receiveAmbientOcclusion",void 0),P([N()],O.prototype,"screenSizePerspective",void 0),P([N()],O.prototype,"textureAlphaPremultiplied",void 0),P([N()],O.prototype,"hasColorTexture",void 0),P([N()],O.prototype,"usePBR",void 0),P([N()],O.prototype,"hasMetalnessAndRoughnessTexture",void 0),P([N()],O.prototype,"hasEmissionTexture",void 0),P([N()],O.prototype,"hasOcclusionTexture",void 0),P([N()],O.prototype,"hasNormalTexture",void 0),P([N()],O.prototype,"instanced",void 0),P([N()],O.prototype,"instancedColor",void 0),P([N()],O.prototype,"instancedDoublePrecision",void 0),P([N()],O.prototype,"vertexTangents",void 0),P([N()],O.prototype,"normalsTypeDerivate",void 0),P([N()],O.prototype,"writeDepth",void 0),P([N()],O.prototype,"sceneHasOcludees",void 0),P([N()],O.prototype,"transparent",void 0),P([N()],O.prototype,"enableOffset",void 0),P([N({count:de.COUNT})],O.prototype,"cullFace",void 0),P([N({count:le.COUNT})],O.prototype,"transparencyPassType",void 0),P([N()],O.prototype,"multipassTerrainEnabled",void 0),P([N()],O.prototype,"cullAboveGround",void 0),P([N()],O.prototype,"hasModelTransformation",void 0),P([N({count:Ze.COUNT})],O.prototype,"customDepthTest",void 0);function Zs(t){const e=new oa,r=e.vertex.code,i=e.fragment.code;return e.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3"),e.include(mr),e.varyings.add("vpos","vec3"),e.include(xt,t),e.include(ki,t),e.include(Wi,t),t.output!==_.Color&&t.output!==_.Alpha||(e.include(Ht,t),e.include(_t,{linearDepth:!1}),t.offsetBackfaces&&e.include(Qi),t.instancedColor&&e.attributes.add(p.INSTANCECOLOR,"vec4"),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("localvpos","vec3"),t.multipassTerrainEnabled&&e.varyings.add("depth","float"),e.include(rt,t),e.include(Ki,t),e.include(Zi,t),e.include(Ji,t),e.vertex.uniforms.add("externalColor","vec4"),e.varyings.add("vcolorExt","vec4"),r.add(d`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${t.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${d.float(dr)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${t.multipassTerrainEnabled?d`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),t.output===_.Alpha&&(e.include(Qe,t),e.include(Ke,t),t.multipassTerrainEnabled&&(e.fragment.include($t),e.include(Bt,t)),e.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.fragment.uniforms.add("view","mat4"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.fragment.include(zt),i.add(d`
      void main() {
        discardBySlice(vpos);
        ${t.multipassTerrainEnabled?d`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?d`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:d`vec4 texColor = vec4(1.0);`}
        ${t.attributeColor?d`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:d`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),t.output===_.Color&&(e.include(Qe,t),e.include(ia,t),e.include(fr,t),e.include(Ke,t),t.receiveShadows&&e.include(hr,t),t.multipassTerrainEnabled&&(e.fragment.include($t),e.include(Bt,t)),e.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.fragment.uniforms.add("view","mat4"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.include(Xi,t),e.include(pr,t),e.fragment.include(zt),i.add(d`
      void main() {
        discardBySlice(vpos);
        ${t.multipassTerrainEnabled?d`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?d`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:d`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${t.pbrMode===L.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.viewingMode===ve.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.attributeColor?d`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:d`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${d`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${t.pbrMode===L.Normal||t.pbrMode===L.Schematic?t.viewingMode===ve.Global?d`vec3 normalGround = normalize(vpos + localOrigin);`:d`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:d``}
        ${t.pbrMode===L.Normal||t.pbrMode===L.Schematic?d`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),e.include(ta,t),e}const Js=Object.freeze({__proto__:null,build:Zs});class Vt extends Ct{initializeProgram(e){const r=Vt.shader.get(),i=this.configuration,a=r.build({oitEnabled:i.transparencyPassType===le.Color,output:i.output,viewingMode:e.viewingMode,receiveShadows:i.receiveShadows,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:i.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:i.symbolColors,vvSize:i.vvSize,vvColor:i.vvColor,vvInstancingEnabled:!0,instanced:i.instanced,instancedColor:i.instancedColor,instancedDoublePrecision:i.instancedDoublePrecision,pbrMode:i.usePBR?L.Normal:L.Disabled,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:i.hasColorTexture,hasModelTransformation:!1,receiveAmbientOcclusion:i.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:Q.Attribute,doubleSidedMode:te.WindingOrder,vertexTangents:!1,attributeTextureCoordinates:i.hasColorTexture?ce.Default:ce.None,textureAlphaPremultiplied:i.textureAlphaPremultiplied,attributeColor:i.vertexColors,screenSizePerspectiveEnabled:i.screenSizePerspective,verticalOffsetEnabled:i.verticalOffset,offsetBackfaces:i.offsetBackfaces,doublePrecisionRequiresObfuscation:Vi(e.rctx),alphaDiscardMode:i.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:i.multipassTerrainEnabled,cullAboveGround:i.cullAboveGround});return new Yi(e.rctx,a,Gt)}}Vt.shader=new ji(Js,()=>nr(()=>import("./RealisticTree.glsl.4d072647.js"),["./RealisticTree.glsl.4d072647.js","./entry.167ec5aa.js","./entry.37ecb94f.css","./vec33.c5142060.js","./VertexAttribute.90c6b2b6.js","./BufferView.3a8fcdfb.js","./vec2.b5add486.js","./DefaultMaterial_COLOR_GAMMA.f168e622.js","./types.9f7dd3d7.js","./enums.ad15c731.js","./Version.97c44476.js","./quat.3a54dc9b.js","./byteSizeEstimations.4dc27031.js","./Texture.e9e45777.js","./context-util.1337370e.js","./RenderSlot.e194991a.js","./vec3f32.a99d9267.js","./devEnvironmentUtils.592c8a7b.js","./VertexElementDescriptor.b51b5c8c.js","./InterleavedLayout.a3a82e65.js"],import.meta.url));class na extends pn{constructor(e){super(e,tl),this.supportsEdges=!0,this.techniqueConfig=new O,this.vertexBufferLayout=il(this.parameters),this.instanceBufferLayout=e.instanced?al(this.parameters):null}isVisibleInPass(e){return e!==Wt.MATERIAL_DEPTH_SHADOWMAP_ALL&&e!==Wt.MATERIAL_DEPTH_SHADOWMAP_DEFAULT&&e!==Wt.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||e.layerOpacity===0)return!1;const r=e.instanced,i=e.vertexColors,a=e.symbolColors,n=!!r&&r.indexOf("color")>-1,o=e.vvColorEnabled,s=e.colorMixMode==="replace",c=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return i&&(n||o||a)?!!s||c:i?s?l:c:n||o||a?!!s||c:s?l:c}getTechniqueConfig(e,r){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=this.parameters.verticalOffset!==null,this.techniqueConfig.screenSizePerspective=this.parameters.screenSizePerspective!==null,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate=this.parameters.normals==="screenDerivative",this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,g(this.parameters.customDepthTest)&&(this.techniqueConfig.customDepthTest=this.parameters.customDepthTest),this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?de.None:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=r.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=r.cullAboveGround,this.techniqueConfig.hasModelTransformation=g(this.parameters.modelTransformation),e!==_.Color&&e!==_.Alpha||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=te.WindingOrder:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?te.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?te.WindingOrder:te.None,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!r.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=r.transparencyPassType,this.techniqueConfig.enableOffset=r.camera.relativeElevation<qn),this.techniqueConfig}intersect(e,r,i,a,n,o,s){if(this.parameters.verticalOffset!==null){const c=a.camera;Ft(Kt,i[12],i[13],i[14]);let l=null;switch(a.viewingMode){case ve.Global:l=ar(ei,Kt);break;case ve.Local:l=wt(ei,sl)}let u=0;if(this.parameters.verticalOffset!==null){const f=Ye(ll,Kt,c.eye),m=ai(f),x=Tr(f,f,1/m);let h=null;this.parameters.screenSizePerspective&&(h=_a(l,x)),u+=dn(c,m,this.parameters.verticalOffset,h,this.parameters.screenSizePerspective)}Tr(l,l,u),ba(Yt,l,a.transform.inverseRotation),n=Ye(ol,n,Yt),o=Ye(nl,o,Yt)}an(e,r,a,n,o,Jn(a.verticalOffset),s)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?Rt.TRANSPARENT_MATERIAL:Rt.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:Rt.OPAQUE_MATERIAL)||e===Rt.DRAPED_MATERIAL}createGLMaterial(e){return e.output===_.Color||e.output===_.Alpha||e.output===_.Depth||e.output===_.Normal||e.output===_.Shadow||e.output===_.Highlight?new el(e):null}createBufferWriter(){return new rl(this.vertexBufferLayout,this.instanceBufferLayout)}}class el extends jo{constructor(e){super(X(X({},e),e.material.parameters))}updateParameters(e){const r=this._material.parameters;return this.updateTexture(r.textureId),this.ensureTechnique(r.treeRendering?Vt:Ct,e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return this._output!==_.Color&&this._output!==_.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,r){r.bindPass(this._material.parameters,e),this.bindTextures(r.program)}}const tl=X({textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:de.Back,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,fillLightsEnabled:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:hi(),modelTransformation:null,transparent:!1,writeDepth:!0,customDepthTest:Ze.Less,textureAlphaMode:W.Blend,textureAlphaCutoff:qo,textureAlphaPremultiplied:!1,sceneHasOcludees:!1},vn);class rl{constructor(e,r){this.vertexBufferLayout=e,this.instanceBufferLayout=r}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(p.POSITION).length}write(e,r,i,a){os(r,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,i,a)}}function il(t){const e=t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId,r=_i().vec3f(p.POSITION).vec3f(p.NORMAL);return t.vertexTangents&&r.vec4f(p.TANGENT),e&&r.vec2f(p.UV0),t.vertexColors&&r.vec4u8(p.COLOR),t.symbolColors&&r.vec4u8(p.SYMBOLCOLOR),r}function al(t){let e=_i();return e=t.instancedDoublePrecision?e.vec3f(p.MODELORIGINHI).vec3f(p.MODELORIGINLO).mat3f(p.MODEL).mat3f(p.MODELNORMAL):e.mat4f(p.MODEL).mat4f(p.MODELNORMAL),t.instanced&&t.instanced.indexOf("color")>-1&&(e=e.vec4f(p.INSTANCECOLOR)),t.instanced&&t.instanced.indexOf("featureAttribute")>-1&&(e=e.vec4f(p.INSTANCEFEATUREATTRIBUTE)),e}const ol=q(),nl=q(),sl=or(0,0,1),ei=q(),Yt=q(),Kt=q(),ll=q(),Se=Be.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function cl(t,e){const r=await dl(t,e);return{resource:r,textures:await pl(r.textureDefinitions,e)}}async function dl(t,e){const r=g(e)&&e.streamDataRequester;if(r)return ul(t,r,e);const i=await oi(ni(t,Ta(e)));if(i.ok===!0)return i.value.data;si(i.error),sa(i.error)}async function ul(t,e,r){const i=await oi(e.request(t,"json",r));if(i.ok===!0)return i.value;si(i.error),sa(i.error.details.url)}function sa(t){throw new li("",`Request for object resource failed: ${t}`)}function hl(t){const e=t.params,r=e.topology;let i=!0;switch(e.vertexAttributes||(Se.warn("Geometry must specify vertex attributes"),i=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const n=e.faces;if(n){if(e.vertexAttributes)for(const o in e.vertexAttributes){const s=n[o];s&&s.values?(s.valueType!=null&&s.valueType!=="UInt32"&&(Se.warn(`Unsupported indexed geometry indices type '${s.valueType}', only UInt32 is currently supported`),i=!1),s.valuesPerElement!=null&&s.valuesPerElement!==1&&(Se.warn(`Unsupported indexed geometry values per element '${s.valuesPerElement}', only 1 is currently supported`),i=!1)):(Se.warn(`Indexed geometry does not specify face indices for '${o}' attribute`),i=!1)}}else Se.warn("Indexed geometries must specify faces"),i=!1;break}default:Se.warn(`Unsupported topology '${r}'`),i=!1}t.params.material||(Se.warn("Geometry requires material"),i=!1);const a=t.params.vertexAttributes;for(const n in a)a[n].values||(Se.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function ml(t,e){const r=[],i=[],a=[],n=[],o=t.resource,s=pi.parse(o.version||"1.0","wosr");gl.validate(s);const c=o.model.name,l=o.model.geometries,u=o.materialDefinitions,f=t.textures;let m=0;const x=new Map;for(let h=0;h<l.length;h++){const T=l[h];if(!hl(T))continue;const E=vl(T),A=T.params.vertexAttributes,G=[];for(const v in A){const R=A[v],I=R.values;G.push([v,{data:I,size:R.valuesPerElement,exclusive:!0}])}const M=[];if(T.params.topology!=="PerAttributeArray"){const v=T.params.faces;for(const R in v)M.push([R,new Uint32Array(v[R].values)])}const y=f&&f[E.texture];if(y&&!x.has(E.texture)){const{image:v,params:R}=y,I=new K(v,R);n.push(I),x.set(E.texture,I)}const F=x.get(E.texture),C=F?F.id:void 0;let S=a[E.material]?a[E.material][E.texture]:null;if(!S){const v=u[E.material.substring(E.material.lastIndexOf("/")+1)].params;v.transparency===1&&(v.transparency=0);const R=y&&y.alphaChannelUsage,I=v.transparency>0||R==="transparency"||R==="maskAndTransparency",B=y?la(y.alphaChannelUsage):void 0,D={ambient:Ar(v.diffuse),diffuse:Ar(v.diffuse),opacity:1-(v.transparency||0),transparent:I,textureAlphaMode:B,textureAlphaCutoff:.33,textureId:C,initTextureTransparent:!0,doubleSided:!0,cullFace:de.None,colorMixMode:v.externalColorMixMode||"tint",textureAlphaPremultiplied:!!y&&!!y.params.preMultiplyAlpha};g(e)&&e.materialParamsMixin&&Object.assign(D,e.materialParamsMixin),S=new na(D),a[E.material]||(a[E.material]={}),a[E.material][E.texture]=S}i.push(S);const w=new Ut(G,M);m+=M.position?M.position.length:0,r.push(w)}return{name:c,stageResources:{textures:n,materials:i,geometries:r},pivotOffset:o.model.pivotOffset,boundingBox:fl(r),numberOfVertices:m,lodThreshold:null}}function fl(t){const e=ii();return t.forEach(r=>{const i=r.boundingInfo;g(i)&&(Nt(e,i.getBBMin()),Nt(e,i.getBBMax()))}),e}async function pl(t,e){const r=[];for(const n in t){const o=t[n],s=o.images[0].data;if(!s){Se.warn("Externally referenced texture data is not yet supported");continue}const c=o.encoding+";base64,"+s,l="/textureDefinitions/"+n,u=o.channels==="rgba"?o.alphaChannelUsage||"transparency":"none",f={noUnpackFlip:!0,wrap:{s:Le.REPEAT,t:Le.REPEAT},preMultiplyAlpha:la(u)!==W.Opaque},m=g(e)&&e.disableTextures?Promise.resolve(null):bi(c,e);r.push(m.then(x=>({refId:l,image:x,params:f,alphaChannelUsage:u})))}const i=await Promise.all(r),a={};for(const n of i)a[n.refId]=n;return a}function la(t){switch(t){case"mask":return W.Mask;case"maskAndTransparency":return W.MaskBlend;case"none":return W.Opaque;default:return W.Blend}}function vl(t){const e=t.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const gl=new pi(1,2,"wosr");async function xl(t,e){const r=ca(La(t));if(r.fileType==="wosr"){const c=await(e.cache?e.cache.loadWOSR(r.url,e):cl(r.url,e)),l=ml(c,e);return{lods:[l],referenceBoundingBox:l.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:c.remove}}const i=await(e.cache?e.cache.loadGLTF(r.url,e,e.usePBR):Ha(new Va(e.streamDataRequester),r.url,e,e.usePBR)),a=ha(i.model.meta,"ESRI_proxyEllipsoid");i.meta.isEsriSymbolResource&&g(a)&&i.meta.uri.indexOf("/RealisticTrees/")!==-1&&Tl(i,a);const n=i.meta.isEsriSymbolResource?{usePBR:e.usePBR,isSchematic:!1,treeRendering:i.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:e.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},o=It(X({},e.materialParamsMixin),{treeRendering:i.customMeta.esriTreeRendering});if(r.specifiedLodIndex!=null){const c=Pt(i,n,o,r.specifiedLodIndex);let l=c[0].boundingBox;return r.specifiedLodIndex!==0&&(l=Pt(i,n,o,0)[0].boundingBox),{lods:c,referenceBoundingBox:l,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}}const s=Pt(i,n,o);return{lods:s,referenceBoundingBox:s[0].boundingBox,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}}function ca(t){const e=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function Pt(t,e,r,i){const a=t.model,n=hi(),o=new Array,s=new Map,c=new Map;return a.lods.forEach((l,u)=>{if(i!==void 0&&u!==i)return;const f={name:l.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:g(l.lodThreshold)?l.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:ii()};o.push(f),l.parts.forEach(m=>{const x=m.material+(m.attributes.normal?"_normal":"")+(m.attributes.color?"_color":"")+(m.attributes.texCoord0?"_texCoord0":"")+(m.attributes.tangent?"_tangent":""),h=a.materials.get(m.material),T=g(m.attributes.texCoord0),E=g(m.attributes.normal),A=_l(h.alphaMode);if(!s.has(x)){if(T){if(g(h.textureColor)&&!c.has(h.textureColor)){const U=a.textures.get(h.textureColor),ue=It(X({},U.parameters),{preMultiplyAlpha:A!==W.Opaque});c.set(h.textureColor,new K(U.data,ue))}if(g(h.textureNormal)&&!c.has(h.textureNormal)){const U=a.textures.get(h.textureNormal);c.set(h.textureNormal,new K(U.data,U.parameters))}if(g(h.textureOcclusion)&&!c.has(h.textureOcclusion)){const U=a.textures.get(h.textureOcclusion);c.set(h.textureOcclusion,new K(U.data,U.parameters))}if(g(h.textureEmissive)&&!c.has(h.textureEmissive)){const U=a.textures.get(h.textureEmissive);c.set(h.textureEmissive,new K(U.data,U.parameters))}if(g(h.textureMetallicRoughness)&&!c.has(h.textureMetallicRoughness)){const U=a.textures.get(h.textureMetallicRoughness);c.set(h.textureMetallicRoughness,new K(U.data,U.parameters))}}const v=h.color[0]**(1/Je),R=h.color[1]**(1/Je),I=h.color[2]**(1/Je),B=h.emissiveFactor[0]**(1/Je),D=h.emissiveFactor[1]**(1/Je),z=h.emissiveFactor[2]**(1/Je),$=g(h.textureColor)&&T?c.get(h.textureColor):null;s.set(x,new na(X(It(X({},e),{transparent:A===W.Blend,customDepthTest:Ze.Lequal,textureAlphaMode:A,textureAlphaCutoff:h.alphaCutoff,diffuse:[v,R,I],ambient:[v,R,I],opacity:h.opacity,doubleSided:h.doubleSided,doubleSidedType:"winding-order",cullFace:h.doubleSided?de.None:de.Back,vertexColors:!!m.attributes.color,vertexTangents:!!m.attributes.tangent,normals:E?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,fillLightsEnabled:!0,textureId:g($)?$.id:void 0,colorMixMode:h.colorMixMode,normalTextureId:g(h.textureNormal)&&T?c.get(h.textureNormal).id:void 0,textureAlphaPremultiplied:g($)&&!!$.params.preMultiplyAlpha,occlusionTextureId:g(h.textureOcclusion)&&T?c.get(h.textureOcclusion).id:void 0,emissiveTextureId:g(h.textureEmissive)&&T?c.get(h.textureEmissive).id:void 0,metallicRoughnessTextureId:g(h.textureMetallicRoughness)&&T?c.get(h.textureMetallicRoughness).id:void 0,emissiveFactor:[B,D,z],mrrFactors:[h.metallicFactor,h.roughnessFactor,e.mrrFactors[2]],isSchematic:!1}),r)))}const G=bl(m.indices||m.attributes.position.count,m.primitiveType),M=m.attributes.position.count,y=Xe(et,M);Ia(y,m.attributes.position,m.transform);const F=[[p.POSITION,{data:y.typedBuffer,size:y.elementCount,exclusive:!0}]],C=[[p.POSITION,G]];if(g(m.attributes.normal)){const v=Xe(et,M);Rr(n,m.transform),Ba(v,m.attributes.normal,n),F.push([p.NORMAL,{data:v.typedBuffer,size:v.elementCount,exclusive:!0}]),C.push([p.NORMAL,G])}if(g(m.attributes.tangent)){const v=Xe(Jt,M);Rr(n,m.transform),ka(v,m.attributes.tangent,n),F.push([p.TANGENT,{data:v.typedBuffer,size:v.elementCount,exclusive:!0}]),C.push([p.TANGENT,G])}if(g(m.attributes.texCoord0)){const v=Xe(mi,M);Wa(v,m.attributes.texCoord0),F.push([p.UV0,{data:v.typedBuffer,size:v.elementCount,exclusive:!0}]),C.push([p.UV0,G])}if(g(m.attributes.color)){const v=Xe(bt,M);if(m.attributes.color.elementCount===4)m.attributes.color instanceof Jt?Or(v,m.attributes.color,255):m.attributes.color instanceof bt?qa(v,m.attributes.color):m.attributes.color instanceof za&&Or(v,m.attributes.color,1/256);else{Xa(v,255,255,255,255);const R=new Mr(v.buffer,0,4);m.attributes.color instanceof et?yr(R,m.attributes.color,255):m.attributes.color instanceof Mr?$a(R,m.attributes.color):m.attributes.color instanceof Ua&&yr(R,m.attributes.color,1/256)}F.push([p.COLOR,{data:v.typedBuffer,size:v.elementCount,exclusive:!0}]),C.push([p.COLOR,G])}const S=new Ut(F,C);f.stageResources.geometries.push(S),f.stageResources.materials.push(s.get(x)),T&&(g(h.textureColor)&&f.stageResources.textures.push(c.get(h.textureColor)),g(h.textureNormal)&&f.stageResources.textures.push(c.get(h.textureNormal)),g(h.textureOcclusion)&&f.stageResources.textures.push(c.get(h.textureOcclusion)),g(h.textureEmissive)&&f.stageResources.textures.push(c.get(h.textureEmissive)),g(h.textureMetallicRoughness)&&f.stageResources.textures.push(c.get(h.textureMetallicRoughness))),f.numberOfVertices+=M;const w=S.boundingInfo;g(w)&&(Nt(f.boundingBox,w.getBBMin()),Nt(f.boundingBox,w.getBBMax()))})}),o}function _l(t){switch(t){case"BLEND":return W.Blend;case"MASK":return W.Mask;case"OPAQUE":case null:case void 0:return W.Opaque}}function bl(t,e){switch(e){case pt.TRIANGLES:return Ka(t);case pt.TRIANGLE_STRIP:return Ya(t);case pt.TRIANGLE_FAN:return ja(t)}}function Tl(t,e){for(let r=0;r<t.model.lods.length;++r){const i=t.model.lods[r];t.customMeta.esriTreeRendering=!0;for(const a of i.parts){const n=a.attributes.normal;if(Y(n))return;const o=a.attributes.position,s=o.count,c=q(),l=q(),u=q(),f=Xe(bt,s),m=Xe(et,s),x=ma(ui(),a.transform);for(let h=0;h<s;h++){o.getVec(h,l),n.getVec(h,c),ft(l,l,a.transform),Ye(u,l,e.center),gr(u,u,e.radius);const T=u[2],E=ai(u),A=Math.min(.45+.55*E*E,1);gr(u,u,e.radius),ft(u,u,x),ar(u,u),r+1!==t.model.lods.length&&t.model.lods.length>1&&Qt(u,u,c,T>-1?.2:Math.min(-4*T-3.8,1)),m.setVec(h,u),f.set(h,0,255*A),f.set(h,1,255*A),f.set(h,2,255*A),f.set(h,3,255)}a.attributes.normal=m,a.attributes.color=f}}}var Ul=Object.freeze(Object.defineProperty({__proto__:null,fetch:xl,gltfToEngineResources:Pt,parseUrl:ca},Symbol.toStringTag,{value:"Module"}));export{js as $,Zs as _,Ul as o};
