import{U as i,z as d,aq as p,i as u,c as m,d as f,ar as v,G as c,as as l,at as $,au as w,av as T,aw as b,ax as A,ay as g,J as x,az as F}from"./arcadeUtils.aaa899dd.js";import"./index.2f57b5df.js";import"./featureConversionUtils.da22f310.js";import"./number.b6640b0f.js";import"./OptimizedGeometry.02e7bd71.js";import"./OptimizedFeatureSet.2574e09f.js";function y(e){return e&&e.domain?e.domain.type==="coded-value"||e.domain.type==="codedValue"?f.convertObjectToArcadeDictionary({type:"codedValue",name:e.domain.name,dataType:v[e.field.type],codedValues:e.domain.codedValues.map(t=>({name:t.name,code:t.code}))}):f.convertObjectToArcadeDictionary({type:"range",name:e.domain.name,dataType:v[e.field.type],min:e.domain.min,max:e.domain.max}):null}function P(e){e.mode==="async"&&(e.functions.domain=function(t,o){return e.standardFunctionAsync(t,o,function(a,s,n){if(i(n,2,3),d(n[0]))return y(p(n[0],m(n[1]),n[2]===void 0?void 0:u(n[2])));if(c(n[0]))return n[0]._ensureLoaded().then(()=>y(l(m(n[1]),n[0],null,n[2]===void 0?void 0:u(n[2]))));throw new Error("Invalid Parameter")})},e.functions.subtypes=function(t,o){return e.standardFunctionAsync(t,o,function(a,s,n){if(i(n,1,1),d(n[0])){const r=$(n[0]);return r?f.convertObjectToArcadeDictionary(r):null}if(c(n[0]))return n[0]._ensureLoaded().then(()=>{const r=n[0].subtypes();return r?f.convertObjectToArcadeDictionary(r):null});throw new Error("Invalid Parameter")})},e.functions.domainname=function(t,o){return e.standardFunctionAsync(t,o,function(a,s,n){if(i(n,2,4),d(n[0]))return w(n[0],m(n[1]),n[2],n[3]===void 0?void 0:u(n[3]));if(c(n[0]))return n[0]._ensureLoaded().then(()=>{const r=l(m(n[1]),n[0],null,n[3]===void 0?void 0:u(n[3]));return T(r,n[2])});throw new Error("Invalid Parameter")})},e.signatures.push({name:"domainname",min:"2",max:"4"}),e.functions.domaincode=function(t,o){return e.standardFunctionAsync(t,o,function(a,s,n){if(i(n,2,4),d(n[0]))return b(n[0],m(n[1]),n[2],n[3]===void 0?void 0:u(n[3]));if(c(n[0]))return n[0]._ensureLoaded().then(()=>{const r=l(m(n[1]),n[0],null,n[3]===void 0?void 0:u(n[3]));return A(r,n[2])});throw new Error("Invalid Parameter")})},e.signatures.push({name:"domaincode",min:"2",max:"4"})),e.functions.text=function(t,o){return e.standardFunctionAsync(t,o,function(a,s,n){if(i(n,1,2),!c(n[0]))return g(n[0],n[1]);{const r=x(n[1],"");if(r==="")return n[0].castToText();if(r.toLowerCase()==="schema")return n[0].convertToText("schema",a.abortSignal);if(r.toLowerCase()==="featureset")return n[0].convertToText("featureset",a.abortSignal)}})},e.functions.gdbversion=function(t,o){return e.standardFunctionAsync(t,o,function(a,s,n){if(i(n,1,1),d(n[0]))return n[0].gdbVersion();if(c(n[0]))return n[0].load().then(r=>r.gdbVersion);throw new Error("Invalid Parameter")})},e.functions.schema=function(t,o){return e.standardFunctionAsync(t,o,function(a,s,n){if(i(n,1,1),c(n[0]))return n[0].load().then(()=>f.convertObjectToArcadeDictionary(n[0].schema()));if(d(n[0])){const r=F(n[0]);return r?f.convertObjectToArcadeDictionary(r):null}throw new Error("Invalid Parameter")})}}export{P as registerFunctions};
