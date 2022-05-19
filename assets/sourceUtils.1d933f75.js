import{dL as m,cy as p,dM as y,dN as g,dO as w,a$ as f}from"./index.2f57b5df.js";class b{constructor(){this.code=null,this.description=null}}class I{constructor(t){this.error=new b,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}}function d(e){return new I(e)}class ${constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function F(e){return new $(e)}const a=new Set;function G(e,t,i,h=!1,u){a.clear();for(const s in i){const n=e.get(s);if(!n)continue;const l=i[s],r=q(n,l);if(r!==l&&u&&u.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:n,originalValue:l,sanitizedValue:r}}),a.add(n.name),n&&(h||n.editable)){const c=g(n,r);if(c)return d(w(c,n,r));t[n.name]=r}}for(const s of e.requiredFields)if(!a.has(s.name))return d(`missing required field "${s.name}"`);return null}function q(e,t){let i=t;return typeof t=="string"&&m(e)?i=parseFloat(t):t!=null&&p(e)&&typeof t!="string"&&(i=String(t)),y(i)}let o;function P(e,t){if(!e||!f(t))return e;if("rings"in e||"paths"in e){if(!o)throw new TypeError("geometry engine not loaded");return o.simplify(t,e)}return e}async function v(){return o||(o=await import("./geometryEngineJSON2.72b57e4d.js"),o)}async function S(e,t){!f(e)||t!=="esriGeometryPolygon"&&t!=="esriGeometryPolyline"||await v()}export{F as c,G as d,P as h,d as u,S as y};
