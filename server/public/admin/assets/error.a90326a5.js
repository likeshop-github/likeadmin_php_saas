import{i as c}from"./element-plus.38d235ab.js";import{a as u}from"./vue-router.680b42ce.js";import{d,r as _,H as v,o as m,c as f,a as r,K as B,V as i,O as x,P as y,U as g,u as E,T as h}from"./@vue.54440ad7.js";import{d as k}from"./index.710ece9e.js";import"./@element-plus.b60a8dd3.js";import"./lodash-es.2b4cc642.js";import"./dayjs.81aec8fd.js";import"./axios.3cf20ca4.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./nprogress.7e676707.js";import"./pinia.37585b34.js";import"./lodash.7ac10a55.js";import"./@vueuse.30711f4d.js";import"./css-color-function.6ea2e333.js";import"./color.6bf4344d.js";import"./clone.044b0cbf.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./vue-clipboard3.951e3262.js";import"./clipboard.1314d1f4.js";import"./echarts.0909e9bd.js";import"./tslib.60310f1a.js";import"./zrender.91adfe72.js";import"./highlight.js.0fd4a67c.js";import"./@highlightjs.3654fb0a.js";const b={class:"error"},w={class:"error-code"},C={class:"text-lg text-tx-secondary mt-7 mb-7"},D=d({__name:"error",props:{code:String,title:String,showBtn:{type:Boolean,default:!0}},setup(t){const a=t;let o=null;const e=_(5),s=u();return a.showBtn&&(o=setInterval(()=>{e.value===0?(clearInterval(o),s.go(-1)):e.value--},1e3)),v(()=>{o&&clearInterval(o)}),(p,n)=>{const l=c;return m(),f("div",b,[r("div",null,[B(p.$slots,"content",{},()=>[r("div",w,i(t.code),1)],!0),r("div",C,i(t.title),1),t.showBtn?(m(),x(l,{key:0,type:"primary",onClick:n[0]||(n[0]=I=>E(s).go(-1))},{default:y(()=>[g(i(e.value)+" \u79D2\u540E\u8FD4\u56DE\u4E0A\u4E00\u9875 ",1)]),_:1})):h("",!0)])])}}});const mt=k(D,[["__scopeId","data-v-58b95848"]]);export{mt as default};
