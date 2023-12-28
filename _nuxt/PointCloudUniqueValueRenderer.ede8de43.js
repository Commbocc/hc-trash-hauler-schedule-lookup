import{q as e,u as t,x as n,aP as K,d8 as b,d7 as A,e7 as q,dj as B,e8 as z,e9 as M,N as v,h as r}from"./entry.a426b012.js";var k=Object.defineProperty,F=Object.defineProperties,U=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,R=(o,i,l)=>i in o?k(o,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[i]=l,_=(o,i)=>{for(var l in i||(i={}))W.call(i,l)&&R(o,l,i[l]);if(N)for(var l of N(i))E.call(i,l)&&R(o,l,i[l]);return o},D=(o,i)=>F(o,U(i)),j;let f=j=class extends v{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new j({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};e([t({type:String,json:{write:!0}})],f.prototype,"field",void 0),e([t({type:Number,nonNullable:!0,json:{write:!0}})],f.prototype,"minValue",void 0),e([t({type:Number,nonNullable:!0,json:{write:!0}})],f.prototype,"maxValue",void 0),f=j=e([n("esri.renderers.support.pointCloud.ColorModulation")],f);const G=f,T=new K({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let w=class extends v{};e([t({type:T.apiValues,readOnly:!0,nonNullable:!0,json:{type:T.jsonValues,read:!1,write:T.write}})],w.prototype,"type",void 0),w=e([n("esri.renderers.support.pointCloud.PointSizeAlgorithm")],w);const I=w;var V;let h=V=class extends I{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new V({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};e([b({pointCloudFixedSizeAlgorithm:"fixed-size"})],h.prototype,"type",void 0),e([t({type:Number,nonNullable:!0,json:{write:!0}})],h.prototype,"size",void 0),e([t({type:Boolean,json:{write:!0}})],h.prototype,"useRealWorldSymbolSizes",void 0),h=V=e([n("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],h);const Y=h;var S;let m=S=class extends I{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new S({scaleFactor:this.scaleFactor})}};e([b({pointCloudSplatAlgorithm:"splat"})],m.prototype,"type",void 0),e([t({type:Number,value:1,nonNullable:!0,json:{write:!0}})],m.prototype,"scaleFactor",void 0),m=S=e([n("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],m);const H=m,J={key:"type",base:I,typeMap:{"fixed-size":Y,splat:H}},g=A()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let p=class extends v{constructor(o){super(o),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:r(this.pointSizeAlgorithm),colorModulation:r(this.colorModulation),pointsPerInch:r(this.pointsPerInch)}}};e([t({type:g.apiValues,readOnly:!0,nonNullable:!0,json:{type:g.jsonValues,read:!1,write:g.write}})],p.prototype,"type",void 0),e([t({types:J,json:{write:!0}})],p.prototype,"pointSizeAlgorithm",void 0),e([t({type:G,json:{write:!0}})],p.prototype,"colorModulation",void 0),e([t({json:{write:!0},nonNullable:!0,type:Number})],p.prototype,"pointsPerInch",void 0),p=e([n("esri.renderers.PointCloudRenderer")],p),function(o){o.fieldTransformTypeKebabDict=new K({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"})}(p||(p={}));const s=p;var C;let a=C=class extends v{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new C({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:r(this.color)})}};e([t({type:String,json:{write:!0}})],a.prototype,"description",void 0),e([t({type:String,json:{write:!0}})],a.prototype,"label",void 0),e([t({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],a.prototype,"minValue",void 0),e([t({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],a.prototype,"maxValue",void 0),e([t({type:q,json:{type:[B],write:!0}})],a.prototype,"color",void 0),a=C=e([n("esri.renderers.support.pointCloud.ColorClassBreakInfo")],a);const L=a;var $;let u=$=class extends s{constructor(o){super(o),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new $(D(_({},this.cloneProperties()),{field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:r(this.colorClassBreakInfos),legendOptions:r(this.legendOptions)}))}};e([b({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],u.prototype,"type",void 0),e([t({json:{write:!0},type:String})],u.prototype,"field",void 0),e([t({type:z,json:{write:!0}})],u.prototype,"legendOptions",void 0),e([t({type:s.fieldTransformTypeKebabDict.apiValues,json:{type:s.fieldTransformTypeKebabDict.jsonValues,read:s.fieldTransformTypeKebabDict.read,write:s.fieldTransformTypeKebabDict.write}})],u.prototype,"fieldTransformType",void 0),e([t({type:[L],json:{write:!0}})],u.prototype,"colorClassBreakInfos",void 0),u=$=e([n("esri.renderers.PointCloudClassBreaksRenderer")],u);const Z=u;var x;let d=x=class extends s{constructor(o){super(o),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new x(D(_({},this.cloneProperties()),{field:r(this.field),fieldTransformType:r(this.fieldTransformType),stops:r(this.stops),legendOptions:r(this.legendOptions)}))}};e([b({pointCloudStretchRenderer:"point-cloud-stretch"})],d.prototype,"type",void 0),e([t({json:{write:!0},type:String})],d.prototype,"field",void 0),e([t({type:z,json:{write:!0}})],d.prototype,"legendOptions",void 0),e([t({type:s.fieldTransformTypeKebabDict.apiValues,json:{type:s.fieldTransformTypeKebabDict.jsonValues,read:s.fieldTransformTypeKebabDict.read,write:s.fieldTransformTypeKebabDict.write}})],d.prototype,"fieldTransformType",void 0),e([t({type:[M],json:{write:!0}})],d.prototype,"stops",void 0),d=x=e([n("esri.renderers.PointCloudStretchRenderer")],d);const ee=d;var P;let y=P=class extends v{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new P({description:this.description,label:this.label,values:r(this.values),color:r(this.color)})}};e([t({type:String,json:{write:!0}})],y.prototype,"description",void 0),e([t({type:String,json:{write:!0}})],y.prototype,"label",void 0),e([t({type:[String],json:{write:!0}})],y.prototype,"values",void 0),e([t({type:q,json:{type:[B],write:!0}})],y.prototype,"color",void 0),y=P=e([n("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],y);const Q=y;var O;let c=O=class extends s{constructor(o){super(o),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new O(D(_({},this.cloneProperties()),{field:r(this.field),fieldTransformType:r(this.fieldTransformType),colorUniqueValueInfos:r(this.colorUniqueValueInfos),legendOptions:r(this.legendOptions)}))}};e([b({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],c.prototype,"type",void 0),e([t({json:{write:!0},type:String})],c.prototype,"field",void 0),e([t({type:s.fieldTransformTypeKebabDict.apiValues,json:{type:s.fieldTransformTypeKebabDict.jsonValues,read:s.fieldTransformTypeKebabDict.read,write:s.fieldTransformTypeKebabDict.write}})],c.prototype,"fieldTransformType",void 0),e([t({type:[Q],json:{write:!0}})],c.prototype,"colorUniqueValueInfos",void 0),e([t({type:z,json:{write:!0}})],c.prototype,"legendOptions",void 0),c=O=e([n("esri.renderers.PointCloudUniqueValueRenderer")],c);const te=c;export{te as a,ee as b,s as c,Z as d};