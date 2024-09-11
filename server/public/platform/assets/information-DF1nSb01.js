import{_ as q}from"./index-BV_jfJnq.js";import{A as j,B as y,F as B,C,g as E}from"./element-plus-Ou0nfccG.js";import{M}from"./picker-CtNTtJq0.js";import{a as D,b as S}from"./website-DNc-B9V7.js";import{u as U}from"./index-BeFadpgT.js";import{d as _,r as F,Z as I,an as N,o as u,c as O,V as t,M as i,a as m,u as r,O as W,L as A,S as L}from"./@vue-pHjCrgw6.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-NId5miUe.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./index-DWydQ7og.js";import"./index-CMbCeRmE.js";import"./index.vue_vue_type_script_setup_true_lang-CslcF2KS.js";import"./index-xL-oGJXP.js";import"./@vueuse-YJSHNXWG.js";import"./usePaging-DPOcKk5Q.js";import"./vue3-video-play-DOrZ4nvR.js";import"./vuedraggable-sl9LAZCB.js";import"./vue-PIt_O_4w.js";import"./sortablejs-DdgKbxid.js";import"./nprogress-Cgf5DU8x.js";import"./vue-router-CoNqKBK4.js";import"./pinia-CJRVDLHa.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-D4DIzBxc.js";const R={class:"website-information"},G={class:"w-80"},P=_({name:"webInformation"}),Fe=_({...P,setup(T){const p=F(),g=U(),o=I({name:"",web_favicon:"",web_logo:"",login_image:""}),f={name:[{required:!0,message:"请输入网站名称",trigger:["blur"]}],web_favicon:[{required:!0,message:"请选择网站图标",trigger:["change"]}],web_logo:[{required:!0,message:"请选择网站logo",trigger:["change"]}],login_image:[{required:!0,message:"请选择登录页广告图",trigger:["change"]}]},d=async()=>{const a=await D();for(const e in o)o[e]=a[e]},c=async()=>{var a;await((a=p.value)==null?void 0:a.validate()),await S(o),g.getConfig(),d()};return d(),(a,e)=>{const b=j,n=y,s=M,w=B,v=C,V=E,x=q,k=N("perms");return u(),O("div",R,[t(v,{ref_key:"formRef",ref:p,rules:f,class:"ls-form",model:r(o),"label-width":"120px","scroll-to-error":""},{default:i(()=>[t(w,{shadow:"never",class:"!border-none"},{default:i(()=>[e[7]||(e[7]=m("div",{class:"text-xl font-medium mb-[20px]"},"后台设置",-1)),t(n,{label:"平台名称",prop:"name"},{default:i(()=>[m("div",G,[t(b,{modelValue:r(o).name,"onUpdate:modelValue":e[0]||(e[0]=l=>r(o).name=l),modelModifiers:{trim:!0},placeholder:"请输入网站名称",maxlength:"30","show-word-limit":""},null,8,["modelValue"])])]),_:1}),t(n,{label:"平台图标",prop:"web_favicon",required:""},{default:i(()=>[m("div",null,[t(s,{modelValue:r(o).web_favicon,"onUpdate:modelValue":e[1]||(e[1]=l=>r(o).web_favicon=l),limit:1},null,8,["modelValue"]),e[4]||(e[4]=m("div",{class:"form-tips"},"建议尺寸：100*100像素，支持jpg，jpeg，png格式",-1))])]),_:1}),t(n,{label:"平台LOGO",prop:"web_logo",required:""},{default:i(()=>[m("div",null,[t(s,{modelValue:r(o).web_logo,"onUpdate:modelValue":e[2]||(e[2]=l=>r(o).web_logo=l),modelModifiers:{trim:!0},limit:1},null,8,["modelValue"]),e[5]||(e[5]=m("div",{class:"form-tips"},"建议尺寸：100*100像素，支持jpg，jpeg，png格式",-1))])]),_:1}),t(n,{label:"登录页配图",prop:"login_image",required:""},{default:i(()=>[m("div",null,[t(s,{modelValue:r(o).login_image,"onUpdate:modelValue":e[3]||(e[3]=l=>r(o).login_image=l),modelModifiers:{trim:!0},limit:1},null,8,["modelValue"]),e[6]||(e[6]=m("div",{class:"form-tips"},"建议尺寸：100*100像素，支持jpg，jpeg，png格式",-1))])]),_:1})]),_:1})]),_:1},8,["model"]),W((u(),A(x,null,{default:i(()=>[t(V,{type:"primary",onClick:c},{default:i(()=>e[8]||(e[8]=[L("保存")])),_:1})]),_:1})),[[k,["setting.web.web_setting/setWebsite"]]])])}}});export{Fe as default};
