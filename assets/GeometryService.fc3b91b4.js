import{C as U,E as d,G as h,as as J,_ as f,d as y,b3 as C,at as c,ax as T,b4 as O,v as A,aB as S,b5 as m,b6 as $,b7 as L,b8 as M,b9 as D,ba as q,bb as j,bc as b,bd as v,V as Y,be as w,bf as H,bg as F,m as K}from"./index.2f57b5df.js";var P=Object.defineProperty,B=Object.defineProperties,G=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,R=(t,e,s)=>e in t?P(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,_=(t,e)=>{for(var s in e||(e={}))x.call(e,s)&&R(t,s,e[s]);if(E)for(var s of E(e))Q.call(e,s)&&R(t,s,e[s]);return t},I=(t,e)=>B(t,G(e));async function V(t,e,s){const n=c(t),a=_(I(_({},n.query),{f:"json"}),e.toJSON()),o=T(a,s);return f(n.path+"/areasAndLengths",o).then(i=>i.data)}async function k(t,e,s,n){const a=e[0].spatialReference,o=c(t),i=I(_({},o.query),{f:"json",sr:JSON.stringify(a.toJSON()),polygons:JSON.stringify(O(e).geometries),polylines:JSON.stringify(O(s).geometries)}),N=T(i,n);return f(o.path+"/autoComplete",N).then(({data:u})=>(u.geometries||[]).map(({rings:p})=>new A({spatialReference:a,rings:p})))}async function z(t,e,s){const n=c(t),a=_(I(_({},n.query),{f:"json"}),e.toJSON()),o=e.outSpatialReference||e.geometries[0].spatialReference,i=T(a,s);return f(n.path+"/buffer",i).then(N=>(N.data.geometries||[]).map(({rings:u})=>new A({spatialReference:o,rings:u})))}async function W(t,e,s){const n=e[0].spatialReference,a=c(t),o=I(_({},a.query),{f:"json",sr:JSON.stringify(n.toJSON()),geometries:JSON.stringify(O(e))}),i=T(o,s);return f(a.path+"/convexHull",i).then(({data:N})=>y(N.geometry).set({spatialReference:n}))}async function X(t,e,s,n){const a=c(t),o=e[0].spatialReference,i=I(_({},n),{query:I(_({},a.query),{f:"json",sr:JSON.stringify(o),target:JSON.stringify({geometryType:S(e[0]),geometries:e}),cutter:JSON.stringify(s)})}),N=await f(a.path+"/cut",i),{cutIndexes:u,geometries:p=[]}=N.data;return{cutIndexes:u,geometries:p.map(l=>{const g=y(l);return g.spatialReference=o,g})}}async function Z(t,e,s){const n=e.geometries[0].spatialReference,a=c(t),o=_(I(_({},a.query),{f:"json"}),e.toJSON()),i=T(o,s);return f(a.path+"/densify",i).then(({data:N})=>(N.geometries||[]).map(u=>y(u).set({spatialReference:n})))}async function ee(t,e,s,n){const a=e[0].spatialReference,o=c(t);let i={query:I(_({},o.query),{f:"json",sr:JSON.stringify(a.toJSON()),geometries:JSON.stringify(O(e)),geometry:JSON.stringify({geometryType:S(s),geometry:s.toJSON()})})};return n&&(i=_(_({},n),i)),f(o.path+"/difference",i).then(({data:N})=>(N.geometries||[]).map(u=>y(u).set({spatialReference:a})))}async function te(t,e,s){const n=c(t),a=_(I(_({},n.query),{f:"json"}),e.toJSON()),o=T(a,s);return f(n.path+"/distance",o).then(({data:i})=>i&&i.distance)}async function re(t,e,s){const n={};e.sr!=null&&typeof e.sr=="object"?n.sr=e.sr.wkid||JSON.stringify(e.sr):n.sr=e.sr,n.strings=JSON.stringify(e.strings);const a=e.conversionType||"mgrs";n.conversionType=m.toJSON(a),n.conversionMode=e.conversionMode;const o=c(t),i=_(I(_({},o.query),{f:"json"}),n),N=T(i,s);return f(o.path+"/fromGeoCoordinateString",N).then(({data:u})=>u.coordinates)}async function se(t,e,s){const n=(e=$.from(e)).toJSON(),a=L(e),o=c(t),i=_(I(_({},o.query),{f:"json"}),a),N=n.geometries[0].spatialReference,u=T(i,s);return f(o.path+"/generalize",u).then(({data:p})=>(p.geometries||[]).map(l=>y(l).set({spatialReference:N})))}async function ne(t,e,s,n){const a=e[0].spatialReference,o=c(t),i=I(_({},o.query),{f:"json",sr:JSON.stringify(a.toJSON()),geometries:JSON.stringify(O(e)),geometry:JSON.stringify({geometryType:S(s),geometry:s.toJSON()})}),N=T(i,n);return f(o.path+"/intersect",N).then(({data:u})=>(u.geometries||[]).map(p=>y(p).set({spatialReference:a})))}function ae(t,e,s){const n=e.map(u=>u.toJSON()),a=e[0].spatialReference,o=c(t),i=I(_({},o.query),{f:"json",sr:a.wkid?a.wkid:JSON.stringify(a.toJSON()),polygons:JSON.stringify(n)}),N=T(i,s);return f(o.path+"/labelPoints",N).then(({data:u})=>(u.labelPoints||[]).map(p=>y(p).set({spatialReference:a})))}async function oe(t,e,s){e=M.from(e);const n=D(e),a=c(t),o=_(I(_({},a.query),{f:"json"}),n),i=T(o,s);return f(a.path+"/lengths",i).then(({data:N})=>N)}async function ie(t,e,s){e=q.from(e);const n=j(e),a=c(t),o=_(I(_({},a.query),{f:"json"}),n),i=e.geometries[0].spatialReference,N=T(o,s);return f(a.path+"/offset",N).then(({data:u})=>(u.geometries||[]).map(p=>y(p).set({spatialReference:i})))}async function Ne(t,e,s){e=b.from(e);const n=v(e),a=c(t),o=_(I(_({},a.query),{f:"json"}),n),i=T(o,s);return f(a.path+"/relation",i).then(({data:N})=>N.relations)}async function _e(t,e,s,n){const a=e.spatialReference,o=c(t),i=I(_({},o.query),{f:"json",sr:JSON.stringify(a.toJSON()),target:JSON.stringify({geometryType:S(e),geometry:e.toJSON()}),reshaper:JSON.stringify(s.toJSON())}),N=T(i,n);return f(o.path+"/reshape",N).then(({data:u})=>y(u.geometry).set({spatialReference:a}))}async function ue(t,e,s){const n=typeof t=="string"?Y(t):t,a=e[0].spatialReference,o=S(e[0]),i=I(_({},s),{query:I(_({},n.query),{f:"json",sr:a.wkid?a.wkid:JSON.stringify(a),geometries:JSON.stringify(O(e))})}),{data:N}=await f(n.path+"/simplify",i);return w(N.geometries,o,a)}async function Ie(t,e,s){const n={};e.sr!=null&&typeof e.sr=="object"?n.sr=e.sr.wkid||JSON.stringify(e.sr):n.sr=e.sr,n.coordinates=JSON.stringify(e.coordinates);const a=e.conversionType||"mgrs";n.conversionType=m.toJSON(a),n.conversionMode=e.conversionMode,n.numOfDigits=e.numOfDigits,n.rounding=e.rounding,n.addSpaces=e.addSpaces;const o=c(t),i=_(I(_({},o.query),{f:"json"}),n),N=T(i,s);return f(o.path+"/toGeoCoordinateString",N).then(({data:u})=>u.strings)}async function fe(t,e,s){e=H.from(e);const n=F(e),a=c(t),o=_(I(_({},a.query),{f:"json"}),n),i=e.sr,N=T(o,s);return f(a.path+"/trimExtend",N).then(({data:u})=>(u.geometries||[]).map(({paths:p})=>new K({spatialReference:i,paths:p})))}async function ce(t,e,s){const n=e[0].spatialReference,a=c(t),o=I(_({},a.query),{f:"json",sr:JSON.stringify(n.toJSON()),geometries:JSON.stringify(O(e))}),i=T(o,s);return f(a.path+"/union",i).then(({data:N})=>y(N.geometry).set({spatialReference:n}))}let r=class extends J{constructor(t){super(t),this.url=null}areasAndLengths(t,e){return V(this.url,t,e)}autoComplete(t,e,s){return k(this.url,t,e,s)}buffer(t,e){return z(this.url,t,e)}convexHull(t,e){return W(this.url,t,e)}cut(t,e,s){return X(this.url,t,e,s)}densify(t,e){return Z(this.url,t,e)}difference(t,e,s){return ee(this.url,t,e,s)}distance(t,e){return te(this.url,t,e)}fromGeoCoordinateString(t,e){return re(this.url,t,e)}generalize(t,e){return se(this.url,t,e)}intersect(t,e,s){return ne(this.url,t,e,s)}labelPoints(t,e){return ae(this.url,t,e)}lengths(t,e){return oe(this.url,t,e)}offset(t,e){return ie(this.url,t,e)}project(t,e){return C(this.url,t,e)}relation(t,e){return Ne(this.url,t,e)}reshape(t,e,s){return _e(this.url,t,e,s)}simplify(t,e){return ue(this.url,t,e)}toGeoCoordinateString(t,e){return Ie(this.url,t,e)}trimExtend(t,e){return fe(this.url,t,e)}union(t,e){return ce(this.url,t,e)}};r.UNIT_METER=9001,r.UNIT_GERMAN_METER=9031,r.UNIT_FOOT=9002,r.UNIT_SURVEY_FOOT=9003,r.UNIT_CLARKE_FOOT=9005,r.UNIT_FATHOM=9014,r.UNIT_NAUTICAL_MILE=9030,r.UNIT_SURVEY_CHAIN=9033,r.UNIT_SURVEY_LINK=9034,r.UNIT_SURVEY_MILE=9035,r.UNIT_KILOMETER=9036,r.UNIT_CLARKE_YARD=9037,r.UNIT_CLARKE_CHAIN=9038,r.UNIT_CLARKE_LINK=9039,r.UNIT_SEARS_YARD=9040,r.UNIT_SEARS_FOOT=9041,r.UNIT_SEARS_CHAIN=9042,r.UNIT_SEARS_LINK=9043,r.UNIT_BENOIT_1895A_YARD=9050,r.UNIT_BENOIT_1895A_FOOT=9051,r.UNIT_BENOIT_1895A_CHAIN=9052,r.UNIT_BENOIT_1895A_LINK=9053,r.UNIT_BENOIT_1895B_YARD=9060,r.UNIT_BENOIT_1895B_FOOT=9061,r.UNIT_BENOIT_1895B_CHAIN=9062,r.UNIT_BENOIT_1895B_LINK=9063,r.UNIT_INDIAN_FOOT=9080,r.UNIT_INDIAN_1937_FOOT=9081,r.UNIT_INDIAN_1962_FOOT=9082,r.UNIT_INDIAN_1975_FOOT=9083,r.UNIT_INDIAN_YARD=9084,r.UNIT_INDIAN_1937_YARD=9085,r.UNIT_INDIAN_1962_YARD=9086,r.UNIT_INDIAN_1975_YARD=9087,r.UNIT_FOOT_1865=9070,r.UNIT_RADIAN=9101,r.UNIT_DEGREE=9102,r.UNIT_ARCMINUTE=9103,r.UNIT_ARCSECOND=9104,r.UNIT_GRAD=9105,r.UNIT_GON=9106,r.UNIT_MICRORADIAN=9109,r.UNIT_ARCMINUTE_CENTESIMAL=9112,r.UNIT_ARCSECOND_CENTESIMAL=9113,r.UNIT_MIL6400=9114,r.UNIT_BRITISH_1936_FOOT=9095,r.UNIT_GOLDCOAST_FOOT=9094,r.UNIT_INTERNATIONAL_CHAIN=109003,r.UNIT_INTERNATIONAL_LINK=109004,r.UNIT_INTERNATIONAL_YARD=109001,r.UNIT_STATUTE_MILE=9093,r.UNIT_SURVEY_YARD=109002,r.UNIT_50KILOMETER_LENGTH=109030,r.UNIT_150KILOMETER_LENGTH=109031,r.UNIT_DECIMETER=109005,r.UNIT_CENTIMETER=109006,r.UNIT_MILLIMETER=109007,r.UNIT_INTERNATIONAL_INCH=109008,r.UNIT_US_SURVEY_INCH=109009,r.UNIT_INTERNATIONAL_ROD=109010,r.UNIT_US_SURVEY_ROD=109011,r.UNIT_US_NAUTICAL_MILE=109012,r.UNIT_UK_NAUTICAL_MILE=109013,r.UNIT_SQUARE_INCHES="esriSquareInches",r.UNIT_SQUARE_FEET="esriSquareFeet",r.UNIT_SQUARE_YARDS="esriSquareYards",r.UNIT_ACRES="esriAcres",r.UNIT_SQUARE_MILES="esriSquareMiles",r.UNIT_SQUARE_MILLIMETERS="esriSquareMillimeters",r.UNIT_SQUARE_CENTIMETERS="esriSquareCentimeters",r.UNIT_SQUARE_DECIMETERS="esriSquareDecimeters",r.UNIT_SQUARE_METERS="esriSquareMeters",r.UNIT_ARES="esriAres",r.UNIT_HECTARES="esriHectares",r.UNIT_SQUARE_KILOMETERS="esriSquareKilometers",U([d()],r.prototype,"url",void 0),r=U([h("esri.tasks.GeometryService")],r);const pe=r;export{pe as default};