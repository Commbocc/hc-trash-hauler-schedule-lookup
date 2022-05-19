import{cU as ar,c7 as ir,c4 as sr,C as d,E as $,G as lr,q as cr,d2 as ur,d3 as M,t as h,d4 as fr,c2 as pr,c3 as yr,d5 as gr,d6 as hr,d7 as mr,T as dr,c5 as w,d8 as $r,d9 as Tr,da as Ar,db as Pr,dc as J,dd as U,de as Fr,df as Er,j as Mr,r as B,dg as vr,dh as Rr,di as j,dj as G,dk as _r,cP as wr}from"./index.2f57b5df.js";import{I as k,v as xr,P as Cr,e as K,a as Z}from"./quat.f5e17adc.js";import{j as C,e as F,f as A,a as T,b as br,c as Nr,d as W,o as D,B as Q,g as X}from"./vec33.90c1b4a7.js";import{F as I,U as x}from"./projection.9bc802ad.js";import{T as p,i as f}from"./BufferView.ff66147d.js";function E(r=Lr){return[r[0],r[1],r[2],r[3]]}function ct(r,t,e=E()){return ar(e,r),e[3]=t,e}function ut(r,t,e=E()){return k(v,r,z(r)),k(H,t,z(t)),xr(v,H,v),Or(e,sr(Cr(e,v)))}function ft(r){return r}function z(r){return ir(r[3])}function Or(r,t){return r[3]=t,r}const Lr=[0,0,1,0],v=K(),H=K();E();var S;let g=S=class extends dr{constructor(r){super(r),this.origin=w(),this.translation=w(),this.rotation=E(),this.scale=$r(1,1,1),this.geographic=!0}get localMatrix(){const r=T();return Tr(r,this.scale),Ar(r,r,z(this.rotation),this.rotation),Pr(r,r,this.translation),r}get localMatrixInverse(){return J(T(),this.localMatrix)}applyLocal(r,t){return U(t,r,this.localMatrix)}applyLocalInverse(r,t){return U(t,r,this.localMatrixInverse)}project(r,t){const e=new Float64Array(r.length),o=p.fromTypedArray(e),n=p.fromTypedArray(r);if(this.geographic){const l=M(t),c=T();return x(t,this.origin,c,l),Fr(c,c,this.localMatrix),F(o,n,c),I(e,l,0,e,t,0,e.length/3),e}const{localMatrix:a,origin:i}=this;Er(a,br)?Nr(o,n):F(o,n,a);for(let l=0;l<e.length;l+=3)e[l+0]+=i[0],e[l+1]+=i[1],e[l+2]+=i[2];return e}getOriginPoint(r){const[t,e,o]=this.origin;return new Mr({x:t,y:e,z:o,spatialReference:r})}equals(r){return B(r)&&this.geographic===r.geographic&&vr(this.origin,r.origin)&&Rr(this.localMatrix,r.localMatrix)}clone(){const r={origin:j(this.origin),translation:j(this.translation),rotation:E(this.rotation),scale:j(this.scale),geographic:this.geographic};return new S(r)}};d([$({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"origin",void 0),d([$({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"translation",void 0),d([$({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"rotation",void 0),d([$({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"scale",void 0),d([$({type:Boolean,nonNullable:!0,json:{write:!0}})],g.prototype,"geographic",void 0),d([$()],g.prototype,"localMatrix",null),d([$()],g.prototype,"localMatrixInverse",null),g=S=d([lr("esri.geometry.support.MeshTransform")],g);const jr=g;function b(r,t){var e;return r.isGeographic||r.isWebMercator&&((e=t==null?void 0:t.geographic)==null||e)}const N=cr.getLogger("esri.geometry.support.meshUtils.normalProjection");function Br(r,t,e,o,n){return L(o)?(O(m.TO_PCPF,f.fromTypedArray(r),p.fromTypedArray(t),p.fromTypedArray(e),o,f.fromTypedArray(n)),n):(N.error("Cannot convert spatial reference to PCPF"),n)}function zr(r,t,e,o,n){return L(o)?(O(m.FROM_PCPF,f.fromTypedArray(r),p.fromTypedArray(t),p.fromTypedArray(e),o,f.fromTypedArray(n)),n):(N.error("Cannot convert to spatial reference from PCPF"),n)}function Sr(r,t,e){return I(r,t,0,e,M(t),0,r.length/3),e}function Yr(r,t,e){return I(r,M(e),0,t,e,0,r.length/3),t}function qr(r,t,e){if(h(r))return t;const o=p.fromTypedArray(r),n=p.fromTypedArray(t);return F(n,o,e),t}function Ir(r,t,e){if(h(r))return t;C(u,e);const o=f.fromTypedArray(r),n=f.fromTypedArray(t);return A(n,o,u),Q(u)||X(n,n),t}function Vr(r,t,e){if(h(r))return t;C(u,e);const o=f.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),n=f.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT);if(A(n,o,u),Q(u)||X(n,n),r!==t)for(let a=3;a<r.length;a+=4)t[a]=r[a];return t}function Ur(r,t,e,o,n){if(!L(o))return N.error("Cannot convert spatial reference to PCPF"),n;O(m.TO_PCPF,f.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),p.fromTypedArray(t),p.fromTypedArray(e),o,f.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT));for(let a=3;a<r.length;a+=4)n[a]=r[a];return n}function Gr(r,t,e,o,n){if(!L(o))return N.error("Cannot convert to spatial reference from PCPF"),n;O(m.FROM_PCPF,f.fromTypedArray(r,16),p.fromTypedArray(t),p.fromTypedArray(e),o,f.fromTypedArray(n,16));for(let a=3;a<r.length;a+=4)n[a]=r[a];return n}function O(r,t,e,o,n,a){if(!t)return;const i=e.count,l=M(n);if(rr(n))for(let c=0;c<i;c++)o.getVec(c,R),t.getVec(c,y),x(l,R,_,l),W(u,_),r===m.FROM_PCPF&&D(u,u),G(y,y,u),a.setVec(c,y);else for(let c=0;c<i;c++){o.getVec(c,R),t.getVec(c,y),x(l,R,_,l),W(u,_);const P=_r(e.get(c,1));let s=Math.cos(P);r===m.TO_PCPF&&(s=1/s),u[0]*=s,u[1]*=s,u[2]*=s,u[3]*=s,u[4]*=s,u[5]*=s,r===m.FROM_PCPF&&D(u,u),G(y,y,u),wr(y,y),a.setVec(c,y)}return a}function L(r){return rr(r)||kr(r)}function rr(r){return r.isWGS84||fr(r)||pr(r)||yr(r)}function kr(r){return r.isWebMercator}var m;(function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF"})(m||(m={}));const R=w(),y=w(),_=T(),u=Z();function tr(r,t,e){return b(t.spatialReference,e)?Jr(r,t,e):Hr(r,t,e)}function Wr(r,t,e){const{position:o,normal:n,tangent:a}=r;if(h(t))return{position:o,normal:n,tangent:a};const i=t.localMatrix;return tr({position:qr(o,new Float64Array(o.length),i),normal:B(n)?Ir(n,new Float32Array(n.length),i):null,tangent:B(a)?Vr(a,new Float32Array(a.length),i):null},t.getOriginPoint(e),{geographic:t.geographic})}function pt(r,t,e){if(e!=null&&e.useTransform){var o;const{position:n,normal:a,tangent:i}=r;return{vertexAttributes:{position:n,normal:a,tangent:i},transform:new jr({origin:[t.x,t.y,(o=t.z)!=null?o:0],geographic:b(t.spatialReference,e)})}}return{vertexAttributes:tr(r,t,e),transform:null}}function Dr(r,t,e){return b(t.spatialReference,e)?er(r,t,e):Y(r,t,e)}function yt(r,t,e,o){if(h(t))return Dr(r,e,o);const n=Wr(r,t,e.spatialReference);return e.equals(t.getOriginPoint(e.spatialReference))?Y(n,e,o):b(e.spatialReference,o)?er(n,e,o):Y(n,e,o)}function Hr(r,t,e){const o=new Float64Array(r.position.length),n=r.position,a=t.x,i=t.y,l=t.z||0,{horizontal:c,vertical:P}=V(e?e.unit:null,t.spatialReference);for(let s=0;s<n.length;s+=3)o[s+0]=n[s+0]*c+a,o[s+1]=n[s+1]*c+i,o[s+2]=n[s+2]*P+l;return{position:o,normal:r.normal,tangent:r.tangent}}function Jr(r,t,e){const o=t.spatialReference,n=nr(t,e,q),a=new Float64Array(r.position.length),i=Kr(r.position,n,o,a),l=C(or,n);return{position:i,normal:Zr(i,a,r.normal,l,o),tangent:Qr(i,a,r.tangent,l,o)}}function Kr(r,t,e,o){F(p.fromTypedArray(o),p.fromTypedArray(r),t);const n=new Float64Array(r.length);return Yr(o,n,e)}function Zr(r,t,e,o,n){if(h(e))return null;const a=new Float32Array(e.length);return A(f.fromTypedArray(a),f.fromTypedArray(e),o),zr(a,r,t,n,a),a}function Qr(r,t,e,o,n){if(h(e))return null;const a=new Float32Array(e.length);A(f.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT),f.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT),o);for(let i=3;i<a.length;i+=4)a[i]=e[i];return Gr(a,r,t,n,a),a}function Y(r,t,e){const o=new Float64Array(r.position.length),n=r.position,a=t.x,i=t.y,l=t.z||0,{horizontal:c,vertical:P}=V(e?e.unit:null,t.spatialReference);for(let s=0;s<n.length;s+=3)o[s+0]=(n[s+0]-a)/c,o[s+1]=(n[s+1]-i)/c,o[s+2]=(n[s+2]-l)/P;return{position:o,normal:r.normal,tangent:r.tangent}}function er(r,t,e){const o=t.spatialReference;nr(t,e,q);const n=J(et,q),a=new Float64Array(r.position.length),i=Xr(r.position,o,n,a),l=C(or,n);return{position:i,normal:rt(r.normal,r.position,a,o,l),tangent:tt(r.tangent,r.position,a,o,l)}}function nr(r,t,e){x(r.spatialReference,[r.x,r.y,r.z||0],e,M(r.spatialReference));const{horizontal:o,vertical:n}=V(t?t.unit:null,r.spatialReference);return ur(e,e,[o,o,n]),e}function Xr(r,t,e,o){const n=Sr(r,t,o),a=p.fromTypedArray(n),i=new Float64Array(n.length),l=p.fromTypedArray(i);return F(l,a,e),i}function rt(r,t,e,o,n){if(h(r))return null;const a=Br(r,t,e,o,new Float32Array(r.length)),i=f.fromTypedArray(a);return A(i,i,n),a}function tt(r,t,e,o,n){if(h(r))return null;const a=Ur(r,t,e,o,new Float32Array(r.length)),i=f.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT);return A(i,i,n),a}function V(r,t){if(h(r))return nt;const e=t.isGeographic?1:gr(t),o=t.isGeographic?1:hr(t),n=mr(1,r,"meters");return{horizontal:n*e,vertical:n*o}}const q=T(),et=T(),or=Z(),nt={horizontal:1,vertical:1};export{jr as L,Dr as M,Yr as O,yt as P,Wr as _,E as a,Sr as b,Ur as c,Gr as d,pt as e,z as f,zr as h,Br as j,ct as k,ft as l,ut as q,b as r,tr as x};