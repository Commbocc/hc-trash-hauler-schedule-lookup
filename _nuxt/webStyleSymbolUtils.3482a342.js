import{b3 as D,o as d,ab as P,O as u,b4 as p,b5 as x,b6 as g,b7 as N,b8 as S,b9 as w,ba as v,bb as f,bc as h,bd as B}from"./entry.a426b012.js";import{c as E,a as $}from"./devEnvironmentUtils.592c8a7b.js";function V(e,t,a,l){return e.name?e.styleName&&e.styleName==="Esri2DPointSymbolsStyle"?M(e,t,l):D(e,t,l).then(o=>F(o,e.name,t,a,l)):Promise.reject(new d("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function F(e,t,a,l,o){const b=e.data,y={portal:a&&a.portal||P.getDefault(),url:u(e.baseUrl),origin:"portal-item"},s=b.items.find(r=>r.name===t);if(!s){const r=`The symbol name '${t}' could not be found`;return Promise.reject(new d("symbolstyleutils:symbol-name-not-found",r,{symbolName:t}))}let m=p(x(s,l),y),i=s.thumbnail&&s.thumbnail.href;const c=s.thumbnail&&s.thumbnail.imageData;E()&&(m=$(m),i=$(i));const O={portal:a.portal,url:u(g(m)),origin:"portal-item"};return N(m,o).then(r=>{const j=l==="cimRef"?S(r.data):r.data,n=w(j,O);if(n&&v(n)){if(i){const U=p(i,y);n.thumbnail=new f({url:U})}else c&&(n.thumbnail=new f({url:`data:image/png;base64,${c}`}));e.styleUrl?n.styleOrigin=new h({portal:a.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(n.styleOrigin=new h({portal:a.portal,styleName:e.styleName,name:t}))}return n})}function M(e,t,a){const l=B.replace(/\{SymbolName\}/gi,e.name);return N(l,a).then(o=>{const b=S(o.data);return w(b,{portal:t.portal,url:u(g(l)),origin:"portal-item"})})}export{F as fetchSymbolFromStyle,V as resolveWebStyleSymbol};