import{createContext as ze,useContext as Fr,createSignal as xr,createEffect as Br,createMemo as tt}from"solid-js";import{_ as $r,g as zr,o as Hr,p as Gr,b as Vr}from"./notebook-DqLO4fFe.js";import{createStore as Wr,reconcile as jr}from"solid-js/store";import"@automerge/automerge-repo";import"@automerge/automerge-repo-network-websocket";import"@automerge/automerge-repo-storage-indexeddb";const y_=ze(),qr=""+new URL("catlog_wasm_bg.wasm",import.meta.url).href;let o;function Jr(t){o=t}function G(t){const e=o.__externref_table_alloc();return o.__wbindgen_externrefs.set(e,t),e}function g(t,e){if(!(t instanceof e))throw new Error(`expected instance of ${e.name}`)}function Re(t){const e=typeof t;if(e=="number"||e=="boolean"||t==null)return`${t}`;if(e=="string")return`"${t}"`;if(e=="symbol"){const i=t.description;return i==null?"Symbol":`Symbol(${i})`}if(e=="function"){const i=t.name;return typeof i=="string"&&i.length>0?`Function(${i})`:"Function"}if(Array.isArray(t)){const i=t.length;let s="[";i>0&&(s+=Re(t[0]));for(let a=1;a<i;a++)s+=", "+Re(t[a]);return s+="]",s}const r=/\[object ([^\]]+)\]/.exec(toString.call(t));let n;if(r&&r.length>1)n=r[1];else return toString.call(t);if(n=="Object")try{return"Object("+JSON.stringify(t)+")"}catch{return"Object"}return t instanceof Error?`${t.name}: ${t.message}
${t.stack}`:n}function E(t,e){t=t>>>0;const r=I(),n=[];for(let i=t;i<t+4*e;i+=4)n.push(o.__wbindgen_externrefs.get(r.getUint32(i,!0)));return o.__externref_drop_slice(t,e),n}function nr(t,e){return t=t>>>0,j().subarray(t/1,t/1+e)}let B=null;function I(){return(B===null||B.buffer.detached===!0||B.buffer.detached===void 0&&B.buffer!==o.memory.buffer)&&(B=new DataView(o.memory.buffer)),B}function V(t,e){return t=t>>>0,Yr(t,e)}let ie=null;function j(){return(ie===null||ie.byteLength===0)&&(ie=new Uint8Array(o.memory.buffer)),ie}function fe(t,e){try{return t.apply(this,e)}catch(r){const n=G(r);o.__wbindgen_exn_store(n)}}function O(t){return t==null}function Kr(t,e){const r=e(t.length*4,4)>>>0;for(let n=0;n<t.length;n++){const i=G(t[n]);I().setUint32(r+4*n,i,!0)}return S=t.length,r}function k(t,e,r){if(r===void 0){const d=q.encode(t),_=e(d.length,1)>>>0;return j().subarray(_,_+d.length).set(d),S=d.length,_}let n=t.length,i=e(n,1)>>>0;const s=j();let a=0;for(;a<n;a++){const d=t.charCodeAt(a);if(d>127)break;s[i+a]=d}if(a!==n){a!==0&&(t=t.slice(a)),i=r(i,n,n=a+t.length*3,1)>>>0;const d=j().subarray(i+a,i+n),_=q.encodeInto(t,d);a+=_.written,i=r(i,n,a,1)>>>0}return S=a,i}function h(t){const e=o.__wbindgen_externrefs.get(t);return o.__externref_table_dealloc(t),e}let oe=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});oe.decode();const Xr=2146435072;let ve=0;function Yr(t,e){return ve+=e,ve>=Xr&&(oe=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),oe.decode(),ve=e),oe.decode(j().subarray(t,t+e))}const q=new TextEncoder;"encodeInto"in q||(q.encodeInto=function(t,e){const r=q.encode(t);return e.set(r),{read:t.length,written:r.length}});let S=0;const rt=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>o.__wbg_dblmodel_free(t>>>0,1)),nt=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>o.__wbg_dblmodeldiagram_free(t>>>0,1)),it=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>o.__wbg_dblmodelmap_free(t>>>0,1)),st=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>o.__wbg_dbltheory_free(t>>>0,1)),ot=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>o.__wbg_mortypeindex_free(t>>>0,1)),at=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>o.__wbg_obtypeindex_free(t>>>0,1)),ct=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>o.__wbg_thcategory_free(t>>>0,1)),_t=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>o.__wbg_thcategorylinks_free(t>>>0,1)),dt=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>o.__wbg_thcategorysignedlinks_free(t>>>0,1)),lt=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>o.__wbg_thcategorywithscalars_free(t>>>0,1)),ht=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>o.__wbg_thdelayablesignedcategory_free(t>>>0,1)),ut=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>o.__wbg_thempty_free(t>>>0,1)),ft=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>o.__wbg_thnullablesignedcategory_free(t>>>0,1)),gt=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>o.__wbg_thpolynomialode_free(t>>>0,1)),pt=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>o.__wbg_thpowersystem_free(t>>>0,1)),bt=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>o.__wbg_thschema_free(t>>>0,1)),yt=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>o.__wbg_thsignedcategory_free(t>>>0,1)),mt=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>o.__wbg_thsignedpolynomialode_free(t>>>0,1)),wt=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>o.__wbg_thsymmonoidalcategory_free(t>>>0,1));class u{static __wrap(e){e=e>>>0;const r=Object.create(u.prototype);return r.__wbg_ptr=e,rt.register(r,r.__wbg_ptr,r),r}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,rt.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_dblmodel_free(e,0)}presentation(){return o.dblmodel_presentation(this.__wbg_ptr)}obGenerators(){const e=o.dblmodel_obGenerators(this.__wbg_ptr);var r=E(e[0],e[1]).slice();return o.__wbindgen_free(e[0],e[1]*4,4),r}morGenerators(){const e=o.dblmodel_morGenerators(this.__wbg_ptr);var r=E(e[0],e[1]).slice();return o.__wbindgen_free(e[0],e[1]*4,4),r}obPresentation(e){return o.dblmodel_obPresentation(this.__wbg_ptr,e)}morPresentation(e){return o.dblmodel_morPresentation(this.__wbg_ptr,e)}obGeneratorLabel(e){return o.dblmodel_obGeneratorLabel(this.__wbg_ptr,e)}compositionPattern(){return o.dblmodel_compositionPattern(this.__wbg_ptr)}morGeneratorLabel(e){return o.dblmodel_morGeneratorLabel(this.__wbg_ptr,e)}obGeneratorWithLabel(e){return o.dblmodel_obGeneratorWithLabel(this.__wbg_ptr,e)}obGeneratorsWithType(e){const r=o.dblmodel_obGeneratorsWithType(this.__wbg_ptr,e);if(r[3])throw h(r[2]);var n=E(r[0],r[1]).slice();return o.__wbindgen_free(r[0],r[1]*4,4),n}morGeneratorWithLabel(e){return o.dblmodel_morGeneratorWithLabel(this.__wbg_ptr,e)}morGeneratorsWithType(e){const r=o.dblmodel_morGeneratorsWithType(this.__wbg_ptr,e);if(r[3])throw h(r[2]);var n=E(r[0],r[1]).slice();return o.__wbindgen_free(r[0],r[1]*4,4),n}cod(e){const r=o.dblmodel_cod(this.__wbg_ptr,e);if(r[2])throw h(r[1]);return h(r[0])}dom(e){const r=o.dblmodel_dom(this.__wbg_ptr,e);if(r[2])throw h(r[1]);return h(r[0])}hasOb(e){const r=o.dblmodel_hasOb(this.__wbg_ptr,e);if(r[2])throw h(r[1]);return r[0]!==0}hasMor(e){const r=o.dblmodel_hasMor(this.__wbg_ptr,e);if(r[2])throw h(r[1]);return r[0]!==0}obType(e){const r=o.dblmodel_obType(this.__wbg_ptr,e);if(r[2])throw h(r[1]);return h(r[0])}morType(e){const r=o.dblmodel_morType(this.__wbg_ptr,e);if(r[2])throw h(r[1]);return h(r[0])}validate(){return o.dblmodel_validate(this.__wbg_ptr)}}Symbol.dispose&&(u.prototype[Symbol.dispose]=u.prototype.free);class Y{static __wrap(e){e=e>>>0;const r=Object.create(Y.prototype);return r.__wbg_ptr=e,nt.register(r,r.__wbg_ptr,r),r}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,nt.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_dblmodeldiagram_free(e,0)}validateIn(e){g(e,u);const r=o.dblmodeldiagram_validateIn(this.__wbg_ptr,e.__wbg_ptr);if(r[2])throw h(r[1]);return h(r[0])}presentation(){return o.dblmodeldiagram_presentation(this.__wbg_ptr)}obGenerators(){const e=o.dblmodeldiagram_obGenerators(this.__wbg_ptr);var r=E(e[0],e[1]).slice();return o.__wbindgen_free(e[0],e[1]*4,4),r}morGenerators(){const e=o.dblmodeldiagram_morGenerators(this.__wbg_ptr);var r=E(e[0],e[1]).slice();return o.__wbindgen_free(e[0],e[1]*4,4),r}obPresentation(e){return o.dblmodeldiagram_obPresentation(this.__wbg_ptr,e)}morPresentation(e){return o.dblmodeldiagram_morPresentation(this.__wbg_ptr,e)}inferMissingFrom(e){g(e,u);const r=o.dblmodeldiagram_inferMissingFrom(this.__wbg_ptr,e.__wbg_ptr);if(r[1])throw h(r[0])}obGeneratorLabel(e){return o.dblmodeldiagram_obGeneratorLabel(this.__wbg_ptr,e)}obGeneratorWithLabel(e){return o.dblmodeldiagram_obGeneratorWithLabel(this.__wbg_ptr,e)}obGeneratorsWithType(e){const r=o.dblmodeldiagram_obGeneratorsWithType(this.__wbg_ptr,e);if(r[3])throw h(r[2]);var n=E(r[0],r[1]).slice();return o.__wbindgen_free(r[0],r[1]*4,4),n}morGeneratorsWithType(e){const r=o.dblmodeldiagram_morGeneratorsWithType(this.__wbg_ptr,e);if(r[3])throw h(r[2]);var n=E(r[0],r[1]).slice();return o.__wbindgen_free(r[0],r[1]*4,4),n}obType(e){const r=o.dblmodeldiagram_obType(this.__wbg_ptr,e);if(r[2])throw h(r[1]);return h(r[0])}morType(e){const r=o.dblmodeldiagram_morType(this.__wbg_ptr,e);if(r[2])throw h(r[1]);return h(r[0])}}Symbol.dispose&&(Y.prototype[Symbol.dispose]=Y.prototype.free);class De{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,it.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_dblmodelmap_free(e,0)}has(e){const r=k(e,o.__wbindgen_malloc,o.__wbindgen_realloc),n=S;return o.dblmodelmap_has(this.__wbg_ptr,r,n)!==0}constructor(){const e=o.dblmodelmap_new();return this.__wbg_ptr=e>>>0,it.register(this,this.__wbg_ptr,this),this}set(e,r){const n=k(e,o.__wbindgen_malloc,o.__wbindgen_realloc),i=S;g(r,u),o.dblmodelmap_set(this.__wbg_ptr,n,i,r.__wbg_ptr)}}Symbol.dispose&&(De.prototype[Symbol.dispose]=De.prototype.free);class v{static __wrap(e){e=e>>>0;const r=Object.create(v.prototype);return r.__wbg_ptr=e,st.register(r,r.__wbg_ptr,r),r}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,st.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_dbltheory_free(e,0)}hasObType(e){const r=o.dbltheory_hasObType(this.__wbg_ptr,e);if(r[2])throw h(r[1]);return r[0]!==0}hasMorType(e){const r=o.dbltheory_hasMorType(this.__wbg_ptr,e);if(r[2])throw h(r[1]);return r[0]!==0}cod(e){const r=o.dbltheory_cod(this.__wbg_ptr,e);if(r[2])throw h(r[1]);return h(r[0])}dom(e){const r=o.dbltheory_dom(this.__wbg_ptr,e);if(r[2])throw h(r[1]);return h(r[0])}src(e){const r=o.dbltheory_src(this.__wbg_ptr,e);if(r[2])throw h(r[1]);return h(r[0])}tgt(e){const r=o.dbltheory_tgt(this.__wbg_ptr,e);if(r[2])throw h(r[1]);return h(r[0])}}Symbol.dispose&&(v.prototype[Symbol.dispose]=v.prototype.free);class vt{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,ot.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_mortypeindex_free(e,0)}has(e){return o.mortypeindex_has(this.__wbg_ptr,e)!==0}get(e){const r=o.mortypeindex_get(this.__wbg_ptr,e);return r===4294967297?void 0:r}constructor(){const e=o.mortypeindex_new();return this.__wbg_ptr=e>>>0,ot.register(this,this.__wbg_ptr,this),this}set(e,r){o.mortypeindex_set(this.__wbg_ptr,e,r)}}Symbol.dispose&&(vt.prototype[Symbol.dispose]=vt.prototype.free);class Et{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,at.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_obtypeindex_free(e,0)}has(e){return o.obtypeindex_has(this.__wbg_ptr,e)!==0}get(e){const r=o.obtypeindex_get(this.__wbg_ptr,e);return r===4294967297?void 0:r}constructor(){const e=o.obtypeindex_new();return this.__wbg_ptr=e>>>0,at.register(this,this.__wbg_ptr,this),this}set(e,r){o.obtypeindex_set(this.__wbg_ptr,e,r)}}Symbol.dispose&&(Et.prototype[Symbol.dispose]=Et.prototype.free);class It{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,ct.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_thcategory_free(e,0)}constructor(){const e=o.thcategory_new();return this.__wbg_ptr=e>>>0,ct.register(this,this.__wbg_ptr,this),this}theory(){const e=o.thcategory_theory(this.__wbg_ptr);return v.__wrap(e)}static toSchema(e,r){g(e,u),g(r,v);const n=o.thcategory_toSchema(e.__wbg_ptr,r.__wbg_ptr);if(n[2])throw h(n[1]);return u.__wrap(n[0])}}Symbol.dispose&&(It.prototype[Symbol.dispose]=It.prototype.free);class Tt{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,_t.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_thcategorylinks_free(e,0)}massAction(e,r){g(e,u);const n=o.thcategorylinks_massAction(this.__wbg_ptr,e.__wbg_ptr,r);if(n[2])throw h(n[1]);return h(n[0])}massActionEquations(e,r){g(e,u);const n=o.thcategorylinks_massActionEquations(this.__wbg_ptr,e.__wbg_ptr,r);if(n[2])throw h(n[1]);return h(n[0])}constructor(){const e=o.thcategorylinks_new();return this.__wbg_ptr=e>>>0,_t.register(this,this.__wbg_ptr,this),this}theory(){const e=o.thcategorylinks_theory(this.__wbg_ptr);return v.__wrap(e)}}Symbol.dispose&&(Tt.prototype[Symbol.dispose]=Tt.prototype.free);class At{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,dt.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_thcategorysignedlinks_free(e,0)}massAction(e,r){g(e,u);const n=o.thcategorysignedlinks_massAction(this.__wbg_ptr,e.__wbg_ptr,r);if(n[2])throw h(n[1]);return h(n[0])}massActionEquations(e,r){g(e,u);const n=o.thcategorysignedlinks_massActionEquations(this.__wbg_ptr,e.__wbg_ptr,r);if(n[2])throw h(n[1]);return h(n[0])}constructor(){const e=o.thcategorysignedlinks_new();return this.__wbg_ptr=e>>>0,dt.register(this,this.__wbg_ptr,this),this}theory(){const e=o.thcategorysignedlinks_theory(this.__wbg_ptr);return v.__wrap(e)}}Symbol.dispose&&(At.prototype[Symbol.dispose]=At.prototype.free);class St{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,lt.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_thcategorywithscalars_free(e,0)}constructor(){const e=o.thcategorywithscalars_new();return this.__wbg_ptr=e>>>0,lt.register(this,this.__wbg_ptr,this),this}theory(){const e=o.thcategorywithscalars_theory(this.__wbg_ptr);return v.__wrap(e)}}Symbol.dispose&&(St.prototype[Symbol.dispose]=St.prototype.free);class Ot{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,ht.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_thdelayablesignedcategory_free(e,0)}negativeLoops(e,r){g(e,u);const n=o.thdelayablesignedcategory_negativeLoops(this.__wbg_ptr,e.__wbg_ptr,r);if(n[3])throw h(n[2]);var i=E(n[0],n[1]).slice();return o.__wbindgen_free(n[0],n[1]*4,4),i}positiveLoops(e,r){g(e,u);const n=o.thdelayablesignedcategory_positiveLoops(this.__wbg_ptr,e.__wbg_ptr,r);if(n[3])throw h(n[2]);var i=E(n[0],n[1]).slice();return o.__wbindgen_free(n[0],n[1]*4,4),i}static toSignedCategory(e,r){g(e,u),g(r,v);const n=o.thdelayablesignedcategory_toSignedCategory(e.__wbg_ptr,r.__wbg_ptr);if(n[2])throw h(n[1]);return u.__wrap(n[0])}delayedNegativeLoops(e,r){g(e,u);const n=o.thdelayablesignedcategory_delayedNegativeLoops(this.__wbg_ptr,e.__wbg_ptr,r);if(n[3])throw h(n[2]);var i=E(n[0],n[1]).slice();return o.__wbindgen_free(n[0],n[1]*4,4),i}delayedPositiveLoops(e,r){g(e,u);const n=o.thdelayablesignedcategory_delayedPositiveLoops(this.__wbg_ptr,e.__wbg_ptr,r);if(n[3])throw h(n[2]);var i=E(n[0],n[1]).slice();return o.__wbindgen_free(n[0],n[1]*4,4),i}constructor(){const e=o.thdelayablesignedcategory_new();return this.__wbg_ptr=e>>>0,ht.register(this,this.__wbg_ptr,this),this}theory(){const e=o.thdelayablesignedcategory_theory(this.__wbg_ptr);return v.__wrap(e)}}Symbol.dispose&&(Ot.prototype[Symbol.dispose]=Ot.prototype.free);class Nt{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,ut.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_thempty_free(e,0)}constructor(){const e=o.thempty_new();return this.__wbg_ptr=e>>>0,ut.register(this,this.__wbg_ptr,this),this}theory(){const e=o.thempty_theory(this.__wbg_ptr);return v.__wrap(e)}}Symbol.dispose&&(Nt.prototype[Symbol.dispose]=Nt.prototype.free);class Rt{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,ft.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_thnullablesignedcategory_free(e,0)}negativeLoops(e,r){g(e,u);const n=o.thnullablesignedcategory_negativeLoops(this.__wbg_ptr,e.__wbg_ptr,r);if(n[3])throw h(n[2]);var i=E(n[0],n[1]).slice();return o.__wbindgen_free(n[0],n[1]*4,4),i}positiveLoops(e,r){g(e,u);const n=o.thnullablesignedcategory_positiveLoops(this.__wbg_ptr,e.__wbg_ptr,r);if(n[3])throw h(n[2]);var i=E(n[0],n[1]).slice();return o.__wbindgen_free(n[0],n[1]*4,4),i}indeterminateLoops(e,r){g(e,u);const n=o.thnullablesignedcategory_indeterminateLoops(this.__wbg_ptr,e.__wbg_ptr,r);if(n[3])throw h(n[2]);var i=E(n[0],n[1]).slice();return o.__wbindgen_free(n[0],n[1]*4,4),i}constructor(){const e=o.thnullablesignedcategory_new();return this.__wbg_ptr=e>>>0,ft.register(this,this.__wbg_ptr,this),this}theory(){const e=o.thnullablesignedcategory_theory(this.__wbg_ptr);return v.__wrap(e)}}Symbol.dispose&&(Rt.prototype[Symbol.dispose]=Rt.prototype.free);class Dt{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,gt.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_thpolynomialode_free(e,0)}polynomialODEEquations(e,r){g(e,u);const n=o.thpolynomialode_polynomialODEEquations(this.__wbg_ptr,e.__wbg_ptr,r);if(n[2])throw h(n[1]);return h(n[0])}polynomialODESimulation(e,r){g(e,u);const n=o.thpolynomialode_polynomialODESimulation(this.__wbg_ptr,e.__wbg_ptr,r);if(n[2])throw h(n[1]);return h(n[0])}constructor(){const e=o.thpolynomialode_new();return this.__wbg_ptr=e>>>0,gt.register(this,this.__wbg_ptr,this),this}theory(){const e=o.thpolynomialode_theory(this.__wbg_ptr);return v.__wrap(e)}}Symbol.dispose&&(Dt.prototype[Symbol.dispose]=Dt.prototype.free);class Ct{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,pt.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_thpowersystem_free(e,0)}constructor(){const e=o.thpowersystem_new();return this.__wbg_ptr=e>>>0,pt.register(this,this.__wbg_ptr,this),this}theory(){const e=o.thpowersystem_theory(this.__wbg_ptr);return v.__wrap(e)}kuramoto(e,r){g(e,u);const n=o.thpowersystem_kuramoto(this.__wbg_ptr,e.__wbg_ptr,r);if(n[2])throw h(n[1]);return h(n[0])}}Symbol.dispose&&(Ct.prototype[Symbol.dispose]=Ct.prototype.free);class Lt{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,bt.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_thschema_free(e,0)}renderSQL(e,r){g(e,u);const n=k(r,o.__wbindgen_malloc,o.__wbindgen_realloc),i=S;return o.thschema_renderSQL(this.__wbg_ptr,e.__wbg_ptr,n,i)}static toCategory(e,r){g(e,u),g(r,v);const n=o.thschema_toCategory(e.__wbg_ptr,r.__wbg_ptr);if(n[2])throw h(n[1]);return u.__wrap(n[0])}constructor(){const e=o.thschema_new();return this.__wbg_ptr=e>>>0,bt.register(this,this.__wbg_ptr,this),this}theory(){const e=o.thschema_theory(this.__wbg_ptr);return v.__wrap(e)}}Symbol.dispose&&(Lt.prototype[Symbol.dispose]=Lt.prototype.free);class Pt{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,yt.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_thsignedcategory_free(e,0)}linearODE(e,r){g(e,u);const n=o.thsignedcategory_linearODE(this.__wbg_ptr,e.__wbg_ptr,r);if(n[2])throw h(n[1]);return h(n[0])}lotkaVolterra(e,r){g(e,u);const n=o.thsignedcategory_lotkaVolterra(this.__wbg_ptr,e.__wbg_ptr,r);if(n[2])throw h(n[1]);return h(n[0])}negativeLoops(e,r){g(e,u);const n=o.thsignedcategory_negativeLoops(this.__wbg_ptr,e.__wbg_ptr,r);if(n[3])throw h(n[2]);var i=E(n[0],n[1]).slice();return o.__wbindgen_free(n[0],n[1]*4,4),i}positiveLoops(e,r){g(e,u);const n=o.thsignedcategory_positiveLoops(this.__wbg_ptr,e.__wbg_ptr,r);if(n[3])throw h(n[2]);var i=E(n[0],n[1]).slice();return o.__wbindgen_free(n[0],n[1]*4,4),i}constructor(){const e=o.thsignedcategory_new();return this.__wbg_ptr=e>>>0,yt.register(this,this.__wbg_ptr,this),this}theory(){const e=o.thsignedcategory_theory(this.__wbg_ptr);return v.__wrap(e)}}Symbol.dispose&&(Pt.prototype[Symbol.dispose]=Pt.prototype.free);class kt{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,mt.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_thsignedpolynomialode_free(e,0)}polynomialODEEquations(e,r){g(e,u);const n=o.thsignedpolynomialode_polynomialODEEquations(this.__wbg_ptr,e.__wbg_ptr,r);if(n[2])throw h(n[1]);return h(n[0])}polynomialODESimulation(e,r){g(e,u);const n=o.thsignedpolynomialode_polynomialODESimulation(this.__wbg_ptr,e.__wbg_ptr,r);if(n[2])throw h(n[1]);return h(n[0])}constructor(){const e=o.thsignedpolynomialode_new();return this.__wbg_ptr=e>>>0,mt.register(this,this.__wbg_ptr,this),this}theory(){const e=o.thsignedpolynomialode_theory(this.__wbg_ptr);return v.__wrap(e)}}Symbol.dispose&&(kt.prototype[Symbol.dispose]=kt.prototype.free);class Mt{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,wt.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_thsymmonoidalcategory_free(e,0)}massAction(e,r){g(e,u);const n=o.thsymmonoidalcategory_massAction(this.__wbg_ptr,e.__wbg_ptr,r);if(n[2])throw h(n[1]);return h(n[0])}subreachability(e,r){g(e,u);const n=o.thsymmonoidalcategory_subreachability(this.__wbg_ptr,e.__wbg_ptr,r);if(n[2])throw h(n[1]);return n[0]!==0}massActionEquations(e,r){g(e,u);const n=o.thsymmonoidalcategory_massActionEquations(this.__wbg_ptr,e.__wbg_ptr,r);if(n[2])throw h(n[1]);return h(n[0])}stochasticMassAction(e,r){g(e,u);const n=o.thsymmonoidalcategory_stochasticMassAction(this.__wbg_ptr,e.__wbg_ptr,r);if(n[2])throw h(n[1]);return h(n[0])}constructor(){const e=o.thsymmonoidalcategory_new();return this.__wbg_ptr=e>>>0,wt.register(this,this.__wbg_ptr,this),this}theory(){const e=o.thsymmonoidalcategory_theory(this.__wbg_ptr);return v.__wrap(e)}}Symbol.dispose&&(Mt.prototype[Symbol.dispose]=Mt.prototype.free);function m_(t){const e=o.collectProduct(t);if(e[3])throw h(e[2]);var r=E(e[0],e[1]).slice();return o.__wbindgen_free(e[0],e[1]*4,4),r}function Qr(){let t,e;try{const r=o.currentVersion();return t=r[0],e=r[1],V(r[0],r[1])}finally{o.__wbindgen_free(t,e,1)}}function Zr(t,e){const r=Kr(t,o.__wbindgen_malloc),n=S;g(e,v);const i=o.elaborateDiagram(r,n,e.__wbg_ptr);if(i[2])throw h(i[1]);return Y.__wrap(i[0])}function w_(t,e,r,n){g(e,De),g(r,v);const i=k(n,o.__wbindgen_malloc,o.__wbindgen_realloc),s=S,a=o.elaborateModel(t,e.__wbg_ptr,r.__wbg_ptr,i,s);if(a[2])throw h(a[1]);return u.__wrap(a[0])}function en(t){const e=o.migrateDocument(t);if(e[2])throw h(e[1]);return h(e[0])}function tn(t,e){return Error(V(t,e))}function rn(t){return Number(t)}function nn(t,e){const r=String(e),n=k(r,o.__wbindgen_malloc,o.__wbindgen_realloc),i=S;I().setInt32(t+4*1,i,!0),I().setInt32(t+4*0,n,!0)}function sn(t,e){const r=e,n=typeof r=="bigint"?r:void 0;I().setBigInt64(t+8*1,O(n)?BigInt(0):n,!0),I().setInt32(t+4*0,!O(n),!0)}function on(t){const e=t,r=typeof e=="boolean"?e:void 0;return O(r)?16777215:r?1:0}function an(t,e){const r=Re(e),n=k(r,o.__wbindgen_malloc,o.__wbindgen_realloc),i=S;I().setInt32(t+4*1,i,!0),I().setInt32(t+4*0,n,!0)}function cn(t,e){return t in e}function _n(t){return typeof t=="bigint"}function dn(t){return typeof t=="function"}function ln(t){const e=t;return typeof e=="object"&&e!==null}function hn(t){return typeof t=="string"}function un(t){return t===void 0}function fn(t,e){return t===e}function gn(t,e){return t==e}function pn(t,e){const r=e,n=typeof r=="number"?r:void 0;I().setFloat64(t+8*1,O(n)?0:n,!0),I().setInt32(t+4*0,!O(n),!0)}function bn(t,e){const r=e,n=typeof r=="string"?r:void 0;var i=O(n)?0:k(n,o.__wbindgen_malloc,o.__wbindgen_realloc),s=S;I().setInt32(t+4*1,s,!0),I().setInt32(t+4*0,i,!0)}function yn(t,e){throw new Error(V(t,e))}function mn(){return fe(function(t,e){return t.call(e)},arguments)}function wn(t){return t.done}function vn(t){return Object.entries(t)}function En(t,e){let r,n;try{r=t,n=e,console.error(V(t,e))}finally{o.__wbindgen_free(r,n,1)}}function In(){return fe(function(t,e){globalThis.crypto.getRandomValues(nr(t,e))},arguments)}function Tn(t,e){return t[e>>>0]}function An(){return fe(function(t,e){return Reflect.get(t,e)},arguments)}function Sn(t,e){return t[e]}function On(t){let e;try{e=t instanceof ArrayBuffer}catch{e=!1}return e}function Nn(t){let e;try{e=t instanceof Map}catch{e=!1}return e}function Rn(t){let e;try{e=t instanceof Uint8Array}catch{e=!1}return e}function Dn(t){return Array.isArray(t)}function Cn(t){return Number.isSafeInteger(t)}function Ln(){return Symbol.iterator}function Pn(t){return t.length}function kn(t){return t.length}function Mn(){return new Object}function Un(){return new Array}function Fn(t){return new Uint8Array(t)}function xn(){return new Error}function Bn(){return new Map}function $n(t,e){return new Function(V(t,e))}function zn(t){return t.next}function Hn(){return fe(function(t){return t.next()},arguments)}function Gn(t){return t.now()}function Vn(t){return t.performance}function Wn(t,e,r){Uint8Array.prototype.set.call(nr(t,e),r)}function jn(t,e,r){t[e]=r}function qn(t,e,r){t[e>>>0]=r}function Jn(t,e,r){return t.set(e,r)}function Kn(t,e){const r=e.stack,n=k(r,o.__wbindgen_malloc,o.__wbindgen_realloc),i=S;I().setInt32(t+4*1,i,!0),I().setInt32(t+4*0,n,!0)}function Xn(){const t=typeof global>"u"?null:global;return O(t)?0:G(t)}function Yn(){const t=typeof globalThis>"u"?null:globalThis;return O(t)?0:G(t)}function Qn(){const t=typeof self>"u"?null:self;return O(t)?0:G(t)}function Zn(){const t=typeof window>"u"?null:window;return O(t)?0:G(t)}function ei(t){return t.value}function ti(t,e){return V(t,e)}function ri(t){return BigInt.asUintN(64,t)}function ni(t){return t}function ii(t){return t}function si(){const t=o.__wbindgen_externrefs,e=t.grow(4);t.set(0,void 0),t.set(e+0,void 0),t.set(e+1,null),t.set(e+2,!0),t.set(e+3,!1)}URL=globalThis.URL;const c=await $r({"./catlog_wasm_bg.js":{__wbg_new_8a6f238a6ece86ea:xn,__wbg_stack_0ed75d68575b0f3c:Kn,__wbg_error_7534b8e9a36f1ab4:En,__wbg_now_2c95c9de01293173:Gn,__wbg_performance_7a3ffd0b17f663ad:Vn,__wbg_getRandomValues_3c9c0d586e575a16:In,__wbg_set_3f1d0b984ed272ed:jn,__wbg_get_with_ref_key_1dc361bd10053bfe:Sn,__wbg_String_8f0eb39a4a4c2f66:nn,__wbg_iterator_27b7c8b35ab3e86b:Ln,__wbg_new_25f239778d6112b9:Un,__wbg_get_6b7bd52aca3f9671:Tn,__wbg_set_7df433eea03a5c14:qn,__wbg_isArray_51fd9e6422c0a395:Dn,__wbg_length_d45040a40c570362:kn,__wbg_new_no_args_cb138f77cf6151ee:$n,__wbg_call_abb4ff46ce38be40:mn,__wbg_new_b546ae120718850e:Bn,__wbg_set_efaaf145b9377369:Jn,__wbg_isSafeInteger_ae7d3f054d55fa16:Cn,__wbg_next_3cfe5c0fe2a4cc53:Hn,__wbg_done_62ea16af4ce34b24:wn,__wbg_value_57b7b035e117f7ee:ei,__wbg_entries_83c79938054e065f:vn,__wbg_new_1ba21ce319a06297:Mn,__wbg_length_22ac23eaec9d8053:Pn,__wbg_prototypesetcall_dfe9b766cdc1f1fd:Wn,__wbg_new_6421f6084cc5bc5a:Fn,__wbg_next_138a17bbf04e926c:zn,__wbg_static_accessor_GLOBAL_THIS_60cf02db4de8e1c1:Yn,__wbg_static_accessor_SELF_08f5a74c69739274:Qn,__wbg_static_accessor_GLOBAL_769e6b65d6557335:Xn,__wbg_static_accessor_WINDOW_a8924b26aa92d024:Zn,__wbg_instanceof_Map_084be8da74364158:Nn,__wbg_instanceof_Uint8Array_da54ccc9d3e09434:Rn,__wbg_instanceof_ArrayBuffer_f3320d2419cd0355:On,__wbg_get_af9dab7e9603ea93:An,__wbg___wbindgen_number_get_9619185a74197f95:pn,__wbg___wbindgen_in_0d3e1e8f0c669317:cn,__wbg___wbindgen_throw_dd24417ed36fc46e:yn,__wbg___wbindgen_jsval_eq_b6101cc9cef1fe36:fn,__wbg_Number_2d1dcfcf4ec51736:rn,__wbg_Error_52673b7de5a0ca89:tn,__wbg___wbindgen_is_bigint_0e1a2e3f55cfae27:_n,__wbg___wbindgen_is_object_ce774f3490692386:ln,__wbg___wbindgen_is_string_704ef9c8fc131030:hn,__wbg___wbindgen_string_get_a2a31e16edf96e42:bn,__wbg___wbindgen_boolean_get_dea25b33882b895b:on,__wbg___wbindgen_is_function_8d400b8b1af978cd:dn,__wbg___wbindgen_is_undefined_f6b95eab589e0269:un,__wbg___wbindgen_jsval_loose_eq_766057600fdd1b0d:gn,__wbg___wbindgen_bigint_get_as_i64_6e32f5e6aff02e1d:sn,__wbg___wbindgen_debug_string_adfb662ae34724b6:an,__wbindgen_init_externref_table:si,__wbindgen_cast_9ae0607507abb057:ni,__wbindgen_cast_d6cd19b81560fd6e:ii,__wbindgen_cast_2241b6af4c4b2941:ti,__wbindgen_cast_4625c577ab2ec9ee:ri}},qr),oi=c.memory,ai=c.__wbg_dblmodel_free,ci=c.__wbg_dblmodelmap_free,_i=c.collectProduct,di=c.dblmodel_cod,li=c.dblmodel_compositionPattern,hi=c.dblmodel_dom,ui=c.dblmodel_hasMor,fi=c.dblmodel_hasOb,gi=c.dblmodel_morGeneratorLabel,pi=c.dblmodel_morGeneratorWithLabel,bi=c.dblmodel_morGenerators,yi=c.dblmodel_morGeneratorsWithType,mi=c.dblmodel_morPresentation,wi=c.dblmodel_morType,vi=c.dblmodel_obGeneratorLabel,Ei=c.dblmodel_obGeneratorWithLabel,Ii=c.dblmodel_obGenerators,Ti=c.dblmodel_obGeneratorsWithType,Ai=c.dblmodel_obPresentation,Si=c.dblmodel_obType,Oi=c.dblmodel_presentation,Ni=c.dblmodel_validate,Ri=c.dblmodelmap_has,Di=c.dblmodelmap_new,Ci=c.dblmodelmap_set,Li=c.elaborateModel,Pi=c.__wbg_dblmodeldiagram_free,ki=c.dblmodeldiagram_inferMissingFrom,Mi=c.dblmodeldiagram_morGenerators,Ui=c.dblmodeldiagram_morGeneratorsWithType,Fi=c.dblmodeldiagram_morPresentation,xi=c.dblmodeldiagram_morType,Bi=c.dblmodeldiagram_obGeneratorLabel,$i=c.dblmodeldiagram_obGeneratorWithLabel,zi=c.dblmodeldiagram_obGenerators,Hi=c.dblmodeldiagram_obGeneratorsWithType,Gi=c.dblmodeldiagram_obPresentation,Vi=c.dblmodeldiagram_obType,Wi=c.dblmodeldiagram_presentation,ji=c.dblmodeldiagram_validateIn,qi=c.elaborateDiagram,Ji=c.__wbg_dbltheory_free,Ki=c.__wbg_mortypeindex_free,Xi=c.__wbg_obtypeindex_free,Yi=c.dbltheory_cod,Qi=c.dbltheory_dom,Zi=c.dbltheory_hasMorType,es=c.dbltheory_hasObType,ts=c.dbltheory_src,rs=c.dbltheory_tgt,ns=c.mortypeindex_get,is=c.mortypeindex_has,ss=c.mortypeindex_new,os=c.mortypeindex_set,as=c.obtypeindex_get,cs=c.obtypeindex_has,_s=c.obtypeindex_new,ds=c.obtypeindex_set,ls=c.set_panic_hook,hs=c.__wbg_thcategory_free,us=c.__wbg_thcategorylinks_free,fs=c.__wbg_thcategorysignedlinks_free,gs=c.__wbg_thcategorywithscalars_free,ps=c.__wbg_thdelayablesignedcategory_free,bs=c.__wbg_thempty_free,ys=c.__wbg_thnullablesignedcategory_free,ms=c.__wbg_thpolynomialode_free,ws=c.__wbg_thpowersystem_free,vs=c.__wbg_thschema_free,Es=c.__wbg_thsignedcategory_free,Is=c.__wbg_thsignedpolynomialode_free,Ts=c.__wbg_thsymmonoidalcategory_free,As=c.thcategory_new,Ss=c.thcategory_theory,Os=c.thcategory_toSchema,Ns=c.thcategorylinks_massAction,Rs=c.thcategorylinks_massActionEquations,Ds=c.thcategorylinks_new,Cs=c.thcategorylinks_theory,Ls=c.thcategorysignedlinks_massAction,Ps=c.thcategorysignedlinks_massActionEquations,ks=c.thcategorysignedlinks_new,Ms=c.thcategorysignedlinks_theory,Us=c.thcategorywithscalars_new,Fs=c.thcategorywithscalars_theory,xs=c.thdelayablesignedcategory_delayedNegativeLoops,Bs=c.thdelayablesignedcategory_delayedPositiveLoops,$s=c.thdelayablesignedcategory_negativeLoops,zs=c.thdelayablesignedcategory_new,Hs=c.thdelayablesignedcategory_positiveLoops,Gs=c.thdelayablesignedcategory_theory,Vs=c.thdelayablesignedcategory_toSignedCategory,Ws=c.thempty_new,js=c.thempty_theory,qs=c.thnullablesignedcategory_indeterminateLoops,Js=c.thnullablesignedcategory_negativeLoops,Ks=c.thnullablesignedcategory_new,Xs=c.thnullablesignedcategory_positiveLoops,Ys=c.thnullablesignedcategory_theory,Qs=c.thpolynomialode_new,Zs=c.thpolynomialode_polynomialODEEquations,eo=c.thpolynomialode_polynomialODESimulation,to=c.thpolynomialode_theory,ro=c.thpowersystem_kuramoto,no=c.thpowersystem_new,io=c.thpowersystem_theory,so=c.thschema_new,oo=c.thschema_renderSQL,ao=c.thschema_theory,co=c.thschema_toCategory,_o=c.thsignedcategory_linearODE,lo=c.thsignedcategory_lotkaVolterra,ho=c.thsignedcategory_negativeLoops,uo=c.thsignedcategory_new,fo=c.thsignedcategory_positiveLoops,go=c.thsignedcategory_theory,po=c.thsignedpolynomialode_new,bo=c.thsignedpolynomialode_polynomialODEEquations,yo=c.thsignedpolynomialode_polynomialODESimulation,mo=c.thsignedpolynomialode_theory,wo=c.thsymmonoidalcategory_massAction,vo=c.thsymmonoidalcategory_massActionEquations,Eo=c.thsymmonoidalcategory_new,Io=c.thsymmonoidalcategory_stochasticMassAction,To=c.thsymmonoidalcategory_subreachability,Ao=c.thsymmonoidalcategory_theory,So=c.currentVersion,Oo=c.migrateDocument,No=c.serializeAutomergeDocument,Ro=c.__wbindgen_malloc,Do=c.__wbindgen_realloc,Co=c.__wbindgen_exn_store,Lo=c.__externref_table_alloc,Po=c.__wbindgen_externrefs,ko=c.__wbindgen_free,Mo=c.__externref_table_dealloc,Uo=c.__externref_drop_slice,ir=c.__wbindgen_start,Fo=Object.freeze(Object.defineProperty({__proto__:null,__externref_drop_slice:Uo,__externref_table_alloc:Lo,__externref_table_dealloc:Mo,__wbg_dblmodel_free:ai,__wbg_dblmodeldiagram_free:Pi,__wbg_dblmodelmap_free:ci,__wbg_dbltheory_free:Ji,__wbg_mortypeindex_free:Ki,__wbg_obtypeindex_free:Xi,__wbg_thcategory_free:hs,__wbg_thcategorylinks_free:us,__wbg_thcategorysignedlinks_free:fs,__wbg_thcategorywithscalars_free:gs,__wbg_thdelayablesignedcategory_free:ps,__wbg_thempty_free:bs,__wbg_thnullablesignedcategory_free:ys,__wbg_thpolynomialode_free:ms,__wbg_thpowersystem_free:ws,__wbg_thschema_free:vs,__wbg_thsignedcategory_free:Es,__wbg_thsignedpolynomialode_free:Is,__wbg_thsymmonoidalcategory_free:Ts,__wbindgen_exn_store:Co,__wbindgen_externrefs:Po,__wbindgen_free:ko,__wbindgen_malloc:Ro,__wbindgen_realloc:Do,__wbindgen_start:ir,collectProduct:_i,currentVersion:So,dblmodel_cod:di,dblmodel_compositionPattern:li,dblmodel_dom:hi,dblmodel_hasMor:ui,dblmodel_hasOb:fi,dblmodel_morGeneratorLabel:gi,dblmodel_morGeneratorWithLabel:pi,dblmodel_morGenerators:bi,dblmodel_morGeneratorsWithType:yi,dblmodel_morPresentation:mi,dblmodel_morType:wi,dblmodel_obGeneratorLabel:vi,dblmodel_obGeneratorWithLabel:Ei,dblmodel_obGenerators:Ii,dblmodel_obGeneratorsWithType:Ti,dblmodel_obPresentation:Ai,dblmodel_obType:Si,dblmodel_presentation:Oi,dblmodel_validate:Ni,dblmodeldiagram_inferMissingFrom:ki,dblmodeldiagram_morGenerators:Mi,dblmodeldiagram_morGeneratorsWithType:Ui,dblmodeldiagram_morPresentation:Fi,dblmodeldiagram_morType:xi,dblmodeldiagram_obGeneratorLabel:Bi,dblmodeldiagram_obGeneratorWithLabel:$i,dblmodeldiagram_obGenerators:zi,dblmodeldiagram_obGeneratorsWithType:Hi,dblmodeldiagram_obPresentation:Gi,dblmodeldiagram_obType:Vi,dblmodeldiagram_presentation:Wi,dblmodeldiagram_validateIn:ji,dblmodelmap_has:Ri,dblmodelmap_new:Di,dblmodelmap_set:Ci,dbltheory_cod:Yi,dbltheory_dom:Qi,dbltheory_hasMorType:Zi,dbltheory_hasObType:es,dbltheory_src:ts,dbltheory_tgt:rs,elaborateDiagram:qi,elaborateModel:Li,memory:oi,migrateDocument:Oo,mortypeindex_get:ns,mortypeindex_has:is,mortypeindex_new:ss,mortypeindex_set:os,obtypeindex_get:as,obtypeindex_has:cs,obtypeindex_new:_s,obtypeindex_set:ds,serializeAutomergeDocument:No,set_panic_hook:ls,thcategory_new:As,thcategory_theory:Ss,thcategory_toSchema:Os,thcategorylinks_massAction:Ns,thcategorylinks_massActionEquations:Rs,thcategorylinks_new:Ds,thcategorylinks_theory:Cs,thcategorysignedlinks_massAction:Ls,thcategorysignedlinks_massActionEquations:Ps,thcategorysignedlinks_new:ks,thcategorysignedlinks_theory:Ms,thcategorywithscalars_new:Us,thcategorywithscalars_theory:Fs,thdelayablesignedcategory_delayedNegativeLoops:xs,thdelayablesignedcategory_delayedPositiveLoops:Bs,thdelayablesignedcategory_negativeLoops:$s,thdelayablesignedcategory_new:zs,thdelayablesignedcategory_positiveLoops:Hs,thdelayablesignedcategory_theory:Gs,thdelayablesignedcategory_toSignedCategory:Vs,thempty_new:Ws,thempty_theory:js,thnullablesignedcategory_indeterminateLoops:qs,thnullablesignedcategory_negativeLoops:Js,thnullablesignedcategory_new:Ks,thnullablesignedcategory_positiveLoops:Xs,thnullablesignedcategory_theory:Ys,thpolynomialode_new:Qs,thpolynomialode_polynomialODEEquations:Zs,thpolynomialode_polynomialODESimulation:eo,thpolynomialode_theory:to,thpowersystem_kuramoto:ro,thpowersystem_new:no,thpowersystem_theory:io,thschema_new:so,thschema_renderSQL:oo,thschema_theory:ao,thschema_toCategory:co,thsignedcategory_linearODE:_o,thsignedcategory_lotkaVolterra:lo,thsignedcategory_negativeLoops:ho,thsignedcategory_new:uo,thsignedcategory_positiveLoops:fo,thsignedcategory_theory:go,thsignedpolynomialode_new:po,thsignedpolynomialode_polynomialODEEquations:bo,thsignedpolynomialode_polynomialODESimulation:yo,thsignedpolynomialode_theory:mo,thsymmonoidalcategory_massAction:wo,thsymmonoidalcategory_massActionEquations:vo,thsymmonoidalcategory_new:Eo,thsymmonoidalcategory_stochasticMassAction:Io,thsymmonoidalcategory_subreachability:To,thsymmonoidalcategory_theory:Ao},Symbol.toStringTag,{value:"Module"}));Jr(Fo);ir();var xo="Invariant failed";function sr(t,e){if(!t)throw new Error(xo)}const Bo=ze();function v_(){const t=Fr(Bo);return sr(t),t}/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2022 Joachim Wester
 * MIT licensed
 */var $o=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var s in i)i.hasOwnProperty(s)&&(n[s]=i[s])},t(e,r)};return function(e,r){t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),zo=Object.prototype.hasOwnProperty;function Ce(t,e){return zo.call(t,e)}function Le(t){if(Array.isArray(t)){for(var e=new Array(t.length),r=0;r<e.length;r++)e[r]=""+r;return e}if(Object.keys)return Object.keys(t);var n=[];for(var i in t)Ce(t,i)&&n.push(i);return n}function A(t){switch(typeof t){case"object":return JSON.parse(JSON.stringify(t));case"undefined":return null;default:return t}}function Pe(t){for(var e=0,r=t.length,n;e<r;){if(n=t.charCodeAt(e),n>=48&&n<=57){e++;continue}return!1}return!0}function M(t){return t.indexOf("/")===-1&&t.indexOf("~")===-1?t:t.replace(/~/g,"~0").replace(/\//g,"~1")}function or(t){return t.replace(/~1/g,"/").replace(/~0/g,"~")}function ke(t){if(t===void 0)return!0;if(t){if(Array.isArray(t)){for(var e=0,r=t.length;e<r;e++)if(ke(t[e]))return!0}else if(typeof t=="object"){for(var n=Le(t),i=n.length,s=0;s<i;s++)if(ke(t[n[s]]))return!0}}return!1}function Ut(t,e){var r=[t];for(var n in e){var i=typeof e[n]=="object"?JSON.stringify(e[n],null,2):e[n];typeof i<"u"&&r.push(n+": "+i)}return r.join(`
`)}var ar=function(t){$o(e,t);function e(r,n,i,s,a){var d=this.constructor,_=t.call(this,Ut(r,{name:n,index:i,operation:s,tree:a}))||this;return _.name=n,_.index=i,_.operation=s,_.tree=a,Object.setPrototypeOf(_,d.prototype),_.message=Ut(r,{name:n,index:i,operation:s,tree:a}),_}return e}(Error),w=ar,Ho=A,$={add:function(t,e,r){return t[e]=this.value,{newDocument:r}},remove:function(t,e,r){var n=t[e];return delete t[e],{newDocument:r,removed:n}},replace:function(t,e,r){var n=t[e];return t[e]=this.value,{newDocument:r,removed:n}},move:function(t,e,r){var n=_e(r,this.path);n&&(n=A(n));var i=F(r,{op:"remove",path:this.from}).removed;return F(r,{op:"add",path:this.path,value:i}),{newDocument:r,removed:n}},copy:function(t,e,r){var n=_e(r,this.from);return F(r,{op:"add",path:this.path,value:A(n)}),{newDocument:r}},test:function(t,e,r){return{newDocument:r,test:Q(t[e],this.value)}},_get:function(t,e,r){return this.value=t[e],{newDocument:r}}},Go={add:function(t,e,r){return Pe(e)?t.splice(e,0,this.value):t[e]=this.value,{newDocument:r,index:e}},remove:function(t,e,r){var n=t.splice(e,1);return{newDocument:r,removed:n[0]}},replace:function(t,e,r){var n=t[e];return t[e]=this.value,{newDocument:r,removed:n}},move:$.move,copy:$.copy,test:$.test,_get:$._get};function _e(t,e){if(e=="")return t;var r={op:"_get",path:e};return F(t,r),r.value}function F(t,e,r,n,i,s){if(r===void 0&&(r=!1),n===void 0&&(n=!0),i===void 0&&(i=!0),s===void 0&&(s=0),r&&(typeof r=="function"?r(e,0,t,e.path):de(e,0)),e.path===""){var a={newDocument:t};if(e.op==="add")return a.newDocument=e.value,a;if(e.op==="replace")return a.newDocument=e.value,a.removed=t,a;if(e.op==="move"||e.op==="copy")return a.newDocument=_e(t,e.from),e.op==="move"&&(a.removed=t),a;if(e.op==="test"){if(a.test=Q(t,e.value),a.test===!1)throw new w("Test operation failed","TEST_OPERATION_FAILED",s,e,t);return a.newDocument=t,a}else{if(e.op==="remove")return a.removed=t,a.newDocument=null,a;if(e.op==="_get")return e.value=t,a;if(r)throw new w("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",s,e,t);return a}}else{n||(t=A(t));var d=e.path||"",_=d.split("/"),l=t,f=1,y=_.length,T=void 0,m=void 0,D=void 0;for(typeof r=="function"?D=r:D=de;;){if(m=_[f],m&&m.indexOf("~")!=-1&&(m=or(m)),i&&(m=="__proto__"||m=="prototype"&&f>0&&_[f-1]=="constructor"))throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");if(r&&T===void 0&&(l[m]===void 0?T=_.slice(0,f).join("/"):f==y-1&&(T=e.path),T!==void 0&&D(e,0,t,T)),f++,Array.isArray(l)){if(m==="-")m=l.length;else{if(r&&!Pe(m))throw new w("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index","OPERATION_PATH_ILLEGAL_ARRAY_INDEX",s,e,t);Pe(m)&&(m=~~m)}if(f>=y){if(r&&e.op==="add"&&m>l.length)throw new w("The specified index MUST NOT be greater than the number of elements in the array","OPERATION_VALUE_OUT_OF_BOUNDS",s,e,t);var a=Go[e.op].call(e,l,m,t);if(a.test===!1)throw new w("Test operation failed","TEST_OPERATION_FAILED",s,e,t);return a}}else if(f>=y){var a=$[e.op].call(e,l,m,t);if(a.test===!1)throw new w("Test operation failed","TEST_OPERATION_FAILED",s,e,t);return a}if(l=l[m],r&&f<y&&(!l||typeof l!="object"))throw new w("Cannot perform operation at the desired path","OPERATION_PATH_UNRESOLVABLE",s,e,t)}}}function He(t,e,r,n,i){if(n===void 0&&(n=!0),i===void 0&&(i=!0),r&&!Array.isArray(e))throw new w("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");n||(t=A(t));for(var s=new Array(e.length),a=0,d=e.length;a<d;a++)s[a]=F(t,e[a],r,!0,i,a),t=s[a].newDocument;return s.newDocument=t,s}function Vo(t,e,r){var n=F(t,e);if(n.test===!1)throw new w("Test operation failed","TEST_OPERATION_FAILED",r,e,t);return n.newDocument}function de(t,e,r,n){if(typeof t!="object"||t===null||Array.isArray(t))throw new w("Operation is not an object","OPERATION_NOT_AN_OBJECT",e,t,r);if($[t.op]){if(typeof t.path!="string")throw new w("Operation `path` property is not a string","OPERATION_PATH_INVALID",e,t,r);if(t.path.indexOf("/")!==0&&t.path.length>0)throw new w('Operation `path` property must start with "/"',"OPERATION_PATH_INVALID",e,t,r);if((t.op==="move"||t.op==="copy")&&typeof t.from!="string")throw new w("Operation `from` property is not present (applicable in `move` and `copy` operations)","OPERATION_FROM_REQUIRED",e,t,r);if((t.op==="add"||t.op==="replace"||t.op==="test")&&t.value===void 0)throw new w("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_REQUIRED",e,t,r);if((t.op==="add"||t.op==="replace"||t.op==="test")&&ke(t.value))throw new w("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED",e,t,r);if(r){if(t.op=="add"){var i=t.path.split("/").length,s=n.split("/").length;if(i!==s+1&&i!==s)throw new w("Cannot perform an `add` operation at the desired path","OPERATION_PATH_CANNOT_ADD",e,t,r)}else if(t.op==="replace"||t.op==="remove"||t.op==="_get"){if(t.path!==n)throw new w("Cannot perform the operation at a path that does not exist","OPERATION_PATH_UNRESOLVABLE",e,t,r)}else if(t.op==="move"||t.op==="copy"){var a={op:"_get",path:t.from,value:void 0},d=cr([a],r);if(d&&d.name==="OPERATION_PATH_UNRESOLVABLE")throw new w("Cannot perform the operation from a path that does not exist","OPERATION_FROM_UNRESOLVABLE",e,t,r)}}}else throw new w("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",e,t,r)}function cr(t,e,r){try{if(!Array.isArray(t))throw new w("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");if(e)He(A(e),A(t),r||!0);else{r=r||de;for(var n=0;n<t.length;n++)r(t[n],n,e,void 0)}}catch(i){if(i instanceof w)return i;throw i}}function Q(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var r=Array.isArray(t),n=Array.isArray(e),i,s,a;if(r&&n){if(s=t.length,s!=e.length)return!1;for(i=s;i--!==0;)if(!Q(t[i],e[i]))return!1;return!0}if(r!=n)return!1;var d=Object.keys(t);if(s=d.length,s!==Object.keys(e).length)return!1;for(i=s;i--!==0;)if(!e.hasOwnProperty(d[i]))return!1;for(i=s;i--!==0;)if(a=d[i],!Q(t[a],e[a]))return!1;return!0}return t!==t&&e!==e}const Wo=Object.freeze(Object.defineProperty({__proto__:null,JsonPatchError:w,_areEquals:Q,applyOperation:F,applyPatch:He,applyReducer:Vo,deepClone:Ho,getValueByPointer:_e,validate:cr,validator:de},Symbol.toStringTag,{value:"Module"}));/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2021 Joachim Wester
 * MIT license
 */var Ge=new WeakMap,jo=function(){function t(e){this.observers=new Map,this.obj=e}return t}(),qo=function(){function t(e,r){this.callback=e,this.observer=r}return t}();function Jo(t){return Ge.get(t)}function Ko(t,e){return t.observers.get(e)}function Xo(t,e){t.observers.delete(e.callback)}function Yo(t,e){e.unobserve()}function Qo(t,e){var r=[],n,i=Jo(t);if(!i)i=new jo(t),Ge.set(t,i);else{var s=Ko(i,e);n=s&&s.observer}if(n)return n;if(n={},i.value=A(t),e){n.callback=e,n.next=null;var a=function(){Me(n)},d=function(){clearTimeout(n.next),n.next=setTimeout(a)};typeof window<"u"&&(window.addEventListener("mouseup",d),window.addEventListener("keyup",d),window.addEventListener("mousedown",d),window.addEventListener("keydown",d),window.addEventListener("change",d))}return n.patches=r,n.object=t,n.unobserve=function(){Me(n),clearTimeout(n.next),Xo(i,n),typeof window<"u"&&(window.removeEventListener("mouseup",d),window.removeEventListener("keyup",d),window.removeEventListener("mousedown",d),window.removeEventListener("keydown",d),window.removeEventListener("change",d))},i.observers.set(e,new qo(e,n)),n}function Me(t,e){e===void 0&&(e=!1);var r=Ge.get(t.object);Ve(r.value,t.object,t.patches,"",e),t.patches.length&&He(r.value,t.patches);var n=t.patches;return n.length>0&&(t.patches=[],t.callback&&t.callback(n)),n}function Ve(t,e,r,n,i){if(e!==t){typeof e.toJSON=="function"&&(e=e.toJSON());for(var s=Le(e),a=Le(t),d=!1,_=a.length-1;_>=0;_--){var l=a[_],f=t[l];if(Ce(e,l)&&!(e[l]===void 0&&f!==void 0&&Array.isArray(e)===!1)){var y=e[l];typeof f=="object"&&f!=null&&typeof y=="object"&&y!=null&&Array.isArray(f)===Array.isArray(y)?Ve(f,y,r,n+"/"+M(l),i):f!==y&&(i&&r.push({op:"test",path:n+"/"+M(l),value:A(f)}),r.push({op:"replace",path:n+"/"+M(l),value:A(y)}))}else Array.isArray(t)===Array.isArray(e)?(i&&r.push({op:"test",path:n+"/"+M(l),value:A(f)}),r.push({op:"remove",path:n+"/"+M(l)}),d=!0):(i&&r.push({op:"test",path:n,value:t}),r.push({op:"replace",path:n,value:e}))}if(!(!d&&s.length==a.length))for(var _=0;_<s.length;_++){var l=s[_];!Ce(t,l)&&e[l]!==void 0&&r.push({op:"add",path:n+"/"+M(l),value:A(e[l])})}}}function Zo(t,e,r){r===void 0&&(r=!1);var n=[];return Ve(t,e,n,"",r),n}const ea=Object.freeze(Object.defineProperty({__proto__:null,compare:Zo,generate:Me,observe:Qo,unobserve:Yo},Symbol.toStringTag,{value:"Module"})),Ft=Object.assign({},Wo,ea,{JsonPatchError:ar,deepClone:A,escapePathComponent:M,unescapePathComponent:or});async function _r(t,e){const r=await t.find(e),n=r.doc(),i=en(n);if(n.version!==i.version){const s=Ft.compare(n,i).filter(a=>!a.path.startsWith("/@patchwork"));r.change(a=>{Ft.applyPatch(a,s)})}return r}function dr(t,e){if(e!==void 0){const s=t.doc().type;sr(s===e)}const r=t;return{doc:ta(r),changeDoc:s=>r.change(s),docHandle:r}}function ta(t){const e=t.doc(),[r,n]=Wr(e),i=s=>{n(jr(s.doc))};return t.on("change",i),r}function E_(t){const[e,r]=xr(!1);return Br(()=>{r(!1),t().whenReady().then(()=>{r(!0)})}),e}var xt={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<128?e[r++]=i:i<2048?(e[r++]=i>>6|192,e[r++]=i&63|128):(i&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=i>>18|240,e[r++]=i>>12&63|128,e[r++]=i>>6&63|128,e[r++]=i&63|128):(e[r++]=i>>12|224,e[r++]=i>>6&63|128,e[r++]=i&63|128)}return e},ra=function(t){const e=[];let r=0,n=0;for(;r<t.length;){const i=t[r++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[r++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[r++],a=t[r++],d=t[r++],_=((i&7)<<18|(s&63)<<12|(a&63)<<6|d&63)-65536;e[n++]=String.fromCharCode(55296+(_>>10)),e[n++]=String.fromCharCode(56320+(_&1023))}else{const s=t[r++],a=t[r++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},hr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,d=a?t[i+1]:0,_=i+2<t.length,l=_?t[i+2]:0,f=s>>2,y=(s&3)<<4|d>>4;let T=(d&15)<<2|l>>6,m=l&63;_||(m=64,a||(T=64)),n.push(r[f],r[y],r[T],r[m])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lr(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ra(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const s=r[t.charAt(i++)],d=i<t.length?r[t.charAt(i)]:0;++i;const l=i<t.length?r[t.charAt(i)]:64;++i;const y=i<t.length?r[t.charAt(i)]:64;if(++i,s==null||d==null||l==null||y==null)throw new na;const T=s<<2|d>>4;if(n.push(T),l!==64){const m=d<<4&240|l>>2;if(n.push(m),y!==64){const D=l<<6&192|y;n.push(D)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class na extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ia=function(t){const e=lr(t);return hr.encodeByteArray(e,!0)},ur=function(t){return ia(t).replace(/\./g,"")},fr=function(t){try{return hr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=()=>sa().__FIREBASE_DEFAULTS__,aa=()=>{if(typeof process>"u"||typeof xt>"u")return;const t=xt.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ca=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fr(t[1]);return e&&JSON.parse(e)},_a=()=>{try{return oa()||aa()||ca()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},da=t=>{var e;return(e=_a())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function la(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(N())}function ha(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ua(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ga(){try{return typeof indexedDB=="object"}catch{return!1}}function pa(){return new Promise((t,e)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),t(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(r){e(r)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba="FirebaseError";class x extends Error{constructor(e,r,n){super(r),this.code=e,this.customData=n,this.name=ba,Object.setPrototypeOf(this,x.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,re.prototype.create)}}class re{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?ya(s,n):"Error",d=`${this.serviceName}: ${a} (${i}).`;return new x(i,d,n)}}function ya(t,e){return t.replace(ma,(r,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const ma=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t){const e=[];for(const[r,n]of Object.entries(t))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function wa(t,e){const r=new va(t,e);return r.subscribe.bind(r)}class va{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,n){let i;if(e===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");Ea(e,["next","error","complete"])?i=e:i={next:e,error:r,complete:n},i.next===void 0&&(i.next=Ee),i.error===void 0&&(i.error=Ee),i.complete===void 0&&(i.complete=Ee);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ea(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function Ee(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(t){return t&&t._delegate?t._delegate:t}class Z{constructor(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(b||(b={}));const Ia={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},Ta=b.INFO,Aa={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},Sa=(t,e,...r)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),i=Aa[e];if(i)console[i](`[${n}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pr{constructor(e){this.name=e,this._logLevel=Ta,this._logHandler=Sa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in b))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ia[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...e),this._logHandler(this,b.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...e),this._logHandler(this,b.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,b.INFO,...e),this._logHandler(this,b.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,b.WARN,...e),this._logHandler(this,b.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...e),this._logHandler(this,b.ERROR,...e)}}const Oa=(t,e)=>e.some(r=>t instanceof r);let Bt,$t;function Na(){return Bt||(Bt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ra(){return $t||($t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const br=new WeakMap,Ue=new WeakMap,yr=new WeakMap,Ie=new WeakMap,We=new WeakMap;function Da(t){const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{r(P(t.result)),i()},a=()=>{n(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(r=>{r instanceof IDBCursor&&br.set(r,t)}).catch(()=>{}),We.set(e,t),e}function Ca(t){if(Ue.has(t))return;const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{r(),i()},a=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});Ue.set(t,e)}let Fe={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return Ue.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yr.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return P(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function La(t){Fe=t(Fe)}function Pa(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const n=t.call(Te(this),e,...r);return yr.set(n,e.sort?e.sort():[e]),P(n)}:Ra().includes(t)?function(...e){return t.apply(Te(this),e),P(br.get(this))}:function(...e){return P(t.apply(Te(this),e))}}function ka(t){return typeof t=="function"?Pa(t):(t instanceof IDBTransaction&&Ca(t),Oa(t,Na())?new Proxy(t,Fe):t)}function P(t){if(t instanceof IDBRequest)return Da(t);if(Ie.has(t))return Ie.get(t);const e=ka(t);return e!==t&&(Ie.set(t,e),We.set(e,t)),e}const Te=t=>We.get(t);function Ma(t,e,{blocked:r,upgrade:n,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),d=P(a);return n&&a.addEventListener("upgradeneeded",_=>{n(P(a.result),_.oldVersion,_.newVersion,P(a.transaction),_)}),r&&a.addEventListener("blocked",_=>r(_.oldVersion,_.newVersion,_)),d.then(_=>{s&&_.addEventListener("close",()=>s()),i&&_.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),d}const Ua=["get","getKey","getAll","getAllKeys","count"],Fa=["put","add","delete","clear"],Ae=new Map;function zt(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ae.get(e))return Ae.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,i=Fa.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Ua.includes(r)))return;const s=async function(a,...d){const _=this.transaction(a,i?"readwrite":"readonly");let l=_.store;return n&&(l=l.index(d.shift())),(await Promise.all([l[r](...d),i&&_.done]))[0]};return Ae.set(e,s),s}La(t=>({...t,get:(e,r,n)=>zt(e,r)||t.get(e,r,n),has:(e,r)=>!!zt(e,r)||t.has(e,r)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(Ba(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function Ba(t){const e=t.getComponent();return e?.type==="VERSION"}const xe="@firebase/app",Ht="0.10.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=new pr("@firebase/app"),$a="@firebase/app-compat",za="@firebase/analytics-compat",Ha="@firebase/analytics",Ga="@firebase/app-check-compat",Va="@firebase/app-check",Wa="@firebase/auth",ja="@firebase/auth-compat",qa="@firebase/database",Ja="@firebase/data-connect",Ka="@firebase/database-compat",Xa="@firebase/functions",Ya="@firebase/functions-compat",Qa="@firebase/installations",Za="@firebase/installations-compat",ec="@firebase/messaging",tc="@firebase/messaging-compat",rc="@firebase/performance",nc="@firebase/performance-compat",ic="@firebase/remote-config",sc="@firebase/remote-config-compat",oc="@firebase/storage",ac="@firebase/storage-compat",cc="@firebase/firestore",_c="@firebase/vertexai-preview",dc="@firebase/firestore-compat",lc="firebase",hc="10.14.0",uc={[xe]:"fire-core",[$a]:"fire-core-compat",[Ha]:"fire-analytics",[za]:"fire-analytics-compat",[Va]:"fire-app-check",[Ga]:"fire-app-check-compat",[Wa]:"fire-auth",[ja]:"fire-auth-compat",[qa]:"fire-rtdb",[Ja]:"fire-data-connect",[Ka]:"fire-rtdb-compat",[Xa]:"fire-fn",[Ya]:"fire-fn-compat",[Qa]:"fire-iid",[Za]:"fire-iid-compat",[ec]:"fire-fcm",[tc]:"fire-fcm-compat",[rc]:"fire-perf",[nc]:"fire-perf-compat",[ic]:"fire-rc",[sc]:"fire-rc-compat",[oc]:"fire-gcs",[ac]:"fire-gcs-compat",[cc]:"fire-fst",[dc]:"fire-fst-compat",[_c]:"fire-vertex","fire-js":"fire-js",[lc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=new Map,gc=new Map,Gt=new Map;function Vt(t,e){try{t.container.addComponent(e)}catch(r){R.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function ee(t){const e=t.name;if(Gt.has(e))return R.debug(`There were multiple attempts to register component ${e}.`),!1;Gt.set(e,t);for(const r of fc.values())Vt(r,t);for(const r of gc.values())Vt(r,t);return!0}function W(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},je=new re("app","Firebase",pc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe=hc;function J(t,e,r){var n;let i=(n=uc[t])!==null&&n!==void 0?n:t;r&&(i+=`-${r}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const d=[`Unable to register library "${i}" with version "${e}":`];s&&d.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&d.push("and"),a&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),R.warn(d.join(" "));return}ee(new Z(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc="firebase-heartbeat-database",yc=1,te="firebase-heartbeat-store";let Se=null;function mr(){return Se||(Se=Ma(bc,yc,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(te)}catch(r){console.warn(r)}}}}).catch(t=>{throw je.create("idb-open",{originalErrorMessage:t.message})})),Se}async function mc(t){try{const r=(await mr()).transaction(te),n=await r.objectStore(te).get(wr(t));return await r.done,n}catch(e){if(e instanceof x)R.warn(e.message);else{const r=je.create("idb-get",{originalErrorMessage:e?.message});R.warn(r.message)}}}async function Wt(t,e){try{const n=(await mr()).transaction(te,"readwrite");await n.objectStore(te).put(e,wr(t)),await n.done}catch(r){if(r instanceof x)R.warn(r.message);else{const n=je.create("idb-set",{originalErrorMessage:r?.message});R.warn(n.message)}}}function wr(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=1024,vc=30*24*60*60*1e3;class Ec{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new Tc(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,r;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=jt();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const d=new Date(a.date).valueOf();return Date.now()-d<=vc}),this._storage.overwrite(this._heartbeatsCache))}catch(n){R.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=jt(),{heartbeatsToSend:n,unsentEntries:i}=Ic(this._heartbeatsCache.heartbeats),s=ur(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=r,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(r){return R.warn(r),""}}}function jt(){return new Date().toISOString().substring(0,10)}function Ic(t,e=wc){const r=[];let n=t.slice();for(const i of t){const s=r.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),qt(r)>e){s.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),qt(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class Tc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ga()?pa().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await mc(this.app);return r?.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wt(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wt(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function qt(t){return ur(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(t){ee(new Z("platform-logger",e=>new xa(e),"PRIVATE")),ee(new Z("heartbeat",e=>new Ec(e),"PRIVATE")),J(xe,Ht,t),J(xe,Ht,"esm2017"),J("fire-js","")}Ac("");function vr(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r}function Er(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Sc=Er,Ir=new re("auth","Firebase",Er());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new pr("@firebase/auth");function Oc(t,...e){le.logLevel<=b.WARN&&le.warn(`Auth (${qe}): ${t}`,...e)}function ae(t,...e){le.logLevel<=b.ERROR&&le.error(`Auth (${qe}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,...e){throw Je(t,...e)}function Tr(t,...e){return Je(t,...e)}function Ar(t,e,r){const n=Object.assign(Object.assign({},Sc()),{[e]:r});return new re("auth","Firebase",n).create(e,{appName:t.name})}function ce(t){return Ar(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Je(t,...e){if(typeof t!="string"){const r=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(r,...n)}return Ir.create(t,...e)}function p(t,e,...r){if(!t)throw Je(e,...r)}function K(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ae(e),new Error(e)}function he(t,e){t||K(e)}function Nc(){return Kt()==="http:"||Kt()==="https:"}function Kt(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Nc()||ua()||"connection"in navigator)?navigator.onLine:!0}function Dc(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,r){this.shortDelay=e,this.longDelay=r,he(r>e,"Short delay should be less than long delay!"),this.isMobile=la()||fa()}get(){return Rc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(t,e){he(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{static initialize(e,r,n){this.fetchImpl=e,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;K("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;K("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;K("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=new ne(3e4,6e4);function Or(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function pe(t,e,r,n,i={}){return Nr(t,i,async()=>{let s={},a={};n&&(e==="GET"?a=n:s={body:JSON.stringify(n)});const d=gr(Object.assign({key:t.config.apiKey},a)).slice(1),_=await t._getAdditionalHeaders();_["Content-Type"]="application/json",t.languageCode&&(_["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:_},s);return ha()||(l.referrerPolicy="no-referrer"),Sr.fetch()(Rr(t,t.config.apiHost,r,d),l)})}async function Nr(t,e,r){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},Lc),e);try{const i=new kc(t),s=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw se(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const d=s.ok?a.errorMessage:a.error.message,[_,l]=d.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw se(t,"credential-already-in-use",a);if(_==="EMAIL_EXISTS")throw se(t,"email-already-in-use",a);if(_==="USER_DISABLED")throw se(t,"user-disabled",a);const f=n[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ar(t,f,l);Jt(t,f)}}catch(i){if(i instanceof x)throw i;Jt(t,"network-request-failed",{message:String(i)})}}function Rr(t,e,r,n){const i=`${e}${r}?${n}`;return t.config.emulator?Cc(t.config,i):`${t.config.apiScheme}://${i}`}class kc{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(Tr(this.auth,"network-request-failed")),Pc.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function se(t,e,r){const n={appName:t.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=Tr(t,e,n);return i.customData._tokenResponse=r,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mc(t,e){return pe(t,"POST","/v1/accounts:delete",e)}async function Dr(t,e){return pe(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Uc(t,e=!1){const r=ge(t),n=await r.getIdToken(e),i=Cr(n);p(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:n,authTime:X(Oe(i.auth_time)),issuedAtTime:X(Oe(i.iat)),expirationTime:X(Oe(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Oe(t){return Number(t)*1e3}function Cr(t){const[e,r,n]=t.split(".");if(e===void 0||r===void 0||n===void 0)return ae("JWT malformed, contained fewer than 3 sections"),null;try{const i=fr(r);return i?JSON.parse(i):(ae("Failed to decode base64 JWT payload"),null)}catch(i){return ae("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Xt(t){const e=Cr(t);return p(e,"internal-error"),p(typeof e.exp<"u","internal-error"),p(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Be(t,e,r=!1){if(r)return e;try{return await e}catch(n){throw n instanceof x&&Fc(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function Fc({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=X(this.lastLoginAt),this.creationTime=X(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ue(t){var e;const r=t.auth,n=await t.getIdToken(),i=await Be(t,Dr(r,{idToken:n}));p(i?.users.length,r,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Lr(s.providerUserInfo):[],d=$c(t.providerData,a),_=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!d?.length,f=_?l:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:d,metadata:new $e(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,y)}async function Bc(t){const e=ge(t);await ue(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $c(t,e){return[...t.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Lr(t){return t.map(e=>{var{providerId:r}=e,n=vr(e,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zc(t,e){const r=await Nr(t,{},async()=>{const n=gr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=Rr(t,i,"/v1/token",`key=${s}`),d=await t._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",Sr.fetch()(a,{method:"POST",headers:d,body:n})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function Hc(t,e){return pe(t,"POST","/v2/accounts:revokeToken",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){p(e.idToken,"internal-error"),p(typeof e.idToken<"u","internal-error"),p(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xt(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}updateFromIdToken(e){p(e.length!==0,"internal-error");const r=Xt(e);this.updateTokensAndExpiration(e,null,r)}async getToken(e,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(p(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:n,refreshToken:i,expiresIn:s}=await zc(e,r);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,r,n){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,r){const{refreshToken:n,accessToken:i,expirationTime:s}=r,a=new z;return n&&(p(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),i&&(p(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(p(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new z,this.toJSON())}_performRefresh(){return K("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t,e){p(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class L{constructor(e){var{uid:r,auth:n,stsTokenManager:i}=e,s=vr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $e(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const r=await Be(this,this.stsTokenManager.getToken(this.auth,e));return p(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return Uc(this,e)}reload(){return Bc(this)}_assign(e){this!==e&&(p(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new L(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(e){p(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),r&&await ue(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(W(this.auth.app))return Promise.reject(ce(this.auth));const e=await this.getIdToken();return await Be(this,Mc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var n,i,s,a,d,_,l,f;const y=(n=r.displayName)!==null&&n!==void 0?n:void 0,T=(i=r.email)!==null&&i!==void 0?i:void 0,m=(s=r.phoneNumber)!==null&&s!==void 0?s:void 0,D=(a=r.photoURL)!==null&&a!==void 0?a:void 0,Ke=(d=r.tenantId)!==null&&d!==void 0?d:void 0,be=(_=r._redirectEventId)!==null&&_!==void 0?_:void 0,Xe=(l=r.createdAt)!==null&&l!==void 0?l:void 0,Ye=(f=r.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:ye,emailVerified:Qe,isAnonymous:Ze,providerData:me,stsTokenManager:et}=r;p(ye&&et,e,"internal-error");const Mr=z.fromJSON(this.name,et);p(typeof ye=="string",e,"internal-error"),C(y,e.name),C(T,e.name),p(typeof Qe=="boolean",e,"internal-error"),p(typeof Ze=="boolean",e,"internal-error"),C(m,e.name),C(D,e.name),C(Ke,e.name),C(be,e.name),C(Xe,e.name),C(Ye,e.name);const we=new L({uid:ye,auth:e,email:T,emailVerified:Qe,displayName:y,isAnonymous:Ze,photoURL:D,phoneNumber:m,tenantId:Ke,stsTokenManager:Mr,createdAt:Xe,lastLoginAt:Ye});return me&&Array.isArray(me)&&(we.providerData=me.map(Ur=>Object.assign({},Ur))),be&&(we._redirectEventId=be),we}static async _fromIdTokenResponse(e,r,n=!1){const i=new z;i.updateFromServerResponse(r);const s=new L({uid:r.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ue(s),s}static async _fromGetAccountInfoResponse(e,r,n){const i=r.users[0];p(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Lr(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,d=new z;d.updateFromIdToken(n);const _=new L({uid:i.localId,auth:e,stsTokenManager:d,isAnonymous:a}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new $e(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(_,l),_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=new Map;function U(t){he(t instanceof Function,"Expected a class definition");let e=Yt.get(t);return e?(he(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yt.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}Pr.type="NONE";const Qt=Pr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t,e,r){return`firebase:${t}:${e}:${r}`}class H{constructor(e,r,n){this.persistence=e,this.auth=r,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=Ne(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ne("persistence",i.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?L._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,n="authUser"){if(!r.length)return new H(U(Qt),e,n);const i=(await Promise.all(r.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||U(Qt);const a=Ne(n,e.config.apiKey,e.name);let d=null;for(const l of r)try{const f=await l._get(a);if(f){const y=L._fromJSON(e,f);l!==s&&(d=y),s=l;break}}catch{}const _=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!_.length?new H(s,e,n):(s=_[0],d&&await s._set(a,d.toJSON()),await Promise.all(r.map(async l=>{if(l!==s)try{await l._remove(a)}catch{}})),new H(s,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jc(e))return"Blackberry";if(Kc(e))return"Webos";if(Vc(e))return"Safari";if((e.includes("chrome/")||Wc(e))&&!e.includes("edge/"))return"Chrome";if(qc(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(r);if(n?.length===2)return n[1]}return"Other"}function Gc(t=N()){return/firefox\//i.test(t)}function Vc(t=N()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wc(t=N()){return/crios\//i.test(t)}function jc(t=N()){return/iemobile/i.test(t)}function qc(t=N()){return/android/i.test(t)}function Jc(t=N()){return/blackberry/i.test(t)}function Kc(t=N()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(t,e=[]){let r;switch(t){case"Browser":r=Zt(N());break;case"Worker":r=`${Zt(N())}-${t}`;break;default:r=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${qe}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const n=s=>new Promise((a,d)=>{try{const _=e(s);a(_)}catch(_){d(_)}});n.onAbort=r,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const n of this.queue)await n(e),n.onAbort&&r.push(n.onAbort)}catch(n){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yc(t,e={}){return pe(t,"GET","/v2/passwordPolicy",Or(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=6;class Zc{constructor(e){var r,n,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=a.minPasswordLength)!==null&&r!==void 0?r:Qc,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var r,n,i,s,a,d;const _={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,_),this.validatePasswordCharacterOptions(e,_),_.isValid&&(_.isValid=(r=_.meetsMinPasswordLength)!==null&&r!==void 0?r:!0),_.isValid&&(_.isValid=(n=_.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),_.isValid&&(_.isValid=(i=_.containsLowercaseLetter)!==null&&i!==void 0?i:!0),_.isValid&&(_.isValid=(s=_.containsUppercaseLetter)!==null&&s!==void 0?s:!0),_.isValid&&(_.isValid=(a=_.containsNumericCharacter)!==null&&a!==void 0?a:!0),_.isValid&&(_.isValid=(d=_.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),_}validatePasswordLengthOptions(e,r){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(r.meetsMinPasswordLength=e.length>=n),i&&(r.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(r,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,r,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,r,n,i){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new er(this),this.idTokenSubscription=new er(this),this.beforeStateQueue=new Xc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ir,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=U(r)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await H.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const r=await Dr(this,{idToken:e}),n=await L._fromGetAccountInfoResponse(this,r,e);await this.directlySetCurrentUser(n)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(W(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(d,d))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,d=i?._redirectEventId,_=await this.tryRedirectSignIn(e);(!a||a===d)&&_?.user&&(i=_.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return p(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await ue(e)}catch(r){if(r?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(W(this.app))return Promise.reject(ce(this));const r=e?ge(e):null;return r&&p(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&p(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return W(this.app)?Promise.reject(ce(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return W(this.app)?Promise.reject(ce(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(U(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Yc(this),r=new Zc(e);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new re("auth","Firebase",e())}onAuthStateChanged(e,r,n){return this.registerStateListener(this.authStateSubscription,e,r,n)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,n){return this.registerStateListener(this.idTokenSubscription,e,r,n)}authStateReady(){return new Promise((e,r)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},r)}})}async revokeAccessToken(e){if(this.currentUser){const r=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:r};this.tenantId!=null&&(n.tenantId=this.tenantId),await Hc(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const n=await this.getOrInitRedirectPersistenceManager(r);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&U(e)||this._popupRedirectResolver;p(r,this,"argument-error"),this.redirectPersistenceManager=await H.create(this,[U(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,n,i){if(this._deleted)return()=>{};const s=typeof r=="function"?r:r.next.bind(r);let a=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(p(d,this,"internal-error"),d.then(()=>{a||s(this.currentUser)}),typeof r=="function"){const _=e.addObserver(r,n,i);return()=>{a=!0,_()}}else{const _=e.addObserver(r);return()=>{a=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return p(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(r["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(r["X-Firebase-AppCheck"]=i),r}async _getAppCheckToken(){var e;const r=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return r?.error&&Oc(`Error while retrieving App Check token: ${r.error}`),r?.token}}function t_(t){return ge(t)}class er{constructor(e){this.auth=e,this.observer=null,this.addObserver=wa(r=>this.observer=r)}get next(){return p(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function r_(t,e){const r=e?.persistence||[],n=(Array.isArray(r)?r:[r]).map(U);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e?.popupRedirectResolver)}new ne(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ne(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ne(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ne(5e3,15e3);var tr="@firebase/auth",rr="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(n=>{e(n?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){p(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function s_(t){ee(new Z("auth",(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:d}=n.options;p(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const _={apiKey:a,authDomain:d,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kr(t)},l=new e_(n,i,s,_);return r_(l,r),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,n)=>{e.getProvider("auth-internal").initialize()})),ee(new Z("auth-internal",e=>{const r=t_(e.getProvider("auth").getImmediate());return(n=>new n_(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),J(tr,rr,i_(t)),J(tr,rr,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=5*60;da("authIdTokenMaxAge");s_("Browser");ze();function a_(t,e){const{doc:r}=t,n=tt(()=>zr(r.notebook)),i=()=>{const a=s();if(a&&a.tag!=="Illformed")return a.diagram},s=tt(()=>{const a=e.theory(),d=e.validatedModel();if(!(a&&d?.tag==="Valid"))return;const{model:_}=d;let l;try{l=Zr(n(),a.theory)}catch(y){return{tag:"Illformed",error:String(y)}}l.inferMissingFrom(_);const f=l.validateIn(_);return f.tag==="Ok"?{tag:"Valid",diagram:l}:{tag:"Invalid",diagram:l,errors:f.content}},void 0,{equals:!1});return{type:"diagram",liveDoc:t,liveModel:e,formalJudgments:n,elaboratedDiagram:i,validatedDiagram:s}}async function c_(t,e,r){const n=await _r(e,t),i=dr(n,"diagram"),s=i.doc.diagramIn._id,a=await r.getLiveModel(s);return a_(i,a)}function __(t){throw new Error(`Unhandled case: ${JSON.stringify(t)}`)}const I_=(t,e)=>({name:"",type:"analysis",analysisType:t,analysisOf:{...e,type:"analysis-of"},notebook:Hr(),version:Qr()});async function T_(t,e,r){const n=await _r(e,t),i=dr(n,"analysis"),{doc:s}=i;let a;const d=s.analysisOf._id;if(s.analysisType==="model"){const _=await r.getLiveModel(d);a={type:"analysis",analysisType:"model",liveDoc:i,liveModel:_}}else if(s.analysisType==="diagram"){const _=await c_(d,e,r);a={type:"analysis",analysisType:"diagram",liveDoc:i,liveDiagram:_}}else throw new Error(`Unknown analysis type: ${s.analysisType}`);return d_(a),a}function d_(t){const e=l_(t),r=i=>{switch(t.analysisType){case"model":return e?.modelAnalysis(i);case"diagram":return e?.diagramAnalysis(i)}},n=t.liveDoc.doc;for(const i of Gr(n.notebook)){const s=r(i.content.id);if(!s)continue;const a=s.initialContent();for(const d in a)d in i.content.content||t.liveDoc.changeDoc(_=>{Vr(_.notebook,i.id,l=>{l.content[d]=a[d]})})}}function l_(t){switch(t.analysisType){case"model":return t.liveModel.theory();case"diagram":return t.liveDiagram.liveModel.theory();default:__(t)}}export{De as D,y_ as L,vt as M,Et as O,Nt as T,E_ as a,It as b,Lt as c,Mt as d,w_ as e,_r as f,T_ as g,Dt as h,sr as i,kt as j,Pt as k,Ot as l,dr as m,I_ as n,Rt as o,Tt as p,At as q,St as r,Ct as s,l_ as t,v_ as u,m_ as v};
