import{U as r,_ as g,d,C as f,V as _,c as S,e as a,O as o,x as s,F,o as v}from"./index-17906d8b.js";const i=r({id:"app",state:()=>({config:"app"}),actions:{setData(e){console.log(e),this.config=e}}}),h=r({id:"user",state:()=>({name:"\u5F20\u4E09",age:18}),getters:{fullName:e=>e.name+"\u4E30"},actions:{updateState(e){this.$state=e,this.updateAppConfig()},updateAppConfig(){i().setData("app-update")}},persist:{key:"user",storage:window.localStorage,paths:["name"]}}),A=d({__name:"testPinia",setup(e){const t=h(),n=i();console.log(n.config),console.log(t),console.log(t.name);const c=f(()=>t.name),{age:l}=_(t),m=()=>{const{name:u,age:p}=t.$state;t.updateState({name:u+1,age:p+1})};return(u,p)=>(v(),S(F,null,[a("div",null,"\u59D3\u540D\uFF1A"+o(s(c)),1),a("div",null,"\u5E74\u9F84\uFF1A"+o(s(l)),1),a("div",null,"\u8BA1\u7B97\u7684\u540D\u5B57\uFF1A"+o(s(t).fullName),1),a("div",null,"app\u7684config: "+o(s(n).config),1),a("button",{onClick:m},"\u66F4\u65B0\u6570\u636E")],64))}});var y=g(A,[["__file","/home/runner/work/vue3-vite2-h5-template-ynzy/vue3-vite2-h5-template-ynzy/src/test/testPinia.vue"]]);export{y as default};
