import{t as l}from"./index.2f57b5df.js";class n{constructor(t=null,s={},e,i){this.geometry=t,this.attributes=s,this.centroid=e,this.objectId=i,this.displayId=0,this.geohashX=0,this.geohashY=0}weakClone(){const t=new n(this.geometry,this.attributes,this.centroid,this.objectId);return t.displayId=this.displayId,t.geohashX=this.geohashX,t.geohashY=this.geohashY,t}}function c(h){return!(l(h.geometry)||!h.geometry.coords||!h.geometry.coords.length)}class a extends n{}class o{constructor(t=[],s=[],e=!1){this.lengths=t!=null?t:[],this.coords=s!=null?s:[],this.hasIndeterminateRingOrder=e}get isPoint(){return this.lengths.length===0}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce((t,s)=>t+s)}forEachVertex(t){let s=0;this.lengths.length||t(this.coords[0],this.coords[1]);for(let e=0;e<this.lengths.length;e++){const i=this.lengths[e];for(let r=0;r<i;r++)t(this.coords[2*(r+s)],this.coords[2*(r+s)+1]);s+=i}}clone(t){return t?(t.set(this.coords),new o(this.lengths.slice(),t,this.hasIndeterminateRingOrder)):new o(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}export{c as e,a as o,n as s,o as t};
