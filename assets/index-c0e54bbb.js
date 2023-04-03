(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function P(){}const it=t=>t;function lt(t,e){for(const n in e)t[n]=e[n];return t}function qe(t){return t()}function Ae(){return Object.create(null)}function re(t){t.forEach(qe)}function be(t){return typeof t=="function"}function Y(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ot(t){return Object.keys(t).length===0}function Te(t,e,n,i){if(t){const r=Je(t,e,n,i);return t[0](r)}}function Je(t,e,n,i){return t[1]&&i?lt(n.ctx.slice(),t[1](i(e))):n.ctx}function je(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],l=Math.max(e.dirty.length,r.length);for(let o=0;o<l;o+=1)s[o]=e.dirty[o]|r[o];return s}return e.dirty|r}return e.dirty}function Le(t,e,n,i,r,s){if(r){const l=Je(e,n,i,s);t.p(l,r)}}function Ne(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function at(t){return t&&be(t.destroy)?t.destroy:P}const Ze=typeof window<"u";let ct=Ze?()=>window.performance.now():()=>Date.now(),Ce=Ze?t=>requestAnimationFrame(t):P;const le=new Set;function Ke(t){le.forEach(e=>{e.c(t)||(le.delete(e),e.f())}),le.size!==0&&Ce(Ke)}function ut(t){let e;return le.size===0&&Ce(Ke),{promise:new Promise(n=>{le.add(e={c:t,f:n})}),abort(){le.delete(e)}}}function u(t,e){t.appendChild(e)}function Xe(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ft(t){const e=g("style");return dt(Xe(t),e),e.sheet}function dt(t,e){return u(t.head||t,e),e.sheet}function F(t,e,n){t.insertBefore(e,n||null)}function z(t){t.parentNode&&t.parentNode.removeChild(t)}function Ye(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function ae(t){return document.createTextNode(t)}function j(){return ae(" ")}function mt(){return ae("")}function ue(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function pt(t){return Array.from(t.childNodes)}function Qe(t,e){e=""+e,t.data!==e&&(t.data=e)}function gt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}const ge=new Map;let he=0;function ht(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function bt(t,e){const n={stylesheet:ft(e),rules:{}};return ge.set(t,n),n}function Ie(t,e,n,i,r,s,l,o=0){const c=16.666/i;let a=`{
`;for(let w=0;w<=1;w+=c){const m=e+(n-e)*s(w);a+=w*100+`%{${l(m,1-m)}}
`}const d=a+`100% {${l(n,1-n)}}
}`,p=`__svelte_${ht(d)}_${o}`,k=Xe(t),{stylesheet:x,rules:h}=ge.get(k)||bt(k,t);h[p]||(h[p]=!0,x.insertRule(`@keyframes ${p} ${d}`,x.cssRules.length));const _=t.style.animation||"";return t.style.animation=`${_?`${_}, `:""}${p} ${i}ms linear ${r}ms 1 both`,he+=1,p}function xt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),he-=r,he||vt())}function vt(){Ce(()=>{he||(ge.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&z(e)}),ge.clear())})}let de;function fe(t){de=t}function _t(){if(!de)throw new Error("Function called outside component initialization");return de}function yt(t){_t().$$.on_mount.push(t)}const ie=[],Ee=[];let oe=[];const ze=[],et=Promise.resolve();let Se=!1;function tt(){Se||(Se=!0,et.then(nt))}function kt(){return tt(),et}function me(t){oe.push(t)}const ke=new Set;let se=0;function nt(){if(se!==0)return;const t=de;do{try{for(;se<ie.length;){const e=ie[se];se++,fe(e),$t(e.$$)}}catch(e){throw ie.length=0,se=0,e}for(fe(null),ie.length=0,se=0;Ee.length;)Ee.pop()();for(let e=0;e<oe.length;e+=1){const n=oe[e];ke.has(n)||(ke.add(n),n())}oe.length=0}while(ie.length);for(;ze.length;)ze.pop()();Se=!1,ke.clear(),fe(t)}function $t(t){if(t.fragment!==null){t.update(),re(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(me)}}function wt(t){const e=[],n=[];oe.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),oe=e}let ce;function Et(){return ce||(ce=Promise.resolve(),ce.then(()=>{ce=null})),ce}function $e(t,e,n){t.dispatchEvent(gt(`${e?"intro":"outro"}${n}`))}const pe=new Set;let X;function xe(){X={r:0,c:[],p:X}}function ve(){X.r||re(X.c),X=X.p}function y(t,e){t&&t.i&&(pe.delete(t),t.i(e))}function T(t,e,n,i){if(t&&t.o){if(pe.has(t))return;pe.add(t),X.c.push(()=>{pe.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const St={duration:0};function De(t,e,n,i){const r={direction:"both"};let s=e(t,n,r),l=i?0:1,o=null,c=null,a=null;function d(){a&&xt(t,a)}function p(x,h){const _=x.b-l;return h*=Math.abs(_),{a:l,b:x.b,d:_,duration:h,start:x.start,end:x.start+h,group:x.group}}function k(x){const{delay:h=0,duration:_=300,easing:w=it,tick:m=P,css:N}=s||St,v={start:ct()+h,b:x};x||(v.group=X,X.r+=1),o||c?c=v:(N&&(d(),a=Ie(t,l,x,_,h,w,N)),x&&m(0,1),o=p(v,_),me(()=>$e(t,x,"start")),ut(L=>{if(c&&L>c.start&&(o=p(c,_),c=null,$e(t,o.b,"start"),N&&(d(),a=Ie(t,l,o.b,o.duration,0,w,s.css))),o){if(L>=o.end)m(l=o.b,1-l),$e(t,o.b,"end"),c||(o.b?d():--o.group.r||re(o.group.c)),o=null;else if(L>=o.start){const $=L-o.start;l=o.a+o.d*w($/o.duration),m(l,1-l)}}return!!(o||c)}))}return{run(x){be(s)?Et().then(()=>{s=s(r),k(x)}):k(x)},end(){d(),o=c=null}}}function O(t){t&&t.c()}function C(t,e,n,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),i||me(()=>{const l=t.$$.on_mount.map(qe).filter(be);t.$$.on_destroy?t.$$.on_destroy.push(...l):re(l),t.$$.on_mount=[]}),s.forEach(me)}function M(t,e){const n=t.$$;n.fragment!==null&&(wt(n.after_update),re(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Tt(t,e){t.$$.dirty[0]===-1&&(ie.push(t),tt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(t,e,n,i,r,s,l,o=[-1]){const c=de;fe(t);const a=t.$$={fragment:null,ctx:[],props:s,update:P,not_equal:r,bound:Ae(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Ae(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};l&&l(a.root);let d=!1;if(a.ctx=n?n(t,e.props||{},(p,k,...x)=>{const h=x.length?x[0]:k;return a.ctx&&r(a.ctx[p],a.ctx[p]=h)&&(!a.skip_bound&&a.bound[p]&&a.bound[p](h),d&&Tt(t,p)),k}):[],a.update(),d=!0,re(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){const p=pt(e.target);a.fragment&&a.fragment.l(p),p.forEach(z)}else a.fragment&&a.fragment.c();e.intro&&y(t.$$.fragment),C(t,e.target,e.anchor,e.customElement),nt()}fe(c)}class ee{$destroy(){M(this,1),this.$destroy=P}$on(e,n){if(!be(n))return P;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ot(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function jt(t){let e,n,i,r;return{c(){e=g("div"),n=g("i"),i=ae(t[1]),f(n,"class","material-symbols-outlined select-none"),f(n,"style",t[2]),f(e,"class",r=t[0]+" flex justify-center items-center")},m(s,l){F(s,e,l),u(e,n),u(n,i)},p(s,[l]){l&2&&Qe(i,s[1]),l&1&&r!==(r=s[0]+" flex justify-center items-center")&&f(e,"class",r)},i:P,o:P,d(s){s&&z(e)}}}function Lt(t,e,n){let{class:i=""}=e,{name:r}=e,{outline:s=!1}=e,{size:l=24}=e;const o=`font-variation-settings: 'FILL' ${s?0:1}; font-size: ${l}px `;return t.$$set=c=>{"class"in c&&n(0,i=c.class),"name"in c&&n(1,r=c.name),"outline"in c&&n(3,s=c.outline),"size"in c&&n(4,l=c.size)},[i,r,o,s,l]}class J extends ee{constructor(e){super(),Q(this,e,Lt,jt,Y,{class:0,name:1,outline:3,size:4})}}const Nt="add",Fe="close",Ct="expand_more",Re="menu",Mt="more_horiz",Ot="search",At="settings",It="cloud_off",zt="sync",rt="person",Dt="flash_on";function Ft(t){let e;return{c(){e=g("div"),f(e,"class","h-6 w-px bg-dark-border")},m(n,i){F(n,e,i)},p:P,i:P,o:P,d(n){n&&z(e)}}}class Rt extends ee{constructor(e){super(),Q(this,e,null,Ft,Y,{})}}function Gt(t){const e=n=>{t.contains(n.target)||t.dispatchEvent(new CustomEvent("outclick"))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}function Pt(t){const e=t-1;return e*e*e+1}function Ge(t,{delay:e=0,duration:n=400,easing:i=Pt,axis:r="y"}={}){const s=getComputedStyle(t),l=+s.opacity,o=r==="y"?"height":"width",c=parseFloat(s[o]),a=r==="y"?["top","bottom"]:["left","right"],d=a.map(m=>`${m[0].toUpperCase()}${m.slice(1)}`),p=parseFloat(s[`padding${d[0]}`]),k=parseFloat(s[`padding${d[1]}`]),x=parseFloat(s[`margin${d[0]}`]),h=parseFloat(s[`margin${d[1]}`]),_=parseFloat(s[`border${d[0]}Width`]),w=parseFloat(s[`border${d[1]}Width`]);return{delay:e,duration:n,easing:i,css:m=>`overflow: hidden;opacity: ${Math.min(m*20,1)*l};${o}: ${m*c}px;padding-${a[0]}: ${m*p}px;padding-${a[1]}: ${m*k}px;margin-${a[0]}: ${m*x}px;margin-${a[1]}: ${m*h}px;border-${a[0]}-width: ${m*_}px;border-${a[1]}-width: ${m*w}px;`}}function Pe(t){let e;const n=t[12].default,i=Te(n,t,t[11],null);return{c(){i&&i.c()},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&2048)&&Le(i,n,r,r[11],e?je(n,r[11],s,null):Ne(r[11]),null)},i(r){e||(y(i,r),e=!0)},o(r){T(i,r),e=!1},d(r){i&&i.d(r)}}}function Wt(t){let e,n,i,r,s=t[1]&&Pe(t);return{c(){e=g("div"),n=j(),s&&s.c(),i=mt(),e.hidden=!0},m(l,o){F(l,e,o),t[13](e),F(l,n,o),s&&s.m(l,o),F(l,i,o),r=!0},p(l,[o]){l[1]?s?(s.p(l,o),o&2&&y(s,1)):(s=Pe(l),s.c(),y(s,1),s.m(i.parentNode,i)):s&&(xe(),T(s,1,1,()=>{s=null}),ve())},i(l){r||(y(s),r=!0)},o(l){T(s),r=!1},d(l){l&&z(e),t[13](null),l&&z(n),s&&s.d(l),l&&z(i)}}}function Vt(t,e,n){let{$$slots:i={},$$scope:r}=e,{toggle:s=void 0}=e,{transitions:l=""}=e,{inTransition:o=""}=e,{outTransition:c=o}=e,{inState:a=""}=e,{onState:d=""}=e,{outState:p=a}=e,{offVisible:k=!1}=e,x,h,_,w;const m={IDLE:0,ENTERING:1,LEAVING:2};let N=m.IDLE;yt(async()=>{n(1,w=!0),await kt(),h=x.nextElementSibling,s===void 0?(h.hidden=!0,document.readyState==="complete"?setTimeout(v,50):window.addEventListener("load",()=>{setTimeout(v,50)},{once:!0})):te()});const v=async()=>{L(),n(2,s=_?_.toggle:!1),te(),_||setTimeout(()=>{n(2,s=!0)},200)},L=()=>{let b=h.parentElement;for(;_===void 0&&b&&document.body!==b;)b.toggle!==void 0?(_=b,$()):b=b.parentElement},$=()=>{new MutationObserver(b=>{for(let I of b)n(2,s=I.target.toggle)}).observe(_,{attributes:!0,attributeFilter:["class"]})},A=(...b)=>{const I=W(l,o,c,a,d,p);h.classList.value=W(h.classList.value).split(" ").filter(E=>!I.includes(E)).join(" ")+" "+b.join(" ")},W=(...b)=>b.join(" ").replace(/\s+/g," ").trim(),te=()=>{h.toggle=s,s?(A(l,c,d),V()):(h.hidden=!_&&!k,A(l,a),setTimeout(()=>{A(l,o,a),V()},250)),s||(h.hidden=!_&&!k),V()},V=()=>{h.addEventListener("transitionend",b=>{b.target.toggle!==void 0&&(o===""||b.target===h)&&(s&&N===m.ENTERING||!s&&N===m.LEAVING)&&(N=m.IDLE,s||(A(l,o,a),h.hidden=!_&&!k))})};let R=!1,H=s;const Z=b=>{h.toggle=b,b?G():ne()},G=()=>{h.hidden?(h.hidden=!1,setTimeout(G,50)):(N=m.ENTERING,A(l,o,d))},ne=()=>{N=m.LEAVING,A(l,c,p)};function B(b){Ee[b?"unshift":"push"](()=>{x=b,n(0,x)})}return t.$$set=b=>{"toggle"in b&&n(2,s=b.toggle),"transitions"in b&&n(3,l=b.transitions),"inTransition"in b&&n(4,o=b.inTransition),"outTransition"in b&&n(5,c=b.outTransition),"inState"in b&&n(6,a=b.inState),"onState"in b&&n(7,d=b.onState),"outState"in b&&n(8,p=b.outState),"offVisible"in b&&n(9,k=b.offVisible),"$$scope"in b&&n(11,r=b.$$scope)},t.$$.update=()=>{t.$$.dirty&4&&H!==s&&n(10,R=!0),t.$$.dirty&1028&&R&&Z(s)},[x,w,s,l,o,c,a,d,p,k,R,r,i,B]}class Bt extends ee{constructor(e){super(),Q(this,e,Vt,Wt,Y,{toggle:2,transitions:3,inTransition:4,outTransition:5,inState:6,onState:7,outState:8,offVisible:9})}}function Ht(t){let e,n,i,r,s,l;return r=new J({props:{name:zt}}),{c(){e=g("button"),n=g("span"),n.textContent="Sync",i=j(),O(r.$$.fragment),f(n,"class","sr-only"),f(e,"type","button"),f(e,"class",s=`${t[0]} rounded-full bg-dark-300 p-2 text-dark-500 hover:text-dark-700 focus:outline-none focus:ring-0 focus:ring-offset-current focus:ring-offset-2 `)},m(o,c){F(o,e,c),u(e,n),u(e,i),C(r,e,null),l=!0},p(o,[c]){(!l||c&1&&s!==(s=`${o[0]} rounded-full bg-dark-300 p-2 text-dark-500 hover:text-dark-700 focus:outline-none focus:ring-0 focus:ring-offset-current focus:ring-offset-2 `))&&f(e,"class",s)},i(o){l||(y(r.$$.fragment,o),l=!0)},o(o){T(r.$$.fragment,o),l=!1},d(o){o&&z(e),M(r)}}}function Ut(t,e,n){let{class:i=""}=e;return t.$$set=r=>{"class"in r&&n(0,i=r.class)},[i]}class st extends ee{constructor(e){super(),Q(this,e,Ut,Ht,Y,{class:0})}}function We(t,e,n){const i=t.slice();return i[8]=e[n],i}function Ve(t,e,n){const i=t.slice();return i[8]=e[n],i}function Be(t){let e,n=t[8].name+"",i,r,s,l,o,c;return s=new J({props:{name:t[8].icon,size:20,class:"text-dark-600"}}),{c(){e=g("button"),i=ae(n),r=j(),O(s.$$.fragment),f(e,"class","flex justify-between w-full px-4 py-2 text-sm text-dark-800 font-semibold hover:bg-dark-200 hover:border-l-2 border-dark-900"),f(e,"role","menuitem"),f(e,"tabindex","-1")},m(a,d){F(a,e,d),u(e,i),u(e,r),C(s,e,null),l=!0,o||(c=ue(e,"click",t[8].action),o=!0)},p(a,d){t=a},i(a){l||(y(s.$$.fragment,a),l=!0)},o(a){T(s.$$.fragment,a),l=!1},d(a){a&&z(e),M(s),o=!1,c()}}}function qt(t){let e,n,i=t[2],r=[];for(let l=0;l<i.length;l+=1)r[l]=Be(Ve(t,i,l));const s=l=>T(r[l],1,1,()=>{r[l]=null});return{c(){e=g("div");for(let l=0;l<r.length;l+=1)r[l].c();f(e,"class","absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-dark-300 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-200"),f(e,"role","menu"),f(e,"aria-orientation","vertical"),f(e,"aria-labelledby","user-menu-button"),f(e,"tabindex","-1")},m(l,o){F(l,e,o);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);n=!0},p(l,o){if(o&4){i=l[2];let c;for(c=0;c<i.length;c+=1){const a=Ve(l,i,c);r[c]?(r[c].p(a,o),y(r[c],1)):(r[c]=Be(a),r[c].c(),y(r[c],1),r[c].m(e,null))}for(xe(),c=i.length;c<r.length;c+=1)s(c);ve()}},i(l){if(!n){for(let o=0;o<i.length;o+=1)y(r[o]);n=!0}},o(l){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)T(r[o]);n=!1},d(l){l&&z(e),Ye(r,l)}}}function He(t){let e,n,i,r,s,l,o,c,a,d,p,k,x,h,_;o=new J({props:{class:"h-10 w-10 rounded-full text-dark-500 bg-dark-300",name:rt}}),p=new st({props:{class:"ml-auto flex-shrink-0"}});let w=t[2],m=[];for(let v=0;v<w.length;v+=1)m[v]=Ue(We(t,w,v));const N=v=>T(m[v],1,1,()=>{m[v]=null});return{c(){e=g("div"),n=g("div"),n.innerHTML=`<a href="/" class="border-red bg-dark-300 text-dark-900 block border-l-4 py-2 pl-3 pr-4 text-base font-medium" aria-current="page">Movies</a> 

					<a href="/" class="border-transparent text-dark-500 hover:border-dark-900 hover:bg-dark-300 hover:text-dark-900 block border-l-4 py-2 pl-3 pr-4 text-base font-medium">Series</a> 

					<a href="/" class="border-transparent text-dark-500 hover:border-dark-900 hover:bg-dark-300 hover:text-dark-900 block border-l-4 py-2 pl-3 pr-4 text-base font-medium">Anime</a>`,i=j(),r=g("div"),s=g("div"),l=g("div"),O(o.$$.fragment),c=j(),a=g("div"),a.innerHTML=`<div class="text-base font-medium text-dark-800">Tom Nook</div> 
							<div class="text-sm font-medium text-dark-500">tom@example.com</div>`,d=j(),O(p.$$.fragment),k=j(),x=g("div");for(let v=0;v<m.length;v+=1)m[v].c();f(n,"class","space-y-1 pt-2 pb-3"),f(l,"class","flex-shrink-0"),f(a,"class","ml-3"),f(s,"class","flex items-center px-4"),f(x,"class","mt-3 space-y-1"),f(r,"class","border-t border-dark-border pt-4 pb-3"),f(e,"class","sm:hidden"),f(e,"id","mobile-menu")},m(v,L){F(v,e,L),u(e,n),u(e,i),u(e,r),u(r,s),u(s,l),C(o,l,null),u(s,c),u(s,a),u(s,d),C(p,s,null),u(r,k),u(r,x);for(let $=0;$<m.length;$+=1)m[$]&&m[$].m(x,null);_=!0},p(v,L){if(L&4){w=v[2];let $;for($=0;$<w.length;$+=1){const A=We(v,w,$);m[$]?(m[$].p(A,L),y(m[$],1)):(m[$]=Ue(A),m[$].c(),y(m[$],1),m[$].m(x,null))}for(xe(),$=w.length;$<m.length;$+=1)N($);ve()}},i(v){if(!_){y(o.$$.fragment,v),y(p.$$.fragment,v);for(let L=0;L<w.length;L+=1)y(m[L]);me(()=>{_&&(h||(h=De(e,Ge,{duration:500},!0)),h.run(1))}),_=!0}},o(v){T(o.$$.fragment,v),T(p.$$.fragment,v),m=m.filter(Boolean);for(let L=0;L<m.length;L+=1)T(m[L]);h||(h=De(e,Ge,{duration:500},!1)),h.run(0),_=!1},d(v){v&&z(e),M(o),M(p),Ye(m,v),v&&h&&h.end()}}}function Ue(t){let e,n=t[8].name+"",i,r,s,l,o,c,a;return s=new J({props:{name:t[8].icon,class:"text-dark-400 mr-2"}}),{c(){e=g("button"),i=ae(n),r=j(),O(s.$$.fragment),l=j(),f(e,"class","flex w-full justify-between pl-3 pr-4 py-2 text-base font-medium text-dark-500 hover:bg-dark-300 hover:text-dark-900 hover:border-dark-900 border-transparent border-l-4")},m(d,p){F(d,e,p),u(e,i),u(e,r),C(s,e,null),u(e,l),o=!0,c||(a=ue(e,"click",t[8].action),c=!0)},p(d,p){t=d},i(d){o||(y(s.$$.fragment,d),o=!0)},o(d){T(s.$$.fragment,d),o=!1},d(d){d&&z(e),M(s),c=!1,a()}}}function Jt(t){let e,n,i,r,s,l,o,c,a,d,p,k,x,h,_,w,m,N,v,L,$,A,W,te,V,R,H,Z,G,ne,B,b,I,E,K,Me;o=new J({props:{name:Dt,class:"rounded-full bg-red w-10 h-10 text-dark-200",size:32}}),k=new st({props:{class:"m-3"}}),h=new Rt({}),$=new J({props:{class:"h-10 w-10 rounded-full text-dark-500 bg-dark-300",name:rt}}),W=new Bt({props:{toggle:t[0],transitions:"transition transform",inTransition:"ease-out duration-200",inState:"opacity-0 scale-95",onState:"opacity-100 scale-100",outState:"opacity-0 scale-95",outTransition:"ease-in duration-75",$$slots:{default:[qt]},$$scope:{ctx:t}}}),G=new J({props:{name:t[1]?Fe:Re,class:"h-6 w-6"}});let D=t[1]&&He(t);const _e=t[3].default,U=Te(_e,t,t[7],null);return{c(){e=g("div"),n=g("nav"),i=g("div"),r=g("div"),s=g("div"),l=g("div"),O(o.$$.fragment),c=j(),a=g("div"),a.innerHTML=`<a href="/" class="border-red text-dark-900 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium" aria-current="page">Movies</a> 

						<a href="/" class="border-transparent text-dark-500 hover:border-dark-900 hover:text-dark-900 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">Series</a> 

						<a href="/" class="border-transparent text-dark-500 hover:border-dark-900 hover:text-dark-900 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">Anime</a>`,d=j(),p=g("div"),O(k.$$.fragment),x=j(),O(h.$$.fragment),_=j(),w=g("div"),m=g("div"),N=g("button"),v=g("span"),v.textContent="Open user menu",L=j(),O($.$$.fragment),A=j(),O(W.$$.fragment),te=j(),V=g("div"),R=g("button"),H=g("span"),H.textContent="Open main menu",Z=j(),O(G.$$.fragment),ne=j(),D&&D.c(),B=j(),b=g("main"),I=g("div"),U&&U.c(),f(l,"class","flex flex-shrink-0 items-center"),f(a,"class","hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8"),f(s,"class","flex"),f(v,"class","sr-only"),f(N,"type","button"),f(N,"class","flex max-w-xs items-center rounded-full text-sm focus:outline-none text-dark-500 focus:ring-0 focus:ring-offset-2 focus:ring-offset-current"),f(N,"aria-expanded",t[0]),f(N,"aria-haspopup","true"),f(w,"class","relative ml-3"),f(p,"class","hidden sm:ml-6 sm:flex sm:items-center"),f(H,"class","sr-only"),f(R,"type","button"),f(R,"class","inline-flex items-center justify-center rounded-md bg-dark-300 p-2 text-dark-500 hover:bg-dark-200 focus:outline-none focus:ring-1 focus:ring-dark-border focus:ring-offset-2 focus:ring-offset-current"),f(R,"aria-controls","mobile-menu"),f(R,"aria-expanded","false"),f(V,"class","-mr-2 flex items-center sm:hidden"),f(r,"class","flex h-16 justify-between"),f(i,"class","mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"),f(n,"class","border-b border-dark-border bg-dark-200"),f(I,"class","mx-auto max-w-7xl sm:px-6 lg:px-8"),f(e,"class","min-h-full")},m(S,q){F(S,e,q),u(e,n),u(n,i),u(i,r),u(r,s),u(s,l),C(o,l,null),u(s,c),u(s,a),u(r,d),u(r,p),C(k,p,null),u(p,x),C(h,p,null),u(p,_),u(p,w),u(w,m),u(m,N),u(N,v),u(N,L),C($,N,null),u(w,A),C(W,w,null),u(r,te),u(r,V),u(V,R),u(R,H),u(R,Z),C(G,R,null),u(n,ne),D&&D.m(n,null),u(e,B),u(e,b),u(b,I),U&&U.m(I,null),E=!0,K||(Me=[ue(N,"click",t[4]),at(Gt.call(null,w)),ue(w,"outclick",t[5]),ue(R,"click",t[6])],K=!0)},p(S,[q]){(!E||q&1)&&f(N,"aria-expanded",S[0]);const ye={};q&1&&(ye.toggle=S[0]),q&128&&(ye.$$scope={dirty:q,ctx:S}),W.$set(ye);const Oe={};q&2&&(Oe.name=S[1]?Fe:Re),G.$set(Oe),S[1]?D?(D.p(S,q),q&2&&y(D,1)):(D=He(S),D.c(),y(D,1),D.m(n,null)):D&&(xe(),T(D,1,1,()=>{D=null}),ve()),U&&U.p&&(!E||q&128)&&Le(U,_e,S,S[7],E?je(_e,S[7],q,null):Ne(S[7]),null)},i(S){E||(y(o.$$.fragment,S),y(k.$$.fragment,S),y(h.$$.fragment,S),y($.$$.fragment,S),y(W.$$.fragment,S),y(G.$$.fragment,S),y(D),y(U,S),E=!0)},o(S){T(o.$$.fragment,S),T(k.$$.fragment,S),T(h.$$.fragment,S),T($.$$.fragment,S),T(W.$$.fragment,S),T(G.$$.fragment,S),T(D),T(U,S),E=!1},d(S){S&&z(e),M(o),M(k),M(h),M($),M(W),M(G),D&&D.d(),U&&U.d(S),K=!1,re(Me)}}}function Zt(t,e,n){let{$$slots:i={},$$scope:r}=e,s=!1,l=!0;const o=[{name:"Settings",icon:At,action:()=>{}},{name:"Sign out",icon:It,action:()=>{}}],c=()=>{n(0,s=!s)},a=()=>{n(0,s=!1)},d=()=>{n(1,l=!l)};return t.$$set=p=>{"$$scope"in p&&n(7,r=p.$$scope)},[s,l,o,i,c,a,d,r]}class Kt extends ee{constructor(e){super(),Q(this,e,Zt,Jt,Y,{})}}function Xt(t){let e;return{c(){e=g("header"),e.innerHTML='<div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8"><h1 class="text-3xl tracking-tight text-dark-900">Movies</h1></div>',f(e,"class","bg-dark-100")},m(n,i){F(n,e,i)},p:P,i:P,o:P,d(n){n&&z(e)}}}class Yt extends ee{constructor(e){super(),Q(this,e,null,Xt,Y,{})}}function Qt(t){let e;return{c(){e=g("div"),e.innerHTML=`<div class="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><h2 class="sr-only">Movies</h2> 
		
		<div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"><div class="group relative flex flex-col overflow-hidden rounded-lg border border-dark-border bg-dark-300"><div class="aspect-h-4 aspect-w-3 bg-dark-200 sm:aspect-none group-hover:opacity-75 sm:h-96"><img src="https://i.pinimg.com/originals/26/0b/6b/260b6b6558eee958c231c8d343821927.jpg" alt="Inception" class="h-full w-full object-cover object-center sm:h-full sm:w-full"/></div> 
				<div class="flex flex-1 flex-col space-y-2 p-4"><h3 class="text-sm font-medium text-dark-900"><a href="/"><span aria-hidden="true" class="absolute inset-0"></span>
							Inception</a></h3> 
					
					<p class="text-sm text-gray-500">The only movie where it&#39;s okay to say &#39;I dreamt about Leonardo DiCaprio last night&#39; without being judged.</p> 
					<div class="flex flex-1 flex-col justify-end"><p class="text-sm italic text-gray-500">Director: Christopher Nolan</p> 
						<p class="text-base italic font-medium text-dark-700">Watchtime: 148 minutes</p></div></div></div> 
			
			<div class="group relative flex flex-col overflow-hidden rounded-lg border border-dark-border bg-dark-300"><div class="aspect-h-4 aspect-w-3 bg-dark-200 sm:aspect-none group-hover:opacity-75 sm:h-96"><img src="https://image.tmdb.org/t/p/original/oqM6jW8gpuegx6ZqZFSUncGWNx6.jpg" alt="Inception" class="h-full w-full object-cover object-center sm:h-full sm:w-full"/></div> 
				<div class="flex flex-1 flex-col space-y-2 p-4"><h3 class="text-sm font-medium text-dark-900"><a href="/"><span aria-hidden="true" class="absolute inset-0"></span>
							Shrek</a></h3> 
					<p class="text-sm text-gray-500">A grumpy green ogre named Shrek teams up with a talkative donkey to rescue a princess, because apparently
						he&#39;s the only one who&#39;s not too picky about looks.</p> 
					<div class="flex flex-1 flex-col justify-end"><p class="text-sm italic text-gray-500">Directors: Andrew Adamson &amp; Vicky Jenson</p> 
						<p class="text-base italic font-medium text-dark-700">Watchtime: 1h 30min</p></div></div></div> 
			
			<div class="group relative flex flex-col overflow-hidden rounded-lg border border-dark-border bg-dark-300"><div class="aspect-h-4 aspect-w-3 bg-dark-200 sm:aspect-none group-hover:opacity-75 sm:h-96"><img src="https://wallpapercave.com/wp/wp11345878.jpg" alt="Inception" class="h-full w-full object-cover object-center sm:h-full sm:w-full"/></div> 
				<div class="flex flex-1 flex-col space-y-2 p-4"><h3 class="text-sm font-medium text-dark-900"><a href="/"><span aria-hidden="true" class="absolute inset-0"></span>
							Bullet Train</a></h3> 
					<p class="text-sm text-gray-500">A train ride with deadly consequences, where the only thing faster than the bullet train is the body count</p> 
					<div class="flex flex-1 flex-col justify-end"><p class="text-sm italic text-gray-500">Director: David Leitch</p> 
						<p class="text-base italic font-medium text-dark-700">Watchtime: 2h 7min</p></div></div></div> 
			
			<div class="group relative flex flex-col overflow-hidden rounded-lg border border-dark-border bg-dark-300"><div class="aspect-h-4 aspect-w-3 bg-dark-200 sm:aspect-none group-hover:opacity-75 sm:h-96"><img src="https://image.tmdb.org/t/p/original/dtshy8DfUlz7GMolmg2Cyb2JoP8.jpg" alt="Inception" class="h-full w-full object-cover object-center sm:h-full sm:w-full"/></div> 
				<div class="flex flex-1 flex-col space-y-2 p-4"><h3 class="text-sm font-medium text-dark-900"><a href="/"><span aria-hidden="true" class="absolute inset-0"></span>
							Mulan</a></h3> 
					<p class="text-sm text-gray-500">Why be a man when you can be a warrior princess?</p> 
					<div class="flex flex-1 flex-col justify-end"><p class="text-sm italic text-gray-500">Directors: Tony Bancroft &amp; Barry Cook</p> 
						<p class="text-base italic font-medium text-dark-700">Watchtime: 88 minutes</p></div></div></div></div></div>`,f(e,"class","bg-dark-100 p-6")},m(n,i){F(n,e,i)},p:P,i:P,o:P,d(n){n&&z(e)}}}class en extends ee{constructor(e){super(),Q(this,e,null,Qt,Y,{})}}function tn(t){let e,n,i,r,s,l,o,c,a,d,p,k,x,h,_,w,m,N,v,L,$,A,W,te,V,R,H,Z,G,ne,B;_=new J({props:{name:Nt}}),L=new J({props:{name:Ot}}),V=new J({props:{name:Mt}}),G=new J({props:{name:Ct,class:"translate-y-[1px]"}});const b=t[2].default,I=Te(b,t,t[1],null);return{c(){e=g("div"),n=g("div"),i=g("div"),r=g("h2"),s=ae(t[0]),l=j(),o=g("div"),c=g("div"),c.innerHTML='<div class="w-full border-t border-dark-border"></div>',a=j(),d=g("div"),p=g("span"),k=g("button"),x=g("span"),x.textContent="Add",h=j(),O(_.$$.fragment),w=j(),m=g("button"),N=g("span"),N.textContent="Search",v=j(),O(L.$$.fragment),$=j(),A=g("button"),W=g("span"),W.textContent="More",te=j(),O(V.$$.fragment),R=j(),H=g("div"),Z=g("button"),O(G.$$.fragment),ne=j(),I&&I.c(),f(r,"class","text-2xl italic tracking-tight text-dark-700"),f(i,"class","flex justify-center items-center bg-dark-100"),f(c,"class","absolute inset-0 flex items-center"),f(c,"aria-hidden","true"),f(x,"class","sr-only"),f(k,"type","button"),f(k,"class","relative inline-flex items-center rounded-l-md bg-dark-300 px-3 py-2 text-dark-700 hover:text-dark-900 hover:bg-dark-400 focus:z-10"),f(N,"class","sr-only"),f(m,"type","button"),f(m,"class","relative inline-flex items-center bg-dark-300 px-3 py-2 text-dark-700 hover:text-dark-900 hover:bg-dark-400 focus:z-10"),f(W,"class","sr-only"),f(A,"type","button"),f(A,"class","relative inline-flex items-center rounded-r-md bg-dark-300 px-3 py-2 text-dark-700 hover:text-dark-900 hover:bg-dark-400 focus:z-10"),f(p,"class","isolate inline-flex -space-x-px rounded-md shadow-sm"),f(d,"class","relative flex justify-center"),f(o,"class","relative flex flex-grow justify-center items-center"),f(Z,"class","rounded-full text-dark-700 hover:text-dark-900 focus:outline-none focus:ring-1 focus:ring-dark-700"),f(H,"class","flex justify-center items-center bg-dark-100"),f(n,"class","flex flex-row justify-center items-center py-4 px-8 space-x-5")},m(E,K){F(E,e,K),u(e,n),u(n,i),u(i,r),u(r,s),u(n,l),u(n,o),u(o,c),u(o,a),u(o,d),u(d,p),u(p,k),u(k,x),u(k,h),C(_,k,null),u(p,w),u(p,m),u(m,N),u(m,v),C(L,m,null),u(p,$),u(p,A),u(A,W),u(A,te),C(V,A,null),u(n,R),u(n,H),u(H,Z),C(G,Z,null),u(e,ne),I&&I.m(e,null),B=!0},p(E,[K]){(!B||K&1)&&Qe(s,E[0]),I&&I.p&&(!B||K&2)&&Le(I,b,E,E[1],B?je(b,E[1],K,null):Ne(E[1]),null)},i(E){B||(y(_.$$.fragment,E),y(L.$$.fragment,E),y(V.$$.fragment,E),y(G.$$.fragment,E),y(I,E),B=!0)},o(E){T(_.$$.fragment,E),T(L.$$.fragment,E),T(V.$$.fragment,E),T(G.$$.fragment,E),T(I,E),B=!1},d(E){E&&z(e),M(_),M(L),M(V),M(G),I&&I.d(E)}}}function nn(t,e,n){let{$$slots:i={},$$scope:r}=e,{name:s}=e;return t.$$set=l=>{"name"in l&&n(0,s=l.name),"$$scope"in l&&n(1,r=l.$$scope)},[s,r,i]}class we extends ee{constructor(e){super(),Q(this,e,nn,tn,Y,{name:0})}}function rn(t){let e,n;return e=new en({}),{c(){O(e.$$.fragment)},m(i,r){C(e,i,r),n=!0},i(i){n||(y(e.$$.fragment,i),n=!0)},o(i){T(e.$$.fragment,i),n=!1},d(i){M(e,i)}}}function sn(t){let e,n,i,r,s,l,o,c;return e=new Yt({}),i=new we({props:{name:"Watchlist",$$slots:{default:[rn]},$$scope:{ctx:t}}}),s=new we({props:{name:"Favorites"}}),o=new we({props:{name:"Seen"}}),{c(){O(e.$$.fragment),n=j(),O(i.$$.fragment),r=j(),O(s.$$.fragment),l=j(),O(o.$$.fragment)},m(a,d){C(e,a,d),F(a,n,d),C(i,a,d),F(a,r,d),C(s,a,d),F(a,l,d),C(o,a,d),c=!0},p(a,d){const p={};d&1&&(p.$$scope={dirty:d,ctx:a}),i.$set(p)},i(a){c||(y(e.$$.fragment,a),y(i.$$.fragment,a),y(s.$$.fragment,a),y(o.$$.fragment,a),c=!0)},o(a){T(e.$$.fragment,a),T(i.$$.fragment,a),T(s.$$.fragment,a),T(o.$$.fragment,a),c=!1},d(a){M(e,a),a&&z(n),M(i,a),a&&z(r),M(s,a),a&&z(l),M(o,a)}}}function ln(t){let e,n,i;return n=new Kt({props:{$$slots:{default:[sn]},$$scope:{ctx:t}}}),{c(){e=g("div"),O(n.$$.fragment),f(e,"class","h-full min-h-screen bg-dark-100")},m(r,s){F(r,e,s),C(n,e,null),i=!0},p(r,[s]){const l={};s&1&&(l.$$scope={dirty:s,ctx:r}),n.$set(l)},i(r){i||(y(n.$$.fragment,r),i=!0)},o(r){T(n.$$.fragment,r),i=!1},d(r){r&&z(e),M(n)}}}class on extends ee{constructor(e){super(),Q(this,e,null,ln,Y,{})}}new on({target:document.getElementById("app")});
