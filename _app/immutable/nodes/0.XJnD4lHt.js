import{s as V,q,n as E,c as F,u as ae,v as ie,w as oe,x as ce}from"../chunks/scheduler.39xZVnvC.js";import{S as A,i as D,e as g,c as v,a as k,d as f,o as m,g as $,s as I,f as L,y as Y,u as P,v as T,w as C,h as z,n as w,q as Z,l as M,m as ee,x as H,z as N,A as te,t as se,b as le,j as fe,B as ue}from"../chunks/index.oePLC5dZ.js";import{w as he,b as R}from"../chunks/entry.pP4oacEB.js";import{p as me}from"../chunks/stores.BXO5snXY.js";function y(a){return a?.length!==void 0?a:Array.from(a)}const de=!0,qe=Object.freeze(Object.defineProperty({__proto__:null,prerender:de},Symbol.toStringTag,{value:"Module"})),ne=he(!1);function Q(a){let e,s,t,l,r;return{c(){e=g("div"),s=I(),t=g("div"),l=I(),r=g("div"),this.h()},l(n){e=v(n,"DIV",{class:!0}),k(e).forEach(f),s=L(n),t=v(n,"DIV",{class:!0}),k(t).forEach(f),l=L(n),r=v(n,"DIV",{class:!0}),k(r).forEach(f),this.h()},h(){m(e,"class","shadow left svelte-azh6i6"),m(t,"class","shadow right svelte-azh6i6"),m(r,"class","glow svelte-azh6i6")},m(n,o){$(n,e,o),$(n,s,o),$(n,t,o),$(n,l,o),$(n,r,o)},d(n){n&&(f(e),f(s),f(t),f(l),f(r))}}}function $e(a){let e,s,t=a[0]&&Q();return{c(){e=g("div"),t&&t.c(),this.h()},l(l){e=v(l,"DIV",{id:!0,class:!0});var r=k(e);t&&t.l(r),r.forEach(f),this.h()},h(){m(e,"id","logo"),m(e,"class",s=q(a[0]?"lamp":"")+" svelte-azh6i6")},m(l,r){$(l,e,r),t&&t.m(e,null)},p(l,[r]){l[0]?t||(t=Q(),t.c(),t.m(e,null)):t&&(t.d(1),t=null),r&1&&s!==(s=q(l[0]?"lamp":"")+" svelte-azh6i6")&&m(e,"class",s)},i:E,o:E,d(l){l&&f(e),t&&t.d()}}}function pe(a,e,s){let t;return F(a,ne,l=>s(0,t=l)),[t]}class _e extends A{constructor(e){super(),D(this,e,pe,$e,V,{})}}function ge(a){let e,s='<div id="text-logo" class="svelte-tgj3og"></div>';return{c(){e=g("a"),e.innerHTML=s,this.h()},l(t){e=v(t,"A",{href:!0,class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-1qlsddb"&&(e.innerHTML=s),this.h()},h(){m(e,"href",R),m(e,"class","svelte-tgj3og")},m(t,l){$(t,e,l)},p:E,i:E,o:E,d(t){t&&f(e)}}}class ve extends A{constructor(e){super(),D(this,e,null,ge,V,{})}}function U(a){let e,s;return e=new ve({}),{c(){P(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){C(e,t,l),s=!0},i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){M(e.$$.fragment,t),s=!1},d(t){H(e,t)}}}function be(a){let e,s,t,l;s=new _e({});let r=!a[0]&&U();return{c(){e=g("header"),P(s.$$.fragment),t=I(),r&&r.c(),this.h()},l(n){e=v(n,"HEADER",{class:!0});var o=k(e);T(s.$$.fragment,o),t=L(o),r&&r.l(o),o.forEach(f),this.h()},h(){m(e,"class","svelte-p9e377")},m(n,o){$(n,e,o),C(s,e,null),z(e,t),r&&r.m(e,null),l=!0},p(n,[o]){n[0]?r&&(Z(),M(r,1,1,()=>{r=null}),ee()):r?o&1&&w(r,1):(r=U(),r.c(),w(r,1),r.m(e,null))},i(n){l||(w(s.$$.fragment,n),w(r),l=!0)},o(n){M(s.$$.fragment,n),M(r),l=!1},d(n){n&&f(e),H(s),r&&r.d()}}}function ke(a,e,s){let t;return F(a,ne,l=>s(0,t=l)),[t]}class Ee extends A{constructor(e){super(),D(this,e,ke,be,V,{})}}function G(a,e,s){const t=a.slice();return t[1]=e[s],t}function J(a){let e;return{c(){e=g("span"),this.h()},l(s){e=v(s,"SPAN",{class:!0}),k(e).forEach(f),this.h()},h(){m(e,"class","line svelte-vk2kmx"),N(e,"dots",a[0])},m(s,t){$(s,e,t)},p(s,t){t&1&&N(e,"dots",s[0])},d(s){s&&f(e)}}}function we(a){let e,s=y({length:3}),t=[];for(let l=0;l<s.length;l+=1)t[l]=J(G(a,s,l));return{c(){e=g("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=v(l,"DIV",{id:!0,class:!0});var r=k(e);for(let n=0;n<t.length;n+=1)t[n].l(r);r.forEach(f),this.h()},h(){m(e,"id","burger"),m(e,"class","svelte-vk2kmx"),N(e,"open",a[0])},m(l,r){$(l,e,r);for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(e,null)},p(l,[r]){if(r&1){s=y({length:3});let n;for(n=0;n<s.length;n+=1){const o=G(l,s,n);t[n]?t[n].p(o,r):(t[n]=J(o),t[n].c(),t[n].m(e,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=s.length}r&1&&N(e,"open",l[0])},i:E,o:E,d(l){l&&f(e),te(t,l)}}}function Me(a,e,s){let{isMenuOpen:t}=e;return a.$$set=l=>{"isMenuOpen"in l&&s(0,t=l.isMenuOpen)},[t]}class Oe extends A{constructor(e){super(),D(this,e,Me,we,V,{isMenuOpen:0})}}function xe(a){let e,s,t,l,r,n;return{c(){e=g("li"),s=g("a"),t=se(a[0]),l=I(),r=g("span"),this.h()},l(o){e=v(o,"LI",{});var d=k(e);s=v(d,"A",{class:!0,href:!0});var _=k(s);t=le(_,a[0]),l=L(_),r=v(_,"SPAN",{class:!0}),k(r).forEach(f),_.forEach(f),d.forEach(f),this.h()},h(){m(r,"class","arrow"),m(s,"class",q(a[1])+" svelte-16mcmdl"),m(s,"href",n=R+"/"+a[0])},m(o,d){$(o,e,d),z(e,s),z(s,t),z(s,l),z(s,r)},p(o,[d]){d&1&&fe(t,o[0]),d&1&&n!==(n=R+"/"+o[0])&&m(s,"href",n)},i:E,o:E,d(o){o&&f(e)}}}function ze(a,e,s){let t;F(a,me,o=>s(2,t=o));let{item:l}=e,r=t.url.pathname.split("/").pop(),n=r==l?"current":"";return console.log("currentlyVisited: "+r),console.log("item: "+l),a.$$set=o=>{"item"in o&&s(0,l=o.item)},[l,n]}class Ie extends A{constructor(e){super(),D(this,e,ze,xe,V,{item:0})}}function K(a,e,s){const t=a.slice();return t[4]=e[s],t}function W(a){let e;return{c(){e=g("div"),this.h()},l(s){e=v(s,"DIV",{class:!0}),k(e).forEach(f),this.h()},h(){m(e,"class","backdrop svelte-akzadl")},m(s,t){$(s,e,t)},d(s){s&&f(e)}}}function X(a){let e,s;return e=new Ie({props:{item:a[4]}}),{c(){P(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){C(e,t,l),s=!0},p:E,i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){M(e.$$.fragment,t),s=!1},d(t){H(e,t)}}}function Le(a){let e,s,t,l,r,n,o,d,_,x,S,h=a[0]&&W(),i=y(a[1]),c=[];for(let u=0;u<i.length;u+=1)c[u]=X(K(a,i,u));const re=u=>M(c[u],1,1,()=>{c[u]=null});return d=new Oe({props:{isMenuOpen:a[0]}}),{c(){h&&h.c(),e=I(),s=g("div"),t=g("nav"),l=g("ol");for(let u=0;u<c.length;u+=1)c[u].c();r=I(),n=g("button"),o=se(`Menu
            `),P(d.$$.fragment),this.h()},l(u){h&&h.l(u),e=L(u),s=v(u,"DIV",{class:!0});var p=k(s);t=v(p,"NAV",{class:!0});var O=k(t);l=v(O,"OL",{class:!0});var b=k(l);for(let B=0;B<c.length;B+=1)c[B].l(b);b.forEach(f),r=L(O),n=v(O,"BUTTON",{class:!0});var j=k(n);o=le(j,`Menu
            `),T(d.$$.fragment,j),j.forEach(f),O.forEach(f),p.forEach(f),this.h()},h(){m(l,"class","svelte-akzadl"),N(l,"open",a[0]),m(n,"class","menu-button svelte-akzadl"),N(n,"expanded",a[0]),m(t,"class","svelte-akzadl"),m(s,"class","container svelte-akzadl")},m(u,p){h&&h.m(u,p),$(u,e,p),$(u,s,p),z(s,t),z(t,l);for(let O=0;O<c.length;O+=1)c[O]&&c[O].m(l,null);z(t,r),z(t,n),z(n,o),C(d,n,null),_=!0,x||(S=ue(n,"click",a[2]),x=!0)},p(u,[p]){if(u[0]?h||(h=W(),h.c(),h.m(e.parentNode,e)):h&&(h.d(1),h=null),p&2){i=y(u[1]);let b;for(b=0;b<i.length;b+=1){const j=K(u,i,b);c[b]?(c[b].p(j,p),w(c[b],1)):(c[b]=X(j),c[b].c(),w(c[b],1),c[b].m(l,null))}for(Z(),b=i.length;b<c.length;b+=1)re(b);ee()}(!_||p&1)&&N(l,"open",u[0]);const O={};p&1&&(O.isMenuOpen=u[0]),d.$set(O),(!_||p&1)&&N(n,"expanded",u[0])},i(u){if(!_){for(let p=0;p<i.length;p+=1)w(c[p]);w(d.$$.fragment,u),_=!0}},o(u){c=c.filter(Boolean);for(let p=0;p<c.length;p+=1)M(c[p]);M(d.$$.fragment,u),_=!1},d(u){u&&(f(e),f(s)),h&&h.d(u),te(c,u),H(d),x=!1,S()}}}function Ve(a,e,s){let l=["Phase One","Roadmap","Lore","FAQ"].map(o=>o.toLowerCase().replace(" ","-")),r=!1;function n(){s(0,r=!r)}return[r,l,n]}class Ae extends A{constructor(e){super(),D(this,e,Ve,Le,V,{})}}function De(a){let e;return{c(){e=g("div"),this.h()},l(s){e=v(s,"DIV",{class:!0}),k(e).forEach(f),this.h()},h(){m(e,"class","bg-texture svelte-1h9netk")},m(s,t){$(s,e,t)},p:E,i:E,o:E,d(s){s&&f(e)}}}class Pe extends A{constructor(e){super(),D(this,e,null,De,V,{})}}function Te(a){let e,s='<div class="container svelte-nc0nh4"><div class="logo svelte-nc0nh4"></div></div>';return{c(){e=g("div"),e.innerHTML=s,this.h()},l(t){e=v(t,"DIV",{class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-nruxf6"&&(e.innerHTML=s),this.h()},h(){m(e,"class","outer-container svelte-nc0nh4")},m(t,l){$(t,e,l)},p:E,i:E,o:E,d(t){t&&f(e)}}}class Ce extends A{constructor(e){super(),D(this,e,null,Te,V,{})}}function He(a){let e,s,t,l,r,n,o,d,_,x;e=new Ce({}),t=new Pe({}),r=new Ee({});const S=a[1].default,h=ae(S,a,a[0],null);return _=new Ae({}),{c(){P(e.$$.fragment),s=I(),P(t.$$.fragment),l=I(),P(r.$$.fragment),n=I(),o=g("main"),h&&h.c(),d=I(),P(_.$$.fragment)},l(i){T(e.$$.fragment,i),s=L(i),T(t.$$.fragment,i),l=L(i),T(r.$$.fragment,i),n=L(i),o=v(i,"MAIN",{});var c=k(o);h&&h.l(c),c.forEach(f),d=L(i),T(_.$$.fragment,i)},m(i,c){C(e,i,c),$(i,s,c),C(t,i,c),$(i,l,c),C(r,i,c),$(i,n,c),$(i,o,c),h&&h.m(o,null),$(i,d,c),C(_,i,c),x=!0},p(i,[c]){h&&h.p&&(!x||c&1)&&ie(h,S,i,i[0],x?ce(S,i[0],c,null):oe(i[0]),null)},i(i){x||(w(e.$$.fragment,i),w(t.$$.fragment,i),w(r.$$.fragment,i),w(h,i),w(_.$$.fragment,i),x=!0)},o(i){M(e.$$.fragment,i),M(t.$$.fragment,i),M(r.$$.fragment,i),M(h,i),M(_.$$.fragment,i),x=!1},d(i){i&&(f(s),f(l),f(n),f(o),f(d)),H(e,i),H(t,i),H(r,i),h&&h.d(i),H(_,i)}}}function Ne(a,e,s){let{$$slots:t={},$$scope:l}=e;return a.$$set=r=>{"$$scope"in r&&s(0,l=r.$$scope)},[l,t]}class Re extends A{constructor(e){super(),D(this,e,Ne,He,V,{})}}export{Re as component,qe as universal};