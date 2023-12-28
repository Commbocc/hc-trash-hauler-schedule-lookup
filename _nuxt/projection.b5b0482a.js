import{cc as d,dq as re,dr as V,t as T,e as et,o as tt,bl as Le,cx as me,j as nt,M as rt,v as ot,m as _t,b as st,ds as it,bt as Pe,_ as Ce,a9 as at,H as ut,dt as Pt,du as Et,bm as lt,dv as ct,dw as ft,dx as St,dy as At,dz as Ct,dA as pt,dB as Rt,cn as Ot,bu as Nt,ag as Mt,r as We,dC as Tt,l as dt,dD as gt,dE as Lt,dF as ht}from"./entry.a426b012.js";let fe,_=null;function je(){return!!_}function Gt(){return!!dt("esri-wasm")}function Xe(){return fe||(fe=Ce(()=>import("./pe-wasm.c89d5c8a.js"),[],import.meta.url).then(e=>e.p).then(({default:e})=>e({locateFile:n=>Mt(`esri/geometry/support/${n}`)})).then(e=>{Ke(e)}),fe)}var pe,O,Re;(function(e){function n(i,u,s){_.ensureCache.prepare();const l=k(s),E=s===l,P=_.ensureFloat64(l),c=_._pe_geog_to_proj(_.getPointer(i),u,P);return c&&U(s,u,P,E),c}function t(i,u,s,l){switch(l){case O.PE_TRANSFORM_P_TO_G:return o(i,u,s);case O.PE_TRANSFORM_G_TO_P:return n(i,u,s)}return 0}function o(i,u,s){return a(i,u,s,0)}function a(i,u,s,l){_.ensureCache.prepare();const E=k(s),P=s===E,c=_.ensureFloat64(E),S=_._pe_proj_to_geog_center(_.getPointer(i),u,c,l);return S&&U(s,u,c,P),S}e.geogToProj=n,e.projGeog=t,e.projToGeog=o,e.projToGeogCenter=a})(pe||(pe={})),function(e){function n(){e.PE_BUFFER_MAX=_.PeDefs.prototype.PE_BUFFER_MAX,e.PE_NAME_MAX=_.PeDefs.prototype.PE_NAME_MAX,e.PE_MGRS_MAX=_.PeDefs.prototype.PE_MGRS_MAX,e.PE_USNG_MAX=_.PeDefs.prototype.PE_USNG_MAX,e.PE_DD_MAX=_.PeDefs.prototype.PE_DD_MAX,e.PE_DDM_MAX=_.PeDefs.prototype.PE_DDM_MAX,e.PE_DMS_MAX=_.PeDefs.prototype.PE_DMS_MAX,e.PE_UTM_MAX=_.PeDefs.prototype.PE_UTM_MAX,e.PE_PARM_MAX=_.PeDefs.prototype.PE_PARM_MAX,e.PE_TYPE_NONE=_.PeDefs.prototype.PE_TYPE_NONE,e.PE_TYPE_GEOGCS=_.PeDefs.prototype.PE_TYPE_GEOGCS,e.PE_TYPE_PROJCS=_.PeDefs.prototype.PE_TYPE_PROJCS,e.PE_TYPE_GEOGTRAN=_.PeDefs.prototype.PE_TYPE_GEOGTRAN,e.PE_TYPE_COORDSYS=_.PeDefs.prototype.PE_TYPE_COORDSYS,e.PE_TYPE_UNIT=_.PeDefs.prototype.PE_TYPE_UNIT,e.PE_TYPE_LINUNIT=_.PeDefs.prototype.PE_TYPE_LINUNIT,e.PE_STR_OPTS_NONE=_.PeDefs.prototype.PE_STR_OPTS_NONE,e.PE_STR_AUTH_NONE=_.PeDefs.prototype.PE_STR_AUTH_NONE,e.PE_STR_AUTH_TOP=_.PeDefs.prototype.PE_STR_AUTH_TOP,e.PE_STR_NAME_CANON=_.PeDefs.prototype.PE_STR_NAME_CANON,e.PE_PARM_X0=_.PeDefs.prototype.PE_PARM_X0,e.PE_PARM_ND=_.PeDefs.prototype.PE_PARM_ND,e.PE_TRANSFORM_1_TO_2=_.PeDefs.prototype.PE_TRANSFORM_1_TO_2,e.PE_TRANSFORM_2_TO_1=_.PeDefs.prototype.PE_TRANSFORM_2_TO_1,e.PE_TRANSFORM_P_TO_G=_.PeDefs.prototype.PE_TRANSFORM_P_TO_G,e.PE_TRANSFORM_G_TO_P=_.PeDefs.prototype.PE_TRANSFORM_G_TO_P,e.PE_HORIZON_RECT=_.PeDefs.prototype.PE_HORIZON_RECT,e.PE_HORIZON_POLY=_.PeDefs.prototype.PE_HORIZON_POLY,e.PE_HORIZON_LINE=_.PeDefs.prototype.PE_HORIZON_LINE,e.PE_HORIZON_DELTA=_.PeDefs.prototype.PE_HORIZON_DELTA}e.init=n}(O||(O={})),function(e){const n={},t={},o=f=>{if(f){const A=f.getType();switch(A){case O.PE_TYPE_GEOGCS:f=_.castObject(f,_.PeGeogcs);break;case O.PE_TYPE_PROJCS:f=_.castObject(f,_.PeProjcs);break;case O.PE_TYPE_GEOGTRAN:f=_.castObject(f,_.PeGeogtran);break;default:A&O.PE_TYPE_UNIT&&(f=_.castObject(f,_.PeUnit))}}return f};function a(){_.PeFactory.prototype.initialize(null)}function i(f){return u(O.PE_TYPE_COORDSYS,f)}function u(f,A){let C=null,p=n[f];if(p||(p={},n[f]=p),p.hasOwnProperty(String(A)))C=p[A];else{const N=_.PeFactory.prototype.factoryByType(f,A);_.compare(N,_.NULL)||(C=N,p[A]=C)}return C=o(C),C}function s(f,A){let C=null,p=t[f];if(p||(p={},t[f]=p),p.hasOwnProperty(A))C=p[A];else{const N=_.PeFactory.prototype.fromString(f,A);_.compare(N,_.NULL)||(C=N,p[A]=C)}return C=o(C),C}function l(f){return u(O.PE_TYPE_GEOGCS,f)}function E(f){return u(O.PE_TYPE_GEOGTRAN,f)}function P(f){return _.PeFactory.prototype.getCode(f)}function c(f){return u(O.PE_TYPE_PROJCS,f)}function S(f){return u(O.PE_TYPE_UNIT,f)}e.initialize=a,e.coordsys=i,e.factoryByType=u,e.fromString=s,e.geogcs=l,e.geogtran=E,e.getCode=P,e.projcs=c,e.unit=S}(Re||(Re={}));let be=null;var oe,Oe,Ne,Me,_e,Te,se,ie,de;function Ke(e){function n(i,u,s){i[u]=s(i[u])}_=e,O.init(),oe.init(),_e.init(),se.init(),ie.init(),be=class extends _.PeGCSExtent{destroy(){_.destroy(this)}};const t=[_.PeDatum,_.PeGeogcs,_.PeGeogtran,_.PeObject,_.PeParameter,_.PePrimem,_.PeProjcs,_.PeSpheroid,_.PeUnit];for(const i of t)n(i.prototype,"getName",u=>function(){return u.call(this,new Array(O.PE_NAME_MAX))});for(const i of[_.PeGeogtran,_.PeProjcs])n(i.prototype,"getParameters",u=>function(){const s=new Array(O.PE_PARM_MAX);let l=u.call(this);for(let E=0;E<s.length;E++){const P=_.getValue(l,"*");s[E]=P?_.wrapPointer(P,_.PeParameter):null,l+=Int32Array.BYTES_PER_ELEMENT}return s});n(_.PeHorizon.prototype,"getCoord",i=>function(){const u=this.getSize();if(!u)return null;const s=[];return U(s,u,i.call(this)),s}),n(_.PeGTlistExtendedEntry.prototype,"getEntries",i=>{const u=_._pe_getPeGTlistExtendedGTsSize();return function(){let s=null;const l=i.call(this);if(!_.compare(l,_.NULL)){s=[l];const E=this.getSteps();if(E>1){const P=_.getPointer(l);for(let c=1;c<E;c++)s.push(_.wrapPointer(P+u*c,_.PeGTlistExtendedGTs))}}return s}});const o=_._pe_getPeHorizonSize(),a=i=>function(){let u=this._cache;if(u||(u=new Map,this._cache=u),u.has(i))return u.get(i);let s=null;const l=i.call(this);if(!_.compare(l,_.NULL)){s=[l];const E=l.getNump();if(E>1){const P=_.getPointer(l);for(let c=1;c<E;c++)s.push(_.wrapPointer(P+o*c,_.PeHorizon))}}return u.set(i,s),s};n(_.PeProjcs.prototype,"horizonGcsGenerate",a),n(_.PeProjcs.prototype,"horizonPcsGenerate",a),_.PeObject.prototype.toString=function(i=O.PE_STR_OPTS_NONE){_.ensureCache.prepare();const u=_.getPointer(this),s=_.ensureInt8(new Array(O.PE_BUFFER_MAX));return _.UTF8ToString(_._pe_object_to_string_ext(u,i,s))}}function I(e){if(!e)return;const n=_.getClass(e);if(!n)return;const t=_.getCache(n);if(!t)return;const o=_.getPointer(e);o&&delete t[o]}function ee(e,n){const t=[],o=new Array(n);for(let a=0;a<e;a++)t.push(_.ensureInt8(o));return t}function k(e){let n;return Array.isArray(e[0])?(n=[],e.forEach(t=>{n.push(t[0],t[1])})):n=e,n}function U(e,n,t,o=!1){if(o)for(let a=0;a<2*n;a++)e[a]=_.getValue(t+a*Float64Array.BYTES_PER_ELEMENT,"double");else{const a=e.length===0;for(let i=0;i<n;i++)a&&(e[i]=new Array(2)),e[i][0]=_.getValue(t,"double"),e[i][1]=_.getValue(t+Float64Array.BYTES_PER_ELEMENT,"double"),t+=2*Float64Array.BYTES_PER_ELEMENT}}(function(e){let n;function t(){e.PE_GTLIST_OPTS_COMMON=_.PeGTlistExtended.prototype.PE_GTLIST_OPTS_COMMON,n=_._pe_getPeGTlistExtendedEntrySize()}function o(a,i,u,s,l,E){let P=null;const c=new _.PeInteger(E);try{const S=_.PeGTlistExtended.prototype.getGTlist(a,i,u,s,l,c);if((E=c.val)&&(P=[S],E>1)){const f=_.getPointer(S);for(let A=1;A<E;A++)P.push(_.wrapPointer(f+n*A,_.PeGTlistExtendedEntry))}}finally{_.destroy(c)}return P}e.init=t,e.getGTlist=o})(oe||(oe={})),function(e){function n(t){if(t&&t.length){for(const o of t)I(o),o.getEntries().forEach(a=>{I(a);const i=a.getGeogtran();I(i),i.getParameters().forEach(I),[i.getGeogcs1(),i.getGeogcs2()].forEach(u=>{I(u);const s=u.getDatum();I(s),I(s.getSpheroid()),I(u.getPrimem()),I(u.getUnit())})});_.PeGTlistExtendedEntry.prototype.Delete(t[0])}}e.destroy=n}(Oe||(Oe={})),function(e){function n(t,o,a,i,u){_.ensureCache.prepare();const s=k(a),l=a===s,E=_.ensureFloat64(s);let P=0;i&&(P=_.ensureFloat64(i));const c=_._pe_geog_to_geog(_.getPointer(t),o,E,P,u);return c&&U(a,o,E,l),c}e.geogToGeog=n}(Ne||(Ne={})),function(e){const n=(E,P,c,S,f,A)=>{let C,p;switch(_.ensureCache.prepare(),E){case"dd":C=_._pe_geog_to_dd,p=O.PE_DD_MAX;break;case"ddm":C=_._pe_geog_to_ddm,p=O.PE_DDM_MAX;break;case"dms":C=_._pe_geog_to_dms,p=O.PE_DMS_MAX}let N=0;P&&(N=_.getPointer(P));const y=k(S),F=_.ensureFloat64(y),m=ee(c,p),G=C(N,c,F,f,_.ensureInt32(m));if(G)for(let g=0;g<c;g++)A[g]=_.UTF8ToString(m[g]);return G},t=(E,P,c,S,f)=>{let A;switch(_.ensureCache.prepare(),E){case"dd":A=_._pe_dd_to_geog;break;case"ddm":A=_._pe_ddm_to_geog;break;case"dms":A=_._pe_dms_to_geog}let C=0;P&&(C=_.getPointer(P));const p=S.map(m=>_.ensureString(m)),N=_.ensureInt32(p),y=_.ensureFloat64(new Array(2*c)),F=A(C,c,N,y);return F&&U(f,c,y),F};function o(E,P,c,S,f){return n("dms",E,P,c,S,f)}function a(E,P,c,S){return t("dms",E,P,c,S)}function i(E,P,c,S,f){return n("ddm",E,P,c,S,f)}function u(E,P,c,S){return t("ddm",E,P,c,S)}function s(E,P,c,S,f){return n("dd",E,P,c,S,f)}function l(E,P,c,S){return t("dd",E,P,c,S)}e.geogToDms=o,e.dmsToGeog=a,e.geogToDdm=i,e.ddmToGeog=u,e.geogToDd=s,e.ddToGeog=l}(Me||(Me={})),function(e){function n(){e.PE_MGRS_STYLE_NEW=_.PeNotationMgrs.prototype.PE_MGRS_STYLE_NEW,e.PE_MGRS_STYLE_OLD=_.PeNotationMgrs.prototype.PE_MGRS_STYLE_OLD,e.PE_MGRS_STYLE_AUTO=_.PeNotationMgrs.prototype.PE_MGRS_STYLE_AUTO,e.PE_MGRS_180_ZONE_1_PLUS=_.PeNotationMgrs.prototype.PE_MGRS_180_ZONE_1_PLUS,e.PE_MGRS_ADD_SPACES=_.PeNotationMgrs.prototype.PE_MGRS_ADD_SPACES}function t(a,i,u,s,l,E,P){_.ensureCache.prepare();let c=0;a&&(c=_.getPointer(a));const S=k(u),f=_.ensureFloat64(S),A=ee(i,O.PE_MGRS_MAX),C=_.ensureInt32(A),p=_._pe_geog_to_mgrs_extended(c,i,f,s,l,E,C);if(p)for(let N=0;N<i;N++)P[N]=_.UTF8ToString(A[N]);return p}function o(a,i,u,s,l){_.ensureCache.prepare();let E=0;a&&(E=_.getPointer(a));const P=u.map(A=>_.ensureString(A)),c=_.ensureInt32(P),S=_.ensureFloat64(new Array(2*i)),f=_._pe_mgrs_to_geog_extended(E,i,c,s,S);return f&&U(l,i,S),f}e.init=n,e.geogToMgrsExtended=t,e.mgrsToGeogExtended=o}(_e||(_e={})),function(e){function n(o,a,i,u,s,l,E){_.ensureCache.prepare();let P=0;o&&(P=_.getPointer(o));const c=k(i),S=_.ensureFloat64(c),f=ee(a,O.PE_MGRS_MAX),A=_.ensureInt32(f),C=_._pe_geog_to_usng(P,a,S,u,s,l,A);if(C)for(let p=0;p<a;p++)E[p]=_.UTF8ToString(f[p]);return C}function t(o,a,i,u){_.ensureCache.prepare();let s=0;o&&(s=_.getPointer(o));const l=i.map(S=>_.ensureString(S)),E=_.ensureInt32(l),P=_.ensureFloat64(new Array(2*a)),c=_._pe_usng_to_geog(s,a,E,P);return c&&U(u,a,P),c}e.geogToUsng=n,e.usngToGeog=t}(Te||(Te={})),function(e){function n(){e.PE_UTM_OPTS_NONE=_.PeNotationUtm.prototype.PE_UTM_OPTS_NONE,e.PE_UTM_OPTS_ADD_SPACES=_.PeNotationUtm.prototype.PE_UTM_OPTS_ADD_SPACES,e.PE_UTM_OPTS_NS=_.PeNotationUtm.prototype.PE_UTM_OPTS_NS}function t(a,i,u,s,l){_.ensureCache.prepare();let E=0;a&&(E=_.getPointer(a));const P=k(u),c=_.ensureFloat64(P),S=ee(i,O.PE_UTM_MAX),f=_.ensureInt32(S),A=_._pe_geog_to_utm(E,i,c,s,f);if(A)for(let C=0;C<i;C++)l[C]=_.UTF8ToString(S[C]);return A}function o(a,i,u,s,l){_.ensureCache.prepare();let E=0;a&&(E=_.getPointer(a));const P=u.map(A=>_.ensureString(A)),c=_.ensureInt32(P),S=_.ensureFloat64(new Array(2*i)),f=_._pe_utm_to_geog(E,i,c,s,S);return f&&U(l,i,S),f}e.init=n,e.geogToUtm=t,e.utmToGeog=o}(se||(se={})),function(e){const n=new Map;function t(){e.PE_PCSINFO_OPTION_NONE=_.PePCSInfo.prototype.PE_PCSINFO_OPTION_NONE,e.PE_PCSINFO_OPTION_DOMAIN=_.PePCSInfo.prototype.PE_PCSINFO_OPTION_DOMAIN,e.PE_POLE_OUTSIDE_BOUNDARY=_.PePCSInfo.prototype.PE_POLE_OUTSIDE_BOUNDARY,e.PE_POLE_POINT=_.PePCSInfo.prototype.PE_POLE_POINT}function o(a,i=e.PE_PCSINFO_OPTION_DOMAIN){let u,s;return n.has(a)&&(s=n.get(a),s[i]&&(u=s[i])),u||(u=_.PePCSInfo.prototype.generate(a,i),s||(s=[],n.set(a,s)),s[i]=u),u}e.init=t,e.generate=o}(ie||(ie={})),function(e){function n(){return _.PeVersion.prototype.version_string()}e.versionString=n}(de||(de={}));const It=Object.freeze({__proto__:null,get _pe(){return _},isLoaded:je,isSupported:Gt,load:Xe,get PeCSTransformations(){return pe},get PeDefs(){return O},get PeFactory(){return Re},get PeGCSExtent(){return be},get PeGTlistExtended(){return oe},get PeGTlistExtendedEntry(){return Oe},get PeGTTransformations(){return Ne},get PeNotationDms(){return Me},get PeNotationMgrs(){return _e},get PeNotationUsng(){return Te},get PeNotationUtm(){return se},get PePCSInfo(){return ie},get PeVersion(){return de},_init:Ke}),W=d.radius,L=d.eccentricitySquared,yt={a1:W*L,a2:W*L*W*L,a3:W*L*L/2,a4:W*L*W*L*2.5,a5:W*L+W*L*L/2,a6:1-L};1/294.9786982,1/298.257222101,d.radius,d.flattening,re.radius,re.flattening,1/192.0430107526882,V.radius,V.flattening,1/10.2079945799458,1/43.61604095563141,V.radius;let te=0;class K{constructor(n=null){this.uid=te++,n?(this._wkt=n.wkt!==void 0?n.wkt:null,this._wkid=n.wkid!==void 0?n.wkid:-1,this._isInverse=n.isInverse!==void 0&&n.isInverse===!0):(this._wkt=null,this._wkid=-1,this._isInverse=!1)}static fromGE(n){const t=new K;return t._wkt=n.wkt,t._wkid=n.wkid,t._isInverse=n.isInverse,t}get wkt(){return this._wkt}set wkt(n){this._wkt=n,this.uid=te++}get wkid(){return this._wkid}set wkid(n){this._wkid=n,this.uid=te++}get isInverse(){return this._isInverse}set isInverse(n){this._isInverse=n,this.uid=te++}getInverse(){const n=new K;return n._wkt=this.wkt,n._wkid=this._wkid,n._isInverse=!this.isInverse,n}}class H{constructor(n){if(this.steps=[],this._cached_projection={},this._chain="",this._gtlistentry=null,n&&n.steps)for(const t of n.steps)t instanceof K?this.steps.push(t):this.steps.push(new K({wkid:t.wkid,wkt:t.wkt,isInverse:t.isInverse}))}static cacheKey(n,t){return[n.wkid!==void 0&&n.wkid!==null?n.wkid.toString():"-1",n.wkt!==void 0&&n.wkt!==null?n.wkt.toString():"",t.wkid!==void 0&&t.wkid!==null?t.wkid.toString():"-1",t.wkt!==void 0&&t.wkt!==null?t.wkt.toString():""].join(",")}static fromGE(n){const t=new H;let o="";for(const a of n.steps){const i=K.fromGE(a);t.steps.push(i),o+=i.uid.toString()+","}return t._cached_projection={},t._gtlistentry=null,t._chain=o,t}getInverse(){const n=new H;n.steps=[];for(let t=this.steps.length-1;t>=0;t--){const o=this.steps[t];n.steps.push(o.getInverse())}return n}getGTListEntry(){let n="";for(const t of this.steps)n+=t.uid.toString()+",";return n!==this._chain&&(this._gtlistentry=null,this._cached_projection={},this._chain=n),this._gtlistentry}assignCachedGe(n,t,o){this._cached_projection[H.cacheKey(n,t)]=o}getCachedGeTransformation(n,t){let o="";for(const i of this.steps)o+=i.uid.toString()+",";o!==this._chain&&(this._gtlistentry=null,this._cached_projection={},this._chain=o);const a=this._cached_projection[H.cacheKey(n,t)];return a===void 0?null:a}}let X=null,ae=null,Se=null,Ae={};function Ft(){return!!X&&je()}function we(e){return T(Se)&&(Se=Promise.all([Xe(),Ce(()=>import("./geometryEngineBase.00185eb7.js"),[],import.meta.url).then(n=>n.g),Ce(()=>import("./hydrated.855c8375.js"),["./hydrated.855c8375.js","./entry.a426b012.js","./entry.5fbb926e.css"],import.meta.url)])),Se.then(([,n,{hydratedAdapter:t}])=>{at(e),ae=t,X=n.default,X._enableProjection(It)})}function rn(e,n,t=null){return Array.isArray(e)?e.length===0?[]:De(ae,e,e[0].spatialReference,n,t):De(ae,[e],e.spatialReference,n,t)[0]}function De(e,n,t,o,a=null){if(T(t)||T(o))return n;if(ge(t,o,a))return n.map(i=>et(Wt(i,t,o)));if(T(a)){const i=H.cacheKey(t,o);Ae[i]!==void 0?a=Ae[i]:(a=mt(t,o,null),T(a)&&(a=new H),Ae[i]=a)}if(T(X))throw new ze;return X._project(e,n,t,o,a)}function mt(e,n,t=null){if(T(X))throw new ze;if(T(e)||T(n))return null;const o=X._getTransformation(ae,e,n,t,t==null?void 0:t.spatialReference);return o!==null?H.fromGE(o):null}class ze extends tt{constructor(){super("projection:not-loaded","projection engine not fully loaded yet, please call load()")}}var r;function ge(e,n,t){return!t&&(!!Le(e,n)||me(e)&&me(n)&&!!Je(e,n,Qe))}async function on(e,n,t,o){if(!Ft()){if(Array.isArray(e)){for(const{source:a,dest:i,geographicTransformation:u}of e)if(!ge(a,i,u))return we(o)}else if(!ge(e,n,t))return we(o)}}function Wt(e,n,t){return e?"x"in e?wt(e,n,new nt,t,0):"xmin"in e?Ht(e,n,new rt,t,0):"rings"in e?Ze(e,n,new ot,t,0):"paths"in e?Ut(e,n,new _t,t,0):"points"in e?Dt(e,n,new st,t,0):null:null}function wt(e,n,t,o,a){M[0]=e.x,M[1]=e.y;const i=e.z;return M[2]=i!==void 0?i:a,Q(M,n,0,M,o,0,1)?(t.x=M[0],t.y=M[1],t.spatialReference=o,i===void 0?(t.z=void 0,t.hasZ=!1):(t.z=M[2],t.hasZ=!0),e.m===void 0?(t.m=void 0,t.hasM=!1):(t.m=e.m,t.hasM=!0),t):null}function Dt(e,n,t,o,a){const{points:i,hasZ:u,hasM:s}=e,l=[],E=i.length,P=[];for(const c of i)P.push(c[0],c[1],u?c[2]:a);if(!Q(P,n,0,P,o,0,E))return null;for(let c=0;c<E;++c){const S=3*c,f=P[S],A=P[S+1];u&&s?l.push([f,A,P[S+2],i[c][3]]):u?l.push([f,A,P[S+2]]):s?l.push([f,A,i[c][2]]):l.push([f,A])}return t.points=l,t.spatialReference=o,t.hasZ=u,t.hasM=s,t}function Ut(e,n,t,o,a){const{paths:i,hasZ:u,hasM:s}=e,l=[];return qe(i,u,s,n,l,o,a)?(t.paths=l,t.spatialReference=o,t.hasZ=u,t.hasM=s,t):null}function _n(e,n,t=n.spatialReference,o=0){return We(t)&&We(Ze(e,e.spatialReference,n,t,o))}function Ze(e,n,t,o,a){const{rings:i,hasZ:u,hasM:s}=e,l=[];return qe(i,u,s,n,l,o,a)?(t.rings=l,t.spatialReference=o,t.hasZ=u,t.hasM=s,t):null}function Ht(e,n,t,o,a){const{xmin:i,ymin:u,xmax:s,ymax:l,hasZ:E,hasM:P}=e;return Ue(i,u,E?e.zmin:a,n,M,o)?(t.xmin=M[0],t.ymin=M[1],E&&(t.zmin=M[2]),Ue(s,l,E?e.zmax:a,n,M,o)?(t.xmax=M[0],t.ymax=M[1],E&&(t.zmax=M[2]),P&&(t.mmin=e.mmin,t.mmax=e.mmax),t.spatialReference=o,t):null):null}function sn(e,n,t,o=0){M[0]=e.x,M[1]=e.y;const a=e.z;return M[2]=a!==void 0?a:o,Q(M,e.spatialReference,0,n,t,0,1)}function Ue(e,n,t,o,a,i){return ne[0]=e,ne[1]=n,ne[2]=t,Q(ne,o,0,a,i,0,1)}function Q(e,n,t,o,a,i,u=1){const s=Je(n,a,Qe);if(T(s))return!1;if(s===R){if(e===o&&t===i)return!0;const E=t+3*u;for(let P=t,c=i;P<E;P++,c++)o[c]=e[P];return!0}const l=t+3*u;for(let E=t,P=i;E<l;E+=3,P+=3)s(e,E,o,P);return!0}function qe(e,n,t,o,a,i,u=0){const s=new Array;for(const E of e)for(const P of E)s.push(P[0],P[1],n?P[2]:u);if(!Q(s,o,0,s,i,0,s.length/3))return!1;let l=0;a.length=0;for(const E of e){const P=new Array;for(const c of E)n&&t?P.push([s[l++],s[l++],s[l++],c[3]]):n?P.push([s[l++],s[l++],s[l++]]):t?(P.push([s[l++],s[l++],c[2]]),l++):(P.push([s[l++],s[l++]]),l++);a.push(P)}return!0}function an(e,n,t,o){if(T(e)||T(o))return!1;const a=ue(e,en),i=ue(o,tn);if(a===i&&!He(i)&&(a!==r.UNKNOWN||Le(e,o)))return gt(t,n),!0;if(He(i)){const u=q[a][r.LON_LAT],s=q[r.LON_LAT][i];return!T(u)&&!T(s)&&(u(n,0,w,0),s(w,0,D,0),Ve(h*w[0],h*w[1],t),t[12]=D[0],t[13]=D[1],t[14]=D[2],!0)}if((i===r.WEB_MERCATOR||i===r.PLATE_CARREE)&&(a===r.WGS84||a===r.CGCS2000&&i===r.PLATE_CARREE||a===r.SPHERICAL_ECEF||a===r.WEB_MERCATOR)){const u=q[a][r.LON_LAT],s=q[r.LON_LAT][i];return!T(u)&&!T(s)&&(u(n,0,w,0),s(w,0,D,0),a===r.SPHERICAL_ECEF?kt(h*w[0],h*w[1],t):Lt(t),t[12]=D[0],t[13]=D[1],t[14]=D[2],!0)}return!1}function He(e){return e===r.SPHERICAL_ECEF||e===r.SPHERICAL_MARS_PCPF||e===r.SPHERICAL_MOON_PCPF}function Ve(e,n,t){const o=Math.sin(e),a=Math.cos(e),i=Math.sin(n),u=Math.cos(n),s=t;return s[0]=-o,s[4]=-i*a,s[8]=u*a,s[12]=0,s[1]=a,s[5]=-i*o,s[9]=u*o,s[13]=0,s[2]=0,s[6]=u,s[10]=i,s[14]=0,s[3]=0,s[7]=0,s[11]=0,s[15]=1,s}function kt(e,n,t){return Ve(e,n,t),ht(t,t),t}function ue(e,n){return n.spatialReference===e?n.spatialReferenceId:(n.spatialReference=e,"metersPerUnit"in n&&(n.metersPerUnit=ut(e,1)),e.wkt===Pt.wkt?n.spatialReferenceId=r.SPHERICAL_ECEF:Et(e)?n.spatialReferenceId=r.WGS84:lt(e)?n.spatialReferenceId=r.WEB_MERCATOR:ct(e)?n.spatialReferenceId=r.PLATE_CARREE:e.wkt===ft.wkt?n.spatialReferenceId=r.WGS84_ECEF:e.wkid===St.CGCS2000?n.spatialReferenceId=r.CGCS2000:e.wkt===At.wkt?n.spatialReferenceId=r.SPHERICAL_MARS_PCPF:e.wkt===Ct.wkt?n.spatialReferenceId=r.SPHERICAL_MOON_PCPF:pt(e)?n.spatialReferenceId=r.GCSMARS2000:Rt(e)?n.spatialReferenceId=r.GCSMOON2000:n.spatialReferenceId=r.UNKNOWN)}function R(e,n,t,o){e!==t&&(t[o++]=e[n++],t[o++]=e[n++],t[o]=e[n])}function z(e,n,t,o){t[o++]=Z*(e[n++]/d.radius),t[o++]=Z*(Math.PI/2-2*Math.atan(Math.exp(-e[n++]/d.radius))),t[o]=e[n]}function Bt(e,n,t,o){z(e,n,t,o),x(t,o,t,o)}function vt(e,n,t,o){z(e,n,t,o),$(t,o,t,o)}function xt(e,n,t,o,a){const i=.4999999*Math.PI,u=Ot(h*e[n+1],-i,i),s=Math.sin(u);t[o++]=h*e[n]*a.radius,t[o++]=a.halfSemiMajorAxis*Math.log((1+s)/(1-s)),t[o]=e[n+2]}function J(e,n,t,o){xt(e,n,t,o,d)}(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.SPHERICAL_ECEF=1]="SPHERICAL_ECEF",e[e.WGS84=2]="WGS84",e[e.WEB_MERCATOR=3]="WEB_MERCATOR",e[e.WGS84_ECEF=4]="WGS84_ECEF",e[e.CGCS2000=5]="CGCS2000",e[e.WGS84_COMPARABLE_LON_LAT=6]="WGS84_COMPARABLE_LON_LAT",e[e.SPHERICAL_MARS_PCPF=7]="SPHERICAL_MARS_PCPF",e[e.GCSMARS2000=8]="GCSMARS2000",e[e.SPHERICAL_MOON_PCPF=9]="SPHERICAL_MOON_PCPF",e[e.GCSMOON2000=10]="GCSMOON2000",e[e.LON_LAT=11]="LON_LAT",e[e.PLATE_CARREE=12]="PLATE_CARREE"})(r||(r={}));const ke=d.radius*Math.PI/180,Be=180/(d.radius*Math.PI);function B(e,n,t,o){t[o]=e[n]*ke,t[o+1]=e[n+1]*ke,t[o+2]=e[n+2]}function v(e,n,t,o){t[o]=e[n]*Be,t[o+1]=e[n+1]*Be,t[o+2]=e[n+2]}function Yt(e,n,t,o){z(e,n,t,o),B(t,o,t,o)}function $t(e,n,t,o){j(e,n,t,o),B(t,o,t,o)}function jt(e,n,t,o){Y(e,n,t,o),B(t,o,t,o)}function Xt(e,n,t,o){v(e,n,t,o),x(t,o,t,o)}function bt(e,n,t,o){v(e,n,t,o),J(t,o,t,o)}function Kt(e,n,t,o){v(e,n,t,o),$(t,o,t,o)}function he(e,n,t,o,a){const i=a+e[n+2],u=h*e[n+1],s=h*e[n],l=Math.cos(u);t[o++]=Math.cos(s)*l*i,t[o++]=Math.sin(s)*l*i,t[o]=Math.sin(u)*i}function ve(e,n,t,o){he(e,n,t,o,re.radius)}function xe(e,n,t,o){he(e,n,t,o,V.radius)}function x(e,n,t,o){he(e,n,t,o,d.radius)}function Ge(e,n,t,o,a){const i=e[n],u=e[n+1],s=e[n+2],l=Math.sqrt(i*i+u*u+s*s),E=Tt(s/(l===0?1:l)),P=Math.atan2(u,i);t[o++]=Z*P,t[o++]=Z*E,t[o]=l-a}function Ye(e,n,t,o){Ge(e,n,t,o,re.radius)}function $e(e,n,t,o){Ge(e,n,t,o,V.radius)}function Y(e,n,t,o){Ge(e,n,t,o,d.radius)}function zt(e,n,t,o){Y(e,n,t,o),J(t,o,t,o)}function Zt(e,n,t,o){Y(e,n,t,o),$(t,o,t,o)}function qt(e,n,t,o,a){const i=h*e[n],u=h*e[n+1],s=e[n+2],l=Math.sin(u),E=Math.cos(u),P=a.radius/Math.sqrt(1-a.eccentricitySquared*l*l);t[o++]=(P+s)*E*Math.cos(i),t[o++]=(P+s)*E*Math.sin(i),t[o++]=(P*(1-a.eccentricitySquared)+s)*l}function $(e,n,t,o){qt(e,n,t,o,d)}function j(e,n,t,o){const a=yt,i=e[n],u=e[n+1],s=e[n+2];let l,E,P,c,S,f,A,C,p,N,y,F,m,G,g,Ee,le,ce,b,ye,Fe;l=Math.abs(s),E=i*i+u*u,P=Math.sqrt(E),c=E+s*s,S=Math.sqrt(c),ye=Math.atan2(u,i),f=s*s/c,A=E/c,G=a.a2/S,g=a.a3-a.a4/S,A>.3?(C=l/S*(1+A*(a.a1+G+f*g)/S),b=Math.asin(C),N=C*C,p=Math.sqrt(1-N)):(p=P/S*(1-f*(a.a5-G-A*g)/S),b=Math.acos(p),N=1-p*p,C=Math.sqrt(N)),y=1-d.eccentricitySquared*N,F=d.radius/Math.sqrt(y),m=a.a6*F,G=P-F*p,g=l-m*C,le=p*G+C*g,Ee=p*g-C*G,ce=Ee/(m/y+le),b+=ce,Fe=le+Ee*ce/2,s<0&&(b=-b),t[o++]=Z*ye,t[o++]=Z*b,t[o]=Fe}function Vt(e,n,t,o){j(e,n,t,o),x(t,o,t,o)}function Jt(e,n,t,o){j(e,n,t,o),J(t,o,t,o)}const q={[r.WGS84]:{[r.CGCS2000]:null,[r.GCSMARS2000]:null,[r.GCSMOON2000]:null,[r.LON_LAT]:R,[r.WGS84_COMPARABLE_LON_LAT]:R,[r.SPHERICAL_ECEF]:x,[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:J,[r.PLATE_CARREE]:B,[r.WGS84]:R,[r.WGS84_ECEF]:$},[r.CGCS2000]:{[r.CGCS2000]:R,[r.GCSMARS2000]:null,[r.GCSMOON2000]:null,[r.LON_LAT]:R,[r.WGS84_COMPARABLE_LON_LAT]:R,[r.SPHERICAL_ECEF]:x,[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:null,[r.PLATE_CARREE]:B,[r.WGS84]:null,[r.WGS84_ECEF]:$},[r.GCSMARS2000]:{[r.CGCS2000]:null,[r.GCSMARS2000]:R,[r.GCSMOON2000]:null,[r.LON_LAT]:R,[r.WGS84_COMPARABLE_LON_LAT]:null,[r.SPHERICAL_ECEF]:null,[r.SPHERICAL_MARS_PCPF]:xe,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:null,[r.PLATE_CARREE]:null,[r.WGS84]:null,[r.WGS84_ECEF]:null},[r.GCSMOON2000]:{[r.CGCS2000]:null,[r.GCSMARS2000]:null,[r.GCSMOON2000]:R,[r.LON_LAT]:R,[r.WGS84_COMPARABLE_LON_LAT]:null,[r.SPHERICAL_ECEF]:null,[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:ve,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:null,[r.PLATE_CARREE]:null,[r.WGS84]:null,[r.WGS84_ECEF]:null},[r.WEB_MERCATOR]:{[r.CGCS2000]:null,[r.GCSMARS2000]:null,[r.GCSMOON2000]:null,[r.LON_LAT]:z,[r.WGS84_COMPARABLE_LON_LAT]:z,[r.SPHERICAL_ECEF]:Bt,[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:R,[r.PLATE_CARREE]:Yt,[r.WGS84]:z,[r.WGS84_ECEF]:vt},[r.WGS84_ECEF]:{[r.CGCS2000]:j,[r.GCSMARS2000]:null,[r.GCSMOON2000]:null,[r.LON_LAT]:j,[r.WGS84_COMPARABLE_LON_LAT]:j,[r.SPHERICAL_ECEF]:Vt,[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:Jt,[r.PLATE_CARREE]:$t,[r.WGS84]:j,[r.WGS84_ECEF]:R},[r.SPHERICAL_ECEF]:{[r.CGCS2000]:Y,[r.GCSMARS2000]:null,[r.GCSMOON2000]:null,[r.LON_LAT]:Y,[r.WGS84_COMPARABLE_LON_LAT]:Y,[r.SPHERICAL_ECEF]:R,[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:zt,[r.PLATE_CARREE]:jt,[r.WGS84]:Y,[r.WGS84_ECEF]:Zt},[r.SPHERICAL_MARS_PCPF]:{[r.CGCS2000]:null,[r.GCSMARS2000]:$e,[r.GCSMOON2000]:null,[r.LON_LAT]:$e,[r.WGS84_COMPARABLE_LON_LAT]:null,[r.SPHERICAL_ECEF]:null,[r.SPHERICAL_MARS_PCPF]:R,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:null,[r.PLATE_CARREE]:null,[r.WGS84]:null,[r.WGS84_ECEF]:null},[r.SPHERICAL_MOON_PCPF]:{[r.CGCS2000]:null,[r.GCSMARS2000]:null,[r.GCSMOON2000]:Ye,[r.LON_LAT]:Ye,[r.WGS84_COMPARABLE_LON_LAT]:null,[r.SPHERICAL_ECEF]:null,[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:R,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:null,[r.PLATE_CARREE]:null,[r.WGS84]:null,[r.WGS84_ECEF]:null},[r.UNKNOWN]:{[r.CGCS2000]:null,[r.GCSMARS2000]:null,[r.GCSMOON2000]:null,[r.LON_LAT]:null,[r.WGS84_COMPARABLE_LON_LAT]:null,[r.SPHERICAL_ECEF]:null,[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:R,[r.WEB_MERCATOR]:null,[r.PLATE_CARREE]:null,[r.WGS84]:null,[r.WGS84_ECEF]:null},[r.LON_LAT]:{[r.CGCS2000]:R,[r.GCSMARS2000]:R,[r.GCSMOON2000]:R,[r.LON_LAT]:R,[r.WGS84_COMPARABLE_LON_LAT]:R,[r.SPHERICAL_ECEF]:x,[r.SPHERICAL_MARS_PCPF]:xe,[r.SPHERICAL_MOON_PCPF]:ve,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:J,[r.PLATE_CARREE]:B,[r.WGS84]:R,[r.WGS84_ECEF]:$},[r.WGS84_COMPARABLE_LON_LAT]:{[r.CGCS2000]:null,[r.GCSMARS2000]:null,[r.GCSMOON2000]:null,[r.LON_LAT]:R,[r.WGS84_COMPARABLE_LON_LAT]:R,[r.SPHERICAL_ECEF]:x,[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:null,[r.PLATE_CARREE]:B,[r.WGS84]:R,[r.WGS84_ECEF]:$},[r.PLATE_CARREE]:{[r.CGCS2000]:v,[r.GCSMARS2000]:null,[r.GCSMOON2000]:null,[r.LON_LAT]:v,[r.WGS84_COMPARABLE_LON_LAT]:v,[r.SPHERICAL_ECEF]:Xt,[r.SPHERICAL_MARS_PCPF]:null,[r.SPHERICAL_MOON_PCPF]:null,[r.UNKNOWN]:null,[r.WEB_MERCATOR]:bt,[r.PLATE_CARREE]:R,[r.WGS84]:v,[r.WGS84_ECEF]:Kt}};function Je(e,n,t=Ie()){return T(e)||T(n)?null:Qt(e,n,t).projector}function Qt(e,n,t){if(T(e)||T(n)||t.source.spatialReference===e&&t.dest.spatialReference===n)return t;const o=ue(e,t.source),a=ue(n,t.dest);return o===r.UNKNOWN&&a===r.UNKNOWN?Le(e,n)?t.projector=R:t.projector=null:t.projector=q[o][a],t}function Ie(){return{source:{spatialReference:null,spatialReferenceId:r.UNKNOWN,metersPerUnit:1},dest:{spatialReference:null,spatialReferenceId:r.UNKNOWN,metersPerUnit:1},projector:R}}const en={spatialReference:null,spatialReferenceId:r.UNKNOWN},tn={spatialReference:null,spatialReferenceId:r.UNKNOWN},Qe=Ie();Ie();const h=Nt(1),Z=it(1),ne=Pe(),w=Pe(),D=Pe(),M=Pe();export{De as $,O as E,Q as F,Ft as J,sn as N,we as Q,ie as S,an as U,rn as Y,on as a,pe as b,Ne as c,_n as d,Re as i,ge as o,H as s};
