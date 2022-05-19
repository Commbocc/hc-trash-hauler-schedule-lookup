import{m as _,h as I,q as B,a3 as F,t as Y,az as H,v as D,r as K,aA as W,x as Q,V as k,aB as z,_ as T,d as Z,aC as ee,aD as te,u as ne}from"./index.2f57b5df.js";var se=Object.defineProperty,re=Object.defineProperties,oe=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,ie=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,C=(e,t,s)=>t in e?se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,M=(e,t)=>{for(var s in t||(t={}))ie.call(t,s)&&C(e,s,t[s]);if(G)for(var s of G(t))ae.call(t,s)&&C(e,s,t[s]);return e},X=(e,t)=>re(e,oe(t));const J={102100:{maxX:20037508342788905e-9,minX:-20037508342788905e-9,plus180Line:new _({paths:[[[20037508342788905e-9,-20037508342788905e-9],[20037508342788905e-9,20037508342788905e-9]]],spatialReference:I.WebMercator}),minus180Line:new _({paths:[[[-20037508342788905e-9,-20037508342788905e-9],[-20037508342788905e-9,20037508342788905e-9]]],spatialReference:I.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new _({paths:[[[180,-180],[180,180]]],spatialReference:I.WGS84}),minus180Line:new _({paths:[[[-180,-180],[-180,180]]],spatialReference:I.WGS84})}};function O(e,t){return Math.ceil((e-t)/(2*t))}function V(e,t){const s=N(e);for(const r of s)for(const n of r)n[0]+=t;return e}function N(e){return Q(e)?e.rings:e.paths}async function ce(e,t,s,r){const n=typeof e=="string"?k(e):e,i=t[0].spatialReference,l=X(M({},r),{query:X(M({},n.query),{f:"json",sr:JSON.stringify(i),target:JSON.stringify({geometryType:z(t[0]),geometries:t}),cutter:JSON.stringify(s)})}),a=await T(n.path+"/cut",l),{cutIndexes:f,geometries:m=[]}=a.data;return{cutIndexes:f,geometries:m.map(p=>{const d=Z(p);return d.spatialReference=i,d})}}async function fe(e,t,s){const r=typeof e=="string"?k(e):e,n=t[0].spatialReference,i=z(t[0]),l=X(M({},s),{query:X(M({},r.query),{f:"json",sr:n.wkid?n.wkid:JSON.stringify(n),geometries:JSON.stringify(pe(t))})});return le((await T(r.path+"/simplify",l)).data,i,n)}function pe(e){return{geometryType:z(e[0]),geometries:e.map(t=>t.toJSON())}}function le(e,t,s){const r=ee(t);return e.map(n=>{const i=r.fromJSON(n);return i.spatialReference=s,i})}const ue=B.getLogger("esri.geometry.support.normalizeUtils");function he(e){return e.type==="polygon"}function ge(e){return e[0].type==="polygon"}function me(e){return e[0].type==="polyline"}function ye(e,t){if(!(e instanceof _||e instanceof D)){const n="straightLineDensify: the input geometry is neither polyline nor polygon";throw ue.error(n),new ne(n)}const s=N(e),r=[];for(const n of s){const i=[];r.push(i),i.push([n[0][0],n[0][1]]);for(let l=0;l<n.length-1;l++){const a=n[l][0],f=n[l][1],m=n[l+1][0],p=n[l+1][1],d=Math.sqrt((m-a)*(m-a)+(p-f)*(p-f)),y=(p-f)/d,h=(m-a)/d,x=d/t;if(x>1){for(let R=1;R<=x-1;R++){const S=R*t,b=h*S+a,o=y*S+f;i.push([b,o])}const u=(d+Math.floor(x-1)*t)/2,v=h*u+a,P=y*u+f;i.push([v,P])}i.push([m,p])}}return he(e)?new D({rings:r,spatialReference:e.spatialReference}):new _({paths:r,spatialReference:e.spatialReference})}function E(e,t,s){if(t){const r=ye(e,1e6);e=te(r,!0)}return s&&(e=V(e,s)),e}function U(e,t,s){if(Array.isArray(e)){const r=e[0];if(r>t){const n=O(r,t);e[0]=r+n*(-2*t)}else if(r<s){const n=O(r,s);e[0]=r+n*(-2*s)}}else{const r=e.x;if(r>t){const n=O(r,t);e=e.clone().offset(n*(-2*t),0)}else if(r<s){const n=O(r,s);e=e.clone().offset(n*(-2*s),0)}}return e}function de(e,t){let s=-1;for(let r=0;r<t.cutIndexes.length;r++){const n=t.cutIndexes[r],i=t.geometries[r],l=N(i);for(let a=0;a<l.length;a++){const f=l[a];f.some(m=>{if(m[0]<180)return!0;{let p=0;for(let y=0;y<f.length;y++){const h=f[y][0];p=h>p?h:p}p=Number(p.toFixed(9));const d=-360*O(p,180);for(let y=0;y<f.length;y++){const h=i.getPoint(a,y);i.setPoint(a,y,h.clone().offset(d,0))}return!0}})}if(n===s){if(ge(e))for(const a of N(i))e[n]=e[n].addRing(a);else if(me(e))for(const a of N(i))e[n]=e[n].addPath(a)}else s=n,e[n]=i}return e}async function xe(e,t,s){var r;if(!Array.isArray(e))return xe([e],t);const n=(r=t==null?void 0:t.url)!=null?r:F.geometryServiceUrl;let i,l,a,f,m,p,d,y,h=0;const x=[],u=[];for(const o of e)if(Y(o))u.push(o);else if(i||(i=o.spatialReference,l=H(i),a=i.isWebMercator,p=a?102100:4326,f=J[p].maxX,m=J[p].minX,d=J[p].plus180Line,y=J[p].minus180Line),l)if(o.type==="mesh")u.push(o);else if(o.type==="point")u.push(U(o.clone(),f,m));else if(o.type==="multipoint"){const c=o.clone();c.points=c.points.map(g=>U(g,f,m)),u.push(c)}else if(o.type==="extent"){const c=o.clone()._normalize(!1,!1,l);u.push(c.rings?new D(c):c)}else if(o.extent){const c=o.extent,g=O(c.xmin,m)*(2*f);let w=g===0?o.clone():V(o.clone(),g);c.offset(g,0),c.intersects(d)&&c.xmax!==f?(h=c.xmax>h?c.xmax:h,w=E(w,a),x.push(w),u.push("cut")):c.intersects(y)&&c.xmin!==m?(h=c.xmax*(2*f)>h?c.xmax*(2*f):h,w=E(w,a,360),x.push(w),u.push("cut")):u.push(w)}else u.push(o.clone());else u.push(o);let v=O(h,f),P=-90;const R=v,S=new _;for(;v>0;){const o=360*v-180;S.addPath([[o,P],[o,-1*P]]),P*=-1,v--}if(x.length>0&&R>0){const o=de(x,await ce(n,x,S,s)),c=[],g=[];for(let $=0;$<u.length;$++){const j=u[$];if(j!=="cut")g.push(j);else{const q=o.shift(),L=e[$];K(L)&&L.type==="polygon"&&L.rings&&L.rings.length>1&&q.rings.length>=L.rings.length?(c.push(q),g.push("simplify")):g.push(a?W(q):q)}}if(!c.length)return g;const w=await fe(n,c,s),A=[];for(let $=0;$<g.length;$++){const j=g[$];j!=="simplify"?A.push(j):A.push(a?W(w.shift()):w.shift())}return A}const b=[];for(let o=0;o<u.length;o++){const c=u[o];if(c!=="cut")b.push(c);else{const g=x.shift();b.push(a===!0?W(g):g)}}return Promise.resolve(b)}export{xe as v};
