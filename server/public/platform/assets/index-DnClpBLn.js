import{Q as P,G as B,k as F,l as M,H as O,R as S,g as U,K as D,O as z}from"./element-plus-CSiqOtzA.js";import{a as q}from"./message-DL8TrVjR.js";import{u as G}from"./usePaging-DFi_nJOG.js";import{g as H}from"./index-CtAauVK2.js";import{d as y,r as K,Z as Q,a4 as Z,ah as j,an as I,o as m,c as f,V as t,M as o,u as n,i as J,U as N,aa as W,O as b,L as g,S as v,T as X}from"./@vue-TMcuEboY.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-C2WBhajb.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./nprogress-Cgf5DU8x.js";import"./vue-router-CZY6S6gL.js";import"./pinia-ebUeA1L2.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./@vueuse-DE_336rM.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-KJi31KWJ.js";const Y=y({name:"notice"}),Ft=y({...Y,setup($){let c;(a=>{a[a.USER=1]="USER",a[a.PLATFORM=2]="PLATFORM"})(c||(c={}));const r=K(1),h=[{name:"通知用户",type:1},{name:"通知平台",type:2}],T=Q({recipient:r}),{pager:_,getLists:p}=G({fetchFun:q,params:T});return Z(()=>{p()}),p(),(a,s)=>{const w=P,d=B,E=F,k=M,i=O,C=S,L=j("router-link"),R=U,V=D,x=I("perms"),A=z;return m(),f("div",null,[t(d,{class:"!border-none",shadow:"never"},{default:o(()=>[t(w,{type:"warning",title:"温馨提示：平台配置在各个场景下的通知发送方式和内容模板",closable:!1,"show-icon":""})]),_:1}),t(d,{class:"!border-none mt-4",shadow:"never"},{default:o(()=>[t(k,{modelValue:n(r),"onUpdate:modelValue":s[0]||(s[0]=e=>J(r)?r.value=e:null),onTabChange:n(p)},{default:o(()=>[(m(),f(N,null,W(h,(e,l)=>t(E,{key:l,label:e.name,name:e.type,lazy:""},null,8,["label","name"])),64))]),_:1},8,["modelValue","onTabChange"]),b((m(),g(V,{size:"large",data:n(_).lists},{default:o(()=>[t(i,{label:"通知场景",prop:"scene_name","min-width":"120"}),t(i,{label:"通知类型",prop:"type_desc","min-width":"160"}),t(i,{label:"短信通知","min-width":"80"},{default:o(({row:e})=>{var l;return[t(C,{type:((l=e.sms_notice)==null?void 0:l.status)==1?"primary":"danger"},{default:o(()=>{var u;return[v(X(((u=e.sms_notice)==null?void 0:u.status)==1?"开启":"关闭"),1)]}),_:2},1032,["type"])]}),_:1}),t(i,{label:"操作","min-width":"80",fixed:"right"},{default:o(({row:e})=>[b((m(),g(R,{type:"primary",link:""},{default:o(()=>[t(L,{to:{path:n(H)("notice.notice/set"),query:{id:e.id}}},{default:o(()=>s[1]||(s[1]=[v(" 设置 ")])),_:2},1032,["to"])]),_:2},1024)),[[x,["notice.notice/set"]]])]),_:1})]),_:1},8,["data"])),[[A,n(_).loading]])]),_:1})])}}});export{Ft as default};
