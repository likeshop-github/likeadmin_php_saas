import{g as U,H as A,R as z,K as F,G,O as P}from"./element-plus-CSiqOtzA.js";import{M as y,f as H,b as K}from"./index-wB8vo7oM.js";import{a as j,b as q}from"./menu-VVEAZWb5.js";import{u as I}from"./usePaging-DFi_nJOG.js";import{_ as J}from"./edit.vue_vue_type_script_setup_true_lang-BJyobbUI.js";import{d as D,s as T,r as Q,an as W,o as s,c as v,V as o,M as i,a as R,O as c,L as m,S as d,u as p,R as g,T as X,n as B}from"./@vue-TMcuEboY.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-C2WBhajb.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./nprogress-Cgf5DU8x.js";import"./vue-router-CZY6S6gL.js";import"./pinia-ebUeA1L2.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./@vueuse-DE_336rM.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-KJi31KWJ.js";import"./index-D6Od-rUl.js";const Y={class:"menu-lists"},Z={key:0},ee={key:1},te={key:2},oe={class:"flex"},ie=D({name:"permission-menu"}),Fe=D({...ie,setup(ae){const w=T(),u=T();let k=!1;const _=Q(!1),{pager:b,getLists:h}=I({fetchFun:q,params:{page_type:0}}),C=async a=>{var e,n;_.value=!0,await B(),a&&((e=u.value)==null||e.setFormData({pid:a})),(n=u.value)==null||n.open("add")},N=async a=>{var e,n;_.value=!0,await B(),(e=u.value)==null||e.open("edit"),(n=u.value)==null||n.getDetail(a)},$=async a=>{await H.confirm("确定要删除？"),await j({id:a}),h()},L=()=>{k=!k,E(b.lists,k)},E=(a,e=!0)=>{var n;for(const l in a)(n=w.value)==null||n.toggleRowExpansion(a[l],e),a[l].children&&E(a[l].children,e)};return h(),(a,e)=>{const n=K,l=U,r=A,O=z,V=F,M=G,f=W("perms"),S=P;return s(),v("div",Y,[o(M,{class:"!border-none",shadow:"never"},{default:i(()=>[R("div",null,[c((s(),m(l,{type:"primary",onClick:e[0]||(e[0]=t=>C())},{icon:i(()=>[o(n,{name:"el-icon-Plus"})]),default:i(()=>[e[2]||(e[2]=d(" 新增 "))]),_:1})),[[f,["auth.menu/add"]]]),o(l,{onClick:L},{default:i(()=>e[3]||(e[3]=[d(" 展开/折叠 ")])),_:1})]),c((s(),m(V,{ref_key:"tableRef",ref:w,class:"mt-4",size:"large",data:p(b).lists,"row-key":"id","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:i(()=>[o(r,{label:"菜单名称",prop:"name","min-width":"150","show-overflow-tooltip":""}),o(r,{label:"类型",prop:"type","min-width":"80"},{default:i(({row:t})=>[t.type==p(y).CATALOGUE?(s(),v("div",Z,"目录")):t.type==p(y).MENU?(s(),v("div",ee,"菜单")):t.type==p(y).BUTTON?(s(),v("div",te,"按钮")):g("",!0)]),_:1}),o(r,{label:"图标",prop:"icon","min-width":"80"},{default:i(({row:t})=>[R("div",oe,[o(n,{name:t.icon,size:20},null,8,["name"])])]),_:1}),o(r,{label:"权限标识",prop:"perms","min-width":"150","show-overflow-tooltip":""}),o(r,{label:"状态",prop:"is_disable","min-width":"100"},{default:i(({row:t})=>[o(O,{type:t.is_disable==0?"primary":"danger"},{default:i(()=>[d(X(t.is_disable==0?"正常":"停用"),1)]),_:2},1032,["type"])]),_:1}),o(r,{label:"排序",prop:"sort","min-width":"100"}),o(r,{label:"更新时间",prop:"update_time","min-width":"180"}),o(r,{label:"操作",width:"160",fixed:"right"},{default:i(({row:t})=>[t.type!==p(y).BUTTON?c((s(),m(l,{key:0,type:"primary",link:"",onClick:x=>C(t.id)},{default:i(()=>e[4]||(e[4]=[d(" 新增 ")])),_:2},1032,["onClick"])),[[f,["auth.menu/add"]]]):g("",!0),c((s(),m(l,{type:"primary",link:"",onClick:x=>N(t)},{default:i(()=>e[5]||(e[5]=[d(" 编辑 ")])),_:2},1032,["onClick"])),[[f,["auth.menu/edit"]]]),c((s(),m(l,{type:"danger",link:"",onClick:x=>$(t.id)},{default:i(()=>e[6]||(e[6]=[d(" 删除 ")])),_:2},1032,["onClick"])),[[f,["auth.menu/delete"]]])]),_:1})]),_:1},8,["data"])),[[S,p(b).loading]])]),_:1}),p(_)?(s(),m(J,{key:0,ref_key:"editRef",ref:u,onSuccess:p(h),onClose:e[1]||(e[1]=t=>_.value=!1)},null,8,["onSuccess"])):g("",!0)])}}});export{Fe as default};
