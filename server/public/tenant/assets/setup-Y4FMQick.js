import{_ as y}from"./index-CUZIfJRX.js";import{C as V,D as k,I as w,h as C}from"./element-plus-B9ALq7eR.js";import{_ as x}from"./picker-DRQPy4Fb.js";import{a as B,b as D}from"./user-T6ts2E28.js";import{d as l,Z as E,an as S,o as n,c as N,V as e,M as m,a as i,u as a,O as U,L as h,S as j}from"./@vue-TMcuEboY.js";import"./index-Dnfu0Fmw.js";import"./nprogress-Cgf5DU8x.js";import"./balanced-match-mNcR6oh4.js";import"./vue-router-D4MxfuQi.js";import"./pinia-ebUeA1L2.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./@vueuse-BQYVjZ5N.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./@element-plus-BZaexRrS.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-KJi31KWJ.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./dayjs-CMfar2R3.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./index-C-QCDPmx.js";import"./index-DIJjgwt5.js";import"./index.vue_vue_type_script_setup_true_lang-B-ov7tNf.js";import"./index-Bgj7rSdd.js";import"./index-B1hKh7eA.js";import"./index.vue_vue_type_script_setup_true_lang-Be0Cw8SV.js";import"./usePaging-DFi_nJOG.js";import"./vue3-video-play-xg7gp0Bu.js";import"./vuedraggable-OYPBN08G.js";import"./vue-CHxGqOme.js";import"./sortablejs-DdgKbxid.js";const F={class:"user-setup"},I=l({name:"userSetup"}),Et=l({...I,setup(L){const o=E({default_avatar:""}),p=async()=>{try{const r=await B();for(const t in o)o[t]=r[t]}catch(r){console.log("获取=>",r)}},_=async()=>{try{await D(o),p()}catch(r){console.log("保存=>",r)}};return p(),(r,t)=>{const u=x,s=V,c=k,d=w,f=C,v=y,g=S("perms");return n(),N("div",F,[e(d,{shadow:"never",class:"!border-none"},{default:m(()=>[t[2]||(t[2]=i("div",{class:"font-medium mb-7"},"基本设置",-1)),e(c,{ref:"formRef",model:a(o),"label-width":"120px"},{default:m(()=>[e(s,{label:"用户默认头像"},{default:m(()=>[i("div",null,[e(u,{modelValue:a(o).default_avatar,"onUpdate:modelValue":t[0]||(t[0]=b=>a(o).default_avatar=b),limit:1},null,8,["modelValue"])])]),_:1}),e(s,null,{default:m(()=>t[1]||(t[1]=[i("div",null,[i("div",{class:"form-tips"}," 用户注册时给的默认头像，建议尺寸：400*400像素，支持jpg，jpeg，png格式 ")],-1)])),_:1})]),_:1},8,["model"])]),_:1}),U((n(),h(v,null,{default:m(()=>[e(f,{type:"primary",onClick:_},{default:m(()=>t[3]||(t[3]=[j("保存")])),_:1})]),_:1})),[[g,["setting.user.user/setConfig"]]])])}}});export{Et as default};
