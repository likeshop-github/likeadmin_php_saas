import{A as q,B as H,g as Z,C as J,G as Q,H as W,m as X,n as Y,o as ee,K as te,O as oe}from"./element-plus-CSiqOtzA.js";import{_ as ne}from"./index.vue_vue_type_script_setup_true_lang-ggB8NA6X.js";import{g as ae,f as x,b as le}from"./index-CE5w02wW.js";import{d as K,Z as $,r as se,ah as re,an as ie,o as s,c as y,V as t,M as o,u as n,ab as B,S as i,O as m,L as p,a as w,i as me,R as de}from"./@vue-TMcuEboY.js";import{a as pe,b as ue,c as _e,d as ce,s as fe}from"./code-uf2HtiPu.js";import{u as ge}from"./usePaging-DFi_nJOG.js";import{_ as be}from"./code-preview.vue_vue_type_script_setup_true_lang-BntpHRJQ.js";import{_ as ye}from"./data-table.vue_vue_type_script_setup_true_lang-mlnBsYEv.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-C2WBhajb.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./nprogress-Cgf5DU8x.js";import"./vue-router-CZY6S6gL.js";import"./pinia-ebUeA1L2.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./@vueuse-DE_336rM.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-KJi31KWJ.js";import"./index-DbnIr1Po.js";const we={class:"code-generation"},ve={class:"flex"},Ce={class:"mt-4"},ke={class:"flex items-center"},Ve={class:"flex justify-end mt-4"},xe=K({name:"codeGenerate"}),mt=K({...xe,setup(Ee){const u=$({table_name:"",table_comment:""}),_=$({show:!1,loading:!1,code:[]}),{pager:f,getLists:b,resetParams:T,resetPage:v}=ge({fetchFun:ce,params:u}),g=se([]),G=a=>{g.value=a.map(({id:e})=>e)},I=async a=>{await x.confirm("确定要同步表结构？"),await fe({id:a})},E=async a=>{await x.confirm("确定要删除？"),await pe({id:a}),b()},N=async a=>{const e=await ue({id:a});_.code=e,_.show=!0},U=a=>a.some(e=>e.generate_type==1),D=async a=>{if(U(a))return x.msgError("生成方式为生成到模块，请在前端开发模式下使用，详细参考文档");const e=await _e({id:a});e.file&&window.open(e.file,"_blank")},F=(a,e)=>{switch(a){case"generate":D([e.id]);break;case"sync":I(e.id);break;case"delete":E(e.id)}};return b(),(a,e)=>{const h=q,C=H,r=Z,L=J,P=Q,k=le,c=W,M=re("router-link"),V=X,R=Y,z=ee,A=te,O=ne,d=ie("perms"),j=oe;return s(),y("div",we,[t(P,{class:"!border-none",shadow:"never"},{default:o(()=>[t(L,{class:"mb-[-16px]",model:n(u),inline:""},{default:o(()=>[t(C,{label:"表名称"},{default:o(()=>[t(h,{class:"w-[280px]",modelValue:n(u).table_name,"onUpdate:modelValue":e[0]||(e[0]=l=>n(u).table_name=l),clearable:"",onKeyup:B(n(v),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),t(C,{label:"表描述"},{default:o(()=>[t(h,{class:"w-[280px]",modelValue:n(u).table_comment,"onUpdate:modelValue":e[1]||(e[1]=l=>n(u).table_comment=l),clearable:"",onKeyup:B(n(v),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),t(C,null,{default:o(()=>[t(r,{type:"primary",onClick:n(v)},{default:o(()=>e[6]||(e[6]=[i("查询")])),_:1},8,["onClick"]),t(r,{onClick:n(T)},{default:o(()=>e[7]||(e[7]=[i("重置")])),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1}),m((s(),p(P,{class:"!border-none mt-4",shadow:"never"},{default:o(()=>[w("div",ve,[m((s(),p(ye,{class:"inline-block mr-[10px]",onSuccess:n(b)},{default:o(()=>[t(r,{type:"primary"},{icon:o(()=>[t(k,{name:"el-icon-Plus"})]),default:o(()=>[e[8]||(e[8]=i(" 导入数据表 "))]),_:1})]),_:1},8,["onSuccess"])),[[d,["tools.generator/selectTable"]]]),m((s(),p(r,{disabled:!n(g).length,onClick:e[2]||(e[2]=l=>E(n(g))),type:"danger"},{icon:o(()=>[t(k,{name:"el-icon-Delete"})]),default:o(()=>[e[9]||(e[9]=i(" 删除 "))]),_:1},8,["disabled"])),[[d,["tools.generator/delete"]]]),m((s(),p(r,{disabled:!n(g).length,onClick:e[3]||(e[3]=l=>D(n(g)))},{default:o(()=>e[10]||(e[10]=[i(" 生成代码 ")])),_:1},8,["disabled"])),[[d,["tools.generator/generate"]]])]),w("div",Ce,[t(A,{data:n(f).lists,size:"large",onSelectionChange:G},{default:o(()=>[t(c,{type:"selection",width:"55"}),t(c,{label:"表名称",prop:"table_name","min-width":"180"}),t(c,{label:"表描述",prop:"table_comment","min-width":"180"}),t(c,{label:"创建时间",prop:"create_time","min-width":"180"}),t(c,{label:"更新时间",prop:"update_time","min-width":"180"}),t(c,{label:"操作",width:"160",fixed:"right"},{default:o(({row:l})=>[w("div",ke,[m((s(),p(r,{type:"primary",link:"",onClick:S=>N(l.id)},{default:o(()=>e[11]||(e[11]=[i(" 预览 ")])),_:2},1032,["onClick"])),[[d,["tools.generator/preview"]]]),t(r,{type:"primary",link:""},{default:o(()=>[m((s(),p(M,{to:{path:n(ae)("tools.generator/edit"),query:{id:l.id}}},{default:o(()=>e[12]||(e[12]=[i(" 编辑 ")])),_:2},1032,["to"])),[[d,["tools.generator/edit"]]])]),_:2},1024),m((s(),p(z,{class:"ml-2",onCommand:S=>F(S,l)},{dropdown:o(()=>[t(R,null,{default:o(()=>[m((s(),y("div",null,[t(V,{command:"generate"},{default:o(()=>[t(r,{type:"primary",link:""},{default:o(()=>e[14]||(e[14]=[i(" 生成代码 ")])),_:1})]),_:1})])),[[d,["tools.generator/generate"]]]),m((s(),y("div",null,[t(V,{command:"sync"},{default:o(()=>[t(r,{type:"primary",link:""},{default:o(()=>e[15]||(e[15]=[i(" 同步 ")])),_:1})]),_:1})])),[[d,["tools.generator/syncColumn"]]]),m((s(),y("div",null,[t(V,{command:"delete"},{default:o(()=>[t(r,{type:"danger",link:""},{default:o(()=>e[16]||(e[16]=[i(" 删除 ")])),_:1})]),_:1})])),[[d,["tools.generator/delete"]]])]),_:1})]),default:o(()=>[t(r,{type:"primary",link:""},{default:o(()=>[e[13]||(e[13]=i(" 更多 ")),t(k,{name:"el-icon-ArrowDown",size:14})]),_:1})]),_:2},1032,["onCommand"])),[[d,["tools.generator/generate","tools.generator/syncColumn","tools.generator/delete"]]])])]),_:1})]),_:1},8,["data"])]),w("div",Ve,[t(O,{modelValue:n(f),"onUpdate:modelValue":e[4]||(e[4]=l=>me(f)?f.value=l:null),onChange:n(b)},null,8,["modelValue","onChange"])])]),_:1})),[[j,n(f).loading]]),n(_).show?(s(),p(be,{key:0,modelValue:n(_).show,"onUpdate:modelValue":e[5]||(e[5]=l=>n(_).show=l),code:n(_).code},null,8,["modelValue","code"])):de("",!0)])}}});export{mt as default};
