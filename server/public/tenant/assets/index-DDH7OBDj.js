import{J as A,I as M,l as P,m as B,K as F,_ as U,h as O,L as S,M as z}from"./element-plus-B9ALq7eR.js";import{a as D}from"./message-C9QC4gWX.js";import{u as q}from"./usePaging-DFi_nJOG.js";import{g as I}from"./index-Dnfu0Fmw.js";import{d as y,r as J,Z as K,a4 as Z,ah as j,an as G,o as n,c as g,V as t,M as e,u as i,i as H,U as N,aa as Q,O as v,L as p,S as d}from"./@vue-TMcuEboY.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-BZaexRrS.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./nprogress-Cgf5DU8x.js";import"./vue-router-D4MxfuQi.js";import"./pinia-ebUeA1L2.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./@vueuse-BQYVjZ5N.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-KJi31KWJ.js";const W=y({name:"notice"}),Mt=y({...W,setup(X){let c;(r=>{r[r.USER=1]="USER",r[r.PLATFORM=2]="PLATFORM"})(c||(c={}));const l=J(1),h=[{name:"通知用户",type:1},{name:"通知平台",type:2}],w=K({recipient:l}),{pager:u,getLists:_}=q({fetchFun:D,params:w});return Z(()=>{_()}),_(),(r,o)=>{const T=A,f=M,k=P,E=B,s=F,b=U,L=j("router-link"),C=O,R=S,V=G("perms"),x=z;return n(),g("div",null,[t(f,{class:"!border-none",shadow:"never"},{default:e(()=>[t(T,{type:"warning",title:"温馨提示：平台配置在各个场景下的通知发送方式和内容模板",closable:!1,"show-icon":""})]),_:1}),t(f,{class:"!border-none mt-4",shadow:"never"},{default:e(()=>[t(E,{modelValue:i(l),"onUpdate:modelValue":o[0]||(o[0]=a=>H(l)?l.value=a:null),onTabChange:i(_)},{default:e(()=>[(n(),g(N,null,Q(h,(a,m)=>t(k,{key:m,label:a.name,name:a.type,lazy:""},null,8,["label","name"])),64))]),_:1},8,["modelValue","onTabChange"]),v((n(),p(R,{size:"large",data:i(u).lists},{default:e(()=>[t(s,{label:"通知场景",prop:"scene_name","min-width":"120"}),t(s,{label:"通知类型",prop:"type_desc","min-width":"160"}),t(s,{label:"短信通知","min-width":"80"},{default:e(({row:a})=>{var m;return[((m=a.sms_notice)==null?void 0:m.status)==1?(n(),p(b,{key:0},{default:e(()=>o[1]||(o[1]=[d("开启")])),_:1})):(n(),p(b,{key:1,type:"danger"},{default:e(()=>o[2]||(o[2]=[d("关闭")])),_:1}))]}),_:1}),t(s,{label:"操作","min-width":"80",fixed:"right"},{default:e(({row:a})=>[v((n(),p(C,{type:"primary",link:""},{default:e(()=>[t(L,{to:{path:i(I)("notice.notice/set"),query:{id:a.id}}},{default:e(()=>o[3]||(o[3]=[d(" 设置 ")])),_:2},1032,["to"])]),_:2},1024)),[[V,["notice.notice/set"]]])]),_:1})]),_:1},8,["data"])),[[x,i(u).loading]])]),_:1})])}}});export{Mt as default};
