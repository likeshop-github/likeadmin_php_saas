import{i as B,I as g}from"./element-plus.e82904ed.js";import{d as k,r as C,n as S,F as T,o as r,c as b,a as p,K as f,X as V,aa as $,P as l,U as s,V as i,O as m,T as v,R as E}from"./@vue.54440ad7.js";import{d as _}from"./index.a9f0184b.js";const w=k({props:{title:{type:String,default:""},content:{type:String,default:""},confirmButtonText:{type:[String,Boolean],default:"\u786E\u5B9A"},cancelButtonText:{type:[String,Boolean],default:"\u53D6\u6D88"},width:{type:String,default:"400px"},disabled:{type:Boolean,default:!1},async:{type:Boolean,default:!1},clickModalClose:{type:Boolean,default:!1},center:{type:Boolean,default:!1},customClass:{type:String,default:""}},emits:["confirm","cancel","close","open"],setup(e,{emit:o}){const t=C(!1),u=n=>{o(n),(!e.async||n==="cancel")&&d()},d=()=>{t.value=!1,S(()=>{o("close")})},c=()=>{e.disabled||(o("open"),t.value=!0)};return T("visible",t),{visible:t,handleEvent:u,close:d,open:c}}});const h={class:"dialog"},D={class:"dialog-footer"};function N(e,o,t,u,d,c){const n=B,y=g;return r(),b("div",h,[p("div",{class:"dialog__trigger",onClick:o[0]||(o[0]=(...a)=>e.open&&e.open(...a))},[f(e.$slots,"trigger",{},void 0,!0)]),V(y,{modelValue:e.visible,"onUpdate:modelValue":o[3]||(o[3]=a=>e.visible=a),class:E(e.customClass),center:e.center,"append-to-body":!0,width:e.width,"close-on-click-modal":e.clickModalClose,onClosed:e.close},$({footer:l(()=>[p("div",D,[e.cancelButtonText?(r(),m(n,{key:0,onClick:o[1]||(o[1]=a=>e.handleEvent("cancel"))},{default:l(()=>[s(i(e.cancelButtonText),1)]),_:1})):v("",!0),e.confirmButtonText?(r(),m(n,{key:1,type:"primary",onClick:o[2]||(o[2]=a=>e.handleEvent("confirm"))},{default:l(()=>[s(i(e.confirmButtonText),1)]),_:1})):v("",!0)])]),default:l(()=>[f(e.$slots,"default",{},()=>[s(i(e.content),1)],!0)]),_:2},[e.title?{name:"header",fn:l(()=>[s(i(e.title),1)]),key:"0"}:void 0]),1032,["modelValue","class","center","width","close-on-click-modal","onClosed"])])}const U=_(w,[["render",N],["__scopeId","data-v-a5e5144a"]]);export{U as P};
