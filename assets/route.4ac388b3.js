import{C as a,E as f,ar as I,aq as N,G as V,ap as T,T as J,at as F,_ as G,r as D}from"./index.2f57b5df.js";import{a as K,i as w,u as Q,f as Z,d as k,o as z}from"./NAMessage.e44fb360.js";import{v as H}from"./normalizeUtils.5ceaf9c6.js";import{c as U}from"./DirectionsFeatureSet.236eb045.js";var X=Object.defineProperty,Y=Object.defineProperties,ee=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable,q=(s,r,i)=>r in s?X(s,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[r]=i,S=(s,r)=>{for(var i in r||(r={}))re.call(r,i)&&q(s,i,r[i]);if(x)for(var i of x(r))te.call(r,i)&&q(s,i,r[i]);return s},C=(s,r)=>Y(s,ee(r));let g=class extends J{constructor(s){super(s),this.directionLines=null,this.directionPoints=null,this.directions=null,this.route=null,this.routeName=null,this.stops=null}};a([f({type:I,json:{write:!0}})],g.prototype,"directionLines",void 0),a([f({type:I,json:{write:!0}})],g.prototype,"directionPoints",void 0),a([f({type:U,json:{write:!0}})],g.prototype,"directions",void 0),a([f({type:N,json:{write:!0}})],g.prototype,"route",void 0),a([f({type:String,json:{write:!0}})],g.prototype,"routeName",void 0),a([f({type:[N],json:{write:!0}})],g.prototype,"stops",void 0),g=a([V("esri.rest.support.RouteResult")],g);const se=g;function E(s){return s&&I.fromJSON(s).features.map(r=>r)}let c=class extends J{constructor(s){super(s),this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routeResults=null}readPointBarriers(s,r){return E(r.barriers)}readPolylineBarriers(s){return E(s)}readPolygonBarriers(s){return E(s)}};a([f({type:[K]})],c.prototype,"messages",void 0),a([f({type:[N]})],c.prototype,"pointBarriers",void 0),a([T("pointBarriers",["barriers"])],c.prototype,"readPointBarriers",null),a([f({type:[N]})],c.prototype,"polylineBarriers",void 0),a([T("polylineBarriers")],c.prototype,"readPolylineBarriers",null),a([f({type:[N]})],c.prototype,"polygonBarriers",void 0),a([T("polygonBarriers")],c.prototype,"readPolygonBarriers",null),a([f({type:[se]})],c.prototype,"routeResults",void 0),c=a([V("esri.rest.support.RouteSolveResult")],c);const oe=c,ie=z({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:s=>s.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});function O(s){return(s==null?void 0:s.declaredClass)==="esri.rest.support.FeatureSet"}async function ce(s,r,i){const P=[],v=[],d={},e={},B=F(s),{path:m}=B;O(r.stops)&&w(r.stops.features,v,"stops.features",d),O(r.pointBarriers)&&w(r.pointBarriers.features,v,"pointBarriers.features",d),O(r.polylineBarriers)&&w(r.polylineBarriers.features,v,"polylineBarriers.features",d),O(r.polygonBarriers)&&w(r.polygonBarriers.features,v,"polygonBarriers.features",d);const _=await H(v);for(const l in d){const h=d[l];P.push(l),e[l]=_.slice(h[0],h[1])}if(Q(e,P)){let l=null;try{l=await Z(m,r.apiKey,i)}catch{}l&&!l.hasZ&&k(e,P)}for(const l in e)e[l].forEach((h,j)=>{r.get(l)[j].geometry=h});const $=C(S({},i),{query:C(S(S({},B.query),ie.toQueryParams(r)),{f:"json"})}),y=m.endsWith("/solve")?m:`${m}/solve`,{data:A}=await G(y,$);return ae(A)}function ae(s){var r,i,P,v,d;const e=new Map,{directionLines:B,directionPoints:m,directions:_,routes:$,stops:y,barriers:A,polygonBarriers:l,polylineBarriers:h,messages:j}=s,L=(r=(i=(P=(v=$==null?void 0:$.spatialReference)!=null?v:y==null?void 0:y.spatialReference)!=null?P:A==null?void 0:A.spatialReference)!=null?i:l==null?void 0:l.spatialReference)!=null?r:h==null?void 0:h.spatialReference;$==null||$.features.forEach(t=>{const o=t.attributes.Name,u=t.attributes.ObjectID;e.has(o)?(e.get(o).route=t,e.get(o).routeId=u):e.set(o,{route:t,routeId:u,routeName:o}),D(t.geometry)&&(t.geometry.spatialReference=L)}),_==null||_.forEach(t=>{const o=t.routeName;e.has(o)?e.get(o).directions=t:e.set(o,{routeName:o,directions:t})}),y==null||y.features.forEach(t=>{var o;const u=(o=t.attributes.RouteName)!=null?o:null;e.has(u)?e.get(u).stops?e.get(u).stops.push(t):e.get(u).stops=[t]:e.set(u,{stops:[t],routeName:u}),D(t.geometry)&&(t.geometry.spatialReference=L)});const M=(d=y==null?void 0:y.features.every(t=>t.attributes.RouteName==null))==null||d;if((y==null?void 0:y.features.length)>0&&M){const t=Array.from(e.keys())[0];e.get(t).stops=e.get(null).stops,e.delete(null)}B==null||B.features.forEach(t=>{var o;const u=t.attributes.RouteID,n=(o=Array.from(e.values()).find(p=>p.routeId===u))==null?void 0:o.routeName;if(n)if(e.has(n))if(e.get(n).directionLines)e.get(n).directionLines.features.push(t);else{const{fieldAliases:p,geometryType:R,spatialReference:b}=B;e.get(n).directionLines={features:[t],fieldAliases:p,geometryType:R,spatialReference:b}}else{const{fieldAliases:p,geometryType:R,spatialReference:b}=B;e.set(n,{routeName:n,directionLines:{features:[t],fieldAliases:p,geometryType:R,spatialReference:b}})}}),m==null||m.features.forEach(t=>{var o;const u=t.attributes.RouteID,n=(o=Array.from(e.values()).find(p=>p.routeId===u))==null?void 0:o.routeName;if(n)if(e.has(n))if(e.get(n).directionPoints)e.get(n).directionPoints.features.push(t);else{const{fieldAliases:p,geometryType:R,spatialReference:b}=m;e.get(n).directionPoints={features:[t],fieldAliases:p,geometryType:R,spatialReference:b}}else{const{fieldAliases:p,geometryType:R,spatialReference:b}=m;e.set(n,{routeName:n,directionPoints:{features:[t],fieldAliases:p,geometryType:R,spatialReference:b}})}});const W=Array.from(e.values());return oe.fromJSON({routeResults:W,barriers:A,polygonBarriers:l,polylineBarriers:h,messages:j})}export{ce as p};
