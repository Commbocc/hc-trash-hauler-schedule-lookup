import{e2 as M,e3 as s}from"./entry.a426b012.js";function l(){return[1,0,0,0,1,0,0,0,1]}function m(n,o){return new Float64Array(n,o,9)}function $(){return[0,0,0,1]}function p(n){return[n[0],n[1],n[2],n[3]]}function y(n,o){return new Float64Array(n,o,4)}const A=$();function F(n,o,c){c*=.5;const r=Math.sin(c);return n[0]=r*o[0],n[1]=r*o[1],n[2]=r*o[2],n[3]=Math.cos(c),n}function I(n,o){const c=2*Math.acos(o[3]),r=Math.sin(c/2);return r>M?(n[0]=o[0]/r,n[1]=o[1]/r,n[2]=o[2]/r):(n[0]=1,n[1]=0,n[2]=0),c}function P(n,o,c){const r=o[0],f=o[1],t=o[2],u=o[3],a=c[0],i=c[1],e=c[2],h=c[3];return n[0]=r*h+u*a+f*e-t*i,n[1]=f*h+u*i+t*a-r*e,n[2]=t*h+u*e+r*i-f*a,n[3]=u*h-r*a-f*i-t*e,n}function b(n,o){return n[0]=-o[0],n[1]=-o[1],n[2]=-o[2],n[3]=o[3],n}function v(n,o,c,r){const f=.5*Math.PI/180;o*=f,c*=f,r*=f;const t=Math.sin(o),u=Math.cos(o),a=Math.sin(c),i=Math.cos(c),e=Math.sin(r),h=Math.cos(r);return n[0]=t*i*h-u*a*e,n[1]=u*a*h+t*i*e,n[2]=u*i*e-t*a*h,n[3]=u*i*h+t*a*e,n}const x=s;export{v as C,F as I,x as N,I as P,l as a,A as b,y as c,$ as e,p as n,m as t,P as v,b as w};