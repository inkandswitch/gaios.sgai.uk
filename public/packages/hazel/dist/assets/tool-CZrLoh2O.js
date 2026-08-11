import{u as k,r as c}from"./index-DO_DOM7Z.js";var m={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=Symbol.for("react.transitional.element"),w=Symbol.for("react.fragment");function x(l,e,t){var s=null;if(t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),"key"in e){t={};for(var r in e)r!=="key"&&(t[r]=e[r])}else t=e;return e=t.ref,{$$typeof:v,type:l,key:s,ref:e!==void 0?e:null,props:t}}i.Fragment=w;i.jsx=x;i.jsxs=x;m.exports=i;var f=m.exports;const j="https://hazel.org/build/patchwork/?name=Patchwork",T=({docUrl:l})=>{const e=k(l,{suspense:!0}),t=c.useRef(null),s=c.useCallback(a=>{var o,n;(n=(o=t.current)==null?void 0:o.contentWindow)==null||n.postMessage(a,"*")},[]);c.useEffect(()=>{const a=o=>{var p,h;if(!t.current||o.source!==t.current.contentWindow||(h=(p=o.data)==null?void 0:p.source)!=null&&h.includes("react"))return;const n=o.data;switch(n.t){case"init":s({t:"state",state:e.doc()});break;case"ping":s({t:"pong",message:"Pong from Patchwork!"});break;case"state":e.change(u=>{u.title=n.state.title;for(const[d,E]of Object.entries(n.state.pieces))u.pieces[d]=E;for(const d of n.deleted??[])delete u.pieces[d]});break}};return window.addEventListener("message",a),()=>window.removeEventListener("message",a)},[e,s]);const r=e.doc();return c.useEffect(()=>{r&&s({t:"state",state:r})},[r,s]),r?f.jsx("div",{className:"hazel",children:f.jsx("div",{className:"hazel-embed-container",children:f.jsx("iframe",{ref:t,src:j,style:{width:"100%",height:"100%",border:"none"}})})}):null};export{T as Tool};
