import{g as ne,e as re,i as B,f as G,n as K,r as E,u as le,t as ue,j as Q,k as ae,l as Y,w as x,b as F,m as ie,s as se}from"./@vue.54440ad7.js";function q(e){return ne()?(re(e),!0):!1}function A(e){return typeof e=="function"?e():le(e)}const V=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const oe=Object.prototype.toString,ce=e=>oe.call(e)==="[object Object]",j=()=>{};function $(e,n){function t(...u){return new Promise((r,l)=>{Promise.resolve(e(()=>n.apply(this,u),{fn:n,thisArg:this,args:u})).then(r).catch(l)})}return t}const U=e=>e();function fe(...e){let n=0,t,u=!0,r=j,l,c,i,s,f;!B(e[0])&&typeof e[0]=="object"?{delay:c,trailing:i=!0,leading:s=!0,rejectOnCancel:f=!1}=e[0]:[c,i=!0,s=!0,f=!1]=e;const d=()=>{t&&(clearTimeout(t),t=void 0,r(),r=j)};return b=>{const v=A(c),g=Date.now()-n,h=()=>l=b();return d(),v<=0?(n=Date.now(),h()):(g>v&&(s||!u)?(n=Date.now(),h()):i&&(l=new Promise((w,a)=>{r=f?a:w,t=setTimeout(()=>{n=Date.now(),u=!0,w(h()),d()},Math.max(0,v-g))})),!s&&!t&&(t=setTimeout(()=>u=!0,v)),u=!1,l)}}function de(e=U){const n=E(!0);function t(){n.value=!1}function u(){n.value=!0}const r=(...l)=>{n.value&&e(...l)};return{isActive:Q(n),pause:t,resume:u,eventFilter:r}}function ve(e){return e||Y()}function me(...e){if(e.length!==1)return ue(...e);const n=e[0];return typeof n=="function"?Q(ae(()=>({get:n,set:j}))):E(n)}function Ae(e,n=200,t=!1,u=!0,r=!1){return $(fe(n,t,u,r),e)}function pe(e,n,t={}){const{eventFilter:u=U,...r}=t;return x(e,$(u,n),r)}function he(e,n,t={}){const{eventFilter:u,...r}=t,{eventFilter:l,pause:c,resume:i,isActive:s}=de(u);return{stop:pe(e,n,{...r,eventFilter:l}),pause:c,resume:i,isActive:s}}function H(e,n=!0,t){ve()?G(e,t):n?e():K(e)}function De(e=!1,n={}){const{truthyValue:t=!0,falsyValue:u=!1}=n,r=B(e),l=E(e);function c(i){if(arguments.length)return l.value=i,l.value;{const s=A(t);return l.value=l.value===s?A(u):s,l.value}}return r?c:[l,c]}function I(e){var n;const t=A(e);return(n=t==null?void 0:t.$el)!=null?n:t}const D=V?window:void 0,ge=V?window.document:void 0;V&&window.navigator;V&&window.location;function _(...e){let n,t,u,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,u,r]=e,n=D):[n,t,u,r]=e,!n)return j;Array.isArray(t)||(t=[t]),Array.isArray(u)||(u=[u]);const l=[],c=()=>{l.forEach(d=>d()),l.length=0},i=(d,p,b,v)=>(d.addEventListener(p,b,v),()=>d.removeEventListener(p,b,v)),s=x(()=>[I(n),A(r)],([d,p])=>{if(c(),!d)return;const b=ce(p)?{...p}:p;l.push(...t.flatMap(v=>u.map(g=>i(d,v,g,b))))},{immediate:!0,flush:"post"}),f=()=>{s(),c()};return q(f),f}function we(){const e=E(!1),n=Y();return n&&G(()=>{e.value=!0},n),e}function X(e){const n=we();return F(()=>(n.value,Boolean(e())))}function Z(e,n={}){const{window:t=D}=n,u=X(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let r;const l=E(!1),c=f=>{l.value=f.matches},i=()=>{!r||("removeEventListener"in r?r.removeEventListener("change",c):r.removeListener(c))},s=ie(()=>{!u.value||(i(),r=t.matchMedia(A(e)),"addEventListener"in r?r.addEventListener("change",c):r.addListener(c),l.value=r.matches)});return q(()=>{s(),i(),r=void 0}),l}const z=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},W="__vueuse_ssr_handlers__",ye=Se();function Se(){return W in z||(z[W]=z[W]||{}),z[W]}function ee(e,n){return ye[e]||n}function be(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const Fe={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},P="vueuse-storage";function Ee(e,n,t,u={}){var r;const{flush:l="pre",deep:c=!0,listenToStorageChanges:i=!0,writeDefaults:s=!0,mergeDefaults:f=!1,shallow:d,window:p=D,eventFilter:b,onError:v=o=>{console.error(o)},initOnMounted:g}=u,h=(d?se:E)(typeof n=="function"?n():n);if(!t)try{t=ee("getDefaultStorage",()=>{var o;return(o=D)==null?void 0:o.localStorage})()}catch(o){v(o)}if(!t)return h;const w=A(n),a=be(w),k=(r=u.serializer)!=null?r:Fe[a],{pause:L,resume:y}=he(h,()=>R(h.value),{flush:l,deep:c,eventFilter:b});p&&i&&H(()=>{t instanceof Storage?_(p,"storage",T):_(p,P,O),g&&T()}),g||T();function C(o,m){p&&!(t instanceof Storage)&&p.dispatchEvent(new CustomEvent(P,{detail:{key:e,oldValue:o,newValue:m,storageArea:t}}))}function R(o){try{const m=t.getItem(e);if(o==null)C(m,null),t.removeItem(e);else{const S=k.write(o);m!==S&&(t.setItem(e,S),C(m,S))}}catch(m){v(m)}}function M(o){const m=o?o.newValue:t.getItem(e);if(m==null)return s&&w!=null&&t.setItem(e,k.write(w)),w;if(!o&&f){const S=k.read(m);return typeof f=="function"?f(S,w):a==="object"&&!Array.isArray(S)?{...w,...S}:S}else return typeof m!="string"?m:k.read(m)}function T(o){if(!(o&&o.storageArea!==t)){if(o&&o.key==null){h.value=w;return}if(!(o&&o.key!==e)){L();try{(o==null?void 0:o.newValue)!==k.write(h.value)&&(h.value=M(o))}catch(m){v(m)}finally{o?K(y):y()}}}}function O(o){T(o.detail)}return h}function te(e){return Z("(prefers-color-scheme: dark)",e)}const ke="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function Ce(e={}){const{selector:n="html",attribute:t="class",initialValue:u="auto",window:r=D,storage:l,storageKey:c="vueuse-color-scheme",listenToStorageChanges:i=!0,storageRef:s,emitAuto:f,disableTransition:d=!0}=e,p={auto:"",light:"light",dark:"dark",...e.modes||{}},b=te({window:r}),v=F(()=>b.value?"dark":"light"),g=s||(c==null?me(u):Ee(c,u,l,{window:r,listenToStorageChanges:i})),h=F(()=>g.value==="auto"?v.value:g.value),w=ee("updateHTMLAttrs",(y,C,R)=>{const M=typeof y=="string"?r==null?void 0:r.document.querySelector(y):I(y);if(!M)return;const T=new Set,O=new Set;let o=null;if(C==="class"){const S=R.split(/\s/g);Object.values(p).flatMap(N=>(N||"").split(/\s/g)).filter(Boolean).forEach(N=>{S.includes(N)?T.add(N):O.add(N)})}else o={key:C,value:R};if(T.size===0&&O.size===0&&o===null)return;let m;d&&(m=r.document.createElement("style"),m.appendChild(document.createTextNode(ke)),r.document.head.appendChild(m));for(const S of T)M.classList.add(S);for(const S of O)M.classList.remove(S);o&&M.setAttribute(o.key,o.value),d&&(r.getComputedStyle(m).opacity,document.head.removeChild(m))});function a(y){var C;w(n,t,(C=p[y])!=null?C:y)}function k(y){e.onChanged?e.onChanged(y,a):a(y)}x(h,k,{flush:"post",immediate:!0}),H(()=>k(h.value));const L=F({get(){return f?g.value:h.value},set(y){g.value=y}});try{return Object.assign(L,{store:g,system:v,state:h})}catch{return L}}function Me(e={}){const{valueDark:n="dark",valueLight:t="",window:u=D}=e,r=Ce({...e,onChanged:(i,s)=>{var f;e.onChanged?(f=e.onChanged)==null||f.call(e,i==="dark",s,i):s(i)},modes:{dark:n,light:t}}),l=F(()=>r.system?r.system.value:te({window:u}).value?"dark":"light");return F({get(){return r.value==="dark"},set(i){const s=i?"dark":"light";l.value===s?r.value="auto":r.value=s}})}const J=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Oe(e,n={}){const{document:t=ge,autoExit:u=!1}=n,r=F(()=>{var a;return(a=I(e))!=null?a:t==null?void 0:t.querySelector("html")}),l=E(!1),c=F(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(a=>t&&a in t||r.value&&a in r.value)),i=F(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(a=>t&&a in t||r.value&&a in r.value)),s=F(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(a=>t&&a in t||r.value&&a in r.value)),f=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(a=>t&&a in t),d=X(()=>r.value&&t&&c.value!==void 0&&i.value!==void 0&&s.value!==void 0),p=()=>f?(t==null?void 0:t[f])===r.value:!1,b=()=>{if(s.value){if(t&&t[s.value]!=null)return t[s.value];{const a=r.value;if((a==null?void 0:a[s.value])!=null)return Boolean(a[s.value])}}return!1};async function v(){if(!(!d.value||!l.value)){if(i.value)if((t==null?void 0:t[i.value])!=null)await t[i.value]();else{const a=r.value;(a==null?void 0:a[i.value])!=null&&await a[i.value]()}l.value=!1}}async function g(){if(!d.value||l.value)return;b()&&await v();const a=r.value;c.value&&(a==null?void 0:a[c.value])!=null&&(await a[c.value](),l.value=!0)}async function h(){await(l.value?v():g())}const w=()=>{const a=b();(!a||a&&p())&&(l.value=a)};return _(t,J,w,!1),_(()=>I(r),J,w,!1),u&&q(v),{isSupported:d,isFullscreen:l,enter:g,exit:v,toggle:h}}function Ne(e={}){const{window:n=D,initialWidth:t=Number.POSITIVE_INFINITY,initialHeight:u=Number.POSITIVE_INFINITY,listenOrientation:r=!0,includeScrollbar:l=!0,type:c="inner"}=e,i=E(t),s=E(u),f=()=>{n&&(c==="outer"?(i.value=n.outerWidth,s.value=n.outerHeight):l?(i.value=n.innerWidth,s.value=n.innerHeight):(i.value=n.document.documentElement.clientWidth,s.value=n.document.documentElement.clientHeight))};if(f(),H(f),_("resize",f,{passive:!0}),r){const d=Z("(orientation: portrait)");x(d,()=>f())}return{width:i,height:s}}export{De as a,Oe as b,_ as c,Ne as d,Ae as e,Me as u};
