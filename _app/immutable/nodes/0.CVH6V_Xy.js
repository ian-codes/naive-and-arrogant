import{s as L,n as T,r as ge,d as J,v as ke,o as x,b as _e,u as ve,w as Ee,x as we,y as Me,z as Ie}from"../chunks/scheduler.B1t7I8mm.js";import{S as q,i as U,e as v,s as S,c as p,f as $,g as te,j as A,d as c,a as g,D as I,k as M,b as E,l as Y,p as se,x as P,y as z,z as B,o as N,t as H,A as j,E as pe,q as ne,r as le,u as re,G as be,v as Oe,n as De,m as G}from"../chunks/index.DlzWufYi.js";import{l as W}from"../chunks/language.Bc44l3E0.js";import{w as ye}from"../chunks/index.3zxEg8GZ.js";import{b as X}from"../chunks/entry.DJ1us8fx.js";import{e as Z,p as Ve}from"../chunks/stores.BFakKnEc.js";const Te=!0,gt=Object.freeze(Object.defineProperty({__proto__:null,prerender:Te},Symbol.toStringTag,{value:"Module"})),K=ye(0);function Se(r){let e,t,s="EN",n,i,l="|",o,a,f="DE",h,k;return{c(){e=v("div"),t=v("button"),t.textContent=s,n=S(),i=v("span"),i.textContent=l,o=S(),a=v("button"),a.textContent=f,this.h()},l(_){e=p(_,"DIV",{class:!0});var b=$(e);t=p(b,"BUTTON",{class:!0,"data-svelte-h":!0}),te(t)!=="svelte-iihaos"&&(t.textContent=s),n=A(b),i=p(b,"SPAN",{class:!0,"data-svelte-h":!0}),te(i)!=="svelte-1dytxz4"&&(i.textContent=l),o=A(b),a=p(b,"BUTTON",{class:!0,"data-svelte-h":!0}),te(a)!=="svelte-6trq7k"&&(a.textContent=f),b.forEach(c),this.h()},h(){g(t,"class","p-1 svelte-lu26y3"),I(t,"active",r[1]=="en"),g(i,"class","divider svelte-lu26y3"),g(a,"class","p-1 svelte-lu26y3"),I(a,"active",r[1]=="de"),g(e,"class","dark:text-white text-s flex-r gap-0 sm:gap-0.5 svelte-lu26y3"),I(e,"light",r[0])},m(_,b){M(_,e,b),E(e,t),E(e,n),E(e,i),E(e,o),E(e,a),h||(k=[Y(t,"click",r[3]),Y(a,"click",r[4])],h=!0)},p(_,[b]){b&2&&I(t,"active",_[1]=="en"),b&2&&I(a,"active",_[1]=="de"),b&1&&I(e,"light",_[0])},i:T,o:T,d(_){_&&c(e),h=!1,ge(k)}}}function Ae(r,e,t){let s,n;J(r,K,f=>t(5,s=f)),J(r,W,f=>t(1,n=f));let{light:i=!1}=e;function l(f){K.set(ke(K,s+=1,s)),setTimeout(()=>{W.set(f)},1e3)}const o=()=>l("en"),a=()=>l("de");return r.$$set=f=>{"light"in f&&t(0,i=f.light)},[i,n,l,o,a]}class $e extends q{constructor(e){super(),U(this,e,Ae,Se,L,{light:0})}}function Ne(r){let e,t,s,n;return{c(){e=v("button"),this.h()},l(i){e=p(i,"BUTTON",{class:!0,style:!0}),$(e).forEach(c),this.h()},h(){g(e,"class",t=(r[0]?"invert":"")+" dark:invert hover:scale-105 transition-all bg-center bg-contain bg-no-repeat w-6 h-6"),se(e,"background-image","url("+(r[1]?"icon/darkmode.svg":"icon/lightmode.svg")+")")},m(i,l){M(i,e,l),s||(n=Y(e,"click",r[2]),s=!0)},p(i,[l]){l&1&&t!==(t=(i[0]?"invert":"")+" dark:invert hover:scale-105 transition-all bg-center bg-contain bg-no-repeat w-6 h-6")&&g(e,"class",t),l&2&&se(e,"background-image","url("+(i[1]?"icon/darkmode.svg":"icon/lightmode.svg")+")")},i:T,o:T,d(i){i&&c(e),s=!1,n()}}}function He(r,e,t){let{light:s}=e,n;function i(){t(1,n=!n),n?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),console.log(n),console.log(document.documentElement.classList)}return x(()=>{localStorage.getItem("color-theme")==="dark"||!("color-theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.classList.add("dark"),t(1,n=!0)):(document.documentElement.classList.remove("dark"),t(1,n=!1))}),r.$$set=l=>{"light"in l&&t(0,s=l.light)},[s,n,i]}class Ce extends q{constructor(e){super(),U(this,e,He,Ne,L,{light:0})}}function Le(r){let e,t;return{c(){e=v("a"),t=v("div"),this.h()},l(s){e=p(s,"A",{href:!0,class:!0});var n=$(e);t=p(n,"DIV",{class:!0,id:!0}),$(t).forEach(c),n.forEach(c),this.h()},h(){g(t,"class","dark:invert w-28 h-20 sm:w-32 sm:h-20 svelte-1nll8ss"),g(t,"id","text-logo"),I(t,"light",r[0]),g(e,"href",X),g(e,"class","svelte-1nll8ss")},m(s,n){M(s,e,n),E(e,t)},p(s,[n]){n&1&&I(t,"light",s[0])},i:T,o:T,d(s){s&&c(e)}}}function Pe(r,e,t){let{light:s=!1}=e;return r.$$set=n=>{"light"in n&&t(0,s=n.light)},[s]}class ze extends q{constructor(e){super(),U(this,e,Pe,Le,L,{light:0})}}function Be(r){let e,t,s,n,i,l,o,a,f;return s=new ze({props:{light:r[0]}}),l=new Ce({props:{light:r[0]}}),a=new $e({props:{light:r[0]}}),{c(){e=v("header"),t=v("div"),P(s.$$.fragment),n=S(),i=v("div"),P(l.$$.fragment),o=S(),P(a.$$.fragment),this.h()},l(h){e=p(h,"HEADER",{class:!0});var k=$(e);t=p(k,"DIV",{class:!0});var _=$(t);z(s.$$.fragment,_),n=A(_),i=p(_,"DIV",{class:!0});var b=$(i);z(l.$$.fragment,b),o=A(b),z(a.$$.fragment,b),b.forEach(c),_.forEach(c),k.forEach(c),this.h()},h(){g(i,"class","flex flex-row items-center gap-4"),g(t,"class","svelte-1qfzk2k"),g(e,"class","sm:mb-8 mb-4 px-2 shadow-sm dark:shadow-slate-200 svelte-1qfzk2k"),I(e,"sticky",r[0])},m(h,k){M(h,e,k),E(e,t),B(s,t,null),E(t,n),E(t,i),B(l,i,null),E(i,o),B(a,i,null),f=!0},p(h,[k]){const _={};k&1&&(_.light=h[0]),s.$set(_);const b={};k&1&&(b.light=h[0]),l.$set(b);const O={};k&1&&(O.light=h[0]),a.$set(O),(!f||k&1)&&I(e,"sticky",h[0])},i(h){f||(N(s.$$.fragment,h),N(l.$$.fragment,h),N(a.$$.fragment,h),f=!0)},o(h){H(s.$$.fragment,h),H(l.$$.fragment,h),H(a.$$.fragment,h),f=!1},d(h){h&&c(e),j(s),j(l),j(a)}}}function je(r,e,t){let{isSticky:s=!1}=e;return x(()=>{window.addEventListener("scroll",()=>{const n=window.scrollY||document.documentElement.scrollTop;t(0,s=n>1)})}),r.$$set=n=>{"isSticky"in n&&t(0,s=n.isSticky)},[s]}class qe extends q{constructor(e){super(),U(this,e,je,Be,L,{isSticky:0})}}function ie(r,e,t){const s=r.slice();return s[2]=e[t],s}function ae(r){let e;return{c(){e=v("span"),this.h()},l(t){e=p(t,"SPAN",{class:!0}),$(e).forEach(c),this.h()},h(){g(e,"class","line bg-black svelte-bidc9j"),I(e,"dots",r[0]),I(e,"hover",r[1])},m(t,s){M(t,e,s)},p(t,s){s&1&&I(e,"dots",t[0]),s&2&&I(e,"hover",t[1])},d(t){t&&c(e)}}}function Ue(r){let e,t=Z({length:4}),s=[];for(let n=0;n<t.length;n+=1)s[n]=ae(ie(r,t,n));return{c(){e=v("div");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){e=p(n,"DIV",{id:!0,class:!0});var i=$(e);for(let l=0;l<s.length;l+=1)s[l].l(i);i.forEach(c),this.h()},h(){g(e,"id","burger"),g(e,"class","svelte-bidc9j"),I(e,"open",r[0])},m(n,i){M(n,e,i);for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(e,null)},p(n,[i]){if(i&3){t=Z({length:4});let l;for(l=0;l<t.length;l+=1){const o=ie(n,t,l);s[l]?s[l].p(o,i):(s[l]=ae(o),s[l].c(),s[l].m(e,null))}for(;l<s.length;l+=1)s[l].d(1);s.length=t.length}i&1&&I(e,"open",n[0])},i:T,o:T,d(n){n&&c(e),pe(s,n)}}}function Re(r,e,t){let{isMenuOpen:s}=e,{isHovered:n}=e;return r.$$set=i=>{"isMenuOpen"in i&&t(0,s=i.isMenuOpen),"isHovered"in i&&t(1,n=i.isHovered)},[s,n]}class Ye extends q{constructor(e){super(),U(this,e,Re,Ue,L,{isMenuOpen:0,isHovered:1})}}function Fe(r){var u,w;let e,t,s=((u=r[0])==null?void 0:u.deco)+"",n,i,l,o,a,f,h=((w=r[0])==null?void 0:w.title[r[2]])+"",k,_,b,O;return{c(){e=v("li"),t=v("span"),n=ne(s),i=S(),l=v("a"),o=v("div"),a=S(),f=v("span"),k=ne(h),this.h()},l(m){e=p(m,"LI",{class:!0});var V=$(e);t=p(V,"SPAN",{class:!0});var F=$(t);n=le(F,s),F.forEach(c),i=A(V),l=p(V,"A",{href:!0,class:!0});var R=$(l);o=p(R,"DIV",{class:!0}),$(o).forEach(c),a=A(R),f=p(R,"SPAN",{class:!0});var d=$(f);k=le(d,h),d.forEach(c),R.forEach(c),V.forEach(c),this.h()},h(){var m;g(t,"class","deco absolute -left-8 svelte-shvfgn"),I(t,"currently-visited",r[1]),g(o,"class","bg svelte-shvfgn"),g(f,"class","link svelte-shvfgn"),g(l,"href",_=X+"/"+((m=r[0])==null?void 0:m.slug)),g(l,"class","text-black font-bold tracking-widest svelte-shvfgn"),I(l,"current",r[1]),g(e,"class","px-2 inline-block relative bg-white outline outline-black outline-2 svelte-shvfgn")},m(m,V){M(m,e,V),E(e,t),E(t,n),E(e,i),E(e,l),E(l,o),E(l,a),E(l,f),E(f,k),b||(O=Y(l,"click",r[3]),b=!0)},p(m,[V]){var F,R,d;V&1&&s!==(s=((F=m[0])==null?void 0:F.deco)+"")&&re(n,s),V&2&&I(t,"currently-visited",m[1]),V&5&&h!==(h=((R=m[0])==null?void 0:R.title[m[2]])+"")&&re(k,h),V&1&&_!==(_=X+"/"+((d=m[0])==null?void 0:d.slug))&&g(l,"href",_),V&2&&I(l,"current",m[1])},i:T,o:T,d(m){m&&c(e),b=!1,O()}}}function Qe(r,e,t){let s,n,i;J(r,Ve,f=>t(5,n=f)),J(r,W,f=>t(2,i=f));let{isMenuOpen:l}=e,{menuItem:o}=e;function a(){t(4,l=!1)}return r.$$set=f=>{"isMenuOpen"in f&&t(4,l=f.isMenuOpen),"menuItem"in f&&t(0,o=f.menuItem)},r.$$.update=()=>{r.$$.dirty&33&&t(1,s=n.url.pathname.split("/").pop()==o.slug)},[o,s,i,a,l,n]}class Ge extends q{constructor(e){super(),U(this,e,Qe,Fe,L,{isMenuOpen:4,menuItem:0})}}const oe=[{title:{en:"Phase One",de:"Phase Eins"},slug:"phase-one",deco:"n"},{title:{en:"Roadmap",de:"Der Plan"},slug:"roadmap",deco:"+"},{title:{en:"Member Area",de:"Mitgliederbereich"},slug:"lore",deco:"a"},{title:{en:"FAQ You",de:"FAQ You"},slug:"faq",deco:"-"}];function ce(r,e,t){const s=r.slice();return s[7]=e[t],s}function ue(r){let e,t,s;return{c(){e=v("div"),this.h()},l(n){e=p(n,"DIV",{class:!0}),$(e).forEach(c),this.h()},h(){g(e,"class","backdrop svelte-56f10e")},m(n,i){M(n,e,i),t||(s=Y(e,"click",r[4]),t=!0)},p:T,d(n){n&&c(e),t=!1,s()}}}function fe(r){let e,t,s;function n(l){r[5](l)}let i={menuItem:r[7]};return r[0]!==void 0&&(i.isMenuOpen=r[0]),e=new Ge({props:i}),_e.push(()=>be(e,"isMenuOpen",n)),{c(){P(e.$$.fragment)},l(l){z(e.$$.fragment,l)},m(l,o){B(e,l,o),s=!0},p(l,o){const a={};!t&&o&1&&(t=!0,a.isMenuOpen=l[0],ve(()=>t=!1)),e.$set(a)},i(l){s||(N(e.$$.fragment,l),s=!0)},o(l){H(e.$$.fragment,l),s=!1},d(l){j(e,l)}}}function Je(r){let e,t,s,n,i,l,o,a,f,h,k,_,b,O,u=r[0]&&ue(r);i=new $e({props:{light:!0}});let w=Z(oe),m=[];for(let d=0;d<w.length;d+=1)m[d]=fe(ce(r,w,d));const V=d=>H(m[d],1,1,()=>{m[d]=null});function F(d){r[6](d)}let R={isMenuOpen:r[0]};return r[1]!==void 0&&(R.isHovered=r[1]),h=new Ye({props:R}),_e.push(()=>be(h,"isHovered",F)),{c(){u&&u.c(),e=S(),t=v("div"),s=v("nav"),n=v("ol"),P(i.$$.fragment),l=S();for(let d=0;d<m.length;d+=1)m[d].c();o=S(),a=v("button"),f=ne(`Menu
            `),P(h.$$.fragment),this.h()},l(d){u&&u.l(d),e=A(d),t=p(d,"DIV",{class:!0});var D=$(t);s=p(D,"NAV",{class:!0});var C=$(s);n=p(C,"OL",{class:!0});var y=$(n);z(i.$$.fragment,y),l=A(y);for(let ee=0;ee<m.length;ee+=1)m[ee].l(y);y.forEach(c),o=A(C),a=p(C,"BUTTON",{class:!0});var Q=$(a);f=le(Q,`Menu
            `),z(h.$$.fragment,Q),Q.forEach(c),C.forEach(c),D.forEach(c),this.h()},h(){g(n,"class","w-max svelte-56f10e"),I(n,"open",r[0]),g(a,"class","menu-button text-black bg-white outline outline-black outline-2 svelte-56f10e"),I(a,"expanded",r[0]),g(s,"class","svelte-56f10e"),g(t,"class","cntnr svelte-56f10e")},m(d,D){u&&u.m(d,D),M(d,e,D),M(d,t,D),E(t,s),E(s,n),B(i,n,null),E(n,l);for(let C=0;C<m.length;C+=1)m[C]&&m[C].m(n,null);E(s,o),E(s,a),E(a,f),B(h,a,null),_=!0,b||(O=[Y(a,"click",r[2]),Y(a,"mouseover",r[3]),Y(a,"mouseout",r[3]),Y(a,"focus",r[3]),Y(a,"blur",r[3])],b=!0)},p(d,[D]){if(d[0]?u?u.p(d,D):(u=ue(d),u.c(),u.m(e.parentNode,e)):u&&(u.d(1),u=null),D&1){w=Z(oe);let y;for(y=0;y<w.length;y+=1){const Q=ce(d,w,y);m[y]?(m[y].p(Q,D),N(m[y],1)):(m[y]=fe(Q),m[y].c(),N(m[y],1),m[y].m(n,null))}for(Oe(),y=w.length;y<m.length;y+=1)V(y);De()}(!_||D&1)&&I(n,"open",d[0]);const C={};D&1&&(C.isMenuOpen=d[0]),!k&&D&2&&(k=!0,C.isHovered=d[1],ve(()=>k=!1)),h.$set(C),(!_||D&1)&&I(a,"expanded",d[0])},i(d){if(!_){N(i.$$.fragment,d);for(let D=0;D<w.length;D+=1)N(m[D]);N(h.$$.fragment,d),_=!0}},o(d){H(i.$$.fragment,d),m=m.filter(Boolean);for(let D=0;D<m.length;D+=1)H(m[D]);H(h.$$.fragment,d),_=!1},d(d){d&&(c(e),c(t)),u&&u.d(d),j(i),pe(m,d),j(h),b=!1,ge(O)}}}function Ke(r,e,t){let s=!1,n=!1;function i(){t(0,s=!s)}function l(){t(1,n=!n)}const o=()=>{t(0,s=!1)};function a(h){s=h,t(0,s)}function f(h){n=h,t(1,n)}return[s,n,i,l,o,a,f]}class We extends q{constructor(e){super(),U(this,e,Ke,Je,L,{})}}function Xe(r){let e,t,s,n,i;return{c(){e=v("div"),t=S(),s=v("div"),n=S(),i=v("div"),this.h()},l(l){e=p(l,"DIV",{class:!0}),$(e).forEach(c),t=A(l),s=p(l,"DIV",{class:!0}),$(s).forEach(c),n=A(l),i=p(l,"DIV",{class:!0}),$(i).forEach(c),this.h()},h(){g(e,"class","vignette svelte-xxaxn5"),g(s,"class","sides svelte-xxaxn5"),g(i,"class","bg-texture svelte-xxaxn5")},m(l,o){M(l,e,o),M(l,t,o),M(l,s,o),M(l,n,o),M(l,i,o)},p:T,i:T,o:T,d(l){l&&(c(e),c(t),c(s),c(n),c(i))}}}class Ze extends q{constructor(e){super(),U(this,e,null,Xe,L,{})}}function he(r){let e;return{c(){e=v("div"),this.h()},l(t){e=p(t,"DIV",{class:!0}),$(e).forEach(c),this.h()},h(){g(e,"class","svelte-13g33zm")},m(t,s){M(t,e,s)},d(t){t&&c(e)}}}function de(r){let e,t=r[1]&&he();return{c(){t&&t.c(),e=G()},l(s){t&&t.l(s),e=G()},m(s,n){t&&t.m(s,n),M(s,e,n)},p(s,n){s[1]?t||(t=he(),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(s){s&&c(e),t&&t.d(s)}}}function xe(r){let e=r[0],t,s=de(r);return{c(){s.c(),t=G()},l(n){s.l(n),t=G()},m(n,i){s.m(n,i),M(n,t,i)},p(n,[i]){i&1&&L(e,e=n[0])?(s.d(1),s=de(n),s.c(),s.m(t.parentNode,t)):s.p(n,i)},i:T,o:T,d(n){n&&c(t),s.d(n)}}}function et(r,e,t){let s;J(r,K,i=>t(0,s=i));let n=!1;return r.$$.update=()=>{r.$$.dirty&1&&s&&(t(1,n=!0),setTimeout(()=>{t(1,n=!1)},2e3))},[s,n]}class tt extends q{constructor(e){super(),U(this,e,et,xe,L,{})}}function me(r){let e;function t(i,l){return i[1]?nt:st}let n=t(r)(r);return{c(){n.c(),e=G()},l(i){n.l(i),e=G()},m(i,l){n.m(i,l),M(i,e,l)},p:T,d(i){i&&c(e),n.d(i)}}}function st(r){let e;return{c(){e=v("div"),this.h()},l(t){e=p(t,"DIV",{class:!0,style:!0}),$(e).forEach(c),this.h()},h(){g(e,"class","text-logo svelte-1vr416"),se(e,"background-image","url('"+X+"/logo/text-logo.jpeg')")},m(t,s){M(t,e,s)},d(t){t&&c(e)}}}function nt(r){let e;return{c(){e=v("div"),this.h()},l(t){e=p(t,"DIV",{class:!0}),$(e).forEach(c),this.h()},h(){g(e,"class","logo svelte-1vr416")},m(t,s){M(t,e,s)},d(t){t&&c(e)}}}function lt(r){let e,t,s,n,i;e=new tt({});let l=r[0]&&me(r);return{c(){P(e.$$.fragment),t=S(),s=v("div"),n=v("div"),l&&l.c(),this.h()},l(o){z(e.$$.fragment,o),t=A(o),s=p(o,"DIV",{class:!0});var a=$(s);n=p(a,"DIV",{class:!0});var f=$(n);l&&l.l(f),f.forEach(c),a.forEach(c),this.h()},h(){g(n,"class","cntnr svelte-1vr416"),g(s,"class","outer-container svelte-1vr416")},m(o,a){B(e,o,a),M(o,t,a),M(o,s,a),E(s,n),l&&l.m(n,null),i=!0},p(o,[a]){o[0]?l?l.p(o,a):(l=me(o),l.c(),l.m(n,null)):l&&(l.d(1),l=null)},i(o){i||(N(e.$$.fragment,o),i=!0)},o(o){H(e.$$.fragment,o),i=!1},d(o){o&&(c(t),c(s)),j(e,o),l&&l.d()}}}function rt(r,e,t){let s=!1,n=Math.round(Math.random()*10)%2==0;return x(()=>{t(0,s=n!=null)}),[s,n]}class it extends q{constructor(e){super(),U(this,e,rt,lt,L,{})}}function at(r){let e,t,s,n,i,l,o,a,f,h,k,_;e=new it({}),s=new Ze({}),l=new qe({});const b=r[1].default,O=Ee(b,r,r[0],null);return k=new We({}),{c(){P(e.$$.fragment),t=S(),P(s.$$.fragment),n=S(),i=v("div"),P(l.$$.fragment),o=S(),a=v("main"),f=v("div"),O&&O.c(),h=S(),P(k.$$.fragment),this.h()},l(u){z(e.$$.fragment,u),t=A(u),z(s.$$.fragment,u),n=A(u),i=p(u,"DIV",{class:!0});var w=$(i);z(l.$$.fragment,w),o=A(w),a=p(w,"MAIN",{});var m=$(a);f=p(m,"DIV",{class:!0});var V=$(f);O&&O.l(V),V.forEach(c),m.forEach(c),h=A(w),z(k.$$.fragment,w),w.forEach(c),this.h()},h(){g(f,"class","outer-container svelte-15lr1dv"),g(i,"class","dark:bg-black min-h-dvh")},m(u,w){B(e,u,w),M(u,t,w),B(s,u,w),M(u,n,w),M(u,i,w),B(l,i,null),E(i,o),E(i,a),E(a,f),O&&O.m(f,null),E(i,h),B(k,i,null),_=!0},p(u,[w]){O&&O.p&&(!_||w&1)&&we(O,b,u,u[0],_?Ie(b,u[0],w,null):Me(u[0]),null)},i(u){_||(N(e.$$.fragment,u),N(s.$$.fragment,u),N(l.$$.fragment,u),N(O,u),N(k.$$.fragment,u),_=!0)},o(u){H(e.$$.fragment,u),H(s.$$.fragment,u),H(l.$$.fragment,u),H(O,u),H(k.$$.fragment,u),_=!1},d(u){u&&(c(t),c(n),c(i)),j(e,u),j(s,u),j(l),O&&O.d(u),j(k)}}}function ot(r,e,t){let{$$slots:s={},$$scope:n}=e;return x(()=>{W.set(navigator.language.includes("en")?"en":"de")}),r.$$set=i=>{"$$scope"in i&&t(0,n=i.$$scope)},[n,s]}class _t extends q{constructor(e){super(),U(this,e,ot,at,L,{})}}export{_t as component,gt as universal};
