var ee=Object.defineProperty,te=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var N=(t,e,u)=>e in t?ee(t,e,{enumerable:!0,configurable:!0,writable:!0,value:u}):t[e]=u,T=(t,e)=>{for(var u in e||(e={}))ae.call(e,u)&&N(t,u,e[u]);if(V)for(var u of V(e))ne.call(e,u)&&N(t,u,e[u]);return t},q=(t,e)=>te(t,ue(e));import{c as se,N as U,a as oe,o as i,b as r,d as L,e as E,u as O,f as a,t as b,g as c,F as m,h as B,n as H,p as z,i as D,j as _,r as p,k as le,l as W,m as k,q as g,s as ie,w as re,v as G,x as C,A as ce,y as _e,P as de,S as ve,z as $,B as pe,C as K,V as me}from"./vendor.ebb0b43e.js";const fe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function u(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=u(n);fetch(n.href,o)}};fe();var he={title:t=>{const{normalize:e}=t;return e(["Chinese Famous Paintings"])},index:{0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9}},Ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:he}),ge={title:t=>{const{normalize:e}=t;return e(["\u4E2D\u56FD\u540D\u753B\u91CC\u7684\u8863\u98DF\u4F4F\u884C"])},index:{0:t=>{const{normalize:e}=t;return e(["\u3007"])},1:t=>{const{normalize:e}=t;return e(["\u4E00"])},2:t=>{const{normalize:e}=t;return e(["\u4E8C"])},3:t=>{const{normalize:e}=t;return e(["\u4E09"])},4:t=>{const{normalize:e}=t;return e(["\u56DB"])},5:t=>{const{normalize:e}=t;return e(["\u4E94"])},6:t=>{const{normalize:e}=t;return e(["\u516D"])},7:t=>{const{normalize:e}=t;return e(["\u4E03"])},8:t=>{const{normalize:e}=t;return e(["\u516B"])},9:t=>{const{normalize:e}=t;return e(["\u4E5D"])}},button:{about:t=>{const{normalize:e}=t;return e(["\u5173\u4E8E"])},back:t=>{const{normalize:e}=t;return e(["\u8FD4\u56DE"])},go:t=>{const{normalize:e}=t;return e(["\u786E\u5B9A"])},home:t=>{const{normalize:e}=t;return e(["\u9996\u9875"])},toggle_dark:t=>{const{normalize:e}=t;return e(["\u5207\u6362\u6DF1\u8272\u6A21\u5F0F"])},toggle_langs:t=>{const{normalize:e}=t;return e(["\u5207\u6362\u8BED\u8A00"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["\u56FA\u6267\u5DF1\u89C1\u7684 Vite \u9879\u76EE\u6A21\u677F"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["\u52A8\u6001\u8DEF\u7531\u6F14\u793A"])},hi:t=>{const{normalize:e,interpolate:u,named:s}=t;return e(["\u4F60\u597D\uFF0C",u(s("name"))])},aka:t=>{const{normalize:e}=t;return e(["\u4E5F\u53EB"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["\u8F93\u5165\u4F60\u7684\u540D\u5B57"])}},"not-found":t=>{const{normalize:e}=t;return e(["\u672A\u627E\u5230\u9875\u9762"])}},ye=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ge});const Ce=Object.fromEntries(Object.entries({"../../locales/en.yml":Ee,"../../locales/zh-CN.yml":ye}).map(([t,e])=>{const u=t.endsWith(".yaml");return[t.slice(14,u?-5:-4),e.default]})),Fe=({app:t})=>{const e=se({legacy:!1,locale:"zh-CN",messages:Ce});t.use(e)};var be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:Fe});const Be=({isClient:t,router:e})=>{t&&(e.beforeEach(()=>{U.start()}),e.afterEach(()=>{U.done()}))};var $e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:Be});const xe=({isClient:t,initialState:e,app:u})=>{const s=oe();u.use(s),t?s.state.value=e.pinia||{}:e.pinia=s.state.value};var we=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:xe});const ze="modulepreload",J={},De="/famous-painting/",x=function(e,u){return!u||u.length===0?e():Promise.all(u.map(s=>{if(s=`${De}${s}`,s in J)return;J[s]=!0;const n=s.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const l=document.createElement("link");if(l.rel=n?"stylesheet":ze,n||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),n)return new Promise((v,f)=>{l.addEventListener("load",v),l.addEventListener("error",f)})})).then(()=>e())};var d=(t,e)=>{const u=t.__vccOpts||t;for(const[s,n]of e)u[s]=n;return u};const ke={},Ae={class:"comment"},Se=L('<div class="comment__sender" data-v-35869c0f><div class="avatar" data-v-35869c0f></div><input type="text" class="sender" data-v-35869c0f><span class="prompt" data-v-35869c0f>\u8BC4\u8BBA</span><span class="submit" data-v-35869c0f>\u63D0\u4EA4</span></div><div class="comment__message" data-v-35869c0f><div class="comment__title" data-v-35869c0f>\u5168\u90E8\u8BC4\u8BBA</div><div class="comment__item" data-v-35869c0f><div class="avatar" data-v-35869c0f></div><div class="profile" data-v-35869c0f><span data-v-35869c0f>\u59D3\u540D</span><span data-v-35869c0f>2022-01-01 22:00</span></div><div class="content" data-v-35869c0f>\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9</div></div><div class="comment__item" data-v-35869c0f><div class="avatar" data-v-35869c0f></div><div class="profile" data-v-35869c0f><span data-v-35869c0f>\u59D3\u540D</span><span data-v-35869c0f>2022-01-01 22:00</span></div><div class="content" data-v-35869c0f>\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9</div></div><div class="comment__item" data-v-35869c0f><div class="avatar" data-v-35869c0f></div><div class="profile" data-v-35869c0f><span data-v-35869c0f>\u59D3\u540D</span><span data-v-35869c0f>2022-01-01 22:00</span></div><div class="content" data-v-35869c0f> \u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9 </div></div></div>',2),Le=[Se];function Oe(t,e){return i(),r("aside",Ae,Le)}var Ie=d(ke,[["render",Oe],["__scopeId","data-v-35869c0f"]]);const A=t=>(z("data-v-5fbd073c"),t=t(),D(),t),Re={class:"exercise__index"},Pe={class:"exercise__content"},Me=["innerHTML"],je={class:"exercise__response"},Ve=A(()=>a("span",{class:"wrong"},"A \u4EA4\u9886\u53F3\u887D",-1)),Ne=A(()=>a("span",{class:"wrong"},"B \u5E38\u670D\u548C\u793C\u670D",-1)),Te=A(()=>a("span",{class:"right"},"C \u8863\u88F3\u5236",-1)),qe=A(()=>a("span",{class:"wrong"},"D \u4E0A\u8863\u4E0B\u88F3",-1)),Ue={key:3,class:"textarea",contenteditable:"true"},He=E({props:{index:{type:Number,default:1,required:!0,validator:t=>t>0},title:{type:String,default:""},other:{type:Object},within:{type:String,required:!0}},setup(t){const e=t,{t:u}=O();return(s,n)=>(i(),r("div",{class:H(["exercise",[e.within]])},[a("div",Re,"\u7EC3\u4E60"+b(c(u)(`index.${e.index}`)),1),a("div",Pe,[a("div",{class:"exercise__inquirer",innerHTML:e.title},null,8,Me),a("div",je,[e.within==="judge"?(i(),r(m,{key:0},[],64)):e.within==="single"?(i(),r(m,{key:1},[Ve,Ne,Te,qe],64)):e.within==="choice"?(i(),r(m,{key:2},[],64)):e.within==="answer"?(i(),r("div",Ue)):B("",!0)])])],2))}});var We=d(He,[["__scopeId","data-v-5fbd073c"]]);const S=t=>(z("data-v-13523964"),t=t(),D(),t),Ge={class:"courseware"},Ke={class:"courseware__tabs"},Je=S(()=>a("div",null,"\u7B2C\u4E00\u8BFE\u65F6\u8BFE\u4EF6",-1)),Qe=["src"],Xe=S(()=>a("div",null,"\u7B2C\u4E8C\u8BFE\u65F6\u8BFE\u4EF6",-1)),Ye=["src"],Ze=S(()=>a("div",null,"\u672C\u96C6\u56FE\u518C",-1)),et=["src"],tt=S(()=>a("div",{class:"courseware__mask"},null,-1)),ut={class:"courseware__exercise"},at=E({setup(t){const{BASE_URL:e}={BASE_URL:"/famous-painting/",MODE:"production",DEV:!1,PROD:!0};return(u,s)=>{const n=We;return i(),r("section",Ge,[a("ul",Ke,[a("li",null,[Je,a("aside",null,[a("img",{src:`${c(e)}assets/courseware--1.png`},null,8,Qe)])]),a("li",null,[Xe,a("aside",null,[a("img",{src:`${c(e)}assets/courseware--2.png`},null,8,Ye)])]),a("li",null,[Ze,a("aside",null,[a("img",{src:`${c(e)}assets/courseware--3.png`},null,8,et)])]),tt]),a("div",ut,[_(n,{index:1,within:"single",title:"\u8D77\u6E90\u4E8E\u5148\u79E6\u65F6\u671F\uFF0C\u6709\u8FD14000\u5E74\u7684\u5386\u53F2\uFF0C\u662F\u4E2D\u56FD\u6700\u53E4\u8001\u3001\u6700\u57FA\u7840\u7684\u670D\u9970\u5F62\u5236\uFF0C\u662F\u6C49\u670D\u7684\u6E90\u5934\u3002\u5B83\u662F\u534E\u590F\u6587\u660E\u4E2D\u670D\u9970\u793C\u4EEA\u89C4\u683C\u6700\u9AD8\u7684\u5F62\u5F0F\u3002"}),_(n,{index:2,within:"answer",title:"\u6211\u4EEC\u5E38\u8BF4\u201C\u6CA1\u6709\u89C4\u77E9\u4E0D\u6210\u65B9\u5706\u201D\uFF0C\u8BF7\u4F60\u89E3\u91CA\u8FD9\u53E5\u8BDD\u5E76\u4E3E\u4F8B\u8BF4\u660E\u3002"}),_(n,{index:3,within:"answer",title:"\u627E\u76F8\u540C\uFF1A\u4ECE\u4E0B\u5217\u5B57\u4E2D\u627E\u51FA\u76F8\u540C\u7684\u90E8\u5206\u5E76\u4F8B\u4E3E\u7C7B\u4F3C\u6C49\u5B57<br /><span style='padding-left: 72px;'>\u8896\u3001\u888D\u3001\u889C\u3001\u88E4\u3001\u88D9</span>"})])])}}});var nt=d(at,[["__scopeId","data-v-13523964"]]);const st=t=>(z("data-v-fed7cbc0"),t=t(),D(),t),ot={class:"knowledge"},lt={class:"knowledge__item"},it={class:"knowledge__index",title:"\u77E5\u8BC6\u70B9\u4E00"},rt=st(()=>a("div",{class:"knowledge__label"},"\u534E\u590F\u6587\u660E\u4E2D\u670D\u9970\u793C\u4EEA\u89C4\u683C\u6700\u9AD8\u7684\u5F62\u5F0F-\u8863\u88F3\u5236\uFF0C\u4E0D\u4EC5\u6709\u5B9E\u7528\u7F8E\u89C2\u7684\u7279\u70B9\uFF0C\u540C\u65F6\u4E5F\u4F53\u73B0\u4E86\u5148\u6C11\u5BF9\u4E16\u754C\u79E9\u5E8F\u7684\u7406\u89E3\u3002",-1)),ct=L('<li class="knowledge__item" data-v-fed7cbc0><div class="knowledge__index" title="\u77E5\u8BC6\u70B9\u4E8C" data-v-fed7cbc0>\u77E5\u8BC6\u70B9\u4E8C</div><div class="knowledge__label" data-v-fed7cbc0> \u89C4\u77E9\uFF0C\u662F\u53E4\u4EBA\u7528\u6765\u6D4B\u91CF\u548C\u753B\u56FE\u7684\u5DE5\u5177\u3002<br data-v-fed7cbc0> \u89C4\uFF0C\u662F\u4E13\u95E8\u7528\u6765\u753B\u5706\u7684\u5706\u89C4\u3002\u77E9\uFF0C\u662F\u4E00\u79CD\u6807\u6709\u523B\u5EA6\u7684\u6298\u6210\u76F4\u89D2\u7684\u5C3A\u3002 </div></li><li class="knowledge__item" data-v-fed7cbc0><div class="knowledge__index" title="\u77E5\u8BC6\u70B9\u4E09" data-v-fed7cbc0>\u77E5\u8BC6\u70B9\u4E09</div><div class="knowledge__label" data-v-fed7cbc0>\u4F20\u8BF4\u4F0F\u7FB2\u5973\u5A32\u662F\u521B\u9020\u4EBA\u7C7B\u7684\u4E8C\u4F4D\u4E3B\u795E\u548C\u59CB\u7956\uFF0C\u521D\u6C11\u5C31\u5229\u7528\u8FD9\u4E2A\u4F20\u8BF4\u89E3\u91CA\u4E86\u4EBA\u7C7B\u7684\u8D77\u6E90\u4E0E\u7E41\u884D\u95EE\u9898\u3002</div></li>',2),_t=E({setup(t){const{t:e}=O();return(u,s)=>(i(),r("ol",ot,[a("li",lt,[a("div",it,"\u77E5\u8BC6\u70B9"+b(c(e)("index.1")),1),rt]),ct]))}});var dt=d(_t,[["__scopeId","data-v-fed7cbc0"]]);const vt=t=>(z("data-v-78f0b674"),t=t(),D(),t),pt=vt(()=>a("aside",{class:"media-box__ornament"},null,-1)),mt={class:"media-box__container"},ft={class:"media-box__controls"},ht={class:"volume"},Et=["onClick"],gt=E({setup(t){const e=p(1),u=p(0),s=p(!1),n=p(),o=p(),l=p(),v=()=>{u.value=0,M()},f=()=>{!o.value||o.value.ended||o.value.paused||(s.value=!1,o.value.pause(),P())},y=()=>{!o.value||!o.value.paused||(s.value=!0,o.value.volume=e.value,o.value.play(),M())},w=()=>{P(),s.value=!1,u.value=l.value.getBoundingClientRect().width},Y=h=>{e.value=h*20/100,o.value&&(o.value.volume=e.value)},I=()=>{if(!o.value||!l.value)return;const{width:h}=l.value.getBoundingClientRect();u.value=Math.ceil(o.value.currentTime/o.value.duration*h)},Z=()=>{var h;document.fullscreenElement?document.exitFullscreen():(h=n.value)==null||h.requestFullscreen()},R=y,{pause:P,resume:M}=le(I,{immediate:!1});return W(l,()=>{!o.value||(o.value.ended&&w(),o.value.paused&&I())}),(h,j)=>(i(),r("div",{class:"media-box",ref_key:"box",ref:n},[pt,a("div",mt,[a("video",{onPlay:v,onEnded:w,ref_key:"media",ref:o,src:"https://github.com/mediaelement/mediaelement-files/raw/master/big_buck_bunny.mp4"},null,544),s.value?B("",!0):(i(),r("aside",{key:0,onClick:j[0]||(j[0]=(...F)=>c(R)&&c(R)(...F))}))]),a("div",ft,[a("span",{class:"pause",onClick:f}),a("span",{class:"play",onClick:y}),a("div",ht,[(i(),r(m,null,k(5,F=>a("i",{class:H(Math.ceil(e.value/2*10)>=F?"active":""),onClick:Xt=>Y(F),key:F},null,10,Et)),64))]),a("div",{class:"progress",ref_key:"track",ref:l},[u.value?(i(),r("span",{key:0,style:g(`--width: ${Math.ceil(u.value)}px`)},null,4)):B("",!0)],512),a("span",{class:"full",onClick:Z})])],512))}});var yt=d(gt,[["__scopeId","data-v-78f0b674"]]);const Ct={},Ft={class:"ornament"};function bt(t,e){return i(),r("aside",Ft)}var Bt=d(Ct,[["render",bt],["__scopeId","data-v-a6b1d9ba"]]);const $t={class:"navigation"},xt={key:0},wt={key:0},zt=E({setup(t){const e=ie([{label:"\u8863",direction:"L",children:[{label:"\u7B2C\u4E00\u96C6 \u6709\u8DA3\u7684\u4F20\u8BF4",redirect:{}},{label:"\u7B2C\u4E8C\u96C6 \u5E1D\u738B\u5C06\u76F8\u4E0E\u624D\u5B50\u4F73\u4EBA",redirect:{}},{label:"\u7B2C\u4E09\u96C6 \u5927\u5510\u4E3D\u4EBA",redirect:{}},{label:"\u7B2C\u56DB\u96C6 \u56DE\u5230\u5B8B\u671D",redirect:{}},{label:"\u7B2C\u4E94\u96C6 \u65F6\u5C1A\u662F\u4E00\u79CD\u8F6E\u56DE",redirect:{}}]},{label:"\u98DF",direction:"L",children:[]},{label:"\u4F4F",direction:"L",children:[]},{label:"\u884C",direction:"L",children:[]},{label:"\u73A9",direction:"L",children:[]},{label:"\u540D\u753B\u8D4F\u6790",direction:"R",redirect:""},{label:"\u6211\u7684",direction:"R",redirect:""}]),u=p([]),s=p([]);return re(e,()=>{u.value=e.filter(({direction:n})=>n==="L"),s.value=e.filter(({direction:n})=>n==="R")},{immediate:!0}),(n,o)=>(i(),r("nav",$t,[a("ul",null,[(i(!0),r(m,null,k(u.value,(l,v)=>(i(),r("li",{key:v},[a("span",null,b(l.label),1),(l==null?void 0:l.children)?(i(),r("aside",xt,[(i(!0),r(m,null,k(l.children,(f,y)=>(i(),r("span",{key:y},b(f.label),1))),128))])):B("",!0)]))),128)),s.value.length?(i(),r("div",wt,[(i(!0),r(m,null,k(s.value,(l,v)=>(i(),r("li",{key:v},[a("span",null,b(l.label),1)]))),128))])):B("",!0)])]))}});var Dt=d(zt,[["__scopeId","data-v-398e5e52"]]);const kt=E({setup(t){const{BASE_URL:e}={BASE_URL:"/famous-painting/",MODE:"production",DEV:!1,PROD:!0},u=p(null),s=p(0),n={clickable:!0,bulletClass:"carousel__bullet",bulletActiveClass:"carousel__bullet--active"};return W(u,o=>{const l=o[0],{width:v}=l.contentRect;s.value=(v-948)/2+12,s.value=s.value<=10?10:s.value}),(o,l)=>(i(),G(c(ve),{loop:"",navigation:"",ref_key:"el",ref:u,class:"carousel",effect:"fade",style:g(`--offset: ${s.value}px;`),autoplay:{delay:5e3},modules:[c(ce),c(_e),c(de)],pagination:n,"space-between":0},{default:C(()=>[_(c($),null,{default:C(()=>[a("div",{style:g(`--background: url('${c(e)}assets/swiper.png')`)},null,4)]),_:1}),_(c($),null,{default:C(()=>[a("div",{style:g(`--background: url('${c(e)}assets/swiper.png')`)},null,4)]),_:1}),_(c($),null,{default:C(()=>[a("div",{style:g(`--background: url('${c(e)}assets/swiper.png')`)},null,4)]),_:1}),_(c($),null,{default:C(()=>[a("div",{style:g(`--background: url('${c(e)}assets/swiper.png')`)},null,4)]),_:1}),_(c($),null,{default:C(()=>[a("div",{style:g(`--background: url('${c(e)}assets/swiper.png')`)},null,4)]),_:1})]),_:1},8,["style","modules"]))}});var At=d(kt,[["__scopeId","data-v-41269b76"]]);const St={},Lt={class:"copyright"},Ot=L('<div class="copyright__item" data-v-3237e352><div data-v-3237e352>\u5173\u4E8E\u6211\u4EEC</div><ul data-v-3237e352><li data-v-3237e352><a data-v-3237e352>\u6587\u6848\u6587\u6848</a></li><li data-v-3237e352><a data-v-3237e352>\u6587\u6848\u6587\u6848</a></li></ul></div><div class="copyright__item" data-v-3237e352><div data-v-3237e352>\u7F51\u7AD9\u58F0\u660E</div><ul data-v-3237e352><li data-v-3237e352>\u6587\u6848\u6587\u6848</li></ul></div><div class="copyright__item" data-v-3237e352><div data-v-3237e352>\u8054\u7CFB\u6211\u4EEC</div><ul data-v-3237e352><li data-v-3237e352>\u6587\u6848\u6587\u6848</li></ul></div><div class="copyright__item" data-v-3237e352><div data-v-3237e352>\u53CB\u60C5\u94FE\u63A5</div><ul data-v-3237e352><li data-v-3237e352>\u6587\u6848\u6587\u6848</li></ul></div><div class="copyright__item" data-v-3237e352><div data-v-3237e352>\u5408\u4F5C\u4F19\u4F34</div><ul data-v-3237e352><li data-v-3237e352>\u6587\u6848\u6587\u6848</li></ul></div>',5),It=[Ot];function Rt(t,e){return i(),r("footer",Lt,It)}var Pt=d(St,[["render",Rt],["__scopeId","data-v-3237e352"]]);var Q={};const X=E({setup(t){const{t:e}=O();return pe({title:e("title")}),(u,s)=>{const n=At,o=Dt,l=Bt,v=yt,f=dt,y=nt,w=Ie;return i(),r(m,null,[a("header",null,[_(n),_(o)]),a("main",null,[_(l),_(v),_(f)]),_(y),_(w),_(Pt)],64)}}});typeof Q=="function"&&Q(X);var Mt=d(X,[["__scopeId","data-v-28702828"]]);const jt=[{name:"not-found",path:"/:all(.*)*",component:()=>x(()=>import("./_...all_.6b912749.js"),["assets/_...all_.6b912749.js","assets/vendor.ebb0b43e.js"]),props:!0,meta:{layout:404}},{name:"home",path:"/",component:Mt,props:!0,meta:{layout:"home"}},{name:"category-id",path:"/:category/:id",component:()=>x(()=>import("./_id_.da561552.js"),["assets/_id_.da561552.js","assets/vendor.ebb0b43e.js"]),props:!0}],Vt={},Nt={class:"px-4 py-10 text-center text-gray-700 dark:text-gray-200"},Tt=a("div",{class:"mt-5 mx-auto text-center opacity-25 text-sm"},"[Default Layout]",-1);function qt(t,e){const u=K("router-view");return i(),r("main",Nt,[_(u),Tt])}var Ut=d(Vt,[["render",qt]]);const Ht={"404":()=>x(()=>import("./404.2995de83.js"),["assets/404.2995de83.js","assets/vendor.ebb0b43e.js"]),default:Ut,home:()=>x(()=>import("./home.907ee3a2.js"),["assets/home.907ee3a2.js","assets/vendor.ebb0b43e.js"]),page:()=>x(()=>import("./page.e2a71176.js"),["assets/page.e2a71176.js","assets/page.bfd335b7.css","assets/vendor.ebb0b43e.js"])};function Wt(t){return t.map(e=>{var u;return{path:e.path,component:Ht[((u=e.meta)==null?void 0:u.layout)||"default"],children:[q(T({},e),{path:""})]}})}const Gt={name:"Application"};function Kt(t,e,u,s,n,o){const l=K("router-view");return i(),G(l)}var Jt=d(Gt,[["render",Kt]]);const Qt=Wt(jt);me(Jt,{routes:Qt,base:"/famous-painting/"},t=>{Object.values({"./modules/i18n.ts":be,"./modules/nprogress.ts":$e,"./modules/pinia.ts":we}).forEach(e=>{var u;return(u=e.install)==null?void 0:u.call(e,t)})});export{d as _,At as a,Dt as b,Bt as c};
