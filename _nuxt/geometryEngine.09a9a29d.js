import{G as r}from"./geometryEngineBase.00185eb7.js";import{hydratedAdapter as i}from"./hydrated.855c8375.js";import"./entry.a426b012.js";function u(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function g(e){return r.extendedSpatialReferenceInfo(e)}function d(e,n){return r.clip(i,u(e),e,n)}function m(e,n){return r.cut(i,u(e),e,n)}function x(e,n){return r.contains(i,u(e),e,n)}function h(e,n){return r.crosses(i,u(e),e,n)}function w(e,n,t){return r.distance(i,u(e),e,n,t)}function A(e,n){return r.equals(i,u(e),e,n)}function E(e,n){return r.intersects(i,u(e),e,n)}function y(e,n){return r.touches(i,u(e),e,n)}function R(e,n){return r.within(i,u(e),e,n)}function I(e,n){return r.disjoint(i,u(e),e,n)}function v(e,n){return r.overlaps(i,u(e),e,n)}function S(e,n,t){return r.relate(i,u(e),e,n,t)}function V(e){return r.isSimple(i,u(e),e)}function z(e){return r.simplify(i,u(e),e)}function D(e,n=!1){return r.convexHull(i,u(e),e,n)}function H(e,n){return r.difference(i,u(e),e,n)}function L(e,n){return r.symmetricDifference(i,u(e),e,n)}function J(e,n){return r.intersect(i,u(e),e,n)}function N(e,n=null){return r.union(i,u(e),e,n)}function O(e,n,t,o,a,s){return r.offset(i,u(e),e,n,t,o,a,s)}function b(e,n,t,o=!1){return r.buffer(i,u(e),e,n,t,o)}function j(e,n,t,o,a,s){return r.geodesicBuffer(i,u(e),e,n,t,o,a,s)}function q(e,n,t=!0){return r.nearestCoordinate(i,u(e),e,n,t)}function B(e,n){return r.nearestVertex(i,u(e),e,n)}function C(e,n,t,o){return r.nearestVertices(i,u(e),e,n,t,o)}function c(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent.center:null}function $(e,n,t){var o;if(e==null)throw new Error("Illegal Argument Exception");const a=e.spatialReference;if((t=(o=t)!=null?o:c(e))==null)throw new Error("Illegal Argument Exception");const s=e.constructor.fromJSON(r.rotate(e,n,t));return s.spatialReference=a,s}function k(e,n){var t;if(e==null)throw new Error("Illegal Argument Exception");const o=e.spatialReference;if((n=(t=n)!=null?t:c(e))==null)throw new Error("Illegal Argument Exception");const a=e.constructor.fromJSON(r.flipHorizontal(e,n));return a.spatialReference=o,a}function G(e,n){var t;if(e==null)throw new Error("Illegal Argument Exception");const o=e.spatialReference;if((n=(t=n)!=null?t:c(e))==null)throw new Error("Illegal Argument Exception");const a=e.constructor.fromJSON(r.flipVertical(e,n));return a.spatialReference=o,a}function F(e,n,t,o){return r.generalize(i,u(e),e,n,t,o)}function K(e,n,t){return r.densify(i,u(e),e,n,t)}function M(e,n,t,o=0){return r.geodesicDensify(i,u(e),e,n,t,o)}function P(e,n){return r.planarArea(i,u(e),e,n)}function Q(e,n){return r.planarLength(i,u(e),e,n)}function T(e,n,t){return r.geodesicArea(i,u(e),e,n,t)}function U(e,n,t){return r.geodesicLength(i,u(e),e,n,t)}export{b as buffer,d as clip,x as contains,D as convexHull,h as crosses,m as cut,K as densify,H as difference,I as disjoint,w as distance,A as equals,g as extendedSpatialReferenceInfo,k as flipHorizontal,G as flipVertical,F as generalize,T as geodesicArea,j as geodesicBuffer,M as geodesicDensify,U as geodesicLength,J as intersect,E as intersects,V as isSimple,q as nearestCoordinate,B as nearestVertex,C as nearestVertices,O as offset,v as overlaps,P as planarArea,Q as planarLength,S as relate,$ as rotate,z as simplify,L as symmetricDifference,y as touches,N as union,R as within};