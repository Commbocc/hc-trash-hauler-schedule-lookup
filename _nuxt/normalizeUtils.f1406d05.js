import{m as O,g as J,a4 as B,Y as F,t as V,ce as H,r as K,da as A,O as C,aB as G,U as T,d as Q,v as D,cR as Z,db as ee,dc as te,o as ne}from"./entry.a426b012.js";var se=Object.defineProperty,re=Object.defineProperties,oe=Object.getOwnPropertyDescriptors,U=Object.getOwnPropertySymbols,ie=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,z=(e,t,s)=>t in e?se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,X=(e,t)=>{for(var s in t||(t={}))ie.call(t,s)&&z(e,s,t[s]);if(U)for(var s of U(t))ae.call(t,s)&&z(e,s,t[s]);return e},q=(e,t)=>re(e,oe(t));const M={102100:{maxX:20037508342788905e-9,minX:-20037508342788905e-9,plus180Line:new O({paths:[[[20037508342788905e-9,-20037508342788905e-9],[20037508342788905e-9,20037508342788905e-9]]],spatialReference:J.WebMercator}),minus180Line:new O({paths:[[[-20037508342788905e-9,-20037508342788905e-9],[-20037508342788905e-9,20037508342788905e-9]]],spatialReference:J.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new O({paths:[[[180,-180],[180,180]]],spatialReference:J.WGS84}),minus180Line:new O({paths:[[[-180,-180],[-180,180]]],spatialReference:J.WGS84})}};function R(e,t){return Math.ceil((e-t)/(2*t))}function Y(e,t){const s=N(e);for(const r of s)for(const n of r)n[0]+=t;return e}function N(e){return Z(e)?e.rings:e.paths}async function ce(e,t,s,r){const n=typeof e=="string"?C(e):e,i=t[0].spatialReference,l=q(X({},r),{query:q(X({},n.query),{f:"json",sr:JSON.stringify(i),target:JSON.stringify({geometryType:G(t[0]),geometries:t}),cutter:JSON.stringify(s)})}),a=await T(n.path+"/cut",l),{cutIndexes:f,geometries:m=[]}=a.data;return{cutIndexes:f,geometries:m.map(p=>{const d=Q(p);return d.spatialReference=i,d})}}async function fe(e,t,s){const r=typeof e=="string"?C(e):e,n=t[0].spatialReference,i=G(t[0]),l=q(X({},s),{query:q(X({},r.query),{f:"json",sr:n.wkid?n.wkid:JSON.stringify(n),geometries:JSON.stringify(pe(t))})});return le((await T(r.path+"/simplify",l)).data,i,n)}function pe(e){return{geometryType:G(e[0]),geometries:e.map(t=>t.toJSON())}}function le(e,t,s){const r=ee(t);return e.map(n=>{const i=r.fromJSON(n);return i.spatialReference=s,i})}const ue=B.getLogger("esri.geometry.support.normalizeUtils");function he(e){return e.type==="polygon"}function ge(e){return e[0].type==="polygon"}function me(e){return e[0].type==="polyline"}function ye(e,t){if(!(e instanceof O||e instanceof D)){const n="straightLineDensify: the input geometry is neither polyline nor polygon";throw ue.error(n),new ne(n)}const s=N(e),r=[];for(const n of s){const i=[];r.push(i),i.push([n[0][0],n[0][1]]);for(let l=0;l<n.length-1;l++){const a=n[l][0],f=n[l][1],m=n[l+1][0],p=n[l+1][1],d=Math.sqrt((m-a)*(m-a)+(p-f)*(p-f)),y=(p-f)/d,h=(m-a)/d,x=d/t;if(x>1){for(let P=1;P<=x-1;P++){const S=P*t,b=h*S+a,o=y*S+f;i.push([b,o])}const u=(d+Math.floor(x-1)*t)/2,_=h*u+a,v=y*u+f;i.push([_,v])}i.push([m,p])}}return he(e)?new D({rings:r,spatialReference:e.spatialReference}):new O({paths:r,spatialReference:e.spatialReference})}function E(e,t,s){if(t){const r=ye(e,1e6);e=te(r,!0)}return s&&(e=Y(e,s)),e}function k(e,t,s){if(Array.isArray(e)){const r=e[0];if(r>t){const n=R(r,t);e[0]=r+n*(-2*t)}else if(r<s){const n=R(r,s);e[0]=r+n*(-2*s)}}else{const r=e.x;if(r>t){const n=R(r,t);e=e.clone().offset(n*(-2*t),0)}else if(r<s){const n=R(r,s);e=e.clone().offset(n*(-2*s),0)}}return e}function de(e,t){let s=-1;for(let r=0;r<t.cutIndexes.length;r++){const n=t.cutIndexes[r],i=t.geometries[r],l=N(i);for(let a=0;a<l.length;a++){const f=l[a];f.some(m=>{if(m[0]<180)return!0;{let p=0;for(let y=0;y<f.length;y++){const h=f[y][0];p=h>p?h:p}p=Number(p.toFixed(9));const d=-360*R(p,180);for(let y=0;y<f.length;y++){const h=i.getPoint(a,y);i.setPoint(a,y,h.clone().offset(d,0))}return!0}})}if(n===s){if(ge(e))for(const a of N(i))e[n]=e[n].addRing(a);else if(me(e))for(const a of N(i))e[n]=e[n].addPath(a)}else s=n,e[n]=i}return e}async function xe(e,t,s){var r;if(!Array.isArray(e))return xe([e],t);const n=(r=t==null?void 0:t.url)!=null?r:F.geometryServiceUrl;let i,l,a,f,m,p,d,y,h=0;const x=[],u=[];for(const o of e)if(V(o))u.push(o);else if(i||(i=o.spatialReference,l=H(i),a=i.isWebMercator,p=a?102100:4326,f=M[p].maxX,m=M[p].minX,d=M[p].plus180Line,y=M[p].minus180Line),l)if(o.type==="mesh")u.push(o);else if(o.type==="point")u.push(k(o.clone(),f,m));else if(o.type==="multipoint"){const c=o.clone();c.points=c.points.map(g=>k(g,f,m)),u.push(c)}else if(o.type==="extent"){const c=o.clone()._normalize(!1,!1,l);u.push(c.rings?new D(c):c)}else if(o.extent){const c=o.extent,g=R(c.xmin,m)*(2*f);let w=g===0?o.clone():Y(o.clone(),g);c.offset(g,0),c.intersects(d)&&c.xmax!==f?(h=c.xmax>h?c.xmax:h,w=E(w,a),x.push(w),u.push("cut")):c.intersects(y)&&c.xmin!==m?(h=c.xmax*(2*f)>h?c.xmax*(2*f):h,w=E(w,a,360),x.push(w),u.push("cut")):u.push(w)}else u.push(o.clone());else u.push(o);let _=R(h,f),v=-90;const P=_,S=new O;for(;_>0;){const o=360*_-180;S.addPath([[o,v],[o,-1*v]]),v*=-1,_--}if(x.length>0&&P>0){const o=de(x,await ce(n,x,S,s)),c=[],g=[];for(let $=0;$<u.length;$++){const j=u[$];if(j!=="cut")g.push(j);else{const I=o.shift(),L=e[$];K(L)&&L.type==="polygon"&&L.rings&&L.rings.length>1&&I.rings.length>=L.rings.length?(c.push(I),g.push("simplify")):g.push(a?A(I):I)}}if(!c.length)return g;const w=await fe(n,c,s),W=[];for(let $=0;$<g.length;$++){const j=g[$];j!=="simplify"?W.push(j):W.push(a?A(w.shift()):w.shift())}return W}const b=[];for(let o=0;o<u.length;o++){const c=u[o];if(c!=="cut")b.push(c);else{const g=x.shift();b.push(a===!0?A(g):g)}}return Promise.resolve(b)}export{xe as v};