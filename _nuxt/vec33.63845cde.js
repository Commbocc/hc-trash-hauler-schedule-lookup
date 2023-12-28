import{a4 as E,e2 as L}from"./entry.a426b012.js";function _(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function D(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function G(e,n){return new Float64Array(e,n,16)}const H=_();function J(e,n){return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[4],e[4]=n[5],e[5]=n[6],e[6]=n[8],e[7]=n[9],e[8]=n[10],e}function K(e,n){if(e===n){const t=n[1],d=n[2],u=n[5];e[1]=n[3],e[2]=n[6],e[3]=t,e[5]=n[7],e[6]=d,e[7]=u}else e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8];return e}function N(e,n){const t=n[0],d=n[1],u=n[2],s=n[3],c=n[4],i=n[5],o=n[6],f=n[7],r=n[8],p=n[9],m=n[10],l=n[11],y=n[12],b=n[13],v=n[14],B=n[15],$=t*i-d*c,g=t*o-u*c,h=t*f-s*c,x=d*o-u*i,M=d*f-s*i,I=u*f-s*o,j=r*b-p*y,q=r*v-m*y,w=r*B-l*y,k=p*v-m*b,A=p*B-l*b,F=m*B-l*v;let S=$*F-g*A+h*k+x*w-M*q+I*j;return S?(S=1/S,e[0]=(i*F-o*A+f*k)*S,e[1]=(o*w-c*F-f*q)*S,e[2]=(c*A-i*w+f*j)*S,e[3]=(u*A-d*F-s*k)*S,e[4]=(t*F-u*w+s*q)*S,e[5]=(d*w-t*A-s*j)*S,e[6]=(b*I-v*M+B*x)*S,e[7]=(v*h-y*I-B*g)*S,e[8]=(y*M-b*h+B*$)*S,e):null}function O(e){const n=L,t=e[0],d=e[1],u=e[2],s=e[3],c=e[4],i=e[5],o=e[6],f=e[7],r=e[8];return Math.abs(1-(t*t+s*s+o*o))<=n&&Math.abs(1-(d*d+c*c+f*f))<=n&&Math.abs(1-(u*u+i*i+r*r))<=n}const z=E.getLogger("esri.views.3d.support.buffer.math");function P(e,n,t){if(e.count!==n.count)return void z.error("source and destination buffers need to have the same number of elements");const d=e.count,u=t[0],s=t[1],c=t[2],i=t[4],o=t[5],f=t[6],r=t[8],p=t[9],m=t[10],l=t[12],y=t[13],b=t[14],v=e.typedBuffer,B=e.typedBufferStride,$=n.typedBuffer,g=n.typedBufferStride;for(let h=0;h<d;h++){const x=h*B,M=h*g,I=$[M],j=$[M+1],q=$[M+2];v[x]=u*I+i*j+r*q+l,v[x+1]=s*I+o*j+p*q+y,v[x+2]=c*I+f*j+m*q+b}}function Q(e,n,t){if(e.count!==n.count)return void z.error("source and destination buffers need to have the same number of elements");const d=e.count,u=t[0],s=t[1],c=t[2],i=t[3],o=t[4],f=t[5],r=t[6],p=t[7],m=t[8],l=e.typedBuffer,y=e.typedBufferStride,b=n.typedBuffer,v=n.typedBufferStride;for(let B=0;B<d;B++){const $=B*y,g=B*v,h=b[g],x=b[g+1],M=b[g+2];l[$]=u*h+i*x+r*M,l[$+1]=s*h+o*x+p*M,l[$+2]=c*h+f*x+m*M}}function R(e,n,t){const d=Math.min(e.count,n.count),u=e.typedBuffer,s=e.typedBufferStride,c=n.typedBuffer,i=n.typedBufferStride;for(let o=0;o<d;o++){const f=o*s,r=o*i;u[f]=t*c[r],u[f+1]=t*c[r+1],u[f+2]=t*c[r+2]}}function T(e,n){const t=Math.min(e.count,n.count),d=e.typedBuffer,u=e.typedBufferStride,s=n.typedBuffer,c=n.typedBufferStride;for(let i=0;i<t;i++){const o=i*u,f=i*c,r=s[f],p=s[f+1],m=s[f+2],l=Math.sqrt(r*r+p*p+m*m);if(l>0){const y=1/l;d[o]=y*r,d[o+1]=y*p,d[o+2]=y*m}}}function U(e,n,t){const d=Math.min(e.count,n.count),u=e.typedBuffer,s=e.typedBufferStride,c=n.typedBuffer,i=n.typedBufferStride;for(let o=0;o<d;o++){const f=o*s,r=o*i;u[f]=c[r]>>t,u[f+1]=c[r+1]>>t,u[f+2]=c[r+2]>>t}}function V(e,n,t){const d=e.typedBuffer,u=e.typedBufferStride,s=n.typedBuffer,c=n.typedBufferStride,i=t?t.count:n.count;let o=(t&&t.dstIndex?t.dstIndex:0)*u,f=(t&&t.srcIndex?t.srcIndex:0)*c;for(let r=0;r<i;++r)d[o]=s[f],d[o+1]=s[f+1],d[o+2]=s[f+2],o+=u,f+=c}function W(e,n,t,d,u){var s,c;const i=e.typedBuffer,o=e.typedBufferStride,f=(s=u==null?void 0:u.count)!=null?s:e.count;let r=((c=u==null?void 0:u.dstIndex)!=null?c:0)*o;for(let p=0;p<f;++p)i[r]=n,i[r+1]=t,i[r+2]=d,r+=o}export{O as B,P as a,H as b,V as c,J as d,_ as e,Q as f,T as g,z as h,G as i,N as j,D as k,U as n,K as o,R as r,W as t};