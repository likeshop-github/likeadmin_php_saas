import{J as L,I as N,h as M,K as O,f as U,L as A,M as P}from"./element-plus-B9ALq7eR.js";import{_ as j}from"./index.vue_vue_type_script_setup_true_lang-B-ov7tNf.js";import{f as z,b as F}from"./index-Dnfu0Fmw.js";import{o as I,d as J,e as K}from"./wx_oa-DuarA1nF.js";import{u as q}from"./usePaging-DFi_nJOG.js";import{_ as G}from"./edit.vue_vue_type_script_setup_true_lang-hCcja4p4.js";import{d as H,s as Q,r as W,b as g,o as f,c as X,V as t,M as n,a as v,S as m,O as Y,L as h,u as l,T as w,i as Z,R as ee,n as b}from"./@vue-TMcuEboY.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-BZaexRrS.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./nprogress-Cgf5DU8x.js";import"./vue-router-D4MxfuQi.js";import"./pinia-ebUeA1L2.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./@vueuse-BQYVjZ5N.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-KJi31KWJ.js";import"./index-C-QCDPmx.js";const te={class:"flex justify-end mt-4"},Pe=H({__name:"keyword_reply",setup(ae){const p=Q(),d=W(!1),k=g(()=>o=>{switch(o){case 1:return"全匹配";case 2:return"模糊匹配"}}),C=g(()=>o=>{switch(o){case 1:return"文本"}}),{pager:r,getLists:s}=q({fetchFun:K,params:{reply_type:2}}),V=async()=>{var o;d.value=!0,await b(),(o=p.value)==null||o.open("add",2)},E=async o=>{var e,c;d.value=!0,await b(),(e=p.value)==null||e.open("edit",2),(c=p.value)==null||c.getDetail(o)},R=async o=>{await z.confirm("确定要删除？"),await I({id:o}),s()},$=async o=>{try{await J({id:o}),s()}catch{s()}};return s(),(o,e)=>{const c=L,y=N,x=F,_=M,i=O,S=U,T=A,B=j,D=P;return f(),X("div",null,[t(y,{class:"!border-none",shadow:"never"},{default:n(()=>[t(c,{type:"warning",title:"温馨提示：1.粉丝在公众号发送内容时，通过关键词可触发关键词回复；2.同时可启用多个关键词回复，有多条关键词匹配时优选选择排序靠前的一条",closable:!1,"show-icon":""})]),_:1}),t(y,{class:"!border-none mt-4",shadow:"never"},{default:n(()=>[v("div",null,[t(_,{class:"mb-4",type:"primary",onClick:e[0]||(e[0]=a=>V())},{icon:n(()=>[t(x,{name:"el-icon-Plus"})]),default:n(()=>[e[3]||(e[3]=m(" 新增 "))]),_:1})]),Y((f(),h(T,{size:"large",data:l(r).lists},{default:n(()=>[t(i,{label:"规则名称",prop:"name","min-width":"120"}),t(i,{label:"关键词",prop:"keyword","min-width":"120"}),t(i,{label:"匹配方式","min-width":"120"},{default:n(({row:a})=>[m(w(l(k)(a.matching_type)),1)]),_:1}),t(i,{label:"回复类型","min-width":"120"},{default:n(({row:a})=>[m(w(l(C)(a.content_type)),1)]),_:1}),t(i,{label:"状态","min-width":"120"},{default:n(({row:a})=>[t(S,{modelValue:a.status,"onUpdate:modelValue":u=>a.status=u,"active-value":1,"inactive-value":0,onChange:u=>$(a.id)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),t(i,{label:"排序",prop:"sort","min-width":"120"}),t(i,{label:"操作",width:"120",fixed:"right"},{default:n(({row:a})=>[t(_,{type:"primary",link:"",onClick:u=>E(a)},{default:n(()=>e[4]||(e[4]=[m(" 编辑 ")])),_:2},1032,["onClick"]),t(_,{type:"danger",link:"",onClick:u=>R(a.id)},{default:n(()=>e[5]||(e[5]=[m(" 删除 ")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[D,l(r).loading]]),v("div",te,[t(B,{modelValue:l(r),"onUpdate:modelValue":e[1]||(e[1]=a=>Z(r)?r.value=a:null),onChange:l(s)},null,8,["modelValue","onChange"])])]),_:1}),l(d)?(f(),h(G,{key:0,ref_key:"editRef",ref:p,onSuccess:l(s),onClose:e[2]||(e[2]=a=>d.value=!1)},null,8,["onSuccess"])):ee("",!0)])}}});export{Pe as default};
