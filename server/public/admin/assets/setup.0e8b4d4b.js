import{_ as B}from"./index.e220379e.js";import{D,F as E,I as g,i as h}from"./element-plus.38d235ab.js";import{_ as b}from"./picker.302dcce3.js";import{a as y,b as A}from"./user.a1901014.js";import{d as n,a1 as k,an as w,o as s,c as V,X as e,P as r,u as i,a,Q as x,O as S,U}from"./@vue.54440ad7.js";import"./index.710ece9e.js";import"./nprogress.7e676707.js";import"./axios.3cf20ca4.js";import"./vue-router.680b42ce.js";import"./pinia.37585b34.js";import"./lodash.7ac10a55.js";import"./@vueuse.30711f4d.js";import"./css-color-function.6ea2e333.js";import"./color.6bf4344d.js";import"./clone.044b0cbf.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./@element-plus.b60a8dd3.js";import"./vue-clipboard3.951e3262.js";import"./clipboard.1314d1f4.js";import"./echarts.0909e9bd.js";import"./tslib.60310f1a.js";import"./zrender.91adfe72.js";import"./highlight.js.0fd4a67c.js";import"./@highlightjs.3654fb0a.js";import"./lodash-es.2b4cc642.js";import"./dayjs.81aec8fd.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.064358bd.js";import"./index.0d29dffc.js";import"./index.vue_vue_type_script_setup_true_lang.b907e3aa.js";import"./index.377bebf7.js";import"./index.872549eb.js";import"./index.vue_vue_type_script_setup_true_lang.e53972ab.js";import"./usePaging.86c68137.js";import"./vue3-video-play.2cf5a54a.js";import"./vuedraggable.461c77fe.js";import"./vue.ec9c14f3.js";import"./sortablejs.722b7518.js";const N={class:"user-setup"},j=a("div",{class:"font-medium mb-7"},"\u57FA\u672C\u8BBE\u7F6E",-1),I=a("div",null,[a("div",{class:"form-tips"}," \u7528\u6237\u6CE8\u518C\u65F6\u7ED9\u7684\u9ED8\u8BA4\u5934\u50CF\uFF0C\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A400*400\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F ")],-1),O=n({name:"userSetup"}),xt=n({...O,setup(P){const t=k({default_avatar:""}),u=async()=>{try{const o=await y();for(const m in t)t[m]=o[m]}catch(o){console.log("\u83B7\u53D6=>",o)}},l=async()=>{try{await A(t),u()}catch(o){console.log("\u4FDD\u5B58=>",o)}};return u(),(o,m)=>{const _=b,p=D,c=E,d=g,f=h,F=B,C=w("perms");return s(),V("div",N,[e(d,{shadow:"never",class:"!border-none"},{default:r(()=>[j,e(c,{ref:"formRef",model:i(t),"label-width":"120px"},{default:r(()=>[e(p,{label:"\u7528\u6237\u9ED8\u8BA4\u5934\u50CF"},{default:r(()=>[a("div",null,[e(_,{modelValue:i(t).default_avatar,"onUpdate:modelValue":m[0]||(m[0]=v=>i(t).default_avatar=v),limit:1},null,8,["modelValue"])])]),_:1}),e(p,null,{default:r(()=>[I]),_:1})]),_:1},8,["model"])]),_:1}),x((s(),S(F,null,{default:r(()=>[e(f,{type:"primary",onClick:l},{default:r(()=>[U("\u4FDD\u5B58")]),_:1})]),_:1})),[[C,["setting.user.user/setConfig"]]])])}}});export{xt as default};
