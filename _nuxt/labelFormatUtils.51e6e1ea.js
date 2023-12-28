import{a4 as f,gk as m,_ as g,gl as y,gm as b,gn as v,cu as $,go as x,o as _,gp as h}from"./entry.a426b012.js";const F=f.getLogger("esri.layers.support.labelFormatUtils"),d={type:"simple",evaluate:()=>null},w={getAttribute:(t,r)=>t.field(r)};async function L(t,r,e){if(!t||!t.symbol)return d;const l=t.where,n=m(t),o=l?await g(()=>import("./WhereClause.5a06219b.js"),["./WhereClause.5a06219b.js","./entry.a426b012.js","./entry.5fbb926e.css"],import.meta.url):null;let u;if(n.type==="arcade"){const a=await y(n.expression,e,r);u={type:"arcade",evaluate(i){try{const s=a.evaluate({$feature:"attributes"in i?a.repurposeFeature(i):i});if(s!=null)return s.toString()}catch{F.error(new _("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:i,expression:n}))}return null},needsHydrationToEvaluate:()=>h(n.expression)==null}}else u={type:"simple",evaluate:a=>n.expression.replace(/{[^}]*}/g,i=>{const s=i.slice(1,-1),c=r.get(s);if(!c)return i;let p=null;return"attributes"in a?a&&a.attributes&&(p=a.attributes[c.name]):p=a.field(c.name),p==null?"":V(p,c)})};if(l){let a;try{a=o.WhereClause.create(l,r)}catch{return d}const i=u.evaluate;u.evaluate=s=>{const c="attributes"in s?void 0:w;return a.testFeature(s,c)?i(s):null}}return u}function V(t,r){if(t==null)return"";const e=r.domain;if(e){if(e.type==="codedValue"||e.type==="coded-value"){const n=t;for(const o of e.codedValues)if(o.code===n)return o.name}else if(e.type==="range"){const n=+t,o="range"in e?e.range[0]:e.minValue,u="range"in e?e.range[1]:e.maxValue;if(o<=n&&n<=u)return e.name}}let l=t;return r.type==="date"||r.type==="esriFieldTypeDate"?l=b(l,v("short-date")):$(r)&&(l=x(+l)),l||""}export{L as createLabelFunction,V as formatField};