import{g as x,n as f,t as E,y as S,d as A,z as h,A as D,C as j,D as m,l as U,E as C,G as $,H as N,k as s,J,K as R,s as z,L as T,I as M,w as O,_ as V,M as G,N as H,T as F,c as K,e as n,x as v,O as _,o as W,p as q,b as Q}from"./index-3de2b923.js";import{l as X}from"./authController-22ea23ec.js";import{g as Y}from"./uuid-68150888.js";const[Z,u]=x("image"),ee={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:f,height:f,radius:f,lazyLoad:Boolean,iconSize:f,showError:E,errorIcon:S("photo-fail"),iconPrefix:String,showLoading:E,loadingIcon:S("photo")};var ae=A({name:Z,props:ee,emits:["load","error"],setup(e,{emit:r,slots:i}){const o=h(!1),t=h(!0),c=h(),{$Lazyload:l}=D().proxy,L=j(()=>{const a={width:m(e.width),height:m(e.height)};return U(e.radius)&&(a.overflow="hidden",a.borderRadius=m(e.radius)),a});C(()=>e.src,()=>{o.value=!1,t.value=!0});const g=a=>{t.value=!1,r("load",a)},y=a=>{o.value=!0,t.value=!1,r("error",a)},w=(a,d,p)=>p?p():s(M,{name:a,size:e.iconSize,class:d,classPrefix:e.iconPrefix},null),P=()=>{if(t.value&&e.showLoading)return s("div",{class:u("loading")},[w(e.loadingIcon,u("loading-icon"),i.loading)]);if(o.value&&e.showError)return s("div",{class:u("error")},[w(e.errorIcon,u("error-icon"),i.error)])},k=()=>{if(o.value||!e.src)return;const a={alt:e.alt,class:u("img"),style:{objectFit:e.fit,objectPosition:e.position}};return e.lazyLoad?J(s("img",z({ref:c},a),null),[[R("lazy"),e.src]]):s("img",z({src:e.src,onLoad:g,onError:y},a),null)},I=({el:a})=>{const d=()=>{a===c.value&&t.value&&g()};c.value?d():T(d)},b=({el:a})=>{a===c.value&&!o.value&&y()};return l&&$&&(l.$on("loaded",I),l.$on("error",b),N(()=>{l.$off("loaded",I),l.$off("error",b)})),()=>{var a;return s("div",{class:u({round:e.round,block:e.block}),style:L.value},[k(),P(),(a=i.default)==null?void 0:a.call(i)])}}});const oe=O(ae);const B=e=>(q("data-v-6c381176"),e=e(),Q(),e),te={class:"about_container"},re={class:"item avatar"},ne={class:"item author"},se={class:"item author"},ie=B(()=>n("p",{class:"label"},"\u5FAE\u4FE1\u6388\u6743code\u7801:",-1)),ce=B(()=>n("p",{class:"label"},"\u9879\u76EE\u5730\u5740:",-1)),ue=A({__name:"About",setup(e){const r=G(),i=()=>{window.location.href=`${r.userInfo.projectAddress}`};return H(async()=>{try{{const o={account:"frontend@cpapi.com",password:Y(8)+window.btoa("Password123"),type:"PASSWORD"};X(o).then(t=>{t&&(F.success("\u767B\u5F55\u6210\u529F"),r.saveUserInfo({author:"Janaeiw",avatar:"/vue3-vite2-h5-template-ynzy/images/avatar.jpg",projectAddress:"https://github.com/Janaeiw/vue3-vite2-h5-template-ynzy"}))}).catch(t=>{F.fail(t)})}}catch(o){console.log(o)}}),(o,t)=>{const c=oe;return W(),K("div",te,[n("div",re,[s(c,{width:"100",height:"100",round:"",src:v(r).userInfo.avatar},null,8,["src"])]),n("div",ne,"\u9879\u76EE\u4F5C\u8005\uFF1A"+_(v(r).userInfo.author),1),n("div",se,[ie,n("p",null,_(v(r).code||"\u8BF7\u4F7F\u7528\u5FAE\u4FE1\u6D4F\u89C8\u5668\u67E5\u770B"),1)]),n("div",{class:"item url",onClick:i},[ce,n("p",null,_(v(r).userInfo.projectAddress),1)])])}}});var he=V(ue,[["__scopeId","data-v-6c381176"],["__file","/home/runner/work/vue3-vite2-h5-template-ynzy/vue3-vite2-h5-template-ynzy/src/views/tabBar/About.vue"]]);export{he as default};
