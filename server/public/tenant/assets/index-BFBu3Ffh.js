import{h as F,K as I,L as M,I as P,M as j}from"./element-plus-B9ALq7eR.js";import{_ as z}from"./index.vue_vue_type_script_setup_true_lang-B-ov7tNf.js";import{f as K,b as O}from"./index-Dnfu0Fmw.js";import{c as U,d as q}from"./role-CaYlq9GC.js";import{u as G}from"./usePaging-DFi_nJOG.js";import{_ as H}from"./auth.vue_vue_type_script_setup_true_lang-5HkiVNN0.js";import{_ as J}from"./edit.vue_vue_type_script_setup_true_lang-DQ7PmKyH.js";import{d as D,s as g,r as $,an as Q,o as a,c as V,V as t,M as i,a as y,O as u,L as m,S as h,u as n,i as W,R as x,n as C}from"./@vue-TMcuEboY.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-BZaexRrS.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./nprogress-Cgf5DU8x.js";import"./vue-router-D4MxfuQi.js";import"./pinia-ebUeA1L2.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./@vueuse-BQYVjZ5N.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-KJi31KWJ.js";import"./menu-BpqDXkHz.js";import"./index-C-QCDPmx.js";const X={class:"role-lists"},Y={class:"mt-4"},Z={class:"flex justify-end mt-4"},ee=D({name:"role"}),je=D({...ee,setup(te){const c=g(),k=g(),f=$(!1),w=$(!1),{pager:p,getLists:d}=G({fetchFun:q}),E=async()=>{var o;f.value=!0,await C(),(o=c.value)==null||o.open("add")},R=async o=>{var e,l;f.value=!0,await C(),(e=c.value)==null||e.open("edit"),(l=c.value)==null||l.setFormData(o)},B=async o=>{var e,l;w.value=!0,await C(),(e=k.value)==null||e.open(),(l=k.value)==null||l.setFormData(o)},L=async o=>{await K.confirm("确定要删除？"),await U({id:o}),d()};return d(),(o,e)=>{const l=O,_=F,s=I,S=M,N=z,T=P,v=Q("perms"),A=j;return a(),V("div",X,[t(T,{class:"!border-none",shadow:"never"},{default:i(()=>[y("div",null,[u((a(),m(_,{type:"primary",onClick:E},{icon:i(()=>[t(l,{name:"el-icon-Plus"})]),default:i(()=>[e[3]||(e[3]=h(" 新增 "))]),_:1})),[[v,["auth.role/add"]]])]),u((a(),V("div",Y,[y("div",null,[t(S,{data:n(p).lists,size:"large"},{default:i(()=>[t(s,{prop:"id",label:"ID","min-width":"100"}),t(s,{prop:"name",label:"名称","min-width":"150"}),t(s,{prop:"desc",label:"备注","min-width":"150","show-overflow-tooltip":""}),t(s,{prop:"sort",label:"排序","min-width":"100"}),t(s,{prop:"num",label:"管理员人数","min-width":"100"}),t(s,{prop:"create_time",label:"创建时间","min-width":"180"}),t(s,{label:"操作",width:"200",fixed:"right"},{default:i(({row:r})=>[u((a(),m(_,{link:"",type:"primary",onClick:b=>R(r)},{default:i(()=>e[4]||(e[4]=[h(" 编辑 ")])),_:2},1032,["onClick"])),[[v,["auth.role/edit"]]]),u((a(),m(_,{link:"",type:"primary",onClick:b=>B(r)},{default:i(()=>e[5]||(e[5]=[h(" 分配权限 ")])),_:2},1032,["onClick"])),[[v,["auth.role/edit"]]]),u((a(),m(_,{link:"",type:"danger",onClick:b=>L(r.id)},{default:i(()=>e[6]||(e[6]=[h(" 删除 ")])),_:2},1032,["onClick"])),[[v,["auth.role/delete"]]])]),_:1})]),_:1},8,["data"])]),y("div",Z,[t(N,{modelValue:n(p),"onUpdate:modelValue":e[0]||(e[0]=r=>W(p)?p.value=r:null),onChange:n(d)},null,8,["modelValue","onChange"])])])),[[A,n(p).loading]])]),_:1}),n(f)?(a(),m(J,{key:0,ref_key:"editRef",ref:c,onSuccess:n(d),onClose:e[1]||(e[1]=r=>f.value=!1)},null,8,["onSuccess"])):x("",!0),n(w)?(a(),m(H,{key:1,ref_key:"authRef",ref:k,onSuccess:n(d),onClose:e[2]||(e[2]=r=>w.value=!1)},null,8,["onSuccess"])):x("",!0)])}}});export{je as default};
