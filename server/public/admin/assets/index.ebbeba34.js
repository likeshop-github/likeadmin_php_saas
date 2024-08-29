import{_ as R}from"./index.e220379e.js";import{r as C,b as T,d as z}from"./index.710ece9e.js";import{G,H as L,D as $,F as j,I as q,i as H,C as M,L as O,M as P}from"./element-plus.38d235ab.js";import{d as x,a1 as Q,b as W,an as X,o as c,c as h,X as t,P as e,u as i,a,U as d,Q as E,O as F,W as J,a8 as K,V as Y,bk as Z,bj as tt}from"./@vue.54440ad7.js";import"./nprogress.7e676707.js";import"./axios.3cf20ca4.js";import"./vue-router.680b42ce.js";import"./pinia.37585b34.js";import"./lodash.7ac10a55.js";import"./@vueuse.30711f4d.js";import"./css-color-function.6ea2e333.js";import"./color.6bf4344d.js";import"./clone.044b0cbf.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./@element-plus.b60a8dd3.js";import"./vue-clipboard3.951e3262.js";import"./clipboard.1314d1f4.js";import"./echarts.0909e9bd.js";import"./tslib.60310f1a.js";import"./zrender.91adfe72.js";import"./highlight.js.0fd4a67c.js";import"./@highlightjs.3654fb0a.js";import"./lodash-es.2b4cc642.js";import"./dayjs.81aec8fd.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";function et(){return C.get({url:"/setting.hot_search/getConfig"})}function ot(r){return C.post({url:"/setting.hot_search/setConfig",params:r})}const m=r=>(Z("data-v-0afc330d"),r=r(),tt(),r),at={class:"hot-search"},st=m(()=>a("div",{class:"form-tips"},"\u9ED8\u8BA4\u5F00\u542F\uFF0C\u5173\u95ED\u5219\u524D\u7AEF\u4E0D\u663E\u793A\u8BE5\u529F\u80FD",-1)),nt={class:"lg:flex"},lt={class:"flex-1 min-w-0"},rt={class:"hot-search-phone mt-4 lg:mt-0 lg:ml-4 flex-none"},ut=m(()=>a("div",{class:"mb-4 text-center"},"- \u70ED\u641C\u9884\u89C8\u56FE -",-1)),ct={class:"hot-search-phone-content"},it={class:"search-com"},dt={class:"search-con flex items-center px-[15px]"},mt=m(()=>a("span",{class:"ml-[5px]"},"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22",-1)),_t=m(()=>a("div",{class:"hot-search-title"},"\u70ED\u95E8\u641C\u7D22",-1)),pt={class:"hot-search-text"},ht=x({name:"search"}),ft=x({...ht,setup(r){const n=Q({status:1,data:[]}),B=W(()=>n.data.filter(o=>o.name).sort((o,l)=>l.sort-o.sort)),f=async()=>{try{const o=await et();for(const l in n)n[l]=o[l]}catch(o){console.log("\u83B7\u53D6=>",o)}},y=()=>{n.data.push({name:"",sort:0})},V=o=>{n.data.splice(o,1)},w=async()=>{try{await ot(n),f()}catch(o){console.log("\u4FDD\u5B58=>",o)}};return f(),(o,l)=>{const g=G,k=L,S=$,I=j,D=q,_=H,b=M,p=O,U=P,A=T,N=R,v=X("perms");return c(),h("div",at,[t(D,{class:"!border-none",shadow:"never"},{default:e(()=>[t(I,{ref:"formRef",model:i(n),"label-width":"100px"},{default:e(()=>[t(S,{label:"\u529F\u80FD\u72B6\u6001",style:{"margin-bottom":"0"}},{default:e(()=>[a("div",null,[t(k,{modelValue:i(n).status,"onUpdate:modelValue":l[0]||(l[0]=s=>i(n).status=s)},{default:e(()=>[t(g,{label:1},{default:e(()=>[d("\u5F00\u542F")]),_:1}),t(g,{label:0},{default:e(()=>[d("\u5173\u95ED")]),_:1})]),_:1},8,["modelValue"]),st])]),_:1})]),_:1},8,["model"])]),_:1}),t(D,{class:"!border-none mt-4",shadow:"never"},{default:e(()=>[a("div",nt,[a("div",lt,[t(_,{type:"primary",class:"mb-4",onClick:y},{default:e(()=>[d("\u6DFB\u52A0")]),_:1}),t(U,{size:"large",data:i(n).data},{default:e(()=>[t(p,{label:"\u5173\u952E\u8BCD",prop:"describe","min-width":"160"},{default:e(({row:s})=>[t(b,{modelValue:s.name,"onUpdate:modelValue":u=>s.name=u,clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u5B57","show-word-limit":"",maxlength:"30"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(p,{label:"\u6392\u5E8F",prop:"describe","min-width":"160"},{default:e(({row:s})=>[t(b,{modelValue:s.sort,"onUpdate:modelValue":u=>s.sort=u,type:"number"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(p,{label:"\u64CD\u4F5C","min-width":"80",fixed:"right"},{default:e(({$index:s})=>[E((c(),F(_,{type:"danger",link:"",onClick:u=>V(s)},{default:e(()=>[d(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[v,["setting:storage:edit"]]])]),_:1})]),_:1},8,["data"])]),a("div",rt,[ut,a("div",ct,[a("div",it,[a("div",dt,[t(A,{name:"el-icon-Search",size:17}),mt])]),_t,a("div",pt,[(c(!0),h(J,null,K(i(B),(s,u)=>(c(),h("span",{key:u},Y(s.name),1))),128))])])])])]),_:1}),E((c(),F(N,null,{default:e(()=>[t(_,{type:"primary",onClick:w},{default:e(()=>[d("\u4FDD\u5B58")]),_:1})]),_:1})),[[v,["setting.hot_search/setConfig"]]])])}}});const Jt=z(ft,[["__scopeId","data-v-0afc330d"]]);export{Jt as default};
