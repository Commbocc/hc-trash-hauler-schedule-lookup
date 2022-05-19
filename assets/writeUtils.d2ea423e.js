import{u as s,r as o,l as u,ao as l,a6 as m}from"./index.2f57b5df.js";const p=new Set(["bing-maps","imagery","imagery-tile","map-image","open-street-map","tile","unknown","unsupported","vector-tile","web-tile","wms","wmts"]),c=new Set(["csv","feature","geo-rss","geojson","group","imagery","imagery-tile","kml","map-image","map-notes","ogc-feature","route","tile","unknown","unsupported","vector-tile","web-tile","wfs","wms","wmts"]);function y(e){return e.layerContainerType==="basemap"?p:e.layerContainerType==="operational-layers"?c:null}function r(e){return!(e.type!=="feature"||e.url||!e.source||e.source.type!=="memory")}function d(e,n){if(n.restrictedWebMapWriting){const t=y(n);return!o(t)||t.has(e.type)&&!r(e)}return!0}function f(e,n){if(r(e)){const t=m("featureCollection.layers",n),i=t&&t[0]&&t[0].layerDefinition;i&&a(e,i)}else e.type==="stream"?a(e,n.layerDefinition=n.layerDefinition||{}):e.type!=="group"&&a(e,n)}function a(e,n){"maxScale"in e&&(n.maxScale=l(e.maxScale)),"minScale"in e&&(n.minScale=l(e.minScale))}function g(e,n){if(f(e,n),"blendMode"in e&&(n.blendMode=e.blendMode,n.blendMode==="normal"&&delete n.blendMode),n.opacity=l(e.opacity),n.title=e.title||"Layer",n.visibility=e.visible,"legendEnabled"in e&&e.type!=="wmts")if(r(e)){const t=n.featureCollection;t&&(t.showLegend=e.legendEnabled)}else n.showLegend=e.legendEnabled}function b(e,n,t){if(!("write"in e)||!e.write)return t&&t.messages&&t.messages.push(new s("layer:unsupported",`Layers (${e.title}, ${e.id}) of type '${e.declaredClass}' cannot be persisted`,{layer:e})),null;if(d(e,t)){const i={};return e.write(i,t)?i:null}return o(n)&&g(e,n=u(n)),n}export{b as y};
