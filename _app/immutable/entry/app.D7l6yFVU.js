const __vite__fileDeps=["_app/immutable/nodes/0.CBj1wohR.js","_app/immutable/chunks/scheduler.CrxemGcQ.js","_app/immutable/chunks/index.BF0VJU1K.js","_app/immutable/chunks/entry.GoKKS70J.js","_app/immutable/chunks/index.PY1WKW7Z.js","_app/immutable/chunks/stores.BgCHm5E_.js","_app/immutable/chunks/language.Bxh_qVB8.js","_app/immutable/assets/0.CVdG-weo.css","_app/immutable/nodes/1.Dg-eGs59.js","_app/immutable/nodes/2.BlJCw7t4.js","_app/immutable/nodes/3.B2sW0j7C.js","_app/immutable/assets/3.BSMvkLcW.css","_app/immutable/nodes/4.BfespTKl.js","_app/immutable/nodes/5.COcH2MlB.js","_app/immutable/nodes/6.ZkIEsfz6.js","_app/immutable/assets/6.BXjUDlm7.css","_app/immutable/nodes/7.D1Y9jK7A.js","_app/immutable/assets/7.CkEsNyPI.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{s as N,a as B,o as U,b as I,t as j}from"../chunks/scheduler.CrxemGcQ.js";import{S as z,i as W,s as F,m as p,j as G,k as v,t as g,n as L,o as w,d as b,e as H,c as J,f as K,a as O,p as d,q as Q,r as X,u as Y,v as D,w as y,x as P,y as T,z as R,A}from"../chunks/index.BF0VJU1K.js";const Z="modulepreload",M=function(a){return"/naive-and-arrogant/"+a},V={},h=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){const _=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),r=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));i=Promise.all(n.map(o=>{if(o=M(o),o in V)return;V[o]=!0;const f=o.endsWith(".css"),l=f?'[rel="stylesheet"]':"";if(!!s)for(let E=_.length-1;E>=0;E--){const k=_[E];if(k.href===o&&(!f||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=f?"stylesheet":Z,f||(u.as="script",u.crossOrigin=""),u.href=o,r&&u.setAttribute("nonce",r),document.head.appendChild(u),f)return new Promise((E,k)=>{u.addEventListener("load",E),u.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>e()).catch(_=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=_,window.dispatchEvent(t),!t.defaultPrevented)throw _})},re={};function $(a){let e,n,s;var i=a[1][0];function _(t,r){return{props:{data:t[3],form:t[2]}}}return i&&(e=y(i,_(a)),a[12](e)),{c(){e&&P(e.$$.fragment),n=p()},l(t){e&&T(e.$$.fragment,t),n=p()},m(t,r){e&&R(e,t,r),v(t,n,r),s=!0},p(t,r){if(r&2&&i!==(i=t[1][0])){if(e){D();const o=e;g(o.$$.fragment,1,0,()=>{A(o,1)}),L()}i?(e=y(i,_(t)),t[12](e),P(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(i){const o={};r&8&&(o.data=t[3]),r&4&&(o.form=t[2]),e.$set(o)}},i(t){s||(e&&w(e.$$.fragment,t),s=!0)},o(t){e&&g(e.$$.fragment,t),s=!1},d(t){t&&b(n),a[12](null),e&&A(e,t)}}}function x(a){let e,n,s;var i=a[1][0];function _(t,r){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return i&&(e=y(i,_(a)),a[11](e)),{c(){e&&P(e.$$.fragment),n=p()},l(t){e&&T(e.$$.fragment,t),n=p()},m(t,r){e&&R(e,t,r),v(t,n,r),s=!0},p(t,r){if(r&2&&i!==(i=t[1][0])){if(e){D();const o=e;g(o.$$.fragment,1,0,()=>{A(o,1)}),L()}i?(e=y(i,_(t)),t[11](e),P(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(i){const o={};r&8&&(o.data=t[3]),r&8215&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)}},i(t){s||(e&&w(e.$$.fragment,t),s=!0)},o(t){e&&g(e.$$.fragment,t),s=!1},d(t){t&&b(n),a[11](null),e&&A(e,t)}}}function ee(a){let e,n,s;var i=a[1][1];function _(t,r){return{props:{data:t[4],form:t[2]}}}return i&&(e=y(i,_(a)),a[10](e)),{c(){e&&P(e.$$.fragment),n=p()},l(t){e&&T(e.$$.fragment,t),n=p()},m(t,r){e&&R(e,t,r),v(t,n,r),s=!0},p(t,r){if(r&2&&i!==(i=t[1][1])){if(e){D();const o=e;g(o.$$.fragment,1,0,()=>{A(o,1)}),L()}i?(e=y(i,_(t)),t[10](e),P(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(i){const o={};r&16&&(o.data=t[4]),r&4&&(o.form=t[2]),e.$set(o)}},i(t){s||(e&&w(e.$$.fragment,t),s=!0)},o(t){e&&g(e.$$.fragment,t),s=!1},d(t){t&&b(n),a[10](null),e&&A(e,t)}}}function S(a){let e,n=a[6]&&q(a);return{c(){e=H("div"),n&&n.c(),this.h()},l(s){e=J(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=K(e);n&&n.l(i),i.forEach(b),this.h()},h(){O(e,"id","svelte-announcer"),O(e,"aria-live","assertive"),O(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(s,i){v(s,e,i),n&&n.m(e,null)},p(s,i){s[6]?n?n.p(s,i):(n=q(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&b(e),n&&n.d()}}}function q(a){let e;return{c(){e=Q(a[7])},l(n){e=X(n,a[7])},m(n,s){v(n,e,s)},p(n,s){s&128&&Y(e,n[7])},d(n){n&&b(e)}}}function te(a){let e,n,s,i,_;const t=[x,$],r=[];function o(l,m){return l[1][1]?0:1}e=o(a),n=r[e]=t[e](a);let f=a[5]&&S(a);return{c(){n.c(),s=F(),f&&f.c(),i=p()},l(l){n.l(l),s=G(l),f&&f.l(l),i=p()},m(l,m){r[e].m(l,m),v(l,s,m),f&&f.m(l,m),v(l,i,m),_=!0},p(l,[m]){let u=e;e=o(l),e===u?r[e].p(l,m):(D(),g(r[u],1,1,()=>{r[u]=null}),L(),n=r[e],n?n.p(l,m):(n=r[e]=t[e](l),n.c()),w(n,1),n.m(s.parentNode,s)),l[5]?f?f.p(l,m):(f=S(l),f.c(),f.m(i.parentNode,i)):f&&(f.d(1),f=null)},i(l){_||(w(n),_=!0)},o(l){g(n),_=!1},d(l){l&&(b(s),b(i)),r[e].d(l),f&&f.d(l)}}}function ne(a,e,n){let{stores:s}=e,{page:i}=e,{constructors:_}=e,{components:t=[]}=e,{form:r}=e,{data_0:o=null}=e,{data_1:f=null}=e;B(s.page.notify);let l=!1,m=!1,u=null;U(()=>{const c=s.page.subscribe(()=>{l&&(n(6,m=!0),j().then(()=>{n(7,u=document.title||"untitled page")}))});return n(5,l=!0),c});function E(c){I[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function k(c){I[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function C(c){I[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return a.$$set=c=>{"stores"in c&&n(8,s=c.stores),"page"in c&&n(9,i=c.page),"constructors"in c&&n(1,_=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,r=c.form),"data_0"in c&&n(3,o=c.data_0),"data_1"in c&&n(4,f=c.data_1)},a.$$.update=()=>{a.$$.dirty&768&&s.page.set(i)},[t,_,r,o,f,l,m,u,s,i,E,k,C]}class oe extends z{constructor(e){super(),W(this,e,ne,te,N,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>h(()=>import("../nodes/0.CBj1wohR.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])),()=>h(()=>import("../nodes/1.Dg-eGs59.js"),__vite__mapDeps([8,1,2,3,4])),()=>h(()=>import("../nodes/2.BlJCw7t4.js"),__vite__mapDeps([9,1,2,3,4])),()=>h(()=>import("../nodes/3.B2sW0j7C.js"),__vite__mapDeps([10,1,2,11])),()=>h(()=>import("../nodes/4.BfespTKl.js"),__vite__mapDeps([12,1,2])),()=>h(()=>import("../nodes/5.COcH2MlB.js"),__vite__mapDeps([13,1,2])),()=>h(()=>import("../nodes/6.ZkIEsfz6.js"),__vite__mapDeps([14,1,2,6,4,15])),()=>h(()=>import("../nodes/7.D1Y9jK7A.js"),__vite__mapDeps([16,1,2,5,3,4,17]))],le=[],fe={"/":[2],"/claim-yours":[3],"/faq":[4],"/lore":[5],"/phase-one":[6],"/roadmap":[7]},ce={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{fe as dictionary,ce as hooks,re as matchers,ae as nodes,oe as root,le as server_loads};