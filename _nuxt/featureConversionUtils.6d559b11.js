import{a4 as st,t as N,o as x,bT as ct,cR as lt,d2 as ut,d3 as it,r as G}from"./entry.a426b012.js";import{s as Z,t as I}from"./OptimizedGeometry.3220611a.js";import{e as ft}from"./OptimizedFeatureSet.1d1ac4b9.js";function m(t,n){return t?n?4:3:n?3:2}const k=st.getLogger("esri.layers.graphics.featureConversionUtils"),B={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},D=(t,n,e,o,s,r)=>{t[e]=s,t[e+1]=r},v=(t,n,e,o,s,r)=>{t[e]=s,t[e+1]=r,t[e+2]=n[o+2]},at=(t,n,e,o,s,r)=>{t[e]=s,t[e+1]=r,t[e+2]=n[o+3]},H=(t,n,e,o,s,r)=>{t[e]=s,t[e+1]=r,t[e+2]=n[o+2],t[e+3]=n[o+3]};function R(t,n,e,o){if(t){if(e)return n&&o?H:v;if(n&&o)return at}else if(n&&o)return v;return D}function E({scale:t,translate:n},e){return Math.round((e-n[0])/t[0])}function q({scale:t,translate:n},e){return Math.round((n[1]-e)/t[1])}function A({scale:t,translate:n},e){return e*t[0]+n[0]}function C({scale:t,translate:n},e){return n[1]-e*t[1]}function vt(t,n,e){return t?n?e?Y(t):U(t):e?S(t):z(t):null}function z(t){const n=t.coords;return{x:n[0],y:n[1]}}function J(t,n){return t.coords[0]=n.x,t.coords[1]=n.y,t}function U(t){const n=t.coords;return{x:n[0],y:n[1],z:n[2]}}function ht(t,n){return t.coords[0]=n.x,t.coords[1]=n.y,t.coords[2]=n.z,t}function S(t){const n=t.coords;return{x:n[0],y:n[1],m:n[2]}}function gt(t,n){return t.coords[0]=n.x,t.coords[1]=n.y,t.coords[2]=n.m,t}function Y(t){const n=t.coords;return{x:n[0],y:n[1],z:n[2],m:n[3]}}function dt(t,n){return t.coords[0]=n.x,t.coords[1]=n.y,t.coords[2]=n.z,t.coords[3]=n.m,t}function mt(t,n,e,o){let s=z;e&&o?s=Y:e?s=U:o&&(s=S);for(const r of n){const{geometry:c,attributes:u}=r,i=G(c)?s(c):null;t.push({attributes:u,geometry:i})}return t}function K(t,n){return t&&n?dt:t?ht:n?gt:J}function yt(t,n,e,o,s){const r=K(e,o);for(const c of n){const{geometry:u,attributes:i}=c;let l;u&&(l=r(new I,u)),t.push(new Z(l,i,null,i[s]))}return t}function pt(t,n,e,o){for(const s of n){const{geometry:r,attributes:c}=s;let u;r&&(u=Q(r,e,o)),t.push({attributes:c,geometry:u})}return t}function Q(t,n,e){if(N(t))return null;const o=m(n,e),s=[];for(let r=0;r<t.coords.length;r+=o){const c=[];for(let u=0;u<o;u++)c.push(t.coords[r+u]);s.push(c)}return n?e?{points:s,hasZ:n,hasM:e}:{points:s,hasZ:n}:e?{points:s,hasM:e}:{points:s}}function bt(t,n,e,o,s){const r=m(e,o);for(const c of n){const u=c.geometry,i=c.attributes;let l;u&&(l=X(new I,u,r)),t.push(new Z(l,i,null,i[s]))}return t}function X(t,n,e=m(n.hasZ,n.hasM)){t.lengths[0]=n.points.length;const o=t.coords;let s=0;for(const r of n.points)for(let c=0;c<e;c++)o[s++]=r[c];return t}function wt(t,n,e,o){for(const s of n){const{geometry:r,attributes:c}=s;let u;G(r)&&(u=$(r,e,o)),t.push({attributes:c,geometry:u})}return t}function $(t,n,e){if(!t)return null;const o=m(n,e),{coords:s,lengths:r}=t,c=[];let u=0;for(const i of r){const l=[];for(let f=0;f<i;f++){const a=[];for(let h=0;h<o;h++)a.push(s[u++]);l.push(a)}c.push(l)}return n?e?{paths:c,hasZ:n,hasM:e}:{paths:c,hasZ:n}:e?{paths:c,hasM:e}:{paths:c}}function Mt(t,n,e,o,s){const r=m(e,o);for(const c of n){const u=c.geometry,i=c.attributes;let l;u&&(l=tt(new I,u,r)),t.push(new Z(l,i,null,i[s]))}return t}function tt(t,n,e=m(n.hasZ,n.hasM)){const{lengths:o,coords:s}=t;let r=0;for(const c of n.paths){for(const u of c)for(let i=0;i<e;i++)s[r++]=u[i];o.push(c.length)}return t}function It(t,n,e,o){for(const s of n){const{geometry:r,attributes:c,centroid:u}=s;let i;if(G(r)&&(i=nt(r,e,o)),G(u)){const l=z(u);t.push({attributes:c,centroid:l,geometry:i})}else t.push({attributes:c,geometry:i})}return t}function nt(t,n,e){if(!t)return null;const o=m(n,e),{coords:s,lengths:r}=t,c=[];let u=0;for(const i of r){const l=[];for(let f=0;f<i;f++){const a=[];for(let h=0;h<o;h++)a.push(s[u++]);l.push(a)}c.push(l)}return n?e?{rings:c,hasZ:n,hasM:e}:{rings:c,hasZ:n}:e?{rings:c,hasM:e}:{rings:c}}function Gt(t,n,e,o,s){for(const r of n){const c=r.geometry,u=r.centroid,i=r.attributes;let l;c&&(l=et(new I,c,e,o)),G(u)?t.push(new Z(l,i,J(new I,u),i[s])):t.push(new Z(l,i,null,i[s]))}return t}function et(t,n,e=n.hasZ,o=n.hasM){return Nt(t,n.rings,e,o),t}function Nt(t,n,e,o){const s=m(e,o),{lengths:r,coords:c}=t;let u=0;r.length=c.length=0;for(const i of n){for(const l of i)for(let f=0;f<s;f++)c[u++]=l[f];r.push(i.length)}return t}const F=[],P=[];function zt(t,n,e,o,s){F[0]=t;const[r]=rt(P,F,n,e,o,s);return F.length=P.length=0,r}function rt(t,n,e,o,s,r){if(t.length=0,!e){for(const c of n){const u=c.attributes[r];t.push(new Z(null,c.attributes,null,u))}return t}switch(e){case"esriGeometryPoint":return yt(t,n,o,s,r);case"esriGeometryMultipoint":return bt(t,n,o,s,r);case"esriGeometryPolyline":return Mt(t,n,o,s,r);case"esriGeometryPolygon":return Gt(t,n,o,s,r);default:k.error("convertToFeatureSet:unknown-geometry",new x(`Unable to parse unknown geometry type '${e}'`)),t.length=0}return t}function Et(t,n,e,o){P[0]=t,ot(F,P,n,e,o);const s=F[0];return F.length=P.length=0,s}function qt(t,n,e){if(N(t))return null;const o=new I;return"hasZ"in t&&n==null&&(n=t.hasZ),"hasM"in t&&e==null&&(e=t.hasM),ct(t)?K(n??t.z!=null,e??t.m!=null)(o,t):lt(t)?et(o,t,n,e):ut(t)?tt(o,t,m(n,e)):it(t)?X(o,t,m(n,e)):void k.error("convertFromGeometry:unknown-geometry",new x(`Unable to parse unknown geometry type '${t}'`))}function Tt(t,n,e,o){const s=t&&("coords"in t?t:t.geometry);if(N(s))return null;switch(n){case"esriGeometryPoint":{let r=z;return e&&o?r=Y:e?r=U:o&&(r=S),r(s)}case"esriGeometryMultipoint":return Q(s,e,o);case"esriGeometryPolyline":return $(s,e,o);case"esriGeometryPolygon":return nt(s,e,o);default:return void k.error("convertToGeometry:unknown-geometry",new x(`Unable to parse unknown geometry type '${n}'`))}}function Ft(t,n){for(const e of n)t.push({attributes:e.attributes});return t}function ot(t,n,e,o,s){if(t.length=0,N(e))return Ft(t,n);switch(e){case"esriGeometryPoint":return mt(t,n,o,s);case"esriGeometryMultipoint":return pt(t,n,o,s);case"esriGeometryPolyline":return wt(t,n,o,s);case"esriGeometryPolygon":return It(t,n,o,s);default:k.error("convertToFeatureSet:unknown-geometry",new x(`Unable to parse unknown geometry type '${e}'`))}return t}function Lt(t){const{objectIdFieldName:n,spatialReference:e,transform:o,fields:s,hasM:r,hasZ:c,features:u,geometryType:i,exceededTransferLimit:l,uniqueIdField:f,queryGeometry:a,queryGeometryType:h}=t,g={features:ot([],u,i,c,r),fields:s,geometryType:i,objectIdFieldName:n,spatialReference:e,uniqueIdField:f,queryGeometry:Tt(a,h,!1,!1)};return o&&(g.transform=o),l&&(g.exceededTransferLimit=l),r&&(g.hasM=r),c&&(g.hasZ=c),g}function Rt(t,n){const e=new ft,{hasM:o,hasZ:s,features:r,objectIdFieldName:c,spatialReference:u,geometryType:i,exceededTransferLimit:l,transform:f,fields:a}=t;return a&&(e.fields=a),e.geometryType=i,e.objectIdFieldName=c||n,e.spatialReference=u,e.objectIdFieldName?(r&&rt(e.features,r,i,s,o,e.objectIdFieldName),l&&(e.exceededTransferLimit=l),o&&(e.hasM=o),s&&(e.hasZ=s),f&&(e.transform=f),e):(k.error(new x("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),e)}function Ut(t){const{transform:n,features:e,hasM:o,hasZ:s}=t;if(!n)return t;for(const r of e)G(r.geometry)&&W(r.geometry,r.geometry,o,s,n),G(r.centroid)&&W(r.centroid,r.centroid,o,s,n);return t.transform=null,t}function St(t,n){const{geometryType:e,features:o,hasM:s,hasZ:r}=n;if(!t)return n;for(let c=0;c<o.length;c++){const u=o[c],i=u.weakClone();i.geometry=new I,O(i.geometry,u.geometry,s,r,e,t),u.centroid&&(i.centroid=new I,O(i.centroid,u.centroid,s,r,"esriGeometryPoint",t)),o[c]=i}return n.transform=t,n}function O(t,n,e,o,s,r,c=e,u=o){if(t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0),N(n)||!n.coords.length)return null;const i=B[s],{coords:l,lengths:f}=n,a=m(e,o),h=m(e&&c,o&&u),g=R(e,o,c,u);if(!f.length)return g(t.coords,l,0,0,E(r,l[0]),q(r,l[1])),t.lengths.length&&(t.lengths.length=0),t.coords.length=a,t;let d,w,y,M,p=0,b=0,T=b;for(const _ of f){if(_<i)continue;let j=0;b=T,y=d=E(r,l[p]),M=w=q(r,l[p+1]),g(t.coords,l,b,p,y,M),j++,p+=a,b+=h;for(let V=1;V<_;V++,p+=a)y=E(r,l[p]),M=q(r,l[p+1]),y===d&&M===w||(g(t.coords,l,b,p,y-d,M-w),b+=h,j++,d=y,w=M);j>=i&&(t.lengths.push(j),T=b)}return t.coords.length=T,t.coords.length?t:null}function Yt(t,n,e,o,s,r,c=e,u=o){if(t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0),!n||!n.coords.length)return null;const i=B[s],{coords:l,lengths:f}=n,a=m(e,o),h=m(e&&c,o&&u),g=R(e,o,c,u);if(!f.length)return g(t.coords,l,0,0,l[0],l[1]),t.lengths.length&&(t.lengths.length=0),t.coords.length=a,t;let d=0;const w=r*r;for(const y of f){if(y<i){d+=y*a;continue}const M=t.coords.length/h,p=d,b=d+(y-1)*a;g(t.coords,l,t.coords.length,p,l[p],l[p+1]),L(t.coords,l,a,w,g,p,b),g(t.coords,l,t.coords.length,b,l[b],l[b+1]);const T=t.coords.length/h-M;T>=i?t.lengths.push(T):t.coords.length=M*h,d+=y*a}return t.coords.length?t:null}function Zt(t,n,e,o){const s=t[n],r=t[n+1],c=t[e],u=t[e+1],i=t[o],l=t[o+1];let f=c,a=u,h=i-f,g=l-a;if(h!==0||g!==0){const d=((s-f)*h+(r-a)*g)/(h*h+g*g);d>1?(f=i,a=l):d>0&&(f+=h*d,a+=g*d)}return h=s-f,g=r-a,h*h+g*g}function L(t,n,e,o,s,r,c){let u,i=o,l=0;for(let f=r+e;f<c;f+=e)u=Zt(n,f,r,c),u>i&&(l=f,i=u);i>o&&(l-r>e&&L(t,n,e,o,s,r,l),s(t,n,t.length,l,n[l],n[l+1]),c-l>e&&L(t,n,e,o,s,l,c))}function _t(t,n,e,o){if(N(n)||!n.coords||!n.coords.length)return null;const s=m(e,o);let r=Number.POSITIVE_INFINITY,c=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY,i=Number.NEGATIVE_INFINITY;if(n&&n.coords){const l=n.coords;for(let f=0;f<l.length;f+=s){const a=l[f],h=l[f+1];r=Math.min(r,a),u=Math.max(u,a),c=Math.min(c,h),i=Math.max(i,h)}}return t[0]=r,t[1]=c,t[2]=u,t[3]=i,t}function W(t,n,e,o,s){const{coords:r,lengths:c}=n,u=e?o?H:v:o?v:D,i=m(e,o);if(!r.length)return t!==n&&(t.lengths.length=0,t.coords.length=0),t;if(!c.length)return u(t.coords,r,0,0,A(s,r[0]),C(s,r[1])),t!==n&&(t.lengths.length=0,t.coords.length=i),t;const[l,f]=s.scale;let a=0;for(let h=0;h<c.length;h++){const g=c[h];t.lengths[h]=g;let d=A(s,r[a]),w=C(s,r[a+1]);u(t.coords,r,a,a,d,w),a+=i;for(let y=1;y<g;y++,a+=i)d+=r[a]*l,w-=r[a+1]*f,u(t.coords,r,a,a,d,w)}return t!==n&&(t.lengths.length=c.length,t.coords.length=r.length),t}function Vt(t,n,e,o,s,r){const c=m(e,o),u=R(e,o,s,r),i=n.coords;t.coords.length=0,t.lengths.length=0,t.lengths.push(...n.lengths);for(let l=0;l<i.length;l+=c)u(t.coords,i,t.coords.length,l,i[l],i[l+1]);return t}function Pt(t,n,e,o){let s=0,r=t[o*n],c=t[o*(n+1)];for(let u=1;u<e;u++){const i=r+t[o*(n+u)],l=c+t[o*(n+u)+1],f=(i-r)*(l+c);r=i,c=l,s+=f}return .5*s}function At(t,n){const{coords:e,lengths:o}=t;let s=0,r=0;for(let c=0;c<o.length;c++)r+=Pt(e,s,o[c],n),s+=c;return Math.abs(r)}function Ct(t,n){if(N(t))return null;const e=t.clone(),o=t.coords,s=t.lengths;let r=0;for(let c=0;c<s.length;c++){const u=s[c];let i=o[n*r],l=o[n*r+1];for(let f=1;f<u;f++){const a=i+o[n*(r+f)],h=l+o[n*(r+f)+1];e.coords[n*(r+f)]=a,e.coords[n*(r+f)+1]=h,i=a,l=h}r+=u}return e}export{nt as C,et as D,vt as G,$ as L,q as M,zt as Q,rt as W,Q as _,E as a,At as b,Rt as c,Et as e,Yt as f,_t as g,O as i,Ut as l,W as m,Tt as n,Lt as s,qt as t,St as u,Ct as w,Vt as y};
