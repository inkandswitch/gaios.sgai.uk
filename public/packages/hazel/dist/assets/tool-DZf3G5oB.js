import{u as v,r as c}from"./index-CHNVpsdO.js";var E={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w=Symbol.for("react.transitional.element"),j=Symbol.for("react.fragment");function h(l,e,t){var s=null;if(t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),"key"in e){t={};for(var r in e)r!=="key"&&(t[r]=e[r])}else t=e;return e=t.ref,{$$typeof:w,type:l,key:s,ref:e!==void 0?e:null,props:t}}u.Fragment=j;u.jsx=h;u.jsxs=h;E.exports=u;var p=E.exports;const R="https://hazel.org/build/patchwork/?name=Patchwork",g=({docUrl:l})=>{const[e,t]=v(l,{suspense:!0}),s=c.useRef(null),r=c.useRef(e);r.current=e;const o=c.useCallback(i=>{var a,n;(n=(a=s.current)==null?void 0:a.contentWindow)==null||n.postMessage(i,"*")},[]);return c.useEffect(()=>{const i=a=>{var m,x;if(!s.current||a.source!==s.current.contentWindow||(x=(m=a.data)==null?void 0:m.source)!=null&&x.includes("react"))return;const n=a.data;switch(n.t){case"init":r.current&&o({t:"state",state:r.current});break;case"ping":o({t:"pong",message:"Pong from Patchwork!"});break;case"state":t(d=>{d.title=n.state.title;for(const[f,k]of Object.entries(n.state.pieces))d.pieces[f]=k;for(const f of n.deleted??[])delete d.pieces[f]});break}};return window.addEventListener("message",i),()=>window.removeEventListener("message",i)},[t,o]),c.useEffect(()=>{e&&o({t:"state",state:e})},[e,o]),e?p.jsx("div",{className:"hazel",children:p.jsx("div",{className:"hazel-embed-container",children:p.jsx("iframe",{ref:s,src:R,style:{width:"100%",height:"100%",border:"none"}})})}):null};export{g as Tool};
