import{e as ze}from"./_commonjsHelpers.47085f90.js";function En(k,Y){for(var z=0;z<Y.length;z++){const i=Y[z];if(typeof i!="string"&&!Array.isArray(i)){for(const C in i)if(C!=="default"&&!(C in k)){const E=Object.getOwnPropertyDescriptor(i,C);E&&Object.defineProperty(k,C,E.get?E:{enumerable:!0,get:()=>i[C]})}}}return Object.freeze(k)}var Ar,se,Wr,He={exports:{}};Ar=He,se=typeof document!="undefined"&&document.currentScript?document.currentScript.src:void 0,typeof __filename!="undefined"&&(se=se||__filename),Wr=function(k){var Y,z,i=(k=k||{})!==void 0?k:{};i.ready=new Promise(function(e,r){Y=e,z=r});var C,E={};for(C in i)i.hasOwnProperty(C)&&(E[C]=i[C]);var le=!1,I=!1,_e=!1,Be=!1;le=typeof window=="object",I=typeof importScripts=="function",_e=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",Be=!le&&!_e&&!I;var ce,Z,Pe,Ae,T="";function Er(e){return i.locateFile?i.locateFile(e,T):T+e}_e?(T=I?require("path").dirname(T)+"/":__dirname+"/",ce=function(e,r){return Pe||(Pe=require("fs")),Ae||(Ae=require("path")),e=Ae.normalize(e),Pe.readFileSync(e,r?null:"utf8")},Z=function(e){var r=ce(e,!0);return r.buffer||(r=new Uint8Array(r)),We(r.buffer),r},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(e){if(!(e instanceof An))throw e}),process.on("unhandledRejection",q),i.inspect=function(){return"[Emscripten Module object]"}):Be?(typeof read!="undefined"&&(ce=function(e){return read(e)}),Z=function(e){var r;return typeof readbuffer=="function"?new Uint8Array(readbuffer(e)):(We(typeof(r=read(e,"binary"))=="object"),r)},typeof scriptArgs!="undefined"&&scriptArgs,typeof print!="undefined"&&(typeof console=="undefined"&&(console={}),console.log=print,console.warn=console.error=typeof printErr!="undefined"?printErr:print)):(le||I)&&(I?T=self.location.href:document.currentScript&&(T=document.currentScript.src),se&&(T=se),T=T.indexOf("blob:")!==0?T.substr(0,T.lastIndexOf("/")+1):"",ce=function(e){var r=new XMLHttpRequest;return r.open("GET",e,!1),r.send(null),r.responseText},I&&(Z=function(e){var r=new XMLHttpRequest;return r.open("GET",e,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}));var K,Q,Sr=i.print||console.log.bind(console),H=i.printErr||console.warn.bind(console);for(C in E)E.hasOwnProperty(C)&&(i[C]=E[C]);E=null,i.arguments,i.thisProgram,i.quit,i.wasmBinary&&(K=i.wasmBinary),i.noExitRuntime,typeof WebAssembly!="object"&&q("no native wasm support detected");var Or=new WebAssembly.Table({initial:157,maximum:157,element:"anyfunc"}),qe=!1;function We(e,r){e||q("Assertion failed: "+r)}var Ne=typeof TextDecoder!="undefined"?new TextDecoder("utf8"):void 0;function Ge(e,r,t){for(var n=r+t,a=r;e[a]&&!(a>=n);)++a;if(a-r>16&&e.subarray&&Ne)return Ne.decode(e.subarray(r,a));for(var o="";r<a;){var s=e[r++];if(128&s){var u=63&e[r++];if((224&s)!=192){var l=63&e[r++];if((s=(240&s)==224?(15&s)<<12|u<<6|l:(7&s)<<18|u<<12|l<<6|63&e[r++])<65536)o+=String.fromCharCode(s);else{var c=s-65536;o+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else o+=String.fromCharCode((31&s)<<6|u)}else o+=String.fromCharCode(s)}return o}function Le(e,r){return e?Ge(b,e,r):""}function jr(e,r,t,n){if(!(n>0))return 0;for(var a=t,o=t+n-1,s=0;s<e.length;++s){var u=e.charCodeAt(s);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&e.charCodeAt(++s)),u<=127){if(t>=o)break;r[t++]=u}else if(u<=2047){if(t+1>=o)break;r[t++]=192|u>>6,r[t++]=128|63&u}else if(u<=65535){if(t+2>=o)break;r[t++]=224|u>>12,r[t++]=128|u>>6&63,r[t++]=128|63&u}else{if(t+3>=o)break;r[t++]=240|u>>18,r[t++]=128|u>>12&63,r[t++]=128|u>>6&63,r[t++]=128|63&u}}return r[t]=0,t-a}function kr(e,r,t){return jr(e,b,r,t)}function Fr(e){for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n>=55296&&n<=57343&&(n=65536+((1023&n)<<10)|1023&e.charCodeAt(++t)),n<=127?++r:r+=n<=2047?2:n<=65535?3:4}return r}var Xe=typeof TextDecoder!="undefined"?new TextDecoder("utf-16le"):void 0;function Rr(e,r){for(var t=e,n=t>>1,a=n+r/2;!(n>=a)&&ee[n];)++n;if((t=n<<1)-e>32&&Xe)return Xe.decode(b.subarray(e,t));for(var o=0,s="";;){var u=U[e+2*o>>1];if(u==0||o==r/2)return s;++o,s+=String.fromCharCode(u)}}function xr(e,r,t){if(t===void 0&&(t=2147483647),t<2)return 0;for(var n=r,a=(t-=2)<2*e.length?t/2:e.length,o=0;o<a;++o){var s=e.charCodeAt(o);U[r>>1]=s,r+=2}return U[r>>1]=0,r-n}function Dr(e){return 2*e.length}function Ir(e,r){for(var t=0,n="";!(t>=r/4);){var a=g[e+4*t>>2];if(a==0)break;if(++t,a>=65536){var o=a-65536;n+=String.fromCharCode(55296|o>>10,56320|1023&o)}else n+=String.fromCharCode(a)}return n}function Ur(e,r,t){if(t===void 0&&(t=2147483647),t<4)return 0;for(var n=r,a=n+t-4,o=0;o<e.length;++o){var s=e.charCodeAt(o);if(s>=55296&&s<=57343&&(s=65536+((1023&s)<<10)|1023&e.charCodeAt(++o)),g[r>>2]=s,(r+=4)+4>a)break}return g[r>>2]=0,r-n}function Mr(e){for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n>=55296&&n<=57343&&++t,r+=4}return r}var B,fe,b,U,ee,g,P,Je,Ye,Ze=65536;function Vr(e,r){return e%r>0&&(e+=r-e%r),e}function Ke(e){B=e,i.HEAP8=fe=new Int8Array(e),i.HEAP16=U=new Int16Array(e),i.HEAP32=g=new Int32Array(e),i.HEAPU8=b=new Uint8Array(e),i.HEAPU16=ee=new Uint16Array(e),i.HEAPU32=P=new Uint32Array(e),i.HEAPF32=Je=new Float32Array(e),i.HEAPF64=Ye=new Float64Array(e)}var zr=5565536,Hr=322496,Qe=i.INITIAL_MEMORY||16777216;function pe(e){for(;e.length>0;){var r=e.shift();if(typeof r!="function"){var t=r.func;typeof t=="number"?r.arg===void 0?i.dynCall_v(t):i.dynCall_vi(t,r.arg):t(r.arg===void 0?null:r.arg)}else r(i)}}(Q=i.wasmMemory?i.wasmMemory:new WebAssembly.Memory({initial:Qe/Ze,maximum:2147483648/Ze}))&&(B=Q.buffer),Qe=B.byteLength,Ke(B),g[Hr>>2]=zr;var er=[],rr=[],Br=[],tr=[];function qr(){if(i.preRun)for(typeof i.preRun=="function"&&(i.preRun=[i.preRun]);i.preRun.length;)Xr(i.preRun.shift());pe(er)}function Nr(){pe(rr)}function Gr(){pe(Br)}function Lr(){if(i.postRun)for(typeof i.postRun=="function"&&(i.postRun=[i.postRun]);i.postRun.length;)Jr(i.postRun.shift());pe(tr)}function Xr(e){er.unshift(e)}function Jr(e){tr.unshift(e)}var Yr=Math.ceil,Zr=Math.floor,M=0,re=null;function Kr(e){M++,i.monitorRunDependencies&&i.monitorRunDependencies(M)}function Qr(e){if(M--,i.monitorRunDependencies&&i.monitorRunDependencies(M),M==0&&re){var r=re;re=null,r()}}function q(e){i.onAbort&&i.onAbort(e),H(e+=""),qe=!0,e="abort("+e+"). Build with -s ASSERTIONS=1 for more info.";var r=new WebAssembly.RuntimeError(e);throw z(r),r}function nr(e,r){return String.prototype.startsWith?e.startsWith(r):e.indexOf(r)===0}i.preloadedImages={},i.preloadedAudios={};var et="data:application/octet-stream;base64,";function ir(e){return nr(e,et)}var rt="file://";function ar(e){return nr(e,rt)}var A="basis_transcoder.wasm";function or(){try{if(K)return new Uint8Array(K);if(Z)return Z(A);throw"both async and sync fetching of the wasm failed"}catch(e){q(e)}}function tt(){return K||!le&&!I||typeof fetch!="function"||ar(A)?new Promise(function(e,r){e(or())}):fetch(A,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+A+"'";return e.arrayBuffer()}).catch(function(){return or()})}function nt(){var e={a:Pn};function r(o,s){var u=o.exports;i.asm=u,Qr()}function t(o){r(o.instance)}function n(o){return tt().then(function(s){return WebAssembly.instantiate(s,e)}).then(o,function(s){H("failed to asynchronously prepare wasm: "+s),q(s)})}function a(){if(K||typeof WebAssembly.instantiateStreaming!="function"||ir(A)||ar(A)||typeof fetch!="function")return n(t);fetch(A,{credentials:"same-origin"}).then(function(o){return WebAssembly.instantiateStreaming(o,e).then(t,function(s){return H("wasm streaming compile failed: "+s),H("falling back to ArrayBuffer instantiation"),n(t)})})}if(Kr(),i.instantiateWasm)try{return i.instantiateWasm(e,r)}catch(o){return H("Module.instantiateWasm callback failed with error: "+o),!1}return a(),{}}ir(A)||(A=Er(A)),rr.push({func:function(){Cr()}});var de={};function ye(e){for(;e.length;){var r=e.pop();e.pop()(r)}}function te(e){return this.fromWireType(P[e>>2])}var N={},V={},he={},it=48,at=57;function ur(e){if(e===void 0)return"_unknown";var r=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=it&&r<=at?"_"+e:e}function Ee(e,r){return e=ur(e),function(){return r.apply(this,arguments)}}function Se(e,r){var t=Ee(r,function(n){this.name=r,this.message=n;var a=new Error(n).stack;a!==void 0&&(this.stack=this.toString()+`
`+a.replace(/^Error(:[^\n]*)?\n/,""))});return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},t}var sr=void 0;function me(e){throw new sr(e)}function F(e,r,t){function n(u){var l=t(u);l.length!==e.length&&me("Mismatched type converter count");for(var c=0;c<e.length;++c)W(e[c],l[c])}e.forEach(function(u){he[u]=r});var a=new Array(r.length),o=[],s=0;r.forEach(function(u,l){V.hasOwnProperty(u)?a[l]=V[u]:(o.push(u),N.hasOwnProperty(u)||(N[u]=[]),N[u].push(function(){a[l]=V[u],++s===o.length&&n(a)}))}),o.length===0&&n(a)}function ot(e){var r=de[e];delete de[e];var t=r.rawConstructor,n=r.rawDestructor,a=r.fields;F([e],a.map(function(o){return o.getterReturnType}).concat(a.map(function(o){return o.setterArgumentType})),function(o){var s={};return a.forEach(function(u,l){var c=u.fieldName,f=o[l],h=u.getter,d=u.getterContext,m=o[l+a.length],$=u.setter,y=u.setterContext;s[c]={read:function(x){return f.fromWireType(h(d,x))},write:function(x,D){var X=[];$(y,x,m.toWireType(X,D)),ye(X)}}}),[{name:r.name,fromWireType:function(u){var l={};for(var c in s)l[c]=s[c].read(u);return n(u),l},toWireType:function(u,l){for(var c in s)if(!(c in l))throw new TypeError('Missing field:  "'+c+'"');var f=t();for(c in s)s[c].write(f,l[c]);return u!==null&&u.push(n,f),f},argPackAdvance:8,readValueFromPointer:te,destructorFunction:n}]})}function ve(e){switch(e){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+e)}}function ut(){for(var e=new Array(256),r=0;r<256;++r)e[r]=String.fromCharCode(r);lr=e}var lr=void 0;function v(e){for(var r="",t=e;b[t];)r+=lr[b[t++]];return r}var G=void 0;function p(e){throw new G(e)}function W(e,r,t){if(t=t||{},!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var n=r.name;if(e||p('type "'+n+'" must have a positive integer typeid pointer'),V.hasOwnProperty(e)){if(t.ignoreDuplicateRegistrations)return;p("Cannot register type '"+n+"' twice")}if(V[e]=r,delete he[e],N.hasOwnProperty(e)){var a=N[e];delete N[e],a.forEach(function(o){o()})}}function st(e,r,t,n,a){var o=ve(t);W(e,{name:r=v(r),fromWireType:function(s){return!!s},toWireType:function(s,u){return u?n:a},argPackAdvance:8,readValueFromPointer:function(s){var u;if(t===1)u=fe;else if(t===2)u=U;else{if(t!==4)throw new TypeError("Unknown boolean type size: "+r);u=g}return this.fromWireType(u[s>>o])},destructorFunction:null})}function lt(e){if(!(this instanceof R)||!(e instanceof R))return!1;for(var r=this.$$.ptrType.registeredClass,t=this.$$.ptr,n=e.$$.ptrType.registeredClass,a=e.$$.ptr;r.baseClass;)t=r.upcast(t),r=r.baseClass;for(;n.baseClass;)a=n.upcast(a),n=n.baseClass;return r===n&&t===a}function ct(e){return{count:e.count,deleteScheduled:e.deleteScheduled,preservePointerOnDelete:e.preservePointerOnDelete,ptr:e.ptr,ptrType:e.ptrType,smartPtr:e.smartPtr,smartPtrType:e.smartPtrType}}function Oe(e){function r(t){return t.$$.ptrType.registeredClass.name}p(r(e)+" instance already deleted")}var je=!1;function cr(e){}function ft(e){e.smartPtr?e.smartPtrType.rawDestructor(e.smartPtr):e.ptrType.registeredClass.rawDestructor(e.ptr)}function fr(e){e.count.value-=1,e.count.value===0&&ft(e)}function ne(e){return typeof FinalizationGroup=="undefined"?(ne=function(r){return r},e):(je=new FinalizationGroup(function(r){for(var t=r.next();!t.done;t=r.next()){var n=t.value;n.ptr?fr(n):console.warn("object already deleted: "+n.ptr)}}),ne=function(r){return je.register(r,r.$$,r.$$),r},cr=function(r){je.unregister(r.$$)},ne(e))}function pt(){if(this.$$.ptr||Oe(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var e=ne(Object.create(Object.getPrototypeOf(this),{$$:{value:ct(this.$$)}}));return e.$$.count.value+=1,e.$$.deleteScheduled=!1,e}function dt(){this.$$.ptr||Oe(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&p("Object already scheduled for deletion"),cr(this),fr(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function yt(){return!this.$$.ptr}var ie=void 0,ae=[];function ke(){for(;ae.length;){var e=ae.pop();e.$$.deleteScheduled=!1,e.delete()}}function ht(){return this.$$.ptr||Oe(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&p("Object already scheduled for deletion"),ae.push(this),ae.length===1&&ie&&ie(ke),this.$$.deleteScheduled=!0,this}function mt(){R.prototype.isAliasOf=lt,R.prototype.clone=pt,R.prototype.delete=dt,R.prototype.isDeleted=yt,R.prototype.deleteLater=ht}function R(){}var pr={};function dr(e,r,t){if(e[r].overloadTable===void 0){var n=e[r];e[r]=function(){return e[r].overloadTable.hasOwnProperty(arguments.length)||p("Function '"+t+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+e[r].overloadTable+")!"),e[r].overloadTable[arguments.length].apply(this,arguments)},e[r].overloadTable=[],e[r].overloadTable[n.argCount]=n}}function Fe(e,r,t){i.hasOwnProperty(e)?((t===void 0||i[e].overloadTable!==void 0&&i[e].overloadTable[t]!==void 0)&&p("Cannot register public name '"+e+"' twice"),dr(i,e,e),i.hasOwnProperty(t)&&p("Cannot register multiple overloads of a function with the same number of arguments ("+t+")!"),i[e].overloadTable[t]=r):(i[e]=r,t!==void 0&&(i[e].numArguments=t))}function vt(e,r,t,n,a,o,s,u){this.name=e,this.constructor=r,this.instancePrototype=t,this.rawDestructor=n,this.baseClass=a,this.getActualType=o,this.upcast=s,this.downcast=u,this.pureVirtualFunctions=[]}function Re(e,r,t){for(;r!==t;)r.upcast||p("Expected null or instance of "+t.name+", got an instance of "+r.name),e=r.upcast(e),r=r.baseClass;return e}function gt(e,r){if(r===null)return this.isReference&&p("null is not a valid "+this.name),0;r.$$||p('Cannot pass "'+L(r)+'" as a '+this.name),r.$$.ptr||p("Cannot pass deleted object as a pointer of type "+this.name);var t=r.$$.ptrType.registeredClass;return Re(r.$$.ptr,t,this.registeredClass)}function bt(e,r){var t;if(r===null)return this.isReference&&p("null is not a valid "+this.name),this.isSmartPointer?(t=this.rawConstructor(),e!==null&&e.push(this.rawDestructor,t),t):0;r.$$||p('Cannot pass "'+L(r)+'" as a '+this.name),r.$$.ptr||p("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&r.$$.ptrType.isConst&&p("Cannot convert argument of type "+(r.$$.smartPtrType?r.$$.smartPtrType.name:r.$$.ptrType.name)+" to parameter type "+this.name);var n=r.$$.ptrType.registeredClass;if(t=Re(r.$$.ptr,n,this.registeredClass),this.isSmartPointer)switch(r.$$.smartPtr===void 0&&p("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:r.$$.smartPtrType===this?t=r.$$.smartPtr:p("Cannot convert argument of type "+(r.$$.smartPtrType?r.$$.smartPtrType.name:r.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:t=r.$$.smartPtr;break;case 2:if(r.$$.smartPtrType===this)t=r.$$.smartPtr;else{var a=r.clone();t=this.rawShare(t,O(function(){a.delete()})),e!==null&&e.push(this.rawDestructor,t)}break;default:p("Unsupporting sharing policy")}return t}function $t(e,r){if(r===null)return this.isReference&&p("null is not a valid "+this.name),0;r.$$||p('Cannot pass "'+L(r)+'" as a '+this.name),r.$$.ptr||p("Cannot pass deleted object as a pointer of type "+this.name),r.$$.ptrType.isConst&&p("Cannot convert argument of type "+r.$$.ptrType.name+" to parameter type "+this.name);var t=r.$$.ptrType.registeredClass;return Re(r.$$.ptr,t,this.registeredClass)}function Ct(e){return this.rawGetPointee&&(e=this.rawGetPointee(e)),e}function wt(e){this.rawDestructor&&this.rawDestructor(e)}function Tt(e){e!==null&&e.delete()}function yr(e,r,t){if(r===t)return e;if(t.baseClass===void 0)return null;var n=yr(e,r,t.baseClass);return n===null?null:t.downcast(n)}function _t(){return Object.keys(oe).length}function Pt(){var e=[];for(var r in oe)oe.hasOwnProperty(r)&&e.push(oe[r]);return e}function At(e){ie=e,ae.length&&ie&&ie(ke)}function Wt(){i.getInheritedInstanceCount=_t,i.getLiveInheritedInstances=Pt,i.flushPendingDeletes=ke,i.setDelayFunction=At}var oe={};function Et(e,r){for(r===void 0&&p("ptr should not be undefined");e.baseClass;)r=e.upcast(r),e=e.baseClass;return r}function St(e,r){return r=Et(e,r),oe[r]}function ge(e,r){return r.ptrType&&r.ptr||me("makeClassHandle requires ptr and ptrType"),!!r.smartPtrType!=!!r.smartPtr&&me("Both smartPtrType and smartPtr must be specified"),r.count={value:1},ne(Object.create(e,{$$:{value:r}}))}function Ot(e){var r=this.getPointee(e);if(!r)return this.destructor(e),null;var t=St(this.registeredClass,r);if(t!==void 0){if(t.$$.count.value===0)return t.$$.ptr=r,t.$$.smartPtr=e,t.clone();var n=t.clone();return this.destructor(e),n}function a(){return this.isSmartPointer?ge(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:r,smartPtrType:this,smartPtr:e}):ge(this.registeredClass.instancePrototype,{ptrType:this,ptr:e})}var o,s=this.registeredClass.getActualType(r),u=pr[s];if(!u)return a.call(this);o=this.isConst?u.constPointerType:u.pointerType;var l=yr(r,this.registeredClass,o.registeredClass);return l===null?a.call(this):this.isSmartPointer?ge(o.registeredClass.instancePrototype,{ptrType:o,ptr:l,smartPtrType:this,smartPtr:e}):ge(o.registeredClass.instancePrototype,{ptrType:o,ptr:l})}function jt(){S.prototype.getPointee=Ct,S.prototype.destructor=wt,S.prototype.argPackAdvance=8,S.prototype.readValueFromPointer=te,S.prototype.deleteObject=Tt,S.prototype.fromWireType=Ot}function S(e,r,t,n,a,o,s,u,l,c,f){this.name=e,this.registeredClass=r,this.isReference=t,this.isConst=n,this.isSmartPointer=a,this.pointeeType=o,this.sharingPolicy=s,this.rawGetPointee=u,this.rawConstructor=l,this.rawShare=c,this.rawDestructor=f,a||r.baseClass!==void 0?this.toWireType=bt:n?(this.toWireType=gt,this.destructorFunction=null):(this.toWireType=$t,this.destructorFunction=null)}function hr(e,r,t){i.hasOwnProperty(e)||me("Replacing nonexistant public symbol"),i[e].overloadTable!==void 0&&t!==void 0?i[e].overloadTable[t]=r:(i[e]=r,i[e].argCount=t)}function _(e,r){function t(a){var o=[r];return function(){o.length=arguments.length+1;for(var s=0;s<arguments.length;s++)o[s+1]=arguments[s];return a.apply(null,o)}}e=v(e);var n=t(i["dynCall_"+e]);return typeof n!="function"&&p("unknown function pointer with signature "+e+": "+r),n}var mr=void 0;function vr(e){var r=wr(e),t=v(r);return j(r),t}function be(e,r){var t=[],n={};function a(o){n[o]||V[o]||(he[o]?he[o].forEach(a):(t.push(o),n[o]=!0))}throw r.forEach(a),new mr(e+": "+t.map(vr).join([", "]))}function kt(e,r,t,n,a,o,s,u,l,c,f,h,d){f=v(f),o=_(a,o),u&&(u=_(s,u)),c&&(c=_(l,c)),d=_(h,d);var m=ur(f);Fe(m,function(){be("Cannot construct "+f+" due to unbound types",[n])}),F([e,r,t],n?[n]:[],function($){var y,x;$=$[0],x=n?(y=$.registeredClass).instancePrototype:R.prototype;var D=Ee(m,function(){if(Object.getPrototypeOf(this)!==X)throw new G("Use 'new' to construct "+f);if(J.constructor_body===void 0)throw new G(f+" has no accessible constructor");var Pr=J.constructor_body[arguments.length];if(Pr===void 0)throw new G("Tried to invoke ctor of "+f+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(J.constructor_body).toString()+") parameters instead!");return Pr.apply(this,arguments)}),X=Object.create(x,{constructor:{value:D}});D.prototype=X;var J=new vt(f,D,X,d,y,o,u,c),Wn=new S(f,J,!0,!1,!1),Tr=new S(f+"*",J,!1,!1,!1),_r=new S(f+" const*",J,!1,!0,!1);return pr[e]={pointerType:Tr,constPointerType:_r},hr(m,D),[Wn,Tr,_r]})}function xe(e,r){for(var t=[],n=0;n<e;n++)t.push(g[(r>>2)+n]);return t}function Ft(e,r,t,n,a,o){We(r>0);var s=xe(r,t);a=_(n,a);var u=[o],l=[];F([],[e],function(c){var f="constructor "+(c=c[0]).name;if(c.registeredClass.constructor_body===void 0&&(c.registeredClass.constructor_body=[]),c.registeredClass.constructor_body[r-1]!==void 0)throw new G("Cannot register multiple constructors with identical number of parameters ("+(r-1)+") for class '"+c.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return c.registeredClass.constructor_body[r-1]=function(){be("Cannot construct "+c.name+" due to unbound types",s)},F([],s,function(h){return c.registeredClass.constructor_body[r-1]=function(){arguments.length!==r-1&&p(f+" called with "+arguments.length+" arguments, expected "+(r-1)),l.length=0,u.length=r;for(var d=1;d<r;++d)u[d]=h[d].toWireType(l,arguments[d-1]);var m=a.apply(null,u);return ye(l),h[0].fromWireType(m)},[]}),[]})}function gr(e,r,t,n,a){var o=r.length;o<2&&p("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var s=r[1]!==null&&t!==null,u=!1,l=1;l<r.length;++l)if(r[l]!==null&&r[l].destructorFunction===void 0){u=!0;break}var c=r[0].name!=="void",f=o-2,h=new Array(f),d=[],m=[];return function(){var $;arguments.length!==f&&p("function "+e+" called with "+arguments.length+" arguments, expected "+f+" args!"),m.length=0,d.length=s?2:1,d[0]=a,s&&($=r[1].toWireType(m,this),d[1]=$);for(var y=0;y<f;++y)h[y]=r[y+2].toWireType(m,arguments[y]),d.push(h[y]);var x=n.apply(null,d);if(u)ye(m);else for(y=s?1:2;y<r.length;y++){var D=y===1?$:h[y-2];r[y].destructorFunction!==null&&r[y].destructorFunction(D)}if(c)return r[0].fromWireType(x)}}function Rt(e,r,t,n,a,o,s,u){var l=xe(t,n);r=v(r),o=_(a,o),F([],[e],function(c){var f=(c=c[0]).name+"."+r;function h(){be("Cannot call "+f+" due to unbound types",l)}u&&c.registeredClass.pureVirtualFunctions.push(r);var d=c.registeredClass.instancePrototype,m=d[r];return m===void 0||m.overloadTable===void 0&&m.className!==c.name&&m.argCount===t-2?(h.argCount=t-2,h.className=c.name,d[r]=h):(dr(d,r,f),d[r].overloadTable[t-2]=h),F([],l,function($){var y=gr(f,$,c,o,s);return d[r].overloadTable===void 0?(y.argCount=t-2,d[r]=y):d[r].overloadTable[t-2]=y,[]}),[]})}function xt(e,r,t){e=v(e),F([],[r],function(n){return n=n[0],i[e]=n.fromWireType(t),[]})}var De=[],w=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Ie(e){e>4&&--w[e].refcount==0&&(w[e]=void 0,De.push(e))}function Dt(){for(var e=0,r=5;r<w.length;++r)w[r]!==void 0&&++e;return e}function It(){for(var e=5;e<w.length;++e)if(w[e]!==void 0)return w[e];return null}function Ut(){i.count_emval_handles=Dt,i.get_first_emval=It}function O(e){switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=De.length?De.pop():w.length;return w[r]={refcount:1,value:e},r}}function Mt(e,r){W(e,{name:r=v(r),fromWireType:function(t){var n=w[t].value;return Ie(t),n},toWireType:function(t,n){return O(n)},argPackAdvance:8,readValueFromPointer:te,destructorFunction:null})}function Vt(e,r,t){switch(r){case 0:return function(n){var a=t?fe:b;return this.fromWireType(a[n])};case 1:return function(n){var a=t?U:ee;return this.fromWireType(a[n>>1])};case 2:return function(n){var a=t?g:P;return this.fromWireType(a[n>>2])};default:throw new TypeError("Unknown integer type: "+e)}}function zt(e,r,t,n){var a=ve(t);function o(){}r=v(r),o.values={},W(e,{name:r,constructor:o,fromWireType:function(s){return this.constructor.values[s]},toWireType:function(s,u){return u.value},argPackAdvance:8,readValueFromPointer:Vt(r,a,n),destructorFunction:null}),Fe(r,o)}function $e(e,r){var t=V[e];return t===void 0&&p(r+" has unknown type "+vr(e)),t}function Ht(e,r,t){var n=$e(e,"enum");r=v(r);var a=n.constructor,o=Object.create(n.constructor.prototype,{value:{value:t},constructor:{value:Ee(n.name+"_"+r,function(){})}});a.values[t]=o,a[r]=o}function L(e){if(e===null)return"null";var r=typeof e;return r==="object"||r==="array"||r==="function"?e.toString():""+e}function Bt(e,r){switch(r){case 2:return function(t){return this.fromWireType(Je[t>>2])};case 3:return function(t){return this.fromWireType(Ye[t>>3])};default:throw new TypeError("Unknown float type: "+e)}}function qt(e,r,t){var n=ve(t);W(e,{name:r=v(r),fromWireType:function(a){return a},toWireType:function(a,o){if(typeof o!="number"&&typeof o!="boolean")throw new TypeError('Cannot convert "'+L(o)+'" to '+this.name);return o},argPackAdvance:8,readValueFromPointer:Bt(r,n),destructorFunction:null})}function Nt(e,r,t,n,a,o){var s=xe(r,t);e=v(e),a=_(n,a),Fe(e,function(){be("Cannot call "+e+" due to unbound types",s)},r-1),F([],s,function(u){var l=[u[0],null].concat(u.slice(1));return hr(e,gr(e,l,null,a,o),r-1),[]})}function Gt(e,r,t){switch(r){case 0:return t?function(n){return fe[n]}:function(n){return b[n]};case 1:return t?function(n){return U[n>>1]}:function(n){return ee[n>>1]};case 2:return t?function(n){return g[n>>2]}:function(n){return P[n>>2]};default:throw new TypeError("Unknown integer type: "+e)}}function Lt(e,r,t,n,a){r=v(r),a===-1&&(a=4294967295);var o=ve(t),s=function(c){return c};if(n===0){var u=32-8*t;s=function(c){return c<<u>>>u}}var l=r.indexOf("unsigned")!=-1;W(e,{name:r,fromWireType:s,toWireType:function(c,f){if(typeof f!="number"&&typeof f!="boolean")throw new TypeError('Cannot convert "'+L(f)+'" to '+this.name);if(f<n||f>a)throw new TypeError('Passing a number "'+L(f)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+n+", "+a+"]!");return l?f>>>0:0|f},argPackAdvance:8,readValueFromPointer:Gt(r,o,n!==0),destructorFunction:null})}function Xt(e,r,t){var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function a(o){var s=P,u=s[o>>=2],l=s[o+1];return new n(B,l,u)}W(e,{name:t=v(t),fromWireType:a,argPackAdvance:8,readValueFromPointer:a},{ignoreDuplicateRegistrations:!0})}function Jt(e,r){var t=(r=v(r))==="std::string";W(e,{name:r,fromWireType:function(n){var a,o=P[n>>2];if(t)for(var s=n+4,u=0;u<=o;++u){var l=n+4+u;if(u==o||b[l]==0){var c=Le(s,l-s);a===void 0?a=c:(a+=String.fromCharCode(0),a+=c),s=l+1}}else{var f=new Array(o);for(u=0;u<o;++u)f[u]=String.fromCharCode(b[n+4+u]);a=f.join("")}return j(n),a},toWireType:function(n,a){a instanceof ArrayBuffer&&(a=new Uint8Array(a));var o=typeof a=="string";o||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int8Array||p("Cannot pass non-string to std::string");var s=(t&&o?function(){return Fr(a)}:function(){return a.length})(),u=Me(4+s+1);if(P[u>>2]=s,t&&o)kr(a,u+4,s+1);else if(o)for(var l=0;l<s;++l){var c=a.charCodeAt(l);c>255&&(j(u),p("String has UTF-16 code units that do not fit in 8 bits")),b[u+4+l]=c}else for(l=0;l<s;++l)b[u+4+l]=a[l];return n!==null&&n.push(j,u),u},argPackAdvance:8,readValueFromPointer:te,destructorFunction:function(n){j(n)}})}function Yt(e,r,t){var n,a,o,s,u;t=v(t),r===2?(n=Rr,a=xr,s=Dr,o=function(){return ee},u=1):r===4&&(n=Ir,a=Ur,s=Mr,o=function(){return P},u=2),W(e,{name:t,fromWireType:function(l){for(var c,f=P[l>>2],h=o(),d=l+4,m=0;m<=f;++m){var $=l+4+m*r;if(m==f||h[$>>u]==0){var y=n(d,$-d);c===void 0?c=y:(c+=String.fromCharCode(0),c+=y),d=$+r}}return j(l),c},toWireType:function(l,c){typeof c!="string"&&p("Cannot pass non-string to C++ string type "+t);var f=s(c),h=Me(4+f+r);return P[h>>2]=f>>u,a(c,h+4,f+r),l!==null&&l.push(j,h),h},argPackAdvance:8,readValueFromPointer:te,destructorFunction:function(l){j(l)}})}function Zt(e,r,t,n,a,o){de[e]={name:v(r),rawConstructor:_(t,n),rawDestructor:_(a,o),fields:[]}}function Kt(e,r,t,n,a,o,s,u,l,c){de[e].fields.push({fieldName:v(r),getterReturnType:t,getter:_(n,a),getterContext:o,setterArgumentType:s,setter:_(u,l),setterContext:c})}function Qt(e,r){W(e,{isVoid:!0,name:r=v(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(t,n){}})}function ue(e){return e||p("Cannot use deleted val. handle = "+e),w[e].value}function en(e,r,t){e=ue(e),r=$e(r,"emval::as");var n=[],a=O(n);return g[t>>2]=a,r.toWireType(n,e)}var rn={};function Ce(e){var r=rn[e];return r===void 0?v(e):r}var Ue=[];function tn(e,r,t,n){(e=Ue[e])(r=ue(r),t=Ce(t),null,n)}function br(){if(typeof globalThis=="object")return globalThis;function e(r){r.$$$embind_global$$$=r;var t=typeof $$$embind_global$$$=="object"&&r.$$$embind_global$$$===r;return t||delete r.$$$embind_global$$$,t}if(typeof $$$embind_global$$$=="object"||(typeof ze=="object"&&e(ze)?$$$embind_global$$$=ze:typeof self=="object"&&e(self)&&($$$embind_global$$$=self),typeof $$$embind_global$$$=="object"))return $$$embind_global$$$;throw Error("unable to get global object.")}function nn(e){return e===0?O(br()):(e=Ce(e),O(br()[e]))}function an(e){var r=Ue.length;return Ue.push(e),r}function on(e,r){for(var t=new Array(e),n=0;n<e;++n)t[n]=$e(g[(r>>2)+n],"parameter "+n);return t}function un(e,r){var t=on(e,r),n=t[0],a=new Array(e-1);return an(function(o,s,u,l){for(var c=0,f=0;f<e-1;++f)a[f]=t[f+1].readValueFromPointer(l+c),c+=t[f+1].argPackAdvance;var h=o[s].apply(o,a);for(f=0;f<e-1;++f)t[f+1].deleteObject&&t[f+1].deleteObject(a[f]);if(!n.isVoid)return n.toWireType(u,h)})}function sn(e){return e=Ce(e),O(i[e])}function ln(e,r){return O((e=ue(e))[r=ue(r)])}function cn(e){e>4&&(w[e].refcount+=1)}function fn(e){var r=new Array(e+1);return function(t,n,a){r[0]=t;for(var o=0;o<e;++o){var s=$e(g[(n>>2)+o],"parameter "+o);r[o+1]=s.readValueFromPointer(a),a+=s.argPackAdvance}return O(new(t.bind.apply(t,r)))}}var $r={};function pn(e,r,t,n){e=ue(e);var a=$r[r];return a||(a=fn(r),$r[r]=a),a(e,t,n)}function dn(e){return O(Ce(e))}function yn(e){ye(w[e].value),Ie(e)}function hn(){q()}function mn(e,r,t){b.copyWithin(e,r,r+t)}function vn(){return b.length}function gn(e){try{return Q.grow(e-B.byteLength+65535>>>16),Ke(Q.buffer),1}catch{}}function bn(e){e>>>=0;var r=vn(),t=65536,n=2147483648;if(e>n)return!1;for(var a=16777216,o=1;o<=4;o*=2){var s=r*(1+.2/o);if(s=Math.min(s,e+100663296),gn(Math.min(n,Vr(Math.max(a,e,s),t))))return!0}return!1}var we={mappings:{},buffers:[null,[],[]],printChar:function(e,r){var t=we.buffers[e];r===0||r===10?((e===1?Sr:H)(Ge(t,0)),t.length=0):t.push(r)},varargs:void 0,get:function(){return we.varargs+=4,g[we.varargs-4>>2]},getStr:function(e){return Le(e)},get64:function(e,r){return e}};function $n(e){return 0}function Cn(e,r,t,n,a){}function wn(e,r,t,n){for(var a=0,o=0;o<t;o++){for(var s=g[r+8*o>>2],u=g[r+(8*o+4)>>2],l=0;l<u;l++)we.printChar(e,b[s+l]);a+=u}return g[n>>2]=a,0}function Tn(e){return(e=+e)>=0?+Zr(e+.5):+Yr(e-.5)}function _n(e){}sr=i.InternalError=Se(Error,"InternalError"),ut(),G=i.BindingError=Se(Error,"BindingError"),mt(),jt(),Wt(),mr=i.UnboundTypeError=Se(Error,"UnboundTypeError"),Ut();var Pn={u:ot,J:st,y:kt,x:Ft,d:Rt,k:xt,I:Mt,n:zt,a:Ht,B:qt,i:Nt,j:Lt,h:Xt,C:Jt,w:Yt,v:Zt,c:Kt,K:Qt,m:en,s:tn,b:Ie,z:nn,t:un,r:sn,e:ln,g:cn,q:pn,f:dn,l:yn,p:hn,F:mn,G:bn,H:$n,D:Cn,A:wn,memory:Q,o:Tn,E:_n,table:Or};nt();var Te,Cr=i.___wasm_call_ctors=function(){return(Cr=i.___wasm_call_ctors=i.asm.L).apply(null,arguments)},Me=i._malloc=function(){return(Me=i._malloc=i.asm.M).apply(null,arguments)},j=i._free=function(){return(j=i._free=i.asm.N).apply(null,arguments)},wr=i.___getTypeName=function(){return(wr=i.___getTypeName=i.asm.O).apply(null,arguments)};function An(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function Ve(e){function r(){Te||(Te=!0,i.calledRun=!0,qe||(Nr(),Gr(),Y(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),Lr()))}M>0||(qr(),M>0||(i.setStatus?(i.setStatus("Running..."),setTimeout(function(){setTimeout(function(){i.setStatus("")},1),r()},1)):r()))}if(i.___embind_register_native_and_builtin_types=function(){return(i.___embind_register_native_and_builtin_types=i.asm.P).apply(null,arguments)},i.dynCall_viii=function(){return(i.dynCall_viii=i.asm.Q).apply(null,arguments)},i.dynCall_vi=function(){return(i.dynCall_vi=i.asm.R).apply(null,arguments)},i.dynCall_v=function(){return(i.dynCall_v=i.asm.S).apply(null,arguments)},i.dynCall_i=function(){return(i.dynCall_i=i.asm.T).apply(null,arguments)},i.dynCall_iii=function(){return(i.dynCall_iii=i.asm.U).apply(null,arguments)},i.dynCall_ii=function(){return(i.dynCall_ii=i.asm.V).apply(null,arguments)},i.dynCall_vii=function(){return(i.dynCall_vii=i.asm.W).apply(null,arguments)},i.dynCall_iiii=function(){return(i.dynCall_iiii=i.asm.X).apply(null,arguments)},i.dynCall_iiiii=function(){return(i.dynCall_iiiii=i.asm.Y).apply(null,arguments)},i.dynCall_iiiiii=function(){return(i.dynCall_iiiiii=i.asm.Z).apply(null,arguments)},i.dynCall_iiiiiiii=function(){return(i.dynCall_iiiiiiii=i.asm._).apply(null,arguments)},i.dynCall_iiiiiiiii=function(){return(i.dynCall_iiiiiiiii=i.asm.$).apply(null,arguments)},i.dynCall_viiii=function(){return(i.dynCall_viiii=i.asm.aa).apply(null,arguments)},i.dynCall_iiiiiii=function(){return(i.dynCall_iiiiiii=i.asm.ba).apply(null,arguments)},i.dynCall_iiiiiiiiiiiiiiiiiiii=function(){return(i.dynCall_iiiiiiiiiiiiiiiiiiii=i.asm.ca).apply(null,arguments)},i.dynCall_iiiiiiiiiiiiiiiiiiiii=function(){return(i.dynCall_iiiiiiiiiiiiiiiiiiiii=i.asm.da).apply(null,arguments)},i.dynCall_iiiiiiiiiiiiiiiiiii=function(){return(i.dynCall_iiiiiiiiiiiiiiiiiii=i.asm.ea).apply(null,arguments)},i.dynCall_viiiii=function(){return(i.dynCall_viiiii=i.asm.fa).apply(null,arguments)},i.dynCall_iiiiiiiiii=function(){return(i.dynCall_iiiiiiiiii=i.asm.ga).apply(null,arguments)},i.dynCall_iiiiiiiiiii=function(){return(i.dynCall_iiiiiiiiiii=i.asm.ha).apply(null,arguments)},i.dynCall_jiji=function(){return(i.dynCall_jiji=i.asm.ia).apply(null,arguments)},i.dynCall_viiiiii=function(){return(i.dynCall_viiiiii=i.asm.ja).apply(null,arguments)},re=function e(){Te||Ve(),Te||(re=e)},i.run=Ve,i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return Ve(),k.ready},Ar.exports=Wr;const Sn=He.exports,jn=Object.freeze(En({__proto__:null,default:Sn},[He.exports]));export{jn as b};
