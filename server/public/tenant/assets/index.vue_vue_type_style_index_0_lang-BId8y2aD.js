import{T as w,E as _}from"./@wangeditor-BvvNszpm.js";import{_ as y}from"./picker-DRQPy4Fb.js";import{j as i}from"./index-Dnfu0Fmw.js";import{d as E,s as m,r as U,b as f,E as k,o as B,c as R,V as u,u as t,i as P,a0 as x}from"./@vue-TMcuEboY.js";const O=E({__name:"index",props:{modelValue:{default:""},mode:{default:"default"},height:{default:"100%"},width:{default:"auto"},toolbarConfig:{default:()=>({})}},emits:["update:modelValue"],setup(p,{emit:c}){const l=p,h=c,a=m(),d=m(),r=U("");let n;const g={MENU_CONF:{uploadImage:{customBrowseAndUpload(e){var o;r.value="image",(o=d.value)==null||o.showPopup(-1),n=e}},uploadVideo:{customBrowseAndUpload(e){var o;r.value="video",(o=d.value)==null||o.showPopup(-1),n=e}}}},C=f(()=>({height:i(l.height),width:i(l.width)})),s=f({get(){return l.modelValue},set(e){h("update:modelValue",e)}}),b=e=>{e.forEach(o=>{n(o)})};k(()=>{const e=a.value;e!=null&&e.destroy()});const v=e=>{a.value=e};return(e,o)=>(B(),R("div",{class:"border border-br flex flex-col",style:x(t(C))},[u(t(w),{class:"border-b border-br",editor:t(a),defaultConfig:e.toolbarConfig,mode:e.mode},null,8,["editor","defaultConfig","mode"]),u(t(_),{class:"flex-1 overflow-hidden",modelValue:t(s),"onUpdate:modelValue":o[0]||(o[0]=V=>P(s)?s.value=V:null),defaultConfig:g,mode:e.mode,onOnCreated:v},null,8,["modelValue","mode"]),u(y,{ref_key:"materialPickerRef",ref:d,type:t(r),limit:-1,"hidden-upload":"",onChange:b},null,8,["type"])],4))}});export{O as _};
