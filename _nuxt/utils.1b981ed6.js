import{l as S}from"./ClassBreaksDefinition.95e31cb6.js";function v(e,l){return Number(e.toFixed(l))}function D(e){const{normalizationTotal:l}=e;return{classBreaks:I(e),normalizationTotal:l}}function I(e){const l=e.definition,{classificationMethod:t,breakCount:n,normalizationType:a,definedInterval:r}=l,u=[];let o=e.values;if(o.length===0)return[];o=o.sort((s,f)=>s-f);const d=o[0],p=o[o.length-1];if(t==="equal-interval")if(o.length>=n){const s=(p-d)/n;let f=d;for(let c=1;c<n;c++){const i=v(d+c*s,6);u.push({minValue:f,maxValue:i,label:b(f,i,a)}),f=i}u.push({minValue:f,maxValue:p,label:b(f,p,a)})}else o.forEach(s=>{u.push({minValue:s,maxValue:s,label:b(s,s,a)})});else if(t==="natural-breaks"){const s=N(o),f=e.valueFrequency||s.valueFrequency,c=k(s.uniqueValues,f,n);let i=d;for(let m=1;m<n;m++)if(s.uniqueValues.length>m){const h=v(s.uniqueValues[c[m]],6);u.push({minValue:i,maxValue:h,label:b(i,h,a)}),i=h}u.push({minValue:i,maxValue:p,label:b(i,p,a)})}else if(t==="quantile")if(o.length>=n&&d!==p){let s=d,f=Math.ceil(o.length/n),c=0;for(let i=1;i<n;i++){let m=f+c-1;m>o.length&&(m=o.length-1),m<0&&(m=0),u.push({minValue:s,maxValue:o[m],label:b(s,o[m],a)}),s=o[m],c+=f,f=Math.ceil((o.length-c)/(n-i))}u.push({minValue:s,maxValue:p,label:b(s,p,a)})}else{let s=-1;for(let f=0;f<o.length;f++){const c=o[f];c!==s&&(s=c,u.push({minValue:s,maxValue:c,label:b(s,c,a)}),s=c)}}else if(t==="standard-deviation"){const s=E(o),f=$(o,s);if(f===0)u.push({minValue:o[0],maxValue:o[0],label:b(o[0],o[0],a)});else{const c=C(d,p,n,s,f)*f;let i=0,m=d;for(let V=n;V>=1;V--){const x=v(s-(V-.5)*c,6);u.push({minValue:m,maxValue:x,label:b(m,x,a)}),m=x,i++}let h=v(s+.5*c,6);u.push({minValue:m,maxValue:h,label:b(m,h,a)}),m=h,i++;for(let V=1;V<=n;V++)h=i===2*n?p:v(s+(V+.5)*c,6),u.push({minValue:m,maxValue:h,label:b(m,h,a)}),m=h,i++}}else if(t==="defined-interval"){if(!r)return u;const s=o[0],f=o[o.length-1],c=Math.ceil((f-s)/r);let i=s;for(let m=1;m<c;m++){const h=v(s+m*r,6);u.push({minValue:i,maxValue:h,label:b(i,h,a)}),i=h}u.push({minValue:i,maxValue:f,label:b(i,f,a)})}return u}function b(e,l,t){let n=null;return n=e===l?t&&t==="percent-of-total"?e+"%":e.toString():t&&t==="percent-of-total"?e+"% - "+l+"%":e+" - "+l,n}function N(e){const l=[],t=[];let n=Number.MIN_VALUE,a=1,r=-1;for(let u=0;u<e.length;u++){const o=e[u];o===n?(a++,t[r]=a):o!==null&&(l.push(o),n=o,a=1,t.push(a),r++)}return{uniqueValues:l,valueFrequency:t}}function k(e,l,t){const n=e.length,a=[];t>n&&(t=n);for(let u=0;u<t;u++)a.push(Math.round(u*n/t-1));a.push(n-1);let r=T(a,e,l,t);return q(r.mean,r.sdcm,a,e,l,t)&&(r=T(a,e,l,t)),a}function T(e,l,t,n){let a=[],r=[],u=[],o=0;const d=[],p=[];for(let i=0;i<n;i++){const m=g(i,e,l,t);d.push(m.sbMean),p.push(m.sbSdcm),o+=p[i]}let s,f=o,c=!0;for(;c||o<f;){c=!1,a=[];for(let i=0;i<n;i++)a.push(e[i]);for(let i=0;i<n;i++)for(let m=e[i]+1;m<=e[i+1];m++)if(s=l[m],i>0&&m!==e[i+1]&&Math.abs(s-d[i])>Math.abs(s-d[i-1]))e[i]=m;else if(i<n-1&&e[i]!==m-1&&Math.abs(s-d[i])>Math.abs(s-d[i+1])){e[i+1]=m-1;break}f=o,o=0,r=[],u=[];for(let i=0;i<n;i++){r.push(d[i]),u.push(p[i]);const m=g(i,e,l,t);d[i]=m.sbMean,p[i]=m.sbSdcm,o+=p[i]}}if(o>f){for(let i=0;i<n;i++)e[i]=a[i],d[i]=r[i],p[i]=u[i];o=f}return{mean:d,sdcm:p}}function q(e,l,t,n,a,r){let u=0,o=0,d=0,p=0,s=!0;for(let f=0;f<2&&s;f++){f===0&&(s=!1);for(let c=0;c<r-1;c++)for(;t[c+1]+1!==t[c+2];){t[c+1]=t[c+1]+1;const i=g(c,t,n,a);d=i.sbMean,u=i.sbSdcm;const m=g(c+1,t,n,a);if(p=m.sbMean,o=m.sbSdcm,!(u+o<l[c]+l[c+1])){t[c+1]=t[c+1]-1;break}l[c]=u,l[c+1]=o,e[c]=d,e[c+1]=p,s=!0}for(let c=r-1;c>0;c--)for(;t[c]!==t[c-1]+1;){t[c]=t[c]-1;const i=g(c-1,t,n,a);d=i.sbMean,u=i.sbSdcm;const m=g(c,t,n,a);if(p=m.sbMean,o=m.sbSdcm,!(u+o<l[c-1]+l[c])){t[c]=t[c]+1;break}l[c-1]=u,l[c]=o,e[c-1]=d,e[c]=p,s=!0}}return s}function C(e,l,t,n,a){let r=Math.max(n-e,l-n)/a/t;return r=r>=1?1:r>=.5?.5:.25,r}function E(e){let l=0;for(let t=0;t<e.length;t++)l+=e[t];return l/=e.length,l}function $(e,l){let t=0;for(let n=0;n<e.length;n++){const a=e[n];t+=(a-l)*(a-l)}return t/=e.length,Math.sqrt(t)}function g(e,l,t,n){let a=0,r=0;for(let d=l[e]+1;d<=l[e+1];d++){const p=n[d];a+=t[d]*p,r+=p}r<=0&&console.log("Exception in Natural Breaks calculation");const u=a/r;let o=0;for(let d=l[e]+1;d<=l[e+1];d++)o+=n[d]*(t[d]-u)**2;return{sbMean:u,sbSdcm:o}}const w="equal-interval",B=1,U=5,G=10,P=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,y=new Set(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]),O=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function A(e){const l=e.normalizationField!=null||e.normalizationType!=null,t=e.minValue!=null||e.maxValue!=null,n=!!e.sqlExpression&&e.supportsSQLExpression;return!l&&!t&&!n}function X(e){const l=e.returnDistinct?[...new Set(e.values)]:e.values,t=l.filter(a=>a!=null).length,n={count:t};return e.supportsNullCount&&(n.nullcount=l.length-t),e.percentileParams&&(n.median=z(l,e.percentileParams)),n}function L(e){const{values:l,useSampleStdDev:t,supportsNullCount:n}=e;let a=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY,u=null,o=null,d=null,p=null,s=0;const f=e.minValue==null?-1/0:e.minValue,c=e.maxValue==null?1/0:e.maxValue;for(const m of l)Number.isFinite(m)?m>=f&&m<=c&&(u+=m,a=Math.min(a,m),r=Math.max(r,m),s++):typeof m=="string"&&s++;if(s&&u!=null){o=u/s;let m=0;for(const h of l)Number.isFinite(h)&&h>=f&&h<=c&&(m+=(h-o)**2);p=t?s>1?m/(s-1):0:s>0?m/s:0,d=Math.sqrt(p)}else a=null,r=null;const i={avg:o,count:s,max:r,min:a,stddev:d,sum:u,variance:p};return n&&(i.nullcount=l.length-s),e.percentileParams&&(i.median=z(l,e.percentileParams)),i}function z(e,l){const{fieldType:t,value:n,orderBy:a,isDiscrete:r}=l,u=_(t,a==="desc");if((e=[...e].filter(i=>i!=null).sort((i,m)=>u(i,m))).length===0)return null;if(n<=0)return e[0];if(n>=1)return e[e.length-1];const o=(e.length-1)*n,d=Math.floor(o),p=d+1,s=o%1,f=e[d],c=e[p];return p>=e.length||r||typeof f=="string"||typeof c=="string"?f:f*(1-s)+c*s}function _(e,l){const t=l?1:-1,n=Y(l),a=F(l);if(!(e&&["esriFieldTypeDate","esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...y].includes(e)))return(r,u)=>typeof r=="number"&&typeof u=="number"?n(r,u):typeof r=="string"&&typeof u=="string"?a(r,u):t;if(e==="esriFieldTypeDate")return(r,u)=>{const o=new Date(r).getTime(),d=new Date(u).getTime();return isNaN(o)||isNaN(d)?t:n(o,d)};if(y.has(e))return(r,u)=>n(r,u);if(e==="esriFieldTypeString")return(r,u)=>a(r,u);if(e==="esriFieldTypeGUID"||e==="esriFieldTypeGlobalID"){const r=F(l);return(u,o)=>r(M(u),M(o))}return l?(r,u)=>1:(r,u)=>-1}function F(e){return e?(l,t)=>{var n,a;return(l=(n=l)==null?void 0:n.toUpperCase())>(t=(a=t)==null?void 0:a.toUpperCase())?-1:l<t?1:0}:(l,t)=>{var n,a;return(l=(n=l)==null?void 0:n.toUpperCase())<(t=(a=t)==null?void 0:a.toUpperCase())?-1:l>t?1:0}}function Y(e){return e?(l,t)=>t-l:(l,t)=>l-t}function M(e){return e.substr(24,12)+e.substr(19,4)+e.substr(16,2)+e.substr(14,2)+e.substr(11,2)+e.substr(9,2)+e.substr(6,2)+e.substr(4,2)+e.substr(2,2)+e.substr(0,2)}function Z(e,l){let t;for(t in e)O.indexOf(t)>-1&&(Number.isFinite(e[t])||(e[t]=null));return l&&["avg","stddev","variance"].forEach(n=>{e[n]!=null&&(e[n]=Math.ceil(e[n]))}),e}function ee(e){const l={};for(let t of e)(t==null||typeof t=="string"&&t.trim()==="")&&(t=null),l[t]==null?l[t]={count:1,data:t}:l[t].count++;return{count:l}}function te(e,l,t){const n=e.count,a=[];t&&l&&l.type==="coded-value"&&l.codedValues.forEach(r=>{const u=r.code;n.hasOwnProperty(u)||(n[u]={data:u,count:0})});for(const r in n){const u=n[r];a.push({value:u.data,count:u.count,label:u.label})}return{uniqueValueInfos:a}}function le(e,l,t,n){let a=null;switch(l){case"log":e!==0&&(a=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(n)&&n!==0&&(a=e/n*100);break;case"field":Number.isFinite(t)&&t!==0&&(a=e/t);break;case"natural-log":e>0&&(a=Math.log(e));break;case"square-root":e>0&&(a=e**.5)}return a}function Q(e,l){const t=H({field:l.field,normalizationType:l.normalizationType,normalizationField:l.normalizationField,classificationMethod:l.classificationMethod,standardDeviationInterval:l.standardDeviationInterval,breakCount:l.numClasses||U});return e=j(e,l.minValue,l.maxValue),D({definition:t,values:e,normalizationTotal:l.normalizationTotal})}function j(e,l,t){return l=l??-1/0,t=t??1/0,e.filter(n=>Number.isFinite(n)&&n>=l&&n<=t)}function H(e){const l=e.field,t=e.classificationMethod||w,n=e.normalizationType,a=e.normalizationField,r=new S;return r.classificationField=l,r.breakCount=e.breakCount,r.classificationMethod=t,r.standardDeviationInterval=t==="standard-deviation"?e.standardDeviationInterval||B:void 0,r.normalizationType=n,r.normalizationField=n==="field"?a:void 0,r}function ne(e,l){let t=e.classBreaks;const n=t.length,a=t[0].minValue,r=t[n-1].maxValue,u=l==="standard-deviation",o=P;return t=t.map(d=>{const p=d.label,s={minValue:d.minValue,maxValue:d.maxValue,label:p};if(u&&p){const f=p.match(o).map(c=>+c.trim());f.length===2?(s.minStdDev=f[0],s.maxStdDev=f[1],f[0]<0&&f[1]>0&&(s.hasAvg=!0)):f.length===1&&(p.includes("<")?(s.minStdDev=null,s.maxStdDev=f[0]):p.includes(">")&&(s.minStdDev=f[0],s.maxStdDev=null))}return s}),{minValue:a,maxValue:r,classBreakInfos:t,normalizationTotal:e.normalizationTotal}}function ae(e,l){const{min:t,max:n,intervals:a}=J(e,l),r=a.map((u,o)=>({minValue:a[o][0],maxValue:a[o][1],count:0}));for(const u of e)if(u!=null&&u>=t&&u<=n){const o=K(a,u);o>-1&&r[o].count++}return{bins:r,minValue:t,maxValue:n,normalizationTotal:l.normalizationTotal}}function J(e,l){const{field:t,classificationMethod:n,standardDeviationInterval:a,normalizationType:r,normalizationField:u,normalizationTotal:o,minValue:d,maxValue:p}=l,s=l.numBins||G;let f=null,c=null,i=null;if((!n||n==="equal-interval")&&!r){if(d!=null&&p!=null)f=d,c=p;else{const m=L({values:e,minValue:d,maxValue:p,useSampleStdDev:!r,supportsNullCount:A({normalizationType:r,normalizationField:u,minValue:d,maxValue:p})});f=m.min,c=m.max}i=R(f,c,s)}else{const{classBreaks:m}=Q(e,{field:t,normalizationType:r,normalizationField:u,normalizationTotal:o,classificationMethod:n,standardDeviationInterval:a,minValue:d,maxValue:p,numClasses:s});f=m[0].minValue,c=m[m.length-1].maxValue,i=m.map(h=>[h.minValue,h.maxValue])}return{min:f,max:c,intervals:i}}function K(e,l){let t=-1;for(let n=e.length-1;n>=0;n--)if(l>=e[n][0]){t=n;break}return t}function R(e,l,t){const n=(l-e)/t,a=[];let r,u=e;for(let o=1;o<=t;o++)r=u+n,r=Number(r.toFixed(16)),a.push([u,o===t?l:r]),u=r;return a}export{ne as D,le as T,Z as V,L as c,z as d,_ as f,ee as g,te as h,X as m,A as s,Q as y,ae as z};