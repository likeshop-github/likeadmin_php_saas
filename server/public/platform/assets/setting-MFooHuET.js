import{_ as y}from"./index-BV_jfJnq.js";import{F as k,B,A as I,C as M,g as x}from"./element-plus-Ou0nfccG.js";import{M as C}from"./picker-CtNTtJq0.js";import{a as S,f as l,B as F}from"./index-BeFadpgT.js";import{d as f,r as N,Z as _,o as q,c as R,V as e,M as a,u as s,a as n,S as A}from"./@vue-pHjCrgw6.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-NId5miUe.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./index-DWydQ7og.js";import"./index-CMbCeRmE.js";import"./index.vue_vue_type_script_setup_true_lang-CslcF2KS.js";import"./index-xL-oGJXP.js";import"./@vueuse-YJSHNXWG.js";import"./usePaging-DPOcKk5Q.js";import"./vue3-video-play-DOrZ4nvR.js";import"./vuedraggable-sl9LAZCB.js";import"./vue-PIt_O_4w.js";import"./sortablejs-DdgKbxid.js";import"./nprogress-Cgf5DU8x.js";import"./vue-router-CoNqKBK4.js";import"./pinia-CJRVDLHa.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-D4DIzBxc.js";const D={class:"user-setting"},P={class:"w-80"},T={class:"w-80"},Z={class:"w-80"},j={class:"w-80"},z={class:"w-80"},G=f({name:"userSetting"}),qo=f({...G,setup(H){const i=N(),u=S(),o=_({avatar:"",account:"",name:"",password_old:"",password:"",password_confirm:""}),c=_({avatar:[{required:!0,message:"头像不能为空",trigger:["change"]}],name:[{required:!0,message:"请输入名称",trigger:["blur"]}]}),w=async()=>{const p=u.userInfo;for(const r in o)o[r]=p[r]},g=async()=>{if(o.password_old||o.password||o.password_confirm){if(!o.password_old)return l.msgError("请输入当前密码");if(!o.password)return l.msgError("请输入新的密码");if(!o.password_confirm)return l.msgError("请输入确定密码");if(o.password_confirm!=o.password)return l.msgError("两次输入的密码不一样")}if(o.password_old&&o.password&&o.password_confirm){if(o.password_old.length<6||o.password_old.length>32)return l.msgError("密码长度在6到32之间");if(o.password.length<6||o.password.length>32)return l.msgError("密码长度在6到32之间");if(o.password_confirm.length<6||o.password_confirm.length>32)return l.msgError("密码长度在6到32之间")}await F(o),u.getUserInfo()},V=async()=>{var p;await((p=i.value)==null?void 0:p.validate()),g()};return w(),(p,r)=>{const v=C,m=B,d=I,b=M,E=k,h=x,U=y;return q(),R("div",D,[e(E,{class:"!border-none",shadow:"never"},{default:a(()=>[e(b,{ref_key:"formRef",ref:i,class:"ls-form",model:s(o),rules:s(c),"label-width":"100px"},{default:a(()=>[e(m,{label:"头像：",prop:"avatar"},{default:a(()=>[e(v,{modelValue:s(o).avatar,"onUpdate:modelValue":r[0]||(r[0]=t=>s(o).avatar=t),limit:1},null,8,["modelValue"])]),_:1}),e(m,{label:"账号：",prop:"account"},{default:a(()=>[n("div",P,[e(d,{modelValue:s(o).account,"onUpdate:modelValue":r[1]||(r[1]=t=>s(o).account=t),disabled:""},null,8,["modelValue"])])]),_:1}),e(m,{label:"名称：",prop:"name"},{default:a(()=>[n("div",T,[e(d,{modelValue:s(o).name,"onUpdate:modelValue":r[2]||(r[2]=t=>s(o).name=t),placeholder:"请输入名称"},null,8,["modelValue"])])]),_:1}),e(m,{label:"当前密码：",prop:"password_old"},{default:a(()=>[n("div",Z,[e(d,{modelValue:s(o).password_old,"onUpdate:modelValue":r[3]||(r[3]=t=>s(o).password_old=t),modelModifiers:{trim:!0},placeholder:"修改密码时必填, 不修改密码时留空",type:"password","show-password":""},null,8,["modelValue"])])]),_:1}),e(m,{label:"新的密码：",prop:"password"},{default:a(()=>[n("div",j,[e(d,{modelValue:s(o).password,"onUpdate:modelValue":r[4]||(r[4]=t=>s(o).password=t),modelModifiers:{trim:!0},placeholder:"修改密码时必填, 不修改密码时留空",type:"password","show-password":""},null,8,["modelValue"])])]),_:1}),e(m,{label:"确定密码：",prop:"password_confirm"},{default:a(()=>[n("div",z,[e(d,{modelValue:s(o).password_confirm,"onUpdate:modelValue":r[5]||(r[5]=t=>s(o).password_confirm=t),modelModifiers:{trim:!0},placeholder:"修改密码时必填, 不修改密码时留空",type:"password","show-password":""},null,8,["modelValue"])])]),_:1})]),_:1},8,["model","rules"])]),_:1}),e(U,null,{default:a(()=>[e(h,{type:"primary",onClick:V},{default:a(()=>r[6]||(r[6]=[A("保存")])),_:1})]),_:1})])}}});export{qo as default};
