import{A as Z,B as J,g as Q,C as W,G as X,H as Y,p as ee,R as te,d as oe,m as ne,n as ae,o as re,K as ie,O as le}from"./element-plus-CSiqOtzA.js";import{_ as se}from"./index.vue_vue_type_script_setup_true_lang-ggB8NA6X.js";import{a as me,f as pe,b as de}from"./index-CE5w02wW.js";import{_ as _e}from"./index.vue_vue_type_script_setup_true_lang-CuLmC0Sc.js";import{_ as ue}from"./index.vue_vue_type_script_setup_true_lang-B2T1NVEp.js";import{d as P,Z as fe,a4 as ce,ah as ke,an as ve,o as _,c as ge,V as e,M as o,u as n,ab as be,S as p,a as u,O as y,L as v,T,R as V,i as we}from"./@vue-TMcuEboY.js";import{j as $,k as ye}from"./consumer-CZtYGSGA.js";import{u as Ce}from"./usePaging-DFi_nJOG.js";import{u as h}from"./getExposeType-C5XerQxt.js";import Ee from"./add-Dj84fdzU.js";import xe from"./edit-ClBGX3Ff.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-C2WBhajb.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./nprogress-Cgf5DU8x.js";import"./vue-router-CZY6S6gL.js";import"./pinia-ebUeA1L2.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./@vueuse-DE_336rM.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-KJi31KWJ.js";import"./index-DbnIr1Po.js";import"./picker-z1HgETlF.js";import"./index-I_45pbwr.js";import"./index-BdaKcfa6.js";import"./vue3-video-play-xg7gp0Bu.js";import"./vuedraggable-OYPBN08G.js";import"./vue-CHxGqOme.js";import"./sortablejs-DdgKbxid.js";import"./useLockFn-BhPLnZje.js";import"./index.vue_vue_type_script_setup_true_lang-Cgn4PI7x.js";import"./edit.vue_vue_type_script_setup_true_lang-cJEIdFt_.js";import"./department-T_1sBY-J.js";import"./post-c5AU1a0O.js";import"./role-tNVhM5un.js";import"./useDictOptions-Bs4lOVXB.js";import"./index.vue_vue_type_script_setup_true_lang-BimGoBnj.js";import"./detail-CO7dPitt.js";const D=g=>{const c=me().perms,r="*";if(g.length>0){let i=!0;return g.forEach(l=>{!c.includes(l)&&!c.includes(r)&&(i=!1)}),i}else return!0},Re={class:"flex items-center gap-2"},Te={class:"flex items-center"},Ve=["href"],$e={class:"flex justify-end mt-4"},he=P({name:"consumerLists"}),Bt=P({...he,setup(g){const f=h(),c=h(),r=fe({keyword:"",channel:"",create_time_start:"",create_time_end:""}),{pager:i,getLists:l,resetPage:C,resetParams:B}=Ce({fetchFun:$,params:r});ce(()=>{l()});const U=async E=>{await pe.confirm("确定要删除？"),await ye({id:E}),l()};return l(),(E,t)=>{const z=Z,b=J,H=ue,k=Q,L=_e,S=W,x=X,A=de,s=Y,I=ee,K=te,N=ke("arrow-down"),F=oe,w=ne,j=ae,M=re,O=ie,q=se,R=ve("perms"),G=le;return _(),ge("div",null,[e(x,{class:"!border-none",shadow:"never"},{default:o(()=>[e(S,{ref:"formRef",class:"mb-[-16px]",model:n(r),inline:!0},{default:o(()=>[e(b,{label:"租户信息"},{default:o(()=>[e(z,{class:"w-[280px]",modelValue:n(r).keyword,"onUpdate:modelValue":t[0]||(t[0]=a=>n(r).keyword=a),placeholder:"租户名/编号/联系方式/域名别名",clearable:"",onKeyup:be(n(C),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(b,{label:"创建时间"},{default:o(()=>[e(H,{startTime:n(r).create_time_start,"onUpdate:startTime":t[1]||(t[1]=a=>n(r).create_time_start=a),endTime:n(r).create_time_end,"onUpdate:endTime":t[2]||(t[2]=a=>n(r).create_time_end=a)},null,8,["startTime","endTime"])]),_:1}),e(b,null,{default:o(()=>[e(k,{type:"primary",onClick:n(C)},{default:o(()=>t[7]||(t[7]=[p("查询")])),_:1},8,["onClick"]),e(k,{onClick:n(B)},{default:o(()=>t[8]||(t[8]=[p("重置")])),_:1},8,["onClick"]),e(L,{class:"ml-2.5","fetch-fun":n($),params:n(r),"page-size":n(i).size},null,8,["fetch-fun","params","page-size"])]),_:1})]),_:1},8,["model"])]),_:1}),e(x,{class:"!border-none mt-4",shadow:"never"},{default:o(()=>[u("div",null,[y((_(),v(k,{type:"primary",onClick:t[3]||(t[3]=a=>{var d;return(d=n(c))==null?void 0:d.openHandle()})},{icon:o(()=>[e(A,{name:"el-icon-Plus"})]),default:o(()=>[t[9]||(t[9]=p(" 新增 "))]),_:1})),[[R,["tenant.tenant/add"]]])]),y((_(),v(O,{class:"mt-4",size:"large",data:n(i).lists},{default:o(()=>[e(s,{label:"编号",prop:"sn",width:"120"}),e(s,{label:"头像",width:"90",align:"center"},{default:o(({row:a})=>[e(I,{src:a.avatar,size:50},null,8,["src"])]),_:1}),e(s,{label:"租户名称",prop:"name","min-width":"200"}),e(s,{label:"联系方式",prop:"tel","min-width":"150"}),e(s,{label:"用户数量",prop:"users_count","min-width":"100"},{default:o(({row:a})=>[e(k,{type:"primary",link:"",onClick:d=>{var m;return(m=n(f))==null?void 0:m.openHandle(a.id,!1,"users")}},{default:o(()=>[p(T(a.users_count),1)]),_:2},1032,["onClick"])]),_:1}),e(s,{label:"状态","min-width":"80"},{default:o(({row:a})=>[e(K,{type:a.disable===0?"primary":"info"},{default:o(()=>[p(T(a.disable===0?"开启":"关闭"),1)]),_:2},1032,["type"])]),_:1}),e(s,{label:"创建时间",prop:"create_time","min-width":"200"}),e(s,{label:"操作",width:"120",fixed:"right"},{default:o(({row:a})=>[u("div",Re,[y((_(),v(k,{type:"primary",link:"",onClick:d=>{var m;return(m=n(f))==null?void 0:m.openHandle(a.id)}},{default:o(()=>t[10]||(t[10]=[p(" 详情 ")])),_:2},1032,["onClick"])),[[R,["tenant.tenant/detail"]]]),e(M,null,{dropdown:o(()=>[e(j,null,{default:o(()=>[e(w,null,{default:o(()=>[u("a",{href:a.domain,target:"_blank"},"进入后台",8,Ve)]),_:2},1024),n(D)(["tenant.tenant/edit"])?(_(),v(w,{key:0,onClick:d=>{var m;return(m=n(f))==null?void 0:m.openHandle(a.id,!0)}},{default:o(()=>t[12]||(t[12]=[p(" 编辑 ")])),_:2},1032,["onClick"])):V("",!0),n(D)(["tenant.tenant/delete"])?(_(),v(w,{key:1,divided:"",onClick:d=>U(a.id)},{default:o(()=>t[13]||(t[13]=[u("span",{class:"text-danger"}," 删除 ",-1)])),_:2},1032,["onClick"])):V("",!0)]),_:2},1024)]),default:o(()=>[u("span",Te,[t[11]||(t[11]=p(" 更多 ")),e(F,null,{default:o(()=>[e(N)]),_:1})])]),_:2},1024)])]),_:1})]),_:1},8,["data"])),[[G,n(i).loading]]),u("div",$e,[e(q,{modelValue:n(i),"onUpdate:modelValue":t[4]||(t[4]=a=>we(i)?i.value=a:null),onChange:n(l)},null,8,["modelValue","onChange"])])]),_:1}),e(xe,{ref_key:"editRef",ref:f,onRefresh:t[5]||(t[5]=a=>n(l)())},null,512),e(Ee,{ref_key:"addRef",ref:c,onRefresh:t[6]||(t[6]=a=>n(l)())},null,512)])}}});export{Bt as default};
