import{A as K,B as q,C as T,D as j,g as M}from"./element-plus-CSiqOtzA.js";import{u as C,a as P,c as b,A as k,_ as O,b as X,P as Y,d as Z}from"./index-CtAauVK2.js";import{d as R,b as S,o as u,c as d,a as r,U as G,aa as H,u as f,T as U,s as V,r as J,Z as Q,f as W,V as o,M as n,ab as E,S as ee}from"./@vue-TMcuEboY.js";import{u as oe}from"./useLockFn-BhPLnZje.js";import{u as te,a as se}from"./vue-router-CZY6S6gL.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-C2WBhajb.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./nprogress-Cgf5DU8x.js";import"./pinia-ebUeA1L2.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./@vueuse-DE_336rM.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-KJi31KWJ.js";const re={class:"layout-footer"},ne={class:"text-center p-2 text-xs text-tx-secondary max-w-[900px] mx-auto"},ae=["href"],ce=R({__name:"footer",setup(L){const i=C(),m=S(()=>i.config.copyright_config||[]);return(g,x)=>(u(),d("footer",re,[r("div",ne,[(u(!0),d(G,null,H(f(m),a=>(u(),d("a",{class:"mx-1 hover:underline",href:a.value,target:"_blank",key:a.key},U(a.key),9,ae))),128))])]))}}),le={class:"login flex flex-col"},ie={class:"flex-1 flex items-center justify-center"},me={class:"login-card flex rounded-md overflow-hidden"},pe={class:"flex-1 h-full hidden md:inline-block"},ue={class:"login-form bg-body flex flex-col justify-center px-10 py-10 md:w-[400px] w-[375px] flex-none mx-auto"},de={class:"text-center text-3xl font-medium mb-8"},_e={class:"mb-5"},fe=R({__name:"login",setup(L){const i=V(),m=V(),g=C(),x=P(),a=te(),A=se(),c=J(!1),h=S(()=>g.config),s=Q({account:"",password:""}),B={account:[{required:!0,message:"请输入账号",trigger:["blur"]}],password:[{required:!0,message:"请输入密码",trigger:["blur"]}]},F=()=>{var e;if(!s.password)return(e=i.value)==null?void 0:e.focus();_()},_=async()=>{var p;await((p=m.value)==null?void 0:p.validate()),b.set(k,{remember:c.value,account:c.value?s.account:""}),await x.login(s);const{query:{redirect:e}}=a,t=typeof e=="string"?e:Y.INDEX;A.push(t)},{isLock:N,lockFn:$}=oe(_);return W(()=>{const e=b.get(k);e!=null&&e.remember&&(c.value=e.remember,s.account=e.account)}),(e,t)=>{const p=O,v=X,y=K,w=q,z=T,D=j,I=M;return u(),d("div",le,[r("div",ie,[r("div",me,[r("div",pe,[o(p,{src:h.value.login_image,width:400,height:"100%"},null,8,["src"])]),r("div",ue,[r("div",de,U(h.value.web_name),1),o(z,{ref_key:"formRef",ref:m,model:s,size:"large",rules:B},{default:n(()=>[o(w,{prop:"account"},{default:n(()=>[o(y,{modelValue:s.account,"onUpdate:modelValue":t[0]||(t[0]=l=>s.account=l),placeholder:"请输入账号",onKeyup:E(F,["enter"])},{prepend:n(()=>[o(v,{name:"el-icon-User",size:"16"})]),_:1},8,["modelValue"])]),_:1}),o(w,{prop:"password"},{default:n(()=>[o(y,{ref_key:"passwordRef",ref:i,modelValue:s.password,"onUpdate:modelValue":t[1]||(t[1]=l=>s.password=l),"show-password":"",placeholder:"请输入密码",onKeyup:E(_,["enter"])},{prepend:n(()=>[o(v,{name:"el-icon-Lock",size:"16"})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"]),r("div",_e,[o(D,{modelValue:c.value,"onUpdate:modelValue":t[2]||(t[2]=l=>c.value=l),label:"记住账号"},null,8,["modelValue"])]),o(I,{type:"primary",size:"large",loading:f(N),onClick:f($)},{default:n(()=>t[3]||(t[3]=[ee(" 登录 ")])),_:1},8,["loading","onClick"])])])]),o(ce)])}}}),Ze=Z(fe,[["__scopeId","data-v-5f140fa2"]]);export{Ze as default};
